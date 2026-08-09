        // ============================================================
        //  QUIZ LOGIK
        // ============================================================
        let currentQuestions = [],
            qIndex = 0;
        let quizMode = 'mc';

        function setQuizMode(m) {
            quizMode = m;
            document.getElementById("qmode-mc").className =
                `flex-1 py-2 px-1 rounded-lg font-bold transition-all text-sm ${m === 'mc' ? 'active' : ''}`;
            document.getElementById("qmode-flashcards").className =
                `flex-1 py-2 px-1 rounded-lg font-bold transition-all text-sm ${m === 'flashcards' ? 'active' : ''}`;
        }

        function showQuizSetup() {
            switchView('quiz-setup');
            setupCategorySelectors("quiz-area", "sub-category", "lernen");
            const count = currentPlayer && currentPlayer.wrongQuestions ? currentPlayer.wrongQuestions.length : 0;
            const btn = document.getElementById("wrong-questions-btn");
            if (btn) {
                if (count > 0) {
                    btn.classList.remove("hidden");
                    btn.querySelector("span.wq-count").innerText = count;
                } else { btn.classList.add("hidden"); }
            }
        }

        function shuffleAnswers(q) {
            if (!q || !Array.isArray(q.answers) || q.noShuffle) return q;
            const order = q.answers.map((_, i) => i);
            for (let i = order.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [order[i], order[j]] = [order[j], order[i]];
            }
            return Object.assign({}, q, {
                answers: order.map(i => q.answers[i]),
                correct: order.indexOf(q.correct)
            });
        }

        function prepareQuestions(list) {
            return (list || []).map(shuffleAnswers);
        }

        function showLessonResultScreen() {
            endSoloStudySession();
            vergissSoloFortschritt();
            const total = testAnsweredCount || 0;
            const correct = testCorrectCount || 0;
            const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
            const emoji = pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "💪";
            const msg = pct >= 80 ? "Super gemacht!" : pct >= 50 ? "Gut gemacht, weiter so!" : "Dranbleiben, das wird noch!";
            document.getElementById("test-result-content").innerHTML = `
        <div class="glass-card-glow p-8 text-center space-y-4" style="border-color:rgba(99,102,241,0.2);">
            <div class="text-7xl">${emoji}</div>
            <h2 class="text-2xl font-black text-white">${msg}</h2>
            <div class="text-5xl font-black text-emerald-400">${correct} / ${total}</div>
            <div class="text-gray-400 font-bold">${pct}% richtig</div>
            <div class="flex gap-3 mt-4">
                <button onclick="replayLesson()" class="flex-1 p-3 bg-blue-600 rounded-xl font-bold text-white shadow-lg hover:bg-blue-500 transition">🔄 Nochmal</button>
                <button onclick="switchView('menu')" class="flex-1 p-3 bg-emerald-600 rounded-xl font-bold text-white shadow-lg hover:bg-emerald-500 transition">⬅ Beenden</button>
            </div>
        </div>`;
            switchView('test-result');
        }

        function replayLesson() {
            if (window.lastLessonQuestions && window.lastLessonQuestions.length) {
                launchQuiz(window.lastLessonQuestions);
            } else {
                switchView('quiz-setup');
            }
        }

        function endLesson() {
            if (testMode) { leaveQuiz('menu'); return; }
            if (quizMode !== 'flashcards' && testAnsweredCount > 0) {
                showLessonResultScreen();
            } else {
                switchView('menu');
            }
        }

        let soloSessionStartedAt = null;

        function trackStudySeconds(seconds) {
            if (!currentPlayer || !activePlayerKey || !(seconds > 0)) return;
            const day = new Date().toISOString().slice(0, 10);
            if (!currentPlayer.studyLog) currentPlayer.studyLog = {};
            currentPlayer.studyLog[day] = (currentPlayer.studyLog[day] || 0) + Math.round(seconds);
            // nur letzte 60 Tage behalten
            const keys = Object.keys(currentPlayer.studyLog).sort();
            while (keys.length > 60) {
                delete currentPlayer.studyLog[keys.shift()];
            }
            if (typeof savePlayerProgress === "function") savePlayerProgress();
        }

        function endSoloStudySession() {
            if (soloSessionStartedAt) {
                const sec = Math.round((Date.now() - soloSessionStartedAt) / 1000);
                if (sec >= 15) trackStudySeconds(sec);
                soloSessionStartedAt = null;
            }
            if (window.__eduplayBlitzActive) {
                window.__eduplayBlitzActive = false;
                if (typeof dismissWeaknessSuggestion === "function") dismissWeaknessSuggestion(true);
            }
        }

        function launchQuiz(questions) {
            if (!questions || questions.length === 0) { showToast("Keine Fragen gefunden!", "error"); return false; }
            currentQuestions = prepareQuestions([...questions].sort(() => Math.random() - 0.5));

            testMode = false;
            testAnsweredCount = 0;
            testCorrectCount = 0;
            window.lastLessonQuestions = questions;
            soloSessionStartedAt = Date.now();
            document.getElementById("test-timer-bar").classList.add("hidden");
            qIndex = 0;
            switchView('quiz');
            showQuestion();
            merkeSoloFortschritt();
            return true;
        }

        function startFormulaSession() {
            if (typeof FORMULA_DATABASE === 'undefined') { showToast("Formeln nicht geladen!", "error"); return; }
            const key = document.getElementById("formel-area")?.value;
            const block = key && FORMULA_DATABASE[key];
            if (!block || !block.formulas || !block.formulas.length) { showToast("Keine Formeln für diese Klasse!", "error"); return; }
            const formulas = block.formulas.slice();
            let questions;
            if (quizMode === 'flashcards') {
                questions = formulas.map(f => ({
                    category: "formel_" + key, question: f.name,
                    answers: [f.formula], correct: 0,
                    explanation: f.explanation || "", noShuffle: true
                }));
            } else {
                const pool = [...new Set(formulas.map(f => f.formula))];
                questions = formulas.map(f => {
                    const distr = pool.filter(x => x !== f.formula).sort(() => Math.random() - 0.5).slice(0, 3);
                    return {
                        category: "formel_" + key,
                        question: `Wie lautet die Formel für: ${f.name}?`,
                        answers: [f.formula, ...distr], correct: 0,
                        explanation: f.formula + (f.explanation ? " — " + f.explanation : "")
                    };
                });
            }
            questions.sort(() => Math.random() - 0.5);
            launchQuiz(questions);
        }

        function startQuiz() {
            const formelView = document.getElementById('view-formel-setup');
            if (formelView && !formelView.classList.contains('hidden')) return startFormulaSession();
            if (typeof QUESTIONS_DATABASE === 'undefined') {
                showToast("Fehler: Datenbank nicht geladen!", "error");
                return;
            }
            const cat = document.getElementById("sub-category")?.value;
            if (!cat) {
                showToast("Bitte ein Thema auswählen!", "error");
                return;
            }
            const questions = questionsForKey(cat);
            if (!questions || questions.length === 0) {
                showToast("Keine Fragen für dieses Thema gefunden!", "error");
                return;
            }
            // Für die "Weitermachen?"-Karte auf der Startseite
            if (typeof merkeLetzteAktivitaet === "function") merkeLetzteAktivitaet(cat);
            launchQuiz(questions);
        }

        function startWrongQuestionsQuiz() {
            if (!currentPlayer || !currentPlayer.wrongQuestions || currentPlayer.wrongQuestions.length === 0) {
                return showToast("Keine offenen Fragen zum Wiederholen! 🎉", "success");
            }
            const qs = currentPlayer.wrongQuestions
                .map(w => QUESTIONS_DATABASE.find(q => q.category === w.category && q.question === w.question))
                .filter(Boolean).sort(() => Math.random() - 0.5);
            launchQuiz(qs);
        }

        async function leaveQuiz(zielView) {
            if (testMode) {
                if (!(await appConfirm("Timer stoppt – du kannst den Test später fortsetzen.", {
                    titel: "Test verlassen?", icon: "⏸", okText: "Verlassen", abbrechenText: "Weitermachen"
                }))) return;
                clearInterval(testTimerInterval);
                testTimerInterval = null;
                merkeTestFortschritt();
                testMode = false;
                const bar = document.getElementById("test-timer-bar");
                if (bar) bar.classList.add("hidden");
            } else {
                endSoloStudySession();
                vergissSoloFortschritt();
            }
            switchView(zielView || 'family-hub');
        }
        function showQuestion() {
            const q = currentQuestions[qIndex];
            const optsContainer = document.getElementById("options-container");
            const expBox = document.getElementById("explanation-box");
            optsContainer.innerHTML = "";
            expBox.classList.add("hidden");
            document.getElementById("next-question-btn").classList.add("hidden");

            if (quizMode === 'flashcards') {
                const speakBtn0 = document.getElementById("question-speak-btn");
                if (speakBtn0) speakBtn0.classList.add("hidden");
                document.getElementById("question-text").innerText = "Klicke zum Umdrehen";
                optsContainer.innerHTML =
                    `<div class="flip-card w-full h-64 cursor-pointer" onclick="this.classList.toggle('flipped')">
                                <div class="flip-card-inner shadow-lg">
                                    <div class="flip-card-front glass-card-glow flex flex-col items-center justify-center font-bold text-xl text-white p-6 text-center" style="background:rgba(99,102,241,0.15);border-color:rgba(99,102,241,0.2);">${q.question}</div>
                                    <div class="flip-card-back glass-card-glow flex flex-col items-center justify-center text-white p-6 text-center" style="background:rgba(236,72,153,0.15);border-color:rgba(236,72,153,0.2);">
                                        <span class="text-yellow-400 font-black mb-3">Lösung: ${q.answers[q.correct]}</span>
                                        <span class="text-sm font-medium bg-black/20 p-3 rounded-lg leading-snug">${q.explanation}</span>
                                    </div>
                                </div>
                            </div>
                            <button onclick="triggerNextQuestion()" class="mt-4 btn-primary w-full text-center">Nächste Karte ➔</button>`;
            } else {
                document.getElementById("question-text").innerText = q.question;
                if (typeof updateSpeakButtonForQuestion === 'function') updateSpeakButtonForQuestion(q);
                q.answers.forEach((ans, i) => {
                    const b = document.createElement("button");
                    b.className =
                        "w-full p-4 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-white mt-2 border border-white/5 transition-colors";
                    b.innerText = ans;
                    b.onclick = () => checkQuiz(i, q.correct, q.explanation, q.answers[q.correct]);
                    optsContainer.appendChild(b);
                });
            }
        }

        function checkQuiz(sel, cor, exp, correctAnswerText) {
            if (testMode && testTimeRemaining <= 0) return;
            const btns = document.getElementById("options-container").children;
            for (let i = 0; i < btns.length; i++) {
                btns[i].disabled = true;
                if (i === cor) btns[i].className = "w-full p-4 bg-emerald-600 rounded-xl font-bold text-white mt-2 shadow-md";
                else if (i === sel) btns[i].className = "w-full p-4 bg-rose-600 rounded-xl font-bold text-white mt-2 opacity-60";
                else btns[i].classList.add("opacity-30");
            }

            const q = currentQuestions[qIndex];
            if (currentPlayer) {
                if (!currentPlayer.stats) currentPlayer.stats = {};
                if (!currentPlayer.stats[q.category]) currentPlayer.stats[q.category] = { attempts: 0, correct: 0 };
                currentPlayer.stats[q.category].attempts++;
                if (!currentPlayer.wrongQuestions) currentPlayer.wrongQuestions = [];
                if (sel === cor) {
                    currentPlayer.stats[q.category].correct++;
                    currentPlayer.wrongQuestions = currentPlayer.wrongQuestions.filter(w => !(w.category === q.category && w.question === q.question));
                } else {
                    const alreadyThere = currentPlayer.wrongQuestions.some(w => w.category === q.category && w.question === q.question);
                    if (!alreadyThere) currentPlayer.wrongQuestions.push({
                        category: q.category,
                        question: q.question
                    });
                }
            }
            testAnsweredCount++; if (sel === cor) testCorrectCount++;

            const expBox = document.getElementById("explanation-box");
            if (sel === cor) {
                addXP(10);
                if (typeof confetti === 'function') confetti();
                SFX.correct();
                expBox.innerHTML =
                    `<div class="font-black text-emerald-400 mb-1 flex items-center gap-2"><span class="text-2xl">✅</span> Super gemacht!</div><div class="text-gray-300 text-sm mt-2">${exp}</div>`;
                expBox.className =
                    "p-4 bg-white/5 border-l-4 border-emerald-500 rounded-xl text-left mt-5 shadow-inner block";
            } else {
                savePlayerProgress();
                SFX.wrong();
                showToast("Leider falsch!", "error");
                expBox.innerHTML =
                    `<div class="font-black text-rose-400 mb-2 flex items-center gap-2"><span class="text-2xl">❌</span> Nicht ganz.</div><div class="text-white font-bold bg-rose-900/20 p-2 rounded-lg mb-3 border border-rose-500/30">Richtig ist: <span class="text-rose-300">${correctAnswerText}</span></div><div class="text-gray-300 text-sm">${exp}</div>`;
                expBox.className =
                    "p-4 bg-white/5 border-l-4 border-rose-500 rounded-xl text-left mt-5 shadow-inner block";
            }
            document.getElementById("next-question-btn").classList.remove("hidden");
        }

        function triggerNextQuestion() {
            qIndex++;
            if (testMode) {
                if (qIndex < currentQuestions.length && testTimeRemaining > 0) {
                    showQuestion();
                    merkeTestFortschritt();
                } else finishTest();
            } else {
                if (qIndex < currentQuestions.length) {
                    showQuestion();
                    merkeSoloFortschritt();
                } else {
                    endSoloStudySession();
                    vergissSoloFortschritt();
                    if (quizMode !== 'flashcards' && testAnsweredCount > 0) {
                        showLessonResultScreen();
                    } else {
                        showToast(window.__eduplayBlitzActive === false || window.__eduplayBlitzCat
                            ? "Blitz-Übung geschafft! ⚡" : "Fertig! 🎉");
                        switchView('menu');
                    }
                }
            }
        }

        // ============================================================
        //  SOLO-WIEDEREINSTIEG (Absturz mitten im Quiz)
        // ============================================================
        const SOLO_MERK_SCHLUESSEL = "eduplaySoloFortschritt";
        const SOLO_MERK_DAUER_MS = 3 * 60 * 60 * 1000; // 3 Stunden

        function merkeSoloFortschritt() {
            if (testMode) return; // Tests → merkeTestFortschritt()
            try {
                localStorage.setItem(SOLO_MERK_SCHLUESSEL, JSON.stringify({
                    spielerKey: typeof activePlayerKey !== 'undefined' ? activePlayerKey : null,
                    questions: currentQuestions,
                    qIndex: qIndex,
                    quizMode: quizMode,
                    testAnsweredCount: testAnsweredCount,
                    testCorrectCount: testCorrectCount,
                    ts: Date.now()
                }));
            } catch (e) { /* */ }
        }

        function vergissSoloFortschritt() {
            try { localStorage.removeItem(SOLO_MERK_SCHLUESSEL); } catch (e) { }
        }

        function gemerkterSoloFortschritt() {
            try {
                const roh = localStorage.getItem(SOLO_MERK_SCHLUESSEL);
                if (!roh) return null;
                const d = JSON.parse(roh);
                if (!d || !Array.isArray(d.questions) || !d.questions.length) return null;
                if (typeof d.qIndex !== 'number' || d.qIndex >= d.questions.length) return null;
                if (Date.now() - (d.ts || 0) > SOLO_MERK_DAUER_MS) { vergissSoloFortschritt(); return null; }
                return d;
            } catch (e) { return null; }
        }

        const TEST_MERK_SCHLUESSEL = "eduplayTestFortschritt";
        const TEST_MERK_DAUER_MS = 24 * 60 * 60 * 1000; // 24h

        let testStartedAt = null;
        let testTimeLimitSeconds = 0;

        function merkeTestFortschritt() {
            try {
                localStorage.setItem(TEST_MERK_SCHLUESSEL, JSON.stringify({
                    spielerKey: typeof activePlayerKey !== 'undefined' ? activePlayerKey : null,
                    questions: currentQuestions,
                    qIndex: qIndex,
                    quizMode: quizMode || 'mc',
                    testAnsweredCount: testAnsweredCount,
                    testCorrectCount: testCorrectCount,
                    testTimeRemaining: Math.max(0, testTimeRemaining | 0),
                    testStartedAt: testStartedAt || Date.now(),
                    testTimeLimitSeconds: testTimeLimitSeconds || 0,
                    ts: Date.now()
                }));
            } catch (e) { /* */ }
        }

        function vergissTestFortschritt() {
            try { localStorage.removeItem(TEST_MERK_SCHLUESSEL); } catch (e) { }
        }

        function gemerkterTestFortschritt() {
            try {
                const roh = localStorage.getItem(TEST_MERK_SCHLUESSEL);
                if (!roh) return null;
                const d = JSON.parse(roh);
                if (!d || !Array.isArray(d.questions) || !d.questions.length) return null;
                if (typeof d.qIndex !== 'number' || d.qIndex >= d.questions.length) return null;
                if (Date.now() - (d.ts || 0) > TEST_MERK_DAUER_MS) { vergissTestFortschritt(); return null; }
                return d;
            } catch (e) { return null; }
        }

        function starteTestTimer() {
            clearInterval(testTimerInterval);
            updateTestTimerDisplay();
            testTimerInterval = setInterval(() => {
                testTimeRemaining--;
                updateTestTimerDisplay();
                if (testTimeRemaining <= 0) {
                    clearInterval(testTimerInterval);
                    testTimerInterval = null;
                    finishTest();
                }
            }, 1000);
        }

        async function biteSoloWiedereinstiegAn() {
            if (typeof appConfirm !== "function") return;

            // Zuerst pausierten Test anbieten
            const tMerk = gemerkterTestFortschritt();
            if (tMerk && (!tMerk.spielerKey || !activePlayerKey || tMerk.spielerKey === activePlayerKey)) {
                const min = Math.max(0, Math.floor((tMerk.testTimeRemaining || 0) / 60));
                const sec = Math.max(0, (tMerk.testTimeRemaining || 0) % 60);
                const okT = await appConfirm(
                    "Test pausiert · noch " + min + ":" + String(sec).padStart(2, "0") + " · Frage " +
                    ((tMerk.qIndex || 0) + 1) + "/" + tMerk.questions.length + ". Weitermachen?",
                    { titel: "Test fortsetzen?", icon: "📝", okText: "Weitermachen", abbrechenText: "Verwerfen" }
                );
                if (!okT) { vergissTestFortschritt(); }
                else {
                    currentQuestions = tMerk.questions;
                    qIndex = tMerk.qIndex;
                    quizMode = tMerk.quizMode || 'mc';
                    testMode = true;
                    testAnsweredCount = tMerk.testAnsweredCount || 0;
                    testCorrectCount = tMerk.testCorrectCount || 0;
                    testTimeRemaining = Math.max(1, tMerk.testTimeRemaining | 0);
                    testStartedAt = tMerk.testStartedAt || Date.now();
                    testTimeLimitSeconds = tMerk.testTimeLimitSeconds || testTimeRemaining;
                    const bar = document.getElementById("test-timer-bar");
                    if (bar) bar.classList.remove("hidden");
                    switchView('quiz');
                    showQuestion();
                    starteTestTimer();
                    return;
                }
            }

            const merk = gemerkterSoloFortschritt();
            if (!merk) return;
            if (merk.spielerKey && typeof activePlayerKey !== 'undefined' && activePlayerKey && merk.spielerKey !== activePlayerKey) return;

            const ok = await appConfirm(
                "Deine Runde läuft noch – weiter?",
                { titel: "Willkommen zurück!", icon: "🧠", okText: "Weitermachen", abbrechenText: "Neu starten" }
            );
            if (!ok) { vergissSoloFortschritt(); return; }

            currentQuestions = merk.questions;
            qIndex = merk.qIndex;
            quizMode = merk.quizMode || 'mc';
            testMode = false;
            testAnsweredCount = merk.testAnsweredCount || 0;
            testCorrectCount = merk.testCorrectCount || 0;
            document.getElementById("test-timer-bar").classList.add("hidden");
            switchView('quiz');
            showQuestion();
        }

        // ============================================================
        //  TEST-MODUS
        // ============================================================

        function buildVocabTestQuestions(vocabKeys, dir) {
            const out = [];
            if (typeof VOCABULARY_DATABASE === 'undefined') return out;
            (vocabKeys || []).forEach(vk => {
                const [, lang, level] = vk.split(':');
                const set = VOCABULARY_DATABASE?.[lang]?.[level];
                if (!set || !set.words) return;
                const words = set.words;
                words.forEach(w => {
                    const thisDir = dir === 'mix' ? (Math.random() < 0.5 ? 'de2f' : 'f2de') : dir;
                    const askDe = thisDir !== 'f2de';
                    const prompt = askDe ? w.de : w.foreign;
                    const answer = askDe ? w.foreign : w.de;
                    const pool = [...new Set(words.map(x => askDe ? x.foreign : x.de))].filter(x => x !== answer);
                    const distr = pool.sort(() => Math.random() - 0.5).slice(0, 3);
                    out.push({
                        category: vk,
                        question: `Was heißt „${prompt}"?`,
                        answers: [answer, ...distr],
                        correct: 0,
                        explanation: `${w.de} = ${w.foreign}`
                    });
                });
            });
            return out;
        }

        async function startAssignedTest() {
            if (!currentPlayer || !currentPlayer.pendingTest) {
                // Profil frisch aus Speicher ziehen (nach Zuweisung ohne Reload)
                if (activePlayerKey && ALL_PROFILES[activePlayerKey] && ALL_PROFILES[activePlayerKey].pendingTest) {
                    currentPlayer = ALL_PROFILES[activePlayerKey];
                } else {
                    return showToast("Kein offener Test gefunden.", "error");
                }
            }
            const tMerk = gemerkterTestFortschritt();
            if (tMerk && (!tMerk.spielerKey || tMerk.spielerKey === activePlayerKey)
                && Array.isArray(tMerk.questions) && tMerk.questions.length
                && (tMerk.testTimeRemaining | 0) > 0) {
                currentQuestions = tMerk.questions;
                qIndex = tMerk.qIndex || 0;
                quizMode = tMerk.quizMode || 'mc';
                testMode = true;
                testAnsweredCount = tMerk.testAnsweredCount || 0;
                testCorrectCount = tMerk.testCorrectCount || 0;
                testTimeRemaining = tMerk.testTimeRemaining | 0;
                testStartedAt = tMerk.testStartedAt || Date.now();
                testTimeLimitSeconds = tMerk.testTimeLimitSeconds || testTimeRemaining;
                document.getElementById("test-timer-bar").classList.remove("hidden");
                switchView('quiz');
                showQuestion();
                starteTestTimer();
                showToast("Test fortgesetzt ⏱", "success");
                return;
            }
            // Fragen ggf. nachladen (Lazy-Load)
            if (typeof ladeAlleFragen === "function") {
                try { await ladeAlleFragen(); } catch (e) { /* */ }
            }
            const { categories, timeLimitSeconds, vocabDir } = currentPlayer.pendingTest;
            const qCats = (categories || []).filter(c => !String(c).startsWith('vocab:'));
            const vCats = (categories || []).filter(c => String(c).startsWith('vocab:'));
            let pool = [];
            qCats.forEach(key => {
                if (typeof questionsForKey === "function") {
                    pool = pool.concat(questionsForKey(key) || []);
                } else if (typeof QUESTIONS_DATABASE !== "undefined") {
                    pool = pool.concat(QUESTIONS_DATABASE.filter(q => q.category === key));
                }
            });
            // Duplikate
            const seen = new Set();
            pool = pool.filter(q => {
                const id = q && (q.id || q.question);
                if (!id || seen.has(id)) return false;
                seen.add(id);
                return true;
            });
            pool = pool.concat(buildVocabTestQuestions(vCats, vocabDir || 'de2f'));
            if (pool.length === 0) {
                return showToast("Keine Fragen für diesen Test gefunden. Anderes Thema wählen oder Fragen neu laden.", "error");
            }
            currentQuestions = prepareQuestions(pool.sort(() => Math.random() - 0.5));
            testMode = true;
            testCorrectCount = 0;
            testAnsweredCount = 0;
            testTimeRemaining = timeLimitSeconds || 600;
            testTimeLimitSeconds = testTimeRemaining;
            testStartedAt = Date.now();
            quizMode = 'mc';
            qIndex = 0;
            vergissTestFortschritt();
            document.getElementById("test-timer-bar").classList.remove("hidden");
            switchView('quiz');
            showQuestion();
            starteTestTimer();
        }

        function updateTestTimerDisplay() {
            const el = document.getElementById("test-timer-display");
            if (el) el.innerText = Math.max(0, Math.floor(testTimeRemaining / 60)) + ":" + Math.max(0, testTimeRemaining %
                60).toString().padStart(2, '0');
        }

        function finishTest() {
            clearInterval(testTimerInterval);
            testTimerInterval = null;
            testMode = false;
            const durationSec = testTimeLimitSeconds > 0
                ? Math.max(0, testTimeLimitSeconds - Math.max(0, testTimeRemaining | 0))
                : (testStartedAt ? Math.round((Date.now() - testStartedAt) / 1000) : 0);
            vergissTestFortschritt();
            document.getElementById("test-timer-bar").classList.add("hidden");
            const total = testAnsweredCount;
            const pct = total > 0 ? Math.round((testCorrectCount / total) * 100) : 0;
            if (currentPlayer) {
                if (!currentPlayer.testHistory) currentPlayer.testHistory = [];
                currentPlayer.testHistory.unshift({
                    date: new Date().toISOString(),
                    correct: testCorrectCount,
                    total: total,
                    durationSec: durationSec,
                    seenByParent: false
                });
                currentPlayer.testHistory = currentPlayer.testHistory.slice(0, 10);
                currentPlayer.pendingTest = null;
                checkAndAwardBadges();
                savePlayerProgress();
                updateMenuGamification();
            }
            showTestResultScreen(testCorrectCount, total, pct, durationSec);
            testStartedAt = null;
            testTimeLimitSeconds = 0;
        }

        function formatDurationSec(sec) {
            sec = Math.max(0, sec | 0);
            const m = Math.floor(sec / 60);
            const s = sec % 60;
            if (m <= 0) return s + " Sek.";
            return m + " Min. " + String(s).padStart(2, "0") + " Sek.";
        }

        function showTestResultScreen(correct, total, pct, durationSec) {
            const emoji = pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "💪";
            const msg = pct >= 80 ? "Super gemacht!" : pct >= 50 ? "Gut gemacht, weiter so!" : "Dranbleiben, das wird noch!";
            const dur = (durationSec != null) ? formatDurationSec(durationSec) : "";

            document.getElementById("test-result-content").innerHTML = `
        <div class="glass-card-glow p-8 text-center space-y-4" style="border-color:rgba(99,102,241,0.2);">
            <div class="text-7xl">${emoji}</div>
            <h2 class="text-2xl font-black text-white">${msg}</h2>
            <div class="text-5xl font-black text-emerald-400">${correct} / ${total}</div>
            <div class="text-gray-400 font-bold">${pct}% richtig beantwortet</div>
            ${dur ? `<div class="text-sm text-indigo-300 font-bold">⏱ Dauer: ${dur}</div>` : ""}
            <div class="flex gap-3 mt-4">
                <button onclick="startAssignedTest()" class="flex-1 p-3 bg-blue-600 rounded-xl font-bold text-white shadow-lg hover:bg-blue-500 transition">🔄 Nochmal</button>
                <button onclick="goToMainMenu(); switchView('menu')" class="flex-1 p-3 bg-emerald-600 rounded-xl font-bold text-white shadow-lg hover:bg-emerald-500 transition">⬅ Zurück</button>
            </div>
        </div>`;
            switchView('test-result');
        }

        function goToMainMenu() {
            try {
                if (window.speechSynthesis) window.speechSynthesis.cancel();
            } catch (e) { }

            // Alle offenen Timer stoppen
            if (typeof focusTimerInterval !== 'undefined' && focusTimerInterval) {
                clearInterval(focusTimerInterval);
                focusTimerInterval = null;
            }
            if (typeof scrabbleTimerInterval !== 'undefined' && scrabbleTimerInterval) {
                clearInterval(scrabbleTimerInterval);
                scrabbleTimerInterval = null;
            }
            if (typeof testTimerInterval !== 'undefined' && testTimerInterval) {
                clearInterval(testTimerInterval);
                testTimerInterval = null;
            }
            if (typeof liveDuelTimerInterval !== 'undefined' && liveDuelTimerInterval) {
                clearInterval(liveDuelTimerInterval);
                liveDuelTimerInterval = null;
            }

            // Alle Views ausblenden
            document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));

            // Lesen-Modul für nächsten Besuch zurücksetzen
            const _lex = document.getElementById('lesen-exercise');
            const _lcat = document.getElementById('lesen-categories');
            if (_lex) _lex.classList.add('hidden');
            if (_lcat) _lcat.classList.remove('hidden');

            // Hauptmenü anzeigen
            const menu = document.getElementById('view-menu');
            if (menu) menu.classList.remove('hidden');

            // Header zurücksetzen
            const headerFamily = document.getElementById('header-familyhub');
            const headerMenu = document.getElementById('header-menu');
            if (headerFamily) headerFamily.classList.add('hidden');
            if (headerMenu) headerMenu.classList.remove('hidden');

            // Wenn ein Spieler ausgewählt ist, Menü-Gamification aktualisieren
            if (typeof currentPlayer !== 'undefined' && currentPlayer) {
                if (typeof updateMenuGamification === 'function') {
                    updateMenuGamification();
                }
            }

            // Drawer schließen
            if (typeof closeDrawer === 'function') closeDrawer();
        }

