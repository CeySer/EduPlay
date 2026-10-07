// Deutsch Klasse 3 - Wortarten/Zeitformen, Rechtschreibung, Satzglieder, Lesen
// 4 Kurse mit je 3 Lektionen - erzeugt aus /tmp/gs/d3_1..4.js.
// Die Themen (topic) entsprechen genau den Wissensfragen derselben Klasse, damit
// die Kurs-Empfehlung aus dem Wissen-Modus den passenden Kurs findet.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "wortarten_k3", title: "Wortarten und Zeitformen", icon: "🔤", grade: 3, subject: "deutsch", beschreibung: "Nomen, Verben, Adjektive, Pronomen – und wann etwas passiert: Präsens, Präteritum, Perfekt, Futur." },
        { id: "rechtschreib_k3", title: "Rechtschreibung mit Bausteinen", icon: "🔨", grade: 3, subject: "deutsch", beschreibung: "Wortstamm und Wortfamilie, Vorsilben und Nachsilben, Verlängern und Ableiten." },
        { id: "saetze_k3", title: "Sätze und Satzglieder", icon: "🚂", grade: 3, subject: "deutsch", beschreibung: "Satzarten und wörtliche Rede, Subjekt und Prädikat, Ergänzungen mit Wen? und Wem?" },
        { id: "lesen_k3", title: "Lesen und verstehen", icon: "📖", grade: 3, subject: "deutsch", beschreibung: "Märchen, Fabel, Sachtext und Gedicht, Lesetipps mit W-Fragen, Sprichwörter und Redewendungen." }
    ];
    const extraLektionen = [
    {
        id: "wz_k3_l1", kurs: "wortarten_k3", order: 1, icon: "🏷️",
        title: "Nomen, Verben, Adjektive", kurz: "Die drei wichtigsten Wortarten",
        erklaerung: {
            intro: "<b>Nomen</b> (Namenwörter) bezeichnen Menschen, Tiere, Dinge und Gefühle – man schreibt sie groß, und sie haben einen Artikel. <b>Verben</b> (Tunwörter) sagen, was jemand tut. <b>Adjektive</b> (Wiewörter) sagen, wie etwas ist.",
            beispiele: ["der Mut, die Freude – Nomen",
                "laufen, denken – Verben",
                "mutig, leise – Adjektive"],
            merksatz: "Nomen: der, die, das davor. Verben: Was tut jemand? Adjektive: Wie ist es?"
        },
        uebung: {
            leicht: [
                {
                    id: "wzk3l1_l1", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Nomen?", answers: ["Freude", "fröhlich", "freuen", "froh"], correct: 0,
                    explanation: "Man kann 'die' davor sagen: die Freude."
                },
                {
                    id: "wzk3l1_l2", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Verb?", answers: ["springen", "Sprung", "sprunghaft", "Springer"], correct: 0,
                    explanation: "Springen sagt, was jemand tut."
                },
                {
                    id: "wzk3l1_l3", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Adjektiv?", answers: ["leise", "Lärm", "flüstern", "Ruhe"], correct: 0,
                    explanation: "Leise sagt, wie etwas ist."
                },
                {
                    id: "wzk3l1_l4", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "leicht", points: 10,
                    question: "Welche Wortart schreibt man immer groß?", answers: ["Nomen", "Verben", "Adjektive", "Bindewörter"], correct: 0,
                    explanation: "Nomen schreibt man immer groß."
                }
            ],
            mittel: [
                {
                    id: "wzk3l1_m1", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist KEIN Nomen?", answers: ["schlafen", "Angst", "Wind", "Spiel"], correct: 0,
                    explanation: "Schlafen ist ein Verb."
                },
                {
                    id: "wzk3l1_m2", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welche Wortart ist 'mutig'?", answers: ["Adjektiv", "Nomen", "Verb", "Artikel"], correct: 0,
                    explanation: "Mutig sagt, wie jemand ist."
                },
                {
                    id: "wzk3l1_m3", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welches Nomen ist ein Gefühl?", answers: ["die Wut", "der Tisch", "das Auto", "die Wolke"], correct: 0,
                    explanation: "Auch Gefühle sind Nomen: die Wut, die Angst."
                },
                {
                    id: "wzk3l1_m4", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "In welchem Satz ist 'Laufen' ein Nomen?", answers: ["Das Laufen macht Spaß.", "Wir laufen heim.", "Sie laufen schnell.", "Lauft schneller!"], correct: 0,
                    explanation: "Mit 'das' davor wird laufen zum Nomen."
                }
            ],
            schwer: [
                {
                    id: "wzk3l1_s1", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "schwer", points: 10,
                    question: "Welches Adjektiv passt? 'Das Eis ist ___.'", answers: ["kalt", "Kälte", "kälten", "frieren"], correct: 0,
                    explanation: "Kalt sagt, wie das Eis ist."
                },
                {
                    id: "wzk3l1_s2", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist ein Pronomen (Fürwort)?", answers: ["sie", "Sonne", "sehen", "sauer"], correct: 0,
                    explanation: "Sie kann für ein Nomen stehen: Lisa → sie."
                },
                {
                    id: "wzk3l1_s3", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "schwer", points: 10,
                    question: "Wie viele Nomen hat der Satz 'Der Hund bellt den Postboten an.'?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Hund und Postboten sind Nomen."
                },
                {
                    id: "wzk3l1_s4", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist ein Artikel?", answers: ["die", "dies", "dir", "dich"], correct: 0,
                    explanation: "Der, die, das, ein, eine sind Artikel."
                }
            ]
        },
        test: [
                {
                    id: "wzk3l1_t1", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist ein Nomen?", answers: ["Haus", "hausen", "häuslich", "heimwärts"], correct: 0,
                    explanation: "Das Haus – mit Artikel und groß."
                },
                {
                    id: "wzk3l1_t2", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist ein Verb?", answers: ["lachen", "lustig", "Witz", "laut"], correct: 0,
                    explanation: "Lachen sagt, was jemand tut."
                },
                {
                    id: "wzk3l1_t3", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welche Wortart ist 'rund'?", answers: ["Adjektiv", "Nomen", "Verb", "Pronomen"], correct: 0,
                    explanation: "Rund sagt, wie etwas ist."
                },
                {
                    id: "wzk3l1_t4", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist KEIN Verb?", answers: ["Bett", "schlafen", "träumen", "gähnen"], correct: 0,
                    explanation: "Das Bett ist ein Nomen."
                },
                {
                    id: "wzk3l1_t5", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welches Pronomen ersetzt 'die Kinder'?", answers: ["sie", "er", "es", "ihn"], correct: 0,
                    explanation: "Die Kinder → sie."
                },
                {
                    id: "wzk3l1_t6", category: "kurs_wz_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welches Adjektiv ist das Gegenteil von 'laut'?", answers: ["leise", "lustig", "lang", "leicht"], correct: 0,
                    explanation: "Laut – leise."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "wz_k3_l2", kurs: "wortarten_k3", order: 2, icon: "⏳",
        title: "Die Zeitformen", kurz: "Präsens, Präteritum, Perfekt, Futur",
        erklaerung: {
            intro: "Verben zeigen, <b>wann</b> etwas passiert. <b>Präsens</b> (Gegenwart): ich spiele. <b>Präteritum</b> (1. Vergangenheit): ich spielte. <b>Perfekt</b> (2. Vergangenheit): ich habe gespielt. <b>Futur</b> (Zukunft): ich werde spielen.",
            beispiele: ["ich gehe – Präsens",
                "ich ging – Präteritum",
                "ich bin gegangen – Perfekt",
                "ich werde gehen – Futur"],
            merksatz: "Das Perfekt braucht haben oder sein: ich habe gelacht, ich bin gelaufen."
        },
        uebung: {
            leicht: [
                {
                    id: "wzk3l2_l1", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "leicht", points: 10,
                    question: "In welcher Zeitform steht 'ich spiele'?", answers: ["Präsens", "Präteritum", "Perfekt", "Futur"], correct: 0,
                    explanation: "Ich spiele – jetzt, also Präsens."
                },
                {
                    id: "wzk3l2_l2", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "leicht", points: 10,
                    question: "In welcher Zeitform steht 'ich lachte'?", answers: ["Präteritum", "Präsens", "Perfekt", "Futur"], correct: 0,
                    explanation: "Lachte ist die 1. Vergangenheit."
                },
                {
                    id: "wzk3l2_l3", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "leicht", points: 10,
                    question: "Welche Form ist Futur?", answers: ["ich werde malen", "ich male", "ich malte", "ich habe gemalt"], correct: 0,
                    explanation: "Futur bildet man mit werden."
                },
                {
                    id: "wzk3l2_l4", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "leicht", points: 10,
                    question: "Was zeigt das Präsens?", answers: ["Gegenwart", "Zukunft", "Vergangenheit", "Märchenzeit"], correct: 0,
                    explanation: "Präsens heißt Gegenwart."
                }
            ],
            mittel: [
                {
                    id: "wzk3l2_m1", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'gehen' im Präteritum? (ich …)", answers: ["ging", "gehte", "gang", "gegangen"], correct: 0,
                    explanation: "Gehen ist unregelmäßig: ich ging."
                },
                {
                    id: "wzk3l2_m2", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Wie heißt das Perfekt von 'ich laufe'?", answers: ["ich bin gelaufen", "ich habe gelauft", "ich lief", "ich bin gelauft"], correct: 0,
                    explanation: "Laufen bildet das Perfekt mit sein."
                },
                {
                    id: "wzk3l2_m3", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "In welcher Zeitform steht 'Wir haben gelacht'?", answers: ["Perfekt", "Präteritum", "Präsens", "Futur"], correct: 0,
                    explanation: "Haben + gelacht ist Perfekt."
                },
                {
                    id: "wzk3l2_m4", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'ich esse' im Präteritum?", answers: ["ich aß", "ich esste", "ich asste", "ich habe gegessen"], correct: 0,
                    explanation: "Essen ist unregelmäßig: ich aß."
                }
            ],
            schwer: [
                {
                    id: "wzk3l2_s1", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "schwer", points: 10,
                    question: "Welcher Satz steht im Futur?", answers: ["Morgen werde ich lesen.", "Gestern las ich.", "Ich lese gerade.", "Ich habe viel gelesen."], correct: 0,
                    explanation: "Werde + lesen ist Futur."
                },
                {
                    id: "wzk3l2_s2", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "schwer", points: 10,
                    question: "Wie heißt das Perfekt von 'ich schwimme'?", answers: ["ich bin geschwommen", "ich habe geschwimmt", "ich schwamm", "ich bin geschwimmt"], correct: 0,
                    explanation: "Ich bin geschwommen."
                },
                {
                    id: "wzk3l2_s3", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "schwer", points: 10,
                    question: "Welche Zeitform braucht 'werden'?", answers: ["Futur", "Perfekt", "Präteritum", "Präsens"], correct: 0,
                    explanation: "Ich werde … – das ist Futur."
                },
                {
                    id: "wzk3l2_s4", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "schwer", points: 10,
                    question: "Wie heißt 'du rufst' im Präteritum?", answers: ["du riefst", "du rufest", "du rufte", "du hast gerufen"], correct: 0,
                    explanation: "Rufen ist unregelmäßig: du riefst."
                }
            ]
        },
        test: [
                {
                    id: "wzk3l2_t1", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "In welcher Zeitform steht 'Sie sang ein Lied'?", answers: ["Präteritum", "Präsens", "Perfekt", "Futur"], correct: 0,
                    explanation: "Sang ist Präteritum von singen."
                },
                {
                    id: "wzk3l2_t2", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'ich bringe' im Präteritum?", answers: ["ich brachte", "ich bringte", "ich brang", "ich habe gebracht"], correct: 0,
                    explanation: "Bringen ist unregelmäßig: ich brachte."
                },
                {
                    id: "wzk3l2_t3", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welche Form ist Perfekt?", answers: ["er hat gemalt", "er malt", "er malte", "er wird malen"], correct: 0,
                    explanation: "Hat + gemalt ist Perfekt."
                },
                {
                    id: "wzk3l2_t4", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Wie heißt das Präteritum von 'wir sind'?", answers: ["wir waren", "wir wären", "wir seid", "wir sinden"], correct: 0,
                    explanation: "Sein: wir sind – wir waren."
                },
                {
                    id: "wzk3l2_t5", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welcher Satz steht in der Gegenwart?", answers: ["Ich trinke Saft.", "Ich trank Saft.", "Ich werde trinken.", "Ich habe getrunken."], correct: 0,
                    explanation: "Ich trinke – Präsens."
                },
                {
                    id: "wzk3l2_t6", category: "kurs_wz_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'ich denke' im Perfekt?", answers: ["ich habe gedacht", "ich habe gedenkt", "ich bin gedacht", "ich dachte"], correct: 0,
                    explanation: "Ich habe gedacht."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "wz_k3_l3", kurs: "wortarten_k3", order: 3, icon: "📈",
        title: "Steigern und Pronomen", kurz: "groß – größer – am größten",
        erklaerung: {
            intro: "Adjektive kann man <b>steigern</b>: groß – größer – am größten (Grundform, Vergleichsstufe, Höchststufe). Manche sind unregelmäßig: gut – besser – am besten. <b>Pronomen</b> (Fürwörter) ersetzen Nomen: ich, du, er, sie, es, wir, ihr, sie.",
            beispiele: ["klein – kleiner – am kleinsten",
                "Mia ist größer als Ben.",
                "Lisa ist krank. Sie bleibt zu Hause."],
            merksatz: "gut – besser – am besten, viel – mehr – am meisten, gern – lieber – am liebsten."
        },
        uebung: {
            leicht: [
                {
                    id: "wzk3l3_l1", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "leicht", points: 10,
                    question: "Wie heißt die Vergleichsstufe von 'klein'?", answers: ["kleiner", "kleinste", "am kleinsten", "kleinlich"], correct: 0,
                    explanation: "Klein – kleiner – am kleinsten."
                },
                {
                    id: "wzk3l3_l2", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "leicht", points: 10,
                    question: "Wie steigert man 'gut'?", answers: ["besser – am besten", "guter – am gutesten", "gutter – am guttesten", "mehr – am meisten"], correct: 0,
                    explanation: "Gut ist unregelmäßig: besser, am besten."
                },
                {
                    id: "wzk3l3_l3", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Pronomen?", answers: ["wir", "Wald", "warm", "wandern"], correct: 0,
                    explanation: "Wir ist ein Fürwort."
                },
                {
                    id: "wzk3l3_l4", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "leicht", points: 10,
                    question: "Welches Pronomen passt für 'der Ball'?", answers: ["er", "sie", "es", "wir"], correct: 0,
                    explanation: "Der Ball → er."
                }
            ],
            mittel: [
                {
                    id: "wzk3l3_m1", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Höchststufe von 'hoch'?", answers: ["am höchsten", "am hochsten", "am höhesten", "höher"], correct: 0,
                    explanation: "Hoch – höher – am höchsten."
                },
                {
                    id: "wzk3l3_m2", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welches Pronomen passt für 'das Kind'?", answers: ["es", "er", "sie", "ihr"], correct: 0,
                    explanation: "Das Kind → es."
                },
                {
                    id: "wzk3l3_m3", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Wie steigert man 'viel'?", answers: ["mehr – am meisten", "vieler – am vielsten", "viel – am viel", "mehrer – am mehrsten"], correct: 0,
                    explanation: "Viel – mehr – am meisten."
                },
                {
                    id: "wzk3l3_m4", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welches Pronomen ersetzt 'Tom und ich'?", answers: ["wir", "ihr", "sie", "er"], correct: 0,
                    explanation: "Tom und ich → wir."
                }
            ],
            schwer: [
                {
                    id: "wzk3l3_s1", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Mia ist größer als Ben.", "Mia ist größer wie Ben.", "Mia ist großer als Ben.", "Mia ist mehr groß als Ben."], correct: 0,
                    explanation: "Nach der Vergleichsstufe steht 'als'."
                },
                {
                    id: "wzk3l3_s2", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "schwer", points: 10,
                    question: "Wie heißt die Vergleichsstufe von 'gern'?", answers: ["lieber", "gerner", "am liebsten", "mehr gern"], correct: 0,
                    explanation: "Gern – lieber – am liebsten."
                },
                {
                    id: "wzk3l3_s3", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "schwer", points: 10,
                    question: "Welches Pronomen fehlt? 'Oma ruft an. ___ hat Geburtstag.'", answers: ["Sie", "Er", "Es", "Ihr"], correct: 0,
                    explanation: "Oma → sie."
                },
                {
                    id: "wzk3l3_s4", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "schwer", points: 10,
                    question: "Was ist 'am schnellsten'?", answers: ["die Höchststufe", "die Grundform", "die Vergleichsstufe", "ein Nomen"], correct: 0,
                    explanation: "Am …sten ist die Höchststufe."
                }
            ]
        },
        test: [
                {
                    id: "wzk3l3_t1", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Vergleichsstufe von 'alt'?", answers: ["älter", "alter", "am ältesten", "altiger"], correct: 0,
                    explanation: "Alt – älter – am ältesten."
                },
                {
                    id: "wzk3l3_t2", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist ein Pronomen?", answers: ["ihr", "Igel", "immer", "innen"], correct: 0,
                    explanation: "Ihr ist ein Fürwort."
                },
                {
                    id: "wzk3l3_t3", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Höchststufe von 'lang'?", answers: ["am längsten", "am langsten", "am längersten", "länger"], correct: 0,
                    explanation: "Lang – länger – am längsten."
                },
                {
                    id: "wzk3l3_t4", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welches Pronomen passt für 'die Katze'?", answers: ["sie", "er", "es", "wir"], correct: 0,
                    explanation: "Die Katze → sie."
                },
                {
                    id: "wzk3l3_t5", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welche Steigerung ist richtig?", answers: ["dunkel – dunkler", "dunkel – dunkeler", "dunkel – dünkler", "dunkel – mehr dunkel"], correct: 0,
                    explanation: "Dunkel – dunkler – am dunkelsten."
                },
                {
                    id: "wzk3l3_t6", category: "kurs_wz_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "wortarten_zeitformen", difficulty: "mittel", points: 10,
                    question: "Welches Wort ersetzt 'Max' im Satz 'Max spielt.'?", answers: ["Er", "Sie", "Es", "Ihr"], correct: 0,
                    explanation: "Max → er."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "rb_k3_l1", kurs: "rechtschreib_k3", order: 1, icon: "🌳",
        title: "Wortstamm und Wortfamilie", kurz: "fahren – Fahrer – Fahrrad",
        erklaerung: {
            intro: "Wörter mit demselben <b>Wortstamm</b> gehören zu einer <b>Wortfamilie</b>: fahren, Fahrer, Fahrrad, Abfahrt. Der Stamm wird fast immer gleich geschrieben – so kannst du schwierige Wörter von bekannten ableiten.",
            beispiele: ["spielen – Spiel – Spielplatz",
                "backen – Bäcker – Backofen",
                "fahren – Fahrrad – Abfahrt"],
            merksatz: "Gleicher Stamm, gleiche Schreibung: fahren – Fahrt – Fahrer."
        },
        uebung: {
            leicht: [
                {
                    id: "rbk3l1_l1", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "leicht", points: 10,
                    question: "Welches Wort gehört zur Wortfamilie 'spielen'?", answers: ["Spielzeug", "Spiegel", "Spinne", "spitz"], correct: 0,
                    explanation: "Spielzeug hat den Stamm spiel."
                },
                {
                    id: "rbk3l1_l2", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "leicht", points: 10,
                    question: "Was ist der Wortstamm von 'fahren'?", answers: ["fahr", "fah", "ahren", "fa"], correct: 0,
                    explanation: "Fahr-en: der Stamm ist fahr."
                },
                {
                    id: "rbk3l1_l3", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "leicht", points: 10,
                    question: "Welches Wort gehört NICHT zur Familie 'Haus'?", answers: ["Hose", "Häuser", "Haustür", "häuslich"], correct: 0,
                    explanation: "Hose hat einen anderen Stamm."
                },
                {
                    id: "rbk3l1_l4", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "leicht", points: 10,
                    question: "Welches Wort gehört zur Familie 'backen'?", answers: ["Bäckerei", "Backe", "Bach", "packen"], correct: 0,
                    explanation: "Bäckerei kommt von backen. Die Backe ist ein Körperteil!"
                }
            ],
            mittel: [
                {
                    id: "rbk3l1_m1", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Warum schreibt man 'Fahrt' mit h?", answers: ["Es kommt von 'fahren'.", "Weil es lang klingt.", "Weil es ein Nomen ist.", "Das ist reiner Zufall."], correct: 0,
                    explanation: "Der Stamm fahr hat ein h."
                },
                {
                    id: "rbk3l1_m2", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat den Stamm 'lauf'?", answers: ["Läufer", "Laub", "Lauch", "laut"], correct: 0,
                    explanation: "Läufer kommt von laufen."
                },
                {
                    id: "rbk3l1_m3", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welches Wort passt in die Familie 'sehen'?", answers: ["Fernseher", "Seele", "Segel", "Säge"], correct: 0,
                    explanation: "Fernseher kommt von sehen."
                },
                {
                    id: "rbk3l1_m4", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Was haben 'Freund', 'freundlich' und 'Freundschaft' gemeinsam?", answers: ["den Wortstamm", "die Endung", "die Silbenzahl", "den Artikel"], correct: 0,
                    explanation: "Alle haben den Stamm freund."
                }
            ],
            schwer: [
                {
                    id: "rbk3l1_s1", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "schwer", points: 10,
                    question: "Warum schreibt man 'Bäume' mit äu?", answers: ["Es kommt von 'Baum'.", "Es klingt wie 'eu'.", "Weil es Mehrzahl ist.", "Weil es ein Nomen ist."], correct: 0,
                    explanation: "Baum hat au – daraus wird äu."
                },
                {
                    id: "rbk3l1_s2", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "schwer", points: 10,
                    question: "Welches Wort gehört NICHT zur Familie 'schreiben'?", answers: ["schreien", "Schreibtisch", "Schrift", "beschreiben"], correct: 0,
                    explanation: "Schreien hat einen anderen Stamm."
                },
                {
                    id: "rbk3l1_s3", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "schwer", points: 10,
                    question: "Welches Wort schreibt man mit 'ä', weil es von 'kalt' kommt?", answers: ["Kälte", "Kelle", "Kerze", "Keller"], correct: 0,
                    explanation: "Kalt – Kälte."
                },
                {
                    id: "rbk3l1_s4", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "schwer", points: 10,
                    question: "Welcher Stamm steckt in 'Spielerin'?", answers: ["spiel", "spie", "erin", "pieler"], correct: 0,
                    explanation: "Spiel-er-in: der Stamm ist spiel."
                }
            ]
        },
        test: [
                {
                    id: "rbk3l1_t1", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welches Wort gehört zur Familie 'singen'?", answers: ["Sänger", "Senf", "Sinn", "sinken"], correct: 0,
                    explanation: "Sänger kommt von singen."
                },
                {
                    id: "rbk3l1_t2", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welches Wort gehört zur Familie 'Garten'?", answers: ["Gärtner", "Gitarre", "Gatter", "Gurke"], correct: 0,
                    explanation: "Gärtner kommt von Garten."
                },
                {
                    id: "rbk3l1_t3", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Warum schreibt man 'Räder' mit ä?", answers: ["Es kommt von 'Rad'.", "Es klingt wie 'e'.", "Es ist ein Verb.", "Weil es kurz ist."], correct: 0,
                    explanation: "Rad – Räder."
                },
                {
                    id: "rbk3l1_t4", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welches Wort gehört NICHT zur Familie 'Wasser'?", answers: ["Wäsche", "wässern", "Wasserhahn", "wässrig"], correct: 0,
                    explanation: "Wäsche kommt von waschen."
                },
                {
                    id: "rbk3l1_t5", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Was ist der Wortstamm von 'lesen'?", answers: ["les", "lese", "sen", "le"], correct: 0,
                    explanation: "Les-en: der Stamm ist les."
                },
                {
                    id: "rbk3l1_t6", category: "kurs_rb_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welches Wort passt in die Familie 'fliegen'?", answers: ["Flugzeug", "Flasche", "Flöte", "fließen"], correct: 0,
                    explanation: "Flugzeug kommt von fliegen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "rb_k3_l2", kurs: "rechtschreib_k3", order: 2, icon: "➕",
        title: "Vorsilben und Nachsilben", kurz: "ver-, un-, -ung, -lich …",
        erklaerung: {
            intro: "Mit <b>Vorsilben</b> wie <b>ab-, ver-, vor-, ent-, be-, un-</b> ändert sich die Bedeutung: fahren – abfahren, glücklich – unglücklich. Mit <b>Nachsilben</b> wie <b>-ung, -heit, -keit, -nis</b> entstehen Nomen (groß!), mit <b>-lich, -ig, -isch, -bar</b> entstehen Adjektive (klein!).",
            beispiele: ["frei → Freiheit",
                "Freund → freundlich",
                "lesen → lesbar",
                "glücklich → unglücklich"],
            merksatz: "-ung, -heit, -keit, -nis → groß. -lich, -ig, -isch, -bar → klein."
        },
        uebung: {
            leicht: [
                {
                    id: "rbk3l2_l1", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "leicht", points: 10,
                    question: "Welche Nachsilbe macht aus 'frei' ein Nomen?", answers: ["-heit", "-lich", "-ig", "-bar"], correct: 0,
                    explanation: "Frei → die Freiheit."
                },
                {
                    id: "rbk3l2_l2", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "leicht", points: 10,
                    question: "Welches Wort hat eine Vorsilbe?", answers: ["verlaufen", "Vogel", "Vase", "Vater"], correct: 0,
                    explanation: "Ver-laufen: ver- ist eine Vorsilbe."
                },
                {
                    id: "rbk3l2_l3", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "leicht", points: 10,
                    question: "Was entsteht mit '-ung' aus 'warnen'?", answers: ["die Warnung", "warnig", "warnlich", "der Warner"], correct: 0,
                    explanation: "Warnen → die Warnung."
                },
                {
                    id: "rbk3l2_l4", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "leicht", points: 10,
                    question: "Welche Vorsilbe macht das Gegenteil von 'freundlich'?", answers: ["un-", "ver-", "be-", "ent-"], correct: 0,
                    explanation: "Freundlich – unfreundlich."
                }
            ],
            mittel: [
                {
                    id: "rbk3l2_m1", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist richtig gebildet?", answers: ["Heiterkeit", "Heiterheit", "Heiterung", "Heiternis"], correct: 0,
                    explanation: "Heiter → die Heiterkeit."
                },
                {
                    id: "rbk3l2_m2", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welches Nomen entsteht aus 'üben'?", answers: ["Übung", "übung", "Übeung", "Übheit"], correct: 0,
                    explanation: "Üben → die Übung, mit großem Ü."
                },
                {
                    id: "rbk3l2_m3", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Was entsteht aus 'Ende' mit '-lich'?", answers: ["endlich", "Endlich", "endig", "endlos"], correct: 0,
                    explanation: "Ende → endlich, klein, weil Adjektiv."
                },
                {
                    id: "rbk3l2_m4", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welche Nachsilbe macht aus 'Kind' ein Adjektiv?", answers: ["-lich", "-ung", "-heit", "-nis"], correct: 0,
                    explanation: "Kind → kindlich."
                }
            ],
            schwer: [
                {
                    id: "rbk3l2_s1", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "schwer", points: 10,
                    question: "Welches Wort schreibt man groß?", answers: ["Dunkelheit", "dunkel", "verdunkeln", "dunkler"], correct: 0,
                    explanation: "-heit macht ein Nomen: die Dunkelheit."
                },
                {
                    id: "rbk3l2_s2", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "schwer", points: 10,
                    question: "Welches Wort schreibt man klein?", answers: ["essbar", "Essen", "Esstisch", "Essbesteck"], correct: 0,
                    explanation: "-bar macht ein Adjektiv: essbar."
                },
                {
                    id: "rbk3l2_s3", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "schwer", points: 10,
                    question: "Was bedeutet 'unlösbar'?", answers: ["kann man nicht lösen", "leicht zu lösen", "schon gelöst", "muss man lösen"], correct: 0,
                    explanation: "Un- heißt nicht, -bar heißt kann man."
                },
                {
                    id: "rbk3l2_s4", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "schwer", points: 10,
                    question: "Welches Wort hat die Vorsilbe 'ent-'?", answers: ["entdecken", "Ente", "Enkel", "eng"], correct: 0,
                    explanation: "Ent-decken: ent- ist die Vorsilbe."
                }
            ]
        },
        test: [
                {
                    id: "rbk3l2_t1", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welche Nachsilbe macht ein Nomen?", answers: ["-keit", "-ig", "-lich", "-bar"], correct: 0,
                    explanation: "-keit macht Nomen: die Sauberkeit."
                },
                {
                    id: "rbk3l2_t2", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Was entsteht aus 'Sonne' mit '-ig'?", answers: ["sonnig", "Sonnig", "sonnlich", "sonnung"], correct: 0,
                    explanation: "Sonne → sonnig, klein."
                },
                {
                    id: "rbk3l2_t3", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat eine Nachsilbe?", answers: ["Zeitung", "Zebra", "Zange", "Zucker"], correct: 0,
                    explanation: "Zeit-ung: -ung ist eine Nachsilbe."
                },
                {
                    id: "rbk3l2_t4", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welche Vorsilbe passt? '___reisen' (wegfahren)", answers: ["ab", "an", "be", "zu"], correct: 0,
                    explanation: "Abreisen heißt wegfahren."
                },
                {
                    id: "rbk3l2_t5", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welches Wort schreibt man groß?", answers: ["Freundschaft", "freundlich", "befreundet", "freundliche"], correct: 0,
                    explanation: "-schaft macht ein Nomen."
                },
                {
                    id: "rbk3l2_t6", category: "kurs_rb_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Wie heißt das Nomen zu 'sauber'?", answers: ["Sauberkeit", "Sauberheit", "Saubernis", "Sauberung"], correct: 0,
                    explanation: "Sauber → die Sauberkeit."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "rb_k3_l3", kurs: "rechtschreib_k3", order: 3, icon: "🔍",
        title: "Verlängern und Ableiten", kurz: "Hund – Hunde, Räder – Rad",
        erklaerung: {
            intro: "Am Wortende klingen <b>b/p, d/t, g/k</b> gleich. <b>Verlängere</b> das Wort, dann hörst du es: Hund – Hunde (d), Berg – Berge (g). Bei <b>ä/e</b> und <b>äu/eu</b> hilft das <b>Ableiten</b>: Bäume kommt von Baum, also äu.",
            beispiele: ["Zwerg – Zwerge → g",
                "Korb – Körbe → b",
                "Hände – Hand → ä"],
            merksatz: "Verlängern: Wald – Wälder. Ableiten: Räder – Rad."
        },
        uebung: {
            leicht: [
                {
                    id: "rbk3l3_l1", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es? 'der Hun_'", answers: ["Hund", "Hunt", "Hundt", "Hunnd"], correct: 0,
                    explanation: "Verlängern: die Hunde – also d."
                },
                {
                    id: "rbk3l3_l2", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "leicht", points: 10,
                    question: "Mit welchem Wort prüfst du 'Berg'?", answers: ["Berge", "Burg", "Bank", "Brot"], correct: 0,
                    explanation: "Berg – Berge: man hört das g."
                },
                {
                    id: "rbk3l3_l3", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "leicht", points: 10,
                    question: "Welches Wort schreibt man mit 'b' am Ende?", answers: ["Korb", "Stopp", "Typ", "Lump"], correct: 0,
                    explanation: "Korb – Körbe: man hört das b."
                },
                {
                    id: "rbk3l3_l4", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "leicht", points: 10,
                    question: "Wie prüfst du das 'g' in 'Zwerg'?", answers: ["die Zwerge", "der Zweig", "die Zwecke", "zwei"], correct: 0,
                    explanation: "Zwerg – die Zwerge."
                }
            ],
            mittel: [
                {
                    id: "rbk3l3_m1", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Warum schreibt man 'Kälte' mit 'ä'?", answers: ["Es kommt von 'kalt'.", "Es klingt wie 'e'.", "Es ist ein Nomen.", "Weil es kalt ist."], correct: 0,
                    explanation: "Kalt – Kälte."
                },
                {
                    id: "rbk3l3_m2", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welches Wort schreibt man mit 'd' am Ende?", answers: ["Kind", "Zelt", "Licht", "Brot"], correct: 0,
                    explanation: "Kind – Kinder: man hört das d."
                },
                {
                    id: "rbk3l3_m3", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es richtig?", answers: ["Läufer", "Leufer", "Läuffer", "Leuffer"], correct: 0,
                    explanation: "Läufer kommt von laufen – also äu."
                },
                {
                    id: "rbk3l3_m4", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welches Wort schreibt man mit 'äu'?", answers: ["Häuser", "Heu", "Feuer", "Leute"], correct: 0,
                    explanation: "Häuser kommt von Haus."
                }
            ],
            schwer: [
                {
                    id: "rbk3l3_s1", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist richtig geschrieben?", answers: ["Zug", "Zuk", "Zugk", "Zuck"], correct: 0,
                    explanation: "Zug – Züge: man hört das g."
                },
                {
                    id: "rbk3l3_s2", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "schwer", points: 10,
                    question: "Mit welchem Wort prüfst du 'gelb'?", answers: ["gelbe", "Geld", "Gelände", "gelten"], correct: 0,
                    explanation: "Gelb – gelbe: man hört das b."
                },
                {
                    id: "rbk3l3_s3", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "schwer", points: 10,
                    question: "Warum schreibt man 'Häute' mit 'äu'?", answers: ["Es kommt von 'Haut'.", "Es klingt wie 'eu'.", "Es ist Mehrzahl.", "Es ist ein Verb."], correct: 0,
                    explanation: "Haut – Häute."
                },
                {
                    id: "rbk3l3_s4", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "schwer", points: 10,
                    question: "Welches Wort schreibt man mit 'g' am Ende?", answers: ["Tag", "Sack", "Blick", "Stück"], correct: 0,
                    explanation: "Tag – Tage: man hört das g."
                }
            ]
        },
        test: [
                {
                    id: "rbk3l3_t1", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es? 'das Ra_' (Fahrrad)", answers: ["Rad", "Rat", "Radt", "Rahd"], correct: 0,
                    explanation: "Rad – Räder: also d."
                },
                {
                    id: "rbk3l3_t2", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Mit welchem Wort prüfst du 'Dieb'?", answers: ["Diebe", "Dieter", "dienen", "Dielen"], correct: 0,
                    explanation: "Dieb – Diebe: man hört das b."
                },
                {
                    id: "rbk3l3_t3", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Warum schreibt man 'Gläser' mit 'ä'?", answers: ["Es kommt von 'Glas'.", "Es klingt wie 'e'.", "Es ist durchsichtig.", "Es ist ein Verb."], correct: 0,
                    explanation: "Glas – Gläser."
                },
                {
                    id: "rbk3l3_t4", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist richtig geschrieben?", answers: ["Freude", "Fräude", "Froide", "Freuhde"], correct: 0,
                    explanation: "Es gibt kein verwandtes Wort mit au – also schreibt man eu."
                },
                {
                    id: "rbk3l3_t5", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Welches Wort schreibt man mit 'p' am Ende?", answers: ["Typ", "Dieb", "Korb", "Stab"], correct: 0,
                    explanation: "Typ – Typen: man hört das p."
                },
                {
                    id: "rbk3l3_t6", category: "kurs_rb_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "rechtschreibung_bausteine", difficulty: "mittel", points: 10,
                    question: "Wie prüfst du das 't' in 'Wut'?", answers: ["wütend", "Wurst", "Wolle", "wund"], correct: 0,
                    explanation: "Wut – wütend: man hört das t."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "sg_k3_l1", kurs: "saetze_k3", order: 1, icon: "❗",
        title: "Satzarten und Satzzeichen", kurz: "Punkt, Fragezeichen, wörtliche Rede",
        erklaerung: {
            intro: "Es gibt drei Satzarten: <b>Aussagesatz</b> (Punkt), <b>Fragesatz</b> (Fragezeichen) und <b>Aufforderungssatz</b> (Ausrufezeichen). Bei <b>wörtlicher Rede</b> stehen die gesprochenen Worte in Anführungszeichen: Mia sagt: „Ich komme mit.“",
            beispiele: ["Der Hund schläft. – Aussagesatz",
                "Schläft der Hund? – Fragesatz",
                "Weck den Hund nicht! – Aufforderungssatz"],
            merksatz: "Begleitsatz – Doppelpunkt – „Worte“."
        },
        uebung: {
            leicht: [
                {
                    id: "sgk3l1_l1", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Welches Satzzeichen steht am Ende eines Fragesatzes?", answers: ["Fragezeichen", "Punkt", "Komma", "Doppelpunkt"], correct: 0,
                    explanation: "Fragesätze enden mit einem Fragezeichen."
                },
                {
                    id: "sgk3l1_l2", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Welcher Satz ist ein Aufforderungssatz?", answers: ["Mach die Tür zu!", "Die Tür ist zu.", "Ist die Tür zu?", "Wer macht zu?"], correct: 0,
                    explanation: "Eine Aufforderung endet mit Ausrufezeichen."
                },
                {
                    id: "sgk3l1_l3", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Welches Satzzeichen steht nach einem Aussagesatz?", answers: ["Punkt", "Fragezeichen", "Komma", "Anführungszeichen"], correct: 0,
                    explanation: "Aussagesätze enden mit einem Punkt."
                },
                {
                    id: "sgk3l1_l4", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Was zeigen Anführungszeichen?", answers: ["gesprochene Worte", "eine Frage", "das Satzende", "eine Aufzählung"], correct: 0,
                    explanation: "Sie umschließen, was jemand sagt."
                }
            ],
            mittel: [
                {
                    id: "sgk3l1_m1", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Wo steht der Doppelpunkt? 'Tom ruft ___ „Warte!“'", answers: ["nach 'ruft'", "vor 'Tom'", "nach 'Warte'", "gar nicht"], correct: 0,
                    explanation: "Tom ruft: „Warte!“"
                },
                {
                    id: "sgk3l1_m2", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Lea fragt: „Kommst du?“", "Lea fragt „Kommst du?“", "Lea fragt: Kommst du?", "Lea fragt, „Kommst du?“"], correct: 0,
                    explanation: "Doppelpunkt und Anführungszeichen."
                },
                {
                    id: "sgk3l1_m3", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was für ein Satz ist 'Hast du Hunger?'", answers: ["Fragesatz", "Aussagesatz", "Aufforderungssatz", "Ausrufesatz"], correct: 0,
                    explanation: "Er endet mit Fragezeichen."
                },
                {
                    id: "sgk3l1_m4", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Welches Zeichen fehlt? 'Komm sofort her_'", answers: ["!", "?", ",", ":"], correct: 0,
                    explanation: "Eine Aufforderung: Komm sofort her!"
                }
            ],
            schwer: [
                {
                    id: "sgk3l1_s1", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist eine Frage mit Fragewort?", answers: ["Wann kommt der Bus?", "Kommt der Bus?", "Der Bus kommt.", "Komm, Bus!"], correct: 0,
                    explanation: "Wann ist ein Fragewort."
                },
                {
                    id: "sgk3l1_s2", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Wie viele Zeichen fehlen (jedes einzeln)? 'Ben sagt Ich bin müde'", answers: ["4", "2", "1", "3"], correct: 0,
                    explanation: "Ben sagt: „Ich bin müde.“ – Doppelpunkt, zwei Anführungszeichen, Punkt."
                },
                {
                    id: "sgk3l1_s3", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Was steht vor der wörtlichen Rede?", answers: ["der Begleitsatz", "das Fragezeichen", "das Komma", "der Punkt"], correct: 0,
                    explanation: "Der Begleitsatz sagt, wer spricht."
                },
                {
                    id: "sgk3l1_s4", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist ein Aussagesatz?", answers: ["Morgen regnet es.", "Regnet es morgen?", "Hör auf zu regnen!", "Regnet es?"], correct: 0,
                    explanation: "Er endet mit Punkt und sagt etwas aus."
                }
            ]
        },
        test: [
                {
                    id: "sgk3l1_t1", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Welches Zeichen steht am Ende von 'Wie spät ist es'?", answers: ["?", "!", ".", ":"], correct: 0,
                    explanation: "Es ist eine Frage."
                },
                {
                    id: "sgk3l1_t2", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist eine Frage?", answers: ["Spielst du mit?", "Du spielst mit.", "Spiel mit!", "Wir spielen."], correct: 0,
                    explanation: "Er endet mit Fragezeichen."
                },
                {
                    id: "sgk3l1_t3", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was für ein Satz ist 'Räum dein Zimmer auf!'?", answers: ["Aufforderungssatz", "Aussagesatz", "Fragesatz mit W", "Begleitsatz"], correct: 0,
                    explanation: "Er fordert jemanden auf."
                },
                {
                    id: "sgk3l1_t4", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was gehört nach 'Papa ruft' vor die wörtliche Rede?", answers: [":", ",", ".", "?"], correct: 0,
                    explanation: "Papa ruft: „…“"
                },
                {
                    id: "sgk3l1_t5", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig geschrieben?", answers: ["„Hilfe!“, ruft Max.", "„Hilfe!“ ruft Max.", "Hilfe! ruft Max.", "„Hilfe“! ruft Max."], correct: 0,
                    explanation: "Steht der Begleitsatz hinten, folgt ein Komma."
                },
                {
                    id: "sgk3l1_t6", category: "kurs_sg_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Wie viele Satzarten lernst du in dieser Lektion?", answers: ["3", "2", "4", "5"], correct: 0,
                    explanation: "Aussage-, Frage- und Aufforderungssatz."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "sg_k3_l2", kurs: "saetze_k3", order: 2, icon: "👤",
        title: "Subjekt und Prädikat", kurz: "Wer oder was? Was tut jemand?",
        erklaerung: {
            intro: "Jeder Satz besteht aus <b>Satzgliedern</b>. Mit der <b>Umstellprobe</b> findest du sie: Wörter, die beim Umstellen zusammenbleiben, sind ein Satzglied. Das <b>Prädikat</b> (Satzaussage) ist das Verb – im Aussagesatz steht es an 2. Stelle. Das <b>Subjekt</b> (Satzgegenstand) findest du mit <b>Wer oder was?</b>",
            beispiele: ["Der kleine Hund | bellt | laut.",
                "Laut | bellt | der kleine Hund.",
                "Wer bellt? – der kleine Hund (Subjekt)"],
            merksatz: "Prädikat: Was tut jemand? Subjekt: Wer oder was tut es?"
        },
        uebung: {
            leicht: [
                {
                    id: "sgk3l2_l1", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Was ist das Prädikat in 'Lisa malt ein Bild'?", answers: ["malt", "Lisa", "ein Bild", "Bild"], correct: 0,
                    explanation: "Malt sagt, was Lisa tut."
                },
                {
                    id: "sgk3l2_l2", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Mit welcher Frage findest du das Subjekt?", answers: ["Wer oder was?", "Wen oder was?", "Wem gehört es?", "Wo und wann?"], correct: 0,
                    explanation: "Das Subjekt fragt man mit Wer oder was?"
                },
                {
                    id: "sgk3l2_l3", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Was ist das Subjekt in 'Der Hund bellt'?", answers: ["Der Hund", "bellt", "Hund bellt", "Der"], correct: 0,
                    explanation: "Wer bellt? Der Hund."
                },
                {
                    id: "sgk3l2_l4", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Welche Wortart ist das Prädikat?", answers: ["ein Verb", "ein Nomen", "ein Adjektiv", "ein Artikel"], correct: 0,
                    explanation: "Das Prädikat ist immer ein Verb."
                }
            ],
            mittel: [
                {
                    id: "sgk3l2_m1", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was ist das Subjekt in 'Morgen kommt mein Opa'?", answers: ["mein Opa", "Morgen", "kommt", "Opa kommt"], correct: 0,
                    explanation: "Wer kommt? Mein Opa."
                },
                {
                    id: "sgk3l2_m2", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Probe, bei der man Satzglieder verschiebt?", answers: ["Umstellprobe", "Klangprobe", "Verlängerungsprobe", "Ersatzprobe"], correct: 0,
                    explanation: "Bei der Umstellprobe stellt man Satzglieder um."
                },
                {
                    id: "sgk3l2_m3", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Wie viele Satzglieder hat 'Ben | isst | einen Apfel'?", answers: ["3", "2", "4", "5"], correct: 0,
                    explanation: "Ben – isst – einen Apfel."
                },
                {
                    id: "sgk3l2_m4", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "An welcher Stelle steht das Prädikat im Aussagesatz?", answers: ["an 2. Stelle", "an 1. Stelle", "ganz am Ende", "an 3. Stelle"], correct: 0,
                    explanation: "Im Aussagesatz steht das Verb an 2. Stelle."
                }
            ],
            schwer: [
                {
                    id: "sgk3l2_s1", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Was ist das Subjekt in 'Im Garten spielen die Kinder'?", answers: ["die Kinder", "Im Garten", "spielen", "Garten"], correct: 0,
                    explanation: "Wer spielt? Die Kinder."
                },
                {
                    id: "sgk3l2_s2", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Welche Umstellung ist richtig?", answers: ["Heute schwimmt Tim.", "Tim heute schwimmt.", "Schwimmt heute Tim.", "Heute Tim schwimmt."], correct: 0,
                    explanation: "Das Verb bleibt an 2. Stelle."
                },
                {
                    id: "sgk3l2_s3", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Was ist das Prädikat in 'Wir gehen ins Kino'?", answers: ["gehen", "Wir", "ins Kino", "Kino"], correct: 0,
                    explanation: "Gehen sagt, was wir tun."
                },
                {
                    id: "sgk3l2_s4", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Was ist ein Satzglied in 'Die alte Katze schläft'?", answers: ["Die alte Katze", "alte Katze schläft", "Die alte", "Katze schläft"], correct: 0,
                    explanation: "Die alte Katze bleibt beim Umstellen zusammen."
                }
            ]
        },
        test: [
                {
                    id: "sgk3l2_t1", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was ist das Prädikat in 'Oma backt einen Kuchen'?", answers: ["backt", "Oma", "einen Kuchen", "Kuchen"], correct: 0,
                    explanation: "Backt sagt, was Oma tut."
                },
                {
                    id: "sgk3l2_t2", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was ist das Subjekt in 'Abends liest Papa Zeitung'?", answers: ["Papa", "Abends", "liest", "Zeitung"], correct: 0,
                    explanation: "Wer liest? Papa."
                },
                {
                    id: "sgk3l2_t3", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Wer oder was …? Diese Frage sucht …", answers: ["das Subjekt", "das Prädikat", "das Satzende", "den Artikel"], correct: 0,
                    explanation: "Wer oder was? fragt nach dem Subjekt."
                },
                {
                    id: "sgk3l2_t4", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Wie viele Satzglieder hat 'Am Montag | schreiben | wir | ein Diktat'?", answers: ["4", "3", "5", "6"], correct: 0,
                    explanation: "Am Montag – schreiben – wir – ein Diktat."
                },
                {
                    id: "sgk3l2_t5", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was macht die Umstellprobe sichtbar?", answers: ["die Satzglieder", "die Silben", "die Wortarten", "die Reime"], correct: 0,
                    explanation: "Was zusammenbleibt, ist ein Satzglied."
                },
                {
                    id: "sgk3l2_t6", category: "kurs_sg_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was ist das Subjekt in 'Die Sonne scheint hell'?", answers: ["Die Sonne", "scheint", "hell", "Sonne scheint"], correct: 0,
                    explanation: "Wer oder was scheint? Die Sonne."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "sg_k3_l3", kurs: "saetze_k3", order: 3, icon: "📍",
        title: "Wen? Wem? Wann? Wo?", kurz: "Ergänzungen und Angaben",
        erklaerung: {
            intro: "Neben Subjekt und Prädikat gibt es weitere Satzglieder. Die <b>Wen-oder-was-Ergänzung</b> (Akkusativobjekt): Ich sehe <b>den Hund</b>. Die <b>Wem-Ergänzung</b> (Dativobjekt): Ich helfe <b>dem Opa</b>. Dazu kommen Angaben zu <b>Zeit</b> (Wann?) und <b>Ort</b> (Wo?).",
            beispiele: ["Ich rufe den Hund. – Wen? den Hund",
                "Lena hilft ihrer Mama. – Wem? ihrer Mama",
                "Wir spielen im Park. – Wo? im Park"],
            merksatz: "Wen oder was? Wem? Wann? Wo? – Mit Fragen findest du jedes Satzglied."
        },
        uebung: {
            leicht: [
                {
                    id: "sgk3l3_l1", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Mit welcher Frage findest du 'im Park'?", answers: ["Wo?", "Wann?", "Wem?", "Wer?"], correct: 0,
                    explanation: "Im Park ist eine Ortsangabe."
                },
                {
                    id: "sgk3l3_l2", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Mit welcher Frage findest du 'am Morgen'?", answers: ["Wann?", "Wo?", "Wem?", "Wen?"], correct: 0,
                    explanation: "Am Morgen ist eine Zeitangabe."
                },
                {
                    id: "sgk3l3_l3", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Was ist die Wen-Ergänzung? 'Ich sehe den Mond.'", answers: ["den Mond", "Ich", "sehe", "Mond sehe"], correct: 0,
                    explanation: "Wen sehe ich? Den Mond."
                },
                {
                    id: "sgk3l3_l4", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "leicht", points: 10,
                    question: "Was ist die Wem-Ergänzung? 'Ich helfe dem Opa.'", answers: ["dem Opa", "Ich", "helfe", "Opa helfe"], correct: 0,
                    explanation: "Wem helfe ich? Dem Opa."
                }
            ],
            mittel: [
                {
                    id: "sgk3l3_m1", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Die Frage 'Wem?' sucht …", answers: ["das Dativobjekt", "das Subjekt", "das Prädikat", "die Zeitangabe"], correct: 0,
                    explanation: "Wem? fragt nach dem Dativobjekt."
                },
                {
                    id: "sgk3l3_m2", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was ist die Ortsangabe? 'Die Katze schläft auf dem Sofa.'", answers: ["auf dem Sofa", "Die Katze", "schläft", "dem Sofa schläft"], correct: 0,
                    explanation: "Wo schläft die Katze? Auf dem Sofa."
                },
                {
                    id: "sgk3l3_m3", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was ist die Zeitangabe? 'Nach der Schule essen wir.'", answers: ["Nach der Schule", "essen", "wir", "der Schule essen"], correct: 0,
                    explanation: "Wann essen wir? Nach der Schule."
                },
                {
                    id: "sgk3l3_m4", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Wen oder was? 'Paul kauft einen Ball.'", answers: ["einen Ball", "Paul", "kauft", "Ball kauft"], correct: 0,
                    explanation: "Was kauft Paul? Einen Ball."
                }
            ],
            schwer: [
                {
                    id: "sgk3l3_s1", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Wem? 'Ich schenke meiner Schwester ein Buch.'", answers: ["meiner Schwester", "ein Buch", "Ich schenke", "schenke ein Buch"], correct: 0,
                    explanation: "Wem schenke ich etwas? Meiner Schwester."
                },
                {
                    id: "sgk3l3_s2", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Was ist die Wen-Ergänzung? 'Am Abend liest Mia einen Comic.'", answers: ["einen Comic", "Am Abend", "Mia", "liest"], correct: 0,
                    explanation: "Was liest Mia? Einen Comic."
                },
                {
                    id: "sgk3l3_s3", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Wie viele Satzglieder? 'Morgen | besuchen | wir | den Zoo.'", answers: ["4", "3", "5", "2"], correct: 0,
                    explanation: "Morgen – besuchen – wir – den Zoo."
                },
                {
                    id: "sgk3l3_s4", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "schwer", points: 10,
                    question: "Welche Frage passt zu 'seit drei Tagen'?", answers: ["Wie lange?", "Wohin?", "Woher?", "Warum?"], correct: 0,
                    explanation: "Seit drei Tagen sagt, wie lange."
                }
            ]
        },
        test: [
                {
                    id: "sgk3l3_t1", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Mit welcher Frage findest du 'in der Schule'?", answers: ["Wo?", "Wann?", "Wen?", "Wem?"], correct: 0,
                    explanation: "In der Schule ist eine Ortsangabe."
                },
                {
                    id: "sgk3l3_t2", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was ist die Wem-Ergänzung? 'Tim gibt dem Hund Futter.'", answers: ["dem Hund", "Tim", "gibt", "Futter"], correct: 0,
                    explanation: "Wem gibt Tim Futter? Dem Hund."
                },
                {
                    id: "sgk3l3_t3", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was ist die Wen-Ergänzung? 'Wir bauen eine Burg.'", answers: ["eine Burg", "Wir", "bauen", "Burg bauen"], correct: 0,
                    explanation: "Was bauen wir? Eine Burg."
                },
                {
                    id: "sgk3l3_t4", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Die Frage 'Wann?' sucht …", answers: ["die Zeitangabe", "die Ortsangabe", "das Subjekt", "das Prädikat"], correct: 0,
                    explanation: "Wann? fragt nach der Zeit."
                },
                {
                    id: "sgk3l3_t5", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Was ist die Ortsangabe? 'Im Wald wohnen Rehe.'", answers: ["Im Wald", "wohnen", "Rehe", "Wald wohnen"], correct: 0,
                    explanation: "Wo wohnen Rehe? Im Wald."
                },
                {
                    id: "sgk3l3_t6", category: "kurs_sg_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "satzglieder", difficulty: "mittel", points: 10,
                    question: "Welches Satzglied ist 'Lena' in 'Lena malt.'?", answers: ["Subjekt", "Prädikat", "Ortsangabe", "Wem-Ergänzung"], correct: 0,
                    explanation: "Wer malt? Lena – das Subjekt."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "lv_k3_l1", kurs: "lesen_k3", order: 1, icon: "🏰",
        title: "Märchen, Fabel, Sachtext", kurz: "Textsorten erkennen",
        erklaerung: {
            intro: "<b>Märchen</b> beginnen oft mit „Es war einmal“, haben Zauberei und ein gutes Ende. In <b>Fabeln</b> sprechen Tiere, und am Ende steht eine <b>Lehre</b>. <b>Sachtexte</b> informieren über echte Dinge. <b>Gedichte</b> haben Verse (Zeilen) und Strophen, oft mit Reimen.",
            beispiele: ["Rotkäppchen – Märchen",
                "Der Fuchs und der Rabe – Fabel",
                "Wie Bienen Honig machen – Sachtext"],
            merksatz: "Märchen zaubern, Fabeln lehren, Sachtexte informieren, Gedichte reimen."
        },
        uebung: {
            leicht: [
                {
                    id: "lvk3l1_l1", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "leicht", points: 10,
                    question: "Wie beginnen viele Märchen?", answers: ["Es war einmal …", "Gestern früh …", "Liebe Oma …", "Hallo zusammen …"], correct: 0,
                    explanation: "Viele Märchen beginnen mit „Es war einmal“."
                },
                {
                    id: "lvk3l1_l2", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "leicht", points: 10,
                    question: "In welcher Textart sprechen Tiere, und es gibt eine Lehre?", answers: ["Fabel", "Sachtext", "Rezept", "Brief"], correct: 0,
                    explanation: "In Fabeln sprechen Tiere."
                },
                {
                    id: "lvk3l1_l3", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "leicht", points: 10,
                    question: "Was macht ein Sachtext?", answers: ["Er informiert.", "Er reimt sich.", "Er zaubert.", "Er erfindet."], correct: 0,
                    explanation: "Sachtexte informieren über echte Dinge."
                },
                {
                    id: "lvk3l1_l4", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "leicht", points: 10,
                    question: "Wie nennt man eine Zeile im Gedicht?", answers: ["Vers", "Strophe", "Absatz", "Kapitel"], correct: 0,
                    explanation: "Eine Gedichtzeile heißt Vers."
                }
            ],
            mittel: [
                {
                    id: "lvk3l1_m1", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Welche Figur kommt typischerweise im Märchen vor?", answers: ["eine Hexe", "ein Polizist", "ein Arzt", "ein Lehrer"], correct: 0,
                    explanation: "Hexen, Feen und Zauberer gehören ins Märchen."
                },
                {
                    id: "lvk3l1_m2", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was ist eine Strophe?", answers: ["mehrere Verse zusammen", "ein einzelnes Wort", "ein Reimwort", "die Überschrift"], correct: 0,
                    explanation: "Mehrere Verse bilden eine Strophe."
                },
                {
                    id: "lvk3l1_m3", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Welches Tier ist in Fabeln oft schlau und listig?", answers: ["der Fuchs", "der Esel", "das Schaf", "die Gans"], correct: 0,
                    explanation: "Der Fuchs gilt in Fabeln als schlau."
                },
                {
                    id: "lvk3l1_m4", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Welcher Text ist ein Sachtext?", answers: ["Wie Igel überwintern", "Der Froschkönig", "Die drei Schweinchen", "Hänsel und Gretel"], correct: 0,
                    explanation: "Er informiert über echte Igel."
                }
            ],
            schwer: [
                {
                    id: "lvk3l1_s1", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "schwer", points: 10,
                    question: "Was ist die Lehre einer Fabel?", answers: ["ein Rat fürs Leben", "die erste Zeile", "ein lustiger Titel", "ein Zauberspruch"], correct: 0,
                    explanation: "Die Lehre sagt, was man lernen soll."
                },
                {
                    id: "lvk3l1_s2", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "schwer", points: 10,
                    question: "Was reimt sich auf 'Haus'?", answers: ["Maus", "Hose", "Hase", "Haut"], correct: 0,
                    explanation: "Haus – Maus."
                },
                {
                    id: "lvk3l1_s3", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "schwer", points: 10,
                    question: "Welches Merkmal hat ein Märchen NICHT?", answers: ["genaue Jahreszahlen", "Zauberei", "sprechende Tiere", "ein gutes Ende"], correct: 0,
                    explanation: "Märchen spielen „einmal“, nicht in einem genauen Jahr."
                },
                {
                    id: "lvk3l1_s4", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "schwer", points: 10,
                    question: "Woran erkennst du einen Sachtext?", answers: ["an Fakten", "an Zaubersprüchen", "an Reimen", "an Fabeltieren"], correct: 0,
                    explanation: "Sachtexte enthalten Fakten."
                }
            ]
        },
        test: [
                {
                    id: "lvk3l1_t1", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Wie endet ein Märchen meistens?", answers: ["gut", "traurig", "gar nicht", "mit einer Frage"], correct: 0,
                    explanation: "Im Märchen siegt am Ende das Gute."
                },
                {
                    id: "lvk3l1_t2", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Wie heißt eine Gruppe von Versen im Gedicht?", answers: ["Strophe", "Kapitel", "Absatz", "Seite"], correct: 0,
                    explanation: "Mehrere Verse bilden eine Strophe."
                },
                {
                    id: "lvk3l1_t3", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Wer lässt in 'Der Fuchs und der Rabe' den Käse fallen?", answers: ["der Rabe", "der Fuchs", "die Eule", "der Bär"], correct: 0,
                    explanation: "Der Rabe will singen – und der Käse fällt."
                },
                {
                    id: "lvk3l1_t4", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Welcher Text informiert über echte Dinge?", answers: ["ein Lexikon-Artikel", "ein Märchen", "eine Fabel", "ein Reimgedicht"], correct: 0,
                    explanation: "Ein Lexikon-Artikel ist ein Sachtext."
                },
                {
                    id: "lvk3l1_t5", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was reimt sich auf 'Sonne'?", answers: ["Tonne", "Sohn", "Sand", "Seife"], correct: 0,
                    explanation: "Sonne – Tonne."
                },
                {
                    id: "lvk3l1_t6", category: "kurs_lv_k3_l1", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "In welchem Märchen frisst der Wolf die Großmutter?", answers: ["Rotkäppchen", "Frau Holle", "Rapunzel", "Aschenputtel"], correct: 0,
                    explanation: "Das passiert in Rotkäppchen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "lv_k3_l2", kurs: "lesen_k3", order: 2, icon: "🔎",
        title: "Lesetipps und W-Fragen", kurz: "Wer? Was? Wann? Wo? Warum?",
        erklaerung: {
            intro: "So verstehst du Texte besser: 1. <b>Überschrift</b> lesen – worum geht es? 2. Text lesen und <b>Schlüsselwörter</b> markieren. 3. <b>W-Fragen</b> stellen: Wer? Was? Wann? Wo? Warum? 4. Jeden Abschnitt in einem Satz zusammenfassen.",
            beispiele: ["Wer? – Personen",
                "Wo? – Ort",
                "Warum? – Grund"],
            merksatz: "Erst überfliegen, dann genau lesen, dann W-Fragen beantworten."
        },
        uebung: {
            leicht: [
                {
                    id: "lvk3l2_l1", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "leicht", points: 10,
                    question: "Was verrät die Überschrift?", answers: ["worum es geht", "wie lang der Text ist", "wer ihn liest", "wann er endet"], correct: 0,
                    explanation: "Die Überschrift sagt, worum es geht."
                },
                {
                    id: "lvk3l2_l2", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "leicht", points: 10,
                    question: "Welche Frage fragt nach dem Ort?", answers: ["Wo?", "Wer?", "Wann?", "Warum?"], correct: 0,
                    explanation: "Wo? fragt nach dem Ort."
                },
                {
                    id: "lvk3l2_l3", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "leicht", points: 10,
                    question: "Welche Frage fragt nach dem Grund?", answers: ["Warum?", "Wo?", "Wer?", "Was?"], correct: 0,
                    explanation: "Warum? fragt nach dem Grund."
                },
                {
                    id: "lvk3l2_l4", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "leicht", points: 10,
                    question: "Was markierst du beim Lesen?", answers: ["Schlüsselwörter", "jedes Wort", "nur Artikel", "die Seitenzahl"], correct: 0,
                    explanation: "Schlüsselwörter sind die wichtigsten Wörter."
                }
            ],
            mittel: [
                {
                    id: "lvk3l2_m1", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "'Weil es regnete, blieb Ina zu Hause.' Warum blieb Ina zu Hause?", answers: ["Es regnete.", "Sie war krank.", "Es war Nacht.", "Sie war müde."], correct: 0,
                    explanation: "Der Grund steht nach 'weil'."
                },
                {
                    id: "lvk3l2_m2", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "'Am Montag fuhr Ben nach Köln.' Wann fuhr Ben?", answers: ["am Montag", "nach Köln", "mit dem Zug", "am Sonntag"], correct: 0,
                    explanation: "Am Montag ist die Zeitangabe."
                },
                {
                    id: "lvk3l2_m3", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "'Der Igel frisst Käfer, aber keine Äpfel.' Was frisst er?", answers: ["Käfer", "Äpfel", "Birnen", "Brot"], correct: 0,
                    explanation: "Käfer frisst er – Äpfel nicht."
                },
                {
                    id: "lvk3l2_m4", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was ist ein Schlüsselwort?", answers: ["ein wichtiges Wort", "ein langes Wort", "ein Wort mit S", "ein Fremdwort"], correct: 0,
                    explanation: "Schlüsselwörter tragen die wichtigste Information."
                }
            ],
            schwer: [
                {
                    id: "lvk3l2_s1", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "schwer", points: 10,
                    question: "'Lea lachte, weil der Hund ihren Hut trug.' Wer trug den Hut?", answers: ["der Hund", "Lea", "niemand", "die Katze"], correct: 0,
                    explanation: "Der Hund trug Leas Hut."
                },
                {
                    id: "lvk3l2_s2", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "schwer", points: 10,
                    question: "Was machst du nach dem Lesen eines Abschnitts?", answers: ["kurz zusammenfassen", "sofort weiterblättern", "Bilder ausmalen", "das Buch schließen"], correct: 0,
                    explanation: "Eine kurze Zusammenfassung prüft, ob du es verstanden hast."
                },
                {
                    id: "lvk3l2_s3", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "schwer", points: 10,
                    question: "'Es war kalt, aber nicht windig.' Wie war das Wetter?", answers: ["kalt", "windig", "heiß", "neblig"], correct: 0,
                    explanation: "Kalt – aber nicht windig."
                },
                {
                    id: "lvk3l2_s4", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "schwer", points: 10,
                    question: "Was bedeutet 'überfliegen' beim Lesen?", answers: ["schnell durchschauen", "Wort für Wort lesen", "laut vorlesen", "rückwärts lesen"], correct: 0,
                    explanation: "Beim Überfliegen schaut man schnell über den Text."
                }
            ]
        },
        test: [
                {
                    id: "lvk3l2_t1", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Welche Frage fragt nach der Zeit?", answers: ["Wann?", "Wo?", "Wer?", "Warum?"], correct: 0,
                    explanation: "Wann? fragt nach der Zeit."
                },
                {
                    id: "lvk3l2_t2", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "'Mia schenkt Opa ein Bild.' Wem schenkt Mia das Bild?", answers: ["Opa", "Mia", "Oma", "dem Hund"], correct: 0,
                    explanation: "Opa bekommt das Bild."
                },
                {
                    id: "lvk3l2_t3", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "'Im Herbst fallen Blätter, im Frühling wachsen sie.' Wann fallen sie?", answers: ["im Herbst", "im Frühling", "im Sommer", "im Winter"], correct: 0,
                    explanation: "Im Herbst fallen sie, im Frühling wachsen sie."
                },
                {
                    id: "lvk3l2_t4", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was hilft, einen Text zu verstehen?", answers: ["W-Fragen stellen", "schneller lesen", "Wörter zählen", "Bilder übermalen"], correct: 0,
                    explanation: "W-Fragen helfen beim Verstehen."
                },
                {
                    id: "lvk3l2_t5", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was steht ganz oben über einem Text?", answers: ["die Überschrift", "das Schlusswort", "die Lehre am Ende", "der letzte Reim"], correct: 0,
                    explanation: "Ganz oben steht die Überschrift."
                },
                {
                    id: "lvk3l2_t6", category: "kurs_lv_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "'Wir bauen keine Sandburg, sondern einen Schneemann.' Was bauen wir?", answers: ["einen Schneemann", "eine Sandburg", "ein Baumhaus", "ein Vogelhaus"], correct: 0,
                    explanation: "Einen Schneemann – statt einer Sandburg."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "lv_k3_l3", kurs: "lesen_k3", order: 3, icon: "💬",
        title: "Sprichwörter und Redewendungen", kurz: "Was ist eigentlich gemeint?",
        erklaerung: {
            intro: "<b>Sprichwörter</b> sind alte Weisheiten, zum Beispiel: „Aller Anfang ist schwer.“ <b>Redewendungen</b> meinen etwas anderes, als die Wörter sagen: „Tomaten auf den Augen haben“ heißt, etwas nicht sehen.",
            beispiele: ["Die Ohren spitzen – genau zuhören",
                "Den Kopf in den Sand stecken – nicht hinschauen wollen",
                "Lügen haben kurze Beine – Lügen kommen raus"],
            merksatz: "Redewendungen nicht wörtlich nehmen – frag dich: Was ist eigentlich gemeint?"
        },
        uebung: {
            leicht: [
                {
                    id: "lvk3l3_l1", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "leicht", points: 10,
                    question: "Was bedeutet 'die Ohren spitzen'?", answers: ["genau zuhören", "Ohren schneiden", "sehr müde sein", "laut lachen"], correct: 0,
                    explanation: "Wer die Ohren spitzt, hört genau zu."
                },
                {
                    id: "lvk3l3_l2", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "leicht", points: 10,
                    question: "Was bedeutet 'Tomaten auf den Augen haben'?", answers: ["etwas nicht sehen", "Gemüse essen", "rote Augen haben", "müde sein"], correct: 0,
                    explanation: "Man übersieht etwas Offensichtliches."
                },
                {
                    id: "lvk3l3_l3", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "leicht", points: 10,
                    question: "Was bedeutet 'jemandem die Daumen drücken'?", answers: ["Glück wünschen", "ihm wehtun", "ihn festhalten", "mit ihm schimpfen"], correct: 0,
                    explanation: "Daumen drücken heißt Glück wünschen."
                },
                {
                    id: "lvk3l3_l4", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "leicht", points: 10,
                    question: "Was bedeutet 'kinderleicht'?", answers: ["sehr einfach", "sehr schwer", "für Babys", "sehr klein"], correct: 0,
                    explanation: "Kinderleicht heißt ganz einfach."
                }
            ],
            mittel: [
                {
                    id: "lvk3l3_m1", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'Morgenstund hat Gold im Mund'?", answers: ["Früh aufstehen lohnt sich.", "Morgens Gold suchen.", "Zähne putzen ist wichtig.", "Frühstück ist teuer."], correct: 0,
                    explanation: "Wer früh anfängt, schafft viel."
                },
                {
                    id: "lvk3l3_m2", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'den Kopf in den Sand stecken'?", answers: ["nicht hinschauen wollen", "im Sand spielen", "sich im Zoo verstecken", "Sand essen"], correct: 0,
                    explanation: "Man will ein Problem nicht sehen."
                },
                {
                    id: "lvk3l3_m3", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'Hals über Kopf'?", answers: ["sehr eilig", "kopfüber turnen", "Halsweh haben", "sehr langsam"], correct: 0,
                    explanation: "Hals über Kopf heißt überstürzt, sehr eilig."
                },
                {
                    id: "lvk3l3_m4", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'auf Wolke sieben schweben'?", answers: ["sehr glücklich sein", "fliegen können", "müde sein", "im Regen stehen"], correct: 0,
                    explanation: "Man ist überglücklich."
                }
            ],
            schwer: [
                {
                    id: "lvk3l3_s1", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "schwer", points: 10,
                    question: "Was bedeutet 'Wer andern eine Grube gräbt, fällt selbst hinein'?", answers: ["Gemeinheit fällt zurück.", "Graben ist gefährlich.", "Man soll Löcher zuschütten.", "Gruben sind tief."], correct: 0,
                    explanation: "Wer anderen schaden will, schadet sich oft selbst."
                },
                {
                    id: "lvk3l3_s2", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "schwer", points: 10,
                    question: "Was bedeutet 'etwas auf die lange Bank schieben'?", answers: ["etwas aufschieben", "Möbel rücken", "lange sitzen", "Bank fahren"], correct: 0,
                    explanation: "Man erledigt etwas immer später."
                },
                {
                    id: "lvk3l3_s3", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "schwer", points: 10,
                    question: "Was bedeutet 'Ende gut, alles gut'?", answers: ["Ein gutes Ende zählt.", "Alles ist schlecht.", "Das Buch ist aus.", "Man soll früh enden."], correct: 0,
                    explanation: "Wenn es gut ausgeht, ist der Ärger vergessen."
                },
                {
                    id: "lvk3l3_s4", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "schwer", points: 10,
                    question: "Was bedeutet 'Lügen haben kurze Beine'?", answers: ["Lügen kommen raus.", "Lügner sind klein.", "Lügen laufen weg.", "Beine sind kurz."], correct: 0,
                    explanation: "Lügen werden meist schnell entdeckt."
                }
            ]
        },
        test: [
                {
                    id: "lvk3l3_t1", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'jemandem einen Bären aufbinden'?", answers: ["ihn anlügen", "ihm ein Tier schenken", "ihn festbinden", "ihm helfen"], correct: 0,
                    explanation: "Man erzählt jemandem eine Lüge."
                },
                {
                    id: "lvk3l3_t2", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'Ich verstehe nur Bahnhof'?", answers: ["Ich verstehe nichts.", "Ich will Zug fahren.", "Ich bin am Bahnhof.", "Ich höre schlecht."], correct: 0,
                    explanation: "Man versteht gar nichts."
                },
                {
                    id: "lvk3l3_t3", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'Aller Anfang ist schwer'?", answers: ["Neues ist erst schwierig.", "Anfangen ist verboten.", "Alles ist schwer.", "Am Anfang ist es leicht."], correct: 0,
                    explanation: "Am Anfang fällt Neues schwer."
                },
                {
                    id: "lvk3l3_t4", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'die Nase voll haben'?", answers: ["genug von etwas haben", "einen Schnupfen haben", "sehr viel riechen", "sehr neugierig sein"], correct: 0,
                    explanation: "Man hat genug und keine Lust mehr."
                },
                {
                    id: "lvk3l3_t5", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'mit dem Kopf durch die Wand wollen'?", answers: ["stur sein", "stark sein", "Wände bauen", "Kopfweh haben"], correct: 0,
                    explanation: "Man will etwas unbedingt durchsetzen."
                },
                {
                    id: "lvk3l3_t6", category: "kurs_lv_k3_l3", area: "schule", grade: 3,
                    subject: "deutsch", topic: "leseverstaendnis_k3", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'Viele Köche verderben den Brei'?", answers: ["Zu viele Helfer stören.", "Köche kochen schlecht.", "Brei schmeckt nicht.", "Kochen ist schwer."], correct: 0,
                    explanation: "Wenn zu viele mitreden, klappt es nicht."
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
        window.DEUTSCH_K3_KURSE = extraKurse;
        window.DEUTSCH_K3_LEKTIONEN = extraLektionen;
    }
})();
