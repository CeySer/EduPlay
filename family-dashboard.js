        // ============================================================
        //  AUTH
        // ============================================================
        function registerParent() {
            const e = document.getElementById("auth-email").value;
            const p = document.getElementById("auth-password").value;
auth.createUserWithEmailAndPassword(e, p)
                .then((cred) => cred.user.sendEmailVerification()
                    .then(() => showToast("Account erstellt! Wir haben dir eine Bestätigungsmail geschickt 📧", "success"))
                    .catch(() => showToast("Account erstellt – die Bestätigungsmail ging leider nicht raus.", "error")))
                .catch(e => showToast(e.message, "error"));
                    }

        function loginParent() {
            const e = document.getElementById("auth-email").value;
            const p = document.getElementById("auth-password").value;
            auth.signInWithEmailAndPassword(e, p)
                .catch(() => showToast("Falsche Daten", "error"));
        }

        function logoutParent() {
            window.__eduplayDashUnlocked = false;
            auth.signOut();
        }

        function loginWithGoogle() {
            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider)
                .catch(err => showToast(err.message, "error"));
        }

        function resetPassword() {
            const e = document.getElementById("auth-email").value.trim();
            if (!e) { showToast("Bitte zuerst E-Mail eintragen", "error"); return; }
            auth.sendPasswordResetEmail(e)
                .then(() => showToast("E-Mail zum Zurücksetzen verschickt 📧", "success"))
                .catch(err => showToast(err.message, "error"));
        }

        function togglePasswordVisibility(inputId, btnId) {
            const input = document.getElementById(inputId);
            const btn = btnId ? document.getElementById(btnId) : null;
            if (!input) return;
            const show = input.type === "password";
            input.type = show ? "text" : "password";
            if (btn) {
                btn.textContent = show ? "🙈" : "👁";
                btn.setAttribute("aria-label", show ? "Passwort verbergen" : "Passwort anzeigen");
                btn.title = show ? "Passwort verbergen" : "Passwort anzeigen";
            }
        }

        // ------------------------------------------------------------
        //  GAST-BEITRITT (ohne Konto)
        //  Meldet anonym bei Firebase an. Der Gast bekommt kein
        //  Familienprofil und schreibt nichts in die Familiendaten –
        //  er existiert nur in der Online-Lobby, der er per Code
        //  beitritt. Nach dem Verlassen ist alles weg.
        // ------------------------------------------------------------
        function loginAsGuest() {
            auth.signInAnonymously()
                .catch(err => {
                    const code = String((err && err.code) || "");
                    if (code.indexOf("operation-not-allowed") !== -1) {
                        showToast("Gast-Beitritt ist in Firebase noch nicht freigeschaltet (Authentication → Anmeldemethode → Anonym).", "error");
                    } else {
                        showToast((err && err.message) || "Gast-Beitritt hat nicht geklappt.", "error");
                    }
                });
        }

        function startGuestSession() {
            isAnonGuest = true;
            ALL_PROFILES = {};
            currentPlayer = null;
            activePlayerKey = null;
            familyRewards = [];
            testTemplates = [];
            adminPin = null;
            const codeInp = document.getElementById("guest-code");
            if (codeInp) codeInp.value = "";
            switchView('guest-join');
            // Gäste verlieren beim Neustart alles – wenn ihre Runde noch
            // läuft, kommen sie mit einem Tipp zurück statt neu zu tippen.
            if (typeof biteOnlineLobbyWiedereinstiegAn === "function") {
                setTimeout(biteOnlineLobbyWiedereinstiegAn, 400);
            }
        }

        // Legt ein reines Speicher-Profil an (nichts davon geht nach
        // Firestore) und tritt damit der Code-Lobby bei.
        async function guestEnterLobby() {
            if (!currentParentUser) return showToast("Einen Moment, die Verbindung steht noch nicht.", "error");
            const name = cleanInput((document.getElementById("guest-name") || {}).value, 16);
            if (!name) return showToast("Bitte gib deinen Namen ein.", "error");
            const code = String((document.getElementById("guest-code") || {}).value || "")
                .trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
            if (code.length !== 4) return showToast("Bitte den 4-stelligen Code eingeben.", "error");

            activePlayerKey = "gast_" + String(currentParentUser.uid || "x").slice(0, 12);
            currentPlayer = {
                name: name,
                isGuest: true,
                coins: 0,
                xp: 0,
                learnedWords: [],
                discColor: GUEST_COLOR
            };
            ALL_PROFILES[activePlayerKey] = currentPlayer;

            const inp = document.getElementById("coded-lobby-join-code");
            if (inp) inp.value = code;
            await joinCodedLobby();
        }

        auth.onAuthStateChanged((user) => {
            if (user) {
                currentParentUser = user;
                if (user.isAnonymous) {
                    startGuestSession();
                    return;
                }
                                isAnonGuest = false;
                // Ohne bestätigte Adresse kommt niemand an die Familiendaten.
                // Gäste und Google-Anmeldungen sind ausgenommen.
                if (typeof emailBestaetigungNoetig === "function" && emailBestaetigungNoetig(user)) {
                    zeigeEmailSperre(user);
                    return;
                }
                loadFamilyProfiles();
            } else {
                currentParentUser = null;
                isAnonGuest = false;
                ALL_PROFILES = {};
                currentPlayer = null;
                activePlayerKey = null;
                // auth kann feuern, bevor lobby-avatar.js geladen ist
                if (typeof switchView === "function") switchView('auth');
                else {
                    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
                    const auth = document.getElementById('view-auth');
                    if (auth) auth.classList.remove('hidden');
                }
            }
        });

        // ============================================================
        //  FAMILY HUB & PROFILES
        // ============================================================
        async function loadFamilyProfiles() {
            if (typeof showGlobalLoading === "function") showGlobalLoading("Spieler werden geladen …");
            try {
                const snapshot = await db.collection("parents").doc(currentParentUser.uid).collection("profiles").get();
                ALL_PROFILES = {};
                snapshot.forEach(doc => { ALL_PROFILES[doc.id] = doc.data(); });
                await loadFamilyRewards();
                if (typeof bumpSignupIfNew === "function") bumpSignupIfNew();
                renderFamilyHub();
                switchView('family-hub');
            } catch (e) {
                handleError("loadFamilyProfiles", e, "Spieler konnten nicht geladen werden.");
            } finally {
                if (typeof hideGlobalLoading === "function") hideGlobalLoading(true);
            }
        }

        const PLAYER_COLORS = ["#FF8A4C", "#3ECFB2", "#F2C14E", "#9B8CFF", "#5FB3F5", "#F585B0"];
        const GUEST_COLOR = "#94A3B8";

        function colorForPlayer(key, takenColors) {
            let h = 0;
            for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
            let idx = h % PLAYER_COLORS.length;
            if (takenColors) {
                for (let n = 0; n < PLAYER_COLORS.length; n++) {
                    const c = PLAYER_COLORS[(idx + n) % PLAYER_COLORS.length];
                    if (!takenColors.has(c)) { takenColors.add(c); return c; }
                }
            }
            return PLAYER_COLORS[idx];
        }

        function initialsFor(name) {
            const n = (name || "?").trim();
            if (!n) return "?";
            const parts = n.split(/\s+/);
            if (parts.length > 1) return (parts[0][0] + parts[1][0]).toUpperCase();
            return n.slice(0, 1).toUpperCase();
        }

        function activityLabel(lastActive) {
            if (!lastActive) return { dot: "dot-idle", text: "noch nicht gespielt" };
            const mins = Math.floor((Date.now() - lastActive) / 60000);
            if (mins < 5) return { dot: "dot-live", text: "gerade aktiv" };
            if (mins < 60) return { dot: "dot-recent", text: `vor ${mins} Min.` };
            const hours = Math.floor(mins / 60);
            if (hours < 24) return { dot: "dot-idle", text: `vor ${hours} Std.` };
            const days = Math.floor(hours / 24);
            return { dot: "dot-idle", text: days === 1 ? "gestern" : `vor ${days} Tagen` };
        }

        function playerGrade(p) {
            if (!p) return null;
            if (p.grade) {
                const g = parseInt(p.grade);
                if (g >= 1 && g <= 13) return g;
            }
            if (p.ageType === "klasse") {
                const g = parseInt(p.age);
                if (g >= 1 && g <= 13) return g;
            }
            return null;
        }

        function playerDescription(p) {
            const parts = [];
            const g = playerGrade(p);
            if (g) parts.push(`${g}. Klasse`);
            const a = ageFromBirthday(p && p.birthday);
            if (a !== null) parts.push(`${a} Jahre`);
            if (!parts.length && p && p.age && p.age !== "-") {
                parts.push(`${p.ageType === "klasse" ? "Klasse" : "Alter"}: ${p.age}`);
            }
            return parts.length ? parts.join(" · ") : "keine Angabe";
        }

        function ageFromBirthday(birthday) {
            if (!birthday) return null;
            const b = new Date(birthday);
            if (isNaN(b.getTime())) return null;
            const now = new Date();
            let age = now.getFullYear() - b.getFullYear();
            const m = now.getMonth() - b.getMonth();
            if (m < 0 || (m === 0 && now.getDate() < b.getDate())) age--;
            return (age >= 0 && age < 120) ? age : null;
        }


        function buildPlayerCard(key, color) {
            const p = ALL_PROFILES[key];
            const guest = !!p.isGuest;
            const isActive = (key === activePlayerKey);
            const act = activityLabel(p.lastActive);
            const c = guest ? GUEST_COLOR : (color || PLAYER_COLORS[0]);
            const desc = (typeof playerDescription === "function") ? playerDescription(p) : "";

            const wrap = document.createElement("div");
            wrap.className = "relative player-card-wrap";

            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "player-card" + (isActive ? " is-active" : "") + (guest ? " is-guest" : "");
            if (!guest) btn.style.setProperty("--disc", c);
            if (isActive) btn.style.color = c;
            btn.innerHTML = `
        ${guest ? '<span class="badge-guest">GAST</span>' : ''}
        ${isActive ? '<span class="badge-active">Du</span>' : ''}
        <div class="player-disc${guest ? ' player-disc-guest' : ''}"${guest ? '' : ` style="background:${c}"`}>
            ${esc(initialsFor(p.name))}
        </div>
        <div class="player-name">${esc(p.name)}</div>
        ${p.profileRole === "eltern" ? '<div class="player-grade">Eltern</div>' : (desc ? `<div class="player-grade">${esc(desc)}</div>` : '')}
        <div class="player-coins"><span class="coin-icon">🪙</span> ${p.coins || 0}</div>
        <div class="player-meta"><span class="dot ${act.dot}"></span>${esc(act.text)}</div>
    `;
            btn.onclick = () => selectProfile(key);
            wrap.appendChild(btn);

            const edit = document.createElement("button");
            edit.type = "button";
            edit.className = "edit-pin";
            edit.title = "Bearbeiten";
            edit.innerText = "✎";
            edit.onclick = (ev) => {
                ev.stopPropagation();
                openEditPlayer(key);
            };
            wrap.appendChild(edit);

            return wrap;
        }

        // ============================================================
        //  TEST-ERGEBNISSE + STÄRKEN/SCHWÄCHEN IM ELTERN-BEREICH
        //  Sitzt im "Tests"-Tab des Eltern-Bereichs (PIN-geschützt), direkt
        //  unter der Kind-Auswahl - nicht im Familien-Bereich, wo die Kinder
        //  ihr Profil wählen. Ergebnisse bleiben hier dauerhaft abrufbar
        //  (komplette testHistory, nicht nur der neueste Test).
        // ============================================================
        function getStrongestCategory(p) {
            if (!p || !p.stats) return null;
            let strongest = null;
            Object.keys(p.stats).forEach(cat => {
                const s = p.stats[cat];
                if (s.attempts >= 3) {
                    const pct = s.correct / s.attempts;
                    if (!strongest || pct > strongest.pct) strongest = {
                        category: cat,
                        pct,
                        attempts: s.attempts,
                        correct: s.correct
                    };
                }
            });
            return (strongest && strongest.pct >= 0.8) ? strongest : null;
        }

        function markTestResultSeen(key) {
            const p = ALL_PROFILES[key];
            if (!p || !p.testHistory || !p.testHistory[0]) return;
            p.testHistory[0].seenByParent = true;
            if (!isAnonGuest && currentParentUser) {
                db.collection("parents").doc(currentParentUser.uid).collection("profiles").doc(key)
                    .update({ testHistory: p.testHistory })
                    .catch(e => console.warn("markTestResultSeen:", e));
            }
            renderDashTestResults();
        }

        function renderDashStrengthWeakness() {
            const box = document.getElementById("dash-strength-weakness");
            const sel = document.getElementById("dash-sw-profile");
            if (!box) return;
            const keys = Object.keys(ALL_PROFILES || {}).filter(k => ALL_PROFILES[k] && !ALL_PROFILES[k].isGuest);
            if (sel) {
                const prev = sel.value;
                sel.innerHTML = keys.length
                    ? keys.map(k => `<option value="${k}">${esc(ALL_PROFILES[k].name)}</option>`).join("")
                    : '<option value="">Kein Spieler</option>';
                if (prev && keys.indexOf(prev) !== -1) sel.value = prev;
            }
            const key = sel ? sel.value : null;
            const p = key ? ALL_PROFILES[key] : null;
            if (!p) {
                box.innerHTML = '<div class="text-gray-500 text-sm">Kein Spieler ausgewählt</div>';
                return;
            }
            const weak = getWeakestCategory(p);
            const strong = getStrongestCategory(p);
            let html = "";
            if (strong) {
                html += `<div class="dash-stat-card border-l-4 border-emerald-500">
                    <div class="label">💪 Stärke</div>
                    <div class="text-white font-bold text-sm">${labelFuerKategorie(strong.category) || (typeof CATEGORY_LABELS !== "undefined" && CATEGORY_LABELS[strong.category]) || strong.category}</div>
                    <div class="text-gray-400 text-xs">${Math.round(strong.pct * 100)}% richtig (${strong.attempts} Versuche)</div>
                </div>`;
            }
            if (weak) {
                html += `<div class="dash-stat-card border-l-4 border-amber-500">
                    <div class="label">💡 Schwäche</div>
                    <div class="text-white font-bold text-sm">${labelFuerKategorie(weak.category) || (typeof CATEGORY_LABELS !== "undefined" && CATEGORY_LABELS[weak.category]) || weak.category}</div>
                    <div class="text-gray-400 text-xs">${Math.round(weak.pct * 100)}% richtig (${weak.attempts} Versuche)</div>
                </div>`;
            }
            if (!html) {
                html = '<div class="dash-stat-card text-gray-400 text-sm">Noch nicht genug Übungen für eine Auswertung</div>';
            }
            html += `<button type="button" onclick="resetStrengthWeaknessStats('${key}')"
                class="w-full mt-1 text-xs font-bold py-2 px-3 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-400/25 hover:bg-rose-500/25">
                Statistik für Auswertung zurücksetzen</button>`;
            box.innerHTML = html;
        }

        async function resetStrengthWeaknessStats(profileKey) {
            if (!profileKey || !ALL_PROFILES[profileKey]) return;
            const ok = await appConfirm(
                "Löscht die Kategorie-Statistik (Richtig/Versuche je Thema) für dieses Kind. Level, Coins, Tests und Lernzeit bleiben erhalten.",
                { titel: "Auswertung zurücksetzen?", icon: "📊", okText: "Zurücksetzen", abbrechenText: "Abbrechen" }
            );
            if (!ok) return;
            ALL_PROFILES[profileKey].stats = {};
            if (activePlayerKey === profileKey && currentPlayer) currentPlayer.stats = {};
            if (currentParentUser) {
                db.collection("parents").doc(currentParentUser.uid).collection("profiles").doc(profileKey)
                    .update({ stats: {} })
                    .catch(e => handleError("resetStrengthWeaknessStats", e, "Statistik konnte nicht zurückgesetzt werden."));
            }
            showToast("Auswertung zurückgesetzt.", "success");
            renderDashStrengthWeakness();
        }

        function renderDashTestResults() {
            const container = document.getElementById("dash-test-results");
            if (!container) return;
            const sel = document.getElementById("dash-test-profile");
            const key = sel ? sel.value : null;
            const p = key ? ALL_PROFILES[key] : null;
            if (!p) { container.innerHTML = ""; return; }

            const history = p.testHistory || [];
            const newest = history[0];
            if (newest && !newest.seenByParent) {
                const pct = newest.total > 0 ? Math.round((newest.correct / newest.total) * 100) : 0;
                const themen = (newest.categories || []).slice(0, 4).map(c =>
                    esc((typeof labelFuerKategorie === 'function' ? labelFuerKategorie(c) : null) || c)
                ).join(', ');
                container.innerHTML = `
                    <div class="glass-card-glow p-3 flex items-center justify-between gap-2" style="border-color:rgba(16,185,129,0.35);">
                        <div class="text-left min-w-0">
                            <div class="text-white font-bold text-sm">🎉 ${esc(p.name)} hat einen Test abgeschlossen</div>
                            <div class="text-emerald-400 font-black text-xs">${newest.correct}/${newest.total} (${pct}%)</div>
                            ${themen ? `<div class="text-[11px] text-gray-400 truncate mt-0.5">${themen}</div>` : ''}
                            <div class="text-[10px] text-gray-500 mt-1">Historie unter Fortschritt → Test-Statistiken</div>
                        </div>
                        <button onclick="markTestResultSeen('${key}')" class="text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1.5 rounded-lg shrink-0">Gesehen</button>
                    </div>`;
            } else {
                container.innerHTML = '';
            }
        }

        function renderFamilyHub() {
            const grid = document.getElementById("family-profiles-grid");
            if (grid) grid.innerHTML = "";
            const preview = document.getElementById("family-profiles-preview");
            if (preview) preview.innerHTML = "";
            const profileKeys = Object.keys(ALL_PROFILES);

            const sortedByActivity = profileKeys.slice().sort((a, b) => {
                if (a === activePlayerKey) return -1;
                if (b === activePlayerKey) return 1;
                return (ALL_PROFILES[b].lastActive || 0) - (ALL_PROFILES[a].lastActive || 0);
            });
            const previewKeys = sortedByActivity.slice(0, 2);

            const taken = new Set();
            const colorMap = {};
            const sortedKeys = profileKeys.slice().sort();
            sortedKeys.forEach(k => {
                const p = ALL_PROFILES[k];
                if (!p.isGuest && p.discColor) {
                    colorMap[k] = p.discColor;
                    taken.add(p.discColor);
                }
            });
            sortedKeys.forEach(k => {
                if (!ALL_PROFILES[k].isGuest && !colorMap[k]) colorMap[k] = colorForPlayer(k, taken);
            });

            if (preview) previewKeys.forEach(key => preview.appendChild(buildPlayerCard(key, colorMap[key])));
            if (grid) profileKeys.forEach(key => grid.appendChild(buildPlayerCard(key, colorMap[key])));

            const badge = document.getElementById("profile-count-badge");
            if (badge) badge.innerText = profileKeys.length === 1 ? "1 Spieler" : `${profileKeys.length} Spieler`;

            const toggleBtn = document.getElementById("profile-toggle-btn");
            const allVisible = profileKeys.length <= 2;
            if (toggleBtn) toggleBtn.classList.toggle("hidden", allVisible);
            if (allVisible && grid) {
                grid.innerHTML = "";
                toggleProfileList(false);
            }

            const guestKeys = profileKeys.filter(k => ALL_PROFILES[k].isGuest);
            const clearGuestsBtn = document.getElementById("clear-guests-btn");
            if (clearGuestsBtn) clearGuestsBtn.classList.toggle("hidden", guestKeys.length === 0);

            const lbContainer = document.getElementById("leaderboard-container");
            const leaderBadge = document.getElementById("leaderboard-leader-badge");
            toggleLeaderboard(false);
            toggleFamilyDuel(false);
            if (typeof applyOfflineModusSichtbarkeit === 'function') applyOfflineModusSichtbarkeit();
            if (typeof renderFamilyLeaderboard === 'function') renderFamilyLeaderboard();
            else if (lbContainer) {
                const sortedProfiles = Object.values(ALL_PROFILES).filter(p => !p.isGuest).sort((a, b) => (b.coins || 0) - (a.coins || 0));
                if (leaderBadge) leaderBadge.innerText = sortedProfiles[0] ? ("🥇 " + esc(sortedProfiles[0].name)) : "";
            }
        }

        function weekStudySeconds(p) {
            const now = new Date();
            const dayIdx = (now.getDay() + 6) % 7;
            let sec = 0;
            for (let i = 0; i <= dayIdx; i++) {
                const d = new Date(now);
                d.setDate(now.getDate() - (dayIdx - i));
                const day = d.toISOString().slice(0, 10);
                sec += (p.studyLog && p.studyLog[day]) || 0;
            }
            return sec;
        }

        function renderFamilyLeaderboard() {
            const lbContainer = document.getElementById("leaderboard-container");
            const leaderBadge = document.getElementById("leaderboard-leader-badge");
            if (!lbContainer) return;
            let hidden = false;
            try { hidden = localStorage.getItem("eduplayLbHidden") === "1"; } catch (e) {}
            let mode = "week";
            try { mode = localStorage.getItem("eduplayLbMode") || "week"; } catch (e) {}
            if (hidden) {
                lbContainer.innerHTML = `<p class="text-xs text-gray-500 text-center py-2">Rangliste ausgeblendet.</p>
                    <button type="button" onclick="setLeaderboardHidden(false)" class="btn-secondary w-full text-xs py-2">Wieder anzeigen</button>`;
                if (leaderBadge) leaderBadge.innerText = "aus";
                return;
            }
            const profiles = Object.values(ALL_PROFILES || {}).filter(p => p && !p.isGuest);
            const sorted = profiles.slice().sort((a, b) => {
                if (mode === "week") {
                    const dw = weekStudySeconds(b) - weekStudySeconds(a);
                    if (dw !== 0) return dw;
                }
                return (b.coins || 0) - (a.coins || 0);
            });
            if (leaderBadge) {
                leaderBadge.innerText = sorted[0]
                    ? ("🥇 " + esc(sorted[0].name) + (mode === "week" ? " · Woche" : ""))
                    : "";
            }
            if (!sorted.length) {
                lbContainer.innerHTML = "<p class='text-xs text-gray-500 text-center'>Noch keine Spieler vorhanden.</p>";
                return;
            }
            const medals = ["🥇", "🥈", "🥉"];
            let lbHTML = `<div class="flex gap-2 mb-2">
                <button type="button" onclick="setLeaderboardMode('week')" class="flex-1 text-[11px] font-bold py-1.5 rounded-lg ${mode === "week" ? "bg-amber-500/20 text-amber-300 border border-amber-400/30" : "bg-white/5 text-gray-400"}">Diese Woche</button>
                <button type="button" onclick="setLeaderboardMode('all')" class="flex-1 text-[11px] font-bold py-1.5 rounded-lg ${mode === "all" ? "bg-amber-500/20 text-amber-300 border border-amber-400/30" : "bg-white/5 text-gray-400"}">Gesamt (Coins)</button>
                <button type="button" onclick="setLeaderboardHidden(true)" class="text-[11px] font-bold py-1.5 px-2 rounded-lg bg-white/5 text-gray-500" title="Ausblenden">✕</button>
            </div>`;
            sorted.forEach((p, index) => {
                const medal = index < 3 ? medals[index] :
                    `<span class="text-gray-500 font-bold w-6 inline-block text-center">${index + 1}.</span>`;
                const right = mode === "week"
                    ? (`⏱ ${Math.floor(weekStudySeconds(p) / 60)} Min.`)
                    : (`🪙 ${p.coins || 0}`);
                lbHTML += `
                        <div class="flex items-center justify-between bg-white/5 border border-white/5 p-3 rounded-xl shadow-sm">
                            <div class="flex items-center gap-3">
                                <div class="text-xl">${medal}</div>
                                <div class="font-bold text-white">${esc(p.name)}</div>
                            </div>
                            <div class="text-yellow-400 font-black text-sm">${right}</div>
                        </div>`;
            });
            lbContainer.innerHTML = lbHTML;
        }
        function setLeaderboardMode(mode) {
            try { localStorage.setItem("eduplayLbMode", mode === "all" ? "all" : "week"); } catch (e) {}
            renderFamilyLeaderboard();
        }
        function setLeaderboardHidden(on) {
            try { localStorage.setItem("eduplayLbHidden", on ? "1" : "0"); } catch (e) {}
            renderFamilyLeaderboard();
            if (!on) {
                const w = document.getElementById("leaderboard-wrapper");
                if (w) w.classList.remove("hidden");
            }
        }
        window.setLeaderboardMode = setLeaderboardMode;
        window.setLeaderboardHidden = setLeaderboardHidden;
        window.renderFamilyLeaderboard = renderFamilyLeaderboard;



        function toggleProfileList(forceOpen) {
            const wrapper = document.getElementById("family-profiles-wrapper");
            const arrow = document.getElementById("profile-toggle-arrow");
            const label = document.getElementById("profile-toggle-label");
            if (!wrapper) return;
            const open = (typeof forceOpen === "boolean") ? forceOpen : !wrapper.classList.contains("open");
            wrapper.classList.toggle("open", open);
            if (arrow) arrow.style.transform = open ? "rotate(180deg)" : "rotate(0deg)";
            if (label) label.innerText = open ? "Liste schließen" : "Alle Spieler";
        }

        function toggleFamilyDuel(forceOpen) {
            const wrapper = document.getElementById("family-duel-wrapper");
            const arrow = document.getElementById("family-duel-toggle-arrow");
            if (!wrapper) return;
            const open = (typeof forceOpen === "boolean") ? forceOpen : wrapper.classList.contains("hidden");
            wrapper.classList.toggle("hidden", !open);
            if (arrow) arrow.style.transform = open ? "rotate(180deg)" : "rotate(0deg)";
        }

        function toggleOfflineGames(forceOpen) {
            const wrapper = document.getElementById("offline-games-wrapper");
            const arrow = document.getElementById("offline-games-toggle-arrow");
            if (!wrapper) return;
            const open = (typeof forceOpen === "boolean") ? forceOpen : wrapper.classList.contains("hidden");
            wrapper.classList.toggle("hidden", !open);
            if (arrow) arrow.style.transform = open ? "rotate(180deg)" : "rotate(0deg)";
        }

        function toggleLeaderboard(forceOpen) {
            const wrapper = document.getElementById("leaderboard-wrapper");
            const arrow = document.getElementById("leaderboard-toggle-arrow");
            if (!wrapper) return;
            const open = (typeof forceOpen === "boolean") ? forceOpen : wrapper.classList.contains("hidden");
            wrapper.classList.toggle("hidden", !open);
            if (arrow) arrow.style.transform = open ? "rotate(180deg)" : "rotate(0deg)";
        }

        async function selectProfile(key) {
            SFX.tap();
            await warnIfProfileOnOtherDevice(key);
            activePlayerKey = key;
            currentPlayer = ALL_PROFILES[key];
            touchPlayerActivity(key);
            sessionLearnedWords = new Set(currentPlayer.learnedWords || []);
            document.getElementById("welcome-text").innerText = `Hallo, ${esc(currentPlayer.name)}!`;
            document.getElementById("menu-coins").innerText = currentPlayer.coins || 0;
            document.getElementById("menu-age-display").innerHTML = `🎒 <span id="menu-age">${esc(playerDescription(currentPlayer))}</span>`;
            // Farbscheibe mit den Initialen des Kindes in der Fortschrittskarte
            const disc = document.getElementById("menu-avatar-disc");
            if (disc) {
                disc.innerText = initialsFor(currentPlayer.name);
                const farbe = currentPlayer.discColor || (currentPlayer.isGuest ? GUEST_COLOR : colorForPlayer(key));
                disc.style.background = farbe;
                disc.style.color = "#0b1020";
            }
            renderPendingTestCard();
            renderStudyGoalCard();
            renderTodayStatusCard();
            renderWeaknessSuggestion();
            updateMenuGamification();
            switchView('menu');
            // Läuft für dieses Kind noch etwas? Dann direkt anbieten –
            // erst das Familien-Duell, sonst die zuletzt genutzte Online-Lobby.
            if (typeof biteWiedereinstiegAn === "function") biteWiedereinstiegAn();
            if (typeof biteOnlineLobbyWiedereinstiegAn === "function") biteOnlineLobbyWiedereinstiegAn();
            if (typeof biteSoloWiedereinstiegAn === "function") biteSoloWiedereinstiegAn();
            // QR-Code/Link gescannt (?join=CODE bzw. ?tv=CODE)? Dann jetzt
            // automatisch der Lobby beitreten, statt dass der Code stumm
            // verworfen wird.
            if (typeof versucheDeepLinkJoin === "function") versucheDeepLinkJoin();
            if (typeof versucheTVDeepLinkJoin === "function") versucheTVDeepLinkJoin();
            if (typeof loadOpenChallenges === "function") loadOpenChallenges();
            if (typeof watchChallengesList === "function") watchChallengesList();
        }

        function challengesRef() {
            if (!currentParentUser) return null;
            return db.collection("parents").doc(currentParentUser.uid).collection("challenges");
        }

        // Live-Liste: Einladungen ohne den Lernraum verlassen zu müssen
        let _challengesListUnsub = null;
        function watchChallengesList() {
            if (_challengesListUnsub) {
                try { _challengesListUnsub(); } catch (e) { /* */ }
                _challengesListUnsub = null;
            }
            const ref = challengesRef();
            if (!ref || !activePlayerKey) return;
            _challengesListUnsub = ref.onSnapshot(function () {
                if (typeof loadOpenChallenges === "function") loadOpenChallenges();
            }, function () { /* offline */ });
        }
        window.watchChallengesList = watchChallengesList;

        let _learnTogetherType = null; // null | wissen | vokabel (muss gewählt werden)

        function learnTogetherLabel(kind) {
            if (kind === "vokabel") return "Vokabeln";
            if (kind === "kurs") return "Kurs";
            return "Wissen";
        }

        function fillLernenInviteCategories() {
            const gradeEl = document.getElementById("lernen-opt-grade");
            const catEl = document.getElementById("lernen-opt-category");
            if (!catEl) return;
            const grade = gradeEl ? gradeEl.value : "";
            const opts = ['<option value="">Alle Fächer</option>'];
            const seen = {};
            if (typeof CURRICULUM !== "undefined" && Array.isArray(CURRICULUM)) {
                CURRICULUM.forEach(function (g) {
                    const gNum = String(g.grade || (g.label || "").replace(/\D/g, "") || "");
                    if (grade && gNum && gNum !== String(grade)) return;
                    (g.subjects || []).forEach(function (s) {
                        if (!s || !s.key || seen[s.key]) return;
                        seen[s.key] = true;
                        opts.push('<option value="' + esc(s.key) + '">' + esc(s.label || s.key) + '</option>');
                    });
                });
            }
            if (opts.length < 2 && typeof QUESTIONS_DATABASE !== "undefined") {
                QUESTIONS_DATABASE.forEach(function (q) {
                    if (!q || !q.category || seen[q.category]) return;
                    if (grade && q.grade && String(q.grade) !== String(grade)) return;
                    if (q.area === "spass") return;
                    seen[q.category] = true;
                    const lab = (typeof labelFuerKategorie === "function" ? labelFuerKategorie(q.category) : "") || q.category;
                    opts.push('<option value="' + esc(q.category) + '">' + esc(lab) + '</option>');
                });
            }
            catEl.innerHTML = opts.join("");
        }
        window.fillLernenInviteCategories = fillLernenInviteCategories;

        function fillLernenInviteOptions(kind) {
            const box = document.getElementById("lernen-invite-options");
            const w = document.getElementById("lernen-opt-wissen");
            const v = document.getElementById("lernen-opt-vokabel");
            if (!box) return;
            box.classList.remove("hidden");
            if (w) w.classList.toggle("hidden", kind !== "wissen");
            if (v) v.classList.toggle("hidden", kind !== "vokabel");

            if (kind === "wissen") {
                const gradeEl = document.getElementById("lernen-opt-grade");
                if (gradeEl && !gradeEl.options.length) {
                    let html = '<option value="">Alle Klassen</option>';
                    for (let g = 1; g <= 10; g++) html += '<option value="' + g + '">' + g + '. Klasse</option>';
                    gradeEl.innerHTML = html;
                    const pg = (typeof playerGrade === "function" && currentPlayer) ? playerGrade(currentPlayer) : null;
                    if (pg) gradeEl.value = String(pg);
                }
                fillLernenInviteCategories();
            }
            if (kind === "vokabel") {
                const groups = document.getElementById("lernen-opt-vokabel-groups");
                if (groups && typeof VOCABULARY_DATABASE !== "undefined") {
                    let html = "";
                    Object.keys(VOCABULARY_DATABASE).forEach(function (lang) {
                        Object.keys(VOCABULARY_DATABASE[lang] || {}).forEach(function (lv) {
                            const set = VOCABULARY_DATABASE[lang][lv];
                            const val = lang + ":" + lv;
                            const n = (set.words || []).length;
                            html += '<label class="flex items-center gap-1.5 bg-white/5 rounded-lg px-2 py-1.5">' +
                                '<input type="checkbox" class="lernen-vokabel-check" value="' + esc(val) + '">' +
                                '<span class="truncate">' + esc((set.label || lv) + " · " + n) + '</span></label>';
                        });
                    });
                    groups.innerHTML = html || '<span class="text-gray-500">Keine Vokabeln geladen</span>';
                    const first = groups.querySelector(".lernen-vokabel-check");
                    if (first) first.checked = true;
                }
            }
        }

        function getLernenInviteOpts() {
            const kind = _learnTogetherType || "wissen";
            const opts = { kind: kind };
            if (kind === "wissen") {
                opts.grade = (document.getElementById("lernen-opt-grade") || {}).value || "";
                opts.category = (document.getElementById("lernen-opt-category") || {}).value || "";
            } else if (kind === "vokabel") {
                opts.vocabGroups = Array.from(document.querySelectorAll(".lernen-vokabel-check:checked"))
                    .map(function (cb) { return cb.value; });
                opts.vocabDir = (document.getElementById("lernen-opt-vokabel-dir") || {}).value || "mix";
            }
            return opts;
        }

        function startLearnTogether(kind) {
            if (kind !== "vokabel") kind = "wissen";
            _learnTogetherType = kind;
            window._learnTogetherType = _learnTogetherType;
            const marks = {
                wissen: ["lernen-invite-wissen-btn", "#34d399"],
                vokabel: ["lernen-invite-vokabel-btn", "#818cf8"]
            };
            Object.keys(marks).forEach(function (k) {
                const el = document.getElementById(marks[k][0]);
                if (el) el.style.boxShadow = (k === kind) ? ("0 0 0 2px " + marks[k][1]) : "";
            });
            fillLernenInviteOptions(kind);
            const hint = document.getElementById("lernen-invite-hint");
            if (hint) {
                hint.classList.remove("hidden");
                hint.textContent = learnTogetherLabel(kind) + ": Inhalt wählen, dann einladen";
            }
            const codeBtn = document.getElementById("lernen-invite-code-btn");
            if (codeBtn) codeBtn.classList.remove("hidden");
            if (typeof loadOpenChallenges === "function") loadOpenChallenges();
            showToast(learnTogetherLabel(kind) + " – bitte Inhalt wählen", "success");
        }
        window.startLearnTogether = startLearnTogether;
        window._learnTogetherType = _learnTogetherType;

        let _coopLobbyId = null;
        let _coopLobbyOptsKey = null;

        async function buildCoopQuestions(subject, iOpts) {
            iOpts = iOpts || {};
            let questions = [];
            if (subject === "vokabel" && typeof buildVocabTestQuestions === "function") {
                let groups = Array.isArray(iOpts.vocabGroups) ? iOpts.vocabGroups.slice() : [];
                if (!groups.length && typeof VOCABULARY_DATABASE !== "undefined" && VOCABULARY_DATABASE.en) {
                    Object.keys(VOCABULARY_DATABASE.en).forEach(function (lv) {
                        groups.push("en:" + lv);
                    });
                }
                questions = (typeof prepareQuestions === "function" ? prepareQuestions : function (x) { return x; })(
                    buildVocabTestQuestions(groups, iOpts.vocabDir || "mix")
                        .sort(function () { return Math.random() - 0.5; })
                        .slice(0, 10)
                );
                return questions;
            }
            const grade = iOpts.grade || "";
            const category = iOpts.category || "";
            if (category && typeof ladeFragenFuer === "function") {
                try { await ladeFragenFuer(category); } catch (e) { console.warn(e); }
            } else if (!category && typeof ladeAlleFragen === "function") {
                try { await ladeAlleFragen(); } catch (e2) { console.warn(e2); }
            }
            let pool = [];
            if (typeof QUESTIONS_DATABASE !== "undefined" && Array.isArray(QUESTIONS_DATABASE)) {
                pool = QUESTIONS_DATABASE.filter(function (q) {
                    if (!q || q.area === "spass") return false;
                    if (category && q.category !== category) return false;
                    if (grade && q.grade && Number(q.grade) !== Number(grade)) return false;
                    return true;
                });
                if (pool.length < 5 && category) {
                    pool = QUESTIONS_DATABASE.filter(function (q) {
                        return q && q.area !== "spass" && q.category === category;
                    });
                }
            }
            questions = (typeof prepareQuestions === "function" ? prepareQuestions : function (x) { return x; })(pool)
                .slice().sort(function () { return Math.random() - 0.5; }).slice(0, 10);
            return questions;
        }

        async function ensureCoopLobby(kind, inviteOpts) {
            const optsKey = JSON.stringify(inviteOpts || {});
            if (_coopLobbyId && _coopLobbyOptsKey === optsKey && typeof liveDuelCollectionRef === "function") {
                try {
                    const snap = await liveDuelCollectionRef().doc(_coopLobbyId).get();
                    if (snap.exists) {
                        const st = (snap.data() || {}).status;
                        if (st === "waiting" || st === "playing") return _coopLobbyId;
                    }
                } catch (e) { /* neu anlegen */ }
            }
            const questions = await buildCoopQuestions(kind, inviteOpts);
            if (!questions.length) throw new Error("no-questions");
            const duelRef = db.collection("parents").doc(currentParentUser.uid).collection("live_duel").doc();
            const players = {};
            players[activePlayerKey] = {
                name: currentPlayer.name, score: 0, hasAnswered: false,
                lastAnswer: null, word: "", coinsClaimed: false,
                lastSeen: Date.now(), sessionId: window.DEVICE_SESSION_ID || null
            };
            await duelRef.set({
                type: "quiz",
                mode: "coop",
                status: "waiting",
                subject: kind,
                createdBy: activePlayerKey,
                createdByName: currentPlayer.name,
                createdAt: Date.now(),
                hostLastSeen: Date.now(),
                currentIndex: 0,
                answerSeconds: 25,
                questions: questions,
                players: players,
                order: [activePlayerKey],
                inviteOpts: inviteOpts || {}
            });
            _coopLobbyId = duelRef.id;
            _coopLobbyOptsKey = optsKey;
            return _coopLobbyId;
        }

        async function challengePlayer(toKey, typeOverride) {
            if (!currentParentUser || !activePlayerKey || !currentPlayer) {
                return showToast("Bitte zuerst deinen Spieler wählen.", "error");
            }
            if (!toKey || toKey === activePlayerKey) return;
            const to = ALL_PROFILES[toKey];
            if (!to) return showToast("Spieler nicht gefunden.", "error");
            if (to.isGuest) return showToast("Per Code einladen.", "error");
            const kind = typeOverride || _learnTogetherType || null;
            if (!kind || (kind !== "wissen" && kind !== "vokabel")) {
                return showToast("Bitte zuerst Wissen oder Vokabeln wählen.", "error");
            }
            if (kind === "kurs") return showToast("Kurs-Team gibt es hier nicht – bitte Wissen oder Vokabeln.", "error");
            const type = (kind === "vokabel") ? "vokabel" : "quiz";
            const inviteOpts = getLernenInviteOpts();
            if (kind === "vokabel" && (!inviteOpts.vocabGroups || !inviteOpts.vocabGroups.length)) {
                return showToast("Bitte mindestens eine Vokabel-Gruppe wählen.", "error");
            }
            try {
                // Schon in einer Team-Lobby? Dieselbe ID weiterbenutzen (mehrere Geschwister)
                let lobbyId = null;
                try {
                    if (typeof liveDuelRef !== "undefined" && liveDuelRef) {
                        const curSnap = await liveDuelRef.get();
                        if (curSnap.exists) {
                            const cur = curSnap.data() || {};
                            if (cur.mode === "coop" && (cur.status === "waiting" || cur.status === "playing")) {
                                lobbyId = liveDuelRef.id;
                                _coopLobbyId = lobbyId;
                                _coopLobbyOptsKey = JSON.stringify(inviteOpts || {});
                            }
                        }
                    }
                } catch (eReuse) { /* neu anlegen */ }
                if (!lobbyId) lobbyId = await ensureCoopLobby(kind, inviteOpts);

                // Schon eingeladen und noch offen?
                try {
                    const openSnap = await challengesRef().where("toKey", "==", toKey)
                        .where("status", "==", "pending").limit(8).get();
                    let already = false;
                    openSnap.forEach(function (doc) {
                        const x = doc.data() || {};
                        if (x.mode === "coop" && x.fromKey === activePlayerKey && x.lobbyId === lobbyId) already = true;
                    });
                    if (already) return showToast(esc(to.name) + " ist schon eingeladen.", "info");
                } catch (eDup) { /* Index fehlt ggf. – dann trotzdem senden */ }

                const ref = await challengesRef().add({
                    fromKey: activePlayerKey,
                    fromName: currentPlayer.name,
                    toKey,
                    toName: to.name,
                    type: type,
                    subject: kind,
                    mode: "coop",
                    status: "pending",
                    createdAt: Date.now(),
                    inviteOpts: inviteOpts,
                    lobbyId: lobbyId
                });
                showToast("👥 Einladung an " + esc(to.name) + " – weitere Kinder kannst du noch einladen", "success");
                watchChallengeAcceptance(ref);
                // Host in die Lobby (Heartbeat hält die Lobby am Leben)
                if (typeof joinLiveDuelById === "function") {
                    try { await joinLiveDuelById(lobbyId); } catch (eJ) { /* */ }
                }
                loadOpenChallenges();
            } catch (e) {
                if (e && e.message === "no-questions") {
                    return showToast("Keine Fragen geladen. Inhalt prüfen.", "error");
                }
                handleError("challengePlayer", e, "Einladung fehlgeschlagen.");
            }
        }

        // Der Einladende (Host) landete bisher NICHT automatisch in der Lobby,
        // wenn der Eingeladene "Mitmachen" klickte - loadOpenChallenges() ist
        // nur ein einmaliges get(), kein Live-Listener. Der Eingeladene wurde
        // in acceptChallenge() per joinLiveDuelById() sofort verbunden, der
        // Host wartete auf der "Warte auf ..."-Karte, ohne dass sich je etwas
        // aktualisierte. Jetzt hört der Host live auf seine eigene Einladung
        // und wird automatisch mit reingeholt, sobald sie angenommen wird.
        const _challengeWatchers = {};
        function watchChallengeAcceptance(ref) {
            if (!ref || _challengeWatchers[ref.id]) return;
            const unsub = ref.onSnapshot(function (snap) {
                if (!snap.exists) { unsub(); delete _challengeWatchers[ref.id]; return; }
                const c = snap.data() || {};
                if (c.status === "accepted" && c.lobbyId) {
                    unsub();
                    delete _challengeWatchers[ref.id];
                    if (c.fromKey === activePlayerKey) {
                        (async function () {
                            try {
                                if (typeof liveDuelCollectionRef === "function") {
                                    const lobbySnap = await liveDuelCollectionRef().doc(c.lobbyId).get();
                                    if (!lobbySnap.exists) {
                                        // War zu lange niemand drin -> von der
                                        // Geist-Aufräumung schon gelöscht.
                                        await ref.update({ status: "expired" }).catch(function () { });
                                        loadOpenChallenges();
                                        return;
                                    }
                                }
                                showToast("👥 " + esc(c.toName || "Dein Freund") + " ist bereit – du wirst verbunden …", "success");
                                if (typeof joinLiveDuelById === "function") joinLiveDuelById(c.lobbyId);
                            } catch (e) { /* kein Netz - nichts tun */ }
                        })();
                    }
                    loadOpenChallenges();
                } else if (c.status === "declined" || c.status === "expired") {
                    unsub();
                    delete _challengeWatchers[ref.id];
                    // Nur dem Einladenden melden – und nur, wenn der andere abgelehnt hat
                    // (nicht wenn man selbst „Zurücknehmen“ tippt).
                    if (c.fromKey === activePlayerKey) {
                        if (c.status === "declined" && c.declinedBy && c.declinedBy !== activePlayerKey) {
                            const name = c.toName || "Dein Freund";
                            showToast("🙅 " + esc(name) + " hat die Einladung abgelehnt.", "error");
                            if (typeof showDuelNotification === "function") {
                                showDuelNotification(
                                    "Einladung abgelehnt",
                                    name + " möchte gerade nicht mitüben.",
                                    "challenge-declined-" + (ref.id || ""),
                                    "#lernen"
                                );
                            }
                        } else if (c.status === "expired") {
                            showToast("⏱ Einladung an " + esc(c.toName || "…") + " ist abgelaufen.", "error");
                        }
                        loadOpenChallenges();
                    }
                }
            });
            _challengeWatchers[ref.id] = unsub;
        }

        // Wie lange eine Einladung ohne Reaktion offen bleibt, bevor sie als
        // abgelaufen gilt (gleiches Prinzip wie die 4h-Geist-Erkennung bei
        // "Gegeneinander"-Lobbys, nur kürzer - hier warten beide im selben
        // Haushalt, nicht über einen geteilten Code).
        const CHALLENGE_PENDING_STALE_MS = 15 * 60 * 1000;

        async function loadOpenChallenges() {
            const box = document.getElementById("open-challenges-list");
            if (!box || !currentParentUser || !activePlayerKey) {
                if (box) box.innerHTML = "";
                return;
            }
            try {
                const snap = await challengesRef().get();
                const now = Date.now();
                let html = "";
                for (const doc of snap.docs) {
                    const c = doc.data() || {};
                    const age = now - (c.createdAt || 0);
                    if (age > 24 * 60 * 60 * 1000) continue;
                    if (c.status === "declined" || c.status === "expired") continue;
                    const id = doc.id;

                    // Ghost-Schutz: Niemand hat auf die Einladung reagiert ->
                    // abgelaufen, statt für immer als "Warte auf ..." hängen
                    // zu bleiben und eine neue Einladung an dieselbe Person
                    // zu verwirren.
                    if (c.status === "pending" && age > CHALLENGE_PENDING_STALE_MS) {
                        doc.ref.update({ status: "expired" }).catch(function () { });
                        continue;
                    }

                    // Angenommen, aber die Lobby dahinter gibt es nicht mehr
                    // (z.B. von der Geist-Aufräumung in renderOpenDuelsList
                    // gelöscht, weil niemand rechtzeitig reinging) -> auch
                    // hier abgelaufen setzen statt einen toten "Beitreten"-
                    // Knopf für immer anzuzeigen.
                    if (c.status === "accepted" && c.lobbyId && typeof liveDuelCollectionRef === "function") {
                        try {
                            const lobbySnap = await liveDuelCollectionRef().doc(c.lobbyId).get();
                            if (!lobbySnap.exists) {
                                doc.ref.update({ status: "expired" }).catch(function () { });
                                continue;
                            }
                        } catch (e) { /* kein Netz - beim naechsten Laden nochmal pruefen */ }
                    }

                    if (c.status === "pending" && c.toKey === activePlayerKey) {
                        html += `<div class="glass-card p-3 flex items-center justify-between gap-2 border border-indigo-400/40">
                            <div class="min-w-0">
                                <div class="text-sm font-black text-indigo-300">👥 Lern-Einladung</div>
                                <div class="text-xs text-gray-400 truncate">${esc(c.fromName || "Jemand")} · ${learnTogetherLabel(c.subject || c.type)}</div>
                            </div>
                            <div class="flex gap-1.5 shrink-0">
                                <button type="button" onclick="acceptChallenge('${id}')" class="btn-primary text-xs py-2 px-3">Mitmachen</button>
                                <button type="button" onclick="declineChallenge('${id}')" class="btn-secondary text-xs py-2 px-2">Nein</button>
                            </div>
                        </div>`;
                    } else if (c.status === "pending" && c.fromKey === activePlayerKey) {
                        // Live-Listener neu aufsetzen, falls die App zwischendurch
                        // neu geladen wurde (z.B. Tab-Wechsel) - sonst würde der
                        // Host beim Annehmen nicht automatisch mitgeholt.
                        if (typeof watchChallengeAcceptance === "function") watchChallengeAcceptance(doc.ref);
                        html += `<div class="glass-card p-3 flex items-center justify-between gap-2 border border-white/10">
                            <div class="min-w-0">
                                <div class="text-sm font-bold text-gray-300">Warte auf ${esc(c.toName || "…")}</div>
                                <div class="text-[11px] text-gray-500">Lern-Einladung offen</div>
                            </div>
                            <button type="button" onclick="declineChallenge('${id}')" class="btn-ghost text-xs py-1.5 px-2 text-gray-500">Zurücknehmen</button>
                        </div>`;
                    } else if (c.status === "accepted" && c.lobbyId
                        && (c.toKey === activePlayerKey || c.fromKey === activePlayerKey)) {
                        html += `<div class="glass-card p-3 flex items-center justify-between gap-2 border border-emerald-400/40">
                            <div class="min-w-0">
                                <div class="text-sm font-black text-emerald-300">✅ Bereit zum Üben</div>
                                <div class="text-xs text-gray-400 truncate">${esc(c.fromName || "")} & ${esc(c.toName || "")}</div>
                            </div>
                            <button type="button" onclick="joinChallengeLobby('${id}')" class="btn-primary text-xs py-2 px-3">Beitreten</button>
                        </div>`;
                    }
                }
                // Namen nur, wenn Wissen oder Vokabeln explizit gewählt wurde
                const others = Object.keys(ALL_PROFILES || {}).filter(k => {
                    const p = ALL_PROFILES[k];
                    return p && !p.isGuest && k !== activePlayerKey;
                });
                if (others.length && _learnTogetherType) {
                    const kind = _learnTogetherType;
                    const label = learnTogetherLabel(kind);
                    html += `<div class="bg-white/5 rounded-xl p-3 space-y-2">
                        <div class="text-xs font-bold text-indigo-300">👥 ${label} – Familie einladen</div>
                        <div class="flex flex-wrap gap-2">`;
                    others.forEach(k => {
                        const p = ALL_PROFILES[k];
                        html += `<button type="button" onclick="challengePlayer('${k}','${kind}')" class="btn-secondary text-xs py-2 px-3">
                            ${esc(p.name)}
                        </button>`;
                    });
                    html += `</div></div>`;
                } else if (others.length && !_learnTogetherType) {
                    html += `<div class="text-[11px] text-gray-500 text-center py-1">Zuerst <strong>Wissen</strong> oder <strong>Vokabeln</strong> wählen</div>`;
                }

                box.innerHTML = html;
            } catch (e) {
                box.innerHTML = "";
            }
        }

        async function acceptChallenge(id) {
            if (!id || !currentParentUser || !activePlayerKey || !currentPlayer) return;
            try {
                const ref = challengesRef().doc(id);
                const snap = await ref.get();
                if (!snap.exists) return showToast("Einladung ist weg.", "error");
                const c = snap.data() || {};
                if (c.toKey !== activePlayerKey) return showToast("Nicht für dich.", "error");
                if (c.status !== "pending") return showToast("Schon erledigt.", "error");

                // Bevorzugt bestehende Team-Lobby (mehrere Geschwister)
                let lobbyId = c.lobbyId || null;
                if (lobbyId && typeof liveDuelCollectionRef === "function") {
                    try {
                        const lobbySnap = await liveDuelCollectionRef().doc(lobbyId).get();
                        if (!lobbySnap.exists || (lobbySnap.data() || {}).status === "finished") {
                            lobbyId = null;
                        }
                    } catch (e) { lobbyId = null; }
                }

                if (!lobbyId) {
                    const subject = c.subject || (c.type === "vokabel" ? "vokabel" : "wissen");
                    const iOpts = c.inviteOpts || {};
                    const questions = await buildCoopQuestions(subject, iOpts);
                    if (!questions.length) {
                        return showToast("Keine Fragen geladen. Inhalt prüfen oder kurz warten und erneut versuchen.", "error");
                    }
                    const duelRef = db.collection("parents").doc(currentParentUser.uid)
                        .collection("live_duel").doc();
                    const players = {};
                    players[c.fromKey] = {
                        name: c.fromName || "Spieler", score: 0, hasAnswered: false,
                        lastAnswer: null, word: "", coinsClaimed: false,
                        lastSeen: Date.now(), sessionId: null
                    };
                    players[activePlayerKey] = {
                        name: currentPlayer.name, score: 0, hasAnswered: false,
                        lastAnswer: null, word: "", coinsClaimed: false,
                        lastSeen: Date.now(),
                        sessionId: window.DEVICE_SESSION_ID || null
                    };
                    await duelRef.set({
                        type: "quiz",
                        mode: "coop",
                        status: "waiting",
                        subject: subject,
                        createdBy: c.fromKey,
                        createdByName: c.fromName || "Spieler",
                        createdAt: Date.now(),
                        hostLastSeen: Date.now(),
                        currentIndex: 0,
                        answerSeconds: 25,
                        questions: questions,
                        players: players,
                        order: [c.fromKey, activePlayerKey],
                        fromChallenge: id
                    });
                    lobbyId = duelRef.id;
                } else {
                    // Bestehende Team-Lobby: Spieler explizit eintragen (mehrere Geschwister)
                    try {
                        await liveDuelCollectionRef().doc(lobbyId).update({
                            ["players." + activePlayerKey]: {
                                name: currentPlayer.name,
                                score: 0,
                                hasAnswered: false,
                                lastAnswer: null,
                                word: "",
                                coinsClaimed: false,
                                pending: false,
                                lastSeen: Date.now(),
                                sessionId: window.DEVICE_SESSION_ID || null
                            },
                            order: firebase.firestore.FieldValue.arrayUnion(activePlayerKey)
                        });
                    } catch (eJoin) {
                        console.warn("acceptChallenge lobby join", eJoin);
                    }
                }

                await ref.update({
                    status: "accepted",
                    acceptedAt: Date.now(),
                    lobbyId: lobbyId
                });

                showToast("Einladung angenommen – du bist in der Team-Lobby!", "success");
                if (typeof joinLiveDuelById === "function") {
                    await joinLiveDuelById(lobbyId);
                }
                loadOpenChallenges();
            } catch (e) {
                handleError("acceptChallenge", e, "Annehmen fehlgeschlagen.");
            }
        }

        async function joinChallengeLobby(id) {
            if (!id || !currentParentUser) return;
            try {
                const ref = challengesRef().doc(id);
                const snap = await ref.get();
                if (!snap.exists) return showToast("Einladung weg.", "error");
                const c = snap.data() || {};
                if (!c.lobbyId) return showToast("Noch keine Lobby.", "error");
                if (typeof liveDuelCollectionRef === "function") {
                    const lobbySnap = await liveDuelCollectionRef().doc(c.lobbyId).get();
                    if (!lobbySnap.exists) {
                        await ref.update({ status: "expired" }).catch(function () { });
                        loadOpenChallenges();
                        return showToast("Die Lobby ist abgelaufen (niemand war rechtzeitig da). Bitte neu einladen.", "error");
                    }
                }
                if (typeof joinLiveDuelById === "function") {
                    await joinLiveDuelById(c.lobbyId);
                }
            } catch (e) {
                handleError("joinChallengeLobby", e, "Beitreten fehlgeschlagen.");
            }
        }

        async function declineChallenge(id) {
            if (!id || !currentParentUser) return;
            try {
                await challengesRef().doc(id).update({
                    status: "declined",
                    declinedAt: Date.now(),
                    declinedBy: activePlayerKey || null
                });
                loadOpenChallenges();
            } catch (e) {
                try { await challengesRef().doc(id).delete(); } catch (_) { }
                loadOpenChallenges();
            }
        }

        window.challengePlayer = challengePlayer;
        window.acceptChallenge = acceptChallenge;
        window.declineChallenge = declineChallenge;
        window.joinChallengeLobby = joinChallengeLobby;
        window.loadOpenChallenges = loadOpenChallenges;

        function touchPlayerActivity(key) {
            if (isAnonGuest) return; // Gäste haben kein Familienprofil
            if (!key || !currentParentUser || !ALL_PROFILES[key]) return;
            const now = Date.now();
            ALL_PROFILES[key].lastActive = now;
            if (currentPlayer && activePlayerKey === key) currentPlayer.lastActive = now;
            const sessionPatch = {
                lastActive: now,
                activeSession: {
                    id: window.DEVICE_SESSION_ID || null,
                    ts: now
                }
            };
            ALL_PROFILES[key].activeSession = sessionPatch.activeSession;
            try {
                db.collection("parents").doc(currentParentUser.uid)
                    .collection("profiles").doc(key)
                    .set(sessionPatch, { merge: true })
                    .catch(e => console.warn("lastActive konnte nicht gespeichert werden:", e));
            } catch (e) {
                console.warn("lastActive konnte nicht gespeichert werden:", e);
            }
        }

        async function warnIfProfileOnOtherDevice(key) {
            try {
                if (!currentParentUser || !key) return;
                const snap = await db.collection("parents").doc(currentParentUser.uid)
                    .collection("profiles").doc(key).get();
                if (!snap.exists) return;
                const as = (snap.data() || {}).activeSession;
                if (!as || !as.id || !as.ts) return;
                if (as.id === window.DEVICE_SESSION_ID) return;
                if (Date.now() - as.ts > 90000) return; // älter als 90s → egal
                if (typeof appConfirm === "function") {
                    await appConfirm(
                        "Dieses Profil war gerade auf einem anderen Gerät aktiv. Hier weitermachen? (Das andere Gerät bleibt eingeloggt, Fortschritt speichert das zuletzt aktive Gerät.)",
                        { titel: "Mehrere Geräte", icon: "📱", okText: "Hier weiter", abbrechenText: "OK" }
                    );
                } else if (typeof showToast === "function") {
                    showToast("Profil war auf anderem Gerät aktiv.", "info");
                }
            } catch (e) { /* offline */ }
        }

        function savePlayerProgress() {
            if (!currentPlayer) return;
            currentPlayer.learnedWords = Array.from(sessionLearnedWords);
            currentPlayer.lastActive = Date.now();
            ALL_PROFILES[activePlayerKey] = currentPlayer;
            // Gäste ohne Konto: nur die Anzeige aktualisieren, nichts speichern.
            if (isAnonGuest || !currentParentUser) {
                const c = document.getElementById("menu-coins");
                if (c) c.innerText = currentPlayer.coins || 0;
                return;
            }
            // merge:true, damit parallele Änderungen der Eltern (z.B. zugewiesener Test,
            // Klasse/Geburtstag) nicht vom RAM-Stand des Kindes überschrieben werden.
            db.collection("parents").doc(currentParentUser.uid).collection("profiles").doc(activePlayerKey)
                .set(currentPlayer, { merge: true })
                .catch(e => handleError("savePlayerProgress", e, "Fortschritt konnte nicht gespeichert werden."));
            document.getElementById("menu-coins").innerText = currentPlayer.coins || 0;
        }

        // ============================================================
        //  DASHBOARD - NEUE FUNKTIONEN
        // ============================================================
        let currentDashTab = 'inhalte';
        let currentDashSubTab = 'fragen';
        let selectedStatPlayer = null;
        if (typeof window.DEVICE_SESSION_ID === "undefined") {
            try {
                window.DEVICE_SESSION_ID = sessionStorage.getItem("eduplayDeviceSession") ||
                    ("d" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36));
                sessionStorage.setItem("eduplayDeviceSession", window.DEVICE_SESSION_ID);
            } catch (e) { window.DEVICE_SESSION_ID = "d" + Date.now(); }
        }
        let currentDashboardSection = null;

        function updateDashSubjectFilter() {
            const qSubSel = document.getElementById('dash-question-subject');
            if (!qSubSel) return;
            if (typeof QUESTIONS_DATABASE === 'undefined' || !Array.isArray(QUESTIONS_DATABASE)) return;
            const qGradeVal = document.getElementById('dash-question-grade')?.value || '';
            const bisherigerWert = qSubSel.value;

            // 1. Fragen filtern basierend auf der Klasse. Klasse 11–13 bewusst
            // raus, genau wie in initDashFilters() bei der Klassenliste selbst –
            // sonst tauchten deren Fächer hier trotzdem auf, unabhängig davon,
            // welche Klasse gerade gewählt ist.
            let filtered = QUESTIONS_DATABASE.filter(q => !(q.grade && q.grade > 10));
            if (qGradeVal) {
                if (qGradeVal === 'beruf') filtered = filtered.filter(q => q.area === 'beruf');
                else if (qGradeVal === 'spass') filtered = filtered.filter(q => q.area === 'spass');
                else filtered = filtered.filter(q => q.grade == qGradeVal);
            }

            // 2. Einzigartige Fächer aus den gefilterten Fragen sammeln
            const subjects = [...new Set(filtered.map(q => q.subject).filter(Boolean))].sort();

            // 3. Dropdown aktualisieren, bisherige Auswahl beibehalten, wenn sie
            // in der neu gewählten Klasse noch existiert.
            let html = '<option value="">Alle Fächer</option>';
            subjects.forEach(s => {
                html += `<option value="${s}">${s}</option>`;
            });
            qSubSel.innerHTML = html;
            if (subjects.includes(bisherigerWert)) qSubSel.value = bisherigerWert;
        }
        /**
         * =========================================================
         * BESCHREIBUNG: Bereichswechsel im Dashboard (switchDashboardSection)
         * =========================================================
         * Schaltet zwischen "Inhalte", "Eltern" und "Statistiken" um.
         * Befüllt dabei automatisch die Filter und aktualisiert die Zähler.
         */
        function switchDashboardSection(section) {
            console.log(`📊 switchDashboardSection: ${section}`);
            // Alte "statistiken"-Kachel → Eltern/Fortschritt
            if (section === 'statistiken') section = 'eltern';
            currentDashboardSection = section;

            const sections = ['inhalte', 'eltern'];
            sections.forEach(s => {
                const el = document.getElementById('dash-section-' + s);
                if (el) {
                    el.classList.toggle('hidden', s !== section);
                }
                const tile = document.getElementById('dash-tile-' + s);
                if (tile) tile.classList.toggle('is-open', s === section);
            });

            if (section === 'inhalte') {
                console.log('📊 Initialisiere Inhalte-Tab...');
                updateDashCounts();
                switchDashboardSubTab(currentDashSubTab || 'fragen');
                console.log('✅ Inhalte-Tab initialisiert');
            }
            if (section === 'eltern') {
                switchDashAdminTab(currentDashAdminTab || 'aufgaben', false);
            }

            // Deutlich machen, dass sich unten etwas geöffnet hat, statt dass
            // es aussieht, als wäre beim Antippen nichts passiert.
            const target = document.getElementById('dash-section-' + section);
            if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
        }

        function formatStudyDuration(sec) {
            sec = Math.max(0, Math.floor(sec || 0));
            const m = Math.floor(sec / 60);
            const s = sec % 60;
            if (m <= 0) return s + " Sek.";
            if (s === 0) return m + " Min.";
            return m + " Min. " + String(s).padStart(2, "0") + " Sek.";
        }

        function renderStudyLogOverview() {
            const box = document.getElementById("dash-study-log");
            if (!box) return;
            const today = new Date().toISOString().slice(0, 10);
            const focus = (document.getElementById("dash-focus-profile") || {}).value || "";
            let profileEntries = Object.keys(ALL_PROFILES || {})
                .filter(k => ALL_PROFILES[k] && !ALL_PROFILES[k].isGuest)
                .map(k => ({ key: k, p: ALL_PROFILES[k] }));
            if (focus && ALL_PROFILES[focus]) {
                profileEntries = profileEntries.filter(e => e.key === focus);
            }
            if (!profileEntries.length) {
                box.innerHTML = '<div class="text-gray-500 text-xs py-2">Kein Kind im Fokus gewählt.</div>';
                return;
            }

            // Nur Fokus-Kind (oder alle, falls keines gewählt)
            const todayParts = profileEntries.map(({ p }) => {
                const sec = (p.studyLog && p.studyLog[today]) || 0;
                const cls = sec >= 60 ? "text-indigo-300" : "text-gray-500";
                return `<div class="flex justify-between items-center py-2">
                    <span class="text-white font-bold text-sm">${esc(p.name)}</span>
                    <span class="font-black text-sm ${cls}">${formatStudyDuration(sec)}</span>
                </div>`;
            });
            // Woche (Mo–So der aktuellen Kalenderwoche)
            const now = new Date();
            const dayIdx = (now.getDay() + 6) % 7; // Mo=0
            const weekParts = profileEntries.map(({ p }) => {
                let sec = 0;
                for (let i = 0; i <= dayIdx; i++) {
                    const d = new Date(now);
                    d.setDate(now.getDate() - (dayIdx - i));
                    const day = d.toISOString().slice(0, 10);
                    sec += (p.studyLog && p.studyLog[day]) || 0;
                }
                const cls = sec >= 60 ? "text-indigo-300" : "text-gray-500";
                return `<div class="flex justify-between items-center py-2">
                    <span class="text-white font-bold text-sm">${esc(p.name)}</span>
                    <span class="font-black text-sm ${cls}">${formatStudyDuration(sec)}</span>
                </div>`;
            });

            let html = `<div class="bg-indigo-500/10 border border-indigo-400/20 rounded-xl px-4 py-3.5 space-y-2">
                <div class="text-[11px] text-indigo-300 font-black uppercase tracking-wide">Heute</div>
                ${todayParts.length ? todayParts.join("") : '<div class="text-gray-500 text-xs">Keine Profile</div>'}
            </div>
            <div class="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 space-y-2">
                <div class="text-[11px] text-gray-400 font-black uppercase tracking-wide">Diese Woche</div>
                ${weekParts.length ? weekParts.join("") : '<div class="text-gray-500 text-xs">Keine Profile</div>'}
            </div>`;

            // Frühere Tage: je Spieler aufklappbar
            const playerBlocks = [];
            profileEntries.forEach(({ key, p }) => {
                const days = [];
                for (let i = 1; i < 14; i++) {
                    const d = new Date();
                    d.setDate(d.getDate() - i);
                    const day = d.toISOString().slice(0, 10);
                    const sec = (p.studyLog && p.studyLog[day]) || 0;
                    if (sec >= 30) {
                        const label = new Date(day + "T12:00:00").toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "2-digit" });
                        days.push(`<div class="flex justify-between text-xs py-1.5 border-b border-white/5 last:border-0">
                            <span class="text-gray-400">${label}</span>
                            <span class="text-indigo-300 font-bold">${formatStudyDuration(sec)}</span>
                        </div>`);
                    }
                }
                if (!days.length) return;
                const safeId = 'study-player-' + key.replace(/[^a-zA-Z0-9_-]/g, '_');
                playerBlocks.push(`<div class="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                    <button type="button" onclick="toggleDashPlayerBlock('${safeId}')"
                        class="w-full px-4 py-3.5 flex items-center justify-between hover:bg-white/5 transition min-h-[52px]">
                        <span class="font-bold text-white text-sm">${esc(p.name)} · ${days.length} Tag${days.length === 1 ? '' : 'e'}</span>
                        <span id="${safeId}-arrow" class="text-gray-400 transition-transform text-xs">▼</span>
                    </button>
                    <div id="${safeId}" class="hidden px-4 pb-3.5 pt-1 space-y-0.5">${days.join('')}</div>
                </div>`);
            });
            if (playerBlocks.length) {
                html += `<div class="text-[11px] text-gray-500 font-bold pt-3 pb-1.5 px-0.5">Frühere Tage</div>` +
                    `<div class="space-y-2.5">` + playerBlocks.join("") + `</div>`;
            }
            box.innerHTML = html;
        }

        /**
         * =========================================================
         * BESCHREIBUNG: Dashboard-Zähler (updateDashCounts)
         * =========================================================
         * Zählt Fragen, Vokabeln und Wörter aus den Datenbanken
         * und trägt die Summen in die Spans im Inhalte-Tab ein.
         */
        function updateDashCounts() {
            // 1. Fragen: geladen vs. Manifest-Summe
            let qCount = 0;
            if (typeof QUESTIONS_DATABASE !== 'undefined' && Array.isArray(QUESTIONS_DATABASE)) {
                qCount = QUESTIONS_DATABASE.length;
            }
            let qTotal = 0;
            if (typeof window.FRAGEN_VERZEICHNIS !== 'undefined' && Array.isArray(window.FRAGEN_VERZEICHNIS)) {
                qTotal = window.FRAGEN_VERZEICHNIS.reduce((s, e) => s + (e.n || 0), 0);
            }

            // 2. Vokabeln
            let vCount = 0;
            if (typeof VOCABULARY_DATABASE !== 'undefined') {
                Object.keys(VOCABULARY_DATABASE).forEach(lang => {
                    if (lang === 'tr') return;
                    const langData = VOCABULARY_DATABASE[lang];
                    Object.keys(langData || {}).forEach(level => {
                        const words = langData[level]?.words;
                        if (Array.isArray(words)) vCount += words.length;
                    });
                });
            }

            // 3. Wörter (Kinder)
            let wCount = 0;
            if (typeof GERMAN_WORDS_KIDS !== 'undefined' && Array.isArray(GERMAN_WORDS_KIDS)) {
                wCount = GERMAN_WORDS_KIDS.length;
            } else if (typeof GERMAN_WORDS !== 'undefined' && Array.isArray(GERMAN_WORDS)) {
                wCount = GERMAN_WORDS.length;
            }

            const elQ = document.getElementById('dash-question-count');
            const elV = document.getElementById('dash-vocab-count');
            const elW = document.getElementById('dash-word-count');

            if (elQ) {
                elQ.textContent = qTotal > 0 ? `${qCount} / ~${qTotal}` : String(qCount);
                elQ.title = `${qCount} geladen, ca. ${qTotal} laut Manifest (lazy)`;
            }
            if (elV) elV.textContent = vCount;
            if (elW) elW.textContent = wCount;
        }

        /**
         * =========================================================
         * BESCHREIBUNG: Dynamische Filter befüllen (initDashFilters)
         * =========================================================
         * Liest verfügbare Klassen, Fächer und Wortlängen aus
         * den Datenbanken und befüllt die Auswahl-Dropdowns.
         */

        function initDashFilters() {
            console.log('🔧 initDashFilters wird ausgeführt...');

            // 1. Klassen-Filter
            const qGradeSel = document.getElementById('dash-question-grade');
            if (qGradeSel && typeof QUESTIONS_DATABASE !== 'undefined' && Array.isArray(QUESTIONS_DATABASE)) {
                // Hole alle Klassen aus den Fragen. Klasse 11–13 bewusst raus,
                // genau wie im Kinder-Menü (app-config.js: getAreas()) – dort
                // liegen bislang nur wenige Fragen pro Fach.
                const grades = [...new Set(QUESTIONS_DATABASE.map(q => q.grade).filter(Boolean))].filter(g => g <= 10).sort((a, b) => a - b);
                console.log('📖 Gefundene Schul-Klassen:', grades);

                // Baue das HTML
                let html = '<option value="">Alle Klassen</option>';

                // Schul-Klassen
                grades.forEach(g => {
                    html += `<option value="${g}">${g}. Klasse</option>`;
                });

                // Berufsschule
                const hasBeruf = QUESTIONS_DATABASE.some(q => q.area === 'beruf');
                if (hasBeruf) {
                    html += `<option value="beruf">🏭 Berufsschule</option>`;
                    console.log('📖 Berufsschule hinzugefügt');
                }

                // Spaß
                const hasSpass = QUESTIONS_DATABASE.some(q => q.area === 'spass');
                if (hasSpass) {
                    html += `<option value="spass">🎉 Spaß-Quiz</option>`;
                    console.log('📖 Spaß-Quiz hinzugefügt');
                }

                qGradeSel.innerHTML = html;
            } else if (qGradeSel) {
                qGradeSel.innerHTML = '<option value="">Keine Klassen verfügbar</option>';
            }

            // 2. Fächer-Filter – nutzt updateDashSubjectFilter() (koppelt die
            // Fächerliste an die gewählte Klasse, siehe deren Wiring beim
            // Klassenwechsel weiter unten in renderDashFilters()).
            updateDashSubjectFilter();

            // 3. Vokabel-Niveaus
            updateDashVocabLevels();

            // 4. Wortlängen-Filter
            const wLenSel = document.getElementById('dash-word-length');
            if (wLenSel && typeof GERMAN_WORDS !== 'undefined' && Array.isArray(GERMAN_WORDS)) {
                const lengths = [...new Set(GERMAN_WORDS.map(w => w.length))].sort((a, b) => a - b);
                console.log('🔤 Gefundene Wortlängen:', lengths);
                wLenSel.innerHTML = '<option value="">Alle Längen</option>' +
                    lengths.map(l => `<option value="${l}">${l} Buchstaben</option>`).join('');
            } else if (wLenSel) {
                wLenSel.innerHTML = '<option value="">Keine Längen verfügbar</option>';
            }

            console.log('✅ initDashFilters abgeschlossen');
        }


        /**
                 * =========================================================
                 * BESCHREIBUNG: Vokabel-Niveaus aktualisieren (updateDashVocabLevels)
                 * =========================================================
                 * Lädt die Niveaus (z.B. Klasse 1-4 oder A1/A2) passend zur
                 * aktuell gewählten Sprache (Englisch/Türkisch).
                 */
        function updateDashVocabLevels() {
            console.log('🔄 updateDashVocabLevels wird ausgeführt...');

            const vLang = document.getElementById('dash-vocab-lang')?.value || 'en';
            const vLevelSel = document.getElementById('dash-vocab-level');

            if (!vLevelSel) {
                console.warn('⚠️ dash-vocab-level nicht gefunden!');
                return;
            }

            if (typeof VOCABULARY_DATABASE === 'undefined' || !VOCABULARY_DATABASE[vLang]) {
                console.warn(`⚠️ VOCABULARY_DATABASE[${vLang}] nicht gefunden!`);
                vLevelSel.innerHTML = '<option value="">Keine Niveaus verfügbar</option>';
                return;
            }

            const levels = Object.keys(VOCABULARY_DATABASE[vLang]);
            console.log(`📝 Gefundene Niveaus für ${vLang}:`, levels); 99999

            vLevelSel.innerHTML = '<option value="">Alle Niveaus</option>' +
                levels.map(l => `<option value="${l}">${VOCABULARY_DATABASE[vLang][l].label || l}</option>`).join('');
        }

        /**
                 * =========================================================
                 * BESCHREIBUNG: PIN Abfrage
                 * =========================================================
                 * 
                 * 
                 */

        function openParentArea() {
            // Keine PIN-Abfrage – das Dashboard fragt bereits nach dem PIN
            switchDashboardSection('eltern');
            let tab = 'aufgaben';
            try {
                const m = localStorage.getItem('eduplayDashAdminTab');
                if (m === 'progress' || m === 'rewards' || m === 'aufgaben') tab = m;
            } catch (e) { /* */ }
            switchDashAdminTab(tab, false);
        }

        function fillDashFocusProfile() {
            const sel = document.getElementById('dash-focus-profile');
            if (!sel) return;
            const keys = Object.keys(ALL_PROFILES || {}).filter(k => ALL_PROFILES[k] && !ALL_PROFILES[k].isGuest);
            const prev = sel.value || (typeof localStorage !== 'undefined' ? localStorage.getItem('eduplayDashFocus') : '') || '';
            sel.innerHTML = keys.length
                ? keys.map(k => `<option value="${k}">${esc(ALL_PROFILES[k].name)}</option>`).join('')
                : '<option value="">Kein Spieler</option>';
            if (prev && keys.indexOf(prev) !== -1) sel.value = prev;
            else if (keys.length) sel.value = keys[0];
            syncDashFocusToSelects();
        }

        function syncDashFocusToSelects() {
            const focus = document.getElementById('dash-focus-profile')?.value || '';
            ['dash-sw-profile', 'dash-goal-profile', 'dash-test-profile'].forEach(id => {
                const el = document.getElementById(id);
                if (!el) return;
                if (focus && el.querySelector(`option[value="${focus}"]`)) el.value = focus;
                else if (focus) {
                    // options may not be filled yet – set value after fill
                    el.dataset.focusPending = focus;
                }
            });
        }

        function onDashFocusProfileChange() {
            const focus = document.getElementById('dash-focus-profile')?.value || '';
            try { localStorage.setItem('eduplayDashFocus', focus); } catch (e) { /* */ }
            syncDashFocusToSelects();
            renderDashStrengthWeakness();
            renderStudyGoalAdmin();
            renderDashTestResults();
            renderOpenTasksBanner();
            // Fortschritt nur für Fokus-Kind
            if (typeof renderStudyLogOverview === 'function') renderStudyLogOverview();
            if (typeof renderDashTestStatsOverview === 'function') renderDashTestStatsOverview();
            if (focus && typeof selectStatPlayer === 'function') {
                try { selectStatPlayer(focus); } catch (e) { /* */ }
            }
        }

        function applyGoalPreset(minutes, activity) {
            const m = document.getElementById('dash-goal-minutes');
            const a = document.getElementById('dash-goal-activity');
            if (m) m.value = minutes;
            if (a) a.value = activity;
        }

        function renderOpenTasksBanner() {
            const box = document.getElementById('dash-open-tasks');
            if (!box) return;
            const today = new Date().toISOString().slice(0, 10);
            const keys = Object.keys(ALL_PROFILES || {}).filter(k => ALL_PROFILES[k] && !ALL_PROFILES[k].isGuest);
            const items = [];
            const focusKey = (document.getElementById('dash-focus-profile') || {}).value || '';
            keys.sort((a, b) => (a === focusKey ? -1 : b === focusKey ? 1 : 0));
            keys.forEach(k => {
                const p = ALL_PROFILES[k];
                const g = p.studyGoal;
                if (g && g.minutes && (!g.day || g.day === today)) {
                    const doneSec = (p.studyLog && p.studyLog[today]) || 0;
                    const need = g.minutes * 60;
                    const done = doneSec >= need;
                    if (!done) {
                        items.push(`<div class="glass-card px-3 py-2 flex justify-between items-center gap-2 border border-amber-400/20">
                            <div class="min-w-0">
                                <div class="text-xs font-black text-amber-300">📋 Offener Auftrag · ${esc(p.name)}</div>
                                <div class="text-[11px] text-gray-400">${Math.floor(doneSec / 60)} / ${g.minutes} Min.${g.note ? ' · ' + esc(g.note) : ''}</div>
                            </div>
                        </div>`);
                    }
                }
                if (p.pendingTest) {
                    items.push(`<div class="glass-card px-3 py-2 flex justify-between items-center gap-2 border border-indigo-400/20">
                        <div class="min-w-0">
                            <div class="text-xs font-black text-indigo-300">📝 Offener Test · ${esc(p.name)}</div>
                            <div class="text-[11px] text-gray-400 truncate">${(p.pendingTest.categories || []).slice(0, 3).map(c => esc(labelFuerKategorie(c) || c)).join(', ')}</div>
                        </div>
                    </div>`);
                }
            });
            box.innerHTML = items.length ? items.join('') : '';
        }

        function renderDashFilters() {
            const container = document.getElementById('dash-filter-container');
            if (!container) return;

            const sub = currentDashSubTab || 'fragen';

            if (sub === 'fragen') {
                container.innerHTML = `
            <select id="dash-question-grade" class="input-modern text-xs flex-1 min-w-[70px]">
                <option value="">Alle Klassen</option>
            </select>
            <select id="dash-question-subject" class="input-modern text-xs flex-1 min-w-[70px]">
                <option value="">Alle Fächer</option>
            </select>
            <input type="text" id="dash-question-search" placeholder="🔎 Suche..." class="input-modern text-xs flex-1 min-w-[80px]">
        `;
                // Event-Listener neu setzen
                const qGrade = document.getElementById('dash-question-grade');
                const qSubject = document.getElementById('dash-question-subject');
                const qSearch = document.getElementById('dash-question-search');
                if (qGrade) qGrade.addEventListener('change', function () {
                    // Fächerliste an die neu gewählte Klasse anpassen, sonst blieben
                    // Fächer aus anderen Klassen wählbar (der eigentliche "Fächer nicht
                    // richtig zugeordnet"-Bug).
                    if (qSubject) qSubject.value = '';
                    updateDashSubjectFilter();
                    renderDashQuestions();
                });
                if (qSubject) qSubject.addEventListener('change', renderDashQuestions);
                if (qSearch) qSearch.addEventListener('input', renderDashQuestions);
                initDashFilters();
                renderDashQuestions();
                // Eltern-Bereich braucht den ganzen Fragenbestand, nicht nur das,
                // was ein Kind bisher gespielt hat (Lazy Loading) – sonst fehlen
                // hier Klassen/Fächer, die noch nie geladen wurden.
                if (typeof ladeAlleFragen === 'function') {
                    ladeAlleFragen().then(function () {
                        initDashFilters();
                        renderDashQuestions();
                    });
                }
            } else if (sub === 'vokabeln') {
                container.innerHTML = `
            <select id="dash-vocab-lang" class="input-modern text-xs flex-1 min-w-[70px]">
                <option value="en">🇬🇧 Englisch</option>
            </select>
            <select id="dash-vocab-level" class="input-modern text-xs flex-1 min-w-[70px]">
                <option value="">Alle Niveaus</option>
            </select>
            <input type="text" id="dash-vocab-search" placeholder="🔎 Suche..." class="input-modern text-xs flex-1 min-w-[80px]">
        `;
                document.getElementById('dash-vocab-lang')?.addEventListener('change', () => {
                    updateDashVocabLevels();
                    renderDashVocab();
                });
                document.getElementById('dash-vocab-level')?.addEventListener('change', renderDashVocab);
                document.getElementById('dash-vocab-search')?.addEventListener('input', renderDashVocab);
                renderDashVocab();
            } else if (sub === 'woerter') {
                let themeOpts = '<option value="gemischt">🎲 Alle Kinder-Wörter</option>';
                if (typeof GERMAN_WORDS_KIDS_THEMES !== 'undefined') {
                    Object.keys(GERMAN_WORDS_KIDS_THEMES).forEach(k => {
                        if (k === 'gemischt') return;
                        const n = Array.isArray(GERMAN_WORDS_KIDS_THEMES[k]) ? GERMAN_WORDS_KIDS_THEMES[k].length : 0;
                        const labels = { tiere: '🐾 Tiere', schule: '📚 Schule', essen: '🍎 Essen', sport: '⚽ Sport', natur: '🌿 Natur', zuhause: '🏠 Zuhause', fahrzeuge: '🚗 Fahrzeuge' };
                        themeOpts += `<option value="${k}">${labels[k] || k} (${n})</option>`;
                    });
                }
                container.innerHTML = `
            <select id="dash-word-theme" class="input-modern text-xs flex-1 min-w-[90px]">
                ${themeOpts}
            </select>
            <select id="dash-word-length" class="input-modern text-xs flex-1 min-w-[70px]">
                <option value="">Alle Längen</option>
            </select>
            <input type="text" id="dash-word-search" placeholder="🔎 Suche..." class="input-modern text-xs flex-1 min-w-[80px]">
        `;
                document.getElementById('dash-word-theme')?.addEventListener('change', renderDashWords);
                document.getElementById('dash-word-length')?.addEventListener('change', renderDashWords);
                document.getElementById('dash-word-search')?.addEventListener('input', renderDashWords);
                // Längen aus Kinder-Wörter ableiten
                const wLenSel = document.getElementById('dash-word-length');
                const base = (typeof GERMAN_WORDS_KIDS !== 'undefined' && Array.isArray(GERMAN_WORDS_KIDS))
                    ? GERMAN_WORDS_KIDS
                    : ((typeof GERMAN_WORDS !== 'undefined' && Array.isArray(GERMAN_WORDS)) ? GERMAN_WORDS : []);
                if (wLenSel && base.length) {
                    const lengths = [...new Set(base.map(w => String(w).length))].sort((a, b) => a - b);
                    wLenSel.innerHTML = '<option value="">Alle Längen</option>' +
                        lengths.map(l => `<option value="${l}">${l} Buchstaben</option>`).join('');
                }
                renderDashWords();
            }
        }


        function switchDashboardSubTab(sub) {
            currentDashSubTab = sub;
            ['fragen', 'vokabeln', 'woerter'].forEach(s => {
                const btn = document.getElementById('dash-sub-' + s);
                const view = document.getElementById('dash-sub-' + s + '-view');
                if (!btn || !view) return;
                if (s === sub) {
                    btn.className = 'flex-1 py-2 px-1 rounded-lg font-bold text-white bg-indigo-600 shadow-md transition-all text-xs';
                    view.classList.remove('hidden');
                } else {
                    btn.className = 'flex-1 py-2 px-1 rounded-lg font-bold text-gray-400 bg-gray-900 transition-all text-xs';
                    view.classList.add('hidden');
                }
            });
            renderDashFilters(); // <- NEU: Filter dynamisch rendern
        }



        function renderDashVocab() {
            console.log('📝 renderDashVocab wird ausgeführt...');

            const lang = document.getElementById('dash-vocab-lang')?.value || 'en';
            const level = document.getElementById('dash-vocab-level')?.value || '';
            const search = document.getElementById('dash-vocab-search')?.value.toLowerCase() || '';
            const list = document.getElementById('dash-vocab-list');

            if (!list) {
                console.warn('⚠️ dash-vocab-list nicht gefunden!');
                return;
            }

            if (typeof VOCABULARY_DATABASE === 'undefined') {
                console.warn('⚠️ VOCABULARY_DATABASE nicht definiert!');
                list.innerHTML = '<div class="text-center text-gray-500 text-sm py-4">⚠️ Vokabel-Datenbank nicht geladen</div>';
                return;
            }

            console.log('📝 VOCABULARY_DATABASE verfügbar. Sprachen:', Object.keys(VOCABULARY_DATABASE));

            const langData = VOCABULARY_DATABASE[lang];
            if (!langData) {
                console.warn(`⚠️ Sprache "${lang}" nicht gefunden in VOCABULARY_DATABASE`);
                list.innerHTML = `<div class="text-center text-gray-500 text-sm py-4">😕 Sprache "${lang}" nicht gefunden</div>`;
                return;
            }

            console.log(`📝 Sprache ${lang} gefunden. Levels:`, Object.keys(langData));

            let words = [];
            Object.keys(langData).forEach(key => {
                if (!level || key === level) {
                    const wordList = langData[key]?.words;
                    if (Array.isArray(wordList) && wordList.length > 0) {
                        const labeledWords = wordList.map(w => ({
                            ...w,
                            level: key,
                            levelLabel: langData[key].label || key
                        }));
                        words = words.concat(labeledWords);
                        console.log(`  Level ${key}: ${wordList.length} Wörter geladen`);
                    } else {
                        console.log(`  Level ${key}: keine Wörter oder kein Array`);
                    }
                }
            });

            console.log(`📝 Gesamt Wörter vor Filter: ${words.length}`);

            if (search) {
                const filtered = words.filter(w =>
                    w.de?.toLowerCase().includes(search) ||
                    w.foreign?.toLowerCase().includes(search)
                );
                console.log(`  Nach Suche "${search}" gefiltert: ${filtered.length} Wörter`);
                words = filtered;
            }

            if (words.length === 0) {
                console.log('😕 Keine Vokabeln gefunden');
                list.innerHTML = '<div class="text-center text-gray-500 text-sm py-4">😕 Keine Vokabeln gefunden</div>';
                return;
            }

            const displayWords = words.slice(0, 2000);
            console.log(`📝 Zeige ${displayWords.length} von ${words.length} Vokabeln`);

            list.innerHTML = displayWords.map((w, index) => `
        <div class="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl px-3 py-2 text-sm hover:bg-white/10 transition">
            <span class="text-white font-bold">${index + 1}. ${esc(w.de)}</span>
            <span class="text-gray-400">→</span>
            <span class="text-indigo-300 font-bold">${esc(w.foreign)}</span>
            <span class="text-[10px] text-gray-500">${w.levelLabel || w.level}</span>
        </div>
    `).join('');
        }


        function renderDashQuestions() {
            console.log('📖 renderDashQuestions wird ausgeführt...');

            const grade = document.getElementById('dash-question-grade')?.value || '';
            const subject = document.getElementById('dash-question-subject')?.value || '';
            const search = document.getElementById('dash-question-search')?.value.toLowerCase() || '';
            const list = document.getElementById('dash-question-list');

            if (!list) {
                console.warn('⚠️ dash-question-list nicht gefunden!');
                return;
            }

            if (typeof QUESTIONS_DATABASE === 'undefined' || !Array.isArray(QUESTIONS_DATABASE)) {
                console.warn('⚠️ QUESTIONS_DATABASE nicht verfügbar!');
                list.innerHTML = '<div class="text-center text-gray-500 text-sm py-4">❌ Fragen-Datenbank nicht geladen</div>';
                return;
            }

            console.log(`📖 Fragen gesamt: ${QUESTIONS_DATABASE.length}`);

            // Klasse 11–13 bewusst raus, siehe initDashFilters().
            let questions = QUESTIONS_DATABASE.filter(q => !(q.grade && q.grade > 10));

            // Filter nach Klasse oder Bereich
            if (grade) {
                if (grade === 'beruf') {
                    questions = questions.filter(q => q.area === 'beruf');
                    console.log(`  Nach Bereich "Berufsschule" gefiltert: ${questions.length} Fragen`);
                } else if (grade === 'spass') {
                    questions = questions.filter(q => q.area === 'spass');
                    console.log(`  Nach Bereich "Spaß" gefiltert: ${questions.length} Fragen`);
                } else {
                    questions = questions.filter(q => q.grade == grade);
                    console.log(`  Nach Klasse ${grade} gefiltert: ${questions.length} Fragen`);
                }
            }

            if (subject) {
                questions = questions.filter(q => q.subject === subject);
                console.log(`  Nach Fach ${subject} gefiltert: ${questions.length} Fragen`);
            }

            if (search) {
                questions = questions.filter(q => (q.question || '').toLowerCase().includes(search));
            }

            if (questions.length === 0) {
                console.log('😕 Keine Fragen gefunden für die Filter');
                list.innerHTML = '<div class="text-center text-gray-500 text-sm py-4">😕 Keine Fragen gefunden</div>';
                return;
            }

            const displayQuestions = questions.slice(0, 2000);
            console.log(`📖 Zeige ${displayQuestions.length} von ${questions.length} Fragen`);

            list.innerHTML = displayQuestions.map((q, index) => {
                // Bestimme den Bereichs-Label
                let areaLabel = '';
                if (q.area === 'beruf') {
                    areaLabel = '🏭 Berufsschule';
                } else if (q.area === 'spass') {
                    areaLabel = '🎉 Spaß';
                } else {
                    areaLabel = 'Klasse ' + (q.grade || '?');
                }

                return `
        <div class="bg-white/5 border border-white/5 rounded-xl p-3 text-sm hover:bg-white/10 transition">
            <div class="font-bold text-white">${index + 1}. ${esc(q.question)}</div>
            <div class="text-xs text-gray-400 mt-1">${areaLabel} · ${q.subject || '?'} · ${q.answers?.length || 0} Antworten</div>
            ${q.answers && q.answers.length > 0 ? `<div class="text-xs text-gray-500 mt-1">Antworten: ${q.answers.join(' · ')}</div>` : ''}
        </div>
    `}).join('');
        }

        function renderDashWords() {
            const length = document.getElementById('dash-word-length')?.value || '';
            const search = (document.getElementById('dash-word-search')?.value || '').toUpperCase();
            const theme = document.getElementById('dash-word-theme')?.value || 'gemischt';
            const list = document.getElementById('dash-word-list');
            if (!list) return;

            let words = [];
            if (theme && theme !== 'gemischt' && typeof GERMAN_WORDS_KIDS_THEMES !== 'undefined'
                && Array.isArray(GERMAN_WORDS_KIDS_THEMES[theme])) {
                words = GERMAN_WORDS_KIDS_THEMES[theme].slice();
            } else if (typeof GERMAN_WORDS_KIDS !== 'undefined' && Array.isArray(GERMAN_WORDS_KIDS)) {
                words = GERMAN_WORDS_KIDS.slice();
            } else if (typeof GERMAN_WORDS !== 'undefined' && Array.isArray(GERMAN_WORDS)) {
                words = GERMAN_WORDS.slice();
            } else {
                list.innerHTML = '<div class="text-center text-gray-500 text-sm py-4 w-full">⚠️ Wörter-Datenbank nicht geladen</div>';
                return;
            }

            if (length) words = words.filter(w => String(w).length === parseInt(length, 10));
            if (search) words = words.filter(w => String(w).toUpperCase().includes(search));
            words = [...new Set(words.map(w => String(w).toUpperCase()))].sort((a, b) => a.localeCompare(b, 'de'));

            if (words.length === 0) {
                list.innerHTML = '<div class="text-center text-gray-500 text-sm py-4 w-full">😕 Keine Wörter gefunden</div>';
                return;
            }

            const elW = document.getElementById('dash-word-count');
            if (elW) elW.textContent = String(words.length);

            const displayWords = words.slice(0, 200);
            list.innerHTML = displayWords.map(w =>
                `<span class="bg-white/5 border border-white/5 rounded-lg px-3 py-1.5 text-white text-sm hover:bg-white/10 transition cursor-default">${esc(w)}</span>`
            ).join('') + (words.length > 200
                ? `<div class="w-full text-center text-xs text-gray-500 py-2">… und ${words.length - 200} weitere</div>`
                : '');
        }

        function performDashSearch() {
            const query = document.getElementById('dash-global-search').value.trim().toLowerCase();
            const results = document.getElementById('dash-search-results');
            if (!results) return;
            if (query.length < 2) { results.classList.add('hidden'); return; }

            const found = [];
            if (typeof QUESTIONS_DATABASE !== 'undefined') {
                QUESTIONS_DATABASE.filter(q => !(q.grade && q.grade > 10)).forEach(q => {
                    if ((q.question + ' ' + (q.explanation || '')).toLowerCase().includes(query)) {
                        found.push({
                            type: '📖 Frage',
                            text: q.question,
                            detail: `Klasse ${q.grade || '?'} · ${q.subject || '?'}`
                        });
                    }
                });
            }
            if (typeof VOCABULARY_DATABASE !== 'undefined') {
                Object.keys(VOCABULARY_DATABASE).forEach(lang => {
                    Object.keys(VOCABULARY_DATABASE[lang]).forEach(level => {
                        VOCABULARY_DATABASE[lang][level].words.forEach(w => {
                            if ((w.de + ' ' + w.foreign).toLowerCase().includes(query)) {
                                found.push({
                                    type: '📝 Vokabel',
                                    text: `${w.de} → ${w.foreign}`,
                                    detail: VOCABULARY_DATABASE[lang][level].label
                                });
                            }
                        });
                    });
                });
            }
            if (typeof GERMAN_WORDS !== 'undefined') {
                GERMAN_WORDS.forEach(w => {
                    if (w.toLowerCase().includes(query)) {
                        found.push({ type: '🔤 Wort', text: w, detail: `${w.length} Buchstaben` });
                    }
                });
            }

            const limited = found.slice(0, 20);
            if (limited.length === 0) {
                results.innerHTML = '<div class="text-gray-500 text-sm text-center py-2">😕 Keine Treffer</div>';
            } else {
                results.innerHTML = limited.map(r => `
                            <div class="bg-white/5 border border-white/5 rounded-xl px-3 py-2 text-xs flex justify-between items-center">
                                <span><span class="text-gray-400">${r.type}</span> <span class="text-white">${r.text}</span></span>
                                <span class="text-gray-500">${r.detail}</span>
                            </div>
                        `).join('');
            }
            results.classList.remove('hidden');
        }

        // // Dashboard Filter Events
        // document.addEventListener('DOMContentLoaded', function () {
        //     console.log('📋 Event-Listener werden registriert...');

        //     // ... im Event-Listener Block ...
        //     const qGrade = document.getElementById('dash-question-grade');

        //     if (qGrade) {
        //         qGrade.addEventListener('change', function () {
        //             console.log('🔍 Klasse-Filter geändert:', this.value);

        //             // 1. Erst die Fächer-Liste für die Klasse neu laden
        //             updateDashSubjectFilter();

        //             // 2. Dann die Fragen-Liste basierend auf Klasse UND dem (jetzt neuen) Fach rendern
        //             renderDashQuestions();
        //         });
        //     } const qSubject = document.getElementById('dash-question-subject');



        //     const qSearch = document.getElementById('dash-question-search');
        //     const vLang = document.getElementById('dash-vocab-lang');
        //     const vLevel = document.getElementById('dash-vocab-level');
        //     const vSearch = document.getElementById('dash-vocab-search');
        //     const wLength = document.getElementById('dash-word-length');
        //     const wSearch = document.getElementById('dash-word-search');
        //     const gSearch = document.getElementById('dash-global-search');

        //     if (qGrade) {
        //         qGrade.addEventListener('change', function () {
        //             console.log('🔍 Klasse-Filter geändert:', this.value);
        //             if (qSubject) qSubject.value = ""; // <-- DIESE ZEILE HINZUFÜGEN
        //             renderDashQuestions();
        //         });

        //     }
        //     if (qSubject) {
        //         qSubject.addEventListener('change', function () {
        //             console.log('🔍 Fach-Filter geändert:', this.value);
        //             renderDashQuestions();
        //         });
        //     }

        // Dashboard Filter Events
        document.addEventListener('DOMContentLoaded', function () {
            console.log('📋 Event-Listener werden registriert...');

            const qGrade = document.getElementById('dash-question-grade');
            const qSubject = document.getElementById('dash-question-subject');
            const qSearch = document.getElementById('dash-question-search');
            const vLang = document.getElementById('dash-vocab-lang');
            const vLevel = document.getElementById('dash-vocab-level');
            const vSearch = document.getElementById('dash-vocab-search');
            const wLength = document.getElementById('dash-word-length');
            const wSearch = document.getElementById('dash-word-search');
            const gSearch = document.getElementById('dash-global-search');

            if (qGrade) {
                qGrade.addEventListener('change', function () {
                    console.log('🔍 Klasse-Filter geändert:', this.value);

                    // 1. Die Fächer-Auswahl zurücksetzen (die neue Zeile)
                    if (qSubject) qSubject.value = "";

                    // 2. Die Fächer-Liste für die neu gewählte Klasse aktualisieren
                    updateDashSubjectFilter();

                    // 3. Die Fragen-Liste basierend auf der neuen Auswahl rendern
                    renderDashQuestions();
                });
            }

            if (qSubject) {
                qSubject.addEventListener('change', function () {
                    console.log('🔍 Fach-Filter geändert:', this.value);
                    renderDashQuestions();
                });
            }

            // ... hier folgen dann wie gewohnt qSearch, vLang, usw.



            if (qSearch) {
                qSearch.addEventListener('input', function () {
                    console.log('🔍 Fragen-Suche:', this.value);
                    renderDashQuestions();
                });
            }
            if (vLang) {
                vLang.addEventListener('change', function () {
                    console.log('🔍 Vokabel-Sprache geändert:', this.value);
                    updateDashVocabLevels();
                    renderDashVocab();
                });
            }
            if (vLevel) {
                vLevel.addEventListener('change', function () {
                    console.log('🔍 Vokabel-Niveau geändert:', this.value);
                    renderDashVocab();
                });
            }
            if (vSearch) {
                vSearch.addEventListener('input', function () {
                    console.log('🔍 Vokabel-Suche:', this.value);
                    renderDashVocab();
                });
            }
            if (wLength) {
                wLength.addEventListener('change', function () {
                    console.log('🔍 Wort-Länge geändert:', this.value);
                    renderDashWords();
                });
            }
            if (wSearch) {
                wSearch.addEventListener('input', function () {
                    console.log('🔍 Wort-Suche:', this.value);
                    renderDashWords();
                });
            }
            if (gSearch) {
                gSearch.addEventListener('input', function () {
                    console.log('🔍 Globale Suche:', this.value);
                    performDashSearch();
                });
            }

            console.log('✅ Event-Listener registriert');
        });

        // ============================================================
        //  SCHÜLER-STATISTIKEN (DASHBOARD)
        // ============================================================
        function renderDashPlayerList() {
            const container = document.getElementById('dash-player-list');
            if (!container) return;
            const focus = (document.getElementById('dash-focus-profile') || {}).value || '';
            let keys = Object.keys(ALL_PROFILES || {}).filter(k => ALL_PROFILES[k] && !ALL_PROFILES[k].isGuest);
            if (focus && ALL_PROFILES[focus]) keys = [focus];
            if (keys.length === 0) {
                container.innerHTML =
                    '<div class="text-gray-500 text-sm col-span-2 text-center py-2">Noch keine Spieler</div>';
                return;
            }
            container.innerHTML = keys.map(k => `
                        <button onclick="selectStatPlayer('${k}')" 
                            class="player-list-item p-2 rounded-xl text-center ${selectedStatPlayer === k ? 'bg-indigo-900/50 border border-indigo-500' : 'bg-white/5 border border-white/5'}">
                            <div class="text-white font-bold text-sm">${esc(ALL_PROFILES[k].name)}</div>
                            <div class="text-gray-500 text-[10px]">${playerDescription(ALL_PROFILES[k])}</div>
                        </button>
                    `).join('');
        }

        function toggleSettingsInfo(which) {
            const body = document.getElementById('settings-' + which + '-body');
            const arrow = document.getElementById('settings-' + which + '-arrow');
            if (!body) return;
            const open = body.classList.contains('hidden');
            body.classList.toggle('hidden', !open);
            if (arrow) arrow.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
            if (open && which === 'levels') renderSettingsLevelsBadges();
        }

        function renderSettingsLevelsBadges() {
            const lvlBox = document.getElementById('settings-levels-list');
            const badgeBox = document.getElementById('settings-badges-list');
            if (lvlBox && typeof LEVELS !== 'undefined') {
                lvlBox.innerHTML = LEVELS.map((l, i) => {
                    const next = LEVELS[i + 1];
                    const range = next ? `${l.min}–${next.min - 1} XP` : `ab ${l.min} XP`;
                    return `<div class="flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-1.5">
                        <span class="text-lg">${l.icon}</span>
                        <span class="text-white font-bold flex-1">${esc(l.name)}</span>
                        <span class="text-[11px] text-gray-500">${range}</span>
                    </div>`;
                }).join('');
            }
            if (badgeBox && typeof BADGES !== 'undefined') {
                badgeBox.innerHTML = BADGES.map(b =>
                    `<div class="flex items-start gap-2 bg-white/5 rounded-lg px-2.5 py-1.5">
                        <span class="text-lg shrink-0">${b.icon}</span>
                        <div class="min-w-0">
                            <div class="text-white font-bold text-sm">${esc(b.name)}</div>
                            <div class="text-[11px] text-gray-500 leading-snug">${esc(b.desc || '')}</div>
                        </div>
                    </div>`
                ).join('');
            }
        }

        function toggleDashPlayerList() {
            const list = document.getElementById('dash-player-list');
            const arrow = document.getElementById('dash-player-arrow');
            if (!list || !arrow) return;
            const open = list.classList.contains('hidden');
            list.classList.toggle('hidden', !open);
            arrow.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
        }

        function toggleDashSection(which) {
            const map = {
                tests: ['dash-tests-body', 'dash-tests-arrow'],
                study: ['dash-study-body', 'dash-study-arrow'],
                kurse: ['dash-kurse-body', 'dash-kurse-arrow'],
                goal: ['dash-goal-body', 'dash-goal-arrow'],
                assign: ['dash-assign-body', 'dash-assign-arrow']
            };
            const pair = map[which] || ['dash-study-body', 'dash-study-arrow'];
            const body = document.getElementById(pair[0]);
            const arrow = document.getElementById(pair[1]);
            if (!body || !arrow) return;
            const open = body.classList.contains('hidden');
            body.classList.toggle('hidden', !open);
            arrow.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
            if (open && which === 'kurse' && typeof renderDashKurseOverview === 'function') {
                renderDashKurseOverview();
            }
        }

        function renderDashKurseOverview() {
            const box = document.getElementById('dash-kurse-overview');
            if (!box) return;
            if (typeof KURSE === 'undefined' || !Array.isArray(KURSE) || !KURSE.length) {
                box.innerHTML = '<div class="text-gray-500 text-xs">Keine Kurse geladen.</div>';
                return;
            }
            const focus = (document.getElementById('dash-focus-profile') || {}).value || '';
            let keys = Object.keys(ALL_PROFILES || {}).filter(k => ALL_PROFILES[k] && !ALL_PROFILES[k].isGuest);
            if (focus && ALL_PROFILES[focus]) keys = keys.filter(k => k === focus);
            if (!keys.length) {
                box.innerHTML = '<div class="text-gray-500 text-xs">Kein Kind im Fokus.</div>';
                return;
            }
            box.innerHTML = keys.map(k => {
                const p = ALL_PROFILES[k];
                const doneMap = (p && p.lektionen) || {};
                const rows = KURSE.map(kurs => {
                    const liste = (typeof getLektionenForKurs === 'function')
                        ? getLektionenForKurs(kurs.id)
                        : [];
                    if (!liste.length) return '';
                    const fertig = liste.filter(l => doneMap[l.id] && doneMap[l.id].bestanden).length;
                    const pct = Math.round((fertig / liste.length) * 100);
                    const lektionRows = liste.map(l => {
                        const eintrag = doneMap[l.id];
                        const frei = (typeof istLektionFreigeschaltetFuer === 'function')
                            ? istLektionFreigeschaltetFuer(l, liste, doneMap)
                            : true;
                        let statusIcon, ergebnis, ergebnisClass;
                        if (eintrag && eintrag.bestanden) {
                            statusIcon = '✅';
                            const datum = eintrag.datum ? new Date(eintrag.datum).toLocaleDateString('de-DE') : '';
                            ergebnis = `${eintrag.pct}%${datum ? ' · ' + datum : ''}`;
                            ergebnisClass = 'text-emerald-400';
                        } else if (eintrag) {
                            statusIcon = '🔁';
                            ergebnis = `${eintrag.pct}% – noch nicht bestanden`;
                            ergebnisClass = 'text-amber-400';
                        } else if (!frei) {
                            statusIcon = '🔒';
                            ergebnis = 'gesperrt';
                            ergebnisClass = 'text-gray-500';
                        } else {
                            statusIcon = '▶️';
                            ergebnis = 'noch nicht versucht';
                            ergebnisClass = 'text-gray-500';
                        }
                        return `<div class="flex items-center justify-between gap-2 text-xs px-2.5 py-2.5 rounded-lg bg-white/[0.03]">
                            <span class="text-gray-300 truncate flex-1">${statusIcon} ${esc(l.title)}</span>
                            <span class="${ergebnisClass} shrink-0 font-bold">${ergebnis}</span>
                        </div>`;
                    }).join('');
                    return `<div class="rounded-xl bg-black/20 border border-white/5 px-3.5 py-3">
                        <div class="flex items-center justify-between gap-2 text-xs mb-2">
                            <span class="font-bold text-gray-100 truncate">${kurs.icon || '📘'} ${esc(kurs.title)}</span>
                            <span class="text-gray-400 shrink-0">${fertig}/${liste.length}</span>
                        </div>
                        <div class="w-full bg-white/10 rounded-full h-1.5 overflow-hidden mb-2.5">
                            <div class="h-1.5 rounded-full ${pct >= 100 ? 'bg-emerald-400' : 'bg-amber-400'}" style="width:${pct}%"></div>
                        </div>
                        <div class="space-y-1.5">${lektionRows}</div>
                    </div>`;
                }).join('');
                return `<div class="space-y-3">
                    ${keys.length > 1 ? `<div class="font-bold text-white text-sm">${esc(p.name)}</div>` : ''}
                    ${rows || '<div class="text-[11px] text-gray-500">Noch keine Lektion gestartet</div>'}
                </div>`;
            }).join('');
        }

        // Freischalt-Status für ein beliebiges Kind (nicht nur currentPlayer) berechnen –
        // gleiche Regel wie istLektionFreigeschaltet() in lektionen.js, nur ohne
        // Abhängigkeit vom aktuell eingeloggten Profil.
        function istLektionFreigeschaltetFuer(lektion, liste, doneMap) {
            if (lektion.order <= 1) return true;
            const vorherige = liste.find(l => l.order === lektion.order - 1);
            return !vorherige || !!(doneMap[vorherige.id] && doneMap[vorherige.id].bestanden);
        }

        function toggleDashPlayerBlock(id) {
            const body = document.getElementById(id);
            const arrow = document.getElementById(id + '-arrow');
            if (!body) return;
            const open = body.classList.contains('hidden');
            body.classList.toggle('hidden', !open);
            if (arrow) arrow.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
        }

        function renderDashTestStatsOverview() {
            const box = document.getElementById('dash-test-stats-overview');
            if (!box) return;
            const focus = (document.getElementById('dash-focus-profile') || {}).value || '';
            let keys = Object.keys(ALL_PROFILES || {}).filter(k => ALL_PROFILES[k] && !ALL_PROFILES[k].isGuest);
            if (focus && ALL_PROFILES[focus]) keys = keys.filter(k => k === focus);
            if (!keys.length) {
                box.innerHTML = '<div class="text-gray-500 text-xs">Kein Kind im Fokus / keine Profile</div>';
                return;
            }
            const rows = keys.map(k => {
                const p = ALL_PROFILES[k];
                const hist = p.testHistory || [];
                const safeId = 'test-player-' + k.replace(/[^a-zA-Z0-9_-]/g, '_');
                if (!hist.length) {
                    return `<div class="bg-white/5 rounded-xl px-3 py-2">
                        ${keys.length > 1 ? `<div class="font-bold text-white text-sm">${esc(p.name)}</div>` : ''}
                        <div class="text-[11px] text-gray-500">Noch keine Tests</div>
                    </div>`;
                }
                const first = hist[0];
                const pct0 = first.total > 0 ? Math.round((first.correct / first.total) * 100) : 0;
                const date0 = new Date(first.date);
                const dur0 = (first.durationSec != null && typeof formatDurationSec === 'function')
                    ? formatDurationSec(first.durationSec)
                    : (first.durationSec != null ? Math.round(first.durationSec / 60) + " Min." : "");
                const col0 = pct0 >= 80 ? 'text-emerald-400' : pct0 >= 50 ? 'text-yellow-400' : 'text-rose-400';
                const themen0 = (first.categories || []).slice(0, 5).map(c =>
                    esc((typeof labelFuerKategorie === 'function' ? labelFuerKategorie(c) : null) || c)
                ).join(', ');
                let detail = `<div class="bg-indigo-500/10 border border-indigo-400/20 rounded-xl px-4 py-3.5 mb-3">
                    <div class="text-[10px] text-indigo-300 font-black uppercase tracking-wide">Letzter Test</div>
                    <div class="flex justify-between gap-2 items-center mt-1.5">
                        <span class="${col0} font-black text-sm">${first.correct}/${first.total} (${pct0}%)</span>
                        <span class="text-gray-500 text-[11px] text-right">${dur0 ? "⏱ " + dur0 + " · " : ""}${date0.toLocaleDateString('de-DE')}</span>
                    </div>
                    ${themen0 ? `<div class="text-[11px] text-gray-400 mt-1.5 leading-snug">${themen0}</div>` : ''}
                </div>`;
                if (hist.length > 1) {
                    detail += hist.slice(1, 8).map(t => {
                        const pct = t.total > 0 ? Math.round((t.correct / t.total) * 100) : 0;
                        const date = new Date(t.date);
                        const dur = (t.durationSec != null && typeof formatDurationSec === 'function')
                            ? formatDurationSec(t.durationSec)
                            : (t.durationSec != null ? Math.round(t.durationSec / 60) + " Min." : "");
                        const col = pct >= 80 ? 'text-emerald-400' : pct >= 50 ? 'text-yellow-400' : 'text-rose-400';
                        return `<div class="flex justify-between gap-2 text-xs py-2.5 border-b border-white/5 last:border-0 px-0.5">
                            <span class="${col} font-bold">${t.correct}/${t.total} (${pct}%)</span>
                            <span class="text-gray-500">${dur ? "⏱ " + dur + " · " : ""}${date.toLocaleDateString('de-DE')}</span>
                        </div>`;
                    }).join('');
                }
                if (keys.length === 1) {
                    return `<div class="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5">
                        <div class="text-[11px] text-gray-500 font-bold mb-2.5">${hist.length} Test${hist.length === 1 ? '' : 's'}</div>
                        <div>${detail}</div>
                    </div>`;
                }
                return `<div class="bg-white/5 rounded-xl overflow-hidden">
                    <button type="button" onclick="toggleDashPlayerBlock('${safeId}')"
                        class="w-full px-3 py-2 flex items-center justify-between hover:bg-white/5 transition">
                        <span class="font-bold text-white text-sm">${esc(p.name)} · ${hist.length} Test${hist.length === 1 ? '' : 's'}</span>
                        <span id="${safeId}-arrow" class="text-gray-400 transition-transform text-xs">▼</span>
                    </button>
                    <div id="${safeId}" class="hidden px-3 pb-2 space-y-0.5">${detail}</div>
                </div>`;
            });
            box.innerHTML = rows.join('');
        }

        function selectStatPlayer(key) {
            selectedStatPlayer = key;
            renderDashPlayerList();
            const sc = document.getElementById('dash-stats-container');
            if (sc) sc.classList.remove('hidden');
            renderPlayerStats(key);
        }

        function focusProfileForDash() {
            const focus = (document.getElementById('dash-focus-profile') || {}).value || '';
            return (focus && ALL_PROFILES[focus]) ? ALL_PROFILES[focus] : null;
        }
        function updateDashSectionPreviews(p) {
            p = p || focusProfileForDash();
            const today = new Date().toISOString().slice(0, 10);
            const studyEl = document.getElementById('dash-study-preview');
            if (studyEl) {
                if (!p) studyEl.textContent = '';
                else {
                    const sec = (p.studyLog && p.studyLog[today]) || 0;
                    studyEl.textContent = 'heute ' + (typeof formatStudyDuration === 'function' ? formatStudyDuration(sec) : (Math.floor(sec / 60) + ' Min.'));
                }
            }
            const kurseEl = document.getElementById('dash-kurse-preview');
            if (kurseEl) {
                if (!p || typeof KURSE === 'undefined') kurseEl.textContent = '';
                else {
                    const doneMap = p.lektionen || {};
                    let fertig = 0, total = 0;
                    KURSE.forEach(function (kurs) {
                        const liste = (typeof getLektionenForKurs === 'function') ? getLektionenForKurs(kurs.id) : [];
                        total += liste.length;
                        fertig += liste.filter(function (l) { return doneMap[l.id] && doneMap[l.id].bestanden; }).length;
                    });
                    kurseEl.textContent = total ? (fertig + '/' + total + ' Lektionen') : '';
                }
            }
            const testEl = document.getElementById('dash-tests-preview');
            if (testEl) {
                const hist = (p && p.testHistory) || [];
                if (!hist.length) testEl.textContent = 'noch kein Test';
                else {
                    const t = hist[0];
                    const pct = t.total > 0 ? Math.round((t.correct / t.total) * 100) : 0;
                    testEl.textContent = 'letzter Test ' + pct + '%';
                }
            }
        }

        function renderPlayerStats(key) {
            const p = ALL_PROFILES[key];
            const container = document.getElementById('dash-stats-container');
            if (!container) return;
            if (!p) {
                container.innerHTML = '<div class="text-center text-gray-400 text-sm py-8">Spieler nicht gefunden</div>';
                return;
            }

            const totalCorrect = getTotalCorrect(p);
            const totalAttempts = Object.values(p.stats || {}).reduce((sum, s) => sum + s.attempts, 0);
            const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
            const lvl = getLevelInfo(p.xp || 0);
            const streak = p.streak ? p.streak.count : 0;
            const vocabCount = p.learnedWords ? p.learnedWords.length : 0;

            let subjectHtml = '';
            const subjectStats = {};
            Object.keys(p.stats || {}).forEach(cat => {
                const s = p.stats[cat];
                const pct = s.attempts > 0 ? Math.round((s.correct / s.attempts) * 100) : 0;
                subjectStats[cat] = { ...s, pct };
            });
            const sortedSubjects = Object.keys(subjectStats).sort((a, b) => subjectStats[b].attempts - subjectStats[a].attempts);
            if (sortedSubjects.length > 0) {
                subjectHtml = sortedSubjects.slice(0, 6).map(cat => {
                    const s = subjectStats[cat];
                    const label = labelFuerKategorie(cat) || CATEGORY_LABELS[cat] || cat;
                    const barColor = s.pct >= 80 ? 'good' : s.pct >= 50 ? 'ok' : 'bad';
                    return `
                                <div class="dash-stat-card">
                                    <div class="flex justify-between">
                                        <span class="label">${label}</span>
                                        <span class="text-xs font-bold text-gray-300">${s.correct}/${s.attempts} (${s.pct}%)</span>
                                    </div>
                                    <div class="stat-bar mt-1">
                                        <div class="fill ${barColor}" style="width:${s.pct}%"></div>
                                    </div>
                                </div>
                            `;
                }).join('');
            } else {
                subjectHtml = '<div class="text-gray-500 text-sm text-center py-2">Noch keine Übungen absolviert</div>';
            }

            const badges = (p.badges || []).map(id => BADGES.find(b => b.id === id)).filter(Boolean);
            const badgeHtml = badges.length > 0 ?
                badges.map(b => `<span class="text-2xl" title="${b.name}">${b.icon}</span>`).join('') :
                '<span class="text-gray-500 text-sm">Noch keine Abzeichen</span>';

            const tests = (p.testHistory || []).slice(0, 3);
            const testHtml = tests.length > 0 ?
                tests.map(t => {
                    const pct = t.total > 0 ? Math.round((t.correct / t.total) * 100) : 0;
                    const date = new Date(t.date);
                    return `<div class="dash-stat-card flex justify-between items-center">
                                    <span class="text-white text-sm">${t.correct}/${t.total} (${pct}%)</span>
                                    <span class="text-gray-500 text-xs">${date.toLocaleDateString('de-DE')}</span>
                                </div>`;
                }).join('') :
                '<div class="text-gray-500 text-sm">Noch keine Tests absolviert</div>';

            const rewards = p.redeemedRewards || [];
            const rewardHtml = rewards.length > 0 ?
                rewards.slice(0, 3).map(r =>
                    `<div class="dash-stat-card flex justify-between items-center"><span class="text-white text-sm">${esc(r.name)}</span><span class="text-yellow-400 text-xs">🪙 ${r.cost}</span></div>`
                ).join('') :
                '<div class="text-gray-500 text-sm">Noch keine Belohnungen eingelöst</div>';

            updateDashSectionPreviews(p);
            const weak = getWeakestCategory(p);
            const weakChip = weak
                ? `<div class="mt-1 text-[11px] font-bold text-amber-300 truncate">💡 ${esc(labelFuerKategorie(weak.category) || weak.category)} · ${Math.round(weak.pct * 100)}%</div>`
                : "";
            const weakHtml = weak ? `
                        <div class="dash-stat-card border-l-4 border-amber-500">
                            <div class="label">💡 Schwächste Kategorie</div>
                            <div class="text-white font-bold text-sm">${labelFuerKategorie(weak.category) || CATEGORY_LABELS[weak.category] || weak.category}</div>
                            <div class="text-gray-400 text-xs">${Math.round(weak.pct * 100)}% richtig (${weak.attempts} Versuche)</div>
                        </div>
                    ` :
                '<div class="dash-stat-card text-gray-400 text-sm">🔹 Alle Kategorien sind gut!</div>';

            container.innerHTML = `
                        <!-- Kopf: kompakt, Schüler-Karte -->
                        <div class="glass-card p-3.5">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black shrink-0"
                                    style="background:linear-gradient(135deg,#6366f1,#a855f7);">${esc((p.name || '?').charAt(0).toUpperCase())}</div>
                                <div class="min-w-0 flex-1">
                                    <div class="text-lg font-black text-white truncate leading-tight">${esc(p.name)}</div>
                                    <div class="text-xs font-bold text-yellow-400">${lvl.current.icon} Level ${lvl.index + 1} · ${lvl.current.name}</div>
                                    ${weakChip}
                                    <div class="w-full bg-white/10 rounded-full h-1.5 mt-1.5 overflow-hidden">
                                        <div class="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full" style="width:${lvl.progressPct}%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-3 gap-1.5 mt-3">
                                <div class="rounded-xl bg-white/5 border border-white/5 py-2 text-center">
                                    <div class="text-[10px] text-gray-500 font-bold">Streak</div>
                                    <div class="text-sm font-black text-orange-300">🔥 ${streak}</div>
                                </div>
                                <div class="rounded-xl bg-white/5 border border-white/5 py-2 text-center">
                                    <div class="text-[10px] text-gray-500 font-bold">Coins</div>
                                    <div class="text-sm font-black text-yellow-400">🪙 ${p.coins || 0}</div>
                                </div>
                                <div class="rounded-xl bg-white/5 border border-white/5 py-2 text-center">
                                    <div class="text-[10px] text-gray-500 font-bold">Vokabeln</div>
                                    <div class="text-sm font-black text-indigo-300">📚 ${vocabCount}</div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-3 gap-2">
                            <div class="dash-stat-card text-center py-2.5">
                                <div class="label">Richtig</div>
                                <div class="value text-base">${totalCorrect}</div>
                                <div class="sub">von ${totalAttempts}</div>
                            </div>
                            <div class="dash-stat-card text-center py-2.5">
                                <div class="label">Treffer</div>
                                <div class="value text-base ${accuracy >= 80 ? 'text-emerald-400' : accuracy >= 50 ? 'text-yellow-400' : 'text-rose-400'}">${accuracy}%</div>
                            </div>
                            <div class="dash-stat-card text-center py-2.5">
                                <div class="label">XP</div>
                                <div class="value text-base">${p.xp || 0}</div>
                                <div class="sub">${lvl.next ? `→ ${lvl.next.min}` : '🏆 Max'}</div>
                            </div>
                        </div>
                        
                        <!-- Schwächste Kategorie -->
                        ${weakHtml}
                        
                        <!-- Fachspezifische Übersicht -->
                        <div class="glass-card p-4">
                            <div class="label mb-2">📚 Fachspezifische Übersicht</div>
                            ${subjectHtml}
                        </div>
                        
                        <!-- Abzeichen -->
                        <div class="glass-card p-4">
                            <div class="label mb-2">🏅 Abzeichen</div>
                            <div class="flex flex-wrap gap-2">${badgeHtml}</div>
                        </div>
                        
                        <!-- Letzte Tests -->
                        <div class="glass-card p-4">
                            <div class="label mb-2">📝 Letzte Tests</div>
                            ${testHtml}
                        </div>
                        
                        <!-- Eingelöste Belohnungen -->
                        <div class="glass-card p-4">
                            <div class="label mb-2">🎁 Eingelöste Belohnungen</div>
                            ${rewardHtml}
                        </div>
                    `;
        }

        function getWeakestCategory(p) {
            if (!p || !p.stats) return null;
            let weakest = null;
            Object.keys(p.stats).forEach(cat => {
                const s = p.stats[cat];
                if (s.attempts >= 3) {
                    const pct = s.correct / s.attempts;
                    if (!weakest || pct < weakest.pct) weakest = {
                        category: cat,
                        pct,
                        attempts: s.attempts,
                        correct: s.correct
                    };
                }
            });
            return (weakest && weakest.pct < 0.7) ? weakest : null;
        }

        function weaknessDismissKey() {
            return "eduplayWeakDismiss_" + (activePlayerKey || "x");
        }
        function isWeaknessDismissedToday() {
            try {
                const d = JSON.parse(localStorage.getItem(weaknessDismissKey()) || "null");
                if (!d || !d.day) return false;
                return d.day === new Date().toISOString().slice(0, 10);
            } catch (e) { return false; }
        }
        function dismissWeaknessSuggestion(untilTomorrow) {
            try {
                localStorage.setItem(weaknessDismissKey(), JSON.stringify({
                    day: untilTomorrow ? new Date().toISOString().slice(0, 10) : "forever",
                    ts: Date.now()
                }));
            } catch (e) { /* */ }
            const card = document.getElementById("weakness-card");
            if (card) { card.classList.add("hidden"); card.innerHTML = ""; }
            if (typeof showToast === "function") showToast("Tipp ausgeblendet (bis morgen)", "info");
        }

        function renderWeaknessSuggestion() {
            const card = document.getElementById("weakness-card");
            if (!card) return;
            if (isWeaknessDismissedToday()) {
                card.classList.add("hidden");
                card.innerHTML = "";
                return;
            }
            const weak = getWeakestCategory(currentPlayer);
            if (weak) {
                const label = labelFuerKategorie(weak.category) || CATEGORY_LABELS[weak.category] || weak.category;
                const pct = Math.round(weak.pct * 100);
                const n = 15;
                const catSafe = String(weak.category).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
                card.innerHTML =
                    `<div class="glass-card-glow p-4 relative pr-2" style="border-color:rgba(245,158,11,0.2);">
                        <button type="button" onclick="event.stopPropagation();dismissWeaknessSuggestion(true)" title="Heute ausblenden"
                            class="continue-card-close" aria-label="Blitz-Übung ausblenden">✕</button>
                        <div class="font-bold text-yellow-400 text-sm pr-10">⚡ Blitz-Übung</div>
                        <div class="text-xs text-gray-300 mt-1 pr-2">${label}: nur ${pct}% richtig – ${n} Fragen, dann bist du durch.</div>
                        <button type="button" onclick="startBlitzUebung('${catSafe}')" class="btn-primary text-xs py-2.5 px-4 mt-3 w-full" style="background:var(--gradient-amber);box-shadow:0 4px 16px rgba(245,158,11,0.3);">Los · ${n} Fragen</button>
                    </div>`;
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
                card.innerHTML = "";
            }
        }

        async function startBlitzUebung(cat) {
            if (!cat) return showToast("Kein Thema gewählt.", "error");
            if (typeof showToast === "function") showToast("Fragen werden geladen…", "info");
            if (typeof ladeAlleFragen === "function") {
                try { await ladeAlleFragen(); } catch (e) { /* */ }
            }
            let pool = [];
            if (typeof questionsForKey === "function") pool = (questionsForKey(cat) || []).slice();
            if (!pool.length && typeof QUESTIONS_DATABASE !== "undefined") {
                pool = QUESTIONS_DATABASE.filter(q => q && q.category === cat);
            }
            // Klasse 1 u.ä.: Stats-Key manchmal nur Prefix (k1_mathe) – breiter matchen
            if (!pool.length && typeof QUESTIONS_DATABASE !== "undefined" && cat) {
                const prefix = String(cat).replace(/:$/, "");
                pool = QUESTIONS_DATABASE.filter(q => q && (
                    q.category === cat ||
                    String(q.category || "").startsWith(prefix + "_") ||
                    String(q.category || "").startsWith(prefix + ":") ||
                    (q.grade === 1 && String(cat).indexOf("k1") === 0 && q.subject && String(cat).indexOf(q.subject) >= 0)
                ));
            }
            if (!pool.length && currentPlayer && Array.isArray(currentPlayer.wrongQuestions) && currentPlayer.wrongQuestions.length) {
                const db = (typeof QUESTIONS_DATABASE !== "undefined") ? QUESTIONS_DATABASE : [];
                pool = currentPlayer.wrongQuestions
                    .map(w => db.find(q => q.category === w.category && q.question === w.question))
                    .filter(Boolean);
            }
            if (!pool.length) {
                return showToast("Keine Fragen zu diesem Thema. Mit ✕ ausblenden oder anderes Fach üben.", "error");
            }
            const n = Math.min(15, pool.length);
            const qs = pool.sort(() => Math.random() - 0.5).slice(0, n);
            window.__eduplayBlitzCat = cat;
            window.__eduplayBlitzActive = true;
            if (typeof launchQuiz === "function") launchQuiz(qs);
            else showToast("Quiz konnte nicht starten.", "error");
        }

        function renderPendingTestCard() {
            const card = document.getElementById("pending-test-card");
            if (!card) return;
            if (currentPlayer && currentPlayer.pendingTest) {
                const t = currentPlayer.pendingTest;
                const labels = t.categories.map(c => labelFuerKategorie(c) || CATEGORY_LABELS[c] || c).join(", ");
                const minutes = Math.round(t.timeLimitSeconds / 60);
                card.innerHTML =
                    `<div class="glass-card-glow p-5 text-white" style="background:linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.1));border-color:rgba(99,102,241,0.2);">
                                <div class="font-black text-lg mb-1">📝 Neuer Test wartet auf dich!</div>
                                <div class="text-xs opacity-80 mb-3">Themen: ${labels} · ⏱️ ${minutes} Min.</div>
                                <button onclick="startAssignedTest()" class="btn-primary w-full text-center" style="background:var(--gradient-cool);">Test jetzt starten 🚀</button>
                            </div>`;
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
                card.innerHTML = "";
            }
        }

        function startQuizForCategory(cat) {
            const pool = questionsForKey(cat) || [];
            launchQuiz(pool);
        }

        // ============================================================
        //  DASHBOARD ADMIN
        // ============================================================
        let currentDashAdminTab = 'aufgaben';

        function switchDashAdminTab(tab, scroll) {
            // Alt: 'test' → 'aufgaben'
            if (tab === 'test') tab = 'aufgaben';
            if (scroll === undefined) scroll = true;
            currentDashAdminTab = tab;
            try { localStorage.setItem('eduplayDashAdminTab', tab); } catch (e) { /* */ }
            ['aufgaben', 'progress', 'rewards'].forEach(t => {
                const view = document.getElementById('dash-admin-' + t + '-view');
                if (view) view.classList.toggle('hidden', t !== tab);
                const btn = document.getElementById('dash-admin-' + t);
                if (btn) {
                    btn.classList.toggle('active', t === tab);
                }
            });
            fillDashFocusProfile();
            renderOpenTasksBanner();
            if (tab === 'aufgaben') {
                renderDashStrengthWeakness();
                renderStudyGoalAdmin();
                renderDashAdminTest();
                renderTestTemplatesList();
                syncDashFocusToSelects();
            }
            if (tab === 'progress') {
                const focus = (document.getElementById('dash-focus-profile') || {}).value || '';
                if (focus && ALL_PROFILES[focus]) selectedStatPlayer = focus;
                renderStudyLogOverview();
                renderDashTestStatsOverview();
                if (typeof renderDashKurseOverview === "function") renderDashKurseOverview();
                updateDashSectionPreviews();
                if (selectedStatPlayer) {
                    const sc = document.getElementById('dash-stats-container');
                    if (sc) sc.classList.remove('hidden');
                    renderPlayerStats(selectedStatPlayer);
                }
            }
            if (tab === 'rewards') {
                renderDashAdminProgress();
                renderDashRewards();
            }
            if (!scroll) return;
            const target = document.getElementById('dash-admin-' + tab + '-view');
            if (target) setTimeout(function () {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 60);
        }

        function renderDashAdmin() {
            renderStudyGoalAdmin();
            renderDashAdminProgress();
            renderDashAdminTest();
            renderDashRewards();
            maybeShowParentWeeklyReport();
        }

        function maybeShowParentWeeklyReport() {
            if (!currentParentUser || currentParentUser.isAnonymous) return;
            const uid = currentParentUser.uid;
            const key = "eduplayParentReport_" + uid;
            try {
                const last = Number(localStorage.getItem(key) || 0);
                if (last && (Date.now() - last) < 7 * 24 * 60 * 60 * 1000) return;
            } catch (e) { return; }
            const today = new Date().toISOString().slice(0, 10);
            const keys = Object.keys(ALL_PROFILES || {}).filter(function (k) {
                return ALL_PROFILES[k] && !ALL_PROFILES[k].isGuest;
            });
            if (!keys.length) return;
            const lines = keys.map(function (k) {
                const p = ALL_PROFILES[k];
                const sec = (p.studyLog && p.studyLog[today]) || 0;
                const time = (typeof formatStudyDuration === "function")
                    ? formatStudyDuration(sec) : (Math.floor(sec / 60) + " Min.");
                const hist = p.testHistory || [];
                const t = hist[0];
                const testLine = t
                    ? ("Test " + Math.round((t.correct / Math.max(1, t.total)) * 100) + "%")
                    : "kein Test";
                const g = p.studyGoal;
                const goalOk = g && g.minutes && (!g.day || g.day === today);
                const goalLine = goalOk
                    ? ("Auftrag " + Math.min(100, Math.round((sec / (g.minutes * 60)) * 100)) + "%")
                    : "kein Auftrag";
                return "• " + (p.name || "Kind") + ": heute " + time + " · " + testLine + " · " + goalLine;
            });
            try { localStorage.setItem(key, String(Date.now())); } catch (e) { /* */ }
            const text = "Kurzüberblick für diese Woche:\n\n" + lines.join("\n");
            if (typeof appAlert === "function") {
                setTimeout(function () {
                    appAlert(text, { titel: "📊 Eltern-Bericht", icon: "📊", okText: "Alles klar" });
                }, 600);
            } else {
                showToast("Eltern-Bericht bereit", "success");
            }
        }
        window.maybeShowParentWeeklyReport = maybeShowParentWeeklyReport;

        function renderDashAdminProgress() {
            const container = document.getElementById('dash-admin-stats');
            if (!container) return;
            const keys = Object.keys(ALL_PROFILES || {}).filter(k => ALL_PROFILES[k] && !ALL_PROFILES[k].isGuest);
            if (keys.length === 0) {
                container.innerHTML = '<div class="text-gray-500 text-sm text-center py-4">Noch keine Spieler angelegt</div>';
                return;
            }
            const today = new Date().toISOString().slice(0, 10);
            container.innerHTML = keys.map(k => {
                const p = ALL_PROFILES[k];
                const totalCorrect = getTotalCorrect(p);
                const totalAttempts = Object.values(p.stats || {}).reduce((sum, s) => sum + s.attempts, 0);
                const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
                const lvl = getLevelInfo(p.xp || 0);
                const studySec = (p.studyLog && p.studyLog[today]) || 0;
                const studyTxt = (typeof formatStudyDuration === "function")
                    ? formatStudyDuration(studySec)
                    : (Math.floor(studySec / 60) + " Min.");
                const g = p.studyGoal;
                const goalActive = g && g.minutes && (!g.day || g.day === today);
                let goalLine = "";
                if (goalActive) {
                    const need = g.minutes * 60;
                    const pct = Math.min(100, Math.round((studySec / need) * 100));
                    const done = studySec >= need;
                    goalLine = `<div class="mt-2">
                        <div class="flex justify-between text-[11px] font-bold mb-1">
                            <span class="${done ? "text-emerald-400" : "text-amber-300"}">📋 Auftrag ${done ? "✓" : ""} · ${studyTxt} / ${g.minutes} Min.</span>
                            <span class="text-gray-500">${pct}%</span>
                        </div>
                        <div class="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                            <div class="h-1.5 rounded-full ${done ? "bg-emerald-400" : "bg-amber-400"}" style="width:${pct}%"></div>
                        </div>
                    </div>`;
                }
                const badges = (p.badges || []).map(id => (typeof BADGES !== 'undefined' ? BADGES.find(b => b.id === id) : null)).filter(Boolean);
                const badgeLine = badges.length
                    ? `<div class="mt-1.5 flex flex-wrap gap-1">${badges.map(b => `<span class="text-base" title="${esc(b.name)}">${b.icon}</span>`).join('')}</div>`
                    : '';
                return `
                            <div class="bg-white/5 border border-white/5 rounded-xl p-3">
                                <div class="flex justify-between items-center">
                                    <span class="font-bold text-white">${esc(p.name)}</span>
                                    <span class="text-yellow-400 text-sm">${lvl.current.icon} ${lvl.current.name}</span>
                                </div>
                                <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs mt-1">
                                    <span class="text-yellow-400 font-bold">🪙 ${p.coins || 0}</span>
                                    <span class="text-gray-400">🔥 ${p.streak ? p.streak.count : 0}d Streak</span>
                                    <span class="${accuracy >= 80 ? 'text-emerald-400' : accuracy >= 50 ? 'text-yellow-400' : 'text-rose-400'}">${accuracy}% Treffer</span>
                                </div>
                                ${goalLine}
                                ${badgeLine}
                                ${(p.redeemedRewards && p.redeemedRewards.length) ? `<div class="mt-1.5 text-[11px] text-gray-500">🎁 ${p.redeemedRewards.length} Belohnung${p.redeemedRewards.length === 1 ? '' : 'en'} eingelöst</div>` : ''}
                            </div>
                        `;
            }).join('');
        }

        const STUDY_GOAL_LABELS = {
            any: "Alles lernen",
            vokabeln: "Vokabeln",
            wissen: "Wissen",
            lesen: "Lesen",
            suchsel: "Suchsel"
        };

        function renderStudyGoalAdmin() {
            const sel = document.getElementById("dash-goal-profile");
            const list = document.getElementById("dash-goal-list");
            const keys = Object.keys(ALL_PROFILES || {}).filter(k => ALL_PROFILES[k] && !ALL_PROFILES[k].isGuest);
            if (sel) {
                const prev = sel.value;
                sel.innerHTML = keys.length
                    ? keys.map(k => `<option value="${k}">${esc(ALL_PROFILES[k].name)}</option>`).join("")
                    : '<option value="">Kein Spieler</option>';
                if (prev && keys.indexOf(prev) !== -1) sel.value = prev;
            }
            if (!list) return;
            const today = new Date().toISOString().slice(0, 10);
            const rows = keys.map(k => {
                const p = ALL_PROFILES[k];
                const g = p.studyGoal;
                if (!g || !g.minutes) return "";
                if (g.day && g.day !== today) return "";
                const doneSec = (p.studyLog && p.studyLog[today]) || 0;
                const needSec = (g.minutes || 0) * 60;
                const done = doneSec >= needSec;
                const label = STUDY_GOAL_LABELS[g.activity] || "Lernen";
                const pct = needSec ? Math.min(100, Math.round((doneSec / needSec) * 100)) : 0;
                const prog = (typeof formatStudyDuration === "function")
                    ? formatStudyDuration(doneSec) + " / " + g.minutes + " Min."
                    : Math.floor(doneSec / 60) + " / " + g.minutes + " Min.";
                return `<div class="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center justify-between gap-2">
                    <div class="min-w-0 flex-1">
                        <div class="font-bold text-white text-sm">${esc(p.name)} · ${esc(label)}</div>
                        <div class="text-[11px] ${done ? "text-emerald-400" : "text-amber-300"} font-bold">${done ? "✓ Erledigt · " : ""}${prog} · ${pct}%</div>
                        <div class="w-full bg-white/10 rounded-full h-1.5 mt-1.5 overflow-hidden"><div class="h-1.5 rounded-full ${done ? "bg-emerald-400" : "bg-amber-400"}" style="width:${pct}%"></div></div>
                        ${g.note ? `<div class="text-[11px] text-gray-500 truncate">${esc(g.note)}</div>` : ""}
                    </div>
                    <button type="button" onclick="clearStudyGoal('${k}')"
                        class="shrink-0 text-xs font-bold py-1.5 px-2.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-400/30 hover:bg-rose-500/30">Zurückziehen</button>
                </div>`;
            }).filter(Boolean);
            list.innerHTML = rows.length
                ? rows.join("")
                : '<div class="text-gray-500 text-xs py-1">Kein aktiver Auftrag.</div>';
        }

        function assignStudyGoalFromDashboard() {
            const profileKey = document.getElementById("dash-goal-profile")?.value;
            const minutes = parseInt(document.getElementById("dash-goal-minutes")?.value, 10) || 0;
            const activity = document.getElementById("dash-goal-activity")?.value || "any";
            const noteRaw = (document.getElementById("dash-goal-note")?.value || "").trim();
            const note = (typeof cleanInput === "function") ? cleanInput(noteRaw, 60) : noteRaw.slice(0, 60);
            if (!profileKey || !ALL_PROFILES[profileKey]) return showToast("Kein Spieler ausgewählt!", "error");
            if (minutes < 5 || minutes > 180) return showToast("Minuten: 5–180", "error");
            const studyGoal = {
                minutes,
                activity,
                note: note || "",
                day: new Date().toISOString().slice(0, 10),
                createdAt: new Date().toISOString()
            };
            ALL_PROFILES[profileKey].studyGoal = studyGoal;
            if (activePlayerKey === profileKey && currentPlayer) currentPlayer.studyGoal = studyGoal;
            if (currentParentUser) {
                db.collection("parents").doc(currentParentUser.uid).collection("profiles").doc(profileKey)
                    .update({ studyGoal })
                    .catch(e => handleError("assignStudyGoal", e, "Auftrag konnte nicht gespeichert werden."));
            }
            showToast(`Auftrag für ${esc(ALL_PROFILES[profileKey].name)}: ${minutes} Min.`, "success");
            renderStudyGoalAdmin();
            if (typeof renderStudyGoalCard === "function") renderStudyGoalCard();
            if (typeof renderTodayStatusCard === "function") renderTodayStatusCard();
        }

        function clearStudyGoal(profileKey) {
            if (!profileKey || !ALL_PROFILES[profileKey]) return;
            ALL_PROFILES[profileKey].studyGoal = null;
            if (activePlayerKey === profileKey && currentPlayer) currentPlayer.studyGoal = null;
            if (currentParentUser) {
                db.collection("parents").doc(currentParentUser.uid).collection("profiles").doc(profileKey)
                    .update({ studyGoal: null })
                    .catch(e => handleError("clearStudyGoal", e, "Auftrag konnte nicht gelöscht werden."));
            }
            showToast("Auftrag zurückgezogen.", "success");
            renderStudyGoalAdmin();
            if (typeof renderStudyGoalCard === "function") renderStudyGoalCard();
            if (typeof renderTodayStatusCard === "function") renderTodayStatusCard();
        }


        function renderTodayStatusCard() {
            const card = document.getElementById("today-status-card");
            if (!card || !currentPlayer) { if (card) card.classList.add("hidden"); return; }
            const today = new Date().toISOString().slice(0, 10);
            const sec = (currentPlayer.studyLog && currentPlayer.studyLog[today]) || 0;
            const mins = Math.floor(sec / 60);
            const g = currentPlayer.studyGoal;
            const goalOk = g && g.minutes && (!g.day || g.day === today) && sec >= g.minutes * 60;
            const goalOpen = g && g.minutes && (!g.day || g.day === today) && !goalOk;
            const testOpen = !!currentPlayer.pendingTest;
            let status, sub, color;
            if (goalOk && !testOpen) {
                status = "✓ Heute geschafft";
                sub = "Auftrag erledigt" + (mins ? (" · " + mins + " Min. gelernt") : "");
                color = "rgba(16,185,129,0.25)";
            } else if (goalOk && testOpen) {
                status = "✓ Auftrag fertig";
                sub = "Test steht noch offen";
                color = "rgba(245,158,11,0.2)";
            } else if (goalOpen) {
                status = "Noch offen heute";
                sub = mins + " / " + g.minutes + " Min." + (testOpen ? " · + Test" : "");
                color = "rgba(99,102,241,0.2)";
            } else if (testOpen) {
                status = "📝 Test offen";
                sub = mins ? (mins + " Min. gelernt heute") : "Bereit, wenn du willst";
                color = "rgba(99,102,241,0.2)";
            } else if (mins > 0) {
                status = "Heute schon " + mins + " Min.";
                sub = "Weiter so!";
                color = "rgba(16,185,129,0.15)";
            } else {
                status = "Noch nichts heute";
                sub = "Kurze Einheit reicht schon";
                color = "rgba(255,255,255,0.06)";
            }
            card.innerHTML = `<div class="rounded-2xl px-4 py-3 border border-white/10" style="background:${color}">
                <div class="font-black text-white text-sm">${status}</div>
                <div class="text-[11px] text-gray-300 mt-0.5">${esc(sub)}</div>
            </div>`;
            card.classList.remove("hidden");
        }
        window.renderTodayStatusCard = renderTodayStatusCard;

        function renderStudyGoalCard() {
            const card = document.getElementById("study-goal-card");
            if (!card) return;
            if (!currentPlayer || currentPlayer.isGuest) {
                card.classList.add("hidden");
                card.innerHTML = "";
                return;
            }
            const today = new Date().toISOString().slice(0, 10);
            const doneSec = (currentPlayer.studyLog && currentPlayer.studyLog[today]) || 0;
            const prog = (typeof formatStudyDuration === "function")
                ? formatStudyDuration(doneSec)
                : (Math.floor(doneSec / 60) + " Min.");
            const g = currentPlayer.studyGoal;
            const goalActive = g && g.minutes && (!g.day || g.day === today);

            if (!goalActive) {
                card.innerHTML =
                    `<div class="glass-card p-3 flex items-center justify-between gap-3">
                        <div>
                            <div class="font-black text-indigo-300 text-sm">⏱ Lernzeit heute</div>
                            <div class="text-[11px] text-gray-500">Lernraum (Wissen, Vokabeln, Lesen, Suchsel)</div>
                        </div>
                        <div class="font-black text-white text-lg shrink-0">${prog}</div>
                    </div>`;
                card.classList.remove("hidden");
                return;
            }

            const needSec = g.minutes * 60;
            const pct = Math.min(100, Math.round((doneSec / needSec) * 100));
            const done = doneSec >= needSec;
            const label = STUDY_GOAL_LABELS[g.activity] || "Lernen";
            const startView = g.activity === "vokabeln" ? "vokabeln"
                : g.activity === "lesen" ? "lesen"
                : g.activity === "suchsel" ? "suchsel-setup"
                : g.activity === "wissen" ? "quiz-setup"
                : "lernen";
            card.innerHTML =
                `<div class="glass-card-glow p-4 text-white" style="background:linear-gradient(135deg,rgba(245,158,11,0.18),rgba(234,179,8,0.1));border-color:rgba(245,158,11,0.35);">
                    <div class="font-black text-base mb-0.5">${done ? "🎉 Auftrag erledigt!" : "📋 Lernauftrag"}</div>
                    <div class="text-xs opacity-90 mb-2">${esc(label)} · Ziel ${g.minutes} Min.${g.note ? " · " + esc(g.note) : ""}</div>
                    <div class="flex justify-between text-[11px] font-bold mb-1">
                        <span class="${done ? "text-emerald-300" : "text-amber-200"}">${prog} / ${g.minutes} Min.</span>
                        <span class="text-gray-400">${pct}%</span>
                    </div>
                    <div class="w-full bg-white/10 rounded-full h-2 overflow-hidden mb-3">
                        <div class="h-2 rounded-full ${done ? "bg-emerald-400" : "bg-amber-400"}" style="width:${pct}%"></div>
                    </div>
                    ${done ? "" : `<button type="button" onclick="switchView('${startView}')" class="btn-primary w-full text-center text-sm" style="background:linear-gradient(135deg,#f59e0b,#eab308);">Jetzt üben 🚀</button>`}
                </div>`;
            card.classList.remove("hidden");
        }

        function renderDashAdminTest() {
            const sel = document.getElementById('dash-test-profile');
            if (sel) {
                const keys = Object.keys(ALL_PROFILES || {});
                sel.innerHTML = keys.length ?
                    keys.map(k => `<option value="${k}">${esc(ALL_PROFILES[k].name)}</option>`).join('') :
                    '<option value="">Kein Spieler</option>';
            }
            if (typeof syncDashFocusToSelects === 'function') syncDashFocusToSelects();

            fillDashTestCategoryUI();
            if (typeof ladeAlleFragen === "function") {
                ladeAlleFragen().then(function () { fillDashTestCategoryUI(); }).catch(function () { });
            }
            renderDashTestResults();
        }

        function toggleDashTestArea(id) {
            const body = document.getElementById(id);
            const arrow = document.getElementById(id + "-arrow");
            if (!body) return;
            const open = body.classList.contains("hidden");
            body.classList.toggle("hidden", !open);
            if (arrow) arrow.style.transform = open ? "rotate(180deg)" : "rotate(0deg)";
        }
        window.toggleDashTestArea = toggleDashTestArea;

        function fillDashTestCategoryUI() {
            const catBox = document.getElementById('dash-test-categories');
            if (catBox) {
                let html = "";
                // Strukturiert nach Klasse/Bereich (wie Lern-Menü), nicht flache Liste
                if (typeof getAreas === "function") {
                    const areas = getAreas("lernen");
                    let areaIdx = 0;
                    areas.forEach(a => {
                        const subs = (a.subjects || []).filter(s => {
                            const n = typeof questionCount === "function" ? questionCount(s.key) : 0;
                            return n > 0;
                        });
                        if (!subs.length) return;
                        const aid = "dash-test-area-" + (areaIdx++);
                        const countAll = subs.reduce((s, x) => s + (typeof questionCount === "function" ? questionCount(x.key) : 0), 0);
                        html += `<div class="rounded-xl border border-white/10 overflow-hidden">
                            <button type="button" onclick="toggleDashTestArea('${aid}')"
                                class="w-full px-3 py-2.5 flex items-center justify-between gap-2 bg-white/5 hover:bg-white/10 transition text-left">
                                <span class="text-[11px] font-black text-indigo-300 uppercase tracking-wide">${esc(a.label)}</span>
                                <span class="flex items-center gap-2 shrink-0">
                                    <span class="text-[10px] text-gray-500">${subs.length} Themen · ${countAll}</span>
                                    <span id="${aid}-arrow" class="text-gray-400 text-xs transition-transform">▼</span>
                                </span>
                            </button>
                            <div id="${aid}" class="hidden px-1.5 pb-1.5 space-y-1">`;
                        subs.forEach(s => {
                            const n = typeof questionCount === "function" ? questionCount(s.key) : 0;
                            html += `<label class="dash-test-cat-row flex items-center gap-2.5 bg-white/5 border border-white/5 rounded-lg px-2.5 py-2 text-xs font-bold text-gray-300 cursor-pointer hover:bg-white/10 transition">
                                <input type="checkbox" value="${esc(s.key)}" class="dash-test-cat w-4 h-4 accent-indigo-500 shrink-0">
                                <span class="flex-1 leading-snug min-w-0 truncate">${esc(s.label)}</span>
                                <span class="text-[10px] text-gray-500 shrink-0 tabular-nums">${n}</span>
                            </label>`;
                        });
                        html += `</div></div>`;
                    });
                }
                if (!html && typeof QUESTIONS_DATABASE !== "undefined" && Array.isArray(QUESTIONS_DATABASE)) {
                    const cats = [...new Set(QUESTIONS_DATABASE.map(q => q.category).filter(Boolean))];
                    html = cats.map(c => {
                        const n = QUESTIONS_DATABASE.filter(q => q.category === c).length;
                        return `<label class="flex items-center gap-2 bg-white/5 border border-white/5 rounded-lg p-2 text-xs font-bold text-gray-300 cursor-pointer hover:bg-white/10">
                            <input type="checkbox" value="${esc(c)}" class="dash-test-cat w-4 h-4 accent-indigo-500">
                            <span class="truncate flex-1">${esc(labelFuerKategorie(c) || (typeof CATEGORY_LABELS !== "undefined" && CATEGORY_LABELS[c]) || c)}</span>
                            <span class="text-[10px] text-gray-500">${n}</span>
                        </label>`;
                    }).join("");
                }
                catBox.innerHTML = html || '<div class="text-xs text-gray-500 col-span-2">Fragen werden geladen…</div>';
            }

            const vocBox = document.getElementById('dash-test-vocab');
            if (vocBox && typeof VOCABULARY_DATABASE !== 'undefined') {
                const langLabel = { en: 'Englisch', tr: 'Türkisch', fr: 'Französisch', es: 'Spanisch' };
                let html = '';
                let langIdx = 0;
                Object.keys(VOCABULARY_DATABASE).forEach(lang => {
                    if (lang === 'tr') return;
                    const levels = Object.keys(VOCABULARY_DATABASE[lang] || {}).filter(level => {
                        const set = VOCABULARY_DATABASE[lang][level];
                        return set && (set.words || []).length;
                    });
                    if (!levels.length) return;
                    const total = levels.reduce((s, level) => s + ((VOCABULARY_DATABASE[lang][level].words || []).length), 0);
                    const vid = "dash-test-vocab-" + (langIdx++);
                    html += `<div class="rounded-xl border border-white/10 overflow-hidden">
                        <button type="button" onclick="toggleDashTestArea('${vid}')"
                            class="w-full px-3 py-2.5 flex items-center justify-between gap-2 bg-white/5 hover:bg-white/10 transition text-left">
                            <span class="text-[11px] font-black text-emerald-300 uppercase tracking-wide">${esc(langLabel[lang] || lang.toUpperCase())}</span>
                            <span class="flex items-center gap-2 shrink-0">
                                <span class="text-[10px] text-gray-500">${levels.length} Gruppen · ${total}</span>
                                <span id="${vid}-arrow" class="text-gray-400 text-xs transition-transform">▼</span>
                            </span>
                        </button>
                        <div id="${vid}" class="hidden px-1.5 pb-1.5 space-y-1">`;
                    levels.forEach(level => {
                        const set = VOCABULARY_DATABASE[lang][level];
                        const n = (set.words || []).length;
                        html += `<label class="dash-test-cat-row flex items-center gap-2.5 bg-white/5 border border-white/5 rounded-lg px-2.5 py-2 text-xs font-bold text-gray-300 cursor-pointer hover:bg-white/10 transition">
                                <input type="checkbox" value="vocab:${lang}:${level}" class="dash-test-cat w-4 h-4 accent-emerald-500 shrink-0">
                                <span class="flex-1 leading-snug min-w-0 truncate">${esc(set.label || level)}</span>
                                <span class="text-[10px] text-gray-500 shrink-0 tabular-nums">${n}</span>
                            </label>`;
                    });
                    html += `</div></div>`;
                });
                vocBox.innerHTML = html || '<div class="text-xs text-gray-500">Keine Vokabeln geladen</div>';
            }
        }

        function assignTestFromDashboard() {
            const profileKey = document.getElementById('dash-test-profile').value;
            const checked = Array.from(document.querySelectorAll('.dash-test-cat:checked')).map(cb => cb.value);
            const minutes = parseInt(document.getElementById('dash-test-time').value) || 10;
            if (!profileKey) return showToast("Kein Spieler ausgewählt!", "error");
            if (checked.length === 0) return showToast("Bitte mindestens ein Thema auswählen!", "error");
            const vocabDir = document.getElementById('dash-test-dir')?.value || 'de2f';
            const pendingTest = { categories: checked, timeLimitSeconds: minutes * 60, vocabDir, createdAt: new Date().toISOString() };
            if (!ALL_PROFILES[profileKey]) return showToast("Spieler nicht gefunden!", "error");
            ALL_PROFILES[profileKey].pendingTest = pendingTest;
            // Aktives Kind sofort aktualisieren – kein Seiten-Reload nötig
            if (activePlayerKey === profileKey && currentPlayer) {
                currentPlayer.pendingTest = pendingTest;
            }
            db.collection("parents").doc(currentParentUser.uid).collection("profiles").doc(profileKey)
                .update({ pendingTest })
                .catch(e => handleError("assignTestFromDashboard", e, "Test konnte nicht zugewiesen werden."));
            showToast(`Test für ${esc(ALL_PROFILES[profileKey].name)} zugewiesen! ⏱️`, "success");
            renderDashAdminProgress();
            if (typeof renderPendingTestCard === "function") renderPendingTestCard();
        }

        async function saveTestTemplate() {
            const checked = Array.from(document.querySelectorAll('.dash-test-cat:checked')).map(cb => cb.value);
            const minutes = parseInt(document.getElementById('dash-test-time').value) || 10;
            if (checked.length === 0) return showToast("Bitte zuerst Themen auswählen!", "error");
            const name = cleanInput(await appPrompt("Wie soll die Vorlage heißen?", {
                titel: "Test-Vorlage speichern", icon: "📝",
                platzhalter: "z.B. Mathe-Check", maxLen: 40, okText: "Speichern"
            }), 40);
            if (!name) return;
            const vocabDir = document.getElementById('dash-test-dir')?.value || 'de2f';
            testTemplates.push({ id: "tpl_" + Date.now(), name, categories: checked, timeLimitSeconds: minutes * 60, vocabDir });
            saveTestTemplates();
            renderTestTemplatesList();
            showToast("Vorlage gespeichert!", "success");
        }

        function saveTestTemplates() {
            db.collection("parents").doc(currentParentUser.uid).set({ testTemplates }, { merge: true });
        }

        function deleteTestTemplate(id) {
            testTemplates = testTemplates.filter(t => t.id !== id);
            saveTestTemplates();
            renderTestTemplatesList();
        }

        function loadTestTemplate(id) {
            const t = testTemplates.find(x => x.id === id);
            if (!t) return;
            document.querySelectorAll('.dash-test-cat').forEach(cb => { cb.checked = t.categories.includes(cb.value); });
            const timeEl = document.getElementById('dash-test-time');
            if (timeEl) timeEl.value = Math.round(t.timeLimitSeconds / 60);
            const dirEl = document.getElementById('dash-test-dir');
            if (dirEl && t.vocabDir) dirEl.value = t.vocabDir;
            showToast(`Vorlage "${esc(t.name)}" geladen`, "success");
        }

        function renderTestTemplatesList() {
            const list = document.getElementById('dash-test-templates-list');
            if (!list) return;
            list.innerHTML = (testTemplates || []).length === 0 ?
                `<p class="text-xs text-gray-500">Noch keine Vorlagen gespeichert.</p>` :
                testTemplates.map(t => `<div class="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl p-3">
                            <div class="text-sm font-bold text-white">${esc(t.name)}<div class="text-xs text-gray-400 font-normal">${t.categories.length} Themen · ${Math.round(t.timeLimitSeconds / 60)} Min.</div></div>
                            <div class="flex gap-3 flex-shrink-0"><button onclick="loadTestTemplate('${t.id}')" class="text-indigo-400 font-bold text-xs hover:text-indigo-300">Laden</button><button onclick="deleteTestTemplate('${t.id}')" class="text-rose-400 font-bold text-xs hover:text-rose-300">Löschen</button></div>
                        </div>`).join('');
        }

        // QA-Checks laufen nur im Entwickler-Modus (Einstellungen)
        function runAnswerLengthAudit() {
            if (typeof runDevQuizAudits === "function") return runDevQuizAudits();
        }

        function runDevQuizAudits() {
            const box = document.getElementById('dev-audit-result') || document.getElementById('dash-audit-result');
            if (!box) return;
            box.classList.remove('hidden');
            if (typeof QUESTIONS_DATABASE === 'undefined' || !Array.isArray(QUESTIONS_DATABASE)) {
                box.innerHTML = '<div class="text-sm text-rose-300">Fragen-Datenbank nicht geladen.</div>';
                return;
            }

            let total = 0, longestIncl = 0, strict = 0;
            let badAnswers = 0, badCorrect = 0, emptyQ = 0, emptyAns = 0, shortQ = 0;
            const ids = new Map();
            let dupIds = 0;
            const lengthExamples = [];

            QUESTIONS_DATABASE.forEach(q => {
                if (!q) return;
                if (q.id) {
                    if (ids.has(q.id)) dupIds++;
                    else ids.set(q.id, true);
                }
                const qText = String(q.question || "").trim();
                if (!qText) emptyQ++;
                else if (qText.length < 8) shortQ++;

                if (!Array.isArray(q.answers) || q.answers.length < 2) {
                    badAnswers++;
                    return;
                }
                if (q.answers.some(a => !String(a || "").trim())) emptyAns++;
                if (typeof q.correct !== "number" || q.answers[q.correct] == null) {
                    badCorrect++;
                    return;
                }
                total++;
                const lens = q.answers.map(a => String(a).length);
                const max = Math.max.apply(null, lens);
                if (lens[q.correct] === max) {
                    longestIncl++;
                    if (lens.filter(l => l === max).length === 1) {
                        strict++;
                        if (lengthExamples.length < 8) {
                            lengthExamples.push((q.id || "?") + ": „" + String(q.answers[q.correct]).slice(0, 40) + "“");
                        }
                    }
                }
            });

            const pct = total ? (longestIncl / total * 100) : 0;
            const pctStrict = total ? (strict / total * 100) : 0;

            let wordsKids = (typeof GERMAN_WORDS_KIDS !== "undefined" && Array.isArray(GERMAN_WORDS_KIDS)) ? GERMAN_WORDS_KIDS.length : 0;
            let wordsAdult = (typeof GERMAN_WORDS_ADULT !== "undefined" && Array.isArray(GERMAN_WORDS_ADULT)) ? GERMAN_WORDS_ADULT.length : 0;
            let themeInfo = "";
            if (typeof GERMAN_WORDS_KIDS_THEMES !== "undefined") {
                const keys = Object.keys(GERMAN_WORDS_KIDS_THEMES).filter(k => k !== "gemischt");
                themeInfo = keys.map(k => {
                    const arr = GERMAN_WORDS_KIDS_THEMES[k];
                    return k + ":" + (Array.isArray(arr) ? arr.length : 0);
                }).join(" · ");
            }

            if (typeof SFX !== "undefined") SFX.tap();
            box.innerHTML = `
                <div class="text-[11px] font-bold text-cyan-300 uppercase tracking-wide">Quiz-Daten-Checks</div>
                <div class="text-sm text-gray-200">Fragen gesamt: <b>${QUESTIONS_DATABASE.length}</b> · geprüft: <b>${total}</b></div>
                <div class="text-sm text-gray-200">Richtige = längste (inkl. Gleichstand): <b class="text-amber-300">${pct.toFixed(1)}%</b> (${longestIncl})</div>
                <div class="text-sm text-gray-200">Eindeutig längste (Tipp-Kandidaten): <b class="text-rose-300">${pctStrict.toFixed(1)}%</b> (${strict})</div>
                ${lengthExamples.length ? `<div class="text-[10px] text-gray-500 pt-1">${lengthExamples.map(e => esc(e)).join("<br>")}</div>` : ""}
                <div class="border-t border-white/10 my-2"></div>
                <div class="text-sm text-gray-200">Strukturfehler:</div>
                <div class="text-xs text-gray-300">Doppelte IDs: <b class="${dupIds ? "text-rose-300" : "text-emerald-300"}">${dupIds}</b></div>
                <div class="text-xs text-gray-300">Zu wenige Antworten (&lt;2): <b class="${badAnswers ? "text-rose-300" : "text-emerald-300"}">${badAnswers}</b></div>
                <div class="text-xs text-gray-300">Ungültiger correct-Index: <b class="${badCorrect ? "text-rose-300" : "text-emerald-300"}">${badCorrect}</b></div>
                <div class="text-xs text-gray-300">Leere Frage: <b class="${emptyQ ? "text-rose-300" : "text-emerald-300"}">${emptyQ}</b> · sehr kurz (&lt;8): <b>${shortQ}</b></div>
                <div class="text-xs text-gray-300">Leere Antwort-Texte: <b class="${emptyAns ? "text-rose-300" : "text-emerald-300"}">${emptyAns}</b></div>
                <div class="border-t border-white/10 my-2"></div>
                <div class="text-xs text-gray-300">Wörter Kids: <b>${wordsKids}</b> · Adult: <b>${wordsAdult}</b></div>
                ${themeInfo ? `<div class="text-[10px] text-gray-500">Themen: ${esc(themeInfo)}</div>` : ""}
            `;
        }

        // ============================================================
        //  ELTERN-ADMIN (PIN)
        // ============================================================
        async function setupAdminPin(isFirstTime) {
            if (!isFirstTime) {
                switchView('einstellungen');
                return;
            }
            const p1 = cleanInput(await appPrompt("Legt eine PIN fest, damit die Kinder hier nicht hineinkommen. 4 bis 12 Zeichen.", {
                titel: "🔒 Eltern-Bereich einrichten", icon: "🔒",
                passwort: true, maxLen: 12, platzhalter: "Neue PIN", okText: "Weiter"
            }), 12);
            if (p1 === null || p1 === "") return;
            if (p1.length < 4) return showToast("Der PIN braucht mindestens 4 Zeichen.", "error", "pin");
            const p2 = cleanInput(await appPrompt("Bitte zur Sicherheit noch einmal eingeben.", {
                titel: "PIN bestätigen", icon: "🔒",
                passwort: true, maxLen: 12, platzhalter: "PIN wiederholen", okText: "Speichern"
            }), 12);
            if (p2 !== p1) return showToast("Die beiden Eingaben stimmen nicht überein.", "error", "pin");
            try {
                await db.collection("parents").doc(currentParentUser.uid).set({ adminPin: p1 }, { merge: true });
                adminPin = p1;
                showToast("PIN gespeichert.", "success", "pin");
            } catch (e) {
                showToast("PIN konnte nicht gespeichert werden.", "error", "pin");
            }
        }

        async function saveAdminPinFromSettings() {
            const hint = document.getElementById("pin-hint");
            const showHint = (msg) => {
                if (hint) { hint.innerText = msg; hint.classList.remove("hidden"); }
                else showToast(msg, "error", "pin");
            };
            if (hint) hint.classList.add("hidden");
            const current = cleanInput((document.getElementById("pin-current") || {}).value || "", 12);
            const p1 = cleanInput((document.getElementById("pin-new") || {}).value || "", 12);
            const p2 = cleanInput((document.getElementById("pin-new2") || {}).value || "", 12);
            if (adminPin) {
                if (!current) return showHint("Bitte aktuellen PIN eingeben.");
                if (current !== adminPin) {
                    if (typeof SFX !== "undefined") SFX.wrong();
                    return showHint("Aktueller PIN stimmt nicht.");
                }
            }
            if (!p1 || p1.length < 4) return showHint("Neuer PIN braucht mindestens 4 Zeichen.");
            if (p1 !== p2) return showHint("Die beiden neuen PINs stimmen nicht überein.");
            try {
                await db.collection("parents").doc(currentParentUser.uid).set({ adminPin: p1 }, { merge: true });
                adminPin = p1;
                ["pin-current", "pin-new", "pin-new2"].forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.value = "";
                });
                showToast("PIN gespeichert.", "success", "pin");
            } catch (e) {
                showToast("PIN konnte nicht gespeichert werden.", "error", "pin");
            }
        }

        // ============================================================
        //  SPIELER BEARBEITEN
        // ============================================================
        let editingPlayerKey = null;
        let editingPlayerColor = null;

        function renderColorPicker(selected) {
            editingPlayerColor = selected;
            const box = document.getElementById("edit-player-colors");
            if (!box) return;
            box.innerHTML = "";
            PLAYER_COLORS.forEach(col => {
                const sw = document.createElement("button");
                sw.type = "button";
                sw.style.cssText =
                    "width:38px;height:38px;border-radius:50%;border:none;cursor:pointer;background:" + col +
                    ";box-shadow:" + (col === editingPlayerColor ? "0 0 0 3px #0e1628, 0 0 0 5px " + col :
                        "none") + ";transition:box-shadow .12s ease, transform .12s ease;";
                sw.setAttribute("aria-label", "Farbe wählen");
                sw.onmouseenter = () => { if (col !== editingPlayerColor) sw.style.transform = "scale(1.1)"; };
                sw.onmouseleave = () => { sw.style.transform = "scale(1)"; };
                sw.onclick = () => {
                    SFX.tap();
                    renderColorPicker(col);
                };
                box.appendChild(sw);
            });
        }

        function updateAgePreview() {
            const el = document.getElementById("edit-age-preview");
            const val = document.getElementById("edit-player-birthday").value;
            const age = ageFromBirthday(val);
            if (!el) return;
            el.innerText = (age === null) ?
                "Das Alter rechnet die App selbst aus – du musst es nie wieder ändern." :
                `Macht aktuell ${age} Jahre. Das aktualisiert sich von selbst.`;
        }

        function openEditPlayer(key) {
            const p = ALL_PROFILES[key];
            if (!p) return;
            SFX.tap();
            editingPlayerKey = key;
            document.getElementById("edit-player-name").value = p.name || "";
            document.getElementById("edit-player-birthday").value = p.birthday || "";
            setProfileRoleUi("edit", p.profileRole === "eltern" ? "eltern" : "kind");
            const sel = document.getElementById("edit-player-grade");
            sel.innerHTML = `<option value="">Noch keine / keine Angabe</option>`;
            for (let g = 1; g <= 13; g++) {
                sel.innerHTML += `<option value="${g}">${g}. Klasse</option>`;
            }
            sel.value = playerGrade(p) || "";
            renderColorPicker(p.discColor || colorForPlayer(key));
            const hint = document.getElementById("edit-player-hint");
            if (hint) hint.classList.add("hidden");
            updateAgePreview();
            switchView('edit-player');
        }

        async function saveEditedPlayer() {
            const key = editingPlayerKey;
            const hint = document.getElementById("edit-player-hint");
            if (!key || !ALL_PROFILES[key]) return switchView('family-hub');
            const name = cleanInput(document.getElementById("edit-player-name").value, 24);
            const birthday = document.getElementById("edit-player-birthday").value || "";
            const gradeRaw = document.getElementById("edit-player-grade").value;
            const grade = gradeRaw ? parseInt(gradeRaw) : null;
            if (!name) {
                if (hint) {
                    hint.innerText = "Ohne Namen geht es nicht.";
                    hint.classList.remove("hidden");
                }
                return;
            }
            if (birthday && ageFromBirthday(birthday) === null) {
                if (hint) {
                    hint.innerText = "Der Geburtstag sieht nicht richtig aus.";
                    hint.classList.remove("hidden");
                }
                return;
            }
            const update = {
                name: name,
                birthday: birthday,
                grade: grade,
                profileRole: getProfileRoleUi("edit"),
                ageType: grade ? "klasse" : "alter",
                age: grade ? String(grade) : (ageFromBirthday(birthday) !== null ? String(ageFromBirthday(birthday)) :
                    "-")
            };
            if (editingPlayerColor) update.discColor = editingPlayerColor;
            try {
                await db.collection("parents").doc(currentParentUser.uid)
                    .collection("profiles").doc(key).update(update);
                Object.assign(ALL_PROFILES[key], update);
                if (activePlayerKey === key && currentPlayer) Object.assign(currentPlayer, update);
                showToast("Änderungen gespeichert!", "success");
                renderFamilyHub();
                switchView('family-hub');
            } catch (e) {
                handleError("saveEditedPlayer", e, "Die Änderungen konnten nicht gespeichert werden.");
            }
        }

        // Löscht das gerade bearbeitete Profil komplett (egal ob Gast oder
        // festes Familienmitglied) - Punkte/Fortschritt gehen dabei verloren.
        async function deleteEditedPlayer() {
            const key = editingPlayerKey;
            if (!key || !ALL_PROFILES[key]) return switchView('family-hub');
            const name = ALL_PROFILES[key].name || "Dieses Profil";
            if (!(await appConfirm(`"${name}" wird komplett gelöscht - Punkte, Fortschritt und Abzeichen gehen dabei verloren.`, {
                titel: "Profil löschen?", icon: "🗑", okText: "Löschen", gefahr: true
            }))) return;
            try {
                await db.collection("parents").doc(currentParentUser.uid).collection("profiles").doc(key).delete();
                delete ALL_PROFILES[key];
                if (activePlayerKey === key) {
                    activePlayerKey = "";
                    currentPlayer = null;
                }
                showToast(`Profil "${esc(name)}" wurde gelöscht.`);
                renderFamilyHub();
                switchView('family-hub');
            } catch (e) {
                handleError("deleteEditedPlayer", e, "Das Profil konnte nicht gelöscht werden.");
            }
        }

        // ============================================================
        //  GAST-PROFILE
        // ============================================================
        async function addGuestProfile() {
            const name = cleanInput(await appPrompt("Wie heißt dein Gast?", {
                titel: "Gast hinzufügen", icon: "👋",
                platzhalter: "Name", maxLen: 24, okText: "Hinzufügen"
            }), 24);
            if (!name) return;
            const guest = {
                name: name,
                ageType: "gast",
                age: "-",
                coins: 0,
                learnedWords: [],
                isGuest: true
            };
            try {
                const docRef = await db.collection("parents").doc(currentParentUser.uid).collection("profiles").add(guest);
                ALL_PROFILES[docRef.id] = guest;
                SFX.tap();
                showToast(`🙋 Gast "${esc(guest.name)}" kann jetzt mitspielen!`);
                renderFamilyHub();
                const tb = document.getElementById("profile-toggle-btn");
                if (tb && !tb.classList.contains("hidden")) toggleProfileList(true);
            } catch (e) {
                handleError("addGuestProfile", e, "Der Gast konnte nicht angelegt werden.");
            }
        }

        async function removeAllGuests() {
            const guestKeys = Object.keys(ALL_PROFILES).filter(k => ALL_PROFILES[k].isGuest);
            if (guestKeys.length === 0) return;
            const names = guestKeys.map(k => ALL_PROFILES[k].name).join(", ");
            if (!(await appConfirm(`${names}\n\nIhre Punkte gehen dabei verloren.`, {
                titel: "Gäste entfernen?", icon: "🗑", okText: "Entfernen", gefahr: true
            }))) return;
            try {
                for (const key of guestKeys) {
                    await db.collection("parents").doc(currentParentUser.uid).collection("profiles").doc(key).delete();
                    delete ALL_PROFILES[key];
                    if (activePlayerKey === key) {
                        activePlayerKey = "";
                        currentPlayer = null;
                    }
                }
                showToast("Gäste entfernt.");
                renderFamilyHub();
            } catch (e) {
                handleError("removeAllGuests", e, "Die Gäste konnten nicht entfernt werden.");
            }
        }

        // ============================================================
        //  NEUEN SPIELER ANLEGEN
        // ============================================================
        function setProfileRoleUi(which, role) {
            const box = document.getElementById(which === "edit" ? "edit-profile-role" : "new-profile-role");
            if (!box) return;
            box.querySelectorAll("[data-role]").forEach(function (btn) {
                btn.classList.toggle("active", btn.getAttribute("data-role") === role);
            });
            box.dataset.selected = role === "eltern" ? "eltern" : "kind";
        }
        window.setProfileRoleUi = setProfileRoleUi;
        function getProfileRoleUi(which) {
            const box = document.getElementById(which === "edit" ? "edit-profile-role" : "new-profile-role");
            if (!box) return "kind";
            return box.dataset.selected === "eltern" ? "eltern" : "kind";
        }

        async function saveNewProfile() {
            const name = cleanInput(document.getElementById("new-profile-name").value, 24);
            const birthday = document.getElementById("new-profile-birthday").value || "";
            const gradeRaw = document.getElementById("new-profile-grade").value;
            const grade = gradeRaw ? parseInt(gradeRaw) : null;
            const profileRole = getProfileRoleUi("new");
            if (!name) return showToast("Bitte Namen eingeben!", "error");
            if (birthday && ageFromBirthday(birthday) === null) return showToast("Der Geburtstag sieht nicht richtig aus.",
                "error");
            const newProf = {
                name: name,
                birthday: birthday,
                grade: grade,
                profileRole: profileRole,
                ageType: grade ? "klasse" : "alter",
                age: grade ? String(grade) : (ageFromBirthday(birthday) !== null ? String(ageFromBirthday(birthday)) :
                    "-"),
                coins: 0,
                learnedWords: []
            };
            try {
                const docRef = await db.collection("parents").doc(currentParentUser.uid).collection("profiles").add(newProf);
                ALL_PROFILES[docRef.id] = newProf;
                document.getElementById("new-profile-name").value = "";
                document.getElementById("new-profile-birthday").value = "";
                document.getElementById("new-profile-grade").value = "";
                setProfileRoleUi("new", "kind");
                showToast("Spieler angelegt!", "success");
                renderFamilyHub();
                switchView('family-hub');
            } catch (e) {
                handleError("saveNewProfile", e, "Der Spieler konnte nicht angelegt werden.");
            }
        }

        // ============================================================
        //  HUB WATCH
        // ============================================================
        hubWatchUnsub = null;
        let hubTickInterval = null;
        let hubRenderScheduled = null;

        function startHubWatch() {
            stopHubWatch();
            if (!currentParentUser) return;
            try {
                hubWatchUnsub = db.collection("parents").doc(currentParentUser.uid)
                    .collection("profiles")
                    .onSnapshot(snap => {
                        let needsRender = false;
                        snap.docChanges().forEach(change => {
                            const id = change.doc.id;
                            const data = change.doc.data();
                            if (change.type === "removed") {
                                if (ALL_PROFILES[id]) {
                                    delete ALL_PROFILES[id];
                                    needsRender = true;
                                }
                                return;
                            }
                            if (!ALL_PROFILES[id]) {
                                ALL_PROFILES[id] = data;
                                needsRender = true;
                            } else {
                                const p = ALL_PROFILES[id];
                                if (p.lastActive !== data.lastActive ||
                                    p.coins !== data.coins ||
                                    p.name !== data.name) {
                                    p.lastActive = data.lastActive;
                                    if (data.coins !== undefined) p.coins = data.coins;
                                    if (data.name) p.name = data.name;
                                    needsRender = true;
                                }
                            }
                        });
                        if (needsRender) {
                            if (hubRenderScheduled) clearTimeout(hubRenderScheduled);
                            hubRenderScheduled = setTimeout(() => {
                                hubRenderScheduled = null;
                                const hub = document.getElementById("view-family-hub");
                                if (hub && !hub.classList.contains("hidden")) renderFamilyHub();
                            }, 120);
                        }
                    }, err => console.warn("Spieler-Aktivität nicht beobachtbar:", err));
            } catch (e) {
                console.warn("Spieler-Aktivität nicht beobachtbar:", e);
            }
            hubTickInterval = setInterval(() => {
                const hub = document.getElementById("view-family-hub");
                if (hub && !hub.classList.contains("hidden")) renderFamilyHub();
            }, 30000);
        }

        function stopHubWatch() {
            if (hubWatchUnsub) { try { hubWatchUnsub(); } catch (e) { } hubWatchUnsub = null; }
            if (hubTickInterval) {
                clearInterval(hubTickInterval);
                hubTickInterval = null;
            }
            if (hubRenderScheduled) {
                clearTimeout(hubRenderScheduled);
                hubRenderScheduled = null;
            }
        }

