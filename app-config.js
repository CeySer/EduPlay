

        let OFFLINE_MODUS_AKTIV = false;
        let hubWatchUnsub = null;



        // ============================================================
        //  FIREBASE INITIALISIERUNG
        // ============================================================
        const firebaseConfig = {
            apiKey: "AIzaSyDh8uyjrB_hJlT5a5oJSQd6YhBjLaUZIyM",
            authDomain: "eduplay-hub-70d1a.firebaseapp.com",
            projectId: "eduplay-hub-70d1a",
            storageBucket: "eduplay-hub-70d1a.firebasestorage.app",
            messagingSenderId: "705290582264",
            appId: "1:705290582264:web:6655d999a5564ecb7b230d"
        };

        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        const db = firebase.firestore();


        // ============================================================
        // DATENBANKEN ZUSAMMENFÜHREN
        // ============================================================

        // 1. Fragen aus den einzelnen Dateien zusammenführen
        const QUESTIONS_DATABASE = [];

        // Allgemeine Fragen
        if (typeof SCHOOL_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...SCHOOL_QUESTIONS); }
        if (typeof BERUFS_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...BERUFS_QUESTIONS); }
        if (typeof KFZ_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...KFZ_QUESTIONS); }
        if (typeof FUN_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...FUN_QUESTIONS); }

        // Klasse 1
        if (typeof K1_MATHE_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K1_MATHE_QUESTIONS); }
        if (typeof K1_DEUTSCH_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K1_DEUTSCH_QUESTIONS); }
        if (typeof K1_SACHUNTERRICHT_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K1_SACHUNTERRICHT_QUESTIONS); }

        // Klasse 2
        if (typeof K2_MATHE_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K2_MATHE_QUESTIONS); }
        if (typeof K2_DEUTSCH_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K2_DEUTSCH_QUESTIONS); }
        if (typeof K2_SACHUNTERRICHT_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K2_SACHUNTERRICHT_QUESTIONS); }
        if (typeof K2_ENGLISCH_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K2_ENGLISCH_QUESTIONS); }

        // Klasse 3
        if (typeof K3_MATHE_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K3_MATHE_QUESTIONS); }
        if (typeof K3_DEUTSCH_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K3_DEUTSCH_QUESTIONS); }
        if (typeof K3_SACHUNTERRICHT_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K3_SACHUNTERRICHT_QUESTIONS); }
        if (typeof K3_ENGLISCH_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K3_ENGLISCH_QUESTIONS); }

        // Klasse 4
        if (typeof K4_MATHE_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K4_MATHE_QUESTIONS); }
        if (typeof K4_DEUTSCH_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K4_DEUTSCH_QUESTIONS); }
        if (typeof K4_SACHUNTERRICHT_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K4_SACHUNTERRICHT_QUESTIONS); }
        if (typeof K4_ENGLISCH_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K4_ENGLISCH_QUESTIONS); }





        // 2. Vokabeln - werden bereits von vocabulary.js geladen
        // Die Variable VOCABULARY_DATABASE existiert bereits!

        // 3. Wörter für Buchstabensalat zusammenführen
        const GERMAN_WORDS = [];
        if (typeof GERMAN_WORDS_KIDS !== 'undefined') {
            GERMAN_WORDS.push(...GERMAN_WORDS_KIDS);
        }
        if (typeof GERMAN_WORDS_ADULT !== 'undefined') {
            GERMAN_WORDS.push(...GERMAN_WORDS_ADULT);
        }

        console.log('📚 Daten geladen:');
        console.log(`📖 Fragen: ${QUESTIONS_DATABASE.length}`);
        console.log(`📝 Vokabeln: ${typeof VOCABULARY_DATABASE !== 'undefined' ? Object.keys(VOCABULARY_DATABASE).length : '?'} Sprachen`);
        console.log(`🔤 Wörter: ${GERMAN_WORDS.length}`);

        // ============================================================
        //  DEBUG-FUNKTIONEN (NEU)
        // ============================================================
        function debugDatabaseLoading() {
            console.log('🔍 Datenbank-Check:');
            console.log('QUESTIONS_DATABASE:', typeof QUESTIONS_DATABASE !== 'undefined' ? QUESTIONS_DATABASE.length : '❌ NICHT GELADEN');
            console.log('VOCABULARY_DATABASE:', typeof VOCABULARY_DATABASE !== 'undefined' ? Object.keys(VOCABULARY_DATABASE).length : '❌ NICHT GELADEN');
            console.log('GERMAN_WORDS:', typeof GERMAN_WORDS !== 'undefined' ? GERMAN_WORDS.length : '❌ NICHT GELADEN');

            // Prüfe, ob die Datenbanken wirklich Arrays sind
            if (typeof QUESTIONS_DATABASE !== 'undefined' && Array.isArray(QUESTIONS_DATABASE)) {
                console.log('✅ Fragen geladen:', QUESTIONS_DATABASE.length, 'Fragen');
                if (QUESTIONS_DATABASE.length > 0) {
                    console.log('📖 Beispiel-Frage:', QUESTIONS_DATABASE[0]);
                }
            } else {
                console.warn('⚠️ QUESTIONS_DATABASE ist kein Array oder nicht definiert!');
            }

            if (typeof VOCABULARY_DATABASE !== 'undefined') {
                console.log('✅ Vokabeln geladen');
                const firstLang = Object.keys(VOCABULARY_DATABASE)[0];
                if (firstLang) {
                    const firstLevel = Object.keys(VOCABULARY_DATABASE[firstLang])[0];
                    if (firstLevel && VOCABULARY_DATABASE[firstLang][firstLevel].words) {
                        console.log('📝 Beispiel-Vokabel:', VOCABULARY_DATABASE[firstLang][firstLevel].words[0]);
                    }
                }
            }

            if (typeof GERMAN_WORDS !== 'undefined' && Array.isArray(GERMAN_WORDS)) {
                console.log('✅ Wörter geladen:', GERMAN_WORDS.length, 'Wörter');
                if (GERMAN_WORDS.length > 0) {
                    console.log('🔤 Beispiel-Wort:', GERMAN_WORDS[0]);
                }
            }
        }
        let currentParentUser = null;
        let ALL_PROFILES = {};
        let currentPlayer = null;
        let activePlayerKey = "";
        let sessionLearnedWords = new Set();

        let focusTimerInterval = null;
        let focusTimeRemaining = 15 * 60;
        let scrabbleTimerInterval = null;

        const CATEGORY_LABELS = (function () {
            const m = {};
            if (typeof CURRICULUM !== 'undefined') {
                CURRICULUM.forEach(g => g.subjects.forEach(s => { m[s.key] = g.label + " · " + s.label; }));
            }
            if (typeof BERUFSSCHULE !== 'undefined') BERUFSSCHULE.forEach(s => { m[s.key] = s.label; });
            if (typeof FUN_CATEGORIES !== 'undefined') FUN_CATEGORIES.forEach(s => { m[s.key] = s.label; });
            return m;
        })();

        let _byId = null;

        function questionById(id) {
            if (!_byId) {
                _byId = {};
                if (typeof QUESTIONS_DATABASE !== 'undefined') {
                    QUESTIONS_DATABASE.forEach(q => { if (q.id) _byId[q.id] = q; });
                }
            }
            return _byId[id] || null;
        }

        function questionsByIds(ids) {
            return (ids || []).map(questionById).filter(Boolean);
        }

        // function questionsForKey(key) {
        //     if (typeof QUESTIONS_DATABASE === 'undefined' || !key) return [];

        //     // Prüfe ob key mit "subject:" beginnt
        //     if (String(key).startsWith("subject:")) {
        //         const sub = String(key).slice("subject:".length);
        //         return QUESTIONS_DATABASE.filter(q => q.subject === sub && q.area === "schule");
        //     }

        //     // Normaler Category-Lookup
        //     return QUESTIONS_DATABASE.filter(q => q.category === key);
        // }

        function questionsForKey(key) {
            if (typeof QUESTIONS_DATABASE === 'undefined' || !key) return [];

            // Unterthema-Filter (z.B. "topic:k1_mathe:addition")
            if (String(key).startsWith("topic:")) {
                const parts = key.split(":");
                if (parts.length === 3) {
                    const [_, cat, top] = parts;
                    return QUESTIONS_DATABASE.filter(q => q.category === cat && q.topic === top);
                }
            }

            // Quer-Fach über alle Klassen (z.B. "subject:mathe")
            if (String(key).startsWith("subject:")) {
                const sub = String(key).slice("subject:".length);
                return QUESTIONS_DATABASE.filter(q => q.subject === sub && q.area === "schule");
            }

            // Standard-Kategorie (z.B. "k1_mathe")
            return QUESTIONS_DATABASE.filter(q => q.category === key);
        }

        function questionsWhere(filter) {
            if (typeof QUESTIONS_DATABASE === 'undefined') return [];
            return QUESTIONS_DATABASE.filter(filter);
        }

        function questionsByGrade(grade) {
            return questionsWhere(q => q.grade === grade);
        }

        function questionsBySubject(subject) {
            return questionsWhere(q => q.subject === subject && q.area === "schule");
        }

        function questionsByArea(area) {
            return questionsWhere(q => q.area === area);
        }

        function subjectsAcrossGrades() {
            if (typeof CURRICULUM === 'undefined') return [];
            const gefunden = {};
            CURRICULUM.forEach(g => g.subjects.forEach(s => {
                const sub = s.key.replace(/^k\d+_/, "");
                if (!gefunden[sub]) {
                    gefunden[sub] = { key: sub, label: s.label.replace(/\s*\([^)]*\)\s*$/, "") };
                }
            }));
            return Object.values(gefunden)
                .map(s => ({ key: "subject:" + s.key, label: s.label, count: questionsBySubject(s.key).length }))
                .filter(s => s.count > 0)
                .sort((a, b) => a.label.localeCompare(b.label, "de"));
        }

        function getAreas(mode) {
            mode = mode || "alle";
            const areas = [];
            if (mode !== "spass") {
                if (typeof CURRICULUM !== 'undefined') {
                    CURRICULUM.forEach(g => areas.push({
                        value: "grade_" + g.grade,
                        label: g.label,
                        stufe: g.stufe,
                        subjects: g.subjects
                    }));
                }
                if (typeof BERUFSSCHULE !== 'undefined' && BERUFSSCHULE.length) {
                    areas.push({ value: "beruf", label: "Berufsschule", stufe: "Berufsschule", subjects: BERUFSSCHULE });
                }
                const quer = subjectsAcrossGrades();
                if (quer.length) {
                    areas.push({
                        value: "quer",
                        label: "Fach über alle Klassen",
                        stufe: "📚 Fachweise Wiederholung",
                        subjects: quer
                    });
                }
            }
            if (mode !== "lernen") {
                if (typeof FUN_CATEGORIES !== 'undefined' && FUN_CATEGORIES.length) {
                    areas.push({
                        value: "spass",
                        label: "Spaß-Quiz",
                        stufe: "🎉 Spaß (kein Schulstoff)",
                        subjects: FUN_CATEGORIES
                    });
                }
            }
            return areas;
        }

        function suggestedArea() {
            const g = playerGrade(currentPlayer);
            if (g) return "grade_" + g;
            return null;
        }

        let _questionCounts = null;

        function questionCount(key) {
            if (!_questionCounts) {
                _questionCounts = {};
                if (typeof QUESTIONS_DATABASE !== 'undefined') {
                    QUESTIONS_DATABASE.forEach(q => {
                        _questionCounts[q.category] = (_questionCounts[q.category] || 0) + 1;
                        if (q.area === "schule" && q.subject) {
                            const sk = "subject:" + q.subject;
                            _questionCounts[sk] = (_questionCounts[sk] || 0) + 1;
                        }
                    });
                }
            }
            return _questionCounts[key] || 0;
        }

        // function fillSubjectSelect(areaId, subjectId) {
        //     const aSel = document.getElementById(areaId);
        //     const sSel = document.getElementById(subjectId);
        //     if (!aSel || !sSel) return;
        //     const mode = aSel.dataset.mode || "alle";
        //     const area = getAreas(mode).find(a => a.value === aSel.value);
        //     const subs = area ? area.subjects : [];
        //     sSel.innerHTML = subs.map(s => `<option value="${s.key}">${s.label} · ${questionCount(s.key)}</option>`).join("");
        // }
        const TOPIC_LABELS = {
            // Klasse 1
            "nachbarzahlen": "🔢 Zählen & Nachbarzahlen",
            "verliebte_zahlen": "❤️ Verliebte Zahlen (bis 10)",
            "addition": "➕ Addition (+)",
            "subtraktion": "➖ Subtraktion (-)",
            "groessen_messen": "💶 Geld, Uhrzeit & Tage",
            "geometrie": "📐 Formen & Geometrie",
            "anlaute": "🔤 Anlaute & Buchstaben",
            "silben": "👏 Silben klatschen",
            "reime": "🎵 Reime & Wörter",
            "lesen": "📖 Erstes Lesen",
            "tiere_pflanzen": "🦊 Tiere & Pflanzen",
            "jahreszeiten": "🍂 Jahreszeiten & Wetter",
            "koerper": "👁️ Körper & Gesundheit",
            "verkehr": "🚦 Verkehr & Sicherheit",

            // Klasse 2 - Deutsch
            "nomen": "🏷️ Nomen & Mehrzahl",
            "verben_adjektive": "🏃 Verben & Adjektive",
            "satzarten": "✍️ Satzarten & Satzzeichen",
            "abc_rechtschreibung": "🔤 ABC & Rechtschreibung",

            // Klasse 2 - Mathematik
            "hunderterraum": "💯 Hunderterraum & Zahlen",
            "add_sub_20_100": "➕➖ Plus & Minus bis 100",
            "einmaleins": "✖️ Das Kleine Einmaleins",
            "groessen_geometrie_k2": "🕒 Geld, Uhrzeit & Formen",

            // Klasse 2 - Sachunterricht
            "tiere_pflanzen_k2": "🌾 Tiere & Getreidesorten",
            "stoffe_wasser": "💧 Wasser, Eis & Experimente",
            "zeit_orientierung": "🧭 Himmelsrichtungen & Zeit",
            "verkehr_koerper_k2": "🚲 Zähne, Körper & Verkehr",

            // Grundschule KLasse 2 - Englisch
            "greetings": "👋 Begrüßung & Redewendungen",
            "colors_numbers": "🎨 Farben & Zahlen",
            "animals": "🐶 Tiere (Animals)",
            "school_family": "🏫 Schule, Familie & Körper",

            // ================================================================
            // KLASSE 3
            // ================================================================
            // Deutsch
            "wortarten_zeitformen": "⏱️ Wortarten & Zeitformen",
            "rechtschreibung_bausteine": "🔍 Rechtschreibstrategien & Wortbausteine",
            "satzglieder": "🧩 Satzglieder (Subjekt & Prädikat)",
            "leseverstaendnis_k3": "📖 Texte, Märchen & Leseverständnis",

            // Mathematik
            "tausenderraum": "🔢 Tausenderraum & Orientierung",
            "schriftliche_addition_subtraktion": "➕➖ Schriftlich Plus & Minus",
            "multiplikation_division_k3": "✖️➗ Halbschriftlich Mal & Geteilt",
            "groessen_geometrie_k3": "⚖️ Längen, Gewichte, Uhrzeit & Würfelnetze",

            // Sachunterricht
            "wald_natur": "🌲 Ökosystem Wald, Bäume & Naturschutz",
            "karte_heimat": "🗺️ Kartenkunde, Maßstab & NRW",
            "strom_energie": "⚡ Stromkreis, Energie & Magnetismus",
            "koerper_gesundheit_k3": "🫀 Organe, Sinne & Erste Hilfe",

            // Englisch
            "family_feelings": "👥 Family, Friends & Feelings",
            "weather_seasons": "🌦️ Weather, Months & Seasons",
            "food_clothes": "🍎 Food, Drinks & Clothes",
            "home_town": "🏡 Home, Rooms & Town",

        };

        function fillSubjectSelect(areaId, subjectId) {
            const aSel = document.getElementById(areaId);
            const sSel = document.getElementById(subjectId);
            if (!aSel || !sSel) return;
            const mode = aSel.dataset.mode || "alle";
            const area = getAreas(mode).find(a => a.value === aSel.value);
            const subs = area ? area.subjects : [];

            let html = "";
            subs.forEach(s => {
                const totalCount = questionCount(s.key);
                // Hauptfach (z.B. Alle 100 Mathefragen)
                html += `<option value="${s.key}">${s.label} (Alle · ${totalCount})</option>`;

                // Dynamische Unterthemen (topics) einfügen, falls vorhanden
                if (typeof QUESTIONS_DATABASE !== 'undefined') {
                    const subQuestions = QUESTIONS_DATABASE.filter(q => q.category === s.key);
                    const topics = [...new Set(subQuestions.map(q => q.topic).filter(Boolean))];

                    topics.forEach(t => {
                        const tCount = subQuestions.filter(q => q.topic === t).length;
                        const label = TOPIC_LABELS[t] || (t.charAt(0).toUpperCase() + t.slice(1));
                        html += `<option value="topic:${s.key}:${t}">&nbsp;&nbsp;&nbsp;&nbsp;└ ${label} (${tCount})</option>`;
                    });
                }
            });

            sSel.innerHTML = html;
        }

        function setupCategorySelectors(areaId, subjectId, mode) {
            const aSel = document.getElementById(areaId);
            if (!aSel) return;
            mode = mode || "alle";
            aSel.dataset.mode = mode;
            const areas = getAreas(mode);
            let html = "",
                lastStufe = null;
            areas.forEach(a => {
                if (a.stufe !== lastStufe) {
                    if (lastStufe !== null) html += "</optgroup>";
                    html += `<optgroup label="${a.stufe}">`;
                    lastStufe = a.stufe;
                }
                html += `<option value="${a.value}">${a.label}</option>`;
            });
            if (lastStufe !== null) html += "</optgroup>";
            aSel.innerHTML = html;
            const suggested = (mode !== "spass") ? suggestedArea() : null;
            if (suggested && areas.some(a => a.value === suggested)) aSel.value = suggested;
            fillSubjectSelect(areaId, subjectId);
            aSel.onchange = () => fillSubjectSelect(areaId, subjectId);
        }

        let testMode = false;
        let testTimeRemaining = 0;
        let testTimerInterval = null;
        let testCorrectCount = 0;
        let testAnsweredCount = 0;

        let familyRewards = [];
        let adminPin = null;
        let testTemplates = [];

        const LEVELS = [
            { name: "Anfänger", icon: "🌱", min: 0 },
            { name: "Lernprofi", icon: "📗", min: 150 },
            { name: "Überflieger", icon: "🚀", min: 400 },
            { name: "Experte", icon: "🎓", min: 900 },
            { name: "Meister", icon: "🏅", min: 1800 },
            { name: "Champion", icon: "👑", min: 3200 },
            { name: "Genie", icon: "🧠", min: 5500 }
        ];

        function getLevelInfo(xp) {
            xp = xp || 0;
            let idx = 0;
            for (let i = 0; i < LEVELS.length; i++) { if (xp >= LEVELS[i].min) idx = i; }
            const current = LEVELS[idx];
            const next = LEVELS[idx + 1] || null;
            const progressPct = next ? Math.round(((xp - current.min) / (next.min - current.min)) * 100) : 100;
            return { index: idx, current, next, xp, progressPct };
        }

        const BADGES = [
            { id: "starter", icon: "🌱", name: "Erster Schritt", desc: "Deine erste richtige Antwort" },
            { id: "fifty", icon: "⭐", name: "Fleißig dabei", desc: "50 Fragen richtig beantwortet" },
            { id: "hundred", icon: "💯", name: "100 Club", desc: "100 Fragen richtig beantwortet" },
            { id: "streak3", icon: "🔥", name: "3-Tage-Streak", desc: "3 Tage in Folge geübt" },
            { id: "streak7", icon: "🔥🔥", name: "Wochen-Streak", desc: "7 Tage in Folge geübt" },
            { id: "vocab50", icon: "📚", name: "Vokabel-Sammler", desc: "50 Vokabeln gelernt" },
            { id: "vocab100", icon: "📖", name: "Vokabel-Profi", desc: "100 Vokabeln gelernt" },
            { id: "perfecttest", icon: "🏆", name: "Testsieger", desc: "Einen Test mit 100% bestanden" },
            { id: "level_meister", icon: "🏅", name: "Meister erreicht", desc: "Level 'Meister' erreicht" }
        ];

        function getTotalCorrect(p) {
            if (!p.stats) return 0;
            return Object.values(p.stats).reduce((sum, s) => sum + s.correct, 0);
        }

        function evaluateAndApplyBadges(p) {
            if (!p.badges) p.badges = [];
            const totalCorrect = getTotalCorrect(p);
            const vocabCount = (p === currentPlayer) ? sessionLearnedWords.size : (p.learnedWords ? p.learnedWords.length : 0);
            const streakCount = p.streak ? p.streak.count : 0;
            const hasPerfectTest = (p.testHistory || []).some(t => t.total > 0 && t.correct === t.total);
            const level = getLevelInfo(p.xp || 0);
            const conditions = {
                starter: totalCorrect >= 1,
                fifty: totalCorrect >= 50,
                hundred: totalCorrect >= 100,
                streak3: streakCount >= 3,
                streak7: streakCount >= 7,
                vocab50: vocabCount >= 50,
                vocab100: vocabCount >= 100,
                perfecttest: hasPerfectTest,
                level_meister: level.index >= 4
            };
            let newBadge = null;
            BADGES.forEach(b => {
                if (conditions[b.id] && !p.badges.includes(b.id)) {
                    p.badges.push(b.id);
                    newBadge = b;
                }
            });
            return newBadge;
        }

        function checkAndAwardBadges() {
            if (!currentPlayer) return;
            const newBadge = evaluateAndApplyBadges(currentPlayer);
            if (newBadge) {
                showToast(`🎉 Neues Abzeichen: ${newBadge.icon} ${newBadge.name}!`, "success");
                if (typeof confetti === 'function') confetti();
                SFX.levelUp();
            }
        }

        function registerStreak() {
            if (!currentPlayer) return;
            const today = new Date().toISOString().slice(0, 10);
            if (!currentPlayer.streak) currentPlayer.streak = { count: 0, lastDate: null };
            if (currentPlayer.streak.lastDate === today) return;
            const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
            currentPlayer.streak.count = (currentPlayer.streak.lastDate === yesterday) ? currentPlayer.streak.count + 1 : 1;
            currentPlayer.streak.lastDate = today;
        }

        function addXP(amount) {
            if (!currentPlayer) return;
            currentPlayer.coins = (currentPlayer.coins || 0) + amount;
            currentPlayer.xp = (currentPlayer.xp || 0) + amount;
            registerStreak();
            checkAndAwardBadges();
            savePlayerProgress();
            updateMenuGamification();
        }

        function awardXPToProfile(key, amount) {
            const p = ALL_PROFILES[key];
            if (!p) return;
            p.coins = (p.coins || 0) + amount;
            p.xp = (p.xp || 0) + amount;
            const today = new Date().toISOString().slice(0, 10);
            if (!p.streak) p.streak = { count: 0, lastDate: null };
            if (p.streak.lastDate !== today) {
                const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
                p.streak.count = (p.streak.lastDate === yesterday) ? p.streak.count + 1 : 1;
                p.streak.lastDate = today;
            }
            evaluateAndApplyBadges(p);
            db.collection("parents").doc(currentParentUser.uid).collection("profiles").doc(key).set(p);
            if (activePlayerKey === key) {
                currentPlayer = p;
                updateMenuGamification();
            }
        }

        function updateMenuGamification() {
            if (!currentPlayer) return;
            const lvl = getLevelInfo(currentPlayer.xp || 0);
            const lblEl = document.getElementById("menu-level-label");
            if (!lblEl) return;
            lblEl.innerText = `${lvl.current.icon} ${lvl.current.name}`;
            document.getElementById("menu-level-next").innerText = lvl.next ? `Nächstes Level: ${lvl.next.icon} ${lvl.next.name} (${lvl.next.min} XP)` :
                "Höchstes Level erreicht! 🎉";
            document.getElementById("menu-level-bar").style.width = lvl.progressPct + "%";
            const streakCount = currentPlayer.streak ? currentPlayer.streak.count : 0;
            document.getElementById("menu-streak").innerText = `🔥 ${streakCount} Tag${streakCount === 1 ? '' : 'e'} Streak`;
            const badgesRow = document.getElementById("menu-badges-row");
            const earned = currentPlayer.badges || [];
            badgesRow.innerHTML = earned.length === 0 ?
                `<p class="text-xs text-gray-500">Noch keine Abzeichen – leg los!</p>` :
                earned.map(id => {
                    const b = BADGES.find(x => x.id === id);
                    if (!b) return "";
                    return `<div class="flex-shrink-0 bg-white/5 border border-white/5 rounded-xl px-3 py-2 text-center" title="${b.desc}"><div class="text-2xl">${b.icon}</div><div class="text-[10px] font-bold text-gray-300 mt-1 whitespace-nowrap">${b.name}</div></div>`;
                }).join('');
        }

        async function loadFamilyRewards() {
            try {
                const doc = await db.collection("parents").doc(currentParentUser.uid).get();
                const data = doc.exists ? doc.data() : {};
                familyRewards = data.rewards || [];
                testTemplates = data.testTemplates || [];
                adminPin = data.adminPin || null;
            } catch (e) {
                familyRewards = [];
                testTemplates = [];
                adminPin = null;
            }
        }

        function saveFamilyRewards() {
            db.collection("parents").doc(currentParentUser.uid).set({ rewards: familyRewards }, { merge: true });
        }

        function addRewardFromDashboard() {
            const name = cleanInput(document.getElementById("dash-reward-name").value, 40);
            const cost = parseInt(document.getElementById("dash-reward-cost").value);
            if (!name || !cost || cost <= 0) return showToast("Bitte Name und Coins angeben!", "error");
            familyRewards.push({ id: "r_" + Date.now(), name, cost });
            saveFamilyRewards();
            document.getElementById("dash-reward-name").value = "";
            document.getElementById("dash-reward-cost").value = "";
            renderDashRewards();
            showToast("Belohnung hinzugefügt!", "success");
        }

        function renderDashRewards() {
            const list = document.getElementById("dash-reward-list");
            if (!list) return;
            const rewards = familyRewards || [];
            list.innerHTML = rewards.length === 0 ?
                '<div class="text-gray-500 text-sm text-center py-2">Noch keine Belohnungen angelegt</div>' :
                rewards.map(r =>
                    `<div class="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl px-3 py-2">
                        <span class="text-white text-sm">${esc(r.name)}</span>
                        <span class="text-yellow-400 text-xs">🪙 ${r.cost}</span>
                        <button onclick="deleteReward('${r.id}')" class="text-rose-400 font-bold text-xs hover:text-rose-300">❌</button>
                    </div>`
                ).join('');
        }

        function deleteReward(id) {
            familyRewards = familyRewards.filter(r => r.id !== id);
            saveFamilyRewards();
            renderDashRewards();
            showToast("Belohnung entfernt", "info");
        }

        // ============================================================
        //  HILFSFUNKTIONEN
        // ============================================================
        function esc(value) {
            if (value === null || value === undefined) return "";
            return String(value)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");
        }

        function cleanInput(value, maxLen) {
            return String(value || "")
                .replace(/[<>]/g, "")
                .replace(/[\u0000-\u001F\u007F]/g, "")
                .trim()
                .slice(0, maxLen || 40);
        }

        function isOffline() {
            return (typeof navigator !== "undefined" && navigator.onLine === false);
        }

        function isNetworkError(err) {
            if (isOffline()) return true;
            if (!err) return false;
            const code = String(err.code || "").toLowerCase();
            const msg = String(err.message || err).toLowerCase();
            return code.includes("unavailable") ||
                code.includes("deadline-exceeded") ||
                code.includes("network") ||
                msg.includes("offline") ||
                msg.includes("network") ||
                msg.includes("failed to fetch");
        }

        function handleError(context, err, friendly, opts) {
            opts = opts || {};
            try { console.error("[EduPlay] " + context, err); } catch (e) { }
            if (opts.silent) return;
            let msg;
            if (isNetworkError(err)) {
                msg = "📴 Keine Verbindung – probier es gleich noch einmal.";
            } else {
                msg = friendly || "Hoppla, das hat nicht geklappt – versuch es gleich nochmal!";
            }
            showToast(msg, "error", "err:" + context);
        }

        function showToast(msg, type = "success", key) {
            const c = document.getElementById("toast-container");
            if (!c) return;
            if (key) {
                Array.from(c.children).forEach(el => {
                    if (el.dataset && el.dataset.toastKey === key) el.remove();
                });
            }
            const t = document.createElement("div");
            if (key) t.dataset.toastKey = key;
            t.className =
                `toast ${type === "success" ? "success" : "error"}`;
            t.innerHTML = msg;
            c.appendChild(t);
            while (c.children.length > 3) c.removeChild(c.firstElementChild);
            setTimeout(() => t.remove(), 3000);
        }

        // ============================================================
        //  SOUND
        // ============================================================
        let audioCtx = null;
        let soundOn = true;
        try { soundOn = localStorage.getItem("eduplaySound") !== "off"; } catch (e) { }

        function ensureAudio() {
            if (!soundOn) return null;
            try {
                if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                if (audioCtx.state === "suspended") audioCtx.resume();
                return audioCtx;
            } catch (e) { return null; }
        }

        function playTones(sequence, type = "sine", volume = 0.15) {
            const ctx = ensureAudio();
            if (!ctx) return;
            let startAt = ctx.currentTime;
            sequence.forEach(([freq, dur]) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = type;
                osc.frequency.setValueAtTime(freq, startAt);
                gain.gain.setValueAtTime(0, startAt);
                gain.gain.linearRampToValueAtTime(volume, startAt + 0.015);
                gain.gain.exponentialRampToValueAtTime(0.0001, startAt + dur);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(startAt);
                osc.stop(startAt + dur + 0.02);
                startAt += dur;
            });
        }

        const SFX = {
            tap: () => playTones([
                [440, 0.05]
            ], "triangle", 0.07),
            correct: () => playTones([
                [660, 0.09],
                [880, 0.14]
            ], "sine", 0.14),
            wrong: () => playTones([
                [220, 0.14],
                [165, 0.20]
            ], "sawtooth", 0.10),
            win: () => playTones([
                [523, 0.11],
                [659, 0.11],
                [784, 0.11],
                [1047, 0.26]
            ], "sine", 0.14),
            levelUp: () => playTones([
                [587, 0.09],
                [740, 0.09],
                [988, 0.20]
            ], "triangle", 0.13),
            coin: () => playTones([
                [988, 0.06],
                [1319, 0.11]
            ], "square", 0.07),
            tick: () => playTones([
                [880, 0.04]
            ], "square", 0.05),
            timeUp: () => playTones([
                [392, 0.15],
                [330, 0.15],
                [262, 0.28]
            ], "sawtooth", 0.11)
        };

        function toggleSound() {
            soundOn = !soundOn;
            try { localStorage.setItem("eduplaySound", soundOn ? "on" : "off"); } catch (e) { }
            document.querySelectorAll(".sound-toggle-icon").forEach(el => el.innerText = soundOn ? "🔊" : "🔇");
            if (soundOn) SFX.tap();
            showToast(soundOn ? "🔊 Ton an" : "🔇 Ton aus", "success", "sound");
        }

        function inviteFriends() {
            // Teilen-Link für die App
            const shareData = {
                title: 'EduPlay Hub',
                text: 'Hey! Lern mit mir zusammen auf EduPlay Hub – mach mit! 🚀',
                url: window.location.href
            };

            if (navigator.share) {
                // Mobile: Native Share API
                navigator.share(shareData).catch(() => { });
            } else {
                // Desktop: Link kopieren
                navigator.clipboard.writeText(window.location.href).then(() => {
                    showToast('🔗 Link kopiert! Schick ihn deinen Freunden.', 'success');
                }).catch(() => {
                    // Fallback: Alert mit Link
                    alert('Teile diesen Link mit deinen Freunden:\n\n' + window.location.href);
                });
            }
        }


        function toggleTheme() {
            const isDark = document.body.classList.toggle('dark-theme');
            // Speichert die Auswahl des Nutzers
            try { localStorage.setItem('eduplayTheme', isDark ? 'dark' : 'light'); } catch (e) { }
            showToast(isDark ? "🌙 Dark-Mode aktiv" : "☀️ Light-Mode aktiv", "success", "theme");
        }
