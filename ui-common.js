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
        const FEEDBACK_WHATSAPP = "491778744183";
        let feedbackReturnView = "menu";

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
            switchView("feedback");
            if (textField) setTimeout(() => textField.focus(), 150);
        }

        function buildFeedbackText() {
            const type = document.getElementById("feedback-type").value;
            const name = cleanInput(document.getElementById("feedback-name").value, 24);
            const text = cleanInput(document.getElementById("feedback-text").value, 1500);
            if (!text) return null;
            const info = `\n\n---\nApp: EduPlay Hub\nGerät: ${navigator.userAgent}\nZeit: ${new Date().toLocaleString("de-DE")}`;
            return {
                subject: `EduPlay Feedback: ${type}`,
                body: `Art: ${type}\nVon: ${name || "anonym"}\n\n${text}${info}`
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
            try {
                if (channel === "whatsapp") {
                    const url =
                        `https://wa.me/${FEEDBACK_WHATSAPP}?text=${encodeURIComponent(msg.subject + "\n\n" + msg.body)}`;
                    window.open(url, "_blank");
                } else {
                    window.location.href =
                        `mailto:${FEEDBACK_MAIL}?subject=${encodeURIComponent(msg.subject)}&body=${encodeURIComponent(msg.body)}`;
                }
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
        function startFocusTimer() {
            if (!focusTimerInterval) {
                focusTimerInterval = setInterval(() => {
                    if (focusTimeRemaining > 0) {
                        focusTimeRemaining--;
                        const mins = Math.floor(focusTimeRemaining / 60);
                        const secs = focusTimeRemaining % 60;
                        document.getElementById("timer-display").innerText = mins + ":" + String(secs).padStart(2,
                            '0');
                    } else {
                        clearInterval(focusTimerInterval);
                        focusTimerInterval = null;
                        SFX.timeUp();
                        addXP(20);
                        showToast("Zeit um! +20 Coins");
                        focusTimeRemaining = 15 * 60;
                        document.getElementById("timer-display").innerText = "15:00";
                    }
                }, 1000);
            }
        }

        function resetFocusTimer() {
            clearInterval(focusTimerInterval);
            focusTimerInterval = null;
            focusTimeRemaining = 15 * 60;
            document.getElementById("timer-display").innerText = "15:00";
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

