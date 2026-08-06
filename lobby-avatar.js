        // ============================================================
        //  START
        // ============================================================

        // ============================================================
        //  GETEILTE LOBBY MIT CODE (kontouebergreifend) - Teil 1: Quiz
        //  Nutzt die bestehende Live-Duell-Engine, nur ein anderes Dokument
        //  in der obersten Sammlung "lobbies". Host ist selbst Mitspieler.
        // ============================================================
        const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // ohne I,O,0,1

        // ============================================================
        //  VOKABEL-GRUPPEN-AUSWAHL (mehrfach kombinierbar)
        //  Genutzt von Live-Duell + Online-Lobby, Typ "vokabel"
        // ============================================================
        function renderVocabGroupCheckboxes(containerId) {
            const box = document.getElementById(containerId);
            if (!box) return;
            if (typeof VOCABULARY_DATABASE === 'undefined') {
                box.innerHTML = '<div class="text-xs text-gray-500 col-span-2">Keine Vokabeln geladen</div>';
                return;
            }
            const langLabel = { en: 'EN', tr: 'TR' };
            let html = '';
            Object.keys(VOCABULARY_DATABASE).forEach(lang => {
                Object.keys(VOCABULARY_DATABASE[lang]).forEach(level => {
                    const set = VOCABULARY_DATABASE[lang][level];
                    const n = (set.words || []).length;
                    if (!n) return;
                    html += `
                        <label class="flex items-center gap-2 bg-white/5 border border-white/5 rounded-lg p-2 text-xs font-bold text-gray-300 cursor-pointer hover:bg-white/10 transition">
                            <input type="checkbox" value="vocab:${lang}:${level}" class="vokabel-group-check w-4 h-4 accent-emerald-500">
                            <span class="truncate">${langLabel[lang] || lang.toUpperCase()} · ${esc(set.label || level)}</span>
                        </label>`;
                });
            });
            box.innerHTML = html || '<div class="text-xs text-gray-500 col-span-2">Keine Vokabeln geladen</div>';
        }

        function codedLobbyRef(code) {
            return db.collection("lobbies").doc(code);
        }

        // ============================================================
        //  ZULETZT GENUTZTE ONLINE-LOBBY
        //  Die Sicherheitsregeln verbieten das Auflisten von "lobbies"
        //  (sonst könnte jeder in fremden Runden stöbern). Deshalb lässt
        //  sich nicht suchen, in welcher Lobby jemand steckt – also merkt
        //  sich das Gerät den Code selbst. Beim nächsten Start reicht ein
        //  einzelner gezielter Lesevorgang.
        // ============================================================
        const LOBBY_MERK_SCHLUESSEL = "eduplayLetzteLobby";
        const LOBBY_MERK_DAUER_MS = 3 * 60 * 60 * 1000; // 3 Stunden

        function merkeLobby(code) {
            try {
                localStorage.setItem(LOBBY_MERK_SCHLUESSEL, JSON.stringify({
                    code: code,
                    spielerKey: activePlayerKey,
                    name: (currentPlayer && currentPlayer.name) || "",
                    gast: !!isAnonGuest,
                    ts: Date.now()
                }));
            } catch (e) { /* privater Modus o.ä. – dann eben ohne */ }
        }

        function vergissLobby() {
            try { localStorage.removeItem(LOBBY_MERK_SCHLUESSEL); } catch (e) { }
        }

        function gemerkteLobby() {
            try {
                const roh = localStorage.getItem(LOBBY_MERK_SCHLUESSEL);
                if (!roh) return null;
                const d = JSON.parse(roh);
                if (!d || !d.code) return null;
                if (Date.now() - (d.ts || 0) > LOBBY_MERK_DAUER_MS) { vergissLobby(); return null; }
                return d;
            } catch (e) { return null; }
        }

        // Prüft die gemerkte Lobby und bietet den Wiedereinstieg an.
        // Ein einziger get – erlaubt, weil wir den Code kennen.
        async function biteOnlineLobbyWiedereinstiegAn() {
            if (liveDuelRef) return;                       // schon mittendrin
            if (typeof appConfirm !== "function") return;
            const merk = gemerkteLobby();
            if (!merk) return;
            // Nur anbieten, wenn dasselbe Profil aktiv ist wie beim Verlassen
            if (merk.spielerKey && activePlayerKey && merk.spielerKey !== activePlayerKey) return;

            try {
                const snap = await codedLobbyRef(merk.code).get();
                if (!snap.exists) { vergissLobby(); return; }
                const d = snap.data() || {};
                if (d.status === "finished") { vergissLobby(); return; }
                const ich = d.players && d.players[merk.spielerKey || activePlayerKey];
                if (!ich) { vergissLobby(); return; }
                const lebt = (Date.now() - (d.hostLastSeen || d.createdAt || 0)) < 90000;
                if (!lebt) { vergissLobby(); return; }

                const name = d.subject === "vokabel" ? "Vokabel-Duell"
                    : d.type === "scrabble" ? "Wort-Duell"
                        : d.type === "wortraten" ? "Wort-Rätsel" : "Quiz-Duell";
                const ok = await appConfirm(
                    `Deine Runde ${name} mit dem Code ${merk.code} läuft noch. Willst du wieder einsteigen?`,
                    { titel: "Willkommen zurück!", icon: "🔄", okText: "Weiterspielen", abbrechenText: "Später" }
                );
                if (!ok) { vergissLobby(); return; }

                // Gast ohne Konto: Profil im Speicher wiederherstellen
                if (isAnonGuest && !currentPlayer && merk.name) {
                    activePlayerKey = merk.spielerKey;
                    currentPlayer = {
                        name: merk.name, isGuest: true, coins: 0, xp: 0,
                        learnedWords: [], discColor: GUEST_COLOR
                    };
                    ALL_PROFILES[activePlayerKey] = currentPlayer;
                }
                const inp = document.getElementById("coded-lobby-join-code");
                if (inp) inp.value = merk.code;
                await joinCodedLobby();
            } catch (e) { /* kein Netz – später nochmal */ }
        }

        function generateLobbyCode() {
            let c = "";
            for (let i = 0; i < 4; i++) c += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
            return c;
        }

        const LOBBY_STALE_MS = 4 * 60 * 60 * 1000; // 4h ohne Lebenszeichen = Leiche

        // Reserviert einen freien 4-stelligen Code UND legt die Lobby im selben
        // Schritt an (Transaktion) – verhindert, dass zwei Hosts gleichzeitig
        // denselben Code bekommen und sich gegenseitig überschreiben. Trifft der
        // Zufallscode eine "Leiche" (alte Lobby ohne Lebenszeichen seit Stunden,
        // z.B. weil der Tab einfach geschlossen wurde statt sauber zu verlassen),
        // wird der Platz direkt wiederverwendet statt übersprungen – so wächst
        // die Sammlung nicht unbegrenzt weiter.
        async function reserveAndCreateLobby(buildLobbyData) {
            for (let i = 0; i < 8; i++) {
                const code = generateLobbyCode();
                const ref = codedLobbyRef(code);
                try {
                    const created = await db.runTransaction(async (txn) => {
                        const snap = await txn.get(ref);
                        if (snap.exists) {
                            const d = snap.data() || {};
                            const lastSeen = d.hostLastSeen || d.createdAt || 0;
                            const isStale = d.status === "finished" || (Date.now() - lastSeen) > LOBBY_STALE_MS;
                            if (!isStale) return false;
                        }
                        txn.set(ref, buildLobbyData(code));
                        return true;
                    });
                    if (created) return { code, ref };
                } catch (e) { /* Transaktions-Konflikt, nächsten Code versuchen */ }
            }
            throw new Error("Kein freier Code gefunden - bitte nochmal versuchen.");
        }

        function openCodedLobbySetup() {
            if (!currentPlayer || !activePlayerKey) {
                return showToast("Bitte zuerst oben deinen Spieler auswaehlen!", "error");
            }
            if (typeof setupCategorySelectors === "function") {
                setupCategorySelectors("coded-lobby-area", "coded-lobby-category", "spass");
            }
            const inp = document.getElementById("coded-lobby-join-code");
            if (inp) inp.value = "";
            setCodedLobbyType('quiz');
            switchView("coded-lobby-setup");
        }

        function setCodedLobbyType(type) {
            const q = document.getElementById("coded-lobby-quiz-options");
            const sc = document.getElementById("coded-lobby-scrabble-options");
            const wr = document.getElementById("coded-lobby-wortraten-options");
            const vk = document.getElementById("coded-lobby-vokabel-options");
            if (q) q.classList.toggle("hidden", type !== "quiz");
            if (sc) sc.classList.toggle("hidden", type !== "scrabble");
            if (wr) wr.classList.toggle("hidden", type !== "wortraten");
            if (vk) vk.classList.toggle("hidden", type !== "vokabel");
            const bq = document.getElementById("coded-type-quiz");
            const bs = document.getElementById("coded-type-scrabble");
            const bw = document.getElementById("coded-type-wortraten");
            const bv = document.getElementById("coded-type-vokabel");
            if (bq) bq.classList.toggle("active", type === "quiz");
            if (bs) bs.classList.toggle("active", type === "scrabble");
            if (bw) bw.classList.toggle("active", type === "wortraten");
            if (bv) bv.classList.toggle("active", type === "vokabel");
            if (type === "vokabel" && typeof renderVocabGroupCheckboxes === "function") {
                renderVocabGroupCheckboxes("coded-lobby-vokabel-checkboxes");
            }
        }

        async function createCodedLobby() {
            if (!currentParentUser) return showToast("Bitte zuerst einloggen.", "error");
            if (!currentPlayer || !activePlayerKey) return showToast("Bitte zuerst oben deinen Spieler auswaehlen!", "error");
            const mode = (document.getElementById("coded-lobby-mode") || {}).value || "versus";
            const bs = document.getElementById("coded-type-scrabble");
            const bw = document.getElementById("coded-type-wortraten");
            const bv = document.getElementById("coded-type-vokabel");
            const gameType = (bw && bw.classList.contains("active")) ? "wortraten" :
                (bs && bs.classList.contains("active")) ? "scrabble" :
                (bv && bv.classList.contains("active")) ? "vokabel" : "quiz";
            let lobbyData;
            if (gameType === "vokabel") {
                const checked = Array.from(document.querySelectorAll("#coded-lobby-vokabel-checkboxes .vokabel-group-check:checked")).map(cb => cb.value);
                if (checked.length === 0) return showToast("Bitte mindestens eine Vokabelgruppe auswaehlen!", "error");
                const dir = (document.getElementById("coded-lobby-vokabel-dir") || {}).value || "mix";
                const answerSeconds = parseInt((document.getElementById("coded-lobby-vokabel-speed") || {}).value || "20");
                const questions = prepareQuestions(buildVocabTestQuestions(checked, dir).sort(() => Math.random() - 0.5).slice(0, 10));
                if (questions.length < 3) return showToast("Zu wenige Vokabeln fuer diese Auswahl!", "error");
                lobbyData = {
                    type: "quiz",
                    subject: "vokabel",
                    mode: mode,
                    vocabGroups: checked,
                    vocabDir: dir,
                    isCoded: true,
                    status: "waiting",
                    questions: questions,
                    currentIndex: 0,
                    answerSeconds: answerSeconds,
                    createdBy: activePlayerKey,
                    players: {}
                };
                liveDuelType = "vokabel";
            } else if (gameType === "wortraten") {
                const wordMode = (document.getElementById("coded-lobby-wr-wordmode") || {}).value || "kids";
                const difficulty = (document.getElementById("coded-lobby-wr-difficulty") || {}).value || "mittel";
                const theme = (document.getElementById("coded-lobby-wr-theme") || {}).value || "schneemann";
                const totalRounds = parseInt((document.getElementById("coded-lobby-wr-rounds") || {}).value || "3");
                lobbyData = {
                    type: "wortraten",
                    mode: mode,
                    isCoded: true,
                    status: "waiting",
                    wordMode,
                    difficulty,
                    theme,
                    totalRounds,
                    currentRound: 0,
                    order: [activePlayerKey],
                    turnIndex: 0,
                    word: "",
                    guessed: [],
                    wrongCount: 0,
                    roundOver: false,
                    roundSolved: false,
                    usedWords: [],
                    createdBy: activePlayerKey,
                    players: {}
                };
                liveDuelType = "wortraten";
            } else if (gameType === "scrabble") {
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
            lobbyData.createdByName = currentPlayer.name;
            lobbyData.players[activePlayerKey] = {
                name: currentPlayer.name, score: 0, hasAnswered: false,
                lastAnswer: null, word: "", coinsClaimed: false
            };
            if (typeof showGlobalLoading === "function") showGlobalLoading("Lobby wird erstellt …");
            try {
                const { code, ref } = await reserveAndCreateLobby((code) => Object.assign({}, lobbyData, {
                    code,
                    createdAt: Date.now(),
                    hostLastSeen: Date.now()
                }));
                liveDuelRef = ref;
                isLiveDuelCreator = true;
                liveDuelResolving = false;
                liveDuelRenderKey = "";
                maybeStartHostHeartbeat();
                merkeLobby(code);
                subscribeLiveDuel();
                showToast("Lobby erstellt! Code: " + code);
            } catch (e) {
                handleError("createCodedLobby", e, "Die Lobby konnte nicht erstellt werden.");
            } finally {
                if (typeof hideGlobalLoading === "function") hideGlobalLoading(true);
            }
        }

        async function joinCodedLobby() {
            if (!currentParentUser) return showToast("Bitte zuerst einloggen.", "error");
            if (!currentPlayer || !activePlayerKey) return showToast("Bitte zuerst oben deinen Spieler auswaehlen!", "error");
            const inp = document.getElementById("coded-lobby-join-code");
            let code = (inp ? inp.value : "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
            if (code.length !== 4) return showToast("Bitte einen 4-stelligen Code eingeben.", "error");
            const ref = codedLobbyRef(code);
            if (typeof showGlobalLoading === "function") showGlobalLoading("Lobby wird gesucht …");
            try {
                const snap = await ref.get();
                if (!snap.exists) return showToast("Diese Lobby gibt es nicht (mehr).", "error");
                const data = snap.data();
                if (data.status === "finished") return showToast("Diese Lobby ist schon beendet.", "error");
                const wasAlreadyIn = !!(data.players && data.players[activePlayerKey]);
                const midGame = (data.status === "playing" || data.status === "reveal");
                if (!wasAlreadyIn) {
                    const joinUpdate = {
                        [`players.${activePlayerKey}`]: {
                            name: currentPlayer.name, score: 0, hasAnswered: false,
                            lastAnswer: null, word: "", coinsClaimed: false, pending: midGame
                        }
                    };
                    if (data.type === "wortraten" && !midGame) {
                        joinUpdate.order = firebase.firestore.FieldValue.arrayUnion(activePlayerKey);
                    }
                    await ref.update(joinUpdate);
                }
                liveDuelRef = ref;
                liveDuelType = data.type || "quiz";
                isLiveDuelCreator = (data.createdBy === activePlayerKey);
                liveDuelResolving = false;
                liveDuelRenderKey = "";
                maybeStartHostHeartbeat();
                merkeLobby(code);
                showToast(wasAlreadyIn ? "Willkommen zurueck!" : (midGame ? "Du bist dabei - naechste Runde geht's los!" : "Du bist dabei!"));
                subscribeLiveDuel();
            } catch (e) {
                handleError("joinCodedLobby", e, "Beitreten hat nicht geklappt.");
            } finally {
                if (typeof hideGlobalLoading === "function") hideGlobalLoading(true);
            }
        }

        // Ansichten, die einem anonymen Gast offen stehen. Alles andere
        // (Familien-Hub, Menü, Eltern-Dashboard, Alleine-Lernen) gehört
        // zum Familienkonto und ist für ihn gesperrt.
        const GUEST_ALLOWED_VIEWS = [
            'auth', 'guest-join',
            'live-duel-lobby', 'live-duel-play', 'live-duel-result',
            'feedback'
        ];

        function switchView(viewId) {
            // Auth-Schutz: ohne Login nur die Anmelde-Ansicht erlauben
            if (viewId !== 'auth' && !currentParentUser) {
                showToast("Bitte zuerst einloggen.", "error");
                viewId = 'auth';
            }
            // Gast ohne Konto: nur die Lobby-Ansichten freigeben.
            if (typeof isAnonGuest !== 'undefined' && isAnonGuest
                && GUEST_ALLOWED_VIEWS.indexOf(viewId) === -1) {
                viewId = 'guest-join';
            }
            // Header umschalten
            const headerFamily = document.getElementById('header-familyhub');
            const headerMenu = document.getElementById('header-menu');


            if (viewId === 'family-hub') {
                headerFamily?.classList.remove('hidden');
                headerMenu?.classList.add('hidden');
            } else if (viewId === 'auth' || viewId === 'guest-join') {
                // Anmeldung und Gast-Beitritt kommen ohne Kopfzeile aus –
                // es gibt weder Coins noch Level noch ein Menü.
                headerFamily?.classList.add('hidden');
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
            // Live-Duell-Listener stoppen, wenn wir die Duell-Ansichten verlassen
            // (z.B. über FAB/Drawer). Der Firestore-Eintrag bleibt bestehen, ein
            // erneutes Beitreten (offene Duelle / Lobby-Code) hängt sich wieder ein.
            const _liveDuelViews = ['live-duel-setup', 'live-duel-lobby', 'live-duel-play', 'live-duel-result'];
            if (!_liveDuelViews.includes(viewId) && typeof liveDuelUnsubscribe !== 'undefined' && liveDuelUnsubscribe) {
                try { liveDuelUnsubscribe(); } catch (e) { }
                liveDuelUnsubscribe = null;
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
            if (viewId === 'formel-setup') {
                if (typeof setupFormelAreas === 'function') {
                    setupFormelAreas();
                } else {
                    showToast("Der Formel-Bereich ist noch in Arbeit.", "error");
                    return switchView('menu');
                }
            }
            if (viewId === 'lesen' && typeof renderLesenCategories === 'function') {
                const ex = document.getElementById('lesen-exercise');
                const gr = document.getElementById('lesen-categories');
                if (ex) ex.classList.add('hidden');
                if (gr) gr.classList.remove('hidden');
                renderLesenCategories();
            }
            if (viewId === 'rewards') renderRewardsShop();
            if (viewId === 'menu' && typeof renderContinueCard === 'function') renderContinueCard();
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

            // Dashboard initialisieren mit PIN-Abfrage.
            // Die Abfrage läuft über den App-eigenen Dialog und damit
            // asynchron: erst die Ansicht anzeigen, dann fragen, bei
            // falscher PIN sofort wieder zurück.
            if (viewId === 'dashboard') {
                console.log('📊 Dashboard geöffnet');
                if (adminPin) {
                    fragePinUndOeffneDashboard();
                } else {
                    debugDatabaseLoading();
                    switchDashboardSection('inhalte');
                }
            }

            // FAB aktualisieren
            if (viewId !== 'auth') {
                updateFab(viewId, getViewIcon(viewId), viewId === 'menu' ? 'Zum Hauptmenü' : 'Zurück zum Menü');
            }
        }

        // PIN-Abfrage fürs Eltern-Dashboard. Früher über prompt() – das
        // ist in iOS-WebViews unzuverlässig und hätte den Eltern-Bereich
        // in der Store-Version unerreichbar machen können.
        async function fragePinUndOeffneDashboard() {
            const eingabe = await appPrompt("Bitte gib die PIN ein, um den Eltern-Bereich zu öffnen.", {
                titel: "🔒 Eltern-Bereich",
                icon: "🔒",
                passwort: true,
                maxLen: 12,
                platzhalter: "••••",
                okText: "Öffnen"
            });
            if (eingabe === null || cleanInput(eingabe, 12) === "") {
                switchView('family-hub');
                return;
            }
            if (cleanInput(eingabe, 12) !== adminPin) {
                if (typeof SFX !== "undefined") SFX.wrong();
                showToast("Die PIN stimmt nicht.", "error", "pin");
                switchView('family-hub');
                return;
            }
            debugDatabaseLoading();
            switchDashboardSection('inhalte');
        }

        // Prüfe, ob die Datenbanken geladen sind
        if (typeof QUESTIONS_DATABASE === 'undefined') {
            console.warn("⚠️ QUESTIONS_DATABASE nicht geladen – prüfe data.js");
        }
        if (typeof VOCABULARY_DATABASE === 'undefined') {
            console.warn("⚠️ VOCABULARY_DATABASE nicht geladen – prüfe vocabulary.js");
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

