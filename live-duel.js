        // ============================================================
        //  LIVE-DUELL (jeder auf eigenem Handy)
        // ============================================================
        let liveDuelRef = null;
        let liveDuelUnsubscribe = null;
        let liveDuelType = "quiz";
        let isLiveDuelCreator = false;
        let liveDuelResolving = false;
        let liveDuelTimerInterval = null;
        let liveDuelAutoAdvanceTimer = null;
        let liveDuelRenderKey = "";
        let liveDuelInputLockUntil = 0;
        let liveDuelUsedWords = new Set();
        let liveDuelHeartbeat = null;

        const SCRABBLE_ANSWER_SECONDS = { leicht: 30, mittel: 20, schwer: 15, experte: 12, profi: 35 };

        function openLiveDuelSetup(type) {
            liveDuelType = type;
            document.getElementById("live-duel-setup-title").innerText = type === "scrabble" ? "🔤 Live-Wortduell" :
                "⚔️ Live-Quizduell";
            document.getElementById("live-duel-quiz-options").classList.toggle("hidden", type !== "quiz");
            document.getElementById("live-duel-scrabble-options").classList.toggle("hidden", type !== "scrabble");
            if (type === "quiz") setupCategorySelectors("live-duel-area", "live-duel-category");
            switchView('live-duel-setup');
        }

        function liveDuelCollectionRef() {
            return db.collection("parents").doc(currentParentUser.uid).collection("live_duel");
        }

        function maybeStartHostHeartbeat() {
            if (liveDuelHeartbeat || !liveDuelRef || !isLiveDuelCreator) return;
            const beat = () => {
                if (liveDuelRef && isLiveDuelCreator) liveDuelRef.update({
                    hostLastSeen: Date.now()
                }).catch(() => { });
            };
            beat();
            liveDuelHeartbeat = setInterval(beat, 12000);
        }

        function stopHostHeartbeat() {
            if (liveDuelHeartbeat) {
                clearInterval(liveDuelHeartbeat);
                liveDuelHeartbeat = null;
            }
        }

        function clearLiveDuelTimers() {
            if (liveDuelTimerInterval) {
                clearInterval(liveDuelTimerInterval);
                liveDuelTimerInterval = null;
            }
            if (liveDuelAutoAdvanceTimer) {
                clearInterval(liveDuelAutoAdvanceTimer);
                liveDuelAutoAdvanceTimer = null;
            }
        }

        async function createLiveDuel() {
            if (!currentPlayer || !activePlayerKey) return showToast(
                "Bitte zuerst oben deinen Spieler auswählen!", "error");
            const ref = liveDuelCollectionRef().doc();
            let lobbyData;
            if (liveDuelType === "scrabble") {
                const difficulty = document.getElementById("live-duel-difficulty").value;
                const totalRounds = parseInt(document.getElementById("live-duel-rounds").value);
                const requireLetter = !!(document.getElementById("live-duel-require-letter") || {}).checked;
                const wordMode = (document.getElementById("live-duel-wordmode") || {}).value || "kids";
                liveDuelUsedWords = new Set();
                lobbyData = {
                    type: "scrabble",
                    status: "waiting",
                    difficulty,
                    totalRounds,
                    currentRound: 0,
                    requireLetter,
                    wordMode,
                    answerSeconds: SCRABBLE_ANSWER_SECONDS[difficulty] || 20,
                    createdBy: activePlayerKey,
                    players: {}
                };
            } else {
                const category = document.getElementById("live-duel-category").value;
                const questions = prepareQuestions(questionsForKey(category).sort(() => Math.random() - 0.5).slice(0,
                    10));
                if (questions.length < 3) return showToast("Zu wenige Fragen für dieses Thema!", "error");
                lobbyData = {
                    type: "quiz",
                    status: "waiting",
                    questions,
                    currentIndex: 0,
                    answerSeconds: parseInt(document.getElementById("live-duel-speed").value) || 20,
                    createdBy: activePlayerKey,
                    players: {}
                };
            }
            lobbyData.players[activePlayerKey] = {
                name: currentPlayer.name,
                score: 0,
                hasAnswered: false,
                lastAnswer: null,
                word: "",
                coinsClaimed: false
            };
            lobbyData.createdByName = currentPlayer.name;
            lobbyData.createdAt = Date.now();
            lobbyData.hostLastSeen = Date.now();
            try {
                await ref.set(lobbyData);
                liveDuelRef = ref;
                isLiveDuelCreator = true;
                liveDuelResolving = false;
                liveDuelRenderKey = "";
                maybeStartHostHeartbeat();
                subscribeLiveDuel();
            } catch (e) { handleError("createLiveDuel", e, "Das Duell konnte nicht erstellt werden."); }
        }

        async function joinLiveDuelById(lobbyId) {
            if (!currentParentUser || !currentPlayer || !activePlayerKey) return showToast(
                "Bitte zuerst deinen Spieler auswählen, dann beitreten!", "error");
            if (!lobbyId) return;
            const ref = liveDuelCollectionRef().doc(lobbyId);
            try {
                const snap = await ref.get();
                if (!snap.exists) return showToast("Dieses Duell gibt es nicht mehr.", "error");
                const data = snap.data();
                if (data.status === "finished") return showToast("Dieses Duell ist schon beendet.", "error");

                const wasAlreadyIn = !!(data.players && data.players[activePlayerKey]);
                const midGame = (data.status === "playing" || data.status === "reveal");
                if (!wasAlreadyIn) {
                    await ref.update({
                        [`players.${activePlayerKey}`]: {
                            name: currentPlayer.name,
                            score: 0,
                            hasAnswered: false,
                            lastAnswer: null,
                            word: "",
                            coinsClaimed: false,
                            pending: midGame
                        }
                    });
                }
                liveDuelType = data.type;
                liveDuelRef = ref;
                isLiveDuelCreator = (data.createdBy === activePlayerKey);
                liveDuelResolving = false;
                liveDuelRenderKey = "";
                maybeStartHostHeartbeat();
                showToast(wasAlreadyIn ? "Willkommen zurück im Duell!" : (midGame ?
                    "Du bist dabei – es geht in der nächsten Runde los!" :
                    "Du bist dabei!"));
                subscribeLiveDuel();
            } catch (e) { handleError("joinLiveDuel", e, "Beitreten hat nicht geklappt."); }
        }

        function subscribeLiveDuel() {
            if (liveDuelUnsubscribe) liveDuelUnsubscribe();
            liveDuelUnsubscribe = liveDuelRef.onSnapshot((doc) => {
                if (!doc.exists) return;
                renderLiveDuelFromSnapshot(doc.data());
            });
        }

        async function forceResolveLiveDuel() {
            if (!isLiveDuelCreator || !liveDuelRef) return;
            clearLiveDuelTimers();
            try {
                const snap = await liveDuelRef.get();
                if (snap.exists && snap.data().status === "playing" && !liveDuelResolving) {
                    liveDuelResolving = true;
                    resolveLiveDuelRound(snap.data());
                }
            } catch (e) { }
        }

        function startLiveDuelCountdown(deadline) {
            clearLiveDuelTimers();
            const el = document.getElementById("live-duel-countdown");
            const tick = () => {
                const left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
                if (el) el.innerText = left > 0 ? left + "s" : "⏰";
                if (left > 0 && left <= 5) SFX.tick();
                if (left <= 0) {
                    clearLiveDuelTimers();
                    if (isLiveDuelCreator && !liveDuelResolving) {
                        liveDuelResolving = true;
                        SFX.timeUp();
                        liveDuelRef.get().then(d => { if (d.exists) resolveLiveDuelRound(d.data()); });
                    }
                }
            };
            tick();
            liveDuelTimerInterval = setInterval(tick, 1000);
        }

        // ============================================================
        // VERBESSERTE renderLiveDuelFromSnapshot FÜR ACTION-MODE
        // ============================================================

        function renderLiveDuelFromSnapshot(data) {
            const myData = data.players[activePlayerKey];
            if (!myData) return;

            const _fr = document.getElementById("live-duel-force-resolve");
            if (_fr) _fr.classList.add("hidden");

            isLiveDuelCreator = (data.createdBy === activePlayerKey);
            if (isLiveDuelCreator && data.status !== "finished") maybeStartHostHeartbeat();
            else stopHostHeartbeat();

            if (data.status === "waiting") {
                clearLiveDuelTimers();
                const list = document.getElementById("live-duel-player-list");
                if (list) list.innerHTML = Object.values(data.players).map(p =>
                    `<div class="bg-white/5 border border-white/5 rounded-xl p-3 text-center"><div class="text-2xl">🙋</div><div class="font-bold text-white text-sm mt-1">${esc(p.name)}</div></div>`
                ).join("");
                document.getElementById("live-duel-start-btn").classList.toggle("hidden", !isLiveDuelCreator);
                document.getElementById("live-duel-wait-hint").classList.toggle("hidden", isLiveDuelCreator);
                const _clWrap = document.getElementById("live-duel-lobby-code-wrap");
                const _clCode = document.getElementById("live-duel-lobby-code");
                if (_clWrap) _clWrap.classList.toggle("hidden", !data.code);
                if (_clCode) _clCode.innerText = data.code || "";
                switchView('live-duel-lobby');
                return;
            }

            if (data.status === "playing") {
                liveDuelResolving = false;

                if (myData.pending) {
                    renderLiveDuelPending(data);
                    switchView('live-duel-play');
                    return;
                }

                // NEU: Prüfen ob sich die Buchstaben geändert haben (für Scrabble)
                const isScrabble = data.type === "scrabble";
                if (isScrabble && data.currentLetters && !myData.hasAnswered) {
                    // Prüfen ob sich die Buchstaben seit dem letzten Render geändert haben
                    const lettersKey = data.currentLetters.join('');
                    if (lettersKey !== liveDuelRenderKey) {
                        liveDuelRenderKey = lettersKey;
                        // UI mit neuen Buchstaben aktualisieren
                        renderLiveDuelScrabblePlay(data);
                        // Action-Feedback anzeigen (wenn nicht die erste Runde)
                        if (data.currentRound > 1 || liveDuelChangeCount > 0) {
                            showLiveDuelActionFeedback("⚡ Die Buchstaben haben sich geändert!");
                        }
                    }
                }

                // Nur rendern wenn nötig
                if (!myData.hasAnswered) {
                    if (data.type === "scrabble") {
                        // Nur rendern wenn es noch nicht gerendert wurde oder sich was geändert hat
                        const key = `playing|${data.type}|${data.currentRound}|${data.currentLetters ? data.currentLetters.join('') : ''}|${myData.hasAnswered}`;
                        if (key !== liveDuelRenderKey || data.currentLetters) {
                            liveDuelRenderKey = key;
                            renderLiveDuelScrabblePlay(data);
                        }
                    } else {
                        const key = `playing|${data.type}|${data.currentIndex}|${myData.hasAnswered}`;
                        if (key !== liveDuelRenderKey) {
                            liveDuelRenderKey = key;
                            renderLiveDuelQuizPlay(data);
                        }
                    }
                } else {
                    renderLiveDuelWaitingForOthers(data);
                }

                const activePl = Object.values(data.players).filter(p => !p.pending);
                const ansCount = activePl.filter(p => p.hasAnswered).length;
                const totalCount = activePl.length;
                const statusEl = document.getElementById("live-duel-status");
                if (statusEl) statusEl.innerText = `${ansCount}/${totalCount} fertig`;
                const waitEl = document.getElementById("live-duel-answer-counter");
                if (waitEl) waitEl.innerText = `${ansCount} von ${totalCount} haben geantwortet...`;

                if (data.answerDeadline) {
                    if (!liveDuelTimerInterval) startLiveDuelCountdown(data.answerDeadline);
                } else if (isLiveDuelCreator) {
                    // Ghost-Schutz: Ersteller setzt einmalig eine Rundendeadline
                    const _secs = data.type === "quiz" ? 30 : 60;
                    liveDuelRef.update({ answerDeadline: Date.now() + _secs * 1000 });
                } else {
                    clearLiveDuelTimers();
                    const cd = document.getElementById("live-duel-countdown");
                    if (cd) cd.innerText = "";
                }

                // "Trotzdem auflösen"-Knopf nur für Ersteller, solange nicht alle fertig
                const forceBtn = document.getElementById("live-duel-force-resolve");
                if (forceBtn) forceBtn.classList.toggle("hidden", !(isLiveDuelCreator && ansCount < totalCount));

                if (isLiveDuelCreator && !liveDuelResolving && totalCount > 0 && ansCount >= totalCount) {
                    liveDuelResolving = true;
                    setTimeout(() => resolveLiveDuelRound(data), 400);
                }
                switchView('live-duel-play');
                return;
            }

            if (data.status === "reveal") {
                clearLiveDuelTimers();
                stopLiveDuelActionMode(); // <-- Action-Mode stoppen wenn aufgelöst wird

                if (myData.pending) {
                    renderLiveDuelPending(data);
                    switchView('live-duel-play');
                    return;
                }
                const cd = document.getElementById("live-duel-countdown");
                if (cd) cd.innerText = "";
                const statusEl = document.getElementById("live-duel-status");
                if (statusEl) statusEl.innerText = "Auflösung";
                liveDuelRenderKey = "";
                renderLiveDuelReveal(data);
                switchView('live-duel-play');

                const isQuiz = data.type === "quiz";
                const isLastStep = isQuiz ? (data.currentIndex >= data.questions.length - 1) : (data.currentRound >= data.totalRounds);
                if (!isLastStep) {
                    const erkl = isQuiz && data.questions[data.currentIndex] ?
                        (data.questions[data.currentIndex].explanation || "") : "";
                    let left = Math.round(Math.min(10, Math.max(5, 3 + erkl.length / 15)));
                    const cdEl = () => document.getElementById("live-duel-auto-countdown");
                    const tick = () => {
                        const el = cdEl();

                        if (el) el.innerText = left + "s";
                        if (left <= 0) {
                            clearLiveDuelTimers();
                            if (isLiveDuelCreator) advanceLiveDuel();
                            return;
                        }
                        left--;
                    };
                    tick();
                    liveDuelAutoAdvanceTimer = setInterval(tick, 1000);
                }
                return;
            }

            if (data.status === "finished") {
                clearLiveDuelTimers();
                stopLiveDuelActionMode(); // <-- Action-Mode stoppen wenn beendet

                if (!myData.coinsClaimed) {
                    currentPlayer.coins += (myData.score || 0);
                    savePlayerProgress();
                    liveDuelRef.update({ [`players.${activePlayerKey}.coinsClaimed`]: true });
                }
                renderLiveDuelFinalResult(data);
                switchView('live-duel-result');
            }
        }
        function renderLiveDuelPending(data) {
            document.getElementById("live-duel-play-content").innerHTML = `
                            <div class="glass-card h-[70vh] rounded-3xl flex flex-col items-center justify-center p-8 text-center text-white shadow-inner">
                                <div class="text-7xl mb-6 animate-pulse">⏳</div>
                                <h2 class="text-2xl font-black mb-2">Du bist dabei!</h2>
                                <p class="text-gray-400 font-bold">Die aktuelle Runde läuft noch – du steigst automatisch ein, sobald die nächste Runde beginnt.</p>
                            </div>`;
        }

        function renderLiveDuelWaitingForOthers(data) {
            const ansCount = Object.values(data.players).filter(p => p.hasAnswered).length;
            const totalCount = Object.keys(data.players).length;
            document.getElementById("live-duel-play-content").innerHTML = `
                            <div class="glass-card h-[70vh] rounded-3xl flex flex-col items-center justify-center p-8 text-center text-white shadow-inner">
                                <div class="text-7xl mb-6 animate-spin">⏳</div>
                                <h2 class="text-2xl font-black mb-2">Eingereicht!</h2>
                                <p id="live-duel-answer-counter" class="text-gray-400 font-bold">${ansCount} von ${totalCount} haben geantwortet...</p>
                            </div>`;
        }

        function renderLiveDuelQuizPlay(data) {
            const q = data.questions[data.currentIndex];
            let optsHtml = "";
            q.answers.forEach((ans, i) => {
                optsHtml +=
                    `<button onclick="submitLiveDuelQuizAnswer(${i})" class="w-full p-4 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-white border border-white/5 transition-colors">${ans}</button>`;
            });
            document.getElementById("live-duel-play-content").innerHTML = `
                            <div class="glass-card p-5 text-center space-y-4 shadow-lg">
                                <div class="text-xs text-gray-400 font-bold">Frage ${data.currentIndex + 1}/${data.questions.length}</div>
                                <h2 class="text-lg font-bold text-pink-400 leading-snug">${q.question}</h2>
                                <div class="flex flex-col gap-2.5">${optsHtml}</div>
                            </div>`;
            liveDuelInputLockUntil = Date.now() + 450;
        }

        async function submitLiveDuelQuizAnswer(ansIndex) {
            if (Date.now() < liveDuelInputLockUntil) return;
            SFX.tap();
            const snap = await liveDuelRef.get();
            const data = snap.data();
            if (!data || data.status !== "playing") return;
            let players = data.players;
            if (!players[activePlayerKey] || players[activePlayerKey].hasAnswered) return;
            const update = {
                [`players.${activePlayerKey}.hasAnswered`]: true,
                [`players.${activePlayerKey}.lastAnswer`]: ansIndex,
                [`players.${activePlayerKey}.answeredAt`]: Date.now()
            };
            if (!data.answerDeadline) update.answerDeadline = Date.now() + (data.answerSeconds || 20) * 1000;
            await liveDuelRef.update(update);
        }



        // ============================================================
        // VERBESSERTE renderLiveDuelScrabblePlay
        // ============================================================

        function renderLiveDuelScrabblePlay(data) {
            // Stelle sicher, dass currentLetters existiert
            const letters = data.currentLetters || [];
            const required = data.currentRequired || "";

            document.getElementById("live-duel-play-content").innerHTML = `
        <div class="space-y-4">
            <div class="text-center text-xs font-bold text-gray-400">
                Runde ${data.currentRound}/${data.totalRounds}
                ${data.actionMode ? ' ⚡ Action-Modus' : ''}
            </div>
            <div class="flex flex-wrap justify-center gap-2" id="live-duel-tiles-container">
                ${scrabbleTilesHTML(letters, false, required)}
            </div>
            <div class="glass-card p-5 space-y-3">
                <input type="text" id="live-duel-word-input" placeholder="Dein Wort..." autocomplete="off"
                    class="input-modern text-xl font-black text-center uppercase tracking-widest">
                <button onclick="submitLiveDuelWord()" class="btn-primary w-full text-center" style="background:var(--gradient-green);box-shadow:0 4px 24px rgba(16,185,129,0.3);">Wort einreichen ✅</button>
            </div>
        </div>`;

            // Eingabefeld fokussieren
            setTimeout(() => {
                const input = document.getElementById("live-duel-word-input");
                if (input) {
                    input.focus();
                    // Bei Buchstaben-Änderung: leeren und fokussieren
                    if (liveDuelChangeCount > 0) {
                        input.value = "";
                    }
                }
            }, 100);

            liveDuelInputLockUntil = Date.now() + 450;
        }


        async function submitLiveDuelWord() {
            if (Date.now() < liveDuelInputLockUntil) return;
            const inputEl = document.getElementById("live-duel-word-input");
            const word = inputEl ? cleanInput(inputEl.value, 20) : "";
            if (!word) {
                SFX.wrong();
                showToast("Bitte zuerst ein Wort eingeben.", "error", "word");
                if (inputEl) inputEl.focus();
                return;
            }
            if (inputEl) inputEl.disabled = true;
            SFX.tap();
            const snap = await liveDuelRef.get();
            const data = snap.data();
            if (!data || data.status !== "playing") return;
            let players = data.players;
            if (!players[activePlayerKey] || players[activePlayerKey].hasAnswered) return;
            const update = {
                [`players.${activePlayerKey}.hasAnswered`]: true,
                [`players.${activePlayerKey}.word`]: word,
                [`players.${activePlayerKey}.answeredAt`]: Date.now(),
                [`players.${activePlayerKey}.submittedLetters`]: data.currentLetters || [],
                [`players.${activePlayerKey}.submittedRequired`]: data.currentRequired || ""
            };
            if (!data.answerDeadline) update.answerDeadline = Date.now() + (data.answerSeconds || 20) * 1000;
            await liveDuelRef.update(update);
        }


        async function resolveLiveDuelRound(data) {
            const fresh = await liveDuelRef.get();
            if (!fresh.exists || fresh.data().status !== "playing") return;
            data = fresh.data();
            const players = data.players;

            if (data.type === "quiz") {
                const q = data.questions[data.currentIndex];
                const correct = q.correct;
                const wrongNames = [];

                let firstKey = null, firstAt = Infinity;
                Object.keys(players).forEach(key => {
                    if (players[key].pending) return;
                    if (players[key].lastAnswer === correct && players[key].answeredAt && players[key].answeredAt < firstAt) {
                        firstAt = players[key].answeredAt;
                        firstKey = key;
                    }
                });

                Object.keys(players).forEach(key => {
                    if (players[key].pending) return;
                    const isRight = players[key].lastAnswer === correct;
                    if (isRight) {
                        players[key].answerStreak = (players[key].answerStreak || 0) + 1;
                        const isFirst = (key === firstKey);
                        const b = (typeof calcAnswerBonus === "function")
                            ? calcAnswerBonus(players[key].answerStreak, isFirst)
                            : { bonus: 0, parts: [] };
                        const points = 10 + b.bonus;
                        players[key].score = (players[key].score || 0) + points;
                        players[key].lastRoundPoints = points;
                        players[key].lastRoundDetail = b.parts.join(" · ");
                    } else {
                        players[key].answerStreak = 0;
                        players[key].lastRoundPoints = 0;
                        players[key].lastRoundDetail = "";
                        wrongNames.push(players[key].name);
                    }
                });

                const review = Array.isArray(data.review) ? data.review : [];
                if (wrongNames.length > 0) {
                    review.push({
                        question: q.question,
                        correctAnswer: q.answers[correct],
                        explanation: q.explanation || "",
                        wrongNames
                    });
                }
                await liveDuelRef.update({
                    status: "reveal",
                    players,
                    correctAnswer: correct,
                    answerDeadline: null,
                    review
                });
            } else {
                // ============================================================
                // SCRABBLE AUSWERTUNG - MIT GESPEICHERTEN BUCHSTABEN
                // ============================================================
                for (const key of Object.keys(players)) {
                    if (players[key].pending) continue;

                    // NEU: Die gespeicherten Buchstaben dieses Spielers verwenden
                    const letters = players[key].submittedLetters || data.currentLetters || [];
                    const required = players[key].submittedRequired || data.currentRequired || "";

                    // Debug-Ausgabe (kann später entfernt werden)
                    console.log(`🔍 Prüfe ${players[key].name}: Wort="${players[key].word}", Buchstaben=${letters.join(',')}, Required=${required}`);

                    const res = await evaluateScrabbleWord(
                        players[key].word,
                        letters,  // ← Individuelle Buchstaben pro Spieler!
                        {
                            minWord: (SCRABBLE_DIFFICULTIES[data.difficulty] || {}).minWord,
                            required: required,
                            used: liveDuelUsedWords,
                            addToUsed: false
                        }
                    );

                    players[key].wordStatus = res.status;
                    players[key].wordChecked = players[key].word;
                    players[key]._basePoints = res.points || 0;
                    console.log(`  → ${res.status}: +${res.points} Punkte`);
                }

                let firstKey = null, firstAt = Infinity;
                Object.keys(players).forEach(key => {
                    if (players[key].pending) return;
                    if (players[key].wordStatus === "valid" && players[key].answeredAt && players[key].answeredAt < firstAt) {
                        firstAt = players[key].answeredAt;
                        firstKey = key;
                    }
                });

                Object.keys(players).forEach(key => {
                    if (players[key].pending) return;
                    let pts = players[key]._basePoints || 0;
                    const parts = [];
                    if (pts > 0) {
                        players[key].answerStreak = (players[key].answerStreak || 0) + 1;
                        const isFirst = (key === firstKey);
                        const b = (typeof calcAnswerBonus === "function")
                            ? calcAnswerBonus(players[key].answerStreak, isFirst)
                            : { bonus: 0, parts: [] };
                        pts += b.bonus;
                        parts.push(...(b.parts || []));
                    } else {
                        players[key].answerStreak = 0;
                    }
                    players[key].score = (players[key].score || 0) + pts;
                    players[key].lastRoundPoints = pts;
                    players[key].lastRoundDetail = parts.join(" · ");
                    delete players[key]._basePoints;
                });

                Object.keys(players).forEach(k => {
                    if (players[k].wordStatus === "valid" && players[k].word) {
                        liveDuelUsedWords.add(String(players[k].word).toUpperCase());
                    }
                });
                await liveDuelRef.update({ status: "reveal", players, answerDeadline: null });

                try {
                    if (activePlayerKey && players[activePlayerKey] && players[activePlayerKey].lastRoundPoints > 0
                        && typeof showPointsPopup === "function") {
                        showPointsPopup(
                            players[activePlayerKey].lastRoundPoints,
                            players[activePlayerKey].lastRoundDetail || ""
                        );
                    }
                } catch (e) { }
            }
        }





        function renderLiveDuelReveal(data) {
            const myData = data.players[activePlayerKey];
            const isQuiz = data.type === "quiz";
            const isLastStep = isQuiz ? (data.currentIndex >= data.questions.length - 1) : (data.currentRound >= data.totalRounds);

            // Punkte-Animation einmal pro Reveal
            try {
                const popKey = "reveal|" + (isQuiz ? data.currentIndex : data.currentRound) + "|" + (myData && myData.lastRoundPoints);
                if (myData && myData.lastRoundPoints > 0 && liveDuelRenderKey !== popKey) {
                    liveDuelRenderKey = popKey;
                    if (typeof showPointsPopup === "function") {
                        showPointsPopup(myData.lastRoundPoints, myData.lastRoundDetail || "");
                    }
                }
            } catch (e) { }

            let rowsHtml = "";
            Object.values(data.players).filter(p => !p.pending).sort((a, b) => (b.lastRoundPoints || 0) - (a.lastRoundPoints || 0)).forEach(p => {
                let icon, detail = "";
                if (isQuiz) {
                    icon = p.lastRoundPoints > 0 ? "✅" : "❌";
                } else {
                    const info = wordStatusInfo(p.wordStatus, p);
                    icon = info.icon;
                    detail = info.text ?
                        `<div class="text-[11px] text-gray-500 font-normal mt-0.5">${info.text}</div>` :
                        "";
                }

                // NEU: Buchstaben-Info für Scrabble anzeigen
                let lettersInfo = "";
                if (!isQuiz && p.submittedLetters && p.submittedLetters.length > 0) {
                    const lettersDisplay = p.submittedLetters.join(' ');
                    const requiredDisplay = p.submittedRequired ? ` 📌${p.submittedRequired}` : "";
                    lettersInfo = `<div class="text-[10px] text-gray-600 mt-0.5">📝 ${lettersDisplay}${requiredDisplay}</div>`;
                }

                const wordInfo = isQuiz ? "" : ` <span class="text-amber-300">"${esc(p.word || "-")}"</span>`;
                rowsHtml +=
                    `<div class="flex justify-between items-start bg-white/5 border border-white/5 rounded-xl p-3 gap-2">
                <div class="font-bold text-white text-sm">
                    ${icon} ${esc(p.name)}${wordInfo}${detail}${lettersInfo}
                </div>
                <div class="font-black text-emerald-400 shrink-0">+${p.lastRoundPoints || 0} <span class="text-xs text-gray-500">(Σ ${p.score})</span></div>
            </div>`;
            });

            let solutionHtml = "";
            if (isQuiz) {
                const q = data.questions[data.currentIndex];
                if (q) {
                    const wasRight = myData && myData.lastRoundPoints > 0;
                    solutionHtml = `
                <div class="p-3 bg-white/5 border-l-4 ${wasRight ? "border-emerald-500" : "border-rose-500"} rounded-xl text-left">
                    <div class="text-xs text-gray-400 font-bold mb-1">${q.question}</div>
                    <div class="text-white font-bold text-sm mb-2">Richtig war: <span class="${wasRight ? "text-emerald-300" : "text-rose-300"}">${q.answers[q.correct]}</span></div>
                    <div class="text-gray-300 text-xs">${q.explanation || ""}</div>
                </div>`;
                }
            } else if (data.currentSolution) {
                solutionHtml = `<p class="text-amber-400 font-bold text-center text-sm">💡 Möglich war z.B.: ${data.currentSolution}</p>`;
            }

            const nextBtn = !isLiveDuelCreator ?
                `<p class="text-center text-sm text-gray-400 font-bold py-2">⏳ Warte auf den Ersteller…</p>` :
                (isLastStep ?
                    `<button onclick="liveDuelRef.update({status:'finished'})" class="btn-primary w-full text-center text-lg" style="background:var(--gradient-amber);box-shadow:0 4px 24px rgba(245,158,11,0.3);">Endergebnis zeigen 🏆</button>` :
                    `<button onclick="advanceLiveDuel()" class="btn-primary w-full text-center text-lg">Weiter ➔</button>`);

            document.getElementById("live-duel-play-content").innerHTML = `
        <div class="glass-card p-5 rounded-2xl space-y-3 shadow-lg">
            <h2 class="text-lg font-black text-white text-center">Runde ${isQuiz ? (data.currentIndex + 1) : data.currentRound} – Ergebnisse</h2>
            ${solutionHtml}
            <div class="space-y-2">${rowsHtml}</div>
            ${nextBtn}
            ${isLastStep ? "" : `<p class="text-[11px] text-gray-500 text-center">Weiter in <span id="live-duel-auto-countdown" class="font-bold text-gray-400">…</span>${isLiveDuelCreator ? ` – oder jetzt auf "Weiter" tippen.` : ""}</p>`}
        </div>`;
        }


        async function advanceLiveDuel() {
            if (!isLiveDuelCreator) return;
            clearLiveDuelTimers();
            stopLiveDuelActionMode();

            const snap = await liveDuelRef.get();
            if (!snap.exists) return;
            const data = snap.data();
            if (data.status !== "reveal") return;

            let players = data.players;
            Object.keys(players).forEach(k => {
                players[k].hasAnswered = false;
                players[k].lastAnswer = null;
                players[k].word = "";
                players[k].pending = false;
                // NEU: Gespeicherte Buchstaben zurücksetzen
                players[k].submittedLetters = [];
                players[k].submittedRequired = "";
                players[k].submittedSolution = "";
                players[k].wordStatus = null;
                players[k].lastRoundPoints = 0;
            });

            if (data.type === "quiz") {
                await liveDuelRef.update({
                    status: "playing",
                    currentIndex: data.currentIndex + 1,
                    players,
                    answerDeadline: null
                });
            } else {
                const rack = generateScrabbleRack(data.difficulty, !!data.requireLetter, data.wordMode);
                await liveDuelRef.update({
                    status: "playing",
                    currentRound: data.currentRound + 1,
                    currentLetters: rack.letters,
                    currentSolution: rack.solution,
                    currentRequired: rack.required || "",
                    players,
                    answerDeadline: null
                });
                if (data.actionMode) {
                    startLiveDuelActionMode({
                        difficulty: data.difficulty,
                        requireLetter: data.requireLetter,
                        wordMode: data.wordMode,
                        actionMode: data.actionMode
                    });
                }
            }
        }



        function startLiveDuelRound() {
            if (liveDuelType === "scrabble") {
                liveDuelRef.get().then(doc => {
                    const data = doc.data();
                    let players = data.players;
                    Object.keys(players).forEach(k => {
                        players[k].hasAnswered = false;
                        players[k].word = "";
                        players[k].pending = false;
                        // NEU: Gespeicherte Buchstaben zurücksetzen
                        players[k].submittedLetters = [];
                        players[k].submittedRequired = "";
                        players[k].submittedSolution = "";
                        players[k].wordStatus = null;
                        players[k].lastRoundPoints = 0;
                    });
                    const rack = generateScrabbleRack(data.difficulty, !!data.requireLetter, data.wordMode);
                    liveDuelRef.update({
                        status: "playing",
                        currentRound: 1,
                        currentLetters: rack.letters,
                        currentSolution: rack.solution,
                        currentRequired: rack.required || "",
                        players,
                        answerDeadline: null
                    }).then(() => {
                        if (data.actionMode) {
                            startLiveDuelActionMode({
                                difficulty: data.difficulty,
                                requireLetter: data.requireLetter,
                                wordMode: data.wordMode,
                                actionMode: data.actionMode
                            });
                        }
                    });
                });
            } else {
                liveDuelRef.get().then(doc => {
                    let players = doc.data().players;
                    Object.keys(players).forEach(k => {
                        players[k].hasAnswered = false;
                        players[k].lastAnswer = null;
                        players[k].pending = false;
                    });
                    liveDuelRef.update({ status: "playing", currentIndex: 0, players, answerDeadline: null });
                });
            }
        }



        async function restartLiveDuel() {
            if (!liveDuelRef) return;
            stopLiveDuelActionMode();

            const snap = await liveDuelRef.get();
            if (!snap.exists) return showToast("Diese Runde gibt es nicht mehr.", "error", "round");
            const data = snap.data();

            const players = data.players || {};
            if (Object.keys(players).length === 0) return showToast("Keine Spieler mehr in der Runde.", "error");
            Object.keys(players).forEach(k => {
                players[k].score = 0;
                players[k].hasAnswered = false;
                players[k].lastAnswer = null;
                players[k].word = "";
                players[k].coinsClaimed = false;
                players[k].lastRoundPoints = 0;
                players[k].wordStatus = null;
                players[k].pending = false;
                // NEU: Gespeicherte Buchstaben zurücksetzen
                players[k].submittedLetters = [];
                players[k].submittedRequired = "";
                players[k].submittedSolution = "";
            });

            try {
                if (data.type === "scrabble") {
                    const difficulty = (document.getElementById("again-difficulty") || {}).value || data.difficulty || "mittel";
                    const totalRounds = parseInt((document.getElementById("again-rounds") || {}).value) || data.totalRounds || 5;
                    const requireLetter = !!data.requireLetter;
                    liveDuelUsedWords = new Set();
                    const rack = generateScrabbleRack(difficulty, requireLetter, data.wordMode);
                    await liveDuelRef.update({
                        status: "playing",
                        difficulty,
                        totalRounds,
                        currentRound: 1,
                        requireLetter,
                        wordMode: data.wordMode || "kids",
                        answerSeconds: SCRABBLE_ANSWER_SECONDS[difficulty] || 20,
                        currentLetters: rack.letters,
                        currentSolution: rack.solution,
                        currentRequired: rack.required || "",
                        answerDeadline: null,
                        players,
                        review: []
                    });
                    if (data.actionMode) {
                        startLiveDuelActionMode({
                            difficulty: difficulty,
                            requireLetter: requireLetter,
                            wordMode: data.wordMode || "kids",
                            actionMode: data.actionMode
                        });
                    }
                } else {
                    const catSel = document.getElementById("again-category");
                    const category = (catSel && catSel.value) ? catSel.value : data.category;
                    const questions = prepareQuestions(
                        questionsForKey(category).sort(() => Math.random() - 0.5).slice(0, 10)
                    );
                    if (questions.length < 3) return showToast("Zu wenige Fragen für dieses Thema!", "error");
                    await liveDuelRef.update({
                        status: "playing",
                        category,
                        questions,
                        currentIndex: 0,
                        answerDeadline: null,
                        correctAnswer: null,
                        players,
                        review: []
                    });
                }
                liveDuelResolving = false;
                liveDuelRenderKey = "";
                SFX.tap();
                showToast("Neue Runde gestartet – alle sind dabei! 🚀");
            } catch (e) {
                handleError("restartLiveDuel", e, "Die neue Runde konnte nicht gestartet werden.");
            }
        }


        function toggleDuelReview(forceOpen) {
            const wrapper = document.getElementById("duel-review-wrapper");
            const arrow = document.getElementById("duel-review-arrow");
            if (!wrapper) return;
            const open = (typeof forceOpen === "boolean") ? forceOpen : wrapper.classList.contains("hidden");
            wrapper.classList.toggle("hidden", !open);
            if (arrow) arrow.style.transform = open ? "rotate(180deg)" : "rotate(0deg)";
        }

        function renderLiveDuelFinalResult(data) {
            const sorted = Object.values(data.players).sort((a, b) => b.score - a.score);
            const medals = ["🥇", "🥈", "🥉"];
            const isCoop = data.mode === "coop";
            let html;
            if (isCoop) {
                const teamTotal = sorted.reduce((s, p) => s + (p.score || 0), 0);
                html = `<div class="glass-card-glow p-8 text-center space-y-4" style="border-color:rgba(16,185,129,0.15);">
                            <div class="text-6xl">🤝</div>
                            <h2 class="text-2xl font-black text-white mb-2">Zusammen geschafft!</h2>
                            <div class="text-5xl font-black text-emerald-400">${teamTotal} Pkt.</div>
                            <p class="text-gray-400 font-bold -mt-1">gemeinsam gesammelt</p>
                            <div class="space-y-3 max-w-sm mx-auto">`;
                sorted.forEach((p) => {
                    html += `<div class="flex items-center justify-between bg-white/5 border border-white/5 rounded-xl p-3">
                                    <div class="flex items-center gap-3"><span class="text-2xl">🙂</span><span class="font-bold text-white">${esc(p.name)}</span></div>
                                    <div class="font-black text-emerald-300">${p.score} Pkt.</div>
                                </div>`;
                });
                html += `</div>`;
            } else {
                html = `<div class="glass-card-glow p-8 text-center space-y-4" style="border-color:rgba(245,158,11,0.15);">
                            <div class="text-6xl">🏆</div>
                            <h2 class="text-2xl font-black text-white mb-2">Duell beendet!</h2>
                            <div class="space-y-3 max-w-sm mx-auto">`;
                sorted.forEach((p, i) => {
                    const medal = i < 3 ? medals[i] : `${i + 1}.`;
                    html += `<div class="flex items-center justify-between bg-white/5 border ${i === 0 ? 'border-yellow-400' : 'border-white/5'} rounded-xl p-3">
                                    <div class="flex items-center gap-3"><span class="text-2xl">${medal}</span><span class="font-bold text-white">${esc(p.name)}</span></div>
                                    <div class="font-black text-yellow-400">${p.score} Pkt.</div>
                                </div>`;
                });
                html += `</div>`;
            }

            const review = Array.isArray(data.review) ? data.review : [];
            if (review.length > 0) {
                html += `<div class="mt-6 text-left space-y-2">
                                <button onclick="toggleDuelReview()" id="duel-review-btn"
                                    class="w-full p-3.5 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between hover:bg-white/10 transition">
                                    <span class="font-black text-indigo-300 text-sm">📚 Das lohnt sich zu merken</span>
                                    <span class="flex items-center gap-2">
                                        <span class="text-xs font-bold text-gray-400 bg-white/10 px-2 py-0.5 rounded-full">${review.length}</span>
                                        <span id="duel-review-arrow" class="text-gray-400 transition-transform">▼</span>
                                    </span>
                                </button>
                                <div id="duel-review-wrapper" class="hidden space-y-2 max-h-[40vh] overflow-y-auto pr-1">`;
                review.forEach(r => {
                    html += `<div class="bg-white/5 border-l-4 border-indigo-500 rounded-xl p-3">
                                    <div class="text-xs text-gray-400 font-bold mb-1">${r.question}</div>
                                    <div class="text-sm text-white font-bold mb-1">Richtig: <span class="text-emerald-300">${r.correctAnswer}</span></div>
                                    ${r.explanation ? `<div class="text-[11px] text-gray-400 mb-1">${r.explanation}</div>` : ""}
                                    <div class="text-[11px] text-gray-500">Nochmal anschauen: ${esc((r.wrongNames || []).join(", "))}</div>
                                </div>`;
                });
                html += `</div></div>`;
            }

            const names = esc(Object.values(data.players).map(p => p.name).join(", "));
            if (isLiveDuelCreator) {
                html += `
                                <div class="glass-card p-4 mt-6 space-y-3 text-left" style="border-color:rgba(99,102,241,0.15);">
                                    <p class="text-sm font-black text-indigo-300 text-center">🔄 Gleich weiterspielen</p>
                                    <p class="text-[11px] text-gray-400 text-center -mt-2">Alle bleiben dabei: ${names}</p>
                                    ${data.type === "quiz" ? `
                                        <select id="again-area" class="input-modern text-sm font-bold"></select>
                                        <select id="again-category" class="input-modern text-sm font-bold"></select>
                                    ` : `
                                        <select id="again-difficulty" class="input-modern text-sm font-bold">
                                            <option value="leicht">🟢 Leicht (6 Buchstaben, 70 Sek.)</option>
                                            <option value="mittel" selected>🟡 Mittel (7 Buchstaben, ab 3, 55 Sek.)</option>
                                            <option value="schwer">🔴 Schwer (8 Buchstaben, 40 Sek.)</option>
                                            <option value="experte">🟣 Experte (9 Buchstaben, 30 Sek.)</option>
                                            <option value="profi">🔥 Profi (14 Buchstaben, nur schwere Wörter)</option>
                                        </select>
                                        <select id="again-rounds" class="input-modern text-sm font-bold">
                                            <option value="3">3 Runden</option>
                                            <option value="5" selected>5 Runden</option>
                                            <option value="8">8 Runden</option>
                                        </select>
                                    `}
                                    <button onclick="restartLiveDuel()" class="btn-primary w-full text-center" style="background:var(--gradient-green);box-shadow:0 4px 24px rgba(16,185,129,0.3);">Neue Runde starten 🚀</button>
                                </div>`;
            } else {
                html += `<p class="text-xs text-gray-400 font-bold mt-6">Bleib dran – ${sorted.length > 1 ? "die nächste Runde" : "eine neue Runde"} kann gleich starten.</p>`;
            }

            html += `
                            <button onclick="leaveLiveDuel()" class="btn-secondary w-full text-center mt-3 text-sm">⬅ Zurück</button>
                        </div>`;
            document.getElementById("live-duel-result-content").innerHTML = html;

            if (isLiveDuelCreator && data.type === "quiz" && document.getElementById("again-area")) {
                setupCategorySelectors("again-area", "again-category", "alle");
            }

            liveDuelRenderKey = "";
            renderFamilyHub();
            try { if (typeof confetti === 'function') confetti(); } catch (e) { }
            SFX.win();
        }

        async function leaveLiveDuel() {
            clearLiveDuelTimers();
            stopHostHeartbeat();
            const ref = liveDuelRef;
            const wasCreator = isLiveDuelCreator;

            if (liveDuelUnsubscribe) { try { liveDuelUnsubscribe(); } catch (e) { } }
            liveDuelUnsubscribe = null;
            liveDuelRef = null;
            isLiveDuelCreator = false;
            liveDuelResolving = false;
            liveDuelRenderKey = "";
            switchView(currentPlayer ? 'menu' : 'family-hub');

            if (!ref) return;
            try {
                if (wasCreator) {
                    try { await ref.set({ status: "finished" }, { merge: true }); } catch (e) { }
                    try { await ref.delete(); } catch (e) { }
                    return;
                }
                if (!activePlayerKey) return;
                const snap = await ref.get();
                if (!snap.exists) return;
                const data = snap.data();
                const players = Object.assign({}, data.players || {});
                delete players[activePlayerKey];
                const rest = Object.keys(players);
                if (rest.length === 0) {
                    await ref.delete();
                } else {
                    await ref.update({ players: players, updatedAt: Date.now() });
                }
            } catch (e) { /* Lobby war schon weg */ }
        }

        // ============================================================
        //  OPEN DUEL & TV LISTENER
        // ============================================================
        let openDuelWatcher = null;

        function stopWatchingForOpenDuel() {
            if (openDuelWatcher) {
                openDuelWatcher();
                openDuelWatcher = null;
            }
        }

        function watchForOpenDuel() {
            stopWatchingForOpenDuel();
            if (!currentParentUser) return;
            try {
                openDuelWatcher = liveDuelCollectionRef().onSnapshot((snap) => {
                    renderOpenDuelsList(snap);
                }, () => { });
            } catch (e) { }
        }

        function renderOpenDuelsList(snap) {
            const box = document.getElementById("open-duels-list");
            if (!box) return;
            const now = Date.now();
            const STALE = 90000;
            let html = "";
            snap.forEach(docSnap => {
                const d = docSnap.data() || {};
                const alive = (now - (d.hostLastSeen || d.createdAt || 0)) < STALE;
                if (d.status === "finished" || !alive) {
                    docSnap.ref.delete().catch(() => { });
                    return;
                }
                const count = d.players ? Object.keys(d.players).length : 0;
                const running = d.status !== "waiting";
                const icon = d.type === "scrabble" ? "🔤" : "⚔️";
                const typeName = d.type === "scrabble" ? "Wort-Duell" : "Quiz-Duell";
                const who = esc(d.createdByName || "jemandem");
                const state = running ? "läuft – einsteigen" : "offen – beitreten";
                html += `<button onclick="joinLiveDuelById('${docSnap.id}')" class="w-full p-3.5 glass-card text-white font-bold rounded-2xl shadow-md flex items-center justify-between gap-2 text-sm transition-all ${running ? "" : "border-indigo-400/30 animate-pulse"}">
                                <span class="flex items-center gap-2"><span class="text-lg">${icon}</span><span>${typeName} von ${who}</span></span>
                                <span class="text-[11px] text-indigo-200 shrink-0 text-right">🔥 ${state}<br>(${count} dabei)</span>
                            </button>`;
            });
            box.innerHTML = html;
        }

        let tvLobbyWatcher = null;

        function tvLobbyDocRef() {
            if (!currentParentUser) return null;
            return db.collection("parents").doc(currentParentUser.uid).collection("tv_game").doc("lobby");
        }

        function watchForOpenTVLobby() {
            const ref = tvLobbyDocRef();
            if (!ref) return;
            stopWatchingForOpenTVLobby();
            tvLobbyWatcher = ref.onSnapshot(renderOpenTVBar, () => { });
        }

        function stopWatchingForOpenTVLobby() {
            if (tvLobbyWatcher) { try { tvLobbyWatcher(); } catch (e) { } tvLobbyWatcher = null; }
            const box = document.getElementById("open-tv-list");
            if (box) box.innerHTML = "";
        }

        function renderOpenTVBar(snap) {
            const box = document.getElementById("open-tv-list");
            if (!box) return;
            const d = (snap && snap.exists) ? (snap.data() || {}) : {};
            const alreadyIn = d.players && d.players[activePlayerKey];
            if (d.status !== "waiting" || isTVHost || alreadyIn) { box.innerHTML = ""; return; }
            const typeName = d.mode === "scrabble" ? "TV-Wort-Quiz" : "TV-Quiz";
            const count = d.players ? Object.keys(d.players).length : 0;
            box.innerHTML =
                `<button onclick="switchView('tv-quiz-player');joinTVGame()" class="w-full p-3.5 glass-card border-2 border-indigo-400/30 animate-pulse text-white font-bold rounded-2xl shadow-md flex items-center justify-between gap-2 text-sm transition-all">
                                <span class="flex items-center gap-2"><span class="text-lg">📺</span><span>${typeName} – am Fernseher</span></span>
                                <span class="text-[11px] text-indigo-200 shrink-0 text-right">🔥 offen – beitreten<br>(${count} dabei)</span>
                            </button>`;
        }

        // ============================================================
        // ACTION-MODE FÜR LIVE-WORTDUELL
        // ============================================================

        let liveDuelActionInterval = null;
        let liveDuelChangeCount = 0;
        const LIVE_DUEL_MAX_CHANGES = 5;


        // ============================================================
        // ACTION-MODE FÜR LIVE-WORTDUELL - MIT OPTIMIERTEN ZEITEN
        // ============================================================

        // ============================================================
        // EINHEITLICHES ACTION-MODE TIMING (fuer Live-Duell, Scrabble, TV)
        // Zufall bleibt, aber gleicher Rahmen in JEDEM Spiel + Mindestabstand.
        // ============================================================
        const ACTION_TIMINGS = {
            leicht: { firstChange: 8, minGap: 6, maxGap: 10, maxChanges: 4 },
            mittel: { firstChange: 10, minGap: 8, maxGap: 12, maxChanges: 3 },
            schwer: { firstChange: 12, minGap: 10, maxGap: 15, maxChanges: 3 },
            experte: { firstChange: 15, minGap: 12, maxGap: 18, maxChanges: 2 },
            profi: { firstChange: 18, minGap: 15, maxGap: 22, maxChanges: 2 }
        };
        function getActionTiming(difficulty) {
            return ACTION_TIMINGS[difficulty] || ACTION_TIMINGS.mittel;
        }
        // Zufaelliger Abstand (Sekunden) im festen Rahmen, nie kuerzer als minGap
        function actionRandomGap(t) {
            return t.minGap + Math.random() * (t.maxGap - t.minGap);
        }
        function getActionModeTimings(difficulty) {
            return getActionTiming(difficulty);
        }

        function startLiveDuelActionMode(data) {
            // Prüfen ob Action Mode aktiv ist
            if (!data || !data.actionMode) {
                console.log("Live-Duell: Action Mode nicht aktiv");
                return;
            }

            // Alten Timer stoppen
            if (liveDuelActionInterval) {
                clearTimeout(liveDuelActionInterval);
                liveDuelActionInterval = null;
            }

            // Timings für diese Schwierigkeitsstufe holen
            const timings = getActionModeTimings(data.difficulty || "mittel");
            liveDuelActionTimings = timings;
            liveDuelChangeCount = 0;
            liveDuelMaxChanges = timings.maxChanges;

            console.log(`🔄 Live-Duell Action Mode gestartet (${timings.maxChanges} Änderungen, erste nach ${timings.firstChange}s)`);

            // Action-Status für alle sichtbar machen
            const statusEl = document.getElementById("live-duel-status");
            if (statusEl) {
                const currentText = statusEl.innerText || "";
                if (!currentText.includes("⚡")) {
                    statusEl.innerText = "⚡ " + currentText;
                }
            }

            // Erste Änderung nach festgelegter Zeit
            liveDuelActionInterval = setTimeout(() => {
                if (liveDuelChangeCount >= timings.maxChanges) {
                    stopLiveDuelActionMode();
                    return;
                }

                // Buchstaben ändern
                changeLiveDuelLetters();
                liveDuelChangeCount++;

                // Naechste Aenderung planen - zufaellig, aber im festen Rahmen
                if (liveDuelChangeCount < timings.maxChanges) {
                    scheduleLiveDuelChange(actionRandomGap(timings));
                } else {
                    // Letzte Aenderung durchgefuehrt, sauber beenden
                    setTimeout(() => {
                        if (liveDuelActionInterval) {
                            stopLiveDuelActionMode();
                            showLiveDuelActionFeedback("⏰ Action-Modus beendet!");
                        }
                    }, timings.maxGap * 1000 + 2000);
                }
            }, timings.firstChange * 1000);
        }

        function scheduleLiveDuelChange(delaySeconds) {
            if (!liveDuelRef) return;

            const timings = liveDuelActionTimings || getActionTiming("mittel");
            // Abstand zufaellig, aber immer >= Mindestabstand
            const gap = (typeof delaySeconds === "number") ? delaySeconds : actionRandomGap(timings);
            const actualDelay = Math.max(timings.minGap, gap);

            liveDuelActionInterval = setTimeout(() => {
                if (liveDuelChangeCount >= liveDuelMaxChanges) {
                    stopLiveDuelActionMode();
                    return;
                }

                changeLiveDuelLetters();
                liveDuelChangeCount++;

                if (liveDuelChangeCount < liveDuelMaxChanges) {
                    scheduleLiveDuelChange(actionRandomGap(timings));
                } else {
                    setTimeout(() => {
                        if (liveDuelActionInterval) {
                            stopLiveDuelActionMode();
                            showLiveDuelActionFeedback("⏰ Action-Modus beendet!");
                        }
                    }, timings.maxGap * 1000 + 2000);
                }
            }, actualDelay * 1000);
        }

        // Globale Variable für die Timings
        let liveDuelActionTimings = null;
        let liveDuelMaxChanges = 3;





        // (Doppelte scheduleLiveDuelChange mit Zufall 3-10s entfernt - siehe Version oben)

        // ============================================================
        // VERBESSERTE changeLiveDuelLetters
        // ============================================================

        async function changeLiveDuelLetters() {
            if (!liveDuelRef) return;

            try {
                const snap = await liveDuelRef.get();
                if (!snap.exists) return;

                const data = snap.data();
                if (data.status !== "playing") return;

                // ============================================================
                // NEU: Prüfen ob schon jemand eingereicht hat
                // ============================================================
                const hasAnyAnswer = Object.values(data.players).some(p => p.hasAnswered === true);

                if (hasAnyAnswer) {
                    console.log("⏸ Action-Mode pausiert - Spieler hat schon geantwortet");
                    // Action-Mode komplett stoppen
                    stopLiveDuelActionMode();
                    showLiveDuelActionFeedback("⏸ Action-Mode pausiert (jemand hat geantwortet)");
                    return;
                }

                // Neues Wort generieren
                const difficulty = data.difficulty || "mittel";
                const wordMode = data.wordMode || "kids";
                const requireLetter = !!data.requireLetter;

                const newRack = generateScrabbleRack(difficulty, requireLetter, wordMode);

                // Firebase updaten - das löst den Snapshot-Listener aus
                await liveDuelRef.update({
                    currentLetters: newRack.letters,
                    currentSolution: newRack.solution,
                    currentRequired: newRack.required || ""
                });

                console.log("✅ Live-Duell Buchstaben geändert:", newRack.letters.join(' '));
                SFX.tick();

            } catch (e) {
                console.error("❌ Fehler beim Ändern der Live-Duell Buchstaben:", e);
            }
        }


        function showLiveDuelActionFeedback(text) {
            // Bestehenden Feedback-Container finden oder erstellen
            let fb = document.getElementById("live-duel-action-feedback");
            if (!fb) {
                const playContent = document.getElementById("live-duel-play-content");
                if (!playContent) return;

                // Feedback über den Buchstaben einfügen
                const tilesContainer = playContent.querySelector('.flex.flex-wrap.justify-center.gap-2');
                if (!tilesContainer) return;

                fb = document.createElement("div");
                fb.id = "live-duel-action-feedback";
                fb.className = "text-center text-sm font-bold text-amber-400 animate-pulse py-2";
                tilesContainer.parentNode.insertBefore(fb, tilesContainer);
            }

            fb.innerText = text;
            fb.className = "text-center text-sm font-bold text-amber-400 animate-pulse py-2";

            // Nach 3 Sekunden ausblenden (nicht mehr 2.5s)
            clearTimeout(fb._timeout);
            fb._timeout = setTimeout(() => {
                if (fb) {
                    fb.className = "text-center text-sm font-bold text-gray-400 py-2";
                    fb.innerText = "⚡ Action-Modus aktiv!";
                }
            }, 3000);
        }


        function stopLiveDuelActionMode() {
            if (liveDuelActionInterval) {
                clearTimeout(liveDuelActionInterval);
                liveDuelActionInterval = null;
            }

            // Action-Status aus der Status-Leiste entfernen
            const statusEl = document.getElementById("live-duel-status");
            if (statusEl) {
                statusEl.innerText = statusEl.innerText.replace("⚡ ", "");
            }

            console.log("⏹ Live-Duell Action Mode gestoppt");
        }
        // Überschreibe die createLiveDuel-Funktion, um actionMode zu speichern
        const originalCreateLiveDuel = createLiveDuel;
        createLiveDuel = async function () {
            if (!currentPlayer || !activePlayerKey) {
                return showToast("Bitte zuerst oben deinen Spieler auswählen!", "error");
            }
            const ref = liveDuelCollectionRef().doc();
            let lobbyData;
            if (liveDuelType === "scrabble") {
                const difficulty = document.getElementById("live-duel-difficulty").value;
                const totalRounds = parseInt(document.getElementById("live-duel-rounds").value);
                const requireLetter = !!(document.getElementById("live-duel-require-letter") || {}).checked;
                const wordMode = (document.getElementById("live-duel-wordmode") || {}).value || "kids";
                // NEU: Action-Mode auslesen
                const actionMode = !!(document.getElementById("live-duel-action-mode") || {}).checked;
                liveDuelUsedWords = new Set();
                lobbyData = {
                    type: "scrabble",
                    status: "waiting",
                    difficulty,
                    totalRounds,
                    currentRound: 0,
                    requireLetter,
                    wordMode,
                    actionMode, // <-- NEU: Action-Mode speichern
                    answerSeconds: SCRABBLE_ANSWER_SECONDS[difficulty] || 20,
                    createdBy: activePlayerKey,
                    players: {}
                };
            } else {
                // Quiz-Modus bleibt unverändert
                const category = document.getElementById("live-duel-category").value;
                const questions = prepareQuestions(questionsForKey(category).sort(() => Math.random() - 0.5).slice(0, 10));
                if (questions.length < 3) return showToast("Zu wenige Fragen für dieses Thema!", "error");
                lobbyData = {
                    type: "quiz",
                    status: "waiting",
                    questions,
                    currentIndex: 0,
                    answerSeconds: parseInt(document.getElementById("live-duel-speed").value) || 20,
                    createdBy: activePlayerKey,
                    players: {}
                };
            }
            lobbyData.players[activePlayerKey] = {
                name: currentPlayer.name,
                score: 0,
                hasAnswered: false,
                lastAnswer: null,
                word: "",
                coinsClaimed: false
            };
            lobbyData.createdByName = currentPlayer.name;
            lobbyData.createdAt = Date.now();
            lobbyData.hostLastSeen = Date.now();
            try {
                await ref.set(lobbyData);
                liveDuelRef = ref;
                isLiveDuelCreator = true;
                liveDuelResolving = false;
                liveDuelRenderKey = "";
                maybeStartHostHeartbeat();
                subscribeLiveDuel();
            } catch (e) {
                handleError("createLiveDuel", e, "Das Duell konnte nicht erstellt werden.");
            }
        };

        // Überschreibe startLiveDuelRound, um den Action-Mode zu starten
        const originalStartLiveDuelRound = startLiveDuelRound;
        startLiveDuelRound = function () {
            if (liveDuelType === "scrabble") {
                liveDuelRef.get().then(doc => {
                    const data = doc.data();
                    let players = data.players;
                    Object.keys(players).forEach(k => {
                        players[k].hasAnswered = false;
                        players[k].word = "";
                        players[k].pending = false;
                    });
                    const rack = generateScrabbleRack(data.difficulty, !!data.requireLetter, data.wordMode);
                    liveDuelRef.update({
                        status: "playing",
                        currentRound: 1,
                        currentLetters: rack.letters,
                        currentSolution: rack.solution,
                        currentRequired: rack.required || "",
                        players,
                        answerDeadline: null
                    }).then(() => {
                        // Action-Mode starten (wenn aktiv)
                        if (data.actionMode) {
                            startLiveDuelActionMode({
                                difficulty: data.difficulty,
                                requireLetter: data.requireLetter,
                                wordMode: data.wordMode,
                                actionMode: data.actionMode
                            });
                        }
                    });
                });
            } else {
                liveDuelRef.get().then(doc => {
                    let players = doc.data().players;
                    Object.keys(players).forEach(k => {
                        players[k].hasAnswered = false;
                        players[k].lastAnswer = null;
                        players[k].pending = false;
                    });
                    liveDuelRef.update({ status: "playing", currentIndex: 0, players, answerDeadline: null });
                });
            }
        };

        // Überschreibe advanceLiveDuel, um den Action-Mode für die nächste Runde zu starten
        const originalAdvanceLiveDuel = advanceLiveDuel;
        advanceLiveDuel = async function () {
            clearLiveDuelTimers();
            stopLiveDuelActionMode(); // <-- Wichtig: Action-Mode stoppen

            const snap = await liveDuelRef.get();
            if (!snap.exists) return;
            const data = snap.data();
            if (data.status !== "reveal") return;
            let players = data.players;
            Object.keys(players).forEach(k => {
                players[k].hasAnswered = false;
                players[k].lastAnswer = null;
                players[k].word = "";
                players[k].pending = false;
            });
            if (data.type === "quiz") {
                await liveDuelRef.update({
                    status: "playing",
                    currentIndex: data.currentIndex + 1,
                    players,
                    answerDeadline: null
                });
            } else {
                const rack = generateScrabbleRack(data.difficulty, !!data.requireLetter, data.wordMode);
                await liveDuelRef.update({
                    status: "playing",
                    currentRound: data.currentRound + 1,
                    currentLetters: rack.letters,
                    currentSolution: rack.solution,
                    currentRequired: rack.required || "",
                    players,
                    answerDeadline: null
                });
                // Action-Mode für die neue Runde starten (wenn aktiv)
                if (data.actionMode) {
                    startLiveDuelActionMode({
                        difficulty: data.difficulty,
                        requireLetter: data.requireLetter,
                        wordMode: data.wordMode,
                        actionMode: data.actionMode
                    });
                }
            }
        };

        // Überschreibe restartLiveDuel, um den Action-Mode zu starten
        const originalRestartLiveDuel = restartLiveDuel;
        restartLiveDuel = async function () {
            if (!liveDuelRef) return;
            stopLiveDuelActionMode(); // <-- Wichtig: Action-Mode stoppen

            const snap = await liveDuelRef.get();
            if (!snap.exists) return showToast("Diese Runde gibt es nicht mehr.", "error", "round");
            const data = snap.data();

            const players = data.players || {};
            if (Object.keys(players).length === 0) return showToast("Keine Spieler mehr in der Runde.", "error");
            Object.keys(players).forEach(k => {
                players[k].score = 0;
                players[k].hasAnswered = false;
                players[k].lastAnswer = null;
                players[k].word = "";
                players[k].coinsClaimed = false;
                players[k].lastRoundPoints = 0;
                players[k].wordStatus = null;
                players[k].pending = false;
            });

            try {
                if (data.type === "scrabble") {
                    const difficulty = (document.getElementById("again-difficulty") || {}).value || data.difficulty || "mittel";
                    const totalRounds = parseInt((document.getElementById("again-rounds") || {}).value) || data.totalRounds || 5;
                    const requireLetter = !!data.requireLetter;
                    liveDuelUsedWords = new Set();
                    const rack = generateScrabbleRack(difficulty, requireLetter, data.wordMode);
                    await liveDuelRef.update({
                        status: "playing",
                        difficulty,
                        totalRounds,
                        currentRound: 1,
                        requireLetter,
                        wordMode: data.wordMode || "kids",
                        answerSeconds: SCRABBLE_ANSWER_SECONDS[difficulty] || 20,
                        currentLetters: rack.letters,
                        currentSolution: rack.solution,
                        currentRequired: rack.required || "",
                        answerDeadline: null,
                        players,
                        review: []
                    });
                    // Action-Mode für die neue Runde starten (wenn aktiv)
                    if (data.actionMode) {
                        startLiveDuelActionMode({
                            difficulty: difficulty,
                            requireLetter: requireLetter,
                            wordMode: data.wordMode || "kids",
                            actionMode: data.actionMode
                        });
                    }
                } else {
                    const catSel = document.getElementById("again-category");
                    const category = (catSel && catSel.value) ? catSel.value : data.category;
                    const questions = prepareQuestions(
                        questionsForKey(category).sort(() => Math.random() - 0.5).slice(0, 10)
                    );
                    if (questions.length < 3) return showToast("Zu wenige Fragen für dieses Thema!", "error");
                    await liveDuelRef.update({
                        status: "playing",
                        category,
                        questions,
                        currentIndex: 0,
                        answerDeadline: null,
                        correctAnswer: null,
                        players,
                        review: []
                    });
                }
                liveDuelResolving = false;
                liveDuelRenderKey = "";
                SFX.tap();
                showToast("Neue Runde gestartet – alle sind dabei! 🚀");
            } catch (e) {
                handleError("restartLiveDuel", e, "Die neue Runde konnte nicht gestartet werden.");
            }
        };

        // Überschreibe leaveLiveDuel, um den Action-Mode zu stoppen
        const originalLeaveLiveDuel = leaveLiveDuel;
        leaveLiveDuel = async function () {
            stopLiveDuelActionMode(); // <-- Wichtig: Action-Mode stoppen
            clearLiveDuelTimers();
            stopHostHeartbeat();
            const ref = liveDuelRef;
            const wasCreator = isLiveDuelCreator;

            if (liveDuelUnsubscribe) liveDuelUnsubscribe();
            liveDuelUnsubscribe = null;
            liveDuelRef = null;
            isLiveDuelCreator = false;
            liveDuelResolving = false;
            liveDuelRenderKey = "";
            switchView(currentPlayer ? 'menu' : 'family-hub');

            if (!ref || !activePlayerKey) return;
            try {
                const snap = await ref.get();
                if (!snap.exists) return;
                const data = snap.data();
                const players = data.players || {};
                delete players[activePlayerKey];
                const rest = Object.keys(players);

                if (rest.length === 0) {
                    await ref.delete();
                } else if (wasCreator) {
                    await ref.update({ players, createdBy: rest[0], updatedAt: Date.now() });
                } else {
                    await ref.update({ players, updatedAt: Date.now() });
                }
            } catch (e) { /* Lobby war schon weg */ }
        };

