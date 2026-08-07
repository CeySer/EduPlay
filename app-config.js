

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

        // Lokaler Zwischenspeicher: Ohne Netz liest die App weiter aus dem
        // Gerät (Profile, Coins, laufende Duelle) und schickt Änderungen
        // nach, sobald wieder Empfang da ist. Wichtig für Autofahrten –
        // ohne das steht bei jedem Funkloch alles still.
        db.enablePersistence({ synchronizeTabs: true }).catch(function (err) {
            // failed-precondition = mehrere Tabs ohne Tab-Sync,
            // unimplemented  = Browser kann es nicht (z.B. privater Modus).
            // Beides ist kein Grund, die App anzuhalten.
            console.warn("Offline-Speicher nicht aktiv:", err && err.code);
        });


        // ============================================================
        // DATENBANKEN ZUSAMMENFÜHREN
        // ============================================================

        // 1. Fragen aus den einzelnen Dateien zusammenführen
        const QUESTIONS_DATABASE = [];

        // Hinweis: Der datenbanken_loader.js füllt QUESTIONS_DATABASE nach dem
        // asynchronen Laden neu. Dieser Block ist Fallback, falls Dateien
        // bereits synchron geladen wurden.
        function _pushIf(arr) {
            if (typeof arr !== 'undefined' && Array.isArray(arr) && arr.length) {
                QUESTIONS_DATABASE.push(...arr);
            }
        }
        _pushIf(typeof SCHOOL_QUESTIONS !== 'undefined' ? SCHOOL_QUESTIONS : null);
        _pushIf(typeof BERUF_ELEKTRO_QUESTIONS !== 'undefined' ? BERUF_ELEKTRO_QUESTIONS : null);
        _pushIf(typeof BERUF_TISCHLER_QUESTIONS !== 'undefined' ? BERUF_TISCHLER_QUESTIONS : null);
        _pushIf(typeof BERUF_INDUSTRIEMECHANIKER_QUESTIONS !== 'undefined' ? BERUF_INDUSTRIEMECHANIKER_QUESTIONS : null);
        _pushIf(typeof BERUF_FACHINFORMATIKER_QUESTIONS !== 'undefined' ? BERUF_FACHINFORMATIKER_QUESTIONS : null);
        _pushIf(typeof BERUF_BUERO_QUESTIONS !== 'undefined' ? BERUF_BUERO_QUESTIONS : null);
        _pushIf(typeof BERUF_VERKAEUFER_QUESTIONS !== 'undefined' ? BERUF_VERKAEUFER_QUESTIONS : null);
        _pushIf(typeof BERUF_PFLEGE_QUESTIONS !== 'undefined' ? BERUF_PFLEGE_QUESTIONS : null);
        _pushIf(typeof BERUF_FRISEUR_QUESTIONS !== 'undefined' ? BERUF_FRISEUR_QUESTIONS : null);
        _pushIf(typeof BERUF_KFZ_QUESTIONS !== 'undefined' ? BERUF_KFZ_QUESTIONS : null);
        _pushIf(typeof K1_MATHE_QUESTIONS !== 'undefined' ? K1_MATHE_QUESTIONS : null);
        _pushIf(typeof K1_DEUTSCH_QUESTIONS !== 'undefined' ? K1_DEUTSCH_QUESTIONS : null);
        _pushIf(typeof K1_SACHUNTERRICHT_QUESTIONS !== 'undefined' ? K1_SACHUNTERRICHT_QUESTIONS : null);
        _pushIf(typeof K2_MATHE_QUESTIONS !== 'undefined' ? K2_MATHE_QUESTIONS : null);
        _pushIf(typeof K2_DEUTSCH_QUESTIONS !== 'undefined' ? K2_DEUTSCH_QUESTIONS : null);
        _pushIf(typeof K2_SACHUNTERRICHT_QUESTIONS !== 'undefined' ? K2_SACHUNTERRICHT_QUESTIONS : null);
        _pushIf(typeof K2_ENGLISCH_QUESTIONS !== 'undefined' ? K2_ENGLISCH_QUESTIONS : null);
        _pushIf(typeof K3_MATHE_QUESTIONS !== 'undefined' ? K3_MATHE_QUESTIONS : null);
        _pushIf(typeof K3_DEUTSCH_QUESTIONS !== 'undefined' ? K3_DEUTSCH_QUESTIONS : null);
        _pushIf(typeof K3_SACHUNTERRICHT_QUESTIONS !== 'undefined' ? K3_SACHUNTERRICHT_QUESTIONS : null);
        _pushIf(typeof K3_ENGLISCH_QUESTIONS !== 'undefined' ? K3_ENGLISCH_QUESTIONS : null);
        _pushIf(typeof K4_MATHE_QUESTIONS !== 'undefined' ? K4_MATHE_QUESTIONS : null);
        _pushIf(typeof K4_DEUTSCH_QUESTIONS !== 'undefined' ? K4_DEUTSCH_QUESTIONS : null);
        _pushIf(typeof K4_SACHUNTERRICHT_QUESTIONS !== 'undefined' ? K4_SACHUNTERRICHT_QUESTIONS : null);
        _pushIf(typeof K5_ENGLISCH_QUESTIONS !== 'undefined' ? K5_ENGLISCH_QUESTIONS : null);
        _pushIf(typeof K5_DEUTSCH_QUESTIONS !== 'undefined' ? K5_DEUTSCH_QUESTIONS : null);
        _pushIf(typeof K5_MATHE_QUESTIONS !== 'undefined' ? K5_MATHE_QUESTIONS : null);
        _pushIf(typeof K5_POLITIK_QUESTIONS !== 'undefined' ? K5_POLITIK_QUESTIONS : null);
        _pushIf(typeof K5_ERDKUNDE_QUESTIONS !== 'undefined' ? K5_ERDKUNDE_QUESTIONS : null);
        _pushIf(typeof K5_BIOLOGIE_QUESTIONS !== 'undefined' ? K5_BIOLOGIE_QUESTIONS : null);
        _pushIf(typeof KINDER_ANIME_QUESTIONS !== 'undefined' ? KINDER_ANIME_QUESTIONS : null);
        _pushIf(typeof KINDER_MAERCHEN_QUESTIONS !== 'undefined' ? KINDER_MAERCHEN_QUESTIONS : null);
        _pushIf(typeof KINDER_TIERE_NATUR_QUESTIONS !== 'undefined' ? KINDER_TIERE_NATUR_QUESTIONS : null);
        _pushIf(typeof KINDER_WISSEN_QUESTIONS !== 'undefined' ? KINDER_WISSEN_QUESTIONS : null);
        _pushIf(typeof SPASS_ALLGEMEIN_QUESTIONS !== 'undefined' ? SPASS_ALLGEMEIN_QUESTIONS : null);
        _pushIf(typeof SPASS_KLEINE_QUESTIONS !== 'undefined' ? SPASS_KLEINE_QUESTIONS : null);
        _pushIf(typeof SPASS_WUERDEST_DU_QUESTIONS !== 'undefined' ? SPASS_WUERDEST_DU_QUESTIONS : null);
        _pushIf(typeof SPASS_NICE_TO_KNOW_QUESTIONS !== 'undefined' ? SPASS_NICE_TO_KNOW_QUESTIONS : null);
        _pushIf(typeof SPASS_UNGEWOEHNLICHES_QUESTIONS !== 'undefined' ? SPASS_UNGEWOEHNLICHES_QUESTIONS : null);
        _pushIf(typeof SPASS_SPORT_FILM_QUESTIONS !== 'undefined' ? SPASS_SPORT_FILM_QUESTIONS : null);
        _pushIf(typeof SPASS_MUSIK_QUESTIONS !== 'undefined' ? SPASS_MUSIK_QUESTIONS : null);
        _pushIf(typeof SPASS_ESSEN_QUESTIONS !== 'undefined' ? SPASS_ESSEN_QUESTIONS : null);
        _pushIf(typeof SPASS_TIERE_QUESTIONS !== 'undefined' ? SPASS_TIERE_QUESTIONS : null);
        _pushIf(typeof SPASS_LAENDER_QUESTIONS !== 'undefined' ? SPASS_LAENDER_QUESTIONS : null);
        _pushIf(typeof SPASS_ERFINDUNGEN_QUESTIONS !== 'undefined' ? SPASS_ERFINDUNGEN_QUESTIONS : null);
        _pushIf(typeof SPASS_RAETSEL_QUESTIONS !== 'undefined' ? SPASS_RAETSEL_QUESTIONS : null);
        _pushIf(typeof SPASS_HUMOR_QUESTIONS !== 'undefined' ? SPASS_HUMOR_QUESTIONS : null);
        _pushIf(typeof SPASS_BERUF_HUMOR_QUESTIONS !== 'undefined' ? SPASS_BERUF_HUMOR_QUESTIONS : null);
        _pushIf(typeof SPASS_HAUPTSTAEDTE_QUESTIONS !== 'undefined' ? SPASS_HAUPTSTAEDTE_QUESTIONS : null);
        _pushIf(typeof SPASS_HAUPTSTAEDTE_EUROPA_QUESTIONS !== 'undefined' ? SPASS_HAUPTSTAEDTE_EUROPA_QUESTIONS : null);
        _pushIf(typeof SPASS_SCHAETZFRAGEN_QUESTIONS !== 'undefined' ? SPASS_SCHAETZFRAGEN_QUESTIONS : null);


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
        // true = anonym beigetretener Gast ohne Konto. Er hat kein
        // Familienprofil, sieht kein Dashboard und es wird nichts von
        // ihm gespeichert – er existiert nur in der Online-Lobby.
        let isAnonGuest = false;

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
        // Vorbereitung für spätere Bezahlmodelle: reines Datenfeld, keine
        // Sperren/Bezahl-UI. isPremium() ist die einzige Stelle, die später
        // (wenn es Premium-Funktionen gibt) abgefragt werden soll.
        let familyPremium = false;
        function isPremium() { return !!familyPremium; }

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
            // Gäste ohne Konto haben kein Profil in der Datenbank.
            if (!isAnonGuest && currentParentUser) {
                db.collection("parents").doc(currentParentUser.uid).collection("profiles").doc(key).set(p)
                    .catch(e => console.warn("awardXPToProfile:", e));
            }
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
            const badgeCount = document.getElementById("menu-badge-count");
            if (badgeCount) badgeCount.innerText = earned.length;
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
                familyPremium = !!data.premium;
            } catch (e) {
                familyRewards = [];
                testTemplates = [];
                adminPin = null;
                familyPremium = false;
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

        // ============================================================
        //  ANWESENHEIT IM MEHRSPIELER-MODUS
        //  Jedes Gerät schreibt regelmäßig players.<key>.lastSeen.
        //  Wer länger als 40 Sekunden still ist, gilt als "kurz weg" und
        //  blockiert keine Runde mehr. Bewusst großzügig – in der Familie
        //  legt jemand das Handy auch mal beiseite.
        //  Wird von live-duel.js und tv-cast.js gemeinsam genutzt.
        // ============================================================
        const PRESENCE_STALE_MS = 40000;

        function istAnwesend(p) {
            if (!p) return false;
            // Spielstände ohne lastSeen zählen als anwesend, damit laufende
            // Partien nach einem Update nicht schlagartig alle als weg gelten.
            if (!p.lastSeen) return true;
            return (Date.now() - p.lastSeen) < PRESENCE_STALE_MS;
        }

        // Schreibt ein Lebenszeichen für den eigenen Spieler. hostFeld wird
        // zusätzlich gesetzt, wenn dieses Gerät die Runde steuert – beides
        // in einem Schreibvorgang, damit es nicht doppelt kostet.
        function sendeLebenszeichen(ref, spielerKey, hostFeld) {
            if (!ref || !spielerKey) return;
            const update = {};
            update["players." + spielerKey + ".lastSeen"] = Date.now();
            if (hostFeld) update[hostFeld] = Date.now();
            ref.update(update).catch(() => { });
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

        // ============================================================
        //  GLOBALER FEHLER-HANDLER
        //  Fängt Fehler ab, die sonst still in der Konsole verschwinden
        //  (z.B. ReferenceError in einem onclick-Handler) und zeigt dem
        //  Nutzer wenigstens eine Meldung statt einer eingefrorenen App.
        // ============================================================
        // Merkt die letzten Fehler fürs Entwickler-Panel (Einstellungen) - rein
        // im Speicher, nichts davon wird irgendwo gespeichert/verschickt.
        window.__eduplayErrorLog = window.__eduplayErrorLog || [];
        function logDevError(msg) {
            try {
                window.__eduplayErrorLog.unshift({ time: new Date().toLocaleTimeString("de-DE"), msg: String(msg).slice(0, 300) });
                window.__eduplayErrorLog = window.__eduplayErrorLog.slice(0, 20);
            } catch (e) { }
        }
        window.addEventListener('error', function (e) {
            if (!e || (!e.message && !e.error)) return;
            if (e.message === "Script error." && !e.error) return; // Cross-Origin, keine Info
            try { console.error("[EduPlay] Unerwarteter Fehler", e.error || e.message); } catch (_) { }
            logDevError((e.error && e.error.message) || e.message);
            if (typeof showToast === "function") {
                showToast("Hoppla, da ist etwas schiefgelaufen. Bitte kurz neu laden.", "error", "global-error");
            }
        });
        window.addEventListener('unhandledrejection', function (e) {
            try { console.error("[EduPlay] Unbehandelter Promise-Fehler", e.reason); } catch (_) { }
            logDevError(e.reason && e.reason.message ? e.reason.message : e.reason);
            if (typeof showToast === "function") {
                showToast("Hoppla, da ist etwas schiefgelaufen. Bitte kurz neu laden.", "error", "global-error");
            }
        });

        // ============================================================
        //  ENTWICKLER-MODUS (Einstellungen)
        //  Reiner Lese-/Debug-Bereich fürs Testen: DB-Status, aktiver
        //  Spieler, Feature-Flags, letzte Fehler. Verändert nichts am
        //  Spielbetrieb - "Lokale Daten leeren" ausgenommen, klar markiert.
        // ============================================================
        function renderDevPanel() {
            const box = document.getElementById("dev-panel-content");
            if (!box) return;
            const qCount = typeof QUESTIONS_DATABASE !== 'undefined' && Array.isArray(QUESTIONS_DATABASE) ? QUESTIONS_DATABASE.length : null;
            const vLangs = typeof VOCABULARY_DATABASE !== 'undefined' ? Object.keys(VOCABULARY_DATABASE).length : null;
            const wCount = typeof GERMAN_WORDS !== 'undefined' && Array.isArray(GERMAN_WORDS) ? GERMAN_WORDS.length : null;
            const curriculumOk = typeof CURRICULUM !== 'undefined';
            const rows = [
                ["Version", (document.querySelector('#view-einstellungen .text-gray-500') || {}).innerText || "-"],
                ["Familie (uid)", currentParentUser ? currentParentUser.uid.slice(0, 10) + "…" : "nicht eingeloggt"],
                ["Login-E-Mail", currentParentUser ? (currentParentUser.email || "(Google)") : "-"],
                ["Aktiver Spieler", currentPlayer ? `${currentPlayer.name} (${activePlayerKey})` : "keiner"],
                ["Profile geladen", Object.keys(ALL_PROFILES || {}).length],
                ["QUESTIONS_DATABASE", qCount === null ? "❌ nicht geladen" : qCount + " Fragen"],
                ["VOCABULARY_DATABASE", vLangs === null ? "❌ nicht geladen" : vLangs + " Sprachen"],
                ["GERMAN_WORDS", wCount === null ? "❌ nicht geladen" : wCount + " Wörter"],
                ["CURRICULUM", curriculumOk ? "✅ definiert" : "❌ undefiniert (bekannter offener Punkt)"],
                ["Premium (isPremium)", typeof isPremium === "function" ? String(isPremium()) : "-"],
                ["Ton / Musik", (typeof soundOn !== 'undefined' ? soundOn : "-") + " / " + Math.round((typeof musicVolume !== 'undefined' ? musicVolume : 0) * 100) + "%"],
                ["Eltern-PIN gesetzt", typeof adminPin !== 'undefined' && adminPin ? "ja" : "nein"],
                ["Online", navigator.onLine ? "✅" : "❌ offline"],
            ];
            let html = `<table class="w-full text-[11px]"><tbody>` +
                rows.map(([k, v]) => `<tr class="border-b border-white/5"><td class="py-1 pr-2 text-gray-500 font-bold whitespace-nowrap">${k}</td><td class="py-1 text-gray-200 break-all">${esc(String(v))}</td></tr>`).join("") +
                `</tbody></table>`;
            const errs = window.__eduplayErrorLog || [];
            html += `<div class="mt-3 text-[11px]"><div class="text-gray-500 font-bold mb-1">Letzte Fehler (${errs.length})</div>` +
                (errs.length ? errs.map(e => `<div class="text-rose-400 mb-0.5">${esc(e.time)} – ${esc(e.msg)}</div>`).join("") : `<div class="text-gray-600">Keine seit Laden der Seite.</div>`) +
                `</div>`;
            box.innerHTML = html;
        }

        async function devClearLocalData() {
            if (!(await appConfirm("Löscht lokal gespeicherte Einstellungen (Ton/Musik-Lautstärke, gemerkte Lobby) auf diesem Gerät und lädt die App neu. Deine Firestore-Daten (Punkte, Profile) sind davon NICHT betroffen.", {
                titel: "🗑 Lokale Daten leeren?", icon: "🗑", okText: "Leeren & neu laden", gefahr: true
            }))) return;
            try { localStorage.clear(); } catch (e) { }
            location.reload();
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

        // Modernerer Klick: kurzer, gefilterter Noise-Burst statt eines reinen
        // Sinuston-Blips - klingt eher wie ein Tastatur-/App-Klick als ein Piepsen.
        let clickNoiseBuffer = null;
        function getClickNoiseBuffer(ctx) {
            if (clickNoiseBuffer && clickNoiseBuffer._ctx === ctx) return clickNoiseBuffer;
            const len = Math.floor(ctx.sampleRate * 0.03);
            const buf = ctx.createBuffer(1, len, ctx.sampleRate);
            const data = buf.getChannelData(0);
            for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
            buf._ctx = ctx;
            clickNoiseBuffer = buf;
            return buf;
        }
        function playModernClick() {
            const ctx = ensureAudio();
            if (!ctx) return;
            const t = ctx.currentTime;
            const noise = ctx.createBufferSource();
            noise.buffer = getClickNoiseBuffer(ctx);
            const filter = ctx.createBiquadFilter();
            filter.type = "highpass";
            filter.frequency.value = 2200;
            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.12, t);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.045);
            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start(t);
            noise.stop(t + 0.05);
            playTones([
                [1600, 0.03]
            ], "sine", 0.05);
        }

        const SFX = {
            tap: () => playModernClick(),
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

        // ============================================================
        //  HINTERGRUNDMUSIK
        //  Eigenständig vom SFX-Ton-Schalter oben ("Ton an/aus" betrifft nur
        //  Klicks/Erfolgs-Sounds). Musik ist standardmäßig an, Lautstärke
        //  wird über einen Regler in den Einstellungen geregelt - 0% = aus.
        // ============================================================
        let musicCtx = null;
        let musicGain = null;
        let musicVolume = 0.25;
        let musicTimer = null;
        let musicStep = 0;
        // 'menu' = ruhige Dur-Melodie (Menü/Setup/Ergebnis), 'game' = treibende
        // Moll-Arpeggios für aktive Spielrunden, siehe setMusicMode() unten.
        let musicMode = 'menu';
        let gameStep = 0;
        try {
            const savedVol = localStorage.getItem("eduplayMusicVolume");
            if (savedVol !== null) musicVolume = Math.max(0, Math.min(1, parseFloat(savedVol)));
        } catch (e) { }

        // Dur-Pentatonik (klingt für Kinder immer freundlich, nie schräg),
        // Muster geht leicht auf und ab statt stur rauf/runter - etwas
        // verspielter als eine reine Tonleiter.
        const MUSIC_SCALE = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
        const MUSIC_PATTERN = [0, 2, 4, 2, 5, 4, 2, 0, 3, 4, 5, 4, 2, 4, 0, 1];

        // Moll-Arpeggio für aktive Spielrunden - schneller, dunklerer,
        // treibender Sound (Sägezahn + Tiefpass), Basspuls einmal pro Takt.
        // In Anlehnung an Retro-Synth-Arpeggios (Stranger-Things-artig), aber
        // weiterhin rein synthetisiert, kein Audio-Asset.
        const GAME_SCALE = [220.00, 261.63, 329.63, 440.00, 392.00, 329.63, 261.63, 220.00];

        function playMusicNoteGame() {
            const ctx = ensureMusicAudio();
            if (!ctx || musicVolume <= 0) return;
            const t = ctx.currentTime;
            const freq = GAME_SCALE[gameStep % GAME_SCALE.length];
            const osc = ctx.createOscillator();
            const filt = ctx.createBiquadFilter();
            const g = ctx.createGain();
            osc.type = "sawtooth";
            osc.frequency.setValueAtTime(freq, t);
            filt.type = "lowpass";
            filt.frequency.setValueAtTime(1400, t);
            filt.Q.value = 4;
            g.gain.setValueAtTime(0, t);
            g.gain.linearRampToValueAtTime(0.28, t + 0.02);
            g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
            osc.connect(filt);
            filt.connect(g);
            g.connect(musicGain);
            osc.start(t);
            osc.stop(t + 0.18);
            // Basspuls einmal pro Takt (alle 8 Arpeggio-Schritte).
            if (gameStep % 8 === 0) {
                const bosc = ctx.createOscillator();
                const bg = ctx.createGain();
                bosc.type = "square";
                bosc.frequency.setValueAtTime(freq / 4, t);
                bg.gain.setValueAtTime(0, t);
                bg.gain.linearRampToValueAtTime(0.35, t + 0.03);
                bg.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
                bosc.connect(bg);
                bg.connect(musicGain);
                bosc.start(t);
                bosc.stop(t + 1.35);
            }
            gameStep++;
        }

        function ensureMusicAudio() {
            try {
                if (!musicCtx) musicCtx = new (window.AudioContext || window.webkitAudioContext)();
                if (musicCtx.state === "suspended") musicCtx.resume();
                if (!musicGain) {
                    musicGain = musicCtx.createGain();
                    musicGain.gain.value = musicVolume;
                    musicGain.connect(musicCtx.destination);
                }
                return musicCtx;
            } catch (e) { return null; }
        }

        function playMusicNote() {
            const ctx = ensureMusicAudio();
            if (!ctx || musicVolume <= 0) return;
            const idx = MUSIC_PATTERN[musicStep % MUSIC_PATTERN.length];
            const freq = MUSIC_SCALE[idx];
            const t = ctx.currentTime;
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, t);
            g.gain.setValueAtTime(0, t);
            g.gain.linearRampToValueAtTime(0.5, t + 0.25);
            g.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
            osc.connect(g);
            g.connect(musicGain);
            osc.start(t);
            osc.stop(t + 1.35);
            // Alle 4 Schritte ein leiser Unterton (Oktave drunter) für etwas Wärme.
            if (musicStep % 4 === 0) {
                const osc2 = ctx.createOscillator();
                const g2 = ctx.createGain();
                osc2.type = "sine";
                osc2.frequency.setValueAtTime(freq / 2, t);
                g2.gain.setValueAtTime(0, t);
                g2.gain.linearRampToValueAtTime(0.22, t + 0.4);
                g2.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);
                osc2.connect(g2);
                g2.connect(musicGain);
                osc2.start(t);
                osc2.stop(t + 1.85);
            }
            musicStep++;
        }

        function startBackgroundMusic() {
            if (musicTimer || musicVolume <= 0) return;
            if (!ensureMusicAudio()) return;
            const tick = musicMode === 'game' ? playMusicNoteGame : playMusicNote;
            tick();
            musicTimer = setInterval(tick, musicMode === 'game' ? 180 : 900);
        }

        function stopBackgroundMusic() {
            if (musicTimer) { clearInterval(musicTimer); musicTimer = null; }
        }

        // Screens mit aktiver Spielrunde -> treibende Moll-Musik. Menü,
        // Setup- und Ergebnis-Screens bleiben bei der ruhigen Dur-Melodie.
        const GAME_MUSIC_VIEWS = ['quiz', 'duel-play', 'scrabble-play', 'wortraten-play',
            'live-duel-play', 'tv-quiz-player', 'tv-quiz-host'];

        function setMusicMode(viewId) {
            const mode = GAME_MUSIC_VIEWS.includes(viewId) ? 'game' : 'menu';
            if (mode === musicMode) return;
            musicMode = mode;
            if (musicTimer) { stopBackgroundMusic(); startBackgroundMusic(); }
        }

        function setMusicVolume(pct) {
            musicVolume = Math.max(0, Math.min(100, parseInt(pct) || 0)) / 100;
            try { localStorage.setItem("eduplayMusicVolume", musicVolume); } catch (e) { }
            const label = document.getElementById("music-volume-label");
            if (label) label.innerText = Math.round(musicVolume * 100) + "%";
            if (musicGain && musicCtx) musicGain.gain.setTargetAtTime(musicVolume, musicCtx.currentTime, 0.05);
            if (musicVolume > 0) startBackgroundMusic();
            else stopBackgroundMusic();
        }

        // Browser lassen Audio erst nach einer Nutzer-Geste zu - Musik daher
        // beim allerersten Klick/Tastendruck einmalig anstoßen. Läuft danach
        // durch, unabhängig vom SFX-Ton-Schalter.
        let musicStartBound = false;
        function bindMusicAutostart() {
            if (musicStartBound) return;
            musicStartBound = true;
            const starter = () => {
                if (musicVolume > 0) startBackgroundMusic();
            };
            document.addEventListener("pointerdown", starter, { once: true });
            document.addEventListener("keydown", starter, { once: true });
        }
        bindMusicAutostart();

        // ============================================================
        //  VORLESEFUNKTION (Klasse 1/2)
        //  Nutzt die Web Speech API (Browser-eigene Sprachausgabe, kein
        //  Audio-Asset). Button/Auto-Vorlesen tauchen nur auf, wenn die
        //  aktuelle Frage grade 1 oder 2 zugeordnet ist.
        // ============================================================
        function speakText(text) {
            try {
                if (!('speechSynthesis' in window) || !text) return;
                window.speechSynthesis.cancel();
                const u = new SpeechSynthesisUtterance(text);
                u.lang = "de-DE";
                u.rate = 0.9;
                window.speechSynthesis.speak(u);
            } catch (e) { }
        }

        function speakCurrentQuestion() {
            const q = (typeof currentQuestions !== 'undefined' && typeof qIndex !== 'undefined')
                ? currentQuestions[qIndex] : null;
            if (q && q.question) speakText(q.question);
        }

        // Zeigt/versteckt den 🔊-Button je nach Klassenstufe der Frage und
        // liest bei Klasse 1/2 automatisch vor, sobald eine neue Frage
        // angezeigt wird.
        function updateSpeakButtonForQuestion(q) {
            const btn = document.getElementById("question-speak-btn");
            const isEarlyGrade = !!(q && (q.grade === 1 || q.grade === 2));
            if (btn) btn.classList.toggle("hidden", !isEarlyGrade);
            if (isEarlyGrade && q.question) speakText(q.question);
            else if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        }

        function inviteFriends() {
            const codeEl = document.getElementById("live-duel-lobby-code");
            const code = (codeEl && codeEl.innerText || "").trim().toUpperCase();
            const hasCode = code && code.length >= 4 && !code.includes("…");
            const text = hasCode
                ? `Komm ins EduPlay-Spiel! Code: ${code} – unter „Online-Lobby“ eingeben. 🚀`
                : 'Hey! Lern mit mir zusammen auf EduPlay Hub – mach mit! 🚀';
            const shareData = { title: 'EduPlay Hub', text, url: window.location.href };
            if (navigator.share) {
                navigator.share(shareData).catch(() => { });
            } else {
                const payload = hasCode ? text + "\n" + window.location.href : window.location.href;
                navigator.clipboard.writeText(payload).then(() => {
                    showToast(hasCode ? '🔗 Code ' + code + ' kopiert!' : '🔗 Link kopiert!', 'success');
                }).catch(() => { appAlert(payload, { titel: "Zum Kopieren", icon: "🔗" }); });
            }
        }

        function shareLobbyCode() {
            const codeEl = document.getElementById("live-duel-lobby-code");
            const code = (codeEl && codeEl.innerText || "").trim().toUpperCase();
            if (!code || code.length < 4) return showToast("Noch kein Code.", "error");
            const text = "EduPlay Lobby-Code: " + code + "\nOnline-Lobby → Code eingeben.";
            if (navigator.share) navigator.share({ title: "EduPlay Lobby", text }).catch(() => { });
            else if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => showToast("Code " + code + " kopiert!", "success"));
            else appAlert(text, { titel: "Lobby-Code", icon: "🔗" });
        }


        function toggleTheme() {
            const isDark = document.body.classList.toggle('dark-theme');
            // Speichert die Auswahl des Nutzers
            try { localStorage.setItem('eduplayTheme', isDark ? 'dark' : 'light'); } catch (e) { }
            showToast(isDark ? "🌙 Dark-Mode aktiv" : "☀️ Light-Mode aktiv", "success", "theme");
        }
