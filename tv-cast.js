        // ============================================================
        //  CAST / FERNSEHER
        // ============================================================
        let castConnected = false;
        let castWindow = null;
        let castStatusCheck = null;
        let castLobbyUnsub = null;
        const CAST_QUESTION_COUNT = 10;

        function castLobbyRef() {
            if (!currentParentUser) return null;
            return db.collection('parents').doc(currentParentUser.uid).collection('tv_game').doc('lobby');
        }

        function buildCastQuestions() {
            const grade = (typeof playerGrade === 'function') ? playerGrade(currentPlayer) : null;
            let pool = (grade ? questionsByGrade(grade) : QUESTIONS_DATABASE) || [];
            if (!pool.length) pool = QUESTIONS_DATABASE || [];
            const picked = shuffleArray(pool).slice(0, CAST_QUESTION_COUNT).map(shuffleAnswers);
            return picked.map(function (q) {
                return {
                    question: q.question,
                    answers: q.answers,
                    correct: q.correct,
                    explanation: q.explanation || ''
                };
            });
        }

        function toggleCast() {
            if (castConnected) {
                disconnectCast();
            } else {
                connectCast();
            }
        }

        function connectCast() {
            if (!currentParentUser) {
                showToast("Bitte zuerst als Elternteil anmelden!", "error", "cast");
                return;
            }
            if (!currentPlayer) {
                showToast("Bitte zuerst einen Spieler auswählen!", "error", "cast");
                return;
            }
            const parentId = currentParentUser.uid;
            const playerName = currentPlayer.name || "Host";
            const receiverUrl = new URL('receiver.html', window.location.href).href;

            if (confirm('📺 Fernseher-Modus starten?\n\nDer Receiver wird geöffnet. Auf dem Handy siehst du weiterhin die Steuerung.')) {
                castWindow = window.open(
                    receiverUrl + '?mode=cast&parentId=' + parentId + '&host=' + encodeURIComponent(playerName),
                    'EduPlayTV',
                    'width=1200,height=800,menubar=no,toolbar=no,location=no,status=no'
                );
                if (castWindow) {
                    castConnected = true;
                    updateCastButton();
                    showToast('📺 Fernseher-Modus gestartet!', 'success', 'cast');
                    castStatusCheck = setInterval(function () {
                        if (castWindow && castWindow.closed) {
                            disconnectCast();
                        }
                    }, 1000);
                    createTVLobby(parentId, playerName);
                    startCastLobbyListener();
                    showCastPanel(true);
                } else {
                    showToast('⚠️ Bitte Popups erlauben für den Fernseher-Modus!', 'error', 'cast');
                }
            }
        }

        function disconnectCast() {
            castConnected = false;
            if (castStatusCheck) {
                clearInterval(castStatusCheck);
                castStatusCheck = null;
            }
            if (castWindow && !castWindow.closed) { castWindow.close(); }
            castWindow = null;
            stopCastLobbyListener();
            showCastPanel(false);
            updateCastButton();
            showToast('📺 Verbindung getrennt', 'info', 'cast');
        }

        function updateCastButton() {
            const btn = document.getElementById('castButton');
            if (btn) {
                btn.textContent = castConnected ? '📡' : '🖥️';
                btn.classList.toggle('text-green-400', castConnected);
                btn.classList.toggle('text-gray-400', !castConnected);
            }
        }

        function createTVLobby(parentId, hostName) {
            db.collection('parents')
                .doc(parentId)
                .collection('tv_game')
                .doc('lobby')
                .set({
                    status: 'lobby',
                    players: {},
                    questions: buildCastQuestions(),
                    currentIndex: 0,
                    createdBy: hostName || 'Host',
                    createdAt: Date.now()
                })
                .then(function () { console.log('✅ TV-Lobby erstellt für parentId:', parentId); })
                .catch(function (err) { console.error('❌ Fehler beim Erstellen der TV-Lobby:', err); });
        }

        function checkCastStatus() {
            if (castConnected && castWindow && castWindow.closed) {
                disconnectCast();
            }
        }
        setInterval(checkCastStatus, 5000);

        window.addEventListener('beforeunload', function () {
            if (castConnected) { disconnectCast(); }
        });

        function showCastPanel(show) {
            const p = document.getElementById('castControlPanel');
            if (p) p.classList.toggle('hidden', !show);
        }

        function updateCastPanel(status, idx, total) {
            const el = document.getElementById('castPanelStatus');
            if (!el) return;
            let txt = 'Lobby';
            if (status === 'playing') txt = 'Frage ' + ((idx || 0) + 1) + '/' + (total || 0);
            else if (status === 'reveal') txt = 'Loesung ' + ((idx || 0) + 1) + '/' + (total || 0);
            else if (status === 'finished') txt = '🏆 Beendet';
            else if (status === 'lobby') txt = 'Lobby – bereit';
            el.textContent = txt;
        }

        function startCastLobbyListener() {
            const ref = castLobbyRef();
            if (!ref) return;
            stopCastLobbyListener();
            castLobbyUnsub = ref.onSnapshot(function (snap) {
                const d = snap.data() || {};
                updateCastPanel(d.status, d.currentIndex || 0, (d.questions || []).length);
                if (d.hostCommand && d.hostCommand.type) {
                    const t = d.hostCommand.type;
                    ref.update({ hostCommand: null }).catch(function () { });
                    if (t === 'START_QUIZ') castStartQuiz();
                    else if (t === 'NEXT_QUESTION') castNext();
                    else if (t === 'RESTART') castRestart();
                }
            });
        }

        function stopCastLobbyListener() {
            if (castLobbyUnsub) {
                castLobbyUnsub();
                castLobbyUnsub = null;
            }
        }

        function castStartQuiz() {
            const ref = castLobbyRef();
            if (!ref) { showToast('Bitte zuerst mit dem Fernseher verbinden.', 'error', 'cast'); return; }
            const questions = buildCastQuestions();
            if (!questions.length) { showToast('Keine Fragen fuer diese Klasse gefunden!', 'error', 'cast'); return; }
            ref.set({ status: 'playing', currentIndex: 0, questions: questions, updatedAt: Date.now() }, { merge: true });
        }

        function castReveal() {
            const ref = castLobbyRef();
            if (!ref) return;
            ref.set({ status: 'reveal', updatedAt: Date.now() }, { merge: true });
        }

        function castNext() {
            const ref = castLobbyRef();
            if (!ref) return;
            ref.get().then(function (snap) {
                const d = snap.data() || {};
                const total = (d.questions || []).length;
                const idx = (d.currentIndex || 0) + 1;
                if (idx >= total) {
                    ref.set({ status: 'finished', updatedAt: Date.now() }, { merge: true });
                } else {
                    ref.set({ status: 'playing', currentIndex: idx, updatedAt: Date.now() }, { merge: true });
                }
            });
        }

        function castRestart() {
            const ref = castLobbyRef();
            if (!ref) return;
            ref.set({ status: 'playing', currentIndex: 0, questions: buildCastQuestions(), updatedAt: Date.now() }, { merge: true });
        }






        // ============================================================
        //  TV-QUIZ (KAHOOT-MODUS)
        // ============================================================
        let tvGameRef = null;
        let tvUnsubscribe = null;
        let isTVHost = false;
        let tvQuestions = [];
        let tvCurrentQ = null;
        let tvCountdownInterval = null;
        let isResolving = false;
        let tvHostMode = 'quiz';
        let tvTopicMode = 'spass';
        let tvAutoAdvanceOn = true;
        let tvAutoAdvanceInterval = null;
        let tvRoundTimerInterval = null;
        let tvAgainMode = "quiz";

        function tvHostPlayEl() {
            return document.getElementById("tv-host-play") || document.getElementById("view-tv-quiz-host");
        }
        function tvPlayerPlayEl() {
            return document.getElementById("tv-player-play") || document.getElementById("view-tv-quiz-player");
        }
        function showTVHostPlay() {
            const setup = document.getElementById("tv-host-setup");
            const play = document.getElementById("tv-host-play");
            if (setup) setup.classList.add("hidden");
            if (play) play.classList.remove("hidden");
        }
        function showTVHostSetup() {
            stopTVRoundTimer();
            stopTVAutoAdvance();
            const setup = document.getElementById("tv-host-setup");
            const play = document.getElementById("tv-host-play");
            if (play) { play.classList.add("hidden"); play.innerHTML = ""; }
            if (setup) setup.classList.remove("hidden");
        }
        function showTVPlayerPlay() {
            const setup = document.getElementById("tv-player-setup");
            const play = document.getElementById("tv-player-play");
            if (setup) setup.classList.add("hidden");
            if (play) play.classList.remove("hidden");
        }
        function showTVPlayerSetup() {
            const setup = document.getElementById("tv-player-setup");
            const play = document.getElementById("tv-player-play");
            if (play) { play.classList.add("hidden"); play.innerHTML = ""; }
            if (setup) setup.classList.remove("hidden");
        }
        function setTVHostPlayHTML(html) {
            showTVHostPlay();
            const el = tvHostPlayEl();
            if (el) el.innerHTML = html;
        }
        function setTVPlayerPlayHTML(html) {
            showTVPlayerPlay();
            const el = tvPlayerPlayEl();
            if (el) el.innerHTML = html;
        }
        function stopTVRoundTimer() {
            if (tvRoundTimerInterval) {
                clearInterval(tvRoundTimerInterval);
                tvRoundTimerInterval = null;
            }
        }
        function startTVRoundTimer(seconds) {
            stopTVRoundTimer();
            let left = (typeof seconds === "number" ? seconds : 25);
            const tick = () => {
                const el = document.getElementById("tv-round-timer");
                if (el) el.textContent = left + "s";
                if (left <= 0) {
                    stopTVRoundTimer();
                    forceTVQuizReveal();
                    return;
                }
                left--;
            };
            tick();
            tvRoundTimerInterval = setInterval(tick, 1000);
        }
        function forceTVQuizReveal() {
            if (isResolving || !tvGameRef) return;
            isResolving = true;
            stopTVRoundTimer();
            tvGameRef.get().then(doc => {
                if (doc.exists) revealTVAnswer(doc.data());
                else isResolving = false;
            }).catch(() => { isResolving = false; });
        }

        let tvUsedWords = new Set();
        let tvActionModeInterval = null; // <-- NUR EINMAL DEFINIEREN!

        function setTVTopicMode(mode) {
            mode = mode || tvTopicMode || 'spass';
            tvTopicMode = mode;
            const s = document.getElementById("tvtopic-spass");
            const l = document.getElementById("tvtopic-lernen");
            if (s) s.className = "flex-1 py-2.5 px-1 rounded-lg font-bold transition-all text-sm " + (mode === 'spass' ?
                "active" : "");
            if (l) l.className = "flex-1 py-2.5 px-1 rounded-lg font-bold transition-all text-sm " + (mode === 'lernen' ?
                "active" : "");
            setupCategorySelectors("tv-area", "tv-quiz-category", mode);
        }

        function setTVHostMode(mode) {
            tvHostMode = mode;
            if (mode === 'quiz' && !document.getElementById("tv-area").options.length) {
                setTVTopicMode();
            }
            document.getElementById("tvmode-quiz").className =
                "flex-1 py-2.5 px-1 rounded-lg font-bold transition-all " + (mode === 'quiz' ?
                    "active" : "");
            document.getElementById("tvmode-scrabble").className =
                "flex-1 py-2.5 px-1 rounded-lg font-bold transition-all " + (mode === 'scrabble' ?
                    "active" : "");
            document.getElementById("tv-quiz-mode-options").classList.toggle("hidden", mode !== 'quiz');
            document.getElementById("tv-scrabble-mode-options").classList.toggle("hidden", mode !== 'scrabble');
        }

        async function startTVHostLobby() {
            if (!currentParentUser) return showToast("Dafür musst du als Elternteil angemeldet sein.", "error",
                "noparent");

            const hostRef = db.collection("parents").doc(currentParentUser.uid).collection("tv_game").doc("lobby");
            let lobbyData;
            if (tvHostMode === 'scrabble') {
                const difficulty = document.getElementById("tv-scrabble-difficulty").value;
                const totalRounds = parseInt(document.getElementById("tv-scrabble-rounds").value);

                const requireLetter = !!(document.getElementById("tv-scrabble-require-letter") || {}).checked;
                const wordMode = (document.getElementById("tv-scrabble-wordmode") || {}).value || "kids";

                // NEU: Wert aus der Checkbox auslesen
                const actionMode = !!(document.getElementById("tv-scrabble-action-mode") || {}).checked;

                tvUsedWords = new Set();
                lobbyData = {
                    status: "waiting",
                    mode: "scrabble",
                    difficulty,
                    totalRounds,
                    currentRound: 0,
                    requireLetter,
                    wordMode,
                    actionMode: actionMode, // NEU: An Firebase übergeben
                    players: {}
                };
            } else {
                const category = document.getElementById("tv-quiz-category").value;
                lobbyData = {
                    status: "waiting",
                    mode: "quiz",
                    category: category,
                    currentQuestionIndex: 0,
                    players: {}
                };
            }

            try {
                await hostRef.set(lobbyData);
                isTVHost = true;
                tvGameRef = hostRef;

                setTVHostPlayHTML(`
                    <div class="glass-card-glow h-[80vh] flex flex-col items-center justify-center p-8 text-center" style="border-color:rgba(99,102,241,0.15);">
                        <h2 class="text-5xl font-black text-indigo-400 mb-6 animate-pulse">Warte auf Spieler...</h2>
                        <p class="text-2xl text-white mb-12">Drückt auf euren Handys auf <br><span class="text-emerald-400 font-bold text-4xl">'Jetzt beitreten!'</span></p>
                        <div id="tv-player-list" class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 w-full max-w-4xl"></div>
                        <button onclick="startTVGameLoop()" class="btn-primary text-3xl py-6 px-12" style="background:var(--gradient-amber);box-shadow:0 4px 32px rgba(245,158,11,0.3);">Spiel starten! 🚀</button>
                        <button onclick="leaveTVGame()" class="mt-8 text-gray-500 text-lg font-bold underline hover:text-gray-400 transition">Lobby abbrechen</button>
                    </div>
                `);

                if (tvUnsubscribe) { try { tvUnsubscribe(); } catch (e) { } tvUnsubscribe = null; }
                tvUnsubscribe = tvGameRef.onSnapshot((doc) => {
                    if (!doc.exists) return;
                    const data = doc.data();

                    if (data.status === "waiting") {
                        renderTVPlayerList(data.players);
                        return;
                    }

                    if (data.status === "finished" && isTVHost) {
                        showTVHostPodium(data.players);
                        return;
                    }

                    if (data.status === "playing" && !data.showAnswer) {
                        if (data.mode === "scrabble") {
                            showTVHostScrabbleRound(
                                data.currentLetters,
                                data.currentRound,
                                data.totalRounds || 0,
                                data.currentRequired || ""
                            );
                        }
                        const ansCount = Object.values(data.players || {}).filter(p => p.hasAnswered).length;
                        const totalCount = Object.keys(data.players || {}).length;
                        const counterEl = document.getElementById("tv-answer-counter");
                        if (counterEl) counterEl.innerText = `${ansCount} von ${totalCount} haben geantwortet`;
                        if (totalCount > 0 && ansCount >= totalCount && !isResolving) {
                            isResolving = true;
                            setTimeout(() => {
                                data.mode === "scrabble" ? revealTVScrabbleRound(data) : revealTVAnswer(data);
                            }, 800);
                        }
                    }
                });
            } catch (e) {
                handleError("startTVHostLobby", e, "Die Lobby konnte nicht erstellt werden.");
            }
        }

        function renderTVPlayerList(players) {
            const list = document.getElementById("tv-player-list");
            if (!list) return;
            const names = Object.values(players || {});
            list.innerHTML = names.length === 0 ?
                `<p class="col-span-4 text-gray-500 font-bold">Noch niemand beigetreten...</p>` :
                names.map(p =>
                    `<div class="bg-white/5 border border-white/5 rounded-xl p-4 text-center"><div class="text-3xl">🙋</div><div class="font-bold text-white mt-2">${esc(p.name)}</div></div>`
                ).join('');
        }

        function startTVGameLoop() {
            tvGameRef.get().then(doc => {
                const data = doc.data();
                if (data.mode === "scrabble") { startTVScrabbleRound(data); return; }
                const cat = data.category;
                tvQuestions = prepareQuestions(questionsForKey(cat).sort(() => Math.random() - 0.5).slice(0, 10));
                if (tvQuestions.length < 3) { showToast("Zu wenige Fragen für dieses Thema!", "error"); return; }
                const playersData = data.players || {};
                Object.keys(playersData).forEach(k => {
                    playersData[k].hasAnswered = false;
                    playersData[k].lastAnswer = null;
                    playersData[k].score = playersData[k].score || 0;
                });
                isResolving = false;
                tvGameRef.update({
                    status: "playing",
                    currentQuestionIndex: 0,
                    showAnswer: false,
                    players: playersData,
                    correctAnswer: tvQuestions[0].correct,
                    answerCount: tvQuestions[0].answers.length
                });
                showTVHostQuestion(0);
            });
        }

        function showTVHostQuestion(index) {
            stopTVRoundTimer();
            isResolving = false;
            tvCurrentQ = tvQuestions[index];
            const colors = ["bg-rose-600", "bg-blue-600", "bg-yellow-500", "bg-emerald-600"];
            const shapes = ["▲", "♦", "●", "◼"];
            let answersHtml = "";
            tvCurrentQ.answers.forEach((ans, i) => {
                answersHtml += `
                        <div class="${colors[i]} p-4 rounded-2xl text-white shadow-xl flex items-center relative overflow-hidden min-h-[120px]">
                            <span class="text-8xl opacity-20 absolute left-4">${shapes[i]}</span>
                            <span class="text-3xl md:text-4xl font-black w-full text-center relative z-10 px-6 break-words">${ans}</span>
                        </div>`;
            });
            setTVHostPlayHTML(`
                    <div class="h-[90vh] flex flex-col justify-between p-6">
                        <div class="flex justify-between items-center">
                            <span id="tv-round-timer" class="text-2xl font-black text-amber-400">25s</span>
                            <button onclick="if(confirm('TV-Spiel wirklich beenden?')){ leaveTVGame(); }" class="btn-ghost text-lg py-1.5 px-4 text-gray-400">✕ Beenden</button>
                        </div>
                        <div class="glass-card-glow p-8 rounded-3xl text-center mb-8" style="border-color:rgba(99,102,241,0.15);">
                            <p class="text-indigo-400 font-black text-xl mb-2">Frage ${index + 1} / ${tvQuestions.length}</p>
                            <h1 class="text-4xl md:text-5xl font-black text-white leading-tight">${tvCurrentQ.question}</h1>
                        </div>
                        <div class="grid grid-cols-2 gap-6 flex-1">${answersHtml}</div>
                        <div class="mt-6 text-center space-y-3">
                            <span id="tv-answer-counter" class="text-gray-400 font-bold text-xl block">0 von 0 haben geantwortet</span>
                            <button onclick="forceTVQuizReveal()" class="btn-secondary text-lg py-3 px-8">Runde jetzt auswerten ⏱️</button>
                        </div>
                    </div>
                `);
            startTVRoundTimer(25);
        }

        function revealTVAnswer(data) {
            stopTVRoundTimer();
            tvGameRef.update({ showAnswer: true });
            const colors = ["bg-rose-600", "bg-blue-600", "bg-yellow-500", "bg-emerald-600"];
            const shapes = ["▲", "♦", "●", "◼"];
            const correctIndex = data.correctAnswer;
            const playersData = data.players;

            // Erster Richtiger (frühestes answeredAt)
            let firstKey = null, firstAt = Infinity;
            Object.keys(playersData).forEach(k => {
                const p = playersData[k];
                if (p.lastAnswer === correctIndex && p.answeredAt && p.answeredAt < firstAt) {
                    firstAt = p.answeredAt;
                    firstKey = k;
                }
            });

            Object.keys(playersData).forEach(k => {
                const p = playersData[k];
                const isRight = p.lastAnswer === correctIndex;
                if (isRight) {
                    p.answerStreak = (p.answerStreak || 0) + 1;
                    const isFirst = (k === firstKey);
                    const b = (typeof calcAnswerBonus === "function")
                        ? calcAnswerBonus(p.answerStreak, isFirst)
                        : { bonus: 0, parts: [] };
                    const pts = 10 + b.bonus;
                    p.score = (p.score || 0) + pts;
                    p.lastRoundPoints = pts;
                    p.lastRoundDetail = b.parts.join(" · ");
                } else {
                    p.answerStreak = 0;
                    p.lastRoundPoints = 0;
                    p.lastRoundDetail = "";
                }
            });
            tvGameRef.update({ players: playersData });

            // Host-Anzeige: Erster + Streak
            try {
                const sorted = Object.entries(playersData)
                    .filter(([, p]) => (p.lastRoundPoints || 0) > 0)
                    .sort((a, b) => (b[1].lastRoundPoints || 0) - (a[1].lastRoundPoints || 0));
                if (sorted.length && typeof showPointsPopup === "function") {
                    const [fk, fp] = sorted[0];
                    const detail = (fk === firstKey ? "Erster! " : "") + (fp.lastRoundDetail || "");
                    showPointsPopup(fp.lastRoundPoints, detail.trim());
                }
            } catch (e) { }

            let answersHtml = "";
            tvCurrentQ.answers.forEach((ans, i) => {
                const opacity = i === correctIndex ? "opacity-100 ring-8 ring-white scale-105" :
                    "opacity-20 grayscale";
                answersHtml += `
                        <div class="${colors[i]} p-4 rounded-2xl text-white shadow-xl flex items-center relative overflow-hidden min-h-[120px] transition-all duration-500 ${opacity}">
                            <span class="text-8xl opacity-20 absolute left-4">${shapes[i]}</span>
                            <span class="text-3xl md:text-4xl font-black w-full text-center relative z-10 px-6 break-words">${ans}</span>
                        </div>`;
            });

            setTVHostPlayHTML(`
                    <div class="h-[90vh] flex flex-col justify-between p-6">
                        <div class="flex justify-end"><button onclick="if(confirm('TV-Spiel wirklich beenden?')){ leaveTVGame(); switchView('tv-quiz-setup'); }" class="btn-ghost text-lg py-1.5 px-4 text-gray-400">✕ Beenden</button></div>
                        <div class="glass-card-glow p-8 rounded-3xl text-center mb-8" style="border-color:rgba(16,185,129,0.2);">
                            <h1 class="text-4xl md:text-5xl font-black text-white leading-tight">${tvCurrentQ.question}</h1>
                            <p class="text-emerald-400 font-black mt-6 text-3xl">💡 ${tvCurrentQ.explanation}</p>
                        </div>
                        <div class="grid grid-cols-2 gap-6 flex-1">${answersHtml}</div>
                        <div class="mt-8 text-center space-y-3">
                            <button onclick="nextTVQuestion()" class="btn-primary text-3xl py-6 px-16" style="box-shadow:0 4px 32px rgba(99,102,241,0.3);">Nächste Frage ➔</button>
                            <div id="tv-auto-row" class="flex items-center justify-center gap-4 text-xl text-gray-400 font-bold">
                                <span id="tv-auto-label"></span>
                                <button onclick="toggleTVAutoAdvance()" id="tv-auto-btn"
                                    class="btn-ghost text-base py-2 px-5"></button>
                            </div>
                        </div>
                    </div>
                `);
            startTVAutoAdvance();
        }

        function tvAutoSeconds() {
            const text = (tvCurrentQ && tvCurrentQ.explanation) ? tvCurrentQ.explanation : "";
            const lesen = text.length / 15;
            return Math.round(Math.min(10, Math.max(5, 3 + lesen)));
        }

        function stopTVAutoAdvance() {
            if (tvAutoAdvanceInterval) {
                clearInterval(tvAutoAdvanceInterval);
                tvAutoAdvanceInterval = null;
            }
        }

        function renderTVAutoControls(secondsLeft) {
            const label = document.getElementById("tv-auto-label");
            const btn = document.getElementById("tv-auto-btn");
            if (!btn) return;
            btn.innerText = tvAutoAdvanceOn ? "⏸ Automatik aus" : "▶ Automatik an";
            if (label) {
                label.innerText = tvAutoAdvanceOn ? `Nächste Frage in ${secondsLeft}s` : "Weiter per Knopf";
            }
        }

        function startTVAutoAdvance() {
            stopTVAutoAdvance();
            let left = tvAutoSeconds();
            renderTVAutoControls(left);
            if (!tvAutoAdvanceOn) return;
            tvAutoAdvanceInterval = setInterval(() => {
                left--;
                renderTVAutoControls(left);
                if (left <= 0) {
                    stopTVAutoAdvance();
                    nextTVQuestion();
                }
            }, 1000);
        }

        function toggleTVAutoAdvance() {
            tvAutoAdvanceOn = !tvAutoAdvanceOn;
            startTVAutoAdvance();
        }

        async function nextTVQuestion() {
            stopTVAutoAdvance();
            const docSnap = await tvGameRef.get();
            const data = docSnap.data();
            let nextIndex = data.currentQuestionIndex + 1;
            if (nextIndex >= tvQuestions.length) {
                await tvGameRef.update({ status: "finished" });
                showTVHostPodium(data.players);
            } else {
                let playersData = data.players;
                Object.keys(playersData).forEach(k => {
                    playersData[k].hasAnswered = false;
                    playersData[k].lastAnswer = null;
                });
                isResolving = false;
                await tvGameRef.update({
                    currentQuestionIndex: nextIndex,
                    showAnswer: false,
                    players: playersData,
                    correctAnswer: tvQuestions[nextIndex].correct,
                    answerCount: tvQuestions[nextIndex].answers.length
                });
                showTVHostQuestion(nextIndex);
            }
        }

        function showTVHostPodium(playersData) {
            stopTVAutoAdvance();
            const sorted = Object.values(playersData || {}).sort((a, b) => (b.score || 0) - (a.score || 0));
            let html =
                `<h1 class="text-6xl font-black text-yellow-400 mb-10 text-center">🏆 Siegerehrung 🏆</h1><div class="space-y-6 max-w-3xl mx-auto w-full">`;
            const medals = ["🥇", "🥈", "🥉"];
            sorted.forEach((p, i) => {
                const medal = i < 3 ? medals[i] : `<span class="w-12 inline-block text-gray-500">${i + 1}.</span>`;
                html +=
                    `<div class="flex items-center justify-between bg-white/5 p-8 rounded-2xl border-2 ${i === 0 ? 'border-yellow-400' : 'border-white/5'} shadow-xl"><div class="text-4xl font-bold text-white flex items-center gap-6"><span class="text-5xl">${medal}</span> ${esc(p.name)}</div><div class="text-4xl font-black text-emerald-400">${p.score || 0} <span class="text-2xl text-emerald-600">Punkte</span></div></div>`;
            });
            html += `</div>`;

            const names = esc(sorted.map(p => p.name).join(", "));
            html += `
                    <div class="glass-card p-8 mt-12 max-w-3xl mx-auto w-full space-y-4" style="border-color:rgba(99,102,241,0.15);">
                        <p class="text-3xl font-black text-indigo-300 text-center">🔄 Gleich weiterspielen</p>
                        <p class="text-xl text-gray-400 text-center">Alle bleiben dabei: ${names}</p>
                        <div class="dash-sub-nav mb-2">
                            <button id="againmode-quiz" onclick="setTVAgainMode('quiz')" class="active">🧠 Quiz</button>
                            <button id="againmode-scrabble" onclick="setTVAgainMode('scrabble')">🔤 Wort-Duell</button>
                        </div>
                        <div id="tv-again-quiz-opts">
                            <div class="dash-sub-nav">
                                <button id="againtopic-spass" onclick="setTVAgainTopic('spass')" class="active">🎉 Spaß</button>
                                <button id="againtopic-lernen" onclick="setTVAgainTopic('lernen')">📚 Lernen</button>
                            </div>
                            <select id="tv-again-area" class="input-modern font-bold text-xl mt-3"></select>
                            <select id="tv-again-category" class="input-modern font-bold text-xl mt-2"></select>
                        </div>
                        <div id="tv-again-scrabble-opts" class="hidden text-left space-y-2">
                            <select id="tv-again-scrabble-diff" class="input-modern font-bold text-lg">
                                <option value="leicht">🟢 Leicht</option>
                                <option value="mittel" selected>🟡 Mittel</option>
                                <option value="schwer">🔴 Schwer</option>
                                <option value="experte">🟣 Experte</option>
                            </select>
                            <select id="tv-again-scrabble-rounds" class="input-modern font-bold text-lg">
                                <option value="3">3 Runden</option>
                                <option value="5" selected>5 Runden</option>
                                <option value="8">8 Runden</option>
                            </select>
                        </div>
                        <button onclick="restartTVGame()" class="btn-primary w-full text-center text-2xl py-6" style="background:var(--gradient-green);box-shadow:0 4px 32px rgba(16,185,129,0.3);">Neue Runde starten 🚀</button>
                    </div>
                    <div class="text-center"><button onclick="leaveTVGame()" class="mt-8 text-gray-500 text-lg font-bold underline hover:text-gray-400 transition">⬅ Zurück ins Menü</button></div>
                `;

            setTVHostPlayHTML(`<div class="min-h-[90vh] flex flex-col items-center justify-center p-6">${html}</div>`);
            setTVAgainMode("quiz");
            try {
                if (typeof confetti === 'function') {
                    confetti();
                    confetti();
                }
            } catch (e) { }
            SFX.win();
        }

        function setTVAgainMode(mode) {
            tvAgainMode = mode === "scrabble" ? "scrabble" : "quiz";
            const qBtn = document.getElementById("againmode-quiz");
            const sBtn = document.getElementById("againmode-scrabble");
            const qOpts = document.getElementById("tv-again-quiz-opts");
            const sOpts = document.getElementById("tv-again-scrabble-opts");
            if (qBtn) qBtn.classList.toggle("active", tvAgainMode === "quiz");
            if (sBtn) sBtn.classList.toggle("active", tvAgainMode === "scrabble");
            if (qOpts) qOpts.classList.toggle("hidden", tvAgainMode !== "quiz");
            if (sOpts) sOpts.classList.toggle("hidden", tvAgainMode !== "scrabble");
            if (tvAgainMode === "quiz") setTVAgainTopic(tvTopicMode || "spass");
        }

        function setTVAgainTopic(mode) {
            const s = document.getElementById("againtopic-spass");
            const l = document.getElementById("againtopic-lernen");
            if (!s || !l) return;
            tvTopicMode = mode;
            s.className = "flex-1 py-3 rounded-lg font-bold text-xl transition-all " + (mode === 'spass' ?
                "active" : "");
            l.className = "flex-1 py-3 rounded-lg font-bold text-xl transition-all " + (mode === 'lernen' ?
                "active" : "");
            setupCategorySelectors("tv-again-area", "tv-again-category", mode);
        }

        async function restartTVGame() {
            if (!tvGameRef) return;
            try {
                const snap = await tvGameRef.get();
                if (!snap.exists) return showToast("Diese Runde gibt es nicht mehr.", "error", "round");
                const playersData = snap.data().players || {};
                if (Object.keys(playersData).length === 0) return showToast("Keine Spieler mehr in der Lobby.", "error");

                Object.keys(playersData).forEach(k => {
                    playersData[k].score = 0;
                    playersData[k].hasAnswered = false;
                    playersData[k].lastAnswer = null;
                    playersData[k].word = "";
                    playersData[k].coinsClaimed = false;
                    playersData[k].lastRoundPoints = 0;
                    playersData[k].wordStatus = null;
                    playersData[k].answerStreak = 0;
                    playersData[k].answeredAt = null;
                });
                isResolving = false;

                if (tvAgainMode === "scrabble") {
                    const difficulty = (document.getElementById("tv-again-scrabble-diff") || {}).value || "mittel";
                    const totalRounds = parseInt((document.getElementById("tv-again-scrabble-rounds") || {}).value || "5", 10);
                    tvUsedWords = new Set();
                    await tvGameRef.update({
                        status: "waiting",
                        mode: "scrabble",
                        difficulty,
                        totalRounds,
                        currentRound: 0,
                        showAnswer: false,
                        players: playersData
                    });
                    // Sofort starten
                    const data = (await tvGameRef.get()).data();
                    startTVScrabbleRound(data);
                    showToast("Wort-Duell gestartet! 🔤");
                    return;
                }

                const catSel = document.getElementById("tv-again-category");
                const category = catSel ? catSel.value : null;
                if (!category) return showToast("Bitte ein Thema wählen!", "error");
                const fresh = questionsForKey(category).sort(() => Math.random() - 0.5).slice(0, 10);
                if (fresh.length < 3) return showToast("Zu wenige Fragen für dieses Thema!", "error");
                tvQuestions = prepareQuestions(fresh);
                await tvGameRef.update({
                    status: "playing",
                    mode: "quiz",
                    category,
                    currentQuestionIndex: 0,
                    showAnswer: false,
                    players: playersData,
                    correctAnswer: tvQuestions[0].correct,
                    answerCount: tvQuestions[0].answers.length
                });
                showTVHostQuestion(0);
                SFX.tap();
                showToast("Neue Runde gestartet – alle sind dabei! 🚀");
            } catch (e) {
                handleError("restartTVGame", e, "Die neue Runde konnte nicht gestartet werden.");
            }
        }

        // ============================================================
        // ACTION-MODE FÜR TV-HOST
        // ============================================================



        // ============================================================
        // ACTION-MODE FÜR TV-MODUS - MIT OPTIMIERTEN ZEITEN
        // ============================================================

        function getTVActionModeTimings(difficulty) {
            return getActionTiming(difficulty);
        }



        function startTVActionMode(data) {
            if (!data || !data.actionMode) {
                console.log("TV: Action Mode nicht aktiv");
                return;
            }

            // Alten Timer stoppen
            if (tvActionModeInterval) {
                clearTimeout(tvActionModeInterval);
                tvActionModeInterval = null;
            }

            const timing = getActionTiming(data.difficulty || "mittel");
            let changeCount = 0;

            console.log(`📺 TV Action Mode gestartet (${timing.maxChanges} Aenderungen, erste nach ${timing.firstChange}s)`);

            function tvChange() {
                if (changeCount >= timing.maxChanges) {
                    tvActionModeInterval = null;
                    console.log("📺 TV Action Mode beendet");
                    return;
                }
                const rack = generateScrabbleRack(data.difficulty, !!data.requireLetter, data.wordMode);
                tvGameRef.update({
                    currentLetters: rack.letters,
                    currentSolution: rack.solution,
                    currentRequired: rack.required || ""
                });
                changeCount++;
                if (changeCount < timing.maxChanges) {
                    // Abstand zufaellig, aber im festen Rahmen
                    tvActionModeInterval = setTimeout(tvChange, actionRandomGap(timing) * 1000);
                } else {
                    tvActionModeInterval = null;
                    console.log("📺 TV Action Mode beendet");
                }
            }

            // Erste Aenderung nach fester firstChange-Zeit
            tvActionModeInterval = setTimeout(tvChange, timing.firstChange * 1000);
        }

        // Verbesserte stopTVActionMode
        function stopTVActionMode() {
            if (tvActionModeInterval) {
                clearInterval(tvActionModeInterval);
                tvActionModeInterval = null;
                console.log("⏹ Action Mode gestoppt");
            }
        }

        // --- TV-SCRABBLE (Host) ---
        function startTVScrabbleRound(data) {
            const rack = generateScrabbleRack(data.difficulty, !!data.requireLetter, data.wordMode);
            const letters = rack.letters;
            const round = (data.currentRound || 0) + 1;
            const playersData = data.players || {};

            Object.keys(playersData).forEach(k => {
                playersData[k].hasAnswered = false;
                playersData[k].word = "";
                playersData[k].score = playersData[k].score || 0;
            });

            isResolving = false;

            tvGameRef.update({
                status: "playing",
                showAnswer: false,
                currentLetters: letters,
                currentSolution: rack.solution,
                currentRequired: rack.required || "",
                currentRound: round,
                players: playersData
            });

            // NICHT mehr showTVHostScrabbleRound() hier aufrufen - das macht der Listener!
            // showTVHostScrabbleRound(letters, round, data.totalRounds, rack.required || "");

            // Action Mode starten (wenn aktiv)
            if (data.actionMode) {
                startTVActionMode({
                    difficulty: data.difficulty,
                    requireLetter: data.requireLetter,
                    wordMode: data.wordMode,
                    currentRound: round,
                    totalRounds: data.totalRounds,
                    actionMode: data.actionMode
                });
            }
        }






        function showTVHostScrabbleRound(letters, round, totalRounds, required) {
            setTVHostPlayHTML(`
                    <div class="h-[90vh] flex flex-col justify-between p-6">
                        <div class="flex justify-end"><button onclick="if(confirm('TV-Spiel wirklich beenden?')){ leaveTVGame(); switchView('tv-quiz-setup'); }" class="btn-ghost text-lg py-1.5 px-4 text-gray-400">✕ Beenden</button></div>
                        <div class="glass-card-glow p-8 rounded-3xl text-center mb-8" style="border-color:rgba(245,158,11,0.15);">
                            <p class="text-amber-400 font-black text-xl mb-4">Runde ${round} / ${totalRounds}</p>
                            <h1 class="text-2xl md:text-3xl font-black text-white leading-tight mb-6">🔤 Bildet das beste Wort aus diesen Buchstaben!</h1>
                            <div class="flex flex-wrap justify-center gap-3">${scrabbleTilesHTML(letters, true, required)}</div>
                        </div>
                        <div class="text-center"><span id="tv-answer-counter" class="text-gray-400 font-bold text-xl">0 von 0 haben geantwortet</span></div>
                        <div class="text-center mt-4"><button onclick="forceTVScrabbleReveal()" class="btn-secondary text-lg py-4 px-10">Runde jetzt auswerten ⏱️</button></div>
                    </div>
                `);
        }

        function forceTVScrabbleReveal() {
            if (isResolving) return;
            isResolving = true;

            stopTVActionMode(); // Timer stoppen, Runde ist vorbei!

            tvGameRef.get().then(doc => revealTVScrabbleRound(doc.data()));
        }

        async function revealTVScrabbleRound(data) {
            stopTVActionMode();
            const playersData = data.players;

            // HIER IST DIE WICHTIGSTE ÄNDERUNG:
            // Wir müssen sicherstellen, dass wir die Buchstaben und die Required-Info nehmen,
            // die in 'data' (dem aktuellen Snapshot aus der Datenbank) stehen, 
            // nicht die, mit denen die Runde ursprünglich gestartet ist!
            const letters = data.currentLetters;
            const currentRequired = data.currentRequired || "";

            setTVHostPlayHTML(`
                    <div class="h-[90vh] flex flex-col items-center justify-center text-center">
                        <div class="text-6xl mb-6 animate-spin">🔍</div>
                        <h2 class="text-2xl font-black text-white">Prüfe Wörter...</h2>
                    </div>`);

            for (const key of Object.keys(playersData)) {
                const res = await evaluateScrabbleWord(playersData[key].word, letters, {
                    minWord: (SCRABBLE_DIFFICULTIES[data.difficulty] || {}).minWord,
                    required: currentRequired,
                    used: tvUsedWords,
                    addToUsed: false
                });
                playersData[key].wordStatus = res.status;
                playersData[key]._basePoints = res.points || 0;
            }

            // Erster gültiges Wort (frühestes answeredAt)
            let firstKey = null, firstAt = Infinity;
            Object.keys(playersData).forEach(k => {
                const p = playersData[k];
                if (p.wordStatus === "valid" && p.answeredAt && p.answeredAt < firstAt) {
                    firstAt = p.answeredAt;
                    firstKey = k;
                }
            });

            Object.keys(playersData).forEach(k => {
                const p = playersData[k];
                let finalPoints = p._basePoints || 0;
                const parts = [];
                if (data.actionMode && finalPoints > 0 && p.word) {
                    finalPoints += 5;
                    parts.push("Action +5");
                }
                if (finalPoints > 0) {
                    p.answerStreak = (p.answerStreak || 0) + 1;
                    const isFirst = (k === firstKey);
                    const b = (typeof calcAnswerBonus === "function")
                        ? calcAnswerBonus(p.answerStreak, isFirst)
                        : { bonus: 0, parts: [] };
                    finalPoints += b.bonus;
                    parts.push(...(b.parts || []));
                } else {
                    p.answerStreak = 0;
                }
                p.score = (p.score || 0) + finalPoints;
                p.lastRoundPoints = finalPoints;
                p.lastRoundDetail = parts.join(" · ");
                delete p._basePoints;
            });

            Object.keys(playersData).forEach(k => {
                if (playersData[k].wordStatus === "valid" && playersData[k].word) {
                    tvUsedWords.add(String(playersData[k].word).toUpperCase());
                }
            });
            tvGameRef.update({ showAnswer: true, players: playersData });

            try {
                const top = Object.entries(playersData)
                    .filter(([, p]) => (p.lastRoundPoints || 0) > 0)
                    .sort((a, b) => (b[1].lastRoundPoints || 0) - (a[1].lastRoundPoints || 0))[0];
                if (top && typeof showPointsPopup === "function") {
                    showPointsPopup(top[1].lastRoundPoints, top[1].lastRoundDetail || "");
                }
            } catch (e) { }

            const isLastRound = data.currentRound >= data.totalRounds;
            let rowsHtml = "";
            Object.values(playersData).sort((a, b) => (b.lastRoundPoints || 0) - (a.lastRoundPoints || 0)).forEach(p => {
                const sInfo = wordStatusInfo(p.wordStatus, p);

                // Hinweis auf den Action-Bonus in der Auswertung
                const bonusText = (data.actionMode && p.wordStatus === "valid") ? ' <span class="text-amber-400 text-xs font-bold">(+5 Action-Bonus)</span>' : '';

                const sDetail = sInfo.text ? `<div class="text-sm text-gray-500 font-normal mt-1">${sInfo.text}</div>` : "";
                rowsHtml +=
                    `<div class="flex justify-between items-start bg-white/5 border border-white/5 rounded-xl p-4 gap-3"><div class="font-bold text-white text-lg">${sInfo.icon} ${esc(p.name)}: <span class="text-amber-300">"${esc(p.word || "-")}"</span>${bonusText}${sDetail}</div><div class="font-black text-emerald-400 text-xl shrink-0">+${p.lastRoundPoints || 0} <span class="text-sm text-gray-500">(Σ ${p.score})</span></div></div>`;
            });

            setTVHostPlayHTML(`
                    <div class="h-[90vh] flex flex-col justify-between p-6">
                        <div class="flex justify-end"><button onclick="if(confirm('TV-Spiel wirklich beenden?')){ leaveTVGame(); switchView('tv-quiz-setup'); }" class="btn-ghost text-lg py-1.5 px-4 text-gray-400">✕ Beenden</button></div>
                        <div class="text-center mb-4">
                            <h1 class="text-3xl font-black text-white">Runde ${data.currentRound} / ${data.totalRounds} – Ergebnisse</h1>
                            ${data.currentSolution ? `);<p class="text-amber-400 font-bold text-xl mt-2">💡 Möglich war am Ende z.B.: ${data.currentSolution}</p>` : ""}
                        </div>
                        <div class="space-y-3 flex-1 overflow-y-auto">${rowsHtml}</div>
                        <div class="mt-6 text-center">
                            ${isLastRound
                                ? `<button onclick="tvGameRef.update({status:'finished'})" class="btn-primary text-2xl py-6 px-16 w-full md:w-1/2" style="background:var(--gradient-amber);box-shadow:0 4px 32px rgba(245,158,11,0.3);">Endergebnis zeigen 🏆</button>`
                                : `<button onclick="nextTVScrabbleRound()" class="btn-primary text-2xl py-6 px-16 w-full md:w-1/2">Nächste Runde ➔</button>`}
                        </div>
                    </div>
                `);
        }

        function nextTVScrabbleRound() {
            tvGameRef.get().then(doc => startTVScrabbleRound(doc.data()));
        }

        // --- TV-QUIZ PLAYER (Handy) ---
        async function joinTVGame() {
            if (!currentParentUser || !currentPlayer) return showToast(
                "Bitte wähle zuerst oben deinen Spieler aus.", "error", "noprofile");
            const lobbyRef = db.collection("parents").doc(currentParentUser.uid).collection("tv_game").doc("lobby");

            try {
                const docSnap = await lobbyRef.get();
                if (!docSnap.exists || docSnap.data().status !== "waiting") return showToast(
                    "Aktuell ist keine Lobby offen!", "error");

                let playersData = docSnap.data().players || {};
                playersData[activePlayerKey] = {
                    name: currentPlayer.name,
                    score: 0,
                    hasAnswered: false,
                    lastAnswer: null,
                    coinsClaimed: false
                };
                await lobbyRef.update({ players: playersData });
                tvGameRef = lobbyRef;
                isTVHost = false;

                setTVPlayerPlayHTML(`<div class="glass-card-glow p-12 text-center mt-12" style="border-color:rgba(16,185,129,0.15);"><div class="text-8xl mb-6 animate-bounce">🙌</div><h2 class="text-3xl font-black text-emerald-400 mb-4">Du bist drin!</h2><p class="text-lg text-white font-bold">Gleich geht's los. Schau auf den Fernseher!</p></div>`);

                if (tvUnsubscribe) { try { tvUnsubscribe(); } catch (e) { } tvUnsubscribe = null; }
                tvUnsubscribe = tvGameRef.onSnapshot((doc) => {
                    if (!doc.exists || isTVHost) return;
                    const data = doc.data();
                    const myData = data.players[activePlayerKey];
                    if (!myData) return;

                    if (data.mode === "scrabble") {
                        if (data.status === "playing") {
                            if (data.showAnswer) {
                                const points = myData.lastRoundPoints || 0;
                                const bg = points > 0 ? "bg-emerald-500" : "bg-gray-700";
                                const pInfo = wordStatusInfo(myData.wordStatus, myData);
                                const statusText = myData.wordStatus === "valid" ? "Erkannt! ✅" :
                                    `${pInfo.icon} ${pInfo.text}`;
                                setTVPlayerPlayHTML(`<div class="${bg} h-[80vh] rounded-3xl flex flex-col items-center justify-center p-8 text-center text-white shadow-inner"><div class="text-7xl mb-6">${points > 0 ? "✅" : "😅"}</div><h2 class="text-2xl font-black mb-2">Dein Wort: "${esc(myData.word || "-")}"</h2><p class="text-sm opacity-70 mb-2">${statusText}</p><p class="text-xl font-bold">+ ${points} Punkte diese Runde</p><p class="text-sm opacity-80 mt-2">Gesamt: ${myData.score || 0} Punkte</p></div>`);
                                if (points > 0) {
                                    try { if (typeof confetti === 'function') confetti(); } catch (
                                    e) { } SFX.correct();
                                } else { SFX.wrong(); }
                            } else if (!myData.hasAnswered) {
                                setTVPlayerPlayHTML(`
                                    <div class="space-y-4">
                                        <div class="flex flex-wrap justify-center gap-2">${scrabbleTilesHTML(data.currentLetters, false, data.currentRequired)}</div>
                                        <div class="glass-card p-5 space-y-3">
                                            <input type="text" id="tv-scrabble-word-input" placeholder="Dein Wort..." autocomplete="off"
                                                class="input-modern text-xl font-black text-center uppercase tracking-widest">
                                            <button onclick="submitTVScrabbleWord()" class="btn-primary w-full text-center" style="background:var(--gradient-green);box-shadow:0 4px 24px rgba(16,185,129,0.3);">Wort einreichen ✅</button>
                                        </div>
                                    </div>`);
                            }
                        } else if (data.status === "finished") {
                            if (!myData.coinsClaimed) {
                                currentPlayer.coins += (myData.score || 0);
                                savePlayerProgress();
                                tvGameRef.update({ [`players.${activePlayerKey}.coinsClaimed`]: true });
                            }
                            setTVPlayerPlayHTML(`<div class="glass-card-glow p-10 text-center mt-12" style="border-color:rgba(245,158,11,0.15);"><div class="text-7xl mb-4">🏆</div><h2 class="text-3xl font-black text-yellow-400 mb-3">Spiel beendet!</h2><p class="text-xl text-white font-bold bg-white/5 p-4 rounded-xl inline-block">+ ${myData.score || 0} Coins verdient!</p><div class="mt-8 p-4 bg-white/5 border border-indigo-800/30 rounded-2xl"><div class="text-4xl mb-2 animate-pulse">⏳</div><p class="text-indigo-300 font-black">Du bleibst dabei!</p><p class="text-xs text-gray-400 mt-1">Sobald am Fernseher eine neue Runde startet, geht es hier automatisch weiter.</p></div><button onclick="leaveTVGame()" class="mt-6 btn-secondary w-full text-center text-sm">Doch beenden & zurück ins Menü</button></div>`);
                        }
                        return;
                    }

                    if (data.status === "playing") {
                        if (data.showAnswer) {
                            const isCorrect = myData.lastAnswer === data.correctAnswer;
                            const pts = myData.lastRoundPoints || (isCorrect ? 10 : 0);
                            const bg = isCorrect ? "bg-emerald-500" : "bg-rose-600";
                            const icon = isCorrect ? "✅" : "❌";
                            const text = isCorrect ? "Richtig!" : "Leider falsch!";
                            const detail = myData.lastRoundDetail ? `<p class="text-sm opacity-80 mt-2">${myData.lastRoundDetail}</p>` : "";
                            setTVPlayerPlayHTML(`<div class="${bg} h-[80vh] rounded-3xl flex flex-col items-center justify-center p-8 text-center text-white shadow-inner"><div class="text-9xl mb-8">${icon}</div><h2 class="text-4xl font-black mb-4">${text}</h2><p class="text-2xl font-black">+${pts} Punkte</p>${detail}<p class="text-xl font-bold opacity-80 mt-3">Gesamt: ${myData.score || 0}</p></div>`);
                            if (isCorrect) {
                                try { if (typeof confetti === 'function') confetti(); } catch (e) { }
                                SFX.correct();
                                if (pts > 0 && typeof showPointsPopup === "function") {
                                    showPointsPopup(pts, myData.lastRoundDetail || "");
                                }
                            } else { SFX.wrong(); }
                        } else if (!myData.hasAnswered) {
                            const q = tvQuestions[data.currentQuestionIndex];
                            const colors = ["bg-rose-600", "bg-blue-600", "bg-yellow-500", "bg-emerald-600"];
                            const shapes = ["▲", "♦", "●", "◼"];
                            let btnHtml = `<div class="grid grid-cols-2 gap-4 h-[75vh]">`;
                            const count = (q && q.answers) ? q.answers.length : (data.answerCount || 3);
                            for (let i = 0; i < count; i++) {
                                btnHtml +=
                                    `<button onclick="submitTVAnswer(${i})" class="${colors[i]} rounded-3xl shadow-xl flex items-center justify-center text-8xl text-white/90 active:scale-95 transition-transform">${shapes[i]}</button>`;
                            }
                            setTVPlayerPlayHTML(btnHtml + `</div>`);
                        }
                    } else if (data.status === "finished") {
                        if (!myData.coinsClaimed) {
                            currentPlayer.coins += (myData.score || 0);
                            savePlayerProgress();
                            tvGameRef.update({ [`players.${activePlayerKey}.coinsClaimed`]: true });
                        }
                        setTVPlayerPlayHTML(`<div class="glass-card-glow p-10 text-center mt-12" style="border-color:rgba(245,158,11,0.15);"><div class="text-7xl mb-4">🏆</div><h2 class="text-3xl font-black text-yellow-400 mb-3">Spiel beendet!</h2><p class="text-xl text-white font-bold bg-white/5 p-4 rounded-xl inline-block">+ ${myData.score || 0} Coins verdient!</p><div class="mt-8 p-4 bg-white/5 border border-indigo-800/30 rounded-2xl"><div class="text-4xl mb-2 animate-pulse">⏳</div><p class="text-indigo-300 font-black">Du bleibst dabei!</p><p class="text-xs text-gray-400 mt-1">Sobald am Fernseher eine neue Runde startet, geht es hier automatisch weiter.</p></div><button onclick="leaveTVGame()" class="mt-6 btn-secondary w-full text-center text-sm">Doch beenden & zurück ins Menü</button></div>`);
                    }
                });
            } catch (error) { handleError("joinTVGame", error, "Beitreten hat nicht geklappt."); }
        }

        async function submitTVScrabbleWord() {
            const inputEl = document.getElementById("tv-scrabble-word-input");
            const word = inputEl ? cleanInput(inputEl.value, 20) : "";
            if (!word) {
                SFX.wrong();
                showToast("Bitte zuerst ein Wort eingeben.", "error", "word");
                if (inputEl) inputEl.focus();
                return;
            }
            setTVPlayerPlayHTML(`<div class="bg-gray-800 h-[80vh] rounded-3xl flex flex-col items-center justify-center p-8 text-center text-white shadow-inner"><div class="text-8xl mb-8 animate-spin">⏳</div><h2 class="text-3xl font-black text-amber-400 mb-4">Eingereicht!</h2><p class="text-lg font-bold text-gray-400">Warte auf die anderen...</p></div>`);
            await tvGameRef.update({
                [`players.${activePlayerKey}.hasAnswered`]: true,
                [`players.${activePlayerKey}.word`]: word,
                [`players.${activePlayerKey}.answeredAt`]: Date.now()
            });
        }

        async function submitTVAnswer(ansIndex) {
            setTVPlayerPlayHTML(`<div class="bg-gray-800 h-[80vh] rounded-3xl flex flex-col items-center justify-center p-8 text-center text-white shadow-inner"><div class="text-8xl mb-8 animate-spin">⏳</div><h2 class="text-3xl font-black text-indigo-400 mb-4">Eingeloggt!</h2><p class="text-lg font-bold text-gray-400">Schau auf den Fernseher...</p></div>`);
            await tvGameRef.update({
                [`players.${activePlayerKey}.hasAnswered`]: true,
                [`players.${activePlayerKey}.lastAnswer`]: ansIndex,
                [`players.${activePlayerKey}.answeredAt`]: Date.now()
            });
        }

        async function leaveTVGame() {
            const ref = tvGameRef;
            const wasHost = isTVHost;
            if (tvUnsubscribe) {
                try { tvUnsubscribe(); } catch (e) { }
                tvUnsubscribe = null;
            }
            if (tvCountdownInterval) {
                clearInterval(tvCountdownInterval);
                tvCountdownInterval = null;
            }
            stopTVAutoAdvance();
            stopTVRoundTimer();
            stopTVActionMode();
            tvGameRef = null;
            isTVHost = false;
            isResolving = false;
            showTVHostSetup();
            showTVPlayerSetup();
            switchView(currentPlayer ? 'menu' : 'family-hub');
            if (!ref) return;
            try {
                if (wasHost) {
                    try { await ref.set({ status: "finished" }, { merge: true }); } catch (e) { }
                    try { await ref.delete(); } catch (e) { }
                } else if (activePlayerKey) {
                    const snap = await ref.get();
                    if (!snap.exists) return;
                    const players = Object.assign({}, snap.data().players || {});
                    delete players[activePlayerKey];
                    if (Object.keys(players).length === 0) {
                        try { await ref.delete(); } catch (e) { }
                    } else {
                        await ref.update({ players: players });
                    }
                }
            } catch (e) { /* Lobby evtl. schon weg */ }
        }

