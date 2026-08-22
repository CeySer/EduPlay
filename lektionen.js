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
    { id: "present_perfect_k6", title: "Present Perfect", icon: "✅", grade: 6, subject: "englisch", beschreibung: "Abgeschlossene Handlungen mit Bezug zur Gegenwart ausdrücken." }
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
                    answers: ["Der Zähler ist 4", "Der Nenner ist 4", "Der Zähler ist 3", "Das Ganze wurde in 4 Teile geteilt"], correct: 0,
                    explanation: "Falsch: Der Zähler ist 3, nicht 4 – die 4 ist der Nenner." },
                { id: "brl1u_schwer_3", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Ein Gartenbeet wird in 12 gleiche Felder geteilt. Auf 5 Feldern wachsen Tomaten. Wie groß ist der Anteil der Felder OHNE Tomaten als Bruch?",
                    answers: ["7/12", "5/12", "5/7", "12/7"], correct: 0,
                    explanation: "12 Felder insgesamt, 5 mit Tomaten, also 12 − 5 = 7 Felder ohne Tomaten: 7/12." },
                { id: "brl1u_schwer_4", category: "kurs_bruch_k5_l1", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Emma sagt: 'Bei 2/9 ist die 9 der Zähler.' Ben sagt: 'Nein, die 2 ist der Zähler.' Wer hat recht?",
                    answers: ["Ben, denn der Zähler steht oben", "Emma, denn der Zähler steht unten", "Beide haben recht", "Keiner, der Zähler ist immer die größere Zahl"], correct: 0,
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
                answers: ["Wie viele Teile gemeint sind", "In wie viele Teile geteilt wurde", "Immer die Zahl 1", "Die Summe aller Teile"], correct: 0,
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
                question: "Bei 4/4 ist gemeint:",
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
                    answers: ["Zähler UND Nenner mit 2 multiplizieren", "Nur den Zähler allein mit 2 multiplizieren", "Nur den Nenner allein mit 2 multiplizieren", "Zähler und Nenner beide durch 2 teilen"], correct: 0,
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
                    answers: ["2/3", "3/4", "1/3", "6/9 lässt sich nicht kürzen"], correct: 0,
                    explanation: "6 und 9 lassen sich beide durch 3 teilen: 6÷3=2, 9÷3=3 → 2/3." },
                { id: "brl2u_mittel_2", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt? 3/4 = ?/12",
                    answers: ["9", "8", "3", "12"], correct: 0,
                    explanation: "4 wurde mit 3 multipliziert (4×3=12), also auch den Zähler mit 3 multiplizieren: 3×3=9." },
                { id: "brl2u_mittel_3", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt? 10/15 = 2/?",
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
                    question: "Welche Zahl fehlt? 5/6 = 20/?",
                    answers: ["24", "20", "30", "6"], correct: 0,
                    explanation: "5 wurde mit 4 multipliziert (5×4=20), also auch den Nenner mit 4 multiplizieren: 6×4=24." },
                { id: "brl2u_schwer_4", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                    question: "Tim sagt: '4/10 ist schon vollständig gekürzt.' Hat er recht?",
                    answers: ["Nein, man kann noch durch 2 kürzen: 2/5", "Ja, das stimmt", "Nein, man muss erweitern statt kürzen", "Nein, 4/10 ist ungültig"], correct: 0,
                    explanation: "4 und 10 haben noch den gemeinsamen Teiler 2: 4÷2=2, 10÷2=5 → 2/5 ist vollständig gekürzt." }
            ]
        },
        test: [
            { id: "brl2_test_1", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Was bedeutet 'einen Bruch kürzen'?",
                answers: ["Zähler und Nenner durch dieselbe Zahl teilen", "Nur den Nenner verkleinern", "Zähler und Nenner mit derselben Zahl multiplizieren", "Den Bruch umdrehen"], correct: 0,
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
                answers: ["3/4", "9/12 lässt sich nicht kürzen", "1/3", "4/3"], correct: 0,
                explanation: "9 und 12 lassen sich beide durch 3 teilen: 9÷3=3, 12÷3=4 → 3/4." },
            { id: "brl2_test_5", category: "kurs_bruch_k5_l2", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Welche Zahl fehlt? 2/7 = ?/21",
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
                    question: "3/7 und 5/7 – welcher Bruch ist größer?",
                    answers: ["5/7", "3/7", "Beide sind gleich groß", "Das kann man nicht sagen"], correct: 0,
                    explanation: "Gleicher Nenner (7) – der Bruch mit dem größeren Zähler ist größer: 5 > 3." },
                { id: "brl3u_leicht_2", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                    question: "Bei gleichem Nenner ist der Bruch mit dem ... Zähler größer.",
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
                    answers: ["Nein, 5/6 ist größer (gemeinsamer Nenner 30: 25/30 vs. 24/30)", "Ja, das stimmt", "Beide sind gleich groß", "Man kann Brüche mit unterschiedlichem Nenner nicht vergleichen"], correct: 0,
                    explanation: "Gemeinsamer Nenner 30: 5/6 = 25/30, 4/5 = 24/30. Da 25 > 24, ist 5/6 größer – Mias Begründung war falsch." }
            ]
        },
        test: [
            { id: "brl3_test_1", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "leicht", points: 10,
                question: "3/9 und 7/9 – welcher Bruch ist größer?",
                answers: ["7/9", "3/9", "Beide gleich", "Nicht vergleichbar"], correct: 0,
                explanation: "Gleicher Nenner (9), 7 > 3, also ist 7/9 größer." },
            { id: "brl3_test_2", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "mittel", points: 10,
                question: "Bei gleichem Zähler ist der Bruch mit dem ... Nenner größer.",
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
                    answers: ["Nein, bei der Multiplikation braucht man KEINEN gemeinsamen Nenner", "Ja, genau so ist es tatsächlich völlig richtig gerechnet worden", "Nein, man muss stattdessen nur die beiden Zähler addieren", "Nein, man muss die Brüche vorher immer zuerst kürzen"], correct: 0,
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
                answers: ["Zähler mal Zähler, Nenner mal Nenner", "Erst gleichnamig machen, dann Zähler addieren", "Über Kreuz multiplizieren", "Zähler mal Nenner, Nenner mal Zähler"], correct: 0,
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
                    answers: ["1/2 mit dem Kehrwert von 1/3 multiplizieren: 1/2 × 3/1", "1/2 und 1/3 einfach direkt addieren", "Immer Zähler durch Zähler und Nenner durch Nenner teilen", "1/3 mit dem Kehrwert von 1/2 multiplizieren"], correct: 0,
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
                    answers: ["Nein, man dreht den ZWEITEN Bruch um (den Divisor)", "Ja, das stimmt genau so, wie sie es gesagt hat", "Nein, man muss dabei beide Brüche umdrehen", "Nein, man darf bei der Division gar nichts umdrehen"], correct: 0,
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
                answers: ["Mit dem Kehrwert des Divisors multiplizieren", "Zähler durch Zähler, Nenner durch Nenner teilen", "Beide Brüche addieren", "Über Kreuz addieren"], correct: 0,
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
                    answers: ["Für regelmäßige Handlungen und Fakten", "Nur für die Zukunft", "Nur für die Vergangenheit", "Nur für einmalige Ereignisse gerade jetzt"], correct: 0,
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
                answers: ["Für regelmäßige Handlungen und Fakten", "Nur für die Zukunft", "Nur für einmalige Ereignisse in der Vergangenheit", "Nur für Wünsche"], correct: 0,
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
                answers: ["Für abgeschlossene Handlungen in der Vergangenheit", "Nur für Dinge in der fernen Zukunft", "Für Handlungen, die gerade jetzt passieren", "Nur für spontane Wünsche und Pläne"], correct: 0,
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
                answers: ["Ein Quadrat ist ein Rechteck mit vier gleich langen Seiten", "Ein Rechteck hat immer vier gleich lange Seiten", "Der Umfang eines Quadrats ist immer größer als seine Fläche", "Rechtecke haben keinen Umfang, nur Quadrate"], correct: 0,
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
                    answers: ["Falsch, das ist die Formel für den Umfang – die Fläche ist 5×3=15 cm²", "Die Fläche ist tatsächlich schon ganz richtig berechnet worden", "Die Einheit cm² ist bei dieser Aufgabe eigentlich falsch gewählt", "Man muss stattdessen beide Zahlen addieren: 5+3=8 cm²"], correct: 0,
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
                answers: ["Was tut das Subjekt?", "Wer oder was?", "Wo?", "Wessen?"], correct: 0,
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
                question: "Ein Winkel von 180° heißt...",
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
                    answers: ["Gegenüberliegende Seiten sind parallel", "Alle Seiten sind gleich lang", "Alle Winkel sind 90°", "Es gibt keine parallelen Seiten"], correct: 0,
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
                    answers: ["Seiten sind paarweise parallel und gleich lang", "Alle Winkel sind 90° groß", "Alle Seiten sind gleich lang", "Nur eine Seite ist parallel zu einer anderen"], correct: 0,
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
                answers: ["Ja, ein Quadrat erfüllt beide Eigenschaften", "Nein, ein Quadrat ist nur ein Rechteck", "Nein, ein Quadrat ist nur eine Raute", "Nein, das stimmt gar nicht"], correct: 0,
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
                    answers: ["Das ist ihr Fahrrad.", "Ich habe ihr geholfen.", "Wo wohnt ihr?", "Ich schreibe ihr einen Brief."], correct: 0,
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
                    answers: ["Akkusativ, wie bei allen festen Akkusativ-Präpositionen", "Dativ, wie bei allen festen Dativ-Präpositionen", "Genitiv, wie bei einigen wenigen Präpositionen", "Es kommt hier ganz auf den Satz an"], correct: 0,
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
                    answers: ["Unterordnende Konjunktion", "Nebenordnende Konjunktion", "Präposition", "Pronomen"], correct: 0,
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
                answers: ["Am Satzende, weil 'weil' eine unterordnende Konjunktion ist", "An Position 2, weil 'weil' eine nebenordnende Konjunktion ist", "Ganz am Anfang des Satzes, direkt vor dem Subjekt", "Direkt nach dem Komma, noch vor dem Subjekt"], correct: 0,
                explanation: "'weil' ist unterordnend – das Verb rückt im Nebensatz ans Satzende." },
            { id: "wortk5l2_test_5", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "schwer", points: 10,
                question: "Welcher Satz enthält einen Fehler bei Präposition und Fall?",
                answers: ["Ich fahre mit den Bus.", "Ich fahre mit dem Bus.", "Ich warte auf den Bus.", "Ich komme mit dem Fahrrad."], correct: 0,
                explanation: "'mit' verlangt immer den Dativ: richtig wäre 'mit dem Bus', nicht 'mit den Bus'." },
            { id: "wortk5l2_test_6", category: "kurs_wort_k5_l2", area: "schule", grade: 5, subject: "deutsch", topic: "praepositionen_konjunktionen", difficulty: "schwer", points: 10,
                question: "'Wir gehen ins Kino, obwohl es spät ist.' – Welche Wortart ist 'obwohl'?",
                answers: ["Unterordnende Konjunktion", "Nebenordnende Konjunktion", "Präposition", "Adverb"], correct: 0,
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
                    question: "Welche Zahl ist größer: 0,6 oder 0,45?",
                    answers: ["0,6", "0,45", "Beide sind gleich groß", "Das lässt sich nicht sagen"], correct: 0,
                    explanation: "6 Zehntel sind mehr als 4 Zehntel – 0,6 ist größer." },
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
                    question: "Welche Zahl ist die kleinste: 0,3 / 0,25 / 0,08?",
                    answers: ["0,08", "0,25", "0,3", "Alle drei sind gleich groß"], correct: 0,
                    explanation: "0,08 hat nur 8 Hundertstel – das ist am wenigsten." }
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
                    answers: ["Beide Zahlen sind exakt gleich groß", "0,50 ist größer, weil sie mehr Nachkommastellen hat", "0,5 ist größer, weil sie kürzer geschrieben ist", "Die beiden Zahlen lassen sich nicht vergleichen"], correct: 0,
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
                answers: ["0,1, weil 1 Zehntel mehr ist als 9 Hundertstel", "0,09, weil die Zahl mehr Nachkommastellen hat", "Beide Zahlen sind gleich groß", "Das lässt sich nicht eindeutig sagen"], correct: 0,
                explanation: "0,1 = 10 Hundertstel, das ist mehr als 9 Hundertstel." },
            { id: "dezk6l1_test_4", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "mittel", points: 10,
                question: "Runde 5,63 auf eine Nachkommastelle.",
                answers: ["5,6", "5,7", "5,0", "6,0"], correct: 0,
                explanation: "Die Ziffer nach der Rundestelle ist 3 (<5), also wird abgerundet: 5,6." },
            { id: "dezk6l1_test_5", category: "kurs_dez_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "dezimalzahlen", difficulty: "schwer", points: 10,
                question: "Welche Aussage über 0,3 und 0,30 stimmt?",
                answers: ["Beide Zahlen sind exakt gleich groß", "0,30 ist größer, weil sie mehr Nachkommastellen hat", "0,3 ist größer, weil sie kürzer geschrieben ist", "Die Zahlen lassen sich so nicht vergleichen"], correct: 0,
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
                    question: "Welche Zahl ist kleiner: -5 oder 2?",
                    answers: ["-5", "2", "Beide sind gleich groß", "Das lässt sich nicht sagen"], correct: 0,
                    explanation: "-5 liegt links von 2 auf der Zahlengeraden – also kleiner." },
                { id: "negzk6l1u_leicht_3", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man 'minus sieben' als Zahl?",
                    answers: ["-7", "7", "+7", "0,7"], correct: 0,
                    explanation: "'Minus sieben' wird als -7 geschrieben." },
                { id: "negzk6l1u_leicht_4", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl liegt näher an 0: -2 oder -8?",
                    answers: ["-2", "-8", "Beide gleich weit entfernt", "Nicht bestimmbar"], correct: 0,
                    explanation: "-2 liegt näher an der 0 als -8." }
            ],
            mittel: [
                { id: "negzk6l1u_mittel_1", category: "kurs_negz_k6_l1", area: "schule", grade: 6, subject: "mathe", topic: "negative_zahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist kleiner: -3 oder -8?",
                    answers: ["-8, weil sie weiter links auf der Zahlengeraden liegt", "-3, weil sie weiter links auf der Zahlengeraden liegt", "Beide Zahlen sind exakt gleich groß", "-8 ist größer, weil die Ziffer 8 größer ist als 3"], correct: 0,
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
                    question: "Welche Zahl ist am größten: -1, -10, 4?",
                    answers: ["4", "-1", "-10", "Alle drei sind gleich groß"], correct: 0,
                    explanation: "4 liegt am weitesten rechts auf der Zahlengeraden – also am größten." }
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
                    answers: ["-10 ist kleiner als -3, weil sie weiter links liegt", "-10 ist größer als -3, weil 10 größer ist als 3", "Beide Zahlen sind exakt gleich groß", "Negative Zahlen lassen sich nicht vergleichen"], correct: 0,
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
                question: "Welche Zahl ist größer: -1 oder -6?",
                answers: ["-1", "-6", "Beide sind gleich groß", "Das lässt sich nicht sagen"], correct: 0,
                explanation: "-1 liegt näher an 0 und weiter rechts als -6 – also größer." },
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
                question: "Welche Zahl ist am kleinsten: -20, -2, 0?",
                answers: ["-20", "-2", "0", "Alle drei sind gleich groß"], correct: 0,
                explanation: "-20 liegt am weitesten links auf der Zahlengeraden – also am kleinsten." }
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
                    answers: ["Weil ein kurzer Vokal vor dem Endkonsonanten steht", "Weil das Adjektiv mit einem Vokal endet", "Weil das Adjektiv zwei Silben hat", "Weil es sich um ein unregelmäßiges Adjektiv handelt"], correct: 0,
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

let currentKurseFach = null;

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
        const kurseText = `${kurseImFach.length} Kurs${kurseImFach.length === 1 ? "" : "e"}`;
        return kursButtonHtml(label.icon, label.label, kurseText, fertig, lektionenImFach.length, `openKursFach('${fach}')`);
    }).join("");
    switchView("kurse");
}

function openKursFach(fach) {
    currentKurseFach = fach;
    const label = KURS_FACH_LABELS[fach] || { icon: "📘", label: fach };
    document.getElementById("kurs-fach-title").innerText = `${label.icon} ${label.label}`;
    const wrap = document.getElementById("kurs-fach-liste");
    const kurseImFach = KURSE.filter(k => k.subject === fach);
    wrap.innerHTML = kurseImFach.map(k => {
        const lektionen = getLektionenForKurs(k.id);
        const fertig = lektionen.filter(l => istLektionAbgeschlossen(l.id)).length;
        return kursButtonHtml(k.icon, k.title, k.beschreibung, fertig, lektionen.length, `openKurs('${k.id}')`);
    }).join("");
    switchView("kurs-fach");
}

function backToKursFach() {
    if (currentKurseFach) {
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