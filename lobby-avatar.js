        // ============================================================
        //  START
        // ============================================================

        // ============================================================
        //  GETEILTE LOBBY MIT CODE (kontouebergreifend) - Teil 1: Quiz
        //  Nutzt die bestehende Live-Duell-Engine, nur ein anderes Dokument
        //  in der obersten Sammlung "lobbies". Host ist selbst Mitspieler.
        // ============================================================
        const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // ohne I,O,0,1

        function codedLobbyRef(code) {
            return db.collection("lobbies").doc(code);
        }

        function generateLobbyCode() {
            let c = "";
            for (let i = 0; i < 4; i++) c += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
            return c;
        }

        async function reserveLobbyCode() {
            for (let i = 0; i < 8; i++) {
                const code = generateLobbyCode();
                const snap = await codedLobbyRef(code).get();
                if (!snap.exists) return code;
            }
            throw new Error("Kein freier Code gefunden - bitte nochmal versuchen.");
        }

        function openCodedLobbySetup() {
            if (!currentPlayer || !activePlayerKey) {
                return showToast("Bitte zuerst oben deinen Spieler auswaehlen!", "error");
            }
            if (typeof setupCategorySelectors === "function") {
                setupCategorySelectors("coded-lobby-area", "coded-lobby-category", "alle");
            }
            const inp = document.getElementById("coded-lobby-join-code");
            if (inp) inp.value = "";
            setCodedLobbyType('quiz');
            switchView("coded-lobby-setup");
        }

        function setCodedLobbyType(type) {
            const q = document.getElementById("coded-lobby-quiz-options");
            const sc = document.getElementById("coded-lobby-scrabble-options");
            if (q) q.classList.toggle("hidden", type !== "quiz");
            if (sc) sc.classList.toggle("hidden", type !== "scrabble");
            const bq = document.getElementById("coded-type-quiz");
            const bs = document.getElementById("coded-type-scrabble");
            if (bq) bq.classList.toggle("active", type === "quiz");
            if (bs) bs.classList.toggle("active", type === "scrabble");
        }

        async function createCodedLobby() {
            if (!currentParentUser) return showToast("Bitte zuerst einloggen.", "error");
            if (!currentPlayer || !activePlayerKey) return showToast("Bitte zuerst oben deinen Spieler auswaehlen!", "error");
            const mode = (document.getElementById("coded-lobby-mode") || {}).value || "versus";
            const bs = document.getElementById("coded-type-scrabble");
            const gameType = (bs && bs.classList.contains("active")) ? "scrabble" : "quiz";
            let lobbyData;
            if (gameType === "scrabble") {
                const difficulty = (document.getElementById("coded-lobby-difficulty") || {}).value || "mittel";
                const totalRounds = parseInt((document.getElementById("coded-lobby-rounds") || {}).value || "5");
                const requireLetter = !!(document.getElementById("coded-lobby-require-letter") || {}).checked;
                const wordMode = (document.getElementById("coded-lobby-wordmode") || {}).value || "kids";
                const actionMode = !!(document.getElementById("coded-lobby-action-mode") || {}).checked;
                liveDuelUsedWords = new Set();
                lobbyData = {
                    type: "scrabble",
                    mode: mode,
                    isCoded: true,
                    status: "waiting",
                    difficulty: difficulty,
                    totalRounds: totalRounds,
                    currentRound: 0,
                    requireLetter: requireLetter,
                    wordMode: wordMode,
                    actionMode: actionMode,
                    answerSeconds: SCRABBLE_ANSWER_SECONDS[difficulty] || 20,
                    createdBy: activePlayerKey,
                    players: {}
                };
                liveDuelType = "scrabble";
            } else {
                const category = (document.getElementById("coded-lobby-category") || {}).value || "alle";
                const answerSeconds = parseInt((document.getElementById("coded-lobby-speed") || {}).value || "20");
                const questions = prepareQuestions(questionsForKey(category).sort(() => Math.random() - 0.5).slice(0, 10));
                if (questions.length < 3) return showToast("Zu wenige Fragen fuer dieses Thema!", "error");
                lobbyData = {
                    type: "quiz",
                    mode: mode,
                    isCoded: true,
                    status: "waiting",
                    questions: questions,
                    currentIndex: 0,
                    answerSeconds: answerSeconds,
                    createdBy: activePlayerKey,
                    players: {}
                };
                liveDuelType = "quiz";
            }
            try {
                const code = await reserveLobbyCode();
                const ref = codedLobbyRef(code);
                lobbyData.code = code;
                lobbyData.createdByName = currentPlayer.name;
                lobbyData.createdAt = Date.now();
                lobbyData.hostLastSeen = Date.now();
                lobbyData.players[activePlayerKey] = {
                    name: currentPlayer.name, score: 0, hasAnswered: false,
                    lastAnswer: null, word: "", coinsClaimed: false
                };
                await ref.set(lobbyData);
                liveDuelRef = ref;
                isLiveDuelCreator = true;
                liveDuelResolving = false;
                liveDuelRenderKey = "";
                maybeStartHostHeartbeat();
                subscribeLiveDuel();
                showToast("Lobby erstellt! Code: " + code);
            } catch (e) { handleError("createCodedLobby", e, "Die Lobby konnte nicht erstellt werden."); }
        }

        async function joinCodedLobby() {
            if (!currentParentUser) return showToast("Bitte zuerst einloggen.", "error");
            if (!currentPlayer || !activePlayerKey) return showToast("Bitte zuerst oben deinen Spieler auswaehlen!", "error");
            const inp = document.getElementById("coded-lobby-join-code");
            let code = (inp ? inp.value : "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
            if (code.length !== 4) return showToast("Bitte einen 4-stelligen Code eingeben.", "error");
            const ref = codedLobbyRef(code);
            try {
                const snap = await ref.get();
                if (!snap.exists) return showToast("Diese Lobby gibt es nicht (mehr).", "error");
                const data = snap.data();
                if (data.status === "finished") return showToast("Diese Lobby ist schon beendet.", "error");
                const wasAlreadyIn = !!(data.players && data.players[activePlayerKey]);
                const midGame = (data.status === "playing" || data.status === "reveal");
                if (!wasAlreadyIn) {
                    await ref.update({
                        [`players.${activePlayerKey}`]: {
                            name: currentPlayer.name, score: 0, hasAnswered: false,
                            lastAnswer: null, word: "", coinsClaimed: false, pending: midGame
                        }
                    });
                }
                liveDuelRef = ref;
                liveDuelType = data.type || "quiz";
                isLiveDuelCreator = (data.createdBy === activePlayerKey);
                liveDuelResolving = false;
                liveDuelRenderKey = "";
                maybeStartHostHeartbeat();
                showToast(wasAlreadyIn ? "Willkommen zurueck!" : (midGame ? "Du bist dabei - naechste Runde geht's los!" : "Du bist dabei!"));
                subscribeLiveDuel();
            } catch (e) { handleError("joinCodedLobby", e, "Beitreten hat nicht geklappt."); }
        }

        function switchView(viewId) {
            // Auth-Schutz: ohne Login nur die Anmelde-Ansicht erlauben
            if (viewId !== 'auth' && !currentParentUser) {
                showToast("Bitte zuerst einloggen.", "error");
                viewId = 'auth';
            }
            // Header umschalten
            const headerFamily = document.getElementById('header-familyhub');
            const headerMenu = document.getElementById('header-menu');


            if (viewId === 'family-hub') {
                headerFamily?.classList.remove('hidden');
                headerMenu?.classList.add('hidden');
            } else {
                headerFamily?.classList.add('hidden');
                headerMenu?.classList.remove('hidden');
            }
            // Laufende Timer stoppen
            if (viewId !== 'fokus' && typeof focusTimerInterval !== 'undefined' && focusTimerInterval) {
                clearInterval(focusTimerInterval);
                focusTimerInterval = null;
            }
            if (viewId !== 'scrabble-play' && scrabbleTimerInterval) {
                clearInterval(scrabbleTimerInterval);
                scrabbleTimerInterval = null;
            }
            if (viewId !== 'wortraten-play' && typeof wortratenState !== 'undefined' && wortratenState) {
                wortratenState.roundActive = false;
            }

            document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
            const target = document.getElementById(`view-${viewId}`);
            if (target) target.classList.remove('hidden');
            if (typeof closeDrawer === 'function') closeDrawer();

            const _tvExit = document.getElementById('tv-player-exit');
            if (_tvExit) _tvExit.classList.toggle('hidden', viewId !== 'tv-quiz-player');

            const shell = document.getElementById("app-shell");
            if (shell) {
                const wide = (viewId === 'tv-quiz-host');
                shell.classList.toggle('max-w-md', !wide);
                shell.classList.toggle('max-w-none', wide);
            }

            if (viewId === 'vokabeln') loadVocabSystem();
            if (viewId === 'formel-setup') setupFormelAreas();
            if (viewId === 'lesen' && typeof renderLesenCategories === 'function') {
                const ex = document.getElementById('lesen-exercise');
                const gr = document.getElementById('lesen-categories');
                if (ex) ex.classList.add('hidden');
                if (gr) gr.classList.remove('hidden');
                renderLesenCategories();
            }
            if (viewId === 'rewards') renderRewardsShop();
            if (viewId === 'family-hub' && typeof ALL_PROFILES !== 'undefined') renderFamilyHub();

            if (typeof startHubWatch === 'function') {
                if (viewId === 'family-hub') startHubWatch();
                else stopHubWatch();
            }
            if (viewId === 'tv-quiz-host' && document.getElementById("tv-area") && typeof setTVTopicMode === 'function')
                setTVTopicMode();

            if (typeof watchForOpenDuel === 'function') {
                if (viewId === 'menu') watchForOpenDuel();
                else stopWatchingForOpenDuel();
            }
            if (typeof watchForOpenTVLobby === 'function') {
                if (viewId === 'menu') watchForOpenTVLobby();
                else stopWatchingForOpenTVLobby();
            }

            // Dashboard initialisieren mit PIN-Abfrage
            if (viewId === 'dashboard') {
                console.log('📊 Dashboard geöffnet');
                if (adminPin) {
                    const entered = cleanInput(prompt("🔒 Dashboard\n\nBitte PIN eingeben:"), 12);
                    if (entered === null || entered === "") {
                        switchView('family-hub');
                        return;
                    }
                    if (entered !== adminPin) {
                        SFX.wrong();
                        showToast("❌ PIN stimmt nicht.", "error", "pin");
                        switchView('family-hub');
                        return;
                    }
                }
                // Debug-Ausgabe vor dem Laden
                debugDatabaseLoading();
                switchDashboardSection('inhalte');
            }
        }

        // Prüfe, ob die Datenbanken geladen sind
        if (typeof QUESTIONS_DATABASE === 'undefined') {
            console.warn("⚠️ QUESTIONS_DATABASE nicht geladen – prüfe data.js");

        }
        if (typeof VOCABULARY_DATABASE === 'undefined') {
            console.warn("⚠️ VOCABULARY_DATABASE nicht geladen – prüfe vocabulary.js");
            // FAB aktualisieren (am Ende der switchView-Funktion)
            if (viewId !== 'auth') {
                updateFab(viewId, getViewIcon(viewId), viewId === 'menu' ? 'Zum Hauptmenü' : 'Zurück zum Menü');
            }
        }

        console.log("🚀 EduPlay Hub gestartet (v2.28)");
        console.log(`📖 Fragen: ${typeof QUESTIONS_DATABASE !== 'undefined' ? QUESTIONS_DATABASE.length : '?'}`);
        console.log(`📝 Vokabeln: ${typeof VOCABULARY_DATABASE !== 'undefined' ? Object.keys(VOCABULARY_DATABASE).length : '?'}`);
        console.log(`🔤 Wörter: ${typeof GERMAN_WORDS !== 'undefined' ? GERMAN_WORDS.length : '?'}`);


        // Theme beim Laden wiederherstellen (Standard = Light)
        // Theme: Standard = Dark
        document.addEventListener('DOMContentLoaded', function () {
            try {
                if (localStorage.getItem('eduplayTheme') !== 'light') {
                    document.body.classList.add('dark-theme');
                }
            } catch (e) { }
        });


        // ============================================================
        //  AVATAR CREATOR LOGIK
        // ============================================================
        let currentShirtColor = "#6366f1"; // Standardfarbe (Indigo)

        function changeShirtColor(colorHex) {
            // 1. Greife das T-Shirt im SVG und ändere die Füllfarbe
            const shirt = document.getElementById('avatar-shirt');
            if (shirt) {
                shirt.setAttribute('fill', colorHex);
            }

            // 2. Speichere die gewählte Farbe (später für Firebase wichtig)
            currentShirtColor = colorHex;

            // Kleines Sound-Feedback für die Kids
            if (typeof SFX !== 'undefined') SFX.tap();
        }

