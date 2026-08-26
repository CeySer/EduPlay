// ============================================================
//  LERNPFADE / KURSE
//  Erklärung → gestufte Übung (leicht/mittel/schwer) → Abschlusstest
//  Pilot: Mathematik · Bruchrechnen, Klasse 5
// ============================================================

const KURSE = [
    { id: "bruchrechnen_k5", title: "Bruchrechnen", icon: "🍕", grade: 5, subject: "mathe", beschreibung: "Vom Bruch verstehen bis sicher rechnen." },
    { id: "bruchrechnen_k6", title: "Brüche vertiefend", icon: "✖️", grade: 6, subject: "mathe", beschreibung: "Brüche multiplizieren und dividieren." },
    { id: "woertliche_rede_k5", title: "Wörtliche Rede", icon: "💬", grade: 5, subject: "deutsch", beschreibung: "Anführungszeichen und Satzzeichen sicher setzen." },
    { id: "simple_present_k5", title: "Simple Present", icon: "🕐", grade: 5, subject: "englisch", beschreibung: "Regelmäßige Handlungen und Fakten auf Englisch ausdrücken." },
    { id: "fotosynthese_k6", title: "Fotosynthese", icon: "🌱", grade: 6, subject: "biologie", beschreibung: "Wie Pflanzen aus Licht, Wasser und CO2 ihre Energie herstellen." },
    { id: "simple_past_k5", title: "Simple Past", icon: "⏳", grade: 5, subject: "englisch", beschreibung: "Regelmäßige Verben in der Vergangenheit richtig bilden." },
    { id: "flaechen_umfang_k6", title: "Flächen & Umfang", icon: "📐", grade: 6, subject: "mathe", beschreibung: "Umfang und Fläche von Rechteck und Quadrat sicher berechnen." },
    { id: "satzglieder_k5", title: "Satzglieder", icon: "🧩", grade: 5, subject: "deutsch", beschreibung: "Subjekt, Prädikat und Objekt in Sätzen sicher erkennen." },
    { id: "geometrie_grundlagen_k5", title: "Geometrie Grundlagen", icon: "🔺", grade: 5, subject: "mathe", beschreibung: "Winkel und Vierecke kennenlernen und unterscheiden." },
    { id: "plural_regeln_k5", title: "Plural-Regeln", icon: "📚", grade: 5, subject: "englisch", beschreibung: "Die Mehrzahl englischer Wörter richtig bilden." },
    { id: "wortarten_vertiefend_k5", title: "Wortarten vertiefend", icon: "🔤", grade: 5, subject: "deutsch", beschreibung: "Pronomen, Präpositionen und Konjunktionen genauer unter die Lupe nehmen." },
    { id: "dezimalzahlen_k6", title: "Dezimalzahlen", icon: "🔢", grade: 6, subject: "mathe", beschreibung: "Stellenwerte, Vergleichen und Runden von Kommazahlen." },
    { id: "negative_zahlen_k6", title: "Negative Zahlen – Einführung", icon: "➖", grade: 6, subject: "mathe", beschreibung: "Die Zahlengerade nach links erweitern – kleiner als Null." },
    { id: "zeitformen_k6", title: "Zeitformen", icon: "🕰️", grade: 6, subject: "deutsch", beschreibung: "Präteritum, Perfekt und Plusquamperfekt sicher unterscheiden." },
    { id: "comparison_k6", title: "Comparison of Adjectives", icon: "⚖️", grade: 6, subject: "englisch", beschreibung: "Adjektive im Englischen richtig steigern – Komparativ und Superlativ." },
    { id: "groessen_umrechnen_k5", title: "Größen umrechnen", icon: "📏", grade: 5, subject: "mathe", beschreibung: "Längen, Gewichte, Zeit und Geld sicher umrechnen." },
    { id: "prozentrechnung_k7", title: "Prozentrechnung", icon: "💯", grade: 7, subject: "mathe", beschreibung: "Grundwert, Prozentwert und Prozentsatz berechnen." },
    { id: "nebensaetze_k6", title: "Nebensätze & Konjunktionen", icon: "🔗", grade: 6, subject: "deutsch", beschreibung: "Haupt- und Nebensätze erkennen und richtig verbinden." },
    { id: "present_perfect_k6", title: "Present Perfect", icon: "✅", grade: 6, subject: "englisch", beschreibung: "Abgeschlossene Handlungen mit Bezug zur Gegenwart ausdrücken." },
    { id: "zinsrechnung_k7", title: "Zinsrechnung", icon: "🏦", grade: 7, subject: "mathe", beschreibung: "Zinsen, Kapital und Zinssatz sicher berechnen." },
    { id: "terme_gleichungen_k7", title: "Terme & Gleichungen", icon: "🧮", grade: 7, subject: "mathe", beschreibung: "Terme vereinfachen und lineare Gleichungen lösen." },
    { id: "grossschreibung_k6", title: "Groß- und Kleinschreibung", icon: "🔠", grade: 6, subject: "deutsch", beschreibung: "Nominalisierungen und Zeitangaben richtig schreiben." },
    { id: "present_progressive_k6", title: "Present Progressive", icon: "🏃", grade: 6, subject: "englisch", beschreibung: "Was gerade passiert – und was immer passiert." },
    { id: "brueche_addieren_k5", title: "Brüche addieren & subtrahieren", icon: "➕", grade: 5, subject: "mathe", beschreibung: "Plus und minus mit Brüchen – gleichnamig und ungleichnamig." },
    { id: "dezimal_rechnen_k6", title: "Mit Dezimalzahlen rechnen", icon: "🧾", grade: 6, subject: "mathe", beschreibung: "Plus, minus, mal und geteilt mit Kommazahlen." },
    { id: "zuordnungen_k7", title: "Zuordnungen", icon: "📈", grade: 7, subject: "mathe", beschreibung: "Proportional und antiproportional sicher unterscheiden." },
    { id: "aktiv_passiv_k7", title: "Aktiv & Passiv", icon: "🔄", grade: 7, subject: "deutsch", beschreibung: "Wer handelt – und wann die Handlung wichtiger ist." },
    { id: "prepositions_k7", title: "Prepositions of Place and Time", icon: "📍", grade: 7, subject: "englisch", beschreibung: "in, on, at bei Ort und Zeit richtig einsetzen." },
    { id: "nebensatzarten_k7", title: "Nebensatzarten", icon: "🧭", grade: 7, subject: "deutsch", beschreibung: "Kausal, temporal, konditional, konzessiv, final unterscheiden." },
    { id: "satzglieder_vertiefend_k7", title: "Satzglieder vertiefend", icon: "🧱", grade: 7, subject: "deutsch", beschreibung: "Adverbiale Bestimmungen und besondere Objekte erkennen." },
    { id: "future_k7", title: "will-future & going-to", icon: "🔮", grade: 7, subject: "englisch", beschreibung: "Spontan entschieden oder längst geplant?" },
    { id: "perfect_past_k7", title: "Present Perfect oder Simple Past?", icon: "⏱️", grade: 7, subject: "englisch", beschreibung: "Die beiden Vergangenheitsformen sicher auseinanderhalten." },
    { id: "teiler_vielfache_k5", title: "Teiler, Vielfache & Primzahlen", icon: "🔢", grade: 5, subject: "mathe", beschreibung: "Teilbarkeitsregeln, ggT, kgV und Primfaktoren." },
    { id: "das_dass_k6", title: "das oder dass", icon: "✏️", grade: 6, subject: "deutsch", beschreibung: "Die Ersatzprobe sicher anwenden." },
    { id: "vier_faelle_k5", title: "Die vier Fälle", icon: "4️⃣", grade: 5, subject: "deutsch", beschreibung: "Nominativ, Genitiv, Dativ und Akkusativ bestimmen." },
    { id: "be_havegot_k5", title: "to be & have got", icon: "🇬🇧", grade: 5, subject: "englisch", beschreibung: "Sein und haben – Grundformen, Fragen und Verneinung." },
    { id: "koerper_volumen_k6", title: "Körper & Volumen", icon: "📦", grade: 6, subject: "mathe", beschreibung: "Würfel, Quader & Co. – Netze, Volumen und Oberfläche." },
    { id: "brueche_dezimal_k6", title: "Brüche & Dezimalzahlen", icon: "🔁", grade: 6, subject: "mathe", beschreibung: "Zwei Schreibweisen für denselben Wert." },
    { id: "daten_diagramme_k5", title: "Daten & Diagramme", icon: "📊", grade: 5, subject: "mathe", beschreibung: "Strichliste, Diagramm, Mittelwert und Spannweite." },
    { id: "s_ss_sz_k5", title: "s, ss oder ß", icon: "🔤", grade: 5, subject: "deutsch", beschreibung: "Kurzer oder langer Vokal – die s-Laute sicher schreiben." },
    { id: "komma_k5", title: "Kommasetzung", icon: "✂️", grade: 5, subject: "deutsch", beschreibung: "Aufzählungen, aber und denn, Nebensätze, wörtliche Rede." },
    { id: "some_any_questions_k5", title: "some, any & question words", icon: "🧺", grade: 5, subject: "englisch", beschreibung: "Mengenwörter und die englischen Fragewörter." },
    { id: "modals_k5", title: "can, must & mustn't", icon: "💪", grade: 5, subject: "englisch", beschreibung: "Können, müssen und nicht dürfen." },
    { id: "adjektive_steigern_k6", title: "Adjektive steigern", icon: "📈", grade: 6, subject: "deutsch", beschreibung: "Komparativ, Superlativ und der Vergleich mit als und wie." },
    { id: "wortfelder_k6", title: "Wortfelder & Wortfamilien", icon: "🌳", grade: 6, subject: "deutsch", beschreibung: "Treffende Wörter finden statt sagen, machen, gehen." },
    { id: "silben_dehnung_k6", title: "Silben, Dehnung & Schärfung", icon: "🪓", grade: 6, subject: "deutsch", beschreibung: "Richtig trennen und lange von kurzen Vokalen unterscheiden." },
    { id: "adverbs_k6", title: "Adverbs of Manner", icon: "🏃", grade: 6, subject: "englisch", beschreibung: "Wie jemand etwas tut – die -ly-Formen." },
    { id: "there_is_k6", title: "there is & there are", icon: "🏠", grade: 6, subject: "englisch", beschreibung: "Es gibt … – Einzahl, Mehrzahl, Frage und Verneinung." },
    { id: "pronouns_k6", title: "Pronouns", icon: "👤", grade: 6, subject: "englisch", beschreibung: "I und me, my und mine sicher unterscheiden." },
    { id: "word_order_k6", title: "Word Order", icon: "🧩", grade: 6, subject: "englisch", beschreibung: "Subjekt-Verb-Objekt und place before time." }
];

const LEKTIONEN = [
    {
        id: "bruch_k5_l1",
        kurs: "bruchrechnen_k5",
        order: 1,
        icon: "🍕",
        title: "Was ist ein Bruch?",
        kurz: "Zähler, Nenner & die Grundidee",
        erklaerung: {
            intro: "Ein <b>Bruch</b> beschreibt einen Teil von einem Ganzen. Er besteht aus zwei Zahlen: dem <b>Zähler</b> (oben) und dem <b>Nenner</b> (unten) – geschrieben als Zähler/Nenner.",
            beispiele: [
                "🍕 Eine Pizza wird in 4 gleiche Stücke geteilt. Du isst 1 Stück. Das sind <b>1/4</b> der Pizza.",
                "🍫 Ein Schokoriegel hat 8 Stücke. Du isst 3 davon. Das sind <b>3/8</b> des Riegels."
            ],
            merksatz: "Der <b>Nenner</b> (unten) sagt, in wie viele gleiche Teile das Ganze geteilt wird. Der <b>Zähler</b> (oben) sagt, wie viele dieser Teile gemeint sind."
        },
        uebung: {
            leicht: [
                { id: "brl1u_leicht_1", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Ein Kuchen wird in 6 gleiche Stücke geteilt. Du nimmst dir 1 Stück. Welcher Bruch beschreibt das?",
                    answers: ["1/6", "6/1", "1/5", "6/6"], correct: 0,
                    explanation: "Der Nenner (6) zeigt, in wie viele Teile der Kuchen geteilt wurde. Der Zähler (1) zeigt, wie viele Teile du hast: 1/6." },
                { id: "brl1u_leicht_2", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Bei einem Bruch steht eine Zahl unten. Wie heißt sie?",
                    answers: ["Nenner", "Zähler", "Summe", "Produkt"], correct: 0,
                    explanation: "Die untere Zahl im Bruch heißt Nenner. Sie zeigt, in wie viele Teile geteilt wurde." },
                { id: "brl1u_leicht_3", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Bei einem Bruch steht eine Zahl oben. Wie heißt sie?",
                    answers: ["Zähler", "Nenner", "Faktor", "Rest"], correct: 0,
                    explanation: "Die obere Zahl im Bruch heißt Zähler. Sie zeigt, wie viele Teile gemeint sind." },
                { id: "brl1u_leicht_4", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Eine Tafel Schokolade hat 10 Stücke. Du isst 3 Stücke. Welcher Bruch zeigt, wie viel du gegessen hast?",
                    answers: ["3/10", "10/3", "3/7", "7/10"], correct: 0,
                    explanation: "10 Stücke insgesamt (Nenner), 3 davon gegessen (Zähler): 3/10." }
            ],
            mittel: [
                { id: "brl1u_mittel_1", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Ein Bruch ist 5/8. Was bedeutet die 8?",
                    answers: ["Das Ganze wurde in 8 Teile geteilt", "Es sind genau 8 Bruchteile gemeint", "8 ist immer automatisch die größere Zahl", "8 ist das Ergebnis der Rechnung"], correct: 0,
                    explanation: "Der Nenner (8) sagt, in wie viele gleiche Teile das Ganze geteilt wurde." },
                { id: "brl1u_mittel_2", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "In einer Klasse sind 24 Kinder. 9 davon haben blaue Augen. Welcher Bruch beschreibt den Anteil der Kinder mit blauen Augen?",
                    answers: ["9/24", "24/9", "9/15", "15/24"], correct: 0,
                    explanation: "24 Kinder insgesamt (Nenner), 9 mit blauen Augen (Zähler): 9/24." },
                { id: "brl1u_mittel_3", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Welcher Bruch beschreibt: 'Von 5 gleichen Teilen sind 4 gemeint'?",
                    answers: ["4/5", "5/4", "4/4", "1/5"], correct: 0,
                    explanation: "5 Teile insgesamt (Nenner), 4 davon gemeint (Zähler): 4/5." },
                { id: "brl1u_mittel_4", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Max hat den Bruch 7/7 notiert. Was bedeutet das?",
                    answers: ["Das ganze Stück ist gemeint (alles)", "Gar nichts ist damit gemeint, also null", "Der Bruch ist so nicht gültig geschrieben", "Es fehlt noch ein Teil bis zum Ganzen"], correct: 0,
                    explanation: "Wenn Zähler und Nenner gleich sind, ist das ganze Stück gemeint – also 1 ganzes." }
            ],
            schwer: [
                { id: "brl1u_schwer_1", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Ein Krug wird in 5 gleiche Portionen geteilt. Lisa trinkt 2 Portionen, Tim trinkt 1 Portion. Welcher Bruch beschreibt, wie viel Tim getrunken hat?",
                    answers: ["1/5", "2/5", "1/2", "5/1"], correct: 0,
                    explanation: "Der Krug ist in 5 Teile geteilt (Nenner). Tim trinkt 1 Portion (Zähler): 1/5." },
                { id: "brl1u_schwer_2", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Welche Aussage über den Bruch 3/4 ist FALSCH?",
                    answers: ["Der Zähler ist 4", "Der Nenner ist 4", "Der Zähler ist 3", "Es sind 3 von 4 Teilen"], correct: 0,
                    explanation: "Falsch: Der Zähler ist 3, nicht 4 – die 4 ist der Nenner." },
                { id: "brl1u_schwer_3", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Ein Gartenbeet wird in 12 gleiche Felder geteilt. Auf 5 Feldern wachsen Tomaten. Wie groß ist der Anteil der Felder OHNE Tomaten als Bruch?",
                    answers: ["7/12", "5/12", "5/7", "12/7"], correct: 0,
                    explanation: "12 Felder insgesamt, 5 mit Tomaten, also 12 − 5 = 7 Felder ohne Tomaten: 7/12." },
                { id: "brl1u_schwer_4", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Emma sagt: 'Bei 2/9 ist die 9 der Zähler.' Ben sagt: 'Nein, die 2 ist der Zähler.' Wer hat recht?",
                    answers: ["Ben, denn der Zähler steht oben", "Emma, denn der Zähler steht unten", "Beide haben teilweise recht", "Keiner, beide verwechseln alles"], correct: 0,
                    explanation: "Der Zähler steht immer oben – bei 2/9 ist das die 2. Ben hat recht." }
            ]
        },
        test: [
            { id: "brl1_test_1", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Was zeigt der Nenner eines Bruchs?",
                answers: ["In wie viele gleiche Teile das Ganze geteilt ist", "Wie viele Teile davon gemeint oder ausgewählt sind", "Das Ergebnis der Division von Zähler und Nenner", "Die Anzahl aller Brüche in der ganzen Aufgabe"], correct: 0,
                explanation: "Der Nenner (untere Zahl) zeigt, in wie viele gleiche Teile das Ganze geteilt ist." },
            { id: "brl1_test_2", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Was zeigt der Zähler eines Bruchs?",
                answers: ["Wie viele Teile gemeint sind", "In wie viele Teile geteilt wurde", "Wie groß das Ganze ist", "Die Summe aller Brüche"], correct: 0,
                explanation: "Der Zähler (obere Zahl) zeigt, wie viele Teile gemeint sind." },
            { id: "brl1_test_3", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                question: "Eine Pizza wird in 8 Stücke geteilt. Paul isst 3 Stücke. Welcher Bruch beschreibt das?",
                answers: ["3/8", "8/3", "3/5", "5/8"], correct: 0,
                explanation: "8 Stücke insgesamt (Nenner), 3 gegessen (Zähler): 3/8." },
            { id: "brl1_test_4", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "16 Murmeln liegen in einer Kiste, 6 davon sind blau. Welcher Bruch zeigt den Anteil der blauen Murmeln?",
                answers: ["6/16", "16/6", "6/10", "10/16"], correct: 0,
                explanation: "16 Murmeln insgesamt (Nenner), 6 blaue (Zähler): 6/16." },
            { id: "brl1_test_5", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Was bedeutet der Bruch 4/4?",
                answers: ["Das ganze Stück", "Gar nichts", "Die Hälfte", "Ein ungültiger Bruch"], correct: 0,
                explanation: "Sind Zähler und Nenner gleich, ist das ganze Stück gemeint – also 1 ganzes." },
            { id: "brl1_test_6", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "In einem Klassenzimmer sind 20 Kinder, alle 20 sind zum Ausflug angemeldet. Welcher Bruch beschreibt den Anteil der angemeldeten Kinder?",
                answers: ["20/20", "0/20", "20/0", "10/20"], correct: 0,
                explanation: "20 Kinder insgesamt, 20 angemeldet: 20/20 – also alle." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "bruch_k5_l2",
        kurs: "bruchrechnen_k5",
        order: 2,
        icon: "✂️",
        title: "Brüche kürzen & erweitern",
        kurz: "Gleicher Wert, andere Zahlen",
        erklaerung: {
            intro: "Man kann die Zahlen eines Bruchs verändern, ohne dass sich sein Wert ändert: Beim <b>Erweitern</b> multipliziert man Zähler und Nenner mit derselben Zahl. Beim <b>Kürzen</b> teilt man Zähler und Nenner durch dieselbe Zahl.",
            beispiele: [
                "➕ Erweitern: 1/2 mit 3 erweitert → (1×3)/(2×3) = <b>3/6</b>. Der Wert bleibt gleich, es ist immer noch die Hälfte.",
                "➖ Kürzen: 8/12 durch 4 gekürzt → (8÷4)/(12÷4) = <b>2/3</b>."
            ],
            merksatz: "Was du mit dem Zähler machst, musst du auch mit dem Nenner machen – sonst ändert sich der Wert des Bruchs!"
        },
        uebung: {
            leicht: [
                { id: "brl2u_leicht_1", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Du erweiterst den Bruch 1/3 mit 2. Was musst du tun?",
                    answers: ["Zähler und Nenner mit 2 multiplizieren", "Nur den Zähler allein mit 2 multiplizieren", "Nur den Nenner allein mit 2 multiplizieren", "Zähler und Nenner beide durch 2 teilen"], correct: 0,
                    explanation: "Beim Erweitern werden Zähler und Nenner mit derselben Zahl multipliziert – der Wert bleibt gleich." },
                { id: "brl2u_leicht_2", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Erweitere 2/5 mit 3. Was kommt raus?",
                    answers: ["6/15", "5/8", "2/15", "6/5"], correct: 0,
                    explanation: "Zähler: 2×3=6, Nenner: 5×3=15 → 6/15." },
                { id: "brl2u_leicht_3", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Kürze 4/8 mit 4. Was kommt raus?",
                    answers: ["1/2", "0/4", "1/4", "4/2"], correct: 0,
                    explanation: "Zähler: 4÷4=1, Nenner: 8÷4=2 → 1/2." },
                { id: "brl2u_leicht_4", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Welcher Bruch hat denselben Wert wie 1/2?",
                    answers: ["2/4", "1/4", "2/1", "3/5"], correct: 0,
                    explanation: "1/2 mit 2 erweitert ergibt 2/4 – gleicher Wert, andere Zahlen." }
            ],
            mittel: [
                { id: "brl2u_mittel_1", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Kürze 6/9 so weit wie möglich.",
                    answers: ["2/3", "3/4", "1/3", "3/9"], correct: 0,
                    explanation: "6 und 9 lassen sich beide durch 3 teilen: 6÷3=2, 9÷3=3 → 2/3." },
                { id: "brl2u_mittel_2", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Erweitere 3/4 so, dass unten (im Nenner) 12 steht. Welche Zahl steht dann oben?",
                    answers: ["9", "8", "3", "12"], correct: 0,
                    explanation: "4 wurde mit 3 multipliziert (4×3=12), also auch den Zähler mit 3 multiplizieren: 3×3=9." },
                { id: "brl2u_mittel_3", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Kürze 10/15 so, dass oben (im Zähler) 2 steht. Welche Zahl steht dann unten?",
                    answers: ["3", "5", "2", "10"], correct: 0,
                    explanation: "10÷5=2, also auch den Nenner durch 5 teilen: 15÷5=3." },
                { id: "brl2u_mittel_4", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Anna kürzt 12/16, indem sie nur den Zähler durch 4 teilt (also 3/16). Was hat sie falsch gemacht?",
                    answers: ["Sie hätte auch den Nenner durch 4 teilen müssen", "Sie hätte stattdessen mit 4 multiplizieren müssen", "12/16 kann man gar nicht weiter kürzen", "Nichts, so wie sie gerechnet hat, ist es richtig"], correct: 0,
                    explanation: "Beim Kürzen müssen Zähler UND Nenner durch dieselbe Zahl geteilt werden: 12÷4=3, 16÷4=4 → 3/4." }
            ],
            schwer: [
                { id: "brl2u_schwer_1", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Welcher Bruch ist NICHT gleichwertig zu 2/3?",
                    answers: ["3/4", "4/6", "6/9", "8/12"], correct: 0,
                    explanation: "4/6, 6/9 und 8/12 sind alle erweiterte Formen von 2/3. 3/4 ist ein anderer Wert." },
                { id: "brl2u_schwer_2", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Kürze 18/24 vollständig.",
                    answers: ["3/4", "9/12", "6/8", "2/3"], correct: 0,
                    explanation: "18 und 24 lassen sich beide durch 6 teilen: 18÷6=3, 24÷6=4 → 3/4 (weiter geht es nicht mehr)." },
                { id: "brl2u_schwer_3", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Erweitere 5/6 so, dass oben (im Zähler) 20 steht. Welche Zahl steht dann unten?",
                    answers: ["24", "20", "30", "6"], correct: 0,
                    explanation: "5 wurde mit 4 multipliziert (5×4=20), also auch den Nenner mit 4 multiplizieren: 6×4=24." },
                { id: "brl2u_schwer_4", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Tim sagt: '4/10 ist schon vollständig gekürzt.' Hat er recht?",
                    answers: ["Nein, man kann noch durch 2 kürzen", "Ja, 4 und 10 haben keinen Teiler", "Nein, man muss hier erweitern", "Nein, 4/10 ist gar kein Bruch"], correct: 0,
                    explanation: "4 und 10 haben noch den gemeinsamen Teiler 2: 4÷2=2, 10÷2=5 → 2/5 ist vollständig gekürzt." }
            ]
        },
        test: [
            { id: "brl2_test_1", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Was bedeutet 'einen Bruch kürzen'?",
                answers: ["Zähler und Nenner durch dieselbe Zahl teilen", "Nur den Nenner durch eine Zahl teilen", "Zähler und Nenner mit einer Zahl malnehmen", "Zähler und Nenner miteinander tauschen"], correct: 0,
                explanation: "Kürzen heißt: Zähler und Nenner durch dieselbe Zahl teilen, ohne den Wert zu ändern." },
            { id: "brl2_test_2", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Was bedeutet 'einen Bruch erweitern'?",
                answers: ["Zähler und Nenner mit derselben Zahl multiplizieren", "Nur den Zähler allein größer werden lassen", "Zähler und Nenner durch dieselbe Zahl teilen (kürzen)", "Einfach irgendeine neue Zahl mit addieren"], correct: 0,
                explanation: "Erweitern heißt: Zähler und Nenner mit derselben Zahl multiplizieren, ohne den Wert zu ändern." },
            { id: "brl2_test_3", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                question: "Erweitere 3/4 mit 5.",
                answers: ["15/20", "8/9", "3/20", "15/4"], correct: 0,
                explanation: "Zähler: 3×5=15, Nenner: 4×5=20 → 15/20." },
            { id: "brl2_test_4", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                question: "Kürze 9/12.",
                answers: ["3/4", "3/12", "1/3", "4/3"], correct: 0,
                explanation: "9 und 12 lassen sich beide durch 3 teilen: 9÷3=3, 12÷3=4 → 3/4." },
            { id: "brl2_test_5", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Erweitere 2/7 so, dass unten (im Nenner) 21 steht. Welche Zahl steht dann oben?",
                answers: ["6", "3", "14", "21"], correct: 0,
                explanation: "7 wurde mit 3 multipliziert (7×3=21), also auch den Zähler mit 3 multiplizieren: 2×3=6." },
            { id: "brl2_test_6", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Welcher Bruch ist gleichwertig zu 5/10?",
                answers: ["1/2", "1/5", "2/5", "10/5"], correct: 0,
                explanation: "5/10 durch 5 gekürzt: 5÷5=1, 10÷5=2 → 1/2." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "bruch_k5_l3",
        kurs: "bruchrechnen_k5",
        order: 3,
        icon: "⚖️",
        title: "Brüche vergleichen",
        kurz: "Größer, kleiner oder gleich?",
        erklaerung: {
            intro: "Um zwei Brüche zu vergleichen, schaust du zuerst auf den <b>Nenner</b>. Haben beide Brüche den <b>gleichen Nenner</b>, ist der Bruch mit dem größeren Zähler größer. Sind die Nenner <b>unterschiedlich</b>, bringst du beide Brüche zuerst auf denselben Nenner (erweitern) und vergleichst dann die Zähler.",
            beispiele: [
                "⚖️ Gleicher Nenner: 3/8 und 5/8 haben denselben Nenner. Da 5 > 3, ist <b>5/8 größer</b> als 3/8.",
                "⚖️ Unterschiedlicher Nenner: 1/2 und 1/3 – erweitert: 1/2 = 3/6, 1/3 = 2/6. Da 3 > 2, ist <b>1/2 größer</b> als 1/3."
            ],
            merksatz: "Bei gleichem Zähler gilt: Je größer der Nenner, desto KLEINER ist der Bruchteil – denn mehr Teile bedeuten kleinere Stücke!"
        },
        uebung: {
            leicht: [
                { id: "brl3u_leicht_1", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Welcher dieser Brüche ist der größte: 3/7, 5/7, 2/7 oder 6/7?",
                    answers: ["6/7", "5/7", "3/7", "2/7"], correct: 0,
                    explanation: "Alle haben den Nenner 7 – dann ist der Bruch mit dem größten Zähler am größten: 6/7." },
                { id: "brl3u_leicht_2", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Zwei Brüche haben denselben Nenner (z. B. 3/8 und 5/8). Der Bruch mit dem ___ Zähler ist größer. Welches Wort passt in die Lücke?",
                    answers: ["größeren", "kleineren", "geraden", "ungeraden"], correct: 0,
                    explanation: "Bei gleichem Nenner entscheidet der Zähler – größerer Zähler bedeutet größerer Bruch." },
                { id: "brl3u_leicht_3", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "1/4 und 3/4 – welcher Bruch ist kleiner?",
                    answers: ["1/4", "3/4", "Beide gleich", "Nicht vergleichbar"], correct: 0,
                    explanation: "Gleicher Nenner (4), 1 < 3, also ist 1/4 kleiner." },
                { id: "brl3u_leicht_4", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Zwei gleich große Pizzen werden beide in 6 Stücke geteilt. Lea isst 2 Stücke, Ben isst 4 Stücke. Wer hat mehr gegessen?",
                    answers: ["Ben (4/6)", "Lea (2/6)", "Beide gleich viel", "Kann man nicht sagen"], correct: 0,
                    explanation: "Gleicher Nenner (6), 4 > 2, also hat Ben mehr gegessen." }
            ],
            mittel: [
                { id: "brl3u_mittel_1", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "1/2 und 1/4 – welcher Bruch ist größer?",
                    answers: ["1/2", "1/4", "Beide gleich groß", "Nicht vergleichbar"], correct: 0,
                    explanation: "Gleicher Zähler (1), aber 1/2 hat weniger, dafür größere Teile als 1/4 – also ist 1/2 größer." },
                { id: "brl3u_mittel_2", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Warum ist 1/8 kleiner als 1/3, obwohl 8 größer ist als 3?",
                    answers: ["Je mehr Teile, desto kleiner ist jedes einzelne Stück", "Das stimmt nicht, 1/8 ist eigentlich größer als 1/3", "Der Zähler allein entscheidet über die Größe", "Größere Nenner ergeben automatisch größere Brüche"], correct: 0,
                    explanation: "Bei gleichem Zähler gilt: je größer der Nenner, desto kleiner der Bruchteil, weil das Ganze in mehr Teile geteilt wird." },
                { id: "brl3u_mittel_3", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Bringe 1/3 auf Sechstel. Was kommt raus?",
                    answers: ["2/6", "1/6", "3/6", "6/6"], correct: 0,
                    explanation: "1/3 mit 2 erweitert: (1×2)/(3×2) = 2/6." },
                { id: "brl3u_mittel_4", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Welcher Bruch ist größer: 2/5 oder 2/8?",
                    answers: ["2/5", "2/8", "Beide gleich groß", "Nicht vergleichbar"], correct: 0,
                    explanation: "Gleicher Zähler (2), aber 5 < 8 – weniger Teile bedeuten größere Stücke, also ist 2/5 größer." }
            ],
            schwer: [
                { id: "brl3u_schwer_1", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Vergleiche 3/4 und 5/6. Welcher Bruch ist größer?",
                    answers: ["5/6", "3/4", "Beide gleich groß", "Nicht vergleichbar"], correct: 0,
                    explanation: "Gemeinsamer Nenner 12: 3/4 = 9/12, 5/6 = 10/12. Da 10 > 9, ist 5/6 größer." },
                { id: "brl3u_schwer_2", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Vergleiche 2/3 und 3/5. Welcher Bruch ist größer?",
                    answers: ["2/3", "3/5", "Beide gleich groß", "Nicht vergleichbar"], correct: 0,
                    explanation: "Gemeinsamer Nenner 15: 2/3 = 10/15, 3/5 = 9/15. Da 10 > 9, ist 2/3 größer." },
                { id: "brl3u_schwer_3", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Ordne der Größe nach, beginnend mit dem kleinsten: 1/2, 1/5, 1/3",
                    answers: ["1/5, 1/3, 1/2", "1/2, 1/3, 1/5", "1/3, 1/5, 1/2", "1/2, 1/5, 1/3"], correct: 0,
                    explanation: "Gleicher Zähler (1) – je größer der Nenner, desto kleiner der Bruch: 1/5 < 1/3 < 1/2." },
                { id: "brl3u_schwer_4", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Mia sagt: '5/6 ist kleiner als 4/5, weil 5 kleiner ist als 6.' Stimmt das?",
                    answers: ["Nein, 5/6 ist größer: 25/30 gegen 24/30", "Ja, 4/5 ist größer: 24/30 gegen 25/30", "Beide sind gleich groß, nämlich 24/30", "Das kann man ohne Rechnung nicht sagen"], correct: 0,
                    explanation: "Gemeinsamer Nenner 30: 5/6 = 25/30, 4/5 = 24/30. Da 25 > 24, ist 5/6 größer – Mias Begründung war falsch." }
            ]
        },
        test: [
            { id: "brl3_test_1", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                question: "3/9 und 7/9 – welcher Bruch ist größer?",
                answers: ["7/9", "3/9", "Beide gleich", "Nicht vergleichbar"], correct: 0,
                explanation: "Gleicher Nenner (9), 7 > 3, also ist 7/9 größer." },
            { id: "brl3_test_2", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Zwei Brüche haben denselben Zähler (z. B. 1/4 und 1/8). Der Bruch mit dem ___ Nenner ist größer. Welches Wort passt in die Lücke?",
                answers: ["kleineren", "größeren", "geraden", "ungeraden"], correct: 0,
                explanation: "Bei gleichem Zähler gilt: kleinerer Nenner bedeutet größere Stücke, also größerer Bruch." },
            { id: "brl3_test_3", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                question: "Welcher Bruch ist größer: 1/4 oder 1/6?",
                answers: ["1/4", "1/6", "Beide gleich groß", "Nicht vergleichbar"], correct: 0,
                explanation: "Gleicher Zähler (1), 4 < 6, also ist 1/4 größer." },
            { id: "brl3_test_4", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Vergleiche 2/3 und 5/6. Welcher Bruch ist größer?",
                answers: ["5/6", "2/3", "Beide gleich groß", "Nicht vergleichbar"], correct: 0,
                explanation: "Gemeinsamer Nenner 6: 2/3 = 4/6, 5/6 bleibt 5/6. Da 5 > 4, ist 5/6 größer." },
            { id: "brl3_test_5", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Zwei gleich große Kuchen werden in 5 bzw. 10 Stücke geteilt. Wessen Stück ist größer: eins vom ersten oder eins vom zweiten Kuchen?",
                answers: ["Vom ersten Kuchen (weniger, dafür größere Stücke)", "Vom zweiten Kuchen, weil er in mehr Stücke geteilt wurde", "Beide Stücke sind gleich groß, egal wie geteilt wird", "Das kann man ohne weitere Angaben nicht sagen"], correct: 0,
                explanation: "1/5 ist größer als 1/10, weil der Kuchen in weniger Teile geteilt wurde." },
            { id: "brl3_test_6", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Vergleiche 3/8 und 1/2. Welcher Bruch ist größer?",
                answers: ["1/2", "3/8", "Beide gleich groß", "Nicht vergleichbar"], correct: 0,
                explanation: "Gemeinsamer Nenner 8: 1/2 = 4/8. Da 4 > 3, ist 1/2 größer als 3/8." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "bruch_k6_l1",
        kurs: "bruchrechnen_k6",
        order: 1,
        icon: "✖️",
        title: "Brüche multiplizieren",
        kurz: "Zähler mal Zähler, Nenner mal Nenner",
        erklaerung: {
            intro: "Zwei Brüche multiplizierst du, indem du <b>Zähler mal Zähler</b> und <b>Nenner mal Nenner</b> rechnest. Am Ende kürzt du das Ergebnis, wenn möglich.",
            beispiele: [
                "✖️ 2/3 × 1/4: Zähler: 2×1=2, Nenner: 3×4=12 → 2/12, gekürzt: <b>1/6</b>.",
                "✖️ 3/5 × 2/3: Zähler: 3×2=6, Nenner: 5×3=15 → 6/15, gekürzt: <b>2/5</b>."
            ],
            merksatz: "Bei der Multiplikation von Brüchen brauchst du KEINEN gemeinsamen Nenner – einfach Zähler mal Zähler und Nenner mal Nenner rechnen!"
        },
        uebung: {
            leicht: [
                { id: "brk6l1u_leicht_1", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Wie rechnet man 1/2 × 1/3?",
                    answers: ["Zähler mal Zähler, Nenner mal Nenner: 1/6", "Nenner gleichnamig machen, dann Zähler addieren", "Über Kreuz multiplizieren und addieren", "Zähler addieren, Nenner addieren"], correct: 0,
                    explanation: "Brüche multiplizieren: Zähler×Zähler, Nenner×Nenner: (1×1)/(2×3)=1/6." },
                { id: "brk6l1u_leicht_2", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Berechne: 1/4 × 1/2",
                    answers: ["1/8", "1/6", "2/6", "1/2"], correct: 0,
                    explanation: "Zähler: 1×1=1, Nenner: 4×2=8 → 1/8." },
                { id: "brk6l1u_leicht_3", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Berechne: 2/5 × 1/3",
                    answers: ["2/15", "3/8", "2/8", "3/15"], correct: 0,
                    explanation: "Zähler: 2×1=2, Nenner: 5×3=15 → 2/15." },
                { id: "brk6l1u_leicht_4", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Berechne: 1/3 × 1/3",
                    answers: ["1/9", "2/6", "1/6", "2/3"], correct: 0,
                    explanation: "Zähler: 1×1=1, Nenner: 3×3=9 → 1/9." }
            ],
            mittel: [
                { id: "brk6l1u_mittel_1", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Berechne und kürze: 2/3 × 3/4",
                    answers: ["1/2", "6/12", "5/7", "3/4"], correct: 0,
                    explanation: "Zähler: 2×3=6, Nenner: 3×4=12 → 6/12, gekürzt: 1/2." },
                { id: "brk6l1u_mittel_2", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Berechne und kürze: 3/4 × 2/3",
                    answers: ["1/2", "6/12", "5/7", "1/4"], correct: 0,
                    explanation: "Zähler: 3×2=6, Nenner: 4×3=12 → 6/12, gekürzt: 1/2." },
                { id: "brk6l1u_mittel_3", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Berechne und kürze: 2/3 × 3/5",
                    answers: ["2/5", "6/15", "5/8", "6/8"], correct: 0,
                    explanation: "Zähler: 2×3=6, Nenner: 3×5=15 → 6/15, gekürzt: 2/5." },
                { id: "brk6l1u_mittel_4", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Was ist 3/8 der Hälfte, also 3/8 × 1/2?",
                    answers: ["3/16", "4/10", "3/10", "1/4"], correct: 0,
                    explanation: "Zähler: 3×1=3, Nenner: 8×2=16 → 3/16." }
            ],
            schwer: [
                { id: "brk6l1u_schwer_1", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Berechne und kürze vollständig: 4/9 × 3/8",
                    answers: ["1/6", "12/72", "7/17", "32/27"], correct: 0,
                    explanation: "Zähler: 4×3=12, Nenner: 9×8=72 → 12/72, vollständig gekürzt: 1/6." },
                { id: "brk6l1u_schwer_2", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Ben rechnet 2/3 × 3/4, indem er die Nenner erst gleichnamig macht und dann die Zähler multipliziert. Ist das der richtige Weg?",
                    answers: ["Nein, bei der Multiplikation braucht man keinen gemeinsamen Nenner", "Ja, genau so ist es tatsächlich völlig richtig gerechnet worden", "Nein, man muss stattdessen nur die beiden Zähler addieren", "Nein, man muss die Brüche vorher immer zuerst kürzen"], correct: 0,
                    explanation: "Bei der Multiplikation von Brüchen rechnet man direkt Zähler×Zähler und Nenner×Nenner – kein gemeinsamer Nenner nötig." },
                { id: "brk6l1u_schwer_3", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Ein Rezept braucht 2/3 einer Tasse Mehl. Du willst nur die Hälfte des Rezepts backen. Wie viel Mehl brauchst du (als Bruch, gekürzt)?",
                    answers: ["1/3 Tasse", "4/3 Tasse", "1/6 Tasse", "2/3 Tasse"], correct: 0,
                    explanation: "2/3 × 1/2 = 2/6, gekürzt: 1/3 Tasse." },
                { id: "brk6l1u_schwer_4", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Multipliziere 5/6 × 6/5 und kürze das Ergebnis so weit wie möglich.",
                    answers: ["1", "30/30", "25/36", "36/25"], correct: 0,
                    explanation: "Zähler: 5×6=30, Nenner: 6×5=30 → 30/30, das ist ein Ganzes: 1." }
            ]
        },
        test: [
            { id: "brk6l1_test_1", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Wie multipliziert man zwei Brüche?",
                answers: ["Zähler mal Zähler, Nenner mal Nenner", "Erst gleichnamig machen, dann addieren", "Über Kreuz multiplizieren und kürzen", "Zähler mal Nenner, Nenner mal Zähler"], correct: 0,
                explanation: "Brüche multiplizieren: Zähler×Zähler, Nenner×Nenner – kein gemeinsamer Nenner nötig." },
            { id: "brk6l1_test_2", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                question: "Berechne: 1/2 × 1/4",
                answers: ["1/8", "1/6", "2/6", "1/4"], correct: 0,
                explanation: "Zähler: 1×1=1, Nenner: 2×4=8 → 1/8." },
            { id: "brk6l1_test_3", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Berechne und kürze: 2/4 × 2/3",
                answers: ["1/3", "4/12", "4/7", "2/3"], correct: 0,
                explanation: "Zähler: 2×2=4, Nenner: 4×3=12 → 4/12, gekürzt: 1/3." },
            { id: "brk6l1_test_4", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Berechne und kürze: 3/7 × 2/3",
                answers: ["2/7", "6/21", "5/10", "6/10"], correct: 0,
                explanation: "Zähler: 3×2=6, Nenner: 7×3=21 → 6/21, gekürzt: 2/7." },
            { id: "brk6l1_test_5", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Ein Glas ist 3/4 voll. Du trinkst die Hälfte davon aus. Wie viel Glas hast du getrunken (als Bruch)?",
                answers: ["3/8", "3/2", "1/2", "3/6"], correct: 0,
                explanation: "3/4 × 1/2 = 3/8." },
            { id: "brk6l1_test_6", category: "kurs_bruch_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Berechne und kürze vollständig: 4/6 × 3/8",
                answers: ["1/4", "12/48", "7/14", "5/8"], correct: 0,
                explanation: "Zähler: 4×3=12, Nenner: 6×8=48 → 12/48, vollständig gekürzt: 1/4." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "bruch_k6_l2",
        kurs: "bruchrechnen_k6",
        order: 2,
        icon: "➗",
        title: "Brüche dividieren",
        kurz: "Mit dem Kehrwert multiplizieren",
        erklaerung: {
            intro: "Um durch einen Bruch zu teilen, drehst du den zweiten Bruch um (das ist der <b>Kehrwert</b>, auch Kehrbruch genannt) und multiplizierst dann ganz normal.",
            beispiele: [
                "➗ 1/2 ÷ 1/4: Kehrwert von 1/4 ist 4/1. Also: 1/2 × 4/1 = 4/2 = <b>2</b>.",
                "➗ 2/3 ÷ 3/5: Kehrwert von 3/5 ist 5/3. Also: 2/3 × 5/3 = <b>10/9</b>."
            ],
            merksatz: "Teilen durch einen Bruch = Multiplizieren mit dem Kehrwert (Zähler und Nenner vertauschen)!"
        },
        uebung: {
            leicht: [
                { id: "brk6l2u_leicht_1", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Was ist der Kehrwert von 2/5?",
                    answers: ["5/2", "2/5", "5/5", "1/10"], correct: 0,
                    explanation: "Beim Kehrwert vertauscht man Zähler und Nenner: aus 2/5 wird 5/2." },
                { id: "brk6l2u_leicht_2", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Wie rechnet man 1/2 ÷ 1/3?",
                    answers: ["1/2 mit dem Kehrwert von 1/3 malnehmen", "1/3 mit dem Kehrwert von 1/2 malnehmen", "1/2 und 1/3 einfach direkt addieren", "Zähler durch Zähler, Nenner durch Nenner"], correct: 0,
                    explanation: "Teilen durch einen Bruch heißt: mit dem Kehrwert des zweiten Bruchs (des Divisors) multiplizieren." },
                { id: "brk6l2u_leicht_3", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Berechne: 1/2 ÷ 1/4",
                    answers: ["2", "1/8", "4", "1/2"], correct: 0,
                    explanation: "1/2 ÷ 1/4 = 1/2 × 4/1 = 4/2 = 2." },
                { id: "brk6l2u_leicht_4", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Berechne: 1/3 ÷ 1/2",
                    answers: ["2/3", "1/6", "3/2", "1/2"], correct: 0,
                    explanation: "1/3 ÷ 1/2 = 1/3 × 2/1 = 2/3." }
            ],
            mittel: [
                { id: "brk6l2u_mittel_1", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Berechne: 2/3 ÷ 1/3",
                    answers: ["2", "2/9", "3/6", "3"], correct: 0,
                    explanation: "2/3 ÷ 1/3 = 2/3 × 3/1 = 6/3 = 2." },
                { id: "brk6l2u_mittel_2", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Berechne: 3/4 ÷ 2/3",
                    answers: ["9/8", "6/12", "5/7", "8/9"], correct: 0,
                    explanation: "3/4 ÷ 2/3 = 3/4 × 3/2 = 9/8." },
                { id: "brk6l2u_mittel_3", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Berechne und kürze: 2/5 ÷ 4/5",
                    answers: ["1/2", "10/20", "8/25", "5/2"], correct: 0,
                    explanation: "2/5 ÷ 4/5 = 2/5 × 5/4 = 10/20, gekürzt: 1/2." },
                { id: "brk6l2u_mittel_4", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Du hast 3/4 Liter Saft und willst ihn in Gläser mit je 1/8 Liter füllen. Wie viele Gläser werden voll?",
                    answers: ["6", "8", "3", "4"], correct: 0,
                    explanation: "3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6 Gläser." }
            ],
            schwer: [
                { id: "brk6l2u_schwer_1", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Berechne und kürze vollständig: 5/6 ÷ 10/9",
                    answers: ["3/4", "45/60", "15/16", "1/2"], correct: 0,
                    explanation: "5/6 ÷ 10/9 = 5/6 × 9/10 = 45/60, vollständig gekürzt: 3/4." },
                { id: "brk6l2u_schwer_2", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Emma sagt: 'Bei 2/3 ÷ 4/5 dreht man den ERSTEN Bruch um.' Hat sie recht?",
                    answers: ["Nein, man dreht den zweiten Bruch um, also den Divisor", "Ja, das stimmt genau so, wie sie es gesagt hat", "Nein, man muss dabei beide Brüche umdrehen", "Nein, man darf bei der Division gar nichts umdrehen"], correct: 0,
                    explanation: "Beim Teilen wird der zweite Bruch (der Divisor) umgedreht, nicht der erste." },
                { id: "brk6l2u_schwer_3", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Berechne: 5/8 ÷ 5/8",
                    answers: ["1", "0", "25/64", "10/16"], correct: 0,
                    explanation: "5/8 ÷ 5/8 = 5/8 × 8/5 = 40/40 = 1 – ein Bruch geteilt durch sich selbst ergibt immer 1." },
                { id: "brk6l2u_schwer_4", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Ein Kuchenteig-Rezept für 1 Kuchen braucht 4/5 kg Mehl. Du hast nur 2/5 kg Mehl. Für wie viele Kuchen reicht das?",
                    answers: ["1/2 Kuchen", "2 Kuchen", "8/25 Kuchen", "2/5 Kuchen"], correct: 0,
                    explanation: "2/5 ÷ 4/5 = 2/5 × 5/4 = 10/20, gekürzt: 1/2 – die Hälfte des Rezepts reicht." }
            ]
        },
        test: [
            { id: "brk6l2_test_1", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Wie teilt man durch einen Bruch?",
                answers: ["Mit dem Kehrwert des Divisors malnehmen", "Zähler durch Zähler, Nenner durch Nenner", "Beide Brüche zuerst gleichnamig machen", "Über Kreuz addieren und dann kürzen"], correct: 0,
                explanation: "Teilen durch einen Bruch heißt: mit dem Kehrwert (Kehrbruch) des Divisors multiplizieren." },
            { id: "brk6l2_test_2", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                question: "Was ist der Kehrwert von 3/7?",
                answers: ["7/3", "3/7", "7/7", "1/21"], correct: 0,
                explanation: "Zähler und Nenner vertauschen: aus 3/7 wird 7/3." },
            { id: "brk6l2_test_3", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                question: "Berechne: 1/2 ÷ 1/2",
                answers: ["1", "1/4", "2", "0"], correct: 0,
                explanation: "1/2 ÷ 1/2 = 1/2 × 2/1 = 2/2 = 1." },
            { id: "brk6l2_test_4", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Berechne und kürze: 3/5 ÷ 2/5",
                answers: ["3/2", "6/25", "5/10", "2/3"], correct: 0,
                explanation: "3/5 ÷ 2/5 = 3/5 × 5/2 = 15/10, gekürzt: 3/2." },
            { id: "brk6l2_test_5", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Berechne und kürze: 2/3 ÷ 4/9",
                answers: ["3/2", "18/12", "8/27", "1/2"], correct: 0,
                explanation: "2/3 ÷ 4/9 = 2/3 × 9/4 = 18/12, gekürzt: 3/2." },
            { id: "brk6l2_test_6", category: "kurs_bruch_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Du hast 5/6 einer Pizza übrig und teilst sie gerecht auf 5 Kinder auf. Wie groß ist das Stück pro Kind (als Bruch)?",
                answers: ["1/6", "1/5", "6", "5/1"], correct: 0,
                explanation: "5/6 ÷ 5 = 5/6 × 1/5 = 5/30, gekürzt: 1/6." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "rede_k5_l1",
        kurs: "woertliche_rede_k5",
        order: 1,
        icon: "💬",
        title: "Wörtliche Rede erkennen & schreiben",
        kurz: "Anführungszeichen & Satzzeichen",
        erklaerung: {
            intro: "Die <b>wörtliche Rede</b> gibt genau wieder, was jemand gesagt hat. Sie steht in <b>Anführungszeichen</b> („…“). Davor oder danach steht oft ein <b>Begleitsatz</b>, der erklärt, wer spricht.",
            beispiele: [
                "💬 Begleitsatz VOR der Rede: Mama sagt: „Das Essen ist fertig!“ – Nach dem Begleitsatz steht ein <b>Doppelpunkt</b>, dann die wörtliche Rede in Anführungszeichen.",
                "💬 Begleitsatz NACH der Rede: „Ich komme gleich“, sagt Paul. – Davor steht ein <b>Komma</b>, das Satzzeichen der Rede selbst (z. B. ! oder ?) bleibt innerhalb der Anführungszeichen."
            ],
            merksatz: "Begleitsatz VOR der Rede → Doppelpunkt. Begleitsatz NACH der Rede → Komma. Die wörtliche Rede selbst steht immer in Anführungszeichen!"
        },
        uebung: {
            leicht: [
                { id: "wrk5l1u_leicht_1", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "leicht", points: 10,
                    question: "Wie nennt man die genaue Wiedergabe dessen, was jemand gesagt hat?",
                    answers: ["Wörtliche Rede", "Ein Begleitsatz", "Ein Nebensatz", "Eine Aufzählung"], correct: 0,
                    explanation: "Die wörtliche Rede gibt genau wieder, was gesagt wurde – sie steht in Anführungszeichen." },
                { id: "wrk5l1u_leicht_2", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "leicht", points: 10,
                    question: "In welchem Satz ist die wörtliche Rede richtig markiert?",
                    answers: ["Lisa ruft: „Warte auf mich!“", "Lisa ruft: Warte auf mich!", "Lisa ruft „Warte auf mich“", "Lisa ruft: 'Warte auf mich'"], correct: 0,
                    explanation: "Die wörtliche Rede steht in Anführungszeichen („…“), nach dem Begleitsatz kommt ein Doppelpunkt." },
                { id: "wrk5l1u_leicht_3", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "leicht", points: 10,
                    question: "Was steht nach dem Begleitsatz, wenn er VOR der wörtlichen Rede steht?",
                    answers: ["Ein Doppelpunkt", "Ein Komma", "Ein Ausrufezeichen", "Gar nichts"], correct: 0,
                    explanation: "Begleitsatz vor der Rede → Doppelpunkt, dann die wörtliche Rede in Anführungszeichen." },
                { id: "wrk5l1u_leicht_4", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "leicht", points: 10,
                    question: "Was steht VOR dem Begleitsatz, wenn er NACH der wörtlichen Rede steht?",
                    answers: ["Ein Komma", "Ein Doppelpunkt", "Ein Semikolon", "Gar nichts"], correct: 0,
                    explanation: "Begleitsatz nach der Rede → davor steht ein Komma (innerhalb der Anführungszeichen bleibt das Satzzeichen der Rede erhalten)." }
            ],
            mittel: [
                { id: "wrk5l1u_mittel_1", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig geschrieben?",
                    answers: ["„Ich habe Hunger“, sagt Tim.", "„Ich habe Hunger.“ sagt Tim", "Ich habe Hunger, sagt Tim.", "„Ich habe Hunger“ sagt Tim."], correct: 0,
                    explanation: "Begleitsatz nach der Rede: vor 'sagt Tim' steht ein Komma, die Anführungszeichen umschließen die wörtliche Rede." },
                { id: "wrk5l1u_mittel_2", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig geschrieben?",
                    answers: ["Der Lehrer fragt: „Wer hat die Hausaufgaben gemacht?“", "Der Lehrer fragt „Wer hat die Hausaufgaben gemacht?“", "Der Lehrer fragt: Wer hat die Hausaufgaben gemacht?", "Der Lehrer fragt, „Wer hat die Hausaufgaben gemacht?“"], correct: 0,
                    explanation: "Begleitsatz vor der Rede → Doppelpunkt, dann die wörtliche Rede in Anführungszeichen mit eigenem Satzzeichen." },
                { id: "wrk5l1u_mittel_3", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "mittel", points: 10,
                    question: "In 'Er ruft: „Vorsicht!“' – welches Satzzeichen gehört zur wörtlichen Rede selbst?",
                    answers: ["Das Ausrufezeichen (!)", "Der Doppelpunkt (:)", "Beide gehören zum Begleitsatz", "Keins von beiden"], correct: 0,
                    explanation: "Das Ausrufezeichen steht innerhalb der Anführungszeichen und gehört zur wörtlichen Rede – der Doppelpunkt gehört zum Begleitsatz davor." },
                { id: "wrk5l1u_mittel_4", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "mittel", points: 10,
                    question: "Wo steht der Begleitsatz in: '„Komm her“, rief sie laut.'?",
                    answers: ["Nach der wörtlichen Rede", "Vor der wörtlichen Rede", "Mitten in der wörtlichen Rede", "Es gibt keinen Begleitsatz"], correct: 0,
                    explanation: "'rief sie laut' steht nach der wörtlichen Rede, deshalb steht davor ein Komma." }
            ],
            schwer: [
                { id: "wrk5l1u_schwer_1", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "schwer", points: 10,
                    question: "Welcher Satz hat einen Begleitsatz MITTEN in der wörtlichen Rede?",
                    answers: ["„Ich weiß“, sagte er, „dass du recht hast.“", "„Ich weiß, dass du recht hast“, sagte er.", "Er sagte: „Ich weiß, dass du recht hast.“", "„Ich weiß, dass du recht hast.“"], correct: 0,
                    explanation: "Bei einem Begleitsatz mittendrin wird die wörtliche Rede unterbrochen: davor und danach je ein Komma, beide Teile stehen in eigenen Anführungszeichen." },
                { id: "wrk5l1u_schwer_2", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "schwer", points: 10,
                    question: "Finde den Fehler: 'Er fragte, „Kommst du mit?“'",
                    answers: ["Vor der Rede muss ein Doppelpunkt stehen, kein Komma: Er fragte: „Kommst du mit?“", "Der Satz ist schon vollständig richtig, hier ist wirklich keine Änderung nötig", "Das Fragezeichen steht eigentlich an der völlig falschen Stelle im Satz", "Es fehlen einfach nur die Anführungszeichen um die ganze wörtliche Rede"], correct: 0,
                    explanation: "Steht der Begleitsatz vor der Rede, kommt ein Doppelpunkt, kein Komma." },
                { id: "wrk5l1u_schwer_3", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "schwer", points: 10,
                    question: "Finde den Fehler: '„Pass auf“ rief Mama.'",
                    answers: ["Vor 'rief Mama' fehlt ein Komma – richtig: „Pass auf“, rief Mama.", "Der Satz ist eigentlich schon komplett richtig so geschrieben", "Die Anführungszeichen stehen leider an der ganz falschen Stelle", "Es fehlt hier noch ein Doppelpunkt vor der wörtlichen Rede"], correct: 0,
                    explanation: "Begleitsatz nach der Rede → davor muss ein Komma stehen." },
                { id: "wrk5l1u_schwer_4", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "schwer", points: 10,
                    question: "Welche Aussage über Anführungszeichen ist richtig?",
                    answers: ["Sie umschließen genau das, was wörtlich gesagt wurde", "Sie stehen ausschließlich am Anfang des Satzes", "Sie ersetzen immer den Punkt am Ende des Satzes", "Man braucht sie nur bei Fragesätzen mit Fragezeichen"], correct: 0,
                    explanation: "Anführungszeichen markieren den genauen Wortlaut der wörtlichen Rede – bei Aussagen, Fragen und Ausrufen gleichermaßen." }
            ]
        },
        test: [
            { id: "wrk5l1_test_1", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "leicht", points: 10,
                question: "Was steht immer um die wörtliche Rede herum?",
                answers: ["Anführungszeichen", "Runde Klammern", "Nur Kommas", "Nur Doppelpunkte"], correct: 0,
                explanation: "Die wörtliche Rede steht immer in Anführungszeichen." },
            { id: "wrk5l1_test_2", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "mittel", points: 10,
                question: "Begleitsatz VOR der Rede → welches Satzzeichen folgt?",
                answers: ["Doppelpunkt", "Komma", "Semikolon", "Gedankenstrich"], correct: 0,
                explanation: "Begleitsatz vor der Rede → Doppelpunkt." },
            { id: "wrk5l1_test_3", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "mittel", points: 10,
                question: "Begleitsatz NACH der Rede → welches Satzzeichen steht davor?",
                answers: ["Komma", "Doppelpunkt", "Semikolon", "Kein Satzzeichen"], correct: 0,
                explanation: "Begleitsatz nach der Rede → davor steht ein Komma." },
            { id: "wrk5l1_test_4", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "leicht", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["Anna flüstert: „Sei leise.“", "Anna flüstert „Sei leise.“", "Anna flüstert, „Sei leise.“", "Anna flüstert: Sei leise."], correct: 0,
                explanation: "Begleitsatz vor der Rede → Doppelpunkt, dann Anführungszeichen." },
            { id: "wrk5l1_test_5", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "mittel", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["„Ich bin müde“, gähnte Ben.", "„Ich bin müde.“ gähnte Ben", "Ich bin müde, gähnte Ben.", "„Ich bin müde“ gähnte Ben."], correct: 0,
                explanation: "Begleitsatz nach der Rede → davor ein Komma." },
            { id: "wrk5l1_test_6", category: "kurs_rede_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "woertliche_rede", difficulty: "schwer", points: 10,
                question: "In '„Halt!“, schrie der Polizist.' – zu welchem Teil gehört das Ausrufezeichen?",
                answers: ["Zur wörtlichen Rede", "Zum Begleitsatz", "Zu beiden Teilen", "Es ist ein Fehler im Satz"], correct: 0,
                explanation: "Das Ausrufezeichen steht innerhalb der Anführungszeichen und gehört zur wörtlichen Rede selbst." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "sp_k5_l1",
        kurs: "simple_present_k5",
        order: 1,
        icon: "🕐",
        title: "Simple Present – Grundform",
        kurz: "Verb+s bei he/she/it",
        erklaerung: {
            intro: "Das <b>Simple Present</b> benutzt du für Dinge, die regelmäßig passieren oder immer wahr sind. Bei <b>he, she, it</b> (3. Person Singular) hängst du ein <b>-s</b> an das Verb an.",
            beispiele: [
                "🕐 I play football every day. → Sie spielt jeden Tag: <b>She plays</b> football every day. (play + s = plays)",
                "🌞 The sun rises in the east. (Tatsache, deshalb: rise + s = rises)"
            ],
            merksatz: "Nur bei he/she/it kommt ein -s ans Verb! Bei I/you/we/they bleibt das Verb ohne -s."
        },
        uebung: {
            leicht: [
                { id: "spk5l1u_leicht_1", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "leicht", points: 10,
                    question: "Wofür benutzt man das Simple Present?",
                    answers: ["Für regelmäßige Handlungen und Fakten", "Nur für Pläne in der nahen Zukunft", "Nur für Ereignisse von letzter Woche", "Nur für Handlungen in diesem Moment"], correct: 0,
                    explanation: "Simple Present beschreibt Gewohnheiten, regelmäßige Handlungen und allgemeine Fakten." },
                { id: "spk5l1u_leicht_2", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "leicht", points: 10,
                    question: "Bei welchem Pronomen bekommt das Verb ein -s?",
                    answers: ["he/she/it", "I", "you", "we/they"], correct: 0,
                    explanation: "Nur in der 3. Person Singular (he/she/it) wird ein -s ans Verb gehängt." },
                { id: "spk5l1u_leicht_3", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "leicht", points: 10,
                    question: "Wie heißt 'she play' richtig im Simple Present?",
                    answers: ["she plays", "she playing", "she played", "she to play"], correct: 0,
                    explanation: "Bei she kommt ein -s ans Verb: play → plays." },
                { id: "spk5l1u_leicht_4", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "leicht", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["He likes pizza.", "He like pizza.", "He liking pizza.", "He is like pizza."], correct: 0,
                    explanation: "Bei he kommt ein -s ans Verb: like → likes." }
            ],
            mittel: [
                { id: "spk5l1u_mittel_1", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["They play football every weekend.", "They plays football every weekend.", "They played football every weekend.", "They is play football every weekend."], correct: 0,
                    explanation: "Bei they bleibt das Verb ohne -s: play (nicht plays)." },
                { id: "spk5l1u_mittel_2", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'go' richtig für 'it'?",
                    answers: ["goes", "gos", "going", "go"], correct: 0,
                    explanation: "Verben, die auf -o enden, bekommen -es statt nur -s: go → goes." },
                { id: "spk5l1u_mittel_3", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist ein typisches Signalwort für Simple Present?",
                    answers: ["usually", "yesterday", "last week", "tomorrow"], correct: 0,
                    explanation: "'usually' (gewöhnlich) zeigt eine regelmäßige Handlung an – typisch für Simple Present." },
                { id: "spk5l1u_mittel_4", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'watch' richtig für 'she'?",
                    answers: ["watches", "watchs", "watchies", "watch"], correct: 0,
                    explanation: "Verben, die auf -ch enden, bekommen -es: watch → watches." }
            ],
            schwer: [
                { id: "spk5l1u_schwer_1", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "schwer", points: 10,
                    question: "Finde den Fehler: 'My brother do his homework every day.'",
                    answers: ["Es muss 'does' statt 'do' heißen (my brother = he)", "Der Satz ist schon komplett richtig geschrieben", "'homework' muss im Satz 'homeworks' heißen", "'every day' steht an der falschen Stelle im Satz"], correct: 0,
                    explanation: "'My brother' entspricht 'he' – deshalb: does statt do." },
                { id: "spk5l1u_schwer_2", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "schwer", points: 10,
                    question: "Welches Verb bekommt -es (nicht nur -s) im Simple Present bei he/she/it?",
                    answers: ["wash → washes", "play → plays", "run → runs", "swim → swims"], correct: 0,
                    explanation: "Verben, die auf -sh, -ch, -ss, -x oder -o enden, bekommen -es: wash → washes." },
                { id: "spk5l1u_schwer_3", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "schwer", points: 10,
                    question: "Was ist bei 'study' für 'she' zu beachten?",
                    answers: ["Das y wird zu ie: she studies", "Nur ein -s anhängen: she studys", "Das y bleibt, nur -es: she studyes", "Keine Änderung nötig"], correct: 0,
                    explanation: "Endet ein Verb auf Konsonant + y, wird das y zu ie, dann -s: study → studies." },
                { id: "spk5l1u_schwer_4", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "schwer", points: 10,
                    question: "Ben sagt: 'She don't like coffee.' Was ist falsch?",
                    answers: ["Es muss 'doesn't' statt 'don't' heißen (she = 3. Person)", "Der Satz ist eigentlich schon richtig so, keine Änderung nötig", "'coffee' muss im Satz eigentlich großgeschrieben werden", "'like' muss dabei zusätzlich noch zu 'likes' werden"], correct: 0,
                    explanation: "Bei he/she/it wird die Verneinung mit doesn't gebildet, nicht don't." }
            ]
        },
        test: [
            { id: "spk5l1_test_1", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "leicht", points: 10,
                question: "Wann benutzt man das Simple Present?",
                answers: ["Für regelmäßige Handlungen und Fakten", "Nur für Pläne in der fernen Zukunft", "Nur für einmalige Ereignisse gestern", "Nur für Wünsche und höfliche Bitten"], correct: 0,
                explanation: "Simple Present beschreibt Gewohnheiten und allgemeine Fakten." },
            { id: "spk5l1_test_2", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "leicht", points: 10,
                question: "Bei welchem Pronomen bekommt das Verb ein -s?",
                answers: ["he/she/it", "I", "you", "we/they"], correct: 0,
                explanation: "Nur in der 3. Person Singular (he/she/it)." },
            { id: "spk5l1_test_3", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "mittel", points: 10,
                question: "Wie heißt 'watch' richtig für 'he'?",
                answers: ["watches", "watchs", "watch", "watching"], correct: 0,
                explanation: "Verben auf -ch bekommen -es: watch → watches." },
            { id: "spk5l1_test_4", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "mittel", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["We play tennis on Sundays.", "We plays tennis on Sundays.", "We played tennis on Sundays.", "We is play tennis on Sundays."], correct: 0,
                explanation: "Bei we bleibt das Verb ohne -s." },
            { id: "spk5l1_test_5", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "schwer", points: 10,
                question: "Finde den Fehler: 'The dog run in the garden every morning.'",
                answers: ["Es muss 'runs' heißen (the dog = it)", "Der Satz ist schon richtig so geschrieben", "'garden' muss im Satz 'gardens' heißen", "'every morning' steht an der falschen Stelle"], correct: 0,
                explanation: "'The dog' entspricht 'it' – deshalb: runs statt run." },
            { id: "spk5l1_test_6", category: "kurs_sp_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_present", difficulty: "schwer", points: 10,
                question: "Wie verneint man im Simple Present bei 'she'?",
                answers: ["She doesn't like tea.", "She don't like tea.", "She not like tea.", "She isn't like tea."], correct: 0,
                explanation: "Bei he/she/it wird mit doesn't verneint." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "foto_k6_l1",
        kurs: "fotosynthese_k6",
        order: 1,
        icon: "🌱",
        title: "Fotosynthese – wie Pflanzen Energie herstellen",
        kurz: "Licht, Wasser, CO2 → Zucker & Sauerstoff",
        erklaerung: {
            intro: "Bei der <b>Fotosynthese</b> stellen Pflanzen mithilfe von <b>Sonnenlicht</b> ihre eigene Energie her. Sie nehmen <b>Wasser</b> (aus den Wurzeln) und <b>Kohlenstoffdioxid (CO2)</b> (aus der Luft) auf und wandeln beides in den Blättern in <b>Traubenzucker (Glukose)</b> um. Als Nebenprodukt entsteht <b>Sauerstoff</b>, den die Pflanze abgibt.",
            beispiele: [
                "🌞 Als Wortgleichung: Wasser + Kohlenstoffdioxid + Licht → Traubenzucker + Sauerstoff.",
                "🍃 Die Fotosynthese findet in den Blättern statt, genauer im <b>Blattgrün (Chlorophyll)</b> – dem grünen Farbstoff, der das Sonnenlicht einfängt."
            ],
            merksatz: "Pflanzen atmen nicht nur wie wir – sie stellen mit der Fotosynthese auch ihre eigene Nahrung her, und dabei entsteht der Sauerstoff, den wir zum Atmen brauchen!"
        },
        uebung: {
            leicht: [
                { id: "fotk6l1u_leicht_1", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "leicht", points: 10,
                    question: "Was braucht eine Pflanze für die Fotosynthese?",
                    answers: ["Licht, Wasser und Kohlenstoffdioxid", "Nur Wasser und sonst nichts weiter", "Nur Licht und sonst nichts weiter", "Sauerstoff und Zucker aus der Luft"], correct: 0,
                    explanation: "Für die Fotosynthese braucht die Pflanze Sonnenlicht, Wasser und Kohlenstoffdioxid (CO2)." },
                { id: "fotk6l1u_leicht_2", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "leicht", points: 10,
                    question: "Was stellt die Pflanze bei der Fotosynthese her?",
                    answers: ["Traubenzucker und Sauerstoff", "Nur Wasser und sonst gar nichts", "Nur Kohlenstoffdioxid aus der Luft", "Nur Sonnenlicht ohne weitere Stoffe"], correct: 0,
                    explanation: "Bei der Fotosynthese entstehen Traubenzucker (Glukose) und Sauerstoff." },
                { id: "fotk6l1u_leicht_3", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "leicht", points: 10,
                    question: "Wo findet die Fotosynthese hauptsächlich statt?",
                    answers: ["In den Blättern", "In den Wurzeln", "Im Stamm", "In der Blüte"], correct: 0,
                    explanation: "Die Fotosynthese findet vor allem in den grünen Blättern statt." },
                { id: "fotk6l1u_leicht_4", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "leicht", points: 10,
                    question: "Wie heißt der grüne Farbstoff, der Sonnenlicht einfängt?",
                    answers: ["Chlorophyll (Blattgrün)", "Zellulose, der Stoff in Pflanzenwänden", "Glukose, der Traubenzucker der Pflanze", "Chitin, ein Stoff aus Insektenpanzern"], correct: 0,
                    explanation: "Chlorophyll, auch Blattgrün genannt, fängt das Sonnenlicht ein." }
            ],
            mittel: [
                { id: "fotk6l1u_mittel_1", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "mittel", points: 10,
                    question: "Woher bekommt die Pflanze das Wasser für die Fotosynthese?",
                    answers: ["Über die Wurzeln aus dem Boden", "Direkt aus der Luft um die Blätter", "Aus dem Sonnenlicht, das auf sie scheint", "Aus dem Sauerstoff, den sie selbst herstellt"], correct: 0,
                    explanation: "Die Wurzeln nehmen Wasser aus dem Boden auf und leiten es zu den Blättern." },
                { id: "fotk6l1u_mittel_2", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "mittel", points: 10,
                    question: "Woher bekommt die Pflanze das Kohlenstoffdioxid (CO2)?",
                    answers: ["Aus der Luft", "Aus dem Boden", "Aus dem Wasser", "Aus dem Sonnenlicht"], correct: 0,
                    explanation: "Pflanzen nehmen CO2 aus der Luft über kleine Öffnungen in den Blättern auf." },
                { id: "fotk6l1u_mittel_3", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "mittel", points: 10,
                    question: "Was passiert mit dem Sauerstoff, der bei der Fotosynthese entsteht?",
                    answers: ["Er wird von der Pflanze an die Luft abgegeben", "Er bleibt dauerhaft in den Wurzeln gespeichert", "Er verwandelt sich sofort wieder in Wasser", "Er verschwindet einfach spurlos ins Nichts"], correct: 0,
                    explanation: "Der bei der Fotosynthese entstehende Sauerstoff wird über die Blätter an die Luft abgegeben." },
                { id: "fotk6l1u_mittel_4", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "mittel", points: 10,
                    question: "Warum ist die Fotosynthese für uns Menschen wichtig?",
                    answers: ["Sie liefert den Sauerstoff, den wir zum Atmen brauchen", "Sie macht das Wetter draußen wärmer und viel sonniger", "Sie erzeugt sauberes Trinkwasser für uns alle Menschen", "Sie hat eigentlich gar keine Bedeutung für uns Menschen"], correct: 0,
                    explanation: "Der bei der Fotosynthese freigesetzte Sauerstoff ist lebenswichtig für Menschen und Tiere." }
            ],
            schwer: [
                { id: "fotk6l1u_schwer_1", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "schwer", points: 10,
                    question: "Was ist die richtige Wortgleichung der Fotosynthese?",
                    answers: ["Wasser + Kohlenstoffdioxid + Licht → Traubenzucker + Sauerstoff", "Traubenzucker + Sauerstoff → Wasser + Kohlenstoffdioxid", "Licht + Sauerstoff → Wasser + Zucker, ganz ohne CO2 dabei", "Wasser + Zucker → Licht + Kohlenstoffdioxid als Abfallprodukt"], correct: 0,
                    explanation: "Die Fotosynthese wandelt Wasser, CO2 und Licht in Traubenzucker und Sauerstoff um." },
                { id: "fotk6l1u_schwer_2", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "schwer", points: 10,
                    question: "Was würde passieren, wenn eine Pflanze kein Sonnenlicht mehr bekommt?",
                    answers: ["Sie könnte keine Fotosynthese mehr betreiben und würde langfristig absterben", "Nichts würde sich grundsätzlich verändern, die Pflanze bliebe weiterhin gesund", "Sie würde dabei sogar noch deutlich mehr Sauerstoff produzieren als vorher", "Sie würde dadurch sogar noch viel schneller wachsen als im Licht"], correct: 0,
                    explanation: "Ohne Licht kann keine Fotosynthese stattfinden – der Pflanze fehlt dann die Energiequelle." },
                { id: "fotk6l1u_schwer_3", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "schwer", points: 10,
                    question: "Ben sagt: 'Pflanzen atmen nicht, nur Fotosynthese zählt.' Stimmt das?",
                    answers: ["Nein, Pflanzen atmen zusätzlich auch – das sind zwei verschiedene Vorgänge", "Ja, das stimmt ganz genau, Pflanzen atmen tatsächlich überhaupt nicht", "Nein, Pflanzen betreiben eigentlich nur Atmung und niemals Fotosynthese", "Beide Vorgänge sind eigentlich genau dasselbe und laufen immer gleichzeitig"], correct: 0,
                    explanation: "Pflanzen betreiben sowohl Fotosynthese (bei Licht) als auch Zellatmung (ständig) – das sind zwei unterschiedliche Vorgänge." },
                { id: "fotk6l1u_schwer_4", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "schwer", points: 10,
                    question: "Warum sind die meisten Blätter grün?",
                    answers: ["Weil sie Chlorophyll enthalten, das grünes Licht reflektiert", "Weil sie eigentlich überhaupt kein Sonnenlicht zum Wachsen brauchen", "Weil sie hauptsächlich nur aus Wasser und Luft bestehen", "Weil sie keinen Sauerstoff, sondern nur reines CO2 produzieren"], correct: 0,
                    explanation: "Chlorophyll absorbiert vor allem rotes und blaues Licht und reflektiert grünes Licht – deshalb erscheinen Blätter grün." }
            ]
        },
        test: [
            { id: "fotk6l1_test_1", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "leicht", points: 10,
                question: "Welche drei Dinge braucht eine Pflanze für die Fotosynthese?",
                answers: ["Licht, Wasser, Kohlenstoffdioxid", "Nur Licht und Sauerstoff, sonst nichts weiter", "Nur Wasser und Zucker, sonst nichts weiter", "Erde, Sand und Steine aus dem Boden"], correct: 0,
                explanation: "Licht, Wasser und CO2 sind die drei Zutaten der Fotosynthese." },
            { id: "fotk6l1_test_2", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "leicht", points: 10,
                question: "Was entsteht bei der Fotosynthese?",
                answers: ["Traubenzucker und Sauerstoff", "Nur Wasser, sonst entsteht nichts weiter", "Nur Kohlenstoffdioxid, sonst nichts weiter", "Erde und Steine aus dem Blumentopf"], correct: 0,
                explanation: "Bei der Fotosynthese entstehen Traubenzucker und Sauerstoff." },
            { id: "fotk6l1_test_3", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "mittel", points: 10,
                question: "Wo in der Pflanze findet die Fotosynthese statt?",
                answers: ["In den Blättern", "In den Wurzeln", "Im Stamm", "In der Erde"], correct: 0,
                explanation: "Die Fotosynthese findet vor allem in den Blättern statt." },
            { id: "fotk6l1_test_4", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "mittel", points: 10,
                question: "Wie heißt der grüne Farbstoff in den Blättern?",
                answers: ["Chlorophyll", "Glukose", "Zellulose", "Nektar"], correct: 0,
                explanation: "Der grüne Farbstoff heißt Chlorophyll (Blattgrün)." },
            { id: "fotk6l1_test_5", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "schwer", points: 10,
                question: "Woher nimmt die Pflanze das CO2 auf?",
                answers: ["Aus der Luft", "Aus dem Boden", "Aus dem Wasser", "Aus dem Licht"], correct: 0,
                explanation: "Pflanzen nehmen CO2 aus der Luft auf." },
            { id: "fotk6l1_test_6", category: "kurs_foto_k6_l1", area: "schule", grade: 6, subject: "biologie", topic: "fotosynthese", difficulty: "schwer", points: 10,
                question: "Warum ist die Fotosynthese für Menschen wichtig?",
                answers: ["Sie produziert den Sauerstoff zum Atmen", "Sie sorgt dafür, dass es öfter regnet", "Sie erzeugt Erdöl tief unter der Erde", "Sie hat eigentlich gar keine Bedeutung"], correct: 0,
                explanation: "Der bei der Fotosynthese entstehende Sauerstoff ist lebenswichtig." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "sppa_k5_l1",
        kurs: "simple_past_k5",
        order: 1,
        icon: "⏳",
        title: "Simple Past – regelmäßige Verben",
        kurz: "Von der Gegenwart in die Vergangenheit mit -ed",
        erklaerung: {
            intro: "Das <b>Simple Past</b> benutzt du für Dinge, die in der Vergangenheit passiert und abgeschlossen sind. Bei regelmäßigen Verben hängst du einfach <b>-ed</b> an die Grundform an.",
            beispiele: [
                "⏳ play → played: Yesterday I <b>played</b> football. (play + ed = played)",
                "😊 like → liked: Endet das Verb schon auf -e, kommt nur ein <b>-d</b> dazu.",
                "📚 study → studied: Endet das Verb auf Konsonant + y, wird aus dem y ein i: stud<b>ied</b>.",
                "🛑 stop → stopped: Kurzer Vokal + ein Endkonsonant → der Konsonant wird verdoppelt."
            ],
            merksatz: "Grundregel: Verb + ed. Ausnahmen: nur -d nach e, y wird zu ied nach Konsonant+y, Verdopplung bei kurzem Vokal + Endkonsonant. Bei Fragen und Verneinung bleibt das Verb in der Grundform: did/didn't + Grundform (kein -ed!)."
        },
        uebung: {
            leicht: [
                { id: "sppak5l1u_leicht_1", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "leicht", points: 10,
                    question: "Wie lautet das Simple Past von 'walk'?",
                    answers: ["walked", "walkked", "waked", "walks"], correct: 0,
                    explanation: "Regelmäßige Verben bekommen im Simple Past ein -ed angehängt: walk → walked." },
                { id: "sppak5l1u_leicht_2", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "leicht", points: 10,
                    question: "Wie lautet das Simple Past von 'clean'?",
                    answers: ["cleaned", "cleanned", "cleaning", "cleans"], correct: 0,
                    explanation: "clean + ed = cleaned." },
                { id: "sppak5l1u_leicht_3", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "leicht", points: 10,
                    question: "Wie lautet das Simple Past von 'want'?",
                    answers: ["wanted", "wantted", "wands", "wanting"], correct: 0,
                    explanation: "want + ed = wanted." },
                { id: "sppak5l1u_leicht_4", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "leicht", points: 10,
                    question: "Wofür benutzt man das Simple Past?",
                    answers: ["Für abgeschlossene Handlungen in der Vergangenheit", "Nur für Dinge in der fernen Zukunft", "Für Dinge, die gerade genau jetzt passieren", "Nur für ganz allgemeine, zeitlose Fakten"], correct: 0,
                    explanation: "Simple Past beschreibt abgeschlossene Ereignisse in der Vergangenheit." }
            ],
            mittel: [
                { id: "sppak5l1u_mittel_1", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "mittel", points: 10,
                    question: "Wie lautet das Simple Past von 'like' (Verb endet auf -e)?",
                    answers: ["liked", "likeed", "likd", "likes"], correct: 0,
                    explanation: "Endet das Verb schon auf -e, kommt nur ein -d dazu: like → liked." },
                { id: "sppak5l1u_mittel_2", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "mittel", points: 10,
                    question: "Wie lautet das Simple Past von 'study' (Konsonant + y)?",
                    answers: ["studied", "studyed", "studies", "studdied"], correct: 0,
                    explanation: "Nach Konsonant + y wird aus dem y ein i: study → studied." },
                { id: "sppak5l1u_mittel_3", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "mittel", points: 10,
                    question: "Welches Signalwort passt typischerweise zum Simple Past?",
                    answers: ["yesterday", "usually", "every day", "tomorrow"], correct: 0,
                    explanation: "'yesterday' (gestern) zeigt einen abgeschlossenen Zeitpunkt in der Vergangenheit an." },
                { id: "sppak5l1u_mittel_4", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "mittel", points: 10,
                    question: "'Did you ___ football yesterday?' (play) – welche Form kommt in die Lücke?",
                    answers: ["play", "played", "plays", "playing"], correct: 0,
                    explanation: "Nach did steht das Verb in der Grundform, nicht im Past: Did you play...?" }
            ],
            schwer: [
                { id: "sppak5l1u_schwer_1", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "schwer", points: 10,
                    question: "Wie lautet das Simple Past von 'stop' (kurzer Vokal + Endkonsonant)?",
                    answers: ["stopped", "stoped", "stopeded", "stops"], correct: 0,
                    explanation: "Kurzer Vokal + ein Endkonsonant → der Konsonant wird verdoppelt: stop → stopped." },
                { id: "sppak5l1u_schwer_2", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "schwer", points: 10,
                    question: "Wie lautet das Simple Past von 'plan'?",
                    answers: ["planned", "planed", "plannned", "plans"], correct: 0,
                    explanation: "plan hat kurzen Vokal + Endkonsonant n → wird verdoppelt: plan → planned." },
                { id: "sppak5l1u_schwer_3", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "schwer", points: 10,
                    question: "Finde den Fehler: 'Yesterday, we studyed English for two hours.'",
                    answers: ["'studyed' ist falsch, richtig ist 'studied' (y wird zu ied)", "Der Satz ist eigentlich schon ganz richtig so geschrieben", "'Yesterday' passt hier eigentlich gar nicht in den Satz", "'for two hours' steht an der ganz falschen Stelle"], correct: 0,
                    explanation: "Nach Konsonant + y wird aus dem y ein i: study → studied, nicht studyed." },
                { id: "sppak5l1u_schwer_4", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "schwer", points: 10,
                    question: "Ben sagt: 'She walk to school yesterday.' Was ist falsch?",
                    answers: ["Es muss 'walked' statt 'walk' heißen (Vergangenheit)", "Der Satz ist eigentlich schon ganz richtig so", "'school' muss hier eigentlich großgeschrieben werden", "'yesterday' steht hier an der ganz falschen Stelle im Satz"], correct: 0,
                    explanation: "Im Simple Past bekommt das Verb -ed: walk → walked." }
            ]
        },
        test: [
            { id: "sppak5l1_test_1", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "leicht", points: 10,
                question: "Wie lautet das Simple Past von 'play'?",
                answers: ["played", "playeded", "plaied", "plays"], correct: 0,
                explanation: "play + ed = played." },
            { id: "sppak5l1_test_2", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "leicht", points: 10,
                question: "Wofür benutzt man das Simple Past?",
                answers: ["Für abgeschlossene Handlungen von früher", "Für geplante Handlungen in der Zukunft", "Für Handlungen, die gerade jetzt passieren", "Für spontane Wünsche und höfliche Bitten"], correct: 0,
                explanation: "Simple Past beschreibt abgeschlossene Ereignisse in der Vergangenheit." },
            { id: "sppak5l1_test_3", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "mittel", points: 10,
                question: "Wie lautet das Simple Past von 'like'?",
                answers: ["liked", "likeed", "likd", "likes"], correct: 0,
                explanation: "Verb endet auf -e → nur -d dazu: like → liked." },
            { id: "sppak5l1_test_4", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "mittel", points: 10,
                question: "Wie lautet das Simple Past von 'study'?",
                answers: ["studied", "studyed", "studies", "studdied"], correct: 0,
                explanation: "Konsonant + y → wird zu ied: study → studied." },
            { id: "sppak5l1_test_5", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "schwer", points: 10,
                question: "Wie lautet das Simple Past von 'stop'?",
                answers: ["stopped", "stoped", "stopeded", "stops"], correct: 0,
                explanation: "Kurzer Vokal + Endkonsonant → wird verdoppelt: stop → stopped." },
            { id: "sppak5l1_test_6", category: "kurs_sppa_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "schwer", points: 10,
                question: "Wie verneint man im Simple Past: 'She played tennis.'?",
                answers: ["She didn't play tennis.", "She not played tennis.", "She didn't played tennis.", "She doesn't play tennis."], correct: 0,
                explanation: "Verneinung im Simple Past: didn't + Grundform (kein -ed)." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "flum_k6_l1",
        kurs: "flaechen_umfang_k6",
        order: 1,
        icon: "📏",
        title: "Umfang von Rechteck & Quadrat",
        kurz: "Wie lang ist die Grenze einer Fläche?",
        erklaerung: {
            intro: "Der <b>Umfang</b> ist die Länge der Außenlinie einer Figur – man addiert alle Seitenlängen. Bei einem <b>Rechteck</b> gibt es zwei Seitenpaare, deshalb: Umfang = 2 × (Länge + Breite). Bei einem <b>Quadrat</b> sind alle 4 Seiten gleich lang: Umfang = 4 × Seitenlänge.",
            beispiele: [
                "📏 Rechteck mit 5 cm × 3 cm: Umfang = 2 × (5+3) = 2 × 8 = 16 cm",
                "🔲 Quadrat mit 4 cm Seitenlänge: Umfang = 4 × 4 = 16 cm",
                "💡 Der Umfang wird in derselben Einheit wie die Seiten angegeben (z.B. cm, m) – nicht in Quadrat-Einheiten!"
            ],
            merksatz: "Rechteck: U = 2 × (Länge + Breite). Quadrat: U = 4 × Seitenlänge."
        },
        uebung: {
            leicht: [
                { id: "flumk6l1u_leicht_1", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "leicht", points: 10,
                    question: "Wie berechnet man den Umfang eines Quadrats?",
                    answers: ["4 × Seitenlänge", "2 × Seitenlänge", "Seitenlänge × Seitenlänge", "Seitenlänge + 4"], correct: 0,
                    explanation: "Ein Quadrat hat 4 gleich lange Seiten: Umfang = 4 × Seitenlänge." },
                { id: "flumk6l1u_leicht_2", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "leicht", points: 10,
                    question: "Ein Quadrat hat die Seitenlänge 5 cm. Wie groß ist der Umfang?",
                    answers: ["20 cm", "25 cm", "10 cm", "5 cm"], correct: 0,
                    explanation: "4 × 5 cm = 20 cm." },
                { id: "flumk6l1u_leicht_3", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "leicht", points: 10,
                    question: "Wie berechnet man den Umfang eines Rechtecks?",
                    answers: ["2 × (Länge + Breite)", "Länge × Breite", "Länge + Breite", "4 × Länge"], correct: 0,
                    explanation: "Ein Rechteck hat zwei Seitenpaare: Umfang = 2 × (Länge + Breite)." },
                { id: "flumk6l1u_leicht_4", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "leicht", points: 10,
                    question: "Ein Rechteck ist 6 cm lang und 2 cm breit. Wie groß ist der Umfang?",
                    answers: ["16 cm", "12 cm", "8 cm", "14 cm"], correct: 0,
                    explanation: "2 × (6+2) = 2 × 8 = 16 cm." }
            ],
            mittel: [
                { id: "flumk6l1u_mittel_1", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "mittel", points: 10,
                    question: "Ein Rechteck ist 9 m lang und 4 m breit. Wie groß ist der Umfang?",
                    answers: ["26 m", "36 m", "13 m", "18 m"], correct: 0,
                    explanation: "2 × (9+4) = 2 × 13 = 26 m." },
                { id: "flumk6l1u_mittel_2", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "mittel", points: 10,
                    question: "Ein Quadrat hat einen Umfang von 24 cm. Wie lang ist eine Seite?",
                    answers: ["6 cm", "8 cm", "12 cm", "4 cm"], correct: 0,
                    explanation: "24 cm ÷ 4 = 6 cm." },
                { id: "flumk6l1u_mittel_3", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "mittel", points: 10,
                    question: "Ein Garten ist 12 m lang und 7 m breit. Wie viele Meter Zaun braucht man rundherum?",
                    answers: ["38 m", "84 m", "19 m", "42 m"], correct: 0,
                    explanation: "2 × (12+7) = 2 × 19 = 38 m." },
                { id: "flumk6l1u_mittel_4", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "mittel", points: 10,
                    question: "Welche Einheit passt NICHT zum Umfang einer Fläche?",
                    answers: ["cm² (Quadratzentimeter)", "cm (Zentimeter)", "m (Meter)", "mm (Millimeter)"], correct: 0,
                    explanation: "cm² ist eine Flächen-Einheit, der Umfang wird aber in einfachen Längen-Einheiten angegeben." }
            ],
            schwer: [
                { id: "flumk6l1u_schwer_1", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "schwer", points: 10,
                    question: "Ein Rechteck hat einen Umfang von 30 cm, die Breite ist 5 cm. Wie lang ist die Länge?",
                    answers: ["10 cm", "15 cm", "20 cm", "25 cm"], correct: 0,
                    explanation: "2 × (Länge+5) = 30 → Länge+5 = 15 → Länge = 10 cm." },
                { id: "flumk6l1u_schwer_2", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "schwer", points: 10,
                    question: "Finde den Fehler: 'Der Umfang eines Rechtecks mit 4 cm und 6 cm ist 4+6=10 cm.'",
                    answers: ["Falsch, man muss beide Seitenpaare zählen: 2×(4+6) = 20 cm", "Der Umfang ist tatsächlich schon ganz richtig berechnet worden", "Die Einheit cm ist bei dieser Aufgabe eigentlich falsch gewählt", "Man muss stattdessen die beiden Zahlen multiplizieren: 4×6 = 24 cm"], correct: 0,
                    explanation: "Ein Rechteck hat zwei Seitenpaare, deshalb 2×(4+6)=20 cm, nicht nur 4+6." },
                { id: "flumk6l1u_schwer_3", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "schwer", points: 10,
                    question: "Rechteck A ist 7×3 cm, Rechteck B ist 6×4 cm groß. Haben beide denselben Umfang?",
                    answers: ["Ja, beide ergeben 2×(7+3)=20 cm und 2×(6+4)=20 cm", "Nein, nur Rechteck A hat einen Umfang von 20 cm", "Nein, nur Rechteck B hat einen Umfang von 20 cm", "Nein, keins der beiden hat 20 cm Umfang"], correct: 0,
                    explanation: "2×(7+3)=20 cm und 2×(6+4)=20 cm – beide Rechtecke haben denselben Umfang, obwohl sie verschieden aussehen." },
                { id: "flumk6l1u_schwer_4", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "schwer", points: 10,
                    question: "Ein quadratisches Grundstück hat 9 m Seitenlänge. An einer Seite steht schon eine 3 m breite Mauer, dort braucht man keinen Zaun. Wie viele Meter Zaun braucht man für den Rest?",
                    answers: ["33 m", "36 m", "30 m", "27 m"], correct: 0,
                    explanation: "Gesamtumfang: 4×9=36 m, minus 3 m Mauer = 33 m Zaun." }
            ]
        },
        test: [
            { id: "flumk6l1_test_1", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "leicht", points: 10,
                question: "Wie berechnet man den Umfang eines Quadrats?",
                answers: ["4 × Seitenlänge", "2 × Seitenlänge", "Seitenlänge × Seitenlänge", "Seitenlänge + 4"], correct: 0,
                explanation: "Umfang eines Quadrats = 4 × Seitenlänge." },
            { id: "flumk6l1_test_2", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "leicht", points: 10,
                question: "Ein Rechteck ist 8 cm lang und 3 cm breit. Wie groß ist der Umfang?",
                answers: ["22 cm", "24 cm", "11 cm", "19 cm"], correct: 0,
                explanation: "2 × (8+3) = 22 cm." },
            { id: "flumk6l1_test_3", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "mittel", points: 10,
                question: "Ein Quadrat hat einen Umfang von 32 cm. Wie lang ist eine Seite?",
                answers: ["8 cm", "16 cm", "4 cm", "28 cm"], correct: 0,
                explanation: "32 cm ÷ 4 = 8 cm." },
            { id: "flumk6l1_test_4", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "mittel", points: 10,
                question: "Ein Zimmer ist 5 m lang und 4 m breit. Wie viele Meter Fußleiste braucht man rundherum?",
                answers: ["18 m", "20 m", "9 m", "22 m"], correct: 0,
                explanation: "2 × (5+4) = 18 m." },
            { id: "flumk6l1_test_5", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "schwer", points: 10,
                question: "Ein Rechteck hat einen Umfang von 28 cm, die Länge ist 9 cm. Wie breit ist es?",
                answers: ["5 cm", "10 cm", "14 cm", "19 cm"], correct: 0,
                explanation: "2 × (9+Breite) = 28 → Breite = 5 cm." },
            { id: "flumk6l1_test_6", category: "kurs_flum_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "schwer", points: 10,
                question: "Welche Aussage über Quadrat und Rechteck stimmt?",
                answers: ["Jedes Quadrat ist auch ein Rechteck", "Jedes Rechteck ist auch ein Quadrat", "Ein Rechteck hat vier gleich lange Seiten", "Ein Quadrat hat nur Fläche, keinen Umfang"], correct: 0,
                explanation: "Ein Quadrat erfüllt alle Eigenschaften eines Rechtecks, hat zusätzlich aber vier gleich lange Seiten." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "flum_k6_l2",
        kurs: "flaechen_umfang_k6",
        order: 2,
        icon: "🟦",
        title: "Fläche von Rechteck & Quadrat",
        kurz: "Wie viel passt in eine Fläche hinein?",
        erklaerung: {
            intro: "Der <b>Flächeninhalt</b> gibt an, wie groß eine Fläche ist – man rechnet in Quadrat-Einheiten (z.B. cm², m²). Bei einem <b>Rechteck</b>: Fläche = Länge × Breite. Bei einem <b>Quadrat</b>: Fläche = Seitenlänge × Seitenlänge.",
            beispiele: [
                "🟦 Rechteck mit 5 cm × 3 cm: Fläche = 5 × 3 = 15 cm²",
                "🔲 Quadrat mit 4 cm Seitenlänge: Fläche = 4 × 4 = 16 cm²",
                "💡 Fläche wird immer in Quadrat-Einheiten angegeben (cm², m², ...), der Umfang dagegen in einfachen Einheiten (cm, m)."
            ],
            merksatz: "Rechteck: A = Länge × Breite. Quadrat: A = Seitenlänge × Seitenlänge. Einheit: immer hoch 2 (cm², m², ...)."
        },
        uebung: {
            leicht: [
                { id: "flumk6l2u_leicht_1", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "leicht", points: 10,
                    question: "Wie berechnet man die Fläche eines Rechtecks?",
                    answers: ["Länge × Breite", "2 × (Länge + Breite)", "Länge + Breite", "Länge² × Breite"], correct: 0,
                    explanation: "Fläche eines Rechtecks = Länge × Breite." },
                { id: "flumk6l2u_leicht_2", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "leicht", points: 10,
                    question: "Ein Rechteck ist 6 cm lang und 4 cm breit. Wie groß ist die Fläche?",
                    answers: ["24 cm²", "20 cm²", "10 cm²", "28 cm²"], correct: 0,
                    explanation: "6 × 4 = 24 cm²." },
                { id: "flumk6l2u_leicht_3", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "leicht", points: 10,
                    question: "Wie berechnet man die Fläche eines Quadrats?",
                    answers: ["Seitenlänge × Seitenlänge", "4 × Seitenlänge", "2 × Seitenlänge", "Seitenlänge + Seitenlänge"], correct: 0,
                    explanation: "Fläche eines Quadrats = Seitenlänge × Seitenlänge." },
                { id: "flumk6l2u_leicht_4", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "leicht", points: 10,
                    question: "Ein Quadrat hat die Seitenlänge 7 cm. Wie groß ist die Fläche?",
                    answers: ["49 cm²", "28 cm²", "14 cm²", "35 cm²"], correct: 0,
                    explanation: "7 × 7 = 49 cm²." }
            ],
            mittel: [
                { id: "flumk6l2u_mittel_1", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "mittel", points: 10,
                    question: "Welche Einheit passt zur Fläche?",
                    answers: ["cm² (Quadratzentimeter)", "cm (Zentimeter)", "m (Meter)", "mm (Millimeter)"], correct: 0,
                    explanation: "Flächen werden in Quadrat-Einheiten wie cm² angegeben." },
                { id: "flumk6l2u_mittel_2", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "mittel", points: 10,
                    question: "Ein Zimmer ist 5 m lang und 4 m breit. Wie viele m² Teppich braucht man, um es komplett auszulegen?",
                    answers: ["20 m²", "18 m²", "9 m²", "24 m²"], correct: 0,
                    explanation: "5 × 4 = 20 m²." },
                { id: "flumk6l2u_mittel_3", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "mittel", points: 10,
                    question: "Ein quadratisches Beet hat eine Fläche von 36 m². Wie lang ist eine Seite?",
                    answers: ["6 m", "9 m", "12 m", "18 m"], correct: 0,
                    explanation: "6 × 6 = 36, also ist eine Seite 6 m lang." },
                { id: "flumk6l2u_mittel_4", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "mittel", points: 10,
                    question: "Ein Rechteck ist doppelt so lang wie breit, die Breite ist 3 cm. Wie groß ist die Fläche?",
                    answers: ["18 cm²", "9 cm²", "12 cm²", "24 cm²"], correct: 0,
                    explanation: "Länge = 2×3 = 6 cm, Fläche = 6 × 3 = 18 cm²." }
            ],
            schwer: [
                { id: "flumk6l2u_schwer_1", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "schwer", points: 10,
                    question: "Ein Garten ist 10 m lang und 6 m breit. Ein quadratischer Teich mit 2 m Seitenlänge liegt darin. Wie groß ist die restliche Rasenfläche?",
                    answers: ["56 m²", "60 m²", "58 m²", "52 m²"], correct: 0,
                    explanation: "Garten: 10×6=60 m², Teich: 2×2=4 m², Rest: 60-4=56 m²." },
                { id: "flumk6l2u_schwer_2", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "schwer", points: 10,
                    question: "Finde den Fehler: 'Die Fläche eines Rechtecks mit 5 cm und 3 cm ist 2×(5+3)=16 cm².'",
                    answers: ["Das ist der Umfang; die Fläche ist 5×3=15 cm²", "Die Rechnung und das Ergebnis stimmen so", "Die Einheit müsste hier cm statt cm² sein", "Man muss die Seiten addieren: 5+3=8 cm²"], correct: 0,
                    explanation: "2×(5+3) ist die Umfang-Formel, nicht die Fläche. Fläche = Länge × Breite = 5×3 = 15 cm²." },
                { id: "flumk6l2u_schwer_3", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "schwer", points: 10,
                    question: "Ein Rechteck hat eine Fläche von 48 cm², die Breite ist 6 cm. Wie lang ist es?",
                    answers: ["8 cm", "42 cm", "54 cm", "6 cm"], correct: 0,
                    explanation: "48 cm² ÷ 6 cm = 8 cm." },
                { id: "flumk6l2u_schwer_4", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "schwer", points: 10,
                    question: "Zwei Quadrate haben zusammen eine Fläche von 25 cm². Ein Quadrat hat 3 cm Seitenlänge. Wie groß ist die Fläche des anderen Quadrats?",
                    answers: ["16 cm²", "9 cm²", "22 cm²", "19 cm²"], correct: 0,
                    explanation: "Erstes Quadrat: 3×3=9 cm². Zweites Quadrat: 25-9=16 cm²." }
            ]
        },
        test: [
            { id: "flumk6l2_test_1", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "leicht", points: 10,
                question: "Wie berechnet man die Fläche eines Rechtecks?",
                answers: ["Länge × Breite", "2 × (Länge + Breite)", "Länge + Breite", "Länge²"], correct: 0,
                explanation: "Fläche eines Rechtecks = Länge × Breite." },
            { id: "flumk6l2_test_2", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "leicht", points: 10,
                question: "Ein Quadrat hat 6 cm Seitenlänge. Wie groß ist die Fläche?",
                answers: ["36 cm²", "24 cm²", "12 cm²", "18 cm²"], correct: 0,
                explanation: "6 × 6 = 36 cm²." },
            { id: "flumk6l2_test_3", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "mittel", points: 10,
                question: "Ein Rechteck ist 8 m lang und 5 m breit. Wie groß ist die Fläche?",
                answers: ["40 m²", "26 m²", "13 m²", "45 m²"], correct: 0,
                explanation: "8 × 5 = 40 m²." },
            { id: "flumk6l2_test_4", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "mittel", points: 10,
                question: "Ein quadratisches Feld hat eine Fläche von 64 m². Wie lang ist eine Seite?",
                answers: ["8 m", "16 m", "32 m", "4 m"], correct: 0,
                explanation: "8 × 8 = 64, also ist eine Seite 8 m lang." },
            { id: "flumk6l2_test_5", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "schwer", points: 10,
                question: "Ein Rechteck hat eine Fläche von 63 cm², die Länge ist 9 cm. Wie breit ist es?",
                answers: ["7 cm", "54 cm", "72 cm", "18 cm"], correct: 0,
                explanation: "63 cm² ÷ 9 cm = 7 cm." },
            { id: "flumk6l2_test_6", category: "kurs_flum_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "flaechen_umfang", difficulty: "schwer", points: 10,
                question: "Was ist der Unterschied zwischen Umfang und Fläche?",
                answers: ["Umfang ist die Randlänge, Fläche der Inhalt in Quadrat-Einheiten", "Beide werden in der Praxis immer in genau derselben Einheit angegeben", "Der Umfang wird eigentlich immer in m² gemessen, die Fläche in m", "Es gibt zwischen den beiden eigentlich gar keinen echten Unterschied"], correct: 0,
                explanation: "Der Umfang misst die Randlänge (einfache Einheit), die Fläche den Inhalt (Quadrat-Einheit)." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "satzg_k5_l1",
        kurs: "satzglieder_k5",
        order: 1,
        icon: "🧩",
        title: "Subjekt, Prädikat & Objekt erkennen",
        kurz: "Wer/was tut etwas – und womit?",
        erklaerung: {
            intro: "Ein Satz besteht aus <b>Satzgliedern</b> – Wortgruppen, die zusammengehören und eine bestimmte Aufgabe im Satz haben. Die wichtigsten sind: <b>Subjekt</b> (wer oder was?), <b>Prädikat</b> (was passiert? – das Verb) und <b>Objekt</b> (wen/was? oder wem?).",
            beispiele: [
                "🐕 Der Hund bellt laut. → Subjekt: 'Der Hund' (wer bellt?), Prädikat: 'bellt' (was passiert?)",
                "🎁 Lisa schenkt ihrer Freundin ein Buch. → Subjekt: 'Lisa', Prädikat: 'schenkt', Akkusativobjekt: 'ein Buch' (wen/was?), Dativobjekt: 'ihrer Freundin' (wem?)",
                "💡 Ein Satzglied bleibt beim Umstellen des Satzes immer zusammen: 'Der Hund bellt laut.' → 'Laut bellt der Hund.'"
            ],
            merksatz: "Subjekt = wer/was? Prädikat = das Verb, was passiert? Objekt = wen/was? (Akkusativ) oder wem? (Dativ). Satzglieder findet man, indem man den Satz umstellt – ein Satzglied bleibt dabei immer zusammen."
        },
        uebung: {
            leicht: [
                { id: "satzgk5l1u_leicht_1", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Was ist das Subjekt in 'Der Hund bellt.'?",
                    answers: ["Der Hund", "bellt", "Der", "Hund bellt"], correct: 0,
                    explanation: "'Der Hund' beantwortet die Frage 'Wer bellt?' – das ist das Subjekt." },
                { id: "satzgk5l1u_leicht_2", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Wonach fragt man, um das Subjekt zu finden?",
                    answers: ["Wer oder was?", "Wann?", "Wo?", "Warum?"], correct: 0,
                    explanation: "Das Subjekt findet man mit der Frage 'Wer oder was?'." },
                { id: "satzgk5l1u_leicht_3", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Was ist das Prädikat in 'Die Katze schläft.'?",
                    answers: ["schläft", "Die Katze", "Die", "Katze"], correct: 0,
                    explanation: "Das Prädikat ist das Verb im Satz: 'schläft'." },
                { id: "satzgk5l1u_leicht_4", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Welches Satzglied ist immer ein Verb?",
                    answers: ["Das Prädikat", "Das Subjekt", "Das Objekt", "Kein Satzglied"], correct: 0,
                    explanation: "Das Prädikat ist immer das Verb des Satzes." }
            ],
            mittel: [
                { id: "satzgk5l1u_mittel_1", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was ist das Subjekt in 'Meine Schwester liest ein Buch.'?",
                    answers: ["Meine Schwester", "liest", "ein Buch", "Buch"], correct: 0,
                    explanation: "'Meine Schwester' beantwortet 'Wer liest?' – das Subjekt." },
                { id: "satzgk5l1u_mittel_2", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was ist das Objekt in 'Tom füttert den Hund.'?",
                    answers: ["den Hund", "Tom", "füttert", "Hund"], correct: 0,
                    explanation: "'den Hund' beantwortet 'Wen füttert Tom?' – das Akkusativobjekt." },
                { id: "satzgk5l1u_mittel_3", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Wonach fragt man, um das Akkusativobjekt zu finden?",
                    answers: ["Wen oder was?", "Wem?", "Wo?", "Wann?"], correct: 0,
                    explanation: "Das Akkusativobjekt findet man mit 'Wen oder was?'." },
                { id: "satzgk5l1u_mittel_4", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was ist das Prädikat in 'Wir spielen heute Fußball.'?",
                    answers: ["spielen", "Wir", "heute", "Fußball"], correct: 0,
                    explanation: "Das Verb im Satz ist 'spielen' – das Prädikat." }
            ],
            schwer: [
                { id: "satzgk5l1u_schwer_1", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Was ist das Dativobjekt in 'Er gibt seinem Bruder das Geld.'?",
                    answers: ["seinem Bruder", "das Geld", "Er", "gibt"], correct: 0,
                    explanation: "'seinem Bruder' beantwortet 'Wem gibt er das Geld?' – das Dativobjekt." },
                { id: "satzgk5l1u_schwer_2", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Finde den Fehler: 'Im Satz 'Die Kinder spielen im Garten.' ist im Garten das Subjekt.'",
                    answers: ["Falsch, 'die Kinder' ist das Subjekt, 'im Garten' ist eine Ortsangabe", "Der Satz ist eigentlich schon von Anfang an ganz richtig so formuliert", "'spielen' ist in diesem Satz in Wahrheit das echte Subjekt", "Es gibt in diesem Satz überhaupt gar kein richtiges Subjekt"], correct: 0,
                    explanation: "'Die Kinder' beantwortet 'Wer spielt?' – das Subjekt. 'Im Garten' ist nur eine Ortsangabe." },
                { id: "satzgk5l1u_schwer_3", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Wie erkennt man ein Satzglied am sichersten?",
                    answers: ["Man kann es als Ganzes an den Satzanfang stellen", "Es besteht immer nur aus einem einzigen Wort", "Es steht immer direkt nach dem Verb im Satz", "Es beginnt immer automatisch mit einem Artikel"], correct: 0,
                    explanation: "Ein Satzglied lässt sich als Ganzes umstellen, z.B. an den Satzanfang – es bleibt dabei zusammen." },
                { id: "satzgk5l1u_schwer_4", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Was ist das Subjekt in 'Gestern hat mein Vater das Auto repariert.'?",
                    answers: ["mein Vater", "Gestern", "das Auto", "hat repariert"], correct: 0,
                    explanation: "'mein Vater' beantwortet 'Wer hat repariert?' – das Subjekt, auch wenn der Satz nicht damit beginnt." }
            ]
        },
        test: [
            { id: "satzgk5l1_test_1", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                question: "Was ist das Subjekt in 'Die Sonne scheint.'?",
                answers: ["Die Sonne", "scheint", "Die", "Sonne scheint"], correct: 0,
                explanation: "'Die Sonne' beantwortet 'Was scheint?' – das Subjekt." },
            { id: "satzgk5l1_test_2", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                question: "Wonach fragt man, um das Prädikat zu finden?",
                answers: ["Was tut das Subjekt?", "Wer oder was tut es?", "Wo geschieht das?", "Wessen ist das?"], correct: 0,
                explanation: "Das Prädikat findet man mit 'Was tut/macht das Subjekt?'." },
            { id: "satzgk5l1_test_3", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                question: "Was ist das Objekt in 'Anna malt ein Bild.'?",
                answers: ["ein Bild", "Anna", "malt", "Bild"], correct: 0,
                explanation: "'ein Bild' beantwortet 'Was malt Anna?' – das Akkusativobjekt." },
            { id: "satzgk5l1_test_4", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                question: "Was ist das Prädikat in 'Die Kinder lachen laut.'?",
                answers: ["lachen", "Die Kinder", "laut", "Kinder lachen"], correct: 0,
                explanation: "Das Verb im Satz ist 'lachen' – das Prädikat." },
            { id: "satzgk5l1_test_5", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                question: "Was ist das Dativobjekt in 'Sie erzählt ihrem Freund eine Geschichte.'?",
                answers: ["ihrem Freund", "eine Geschichte", "Sie", "erzählt"], correct: 0,
                explanation: "'ihrem Freund' beantwortet 'Wem erzählt sie?' – das Dativobjekt." },
            { id: "satzgk5l1_test_6", category: "kurs_satzg_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                question: "Was ist das Subjekt in 'Morgen fährt meine Mutter nach Berlin.'?",
                answers: ["meine Mutter", "Morgen", "nach Berlin", "fährt"], correct: 0,
                explanation: "'meine Mutter' beantwortet 'Wer fährt?' – das Subjekt, obwohl der Satz mit 'Morgen' beginnt." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "geo_k5_l1",
        kurs: "geometrie_grundlagen_k5",
        order: 1,
        icon: "📐",
        title: "Winkel erkennen und messen",
        kurz: "Spitz, stumpf oder rechter Winkel?",
        erklaerung: {
            intro: "Ein <b>Winkel</b> entsteht, wenn zwei Strahlen von einem gemeinsamen Punkt (dem Scheitelpunkt) ausgehen. Die Größe eines Winkels wird in <b>Grad (°)</b> angegeben und mit einem <b>Geodreieck</b> gemessen.",
            beispiele: [
                "📐 Spitzer Winkel: kleiner als 90° (z. B. 45°)",
                "📏 Rechter Winkel: genau 90° – oft mit einem kleinen Quadrat markiert",
                "📐 Stumpfer Winkel: zwischen 90° und 180° (z. B. 120°)",
                "➖ Gestreckter Winkel: genau 180° – die Schenkel bilden eine gerade Linie"
            ],
            merksatz: "Spitzer Winkel < 90°, rechter Winkel = 90°, stumpfer Winkel zwischen 90° und 180°, gestreckter Winkel = 180°."
        },
        uebung: {
            leicht: [
                { id: "geok5l1u_leicht_1", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "leicht", points: 10,
                    question: "Wie viel Grad hat ein rechter Winkel?",
                    answers: ["90°", "45°", "180°", "360°"], correct: 0,
                    explanation: "Ein rechter Winkel hat immer genau 90°." },
                { id: "geok5l1u_leicht_2", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "leicht", points: 10,
                    question: "Wie nennt man einen Winkel, der kleiner als 90° ist?",
                    answers: ["Spitzer Winkel", "Stumpfer Winkel", "Rechter Winkel", "Gestreckter Winkel"], correct: 0,
                    explanation: "Ein Winkel unter 90° heißt spitzer Winkel." },
                { id: "geok5l1u_leicht_3", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "leicht", points: 10,
                    question: "Welches Werkzeug nutzt man, um einen Winkel zu messen?",
                    answers: ["Geodreieck", "Lineal", "Zollstock", "Waage"], correct: 0,
                    explanation: "Mit dem Geodreieck kann man Winkel in Grad ablesen." },
                { id: "geok5l1u_leicht_4", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "leicht", points: 10,
                    question: "Wie viel Grad hat ein gestreckter Winkel?",
                    answers: ["180°", "90°", "360°", "45°"], correct: 0,
                    explanation: "Ein gestreckter Winkel bildet eine gerade Linie: 180°." }
            ],
            mittel: [
                { id: "geok5l1u_mittel_1", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "mittel", points: 10,
                    question: "Ein Winkel ist 120° groß. Wie wird er genannt?",
                    answers: ["Stumpfer Winkel", "Spitzer Winkel", "Rechter Winkel", "Gestreckter Winkel"], correct: 0,
                    explanation: "120° liegt zwischen 90° und 180° – das ist ein stumpfer Winkel." },
                { id: "geok5l1u_mittel_2", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "mittel", points: 10,
                    question: "Ein Winkel ist 45° groß. Wie wird er genannt?",
                    answers: ["Spitzer Winkel", "Stumpfer Winkel", "Rechter Winkel", "Gestreckter Winkel"], correct: 0,
                    explanation: "45° ist kleiner als 90° – ein spitzer Winkel." },
                { id: "geok5l1u_mittel_3", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "mittel", points: 10,
                    question: "Ein Winkel ist 30° groß. Wie viel Grad fehlen bis zu einem rechten Winkel (90°)?",
                    answers: ["60°", "30°", "45°", "120°"], correct: 0,
                    explanation: "90° minus 30° ergibt 60°." },
                { id: "geok5l1u_mittel_4", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "mittel", points: 10,
                    question: "In welchem Bereich liegt ein stumpfer Winkel?",
                    answers: ["Zwischen 90° und 180°", "Zwischen 0° und 90°", "Genau 90°", "Genau 180°"], correct: 0,
                    explanation: "Ein stumpfer Winkel liegt zwischen 90° und 180°." }
            ],
            schwer: [
                { id: "geok5l1u_schwer_1", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "schwer", points: 10,
                    question: "Zwei Nebenwinkel ergänzen sich zu 180°. Ein Winkel ist 110° groß. Wie groß ist der andere?",
                    answers: ["70°", "80°", "60°", "90°"], correct: 0,
                    explanation: "180° minus 110° ergibt 70°." },
                { id: "geok5l1u_schwer_2", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "schwer", points: 10,
                    question: "Finde den Fehler: 'Ein Winkel von 95° ist ein spitzer Winkel.' Was stimmt?",
                    answers: ["95° ist ein stumpfer Winkel", "95° ist ein spitzer Winkel", "95° ist ein rechter Winkel", "95° ist ein gestreckter Winkel"], correct: 0,
                    explanation: "95° liegt über 90° – das ist ein stumpfer, kein spitzer Winkel." },
                { id: "geok5l1u_schwer_3", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "schwer", points: 10,
                    question: "Welche zwei Winkelarten grenzen direkt an den rechten Winkel (90°)?",
                    answers: ["Spitzer und stumpfer Winkel", "Spitzer und gestreckter Winkel", "Stumpfer und gestreckter Winkel", "Nur der spitze Winkel"], correct: 0,
                    explanation: "Direkt unter 90° liegt der spitze, direkt über 90° der stumpfe Winkel." },
                { id: "geok5l1u_schwer_4", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "schwer", points: 10,
                    question: "In einem Dreieck sind zwei Winkel 90° und 35° groß. Wie groß ist der dritte Winkel?",
                    answers: ["55°", "45°", "65°", "35°"], correct: 0,
                    explanation: "Die Winkelsumme im Dreieck ist 180°: 180° − 90° − 35° = 55°." }
            ]
        },
        test: [
            { id: "geok5l1_test_1", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "leicht", points: 10,
                question: "Welcher Winkel ist genau 90° groß?",
                answers: ["Der rechte Winkel", "Der spitze Winkel", "Der stumpfe Winkel", "Der gestreckte Winkel"], correct: 0,
                explanation: "Der rechte Winkel hat genau 90°." },
            { id: "geok5l1_test_2", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "leicht", points: 10,
                question: "Wie heißt ein Winkel von genau 180°?",
                answers: ["Gestreckter Winkel", "Spitzer Winkel", "Rechter Winkel", "Stumpfer Winkel"], correct: 0,
                explanation: "180° bildet eine gerade Linie – der gestreckte Winkel." },
            { id: "geok5l1_test_3", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "mittel", points: 10,
                question: "Ein Winkel ist 25° groß. Wie viel Grad fehlen bis zu einem rechten Winkel (90°)?",
                answers: ["65°", "55°", "75°", "25°"], correct: 0,
                explanation: "90° minus 25° ergibt 65°." },
            { id: "geok5l1_test_4", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "mittel", points: 10,
                question: "Ein Winkel ist 150° groß. Wie wird er genannt?",
                answers: ["Stumpfer Winkel", "Spitzer Winkel", "Rechter Winkel", "Gestreckter Winkel"], correct: 0,
                explanation: "150° liegt zwischen 90° und 180° – ein stumpfer Winkel." },
            { id: "geok5l1_test_5", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "schwer", points: 10,
                question: "Zwei Nebenwinkel ergänzen sich zu 180°. Einer ist 130° groß. Wie groß ist der andere?",
                answers: ["50°", "60°", "40°", "70°"], correct: 0,
                explanation: "180° minus 130° ergibt 50°." },
            { id: "geok5l1_test_6", category: "kurs_geo_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "winkel", difficulty: "schwer", points: 10,
                question: "In einem Dreieck sind zwei Winkel 90° und 40° groß. Wie groß ist der dritte Winkel?",
                answers: ["50°", "40°", "60°", "70°"], correct: 0,
                explanation: "180° − 90° − 40° = 50°." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "geo_k5_l2",
        kurs: "geometrie_grundlagen_k5",
        order: 2,
        icon: "🔷",
        title: "Vierecke unterscheiden",
        kurz: "Quadrat, Rechteck, Parallelogramm & Co.",
        erklaerung: {
            intro: "Ein <b>Viereck</b> ist eine Figur mit vier Seiten und vier Ecken. Es gibt besondere Vierecke, die sich durch Eigenschaften wie parallele oder gleich lange Seiten unterscheiden: <b>Quadrat, Rechteck, Parallelogramm, Raute</b> und <b>Trapez</b>.",
            beispiele: [
                "⬛ Quadrat: alle 4 Seiten gleich lang, alle Winkel 90°",
                "▭ Rechteck: gegenüberliegende Seiten gleich lang, alle Winkel 90°",
                "▱ Parallelogramm: gegenüberliegende Seiten parallel und gleich lang, Winkel nicht zwingend 90°",
                "🔷 Raute: alle 4 Seiten gleich lang, gegenüberliegende Winkel gleich groß",
                "🔻 Trapez: nur ein Paar gegenüberliegender Seiten ist parallel"
            ],
            merksatz: "Quadrat = Sonderfall von Rechteck UND Raute. Rechteck: alle Winkel 90°. Parallelogramm: gegenüberliegende Seiten parallel. Trapez: nur ein Seitenpaar parallel."
        },
        uebung: {
            leicht: [
                { id: "geok5l2u_leicht_1", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "leicht", points: 10,
                    question: "Wie viele Seiten hat ein Viereck?",
                    answers: ["4", "3", "5", "6"], correct: 0,
                    explanation: "Ein Viereck hat, wie der Name sagt, vier Seiten." },
                { id: "geok5l2u_leicht_2", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "leicht", points: 10,
                    question: "Wie viele Ecken hat ein Viereck?",
                    answers: ["4", "3", "5", "6"], correct: 0,
                    explanation: "Ein Viereck hat vier Ecken." },
                { id: "geok5l2u_leicht_3", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "leicht", points: 10,
                    question: "Welches Viereck hat vier gleich lange Seiten und vier rechte Winkel?",
                    answers: ["Quadrat", "Rechteck", "Trapez", "Raute"], correct: 0,
                    explanation: "Das Quadrat hat vier gleiche Seiten und vier rechte Winkel." },
                { id: "geok5l2u_leicht_4", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "leicht", points: 10,
                    question: "Welches Viereck hat vier rechte Winkel, aber nicht zwingend alle Seiten gleich lang?",
                    answers: ["Rechteck", "Quadrat", "Trapez", "Raute"], correct: 0,
                    explanation: "Beim Rechteck sind nur gegenüberliegende Seiten gleich lang." }
            ],
            mittel: [
                { id: "geok5l2u_mittel_1", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "mittel", points: 10,
                    question: "Welches Viereck hat nur ein Paar paralleler Seiten?",
                    answers: ["Trapez", "Parallelogramm", "Rechteck", "Quadrat"], correct: 0,
                    explanation: "Beim Trapez ist nur ein Seitenpaar parallel." },
                { id: "geok5l2u_mittel_2", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "mittel", points: 10,
                    question: "Was ist typisch für eine Raute?",
                    answers: ["Vier gleich lange Seiten", "Zwei gleich lange Seiten", "Vier rechte Winkel", "Nur eine besondere Seite"], correct: 0,
                    explanation: "Eine Raute hat vier gleich lange Seiten." },
                { id: "geok5l2u_mittel_3", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "mittel", points: 10,
                    question: "Warum ist jedes Quadrat auch ein Rechteck?",
                    answers: ["Weil alle Winkel 90° sind", "Weil es nur 3 Seiten hat", "Weil keine Seite gleich lang ist", "Weil es keine rechten Winkel hat"], correct: 0,
                    explanation: "Ein Rechteck ist definiert über vier rechte Winkel – das erfüllt auch das Quadrat." },
                { id: "geok5l2u_mittel_4", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "mittel", points: 10,
                    question: "Was haben Rechteck und Parallelogramm gemeinsam?",
                    answers: ["Gegenüberliegende Seiten sind parallel", "Alle vier Seiten sind gleich lang", "Alle vier Winkel sind genau 90°", "Es gibt gar keine parallelen Seiten"], correct: 0,
                    explanation: "Bei beiden Formen sind gegenüberliegende Seiten parallel." }
            ],
            schwer: [
                { id: "geok5l2u_schwer_1", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "schwer", points: 10,
                    question: "Finde den Fehler: 'Jedes Rechteck ist ein Quadrat.' Was stimmt?",
                    answers: ["Nicht jedes Rechteck ist ein Quadrat", "Jedes Rechteck ist ein Quadrat", "Kein Rechteck ist ein Quadrat", "Nur Quadrate sind Rechtecke"], correct: 0,
                    explanation: "Nur wenn alle Seiten gleich lang sind, ist ein Rechteck auch ein Quadrat." },
                { id: "geok5l2u_schwer_2", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "schwer", points: 10,
                    question: "Ein Viereck hat vier gleich lange Seiten, aber nicht alle Winkel sind 90°. Um welches Viereck handelt es sich?",
                    answers: ["Raute", "Quadrat", "Rechteck", "Trapez"], correct: 0,
                    explanation: "Vier gleiche Seiten ohne rechte Winkel – das ist eine Raute." },
                { id: "geok5l2u_schwer_3", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "schwer", points: 10,
                    question: "Welche Aussage über ein Parallelogramm stimmt?",
                    answers: ["Gegenüberliegende Seiten sind gleich lang", "Alle vier Winkel sind genau 90° groß", "Alle vier Seiten sind immer gleich lang", "Nur zwei Seiten sind parallel zueinander"], correct: 0,
                    explanation: "Im Parallelogramm sind gegenüberliegende Seiten parallel und gleich lang." },
                { id: "geok5l2u_schwer_4", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "schwer", points: 10,
                    question: "Warum ist eine Raute auch ein Parallelogramm?",
                    answers: ["Weil gegenüberliegende Seiten parallel sind", "Weil alle vier Winkel exakt gleich groß sind", "Weil keine Seite parallel ist", "Weil es vier rechte Winkel hat"], correct: 0,
                    explanation: "Bei einer Raute sind gegenüberliegende Seiten parallel – das erfüllt die Bedingung für ein Parallelogramm." }
            ]
        },
        test: [
            { id: "geok5l2_test_1", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "leicht", points: 10,
                question: "Wie viele Seiten und Ecken hat ein Viereck jeweils?",
                answers: ["4 Seiten und 4 Ecken", "3 Seiten und 3 Ecken", "5 Seiten und 5 Ecken", "4 Seiten und 3 Ecken"], correct: 0,
                explanation: "Ein Viereck hat vier Seiten und vier Ecken." },
            { id: "geok5l2_test_2", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "leicht", points: 10,
                question: "Wie nennt man ein Viereck mit vier gleich langen Seiten und vier rechten Winkeln?",
                answers: ["Quadrat", "Rechteck", "Trapez", "Raute"], correct: 0,
                explanation: "Das ist die Definition eines Quadrats." },
            { id: "geok5l2_test_3", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "mittel", points: 10,
                question: "Welches Viereck hat gegenüberliegende Seiten parallel, muss aber keine rechten Winkel haben?",
                answers: ["Parallelogramm", "Quadrat", "Rechteck", "Kreis"], correct: 0,
                explanation: "Ein Parallelogramm hat parallele Seiten, aber nicht zwingend rechte Winkel." },
            { id: "geok5l2_test_4", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "mittel", points: 10,
                question: "Wie heißt ein Viereck, bei dem nur zwei Seiten parallel zueinander sind?",
                answers: ["Trapez", "Parallelogramm", "Quadrat", "Rechteck"], correct: 0,
                explanation: "Das ist die Definition eines Trapezes." },
            { id: "geok5l2_test_5", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "schwer", points: 10,
                question: "Stimmt es, dass jedes Quadrat auch ein Rechteck und eine Raute ist?",
                answers: ["Ja, es erfüllt beide Eigenschaften", "Nein, es ist nur ein Rechteck", "Nein, es ist nur eine Raute", "Nein, es ist keins von beidem"], correct: 0,
                explanation: "Ein Quadrat hat vier rechte Winkel (wie ein Rechteck) und vier gleiche Seiten (wie eine Raute)." },
            { id: "geok5l2_test_6", category: "kurs_geo_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "vierecke", difficulty: "schwer", points: 10,
                question: "Warum ist nicht jede Raute ein Quadrat?",
                answers: ["Weil die Winkel nicht alle 90° sein müssen", "Weil die Seiten nicht gleich lang sind", "Weil es keine parallelen Seiten hat", "Weil eine Raute nur 3 Seiten hat"], correct: 0,
                explanation: "Eine Raute hat gleiche Seiten, aber die Winkel müssen nicht 90° sein." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "plur_k5_l1",
        kurs: "plural_regeln_k5",
        order: 1,
        icon: "📚",
        title: "Plural-Regeln",
        kurz: "Ein Buch, zwei Bücher – auf Englisch",
        erklaerung: {
            intro: "Im Englischen bildet man die Mehrzahl (<b>Plural</b>) meistens mit <b>-s</b>. Bei bestimmten Endungen braucht es <b>-es</b> oder eine Änderung des Wortes. Manche Wörter sind komplett <b>unregelmäßig</b> und müssen auswendig gelernt werden.",
            beispiele: [
                "📚 Regelmäßig: cat → cats, book → books (einfach -s anhängen)",
                "🦊 Nach -s, -ss, -sh, -ch, -x: box → boxes, watch → watches (-es anhängen)",
                "👶 Konsonant + y: baby → babies (y wird zu ie, dann -s)",
                "🐭 Unregelmäßig: man → men, child → children, mouse → mice (keine feste Regel)"
            ],
            merksatz: "Meistens einfach -s. Nach -s/-ss/-sh/-ch/-x: -es. Nach Konsonant+y: y wird zu ies. Manche Wörter sind unregelmäßig (man→men, child→children) und müssen auswendig gelernt werden."
        },
        uebung: {
            leicht: [
                { id: "plurk5l1u_leicht_1", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "leicht", points: 10,
                    question: "Wie lautet der Plural von 'cat'?",
                    answers: ["cats", "cates", "catss", "cat"], correct: 0,
                    explanation: "Regelmäßiger Plural: einfach -s anhängen." },
                { id: "plurk5l1u_leicht_2", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "leicht", points: 10,
                    question: "Wie lautet der Plural von 'book'?",
                    answers: ["books", "bookes", "bookss", "book"], correct: 0,
                    explanation: "Regelmäßiger Plural: einfach -s anhängen." },
                { id: "plurk5l1u_leicht_3", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "leicht", points: 10,
                    question: "Welche Endung hängt man bei den meisten englischen Wörtern für den Plural an?",
                    answers: ["-s", "-es", "-ies", "-ves"], correct: 0,
                    explanation: "Der Standardfall im Englischen ist die Endung -s." },
                { id: "plurk5l1u_leicht_4", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "leicht", points: 10,
                    question: "Wie lautet der Plural von 'dog'?",
                    answers: ["dogs", "doges", "dogss", "dog"], correct: 0,
                    explanation: "Regelmäßiger Plural: einfach -s anhängen." }
            ],
            mittel: [
                { id: "plurk5l1u_mittel_1", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "mittel", points: 10,
                    question: "Wie lautet der Plural von 'box'?",
                    answers: ["boxes", "boxs", "boxies", "box"], correct: 0,
                    explanation: "Nach -x wird -es angehängt: box → boxes." },
                { id: "plurk5l1u_mittel_2", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "mittel", points: 10,
                    question: "Wie lautet der Plural von 'watch'?",
                    answers: ["watches", "watchs", "watchies", "watch"], correct: 0,
                    explanation: "Nach -ch wird -es angehängt: watch → watches." },
                { id: "plurk5l1u_mittel_3", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "mittel", points: 10,
                    question: "Wie lautet der Plural von 'baby'?",
                    answers: ["babies", "babys", "babyes", "baby"], correct: 0,
                    explanation: "Nach Konsonant + y wird y zu ie: baby → babies." },
                { id: "plurk5l1u_mittel_4", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "mittel", points: 10,
                    question: "Wie lautet der Plural von 'boy' (Vokal + y)?",
                    answers: ["boys", "boies", "boyes", "boy"], correct: 0,
                    explanation: "Nach Vokal + y bleibt das y, es wird nur -s angehängt." }
            ],
            schwer: [
                { id: "plurk5l1u_schwer_1", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "schwer", points: 10,
                    question: "Wie lautet der Plural von 'child'?",
                    answers: ["children", "childs", "childes", "child"], correct: 0,
                    explanation: "'child' ist unregelmäßig: der Plural ist 'children'." },
                { id: "plurk5l1u_schwer_2", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "schwer", points: 10,
                    question: "Finde den Fehler: 'Der Plural von mouse ist mouses.' Was stimmt?",
                    answers: ["Der Plural von mouse ist mice", "Der Plural von mouse ist mouses", "Der Plural von mouse ist mousies", "Der Plural von mouse ist mousees"], correct: 0,
                    explanation: "'mouse' ist unregelmäßig: der Plural ist 'mice', nicht 'mouses'." },
                { id: "plurk5l1u_schwer_3", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "schwer", points: 10,
                    question: "Wie lautet der Plural von 'man'?",
                    answers: ["men", "mans", "manes", "man"], correct: 0,
                    explanation: "'man' ist unregelmäßig: der Plural ist 'men'." },
                { id: "plurk5l1u_schwer_4", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "schwer", points: 10,
                    question: "Wie lautet der Plural von 'foot'?",
                    answers: ["feet", "foots", "footes", "foot"], correct: 0,
                    explanation: "'foot' ist unregelmäßig: der Plural ist 'feet'." }
            ]
        },
        test: [
            { id: "plurk5l1_test_1", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "leicht", points: 10,
                question: "Wie lautet der Plural von 'pen'?",
                answers: ["pens", "penes", "penns", "pen"], correct: 0,
                explanation: "Regelmäßiger Plural: einfach -s anhängen." },
            { id: "plurk5l1_test_2", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "leicht", points: 10,
                question: "Welche Endung braucht ein Wort, das auf -ch endet, im Plural?",
                answers: ["-es", "-s", "-ies", "-ves"], correct: 0,
                explanation: "Nach -ch wird -es angehängt, z. B. watch → watches." },
            { id: "plurk5l1_test_3", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "mittel", points: 10,
                question: "Wie lautet der Plural von 'bus'?",
                answers: ["buses", "buss", "busies", "bus"], correct: 0,
                explanation: "Nach -s wird -es angehängt: bus → buses." },
            { id: "plurk5l1_test_4", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "mittel", points: 10,
                question: "Wie lautet der Plural von 'city'?",
                answers: ["cities", "citys", "cityes", "city"], correct: 0,
                explanation: "Nach Konsonant + y wird y zu ie: city → cities." },
            { id: "plurk5l1_test_5", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "schwer", points: 10,
                question: "Wie lautet der Plural von 'tooth'?",
                answers: ["teeth", "tooths", "toothes", "tooth"], correct: 0,
                explanation: "'tooth' ist unregelmäßig: der Plural ist 'teeth'." },
            { id: "plurk5l1_test_6", category: "kurs_plur_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "plural", difficulty: "schwer", points: 10,
                question: "Wie lautet der Plural von 'person' (unregelmäßig)?",
                answers: ["people", "persons", "persones", "person"], correct: 0,
                explanation: "Der gebräuchliche Plural von 'person' ist 'people'." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "wort_k5_l1",
        kurs: "wortarten_vertiefend_k5",
        order: 1,
        icon: "🔍",
        title: "Pronomen genauer unterscheiden",
        kurz: "Personal-, Possessiv-, Demonstrativ-, Reflexiv- & Interrogativpronomen",
        erklaerung: {
            intro: "<b>Pronomen</b> (Fürwörter) stehen anstelle eines Nomens oder begleiten es. Es gibt mehrere Arten: <b>Personalpronomen</b> (ich, du, er...), <b>Possessivpronomen</b> (mein, dein...), <b>Demonstrativpronomen</b> (dieser, jener...), <b>Reflexivpronomen</b> (sich, mich...) und <b>Interrogativpronomen</b> (wer, was, welcher...).",
            beispiele: [
                "👤 Personalpronomen vertreten eine Person: 'Ich rufe dich an.' → ich, dich",
                "🏠 Possessivpronomen zeigen Besitz an: 'Das ist mein Fahrrad.' → mein",
                "👉 Demonstrativpronomen zeigen genau auf etwas: 'Dieses Buch gehört mir, jenes nicht.' → dieses, jenes",
                "🪞 Reflexivpronomen beziehen sich auf das Subjekt zurück: 'Er wäscht sich.' → sich",
                "❓ Interrogativpronomen fragen: 'Wer hat das gemacht? Welches Buch meinst du?' → wer, welches"
            ],
            merksatz: "Vertritt das Wort eine Person → Personalpronomen. Zeigt es Besitz → Possessivpronomen. Zeigt es genau auf etwas → Demonstrativpronomen. Bezieht es sich auf das Subjekt zurück → Reflexivpronomen. Fragt es → Interrogativpronomen."
        },
        uebung: {
            leicht: [
                { id: "wortk5l1u_leicht_1", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welche Pronomenart ist 'ich' in 'Ich gehe zur Schule.'?",
                    answers: ["Personalpronomen", "Possessivpronomen", "Demonstrativpronomen", "Reflexivpronomen"], correct: 0,
                    explanation: "'ich' vertritt die sprechende Person – ein Personalpronomen." },
                { id: "wortk5l1u_leicht_2", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welche Pronomenart ist 'mein' in 'Das ist mein Hund.'?",
                    answers: ["Possessivpronomen", "Personalpronomen", "Interrogativpronomen", "Demonstrativpronomen"], correct: 0,
                    explanation: "'mein' zeigt Besitz an – ein Possessivpronomen." },
                { id: "wortk5l1u_leicht_3", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welche Pronomenart fragt nach einer Person oder Sache, z. B. 'wer' oder 'was'?",
                    answers: ["Interrogativpronomen", "Reflexivpronomen", "Possessivpronomen", "Personalpronomen"], correct: 0,
                    explanation: "Interrogativpronomen wie 'wer', 'was', 'welcher' leiten Fragen ein." },
                { id: "wortk5l1u_leicht_4", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welche Pronomenart ist 'sich' in 'Sie freut sich.'?",
                    answers: ["Reflexivpronomen", "Personalpronomen", "Demonstrativpronomen", "Possessivpronomen"], correct: 0,
                    explanation: "'sich' bezieht sich auf das Subjekt zurück – ein Reflexivpronomen." }
            ],
            mittel: [
                { id: "wortk5l1u_mittel_1", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist in 'Dieses Auto gehört meinem Onkel.' ein Demonstrativpronomen?",
                    answers: ["Dieses", "meinem", "Auto", "Onkel"], correct: 0,
                    explanation: "'Dieses' zeigt genau auf ein bestimmtes Auto – ein Demonstrativpronomen." },
                { id: "wortk5l1u_mittel_2", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist in 'Er kämmt sich vor dem Spiegel.' das Reflexivpronomen?",
                    answers: ["sich", "Er", "kämmt", "Spiegel"], correct: 0,
                    explanation: "'sich' bezieht sich auf 'Er' zurück – ein Reflexivpronomen." },
                { id: "wortk5l1u_mittel_3", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "'Welches Buch hast du gelesen?' – Welche Pronomenart ist 'Welches'?",
                    answers: ["Interrogativpronomen", "Demonstrativpronomen", "Possessivpronomen", "Personalpronomen"], correct: 0,
                    explanation: "'Welches' fragt nach dem Buch – ein Interrogativpronomen." },
                { id: "wortk5l1u_mittel_4", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist in 'Unser Garten ist sehr groß.' ein Possessivpronomen?",
                    answers: ["Unser", "Garten", "ist", "groß"], correct: 0,
                    explanation: "'Unser' zeigt an, wem der Garten gehört – ein Possessivpronomen." }
            ],
            schwer: [
                { id: "wortk5l1u_schwer_1", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "'Er hat sich das selbst ausgesucht.' – Welche Pronomenart ist 'sich' hier?",
                    answers: ["Reflexivpronomen, weil es sich auf 'Er' zurückbezieht", "Personalpronomen, weil es eine Person vertritt", "Possessivpronomen, weil es Besitz anzeigt", "Demonstrativpronomen, weil es auf etwas zeigt"], correct: 0,
                    explanation: "'sich' bezieht sich auf das Subjekt 'Er' zurück – ein Reflexivpronomen." },
                { id: "wortk5l1u_schwer_2", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "Worin unterscheiden sich Possessiv- und Demonstrativpronomen vor allem?",
                    answers: ["Possessivpronomen zeigen Besitz, Demonstrativpronomen zeigen genau auf etwas", "Possessivpronomen stehen nur im Plural, Demonstrativpronomen nur im Singular", "Possessivpronomen werden nie gebeugt, Demonstrativpronomen immer", "Es gibt zwischen beiden Pronomenarten keinen echten Unterschied"], correct: 0,
                    explanation: "Possessiv = Besitz ('mein'), Demonstrativ = genaues Zeigen ('dieser, jener')." },
                { id: "wortk5l1u_schwer_3", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "'Wessen Fahrrad steht hier?' – Welche Pronomenart ist 'Wessen'?",
                    answers: ["Interrogativpronomen, denn es fragt nach dem Besitzer", "Possessivpronomen, denn es zeigt direkt einen Besitzer an", "Personalpronomen, denn es vertritt eine bestimmte Person", "Reflexivpronomen, denn es bezieht sich auf das Subjekt zurück"], correct: 0,
                    explanation: "'Wessen' fragt nach dem Besitzer – ein Interrogativpronomen, auch wenn es nach Besitz fragt." },
                { id: "wortk5l1u_schwer_4", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "In welchem Satz ist 'ihr' ein Possessivpronomen (nicht Personalpronomen)?",
                    answers: ["Das ist ihr Fahrrad.", "Ich habe ihr geholfen.", "Wo wohnt ihr denn?", "Ich gebe ihr ein Buch."], correct: 0,
                    explanation: "'ihr Fahrrad' zeigt Besitz an – hier ist 'ihr' Possessivpronomen. In den anderen Sätzen ist 'ihr' Personalpronomen." }
            ]
        },
        test: [
            { id: "wortk5l1_test_1", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                question: "Welche Pronomenart ist 'du' in 'Du bist mein bester Freund.'?",
                answers: ["Personalpronomen", "Possessivpronomen", "Interrogativpronomen", "Reflexivpronomen"], correct: 0,
                explanation: "'du' vertritt die angesprochene Person – ein Personalpronomen." },
            { id: "wortk5l1_test_2", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                question: "Welche Pronomenart zeigt Besitz an?",
                answers: ["Possessivpronomen", "Interrogativpronomen", "Reflexivpronomen", "Demonstrativpronomen"], correct: 0,
                explanation: "Possessivpronomen wie 'mein', 'dein', 'sein' zeigen Besitz an." },
            { id: "wortk5l1_test_3", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                question: "Welches Wort ist in 'Jenes Haus dort ist unser Ferienhaus.' ein Demonstrativpronomen?",
                answers: ["Jenes", "unser", "Haus", "Ferienhaus"], correct: 0,
                explanation: "'Jenes' zeigt genau auf ein bestimmtes Haus – ein Demonstrativpronomen." },
            { id: "wortk5l1_test_4", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                question: "Welches Wort ist in 'Die Kinder waschen sich die Hände.' das Reflexivpronomen?",
                answers: ["sich", "Kinder", "waschen", "Hände"], correct: 0,
                explanation: "'sich' bezieht sich auf 'Die Kinder' zurück – ein Reflexivpronomen." },
            { id: "wortk5l1_test_5", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                question: "'Wer hat den Kuchen gebacken?' – Welche Pronomenart ist 'Wer'?",
                answers: ["Interrogativpronomen, weil es nach einer Person fragt", "Personalpronomen, weil es eine Person vertritt", "Demonstrativpronomen, weil es auf jemanden zeigt", "Possessivpronomen, weil es Besitz anzeigt"], correct: 0,
                explanation: "'Wer' fragt nach einer Person – ein Interrogativpronomen." },
            { id: "wortk5l1_test_6", category: "kurs_wort_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                question: "In welchem Satz ist 'sein' ein Possessivpronomen (nicht das Verb 'sein')?",
                answers: ["Er putzt sein Fahrrad.", "Er will Lehrer sein.", "Das kann nicht sein.", "Morgen wird er müde sein."], correct: 0,
                explanation: "'sein Fahrrad' zeigt Besitz an – hier ist 'sein' Possessivpronomen. In den anderen Sätzen ist 'sein' das Verb." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "wort_k5_l2",
        kurs: "wortarten_vertiefend_k5",
        order: 2,
        icon: "🔗",
        title: "Präpositionen und Konjunktionen genauer betrachtet",
        kurz: "Fester Kasus, Wechselpräpositionen & Nebensätze",
        erklaerung: {
            intro: "<b>Präpositionen</b> (Verhältniswörter) bestimmen den Fall (Kasus) des folgenden Nomens. Manche verlangen immer den Akkusativ, manche immer den Dativ, manche (die <b>Wechselpräpositionen</b>) mal den einen, mal den anderen – je nachdem, ob eine Bewegung (Akkusativ, 'wohin?') oder ein Ort (Dativ, 'wo?') gemeint ist. <b>Konjunktionen</b> verbinden Sätze: nebenordnende (und, oder, aber) verbinden gleichrangige Sätze, unterordnende (weil, dass, obwohl) leiten einen Nebensatz ein und schicken das Verb ans Satzende.",
            beispiele: [
                "🎯 Feste Akkusativ-Präpositionen: für, durch, gegen, ohne, um → 'Das Geschenk ist für dich.'",
                "📍 Feste Dativ-Präpositionen: aus, bei, mit, nach, seit, von, zu → 'Ich komme aus der Schule.'",
                "🔄 Wechselpräposition 'in': 'Ich gehe in die Schule.' (Akkusativ, wohin?) vs. 'Ich bin in der Schule.' (Dativ, wo?)",
                "🔗 Nebenordnende Konjunktion: 'Ich koche, und du deckst den Tisch.' (Verb bleibt an Position 2)",
                "➡️ Unterordnende Konjunktion: 'Ich bleibe zu Hause, weil ich krank bin.' (Verb rückt ans Ende: 'bin')"
            ],
            merksatz: "Feste Akkusativ-Präpositionen: für, durch, gegen, ohne, um. Feste Dativ-Präpositionen: aus, bei, mit, nach, seit, von, zu. Wechselpräpositionen: Akkusativ bei Bewegung (wohin?), Dativ bei Ort (wo?). Nebenordnende Konjunktionen (und, oder, aber, denn) lassen das Verb an Position 2, unterordnende (weil, dass, obwohl, wenn) schicken es ans Satzende."
        },
        uebung: {
            leicht: [
                { id: "wortk5l2u_leicht_1", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "leicht", points: 10,
                    question: "Welchen Fall verlangt die Präposition 'für' immer?",
                    answers: ["Akkusativ", "Dativ", "Genitiv", "Nominativ"], correct: 0,
                    explanation: "'für' ist eine feste Akkusativ-Präposition: 'für dich', 'für den Hund'." },
                { id: "wortk5l2u_leicht_2", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "leicht", points: 10,
                    question: "Welchen Fall verlangt die Präposition 'mit' immer?",
                    answers: ["Dativ", "Akkusativ", "Genitiv", "Nominativ"], correct: 0,
                    explanation: "'mit' ist eine feste Dativ-Präposition: 'mit dir', 'mit dem Hund'." },
                { id: "wortk5l2u_leicht_3", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "leicht", points: 10,
                    question: "Welche Konjunktion verbindet zwei gleichrangige Sätze (nebenordnend)?",
                    answers: ["und", "weil", "dass", "obwohl"], correct: 0,
                    explanation: "'und' ist eine nebenordnende Konjunktion, das Verb bleibt an Position 2." },
                { id: "wortk5l2u_leicht_4", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "leicht", points: 10,
                    question: "Welche Konjunktion leitet einen Nebensatz ein und schickt das Verb ans Ende?",
                    answers: ["weil", "und", "oder", "aber"], correct: 0,
                    explanation: "'weil' ist eine unterordnende Konjunktion – das Verb steht am Satzende." }
            ],
            mittel: [
                { id: "wortk5l2u_mittel_1", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "mittel", points: 10,
                    question: "'Ich gehe durch den Park.' – Welchen Fall verlangt 'durch'?",
                    answers: ["Akkusativ, das ist bei 'durch' immer so", "Dativ, das ist bei 'durch' immer so", "Genitiv, das ist bei 'durch' immer so", "Mal Dativ, mal Akkusativ – je nach Satz"], correct: 0,
                    explanation: "'durch' gehört zu den festen Akkusativ-Präpositionen: für, durch, gegen, ohne, um." },
                { id: "wortk5l2u_mittel_2", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "mittel", points: 10,
                    question: "'Ich lege das Buch auf den Tisch.' – Warum steht hier der Akkusativ nach 'auf'?",
                    answers: ["Weil eine Bewegung/Richtung gemeint ist (wohin?)", "Weil 'auf' immer den Akkusativ verlangt", "Weil ein fester Ort gemeint ist (wo?)", "Weil 'Tisch' ein männliches Nomen ist"], correct: 0,
                    explanation: "'auf' ist eine Wechselpräposition: Bei Bewegung (wohin?) steht der Akkusativ." },
                { id: "wortk5l2u_mittel_3", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "mittel", points: 10,
                    question: "'Das Buch liegt auf dem Tisch.' – Warum steht hier der Dativ nach 'auf'?",
                    answers: ["Weil ein fester Ort gemeint ist (wo?)", "Weil eine Bewegung gemeint ist (wohin?)", "Weil 'auf' immer den Dativ verlangt", "Weil 'Tisch' ein Dativ-Nomen ist"], correct: 0,
                    explanation: "Bei einem festen Ort (wo?) steht nach Wechselpräpositionen der Dativ." },
                { id: "wortk5l2u_mittel_4", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "mittel", points: 10,
                    question: "'Ich bleibe zu Hause, obwohl ich Zeit habe.' – Wo steht das Verb 'habe' und warum?",
                    answers: ["Am Satzende, weil 'obwohl' eine unterordnende Konjunktion ist", "An Position 2, weil 'obwohl' eine nebenordnende Konjunktion ist", "Ganz am Satzanfang, weil es sich um einen Nebensatz handelt", "Direkt nach 'obwohl', das ist bei Nebensätzen immer so"], correct: 0,
                    explanation: "'obwohl' ist unterordnend, deshalb rückt das Verb im Nebensatz ans Ende." }
            ],
            schwer: [
                { id: "wortk5l2u_schwer_1", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "schwer", points: 10,
                    question: "Welches Satzpaar zeigt den Unterschied zwischen Wechselpräposition mit Akkusativ und Dativ richtig?",
                    answers: ["'Er geht in die Küche' (Akkusativ) vs. 'Er kocht in der Küche' (Dativ)", "'Er geht in die Küche' (Dativ) vs. 'Er kocht in der Küche' (Akkusativ)", "Beide Sätze stehen laut dieser Regel tatsächlich im Akkusativ", "Beide Sätze stehen laut dieser Regel tatsächlich im Dativ"], correct: 0,
                    explanation: "Bewegung (wohin? → in die Küche) = Akkusativ, Ort (wo? → in der Küche) = Dativ." },
                { id: "wortk5l2u_schwer_2", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "schwer", points: 10,
                    question: "Welcher Satz enthält einen Fehler bei Präposition und Fall?",
                    answers: ["Ich komme aus die Schule.", "Ich komme aus der Schule.", "Ich warte auf meinen Freund.", "Er wohnt bei seiner Oma."], correct: 0,
                    explanation: "'aus' verlangt immer den Dativ: richtig wäre 'aus der Schule', nicht 'aus die Schule'." },
                { id: "wortk5l2u_schwer_3", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "schwer", points: 10,
                    question: "Wodurch unterscheiden sich nebenordnende und unterordnende Konjunktionen vor allem?",
                    answers: ["Bei unterordnenden rückt das Verb ans Satzende, bei nebenordnenden nicht", "Nebenordnende Konjunktionen gibt es im Deutschen so gut wie gar nicht", "Unterordnende Konjunktionen verbinden ausschließlich zwei Hauptsätze", "Es gibt zwischen beiden Konjunktionsarten keinen Unterschied"], correct: 0,
                    explanation: "Unterordnende Konjunktionen (weil, dass, obwohl...) leiten einen Nebensatz ein – das Verb steht am Ende." },
                { id: "wortk5l2u_schwer_4", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "schwer", points: 10,
                    question: "'Ich esse einen Apfel, weil ich Hunger habe.' – Welche Wortart ist 'weil' hier?",
                    answers: ["Unterordnende Konjunktion", "Nebenordnende Konjunktion", "Präposition mit Dativ", "Rückbezügliches Pronomen"], correct: 0,
                    explanation: "'weil' leitet einen Nebensatz ein und schickt 'habe' ans Satzende – eine unterordnende Konjunktion." }
            ]
        },
        test: [
            { id: "wortk5l2_test_1", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "leicht", points: 10,
                question: "Welchen Fall verlangt die Präposition 'ohne' immer?",
                answers: ["Akkusativ", "Dativ", "Genitiv", "Nominativ"], correct: 0,
                explanation: "'ohne' gehört zu den festen Akkusativ-Präpositionen: für, durch, gegen, ohne, um." },
            { id: "wortk5l2_test_2", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "leicht", points: 10,
                question: "Welchen Fall verlangt die Präposition 'nach' immer?",
                answers: ["Dativ", "Akkusativ", "Genitiv", "Nominativ"], correct: 0,
                explanation: "'nach' gehört zu den festen Dativ-Präpositionen: aus, bei, mit, nach, seit, von, zu." },
            { id: "wortk5l2_test_3", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "mittel", points: 10,
                question: "'Die Katze springt auf den Schrank.' – Warum steht hier der Akkusativ?",
                answers: ["Weil eine Bewegung/Richtung gemeint ist (wohin?)", "Weil ein fester Ort gemeint ist (wo?)", "Weil 'auf' immer den Akkusativ verlangt", "Weil 'Schrank' immer im Akkusativ steht"], correct: 0,
                explanation: "Bewegung (wohin? → auf den Schrank) verlangt bei Wechselpräpositionen den Akkusativ." },
            { id: "wortk5l2_test_4", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "mittel", points: 10,
                question: "'Ich bleibe zu Hause, weil es regnet.' – An welcher Stelle steht das Verb 'regnet' und warum?",
                answers: ["Am Satzende, weil 'weil' unterordnet", "An Position 2, weil 'weil' nebenordnet", "Ganz am Anfang, direkt vor dem Subjekt", "Direkt nach dem Komma vor dem Subjekt"], correct: 0,
                explanation: "'weil' ist unterordnend – das Verb rückt im Nebensatz ans Satzende." },
            { id: "wortk5l2_test_5", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "schwer", points: 10,
                question: "Welcher Satz enthält einen Fehler bei Präposition und Fall?",
                answers: ["Ich fahre mit den Bus.", "Ich fahre mit dem Bus.", "Ich warte auf den Bus.", "Ich komme mit dem Fahrrad."], correct: 0,
                explanation: "'mit' verlangt immer den Dativ: richtig wäre 'mit dem Bus', nicht 'mit den Bus'." },
            { id: "wortk5l2_test_6", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "schwer", points: 10,
                question: "'Wir gehen ins Kino, obwohl es spät ist.' – Welche Wortart ist 'obwohl'?",
                answers: ["Unterordnende Konjunktion", "Nebenordnende Konjunktion", "Präposition mit Dativ", "Adverb der Begründung"], correct: 0,
                explanation: "'obwohl' leitet einen Nebensatz ein (Verb 'ist' am Ende) – eine unterordnende Konjunktion." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "dez_k6_l1",
        kurs: "dezimalzahlen_k6",
        order: 1,
        icon: "🔢",
        title: "Dezimalzahlen verstehen und vergleichen",
        kurz: "Stellenwerte, Größenvergleich und Runden",
        erklaerung: {
            intro: "<b>Dezimalzahlen</b> (Kommazahlen) erweitern das Stellenwertsystem hinter das Komma: die erste Nachkommastelle sind <b>Zehntel</b> (1/10), die zweite <b>Hundertstel</b> (1/100), die dritte <b>Tausendstel</b> (1/1000).",
            beispiele: [
                "🔟 0,7 bedeutet 7 Zehntel = 7/10",
                "💯 0,25 bedeutet 25 Hundertstel = 25/100",
                "⚖️ Vergleichen: 0,7 ist größer als 0,65, weil 7 Zehntel mehr sind als 6 Zehntel",
                "🔄 Runden: 3,47 wird auf eine Nachkommastelle gerundet zu 3,5 (die Ziffer danach ist 7, also ≥5)"
            ],
            merksatz: "1. Nachkommastelle = Zehntel, 2. = Hundertstel, 3. = Tausendstel. Zum Vergleichen erst die Stelle vor dem Komma, dann Zehntel, dann Hundertstel vergleichen. Zum Runden: Ziffer danach ≥5 → aufrunden, <5 → abrunden."
        },
        uebung: {
            leicht: [
                { id: "dezk6l1u_leicht_1", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Was bedeutet die erste Stelle nach dem Komma bei einer Dezimalzahl?",
                    answers: ["Zehntel", "Hundertstel", "Tausendstel", "Einer"], correct: 0,
                    explanation: "Die erste Nachkommastelle zeigt Zehntel an (1/10)." },
                { id: "dezk6l1u_leicht_2", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Wie viele Hundertstel sind in 0,25 enthalten?",
                    answers: ["25", "2", "5", "250"], correct: 0,
                    explanation: "0,25 = 25/100, also 25 Hundertstel." },
                { id: "dezk6l1u_leicht_3", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Welche dieser Zahlen ist die größte?",
                    answers: ["0,6", "0,45", "0,406", "0,099"], correct: 0,
                    explanation: "Stelle für Stelle vergleichen: 0,6 = 0,600 – das ist mehr als 0,450, 0,406 und 0,099." },
                { id: "dezk6l1u_leicht_4", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man 'drei Komma sieben' als Dezimalzahl?",
                    answers: ["3,7", "3,07", "30,7", "0,37"], correct: 0,
                    explanation: "'Drei Komma sieben' ist 3,7." }
            ],
            mittel: [
                { id: "dezk6l1u_mittel_1", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist größer: 0,7 oder 0,65?",
                    answers: ["0,7, weil 7 Zehntel mehr sind als 6 Zehntel", "0,65, weil die Zahl mehr Nachkommastellen hat", "Beide Zahlen sind exakt gleich groß", "Das lässt sich ohne Taschenrechner nicht sagen"], correct: 0,
                    explanation: "0,7 = 7 Zehntel, 0,65 = 6 Zehntel + 5 Hundertstel – 7 Zehntel sind mehr." },
                { id: "dezk6l1u_mittel_2", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Runde 3,47 auf eine Nachkommastelle.",
                    answers: ["3,5", "3,4", "3,0", "4,0"], correct: 0,
                    explanation: "Die Ziffer nach der Rundestelle ist 7 (≥5), also wird aufgerundet: 3,5." },
                { id: "dezk6l1u_mittel_3", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Wie viele Tausendstel sind in 0,125 enthalten?",
                    answers: ["125", "12", "1250", "25"], correct: 0,
                    explanation: "0,125 = 125/1000, also 125 Tausendstel." },
                { id: "dezk6l1u_mittel_4", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist die kleinste: 0,3 / 0,25 / 0,08 / 0,175?",
                    answers: ["0,08", "0,25", "0,3", "0,175"], correct: 0,
                    explanation: "An der Zehntelstelle hat 0,08 eine 0 – damit ist sie kleiner als 0,175, 0,25 und 0,3." }
            ],
            schwer: [
                { id: "dezk6l1u_schwer_1", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Runde 2,995 auf zwei Nachkommastellen.",
                    answers: ["3,00", "2,99", "2,90", "3,10"], correct: 0,
                    explanation: "Die Tausendstel-Ziffer ist 5 (≥5): 2,99 wird aufgerundet zu 3,00 (mit Übertrag)." },
                { id: "dezk6l1u_schwer_2", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Welche Zahl liegt zwischen 0,4 und 0,5?",
                    answers: ["0,45", "0,54", "0,04", "0,6"], correct: 0,
                    explanation: "0,45 liegt zwischen 0,4 und 0,5." },
                { id: "dezk6l1u_schwer_3", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Vergleiche 0,50 und 0,5 – welche Aussage stimmt?",
                    answers: ["Beide Zahlen sind exakt gleich groß", "0,50 ist größer wegen der Null", "0,5 ist größer, weil sie kürzer ist", "Man kann sie so nicht vergleichen"], correct: 0,
                    explanation: "Eine angehängte Null nach dem Komma ändert den Wert nicht: 0,50 = 0,5." },
                { id: "dezk6l1u_schwer_4", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Welche Dezimalzahl entspricht dem Bruch 3/4?",
                    answers: ["0,75", "0,34", "0,43", "3,4"], correct: 0,
                    explanation: "3/4 = 75/100 = 0,75." }
            ]
        },
        test: [
            { id: "dezk6l1_test_1", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                question: "Was bedeutet die zweite Stelle nach dem Komma bei einer Dezimalzahl?",
                answers: ["Hundertstel", "Zehntel", "Tausendstel", "Zehner"], correct: 0,
                explanation: "Die zweite Nachkommastelle zeigt Hundertstel an (1/100)." },
            { id: "dezk6l1_test_2", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                question: "Wie schreibt man 'null Komma vier' als Dezimalzahl?",
                answers: ["0,4", "4,0", "0,04", "0,004"], correct: 0,
                explanation: "'Null Komma vier' ist 0,4 (4 Zehntel)." },
            { id: "dezk6l1_test_3", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                question: "Welche Zahl ist größer: 0,09 oder 0,1?",
                answers: ["0,1, denn 1 Zehntel ist mehr", "0,09, denn es hat mehr Stellen", "Beide sind genau gleich groß", "Das kann man so nicht sagen"], correct: 0,
                explanation: "0,1 = 10 Hundertstel, das ist mehr als 9 Hundertstel." },
            { id: "dezk6l1_test_4", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                question: "Runde 5,63 auf eine Nachkommastelle.",
                answers: ["5,6", "5,7", "5,0", "6,0"], correct: 0,
                explanation: "Die Ziffer nach der Rundestelle ist 3 (<5), also wird abgerundet: 5,6." },
            { id: "dezk6l1_test_5", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                question: "Welche Aussage über 0,3 und 0,30 stimmt?",
                answers: ["Beide Zahlen sind exakt gleich groß", "0,30 ist größer wegen der Null", "0,3 ist größer, weil sie kürzer ist", "Man kann sie so nicht vergleichen"], correct: 0,
                explanation: "Eine angehängte Null nach dem Komma ändert den Wert nicht." },
            { id: "dezk6l1_test_6", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                question: "Runde 4,996 auf zwei Nachkommastellen.",
                answers: ["5,00", "4,99", "4,90", "5,10"], correct: 0,
                explanation: "Die Tausendstel-Ziffer ist 6 (≥5): 4,99 wird aufgerundet zu 5,00 (mit Übertrag)." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "negz_k6_l1",
        kurs: "negative_zahlen_k6",
        order: 1,
        icon: "➖",
        title: "Negative Zahlen – eine Einführung",
        kurz: "Die Zahlengerade nach links, Addition & Subtraktion",
        erklaerung: {
            intro: "<b>Negative Zahlen</b> liegen auf der Zahlengeraden links von der 0. Sie werden mit einem Minuszeichen geschrieben, z. B. -3. Je weiter eine Zahl links auf der Zahlengeraden liegt, desto kleiner ist sie.",
            beispiele: [
                "🌡️ Temperatur: -5°C ist kälter als 2°C, weil -5 kleiner ist als 2.",
                "📏 Auf der Zahlengeraden: -3 liegt links von 0, +3 liegt rechts von 0 – gleich weit entfernt.",
                "➕ Addition: -3 + 5 = 2 (von -3 aus 5 Schritte nach rechts)",
                "➖ Subtraktion: 2 - 5 = -3 (von 2 aus 5 Schritte nach links)"
            ],
            merksatz: "Je weiter links auf der Zahlengeraden, desto kleiner die Zahl: -5 < -2 < 0 < 3. Minus einer negativen Zahl wird zu Plus: eine negative Zahl abziehen ist wie eine positive Zahl addieren."
        },
        uebung: {
            leicht: [
                { id: "negzk6l1u_leicht_1", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "leicht", points: 10,
                    question: "Wo liegen negative Zahlen auf der Zahlengeraden?",
                    answers: ["Links von der 0", "Rechts von der 0", "Immer bei der 0", "Es gibt keine feste Regel"], correct: 0,
                    explanation: "Negative Zahlen liegen links von der 0 auf der Zahlengeraden." },
                { id: "negzk6l1u_leicht_2", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist die kleinste: -5, 2, 7 oder 3?",
                    answers: ["-5", "2", "7", "3"], correct: 0,
                    explanation: "Negative Zahlen liegen links von der Null – -5 ist die kleinste." },
                { id: "negzk6l1u_leicht_3", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man 'minus sieben' als Zahl?",
                    answers: ["-7", "7", "+7", "0,7"], correct: 0,
                    explanation: "'Minus sieben' wird als -7 geschrieben." },
                { id: "negzk6l1u_leicht_4", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl liegt am nächsten an 0: -2, -8, -5 oder -9?",
                    answers: ["-2", "-8", "-5", "-9"], correct: 0,
                    explanation: "Der Abstand zur Null ist bei -2 am kleinsten: 2 Schritte." }
            ],
            mittel: [
                { id: "negzk6l1u_mittel_1", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist kleiner: -3 oder -8?",
                    answers: ["-8, weil sie weiter links liegt", "-3, weil sie weiter links liegt", "-3, weil 3 kleiner ist als 8", "Beide Zahlen sind gleich groß"], correct: 0,
                    explanation: "-8 liegt weiter links auf der Zahlengeraden als -3 – also kleiner." },
                { id: "negzk6l1u_mittel_2", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "mittel", points: 10,
                    question: "Was ergibt -3 + 5?",
                    answers: ["2", "-8", "8", "-2"], correct: 0,
                    explanation: "Von -3 aus 5 Schritte nach rechts landet man bei 2." },
                { id: "negzk6l1u_mittel_3", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "mittel", points: 10,
                    question: "Was ergibt 2 - 5?",
                    answers: ["-3", "3", "-7", "7"], correct: 0,
                    explanation: "Von 2 aus 5 Schritte nach links landet man bei -3." },
                { id: "negzk6l1u_mittel_4", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist am größten: -1, -10, 4 oder -7?",
                    answers: ["4", "-1", "-10", "-7"], correct: 0,
                    explanation: "4 ist die einzige positive Zahl und liegt am weitesten rechts." }
            ],
            schwer: [
                { id: "negzk6l1u_schwer_1", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "schwer", points: 10,
                    question: "Was ergibt -4 + (-3)?",
                    answers: ["-7", "7", "-1", "1"], correct: 0,
                    explanation: "Zwei negative Zahlen addiert man wie positive und behält das Minus: -4 + (-3) = -7." },
                { id: "negzk6l1u_schwer_2", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "schwer", points: 10,
                    question: "Was ergibt -6 - (-2)?",
                    answers: ["-4", "-8", "4", "8"], correct: 0,
                    explanation: "Minus einer negativen Zahl wird zu Plus: -6 - (-2) = -6 + 2 = -4." },
                { id: "negzk6l1u_schwer_3", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "schwer", points: 10,
                    question: "Welche Aussage über -10 und -3 stimmt?",
                    answers: ["-10 ist kleiner, es liegt weiter links", "-10 ist größer, denn 10 ist mehr als 3", "Beide Zahlen sind genau gleich groß", "Negative Zahlen kann man nicht vergleichen"], correct: 0,
                    explanation: "Bei negativen Zahlen ist die Zahl mit dem größeren Betrag die kleinere Zahl." },
                { id: "negzk6l1u_schwer_4", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "schwer", points: 10,
                    question: "Was ergibt 5 - 9?",
                    answers: ["-4", "4", "-14", "14"], correct: 0,
                    explanation: "Von 5 aus 9 Schritte nach links landet man bei -4." }
            ]
        },
        test: [
            { id: "negzk6l1_test_1", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "leicht", points: 10,
                question: "Welches Zeichen zeigt eine negative Zahl an?",
                answers: ["Ein Minuszeichen (-) vor der Zahl", "Ein Pluszeichen (+) vor der Zahl", "Ein Komma nach der Zahl", "Ein Punkt vor der Zahl"], correct: 0,
                explanation: "Ein Minuszeichen vor der Zahl zeigt eine negative Zahl an." },
            { id: "negzk6l1_test_2", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "leicht", points: 10,
                question: "Welche Zahl ist die größte: -1, -6, -9 oder -4?",
                answers: ["-1", "-6", "-9", "-4"], correct: 0,
                explanation: "Je näher an der Null, desto größer – -1 liegt am weitesten rechts." },
            { id: "negzk6l1_test_3", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "mittel", points: 10,
                question: "Was ergibt -2 + 6?",
                answers: ["4", "-8", "8", "-4"], correct: 0,
                explanation: "Von -2 aus 6 Schritte nach rechts landet man bei 4." },
            { id: "negzk6l1_test_4", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "mittel", points: 10,
                question: "Was ergibt 3 - 7?",
                answers: ["-4", "4", "-10", "10"], correct: 0,
                explanation: "Von 3 aus 7 Schritte nach links landet man bei -4." },
            { id: "negzk6l1_test_5", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "schwer", points: 10,
                question: "Was ergibt -5 - (-5)?",
                answers: ["0", "-10", "10", "-1"], correct: 0,
                explanation: "Minus einer gleich großen negativen Zahl hebt sich auf: -5 - (-5) = -5 + 5 = 0." },
            { id: "negzk6l1_test_6", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "schwer", points: 10,
                question: "Welche Zahl ist am kleinsten: -20, -2, 0 oder -8?",
                answers: ["-20", "-2", "0", "-8"], correct: 0,
                explanation: "-20 liegt am weitesten links auf der Zahlengeraden." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "zeit_k6_l1",
        kurs: "zeitformen_k6",
        order: 1,
        icon: "🕰️",
        title: "Präteritum, Perfekt und Plusquamperfekt unterscheiden",
        kurz: "Die drei Vergangenheitsformen sicher einordnen",
        erklaerung: {
            intro: "Für die Vergangenheit gibt es im Deutschen drei Zeitformen: <b>Präteritum</b> (einfache Vergangenheit: 'er ging'), <b>Perfekt</b> (zusammengesetzt mit haben/sein + Partizip II: 'er ist gegangen') und <b>Plusquamperfekt</b> (Vorvergangenheit: 'er war gegangen' – für etwas, das VOR einem anderen Vergangenheits-Ereignis passierte).",
            beispiele: [
                "📖 Präteritum wird oft beim Erzählen/Schreiben verwendet: 'Es war einmal ein König, der lebte...'",
                "💬 Perfekt wird oft im Gespräch verwendet: 'Ich habe gestern ein Buch gelesen.'",
                "⏮️ Plusquamperfekt für die Vergangenheit der Vergangenheit: 'Nachdem er gegessen hatte, ging er schlafen.'",
                "🔨 Perfekt-Bildung: haben/sein (Präsens) + Partizip II, z. B. 'hat gemacht', 'ist gefahren'",
                "🔧 Plusquamperfekt-Bildung: hatte/war (Präteritum von haben/sein) + Partizip II, z. B. 'hatte gemacht', 'war gefahren'"
            ],
            merksatz: "Präteritum = einfache Form (ging). Perfekt = haben/sein (Präsens) + Partizip II (ist gegangen). Plusquamperfekt = hatte/war (Präteritum) + Partizip II (war gegangen) – für ein Ereignis VOR einem anderen Vergangenheits-Ereignis."
        },
        uebung: {
            leicht: [
                { id: "zeitk6l1u_leicht_1", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "leicht", points: 10,
                    question: "Welche Zeitform ist 'er ging'?",
                    answers: ["Präteritum", "Perfekt", "Plusquamperfekt", "Präsens"], correct: 0,
                    explanation: "'ging' ist die einfache Vergangenheitsform – das Präteritum." },
                { id: "zeitk6l1u_leicht_2", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "leicht", points: 10,
                    question: "Wie wird das Perfekt gebildet?",
                    answers: ["haben/sein + Partizip II", "hatte/war + Partizip II", "nur mit dem Partizip II", "nur mit haben/sein"], correct: 0,
                    explanation: "Das Perfekt besteht aus haben/sein im Präsens plus Partizip II." },
                { id: "zeitk6l1u_leicht_3", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "leicht", points: 10,
                    question: "Welche Zeitform ist 'er ist gegangen'?",
                    answers: ["Perfekt", "Präteritum", "Plusquamperfekt", "Präsens"], correct: 0,
                    explanation: "'ist gegangen' = sein (Präsens) + Partizip II – das Perfekt." },
                { id: "zeitk6l1u_leicht_4", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "leicht", points: 10,
                    question: "Welche Zeitform ist 'er war gegangen'?",
                    answers: ["Plusquamperfekt", "Perfekt", "Präteritum", "Präsens"], correct: 0,
                    explanation: "'war gegangen' = sein im Präteritum + Partizip II – das Plusquamperfekt." }
            ],
            mittel: [
                { id: "zeitk6l1u_mittel_1", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "mittel", points: 10,
                    question: "Welche Zeitform wird beim Erzählen von Geschichten meist verwendet?",
                    answers: ["Präteritum", "Perfekt", "Plusquamperfekt", "Präsens"], correct: 0,
                    explanation: "Beim Erzählen und Schreiben von Geschichten steht meist das Präteritum." },
                { id: "zeitk6l1u_mittel_2", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "mittel", points: 10,
                    question: "Welche Zeitform wird im Gespräch meist verwendet?",
                    answers: ["Perfekt", "Präteritum", "Plusquamperfekt", "Futur"], correct: 0,
                    explanation: "Im mündlichen Gespräch wird meist das Perfekt verwendet." },
                { id: "zeitk6l1u_mittel_3", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "mittel", points: 10,
                    question: "Wie wird das Plusquamperfekt gebildet?",
                    answers: ["hatte/war (Präteritum) + Partizip II", "haben/sein (Präsens) + Partizip II", "nur mit dem Partizip II", "hatte/war + Infinitiv"], correct: 0,
                    explanation: "Das Plusquamperfekt besteht aus hatte/war im Präteritum plus Partizip II." },
                { id: "zeitk6l1u_mittel_4", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "mittel", points: 10,
                    question: "'Nachdem er gegessen hatte, ging er schlafen.' – Welche Zeitform ist 'gegessen hatte'?",
                    answers: ["Plusquamperfekt", "Perfekt", "Präteritum", "Präsens"], correct: 0,
                    explanation: "'hatte gegessen' = haben im Präteritum + Partizip II – das Plusquamperfekt." }
            ],
            schwer: [
                { id: "zeitk6l1u_schwer_1", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "schwer", points: 10,
                    question: "Wofür wird das Plusquamperfekt verwendet?",
                    answers: ["Für ein Ereignis vor einem anderen Vergangenheits-Ereignis", "Für ein Ereignis, das gerade in der Gegenwart passiert", "Für ein Ereignis, das erst in der Zukunft passieren wird", "Für ein Ereignis ganz ohne zeitliche Einordnung"], correct: 0,
                    explanation: "Das Plusquamperfekt zeigt die 'Vergangenheit der Vergangenheit'." },
                { id: "zeitk6l1u_schwer_2", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "schwer", points: 10,
                    question: "'Er hatte das Buch gelesen, bevor er den Film sah.' – Welches Ereignis geschah zuerst?",
                    answers: ["Das Lesen des Buches (Plusquamperfekt)", "Das Ansehen des Films (Präteritum)", "Beide Ereignisse geschahen exakt gleichzeitig", "Das lässt sich aus den Zeitformen nicht erkennen"], correct: 0,
                    explanation: "Das Plusquamperfekt ('hatte gelesen') zeigt: dieses Ereignis war zuerst." },
                { id: "zeitk6l1u_schwer_3", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "schwer", points: 10,
                    question: "Welche Aussage über Präteritum und Perfekt stimmt inhaltlich?",
                    answers: ["Beide beschreiben die Vergangenheit, nur anders gebildet", "Präteritum beschreibt die Zukunft, Perfekt die Vergangenheit", "Perfekt gibt es im Deutschen eigentlich gar nicht wirklich", "Präteritum wird ausschließlich bei Modalverben verwendet"], correct: 0,
                    explanation: "Beide Zeitformen beschreiben Vergangenes – sie unterscheiden sich in Bildung und typischer Verwendung." },
                { id: "zeitk6l1u_schwer_4", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "schwer", points: 10,
                    question: "Bilde das Plusquamperfekt von 'er kommt'.",
                    answers: ["er war gekommen", "er ist gekommen", "er kam", "er hatte gekommen"], correct: 0,
                    explanation: "'kommen' bildet die Vergangenheit mit sein: Plusquamperfekt ist 'er war gekommen'." }
            ]
        },
        test: [
            { id: "zeitk6l1_test_1", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "leicht", points: 10,
                question: "Welche Zeitform ist 'sie las'?",
                answers: ["Präteritum", "Perfekt", "Plusquamperfekt", "Präsens"], correct: 0,
                explanation: "'las' ist die einfache Vergangenheitsform – das Präteritum." },
            { id: "zeitk6l1_test_2", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "leicht", points: 10,
                question: "Welche Zeitform ist 'sie hat gelesen'?",
                answers: ["Perfekt", "Präteritum", "Plusquamperfekt", "Präsens"], correct: 0,
                explanation: "'hat gelesen' = haben (Präsens) + Partizip II – das Perfekt." },
            { id: "zeitk6l1_test_3", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "mittel", points: 10,
                question: "Wie wird das Perfekt von 'fahren' korrekt gebildet?",
                answers: ["ist gefahren", "hat gefahren", "war gefahren", "hatte gefahren"], correct: 0,
                explanation: "'fahren' bildet das Perfekt mit sein: 'ist gefahren'." },
            { id: "zeitk6l1_test_4", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "mittel", points: 10,
                question: "Welche Zeitform ist 'sie war gefahren'?",
                answers: ["Plusquamperfekt", "Perfekt", "Präteritum", "Präsens"], correct: 0,
                explanation: "'war gefahren' = sein im Präteritum + Partizip II – das Plusquamperfekt." },
            { id: "zeitk6l1_test_5", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "schwer", points: 10,
                question: "'Als der Zug ankam, war der Bus schon abgefahren.' – Welches Ereignis geschah zuerst?",
                answers: ["Die Abfahrt des Busses (Plusquamperfekt)", "Die Ankunft des Zuges (Präteritum)", "Beide Ereignisse geschahen gleichzeitig", "Das lässt sich hier nicht erkennen"], correct: 0,
                explanation: "Das Plusquamperfekt ('war abgefahren') zeigt: der Bus war zuerst weg." },
            { id: "zeitk6l1_test_6", category: "kurs_zeit_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "zeitformen", difficulty: "schwer", points: 10,
                question: "Wofür braucht man vor allem das Plusquamperfekt?",
                answers: ["Um zu zeigen, was vor einem anderen Ereignis geschah", "Um ein aktuelles Ereignis in der Gegenwart zu beschreiben", "Um eine Vermutung über die Zukunft auszudrücken", "Um einen allgemeingültigen Fakt auszudrücken"], correct: 0,
                explanation: "Das Plusquamperfekt zeigt die Reihenfolge von zwei Vergangenheits-Ereignissen." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "comp_k6_l1",
        kurs: "comparison_k6",
        order: 1,
        icon: "⚖️",
        title: "Comparison of Adjectives",
        kurz: "Komparativ und Superlativ richtig bilden",
        erklaerung: {
            intro: "Um Adjektive zu vergleichen, gibt es im Englischen den <b>Komparativ</b> (mehr als) und den <b>Superlativ</b> (am meisten). Kurze Adjektive (meist 1 Silbe) bekommen die Endung <b>-er/-est</b>, lange Adjektive (meist 2+ Silben) bekommen <b>more/most</b> davor. Manche Formen sind unregelmäßig.",
            beispiele: [
                "📏 tall → taller → tallest (kurzes Adjektiv: +er/+est)",
                "😊 happy → happier → happiest (Konsonant+y: y wird zu i)",
                "🔥 big → bigger → biggest (kurzer Vokal + Konsonant: Konsonant verdoppeln)",
                "🎨 beautiful → more beautiful → most beautiful (langes Adjektiv: more/most)",
                "👍 good → better → best (unregelmäßig!)"
            ],
            merksatz: "Kurze Adjektive (1 Silbe): +er/+est. Auf -e: nur +r/+st. Konsonant+y: y→i+er/est. Kurzer Vokal+Konsonant: Konsonant verdoppeln. Lange Adjektive (2+ Silben, meist): more/most davor. Unregelmäßig: good-better-best, bad-worse-worst."
        },
        uebung: {
            leicht: [
                { id: "compk6l1u_leicht_1", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "leicht", points: 10,
                    question: "Wie lautet der Komparativ von 'tall'?",
                    answers: ["taller", "more tall", "tallest", "tallier"], correct: 0,
                    explanation: "Kurze Adjektive bekommen +er: tall → taller." },
                { id: "compk6l1u_leicht_2", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "leicht", points: 10,
                    question: "Wie lautet der Superlativ von 'small'?",
                    answers: ["smallest", "more small", "smaller", "most small"], correct: 0,
                    explanation: "Kurze Adjektive bekommen +est: small → smallest." },
                { id: "compk6l1u_leicht_3", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "leicht", points: 10,
                    question: "Welche Endung bekommen kurze (einsilbige) Adjektive im Komparativ meistens?",
                    answers: ["-er", "-est", "more davor", "-ies"], correct: 0,
                    explanation: "Kurze Adjektive bekommen im Komparativ meistens die Endung -er." },
                { id: "compk6l1u_leicht_4", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "leicht", points: 10,
                    question: "Wie lautet der Komparativ von 'good' (unregelmäßig)?",
                    answers: ["better", "gooder", "more good", "best"], correct: 0,
                    explanation: "'good' ist unregelmäßig: good → better → best." }
            ],
            mittel: [
                { id: "compk6l1u_mittel_1", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "mittel", points: 10,
                    question: "Wie lautet der Komparativ von 'happy'?",
                    answers: ["happier", "happyer", "more happy", "happiest"], correct: 0,
                    explanation: "Nach Konsonant+y wird y zu i: happy → happier." },
                { id: "compk6l1u_mittel_2", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "mittel", points: 10,
                    question: "Wie lautet der Superlativ von 'big'?",
                    answers: ["biggest", "bigest", "most big", "bigger"], correct: 0,
                    explanation: "Kurzer Vokal + Konsonant: Konsonant verdoppeln: big → biggest." },
                { id: "compk6l1u_mittel_3", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "mittel", points: 10,
                    question: "Wie lautet der Komparativ von 'beautiful' (langes Adjektiv)?",
                    answers: ["more beautiful", "beautifuler", "beautifullest", "most beautiful"], correct: 0,
                    explanation: "Lange Adjektive bekommen more davor: beautiful → more beautiful." },
                { id: "compk6l1u_mittel_4", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "mittel", points: 10,
                    question: "Wie lautet der Superlativ von 'bad' (unregelmäßig)?",
                    answers: ["worst", "badest", "more bad", "worse"], correct: 0,
                    explanation: "'bad' ist unregelmäßig: bad → worse → worst." }
            ],
            schwer: [
                { id: "compk6l1u_schwer_1", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "schwer", points: 10,
                    question: "Warum wird bei 'big' das g verdoppelt (bigger, biggest)?",
                    answers: ["Weil ein kurzer Vokal davor steht", "Weil ein langer Vokal davor steht", "Weil das Adjektiv zwei Silben hat", "Weil es ein unregelmäßiges Wort ist"], correct: 0,
                    explanation: "Bei kurzem Vokal + Endkonsonant wird der Konsonant vor -er/-est verdoppelt." },
                { id: "compk6l1u_schwer_2", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "schwer", points: 10,
                    question: "Welche Regel gilt für Adjektive, die auf Konsonant + y enden?",
                    answers: ["Das y wird zu i, dann +er/+est", "Es wird einfach nur +er/+est angehängt", "Das y bleibt und more/most kommt davor", "Diese Adjektive haben keine Steigerung"], correct: 0,
                    explanation: "Konsonant+y: y wird zu i, dann +er/+est, z. B. happy → happier." },
                { id: "compk6l1u_schwer_3", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "schwer", points: 10,
                    question: "Wie lautet der Superlativ von 'interesting' (mehrsilbig)?",
                    answers: ["most interesting", "interestingest", "more interesting", "interestinger"], correct: 0,
                    explanation: "Mehrsilbige Adjektive bekommen most davor: interesting → most interesting." },
                { id: "compk6l1u_schwer_4", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "schwer", points: 10,
                    question: "Welches Adjektiv wird korrekt NICHT mit -er/-est gesteigert?",
                    answers: ["expensive (more/most expensive)", "fast – faster – fastest", "tall – taller – tallest", "big – bigger – biggest"], correct: 0,
                    explanation: "'expensive' ist mehrsilbig und wird mit more/most gesteigert, nicht mit -er/-est." }
            ]
        },
        test: [
            { id: "compk6l1_test_1", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "leicht", points: 10,
                question: "Wie lautet der Komparativ von 'old'?",
                answers: ["older", "more old", "oldest", "oldier"], correct: 0,
                explanation: "Kurze Adjektive bekommen +er: old → older." },
            { id: "compk6l1_test_2", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "leicht", points: 10,
                question: "Wie lautet der Superlativ von 'fast'?",
                answers: ["fastest", "more fast", "faster", "most fast"], correct: 0,
                explanation: "Kurze Adjektive bekommen +est: fast → fastest." },
            { id: "compk6l1_test_3", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "mittel", points: 10,
                question: "Wie lautet der Komparativ von 'nice' (endet auf -e)?",
                answers: ["nicer", "nicier", "more nice", "nicest"], correct: 0,
                explanation: "Bei Adjektiven auf -e wird nur -r angehängt: nice → nicer." },
            { id: "compk6l1_test_4", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "mittel", points: 10,
                question: "Wie lautet der Superlativ von 'hot' (kurzer Vokal + Konsonant)?",
                answers: ["hottest", "hotest", "most hot", "hotter"], correct: 0,
                explanation: "Konsonant verdoppeln: hot → hottest." },
            { id: "compk6l1_test_5", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "schwer", points: 10,
                question: "Wie lautet der Superlativ von 'far' (unregelmäßig)?",
                answers: ["farthest", "farrest", "more far", "farer"], correct: 0,
                explanation: "'far' ist unregelmäßig: far → farther → farthest." },
            { id: "compk6l1_test_6", category: "kurs_comp_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "comparison", difficulty: "schwer", points: 10,
                question: "Wie lautet der Komparativ von 'difficult' (mehrsilbig)?",
                answers: ["more difficult", "difficulter", "difficultest", "most difficult"], correct: 0,
                explanation: "Mehrsilbige Adjektive bekommen more davor: difficult → more difficult." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "groe_k5_l1",
        kurs: "groessen_umrechnen_k5",
        order: 1,
        icon: "📏",
        title: "Größen umrechnen",
        kurz: "Längen, Gewichte, Zeit und Geld umrechnen",
        erklaerung: {
            intro: "Größen wie Längen, Gewichte oder Zeit lassen sich in verschiedenen <b>Einheiten</b> angeben. Um sie zu vergleichen oder zu addieren, muss man sie oft in dieselbe Einheit umrechnen.",
            beispiele: [
                "📏 Längen: 1 m = 100 cm, 1 km = 1000 m, 1 cm = 10 mm",
                "⚖️ Gewichte: 1 kg = 1000 g, 1 t = 1000 kg",
                "⏰ Zeit: 1 h = 60 min, 1 min = 60 s",
                "💶 Geld: 1 € = 100 Cent"
            ],
            merksatz: "Von einer größeren in eine kleinere Einheit umrechnen: multiplizieren (mal 10, 100, 1000 ...). Von klein nach groß: dividieren."
        },
        uebung: {
            leicht: [
                { id: "groek5l1u_leicht_1", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "leicht", points: 10,
                    question: "Wie viele cm sind 1 m?",
                    answers: ["100 cm", "10 cm", "1000 cm", "1 cm"], correct: 0,
                    explanation: "1 m = 100 cm." },
                { id: "groek5l1u_leicht_2", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "leicht", points: 10,
                    question: "Wie viele g sind 1 kg?",
                    answers: ["1000 g", "100 g", "10 g", "10 000 g"], correct: 0,
                    explanation: "1 kg = 1000 g." },
                { id: "groek5l1u_leicht_3", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "leicht", points: 10,
                    question: "Wie viele min sind 1 h?",
                    answers: ["60 min", "100 min", "24 min", "12 min"], correct: 0,
                    explanation: "1 Stunde = 60 Minuten." },
                { id: "groek5l1u_leicht_4", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "leicht", points: 10,
                    question: "Wie viele Cent sind 1 €?",
                    answers: ["100 Cent", "10 Cent", "1000 Cent", "60 Cent"], correct: 0,
                    explanation: "1 Euro = 100 Cent." }
            ],
            mittel: [
                { id: "groek5l1u_mittel_1", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "mittel", points: 10,
                    question: "Wandle 250 cm in Meter um.",
                    answers: ["2,5 m", "25 m", "0,25 m", "250 m"], correct: 0,
                    explanation: "250 cm : 100 = 2,5 m." },
                { id: "groek5l1u_mittel_2", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "mittel", points: 10,
                    question: "Wandle 3,5 kg in Gramm um.",
                    answers: ["3500 g", "350 g", "35 g", "35 000 g"], correct: 0,
                    explanation: "3,5 kg × 1000 = 3500 g." },
                { id: "groek5l1u_mittel_3", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "mittel", points: 10,
                    question: "Wandle 90 min in Stunden um.",
                    answers: ["1,5 h", "0,9 h", "9 h", "15 h"], correct: 0,
                    explanation: "90 min : 60 = 1,5 h." },
                { id: "groek5l1u_mittel_4", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "mittel", points: 10,
                    question: "Wandle 2 km in Meter um.",
                    answers: ["2000 m", "200 m", "20 000 m", "20 m"], correct: 0,
                    explanation: "2 km × 1000 = 2000 m." }
            ],
            schwer: [
                { id: "groek5l1u_schwer_1", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "schwer", points: 10,
                    question: "Wandle 1250 mm in Meter um.",
                    answers: ["1,25 m", "12,5 m", "0,125 m", "125 m"], correct: 0,
                    explanation: "1250 mm : 1000 = 1,25 m." },
                { id: "groek5l1u_schwer_2", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "schwer", points: 10,
                    question: "Wandle 4,2 t in Kilogramm um.",
                    answers: ["4200 kg", "420 kg", "42 000 kg", "42 kg"], correct: 0,
                    explanation: "4,2 t × 1000 = 4200 kg." },
                { id: "groek5l1u_schwer_3", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "schwer", points: 10,
                    question: "Wie viele Sekunden sind 2,5 min?",
                    answers: ["150 s", "250 s", "125 s", "300 s"], correct: 0,
                    explanation: "2,5 min × 60 = 150 s." },
                { id: "groek5l1u_schwer_4", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "schwer", points: 10,
                    question: "Ein Rezept braucht 750 g Mehl, deine Waage zeigt kg an - wie viel kg wiegst du ab?",
                    answers: ["0,75 kg", "7,5 kg", "0,075 kg", "75 kg"], correct: 0,
                    explanation: "750 g : 1000 = 0,75 kg." }
            ]
        },
        test: [
            { id: "groek5l1_test_1", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "leicht", points: 10,
                question: "Wie viele mm sind 1 cm?",
                answers: ["10 mm", "100 mm", "1 mm", "1000 mm"], correct: 0,
                explanation: "1 cm = 10 mm." },
            { id: "groek5l1_test_2", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "leicht", points: 10,
                question: "Wie viele Sekunden sind 1 min?",
                answers: ["60 s", "100 s", "30 s", "10 s"], correct: 0,
                explanation: "1 Minute = 60 Sekunden." },
            { id: "groek5l1_test_3", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "mittel", points: 10,
                question: "Wandle 500 g in kg um.",
                answers: ["0,5 kg", "5 kg", "0,05 kg", "50 kg"], correct: 0,
                explanation: "500 g : 1000 = 0,5 kg." },
            { id: "groek5l1_test_4", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "mittel", points: 10,
                question: "Wandle 1,5 h in Minuten um.",
                answers: ["90 min", "150 min", "15 min", "60 min"], correct: 0,
                explanation: "1,5 h × 60 = 90 min." },
            { id: "groek5l1_test_5", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "schwer", points: 10,
                question: "Wandle 3,2 m in cm um.",
                answers: ["320 cm", "32 cm", "3200 cm", "3,2 cm"], correct: 0,
                explanation: "3,2 m × 100 = 320 cm." },
            { id: "groek5l1_test_6", category: "kurs_groe_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "groessen", difficulty: "schwer", points: 10,
                question: "Wandle 2450 m in km um.",
                answers: ["2,45 km", "24,5 km", "0,245 km", "245 km"], correct: 0,
                explanation: "2450 m : 1000 = 2,45 km." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "proz_k7_l1",
        kurs: "prozentrechnung_k7",
        order: 1,
        icon: "💯",
        title: "Grundwert, Prozentwert und Prozentsatz",
        kurz: "Die drei Grundformeln der Prozentrechnung anwenden",
        erklaerung: {
            intro: "Bei der <b>Prozentrechnung</b> geht es um drei Größen: den <b>Grundwert</b> (das Ganze, 100%), den <b>Prozentsatz</b> (wie viel Prozent) und den <b>Prozentwert</b> (der berechnete Anteil).",
            beispiele: [
                "📊 Prozentwert berechnen: 20% von 150 = 150 × 0,20 = 30",
                "🧮 Grundwert berechnen: 30 sind 20% von wie viel? 30 ÷ 0,20 = 150",
                "📈 Prozentsatz berechnen: 30 von 150 sind wie viel Prozent? 30 ÷ 150 × 100 = 20%",
                "💰 Beispiel: Ein Pullover kostet 40€, im Angebot 25% weniger: 40 × 0,25 = 10€ Rabatt, also 30€"
            ],
            merksatz: "Prozentwert = Grundwert × Prozentsatz/100. Grundwert = Prozentwert ÷ (Prozentsatz/100). Prozentsatz = Prozentwert ÷ Grundwert × 100."
        },
        uebung: {
            leicht: [
                { id: "prozk7l1u_leicht_1", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "leicht", points: 10,
                    question: "Was beschreibt der Grundwert bei der Prozentrechnung?",
                    answers: ["Das Ganze (100%)", "Der berechnete Anteil", "Die Prozentzahl selbst", "Der Rabattbetrag"], correct: 0,
                    explanation: "Der Grundwert ist das Ganze, auf das sich die Prozente beziehen (100%)." },
                { id: "prozk7l1u_leicht_2", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "leicht", points: 10,
                    question: "Berechne 10% von 200.",
                    answers: ["20", "10", "200", "2"], correct: 0,
                    explanation: "200 × 0,10 = 20." },
                { id: "prozk7l1u_leicht_3", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "leicht", points: 10,
                    question: "Berechne 50% von 80.",
                    answers: ["40", "50", "80", "4"], correct: 0,
                    explanation: "80 × 0,50 = 40." },
                { id: "prozk7l1u_leicht_4", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man 25% als Dezimalzahl?",
                    answers: ["0,25", "2,5", "0,025", "25,0"], correct: 0,
                    explanation: "25% = 25/100 = 0,25." }
            ],
            mittel: [
                { id: "prozk7l1u_mittel_1", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "mittel", points: 10,
                    question: "Berechne 20% von 150.",
                    answers: ["30", "20", "150", "15"], correct: 0,
                    explanation: "150 × 0,20 = 30." },
                { id: "prozk7l1u_mittel_2", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "mittel", points: 10,
                    question: "Berechne 15% von 60.",
                    answers: ["9", "15", "6", "45"], correct: 0,
                    explanation: "60 × 0,15 = 9." },
                { id: "prozk7l1u_mittel_3", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "mittel", points: 10,
                    question: "30 sind 20% von welchem Grundwert?",
                    answers: ["150", "120", "60", "300"], correct: 0,
                    explanation: "30 ÷ 0,20 = 150." },
                { id: "prozk7l1u_mittel_4", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "mittel", points: 10,
                    question: "45 sind wie viel Prozent von 180?",
                    answers: ["25%", "20%", "30%", "45%"], correct: 0,
                    explanation: "45 ÷ 180 × 100 = 25%." }
            ],
            schwer: [
                { id: "prozk7l1u_schwer_1", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "schwer", points: 10,
                    question: "Ein Pullover kostet 40€, im Angebot 25% weniger. Was kostet er jetzt?",
                    answers: ["30 €", "10 €", "35 €", "20 €"], correct: 0,
                    explanation: "Rabatt: 40 × 0,25 = 10 €, also 40 € − 10 € = 30 €." },
                { id: "prozk7l1u_schwer_2", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "schwer", points: 10,
                    question: "60 sind 15% von welchem Grundwert?",
                    answers: ["400", "300", "240", "500"], correct: 0,
                    explanation: "60 ÷ 0,15 = 400." },
                { id: "prozk7l1u_schwer_3", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "schwer", points: 10,
                    question: "Ein Preis von 80€ steigt um 15%. Wie hoch ist der neue Preis?",
                    answers: ["92 €", "95 €", "12 €", "88 €"], correct: 0,
                    explanation: "Zuwachs: 80 × 0,15 = 12 €, also 80 € + 12 € = 92 €." },
                { id: "prozk7l1u_schwer_4", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "schwer", points: 10,
                    question: "18 von 72 Schülern sind wie viel Prozent?",
                    answers: ["25%", "18%", "20%", "30%"], correct: 0,
                    explanation: "18 ÷ 72 × 100 = 25%." }
            ]
        },
        test: [
            { id: "prozk7l1_test_1", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "leicht", points: 10,
                question: "Wie viel Prozent sind 50 von 100?",
                answers: ["50%", "100%", "5%", "150%"], correct: 0,
                explanation: "50 ÷ 100 × 100 = 50%." },
            { id: "prozk7l1_test_2", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "leicht", points: 10,
                question: "Berechne 10% von 90.",
                answers: ["9", "10", "90", "19"], correct: 0,
                explanation: "90 × 0,10 = 9." },
            { id: "prozk7l1_test_3", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "mittel", points: 10,
                question: "Berechne 30% von 50.",
                answers: ["15", "30", "50", "20"], correct: 0,
                explanation: "50 × 0,30 = 15." },
            { id: "prozk7l1_test_4", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "mittel", points: 10,
                question: "20 sind wie viel Prozent von 80?",
                answers: ["25%", "20%", "40%", "80%"], correct: 0,
                explanation: "20 ÷ 80 × 100 = 25%." },
            { id: "prozk7l1_test_5", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "schwer", points: 10,
                question: "24 sind 30% von welchem Grundwert?",
                answers: ["80", "72", "54", "96"], correct: 0,
                explanation: "24 ÷ 0,30 = 80." },
            { id: "prozk7l1_test_6", category: "kurs_proz_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "prozentrechnung", difficulty: "schwer", points: 10,
                question: "Ein Preis von 50€ sinkt um 10%. Wie hoch ist der neue Preis?",
                answers: ["45 €", "40 €", "5 €", "55 €"], correct: 0,
                explanation: "Rabatt: 50 × 0,10 = 5 €, also 50 € − 5 € = 45 €." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "nebs_k6_l1",
        kurs: "nebensaetze_k6",
        order: 1,
        icon: "🔗",
        title: "Haupt- und Nebensätze unterscheiden",
        kurz: "Verbstellung, Konjunktionen und Kommasetzung",
        erklaerung: {
            intro: "Ein <b>Hauptsatz</b> kann allein stehen (Verb an zweiter Stelle). Ein <b>Nebensatz</b> kann nicht allein stehen und wird durch eine <b>unterordnende Konjunktion</b> eingeleitet - das Verb steht dabei am Satzende.",
            beispiele: [
                "✅ Hauptsatz: Ich bleibe zu Hause. (Verb 'bleibe' an Position 2)",
                "🔗 Nebensatz: ..., weil es regnet. (Verb 'regnet' am Satzende)",
                "📝 Kombination: Ich bleibe zu Hause, weil es regnet.",
                "✏️ Vor einem Nebensatz steht immer ein Komma."
            ],
            merksatz: "Nebensatz erkennen: unterordnende Konjunktion (weil, dass, obwohl, wenn, als, damit ...) + Verb am Satzende. Vor jedem Nebensatz steht ein Komma."
        },
        uebung: {
            leicht: [
                { id: "nebsk6l1u_leicht_1", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "leicht", points: 10,
                    question: "Wo steht das Verb in einem Nebensatz?",
                    answers: ["Am Satzende", "An zweiter Stelle", "Ganz am Anfang", "Es gibt kein Verb"], correct: 0,
                    explanation: "Im Nebensatz rückt das Verb ans Satzende." },
                { id: "nebsk6l1u_leicht_2", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "leicht", points: 10,
                    question: "Welches Satzzeichen steht immer vor einem Nebensatz?",
                    answers: ["Ein Komma", "Ein Punkt", "Ein Ausrufezeichen", "Kein Satzzeichen"], correct: 0,
                    explanation: "Vor jedem Nebensatz steht ein Komma." },
                { id: "nebsk6l1u_leicht_3", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "leicht", points: 10,
                    question: "Welches Wort leitet hier den Nebensatz ein: '..., weil es regnet.'?",
                    answers: ["weil", "es", "regnet", "ein"], correct: 0,
                    explanation: "'weil' ist die unterordnende Konjunktion, die den Nebensatz einleitet." },
                { id: "nebsk6l1u_leicht_4", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "leicht", points: 10,
                    question: "Kann ein Nebensatz allein als vollständiger Satz stehen?",
                    answers: ["Nein, braucht einen Hauptsatz", "Ja, das geht ganz problemlos", "Nur bei Fragesätzen möglich", "Nur wenn er sehr kurz ist"], correct: 0,
                    explanation: "Ein Nebensatz ist unvollständig und braucht einen Hauptsatz dazu." }
            ],
            mittel: [
                { id: "nebsk6l1u_mittel_1", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "mittel", points: 10,
                    question: "In welchem Satz steht das Verb am Ende?",
                    answers: ["Ich weiß, dass er kommt.", "Ich weiß es genau.", "Beide Sätze enden mit dem Verb", "Keiner der beiden Sätze"], correct: 0,
                    explanation: "Im Nebensatz 'dass er kommt' steht das Verb 'kommt' am Ende." },
                { id: "nebsk6l1u_mittel_2", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "mittel", points: 10,
                    question: "Welche Konjunktion passt: '..., ___ das Wetter schön ist, gehen wir spazieren.'",
                    answers: ["wenn", "weil", "obwohl", "dass"], correct: 0,
                    explanation: "'wenn' drückt hier eine Bedingung aus." },
                { id: "nebsk6l1u_mittel_3", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "mittel", points: 10,
                    question: "Welche Konjunktion drückt einen Gegensatz aus?",
                    answers: ["obwohl", "weil", "dass", "wenn"], correct: 0,
                    explanation: "'obwohl' leitet einen Gegensatz (Einräumung) ein." },
                { id: "nebsk6l1u_mittel_4", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "mittel", points: 10,
                    question: "Welcher Teil ist der Hauptsatz: 'Wir gehen ins Kino, obwohl es spät ist.'?",
                    answers: ["Wir gehen ins Kino", "obwohl es spät ist", "ins Kino", "es spät ist"], correct: 0,
                    explanation: "'Wir gehen ins Kino' kann allein stehen - das ist der Hauptsatz." }
            ],
            schwer: [
                { id: "nebsk6l1u_schwer_1", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "schwer", points: 10,
                    question: "Welcher Teil ist der Nebensatz: 'Er sagt, dass er müde ist.'?",
                    answers: ["dass er müde ist", "Er sagt", "Er sagt, dass", "müde ist"], correct: 0,
                    explanation: "'dass er müde ist' ist der vollständige Nebensatz mit Verb am Ende." },
                { id: "nebsk6l1u_schwer_2", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "schwer", points: 10,
                    question: "Welche Konjunktion passt: '..., ___ er pünktlich ankommt, fährt er früh los.'",
                    answers: ["damit", "weil", "obwohl", "als"], correct: 0,
                    explanation: "'damit' drückt hier eine Absicht/einen Zweck aus." },
                { id: "nebsk6l1u_schwer_3", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'Ich war traurig, ___ mein Freund umgezogen ist.'",
                    answers: ["weil", "damit", "obwohl", "wenn"], correct: 0,
                    explanation: "'weil' nennt hier den Grund." },
                { id: "nebsk6l1u_schwer_4", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist grammatisch richtig?",
                    answers: ["..., weil er krank ist.", "..., weil er ist krank.", "Beide sind richtig", "Keiner ist richtig"], correct: 0,
                    explanation: "Im Nebensatz steht das Verb am Ende: '..., weil er krank ist.'" }
            ]
        },
        test: [
            { id: "nebsk6l1_test_1", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "leicht", points: 10,
                question: "Was kennzeichnet einen Hauptsatz?",
                answers: ["Verb an zweiter Stelle", "Verb am Satzende", "Kein Verb", "Immer eine Frage"], correct: 0,
                explanation: "Im Hauptsatz steht das Verb an zweiter Stelle." },
            { id: "nebsk6l1_test_2", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "leicht", points: 10,
                question: "Welches Wort ist eine unterordnende Konjunktion?",
                answers: ["dass", "und", "aber", "oder"], correct: 0,
                explanation: "'dass' leitet einen Nebensatz ein, die anderen verbinden nur Hauptsätze." },
            { id: "nebsk6l1_test_3", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "mittel", points: 10,
                question: "Wo steht im Nebensatz '..., dass sie lacht' das Verb?",
                answers: ["Am Ende", "An zweiter Stelle", "Am Anfang", "Es fehlt"], correct: 0,
                explanation: "'lacht' steht am Satzende - typisch für Nebensätze." },
            { id: "nebsk6l1_test_4", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "mittel", points: 10,
                question: "Welche Konjunktion passt für einen Zeitpunkt: '..., ___ ich klein war, ...'",
                answers: ["als", "dass", "obwohl", "damit"], correct: 0,
                explanation: "'als' bezeichnet einen einmaligen Zeitpunkt in der Vergangenheit." },
            { id: "nebsk6l1_test_5", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "schwer", points: 10,
                question: "'Sie bleibt zu Hause, weil sie krank ist.' - Was ist hier der Hauptsatz?",
                answers: ["Sie bleibt zu Hause", "weil sie krank ist", "krank ist", "zu Hause"], correct: 0,
                explanation: "'Sie bleibt zu Hause' kann allein stehen - das ist der Hauptsatz." },
            { id: "nebsk6l1_test_6", category: "kurs_nebs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "nebensaetze", difficulty: "schwer", points: 10,
                question: "Welcher Satz enthält einen Nebensatz?",
                answers: ["Ich hoffe, dass es klappt.", "Ich hoffe und warte.", "Ich hoffe sehr.", "Ich hoffe auf Erfolg."], correct: 0,
                explanation: "'dass es klappt' ist ein Nebensatz mit Verb am Ende." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "prespf_k6_l1",
        kurs: "present_perfect_k6",
        order: 1,
        icon: "✅",
        title: "Present Perfect – have/has + past participle",
        kurz: "Abgeschlossene Handlungen mit Bezug zur Gegenwart",
        erklaerung: {
            intro: "Das <b>Present Perfect</b> (have/has + Partizip Perfekt) beschreibt eine abgeschlossene Handlung mit Bezug zur Gegenwart - oft weiß man nicht genau, wann sie passiert ist.",
            beispiele: [
                "✅ I have visited London. (Ich war schon mal in London - irgendwann, egal wann.)",
                "🔤 Regelmäßige Verben: play → played, work → worked (+ed)",
                "🔀 Unregelmäßige Verben: go → gone, see → seen (3. Form auswendig lernen)",
                "🔑 Signalwörter: already, just, yet, ever, never, since, for"
            ],
            merksatz: "Present Perfect = have/has + past participle. Regelmäßige Verben: +ed. Unregelmäßige Verben: 3. Form auswendig lernen. Signalwörter: already, just, yet, ever, never, since, for."
        },
        uebung: {
            leicht: [
                { id: "prespfk6l1u_leicht_1", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "leicht", points: 10,
                    question: "Wie bildet man das Present Perfect?",
                    answers: ["have/has + Partizip Perfekt", "will + Grundform", "did + Grundform", "be + -ing Form"], correct: 0,
                    explanation: "Present Perfect = have/has + Partizip Perfekt (past participle)." },
                { id: "prespfk6l1u_leicht_2", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "leicht", points: 10,
                    question: "Wie lautet die Partizip-Perfekt-Form von 'play' (regelmäßig)?",
                    answers: ["played", "plays", "playing", "plaied"], correct: 0,
                    explanation: "Regelmäßige Verben bekommen +ed: play → played." },
                { id: "prespfk6l1u_leicht_3", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "leicht", points: 10,
                    question: "Welches Hilfsverb passt zu 'she'?",
                    answers: ["has", "have", "had", "is"], correct: 0,
                    explanation: "Bei he/she/it steht 'has'." },
                { id: "prespfk6l1u_leicht_4", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein typisches Signalwort für Present Perfect?",
                    answers: ["already", "yesterday", "tomorrow", "ago"], correct: 0,
                    explanation: "'already' passt zum Present Perfect, die anderen zu Vergangenheit/Zukunft mit festem Zeitpunkt." }
            ],
            mittel: [
                { id: "prespfk6l1u_mittel_1", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "mittel", points: 10,
                    question: "Wie lautet die 3. Form von 'go' (unregelmäßig)?",
                    answers: ["gone", "goed", "went", "going"], correct: 0,
                    explanation: "'go' ist unregelmäßig: go → went → gone." },
                { id: "prespfk6l1u_mittel_2", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'They ___ their homework already.' (finish)",
                    answers: ["have finished", "has finished", "finished", "are finishing"], correct: 0,
                    explanation: "'they' braucht 'have' + Partizip Perfekt: have finished." },
                { id: "prespfk6l1u_mittel_3", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'He ___ that film twice.' (see)",
                    answers: ["has seen", "have seen", "saw", "is seeing"], correct: 0,
                    explanation: "'he' braucht 'has' + Partizip Perfekt: has seen." },
                { id: "prespfk6l1u_mittel_4", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "mittel", points: 10,
                    question: "Welcher Satz benutzt Present Perfect korrekt?",
                    answers: ["I have never been to Paris.", "I never been to Paris.", "I have never went to Paris.", "I never have to Paris."], correct: 0,
                    explanation: "Korrekt: have + Partizip Perfekt 'been'." }
            ],
            schwer: [
                { id: "prespfk6l1u_schwer_1", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'We ___ here since 2018.' (live)",
                    answers: ["have lived", "lived", "are living", "have live"], correct: 0,
                    explanation: "Mit 'since' + Zeitpunkt: have lived." },
                { id: "prespfk6l1u_schwer_2", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist grammatisch richtig?",
                    answers: ["She has just finished her lunch.", "She has just finish her lunch.", "She just has finished her lunch.", "She has finish just her lunch."], correct: 0,
                    explanation: "Richtige Wortstellung: has + just + Partizip Perfekt." },
                { id: "prespfk6l1u_schwer_3", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "schwer", points: 10,
                    question: "Wann benutzt man 'since' statt 'for'?",
                    answers: ["Bei einem festen Zeitpunkt", "Bei einer längeren Zeitdauer", "Beide bedeuten genau dasselbe", "Nur in Fragesätzen üblich"], correct: 0,
                    explanation: "'since' + fester Zeitpunkt, 'for' + Zeitdauer." },
                { id: "prespfk6l1u_schwer_4", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'I ___ breakfast yet.' (not/eat)",
                    answers: ["haven't eaten", "didn't eat", "don't eat", "hasn't eaten"], correct: 0,
                    explanation: "'I' + Verneinung: haven't eaten." }
            ]
        },
        test: [
            { id: "prespfk6l1_test_1", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "leicht", points: 10,
                question: "Welches Hilfsverb passt zu 'I'?",
                answers: ["have", "has", "had", "am"], correct: 0,
                explanation: "Bei 'I' steht 'have'." },
            { id: "prespfk6l1_test_2", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "leicht", points: 10,
                question: "Wie lautet die Partizip-Perfekt-Form von 'work'?",
                answers: ["worked", "works", "working", "workt"], correct: 0,
                explanation: "Regelmäßiges Verb: work → worked." },
            { id: "prespfk6l1_test_3", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "mittel", points: 10,
                question: "Ergänze: 'She ___ me yet.' (not/call)",
                answers: ["hasn't called", "haven't called", "didn't call", "doesn't call"], correct: 0,
                explanation: "'she' + Verneinung: hasn't called." },
            { id: "prespfk6l1_test_4", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "mittel", points: 10,
                question: "Wie lautet die 3. Form von 'see'?",
                answers: ["seen", "saw", "seeing", "sees"], correct: 0,
                explanation: "'see' ist unregelmäßig: see → saw → seen." },
            { id: "prespfk6l1_test_5", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "schwer", points: 10,
                question: "Welches Signalwort passt zu einer Zeitdauer?",
                answers: ["for", "since", "yesterday", "ago"], correct: 0,
                explanation: "'for' + Zeitdauer (z.B. for 3 years)." },
            { id: "prespfk6l1_test_6", category: "kurs_prespf_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_perfect", difficulty: "schwer", points: 10,
                question: "Ergänze: 'Have you ___ to Italy?' (be)",
                answers: ["been", "be", "was", "gone"], correct: 0,
                explanation: "Partizip Perfekt von 'be' ist 'been'." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "zins_k7_l1",
        kurs: "zinsrechnung_k7",
        order: 1,
        icon: "🏦",
        title: "Zinsen berechnen",
        kurz: "Kapital, Zinssatz, Zinsen – auch für Monate und Tage",
        erklaerung: {
            intro: "<b>Zinsen</b> sind der Preis für geliehenes Geld. Wer Geld anlegt, bekommt Zinsen – wer Geld leiht, zahlt Zinsen. Das angelegte Geld heißt <b>Kapital (K)</b>, der Prozentsatz pro Jahr heißt <b>Zinssatz (p)</b>.",
            beispiele: [
                "🏦 1000 € Kapital, 3 % Zinssatz: Z = 1000 · 3 ÷ 100 = <b>30 €</b> Zinsen im Jahr.",
                "📅 Für 6 Monate nimmt man nur die Hälfte: 30 € · 6 ÷ 12 = <b>15 €</b>.",
                "🗓️ Für Tage rechnet man mit 360 Tagen: 30 € · 90 ÷ 360 = <b>7,50 €</b>.",
                "🔎 Zinssatz gesucht: 800 € bringen 32 € Zinsen → p = 32 · 100 ÷ 800 = <b>4 %</b>."
            ],
            merksatz: "Jahreszinsen: Z = K · p ÷ 100. Für Monate mal Monate ÷ 12, für Tage mal Tage ÷ 360. Umgestellt: p = Z · 100 ÷ K und K = Z · 100 ÷ p."
        },
        uebung: {
            leicht: [
                { id: "zinsk7l1u_leicht_1", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "leicht", points: 10,
                    question: "Wie heißt das Geld, das man anlegt oder leiht?",
                    answers: ["Kapital", "Zinssatz", "Zinswert", "Prozentwert"], correct: 0,
                    explanation: "Das angelegte oder geliehene Geld heißt Kapital (K)." },
                { id: "zinsk7l1u_leicht_2", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "leicht", points: 10,
                    question: "Mit welcher Formel berechnet man die Jahreszinsen?",
                    answers: ["Z = K · p ÷ 100", "Z = K + p ÷ 100", "Z = K · p · 100", "Z = K ÷ p · 100"], correct: 0,
                    explanation: "Jahreszinsen: Z = K · p ÷ 100 – Kapital mal Zinssatz, geteilt durch 100." },
                { id: "zinsk7l1u_leicht_3", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "leicht", points: 10,
                    question: "Wie viel Zinsen bringen 200 € bei einem Zinssatz von 5 % im Jahr?",
                    answers: ["10 €", "20 €", "40 €", "50 €"], correct: 0,
                    explanation: "Z = 200 · 5 ÷ 100 = 10 €." },
                { id: "zinsk7l1u_leicht_4", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "leicht", points: 10,
                    question: "Wie viel Zinsen bringen 1000 € bei 2 % im Jahr?",
                    answers: ["20 €", "10 €", "50 €", "200 €"], correct: 0,
                    explanation: "Z = 1000 · 2 ÷ 100 = 20 €." }
            ],
            mittel: [
                { id: "zinsk7l1u_mittel_1", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "mittel", points: 10,
                    question: "Wie viel Zinsen bringen 2400 € bei 3,5 % im Jahr?",
                    answers: ["84 €", "72 €", "96 €", "120 €"], correct: 0,
                    explanation: "Z = 2400 · 3,5 ÷ 100 = 84 €." },
                { id: "zinsk7l1u_mittel_2", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "mittel", points: 10,
                    question: "500 € werden für 6 Monate zu 4 % angelegt. Wie viel Zinsen sind das?",
                    answers: ["10 €", "20 €", "5 €", "40 €"], correct: 0,
                    explanation: "Jahreszinsen: 500 · 4 ÷ 100 = 20 €. Für 6 Monate: 20 · 6 ÷ 12 = 10 €." },
                { id: "zinsk7l1u_mittel_3", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "mittel", points: 10,
                    question: "800 € bringen im Jahr 32 € Zinsen. Wie hoch ist der Zinssatz?",
                    answers: ["4 %", "3 %", "5 %", "8 %"], correct: 0,
                    explanation: "p = Z · 100 ÷ K = 32 · 100 ÷ 800 = 4 %." },
                { id: "zinsk7l1u_mittel_4", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "mittel", points: 10,
                    question: "Ein Kapital bringt bei 5 % im Jahr 75 € Zinsen. Wie groß ist das Kapital?",
                    answers: ["1500 €", "1250 €", "1750 €", "3750 €"], correct: 0,
                    explanation: "K = Z · 100 ÷ p = 75 · 100 ÷ 5 = 1500 €." }
            ],
            schwer: [
                { id: "zinsk7l1u_schwer_1", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "schwer", points: 10,
                    question: "1200 € werden für 3 Monate zu 2,5 % angelegt. Wie viel Zinsen kommen zusammen?",
                    answers: ["7,50 €", "10,00 €", "30,00 €", "3,75 €"], correct: 0,
                    explanation: "Jahreszinsen: 1200 · 2,5 ÷ 100 = 30 €. Für 3 Monate: 30 · 3 ÷ 12 = 7,50 €." },
                { id: "zinsk7l1u_schwer_2", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "schwer", points: 10,
                    question: "3000 € werden für 90 Tage zu 4 % angelegt (Zinsjahr = 360 Tage). Wie viel Zinsen sind das?",
                    answers: ["30 €", "40 €", "60 €", "120 €"], correct: 0,
                    explanation: "Jahreszinsen: 3000 · 4 ÷ 100 = 120 €. Für 90 Tage: 120 · 90 ÷ 360 = 30 €." },
                { id: "zinsk7l1u_schwer_3", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "schwer", points: 10,
                    question: "2000 € liegen ein Jahr lang zu 1,5 % auf dem Konto. Wie hoch ist das Guthaben danach?",
                    answers: ["2030 €", "2015 €", "2150 €", "2300 €"], correct: 0,
                    explanation: "Zinsen: 2000 · 1,5 ÷ 100 = 30 €. Guthaben: 2000 € + 30 € = 2030 €." },
                { id: "zinsk7l1u_schwer_4", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "schwer", points: 10,
                    question: "Ein Kredit über 6000 € kostet 7 % Zinsen im Jahr. Wie viel Zinsen fallen für 4 Monate an?",
                    answers: ["140 €", "105 €", "175 €", "420 €"], correct: 0,
                    explanation: "Jahreszinsen: 6000 · 7 ÷ 100 = 420 €. Für 4 Monate: 420 · 4 ÷ 12 = 140 €." }
            ]
        },
        test: [
            { id: "zinsk7l1_test_1", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "mittel", points: 10,
                question: "Mit welcher Formel berechnet man den Zinssatz?",
                answers: ["p = Z · 100 ÷ K", "p = K · 100 ÷ Z", "p = Z · K ÷ 100", "p = K · Z · 100"], correct: 0,
                explanation: "Die Formel Z = K · p ÷ 100 nach p umgestellt ergibt p = Z · 100 ÷ K." },
            { id: "zinsk7l1_test_2", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "leicht", points: 10,
                question: "Wie viel Zinsen bringen 400 € bei 3 % im Jahr?",
                answers: ["12 €", "15 €", "30 €", "40 €"], correct: 0,
                explanation: "Z = 400 · 3 ÷ 100 = 12 €." },
            { id: "zinsk7l1_test_3", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "mittel", points: 10,
                question: "1500 € werden für 6 Monate zu 2 % angelegt. Wie viel Zinsen sind das?",
                answers: ["15 €", "30 €", "20 €", "60 €"], correct: 0,
                explanation: "Jahreszinsen: 1500 · 2 ÷ 100 = 30 €. Für 6 Monate: 30 · 6 ÷ 12 = 15 €." },
            { id: "zinsk7l1_test_4", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "mittel", points: 10,
                question: "Ein Kapital bringt bei 6 % im Jahr 90 € Zinsen. Wie groß ist das Kapital?",
                answers: ["1500 €", "1350 €", "1800 €", "5400 €"], correct: 0,
                explanation: "K = Z · 100 ÷ p = 90 · 100 ÷ 6 = 1500 €." },
            { id: "zinsk7l1_test_5", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "mittel", points: 10,
                question: "5000 € bringen im Jahr 250 € Zinsen. Wie hoch ist der Zinssatz?",
                answers: ["5 %", "4 %", "2,5 %", "10 %"], correct: 0,
                explanation: "p = Z · 100 ÷ K = 250 · 100 ÷ 5000 = 5 %." },
            { id: "zinsk7l1_test_6", category: "kurs_zins_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zinsrechnung", difficulty: "schwer", points: 10,
                question: "720 € werden für 60 Tage zu 5 % angelegt (Zinsjahr = 360 Tage). Wie viel Zinsen sind das?",
                answers: ["6 €", "9 €", "12 €", "36 €"], correct: 0,
                explanation: "Jahreszinsen: 720 · 5 ÷ 100 = 36 €. Für 60 Tage: 36 · 60 ÷ 360 = 6 €." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "term_k7_l1",
        kurs: "terme_gleichungen_k7",
        order: 1,
        icon: "🧮",
        title: "Terme vereinfachen",
        kurz: "Gleichartige Glieder zusammenfassen und Klammern auflösen",
        erklaerung: {
            intro: "Ein <b>Term</b> ist ein Rechenausdruck aus Zahlen, Variablen und Rechenzeichen – zum Beispiel 3a + 5. Ein Buchstabe wie a oder x heißt <b>Variable</b> und steht als Platzhalter für eine Zahl.",
            beispiele: [
                "➕ Gleichartige Glieder haben dieselbe Variable: 3a + 5a = <b>8a</b>.",
                "🚫 Verschiedene Variablen bleiben getrennt: 2x + 3y lässt sich <b>nicht</b> zusammenfassen.",
                "📦 Klammer ausmultiplizieren: 4(a + 3) = 4 · a + 4 · 3 = <b>4a + 12</b>.",
                "➖ Minus vor der Klammer dreht die Vorzeichen: -(x - 5) = <b>-x + 5</b>."
            ],
            merksatz: "Nur gleichartige Glieder (gleiche Variable) darf man zusammenfassen. Beim Ausmultiplizieren wird jedes Glied in der Klammer mit dem Faktor multipliziert – ein Minus vor der Klammer dreht alle Vorzeichen um."
        },
        uebung: {
            leicht: [
                { id: "termk7l1u_leicht_1", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "leicht", points: 10,
                    question: "Was ist ein Term?",
                    answers: ["Ein Rechenausdruck mit Zahlen und Variablen", "Eine Aufgabe mit einem Gleichheitszeichen darin", "Eine Zahl, die immer genau gleich bleibt", "Ein Ergebnis, das man ausgerechnet hat"], correct: 0,
                    explanation: "Ein Term ist ein Rechenausdruck aus Zahlen, Variablen und Rechenzeichen – ohne Gleichheitszeichen." },
                { id: "termk7l1u_leicht_2", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "leicht", points: 10,
                    question: "Fasse zusammen: 3a + 5a",
                    answers: ["8a", "15a", "8a²", "35a"], correct: 0,
                    explanation: "Gleichartige Glieder: 3a + 5a = (3 + 5)a = 8a." },
                { id: "termk7l1u_leicht_3", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "leicht", points: 10,
                    question: "Welche beiden Glieder sind gleichartig und dürfen zusammengefasst werden?",
                    answers: ["4x und 7x", "4x und 7y", "4x und 7x²", "4x und die Zahl 7"], correct: 0,
                    explanation: "Gleichartig heißt: dieselbe Variable in derselben Potenz – das trifft nur auf 4x und 7x zu." },
                { id: "termk7l1u_leicht_4", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "leicht", points: 10,
                    question: "Fasse zusammen: 2b + 3b + b",
                    answers: ["6b", "5b", "6b³", "23b"], correct: 0,
                    explanation: "Ein einzelnes b zählt als 1b: 2b + 3b + 1b = 6b." }
            ],
            mittel: [
                { id: "termk7l1u_mittel_1", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "mittel", points: 10,
                    question: "Fasse zusammen: 5x + 3y - 2x",
                    answers: ["3x + 3y", "6xy", "3x - 3y", "8x + 3y"], correct: 0,
                    explanation: "Nur die x-Glieder gehören zusammen: 5x - 2x = 3x. Das 3y bleibt stehen: 3x + 3y." },
                { id: "termk7l1u_mittel_2", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "mittel", points: 10,
                    question: "Multipliziere aus: 4(a + 3)",
                    answers: ["4a + 12", "4a + 3", "a + 12", "4a · 12"], correct: 0,
                    explanation: "Jedes Glied mal 4: 4 · a + 4 · 3 = 4a + 12." },
                { id: "termk7l1u_mittel_3", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "mittel", points: 10,
                    question: "Fasse zusammen: 7a - 3a + 2",
                    answers: ["4a + 2", "6a", "4a - 2", "10a + 2"], correct: 0,
                    explanation: "7a - 3a = 4a. Die Zahl 2 hat keine Variable und bleibt stehen: 4a + 2." },
                { id: "termk7l1u_mittel_4", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "mittel", points: 10,
                    question: "Fasse zusammen: 2x + 5 + 3x - 2",
                    answers: ["5x + 3", "5x + 7", "6x + 3", "5x - 3"], correct: 0,
                    explanation: "x-Glieder: 2x + 3x = 5x. Zahlen: 5 - 2 = 3. Ergebnis: 5x + 3." }
            ],
            schwer: [
                { id: "termk7l1u_schwer_1", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "schwer", points: 10,
                    question: "Multipliziere aus: 3(2x - 4)",
                    answers: ["6x - 12", "6x - 4", "5x - 12", "6x + 12"], correct: 0,
                    explanation: "3 · 2x = 6x und 3 · (-4) = -12. Ergebnis: 6x - 12." },
                { id: "termk7l1u_schwer_2", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "schwer", points: 10,
                    question: "Vereinfache: 5a + 2(a - 3)",
                    answers: ["7a - 6", "7a - 3", "7a + 6", "5a - 6"], correct: 0,
                    explanation: "Erst ausmultiplizieren: 2(a - 3) = 2a - 6. Dann zusammenfassen: 5a + 2a - 6 = 7a - 6." },
                { id: "termk7l1u_schwer_3", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "schwer", points: 10,
                    question: "Löse die Klammer auf: -(x - 5)",
                    answers: ["-x + 5", "-x - 5", "x + 5", "x - 5"], correct: 0,
                    explanation: "Ein Minus vor der Klammer dreht alle Vorzeichen um: -x + 5." },
                { id: "termk7l1u_schwer_4", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "schwer", points: 10,
                    question: "Fasse zusammen: 4x + 2y - x - 5y",
                    answers: ["3x - 3y", "3x + 3y", "5x - 3y", "3x - 7y"], correct: 0,
                    explanation: "x-Glieder: 4x - x = 3x. y-Glieder: 2y - 5y = -3y. Ergebnis: 3x - 3y." }
            ]
        },
        test: [
            { id: "termk7l1_test_1", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "leicht", points: 10,
                question: "Fasse zusammen: 6m + 2m",
                answers: ["8m", "12m", "8m²", "62m"], correct: 0,
                explanation: "6m + 2m = (6 + 2)m = 8m." },
            { id: "termk7l1_test_2", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "leicht", points: 10,
                question: "Was bedeutet die Schreibweise 3a?",
                answers: ["3 · a", "3 + a", "a hoch 3", "a geteilt durch 3"], correct: 0,
                explanation: "Zwischen Zahl und Variable steht immer ein Malzeichen: 3a bedeutet 3 · a." },
            { id: "termk7l1_test_3", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "mittel", points: 10,
                question: "Multipliziere aus: 2(x + 4)",
                answers: ["2x + 8", "2x + 4", "x + 8", "2x · 8"], correct: 0,
                explanation: "2 · x + 2 · 4 = 2x + 8." },
            { id: "termk7l1_test_4", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "mittel", points: 10,
                question: "Fasse zusammen: 9y - 4y + 3",
                answers: ["5y + 3", "8y", "5y - 3", "13y + 3"], correct: 0,
                explanation: "9y - 4y = 5y. Die 3 bleibt stehen: 5y + 3." },
            { id: "termk7l1_test_5", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "schwer", points: 10,
                question: "Vereinfache: 5(2a - 1) + 3",
                answers: ["10a - 2", "10a + 2", "10a - 8", "7a - 2"], correct: 0,
                explanation: "5(2a - 1) = 10a - 5. Dann: 10a - 5 + 3 = 10a - 2." },
            { id: "termk7l1_test_6", category: "kurs_term_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "terme", difficulty: "schwer", points: 10,
                question: "Fasse zusammen: 3x + 4z - x + 2z",
                answers: ["2x + 6z", "4x + 6z", "2x + 2z", "2x - 6z"], correct: 0,
                explanation: "x-Glieder: 3x - x = 2x. z-Glieder: 4z + 2z = 6z. Ergebnis: 2x + 6z." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "term_k7_l2",
        kurs: "terme_gleichungen_k7",
        order: 2,
        icon: "⚖️",
        title: "Lineare Gleichungen lösen",
        kurz: "Das Waage-Prinzip: auf beiden Seiten dasselbe rechnen",
        erklaerung: {
            intro: "Eine <b>Gleichung</b> hat ein Gleichheitszeichen: links und rechts steht gleich viel – wie bei einer Waage im Gleichgewicht. Gelöst ist sie, wenn die Variable allein auf einer Seite steht.",
            beispiele: [
                "⚖️ x + 5 = 12 | -5 → x = <b>7</b> (auf beiden Seiten 5 abziehen).",
                "✖️ 3x = 15 | ÷3 → x = <b>5</b> (beide Seiten durch 3 teilen).",
                "🔁 2x + 3 = 11 | -3 → 2x = 8 | ÷2 → x = <b>4</b>.",
                "↔️ Variable auf beiden Seiten: 4x + 2 = 2x + 10 | -2x → 2x + 2 = 10 | -2 → 2x = 8 → x = <b>4</b>."
            ],
            merksatz: "Was du links machst, musst du auch rechts machen. Erst Zahlen wegschaffen (+/-), dann den Faktor vor der Variablen (·/÷). Zum Schluss die Probe machen: Lösung einsetzen und prüfen."
        },
        uebung: {
            leicht: [
                { id: "termk7l2u_leicht_1", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "leicht", points: 10,
                    question: "Was bedeutet es, eine Gleichung zu lösen?",
                    answers: ["Den Wert finden, bei dem beide Seiten gleich sind", "Alle Klammern in der Aufgabe wegzulassen", "Die Zahlen der Größe nach zu sortieren", "Das Gleichheitszeichen ganz zu streichen"], correct: 0,
                    explanation: "Gelöst ist eine Gleichung, wenn man den Wert der Variablen kennt, für den beide Seiten gleich groß sind." },
                { id: "termk7l2u_leicht_2", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "leicht", points: 10,
                    question: "Löse: x + 5 = 12",
                    answers: ["x = 7", "x = 17", "x = 5", "x = 60"], correct: 0,
                    explanation: "Auf beiden Seiten 5 abziehen: x = 12 - 5 = 7." },
                { id: "termk7l2u_leicht_3", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "leicht", points: 10,
                    question: "Löse: 3x = 15",
                    answers: ["x = 5", "x = 12", "x = 18", "x = 45"], correct: 0,
                    explanation: "Beide Seiten durch 3 teilen: x = 15 ÷ 3 = 5." },
                { id: "termk7l2u_leicht_4", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "leicht", points: 10,
                    question: "Löse: x - 4 = 9",
                    answers: ["x = 13", "x = 5", "x = 36", "x = 9"], correct: 0,
                    explanation: "Auf beiden Seiten 4 addieren: x = 9 + 4 = 13." }
            ],
            mittel: [
                { id: "termk7l2u_mittel_1", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "mittel", points: 10,
                    question: "Löse: 2x + 3 = 11",
                    answers: ["x = 4", "x = 7", "x = 8", "x = 14"], correct: 0,
                    explanation: "Erst -3: 2x = 8. Dann ÷2: x = 4." },
                { id: "termk7l2u_mittel_2", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "mittel", points: 10,
                    question: "Löse: 5x - 7 = 18",
                    answers: ["x = 5", "x = 3", "x = 11", "x = 25"], correct: 0,
                    explanation: "Erst +7: 5x = 25. Dann ÷5: x = 5." },
                { id: "termk7l2u_mittel_3", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "mittel", points: 10,
                    question: "Löse: 4x + 2 = 2x + 10",
                    answers: ["x = 4", "x = 2", "x = 6", "x = 12"], correct: 0,
                    explanation: "Erst -2x: 2x + 2 = 10. Dann -2: 2x = 8. Dann ÷2: x = 4." },
                { id: "termk7l2u_mittel_4", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "mittel", points: 10,
                    question: "Löse: x ÷ 3 = 6",
                    answers: ["x = 18", "x = 2", "x = 9", "x = 3"], correct: 0,
                    explanation: "Beide Seiten mal 3: x = 6 · 3 = 18." }
            ],
            schwer: [
                { id: "termk7l2u_schwer_1", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "schwer", points: 10,
                    question: "Löse: 3(x + 2) = 18",
                    answers: ["x = 4", "x = 6", "x = 5", "x = 8"], correct: 0,
                    explanation: "Ausmultiplizieren: 3x + 6 = 18. Dann -6: 3x = 12. Dann ÷3: x = 4." },
                { id: "termk7l2u_schwer_2", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "schwer", points: 10,
                    question: "Löse: 7x - 4 = 3x + 12",
                    answers: ["x = 4", "x = 2", "x = 3", "x = 8"], correct: 0,
                    explanation: "Erst -3x: 4x - 4 = 12. Dann +4: 4x = 16. Dann ÷4: x = 4." },
                { id: "termk7l2u_schwer_3", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "schwer", points: 10,
                    question: "Löse: 2(x - 3) = x + 1",
                    answers: ["x = 7", "x = 4", "x = 5", "x = 2"], correct: 0,
                    explanation: "Ausmultiplizieren: 2x - 6 = x + 1. Dann -x: x - 6 = 1. Dann +6: x = 7." },
                { id: "termk7l2u_schwer_4", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "schwer", points: 10,
                    question: "Ich denke mir eine Zahl, verdopple sie und addiere 5. Das Ergebnis ist 21. Welche Gleichung passt?",
                    answers: ["2x + 5 = 21", "2x - 5 = 21", "x + 5 = 21", "2(x + 5) = 21"], correct: 0,
                    explanation: "Verdoppeln heißt 2x, dann 5 addieren: 2x + 5 = 21 (die gesuchte Zahl ist 8)." }
            ]
        },
        test: [
            { id: "termk7l2_test_1", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "leicht", points: 10,
                question: "Löse: x + 8 = 20",
                answers: ["x = 12", "x = 28", "x = 8", "x = 160"], correct: 0,
                explanation: "Auf beiden Seiten 8 abziehen: x = 20 - 8 = 12." },
            { id: "termk7l2_test_2", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "leicht", points: 10,
                question: "Löse: 6x = 42",
                answers: ["x = 7", "x = 6", "x = 36", "x = 48"], correct: 0,
                explanation: "Beide Seiten durch 6 teilen: x = 42 ÷ 6 = 7." },
            { id: "termk7l2_test_3", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "mittel", points: 10,
                question: "Löse: 4x - 5 = 19",
                answers: ["x = 6", "x = 4", "x = 3,5", "x = 24"], correct: 0,
                explanation: "Erst +5: 4x = 24. Dann ÷4: x = 6." },
            { id: "termk7l2_test_4", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "mittel", points: 10,
                question: "Löse: 5x + 1 = 3x + 9",
                answers: ["x = 4", "x = 2", "x = 5", "x = 10"], correct: 0,
                explanation: "Erst -3x: 2x + 1 = 9. Dann -1: 2x = 8. Dann ÷2: x = 4." },
            { id: "termk7l2_test_5", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "schwer", points: 10,
                question: "Löse: 2(x + 4) = 14",
                answers: ["x = 3", "x = 5", "x = 7", "x = 9"], correct: 0,
                explanation: "Ausmultiplizieren: 2x + 8 = 14. Dann -8: 2x = 6. Dann ÷2: x = 3." },
            { id: "termk7l2_test_6", category: "kurs_term_k7_l2", area: "schule", grade: 7, subject: "mathe", topic: "gleichungen", difficulty: "mittel", points: 10,
                question: "Was gilt beim Umformen einer Gleichung immer?",
                answers: ["Beide Seiten werden gleich behandelt", "Nur die linke Seite wird verändert", "Nur die rechte Seite wird verändert", "Die Zahlen werden einfach getauscht"], correct: 0,
                explanation: "Wie bei einer Waage: Was auf der einen Seite gerechnet wird, muss auch auf der anderen Seite passieren." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "gross_k6_l1",
        kurs: "grossschreibung_k6",
        order: 1,
        icon: "🔠",
        title: "Groß- und Kleinschreibung vertiefend",
        kurz: "Nominalisierungen, Zeitangaben und typische Stolperfallen",
        erklaerung: {
            intro: "Großgeschrieben werden Satzanfänge, Namen und alle <b>Nomen</b>. Schwierig wird es, wenn Verben oder Adjektive zu Nomen werden – das nennt man <b>Nominalisierung</b>. Dann werden auch sie großgeschrieben.",
            beispiele: [
                "📌 Artikel als Signal: <b>das</b> Laufen, <b>beim</b> Lesen, <b>zum</b> Schwimmen – das Verb wird zum Nomen.",
                "📌 Nach viel, wenig, alles, nichts, etwas: nichts <b>Neues</b>, etwas <b>Schönes</b>.",
                "📌 Endungen -ung, -heit, -keit, -nis machen Nomen: Bewegung, Freiheit, Sauberkeit.",
                "🕐 Tageszeiten nach Zeitangabe groß: heute <b>Abend</b>, gestern <b>Mittag</b> – aber: abends, morgens (klein)."
            ],
            merksatz: "Steht vor einem Verb oder Adjektiv ein Artikel (das, beim, zum, im) oder ein Wort wie viel, nichts, etwas, alles, wird es zum Nomen und großgeschrieben. Wörter auf -ung, -heit, -keit, -nis sind immer Nomen."
        },
        uebung: {
            leicht: [
                { id: "grossk6l1u_leicht_1", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Welche Wortart schreibt man im Deutschen immer groß?",
                    answers: ["Nomen", "Verben", "Adjektive", "Adverbien"], correct: 0,
                    explanation: "Nomen (Namenwörter) werden im Deutschen immer großgeschrieben." },
                { id: "grossk6l1u_leicht_2", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Welches Wort muss in diesem Satz großgeschrieben werden? 'Am Abend bellt der hund laut.'",
                    answers: ["hund", "bellt", "laut", "der"], correct: 0,
                    explanation: "'Hund' ist ein Nomen und wird großgeschrieben." },
                { id: "grossk6l1u_leicht_3", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man das Wort richtig? 'Das ___ macht mir Spaß.' (lesen)",
                    answers: ["Lesen", "lesen", "leSen", "lesenn"], correct: 0,
                    explanation: "Vor dem Verb steht der Artikel 'das' – es wird zum Nomen und großgeschrieben: das Lesen." },
                { id: "grossk6l1u_leicht_4", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Welche Endung zeigt fast immer an, dass ein Wort ein Nomen ist?",
                    answers: ["-heit", "-lich", "-ig", "-sam"], correct: 0,
                    explanation: "Wörter auf -heit (auch -ung, -keit, -nis) sind Nomen: Freiheit, Bewegung, Sauberkeit." }
            ],
            mittel: [
                { id: "grossk6l1u_mittel_1", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man richtig? 'Beim ___ habe ich mir wehgetan.' (schwimmen)",
                    answers: ["Schwimmen", "schwimmen", "schwimmenn", "SchWimmen"], correct: 0,
                    explanation: "'Beim' enthält den Artikel dem – das Verb wird zum Nomen: beim Schwimmen." },
                { id: "grossk6l1u_mittel_2", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man richtig? 'Es gibt nichts ___ zu berichten.' (neues)",
                    answers: ["Neues", "neues", "neuEs", "neuess"], correct: 0,
                    explanation: "Nach nichts, etwas, viel, wenig, alles wird das Adjektiv zum Nomen: nichts Neues." },
                { id: "grossk6l1u_mittel_3", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welche Schreibweise ist richtig?",
                    answers: ["heute Abend", "heute abend", "Heute Abend gehts", "heute Abends"], correct: 0,
                    explanation: "Nach einer Zeitangabe wie heute oder gestern wird die Tageszeit großgeschrieben: heute Abend." },
                { id: "grossk6l1u_mittel_4", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man richtig? 'Wir treffen uns ___ am Bahnhof.' (abends)",
                    answers: ["abends", "Abends", "aBends", "abendss"], correct: 0,
                    explanation: "Wörter auf -s wie abends, morgens, mittags sind Adverbien und werden kleingeschrieben." }
            ],
            schwer: [
                { id: "grossk6l1u_schwer_1", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "In welchem Satz ist die Groß-/Kleinschreibung richtig?",
                    answers: ["Das Gute daran ist der Preis.", "Das gute daran ist der Preis.", "Das Gute Daran ist der Preis.", "das Gute daran ist der preis."], correct: 0,
                    explanation: "'Das Gute' hat einen Artikel – das Adjektiv wird zum Nomen und großgeschrieben." },
                { id: "grossk6l1u_schwer_2", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig geschrieben?",
                    answers: ["Sie ist eine gute Freundin.", "Sie ist eine Gute Freundin.", "sie ist eine gute Freundin.", "Sie ist eine gute freundin."], correct: 0,
                    explanation: "Hier beschreibt 'gute' das Nomen Freundin – es bleibt ein Adjektiv und wird kleingeschrieben." },
                { id: "grossk6l1u_schwer_3", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Wie schreibt man richtig? 'Ich helfe dir beim ___ der Küche.' (aufräumen)",
                    answers: ["Aufräumen", "aufräumen", "AufRäumen", "aufräumenn"], correct: 0,
                    explanation: "'beim' ist ein Signalwort (bei + dem): beim Aufräumen wird großgeschrieben." },
                { id: "grossk6l1u_schwer_4", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "In welchem Satz steht ein nominalisiertes Verb?",
                    answers: ["Das Warten dauerte lange.", "Wir warten schon lange.", "Sie hat lange gewartet.", "Er wartet dort drüben."], correct: 0,
                    explanation: "Nur in 'Das Warten' steht ein Artikel vor dem Verb – dadurch wird es zum Nomen." }
            ]
        },
        test: [
            { id: "grossk6l1_test_1", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                question: "Wie schreibt man richtig? 'Zum ___ brauche ich Ruhe.' (lernen)",
                answers: ["Lernen", "lernen", "leRnen", "lernenn"], correct: 0,
                explanation: "'Zum' ist zu + dem, also ein Artikel-Signal: zum Lernen wird großgeschrieben." },
            { id: "grossk6l1_test_2", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                question: "Wie schreibt man richtig? 'Sie hat etwas ___ erlebt.' (spannendes)",
                answers: ["Spannendes", "spannendes", "spannEndes", "spannendess"], correct: 0,
                explanation: "Nach etwas wird das Adjektiv zum Nomen: etwas Spannendes." },
            { id: "grossk6l1_test_3", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                question: "Welche Schreibweise ist richtig?",
                answers: ["gestern Mittag", "gestern mittag", "Gestern mittags war", "gestern Mittags"], correct: 0,
                explanation: "Tageszeiten nach gestern, heute, morgen werden großgeschrieben: gestern Mittag." },
            { id: "grossk6l1_test_4", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                question: "Welches Wort ist wegen seiner Endung sicher ein Nomen?",
                answers: ["Übung", "üblich", "übrig", "überall"], correct: 0,
                explanation: "Die Endung -ung macht ein Nomen: die Übung." },
            { id: "grossk6l1_test_5", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                question: "In welchem Satz ist die Groß-/Kleinschreibung richtig?",
                answers: ["Wir gehen morgen ins Schwimmbad.", "Wir gehen Morgen ins Schwimmbad.", "wir gehen morgen ins Schwimmbad.", "Wir gehen morgen ins schwimmbad."], correct: 0,
                explanation: "'morgen' meint hier den nächsten Tag und ist ein Adverb – es bleibt klein." },
            { id: "grossk6l1_test_6", category: "kurs_gross_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                question: "Woran erkennt man eine Nominalisierung am sichersten?",
                answers: ["An einem Artikel davor", "An der Länge des Wortes", "An der Stelle im Satz", "An einem Komma davor"], correct: 0,
                explanation: "Steht ein Artikel wie das, beim, zum, im davor, ist das Wort zum Nomen geworden." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "prespro_k6_l1",
        kurs: "present_progressive_k6",
        order: 1,
        icon: "🏃",
        title: "Present Progressive vs. Simple Present",
        kurz: "Was gerade passiert und was immer passiert",
        erklaerung: {
            intro: "Das <b>Present Progressive</b> (am/is/are + Verb-ing) beschreibt, was <b>gerade jetzt</b> passiert. Das <b>Simple Present</b> beschreibt, was <b>immer oder regelmäßig</b> passiert.",
            beispiele: [
                "🏃 I <b>am running</b> now. (gerade jetzt) – I <b>run</b> every day. (regelmäßig)",
                "🔑 Signalwörter Progressive: now, at the moment, today, Look!, Listen!",
                "🔑 Signalwörter Simple Present: always, usually, often, every day, never",
                "✍️ Schreibregeln: write → writing (e fällt weg), sit → sitting (Verdopplung), lie → lying"
            ],
            merksatz: "Gerade jetzt = am/is/are + Verb-ing. Immer oder regelmäßig = Simple Present. Verben wie like, know, want, need stehen normalerweise nicht in der -ing-Form."
        },
        uebung: {
            leicht: [
                { id: "presprok6l1u_leicht_1", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "leicht", points: 10,
                    question: "Wie bildet man das Present Progressive?",
                    answers: ["am/is/are + Verb-ing", "have/has + Verb-ing", "do/does + Grundform", "will + Verb-ing"], correct: 0,
                    explanation: "Present Progressive = Form von 'be' (am/is/are) + Verb mit -ing." },
                { id: "presprok6l1u_leicht_2", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'I ___ reading a book.'",
                    answers: ["am", "is", "are", "be"], correct: 0,
                    explanation: "Zu 'I' gehört immer 'am': I am reading." },
                { id: "presprok6l1u_leicht_3", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'She ___ playing tennis.'",
                    answers: ["is", "am", "are", "be"], correct: 0,
                    explanation: "Zu he/she/it gehört 'is': She is playing." },
                { id: "presprok6l1u_leicht_4", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "leicht", points: 10,
                    question: "Welches Signalwort weist auf das Present Progressive hin?",
                    answers: ["at the moment", "every morning", "twice a week", "once a month"], correct: 0,
                    explanation: "'at the moment' zeigt an, dass etwas gerade jetzt passiert." }
            ],
            mittel: [
                { id: "presprok6l1u_mittel_1", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "mittel", points: 10,
                    question: "Wie lautet die -ing-Form von 'write'?",
                    answers: ["writing", "writeing", "writting", "writein"], correct: 0,
                    explanation: "Bei stummem -e am Ende fällt das e weg: write → writing." },
                { id: "presprok6l1u_mittel_2", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'They ___ football at the moment.'",
                    answers: ["are playing", "play regularly", "played before", "have played"], correct: 0,
                    explanation: "'at the moment' verlangt das Present Progressive: they are playing." },
                { id: "presprok6l1u_mittel_3", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Every day I ___ to school.'",
                    answers: ["walk", "am walking", "was walking", "will walking"], correct: 0,
                    explanation: "'Every day' zeigt eine Gewohnheit an – dafür nimmt man das Simple Present: I walk." },
                { id: "presprok6l1u_mittel_4", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "mittel", points: 10,
                    question: "Wie lautet die -ing-Form von 'sit'?",
                    answers: ["sitting", "siting", "sittting", "siteing"], correct: 0,
                    explanation: "Kurzer Vokal + einzelner Endkonsonant: Konsonant verdoppeln – sit → sitting." }
            ],
            schwer: [
                { id: "presprok6l1u_schwer_1", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'Look! The dog ___ across the garden.' (run)",
                    answers: ["is running", "runs quickly", "ran quickly", "has run"], correct: 0,
                    explanation: "'Look!' zeigt an, dass es gerade passiert: is running (mit verdoppeltem n)." },
                { id: "presprok6l1u_schwer_2", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "schwer", points: 10,
                    question: "Welches Verb steht normalerweise NICHT in der -ing-Form?",
                    answers: ["know", "walk", "read", "play"], correct: 0,
                    explanation: "Verben des Denkens und Fühlens wie know, like, want stehen nicht im Progressive." },
                { id: "presprok6l1u_schwer_3", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'He usually ___ tea, but today he ___ coffee.'",
                    answers: ["drinks / is drinking", "is drinking / drinks", "drinks / drinks", "is drinking / drank"], correct: 0,
                    explanation: "'usually' = Gewohnheit (Simple Present), 'today' = gerade jetzt (Present Progressive)." },
                { id: "presprok6l1u_schwer_4", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "schwer", points: 10,
                    question: "Wie lautet die -ing-Form von 'lie'?",
                    answers: ["lying", "lieing", "liing", "lyeing"], correct: 0,
                    explanation: "Bei -ie wird das ie zu y: lie → lying." }
            ]
        },
        test: [
            { id: "presprok6l1_test_1", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "leicht", points: 10,
                question: "Welches Signalwort gehört zum Simple Present?",
                answers: ["every day", "right now", "at the moment", "listen now"], correct: 0,
                explanation: "'every day' beschreibt eine Gewohnheit – dafür steht das Simple Present." },
            { id: "presprok6l1_test_2", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "mittel", points: 10,
                question: "Ergänze: 'We ___ TV right now.'",
                answers: ["are watching", "watch often", "watched then", "have watched"], correct: 0,
                explanation: "'right now' verlangt das Present Progressive: we are watching." },
            { id: "presprok6l1_test_3", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "mittel", points: 10,
                question: "Wie lautet die -ing-Form von 'make'?",
                answers: ["making", "makeing", "makking", "makein"], correct: 0,
                explanation: "Das stumme -e fällt weg: make → making." },
            { id: "presprok6l1_test_4", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "mittel", points: 10,
                question: "Ergänze: 'She ___ her homework every evening.'",
                answers: ["does", "is doing", "was doing", "will doing"], correct: 0,
                explanation: "'every evening' = Gewohnheit, also Simple Present mit -s bei she: she does." },
            { id: "presprok6l1_test_5", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "schwer", points: 10,
                question: "Ergänze: 'Listen! Someone ___ in the garden.' (sing)",
                answers: ["is singing", "sings loudly", "sang loudly", "has sung"], correct: 0,
                explanation: "'Listen!' zeigt an, dass es gerade passiert: is singing." },
            { id: "presprok6l1_test_6", category: "kurs_prespro_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "present_progressive", difficulty: "schwer", points: 10,
                question: "Wie lautet die -ing-Form von 'swim'?",
                answers: ["swimming", "swiming", "swimmming", "swimeing"], correct: 0,
                explanation: "Kurzer Vokal + einzelner Endkonsonant: m wird verdoppelt – swim → swimming." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "brad_k5_l1",
        kurs: "brueche_addieren_k5",
        order: 1,
        icon: "➕",
        title: "Gleichnamige Brüche addieren und subtrahieren",
        kurz: "Gleicher Nenner – nur die Zähler rechnen",
        erklaerung: {
            intro: "Brüche mit dem <b>gleichen Nenner</b> heißen gleichnamig. Sie sind leicht zu rechnen: Man addiert oder subtrahiert nur die <b>Zähler</b> – der Nenner bleibt unverändert stehen.",
            beispiele: [
                "➕ 1/5 + 2/5 = <b>3/5</b> (1 + 2 = 3, der Nenner 5 bleibt).",
                "➖ 5/8 − 2/8 = <b>3/8</b> (5 − 2 = 3, der Nenner 8 bleibt).",
                "🚫 Nicht die Nenner addieren! 1/5 + 2/5 ist <b>nicht</b> 3/10.",
                "✂️ Am Ende kürzen: 2/6 = <b>1/3</b>."
            ],
            merksatz: "Gleicher Nenner: Zähler addieren oder subtrahieren, Nenner abschreiben. Der Nenner sagt nur, wie groß die Teile sind – er wird nie mitgerechnet. Ergebnis zum Schluss kürzen."
        },
        uebung: {
            leicht: [
                { id: "bradk5l1u_leicht_1", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Rechne: 1/5 + 2/5",
                    answers: ["3/5", "3/10", "2/5", "3/25"], correct: 0,
                    explanation: "Zähler addieren: 1 + 2 = 3. Der Nenner 5 bleibt stehen: 3/5." },
                { id: "bradk5l1u_leicht_2", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Was passiert mit dem Nenner, wenn man gleichnamige Brüche addiert?",
                    answers: ["Er bleibt gleich", "Er wird addiert", "Er wird verdoppelt", "Er wird geteilt"], correct: 0,
                    explanation: "Der Nenner bleibt unverändert – nur die Zähler werden addiert." },
                { id: "bradk5l1u_leicht_3", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Rechne: 3/7 + 2/7",
                    answers: ["5/7", "5/14", "6/7", "5/49"], correct: 0,
                    explanation: "3 + 2 = 5, Nenner 7 bleibt: 5/7." },
                { id: "bradk5l1u_leicht_4", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Rechne: 5/8 − 2/8",
                    answers: ["3/8", "3/16", "7/8", "3/6"], correct: 0,
                    explanation: "5 − 2 = 3, Nenner 8 bleibt: 3/8." }
            ],
            mittel: [
                { id: "bradk5l1u_mittel_1", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Rechne: 2/6 + 3/6",
                    answers: ["5/6", "5/12", "6/6", "5/36"], correct: 0,
                    explanation: "2 + 3 = 5, Nenner 6 bleibt: 5/6." },
                { id: "bradk5l1u_mittel_2", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Rechne 7/10 − 3/10 und kürze so weit wie möglich.",
                    answers: ["2/5", "1/5", "4/7", "3/5"], correct: 0,
                    explanation: "7 − 3 = 4, also 4/10. Beide durch 2 teilen: 2/5." },
                { id: "bradk5l1u_mittel_3", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Rechne: 1/4 + 1/4 + 1/4",
                    answers: ["3/4", "3/12", "1/4", "3/8"], correct: 0,
                    explanation: "1 + 1 + 1 = 3, Nenner 4 bleibt: 3/4." },
                { id: "bradk5l1u_mittel_4", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Warum darf man die Nenner nicht mit addieren?",
                    answers: ["Der Nenner sagt nur die Teilegröße", "Der Nenner ist immer die größte Zahl", "Der Nenner zählt die Teile mit", "Der Nenner ist dafür zu klein"], correct: 0,
                    explanation: "Der Nenner gibt an, wie groß die Teile sind. Die Teilegröße ändert sich beim Addieren nicht." }
            ],
            schwer: [
                { id: "bradk5l1u_schwer_1", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Rechne 9/12 − 5/12 und kürze so weit wie möglich.",
                    answers: ["1/3", "1/4", "2/3", "1/6"], correct: 0,
                    explanation: "9 − 5 = 4, also 4/12. Beide durch 4 teilen: 1/3." },
                { id: "bradk5l1u_schwer_2", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Eine Pizza hat 8 Stücke. Lisa isst 3/8, Tim isst 2/8. Wie viel bleibt übrig?",
                    answers: ["3/8", "5/8", "2/8", "6/8"], correct: 0,
                    explanation: "Zusammen gegessen: 3/8 + 2/8 = 5/8. Übrig: 8/8 − 5/8 = 3/8." },
                { id: "bradk5l1u_schwer_3", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Rechne 3/4 + 3/4 und schreibe das Ergebnis als gemischte Zahl.",
                    answers: ["1 1/2", "1 1/4", "6/8", "2 1/2"], correct: 0,
                    explanation: "3 + 3 = 6, also 6/4. Das sind 4/4 (= 1 Ganzes) und 2/4 (= 1/2): 1 1/2." },
                { id: "bradk5l1u_schwer_4", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Welche Rechnung ist richtig?",
                    answers: ["2/9 + 4/9 = 6/9", "2/9 + 4/9 = 6/18", "2/9 + 4/9 = 8/9", "2/9 + 4/9 = 2/18"], correct: 0,
                    explanation: "Nur die Zähler addieren: 2 + 4 = 6. Der Nenner 9 bleibt: 6/9 (gekürzt 2/3)." }
            ]
        },
        test: [
            { id: "bradk5l1_test_1", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                question: "Rechne: 2/7 + 4/7",
                answers: ["6/7", "6/14", "8/7", "6/49"], correct: 0,
                explanation: "2 + 4 = 6, Nenner 7 bleibt: 6/7." },
            { id: "bradk5l1_test_2", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                question: "Rechne: 6/11 − 2/11",
                answers: ["4/11", "4/22", "8/11", "4/9"], correct: 0,
                explanation: "6 − 2 = 4, Nenner 11 bleibt: 4/11." },
            { id: "bradk5l1_test_3", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Was gilt beim Addieren gleichnamiger Brüche?",
                answers: ["Nur die Zähler werden addiert", "Nur die Nenner werden addiert", "Beide Zahlen werden addiert", "Beide Zahlen werden geteilt"], correct: 0,
                explanation: "Bei gleichem Nenner werden nur die Zähler addiert, der Nenner bleibt stehen." },
            { id: "bradk5l1_test_4", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Rechne 1/6 + 1/6 und kürze so weit wie möglich.",
                answers: ["1/3", "1/6", "2/12", "2/3"], correct: 0,
                explanation: "1 + 1 = 2, also 2/6. Beide durch 2 teilen: 1/3." },
            { id: "bradk5l1_test_5", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Eine Torte hat 10 Stücke. 4/10 werden gegessen. Wie viel bleibt übrig (gekürzt)?",
                answers: ["3/5", "2/5", "4/5", "3/10"], correct: 0,
                explanation: "10/10 − 4/10 = 6/10. Beide durch 2 teilen: 3/5." },
            { id: "bradk5l1_test_6", category: "kurs_brad_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Rechne 5/6 − 1/6 und kürze so weit wie möglich.",
                answers: ["2/3", "1/3", "4/12", "5/6"], correct: 0,
                explanation: "5 − 1 = 4, also 4/6. Beide durch 2 teilen: 2/3." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "brad_k5_l2",
        kurs: "brueche_addieren_k5",
        order: 2,
        icon: "🔀",
        title: "Ungleichnamige Brüche addieren und subtrahieren",
        kurz: "Erst gleichnamig machen, dann rechnen",
        erklaerung: {
            intro: "Brüche mit <b>verschiedenen Nennern</b> kann man nicht direkt addieren. Man macht sie erst <b>gleichnamig</b>: Man sucht einen gemeinsamen Nenner (den Hauptnenner) und erweitert beide Brüche darauf.",
            beispiele: [
                "🔍 1/2 + 1/4: Hauptnenner ist 4. 1/2 = 2/4, also 2/4 + 1/4 = <b>3/4</b>.",
                "🔍 1/3 + 1/6: Hauptnenner ist 6. 1/3 = 2/6, also 2/6 + 1/6 = 3/6 = <b>1/2</b>.",
                "➖ 1/2 − 1/3: Hauptnenner ist 6. 3/6 − 2/6 = <b>1/6</b>.",
                "💡 Tipp: Passt der kleinere Nenner in den größeren, ist der größere schon der Hauptnenner."
            ],
            merksatz: "Erst gleichnamig machen, dann Zähler rechnen. Der Hauptnenner ist die kleinste Zahl, in der beide Nenner enthalten sind. Notfalls hilft immer: Nenner mal Nenner."
        },
        uebung: {
            leicht: [
                { id: "bradk5l2u_leicht_1", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Was muss man tun, bevor man 1/2 + 1/3 rechnen kann?",
                    answers: ["Beide gleichnamig machen", "Beide Zähler verdoppeln", "Beide Brüche umdrehen", "Beide Brüche kürzen"], correct: 0,
                    explanation: "Verschiedene Nenner müssen erst auf einen gemeinsamen Nenner gebracht werden." },
                { id: "bradk5l2u_leicht_2", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Rechne: 1/2 + 1/4",
                    answers: ["3/4", "2/6", "1/6", "2/4"], correct: 0,
                    explanation: "1/2 = 2/4. Dann 2/4 + 1/4 = 3/4." },
                { id: "bradk5l2u_leicht_3", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Welcher Hauptnenner passt zu 1/2 und 1/3?",
                    answers: ["6", "5", "3", "12"], correct: 0,
                    explanation: "6 ist die kleinste Zahl, die sowohl durch 2 als auch durch 3 teilbar ist." },
                { id: "bradk5l2u_leicht_4", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Rechne 1/3 + 1/6 und kürze so weit wie möglich.",
                    answers: ["1/2", "2/9", "1/9", "2/3"], correct: 0,
                    explanation: "1/3 = 2/6. Dann 2/6 + 1/6 = 3/6 = 1/2." }
            ],
            mittel: [
                { id: "bradk5l2u_mittel_1", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Rechne: 1/2 − 1/3",
                    answers: ["1/6", "1/5", "2/6", "1/3"], correct: 0,
                    explanation: "Hauptnenner 6: 3/6 − 2/6 = 1/6." },
                { id: "bradk5l2u_mittel_2", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Rechne: 2/3 + 1/4",
                    answers: ["11/12", "3/7", "3/12", "8/12"], correct: 0,
                    explanation: "Hauptnenner 12: 2/3 = 8/12, 1/4 = 3/12. Zusammen 11/12." },
                { id: "bradk5l2u_mittel_3", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Welcher Hauptnenner passt zu 1/4 und 1/6?",
                    answers: ["12", "10", "24", "6"], correct: 0,
                    explanation: "12 ist die kleinste Zahl, die durch 4 und durch 6 teilbar ist." },
                { id: "bradk5l2u_mittel_4", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Rechne: 3/4 − 1/2",
                    answers: ["1/4", "2/2", "1/2", "2/4"], correct: 0,
                    explanation: "1/2 = 2/4. Dann 3/4 − 2/4 = 1/4." }
            ],
            schwer: [
                { id: "bradk5l2u_schwer_1", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Rechne: 5/6 − 1/4",
                    answers: ["7/12", "4/2", "1/3", "6/10"], correct: 0,
                    explanation: "Hauptnenner 12: 5/6 = 10/12, 1/4 = 3/12. Also 10/12 − 3/12 = 7/12." },
                { id: "bradk5l2u_schwer_2", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Rechne: 2/5 + 1/2",
                    answers: ["9/10", "3/7", "3/10", "7/10"], correct: 0,
                    explanation: "Hauptnenner 10: 2/5 = 4/10, 1/2 = 5/10. Zusammen 9/10." },
                { id: "bradk5l2u_schwer_3", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Ben rechnet: 1/2 + 1/3 = 2/5. Was ist sein Fehler?",
                    answers: ["Er hat die Nenner mit addiert", "Er hat zu früh gekürzt", "Er hat die Brüche umgedreht", "Er hat falsch erweitert"], correct: 0,
                    explanation: "Man darf Nenner nie addieren. Richtig: 3/6 + 2/6 = 5/6." },
                { id: "bradk5l2u_schwer_4", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Rechne: 3/8 + 1/4",
                    answers: ["5/8", "4/12", "4/8", "5/12"], correct: 0,
                    explanation: "1/4 = 2/8. Dann 3/8 + 2/8 = 5/8." }
            ]
        },
        test: [
            { id: "bradk5l2_test_1", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Rechne: 1/2 + 1/3",
                answers: ["5/6", "2/5", "2/6", "1/6"], correct: 0,
                explanation: "Hauptnenner 6: 3/6 + 2/6 = 5/6." },
            { id: "bradk5l2_test_2", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                question: "Was ist der erste Schritt bei ungleichnamigen Brüchen?",
                answers: ["Gemeinsamen Nenner suchen", "Die Zähler multiplizieren", "Den Bruch umdrehen", "Das Ergebnis kürzen"], correct: 0,
                explanation: "Erst braucht man einen gemeinsamen Nenner, dann kann man rechnen." },
            { id: "bradk5l2_test_3", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Rechne: 3/4 − 1/6",
                answers: ["7/12", "2/2", "1/2", "4/10"], correct: 0,
                explanation: "Hauptnenner 12: 9/12 − 2/12 = 7/12." },
            { id: "bradk5l2_test_4", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Welcher Hauptnenner passt zu 1/3 und 1/5?",
                answers: ["15", "8", "10", "30"], correct: 0,
                explanation: "3 und 5 haben keinen gemeinsamen Teiler – der Hauptnenner ist 3 · 5 = 15." },
            { id: "bradk5l2_test_5", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Rechne: 1/4 + 2/3",
                answers: ["11/12", "3/7", "3/12", "9/12"], correct: 0,
                explanation: "Hauptnenner 12: 3/12 + 8/12 = 11/12." },
            { id: "bradk5l2_test_6", category: "kurs_brad_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Rechne 7/10 − 1/5 und kürze so weit wie möglich.",
                answers: ["1/2", "3/5", "6/15", "2/5"], correct: 0,
                explanation: "1/5 = 2/10. Dann 7/10 − 2/10 = 5/10 = 1/2." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "dezr_k6_l1",
        kurs: "dezimal_rechnen_k6",
        order: 1,
        icon: "🧾",
        title: "Dezimalzahlen addieren und subtrahieren",
        kurz: "Komma unter Komma – dann wie gewohnt rechnen",
        erklaerung: {
            intro: "Beim schriftlichen Rechnen mit Dezimalzahlen gilt eine einzige wichtige Regel: <b>Komma unter Komma</b>. Dann stehen Zehner unter Zehnern, Zehntel unter Zehnteln – und man rechnet wie bei ganzen Zahlen.",
            beispiele: [
                "➕ 2,5 + 1,3 = <b>3,8</b> (Zehntel: 5 + 3 = 8, Einer: 2 + 1 = 3).",
                "0️⃣ Fehlende Stellen mit Nullen auffüllen: 5,4 + 0,68 → 5,<b>40</b> + 0,68 = 6,08.",
                "➖ Ganze Zahl minus Kommazahl: 3 − 1,25 → 3,<b>00</b> − 1,25 = 1,75.",
                "💶 Beim Geld genauso: 3,45 € + 1,80 € = <b>5,25 €</b>."
            ],
            merksatz: "Komma unter Komma schreiben, fehlende Stellen mit Nullen auffüllen, dann ganz normal rechnen. Das Komma im Ergebnis steht genau unter den anderen Kommas."
        },
        uebung: {
            leicht: [
                { id: "dezrk6l1u_leicht_1", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Rechne: 2,5 + 1,3",
                    answers: ["3,8", "3,7", "4,8", "2,8"], correct: 0,
                    explanation: "5 Zehntel + 3 Zehntel = 8 Zehntel, 2 + 1 = 3 Einer: 3,8." },
                { id: "dezrk6l1u_leicht_2", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Worauf muss man beim schriftlichen Addieren von Dezimalzahlen achten?",
                    answers: ["Komma steht unter Komma", "Zahlen rechtsbündig schreiben", "Erst alle Kommas weglassen", "Die längere Zahl nach oben"], correct: 0,
                    explanation: "Nur wenn die Kommas untereinander stehen, treffen gleiche Stellenwerte aufeinander." },
                { id: "dezrk6l1u_leicht_3", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Rechne: 0,7 + 0,2",
                    answers: ["0,9", "0,09", "9,0", "0,5"], correct: 0,
                    explanation: "7 Zehntel + 2 Zehntel = 9 Zehntel = 0,9." },
                { id: "dezrk6l1u_leicht_4", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Rechne: 4,6 − 1,2",
                    answers: ["3,4", "3,8", "5,8", "2,4"], correct: 0,
                    explanation: "6 Zehntel − 2 Zehntel = 4 Zehntel, 4 − 1 = 3 Einer: 3,4." }
            ],
            mittel: [
                { id: "dezrk6l1u_mittel_1", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Rechne: 0,75 + 0,25",
                    answers: ["1", "0,9", "1,1", "0,5"], correct: 0,
                    explanation: "75 Hundertstel + 25 Hundertstel = 100 Hundertstel = 1." },
                { id: "dezrk6l1u_mittel_2", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Rechne: 4,2 − 1,7",
                    answers: ["2,5", "3,5", "2,9", "3,1"], correct: 0,
                    explanation: "4,2 − 1,7: von 1,7 sind es 0,3 bis 2 und weitere 2,2 bis 4,2 – zusammen 2,5." },
                { id: "dezrk6l1u_mittel_3", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Rechne: 12,05 + 0,9",
                    answers: ["12,95", "12,14", "21,05", "13,05"], correct: 0,
                    explanation: "0,9 = 0,90. Dann 12,05 + 0,90 = 12,95." },
                { id: "dezrk6l1u_mittel_4", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Rechne: 3 − 1,25",
                    answers: ["1,75", "2,25", "1,85", "2,75"], correct: 0,
                    explanation: "3 = 3,00. Dann 3,00 − 1,25 = 1,75." }
            ],
            schwer: [
                { id: "dezrk6l1u_schwer_1", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Rechne: 5,4 + 0,68",
                    answers: ["6,08", "5,72", "6,80", "11,2"], correct: 0,
                    explanation: "5,4 = 5,40. Dann 5,40 + 0,68 = 6,08." },
                { id: "dezrk6l1u_schwer_2", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Rechne: 10 − 3,75",
                    answers: ["6,25", "7,25", "6,75", "7,35"], correct: 0,
                    explanation: "10 = 10,00. Dann 10,00 − 3,75 = 6,25." },
                { id: "dezrk6l1u_schwer_3", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Lea rechnet 2,5 + 0,25 und erhält 2,30. Was war ihr Fehler?",
                    answers: ["Die Kommas standen nicht untereinander", "Sie hat die Zahlen vertauscht", "Sie hat zu viele Nullen ergänzt", "Sie hat statt plus minus gerechnet"], correct: 0,
                    explanation: "Sie hat 5 und 25 als gleiche Stellen behandelt. Richtig: 2,50 + 0,25 = 2,75." },
                { id: "dezrk6l1u_schwer_4", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Ein Heft kostet 3,45 €, ein Stift 1,80 €. Was kosten beide zusammen?",
                    answers: ["5,25 €", "4,25 €", "5,35 €", "4,53 €"], correct: 0,
                    explanation: "3,45 € + 1,80 € = 5,25 €." }
            ]
        },
        test: [
            { id: "dezrk6l1_test_1", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                question: "Rechne: 1,2 + 3,4",
                answers: ["4,6", "4,4", "5,6", "3,6"], correct: 0,
                explanation: "1,2 + 3,4 = 4,6." },
            { id: "dezrk6l1_test_2", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                question: "Rechne: 7,5 − 2,3",
                answers: ["5,2", "5,8", "4,2", "6,2"], correct: 0,
                explanation: "7,5 − 2,3 = 5,2." },
            { id: "dezrk6l1_test_3", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                question: "Rechne: 0,8 + 0,45",
                answers: ["1,25", "0,53", "1,15", "0,85"], correct: 0,
                explanation: "0,8 = 0,80. Dann 0,80 + 0,45 = 1,25." },
            { id: "dezrk6l1_test_4", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                question: "Rechne: 6 − 2,4",
                answers: ["3,6", "4,6", "3,4", "4,4"], correct: 0,
                explanation: "6 = 6,0. Dann 6,0 − 2,4 = 3,6." },
            { id: "dezrk6l1_test_5", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                question: "Warum füllt man bei 5,4 − 0,68 eine Null an?",
                answers: ["Damit gleiche Stellen untereinander stehen", "Damit die Zahl größer aussieht als vorher", "Weil man sonst gar nicht abziehen dürfte", "Weil jede Zahl zwei Stellen haben muss"], correct: 0,
                explanation: "5,4 = 5,40 – so stehen Hundertstel unter Hundertsteln." },
            { id: "dezrk6l1_test_6", category: "kurs_dezr_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                question: "Ein Seil ist 2,75 m lang, ein zweites 1,5 m. Wie lang sind beide zusammen?",
                answers: ["4,25 m", "3,25 m", "4,15 m", "2,90 m"], correct: 0,
                explanation: "1,5 m = 1,50 m. Dann 2,75 m + 1,50 m = 4,25 m." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "dezr_k6_l2",
        kurs: "dezimal_rechnen_k6",
        order: 2,
        icon: "✖️",
        title: "Dezimalzahlen multiplizieren und dividieren",
        kurz: "Das Komma wandert – mal 10, mal 100, mal 1000",
        erklaerung: {
            intro: "Beim Multiplizieren und Dividieren mit 10, 100 oder 1000 <b>wandert nur das Komma</b>. Beim Malnehmen zweier Kommazahlen zählt man die Nachkommastellen zusammen.",
            beispiele: [
                "➡️ Mal 10: Komma eine Stelle nach rechts – 0,3 · 10 = <b>3</b>.",
                "⬅️ Geteilt durch 10: Komma eine Stelle nach links – 4,5 ÷ 10 = <b>0,45</b>.",
                "✖️ Mal einer ganzen Zahl: 2,5 · 4 = <b>10</b> (wie 25 · 4 = 100, dann Komma setzen).",
                "🔢 Zwei Kommazahlen: 0,2 · 0,3 → 2 · 3 = 6, zusammen 2 Nachkommastellen = <b>0,06</b>."
            ],
            merksatz: "Mal 10/100/1000: Komma nach rechts. Geteilt durch 10/100/1000: Komma nach links. Bei zwei Kommazahlen die Nachkommastellen zählen und im Ergebnis genauso viele setzen."
        },
        uebung: {
            leicht: [
                { id: "dezrk6l2u_leicht_1", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Rechne: 0,3 · 10",
                    answers: ["3", "0,03", "30", "0,3"], correct: 0,
                    explanation: "Mal 10: Komma eine Stelle nach rechts – aus 0,3 wird 3." },
                { id: "dezrk6l2u_leicht_2", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Was passiert beim Multiplizieren mit 10?",
                    answers: ["Komma rückt nach rechts", "Komma rückt nach links", "Komma bleibt stehen", "Komma fällt ganz weg"], correct: 0,
                    explanation: "Mal 10 macht die Zahl zehnmal größer – das Komma rückt eine Stelle nach rechts." },
                { id: "dezrk6l2u_leicht_3", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Rechne: 4,5 · 10",
                    answers: ["45", "0,45", "450", "4,50"], correct: 0,
                    explanation: "Komma eine Stelle nach rechts: aus 4,5 wird 45." },
                { id: "dezrk6l2u_leicht_4", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Rechne: 2,5 · 4",
                    answers: ["10", "8,20", "12,5", "6,5"], correct: 0,
                    explanation: "25 · 4 = 100, eine Nachkommastelle: 10,0 = 10." }
            ],
            mittel: [
                { id: "dezrk6l2u_mittel_1", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Rechne: 0,25 · 100",
                    answers: ["25", "2,5", "250", "0,25"], correct: 0,
                    explanation: "Mal 100: Komma zwei Stellen nach rechts – aus 0,25 wird 25." },
                { id: "dezrk6l2u_mittel_2", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Rechne: 7,2 ÷ 2",
                    answers: ["3,6", "3,1", "14,4", "4,6"], correct: 0,
                    explanation: "72 ÷ 2 = 36, eine Nachkommastelle: 3,6." },
                { id: "dezrk6l2u_mittel_3", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Rechne: 4,5 ÷ 10",
                    answers: ["0,45", "45", "0,045", "4,05"], correct: 0,
                    explanation: "Geteilt durch 10: Komma eine Stelle nach links – 0,45." },
                { id: "dezrk6l2u_mittel_4", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Rechne: 1,2 · 3",
                    answers: ["3,6", "4,2", "0,36", "36"], correct: 0,
                    explanation: "12 · 3 = 36, eine Nachkommastelle: 3,6." }
            ],
            schwer: [
                { id: "dezrk6l2u_schwer_1", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Rechne: 0,2 · 0,3",
                    answers: ["0,06", "0,6", "0,5", "6"], correct: 0,
                    explanation: "2 · 3 = 6. Beide Zahlen haben je 1 Nachkommastelle, zusammen 2: 0,06." },
                { id: "dezrk6l2u_schwer_2", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Rechne: 0,5 · 0,4",
                    answers: ["0,2", "0,02", "2", "0,9"], correct: 0,
                    explanation: "5 · 4 = 20, zwei Nachkommastellen: 0,20 = 0,2." },
                { id: "dezrk6l2u_schwer_3", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Rechne: 8,4 ÷ 4",
                    answers: ["2,1", "2,6", "21", "3,1"], correct: 0,
                    explanation: "84 ÷ 4 = 21, eine Nachkommastelle: 2,1." },
                { id: "dezrk6l2u_schwer_4", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Rechne: 0,12 · 0,3",
                    answers: ["0,036", "0,36", "0,0036", "3,6"], correct: 0,
                    explanation: "12 · 3 = 36. Nachkommastellen: 2 + 1 = 3, also 0,036." }
            ]
        },
        test: [
            { id: "dezrk6l2_test_1", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                question: "Rechne: 0,6 · 10",
                answers: ["6", "0,06", "60", "0,6"], correct: 0,
                explanation: "Komma eine Stelle nach rechts: aus 0,6 wird 6." },
            { id: "dezrk6l2_test_2", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                question: "Rechne: 3,2 ÷ 10",
                answers: ["0,32", "32", "0,032", "3,02"], correct: 0,
                explanation: "Geteilt durch 10: Komma eine Stelle nach links – 0,32." },
            { id: "dezrk6l2_test_3", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                question: "Rechne: 1,5 · 6",
                answers: ["9", "7,5", "0,9", "90"], correct: 0,
                explanation: "15 · 6 = 90, eine Nachkommastelle: 9,0 = 9." },
            { id: "dezrk6l2_test_4", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                question: "Rechne: 0,4 · 0,2",
                answers: ["0,08", "0,8", "0,6", "8"], correct: 0,
                explanation: "4 · 2 = 8, zwei Nachkommastellen: 0,08." },
            { id: "dezrk6l2_test_5", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                question: "Rechne: 6,3 ÷ 3",
                answers: ["2,1", "3,1", "21", "2,3"], correct: 0,
                explanation: "63 ÷ 3 = 21, eine Nachkommastelle: 2,1." },
            { id: "dezrk6l2_test_6", category: "kurs_dezr_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                question: "Rechne: 2,75 · 100",
                answers: ["275", "27,5", "2750", "0,275"], correct: 0,
                explanation: "Mal 100: Komma zwei Stellen nach rechts – aus 2,75 wird 275." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "sppa_k5_l2",
        kurs: "simple_past_k5",
        order: 2,
        icon: "🔀",
        title: "Simple Past – unregelmäßige Verben",
        kurz: "go → went, see → saw: die zweite Form auswendig",
        erklaerung: {
            intro: "Viele wichtige Verben bilden das Simple Past <b>nicht</b> mit -ed. Sie haben eine eigene Vergangenheitsform, die man auswendig lernen muss – die sogenannte <b>2. Form</b>.",
            beispiele: [
                "🚶 go → <b>went</b>, see → <b>saw</b>, have → <b>had</b>, do → <b>did</b>",
                "🍽️ eat → <b>ate</b>, come → <b>came</b>, make → <b>made</b>, take → <b>took</b>",
                "💭 get → <b>got</b>, buy → <b>bought</b>, think → <b>thought</b>",
                "❗ Bei Frage und Verneinung mit <b>did</b> steht wieder die Grundform: I <b>didn't go</b>. Did you <b>see</b> it?"
            ],
            merksatz: "Unregelmäßige Verben haben eine eigene 2. Form ohne -ed. Sobald did oder didn't im Satz steht, kommt das Verb in der Grundform zurück – nie zweimal Vergangenheit."
        },
        uebung: {
            leicht: [
                { id: "sppak5l2u_leicht_1", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "leicht", points: 10,
                    question: "Wie lautet das Simple Past von 'go'?",
                    answers: ["went", "goed", "gone", "goes"], correct: 0,
                    explanation: "'go' ist unregelmäßig: go → went." },
                { id: "sppak5l2u_leicht_2", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "leicht", points: 10,
                    question: "Wie lautet das Simple Past von 'see'?",
                    answers: ["saw", "seed", "seen", "sees"], correct: 0,
                    explanation: "'see' ist unregelmäßig: see → saw." },
                { id: "sppak5l2u_leicht_3", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "leicht", points: 10,
                    question: "Was ist bei unregelmäßigen Verben anders?",
                    answers: ["Sie bekommen kein -ed", "Sie stehen immer am Ende", "Sie haben immer ein -s", "Sie brauchen immer 'be'"], correct: 0,
                    explanation: "Unregelmäßige Verben haben eine eigene Vergangenheitsform statt der -ed-Endung." },
                { id: "sppak5l2u_leicht_4", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "leicht", points: 10,
                    question: "Wie lautet das Simple Past von 'have'?",
                    answers: ["had", "haved", "has", "having"], correct: 0,
                    explanation: "'have' ist unregelmäßig: have → had." }
            ],
            mittel: [
                { id: "sppak5l2u_mittel_1", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "mittel", points: 10,
                    question: "Wie lautet das Simple Past von 'eat'?",
                    answers: ["ate", "eated", "eaten", "eats"], correct: 0,
                    explanation: "'eat' ist unregelmäßig: eat → ate." },
                { id: "sppak5l2u_mittel_2", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "mittel", points: 10,
                    question: "Wie lautet das Simple Past von 'come'?",
                    answers: ["came", "comed", "come", "comes"], correct: 0,
                    explanation: "'come' ist unregelmäßig: come → came." },
                { id: "sppak5l2u_mittel_3", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'I ___ to school yesterday.' (go)",
                    answers: ["went", "goed", "gone", "go"], correct: 0,
                    explanation: "'yesterday' verlangt Simple Past: go → went." },
                { id: "sppak5l2u_mittel_4", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "mittel", points: 10,
                    question: "Wie lautet das Simple Past von 'make'?",
                    answers: ["made", "maked", "make", "makes"], correct: 0,
                    explanation: "'make' ist unregelmäßig: make → made." }
            ],
            schwer: [
                { id: "sppak5l2u_schwer_1", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "schwer", points: 10,
                    question: "Ergänze die Verneinung: 'I ___ to the party.' (not go)",
                    answers: ["didn't go", "didn't went", "not went", "don't go"], correct: 0,
                    explanation: "Nach didn't steht die Grundform: didn't go – nie didn't went." },
                { id: "sppak5l2u_schwer_2", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "schwer", points: 10,
                    question: "Ergänze die Frage: '___ you see the film?'",
                    answers: ["Did", "Do", "Does", "Was"], correct: 0,
                    explanation: "Fragen im Simple Past bildet man mit 'Did' + Grundform." },
                { id: "sppak5l2u_schwer_3", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'She didn't ___ her homework.'",
                    answers: ["do", "did", "does", "done"], correct: 0,
                    explanation: "Nach didn't kommt die Grundform: didn't do." },
                { id: "sppak5l2u_schwer_4", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "schwer", points: 10,
                    question: "Wie lautet das Simple Past von 'take'?",
                    answers: ["took", "taked", "taken", "takes"], correct: 0,
                    explanation: "'take' ist unregelmäßig: take → took." }
            ]
        },
        test: [
            { id: "sppak5l2_test_1", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "mittel", points: 10,
                question: "Wie lautet das Simple Past von 'buy'?",
                answers: ["bought", "buyed", "buys", "buying"], correct: 0,
                explanation: "'buy' ist unregelmäßig: buy → bought." },
            { id: "sppak5l2_test_2", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "mittel", points: 10,
                question: "Ergänze: 'We ___ pizza last night.' (eat)",
                answers: ["ate", "eated", "eaten", "eat"], correct: 0,
                explanation: "'last night' verlangt Simple Past: eat → ate." },
            { id: "sppak5l2_test_3", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "leicht", points: 10,
                question: "Wie lautet das Simple Past von 'get'?",
                answers: ["got", "geted", "gets", "getting"], correct: 0,
                explanation: "'get' ist unregelmäßig: get → got." },
            { id: "sppak5l2_test_4", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "schwer", points: 10,
                question: "Ergänze: 'Did he ___ the book?'",
                answers: ["read", "reads", "reading", "readed"], correct: 0,
                explanation: "Nach 'Did' steht immer die Grundform: Did he read …?" },
            { id: "sppak5l2_test_5", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "mittel", points: 10,
                question: "Wie lautet das Simple Past von 'think'?",
                answers: ["thought", "thinked", "thinks", "thinking"], correct: 0,
                explanation: "'think' ist unregelmäßig: think → thought." },
            { id: "sppak5l2_test_6", category: "kurs_sppa_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "simple_past", difficulty: "schwer", points: 10,
                question: "Welche Form steht nach 'did' oder 'didn't'?",
                answers: ["Die Grundform", "Die 2. Form", "Die -ing-Form", "Die -ed-Form"], correct: 0,
                explanation: "'did' zeigt schon die Vergangenheit an – das Verb bleibt in der Grundform." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "zuo_k7_l1",
        kurs: "zuordnungen_k7",
        order: 1,
        icon: "📈",
        title: "Proportional und antiproportional",
        kurz: "Je mehr, desto mehr – oder je mehr, desto weniger",
        erklaerung: {
            intro: "Bei einer <b>proportionalen</b> Zuordnung gilt: je mehr, desto mehr – und zwar im gleichen Verhältnis. Bei einer <b>antiproportionalen</b> Zuordnung gilt: je mehr, desto weniger.",
            beispiele: [
                "📈 Proportional: 3 Brötchen kosten 1,50 € → 6 Brötchen kosten <b>3,00 €</b> (doppelt so viele, doppelter Preis).",
                "🔑 Bei proportional bleibt der Quotient gleich: 1,50 ÷ 3 = <b>0,50 € pro Brötchen</b>.",
                "📉 Antiproportional: 2 Arbeiter brauchen 12 Stunden → 4 Arbeiter brauchen nur <b>6 Stunden</b>.",
                "🔑 Bei antiproportional bleibt das Produkt gleich: 2 · 12 = 4 · 6 = <b>24</b>."
            ],
            merksatz: "Proportional: doppelt so viel → doppelt so viel, der Quotient y ÷ x bleibt gleich. Antiproportional: doppelt so viel → halb so viel, das Produkt x · y bleibt gleich."
        },
        uebung: {
            leicht: [
                { id: "zuok7l1u_leicht_1", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "leicht", points: 10,
                    question: "Was bedeutet eine proportionale Zuordnung?",
                    answers: ["Je mehr, desto mehr", "Je mehr, desto weniger", "Es bleibt immer gleich", "Es ändert sich zufällig"], correct: 0,
                    explanation: "Proportional heißt: Verdoppelt sich die eine Größe, verdoppelt sich auch die andere." },
                { id: "zuok7l1u_leicht_2", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "leicht", points: 10,
                    question: "3 Brötchen kosten 1,50 €. Was kosten 6 Brötchen?",
                    answers: ["3,00 €", "2,50 €", "4,50 €", "0,75 €"], correct: 0,
                    explanation: "Doppelt so viele Brötchen kosten doppelt so viel: 1,50 € · 2 = 3,00 €." },
                { id: "zuok7l1u_leicht_3", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "leicht", points: 10,
                    question: "Was bedeutet eine antiproportionale Zuordnung?",
                    answers: ["Je mehr, desto weniger", "Je mehr, desto mehr", "Es bleibt immer gleich", "Es wächst immer schneller"], correct: 0,
                    explanation: "Antiproportional heißt: Verdoppelt sich die eine Größe, halbiert sich die andere." },
                { id: "zuok7l1u_leicht_4", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "leicht", points: 10,
                    question: "Welche Zuordnung ist proportional?",
                    answers: ["Anzahl Hefte und Preis", "Anzahl Helfer und Arbeitszeit", "Geschwindigkeit und Fahrzeit", "Anzahl Kühe und Futterdauer"], correct: 0,
                    explanation: "Mehr Hefte kosten entsprechend mehr – das ist proportional." }
            ],
            mittel: [
                { id: "zuok7l1u_mittel_1", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "mittel", points: 10,
                    question: "4 Hefte kosten 6 €. Was kosten 10 Hefte?",
                    answers: ["15 €", "12 €", "18 €", "24 €"], correct: 0,
                    explanation: "Ein Heft kostet 6 € ÷ 4 = 1,50 €. Zehn Hefte: 1,50 € · 10 = 15 €." },
                { id: "zuok7l1u_mittel_2", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "mittel", points: 10,
                    question: "2 Arbeiter brauchen für eine Aufgabe 12 Stunden. Wie lange brauchen 4 Arbeiter?",
                    answers: ["6 Stunden", "24 Stunden", "8 Stunden", "3 Stunden"], correct: 0,
                    explanation: "Doppelt so viele Arbeiter brauchen die halbe Zeit: 12 ÷ 2 = 6 Stunden." },
                { id: "zuok7l1u_mittel_3", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "mittel", points: 10,
                    question: "Was bleibt bei einer proportionalen Zuordnung immer gleich?",
                    answers: ["Der Quotient y ÷ x", "Das Produkt x · y", "Die Summe x + y", "Die Differenz y − x"], correct: 0,
                    explanation: "Bei proportionalen Zuordnungen ist y ÷ x konstant – das ist der Proportionalitätsfaktor." },
                { id: "zuok7l1u_mittel_4", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "mittel", points: 10,
                    question: "Für 4 Muffins braucht man 250 g Mehl. Wie viel Mehl braucht man für 10 Muffins?",
                    answers: ["625 g", "500 g", "750 g", "1000 g"], correct: 0,
                    explanation: "Pro Muffin: 250 g ÷ 4 = 62,5 g. Für 10 Muffins: 62,5 g · 10 = 625 g." }
            ],
            schwer: [
                { id: "zuok7l1u_schwer_1", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "schwer", points: 10,
                    question: "6 Maler brauchen 8 Tage für ein Haus. Wie lange brauchen 4 Maler?",
                    answers: ["12 Tage", "10 Tage", "6 Tage", "16 Tage"], correct: 0,
                    explanation: "Antiproportional: 6 · 8 = 48 Tagewerke. Bei 4 Malern: 48 ÷ 4 = 12 Tage." },
                { id: "zuok7l1u_schwer_2", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "schwer", points: 10,
                    question: "Was bleibt bei einer antiproportionalen Zuordnung immer gleich?",
                    answers: ["Das Produkt x · y", "Der Quotient y ÷ x", "Die Summe x + y", "Die Differenz y − x"], correct: 0,
                    explanation: "Bei antiproportionalen Zuordnungen ist x · y konstant." },
                { id: "zuok7l1u_schwer_3", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "schwer", points: 10,
                    question: "3 kg Äpfel kosten 7,50 €. Was kosten 5 kg?",
                    answers: ["12,50 €", "10,50 €", "15,00 €", "11,25 €"], correct: 0,
                    explanation: "Pro kg: 7,50 € ÷ 3 = 2,50 €. Fünf kg: 2,50 € · 5 = 12,50 €." },
                { id: "zuok7l1u_schwer_4", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "schwer", points: 10,
                    question: "Welche Zuordnung ist antiproportional?",
                    answers: ["Geschwindigkeit und Fahrzeit", "Anzahl Hefte und Preis", "Menge Benzin und Kosten", "Anzahl Muffins und Mehl"], correct: 0,
                    explanation: "Je schneller man fährt, desto kürzer ist die Fahrzeit – Weg ÷ Geschwindigkeit bleibt konstant." }
            ]
        },
        test: [
            { id: "zuok7l1_test_1", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "mittel", points: 10,
                question: "5 Stifte kosten 2,50 €. Was kosten 8 Stifte?",
                answers: ["4,00 €", "3,50 €", "5,00 €", "4,50 €"], correct: 0,
                explanation: "Pro Stift: 2,50 € ÷ 5 = 0,50 €. Acht Stifte: 0,50 € · 8 = 4,00 €." },
            { id: "zuok7l1_test_2", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "mittel", points: 10,
                question: "Anzahl der Helfer und benötigte Arbeitszeit – welche Zuordnung ist das?",
                answers: ["Antiproportional", "Proportional", "Weder noch", "Immer konstant"], correct: 0,
                explanation: "Mehr Helfer brauchen weniger Zeit – je mehr, desto weniger." },
            { id: "zuok7l1_test_3", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "schwer", points: 10,
                question: "Ein Futtervorrat reicht für 12 Kühe 10 Tage. Wie lange reicht er für 8 Kühe?",
                answers: ["15 Tage", "12 Tage", "6 Tage", "20 Tage"], correct: 0,
                explanation: "Antiproportional: 12 · 10 = 120. Bei 8 Kühen: 120 ÷ 8 = 15 Tage." },
            { id: "zuok7l1_test_4", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "mittel", points: 10,
                question: "4 Hefte kosten 6 €. Wie groß ist der Preis pro Heft?",
                answers: ["1,50 €", "2,00 €", "0,75 €", "2,40 €"], correct: 0,
                explanation: "6 € ÷ 4 = 1,50 € pro Heft – das ist der Proportionalitätsfaktor." },
            { id: "zuok7l1_test_5", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "mittel", points: 10,
                question: "7 m Stoff kosten 21 €. Was kosten 3 m?",
                answers: ["9 €", "7 €", "12 €", "15 €"], correct: 0,
                explanation: "Pro Meter: 21 € ÷ 7 = 3 €. Drei Meter: 3 € · 3 = 9 €." },
            { id: "zuok7l1_test_6", category: "kurs_zuo_k7_l1", area: "schule", grade: 7, subject: "mathe", topic: "zuordnungen", difficulty: "leicht", points: 10,
                question: "Doppelte Menge bedeutet doppelter Preis. Welche Zuordnung ist das?",
                answers: ["Proportional", "Antiproportional", "Weder noch", "Immer konstant"], correct: 0,
                explanation: "Beide Größen wachsen im gleichen Verhältnis – das ist proportional." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "akpa_k7_l1",
        kurs: "aktiv_passiv_k7",
        order: 1,
        icon: "🔄",
        title: "Aktiv und Passiv unterscheiden",
        kurz: "Wer handelt – oder was mit etwas gemacht wird",
        erklaerung: {
            intro: "Im <b>Aktiv</b> steht der Täter im Mittelpunkt: <i>Der Lehrer erklärt die Regel.</i> Im <b>Passiv</b> steht die Handlung im Mittelpunkt, der Täter kann sogar wegfallen: <i>Die Regel wird erklärt.</i>",
            beispiele: [
                "🔧 Passiv bilden: <b>werden</b> + Partizip II – wird gebaut, wurde gebaut.",
                "🔁 Aus dem Akkusativobjekt wird das Subjekt: Der Junge wirft <b>den Ball</b>. → <b>Der Ball</b> wird geworfen.",
                "👤 Der Täter kann mit <b>von</b> ergänzt werden: Ein Lied wird <b>von den Kindern</b> gesungen.",
                "🕰️ Zeitform steckt in 'werden': wird geputzt (Präsens), <b>wurde</b> geputzt (Präteritum)."
            ],
            merksatz: "Passiv = werden + Partizip II. Man nutzt es, wenn der Täter unwichtig oder unbekannt ist. Beim Umformen wird das Akkusativobjekt des Aktivsatzes zum Subjekt des Passivsatzes."
        },
        uebung: {
            leicht: [
                { id: "akpak7l1u_leicht_1", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "leicht", points: 10,
                    question: "Wie bildet man das Passiv?",
                    answers: ["werden + Partizip II", "haben + Partizip II", "sein + Grundform", "werden + Grundform"], correct: 0,
                    explanation: "Das Vorgangspassiv besteht aus einer Form von 'werden' und dem Partizip II." },
                { id: "akpak7l1u_leicht_2", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "leicht", points: 10,
                    question: "Ist der Satz Aktiv oder Passiv? 'Der Hund beißt den Mann.'",
                    answers: ["Aktiv", "Passiv", "Beides zugleich", "Weder noch"], correct: 0,
                    explanation: "Der Täter (der Hund) ist das Subjekt und handelt selbst – das ist Aktiv." },
                { id: "akpak7l1u_leicht_3", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "leicht", points: 10,
                    question: "Ist der Satz Aktiv oder Passiv? 'Der Mann wird gebissen.'",
                    answers: ["Passiv", "Aktiv", "Beides zugleich", "Weder noch"], correct: 0,
                    explanation: "'wird gebissen' ist werden + Partizip II – also Passiv." },
                { id: "akpak7l1u_leicht_4", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "leicht", points: 10,
                    question: "Worauf liegt der Fokus im Passivsatz?",
                    answers: ["Auf der Handlung selbst", "Auf dem Täter der Handlung", "Auf der Uhrzeit im Satz", "Auf dem Ort der Handlung"], correct: 0,
                    explanation: "Im Passiv ist wichtig, was geschieht – nicht, wer es tut." }
            ],
            mittel: [
                { id: "akpak7l1u_mittel_1", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "mittel", points: 10,
                    question: "Wie lautet 'Der Lehrer erklärt die Regel.' im Passiv?",
                    answers: ["Die Regel wird erklärt.", "Die Regel hat erklärt.", "Der Lehrer wird erklärt.", "Die Regel ist erklärend."], correct: 0,
                    explanation: "Das Akkusativobjekt 'die Regel' wird zum Subjekt: Die Regel wird erklärt." },
                { id: "akpak7l1u_mittel_2", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "mittel", points: 10,
                    question: "In welcher Zeitform steht 'Das Auto wurde repariert.'?",
                    answers: ["Präteritum Passiv", "Präsens Passiv", "Perfekt Aktiv", "Präteritum Aktiv"], correct: 0,
                    explanation: "'wurde' ist die Präteritumform von werden – also Präteritum Passiv." },
                { id: "akpak7l1u_mittel_3", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "mittel", points: 10,
                    question: "Womit nennt man den Täter in einem Passivsatz?",
                    answers: ["Mit 'von' und Dativ", "Mit 'für' und Akkusativ", "Mit 'wegen' und Genitiv", "Mit 'zu' und Nominativ"], correct: 0,
                    explanation: "Der Täter wird mit 'von' angeschlossen: Das Lied wird von den Kindern gesungen." },
                { id: "akpak7l1u_mittel_4", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "mittel", points: 10,
                    question: "Welcher Satz steht im Passiv?",
                    answers: ["Die Tür wird geöffnet.", "Er öffnet gerade die Tür.", "Die Tür öffnet sich leise.", "Wir haben die Tür geöffnet."], correct: 0,
                    explanation: "Nur 'wird geöffnet' ist werden + Partizip II." }
            ],
            schwer: [
                { id: "akpak7l1u_schwer_1", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "schwer", points: 10,
                    question: "Wie lautet 'Die Kinder singen ein Lied.' im Passiv (mit Täter)?",
                    answers: ["Ein Lied wird von den Kindern gesungen.", "Ein Lied wird für die Kinder gesungen.", "Die Kinder werden ein Lied gesungen.", "Ein Lied hat die Kinder gesungen."], correct: 0,
                    explanation: "'ein Lied' wird Subjekt, der Täter kommt mit 'von' dazu." },
                { id: "akpak7l1u_schwer_2", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "schwer", points: 10,
                    question: "Was wird beim Umformen ins Passiv aus dem Akkusativobjekt?",
                    answers: ["Das Subjekt", "Das Prädikat", "Ein Dativobjekt", "Eine Zeitangabe"], correct: 0,
                    explanation: "Das Akkusativobjekt des Aktivsatzes wird im Passivsatz zum Subjekt." },
                { id: "akpak7l1u_schwer_3", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "schwer", points: 10,
                    question: "'Der Brief ist geschrieben.' – Was drückt dieser Satz aus?",
                    answers: ["Einen Zustand nach der Handlung", "Einen Vorgang, der gerade läuft", "Eine Handlung in der Zukunft", "Einen Wunsch des Sprechers"], correct: 0,
                    explanation: "sein + Partizip II ist das Zustandspassiv – die Handlung ist bereits abgeschlossen." },
                { id: "akpak7l1u_schwer_4", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "schwer", points: 10,
                    question: "Warum benutzt man oft das Passiv?",
                    answers: ["Weil der Täter unwichtig ist", "Weil der Satz kürzer wird", "Weil es höflicher klingt", "Weil es die Zeit ändert"], correct: 0,
                    explanation: "Passiv nutzt man, wenn der Täter unbekannt oder nebensächlich ist: Die Straße wird gesperrt." }
            ]
        },
        test: [
            { id: "akpak7l1_test_1", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "leicht", points: 10,
                question: "Woraus besteht das Vorgangspassiv?",
                answers: ["werden + Partizip II", "sein + Partizip II", "haben + Grundform", "werden + Infinitiv"], correct: 0,
                explanation: "Vorgangspassiv = eine Form von 'werden' plus Partizip II." },
            { id: "akpak7l1_test_2", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "leicht", points: 10,
                question: "Ist der Satz Aktiv oder Passiv? 'Die Fenster werden geputzt.'",
                answers: ["Passiv", "Aktiv", "Beides zugleich", "Weder noch"], correct: 0,
                explanation: "'werden geputzt' ist werden + Partizip II – also Passiv." },
            { id: "akpak7l1_test_3", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "mittel", points: 10,
                question: "Wie lautet 'Der Junge wirft den Ball.' im Passiv?",
                answers: ["Der Ball wird geworfen.", "Der Junge wird geworfen.", "Der Ball hat geworfen.", "Der Ball ist werfend."], correct: 0,
                explanation: "'den Ball' wird zum Subjekt: Der Ball wird geworfen." },
            { id: "akpak7l1_test_4", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "mittel", points: 10,
                question: "In welcher Zeitform steht 'Das Haus wurde gebaut.'?",
                answers: ["Präteritum Passiv", "Präsens Passiv", "Perfekt Passiv", "Präteritum Aktiv"], correct: 0,
                explanation: "'wurde' ist Präteritum von werden – Präteritum Passiv." },
            { id: "akpak7l1_test_5", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "schwer", points: 10,
                question: "Was passiert mit dem Subjekt des Aktivsatzes im Passiv?",
                answers: ["Es folgt auf 'von' oder entfällt", "Es wird immer zum Objekt", "Es bleibt genau an seinem Platz", "Es wird zum neuen Prädikat"], correct: 0,
                explanation: "Der Täter kann mit 'von' genannt werden – oder ganz wegfallen." },
            { id: "akpak7l1_test_6", category: "kurs_akpa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "aktiv_passiv", difficulty: "schwer", points: 10,
                question: "Welcher Satz steht im Aktiv?",
                answers: ["Der Gärtner pflanzt Rosen.", "Die Rosen werden gepflanzt.", "Die Rosen sind gepflanzt.", "Es wird viel gepflanzt."], correct: 0,
                explanation: "Im ersten Satz handelt der Täter selbst – das ist Aktiv." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "prep_k7_l1",
        kurs: "prepositions_k7",
        order: 1,
        icon: "📍",
        title: "Prepositions of Place and Time",
        kurz: "in, on, at – bei Ort und Zeit richtig wählen",
        erklaerung: {
            intro: "Die drei wichtigsten Präpositionen im Englischen sind <b>in</b>, <b>on</b> und <b>at</b>. Bei Zeit und Ort folgen sie festen Regeln – vom Kleinen zum Großen: at → on → in.",
            beispiele: [
                "🕐 Zeit: <b>at</b> 7 o'clock (Uhrzeit), <b>on</b> Monday (Tag/Datum), <b>in</b> July (Monat, Jahr, Jahreszeit).",
                "📍 Ort: <b>at</b> the bus stop (Punkt), <b>on</b> the table (Fläche), <b>in</b> the kitchen (Raum).",
                "❗ Feste Wendungen: <b>at</b> night, <b>at</b> the weekend, <b>at</b> home.",
                "💡 Eselsbrücke: at = Punkt, on = Linie oder Fläche, in = Raum oder Zeitraum."
            ],
            merksatz: "at für Uhrzeiten und genaue Punkte, on für Tage, Daten und Flächen, in für Monate, Jahre, Jahreszeiten und geschlossene Räume."
        },
        uebung: {
            leicht: [
                { id: "prepk7l1u_leicht_1", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "leicht", points: 10,
                    question: "Ergänze: '___ 7 o'clock'",
                    answers: ["at", "on", "in", "to"], correct: 0,
                    explanation: "Bei Uhrzeiten steht immer 'at': at 7 o'clock." },
                { id: "prepk7l1u_leicht_2", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "leicht", points: 10,
                    question: "Ergänze: '___ Monday'",
                    answers: ["on", "at", "in", "by"], correct: 0,
                    explanation: "Bei Wochentagen steht 'on': on Monday." },
                { id: "prepk7l1u_leicht_3", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "leicht", points: 10,
                    question: "Ergänze: '___ July'",
                    answers: ["in", "on", "at", "of"], correct: 0,
                    explanation: "Bei Monaten steht 'in': in July." },
                { id: "prepk7l1u_leicht_4", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'The book is ___ the table.' (auf dem Tisch)",
                    answers: ["on", "in", "at", "to"], correct: 0,
                    explanation: "Auf einer Fläche liegt etwas 'on': on the table." }
            ],
            mittel: [
                { id: "prepk7l1u_mittel_1", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'The toys are ___ the box.' (in der Kiste)",
                    answers: ["in", "on", "at", "by"], correct: 0,
                    explanation: "In einem geschlossenen Raum oder Behälter steht 'in': in the box." },
                { id: "prepk7l1u_mittel_2", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "mittel", points: 10,
                    question: "Ergänze: '___ Christmas Day'",
                    answers: ["on", "at", "in", "by"], correct: 0,
                    explanation: "Ein einzelner Tag bekommt 'on': on Christmas Day." },
                { id: "prepk7l1u_mittel_3", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'I sleep ___ night.'",
                    answers: ["at", "on", "in", "by"], correct: 0,
                    explanation: "'at night' ist eine feste Wendung – anders als 'in the morning'." },
                { id: "prepk7l1u_mittel_4", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'She was born ___ 2015.'",
                    answers: ["in", "on", "at", "of"], correct: 0,
                    explanation: "Bei Jahreszahlen steht 'in': in 2015." }
            ],
            schwer: [
                { id: "prepk7l1u_schwer_1", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "schwer", points: 10,
                    question: "Ergänze (britisches Englisch): 'We meet ___ the weekend.'",
                    answers: ["at", "on", "in", "by"], correct: 0,
                    explanation: "Im britischen Englisch heißt es 'at the weekend' – eine feste Wendung." },
                { id: "prepk7l1u_schwer_2", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'I am waiting ___ the bus stop.'",
                    answers: ["at", "in", "on", "to"], correct: 0,
                    explanation: "Ein genauer Punkt oder Treffpunkt bekommt 'at': at the bus stop." },
                { id: "prepk7l1u_schwer_3", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'There is a picture ___ the wall.'",
                    answers: ["on", "in", "at", "by"], correct: 0,
                    explanation: "Die Wand ist eine Fläche – etwas hängt 'on the wall'." },
                { id: "prepk7l1u_schwer_4", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "schwer", points: 10,
                    question: "Welche Präposition nimmt man bei Monaten, Jahren und Jahreszeiten?",
                    answers: ["in", "on", "at", "by"], correct: 0,
                    explanation: "Längere Zeiträume bekommen 'in': in May, in 2026, in winter." }
            ]
        },
        test: [
            { id: "prepk7l1_test_1", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "leicht", points: 10,
                question: "Ergänze: 'The film starts ___ 5 p.m.'",
                answers: ["at", "on", "in", "by"], correct: 0,
                explanation: "Uhrzeiten bekommen 'at': at 5 p.m." },
            { id: "prepk7l1_test_2", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "mittel", points: 10,
                question: "Ergänze: 'We have a party ___ Friday evening.'",
                answers: ["on", "at", "in", "by"], correct: 0,
                explanation: "Ein bestimmter Tag mit Tageszeit bekommt 'on': on Friday evening." },
            { id: "prepk7l1_test_3", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "leicht", points: 10,
                question: "Ergänze: 'It often snows ___ winter.'",
                answers: ["in", "on", "at", "by"], correct: 0,
                explanation: "Jahreszeiten bekommen 'in': in winter." },
            { id: "prepk7l1_test_4", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "mittel", points: 10,
                question: "Ergänze: 'Mum is cooking ___ the kitchen.'",
                answers: ["in", "on", "at", "to"], correct: 0,
                explanation: "Ein Raum bekommt 'in': in the kitchen." },
            { id: "prepk7l1_test_5", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "schwer", points: 10,
                question: "Ergänze: 'I stayed ___ home yesterday.'",
                answers: ["at", "in", "on", "to"], correct: 0,
                explanation: "'at home' ist eine feste Wendung – ohne Artikel und immer mit at." },
            { id: "prepk7l1_test_6", category: "kurs_prep_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "prepositions", difficulty: "mittel", points: 10,
                question: "Welche Präposition gehört zu genauen Uhrzeiten?",
                answers: ["at", "on", "in", "by"], correct: 0,
                explanation: "Uhrzeiten sind Zeitpunkte – dafür steht 'at'." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "nbsa_k7_l1",
        kurs: "nebensatzarten_k7",
        order: 1,
        icon: "🧭",
        title: "Nebensatzarten unterscheiden",
        kurz: "Kausal, temporal, konditional, konzessiv, final",
        erklaerung: {
            intro: "Nebensätze lassen sich danach einteilen, <b>welche Frage sie beantworten</b>. Die einleitende Konjunktion verrät die Art des Nebensatzes – und damit auch, was er über den Hauptsatz aussagt.",
            beispiele: [
                "❓ Warum? <b>Kausalsatz</b>: Ich bleibe zu Hause, <b>weil</b> es regnet. (auch: da)",
                "🕐 Wann? <b>Temporalsatz</b>: <b>Als</b> ich klein war, wohnten wir hier. (auch: während, nachdem, bevor)",
                "🔀 Unter welcher Bedingung? <b>Konditionalsatz</b>: <b>Wenn</b> du willst, komme ich mit. (auch: falls)",
                "🙃 Trotz welchen Gegengrunds? <b>Konzessivsatz</b>: <b>Obwohl</b> es regnet, gehen wir raus.",
                "🎯 Wozu? <b>Finalsatz</b>: Ich lerne, <b>damit</b> ich die Prüfung bestehe."
            ],
            merksatz: "weil/da = Grund (kausal), als/wenn/während/nachdem = Zeit (temporal), wenn/falls = Bedingung (konditional), obwohl = Gegengrund (konzessiv), damit = Zweck (final). Relativsätze beginnen mit einem Relativpronomen und beschreiben ein Nomen genauer."
        },
        uebung: {
            leicht: [
                { id: "nbsak7l1u_leicht_1", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "leicht", points: 10,
                    question: "Welche Nebensatzart ist das? 'Ich bleibe zu Hause, weil es regnet.'",
                    answers: ["Kausalsatz", "Finalsatz", "Temporalsatz", "Relativsatz"], correct: 0,
                    explanation: "'weil' nennt den Grund – das ist ein Kausalsatz." },
                { id: "nbsak7l1u_leicht_2", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "leicht", points: 10,
                    question: "Mit welcher Frage findet man einen Kausalsatz?",
                    answers: ["Warum?", "Wann?", "Wozu?", "Wie?"], correct: 0,
                    explanation: "Der Kausalsatz antwortet auf die Frage 'Warum?'." },
                { id: "nbsak7l1u_leicht_3", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "leicht", points: 10,
                    question: "Welche Nebensatzart ist das? 'Als ich klein war, wohnten wir am Meer.'",
                    answers: ["Temporalsatz", "Kausalsatz", "Konzessivsatz", "Finalsatz"], correct: 0,
                    explanation: "'Als' gibt eine Zeit an – das ist ein Temporalsatz." },
                { id: "nbsak7l1u_leicht_4", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "leicht", points: 10,
                    question: "Womit beginnt ein Relativsatz?",
                    answers: ["Mit einem Relativpronomen", "Mit einer festen Präposition", "Mit einem starken Verb", "Mit einem Fragewort"], correct: 0,
                    explanation: "Relativsätze beginnen mit der, die, das oder welcher und beschreiben ein Nomen genauer." }
            ],
            mittel: [
                { id: "nbsak7l1u_mittel_1", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "mittel", points: 10,
                    question: "Welche Nebensatzart ist das? 'Wenn du willst, komme ich mit.'",
                    answers: ["Konditionalsatz", "Kausalsatz", "Finalsatz", "Relativsatz"], correct: 0,
                    explanation: "Hier wird eine Bedingung genannt – das ist ein Konditionalsatz." },
                { id: "nbsak7l1u_mittel_2", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "mittel", points: 10,
                    question: "Welche Nebensatzart ist das? 'Obwohl es regnet, gehen wir raus.'",
                    answers: ["Konzessivsatz", "Konditionalsatz", "Temporalsatz", "Kausalsatz"], correct: 0,
                    explanation: "'Obwohl' nennt einen Gegengrund – das ist ein Konzessivsatz." },
                { id: "nbsak7l1u_mittel_3", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "mittel", points: 10,
                    question: "Welche Nebensatzart ist das? 'Ich lerne, damit ich die Prüfung bestehe.'",
                    answers: ["Finalsatz", "Kausalsatz", "Konzessivsatz", "Temporalsatz"], correct: 0,
                    explanation: "'damit' nennt den Zweck oder das Ziel – das ist ein Finalsatz." },
                { id: "nbsak7l1u_mittel_4", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "mittel", points: 10,
                    question: "Mit welcher Frage findet man einen Temporalsatz?",
                    answers: ["Wann?", "Warum?", "Wozu?", "Womit?"], correct: 0,
                    explanation: "Der Temporalsatz antwortet auf die Frage 'Wann?'." }
            ],
            schwer: [
                { id: "nbsak7l1u_schwer_1", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "schwer", points: 10,
                    question: "Welche Nebensatzart ist das? 'Das Buch, das ich gerade lese, ist spannend.'",
                    answers: ["Relativsatz", "Konditionalsatz", "Kausalsatz", "Finalsatz"], correct: 0,
                    explanation: "'das ich gerade lese' beschreibt das Nomen Buch genauer – ein Relativsatz." },
                { id: "nbsak7l1u_schwer_2", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "schwer", points: 10,
                    question: "Welche Nebensatzart ist das? 'Nachdem wir gegessen hatten, gingen wir spazieren.'",
                    answers: ["Temporalsatz", "Kausalsatz", "Konzessivsatz", "Finalsatz"], correct: 0,
                    explanation: "'Nachdem' ordnet die Ereignisse zeitlich – das ist ein Temporalsatz." },
                { id: "nbsak7l1u_schwer_3", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "schwer", points: 10,
                    question: "'Wenn' kann zwei Arten einleiten. Welche sind das?",
                    answers: ["Temporal und konditional", "Kausal und konzessiv", "Final und kausal", "Konzessiv und temporal"], correct: 0,
                    explanation: "'Immer wenn es regnet' ist temporal, 'Wenn du willst' ist konditional – der Sinn entscheidet." },
                { id: "nbsak7l1u_schwer_4", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "schwer", points: 10,
                    question: "Welche Nebensatzart ist das? 'Ich hoffe, dass du bald kommst.'",
                    answers: ["Objektsatz mit dass", "Relativsatz mit dass", "Finalsatz mit dass", "Kausalsatz mit dass"], correct: 0,
                    explanation: "Der dass-Satz steht hier anstelle eines Objekts: Ich hoffe was? – dass du bald kommst." }
            ]
        },
        test: [
            { id: "nbsak7l1_test_1", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "leicht", points: 10,
                question: "Welche Konjunktion leitet einen Kausalsatz ein?",
                answers: ["weil", "obwohl", "damit", "während"], correct: 0,
                explanation: "'weil' (und 'da') nennen den Grund – Kausalsatz." },
            { id: "nbsak7l1_test_2", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "leicht", points: 10,
                question: "Welche Konjunktion leitet einen Konzessivsatz ein?",
                answers: ["obwohl", "weil", "bevor", "falls"], correct: 0,
                explanation: "'obwohl' nennt einen Gegengrund – Konzessivsatz." },
            { id: "nbsak7l1_test_3", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "mittel", points: 10,
                question: "Welche Konjunktion leitet einen Finalsatz ein?",
                answers: ["damit", "nachdem", "obwohl", "weil"], correct: 0,
                explanation: "'damit' nennt den Zweck – Finalsatz." },
            { id: "nbsak7l1_test_4", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "mittel", points: 10,
                question: "Welche Nebensatzart ist das? 'Falls es schneit, fahren wir nicht.'",
                answers: ["Konditionalsatz", "Temporalsatz", "Kausalsatz", "Konzessivsatz"], correct: 0,
                explanation: "'Falls' nennt eine Bedingung – Konditionalsatz." },
            { id: "nbsak7l1_test_5", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "schwer", points: 10,
                question: "Welche Nebensatzart ist das? 'Der Mann, der dort steht, ist mein Onkel.'",
                answers: ["Relativsatz", "Kausalsatz", "Objektsatz", "Temporalsatz"], correct: 0,
                explanation: "'der dort steht' beschreibt das Nomen Mann genauer – Relativsatz." },
            { id: "nbsak7l1_test_6", category: "kurs_nbsa_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "nebensaetze", difficulty: "schwer", points: 10,
                question: "Was gilt für das Verb in allen diesen Nebensätzen?",
                answers: ["Es steht am Satzende", "Es steht an Position 2", "Es steht ganz vorne", "Es fällt oft ganz weg"], correct: 0,
                explanation: "Unterordnende Konjunktionen schicken das gebeugte Verb ans Ende des Nebensatzes." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "satv_k7_l1",
        kurs: "satzglieder_vertiefend_k7",
        order: 1,
        icon: "🧱",
        title: "Adverbiale Bestimmungen und weitere Objekte",
        kurz: "Wo, wann, wie, warum – und Objekte mit Präposition",
        erklaerung: {
            intro: "Neben Subjekt, Prädikat und Objekt gibt es die <b>adverbialen Bestimmungen</b>. Sie sagen, wo, wann, wie oder warum etwas geschieht. Dazu kommen zwei besondere Objektarten: das <b>Präpositionalobjekt</b> und das <b>Genitivobjekt</b>.",
            beispiele: [
                "📍 Wo/Wohin? <b>Lokal</b>: Wir treffen uns <b>im Park</b>.",
                "🕐 Wann? <b>Temporal</b>: <b>Morgen</b> fahren wir weg.",
                "🏃 Wie? <b>Modal</b>: Er läuft <b>sehr schnell</b>.",
                "❓ Warum? <b>Kausal</b>: <b>Wegen des Regens</b> bleiben wir zu Hause.",
                "🔗 Präpositionalobjekt: Ich warte <b>auf den Bus</b>. (Worauf warte ich?)"
            ],
            merksatz: "Adverbiale Bestimmungen beantworten wo, wann, wie oder warum. Ein Präpositionalobjekt gehört fest zum Verb (warten auf, denken an) und wird mit 'Worauf?' oder 'An wen?' erfragt. Die Umstellprobe zeigt, was zusammen ein Satzglied bildet."
        },
        uebung: {
            leicht: [
                { id: "satvk7l1u_leicht_1", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Welche adverbiale Bestimmung ist 'im Park'? 'Wir treffen uns im Park.'",
                    answers: ["Bestimmung des Ortes", "Bestimmung der Zeit", "Bestimmung des Grundes", "Bestimmung der Art"], correct: 0,
                    explanation: "'im Park' antwortet auf die Frage 'Wo?' – eine lokale Bestimmung." },
                { id: "satvk7l1u_leicht_2", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Mit welcher Frage findet man eine temporale Bestimmung?",
                    answers: ["Wann?", "Wo?", "Wie?", "Warum?"], correct: 0,
                    explanation: "Temporale Bestimmungen antworten auf 'Wann?'." },
                { id: "satvk7l1u_leicht_3", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Welche adverbiale Bestimmung ist 'sehr schnell'? 'Er läuft sehr schnell.'",
                    answers: ["Bestimmung der Art", "Bestimmung des Ortes", "Bestimmung der Zeit", "Bestimmung des Grundes"], correct: 0,
                    explanation: "'sehr schnell' antwortet auf 'Wie?' – eine modale Bestimmung." },
                { id: "satvk7l1u_leicht_4", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Wozu dient die Umstellprobe?",
                    answers: ["Sie zeigt, was ein Satzglied ist", "Sie zeigt die Zeitform an", "Sie prüft die Rechtschreibung", "Sie findet fehlende Kommas"], correct: 0,
                    explanation: "Nur was gemeinsam an den Satzanfang rücken kann, ist ein Satzglied." }
            ],
            mittel: [
                { id: "satvk7l1u_mittel_1", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Welche adverbiale Bestimmung ist 'Wegen des Regens'?",
                    answers: ["Bestimmung des Grundes", "Bestimmung der Zeit", "Bestimmung des Ortes", "Bestimmung der Art"], correct: 0,
                    explanation: "'Wegen des Regens' antwortet auf 'Warum?' – eine kausale Bestimmung." },
                { id: "satvk7l1u_mittel_2", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Welches Satzglied ist 'auf den Bus'? 'Ich warte auf den Bus.'",
                    answers: ["Präpositionalobjekt", "Dativobjekt", "Genitivobjekt", "Subjekt des Satzes"], correct: 0,
                    explanation: "'warten auf' gehört fest zusammen – man fragt: Worauf warte ich?" },
                { id: "satvk7l1u_mittel_3", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Mit welcher Frage findet man ein Genitivobjekt?",
                    answers: ["Wessen?", "Wem?", "Wen oder was?", "Wohin?"], correct: 0,
                    explanation: "Das Genitivobjekt erfragt man mit 'Wessen?' – Wir gedenken der Opfer." },
                { id: "satvk7l1u_mittel_4", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Welche adverbiale Bestimmung ist 'Morgen'? 'Morgen fahren wir weg.'",
                    answers: ["Bestimmung der Zeit", "Bestimmung des Ortes", "Bestimmung der Art", "Bestimmung des Grundes"], correct: 0,
                    explanation: "'Morgen' antwortet auf 'Wann?' – eine temporale Bestimmung." }
            ],
            schwer: [
                { id: "satvk7l1u_schwer_1", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Welches Satzglied ist 'an ihre Freundin'? 'Sie denkt an ihre Freundin.'",
                    answers: ["Präpositionalobjekt", "Bestimmung des Ortes", "Akkusativobjekt", "Genitivobjekt"], correct: 0,
                    explanation: "'denken an' gehört fest zusammen – gefragt wird: An wen denkt sie?" },
                { id: "satvk7l1u_schwer_2", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Welches Satzglied ist 'der Opfer'? 'Wir gedenken der Opfer.'",
                    answers: ["Genitivobjekt", "Dativobjekt", "Akkusativobjekt", "Präpositionalobjekt"], correct: 0,
                    explanation: "'gedenken' verlangt den Genitiv: Wessen gedenken wir? – der Opfer." },
                { id: "satvk7l1u_schwer_3", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Welche adverbiale Bestimmung ist 'Mit dem Fahrrad'? 'Mit dem Fahrrad fährt er zur Schule.'",
                    answers: ["Bestimmung der Art", "Bestimmung der Zeit", "Bestimmung des Grundes", "Bestimmung des Zwecks"], correct: 0,
                    explanation: "Sie antwortet auf 'Wie/Womit?' – eine modale Bestimmung." },
                { id: "satvk7l1u_schwer_4", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Wie viele Satzglieder hat 'Gestern kaufte mein Bruder ein Fahrrad.'?",
                    answers: ["Vier", "Drei", "Fünf", "Sechs"], correct: 0,
                    explanation: "Gestern / kaufte / mein Bruder / ein Fahrrad – vier Satzglieder." }
            ]
        },
        test: [
            { id: "satvk7l1_test_1", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                question: "Mit welcher Frage findet man eine lokale Bestimmung?",
                answers: ["Wo oder wohin?", "Wann oder wie oft?", "Wie oder womit?", "Warum oder wozu?"], correct: 0,
                explanation: "Lokale Bestimmungen antworten auf 'Wo?' oder 'Wohin?'." },
            { id: "satvk7l1_test_2", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                question: "Welche adverbiale Bestimmung ist 'aus Angst'? 'Aus Angst lief er weg.'",
                answers: ["Bestimmung des Grundes", "Bestimmung der Zeit", "Bestimmung des Ortes", "Bestimmung der Art"], correct: 0,
                explanation: "'Aus Angst' antwortet auf 'Warum?' – eine kausale Bestimmung." },
            { id: "satvk7l1_test_3", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                question: "Welches Satzglied ist 'über den Film'? 'Wir sprechen über den Film.'",
                answers: ["Präpositionalobjekt", "Bestimmung des Ortes", "Dativobjekt", "Genitivobjekt"], correct: 0,
                explanation: "'sprechen über' gehört fest zusammen: Worüber sprechen wir?" },
            { id: "satvk7l1_test_4", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                question: "Welche adverbiale Bestimmung ist 'jeden Sonntag'?",
                answers: ["Bestimmung der Zeit", "Bestimmung des Ortes", "Bestimmung der Art", "Bestimmung des Grundes"], correct: 0,
                explanation: "'jeden Sonntag' antwortet auf 'Wann?' beziehungsweise 'Wie oft?'." },
            { id: "satvk7l1_test_5", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                question: "Woran erkennt man ein Präpositionalobjekt?",
                answers: ["Die Präposition gehört zum Verb", "Es steht immer am Satzanfang", "Es hat nie einen Artikel", "Es besteht aus einem Wort"], correct: 0,
                explanation: "Bei warten auf, denken an, sprechen über gehört die Präposition fest zum Verb." },
            { id: "satvk7l1_test_6", category: "kurs_satv_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                question: "Was zeigt die Umstellprobe bei 'Am Abend liest mein Vater Zeitung.'?",
                answers: ["'Am Abend' ist ein Satzglied", "'Am' ist ein eigenes Satzglied", "'liest mein' gehört zusammen", "'Vater Zeitung' ist ein Glied"], correct: 0,
                explanation: "Nur 'Am Abend' lässt sich gemeinsam verschieben – es bildet ein Satzglied." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "futu_k7_l1",
        kurs: "future_k7",
        order: 1,
        icon: "🔮",
        title: "will-future und going-to-future",
        kurz: "Spontan entschieden oder längst geplant?",
        erklaerung: {
            intro: "Für die Zukunft gibt es im Englischen zwei Formen. <b>will</b> nutzt man für spontane Entscheidungen, Vermutungen und Versprechen. <b>going to</b> nutzt man für feste Pläne und wenn man in der Gegenwart schon Anzeichen sieht.",
            beispiele: [
                "💡 Spontan: The phone is ringing. – I <b>will</b> answer it.",
                "📅 Geplant: We <b>are going to</b> visit Grandma on Sunday. (steht schon fest)",
                "☁️ Anzeichen sichtbar: Look at the clouds! It <b>is going to</b> rain.",
                "🤔 Vermutung mit think/hope: I think it <b>will</b> be sunny tomorrow."
            ],
            merksatz: "will = spontan entschieden, vermutet oder versprochen (oft mit I think, I hope, probably). going to = geplante Absicht oder ein Anzeichen, das man jetzt schon sieht."
        },
        uebung: {
            leicht: [
                { id: "futuk7l1u_leicht_1", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "leicht", points: 10,
                    question: "Wie bildet man das will-future?",
                    answers: ["will + Grundform", "will + Verb-ing", "am/is/are + going", "have/has + Partizip"], correct: 0,
                    explanation: "will-future = will + Grundform des Verbs: I will go." },
                { id: "futuk7l1u_leicht_2", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "leicht", points: 10,
                    question: "Wie bildet man das going-to-future?",
                    answers: ["am/is/are going to + Grundform", "will going to + Grundform", "have/has going to + Verb", "did going to + Grundform"], correct: 0,
                    explanation: "going-to-future = Form von be + going to + Grundform: She is going to travel." },
                { id: "futuk7l1u_leicht_3", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "leicht", points: 10,
                    question: "Wofür benutzt man 'going to'?",
                    answers: ["Für feste Pläne und Absichten", "Für spontane Entscheidungen", "Für vergangene Ereignisse", "Für regelmäßige Gewohnheiten"], correct: 0,
                    explanation: "'going to' zeigt an, dass etwas schon geplant oder beabsichtigt ist." },
                { id: "futuk7l1u_leicht_4", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "leicht", points: 10,
                    question: "Wofür benutzt man 'will'?",
                    answers: ["Für spontane Entscheidungen", "Für längst gefasste Pläne", "Für sichtbare Anzeichen", "Für tägliche Gewohnheiten"], correct: 0,
                    explanation: "'will' nutzt man, wenn man sich gerade in diesem Moment entscheidet." }
            ],
            mittel: [
                { id: "futuk7l1u_mittel_1", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'The phone is ringing. – I ___ answer it.'",
                    answers: ["will", "am going to", "was going to", "would have"], correct: 0,
                    explanation: "Die Entscheidung fällt spontan in diesem Moment – also will." },
                { id: "futuk7l1u_mittel_2", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'We ___ visit Grandma on Sunday. It's all planned.'",
                    answers: ["are going to", "will maybe", "were going to", "have been to"], correct: 0,
                    explanation: "Der Plan steht schon fest – also going to." },
                { id: "futuk7l1u_mittel_3", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Look at those clouds! It ___ rain.'",
                    answers: ["is going to", "will surely", "was going to", "has already"], correct: 0,
                    explanation: "Man sieht das Anzeichen jetzt schon – also going to." },
                { id: "futuk7l1u_mittel_4", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "mittel", points: 10,
                    question: "Welche Wörter stehen oft zusammen mit dem will-future?",
                    answers: ["I think, I hope, probably", "already, just, since", "every day, usually", "yesterday, last week"], correct: 0,
                    explanation: "Vermutungen werden mit will ausgedrückt: I think it will be sunny." }
            ],
            schwer: [
                { id: "futuk7l1u_schwer_1", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'I think our team ___ win the match.'",
                    answers: ["will", "is going to be", "was going to", "has going to"], correct: 0,
                    explanation: "Nach 'I think' steht eine Vermutung – dafür nimmt man will." },
                { id: "futuk7l1u_schwer_2", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'She has bought paint. She ___ paint her room.'",
                    answers: ["is going to", "will probably", "was going to", "has already"], correct: 0,
                    explanation: "Die Farbe ist schon gekauft – die Absicht steht fest, also going to." },
                { id: "futuk7l1u_schwer_3", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'This bag is heavy. – Don't worry, I ___ help you.'",
                    answers: ["will", "am going to", "was going to", "have been"], correct: 0,
                    explanation: "Ein spontanes Angebot in diesem Moment – also will." },
                { id: "futuk7l1u_schwer_4", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "schwer", points: 10,
                    question: "Was ist der Unterschied zwischen will und going to?",
                    answers: ["Spontan gegen schon geplant", "Gegenwart gegen Vergangenheit", "Frage gegen Aussagesatz", "Höflich gegen unhöflich"], correct: 0,
                    explanation: "will = Entscheidung im Moment, going to = Absicht oder Anzeichen, die schon vorher da waren." }
            ]
        },
        test: [
            { id: "futuk7l1_test_1", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "leicht", points: 10,
                question: "Ergänze: 'I ___ have a sandwich, please.' (spontane Bestellung)",
                answers: ["will", "am going to", "was going to", "have been"], correct: 0,
                explanation: "Die Entscheidung fällt gerade jetzt – also will." },
            { id: "futuk7l1_test_2", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "mittel", points: 10,
                question: "Ergänze: 'They ___ move to Berlin next year. They found a flat.'",
                answers: ["are going to", "will maybe", "were going to", "have already"], correct: 0,
                explanation: "Der Umzug ist geplant, die Wohnung ist schon gefunden – also going to." },
            { id: "futuk7l1_test_3", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "mittel", points: 10,
                question: "Ergänze: 'Careful! You ___ drop the glass.'",
                answers: ["are going to", "will surely", "were going to", "have already"], correct: 0,
                explanation: "Man sieht es gerade kommen – ein Anzeichen in der Gegenwart, also going to." },
            { id: "futuk7l1_test_4", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "mittel", points: 10,
                question: "Welche Form gehört zu einer Vorhersage mit 'I hope'?",
                answers: ["will", "going to", "did", "have"], correct: 0,
                explanation: "Nach hope, think oder believe steht eine Vermutung mit will." },
            { id: "futuk7l1_test_5", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "schwer", points: 10,
                question: "Ergänze: 'We have tickets. We ___ see the concert tonight.'",
                answers: ["are going to", "will perhaps", "were going to", "have never"], correct: 0,
                explanation: "Die Tickets sind da, der Plan steht – also going to." },
            { id: "futuk7l1_test_6", category: "kurs_futu_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "future", difficulty: "schwer", points: 10,
                question: "Welcher Satz ist richtig gebildet?",
                answers: ["She will call you later.", "She will calls you later.", "She will to call you.", "She is will call you."], correct: 0,
                explanation: "Nach will steht immer die Grundform ohne to und ohne -s." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "pfpa_k7_l1",
        kurs: "perfect_past_k7",
        order: 1,
        icon: "⏱️",
        title: "Present Perfect oder Simple Past?",
        kurz: "Zeitpunkt genannt oder nicht – daran entscheidet es sich",
        erklaerung: {
            intro: "Beide Zeiten beschreiben Vergangenes. Entscheidend ist: Wird ein <b>bestimmter Zeitpunkt</b> genannt? Dann steht das <b>Simple Past</b>. Zählt nur, <b>dass</b> etwas passiert ist – ohne genauen Zeitpunkt – steht das <b>Present Perfect</b>.",
            beispiele: [
                "📅 Zeitpunkt genannt: I <b>visited</b> London <b>last year</b>. (Simple Past)",
                "❓ Kein Zeitpunkt: I <b>have visited</b> London. (irgendwann – Present Perfect)",
                "🔑 Simple Past: yesterday, last week, in 2020, two days ago, when I was six",
                "🔑 Present Perfect: already, just, yet, ever, never, since, for, so far"
            ],
            merksatz: "Steht ein abgeschlossener Zeitpunkt im Satz (yesterday, last week, ago), nimm das Simple Past. Geht es um Erfahrung oder um etwas, das bis jetzt reicht, nimm das Present Perfect."
        },
        uebung: {
            leicht: [
                { id: "pfpak7l1u_leicht_1", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "leicht", points: 10,
                    question: "Welches Signalwort gehört zum Simple Past?",
                    answers: ["yesterday", "already", "never", "since"], correct: 0,
                    explanation: "'yesterday' nennt einen abgeschlossenen Zeitpunkt – Simple Past." },
                { id: "pfpak7l1u_leicht_2", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "leicht", points: 10,
                    question: "Welches Signalwort gehört zum Present Perfect?",
                    answers: ["already", "yesterday", "last week", "two days ago"], correct: 0,
                    explanation: "'already' nennt keinen genauen Zeitpunkt – Present Perfect." },
                { id: "pfpak7l1u_leicht_3", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'I ___ my homework yesterday.'",
                    answers: ["did", "have done", "has done", "am doing"], correct: 0,
                    explanation: "'yesterday' verlangt das Simple Past: I did my homework." },
                { id: "pfpak7l1u_leicht_4", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'I ___ my homework already.'",
                    answers: ["have done", "did do", "was doing", "am doing"], correct: 0,
                    explanation: "'already' verlangt das Present Perfect: I have done my homework." }
            ],
            mittel: [
                { id: "pfpak7l1u_mittel_1", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'She ___ to Spain in 2022.'",
                    answers: ["went", "has gone", "has been", "is going"], correct: 0,
                    explanation: "Die Jahreszahl nennt einen Zeitpunkt – Simple Past: she went." },
                { id: "pfpak7l1u_mittel_2", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'We ___ here since 2019.'",
                    answers: ["have lived", "lived here", "were living", "are living"], correct: 0,
                    explanation: "'since' zeigt: Es reicht bis jetzt – Present Perfect." },
                { id: "pfpak7l1u_mittel_3", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Have you ever ___ sushi?'",
                    answers: ["eaten", "ate", "eating", "eats"], correct: 0,
                    explanation: "Nach have/has steht das Partizip Perfekt: eaten." },
                { id: "pfpak7l1u_mittel_4", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "mittel", points: 10,
                    question: "Woran erkennt man, dass Simple Past nötig ist?",
                    answers: ["Ein Zeitpunkt wird genannt", "Ein Ort wird genannt", "Die Person ist unbekannt", "Der Satz ist eine Frage"], correct: 0,
                    explanation: "Sobald ein abgeschlossener Zeitpunkt im Satz steht, nimmt man Simple Past." }
            ],
            schwer: [
                { id: "pfpak7l1u_schwer_1", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'I ___ my keys. I can't open the door.'",
                    answers: ["have lost", "lost them", "was losing", "am losing"], correct: 0,
                    explanation: "Das Ergebnis zählt jetzt gerade – Present Perfect: I have lost my keys." },
                { id: "pfpak7l1u_schwer_2", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'He ___ his leg two weeks ago.'",
                    answers: ["broke", "has broken", "has break", "is breaking"], correct: 0,
                    explanation: "'ago' nennt einen Zeitpunkt – Simple Past: he broke his leg." },
                { id: "pfpak7l1u_schwer_3", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["I have seen that film.", "I have seen that film yesterday.", "I did seen that film.", "I have saw that film."], correct: 0,
                    explanation: "Present Perfect verträgt kein 'yesterday' – ohne Zeitangabe ist der Satz richtig." },
                { id: "pfpak7l1u_schwer_4", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'They ___ each other for ten years.'",
                    answers: ["have known", "knew each", "were knowing", "are knowing"], correct: 0,
                    explanation: "'for ten years' reicht bis in die Gegenwart – Present Perfect." }
            ]
        },
        test: [
            { id: "pfpak7l1_test_1", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "leicht", points: 10,
                question: "Ergänze: 'We ___ a great film last night.'",
                answers: ["watched", "have watched", "has watched", "are watching"], correct: 0,
                explanation: "'last night' nennt einen Zeitpunkt – Simple Past." },
            { id: "pfpak7l1_test_2", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "mittel", points: 10,
                question: "Ergänze: 'She ___ never been to Paris.'",
                answers: ["has", "did", "was", "is"], correct: 0,
                explanation: "'never' gehört zum Present Perfect: she has never been." },
            { id: "pfpak7l1_test_3", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "mittel", points: 10,
                question: "Welches Signalwort passt NICHT zum Present Perfect?",
                answers: ["last week", "just now", "so far", "ever"], correct: 0,
                explanation: "'last week' ist ein abgeschlossener Zeitraum – das verlangt Simple Past." },
            { id: "pfpak7l1_test_4", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "mittel", points: 10,
                question: "Ergänze: 'When ___ you arrive?'",
                answers: ["did", "have", "has", "are"], correct: 0,
                explanation: "Fragen mit 'When' zielen auf einen Zeitpunkt – Simple Past mit did." },
            { id: "pfpak7l1_test_5", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "schwer", points: 10,
                question: "Ergänze: 'I ___ this book three times so far.'",
                answers: ["have read", "read it", "was reading", "am reading"], correct: 0,
                explanation: "'so far' bedeutet bis jetzt – Present Perfect." },
            { id: "pfpak7l1_test_6", category: "kurs_pfpa_k7_l1", area: "schule", grade: 7, subject: "englisch", topic: "perfect_past", difficulty: "schwer", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["He moved here in 2020.", "He has moved here in 2020.", "He has move here in 2020.", "He did moved here in 2020."], correct: 0,
                explanation: "Mit einer Jahreszahl steht das Simple Past: He moved here in 2020." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "teil_k5_l1",
        kurs: "teiler_vielfache_k5",
        order: 1,
        icon: "🔢",
        title: "Teiler, Vielfache und Teilbarkeitsregeln",
        kurz: "Wer teilt ohne Rest – und wie man es schnell sieht",
        erklaerung: {
            intro: "Ein <b>Teiler</b> einer Zahl teilt diese ohne Rest. Ein <b>Vielfaches</b> entsteht, wenn man eine Zahl mit 1, 2, 3, … multipliziert. Mit <b>Teilbarkeitsregeln</b> sieht man ohne Rechnen, ob eine Zahl teilbar ist.",
            beispiele: [
                "➗ Teiler von 12: <b>1, 2, 3, 4, 6, 12</b> – jede dieser Zahlen teilt 12 ohne Rest.",
                "✖️ Vielfache von 5: 5, 10, 15, 20, 25 … – immer 5 mal eine natürliche Zahl.",
                "2️⃣ Durch 2 teilbar: letzte Ziffer ist 0, 2, 4, 6 oder 8. Durch <b>5</b>: Endziffer 0 oder 5. Durch <b>10</b>: Endziffer 0.",
                "3️⃣ Durch 3 teilbar: die <b>Quersumme</b> ist durch 3 teilbar (234 → 2+3+4 = 9 → ja). Durch 9: Quersumme durch 9."
            ],
            merksatz: "Teiler teilen ohne Rest, Vielfache entstehen durch Malnehmen. 1 und die Zahl selbst sind immer Teiler. Für 3 und 9 hilft die Quersumme, für 2, 5 und 10 die letzte Ziffer."
        },
        uebung: {
            leicht: [
                { id: "teilk5l1u_leicht_1", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist ein Teiler von 12?",
                    answers: ["4", "5", "7", "8"], correct: 0,
                    explanation: "12 ÷ 4 = 3 ohne Rest – also ist 4 ein Teiler von 12." },
                { id: "teilk5l1u_leicht_2", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "leicht", points: 10,
                    question: "Woran erkennt man, dass eine Zahl durch 2 teilbar ist?",
                    answers: ["Die letzte Ziffer ist gerade", "Die erste Ziffer ist gerade", "Die Quersumme ist gerade", "Die Zahl hat zwei Ziffern"], correct: 0,
                    explanation: "Endet die Zahl auf 0, 2, 4, 6 oder 8, ist sie durch 2 teilbar." },
                { id: "teilk5l1u_leicht_3", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist ein Vielfaches von 5?",
                    answers: ["35", "32", "27", "41"], correct: 0,
                    explanation: "35 = 5 · 7 – also ein Vielfaches von 5." },
                { id: "teilk5l1u_leicht_4", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "leicht", points: 10,
                    question: "Welche zwei Teiler hat jede Zahl auf jeden Fall?",
                    answers: ["1 und die Zahl selbst", "2 und die Hälfte davon", "0 und die Zahl selbst", "1 und die nächste Zahl"], correct: 0,
                    explanation: "Jede Zahl ist durch 1 und durch sich selbst ohne Rest teilbar." }
            ],
            mittel: [
                { id: "teilk5l1u_mittel_1", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist KEIN Teiler von 18?",
                    answers: ["4", "3", "6", "9"], correct: 0,
                    explanation: "Teiler von 18 sind 1, 2, 3, 6, 9 und 18. 18 ÷ 4 geht nicht ohne Rest." },
                { id: "teilk5l1u_mittel_2", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "mittel", points: 10,
                    question: "Ist 234 durch 3 teilbar?",
                    answers: ["Ja, die Quersumme ist 9", "Nein, die Zahl ist zu groß", "Nein, sie endet auf eine 4", "Ja, sie ist eine gerade Zahl"], correct: 0,
                    explanation: "2 + 3 + 4 = 9, und 9 ist durch 3 teilbar – also ist 234 durch 3 teilbar." },
                { id: "teilk5l1u_mittel_3", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "mittel", points: 10,
                    question: "Woran erkennt man Teilbarkeit durch 5?",
                    answers: ["Endziffer ist 0 oder 5", "Endziffer ist 5 oder 6", "Quersumme ist durch 5 teilbar", "Die Zahl hat fünf Ziffern"], correct: 0,
                    explanation: "Nur Zahlen mit der Endziffer 0 oder 5 sind durch 5 teilbar." },
                { id: "teilk5l1u_mittel_4", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "mittel", points: 10,
                    question: "Was ist das kleinste gemeinsame Vielfache von 4 und 6?",
                    answers: ["12", "24", "10", "18"], correct: 0,
                    explanation: "Vielfache von 4: 4, 8, 12 … Vielfache von 6: 6, 12 … Das kleinste gemeinsame ist 12." }
            ],
            schwer: [
                { id: "teilk5l1u_schwer_1", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "schwer", points: 10,
                    question: "Ist 4572 durch 4 teilbar?",
                    answers: ["Ja, denn 72 ist durch 4 teilbar", "Nein, denn die Zahl ist ungerade", "Nein, die Quersumme passt nicht", "Ja, denn sie endet auf eine 2"], correct: 0,
                    explanation: "Für die 4 zählen die letzten beiden Ziffern: 72 ÷ 4 = 18 – also ja." },
                { id: "teilk5l1u_schwer_2", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "schwer", points: 10,
                    question: "Ist 837 durch 9 teilbar?",
                    answers: ["Ja, die Quersumme ist 18", "Nein, sie endet auf eine 7", "Nein, sie ist eine ungerade Zahl", "Ja, sie ist auch durch 2 teilbar"], correct: 0,
                    explanation: "8 + 3 + 7 = 18, und 18 ist durch 9 teilbar – also ist 837 durch 9 teilbar." },
                { id: "teilk5l1u_schwer_3", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "schwer", points: 10,
                    question: "Welche Zahl hat genau die Teiler 1, 2, 4, 8 und 16?",
                    answers: ["16", "24", "18", "32"], correct: 0,
                    explanation: "Nur 16 hat genau diese fünf Teiler – 32 hätte zusätzlich die 32." },
                { id: "teilk5l1u_schwer_4", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "schwer", points: 10,
                    question: "Was ist der größte gemeinsame Teiler von 12 und 18?",
                    answers: ["6", "3", "9", "12"], correct: 0,
                    explanation: "Gemeinsame Teiler sind 1, 2, 3 und 6 – der größte davon ist 6." }
            ]
        },
        test: [
            { id: "teilk5l1_test_1", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "leicht", points: 10,
                question: "Welche Zahl ist ein Teiler von 20?",
                answers: ["4", "6", "7", "9"], correct: 0,
                explanation: "20 ÷ 4 = 5 ohne Rest – also ist 4 ein Teiler von 20." },
            { id: "teilk5l1_test_2", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "leicht", points: 10,
                question: "Welche Zahl ist ein Vielfaches von 7?",
                answers: ["28", "24", "32", "45"], correct: 0,
                explanation: "28 = 7 · 4 – also ein Vielfaches von 7." },
            { id: "teilk5l1_test_3", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "mittel", points: 10,
                question: "Woran erkennt man Teilbarkeit durch 10?",
                answers: ["Die Zahl endet auf 0", "Die Zahl endet auf 5", "Die Quersumme ist 10", "Die Zahl ist gerade"], correct: 0,
                explanation: "Nur Zahlen mit der Endziffer 0 sind durch 10 teilbar." },
            { id: "teilk5l1_test_4", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "mittel", points: 10,
                question: "Welche Regel gilt für die Teilbarkeit durch 3?",
                answers: ["Die Quersumme ist durch 3 teilbar", "Die letzte Ziffer ist durch 3 teilbar", "Die erste Ziffer muss eine 3 sein", "Die Zahl muss ungerade sein"], correct: 0,
                explanation: "Man addiert alle Ziffern – ist diese Quersumme durch 3 teilbar, ist es die Zahl auch." },
            { id: "teilk5l1_test_5", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "schwer", points: 10,
                question: "Was ist das kleinste gemeinsame Vielfache von 3 und 5?",
                answers: ["15", "8", "30", "10"], correct: 0,
                explanation: "3, 6, 9, 12, 15 … und 5, 10, 15 … – das kleinste gemeinsame Vielfache ist 15." },
            { id: "teilk5l1_test_6", category: "kurs_teil_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "teiler", difficulty: "schwer", points: 10,
                question: "Was ist der größte gemeinsame Teiler von 8 und 12?",
                answers: ["4", "2", "6", "8"], correct: 0,
                explanation: "Gemeinsame Teiler sind 1, 2 und 4 – der größte davon ist 4." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "teil_k5_l2",
        kurs: "teiler_vielfache_k5",
        order: 2,
        icon: "🧿",
        title: "Primzahlen und Primfaktoren",
        kurz: "Zahlen mit genau zwei Teilern",
        erklaerung: {
            intro: "Eine <b>Primzahl</b> hat genau <b>zwei</b> Teiler: die 1 und sich selbst. Jede andere Zahl lässt sich als Produkt von Primzahlen schreiben – das nennt man <b>Primfaktorzerlegung</b>.",
            beispiele: [
                "🧿 Primzahlen bis 20: <b>2, 3, 5, 7, 11, 13, 17, 19</b>.",
                "2️⃣ Die <b>2</b> ist die einzige gerade Primzahl – alle anderen geraden Zahlen sind durch 2 teilbar.",
                "🚫 Die <b>1</b> ist keine Primzahl, denn sie hat nur einen einzigen Teiler.",
                "🔗 Primfaktorzerlegung: 12 = <b>2 · 2 · 3</b> und 30 = <b>2 · 3 · 5</b>."
            ],
            merksatz: "Primzahl = genau zwei Teiler (1 und sie selbst). Die 1 ist keine Primzahl, die 2 ist die einzige gerade. Zum Zerlegen immer mit der kleinsten Primzahl beginnen: erst 2, dann 3, dann 5."
        },
        uebung: {
            leicht: [
                { id: "teilk5l2u_leicht_1", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "leicht", points: 10,
                    question: "Was ist eine Primzahl?",
                    answers: ["Eine Zahl mit genau zwei Teilern", "Eine Zahl mit besonders vielen Teilern", "Jede ungerade Zahl über eins", "Jede Zahl aus dem Einmaleins"], correct: 0,
                    explanation: "Eine Primzahl hat genau zwei Teiler: die 1 und sich selbst." },
                { id: "teilk5l2u_leicht_2", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "leicht", points: 10,
                    question: "Ist 7 eine Primzahl?",
                    answers: ["Ja, nur 1 und 7 teilen sie", "Nein, sie ist eine ungerade Zahl", "Nein, sie ist dafür zu klein", "Ja, weil sie ungerade ist"], correct: 0,
                    explanation: "7 lässt sich nur durch 1 und 7 ohne Rest teilen – also eine Primzahl." },
                { id: "teilk5l2u_leicht_3", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist KEINE Primzahl?",
                    answers: ["9", "5", "7", "11"], correct: 0,
                    explanation: "9 = 3 · 3, hat also auch die 3 als Teiler." },
                { id: "teilk5l2u_leicht_4", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "leicht", points: 10,
                    question: "Ist die 1 eine Primzahl?",
                    answers: ["Nein, sie hat nur einen Teiler", "Ja, sie ist die erste Primzahl", "Ja, sie teilt wirklich jede Zahl", "Nein, sie ist dafür zu klein"], correct: 0,
                    explanation: "Eine Primzahl braucht genau zwei Teiler – die 1 hat nur einen." }
            ],
            mittel: [
                { id: "teilk5l2u_mittel_1", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "mittel", points: 10,
                    question: "Welche ist die einzige gerade Primzahl?",
                    answers: ["2", "4", "6", "8"], correct: 0,
                    explanation: "Alle anderen geraden Zahlen haben die 2 als zusätzlichen Teiler." },
                { id: "teilk5l2u_mittel_2", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "mittel", points: 10,
                    question: "Welche dieser Zahlen ist eine Primzahl?",
                    answers: ["13", "15", "21", "27"], correct: 0,
                    explanation: "15 = 3 · 5, 21 = 3 · 7, 27 = 3 · 9 – nur 13 hat genau zwei Teiler." },
                { id: "teilk5l2u_mittel_3", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "mittel", points: 10,
                    question: "Wie lautet die Primfaktorzerlegung von 12?",
                    answers: ["2 · 2 · 3", "2 · 6", "3 · 4", "1 · 12"], correct: 0,
                    explanation: "12 = 2 · 6 = 2 · 2 · 3 – im Ergebnis dürfen nur Primzahlen stehen." },
                { id: "teilk5l2u_mittel_4", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "mittel", points: 10,
                    question: "Wie viele Primzahlen gibt es unter 10?",
                    answers: ["Vier", "Drei", "Fünf", "Sechs"], correct: 0,
                    explanation: "2, 3, 5 und 7 – das sind vier Primzahlen." }
            ],
            schwer: [
                { id: "teilk5l2u_schwer_1", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "schwer", points: 10,
                    question: "Wie lautet die Primfaktorzerlegung von 30?",
                    answers: ["2 · 3 · 5", "5 · 6", "2 · 15", "3 · 10"], correct: 0,
                    explanation: "30 = 2 · 15 = 2 · 3 · 5 – alle Faktoren sind Primzahlen." },
                { id: "teilk5l2u_schwer_2", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "schwer", points: 10,
                    question: "Ist 51 eine Primzahl?",
                    answers: ["Nein, denn 51 = 3 · 17", "Ja, nur 1 und 51 teilen sie", "Nein, denn sie ist gerade", "Ja, sie endet auf eine 1"], correct: 0,
                    explanation: "Die Quersumme 6 ist durch 3 teilbar: 51 = 3 · 17 – also keine Primzahl." },
                { id: "teilk5l2u_schwer_3", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "schwer", points: 10,
                    question: "Wie lautet die Primfaktorzerlegung von 24?",
                    answers: ["2 · 2 · 2 · 3", "2 · 2 · 6", "4 · 6", "3 · 8"], correct: 0,
                    explanation: "24 = 2 · 12 = 2 · 2 · 6 = 2 · 2 · 2 · 3." },
                { id: "teilk5l2u_schwer_4", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "schwer", points: 10,
                    question: "Wie viele Primzahlen liegen zwischen 10 und 20?",
                    answers: ["Vier", "Drei", "Fünf", "Zwei"], correct: 0,
                    explanation: "11, 13, 17 und 19 – das sind vier Primzahlen." }
            ]
        },
        test: [
            { id: "teilk5l2_test_1", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "leicht", points: 10,
                question: "Wie viele Teiler hat eine Primzahl?",
                answers: ["Genau zwei", "Genau einen", "Genau drei", "Beliebig viele"], correct: 0,
                explanation: "Genau zwei: die 1 und die Zahl selbst." },
            { id: "teilk5l2_test_2", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "leicht", points: 10,
                question: "Ist 17 eine Primzahl?",
                answers: ["Ja, nur 1 und 17 teilen sie", "Nein, denn 17 = 3 · 6", "Nein, sie ist eine gerade Zahl", "Ja, denn sie ist über zehn"], correct: 0,
                explanation: "17 lässt sich nur durch 1 und 17 teilen – also eine Primzahl." },
            { id: "teilk5l2_test_3", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "mittel", points: 10,
                question: "Welche Zahl ist KEINE Primzahl?",
                answers: ["25", "23", "19", "29"], correct: 0,
                explanation: "25 = 5 · 5 – die 5 ist ein zusätzlicher Teiler." },
            { id: "teilk5l2_test_4", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "mittel", points: 10,
                question: "Wie lautet die Primfaktorzerlegung von 18?",
                answers: ["2 · 3 · 3", "2 · 9", "3 · 6", "1 · 18"], correct: 0,
                explanation: "18 = 2 · 9 = 2 · 3 · 3." },
            { id: "teilk5l2_test_5", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "schwer", points: 10,
                question: "Warum ist die 1 keine Primzahl?",
                answers: ["Sie hat nur einen Teiler", "Sie ist eine ungerade Zahl", "Sie ist zu klein zum Teilen", "Sie teilt wirklich jede Zahl"], correct: 0,
                explanation: "Für eine Primzahl braucht es genau zwei verschiedene Teiler." },
            { id: "teilk5l2_test_6", category: "kurs_teil_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "primzahlen", difficulty: "schwer", points: 10,
                question: "Mit welcher Primzahl beginnt man beim Zerlegen am besten?",
                answers: ["Mit der 2", "Mit der 3", "Mit der 5", "Mit der 7"], correct: 0,
                explanation: "Man probiert die kleinste Primzahl zuerst: erst 2, dann 3, dann 5." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "dsds_k6_l1",
        kurs: "das_dass_k6",
        order: 1,
        icon: "✏️",
        title: "das oder dass?",
        kurz: "Die Ersatzprobe entscheidet",
        erklaerung: {
            intro: "<b>das</b> mit einem s ist ein Artikel oder ein Pronomen. Man kann es durch <b>dieses</b>, <b>jenes</b> oder <b>welches</b> ersetzen. <b>dass</b> mit zwei s ist eine Konjunktion und leitet einen Nebensatz ein – es lässt sich nicht ersetzen.",
            beispiele: [
                "📦 Artikel: <b>Das</b> Haus ist groß. (Dieses Haus ist groß.)",
                "👉 Pronomen: <b>Das</b> finde ich toll. (Dieses finde ich toll.)",
                "🔗 Relativpronomen: Das Buch, <b>das</b> ich lese, ist spannend. (…, welches ich lese …)",
                "🧩 Konjunktion: Ich hoffe, <b>dass</b> du kommst. (Ersatzprobe geht nicht → zwei s)"
            ],
            merksatz: "Ersatzprobe: Passt dieses, jenes oder welches an die Stelle? Dann das mit einem s. Passt keines davon und beginnt ein Nebensatz, dann dass mit zwei s."
        },
        uebung: {
            leicht: [
                { id: "dsdsk6l1u_leicht_1", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Durch welche Wörter kann man 'das' zur Probe ersetzen?",
                    answers: ["dieses, jenes, welches", "damit, dabei, danach", "denn, weil, obwohl", "dann, dort, dazu"], correct: 0,
                    explanation: "Nur wenn dieses, jenes oder welches passt, schreibt man das mit einem s." },
                { id: "dsdsk6l1u_leicht_2", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wann schreibt man 'dass' mit zwei s?",
                    answers: ["Wenn es einen Nebensatz einleitet", "Wenn es vor einem Nomen steht", "Wenn es am Satzanfang steht", "Wenn ein Komma davor steht"], correct: 0,
                    explanation: "'dass' ist eine Konjunktion und leitet einen Nebensatz ein." },
                { id: "dsdsk6l1u_leicht_3", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "In welchem Satz ist 'dass' richtig geschrieben?",
                    answers: ["Ich hoffe, dass du kommst.", "Dass Haus ist sehr groß.", "Ich mag dass rote Auto.", "Dass Buch liegt hier."], correct: 0,
                    explanation: "Nur im ersten Satz leitet dass einen Nebensatz ein – sonst wäre es der Artikel das." },
                { id: "dsdsk6l1u_leicht_4", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Welche Wortart ist 'das' in 'Das Haus ist groß.'?",
                    answers: ["Artikel", "Konjunktion", "Verb", "Adverb"], correct: 0,
                    explanation: "Vor einem Nomen steht 'das' als Artikel – geschrieben mit einem s." }
            ],
            mittel: [
                { id: "dsdsk6l1u_mittel_1", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "In welchem Satz ist 'das' richtig geschrieben?",
                    answers: ["Das Buch, das ich lese.", "Ich hoffe, das du kommst.", "Er sagt, das er müde ist.", "Schade, das es regnet."], correct: 0,
                    explanation: "'das ich lese' ist ein Relativpronomen (welches ich lese) – die anderen brauchen dass." },
                { id: "dsdsk6l1u_mittel_2", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man richtig? 'Er sagt, ___ er müde ist.'",
                    answers: ["dass", "das", "daß", "dases"], correct: 0,
                    explanation: "Hier beginnt ein Nebensatz und die Ersatzprobe geht nicht – also dass." },
                { id: "dsdsk6l1u_mittel_3", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man richtig? '___ finde ich toll.'",
                    answers: ["Das", "Dass", "Daß", "Dasses"], correct: 0,
                    explanation: "Man kann 'Dieses finde ich toll' sagen – also das mit einem s." },
                { id: "dsdsk6l1u_mittel_4", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welche Wortart ist 'das' in 'Das Kind, das dort spielt.'?",
                    answers: ["Relativpronomen", "Konjunktion", "Präposition", "Adverb"], correct: 0,
                    explanation: "Es bezieht sich auf das Nomen Kind und lässt sich durch 'welches' ersetzen." }
            ],
            schwer: [
                { id: "dsdsk6l1u_schwer_1", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Wie schreibt man richtig? 'Ich weiß, ___ ___ Wetter schlecht wird.'",
                    answers: ["dass das", "das dass", "dass dass", "das das"], correct: 0,
                    explanation: "Zuerst die Konjunktion dass, dann der Artikel das vor dem Nomen Wetter." },
                { id: "dsdsk6l1u_schwer_2", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "In welchem Satz steckt ein Fehler?",
                    answers: ["Ich glaube, das es klappt.", "Ich glaube, dass es klappt.", "Das Auto dort ist neu.", "Das Bild, das dort hängt."], correct: 0,
                    explanation: "Nach 'Ich glaube,' beginnt ein Nebensatz – dort muss dass mit zwei s stehen." },
                { id: "dsdsk6l1u_schwer_3", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Wie schreibt man richtig? 'Es ist schade, ___ es regnet.'",
                    answers: ["dass", "das", "daß", "dases"], correct: 0,
                    explanation: "Nebensatz nach dem Komma, Ersatzprobe geht nicht – also dass." },
                { id: "dsdsk6l1u_schwer_4", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Warum steht in 'Das Pferd, das galoppiert' zweimal ein s-Wort mit einem s?",
                    answers: ["Artikel und Relativpronomen", "Zweimal dieselbe Konjunktion", "Artikel und eine Konjunktion", "Zweimal ein reines Zufallswort"], correct: 0,
                    explanation: "Das erste 'Das' ist der Artikel, das zweite ein Relativpronomen (welches galoppiert)." }
            ]
        },
        test: [
            { id: "dsdsk6l1_test_1", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                question: "Wie schreibt man richtig? '___ Auto ist neu.'",
                answers: ["Das", "Dass", "Daß", "Dasses"], correct: 0,
                explanation: "Vor dem Nomen Auto steht der Artikel das – mit einem s." },
            { id: "dsdsk6l1_test_2", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                question: "Wie schreibt man richtig? 'Ich glaube, ___ es klappt.'",
                answers: ["dass", "das", "daß", "dases"], correct: 0,
                explanation: "Nach dem Komma beginnt ein Nebensatz – also dass mit zwei s." },
            { id: "dsdsk6l1_test_3", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                question: "Welche Ersatzprobe zeigt, dass man 'das' schreibt?",
                answers: ["dieses passt an die Stelle", "deshalb passt an die Stelle", "damit passt an die Stelle", "denn passt an die Stelle"], correct: 0,
                explanation: "Passt dieses, jenes oder welches, schreibt man das mit einem s." },
            { id: "dsdsk6l1_test_4", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                question: "Wie schreibt man richtig? 'Das Bild, ___ dort hängt, ist alt.'",
                answers: ["das", "dass", "daß", "dases"], correct: 0,
                explanation: "'welches dort hängt' passt – also Relativpronomen das mit einem s." },
            { id: "dsdsk6l1_test_5", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                question: "In welchem Satz ist alles richtig geschrieben?",
                answers: ["Ich sehe, dass das klappt.", "Ich sehe, das dass klappt.", "Ich sehe, das das klappt.", "Ich sehe, dass dass klappt."], correct: 0,
                explanation: "Erst die Konjunktion dass, dann das Pronomen das (dieses klappt)." },
            { id: "dsdsk6l1_test_6", category: "kurs_dsds_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                question: "Welche Wörter leiten wie 'dass' einen Nebensatz ein?",
                answers: ["weil, obwohl, damit", "dieses, jenes, welches", "der, die, das", "sehr, ganz, kaum"], correct: 0,
                explanation: "'dass' gehört zu den unterordnenden Konjunktionen wie weil, obwohl und damit." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "fael_k5_l1",
        kurs: "vier_faelle_k5",
        order: 1,
        icon: "4️⃣",
        title: "Die vier Fälle",
        kurz: "Wer? Wessen? Wem? Wen oder was?",
        erklaerung: {
            intro: "Nomen können in vier <b>Fällen</b> stehen. Jeden Fall findet man mit einem eigenen Fragewort – so erkennt man, welche Rolle das Nomen im Satz spielt.",
            beispiele: [
                "1️⃣ <b>Nominativ</b> – Wer oder was? <i>Der Hund</i> bellt laut.",
                "2️⃣ <b>Genitiv</b> – Wessen? Das ist das Halsband <i>des Hundes</i>.",
                "3️⃣ <b>Dativ</b> – Wem? Ich gebe <i>dem Hund</i> einen Knochen.",
                "4️⃣ <b>Akkusativ</b> – Wen oder was? Ich rufe <i>den Hund</i>."
            ],
            merksatz: "Nominativ = Wer oder was? (Subjekt) · Genitiv = Wessen? (Besitz) · Dativ = Wem? · Akkusativ = Wen oder was? Der Artikel verändert sich mit dem Fall: der, des, dem, den."
        },
        uebung: {
            leicht: [
                { id: "faelk5l1u_leicht_1", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "leicht", points: 10,
                    question: "Mit welchem Fragewort findet man den Nominativ?",
                    answers: ["Wer oder was?", "Wen oder was?", "Wessen?", "Wem?"], correct: 0,
                    explanation: "Der Nominativ ist der Fall des Subjekts: Wer oder was tut etwas?" },
                { id: "faelk5l1u_leicht_2", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "leicht", points: 10,
                    question: "Mit welchem Fragewort findet man den Dativ?",
                    answers: ["Wem?", "Wer?", "Wessen?", "Wen?"], correct: 0,
                    explanation: "Der Dativ antwortet auf die Frage 'Wem?'." },
                { id: "faelk5l1u_leicht_3", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "leicht", points: 10,
                    question: "In welchem Fall steht 'Der Hund'? 'Der Hund bellt laut.'",
                    answers: ["Nominativ", "Genitiv", "Dativ", "Akkusativ"], correct: 0,
                    explanation: "Wer bellt? – Der Hund. Das ist der Nominativ." },
                { id: "faelk5l1u_leicht_4", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "leicht", points: 10,
                    question: "Wie viele Fälle gibt es im Deutschen?",
                    answers: ["Vier", "Drei", "Fünf", "Sechs"], correct: 0,
                    explanation: "Nominativ, Genitiv, Dativ und Akkusativ – vier Fälle." }
            ],
            mittel: [
                { id: "faelk5l1u_mittel_1", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "mittel", points: 10,
                    question: "Mit welchem Fragewort findet man den Genitiv?",
                    answers: ["Wessen?", "Wem?", "Wen?", "Womit?"], correct: 0,
                    explanation: "Der Genitiv zeigt den Besitz und antwortet auf 'Wessen?'." },
                { id: "faelk5l1u_mittel_2", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "mittel", points: 10,
                    question: "In welchem Fall steht 'dem Kind'? 'Ich gebe dem Kind ein Buch.'",
                    answers: ["Dativ", "Nominativ", "Genitiv", "Akkusativ"], correct: 0,
                    explanation: "Wem gebe ich ein Buch? – dem Kind. Das ist der Dativ." },
                { id: "faelk5l1u_mittel_3", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "mittel", points: 10,
                    question: "In welchem Fall steht 'den Mann'? 'Ich sehe den Mann.'",
                    answers: ["Akkusativ", "Nominativ", "Genitiv", "Dativ"], correct: 0,
                    explanation: "Wen sehe ich? – den Mann. Das ist der Akkusativ." },
                { id: "faelk5l1u_mittel_4", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "mittel", points: 10,
                    question: "In welchem Fall steht 'des Vaters'? 'Das ist das Auto des Vaters.'",
                    answers: ["Genitiv", "Dativ", "Nominativ", "Akkusativ"], correct: 0,
                    explanation: "Wessen Auto ist das? – des Vaters. Das ist der Genitiv." }
            ],
            schwer: [
                { id: "faelk5l1u_schwer_1", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "schwer", points: 10,
                    question: "In welchem Fall steht 'ihrer Freundin'? 'Sie hilft ihrer Freundin.'",
                    answers: ["Dativ", "Akkusativ", "Genitiv", "Nominativ"], correct: 0,
                    explanation: "'helfen' verlangt den Dativ: Wem hilft sie? – ihrer Freundin." },
                { id: "faelk5l1u_schwer_2", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "schwer", points: 10,
                    question: "In welchem Fall steht 'unsere Oma'? 'Wir besuchen unsere Oma.'",
                    answers: ["Akkusativ", "Dativ", "Nominativ", "Genitiv"], correct: 0,
                    explanation: "Wen besuchen wir? – unsere Oma. Das ist der Akkusativ." },
                { id: "faelk5l1u_schwer_3", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "schwer", points: 10,
                    question: "Welchen Fall verlangt die Präposition 'wegen'?",
                    answers: ["Genitiv", "Dativ", "Akkusativ", "Nominativ"], correct: 0,
                    explanation: "'wegen' steht mit dem Genitiv: wegen des Regens." },
                { id: "faelk5l1u_schwer_4", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "schwer", points: 10,
                    question: "Wie heißt 'der Hund' im Akkusativ?",
                    answers: ["den Hund", "dem Hund", "des Hundes", "der Hund"], correct: 0,
                    explanation: "Im Akkusativ wird aus der ein den: Ich rufe den Hund." }
            ]
        },
        test: [
            { id: "faelk5l1_test_1", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "leicht", points: 10,
                question: "Mit welchem Fragewort findet man den Akkusativ?",
                answers: ["Wen oder was?", "Wer oder was?", "Wessen?", "Wem?"], correct: 0,
                explanation: "Der Akkusativ antwortet auf 'Wen oder was?'." },
            { id: "faelk5l1_test_2", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "leicht", points: 10,
                question: "In welchem Fall steht das Subjekt eines Satzes immer?",
                answers: ["Nominativ", "Genitiv", "Dativ", "Akkusativ"], correct: 0,
                explanation: "Das Subjekt steht immer im Nominativ." },
            { id: "faelk5l1_test_3", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "mittel", points: 10,
                question: "In welchem Fall steht 'der Frau'? 'Das ist der Hut der Frau.'",
                answers: ["Genitiv", "Dativ", "Nominativ", "Akkusativ"], correct: 0,
                explanation: "Wessen Hut ist das? – der Frau. Das ist der Genitiv." },
            { id: "faelk5l1_test_4", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "mittel", points: 10,
                question: "In welchem Fall steht 'meinem Bruder'? 'Ich schreibe meinem Bruder.'",
                answers: ["Dativ", "Akkusativ", "Genitiv", "Nominativ"], correct: 0,
                explanation: "Wem schreibe ich? – meinem Bruder. Das ist der Dativ." },
            { id: "faelk5l1_test_5", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "schwer", points: 10,
                question: "Wie heißt 'das Kind' im Genitiv?",
                answers: ["des Kindes", "dem Kind", "den Kind", "das Kind"], correct: 0,
                explanation: "Im Genitiv heißt es 'des Kindes' – oft mit angehängtem -es." },
            { id: "faelk5l1_test_6", category: "kurs_fael_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "faelle", difficulty: "schwer", points: 10,
                question: "In welchem Fall steht 'einen Apfel'? 'Er isst einen Apfel.'",
                answers: ["Akkusativ", "Dativ", "Nominativ", "Genitiv"], correct: 0,
                explanation: "Was isst er? – einen Apfel. Das ist der Akkusativ." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "behv_k5_l1",
        kurs: "be_havegot_k5",
        order: 1,
        icon: "🇬🇧",
        title: "to be und have got",
        kurz: "Sein und haben – die zwei wichtigsten Verben",
        erklaerung: {
            intro: "<b>to be</b> heißt sein: I <b>am</b>, you/we/they <b>are</b>, he/she/it <b>is</b>. <b>have got</b> heißt haben: I/you/we/they <b>have got</b>, he/she/it <b>has got</b>.",
            beispiele: [
                "🙋 I <b>am</b> from Germany. – She <b>is</b> ten. – They <b>are</b> my friends.",
                "✂️ Kurzformen: I'm, you're, he's, she's, it's, we're, they're.",
                "🚫 Verneinung: He <b>isn't</b> at home. We <b>aren't</b> ready. I <b>haven't got</b> a pen.",
                "❓ Fragen: <b>Are</b> you ready? – <b>Have</b> you got a pen? – <b>Has</b> she got a dog?"
            ],
            merksatz: "am nur bei I, is bei he/she/it, are bei you/we/they. Bei have got gilt dieselbe Aufteilung: has got nur bei he/she/it, sonst have got."
        },
        uebung: {
            leicht: [
                { id: "behvk5l1u_leicht_1", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "to_be", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'I ___ from Germany.'",
                    answers: ["am", "is", "are", "be"], correct: 0,
                    explanation: "Zu 'I' gehört immer 'am'." },
                { id: "behvk5l1u_leicht_2", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "to_be", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'She ___ ten years old.'",
                    answers: ["is", "am", "are", "be"], correct: 0,
                    explanation: "Zu he/she/it gehört 'is'." },
                { id: "behvk5l1u_leicht_3", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "to_be", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'They ___ my friends.'",
                    answers: ["are", "am", "is", "be"], correct: 0,
                    explanation: "Zu you, we und they gehört 'are'." },
                { id: "behvk5l1u_leicht_4", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "to_be", difficulty: "leicht", points: 10,
                    question: "Wie lautet die Kurzform von 'I am'?",
                    answers: ["I'm", "I're", "Im's", "I's"], correct: 0,
                    explanation: "Aus I am wird I'm – das a fällt weg." }
            ],
            mittel: [
                { id: "behvk5l1u_mittel_1", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "to_be", difficulty: "mittel", points: 10,
                    question: "Ergänze die Frage: '___ you ready?'",
                    answers: ["Are", "Am", "Is", "Do"], correct: 0,
                    explanation: "Zu 'you' gehört 'are' – in der Frage steht es vorne." },
                { id: "behvk5l1u_mittel_2", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "to_be", difficulty: "mittel", points: 10,
                    question: "Wie lautet die Kurzform von 'is not'?",
                    answers: ["isn't", "amn't", "aren't", "isnot"], correct: 0,
                    explanation: "Aus is not wird isn't." },
                { id: "behvk5l1u_mittel_3", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "have_got", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'I ___ got a new bike.'",
                    answers: ["have", "has", "am", "is"], correct: 0,
                    explanation: "Zu I, you, we und they gehört 'have got'." },
                { id: "behvk5l1u_mittel_4", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "have_got", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'She ___ got a cat.'",
                    answers: ["has", "have", "is", "are"], correct: 0,
                    explanation: "Zu he/she/it gehört 'has got'." }
            ],
            schwer: [
                { id: "behvk5l1u_schwer_1", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "have_got", difficulty: "schwer", points: 10,
                    question: "Ergänze die Frage: '___ you got a pen?'",
                    answers: ["Have", "Has", "Are", "Do"], correct: 0,
                    explanation: "Bei 'you' steht 'Have' am Satzanfang: Have you got a pen?" },
                { id: "behvk5l1u_schwer_2", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "have_got", difficulty: "schwer", points: 10,
                    question: "Ergänze die Verneinung: 'We ___ got a car.'",
                    answers: ["haven't", "hasn't", "aren't", "don't"], correct: 0,
                    explanation: "Zu 'we' gehört have got – verneint haven't got." },
                { id: "behvk5l1u_schwer_3", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "have_got", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'He ___ got two brothers.'",
                    answers: ["has", "have", "is", "are"], correct: 0,
                    explanation: "Bei he/she/it heißt es immer has got." },
                { id: "behvk5l1u_schwer_4", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "have_got", difficulty: "schwer", points: 10,
                    question: "Wofür benutzt man 'have got'?",
                    answers: ["Für Besitz und Eigenschaften", "Für Handlungen in der Zukunft", "Für Bewegungen und Wege", "Für Gefühle in der Vergangenheit"], correct: 0,
                    explanation: "have got sagt, was jemand hat oder besitzt: I have got a bike." }
            ]
        },
        test: [
            { id: "behvk5l1_test_1", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "to_be", difficulty: "leicht", points: 10,
                question: "Ergänze: 'We ___ in the garden.'",
                answers: ["are", "am", "is", "be"], correct: 0,
                explanation: "Zu 'we' gehört 'are'." },
            { id: "behvk5l1_test_2", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "to_be", difficulty: "leicht", points: 10,
                question: "Wie lautet die Kurzform von 'they are'?",
                answers: ["they're", "they'are", "theys're", "they'r"], correct: 0,
                explanation: "Aus they are wird they're." },
            { id: "behvk5l1_test_3", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "have_got", difficulty: "mittel", points: 10,
                question: "Ergänze die Frage: '___ she got a dog?'",
                answers: ["Has", "Have", "Is", "Does"], correct: 0,
                explanation: "Bei 'she' steht 'Has' am Satzanfang: Has she got a dog?" },
            { id: "behvk5l1_test_4", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "to_be", difficulty: "mittel", points: 10,
                question: "Ergänze: 'It ___ cold today.'",
                answers: ["is", "am", "are", "be"], correct: 0,
                explanation: "Zu 'it' gehört 'is'." },
            { id: "behvk5l1_test_5", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "have_got", difficulty: "schwer", points: 10,
                question: "Ergänze die Verneinung: 'I ___ got any money.'",
                answers: ["haven't", "hasn't", "aren't", "isn't"], correct: 0,
                explanation: "Zu 'I' gehört have got – verneint haven't got." },
            { id: "behvk5l1_test_6", category: "kurs_behv_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "have_got", difficulty: "schwer", points: 10,
                question: "Bei welchen Personen steht 'has got'?",
                answers: ["he, she, it", "I, you, we", "you und they", "we und they"], correct: 0,
                explanation: "Nur bei he, she und it heißt es has got – sonst have got." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "koer_k6_l1",
        kurs: "koerper_volumen_k6",
        order: 1,
        icon: "📦",
        title: "Körper erkennen und beschreiben",
        kurz: "Würfel, Quader, Zylinder & Co. – Ecken, Kanten, Flächen",
        erklaerung: {
            intro: "<b>Körper</b> sind räumliche Figuren – sie haben Länge, Breite und Höhe. Man beschreibt sie über ihre <b>Flächen</b>, <b>Kanten</b> und <b>Ecken</b>. Klappt man einen Körper auf, entsteht sein <b>Netz</b>.",
            beispiele: [
                "🎲 <b>Würfel</b>: 6 gleiche Quadrate, 12 Kanten, 8 Ecken – alle Kanten gleich lang.",
                "📦 <b>Quader</b>: 6 Rechtecke, 12 Kanten, 8 Ecken – gegenüberliegende Flächen sind gleich.",
                "🥫 <b>Zylinder</b>: zwei Kreisflächen und eine gebogene Mantelfläche, keine Ecken.",
                "⚽ <b>Kugel</b>: eine einzige gebogene Fläche, keine Kanten und keine Ecken."
            ],
            merksatz: "Würfel und Quader haben beide 6 Flächen, 12 Kanten und 8 Ecken – beim Würfel sind alle Flächen gleich große Quadrate. Runde Körper wie Kugel und Zylinder haben gebogene Flächen."
        },
        uebung: {
            leicht: [
                { id: "koerk6l1u_leicht_1", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "Wie viele Flächen hat ein Würfel?",
                    answers: ["6", "4", "8", "12"], correct: 0,
                    explanation: "Ein Würfel wird von 6 gleich großen Quadraten begrenzt." },
                { id: "koerk6l1u_leicht_2", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "Wie viele Ecken hat ein Quader?",
                    answers: ["8", "6", "12", "4"], correct: 0,
                    explanation: "Ein Quader hat 8 Ecken – wie ein Würfel." },
                { id: "koerk6l1u_leicht_3", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "Welcher Körper hat keine einzige Ecke?",
                    answers: ["Kugel", "Würfel", "Quader", "Pyramide"], correct: 0,
                    explanation: "Die Kugel hat nur eine gebogene Fläche – keine Ecken und keine Kanten." },
                { id: "koerk6l1u_leicht_4", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "Welche Form haben die Flächen eines Würfels?",
                    answers: ["Quadrate", "Rechtecke", "Dreiecke", "Kreise"], correct: 0,
                    explanation: "Beim Würfel sind alle 6 Flächen gleich große Quadrate." }
            ],
            mittel: [
                { id: "koerk6l1u_mittel_1", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Wie viele Kanten hat ein Quader?",
                    answers: ["12", "8", "6", "16"], correct: 0,
                    explanation: "Ein Quader hat 12 Kanten: je 4 in Länge, Breite und Höhe." },
                { id: "koerk6l1u_mittel_2", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Woraus besteht das Netz eines Zylinders?",
                    answers: ["Zwei Kreise und ein Rechteck", "Sechs gleich große Quadrate", "Vier Dreiecke und ein Kreis", "Zwei Rechtecke und ein Kreis"], correct: 0,
                    explanation: "Grund- und Deckfläche sind Kreise, die Mantelfläche wird aufgerollt zum Rechteck." },
                { id: "koerk6l1u_mittel_3", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Was ist ein Netz eines Körpers?",
                    answers: ["Der aufgeklappte Körper in der Ebene", "Die Summe aller Kanten des Körpers", "Der Rauminhalt eines Körpers", "Die längste Kante eines Körpers"], correct: 0,
                    explanation: "Klappt man alle Flächen flach auseinander, erhält man das Netz." },
                { id: "koerk6l1u_mittel_4", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Welcher Körper hat genau eine Spitze und eine quadratische Grundfläche?",
                    answers: ["Pyramide", "Kegel", "Zylinder", "Würfel"], correct: 0,
                    explanation: "Eine quadratische Pyramide hat eine quadratische Grundfläche und läuft in einer Spitze zusammen." }
            ],
            schwer: [
                { id: "koerk6l1u_schwer_1", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Wie viele Flächen eines Quaders sind jeweils gleich groß?",
                    answers: ["Je zwei gegenüberliegende", "Alle sechs sind gleich groß", "Je drei nebeneinander", "Nur die Grundfläche allein"], correct: 0,
                    explanation: "Gegenüberliegende Flächen eines Quaders sind immer gleich groß." },
                { id: "koerk6l1u_schwer_2", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Warum ist jeder Würfel auch ein Quader?",
                    answers: ["Er erfüllt alle Quader-Bedingungen", "Er hat mehr Ecken als ein Quader", "Er besteht nur aus Dreiecken", "Er hat keine rechten Winkel"], correct: 0,
                    explanation: "Ein Würfel ist ein Quader, bei dem zusätzlich alle Kanten gleich lang sind." },
                { id: "koerk6l1u_schwer_3", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Ein Kegel besteht aus welchen Teilen?",
                    answers: ["Einem Kreis und einer Mantelfläche", "Zwei Kreisen und einem Rechteck", "Vier Dreiecken und einem Quadrat", "Sechs Rechtecken ohne Rundung"], correct: 0,
                    explanation: "Der Kegel hat eine kreisförmige Grundfläche und eine gebogene Mantelfläche mit Spitze." },
                { id: "koerk6l1u_schwer_4", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Wie lang ist die Summe aller Kanten eines Würfels mit 3 cm Kantenlänge?",
                    answers: ["36 cm", "24 cm", "18 cm", "27 cm"], correct: 0,
                    explanation: "12 Kanten mal 3 cm = 36 cm." }
            ]
        },
        test: [
            { id: "koerk6l1_test_1", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "leicht", points: 10,
                question: "Wie viele Kanten hat ein Würfel?",
                answers: ["12", "8", "6", "10"], correct: 0,
                explanation: "Ein Würfel hat 12 gleich lange Kanten." },
            { id: "koerk6l1_test_2", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "leicht", points: 10,
                question: "Welche Form haben die Flächen eines Quaders?",
                answers: ["Rechtecke", "Dreiecke", "Kreise", "Fünfecke"], correct: 0,
                explanation: "Ein Quader wird von 6 Rechtecken begrenzt." },
            { id: "koerk6l1_test_3", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "mittel", points: 10,
                question: "Welcher Körper hat zwei gleich große Kreisflächen?",
                answers: ["Zylinder", "Kegel", "Kugel", "Pyramide"], correct: 0,
                explanation: "Der Zylinder hat oben und unten je eine gleich große Kreisfläche." },
            { id: "koerk6l1_test_4", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "mittel", points: 10,
                question: "Wie viele Quadrate hat das Netz eines Würfels?",
                answers: ["6", "4", "8", "12"], correct: 0,
                explanation: "Das Würfelnetz besteht aus 6 gleich großen Quadraten." },
            { id: "koerk6l1_test_5", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "schwer", points: 10,
                question: "Wie lang ist die Summe aller Kanten eines Würfels mit 5 cm Kantenlänge?",
                answers: ["60 cm", "30 cm", "40 cm", "25 cm"], correct: 0,
                explanation: "12 Kanten mal 5 cm = 60 cm." },
            { id: "koerk6l1_test_6", category: "kurs_koer_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "koerper", difficulty: "schwer", points: 10,
                question: "Welche Aussage über Würfel und Quader stimmt?",
                answers: ["Jeder Würfel ist auch ein Quader", "Jeder Quader ist auch ein Würfel", "Beide haben unterschiedlich viele Ecken", "Der Würfel hat mehr Kanten"], correct: 0,
                explanation: "Der Würfel ist der Sonderfall des Quaders mit lauter gleich langen Kanten." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "koer_k6_l2",
        kurs: "koerper_volumen_k6",
        order: 2,
        icon: "🧊",
        title: "Volumen und Oberfläche des Quaders",
        kurz: "Wie viel passt hinein – und wie viel Papier zum Einpacken?",
        erklaerung: {
            intro: "Das <b>Volumen</b> sagt, wie viel in einen Körper hineinpasst. Die <b>Oberfläche</b> ist die Summe aller Außenflächen – also das, was man zum Einpacken bräuchte.",
            beispiele: [
                "🧊 Volumen Quader: V = Länge · Breite · Höhe. Beispiel 5 · 3 · 2 = <b>30 cm³</b>.",
                "🎲 Volumen Würfel: V = a · a · a. Bei a = 4 cm: <b>64 cm³</b>.",
                "📄 Oberfläche Quader: O = 2 · (a·b + a·c + b·c). Bei 5 · 3 · 2: 2 · (15 + 10 + 6) = <b>62 cm²</b>.",
                "📄 Oberfläche Würfel: O = 6 · a². Bei a = 4 cm: 6 · 16 = <b>96 cm²</b>."
            ],
            merksatz: "Volumen misst man in cm³, dm³ oder m³ – 1 dm³ ist genau 1 Liter. Die Oberfläche misst man in cm² oder m², weil sie aus Flächen besteht."
        },
        uebung: {
            leicht: [
                { id: "koerk6l2u_leicht_1", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "leicht", points: 10,
                    question: "Mit welcher Formel berechnet man das Volumen eines Quaders?",
                    answers: ["V = a · b · c", "V = a + b + c", "V = 2 · (a + b)", "V = 6 · a · a"], correct: 0,
                    explanation: "Volumen = Länge mal Breite mal Höhe." },
                { id: "koerk6l2u_leicht_2", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "leicht", points: 10,
                    question: "In welcher Einheit gibt man ein Volumen an?",
                    answers: ["cm³", "cm²", "cm", "km"], correct: 0,
                    explanation: "Volumen ist räumlich – die Einheit hat deshalb eine hochgestellte 3." },
                { id: "koerk6l2u_leicht_3", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "leicht", points: 10,
                    question: "Wie groß ist das Volumen eines Quaders mit 5 cm, 3 cm und 2 cm?",
                    answers: ["30 cm³", "10 cm³", "60 cm³", "20 cm³"], correct: 0,
                    explanation: "V = 5 · 3 · 2 = 30 cm³." },
                { id: "koerk6l2u_leicht_4", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "leicht", points: 10,
                    question: "Wie viel ist 1 dm³?",
                    answers: ["1 Liter", "10 Liter", "100 Liter", "1 Milliliter"], correct: 0,
                    explanation: "Ein Kubikdezimeter entspricht genau einem Liter." }
            ],
            mittel: [
                { id: "koerk6l2u_mittel_1", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "mittel", points: 10,
                    question: "Wie groß ist das Volumen eines Würfels mit 4 cm Kantenlänge?",
                    answers: ["64 cm³", "16 cm³", "48 cm³", "12 cm³"], correct: 0,
                    explanation: "V = 4 · 4 · 4 = 64 cm³." },
                { id: "koerk6l2u_mittel_2", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "mittel", points: 10,
                    question: "Wie groß ist die Oberfläche eines Würfels mit 4 cm Kantenlänge?",
                    answers: ["96 cm²", "64 cm²", "16 cm²", "24 cm²"], correct: 0,
                    explanation: "O = 6 · a² = 6 · 16 = 96 cm²." },
                { id: "koerk6l2u_mittel_3", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "mittel", points: 10,
                    question: "Wie groß ist das Volumen eines Quaders mit 10 cm, 4 cm und 3 cm?",
                    answers: ["120 cm³", "17 cm³", "34 cm³", "40 cm³"], correct: 0,
                    explanation: "V = 10 · 4 · 3 = 120 cm³." },
                { id: "koerk6l2u_mittel_4", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "mittel", points: 10,
                    question: "In welcher Einheit gibt man eine Oberfläche an?",
                    answers: ["cm²", "cm³", "cm", "Liter"], correct: 0,
                    explanation: "Die Oberfläche besteht aus Flächen – deshalb Quadratzentimeter." }
            ],
            schwer: [
                { id: "koerk6l2u_schwer_1", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "schwer", points: 10,
                    question: "Wie groß ist die Oberfläche eines Quaders mit 5 cm, 3 cm und 2 cm?",
                    answers: ["62 cm²", "30 cm²", "31 cm²", "60 cm²"], correct: 0,
                    explanation: "O = 2 · (5·3 + 5·2 + 3·2) = 2 · (15 + 10 + 6) = 62 cm²." },
                { id: "koerk6l2u_schwer_2", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "schwer", points: 10,
                    question: "Ein Aquarium ist 40 cm lang, 20 cm breit und 25 cm hoch. Wie viel Liter passen hinein?",
                    answers: ["20 Liter", "10 Liter", "40 Liter", "200 Liter"], correct: 0,
                    explanation: "V = 40 · 20 · 25 = 20000 cm³ = 20 dm³ = 20 Liter." },
                { id: "koerk6l2u_schwer_3", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "schwer", points: 10,
                    question: "Wie verändert sich das Volumen eines Würfels, wenn man die Kante verdoppelt?",
                    answers: ["Es wird achtmal so groß", "Es wird doppelt so groß", "Es wird viermal so groß", "Es bleibt genauso groß"], correct: 0,
                    explanation: "Aus a · a · a wird 2a · 2a · 2a = 8 · a³ – also das Achtfache." },
                { id: "koerk6l2u_schwer_4", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "schwer", points: 10,
                    question: "Wie groß ist das Volumen eines Quaders mit 6 cm, 5 cm und 4 cm?",
                    answers: ["120 cm³", "15 cm³", "148 cm³", "30 cm³"], correct: 0,
                    explanation: "V = 6 · 5 · 4 = 120 cm³." }
            ]
        },
        test: [
            { id: "koerk6l2_test_1", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "leicht", points: 10,
                question: "Wie groß ist das Volumen eines Quaders mit 3 cm, 3 cm und 2 cm?",
                answers: ["18 cm³", "8 cm³", "12 cm³", "36 cm³"], correct: 0,
                explanation: "V = 3 · 3 · 2 = 18 cm³." },
            { id: "koerk6l2_test_2", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "mittel", points: 10,
                question: "Mit welcher Formel berechnet man die Oberfläche eines Würfels?",
                answers: ["O = 6 · a · a", "O = a · a · a", "O = 4 · a · a", "O = 12 · a"], correct: 0,
                explanation: "Sechs gleich große Quadrate: O = 6 · a²." },
            { id: "koerk6l2_test_3", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "mittel", points: 10,
                question: "Wie groß ist das Volumen eines Würfels mit 3 cm Kantenlänge?",
                answers: ["27 cm³", "9 cm³", "18 cm³", "54 cm³"], correct: 0,
                explanation: "V = 3 · 3 · 3 = 27 cm³." },
            { id: "koerk6l2_test_4", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "mittel", points: 10,
                question: "Wie viele Liter sind 5 dm³?",
                answers: ["5 Liter", "50 Liter", "0,5 Liter", "500 Liter"], correct: 0,
                explanation: "1 dm³ = 1 Liter, also sind 5 dm³ genau 5 Liter." },
            { id: "koerk6l2_test_5", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "schwer", points: 10,
                question: "Wie groß ist die Oberfläche eines Quaders mit 4 cm, 3 cm und 2 cm?",
                answers: ["52 cm²", "24 cm²", "26 cm²", "48 cm²"], correct: 0,
                explanation: "O = 2 · (4·3 + 4·2 + 3·2) = 2 · (12 + 8 + 6) = 52 cm²." },
            { id: "koerk6l2_test_6", category: "kurs_koer_k6_l2", area: "schule", grade: 6, subject: "mathe", topic: "volumen", difficulty: "schwer", points: 10,
                question: "Eine Kiste ist 50 cm lang, 20 cm breit und 10 cm hoch. Wie viel Liter fasst sie?",
                answers: ["10 Liter", "1 Liter", "100 Liter", "20 Liter"], correct: 0,
                explanation: "V = 50 · 20 · 10 = 10000 cm³ = 10 dm³ = 10 Liter." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "brdz_k6_l1",
        kurs: "brueche_dezimal_k6",
        order: 1,
        icon: "🔁",
        title: "Brüche und Dezimalzahlen umwandeln",
        kurz: "1/2 = 0,5 – zwei Schreibweisen für dasselbe",
        erklaerung: {
            intro: "Ein Bruch und eine Dezimalzahl können denselben Wert haben. Um einen <b>Bruch in eine Dezimalzahl</b> zu verwandeln, teilt man Zähler durch Nenner – oder erweitert auf den Nenner 10, 100 oder 1000.",
            beispiele: [
                "🔁 1/2 = <b>0,5</b> · 1/4 = <b>0,25</b> · 3/4 = <b>0,75</b> · 1/5 = <b>0,2</b>",
                "🔟 Erweitern: 3/5 = 6/10 = <b>0,6</b> – der Nenner 10 macht die Umwandlung leicht.",
                "➗ Teilen: 1/8 = 1 ÷ 8 = <b>0,125</b>.",
                "⬅️ Umgekehrt: 0,7 = <b>7/10</b> und 0,25 = 25/100 = <b>1/4</b> (gekürzt)."
            ],
            merksatz: "Bruch → Dezimalzahl: Zähler ÷ Nenner oder auf Zehntel/Hundertstel erweitern. Dezimalzahl → Bruch: Nachkommastellen zählen (eine Stelle = Zehntel, zwei = Hundertstel), dann kürzen."
        },
        uebung: {
            leicht: [
                { id: "brdzk6l1u_leicht_1", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man 1/2 als Dezimalzahl?",
                    answers: ["0,5", "0,2", "1,2", "0,12"], correct: 0,
                    explanation: "1 ÷ 2 = 0,5 – die Hälfte von einem Ganzen." },
                { id: "brdzk6l1u_leicht_2", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man 1/4 als Dezimalzahl?",
                    answers: ["0,25", "0,14", "0,4", "1,4"], correct: 0,
                    explanation: "1 ÷ 4 = 0,25 – ein Viertel." },
                { id: "brdzk6l1u_leicht_3", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man 0,3 als Bruch?",
                    answers: ["3/10", "1/3", "3/100", "10/3"], correct: 0,
                    explanation: "Eine Nachkommastelle bedeutet Zehntel: 0,3 = 3/10." },
                { id: "brdzk6l1u_leicht_4", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man 3/4 als Dezimalzahl?",
                    answers: ["0,75", "0,34", "0,43", "1,75"], correct: 0,
                    explanation: "3 ÷ 4 = 0,75 – drei Viertel." }
            ],
            mittel: [
                { id: "brdzk6l1u_mittel_1", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man 1/5 als Dezimalzahl?",
                    answers: ["0,2", "0,5", "0,15", "0,25"], correct: 0,
                    explanation: "1/5 = 2/10 = 0,2." },
                { id: "brdzk6l1u_mittel_2", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man 0,25 als gekürzten Bruch?",
                    answers: ["1/4", "1/2", "2/5", "1/25"], correct: 0,
                    explanation: "0,25 = 25/100, gekürzt durch 25 ergibt 1/4." },
                { id: "brdzk6l1u_mittel_3", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man 7/10 als Dezimalzahl?",
                    answers: ["0,7", "0,07", "7,1", "1,7"], correct: 0,
                    explanation: "Zehntel stehen direkt an der ersten Nachkommastelle: 0,7." },
                { id: "brdzk6l1u_mittel_4", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                    question: "Wie wandelt man einen Bruch in eine Dezimalzahl um?",
                    answers: ["Zähler durch Nenner teilen", "Nenner durch Zähler teilen", "Zähler und Nenner addieren", "Den Bruch einfach umdrehen"], correct: 0,
                    explanation: "Ein Bruchstrich bedeutet 'geteilt durch': 3/4 = 3 ÷ 4 = 0,75." }
            ],
            schwer: [
                { id: "brdzk6l1u_schwer_1", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Wie schreibt man 3/5 als Dezimalzahl?",
                    answers: ["0,6", "0,35", "0,53", "1,6"], correct: 0,
                    explanation: "3/5 = 6/10 = 0,6." },
                { id: "brdzk6l1u_schwer_2", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Wie schreibt man 1/8 als Dezimalzahl?",
                    answers: ["0,125", "0,18", "0,8", "0,25"], correct: 0,
                    explanation: "1 ÷ 8 = 0,125." },
                { id: "brdzk6l1u_schwer_3", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Wie schreibt man 0,75 als gekürzten Bruch?",
                    answers: ["3/4", "7/5", "1/4", "75/10"], correct: 0,
                    explanation: "0,75 = 75/100, gekürzt durch 25 ergibt 3/4." },
                { id: "brdzk6l1u_schwer_4", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                    question: "Welcher Wert ist größer: 2/5 oder 0,5?",
                    answers: ["0,5 ist größer", "2/5 ist größer", "Beide sind gleich groß", "Das kann man nicht sagen"], correct: 0,
                    explanation: "2/5 = 0,4 und das ist kleiner als 0,5." }
            ]
        },
        test: [
            { id: "brdzk6l1_test_1", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                question: "Wie schreibt man 1/10 als Dezimalzahl?",
                answers: ["0,1", "0,01", "1,0", "0,11"], correct: 0,
                explanation: "Ein Zehntel ist 0,1." },
            { id: "brdzk6l1_test_2", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "leicht", points: 10,
                question: "Wie schreibt man 0,5 als gekürzten Bruch?",
                answers: ["1/2", "5/10", "1/5", "2/5"], correct: 0,
                explanation: "0,5 = 5/10, gekürzt durch 5 ergibt 1/2." },
            { id: "brdzk6l1_test_3", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                question: "Wie schreibt man 2/5 als Dezimalzahl?",
                answers: ["0,4", "0,25", "0,52", "2,5"], correct: 0,
                explanation: "2/5 = 4/10 = 0,4." },
            { id: "brdzk6l1_test_4", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                question: "Wie schreibt man 0,2 als gekürzten Bruch?",
                answers: ["1/5", "2/100", "1/2", "2/5"], correct: 0,
                explanation: "0,2 = 2/10, gekürzt durch 2 ergibt 1/5." },
            { id: "brdzk6l1_test_5", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                question: "Wie schreibt man 9/10 als Dezimalzahl?",
                answers: ["0,9", "0,09", "9,1", "1,9"], correct: 0,
                explanation: "Neun Zehntel sind 0,9." },
            { id: "brdzk6l1_test_6", category: "kurs_brdz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                question: "Welche Nachkommastelle steht für die Hundertstel?",
                answers: ["Die zweite", "Die erste", "Die dritte", "Die vierte"], correct: 0,
                explanation: "Erste Stelle Zehntel, zweite Stelle Hundertstel, dritte Stelle Tausendstel." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "datn_k5_l1",
        kurs: "daten_diagramme_k5",
        order: 1,
        icon: "📊",
        title: "Daten sammeln und auswerten",
        kurz: "Strichliste, Diagramm, Mittelwert und Spannweite",
        erklaerung: {
            intro: "Wer etwas untersucht, sammelt <b>Daten</b>. Mit einer <b>Strichliste</b> zählt man, wie oft etwas vorkommt – das ist die <b>Häufigkeit</b>. Diagramme machen die Ergebnisse auf einen Blick sichtbar.",
            beispiele: [
                "📝 Strichliste: ||||| ||| bedeutet Häufigkeit <b>8</b>.",
                "📊 Ein <b>Säulendiagramm</b> zeigt, welcher Wert am häufigsten vorkommt – die höchste Säule.",
                "➗ <b>Mittelwert</b> (Durchschnitt) = Summe aller Werte ÷ Anzahl der Werte. Bei 2, 4 und 6: 12 ÷ 3 = <b>4</b>.",
                "↔️ <b>Spannweite</b> = größter Wert − kleinster Wert. Bei 3 und 12: <b>9</b>."
            ],
            merksatz: "Mittelwert = alles zusammenzählen, dann durch die Anzahl teilen. Spannweite = Maximum minus Minimum. Die Häufigkeit sagt, wie oft ein Wert vorkommt."
        },
        uebung: {
            leicht: [
                { id: "datnk5l1u_leicht_1", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "leicht", points: 10,
                    question: "Wie berechnet man den Mittelwert?",
                    answers: ["Summe geteilt durch Anzahl", "Anzahl geteilt durch Summe", "Größter minus kleinster Wert", "Der Wert in der Mitte"], correct: 0,
                    explanation: "Alle Werte addieren und durch die Anzahl der Werte teilen." },
                { id: "datnk5l1u_leicht_2", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "leicht", points: 10,
                    question: "Wie groß ist der Mittelwert von 2, 4 und 6?",
                    answers: ["4", "3", "6", "12"], correct: 0,
                    explanation: "2 + 4 + 6 = 12 und 12 ÷ 3 = 4." },
                { id: "datnk5l1u_leicht_3", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "leicht", points: 10,
                    question: "Was zeigt eine Strichliste?",
                    answers: ["Wie oft etwas vorkommt", "Wie groß etwas ist", "Wie lang etwas dauert", "Wie schwer etwas ist"], correct: 0,
                    explanation: "Die Strichliste zählt die Häufigkeit – also wie oft ein Wert auftritt." },
                { id: "datnk5l1u_leicht_4", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "leicht", points: 10,
                    question: "Was ist das Maximum einer Datenreihe?",
                    answers: ["Der größte Wert", "Der kleinste Wert", "Der mittlere Wert", "Die Anzahl der Werte"], correct: 0,
                    explanation: "Das Maximum ist der größte vorkommende Wert." }
            ],
            mittel: [
                { id: "datnk5l1u_mittel_1", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "mittel", points: 10,
                    question: "Wie groß ist der Mittelwert von 3, 5, 7 und 9?",
                    answers: ["6", "5", "7", "24"], correct: 0,
                    explanation: "3 + 5 + 7 + 9 = 24 und 24 ÷ 4 = 6." },
                { id: "datnk5l1u_mittel_2", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "mittel", points: 10,
                    question: "Wie groß ist die Spannweite bei den Werten 4 und 12?",
                    answers: ["8", "16", "6", "4"], correct: 0,
                    explanation: "Spannweite = 12 − 4 = 8." },
                { id: "datnk5l1u_mittel_3", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "mittel", points: 10,
                    question: "Lisa hat die Noten 2, 3, 1, 4 und 5. Wie ist ihr Notendurchschnitt?",
                    answers: ["3", "2", "4", "15"], correct: 0,
                    explanation: "2 + 3 + 1 + 4 + 5 = 15 und 15 ÷ 5 = 3." },
                { id: "datnk5l1u_mittel_4", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "mittel", points: 10,
                    question: "Welches Diagramm zeigt Anteile an einem Ganzen am besten?",
                    answers: ["Kreisdiagramm", "Säulendiagramm", "Strichliste", "Zahlenstrahl"], correct: 0,
                    explanation: "Im Kreisdiagramm sieht man sofort, welcher Anteil wie groß ist." }
            ],
            schwer: [
                { id: "datnk5l1u_schwer_1", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "schwer", points: 10,
                    question: "Wie groß ist der Mittelwert von 10, 20, 30 und 40?",
                    answers: ["25", "20", "30", "100"], correct: 0,
                    explanation: "10 + 20 + 30 + 40 = 100 und 100 ÷ 4 = 25." },
                { id: "datnk5l1u_schwer_2", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "schwer", points: 10,
                    question: "Fünf Kinder haben zusammen 60 Punkte. Wie viele Punkte sind das im Schnitt?",
                    answers: ["12", "10", "15", "20"], correct: 0,
                    explanation: "60 ÷ 5 = 12 Punkte pro Kind." },
                { id: "datnk5l1u_schwer_3", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "schwer", points: 10,
                    question: "Wie groß ist die Spannweite der Werte 7, 3, 9 und 1?",
                    answers: ["8", "6", "9", "5"], correct: 0,
                    explanation: "Größter Wert 9 minus kleinster Wert 1 ergibt 8." },
                { id: "datnk5l1u_schwer_4", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "schwer", points: 10,
                    question: "Was passiert mit dem Mittelwert, wenn ein sehr großer Wert dazukommt?",
                    answers: ["Er wird größer", "Er wird kleiner", "Er bleibt gleich", "Er wird immer null"], correct: 0,
                    explanation: "Ein großer Einzelwert zieht den Durchschnitt nach oben." }
            ]
        },
        test: [
            { id: "datnk5l1_test_1", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "leicht", points: 10,
                question: "Wie groß ist der Mittelwert von 4, 6 und 8?",
                answers: ["6", "5", "7", "18"], correct: 0,
                explanation: "4 + 6 + 8 = 18 und 18 ÷ 3 = 6." },
            { id: "datnk5l1_test_2", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "leicht", points: 10,
                question: "Was ist das Minimum einer Datenreihe?",
                answers: ["Der kleinste Wert", "Der größte Wert", "Der häufigste Wert", "Die Summe der Werte"], correct: 0,
                explanation: "Das Minimum ist der kleinste vorkommende Wert." },
            { id: "datnk5l1_test_3", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "mittel", points: 10,
                question: "Wie groß ist die Spannweite der Werte 5, 11 und 8?",
                answers: ["6", "3", "11", "8"], correct: 0,
                explanation: "11 − 5 = 6." },
            { id: "datnk5l1_test_4", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "mittel", points: 10,
                question: "Was bedeutet die höchste Säule in einem Säulendiagramm?",
                answers: ["Der häufigste Wert", "Der kleinste Wert", "Der Mittelwert", "Die Spannweite"], correct: 0,
                explanation: "Je höher die Säule, desto öfter kommt der Wert vor." },
            { id: "datnk5l1_test_5", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "schwer", points: 10,
                question: "Vier Freunde sind 8, 10, 12 und 14 Jahre alt. Wie alt sind sie im Schnitt?",
                answers: ["11", "10", "12", "44"], correct: 0,
                explanation: "8 + 10 + 12 + 14 = 44 und 44 ÷ 4 = 11." },
            { id: "datnk5l1_test_6", category: "kurs_datn_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "daten", difficulty: "schwer", points: 10,
                question: "In einer Strichliste stehen 12 Striche bei 'Fußball'. Was bedeutet das?",
                answers: ["12 Kinder nannten Fußball", "Fußball dauert 12 Minuten", "Es gibt 12 Sportarten", "Fußball kostet 12 Euro"], correct: 0,
                explanation: "Jeder Strich steht für eine Nennung – die Häufigkeit ist 12." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "sssz_k5_l1",
        kurs: "s_ss_sz_k5",
        order: 1,
        icon: "🔤",
        title: "s, ss oder ß?",
        kurz: "Kurzer Vokal, langer Vokal – daran hängt alles",
        erklaerung: {
            intro: "Ob man <b>s</b>, <b>ss</b> oder <b>ß</b> schreibt, hängt vom Vokal davor ab. Man spricht den Vokal einmal deutlich aus: Ist er <b>kurz</b>, folgt <b>ss</b>. Ist er <b>lang</b> oder ein Doppellaut, folgt <b>ß</b>.",
            beispiele: [
                "🔉 Kurzer Vokal → <b>ss</b>: Fluss, Kuss, muss, Schloss, essen, wissen.",
                "🔊 Langer Vokal → <b>ß</b>: Fuß, Maß, groß, Straße, Grüße.",
                "🔗 Doppellaut (ei, au, eu) → <b>ß</b>: heiß, weiß, draußen.",
                "🐍 Einfaches <b>s</b> klingt weich und summt: Hase, Nase, lesen, Rose."
            ],
            merksatz: "Kurz gesprochener Vokal → ss. Lang gesprochener Vokal oder ei/au/eu → ß. Klingt das s weich und gesummt, steht nur ein einfaches s."
        },
        uebung: {
            leicht: [
                { id: "ssszk5l1u_leicht_1", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist richtig geschrieben?",
                    answers: ["Fuß", "Fuss", "Fus", "Fuhs"], correct: 0,
                    explanation: "Das u wird lang gesprochen – deshalb ß: Fuß." },
                { id: "ssszk5l1u_leicht_2", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist richtig geschrieben?",
                    answers: ["Fluss", "Fluß", "Flus", "Fluhs"], correct: 0,
                    explanation: "Das u wird kurz gesprochen – deshalb ss: Fluss." },
                { id: "ssszk5l1u_leicht_3", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wann schreibt man ss?",
                    answers: ["Nach einem kurzen Vokal", "Nach einem langen Vokal", "Nach jedem Doppellaut", "Immer am Wortanfang"], correct: 0,
                    explanation: "Nach kurz gesprochenem Vokal steht ss: Fluss, Kuss, muss." },
                { id: "ssszk5l1u_leicht_4", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wann schreibt man ß?",
                    answers: ["Nach einem langen Vokal", "Nach einem kurzen Vokal", "Nach jedem Konsonanten", "Immer am Wortanfang"], correct: 0,
                    explanation: "Nach lang gesprochenem Vokal oder Doppellaut steht ß: Fuß, heiß." }
            ],
            mittel: [
                { id: "ssszk5l1u_mittel_1", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist richtig geschrieben?",
                    answers: ["Straße", "Strasse", "Strase", "Strahse"], correct: 0,
                    explanation: "Das a wird lang gesprochen – deshalb ß: Straße." },
                { id: "ssszk5l1u_mittel_2", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist richtig geschrieben?",
                    answers: ["heiß", "heiss", "heis", "heihs"], correct: 0,
                    explanation: "Nach dem Doppellaut ei steht ß: heiß." },
                { id: "ssszk5l1u_mittel_3", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist richtig geschrieben?",
                    answers: ["Schloss", "Schloß", "Schlos", "Schlohs"], correct: 0,
                    explanation: "Das o wird kurz gesprochen – deshalb ss: Schloss." },
                { id: "ssszk5l1u_mittel_4", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "In welchem Wort steht nur ein einfaches s?",
                    answers: ["Hase", "Kuss", "Fuß", "Fluss"], correct: 0,
                    explanation: "In Hase klingt das s weich und gesummt – dort steht ein einfaches s." }
            ],
            schwer: [
                { id: "ssszk5l1u_schwer_1", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist richtig geschrieben?",
                    answers: ["draußen", "draussen", "drausen", "drauhsen"], correct: 0,
                    explanation: "Nach dem Doppellaut au steht ß: draußen." },
                { id: "ssszk5l1u_schwer_2", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Warum schreibt man 'wissen' mit ss?",
                    answers: ["Das i wird kurz gesprochen", "Das i wird lang gesprochen", "Es ist ein Doppellaut", "Es ist ein Fremdwort"], correct: 0,
                    explanation: "Kurzer Vokal vor dem s-Laut bedeutet ss." },
                { id: "ssszk5l1u_schwer_3", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist richtig geschrieben?",
                    answers: ["Grüße", "Grüsse", "Grüse", "Grühse"], correct: 0,
                    explanation: "Das ü wird lang gesprochen – deshalb ß: Grüße." },
                { id: "ssszk5l1u_schwer_4", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Wie hängen 'muss' und 'Maß' zusammen?",
                    answers: ["Kurzer Vokal ss, langer Vokal ß", "Beide haben einen kurzen Vokal", "Beide haben einen langen Vokal", "Es gibt gar keine feste Regel"], correct: 0,
                    explanation: "In muss ist das u kurz (ss), in Maß ist das a lang (ß)." }
            ]
        },
        test: [
            { id: "ssszk5l1_test_1", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                question: "Welches Wort ist richtig geschrieben?",
                answers: ["Kuss", "Kuß", "Kus", "Kuhs"], correct: 0,
                explanation: "Das u wird kurz gesprochen – deshalb ss: Kuss." },
            { id: "ssszk5l1_test_2", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                question: "Welches Wort ist richtig geschrieben?",
                answers: ["groß", "gross", "gros", "grohs"], correct: 0,
                explanation: "Das o wird lang gesprochen – deshalb ß: groß." },
            { id: "ssszk5l1_test_3", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                question: "Welches Wort ist richtig geschrieben?",
                answers: ["weiß", "weiss", "weis", "weihs"], correct: 0,
                explanation: "Nach dem Doppellaut ei steht ß: weiß." },
            { id: "ssszk5l1_test_4", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                question: "Welches Wort ist richtig geschrieben?",
                answers: ["essen", "eßen", "esen", "ehsen"], correct: 0,
                explanation: "Das e wird kurz gesprochen – deshalb ss: essen." },
            { id: "ssszk5l1_test_5", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                question: "Welche Probe hilft bei der Entscheidung zwischen ss und ß?",
                answers: ["Den Vokal davor lang oder kurz sprechen", "Das Wort in die Mehrzahl setzen", "Die Silben des Wortes zählen", "Den Artikel des Wortes suchen"], correct: 0,
                explanation: "Kurzer Vokal bedeutet ss, langer Vokal oder Doppellaut bedeutet ß." },
            { id: "ssszk5l1_test_6", category: "kurs_sssz_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                question: "In welchem Wort steht ein einfaches s?",
                answers: ["Rose", "Fluss", "Straße", "Kuss"], correct: 0,
                explanation: "In Rose klingt das s weich und gesummt – ein einfaches s." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "komm_k5_l1",
        kurs: "komma_k5",
        order: 1,
        icon: "✂️",
        title: "Kommasetzung",
        kurz: "Aufzählungen, aber und denn, Nebensätze, wörtliche Rede",
        erklaerung: {
            intro: "Das <b>Komma</b> gliedert einen Satz. Es gibt einige feste Stellen, an denen ein Komma stehen muss – und eine wichtige Stelle, an der keines steht.",
            beispiele: [
                "📝 <b>Aufzählung</b>: Ich kaufe Äpfel, Birnen und Bananen. – Vor <b>und</b> oder <b>oder</b> steht <b>kein</b> Komma.",
                "🔀 Vor <b>aber</b>, <b>denn</b>, <b>sondern</b> steht immer ein Komma: Ich wollte kommen, aber ich war krank.",
                "🧩 Vor einem <b>Nebensatz</b>: Ich bleibe zu Hause, weil es regnet.",
                "💬 Bei <b>wörtlicher Rede</b>: „Ich komme gleich\", sagte Tom."
            ],
            merksatz: "Komma bei Aufzählungen (aber nicht vor und/oder), vor aber, denn und sondern, vor jedem Nebensatz und bei wörtlicher Rede sowie nach der Anrede."
        },
        uebung: {
            leicht: [
                { id: "kommk5l1u_leicht_1", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "leicht", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["Ich kaufe Äpfel, Birnen und Bananen.", "Ich kaufe Äpfel, Birnen, und Bananen.", "Ich kaufe Äpfel Birnen und Bananen.", "Ich kaufe, Äpfel Birnen und Bananen."], correct: 0,
                    explanation: "In Aufzählungen trennt das Komma – vor dem letzten 'und' steht keines." },
                { id: "kommk5l1u_leicht_2", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "leicht", points: 10,
                    question: "Vor welchem Wort steht in einer Aufzählung KEIN Komma?",
                    answers: ["und", "aber", "denn", "sondern"], correct: 0,
                    explanation: "Vor 'und' und 'oder' steht in Aufzählungen kein Komma." },
                { id: "kommk5l1u_leicht_3", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "leicht", points: 10,
                    question: "Vor welchen Wörtern steht immer ein Komma?",
                    answers: ["aber, denn, sondern", "und, oder, sowie", "sehr, ganz, kaum", "dann, dort, hier"], correct: 0,
                    explanation: "Vor aber, denn und sondern steht immer ein Komma." },
                { id: "kommk5l1u_leicht_4", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "leicht", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["Ich wollte kommen, aber ich war krank.", "Ich wollte kommen aber ich war krank.", "Ich wollte, kommen aber ich war krank.", "Ich wollte kommen aber, ich war krank."], correct: 0,
                    explanation: "Vor 'aber' steht ein Komma." }
            ],
            mittel: [
                { id: "kommk5l1u_mittel_1", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["Ich bleibe zu Hause, weil es regnet.", "Ich bleibe zu Hause weil es regnet.", "Ich bleibe, zu Hause weil es regnet.", "Ich bleibe zu Hause weil, es regnet."], correct: 0,
                    explanation: "Vor einem Nebensatz mit 'weil' steht ein Komma." },
                { id: "kommk5l1u_mittel_2", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "mittel", points: 10,
                    question: "Wo steht das Komma bei wörtlicher Rede?",
                    answers: ["Nach dem schließenden Anführungszeichen", "Direkt vor dem ersten Anführungszeichen", "Mitten in der wörtlichen Rede", "Am Ende des ganzen Satzes"], correct: 0,
                    explanation: "„Ich komme gleich\", sagte Tom. – Das Komma folgt auf die Anführungszeichen." },
                { id: "kommk5l1u_mittel_3", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["Hallo, Anna, wie geht es dir?", "Hallo Anna wie geht es dir?", "Hallo, Anna wie, geht es dir?", "Hallo Anna, wie geht, es dir?"], correct: 0,
                    explanation: "Eine Anrede wird durch Kommas abgetrennt." },
                { id: "kommk5l1u_mittel_4", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["Wir gehen raus, denn es ist warm.", "Wir gehen raus denn es ist warm.", "Wir gehen, raus denn es ist warm.", "Wir gehen raus denn, es ist warm."], correct: 0,
                    explanation: "Vor 'denn' steht immer ein Komma." }
            ],
            schwer: [
                { id: "kommk5l1u_schwer_1", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["Das Buch, das ich lese, ist spannend.", "Das Buch das ich lese ist spannend.", "Das Buch, das ich lese ist spannend.", "Das Buch das ich lese, ist spannend."], correct: 0,
                    explanation: "Ein eingeschobener Relativsatz wird auf beiden Seiten mit Komma abgetrennt." },
                { id: "kommk5l1u_schwer_2", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["Weil es regnet, bleiben wir zu Hause.", "Weil es regnet bleiben wir zu Hause.", "Weil, es regnet bleiben wir zu Hause.", "Weil es regnet bleiben, wir zu Hause."], correct: 0,
                    explanation: "Steht der Nebensatz vorn, trennt das Komma ihn vom Hauptsatz." },
                { id: "kommk5l1u_schwer_3", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["Ich mag Pizza, Nudeln und Reis.", "Ich mag Pizza und, Nudeln und Reis.", "Ich mag, Pizza Nudeln und Reis.", "Ich mag Pizza Nudeln, und Reis."], correct: 0,
                    explanation: "Kommas zwischen den Gliedern, aber keines vor dem abschließenden 'und'." },
                { id: "kommk5l1u_schwer_4", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "schwer", points: 10,
                    question: "Warum steht in 'Ich hoffe, dass du kommst.' ein Komma?",
                    answers: ["Weil ein Nebensatz beginnt", "Weil eine Aufzählung beginnt", "Weil eine Anrede folgt", "Weil wörtliche Rede folgt"], correct: 0,
                    explanation: "'dass' leitet einen Nebensatz ein – davor steht ein Komma." }
            ]
        },
        test: [
            { id: "kommk5l1_test_1", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "leicht", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["Sie kauft Milch, Brot und Käse.", "Sie kauft Milch, Brot, und Käse.", "Sie kauft, Milch Brot und Käse.", "Sie kauft Milch Brot und, Käse."], correct: 0,
                explanation: "Kommas zwischen den Gliedern, keines vor dem letzten 'und'." },
            { id: "kommk5l1_test_2", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "leicht", points: 10,
                question: "Vor welchem Wort muss ein Komma stehen?",
                answers: ["sondern", "und", "oder", "sowie"], correct: 0,
                explanation: "Vor sondern, aber und denn steht immer ein Komma." },
            { id: "kommk5l1_test_3", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "mittel", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["Er lernt viel, damit er besteht.", "Er lernt viel damit er besteht.", "Er lernt, viel damit er besteht.", "Er lernt viel damit, er besteht."], correct: 0,
                explanation: "Vor dem Nebensatz mit 'damit' steht ein Komma." },
            { id: "kommk5l1_test_4", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "mittel", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["„Ich bin müde\", sagte Lea.", "„Ich bin müde\" sagte Lea.", "„Ich bin müde,\" sagte, Lea.", "„Ich bin, müde\" sagte Lea."], correct: 0,
                explanation: "Das Komma steht nach dem schließenden Anführungszeichen." },
            { id: "kommk5l1_test_5", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "schwer", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["Der Mann, der dort steht, wartet.", "Der Mann der dort steht wartet.", "Der Mann, der dort steht wartet.", "Der Mann der dort steht, wartet."], correct: 0,
                explanation: "Der eingeschobene Relativsatz braucht vorne und hinten ein Komma." },
            { id: "kommk5l1_test_6", category: "kurs_komm_k5_l1", area: "schule", grade: 5, subject: "deutsch", topic: "zeichensetzung", difficulty: "schwer", points: 10,
                question: "An welcher Stelle steht in einer Aufzählung kein Komma?",
                answers: ["Vor dem abschließenden und", "Zwischen zwei Nomen", "Nach dem ersten Glied", "Vor dem zweiten Glied"], correct: 0,
                explanation: "Das letzte 'und' oder 'oder' ersetzt das Komma." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "sqan_k5_l1",
        kurs: "some_any_questions_k5",
        order: 1,
        icon: "🧺",
        title: "some, any, a und an",
        kurz: "Wann welches Mengenwort steht",
        erklaerung: {
            intro: "<b>some</b> und <b>any</b> heißen beide 'etwas' oder 'einige'. <b>some</b> steht in Aussagesätzen, <b>any</b> in Fragen und Verneinungen. <b>a</b> und <b>an</b> stehen vor einem einzelnen zählbaren Ding.",
            beispiele: [
                "✅ Aussage: There is <b>some</b> milk in the fridge.",
                "❓ Frage: Is there <b>any</b> milk left?",
                "🚫 Verneinung: There isn't <b>any</b> milk.",
                "🍎 Einzahl: <b>a</b> banana, <b>an</b> apple – an steht vor Vokal-Lauten (a, e, i, o, u)."
            ],
            merksatz: "some in Aussagen, any in Fragen und Verneinungen. Ausnahme: Bei Angeboten und Bitten steht auch in der Frage some (Would you like some tea?)."
        },
        uebung: {
            leicht: [
                { id: "sqank5l1u_leicht_1", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'There is ___ milk in the fridge.'",
                    answers: ["some", "any", "an", "much"], correct: 0,
                    explanation: "In Aussagesätzen steht some." },
                { id: "sqank5l1u_leicht_2", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'Is there ___ juice left?'",
                    answers: ["any", "some", "an", "a"], correct: 0,
                    explanation: "In Fragen steht any." },
                { id: "sqank5l1u_leicht_3", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'I would like ___ apple.'",
                    answers: ["an", "a", "some", "any"], correct: 0,
                    explanation: "Vor einem Vokal-Laut steht an: an apple." },
                { id: "sqank5l1u_leicht_4", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'She has ___ banana.'",
                    answers: ["a", "an", "some", "any"], correct: 0,
                    explanation: "Vor einem Konsonanten-Laut steht a: a banana." }
            ],
            mittel: [
                { id: "sqank5l1u_mittel_1", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'We haven't got ___ bread.'",
                    answers: ["any", "some", "a", "an"], correct: 0,
                    explanation: "In Verneinungen steht any." },
                { id: "sqank5l1u_mittel_2", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'There are ___ books on the table.'",
                    answers: ["some", "any", "a", "an"], correct: 0,
                    explanation: "Aussagesatz mit Mehrzahl – also some." },
                { id: "sqank5l1u_mittel_3", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "mittel", points: 10,
                    question: "Wann steht 'any'?",
                    answers: ["In Fragen und Verneinungen", "Nur in Aussagesätzen", "Nur vor Einzahlwörtern", "Nur am Satzanfang"], correct: 0,
                    explanation: "any steht in Fragen und verneinten Sätzen." },
                { id: "sqank5l1u_mittel_4", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'He is ___ English teacher.'",
                    answers: ["an", "a", "some", "any"], correct: 0,
                    explanation: "English beginnt mit einem Vokal-Laut – also an." }
            ],
            schwer: [
                { id: "sqank5l1u_schwer_1", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'Would you like ___ tea?' (höfliches Angebot)",
                    answers: ["some", "any", "a", "an"], correct: 0,
                    explanation: "Bei Angeboten und Bitten steht auch in der Frage some." },
                { id: "sqank5l1u_schwer_2", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'I don't have ___ money.'",
                    answers: ["any", "some", "a", "an"], correct: 0,
                    explanation: "Verneinung mit don't – also any." },
                { id: "sqank5l1u_schwer_3", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'She waited for ___ hour.'",
                    answers: ["an", "a", "some", "any"], correct: 0,
                    explanation: "Bei hour hört man kein h – der Laut ist ein Vokal, also an hour." },
                { id: "sqank5l1u_schwer_4", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["Have you got any pets?", "Have you got some pets?", "Have you got a pets?", "Have you got an pets?"], correct: 0,
                    explanation: "In einer normalen Frage steht any – und pets ist Mehrzahl." }
            ]
        },
        test: [
            { id: "sqank5l1_test_1", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "leicht", points: 10,
                question: "Ergänze: 'There is ___ water in the glass.'",
                answers: ["some", "any", "a", "an"], correct: 0,
                explanation: "Aussagesatz – also some." },
            { id: "sqank5l1_test_2", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "leicht", points: 10,
                question: "Ergänze: 'Is there ___ cheese?'",
                answers: ["any", "some", "a", "an"], correct: 0,
                explanation: "Frage – also any." },
            { id: "sqank5l1_test_3", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "mittel", points: 10,
                question: "Ergänze: 'I have got ___ orange.'",
                answers: ["an", "a", "some", "any"], correct: 0,
                explanation: "orange beginnt mit einem Vokal-Laut – also an." },
            { id: "sqank5l1_test_4", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "mittel", points: 10,
                question: "Ergänze: 'There aren't ___ chairs in the room.'",
                answers: ["any", "some", "a", "an"], correct: 0,
                explanation: "Verneinung – also any." },
            { id: "sqank5l1_test_5", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "schwer", points: 10,
                question: "In welchem Fall steht 'some' auch in einer Frage?",
                answers: ["Bei einem Angebot", "Bei einer Verneinung", "Bei einer Mehrzahl", "Bei einem Vokal-Laut"], correct: 0,
                explanation: "Would you like some cake? – bei Angeboten und Bitten steht some." },
            { id: "sqank5l1_test_6", category: "kurs_sqan_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "some_any", difficulty: "schwer", points: 10,
                question: "Wann benutzt man 'an' statt 'a'?",
                answers: ["Vor einem Vokal-Laut", "Vor einem Konsonanten", "Vor jeder Mehrzahl", "Vor jedem Namen"], correct: 0,
                explanation: "an steht vor Wörtern, die mit einem Vokal-Laut beginnen: an apple, an hour." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "sqan_k5_l2",
        kurs: "some_any_questions_k5",
        order: 2,
        icon: "❓",
        title: "Question words",
        kurz: "what, where, when, who, why, how",
        erklaerung: {
            intro: "Mit <b>question words</b> (Fragewörtern) fragt man nach einer bestimmten Information. Sie stehen immer <b>ganz vorne</b> im Satz, danach folgt die normale Frage.",
            beispiele: [
                "❓ <b>What</b> = Was · <b>Where</b> = Wo · <b>When</b> = Wann · <b>Who</b> = Wer",
                "❓ <b>Why</b> = Warum (Antwort mit because) · <b>How</b> = Wie · <b>Which</b> = Welcher",
                "🔢 <b>How many</b> + zählbare Dinge: How many apples? · <b>How much</b> + nicht zählbar: How much water?",
                "🧩 Satzbau: What <b>do</b> you want? – Where <b>is</b> she? – Fragewort zuerst, dann die Frage."
            ],
            merksatz: "Das Fragewort steht immer am Anfang. How many fragt nach Dingen, die man zählen kann, how much nach Mengen, die man nicht zählen kann."
        },
        uebung: {
            leicht: [
                { id: "sqank5l2u_leicht_1", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "leicht", points: 10,
                    question: "Welches Fragewort bedeutet 'Wo'?",
                    answers: ["Where", "When", "What", "Who"], correct: 0,
                    explanation: "Where fragt nach dem Ort." },
                { id: "sqank5l2u_leicht_2", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "leicht", points: 10,
                    question: "Welches Fragewort bedeutet 'Wann'?",
                    answers: ["When", "Where", "Why", "Which"], correct: 0,
                    explanation: "When fragt nach der Zeit." },
                { id: "sqank5l2u_leicht_3", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "leicht", points: 10,
                    question: "Welches Fragewort bedeutet 'Wer'?",
                    answers: ["Who", "How", "What", "Whose"], correct: 0,
                    explanation: "Who fragt nach einer Person." },
                { id: "sqank5l2u_leicht_4", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "leicht", points: 10,
                    question: "Ergänze: '___ is your name?'",
                    answers: ["What", "Who", "Where", "When"], correct: 0,
                    explanation: "Nach dem Namen fragt man mit What: What is your name?" }
            ],
            mittel: [
                { id: "sqank5l2u_mittel_1", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "mittel", points: 10,
                    question: "Ergänze: '___ are you late?' (Antwort: Because the bus was late.)",
                    answers: ["Why", "When", "Where", "Which"], correct: 0,
                    explanation: "Auf Why antwortet man mit because." },
                { id: "sqank5l2u_mittel_2", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "mittel", points: 10,
                    question: "Ergänze: '___ apples do you want?'",
                    answers: ["How many", "How much", "How long", "How old"], correct: 0,
                    explanation: "apples kann man zählen – also How many." },
                { id: "sqank5l2u_mittel_3", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "mittel", points: 10,
                    question: "Ergänze: '___ water is in the bottle?'",
                    answers: ["How much", "How many", "How long", "How far"], correct: 0,
                    explanation: "water kann man nicht zählen – also How much." },
                { id: "sqank5l2u_mittel_4", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "mittel", points: 10,
                    question: "Ergänze: '___ do you live?'",
                    answers: ["Where", "What", "Who", "Why"], correct: 0,
                    explanation: "Nach dem Wohnort fragt man mit Where." }
            ],
            schwer: [
                { id: "sqank5l2u_schwer_1", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "schwer", points: 10,
                    question: "Ergänze: '___ colour do you prefer, red or blue?'",
                    answers: ["Which", "What", "Who", "How"], correct: 0,
                    explanation: "Which fragt nach einer Auswahl aus wenigen Möglichkeiten." },
                { id: "sqank5l2u_schwer_2", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "schwer", points: 10,
                    question: "Welche Frage ist richtig gebildet?",
                    answers: ["Where do you go?", "Where you go?", "Where go you?", "Do where you go?"], correct: 0,
                    explanation: "Erst das Fragewort, dann die normale Frage mit do." },
                { id: "sqank5l2u_schwer_3", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "schwer", points: 10,
                    question: "Ergänze: '___ old are you?'",
                    answers: ["How", "What", "Which", "Who"], correct: 0,
                    explanation: "Nach dem Alter fragt man mit How old are you?" },
                { id: "sqank5l2u_schwer_4", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "schwer", points: 10,
                    question: "Worin unterscheiden sich 'how many' und 'how much'?",
                    answers: ["Zählbar oder nicht zählbar", "Höflich oder unhöflich", "Gegenwart oder Vergangenheit", "Einzahl oder Mehrzahl"], correct: 0,
                    explanation: "how many + zählbare Dinge, how much + nicht zählbare Mengen." }
            ]
        },
        test: [
            { id: "sqank5l2_test_1", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "leicht", points: 10,
                question: "Welches Fragewort bedeutet 'Warum'?",
                answers: ["Why", "How", "When", "Where"], correct: 0,
                explanation: "Why fragt nach dem Grund." },
            { id: "sqank5l2_test_2", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "leicht", points: 10,
                question: "Ergänze: '___ is your birthday?'",
                answers: ["When", "Where", "Who", "Which"], correct: 0,
                explanation: "Nach dem Datum fragt man mit When." },
            { id: "sqank5l2_test_3", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "mittel", points: 10,
                question: "Ergänze: '___ students are in your class?'",
                answers: ["How many", "How much", "How old", "How far"], correct: 0,
                explanation: "students kann man zählen – also How many." },
            { id: "sqank5l2_test_4", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "mittel", points: 10,
                question: "Ergänze: '___ is that girl over there?'",
                answers: ["Who", "What", "Where", "Which"], correct: 0,
                explanation: "Nach einer Person fragt man mit Who." },
            { id: "sqank5l2_test_5", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "schwer", points: 10,
                question: "Ergänze: '___ money do you need?'",
                answers: ["How much", "How many", "How long", "How old"], correct: 0,
                explanation: "money kann man nicht zählen – also How much." },
            { id: "sqank5l2_test_6", category: "kurs_sqan_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "question_words", difficulty: "schwer", points: 10,
                question: "Wo steht das Fragewort im Satz?",
                answers: ["Ganz am Anfang", "Direkt nach dem Verb", "Am Ende des Satzes", "Vor dem letzten Wort"], correct: 0,
                explanation: "Fragewörter stehen immer an erster Stelle: Where do you live?" }
        ],
        bestehenAb: 0.8
    },
    {
        id: "modl_k5_l1",
        kurs: "modals_k5",
        order: 1,
        icon: "💪",
        title: "can, must und mustn't",
        kurz: "Können, müssen und nicht dürfen",
        erklaerung: {
            intro: "<b>can</b> und <b>must</b> sind Modalverben. Sie sagen, was jemand <b>kann</b> oder <b>muss</b>. Nach ihnen steht immer die <b>Grundform</b> ohne to – und niemals ein -s bei he, she oder it.",
            beispiele: [
                "💪 Fähigkeit: I <b>can</b> swim. – She <b>can</b> play the piano. (kein cans!)",
                "🚫 Verneinung: He <b>can't</b> come today. (can not = cannot = can't)",
                "❗ Pflicht: You <b>must</b> do your homework.",
                "⛔ Verbot: You <b>mustn't</b> smoke here. – mustn't heißt <b>nicht dürfen</b>, nicht 'nicht müssen'."
            ],
            merksatz: "Nach can und must steht immer die Grundform ohne to und ohne -s. Fragen bildet man ohne do: Can you help me? mustn't bedeutet Verbot – etwas nicht tun dürfen."
        },
        uebung: {
            leicht: [
                { id: "modlk5l1u_leicht_1", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'I ___ swim very well.'",
                    answers: ["can", "cans", "to can", "am can"], correct: 0,
                    explanation: "can bleibt bei allen Personen gleich: I can swim." },
                { id: "modlk5l1u_leicht_2", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "leicht", points: 10,
                    question: "Welche Form steht nach 'can'?",
                    answers: ["Die Grundform ohne to", "Die Grundform mit to", "Die -ing-Form", "Die Form mit -s"], correct: 0,
                    explanation: "Nach can folgt immer die Grundform: can swim, can play." },
                { id: "modlk5l1u_leicht_3", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'She ___ play the piano.'",
                    answers: ["can", "cans", "can to", "is can"], correct: 0,
                    explanation: "Auch bei she bleibt can unverändert – kein -s." },
                { id: "modlk5l1u_leicht_4", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "leicht", points: 10,
                    question: "Wie lautet die Kurzform von 'cannot'?",
                    answers: ["can't", "cann't", "ca'nt", "cans't"], correct: 0,
                    explanation: "cannot wird zu can't verkürzt." }
            ],
            mittel: [
                { id: "modlk5l1u_mittel_1", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'You ___ do your homework.' (Pflicht)",
                    answers: ["must", "musts", "must to", "are must"], correct: 0,
                    explanation: "must drückt eine Pflicht aus und bleibt immer gleich." },
                { id: "modlk5l1u_mittel_2", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "mittel", points: 10,
                    question: "Wie bildet man eine Frage mit can?",
                    answers: ["Can you help me?", "Do you can help me?", "You can help me?", "Can do you help me?"], correct: 0,
                    explanation: "Bei Modalverben rückt das Verb nach vorne – ohne do." },
                { id: "modlk5l1u_mittel_3", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'You mustn't run here.'?",
                    answers: ["Du darfst hier nicht rennen", "Du musst hier nicht rennen", "Du kannst hier gut rennen", "Du solltest hier rennen"], correct: 0,
                    explanation: "mustn't ist ein Verbot – etwas nicht tun dürfen." },
                { id: "modlk5l1u_mittel_4", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'He ___ come to the party today.' (Verneinung)",
                    answers: ["can't", "cans not", "don't can", "not can"], correct: 0,
                    explanation: "Die Verneinung von can ist can't – ohne don't." }
            ],
            schwer: [
                { id: "modlk5l1u_schwer_1", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["She can speak French.", "She cans speak French.", "She can speaks French.", "She can to speak French."], correct: 0,
                    explanation: "Kein -s bei can und kein -s beim Vollverb: She can speak." },
                { id: "modlk5l1u_schwer_2", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "schwer", points: 10,
                    question: "Welcher Satz drückt ein Verbot aus?",
                    answers: ["You mustn't touch it.", "You must touch it.", "You can touch it.", "You could touch it."], correct: 0,
                    explanation: "mustn't verbietet etwas: Du darfst es nicht anfassen." },
                { id: "modlk5l1u_schwer_3", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'We ___ be quiet in the library.'",
                    answers: ["must", "musts", "are must", "must to"], correct: 0,
                    explanation: "must bleibt bei allen Personen gleich und steht ohne to." },
                { id: "modlk5l1u_schwer_4", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "schwer", points: 10,
                    question: "Was ist bei Modalverben anders als bei normalen Verben?",
                    answers: ["Kein -s bei he, she und it", "Sie stehen immer am Satzende", "Sie brauchen immer ein to", "Sie haben keine Verneinung"], correct: 0,
                    explanation: "Modalverben bleiben in allen Personen gleich: he can, she must." }
            ]
        },
        test: [
            { id: "modlk5l1_test_1", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "leicht", points: 10,
                question: "Ergänze: 'They ___ ride a bike.'",
                answers: ["can", "cans", "can to", "are can"], correct: 0,
                explanation: "can bleibt bei allen Personen unverändert." },
            { id: "modlk5l1_test_2", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "leicht", points: 10,
                question: "Welche Frage ist richtig gebildet?",
                answers: ["Can she sing?", "Does she can sing?", "She can sing?", "Can does she sing?"], correct: 0,
                explanation: "Bei can steht das Modalverb vorne – ohne do oder does." },
            { id: "modlk5l1_test_3", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "mittel", points: 10,
                question: "Was bedeutet 'must'?",
                answers: ["müssen", "können", "dürfen", "wollen"], correct: 0,
                explanation: "must drückt eine Pflicht aus: You must go now." },
            { id: "modlk5l1_test_4", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "mittel", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["He can play tennis.", "He can plays tennis.", "He cans play tennis.", "He can to play tennis."], correct: 0,
                explanation: "Nach can steht die Grundform ohne -s und ohne to." },
            { id: "modlk5l1_test_5", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "schwer", points: 10,
                question: "Was bedeutet 'You mustn't open the door.'?",
                answers: ["Du darfst die Tür nicht öffnen", "Du musst die Tür nicht öffnen", "Du kannst die Tür nicht öffnen", "Du solltest die Tür öffnen"], correct: 0,
                explanation: "mustn't ist ein klares Verbot." },
            { id: "modlk5l1_test_6", category: "kurs_modl_k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "modals", difficulty: "schwer", points: 10,
                question: "Wie verneint man 'She can swim.'?",
                answers: ["She can't swim.", "She doesn't can swim.", "She not can swim.", "She cans not swim."], correct: 0,
                explanation: "Modalverben verneint man direkt mit not: can not = can't." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "behv_k5_l2",
        kurs: "be_havegot_k5",
        order: 2,
        icon: "🔑",
        title: "Possessive 's – wem gehört was?",
        kurz: "Toms Fahrrad heißt Tom's bike",
        erklaerung: {
            intro: "Um Besitz auszudrücken, hängt man im Englischen ein <b>'s</b> an den Besitzer: <i>Tom's bike</i>. Der Besitzer steht immer <b>vor</b> dem Ding, das ihm gehört.",
            beispiele: [
                "🔑 Einzahl: <b>Tom's</b> bike – <b>my sister's</b> room – <b>the dog's</b> ball.",
                "👥 Mehrzahl auf -s: nur ein Apostroph: the <b>girls'</b> room, my <b>parents'</b> car.",
                "👶 Unregelmäßige Mehrzahl: <b>children's</b> books – hier wieder mit 's.",
                "🚪 Bei Sachen nimmt man oft <b>of</b>: the door <b>of</b> the car."
            ],
            merksatz: "Besitzer + 's + Ding. Endet der Besitzer schon auf -s (Mehrzahl), steht nur der Apostroph. Bei Dingen ohne Leben nimmt man lieber of."
        },
        uebung: {
            leicht: [
                { id: "behvk5l2u_leicht_1", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "leicht", points: 10,
                    question: "Wie sagt man 'Toms Fahrrad' auf Englisch?",
                    answers: ["Tom's bike", "Tom bike's", "The bike Tom", "Bike of Tom's"], correct: 0,
                    explanation: "Besitzer plus 's, dann das Ding: Tom's bike." },
                { id: "behvk5l2u_leicht_2", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "leicht", points: 10,
                    question: "Wo steht der Besitzer im englischen Satz?",
                    answers: ["Vor dem Ding", "Hinter dem Ding", "Ganz am Satzende", "Zwischen zwei Verben"], correct: 0,
                    explanation: "Erst der Besitzer mit 's, dann das Ding: my sister's room." },
                { id: "behvk5l2u_leicht_3", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "leicht", points: 10,
                    question: "Wie sagt man 'das Zimmer meiner Schwester'?",
                    answers: ["my sister's room", "my sister room's", "the room my sister", "my sisters room"], correct: 0,
                    explanation: "my sister's room – das 's hängt am Besitzer." },
                { id: "behvk5l2u_leicht_4", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "leicht", points: 10,
                    question: "Wie sagt man 'der Ball des Hundes'?",
                    answers: ["the dog's ball", "the dogs ball", "the ball dog's", "the ball's dog"], correct: 0,
                    explanation: "the dog's ball – Besitzer plus 's." }
            ],
            mittel: [
                { id: "behvk5l2u_mittel_1", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man 'das Zimmer der Mädchen' (mehrere girls)?",
                    answers: ["the girls' room", "the girls's room", "the girl's room", "the rooms girl"], correct: 0,
                    explanation: "Endet die Mehrzahl auf -s, steht nur der Apostroph: girls'." },
                { id: "behvk5l2u_mittel_2", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "mittel", points: 10,
                    question: "Wie sagt man 'das Auto meiner Eltern'?",
                    answers: ["my parents' car", "my parents's car", "my parent's car", "the car my parents"], correct: 0,
                    explanation: "parents endet auf -s – also nur ein Apostroph." },
                { id: "behvk5l2u_mittel_3", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "mittel", points: 10,
                    question: "Wie sagt man 'die Bücher der Kinder' (children)?",
                    answers: ["the children's books", "the childrens' books", "the children books", "the books children"], correct: 0,
                    explanation: "children endet nicht auf -s – deshalb ganz normal 's." },
                { id: "behvk5l2u_mittel_4", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "mittel", points: 10,
                    question: "Wann steht nur ein Apostroph ohne s?",
                    answers: ["Bei Mehrzahl auf -s", "Bei jeder Mehrzahl", "Bei allen Namen", "Bei allen Sachen"], correct: 0,
                    explanation: "the girls' room, my parents' car – die Mehrzahl endet schon auf -s." }
            ],
            schwer: [
                { id: "behvk5l2u_schwer_1", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "schwer", points: 10,
                    question: "Wie sagt man 'die Tür des Autos'?",
                    answers: ["the door of the car", "the car's door door", "the door the car", "the cars' the door"], correct: 0,
                    explanation: "Bei Sachen ohne Leben nimmt man meist of: the door of the car." },
                { id: "behvk5l2u_schwer_2", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "schwer", points: 10,
                    question: "Welcher Ausdruck ist richtig?",
                    answers: ["my brother's friend", "my brothers friend", "the friend my brother", "my brother friend's"], correct: 0,
                    explanation: "Der Besitzer bekommt das 's: my brother's friend." },
                { id: "behvk5l2u_schwer_3", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "schwer", points: 10,
                    question: "Was bedeutet 'the teachers' room'?",
                    answers: ["Das Zimmer mehrerer Lehrer", "Das Zimmer eines Lehrers", "Ein Lehrer im Zimmer", "Ein Zimmer ohne Lehrer"], correct: 0,
                    explanation: "Der Apostroph nach dem -s zeigt: es sind mehrere Lehrer." },
                { id: "behvk5l2u_schwer_4", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "schwer", points: 10,
                    question: "Worin unterscheiden sich 'the boy's toys' und 'the boys' toys'?",
                    answers: ["Ein Junge oder mehrere Jungen", "Alte oder neue Spielsachen", "Frage oder Aussagesatz", "Gegenwart oder Vergangenheit"], correct: 0,
                    explanation: "boy's = ein Junge, boys' = mehrere Jungen." }
            ]
        },
        test: [
            { id: "behvk5l2_test_1", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "leicht", points: 10,
                question: "Wie sagt man 'Annas Buch'?",
                answers: ["Anna's book", "Anna book's", "Book of Anna's", "Annas book"], correct: 0,
                explanation: "Besitzer plus 's: Anna's book." },
            { id: "behvk5l2_test_2", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "leicht", points: 10,
                question: "Wie sagt man 'der Hund meines Freundes'?",
                answers: ["my friend's dog", "my friends dog", "the dog my friend", "my friend dog's"], correct: 0,
                explanation: "my friend's dog – das 's hängt am Besitzer." },
            { id: "behvk5l2_test_3", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "mittel", points: 10,
                question: "Wie schreibt man 'das Auto der Nachbarn' (neighbours)?",
                answers: ["the neighbours' car", "the neighbours's car", "the neighbour's car", "the car neighbours"], correct: 0,
                explanation: "Mehrzahl auf -s bekommt nur den Apostroph." },
            { id: "behvk5l2_test_4", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "mittel", points: 10,
                question: "Wie sagt man 'das Spielzeug der Kinder' (children)?",
                answers: ["the children's toys", "the childrens' toys", "the children toys", "the toys children"], correct: 0,
                explanation: "children endet nicht auf -s – also normal mit 's." },
            { id: "behvk5l2_test_5", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "schwer", points: 10,
                question: "Wie sagt man 'das Ende des Films'?",
                answers: ["the end of the film", "the film's the end", "the end the film", "the films' end end"], correct: 0,
                explanation: "Bei Sachen nimmt man of: the end of the film." },
            { id: "behvk5l2_test_6", category: "kurs_behv_k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "possessive", difficulty: "schwer", points: 10,
                question: "Was zeigt der Apostroph in 'the girls' room'?",
                answers: ["Es sind mehrere Mädchen", "Es ist nur ein Mädchen", "Das Zimmer ist sehr groß", "Es ist eine Frage"], correct: 0,
                explanation: "Der Apostroph hinter dem -s steht für die Mehrzahl." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "adjs_k6_l1",
        kurs: "adjektive_steigern_k6",
        order: 1,
        icon: "📈",
        title: "Adjektive steigern und vergleichen",
        kurz: "schnell – schneller – am schnellsten",
        erklaerung: {
            intro: "Adjektive kann man <b>steigern</b>. Es gibt drei Stufen: die Grundform (<b>Positiv</b>), die Vergleichsform (<b>Komparativ</b>) und die Höchstform (<b>Superlativ</b>).",
            beispiele: [
                "📈 schnell – <b>schneller</b> – am <b>schnellsten</b> (Endungen -er und am -sten)",
                "🔤 Oft kommt ein Umlaut dazu: alt – <b>älter</b> – am ältesten · groß – <b>größer</b> – am größten",
                "❗ Unregelmäßig: gut – <b>besser</b> – am besten · viel – <b>mehr</b> – am meisten · gern – <b>lieber</b> – am liebsten",
                "⚖️ Vergleich: Beim Komparativ steht <b>als</b> (größer <b>als</b>), bei gleichen Dingen <b>wie</b> (so groß <b>wie</b>)."
            ],
            merksatz: "Komparativ mit -er, Superlativ mit am …-sten. Beim Vergleich mit dem Komparativ steht immer 'als', bei 'so … wie' steht 'wie'. Ein paar Adjektive sind unregelmäßig – die lernt man auswendig."
        },
        uebung: {
            leicht: [
                { id: "adjsk6l1u_leicht_1", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "leicht", points: 10,
                    question: "Wie lautet der Komparativ von 'schnell'?",
                    answers: ["schneller", "am schnellsten", "schnellste", "schnellig"], correct: 0,
                    explanation: "Der Komparativ wird mit der Endung -er gebildet: schneller." },
                { id: "adjsk6l1u_leicht_2", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "leicht", points: 10,
                    question: "Wie heißen die drei Steigerungsstufen?",
                    answers: ["Positiv, Komparativ, Superlativ", "Nominativ, Dativ, Akkusativ", "Präsens, Präteritum, Perfekt", "Subjekt, Prädikat, Objekt"], correct: 0,
                    explanation: "Grundform, Vergleichsform und Höchstform heißen Positiv, Komparativ und Superlativ." },
                { id: "adjsk6l1u_leicht_3", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "leicht", points: 10,
                    question: "Wie lautet der Superlativ von 'klein'?",
                    answers: ["am kleinsten", "kleiner", "kleinste als", "am kleiner"], correct: 0,
                    explanation: "Der Superlativ wird mit 'am' und der Endung -sten gebildet." },
                { id: "adjsk6l1u_leicht_4", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "leicht", points: 10,
                    question: "Wie lautet der Komparativ von 'gut'?",
                    answers: ["besser", "guter", "gutter", "am guten"], correct: 0,
                    explanation: "'gut' ist unregelmäßig: gut – besser – am besten." }
            ],
            mittel: [
                { id: "adjsk6l1u_mittel_1", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "mittel", points: 10,
                    question: "Wie lautet der Komparativ von 'alt'?",
                    answers: ["älter", "alter", "am ältesten", "altiger"], correct: 0,
                    explanation: "Bei vielen kurzen Adjektiven kommt ein Umlaut dazu: alt – älter." },
                { id: "adjsk6l1u_mittel_2", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["Er ist größer als sein Bruder.", "Er ist größer wie sein Bruder.", "Er ist größer als wie sein Bruder.", "Er ist am größer als sein Bruder."], correct: 0,
                    explanation: "Nach einem Komparativ steht immer 'als' – niemals 'wie'." },
                { id: "adjsk6l1u_mittel_3", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "mittel", points: 10,
                    question: "Wie lautet der Superlativ von 'viel'?",
                    answers: ["am meisten", "am vielsten", "mehrsten", "am mehr"], correct: 0,
                    explanation: "'viel' ist unregelmäßig: viel – mehr – am meisten." },
                { id: "adjsk6l1u_mittel_4", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["Sie ist so groß wie ich.", "Sie ist so groß als ich.", "Sie ist so größer wie ich.", "Sie ist am größten wie ich."], correct: 0,
                    explanation: "Bei 'so … wie' vergleicht man Gleiches – dort steht 'wie'." }
            ],
            schwer: [
                { id: "adjsk6l1u_schwer_1", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "schwer", points: 10,
                    question: "Wie lautet die Steigerung von 'gern'?",
                    answers: ["gern – lieber – am liebsten", "gern – gerner – am gernsten", "gern – mehr – am meisten", "gern – besser – am besten"], correct: 0,
                    explanation: "'gern' ist unregelmäßig: gern – lieber – am liebsten." },
                { id: "adjsk6l1u_schwer_2", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "schwer", points: 10,
                    question: "Wie lautet der Superlativ von 'hoch'?",
                    answers: ["am höchsten", "am hochsten", "am hoheren", "am höheren"], correct: 0,
                    explanation: "hoch – höher – am höchsten (mit Umlaut und ch)." },
                { id: "adjsk6l1u_schwer_3", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "schwer", points: 10,
                    question: "Welches Adjektiv kann man NICHT steigern?",
                    answers: ["tot", "schnell", "klein", "schön"], correct: 0,
                    explanation: "Etwas ist entweder tot oder nicht – solche Adjektive lassen sich nicht steigern." },
                { id: "adjsk6l1u_schwer_4", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["Heute ist es wärmer als gestern.", "Heute ist es wärmer wie gestern.", "Heute ist es warmer als gestern.", "Heute ist es am wärmer als gestern."], correct: 0,
                    explanation: "warm – wärmer (mit Umlaut), und nach dem Komparativ steht 'als'." }
            ]
        },
        test: [
            { id: "adjsk6l1_test_1", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "leicht", points: 10,
                question: "Wie lautet der Komparativ von 'laut'?",
                answers: ["lauter", "am lautesten", "lautste", "lautiger"], correct: 0,
                explanation: "Der Komparativ endet auf -er: lauter." },
            { id: "adjsk6l1_test_2", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "leicht", points: 10,
                question: "Wie lautet der Superlativ von 'schön'?",
                answers: ["am schönsten", "schöner", "am schöner", "schönste als"], correct: 0,
                explanation: "Superlativ mit am und -sten: am schönsten." },
            { id: "adjsk6l1_test_3", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "mittel", points: 10,
                question: "Welches Wort steht nach einem Komparativ?",
                answers: ["als", "wie", "so", "denn"], correct: 0,
                explanation: "größer als, schneller als – nach dem Komparativ steht immer 'als'." },
            { id: "adjsk6l1_test_4", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "mittel", points: 10,
                question: "Wie lautet die Steigerung von 'nah'?",
                answers: ["nah – näher – am nächsten", "nah – naher – am nahsten", "nah – mehr – am meisten", "nah – näher – am nähesten"], correct: 0,
                explanation: "nah – näher – am nächsten ist eine unregelmäßige Form." },
            { id: "adjsk6l1_test_5", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "schwer", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["Mein Rad ist so alt wie deins.", "Mein Rad ist so alt als deins.", "Mein Rad ist so älter wie deins.", "Mein Rad ist am ältesten wie deins."], correct: 0,
                explanation: "Bei gleichen Dingen heißt es 'so … wie'." },
            { id: "adjsk6l1_test_6", category: "kurs_adjs_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "adjektive", difficulty: "schwer", points: 10,
                question: "Wie lautet der Komparativ von 'dunkel'?",
                answers: ["dunkler", "dunkeler", "am dunkelsten", "dunkelig"], correct: 0,
                explanation: "Bei Adjektiven auf -el fällt das e weg: dunkel – dunkler." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "wofa_k6_l1",
        kurs: "wortfelder_k6",
        order: 1,
        icon: "🌳",
        title: "Wortfelder und Wortfamilien",
        kurz: "Ähnliche Bedeutung oder gleicher Wortstamm?",
        erklaerung: {
            intro: "Ein <b>Wortfeld</b> sammelt Wörter mit <b>ähnlicher Bedeutung</b>. Eine <b>Wortfamilie</b> sammelt Wörter mit demselben <b>Wortstamm</b>. Beides hilft, abwechslungsreich und treffend zu schreiben.",
            beispiele: [
                "🗣️ Wortfeld <b>sagen</b>: flüstern, rufen, murmeln, brüllen, antworten – ähnliche Bedeutung, andere Wörter.",
                "🚗 Wortfamilie <b>fahren</b>: die Fahrt, der Fahrer, das Fahrzeug, abfahren – alle mit dem Stamm <i>fahr</i>.",
                "✍️ Statt 'Er sagte laut' lieber: Er <b>rief</b>. Statt 'machen' lieber: bauen, kochen, basteln.",
                "🔍 Merke: gleiche Bedeutung → Wortfeld · gleicher Wortstamm → Wortfamilie."
            ],
            merksatz: "Wortfeld = viele verschiedene Wörter für eine ähnliche Bedeutung. Wortfamilie = viele Wörter aus einem gemeinsamen Wortstamm. Treffende Wörter machen einen Text lebendig."
        },
        uebung: {
            leicht: [
                { id: "wofak6l1u_leicht_1", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "leicht", points: 10,
                    question: "Was ist ein Wortfeld?",
                    answers: ["Wörter mit ähnlicher Bedeutung", "Wörter mit gleichem Wortstamm", "Wörter mit gleicher Silbenzahl", "Wörter mit gleichem Anfangsbuchstaben"], correct: 0,
                    explanation: "Im Wortfeld stehen Wörter, die etwas Ähnliches bedeuten." },
                { id: "wofak6l1u_leicht_2", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "leicht", points: 10,
                    question: "Was ist eine Wortfamilie?",
                    answers: ["Wörter mit gleichem Wortstamm", "Wörter mit ähnlicher Bedeutung", "Wörter aus derselben Sprache", "Wörter mit gleicher Wortart"], correct: 0,
                    explanation: "Eine Wortfamilie teilt sich denselben Wortstamm: fahren, Fahrt, Fahrer." },
                { id: "wofak6l1u_leicht_3", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "leicht", points: 10,
                    question: "Welches Wort gehört zum Wortfeld 'sagen'?",
                    answers: ["flüstern", "laufen", "backen", "schlafen"], correct: 0,
                    explanation: "flüstern ist eine Art zu sagen – es gehört ins Wortfeld." },
                { id: "wofak6l1u_leicht_4", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "leicht", points: 10,
                    question: "Welches Wort gehört zur Wortfamilie 'fahren'?",
                    answers: ["Fahrzeug", "Flugzeug", "Werkzeug", "Spielzeug"], correct: 0,
                    explanation: "Fahrzeug enthält den Wortstamm 'fahr'." }
            ],
            mittel: [
                { id: "wofak6l1u_mittel_1", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "mittel", points: 10,
                    question: "Welches Wort gehört NICHT zum Wortfeld 'gehen'?",
                    answers: ["singen", "schlendern", "marschieren", "spazieren"], correct: 0,
                    explanation: "singen hat mit Fortbewegung nichts zu tun." },
                { id: "wofak6l1u_mittel_2", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "mittel", points: 10,
                    question: "Wie heißt der Wortstamm von 'Spielzeug', 'spielen' und 'Spieler'?",
                    answers: ["spiel", "zeug", "spielen", "er"], correct: 0,
                    explanation: "Der gemeinsame Wortstamm ist 'spiel'." },
                { id: "wofak6l1u_mittel_3", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "mittel", points: 10,
                    question: "Welches Wort passt am besten? 'Der Junge ___ vor Schmerz.'",
                    answers: ["schrie", "sagte", "sprach", "erzählte"], correct: 0,
                    explanation: "Bei Schmerz passt ein starkes Wort aus dem Wortfeld: schrie." },
                { id: "wofak6l1u_mittel_4", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "mittel", points: 10,
                    question: "Welches Wort gehört zur Wortfamilie 'Haus'?",
                    answers: ["häuslich", "Hauch spüren", "Haut pflegen", "Haufen bilden"], correct: 0,
                    explanation: "Nur häuslich enthält den Wortstamm 'haus' – die anderen klingen nur ähnlich." }
            ],
            schwer: [
                { id: "wofak6l1u_schwer_1", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "schwer", points: 10,
                    question: "Warum sollte man das Wort 'machen' oft ersetzen?",
                    answers: ["Es ist ungenau und blass", "Es ist grammatisch falsch", "Es ist zu lang zum Schreiben", "Es ist ein Fremdwort"], correct: 0,
                    explanation: "Treffende Verben wie bauen, kochen oder basteln sagen viel mehr aus." },
                { id: "wofak6l1u_schwer_2", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "schwer", points: 10,
                    question: "Welches Wortpaar bildet eine Wortfamilie?",
                    answers: ["schreiben und Schrift", "schreiben und tippen", "schreiben und malen", "schreiben und lesen"], correct: 0,
                    explanation: "schreiben und Schrift teilen den Wortstamm – die anderen sind nur bedeutungsähnlich." },
                { id: "wofak6l1u_schwer_3", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "schwer", points: 10,
                    question: "Welches Wortpaar bildet ein Wortfeld?",
                    answers: ["rennen und sprinten", "rennen und Rennfahrer", "rennen und Rennbahn", "rennen und Wettrennen"], correct: 0,
                    explanation: "rennen und sprinten bedeuten Ähnliches – die anderen teilen nur den Wortstamm." },
                { id: "wofak6l1u_schwer_4", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "schwer", points: 10,
                    question: "Welches Wort passt am besten? 'Sie ___ leise ins Ohr.'",
                    answers: ["flüsterte", "brüllte", "rief", "schrie"], correct: 0,
                    explanation: "Zu 'leise ins Ohr' passt nur flüsterte." }
            ]
        },
        test: [
            { id: "wofak6l1_test_1", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "leicht", points: 10,
                question: "Welches Wort gehört zum Wortfeld 'schauen'?",
                answers: ["beobachten", "sprechen", "rennen", "hören"], correct: 0,
                explanation: "beobachten ist eine Art des Schauens." },
            { id: "wofak6l1_test_2", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "leicht", points: 10,
                question: "Welches Wort gehört zur Wortfamilie 'Schule'?",
                answers: ["schulisch", "Schulter", "Schutz", "Schale"], correct: 0,
                explanation: "schulisch enthält den Wortstamm 'schul'." },
            { id: "wofak6l1_test_3", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "mittel", points: 10,
                question: "Woran erkennt man eine Wortfamilie?",
                answers: ["Am gemeinsamen Wortstamm", "An der ähnlichen Bedeutung", "An der gleichen Silbenzahl", "Am gleichen Artikel"], correct: 0,
                explanation: "Alle Wörter einer Wortfamilie haben denselben Stamm." },
            { id: "wofak6l1_test_4", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "mittel", points: 10,
                question: "Welches Wort passt am besten? 'Der Hund ___ laut den Briefträger an.'",
                answers: ["bellte", "sagte", "flüsterte", "murmelte"], correct: 0,
                explanation: "Für einen Hund ist bellte das treffende Verb." },
            { id: "wofak6l1_test_5", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "schwer", points: 10,
                question: "Welches Wort gehört NICHT zur Wortfamilie 'fahren'?",
                answers: ["Fahne schwenken", "Fahrrad", "Abfahrt", "Fahrschein"], correct: 0,
                explanation: "Fahne hat mit fahren nichts zu tun – die übrigen enthalten den Stamm 'fahr'." },
            { id: "wofak6l1_test_6", category: "kurs_wofa_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "wortschatz", difficulty: "schwer", points: 10,
                question: "Wozu benutzt man ein Wortfeld beim Schreiben?",
                answers: ["Um Wiederholungen zu vermeiden", "Um mehr Kommas zu setzen", "Um längere Sätze zu bauen", "Um die Zeitform zu ändern"], correct: 0,
                explanation: "Statt immer 'sagte' zu schreiben, wählt man abwechselnd treffendere Wörter." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "silb_k6_l1",
        kurs: "silben_dehnung_k6",
        order: 1,
        icon: "🪓",
        title: "Silbentrennung, Dehnung und Schärfung",
        kurz: "Wo man trennt – und warum manche Wörter doppelt schreiben",
        erklaerung: {
            intro: "Wörter trennt man nach <b>Sprechsilben</b>. Ob ein Vokal <b>lang</b> oder <b>kurz</b> klingt, entscheidet außerdem über die Schreibweise: langer Vokal wird oft <b>gedehnt</b>, kurzer Vokal führt zur <b>Schärfung</b> mit Doppelkonsonant.",
            beispiele: [
                "🪓 Trennen nach Sprechsilben: Fens-ter, Kin-der, Mut-ter, Bril-le.",
                "❗ <b>ck</b> bleibt zusammen: Zu-cker, Brü-cke. <b>st</b> wird getrennt: Wes-te, Kis-te.",
                "🔊 Dehnung (langer Vokal): das lange i wird zu <b>ie</b> (Biene), oft steht ein Dehnungs-<b>h</b> (Zahn, fahren) oder ein Doppelvokal (Boot, Meer).",
                "🔉 Schärfung (kurzer Vokal): der Konsonant wird verdoppelt – Kamm, rennen, Sonne."
            ],
            merksatz: "Nach kurzem Vokal folgt ein doppelter Konsonant (Schärfung), nach langem Vokal ie, h oder Doppelvokal (Dehnung). Beim Trennen zählt die Sprechsilbe – ck bleibt zusammen, st wird getrennt."
        },
        uebung: {
            leicht: [
                { id: "silbk6l1u_leicht_1", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie trennt man das Wort 'Fenster' richtig?",
                    answers: ["Fens-ter", "Fen-ster", "Fenst-er", "Fe-nster"], correct: 0,
                    explanation: "Nach der Sprechsilbe: Fens-ter." },
                { id: "silbk6l1u_leicht_2", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wonach richtet sich die Silbentrennung?",
                    answers: ["Nach den Sprechsilben", "Nach der Wortlänge", "Nach dem Artikel", "Nach der Wortart"], correct: 0,
                    explanation: "Man spricht das Wort langsam – so hört man die Silben." },
                { id: "silbk6l1u_leicht_3", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Welches Wort zeigt eine Dehnung mit ie?",
                    answers: ["Biene", "Bitte", "Bissen", "Binde"], correct: 0,
                    explanation: "Das lange i wird als ie geschrieben: Biene." },
                { id: "silbk6l1u_leicht_4", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Was passiert nach einem kurzen Vokal?",
                    answers: ["Der Konsonant wird verdoppelt", "Der Vokal wird verdoppelt", "Ein h wird eingefügt", "Ein e wird angehängt"], correct: 0,
                    explanation: "Kurzer Vokal führt zur Schärfung: Kamm, rennen, Sonne." }
            ],
            mittel: [
                { id: "silbk6l1u_mittel_1", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie trennt man 'Zucker' richtig?",
                    answers: ["Zu-cker", "Zuc-ker", "Zuck-er", "Z-ucker"], correct: 0,
                    explanation: "ck wird nicht getrennt und wandert komplett in die zweite Silbe." },
                { id: "silbk6l1u_mittel_2", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie trennt man 'Weste' richtig?",
                    answers: ["Wes-te", "We-ste", "West-e", "West-te"], correct: 0,
                    explanation: "st darf getrennt werden: Wes-te." },
                { id: "silbk6l1u_mittel_3", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist richtig geschrieben?",
                    answers: ["Sonne", "Sone", "Sohne", "Soone"], correct: 0,
                    explanation: "Das o ist kurz – deshalb der doppelte Konsonant: Sonne." },
                { id: "silbk6l1u_mittel_4", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort zeigt ein Dehnungs-h?",
                    answers: ["Zahn", "Zange", "Zacke", "Zunge"], correct: 0,
                    explanation: "Nur in Zahn steht ein stummes h, das den Vokal lang macht." }
            ],
            schwer: [
                { id: "silbk6l1u_schwer_1", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist richtig geschrieben?",
                    answers: ["Boot", "Bot", "Boht", "Bott"], correct: 0,
                    explanation: "Der Doppelvokal oo macht den Vokal lang: Boot." },
                { id: "silbk6l1u_schwer_2", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Warum schreibt man 'rennen' mit doppeltem n?",
                    answers: ["Das e wird kurz gesprochen", "Das e wird lang gesprochen", "Es ist ein Fremdwort", "Es hat zwei Silben"], correct: 0,
                    explanation: "Kurzer Vokal bedeutet Schärfung – der Konsonant wird verdoppelt." },
                { id: "silbk6l1u_schwer_3", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Wie trennt man 'Brücke' richtig?",
                    answers: ["Brü-cke", "Brück-e", "Brüc-ke", "Br-ücke"], correct: 0,
                    explanation: "ck bleibt zusammen und geht in die zweite Silbe: Brü-cke." },
                { id: "silbk6l1u_schwer_4", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welche Wörter zeigen den Unterschied kurz und lang?",
                    answers: ["Bitte und Biene", "Biene und Wiese", "Bitte und Mitte", "Sonne und Wonne"], correct: 0,
                    explanation: "In Bitte ist das i kurz (Doppelkonsonant), in Biene lang (ie)." }
            ]
        },
        test: [
            { id: "silbk6l1_test_1", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                question: "Wie trennt man 'Kinder' richtig?",
                answers: ["Kin-der", "Ki-nder", "Kind-er", "K-inder"], correct: 0,
                explanation: "Nach der Sprechsilbe: Kin-der." },
            { id: "silbk6l1_test_2", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                question: "Welches Wort ist richtig geschrieben?",
                answers: ["Kamm", "Kam", "Kahm", "Kaam"], correct: 0,
                explanation: "Das a ist kurz – deshalb der doppelte Konsonant: Kamm." },
            { id: "silbk6l1_test_3", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                question: "Welche Buchstabenfolge wird beim Trennen NICHT getrennt?",
                answers: ["ck", "st", "nd", "rt"], correct: 0,
                explanation: "ck bleibt immer zusammen: Zu-cker, Brü-cke." },
            { id: "silbk6l1_test_4", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                question: "Welches Wort zeigt eine Dehnung?",
                answers: ["Wiese", "Wisse", "Wippe", "Witze"], correct: 0,
                explanation: "Das lange i wird als ie geschrieben: Wiese." },
            { id: "silbk6l1_test_5", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                question: "Wie trennt man 'Mutter' richtig?",
                answers: ["Mut-ter", "Mu-tter", "Mutt-er", "M-utter"], correct: 0,
                explanation: "Bei doppeltem Konsonant trennt man zwischen den beiden Buchstaben." },
            { id: "silbk6l1_test_6", category: "kurs_silb_k6_l1", area: "schule", grade: 6, subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                question: "Woran erkennt man, dass ein Konsonant verdoppelt wird?",
                answers: ["Der Vokal davor ist kurz", "Der Vokal davor ist lang", "Das Wort hat drei Silben", "Das Wort ist ein Nomen"], correct: 0,
                explanation: "Nach kurzem Vokal folgt die Schärfung mit doppeltem Konsonanten." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "advm_k6_l1",
        kurs: "adverbs_k6",
        order: 1,
        icon: "🏃",
        title: "Adverbs of manner",
        kurz: "Wie jemand etwas tut – meist mit -ly",
        erklaerung: {
            intro: "Ein <b>Adjektiv</b> beschreibt ein Nomen (a <i>slow</i> car). Ein <b>Adverb</b> beschreibt ein Verb – also <b>wie</b> jemand etwas tut (he drives <i>slowly</i>). Gebildet wird es meist mit <b>-ly</b>.",
            beispiele: [
                "🐌 slow → <b>slowly</b> · quick → <b>quickly</b> · careful → <b>carefully</b>",
                "🔤 Endet das Adjektiv auf -y: happy → <b>happily</b> · easy → <b>easily</b>",
                "❗ Unregelmäßig: good → <b>well</b> · fast → <b>fast</b> · hard → <b>hard</b>",
                "🔍 Vergleiche: He is a <b>careful</b> driver. (Adjektiv) – He drives <b>carefully</b>. (Adverb)"
            ],
            merksatz: "Adjektiv beschreibt ein Nomen, Adverb beschreibt ein Verb. Adverbien enden meist auf -ly. Merken: good wird zu well, fast und hard bleiben unverändert."
        },
        uebung: {
            leicht: [
                { id: "advmk6l1u_leicht_1", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "leicht", points: 10,
                    question: "Wie lautet das Adverb von 'slow'?",
                    answers: ["slowly", "slower", "slowy", "slowness"], correct: 0,
                    explanation: "Die meisten Adverbien bekommen die Endung -ly: slowly." },
                { id: "advmk6l1u_leicht_2", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "leicht", points: 10,
                    question: "Was beschreibt ein Adverb of manner?",
                    answers: ["Wie jemand etwas tut", "Wer etwas tut", "Wann etwas passiert", "Wo etwas passiert"], correct: 0,
                    explanation: "Adverbs of manner sagen, auf welche Art und Weise etwas geschieht." },
                { id: "advmk6l1u_leicht_3", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "leicht", points: 10,
                    question: "Wie lautet das Adverb von 'quick'?",
                    answers: ["quickly", "quicker", "quicky", "quickness"], correct: 0,
                    explanation: "quick + ly = quickly." },
                { id: "advmk6l1u_leicht_4", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'She sings ___.' (beautiful)",
                    answers: ["beautifully", "beautiful", "beautifuly", "beauty"], correct: 0,
                    explanation: "Das Adverb beschreibt das Verb sings: beautifully." }
            ],
            mittel: [
                { id: "advmk6l1u_mittel_1", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "mittel", points: 10,
                    question: "Wie lautet das Adverb von 'happy'?",
                    answers: ["happily", "happyly", "happy", "happiness"], correct: 0,
                    explanation: "Bei Adjektiven auf -y wird das y zu i: happy → happily." },
                { id: "advmk6l1u_mittel_2", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "mittel", points: 10,
                    question: "Wie lautet das Adverb von 'good'?",
                    answers: ["well", "goodly", "gooder", "goodness"], correct: 0,
                    explanation: "'good' ist unregelmäßig – das Adverb heißt well." },
                { id: "advmk6l1u_mittel_3", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'He is a ___ driver.'",
                    answers: ["careful", "carefully", "carefuly", "carefulness"], correct: 0,
                    explanation: "Vor dem Nomen driver steht das Adjektiv careful." },
                { id: "advmk6l1u_mittel_4", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'He drives ___.'",
                    answers: ["carefully", "careful", "carefuly", "carefulness"], correct: 0,
                    explanation: "Hier wird das Verb drives beschrieben – also das Adverb carefully." }
            ],
            schwer: [
                { id: "advmk6l1u_schwer_1", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "schwer", points: 10,
                    question: "Wie lautet das Adverb von 'fast'?",
                    answers: ["fast", "fastly", "faster", "fastily"], correct: 0,
                    explanation: "fast bleibt unverändert: He runs fast." },
                { id: "advmk6l1u_schwer_2", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'She speaks English very ___.'",
                    answers: ["well", "good", "goodly", "better good"], correct: 0,
                    explanation: "Das Verb speaks braucht ein Adverb – das Adverb zu good ist well." },
                { id: "advmk6l1u_schwer_3", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "schwer", points: 10,
                    question: "Wie lautet das Adverb von 'terrible'?",
                    answers: ["terribly", "terriblely", "terribleness", "terribl"], correct: 0,
                    explanation: "Bei -le fällt das e weg: terrible → terribly." },
                { id: "advmk6l1u_schwer_4", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["The test was easy.", "The test was easily.", "The test was easyly.", "The test was easiness."], correct: 0,
                    explanation: "Nach 'was' steht das Adjektiv, weil es den Test beschreibt – nicht das Adverb." }
            ]
        },
        test: [
            { id: "advmk6l1_test_1", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "leicht", points: 10,
                question: "Wie lautet das Adverb von 'loud'?",
                answers: ["loudly", "louder", "loudy", "loudness"], correct: 0,
                explanation: "loud + ly = loudly." },
            { id: "advmk6l1_test_2", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "leicht", points: 10,
                question: "Welche Endung haben die meisten Adverbien?",
                answers: ["-ly", "-er", "-est", "-ing"], correct: 0,
                explanation: "Die typische Adverb-Endung ist -ly." },
            { id: "advmk6l1_test_3", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "mittel", points: 10,
                question: "Wie lautet das Adverb von 'easy'?",
                answers: ["easily", "easyly", "easy", "easiness"], correct: 0,
                explanation: "y wird zu i: easy → easily." },
            { id: "advmk6l1_test_4", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "mittel", points: 10,
                question: "Ergänze: 'They played ___ yesterday.' (good)",
                answers: ["well", "good", "goodly", "gooder"], correct: 0,
                explanation: "Das Verb played braucht ein Adverb: well." },
            { id: "advmk6l1_test_5", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "schwer", points: 10,
                question: "Welches Wort ändert sich als Adverb NICHT?",
                answers: ["hard", "slow", "quick", "careful"], correct: 0,
                explanation: "hard bleibt hard: He works hard." },
            { id: "advmk6l1_test_6", category: "kurs_advm_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "adverbs", difficulty: "schwer", points: 10,
                question: "Was beschreibt ein Adjektiv?",
                answers: ["Ein Nomen", "Ein Verb", "Ein Adverb", "Einen ganzen Satz"], correct: 0,
                explanation: "Adjektive beschreiben Nomen, Adverbien beschreiben Verben." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "ther_k6_l1",
        kurs: "there_is_k6",
        order: 1,
        icon: "🏠",
        title: "there is und there are",
        kurz: "Es gibt … – Einzahl oder Mehrzahl?",
        erklaerung: {
            intro: "Mit <b>there is</b> und <b>there are</b> sagt man, dass etwas <b>vorhanden ist</b> ('es gibt'). <b>there is</b> steht bei Einzahl und bei nicht zählbaren Dingen, <b>there are</b> bei Mehrzahl.",
            beispiele: [
                "🏠 Einzahl: <b>There is</b> a cat in the garden.",
                "👥 Mehrzahl: <b>There are</b> three cats in the garden.",
                "🚫 Verneinung: There <b>isn't</b> any milk. – There <b>aren't</b> any apples.",
                "❓ Frage: <b>Is there</b> a bus stop here? – <b>Are there</b> any shops? Kurzantwort: Yes, there is."
            ],
            merksatz: "there is + Einzahl oder nicht zählbar, there are + Mehrzahl. In Verneinung und Frage steht dahinter meist any."
        },
        uebung: {
            leicht: [
                { id: "therk6l1u_leicht_1", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "leicht", points: 10,
                    question: "Ergänze: '___ a cat in the garden.'",
                    answers: ["There is", "There are", "There be", "There am"], correct: 0,
                    explanation: "a cat ist Einzahl – also there is." },
                { id: "therk6l1u_leicht_2", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "leicht", points: 10,
                    question: "Ergänze: '___ three books on the desk.'",
                    answers: ["There are", "There is", "There be", "There was"], correct: 0,
                    explanation: "three books ist Mehrzahl – also there are." },
                { id: "therk6l1u_leicht_3", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "leicht", points: 10,
                    question: "Wann benutzt man 'there are'?",
                    answers: ["Bei Mehrzahl", "Bei Einzahl", "Bei Fragen", "Bei Verneinung"], correct: 0,
                    explanation: "there are steht immer, wenn mehrere Dinge gemeint sind." },
                { id: "therk6l1u_leicht_4", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "leicht", points: 10,
                    question: "Was bedeutet 'there is'?",
                    answers: ["es gibt", "es geht", "es kommt", "es macht"], correct: 0,
                    explanation: "there is und there are heißen beide 'es gibt'." }
            ],
            mittel: [
                { id: "therk6l1u_mittel_1", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "mittel", points: 10,
                    question: "Ergänze: '___ any milk in the fridge?'",
                    answers: ["Is there", "Are there", "There is", "There are"], correct: 0,
                    explanation: "milk ist nicht zählbar – Frageform: Is there …?" },
                { id: "therk6l1u_mittel_2", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'There ___ any apples left.'",
                    answers: ["aren't", "isn't", "not are", "doesn't"], correct: 0,
                    explanation: "apples ist Mehrzahl – verneint mit aren't any." },
                { id: "therk6l1u_mittel_3", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "mittel", points: 10,
                    question: "Ergänze: '___ any shops in this street?'",
                    answers: ["Are there", "Is there", "There are", "There is"], correct: 0,
                    explanation: "shops ist Mehrzahl – Frageform: Are there …?" },
                { id: "therk6l1u_mittel_4", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "mittel", points: 10,
                    question: "Wie lautet die kurze Antwort auf 'Is there a park?'",
                    answers: ["Yes, there is.", "Yes, there are.", "Yes, it is there.", "Yes, there be."], correct: 0,
                    explanation: "Die Kurzantwort wiederholt die Form: Yes, there is." }
            ],
            schwer: [
                { id: "therk6l1u_schwer_1", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "schwer", points: 10,
                    question: "Ergänze: '___ some water in the glass.'",
                    answers: ["There is", "There are", "There were", "There have"], correct: 0,
                    explanation: "water ist nicht zählbar – also there is." },
                { id: "therk6l1u_schwer_2", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["There are many people here.", "There is many people here.", "There be many people here.", "There am many people here."], correct: 0,
                    explanation: "people ist Mehrzahl – also there are." },
                { id: "therk6l1u_schwer_3", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'There ___ any bread in the kitchen.'",
                    answers: ["isn't", "aren't", "not is", "doesn't"], correct: 0,
                    explanation: "bread ist nicht zählbar – verneint mit isn't any." },
                { id: "therk6l1u_schwer_4", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "schwer", points: 10,
                    question: "Welches Wort steht meist nach there isn't oder there aren't?",
                    answers: ["any", "some", "much", "a lot"], correct: 0,
                    explanation: "In Verneinungen steht any: There aren't any chairs." }
            ]
        },
        test: [
            { id: "therk6l1_test_1", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "leicht", points: 10,
                question: "Ergänze: '___ a bus stop near here.'",
                answers: ["There is", "There are", "There be", "There am"], correct: 0,
                explanation: "a bus stop ist Einzahl – also there is." },
            { id: "therk6l1_test_2", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "leicht", points: 10,
                question: "Ergänze: '___ two dogs in the park.'",
                answers: ["There are", "There is", "There be", "There was"], correct: 0,
                explanation: "two dogs ist Mehrzahl – also there are." },
            { id: "therk6l1_test_3", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "mittel", points: 10,
                question: "Ergänze: '___ any eggs in the fridge?'",
                answers: ["Are there", "Is there", "There are", "There is"], correct: 0,
                explanation: "eggs ist Mehrzahl – Frage mit Are there." },
            { id: "therk6l1_test_4", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "mittel", points: 10,
                question: "Ergänze: 'There ___ a problem with the bike.'",
                answers: ["is", "are", "be", "am"], correct: 0,
                explanation: "a problem ist Einzahl – also is." },
            { id: "therk6l1_test_5", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "schwer", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["There isn't any sugar.", "There aren't any sugar.", "There isn't some sugar.", "There not is any sugar."], correct: 0,
                explanation: "sugar ist nicht zählbar – isn't any sugar." },
            { id: "therk6l1_test_6", category: "kurs_ther_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "there_is", difficulty: "schwer", points: 10,
                question: "Wie lautet die Kurzantwort auf 'Are there any pens?'",
                answers: ["No, there aren't.", "No, there isn't.", "No, they aren't.", "No, there don't."], correct: 0,
                explanation: "Die Kurzantwort greift die Form auf: No, there aren't." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "pron_k6_l1",
        kurs: "pronouns_k6",
        order: 1,
        icon: "👤",
        title: "Pronouns – I, me, my, mine",
        kurz: "Wer handelt, wen es trifft und wem es gehört",
        erklaerung: {
            intro: "Englische Pronomen haben verschiedene Formen. Als <b>Subjekt</b> stehen I, you, he … Als <b>Objekt</b> stehen me, you, him … Für Besitz gibt es <b>my, your, his …</b> (vor einem Nomen) und <b>mine, yours, his …</b> (allein stehend).",
            beispiele: [
                "👤 Subjekt: <b>I</b> like her. – <b>She</b> knows him. (steht vor dem Verb)",
                "🎯 Objekt: She knows <b>me</b>. – I see <b>them</b>. (steht nach dem Verb)",
                "🔑 Vor einem Nomen: <b>my</b> book, <b>your</b> bike, <b>their</b> house.",
                "✋ Allein stehend: This book is <b>mine</b>. – Is this bike <b>yours</b>?"
            ],
            merksatz: "Vor dem Verb steht die Subjektform (I, he, we), nach dem Verb die Objektform (me, him, us). my/your/our stehen immer vor einem Nomen, mine/yours/ours stehen allein."
        },
        uebung: {
            leicht: [
                { id: "pronk6l1u_leicht_1", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "leicht", points: 10,
                    question: "Wie lautet die Objektform von 'I'?",
                    answers: ["me", "my", "mine", "am"], correct: 0,
                    explanation: "Nach dem Verb steht me: She knows me." },
                { id: "pronk6l1u_leicht_2", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "leicht", points: 10,
                    question: "Wie lautet die Objektform von 'he'?",
                    answers: ["him", "his", "he", "her"], correct: 0,
                    explanation: "Die Objektform von he ist him: I see him." },
                { id: "pronk6l1u_leicht_3", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "leicht", points: 10,
                    question: "Ergänze: '___ is my brother.'",
                    answers: ["He", "Him", "His", "Her"], correct: 0,
                    explanation: "Vor dem Verb steht die Subjektform: He is my brother." },
                { id: "pronk6l1u_leicht_4", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'This is ___ book.' (ich)",
                    answers: ["my", "mine", "me", "I"], correct: 0,
                    explanation: "Vor einem Nomen steht my: my book." }
            ],
            mittel: [
                { id: "pronk6l1u_mittel_1", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'This book is ___.' (ich)",
                    answers: ["mine", "my", "me", "I"], correct: 0,
                    explanation: "Allein stehend – ohne Nomen dahinter – heißt es mine." },
                { id: "pronk6l1u_mittel_2", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Can you help ___?' (wir)",
                    answers: ["us", "we", "our", "ours"], correct: 0,
                    explanation: "Nach dem Verb steht die Objektform: help us." },
                { id: "pronk6l1u_mittel_3", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "mittel", points: 10,
                    question: "Ergänze: '___ live in Berlin.' (sie, Mehrzahl)",
                    answers: ["They", "Them", "Their", "Theirs"], correct: 0,
                    explanation: "Vor dem Verb steht die Subjektform They." },
                { id: "pronk6l1u_mittel_4", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Is this ___ bike?' (du)",
                    answers: ["your", "yours", "you", "your's"], correct: 0,
                    explanation: "Vor dem Nomen bike steht your." }
            ],
            schwer: [
                { id: "pronk6l1u_schwer_1", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'Is this bike ___?' (du)",
                    answers: ["yours", "your", "you", "your's"], correct: 0,
                    explanation: "Ohne Nomen dahinter steht yours – niemals mit Apostroph." },
                { id: "pronk6l1u_schwer_2", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["She gave me the ball.", "She gave I the ball.", "She gave my the ball.", "She gave mine the ball."], correct: 0,
                    explanation: "Nach dem Verb steht die Objektform me." },
                { id: "pronk6l1u_schwer_3", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "schwer", points: 10,
                    question: "Worin unterscheiden sich 'my' und 'mine'?",
                    answers: ["my steht vor einem Nomen", "mine steht vor einem Nomen", "my steht nur in Fragen", "mine steht nur in Fragen"], correct: 0,
                    explanation: "my book – aber: This book is mine." },
                { id: "pronk6l1u_schwer_4", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'I know ___ very well.' (sie, eine Person)",
                    answers: ["her", "she", "hers", "here"], correct: 0,
                    explanation: "Nach dem Verb know steht die Objektform her." }
            ]
        },
        test: [
            { id: "pronk6l1_test_1", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "leicht", points: 10,
                question: "Wie lautet die Objektform von 'they'?",
                answers: ["them", "their", "theirs", "they"], correct: 0,
                explanation: "Die Objektform von they ist them." },
            { id: "pronk6l1_test_2", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "leicht", points: 10,
                question: "Ergänze: '___ are my friends.'",
                answers: ["They", "Them", "Their", "Theirs"], correct: 0,
                explanation: "Vor dem Verb steht die Subjektform They." },
            { id: "pronk6l1_test_3", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "mittel", points: 10,
                question: "Ergänze: 'That is ___ house.' (wir)",
                answers: ["our", "ours", "us", "we"], correct: 0,
                explanation: "Vor dem Nomen house steht our." },
            { id: "pronk6l1_test_4", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "mittel", points: 10,
                question: "Ergänze: 'That house is ___.' (wir)",
                answers: ["ours", "our", "us", "we"], correct: 0,
                explanation: "Ohne Nomen dahinter steht ours." },
            { id: "pronk6l1_test_5", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "schwer", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["He plays with them.", "He plays with they.", "He plays with their.", "He plays with theirs."], correct: 0,
                explanation: "Nach einer Präposition steht die Objektform them." },
            { id: "pronk6l1_test_6", category: "kurs_pron_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "pronouns", difficulty: "schwer", points: 10,
                question: "Wo steht die Subjektform eines Pronomens?",
                answers: ["Vor dem Verb", "Nach dem Verb", "Vor dem Nomen", "Am Satzende"], correct: 0,
                explanation: "I, he, she, we, they stehen als Subjekt vor dem Verb." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "word_k6_l1",
        kurs: "word_order_k6",
        order: 1,
        icon: "🧩",
        title: "Word order – die englische Satzstellung",
        kurz: "Subjekt, Verb, Objekt – und place before time",
        erklaerung: {
            intro: "Im Englischen ist die Satzstellung viel strenger als im Deutschen. Die Grundregel lautet: <b>Subjekt – Verb – Objekt</b>. Kommen Angaben dazu, steht der <b>Ort vor der Zeit</b>.",
            beispiele: [
                "🧩 S – V – O: <b>I</b> <b>play</b> <b>football</b>.",
                "📍🕐 Place before time: I play football <b>in the park</b> <b>every Saturday</b>.",
                "🔁 Häufigkeitsadverbien stehen <b>vor</b> dem Vollverb: I <b>often</b> play tennis.",
                "❗ Aber nach einer Form von be: I <b>am often</b> late."
            ],
            merksatz: "Subjekt, Verb, Objekt – in dieser Reihenfolge. Ortsangabe vor Zeitangabe. Häufigkeitsadverbien wie often, always oder never stehen vor dem Vollverb, aber nach am/is/are."
        },
        uebung: {
            leicht: [
                { id: "wordk6l1u_leicht_1", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "leicht", points: 10,
                    question: "Wie lautet die englische Grundstellung im Satz?",
                    answers: ["Subjekt – Verb – Objekt", "Verb – Subjekt – Objekt", "Objekt – Verb – Subjekt", "Subjekt – Objekt – Verb"], correct: 0,
                    explanation: "Im Englischen gilt fast immer S – V – O: I play football." },
                { id: "wordk6l1u_leicht_2", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "leicht", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["I play football.", "Play I football.", "Football I play.", "I football play."], correct: 0,
                    explanation: "Subjekt, dann Verb, dann Objekt." },
                { id: "wordk6l1u_leicht_3", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "leicht", points: 10,
                    question: "Was steht im englischen Satz zuerst: Ort oder Zeit?",
                    answers: ["Der Ort", "Die Zeit", "Das ist egal", "Beides zusammen"], correct: 0,
                    explanation: "Place before time: erst der Ort, dann die Zeit." },
                { id: "wordk6l1u_leicht_4", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "leicht", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["She reads a book.", "Reads she a book.", "A book she reads.", "She a book reads."], correct: 0,
                    explanation: "Subjekt she, Verb reads, Objekt a book." }
            ],
            mittel: [
                { id: "wordk6l1u_mittel_1", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["We go to school every day.", "We go every day to school.", "Every day we to school go.", "We to school go every day."], correct: 0,
                    explanation: "Erst der Ort (to school), dann die Zeit (every day)." },
                { id: "wordk6l1u_mittel_2", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "mittel", points: 10,
                    question: "Wo steht 'often' im Satz 'I ___ play tennis'?",
                    answers: ["Vor dem Vollverb", "Nach dem Vollverb", "Ganz am Satzende", "Vor dem Subjekt"], correct: 0,
                    explanation: "Häufigkeitsadverbien stehen vor dem Vollverb: I often play tennis." },
                { id: "wordk6l1u_mittel_3", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["He always eats breakfast.", "He eats always breakfast.", "Always he eats breakfast.", "He eats breakfast always."], correct: 0,
                    explanation: "always steht vor dem Vollverb eats." },
                { id: "wordk6l1u_mittel_4", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["I am often tired.", "I often am tired.", "Often I am tired here.", "I am tired often here."], correct: 0,
                    explanation: "Nach einer Form von be steht das Adverb dahinter: I am often tired." }
            ],
            schwer: [
                { id: "wordk6l1u_schwer_1", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["They played in the garden yesterday.", "They played yesterday in the garden.", "Yesterday played they in the garden.", "They in the garden played yesterday."], correct: 0,
                    explanation: "Place before time: in the garden vor yesterday." },
                { id: "wordk6l1u_schwer_2", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["She never drinks coffee.", "She drinks never coffee.", "Never she drinks coffee.", "She drinks coffee never."], correct: 0,
                    explanation: "never steht als Häufigkeitsadverb vor dem Vollverb." },
                { id: "wordk6l1u_schwer_3", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "schwer", points: 10,
                    question: "Worin unterscheidet sich Englisch hier vom Deutschen?",
                    answers: ["Die Reihenfolge ist strenger festgelegt", "Das Verb steht immer am Satzende", "Das Objekt steht immer vor dem Verb", "Die Zeitangabe steht immer vorne"], correct: 0,
                    explanation: "Im Deutschen kann man umstellen (Gestern spielte ich), im Englischen bleibt S – V – O." },
                { id: "wordk6l1u_schwer_4", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["We meet at the cinema at seven.", "We meet at seven at the cinema.", "At seven we at the cinema meet.", "We at the cinema meet at seven."], correct: 0,
                    explanation: "Erst der Ort (at the cinema), dann die Zeit (at seven)." }
            ]
        },
        test: [
            { id: "wordk6l1_test_1", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "leicht", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["Tom likes pizza.", "Likes Tom pizza.", "Pizza Tom likes.", "Tom pizza likes."], correct: 0,
                explanation: "Subjekt, Verb, Objekt – in dieser Reihenfolge." },
            { id: "wordk6l1_test_2", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "leicht", points: 10,
                question: "Was bedeutet die Regel 'place before time'?",
                answers: ["Ort vor Zeit", "Zeit vor Ort", "Person vor Ort", "Verb vor Ort"], correct: 0,
                explanation: "Die Ortsangabe steht vor der Zeitangabe." },
            { id: "wordk6l1_test_3", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "mittel", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["I do my homework at home after school.", "I do my homework after school at home.", "At home I after school do homework.", "I after school do my homework."], correct: 0,
                explanation: "Ort (at home) vor Zeit (after school)." },
            { id: "wordk6l1_test_4", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "mittel", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["He usually walks to school.", "He walks usually to school.", "Usually he to school walks.", "He walks to school usually."], correct: 0,
                explanation: "usually steht vor dem Vollverb walks." },
            { id: "wordk6l1_test_5", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "schwer", points: 10,
                question: "Welcher Satz ist richtig?",
                answers: ["She is always friendly.", "She always is friendly.", "Always she is friendly.", "She is friendly always."], correct: 0,
                explanation: "Nach der be-Form steht das Adverb dahinter: She is always friendly." },
            { id: "wordk6l1_test_6", category: "kurs_word_k6_l1", area: "schule", grade: 6, subject: "englisch", topic: "word_order", difficulty: "schwer", points: 10,
                question: "Wo steht ein Häufigkeitsadverb bei einem Vollverb?",
                answers: ["Direkt davor", "Direkt dahinter", "Ganz am Anfang", "Ganz am Ende"], correct: 0,
                explanation: "I often play, she never drinks – das Adverb steht vor dem Vollverb." }
        ],
        bestehenAb: 0.8
    }
];

// ============================================================
//  ZUSTAND & HILFSFUNKTIONEN
// ============================================================
let currentLektion = null; // { id, data, step: "intro"|"leicht"|"mittel"|"schwer"|"test" }

function getLektionenForKurs(kursId) {
    return LEKTIONEN.filter(l => l.kurs === kursId).sort((a, b) => a.order - b.order);
}

function istLektionAbgeschlossen(id) {
    return !!(currentPlayer && currentPlayer.lektionen && currentPlayer.lektionen[id] && currentPlayer.lektionen[id].bestanden);
}

function istLektionFreigeschaltet(lektion, liste) {
    if (lektion.order <= 1) return true;
    const vorherige = liste.find(l => l.order === lektion.order - 1);
    return !vorherige || istLektionAbgeschlossen(vorherige.id);
}

// ============================================================
//  KURS-ÜBERSICHT
// ============================================================
// Reihenfolge + Anzeigename/Icon der Fächer in der Kurs-Übersicht.
// Unbekannte subject-Werte (falls mal ein neues Fach dazukommt) landen
// hinten dran, statt zu verschwinden.
const KURS_FACH_ORDER = ["mathe", "deutsch", "englisch", "biologie"];
const KURS_FACH_LABELS = {
    mathe: { icon: "🧮", label: "Mathematik" },
    deutsch: { icon: "📖", label: "Deutsch" },
    englisch: { icon: "🇬🇧", label: "Englisch" },
    biologie: { icon: "🌱", label: "Biologie" }
};

// Ein Kurs-Button (großformatig, orange) – wird sowohl für die Kurse
// innerhalb eines Fachs als auch (in Button-Form) für die Fächer selbst
// verwendet, damit beide Ebenen gleich aussehen.
function kursButtonHtml(icon, title, beschreibung, fertig, gesamt, onclick) {
    return `<button type="button" onclick="${onclick}" class="w-full flex items-center gap-4 p-5 rounded-2xl text-white text-left shadow-lg transition hover:scale-[1.02]" style="background:linear-gradient(140deg,#f59e0b,#ef4444);">
        <span class="text-3xl shrink-0">${icon}</span>
        <span class="flex-1">
            <span class="block text-base font-black">${title}</span>
            <span class="block text-xs font-bold text-amber-100/80">${beschreibung}</span>
        </span>
        <span class="text-xs font-black bg-black/20 rounded-full px-2.5 py-1 shrink-0">${fertig}/${gesamt}</span>
    </button>`;
}

const KURS_STUFEN_ICONS = { 5: "5️⃣", 6: "6️⃣", 7: "7️⃣", 8: "8️⃣", 9: "9️⃣", 10: "🔟" };

let currentKurseFach = null;
let currentKurseStufe = null;

// Hilfsfunktion: alle Klassenstufen eines Fachs, aufsteigend sortiert
function kursStufenFuerFach(fach) {
    return [...new Set(KURSE.filter(k => k.subject === fach).map(k => k.grade))].sort((a, b) => a - b);
}

function showKurse() {
    const wrap = document.getElementById("kurse-liste");
    if (!wrap) return;
    const vorhandeneFaecher = [...new Set(KURSE.map(k => k.subject))];
    const faecher = [
        ...KURS_FACH_ORDER.filter(f => vorhandeneFaecher.includes(f)),
        ...vorhandeneFaecher.filter(f => !KURS_FACH_ORDER.includes(f))
    ];
    wrap.innerHTML = faecher.map(fach => {
        const label = KURS_FACH_LABELS[fach] || { icon: "📘", label: fach };
        const kurseImFach = KURSE.filter(k => k.subject === fach);
        const lektionenImFach = kurseImFach.flatMap(k => getLektionenForKurs(k.id));
        const fertig = lektionenImFach.filter(l => istLektionAbgeschlossen(l.id)).length;
        const stufen = kursStufenFuerFach(fach);
        const stufenText = stufen.length > 1
            ? `Klasse ${stufen[0]}–${stufen[stufen.length - 1]}`
            : `Klasse ${stufen[0]}`;
        const kurseText = `${kurseImFach.length} Kurs${kurseImFach.length === 1 ? "" : "e"} · ${stufenText}`;
        return kursButtonHtml(label.icon, label.label, kurseText, fertig, lektionenImFach.length, `openKursFach('${fach}')`);
    }).join("");
    switchView("kurse");
}

// Ebene 2: Klassenstufen eines Fachs. Gibt es nur eine Stufe,
// wird sie übersprungen und direkt die Kursliste gezeigt.
function openKursFach(fach) {
    currentKurseFach = fach;
    currentKurseStufe = null;
    const stufen = kursStufenFuerFach(fach);
    if (stufen.length <= 1) {
        openKursStufe(fach, stufen[0]);
        return;
    }
    const label = KURS_FACH_LABELS[fach] || { icon: "📘", label: fach };
    document.getElementById("kurs-fach-title").innerText = `${label.icon} ${label.label}`;
    const wrap = document.getElementById("kurs-fach-liste");
    wrap.innerHTML = stufen.map(stufe => {
        const kurseDerStufe = KURSE.filter(k => k.subject === fach && k.grade === stufe);
        const lektionen = kurseDerStufe.flatMap(k => getLektionenForKurs(k.id));
        const fertig = lektionen.filter(l => istLektionAbgeschlossen(l.id)).length;
        const kurseText = `${kurseDerStufe.length} Kurs${kurseDerStufe.length === 1 ? "" : "e"}`;
        return kursButtonHtml(KURS_STUFEN_ICONS[stufe] || "🎓", `Klasse ${stufe}`, kurseText, fertig, lektionen.length, `openKursStufe('${fach}', ${stufe})`);
    }).join("");
    switchView("kurs-fach");
}

// Ebene 3: Kurse einer Klassenstufe
function openKursStufe(fach, stufe) {
    currentKurseFach = fach;
    currentKurseStufe = stufe;
    const label = KURS_FACH_LABELS[fach] || { icon: "📘", label: fach };
    const mehrereStufen = kursStufenFuerFach(fach).length > 1;
    document.getElementById("kurs-fach-title").innerText = mehrereStufen
        ? `${label.icon} ${label.label} · Klasse ${stufe}`
        : `${label.icon} ${label.label}`;
    const wrap = document.getElementById("kurs-fach-liste");
    const kurseDerStufe = KURSE.filter(k => k.subject === fach && k.grade === stufe);
    wrap.innerHTML = kurseDerStufe.map(k => {
        const lektionen = getLektionenForKurs(k.id);
        const fertig = lektionen.filter(l => istLektionAbgeschlossen(l.id)).length;
        return kursButtonHtml(k.icon, k.title, k.beschreibung, fertig, lektionen.length, `openKurs('${k.id}')`);
    }).join("");
    switchView("kurs-fach");
}

// Zurück-Button im Fach-View: von der Kursliste zur Stufenliste,
// von der Stufenliste zur Fächerübersicht.
function backFromKursFach() {
    const mehrereStufen = currentKurseFach ? kursStufenFuerFach(currentKurseFach).length > 1 : false;
    if (currentKurseStufe !== null && mehrereStufen) {
        openKursFach(currentKurseFach);
    } else {
        showKurse();
    }
}

// Zurück aus der Lektionsliste: dorthin, wo man hergekommen ist.
function backToKursFach() {
    if (currentKurseFach && currentKurseStufe !== null) {
        openKursStufe(currentKurseFach, currentKurseStufe);
    } else if (currentKurseFach) {
        openKursFach(currentKurseFach);
    } else {
        showKurse();
    }
}

function openKurs(kursId) {
    const kurs = KURSE.find(k => k.id === kursId);
    if (!kurs) return;
    currentKurseFach = kurs.subject;
    const lektionen = getLektionenForKurs(kursId);
    document.getElementById("kurs-lektionen-title").innerText = `${kurs.icon} ${kurs.title}`;
    const wrap = document.getElementById("kurs-lektionen-liste");
    wrap.innerHTML = lektionen.map(l => {
        const fertig = istLektionAbgeschlossen(l.id);
        const frei = istLektionFreigeschaltet(l, lektionen);
        const disabled = l.locked || !frei;
        const statusIcon = fertig ? "✅" : (disabled ? "🔒" : "▶️");
        return `<button type="button" ${disabled ? "disabled" : `onclick="openLektion('${l.id}')"`}
            class="w-full flex items-center gap-3 p-4 rounded-2xl text-left transition ${disabled ? "opacity-50 cursor-not-allowed bg-white/5" : "bg-white/5 hover:bg-white/10 hover:scale-[1.01]"} border border-white/10">
            <span class="text-2xl shrink-0">${l.icon || "📘"}</span>
            <span class="flex-1">
                <span class="block font-black text-white text-sm">${l.title}</span>
                <span class="block text-xs text-gray-400">${l.kurz || ""}</span>
            </span>
            <span class="text-lg shrink-0">${statusIcon}</span>
        </button>`;
    }).join("");
    switchView("kurs-lektionen");
}

// ============================================================
//  LEKTION: ERKLÄRUNG
// ============================================================
function openLektion(id) {
    const daten = LEKTIONEN.find(l => l.id === id);
    if (!daten || daten.locked) return;
    currentLektion = { id, data: daten, step: "intro" };
    document.getElementById("lektion-intro-icon").innerText = daten.icon || "📘";
    document.getElementById("lektion-intro-title").innerText = daten.title;
    document.getElementById("lektion-intro-text").innerHTML = daten.erklaerung.intro;
    document.getElementById("lektion-intro-beispiele").innerHTML =
        (daten.erklaerung.beispiele || []).map(b => `<div class="p-3 bg-white/5 rounded-xl text-sm text-gray-200 text-left border border-white/5">${b}</div>`).join("");
    const merkEl = document.getElementById("lektion-intro-merksatz");
    if (daten.erklaerung.merksatz) {
        merkEl.innerHTML = `💡 ${daten.erklaerung.merksatz}`;
        merkEl.classList.remove("hidden");
    } else {
        merkEl.classList.add("hidden");
    }
    switchView("lektion-intro");
}

function startLektionUebung(stufe) {
    if (!currentLektion) return;
    currentLektion.step = stufe;
    const fragen = currentLektion.data.uebung[stufe];
    launchQuiz(fragen);
}

function startLektionTest() {
    if (!currentLektion) return;
    currentLektion.step = "test";
    launchQuiz(currentLektion.data.test);
}

// ============================================================
//  ÜBERGABE-PUNKT: wird von quiz-core.js aufgerufen, sobald eine
//  Quiz-Runde im Lektion-Modus zu Ende ist (statt des normalen
//  Test-Ergebnis-Screens)
// ============================================================
const LEKTION_STUFEN_REIHENFOLGE = ["leicht", "mittel", "schwer"];

function handleLektionStepEnd() {
    if (!currentLektion) return false;
    const step = currentLektion.step;
    const erwartet = step === "test"
        ? currentLektion.data.test.length
        : step === "review"
            ? ((window._lektionReviewQs || []).length)
            : (currentLektion.data.uebung[step] ? currentLektion.data.uebung[step].length : 0);
    const total = testAnsweredCount || 0;
    const richtig = testCorrectCount || 0;

    // Vorzeitig über "Beenden" verlassen (nicht alle Fragen der Stufe beantwortet) →
    // sauber zurück zur Lektionen-Liste statt in den Übergangs-/Ergebnis-Screen.
    if (total < erwartet) {
        if (step === "review") {
            switchView("lektion-ergebnis");
            return true;
        }
        currentLektion = null;
        switchView("kurs-lektionen");
        return true;
    }

    const pct = total > 0 ? Math.round((richtig / total) * 100) : 0;

    if (LEKTION_STUFEN_REIHENFOLGE.includes(step)) {
        renderLektionUebergang(step, richtig, total, pct);
        switchView("lektion-uebergang");
    } else if (step === "test") {
        currentLektion.reviewBase = { total: total, correct: richtig };
        finishLektion(pct);
    } else if (step === "review") {
        const base = currentLektion.reviewBase || { total: 0, correct: 0 };
        const neuRichtig = base.correct + richtig;
        const neuPct = base.total > 0 ? Math.round((neuRichtig / base.total) * 100) : pct;
        currentLektion.reviewBase = { total: base.total, correct: neuRichtig };
        finishLektion(neuPct);
    }
    return true;
}

function renderLektionUebergang(stufe, richtig, total, pct) {
    const idx = LEKTION_STUFEN_REIHENFOLGE.indexOf(stufe);
    const naechste = LEKTION_STUFEN_REIHENFOLGE[idx + 1];
    const gut = pct >= 60;
    document.getElementById("lektion-uebergang-emoji").innerText = gut ? "🎉" : "💪";
    document.getElementById("lektion-uebergang-titel").innerText = gut ? "Stark gemacht!" : "Dranbleiben!";
    document.getElementById("lektion-uebergang-ergebnis").innerText = `${richtig} von ${total} richtig (${pct}%)`;
    const btn = document.getElementById("lektion-uebergang-weiter-btn");
    if (naechste) {
        btn.innerText = `Weiter: ${naechste === "mittel" ? "Mittlere" : "Schwere"} Übung ➔`;
        btn.onclick = () => startLektionUebung(naechste);
    } else {
        btn.innerText = "Zum Abschlusstest ➔";
        btn.onclick = () => startLektionTest();
    }
    if (typeof confetti === "function" && gut) confetti();
    if (typeof SFX !== "undefined" && SFX.correct) SFX.correct();
}

function finishLektion(pct) {
    const daten = currentLektion.data;
    const bestehenAb = Math.round((daten.bestehenAb || 0.8) * 100);
    const bestanden = pct >= bestehenAb;

    if (currentPlayer) {
        if (!currentPlayer.lektionen) currentPlayer.lektionen = {};
        const bisher = currentPlayer.lektionen[daten.id];
        if (!bisher || !bisher.bestanden || pct > bisher.pct) {
            currentPlayer.lektionen[daten.id] = { bestanden, pct, datum: Date.now() };
        }
        if (bestanden && typeof addXP === "function") addXP(50);
        if (typeof savePlayerProgress === "function") savePlayerProgress();
    }

    document.getElementById("lektion-ergebnis-emoji").innerText = bestanden ? "🏆" : "💪";
    document.getElementById("lektion-ergebnis-titel").innerText = bestanden ? "Lektion geschafft!" : "Noch nicht ganz – versuch's nochmal!";
    const base = currentLektion && currentLektion.reviewBase;
    document.getElementById("lektion-ergebnis-pct").innerText = base && currentLektion.step === "review"
        ? `${pct}% insgesamt (${base.correct}/${base.total} nach Wiederholung)`
        : `${pct}% im Abschlusstest`;
    document.getElementById("lektion-ergebnis-hinweis").innerText = bestanden
        ? "Die nächste Lektion ist jetzt freigeschaltet."
        : `Du brauchst mindestens ${bestehenAb}% zum Bestehen. Nicht schlimm – einfach nochmal probieren!`;
    const retryBtn = document.getElementById("lektion-ergebnis-retry-btn");
    retryBtn.innerText = bestanden ? "🔄 Nochmal üben" : "🔄 Nochmal versuchen";
    retryBtn.onclick = () => openLektion(daten.id);

    const reviewBtn = document.getElementById("lektion-ergebnis-review-btn");
    const pool = [];
    ["leicht", "mittel", "schwer"].forEach(function (s) {
        (daten.uebung && daten.uebung[s] || []).forEach(function (q) { pool.push(q); });
    });
    (daten.test || []).forEach(function (q) { pool.push(q); });
    const wrong = ((currentPlayer && currentPlayer.wrongQuestions) || [])
        .map(function (w) { return pool.find(function (q) { return q.question === w.question; }); })
        .filter(Boolean);
    window._lektionReviewQs = wrong.slice(0, 3);
    if (reviewBtn) {
        if (window._lektionReviewQs.length) {
            reviewBtn.classList.remove("hidden");
            reviewBtn.innerText = "🔁 " + window._lektionReviewQs.length + " Fehler wiederholen";
        } else {
            reviewBtn.classList.add("hidden");
        }
    }

    switchView("lektion-ergebnis");
    if (typeof confetti === "function" && bestanden) {
        confetti();
        setTimeout(() => { if (typeof confetti === "function") confetti(); }, 350);
        setTimeout(() => { if (typeof confetti === "function") confetti(); }, 700);
    }
    if (typeof SFX !== "undefined") {
        if (bestanden) { if (SFX.correct) SFX.correct(); } else { if (SFX.wrong) SFX.wrong(); }
    }
}

function startLektionWiederholung() {
    const qs = (window._lektionReviewQs || []).slice();
    if (!qs.length) return showToast("Keine Fehler zum Wiederholen.", "success");
    if (!currentLektion || !currentLektion.data) {
        return showToast("Lektion nicht mehr aktiv.", "error");
    }
    currentLektion.step = "review";
    if (typeof launchQuiz === "function") launchQuiz(qs);
}
window.startLektionWiederholung = startLektionWiederholung;

if (typeof window !== "undefined") {
    window.KURSE = KURSE;
    window.LEKTIONEN = LEKTIONEN;
}