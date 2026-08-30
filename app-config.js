

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

        const TOPIC_CANON = {
            brueche: "bruchrechnen",
            bruchrechnen: "bruchrechnen"
        };
        const TOPIC_BLOCKED = {
            pubertaet: 1, sexualitaet: 1, fortpflanzung: 1,
            verhuetung: 1, geschlechtsorgane: 1
        };
        const TOPIC_MIN_QUESTIONS = 8;

        function canonTopic(t) {
            if (!t) return "";
            const k = String(t).toLowerCase();
            return TOPIC_CANON[k] || k;
        }

        function parseSchoolCat(key) {
            const m = String(key || "").match(/^k(\d+)_(.+)$/);
            if (!m) return null;
            return { grade: Number(m[1]), subject: m[2] };
        }

        let _lessonPracticeQs = null;
        function collectLessonPracticeQuestions() {
            if (_lessonPracticeQs) return _lessonPracticeQs;
            const out = [];
            const listen = (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) ? LEKTIONEN : [];
            listen.forEach(function (lek) {
                function take(arr) {
                    (arr || []).forEach(function (q) {
                        if (q && q.question && Array.isArray(q.answers) && q.answers.length >= 2) out.push(q);
                    });
                }
                if (Array.isArray(lek.uebung)) take(lek.uebung);
                else if (lek.uebung && typeof lek.uebung === "object") {
                    take(lek.uebung.leicht);
                    take(lek.uebung.mittel);
                    take(lek.uebung.schwer);
                }
                take(lek.test);
            });
            _lessonPracticeQs = out;
            return out;
        }

        function questionsForTopic(catKey, topic) {
            const want = canonTopic(topic);
            if (!want || TOPIC_BLOCKED[want]) return [];
            const parsed = parseSchoolCat(catKey);
            const fromDb = (typeof QUESTIONS_DATABASE !== "undefined" ? QUESTIONS_DATABASE : []).filter(function (q) {
                return q && q.category === catKey && canonTopic(q.topic) === want;
            });
            let fromLek = [];
            if (parsed) {
                fromLek = collectLessonPracticeQuestions().filter(function (q) {
                    return Number(q.grade) === parsed.grade
                        && String(q.subject) === parsed.subject
                        && canonTopic(q.topic) === want;
                });
            }
            const seen = {};
            const out = [];
            fromDb.concat(fromLek).forEach(function (q) {
                const k = q.id || String(q.question);
                if (seen[k]) return;
                seen[k] = 1;
                out.push(q);
            });
            return out;
        }

        function listTopicsForCategory(catKey) {
            const counts = {};
            function bump(t) {
                const c = canonTopic(t);
                if (!c || TOPIC_BLOCKED[c]) return;
                counts[c] = (counts[c] || 0) + 1;
            }
            if (typeof QUESTIONS_DATABASE !== "undefined") {
                QUESTIONS_DATABASE.forEach(function (q) {
                    if (q && q.category === catKey && q.topic) bump(q.topic);
                });
            }
            const parsed = parseSchoolCat(catKey);
            if (parsed) {
                collectLessonPracticeQuestions().forEach(function (q) {
                    if (Number(q.grade) === parsed.grade && String(q.subject) === parsed.subject && q.topic) {
                        bump(q.topic);
                    }
                });
            }
            return Object.keys(counts)
                .filter(function (t) { return counts[t] >= TOPIC_MIN_QUESTIONS; })
                .sort()
                .map(function (t) { return { topic: t, count: counts[t] }; });
        }

        function questionsForKey(key) {
            if (!key) return [];

            // Aliase: zusammengeführte Fun-Kategorien
            if (key === "spass_nice_to_know") key = "schaetzen_nice_to_know";
            if (key === "spass_welt") key = "schaetzen_ungewoehnlich_welt";

            // Unterthema: Quiz-Pool + Lektionsfragen, ohne den Fach-Pool zu vermischen
            if (String(key).startsWith("topic:")) {
                const parts = key.split(":");
                if (parts.length >= 3) {
                    return questionsForTopic(parts[1], parts.slice(2).join(":"));
                }
            }

            if (typeof QUESTIONS_DATABASE === "undefined") return [];

            // Quer-Fach über alle Klassen (z.B. "subject:mathe")
            if (String(key).startsWith("subject:")) {
                const sub = String(key).slice("subject:".length);
                return QUESTIONS_DATABASE.filter(q => q.subject === sub && q.area === "schule");
            }

            // Standard-Kategorie (+ Aliase)
            return QUESTIONS_DATABASE.filter(q => {
                if (!q) return false;
                if (q.category === key) return true;
                if (key === "schaetzen_nice_to_know" && q.category === "spass_nice_to_know") return true;
                if (key === "schaetzen_ungewoehnlich_welt" && q.category === "spass_welt") return true;
                return false;
            });
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
                    // Klasse 11–13 ausgeblendet: dort liegen nur rund 10 Fragen
                    // je Fach. Zum Wiedereinschalten die Filterzeile entfernen.
                    CURRICULUM.filter(g => g.grade <= 10).forEach(g => areas.push({
                        value: "grade_" + g.grade,
                        label: g.label,
                        stufe: g.stufe,
                        subjects: g.subjects
                    }));
                }
                // Berufsschule ausgeblendet: die Fragendateien liegen in
                // _ausgliedern/beruf/, der Bereich wäre komplett leer.
                // Für Klasse 1–4 ausgeblendet: der Quer-Modus mischt Fragen bis
                // Klasse 10, dort können Themen auftauchen, die für jüngere
                // Kinder nicht passen (z.B. Pubertät/Fortpflanzung in Bio).
                const eigeneKlasse = playerGrade(currentPlayer);
                const quer = subjectsAcrossGrades();
                if (quer.length && !(eigeneKlasse && eigeneKlasse <= 4)) {
                    areas.push({
                        value: "quer",
                        label: "Fach · alle Klassen (1–10)",
                        stufe: "📚 Quer durch die Klassen",
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
const geladen = _questionCounts[key] || 0;
            // Seit dem Laden bei Bedarf steht in QUESTIONS_DATABASE nur das,
            // was schon geholt wurde. Wie viele es insgesamt gibt, weiß das
            // Verzeichnis (fragen/manifest.js) – sonst zeigt das Menü überall 0.
            const laut = (typeof fragenAnzahlLaut === 'function') ? fragenAnzahlLaut(key) : 0;
            return Math.max(geladen, laut);
        }

        // Nach dem Nachladen neu zählen – der Zwischenspeicher oben wird
        // sonst nie aktualisiert und die Zahlen bleiben zu niedrig.
        document.addEventListener('fragen-nachgeladen', function () { _questionCounts = null; });

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

            "bruchrechnen": "🍕 Brüche",
            "brueche": "🍕 Brüche",
            "teilbarkeit": "➗ Teilbarkeit",
            "groessen": "📏 Größen umrechnen",
            "dezimalzahlen": "🔟 Dezimalzahlen",
            "geometrie": "📐 Geometrie",
            "winkel": "📐 Winkel",
            "flaechen_umfang": "📏 Fläche & Umfang",
            "wortarten": "🏷️ Wortarten",
            "rechtschreibung": "✏️ Rechtschreibung",
            "satzglieder": "🧩 Satzglieder",
            "satzzeichen": "✍️ Satzzeichen",
            "simple_present": "🕐 Simple Present",
            "simple_past": "⏳ Simple Past",
            "school_vocab": "🏫 Schulwortschatz",
            "family_vocab": "👨‍👩‍👧 Familie",
            "w_fragen": "❓ W-Fragen",
            "negative_zahlen": "➖ Negative Zahlen",
            "prozentrechnung": "📊 Prozentrechnung",
            "zinsrechnung": "💰 Zinsrechnung",
            "nebensaetze": "🔗 Nebensätze",
            "das_dass": "📝 das oder dass",
            "zeitformen": "⏱️ Zeitformen",
            "present_perfect": "✅ Present Perfect",
            "present_progressive": "▶️ Present Progressive",
            "comparison": "📊 Steigerung (Adjektive)",
            "there_is": "📍 there is / there are",
            "volumen": "📦 Volumen",
            "prozentrechnung": "📊 Prozentrechnung",
            "zinsrechnung": "💰 Zinsrechnung",
            "terme_gleichungen": "𝑥 Terme & Gleichungen",
            "zuordnungen": "📈 Zuordnungen",
            "winkelsaetze": "📐 Winkelsätze",
            "aktiv_passiv": "🔄 Aktiv & Passiv",
            "nebensatzarten": "🔗 Nebensatzarten",
            "prepositions": "📍 Prepositions",
            "future": "⏭️ will / going to",
            "perfect_past": "🕰️ Perfect oder Past",
            "lineare_funktionen": "📈 Lineare Funktionen",
            "binomische_formeln": "(a±b)² Binome",
            "gleichungssysteme": "𝑥𝑥 Gleichungssysteme",
            "wahrscheinlichkeit": "🎲 Wahrscheinlichkeit",
            "pythagoras": "📐 Pythagoras",
            "kreis": "⭕ Kreis",
            "konjunktiv": "🎭 Konjunktiv",
            "sprachmittel": "✨ Sprachliche Mittel",
            "argumentieren": "💬 Argumentieren",
            "conditionals": "🔀 Conditionals",
            "passive": "🔄 Passive",
            "reported_speech": "💬 Reported Speech",
            "quadratische_funktionen": "📈 Quadratische Funktionen",
            "quadratische_gleichungen": "𝑥² Gleichungen",
            "trigonometrie": "📐 Trigonometrie",
            "wurzeln": "√ Wurzeln",
            "potenzen": "𝑥ⁿ Potenzen",
            "relativsaetze": "🔗 Relativsätze",
            "eroerterung": "✍️ Erörterung",
            "kurzgeschichte": "📖 Kurzgeschichte",
            "relative_clauses": "🔗 Relative Clauses",
            "conditional_3": "🔀 Conditional III",
            "wish": "🌟 wish / if only",
            "exponential": "📈 Exponentialfunktionen",
            "statistik": "📊 Statistik",
            "sinus_kosinussatz": "📐 Sinus- & Kosinussatz",
            "kugel": "⚪ Kugel",
            "lyrik": "✒️ Lyrik",
            "charakterisierung": "👤 Charakterisierung",
            "sachtexte": "📰 Sachtexte",
            "comment": "💬 Comment",
            "phrasal_verbs": "🔗 Phrasal Verbs",
            "modals_deduction": "🔍 Modals of Deduction",
            "present_perfect_prog": "⏳ Present Perfect Progressive",
            "zelle": "🔬 Zelle",
            "fotosynthese": "🌿 Fotosynthese",
            "oekosystem": "🌳 Ökosystem",
            "atombau": "⚛️ Atombau",
            "mechanik": "⚙️ Mechanik",
            "elektrizitaet": "💡 Elektrizität",
            "klima": "🌦️ Klima",
            "industrialisierung": "🏭 Industrialisierung",
            "energie": "⚡ Energie",
            "reaktion": "🧪 Chemische Reaktion",
            "globalisierung": "🌍 Globalisierung",
            "weimar": "📜 Weimarer Republik",
            "demokratie": "🗳️ Demokratie",
            "zeitformen": "⏱️ Zeitformen",
            "present_perfect": "✅ Present Perfect",
            "present_progressive": "▶️ Present Progressive",
            "past_progressive": "⏪ Past Progressive",
            "comparison": "📊 Steigerung",
            "there_is": "📍 there is / there are",
            "adverbs": "✨ Adverbs",
            "pronouns": "👤 Pronouns",
            "word_order": "🔤 Word Order",
            "volumen": "📦 Volumen",
            "adjektive": "✨ Adjektive"

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

                const topics = (typeof listTopicsForCategory === "function")
                    ? listTopicsForCategory(s.key)
                    : [];
                topics.forEach(function (row) {
                    const label = TOPIC_LABELS[row.topic] || (row.topic.charAt(0).toUpperCase() + row.topic.slice(1).replace(/_/g, " "));
                    html += `<option value="topic:${s.key}:${row.topic}">&nbsp;&nbsp;&nbsp;&nbsp;└ ${label} (${row.count})</option>`;
                });
            });

            sSel.innerHTML = html;
            if (areaId === "live-duel-area" && typeof fillLiveDuelCategoryChecks === "function") {
                fillLiveDuelCategoryChecks();
            }
            const mixPrefixes = { "coded-lobby-area": "coded-lobby", "tv-area": "tv", "duel-area": "duel", "quiz-area": "quiz" };
            if (mixPrefixes[areaId] && typeof fillCategoryChecksFor === "function") {
                fillCategoryChecksFor(mixPrefixes[areaId]);
            }
        }

        function fillLiveDuelCategoryChecks() {
            const box = document.getElementById("live-duel-category-checks");
            const aSel = document.getElementById("live-duel-area");
            if (!box || !aSel) return;
            const mode = aSel.dataset.mode || "spass";
            const area = getAreas(mode).find(a => a.value === aSel.value);
            const subs = area ? area.subjects : [];
            let html = "";
            subs.forEach(s => {
                const totalCount = questionCount(s.key);
                html += `<label class="flex items-center gap-2 text-sm text-white font-bold cursor-pointer py-1">
                    <input type="checkbox" class="live-duel-cat-check w-4 h-4 accent-indigo-500" value="${s.key}">
                    <span>${s.label} <span class="text-gray-500 font-normal">(${totalCount})</span></span>
                </label>`;
                const topics = (typeof listTopicsForCategory === "function") ? listTopicsForCategory(s.key) : [];
                topics.forEach(function (row) {
                    const label = (typeof TOPIC_LABELS !== "undefined" && TOPIC_LABELS[row.topic])
                        ? TOPIC_LABELS[row.topic]
                        : row.topic;
                    html += `<label class="flex items-center gap-2 text-xs text-gray-300 cursor-pointer py-0.5 pl-6">
                        <input type="checkbox" class="live-duel-cat-check w-3.5 h-3.5 accent-indigo-400" value="topic:${s.key}:${row.topic}">
                        <span>└ ${label} <span class="text-gray-500">(${row.count})</span></span>
                    </label>`;
                });
            });
            if (html) {
                html += `<button type="button" onclick="document.getElementById('live-duel-category-checks').classList.add('hidden')"
                    class="btn-secondary text-xs w-full py-1.5 mt-1">✓ Fertig</button>`;
            }
            box.innerHTML = html || '<p class="text-xs text-gray-500">Keine Themen in diesem Bereich.</p>';
        }

        function toggleLiveDuelCategoryMix() {
            const on = !!(document.getElementById("live-duel-mix-categories") || {}).checked;
            const checks = document.getElementById("live-duel-category-checks");
            const single = document.getElementById("live-duel-category");
            if (checks) checks.classList.toggle("hidden", !on);
            if (single) single.classList.toggle("hidden", on);
            if (on) fillLiveDuelCategoryChecks();
        }

        function collectLiveDuelCategoryKeys() {
            const mix = !!(document.getElementById("live-duel-mix-categories") || {}).checked;
            if (mix) {
                return Array.from(document.querySelectorAll(".live-duel-cat-check:checked")).map(cb => cb.value);
            }
            const single = document.getElementById("live-duel-category");
            return single && single.value ? [single.value] : [];
        }

        // Generische Variante von fillLiveDuelCategoryChecks/toggleLiveDuelCategoryMix/
        // collectLiveDuelCategoryKeys für weitere Stellen (TV-Quiz, Mit-Freunden-Lobby,
        // Offline-Duell). Element-IDs pro Stelle unten in CATEGORY_MIX_IDS, weil sie
        // historisch nicht alle demselben Namensschema folgen (z.B. "tv-quiz-category"
        // statt "tv-category").
        const CATEGORY_MIX_IDS = {
            "coded-lobby": { area: "coded-lobby-area", category: "coded-lobby-category", mix: "coded-lobby-mix-categories", checks: "coded-lobby-category-checks", cls: "coded-lobby-cat-check" },
            "tv": { area: "tv-area", category: "tv-quiz-category", mix: "tv-mix-categories", checks: "tv-category-checks", cls: "tv-cat-check" },
            "duel": { area: "duel-area", category: "duel-category", mix: "duel-mix-categories", checks: "duel-category-checks", cls: "duel-cat-check" },
            "quiz": { area: "quiz-area", category: "sub-category", mix: "quiz-mix-categories", checks: "quiz-category-checks", cls: "quiz-cat-check" }
        };

        function fillCategoryChecksFor(key) {
            const ids = CATEGORY_MIX_IDS[key];
            if (!ids) return;
            const box = document.getElementById(ids.checks);
            const aSel = document.getElementById(ids.area);
            if (!box || !aSel) return;
            const mode = aSel.dataset.mode || "spass";
            const area = getAreas(mode).find(a => a.value === aSel.value);
            const subs = area ? area.subjects : [];
            let html = "";
            subs.forEach(s => {
                const totalCount = questionCount(s.key);
                html += `<label class="flex items-center gap-2 text-sm text-white font-bold cursor-pointer py-1">
                    <input type="checkbox" class="${ids.cls} w-4 h-4 accent-indigo-500" value="${s.key}">
                    <span>${s.label} <span class="text-gray-500 font-normal">(${totalCount})</span></span>
                </label>`;
                const topics = (typeof listTopicsForCategory === "function") ? listTopicsForCategory(s.key) : [];
                topics.forEach(function (row) {
                    const label = (typeof TOPIC_LABELS !== "undefined" && TOPIC_LABELS[row.topic])
                        ? TOPIC_LABELS[row.topic]
                        : row.topic;
                    html += `<label class="flex items-center gap-2 text-xs text-gray-300 cursor-pointer py-0.5 pl-6">
                        <input type="checkbox" class="${ids.cls} w-3.5 h-3.5 accent-indigo-400" value="topic:${s.key}:${row.topic}">
                        <span>└ ${label} <span class="text-gray-500">(${row.count})</span></span>
                    </label>`;
                });
            });
            if (html) {
                html += `<button type="button" onclick="document.getElementById('${ids.checks}').classList.add('hidden')"
                    class="btn-secondary text-xs w-full py-1.5 mt-1">✓ Fertig</button>`;
            }
            box.innerHTML = html || '<p class="text-xs text-gray-500">Keine Themen in diesem Bereich.</p>';
        }

        function toggleCategoryMixFor(key) {
            const ids = CATEGORY_MIX_IDS[key];
            if (!ids) return;
            const on = !!(document.getElementById(ids.mix) || {}).checked;
            const checks = document.getElementById(ids.checks);
            const single = document.getElementById(ids.category);
            if (checks) checks.classList.toggle("hidden", !on);
            if (single) single.classList.toggle("hidden", on);
            if (on) fillCategoryChecksFor(key);
        }

        function collectCategoryKeysFor(key) {
            const ids = CATEGORY_MIX_IDS[key];
            if (!ids) return [];
            const mix = !!(document.getElementById(ids.mix) || {}).checked;
            if (mix) {
                return Array.from(document.querySelectorAll("." + ids.cls + ":checked")).map(cb => cb.value);
            }
            const single = document.getElementById(ids.category);
            return single && single.value ? [single.value] : [];
        }

        const RECENT_Q_KEY = "eduplayRecentQIds";
        const RECENT_Q_MAX = 400;
        let _recentQCloudTimer = null;

        function recentQStorageKey() {
            try {
                const uid = (typeof currentParentUser !== "undefined" && currentParentUser && currentParentUser.uid) || "";
                return uid ? (RECENT_Q_KEY + "_" + uid) : RECENT_Q_KEY;
            } catch (e) { return RECENT_Q_KEY; }
        }
        function loadRecentQuestionIds() {
            try {
                const a = JSON.parse(localStorage.getItem(recentQStorageKey()) || "[]");
                return Array.isArray(a) ? a : [];
            } catch (e) { return []; }
        }
        function rememberQuestionIds(qs) {
            try {
                let recent = loadRecentQuestionIds();
                (qs || []).forEach(q => {
                    const id = q && (q.id || q.question);
                    if (!id) return;
                    recent = recent.filter(x => x !== id);
                    recent.push(id);
                });
                if (recent.length > RECENT_Q_MAX) recent = recent.slice(-RECENT_Q_MAX);
                localStorage.setItem(recentQStorageKey(), JSON.stringify(recent));
                scheduleRecentQCloudSave(recent);
            } catch (e) { /* */ }
        }
        function scheduleRecentQCloudSave(recent) {
            try {
                if (typeof currentParentUser === "undefined" || !currentParentUser || !currentParentUser.uid || typeof db === "undefined") return;
                clearTimeout(_recentQCloudTimer);
                const copy = (recent || []).slice(-RECENT_Q_MAX);
                _recentQCloudTimer = setTimeout(function () {
                    db.collection("parents").doc(currentParentUser.uid)
                        .set({ recentQIds: copy, recentQAt: Date.now() }, { merge: true })
                        .catch(function () { });
                }, 800);
            } catch (e) { /* */ }
        }
        function mergeFamilyRecentQuestionIds(cloudList) {
            if (!Array.isArray(cloudList) || !cloudList.length) return;
            try {
                let recent = loadRecentQuestionIds();
                cloudList.forEach(function (id) {
                    if (!id) return;
                    recent = recent.filter(x => x !== id);
                    recent.push(id);
                });
                if (recent.length > RECENT_Q_MAX) recent = recent.slice(-RECENT_Q_MAX);
                localStorage.setItem(recentQStorageKey(), JSON.stringify(recent));
            } catch (e) { /* */ }
        }
        function shuffleArray(arr) {
            const a = (arr || []).slice();
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }
        function pickFreshQuestions(list, want) {
            const n = want || 10;
            const picked = pickPreferFresh(list || [], n);
            rememberQuestionIds(picked);
            return (typeof prepareQuestions === "function") ? prepareQuestions(picked) : picked;
        }
        function pickPreferFresh(pool, want) {
            const recent = new Set(loadRecentQuestionIds());
            const fresh = [];
            const old = [];
            (pool || []).forEach(q => {
                const id = q && (q.id || q.question);
                if (id && recent.has(id)) old.push(q);
                else fresh.push(q);
            });
            let picked = shuffleArray(fresh);
            if (picked.length < want) picked = picked.concat(shuffleArray(old));
            return picked.slice(0, want);
        }

        function qIdentity(q) {
            if (!q) return "";
            if (q.id) return String(q.id);
            return String(q.question || "").trim().toLowerCase().replace(/\s+/g, " ");
        }
        function qTextKey(q) {
            return String(q && q.question || "").trim().toLowerCase().replace(/\s+/g, " ");
        }
        function buildMixedQuestions(keys, qCount) {
            const want = qCount || 10;
            const uniqueKeys = [];
            (keys || []).forEach(k => {
                if (k && uniqueKeys.indexOf(k) < 0) uniqueKeys.push(k);
            });
            if (!uniqueKeys.length) return [];
            const seen = new Set();
            const picked = [];
            // Pro Thema den ganzen (frisch-zuerst) Pool, nicht nur `want` Stück –
            // sonst kommen bei Mix immer dieselben ersten 10 je Kategorie.
            const buckets = uniqueKeys.map(function (k) {
                const pool = questionsForKey(k) || [];
                return pickPreferFresh(pool, pool.length);
            });
            let guard = 0;
            while (picked.length < want && guard < 8000) {
                guard++;
                let added = false;
                for (let i = 0; i < buckets.length && picked.length < want; i++) {
                    const bucket = buckets[i];
                    while (bucket.length) {
                        const q = bucket.shift();
                        const id = qIdentity(q);
                        const text = qTextKey(q);
                        if (!id || seen.has(id) || (text && seen.has("t:" + text))) continue;
                        seen.add(id);
                        if (text) seen.add("t:" + text);
                        picked.push(q);
                        added = true;
                        break;
                    }
                }
                if (!added) break;
            }
            // Nur merken, wenn das wirklich eine Runde ist – nicht den ganzen
            // 200-Fragen-Mix auf einmal (sonst ist nach einem Start alles „alt“).
            if (want <= 40) rememberQuestionIds(picked);
            return prepareQuestions(shuffleArray(picked));
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

        /** Wählt zufällig Bereich + Thema in den angegebenen Selects. */
        function pickRandomCategory(areaId, subjectId) {
            const aSel = document.getElementById(areaId);
            const sSel = document.getElementById(subjectId);
            if (!aSel || !sSel) return;
            const mode = aSel.dataset.mode || "alle";
            const areas = (typeof getAreas === "function") ? getAreas(mode) : [];
            if (!areas.length) return;
            const area = areas[Math.floor(Math.random() * areas.length)];
            aSel.value = area.value;
            if (typeof fillSubjectSelect === "function") fillSubjectSelect(areaId, subjectId);
            const opts = Array.from(sSel.options || []).filter(o => o.value);
            if (opts.length) {
                const pick = opts[Math.floor(Math.random() * opts.length)];
                sSel.value = pick.value;
            }
            if (typeof showToast === "function") {
                const label = (sSel.selectedOptions[0] && sSel.selectedOptions[0].text) || sSel.value || "Thema";
                showToast("🎲 " + label, "success", "randomcat");
            }
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

        function isoDayOffset(daysBack) {
            return new Date(Date.now() - daysBack * 86400000).toISOString().slice(0, 10);
        }
        function streakWeekKey() {
            const d = new Date();
            const day = (d.getDay() + 6) % 7;
            const mon = new Date(d);
            mon.setDate(d.getDate() - day);
            return mon.toISOString().slice(0, 10);
        }
        /** Streak: 1 Schonfrist/Woche bei 1 Tag Pause */
        function applyStreakDay(p) {
            if (!p) return;
            const today = new Date().toISOString().slice(0, 10);
            if (!p.streak) p.streak = { count: 0, lastDate: null, freezesUsed: 0, freezeWeek: null };
            if (p.streak.lastDate === today) return;
            const yesterday = isoDayOffset(1);
            const dayBefore = isoDayOffset(2);
            const week = streakWeekKey();
            if (p.streak.freezeWeek !== week) {
                p.streak.freezeWeek = week;
                p.streak.freezesUsed = 0;
            }
            if (p.streak.lastDate === yesterday) {
                p.streak.count = (p.streak.count || 0) + 1;
            } else if (p.streak.lastDate === dayBefore && (p.streak.freezesUsed || 0) < 1) {
                // 1 Tag Pause verziehen – Zähler bleibt
                p.streak.freezesUsed = (p.streak.freezesUsed || 0) + 1;
            } else {
                p.streak.count = 1;
            }
            p.streak.lastDate = today;
        }
        function registerStreak() {
            if (!currentPlayer) return;
            applyStreakDay(currentPlayer);
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
                applyStreakDay(p);
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
            const stEl = document.getElementById("menu-streak");
            if (stEl) {
                const used = currentPlayer.streak && currentPlayer.streak.freezesUsed;
                stEl.innerText = streakCount > 0
                    ? (`🔥 ${streakCount} Tag${streakCount === 1 ? '' : 'e'}` + (used ? ' · Schonfrist' : ''))
                    : '🔥 0 Tage';
            }
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
            if (window.DEVICE_SESSION_ID) {
                update["players." + spielerKey + ".sessionId"] = window.DEVICE_SESSION_ID;
            }
            if (hostFeld) update[hostFeld] = Date.now();
            ref.update(update).catch(() => { });
        }

        function isOffline() {
            return (typeof navigator !== "undefined" && navigator.onLine === false);
        }

        function hinweisFragenPoolDuennt(gefunden, erwartet) {
            erwartet = erwartet || 10;
            if (typeof isOffline === "function" && isOffline()) {
                if (typeof showToast === "function") showToast("Offline – Fragenliste vielleicht unvollständig.", "error", "qpool");
                return;
            }
            if ((gefunden || 0) < Math.min(3, erwartet)) {
                if (typeof showToast === "function") showToast("Fragen konnten nicht vollständig geladen werden. Anderes Thema wählen oder Netz prüfen.", "error", "qpool");
            }
        }

        const WHATS_NEW_ID = "2026-08-27d";
        function maybeShowWhatsNew() {
            try {
                if (localStorage.getItem("eduplayWhatsNew") === WHATS_NEW_ID) return;
                localStorage.setItem("eduplayWhatsNew", WHATS_NEW_ID);
                const text = "Was ist neu: gemischte Fragen ohne Wiederholung, Wort-Duell mehr Zeit, Auflösung wer was gewählt hat, Unentschieden-Anzeige.";
                if (typeof appConfirm === "function") {
                    appConfirm(text, { titel: "Was ist neu", icon: "✨", okText: "Los geht’s", abbrechenText: "Später" });
                } else if (typeof showToast === "function") {
                    showToast(text, "info", "whatsnew");
                }
            } catch (e) { /* */ }
        }

        function merkeThemaStreak(keys) {
            try {
                const sig = (keys || []).slice().sort().join("|");
                if (!sig) return;
                const raw = JSON.parse(localStorage.getItem("eduplayTopicStreak") || "[]");
                const arr = Array.isArray(raw) ? raw : [];
                arr.push(sig);
                const last = arr.slice(-3);
                localStorage.setItem("eduplayTopicStreak", JSON.stringify(last));
                if (last.length === 3 && last.every(x => x === sig) && typeof showToast === "function") {
                    showToast("Schon 3× dasselbe Thema – nächstes Mal etwas anderes?", "info", "topic3");
                }
            } catch (e) { /* */ }
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
                ["Build", window.EDUPLAY_BUILD || "-"],
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
            const code = String((err && err.code) || "").toLowerCase();
            if (isNetworkError(err)) {
                msg = "📴 Keine Verbindung – prüfe WLAN/Mobilfunk und versuch es nochmal.";
            } else if (code.includes("permission-denied") || code.includes("permission_denied")) {
                msg = "🔒 Keine Berechtigung – bitte neu anmelden oder Lobby neu erstellen.";
            } else if (code.includes("unauthenticated") || code.includes("auth/")) {
                msg = "🔑 Sitzung abgelaufen – bitte erneut anmelden.";
            } else if (code.includes("not-found") || code.includes("not_found")) {
                msg = "🔍 Nicht gefunden – die Lobby existiert nicht mehr.";
            } else if (code.includes("already-exists") || code.includes("already_exists")) {
                msg = "⚠️ Eintrag existiert schon – bitte Code neu versuchen.";
            } else if (code.includes("resource-exhausted") || code.includes("quota")) {
                msg = "⏳ Zu viele Anfragen – kurz warten und erneut versuchen.";
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
        //  BROWSER-BENACHRICHTIGUNGEN (offene Duelle / TV)
        //  Läuft, solange die App (oder ein Hintergrund-Tab) aktiv ist.
        //  Echtes Push bei komplett geschlossener App braucht später FCM.
        // ============================================================
        let pushNotifOn = true;
        try { pushNotifOn = localStorage.getItem("eduplayPush") !== "off"; } catch (e) { }
        const _notifSeen = new Set();

        function notificationsSupported() {
            return typeof Notification !== "undefined";
        }

        function notificationsEnabled() {
            return pushNotifOn && notificationsSupported() && Notification.permission === "granted";
        }

        async function enablePushNotifications() {
            if (!notificationsSupported()) {
                showToast("Dein Browser unterstützt keine Benachrichtigungen.", "error");
                return false;
            }
            try {
                const perm = await Notification.requestPermission();
                pushNotifOn = (perm === "granted");
                try { localStorage.setItem("eduplayPush", pushNotifOn ? "on" : "off"); } catch (e) { }
                updatePushToggleUI();
                if (pushNotifOn) showToast("🔔 Benachrichtigungen an", "success", "push");
                else showToast("Benachrichtigungen abgelehnt.", "error", "push");
                return pushNotifOn;
            } catch (e) {
                showToast("Berechtigung fehlgeschlagen.", "error");
                return false;
            }
        }

        function togglePushNotifications() {
            if (!pushNotifOn) {
                enablePushNotifications();
                return;
            }
            pushNotifOn = false;
            try { localStorage.setItem("eduplayPush", "off"); } catch (e) { }
            updatePushToggleUI();
            showToast("🔔 Benachrichtigungen aus", "success", "push");
        }

        function updatePushToggleUI() {
            const el = document.getElementById("push-toggle-label");
            if (!el) return;
            if (!notificationsSupported()) { el.textContent = "nicht verfügbar"; return; }
            if (Notification.permission === "denied") { el.textContent = "blockiert"; return; }
            el.textContent = (pushNotifOn && Notification.permission === "granted") ? "an" : "aus";
        }

        function showDuelNotification(title, body, tag, urlHash) {
            if (!notificationsEnabled()) return;
            if (tag && _notifSeen.has(tag)) return;
            if (tag) {
                _notifSeen.add(tag);
                if (_notifSeen.size > 40) {
                    const first = _notifSeen.values().next().value;
                    _notifSeen.delete(first);
                }
            }
            // Im Vordergrund reicht oft der Menü-Banner – trotzdem kurz informieren,
            // wenn Tab im Hintergrund.
            if (!document.hidden && document.visibilityState === "visible") return;
            const opts = {
                body: body || "",
                icon: "icons/icon-192.png",
                badge: "icons/icon-192.png",
                tag: tag || "eduplay-duel",
                renotify: true,
                data: { url: urlHash || "#spielen" }
            };
            try {
                if (navigator.serviceWorker && navigator.serviceWorker.ready) {
                    navigator.serviceWorker.ready.then(function (reg) {
                        reg.showNotification(title, opts);
                    }).catch(function () {
                        new Notification(title, opts);
                    });
                } else {
                    new Notification(title, opts);
                }
            } catch (e) { /* */ }
        }

        // ============================================================
        //  SOUND – Datei-SFX (Kenney CC0) + Web-Audio-Fallback
        //  audio/ui/*.ogg · audio/book/*.ogg · optional audio/bgm/*.mp3
        // ============================================================
        let audioCtx = null;
        let soundOn = true;
        try { soundOn = localStorage.getItem("eduplaySound") !== "off"; } catch (e) { }

        const SFX_FILE_MAP = {
            bookOpen: ["audio/book/book_open.ogg", "audio/book/book_open.wav"],
            pageFlip: ["audio/book/page_flip.ogg", "audio/book/page_flip.wav"],
            tap: ["audio/ui/click.ogg"],
            correct: ["audio/ui/correct.ogg"],
            wrong: ["audio/ui/wrong.ogg"],
            switch: ["audio/ui/switch.ogg"],
            open: ["audio/ui/open.ogg"]
        };
        const sfxPool = {};
        const sfxReady = {};

        function preloadSfxFiles() {
            Object.keys(SFX_FILE_MAP).forEach(function (key) {
                const paths = SFX_FILE_MAP[key];
                let i = 0;
                function tryPath() {
                    if (i >= paths.length) return;
                    const a = new Audio(paths[i]);
                    a.preload = "auto";
                    a.addEventListener("canplaythrough", function () {
                        sfxPool[key] = a;
                        sfxReady[key] = true;
                    }, { once: true });
                    a.addEventListener("error", function () {
                        i++;
                        tryPath();
                    }, { once: true });
                    try { a.load(); } catch (e) { i++; tryPath(); }
                }
                tryPath();
            });
        }
        try { preloadSfxFiles(); } catch (e) { /* */ }

        function playSfxFile(key, vol) {
            if (!soundOn) return false;
            const base = sfxPool[key];
            if (!base || !sfxReady[key]) return false;
            try {
                const a = base.cloneNode();
                a.volume = Math.max(0, Math.min(1, vol == null ? 0.55 : vol));
                const p = a.play();
                if (p && p.catch) p.catch(function () { /* Autoplay-Block */ });
                return true;
            } catch (e) { return false; }
        }

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
            if (playSfxFile("tap", 0.5)) return;
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
            playTones([[1600, 0.03]], "sine", 0.05);
        }

        let soundPack = "soft";
        try {
            const sp = localStorage.getItem("eduplaySoundPack");
            if (sp === "soft" || sp === "crisp" || sp === "arcade") soundPack = sp;
        } catch (e) { /* */ }

        const SFX_PACKS = {
            soft: {
                correct: () => playTones([[523, 0.08], [659, 0.12], [784, 0.14]], "sine", 0.11),
                wrong: () => playTones([[247, 0.12], [196, 0.18]], "triangle", 0.08),
                win: () => playTones([[523, 0.1], [659, 0.1], [784, 0.1], [988, 0.22]], "sine", 0.12),
                levelUp: () => playTones([[392, 0.08], [523, 0.08], [659, 0.16]], "sine", 0.11),
                coin: () => playTones([[784, 0.05], [1047, 0.1]], "sine", 0.07),
                tick: () => playTones([[660, 0.035]], "sine", 0.04),
                timeUp: () => playTones([[330, 0.14], [262, 0.14], [196, 0.22]], "triangle", 0.09)
            },
            crisp: {
                correct: () => playTones([[660, 0.09], [880, 0.14]], "sine", 0.14),
                wrong: () => playTones([[220, 0.14], [165, 0.20]], "sawtooth", 0.10),
                win: () => playTones([[523, 0.11], [659, 0.11], [784, 0.11], [1047, 0.26]], "sine", 0.14),
                levelUp: () => playTones([[587, 0.09], [740, 0.09], [988, 0.20]], "triangle", 0.13),
                coin: () => playTones([[988, 0.06], [1319, 0.11]], "square", 0.07),
                tick: () => playTones([[880, 0.04]], "square", 0.05),
                timeUp: () => playTones([[392, 0.15], [330, 0.15], [262, 0.28]], "sawtooth", 0.11)
            },
            arcade: {
                correct: () => playTones([[523, 0.05], [784, 0.08], [1047, 0.12]], "square", 0.09),
                wrong: () => playTones([[150, 0.18], [120, 0.22]], "sawtooth", 0.09),
                win: () => playTones([[523, 0.08], [659, 0.08], [784, 0.08], [1047, 0.08], [1319, 0.2]], "square", 0.1),
                levelUp: () => playTones([[440, 0.06], [554, 0.06], [659, 0.06], [880, 0.14]], "square", 0.1),
                coin: () => playTones([[988, 0.04], [1319, 0.08]], "square", 0.08),
                tick: () => playTones([[880, 0.03]], "square", 0.04),
                timeUp: () => playTones([[200, 0.12], [150, 0.12], [100, 0.2]], "sawtooth", 0.1)
            }
        };

        const SFX = {
            tap: () => { if (!soundOn) { hapticPulse("tap"); return; } playModernClick(); },
            correct: () => { if (!soundOn) { hapticPulse("correct"); return; } if (!playSfxFile("correct", 0.6)) (SFX_PACKS[soundPack] || SFX_PACKS.soft).correct(); },
            wrong: () => { if (!soundOn) { hapticPulse("wrong"); return; } if (!playSfxFile("wrong", 0.55)) (SFX_PACKS[soundPack] || SFX_PACKS.soft).wrong(); },
            win: () => (SFX_PACKS[soundPack] || SFX_PACKS.soft).win(),
            levelUp: () => (SFX_PACKS[soundPack] || SFX_PACKS.soft).levelUp(),
            coin: () => (SFX_PACKS[soundPack] || SFX_PACKS.soft).coin(),
            tick: () => (SFX_PACKS[soundPack] || SFX_PACKS.soft).tick(),
            timeUp: () => (SFX_PACKS[soundPack] || SFX_PACKS.soft).timeUp(),
            bookOpen: () => { if (!playSfxFile("bookOpen", 0.5)) playSfxFile("open", 0.45); },
            pageFlip: () => { if (!playSfxFile("pageFlip", 0.45)) playSfxFile("switch", 0.4); },
            switch: () => playSfxFile("switch", 0.45),
            open: () => playSfxFile("open", 0.45)
        };

        function setSoundPack(pack) {
            if (pack !== "soft" && pack !== "crisp" && pack !== "arcade") return;
            soundPack = pack;
            try { localStorage.setItem("eduplaySoundPack", pack); } catch (e) { /* */ }
            document.querySelectorAll("[data-sound-pack]").forEach(el => {
                el.classList.toggle("active", el.getAttribute("data-sound-pack") === pack);
            });
            if (soundOn) SFX.correct();
            showToast(pack === "soft" ? "🔊 Soft-Sounds" : (pack === "arcade" ? "🔊 Arcade-Sounds" : "🔊 Klare Sounds"), "success", "soundpack");
        }

        function syncSoundPackUI() {
            document.querySelectorAll("[data-sound-pack]").forEach(el => {
                el.classList.toggle("active", el.getAttribute("data-sound-pack") === soundPack);
            });
        }
        try { document.addEventListener("DOMContentLoaded", syncSoundPackUI); } catch (e) { /* */ }

        function hapticPulse(kind) {
            try {
                if (!navigator.vibrate) return;
                if (kind === "wrong") navigator.vibrate([35, 40, 35]);
                else if (kind === "correct") navigator.vibrate(22);
                else navigator.vibrate(12);
            } catch (e) { /* */ }
        }

        function updateQuietUI() {
            const on = !soundOn;
            document.querySelectorAll(".quiet-toggle-label").forEach(function (el) {
                el.textContent = on ? "an" : "aus";
            });
            document.querySelectorAll(".sound-toggle-icon").forEach(function (el) {
                el.innerText = soundOn ? "🔊" : "🔇";
            });
        }

        function silenceAllAudio() {
            try { stopBackgroundMusic(); } catch (e) { /* */ }
            try { stopFileBgm(); } catch (e) { /* */ }
            try { if (bgmEl) { bgmEl.pause(); bgmEl.volume = 0; } } catch (e) { /* */ }
            try { if (musicTimer) { clearInterval(musicTimer); musicTimer = null; } } catch (e) { /* */ }
            try { if (musicGain && musicCtx) musicGain.gain.setValueAtTime(0, musicCtx.currentTime); } catch (e) { /* */ }
            try { if (audioCtx && audioCtx.state === "running") audioCtx.suspend(); } catch (e) { /* */ }
            try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) { /* */ }
        }

        function toggleQuietMode() {
            soundOn = !soundOn;
            try { localStorage.setItem("eduplaySound", soundOn ? "on" : "off"); } catch (e) { }
            updateQuietUI();
            if (!soundOn) {
                silenceAllAudio();
                hapticPulse("tap");
                if (typeof showToast === "function") showToast("🤫 Leise-Modus an – kein Ton", "success", "sound");
            } else {
                try { if (audioCtx && audioCtx.state === "suspended") audioCtx.resume(); } catch (e) { /* */ }
                try { if (musicGain && musicCtx) musicGain.gain.setValueAtTime(musicVolume, musicCtx.currentTime); } catch (e) { /* */ }
                if (musicVolume > 0) startBackgroundMusic();
                SFX.tap();
                if (typeof showToast === "function") showToast("🔊 Ton wieder an", "success", "sound");
            }
        }
        function toggleSound() { toggleQuietMode(); }
        try { window.toggleQuietMode = toggleQuietMode; window.toggleSound = toggleSound; } catch (e) { /* */ }
        try { document.addEventListener("DOMContentLoaded", updateQuietUI); } catch (e) { /* */ }

        // ============================================================
        //  HINTERGRUNDMUSIK
        //  1) optional audio/bgm/menu.mp3 + quiz.mp3 (selbst ablegen)
        //  2) sonst Web-Audio Lo-fi / Bounce
        // ============================================================
        let musicCtx = null;
        let musicGain = null;
        let musicVolume = 0.18;
        let musicTimer = null;
        let musicStep = 0;
        let musicMode = 'menu';
        let gameStep = 0;
        let bgmEl = null;
        let bgmFileMode = null; // 'menu' | 'quiz' | null wenn Datei fehlt
        const BGM_PATHS = {
            menu: ["audio/bgm/menu.mp3", "audio/bgm/menu.ogg"],
            quiz: ["audio/bgm/quiz.mp3", "audio/bgm/quiz.ogg"]
        };
        try {
            const savedVol = localStorage.getItem("eduplayMusicVolume");
            if (savedVol !== null) musicVolume = Math.max(0, Math.min(1, parseFloat(savedVol)));
        } catch (e) { }

        function stopFileBgm() {
            if (bgmEl) {
                try { bgmEl.pause(); bgmEl.currentTime = 0; } catch (e) { /* */ }
            }
        }

        function tryPlayFileBgm(mode) {
            if (!soundOn) return false;
            const paths = BGM_PATHS[mode === 'game' ? 'quiz' : 'menu'];
            if (!paths || !paths.length) return false;
            if (!bgmEl) {
                bgmEl = new Audio();
                bgmEl.loop = true;
                bgmEl.preload = "auto";
            }
            const want = paths[0];
            // schon diese Datei?
            if (bgmFileMode === mode && bgmEl.src && bgmEl.src.indexOf(want.replace(/^audio\//, "")) !== -1) {
                bgmEl.volume = musicVolume;
                const p = bgmEl.play();
                if (p && p.catch) p.catch(function () { });
                return true;
            }
            let idx = 0;
            function loadNext() {
                if (idx >= paths.length) {
                    bgmFileMode = null;
                    return false;
                }
                const path = paths[idx++];
                bgmEl.oncanplaythrough = function () {
                    if (!soundOn) { stopFileBgm(); return; }
                    bgmFileMode = mode === 'game' ? 'quiz' : 'menu';
                    bgmEl.volume = musicVolume;
                    const p = bgmEl.play();
                    if (p && p.catch) p.catch(function () { });
                };
                bgmEl.onerror = function () { loadNext(); };
                try {
                    bgmEl.src = path;
                    bgmEl.load();
                } catch (e) { return loadNext(); }
                return true;
            }
            stopFileBgm();
            return loadNext();
        }

        // Warme Progressions (F – Dm – Bb – C), edu/lo-fi
        const MENU_CHORDS = [
            [174.61, 220.00, 261.63, 349.23], // F
            [146.83, 220.00, 261.63, 349.23], // Dm
            [116.54, 174.61, 233.08, 349.23], // Bb
            [130.81, 196.00, 261.63, 329.63]  // C
        ];
        // F-Pentatonik Melodie (sparsam)
        const MENU_PENTA = [349.23, 392.00, 440.00, 523.25, 587.33, 698.46];
        const MENU_MELODY = [0, -1, 2, 4, 2, 0, 3, -1, 1, 3, 4, 2, 0, -1, 2, 0];

        // Spiel: G-Dur Bounce
        const GAME_ARP = [196.00, 246.94, 293.66, 392.00, 493.88, 392.00, 293.66, 246.94];
        const GAME_BASS = [98.00, 110.00, 123.47, 130.81];

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

        function _musicTone(ctx, type, freq, t, attack, peak, release, filterHz, detune) {
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, t);
            if (detune) osc.detune.setValueAtTime(detune, t);
            g.gain.setValueAtTime(0.0001, t);
            g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + Math.max(0.01, attack));
            g.gain.exponentialRampToValueAtTime(0.0001, t + release);
            if (filterHz) {
                const f = ctx.createBiquadFilter();
                f.type = "lowpass";
                f.frequency.setValueAtTime(filterHz, t);
                f.Q.value = 0.55;
                osc.connect(f);
                f.connect(g);
            } else {
                osc.connect(g);
            }
            g.connect(musicGain);
            osc.start(t);
            osc.stop(t + release + 0.08);
        }

        // Leises „Vinyl“-Rauschen für Lo-fi-Feeling (sehr dezent)
        function _musicNoise(ctx, t, dur, peak) {
            try {
                const n = Math.max(1, Math.floor(ctx.sampleRate * dur));
                const buf = ctx.createBuffer(1, n, ctx.sampleRate);
                const data = buf.getChannelData(0);
                for (let i = 0; i < n; i++) data[i] = (Math.random() * 2 - 1) * 0.4;
                const src = ctx.createBufferSource();
                src.buffer = buf;
                const g = ctx.createGain();
                const f = ctx.createBiquadFilter();
                f.type = "bandpass";
                f.frequency.value = 1800;
                f.Q.value = 0.4;
                g.gain.setValueAtTime(0.0001, t);
                g.gain.linearRampToValueAtTime(peak, t + 0.05);
                g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
                src.connect(f);
                f.connect(g);
                g.connect(musicGain);
                src.start(t);
                src.stop(t + dur + 0.02);
            } catch (e) { /* */ }
        }

        function playMusicNote() {
            if (!soundOn) return;
            const ctx = ensureMusicAudio();
            if (!ctx || musicVolume <= 0) return;
            const t = ctx.currentTime;
            const step = musicStep % 32;

            // Warme Pads alle 8 Steps (langsamer Wechsel)
            if (step % 8 === 0) {
                const chord = MENU_CHORDS[Math.floor(step / 8) % MENU_CHORDS.length];
                chord.forEach((freq, i) => {
                    _musicTone(ctx, "sine", freq, t, 0.6, 0.055 - i * 0.008, 3.8, 1400, i * 3);
                    _musicTone(ctx, "triangle", freq * 0.5, t, 0.7, 0.03, 4.0, 700, -i * 2);
                });
                _musicNoise(ctx, t, 2.2, 0.012);
            }

            // Sparsame Melodie (nur manche Steps)
            if (step % 2 === 0) {
                const mIdx = MENU_MELODY[(step / 2) % MENU_MELODY.length];
                if (mIdx >= 0) {
                    const mf = MENU_PENTA[mIdx % MENU_PENTA.length];
                    _musicTone(ctx, "sine", mf, t, 0.12, 0.07, 1.1, 2600, 4);
                    _musicTone(ctx, "sine", mf * 2.01, t, 0.1, 0.02, 0.7, 4000, -6);
                }
            }

            // Sanfter Sub-Bass-Puls
            if (step % 4 === 0) {
                const bf = MENU_CHORDS[Math.floor(step / 8) % MENU_CHORDS.length][0];
                _musicTone(ctx, "sine", bf * 0.5, t, 0.2, 0.09, 1.6, 280);
            }

            musicStep++;
        }

        function playMusicNoteGame() {
            if (!soundOn) return;
            const ctx = ensureMusicAudio();
            if (!ctx || musicVolume <= 0) return;
            const t = ctx.currentTime;
            const step = gameStep % 16;
            const note = GAME_ARP[step % GAME_ARP.length];

            // Arpeggio (weich)
            _musicTone(ctx, "triangle", note, t, 0.02, 0.09, 0.32, 2800, 2);
            _musicTone(ctx, "sine", note * 2, t, 0.015, 0.025, 0.2, 4500);

            // Bass alle 4
            if (step % 4 === 0) {
                const bf = GAME_BASS[Math.floor(step / 4) % GAME_BASS.length];
                _musicTone(ctx, "sine", bf, t, 0.03, 0.12, 0.7, 500);
            }

            // Offbeat-Click (sehr leise)
            if (step % 2 === 1) {
                _musicTone(ctx, "sine", 1200, t, 0.004, 0.02, 0.05, 6000);
            }

            gameStep++;
        }

        function startBackgroundMusic() {
            if (!soundOn || musicVolume <= 0) return;
            // Datei-BGM bevorzugen (wenn vorhanden)
            stopBackgroundMusic(true);
            if (tryPlayFileBgm(musicMode)) return;
            if (musicTimer) return;
            if (!ensureMusicAudio()) return;
            const tick = musicMode === 'game' ? playMusicNoteGame : playMusicNote;
            tick();
            musicTimer = setInterval(tick, musicMode === 'game' ? 200 : 520);
        }

        function stopBackgroundMusic(keepFile) {
            if (musicTimer) { clearInterval(musicTimer); musicTimer = null; }
            if (!keepFile) stopFileBgm();
        }

        const GAME_MUSIC_VIEWS = ['quiz', 'duel-play', 'scrabble-play', 'wortraten-play',
            'live-duel-play', 'tv-quiz-player', 'tv-quiz-host'];

        function setMusicMode(viewId) {
            const mode = GAME_MUSIC_VIEWS.includes(viewId) ? 'game' : 'menu';
            if (mode === musicMode) return;
            musicMode = mode;
            musicStep = 0;
            gameStep = 0;
            if (soundOn && musicVolume > 0) {
                stopBackgroundMusic();
                startBackgroundMusic();
            }
        }

        function setMusicVolume(pct) {
            musicVolume = Math.max(0, Math.min(100, parseInt(pct) || 0)) / 100;
            try { localStorage.setItem("eduplayMusicVolume", musicVolume); } catch (e) { }
            const label = document.getElementById("music-volume-label");
            if (label) label.innerText = Math.round(musicVolume * 100) + "%";
            if (musicGain && musicCtx) musicGain.gain.setTargetAtTime(musicVolume, musicCtx.currentTime, 0.05);
            if (bgmEl) bgmEl.volume = musicVolume;
            if (soundOn && musicVolume > 0) startBackgroundMusic();
            else if (musicVolume <= 0 || !soundOn) stopBackgroundMusic();
        }

        // Browser lassen Audio erst nach einer Nutzer-Geste zu - Musik daher
        // beim allerersten Klick/Tastendruck einmalig anstoßen. Läuft danach
        // durch, aber nicht im Leise-Modus.
        let musicStartBound = false;
        function bindMusicAutostart() {
            if (musicStartBound) return;
            musicStartBound = true;
            const starter = () => {
                if (soundOn && musicVolume > 0) startBackgroundMusic();
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
        /** Text für Vorlesen: Lücken/Unterstriche/Lösungshinweise entfernen. */
        function cleanTextForSpeech(text) {
            let t = String(text || "");
            t = t.replace(/<u[^>]*>[\s\S]*?<\/u>/gi, " ");           // HTML-Unterstrich
            t = t.replace(/__+|_+/g, " ");                           // ____ / _atze
            t = t.replace(/\([^)]*\)/g, " ");                        // (Katze) Lösungshinweis
            t = t.replace(/\[[^\]]*\]/g, " ");
            t = t.replace(/[„“"‘'‚‹›«»]/g, " ");
            t = t.replace(/[🔤👏🔊📖🖼️📗📕📝🧠🧩✅❌➔❓💡🎉🌟🏆👂👀📚🚩]/g, " ");
            t = t.replace(/\s+/g, " ").trim();
            return t;
        }

        /** Kindgerechte DE-Stimme (weich, etwas langsamer). */
        function pickKidGermanVoice() {
            try {
                const voices = window.speechSynthesis.getVoices() || [];
                const de = voices.filter(v => /de(-|_)?DE|German|Deutsch/i.test(v.lang + " " + v.name));
                const prefer = (list, re) => list.find(v => re.test(v.name));
                return prefer(de, /natural|neural|premium|enhanced|google|siri|anna|helena|katja|petra|marlene|vicki/i)
                    || prefer(de, /female|frau|woman|girl/i)
                    || de.find(v => /de-DE/i.test(v.lang))
                    || de[0]
                    || null;
            } catch (e) { return null; }
        }

        function speakText(text) {
            if (!soundOn) return;
            try {
                if (!('speechSynthesis' in window) || !text) return;
                const clean = cleanTextForSpeech(text);
                if (!clean) return;
                window.speechSynthesis.cancel();
                const u = new SpeechSynthesisUtterance(clean);
                u.lang = "de-DE";
                u.rate = 0.85;   // etwas langsamer für Klasse 1/2
                u.pitch = 1.15;  // freundlicher
                u.volume = 1;
                const voice = pickKidGermanVoice();
                if (voice) u.voice = voice;
                // Stimmen laden asynchron in manchen Browsern
                if (!voice && window.speechSynthesis.getVoices().length === 0) {
                    window.speechSynthesis.onvoiceschanged = function () {
                        const v2 = pickKidGermanVoice();
                        if (v2) u.voice = v2;
                        window.speechSynthesis.speak(u);
                        window.speechSynthesis.onvoiceschanged = null;
                    };
                    return;
                }
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

        

        // ============================================================
        //  ERSTSTART-TUTORIAL (einmalig, wegklickbar)
        // ============================================================
        const ONBOARD_KEY = "eduplayOnboardV2";
        const ONBOARD_STEPS = [
            {
                title: "👋 Willkommen bei EduPlay!",
                body: "Hier lernt und spielt die ganze Familie. Wähle links/oben ein Spieler-Profil – jedes Kind hat eigene Punkte und Fortschritte."
            },
            {
                title: "👨‍👩‍👧‍👦 Eltern & Kontrollzentrum",
                body: "Im Kontrollzentrum (PIN-geschützt) siehst du Lernzeiten, weist Tests zu und verwaltest Belohnungen. PIN einmal in den Einstellungen setzen."
            },
            {
                title: "📚 Lernraum",
                body: "Quiz, Kurse, Vokabeln, Lesen und Formeln – auch gemeinsam mit Freunden einladbar. Bei Klasse 1 und 2 wird der Text automatisch vorgelesen – Lücken und Lösungshinweise nicht mit."
            },
            {
                title: "⚔️ Gegeneinander spielen",
                body: "Wort-Duell, Quiz-Duell und Online-Lobby. Code teilen, Freunde treten bei. Offline gehen Ein-Gerät-Spiele weiter."
            },
            {
                title: "🎲 Themen & Zufall",
                body: "Viele Kategorien – mit „Zufällige Kategorie“ kommt Abwechslung. Fun-Fragen und Schätzen für die ganze Familie."
            },
            {
                title: "🔊 Ton & Design",
                body: "Im Menü: Ton an/aus, Sound-Pack (Soft/Klar/Arcade), Musik-Lautstärke und Hell/Dunkel-Design. Alles speichert sich automatisch."
            },
            {
                title: "⭐ Belohnungen & Tipps",
                body: "Coins und Abzeichen sammeln, Belohnungen einlösen. Blitz-Übung und „Weitermachen“ helfen beim Dranbleiben. Viel Spaß!"
            }
        ];
        let onboardStep = 0;

        function maybeShowOnboarding() {
            try {
                if (localStorage.getItem(ONBOARD_KEY) === "done") return;
            } catch (e) { return; }
            const ov = document.getElementById("onboarding-overlay");
            if (!ov || !ov.classList.contains("hidden")) return;
            onboardStep = 0;
            renderOnboardingStep();
            ov.classList.remove("hidden");
        }

        function renderOnboardingStep() {
            const s = ONBOARD_STEPS[onboardStep] || ONBOARD_STEPS[0];
            const title = document.getElementById("onboard-title");
            const body = document.getElementById("onboard-body");
            const next = document.getElementById("onboard-next");
            const dots = document.getElementById("onboard-dots");
            if (title) title.textContent = s.title;
            if (body) body.textContent = s.body;
            if (next) next.textContent = onboardStep >= ONBOARD_STEPS.length - 1 ? "Los geht's 🚀" : "Weiter";
            if (dots) {
                dots.innerHTML = ONBOARD_STEPS.map((_, i) =>
                    `<span style="width:8px;height:8px;border-radius:50%;display:inline-block;background:${i === onboardStep ? '#818cf8' : 'rgba(255,255,255,0.25)'}"></span>`
                ).join("");
            }
        }

        function onboardingNext() {
            if (onboardStep >= ONBOARD_STEPS.length - 1) {
                dismissOnboarding(true);
                return;
            }
            onboardStep++;
            renderOnboardingStep();
        }

        function dismissOnboarding(save) {
            const ov = document.getElementById("onboarding-overlay");
            if (ov) ov.classList.add("hidden");
            if (save) {
                try { localStorage.setItem(ONBOARD_KEY, "done"); } catch (e) { /* */ }
            }
        }

        function resetOnboarding() {
            try { localStorage.removeItem(ONBOARD_KEY); } catch (e) { /* */ }
            onboardStep = 0;
            maybeShowOnboarding();
        }

        function getActiveInviteCode() {
            const fromLobby = (document.getElementById("live-duel-lobby-code") || {}).innerText || "";
            const fromTV = window._activeTVCode || "";
            const raw = (fromLobby || fromTV).trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
            return raw.length >= 4 ? raw.slice(0, 4) : "";
        }

        function buildInviteLink(code, mode) {
            const base = (window.location.origin || "") + (window.location.pathname || "/");
            if (!code) return base;
            if (mode === "tv") return base + "?tv=" + encodeURIComponent(code);
            return base + "?join=" + encodeURIComponent(code);
        }

        function inviteFriends(mode) {
            const code = getActiveInviteCode();
            const isTV = mode === "tv" || (!!window._activeTVCode && !document.getElementById("live-duel-lobby-code-wrap"));
            const link = buildInviteLink(code, isTV || (window._activeTVCode && code === window._activeTVCode) ? "tv" : "join");
            const text = code
                ? (isTV || (window._activeTVCode && code === String(window._activeTVCode).toUpperCase())
                    ? `Komm zu EduPlay TV! Code: ${code}\n${link}`
                    : `Komm zu EduPlay! Code: ${code}\nMit Freunden spielen → Code eingeben\n${link}`)
                : `Hey! Lern mit mir auf EduPlay Hub 🚀\n${link}`;
            const shareData = { title: "EduPlay Hub", text, url: link };
            if (navigator.share) {
                navigator.share(shareData).catch(() => { });
            } else {
                const payload = text;
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(payload).then(() => {
                        showToast(code ? "Code " + code + " kopiert!" : "Link kopiert!", "success");
                    }).catch(() => { appAlert(payload, { titel: "Zum Kopieren", icon: "🔗" }); });
                } else {
                    appAlert(payload, { titel: "Zum Kopieren", icon: "🔗" });
                }
            }
        }

        function shareLobbyCode() {
            const code = getActiveInviteCode();
            if (!code) return showToast("Noch kein Code.", "error");
            inviteFriends();
        }

        function shareTVCode() {
            if (!window._activeTVCode) return showToast("Noch kein TV-Code.", "error");
            inviteFriends("tv");
        }


        function toggleTheme() {
            const isDark = document.body.classList.toggle('dark-theme');
            // Speichert die Auswahl des Nutzers
            try { localStorage.setItem('eduplayTheme', isDark ? 'dark' : 'light'); } catch (e) { }
            showToast(isDark ? "🌙 Dark-Mode aktiv" : "☀️ Light-Mode aktiv", "success", "theme");
        }
