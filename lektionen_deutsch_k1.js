// Deutsch Klasse 1 - Buchstaben, Reimwoerter, Laute im Wort, Erste Woerter lesen
// Ergaenzt die vorhandenen Klasse-1-Kurse (Anlaute, Silben, Satzzeichen) um
// 4 Kurse mit je 3 Lektionen - erzeugt aus /tmp/dk1/d1..d4.js.
// Emojis in Fragen und Antworten sind Bildhilfe fuer Kinder, die noch nicht
// lesen koennen. Beim Vorlesen filtert cleanTextForSpeech() sie heraus.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "buchstaben_k1", title: "Buchstaben kennen", icon: "🔡", grade: 1, subject: "deutsch", beschreibung: "Große und kleine Buchstaben, Selbstlaute und das ABC." },
        { id: "reime_k1", title: "Reimwörter", icon: "🎵", grade: 1, subject: "deutsch", beschreibung: "Hören, welche Wörter sich reimen – mit Bildern zum Mitraten." },
        { id: "laute_k1", title: "Laute im Wort", icon: "🗣️", grade: 1, subject: "deutsch", beschreibung: "Den letzten Laut hören, den Selbstlaut in der Mitte finden, Laute zu Wörtern verbinden." },
        { id: "lesen_k1", title: "Erste Wörter lesen", icon: "📚", grade: 1, subject: "deutsch", beschreibung: "Bild und Wort zuordnen, Lücken füllen, kleine Sätze verstehen." }
    ];
    const extraLektionen = [
    {
        id: "bst_k1_l1", kurs: "buchstaben_k1", order: 1, icon: "🅰️",
        title: "Groß und klein", kurz: "A und a",
        erklaerung: {
            intro: "Jeder Buchstabe hat zwei Formen: einen <b>großen</b> und einen <b>kleinen</b>. <b>A</b> und <b>a</b> sind derselbe Buchstabe.",
            beispiele: ["A – a",
                "M – m",
                "B – b"],
            merksatz: "Groß und klein – es ist derselbe Buchstabe."
        },
        uebung: {
            leicht: [
                {
                    id: "bstk1l1_l1", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welcher kleine Buchstabe gehört zu A?", answers: ["a", "o", "e", "u"], correct: 0,
                    explanation: "A und a gehören zusammen."
                },
                {
                    id: "bstk1l1_l2", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welcher kleine Buchstabe gehört zu M?", answers: ["m", "n", "w", "u"], correct: 0,
                    explanation: "M und m gehören zusammen."
                },
                {
                    id: "bstk1l1_l3", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welcher kleine Buchstabe gehört zu O?", answers: ["o", "a", "c", "e"], correct: 0,
                    explanation: "O und o gehören zusammen."
                },
                {
                    id: "bstk1l1_l4", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welcher kleine Buchstabe gehört zu S?", answers: ["s", "z", "c", "x"], correct: 0,
                    explanation: "S und s gehören zusammen."
                }
            ],
            mittel: [
                {
                    id: "bstk1l1_m1", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher große Buchstabe gehört zu b?", answers: ["B", "D", "P", "R"], correct: 0,
                    explanation: "b und B gehören zusammen."
                },
                {
                    id: "bstk1l1_m2", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher große Buchstabe gehört zu e?", answers: ["E", "F", "A", "L"], correct: 0,
                    explanation: "e und E gehören zusammen."
                },
                {
                    id: "bstk1l1_m3", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher große Buchstabe gehört zu t?", answers: ["T", "F", "I", "L"], correct: 0,
                    explanation: "t und T gehören zusammen."
                },
                {
                    id: "bstk1l1_m4", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher große Buchstabe gehört zu n?", answers: ["N", "M", "H", "U"], correct: 0,
                    explanation: "n und N gehören zusammen."
                }
            ],
            schwer: [
                {
                    id: "bstk1l1_s1", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welcher kleine Buchstabe gehört zu D?", answers: ["d", "b", "p", "q"], correct: 0,
                    explanation: "D und d – der Bauch zeigt nach links."
                },
                {
                    id: "bstk1l1_s2", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welcher kleine Buchstabe gehört zu G?", answers: ["g", "q", "j", "y"], correct: 0,
                    explanation: "G und g gehören zusammen."
                },
                {
                    id: "bstk1l1_s3", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welcher kleine Buchstabe gehört zu R?", answers: ["r", "n", "v", "h"], correct: 0,
                    explanation: "R und r gehören zusammen."
                },
                {
                    id: "bstk1l1_s4", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welcher große Buchstabe gehört zu h?", answers: ["H", "N", "K", "L"], correct: 0,
                    explanation: "h und H gehören zusammen."
                }
            ]
        },
        test: [
                {
                    id: "bstk1l1_t1", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher kleine Buchstabe gehört zu L?", answers: ["l", "i", "t", "j"], correct: 0,
                    explanation: "L und l gehören zusammen."
                },
                {
                    id: "bstk1l1_t2", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher große Buchstabe gehört zu u?", answers: ["U", "V", "W", "N"], correct: 0,
                    explanation: "u und U gehören zusammen."
                },
                {
                    id: "bstk1l1_t3", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher kleine Buchstabe gehört zu B?", answers: ["b", "d", "p", "q"], correct: 0,
                    explanation: "B und b – der Bauch zeigt nach rechts."
                },
                {
                    id: "bstk1l1_t4", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher große Buchstabe gehört zu i?", answers: ["I", "L", "T", "J"], correct: 0,
                    explanation: "i und I gehören zusammen."
                },
                {
                    id: "bstk1l1_t5", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher kleine Buchstabe gehört zu K?", answers: ["k", "h", "x", "l"], correct: 0,
                    explanation: "K und k gehören zusammen."
                },
                {
                    id: "bstk1l1_t6", category: "kurs_bst_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "A und a sind …", answers: ["derselbe Buchstabe", "zwei Buchstaben", "ein Wort", "eine Zahl"], correct: 0,
                    explanation: "Einmal groß, einmal klein."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "bst_k1_l2", kurs: "buchstaben_k1", order: 2, icon: "🎶",
        title: "Selbstlaute", kurz: "a, e, i, o, u",
        erklaerung: {
            intro: "Die Buchstaben <b>a, e, i, o, u</b> heißen <b>Selbstlaute</b>. Man kann sie lange singen: Aaaa, Oooo. Alle anderen Buchstaben sind <b>Mitlaute</b>.",
            beispiele: ["a, e, i, o, u – Selbstlaute",
                "Aaaa – kann man lange singen",
                "m, t, s – Mitlaute"],
            merksatz: "a, e, i, o, u – das sind die Selbstlaute."
        },
        uebung: {
            leicht: [
                {
                    id: "bstk1l2_l1", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welcher Buchstabe ist ein Selbstlaut?", answers: ["a", "m", "t", "s"], correct: 0,
                    explanation: "a ist ein Selbstlaut."
                },
                {
                    id: "bstk1l2_l2", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welcher Buchstabe ist ein Selbstlaut?", answers: ["o", "k", "b", "n"], correct: 0,
                    explanation: "o ist ein Selbstlaut."
                },
                {
                    id: "bstk1l2_l3", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welcher Buchstabe ist ein Selbstlaut?", answers: ["i", "r", "l", "f"], correct: 0,
                    explanation: "i ist ein Selbstlaut."
                },
                {
                    id: "bstk1l2_l4", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welcher Buchstabe ist ein Selbstlaut?", answers: ["u", "d", "p", "g"], correct: 0,
                    explanation: "u ist ein Selbstlaut."
                }
            ],
            mittel: [
                {
                    id: "bstk1l2_m1", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher Buchstabe ist KEIN Selbstlaut?", answers: ["m", "a", "e", "o"], correct: 0,
                    explanation: "m ist ein Mitlaut."
                },
                {
                    id: "bstk1l2_m2", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher Buchstabe ist KEIN Selbstlaut?", answers: ["t", "i", "u", "a"], correct: 0,
                    explanation: "t ist ein Mitlaut."
                },
                {
                    id: "bstk1l2_m3", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🦔 Welcher Selbstlaut steht am Anfang von Igel?", answers: ["i", "e", "a", "o"], correct: 0,
                    explanation: "Igel beginnt mit i."
                },
                {
                    id: "bstk1l2_m4", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🐒 Welcher Selbstlaut steht am Anfang von Affe?", answers: ["a", "e", "o", "u"], correct: 0,
                    explanation: "Affe beginnt mit a."
                }
            ],
            schwer: [
                {
                    id: "bstk1l2_s1", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "⏰ Welcher Selbstlaut steht am Anfang von Uhr?", answers: ["u", "o", "a", "i"], correct: 0,
                    explanation: "Uhr beginnt mit u."
                },
                {
                    id: "bstk1l2_s2", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "🍊 Welcher Selbstlaut steht am Anfang von Orange?", answers: ["o", "a", "u", "e"], correct: 0,
                    explanation: "Orange beginnt mit o."
                },
                {
                    id: "bstk1l2_s3", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Wie viele Selbstlaute gibt es?", answers: ["5", "3", "4", "6"], correct: 0,
                    explanation: "a, e, i, o, u – fünf."
                },
                {
                    id: "bstk1l2_s4", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "🎩 Welcher Selbstlaut steckt in Hut?", answers: ["u", "a", "o", "i"], correct: 0,
                    explanation: "H – u – t."
                }
            ]
        },
        test: [
                {
                    id: "bstk1l2_t1", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher Buchstabe ist ein Selbstlaut?", answers: ["e", "s", "m", "r"], correct: 0,
                    explanation: "e ist ein Selbstlaut."
                },
                {
                    id: "bstk1l2_t2", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher Buchstabe ist KEIN Selbstlaut?", answers: ["b", "o", "i", "e"], correct: 0,
                    explanation: "b ist ein Mitlaut."
                },
                {
                    id: "bstk1l2_t3", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🦆 Welcher Selbstlaut steht am Anfang von Ente?", answers: ["e", "a", "i", "u"], correct: 0,
                    explanation: "Ente beginnt mit e."
                },
                {
                    id: "bstk1l2_t4", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🌙 Welcher Selbstlaut steckt in Mond?", answers: ["o", "a", "u", "e"], correct: 0,
                    explanation: "M – o – n – d."
                },
                {
                    id: "bstk1l2_t5", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "✋ Welcher Selbstlaut steckt in Hand?", answers: ["a", "o", "e", "i"], correct: 0,
                    explanation: "H – a – n – d."
                },
                {
                    id: "bstk1l2_t6", category: "kurs_bst_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Selbstlaute kann man …", answers: ["lange singen", "nicht hören", "nur schreiben", "nicht sprechen"], correct: 0,
                    explanation: "Aaaa, Oooo, Uuuu."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "bst_k1_l3", kurs: "buchstaben_k1", order: 3, icon: "🔠",
        title: "Das ABC", kurz: "A, B, C, D …",
        erklaerung: {
            intro: "Das <b>ABC</b> hat eine feste Reihenfolge: A, B, C, D, E … Wenn du sie kennst, weißt du, welcher Buchstabe als Nächstes kommt.",
            beispiele: ["A, B, C, D, E",
                "Nach B kommt C",
                "Vor E kommt D"],
            merksatz: "A, B, C, D, E, F, G – das ABC fängt mit A an und hört mit Z auf."
        },
        uebung: {
            leicht: [
                {
                    id: "bstk1l3_l1", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Was kommt nach A?", answers: ["B", "C", "D", "Z"], correct: 0,
                    explanation: "A, B, C."
                },
                {
                    id: "bstk1l3_l2", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Was kommt nach B?", answers: ["C", "A", "D", "E"], correct: 0,
                    explanation: "A, B, C."
                },
                {
                    id: "bstk1l3_l3", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Was kommt nach C?", answers: ["D", "B", "E", "A"], correct: 0,
                    explanation: "B, C, D."
                },
                {
                    id: "bstk1l3_l4", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Mit welchem Buchstaben fängt das ABC an?", answers: ["A", "B", "Z", "M"], correct: 0,
                    explanation: "Das ABC fängt mit A an."
                }
            ],
            mittel: [
                {
                    id: "bstk1l3_m1", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Was kommt nach D?", answers: ["E", "F", "C", "B"], correct: 0,
                    explanation: "C, D, E."
                },
                {
                    id: "bstk1l3_m2", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Was kommt vor B?", answers: ["A", "C", "D", "E"], correct: 0,
                    explanation: "A, B, C."
                },
                {
                    id: "bstk1l3_m3", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Was kommt nach E?", answers: ["F", "G", "D", "H"], correct: 0,
                    explanation: "D, E, F."
                },
                {
                    id: "bstk1l3_m4", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Was kommt vor D?", answers: ["C", "E", "B", "F"], correct: 0,
                    explanation: "B, C, D."
                }
            ],
            schwer: [
                {
                    id: "bstk1l3_s1", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Was fehlt: A, B, ___, D?", answers: ["C", "E", "F", "A"], correct: 0,
                    explanation: "A, B, C, D."
                },
                {
                    id: "bstk1l3_s2", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Was fehlt: E, F, ___, H?", answers: ["G", "I", "J", "D"], correct: 0,
                    explanation: "E, F, G, H."
                },
                {
                    id: "bstk1l3_s3", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Mit welchem Buchstaben hört das ABC auf?", answers: ["Z", "Y", "X", "A"], correct: 0,
                    explanation: "Das ABC hört mit Z auf."
                },
                {
                    id: "bstk1l3_s4", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Was kommt nach F?", answers: ["G", "H", "E", "J"], correct: 0,
                    explanation: "E, F, G."
                }
            ]
        },
        test: [
                {
                    id: "bstk1l3_t1", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Was kommt nach G?", answers: ["H", "I", "F", "J"], correct: 0,
                    explanation: "F, G, H."
                },
                {
                    id: "bstk1l3_t2", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Was kommt vor C?", answers: ["B", "D", "A", "E"], correct: 0,
                    explanation: "A, B, C."
                },
                {
                    id: "bstk1l3_t3", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Was fehlt: B, C, ___, E?", answers: ["D", "F", "A", "G"], correct: 0,
                    explanation: "B, C, D, E."
                },
                {
                    id: "bstk1l3_t4", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Was fehlt: A, ___, C, D?", answers: ["B", "E", "F", "G"], correct: 0,
                    explanation: "A, B, C, D."
                },
                {
                    id: "bstk1l3_t5", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Was kommt vor F?", answers: ["E", "G", "D", "H"], correct: 0,
                    explanation: "D, E, F."
                },
                {
                    id: "bstk1l3_t6", category: "kurs_bst_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Das ABC fängt an mit …", answers: ["A", "B", "C", "Z"], correct: 0,
                    explanation: "A ist der erste Buchstabe."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "reim_k1_l1", kurs: "reime_k1", order: 1, icon: "🎵",
        title: "Was reimt sich?", kurz: "Haus – Maus",
        erklaerung: {
            intro: "Wörter <b>reimen</b> sich, wenn sie am Ende <b>gleich klingen</b>: H<b>aus</b> – M<b>aus</b>. Sprich beide Wörter laut und hör aufs Ende.",
            beispiele: ["🏠 Haus – 🐭 Maus",
                "🐶 Hund – 👄 Mund",
                "🐰 Hase – 👃 Nase"],
            merksatz: "Gleiches Ende – das reimt sich!"
        },
        uebung: {
            leicht: [
                {
                    id: "reimk1l1_l1", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "leicht", points: 10,
                    question: "🏠 Was reimt sich auf Haus?", answers: ["🐭 Maus", "🐶 Hund", "🌳 Baum", "⚽ Ball"], correct: 0,
                    explanation: "Haus – Maus: gleiches Ende."
                },
                {
                    id: "reimk1l1_l2", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "leicht", points: 10,
                    question: "🐶 Was reimt sich auf Hund?", answers: ["👄 Mund", "🐱 Katze", "🍎 Apfel", "🚗 Auto"], correct: 0,
                    explanation: "Hund – Mund: gleiches Ende."
                },
                {
                    id: "reimk1l1_l3", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "leicht", points: 10,
                    question: "🐰 Was reimt sich auf Hase?", answers: ["👃 Nase", "🐻 Bär", "⭐ Stern", "🌙 Mond"], correct: 0,
                    explanation: "Hase – Nase: gleiches Ende."
                },
                {
                    id: "reimk1l1_l4", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "leicht", points: 10,
                    question: "👖 Was reimt sich auf Hose?", answers: ["🌹 Rose", "🍌 Banane", "🐸 Frosch", "🥛 Milch"], correct: 0,
                    explanation: "Hose – Rose: gleiches Ende."
                }
            ],
            mittel: [
                {
                    id: "reimk1l1_m1", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "🧦 Was reimt sich auf Socke?", answers: ["🔔 Glocke", "🐟 Fisch", "🛏️ Bett", "🦁 Löwe"], correct: 0,
                    explanation: "Socke – Glocke: gleiches Ende."
                },
                {
                    id: "reimk1l1_m2", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "🐋 Was reimt sich auf Wal?", answers: ["🧣 Schal", "🐦 Vogel", "☀️ Sonne", "🍐 Birne"], correct: 0,
                    explanation: "Wal – Schal: gleiches Ende."
                },
                {
                    id: "reimk1l1_m3", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "🐄 Was reimt sich auf Kuh?", answers: ["👟 Schuh", "🐷 Schwein", "🌳 Baum", "🔑 Schlüssel"], correct: 0,
                    explanation: "Kuh – Schuh: gleiches Ende."
                },
                {
                    id: "reimk1l1_m4", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "🐱 Was reimt sich auf Katze?", answers: ["🐾 Tatze", "🐶 Hund", "🐟 Fisch", "🚂 Zug"], correct: 0,
                    explanation: "Katze – Tatze: gleiches Ende."
                }
            ],
            schwer: [
                {
                    id: "reimk1l1_s1", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "schwer", points: 10,
                    question: "🌲 Was reimt sich auf Tanne?", answers: ["🍳 Pfanne", "🌳 Baum", "⭐ Stern", "🍎 Apfel"], correct: 0,
                    explanation: "Tanne – Pfanne: gleiches Ende."
                },
                {
                    id: "reimk1l1_s2", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "schwer", points: 10,
                    question: "⛺ Was reimt sich auf Zelt?", answers: ["💰 Geld", "🐸 Frosch", "🐻 Bär", "⚽ Ball"], correct: 0,
                    explanation: "Zelt – Geld: gleiches Ende."
                },
                {
                    id: "reimk1l1_s3", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "schwer", points: 10,
                    question: "✋ Was reimt sich auf Hand?", answers: ["🏖️ Sand", "🎩 Hut", "🐸 Frosch", "🌙 Mond"], correct: 0,
                    explanation: "Hand – Sand: gleiches Ende."
                },
                {
                    id: "reimk1l1_s4", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "schwer", points: 10,
                    question: "🍞 Was reimt sich auf Brot?", answers: ["⛵ Boot", "🥛 Milch", "🍌 Banane", "🐦 Vogel"], correct: 0,
                    explanation: "Brot – Boot: gleiches Ende."
                }
            ]
        },
        test: [
                {
                    id: "reimk1l1_t1", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "👜 Was reimt sich auf Tasche?", answers: ["🍾 Flasche", "🐟 Fisch", "🛏️ Bett", "🐸 Frosch"], correct: 0,
                    explanation: "Tasche – Flasche: gleiches Ende."
                },
                {
                    id: "reimk1l1_t2", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "🥅 Was reimt sich auf Tor?", answers: ["👂 Ohr", "🎩 Hut", "🐦 Vogel", "🍌 Banane"], correct: 0,
                    explanation: "Tor – Ohr: gleiches Ende."
                },
                {
                    id: "reimk1l1_t3", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "🚌 Was reimt sich auf Bus?", answers: ["🌰 Nuss", "🚂 Zug", "⭐ Stern", "🐻 Bär"], correct: 0,
                    explanation: "Bus – Nuss: gleiches Ende."
                },
                {
                    id: "reimk1l1_t4", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "🐭 Was reimt sich auf Maus?", answers: ["🏠 Haus", "🐟 Fisch", "🍐 Birne", "🐦 Vogel"], correct: 0,
                    explanation: "Maus – Haus: gleiches Ende."
                },
                {
                    id: "reimk1l1_t5", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "👄 Was reimt sich auf Mund?", answers: ["🐶 Hund", "🍎 Apfel", "☀️ Sonne", "🔑 Schlüssel"], correct: 0,
                    explanation: "Mund – Hund: gleiches Ende."
                },
                {
                    id: "reimk1l1_t6", category: "kurs_reim_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "🌹 Was reimt sich auf Rose?", answers: ["👖 Hose", "🐝 Biene", "🚗 Auto", "🧀 Käse"], correct: 0,
                    explanation: "Rose – Hose: gleiches Ende."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "reim_k1_l2", kurs: "reime_k1", order: 2, icon: "👯",
        title: "Reimpaare finden", kurz: "Welche zwei passen?",
        erklaerung: {
            intro: "Jetzt siehst du immer <b>zwei</b> Wörter zusammen. Nur ein Paar reimt sich. Sprich jedes Paar laut: Klingt das <b>Ende</b> gleich?",
            beispiele: ["🐄 Kuh – 👟 Schuh ✔",
                "🐄 Kuh – 🐻 Bär ✘",
                "🥅 Tor – 👂 Ohr ✔"],
            merksatz: "Paar laut sprechen – gleiches Ende? Dann reimt es sich."
        },
        uebung: {
            leicht: [
                {
                    id: "reimk1l2_l1", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "leicht", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["🐄 Kuh – 👟 Schuh", "🐄 Kuh – 🐻 Bär", "🐄 Kuh – 🍎 Apfel", "🐄 Kuh – 🌙 Mond"], correct: 0,
                    explanation: "Kuh – Schuh reimt sich."
                },
                {
                    id: "reimk1l2_l2", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "leicht", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["🍞 Brot – ⛵ Boot", "🍞 Brot – 🥛 Milch", "🍞 Brot – 🐟 Fisch", "🍞 Brot – ⭐ Stern"], correct: 0,
                    explanation: "Brot – Boot reimt sich."
                },
                {
                    id: "reimk1l2_l3", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "leicht", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["✋ Hand – 🏖️ Sand", "✋ Hand – 🎩 Hut", "✋ Hand – 🐸 Frosch", "✋ Hand – 🌳 Baum"], correct: 0,
                    explanation: "Hand – Sand reimt sich."
                },
                {
                    id: "reimk1l2_l4", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "leicht", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["🧦 Socke – 🔔 Glocke", "🧦 Socke – 👖 Hose", "🧦 Socke – 🐦 Vogel", "🧦 Socke – 🍐 Birne"], correct: 0,
                    explanation: "Socke – Glocke reimt sich."
                }
            ],
            mittel: [
                {
                    id: "reimk1l2_m1", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["🐋 Wal – 🧣 Schal", "🐋 Wal – 🐟 Fisch", "🧣 Schal – 🎩 Hut", "🐋 Wal – 🚂 Zug"], correct: 0,
                    explanation: "Wal – Schal reimt sich."
                },
                {
                    id: "reimk1l2_m2", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["🍾 Flasche – 👜 Tasche", "🍾 Flasche – 🥛 Milch", "👜 Tasche – 🔑 Schlüssel", "🍾 Flasche – 🍌 Banane"], correct: 0,
                    explanation: "Flasche – Tasche reimt sich."
                },
                {
                    id: "reimk1l2_m3", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["🌲 Tanne – 🍳 Pfanne", "🌲 Tanne – 🌳 Baum", "🍳 Pfanne – 🧀 Käse", "🌲 Tanne – ⭐ Stern"], correct: 0,
                    explanation: "Tanne – Pfanne reimt sich."
                },
                {
                    id: "reimk1l2_m4", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["🚌 Bus – 🌰 Nuss", "🚌 Bus – 🚂 Zug", "🌰 Nuss – 🍎 Apfel", "🚌 Bus – 🚗 Auto"], correct: 0,
                    explanation: "Bus – Nuss reimt sich."
                }
            ],
            schwer: [
                {
                    id: "reimk1l2_s1", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "schwer", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["🥅 Tor – 👂 Ohr", "🥅 Tor – ⏰ Uhr", "👂 Ohr – 🎩 Hut", "🥅 Tor – ⚽ Ball"], correct: 0,
                    explanation: "Tor – Ohr reimt sich. Uhr klingt nur ähnlich."
                },
                {
                    id: "reimk1l2_s2", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "schwer", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["🐶 Hund – 👄 Mund", "🐶 Hund – 🌙 Mond", "👄 Mund – 🍐 Birne", "🐶 Hund – 🐱 Katze"], correct: 0,
                    explanation: "Hund – Mund reimt sich. Mond klingt nur ähnlich."
                },
                {
                    id: "reimk1l2_s3", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "schwer", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["⛺ Zelt – 💰 Geld", "⛺ Zelt – 🛏️ Bett", "💰 Geld – 🔑 Schlüssel", "⛺ Zelt – 🌳 Baum"], correct: 0,
                    explanation: "Zelt – Geld reimt sich. Bett klingt nur ähnlich."
                },
                {
                    id: "reimk1l2_s4", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "schwer", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["🐱 Katze – 🐾 Tatze", "🐱 Katze – 🐶 Hund", "🐾 Tatze – 🐻 Bär", "🐱 Katze – 🐟 Fisch"], correct: 0,
                    explanation: "Katze – Tatze reimt sich."
                }
            ]
        },
        test: [
                {
                    id: "reimk1l2_t1", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["🏠 Haus – 🐭 Maus", "🏠 Haus – 🌳 Baum", "🐭 Maus – 🧀 Käse", "🏠 Haus – 🚗 Auto"], correct: 0,
                    explanation: "Haus – Maus reimt sich."
                },
                {
                    id: "reimk1l2_t2", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["🐰 Hase – 👃 Nase", "🐰 Hase – 🥕 Karotte", "👃 Nase – 👂 Ohr", "🐰 Hase – 🐻 Bär"], correct: 0,
                    explanation: "Hase – Nase reimt sich."
                },
                {
                    id: "reimk1l2_t3", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["👖 Hose – 🌹 Rose", "👖 Hose – 🧦 Socke", "🌹 Rose – 🐝 Biene", "👖 Hose – 🎩 Hut"], correct: 0,
                    explanation: "Hose – Rose reimt sich."
                },
                {
                    id: "reimk1l2_t4", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["👟 Schuh – 🐄 Kuh", "👟 Schuh – 🧦 Socke", "🐄 Kuh – 🐷 Schwein", "👟 Schuh – 🎩 Hut"], correct: 0,
                    explanation: "Schuh – Kuh reimt sich."
                },
                {
                    id: "reimk1l2_t5", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["⛵ Boot – 🍞 Brot", "⛵ Boot – 🐋 Wal", "🍞 Brot – 🧀 Käse", "⛵ Boot – 🚂 Zug"], correct: 0,
                    explanation: "Boot – Brot reimt sich."
                },
                {
                    id: "reimk1l2_t6", category: "kurs_reim_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Welche zwei reimen sich?", answers: ["🧣 Schal – 🐋 Wal", "🧣 Schal – 🧦 Socke", "🐋 Wal – 🐟 Fisch", "🧣 Schal – 👖 Hose"], correct: 0,
                    explanation: "Schal – Wal reimt sich."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "reim_k1_l3", kurs: "reime_k1", order: 3, icon: "📜",
        title: "Kleine Reime", kurz: "Die Maus im Haus",
        erklaerung: {
            intro: "Aus Reimen werden kleine <b>Verse</b>. Das letzte Wort fehlt – es muss sich auf ein Wort im Satz <b>reimen</b>. Lies laut vor und hör genau hin!",
            beispiele: ["Die Maus wohnt im 🏠 Haus.",
                "Der Hund hat einen 👄 Mund.",
                "Die Kuh trägt einen 👟 Schuh."],
            merksatz: "Das fehlende Wort reimt sich auf ein Wort im Satz."
        },
        uebung: {
            leicht: [
                {
                    id: "reimk1l3_l1", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "leicht", points: 10,
                    question: "Die Maus wohnt im ___.", answers: ["🏠 Haus", "🌳 Baum", "🛏️ Bett", "🚗 Auto"], correct: 0,
                    explanation: "Maus – Haus reimt sich."
                },
                {
                    id: "reimk1l3_l2", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "leicht", points: 10,
                    question: "Der Hase hat eine ___.", answers: ["👃 Nase", "🥕 Karotte", "🍐 Birne", "⏰ Uhr"], correct: 0,
                    explanation: "Hase – Nase reimt sich."
                },
                {
                    id: "reimk1l3_l3", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "leicht", points: 10,
                    question: "Die Kuh trägt einen ___.", answers: ["👟 Schuh", "🎩 Hut", "🔑 Schlüssel", "⚽ Ball"], correct: 0,
                    explanation: "Kuh – Schuh reimt sich."
                },
                {
                    id: "reimk1l3_l4", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "leicht", points: 10,
                    question: "Der Hund hat einen ___.", answers: ["👄 Mund", "⚽ Ball", "🍎 Apfel", "🔑 Schlüssel"], correct: 0,
                    explanation: "Hund – Mund reimt sich."
                }
            ],
            mittel: [
                {
                    id: "reimk1l3_m1", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Der Wal trägt einen ___.", answers: ["🧣 Schal", "🎩 Hut", "⚽ Ball", "🔑 Schlüssel"], correct: 0,
                    explanation: "Wal – Schal reimt sich."
                },
                {
                    id: "reimk1l3_m2", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Im Zelt liegt viel ___.", answers: ["💰 Geld", "🍞 Brot", "🧀 Käse", "🥛 Milch"], correct: 0,
                    explanation: "Zelt – Geld reimt sich."
                },
                {
                    id: "reimk1l3_m3", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Die Rose ist an der ___.", answers: ["👖 Hose", "🧦 Socke", "🍐 Birne", "🔔 Glocke"], correct: 0,
                    explanation: "Rose – Hose reimt sich."
                },
                {
                    id: "reimk1l3_m4", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Die Socke hängt an der ___.", answers: ["🔔 Glocke", "👖 Hose", "🍐 Birne", "🌹 Rose"], correct: 0,
                    explanation: "Socke – Glocke reimt sich."
                }
            ],
            schwer: [
                {
                    id: "reimk1l3_s1", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "schwer", points: 10,
                    question: "Die Tanne steht neben der ___.", answers: ["🍳 Pfanne", "🍌 Banane", "🍐 Birne", "🌹 Rose"], correct: 0,
                    explanation: "Tanne – Pfanne reimt sich."
                },
                {
                    id: "reimk1l3_s2", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "schwer", points: 10,
                    question: "Der Bus bringt eine ___.", answers: ["🌰 Nuss", "🍌 Banane", "🍐 Birne", "🍒 Kirsche"], correct: 0,
                    explanation: "Bus – Nuss reimt sich."
                },
                {
                    id: "reimk1l3_s3", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "schwer", points: 10,
                    question: "In der Tasche ist eine ___.", answers: ["🍾 Flasche", "🍌 Banane", "🍐 Birne", "⏰ Uhr"], correct: 0,
                    explanation: "Tasche – Flasche reimt sich."
                },
                {
                    id: "reimk1l3_s4", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "schwer", points: 10,
                    question: "Im Boot liegt ein ___.", answers: ["🍞 Brot", "🍎 Apfel", "🐟 Fisch", "⚽ Ball"], correct: 0,
                    explanation: "Boot – Brot reimt sich."
                }
            ]
        },
        test: [
                {
                    id: "reimk1l3_t1", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Die Maus läuft ins ___.", answers: ["🏠 Haus", "🛏️ Bett", "🚗 Auto", "⛵ Boot"], correct: 0,
                    explanation: "Maus – Haus reimt sich."
                },
                {
                    id: "reimk1l3_t2", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Die Nase hat der ___.", answers: ["🐰 Hase", "🐻 Bär", "🐶 Hund", "🦁 Löwe"], correct: 0,
                    explanation: "Nase – Hase reimt sich."
                },
                {
                    id: "reimk1l3_t3", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Der Schuh gehört der ___.", answers: ["🐄 Kuh", "🐱 Katze", "🐝 Biene", "🐐 Ziege"], correct: 0,
                    explanation: "Schuh – Kuh reimt sich."
                },
                {
                    id: "reimk1l3_t4", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Am Tor ist ein ___.", answers: ["👂 Ohr", "⚽ Ball", "🚗 Auto", "🐦 Vogel"], correct: 0,
                    explanation: "Tor – Ohr reimt sich."
                },
                {
                    id: "reimk1l3_t5", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Die Tatze hat die ___.", answers: ["🐱 Katze", "🐄 Kuh", "🐝 Biene", "🐐 Ziege"], correct: 0,
                    explanation: "Tatze – Katze reimt sich."
                },
                {
                    id: "reimk1l3_t6", category: "kurs_reim_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "reime", difficulty: "mittel", points: 10,
                    question: "Wo klingen Reimwörter gleich?", answers: ["am Ende", "am Anfang", "in der Mitte", "gar nicht"], correct: 0,
                    explanation: "Reimwörter haben das gleiche Ende."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "laut_k1_l1", kurs: "laute_k1", order: 1, icon: "🔚",
        title: "Der letzte Laut", kurz: "Bus endet mit s",
        erklaerung: {
            intro: "Nicht nur der Anfang ist wichtig. Hör auch auf den <b>letzten Laut</b>: Bei <b>Bus</b> hörst du am Ende <b>s</b>. Bei <b>Ball</b> hörst du <b>l</b>.",
            beispiele: ["🚌 Bus → s",
                "⚽ Ball → l",
                "🌳 Baum → m"],
            merksatz: "Wort langsam sprechen – was hörst du ganz am Ende?"
        },
        uebung: {
            leicht: [
                {
                    id: "lautk1l1_l1", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "🚌 Was hörst du am Ende von Bus?", answers: ["s", "b", "u", "m"], correct: 0,
                    explanation: "B – u – s."
                },
                {
                    id: "lautk1l1_l2", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "🌳 Was hörst du am Ende von Baum?", answers: ["m", "b", "a", "n"], correct: 0,
                    explanation: "B – au – m."
                },
                {
                    id: "lautk1l1_l3", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "⚽ Was hörst du am Ende von Ball?", answers: ["l", "b", "a", "t"], correct: 0,
                    explanation: "B – a – ll."
                },
                {
                    id: "lautk1l1_l4", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "🎩 Was hörst du am Ende von Hut?", answers: ["t", "h", "u", "d"], correct: 0,
                    explanation: "H – u – t."
                }
            ],
            mittel: [
                {
                    id: "lautk1l1_m1", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🍦 Was hörst du am Ende von Eis?", answers: ["s", "e", "i", "z"], correct: 0,
                    explanation: "Ei – s."
                },
                {
                    id: "lautk1l1_m2", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🚗 Was hörst du am Ende von Auto?", answers: ["o", "a", "t", "u"], correct: 0,
                    explanation: "Au – t – o."
                },
                {
                    id: "lautk1l1_m3", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "👵 Was hörst du am Ende von Oma?", answers: ["a", "o", "m", "e"], correct: 0,
                    explanation: "O – m – a."
                },
                {
                    id: "lautk1l1_m4", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🐄 Was hörst du am Ende von Kuh?", answers: ["u", "k", "o", "a"], correct: 0,
                    explanation: "K – u."
                }
            ],
            schwer: [
                {
                    id: "lautk1l1_s1", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "☀️ Was hörst du am Ende von Sonne?", answers: ["e", "s", "o", "n"], correct: 0,
                    explanation: "So – nn – e."
                },
                {
                    id: "lautk1l1_s2", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "🦔 Was hörst du am Ende von Igel?", answers: ["l", "i", "g", "e"], correct: 0,
                    explanation: "I – g – e – l."
                },
                {
                    id: "lautk1l1_s3", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welches Wort endet mit m?", answers: ["🌳 Baum", "🚌 Bus", "⚽ Ball", "🎩 Hut"], correct: 0,
                    explanation: "Baum endet mit m."
                },
                {
                    id: "lautk1l1_s4", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welches Wort endet mit s?", answers: ["🏠 Haus", "🌳 Baum", "🎩 Hut", "⚽ Ball"], correct: 0,
                    explanation: "Haus endet mit s."
                }
            ]
        },
        test: [
                {
                    id: "lautk1l1_t1", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🏠 Was hörst du am Ende von Haus?", answers: ["s", "h", "a", "u"], correct: 0,
                    explanation: "H – au – s."
                },
                {
                    id: "lautk1l1_t2", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🍎 Was hörst du am Ende von Apfel?", answers: ["l", "a", "f", "e"], correct: 0,
                    explanation: "Ap – f – e – l."
                },
                {
                    id: "lautk1l1_t3", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "👃 Was hörst du am Ende von Nase?", answers: ["e", "n", "a", "s"], correct: 0,
                    explanation: "N – a – s – e."
                },
                {
                    id: "lautk1l1_t4", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welches Wort endet mit t?", answers: ["🎩 Hut", "🚌 Bus", "🌳 Baum", "🚗 Auto"], correct: 0,
                    explanation: "Hut endet mit t."
                },
                {
                    id: "lautk1l1_t5", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welches Wort endet mit l?", answers: ["⚽ Ball", "🏠 Haus", "🐄 Kuh", "☀️ Sonne"], correct: 0,
                    explanation: "Ball endet mit l."
                },
                {
                    id: "lautk1l1_t6", category: "kurs_laut_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🐭 Was hörst du am Ende von Maus?", answers: ["s", "m", "a", "u"], correct: 0,
                    explanation: "M – au – s."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "laut_k1_l2", kurs: "laute_k1", order: 2, icon: "🎯",
        title: "Der Laut in der Mitte", kurz: "H – u – t",
        erklaerung: {
            intro: "In vielen kurzen Wörtern steckt in der <b>Mitte</b> ein Selbstlaut: H<b>u</b>t, B<b>a</b>ll, F<b>i</b>sch. Sprich das Wort langsam und hör genau hin.",
            beispiele: ["🎩 Hut → u",
                "⚽ Ball → a",
                "🐟 Fisch → i"],
            merksatz: "Langsam sprechen: H – u – t. In der Mitte steckt das u."
        },
        uebung: {
            leicht: [
                {
                    id: "lautk1l2_l1", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "🎩 Welcher Selbstlaut steckt in Hut?", answers: ["u", "a", "i", "o"], correct: 0,
                    explanation: "H – u – t."
                },
                {
                    id: "lautk1l2_l2", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "⚽ Welcher Selbstlaut steckt in Ball?", answers: ["a", "u", "e", "o"], correct: 0,
                    explanation: "B – a – ll."
                },
                {
                    id: "lautk1l2_l3", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "🐟 Welcher Selbstlaut steckt in Fisch?", answers: ["i", "a", "u", "e"], correct: 0,
                    explanation: "F – i – sch."
                },
                {
                    id: "lautk1l2_l4", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "🌙 Welcher Selbstlaut steckt in Mond?", answers: ["o", "a", "u", "i"], correct: 0,
                    explanation: "M – o – n – d."
                }
            ],
            mittel: [
                {
                    id: "lautk1l2_m1", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🛏️ Welcher Selbstlaut steckt in Bett?", answers: ["e", "a", "i", "o"], correct: 0,
                    explanation: "B – e – tt."
                },
                {
                    id: "lautk1l2_m2", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🥛 Welcher Selbstlaut steckt in Milch?", answers: ["i", "e", "a", "u"], correct: 0,
                    explanation: "M – i – l – ch."
                },
                {
                    id: "lautk1l2_m3", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🐋 Welcher Selbstlaut steckt in Wal?", answers: ["a", "o", "e", "u"], correct: 0,
                    explanation: "W – a – l."
                },
                {
                    id: "lautk1l2_m4", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "⭐ Welcher Selbstlaut steckt in Stern?", answers: ["e", "a", "i", "o"], correct: 0,
                    explanation: "St – e – r – n."
                }
            ],
            schwer: [
                {
                    id: "lautk1l2_s1", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welches Wort hat ein u in der Mitte?", answers: ["🎩 Hut", "⚽ Ball", "🐟 Fisch", "🛏️ Bett"], correct: 0,
                    explanation: "H – u – t."
                },
                {
                    id: "lautk1l2_s2", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welches Wort hat ein i in der Mitte?", answers: ["🐟 Fisch", "🎩 Hut", "🌙 Mond", "⚽ Ball"], correct: 0,
                    explanation: "F – i – sch."
                },
                {
                    id: "lautk1l2_s3", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welches Wort hat ein o in der Mitte?", answers: ["🌙 Mond", "🛏️ Bett", "🐋 Wal", "🥛 Milch"], correct: 0,
                    explanation: "M – o – n – d."
                },
                {
                    id: "lautk1l2_s4", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welches Wort hat ein e in der Mitte?", answers: ["🛏️ Bett", "🎩 Hut", "🌙 Mond", "🐟 Fisch"], correct: 0,
                    explanation: "B – e – tt."
                }
            ]
        },
        test: [
                {
                    id: "lautk1l2_t1", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🐸 Welcher Selbstlaut steckt in Frosch?", answers: ["o", "a", "u", "i"], correct: 0,
                    explanation: "Fr – o – sch."
                },
                {
                    id: "lautk1l2_t2", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "✋ Welcher Selbstlaut steckt in Hand?", answers: ["a", "e", "o", "u"], correct: 0,
                    explanation: "H – a – n – d."
                },
                {
                    id: "lautk1l2_t3", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🐶 Welcher Selbstlaut steckt in Hund?", answers: ["u", "o", "a", "i"], correct: 0,
                    explanation: "H – u – n – d."
                },
                {
                    id: "lautk1l2_t4", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat ein a in der Mitte?", answers: ["✋ Hand", "🐶 Hund", "🛏️ Bett", "🐟 Fisch"], correct: 0,
                    explanation: "H – a – n – d."
                },
                {
                    id: "lautk1l2_t5", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "🍞 Welcher Selbstlaut steckt in Brot?", answers: ["o", "a", "u", "e"], correct: 0,
                    explanation: "Br – o – t."
                },
                {
                    id: "lautk1l2_t6", category: "kurs_laut_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat ein u in der Mitte?", answers: ["🐶 Hund", "✋ Hand", "⭐ Stern", "🌙 Mond"], correct: 0,
                    explanation: "H – u – n – d."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "laut_k1_l3", kurs: "laute_k1", order: 3, icon: "🔗",
        title: "Laute zusammensetzen", kurz: "O-m-a wird Oma",
        erklaerung: {
            intro: "Wörter bestehen aus <b>Lauten</b>. Sprich sie langsam nacheinander, dann immer schneller – schon ist ein Wort daraus geworden: <b>O – m – a</b> wird <b>Oma</b>.",
            beispiele: ["O – m – a → Oma",
                "E – i – s → Eis",
                "B – u – s → Bus"],
            merksatz: "Laute nacheinander sprechen, dann schneller – fertig ist das Wort."
        },
        uebung: {
            leicht: [
                {
                    id: "lautk1l3_l1", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist das: O-m-a?", answers: ["👵 Oma", "🍦 Eis", "🚌 Bus", "🎩 Hut"], correct: 0,
                    explanation: "O – m – a wird Oma."
                },
                {
                    id: "lautk1l3_l2", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist das: E-i-s?", answers: ["🍦 Eis", "👵 Oma", "🐄 Kuh", "🌙 Mond"], correct: 0,
                    explanation: "E – i – s wird Eis."
                },
                {
                    id: "lautk1l3_l3", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist das: B-u-s?", answers: ["🚌 Bus", "🎩 Hut", "🍦 Eis", "🐄 Kuh"], correct: 0,
                    explanation: "B – u – s wird Bus."
                },
                {
                    id: "lautk1l3_l4", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist das: H-u-t?", answers: ["🎩 Hut", "🚌 Bus", "🐄 Kuh", "🍦 Eis"], correct: 0,
                    explanation: "H – u – t wird Hut."
                }
            ],
            mittel: [
                {
                    id: "lautk1l3_m1", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist das: M-a-u-s?", answers: ["🐭 Maus", "🏠 Haus", "🌳 Baum", "⚽ Ball"], correct: 0,
                    explanation: "M – a – u – s wird Maus."
                },
                {
                    id: "lautk1l3_m2", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist das: B-a-l-l?", answers: ["⚽ Ball", "🌳 Baum", "🚌 Bus", "🍌 Banane"], correct: 0,
                    explanation: "B – a – l – l wird Ball."
                },
                {
                    id: "lautk1l3_m3", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist das: S-o-f-a?", answers: ["🛋️ Sofa", "☀️ Sonne", "🧦 Socke", "🍲 Suppe"], correct: 0,
                    explanation: "S – o – f – a wird Sofa."
                },
                {
                    id: "lautk1l3_m4", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist das: N-a-s-e?", answers: ["👃 Nase", "🐰 Hase", "🌰 Nuss", "🍌 Banane"], correct: 0,
                    explanation: "N – a – s – e wird Nase."
                }
            ],
            schwer: [
                {
                    id: "lautk1l3_s1", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welcher Buchstabe fehlt: _aus (🐭)?", answers: ["M", "T", "S", "F"], correct: 0,
                    explanation: "M – aus: Maus."
                },
                {
                    id: "lautk1l3_s2", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welcher Buchstabe fehlt: _ase (🐰)?", answers: ["H", "M", "T", "R"], correct: 0,
                    explanation: "H – ase: Hase."
                },
                {
                    id: "lautk1l3_s3", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welcher Buchstabe fehlt: Bu_ (🚌)?", answers: ["s", "t", "m", "k"], correct: 0,
                    explanation: "Bu – s: Bus."
                },
                {
                    id: "lautk1l3_s4", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welcher Buchstabe fehlt: H_t (🎩)?", answers: ["u", "e", "o", "i"], correct: 0,
                    explanation: "H – u – t: Hut."
                }
            ]
        },
        test: [
                {
                    id: "lautk1l3_t1", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist das: K-u-h?", answers: ["🐄 Kuh", "🎩 Hut", "🚌 Bus", "👟 Schuh"], correct: 0,
                    explanation: "K – u – h wird Kuh."
                },
                {
                    id: "lautk1l3_t2", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist das: A-u-t-o?", answers: ["🚗 Auto", "🍎 Apfel", "🐒 Affe", "⏰ Uhr"], correct: 0,
                    explanation: "A – u – t – o wird Auto."
                },
                {
                    id: "lautk1l3_t3", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher Buchstabe fehlt: _ond (🌙)?", answers: ["M", "S", "T", "K"], correct: 0,
                    explanation: "M – ond: Mond."
                },
                {
                    id: "lautk1l3_t4", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist das: R-o-s-e?", answers: ["🌹 Rose", "👖 Hose", "🐰 Hase", "👃 Nase"], correct: 0,
                    explanation: "R – o – s – e wird Rose."
                },
                {
                    id: "lautk1l3_t5", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welcher Buchstabe fehlt: Ba_m (🌳)?", answers: ["u", "a", "o", "i"], correct: 0,
                    explanation: "Ba – u – m: Baum."
                },
                {
                    id: "lautk1l3_t6", category: "kurs_laut_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Aus Lauten wird ein …", answers: ["Wort", "Bild", "Ball", "Lied"], correct: 0,
                    explanation: "Laute zusammen ergeben ein Wort."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "lies_k1_l1", kurs: "lesen_k1", order: 1, icon: "🖼️",
        title: "Bild und Wort", kurz: "Welches Wort passt?",
        erklaerung: {
            intro: "Jetzt liest du selbst! Schau dir das <b>Bild</b> an und such das passende <b>Wort</b>. Lies jedes Wort langsam, Buchstabe für Buchstabe.",
            beispiele: ["🐭 → Maus",
                "🏠 → Haus",
                "🍦 → Eis"],
            merksatz: "Bild anschauen – Wörter langsam lesen – das passende tippen."
        },
        uebung: {
            leicht: [
                {
                    id: "liesk1l1_l1", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "leicht", points: 10,
                    question: "🐭 Welches Wort passt zum Bild?", answers: ["Maus", "Haus", "Mund", "Mond"], correct: 0,
                    explanation: "Das Bild zeigt eine Maus."
                },
                {
                    id: "liesk1l1_l2", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "leicht", points: 10,
                    question: "🍦 Welches Wort passt zum Bild?", answers: ["Eis", "Ei", "Esel", "Eule"], correct: 0,
                    explanation: "Das Bild zeigt ein Eis."
                },
                {
                    id: "liesk1l1_l3", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "leicht", points: 10,
                    question: "🚌 Welches Wort passt zum Bild?", answers: ["Bus", "Bär", "Ball", "Baum"], correct: 0,
                    explanation: "Das Bild zeigt einen Bus."
                },
                {
                    id: "liesk1l1_l4", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "leicht", points: 10,
                    question: "👵 Welches Wort passt zum Bild?", answers: ["Oma", "Opa", "Ofen", "Obst"], correct: 0,
                    explanation: "Das Bild zeigt eine Oma."
                }
            ],
            mittel: [
                {
                    id: "liesk1l1_m1", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "🏠 Welches Wort passt zum Bild?", answers: ["Haus", "Maus", "Hase", "Hose"], correct: 0,
                    explanation: "Das Bild zeigt ein Haus."
                },
                {
                    id: "liesk1l1_m2", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "🌙 Welches Wort passt zum Bild?", answers: ["Mond", "Mund", "Maus", "Mama"], correct: 0,
                    explanation: "Das Bild zeigt den Mond."
                },
                {
                    id: "liesk1l1_m3", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "🍎 Welches Wort passt zum Bild?", answers: ["Apfel", "Affe", "Ampel", "Anker"], correct: 0,
                    explanation: "Das Bild zeigt einen Apfel."
                },
                {
                    id: "liesk1l1_m4", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "🐟 Welches Wort passt zum Bild?", answers: ["Fisch", "Tisch", "Fuchs", "Frosch"], correct: 0,
                    explanation: "Das Bild zeigt einen Fisch."
                }
            ],
            schwer: [
                {
                    id: "liesk1l1_s1", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "schwer", points: 10,
                    question: "👖 Welches Wort passt zum Bild?", answers: ["Hose", "Rose", "Hase", "Nase"], correct: 0,
                    explanation: "Das Bild zeigt eine Hose."
                },
                {
                    id: "liesk1l1_s2", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "schwer", points: 10,
                    question: "🌹 Welches Wort passt zum Bild?", answers: ["Rose", "Hose", "Rabe", "Nase"], correct: 0,
                    explanation: "Das Bild zeigt eine Rose."
                },
                {
                    id: "liesk1l1_s3", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "schwer", points: 10,
                    question: "🐰 Welches Wort passt zum Bild?", answers: ["Hase", "Nase", "Hose", "Vase"], correct: 0,
                    explanation: "Das Bild zeigt einen Hasen."
                },
                {
                    id: "liesk1l1_s4", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "schwer", points: 10,
                    question: "👃 Welches Wort passt zum Bild?", answers: ["Nase", "Hase", "Vase", "Rose"], correct: 0,
                    explanation: "Das Bild zeigt eine Nase."
                }
            ]
        },
        test: [
                {
                    id: "liesk1l1_t1", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "🌳 Welches Wort passt zum Bild?", answers: ["Baum", "Bus", "Ball", "Bein"], correct: 0,
                    explanation: "Das Bild zeigt einen Baum."
                },
                {
                    id: "liesk1l1_t2", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "⚽ Welches Wort passt zum Bild?", answers: ["Ball", "Bett", "Bus", "Bild"], correct: 0,
                    explanation: "Das Bild zeigt einen Ball."
                },
                {
                    id: "liesk1l1_t3", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "🎩 Welches Wort passt zum Bild?", answers: ["Hut", "Hund", "Haus", "Huhn"], correct: 0,
                    explanation: "Das Bild zeigt einen Hut."
                },
                {
                    id: "liesk1l1_t4", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "🐶 Welches Wort passt zum Bild?", answers: ["Hund", "Mund", "Hut", "Huhn"], correct: 0,
                    explanation: "Das Bild zeigt einen Hund."
                },
                {
                    id: "liesk1l1_t5", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "☀️ Welches Wort passt zum Bild?", answers: ["Sonne", "Sofa", "Socke", "Suppe"], correct: 0,
                    explanation: "Das Bild zeigt die Sonne."
                },
                {
                    id: "liesk1l1_t6", category: "kurs_lies_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "🐄 Welches Wort passt zum Bild?", answers: ["Kuh", "Kino", "Kamm", "Kuss"], correct: 0,
                    explanation: "Das Bild zeigt eine Kuh."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "lies_k1_l2", kurs: "lesen_k1", order: 2, icon: "✏️",
        title: "Welches Wort fehlt?", kurz: "Lücken füllen",
        erklaerung: {
            intro: "Jetzt liest du ganz kleine <b>Sätze</b>. Ein Wort fehlt. Welches Wort <b>passt</b>, damit der Satz Sinn macht?",
            beispiele: ["Die Katze trinkt Milch.",
                "Der Vogel kann fliegen.",
                "Die Kuh gibt Milch."],
            merksatz: "Satz lesen – Lücke finden – passendes Wort einsetzen."
        },
        uebung: {
            leicht: [
                {
                    id: "liesk1l2_l1", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "leicht", points: 10,
                    question: "Die Katze trinkt ___.", answers: ["Milch", "Mond", "Mütze", "Mama"], correct: 0,
                    explanation: "Katzen trinken Milch."
                },
                {
                    id: "liesk1l2_l2", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "leicht", points: 10,
                    question: "Der Hund ___.", answers: ["bellt", "malt", "liest", "kocht"], correct: 0,
                    explanation: "Hunde bellen."
                },
                {
                    id: "liesk1l2_l3", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "leicht", points: 10,
                    question: "Ich esse einen ___.", answers: ["Apfel", "Ball", "Tisch", "Bus"], correct: 0,
                    explanation: "Einen Apfel kann man essen."
                },
                {
                    id: "liesk1l2_l4", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "leicht", points: 10,
                    question: "Der Vogel kann ___.", answers: ["fliegen", "lesen", "kochen", "malen"], correct: 0,
                    explanation: "Vögel können fliegen."
                }
            ],
            mittel: [
                {
                    id: "liesk1l2_m1", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Am Himmel leuchtet der ___.", answers: ["Mond", "Mund", "Hund", "Ball"], correct: 0,
                    explanation: "Der Mond ist am Himmel."
                },
                {
                    id: "liesk1l2_m2", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Ich schlafe im ___.", answers: ["Bett", "Ball", "Becher", "Brot"], correct: 0,
                    explanation: "Man schläft im Bett."
                },
                {
                    id: "liesk1l2_m3", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Der Fisch lebt im ___.", answers: ["Wasser", "Wald", "Wagen", "Winter"], correct: 0,
                    explanation: "Fische leben im Wasser."
                },
                {
                    id: "liesk1l2_m4", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Mit den Augen kann ich ___.", answers: ["sehen", "hören", "riechen", "laufen"], correct: 0,
                    explanation: "Augen sind zum Sehen."
                }
            ],
            schwer: [
                {
                    id: "liesk1l2_s1", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "schwer", points: 10,
                    question: "Die Kuh gibt ___.", answers: ["Milch", "Eier", "Honig", "Wolle"], correct: 0,
                    explanation: "Milch kommt von der Kuh."
                },
                {
                    id: "liesk1l2_s2", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "schwer", points: 10,
                    question: "Die Biene macht ___.", answers: ["Honig", "Milch", "Eier", "Brot"], correct: 0,
                    explanation: "Honig kommt von der Biene."
                },
                {
                    id: "liesk1l2_s3", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "schwer", points: 10,
                    question: "Das Huhn legt ___.", answers: ["Eier", "Milch", "Honig", "Steine"], correct: 0,
                    explanation: "Eier kommen vom Huhn."
                },
                {
                    id: "liesk1l2_s4", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "schwer", points: 10,
                    question: "Mit den Ohren kann ich ___.", answers: ["hören", "sehen", "laufen", "malen"], correct: 0,
                    explanation: "Ohren sind zum Hören."
                }
            ]
        },
        test: [
                {
                    id: "liesk1l2_t1", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Die Maus mag ___.", answers: ["Käse", "Kino", "Kamm", "Kerze"], correct: 0,
                    explanation: "Mäuse mögen Käse."
                },
                {
                    id: "liesk1l2_t2", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Im Winter fällt ___.", answers: ["Schnee", "Sonne", "Sand", "Salat"], correct: 0,
                    explanation: "Im Winter schneit es."
                },
                {
                    id: "liesk1l2_t3", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Mit der Nase kann ich ___.", answers: ["riechen", "hören", "sehen", "malen"], correct: 0,
                    explanation: "Die Nase ist zum Riechen."
                },
                {
                    id: "liesk1l2_t4", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Der Ball ist ___.", answers: ["rund", "eckig", "flüssig", "spitz"], correct: 0,
                    explanation: "Ein Ball ist rund."
                },
                {
                    id: "liesk1l2_t5", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Das Schaf gibt ___.", answers: ["Wolle", "Honig", "Eier", "Steine"], correct: 0,
                    explanation: "Wolle kommt vom Schaf."
                },
                {
                    id: "liesk1l2_t6", category: "kurs_lies_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Der Baum hat grüne ___.", answers: ["Blätter", "Bälle", "Betten", "Bücher"], correct: 0,
                    explanation: "Bäume haben Blätter."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "lies_k1_l3", kurs: "lesen_k1", order: 3, icon: "💬",
        title: "Kleine Sätze verstehen", kurz: "Die Antwort steht im Satz",
        erklaerung: {
            intro: "Lies den kleinen Satz ganz genau. Dann kommt eine Frage dazu. Die Antwort steht <b>im Satz</b>.",
            beispiele: ["Tom hat einen Ball.",
                "Was hat Tom?",
                "→ einen Ball"],
            merksatz: "Erst den Satz lesen, dann die Frage."
        },
        uebung: {
            leicht: [
                {
                    id: "liesk1l3_l1", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "leicht", points: 10,
                    question: "Tom hat einen Ball. Was hat Tom?", answers: ["einen Ball", "einen Hut", "ein Eis", "ein Auto"], correct: 0,
                    explanation: "Das steht im Satz."
                },
                {
                    id: "liesk1l3_l2", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "leicht", points: 10,
                    question: "Mia mag Eis. Was mag Mia?", answers: ["Eis", "Brot", "Milch", "Obst"], correct: 0,
                    explanation: "Das steht im Satz."
                },
                {
                    id: "liesk1l3_l3", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "leicht", points: 10,
                    question: "Der Hund ist braun. Wie ist der Hund?", answers: ["braun", "rot", "grün", "blau"], correct: 0,
                    explanation: "Das steht im Satz."
                },
                {
                    id: "liesk1l3_l4", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "leicht", points: 10,
                    question: "Oma liest. Wer liest?", answers: ["Oma", "Opa", "Mia", "Tom"], correct: 0,
                    explanation: "Das steht im Satz."
                }
            ],
            mittel: [
                {
                    id: "liesk1l3_m1", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Die Katze schläft. Was macht die Katze?", answers: ["sie schläft", "sie läuft", "sie frisst", "sie spielt"], correct: 0,
                    explanation: "Das steht im Satz."
                },
                {
                    id: "liesk1l3_m2", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Ali hat zwei Äpfel. Wie viele Äpfel?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Zwei Äpfel."
                },
                {
                    id: "liesk1l3_m3", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Lena malt ein Haus. Was malt Lena?", answers: ["ein Haus", "einen Baum", "einen Hund", "ein Auto"], correct: 0,
                    explanation: "Das steht im Satz."
                },
                {
                    id: "liesk1l3_m4", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Papa ist im Garten. Wo ist Papa?", answers: ["im Garten", "im Bett", "im Auto", "im Bad"], correct: 0,
                    explanation: "Das steht im Satz."
                }
            ],
            schwer: [
                {
                    id: "liesk1l3_s1", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "schwer", points: 10,
                    question: "Tom und Mia spielen. Wer spielt?", answers: ["Tom und Mia", "nur Tom", "nur Mia", "niemand"], correct: 0,
                    explanation: "Beide spielen."
                },
                {
                    id: "liesk1l3_s2", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "schwer", points: 10,
                    question: "Der Ball ist rot und rund. Welche Farbe hat er?", answers: ["rot", "rund", "blau", "gelb"], correct: 0,
                    explanation: "Rot ist die Farbe. Rund ist die Form."
                },
                {
                    id: "liesk1l3_s3", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "schwer", points: 10,
                    question: "Opa hat drei Hühner. Wie viele Hühner?", answers: ["3", "2", "4", "1"], correct: 0,
                    explanation: "Drei Hühner."
                },
                {
                    id: "liesk1l3_s4", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "schwer", points: 10,
                    question: "Die Sonne scheint. Es ist warm. Wie ist es?", answers: ["warm", "kalt", "nass", "dunkel"], correct: 0,
                    explanation: "Das steht im zweiten Satz."
                }
            ]
        },
        test: [
                {
                    id: "liesk1l3_t1", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Mama trinkt Tee. Was trinkt Mama?", answers: ["Tee", "Milch", "Saft", "Wasser"], correct: 0,
                    explanation: "Das steht im Satz."
                },
                {
                    id: "liesk1l3_t2", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Der Vogel sitzt im Baum. Wo sitzt er?", answers: ["im Baum", "im Haus", "im Auto", "im Bett"], correct: 0,
                    explanation: "Das steht im Satz."
                },
                {
                    id: "liesk1l3_t3", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Mia hat eine Puppe. Wer hat eine Puppe?", answers: ["Mia", "Tom", "Oma", "Papa"], correct: 0,
                    explanation: "Das steht im Satz."
                },
                {
                    id: "liesk1l3_t4", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Der Hase ist weiß. Wie ist der Hase?", answers: ["weiß", "braun", "grau", "schwarz"], correct: 0,
                    explanation: "Das steht im Satz."
                },
                {
                    id: "liesk1l3_t5", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Ali isst vier Kekse. Wie viele Kekse?", answers: ["4", "3", "5", "2"], correct: 0,
                    explanation: "Vier Kekse."
                },
                {
                    id: "liesk1l3_t6", category: "kurs_lies_k1_l3", area: "schule", grade: 1,
                    subject: "deutsch", topic: "lesen", difficulty: "mittel", points: 10,
                    question: "Es regnet. Tom hat einen Schirm. Was hat Tom?", answers: ["einen Schirm", "einen Ball", "einen Hut", "ein Eis"], correct: 0,
                    explanation: "Das steht im zweiten Satz."
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
        window.DEUTSCH_K1_KURSE = extraKurse;
        window.DEUTSCH_K1_LEKTIONEN = extraLektionen;
    }
})();
