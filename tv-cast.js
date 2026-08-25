        // ============================================================
        //  TV-MODUS
        //  Cast/Receiver (receiver.html, window.open-Popup) wurde am 25.08.2026
        //  entfernt - es war eingefroren, nicht eingebunden und ein zweites,
        //  halbfertiges System neben diesem hier. Der TV-Modus laeuft ueber
        //  Screen-Mirroring: das Handy des Gastgebers ist der Fernseher,
        //  Mitspieler kommen per 4-stelligem Code oder QR dazu.
        // ============================================================

        // ============================================================
        //  FERNSEHER-ANSICHT (Screen-Mirror: Handy → TV)
        // ============================================================
        let tvMirrorDisplay = false;

        function setTVMirrorDisplay(on) {
            // Host bleibt immer in Fernseher-Ansicht (kein „Normale Ansicht“ mehr)
            tvMirrorDisplay = on !== false;
            document.body.classList.toggle("tv-mirror-display", tvMirrorDisplay);
            const bar = document.getElementById("tv-mirror-bar");
            if (bar) bar.classList.add("hidden");
            try {
                if (tvMirrorDisplay && document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen().catch(function () {});
                }
            } catch (_) {}
        }
        window.setTVMirrorDisplay = setTVMirrorDisplay;

        function toggleTVMirrorDisplay() {
            setTVMirrorDisplay(!tvMirrorDisplay);
        }
        window.toggleTVMirrorDisplay = toggleTVMirrorDisplay;

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
        // Tipp-Kacheln fürs Wort-Duell im TV-Modus (Handy des Spielers) -
        // gleiches Prinzip wie beim normalen Online-Wort-Duell in live-duel.js,
        // statt Text-Eingabefeld mit System-Tastatur.
        let tvScrabbleSelected = [];
        let tvScrabbleCurrentLetters = [];
        let tvScrabbleCurrentRequired = "";
        let tvScrabbleLetzteRunde = -1;

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
        const TV_HOST_MERK = "eduplayTVHostAktiv";

        function merkeTVHost(aktiv, code) {
            try {
                if (!aktiv) { localStorage.removeItem(TV_HOST_MERK); return; }
                localStorage.setItem(TV_HOST_MERK, JSON.stringify({
                    uid: currentParentUser && currentParentUser.uid,
                    code: code || window._activeTVCode || "",
                    ts: Date.now()
                }));
            } catch (e) { /* */ }
        }

        function gemerkterTVHost() {
            try {
                const roh = localStorage.getItem(TV_HOST_MERK);
                if (!roh) return null;
                const d = JSON.parse(roh);
                if (!d || !d.uid) return null;
                if (Date.now() - (d.ts || 0) > 4 * 60 * 60 * 1000) { merkeTVHost(false); return null; }
                return d;
            } catch (e) { return null; }
        }

        function bindTVHostSnapshot() {
            if (tvUnsubscribe) { try { tvUnsubscribe(); } catch (e) { } tvUnsubscribe = null; }
            if (!tvGameRef) return;
            tvUnsubscribe = tvGameRef.onSnapshot((doc) => {
                if (!doc.exists) return;
                const data = doc.data();
                if (data.status === "waiting") {
                    renderTVPlayerList(data.players);
                    return;
                }
                if (data.status === "finished" && isTVHost) {
                    if (typeof clearTVWrTimers === "function") clearTVWrTimers();
                    stopTVAutoAdvance();
                    stopTVActionMode();
                    showTVHostPodium(data.players);
                    merkeTVHost(false);
                    return;
                }
                if (data.status === "playing" && data.mode === "wortraten") {
                    showTVHostWortraten(data);
                    return;
                }
                if (data.status === "playing" && !data.showAnswer) {
                    if (data.mode === "scrabble") {
                        const scKey = "sc:" + (data.currentRound || 0) + ":" + (data.currentLetters || []).join("");
                        if (window._tvHostRenderKey !== scKey) {
                            window._tvHostRenderKey = scKey;
                            showTVHostScrabbleRound(
                                data.currentLetters,
                                data.currentRound,
                                data.totalRounds || 0,
                                data.currentRequired || ""
                            );
                        }
                    } else if (data.mode === "quiz" && typeof showTVHostQuestion === "function") {
                        if (Array.isArray(data.questions) && data.questions.length) {
                            tvQuestions = data.questions;
                        }
                        if (typeof data.currentQuestionIndex === "number") {
                            // Nur neu zeichnen, wenn die Frage wechselt – sonst springt der Zeitbalken
                            const qKey = "q:" + data.currentQuestionIndex + ":" + (data.answerDeadline || 0);
                            if (window._tvHostRenderKey !== qKey) {
                                window._tvHostRenderKey = qKey;
                                showTVHostQuestion(data.currentQuestionIndex);
                            }
                        }
                    }
                    const alle = Object.values(data.players || {});
                    const zaehlend = alle.filter(p => istAnwesend(p) || p.hasAnswered);
                    const ansCount = zaehlend.filter(p => p.hasAnswered).length;
                    const totalCount = zaehlend.length;
                    const wegCount = alle.length - totalCount;
                    if (!data.answerDeadline) {
                        const secs = data.mode === "scrabble" ? 60 : 30;
                        tvGameRef.update({ answerDeadline: Date.now() + secs * 1000 }).catch(() => { });
                    }
                    const restSek = data.answerDeadline
                        ? Math.max(0, Math.ceil((data.answerDeadline - Date.now()) / 1000))
                        : null;
                    const counterEl = document.getElementById("tv-answer-counter");
                    if (counterEl) {
                        // Scrabble hat den visuellen Zeitbalken (tv-show-timer-bar) –
                        // die Sekunden im Text wären doppelt gemoppelt.
                        counterEl.innerText = `${ansCount} von ${totalCount} haben geantwortet`
                            + (restSek !== null && data.mode !== "scrabble" ? ` · noch ${restSek}s` : "")
                            + (wegCount > 0 ? ` · ${wegCount} kurz weg` : "");
                    }
                    starteTVRundenTimer(data);
                    const fristAbgelaufen = data.answerDeadline && Date.now() >= data.answerDeadline;
                    if (totalCount > 0 && !isResolving && (ansCount >= totalCount || fristAbgelaufen)) {
                        isResolving = true;
                        stoppeTVRundenTimer();
                        setTimeout(() => {
                            data.mode === "scrabble" ? revealTVScrabbleRound(data) : revealTVAnswer(data);
                        }, 800);
                    }
                }
            });
        }

        async function versucheTVHostWiedereinstieg() {
            if (isTVHost || tvGameRef) return;
            if (!currentParentUser) return;
            const merk = gemerkterTVHost();
            if (!merk || merk.uid !== currentParentUser.uid) return;
            try {
                const ref = db.collection("parents").doc(currentParentUser.uid).collection("tv_game").doc("lobby");
                const snap = await ref.get();
                if (!snap.exists) { merkeTVHost(false); return; }
                const data = snap.data() || {};
                if (data.status === "finished") { merkeTVHost(false); return; }
                if (typeof appConfirm !== "function") return;
                const ok = await appConfirm(
                    "TV-Lobby läuft noch (" + (data.status || "?") + "). Als Host fortsetzen?",
                    { titel: "TV wieder übernehmen?", icon: "📺", okText: "Ja", abbrechenText: "Nein" }
                );
                if (!ok) { merkeTVHost(false); return; }
                isTVHost = true;
                tvGameRef = ref;
                if (merk.code) window._activeTVCode = merk.code;
                merkeTVHost(true, merk.code || window._activeTVCode);
                starteTVLebenszeichen();
                bindTVHostSnapshot();
                switchView('tv-quiz-host');
                if (data.status === "waiting") {
                    const tvCode = merk.code || window._activeTVCode || "";
                    const joinUrl = (window.location.origin || "") + (window.location.pathname || "/") + "?tv=" + encodeURIComponent(tvCode);
                    const qrSrc = tvCode ? "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" + encodeURIComponent(joinUrl) : "";
                    setTVHostPlayHTML(`
                        <div class="tv-lobby-stage">
                            <h2 class="tv-lobby-title">TV-Lobby wiederhergestellt</h2>
                            ${tvCode ? `<div class="tv-lobby-join-row">
                                ${qrSrc ? `<div class="tv-lobby-qr"><img alt="QR" src="${qrSrc}"></div>` : ""}
                                <div class="tv-lobby-code-block">
                                    <p class="tv-lobby-code-label">Beitritts-Code</p>
                                    <div class="tv-lobby-code">${tvCode}</div>
                                </div>
                                <button type="button" onclick="shareTVCode()" class="tv-lobby-share">📤 Code teilen</button>
                            </div>` : ""}
                            <div id="tv-player-list" class="tv-lobby-players"></div>
                            <button onclick="startTVGameLoop()" class="tv-lobby-start">Spiel starten! 🚀</button>
                            <button onclick="leaveTVGame()" class="tv-lobby-cancel">Lobby abbrechen</button>
                        </div>`);
                    renderTVPlayerList(data.players);
                } else if (data.status === "playing") {
                    if (data.mode === "wortraten") showTVHostWortraten(data);
                    else if (data.mode === "scrabble") {
                        showTVHostScrabbleRound(data.currentLetters, data.currentRound, data.totalRounds || 0, data.currentRequired || "");
                    } else if (Array.isArray(data.questions)) {
                        tvQuestions = data.questions;
                        showTVHostQuestion(data.currentQuestionIndex || 0);
                    }
                }
                showToast("📺 TV-Host wieder verbunden", "success");
            } catch (e) {
                handleError("versucheTVHostWiedereinstieg", e, "TV-Wiedereinstieg fehlgeschlagen.");
            }
        }

        function showTVHostSetup() {
            stopTVRoundTimer();
            stopTVAutoAdvance();
            const setup = document.getElementById("tv-host-setup");
            const play = document.getElementById("tv-host-play");
            if (play) { play.classList.add("hidden"); play.innerHTML = ""; }
            if (setup) setup.classList.remove("hidden");
            setTimeout(versucheTVHostWiedereinstieg, 300);
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
            try {
                const inp = document.getElementById("tv-join-code");
                if (inp && !inp.value) {
                    const last = (localStorage.getItem("eduplay_last_tv_code") || "").trim();
                    if (last) inp.value = last;
                }
            } catch (_) {}
        }
        // TV-Host: zwingend Querformat (Gameshow-Look)
        let _tvLandscapeForced = false;
        function isTVLandscape() {
            try {
                if (window.matchMedia && window.matchMedia("(orientation: landscape)").matches) return true;
            } catch (e) { /* */ }
            return (window.innerWidth || 0) > (window.innerHeight || 0);
        }
        function ensureTVLandscapeOverlay() {
            let el = document.getElementById("tv-landscape-lock");
            if (!el) {
                el = document.createElement("div");
                el.id = "tv-landscape-lock";
                el.className = "tv-landscape-lock hidden";
                el.innerHTML =
                    '<div class="tv-landscape-lock-card">' +
                    '<div class="tv-landscape-lock-icon">📱↻</div>' +
                    '<h2>Querformat nötig</h2>' +
                    '<p>Für den TV-Modus das Gerät <strong>quer</strong> drehen – dann sieht es wie eine echte Show aus.</p>' +
                    '<p class="tv-landscape-lock-sub">Danach startet die Ansicht automatisch.</p>' +
                    "</div>";
                document.body.appendChild(el);
            }
            const need = _tvLandscapeForced && !isTVLandscape();
            el.classList.toggle("hidden", !need);
            document.body.classList.toggle("tv-need-landscape", !!need);
            if (need) {
                try {
                    if (screen.orientation && typeof screen.orientation.lock === "function") {
                        screen.orientation.lock("landscape").catch(function () { /* Browser erlaubt oft nur im Fullscreen */ });
                    }
                } catch (e2) { /* */ }
            }
        }
        function requestTVFullscreenAndLock() {
            try {
                const root = document.documentElement;
                if (!document.fullscreenElement && root.requestFullscreen) {
                    root.requestFullscreen().catch(function () { /* */ });
                }
            } catch (e) { /* */ }
            try {
                if (screen.orientation && typeof screen.orientation.lock === "function") {
                    screen.orientation.lock("landscape").catch(function () { /* oft nur im Fullscreen */ });
                }
            } catch (e2) { /* */ }
        }
        function startTVLandscapeGuard() {
            _tvLandscapeForced = true;
            document.body.classList.add("tv-host-active");
            document.documentElement.classList.add("tv-host-lock");
            ensureTVLandscapeOverlay();
            // Immer erneut versuchen (auch nach Zurück / Tab-Wechsel)
            requestTVFullscreenAndLock();
            if (isTVLandscape()) {
                // zweiter Versuch kurz danach (manche Browser brauchen User-Gesture + Delay)
                setTimeout(requestTVFullscreenAndLock, 280);
            }
            setTimeout(function () {
                const hint = document.getElementById("tv-rotate-hint");
                if (hint) hint.classList.add("hidden");
                if (isTVLandscape()) {
                    const lock = document.getElementById("tv-landscape-lock");
                    if (lock) lock.classList.add("hidden");
                    document.body.classList.remove("tv-need-landscape");
                    requestTVFullscreenAndLock();
                }
            }, 1800);
        }
        function stopTVLandscapeGuard() {
            _tvLandscapeForced = false;
            document.body.classList.remove("tv-host-active");
            document.documentElement.classList.remove("tv-host-lock");
            ensureTVLandscapeOverlay();
            try {
                if (screen.orientation && typeof screen.orientation.unlock === "function") {
                    screen.orientation.unlock();
                }
            } catch (e) { /* */ }
            try {
                if (document.fullscreenElement && document.exitFullscreen) {
                    document.exitFullscreen().catch(function () { });
                }
            } catch (e2) { /* */ }
        }
        window.startTVLandscapeGuard = startTVLandscapeGuard;
        window.stopTVLandscapeGuard = stopTVLandscapeGuard;
        window.addEventListener("orientationchange", function () {
            setTimeout(function () {
                ensureTVLandscapeOverlay();
                if (_tvLandscapeForced) requestTVFullscreenAndLock();
            }, 120);
        });
        window.addEventListener("resize", function () {
            ensureTVLandscapeOverlay();
        });
        // Nach App-Wechsel / Zurück: Guard + Vollbild erneut
        document.addEventListener("visibilitychange", function () {
            if (document.visibilityState === "visible" && _tvLandscapeForced && isTVHost) {
                startTVLandscapeGuard();
            }
        });
        window.addEventListener("pageshow", function () {
            if (_tvLandscapeForced && isTVHost) startTVLandscapeGuard();
        });

        function setTVHostPlayHTML(html) {
            showTVHostPlay();
            if (isTVHost) {
                startTVLandscapeGuard();
                setTVMirrorDisplay(true);
            }
            const el = tvHostPlayEl();
            if (el) el.innerHTML = html;
            ensureTVLandscapeOverlay();
            if (isTVHost) requestTVFullscreenAndLock();
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

        // Tickt am Fernseher sekündlich, damit die Frist auch dann abläuft,
        // wenn kein neuer Snapshot mehr hereinkommt (niemand antwortet mehr).
        let tvFristTicker = null;

        let _tvBarDeadlineKey = null;
        function starteTVRundenTimer(data) {
            if (!data || !data.answerDeadline) return;
            const deadline = data.answerDeadline;
            const barKey = String(deadline) + ":" + (data.currentQuestionIndex || data.currentRound || 0);

            // Balken nur einmal pro Runde starten (sonst springt er bei jedem Snapshot zurück)
            if (_tvBarDeadlineKey !== barKey) {
                _tvBarDeadlineKey = barKey;
                try {
                    const bar = document.getElementById("tv-kahoot-timer-bar");
                    if (bar) {
                        // Gesamtdauer der Runde schätzen (Deadline war gerade gesetzt → ~30s/60s)
                        // Gleichmäßig von jetzt bis Deadline – ein linearer Lauf, kein Neustart
                        const remainMs = Math.max(200, deadline - Date.now());
                        // Ursprüngliche Länge: wenn fast voll, von 100%; sonst proportional zur Restzeit
                        // Annahme: Quiz 30s, Scrabble 60s
                        const fullMs = (data.mode === "scrabble") ? 60000 : 30000;
                        const startPct = Math.min(100, Math.max(2, (remainMs / fullMs) * 100));
                        bar.style.transition = "none";
                        bar.style.width = startPct + "%";
                        void bar.offsetWidth;
                        bar.style.transition = "width " + remainMs + "ms linear";
                        bar.style.width = "0%";
                    }
                } catch (e) { /* */ }
            }

            // Sekunden-Ticker nur einmal laufen lassen
            if (tvFristTicker) return;
            tvFristTicker = setInterval(() => {
                if (!tvGameRef) return stoppeTVRundenTimer();
                const rest = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
                const el = document.getElementById("tv-answer-counter");
                if (el && el.innerText.indexOf("noch ") !== -1) {
                    el.innerText = el.innerText.replace(/noch \d+s/, "noch " + rest + "s");
                }
                if (rest <= 0) {
                    stoppeTVRundenTimer();
                    if (isResolving) return;
                    isResolving = true;
                    tvGameRef.get().then(d => {
                        if (!d.exists) return;
                        const frisch = d.data();
                        if (frisch.status !== "playing" || frisch.showAnswer) { isResolving = false; return; }
                        frisch.mode === "scrabble" ? revealTVScrabbleRound(frisch) : revealTVAnswer(frisch);
                    }).catch(() => { isResolving = false; });
                }
            }, 1000);
        }

        // Lebenszeichen des Spielerhandys. Der Fernseher erkennt daran, wer
        // gerade wirklich mitspielt, und wartet nicht auf weggelegte Geräte.
        let tvLebenszeichen = null;

        function starteTVLebenszeichen() {
            stoppeTVLebenszeichen();
            const schlag = () => {
                if (!tvGameRef) return;
                // Host = Fernseher: nur hostLastSeen, NIE in players[] eintragen
                // (sonst erscheint ein Geister-Spieler ohne Namen, der nicht antworten kann).
                if (isTVHost) {
                    tvGameRef.update({ hostLastSeen: Date.now() }).catch(() => { });
                    return;
                }
                if (!activePlayerKey) return;
                sendeLebenszeichen(tvGameRef, activePlayerKey, null);
            };
            schlag();
            tvLebenszeichen = setInterval(schlag, 12000);
        }

        function stoppeTVLebenszeichen() {
            if (tvLebenszeichen) { clearInterval(tvLebenszeichen); tvLebenszeichen = null; }
        }

        // Handy entsperrt oder Anruf beendet: sofort zurückmelden.
        document.addEventListener("visibilitychange", function () {
            if (document.visibilityState !== "visible") return;
            if (!tvGameRef) return;
            if (isTVHost) {
                tvGameRef.update({ hostLastSeen: Date.now() }).catch(() => { });
                return;
            }
            if (!activePlayerKey) return;
            sendeLebenszeichen(tvGameRef, activePlayerKey, null);
        });

        // Entfernt Geister-Einträge (z.B. Host ohne Namen) aus der players-Map.
        function bereinigeTVPlayers(players) {
            const clean = {};
            Object.keys(players || {}).forEach(k => {
                const p = players[k];
                if (!p) return;
                const name = (p.name && String(p.name).trim()) || "";
                if (!name) return; // kein Name = kein echter Mitspieler
                clean[k] = p;
            });
            return clean;
        }

        function stoppeTVRundenTimer() {
            if (tvFristTicker) { clearInterval(tvFristTicker); tvFristTicker = null; }
            _tvBarDeadlineKey = null;
        }

        let tvUsedWords = new Set();
        const tvCoinsClaimedLocal = new Set();
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
            ["quiz", "scrabble", "wortraten"].forEach(function (m) {
                const btn = document.getElementById("tvmode-" + m);
                if (btn) btn.className = "flex-1 py-2.5 px-1 rounded-lg font-bold transition-all " + (mode === m ? "active" : "");
            });
            const q = document.getElementById("tv-quiz-mode-options");
            const s = document.getElementById("tv-scrabble-mode-options");
            const w = document.getElementById("tv-wortraten-mode-options");
            if (q) q.classList.toggle("hidden", mode !== "quiz");
            if (s) s.classList.toggle("hidden", mode !== "scrabble");
            if (w) w.classList.toggle("hidden", mode !== "wortraten");
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
            } else if (tvHostMode === 'wortraten') {
                const tvWrMode = (document.getElementById("tv-wr-wordmode") || {}).value || "kids";
                lobbyData = {
                    status: "waiting",
                    mode: "wortraten",
                    wordMode: tvWrMode,
                    difficulty: (document.getElementById("tv-wr-difficulty") || {}).value || "mittel",
                    theme: (document.getElementById("tv-wr-theme") || {}).value || "schneemann",
                    wordTheme: tvWrMode === "adult" ? "gemischt"
                        : ((document.getElementById("tv-wr-word-theme") || {}).value || "gemischt"),
                    totalRounds: parseInt((document.getElementById("tv-wr-rounds") || {}).value || "3", 10),
                    currentRound: 0,
                    order: [],
                    turnIndex: 0,
                    word: "",
                    guessed: [],
                    wrongCount: 0,
                    roundOver: false,
                    roundSolved: false,
                    usedWords: [],
                    players: {}
                };
            } else {
                const categoryKeys = (typeof collectCategoryKeysFor === "function") ? collectCategoryKeysFor("tv") : [];
                if (categoryKeys.length === 0) return showToast("Bitte ein Thema wählen!", "error");
                lobbyData = {
                    status: "waiting",
                    mode: "quiz",
                    category: categoryKeys[0],
                    categoryKeys: categoryKeys,
                    currentQuestionIndex: 0,
                    players: {}
                };
            }

            try {
                await hostRef.set(lobbyData);
                isTVHost = true;
                tvGameRef = hostRef;

                // Kurzcode für Beitritt von anderen Accounts
                let tvCode = "";
                try {
                    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
                    for (let i = 0; i < 4; i++) tvCode += alphabet[Math.floor(Math.random() * alphabet.length)];
                    await db.collection("tv_codes").doc(tvCode).set({
                        parentId: currentParentUser.uid,
                        createdAt: Date.now(),
                        hostName: (currentPlayer && currentPlayer.name && String(currentPlayer.name).trim()) || "Gastgeber"
                    });
                    window._activeTVCode = tvCode;
                } catch (e) { console.warn("TV-Code konnte nicht angelegt werden", e); }
                merkeTVHost(true, tvCode);

                const joinUrl = (window.location.origin || "") + (window.location.pathname || "/") + "?tv=" + encodeURIComponent(tvCode);
                const qrSrc = tvCode
                    ? "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" + encodeURIComponent(joinUrl)
                    : "";

                setTVHostPlayHTML(`
                    <div class="tv-lobby-stage">
                        <h2 class="tv-lobby-title">TV-Lobby</h2>
                        ${tvCode ? `<div class="tv-lobby-card">
                            <div class="tv-lobby-join-row">
                                ${qrSrc ? `<div class="tv-lobby-qr"><img alt="QR" src="${qrSrc}"></div>` : ""}
                                <div class="tv-lobby-code-block">
                                    <p class="tv-lobby-code-label">Code</p>
                                    <div class="tv-lobby-code">${tvCode}</div>
                                </div>
                                <button type="button" onclick="shareTVCode()" class="tv-lobby-share">📤 Teilen</button>
                            </div>
                        </div>` : ""}
                        <div id="tv-player-list" class="tv-lobby-players"></div>
                        <div class="tv-lobby-actions">
                            <button onclick="startTVGameLoop()" class="tv-lobby-start">Spiel starten 🚀</button>
                            <button onclick="leaveTVGame()" class="tv-lobby-cancel">Abbrechen</button>
                        </div>
                    </div>
                `);

                // Immer Fernseher-Ansicht (kein Umschalten mehr)
                if (typeof setTVMirrorDisplay === "function") setTVMirrorDisplay(true);
                starteTVLebenszeichen();
                bindTVHostSnapshot();
            } catch (e) {
                handleError("startTVHostLobby", e, "Die Lobby konnte nicht erstellt werden.");
            }
        }

        function renderTVPlayerList(players) {
            const list = document.getElementById("tv-player-list");
            if (!list) return;
            const cleaned = bereinigeTVPlayers(players || {});
            const keys = Object.keys(cleaned);
            if (keys.length === 0) {
                list.innerHTML = `<div class="tv-lobby-empty">Warte auf Mitspieler…</div>`;
                return;
            }
            let online = 0;
            const cards = keys.map(function (k) {
                const p = cleaned[k];
                const da = typeof istAnwesend === "function" ? istAnwesend(p) : true;
                if (da) online++;
                return `<div class="tv-lobby-player ${da ? "is-on" : "is-off"}">
                    <span class="tv-lobby-player-dot"></span>
                    <span class="tv-lobby-player-name">${esc(p.name)}</span>
                </div>`;
            }).join("");
            const bar = `<div class="tv-lobby-status">${online}/${keys.length} online</div>`;
            list.innerHTML = bar + cards;
        }

        function tvBuildQuestionPool(catKeys, want) {
            want = want || 10;
            let list = [];
            try {
                if (catKeys && catKeys.length > 1 && typeof buildMixedQuestions === "function") {
                    list = buildMixedQuestions(catKeys, want) || [];
                } else if (catKeys && catKeys[0] && typeof questionsForKey === "function") {
                    const raw = questionsForKey(catKeys[0]) || [];
                    list = (typeof prepareQuestions === "function" ? prepareQuestions(raw) : raw)
                        .slice().sort(function () { return Math.random() - 0.5; }).slice(0, want);
                }
            } catch (e) { console.warn("tvBuildQuestionPool", e); }
            if (list.length < 3 && typeof QUESTIONS_DATABASE !== "undefined" && QUESTIONS_DATABASE.length) {
                const extra = QUESTIONS_DATABASE.slice()
                    .sort(function () { return Math.random() - 0.5; })
                    .slice(0, want);
                const seen = {};
                list.forEach(function (q) { seen[(q.id || q.question)] = true; });
                extra.forEach(function (q) {
                    const k = q.id || q.question;
                    if (!seen[k] && list.length < want) {
                        seen[k] = true;
                        list.push(typeof shuffleAnswers === "function" ? shuffleAnswers(q) : q);
                    }
                });
            }
            return list;
        }

        // Fragen fuer Firestore abspecken: nur was der Fernseher zum
        // Weiterspielen braucht. Verhindert undefined-Felder (die Firestore
        // ablehnt) und haelt das Lobby-Dokument klein.
        function tvSlimQuestions(list) {
            return (list || []).map(function (q) {
                return {
                    question: String(q.question || ""),
                    answers: (q.answers || []).map(function (a) { return String(a); }),
                    correct: typeof q.correct === "number" ? q.correct : 0,
                    explanation: String(q.explanation || "")
                };
            });
        }

        function startTVGameLoop() {
            tvGameRef.get().then(doc => {
                const data = doc.data();
                if (data.mode === "scrabble") { startTVScrabbleRound(data); return; }
                if (data.mode === "wortraten") { startTVWortratenRound(data); return; }
                const catKeys = (data.categoryKeys && data.categoryKeys.length) ? data.categoryKeys : [data.category];
                tvQuestions = tvBuildQuestionPool(catKeys, 10);
                if (tvQuestions.length < 3) {
                    showToast("Zu wenige Fragen – anderes Thema wählen oder Fragen laden.", "error");
                    return;
                }
                const playersData = bereinigeTVPlayers(data.players || {});
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
                    answerDeadline: null,
                    players: playersData,
                    questions: tvSlimQuestions(tvQuestions),
                    correctAnswer: tvQuestions[0].correct,
                    answerCount: tvQuestions[0].answers.length
                });
                showTVHostQuestion(0);
            });
        }

        // EduPlay-TV-Palette (kein Kahoot-Klon): Indigo, Emerald, Amber, Fuchsia
        // Etwas dunklere Toene als vorher: weisse Schrift darauf ist aus
        // drei Metern Abstand deutlich besser lesbar (vor allem das Gelb).
        const TV_SHOW_COLORS = ["#4338ca", "#047857", "#b45309", "#a21caf"];
        const TV_SHOW_LABELS = ["A", "B", "C", "D"];

        // Kleiner Hinweis oben im Bild: solange eine Runde laeuft, koennen
        // Nachzuegler mit dem Code noch dazukommen (joinTVGame laesst auch
        // status "playing" zu) - man sah den Code aber nur in der Lobby.
        function tvJoinChipHTML() {
            const code = window._activeTVCode || "";
            if (!code || !isTVHost) return "";
            return '<span class="tv-show-join">📲 Mitspielen: <b>' + esc(code) + '</b></span>';
        }

        function showTVHostQuestion(index) {
            stopTVRoundTimer();
            isResolving = false;
            tvCurrentQ = tvQuestions[index];
            if (!tvCurrentQ || !Array.isArray(tvCurrentQ.answers) || !tvCurrentQ.answers.length) {
                // Kann nach einem Neuladen des Fernsehers passieren. Frueher lief
                // die Funktion in einen Skriptfehler und das Bild blieb stehen.
                console.warn("TV: Frage", index, "fehlt");
                showToast("Die Fragen sind verloren gegangen - bitte neue Runde starten.", "error", "tvq");
                return;
            }
            let answersHtml = "";
            (tvCurrentQ.answers || []).forEach((ans, i) => {
                const bg = TV_SHOW_COLORS[i % 4];
                const lab = TV_SHOW_LABELS[i % 4];
                answersHtml += `
                    <div class="tv-show-tile" style="background:${bg}">
                        <span class="tv-show-label">${lab}</span>
                        <span class="tv-show-answer">${esc(ans)}</span>
                    </div>`;
            });
            setTVHostPlayHTML(`
                <div class="tv-show-stage">
                    <div class="tv-rotate-hint" id="tv-rotate-hint">📱 Für die beste TV-Ansicht: Handy <strong>quer</strong> drehen</div>
                    <div class="tv-show-top">
                        <div class="tv-show-meta">
                            <span class="tv-show-qnum">Frage ${index + 1} / ${tvQuestions.length}</span>
                            ${tvJoinChipHTML()}
                            <button onclick="appConfirmSwitch('TV-Spiel endet für alle.','Spiel verlassen?',null,function(){leaveTVGame(true);})" class="tv-show-exit">✕</button>
                        </div>
                        <div class="tv-show-timer-track" aria-hidden="true">
                            <div id="tv-kahoot-timer-bar" class="tv-show-timer-bar"></div>
                        </div>
                        <h1 class="tv-show-question">${esc(tvCurrentQ.question)}</h1>
                    </div>
                    <div class="tv-show-grid">${answersHtml}</div>
                    <div class="tv-show-footer">
                        <span id="tv-answer-counter" class="tv-show-counter">0 von 0 haben geantwortet</span>
                        <button onclick="forceTVQuizReveal()" class="tv-show-force">Runde auswerten ⏱️</button>
                    </div>
                </div>
            `);
            // Kein eigener lokaler Timer – Firestore-answerDeadline bleibt führend.
            // Visueller Balken wird in starteTVRundenTimer / Snapshot mitgezogen.
            // Balken startet erst mit answerDeadline (starteTVRundenTimer) – hier nur vorbereiten
            try {
                const bar = document.getElementById("tv-kahoot-timer-bar");
                if (bar) {
                    bar.style.transition = "none";
                    bar.style.width = "100%";
                }
                _tvBarDeadlineKey = null; // neue Frage → Balken darf neu anlaufen
            } catch (e) { /* */ }
        }

        // Schreibt ausschliesslich die ausgerechneten Felder pro Spieler statt der
        // kompletten players-Map. Die Map stammt vom Rundenbeginn; wer in der
        // Zwischenzeit beigetreten ist, wurde beim Zurueckschreiben wieder
        // entfernt - und sein Handy stand danach stumm da.
        function tvPunkteUpdate(playersData, felder, extra) {
            const update = Object.assign({}, extra || {});
            Object.keys(playersData || {}).forEach(function (k) {
                felder.forEach(function (f) {
                    const wert = playersData[k][f];
                    update["players." + k + "." + f] = (wert === undefined ? null : wert);
                });
            });
            return update;
        }

        function revealTVAnswer(data) {
            stopTVRoundTimer();
            window._tvHostRenderKey = null;
            _tvBarDeadlineKey = null;
            if (!tvCurrentQ && Array.isArray(data.questions) && data.questions.length) {
                tvQuestions = data.questions;
                tvCurrentQ = tvQuestions[data.currentQuestionIndex || 0];
            }
            if (!tvCurrentQ || !Array.isArray(tvCurrentQ.answers)) {
                isResolving = false;
                showToast("Die Fragen sind verloren gegangen - bitte neue Runde starten.", "error", "tvq");
                return;
            }
            const correctIndex = data.correctAnswer;
            const playersData = data.players || {};

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
            // Ein Schreibvorgang statt zwei: showAnswer und Punkte kamen vorher
            // getrennt an, dazwischen sah der Spieler kurz die alte Punktzahl.
            tvGameRef.update(tvPunkteUpdate(
                playersData,
                ["score", "answerStreak", "lastRoundPoints", "lastRoundDetail"],
                { showAnswer: true }
            ));

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
            (tvCurrentQ.answers || []).forEach((ans, i) => {
                const bg = TV_SHOW_COLORS[i % 4];
                const lab = TV_SHOW_LABELS[i % 4];
                const isOk = i === correctIndex;
                answersHtml += `
                    <div class="tv-show-tile ${isOk ? "tv-show-correct" : "tv-show-wrong"}" style="background:${bg}">
                        <span class="tv-show-label">${lab}</span>
                        <span class="tv-show-answer">${esc(ans)}</span>
                        ${isOk ? '<span class="tv-show-check">✓</span>' : ''}
                    </div>`;
            });

            const ranked = Object.values(playersData || {})
                .sort(function (a, b) { return (b.score || 0) - (a.score || 0); })
                .slice(0, 5)
                .map(function (p, i) {
                    return `<div class="tv-show-rank-row">
                        <span class="tv-show-rank-pos">${i + 1}</span>
                        <span class="tv-show-rank-name">${esc(p.name)}</span>
                        <span class="tv-show-rank-score">${p.score || 0}</span>
                    </div>`;
                }).join("");

            setTVHostPlayHTML(`
                <div class="tv-show-stage">
                    <div class="tv-rotate-hint">📱 Für die beste TV-Ansicht: Handy <strong>quer</strong> drehen</div>
                    <div class="tv-show-top">
                        <div class="tv-show-meta">
                            <span class="tv-show-qnum">Auflösung</span>
                            ${tvJoinChipHTML()}
                            <button onclick="appConfirmSwitch('TV-Spiel endet für alle.','Spiel verlassen?','tv-quiz-setup',function(){leaveTVGame(true);})" class="tv-show-exit">✕</button>
                        </div>
                        <h1 class="tv-show-question">${esc(tvCurrentQ.question)}</h1>
                        ${tvCurrentQ.explanation
                            ? `<p class="tv-show-explain">💡 ${esc(tvCurrentQ.explanation)}</p>`
                            : ""}
                    </div>
                    <div class="tv-show-grid">${answersHtml}</div>
                    <div class="tv-show-scorestrip">${ranked || ""}</div>
                    <div class="tv-show-footer">
                        <button onclick="nextTVQuestion()" class="tv-show-next">Nächste Frage ➔</button>
                        <div id="tv-auto-row" class="tv-show-auto">
                            <span id="tv-auto-label"></span>
                            <button onclick="toggleTVAutoAdvance()" id="tv-auto-btn" class="tv-show-auto-btn"></button>
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
            if (Array.isArray(data.questions) && data.questions.length) tvQuestions = data.questions;
            let nextIndex = (data.currentQuestionIndex || 0) + 1;
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
                await tvGameRef.update(tvPunkteUpdate(
                    playersData,
                    ["hasAnswered", "lastAnswer"],
                    {
                        currentQuestionIndex: nextIndex,
                        showAnswer: false,
                        answerDeadline: null,
                        correctAnswer: tvQuestions[nextIndex].correct,
                        answerCount: tvQuestions[nextIndex].answers.length
                    }
                ));
                showTVHostQuestion(nextIndex);
            }
        }

        function showTVHostPodium(playersData) {
            stopTVAutoAdvance();
            if (typeof clearTVWrTimers === "function") clearTVWrTimers();
            stopTVActionMode();
            const sorted = Object.values(playersData || {}).sort((a, b) => (b.score || 0) - (a.score || 0));
            const medals = ["🥇", "🥈", "🥉"];
            let ranks = "";
            sorted.forEach((p, i) => {
                const medal = i < 3 ? medals[i] : (i + 1) + ".";
                const top = i === 0 ? " is-first" : "";
                ranks += `<div class="tv-podium-row${top}"><span class="tv-podium-medal">${medal}</span><span class="tv-podium-name">${esc(p.name)}</span><span class="tv-podium-score">${p.score || 0} Pkt</span></div>`;
            });
            const names = esc(sorted.map(p => p.name).join(", "));
            const html =
                `<div class="tv-show-stage tv-podium-stage">
                    <div class="tv-rotate-hint">📱 Für die beste TV-Ansicht: Handy <strong>quer</strong> drehen</div>
                    <div class="tv-podium-layout">
                        <div class="tv-podium-left">
                            <h1 class="tv-podium-title">🏆 Siegerehrung</h1>
                            <div class="tv-podium-list">${ranks}</div>
                        </div>
                        <div class="tv-podium-right">
                            <p class="tv-podium-again-title">🔄 Gleich weiterspielen</p>
                            <p class="tv-podium-again-sub">Team: ${names || "—"}</p>
                            <div class="dash-sub-nav tv-podium-nav">
                                <button id="againmode-quiz" onclick="setTVAgainMode('quiz')" class="active">🧠 Quiz</button>
                                <button id="againmode-scrabble" onclick="setTVAgainMode('scrabble')">🔤 Wort-Duell</button>
                                <button id="againmode-wortraten" onclick="setTVAgainMode('wortraten')">🧩 Wort-Rätsel</button>
                            </div>
                            <div id="tv-again-quiz-opts">
                                <div class="dash-sub-nav tv-podium-nav">
                                    <button id="againtopic-spass" onclick="setTVAgainTopic('spass')" class="active">🎉 Spaß</button>
                                    <button id="againtopic-lernen" onclick="setTVAgainTopic('lernen')">📚 Lernen</button>
                                </div>
                                <select id="tv-again-area" class="input-modern font-bold text-sm mt-2"></select>
                                <select id="tv-again-category" class="input-modern font-bold text-sm mt-1.5"></select>
                            </div>
                            <div id="tv-again-scrabble-opts" class="hidden text-left space-y-1.5 mt-1">
                                <select id="tv-again-scrabble-wordmode" class="input-modern font-bold text-sm">
                                    <option value="kids" selected>👶 Kinder</option>
                                    <option value="adult">🎓 Erwachsene</option>
                                </select>
                                <select id="tv-again-scrabble-diff" class="input-modern font-bold text-sm">
                                    <option value="leicht">🟢 Leicht</option>
                                    <option value="mittel" selected>🟡 Mittel</option>
                                    <option value="schwer">🔴 Schwer</option>
                                    <option value="experte">🟣 Experte</option>
                                </select>
                                <select id="tv-again-scrabble-rounds" class="input-modern font-bold text-sm">
                                    <option value="3">3 Runden</option>
                                    <option value="5" selected>5 Runden</option>
                                    <option value="8">8 Runden</option>
                                </select>
                            </div>
                            <div id="tv-again-wr-opts" class="hidden text-left space-y-1.5 mt-1">
                                <select id="tv-again-wr-wordmode" class="input-modern font-bold text-sm">
                                    <option value="kids" selected>👶 Kinder</option>
                                    <option value="adult">🎓 Erwachsene</option>
                                </select>
                                <select id="tv-again-wr-diff" class="input-modern font-bold text-sm">
                                    <option value="leicht">🟢 Leicht</option>
                                    <option value="mittel" selected>🟡 Mittel</option>
                                    <option value="schwer">🔴 Schwer</option>
                                    <option value="experte">🟣 Experte</option>
                                </select>
                                <select id="tv-again-wr-rounds" class="input-modern font-bold text-sm">
                                    <option value="3" selected>3 Runden</option>
                                    <option value="5">5 Runden</option>
                                    <option value="8">8 Runden</option>
                                </select>
                            </div>
                            <button onclick="restartTVGame()" class="tv-podium-start">Neue Runde 🚀</button>
                            <button onclick="leaveTVGame()" class="tv-podium-leave">⬅ Menü</button>
                        </div>
                    </div>
                </div>`;

            setTVHostPlayHTML(html);
            setTVAgainMode("quiz");
            try {
                if (typeof confetti === "function") {
                    confetti();
                    confetti();
                }
            } catch (e) { /* */ }
            SFX.win();
        }

        function setTVAgainMode(mode) {
            tvAgainMode = (mode === "scrabble" || mode === "wortraten") ? mode : "quiz";
            ["quiz", "scrabble", "wortraten"].forEach(function (m) {
                const btn = document.getElementById("againmode-" + m);
                if (btn) btn.classList.toggle("active", tvAgainMode === m);
            });
            const qOpts = document.getElementById("tv-again-quiz-opts");
            const sOpts = document.getElementById("tv-again-scrabble-opts");
            const wOpts = document.getElementById("tv-again-wr-opts");
            if (qOpts) qOpts.classList.toggle("hidden", tvAgainMode !== "quiz");
            if (sOpts) sOpts.classList.toggle("hidden", tvAgainMode !== "scrabble");
            if (wOpts) wOpts.classList.toggle("hidden", tvAgainMode !== "wortraten");
            if (tvAgainMode === "quiz") setTVAgainTopic(tvTopicMode || "spass");
        }

        function setTVAgainTopic(mode) {
            const s = document.getElementById("againtopic-spass");
            const l = document.getElementById("againtopic-lernen");
            if (!s || !l) return;
            tvTopicMode = mode;
            s.classList.toggle("active", mode === 'spass');
            l.classList.toggle("active", mode === 'lernen');
            setupCategorySelectors("tv-again-area", "tv-again-category", mode);
        }

        async function restartTVGame() {
            if (!tvGameRef) return;
            try {
                const snap = await tvGameRef.get();
                if (!snap.exists) {
                    // Lobby-Dokument ist weg (z.B. Verbindungsaussetzer). Statt in einer
                    // toten Siegerehrung hängen zu bleiben: sauber zurück zum
                    // Einrichten-Bildschirm, von dort sofort neu erstellbar.
                    showToast("Lobby ist weg – bitte neu erstellen.", "error", "round");
                    if (tvUnsubscribe) { try { tvUnsubscribe(); } catch (e) { } tvUnsubscribe = null; }
                    if (typeof clearTVWrTimers === "function") clearTVWrTimers();
                    stopTVAutoAdvance();
                    tvGameRef = null;
                    isTVHost = false;
                    merkeTVHost(false);
                    showTVHostSetup();
                    return;
                }
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
                    const wordMode = (document.getElementById("tv-again-scrabble-wordmode") || {}).value || "kids";
                    tvUsedWords = new Set();
                    await tvGameRef.update({
                        status: "waiting",
                        mode: "scrabble",
                        difficulty,
                        wordMode,
                        totalRounds,
                        currentRound: 0,
                        showAnswer: false,
                        answerDeadline: null,
                        players: playersData
                    });
                    // Sofort starten
                    const data = (await tvGameRef.get()).data();
                    startTVScrabbleRound(data);
                    showToast("Wort-Duell gestartet! 🔤");
                    return;
                }

                if (tvAgainMode === "wortraten") {
                    await tvGameRef.update({
                        status: "waiting",
                        mode: "wortraten",
                        wordMode: (document.getElementById("tv-again-wr-wordmode") || {}).value || "kids",
                        difficulty: (document.getElementById("tv-again-wr-diff") || {}).value || "mittel",
                        theme: "schneemann",
                        totalRounds: parseInt((document.getElementById("tv-again-wr-rounds") || {}).value || "3", 10),
                        currentRound: 0,
                        usedWords: [],
                        players: playersData
                    });
                    const data = (await tvGameRef.get()).data();
                    startTVWortratenRound(data);
                    showToast("Wort-Rätsel gestartet! 🧩");
                    return;
                }

                const catSel = document.getElementById("tv-again-category");
                const category = catSel ? catSel.value : null;
                if (!category) return showToast("Bitte ein Thema wählen!", "error");
                tvQuestions = tvBuildQuestionPool([category], 10);
                if (tvQuestions.length < 3) return showToast("Zu wenige Fragen – anderes Thema wählen oder Fragen laden.", "error");
                await tvGameRef.update({
                    status: "playing",
                    mode: "quiz",
                    category,
                    currentQuestionIndex: 0,
                    showAnswer: false,
                    answerDeadline: null,
                    players: playersData,
                    questions: tvSlimQuestions(tvQuestions),
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



        // TV Action-Mode analog Live-Duell (Gegeneinander)
        let tvActionChangeCount = 0;
        let tvActionMaxChanges = 0;
        let tvActionTimings = null;

        function startTVActionMode(data) {
            if (!data || !data.actionMode || !tvGameRef) {
                console.log("TV: Action Mode nicht aktiv");
                return;
            }
            stopTVActionMode();
            const timings = (typeof getActionTiming === "function")
                ? getActionTiming(data.difficulty || "mittel")
                : { firstChange: 12, maxChanges: 3, minGap: 8, maxGap: 14 };
            tvActionTimings = timings;
            tvActionChangeCount = 0;
            tvActionMaxChanges = timings.maxChanges || 3;
            console.log("📺 TV Action Mode wie Live-Duell", timings);

            async function doChange() {
                if (!tvGameRef || !isTVHost) { stopTVActionMode(); return; }
                if (tvActionChangeCount >= tvActionMaxChanges) {
                    stopTVActionMode();
                    return;
                }
                try {
                    // Genau wie im normalen Gegeneinander-Duell: wenn schon jemand
                    // sein Wort abgeschickt hat, keine neuen Buchstaben mehr nachschieben.
                    const snap = await tvGameRef.get();
                    const frisch = snap.exists ? snap.data() : null;
                    const hatSchonGeantwortet = frisch && Object.values(frisch.players || {}).some(p => p && p.hasAnswered === true);
                    if (!frisch || frisch.status !== "playing" || hatSchonGeantwortet) {
                        stopTVActionMode();
                        if (typeof showToast === "function") showToast("⏹ Action-Modus beendet - es wurde schon geantwortet", "info", "cast");
                        return;
                    }
                    const rack = generateScrabbleRack(data.difficulty, !!data.requireLetter, data.wordMode || "kids");
                    await tvGameRef.update({
                        currentLetters: rack.letters,
                        currentSolution: rack.solution,
                        currentRequired: rack.required || "",
                        actionTick: Date.now()
                    });
                    if (typeof SFX !== "undefined" && SFX.tick) SFX.tick();
                    if (typeof showToast === "function") showToast("⚡ Die Buchstaben haben sich geändert!", "info", "cast");
                    tvActionChangeCount++;
                } catch (e) {
                    console.warn("TV action change", e);
                }
                if (tvActionChangeCount < tvActionMaxChanges) {
                    const gap = (typeof actionRandomGap === "function")
                        ? actionRandomGap(timings) : (timings.minGap || 8);
                    tvActionModeInterval = setTimeout(doChange, gap * 1000);
                } else {
                    tvActionModeInterval = setTimeout(function () {
                        stopTVActionMode();
                        if (typeof showToast === "function") showToast("⏰ Action-Modus beendet!", "info", "cast");
                    }, ((timings.maxGap || 12) * 1000) + 2000);
                }
            }

            tvActionModeInterval = setTimeout(doChange, (timings.firstChange || 12) * 1000);
        }

        // Verbesserte stopTVActionMode
        function stopTVActionMode() {
            if (tvActionModeInterval) {
                clearTimeout(tvActionModeInterval);
                tvActionModeInterval = null;
                console.log("⏹ Action Mode gestoppt");
            }
        }

        // --- TV WORT-RÄTSEL ---
        function tvWrActiveOrder(data) {
            const players = (data && data.players) || {};
            let order = Array.isArray(data.order) ? data.order.slice() : Object.keys(players);
            order = order.filter(function (k) { return players[k] && !players[k].left; });
            // fehlende Keys nachziehen (Beitritt mitten im Spiel)
            Object.keys(players).forEach(function (k) {
                if (!players[k].left && order.indexOf(k) < 0) order.push(k);
            });
            return order;
        }

        function startTVWortratenRound(data) {
            const players = bereinigeTVPlayers(data.players || {});
            const order = Object.keys(players).sort();
            if (order.length === 0) return showToast("Noch keine Spieler in der Lobby.", "error");
            const usedWords = Array.isArray(data.usedWords) ? data.usedWords.slice() : [];
            const pool = typeof wrWordPool === "function"
                ? wrWordPool(data.wordMode || "kids", data.difficulty || "mittel", data.wordTheme || "gemischt")
                : [];
            const cfg = (typeof WORTRAETSEL_DIFFICULTIES !== "undefined" && WORTRAETSEL_DIFFICULTIES[data.difficulty])
                ? WORTRAETSEL_DIFFICULTIES[data.difficulty]
                : { minLen: 5, maxLen: 7 };
            const word = typeof wrPickWord === "function"
                ? wrPickWord(pool, cfg.minLen, cfg.maxLen, new Set(usedWords))
                : "";
            if (!word) return showToast("Keine passenden Wörter gefunden.", "error");
            usedWords.push(word);
            Object.keys(players).forEach(k => {
                players[k].score = players[k].score || 0;
                players[k].lastRoundPoints = 0;
            });
            tvGameRef.update({
                status: "playing",
                mode: "wortraten",
                currentRound: 1,
                totalRounds: data.totalRounds || 3,
                order,
                turnIndex: 0,
                word,
                guessed: [],
                wrongCount: 0,
                roundOver: false,
                roundSolved: false,
                roundSolvedBy: null,
                roundSolvedByName: "",
                lastSolveAttempt: null,
                wrTurnDeadline: Date.now() + 25000,
                usedWords,
                players,
                theme: data.theme || "schneemann",
                wordMode: data.wordMode || "kids",
                wordTheme: data.wordTheme || "gemischt",
                difficulty: data.difficulty || "mittel"
            });
        }

        function showTVHostWortraten(data) {
            const word = data.word || "";
            const guessed = new Set(data.guessed || []);
            const theme = data.theme || "schneemann";
            const order = tvWrActiveOrder(data);
            const turnKey = order.length ? order[(data.turnIndex || 0) % order.length] : null;
            const turnName = (turnKey && data.players[turnKey] && data.players[turnKey].name)
                ? data.players[turnKey].name
                : (turnKey || "Spieler");
            const maxW = typeof wrMaxWrong === "function" ? wrMaxWrong(data.wordMode) : 7;
            // Am Rundenende IMMER das ganze Wort zeigen (auch bei Verloren) -
            // vorher blieben nicht erratene Buchstaben als "_" stehen.
            const revealAll = !!data.roundOver;
            const mask = word.split("").map(ch =>
                (revealAll || guessed.has(ch))
                    ? `<span class="tv-wr-letter is-open">${esc(ch)}</span>`
                    : `<span class="tv-wr-letter">_</span>`
            ).join("");
            // Kurzer, großer Buchstaben-Flash beim letzten getippten Buchstaben
            const guessedArr = data.guessed || [];
            const flashKey = (data.currentRound || 0) + ":" + guessedArr.length;
            const shouldFlash = guessedArr.length > 0 && tvWrLastFlashKey !== flashKey;
            if (shouldFlash) tvWrLastFlashKey = flashKey;
            const flashLetter = shouldFlash ? guessedArr[guessedArr.length - 1] : "";
            const flashHit = flashLetter && word.includes(flashLetter);
            const scores = Object.values(data.players || {}).map(p =>
                `<div class="tv-wr-score-chip"><span class="tv-wr-score-name">${esc(p.name)}</span><span class="tv-wr-score-pts">${p.score || 0}</span></div>`
            ).join("");
            let footer = "";
            if (data.roundOver) {
                const who = data.roundSolvedByName || "";
                const lastRound = (data.currentRound || 1) >= (data.totalRounds || 3);
                const nextLabel = lastRound ? "🏆 Siegerehrung" : "Weiter ➔";
                footer = data.roundSolved
                    ? `<span class="tv-show-counter">🎉 ${who ? esc(who) + " hat gelöst!" : "Gelöst!"} · ${esc(word)}</span>
                       <button onclick="advanceTVWortraten()" class="tv-show-next">${nextLabel}</button>`
                    : `<span class="tv-show-counter">${typeof wrFigureEmoji === "function" ? wrFigureEmoji(theme) : "⛄"} Wort: ${esc(word)}</span>
                       <button onclick="advanceTVWortraten()" class="tv-show-next">${nextLabel}</button>`;
            } else {
                footer = `<span class="tv-show-counter">Dran: ${esc(turnName)} · Fehler ${data.wrongCount || 0}/${maxW}</span>
                          <button onclick="skipTVWortratenTurn()" class="tv-show-force" style="opacity:0.9">⏭️ Überspringen</button>
                          <button onclick="forceTVWortratenReveal()" class="tv-show-force">⏱️ Auswerten</button>`;
            }
            setTVHostPlayHTML(`
                <div class="tv-show-stage tv-wr-stage">
                    ${shouldFlash ? `<div class="tv-wr-flash ${flashHit ? 'tv-wr-flash-hit' : 'tv-wr-flash-miss'}">${esc(flashLetter)}</div>` : ""}
                    <div class="tv-rotate-hint">📱 Für die beste TV-Ansicht: Handy <strong>quer</strong> drehen</div>
                    <div class="tv-show-top">
                        <div class="tv-show-meta">
                            <span class="tv-show-qnum">Wort-Rätsel · ${data.currentRound || 1}/${data.totalRounds || 3} · ${data.wordMode === "adult" ? "🎓" : "👶"}</span>
                            <button onclick="appConfirmSwitch('TV-Spiel endet für alle.','Spiel verlassen?',null,function(){leaveTVGame(true);})" class="tv-show-exit">✕</button>
                        </div>
                        <div class="tv-wr-scores">${scores}</div>
                    </div>
                    <div class="tv-wr-body">
                        <div class="tv-wr-figure-wrap">
                            <div id="tv-wr-figure" class="tv-wr-figure"></div>
                        </div>
                        <div class="tv-wr-side">
                            <div class="tv-wr-mask">${mask || '<span class="tv-show-counter">Wort wird vorbereitet…</span>'}</div>
                            ${data.lastSolveAttempt && data.lastSolveAttempt.text
                                ? `<div class="tv-show-explain">💡 ${esc(data.lastSolveAttempt.name || "Jemand")}: „${esc(String(data.lastSolveAttempt.text).slice(0, 24))}“</div>`
                                : ""}
                            <div id="tv-wr-turn-timer" class="tv-show-counter"></div>
                        </div>
                    </div>
                    <div class="tv-show-footer">${footer}</div>
                </div>`);
            if (typeof wrRenderFigureBase === "function") {
                wrRenderFigureBase(theme, "tv-wr-figure");
                for (let i = 1; i <= Math.min(data.wrongCount || 0, maxW); i++) {
                    if (typeof wrRevealFigureStage === "function") wrRevealFigureStage(i, "tv-wr-figure");
                }
            }
            // Zug-Timer: Deadline in Firestore (überlebt Snapshots)
            if (isTVHost && !data.roundOver && !data.wrTurnDeadline) {
                tvGameRef.update({ wrTurnDeadline: Date.now() + 25000 }).catch(function () {});
            }
            if (data.roundOver) {
                scheduleTVWrAutoAdvance(data);
            } else {
                startTVWrTurnTimer(data);
            }
        }

        let tvWrTurnTimerId = null;
        let tvWrAutoAdvanceId = null;
        let tvWrTimerKey = "";
        let tvWrLastFlashKey = "";

        function clearTVWrTimers() {
            if (tvWrTurnTimerId) { clearInterval(tvWrTurnTimerId); tvWrTurnTimerId = null; }
            if (tvWrAutoAdvanceId) { clearInterval(tvWrAutoAdvanceId); tvWrAutoAdvanceId = null; }
        }

        function startTVWrTurnTimer(data) {
            const deadline = data.wrTurnDeadline || (Date.now() + 25000);
            const key = "t:" + (data.turnIndex || 0) + ":" + deadline + ":" + (data.currentRound || 0);
            // Gleicher Zug → Timer nicht neu starten (sonst nie Ablauf)
            if (tvWrTimerKey === key && tvWrTurnTimerId) {
                return;
            }
            clearTVWrTimers();
            tvWrTimerKey = key;
            function paint() {
                // Das Element bei JEDEM Tick neu holen. Der Fernseher zeichnet die
                // Buehne bei jedem Snapshot neu (und Snapshots kommen dauernd, weil
                // jedes Handy alle 12 Sekunden ein Lebenszeichen schickt). Eine
                // einmal gemerkte Referenz zeigt danach auf ein Element, das gar
                // nicht mehr im Dokument steht - die Sekunden blieben stehen,
                // waehrend der Zug im Hintergrund trotzdem ablief.
                const el = document.getElementById("tv-wr-turn-timer");
                const left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
                if (el) el.textContent = left > 0 ? ("⏱ Zug: " + left + "s") : "⏱ Zeit um…";
                return left;
            }
            paint();
            tvWrTurnTimerId = setInterval(function () {
                const left = paint();
                if (left <= 0) {
                    clearInterval(tvWrTurnTimerId);
                    tvWrTurnTimerId = null;
                    tvWrTimerKey = "";
                    if (isTVHost && typeof skipTVWortratenTurn === "function") {
                        skipTVWortratenTurn();
                    }
                }
            }, 250);
        }

        function scheduleTVWrAutoAdvance(data) {
            const key = "a:" + (data && data.currentRound) + ":" + (data && data.roundSolved);
            if (tvWrTimerKey === key && tvWrAutoAdvanceId) return;
            clearTVWrTimers();
            tvWrTimerKey = key;
            let left = 5;
            const malen = function (txt) {
                const el = document.getElementById("tv-wr-turn-timer");
                if (el) el.textContent = txt;
            };
            malen("Nächste Runde in " + left + "s…");
            tvWrAutoAdvanceId = setInterval(function () {
                left--;
                malen(left > 0 ? ("Nächste Runde in " + left + "s…") : "Weiter…");
                if (left <= 0) {
                    clearInterval(tvWrAutoAdvanceId);
                    tvWrAutoAdvanceId = null;
                    tvWrTimerKey = "";
                    if (isTVHost) advanceTVWortraten();
                }
            }, 1000);
        }

        async function advanceTVWortraten() {
            if (!tvGameRef || !isTVHost) return;
            const snap = await tvGameRef.get();
            if (!snap.exists) return;
            const data = snap.data();
            if (data.mode !== "wortraten" || !data.roundOver) return;
            if ((data.currentRound || 0) >= (data.totalRounds || 3)) {
                await tvGameRef.update({ status: "finished" });
                return;
            }
            const usedWords = Array.isArray(data.usedWords) ? data.usedWords.slice() : [];
            const pool = typeof wrWordPool === "function"
                ? wrWordPool(data.wordMode || "kids", data.difficulty || "mittel", data.wordTheme || "gemischt") : [];
            const cfg = (typeof WORTRAETSEL_DIFFICULTIES !== "undefined" && WORTRAETSEL_DIFFICULTIES[data.difficulty])
                ? WORTRAETSEL_DIFFICULTIES[data.difficulty] : { minLen: 5, maxLen: 7 };
            const word = typeof wrPickWord === "function"
                ? wrPickWord(pool, cfg.minLen, cfg.maxLen, new Set(usedWords)) : "";
            if (!word) {
                await tvGameRef.update({ status: "finished" });
                return;
            }
            usedWords.push(word);
            // Dieselbe Reihenfolge wie ueberall sonst (gefiltert, Nachzuegler
            // angehaengt). Vorher stand hier die alte, ungefilterte data.order -
            // dadurch konnte beim Rundenwechsel jemand anderes dran sein als der,
            // den der Fernseher angezeigt hat.
            const order = tvWrActiveOrder(data);
            const update = {
                currentRound: (data.currentRound || 0) + 1,
                turnIndex: order.length ? (data.currentRound || 0) % order.length : 0,
                order: order,
                word,
                guessed: [],
                wrongCount: 0,
                roundOver: false,
                roundSolved: false,
                roundSolvedBy: null,
                roundSolvedByName: "",
                // Alter Loesungsversuch muss weg, sonst steht der Tipp aus Runde 1
                // noch in Runde 3 neben einem voellig anderen Wort.
                lastSolveAttempt: null,
                wrTurnDeadline: Date.now() + 25000,
                usedWords
            };
            Object.keys(data.players || {}).forEach(function (k) {
                update["players." + k + ".lastRoundPoints"] = 0;
            });
            await tvGameRef.update(update);
        }

        // Manuelles Weiterschalten, falls der/die Spieler:in am Zug gerade nicht
        // reagiert (z.B. schaut nicht aufs Handy) - ohne diesen Knopf hängt die
        // Runde sonst fest, weil es (anders als beim normalen Online-Wort-Rätsel)
        // hier keinen automatischen Zug-Timer gibt.
        async function skipTVWortratenTurn() {
            if (!tvGameRef || !isTVHost) return;
            try {
                await db.runTransaction(async (txn) => {
                    const snap = await txn.get(tvGameRef);
                    if (!snap.exists) return;
                    const data = snap.data();
                    if (data.status !== "playing" || data.mode !== "wortraten" || data.roundOver) return;
                    const order = tvWrActiveOrder(data);
                    if (!order.length) return;
                    const cur = (data.turnIndex || 0) % order.length;
                    txn.update(tvGameRef, {
                        turnIndex: (cur + 1) % order.length,
                        order: order,
                        wrTurnDeadline: Date.now() + 25000
                    });
                });
            } catch (e) {
                handleError("skipTVWortratenTurn", e, "Zug konnte nicht übersprungen werden.");
            }
        }

        async function forceTVWortratenReveal() {
            if (!tvGameRef || !isTVHost) return;
            const ok = (typeof appConfirm === "function")
                ? await appConfirm("Wort aufdecken und Runde beenden? Keine weiteren Punkte in dieser Runde.", {
                    titel: "Runde auswerten?", icon: "⏱️", okText: "Auswerten", abbrechenText: "Weiter spielen"
                })
                : true;
            if (!ok) return;
            await revealTVWortratenWord();
        }
        window.forceTVWortratenReveal = forceTVWortratenReveal;

        async function revealTVWortratenWord() {
            if (!tvGameRef || !isTVHost) return;
            try {
                await db.runTransaction(async (txn) => {
                    const snap = await txn.get(tvGameRef);
                    if (!snap.exists) return;
                    const data = snap.data();
                    if (data.status !== "playing" || data.mode !== "wortraten" || data.roundOver) return;
                    const word = data.word || "";
                    const letters = word.split("").filter((ch, i, a) => a.indexOf(ch) === i);
                    txn.update(tvGameRef, {
                        guessed: letters,
                        roundOver: true,
                        roundSolved: false
                    });
                });
            } catch (e) {
                handleError("revealTVWortratenWord", e, "Wort konnte nicht aufgelöst werden.");
            }
        }

        async function promptTVWrSolveWord() {
            if (!tvGameRef) return;
            let tipp;
            if (typeof appPrompt === "function") {
                tipp = await appPrompt("Welches Wort ist gesucht?", {
                    titel: "💡 Ich kenne das Wort!",
                    icon: "💡",
                    platzhalter: "Lösung eingeben",
                    okText: "Prüfen"
                });
            } else {
                tipp = null;
                if (typeof showToast === "function") showToast("Eingabe nicht verfügbar.", "error");
            }
            if (tipp === null || tipp === undefined) return;
            submitTVWrSolveWord(tipp);
        }
        window.promptTVWrSolveWord = promptTVWrSolveWord;

        async function submitTVWrSolveWord(raw) {
            if (!tvGameRef) return;
            const guess = (typeof wrNormalizeWordGuess === "function")
                ? wrNormalizeWordGuess(raw)
                : String(raw || "").trim().toUpperCase().replace(/\s+/g, "");
            if (!guess) return;
            const key = activePlayerKey;
            if (!key) return;
            try {
                // Nur wer am Zug ist, darf das ganze Wort raten. Vorher durfte das
                // jeder jederzeit - jeder Fehlversuch zaehlte aber auf das
                // gemeinsame Fehlerkonto, also konnte ein Kind die Runde fuer alle
                // beenden, ohne je an der Reihe gewesen zu sein.
                const vorabSnap = await tvGameRef.get();
                const vorab = vorabSnap.exists ? vorabSnap.data() : null;
                if (vorab && !vorab.roundOver) {
                    const ordn = tvWrActiveOrder(vorab);
                    const dran = ordn.length ? ordn[(vorab.turnIndex || 0) % ordn.length] : null;
                    if (dran !== key) {
                        const wer = (dran && vorab.players && vorab.players[dran] && vorab.players[dran].name) || "jemand anderes";
                        showToast("Erst raten, wenn du dran bist - gerade ist " + wer + " an der Reihe.", "error", "wrsolve");
                        return;
                    }
                }
                // Tipp für alle sichtbar machen
                await tvGameRef.update({
                    lastSolveAttempt: {
                        by: key,
                        name: (currentPlayer && currentPlayer.name) || "Spieler",
                        text: guess,
                        ts: Date.now()
                    }
                }).catch(function () {});
                await db.runTransaction(async (txn) => {
                    const snap = await txn.get(tvGameRef);
                    if (!snap.exists) return;
                    const data = snap.data();
                    if (data.status !== "playing" || data.mode !== "wortraten" || data.roundOver) return;
                    const word = data.word || "";
                    const target = (typeof wrNormalizeWordGuess === "function")
                        ? wrNormalizeWordGuess(word)
                        : String(word).trim().toUpperCase().replace(/\s+/g, "");
                    const players = Object.assign({}, data.players || {});
                    if (!players[key]) return;
                    const guessedSet = new Set(data.guessed || []);
                    const ordnung = tvWrActiveOrder(data);
                    const amZug = ordnung.length ? ordnung[(data.turnIndex || 0) % ordnung.length] : null;
                    if (amZug !== key) return;
                    if (guess === target) {
                        const points = (typeof wrPointsForFullSolve === "function")
                            ? wrPointsForFullSolve(word, guessedSet) : 15;
                        players[key] = Object.assign({}, players[key], {
                            score: (players[key].score || 0) + points,
                            lastRoundPoints: points
                        });
                        txn.update(tvGameRef, {
                            guessed: word.split("").filter(function (ch, i, a) { return a.indexOf(ch) === i; }),
                            players,
                            roundOver: true,
                            roundSolved: true,
                            roundSolvedBy: key,
                            roundSolvedByName: (players[key] && players[key].name) || ""
                        });
                    } else {
                        let wrongCount = (data.wrongCount || 0) + 1;
                        let roundOver = false, roundSolved = false;
                        const maxW = typeof wrMaxWrong === "function" ? wrMaxWrong(data.wordMode) : 7;
                        if (wrongCount >= maxW) { roundOver = true; roundSolved = false; }
                        const update = { wrongCount, players, roundOver, roundSolved, order: ordnung };
                        if (!roundOver && ordnung.length) {
                            update.turnIndex = ((data.turnIndex || 0) + 1) % ordnung.length;
                            // Frist mitgeben: sonst erbt der Naechste die Restzeit des
                            // Vorgaengers und wird nach zwei Sekunden uebersprungen.
                            update.wrTurnDeadline = Date.now() + 25000;
                        }
                        if (roundOver) update.wrTurnDeadline = null;
                        txn.update(tvGameRef, update);
                    }
                });
            } catch (e) {
                handleError("submitTVWrSolveWord", e, "Wort konnte nicht geprüft werden.");
            }
        }

        async function submitTVWrLetter(letter) {
            if (!tvGameRef || !letter) return;
            if (typeof SFX !== "undefined" && SFX.tap) { try { SFX.tap(); } catch (e) { /* */ } }
            try {
                await db.runTransaction(async (txn) => {
                    const snap = await txn.get(tvGameRef);
                    if (!snap.exists) return;
                    const data = snap.data();
                    if (data.status !== "playing" || data.mode !== "wortraten" || data.roundOver) return;
                    const order = tvWrActiveOrder(data);
                    const key = order.length ? order[(data.turnIndex || 0) % order.length] : null;
                    if (key !== activePlayerKey) return;
                    const guessed = data.guessed || [];
                    if (guessed.includes(letter)) return;
                    const word = data.word || "";
                    const isHit = word.includes(letter);
                    const newGuessed = guessed.concat([letter]);
                    const players = Object.assign({}, data.players || {});
                    let wrongCount = data.wrongCount || 0;
                    let roundOver = false, roundSolved = false;
                    let points = 0;
                    if (isHit) {
                        const occ = typeof wrCountOccurrences === "function" ? wrCountOccurrences(word, letter) : 1;
                        points = occ * 3;
                        if (typeof wrIsComplete === "function" && wrIsComplete(word, new Set(newGuessed))) {
                            points += 15;
                            roundOver = true;
                            roundSolved = true;
                        }
                        if (players[key]) {
                            players[key] = Object.assign({}, players[key], {
                                score: (players[key].score || 0) + points,
                                lastRoundPoints: points
                            });
                        }
                    } else {
                        wrongCount++;
                        const maxW = typeof wrMaxWrong === "function" ? wrMaxWrong(data.wordMode) : 7;
                        if (wrongCount >= maxW) {
                            roundOver = true;
                            roundSolved = false;
                        }
                    }
                    const update = { guessed: newGuessed, wrongCount, players, roundOver, roundSolved, order: order };
                    if (roundSolved && key) {
                        update.roundSolvedBy = key;
                        update.roundSolvedByName = (players[key] && players[key].name) || "";
                    }
                    if (!roundOver && !isHit && order.length) {
                        const cur = order.indexOf(key);
                        update.turnIndex = cur >= 0 ? (cur + 1) % order.length : 0;
                        update.wrTurnDeadline = Date.now() + 25000;
                    } else if (!roundOver && isHit) {
                        update.wrTurnDeadline = Date.now() + 25000;
                    }
                    if (roundOver) update.wrTurnDeadline = null;
                    txn.update(tvGameRef, update);
                });
            } catch (e) {
                handleError("submitTVWrLetter", e, "Buchstabe konnte nicht gesendet werden.");
            }
        }

        // --- TV-SCRABBLE (Host) ---
        function startTVScrabbleRound(data) {
            const rack = generateScrabbleRack(data.difficulty, !!data.requireLetter, data.wordMode);
            const letters = rack.letters;
            const round = (data.currentRound || 0) + 1;
            const playersData = bereinigeTVPlayers(data.players || {});

            Object.keys(playersData).forEach(k => {
                playersData[k].hasAnswered = false;
                playersData[k].word = "";
                playersData[k].submittedLetters = [];
                playersData[k].submittedRequired = "";
                playersData[k].score = playersData[k].score || 0;
            });

            isResolving = false;

            // Nur die eigenen Felder je Spieler zuruecksetzen. Frueher wurde die
            // komplette Liste vom Rundenbeginn zurueckgeschrieben - wer waehrend
            // der Auswertung beigetreten war, verschwand damit wieder.
            tvGameRef.update(tvPunkteUpdate(
                playersData,
                ["hasAnswered", "word", "submittedLetters", "submittedRequired", "score"],
                {
                    status: "playing",
                    showAnswer: false,
                    answerDeadline: null,
                    currentLetters: letters,
                    currentSolution: rack.solution,
                    currentRequired: rack.required || "",
                    currentRound: round
                }
            ));

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
                <div class="tv-show-stage">
                    <div class="tv-show-top">
                        <div class="tv-show-meta">
                            <span class="tv-show-qnum">Wort-Duell · Runde ${round} / ${totalRounds}</span>
                            <button onclick="appConfirmSwitch('TV-Spiel endet für alle.','Spiel verlassen?',null,function(){leaveTVGame(true);})" class="tv-show-exit">✕</button>
                        </div>
                        <div class="tv-show-timer-track" aria-hidden="true">
                            <div id="tv-kahoot-timer-bar" class="tv-show-timer-bar"></div>
                        </div>
                        <h1 class="tv-show-question">🔤 Bildet das beste Wort aus diesen Buchstaben!</h1>
                    </div>
                    <div class="tv-show-scrabble-rack">${scrabbleTilesHTML(letters, true, required)}</div>
                    <div class="tv-show-footer">
                        <span id="tv-answer-counter" class="tv-show-counter">0 von 0 haben geantwortet</span>
                        <button onclick="forceTVScrabbleReveal()" class="tv-show-force">Runde auswerten ⏱️</button>
                    </div>
                </div>
            `);
            try {
                const bar = document.getElementById("tv-kahoot-timer-bar");
                if (bar) {
                    bar.style.transition = "none";
                    bar.style.width = "100%";
                }
            } catch (e) { /* */ }
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
                const _cfgMin = (typeof SCRABBLE_DIFFICULTIES !== "undefined" && SCRABBLE_DIFFICULTIES[data.difficulty])
                    ? (SCRABBLE_DIFFICULTIES[data.difficulty].minWord || 3) : 3;
                // TV: etwas großzügiger – Kinder min. 2 Buchstaben
                const _minW = (data.wordMode === "kids" || data.difficulty === "leicht")
                    ? 2 : Math.max(2, _cfgMin - (data.difficulty === "mittel" ? 1 : 0));
                // Buchstaben dieses Spielers, sonst die der Runde
                const _sl = (playersData[key].submittedLetters && playersData[key].submittedLetters.length)
                    ? playersData[key].submittedLetters : letters;
                const _sr = playersData[key].submittedRequired || currentRequired;
                const res = await evaluateScrabbleWord(playersData[key].word, _sl, {
                    minWord: _minW < 2 ? 2 : _minW,
                    required: _sr,
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
            tvGameRef.update(tvPunkteUpdate(
                playersData,
                ["score", "answerStreak", "lastRoundPoints", "lastRoundDetail", "wordStatus"],
                { showAnswer: true }
            ));

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
                <div class="tv-show-stage">
                    <div class="tv-show-top">
                        <div class="tv-show-meta">
                            <span class="tv-show-qnum">Runde ${data.currentRound} / ${data.totalRounds} – Ergebnisse</span>
                            <button onclick="appConfirmSwitch('TV-Spiel endet für alle.','Spiel verlassen?',null,function(){leaveTVGame(true);})" class="tv-show-exit">✕</button>
                        </div>
                        ${data.currentSolution ? `<p class="tv-show-explain">💡 z.B. möglich: ${esc(data.currentSolution)}</p>` : ""}
                    </div>
                    <div class="tv-scrabble-results">${rowsHtml}</div>
                    <div class="tv-show-footer">
                        ${isLastRound
                            ? `<button onclick="tvGameRef.update({status:'finished'})" class="tv-show-next" style="background:linear-gradient(135deg,#f59e0b,#fbbf24);color:#1f2937;">Endergebnis 🏆</button>`
                            : `<button onclick="nextTVScrabbleRound()" class="tv-show-next">Nächste Runde ➔</button>`}
                    </div>
                </div>
            `);
        }

        function nextTVScrabbleRound() {
            tvGameRef.get().then(doc => startTVScrabbleRound(doc.data()));
        }

        // QR-/Link-Beitritt (?tv=CODE): Der Code wird beim Laden in
        // window._pendingTVCode zwischengespeichert (siehe DOMContentLoaded in
        // lobby-avatar.js), wurde bisher aber nirgends automatisch abgeholt -
        // man landete also nie direkt im Spiel. Sobald ein Spielerprofil aktiv
        // ist (selectProfile in family-dashboard.js ruft das auf), automatisch
        // der TV-Lobby beitreten.
        async function versucheTVDeepLinkJoin() {
            const code = window._pendingTVCode;
            if (!code || !currentPlayer || isTVHost) return;
            switchView('tv-quiz-player');
            await joinTVGame(code);
            // Erst jetzt vergessen: klappt der Beitritt nicht (Lobby noch nicht
            // offen, Profilwechsel), steht der Code beim naechsten Versuch noch da.
            if (tvGameRef) window._pendingTVCode = null;
        }

        // --- TV-QUIZ PLAYER (Handy) ---

        function joinTVGameLast() {
            let code = "";
            try { code = (localStorage.getItem("eduplay_last_tv_code") || "").trim().toUpperCase(); } catch (_) {}
            const inp = document.getElementById("tv-join-code");
            if (code && code.length === 4) {
                if (inp) inp.value = code;
                return joinTVGame(code);
            }
            // Fallback: eigene Familien-Lobby (Host-Account)
            if (inp) inp.value = "";
            return joinTVGame("");
        }
        window.joinTVGameLast = joinTVGameLast;

        async function joinTVGame(codeOverride) {
            if (!currentParentUser || !currentPlayer) return showToast(
                "Bitte wähle zuerst oben deinen Spieler aus.", "error", "noprofile");
            if (typeof ensureProfileSessionLock === "function") {
                if (!(await ensureProfileSessionLock(true))) return;
            }
            // Der Fernseher (Host-Gerät) zeigt nur an - er kann nicht gleichzeitig
            // selbst mitspielen, sonst landet er als "Geister-Spieler" in der
            // Punkteliste, ohne je an der Reihe sein zu können (sein eigenes
            // onSnapshot überspringt die Spieler-Ansicht komplett, siehe isTVHost
            // weiter unten).
            if (isTVHost) return showToast(
                "Der Fernseher kann nicht gleichzeitig mitspielen - bitte mit einem anderen Handy beitreten.", "error", "hostplay");

            let lobbyRef = db.collection("parents").doc(currentParentUser.uid).collection("tv_game").doc("lobby");
            // Optional: Code von anderem Account / QR (?tv=CODE)
            let code = (codeOverride || (document.getElementById("tv-join-code") || {}).value || window._pendingTVCode || "")
                .toString().trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
            if (code.length === 4) {
                try {
                    const mapSnap = await db.collection("tv_codes").doc(code).get();
                    if (!mapSnap.exists) return showToast("Dieser TV-Code ist ungültig.", "error");
                    const parentId = mapSnap.data().parentId;
                    if (!parentId) return showToast("TV-Code kaputt.", "error");
                    lobbyRef = db.collection("parents").doc(parentId).collection("tv_game").doc("lobby");
                    window._pendingTVCode = null;
                } catch (e) {
                    return showToast("TV-Code konnte nicht geprüft werden.", "error");
                }
            }

            try {
                const docSnap = await lobbyRef.get();
                if (!docSnap.exists) return showToast("Aktuell ist keine Lobby offen!", "error");
                const lobbyData = docSnap.data() || {};
                const st = lobbyData.status;
                if (st === "finished") return showToast("Dieses TV-Spiel ist schon beendet.", "error");
                if (st !== "waiting" && st !== "playing") {
                    return showToast("Aktuell ist keine Lobby offen!", "error");
                }

                const already = lobbyData.players && lobbyData.players[activePlayerKey];
                if (st === "waiting" || !already) {
                    // Neu beitreten oder in laufende Runde (Punkte behalten falls schon da)
                    await lobbyRef.update({
                        [`players.${activePlayerKey}`]: {
                            name: currentPlayer.name,
                            score: (already && already.score) || 0,
                            hasAnswered: !!(already && already.hasAnswered),
                            lastAnswer: already ? already.lastAnswer : null,
                            coinsClaimed: !!(already && already.coinsClaimed),
                            lastSeen: Date.now(),
                            sessionId: window.DEVICE_SESSION_ID || null
                        }
                    });
                } else {
                    // Nur Lebenszeichen / Name aktualisieren
                    await lobbyRef.update({
                        [`players.${activePlayerKey}.name`]: currentPlayer.name,
                        [`players.${activePlayerKey}.lastSeen`]: Date.now(),
                        [`players.${activePlayerKey}.sessionId`]: window.DEVICE_SESSION_ID || null
                    }).catch(function () {});
                }

                // Code merken für „Letzte Lobby erneut“
                try {
                    if (code && code.length === 4) {
                        localStorage.setItem("eduplay_last_tv_code", code);
                    } else if (window._activeTVCode) {
                        localStorage.setItem("eduplay_last_tv_code", window._activeTVCode);
                    } else if (currentParentUser) {
                        // Familien-Lobby ohne Code: parent-eigene Lobby
                        localStorage.setItem("eduplay_last_tv_parent", currentParentUser.uid);
                    }
                } catch (_) {}

                tvGameRef = lobbyRef;
                isTVHost = false;
                tvPlayerRenderReset();
                starteTVLebenszeichen();

                setTVPlayerPlayHTML(`<div class="glass-card-glow p-12 text-center mt-12" style="border-color:rgba(16,185,129,0.15);"><div class="text-8xl mb-6 animate-bounce">🙌</div><h2 class="text-3xl font-black text-emerald-400 mb-4">Du bist drin!</h2><p class="text-lg text-white font-bold">Gleich geht's los. Schau auf den Fernseher!</p></div>`);

                if (tvUnsubscribe) { try { tvUnsubscribe(); } catch (e) { } tvUnsubscribe = null; }
                tvUnsubscribe = tvGameRef.onSnapshot((doc) => {
                    if (isTVHost) return;
                    if (!doc.exists) {
                        // Gastgeber hat beendet und die TV-Runde gelöscht. Vorher
                        // lief das hier für die Mitspieler lautlos ins Leere -
                        // keine Meldung, kein Rücksprung ins Menü.
                        if (tvUnsubscribe) { try { tvUnsubscribe(); } catch (e) { } tvUnsubscribe = null; }
                        if (tvCountdownInterval) { clearInterval(tvCountdownInterval); tvCountdownInterval = null; }
                        stopTVAutoAdvance();
                        stopTVRoundTimer();
                        stoppeTVLebenszeichen();
                        stoppeTVRundenTimer();
                        stopTVActionMode();
                        tvGameRef = null;
                        isResolving = false;
                        showTVHostSetup();
                        showTVPlayerSetup();
                        if (typeof showToast === "function") showToast("🚪 Der Gastgeber hat das Spiel beendet");
                        switchView(currentPlayer ? 'menu' : 'family-hub');
                        return;
                    }
                    const data = doc.data();
                    const myData = (data.players || {})[activePlayerKey];
                    if (!myData) {
                        // Kann passieren, wenn die Auswertung eine aeltere Spielerliste
                        // zurueckschreibt. Frueher stand das Handy hier einfach stumm.
                        if (tvPlayerBrauchtNeu("weg")) {
                            stoppeTVWrHandyTimer();
                            setTVPlayerPlayHTML('<div class="glass-card p-8 text-center mt-12 space-y-4">'
                                + '<div class="text-6xl">🔌</div>'
                                + '<h2 class="text-xl font-black text-amber-300">Du bist gerade nicht in der Runde</h2>'
                                + '<p class="text-sm text-gray-400">Das kann beim Rundenwechsel passieren. Tipp auf „Wieder mitspielen“, dann bist du sofort zurück.</p>'
                                + '<button onclick="joinTVGameLast()" class="btn-primary w-full text-center">Wieder mitspielen</button>'
                                + '<button onclick="leaveTVGame(true)" class="btn-secondary w-full text-center text-sm">Zurück ins Menü</button>'
                                + '</div>');
                        }
                        return;
                    }
                    // Profil auf anderem Gerät übernommen
                    if (myData.sessionId && window.DEVICE_SESSION_ID
                        && myData.sessionId !== window.DEVICE_SESSION_ID
                        && data.status !== "finished") {
                        if (tvUnsubscribe) { try { tvUnsubscribe(); } catch (e) { } tvUnsubscribe = null; }
                        stoppeTVLebenszeichen();
                        stopTVActionMode();
                        tvGameRef = null;
                        showToast("Dieses Profil spielt auf einem anderen Gerät – hier beendet.", "error");
                        switchView(currentPlayer ? "menu" : "family-hub");
                        return;
                    }
                    if (data.lastEvent && data.lastEvent.type === "host_ended") {
                        if (tvUnsubscribe) { try { tvUnsubscribe(); } catch (e) { } tvUnsubscribe = null; }
                        stoppeTVLebenszeichen();
                        stopTVActionMode();
                        tvGameRef = null;
                        showToast("🚪 " + esc(data.lastEvent.name || "Der Gastgeber") + " hat das Spiel beendet");
                        switchView(currentPlayer ? "menu" : "family-hub");
                        return;
                    }

                    if (data.mode === "wortraten") {
                        if (data.status === "playing") {
                            // Dieselbe Reihenfolge wie am Fernseher (gefiltert) - vorher
                            // stand hier die rohe data.order, die davon abweichen kann.
                            const order = tvWrActiveOrder(data);
                            const turnKey = order.length ? order[(data.turnIndex || 0) % order.length] : null;
                            const isMyTurn = turnKey === activePlayerKey && !data.roundOver;
                            const _wrKey = "wr:" + (data.currentRound || 0) + ":" + (data.roundOver ? 1 : 0)
                                + ":" + turnKey + ":" + (data.guessed || []).join("")
                                + ":" + (data.wrongCount || 0) + ":" + (data.wrTurnDeadline || 0)
                                + ":" + (myData.score || 0);
                            if (!tvPlayerBrauchtNeu(_wrKey)) return;
                            const word = data.word || "";
                            const guessed = new Set(data.guessed || []);
                            const mask = word.split("").map(ch =>
                                guessed.has(ch)
                                    ? `<span class="text-2xl font-black text-sky-300 mx-0.5">${esc(ch)}</span>`
                                    : `<span class="text-2xl font-black text-gray-500 mx-0.5">_</span>`
                            ).join("");
                            let body = "";
                            if (data.roundOver) {
                                body = `<p class="text-lg font-bold text-amber-300 mt-4">Runde vorbei – warte auf den Fernseher…</p>
                                    <p class="text-sm text-gray-400">Dein Stand: ${myData.score || 0} Pkt.</p>`;
                            } else {
                                // Tastatur ist immer sichtbar (wie beim normalen Online-Wort-Duell
                                // gegeneinander) - nur die Buchstaben sind deaktiviert, solange man
                                // nicht dran ist. Vorher wurde die Tastatur komplett durch einen
                                // Warte-Text ersetzt, wirkte wie "keine Tastatur vorhanden".
                                const alphabet = (typeof WORTRAETSEL_ALPHABET !== "undefined") ? WORTRAETSEL_ALPHABET : "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ".split("");
                                const kb = alphabet.map(L => {
                                    const used = guessed.has(L);
                                    const canTap = isMyTurn && !used;
                                    return `<button ${canTap ? "" : "disabled"} onclick="submitTVWrLetter('${L}')"
                                        class="h-11 rounded-lg font-black text-sm ${used ? "bg-white/5 text-gray-600" : canTap ? "bg-sky-600/80 text-white active:scale-95" : "bg-white/5 border border-white/5 text-gray-500"}">${L}</button>`;
                                }).join("");
                                const banner = isMyTurn
                                    ? `<p class="text-center text-sky-300 font-bold mb-2">🎯 Du bist dran!</p>`
                                    : (() => {
                                        const name = (turnKey && data.players[turnKey]) ? data.players[turnKey].name : "…";
                                        return `<p class="text-center text-gray-400 font-bold mb-2">⏳ ${esc(name)} ist dran…</p>`;
                                    })();
                                const _tl = data.wrTurnDeadline
                                    ? Math.max(0, Math.ceil((data.wrTurnDeadline - Date.now()) / 1000))
                                    : 0;
                                const timerLine = (!data.roundOver && data.wrTurnDeadline)
                                    ? `<p id="tv-wr-player-timer" class="text-center text-sky-300 font-black text-sm mb-1">⏱ ${_tl}s</p>`
                                    : "";
                                // Das ganze Wort darf nur raten, wer am Zug ist - ein
                                // Fehlversuch zaehlt auf das gemeinsame Fehlerkonto.
                                const solveBtn = data.roundOver
                                    ? ""
                                    : (isMyTurn
                                        ? `<button type="button" onclick="promptTVWrSolveWord()" class="btn-primary text-xs w-full py-2 mt-2" style="background:var(--gradient-cool);">💡 Ich kenne das Wort!</button>`
                                        : `<button type="button" disabled class="btn-primary text-xs w-full py-2 mt-2 opacity-40">💡 Wort raten – wenn du dran bist</button>`);
                                body = `${timerLine}${banner}<div class="grid grid-cols-7 gap-1.5">${kb}</div>${solveBtn}`;
                            }
                            setTVPlayerPlayHTML(`
                                <div class="space-y-4 p-2">
                                    <div class="text-center text-xs font-bold text-gray-400">Runde ${data.currentRound}/${data.totalRounds}</div>
                                    <div class="flex flex-wrap justify-center gap-1">${mask}</div>
                                    ${body}
                                    <p class="text-center text-sm font-bold text-sky-200">Gesamt: ${myData.score || 0} Pkt.</p>
                                </div>`);
                            if (!data.roundOver && data.wrTurnDeadline) starteTVWrHandyTimer(data.wrTurnDeadline);
                            else stoppeTVWrHandyTimer();
                        } else if (data.status === "finished") {
                            if (!tvPlayerBrauchtNeu("wrfin:" + (myData.score || 0))) return;
                            stoppeTVWrHandyTimer();
                            const _coinKey = tvGameRef.id + ":" + activePlayerKey;
                            if (!myData.coinsClaimed && !tvCoinsClaimedLocal.has(_coinKey)) {
                                tvCoinsClaimedLocal.add(_coinKey);
                                currentPlayer.coins += (myData.score || 0);
                                savePlayerProgress();
                                tvGameRef.update({ [`players.${activePlayerKey}.coinsClaimed`]: true }).catch(() => { });
                            }
                            setTVPlayerPlayHTML(`<div class="glass-card-glow p-10 text-center mt-12" style="border-color:rgba(14,165,233,0.15);"><div class="text-7xl mb-4">🧩</div><h2 class="text-3xl font-black text-sky-400 mb-3">Wort-Rätsel beendet!</h2><p class="text-xl text-white font-bold bg-white/5 p-4 rounded-xl inline-block">+ ${myData.score || 0} Coins</p><div class="mt-8 p-4 bg-white/5 border border-indigo-800/30 rounded-2xl"><p class="text-indigo-300 font-black">Du bleibst dabei!</p></div><button onclick="leaveTVGame()" class="mt-6 btn-secondary w-full text-center text-sm">Zurück ins Menü</button></div>`);
                        }
                        return;
                    }

                    if (data.mode === "scrabble") {
                        if (data.status === "playing") {
                            if (data.showAnswer) {
                                const points = myData.lastRoundPoints || 0;
                                if (!tvPlayerBrauchtNeu("sca:" + (data.currentRound || 0) + ":" + points + ":" + (myData.wordStatus || ""))) return;
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
                                const lettersKey = (data.currentLetters || []).join('');
                                if (!tvPlayerBrauchtNeu("sc:" + (data.currentRound || 0) + ":" + lettersKey + ":" + (data.currentRequired || ""))) return;
                                // Wechsel mitten in derselben Runde = Action-Modus.
                                // Am Fernseher gab es dafuer schon einen Hinweis, am
                                // Handy tauschten die Kacheln bisher wortlos.
                                const _actionWechsel = !!data.actionMode
                                    && tvScrabbleLetzteRunde === (data.currentRound || 0)
                                    && tvScrabbleCurrentLetters.length > 0
                                    && lettersKey !== tvScrabbleCurrentLetters.join('');
                                tvScrabbleLetzteRunde = (data.currentRound || 0);
                                if (lettersKey !== tvScrabbleCurrentLetters.join('')) {
                                    tvScrabbleSelected = [];
                                }
                                tvScrabbleCurrentLetters = data.currentLetters || [];
                                tvScrabbleCurrentRequired = data.currentRequired || "";
                                const minLen = ((typeof SCRABBLE_DIFFICULTIES !== "undefined" ? (SCRABBLE_DIFFICULTIES[data.difficulty] || {}).minWord : 0) || 2);
                                setTVPlayerPlayHTML(`
                                    <div class="space-y-4">
                                        <div class="flex flex-wrap justify-center gap-2" id="tv-scrabble-tiles-container">${scrabbleTilesHTML(tvScrabbleCurrentLetters, false, tvScrabbleCurrentRequired, tvScrabbleSelected, "tvScrabbleTapTile")}</div>
                                        <div class="text-center text-[11px] font-bold text-gray-500">Dein Wort braucht mindestens ${minLen} Buchstaben</div>
                                        <div class="glass-card p-5 space-y-3">
                                            <div id="tv-scrabble-word-preview" class="input-modern text-xl font-black text-center uppercase tracking-widest text-gray-500">…</div>
                                            <div id="tv-scrabble-live-feedback" class="text-center text-sm font-bold text-gray-400 h-5"></div>
                                            <div class="grid grid-cols-2 gap-2">
                                                <button id="tv-scrabble-undo-btn" onclick="tvScrabbleUndoTile()" disabled class="btn-secondary w-full text-center disabled:opacity-30">⌫ Entfernen</button>
                                                <button onclick="tvScrabbleClearTiles()" class="btn-secondary w-full text-center">🗑 Neu anfangen</button>
                                            </div>
                                            <button onclick="submitTVScrabbleWord()" class="btn-primary w-full text-center" style="background:var(--gradient-green);box-shadow:0 4px 24px rgba(16,185,129,0.3);">Wort einreichen ✅</button>
                                        </div>
                                    </div>`);
                                renderTVScrabblePreview();
                                if (_actionWechsel) {
                                    if (typeof showToast === "function") showToast("⚡ Neue Buchstaben! Dein Wort wurde zurückgesetzt.", "info", "action");
                                    try { if (typeof SFX !== "undefined" && SFX.tick) SFX.tick(); } catch (e) { }
                                }
                            }
                        } else if (data.status === "finished") {
                            if (!tvPlayerBrauchtNeu("scfin:" + (myData.score || 0))) return;
                            const _coinKey = tvGameRef.id + ":" + activePlayerKey;
                            if (!myData.coinsClaimed && !tvCoinsClaimedLocal.has(_coinKey)) {
                                tvCoinsClaimedLocal.add(_coinKey);
                                currentPlayer.coins += (myData.score || 0);
                                savePlayerProgress();
                                tvGameRef.update({ [`players.${activePlayerKey}.coinsClaimed`]: true }).catch(() => { });
                            }
                            setTVPlayerPlayHTML(`<div class="glass-card-glow p-10 text-center mt-12" style="border-color:rgba(245,158,11,0.15);"><div class="text-7xl mb-4">🏆</div><h2 class="text-3xl font-black text-yellow-400 mb-3">Spiel beendet!</h2><p class="text-xl text-white font-bold bg-white/5 p-4 rounded-xl inline-block">+ ${myData.score || 0} Coins verdient!</p><div class="mt-8 p-4 bg-white/5 border border-indigo-800/30 rounded-2xl"><div class="text-4xl mb-2 animate-pulse">⏳</div><p class="text-indigo-300 font-black">Du bleibst dabei!</p><p class="text-xs text-gray-400 mt-1">Sobald am Fernseher eine neue Runde startet, geht es hier automatisch weiter.</p></div><button onclick="leaveTVGame()" class="mt-6 btn-secondary w-full text-center text-sm">Doch beenden & zurück ins Menü</button></div>`);
                        }
                        return;
                    }

                    if (data.status === "playing") {
                        if (data.showAnswer) {
                            const isCorrect = myData.lastAnswer === data.correctAnswer;
                            const pts = myData.lastRoundPoints || (isCorrect ? 10 : 0);
                            // Ohne Bremse liefen Konfetti und Ton bei jedem Lebenszeichen erneut.
                            if (!tvPlayerBrauchtNeu("qa:" + (data.currentQuestionIndex || 0) + ":" + myData.lastAnswer + ":" + pts)) return;
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
                            if (!tvPlayerBrauchtNeu("q:" + (data.currentQuestionIndex || 0) + ":" + (data.answerCount || 0))) return;
                            if (Array.isArray(data.questions) && data.questions.length) tvQuestions = data.questions;
                            const q = tvQuestions[data.currentQuestionIndex];
                            const colors = (typeof TV_SHOW_COLORS !== "undefined")
                                ? TV_SHOW_COLORS
                                : ["#4f46e5", "#059669", "#d97706", "#c026d3"];
                            const labels = (typeof TV_SHOW_LABELS !== "undefined")
                                ? TV_SHOW_LABELS
                                : ["A", "B", "C", "D"];
                            let btnHtml = `<div class="grid grid-cols-2 gap-4 h-[75vh]">`;
                            const count = (q && q.answers) ? q.answers.length : (data.answerCount || 3);
                            for (let i = 0; i < count; i++) {
                                btnHtml +=
                                    `<button onclick="submitTVAnswer(${i})" class="rounded-3xl shadow-xl flex items-center justify-center text-6xl font-black text-white active:scale-95 transition-transform" style="background:${colors[i % 4]}">${labels[i % 4]}</button>`;
                            }
                            setTVPlayerPlayHTML(btnHtml + `</div>`);
                        }
                    } else if (data.status === "finished") {
                        if (!tvPlayerBrauchtNeu("fin:" + (myData.score || 0))) return;
                        const _coinKey = tvGameRef.id + ":" + activePlayerKey;
                        if (!myData.coinsClaimed && !tvCoinsClaimedLocal.has(_coinKey)) {
                            tvCoinsClaimedLocal.add(_coinKey);
                            currentPlayer.coins += (myData.score || 0);
                            savePlayerProgress();
                            tvGameRef.update({ [`players.${activePlayerKey}.coinsClaimed`]: true }).catch(() => { });
                        }
                        setTVPlayerPlayHTML(`<div class="glass-card-glow p-10 text-center mt-12" style="border-color:rgba(245,158,11,0.15);"><div class="text-7xl mb-4">🏆</div><h2 class="text-3xl font-black text-yellow-400 mb-3">Spiel beendet!</h2><p class="text-xl text-white font-bold bg-white/5 p-4 rounded-xl inline-block">+ ${myData.score || 0} Coins verdient!</p><div class="mt-8 p-4 bg-white/5 border border-indigo-800/30 rounded-2xl"><div class="text-4xl mb-2 animate-pulse">⏳</div><p class="text-indigo-300 font-black">Du bleibst dabei!</p><p class="text-xs text-gray-400 mt-1">Sobald am Fernseher eine neue Runde startet, geht es hier automatisch weiter.</p></div><button onclick="leaveTVGame()" class="mt-6 btn-secondary w-full text-center text-sm">Doch beenden & zurück ins Menü</button></div>`);
                    }
                });
            } catch (error) { handleError("joinTVGame", error, "Beitreten hat nicht geklappt."); }
        }

        // ============================================================
        //  RENDER-BREMSE FUERS SPIELER-HANDY
        //  Ohne sie ersetzte jeder Snapshot die komplette Oberflaeche - und
        //  Snapshots kommen dauernd: jedes Handy sendet alle 12 Sekunden ein
        //  Lebenszeichen, bei vier Mitspielern also im Schnitt alle 3 Sekunden.
        //  Wer genau dann tippte, dessen Knopf verschwand unter dem Finger.
        // ============================================================
        let _tvPlayerRenderKey = "";
        function tvPlayerBrauchtNeu(key) {
            if (_tvPlayerRenderKey === key) return false;
            _tvPlayerRenderKey = key;
            return true;
        }
        function tvPlayerRenderReset() {
            _tvPlayerRenderKey = "";
            stoppeTVWrHandyTimer();
        }

        // Sekundenanzeige am Handy laeuft jetzt lokal weiter, statt bei jedem
        // Snapshot neu gezeichnet zu werden.
        let _tvWrHandyTimerId = null;
        function stoppeTVWrHandyTimer() {
            if (_tvWrHandyTimerId) { clearInterval(_tvWrHandyTimerId); _tvWrHandyTimerId = null; }
        }
        function starteTVWrHandyTimer(deadline) {
            stoppeTVWrHandyTimer();
            if (!deadline) return;
            const malen = function () {
                const el = document.getElementById("tv-wr-player-timer");
                if (!el) return;
                const left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
                el.textContent = left > 0 ? ("⏱ " + left + "s") : "⏱ Zeit um…";
            };
            malen();
            _tvWrHandyTimerId = setInterval(malen, 500);
        }

        function tvScrabbleCurrentWord() {
            return tvScrabbleSelected.map(i => tvScrabbleCurrentLetters[i]).join("");
        }

        function renderTVScrabblePreview() {
            const word = tvScrabbleCurrentWord();
            const preview = document.getElementById("tv-scrabble-word-preview");
            if (preview) {
                preview.innerText = word || "…";
                preview.classList.toggle("text-gray-500", !word);
                preview.classList.toggle("text-white", !!word);
            }
            const undoBtn = document.getElementById("tv-scrabble-undo-btn");
            if (undoBtn) undoBtn.disabled = tvScrabbleSelected.length === 0;
            const tilesContainer = document.getElementById("tv-scrabble-tiles-container");
            if (tilesContainer) {
                tilesContainer.innerHTML = scrabbleTilesHTML(tvScrabbleCurrentLetters, false, tvScrabbleCurrentRequired, tvScrabbleSelected, "tvScrabbleTapTile");
            }
            const fb = document.getElementById("tv-scrabble-live-feedback");
            if (fb) {
                if (!word) { fb.innerText = ""; }
                else {
                    const result = computeScrabbleWordScore(word, tvScrabbleCurrentLetters);
                    fb.innerText = result.valid ?
                        `${result.score} Punkte möglich${result.bonus ? " (inkl. +50 Bonus!)" : ""} – wird beim Einreichen geprüft` :
                        "❌ Diese Buchstaben hast du nicht (oder zu oft benutzt)";
                    fb.className = "text-center text-sm font-bold h-5 " + (result.valid ? "text-emerald-400" : "text-rose-400");
                }
            }
        }

        function tvScrabbleTapTile(idx) {
            if (tvScrabbleSelected.includes(idx)) return;
            if (tvScrabbleSelected.length >= tvScrabbleCurrentLetters.length) return;
            tvScrabbleSelected.push(idx);
            if (typeof SFX !== "undefined") SFX.tap();
            renderTVScrabblePreview();
        }

        function tvScrabbleUndoTile() {
            if (tvScrabbleSelected.length === 0) return;
            tvScrabbleSelected.pop();
            if (typeof SFX !== "undefined") SFX.tap();
            renderTVScrabblePreview();
        }

        function tvScrabbleClearTiles() {
            if (tvScrabbleSelected.length === 0) return;
            tvScrabbleSelected = [];
            if (typeof SFX !== "undefined") SFX.tap();
            renderTVScrabblePreview();
        }

        async function submitTVScrabbleWord() {
            const word = tvScrabbleCurrentWord();
            if (!word) {
                SFX.wrong();
                showToast("Bitte zuerst Buchstaben antippen.", "error", "word");
                return;
            }
            tvScrabbleSelected = [];
            tvPlayerRenderReset();
            setTVPlayerPlayHTML(`<div class="bg-gray-800 h-[80vh] rounded-3xl flex flex-col items-center justify-center p-8 text-center text-white shadow-inner"><div class="text-8xl mb-8 animate-spin">⏳</div><h2 class="text-3xl font-black text-amber-400 mb-4">Eingereicht!</h2><p class="text-lg font-bold text-gray-400">Warte auf die anderen...</p></div>`);
            await tvGameRef.update({
                [`players.${activePlayerKey}.hasAnswered`]: true,
                [`players.${activePlayerKey}.word`]: word,
                [`players.${activePlayerKey}.answeredAt`]: Date.now(),
                // Die Buchstaben mitschicken, die beim Einreichen auf dem Handy
                // lagen. Im Action-Modus koennen sie sich im selben Moment
                // aendern - gewertet wird dann trotzdem das, was der Spieler
                // wirklich vor sich hatte. (Kniff aus dem Online-Duell.)
                [`players.${activePlayerKey}.submittedLetters`]: tvScrabbleCurrentLetters.slice(),
                [`players.${activePlayerKey}.submittedRequired`]: tvScrabbleCurrentRequired || ""
            });
        }

        async function submitTVAnswer(ansIndex) {
            tvPlayerRenderReset();
            setTVPlayerPlayHTML(`<div class="bg-gray-800 h-[80vh] rounded-3xl flex flex-col items-center justify-center p-8 text-center text-white shadow-inner"><div class="text-8xl mb-8 animate-spin">⏳</div><h2 class="text-3xl font-black text-indigo-400 mb-4">Eingeloggt!</h2><p class="text-lg font-bold text-gray-400">Schau auf den Fernseher...</p></div>`);
            await tvGameRef.update({
                [`players.${activePlayerKey}.hasAnswered`]: true,
                [`players.${activePlayerKey}.lastAnswer`]: ansIndex,
                [`players.${activePlayerKey}.answeredAt`]: Date.now()
            });
        }

        async function leaveTVGame(force) {
            if (typeof setTVMirrorDisplay === "function") setTVMirrorDisplay(false);
            if (typeof clearTVWrTimers === "function") clearTVWrTimers();

            if (tvGameRef && typeof confirmLeaveGame === "function") {
                const ok = await confirmLeaveGame({
                    force: force === true,
                    text: isTVHost
                        ? "TV-Spiel endet für alle."
                        : "Fortschritt geht verloren."
                });
                if (!ok) return;
            }
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
            stoppeTVLebenszeichen();
            stoppeTVRundenTimer();
            stopTVActionMode();
            tvPlayerRenderReset();
            tvGameRef = null;
            isTVHost = false;
            isResolving = false;
            stopTVLandscapeGuard();
            if (wasHost) merkeTVHost(false);
            showTVHostSetup();
            showTVPlayerSetup();
            switchView(currentPlayer ? 'menu' : 'family-hub');
            if (!ref) return;
            try {
                if (wasHost) {
                    try {
                        await ref.set({
                            status: "finished",
                            lastEvent: { type: "host_ended", name: (currentPlayer && currentPlayer.name) || "Host", ts: Date.now() },
                            finishedAt: Date.now()
                        }, { merge: true });
                    } catch (e) { }
                    try { await ref.delete(); } catch (e) { }
                    if (window._activeTVCode) {
                        try { await db.collection("tv_codes").doc(window._activeTVCode).delete(); } catch (e) { }
                        window._activeTVCode = null;
                    }
                } else if (activePlayerKey) {
                    // Nie das ganze Lobby-Dokument loeschen: der Fernseher steht
                    // nicht in players[], also war die Lobby fuer ihn frueher weg,
                    // sobald der letzte Mitspieler das Spiel verlassen hat.
                    try {
                        await ref.update({
                            ["players." + activePlayerKey]: firebase.firestore.FieldValue.delete()
                        });
                    } catch (e) {
                        // Gaeste duerfen laut Sicherheitsregeln niemanden aus der
                        // Liste entfernen - dann nur abmelden, der Fernseher
                        // wartet dank Lebenszeichen nicht auf ein Geraet, das weg ist.
                        await ref.update({ ["players." + activePlayerKey + ".lastSeen"]: 0 }).catch(function () { });
                    }
                }
            } catch (e) { /* Lobby evtl. schon weg */ }
        }

