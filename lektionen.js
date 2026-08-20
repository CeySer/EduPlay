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
    { id: "fotosynthese_k6", title: "Fotosynthese", icon: "🌱", grade: 6, subject: "biologie", beschreibung: "Wie Pflanzen aus Licht, Wasser und CO2 ihre Energie herstellen." }
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
                    answers: ["Nein, bei der Multiplikation braucht man KEINEN gemeinsamen Nenner", "Ja, genau so ist es völlig richtig gerechnet worden", "Nein, man muss stattdessen nur die beiden Zähler addieren", "Nein, man muss die Brüche vorher immer zuerst kürzen"], correct: 0,
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
                    answers: ["Vor der Rede muss ein Doppelpunkt stehen, kein Komma: Er fragte: „Kommst du mit?“", "Der Satz ist schon vollständig richtig und braucht keine Änderung", "Das Fragezeichen steht eigentlich an der völlig falschen Stelle im Satz", "Es fehlen einfach nur die Anführungszeichen um die ganze wörtliche Rede"], correct: 0,
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
                    answers: ["Wasser + Kohlenstoffdioxid + Licht → Traubenzucker + Sauerstoff", "Traubenzucker + Sauerstoff → Wasser + Kohlenstoffdioxid", "Licht + Sauerstoff → Wasser + Zucker, ganz ohne CO2 dabei", "Wasser + Zucker → Licht + Kohlenstoffdioxid als Abfall"], correct: 0,
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
function showKurse() {
    const wrap = document.getElementById("kurse-liste");
    if (!wrap) return;
    wrap.innerHTML = KURSE.map(k => {
        const lektionen = getLektionenForKurs(k.id);
        const fertig = lektionen.filter(l => istLektionAbgeschlossen(l.id)).length;
        return `<button type="button" onclick="openKurs('${k.id}')" class="w-full flex items-center gap-4 p-5 rounded-2xl text-white text-left shadow-lg transition hover:scale-[1.02]" style="background:linear-gradient(140deg,#f59e0b,#ef4444);">
            <span class="text-3xl shrink-0">${k.icon}</span>
            <span class="flex-1">
                <span class="block text-base font-black">${k.title}</span>
                <span class="block text-xs font-bold text-amber-100/80">${k.beschreibung}</span>
            </span>
            <span class="text-xs font-black bg-black/20 rounded-full px-2.5 py-1 shrink-0">${fertig}/${lektionen.length}</span>
        </button>`;
    }).join("");
    switchView("kurse");
}

function openKurs(kursId) {
    const kurs = KURSE.find(k => k.id === kursId);
    if (!kurs) return;
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
        : (currentLektion.data.uebung[step] ? currentLektion.data.uebung[step].length : 0);
    const total = testAnsweredCount || 0;
    const richtig = testCorrectCount || 0;

    // Vorzeitig über "Beenden" verlassen (nicht alle Fragen der Stufe beantwortet) →
    // sauber zurück zur Lektionen-Liste statt in den Übergangs-/Ergebnis-Screen.
    if (total < erwartet) {
        currentLektion = null;
        switchView("kurs-lektionen");
        return true;
    }

    const pct = total > 0 ? Math.round((richtig / total) * 100) : 0;

    if (LEKTION_STUFEN_REIHENFOLGE.includes(step)) {
        renderLektionUebergang(step, richtig, total, pct);
        switchView("lektion-uebergang");
    } else if (step === "test") {
        finishLektion(pct);
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
    document.getElementById("lektion-ergebnis-pct").innerText = `${pct}% im Abschlusstest`;
    document.getElementById("lektion-ergebnis-hinweis").innerText = bestanden
        ? "Die nächste Lektion ist jetzt freigeschaltet."
        : `Du brauchst mindestens ${bestehenAb}% zum Bestehen. Nicht schlimm – einfach nochmal probieren!`;
    const retryBtn = document.getElementById("lektion-ergebnis-retry-btn");
    retryBtn.innerText = bestanden ? "🔄 Nochmal üben" : "🔄 Nochmal versuchen";
    retryBtn.onclick = () => openLektion(daten.id);

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

if (typeof window !== "undefined") {
    window.KURSE = KURSE;
    window.LEKTIONEN = LEKTIONEN;
}