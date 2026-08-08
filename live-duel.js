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
        let liveDuelHostTakeoverInFlight = false;
        const HOST_STALE_MS = 45000;
        const liveDuelCoinsClaimedLocal = new Set();
        let liveDuelResolvedRoundKey = "";
        // Meldung "X hat verlassen": merkt sich, welches lastEvent schon
        // gezeigt wurde, damit es nicht bei jedem Snapshot erneut aufploppt.
        // null = noch nicht initialisiert (Altbestand beim Beitreten nicht zeigen).
        let liveDuelLastShownEventTs = null;
        let liveDuelEventBaselined = false; // erster Snapshot nach dem Beitreten setzt nur den Ausgangswert, zeigt nie eine Meldung
        // Synchronisiertes Buchstaben-Aufblitzen beim Wort-Rätsel (auch beim Gegenspieler sichtbar)
        let wrLiveLastFlashTs = 0;
        let wrLiveFlashBaselined = false;

        const SCRABBLE_ANSWER_SECONDS = { leicht: 30, mittel: 20, schwer: 15, experte: 12, profi: 35 };

        function openLiveDuelSetup(type) {
            liveDuelType = type;
            document.getElementById("live-duel-setup-title").innerText = type === "scrabble" ? "🔤 Live-Wortduell" :
                type === "wortraten" ? "🧩 Live-Wort-Rätsel" :
                type === "vokabel" ? "📚 Vokabel-Duell" :
                "⚔️ Live-Quizduell";
            document.getElementById("live-duel-quiz-options").classList.toggle("hidden", type !== "quiz");
            document.getElementById("live-duel-scrabble-options").classList.toggle("hidden", type !== "scrabble");
            const wrOpts = document.getElementById("live-duel-wortraten-options");
            if (wrOpts) wrOpts.classList.toggle("hidden", type !== "wortraten");
            const vkOpts = document.getElementById("live-duel-vokabel-options");
            if (vkOpts) vkOpts.classList.toggle("hidden", type !== "vokabel");
            if (type === "quiz") setupCategorySelectors("live-duel-area", "live-duel-category", "spass");
            if (type === "vokabel" && typeof renderVocabGroupCheckboxes === "function") {
                renderVocabGroupCheckboxes("live-duel-vokabel-checkboxes");
            }
            switchView('live-duel-setup');
        }

        function liveDuelCollectionRef() {
            return db.collection("parents").doc(currentParentUser.uid).collection("live_duel");
        }

        // istAnwesend() und PRESENCE_STALE_MS stehen jetzt in app-config.js,
        // damit Live-Duell und TV-Modus dieselbe Regel benutzen.

        // Lebenszeichen. Jeder Mitspieler meldet sich alle 12 Sekunden,
        // der Ersteller schreibt zusätzlich hostLastSeen – beides in
        // einem einzigen Schreibvorgang, damit es nicht doppelt kostet.
        function maybeStartHostHeartbeat() {
            if (liveDuelHeartbeat || !liveDuelRef) return;
            const beat = () => {
                if (!liveDuelRef || !activePlayerKey) return;
                const update = {};
                update["players." + activePlayerKey + ".lastSeen"] = Date.now();
                if (isLiveDuelCreator) update.hostLastSeen = Date.now();
                liveDuelRef.update(update).catch(() => { });
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

        // Kommt die App aus dem Hintergrund zurück (Handy entsperrt, Anruf
        // beendet, Tab gewechselt), friert iOS das JavaScript bis dahin ein.
        // Dann sofort ein Lebenszeichen senden statt bis zum nächsten
        // Intervall zu warten – so ist man in unter einer Sekunde wieder
        // als anwesend markiert.
        document.addEventListener("visibilitychange", function () {
            if (document.visibilityState !== "visible") return;
            if (!liveDuelRef || !activePlayerKey) return;
            const update = {};
            update["players." + activePlayerKey + ".lastSeen"] = Date.now();
            if (isLiveDuelCreator) update.hostLastSeen = Date.now();
            liveDuelRef.update(update).catch(() => { });
        });

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
            } else if (liveDuelType === "vokabel") {
                const checked = Array.from(document.querySelectorAll("#live-duel-vokabel-checkboxes .vokabel-group-check:checked")).map(cb => cb.value);
                if (checked.length === 0) return showToast("Bitte mindestens eine Vokabelgruppe auswählen!", "error");
                const dir = (document.getElementById("live-duel-vokabel-dir") || {}).value || "mix";
                const mode = (document.getElementById("live-duel-vokabel-mode") || {}).value || "versus";
                const qCount = parseInt((document.getElementById("live-duel-count") || {}).value) || 10;
                const questions = prepareQuestions(buildVocabTestQuestions(checked, dir).sort(() => Math.random() - 0.5).slice(0, qCount));
                if (questions.length < 3) return showToast("Zu wenige Vokabeln für diese Auswahl!", "error");
                lobbyData = {
                    type: "quiz",
                    subject: "vokabel",
                    mode,
                    status: "waiting",
                    questions,
                    currentIndex: 0,
                    answerSeconds: parseInt((document.getElementById("live-duel-vokabel-speed") || {}).value) || 20,
                    createdBy: activePlayerKey,
                    players: {}
                };
            } else {
                const keys = typeof collectLiveDuelCategoryKeys === "function"
                    ? collectLiveDuelCategoryKeys()
                    : [document.getElementById("live-duel-category").value];
                if (!keys.length) return showToast("Bitte mindestens ein Thema wählen!", "error");
                const qCount = parseInt((document.getElementById("live-duel-count") || {}).value) || 10;
                const questions = typeof buildMixedQuestions === "function"
                    ? buildMixedQuestions(keys, qCount)
                    : prepareQuestions(questionsForKey(keys[0]).sort(() => Math.random() - 0.5).slice(0, qCount));
                if (questions.length < 3) return showToast("Zu wenige Fragen für diese Auswahl!", "error");
                lobbyData = {
                    type: "quiz",
                    status: "waiting",
                    category: keys[0],
                    categories: keys,
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
                liveDuelResolvedRoundKey = "";
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
                const me = wasAlreadyIn ? data.players[activePlayerKey] : null;

                if (!wasAlreadyIn) {
                    // Neu mittendrin: erst ab nächster Runde mitspielen
                    const joinUpdate = {
                        [`players.${activePlayerKey}`]: {
                            name: currentPlayer.name,
                            score: 0,
                            hasAnswered: false,
                            lastAnswer: null,
                            word: "",
                            coinsClaimed: false,
                            pending: midGame,
                            lastSeen: Date.now()
                        }
                    };
                    if (data.type === "wortraten" && !midGame) {
                        joinUpdate.order = firebase.firestore.FieldValue.arrayUnion(activePlayerKey);
                    }
                    await ref.update(joinUpdate);
                } else {
                    // Mid-Game-Absturz / Reload: wieder anwesend melden
                    const reconnect = {
                        [`players.${activePlayerKey}.lastSeen`]: Date.now(),
                        [`players.${activePlayerKey}.name`]: currentPlayer.name
                    };
                    // Host war weg → Host-Rolle wieder übernehmen
                    if (data.createdBy === activePlayerKey) {
                        reconnect.hostLastSeen = Date.now();
                    } else if (!(data.hostLastSeen) || (Date.now() - (data.hostLastSeen || 0) > (typeof HOST_STALE_MS === "number" ? HOST_STALE_MS : 45000))) {
                        // Host tot, wir übernehmen beim Reconnect nicht still – das macht der Snapshot-Watcher
                    }
                    // War aktiv (nicht nur „pending“-Zuschauer) → sicherstellen, dass pending weg ist
                    if (me && me.pending !== true) {
                        reconnect[`players.${activePlayerKey}.pending`] = false;
                    }
                    await ref.update(reconnect);
                }

                liveDuelType = data.type;
                liveDuelRef = ref;
                isLiveDuelCreator = (data.createdBy === activePlayerKey);
                liveDuelResolving = false;
                liveDuelRenderKey = "";
                liveDuelResolvedRoundKey = "";
                maybeStartHostHeartbeat();
                showToast(wasAlreadyIn
                    ? (midGame ? "Wieder da – Spiel läuft weiter!" : "Willkommen zurück!")
                    : (midGame ? "Dabei ab nächster Runde." : "Du bist dabei!"));
                subscribeLiveDuel();
            } catch (e) { handleError("joinLiveDuel", e, "Beitreten hat nicht geklappt."); }
        }

        function subscribeLiveDuel() {
            if (liveDuelUnsubscribe) liveDuelUnsubscribe();
            liveDuelLastShownEventTs = null;
            liveDuelEventBaselined = false;
            wrLiveLastFlashTs = 0;
            wrLiveFlashBaselined = false;
            liveDuelUnsubscribe = liveDuelRef.onSnapshot((doc) => {
                if (!doc.exists) {
                    // Dokument komplett weg (Gastgeber hat beendet und gelöscht).
                    // Vorher lief das hier für alle außer dem Gastgeber lautlos
                    // ins Leere - keine Meldung, kein Rücksprung ins Menü.
                    if (liveDuelUnsubscribe) { try { liveDuelUnsubscribe(); } catch (e) { } liveDuelUnsubscribe = null; }
                    clearLiveDuelTimers();
                    stopHostHeartbeat();
                    liveDuelRef = null;
                    isLiveDuelCreator = false;
                    liveDuelResolving = false;
                    if (typeof showToast === "function") showToast("🚪 Das Spiel wurde beendet");
                    switchView(currentPlayer ? 'menu' : 'family-hub');
                    return;
                }
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

        // onExpire: optionaler Callback für den Ablauf des Countdowns. Ohne
        // Angabe läuft wie bisher resolveLiveDuelRound() (Quiz/Wort-Duell).
        // Wort-Rätsel braucht beim Ablaufen des Zug-Timers etwas anderes
        // (Zug weiterreichen statt Runde auszuwerten) - vorher landete das
        // hier fälschlich im Scrabble-Zweig von resolveLiveDuelRound und
        // brachte den Rätsel-Stand durcheinander ("springt von alleine").
        function startLiveDuelCountdown(deadline, onExpire) {
            clearLiveDuelTimers();
            const el = document.getElementById("live-duel-countdown");
            const playEl = document.getElementById("live-duel-play-content");
            const tick = () => {
                const left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
                if (el) el.innerText = left > 0 ? left + "s" : "⏰";
                if (left > 0 && left <= 5) {
                    SFX.tick();
                    if (playEl) playEl.style.boxShadow = "0 0 0 3px rgba(239,68,68,0.7), 0 0 24px rgba(239,68,68,0.35)";
                    if (el) el.classList.add("text-rose-400");
                } else {
                    if (playEl) playEl.style.boxShadow = "";
                    if (el) el.classList.remove("text-rose-400");
                }
                if (left <= 0) {
                    clearLiveDuelTimers();
                    if (playEl) playEl.style.boxShadow = "";
                    if (isLiveDuelCreator && !liveDuelResolving) {
                        liveDuelResolving = true;
                        SFX.timeUp();
                        if (typeof onExpire === "function") {
                            onExpire();
                        } else {
                            liveDuelRef.get().then(d => { if (d.exists) resolveLiveDuelRound(d.data()); });
                        }
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

            // Meldung, wenn jemand die Lobby/Runde verlassen oder der
            // Gastgeber beendet hat – einmal pro Ereignis.
            // Baseline erst beim ERSTEN Snapshot nach dem Beitreten setzen, egal ob
            // darin schon ein lastEvent steckt oder nicht. Vorher wurde die Baseline
            // nur gesetzt, wenn zufällig schon ein lastEvent da war – dadurch wurde
            // ausgerechnet das allererste "richtige" Ereignis (jemand verlässt gerade)
            // fälschlich als "Altbestand" verschluckt und nie angezeigt.
            if (!liveDuelEventBaselined) {
                liveDuelEventBaselined = true;
                liveDuelLastShownEventTs = (data.lastEvent && data.lastEvent.ts) || 0;
            } else if (data.lastEvent && data.lastEvent.ts && data.lastEvent.ts > liveDuelLastShownEventTs) {
                liveDuelLastShownEventTs = data.lastEvent.ts;
                if (data.lastEvent.type === "host_ended") {
                    showToast("🚪 " + (data.lastEvent.name || "Der Gastgeber") + " hat das Spiel beendet");
                } else if (data.lastEvent.type === "left") {
                    showToast("🚪 " + (data.lastEvent.name || "Ein Spieler") + " hat verlassen");
                }
            }

            const _fr = document.getElementById("live-duel-force-resolve");
            if (_fr) _fr.classList.add("hidden");

            isLiveDuelCreator = (data.createdBy === activePlayerKey);
            // Lebenszeichen läuft für alle, solange das Spiel läuft.
            if (data.status !== "finished") maybeStartHostHeartbeat();
            else stopHostHeartbeat();

            // Host-Übernahme: hat sich der Ersteller lange nicht gemeldet (Tab zu, Akku leer,
            // Netz weg), übernimmt automatisch der Mitspieler mit dem kleinsten Key, damit
            // nicht alle für immer auf "Warte auf den Ersteller" hängen bleiben.
            if (!isLiveDuelCreator && data.status !== "finished") {
                const lastSeen = data.hostLastSeen || data.createdAt || 0;
                if (Date.now() - lastSeen > HOST_STALE_MS && !liveDuelHostTakeoverInFlight) {
                    const activeKeys = Object.keys(data.players || {}).filter(k => !data.players[k].pending).sort();
                    if (activeKeys[0] === activePlayerKey) {
                        liveDuelHostTakeoverInFlight = true;
                        liveDuelRef.update({ createdBy: activePlayerKey, hostLastSeen: Date.now() })
                            .catch(() => { })
                            .finally(() => { liveDuelHostTakeoverInFlight = false; });
                    }
                }
            }

            if (data.status === "waiting") {
                clearLiveDuelTimers();
                const meta = document.getElementById("live-duel-lobby-meta");
                if (meta) {
                    const typeLabel = data.type === "scrabble" ? "🔤 Wort-Duell" :
                        data.type === "wortraten" ? "🧩 Wort-Rätsel" :
                        data.subject === "vokabel" ? "📚 Vokabeln" : "🧠 Quiz";
                    const modeBits = [];
                    if (data.wordMode) modeBits.push(data.wordMode === "adult" ? "🎓 Erwachsene" : "👶 Kinder");
                    if (data.difficulty) modeBits.push(String(data.difficulty));
                    if (data.mode) modeBits.push(data.mode === "coop" ? "🤝 Team" : "⚔️ Duell");
                    meta.innerHTML = typeLabel + (modeBits.length ? " · " + modeBits.join(" · ") : "");
                    meta.classList.remove("hidden");
                }
                const list = document.getElementById("live-duel-player-list");
                if (list) list.innerHTML = Object.values(data.players).map(p => {
                    const da = istAnwesend(p);
                    const punkt = da
                        ? '<span class="inline-block w-2 h-2 rounded-full bg-emerald-400 align-middle"></span>'
                        : '<span class="inline-block w-2 h-2 rounded-full bg-gray-500 align-middle"></span>';
                    return `<div class="bg-white/5 border border-white/5 rounded-xl p-3 text-center ${da ? '' : 'opacity-50'}">
                        <div class="text-2xl">🙋</div>
                        <div class="font-bold text-white text-sm mt-1">${esc(p.name)}</div>
                        <div class="text-[10px] font-bold text-gray-400 mt-0.5">${punkt} ${da ? 'da' : 'kurz weg'}</div>
                    </div>`;
                }).join("");
                document.getElementById("live-duel-start-btn").classList.toggle("hidden", !isLiveDuelCreator);
                document.getElementById("live-duel-wait-hint").classList.toggle("hidden", isLiveDuelCreator);
                const _clWrap = document.getElementById("live-duel-lobby-code-wrap");
                const _clCode = document.getElementById("live-duel-lobby-code");
                if (_clWrap) _clWrap.classList.toggle("hidden", !data.code);
                if (_clCode) _clCode.innerText = data.code || "";
                const qr = document.getElementById("live-duel-lobby-qr");
                if (qr && data.code) {
                    const joinUrl = (window.location.origin || "") + (window.location.pathname || "/") + "?join=" + encodeURIComponent(data.code);
                    const payload = encodeURIComponent(joinUrl);
                    qr.innerHTML = '<img alt="QR" class="w-full h-full object-contain" src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=' + payload + '">';
                } else if (qr) {
                    qr.innerHTML = "";
                }
                switchView('live-duel-lobby');
                return;
            }

            if (data.status === "playing") {
                // liveDuelResolving nur bei echtem Rundenwechsel zurücksetzen, nicht bei jedem
                // Snapshot (z.B. Heartbeat) – sonst kann eine noch laufende Auswertung
                // (z.B. Scrabble-Wortprüfung) ein zweites Mal angestoßen werden.
                const _roundKey = data.type === "wortraten" ? ("wr:" + data.currentRound) :
                    data.type === "scrabble" ? ("sc:" + data.currentRound) : ("qz:" + data.currentIndex);
                if (_roundKey !== liveDuelResolvedRoundKey) {
                    liveDuelResolvedRoundKey = _roundKey;
                    liveDuelResolving = false;
                }

                if (myData.pending) {
                    renderLiveDuelPending(data);
                    switchView('live-duel-play');
                    return;
                }

                if (data.type === "wortraten") {
                    renderLiveDuelWortratenPlay(data);
                    const statusEl2 = document.getElementById("live-duel-status");
                    if (statusEl2) statusEl2.innerText = `Runde ${data.currentRound}/${data.totalRounds}`;
                    // Nur leeren, wenn gerade KEIN Zug-Timer läuft - sonst überschreibt
                    // das hier bei jedem Snapshot (z.B. alle paar Sekunden durchs
                    // Lebenszeichen) die Sekundenzahl, die startLiveDuelCountdown()
                    // für den Erwachsenen-Zug-Timer gerade erst gesetzt hat. Wirkte
                    // dadurch, als würde der Countdown "nichts tun" (ständig leer).
                    if (!(data.wrTurnDeadline && !data.roundOver)) {
                        const cd2 = document.getElementById("live-duel-countdown");
                        if (cd2) cd2.innerText = "";
                    }
                    const forceBtn2 = document.getElementById("live-duel-force-resolve");
                    if (forceBtn2) forceBtn2.classList.add("hidden");
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

                // Wer gerade nicht da ist, blockiert die Runde nicht mehr.
                // Seine bereits abgegebene Antwort zählt aber weiter.
                const activePl = Object.values(data.players)
                    .filter(p => !p.pending && (istAnwesend(p) || p.hasAnswered));
                const ansCount = activePl.filter(p => p.hasAnswered).length;
                const totalCount = activePl.length;
                const abwesend = Object.values(data.players)
                    .filter(p => !p.pending && !istAnwesend(p) && !p.hasAnswered);
                const statusEl = document.getElementById("live-duel-status");
                if (statusEl) {
                    statusEl.innerText = abwesend.length
                        ? `${ansCount}/${totalCount} fertig · ${abwesend.length} kurz weg`
                        : `${ansCount}/${totalCount} fertig`;
                }
                const waitEl = document.getElementById("live-duel-answer-counter");
                if (waitEl) waitEl.innerText = `${ansCount} von ${totalCount} haben geantwortet...`;

                if (data.answerDeadline) {
                    if (!liveDuelTimerInterval) startLiveDuelCountdown(data.answerDeadline);
                } else if (isLiveDuelCreator) {
                    // Ghost-Schutz: Ersteller setzt einmalig eine Rundendeadline.
                    // Vorher hart 30/60s, unabhängig von der gewählten Geschwindigkeit -
                    // dadurch griff answerSeconds (Dropdown bzw. Schwierigkeit beim
                    // Wort-Duell) nie, weil answerDeadline zu dem Zeitpunkt schon gesetzt war.
                    const _secs = data.answerSeconds || (data.type === "quiz" ? 20 : 30);
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
                liveDuelResolvedRoundKey = "";
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

                // Lokale Sperre zusätzlich zum Firestore-Flag: mehrere Snapshots können eintreffen,
                // bevor der eigene coinsClaimed-Write beim Server angekommen ist (sonst Mehrfach-Gutschrift).
                const _coinKey = liveDuelRef.id + ":" + activePlayerKey;
                if (!myData.coinsClaimed && !liveDuelCoinsClaimedLocal.has(_coinKey)) {
                    liveDuelCoinsClaimedLocal.add(_coinKey);
                    currentPlayer.coins += (myData.score || 0);
                    savePlayerProgress();
                    liveDuelRef.update({ [`players.${activePlayerKey}.coinsClaimed`]: true }).catch(() => { });
                }
                renderLiveDuelFinalResult(data);
                switchView('live-duel-result');
            }
        }
        function renderLiveDuelPending(data) {
            document.getElementById("live-duel-play-content").innerHTML = `
                            <div class="glass-card h-[70vh] rounded-3xl flex flex-col items-center justify-center p-6 text-center text-white shadow-inner">
                                <div class="text-6xl mb-4 animate-pulse">⏳</div>
                                <h2 class="text-xl font-black mb-2">Du bist dabei!</h2>
                                <p class="text-gray-400 font-bold text-sm">Aktuelle Runde läuft noch.<br>Ab der nächsten Runde spielst du mit.</p>
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

        // Indizes der angetippten Steine für das Live-Wortduell (ersetzt Tastatur-Eingabe)
        let liveDuelSelected = [];
        let liveDuelCurrentLetters = []; // lokaler Cache der zuletzt gerenderten Buchstaben (für Tap-Handler)
        let liveDuelCurrentRequired = "";

        function ldCurrentWord() {
            return liveDuelSelected.map(i => liveDuelCurrentLetters[i]).join("");
        }

        function renderLiveDuelScrabblePlay(data) {
            // Stelle sicher, dass currentLetters existiert
            const letters = data.currentLetters || [];
            const required = data.currentRequired || "";

            // Auswahl zurücksetzen, wenn sich die Buchstaben seit der letzten Auswahl geändert haben
            const lettersKey = letters.join('');
            if (lettersKey !== liveDuelCurrentLetters.join('')) {
                liveDuelSelected = [];
            }
            liveDuelCurrentLetters = letters;
            liveDuelCurrentRequired = required;

            // Mindestlänge dauerhaft anzeigen, nicht erst als Fehlermeldung
            // nach dem Einreichen.
            const minLen = (typeof SCRABBLE_DIFFICULTIES !== "undefined"
                ? (SCRABBLE_DIFFICULTIES[data.difficulty] || {}).minWord
                : 0) || 2;

            document.getElementById("live-duel-play-content").innerHTML = `
        <div class="space-y-4">
            <div class="text-center text-xs font-bold text-gray-400">
                Runde ${data.currentRound}/${data.totalRounds}
                ${data.actionMode ? ' ⚡ Action-Modus' : ''}
            </div>
            <div class="flex flex-wrap justify-center gap-2" id="live-duel-tiles-container">
                ${scrabbleTilesHTML(letters, false, required, liveDuelSelected, "liveDuelTapTile")}
            </div>
            <div class="text-center text-[11px] font-bold text-gray-500">Dein Wort braucht mindestens ${minLen} Buchstaben</div>
            <div class="glass-card p-5 space-y-3">
                <div id="live-duel-word-preview" class="input-modern text-xl font-black text-center uppercase tracking-widest text-gray-500">…</div>
                <div id="live-duel-live-feedback" class="text-center text-sm font-bold text-gray-400 h-5"></div>
                <div class="grid grid-cols-2 gap-2">
                    <button id="live-duel-undo-btn" onclick="liveDuelUndoTile()" disabled class="btn-secondary w-full text-center disabled:opacity-30">⌫ Entfernen</button>
                    <button onclick="liveDuelClearTiles()" class="btn-secondary w-full text-center">🗑 Neu anfangen</button>
                </div>
                <button onclick="submitLiveDuelWord()" class="btn-primary w-full text-center" style="background:var(--gradient-green);box-shadow:0 4px 24px rgba(16,185,129,0.3);">Wort einreichen ✅</button>
            </div>
        </div>`;

            ldRenderPreview();
            liveDuelInputLockUntil = Date.now() + 450;
        }

        function ldRenderPreview() {
            const word = ldCurrentWord();
            const preview = document.getElementById("live-duel-word-preview");
            if (preview) {
                preview.innerText = word || "…";
                preview.classList.toggle("text-gray-500", !word);
                preview.classList.toggle("text-white", !!word);
            }
            const undoBtn = document.getElementById("live-duel-undo-btn");
            if (undoBtn) undoBtn.disabled = liveDuelSelected.length === 0;
            const tilesContainer = document.getElementById("live-duel-tiles-container");
            if (tilesContainer) {
                tilesContainer.innerHTML = scrabbleTilesHTML(liveDuelCurrentLetters, false, liveDuelCurrentRequired, liveDuelSelected, "liveDuelTapTile");
            }
            const fb = document.getElementById("live-duel-live-feedback");
            if (fb) {
                if (!word) { fb.innerText = ""; }
                else {
                    const result = computeScrabbleWordScore(word, liveDuelCurrentLetters);
                    fb.innerText = result.valid ?
                        `${result.score} Punkte möglich${result.bonus ? " (inkl. +50 Bonus!)" : ""} – wird beim Einreichen geprüft` :
                        "❌ Diese Buchstaben hast du nicht (oder zu oft benutzt)";
                    fb.className = "text-center text-sm font-bold h-5 " + (result.valid ? "text-emerald-400" : "text-rose-400");
                }
            }
        }

        function liveDuelTapTile(idx) {
            if (liveDuelSelected.includes(idx)) return;
            if (liveDuelSelected.length >= liveDuelCurrentLetters.length) return;
            liveDuelSelected.push(idx);
            if (typeof SFX !== "undefined") SFX.tap();
            ldRenderPreview();
        }

        function liveDuelUndoTile() {
            if (liveDuelSelected.length === 0) return;
            liveDuelSelected.pop();
            if (typeof SFX !== "undefined") SFX.tap();
            ldRenderPreview();
        }

        function liveDuelClearTiles() {
            if (liveDuelSelected.length === 0) return;
            liveDuelSelected = [];
            if (typeof SFX !== "undefined") SFX.tap();
            ldRenderPreview();
        }


        async function submitLiveDuelWord() {
            if (Date.now() < liveDuelInputLockUntil) return;
            const word = ldCurrentWord();
            if (!word) {
                SFX.wrong();
                showToast("Bitte zuerst Buchstaben antippen.", "error", "word");
                return;
            }
            const undoBtn = document.getElementById("live-duel-undo-btn");
            if (undoBtn) undoBtn.disabled = true;
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


        // ============================================================
        // LIVE WORT-RÄTSEL (kontoübergreifend, reihum Buchstaben raten)
        // ============================================================

        // Merkt den 8s-Auto-Weiter-Timer, damit ein manuelles "Weiter" (Klick oder
        // eigener Auto-Lauf) ihn canceln kann - sonst feuert der alte Timer später
        // nochmal, wenn die nächste Runde zufällig schon wieder vorbei ist, und
        // schiebt ungefragt eine weitere Runde weiter.
        let wrLiveAutoAdvanceTimer = null;

        function wrLiveActivePlayerKey(data) {
            const order = (data.order || []).filter(k => data.players && data.players[k] && !data.players[k].pending);
            if (order.length === 0) return null;
            return order[(data.turnIndex || 0) % order.length];
        }

        function wrLiveNewRoundFields(data) {
            const cfg = WORTRAETSEL_DIFFICULTIES[data.difficulty] || WORTRAETSEL_DIFFICULTIES.mittel;
            const pool = wrWordPool(data.wordMode, data.difficulty, data.wordTheme || "gemischt");
            const avoid = new Set(data.usedWords || []);
            const word = wrPickWord(pool, cfg.minLen, cfg.maxLen, avoid);
            return { word, guessed: [], wrongCount: 0, roundOver: false, roundSolved: false };
        }

        function renderLiveDuelWortratenPlay(data) {
            // Buchstaben-Aufblitzen synchron beim Gegenspieler zeigen (der Tippende
            // sieht es schon sofort lokal per onclick, siehe wrFlashLetter-Aufruf
            // im Tastatur-Button unten). Gleiche Baseline-Logik wie bei den
            // Verlassen-Meldungen: erster Snapshot setzt nur den Ausgangswert.
            if (!wrLiveFlashBaselined) {
                wrLiveFlashBaselined = true;
                wrLiveLastFlashTs = (data.lastGuess && data.lastGuess.ts) || 0;
            } else if (data.lastGuess && data.lastGuess.ts && data.lastGuess.ts > wrLiveLastFlashTs) {
                wrLiveLastFlashTs = data.lastGuess.ts;
                if (data.lastGuess.by !== activePlayerKey && typeof wrFlashLetter === "function") {
                    wrFlashLetter(data.lastGuess.letter);
                }
            }

            const key = wrLiveActivePlayerKey(data);
            const isMyTurn = key === activePlayerKey;
            const word = data.word || "";
            const guessedArr = data.guessed || [];
            const guessedSet = new Set(guessedArr);
            const mask = wrMaskArray(word, guessedSet);

            const wordHtml = mask.map(ch => `
                <div class="w-8 h-10 sm:w-9 sm:h-11 border-b-4 ${ch === '_' ? 'border-sky-400/40' : 'border-emerald-400'} flex items-center justify-center text-lg sm:text-xl font-black text-white">${ch === '_' ? '' : ch}</div>
            `).join("");

            const kbHtml = WORTRAETSEL_ALPHABET.map(letter => {
                const used = guessedSet.has(letter);
                const correct = used && word.includes(letter);
                const canTap = isMyTurn && !data.roundOver;
                const cls = !used
                    ? (canTap ? "bg-white/10 border border-white/10 text-white hover:bg-white/20" : "bg-white/5 border border-white/5 text-gray-500")
                    : correct
                        ? "bg-emerald-500 border border-emerald-400 text-white opacity-90"
                        : "bg-rose-500/70 border border-rose-400/50 text-white opacity-50";
                const disabled = used || !canTap;
                return `<button ${disabled ? 'disabled' : ''} onclick="wrFlashLetter('${letter}');wrLiveGuessLetter('${letter}')"
                    class="h-9 rounded-lg font-black text-xs sm:text-sm transition ${cls}">${letter}</button>`;
            }).join("");

            const scoresHtml = Object.keys(data.players).filter(k => !data.players[k].pending).map(k => {
                const p = data.players[k];
                const active = k === key && !data.roundOver;
                return `<div class="flex-shrink-0 px-3 py-2 rounded-xl border text-center ${active ? 'bg-sky-500/20 border-sky-400 ring-2 ring-sky-400' : 'bg-white/5 border-white/5'}">
                    <div class="text-xs font-bold text-white whitespace-nowrap">${esc(p.name)}</div>
                    <div class="text-sm font-black text-sky-300">${p.score || 0} Pkt.</div>
                </div>`;
            }).join("");

            let banner;
            if (data.roundOver) {
                banner = data.roundSolved
                    ? `<p class="text-center text-sm font-bold text-emerald-400">🎉 Gelöst! Das Wort war "${esc(word)}"</p>`
                    : `<p class="text-center text-sm font-bold text-amber-400">${wrFigureEmoji(data.theme)} ${wrFigureName(data.theme)} ist fertig! Das Wort war "${esc(word)}"</p>`;
            } else {
                const activeName = data.players[key] ? esc(data.players[key].name) : "";
                banner = isMyTurn
                    ? `<p class="text-center text-sm font-bold text-sky-300">🎯 Du bist dran – wähl einen Buchstaben!</p>`
                    : `<p class="text-center text-sm font-bold text-gray-400">⏳ ${activeName} ist dran...</p>`;
            }

            const continueBtn = (data.roundOver && isLiveDuelCreator)
                ? `<button type="button" onclick="wrLiveAdvanceRound()" class="btn-primary w-full text-center py-3.5 mt-2" style="background:var(--gradient-cool);">Weiter ➔</button>`
                : "";
            const timerNote = (!data.roundOver && data.wordMode === "adult" && isMyTurn)
                ? `<p class="text-center text-xs text-amber-300 font-bold">⏱️ ${typeof WORTRAETSEL_TURN_SECONDS !== "undefined" ? WORTRAETSEL_TURN_SECONDS : 20} Sek. – Erwachsenen-Tempo</p>`
                : "";
            const maxWrongForCounter = typeof wrMaxWrong === "function" ? wrMaxWrong(data.wordMode) : 7;
            const revealBtn = (!data.roundOver && isLiveDuelCreator)
                ? `<button type="button" onclick="wrLiveRevealWord()" class="btn-secondary text-xs w-full py-2">🏳️ Wort auflösen</button>`
                : "";

            document.getElementById("live-duel-play-content").innerHTML = `
                <div class="space-y-4">
                    <div class="text-center text-xs font-bold text-gray-400">Runde ${data.currentRound}/${data.totalRounds} · ${data.wordMode === "adult" ? "🎓 Erwachsene" : "👶 Kinder"} · ${data.wrongCount || 0}/${maxWrongForCounter} Fehlversuche</div>
                    <div class="flex justify-center gap-2 overflow-x-auto py-1">${scoresHtml}</div>
                    <div class="glass-card p-4 flex items-center justify-center">
                        <div id="live-duel-wr-figure" class="w-32 h-36"></div>
                    </div>
                    <div class="flex flex-wrap justify-center gap-1.5">${wordHtml}</div>
                    ${banner}
                    ${timerNote}
                    <div class="grid grid-cols-7 sm:grid-cols-9 gap-1.5">${kbHtml}</div>
                    ${revealBtn}
                    ${continueBtn}
                </div>`;

            wrRenderFigureBase(data.theme, "live-duel-wr-figure");
            const maxW = typeof wrMaxWrong === "function" ? wrMaxWrong(data.wordMode) : 7;
            for (let i = 1; i <= Math.min(data.wrongCount || 0, maxW); i++) wrRevealFigureStage(i, "live-duel-wr-figure");

            // Erwachsenen-Modus: Zug-Timer. Der Ersteller setzt die Deadline
            // fürs jeweils aktive Kind/Erwachsenen-Duell - unabhängig davon,
            // ob er selbst gerade dran ist, sonst bekommt ein Zug des
            // Mitspielers nie eine Deadline (vorher: "isMyTurn && isLiveDuelCreator",
            // das griff nur, wenn ausgerechnet der Ersteller selbst dran war).
            if (!data.roundOver && data.wordMode === "adult" && isLiveDuelCreator) {
                if (!data.wrTurnDeadline) {
                    const secs = typeof WORTRAETSEL_TURN_SECONDS !== "undefined" ? WORTRAETSEL_TURN_SECONDS : 20;
                    liveDuelRef.update({ wrTurnDeadline: Date.now() + secs * 1000 }).catch(() => { });
                }
            }
            if (data.wrTurnDeadline && !data.roundOver) {
                startLiveDuelCountdown(data.wrTurnDeadline, () => {
                    wrLiveSkipTurn().finally(() => { liveDuelResolving = false; });
                });
            }
        }

        async function wrLiveGuessLetter(letter) {
            if (!liveDuelRef) return;
            // Als Transaktion: verhindert, dass zwei schnell hintereinander getippte
            // Buchstaben beide vom selben (veralteten) Stand ausgehen und sich
            // gegenseitig überschreiben (verlorene Punkte/Buchstaben).
            let outcome = null;
            try {
                await db.runTransaction(async (txn) => {
                    const snap = await txn.get(liveDuelRef);
                    if (!snap.exists) return;
                    const data = snap.data();
                    if (data.status !== "playing" || data.type !== "wortraten" || data.roundOver) return;
                    const key = wrLiveActivePlayerKey(data);
                    if (key !== activePlayerKey) return;
                    const guessed = data.guessed || [];
                    if (guessed.includes(letter)) return;

                    const word = data.word || "";
                    const isHit = word.includes(letter);
                    const newGuessed = guessed.concat([letter]);
                    const players = data.players;

                    let wrongCount = data.wrongCount || 0;
                    let roundOver = false, roundSolved = false;
                    let points = 0;
                    let parts = [];

                    if (isHit) {
                        const occ = wrCountOccurrences(word, letter);
                        players[key].answerStreak = (players[key].answerStreak || 0) + 1;
                        const b = (typeof calcAnswerBonus === "function") ? calcAnswerBonus(players[key].answerStreak, true) : { bonus: 0, parts: [] };
                        points = occ * 3 + b.bonus;
                        parts = b.parts || [];
                        if (wrIsComplete(word, new Set(newGuessed))) {
                            points += 15;
                            roundOver = true;
                            roundSolved = true;
                        }
                        players[key].score = (players[key].score || 0) + points;
                        players[key].lastRoundPoints = points;
                    } else {
                        players[key].answerStreak = 0;
                        wrongCount++;
                        if (wrongCount >= (typeof wrMaxWrong === "function" ? wrMaxWrong(data.wordMode) : 7)) {
                            roundOver = true;
                            roundSolved = false;
                        }
                    }

                    const update = {
                        guessed: newGuessed, wrongCount, players, roundOver, roundSolved,
                        lastGuess: { letter: letter, by: key, ts: Date.now() } // fürs synchronisierte Aufblitzen beim Gegenspieler
                    };
                    if (!roundOver) {
                        const order = (data.order || []).filter(k => players[k] && !players[k].pending);
                        const curIdx = order.indexOf(key);
                        update.turnIndex = order.length > 0 ? (curIdx + 1) % order.length : 0;
                        update.wrTurnDeadline = null; // neuer Zug -> Timer beim Rendern frisch setzen
                    }
                    txn.update(liveDuelRef, update);
                    outcome = { isHit, roundOver, roundSolved, points, parts, key };
                });
            } catch (e) { handleError("wrLiveGuessLetter", e, "Der Buchstabe konnte nicht übermittelt werden."); return; }

            if (!outcome) return;
            if (outcome.isHit && typeof showPointsPopup === "function" && outcome.key === activePlayerKey) {
                showPointsPopup(outcome.points, outcome.roundSolved ? "Wort komplett! +15 🎉" : (outcome.parts.join(" · ") || "Treffer!"));
            }
            if (typeof SFX !== "undefined") { if (outcome.isHit) SFX.correct(); else SFX.wrong(); }
            if (outcome.roundOver) {
                try { if (outcome.roundSolved && typeof confetti === "function") confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } }); } catch (e) { }
                // Host: Weiter-Button; Auto-Weiter nach 8s als Fallback
                if (isLiveDuelCreator) {
                    if (wrLiveAutoAdvanceTimer) clearTimeout(wrLiveAutoAdvanceTimer);
                    wrLiveAutoAdvanceTimer = setTimeout(() => {
                        wrLiveAutoAdvanceTimer = null;
                        wrLiveAdvanceRound();
                    }, 8000);
                }
            }
        }

        // Läuft der Zug-Timer (Erwachsenen-Tempo) ab, ohne dass der aktive
        // Spieler einen Buchstaben gewählt hat: Zug einfach weiterreichen,
        // ohne Strafe/Fehlversuch. Läuft als Transaktion, damit ein Buchstabe,
        // der im selben Moment eintrifft, nicht mit dem Timer kollidiert.
        async function wrLiveSkipTurn() {
            if (!liveDuelRef) return;
            try {
                await db.runTransaction(async (txn) => {
                    const snap = await txn.get(liveDuelRef);
                    if (!snap.exists) return;
                    const data = snap.data();
                    if (data.status !== "playing" || data.type !== "wortraten" || data.roundOver) return;
                    const order = (data.order || []).filter(k => data.players && data.players[k] && !data.players[k].pending);
                    if (order.length === 0) return;
                    const key = wrLiveActivePlayerKey(data);
                    const curIdx = order.indexOf(key);
                    const turnIndex = (curIdx + 1) % order.length;
                    txn.update(liveDuelRef, { turnIndex, wrTurnDeadline: null });
                });
            } catch (e) { handleError("wrLiveSkipTurn", e, "Der Zug konnte nicht weitergegeben werden."); }
        }

        // Ersteller gibt die Runde auf: Wort wird für alle aufgedeckt, keine
        // Punkte mehr für diese Runde. Danach wie gewohnt "Weiter"-Button
        // bzw. Auto-Weiter nach 8s.
        async function wrLiveRevealWord() {
            if (!liveDuelRef || !isLiveDuelCreator) return;
            if (!confirm("Wort auflösen? Es gibt keine Punkte mehr für diese Runde.")) return;
            try {
                const snap = await liveDuelRef.get();
                if (!snap.exists) return;
                const data = snap.data();
                if (data.status !== "playing" || data.type !== "wortraten" || data.roundOver) return;
                const word = data.word || "";
                await liveDuelRef.update({ guessed: word.split(""), roundOver: true, roundSolved: false, wrTurnDeadline: null });
                if (wrLiveAutoAdvanceTimer) clearTimeout(wrLiveAutoAdvanceTimer);
                wrLiveAutoAdvanceTimer = setTimeout(() => {
                    wrLiveAutoAdvanceTimer = null;
                    wrLiveAdvanceRound();
                }, 8000);
            } catch (e) { handleError("wrLiveRevealWord", e, "Konnte nicht aufgelöst werden."); }
        }

        async function wrLiveAdvanceRound() {
            // Manuelles "Weiter" (Klick) soll den wartenden Auto-Timer canceln,
            // sonst feuert der später nochmal für eine bereits neue Runde.
            if (wrLiveAutoAdvanceTimer) { clearTimeout(wrLiveAutoAdvanceTimer); wrLiveAutoAdvanceTimer = null; }
            if (!liveDuelRef || !isLiveDuelCreator) return;
            const snap = await liveDuelRef.get();
            if (!snap.exists) return;
            const data = snap.data();
            if (data.status !== "playing" || data.type !== "wortraten" || !data.roundOver) return;

            if ((data.currentRound || 0) >= data.totalRounds) {
                await liveDuelRef.update({ status: "finished" });
                return;
            }

            const players = data.players;
            let order = (data.order || []).slice();
            Object.keys(players).forEach(k => {
                if (players[k].pending) {
                    players[k].pending = false;
                    if (!order.includes(k)) order.push(k);
                }
            });
            const usedWords = Array.isArray(data.usedWords) ? data.usedWords.slice() : [];
            const nextRound = wrLiveNewRoundFields({ wordMode: data.wordMode, difficulty: data.difficulty, usedWords });
            if (!nextRound.word) {
                await liveDuelRef.update({ status: "finished" });
                return;
            }
            usedWords.push(nextRound.word);
            await liveDuelRef.update({
                currentRound: (data.currentRound || 0) + 1,
                turnIndex: order.length > 0 ? (data.currentRound || 0) % order.length : 0,
                order,
                players,
                word: nextRound.word,
                guessed: [],
                wrongCount: 0,
                roundOver: false,
                roundSolved: false,
                usedWords,
                wrTurnDeadline: null
            });
        }


        // Holt kurz vor einem "ganze players-Map"-Write nochmal den aktuellen Stand und
        // übernimmt Spieler, die zwischenzeitlich beigetreten sind (Feldpfad-Write des
        // Joins), damit sie nicht durch den veralteten lokalen Stand überschrieben werden.
        async function mergeLateJoiners(players) {
            try {
                const fresh = await liveDuelRef.get();
                if (!fresh.exists) return players;
                const freshPlayers = fresh.data().players || {};
                Object.keys(freshPlayers).forEach(key => {
                    if (!players[key]) players[key] = freshPlayers[key];
                });
            } catch (e) { }
            return players;
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
                    players: await mergeLateJoiners(players),
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
                await liveDuelRef.update({ status: "reveal", players: await mergeLateJoiners(players), answerDeadline: null });

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
            const qReveal = isQuiz ? data.questions[data.currentIndex] : null;
            Object.values(data.players).filter(p => !p.pending).sort((a, b) => (b.lastRoundPoints || 0) - (a.lastRoundPoints || 0)).forEach(p => {
                let icon, detail = "";
                if (isQuiz) {
                    icon = p.lastRoundPoints > 0 ? "✅" : "❌";
                    if (qReveal && p.lastAnswer != null && qReveal.answers[p.lastAnswer] != null) {
                        detail = `<div class="text-[11px] text-gray-400 font-normal mt-0.5">gewählt: ${esc(qReveal.answers[p.lastAnswer])}</div>`;
                    } else if (p.hasAnswered === false || p.lastAnswer == null) {
                        detail = `<div class="text-[11px] text-gray-500 font-normal mt-0.5">keine Antwort</div>`;
                    }
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
                    const wordMode = (document.getElementById("again-wordmode") || {}).value || data.wordMode || "kids";
                    const requireLetter = !!data.requireLetter;
                    liveDuelUsedWords = new Set();
                    const rack = generateScrabbleRack(difficulty, requireLetter, wordMode);
                    await liveDuelRef.update({
                        status: "playing",
                        difficulty,
                        totalRounds,
                        currentRound: 1,
                        requireLetter,
                        wordMode,
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
                            wordMode,
                            actionMode: data.actionMode
                        });
                    }
                } else if (data.subject === "vokabel" && Array.isArray(data.vocabGroups) && data.vocabGroups.length) {
                    const questions = prepareQuestions(
                        buildVocabTestQuestions(data.vocabGroups, data.vocabDir || "mix")
                        .sort(() => Math.random() - 0.5).slice(0, (parseInt((document.getElementById("live-duel-count") || {}).value) || 10))
                    );
                    if (questions.length < 3) return showToast("Zu wenige Vokabeln für diese Auswahl!", "error");
                    await liveDuelRef.update({
                        status: "playing",
                        questions,
                        currentIndex: 0,
                        answerDeadline: null,
                        correctAnswer: null,
                        players,
                        review: []
                    });
                } else {
                    const catSel = document.getElementById("again-category");
                    const category = (catSel && catSel.value) ? catSel.value : data.category;
                    const questions = prepareQuestions(
                        questionsForKey(category).sort(() => Math.random() - 0.5).slice(0, (parseInt((document.getElementById("live-duel-count") || {}).value) || 10))
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
                liveDuelResolvedRoundKey = "";
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
                                    ` : data.type === "wortraten" ? `
                                        <select id="again-wr-wordmode" class="input-modern text-sm font-bold">
                                            <option value="kids" selected>👶 Kinder</option>
                                            <option value="adult">🎓 Erwachsene</option>
                                        </select>
                                        <select id="again-wr-difficulty" class="input-modern text-sm font-bold">
                                            <option value="leicht">🟢 Leicht (3-5 Buchstaben)</option>
                                            <option value="mittel" selected>🟡 Mittel (5-7 Buchstaben)</option>
                                            <option value="schwer">🔴 Schwer (7-10 Buchstaben)</option>
                                            <option value="experte">🟣 Experte (9+ Buchstaben)</option>
                                        </select>
                                        <select id="again-wr-theme" class="input-modern text-sm font-bold">
                                            <option value="schneemann" selected>⛄ Schneemann</option>
                                            <option value="roboter">🤖 Roboter</option>
                                        </select>
                                        <select id="again-wr-rounds" class="input-modern text-sm font-bold">
                                            <option value="3" selected>3 Runden</option>
                                            <option value="5">5 Runden</option>
                                            <option value="8">8 Runden</option>
                                        </select>
                                    ` : `
                                        <select id="again-wordmode" class="input-modern text-sm font-bold">
                                            <option value="kids" ${(data.wordMode || "kids") !== "adult" ? "selected" : ""}>👶 Kinder</option>
                                            <option value="adult" ${data.wordMode === "adult" ? "selected" : ""}>🎓 Erwachsene</option>
                                        </select>
                                        <select id="again-difficulty" class="input-modern text-sm font-bold">
                                            <option value="leicht" ${data.difficulty === "leicht" ? "selected" : ""}>🟢 Leicht (6 Buchstaben, 70 Sek.)</option>
                                            <option value="mittel" ${!data.difficulty || data.difficulty === "mittel" ? "selected" : ""}>🟡 Mittel (7 Buchstaben, ab 3, 55 Sek.)</option>
                                            <option value="schwer" ${data.difficulty === "schwer" ? "selected" : ""}>🔴 Schwer (8 Buchstaben, 40 Sek.)</option>
                                            <option value="experte" ${data.difficulty === "experte" ? "selected" : ""}>🟣 Experte (9 Buchstaben, 30 Sek.)</option>
                                            <option value="profi" ${data.difficulty === "profi" ? "selected" : ""}>🔥 Profi (14 Buchstaben, nur schwere Wörter)</option>
                                        </select>
                                        <select id="again-rounds" class="input-modern text-sm font-bold">
                                            <option value="3" ${String(data.totalRounds) === "3" ? "selected" : ""}>3 Runden</option>
                                            <option value="5" ${!data.totalRounds || String(data.totalRounds) === "5" ? "selected" : ""}>5 Runden</option>
                                            <option value="8" ${String(data.totalRounds) === "8" ? "selected" : ""}>8 Runden</option>
                                        </select>
                                    `}
                                    <button onclick="restartLiveDuel()" class="btn-primary w-full text-center" style="background:var(--gradient-green);box-shadow:0 4px 24px rgba(16,185,129,0.3);">Neue Runde starten 🚀</button>
                                </div>
                                <div class="glass-card p-4 mt-3 space-y-3 text-left" style="border-color:rgba(168,85,247,0.15);">
                                    <p class="text-sm font-black text-purple-300 text-center">🔀 Anderes Spiel starten</p>
                                    <div class="grid grid-cols-4 gap-2">
                                        <button onclick="renderSwitchTypeOptions('quiz')" class="btn-secondary text-xs py-2 px-1">⚔️ Quiz</button>
                                        <button onclick="renderSwitchTypeOptions('scrabble')" class="btn-secondary text-xs py-2 px-1">🔤 Wort</button>
                                        <button onclick="renderSwitchTypeOptions('wortraten')" class="btn-secondary text-xs py-2 px-1">🧩 Rätsel</button>
                                        <button onclick="renderSwitchTypeOptions('vokabel')" class="btn-secondary text-xs py-2 px-1">📚 Vokabeln</button>
                                    </div>
                                    <div id="switch-type-options"></div>
                                </div>`;
            } else {
                html += `<p class="text-xs text-gray-400 font-bold mt-6">Bleib dran – ${sorted.length > 1 ? "die nächste Runde" : "eine neue Runde"} kann gleich starten.</p>`;
            }

            html += `
                            <button onclick="leaveLiveDuel()" class="btn-secondary w-full text-center mt-3 text-sm">⬅ Zurück</button>
                        </div>`;
            document.getElementById("live-duel-result-content").innerHTML = html;

            if (isLiveDuelCreator && data.type === "quiz" && document.getElementById("again-area")) {
                setupCategorySelectors("again-area", "again-category", "spass");
            }

            liveDuelRenderKey = "";
            liveDuelResolvedRoundKey = "";
            renderFamilyHub();
            try { if (typeof confetti === 'function') confetti(); } catch (e) { }
            SFX.win();
        }

        // Zeigt im Endergebnis-Screen die Optionen zum gewählten Spieltyp an
        // (Wortduell/Rätsel/Vokabeln/Quiz), damit man nach einem Online-Spiel
        // in derselben Lobby (gleicher Code, gleiche Mitspieler) ein ANDERES
        // Spiel starten kann statt nur dasselbe zu wiederholen.
        function renderSwitchTypeOptions(type) {
            const box = document.getElementById("switch-type-options");
            if (!box) return;
            let html = "";
            if (type === "quiz") {
                html = `
                    <select id="switch-quiz-area" class="input-modern text-sm font-bold"></select>
                    <select id="switch-quiz-category" class="input-modern text-sm font-bold"></select>
                    <button onclick="restartLiveDuelAsType('quiz')" class="btn-primary w-full text-center" style="background:var(--gradient-green);">⚔️ Quiz starten 🚀</button>`;
                box.innerHTML = html;
                setupCategorySelectors("switch-quiz-area", "switch-quiz-category", "spass");
            } else if (type === "scrabble") {
                html = `
                    <select id="switch-scrabble-wordmode" class="input-modern text-sm font-bold">
                        <option value="kids" selected>👶 Kinder</option>
                        <option value="adult">🎓 Erwachsene</option>
                    </select>
                    <select id="switch-scrabble-difficulty" class="input-modern text-sm font-bold">
                        <option value="leicht">🟢 Leicht</option>
                        <option value="mittel" selected>🟡 Mittel</option>
                        <option value="schwer">🔴 Schwer</option>
                        <option value="experte">🟣 Experte</option>
                        <option value="profi">🔥 Profi</option>
                    </select>
                    <select id="switch-scrabble-rounds" class="input-modern text-sm font-bold">
                        <option value="3">3 Runden</option>
                        <option value="5" selected>5 Runden</option>
                        <option value="8">8 Runden</option>
                    </select>
                    <button onclick="restartLiveDuelAsType('scrabble')" class="btn-primary w-full text-center" style="background:var(--gradient-green);">🔤 Wortduell starten 🚀</button>`;
                box.innerHTML = html;
            } else if (type === "wortraten") {
                html = `
                    <select id="switch-wr-wordmode" class="input-modern text-sm font-bold">
                        <option value="kids" selected>👶 Kinder</option>
                        <option value="adult">🎓 Erwachsene</option>
                    </select>
                    <select id="switch-wr-difficulty" class="input-modern text-sm font-bold">
                        <option value="leicht">🟢 Leicht (3-5 Buchstaben)</option>
                        <option value="mittel" selected>🟡 Mittel (5-7 Buchstaben)</option>
                        <option value="schwer">🔴 Schwer (7-10 Buchstaben)</option>
                        <option value="experte">🟣 Experte (9+ Buchstaben)</option>
                    </select>
                    <select id="switch-wr-theme" class="input-modern text-sm font-bold">
                        <option value="schneemann" selected>⛄ Schneemann</option>
                        <option value="roboter">🤖 Roboter</option>
                    </select>
                    <select id="switch-wr-rounds" class="input-modern text-sm font-bold">
                        <option value="3" selected>3 Runden</option>
                        <option value="5">5 Runden</option>
                        <option value="8">8 Runden</option>
                    </select>
                    <button onclick="restartLiveDuelAsType('wortraten')" class="btn-primary w-full text-center" style="background:var(--gradient-green);">🧩 Wort-Rätsel starten 🚀</button>`;
                box.innerHTML = html;
            } else if (type === "vokabel") {
                html = `
                    <select id="switch-vokabel-dir" class="input-modern font-bold">
                        <option value="de2f">🇩🇪 → Fremdsprache</option>
                        <option value="f2de">Fremdsprache → 🇩🇪</option>
                        <option value="mix" selected>🔀 Gemischt</option>
                    </select>
                    <div id="switch-vokabel-checkboxes" class="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto"></div>
                    <button onclick="restartLiveDuelAsType('vokabel')" class="btn-primary w-full text-center" style="background:var(--gradient-green);">📚 Vokabel-Duell starten 🚀</button>`;
                box.innerHTML = html;
                if (typeof renderVocabGroupCheckboxes === "function") renderVocabGroupCheckboxes("switch-vokabel-checkboxes");
            }
        }

        // Startet in DERSELBEN Lobby (gleicher Raumcode, gleiche Mitspieler)
        // ein Spiel eines ANDEREN Typs, statt nur dieselbe Spielart zu
        // wiederholen. Die Mitspieler bleiben verbunden, weil sie weiter auf
        // dasselbe Firestore-Dokument (liveDuelRef) hören.
        async function restartLiveDuelAsType(newType) {
            if (!liveDuelRef || !isLiveDuelCreator) return;
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
                players[k].answerStreak = 0;
                players[k].submittedLetters = [];
                players[k].submittedRequired = "";
                players[k].submittedSolution = "";
            });

            let update;
            try {
                if (newType === "scrabble") {
                    const wordMode = (document.getElementById("switch-scrabble-wordmode") || {}).value || "kids";
                    const difficulty = (document.getElementById("switch-scrabble-difficulty") || {}).value || "mittel";
                    const totalRounds = parseInt((document.getElementById("switch-scrabble-rounds") || {}).value) || 5;
                    liveDuelUsedWords = new Set();
                    const rack = generateScrabbleRack(difficulty, false, wordMode);
                    update = {
                        type: "scrabble", subject: null, status: "playing", difficulty, totalRounds,
                        currentRound: 1, requireLetter: false, wordMode,
                        answerSeconds: SCRABBLE_ANSWER_SECONDS[difficulty] || 20,
                        currentLetters: rack.letters, currentSolution: rack.solution, currentRequired: rack.required || "",
                        answerDeadline: null, players, review: []
                    };
                } else if (newType === "wortraten") {
                    const wordMode = (document.getElementById("switch-wr-wordmode") || {}).value || "kids";
                    const difficulty = (document.getElementById("switch-wr-difficulty") || {}).value || "mittel";
                    const theme = (document.getElementById("switch-wr-theme") || {}).value || "schneemann";
                    const totalRounds = parseInt((document.getElementById("switch-wr-rounds") || {}).value) || 3;
                    const order = Object.keys(players);
                    const round = wrLiveNewRoundFields({ wordMode, difficulty, usedWords: [] });
                    if (!round.word) return showToast("Keine passenden Wörter für diese Einstellungen gefunden.", "error");
                    update = {
                        type: "wortraten", subject: null, status: "playing", wordMode, difficulty, theme, totalRounds,
                        currentRound: 1, turnIndex: 0, order, players, word: round.word, guessed: [], wrongCount: 0,
                        roundOver: false, roundSolved: false, usedWords: [round.word]
                    };
                } else if (newType === "vokabel") {
                    const checked = Array.from(document.querySelectorAll("#switch-vokabel-checkboxes .vokabel-group-check:checked")).map(cb => cb.value);
                    if (checked.length === 0) return showToast("Bitte mindestens eine Vokabelgruppe auswählen!", "error");
                    const dir = (document.getElementById("switch-vokabel-dir") || {}).value || "mix";
                    const questions = prepareQuestions(
                        buildVocabTestQuestions(checked, dir).sort(() => Math.random() - 0.5).slice(0, 10)
                    );
                    if (questions.length < 3) return showToast("Zu wenige Vokabeln für diese Auswahl!", "error");
                    update = {
                        type: "quiz", subject: "vokabel", vocabGroups: checked, vocabDir: dir, status: "playing",
                        questions, currentIndex: 0, answerDeadline: null, correctAnswer: null, players, review: []
                    };
                } else {
                    const category = (document.getElementById("switch-quiz-category") || {}).value;
                    if (!category) return showToast("Bitte ein Thema wählen!", "error");
                    const questions = prepareQuestions(
                        questionsForKey(category).sort(() => Math.random() - 0.5).slice(0, 10)
                    );
                    if (questions.length < 3) return showToast("Zu wenige Fragen für dieses Thema!", "error");
                    update = {
                        type: "quiz", subject: null, category, status: "playing", questions, currentIndex: 0,
                        answerDeadline: null, correctAnswer: null, players, review: []
                    };
                }
                await liveDuelRef.update(update);
                liveDuelType = newType;
                liveDuelResolving = false;
                liveDuelRenderKey = "";
                liveDuelResolvedRoundKey = "";
                SFX.tap();
                showToast("Neues Spiel gestartet – alle sind dabei! 🚀");
            } catch (e) {
                handleError("restartLiveDuelAsType", e, "Das neue Spiel konnte nicht gestartet werden.");
            }
        }

        async function leaveLiveDuel(force) {
            if (liveDuelRef && typeof confirmLeaveGame === "function") {
                const ok = await confirmLeaveGame({
                    force: force === true,
                    text: isLiveDuelCreator
                        ? "Spiel endet für alle."
                        : "Fortschritt geht verloren."
                });
                if (!ok) return;
            }
            stopLiveDuelActionMode();
            clearLiveDuelTimers();
            stopHostHeartbeat();
            const ref = liveDuelRef;
            const wasCreator = isLiveDuelCreator;
            const meName = (currentPlayer && currentPlayer.name) || "";

            if (liveDuelUnsubscribe) { try { liveDuelUnsubscribe(); } catch (e) { } }
            liveDuelUnsubscribe = null;
            liveDuelRef = null;
            isLiveDuelCreator = false;
            liveDuelResolving = false;
            liveDuelRenderKey = "";
            liveDuelResolvedRoundKey = "";
            switchView(currentPlayer ? 'menu' : 'family-hub');

            if (typeof vergissLobby === "function") vergissLobby();

            if (!ref) return;
            try {
                if (wasCreator) {
                    try {
                        await ref.set({
                            status: "finished",
                            lastEvent: { type: "host_ended", name: meName, ts: Date.now() }
                        }, { merge: true });
                    } catch (e) { }
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
                    await ref.update({
                        players: players,
                        updatedAt: Date.now(),
                        lastEvent: { type: "left", name: meName || (data.players[activePlayerKey] && data.players[activePlayerKey].name) || "", ts: Date.now() }
                    });
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

        // Beim Wechsel auf ein Profil prüfen, ob dieses Kind noch in einem
        // laufenden Duell steht – und es aktiv anbieten, statt darauf zu
        // hoffen, dass die Liste im Menü entdeckt wird.
        async function biteWiedereinstiegAn() {
            if (!currentParentUser || !activePlayerKey || typeof appConfirm !== "function") return;
            if (liveDuelRef) return; // schon mittendrin
            try {
                const snap = await liveDuelCollectionRef().get();
                let treffer = null;
                const now = Date.now();
                snap.forEach(docSnap => {
                    if (treffer) return;
                    const d = docSnap.data() || {};
                    if (d.status === "finished") return;
                    // waiting + playing + reveal: nach Absturz/Reload wieder rein
                    const ich = d.players && d.players[activePlayerKey];
                    if (!ich) return;
                    const hostAlive = (now - (d.hostLastSeen || d.createdAt || 0)) < 90000;
                    const selfRecent = ich.lastSeen && (now - ich.lastSeen) < 15 * 60 * 1000;
                    if (hostAlive || selfRecent) treffer = docSnap;
                });
                if (!treffer) return;

                const d = treffer.data() || {};
                const name = d.subject === "vokabel" ? "Vokabel-Duell"
                    : d.type === "scrabble" ? "Wort-Duell"
                        : d.type === "wortraten" ? "Wort-Rätsel" : "Quiz-Duell";
                const mid = (d.status === "playing" || d.status === "reveal");
                const ok = await appConfirm(
                    mid ? `${name} läuft noch. Weiterspielen?` : `${name} wartet. Zurück in die Lobby?`,
                    { titel: "Wieder einsteigen?", icon: "🔄", okText: "Ja", abbrechenText: "Nein" }
                );
                if (!ok) return;
                joinLiveDuelById(treffer.id);
            } catch (e) { /* kein Netz oder keine Rechte – dann eben nicht */ }
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
                const isVokabel = d.subject === "vokabel";
                const icon = isVokabel ? "📚" : d.type === "scrabble" ? "🔤" : d.type === "wortraten" ? "🧩" : "⚔️";
                const typeName = isVokabel ? "Vokabel-Duell" : d.type === "scrabble" ? "Wort-Duell" : d.type === "wortraten" ? "Wort-Rätsel" : "Quiz-Duell";
                const who = esc(d.createdByName || "jemandem");
                const state = running ? "läuft – einsteigen" : "offen – beitreten";
                // Nicht den eigenen Host benachrichtigen
                const binHost = d.createdBy && activePlayerKey && d.createdBy === activePlayerKey;
                if (!binHost && typeof showDuelNotification === "function") {
                    showDuelNotification(
                        icon + " " + typeName,
                        "von " + (d.createdByName || "Familie") + " – " + state,
                        "duel:" + docSnap.id + ":" + (d.status || ""),
                        "#spielen"
                    );
                }
                html += `<button onclick="joinLiveDuelById('${docSnap.id}')" class="w-full p-5 glass-card text-white font-black rounded-2xl shadow-lg flex items-center justify-between gap-3 text-base transition-all border-2 ${running ? "border-amber-400/40" : "border-indigo-400/50 animate-pulse"}" style="min-height:4.5rem;">
                                <span class="flex items-center gap-3 text-left"><span class="text-3xl">${icon}</span><span><span class="block">${typeName}</span><span class="block text-xs font-bold text-gray-400">von ${who}</span></span></span>
                                <span class="text-xs text-indigo-200 shrink-0 text-right font-bold">🔥 ${state}<br>(${count} dabei)</span>
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
            const typeName = d.mode === "scrabble" ? "TV-Wort-Duell" : d.mode === "wortraten" ? "TV-Wort-Rätsel" : "TV-Quiz";
            if (typeof showDuelNotification === "function") {
                showDuelNotification("📺 " + typeName, "TV-Lobby ist offen – beitreten?", "tv:" + (d.createdAt || "open"), "#spielen");
            }
            const count = d.players ? Object.keys(d.players).length : 0;
            box.innerHTML =
                `<button onclick="switchView('tv-quiz-player');joinTVGame()" class="w-full p-5 glass-card border-2 border-indigo-400/50 animate-pulse text-white font-black rounded-2xl shadow-lg flex items-center justify-between gap-3 text-base transition-all" style="min-height:4.5rem;">
                                <span class="flex items-center gap-3 text-left"><span class="text-3xl">📺</span><span><span class="block">${typeName}</span><span class="block text-xs font-bold text-gray-400">am Fernseher</span></span></span>
                                <span class="text-xs text-indigo-200 shrink-0 text-right font-bold">🔥 offen – beitreten<br>(${count} dabei)</span>
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
            } else if (liveDuelType === "wortraten") {
                const wordMode = (document.getElementById("live-duel-wr-wordmode") || {}).value || "kids";
                const difficulty = (document.getElementById("live-duel-wr-difficulty") || {}).value || "mittel";
                const theme = (document.getElementById("live-duel-wr-theme") || {}).value || "schneemann";
                const totalRounds = parseInt((document.getElementById("live-duel-wr-rounds") || {}).value || "3");
                lobbyData = {
                    type: "wortraten",
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
            } else if (liveDuelType === "vokabel") {
                const checked = Array.from(document.querySelectorAll(
                    "#live-duel-vokabel-checkboxes .vokabel-group-check:checked")).map(cb => cb.value);
                if (checked.length === 0) return showToast("Bitte mindestens eine Vokabelgruppe auswählen!", "error");
                const vocabDir = (document.getElementById("live-duel-vokabel-dir") || {}).value || "mix";
                const mode = (document.getElementById("live-duel-vokabel-mode") || {}).value || "versus";
                const qCount = parseInt((document.getElementById("live-duel-count") || {}).value) || 10;
                const questions = prepareQuestions(buildVocabTestQuestions(checked, vocabDir).sort(() => Math.random() - 0.5).slice(0, qCount));
                if (questions.length < 3) return showToast("Zu wenige Vokabeln für diese Auswahl!", "error");
                lobbyData = {
                    type: "quiz",
                    subject: "vokabel",
                    mode,
                    vocabGroups: checked,
                    vocabDir,
                    status: "waiting",
                    questions,
                    currentIndex: 0,
                    answerSeconds: parseInt((document.getElementById("live-duel-vokabel-speed") || {}).value) || 20,
                    createdBy: activePlayerKey,
                    players: {}
                };
            } else {
                // Quiz-Modus
                const category = document.getElementById("live-duel-category").value;
                const questions = prepareQuestions(questionsForKey(category).sort(() => Math.random() - 0.5).slice(0, (parseInt((document.getElementById("live-duel-count") || {}).value) || 10)));
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
                liveDuelResolvedRoundKey = "";
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
            } else if (liveDuelType === "wortraten") {
                liveDuelRef.get().then(doc => {
                    const data = doc.data();
                    const players = data.players;
                    Object.keys(players).forEach(k => { players[k].pending = false; players[k].answerStreak = 0; });
                    const order = (data.order && data.order.length ? data.order : Object.keys(players));
                    const round = wrLiveNewRoundFields(data);
                    if (!round.word) { showToast("Keine passenden Wörter für diese Einstellungen gefunden.", "error"); return; }
                    liveDuelRef.update({
                        status: "playing",
                        currentRound: 1,
                        turnIndex: 0,
                        order,
                        players,
                        word: round.word,
                        guessed: [],
                        wrongCount: 0,
                        roundOver: false,
                        roundSolved: false,
                        usedWords: [round.word]
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
                players[k].answerStreak = 0;
            });

            try {
                if (data.type === "wortraten") {
                    const wordMode = (document.getElementById("again-wr-wordmode") || {}).value || data.wordMode || "kids";
                    const difficulty = (document.getElementById("again-wr-difficulty") || {}).value || data.difficulty || "mittel";
                    const theme = (document.getElementById("again-wr-theme") || {}).value || data.theme || "schneemann";
                    const totalRounds = parseInt((document.getElementById("again-wr-rounds") || {}).value) || data.totalRounds || 3;
                    const order = (data.order && data.order.length ? data.order : Object.keys(players));
                    const round = wrLiveNewRoundFields({ wordMode, difficulty, usedWords: [] });
                    if (!round.word) return showToast("Keine passenden Wörter für diese Einstellungen gefunden.", "error");
                    await liveDuelRef.update({
                        status: "playing",
                        wordMode,
                        difficulty,
                        theme,
                        totalRounds,
                        currentRound: 1,
                        turnIndex: 0,
                        order,
                        players,
                        word: round.word,
                        guessed: [],
                        wrongCount: 0,
                        roundOver: false,
                        roundSolved: false,
                        usedWords: [round.word]
                    });
                } else if (data.type === "scrabble") {
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
                } else if (data.subject === "vokabel" && Array.isArray(data.vocabGroups) && data.vocabGroups.length) {
                    const questions = prepareQuestions(
                        buildVocabTestQuestions(data.vocabGroups, data.vocabDir || "mix")
                        .sort(() => Math.random() - 0.5).slice(0, (parseInt((document.getElementById("live-duel-count") || {}).value) || 10))
                    );
                    if (questions.length < 3) return showToast("Zu wenige Vokabeln für diese Auswahl!", "error");
                    await liveDuelRef.update({
                        status: "playing",
                        questions,
                        currentIndex: 0,
                        answerDeadline: null,
                        correctAnswer: null,
                        players,
                        review: []
                    });
                } else {
                    const catSel = document.getElementById("again-category");
                    const category = (catSel && catSel.value) ? catSel.value : data.category;
                    const questions = prepareQuestions(
                        questionsForKey(category).sort(() => Math.random() - 0.5).slice(0, (parseInt((document.getElementById("live-duel-count") || {}).value) || 10))
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
                liveDuelResolvedRoundKey = "";
                SFX.tap();
                showToast("Neue Runde gestartet – alle sind dabei! 🚀");
            } catch (e) {
                handleError("restartLiveDuel", e, "Die neue Runde konnte nicht gestartet werden.");
            }
        };

        // Duplikat entfernt (08.08.2026): hier stand eine zweite, überschreibende
        // leaveLiveDuel-Definition, die die erste (oben) zur Laufzeit stillschweigend
        // ersetzt hat. Dadurch endete das Spiel beim Verlassen des Gastgebers nicht
        // mehr für alle (nur Host-Übergabe) und es kam nie das "hat das Spiel beendet"-
        // Event – im Widerspruch zum Bestätigungsdialog ("Spiel endet für alle.").
        // Die nötigen Ergänzungen (Action-Mode stoppen, Lobby vergessen) sind jetzt
        // in der einen verbleibenden Definition oben enthalten.

