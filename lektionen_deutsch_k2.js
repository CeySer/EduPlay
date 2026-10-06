// Deutsch Klasse 2 - Wortarten, Satzbau, Rechtschreibung, Umlaute, Lesen
// Klasse 2 hatte bisher keinen einzigen Deutsch-Kurs. Diese Datei haengt
// 5 Kurse mit je 3 Lektionen an - erzeugt aus /tmp/dk2/d1..d5.js.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "wortarten_k2", title: "Nomen, Verben, Adjektive", icon: "📝", grade: 2, subject: "deutsch", beschreibung: "Die drei wichtigsten Wortarten sicher auseinanderhalten." },
        { id: "satzbau_k2", title: "Sätze richtig bauen", icon: "❓", grade: 2, subject: "deutsch", beschreibung: "Satzarten, Komma bei Aufzählungen und Großschreibung." },
        { id: "rechtschreib_k2", title: "Richtig schreiben", icon: "✍️", grade: 2, subject: "deutsch", beschreibung: "ck und tz, doppelte Mitlaute und Wörter mit ie." },
        { id: "umlaute_k2", title: "Umlaute: ä, ö, ü, äu", icon: "🔤", grade: 2, subject: "deutsch", beschreibung: "Umlaute hören, von verwandten Wörtern ableiten, äu und eu unterscheiden." },
        { id: "lesen_k2", title: "Lesen und verstehen", icon: "📖", grade: 2, subject: "deutsch", beschreibung: "Sätze und kleine Texte verstehen und die Reihenfolge erkennen." }
    ];
    const extraLektionen = [
    {
        id: "wort_k2_l1", kurs: "wortarten_k2", order: 1, icon: "🏠",
        title: "Nomen erkennen", kurz: "der, die, das",
        erklaerung: {
            intro: "Ein <b>Nomen</b> ist ein Namenwort. Du kannst <b>der</b>, <b>die</b> oder <b>das</b> davor setzen: der Hund, die Blume, das Haus. Nomen schreibt man immer <b>groß</b>.",
            beispiele: ["der Hund – ein Nomen",
                "die Blume – ein Nomen",
                "laufen – kein Nomen, das macht man"],
            merksatz: "Passt der, die oder das davor? Dann ist es ein Nomen – und es wird groß geschrieben."
        },
        uebung: {
            leicht: [
                {
                    id: "wortk2l1_l1", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Nomen?", answers: ["Hund", "laufen", "schnell", "und"], correct: 0,
                    explanation: "Man kann der Hund sagen."
                },
                {
                    id: "wortk2l1_l2", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Nomen?", answers: ["Blume", "singen", "grün", "weil"], correct: 0,
                    explanation: "Man kann die Blume sagen."
                },
                {
                    id: "wortk2l1_l3", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Nomen?", answers: ["Haus", "springen", "leise", "aber"], correct: 0,
                    explanation: "Man kann das Haus sagen."
                },
                {
                    id: "wortk2l1_l4", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Nomen?", answers: ["Tisch", "essen", "groß", "oder"], correct: 0,
                    explanation: "Man kann der Tisch sagen."
                }
            ],
            mittel: [
                {
                    id: "wortk2l1_m1", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Welches Wort schreibt man groß?", answers: ["Baum", "gehen", "rot", "dann"], correct: 0,
                    explanation: "Baum ist ein Nomen."
                },
                {
                    id: "wortk2l1_m2", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Welches Wort schreibt man groß?", answers: ["Schule", "lesen", "nett", "heute"], correct: 0,
                    explanation: "Schule ist ein Nomen."
                },
                {
                    id: "wortk2l1_m3", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Wie heißt es richtig?", answers: ["Das Auto ist rot.", "das Auto ist rot.", "Das auto ist rot.", "das auto ist rot."], correct: 0,
                    explanation: "Satzanfang groß und Auto ist ein Nomen."
                },
                {
                    id: "wortk2l1_m4", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Wie heißt es richtig?", answers: ["Die Blume ist gelb.", "die Blume ist gelb.", "Die blume ist gelb.", "die blume ist gelb."], correct: 0,
                    explanation: "Satzanfang groß und Blume ist ein Nomen."
                }
            ],
            schwer: [
                {
                    id: "wortk2l1_s1", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist KEIN Nomen?", answers: ["schnell", "Auto", "Katze", "Tisch"], correct: 0,
                    explanation: "Schnell sagt, wie etwas ist."
                },
                {
                    id: "wortk2l1_s2", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist KEIN Nomen?", answers: ["springen", "Ball", "Hund", "Baum"], correct: 0,
                    explanation: "Springen ist etwas, das man macht."
                },
                {
                    id: "wortk2l1_s3", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "Wie viele Nomen: Der Hund frisst den Knochen.", answers: ["2", "1", "3", "0"], correct: 0,
                    explanation: "Hund und Knochen."
                },
                {
                    id: "wortk2l1_s4", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "Wie viele Nomen: Die Katze schläft im Korb.", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Katze und Korb."
                }
            ]
        },
        test: [
                {
                    id: "wortk2l1_t1", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist ein Nomen?", answers: ["Fenster", "singen", "blau", "schon"], correct: 0,
                    explanation: "Man kann das Fenster sagen."
                },
                {
                    id: "wortk2l1_t2", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Welches Wort schreibt man groß?", answers: ["Apfel", "trinken", "süß", "gleich"], correct: 0,
                    explanation: "Apfel ist ein Nomen."
                },
                {
                    id: "wortk2l1_t3", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Der Ball ist rund.", "der Ball ist rund.", "Der ball ist rund.", "der ball ist rund."], correct: 0,
                    explanation: "Satzanfang groß und Ball ist ein Nomen."
                },
                {
                    id: "wortk2l1_t4", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist KEIN Nomen?", answers: ["leise", "Stuhl", "Lampe", "Fenster"], correct: 0,
                    explanation: "Leise sagt, wie etwas ist."
                },
                {
                    id: "wortk2l1_t5", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Wie viele Nomen: Die Oma backt einen Kuchen.", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Oma und Kuchen."
                },
                {
                    id: "wortk2l1_t6", category: "kurs_wort_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Nomen oder nicht: Sonne?", answers: ["Nomen", "kein Nomen", "ein Verb", "ein Adjektiv"], correct: 0,
                    explanation: "Die Sonne – also ein Nomen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "wort_k2_l2", kurs: "wortarten_k2", order: 2, icon: "🏃",
        title: "Verben erkennen", kurz: "Was man tun kann",
        erklaerung: {
            intro: "Ein <b>Verb</b> ist ein Tunwort. Es sagt, <b>was jemand macht</b>: laufen, essen, schlafen. Verben schreibt man <b>klein</b>.",
            beispiele: ["laufen – man kann laufen",
                "essen – man kann essen",
                "Tisch – das kann man nicht machen"],
            merksatz: "Kann man es machen? Dann ist es ein Verb – und es wird klein geschrieben."
        },
        uebung: {
            leicht: [
                {
                    id: "wortk2l2_l1", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Verb?", answers: ["laufen", "Hund", "schnell", "und"], correct: 0,
                    explanation: "Laufen kann man machen."
                },
                {
                    id: "wortk2l2_l2", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Verb?", answers: ["singen", "Lied", "laut", "weil"], correct: 0,
                    explanation: "Singen kann man machen."
                },
                {
                    id: "wortk2l2_l3", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Verb?", answers: ["schlafen", "Bett", "müde", "dann"], correct: 0,
                    explanation: "Schlafen kann man machen."
                },
                {
                    id: "wortk2l2_l4", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Verb?", answers: ["trinken", "Milch", "kalt", "aber"], correct: 0,
                    explanation: "Trinken kann man machen."
                }
            ],
            mittel: [
                {
                    id: "wortk2l2_m1", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Was tut Mia: Mia malt ein Bild.", answers: ["malt", "Bild", "Mia", "ein"], correct: 0,
                    explanation: "Malen ist das Verb."
                },
                {
                    id: "wortk2l2_m2", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Was tut der Hund: Der Hund bellt laut.", answers: ["bellt", "Hund", "laut", "der"], correct: 0,
                    explanation: "Bellen ist das Verb."
                },
                {
                    id: "wortk2l2_m3", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Ich ___ zur Schule.", answers: ["gehe", "geht", "gehen", "gehst"], correct: 0,
                    explanation: "Ich gehe."
                },
                {
                    id: "wortk2l2_m4", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Du ___ einen Apfel.", answers: ["isst", "esse", "essen", "esst"], correct: 0,
                    explanation: "Du isst."
                }
            ],
            schwer: [
                {
                    id: "wortk2l2_s1", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist KEIN Verb?", answers: ["Blume", "lesen", "springen", "malen"], correct: 0,
                    explanation: "Blume ist ein Nomen."
                },
                {
                    id: "wortk2l2_s2", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "Wie viele Verben: Tom liest und schreibt.", answers: ["2", "1", "3", "0"], correct: 0,
                    explanation: "Liest und schreibt."
                },
                {
                    id: "wortk2l2_s3", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "Wir ___ im Garten.", answers: ["spielen", "spielt", "spielst", "spiele"], correct: 0,
                    explanation: "Wir spielen."
                },
                {
                    id: "wortk2l2_s4", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "Welches Wort schreibt man klein?", answers: ["rennen", "Katze", "Haus", "Baum"], correct: 0,
                    explanation: "Rennen ist ein Verb."
                }
            ]
        },
        test: [
                {
                    id: "wortk2l2_t1", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist ein Verb?", answers: ["springen", "Ball", "hoch", "heute"], correct: 0,
                    explanation: "Springen kann man machen."
                },
                {
                    id: "wortk2l2_t2", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Was tut Papa: Papa kocht Suppe.", answers: ["kocht", "Suppe", "Papa", "die"], correct: 0,
                    explanation: "Kochen ist das Verb."
                },
                {
                    id: "wortk2l2_t3", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Er ___ ein Buch.", answers: ["liest", "lese", "lesen", "lest"], correct: 0,
                    explanation: "Er liest."
                },
                {
                    id: "wortk2l2_t4", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist KEIN Verb?", answers: ["Fenster", "putzen", "wischen", "räumen"], correct: 0,
                    explanation: "Fenster ist ein Nomen."
                },
                {
                    id: "wortk2l2_t5", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Wie viele Verben: Oma backt und singt.", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Backt und singt."
                },
                {
                    id: "wortk2l2_t6", category: "kurs_wort_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Verben schreibt man …", answers: ["klein", "groß", "mit ck", "mit ß"], correct: 0,
                    explanation: "Nur Nomen werden groß geschrieben."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "wort_k2_l3", kurs: "wortarten_k2", order: 3, icon: "🌈",
        title: "Adjektive erkennen", kurz: "Wie ist etwas?",
        erklaerung: {
            intro: "Ein <b>Adjektiv</b> ist ein Wiewort. Es sagt, <b>wie</b> etwas ist: groß, rot, schnell, leise. Du kannst fragen: <b>Wie ist es?</b>",
            beispiele: ["Der Ball ist rot. → rot",
                "Die Maus ist klein. → klein",
                "Der Hund rennt schnell. → schnell"],
            merksatz: "Frage „Wie ist es?“ – die Antwort ist ein Adjektiv."
        },
        uebung: {
            leicht: [
                {
                    id: "wortk2l3_l1", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Adjektiv?", answers: ["rot", "Ball", "rollen", "und"], correct: 0,
                    explanation: "Rot sagt, wie der Ball ist."
                },
                {
                    id: "wortk2l3_l2", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Adjektiv?", answers: ["groß", "Haus", "bauen", "weil"], correct: 0,
                    explanation: "Groß sagt, wie das Haus ist."
                },
                {
                    id: "wortk2l3_l3", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Adjektiv?", answers: ["kalt", "Eis", "essen", "dann"], correct: 0,
                    explanation: "Kalt sagt, wie das Eis ist."
                },
                {
                    id: "wortk2l3_l4", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Adjektiv?", answers: ["leise", "Musik", "hören", "aber"], correct: 0,
                    explanation: "Leise sagt, wie die Musik ist."
                }
            ],
            mittel: [
                {
                    id: "wortk2l3_m1", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Wie ist der Ball: Der Ball ist rund.", answers: ["rund", "Ball", "ist", "der"], correct: 0,
                    explanation: "Rund ist das Adjektiv."
                },
                {
                    id: "wortk2l3_m2", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Wie ist die Nacht: Die Nacht ist dunkel.", answers: ["dunkel", "Nacht", "ist", "die"], correct: 0,
                    explanation: "Dunkel ist das Adjektiv."
                },
                {
                    id: "wortk2l3_m3", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Was ist das Gegenteil von groß?", answers: ["klein", "dick", "lang", "weit"], correct: 0,
                    explanation: "Groß und klein sind Gegenteile."
                },
                {
                    id: "wortk2l3_m4", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Was ist das Gegenteil von kalt?", answers: ["warm", "nass", "hart", "leer"], correct: 0,
                    explanation: "Kalt und warm sind Gegenteile."
                }
            ],
            schwer: [
                {
                    id: "wortk2l3_s1", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist KEIN Adjektiv?", answers: ["Blume", "bunt", "weich", "spitz"], correct: 0,
                    explanation: "Blume ist ein Nomen."
                },
                {
                    id: "wortk2l3_s2", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "Wie viele Adjektive: Der kleine Hund ist müde.", answers: ["2", "1", "3", "0"], correct: 0,
                    explanation: "Kleine und müde."
                },
                {
                    id: "wortk2l3_s3", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "Was ist das Gegenteil von schnell?", answers: ["langsam", "leise", "dunkel", "schwer"], correct: 0,
                    explanation: "Schnell und langsam sind Gegenteile."
                },
                {
                    id: "wortk2l3_s4", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "schwer", points: 10,
                    question: "Nomen, Verb oder Adjektiv: springen?", answers: ["Verb", "Nomen", "Adjektiv", "Artikel"], correct: 0,
                    explanation: "Springen kann man machen."
                }
            ]
        },
        test: [
                {
                    id: "wortk2l3_t1", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist ein Adjektiv?", answers: ["nass", "Regen", "regnen", "oft"], correct: 0,
                    explanation: "Nass sagt, wie etwas ist."
                },
                {
                    id: "wortk2l3_t2", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Wie ist die Suppe: Die Suppe ist heiß.", answers: ["heiß", "Suppe", "ist", "die"], correct: 0,
                    explanation: "Heiß ist das Adjektiv."
                },
                {
                    id: "wortk2l3_t3", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Was ist das Gegenteil von hell?", answers: ["dunkel", "leise", "weich", "leer"], correct: 0,
                    explanation: "Hell und dunkel sind Gegenteile."
                },
                {
                    id: "wortk2l3_t4", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist KEIN Adjektiv?", answers: ["Tasche", "alt", "neu", "sauber"], correct: 0,
                    explanation: "Tasche ist ein Nomen."
                },
                {
                    id: "wortk2l3_t5", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Nomen, Verb oder Adjektiv: Fenster?", answers: ["Nomen", "Verb", "Adjektiv", "Artikel"], correct: 0,
                    explanation: "Das Fenster – also ein Nomen."
                },
                {
                    id: "wortk2l3_t6", category: "kurs_wort_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "wortarten", difficulty: "mittel", points: 10,
                    question: "Wie viele Adjektive: Das rote Auto ist schnell.", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Rote und schnell."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "satz_k2_l1", kurs: "satzbau_k2", order: 1, icon: "❓",
        title: "Satzarten", kurz: "Aussage, Frage, Ausruf",
        erklaerung: {
            intro: "Es gibt drei Satzarten. Eine <b>Aussage</b> endet mit <b>.</b> Eine <b>Frage</b> endet mit <b>?</b> Ein <b>Ausruf</b> endet mit <b>!</b>",
            beispiele: ["Der Hund schläft. → Aussage",
                "Wo ist der Hund? → Frage",
                "Pass auf! → Ausruf"],
            merksatz: "Aussage = Punkt. Frage = Fragezeichen. Ausruf = Ausrufezeichen."
        },
        uebung: {
            leicht: [
                {
                    id: "satzk2l1_l1", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "leicht", points: 10,
                    question: "Welches Zeichen fehlt: Der Hund schläft___", answers: ["Punkt", "Fragezeichen", "Ausrufezeichen", "Komma"], correct: 0,
                    explanation: "Das ist eine Aussage."
                },
                {
                    id: "satzk2l1_l2", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "leicht", points: 10,
                    question: "Welches Zeichen fehlt: Wo ist mein Ball___", answers: ["Fragezeichen", "Punkt", "Ausrufezeichen", "Komma"], correct: 0,
                    explanation: "Das ist eine Frage."
                },
                {
                    id: "satzk2l1_l3", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "leicht", points: 10,
                    question: "Welches Zeichen fehlt: Hilf mir schnell___", answers: ["Ausrufezeichen", "Punkt", "Fragezeichen", "Komma"], correct: 0,
                    explanation: "Das ist ein Ausruf."
                },
                {
                    id: "satzk2l1_l4", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "leicht", points: 10,
                    question: "Welches Zeichen fehlt: Ich heiße Mia___", answers: ["Punkt", "Fragezeichen", "Ausrufezeichen", "Komma"], correct: 0,
                    explanation: "Das ist eine Aussage."
                }
            ],
            mittel: [
                {
                    id: "satzk2l1_m1", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Was ist das: Wie heißt du?", answers: ["eine Frage", "eine Aussage", "ein Ausruf", "kein Satz"], correct: 0,
                    explanation: "Es endet mit einem Fragezeichen."
                },
                {
                    id: "satzk2l1_m2", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Was ist das: Es regnet heute.", answers: ["eine Aussage", "eine Frage", "ein Ausruf", "kein Satz"], correct: 0,
                    explanation: "Es endet mit einem Punkt."
                },
                {
                    id: "satzk2l1_m3", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Was ist das: Komm sofort her!", answers: ["ein Ausruf", "eine Frage", "eine Aussage", "kein Satz"], correct: 0,
                    explanation: "Es endet mit einem Ausrufezeichen."
                },
                {
                    id: "satzk2l1_m4", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist eine Frage?", answers: ["Wann kommst du?", "Ich komme gleich.", "Komm her!", "Es ist spät."], correct: 0,
                    explanation: "Nur dieser Satz endet mit einem Fragezeichen."
                }
            ],
            schwer: [
                {
                    id: "satzk2l1_s1", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "schwer", points: 10,
                    question: "Welches Zeichen passt: Wer hat mein Heft___", answers: ["?", ".", "!", ","], correct: 0,
                    explanation: "Wer fragt, braucht ein Fragezeichen."
                },
                {
                    id: "satzk2l1_s2", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "schwer", points: 10,
                    question: "Welches Zeichen passt: Räum dein Zimmer auf___", answers: ["!", ".", "?", ","], correct: 0,
                    explanation: "Das ist eine Aufforderung."
                },
                {
                    id: "satzk2l1_s3", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist falsch?", answers: ["Wo bist du.", "Wo bist du?", "Ich bin hier.", "Komm her!"], correct: 0,
                    explanation: "Eine Frage braucht ein Fragezeichen."
                },
                {
                    id: "satzk2l1_s4", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "schwer", points: 10,
                    question: "Wie viele Sätze: Es regnet. Ich bleibe hier.", answers: ["2", "1", "3", "0"], correct: 0,
                    explanation: "Zwei Punkte, also zwei Sätze."
                }
            ]
        },
        test: [
                {
                    id: "satzk2l1_t1", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Welches Zeichen fehlt: Hast du Hunger___", answers: ["Fragezeichen", "Punkt", "Ausrufezeichen", "Komma"], correct: 0,
                    explanation: "Das ist eine Frage."
                },
                {
                    id: "satzk2l1_t2", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Was ist das: Der Ball ist rot.", answers: ["eine Aussage", "eine Frage", "ein Ausruf", "kein Satz"], correct: 0,
                    explanation: "Es endet mit einem Punkt."
                },
                {
                    id: "satzk2l1_t3", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Welches Zeichen passt: Lauf schnell___", answers: ["!", ".", "?", ","], correct: 0,
                    explanation: "Das ist ein Ausruf."
                },
                {
                    id: "satzk2l1_t4", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist eine Frage?", answers: ["Warum weinst du?", "Ich weine nicht.", "Hör auf!", "Mir geht es gut."], correct: 0,
                    explanation: "Nur dieser Satz endet mit einem Fragezeichen."
                },
                {
                    id: "satzk2l1_t5", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Eine Aussage endet mit …", answers: ["einem Punkt", "einem Fragezeichen", "einem Ausrufezeichen", "einem Komma"], correct: 0,
                    explanation: "Aussage und Punkt gehören zusammen."
                },
                {
                    id: "satzk2l1_t6", category: "kurs_satz_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Wie viele Sätze: Ich spiele. Du liest.", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Zwei Punkte, also zwei Sätze."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "satz_k2_l2", kurs: "satzbau_k2", order: 2, icon: "✂️",
        title: "Komma beim Aufzählen", kurz: "vor und kein Komma",
        erklaerung: {
            intro: "Wenn du mehrere Dinge aufzählst, kommt ein <b>Komma</b> dazwischen. Vor dem letzten Wort steht <b>und</b> – dort kommt <b>kein</b> Komma.",
            beispiele: ["Ich mag Äpfel, Birnen und Kirschen.",
                "Anna, Tom und Lena spielen.",
                "Rot, blau und grün sind Farben."],
            merksatz: "Komma zwischen den Wörtern, vor „und“ kein Komma."
        },
        uebung: {
            leicht: [
                {
                    id: "satzk2l2_l1", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "leicht", points: 10,
                    question: "Wie viele Kommas fehlen: Ich mag Brot Käse und Wurst.", answers: ["1", "2", "0", "3"], correct: 0,
                    explanation: "Brot, Käse und Wurst."
                },
                {
                    id: "satzk2l2_l2", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "leicht", points: 10,
                    question: "Wie viele Kommas fehlen: Tom Lena und Ali spielen.", answers: ["1", "2", "0", "3"], correct: 0,
                    explanation: "Tom, Lena und Ali."
                },
                {
                    id: "satzk2l2_l3", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "leicht", points: 10,
                    question: "Wie viele Kommas fehlen: Heft Stift Buch und Block.", answers: ["3", "2", "1", "4"], correct: 0,
                    explanation: "Heft, Stift, Buch und Block."
                },
                {
                    id: "satzk2l2_l4", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "leicht", points: 10,
                    question: "Steht vor und ein Komma?", answers: ["nein", "ja", "manchmal", "immer"], correct: 0,
                    explanation: "Vor und steht kein Komma."
                }
            ],
            mittel: [
                {
                    id: "satzk2l2_m1", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Ich mag Eis, Kuchen und Saft.", "Ich mag Eis Kuchen und Saft.", "Ich mag Eis, Kuchen, und Saft.", "Ich mag, Eis Kuchen und Saft."], correct: 0,
                    explanation: "Ein Komma dazwischen, vor und keins."
                },
                {
                    id: "satzk2l2_m2", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Mia, Tom und Ali lachen.", "Mia Tom und Ali lachen.", "Mia, Tom, und Ali lachen.", "Mia Tom, und Ali lachen."], correct: 0,
                    explanation: "Ein Komma dazwischen, vor und keins."
                },
                {
                    id: "satzk2l2_m3", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Wo fehlt das Komma: Ich kaufe Milch Eier und Mehl.", answers: ["nach Milch", "nach Eier", "vor und", "nach Mehl"], correct: 0,
                    explanation: "Milch, Eier und Mehl."
                },
                {
                    id: "satzk2l2_m4", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Wie viele Kommas fehlen: Der Hund die Katze und ich.", answers: ["1", "2", "0", "3"], correct: 0,
                    explanation: "Der Hund, die Katze und ich."
                }
            ],
            schwer: [
                {
                    id: "satzk2l2_s1", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "schwer", points: 10,
                    question: "Wie viele Kommas fehlen: Rot blau gelb und grün.", answers: ["3", "2", "1", "4"], correct: 0,
                    explanation: "Rot, blau, gelb und grün."
                },
                {
                    id: "satzk2l2_s2", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist falsch?", answers: ["Ich mag Birnen, und Äpfel.", "Ich mag Birnen und Äpfel.", "Ich mag Nüsse und Äpfel.", "Ich mag Birnen, Äpfel und Nüsse."], correct: 0,
                    explanation: "Vor und steht kein Komma."
                },
                {
                    id: "satzk2l2_s3", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "schwer", points: 10,
                    question: "Wie viele Dinge: Papier, Schere, Kleber und Stift?", answers: ["4", "3", "5", "2"], correct: 0,
                    explanation: "Papier, Schere, Kleber, Stift."
                },
                {
                    id: "satzk2l2_s4", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "schwer", points: 10,
                    question: "Zwei Dinge mit und – braucht es ein Komma?", answers: ["nein", "ja", "nur bei Nomen", "nur bei Verben"], correct: 0,
                    explanation: "Bei zwei Dingen steht nur und."
                }
            ]
        },
        test: [
                {
                    id: "satzk2l2_t1", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Wie viele Kommas fehlen: Bücher Comics und Briefe.", answers: ["1", "2", "0", "3"], correct: 0,
                    explanation: "Bücher, Comics und Briefe."
                },
                {
                    id: "satzk2l2_t2", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Rot, gelb und blau.", "Rot gelb und blau.", "Rot, gelb, und blau.", "Rot, gelb und, blau."], correct: 0,
                    explanation: "Ein Komma dazwischen, vor und keins."
                },
                {
                    id: "satzk2l2_t3", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Steht vor und ein Komma?", answers: ["nein", "ja", "immer", "meistens"], correct: 0,
                    explanation: "Vor und steht kein Komma."
                },
                {
                    id: "satzk2l2_t4", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Wie viele Kommas fehlen: Oma Opa Mama und Papa kommen.", answers: ["2", "1", "3", "0"], correct: 0,
                    explanation: "Oma, Opa, Mama und Papa."
                },
                {
                    id: "satzk2l2_t5", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Wo fehlt das Komma: Ich brauche Stift Heft und Buch.", answers: ["nach Stift", "nach Heft", "vor und", "nach Buch"], correct: 0,
                    explanation: "Stift, Heft und Buch."
                },
                {
                    id: "satzk2l2_t6", category: "kurs_satz_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Wie viele Dinge: Hund, Katze und Maus?", answers: ["3", "2", "4", "1"], correct: 0,
                    explanation: "Hund, Katze, Maus."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "satz_k2_l3", kurs: "satzbau_k2", order: 3, icon: "🔠",
        title: "Groß oder klein?", kurz: "Satzanfang und Nomen",
        erklaerung: {
            intro: "Groß schreibt man das <b>erste Wort</b> im Satz und alle <b>Nomen</b>. Alles andere bleibt <b>klein</b>.",
            beispiele: ["Der Hund bellt laut.",
                "Heute scheint die Sonne.",
                "Mia malt ein Bild."],
            merksatz: "Satzanfang groß, Nomen groß – der Rest klein."
        },
        uebung: {
            leicht: [
                {
                    id: "satzk2l3_l1", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Der Baum ist groß.", "der Baum ist groß.", "Der baum ist groß.", "der baum ist groß."], correct: 0,
                    explanation: "Satzanfang groß, Baum ist ein Nomen."
                },
                {
                    id: "satzk2l3_l2", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Die Katze schläft.", "die Katze schläft.", "Die katze schläft.", "die katze schläft."], correct: 0,
                    explanation: "Satzanfang groß, Katze ist ein Nomen."
                },
                {
                    id: "satzk2l3_l3", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Welches Wort wird groß geschrieben?", answers: ["Fenster", "gehen", "klein", "heute"], correct: 0,
                    explanation: "Fenster ist ein Nomen."
                },
                {
                    id: "satzk2l3_l4", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Welches Wort bleibt klein?", answers: ["laufen", "Hund", "Haus", "Blume"], correct: 0,
                    explanation: "Laufen ist ein Verb."
                }
            ],
            mittel: [
                {
                    id: "satzk2l3_m1", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie viele Wörter sind groß: Der Hund frisst Knochen.", answers: ["3", "2", "4", "1"], correct: 0,
                    explanation: "Der, Hund und Knochen."
                },
                {
                    id: "satzk2l3_m2", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie viele Wörter sind groß: Mia malt ein Bild.", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Mia und Bild."
                },
                {
                    id: "satzk2l3_m3", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist falsch: Die blume ist rot.", answers: ["blume", "Die", "ist", "rot"], correct: 0,
                    explanation: "Blume ist ein Nomen."
                },
                {
                    id: "satzk2l3_m4", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist falsch: der Ball rollt weg.", answers: ["der", "Ball", "rollt", "weg"], correct: 0,
                    explanation: "Der steht am Satzanfang."
                }
            ],
            schwer: [
                {
                    id: "satzk2l3_s1", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Wie viele Fehler: der hund bellt.", answers: ["2", "1", "3", "0"], correct: 0,
                    explanation: "Der und Hund müssen groß sein."
                },
                {
                    id: "satzk2l3_s2", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Wie viele Fehler: Die Sonne Scheint hell.", answers: ["1", "2", "0", "3"], correct: 0,
                    explanation: "Scheint ist ein Verb und bleibt klein."
                },
                {
                    id: "satzk2l3_s3", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist ganz richtig?", answers: ["Am Montag gehe ich schwimmen.", "am Montag gehe ich schwimmen.", "Am montag gehe ich schwimmen.", "Am Montag Gehe ich schwimmen."], correct: 0,
                    explanation: "Satzanfang groß, Montag ist ein Nomen."
                },
                {
                    id: "satzk2l3_s4", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Namen von Menschen schreibt man …", answers: ["groß", "klein", "mit ck", "mit ß"], correct: 0,
                    explanation: "Namen sind Nomen."
                }
            ]
        },
        test: [
                {
                    id: "satzk2l3_t1", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Das Buch ist dick.", "das Buch ist dick.", "Das buch ist dick.", "das buch ist dick."], correct: 0,
                    explanation: "Satzanfang groß, Buch ist ein Nomen."
                },
                {
                    id: "satzk2l3_t2", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort wird groß geschrieben?", answers: ["Schule", "lesen", "nett", "gleich"], correct: 0,
                    explanation: "Schule ist ein Nomen."
                },
                {
                    id: "satzk2l3_t3", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist falsch: Die tasche ist voll.", answers: ["tasche", "Die", "ist", "voll"], correct: 0,
                    explanation: "Tasche ist ein Nomen."
                },
                {
                    id: "satzk2l3_t4", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie viele Wörter sind groß: Der Vogel singt.", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Der und Vogel."
                },
                {
                    id: "satzk2l3_t5", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie viele Fehler: mein bruder schläft.", answers: ["2", "1", "3", "0"], correct: 0,
                    explanation: "Mein und Bruder müssen groß sein."
                },
                {
                    id: "satzk2l3_t6", category: "kurs_satz_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Nomen schreibt man …", answers: ["groß", "klein", "manchmal groß", "nie groß"], correct: 0,
                    explanation: "Nomen werden immer groß geschrieben."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "rs_k2_l1", kurs: "rechtschreib_k2", order: 1, icon: "🍬",
        title: "ck und tz", kurz: "Zucker, Katze",
        erklaerung: {
            intro: "Nach einem <b>kurzen</b> Selbstlaut schreibt man <b>ck</b> statt kk und <b>tz</b> statt zz: Zu<b>ck</b>er, Ka<b>tz</b>e. Nach <b>l, m, n, r</b> steht kein ck und kein tz: Salz, Herz, Milch.",
            beispiele: ["Zucker – nicht Zukker",
                "Katze – nicht Kazze",
                "Salz – nach l kein tz"],
            merksatz: "Kurz gesprochen? Dann ck oder tz. Nach l, m, n, r aber nicht."
        },
        uebung: {
            leicht: [
                {
                    id: "rsk2l1_l1", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Zucker", "Zukker", "Zuker", "Zucer"], correct: 0,
                    explanation: "Kurzes u, also ck."
                },
                {
                    id: "rsk2l1_l2", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Katze", "Kazze", "Katse", "Kace"], correct: 0,
                    explanation: "Kurzes a, also tz."
                },
                {
                    id: "rsk2l1_l3", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Brücke", "Brükke", "Brüke", "Brücce"], correct: 0,
                    explanation: "Kurzes ü, also ck."
                },
                {
                    id: "rsk2l1_l4", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Mütze", "Müzze", "Mütse", "Müce"], correct: 0,
                    explanation: "Kurzes ü, also tz."
                }
            ],
            mittel: [
                {
                    id: "rsk2l1_m1", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat ck?", answers: ["Decke", "Dose", "Daumen", "Dach"], correct: 0,
                    explanation: "Decke – kurzes e, also ck."
                },
                {
                    id: "rsk2l1_m2", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat tz?", answers: ["Platz", "Pilz", "Palme", "Post"], correct: 0,
                    explanation: "Platz – kurzes a, also tz."
                },
                {
                    id: "rsk2l1_m3", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "ck oder k: Ba___en (Brot)?", answers: ["ck", "k", "kk", "c"], correct: 0,
                    explanation: "Backen – kurzes a, also ck."
                },
                {
                    id: "rsk2l1_m4", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "tz oder z: Sal___ (zum Essen)?", answers: ["z", "tz", "zz", "ts"], correct: 0,
                    explanation: "Nach l steht nur z: Salz."
                }
            ],
            schwer: [
                {
                    id: "rsk2l1_s1", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist falsch geschrieben?", answers: ["Kazze", "Katze", "Platz", "Mütze"], correct: 0,
                    explanation: "Nach kurzem Selbstlaut steht tz."
                },
                {
                    id: "rsk2l1_s2", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist falsch geschrieben?", answers: ["Zukker", "Zucker", "Decke", "Brücke"], correct: 0,
                    explanation: "Nach kurzem Selbstlaut steht ck."
                },
                {
                    id: "rsk2l1_s3", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Warum schreibt man Katze mit tz?", answers: ["kurzer Selbstlaut", "langer Selbstlaut", "es ist ein Nomen", "es ist ein Verb"], correct: 0,
                    explanation: "Das a ist kurz."
                },
                {
                    id: "rsk2l1_s4", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Nach l, m, n, r steht …", answers: ["kein ck", "immer ck", "immer tz", "kein z"], correct: 0,
                    explanation: "Zum Beispiel Salz und Herz."
                }
            ]
        },
        test: [
                {
                    id: "rsk2l1_t1", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Decke", "Dekke", "Deke", "Decce"], correct: 0,
                    explanation: "Kurzes e, also ck."
                },
                {
                    id: "rsk2l1_t2", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Platz", "Plazz", "Plats", "Plaz"], correct: 0,
                    explanation: "Kurzes a, also tz."
                },
                {
                    id: "rsk2l1_t3", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat ck?", answers: ["Zucker", "Zahl", "Zelt", "Zaun"], correct: 0,
                    explanation: "Zucker – kurzes u, also ck."
                },
                {
                    id: "rsk2l1_t4", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist falsch?", answers: ["Müzze", "Mütze", "Katze", "Platz"], correct: 0,
                    explanation: "Nach kurzem Selbstlaut steht tz."
                },
                {
                    id: "rsk2l1_t5", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "ck oder k: Ro___ (Kleid)?", answers: ["ck", "k", "kk", "c"], correct: 0,
                    explanation: "Rock – kurzes o, also ck."
                },
                {
                    id: "rsk2l1_t6", category: "kurs_rs_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Nach einem kurzen Selbstlaut schreibt man …", answers: ["ck oder tz", "kk oder zz", "k oder z", "c oder s"], correct: 0,
                    explanation: "Zum Beispiel Decke und Mütze."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "rs_k2_l2", kurs: "rechtschreib_k2", order: 2, icon: "🔁",
        title: "Doppelte Mitlaute", kurz: "Sonne, Ball, Mutter",
        erklaerung: {
            intro: "Hörst du einen <b>kurzen</b> Selbstlaut, wird der Mitlaut danach oft <b>doppelt</b> geschrieben: So<b>nn</b>e, Ba<b>ll</b>, Mu<b>tt</b>er.",
            beispiele: ["Sonne – zwei n",
                "Ball – zwei l",
                "Mutter – zwei t"],
            merksatz: "Kurz gesprochen – Mitlaut doppelt."
        },
        uebung: {
            leicht: [
                {
                    id: "rsk2l2_l1", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Sonne", "Sone", "Sonnne", "Soonne"], correct: 0,
                    explanation: "Kurzes o, also zwei n."
                },
                {
                    id: "rsk2l2_l2", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Ball", "Bal", "Balll", "Baall"], correct: 0,
                    explanation: "Kurzes a, also zwei l."
                },
                {
                    id: "rsk2l2_l3", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Mutter", "Muter", "Muttter", "Muuter"], correct: 0,
                    explanation: "Kurzes u, also zwei t."
                },
                {
                    id: "rsk2l2_l4", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Wasser", "Waser", "Wassser", "Waaser"], correct: 0,
                    explanation: "Kurzes a, also zwei s."
                }
            ],
            mittel: [
                {
                    id: "rsk2l2_m1", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat zwei l?", answers: ["Halle", "Hase", "Haus", "Hand"], correct: 0,
                    explanation: "Halle – kurzes a, also zwei l."
                },
                {
                    id: "rsk2l2_m2", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat zwei m?", answers: ["Hammer", "Hase", "Hafen", "Hügel"], correct: 0,
                    explanation: "Hammer – kurzes a, also zwei m."
                },
                {
                    id: "rsk2l2_m3", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie viele n hat Sonne?", answers: ["2", "1", "3", "0"], correct: 0,
                    explanation: "So-nn-e: zwei n."
                },
                {
                    id: "rsk2l2_m4", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat zwei t?", answers: ["Butter", "Bube", "Buch", "Busch"], correct: 0,
                    explanation: "Butter – kurzes u, also zwei t."
                }
            ],
            schwer: [
                {
                    id: "rsk2l2_s1", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist falsch?", answers: ["Sone", "Sonne", "Butter", "Wasser"], correct: 0,
                    explanation: "Kurzes o, also zwei n."
                },
                {
                    id: "rsk2l2_s2", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist falsch?", answers: ["Bal", "Ball", "Halle", "Hammer"], correct: 0,
                    explanation: "Kurzes a, also zwei l."
                },
                {
                    id: "rsk2l2_s3", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Warum hat Sonne zwei n?", answers: ["kurzes o", "langes o", "es ist ein Nomen", "es ist ein Verb"], correct: 0,
                    explanation: "Das o wird kurz gesprochen."
                },
                {
                    id: "rsk2l2_s4", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Wie viele t hat Mutter?", answers: ["2", "1", "3", "0"], correct: 0,
                    explanation: "Mu-tt-er: zwei t."
                }
            ]
        },
        test: [
                {
                    id: "rsk2l2_t1", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Wetter", "Weter", "Wettter", "Weeter"], correct: 0,
                    explanation: "Kurzes e, also zwei t."
                },
                {
                    id: "rsk2l2_t2", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat zwei s?", answers: ["Tasse", "Tage", "Tante", "Tanz"], correct: 0,
                    explanation: "Tasse – kurzes a, also zwei s."
                },
                {
                    id: "rsk2l2_t3", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie viele l hat Ball?", answers: ["2", "1", "3", "0"], correct: 0,
                    explanation: "Ba-ll: zwei l."
                },
                {
                    id: "rsk2l2_t4", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist falsch?", answers: ["Muter", "Mutter", "Butter", "Wetter"], correct: 0,
                    explanation: "Kurzes u, also zwei t."
                },
                {
                    id: "rsk2l2_t5", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Treppe", "Trepe", "Trepppe", "Treeppe"], correct: 0,
                    explanation: "Kurzes e, also zwei p."
                },
                {
                    id: "rsk2l2_t6", category: "kurs_rs_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Nach einem kurzen Selbstlaut wird der Mitlaut …", answers: ["doppelt", "einfach", "weggelassen", "groß"], correct: 0,
                    explanation: "Zum Beispiel Sonne und Ball."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "rs_k2_l3", kurs: "rechtschreib_k2", order: 3, icon: "🐝",
        title: "Wörter mit ie", kurz: "Wiese, Biene, spielen",
        erklaerung: {
            intro: "Ein <b>langes i</b> schreibt man meist <b>ie</b>: W<b>ie</b>se, B<b>ie</b>ne, sp<b>ie</b>len. Ein kurzes i bleibt einfach <b>i</b>: K<b>i</b>nd, W<b>i</b>nter.",
            beispiele: ["Wiese – langes i",
                "spielen – langes i",
                "Kind – kurzes i, nur i"],
            merksatz: "Langes i – meistens ie. Kurzes i – nur i."
        },
        uebung: {
            leicht: [
                {
                    id: "rsk2l3_l1", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Wiese", "Wise", "Wiiese", "Wiehse"], correct: 0,
                    explanation: "Langes i, also ie."
                },
                {
                    id: "rsk2l3_l2", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["spielen", "spilen", "spiielen", "spiehlen"], correct: 0,
                    explanation: "Langes i, also ie."
                },
                {
                    id: "rsk2l3_l3", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Brief", "Brif", "Briief", "Briehf"], correct: 0,
                    explanation: "Langes i, also ie."
                },
                {
                    id: "rsk2l3_l4", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Biene", "Bine", "Biiene", "Biehne"], correct: 0,
                    explanation: "Langes i, also ie."
                }
            ],
            mittel: [
                {
                    id: "rsk2l3_m1", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat ie?", answers: ["Ziege", "Zimmer", "Zirkus", "Zinn"], correct: 0,
                    explanation: "Ziege – das i ist lang."
                },
                {
                    id: "rsk2l3_m2", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat ie?", answers: ["Riese", "Ring", "Rind", "Risse"], correct: 0,
                    explanation: "Riese – das i ist lang."
                },
                {
                    id: "rsk2l3_m3", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Hörst du bei Wiese ein …", answers: ["langes i", "kurzes i", "langes e", "kurzes e"], correct: 0,
                    explanation: "Darum schreibt man ie."
                },
                {
                    id: "rsk2l3_m4", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat KEIN ie?", answers: ["Kind", "Liebe", "Wiese", "Biene"], correct: 0,
                    explanation: "Bei Kind ist das i kurz."
                }
            ],
            schwer: [
                {
                    id: "rsk2l3_s1", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist falsch?", answers: ["Bine", "Biene", "Wiese", "Riese"], correct: 0,
                    explanation: "Langes i, also ie."
                },
                {
                    id: "rsk2l3_s2", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist falsch?", answers: ["spilen", "spielen", "fliegen", "ziehen"], correct: 0,
                    explanation: "Langes i, also ie."
                },
                {
                    id: "rsk2l3_s3", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Ein langes i schreibt man meist …", answers: ["ie", "i", "ih", "ieh"], correct: 0,
                    explanation: "Zum Beispiel Wiese und Biene."
                },
                {
                    id: "rsk2l3_s4", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort hat KEIN ie?", answers: ["Winter", "Wiese", "Biene", "Ziege"], correct: 0,
                    explanation: "Bei Winter ist das i kurz."
                }
            ]
        },
        test: [
                {
                    id: "rsk2l3_t1", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["fliegen", "fligen", "fliiegen", "fliehgen"], correct: 0,
                    explanation: "Langes i, also ie."
                },
                {
                    id: "rsk2l3_t2", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat ie?", answers: ["Liebe", "Licht", "Linde", "Lippe"], correct: 0,
                    explanation: "Liebe – das i ist lang."
                },
                {
                    id: "rsk2l3_t3", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist falsch?", answers: ["Wise", "Wiese", "Brief", "Ziege"], correct: 0,
                    explanation: "Langes i, also ie."
                },
                {
                    id: "rsk2l3_t4", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Hörst du bei Kind ein …", answers: ["kurzes i", "langes i", "langes e", "kurzes e"], correct: 0,
                    explanation: "Darum steht nur ein i."
                },
                {
                    id: "rsk2l3_t5", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Riese", "Rise", "Riiese", "Riehse"], correct: 0,
                    explanation: "Langes i, also ie."
                },
                {
                    id: "rsk2l3_t6", category: "kurs_rs_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat KEIN ie?", answers: ["Finger", "Spiegel", "Fliege", "Wiese"], correct: 0,
                    explanation: "Bei Finger ist das i kurz."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "uml_k2_l1", kurs: "umlaute_k2", order: 1, icon: "🐻",
        title: "ä, ö und ü hören", kurz: "Bär, Löwe, Tür",
        erklaerung: {
            intro: "<b>ä, ö, ü</b> sind Umlaute. Sie haben zwei Punkte und klingen anders als a, o, u: B<b>ä</b>r, L<b>ö</b>we, T<b>ü</b>r.",
            beispiele: ["Bär – mit ä",
                "Löwe – mit ö",
                "Tür – mit ü"],
            merksatz: "Umlaute haben zwei Punkte: ä, ö, ü."
        },
        uebung: {
            leicht: [
                {
                    id: "umlk2l1_l1", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Welchen Umlaut hörst du in Bär?", answers: ["ä", "ö", "ü", "a"], correct: 0,
                    explanation: "Bär wird mit ä geschrieben."
                },
                {
                    id: "umlk2l1_l2", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Welchen Umlaut hörst du in Löwe?", answers: ["ö", "ä", "ü", "o"], correct: 0,
                    explanation: "Löwe wird mit ö geschrieben."
                },
                {
                    id: "umlk2l1_l3", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Welchen Umlaut hörst du in Tür?", answers: ["ü", "ä", "ö", "u"], correct: 0,
                    explanation: "Tür wird mit ü geschrieben."
                },
                {
                    id: "umlk2l1_l4", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Wie viele Punkte hat ein Umlaut?", answers: ["2", "1", "3", "0"], correct: 0,
                    explanation: "ä, ö und ü haben zwei Punkte."
                }
            ],
            mittel: [
                {
                    id: "umlk2l1_m1", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat einen Umlaut?", answers: ["Käse", "Kanne", "Korb", "Kuchen"], correct: 0,
                    explanation: "Käse wird mit ä geschrieben."
                },
                {
                    id: "umlk2l1_m2", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat einen Umlaut?", answers: ["Öl", "Ofen", "Obst", "Oma"], correct: 0,
                    explanation: "Öl wird mit ö geschrieben."
                },
                {
                    id: "umlk2l1_m3", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat KEINEN Umlaut?", answers: ["Hand", "Hände", "Füße", "Bücher"], correct: 0,
                    explanation: "Hand hat ein einfaches a."
                },
                {
                    id: "umlk2l1_m4", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welcher Umlaut passt: B___cher?", answers: ["ü", "u", "ö", "ä"], correct: 0,
                    explanation: "Bücher wird mit ü geschrieben."
                }
            ],
            schwer: [
                {
                    id: "umlk2l1_s1", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welcher Buchstabe passt: M___tze?", answers: ["ü", "u", "ö", "ä"], correct: 0,
                    explanation: "Mütze wird mit ü geschrieben."
                },
                {
                    id: "umlk2l1_s2", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist falsch?", answers: ["Lowe", "Löwe", "Bär", "Tür"], correct: 0,
                    explanation: "Löwe braucht ein ö."
                },
                {
                    id: "umlk2l1_s3", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Wie viele Umlaute hat Bücher?", answers: ["1", "2", "0", "3"], correct: 0,
                    explanation: "Nur das ü."
                },
                {
                    id: "umlk2l1_s4", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort hat KEINEN Umlaut?", answers: ["Baum", "Bäume", "Bücher", "Böden"], correct: 0,
                    explanation: "Baum hat au, keinen Umlaut."
                }
            ]
        },
        test: [
                {
                    id: "umlk2l1_t1", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welchen Umlaut hörst du in Kühe?", answers: ["ü", "ä", "ö", "u"], correct: 0,
                    explanation: "Kühe wird mit ü geschrieben."
                },
                {
                    id: "umlk2l1_t2", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat einen Umlaut?", answers: ["Ärmel", "Arm", "Auto", "Apfel"], correct: 0,
                    explanation: "Ärmel wird mit ä geschrieben."
                },
                {
                    id: "umlk2l1_t3", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welcher Buchstabe passt: H___nde (viele Hand)?", answers: ["ä", "a", "ö", "ü"], correct: 0,
                    explanation: "Hände wird mit ä geschrieben."
                },
                {
                    id: "umlk2l1_t4", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist falsch?", answers: ["Tur", "Tür", "Bär", "Löwe"], correct: 0,
                    explanation: "Tür braucht ein ü."
                },
                {
                    id: "umlk2l1_t5", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat KEINEN Umlaut?", answers: ["Nase", "Nähe", "Nüsse", "Röcke"], correct: 0,
                    explanation: "Nase hat ein einfaches a."
                },
                {
                    id: "umlk2l1_t6", category: "kurs_uml_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Umlaute sind …", answers: ["ä, ö, ü", "a, o, u", "b, d, g", "e, i, o"], correct: 0,
                    explanation: "Nur ä, ö und ü haben zwei Punkte."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "uml_k2_l2", kurs: "umlaute_k2", order: 2, icon: "🤚",
        title: "a oder ä?", kurz: "Hände kommt von Hand",
        erklaerung: {
            intro: "Wörter mit <b>ä</b> haben oft ein verwandtes Wort mit <b>a</b>: H<b>ä</b>nde – H<b>a</b>nd, B<b>ä</b>cker – b<b>a</b>cken, k<b>ä</b>lter – k<b>a</b>lt.",
            beispiele: ["Hände – Hand",
                "Bäcker – backen",
                "kälter – kalt"],
            merksatz: "Finde ein verwandtes Wort mit a – dann schreibt man ä."
        },
        uebung: {
            leicht: [
                {
                    id: "umlk2l2_l1", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Von welchem Wort kommt Hände?", answers: ["Hand", "Hund", "Held", "Haut"], correct: 0,
                    explanation: "Hand – darum ä."
                },
                {
                    id: "umlk2l2_l2", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Von welchem Wort kommt Bäcker?", answers: ["backen", "bauen", "beten", "bieten"], correct: 0,
                    explanation: "Backen – darum ä."
                },
                {
                    id: "umlk2l2_l3", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Von welchem Wort kommt kälter?", answers: ["kalt", "klar", "kurz", "krumm"], correct: 0,
                    explanation: "Kalt – darum ä."
                },
                {
                    id: "umlk2l2_l4", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Von welchem Wort kommt Gärtner?", answers: ["Garten", "Gurke", "Gabel", "Geige"], correct: 0,
                    explanation: "Garten – darum ä."
                }
            ],
            mittel: [
                {
                    id: "umlk2l2_m1", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "a oder ä: Z___hne (von Zahn)?", answers: ["ä", "a", "e", "ö"], correct: 0,
                    explanation: "Zahn wird zu Zähne."
                },
                {
                    id: "umlk2l2_m2", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "a oder ä: W___lder (von Wald)?", answers: ["ä", "a", "e", "ö"], correct: 0,
                    explanation: "Wald wird zu Wälder."
                },
                {
                    id: "umlk2l2_m3", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Mehrzahl von Hand?", answers: ["Hände", "Handen", "Hands", "Händer"], correct: 0,
                    explanation: "Eine Hand, viele Hände."
                },
                {
                    id: "umlk2l2_m4", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Mehrzahl von Ball?", answers: ["Bälle", "Ballen", "Balls", "Bälls"], correct: 0,
                    explanation: "Ein Ball, viele Bälle."
                }
            ],
            schwer: [
                {
                    id: "umlk2l2_s1", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort hilft bei Männer?", answers: ["Mann", "Mond", "Mund", "Mauer"], correct: 0,
                    explanation: "Mann – darum ä."
                },
                {
                    id: "umlk2l2_s2", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "a oder ä: st___rker (von stark)?", answers: ["ä", "a", "e", "ö"], correct: 0,
                    explanation: "Stark wird zu stärker."
                },
                {
                    id: "umlk2l2_s3", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist falsch?", answers: ["Hende", "Hände", "Bälle", "Zähne"], correct: 0,
                    explanation: "Hand wird zu Hände."
                },
                {
                    id: "umlk2l2_s4", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Warum schreibt man Gärtner mit ä?", answers: ["von Garten", "von Gurke", "es ist ein Nomen", "es ist Mehrzahl"], correct: 0,
                    explanation: "Garten hat ein a."
                }
            ]
        },
        test: [
                {
                    id: "umlk2l2_t1", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Von welchem Wort kommt Zähne?", answers: ["Zahn", "Zaun", "Zelt", "Zug"], correct: 0,
                    explanation: "Zahn – darum ä."
                },
                {
                    id: "umlk2l2_t2", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "a oder ä: B___lle (von Ball)?", answers: ["ä", "a", "e", "ö"], correct: 0,
                    explanation: "Ball wird zu Bälle."
                },
                {
                    id: "umlk2l2_t3", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Mehrzahl von Wald?", answers: ["Wälder", "Walder", "Wälde", "Waldes"], correct: 0,
                    explanation: "Ein Wald, viele Wälder."
                },
                {
                    id: "umlk2l2_t4", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort hilft bei kälter?", answers: ["kalt", "klug", "kurz", "klein"], correct: 0,
                    explanation: "Kalt – darum ä."
                },
                {
                    id: "umlk2l2_t5", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist falsch?", answers: ["Belle", "Bälle", "Zähne", "Wälder"], correct: 0,
                    explanation: "Ball wird zu Bälle."
                },
                {
                    id: "umlk2l2_t6", category: "kurs_uml_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Bei ä hilft ein verwandtes Wort mit …", answers: ["a", "e", "i", "o"], correct: 0,
                    explanation: "Zum Beispiel Hand und Hände."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "uml_k2_l3", kurs: "umlaute_k2", order: 3, icon: "🏠",
        title: "äu oder eu?", kurz: "Häuser kommt von Haus",
        erklaerung: {
            intro: "<b>äu</b> und <b>eu</b> klingen gleich. Bei <b>äu</b> gibt es ein verwandtes Wort mit <b>au</b>: H<b>äu</b>ser – H<b>au</b>s. Gibt es keins, schreibt man <b>eu</b>: h<b>eu</b>te, Fr<b>eu</b>nd.",
            beispiele: ["Häuser – Haus",
                "Bäume – Baum",
                "Freund – kein au, also eu"],
            merksatz: "Gibt es ein Wort mit au? Dann äu. Sonst eu."
        },
        uebung: {
            leicht: [
                {
                    id: "umlk2l3_l1", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Von welchem Wort kommt Häuser?", answers: ["Haus", "Hose", "Heu", "Hut"], correct: 0,
                    explanation: "Haus – darum äu."
                },
                {
                    id: "umlk2l3_l2", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Von welchem Wort kommt Bäume?", answers: ["Baum", "Beule", "Besen", "Bein"], correct: 0,
                    explanation: "Baum – darum äu."
                },
                {
                    id: "umlk2l3_l3", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Von welchem Wort kommt Mäuse?", answers: ["Maus", "Moos", "Messer", "Mond"], correct: 0,
                    explanation: "Maus – darum äu."
                },
                {
                    id: "umlk2l3_l4", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "leicht", points: 10,
                    question: "Von welchem Wort kommt Träume?", answers: ["Traum", "Trommel", "Treppe", "Tropfen"], correct: 0,
                    explanation: "Traum – darum äu."
                }
            ],
            mittel: [
                {
                    id: "umlk2l3_m1", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "äu oder eu: H___ser?", answers: ["äu", "eu", "oi", "ai"], correct: 0,
                    explanation: "Häuser kommt von Haus."
                },
                {
                    id: "umlk2l3_m2", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "äu oder eu: h___te (der Tag)?", answers: ["eu", "äu", "oi", "ai"], correct: 0,
                    explanation: "Es gibt kein Wort mit au dazu."
                },
                {
                    id: "umlk2l3_m3", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "äu oder eu: Fr___nd?", answers: ["eu", "äu", "oi", "ai"], correct: 0,
                    explanation: "Es gibt kein Wort mit au dazu."
                },
                {
                    id: "umlk2l3_m4", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "äu oder eu: B___me?", answers: ["äu", "eu", "oi", "ai"], correct: 0,
                    explanation: "Bäume kommt von Baum."
                }
            ],
            schwer: [
                {
                    id: "umlk2l3_s1", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist falsch?", answers: ["Heuser", "Häuser", "heute", "Freund"], correct: 0,
                    explanation: "Häuser kommt von Haus."
                },
                {
                    id: "umlk2l3_s2", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist falsch?", answers: ["Meuse", "Mäuse", "Bäume", "Freund"], correct: 0,
                    explanation: "Mäuse kommt von Maus."
                },
                {
                    id: "umlk2l3_s3", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Warum schreibt man Mäuse mit äu?", answers: ["von Maus", "von Moos", "es ist ein Nomen", "es ist Mehrzahl"], correct: 0,
                    explanation: "Maus hat au."
                },
                {
                    id: "umlk2l3_s4", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "schwer", points: 10,
                    question: "Gibt es kein Wort mit au, schreibt man …", answers: ["eu", "äu", "au", "ou"], correct: 0,
                    explanation: "Zum Beispiel heute und Freund."
                }
            ]
        },
        test: [
                {
                    id: "umlk2l3_t1", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Von welchem Wort kommt Läufer?", answers: ["laufen", "leuchten", "lesen", "legen"], correct: 0,
                    explanation: "Laufen – darum äu."
                },
                {
                    id: "umlk2l3_t2", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "äu oder eu: M___se (die Tiere)?", answers: ["äu", "eu", "oi", "ai"], correct: 0,
                    explanation: "Mäuse kommt von Maus."
                },
                {
                    id: "umlk2l3_t3", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "äu oder eu: L___te (die Menschen)?", answers: ["eu", "äu", "oi", "ai"], correct: 0,
                    explanation: "Es gibt kein Wort mit au dazu."
                },
                {
                    id: "umlk2l3_t4", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist falsch?", answers: ["Treume", "Träume", "Häuser", "heute"], correct: 0,
                    explanation: "Träume kommt von Traum."
                },
                {
                    id: "umlk2l3_t5", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Von welchem Wort kommt Bäume?", answers: ["Baum", "Bein", "Besen", "Beule"], correct: 0,
                    explanation: "Baum – darum äu."
                },
                {
                    id: "umlk2l3_t6", category: "kurs_uml_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "rechtschreibung", difficulty: "mittel", points: 10,
                    question: "Bei äu gibt es ein verwandtes Wort mit …", answers: ["au", "eu", "ei", "ai"], correct: 0,
                    explanation: "Zum Beispiel Haus und Häuser."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "les_k2_l1", kurs: "lesen_k2", order: 1, icon: "🔍",
        title: "Wer? Was? Wo?", kurz: "Sätze genau lesen",
        erklaerung: {
            intro: "Beim Lesen musst du genau hinschauen. Frage dich: <b>Wer</b> macht etwas? <b>Was</b> macht er? <b>Wo</b> oder <b>wann</b>?",
            beispiele: ["Der Hund läuft im Garten.",
                "Wer? Der Hund. Was? Er läuft.",
                "Wo? Im Garten."],
            merksatz: "Wer? Was? Wo? – dann hast du den Satz verstanden."
        },
        uebung: {
            leicht: [
                {
                    id: "lesk2l1_l1", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "leicht", points: 10,
                    question: "Wer läuft: Der Hund läuft im Garten.", answers: ["der Hund", "der Garten", "niemand", "die Katze"], correct: 0,
                    explanation: "Der Hund läuft."
                },
                {
                    id: "lesk2l1_l2", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "leicht", points: 10,
                    question: "Wo läuft er: Der Hund läuft im Garten.", answers: ["im Garten", "im Haus", "im Wald", "am See"], correct: 0,
                    explanation: "Im Garten."
                },
                {
                    id: "lesk2l1_l3", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "leicht", points: 10,
                    question: "Was macht Mia: Mia liest ein Buch.", answers: ["sie liest", "sie malt", "sie singt", "sie läuft"], correct: 0,
                    explanation: "Mia liest."
                },
                {
                    id: "lesk2l1_l4", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "leicht", points: 10,
                    question: "Wer backt: Oma backt einen Kuchen.", answers: ["Oma", "Opa", "Mia", "Tom"], correct: 0,
                    explanation: "Oma backt."
                }
            ],
            mittel: [
                {
                    id: "lesk2l1_m1", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Wann: Am Montag gehe ich schwimmen.", answers: ["am Montag", "am Dienstag", "am Sonntag", "am Abend"], correct: 0,
                    explanation: "Am Montag."
                },
                {
                    id: "lesk2l1_m2", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Wie viele Kinder: Tom und Lena spielen.", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Tom und Lena."
                },
                {
                    id: "lesk2l1_m3", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Was trinkt Ali: Ali trinkt kalte Milch.", answers: ["kalte Milch", "warmen Tee", "Wasser", "Saft"], correct: 0,
                    explanation: "Kalte Milch."
                },
                {
                    id: "lesk2l1_m4", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Wo wohnt die Maus: Die Maus wohnt im Loch.", answers: ["im Loch", "im Nest", "im Korb", "im Baum"], correct: 0,
                    explanation: "Im Loch."
                }
            ],
            schwer: [
                {
                    id: "lesk2l1_s1", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "schwer", points: 10,
                    question: "Der Hund bellt, weil es klingelt. Warum bellt er?", answers: ["es klingelt", "er hat Hunger", "er ist müde", "er spielt"], correct: 0,
                    explanation: "Nach weil steht der Grund."
                },
                {
                    id: "lesk2l1_s2", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "schwer", points: 10,
                    question: "Mia nimmt den Schirm, denn es regnet. Warum?", answers: ["es regnet", "es schneit", "es ist heiß", "sie friert"], correct: 0,
                    explanation: "Nach denn steht der Grund."
                },
                {
                    id: "lesk2l1_s3", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "schwer", points: 10,
                    question: "Tom isst nichts. Er ist satt. Warum isst er nichts?", answers: ["er ist satt", "er mag es nicht", "er schläft", "er hat Durst"], correct: 0,
                    explanation: "Der zweite Satz sagt den Grund."
                },
                {
                    id: "lesk2l1_s4", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "schwer", points: 10,
                    question: "Lena lacht laut. Wie lacht sie?", answers: ["laut", "leise", "gar nicht", "traurig"], correct: 0,
                    explanation: "Laut sagt, wie sie lacht."
                }
            ]
        },
        test: [
                {
                    id: "lesk2l1_t1", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Wer schläft: Die Katze schläft im Korb.", answers: ["die Katze", "der Korb", "der Hund", "die Maus"], correct: 0,
                    explanation: "Die Katze schläft."
                },
                {
                    id: "lesk2l1_t2", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Wo schläft sie: Die Katze schläft im Korb.", answers: ["im Korb", "im Bett", "im Garten", "im Haus"], correct: 0,
                    explanation: "Im Korb."
                },
                {
                    id: "lesk2l1_t3", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Wann: Heute Abend kommt Oma.", answers: ["heute Abend", "morgen früh", "am Mittag", "nie"], correct: 0,
                    explanation: "Heute Abend."
                },
                {
                    id: "lesk2l1_t4", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Ali zieht die Jacke an, weil es kalt ist. Warum?", answers: ["es ist kalt", "es ist warm", "es regnet", "er friert nicht"], correct: 0,
                    explanation: "Nach weil steht der Grund."
                },
                {
                    id: "lesk2l1_t5", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Was macht Papa: Papa wäscht das Auto.", answers: ["er wäscht", "er fährt", "er kauft", "er malt"], correct: 0,
                    explanation: "Papa wäscht."
                },
                {
                    id: "lesk2l1_t6", category: "kurs_les_k2_l1", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Wie viele Tiere: Hund, Katze und Maus.", answers: ["3", "2", "4", "1"], correct: 0,
                    explanation: "Hund, Katze, Maus."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "les_k2_l2", kurs: "lesen_k2", order: 2, icon: "📄",
        title: "Kleine Texte lesen", kurz: "Antwort steht im Text",
        erklaerung: {
            intro: "In einem <b>Text</b> stehen mehrere Sätze. Lies langsam. Die <b>Antwort steht im Text</b> – lies die Frage danach noch einmal.",
            beispiele: ["Tom hat einen Hund. Er heißt Rex.",
                "Frage: Wie heißt der Hund?",
                "Antwort: Rex – das steht im Text."],
            merksatz: "Zuerst lesen, dann die Frage noch einmal lesen."
        },
        uebung: {
            leicht: [
                {
                    id: "lesk2l2_l1", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "leicht", points: 10,
                    question: "Tom hat einen Hund. Er heißt Rex. Wie heißt der Hund?", answers: ["Rex", "Tom", "Bello", "Max"], correct: 0,
                    explanation: "Das steht im zweiten Satz."
                },
                {
                    id: "lesk2l2_l2", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "leicht", points: 10,
                    question: "Mia hat eine Katze. Sie ist schwarz. Welche Farbe hat sie?", answers: ["schwarz", "weiß", "grau", "braun"], correct: 0,
                    explanation: "Das steht im zweiten Satz."
                },
                {
                    id: "lesk2l2_l3", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "leicht", points: 10,
                    question: "Ali spielt Fußball. Er spielt im Park. Wo spielt Ali?", answers: ["im Park", "im Garten", "in der Halle", "zu Hause"], correct: 0,
                    explanation: "Das steht im zweiten Satz."
                },
                {
                    id: "lesk2l2_l4", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "leicht", points: 10,
                    question: "Lena isst einen Apfel. Er ist grün. Wie ist der Apfel?", answers: ["grün", "rot", "gelb", "braun"], correct: 0,
                    explanation: "Das steht im zweiten Satz."
                }
            ],
            mittel: [
                {
                    id: "lesk2l2_m1", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Oma backt Kuchen. Er ist noch heiß. Wie ist der Kuchen?", answers: ["heiß", "kalt", "süß", "trocken"], correct: 0,
                    explanation: "Das steht im zweiten Satz."
                },
                {
                    id: "lesk2l2_m2", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Es regnet. Tom bleibt zu Hause. Warum bleibt er da?", answers: ["es regnet", "es schneit", "er ist krank", "er ist müde"], correct: 0,
                    explanation: "Der erste Satz sagt den Grund."
                },
                {
                    id: "lesk2l2_m3", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Mia hat zwei Katzen und einen Hund. Wie viele Tiere?", answers: ["3", "2", "1", "4"], correct: 0,
                    explanation: "Zwei Katzen und ein Hund."
                },
                {
                    id: "lesk2l2_m4", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Der Bus kommt um 8 Uhr. Ali wartet. Wann kommt der Bus?", answers: ["um 8 Uhr", "um 9 Uhr", "um 7 Uhr", "nie"], correct: 0,
                    explanation: "Das steht im ersten Satz."
                }
            ],
            schwer: [
                {
                    id: "lesk2l2_s1", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "schwer", points: 10,
                    question: "Lena packt Badehose und Handtuch ein. Wohin geht sie wohl?", answers: ["ins Schwimmbad", "in die Schule", "zum Arzt", "ins Bett"], correct: 0,
                    explanation: "Badehose braucht man zum Schwimmen."
                },
                {
                    id: "lesk2l2_s2", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "schwer", points: 10,
                    question: "Tom nimmt Schal, Mütze und Jacke. Wie ist das Wetter wohl?", answers: ["kalt", "heiß", "warm", "sonnig"], correct: 0,
                    explanation: "Schal und Mütze trägt man bei Kälte."
                },
                {
                    id: "lesk2l2_s3", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "schwer", points: 10,
                    question: "Mia hat drei Äpfel. Sie isst einen. Wie viele bleiben?", answers: ["2", "3", "1", "4"], correct: 0,
                    explanation: "Drei weniger einer sind zwei."
                },
                {
                    id: "lesk2l2_s4", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "schwer", points: 10,
                    question: "Ali hat Hunger. Er geht in die Küche. Was will er wohl?", answers: ["etwas essen", "schlafen", "spielen", "lesen"], correct: 0,
                    explanation: "Bei Hunger geht man essen."
                }
            ]
        },
        test: [
                {
                    id: "lesk2l2_t1", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Opa liest Zeitung. Er sitzt im Sessel. Wo sitzt Opa?", answers: ["im Sessel", "im Bett", "am Tisch", "im Garten"], correct: 0,
                    explanation: "Das steht im zweiten Satz."
                },
                {
                    id: "lesk2l2_t2", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Die Blume ist gelb. Sie steht am Fenster. Wo steht sie?", answers: ["am Fenster", "im Garten", "auf dem Tisch", "in der Vase"], correct: 0,
                    explanation: "Das steht im zweiten Satz."
                },
                {
                    id: "lesk2l2_t3", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Tom hat vier Murmeln. Er verliert eine. Wie viele hat er?", answers: ["3", "4", "2", "5"], correct: 0,
                    explanation: "Vier weniger eine sind drei."
                },
                {
                    id: "lesk2l2_t4", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Lena nimmt den Regenschirm mit. Wie ist das Wetter wohl?", answers: ["es regnet", "es ist heiß", "es schneit", "es ist trocken"], correct: 0,
                    explanation: "Einen Schirm braucht man bei Regen."
                },
                {
                    id: "lesk2l2_t5", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Mia liest ein Buch. Das Buch ist dick. Wie ist das Buch?", answers: ["dick", "dünn", "klein", "neu"], correct: 0,
                    explanation: "Das steht im zweiten Satz."
                },
                {
                    id: "lesk2l2_t6", category: "kurs_les_k2_l2", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Ali packt Stifte und Hefte ein. Wohin geht er wohl?", answers: ["in die Schule", "ins Schwimmbad", "zum Arzt", "ins Kino"], correct: 0,
                    explanation: "Stifte und Hefte braucht man in der Schule."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "les_k2_l3", kurs: "lesen_k2", order: 3, icon: "1️⃣",
        title: "Zuerst, dann, zuletzt", kurz: "Reihenfolge erkennen",
        erklaerung: {
            intro: "In einer Geschichte passiert etwas <b>nacheinander</b>. Achte auf die Wörter <b>zuerst</b>, <b>dann</b> und <b>zuletzt</b>.",
            beispiele: ["Zuerst wacht Tom auf.",
                "Dann frühstückt er.",
                "Zuletzt geht er zur Schule."],
            merksatz: "Zuerst – dann – zuletzt: so läuft die Geschichte."
        },
        uebung: {
            leicht: [
                {
                    id: "lesk2l3_l1", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "leicht", points: 10,
                    question: "Zuerst wacht Tom auf. Dann isst er. Was kommt zuerst?", answers: ["aufwachen", "essen", "schlafen", "spielen"], correct: 0,
                    explanation: "Nach zuerst steht der Anfang."
                },
                {
                    id: "lesk2l3_l2", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "leicht", points: 10,
                    question: "Zuerst Schuhe an. Dann geht Mia raus. Was ist zuletzt?", answers: ["rausgehen", "Schuhe anziehen", "schlafen", "essen"], correct: 0,
                    explanation: "Nach dann kommt das Letzte."
                },
                {
                    id: "lesk2l3_l3", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "leicht", points: 10,
                    question: "Was macht man zuerst beim Zähneputzen?", answers: ["Zahnpasta drauf", "putzen", "ausspülen", "wegstellen"], correct: 0,
                    explanation: "Erst die Zahnpasta."
                },
                {
                    id: "lesk2l3_l4", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "leicht", points: 10,
                    question: "Was macht man zuletzt beim Essen?", answers: ["abräumen", "Tisch decken", "kochen", "einkaufen"], correct: 0,
                    explanation: "Am Ende wird abgeräumt."
                }
            ],
            mittel: [
                {
                    id: "lesk2l3_m1", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Zuerst sät Opa Samen. Dann wächst die Blume. Was dann?", answers: ["die Blume blüht", "Opa sät wieder", "nichts", "Opa schläft"], correct: 0,
                    explanation: "Nach dem Wachsen kommt die Blüte."
                },
                {
                    id: "lesk2l3_m2", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Ali kauft Mehl. Dann backt er. Was braucht er zuerst?", answers: ["Mehl", "den Kuchen", "einen Teller", "nur Zucker"], correct: 0,
                    explanation: "Erst das Mehl, dann backen."
                },
                {
                    id: "lesk2l3_m3", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Was kommt vor dem Frühstück?", answers: ["aufstehen", "zur Schule gehen", "schlafen gehen", "Hausaufgaben"], correct: 0,
                    explanation: "Erst aufstehen, dann frühstücken."
                },
                {
                    id: "lesk2l3_m4", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Zuerst regnet es. Dann kommt die Sonne. Was sieht man oft?", answers: ["einen Regenbogen", "Schnee", "Nebel", "Sterne"], correct: 0,
                    explanation: "Regen und Sonne machen einen Regenbogen."
                }
            ],
            schwer: [
                {
                    id: "lesk2l3_s1", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "schwer", points: 10,
                    question: "Tom pflanzt, gießt und erntet. Was ist zuletzt?", answers: ["ernten", "pflanzen", "gießen", "graben"], correct: 0,
                    explanation: "Geerntet wird am Ende."
                },
                {
                    id: "lesk2l3_s2", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "schwer", points: 10,
                    question: "Was kommt zuerst: Teig machen oder Kuchen essen?", answers: ["Teig machen", "Kuchen essen", "beides gleich", "keins davon"], correct: 0,
                    explanation: "Ohne Teig gibt es keinen Kuchen."
                },
                {
                    id: "lesk2l3_s3", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "schwer", points: 10,
                    question: "Mia malt ein Bild. Dann hängt sie es auf. Was war vorher?", answers: ["malen", "aufhängen", "wegwerfen", "kaufen"], correct: 0,
                    explanation: "Erst malen, dann aufhängen."
                },
                {
                    id: "lesk2l3_s4", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "schwer", points: 10,
                    question: "Welches Wort sagt: am Ende?", answers: ["zuletzt", "zuerst", "dann", "heute"], correct: 0,
                    explanation: "Zuletzt heißt am Ende."
                }
            ]
        },
        test: [
                {
                    id: "lesk2l3_t1", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Welches Wort sagt: am Anfang?", answers: ["zuerst", "zuletzt", "dann", "nie"], correct: 0,
                    explanation: "Zuerst heißt am Anfang."
                },
                {
                    id: "lesk2l3_t2", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Zuerst Jacke an. Dann raus. Was ist zuerst?", answers: ["Jacke an", "rausgehen", "Schuhe aus", "schlafen"], correct: 0,
                    explanation: "Nach zuerst steht der Anfang."
                },
                {
                    id: "lesk2l3_t3", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Was macht man zuerst beim Brotschmieren?", answers: ["Brot nehmen", "abbeißen", "Teller spülen", "satt sein"], correct: 0,
                    explanation: "Erst das Brot."
                },
                {
                    id: "lesk2l3_t4", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Opa sät, die Blume wächst, sie blüht. Was ist zuletzt?", answers: ["blühen", "säen", "wachsen", "welken"], correct: 0,
                    explanation: "Die Blüte kommt am Ende."
                },
                {
                    id: "lesk2l3_t5", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Was kommt vor dem Schlafen?", answers: ["Zähne putzen", "aufwachen", "frühstücken", "zur Schule"], correct: 0,
                    explanation: "Erst Zähne putzen, dann schlafen."
                },
                {
                    id: "lesk2l3_t6", category: "kurs_les_k2_l3", area: "schule", grade: 2,
                    subject: "deutsch", topic: "textknacker", difficulty: "mittel", points: 10,
                    question: "Welches Wort sagt: in der Mitte?", answers: ["dann", "zuerst", "zuletzt", "nie"], correct: 0,
                    explanation: "Dann steht zwischen zuerst und zuletzt."
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
        window.DEUTSCH_K2_KURSE = extraKurse;
        window.DEUTSCH_K2_LEKTIONEN = extraLektionen;
    }
})();
