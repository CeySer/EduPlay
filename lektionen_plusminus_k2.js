// Mathe Klasse 2 - Plus und Minus bis 100 (Zehner, Ergaenzen zum Hunderter,
// Einer und Zehner, ueber den Zehner, Tauschaufgaben). Erzeugt aus /tmp/mk2/d2.js.
// Die Themen (topic) entsprechen genau den Wissensfragen derselben Klasse, damit
// die Kurs-Empfehlung aus dem Wissen-Modus den passenden Kurs findet.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "plusminus100_k2", title: "Plus und Minus bis 100", icon: "💯", grade: 2, subject: "mathe", beschreibung: "Mit Zehnern rechnen, zum Hunderter ergänzen, Einer und Zehner dazu, über den Zehner." }
    ];
    const extraLektionen = [
    {
        id: "pm_k2_l1", kurs: "plusminus100_k2", order: 1, icon: "🔟",
        title: "Mit Zehnern rechnen", kurz: "30 + 40 = 70",
        erklaerung: {
            intro: "Mit <b>Zehnerzahlen</b> rechnest du wie mit kleinen Zahlen: 3 + 4 = 7, also <b>30 + 40 = 70</b>. Zum <b>Hunderter</b> ergänzen geht wie bei den verliebten Zahlen: 7 + 3 = 10, also <b>70 + 30 = 100</b>.",
            beispiele: ["3 + 4 = 7 → 30 + 40 = 70",
                "9 − 5 = 4 → 90 − 50 = 40",
                "70 + 30 = 100"],
            merksatz: "Rechne mit den Zehnern wie mit Einern – nur mit einer 0 dran."
        },
        uebung: {
            leicht: [
                {
                    id: "pmk2l1_l1", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "leicht", points: 10,
                    question: "Rechne: 20 + 30", answers: ["50", "5", "60", "40"], correct: 0,
                    explanation: "2 + 3 = 5, also 50"
                },
                {
                    id: "pmk2l1_l2", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "leicht", points: 10,
                    question: "Rechne: 40 + 50", answers: ["90", "9", "80", "100"], correct: 0,
                    explanation: "4 + 5 = 9, also 90"
                },
                {
                    id: "pmk2l1_l3", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "leicht", points: 10,
                    question: "Rechne: 60 − 20", answers: ["40", "4", "80", "30"], correct: 0,
                    explanation: "6 − 2 = 4, also 40"
                },
                {
                    id: "pmk2l1_l4", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "leicht", points: 10,
                    question: "Rechne: 80 − 30", answers: ["50", "5", "110", "40"], correct: 0,
                    explanation: "8 − 3 = 5, also 50"
                }
            ],
            mittel: [
                {
                    id: "pmk2l1_m1", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 50 + 50", answers: ["100", "10", "110", "90"], correct: 0,
                    explanation: "5 + 5 = 10, also 100"
                },
                {
                    id: "pmk2l1_m2", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 100 − 40", answers: ["60", "70", "50", "140"], correct: 0,
                    explanation: "10 − 4 = 6, also 60"
                },
                {
                    id: "pmk2l1_m3", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 60 + ___ = 100?", answers: ["40", "30", "50", "160"], correct: 0,
                    explanation: "6 + 4 = 10, also 60 + 40 = 100"
                },
                {
                    id: "pmk2l1_m4", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 80 + ___ = 100?", answers: ["20", "30", "10", "180"], correct: 0,
                    explanation: "8 + 2 = 10, also 80 + 20 = 100"
                }
            ],
            schwer: [
                {
                    id: "pmk2l1_s1", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: 90 + ___ = 100?", answers: ["10", "1", "20", "190"], correct: 0,
                    explanation: "90 + 10 = 100"
                },
                {
                    id: "pmk2l1_s2", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "schwer", points: 10,
                    question: "Welche Zahl fehlt: 85 + ___ = 100?", answers: ["15", "25", "5", "185"], correct: 0,
                    explanation: "85 + 5 = 90, + 10 = 100: also 15"
                },
                {
                    id: "pmk2l1_s3", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "schwer", points: 10,
                    question: "Rechne: 100 − 70", answers: ["30", "40", "20", "170"], correct: 0,
                    explanation: "10 − 7 = 3, also 30"
                },
                {
                    id: "pmk2l1_s4", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "schwer", points: 10,
                    question: "Rechne: 30 + 40 + 20", answers: ["90", "80", "100", "70"], correct: 0,
                    explanation: "30 + 40 = 70, + 20 = 90"
                }
            ]
        },
        test: [
                {
                    id: "pmk2l1_t1", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 10 + 70", answers: ["80", "8", "90", "70"], correct: 0,
                    explanation: "1 + 7 = 8, also 80"
                },
                {
                    id: "pmk2l1_t2", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 90 − 60", answers: ["30", "3", "40", "150"], correct: 0,
                    explanation: "9 − 6 = 3, also 30"
                },
                {
                    id: "pmk2l1_t3", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 30 + ___ = 100?", answers: ["70", "60", "80", "130"], correct: 0,
                    explanation: "3 + 7 = 10, also 70"
                },
                {
                    id: "pmk2l1_t4", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 100 − 90", answers: ["10", "1", "20", "190"], correct: 0,
                    explanation: "100 − 90 = 10"
                },
                {
                    id: "pmk2l1_t5", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Welche Zahl fehlt: 55 + ___ = 100?", answers: ["45", "55", "35", "155"], correct: 0,
                    explanation: "55 + 45 = 100"
                },
                {
                    id: "pmk2l1_t6", category: "kurs_pm_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 40 + 40", answers: ["80", "8", "90", "70"], correct: 0,
                    explanation: "Verdoppeln: 40 + 40 = 80"
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "pm_k2_l2", kurs: "plusminus100_k2", order: 2, icon: "🔢",
        title: "Einer und Zehner", kurz: "34 + 5 und 34 + 20",
        erklaerung: {
            intro: "Bei <b>34 + 5</b> rechnest du nur die <b>Einer</b>: 4 + 5 = 9, also 39. Bei <b>34 + 20</b> rechnest du nur die <b>Zehner</b>: 3 + 2 = 5 Zehner, also 54. Minus geht genauso.",
            beispiele: ["34 + 5 = 39",
                "34 + 20 = 54",
                "58 − 6 = 52"],
            merksatz: "Einer zu Einern, Zehner zu Zehnern."
        },
        uebung: {
            leicht: [
                {
                    id: "pmk2l2_l1", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "leicht", points: 10,
                    question: "Rechne: 24 + 5", answers: ["29", "74", "28", "19"], correct: 0,
                    explanation: "4 + 5 = 9, also 29"
                },
                {
                    id: "pmk2l2_l2", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "leicht", points: 10,
                    question: "Rechne: 36 + 3", answers: ["39", "66", "38", "33"], correct: 0,
                    explanation: "6 + 3 = 9, also 39"
                },
                {
                    id: "pmk2l2_l3", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "leicht", points: 10,
                    question: "Rechne: 58 − 6", answers: ["52", "64", "53", "51"], correct: 0,
                    explanation: "8 − 6 = 2, also 52"
                },
                {
                    id: "pmk2l2_l4", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "leicht", points: 10,
                    question: "Rechne: 47 − 4", answers: ["43", "51", "7", "44"], correct: 0,
                    explanation: "7 − 4 = 3, also 43"
                }
            ],
            mittel: [
                {
                    id: "pmk2l2_m1", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 36 + 10", answers: ["46", "37", "56", "26"], correct: 0,
                    explanation: "Ein Zehner mehr: 46"
                },
                {
                    id: "pmk2l2_m2", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 52 + 30", answers: ["82", "55", "72", "92"], correct: 0,
                    explanation: "5 + 3 = 8 Zehner: 82"
                },
                {
                    id: "pmk2l2_m3", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 47 − 10", answers: ["37", "46", "57", "27"], correct: 0,
                    explanation: "Ein Zehner weniger: 37"
                },
                {
                    id: "pmk2l2_m4", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 85 − 40", answers: ["45", "81", "55", "35"], correct: 0,
                    explanation: "8 − 4 = 4 Zehner: 45"
                }
            ],
            schwer: [
                {
                    id: "pmk2l2_s1", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "schwer", points: 10,
                    question: "Rechne: 43 + 25", answers: ["68", "58", "78", "67"], correct: 0,
                    explanation: "43 + 20 = 63, + 5 = 68"
                },
                {
                    id: "pmk2l2_s2", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "schwer", points: 10,
                    question: "Rechne: 76 − 34", answers: ["42", "52", "32", "110"], correct: 0,
                    explanation: "76 − 30 = 46, − 4 = 42"
                },
                {
                    id: "pmk2l2_s3", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "schwer", points: 10,
                    question: "Rechne: 61 + 27", answers: ["88", "78", "98", "87"], correct: 0,
                    explanation: "61 + 20 = 81, + 7 = 88"
                },
                {
                    id: "pmk2l2_s4", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "schwer", points: 10,
                    question: "Rechne: 99 − 45", answers: ["54", "64", "44", "144"], correct: 0,
                    explanation: "99 − 40 = 59, − 5 = 54"
                }
            ]
        },
        test: [
                {
                    id: "pmk2l2_t1", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 32 + 6", answers: ["38", "92", "37", "48"], correct: 0,
                    explanation: "2 + 6 = 8, also 38"
                },
                {
                    id: "pmk2l2_t2", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 64 − 3", answers: ["61", "34", "62", "67"], correct: 0,
                    explanation: "4 − 3 = 1, also 61"
                },
                {
                    id: "pmk2l2_t3", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 25 + 40", answers: ["65", "29", "75", "55"], correct: 0,
                    explanation: "2 + 4 = 6 Zehner: 65"
                },
                {
                    id: "pmk2l2_t4", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 78 − 50", answers: ["28", "73", "38", "18"], correct: 0,
                    explanation: "7 − 5 = 2 Zehner: 28"
                },
                {
                    id: "pmk2l2_t5", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 42 + 35", answers: ["77", "67", "87", "76"], correct: 0,
                    explanation: "42 + 30 = 72, + 5 = 77"
                },
                {
                    id: "pmk2l2_t6", category: "kurs_pm_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 87 − 23", answers: ["64", "54", "74", "110"], correct: 0,
                    explanation: "87 − 20 = 67, − 3 = 64"
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "pm_k2_l3", kurs: "plusminus100_k2", order: 3, icon: "🚀",
        title: "Über den Zehner", kurz: "28 + 4 = 32",
        erklaerung: {
            intro: "Wenn die Einer über 10 gehen, rechnest du in <b>zwei Schritten</b>: <b>28 + 4</b>: erst bis 30 (28 + 2), dann noch 2 dazu = <b>32</b>. Minus genauso: <b>63 − 5</b>: erst bis 60 (63 − 3), dann noch 2 weg = <b>58</b>. Bei <b>Tauschaufgaben</b> bleibt das Ergebnis gleich: 34 + 12 = 12 + 34.",
            beispiele: ["28 + 4 → 28 + 2 + 2 = 32",
                "63 − 5 → 63 − 3 − 2 = 58",
                "34 + 12 = 12 + 34 = 46"],
            merksatz: "Erst bis zum Zehner, dann weiter. Beim Plus darf man tauschen."
        },
        uebung: {
            leicht: [
                {
                    id: "pmk2l3_l1", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "leicht", points: 10,
                    question: "Rechne: 28 + 4", answers: ["32", "22", "31", "42"], correct: 0,
                    explanation: "28 + 2 = 30, + 2 = 32"
                },
                {
                    id: "pmk2l3_l2", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "leicht", points: 10,
                    question: "Rechne: 45 + 7", answers: ["52", "42", "51", "62"], correct: 0,
                    explanation: "45 + 5 = 50, + 2 = 52"
                },
                {
                    id: "pmk2l3_l3", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "leicht", points: 10,
                    question: "Rechne: 63 − 5", answers: ["58", "68", "57", "48"], correct: 0,
                    explanation: "63 − 3 = 60, − 2 = 58"
                },
                {
                    id: "pmk2l3_l4", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "leicht", points: 10,
                    question: "Rechne: 82 − 6", answers: ["76", "86", "74", "88"], correct: 0,
                    explanation: "82 − 2 = 80, − 4 = 76"
                }
            ],
            mittel: [
                {
                    id: "pmk2l3_m1", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 19 + 19", answers: ["38", "28", "39", "48"], correct: 0,
                    explanation: "Verdoppeln: 19 + 19 = 38"
                },
                {
                    id: "pmk2l3_m2", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 25 + 25", answers: ["50", "40", "45", "60"], correct: 0,
                    explanation: "Verdoppeln: 25 + 25 = 50"
                },
                {
                    id: "pmk2l3_m3", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 37 + 8", answers: ["45", "35", "44", "55"], correct: 0,
                    explanation: "37 + 3 = 40, + 5 = 45"
                },
                {
                    id: "pmk2l3_m4", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 54 − 9", answers: ["45", "55", "46", "63"], correct: 0,
                    explanation: "54 − 4 = 50, − 5 = 45"
                }
            ],
            schwer: [
                {
                    id: "pmk2l3_s1", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "schwer", points: 10,
                    question: "Tauschaufgabe: 34 + 12 = 46. Was ist 12 + 34?", answers: ["46", "22", "58", "34"], correct: 0,
                    explanation: "Tauschen ändert nichts: 46"
                },
                {
                    id: "pmk2l3_s2", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "schwer", points: 10,
                    question: "Rechne: 100 − 25", answers: ["75", "85", "65", "125"], correct: 0,
                    explanation: "100 − 20 = 80, − 5 = 75"
                },
                {
                    id: "pmk2l3_s3", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "schwer", points: 10,
                    question: "Rechne: 48 + 26", answers: ["74", "64", "84", "72"], correct: 0,
                    explanation: "48 + 20 = 68, + 6 = 74"
                },
                {
                    id: "pmk2l3_s4", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "schwer", points: 10,
                    question: "Rechne: 71 − 38", answers: ["33", "43", "47", "109"], correct: 0,
                    explanation: "71 − 30 = 41, − 8 = 33"
                }
            ]
        },
        test: [
                {
                    id: "pmk2l3_t1", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 39 + 6", answers: ["45", "35", "44", "55"], correct: 0,
                    explanation: "39 + 1 = 40, + 5 = 45"
                },
                {
                    id: "pmk2l3_t2", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 72 − 8", answers: ["64", "74", "66", "80"], correct: 0,
                    explanation: "72 − 2 = 70, − 6 = 64"
                },
                {
                    id: "pmk2l3_t3", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 27 + 27", answers: ["54", "44", "45", "64"], correct: 0,
                    explanation: "Verdoppeln: 27 + 27 = 54"
                },
                {
                    id: "pmk2l3_t4", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 56 + 35", answers: ["91", "81", "90", "101"], correct: 0,
                    explanation: "56 + 30 = 86, + 5 = 91"
                },
                {
                    id: "pmk2l3_t5", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Rechne: 93 − 47", answers: ["46", "56", "54", "140"], correct: 0,
                    explanation: "93 − 40 = 53, − 7 = 46"
                },
                {
                    id: "pmk2l3_t6", category: "kurs_pm_k2_l3", area: "schule", grade: 2,
                    subject: "mathe", topic: "add_sub_20_100", difficulty: "mittel", points: 10,
                    question: "Tauschaufgabe: 15 + 40 = 55. Was ist 40 + 15?", answers: ["55", "25", "65", "45"], correct: 0,
                    explanation: "Tauschen ändert nichts: 55"
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
        window.PLUSMINUS_K2_KURSE = extraKurse;
        window.PLUSMINUS_K2_LEKTIONEN = extraLektionen;
    }
})();
