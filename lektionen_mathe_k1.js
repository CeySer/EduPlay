// Mathe Klasse 1 - Zaehlen, Nachbarzahlen, Plus, Minus, Geld
// 5 Kurse mit je 3 Lektionen - erzeugt aus /tmp/mk1/d1..d5.js.
// Die Themen (topic) entsprechen genau den Klasse-1-Wissensfragen, damit
// die Kurs-Empfehlung aus dem Wissen-Modus den passenden Kurs findet.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "zaehlen_k1", title: "Zählen und vergleichen", icon: "🍎", grade: 1, subject: "mathe", beschreibung: "Mengen zählen, größer und kleiner erkennen, Zahlen ordnen." },
        { id: "nachbar_k1", title: "Nachbarzahlen und Reihen", icon: "👣", grade: 1, subject: "mathe", beschreibung: "Vorgänger, Nachfolger, Nachbarzahlen und Zahlenreihen bis 20." },
        { id: "plusrechnen_k1", title: "Plus rechnen", icon: "➕", grade: 1, subject: "mathe", beschreibung: "Plus bis 10, verliebte Zahlen und Plus bis 20 über die Zehn." },
        { id: "minusrechnen_k1", title: "Minus rechnen", icon: "➖", grade: 1, subject: "mathe", beschreibung: "Minus bis 10, Minus bis 20 und Rechengeschichten mit Plus und Minus." },
        { id: "geld_k1", title: "Geld bis 20 Euro", icon: "💶", grade: 1, subject: "mathe", beschreibung: "Münzen und Scheine kennen, Geld zählen und beim Einkaufen rechnen." }
    ];
    const extraLektionen = [
    {
        id: "zael_k1_l1", kurs: "zaehlen_k1", order: 1, icon: "🍎",
        title: "Wie viele?", kurz: "Zählen in Fünferpäckchen",
        erklaerung: {
            intro: "Zählen geht leichter in <b>Fünferpäckchen</b>: Erst die volle Fünf sehen, dann weiterzählen. 🍎🍎🍎🍎🍎 🍎🍎 sind <b>5 und 2</b>, also <b>7</b>.",
            beispiele: ["🍎🍎🍎 → 3",
                "🍎🍎🍎🍎🍎 → 5",
                "🍎🍎🍎🍎🍎 🍎🍎 → 7"],
            merksatz: "Erst die Fünf erkennen, dann weiterzählen."
        },
        uebung: {
            leicht: [
                {
                    id: "zaelk1l1_l1", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "leicht", points: 10,
                    question: "🍎🍎🍎 Wie viele Äpfel?", answers: ["3", "2", "4", "5"], correct: 0,
                    explanation: "Eins, zwei, drei."
                },
                {
                    id: "zaelk1l1_l2", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "leicht", points: 10,
                    question: "⭐⭐⭐⭐⭐ Wie viele Sterne?", answers: ["5", "4", "6", "3"], correct: 0,
                    explanation: "Eine volle Fünf."
                },
                {
                    id: "zaelk1l1_l3", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "leicht", points: 10,
                    question: "🐟🐟 Wie viele Fische?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Eins, zwei."
                },
                {
                    id: "zaelk1l1_l4", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "leicht", points: 10,
                    question: "🎈🎈🎈🎈 Wie viele Ballons?", answers: ["4", "3", "5", "6"], correct: 0,
                    explanation: "Eins, zwei, drei, vier."
                }
            ],
            mittel: [
                {
                    id: "zaelk1l1_m1", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "🍓🍓🍓🍓🍓 🍓 Wie viele Erdbeeren?", answers: ["6", "5", "7", "8"], correct: 0,
                    explanation: "5 und 1 sind 6."
                },
                {
                    id: "zaelk1l1_m2", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "🐞🐞🐞🐞🐞 🐞🐞🐞 Wie viele Marienkäfer?", answers: ["8", "7", "9", "6"], correct: 0,
                    explanation: "5 und 3 sind 8."
                },
                {
                    id: "zaelk1l1_m3", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "⚽⚽⚽⚽⚽ ⚽⚽⚽⚽⚽ Wie viele Bälle?", answers: ["10", "9", "11", "8"], correct: 0,
                    explanation: "5 und 5 sind 10."
                },
                {
                    id: "zaelk1l1_m4", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "🌸🌸🌸🌸🌸 🌸🌸🌸🌸 Wie viele Blumen?", answers: ["9", "8", "10", "7"], correct: 0,
                    explanation: "5 und 4 sind 9."
                }
            ],
            schwer: [
                {
                    id: "zaelk1l1_s1", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "schwer", points: 10,
                    question: "🍎🍎🍎🍎🍎 🍎🍎🍎🍎🍎 🍎🍎 Wie viele Äpfel?", answers: ["12", "11", "13", "10"], correct: 0,
                    explanation: "10 und 2 sind 12."
                },
                {
                    id: "zaelk1l1_s2", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "schwer", points: 10,
                    question: "⭐⭐⭐⭐⭐ ⭐⭐⭐⭐⭐ ⭐⭐⭐⭐⭐ Wie viele Sterne?", answers: ["15", "14", "16", "10"], correct: 0,
                    explanation: "Dreimal 5 sind 15."
                },
                {
                    id: "zaelk1l1_s3", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "schwer", points: 10,
                    question: "Wie viele Finger hast du an beiden Händen?", answers: ["10", "5", "8", "12"], correct: 0,
                    explanation: "5 und 5 sind 10."
                },
                {
                    id: "zaelk1l1_s4", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "schwer", points: 10,
                    question: "🐟🐟🐟🐟🐟 🐟🐟🐟🐟🐟 🐟 Wie viele Fische?", answers: ["11", "10", "12", "9"], correct: 0,
                    explanation: "10 und 1 sind 11."
                }
            ]
        },
        test: [
                {
                    id: "zaelk1l1_t1", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "🎈🎈🎈🎈🎈 🎈🎈 Wie viele Ballons?", answers: ["7", "6", "8", "5"], correct: 0,
                    explanation: "5 und 2 sind 7."
                },
                {
                    id: "zaelk1l1_t2", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "🐞🐞🐞🐞 Wie viele Marienkäfer?", answers: ["4", "3", "5", "6"], correct: 0,
                    explanation: "Eins, zwei, drei, vier."
                },
                {
                    id: "zaelk1l1_t3", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "🍓🍓🍓🍓🍓 🍓🍓🍓🍓🍓 🍓🍓🍓 Wie viele Erdbeeren?", answers: ["13", "12", "14", "10"], correct: 0,
                    explanation: "10 und 3 sind 13."
                },
                {
                    id: "zaelk1l1_t4", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "🌸🌸🌸🌸🌸 🌸🌸🌸🌸🌸 Wie viele Blumen?", answers: ["10", "9", "11", "5"], correct: 0,
                    explanation: "5 und 5 sind 10."
                },
                {
                    id: "zaelk1l1_t5", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Wie viele Finger hat eine Hand?", answers: ["5", "4", "6", "10"], correct: 0,
                    explanation: "Eine Hand hat 5 Finger."
                },
                {
                    id: "zaelk1l1_t6", category: "kurs_zael_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "⚽⚽⚽⚽⚽ ⚽⚽⚽ Wie viele Bälle?", answers: ["8", "7", "9", "5"], correct: 0,
                    explanation: "5 und 3 sind 8."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "zael_k1_l2", kurs: "zaehlen_k1", order: 2, icon: "🐊",
        title: "Mehr oder weniger?", kurz: "Kleiner, größer, gleich",
        erklaerung: {
            intro: "Welche Zahl ist <b>größer</b>, welche <b>kleiner</b>? Dafür gibt es Zeichen: <b>&lt;</b> heißt kleiner als, <b>&gt;</b> heißt größer als, <b>=</b> heißt gleich. Die offene Seite zeigt immer zur größeren Zahl.",
            beispiele: ["3 < 5 – drei ist kleiner als fünf",
                "8 > 2 – acht ist größer als zwei",
                "4 = 4 – vier ist gleich vier"],
            merksatz: "Das Krokodil frisst immer die größere Zahl: 3 < 5."
        },
        uebung: {
            leicht: [
                {
                    id: "zaelk1l2_l1", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist größer als 5?", answers: ["8", "3", "5", "1"], correct: 0,
                    explanation: "8 ist größer als 5."
                },
                {
                    id: "zaelk1l2_l2", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist kleiner als 4?", answers: ["2", "4", "6", "9"], correct: 0,
                    explanation: "2 ist kleiner als 4."
                },
                {
                    id: "zaelk1l2_l3", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist größer als 7?", answers: ["9", "7", "2", "5"], correct: 0,
                    explanation: "9 ist größer als 7."
                },
                {
                    id: "zaelk1l2_l4", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist kleiner als 6?", answers: ["3", "6", "8", "10"], correct: 0,
                    explanation: "3 ist kleiner als 6."
                }
            ],
            mittel: [
                {
                    id: "zaelk1l2_m1", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Welches Zeichen passt: 3 ___ 5?", answers: ["<", ">", "=", "+"], correct: 0,
                    explanation: "3 ist kleiner als 5."
                },
                {
                    id: "zaelk1l2_m2", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Welches Zeichen passt: 8 ___ 2?", answers: [">", "<", "=", "−"], correct: 0,
                    explanation: "8 ist größer als 2."
                },
                {
                    id: "zaelk1l2_m3", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Welches Zeichen passt: 4 ___ 4?", answers: ["=", "<", ">", "+"], correct: 0,
                    explanation: "4 ist gleich 4."
                },
                {
                    id: "zaelk1l2_m4", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Welches Zeichen passt: 1 ___ 9?", answers: ["<", ">", "=", "+"], correct: 0,
                    explanation: "1 ist kleiner als 9."
                }
            ],
            schwer: [
                {
                    id: "zaelk1l2_s1", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "schwer", points: 10,
                    question: "Was stimmt?", answers: ["6 > 4", "6 < 4", "6 = 4", "4 > 6"], correct: 0,
                    explanation: "6 ist größer als 4."
                },
                {
                    id: "zaelk1l2_s2", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "schwer", points: 10,
                    question: "Was stimmt?", answers: ["3 < 10", "3 > 10", "3 = 10", "10 < 3"], correct: 0,
                    explanation: "3 ist kleiner als 10."
                },
                {
                    id: "zaelk1l2_s3", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "schwer", points: 10,
                    question: "Welches Zeichen passt: 12 ___ 15?", answers: ["<", ">", "=", "+"], correct: 0,
                    explanation: "12 ist kleiner als 15."
                },
                {
                    id: "zaelk1l2_s4", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "schwer", points: 10,
                    question: "Welches Zeichen passt: 17 ___ 11?", answers: [">", "<", "=", "−"], correct: 0,
                    explanation: "17 ist größer als 11."
                }
            ]
        },
        test: [
                {
                    id: "zaelk1l2_t1", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist größer als 9?", answers: ["12", "9", "6", "3"], correct: 0,
                    explanation: "12 ist größer als 9."
                },
                {
                    id: "zaelk1l2_t2", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist kleiner als 3?", answers: ["1", "3", "5", "8"], correct: 0,
                    explanation: "1 ist kleiner als 3."
                },
                {
                    id: "zaelk1l2_t3", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Welches Zeichen passt: 5 ___ 9?", answers: ["<", ">", "=", "+"], correct: 0,
                    explanation: "5 ist kleiner als 9."
                },
                {
                    id: "zaelk1l2_t4", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Welches Zeichen passt: 10 ___ 10?", answers: ["=", "<", ">", "−"], correct: 0,
                    explanation: "10 ist gleich 10."
                },
                {
                    id: "zaelk1l2_t5", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Was stimmt?", answers: ["14 > 8", "14 < 8", "14 = 8", "8 > 14"], correct: 0,
                    explanation: "14 ist größer als 8."
                },
                {
                    id: "zaelk1l2_t6", category: "kurs_zael_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Das Zeichen < heißt …", answers: ["kleiner als", "größer als", "gleich", "plus"], correct: 0,
                    explanation: "Die Spitze zeigt zur kleineren Zahl."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "zael_k1_l3", kurs: "zaehlen_k1", order: 3, icon: "📶",
        title: "Zahlen ordnen", kurz: "Von klein nach groß",
        erklaerung: {
            intro: "Zahlen kann man <b>ordnen</b>: von der kleinsten zur größten. 2, 5, 8 – jede Zahl ist größer als die davor.",
            beispiele: ["2, 5, 8 – richtig geordnet",
                "Die kleinste von 7, 3, 9 ist 3",
                "Die größte von 7, 3, 9 ist 9"],
            merksatz: "Kleinste Zahl zuerst – dann immer eine größere."
        },
        uebung: {
            leicht: [
                {
                    id: "zaelk1l3_l1", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist die kleinste: 6, 2, 9, 4?", answers: ["2", "4", "6", "9"], correct: 0,
                    explanation: "2 ist die kleinste."
                },
                {
                    id: "zaelk1l3_l2", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist die größte: 3, 8, 1, 5?", answers: ["8", "5", "3", "1"], correct: 0,
                    explanation: "8 ist die größte."
                },
                {
                    id: "zaelk1l3_l3", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist die kleinste: 7, 5, 10, 8?", answers: ["5", "7", "8", "10"], correct: 0,
                    explanation: "5 ist die kleinste."
                },
                {
                    id: "zaelk1l3_l4", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist die größte: 4, 9, 6, 2?", answers: ["9", "6", "4", "2"], correct: 0,
                    explanation: "9 ist die größte."
                }
            ],
            mittel: [
                {
                    id: "zaelk1l3_m1", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Was ist richtig geordnet?", answers: ["1, 4, 7", "4, 1, 7", "7, 4, 1", "1, 7, 4"], correct: 0,
                    explanation: "1, dann 4, dann 7."
                },
                {
                    id: "zaelk1l3_m2", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Was ist richtig geordnet?", answers: ["2, 5, 9", "5, 2, 9", "9, 5, 2", "2, 9, 5"], correct: 0,
                    explanation: "2, dann 5, dann 9."
                },
                {
                    id: "zaelk1l3_m3", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Was ist richtig geordnet?", answers: ["3, 6, 8", "6, 3, 8", "8, 6, 3", "3, 8, 6"], correct: 0,
                    explanation: "3, dann 6, dann 8."
                },
                {
                    id: "zaelk1l3_m4", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist die kleinste: 12, 9, 15, 11?", answers: ["9", "11", "12", "15"], correct: 0,
                    explanation: "9 ist die kleinste."
                }
            ],
            schwer: [
                {
                    id: "zaelk1l3_s1", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "schwer", points: 10,
                    question: "Welche Zahl ist die größte: 14, 19, 11, 16?", answers: ["19", "16", "14", "11"], correct: 0,
                    explanation: "19 ist die größte."
                },
                {
                    id: "zaelk1l3_s2", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "schwer", points: 10,
                    question: "Was ist richtig geordnet?", answers: ["8, 12, 17", "12, 8, 17", "17, 12, 8", "8, 17, 12"], correct: 0,
                    explanation: "8, dann 12, dann 17."
                },
                {
                    id: "zaelk1l3_s3", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "schwer", points: 10,
                    question: "Was ist richtig geordnet?", answers: ["5, 10, 15", "10, 5, 15", "15, 10, 5", "5, 15, 10"], correct: 0,
                    explanation: "5, dann 10, dann 15."
                },
                {
                    id: "zaelk1l3_s4", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "schwer", points: 10,
                    question: "Welche Zahl ist die kleinste: 20, 13, 18, 16?", answers: ["13", "16", "18", "20"], correct: 0,
                    explanation: "13 ist die kleinste."
                }
            ]
        },
        test: [
                {
                    id: "zaelk1l3_t1", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist die kleinste: 8, 3, 6, 10?", answers: ["3", "6", "8", "10"], correct: 0,
                    explanation: "3 ist die kleinste."
                },
                {
                    id: "zaelk1l3_t2", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist die größte: 7, 2, 12, 9?", answers: ["12", "9", "7", "2"], correct: 0,
                    explanation: "12 ist die größte."
                },
                {
                    id: "zaelk1l3_t3", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Was ist richtig geordnet?", answers: ["4, 7, 11", "7, 4, 11", "11, 7, 4", "4, 11, 7"], correct: 0,
                    explanation: "4, dann 7, dann 11."
                },
                {
                    id: "zaelk1l3_t4", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Was ist richtig geordnet?", answers: ["1, 2, 3", "3, 2, 1", "2, 1, 3", "1, 3, 2"], correct: 0,
                    explanation: "1, dann 2, dann 3."
                },
                {
                    id: "zaelk1l3_t5", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist die größte: 15, 18, 13, 17?", answers: ["18", "17", "15", "13"], correct: 0,
                    explanation: "18 ist die größte."
                },
                {
                    id: "zaelk1l3_t6", category: "kurs_zael_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "zaehlen", difficulty: "mittel", points: 10,
                    question: "Geordnet heißt: zuerst die …", answers: ["kleinste Zahl", "größte Zahl", "Zahl 10", "Zahl 5"], correct: 0,
                    explanation: "Von klein nach groß."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "nach_k1_l1", kurs: "nachbar_k1", order: 1, icon: "⬅️",
        title: "Vorgänger und Nachfolger", kurz: "Davor und danach",
        erklaerung: {
            intro: "Der <b>Vorgänger</b> ist die Zahl <b>davor</b> – 1 weniger. Der <b>Nachfolger</b> ist die Zahl <b>danach</b> – 1 mehr. Bei 5 ist der Vorgänger 4 und der Nachfolger 6.",
            beispiele: ["4 – 5 – 6",
                "Vorgänger von 5 ist 4",
                "Nachfolger von 5 ist 6"],
            merksatz: "Vorgänger = 1 weniger. Nachfolger = 1 mehr."
        },
        uebung: {
            leicht: [
                {
                    id: "nachk1l1_l1", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl kommt nach 3?", answers: ["4", "2", "5", "6"], correct: 0,
                    explanation: "Nach 3 kommt 4."
                },
                {
                    id: "nachk1l1_l2", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl kommt nach 7?", answers: ["8", "6", "9", "5"], correct: 0,
                    explanation: "Nach 7 kommt 8."
                },
                {
                    id: "nachk1l1_l3", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl kommt vor 5?", answers: ["4", "6", "3", "7"], correct: 0,
                    explanation: "Vor 5 kommt 4."
                },
                {
                    id: "nachk1l1_l4", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl kommt vor 9?", answers: ["8", "10", "7", "6"], correct: 0,
                    explanation: "Vor 9 kommt 8."
                }
            ],
            mittel: [
                {
                    id: "nachk1l1_m1", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Was ist der Nachfolger von 10?", answers: ["11", "9", "12", "20"], correct: 0,
                    explanation: "1 mehr als 10 ist 11."
                },
                {
                    id: "nachk1l1_m2", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Was ist der Vorgänger von 10?", answers: ["9", "11", "8", "1"], correct: 0,
                    explanation: "1 weniger als 10 ist 9."
                },
                {
                    id: "nachk1l1_m3", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Was ist der Nachfolger von 14?", answers: ["15", "13", "16", "24"], correct: 0,
                    explanation: "1 mehr als 14 ist 15."
                },
                {
                    id: "nachk1l1_m4", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Was ist der Vorgänger von 12?", answers: ["11", "13", "10", "2"], correct: 0,
                    explanation: "1 weniger als 12 ist 11."
                }
            ],
            schwer: [
                {
                    id: "nachk1l1_s1", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "schwer", points: 10,
                    question: "Was ist der Vorgänger von 20?", answers: ["19", "21", "18", "10"], correct: 0,
                    explanation: "1 weniger als 20 ist 19."
                },
                {
                    id: "nachk1l1_s2", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "schwer", points: 10,
                    question: "Was ist der Nachfolger von 19?", answers: ["20", "18", "21", "10"], correct: 0,
                    explanation: "1 mehr als 19 ist 20."
                },
                {
                    id: "nachk1l1_s3", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "schwer", points: 10,
                    question: "Was ist der Vorgänger von 16?", answers: ["15", "17", "14", "6"], correct: 0,
                    explanation: "1 weniger als 16 ist 15."
                },
                {
                    id: "nachk1l1_s4", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "schwer", points: 10,
                    question: "Was ist der Nachfolger von 17?", answers: ["18", "16", "19", "27"], correct: 0,
                    explanation: "1 mehr als 17 ist 18."
                }
            ]
        },
        test: [
                {
                    id: "nachk1l1_t1", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl kommt nach 6?", answers: ["7", "5", "8", "9"], correct: 0,
                    explanation: "Nach 6 kommt 7."
                },
                {
                    id: "nachk1l1_t2", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl kommt vor 3?", answers: ["2", "4", "1", "5"], correct: 0,
                    explanation: "Vor 3 kommt 2."
                },
                {
                    id: "nachk1l1_t3", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Was ist der Nachfolger von 11?", answers: ["12", "10", "13", "21"], correct: 0,
                    explanation: "1 mehr als 11 ist 12."
                },
                {
                    id: "nachk1l1_t4", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Was ist der Vorgänger von 15?", answers: ["14", "16", "13", "5"], correct: 0,
                    explanation: "1 weniger als 15 ist 14."
                },
                {
                    id: "nachk1l1_t5", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Was ist der Vorgänger von 18?", answers: ["17", "19", "16", "8"], correct: 0,
                    explanation: "1 weniger als 18 ist 17."
                },
                {
                    id: "nachk1l1_t6", category: "kurs_nach_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Der Nachfolger ist immer …", answers: ["1 mehr", "1 weniger", "2 mehr", "gleich"], correct: 0,
                    explanation: "Nachfolger heißt: eins danach."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "nach_k1_l2", kurs: "nachbar_k1", order: 2, icon: "🏘️",
        title: "Nachbarzahlen", kurz: "Links und rechts",
        erklaerung: {
            intro: "Jede Zahl hat zwei <b>Nachbarn</b>: links den Vorgänger (1 weniger) und rechts den Nachfolger (1 mehr). Die Nachbarn von <b>7</b> sind <b>6</b> und <b>8</b>.",
            beispiele: ["6 – 7 – 8",
                "Nachbarn von 7: 6 und 8",
                "Nachbarn von 10: 9 und 11"],
            merksatz: "Nachbarzahlen: eins weniger und eins mehr."
        },
        uebung: {
            leicht: [
                {
                    id: "nachk1l2_l1", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "leicht", points: 10,
                    question: "Was sind die Nachbarn von 5?", answers: ["4 und 6", "3 und 7", "5 und 6", "4 und 5"], correct: 0,
                    explanation: "4 – 5 – 6."
                },
                {
                    id: "nachk1l2_l2", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "leicht", points: 10,
                    question: "Was sind die Nachbarn von 3?", answers: ["2 und 4", "1 und 5", "3 und 4", "2 und 3"], correct: 0,
                    explanation: "2 – 3 – 4."
                },
                {
                    id: "nachk1l2_l3", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "leicht", points: 10,
                    question: "Was sind die Nachbarn von 8?", answers: ["7 und 9", "6 und 10", "8 und 9", "7 und 8"], correct: 0,
                    explanation: "7 – 8 – 9."
                },
                {
                    id: "nachk1l2_l4", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl fehlt: 4, ___, 6?", answers: ["5", "3", "7", "8"], correct: 0,
                    explanation: "4 – 5 – 6."
                }
            ],
            mittel: [
                {
                    id: "nachk1l2_m1", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Was sind die Nachbarn von 10?", answers: ["9 und 11", "8 und 12", "10 und 11", "9 und 10"], correct: 0,
                    explanation: "9 – 10 – 11."
                },
                {
                    id: "nachk1l2_m2", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 11, ___, 13?", answers: ["12", "14", "10", "21"], correct: 0,
                    explanation: "11 – 12 – 13."
                },
                {
                    id: "nachk1l2_m3", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Was sind die Nachbarn von 12?", answers: ["11 und 13", "10 und 14", "12 und 13", "11 und 12"], correct: 0,
                    explanation: "11 – 12 – 13."
                },
                {
                    id: "nachk1l2_m4", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 8, ___, 10?", answers: ["9", "7", "11", "12"], correct: 0,
                    explanation: "8 – 9 – 10."
                }
            ],
            schwer: [
                {
                    id: "nachk1l2_s1", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "schwer", points: 10,
                    question: "Was sind die Nachbarn von 19?", answers: ["18 und 20", "17 und 21", "19 und 20", "18 und 19"], correct: 0,
                    explanation: "18 – 19 – 20."
                },
                {
                    id: "nachk1l2_s2", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: ___, 15, 16?", answers: ["14", "13", "17", "12"], correct: 0,
                    explanation: "14 – 15 – 16."
                },
                {
                    id: "nachk1l2_s3", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "schwer", points: 10,
                    question: "Was sind die Nachbarn von 15?", answers: ["14 und 16", "13 und 17", "15 und 16", "14 und 15"], correct: 0,
                    explanation: "14 – 15 – 16."
                },
                {
                    id: "nachk1l2_s4", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: 17, 18, ___?", answers: ["19", "20", "16", "21"], correct: 0,
                    explanation: "17 – 18 – 19."
                }
            ]
        },
        test: [
                {
                    id: "nachk1l2_t1", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Was sind die Nachbarn von 6?", answers: ["5 und 7", "4 und 8", "6 und 7", "5 und 6"], correct: 0,
                    explanation: "5 – 6 – 7."
                },
                {
                    id: "nachk1l2_t2", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 2, ___, 4?", answers: ["3", "1", "5", "6"], correct: 0,
                    explanation: "2 – 3 – 4."
                },
                {
                    id: "nachk1l2_t3", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Was sind die Nachbarn von 14?", answers: ["13 und 15", "12 und 16", "14 und 15", "13 und 14"], correct: 0,
                    explanation: "13 – 14 – 15."
                },
                {
                    id: "nachk1l2_t4", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: ___, 10, 11?", answers: ["9", "8", "12", "13"], correct: 0,
                    explanation: "9 – 10 – 11."
                },
                {
                    id: "nachk1l2_t5", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Was sind die Nachbarn von 11?", answers: ["10 und 12", "9 und 13", "11 und 12", "10 und 11"], correct: 0,
                    explanation: "10 – 11 – 12."
                },
                {
                    id: "nachk1l2_t6", category: "kurs_nach_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Wie viele Nachbarzahlen hat die 5?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Die 4 und die 6."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "nach_k1_l3", kurs: "nachbar_k1", order: 3, icon: "🐸",
        title: "Zahlenreihen", kurz: "Immer gleich weiter",
        erklaerung: {
            intro: "In einer <b>Zahlenreihe</b> geht es immer gleich weiter. Schau, wie groß der <b>Sprung</b> ist: 2, 4, 6, 8 – immer <b>2 mehr</b>.",
            beispiele: ["1, 2, 3, 4 → immer 1 mehr",
                "2, 4, 6, 8 → immer 2 mehr",
                "5, 10, 15, 20 → immer 5 mehr"],
            merksatz: "Finde den Sprung – dann weißt du die nächste Zahl."
        },
        uebung: {
            leicht: [
                {
                    id: "nachk1l3_l1", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "leicht", points: 10,
                    question: "Wie geht es weiter: 1, 2, 3, ___?", answers: ["4", "5", "6", "7"], correct: 0,
                    explanation: "Immer 1 mehr."
                },
                {
                    id: "nachk1l3_l2", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "leicht", points: 10,
                    question: "Wie geht es weiter: 5, 6, 7, ___?", answers: ["8", "9", "10", "5"], correct: 0,
                    explanation: "Immer 1 mehr."
                },
                {
                    id: "nachk1l3_l3", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "leicht", points: 10,
                    question: "Wie geht es weiter: 2, 4, 6, ___?", answers: ["8", "7", "10", "9"], correct: 0,
                    explanation: "Immer 2 mehr."
                },
                {
                    id: "nachk1l3_l4", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "leicht", points: 10,
                    question: "Wie geht es weiter: 10, 9, 8, ___?", answers: ["7", "6", "5", "11"], correct: 0,
                    explanation: "Immer 1 weniger."
                }
            ],
            mittel: [
                {
                    id: "nachk1l3_m1", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Wie geht es weiter: 2, 4, 6, 8, ___?", answers: ["10", "9", "12", "11"], correct: 0,
                    explanation: "Immer 2 mehr."
                },
                {
                    id: "nachk1l3_m2", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Wie geht es weiter: 5, 10, 15, ___?", answers: ["20", "16", "25", "30"], correct: 0,
                    explanation: "Immer 5 mehr."
                },
                {
                    id: "nachk1l3_m3", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Wie geht es weiter: 1, 3, 5, ___?", answers: ["7", "6", "8", "9"], correct: 0,
                    explanation: "Immer 2 mehr."
                },
                {
                    id: "nachk1l3_m4", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Wie geht es weiter: 10, 8, 6, ___?", answers: ["4", "5", "2", "7"], correct: 0,
                    explanation: "Immer 2 weniger."
                }
            ],
            schwer: [
                {
                    id: "nachk1l3_s1", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: 2, 4, ___, 8?", answers: ["6", "5", "7", "3"], correct: 0,
                    explanation: "Immer 2 mehr."
                },
                {
                    id: "nachk1l3_s2", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: 5, ___, 15, 20?", answers: ["10", "8", "12", "11"], correct: 0,
                    explanation: "Immer 5 mehr."
                },
                {
                    id: "nachk1l3_s3", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "schwer", points: 10,
                    question: "Wie geht es weiter: 3, 6, 9, ___?", answers: ["12", "10", "11", "13"], correct: 0,
                    explanation: "Immer 3 mehr."
                },
                {
                    id: "nachk1l3_s4", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "schwer", points: 10,
                    question: "Wie groß ist der Sprung: 2, 4, 6, 8?", answers: ["2", "1", "4", "8"], correct: 0,
                    explanation: "Von 2 zu 4 sind es 2."
                }
            ]
        },
        test: [
                {
                    id: "nachk1l3_t1", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Wie geht es weiter: 3, 4, 5, ___?", answers: ["6", "7", "8", "2"], correct: 0,
                    explanation: "Immer 1 mehr."
                },
                {
                    id: "nachk1l3_t2", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Wie geht es weiter: 4, 6, 8, ___?", answers: ["10", "9", "12", "11"], correct: 0,
                    explanation: "Immer 2 mehr."
                },
                {
                    id: "nachk1l3_t3", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 1, 3, ___, 7?", answers: ["5", "4", "6", "2"], correct: 0,
                    explanation: "Immer 2 mehr."
                },
                {
                    id: "nachk1l3_t4", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Wie geht es weiter: 0, 5, 10, ___?", answers: ["15", "11", "20", "12"], correct: 0,
                    explanation: "Immer 5 mehr."
                },
                {
                    id: "nachk1l3_t5", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Wie geht es weiter: 12, 10, 8, ___?", answers: ["6", "7", "4", "5"], correct: 0,
                    explanation: "Immer 2 weniger."
                },
                {
                    id: "nachk1l3_t6", category: "kurs_nach_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "nachbarzahlen", difficulty: "mittel", points: 10,
                    question: "Wie groß ist der Sprung: 5, 10, 15, 20?", answers: ["5", "1", "10", "2"], correct: 0,
                    explanation: "Von 5 zu 10 sind es 5."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "plus_k1_l1", kurs: "plusrechnen_k1", order: 1, icon: "➕",
        title: "Plus bis 10", kurz: "Es kommt etwas dazu",
        erklaerung: {
            intro: "Bei <b>Plus</b> kommt etwas <b>dazu</b>. 🍎🍎🍎 und 🍎🍎 sind zusammen 🍎🍎🍎🍎🍎. Man schreibt: <b>3 + 2 = 5</b>.",
            beispiele: ["🍎🍎🍎 + 🍎🍎 = 5",
                "4 + 1 = 5",
                "2 + 2 = 4"],
            merksatz: "Plus heißt: es wird mehr."
        },
        uebung: {
            leicht: [
                {
                    id: "plusk1l1_l1", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "leicht", points: 10,
                    question: "Rechne: 2 + 1", answers: ["3", "2", "4", "1"], correct: 0,
                    explanation: "2 + 1 = 3"
                },
                {
                    id: "plusk1l1_l2", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "leicht", points: 10,
                    question: "Rechne: 3 + 2", answers: ["5", "4", "6", "1"], correct: 0,
                    explanation: "3 + 2 = 5"
                },
                {
                    id: "plusk1l1_l3", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "leicht", points: 10,
                    question: "Rechne: 4 + 3", answers: ["7", "6", "8", "1"], correct: 0,
                    explanation: "4 + 3 = 7"
                },
                {
                    id: "plusk1l1_l4", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "leicht", points: 10,
                    question: "Rechne: 1 + 5", answers: ["6", "5", "7", "4"], correct: 0,
                    explanation: "1 + 5 = 6"
                }
            ],
            mittel: [
                {
                    id: "plusk1l1_m1", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 5 + 3", answers: ["8", "7", "9", "2"], correct: 0,
                    explanation: "5 + 3 = 8"
                },
                {
                    id: "plusk1l1_m2", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 6 + 4", answers: ["10", "9", "11", "2"], correct: 0,
                    explanation: "6 + 4 = 10"
                },
                {
                    id: "plusk1l1_m3", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 2 + 7", answers: ["9", "8", "10", "5"], correct: 0,
                    explanation: "2 + 7 = 9"
                },
                {
                    id: "plusk1l1_m4", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 4 + 4", answers: ["8", "7", "9", "0"], correct: 0,
                    explanation: "4 + 4 = 8"
                }
            ],
            schwer: [
                {
                    id: "plusk1l1_s1", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: 3 + ___ = 7?", answers: ["4", "3", "5", "10"], correct: 0,
                    explanation: "3 + 4 = 7"
                },
                {
                    id: "plusk1l1_s2", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: 2 + ___ = 8?", answers: ["6", "5", "7", "10"], correct: 0,
                    explanation: "2 + 6 = 8"
                },
                {
                    id: "plusk1l1_s3", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: ___ + 4 = 9?", answers: ["5", "4", "6", "13"], correct: 0,
                    explanation: "5 + 4 = 9"
                },
                {
                    id: "plusk1l1_s4", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "schwer", points: 10,
                    question: "Rechne: 1 + 2 + 3", answers: ["6", "5", "7", "4"], correct: 0,
                    explanation: "1 + 2 + 3 = 6"
                }
            ]
        },
        test: [
                {
                    id: "plusk1l1_t1", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 1 + 3", answers: ["4", "3", "5", "2"], correct: 0,
                    explanation: "1 + 3 = 4"
                },
                {
                    id: "plusk1l1_t2", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 5 + 5", answers: ["10", "9", "11", "0"], correct: 0,
                    explanation: "5 + 5 = 10"
                },
                {
                    id: "plusk1l1_t3", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 6 + 3", answers: ["9", "8", "10", "3"], correct: 0,
                    explanation: "6 + 3 = 9"
                },
                {
                    id: "plusk1l1_t4", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 4 + ___ = 10?", answers: ["6", "5", "7", "14"], correct: 0,
                    explanation: "4 + 6 = 10"
                },
                {
                    id: "plusk1l1_t5", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 2 + 6", answers: ["8", "7", "9", "4"], correct: 0,
                    explanation: "2 + 6 = 8"
                },
                {
                    id: "plusk1l1_t6", category: "kurs_plus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 7 + 2", answers: ["9", "8", "10", "5"], correct: 0,
                    explanation: "7 + 2 = 9"
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "plus_k1_l2", kurs: "plusrechnen_k1", order: 2, icon: "💕",
        title: "Verliebte Zahlen", kurz: "Zusammen 10",
        erklaerung: {
            intro: "Zwei Zahlen sind <b>verliebt</b>, wenn sie zusammen <b>10</b> ergeben: 7 und 3, 6 und 4, 5 und 5. Deine zehn Finger helfen dir: Zeig 7 Finger – wie viele sind noch unten?",
            beispiele: ["1 + 9 = 10",
                "3 + 7 = 10",
                "5 + 5 = 10"],
            merksatz: "Verliebte Zahlen ergeben zusammen 10."
        },
        uebung: {
            leicht: [
                {
                    id: "plusk1l2_l1", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist mit der 9 verliebt?", answers: ["1", "2", "3", "9"], correct: 0,
                    explanation: "9 + 1 = 10"
                },
                {
                    id: "plusk1l2_l2", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist mit der 5 verliebt?", answers: ["5", "4", "6", "10"], correct: 0,
                    explanation: "5 + 5 = 10"
                },
                {
                    id: "plusk1l2_l3", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist mit der 8 verliebt?", answers: ["2", "3", "1", "8"], correct: 0,
                    explanation: "8 + 2 = 10"
                },
                {
                    id: "plusk1l2_l4", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist mit der 6 verliebt?", answers: ["4", "3", "5", "6"], correct: 0,
                    explanation: "6 + 4 = 10"
                }
            ],
            mittel: [
                {
                    id: "plusk1l2_m1", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 7 + ___ = 10?", answers: ["3", "2", "4", "7"], correct: 0,
                    explanation: "7 + 3 = 10"
                },
                {
                    id: "plusk1l2_m2", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 1 + ___ = 10?", answers: ["9", "8", "1", "10"], correct: 0,
                    explanation: "1 + 9 = 10"
                },
                {
                    id: "plusk1l2_m3", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: ___ + 4 = 10?", answers: ["6", "5", "4", "14"], correct: 0,
                    explanation: "6 + 4 = 10"
                },
                {
                    id: "plusk1l2_m4", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: ___ + 2 = 10?", answers: ["8", "7", "9", "12"], correct: 0,
                    explanation: "8 + 2 = 10"
                }
            ],
            schwer: [
                {
                    id: "plusk1l2_s1", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "schwer", points: 10,
                    question: "Welche zwei sind verliebte Zahlen?", answers: ["3 und 7", "3 und 6", "4 und 5", "2 und 9"], correct: 0,
                    explanation: "3 + 7 = 10"
                },
                {
                    id: "plusk1l2_s2", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "schwer", points: 10,
                    question: "Welche zwei sind verliebte Zahlen?", answers: ["4 und 6", "4 und 5", "3 und 8", "5 und 6"], correct: 0,
                    explanation: "4 + 6 = 10"
                },
                {
                    id: "plusk1l2_s3", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "schwer", points: 10,
                    question: "Welche zwei sind verliebte Zahlen?", answers: ["2 und 8", "2 und 7", "1 und 8", "3 und 8"], correct: 0,
                    explanation: "2 + 8 = 10"
                },
                {
                    id: "plusk1l2_s4", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: 10 = 5 + ___?", answers: ["5", "4", "6", "10"], correct: 0,
                    explanation: "5 + 5 = 10"
                }
            ]
        },
        test: [
                {
                    id: "plusk1l2_t1", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist mit der 3 verliebt?", answers: ["7", "6", "8", "3"], correct: 0,
                    explanation: "3 + 7 = 10"
                },
                {
                    id: "plusk1l2_t2", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 6 + ___ = 10?", answers: ["4", "3", "5", "6"], correct: 0,
                    explanation: "6 + 4 = 10"
                },
                {
                    id: "plusk1l2_t3", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: ___ + 8 = 10?", answers: ["2", "1", "3", "8"], correct: 0,
                    explanation: "2 + 8 = 10"
                },
                {
                    id: "plusk1l2_t4", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "mittel", points: 10,
                    question: "Welche zwei sind verliebte Zahlen?", answers: ["1 und 9", "1 und 8", "2 und 9", "6 und 5"], correct: 0,
                    explanation: "1 + 9 = 10"
                },
                {
                    id: "plusk1l2_t5", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist mit der 4 verliebt?", answers: ["6", "5", "7", "4"], correct: 0,
                    explanation: "4 + 6 = 10"
                },
                {
                    id: "plusk1l2_t6", category: "kurs_plus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "verliebte_zahlen", difficulty: "mittel", points: 10,
                    question: "Verliebte Zahlen ergeben zusammen …", answers: ["10", "5", "20", "100"], correct: 0,
                    explanation: "Immer 10."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "plus_k1_l3", kurs: "plusrechnen_k1", order: 3, icon: "🚀",
        title: "Plus bis 20", kurz: "Über die 10",
        erklaerung: {
            intro: "Über die 10 rechnest du in <b>zwei Schritten</b>: Erst bis zur 10 auffüllen, dann den Rest dazu. <b>8 + 5</b>: 8 + 2 = 10, dann + 3 = <b>13</b>. Und Verdoppeln ist ganz leicht: <b>7 + 7 = 14</b>.",
            beispiele: ["10 + 4 = 14",
                "8 + 5 → 8 + 2 + 3 = 13",
                "7 + 7 = 14 (Verdoppeln)"],
            merksatz: "Erst bis 10, dann weiter."
        },
        uebung: {
            leicht: [
                {
                    id: "plusk1l3_l1", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "leicht", points: 10,
                    question: "Rechne: 10 + 3", answers: ["13", "12", "14", "7"], correct: 0,
                    explanation: "10 + 3 = 13"
                },
                {
                    id: "plusk1l3_l2", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "leicht", points: 10,
                    question: "Rechne: 12 + 5", answers: ["17", "16", "18", "7"], correct: 0,
                    explanation: "12 + 5 = 17"
                },
                {
                    id: "plusk1l3_l3", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "leicht", points: 10,
                    question: "Rechne: 11 + 4", answers: ["15", "14", "16", "7"], correct: 0,
                    explanation: "11 + 4 = 15"
                },
                {
                    id: "plusk1l3_l4", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "leicht", points: 10,
                    question: "Rechne: 14 + 2", answers: ["16", "15", "17", "12"], correct: 0,
                    explanation: "14 + 2 = 16"
                }
            ],
            mittel: [
                {
                    id: "plusk1l3_m1", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 6 + 6", answers: ["12", "11", "13", "10"], correct: 0,
                    explanation: "Verdoppeln: 6 + 6 = 12"
                },
                {
                    id: "plusk1l3_m2", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 7 + 7", answers: ["14", "13", "15", "12"], correct: 0,
                    explanation: "Verdoppeln: 7 + 7 = 14"
                },
                {
                    id: "plusk1l3_m3", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 8 + 8", answers: ["16", "15", "17", "14"], correct: 0,
                    explanation: "Verdoppeln: 8 + 8 = 16"
                },
                {
                    id: "plusk1l3_m4", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 10 + 10", answers: ["20", "19", "11", "100"], correct: 0,
                    explanation: "Verdoppeln: 10 + 10 = 20"
                }
            ],
            schwer: [
                {
                    id: "plusk1l3_s1", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "schwer", points: 10,
                    question: "Rechne: 8 + 5", answers: ["13", "12", "14", "3"], correct: 0,
                    explanation: "8 + 2 = 10, dann + 3 = 13"
                },
                {
                    id: "plusk1l3_s2", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "schwer", points: 10,
                    question: "Rechne: 9 + 3", answers: ["12", "11", "13", "6"], correct: 0,
                    explanation: "9 + 1 = 10, dann + 2 = 12"
                },
                {
                    id: "plusk1l3_s3", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "schwer", points: 10,
                    question: "Rechne: 7 + 5", answers: ["12", "11", "13", "2"], correct: 0,
                    explanation: "7 + 3 = 10, dann + 2 = 12"
                },
                {
                    id: "plusk1l3_s4", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "schwer", points: 10,
                    question: "Rechne: 6 + 8", answers: ["14", "13", "15", "2"], correct: 0,
                    explanation: "6 + 4 = 10, dann + 4 = 14"
                }
            ]
        },
        test: [
                {
                    id: "plusk1l3_t1", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 10 + 7", answers: ["17", "16", "18", "3"], correct: 0,
                    explanation: "10 + 7 = 17"
                },
                {
                    id: "plusk1l3_t2", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 9 + 9", answers: ["18", "17", "19", "0"], correct: 0,
                    explanation: "Verdoppeln: 9 + 9 = 18"
                },
                {
                    id: "plusk1l3_t3", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 8 + 4", answers: ["12", "11", "13", "4"], correct: 0,
                    explanation: "8 + 2 = 10, dann + 2 = 12"
                },
                {
                    id: "plusk1l3_t4", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 13 + 5", answers: ["18", "17", "19", "8"], correct: 0,
                    explanation: "13 + 5 = 18"
                },
                {
                    id: "plusk1l3_t5", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 7 + 8", answers: ["15", "14", "16", "1"], correct: 0,
                    explanation: "7 + 3 = 10, dann + 5 = 15"
                },
                {
                    id: "plusk1l3_t6", category: "kurs_plus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Rechne: 5 + 9", answers: ["14", "13", "15", "4"], correct: 0,
                    explanation: "9 + 1 = 10, dann + 4 = 14"
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "minus_k1_l1", kurs: "minusrechnen_k1", order: 1, icon: "➖",
        title: "Minus bis 10", kurz: "Es wird etwas weggenommen",
        erklaerung: {
            intro: "Bei <b>Minus</b> wird etwas <b>weggenommen</b>. Du hast 5 Äpfel und isst 2 – dann bleiben <b>3</b>. Man schreibt: <b>5 − 2 = 3</b>.",
            beispiele: ["5 − 2 = 3",
                "7 − 1 = 6",
                "4 − 4 = 0"],
            merksatz: "Minus heißt: es wird weniger."
        },
        uebung: {
            leicht: [
                {
                    id: "minusk1l1_l1", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "leicht", points: 10,
                    question: "Rechne: 5 − 2", answers: ["3", "2", "4", "7"], correct: 0,
                    explanation: "5 − 2 = 3"
                },
                {
                    id: "minusk1l1_l2", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "leicht", points: 10,
                    question: "Rechne: 6 − 1", answers: ["5", "4", "6", "7"], correct: 0,
                    explanation: "6 − 1 = 5"
                },
                {
                    id: "minusk1l1_l3", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "leicht", points: 10,
                    question: "Rechne: 4 − 3", answers: ["1", "2", "0", "7"], correct: 0,
                    explanation: "4 − 3 = 1"
                },
                {
                    id: "minusk1l1_l4", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "leicht", points: 10,
                    question: "Rechne: 3 − 2", answers: ["1", "2", "0", "5"], correct: 0,
                    explanation: "3 − 2 = 1"
                }
            ],
            mittel: [
                {
                    id: "minusk1l1_m1", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 9 − 4", answers: ["5", "4", "6", "13"], correct: 0,
                    explanation: "9 − 4 = 5"
                },
                {
                    id: "minusk1l1_m2", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 10 − 3", answers: ["7", "6", "8", "13"], correct: 0,
                    explanation: "10 − 3 = 7"
                },
                {
                    id: "minusk1l1_m3", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 8 − 5", answers: ["3", "2", "4", "13"], correct: 0,
                    explanation: "8 − 5 = 3"
                },
                {
                    id: "minusk1l1_m4", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 7 − 7", answers: ["0", "1", "7", "14"], correct: 0,
                    explanation: "7 − 7 = 0"
                }
            ],
            schwer: [
                {
                    id: "minusk1l1_s1", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: 8 − ___ = 5?", answers: ["3", "2", "4", "13"], correct: 0,
                    explanation: "8 − 3 = 5"
                },
                {
                    id: "minusk1l1_s2", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: 10 − ___ = 6?", answers: ["4", "3", "5", "16"], correct: 0,
                    explanation: "10 − 4 = 6"
                },
                {
                    id: "minusk1l1_s3", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: ___ − 2 = 6?", answers: ["8", "4", "7", "9"], correct: 0,
                    explanation: "8 − 2 = 6"
                },
                {
                    id: "minusk1l1_s4", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "schwer", points: 10,
                    question: "Rechne: 9 − 3 − 2", answers: ["4", "3", "5", "6"], correct: 0,
                    explanation: "9 − 3 − 2 = 4"
                }
            ]
        },
        test: [
                {
                    id: "minusk1l1_t1", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 6 − 2", answers: ["4", "3", "5", "8"], correct: 0,
                    explanation: "6 − 2 = 4"
                },
                {
                    id: "minusk1l1_t2", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 10 − 5", answers: ["5", "4", "6", "15"], correct: 0,
                    explanation: "10 − 5 = 5"
                },
                {
                    id: "minusk1l1_t3", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 8 − 6", answers: ["2", "1", "3", "14"], correct: 0,
                    explanation: "8 − 6 = 2"
                },
                {
                    id: "minusk1l1_t4", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 7 − 4", answers: ["3", "2", "4", "11"], correct: 0,
                    explanation: "7 − 4 = 3"
                },
                {
                    id: "minusk1l1_t5", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 10 − ___ = 3?", answers: ["7", "6", "8", "13"], correct: 0,
                    explanation: "10 − 7 = 3"
                },
                {
                    id: "minusk1l1_t6", category: "kurs_minus_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 5 − 5", answers: ["0", "1", "5", "10"], correct: 0,
                    explanation: "5 − 5 = 0"
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "minus_k1_l2", kurs: "minusrechnen_k1", order: 2, icon: "🎢",
        title: "Minus bis 20", kurz: "Zurück über die 10",
        erklaerung: {
            intro: "Über die 10 zurück rechnest du auch in <b>zwei Schritten</b>: Erst zurück bis zur 10, dann weiter. <b>13 − 5</b>: 13 − 3 = 10, dann − 2 = <b>8</b>.",
            beispiele: ["17 − 4 = 13",
                "13 − 5 → 13 − 3 − 2 = 8",
                "20 − 10 = 10"],
            merksatz: "Erst zurück bis 10, dann weiter."
        },
        uebung: {
            leicht: [
                {
                    id: "minusk1l2_l1", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "leicht", points: 10,
                    question: "Rechne: 15 − 3", answers: ["12", "11", "13", "18"], correct: 0,
                    explanation: "15 − 3 = 12"
                },
                {
                    id: "minusk1l2_l2", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "leicht", points: 10,
                    question: "Rechne: 18 − 5", answers: ["13", "12", "14", "23"], correct: 0,
                    explanation: "18 − 5 = 13"
                },
                {
                    id: "minusk1l2_l3", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "leicht", points: 10,
                    question: "Rechne: 17 − 2", answers: ["15", "14", "16", "19"], correct: 0,
                    explanation: "17 − 2 = 15"
                },
                {
                    id: "minusk1l2_l4", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "leicht", points: 10,
                    question: "Rechne: 19 − 6", answers: ["13", "12", "14", "25"], correct: 0,
                    explanation: "19 − 6 = 13"
                }
            ],
            mittel: [
                {
                    id: "minusk1l2_m1", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 20 − 10", answers: ["10", "0", "20", "30"], correct: 0,
                    explanation: "20 − 10 = 10"
                },
                {
                    id: "minusk1l2_m2", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 16 − 6", answers: ["10", "9", "11", "22"], correct: 0,
                    explanation: "16 − 6 = 10"
                },
                {
                    id: "minusk1l2_m3", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 14 − 4", answers: ["10", "9", "11", "18"], correct: 0,
                    explanation: "14 − 4 = 10"
                },
                {
                    id: "minusk1l2_m4", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 20 − 5", answers: ["15", "14", "16", "25"], correct: 0,
                    explanation: "20 − 5 = 15"
                }
            ],
            schwer: [
                {
                    id: "minusk1l2_s1", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "schwer", points: 10,
                    question: "Rechne: 13 − 5", answers: ["8", "7", "9", "18"], correct: 0,
                    explanation: "13 − 3 = 10, dann − 2 = 8"
                },
                {
                    id: "minusk1l2_s2", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "schwer", points: 10,
                    question: "Rechne: 12 − 7", answers: ["5", "4", "6", "19"], correct: 0,
                    explanation: "12 − 2 = 10, dann − 5 = 5"
                },
                {
                    id: "minusk1l2_s3", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "schwer", points: 10,
                    question: "Rechne: 15 − 7", answers: ["8", "7", "9", "22"], correct: 0,
                    explanation: "15 − 5 = 10, dann − 2 = 8"
                },
                {
                    id: "minusk1l2_s4", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "schwer", points: 10,
                    question: "Rechne: 11 − 4", answers: ["7", "6", "8", "15"], correct: 0,
                    explanation: "11 − 1 = 10, dann − 3 = 7"
                }
            ]
        },
        test: [
                {
                    id: "minusk1l2_t1", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 18 − 3", answers: ["15", "14", "16", "21"], correct: 0,
                    explanation: "18 − 3 = 15"
                },
                {
                    id: "minusk1l2_t2", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 20 − 8", answers: ["12", "11", "13", "28"], correct: 0,
                    explanation: "20 − 8 = 12"
                },
                {
                    id: "minusk1l2_t3", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 14 − 5", answers: ["9", "8", "10", "19"], correct: 0,
                    explanation: "14 − 4 = 10, dann − 1 = 9"
                },
                {
                    id: "minusk1l2_t4", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 16 − 10", answers: ["6", "5", "7", "26"], correct: 0,
                    explanation: "16 − 10 = 6"
                },
                {
                    id: "minusk1l2_t5", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 12 − 3", answers: ["9", "8", "10", "15"], correct: 0,
                    explanation: "12 − 2 = 10, dann − 1 = 9"
                },
                {
                    id: "minusk1l2_t6", category: "kurs_minus_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Rechne: 17 − 9", answers: ["8", "7", "9", "26"], correct: 0,
                    explanation: "17 − 7 = 10, dann − 2 = 8"
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "minus_k1_l3", kurs: "minusrechnen_k1", order: 3, icon: "📖",
        title: "Rechengeschichten", kurz: "Plus oder Minus?",
        erklaerung: {
            intro: "In einer <b>Rechengeschichte</b> steckt eine Aufgabe. Frag dich: Kommt etwas <b>dazu</b>? Dann rechnest du plus. Geht etwas <b>weg</b>? Dann rechnest du minus.",
            beispiele: ["Tom hat 5 Äpfel und isst 2. → 5 − 2 = 3",
                "Mia hat 3 Stifte und bekommt 4. → 3 + 4 = 7",
                "Wörter wie weg, isst, verliert heißen minus."],
            merksatz: "Dazu = plus. Weg = minus."
        },
        uebung: {
            leicht: [
                {
                    id: "minusk1l3_l1", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "leicht", points: 10,
                    question: "Tom hat 5 Äpfel. Er isst 2. Wie viele bleiben?", answers: ["3", "7", "2", "4"], correct: 0,
                    explanation: "5 − 2 = 3"
                },
                {
                    id: "minusk1l3_l2", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "leicht", points: 10,
                    question: "Mia hat 3 Stifte. Sie bekommt 4 dazu. Wie viele hat sie?", answers: ["7", "1", "6", "8"], correct: 0,
                    explanation: "3 + 4 = 7"
                },
                {
                    id: "minusk1l3_l3", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "leicht", points: 10,
                    question: "6 Vögel sitzen am Ast. 2 fliegen weg. Wie viele bleiben?", answers: ["4", "8", "3", "5"], correct: 0,
                    explanation: "6 − 2 = 4"
                },
                {
                    id: "minusk1l3_l4", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "leicht", points: 10,
                    question: "Ali hat 4 Murmeln. Lena gibt ihm 5. Wie viele hat er?", answers: ["9", "1", "8", "10"], correct: 0,
                    explanation: "4 + 5 = 9"
                }
            ],
            mittel: [
                {
                    id: "minusk1l3_m1", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Im Bus sitzen 8 Kinder. 3 steigen aus. Wie viele bleiben?", answers: ["5", "11", "4", "6"], correct: 0,
                    explanation: "8 − 3 = 5"
                },
                {
                    id: "minusk1l3_m2", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Oma backt 6 Kekse und dann noch 6. Wie viele sind es?", answers: ["12", "0", "11", "13"], correct: 0,
                    explanation: "6 + 6 = 12"
                },
                {
                    id: "minusk1l3_m3", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Lena hat 10 €. Ein Buch kostet 4 €. Wie viel bleibt?", answers: ["6 €", "14 €", "5 €", "7 €"], correct: 0,
                    explanation: "10 − 4 = 6"
                },
                {
                    id: "minusk1l3_m4", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "7 Kühe grasen. 5 kommen dazu. Wie viele sind es?", answers: ["12", "2", "11", "13"], correct: 0,
                    explanation: "7 + 5 = 12"
                }
            ],
            schwer: [
                {
                    id: "minusk1l3_s1", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "schwer", points: 10,
                    question: "Tom hat 15 Bonbons. Er verschenkt 6. Wie viele hat er noch?", answers: ["9", "21", "8", "10"], correct: 0,
                    explanation: "15 − 6 = 9"
                },
                {
                    id: "minusk1l3_s2", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "schwer", points: 10,
                    question: "Mia liest 8 Seiten, dann noch 7. Wie viele Seiten sind das?", answers: ["15", "1", "14", "16"], correct: 0,
                    explanation: "8 + 7 = 15"
                },
                {
                    id: "minusk1l3_s3", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "schwer", points: 10,
                    question: "12 Luftballons. 5 platzen. Wie viele sind noch da?", answers: ["7", "17", "6", "8"], correct: 0,
                    explanation: "12 − 5 = 7"
                },
                {
                    id: "minusk1l3_s4", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "schwer", points: 10,
                    question: "Ali hat 20 Sticker. Er gibt 10 ab. Wie viele hat er noch?", answers: ["10", "30", "9", "11"], correct: 0,
                    explanation: "20 − 10 = 10"
                }
            ]
        },
        test: [
                {
                    id: "minusk1l3_t1", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Im Korb sind 9 Eier. 4 gehen kaputt. Wie viele sind ganz?", answers: ["5", "13", "4", "6"], correct: 0,
                    explanation: "9 − 4 = 5"
                },
                {
                    id: "minusk1l3_t2", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Papa hat 5 Schrauben. Er findet 6 dazu. Wie viele hat er?", answers: ["11", "1", "10", "12"], correct: 0,
                    explanation: "5 + 6 = 11"
                },
                {
                    id: "minusk1l3_t3", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Lena hat 14 Perlen. Sie verliert 5. Wie viele hat sie noch?", answers: ["9", "19", "8", "10"], correct: 0,
                    explanation: "14 − 5 = 9"
                },
                {
                    id: "minusk1l3_t4", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "addition", difficulty: "mittel", points: 10,
                    question: "Tom hat 9 Autos. Er bekommt 3 dazu. Wie viele hat er?", answers: ["12", "6", "11", "13"], correct: 0,
                    explanation: "9 + 3 = 12"
                },
                {
                    id: "minusk1l3_t5", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Mia hat 7 Kekse und isst alle 7. Wie viele bleiben?", answers: ["0", "14", "1", "7"], correct: 0,
                    explanation: "7 − 7 = 0"
                },
                {
                    id: "minusk1l3_t6", category: "kurs_minus_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "subtraktion", difficulty: "mittel", points: 10,
                    question: "Etwas geht weg. Welche Rechnung passt?", answers: ["minus", "plus", "mal", "geteilt"], correct: 0,
                    explanation: "Weg heißt minus."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "geld_k1_l1", kurs: "geld_k1", order: 1, icon: "💰",
        title: "Münzen und Scheine", kurz: "Euro und Cent",
        erklaerung: {
            intro: "Wir bezahlen mit <b>Euro</b> (€) und <b>Cent</b> (ct). Es gibt <b>Münzen</b> von 1 ct bis 2 € und <b>Scheine</b> ab 5 €. <b>100 Cent</b> sind <b>1 Euro</b>.",
            beispiele: ["Münzen: 1 ct, 2 ct, 5 ct, 10 ct, 20 ct, 50 ct, 1 €, 2 €",
                "Scheine: 5 €, 10 €, 20 €",
                "100 ct = 1 €"],
            merksatz: "100 Cent sind 1 Euro."
        },
        uebung: {
            leicht: [
                {
                    id: "geldk1l1_l1", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "leicht", points: 10,
                    question: "Was ist am meisten wert?", answers: ["2 €", "1 €", "50 ct", "20 ct"], correct: 0,
                    explanation: "2 Euro sind am meisten."
                },
                {
                    id: "geldk1l1_l2", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "leicht", points: 10,
                    question: "Was ist am wenigsten wert?", answers: ["1 ct", "5 ct", "10 ct", "1 €"], correct: 0,
                    explanation: "1 Cent ist am wenigsten."
                },
                {
                    id: "geldk1l1_l3", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "leicht", points: 10,
                    question: "Wie viele Cent sind 1 Euro?", answers: ["100", "10", "50", "1000"], correct: 0,
                    explanation: "100 Cent sind 1 Euro."
                },
                {
                    id: "geldk1l1_l4", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "leicht", points: 10,
                    question: "Was ist ein Geldschein?", answers: ["10 €", "2 €", "50 ct", "1 €"], correct: 0,
                    explanation: "Ab 5 Euro gibt es Scheine."
                }
            ],
            mittel: [
                {
                    id: "geldk1l1_m1", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Was ist am meisten wert?", answers: ["5 €", "2 €", "1 €", "50 ct"], correct: 0,
                    explanation: "5 Euro sind am meisten."
                },
                {
                    id: "geldk1l1_m2", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Was ist am meisten wert?", answers: ["1 €", "50 ct", "20 ct", "10 ct"], correct: 0,
                    explanation: "1 Euro sind 100 Cent."
                },
                {
                    id: "geldk1l1_m3", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Welche Münze gibt es NICHT?", answers: ["3 €", "2 €", "1 €", "50 ct"], correct: 0,
                    explanation: "Eine 3-Euro-Münze gibt es nicht."
                },
                {
                    id: "geldk1l1_m4", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Welcher Schein ist der kleinste?", answers: ["5 €", "10 €", "20 €", "50 €"], correct: 0,
                    explanation: "Der kleinste Schein ist 5 Euro."
                }
            ],
            schwer: [
                {
                    id: "geldk1l1_s1", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "schwer", points: 10,
                    question: "Welche Münze gibt es NICHT?", answers: ["30 ct", "20 ct", "10 ct", "50 ct"], correct: 0,
                    explanation: "Eine 30-Cent-Münze gibt es nicht."
                },
                {
                    id: "geldk1l1_s2", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "schwer", points: 10,
                    question: "Wie viele 50-ct-Münzen sind 1 €?", answers: ["2", "1", "5", "50"], correct: 0,
                    explanation: "50 ct + 50 ct = 100 ct = 1 €"
                },
                {
                    id: "geldk1l1_s3", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "schwer", points: 10,
                    question: "Wie viele 1-€-Münzen sind 5 €?", answers: ["5", "1", "2", "10"], correct: 0,
                    explanation: "1 + 1 + 1 + 1 + 1 = 5"
                },
                {
                    id: "geldk1l1_s4", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "schwer", points: 10,
                    question: "Was ist gleich viel wert wie 1 €?", answers: ["100 ct", "10 ct", "50 ct", "1 ct"], correct: 0,
                    explanation: "100 Cent sind 1 Euro."
                }
            ]
        },
        test: [
                {
                    id: "geldk1l1_t1", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Was ist am meisten wert?", answers: ["20 €", "10 €", "5 €", "2 €"], correct: 0,
                    explanation: "20 Euro sind am meisten."
                },
                {
                    id: "geldk1l1_t2", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Was ist am wenigsten wert?", answers: ["2 ct", "5 ct", "20 ct", "2 €"], correct: 0,
                    explanation: "2 Cent sind am wenigsten."
                },
                {
                    id: "geldk1l1_t3", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Welche Münze gibt es NICHT?", answers: ["4 €", "2 €", "1 €", "20 ct"], correct: 0,
                    explanation: "Eine 4-Euro-Münze gibt es nicht."
                },
                {
                    id: "geldk1l1_t4", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Wie viele 2-€-Münzen sind 10 €?", answers: ["5", "2", "10", "20"], correct: 0,
                    explanation: "2 + 2 + 2 + 2 + 2 = 10"
                },
                {
                    id: "geldk1l1_t5", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Was ist ein Geldschein?", answers: ["20 €", "2 €", "20 ct", "1 €"], correct: 0,
                    explanation: "Ab 5 Euro gibt es Scheine."
                },
                {
                    id: "geldk1l1_t6", category: "kurs_geld_k1_l1", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Wie viele 10-ct-Münzen sind 1 €?", answers: ["10", "100", "5", "1"], correct: 0,
                    explanation: "Zehnmal 10 Cent sind 100 Cent."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "geld_k1_l2", kurs: "geld_k1", order: 2, icon: "🐷",
        title: "Geld zählen", kurz: "Großes Geld zuerst",
        erklaerung: {
            intro: "Beim Geldzählen fängst du mit dem <b>größten</b> Stück an und zählst dann dazu: <b>5 € + 2 € + 1 €</b> = 8 €.",
            beispiele: ["5 € + 2 € = 7 €",
                "10 € + 5 € = 15 €",
                "50 ct + 50 ct = 1 €"],
            merksatz: "Großes Geld zuerst, dann dazuzählen."
        },
        uebung: {
            leicht: [
                {
                    id: "geldk1l2_l1", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "leicht", points: 10,
                    question: "Wie viel ist das: 2 € + 1 €?", answers: ["3 €", "2 €", "4 €", "1 €"], correct: 0,
                    explanation: "2 € + 1 € = 3 €"
                },
                {
                    id: "geldk1l2_l2", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "leicht", points: 10,
                    question: "Wie viel ist das: 5 € + 2 €?", answers: ["7 €", "6 €", "8 €", "3 €"], correct: 0,
                    explanation: "5 € + 2 € = 7 €"
                },
                {
                    id: "geldk1l2_l3", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "leicht", points: 10,
                    question: "Wie viel ist das: 10 € + 5 €?", answers: ["15 €", "10 €", "20 €", "5 €"], correct: 0,
                    explanation: "10 € + 5 € = 15 €"
                },
                {
                    id: "geldk1l2_l4", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "leicht", points: 10,
                    question: "Wie viel ist das: 2 € + 2 €?", answers: ["4 €", "2 €", "5 €", "3 €"], correct: 0,
                    explanation: "2 € + 2 € = 4 €"
                }
            ],
            mittel: [
                {
                    id: "geldk1l2_m1", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Wie viel ist das: 5 € + 2 € + 1 €?", answers: ["8 €", "7 €", "9 €", "6 €"], correct: 0,
                    explanation: "5 € + 2 € + 1 € = 8 €"
                },
                {
                    id: "geldk1l2_m2", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Wie viel ist das: 10 € + 2 € + 2 €?", answers: ["14 €", "12 €", "13 €", "15 €"], correct: 0,
                    explanation: "10 € + 2 € + 2 € = 14 €"
                },
                {
                    id: "geldk1l2_m3", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Wie viel ist das: 10 ct + 5 ct?", answers: ["15 ct", "5 ct", "10 ct", "20 ct"], correct: 0,
                    explanation: "10 ct + 5 ct = 15 ct"
                },
                {
                    id: "geldk1l2_m4", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Wie viel ist das: 20 ct + 20 ct?", answers: ["40 ct", "20 ct", "30 ct", "50 ct"], correct: 0,
                    explanation: "20 ct + 20 ct = 40 ct"
                }
            ],
            schwer: [
                {
                    id: "geldk1l2_s1", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "schwer", points: 10,
                    question: "Wie viel ist das: 10 € + 5 € + 2 €?", answers: ["17 €", "15 €", "16 €", "18 €"], correct: 0,
                    explanation: "10 € + 5 € + 2 € = 17 €"
                },
                {
                    id: "geldk1l2_s2", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "schwer", points: 10,
                    question: "Wie viel ist das: 50 ct + 50 ct?", answers: ["1 €", "50 ct", "2 €", "100 €"], correct: 0,
                    explanation: "50 ct + 50 ct = 100 ct = 1 €"
                },
                {
                    id: "geldk1l2_s3", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "schwer", points: 10,
                    question: "Wie viel ist das: 20 ct + 10 ct + 5 ct?", answers: ["35 ct", "30 ct", "25 ct", "40 ct"], correct: 0,
                    explanation: "20 ct + 10 ct + 5 ct = 35 ct"
                },
                {
                    id: "geldk1l2_s4", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "schwer", points: 10,
                    question: "Wie viel ist das: 10 € + 10 €?", answers: ["20 €", "10 €", "11 €", "100 €"], correct: 0,
                    explanation: "10 € + 10 € = 20 €"
                }
            ]
        },
        test: [
                {
                    id: "geldk1l2_t1", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Wie viel ist das: 5 € + 5 €?", answers: ["10 €", "5 €", "15 €", "11 €"], correct: 0,
                    explanation: "5 € + 5 € = 10 €"
                },
                {
                    id: "geldk1l2_t2", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Wie viel ist das: 2 € + 1 € + 1 €?", answers: ["4 €", "3 €", "5 €", "2 €"], correct: 0,
                    explanation: "2 € + 1 € + 1 € = 4 €"
                },
                {
                    id: "geldk1l2_t3", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Wie viel ist das: 10 € + 2 € + 1 €?", answers: ["13 €", "12 €", "14 €", "3 €"], correct: 0,
                    explanation: "10 € + 2 € + 1 € = 13 €"
                },
                {
                    id: "geldk1l2_t4", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Wie viel ist das: 5 ct + 2 ct?", answers: ["7 ct", "5 ct", "3 ct", "10 ct"], correct: 0,
                    explanation: "5 ct + 2 ct = 7 ct"
                },
                {
                    id: "geldk1l2_t5", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Wie viel ist das: 10 ct + 10 ct + 5 ct?", answers: ["25 ct", "20 ct", "15 ct", "30 ct"], correct: 0,
                    explanation: "10 ct + 10 ct + 5 ct = 25 ct"
                },
                {
                    id: "geldk1l2_t6", category: "kurs_geld_k1_l2", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Womit fängst du beim Zählen an?", answers: ["mit dem größten", "mit dem kleinsten", "mit Cent", "egal"], correct: 0,
                    explanation: "Großes Geld zuerst."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "geld_k1_l3", kurs: "geld_k1", order: 3, icon: "🛒",
        title: "Einkaufen", kurz: "Reicht das Geld?",
        erklaerung: {
            intro: "Beim Einkaufen fragst du dich: <b>Reicht mein Geld?</b> Und wie viel bekomme ich <b>zurück</b>? Zurück bekommst du: bezahlt minus Preis.",
            beispiele: ["Eis 2 €, du gibst 5 € → 3 € zurück",
                "Buch 8 €, du hast 10 € → reicht",
                "Ball 12 €, du hast 10 € → reicht nicht"],
            merksatz: "Wechselgeld = bezahlt minus Preis."
        },
        uebung: {
            leicht: [
                {
                    id: "geldk1l3_l1", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "leicht", points: 10,
                    question: "Ein Eis kostet 2 €. Du hast 5 €. Reicht das?", answers: ["ja", "nein", "nur fast", "weiß nicht"], correct: 0,
                    explanation: "5 € ist mehr als 2 €."
                },
                {
                    id: "geldk1l3_l2", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "leicht", points: 10,
                    question: "Ein Ball kostet 8 €. Du hast 5 €. Reicht das?", answers: ["nein", "ja", "nur fast", "weiß nicht"], correct: 0,
                    explanation: "5 € ist weniger als 8 €."
                },
                {
                    id: "geldk1l3_l3", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "leicht", points: 10,
                    question: "Was ist teurer: Buch 7 € oder Stift 2 €?", answers: ["das Buch", "der Stift", "gleich teuer", "keins"], correct: 0,
                    explanation: "7 € ist mehr als 2 €."
                },
                {
                    id: "geldk1l3_l4", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "leicht", points: 10,
                    question: "Was ist billiger: Apfel 1 € oder Saft 3 €?", answers: ["der Apfel", "der Saft", "gleich teuer", "keins"], correct: 0,
                    explanation: "1 € ist weniger als 3 €."
                }
            ],
            mittel: [
                {
                    id: "geldk1l3_m1", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Eis: 2 €. Du gibst 5 €. Wie viel bekommst du zurück?", answers: ["3 €", "7 €", "2 €", "4 €"], correct: 0,
                    explanation: "5 − 2 = 3"
                },
                {
                    id: "geldk1l3_m2", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Saft: 3 €. Du gibst 10 €. Wie viel bekommst du zurück?", answers: ["7 €", "13 €", "6 €", "8 €"], correct: 0,
                    explanation: "10 − 3 = 7"
                },
                {
                    id: "geldk1l3_m3", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Brot: 4 €. Du gibst 5 €. Wie viel bekommst du zurück?", answers: ["1 €", "9 €", "2 €", "0 €"], correct: 0,
                    explanation: "5 − 4 = 1"
                },
                {
                    id: "geldk1l3_m4", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Buch: 6 €. Du gibst 10 €. Wie viel bekommst du zurück?", answers: ["4 €", "16 €", "3 €", "5 €"], correct: 0,
                    explanation: "10 − 6 = 4"
                }
            ],
            schwer: [
                {
                    id: "geldk1l3_s1", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "schwer", points: 10,
                    question: "Apfel 2 € und Saft 3 €. Was kostet beides?", answers: ["5 €", "1 €", "6 €", "4 €"], correct: 0,
                    explanation: "2 + 3 = 5"
                },
                {
                    id: "geldk1l3_s2", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "schwer", points: 10,
                    question: "Stift 1 € und Heft 2 €. Was kostet beides?", answers: ["3 €", "1 €", "2 €", "4 €"], correct: 0,
                    explanation: "1 + 2 = 3"
                },
                {
                    id: "geldk1l3_s3", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "schwer", points: 10,
                    question: "Ball: 12 €. Du gibst 20 €. Wie viel bekommst du zurück?", answers: ["8 €", "32 €", "7 €", "9 €"], correct: 0,
                    explanation: "20 − 12 = 8"
                },
                {
                    id: "geldk1l3_s4", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "schwer", points: 10,
                    question: "Puppe 15 €, du hast 10 €. Wie viel fehlt?", answers: ["5 €", "25 €", "4 €", "10 €"], correct: 0,
                    explanation: "15 − 10 = 5"
                }
            ]
        },
        test: [
                {
                    id: "geldk1l3_t1", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Ein Eis kostet 1 €. Du hast 2 €. Reicht das?", answers: ["ja", "nein", "nur fast", "weiß nicht"], correct: 0,
                    explanation: "2 € ist mehr als 1 €."
                },
                {
                    id: "geldk1l3_t2", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Kuchen: 3 €. Du gibst 5 €. Wie viel bekommst du zurück?", answers: ["2 €", "8 €", "3 €", "1 €"], correct: 0,
                    explanation: "5 − 3 = 2"
                },
                {
                    id: "geldk1l3_t3", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Brot 2 € und Milch 1 €. Was kostet beides?", answers: ["3 €", "1 €", "4 €", "2 €"], correct: 0,
                    explanation: "2 + 1 = 3"
                },
                {
                    id: "geldk1l3_t4", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Auto: 9 €. Du gibst 10 €. Wie viel bekommst du zurück?", answers: ["1 €", "19 €", "2 €", "0 €"], correct: 0,
                    explanation: "10 − 9 = 1"
                },
                {
                    id: "geldk1l3_t5", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Was ist teurer: Saft 4 € oder Wasser 1 €?", answers: ["der Saft", "das Wasser", "gleich teuer", "keins"], correct: 0,
                    explanation: "4 € ist mehr als 1 €."
                },
                {
                    id: "geldk1l3_t6", category: "kurs_geld_k1_l3", area: "schule", grade: 1,
                    subject: "mathe", topic: "groessen_messen", difficulty: "mittel", points: 10,
                    question: "Wechselgeld ist …", answers: ["bezahlt minus Preis", "Preis plus bezahlt", "immer 1 €", "immer 0 €"], correct: 0,
                    explanation: "Was du gibst, minus was es kostet."
                }
        ],
        bestehenAb: 0.75
    }
    ];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) {
        extraKurse.forEach(function (k) {
            if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k);
        });
    }
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) {
            if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l);
        });
    }
    if (typeof window !== "undefined") {
        window.MATHE_K1_KURSE = extraKurse;
        window.MATHE_K1_LEKTIONEN = extraLektionen;
    }
})();
