// Mathe Klasse 2 - Einmaleins: der Einstieg (mal verstehen, Kernaufgaben,
// 3er/4er-Reihe, Quadratzahlen). Die 6er- bis 9er-Reihe und das Teilen
// bleiben im Klasse-3-Kurs einmaleins_k3. Erzeugt aus /tmp/mk2/d1.js.
// Die Themen (topic) entsprechen genau den Wissensfragen derselben Klasse, damit
// die Kurs-Empfehlung aus dem Wissen-Modus den passenden Kurs findet.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "einmaleins_k2", title: "Einmaleins: der Einstieg", icon: "🍫", grade: 2, subject: "mathe", beschreibung: "Verstehen, was mal heißt, die Kernaufgaben und die 3er- und 4er-Reihe." }
    ];
    const extraLektionen = [
    {
        id: "mal_k2_l1", kurs: "einmaleins_k2", order: 1, icon: "🍫",
        title: "Was heißt mal?", kurz: "Gleiche Päckchen zählen",
        erklaerung: {
            intro: "<b>Mal</b> ist eine Abkürzung für Plus mit <b>gleichen</b> Zahlen. 🍎🍎 🍎🍎 🍎🍎 sind <b>3-mal 2</b> Äpfel: 2 + 2 + 2 = <b>3 · 2</b> = 6. Der Punkt <b>·</b> heißt mal.",
            beispiele: ["🍎🍎 🍎🍎 🍎🍎 → 3 · 2 = 6",
                "5 + 5 + 5 + 5 → 4 · 5 = 20",
                "Der Punkt · heißt mal."],
            merksatz: "So viele Päckchen · so viele in jedem Päckchen."
        },
        uebung: {
            leicht: [
                {
                    id: "malk2l1_l1", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "leicht", points: 10,
                    question: "🍎🍎 🍎🍎 🍎🍎 Welche Malaufgabe passt?", answers: ["3 · 2", "2 · 2", "3 · 3", "6 · 2"], correct: 0,
                    explanation: "3 Päckchen mit je 2: 3 · 2 = 6"
                },
                {
                    id: "malk2l1_l2", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "leicht", points: 10,
                    question: "⭐⭐⭐⭐⭐ ⭐⭐⭐⭐⭐ Welche Malaufgabe passt?", answers: ["2 · 5", "2 · 2", "5 · 5", "10 · 5"], correct: 0,
                    explanation: "2 Päckchen mit je 5: 2 · 5 = 10"
                },
                {
                    id: "malk2l1_l3", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "leicht", points: 10,
                    question: "Welche Plusaufgabe passt zu 4 · 2?", answers: ["2 + 2 + 2 + 2", "4 + 2", "4 + 4 + 4", "2 + 4"], correct: 0,
                    explanation: "4-mal die 2: 2 + 2 + 2 + 2 = 8"
                },
                {
                    id: "malk2l1_l4", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "leicht", points: 10,
                    question: "Welche Plusaufgabe passt zu 3 · 5?", answers: ["5 + 5 + 5", "3 + 5", "3 + 3 + 3", "5 + 3"], correct: 0,
                    explanation: "3-mal die 5: 5 + 5 + 5 = 15"
                }
            ],
            mittel: [
                {
                    id: "malk2l1_m1", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "🍎🍎 🍎🍎 🍎🍎 Wie viele Äpfel sind es?", answers: ["6", "5", "8", "3"], correct: 0,
                    explanation: "3 · 2 = 6"
                },
                {
                    id: "malk2l1_m2", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "🍓🍓🍓 🍓🍓🍓 🍓🍓🍓 🍓🍓🍓 Wie viele Erdbeeren?", answers: ["12", "9", "15", "4"], correct: 0,
                    explanation: "4 · 3 = 12"
                },
                {
                    id: "malk2l1_m3", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Welche Malaufgabe passt zu 2 + 2 + 2 + 2 + 2?", answers: ["5 · 2", "4 · 2", "5 · 5", "6 · 2"], correct: 0,
                    explanation: "5-mal die 2: 5 · 2 = 10"
                },
                {
                    id: "malk2l1_m4", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Welche Malaufgabe passt zu 10 + 10 + 10?", answers: ["3 · 10", "2 · 10", "10 · 10", "3 · 3"], correct: 0,
                    explanation: "3-mal die 10: 3 · 10 = 30"
                }
            ],
            schwer: [
                {
                    id: "malk2l1_s1", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "schwer", points: 10,
                    question: "Was ist 4 · 3 als Plusaufgabe?", answers: ["3 + 3 + 3 + 3", "4 + 3", "4 + 4 + 4 + 4", "3 + 4"], correct: 0,
                    explanation: "4-mal die 3: 3 + 3 + 3 + 3 = 12"
                },
                {
                    id: "malk2l1_s2", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "schwer", points: 10,
                    question: "Rechne: 3 · 2", answers: ["6", "5", "9", "32"], correct: 0,
                    explanation: "2 + 2 + 2 = 6"
                },
                {
                    id: "malk2l1_s3", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "schwer", points: 10,
                    question: "Rechne: 4 · 5", answers: ["20", "9", "25", "45"], correct: 0,
                    explanation: "5 + 5 + 5 + 5 = 20"
                },
                {
                    id: "malk2l1_s4", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "schwer", points: 10,
                    question: "Das Zeichen · heißt …", answers: ["mal", "plus", "minus", "geteilt"], correct: 0,
                    explanation: "3 · 2 sagt man: drei mal zwei."
                }
            ]
        },
        test: [
                {
                    id: "malk2l1_t1", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "🍎🍎🍎 🍎🍎🍎 Welche Malaufgabe passt?", answers: ["2 · 3", "3 · 3", "2 · 2", "6 · 3"], correct: 0,
                    explanation: "2 Päckchen mit je 3: 2 · 3 = 6"
                },
                {
                    id: "malk2l1_t2", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Welche Plusaufgabe passt zu 2 · 4?", answers: ["4 + 4", "2 + 4", "2 + 2", "4 + 4 + 4"], correct: 0,
                    explanation: "2-mal die 4: 4 + 4 = 8"
                },
                {
                    id: "malk2l1_t3", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "⚽⚽⚽⚽ ⚽⚽⚽⚽ ⚽⚽⚽⚽ Wie viele Bälle?", answers: ["12", "8", "16", "3"], correct: 0,
                    explanation: "3 · 4 = 12"
                },
                {
                    id: "malk2l1_t4", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Welche Malaufgabe passt zu 5 + 5 + 5 + 5?", answers: ["4 · 5", "5 · 5", "3 · 5", "4 · 4"], correct: 0,
                    explanation: "4-mal die 5: 4 · 5 = 20"
                },
                {
                    id: "malk2l1_t5", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 3 · 3", answers: ["9", "6", "12", "33"], correct: 0,
                    explanation: "3 + 3 + 3 = 9"
                },
                {
                    id: "malk2l1_t6", category: "kurs_mal_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Mal heißt: gleiche Zahlen …", answers: ["zusammenzählen", "abziehen", "teilen", "vergleichen"], correct: 0,
                    explanation: "3 · 2 = 2 + 2 + 2"
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "mal_k2_l2", kurs: "einmaleins_k2", order: 2, icon: "🔟",
        title: "Kernaufgaben", kurz: "1 ·, 2 ·, 5 ·, 10 ·",
        erklaerung: {
            intro: "Mit den <b>Kernaufgaben</b> kannst du viele andere ableiten: <b>1 ·</b>, <b>2 ·</b>, <b>5 ·</b> und <b>10 ·</b>. 2 · ist Verdoppeln. Bei 10 · hängst du eine 0 an. 5 · ist die Hälfte von 10 ·.",
            beispiele: ["2 · 6 = 12 (verdoppeln)",
                "10 · 4 = 40 (0 dran)",
                "5 · 4 = 20 (Hälfte von 40)"],
            merksatz: "10 · : eine 0 dran. 5 · : die Hälfte davon. 2 · : verdoppeln."
        },
        uebung: {
            leicht: [
                {
                    id: "malk2l2_l1", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "leicht", points: 10,
                    question: "Rechne: 2 · 4", answers: ["8", "6", "10", "24"], correct: 0,
                    explanation: "Verdoppeln: 4 + 4 = 8"
                },
                {
                    id: "malk2l2_l2", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "leicht", points: 10,
                    question: "Rechne: 10 · 3", answers: ["30", "13", "3", "300"], correct: 0,
                    explanation: "Eine 0 an die 3: 30"
                },
                {
                    id: "malk2l2_l3", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "leicht", points: 10,
                    question: "Rechne: 5 · 2", answers: ["10", "7", "25", "52"], correct: 0,
                    explanation: "Hälfte von 10 · 2 = 20: also 10"
                },
                {
                    id: "malk2l2_l4", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "leicht", points: 10,
                    question: "Rechne: 1 · 7", answers: ["7", "1", "8", "17"], correct: 0,
                    explanation: "Einmal die 7 ist 7."
                }
            ],
            mittel: [
                {
                    id: "malk2l2_m1", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 2 · 8", answers: ["16", "10", "18", "28"], correct: 0,
                    explanation: "Verdoppeln: 8 + 8 = 16"
                },
                {
                    id: "malk2l2_m2", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 10 · 6", answers: ["60", "16", "66", "600"], correct: 0,
                    explanation: "Eine 0 an die 6: 60"
                },
                {
                    id: "malk2l2_m3", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 5 · 6", answers: ["30", "11", "35", "56"], correct: 0,
                    explanation: "Hälfte von 10 · 6 = 60: also 30"
                },
                {
                    id: "malk2l2_m4", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 2 · 7", answers: ["14", "9", "16", "27"], correct: 0,
                    explanation: "Verdoppeln: 7 + 7 = 14"
                }
            ],
            schwer: [
                {
                    id: "malk2l2_s1", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "schwer", points: 10,
                    question: "Rechne: 5 · 8", answers: ["40", "13", "45", "58"], correct: 0,
                    explanation: "Hälfte von 10 · 8 = 80: also 40"
                },
                {
                    id: "malk2l2_s2", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "schwer", points: 10,
                    question: "Rechne: 10 · 9", answers: ["90", "19", "99", "109"], correct: 0,
                    explanation: "Eine 0 an die 9: 90"
                },
                {
                    id: "malk2l2_s3", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "schwer", points: 10,
                    question: "Rechne: 5 · 7", answers: ["35", "12", "30", "57"], correct: 0,
                    explanation: "Hälfte von 10 · 7 = 70: also 35"
                },
                {
                    id: "malk2l2_s4", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: 5 · ___ = 25?", answers: ["5", "4", "6", "20"], correct: 0,
                    explanation: "5 · 5 = 25"
                }
            ]
        },
        test: [
                {
                    id: "malk2l2_t1", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 2 · 9", answers: ["18", "11", "16", "29"], correct: 0,
                    explanation: "Verdoppeln: 9 + 9 = 18"
                },
                {
                    id: "malk2l2_t2", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 10 · 7", answers: ["70", "17", "77", "107"], correct: 0,
                    explanation: "Eine 0 an die 7: 70"
                },
                {
                    id: "malk2l2_t3", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 5 · 3", answers: ["15", "8", "10", "53"], correct: 0,
                    explanation: "Hälfte von 10 · 3 = 30: also 15"
                },
                {
                    id: "malk2l2_t4", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 2 · ___ = 12?", answers: ["6", "5", "10", "4"], correct: 0,
                    explanation: "2 · 6 = 12"
                },
                {
                    id: "malk2l2_t5", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 10 · 10", answers: ["100", "20", "1000", "110"], correct: 0,
                    explanation: "Eine 0 an die 10: 100"
                },
                {
                    id: "malk2l2_t6", category: "kurs_mal_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 0 · 5", answers: ["0", "5", "1", "50"], correct: 0,
                    explanation: "Nullmal irgendwas ist immer 0."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "mal_k2_l3", kurs: "einmaleins_k2", order: 3, icon: "🔲",
        title: "3er, 4er und Quadrate", kurz: "Die 4er ist doppelt die 2er",
        erklaerung: {
            intro: "Die <b>4er-Reihe</b> ist doppelt so viel wie die 2er-Reihe: 3 · 2 = 6, also ist 3 · 4 = <b>12</b>. Bei <b>Quadratzahlen</b> nimmst du eine Zahl mal sich selbst: 3 · 3, 4 · 4, 5 · 5.",
            beispiele: ["3 · 2 = 6, also 3 · 4 = 12",
                "4 · 4 = 16 – eine Quadratzahl",
                "6 · 3 = 18"],
            merksatz: "Die 4er ist das Doppelte der 2er. Quadratzahl: eine Zahl mal sich selbst."
        },
        uebung: {
            leicht: [
                {
                    id: "malk2l3_l1", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "leicht", points: 10,
                    question: "Rechne: 2 · 3", answers: ["6", "5", "9", "23"], correct: 0,
                    explanation: "3 + 3 = 6"
                },
                {
                    id: "malk2l3_l2", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "leicht", points: 10,
                    question: "Rechne: 3 · 4", answers: ["12", "7", "16", "34"], correct: 0,
                    explanation: "3 · 2 = 6, doppelt: 12"
                },
                {
                    id: "malk2l3_l3", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "leicht", points: 10,
                    question: "Rechne: 4 · 3", answers: ["12", "7", "9", "43"], correct: 0,
                    explanation: "3 + 3 + 3 + 3 = 12"
                },
                {
                    id: "malk2l3_l4", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "leicht", points: 10,
                    question: "Rechne: 6 · 3", answers: ["18", "9", "15", "63"], correct: 0,
                    explanation: "5 · 3 = 15, plus 3 = 18"
                }
            ],
            mittel: [
                {
                    id: "malk2l3_m1", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 4 · 4", answers: ["16", "8", "12", "44"], correct: 0,
                    explanation: "Quadratzahl: 4 · 4 = 16"
                },
                {
                    id: "malk2l3_m2", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 5 · 5", answers: ["25", "10", "20", "55"], correct: 0,
                    explanation: "Quadratzahl: 5 · 5 = 25"
                },
                {
                    id: "malk2l3_m3", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 6 · 4", answers: ["24", "10", "20", "64"], correct: 0,
                    explanation: "6 · 2 = 12, doppelt: 24"
                },
                {
                    id: "malk2l3_m4", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 8 · 3", answers: ["24", "11", "21", "83"], correct: 0,
                    explanation: "10 · 3 = 30, minus 2 · 3 = 6: 24"
                }
            ],
            schwer: [
                {
                    id: "malk2l3_s1", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "schwer", points: 10,
                    question: "Welche Zahl ist eine Quadratzahl?", answers: ["9", "6", "10", "12"], correct: 0,
                    explanation: "3 · 3 = 9"
                },
                {
                    id: "malk2l3_s2", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "schwer", points: 10,
                    question: "Rechne: 7 · 4", answers: ["28", "11", "24", "74"], correct: 0,
                    explanation: "7 · 2 = 14, doppelt: 28"
                },
                {
                    id: "malk2l3_s3", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: ___ · 4 = 20?", answers: ["5", "4", "6", "16"], correct: 0,
                    explanation: "5 · 4 = 20"
                },
                {
                    id: "malk2l3_s4", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "schwer", points: 10,
                    question: "3 · 2 = 6. Wie viel ist dann 3 · 4?", answers: ["12", "8", "10", "6"], correct: 0,
                    explanation: "Die 4er ist doppelt die 2er: 12"
                }
            ]
        },
        test: [
                {
                    id: "malk2l3_t1", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 9 · 3", answers: ["27", "12", "24", "93"], correct: 0,
                    explanation: "10 · 3 = 30, minus 3 = 27"
                },
                {
                    id: "malk2l3_t2", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 8 · 4", answers: ["32", "12", "28", "84"], correct: 0,
                    explanation: "8 · 2 = 16, doppelt: 32"
                },
                {
                    id: "malk2l3_t3", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Rechne: 2 · 2", answers: ["4", "2", "6", "22"], correct: 0,
                    explanation: "Quadratzahl: 2 · 2 = 4"
                },
                {
                    id: "malk2l3_t4", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Welche Zahl ist eine Quadratzahl?", answers: ["16", "14", "18", "20"], correct: 0,
                    explanation: "4 · 4 = 16"
                },
                {
                    id: "malk2l3_t5", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 7 · ___ = 21?", answers: ["3", "4", "7", "14"], correct: 0,
                    explanation: "7 · 3 = 21"
                },
                {
                    id: "malk2l3_t6", category: "kurs_mal_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "einmaleins", difficulty: "mittel", points: 10,
                    question: "Quadratzahl heißt: eine Zahl …", answers: ["mal sich selbst", "plus sich selbst", "mal 10", "geteilt durch 2"], correct: 0,
                    explanation: "Zum Beispiel 4 · 4 = 16."
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
        window.EINMALEINS_K2_KURSE = extraKurse;
        window.EINMALEINS_K2_LEKTIONEN = extraLektionen;
    }
})();
