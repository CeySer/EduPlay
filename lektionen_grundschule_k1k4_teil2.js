// Lektionen Grundschule Teil 2
(function () {
    const extraKurse = [
        { id: "anlaute_k1", title: "Anlaute hören", icon: "👂", grade: 1, subject: "deutsch", beschreibung: "Den ersten Laut im Wort sicher erkennen." },
        { id: "silben_k1", title: "Silben klatschen", icon: "👏", grade: 1, subject: "deutsch", beschreibung: "Wörter in Silben zerlegen." },
        { id: "uhr_viertel_k2", title: "Uhr: Halbe und Viertel", icon: "🕐", grade: 2, subject: "mathe", beschreibung: "Halbe Stunden und Viertelstunden lesen." }
    ];
    const extraLektionen = [
    {
        id: "anl_k1_l1", kurs: "anlaute_k1", order: 1, icon: "👂",
        title: "Erster Laut", kurz: "M, A, S, T …",
        erklaerung: {
            intro: "Der <b>Anlaut</b> ist der erste Laut im Wort. Bei <b>Maus</b> hörst du am Anfang <b>M</b>. Bei <b>Auto</b> hörst du <b>Au</b>.",
            beispiele: ["Maus → M",
                "Sonne → S",
                "Auto → Au (kein M)"],
            merksatz: "Mund zu: ersten Laut ganz langsam sagen."
        },
        uebung: { leicht: [
                {
                    id: "anlk1_l1", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welcher Anlaut steckt in Maus?", answers: ["M", "S", "T", "L"], correct: 0,
                    explanation: "Maus beginnt mit M."
                },
                {
                    id: "anlk1_l2", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welcher Anlaut steckt in Sonne?", answers: ["S", "M", "B", "K"], correct: 0,
                    explanation: "Sonne beginnt mit S."
                },
                {
                    id: "anlk1_l3", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welcher Anlaut steckt in Ball?", answers: ["B", "P", "M", "T"], correct: 0,
                    explanation: "Ball beginnt mit B."
                },
                {
                    id: "anlk1_l4", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Welcher Anlaut steckt in Teller?", answers: ["T", "D", "K", "L"], correct: 0,
                    explanation: "Teller beginnt mit T."
                }
            ], mittel: [
                {
                    id: "anlk1_m1", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Auto beginnt mit …", answers: ["Au", "M", "O allein", "T"], correct: 0,
                    explanation: "Au wie Auto."
                },
                {
                    id: "anlk1_m2", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Apfel und Ameise haben denselben Anlaut …", answers: ["A", "M", "P", "S"], correct: 0,
                    explanation: "Beide mit A."
                },
                {
                    id: "anlk1_m3", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welches Wort beginnt wie Sonne?", answers: ["Saft", "Maus", "Ball", "Tisch"], correct: 0,
                    explanation: "Saft und Sonne: S."
                },
                {
                    id: "anlk1_m4", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Nase beginnt mit …", answers: ["N", "M", "S", "T"], correct: 0,
                    explanation: "Nase → N."
                }
            ], schwer: [
                {
                    id: "anlk1_s1", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welche zwei Wörter passen zusammen (gleicher Anlaut)?", answers: ["Mond und Mütze", "Mond und Sonne", "Ball und Sonne", "Tisch und Maus"], correct: 0,
                    explanation: "Mond und Mütze: M."
                },
                {
                    id: "anlk1_s2", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Ofen beginnt mit …", answers: ["O", "U", "A", "I"], correct: 0,
                    explanation: "Ofen → O."
                },
                {
                    id: "anlk1_s3", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welches Wort beginnt nicht mit M?", answers: ["Sonne", "Maus", "Mond", "Mütze"], correct: 0,
                    explanation: "Sonne beginnt mit S."
                },
                {
                    id: "anlk1_s4", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Ente und Esel: Anlaut?", answers: ["E", "A", "I", "O"], correct: 0,
                    explanation: "Beide mit E."
                }
            ] },
        test: [
                {
                    id: "anlk1_t1", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Maus Anlaut?", answers: ["M", "S", "T", "B"], correct: 0,
                    explanation: "M."
                },
                {
                    id: "anlk1_t2", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Sonne Anlaut?", answers: ["S", "M", "N", "T"], correct: 0,
                    explanation: "S."
                },
                {
                    id: "anlk1_t3", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Ball Anlaut?", answers: ["B", "P", "M", "L"], correct: 0,
                    explanation: "B."
                },
                {
                    id: "anlk1_t4", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Tisch Anlaut?", answers: ["T", "D", "S", "K"], correct: 0,
                    explanation: "T."
                },
                {
                    id: "anlk1_t5", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Nase Anlaut?", answers: ["N", "M", "S", "A"], correct: 0,
                    explanation: "N."
                },
                {
                    id: "anlk1_t6", category: "kurs_anl_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Mond und Mütze?", answers: ["gleicher Anlaut M", "verschiedene Anlaute", "beide S", "beide T"], correct: 0,
                    explanation: "M und M."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "sil_k1_l1", kurs: "silben_k1", order: 1, icon: "👏",
        title: "Silben klatschen", kurz: "Ma-ma, So-nne",
        erklaerung: {
            intro: "Eine <b>Silbe</b> ist ein Sprechschlag. Du kannst dazu klatschen. <b>Ma-ma</b> hat zwei Silben. <b>Baum</b> hat eine.",
            beispiele: ["Mama → Ma-ma (2)",
                "Sonne → Son-ne (2)",
                "Auto → Au-to (2)",
                "Bus → 1 Silbe"],
            merksatz: "Klatschen: so viele Schläge wie Silben."
        },
        uebung: { leicht: [
                {
                    id: "silk1_l1", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "leicht", points: 10,
                    question: "Wie viele Silben hat Mama?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Ma-ma."
                },
                {
                    id: "silk1_l2", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "leicht", points: 10,
                    question: "Wie viele Silben hat Bus?", answers: ["1", "2", "3", "4"], correct: 0,
                    explanation: "Bus ist eine Silbe."
                },
                {
                    id: "silk1_l3", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "leicht", points: 10,
                    question: "Wie viele Silben hat Sonne?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Son-ne."
                },
                {
                    id: "silk1_l4", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "leicht", points: 10,
                    question: "Wie viele Silben hat Auto?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Au-to."
                }
            ], mittel: [
                {
                    id: "silk1_m1", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Wie viele Silben hat Banane?", answers: ["3", "2", "1", "4"], correct: 0,
                    explanation: "Ba-na-ne."
                },
                {
                    id: "silk1_m2", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Wie viele Silben hat Schule?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Schu-le."
                },
                {
                    id: "silk1_m3", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Wie viele Silben hat Tisch?", answers: ["1", "2", "3", "4"], correct: 0,
                    explanation: "Tisch = 1."
                },
                {
                    id: "silk1_m4", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Wie viele Silben hat Fenster?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Fens-ter."
                }
            ], schwer: [
                {
                    id: "silk1_s1", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "schwer", points: 10,
                    question: "Welches Wort hat 3 Silben?", answers: ["Banane", "Mama", "Bus", "Tisch"], correct: 0,
                    explanation: "Ba-na-ne."
                },
                {
                    id: "silk1_s2", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "schwer", points: 10,
                    question: "Welches Wort hat nur 1 Silbe?", answers: ["Baum", "Mama", "Sonne", "Auto"], correct: 0,
                    explanation: "Baum."
                },
                {
                    id: "silk1_s3", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "schwer", points: 10,
                    question: "Computer hat …", answers: ["3 Silben", "1 Silbe", "2 Silben", "5 Silben"], correct: 0,
                    explanation: "Com-pu-ter."
                },
                {
                    id: "silk1_s4", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "schwer", points: 10,
                    question: "Oma und Opa haben je …", answers: ["2 Silben", "1 Silbe", "3 Silben", "4 Silben"], correct: 0,
                    explanation: "O-ma, O-pa."
                }
            ] },
        test: [
                {
                    id: "silk1_t1", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Mama Silben?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "2."
                },
                {
                    id: "silk1_t2", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Bus Silben?", answers: ["1", "2", "3", "4"], correct: 0,
                    explanation: "1."
                },
                {
                    id: "silk1_t3", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Sonne Silben?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "2."
                },
                {
                    id: "silk1_t4", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Banane Silben?", answers: ["3", "2", "1", "4"], correct: 0,
                    explanation: "3."
                },
                {
                    id: "silk1_t5", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Tisch Silben?", answers: ["1", "2", "3", "4"], correct: 0,
                    explanation: "1."
                },
                {
                    id: "silk1_t6", category: "kurs_sil_k1_l1", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Schule Silben?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "2."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "uhr_k2_l1", kurs: "uhr_viertel_k2", order: 1, icon: "🕐",
        title: "Halbe und Viertel", kurz: "3:00, 3:15, 3:30, 3:45",
        erklaerung: {
            intro: "Die Uhr hat 60 Minuten. <b>Halb</b> ist 30 Minuten. <b>Viertel nach</b> ist 15 Minuten nach. <b>Viertel vor</b> ist 15 Minuten vor der nächsten Stunde (also :45).",
            beispiele: ["3:00 = genau 3 Uhr",
                "3:15 = Viertel nach 3",
                "3:30 = halb 4",
                "3:45 = Viertel vor 4"],
            merksatz: "15 = Viertel nach, 30 = halb (nächste Stunde), 45 = Viertel vor."
        },
        uebung: { leicht: [
                {
                    id: "uhrk2_l1", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "leicht", points: 10,
                    question: "3:00 heißt …", answers: ["genau 3 Uhr", "halb 3", "Viertel nach 3", "Viertel vor 3"], correct: 0,
                    explanation: "Ganze Stunde."
                },
                {
                    id: "uhrk2_l2", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "leicht", points: 10,
                    question: "3:15 heißt …", answers: ["Viertel nach 3", "halb 3", "genau 3", "Viertel vor 3"], correct: 0,
                    explanation: "15 Minuten = Viertel nach."
                },
                {
                    id: "uhrk2_l3", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "leicht", points: 10,
                    question: "3:30 heißt …", answers: ["halb 4", "halb 3", "Viertel nach 3", "genau 4"], correct: 0,
                    explanation: "Halb zeigt auf die nächste Stunde."
                },
                {
                    id: "uhrk2_l4", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "leicht", points: 10,
                    question: "3:45 heißt …", answers: ["Viertel vor 4", "Viertel nach 3", "halb 3", "genau 3"], correct: 0,
                    explanation: "45 = Viertel vor der nächsten."
                }
            ], mittel: [
                {
                    id: "uhrk2_m1", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "Halb 5 ist …", answers: ["4:30", "5:30", "5:00", "4:00"], correct: 0,
                    explanation: "Halb 5 = 30 Minuten nach 4."
                },
                {
                    id: "uhrk2_m2", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "Viertel nach 2 ist …", answers: ["2:15", "2:45", "2:30", "3:15"], correct: 0,
                    explanation: "Viertel nach = :15."
                },
                {
                    id: "uhrk2_m3", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "Viertel vor 7 ist …", answers: ["6:45", "7:15", "7:45", "6:15"], correct: 0,
                    explanation: "Viertel vor 7 = 6:45."
                },
                {
                    id: "uhrk2_m4", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "2:30 in Worten?", answers: ["halb 3", "halb 2", "Viertel nach 2", "genau 2"], correct: 0,
                    explanation: "halb nächste Stunde."
                }
            ], schwer: [
                {
                    id: "uhrk2_s1", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "schwer", points: 10,
                    question: "Wie viele Minuten sind ein Viertel?", answers: ["15", "30", "45", "60"], correct: 0,
                    explanation: "60:4=15."
                },
                {
                    id: "uhrk2_s2", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "schwer", points: 10,
                    question: "Wie viele Minuten sind eine halbe Stunde?", answers: ["30", "15", "45", "20"], correct: 0,
                    explanation: "60:2=30."
                },
                {
                    id: "uhrk2_s3", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "schwer", points: 10,
                    question: "Von 4:00 bis 4:45 sind … Minuten.", answers: ["45", "15", "30", "60"], correct: 0,
                    explanation: "Eine ganze Stunde minus Viertel = 45."
                },
                {
                    id: "uhrk2_s4", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "schwer", points: 10,
                    question: "5:15 ist dasselbe wie …", answers: ["Viertel nach 5", "Viertel vor 5", "halb 5", "genau 6"], correct: 0,
                    explanation: " :15 = Viertel nach."
                }
            ] },
        test: [
                {
                    id: "uhrk2_t1", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "4:00 =", answers: ["genau 4 Uhr", "halb 4", "Viertel nach 4", "Viertel vor 4"], correct: 0,
                    explanation: "ganze Stunde."
                },
                {
                    id: "uhrk2_t2", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "4:15 =", answers: ["Viertel nach 4", "halb 4", "Viertel vor 4", "genau 5"], correct: 0,
                    explanation: ":15."
                },
                {
                    id: "uhrk2_t3", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "4:30 =", answers: ["halb 5", "halb 4", "Viertel nach 4", "genau 4"], correct: 0,
                    explanation: "halb nächste."
                },
                {
                    id: "uhrk2_t4", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "4:45 =", answers: ["Viertel vor 5", "Viertel nach 4", "halb 4", "genau 4"], correct: 0,
                    explanation: ":45."
                },
                {
                    id: "uhrk2_t5", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "Halb 8 =", answers: ["7:30", "8:30", "8:00", "7:00"], correct: 0,
                    explanation: "halb 8 = 7:30."
                },
                {
                    id: "uhrk2_t6", category: "kurs_uhr_k2_l1", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "Viertel vor 2 =", answers: ["1:45", "2:15", "2:45", "1:15"], correct: 0,
                    explanation: "1:45."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "satzz_k1_l2", kurs: "satzzeichen_k1", order: 2, icon: "❗",
        title: "Mischen üben", kurz: ". ? ! im Mix",
        erklaerung: {
            intro: "Jetzt kommen die drei Zeichen durcheinander. Lies den Satz laut: klingt er wie eine <b>Aussage</b>, eine <b>Frage</b> oder ein <b>Ruf</b>?",
            beispiele: ["Ich bin müde. → Punkt",
                "Bist du müde? → Fragezeichen",
                "Ich bin so müde! → Ausrufezeichen"],
            merksatz: "Laut lesen: Aussage, Frage oder Ruf?"
        },
        uebung: { leicht: [
                {
                    id: "szk1l2_l1", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "leicht", points: 10,
                    question: "Oma backt Kuchen – Zeichen?", answers: [".", "?", "!", ","], correct: 0,
                    explanation: "Aussage → Punkt."
                },
                {
                    id: "szk1l2_l2", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "leicht", points: 10,
                    question: "Hast du Hunger – Zeichen?", answers: ["?", "!", ".", ","], correct: 0,
                    explanation: "Frage."
                },
                {
                    id: "szk1l2_l3", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "leicht", points: 10,
                    question: "Hilfe – Zeichen?", answers: ["!", "?", ".", ","], correct: 0,
                    explanation: "Ruf."
                },
                {
                    id: "szk1l2_l4", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "leicht", points: 10,
                    question: "Der Vogel fliegt – Zeichen?", answers: [".", "?", "!", ","], correct: 0,
                    explanation: "Aussage."
                }
            ], mittel: [
                {
                    id: "szk1l2_m1", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Darf ich mitspielen – Zeichen?", answers: ["?", "!", ".", ","], correct: 0,
                    explanation: "Frage."
                },
                {
                    id: "szk1l2_m2", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Raum das Zimmer auf – Zeichen?", answers: ["!", "?", ".", ","], correct: 0,
                    explanation: "Aufforderung."
                },
                {
                    id: "szk1l2_m3", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Heute ist Montag – Zeichen?", answers: [".", "?", "!", ","], correct: 0,
                    explanation: "Aussage."
                },
                {
                    id: "szk1l2_m4", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Wie schön – Zeichen?", answers: ["!", "?", ".", ","], correct: 0,
                    explanation: "Ausruf."
                }
            ], schwer: [
                {
                    id: "szk1l2_s1", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "schwer", points: 10,
                    question: "Sätze mit wer/wie/wo/was sind oft …", answers: ["Fragen", "nur Aussagen", "nur Brüche", "nur Nomen"], correct: 0,
                    explanation: "W-Wörter oft Frage."
                },
                {
                    id: "szk1l2_s2", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "schwer", points: 10,
                    question: "Ein Punkt sagt: der Satz ist …", answers: ["fertig und eine Aussage", "eine Frage", "immer ein Befehl", "ohne Sinn"], correct: 0,
                    explanation: "Aussage zu Ende."
                },
                {
                    id: "szk1l2_s3", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "schwer", points: 10,
                    question: "Zwei richtige Paare sind …", answers: ["Aussage=. und Frage=?", "Frage=. und Aussage=?", "Ruf=. nur", "alles Kommas"], correct: 0,
                    explanation: "Die Grundregel."
                },
                {
                    id: "szk1l2_s4", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "schwer", points: 10,
                    question: "„Komm her“ ohne Zeichen ist eher …", answers: ["ein Befehl", "eine Zahl", "ein Bruch", "eine Karte"], correct: 0,
                    explanation: "Aufforderung → !"
                }
            ] },
        test: [
                {
                    id: "szk1l2_t1", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Papa liest – Zeichen?", answers: [".", "?", "!", ","], correct: 0,
                    explanation: "Punkt."
                },
                {
                    id: "szk1l2_t2", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Kommst du mit – Zeichen?", answers: ["?", "!", ".", ","], correct: 0,
                    explanation: "Frage."
                },
                {
                    id: "szk1l2_t3", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Vorsicht – Zeichen?", answers: ["!", "?", ".", ","], correct: 0,
                    explanation: "Ruf."
                },
                {
                    id: "szk1l2_t4", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Wir malen – Zeichen?", answers: [".", "?", "!", ","], correct: 0,
                    explanation: "Punkt."
                },
                {
                    id: "szk1l2_t5", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Wo ist der Ball – Zeichen?", answers: ["?", "!", ".", ","], correct: 0,
                    explanation: "Frage."
                },
                {
                    id: "szk1l2_t6", category: "kurs_satzz_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "satzzeichen", difficulty: "mittel", points: 10,
                    question: "Sei vorsichtig – Zeichen?", answers: ["!", "?", ".", ","], correct: 0,
                    explanation: "Aufforderung."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "verd_k2_l2", kurs: "verdoppeln_k2", order: 2, icon: "✖️",
        title: "Im Sachtext", kurz: "Doppelt im Alltag",
        erklaerung: {
            intro: "Im Text heißt <b>doppelt so viele</b> mal 2. <b>Die Hälfte</b> heißt geteilt durch 2. Erst die Zahl finden, dann rechnen.",
            beispiele: ["Mia hat 6 Stifte, Tim hat doppelt so viele → 12.",
                "12 Kekse, die Hälfte essen → 6 bleiben nicht, 6 werden gegessen.",
                "Ein Hin- und Rückweg von 4 km ist 8 km."],
            merksatz: "Zahl suchen → mal 2 oder durch 2."
        },
        uebung: { leicht: [
                {
                    id: "vdk2l2_l1", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "leicht", points: 10,
                    question: "6 Stifte, doppelt so viele?", answers: ["12", "8", "10", "6"], correct: 0,
                    explanation: "6+6=12."
                },
                {
                    id: "vdk2l2_l2", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "leicht", points: 10,
                    question: "10 Kekse, die Hälfte?", answers: ["5", "4", "6", "2"], correct: 0,
                    explanation: "10:2=5."
                },
                {
                    id: "vdk2l2_l3", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "leicht", points: 10,
                    question: "4 km hin, gleicher Weg zurück. Zusammen?", answers: ["8 km", "4 km", "6 km", "2 km"], correct: 0,
                    explanation: "doppelt = 8."
                },
                {
                    id: "vdk2l2_l4", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "leicht", points: 10,
                    question: "8 Kinder, die Hälfte geht heim. Wie viele gehen?", answers: ["4", "2", "8", "6"], correct: 0,
                    explanation: "8:2=4."
                }
            ], mittel: [
                {
                    id: "vdk2l2_m1", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "mittel", points: 10,
                    question: "7 Murmeln, doppelt so viele dazu bekommt Lea. Lea hat dann?", answers: ["14", "12", "16", "7"], correct: 0,
                    explanation: "Das Doppelte von 7 ist 14."
                },
                {
                    id: "vdk2l2_m2", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "mittel", points: 10,
                    question: "20 Minuten, die Hälfte ist vorbei. Noch übrig?", answers: ["10", "15", "5", "20"], correct: 0,
                    explanation: "20:2=10."
                },
                {
                    id: "vdk2l2_m3", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "mittel", points: 10,
                    question: "9 Packungen, doppelt bestellen. Wie viele?", answers: ["18", "16", "12", "20"], correct: 0,
                    explanation: "9+9=18."
                },
                {
                    id: "vdk2l2_m4", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "mittel", points: 10,
                    question: "16 Seiten, die Hälfte gelesen. Ungelesen?", answers: ["8", "6", "10", "4"], correct: 0,
                    explanation: "16:2=8."
                }
            ], schwer: [
                {
                    id: "vdk2l2_s1", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "schwer", points: 10,
                    question: "Ein Hinweg 12 Minuten, zurück genauso. Gesamt?", answers: ["24 Minuten", "12 Minuten", "18 Minuten", "6 Minuten"], correct: 0,
                    explanation: "doppelt."
                },
                {
                    id: "vdk2l2_s2", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "schwer", points: 10,
                    question: "Ein Brett ist 18 cm, die Hälfte plus 3 cm sind?",
                    answers: ["12 cm","9 cm","15 cm","6 cm"], correct: 0,
                    explanation: "Hälfte von 18 ist 9, plus 3 sind 12."
                },
                {
                    id: "vdk2l2_s3", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "schwer", points: 10,
                    question: "5 Teams à 2 Kinder. Doppelt so viele Teams wären Kinder?", answers: ["20", "10", "15", "8"], correct: 0,
                    explanation: "5*2=10, doppelt Teams = 10 Teams *2 = 20."
                },
                {
                    id: "vdk2l2_s4", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "schwer", points: 10,
                    question: "Hälfte von 18 plus 1?", answers: ["10", "9", "8", "11"], correct: 0,
                    explanation: "9+1=10."
                }
            ] },
        test: [
                {
                    id: "vdk2l2_t1", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "mittel", points: 10,
                    question: "5, doppelt?", answers: ["10", "8", "12", "6"], correct: 0,
                    explanation: "10."
                },
                {
                    id: "vdk2l2_t2", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "mittel", points: 10,
                    question: "14, Hälfte?", answers: ["7", "6", "8", "5"], correct: 0,
                    explanation: "7."
                },
                {
                    id: "vdk2l2_t3", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "mittel", points: 10,
                    question: "9 Sticker doppelt?", answers: ["18", "16", "12", "20"], correct: 0,
                    explanation: "18."
                },
                {
                    id: "vdk2l2_t4", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "mittel", points: 10,
                    question: "12 Minuten Hälfte?", answers: ["6", "4", "8", "10"], correct: 0,
                    explanation: "6."
                },
                {
                    id: "vdk2l2_t5", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "mittel", points: 10,
                    question: "Hin 6 km, zurück gleich. Gesamt?", answers: ["12 km", "6 km", "8 km", "3 km"], correct: 0,
                    explanation: "12."
                },
                {
                    id: "vdk2l2_t6", category: "kurs_verd_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "verdoppeln", difficulty: "mittel", points: 10,
                    question: "16 geteilt durch 2?", answers: ["8", "6", "10", "4"], correct: 0,
                    explanation: "8."
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
})();
