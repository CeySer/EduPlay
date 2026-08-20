// ============================================================
//  LERNPFADE / KURSE
//  Erklärung → gestufte Übung (leicht/mittel/schwer) → Abschlusstest
//  Pilot: Mathematik · Bruchrechnen, Klasse 5
// ============================================================

const KURSE = [
    { id: "bruchrechnen_k5", title: "Bruchrechnen", icon: "🍕", grade: 5, subject: "mathe", beschreibung: "Vom Bruch verstehen bis sicher rechnen." }
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
                    answers: ["Das Ganze wurde in 8 Teile geteilt", "Es sind 8 Bruchteile gemeint", "8 ist immer die größere Zahl", "8 ist das Ergebnis der Rechnung"], correct: 0,
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
                    answers: ["Das ganze Stück ist gemeint (alles)", "Gar nichts ist gemeint", "Der Bruch ist ungültig", "Es fehlt noch ein Teil"], correct: 0,
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
                answers: ["In wie viele gleiche Teile das Ganze geteilt ist", "Wie viele Teile gemeint sind", "Das Ergebnis der Division", "Die Anzahl der Brüche"], correct: 0,
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
                    answers: ["Zähler UND Nenner mit 2 multiplizieren", "Nur den Zähler mit 2 multiplizieren", "Nur den Nenner mit 2 multiplizieren", "Zähler und Nenner durch 2 teilen"], correct: 0,
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
                    answers: ["Sie hätte auch den Nenner durch 4 teilen müssen", "Sie hätte mit 4 multiplizieren müssen", "12/16 kann man nicht kürzen", "Nichts, das ist richtig"], correct: 0,
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
                answers: ["Zähler und Nenner mit derselben Zahl multiplizieren", "Nur den Zähler vergrößern", "Zähler und Nenner durch dieselbe Zahl teilen", "Eine neue Zahl addieren"], correct: 0,
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
                    answers: ["Je mehr Teile, desto kleiner ist jedes einzelne Stück", "Das stimmt nicht, 1/8 ist größer", "Der Zähler entscheidet allein", "Größere Zahlen ergeben immer größere Brüche"], correct: 0,
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
                answers: ["Vom ersten Kuchen (weniger, dafür größere Stücke)", "Vom zweiten Kuchen", "Beide gleich groß", "Kann man nicht sagen"], correct: 0,
                explanation: "1/5 ist größer als 1/10, weil der Kuchen in weniger Teile geteilt wurde." },
            { id: "brl3_test_6", category: "kurs_bruch_k5_l3", area: "schule", grade: 5, subject: "mathe", topic: "bruchrechnen", difficulty: "schwer", points: 10,
                question: "Vergleiche 3/8 und 1/2. Welcher Bruch ist größer?",
                answers: ["1/2", "3/8", "Beide gleich groß", "Nicht vergleichbar"], correct: 0,
                explanation: "Gemeinsamer Nenner 8: 1/2 = 4/8. Da 4 > 3, ist 1/2 größer als 3/8." }
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
