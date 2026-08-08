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
        //  ZULETZT GENUTZTE ONLINE-LOBBIES (Liste, max. 5)
        //  Sicherheitsregeln verbieten das Auflisten von "lobbies" –
        //  deshalb merkt das Gerät die Codes selbst.
        // ============================================================
        const LOBBY_MERK_SCHLUESSEL = "eduplayLetzteLobbies";
        const LOBBY_MERK_ALT = "eduplayLetzteLobby";
        const LOBBY_MERK_DAUER_MS = 3 * 60 * 60 * 1000;
        const LOBBY_MERK_MAX = 5;

        function _lobbyMerkLesen() {
            try {
                let roh = localStorage.getItem(LOBBY_MERK_SCHLUESSEL);
                if (!roh) {
                    const alt = localStorage.getItem(LOBBY_MERK_ALT);
                    if (alt) {
                        const d = JSON.parse(alt);
                        if (d && d.code) {
                            localStorage.setItem(LOBBY_MERK_SCHLUESSEL, JSON.stringify([d]));
                            localStorage.removeItem(LOBBY_MERK_ALT);
                            roh = localStorage.getItem(LOBBY_MERK_SCHLUESSEL);
                        }
                    }
                }
                if (!roh) return [];
                const arr = JSON.parse(roh);
                if (!Array.isArray(arr)) return [];
                const now = Date.now();
                return arr.filter(e => e && e.code && (now - (e.ts || 0)) < LOBBY_MERK_DAUER_MS);
            } catch (e) { return []; }
        }

        function _lobbyMerkSchreiben(arr) {
            try {
                localStorage.setItem(LOBBY_MERK_SCHLUESSEL, JSON.stringify(arr.slice(0, LOBBY_MERK_MAX)));
            } catch (e) { /* privater Modus */ }
        }

        function merkeLobby(code) {
            if (!code) return;
            const list = _lobbyMerkLesen().filter(e => e.code !== code);
            list.unshift({
                code: code,
                spielerKey: activePlayerKey,
                name: (currentPlayer && currentPlayer.name) || "Gastgeber",
                gast: !!isAnonGuest,
                ts: Date.now()
            });
            _lobbyMerkSchreiben(list);
        }

        function vergissLobby(code) {
            if (!code) {
                try { localStorage.removeItem(LOBBY_MERK_SCHLUESSEL); localStorage.removeItem(LOBBY_MERK_ALT); } catch (e) { }
                return;
            }
            _lobbyMerkSchreiben(_lobbyMerkLesen().filter(e => e.code !== code));
        }

        function gemerkteLobby() {
            const list = _lobbyMerkLesen();
            return list.length ? list[0] : null;
        }

        function gemerkteLobbies() {
            return _lobbyMerkLesen();
        }

        async function biteOnlineLobbyWiedereinstiegAn() {
            if (liveDuelRef) return;
            renderLetzteLobbiesKarte();
            if (typeof appConfirm !== "function") return;
            const merk = gemerkteLobby();
            if (!merk) return;
            if (merk.spielerKey && activePlayerKey && merk.spielerKey !== activePlayerKey) return;

            try {
                const snap = await codedLobbyRef(merk.code).get();
                if (!snap.exists) { vergissLobby(merk.code); renderLetzteLobbiesKarte(); return; }
                const d = snap.data() || {};
                if (d.status === "finished") { vergissLobby(merk.code); renderLetzteLobbiesKarte(); return; }
                const ich = d.players && d.players[merk.spielerKey || activePlayerKey];
                if (!ich) { vergissLobby(merk.code); renderLetzteLobbiesKarte(); return; }
                const now = Date.now();
                const hostAlive = (now - (d.hostLastSeen || d.createdAt || 0)) < 90000;
                const selfRecent = ich.lastSeen && (now - ich.lastSeen) < 15 * 60 * 1000;
                if (!hostAlive && !selfRecent) { vergissLobby(merk.code); renderLetzteLobbiesKarte(); return; }

                const name = d.subject === "vokabel" ? "Vokabel-Duell"
                    : d.type === "scrabble" ? "Wort-Duell"
                        : d.type === "wortraten" ? "Wort-Rätsel" : "Quiz-Duell";
                const mid = (d.status === "playing" || d.status === "reveal");
                const ok = await appConfirm(
                    mid ? `${name} (${merk.code}) läuft noch. Weiterspielen?` : `${name} (${merk.code}) wartet. Zurück?`,
                    { titel: "Wieder einsteigen?", icon: "🔄", okText: "Ja", abbrechenText: "Nein" }
                );
                if (!ok) return;

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

        async function rejoinLobbyByCode(code) {
            if (!code || liveDuelRef) return;
            if (!currentPlayer || !activePlayerKey) return showToast("Bitte zuerst einen Spieler wählen.", "error");
            const inp = document.getElementById("coded-lobby-join-code");
            if (inp) inp.value = code;
            await joinCodedLobby();
        }

        function renderLetzteLobbiesKarte() {
            const box = document.getElementById("letzte-lobbies-card");
            if (!box) return;
            const list = gemerkteLobbies();
            if (!list.length) { box.classList.add("hidden"); box.innerHTML = ""; return; }
            const rows = list.map(e => {
                const nm = esc(e.name || "Spieler");
                return `<button type="button" onclick="rejoinLobbyByCode('${esc(e.code)}')"
                    class="w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-left transition">
                    <span class="text-sm font-bold text-white truncate">🔄 ${nm}</span>
                    <span class="text-xs font-black tracking-widest text-indigo-300 shrink-0">${esc(e.code)}</span>
                </button>`;
            }).join("");
            box.innerHTML = `
                <div class="glass-card p-3 space-y-2">
                    <div class="text-[10px] font-bold text-gray-500 uppercase tracking-wide px-1">Letzte Lobbies</div>
                    ${rows}
                </div>`;
            box.classList.remove("hidden");
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
                const categoryKeys = (typeof collectCategoryKeysFor === "function") ? collectCategoryKeysFor("coded-lobby") : [];
                if (categoryKeys.length === 0) return showToast("Bitte ein Thema wählen!", "error");
                const category = categoryKeys[0];
                const answerSeconds = parseInt((document.getElementById("coded-lobby-speed") || {}).value || "20");
                const questions = categoryKeys.length > 1
                    ? buildMixedQuestions(categoryKeys, 10)
                    : prepareQuestions(questionsForKey(category).sort(() => Math.random() - 0.5).slice(0, 10));
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
            const hostDisplayName = (currentPlayer && currentPlayer.name && String(currentPlayer.name).trim()) || "Gastgeber";
            lobbyData.createdByName = hostDisplayName;
            lobbyData.players[activePlayerKey] = {
                name: hostDisplayName, score: 0, hasAnswered: false,
                lastAnswer: null, word: "", coinsClaimed: false
            };
            if (typeof showGlobalLoading === "function") showGlobalLoading("Lobby wird erstellt …");
            try {
const { code, ref } = await reserveAndCreateLobby((code) => Object.assign({}, lobbyData, {
                    code,
                    createdAt: Date.now(),
                    hostLastSeen: Date.now(),
                    // Wem gehört die Runde? createdBy ist nur der Profil-Schlüssel
                    // und wechselt bei der Host-Übergabe – die Regeln brauchen
                    // das Konto dahinter.
                    hostUid: (auth.currentUser && auth.currentUser.uid) || null
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
                const me = wasAlreadyIn ? data.players[activePlayerKey] : null;
                const joinName = (currentPlayer && currentPlayer.name && String(currentPlayer.name).trim()) || "Gastgeber";
                if (!wasAlreadyIn) {
                    const joinUpdate = {
                        [`players.${activePlayerKey}`]: {
                            name: joinName, score: 0, hasAnswered: false,
                            lastAnswer: null, word: "", coinsClaimed: false, pending: midGame,
                            lastSeen: Date.now()
                        }
                    };
                    if (data.type === "wortraten" && !midGame) {
                        joinUpdate.order = firebase.firestore.FieldValue.arrayUnion(activePlayerKey);
                    }
                    await ref.update(joinUpdate);
                } else {
                    // Reload/Absturz: wieder anwesend
                    const reconnect = {
                        [`players.${activePlayerKey}.lastSeen`]: Date.now(),
                        [`players.${activePlayerKey}.name`]: joinName
                    };
                    if (data.createdBy === activePlayerKey) reconnect.hostLastSeen = Date.now();
                    if (me && me.pending !== true) reconnect[`players.${activePlayerKey}.pending`] = false;
                    await ref.update(reconnect);
                }
                liveDuelRef = ref;
                liveDuelType = data.type || "quiz";
                isLiveDuelCreator = (data.createdBy === activePlayerKey);
                liveDuelResolving = false;
                liveDuelRenderKey = "";
                maybeStartHostHeartbeat();
                merkeLobby(code);
                showToast(wasAlreadyIn
                    ? (midGame ? "Wieder da – Spiel läuft weiter!" : "Willkommen zurück!")
                    : (midGame ? "Dabei ab nächster Runde." : "Du bist dabei!"));
                subscribeLiveDuel();
            } catch (e) {
                handleError("joinCodedLobby", e, "Beitreten hat nicht geklappt.");
            } finally {
                if (typeof hideGlobalLoading === "function") hideGlobalLoading(true);
            }
        }

        // QR-/Link-Beitritt (?join=CODE): Der Code wird beim Laden in
        // window._pendingJoinCode zwischengespeichert (siehe DOMContentLoaded
        // oben in dieser Datei), vorher aber nirgends wieder abgeholt - der
        // Code wurde also stumm verworfen und man landete nie direkt in der
        // Lobby. Sobald ein Spielerprofil aktiv ist (selectProfile in
        // family-dashboard.js ruft das auf), automatisch beitreten.
        async function versucheDeepLinkJoin() {
            const code = window._pendingJoinCode;
            if (!code || !currentPlayer || !activePlayerKey) return;
            window._pendingJoinCode = null;
            const inp = document.getElementById("coded-lobby-join-code");
            if (inp) inp.value = code;
            await joinCodedLobby();
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
            // Musik-Regler mit dem tatsächlichen Wert synchronisieren, sobald
            // die Einstellungen geöffnet werden (Wert kommt aus localStorage,
            // nicht aus dem statischen HTML-Default).
            if (viewId === 'einstellungen') {
                const mSlider = document.getElementById('music-volume-slider');
                const mLabel = document.getElementById('music-volume-label');
                const pct = Math.round((typeof musicVolume !== 'undefined' ? musicVolume : 0.25) * 100);
                if (mSlider) mSlider.value = pct;
                if (mLabel) mLabel.innerText = pct + '%';
                if (typeof renderDevPanel === 'function') renderDevPanel();
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
            // Vorlesen (Klasse 1/2) stoppen, wenn die Quiz-Ansicht verlassen wird –
            // sonst läuft die Sprachausgabe im Hintergrund weiter, egal wie man
            // rausgeht (Beenden-Knopf, Zurück, Fertig).
            if (viewId !== 'quiz' && 'speechSynthesis' in window) {
                try { window.speechSynthesis.cancel(); } catch (e) { }
            }
            // Live-Duell-Listener stoppen, wenn wir die Duell-Ansichten verlassen
            // (z.B. über FAB/Drawer). Der Firestore-Eintrag bleibt bestehen, ein
            // erneutes Beitreten (offene Duelle / Lobby-Code) hängt sich wieder ein.
            const _liveDuelViews = ['live-duel-setup', 'live-duel-lobby', 'live-duel-play', 'live-duel-result'];
            if (!_liveDuelViews.includes(viewId) && typeof liveDuelUnsubscribe !== 'undefined' && liveDuelUnsubscribe) {
                try { liveDuelUnsubscribe(); } catch (e) { }
                liveDuelUnsubscribe = null;
            }

            if (typeof setMusicMode === 'function') setMusicMode(viewId);

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
            if (viewId === 'einstellungen' && typeof syncAudioSettingsUI === 'function') syncAudioSettingsUI();
            if (viewId === 'quiz-setup' && typeof setupCategorySelectors === 'function') {
                setupCategorySelectors("quiz-area", "sub-category", "lernen");
            }
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
        async function fragePinUndOeffneDashboard(targetSection, targetPlayerKey) {
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
                if (await appConfirm("Möchtest du die PIN zurücksetzen? Dafür bestätigst du dich mit deinem Account-Login.", {
                    titel: "PIN vergessen?", icon: "🔑", okText: "Zurücksetzen"
                })) {
                    return resetAdminPinViaLogin();
                }
                switchView('family-hub');
                return;
            }
            debugDatabaseLoading();
            if (targetPlayerKey && typeof selectedStatPlayer !== 'undefined') selectedStatPlayer = targetPlayerKey;
            switchDashboardSection(targetSection || 'inhalte');
        }

        // PIN vergessen: statt eines E-Mail-Versands (den die App aktuell
        // technisch nicht kann - nur "mailto:" fürs Feedback) bestätigt sich
        // der Elternteil einfach nochmal mit seinem Account-Login (Passwort
        // oder Google), dann darf er/sie direkt eine neue PIN vergeben.
        async function resetAdminPinViaLogin() {
            try {
                const providers = (currentParentUser.providerData || []).map(p => p.providerId);
                if (providers.includes("password")) {
                    const pw = await appPrompt("Gib dein Account-Passwort ein, um die PIN zurückzusetzen.", {
                        titel: "🔑 PIN zurücksetzen", icon: "🔑",
                        passwort: true, maxLen: 60, platzhalter: "Account-Passwort", okText: "Bestätigen"
                    });
                    if (!pw) { switchView('family-hub'); return; }
                    const cred = firebase.auth.EmailAuthProvider.credential(currentParentUser.email, pw);
                    await currentParentUser.reauthenticateWithCredential(cred);
                } else if (providers.includes("google.com")) {
                    await currentParentUser.reauthenticateWithPopup(new firebase.auth.GoogleAuthProvider());
                } else {
                    showToast("PIN-Reset für diesen Login ist nicht möglich.", "error", "pin");
                    switchView('family-hub');
                    return;
                }
            } catch (e) {
                showToast("Bestätigung fehlgeschlagen – PIN bleibt unverändert.", "error", "pin");
                switchView('family-hub');
                return;
            }
            const p1 = cleanInput(await appPrompt("Bestätigung ok! Lege jetzt eine neue PIN fest (4 bis 12 Zeichen).", {
                titel: "Neue PIN", icon: "🔒", passwort: true, maxLen: 12, platzhalter: "Neue PIN", okText: "Weiter"
            }), 12);
            if (!p1 || p1.length < 4) {
                showToast("Der PIN braucht mindestens 4 Zeichen.", "error", "pin");
                switchView('family-hub');
                return;
            }
            const p2 = cleanInput(await appPrompt("Bitte zur Sicherheit noch einmal eingeben.", {
                titel: "PIN bestätigen", icon: "🔒", passwort: true, maxLen: 12, platzhalter: "PIN wiederholen", okText: "Speichern"
            }), 12);
            if (p2 !== p1) {
                showToast("Die beiden Eingaben stimmen nicht überein.", "error", "pin");
                switchView('family-hub');
                return;
            }
            try {
                await db.collection("parents").doc(currentParentUser.uid).set({ adminPin: p1 }, { merge: true });
                adminPin = p1;
                showToast("Neue PIN gespeichert!", "success", "pin");
                debugDatabaseLoading();
                switchDashboardSection('inhalte');
            } catch (e) {
                showToast("PIN konnte nicht gespeichert werden.", "error", "pin");
                switchView('family-hub');
            }
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
            if (typeof updatePushToggleUI === "function") updatePushToggleUI();
            // QR-/Deep-Link: ?join=ABCD (Online) oder ?tv=ABCD (TV)
            try {
                const params = new URLSearchParams(window.location.search || "");
                let join = (params.get("join") || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
                let tv = (params.get("tv") || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
                if (join.length === 4) window._pendingJoinCode = join;
                if (tv.length === 4) window._pendingTVCode = tv;
                if (join.length === 4 || tv.length === 4) {
                    try {
                        const u = new URL(window.location.href);
                        u.searchParams.delete("join");
                        u.searchParams.delete("tv");
                        window.history.replaceState({}, "", u.pathname + u.search + u.hash);
                    } catch (e2) { }
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

