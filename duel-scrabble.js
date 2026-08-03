        // ============================================================
        //  DUELL-MODUS (1 gegen 1, gleiches Gerät)
        // ============================================================
        let duelState = null;

        function openDuelSetup() {
            if (Object.keys(ALL_PROFILES).length < 2) return showToast("Für ein Duell braucht ihr mindestens 2 Spieler!",
                "error");
            const keys = Object.keys(ALL_PROFILES);
            const opts = keys.map(k => `<option value="${k}">${esc(ALL_PROFILES[k].name)}</option>`).join("");
            const selA = document.getElementById("duel-player-a");
            const selB = document.getElementById("duel-player-b");
            selA.innerHTML = opts;
            selB.innerHTML = opts;
            selB.selectedIndex = 1;
            setupCategorySelectors("duel-area", "duel-category");
            switchView('duel-setup');
        }

        function startDuel() {
            const keyA = document.getElementById("duel-player-a").value;
            const keyB = document.getElementById("duel-player-b").value;
            const cat = document.getElementById("duel-category").value;
            if (!keyA || !keyB) return showToast("Bitte zwei Spieler auswählen!", "error");
            if (keyA === keyB) return showToast("Bitte zwei unterschiedliche Spieler wählen!", "error");
            const pool = prepareQuestions(questionsForKey(cat).sort(() => Math.random() - 0.5).slice(0, 8));
            if (pool.length < 3) return showToast("Zu wenige Fragen in diesem Thema für ein Duell!", "error");
            duelState = { keyA, keyB, questions: pool, qIndex: 0, scoreA: 0, scoreB: 0, turn: 'A', streakA: 0, streakB: 0 };
            switchView('duel-play');
            showDuelTurnIntro();
        }

        function showDuelTurnIntro() {
            const key = duelState.turn === 'A' ? duelState.keyA : duelState.keyB;
            document.getElementById("duel-turn-title").innerText = `${esc(ALL_PROFILES[key].name)} ist dran!`;
            document.getElementById("duel-turn-emoji").innerText = duelState.turn === 'A' ? "🥊" : "🔥";
            document.getElementById("duel-turn-intro").classList.remove("hidden");
            document.getElementById("duel-question-area").classList.add("hidden");
        }

        function beginDuelTurn() {
            duelState.qIndex = 0;
            document.getElementById("duel-turn-intro").classList.add("hidden");
            document.getElementById("duel-question-area").classList.remove("hidden");
            showDuelQuestion();
        }

        function showDuelQuestion() {
            const q = duelState.questions[duelState.qIndex];
            document.getElementById("duel-progress").innerText = `Frage ${duelState.qIndex + 1}/${duelState.questions.length}`;
            document.getElementById("duel-question-text").innerText = q.question;
            const opts = document.getElementById("duel-options-container");
            opts.innerHTML = "";
            q.answers.forEach((ans, i) => {
                const b = document.createElement("button");
                b.className =
                    "w-full p-4 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-white mt-2 border border-white/5 transition-colors";
                b.innerText = ans;
                b.onclick = () => checkDuelAnswer(i, q.correct);
                opts.appendChild(b);
            });
        }

        function checkDuelAnswer(sel, cor) {
            const btns = document.getElementById("duel-options-container").children;
            for (let i = 0; i < btns.length; i++) {
                btns[i].disabled = true;
                if (i === cor) btns[i].className = "w-full p-4 bg-emerald-600 rounded-xl font-bold text-white mt-2 shadow-md";
                else if (i === sel) btns[i].className = "w-full p-4 bg-rose-600 rounded-xl font-bold text-white mt-2 opacity-60";
                else btns[i].classList.add("opacity-30");
            }
            if (sel === cor) {
                const isA = duelState.turn === 'A';
                if (isA) duelState.streakA = (duelState.streakA || 0) + 1;
                else duelState.streakB = (duelState.streakB || 0) + 1;
                const streak = isA ? duelState.streakA : duelState.streakB;
                // Erster Versuch = immer firstTry in Single-Device-Duell (sofort geantwortet)
                const b = (typeof calcAnswerBonus === "function")
                    ? calcAnswerBonus(streak, true)
                    : { bonus: 0, parts: [] };
                const pts = 1 + b.bonus; // 1 Basis-Punkt pro Frage + Boni
                if (isA) duelState.scoreA += pts;
                else duelState.scoreB += pts;
                if (typeof showPointsPopup === "function") {
                    showPointsPopup(pts, b.parts.join(" · ") || "Richtig!");
                }
                if (typeof SFX !== "undefined") SFX.correct();
            } else {
                if (duelState.turn === 'A') duelState.streakA = 0;
                else duelState.streakB = 0;
                if (typeof SFX !== "undefined") SFX.wrong();
            }
            setTimeout(() => {
                duelState.qIndex++;
                if (duelState.qIndex < duelState.questions.length) { showDuelQuestion(); } else if (duelState.turn === 'A') {
                    duelState.turn = 'B';
                    duelState.streakB = 0;
                    showDuelTurnIntro();
                } else { finishDuel(); }
            }, 1100);
        }

        function finishDuel() {
            const { keyA, keyB, scoreA, scoreB } = duelState;
            const nameA = ALL_PROFILES[keyA].name;
            const nameB = ALL_PROFILES[keyB].name;
            let resultTitle;
            if (scoreA > scoreB) {
                resultTitle = `🏆 ${nameA} gewinnt!`;
                awardXPToProfile(keyA, 15);
                awardXPToProfile(keyB, 5);
            } else if (scoreB > scoreA) {
                resultTitle = `🏆 ${nameB} gewinnt!`;
                awardXPToProfile(keyB, 15);
                awardXPToProfile(keyA, 5);
            } else {
                resultTitle = "🤝 Unentschieden!";
                awardXPToProfile(keyA, 8);
                awardXPToProfile(keyB, 8);
            }
            document.getElementById("duel-result-content").innerHTML = `
    <div class="glass-card-glow p-8 text-center space-y-4" style="border-color:rgba(244,63,94,0.2);">
        <div class="text-6xl">⚔️</div>
        <h2 class="text-2xl font-black text-white">\${resultTitle}</h2>
        <div class="flex justify-around items-center mt-4">
            <div><div class="text-3xl font-black text-indigo-400">\${scoreA}</div><div class="text-xs font-bold text-gray-400 mt-1">\${nameA}</div></div>
            <div class="text-gray-600 font-black">VS</div>
            <div><div class="text-3xl font-black text-pink-400">\${scoreB}</div><div class="text-xs font-bold text-gray-400 mt-1">\${nameB}</div></div>
        </div>
        
        <!-- Überarbeitete Buttons -->
        <div class="grid grid-cols-2 gap-3 mt-6">
            <button onclick="startDuel()" class="btn-primary w-full text-center" style="background:var(--gradient-amber);box-shadow:0 4px 24px rgba(245,158,11,0.3);">
                🔄 Nochmal
            </button>
            <button onclick="switchView('menu')" class="btn-secondary w-full text-center">
                🏁 Beenden
            </button>
        </div>
    </div>`;
            duelState = null;
            switchView('duel-result');
            renderFamilyHub();
        }

        // ============================================================
        //  SCRABBLE LOGIK
        // ============================================================
        const SCRABBLE_LETTERS = [
            { letter: "A", count: 5, value: 1 }, { letter: "B", count: 2, value: 3 }, {
                letter: "C", count: 2,
                value: 4
            },
            { letter: "D", count: 4, value: 1 }, { letter: "E", count: 15, value: 1 }, {
                letter: "F", count: 2,
                value: 4
            },
            { letter: "G", count: 3, value: 2 }, { letter: "H", count: 4, value: 2 }, {
                letter: "I", count: 6,
                value: 1
            },
            { letter: "K", count: 2, value: 4 }, { letter: "L", count: 3, value: 2 }, {
                letter: "M", count: 4,
                value: 3
            },
            { letter: "N", count: 9, value: 1 }, { letter: "O", count: 3, value: 2 }, {
                letter: "P", count: 1,
                value: 4
            },
            { letter: "R", count: 6, value: 1 }, { letter: "S", count: 7, value: 1 }, {
                letter: "T", count: 6,
                value: 1
            },
            { letter: "U", count: 6, value: 1 }, { letter: "V", count: 1, value: 6 }, {
                letter: "W", count: 1,
                value: 3
            },
            { letter: "J", count: 1, value: 6 }, { letter: "X", count: 1, value: 8 }, {
                letter: "Y", count: 1,
                value: 10
            },
            { letter: "Z", count: 1, value: 3 }
        ];
        const SCRABBLE_VALUES = {};
        const SCRABBLE_BAG = [];
        SCRABBLE_LETTERS.forEach(l => {
            SCRABBLE_VALUES[l.letter] = l.value;
            for (let i = 0; i < l.count; i++)
                SCRABBLE_BAG.push(l.letter);
        });

        const SCRABBLE_DIFFICULTIES = {
            leicht: {
                letters: 6,
                targetMin: 3,
                targetMax: 4,
                time: 70,
                minWord: 3,
                filler: "EEEEENNNNIIIIRRRSSSAAATTTDDHHUULLGGMMOO",
                label: "🟢 Leicht"
            },
            mittel: {
                letters: 7,
                targetMin: 4,
                targetMax: 5,
                time: 55,
                minWord: 3,
                filler: "EEENNNIIIRRRSSSAAATTTDDHHUULLGGMMOOBWFKZ",
                label: "🟡 Mittel"
            },
            schwer: {
                letters: 8,
                targetMin: 5,
                targetMax: 7,
                time: 40,
                minWord: 4,
                filler: "EENNIIRRSSAATTDDHHUULLGGMMOOBBWWFFKKZZPPVJ",
                label: "🔴 Schwer"
            },
            experte: {
                letters: 9,
                targetMin: 6,
                targetMax: 9,
                time: 30,
                minWord: 5,
                filler: "KKZZPPFFWWBBVVJJXQGGMMOOUUDDLLTTNNEE",
                label: "🟣 Experte"
            },
            profi: {
                letters: 14,
                targetMin: 12,
                targetMax: 14,
                time: 60,
                minWord: 6,
                filler: "EEEEENNNNIIIIRRRSSSSAAAATTTTDDDHHHUULLGGMMOOBBWWFFKKZZPP",
                label: "🔥 Profi"
            }
        };

        const WORD_SET = new Set([
            ...(typeof GERMAN_WORDS_KIDS !== "undefined" ? GERMAN_WORDS_KIDS : []),
            ...(typeof GERMAN_WORDS_ADULT !== "undefined" ? GERMAN_WORDS_ADULT : [])
        ].map(w => w.toUpperCase()));

        async function isValidGermanWord(word) {
            if (!word || word.length < 2) return { status: "invalid" };
            const upper = word.toUpperCase();
            if (WORD_SET.has(upper)) return { status: "valid" };
            try {
                const controller = new AbortController();
                const timeout = setTimeout(() => controller.abort(), 4000);
                const response = await fetch("https://api.languagetool.org/v2/check", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: `text=${encodeURIComponent(word)}&language=de-DE`,
                    signal: controller.signal
                });
                clearTimeout(timeout);
                if (!response.ok) return { status: "unknown" };
                const data = await response.json();
                const hasSpellingError = (data.matches || []).some(m =>
                    (m.rule && m.rule.issueType === "misspelling") ||
                    (m.rule && m.rule.category && m.rule.category.id === "TYPOS")
                );
                return { status: hasSpellingError ? "invalid" : "valid" };
            } catch (e) {
                return { status: "unknown" };
            }
        }

        function generateScrabbleRack(difficulty, requireLetter, wordMode) {
            const cfg = SCRABBLE_DIFFICULTIES[difficulty] || SCRABBLE_DIFFICULTIES.mittel;
            const useAdult = (wordMode === "adult" || difficulty === "profi");
            const wordSource = (useAdult && typeof GERMAN_WORDS_ADULT !== "undefined") ?
                GERMAN_WORDS_ADULT :
                (typeof GERMAN_WORDS_KIDS !== "undefined" ? GERMAN_WORDS_KIDS : []);
            const pool = wordSource
                .filter(w => w.length >= cfg.targetMin && w.length <= cfg.targetMax && w.length <= cfg.letters);

            let letters;
            let solution = "";
            if (pool.length > 0) {
                solution = pool[Math.floor(Math.random() * pool.length)];
                letters = solution.split("");
            } else {
                letters = [];
            }

            const filler = (cfg.filler || "EEEEENNNNIIIRRRSSSAAATTTDDHHUULLGGMMOOBWFKZP").split("");
            while (letters.length < cfg.letters) {
                letters.push(filler[Math.floor(Math.random() * filler.length)]);
            }

            for (let i = letters.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [letters[i], letters[j]] = [letters[j], letters[i]];
            }

            let required = "";
            if (requireLetter) {
                const src = solution ? solution.split("") : letters;
                required = src[Math.floor(Math.random() * src.length)];
            }

            return { letters, solution, required };
        }

        function openScrabbleSetup() {
            const keys = Object.keys(ALL_PROFILES);
            if (keys.length === 0) return showToast("Ihr braucht mindestens einen Spieler!", "error");
            const box = document.getElementById("scrabble-player-checkboxes");
            box.innerHTML = keys.map((k, i) => `
                            <label class="flex items-center gap-2 bg-white/5 border border-white/5 rounded-xl p-3 cursor-pointer hover:bg-white/10 transition">
                                <input type="checkbox" class="scrabble-player-check w-5 h-5 accent-amber-500" value="${k}" ${i < 2 ? 'checked' : ''}>
                                <span class="font-bold text-white text-sm">${esc(ALL_PROFILES[k].name)}</span>
                            </label>`).join("");
            switchView('scrabble-setup');
        }

        function scrabbleTilesHTML(letters, big, required, selected, onTapFn) {
            const size = big ? "w-20 h-20" : "w-12 h-12";
            const textSize = big ? "text-4xl" : "text-2xl";
            const valSize = big ? "text-xs" : "text-[9px]";
            const interactive = !!onTapFn;
            const selectedSet = new Set(selected || []);
            let marked = false;
            return letters.map((l, idx) => {
                const isReq = required && l === required && !marked;
                if (isReq) marked = true;
                const isSelected = selectedSet.has(idx);
                const look = isSelected ?
                    "bg-slate-500/40 border-slate-400 opacity-40" :
                    isReq ?
                        "bg-emerald-200 border-emerald-500 ring-2 ring-emerald-400" :
                        "bg-amber-200 border-amber-400";
                const valColor = isReq ? "text-emerald-700" : "text-amber-700";
                const tag = interactive ? "button" : "div";
                const attrs = interactive
                    ? `type="button" ${isSelected ? "disabled" : ""} onclick="${onTapFn}(${idx})"`
                    : "";
                return `
                                <${tag} ${attrs} class="${size} ${look} rounded-lg shadow-md flex items-center justify-center relative border-2 ${interactive ? "cursor-pointer active:scale-95 transition" : ""}">
                                    <span class="${textSize} font-black text-slate-900">${l}</span>
                                    <span class="absolute bottom-0.5 right-1 ${valSize} font-bold ${valColor}">${SCRABBLE_VALUES[l]}</span>
                                    ${isReq ? '<span class="absolute -top-2 -left-2 text-xs">📌</span>' : ''}
                                </${tag}>`;
            }).join("");
        }

        function renderScrabbleTiles(letters, required) {
            document.getElementById("scrabble-tiles").innerHTML = scrabbleTilesHTML(letters, false, required);
        }

        function computeScrabbleWordScore(word, letters) {
            const available = [...letters];
            let score = 0;
            for (const ch of word) {
                const idx = available.indexOf(ch);
                if (idx === -1) return { valid: false };
                score += SCRABBLE_VALUES[ch] || 0;
                available.splice(idx, 1);
            }
            const bonus = word.length === letters.length ? 50 : 0;
            return { valid: true, score: score + bonus, bonus };
        }

        async function evaluateScrabbleWord(word, letters, opts) {
            const o = opts || {};
            const w = (word || "").trim().toUpperCase();
            const min = o.minWord || 2;
            if (w.length < min) return { points: 0, status: "tooshort", word: w, min };
            if (o.required && !w.includes(o.required)) {
                return { points: 0, status: "missing", word: w, required: o.required };
            }
            if (o.used && o.used.has(w)) return { points: 0, status: "repeat", word: w };
            const tileResult = computeScrabbleWordScore(w, letters);
            if (!tileResult.valid) return { points: 0, status: "letters", word: w };
            const check = await isValidGermanWord(w);
            if (check.status === "valid") {
                if (o.used && o.addToUsed !== false) o.used.add(w);
                return { points: tileResult.score, status: "valid", bonus: tileResult.bonus, word: w };
            }
            if (check.status === "unknown") return { points: 0, status: "unknown", word: w };
            return { points: 0, status: "invalid", word: w };
        }

        let scrabbleState = null;

        function startScrabbleGame() {
            const checked = Array.from(document.querySelectorAll(".scrabble-player-check:checked")).map(c => c.value);
            if (checked.length === 0) return showToast("Bitte mindestens einen Spieler auswählen!", "error");
            const rounds = parseInt(document.getElementById("scrabble-rounds").value);
            const difficulty = document.getElementById("scrabble-difficulty").value;
            const wordMode = (document.getElementById("scrabble-wordmode") || {}).value || "kids";
            const requireLetter = !!(document.getElementById("scrabble-require-letter") || {}).checked;
            const startRack = generateScrabbleRack(difficulty, requireLetter, wordMode);
            // scrabbleState = {
            //     playerKeys: checked,
            //     rounds,
            //     round: 1,
            //     playerIndex: 0,
            //     difficulty,
            //     wordMode,
            //     currentLetters: startRack.letters,
            //     solution: startRack.solution,
            //     required: startRack.required,
            //     requireLetter,
            //     usedWords: new Set(),
            //     scores: {}
            // };
            scrabbleState = {
                playerKeys: checked,
                rounds,
                round: 1,
                playerIndex: 0,
                difficulty,
                wordMode,
                currentLetters: startRack.letters,
                solution: startRack.solution,
                required: startRack.required,
                requireLetter,
                usedWords: new Set(),
                scores: {},
                // NEUE ACTION-MODE VARIABLEN ↓
                actionMode: document.getElementById('scrabble-action-mode').checked,
                changeInterval: null,
                nextChangeTime: 0,
                changeCount: 0,
                maxChanges: 5,
                bonusEarned: false
            };
            checked.forEach(k => {
                scrabbleState.scores[k] = 0;
            });
            scrabbleState.streaks = {};
            checked.forEach(k => { scrabbleState.streaks[k] = 0; });
            switchView('scrabble-play');
            showScrabbleTurnIntro();
        }

        // function showScrabbleTurnIntro() {
        //     const key = scrabbleState.playerKeys[scrabbleState.playerIndex];
        //     const isSolo = scrabbleState.playerKeys.length === 1;
        //     document.getElementById("scrabble-turn-title").innerText = isSolo ?
        //         `Los geht's, ${esc(ALL_PROFILES[key].name)}!` :
        //         `${esc(ALL_PROFILES[key].name)} ist dran!`;

        //     let sub = isSolo ?
        //         `Runde ${scrabbleState.round}/${scrabbleState.rounds} – knack deinen Highscore!` :
        //         `Runde ${scrabbleState.round}/${scrabbleState.rounds} – gib das Handy weiter.`;
        //     if (scrabbleState.lastSolution) {
        //         sub = `💡 Letzte Runde war z.B. "${scrabbleState.lastSolution}" möglich.\n` + sub;
        //         scrabbleState.lastSolution = null;
        //     }
        //     document.getElementById("scrabble-turn-sub").innerText = sub;

        //     document.getElementById("scrabble-turn-intro").classList.remove("hidden");
        //     document.getElementById("scrabble-play-area").classList.add("hidden");
        // }

        function showScrabbleTurnIntro() {
            const key = scrabbleState.playerKeys[scrabbleState.playerIndex];
            const isSolo = scrabbleState.playerKeys.length === 1;
            document.getElementById("scrabble-turn-title").innerText = isSolo ?
                `Los geht's, ${esc(ALL_PROFILES[key].name)}!` :
                `${esc(ALL_PROFILES[key].name)} ist dran!`;

            let sub = isSolo ?
                `Runde ${scrabbleState.round}/${scrabbleState.rounds} – knack deinen Highscore!` :
                `Runde ${scrabbleState.round}/${scrabbleState.rounds} – gib das Handy weiter.`;

            // NEU: Action-Mode Hinweis
            if (scrabbleState.actionMode) {
                sub += ` ⚡ Action-Modus: Das komplette Wort ändert sich!`;
            }

            if (scrabbleState.lastSolution) {
                sub = `💡 Letzte Runde war z.B. "${scrabbleState.lastSolution}" möglich.\n` + sub;
                scrabbleState.lastSolution = null;
            }
            document.getElementById("scrabble-turn-sub").innerText = sub;

            document.getElementById("scrabble-turn-intro").classList.remove("hidden");
            document.getElementById("scrabble-play-area").classList.add("hidden");
        }


        function beginScrabbleTurn() {
            document.getElementById("scrabble-turn-intro").classList.add("hidden");
            document.getElementById("scrabble-play-area").classList.remove("hidden");

            // Action-Status einblenden
            const statusEl = document.getElementById("scrabble-action-status");
            if (statusEl) {
                if (scrabbleState.actionMode) {
                    statusEl.classList.remove("hidden");
                    statusEl.innerText = "⚡ Action-Modus aktiv – Das komplette Wort ändert sich!";
                } else {
                    statusEl.classList.add("hidden");
                }
            }

            const key = scrabbleState.playerKeys[scrabbleState.playerIndex];
            document.getElementById("scrabble-progress").innerText =
                `Runde ${scrabbleState.round}/${scrabbleState.rounds} – ${esc(ALL_PROFILES[key].name)}`;
            renderScrabbleTiles(scrabbleState.currentLetters, scrabbleState.required);

            const submitBtn = document.querySelector('#scrabble-play-area button[onclick="submitScrabbleWord()"]');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.classList.remove("opacity-50");
            }
            scrabbleSubmitting = false;

            const input = document.getElementById("scrabble-word-input");
            input.value = "";
            input.disabled = false;
            document.getElementById("scrabble-live-feedback").innerText = "";
            input.oninput = () => {
                const word = input.value.trim().toUpperCase();
                const fb = document.getElementById("scrabble-live-feedback");
                if (word.length === 0) { fb.innerText = ""; return; }
                const result = computeScrabbleWordScore(word, scrabbleState.currentLetters);
                fb.innerText = result.valid ?
                    `${result.score} Punkte möglich${result.bonus ? " (inkl. +50 Bonus!)" : ""} – wird beim Einreichen geprüft` :
                    "❌ Diese Buchstaben hast du nicht (oder zu oft benutzt)";
                fb.className = "text-center text-sm font-bold h-5 " + (result.valid ? "text-emerald-400" :
                    "text-rose-400");
            };

            let timeLeft = SCRABBLE_DIFFICULTIES[scrabbleState.difficulty].time;
            document.getElementById("scrabble-timer").innerText = timeLeft;
            clearInterval(scrabbleTimerInterval);
            scrabbleTimerInterval = setInterval(() => {
                timeLeft--;
                document.getElementById("scrabble-timer").innerText = timeLeft;
                if (timeLeft > 0 && timeLeft <= 5) SFX.tick();
                if (timeLeft <= 0) {
                    clearInterval(scrabbleTimerInterval);
                    SFX.timeUp();
                    submitScrabbleWord();
                }
            }, 1000);

            // ⚡ Action-Modus starten
            if (scrabbleState.actionMode) {
                scrabbleState.changeCount = 0;
                scrabbleState.bonusEarned = false;
                const timing = getActionTiming(scrabbleState.difficulty);
                scrabbleState.maxChanges = timing.maxChanges;
                showActionFeedback("⚡ Action-Modus aktiv!");
                startActionMode();
            }
        }


        // function beginScrabbleTurn() {
        //     document.getElementById("scrabble-turn-intro").classList.add("hidden");
        //     document.getElementById("scrabble-play-area").classList.remove("hidden");
        //     const key = scrabbleState.playerKeys[scrabbleState.playerIndex];
        //     document.getElementById("scrabble-progress").innerText =
        //         `Runde ${scrabbleState.round}/${scrabbleState.rounds} – ${esc(ALL_PROFILES[key].name)}`;
        //     renderScrabbleTiles(scrabbleState.currentLetters, scrabbleState.required);

        //     // ... bestehender Code (Timer, Input, etc.) ...

        //     // NEU: Action-Modus starten
        //     if (scrabbleState.actionMode) {
        //         scrabbleState.changeCount = 0;
        //         scrabbleState.bonusEarned = false;
        //         showActionFeedback("⚡ Action-Modus aktiv!");
        //         startActionMode();
        //     }
        // }

        let scrabbleSubmitting = false;

        async function submitScrabbleWord() {
            if (scrabbleSubmitting) return;
            scrabbleSubmitting = true;
            clearInterval(scrabbleTimerInterval);

            // NEU: Action-Mode stoppen (für diese Runde)
            stopActionMode();

            const submitBtn = document.querySelector('#scrabble-play-area button[onclick="submitScrabbleWord()"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.classList.add("opacity-50");
            }
            const word = cleanInput(document.getElementById("scrabble-word-input").value, 20).toUpperCase();
            const key = scrabbleState.playerKeys[scrabbleState.playerIndex];

            const fb = document.getElementById("scrabble-live-feedback");
            if (fb) {
                fb.innerText = "🔍 Prüfe Wort...";
                fb.className = "text-center text-sm font-bold h-5 text-gray-400";
            }

            const res = await evaluateScrabbleWord(word, scrabbleState.currentLetters, {
                minWord: (SCRABBLE_DIFFICULTIES[scrabbleState.difficulty] || {}).minWord,
                required: scrabbleState.required,
                used: scrabbleState.usedWords
            });
            let points = res.points;
            const info = wordStatusInfo(res.status, res);
            const note = info.text ? ` – ${info.text}` : "";
            const parts = [];

            if (scrabbleState.actionMode && points > 0 && !scrabbleState.bonusEarned) {
                points += 5;
                scrabbleState.bonusEarned = true;
                parts.push("Action +5");
                showActionFeedback("⚡ +5 Bonus-Punkte für schnelles Einreichen!");
            }

            if (!scrabbleState.streaks) scrabbleState.streaks = {};
            if (points > 0) {
                scrabbleState.streaks[key] = (scrabbleState.streaks[key] || 0) + 1;
                // Offline: wer als Erster in der Runde einreicht = firstTry (hier immer der aktuelle Spieler)
                const b = (typeof calcAnswerBonus === "function")
                    ? calcAnswerBonus(scrabbleState.streaks[key], true)
                    : { bonus: 0, parts: [] };
                points += b.bonus;
                parts.push(...(b.parts || []));
            } else {
                scrabbleState.streaks[key] = 0;
            }

            scrabbleState.scores[key] += points;
            if (points > 0) {
                SFX.correct();
                if (typeof showPointsPopup === "function") {
                    showPointsPopup(points, parts.join(" · ") || (word ? '"' + word + '"' : "Treffer"));
                }
            } else {
                SFX.wrong();
            }
            showToast(`${esc(ALL_PROFILES[key].name)}: +${points} Punkte${word ? ` für "${word}"` : ""}${note}`, points > 0 ?
                "success" : "error");

            scrabbleState.playerIndex++;
            if (scrabbleState.playerIndex >= scrabbleState.playerKeys.length) {
                scrabbleState.lastSolution = scrabbleState.solution;
                scrabbleState.playerIndex = 0;
                scrabbleState.round++;
                if (scrabbleState.round > scrabbleState.rounds) { finishScrabbleGame(); return; }
                const nextRack = generateScrabbleRack(scrabbleState.difficulty, scrabbleState.requireLetter,
                    scrabbleState.wordMode);
                scrabbleState.currentLetters = nextRack.letters;
                scrabbleState.solution = nextRack.solution;
                scrabbleState.required = nextRack.required;
            }
            showScrabbleTurnIntro();
        }
        // let scrabbleSubmitting = false;

        // async function submitScrabbleWord() {
        //     if (scrabbleSubmitting) return;
        //     scrabbleSubmitting = true;
        //     clearInterval(scrabbleTimerInterval);

        //     // NEU: Action-Mode stoppen (für diese Runde)
        //     stopActionMode();

        //     const submitBtn = document.querySelector('#scrabble-play-area button[onclick="submitScrabbleWord()"]');
        //     if (submitBtn) {
        //         submitBtn.disabled = true;
        //         submitBtn.classList.add("opacity-50");
        //     }
        //     const word = cleanInput(document.getElementById("scrabble-word-input").value, 20).toUpperCase();
        //     const key = scrabbleState.playerKeys[scrabbleState.playerIndex];

        //     const fb = document.getElementById("scrabble-live-feedback");
        //     if (fb) {
        //         fb.innerText = "🔍 Prüfe Wort...";
        //         fb.className = "text-center text-sm font-bold h-5 text-gray-400";
        //     }

        //     const res = await evaluateScrabbleWord(word, scrabbleState.currentLetters, {
        //         minWord: (SCRABBLE_DIFFICULTIES[scrabbleState.difficulty] || {}).minWord,
        //         required: scrabbleState.required,
        //         used: scrabbleState.usedWords
        //     });
        //     let points = res.points;
        //     const info = wordStatusInfo(res.status, res);
        //     const note = info.text ? ` – ${info.text}` : "";

        //     // NEU: Bonus für schnelles Einreichen im Action-Modus
        //     if (scrabbleState.actionMode && points > 0 && !scrabbleState.bonusEarned) {
        //         const bonus = 5;
        //         points += bonus;
        //         scrabbleState.bonusEarned = true;
        //         showActionFeedback(`⚡ +${bonus} Bonus-Punkte für schnelles Einreichen!`);
        //         SFX.coin();
        //     }

        //     scrabbleState.scores[key] += points;
        //     if (points > 0) SFX.correct();
        //     else SFX.wrong();
        //     showToast(`${esc(ALL_PROFILES[key].name)}: +${points} Punkte${word ? ` für "${word}"` : ""}${note}`, points > 0 ?
        //         "success" : "error");

        //     // ... restlicher Code bleibt gleich ...
        // }


        // const submitBtn = document.querySelector('#scrabble-play-area button[onclick="submitScrabbleWord()"]');
        // if (submitBtn) {
        //     submitBtn.disabled = true;
        //     submitBtn.classList.add("opacity-50");
        // }
        // const word = cleanInput(document.getElementById("scrabble-word-input").value, 20).toUpperCase();
        // const key = scrabbleState.playerKeys[scrabbleState.playerIndex];

        // const fb = document.getElementById("scrabble-live-feedback");
        // if (fb) {
        //     fb.innerText = "🔍 Prüfe Wort...";
        //     fb.className = "text-center text-sm font-bold h-5 text-gray-400";
        // }

        // const res = await evaluateScrabbleWord(word, scrabbleState.currentLetters, {
        //     minWord: (SCRABBLE_DIFFICULTIES[scrabbleState.difficulty] || {}).minWord,
        //     required: scrabbleState.required,
        //     used: scrabbleState.usedWords
        // });
        // const points = res.points;
        // const info = wordStatusInfo(res.status, res);
        // const note = info.text ? ` – ${info.text}` : "";

        // scrabbleState.scores[key] += points;
        // if (points > 0) SFX.correct();
        // else SFX.wrong();
        // showToast(`${esc(ALL_PROFILES[key].name)}: +${points} Punkte${word ? ` für "${word}"` : ""}${note}`, points > 0 ?
        //     "success" : "error");

        // scrabbleState.playerIndex++;
        // if (scrabbleState.playerIndex >= scrabbleState.playerKeys.length) {
        //     scrabbleState.lastSolution = scrabbleState.solution;
        //     scrabbleState.playerIndex = 0;
        //     scrabbleState.round++;
        //     if (scrabbleState.round > scrabbleState.rounds) { finishScrabbleGame(); return; }
        //     const nextRack = generateScrabbleRack(scrabbleState.difficulty, scrabbleState.requireLetter,
        //         scrabbleState.wordMode);
        //     scrabbleState.currentLetters = nextRack.letters;
        //     scrabbleState.solution = nextRack.solution;
        //     scrabbleState.required = nextRack.required;
        // }
        // showScrabbleTurnIntro();


        function wordStatusInfo(status, extra) {
            const e = extra || {};
            switch (status) {
                case "valid":
                    return { icon: "✅", text: "" };
                case "letters":
                    return { icon: "❌", text: "Buchstaben nicht vorhanden" };
                case "tooshort":
                    return { icon: "❌", text: `zu kurz (min. ${e.min || 2} Buchstaben)` };
                case "missing":
                    return { icon: "❌", text: `Pflichtbuchstabe ${e.required || ""} fehlt` };
                case "repeat":
                    return { icon: "🔁", text: "Wort gab es in dieser Runde schon" };
                case "unknown":
                    return { icon: "❓", text: "Wort unbekannt (offline nicht prüfbar)" };
                default:
                    return { icon: "❌", text: "kein gültiges Wort" };
            }
        }
        // ============================================================
        // ACTION-MODE FÜR SCRABBLE
        // ============================================================

        function startActionMode() {
            if (!scrabbleState || !scrabbleState.actionMode) return;

            const timing = getActionTiming(scrabbleState.difficulty);
            // Erste Aenderung nach fester firstChange-Zeit
            scrabbleState.nextChangeTime = Date.now() + timing.firstChange * 1000;

            // Alle 500ms pruefen ob Zeit fuer Aenderung gekommen ist
            scrabbleState.changeInterval = setInterval(() => {
                if (Date.now() >= scrabbleState.nextChangeTime) {
                    changeLettersRandomly();
                    scheduleNextChange();
                    scrabbleState.changeCount++;

                    if (scrabbleState.changeCount >= scrabbleState.maxChanges) {
                        clearInterval(scrabbleState.changeInterval);
                        scrabbleState.changeInterval = null;
                        showActionFeedback("⏰ Action-Modus beendet!");
                    }
                }
            }, 500);
        }


        function scheduleNextChange() {
            // Abstand zufaellig, aber im festen Rahmen (mit Mindestabstand)
            const timing = getActionTiming(scrabbleState.difficulty);
            scrabbleState.nextChangeTime = Date.now() + actionRandomGap(timing) * 1000;
        }

        function changeLettersRandomly() {
            // KOMPLETT NEUES WORT GENERIEREN
            const difficulty = scrabbleState.difficulty;
            const wordMode = scrabbleState.wordMode;
            const requireLetter = scrabbleState.requireLetter;

            // Neues Wort generieren
            const newRack = generateScrabbleRack(difficulty, requireLetter, wordMode);

            // Buchstaben ersetzen
            scrabbleState.currentLetters = newRack.letters;
            scrabbleState.solution = newRack.solution;
            scrabbleState.required = newRack.required;

            // Buchstaben neu rendern
            renderScrabbleTiles(scrabbleState.currentLetters, scrabbleState.required);

            // Eingabefeld zurücksetzen
            const input = document.getElementById("scrabble-word-input");
            if (input) {
                input.value = "";
                input.focus();
            }

            // Feedback anzeigen
            showActionFeedback("⚡ Das komplette Wort hat sich geändert!");
            SFX.tick();

            // Bonuschance zurücksetzen
            scrabbleState.bonusEarned = false;
        }

        function showActionFeedback(text) {
            const fb = document.getElementById("scrabble-live-feedback");
            if (fb) {
                fb.innerText = text;
                fb.className = "text-center text-sm font-bold h-5 text-amber-400 animate-pulse";
                setTimeout(() => {
                    if (fb && scrabbleState && scrabbleState.actionMode) {
                        fb.className = "text-center text-sm font-bold h-5 text-gray-400";
                        fb.innerText = "⚡ Action-Modus aktiv!";
                    }
                }, 2500);
            }
        }

        function stopActionMode() {
            if (scrabbleState && scrabbleState.changeInterval) {
                clearInterval(scrabbleState.changeInterval);
                scrabbleState.changeInterval = null;
            }
        }

        // function finishScrabbleGame() {
        //     const sorted = [...scrabbleState.playerKeys].sort((a, b) => scrabbleState.scores[b] - scrabbleState.scores[a]);
        //     sorted.forEach((key, i) => { awardXPToProfile(key, i === 0 ? 15 : 5); });

        function finishScrabbleGame() {
            // NEU: Action-Mode stoppen
            stopActionMode();

            const sorted = [...scrabbleState.playerKeys].sort((a, b) => scrabbleState.scores[b] - scrabbleState.scores[a]);
            // ... restlicher Code bleibt gleich ...

            const medals = ["🥇", "🥈", "🥉"];
            let html = `<div class="glass-card-glow p-8 text-center space-y-4" style="border-color:rgba(245,158,11,0.2);">
                            <div class="text-6xl">🔤</div>
                            <h2 class="text-2xl font-black text-white mb-2">Wort-Duell beendet!</h2>
                            <div class="space-y-3 max-w-sm mx-auto">`;
            sorted.forEach((key, i) => {
                const medal = i < 3 ? medals[i] : `${i + 1}.`;
                html += `<div class="flex items-center justify-between bg-white/5 border ${i === 0 ? 'border-amber-400' : 'border-white/5'} rounded-xl p-3">
                                    <div class="flex items-center gap-3"><span class="text-2xl">${medal}</span><span class="font-bold text-white">${esc(ALL_PROFILES[key].name)}</span></div>
                                    <div class="font-black text-amber-400">${scrabbleState.scores[key]} Pkt.</div>
                                </div>`;
            });
            html += `</div>
                        <div class="grid grid-cols-2 gap-3 mt-6">
                            <button onclick="startScrabbleGame()" class="btn-primary w-full text-center" style="background:var(--gradient-amber);box-shadow:0 4px 24px rgba(245,158,11,0.3);">🔄 Nochmal</button>
                            <button onclick="switchView('menu')" class="btn-secondary w-full text-center">🏁 Beenden</button>
                        </div>
                    </div>`;
            document.getElementById("scrabble-result-content").innerHTML = html;
            scrabbleState = null;
            switchView('scrabble-result');
            renderFamilyHub();
            try { if (typeof confetti === 'function') confetti(); } catch (e) { }
            SFX.win();
        }

