        // ============================================================
        //  DRAWER LOGIK
        // ============================================================
        function openDrawer() {
            if (typeof SFX !== 'undefined') SFX.tap();

            // Prüfen, welcher Header gerade aktiv ist
            const isFamilyHub = !document.getElementById('header-familyhub').classList.contains('hidden');

            // Den richtigen Drawer auswählen
            let activeDrawer;
            if (isFamilyHub) {
                activeDrawer = document.getElementById('drawer-familyhub');
            } else {
                activeDrawer = document.getElementById('drawer-menu');
            }

            // Cooler Stagger-Effekt: Menüpunkte des AKTIVEN Drawers fliegen nacheinander ein
            const items = activeDrawer.querySelectorAll('.drawer-menu-item');
            items.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.05}s`;
            });

            // Den ausgewählten Drawer und den Hintergrund einblenden
            activeDrawer.classList.add('open');
            document.getElementById("drawer-backdrop").classList.add("open");
        }

        function closeDrawer() {
            // Wir schließen einfach sicherheitshalber beide Drawer
            document.getElementById('drawer-familyhub').classList.remove('open');
            document.getElementById('drawer-menu').classList.remove('open');
            document.getElementById("drawer-backdrop").classList.remove("open");
        }

        // Drawer mit Escape-Taste schließen
        document.addEventListener("keydown", e => {
            if (e.key === "Escape") closeDrawer();
        });


        // ============================================================
        //  FEEDBACK
        // ============================================================
        const FEEDBACK_MAIL = "cu.oezdemir@gmail.com";
        let feedbackReturnView = "menu";
        let appRatingStars = 0;

        function setAppRating(n) {
            appRatingStars = Math.max(0, Math.min(5, parseInt(n, 10) || 0));
            try { localStorage.setItem("eduplayRating", String(appRatingStars)); } catch (e) { }
            document.querySelectorAll(".app-rating-star").forEach(btn => {
                const s = parseInt(btn.getAttribute("data-stars"), 10);
                btn.classList.toggle("is-on", s <= appRatingStars);
            });
            const label = document.getElementById("app-rating-label");
            if (label) {
                label.textContent = appRatingStars
                    ? (appRatingStars + " von 5 Sternen")
                    : "Tippe auf die Sterne";
            }
        }

        function openAppRating(returnView) {
            openFeedback(returnView || "menu");
            const typeSel = document.getElementById("feedback-type");
            if (typeSel) typeSel.value = "Bewertung";
            let saved = 0;
            try { saved = parseInt(localStorage.getItem("eduplayRating") || "0", 10) || 0; } catch (e) { }
            setAppRating(saved || 5);
            const textField = document.getElementById("feedback-text");
            if (textField && !textField.value.trim()) {
                textField.value = "Meine Bewertung: ";
                const c = document.getElementById("feedback-counter");
                if (c) c.innerText = textField.value.length;
            }
        }

        function openFeedback(returnView) {
            feedbackReturnView = returnView || "menu";
            const nameField = document.getElementById("feedback-name");
            const textField = document.getElementById("feedback-text");
            const hint = document.getElementById("feedback-hint");
            if (nameField && currentPlayer && !nameField.value) nameField.value = currentPlayer.name || "";
            if (hint) hint.classList.add("hidden");
            if (textField) {
                textField.oninput = () => {
                    const c = document.getElementById("feedback-counter");
                    if (c) c.innerText = textField.value.length;
                };
            }
            let saved = 0;
            try { saved = parseInt(localStorage.getItem("eduplayRating") || "0", 10) || 0; } catch (e) { }
            setAppRating(saved);
            switchView("feedback");
            if (textField) setTimeout(() => textField.focus(), 150);
        }

        // "Melden"-Button an einer laufenden Frage: öffnet dasselbe
        // Feedback-Formular wie sonst, aber mit Typ "Frage" und Frage-ID/Text
        // schon eingetragen - spart Tippen und macht das Melden eindeutig
        // zuordenbar (statt frei beschriebenem Fließtext).
        function reportCurrentQuestion() {
            const q = (typeof currentQuestions !== "undefined" && typeof qIndex !== "undefined")
                ? currentQuestions[qIndex] : null;
            openFeedback('quiz');
            const typeSel = document.getElementById("feedback-type");
            if (typeSel) typeSel.value = "Frage";
            const textField = document.getElementById("feedback-text");
            if (textField && q) {
                textField.value = `Frage-ID: ${q.id || "?"} (${q.category || "?"})\nFrage: "${q.question}"\n\nWas stimmt nicht: `;
                const c = document.getElementById("feedback-counter");
                if (c) c.innerText = textField.value.length;
                setTimeout(() => {
                    textField.focus();
                    textField.setSelectionRange(textField.value.length, textField.value.length);
                }, 160);
            }
        }

        function buildFeedbackText() {
            const type = document.getElementById("feedback-type").value;
            const name = cleanInput(document.getElementById("feedback-name").value, 24);
            const text = cleanInput(document.getElementById("feedback-text").value, 1500);
            if (!text && !appRatingStars) return null;
            const ratingLine = appRatingStars ? `Bewertung: ${appRatingStars}/5 Sterne\n` : "";
            const bodyText = text || "(nur Sterne)";
            const info = `\n\n---\nApp: EduPlay Hub\nGerät: ${navigator.userAgent}\nZeit: ${new Date().toLocaleString("de-DE")}`;
            return {
                subject: `EduPlay Feedback: ${type}${appRatingStars ? " " + appRatingStars + "/5" : ""}`,
                body: `Art: ${type}\n${ratingLine}Von: ${name || "anonym"}\n\n${bodyText}${info}`
            };
        }

        function sendFeedback(channel) {
            const hint = document.getElementById("feedback-hint");
            const msg = buildFeedbackText();
            if (!msg) {
                if (hint) {
                    hint.innerText = "Bitte schreib noch kurz, worum es geht.";
                    hint.classList.remove("hidden");
                }
                return;
            }
            if (hint) hint.classList.add("hidden");
            SFX.tap();
            if (channel === "app") {
                const type = document.getElementById("feedback-type").value;
                const name = cleanInput(document.getElementById("feedback-name").value, 24);
                const text = cleanInput(document.getElementById("feedback-text").value, 1500);
                db.collection("feedback").add({
                    type: type,
                    name: name || null,
                    text: text,
                    bewertung: appRatingStars || null,
                    familyUid: (typeof currentParentUser !== "undefined" && currentParentUser) ? currentParentUser.uid : null,
                    spieler: (typeof currentPlayer !== "undefined" && currentPlayer) ? currentPlayer.name : null,
                    geraet: navigator.userAgent,
                    erstellt: firebase.firestore.FieldValue.serverTimestamp()
                }).then(function () {
                    document.getElementById("feedback-text").value = "";
                    const c = document.getElementById("feedback-counter");
                    if (c) c.innerText = "0";
                    const go = function () { switchView(feedbackReturnView); };
                    if (typeof appAlert === "function") {
                        Promise.resolve(appAlert("Dein Feedback ist angekommen. Danke – wir schauen uns das an.", {
                            titel: "📮 Geschickt",
                            icon: "📮",
                            okText: "Super"
                        })).then(go).catch(go);
                    } else {
                        showToast("📮 Danke! Feedback wurde geschickt.", "success");
                        go();
                    }
                }).catch(function (e) {
                    handleError("sendFeedback", e, "Das Senden hat nicht geklappt. Schreib uns gern direkt an " +
                        FEEDBACK_MAIL + ".");
                });
                return;
            }
            try {
                window.location.href =
                    `mailto:${FEEDBACK_MAIL}?subject=${encodeURIComponent(msg.subject)}&body=${encodeURIComponent(msg.body)}`;
                document.getElementById("feedback-text").value = "";
                const c = document.getElementById("feedback-counter");
                if (c) c.innerText = "0";
            } catch (e) {
                handleError("sendFeedback", e, "Das Senden hat nicht geklappt. Schreib uns gern direkt an " +
                    FEEDBACK_MAIL + ".");
            }
        }

        // ============================================================
        //  BELOHNUNGEN SHOP
        // ============================================================
        function renderRewardsShop() {
            if (!currentPlayer) return;
            document.getElementById("rewards-coin-balance").innerText = currentPlayer.coins || 0;
            const list = document.getElementById("rewards-list");
            if (!list) return;
            const rewards = familyRewards || [];
            list.innerHTML = rewards.length === 0 ?
                `<p class="text-xs text-gray-500">Deine Eltern haben noch keine Belohnungen eingerichtet.</p>` :
                rewards.map(r => `
                            <div class="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl p-3">
                                <div>
                                    <div class="font-bold text-white">${esc(r.name)}</div>
                                    <div class="text-xs text-yellow-400 font-bold">🪙 ${r.cost} Coins</div>
                                </div>
                                <button onclick="redeemReward('${r.id}')" class="btn-primary text-sm py-2 px-4 ${(currentPlayer.coins || 0) < r.cost ? 'opacity-40 cursor-not-allowed' : ''}" ${(currentPlayer.coins || 0) < r.cost ? 'disabled' : ''}>
                                    Einlösen
                                </button>
                            </div>
                        `).join('');
        }

        async function redeemReward(id) {
            const r = familyRewards.find(x => x.id === id);
            if (!r || !currentPlayer || (currentPlayer.coins || 0) < r.cost) return;
            if (!(await appConfirm(`"${r.name}" kostet ${r.cost} Coins. Jetzt einlösen?`, {
                titel: "Belohnung einlösen", icon: "🎁", okText: "Einlösen"
            }))) return;
            currentPlayer.coins -= r.cost;
            if (!currentPlayer.redeemedRewards) currentPlayer.redeemedRewards = [];
            currentPlayer.redeemedRewards.unshift({ name: r.name, cost: r.cost, date: new Date().toISOString() });
            currentPlayer.redeemedRewards = currentPlayer.redeemedRewards.slice(0, 20);
            savePlayerProgress();
            updateMenuGamification();
            SFX.coin();
            showToast(`🎉 "${esc(r.name)}" eingelöst! Zeig das deinen Eltern.`, "success");
            renderRewardsShop();
        }

        // ============================================================
        //  FOKUS TIMER
        // ============================================================
        let focusDurationMin = 15;
        let focusPausedByHide = false;
        let focusVisibilityBound = false;
        // Anti-Schummel: zählt, wie oft während EINES Laufs die App verlassen
        // wurde. Zeit, die man weg war, zählt (wie bisher) nicht mit - wer es
        // aber übertreibt, bekommt am Ende weniger Belohnung statt die volle.
        let focusPauseCount = 0;

        // Multiplikator statt fixer Werte: längere Fokus-Zeit lohnt sich
        // überproportional mehr (Anreiz, nicht nur die kurze Zeit zu wählen).
        function focusMultiplier(mins) {
            if (mins >= 25) return 2;
            if (mins >= 15) return 1.5;
            return 1.2;
        }
        function focusRewardCoins(mins) {
            return Math.round(mins * focusMultiplier(mins));
        }

        function setFocusDuration(mins) {
            if (focusTimerInterval) return showToast("Zuerst Reset, dann Zeit wählen.", "error");
            mins = Math.max(1, Math.min(180, parseInt(mins, 10) || 15));
            focusDurationMin = mins;
            focusTimeRemaining = mins * 60;
            const el = document.getElementById("timer-display");
            if (el) el.innerText = mins + ":00";
            const custom = document.getElementById("fokus-custom-min");
            if (custom) custom.value = String(mins);
            const hint = document.getElementById("fokus-reward-hint");
            if (hint) hint.innerText = "Belohnung: +" + focusRewardCoins(mins) + " Coins (" + focusMultiplier(mins) + "× Multiplikator)";
            [5, 10, 15, 25, 45].forEach(m => {
                const btn = document.getElementById("fokus-dur-" + m);
                if (!btn) return;
                if (m === mins) {
                    btn.className = "btn-primary text-sm py-2 px-3";
                    btn.style.background = "var(--gradient-green)";
                } else {
                    btn.className = "btn-secondary text-sm py-2 px-3";
                    btn.style.background = "";
                }
            });
            if (typeof SFX !== "undefined") SFX.tap();
        }

        function updateFocusDisplay() {
            const mins = Math.floor(focusTimeRemaining / 60);
            const secs = focusTimeRemaining % 60;
            const el = document.getElementById("timer-display");
            if (el) el.innerText = mins + ":" + String(secs).padStart(2, "0");
        }

        function bindFocusVisibility() {
            if (focusVisibilityBound) return;
            focusVisibilityBound = true;
            document.addEventListener("visibilitychange", () => {
                if (!focusTimerInterval) return;
                const status = document.getElementById("fokus-status");
                if (document.hidden) {
                    clearInterval(focusTimerInterval);
                    focusTimerInterval = null;
                    focusPausedByHide = true;
                    focusPauseCount++;
                    if (status) {
                        status.classList.remove("hidden");
                        status.innerText = "⏸️ Pausiert – App wieder öffnen zum Fortsetzen.";
                        status.classList.add("text-amber-400");
                    }
                    showToast("Fokus pausiert (App verlassen).", "error");
                } else if (focusPausedByHide) {
                    focusPausedByHide = false;
                    if (status) {
                        status.innerText = "App im Vordergrund lassen – sonst pausiert der Timer.";
                        status.classList.remove("text-amber-400");
                    }
                    startFocusTimer(true);
                    showToast("Fokus weiter.", "success");
                }
            });
        }

        function startFocusTimer(resume) {
            if (focusTimerInterval) return;
            bindFocusVisibility();
            const status = document.getElementById("fokus-status");
            if (status) status.classList.remove("hidden");
            if (!resume) {
                focusTimeRemaining = focusDurationMin * 60;
                focusPauseCount = 0;
                updateFocusDisplay();
            }
            focusTimerInterval = setInterval(() => {
                if (focusTimeRemaining > 0) {
                    focusTimeRemaining--;
                    updateFocusDisplay();
                } else {
                    clearInterval(focusTimerInterval);
                    focusTimerInterval = null;
                    focusPausedByHide = false;
                    if (typeof SFX !== "undefined") SFX.timeUp();
                    let coins = focusRewardCoins(focusDurationMin);
                    let malus = "";
                    // Anti-Schummel: mehr als 2× die App verlassen -> nur halbe Belohnung.
                    if (focusPauseCount > 2) {
                        coins = Math.max(1, Math.round(coins / 2));
                        malus = " (App zu oft verlassen – nur halbe Belohnung)";
                    }
                    if (typeof addXP === "function") addXP(coins);
                    else if (currentPlayer) {
                        currentPlayer.coins = (currentPlayer.coins || 0) + coins;
                        if (typeof savePlayerProgress === "function") savePlayerProgress();
                    }
                    showToast("Zeit um! +" + coins + " Coins 🎉" + malus, "success");
                    focusTimeRemaining = focusDurationMin * 60;
                    focusPauseCount = 0;
                    updateFocusDisplay();
                    if (status) status.classList.add("hidden");
                }
            }, 1000);
        }

        function resetFocusTimer() {
            clearInterval(focusTimerInterval);
            focusTimerInterval = null;
            focusPausedByHide = false;
            focusPauseCount = 0;
            focusTimeRemaining = focusDurationMin * 60;
            updateFocusDisplay();
            const status = document.getElementById("fokus-status");
            if (status) status.classList.add("hidden");
        }

        // ============================================================
        //  PUNKTE-BONUS & POPUP (gemeinsam für Quiz/Duell/Wort-Rätsel/Scrabble/Vokabeln)
        // ============================================================

        // Bonus für Serien (Streak) und Schnelligkeit (zuerst richtig geantwortet).
        // Gibt { bonus, parts } zurück – parts sind kurze Labels fürs Popup.
        function calcAnswerBonus(streak, isFirst) {
            let bonus = 0;
            const parts = [];
            streak = streak || 0;
            if (streak >= 2) {
                bonus += Math.min(streak - 1, 3);
                parts.push(`🔥 Serie ×${streak}`);
            }
            if (isFirst) {
                bonus += 2;
                parts.push("⚡ Zuerst!");
            }
            return { bonus, parts };
        }

        // Zeigt eine kurze "+X Punkte"-Animation. Ohne container erscheint sie fest
        // mittig auf dem Bildschirm, mit container relativ darin (z.B. Vokabel-Box).
        function showPointsPopup(amount, detail, container) {
            if (!amount) return;
            const useFixed = !container;
            const parent = useFixed ? document.body : container;
            if (!parent) return;
            const wrap = document.createElement("div");
            wrap.className = "points-popup" + (useFixed ? " points-popup-fixed" : "");
            wrap.innerHTML = `<div class="points-popup-amount">+${amount}</div>` +
                (detail ? `<div class="points-popup-detail">${esc(String(detail))}</div>` : "");
            if (!useFixed && getComputedStyle(parent).position === "static") {
                parent.style.position = "relative";
            }
            parent.appendChild(wrap);
            requestAnimationFrame(() => wrap.classList.add("show"));
            setTimeout(() => {
                wrap.classList.remove("show");
                wrap.classList.add("hide");
                setTimeout(() => wrap.remove(), 450);
            }, 900);
        }

