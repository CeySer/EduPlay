        // ============================================================
        //  AUTH
        // ============================================================
        function registerParent() {
            const e = document.getElementById("auth-email").value;
            const p = document.getElementById("auth-password").value;
            auth.createUserWithEmailAndPassword(e, p)
                .then(() => showToast("Account erstellt!", "success"))
                .catch(e => showToast(e.message, "error"));
        }

        function loginParent() {
            const e = document.getElementById("auth-email").value;
            const p = document.getElementById("auth-password").value;
            auth.signInWithEmailAndPassword(e, p)
                .catch(() => showToast("Falsche Daten", "error"));
        }

        function logoutParent() {
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

        auth.onAuthStateChanged((user) => {
            if (user) {
                currentParentUser = user;
                loadFamilyProfiles();
            } else {
                currentParentUser = null;
                switchView('auth');
            }
        });

        // ============================================================
        //  FAMILY HUB & PROFILES
        // ============================================================
        async function loadFamilyProfiles() {
            try {
                const snapshot = await db.collection("parents").doc(currentParentUser.uid).collection("profiles").get();
                ALL_PROFILES = {};
                snapshot.forEach(doc => { ALL_PROFILES[doc.id] = doc.data(); });
                await loadFamilyRewards();
                renderFamilyHub();
                switchView('family-hub');
            } catch (e) { handleError("loadFamilyProfiles", e, "Spieler konnten nicht geladen werden."); }
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

            const wrap = document.createElement("div");
            wrap.className = "relative";

            const btn = document.createElement("button");
            btn.className = "player-card p-3 rounded-xl" + (isActive ? " is-active" : "");
            if (isActive) btn.style.color = c;
            btn.innerHTML = `
        ${guest ? '<span class="badge-guest text-[8px]">GAST</span>' : ''}
        <div class="player-disc w-10 h-10 text-sm${guest ? ' player-disc-guest' : ''}"${guest ? '' : ` style="background:${c}"`}>
            ${esc(initialsFor(p.name))}
        </div>
        <div class="player-name text-xs font-bold">${esc(p.name)}</div>
        <div class="player-coins text-[10px]">🪙 ${p.coins || 0}</div>
        <div class="player-meta text-[9px]"><span class="dot ${act.dot} w-1.5 h-1.5"></span>${esc(act.text)}</div>
    `;
            btn.onclick = () => selectProfile(key);
            wrap.appendChild(btn);

            const edit = document.createElement("button");
            edit.className = "edit-pin absolute bottom-1 right-1 w-5 h-5 text-[9px] rounded-lg bg-white/5 border border-white/5";
            edit.innerText = "✎";
            edit.onclick = (ev) => {
                ev.stopPropagation();
                openEditPlayer(key);
            };
            wrap.appendChild(edit);

            return wrap;
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
            const sortedProfiles = Object.values(ALL_PROFILES).filter(p => !p.isGuest).sort((a, b) => b.coins - a.coins);

            toggleLeaderboard(false);
            toggleFamilyDuel(false);
            if (typeof applyOfflineModusSichtbarkeit === 'function') applyOfflineModusSichtbarkeit();
            if (leaderBadge) {
                leaderBadge.innerText = sortedProfiles.length > 0 ?
                    `🥇 ${esc(sortedProfiles[0].name)}` :
                    "";
            }

            if (!lbContainer) return;
            if (sortedProfiles.length === 0) {
                lbContainer.innerHTML = "<p class='text-xs text-gray-500 text-center'>Noch keine Spieler vorhanden.</p>";
                return;
            }

            let lbHTML = "";
            const medals = ["🥇", "🥈", "🥉"];
            sortedProfiles.forEach((p, index) => {
                const medal = index < 3 ? medals[index] :
                    `<span class="text-gray-500 font-bold w-6 inline-block text-center">${index + 1}.</span>`;
                lbHTML += `
                        <div class="flex items-center justify-between bg-white/5 border border-white/5 p-3 rounded-xl shadow-sm">
                            <div class="flex items-center gap-3">
                                <div class="text-xl">${medal}</div>
                                <div class="font-bold text-white">${esc(p.name)}</div>
                            </div>
                            <div class="text-yellow-400 font-black">🪙 ${p.coins || 0}</div>
                        </div>`;
            });
            lbContainer.innerHTML = lbHTML;
        }

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

        function selectProfile(key) {
            SFX.tap();
            activePlayerKey = key;
            currentPlayer = ALL_PROFILES[key];
            touchPlayerActivity(key);
            sessionLearnedWords = new Set(currentPlayer.learnedWords || []);
            document.getElementById("welcome-text").innerText = `Hallo, ${esc(currentPlayer.name)}!`;
            document.getElementById("menu-coins").innerText = currentPlayer.coins || 0;
            document.getElementById("menu-age-display").innerHTML = `🎒 <span id="menu-age">${esc(playerDescription(currentPlayer))}</span>`;
            renderPendingTestCard();
            renderWeaknessSuggestion();
            updateMenuGamification();
            switchView('menu');
        }

        function touchPlayerActivity(key) {
            if (!key || !currentParentUser || !ALL_PROFILES[key]) return;
            const now = Date.now();
            ALL_PROFILES[key].lastActive = now;
            if (currentPlayer && activePlayerKey === key) currentPlayer.lastActive = now;
            try {
                db.collection("parents").doc(currentParentUser.uid)
                    .collection("profiles").doc(key)
                    .update({ lastActive: now })
                    .catch(e => console.warn("lastActive konnte nicht gespeichert werden:", e));
            } catch (e) {
                console.warn("lastActive konnte nicht gespeichert werden:", e);
            }
        }

        function savePlayerProgress() {
            if (!currentPlayer) return;
            currentPlayer.learnedWords = Array.from(sessionLearnedWords);
            currentPlayer.lastActive = Date.now();
            ALL_PROFILES[activePlayerKey] = currentPlayer;
            db.collection("parents").doc(currentParentUser.uid).collection("profiles").doc(activePlayerKey).set(currentPlayer);
            document.getElementById("menu-coins").innerText = currentPlayer.coins || 0;
        }

        // ============================================================
        //  DASHBOARD - NEUE FUNKTIONEN
        // ============================================================
        let currentDashTab = 'inhalte';
        let currentDashSubTab = 'fragen';
        let selectedStatPlayer = null;
        let currentDashboardSection = null;

        function updateDashSubjectFilter() {
            const qGradeVal = document.getElementById('dash-question-grade').value;
            const qSubSel = document.getElementById('dash-question-subject');

            if (!qSubSel) return;

            // 1. Fragen filtern basierend auf der Klasse
            let filtered = QUESTIONS_DATABASE;
            if (qGradeVal) {
                if (qGradeVal === 'beruf') filtered = QUESTIONS_DATABASE.filter(q => q.area === 'beruf');
                else if (qGradeVal === 'spass') filtered = QUESTIONS_DATABASE.filter(q => q.area === 'spass');
                else filtered = QUESTIONS_DATABASE.filter(q => q.grade == qGradeVal);
            }

            // 2. Einzigartige Fächer aus den gefilterten Fragen sammeln
            const subjects = [...new Set(filtered.map(q => q.subject).filter(Boolean))].sort();

            // 3. Dropdown aktualisieren
            let html = '<option value="">Alle Fächer</option>';
            subjects.forEach(s => {
                html += `<option value="${s}">${s}</option>`;
            });
            qSubSel.innerHTML = html;
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
            currentDashboardSection = section;

            const sections = ['inhalte', 'eltern', 'statistiken'];
            sections.forEach(s => {
                const el = document.getElementById('dash-section-' + s);
                if (el) {
                    el.classList.toggle('hidden', s !== section);
                }
            });

            currentDashboardSection = section;

            if (section === 'inhalte') {
                console.log('📊 Initialisiere Inhalte-Tab...');
                updateDashCounts();
                switchDashboardSubTab(currentDashSubTab || 'fragen');
                console.log('✅ Inhalte-Tab initialisiert');
            }
            if (section === 'eltern') {
                renderDashAdminProgress();
                renderDashAdminTest();
                renderDashRewards();
            }
            if (section === 'statistiken') {
                renderDashPlayerList();
                if (selectedStatPlayer) renderPlayerStats(selectedStatPlayer);
            }
        }

        /**
         * =========================================================
         * BESCHREIBUNG: Dashboard-Zähler (updateDashCounts)
         * =========================================================
         * Zählt Fragen, Vokabeln und Wörter aus den Datenbanken
         * und trägt die Summen in die Spans im Inhalte-Tab ein.
         */
        function updateDashCounts() {
            console.log('📊 updateDashCounts wird ausgeführt...');

            // 1. Fragen zählen
            let qCount = 0;
            if (typeof QUESTIONS_DATABASE !== 'undefined' && Array.isArray(QUESTIONS_DATABASE)) {
                qCount = QUESTIONS_DATABASE.length;
                console.log(`📖 Fragen gefunden: ${qCount}`);
            } else {
                console.warn('⚠️ QUESTIONS_DATABASE nicht gefunden oder kein Array!');
            }

            // 2. Vokabeln zählen
            let vCount = 0;
            if (typeof VOCABULARY_DATABASE !== 'undefined') {
                console.log('📝 VOCABULARY_DATABASE gefunden, Schlüssel:', Object.keys(VOCABULARY_DATABASE));
                Object.keys(VOCABULARY_DATABASE).forEach(lang => {
                    console.log(`  Sprache: ${lang}`);
                    const langData = VOCABULARY_DATABASE[lang];
                    Object.keys(langData || {}).forEach(level => {
                        const words = langData[level]?.words;
                        if (Array.isArray(words)) {
                            vCount += words.length;
                            console.log(`    Level ${level}: ${words.length} Wörter`);
                        } else {
                            console.log(`    Level ${level}: keine Wörter gefunden`);
                        }
                    });
                });
                console.log(`📊 Vokabeln gesamt: ${vCount}`);
            } else {
                console.warn('⚠️ VOCABULARY_DATABASE nicht gefunden!');
            }

            // 3. Wörter zählen
            let wCount = 0;
            if (typeof GERMAN_WORDS !== 'undefined' && Array.isArray(GERMAN_WORDS)) {
                wCount = GERMAN_WORDS.length;
                console.log(`🔤 Wörter gefunden: ${wCount}`);
            } else {
                console.warn('⚠️ GERMAN_WORDS nicht gefunden oder kein Array!');
            }

            // 4. In HTML-Spans eintragen
            const elQ = document.getElementById('dash-question-count');
            const elV = document.getElementById('dash-vocab-count');
            const elW = document.getElementById('dash-word-count');

            if (elQ) {
                elQ.textContent = qCount;
                console.log(`✅ Frage-Zähler gesetzt: ${qCount}`);
            }
            if (elV) {
                elV.textContent = vCount;
                console.log(`✅ Vokabel-Zähler gesetzt: ${vCount}`);
            }
            if (elW) {
                elW.textContent = wCount;
                console.log(`✅ Wort-Zähler gesetzt: ${wCount}`);
            }
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
                // Hole alle Klassen aus den Fragen
                const grades = [...new Set(QUESTIONS_DATABASE.map(q => q.grade).filter(Boolean))].sort((a, b) => a - b);
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

            // 2. Fächer-Filter
            const qSubSel = document.getElementById('dash-question-subject');
            if (qSubSel && typeof QUESTIONS_DATABASE !== 'undefined' && Array.isArray(QUESTIONS_DATABASE)) {
                const subjects = [...new Set(QUESTIONS_DATABASE.map(q => q.subject).filter(Boolean))].sort();
                console.log('📖 Gefundene Fächer:', subjects);
                qSubSel.innerHTML = '<option value="">Alle Fächer</option>' +
                    subjects.map(s => `<option value="${s}">${s}</option>`).join('');
            } else if (qSubSel) {
                qSubSel.innerHTML = '<option value="">Keine Fächer verfügbar</option>';
            }

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
            switchDashAdminTab('progress');
        }

        function switchDashboardTab(tab) {
            currentDashTab = tab;
            ['inhalte', 'schueler', 'admin'].forEach(t => {
                const btn = document.getElementById('dash-tab-' + t);
                const content = document.getElementById('dash-' + t);
                if (!btn || !content) return;
                if (t === tab) {
                    btn.className =
                        'flex-1 py-2.5 px-1 rounded-lg font-bold text-white bg-indigo-600 shadow-md transition-all text-sm';
                    content.classList.remove('hidden');
                } else {
                    btn.className =
                        'flex-1 py-2.5 px-1 rounded-lg font-bold text-gray-400 bg-gray-900 transition-all text-sm';
                    content.classList.add('hidden');
                }
            });
            if (tab === 'schueler') {
                renderDashPlayerList();
                if (selectedStatPlayer) renderPlayerStats(selectedStatPlayer);
            }
            if (tab === 'admin') {
                renderDashAdmin();
            }
            if (tab === 'inhalte') {
                updateDashCounts();
                renderDashQuestions();
                renderDashVocab();
                renderDashWords();
            }
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
                if (qGrade) qGrade.addEventListener('change', renderDashQuestions);
                if (qSubject) qSubject.addEventListener('change', renderDashQuestions);
                if (qSearch) qSearch.addEventListener('input', renderDashQuestions);
                initDashFilters();
                renderDashQuestions();
            } else if (sub === 'vokabeln') {
                container.innerHTML = `
            <select id="dash-vocab-lang" class="input-modern text-xs flex-1 min-w-[70px]">
                <option value="en">🇬🇧 Englisch</option>
                <option value="tr">🇹🇷 Türkisch</option>
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
                container.innerHTML = `
            <select id="dash-word-length" class="input-modern text-xs flex-1 min-w-[70px]">
                <option value="">Alle Längen</option>
            </select>
            <input type="text" id="dash-word-search" placeholder="🔎 Suche..." class="input-modern text-xs flex-1 min-w-[80px]">
        `;
                document.getElementById('dash-word-length')?.addEventListener('change', renderDashWords);
                document.getElementById('dash-word-search')?.addEventListener('input', renderDashWords);
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

            let questions = [...QUESTIONS_DATABASE];

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
            console.log('🔤 renderDashWords wird ausgeführt...');

            const length = document.getElementById('dash-word-length')?.value || '';
            const search = document.getElementById('dash-word-search')?.value.toUpperCase() || '';
            const list = document.getElementById('dash-word-list');

            if (!list) {
                console.warn('⚠️ dash-word-list nicht gefunden!');
                return;
            }

            if (typeof GERMAN_WORDS === 'undefined' || !Array.isArray(GERMAN_WORDS)) {
                console.warn('⚠️ GERMAN_WORDS nicht definiert oder kein Array!');
                list.innerHTML = '<div class="text-center text-gray-500 text-sm py-4 w-full">⚠️ Wörter-Datenbank nicht geladen</div>';
                return;
            }

            console.log(`🔤 GERMAN_WORDS verfügbar: ${GERMAN_WORDS.length} Wörter`);

            let words = [...GERMAN_WORDS];

            if (length) {
                const filtered = words.filter(w => w.length === parseInt(length));
                console.log(`  Nach Länge ${length} gefiltert: ${filtered.length} Wörter`);
                words = filtered;
            }
            if (search) {
                const filtered = words.filter(w => w.toUpperCase().includes(search));
                console.log(`  Nach Suche "${search}" gefiltert: ${filtered.length} Wörter`);
                words = filtered;
            }

            if (words.length === 0) {
                console.log('😕 Keine Wörter gefunden');
                list.innerHTML = '<div class="text-center text-gray-500 text-sm py-4 w-full">😕 Keine Wörter gefunden</div>';
                return;
            }

            const displayWords = words.slice(0, 100);
            console.log(`🔤 Zeige ${displayWords.length} von ${words.length} Wörtern`);

            list.innerHTML = displayWords.map(w => `
        <span class="bg-white/5 border border-white/5 rounded-lg px-3 py-1.5 text-white text-sm hover:bg-white/10 transition cursor-default">${esc(w)}</span>
    `).join('');
        }

        function performDashSearch() {
            const query = document.getElementById('dash-global-search').value.trim().toLowerCase();
            const results = document.getElementById('dash-search-results');
            if (!results) return;
            if (query.length < 2) { results.classList.add('hidden'); return; }

            const found = [];
            if (typeof QUESTIONS_DATABASE !== 'undefined') {
                QUESTIONS_DATABASE.forEach(q => {
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
            const keys = Object.keys(ALL_PROFILES || {});
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

        function toggleDashPlayerList() {
            const list = document.getElementById('dash-player-list');
            const arrow = document.getElementById('dash-player-arrow');
            if (!list || !arrow) return;
            const open = list.classList.contains('hidden');
            list.classList.toggle('hidden', !open);
            arrow.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
        }

        function selectStatPlayer(key) {
            selectedStatPlayer = key;
            renderDashPlayerList();
            renderPlayerStats(key);
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
                    const label = CATEGORY_LABELS[cat] || cat;
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

            const weak = getWeakestCategory(p);
            const weakHtml = weak ? `
                        <div class="dash-stat-card border-l-4 border-amber-500">
                            <div class="label">💡 Schwächste Kategorie</div>
                            <div class="text-white font-bold text-sm">${CATEGORY_LABELS[weak.category] || weak.category}</div>
                            <div class="text-gray-400 text-xs">${Math.round(weak.pct * 100)}% richtig (${weak.attempts} Versuche)</div>
                        </div>
                    ` :
                '<div class="dash-stat-card text-gray-400 text-sm">🔹 Alle Kategorien sind gut!</div>';

            container.innerHTML = `
                        <!-- Kopf: Name + Level -->
                        <div class="glass-card p-4 text-center">
                            <div class="text-3xl font-black text-white">${esc(p.name)}</div>
                            <div class="text-yellow-400 font-bold">${lvl.current.icon} Level ${lvl.index + 1}: ${lvl.current.name}</div>
                            <div class="w-full bg-white/5 rounded-full h-2 mt-2 overflow-hidden border border-white/5">
                                <div class="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style="width:${lvl.progressPct}%"></div>
                            </div>
                            <div class="flex justify-center gap-6 mt-3 text-xs">
                                <span class="text-gray-400">🔥 ${streak} Tage Streak</span>
                                <span class="text-yellow-400">🪙 ${p.coins || 0} Coins</span>
                                <span class="text-indigo-300">📚 ${vocabCount} Vokabeln</span>
                            </div>
                        </div>
                        
                        <!-- Basis-Statistiken -->
                        <div class="grid grid-cols-3 gap-3">
                            <div class="dash-stat-card text-center">
                                <div class="label">Richtig</div>
                                <div class="value">${totalCorrect}</div>
                                <div class="sub">von ${totalAttempts}</div>
                            </div>
                            <div class="dash-stat-card text-center">
                                <div class="label">Trefferquote</div>
                                <div class="value ${accuracy >= 80 ? 'text-emerald-400' : accuracy >= 50 ? 'text-yellow-400' : 'text-rose-400'}">${accuracy}%</div>
                            </div>
                            <div class="dash-stat-card text-center">
                                <div class="label">XP</div>
                                <div class="value">${p.xp || 0}</div>
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

        function renderWeaknessSuggestion() {
            const card = document.getElementById("weakness-card");
            if (!card) return;
            const weak = getWeakestCategory(currentPlayer);
            if (weak) {
                const label = CATEGORY_LABELS[weak.category] || weak.category;
                const pct = Math.round(weak.pct * 100);
                card.innerHTML =
                    `<div class="glass-card-glow p-4 flex items-center justify-between gap-3" style="border-color:rgba(245,158,11,0.2);">
                                <div>
                                    <div class="font-bold text-yellow-400 text-sm">💡 Tipp für dich</div>
                                    <div class="text-xs text-gray-300 mt-1">${label}: nur ${pct}% richtig. Lohnt sich zu üben!</div>
                                </div>
                                <button onclick="startQuizForCategory('${weak.category}')" class="btn-primary text-xs py-2 px-4" style="background:var(--gradient-amber);box-shadow:0 4px 16px rgba(245,158,11,0.3);">Üben →</button>
                            </div>`;
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
                card.innerHTML = "";
            }
        }

        function renderPendingTestCard() {
            const card = document.getElementById("pending-test-card");
            if (!card) return;
            if (currentPlayer && currentPlayer.pendingTest) {
                const t = currentPlayer.pendingTest;
                const labels = t.categories.map(c => CATEGORY_LABELS[c] || c).join(", ");
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
            launchQuiz(questionsForKey(cat));
        }

        // ============================================================
        //  DASHBOARD ADMIN
        // ============================================================
        let currentDashAdminTab = 'progress';

        function switchDashAdminTab(tab) {
            currentDashAdminTab = tab;
            ['progress', 'test', 'rewards'].forEach(t => {
                const view = document.getElementById('dash-admin-' + t + '-view');
                if (view) view.classList.toggle('hidden', t !== tab);
                const btn = document.getElementById('dash-admin-' + t);
                if (btn) {
                    btn.classList.toggle('active', t === tab);
                }
            });
            if (tab === 'progress') renderDashAdminProgress();
            if (tab === 'test') {
                renderDashAdminTest();
                renderTestTemplatesList();
            }
            if (tab === 'rewards') renderDashRewards();
        }

        function renderDashAdmin() {
            renderDashAdminProgress();
            renderDashAdminTest();
            renderDashRewards();
        }

        function renderDashAdminProgress() {
            const container = document.getElementById('dash-admin-stats');
            if (!container) return;
            const keys = Object.keys(ALL_PROFILES || {});
            if (keys.length === 0) {
                container.innerHTML = '<div class="text-gray-500 text-sm text-center py-4">Noch keine Spieler angelegt</div>';
                return;
            }
            container.innerHTML = keys.map(k => {
                const p = ALL_PROFILES[k];
                const totalCorrect = getTotalCorrect(p);
                const totalAttempts = Object.values(p.stats || {}).reduce((sum, s) => sum + s.attempts, 0);
                const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
                const lvl = getLevelInfo(p.xp || 0);
                return `
                            <div class="bg-white/5 border border-white/5 rounded-xl p-3">
                                <div class="flex justify-between items-center">
                                    <span class="font-bold text-white">${esc(p.name)}</span>
                                    <span class="text-yellow-400 text-sm">${lvl.current.icon} ${lvl.current.name}</span>
                                </div>
                                <div class="flex gap-4 text-xs mt-1">
                                    <span class="text-gray-400">🪙 ${p.coins || 0}</span>
                                    <span class="text-gray-400">✅ ${totalCorrect}/${totalAttempts}</span>
                                    <span class="${accuracy >= 80 ? 'text-emerald-400' : accuracy >= 50 ? 'text-yellow-400' : 'text-rose-400'}">${accuracy}%</span>
                                    <span class="text-gray-400">🔥 ${p.streak ? p.streak.count : 0}d</span>
                                </div>
                                <div class="stat-bar mt-1">
                                    <div class="fill ${accuracy >= 80 ? 'good' : accuracy >= 50 ? 'ok' : 'bad'}" style="width:${accuracy}%"></div>
                                </div>
                            </div>
                        `;
            }).join('');
        }

        function renderDashAdminTest() {
            const sel = document.getElementById('dash-test-profile');
            if (sel) {
                const keys = Object.keys(ALL_PROFILES || {});
                sel.innerHTML = keys.length ?
                    keys.map(k => `<option value="${k}">${esc(ALL_PROFILES[k].name)}</option>`).join('') :
                    '<option value="">Kein Spieler</option>';
            }

            const catBox = document.getElementById('dash-test-categories');
            if (catBox && typeof QUESTIONS_DATABASE !== 'undefined') {
                const cats = [...new Set(QUESTIONS_DATABASE.map(q => q.category))];
                catBox.innerHTML = cats.map(c => `
                            <label class="flex items-center gap-2 bg-white/5 border border-white/5 rounded-lg p-2 text-xs font-bold text-gray-300 cursor-pointer hover:bg-white/10 transition">
                                <input type="checkbox" value="${c}" class="dash-test-cat w-4 h-4 accent-indigo-500">
                                <span class="truncate">${CATEGORY_LABELS[c] || c}</span>
                            </label>
                        `).join('');
            }

            const vocBox = document.getElementById('dash-test-vocab');
            if (vocBox && typeof VOCABULARY_DATABASE !== 'undefined') {
                const langLabel = { en: 'EN', tr: 'TR' };
                let html = '';
                Object.keys(VOCABULARY_DATABASE).forEach(lang => {
                    Object.keys(VOCABULARY_DATABASE[lang]).forEach(level => {
                        const set = VOCABULARY_DATABASE[lang][level];
                        const n = (set.words || []).length;
                        if (!n) return;
                        html += `
                            <label class="flex items-center gap-2 bg-white/5 border border-white/5 rounded-lg p-2 text-xs font-bold text-gray-300 cursor-pointer hover:bg-white/10 transition">
                                <input type="checkbox" value="vocab:${lang}:${level}" class="dash-test-cat w-4 h-4 accent-emerald-500">
                                <span class="truncate">${langLabel[lang] || lang.toUpperCase()} · ${esc(set.label || level)}</span>
                            </label>`;
                    });
                });
                vocBox.innerHTML = html || '<div class="text-xs text-gray-500 col-span-2">Keine Vokabeln geladen</div>';
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
            ALL_PROFILES[profileKey].pendingTest = pendingTest;
            db.collection("parents").doc(currentParentUser.uid).collection("profiles").doc(profileKey).update({ pendingTest });
            showToast(`Test für ${esc(ALL_PROFILES[profileKey].name)} zugewiesen! ⏱️`, "success");
            renderDashAdminProgress();
        }

        function saveTestTemplate() {
            const checked = Array.from(document.querySelectorAll('.dash-test-cat:checked')).map(cb => cb.value);
            const minutes = parseInt(document.getElementById('dash-test-time').value) || 10;
            if (checked.length === 0) return showToast("Bitte zuerst Themen auswählen!", "error");
            const name = prompt("Name für diese Test-Vorlage (z.B. 'Mathe-Check'):");
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

        function runAnswerLengthAudit() {
            const box = document.getElementById('dash-audit-result');
            if (!box) return;
            box.classList.remove('hidden');
            if (typeof QUESTIONS_DATABASE === 'undefined') {
                box.innerHTML = '<div class="text-sm text-rose-300">Fragen-Datenbank nicht geladen.</div>';
                return;
            }
            let total = 0,
                longestIncl = 0,
                strict = 0;
            QUESTIONS_DATABASE.forEach(q => {
                if (!Array.isArray(q.answers) || q.answers.length < 2) return;
                if (typeof q.correct !== "number" || q.answers[q.correct] == null) return;
                total++;
                const lens = q.answers.map(a => String(a).length);
                const max = Math.max.apply(null, lens);
                if (lens[q.correct] === max) {
                    longestIncl++;
                    if (lens.filter(l => l === max).length === 1) { strict++; }
                }
            });
            const pct = total ? (longestIncl / total * 100) : 0;
            const pctStrict = total ? (strict / total * 100) : 0;
            SFX.tap();
            box.innerHTML = `
                        <div class="text-sm text-gray-200">Geprüft: <b>${total}</b> Fragen</div>
                        <div class="text-sm text-gray-200">Richtige = längste (inkl. Gleichstand): <b class="text-amber-300">${pct.toFixed(1)}&nbsp;%</b> (${longestIncl})</div>
                        <div class="text-sm text-gray-200">Eindeutig längste (klarer Tipp): <b class="text-rose-300">${pctStrict.toFixed(1)}&nbsp;%</b> (${strict})</div>
                        <div class="text-xs text-gray-400 pt-1">Diese ${strict} Fragen sind die Kandidaten zum Nachbessern.</div>
                    `;
        }

        // ============================================================
        //  ELTERN-ADMIN (PIN)
        // ============================================================
        async function setupAdminPin(isFirstTime) {
            if (!isFirstTime && adminPin) {
                const current = cleanInput(prompt("Zum Ändern bitte aktuellen PIN eingeben:"), 12);
                if (current === null || current === "") return;
                if (current !== adminPin) {
                    SFX.wrong();
                    return showToast("PIN stimmt nicht.", "error", "pin");
                }
            }
            const intro = isFirstTime ?
                "Eltern-Bereich einrichten\n\nLegt einen PIN fest, damit die Kinder hier nicht hineinkommen.\n\nNeuer PIN (4-12 Zeichen):" :
                "Neuer PIN (4-12 Zeichen):";
            const p1 = cleanInput(prompt(intro), 12);
            if (p1 === null || p1 === "") return;
            if (p1.length < 4) return showToast("Der PIN braucht mindestens 4 Zeichen.", "error", "pin");
            const p2 = cleanInput(prompt("Zur Sicherheit noch einmal eingeben:"), 12);
            if (p2 !== p1) return showToast("Die beiden Eingaben stimmen nicht überein.", "error", "pin");
            try {
                await db.collection("parents").doc(currentParentUser.uid).set({ adminPin: p1 }, { merge: true });
                adminPin = p1;
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

        // ============================================================
        //  GAST-PROFILE
        // ============================================================
        async function addGuestProfile() {
            const name = cleanInput(prompt("Name des Gastes:"), 24);
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
            if (!confirm(`Diese Gäste endgültig entfernen?\n\n${names}\n\nIhre Punkte gehen dabei verloren.`)) return;
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
        async function saveNewProfile() {
            const name = cleanInput(document.getElementById("new-profile-name").value, 24);
            const birthday = document.getElementById("new-profile-birthday").value || "";
            const gradeRaw = document.getElementById("new-profile-grade").value;
            const grade = gradeRaw ? parseInt(gradeRaw) : null;
            if (!name) return showToast("Bitte Namen eingeben!", "error");
            if (birthday && ageFromBirthday(birthday) === null) return showToast("Der Geburtstag sieht nicht richtig aus.",
                "error");
            const newProf = {
                name: name,
                birthday: birthday,
                grade: grade,
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

