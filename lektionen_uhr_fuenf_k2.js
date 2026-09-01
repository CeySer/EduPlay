// Uhr 5-Minuten – Klasse 2
(function () {
    const extraKurse = [
        { id: "uhr_fuenf_k2", title: "Uhr: 5-Minuten-Schritte", icon: "🕔", grade: 2, subject: "mathe", beschreibung: "Jede Markierung sind 5 Minuten. Von :05 bis :55 sicher lesen." }
    ];
    const extraLektionen = [
    {
        id: "uhr5_k2_l1", kurs: "uhr_fuenf_k2", order: 1, icon: "🕔",
        title: "Fünf-Minuten-Schritte", kurz: ":05 :10 :20 :25 …",
        erklaerung: {
            intro: "Die Uhr hat 12 große Zahlen. Von einer Zahl zur nächsten sind <b>5 Minuten</b>. Zahl × 5 = Minuten. Nach der vollen Stunde sagt man <b>nach</b>, nach halb oft <b>vor</b> der nächsten Stunde.",
            beispiele: [
                "Zeiger auf 1 → 5 Minuten",
                "Zeiger auf 2 → 10 Minuten",
                "Zeiger auf 5 → 25 Minuten",
                "2:50 = 10 vor 3"
            ],
            merksatz: "Zahl am Rand mal 5 = Minuten. Ab :35 eher „vor“ der nächsten Stunde."
        },
        uebung: {
            leicht: [
                { id: "u5k2_l1", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "leicht", points: 10, question: "Jede kleine Markierung an der Uhr sind oft … Minuten.", answers: ["5", "1 immer sichtbar", "15", "30"], correct: 0, explanation: "12 Marken · 5 = 60." },
                { id: "u5k2_l2", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "leicht", points: 10, question: "3:05 sagt man …", answers: ["5 nach 3", "5 vor 3", "halb 3", "Viertel nach 3"], correct: 0, explanation: ":05 = 5 nach." },
                { id: "u5k2_l3", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "leicht", points: 10, question: "3:10 sagt man …", answers: ["10 nach 3", "10 vor 3", "halb 4", "genau 3"], correct: 0, explanation: ":10 = 10 nach." },
                { id: "u5k2_l4", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "leicht", points: 10, question: "3:55 sagt man …", answers: ["5 vor 4", "5 nach 3", "5 vor 3", "halb 4"], correct: 0, explanation: ":55 = 5 vor der nächsten." }
            ],
            mittel: [
                { id: "u5k2_m1", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10, question: "4:20 ist …", answers: ["20 nach 4", "20 vor 4", "halb 4", "Viertel nach 4"], correct: 0, explanation: "20 Minuten nach 4." },
                { id: "u5k2_m2", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10, question: "4:40 ist …", answers: ["20 vor 5", "20 nach 4", "halb 5 genau", "Viertel vor 5"], correct: 0, explanation: "40 nach = 20 vor der nächsten." },
                { id: "u5k2_m3", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10, question: "7:25 ist …", answers: ["25 nach 7", "25 vor 7", "halb 7", "genau 8"], correct: 0, explanation: ":25 = 25 nach." },
                { id: "u5k2_m4", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10, question: "7:35 ist …", answers: ["25 vor 8", "25 nach 7", "halb 7", "5 nach 8"], correct: 0, explanation: ":35 = 25 vor der nächsten." }
            ],
            schwer: [
                { id: "u5k2_s1", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "schwer", points: 10, question: "Der Minutenzeiger auf der 4 bedeutet …", answers: ["20 Minuten", "4 Minuten", "40 Minuten", "5 Minuten"], correct: 0, explanation: "4 · 5 = 20." },
                { id: "u5k2_s2", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "schwer", points: 10, question: "Der Minutenzeiger auf der 8 bedeutet …", answers: ["40 Minuten", "8 Minuten", "20 Minuten", "45 Minuten"], correct: 0, explanation: "8 · 5 = 40." },
                { id: "u5k2_s3", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "schwer", points: 10, question: "Von 2:10 bis 2:25 sind … Minuten.", answers: ["15", "10", "20", "5"], correct: 0, explanation: "25-10=15." },
                { id: "u5k2_s4", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "schwer", points: 10, question: "Halb plus 5 Minuten: halb 6 plus 5 =", answers: ["5:35", "6:05", "5:25", "6:35"], correct: 0, explanation: "halb 6 = 5:30, plus 5 = 5:35." }
            ]
        },
        test: [
                { id: "u5k2_t1", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10, question: "6:05 =", answers: ["5 nach 6", "5 vor 6", "halb 6", "Viertel nach 6"], correct: 0, explanation: "5 nach." },
                { id: "u5k2_t2", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10, question: "6:10 =", answers: ["10 nach 6", "10 vor 6", "halb 7", "genau 6"], correct: 0, explanation: "10 nach." },
                { id: "u5k2_t3", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10, question: "6:50 =", answers: ["10 vor 7", "10 nach 6", "halb 7", "5 vor 7"], correct: 0, explanation: "50 = 10 vor." },
                { id: "u5k2_t4", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10, question: "Zeiger auf der 3 =", answers: ["15 Minuten", "3 Minuten", "30 Minuten", "45 Minuten"], correct: 0, explanation: "3·5=15." },
                { id: "u5k2_t5", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10, question: "Zeiger auf der 9 =", answers: ["45 Minuten", "9 Minuten", "15 Minuten", "40 Minuten"], correct: 0, explanation: "9·5=45." },
                { id: "u5k2_t6", category: "kurs_uhr5_k2_l1", area: "schule", grade: 2, subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10, question: "8:35 =", answers: ["25 vor 9", "25 nach 8 nur als :25", "halb 8", "genau 9"], correct: 0, explanation: ":35 = 25 vor 9." }
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
