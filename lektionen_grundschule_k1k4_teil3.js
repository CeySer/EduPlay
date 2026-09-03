// Grundschule L2 + Grafiken
(function () {
    const extraLektionen = [
    {
        id: "alltag_k1_l2", kurs: "alltag_k1", order: 2, icon: "🚦",
        title: "Ampel üben", kurz: "Rot und Grün",
        erklaerung: {
            intro: "Rot heißt immer <b>stehen bleiben</b>. Grün heißt <b>gehen</b>, aber erst schauen.",
            beispiele: [
                "Rot:<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='28' width='120' height='84' rx='16' fill='#1e293b'/><circle cx='70' cy='70' r='18' fill='#ef4444' stroke='#0f172a' stroke-width='3'/><circle cx='130' cy='70' r='18' fill='rgba(15,23,42,0.25)' stroke='#0f172a' stroke-width='3'/></svg>",
                "Grün:<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='28' width='120' height='84' rx='16' fill='#1e293b'/><circle cx='70' cy='70' r='18' fill='rgba(15,23,42,0.25)' stroke='#0f172a' stroke-width='3'/><circle cx='130' cy='70' r='18' fill='#22c55e' stroke='#0f172a' stroke-width='3'/></svg>"
            ],
            merksatz: "Erst schauen, dann gehen. Rot = Halt."
        },
        uebung: { leicht: [
                {
                    id: "altk1l2_l1", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "leicht", points: 10,
                    question: "Was bedeutet Rot?", answers: ["Halt", "rennen", "springen", "essen"], correct: 0,
                    explanation: "Rot = stehen.",
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='28' width='120' height='84' rx='16' fill='#1e293b'/><circle cx='70' cy='70' r='18' fill='#ef4444' stroke='#0f172a' stroke-width='3'/><circle cx='130' cy='70' r='18' fill='rgba(15,23,42,0.25)' stroke='#0f172a' stroke-width='3'/></svg>"
                },
                {
                    id: "altk1l2_l2", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "leicht", points: 10,
                    question: "Was bedeutet Grün?", answers: ["gehen dürfen", "liegen", "schlafen", "zählen"], correct: 0,
                    explanation: "Grün = gehen.",
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='28' width='120' height='84' rx='16' fill='#1e293b'/><circle cx='70' cy='70' r='18' fill='rgba(15,23,42,0.25)' stroke='#0f172a' stroke-width='3'/><circle cx='130' cy='70' r='18' fill='#22c55e' stroke='#0f172a' stroke-width='3'/></svg>"
                },
                {
                    id: "altk1l2_l3", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "leicht", points: 10,
                    question: "Vor der Straße sollst du …", answers: ["links und rechts schauen", "die Augen zu machen", "rennen ohne Blick", "die Ampel anmalen"], correct: 0,
                    explanation: "Immer schauen."
                },
                {
                    id: "altk1l2_l4", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "leicht", points: 10,
                    question: "Gelb an der Ampel heißt oft …", answers: ["Achtung, gleich rot", "immer rennen", "schlafen", "essen"], correct: 0,
                    explanation: "Achtung."
                }
            ], mittel: [
                {
                    id: "altk1l2_m1", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "mittel", points: 10,
                    question: "Was machst du am Zebrastreifen?", answers: ["Erst schauen, dann gehen", "Sofort losrennen", "Nur die Steine zählen", "Mit dem Rad drüberfahren"], correct: 0,
                    explanation: "Autos halten meistens – aber du schaust trotzdem nach links und rechts."
                },
                {
                    id: "altk1l2_m2", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "mittel", points: 10,
                    question: "Bei Rot gehst du …", answers: ["nicht", "sofort", "nur rückwärts", "nur hüpfend"], correct: 0,
                    explanation: "Nicht bei Rot."
                },
                {
                    id: "altk1l2_m3", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "mittel", points: 10,
                    question: "Wann kommt die Feuerwehr?", answers: ["Bei einem Feuer", "Bei einer Party", "Bei den Hausaufgaben", "Beim Einkaufen"], correct: 0,
                    explanation: "Die Feuerwehr rufst du bei Feuer – die Nummer ist 112."
                },
                {
                    id: "altk1l2_m4", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "mittel", points: 10,
                    question: "Wie sieht man dich im Dunkeln besser?", answers: ["Mit heller Kleidung", "Mit dunkler Jacke", "Mit Mütze im Gesicht", "Mit geschlossenen Augen"], correct: 0,
                    explanation: "Helle Sachen und Reflektoren fangen das Licht der Autos ein."
                }
            ], schwer: [
                {
                    id: "altk1l2_s1", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "schwer", points: 10,
                    question: "Warum erst schauen, dann gehen?", answers: ["weil Autos kommen können", "weil die Ampel hungrig ist", "weil 1x1 wartet", "weil Norden oben ist"], correct: 0,
                    explanation: "Sicherheit."
                },
                {
                    id: "altk1l2_s2", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "schwer", points: 10,
                    question: "Wer darf dir über die Straße helfen?", answers: ["Ein Erwachsener, den du kennst", "Ein Fremder mit dem Auto", "Ein anderes kleines Kind", "Ein Hund an der Leine"], correct: 0,
                    explanation: "Nur Menschen, die du kennst – niemals zu Fremden ins Auto steigen."
                },
                {
                    id: "altk1l2_s3", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "schwer", points: 10,
                    question: "Bei Grün trotzdem …", answers: ["kurz schauen", "die Augen zu", "liegen bleiben", "die Ampel küssen"], correct: 0,
                    explanation: "Schauen bleibt."
                },
                {
                    id: "altk1l2_s4", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "schwer", points: 10,
                    question: "Auf dem Gehweg fährt ein Fahrrad. Was tust du?", answers: ["Aufpassen und Platz machen", "Einfach weiterrennen", "Die Augen zumachen", "Vor das Rad springen"], correct: 0,
                    explanation: "Zur Seite gehen und schauen – so kommt ihr beide gut aneinander vorbei."
                }
            ] },
        test: [
                {
                    id: "altk1l2_t1", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "mittel", points: 10,
                    question: "Rot?", answers: ["Halt", "Los", "Essen", "Zählen"], correct: 0,
                    explanation: "Halt.",
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='28' width='120' height='84' rx='16' fill='#1e293b'/><circle cx='70' cy='70' r='18' fill='#ef4444' stroke='#0f172a' stroke-width='3'/><circle cx='130' cy='70' r='18' fill='rgba(15,23,42,0.25)' stroke='#0f172a' stroke-width='3'/></svg>"
                },
                {
                    id: "altk1l2_t2", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "mittel", points: 10,
                    question: "Grün?", answers: ["gehen dürfen", "Halt immer", "Schlafen", "Verstecken"], correct: 0,
                    explanation: "Gehen.",
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='28' width='120' height='84' rx='16' fill='#1e293b'/><circle cx='70' cy='70' r='18' fill='rgba(15,23,42,0.25)' stroke='#0f172a' stroke-width='3'/><circle cx='130' cy='70' r='18' fill='#22c55e' stroke='#0f172a' stroke-width='3'/></svg>"
                },
                {
                    id: "altk1l2_t3", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "mittel", points: 10,
                    question: "Vor der Straße?", answers: ["schauen", "rennen blind", "liegen", "zählen nur"], correct: 0,
                    explanation: "Schauen."
                },
                {
                    id: "altk1l2_t4", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "mittel", points: 10,
                    question: "Feuer?", answers: ["Feuerwehr", "Bäcker", "Zoo", "Mond"], correct: 0,
                    explanation: "Feuerwehr."
                },
                {
                    id: "altk1l2_t5", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "mittel", points: 10,
                    question: "Zebrastreifen: trotzdem …", answers: ["schauen", "Augen zu", "Ampel essen", "Steine zählen"], correct: 0,
                    explanation: "Schauen."
                },
                {
                    id: "altk1l2_t6", category: "kurs_alltag_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "alltag", difficulty: "mittel", points: 10,
                    question: "Bei Rot gehst du?", answers: ["nein", "ja immer", "nur rückwärts", "nur nachts"], correct: 0,
                    explanation: "Nein."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "anl_k1_l2", kurs: "anlaute_k1", order: 2, icon: "👂",
        title: "Anlaute mischen", kurz: "Welcher Laut?",
        erklaerung: {
            intro: "Hör nur den <b>ersten Laut</b>. Sonne und Saft starten gleich. Maus und Mond auch.",
            beispiele: [
                "Sonne + Saft = S",
                "Maus + Mond = M",
                "Ball + Baum = B"
            ],
            merksatz: "Ersten Laut langsam sagen."
        },
        uebung: { leicht: [
                {
                    id: "anlk1l2_l1", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Saft beginnt wie …", answers: ["Sonne", "Maus", "Ball", "Tisch"], correct: 0,
                    explanation: "S."
                },
                {
                    id: "anlk1l2_l2", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Mond beginnt wie …", answers: ["Maus", "Sonne", "Ball", "Auto"], correct: 0,
                    explanation: "M."
                },
                {
                    id: "anlk1l2_l3", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Baum beginnt wie …", answers: ["Ball", "Sonne", "Nase", "Ofen"], correct: 0,
                    explanation: "B."
                },
                {
                    id: "anlk1l2_l4", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "leicht", points: 10,
                    question: "Tür beginnt wie …", answers: ["Tisch", "Maus", "Sonne", "Ball"], correct: 0,
                    explanation: "T."
                }
            ], mittel: [
                {
                    id: "anlk1l2_m1", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Welches Wort passt nicht zu Maus?", answers: ["Sonne", "Mond", "Mütze", "Mama"], correct: 0,
                    explanation: "Sonne = S."
                },
                {
                    id: "anlk1l2_m2", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Fisch beginnt mit …", answers: ["F", "S", "M", "T"], correct: 0,
                    explanation: "F."
                },
                {
                    id: "anlk1l2_m3", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Kuchen beginnt mit …", answers: ["K", "S", "M", "A"], correct: 0,
                    explanation: "K."
                },
                {
                    id: "anlk1l2_m4", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Oma und Ofen – gleicher Anlaut?", answers: ["Ja, beide mit O", "Nein, S und M", "Nein, T und B", "Nein, A und U"], correct: 0,
                    explanation: "Beide Wörter fangen mit dem Laut O an."
                }
            ], schwer: [
                {
                    id: "anlk1l2_s1", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welche drei Wörter beginnen mit S?", answers: ["Sonne, Saft, See", "Maus, Mond, Mütze", "Ball, Baum, Bus", "Tisch, Tür, Tal"], correct: 0,
                    explanation: "Sonne, Saft und See fangen alle mit dem Laut S an."
                },
                {
                    id: "anlk1l2_s2", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welches startet mit A?", answers: ["Apfel", "Sonne", "Ball", "Mond"], correct: 0,
                    explanation: "Apfel."
                },
                {
                    id: "anlk1l2_s3", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Nuss und Nase haben …", answers: ["gleichen Anlaut N", "verschiedene Anlaute", "beide S", "beide T"], correct: 0,
                    explanation: "N."
                },
                {
                    id: "anlk1l2_s4", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "schwer", points: 10,
                    question: "Welches startet nicht mit B?", answers: ["Sonne", "Ball", "Baum", "Bus"], correct: 0,
                    explanation: "Sonne."
                }
            ] },
        test: [
                {
                    id: "anlk1l2_t1", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Saft wie?", answers: ["Sonne", "Maus", "Ball", "Tisch"], correct: 0,
                    explanation: "S."
                },
                {
                    id: "anlk1l2_t2", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Mond wie?", answers: ["Maus", "Sonne", "Tisch", "Auto"], correct: 0,
                    explanation: "M."
                },
                {
                    id: "anlk1l2_t3", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Baum wie?", answers: ["Ball", "Sonne", "Nase", "Ofen"], correct: 0,
                    explanation: "B."
                },
                {
                    id: "anlk1l2_t4", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Fisch Anlaut?", answers: ["F", "S", "M", "K"], correct: 0,
                    explanation: "F."
                },
                {
                    id: "anlk1l2_t5", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Apfel Anlaut?", answers: ["A", "O", "E", "I"], correct: 0,
                    explanation: "A."
                },
                {
                    id: "anlk1l2_t6", category: "kurs_anl_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "anlaute", difficulty: "mittel", points: 10,
                    question: "Kuchen Anlaut?", answers: ["K", "S", "M", "T"], correct: 0,
                    explanation: "K."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "sil_k1_l2", kurs: "silben_k1", order: 2, icon: "👏",
        title: "Mehr Silben", kurz: "3 Schläge",
        erklaerung: {
            intro: "Lange Wörter haben oft <b>drei Silben</b>. Klatsch langsam: Ba-na-ne.",
            beispiele: [
                "Banane = 3",
                "Computer = 3",
                "Schokolade = 4"
            ],
            merksatz: "Ein Klatscher pro Silbe."
        },
        uebung: { leicht: [
                {
                    id: "silk1l2_l1", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "leicht", points: 10,
                    question: "Banane?", answers: ["3", "1", "2", "5"], correct: 0,
                    explanation: "Ba-na-ne."
                },
                {
                    id: "silk1l2_l2", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "leicht", points: 10,
                    question: "Auto?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Au-to."
                },
                {
                    id: "silk1l2_l3", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "leicht", points: 10,
                    question: "Hut?", answers: ["1", "2", "3", "4"], correct: 0,
                    explanation: "Hut."
                },
                {
                    id: "silk1l2_l4", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "leicht", points: 10,
                    question: "Schule?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Schu-le."
                }
            ], mittel: [
                {
                    id: "silk1l2_m1", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Tomate?", answers: ["3", "2", "1", "4"], correct: 0,
                    explanation: "To-ma-te."
                },
                {
                    id: "silk1l2_m2", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Elefant?", answers: ["3", "2", "1", "4"], correct: 0,
                    explanation: "E-le-fant."
                },
                {
                    id: "silk1l2_m3", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Fenster?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Fens-ter."
                },
                {
                    id: "silk1l2_m4", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Schokolade?", answers: ["4", "2", "3", "1"], correct: 0,
                    explanation: "Scho-ko-la-de."
                }
            ], schwer: [
                {
                    id: "silk1l2_s1", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "schwer", points: 10,
                    question: "Welches hat 4 Silben?", answers: ["Schokolade", "Mama", "Bus", "Tisch"], correct: 0,
                    explanation: "4."
                },
                {
                    id: "silk1l2_s2", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "schwer", points: 10,
                    question: "Welches hat 1 Silbe?", answers: ["Brot", "Banane", "Schule", "Auto"], correct: 0,
                    explanation: "Brot."
                },
                {
                    id: "silk1l2_s3", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "schwer", points: 10,
                    question: "Kamera?", answers: ["3", "1", "2", "4"], correct: 0,
                    explanation: "Ka-me-ra."
                },
                {
                    id: "silk1l2_s4", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "schwer", points: 10,
                    question: "Oma + Opa zusammen Silben?", answers: ["4", "2", "3", "1"], correct: 0,
                    explanation: "2+2=4."
                }
            ] },
        test: [
                {
                    id: "silk1l2_t1", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Banane?", answers: ["3", "2", "1", "4"], correct: 0,
                    explanation: "3."
                },
                {
                    id: "silk1l2_t2", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Hut?", answers: ["1", "2", "3", "4"], correct: 0,
                    explanation: "1."
                },
                {
                    id: "silk1l2_t3", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Schule?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "2."
                },
                {
                    id: "silk1l2_t4", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Tomate?", answers: ["3", "2", "1", "4"], correct: 0,
                    explanation: "3."
                },
                {
                    id: "silk1l2_t5", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Brot?", answers: ["1", "2", "3", "4"], correct: 0,
                    explanation: "1."
                },
                {
                    id: "silk1l2_t6", category: "kurs_sil_k1_l2", area: "schule", grade: 1,
                    subject: "deutsch", topic: "silben", difficulty: "mittel", points: 10,
                    question: "Elefant?", answers: ["3", "2", "1", "4"], correct: 0,
                    explanation: "3."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enmini_k2_l2", kurs: "mini_english_k2", order: 2, icon: "🇬🇧",
        title: "Farben und Tiere", kurz: "red cat",
        erklaerung: {
            intro: "Farben: <b>red, blue, green, yellow</b>. Tiere: <b>cat, dog, bird, fish</b>. Satz: I see a red cat.",
            beispiele: [
                "red = rot",
                "blue = blau",
                "a cat = eine Katze"
            ],
            merksatz: "Farbe vor das Tier: a red cat."
        },
        uebung: { leicht: [
                {
                    id: "enk2l2_l1", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "leicht", points: 10,
                    question: "red heißt …", answers: ["rot", "blau", "grün", "gelb"], correct: 0,
                    explanation: "red = rot."
                },
                {
                    id: "enk2l2_l2", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "leicht", points: 10,
                    question: "blue heißt …", answers: ["blau", "rot", "grün", "gelb"], correct: 0,
                    explanation: "blue = blau."
                },
                {
                    id: "enk2l2_l3", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "leicht", points: 10,
                    question: "cat heißt …", answers: ["Katze", "Hund", "Vogel", "Fisch"], correct: 0,
                    explanation: "cat = Katze."
                },
                {
                    id: "enk2l2_l4", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "leicht", points: 10,
                    question: "dog heißt …", answers: ["Hund", "Katze", "Maus", "Fisch"], correct: 0,
                    explanation: "dog = Hund."
                }
            ], mittel: [
                {
                    id: "enk2l2_m1", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "mittel", points: 10,
                    question: "green heißt …", answers: ["grün", "rot", "blau", "gelb"], correct: 0,
                    explanation: "green."
                },
                {
                    id: "enk2l2_m2", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "mittel", points: 10,
                    question: "yellow heißt …", answers: ["gelb", "grün", "blau", "rot"], correct: 0,
                    explanation: "yellow."
                },
                {
                    id: "enk2l2_m3", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "mittel", points: 10,
                    question: "bird heißt …", answers: ["Vogel", "Hund", "Katze", "Fisch"], correct: 0,
                    explanation: "bird."
                },
                {
                    id: "enk2l2_m4", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "mittel", points: 10,
                    question: "I see a dog.", answers: ["Ich sehe einen Hund", "Ich bin ein Hund", "Ich esse", "Danke"], correct: 0,
                    explanation: "see = sehen."
                }
            ], schwer: [
                {
                    id: "enk2l2_s1", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "schwer", points: 10,
                    question: "a red cat heißt …", answers: ["eine rote Katze", "ein blauer Hund", "Danke", "Tschüss"], correct: 0,
                    explanation: "Farbe + Tier."
                },
                {
                    id: "enk2l2_s2", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "schwer", points: 10,
                    question: "fish heißt …", answers: ["Fisch", "Vogel", "Hund", "Katze"], correct: 0,
                    explanation: "fish."
                },
                {
                    id: "enk2l2_s3", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "schwer", points: 10,
                    question: "The ball is blue.", answers: ["Der Ball ist blau", "Der Ball isst", "Hallo Ball", "Bye"], correct: 0,
                    explanation: "is blue."
                },
                {
                    id: "enk2l2_s4", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "schwer", points: 10,
                    question: "I can see a bird.", answers: ["Ich kann einen Vogel sehen", "Ich bin ein kleiner Vogel", "Der Vogel kann mich sehen", "Ich habe einen Vogel gehabt"], correct: 0,
                    explanation: "can see heißt sehen können: Ich kann einen Vogel sehen."
                }
            ] },
        test: [
                {
                    id: "enk2l2_t1", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "mittel", points: 10,
                    question: "red?", answers: ["rot", "blau", "grün", "gelb"], correct: 0,
                    explanation: "rot."
                },
                {
                    id: "enk2l2_t2", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "mittel", points: 10,
                    question: "blue?", answers: ["blau", "rot", "grün", "gelb"], correct: 0,
                    explanation: "blau."
                },
                {
                    id: "enk2l2_t3", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "mittel", points: 10,
                    question: "cat?", answers: ["Katze", "Hund", "Fisch", "Vogel"], correct: 0,
                    explanation: "Katze."
                },
                {
                    id: "enk2l2_t4", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "mittel", points: 10,
                    question: "dog?", answers: ["Hund", "Katze", "Fisch", "Vogel"], correct: 0,
                    explanation: "Hund."
                },
                {
                    id: "enk2l2_t5", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "mittel", points: 10,
                    question: "green?", answers: ["grün", "rot", "blau", "gelb"], correct: 0,
                    explanation: "grün."
                },
                {
                    id: "enk2l2_t6", category: "kurs_enmini_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "minisaetze", difficulty: "mittel", points: 10,
                    question: "bird?", answers: ["Vogel", "Hund", "Katze", "Fisch"], correct: 0,
                    explanation: "Vogel."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "uhr_k2_l2", kurs: "uhr_viertel_k2", order: 2, icon: "🕐",
        title: "Uhrbilder", kurz: "sehen und sagen",
        erklaerung: {"intro": "Der <b>kurze</b> Zeiger = Stunde. Der <b>lange rote</b> Zeiger = Minuten. Schau immer zuerst auf den kurzen: zwischen welchen Zahlen steht er?", "beispiele": ["🕛 <b>Genau</b> – der lange Zeiger steht auf der 12<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='131.2' y2='82.0' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='100.0' y2='50.8' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>", "🕒 <b>Viertel nach</b> – der lange Zeiger steht auf der 3<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='133.3' y2='86.2' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='149.2' y2='100.0' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>", "🕡 <b>Halb</b> – der lange Zeiger steht auf der 6<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='134.9' y2='90.7' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='100.0' y2='149.2' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>"], "merksatz": "Kurz = Stunde. Lang = Minuten."},
        uebung: { leicht: [
                {
                    id: "uhrk2l2_l1", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "leicht", points: 10,
                    question: "Langer Zeiger auf 12 heißt oft …", answers: ["genaue Stunde", "halb", "Viertel nach", "Viertel vor"], correct: 0,
                    explanation: "12 = volle Stunde.",
                    grafik: "<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='118.0' y2='131.2' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='100.0' y2='50.8' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>"
                },
                {
                    id: "uhrk2l2_l2", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "leicht", points: 10,
                    question: "Der lange Zeiger steht auf 3. Wie spät ist es?", answers: ["Viertel nach", "Viertel vor", "Halb", "Punkt"], correct: 0,
                    explanation: "3 mal 5 Minuten sind 15 Minuten – also Viertel nach.",
                    grafik: "<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='113.8' y2='133.3' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='149.2' y2='100.0' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>"
                },
                {
                    id: "uhrk2l2_l3", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "leicht", points: 10,
                    question: "Langer Zeiger auf 6 heißt …", answers: ["halb / 30 Min.", "Viertel nach", "genau", "5 nach"], correct: 0,
                    explanation: "6×5=30.",
                    grafik: "<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='109.3' y2='134.9' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='100.0' y2='149.2' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>"
                },
                {
                    id: "uhrk2l2_l4", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "leicht", points: 10,
                    question: "Der lange Zeiger steht auf 9. Wie spät ist es?", grafik: "<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='104.7' y2='135.8' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='50.8' y2='100.0' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>", answers: ["Viertel vor", "Viertel nach", "Halb", "Punkt"], correct: 0,
                    explanation: "9 mal 5 Minuten sind 45 Minuten – also Viertel vor der nächsten Stunde."
                }
            ], mittel: [
                {
                    id: "uhrk2l2_m1", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "Halb 4 siehst du so:", answers: ["3:30", "4:30", "3:00", "4:00"], correct: 0,
                    explanation: "halb nächste.",
                    grafik: "<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='134.9' y2='109.3' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='100.0' y2='149.2' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>"
                },
                {
                    id: "uhrk2l2_m2", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "Viertel nach 3 ist …", answers: ["3:15", "3:45", "3:30", "4:15"], correct: 0,
                    explanation: ":15.",
                    grafik: "<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='135.8' y2='104.7' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='149.2' y2='100.0' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>"
                },
                {
                    id: "uhrk2l2_m3", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "Kurzer Zeiger nahe 4, lang auf 12:", answers: ["genau 4", "halb 4", "Viertel nach 4", "Viertel vor 4"], correct: 0,
                    explanation: "volle Stunde.",
                    grafik: "<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='131.2' y2='118.0' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='100.0' y2='50.8' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>"
                },
                {
                    id: "uhrk2l2_m4", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "Von genau 3 bis halb 4 sind … Min.", answers: ["30", "15", "45", "10"], correct: 0,
                    explanation: "eine halbe Stunde."
                }
            ], schwer: [
                {
                    id: "uhrk2l2_s1", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "schwer", points: 10,
                    question: "Warum sagt man halb 4 und nicht halb 3?", answers: ["Halb zeigt zur nächsten Stunde", "Weil die 3 kleiner ist", "Weil 4 leichter klingt", "Weil der Zeiger fehlt"], correct: 0,
                    explanation: "Um 3:30 ist die Hälfte des Weges zur 4 geschafft – deshalb halb 4."
                },
                {
                    id: "uhrk2l2_s2", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "schwer", points: 10,
                    question: "Wie sagt man 3:45?", answers: ["Viertel vor 4", "Viertel nach 3", "Halb 3", "Punkt 3"], correct: 0,
                    explanation: "45 Minuten sind eine Viertelstunde vor der vollen Stunde."
                },
                {
                    id: "uhrk2l2_s3", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "schwer", points: 10,
                    question: "Zwei halbe Stunden sind …", answers: ["eine ganze Stunde", "15 Minuten", "5 Minuten", "3 Stunden"], correct: 0,
                    explanation: "30+30=60."
                },
                {
                    id: "uhrk2l2_s4", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "schwer", points: 10,
                    question: "Viertel + Viertel =", answers: ["halb", "ganz", "5 Minuten", "nichts"], correct: 0,
                    explanation: "15+15=30."
                }
            ] },
        test: [
                {
                    id: "uhrk2l2_t1", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "Lang auf 12?", answers: ["genaue Stunde", "halb", "Viertel nach", "5 vor"], correct: 0,
                    explanation: "voll.",
                    grafik: "<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='68.8' y2='118.0' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='100.0' y2='50.8' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>"
                },
                {
                    id: "uhrk2l2_t2", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "Lang auf 6?", answers: ["halb", "genau", "Viertel nach", "5 nach"], correct: 0,
                    explanation: "halb.",
                    grafik: "<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='65.1' y2='109.3' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='100.0' y2='149.2' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>"
                },
                {
                    id: "uhrk2l2_t3", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "Lang auf 3?", answers: ["Viertel nach", "halb", "genau", "Viertel vor"], correct: 0,
                    explanation: "15.",
                    grafik: "<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='66.7' y2='113.8' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='149.2' y2='100.0' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>"
                },
                {
                    id: "uhrk2l2_t4", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "3:30 =", grafik: "<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='134.9' y2='109.3' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='100.0' y2='149.2' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>", answers: ["halb 4", "halb 3", "genau 3", "Viertel nach 4"], correct: 0,
                    explanation: "halb 4."
                },
                {
                    id: "uhrk2l2_t5", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "3:15 =", grafik: "<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='135.8' y2='104.7' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='149.2' y2='100.0' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>", answers: ["Viertel nach 3", "halb 3", "Viertel vor 3", "genau 4"], correct: 0,
                    explanation: "Viertel nach."
                },
                {
                    id: "uhrk2l2_t6", category: "kurs_uhr_k2_l2", area: "schule", grade: 2,
                    subject: "mathe", topic: "uhrzeit", difficulty: "mittel", points: 10,
                    question: "3:45 =", grafik: "<svg viewBox='0 0 200 200' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg' role='img'><circle cx='100' cy='100' r='82.0' fill='#f8fafc' stroke='#38bdf8' stroke-width='5'/><line x1='108.2' y1='22.4' x2='107.6' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='23.7' x2='115.2' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='25.8' x2='122.6' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='28.7' x2='129.7' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='36.9' x2='142.9' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='42.0' x2='148.8' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='47.8' x2='154.2' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='54.2' x2='159.1' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='68.3' x2='166.7' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='75.9' x2='169.4' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='83.8' x2='171.4' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='91.8' x2='172.6' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='177.6' y1='108.2' x2='172.6' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='176.3' y1='116.2' x2='171.4' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='174.2' y1='124.1' x2='169.4' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='171.3' y1='131.7' x2='166.7' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='163.1' y1='145.8' x2='159.1' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='158.0' y1='152.2' x2='154.2' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='152.2' y1='158.0' x2='148.8' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='145.8' y1='163.1' x2='142.9' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='131.7' y1='171.3' x2='129.7' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='124.1' y1='174.2' x2='122.6' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='116.2' y1='176.3' x2='115.2' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='108.2' y1='177.6' x2='107.6' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='177.6' x2='92.4' y2='172.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='176.3' x2='84.8' y2='171.4' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='174.2' x2='77.4' y2='169.4' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='171.3' x2='70.3' y2='166.7' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='163.1' x2='57.1' y2='159.1' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='158.0' x2='51.2' y2='154.2' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='152.2' x2='45.8' y2='148.8' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='145.8' x2='40.9' y2='142.9' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='131.7' x2='33.3' y2='129.7' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='124.1' x2='30.6' y2='122.6' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='116.2' x2='28.6' y2='115.2' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='108.2' x2='27.4' y2='107.6' stroke='#94a3b8' stroke-width='1'/><line x1='22.4' y1='91.8' x2='27.4' y2='92.4' stroke='#94a3b8' stroke-width='1'/><line x1='23.7' y1='83.8' x2='28.6' y2='84.8' stroke='#94a3b8' stroke-width='1'/><line x1='25.8' y1='75.9' x2='30.6' y2='77.4' stroke='#94a3b8' stroke-width='1'/><line x1='28.7' y1='68.3' x2='33.3' y2='70.3' stroke='#94a3b8' stroke-width='1'/><line x1='36.9' y1='54.2' x2='40.9' y2='57.1' stroke='#94a3b8' stroke-width='1'/><line x1='42.0' y1='47.8' x2='45.8' y2='51.2' stroke='#94a3b8' stroke-width='1'/><line x1='47.8' y1='42.0' x2='51.2' y2='45.8' stroke='#94a3b8' stroke-width='1'/><line x1='54.2' y1='36.9' x2='57.1' y2='40.9' stroke='#94a3b8' stroke-width='1'/><line x1='68.3' y1='28.7' x2='70.3' y2='33.3' stroke='#94a3b8' stroke-width='1'/><line x1='75.9' y1='25.8' x2='77.4' y2='30.6' stroke='#94a3b8' stroke-width='1'/><line x1='83.8' y1='23.7' x2='84.8' y2='28.6' stroke='#94a3b8' stroke-width='1'/><line x1='91.8' y1='22.4' x2='92.4' y2='27.4' stroke='#94a3b8' stroke-width='1'/><line x1='100.0' y1='21.0' x2='100.0' y2='30.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='31.6' x2='135.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='60.5' x2='160.6' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='179.0' y1='100.0' x2='170.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='168.4' y1='139.5' x2='160.6' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='139.5' y1='168.4' x2='135.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='100.0' y1='179.0' x2='100.0' y2='170.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='168.4' x2='65.0' y2='160.6' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='139.5' x2='39.4' y2='135.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='21.0' y1='100.0' x2='30.0' y2='100.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='31.6' y1='60.5' x2='39.4' y2='65.0' stroke='#334155' stroke-width='3' stroke-linecap='round'/><line x1='60.5' y1='31.6' x2='65.0' y2='39.4' stroke='#334155' stroke-width='3' stroke-linecap='round'/><text x='131.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>1</text><text x='154.6' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>2</text><text x='163.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>3</text><text x='154.6' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>4</text><text x='131.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>5</text><text x='100.0' y='163.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>6</text><text x='68.5' y='154.6' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>7</text><text x='45.4' y='131.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>8</text><text x='37.0' y='100.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>9</text><text x='45.4' y='68.5' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>10</text><text x='68.5' y='45.4' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>11</text><text x='100.0' y='37.0' fill='#0f172a' font-size='17' font-weight='bold' font-family='sans-serif' text-anchor='middle' dominant-baseline='central'>12</text><line x1='100' y1='100' x2='133.3' y2='113.8' stroke='#1e293b' stroke-width='7' stroke-linecap='round'/><line x1='100' y1='100' x2='50.8' y2='100.0' stroke='#ef4444' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#1e293b'/></svg>", answers: ["Viertel vor 4", "Viertel nach 3", "halb 3", "genau 3"], correct: 0,
                    explanation: "Viertel vor 4."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "bruch_k3_l2", kurs: "brueche_k3", order: 2, icon: "🍰",
        title: "Teile sehen", kurz: "Balken",
        erklaerung: {
            intro: "Unten = wie viele gleiche Stücke. Oben = wie viele davon dunkel sind.",
            beispiele: [
                "Hälfte:<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='40' width='76.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='100.0' y='40' width='76.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/></svg>",
                "ein Viertel:<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='40' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='60.0' y='40' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/><rect x='100.0' y='40' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/><rect x='140.0' y='40' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/></svg>",
                "drei Viertel:<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='40' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='60.0' y='40' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='100.0' y='40' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='140.0' y='40' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/></svg>"
            ],
            merksatz: "Dunkle Stücke zählen, alle Stücke sind der Nenner."
        },
        uebung: { leicht: [
                {
                    id: "brk3l2_l1", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "leicht", points: 10,
                    question: "Ein von zwei dunklen Teilen =", answers: ["1/2", "1/4", "3/4", "2/2"], correct: 0,
                    explanation: "Hälfte.",
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='40' width='76.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='100.0' y='40' width='76.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/></svg>"
                },
                {
                    id: "brk3l2_l2", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "leicht", points: 10,
                    question: "Ein von vier =", answers: ["1/4", "1/2", "3/4", "4/4"], correct: 0,
                    explanation: "Viertel.",
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='40' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='60.0' y='40' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/><rect x='100.0' y='40' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/><rect x='140.0' y='40' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/></svg>"
                },
                {
                    id: "brk3l2_l3", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "leicht", points: 10,
                    question: "Drei von vier =", answers: ["3/4", "1/4", "1/2", "0"], correct: 0,
                    explanation: "drei Viertel.",
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='40' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='60.0' y='40' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='100.0' y='40' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='140.0' y='40' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/></svg>"
                },
                {
                    id: "brk3l2_l4", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "leicht", points: 10,
                    question: "Vier von vier =", answers: ["1 Ganzes", "1/4", "nichts", "1/2"], correct: 0,
                    explanation: "alles."
                }
            ], mittel: [
                {
                    id: "brk3l2_m1", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "mittel", points: 10,
                    question: "Zwei von vier sind wie …", answers: ["1/2", "1/8", "3/4", "0"], correct: 0,
                    explanation: "2/4=1/2."
                },
                {
                    id: "brk3l2_m2", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "mittel", points: 10,
                    question: "Was ist mehr: 3/4 oder 1/4?", answers: ["3/4", "1/4", "gleich", "keins"], correct: 0,
                    explanation: "mehr dunkle Teile."
                },
                {
                    id: "brk3l2_m3", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "mittel", points: 10,
                    question: "1/2 + 1/4 (von 4 Teilen) =", answers: ["3/4", "1/4", "2/2 falsch hier", "0"], correct: 0,
                    explanation: "2+1 von 4."
                },
                {
                    id: "brk3l2_m4", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "mittel", points: 10,
                    question: "Welcher Balken zeigt die Hälfte?", answers: ["2 Teile, eins dunkel", "4 Teile, eins dunkel", "4 Teile, drei dunkel", "3 Teile, eins dunkel"], correct: 0,
                    explanation: "Bei der Hälfte ist genau eines von zwei gleichen Teilen gefärbt.",
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='40' width='76.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='100.0' y='40' width='76.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/></svg>"
                }
            ], schwer: [
                {
                    id: "brk3l2_s1", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "schwer", points: 10,
                    question: "Was ist der Nenner?", answers: ["Die Zahl unten", "Die Zahl oben", "Nur die dunklen", "Immer die Null"], correct: 0,
                    explanation: "Der Nenner steht unten und sagt, in wie viele Teile das Ganze geteilt ist."
                },
                {
                    id: "brk3l2_s2", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "schwer", points: 10,
                    question: "Zähler ist …", answers: ["die dunklen Teile", "immer 10", "die Ampel", "Norden"], correct: 0,
                    explanation: "oben / genommen."
                },
                {
                    id: "brk3l2_s3", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "schwer", points: 10,
                    question: "1/4 von 8 Steinen =", answers: ["2", "4", "8", "1"], correct: 0,
                    explanation: "8:4=2."
                },
                {
                    id: "brk3l2_s4", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "schwer", points: 10,
                    question: "Welcher Bruch ist am größten?", answers: ["3/4", "1/4", "1/2", "1/8"], correct: 0,
                    explanation: "3/4."
                }
            ] },
        test: [
                {
                    id: "brk3l2_t1", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "mittel", points: 10,
                    question: "1 von 2?", answers: ["1/2", "1/4", "3/4", "0"], correct: 0,
                    explanation: "Hälfte.",
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='40' width='76.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='100.0' y='40' width='76.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/></svg>"
                },
                {
                    id: "brk3l2_t2", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "mittel", points: 10,
                    question: "1 von 4?", answers: ["1/4", "1/2", "3/4", "1"], correct: 0,
                    explanation: "Viertel.",
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='40' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='60.0' y='40' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/><rect x='100.0' y='40' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/><rect x='140.0' y='40' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/></svg>"
                },
                {
                    id: "brk3l2_t3", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "mittel", points: 10,
                    question: "3 von 4?", answers: ["3/4", "1/4", "1/2", "0"], correct: 0,
                    explanation: "3/4.",
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='40' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='60.0' y='40' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='100.0' y='40' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='140.0' y='40' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/></svg>"
                },
                {
                    id: "brk3l2_t4", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "mittel", points: 10,
                    question: "2/4 =", answers: ["1/2", "1/8", "3/4", "0"], correct: 0,
                    explanation: "Hälfte."
                },
                {
                    id: "brk3l2_t5", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "mittel", points: 10,
                    question: "Größer?", answers: ["3/4", "1/4", "gleich", "keins"], correct: 0,
                    explanation: "3/4."
                },
                {
                    id: "brk3l2_t6", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "mittel", points: 10,
                    question: "4/4 =", answers: ["1 Ganzes", "1/4", "1/2", "0"], correct: 0,
                    explanation: "Ganzes."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "karte_k3_l2", kurs: "karte_k3", order: 2, icon: "🗺️",
        title: "Kompass", kurz: "N oben",
        erklaerung: {
            intro: "Eine Karte kann mehr als Richtungen zeigen. Die <b>Kompassrose</b> sagt dir, wo Norden ist. Die <b>Legende</b> erklärt die Zeichen und Farben: blau ist Wasser, grün ist Wald, braun sind Berge. Der <b>Maßstab</b> verrät, wie weit es in Wirklichkeit ist.",
            beispiele: [
                "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'> <circle cx='100' cy='70' r='48' fill='rgba(52,211,153,0.2)' stroke='#10b981' stroke-width='3'/> <text x='100' y='28' text-anchor='middle' font-size='14' font-weight='700' fill='#0f172a'>N</text> <text x='100' y='128' text-anchor='middle' font-size='14' font-weight='700' fill='#0f172a'>S</text> <text x='42' y='75' text-anchor='middle' font-size='14' font-weight='700' fill='#0f172a'>W</text> <text x='158' y='75' text-anchor='middle' font-size='14' font-weight='700' fill='#0f172a'>O</text> <polygon points='100,32 108,70 100,64 92,70' fill='#ef4444'/> </svg>",
                "Sonne auf: Osten",
                "Sonne unter: Westen"
            ],
            merksatz: "Karte nach Norden drehen, Legende lesen, Maßstab beachten. Mit dem Gesicht nach Norden: rechts Osten, links Westen, hinten Süden."
        },
        uebung: { leicht: [
                {
                    id: "kak3l2_l1", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "leicht", points: 10,
                    question: "Was ist eine Kompassrose?", answers: ["Das Richtungskreuz auf der Karte", "Eine Blume am Wegrand", "Ein Zeichen für einen Berg", "Ein Zeichen für eine Kirche"], correct: 0,
                    explanation: "Die Kompassrose ist der kleine Stern auf der Karte, der zeigt, wo Norden ist.",
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto' xmlns='http://www.w3.org/2000/svg'> <circle cx='100' cy='70' r='48' fill='rgba(52,211,153,0.2)' stroke='#10b981' stroke-width='3'/> <text x='100' y='28' text-anchor='middle' font-size='14' font-weight='700' fill='#0f172a'>N</text> <text x='100' y='128' text-anchor='middle' font-size='14' font-weight='700' fill='#0f172a'>S</text> <text x='42' y='75' text-anchor='middle' font-size='14' font-weight='700' fill='#0f172a'>W</text> <text x='158' y='75' text-anchor='middle' font-size='14' font-weight='700' fill='#0f172a'>O</text> <polygon points='100,32 108,70 100,64 92,70' fill='#ef4444'/> </svg>"
                },
                {
                    id: "kak3l2_l2", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "leicht", points: 10,
                    question: "Was zeigt die Legende einer Karte?", answers: ["Was die Zeichen bedeuten", "Wie alt die Karte ist", "Wer die Karte gemalt hat", "Wie schwer die Karte ist"], correct: 0,
                    explanation: "In der Legende steht, wofür jedes Symbol steht – zum Beispiel ein Kreuz für eine Kirche."
                },
                {
                    id: "kak3l2_l3", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "leicht", points: 10,
                    question: "Welche Farbe haben Wälder auf einer Karte?", answers: ["Grün", "Blau", "Braun", "Gelb"], correct: 0,
                    explanation: "Grün heißt Wald oder Wiese, blau ist Wasser, braun sind Berge."
                },
                {
                    id: "kak3l2_l4", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "leicht", points: 10,
                    question: "Wonach richtest du die Karte aus?", answers: ["Nach Norden", "Nach der Uhrzeit", "Nach dem Wetter", "Nach der Farbe"], correct: 0,
                    explanation: "Dreh die Karte so, dass ihr Norden auch in der Wirklichkeit nach Norden zeigt. Dann stimmt alles."
                }
            ], mittel: [
                {
                    id: "kak3l2_m1", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "mittel", points: 10,
                    question: "Was ist die Gegenrichtung von Westen?", answers: ["Osten", "Norden", "Süden", "Nordwesten"], correct: 0,
                    explanation: "Westen und Osten liegen sich gegenüber – wie Norden und Süden."
                },
                {
                    id: "kak3l2_m2", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "mittel", points: 10,
                    question: "Du hältst einen Kompass. Welche Richtung findest du zuerst?", answers: ["Norden", "Süden", "Westen", "Osten"], correct: 0,
                    explanation: "Die Nadel zeigt nach Norden. Stehst du mit dem Gesicht nach Norden, ist rechts Osten und links Westen."
                },
                {
                    id: "kak3l2_m3", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "mittel", points: 10,
                    question: "Am Morgen steht die Sonne links von dir. In welche Richtung schaust du?", answers: ["Nach Norden", "Nach Süden", "Nach Westen", "Nach Osten"], correct: 0,
                    explanation: "Morgens steht die Sonne im Osten. Ist Osten links, dann schaust du nach Norden."
                },
                {
                    id: "kak3l2_m4", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "mittel", points: 10,
                    question: "Was bedeutet ein blaues Band auf der Karte?", answers: ["Einen Fluss", "Eine Straße", "Eine Bahnlinie", "Eine Grenze"], correct: 0,
                    explanation: "Blau ist immer Wasser. Ein schmales blaues Band ist ein Fluss oder Bach."
                }
            ], schwer: [
                {
                    id: "kak3l2_s1", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "schwer", points: 10,
                    question: "Du gehst nach Norden und drehst dich um. Wohin gehst du jetzt?", answers: ["Nach Süden", "Weiter nach Norden", "Nach Westen", "Nach Osten"], correct: 0,
                    explanation: "Beim Umdrehen läufst du in die Gegenrichtung – und die Gegenrichtung von Norden ist Süden."
                },
                {
                    id: "kak3l2_s2", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "schwer", points: 10,
                    question: "Wozu braucht eine Karte einen Maßstab?", answers: ["Er zeigt echte Entfernungen", "Er zeigt die Uhrzeit", "Er zeigt die Höhe", "Er zeigt das Wetter"], correct: 0,
                    explanation: "Der Maßstab sagt dir, wie viele Meter in der Wirklichkeit einem Zentimeter auf der Karte entsprechen."
                },
                {
                    id: "kak3l2_s3", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "schwer", points: 10,
                    question: "Was zeigt ein Stadtplan genauer als eine Landkarte?", answers: ["Einzelne Straßen", "Ganze Länder", "Alle Kontinente", "Die Meere"], correct: 0,
                    explanation: "Je kleiner der Ausschnitt, desto mehr Einzelheiten passen darauf. Ein Stadtplan zeigt jede Straße."
                },
                {
                    id: "kak3l2_s4", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "schwer", points: 10,
                    question: "Du willst von der Schule nach Hause. Was hilft dir?", answers: ["Ein Stadtplan", "Eine Weltkarte", "Ein Kalender", "Ein Lineal"], correct: 0,
                    explanation: "Für kurze Wege im Ort brauchst du einen Stadtplan – die Weltkarte ist viel zu grob."
                }
            ] },
        test: [
                {
                    id: "kak3l2_t1", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "mittel", points: 10,
                    question: "Wo steht auf der Karte, was die Zeichen bedeuten?", answers: ["In der Legende", "Im Maßstab", "Im Titel", "Am Rand unten"], correct: 0,
                    explanation: "Die Legende erklärt jedes Symbol."
                },
                {
                    id: "kak3l2_t2", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "mittel", points: 10,
                    question: "Welche Farbe hat Wasser auf der Karte?", answers: ["Blau", "Grün", "Braun", "Grau"], correct: 0,
                    explanation: "Blau steht immer für Wasser."
                },
                {
                    id: "kak3l2_t3", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "mittel", points: 10,
                    question: "Wonach zeigt die Kompassnadel?", answers: ["Nach Norden", "Nach Süden", "Nach Westen", "Nach Osten"], correct: 0,
                    explanation: "Die rote Spitze zeigt immer nach Norden."
                },
                {
                    id: "kak3l2_t4", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "mittel", points: 10,
                    question: "Was sagt dir der Maßstab?", answers: ["Die echte Entfernung", "Die Uhrzeit", "Die Himmelsrichtung", "Die Farbe"], correct: 0,
                    explanation: "Er rechnet Zentimeter auf der Karte in Meter in der Wirklichkeit um."
                },
                {
                    id: "kak3l2_t5", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "mittel", points: 10,
                    question: "Du schaust nach Norden. Was liegt rechts von dir?", answers: ["Osten", "Westen", "Süden", "Norden"], correct: 0,
                    explanation: "Mit dem Gesicht nach Norden: rechts Osten, links Westen, hinten Süden."
                },
                {
                    id: "kak3l2_t6", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "mittel", points: 10,
                    question: "Wofür brauchst du eine Weltkarte statt eines Stadtplans?", answers: ["Für ganze Länder", "Für den Schulweg", "Für eine Straße", "Für ein Haus"], correct: 0,
                    explanation: "Große Entfernungen passen nur auf eine Karte mit großem Ausschnitt."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "zeit_k3_l2", kurs: "zeitform_k3", order: 2, icon: "⏱️",
        title: "Signalwörter", kurz: "gestern / jetzt",
        erklaerung: {
            intro: "<b>jetzt, heute</b> → oft Präsens. <b>gestern, damals</b> → oft Präteritum.",
            beispiele: [
                "Heute spiele ich. (Präsens)",
                "Gestern spielte ich. (Präteritum)"
            ],
            merksatz: "Signalwort zuerst lesen, dann die Verbform."
        },
        uebung: { leicht: [
                {
                    id: "zfk3l2_l1", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "leicht", points: 10,
                    question: "heute → oft", answers: ["Präsens", "Präteritum", "Bruch", "Karte"], correct: 0,
                    explanation: "jetzt."
                },
                {
                    id: "zfk3l2_l2", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "leicht", points: 10,
                    question: "gestern → oft", answers: ["Präteritum", "Präsens", "Artikel", "Form"], correct: 0,
                    explanation: "früher."
                },
                {
                    id: "zfk3l2_l3", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "leicht", points: 10,
                    question: "ich laufe ist", answers: ["Präsens", "Präteritum", "Nomen", "Komma"], correct: 0,
                    explanation: "jetzt."
                },
                {
                    id: "zfk3l2_l4", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "leicht", points: 10,
                    question: "ich lief ist", answers: ["Präteritum", "Präsens", "Frage", "Ort"], correct: 0,
                    explanation: "früher."
                }
            ], mittel: [
                {
                    id: "zfk3l2_m1", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "mittel", points: 10,
                    question: "Damals ___ wir am See.", answers: ["wohnten", "wohnen", "wohnt", "wohnend"], correct: 0,
                    explanation: "damals = früher."
                },
                {
                    id: "zfk3l2_m2", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "mittel", points: 10,
                    question: "Jetzt ___ die Sonne.", answers: ["scheint", "schien", "schein", "geschienen hier nicht"], correct: 0,
                    explanation: "jetzt."
                },
                {
                    id: "zfk3l2_m3", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "mittel", points: 10,
                    question: "Gestern ___ er Brot.", answers: ["kaufte", "kauft", "kaufen", "kauf"], correct: 0,
                    explanation: "gestern."
                },
                {
                    id: "zfk3l2_m4", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "mittel", points: 10,
                    question: "Heute ___ sie ein Buch.", answers: ["liest", "las", "lese", "lasen"], correct: 0,
                    explanation: "Heute heißt jetzt – also Präsens: sie liest."
                }
            ], schwer: [
                {
                    id: "zfk3l2_s1", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "schwer", points: 10,
                    question: "Welche Paarung stimmt?", answers: ["jetzt = Präsens", "jetzt = Präteritum", "gestern = Präsens", "morgen = Präteritum"], correct: 0,
                    explanation: "Signalwörter helfen: jetzt und heute zeigen auf die Gegenwart."
                },
                {
                    id: "zfk3l2_s2", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "schwer", points: 10,
                    question: "Wir ___ gestern im Park.", answers: ["spielten", "spielen", "spielt", "spiel"], correct: 0,
                    explanation: "spielten."
                },
                {
                    id: "zfk3l2_s3", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "schwer", points: 10,
                    question: "Form von sehen früher?", answers: ["sah", "sieht", "sehen", "seh"], correct: 0,
                    explanation: "sah."
                },
                {
                    id: "zfk3l2_s4", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "schwer", points: 10,
                    question: "Form von gehen früher?", answers: ["ging", "geht", "gehen", "geh"], correct: 0,
                    explanation: "ging."
                }
            ] },
        test: [
                {
                    id: "zfk3l2_t1", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "mittel", points: 10,
                    question: "heute oft?", answers: ["Präsens", "Präteritum", "Bruch", "Karte"], correct: 0,
                    explanation: "Präsens."
                },
                {
                    id: "zfk3l2_t2", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "mittel", points: 10,
                    question: "gestern oft?", answers: ["Präteritum", "Präsens", "Artikel", "Form"], correct: 0,
                    explanation: "Präteritum."
                },
                {
                    id: "zfk3l2_t3", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "mittel", points: 10,
                    question: "ich male?", answers: ["Präsens", "Präteritum", "Nomen", "Ort"], correct: 0,
                    explanation: "Präsens."
                },
                {
                    id: "zfk3l2_t4", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "mittel", points: 10,
                    question: "ich malte?", answers: ["Präteritum", "Präsens", "Frage", "Bruch"], correct: 0,
                    explanation: "Präteritum."
                },
                {
                    id: "zfk3l2_t5", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "mittel", points: 10,
                    question: "sah ist von", answers: ["sehen", "malen", "kaufen", "spielen"], correct: 0,
                    explanation: "sehen."
                },
                {
                    id: "zfk3l2_t6", category: "kurs_zeit_k3_l2", area: "schule", grade: 3,
                    subject: "deutsch", topic: "zeitform", difficulty: "mittel", points: 10,
                    question: "ging ist von", answers: ["gehen", "sehen", "lesen", "kaufen"], correct: 0,
                    explanation: "gehen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "auf_k4_l2", kurs: "aufsatz_k4", order: 2, icon: "📝",
        title: "Wörtliche Rede", kurz: "wer spricht",
        erklaerung: {
            intro: "Was jemand sagt, steht in <b>Anführungszeichen</b>. Danach oft ein Gedankenstrich oder Verb wie sagte.",
            beispiele: [
                "„Komm her!“, rief Mama.",
                "Lea sagte: „Ich bin fertig.“"
            ],
            merksatz: "Rede = Anführungszeichen. Danach wer spricht."
        },
        uebung: { leicht: [
                {
                    id: "afk4l2_l1", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "leicht", points: 10,
                    question: "Wörtliche Rede steht in …", answers: ["Anführungszeichen", "nur Klammern immer", "Brüchen", "Ampeln"], correct: 0,
                    explanation: "„…“."
                },
                {
                    id: "afk4l2_l2", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "leicht", points: 10,
                    question: "Der Satz nach der Rede nennt oft …", answers: ["wer spricht", "nur die Uhr", "nur den Bruch", "Norden"], correct: 0,
                    explanation: "Sprecher."
                },
                {
                    id: "afk4l2_l3", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "leicht", points: 10,
                    question: "Eine Überschrift soll …", answers: ["zum Text passen", "unsichtbar sein", "nur aus Kommas sein", "100 Wörter haben"], correct: 0,
                    explanation: "Thema."
                },
                {
                    id: "afk4l2_l4", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "leicht", points: 10,
                    question: "Der Schluss …", answers: ["endet den Text", "ist die erste Zeile", "ist nur ein Artikel", "ist 1x1"], correct: 0,
                    explanation: "Ende."
                }
            ], mittel: [
                {
                    id: "afk4l2_m1", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "mittel", points: 10,
                    question: "„Hilfe!“ ist eher …", answers: ["ein Ausruf", "eine ruhige Überschrift", "ein Bruch", "eine Karte"], correct: 0,
                    explanation: "Ausruf."
                },
                {
                    id: "afk4l2_m2", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "mittel", points: 10,
                    question: "Was heißt „zuerst planen“?", answers: ["Stichworte sammeln", "Den Schluss schreiben", "Das Heft weglegen", "Die Wörter zählen"], correct: 0,
                    explanation: "Du notierst kurz, was in den Text soll – erst danach schreibst du los."
                },
                {
                    id: "afk4l2_m3", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "mittel", points: 10,
                    question: "Was erzählt ein Bericht?", answers: ["Was passiert ist", "Was erfunden ist", "Was morgen kommt", "Was man sich wünscht"], correct: 0,
                    explanation: "Ein Bericht hält Tatsachen fest, keine erfundenen Geschichten."
                },
                {
                    id: "afk4l2_m4", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "mittel", points: 10,
                    question: "Wie spricht ein Ich-Erzähler?", answers: ["Er sagt „ich“", "Er sagt „er“", "Er sagt „sie“", "Er sagt „man“"], correct: 0,
                    explanation: "„Ich lief zur Tür“ – der Erzähler spricht von sich selbst."
                }
            ], schwer: [
                {
                    id: "afk4l2_s1", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "schwer", points: 10,
                    question: "Nach „Komm!“ steht oft …", answers: ["wer ruft", "nur ein Bruch", "nur Norden", "gar nichts erlaubt"], correct: 0,
                    explanation: "Sprecher."
                },
                {
                    id: "afk4l2_s2", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "schwer", points: 10,
                    question: "Füllwörter streichst du, wenn sie …", answers: ["nichts sagen", "die Spannung tragen", "den Ort erklären", "die Figur zeigen"], correct: 0,
                    explanation: "überflüssig."
                },
                {
                    id: "afk4l2_s3", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "schwer", points: 10,
                    question: "Hauptteil enthält …", answers: ["die Handlung", "nur den Titel", "nur den letzten Punkt", "nur Kommas"], correct: 0,
                    explanation: "Mitte."
                },
                {
                    id: "afk4l2_s4", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "schwer", points: 10,
                    question: "Überlesen heißt …", answers: ["nochmal prüfen", "sofort zerreißen", "nie wieder lesen", "nur singen"], correct: 0,
                    explanation: "Korrektur."
                }
            ] },
        test: [
                {
                    id: "afk4l2_t1", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "mittel", points: 10,
                    question: "Rede in …", answers: ["Anführungszeichen", "Brüchen", "Ampeln", "Karten"], correct: 0,
                    explanation: "„…“."
                },
                {
                    id: "afk4l2_t2", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "mittel", points: 10,
                    question: "Danach oft …", answers: ["der Sprecher", "nur 1x1", "nur Rot", "Norden"], correct: 0,
                    explanation: "wer spricht."
                },
                {
                    id: "afk4l2_t3", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "mittel", points: 10,
                    question: "Überschrift?", answers: ["passt zum Thema", "unsichtbar", "nur Punkte", "ein Bruch"], correct: 0,
                    explanation: "Thema."
                },
                {
                    id: "afk4l2_t4", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "mittel", points: 10,
                    question: "Schluss?", answers: ["Ende", "Anfang", "nur Komma", "1x1"], correct: 0,
                    explanation: "Ende."
                },
                {
                    id: "afk4l2_t5", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "mittel", points: 10,
                    question: "Was gehört zum Planen?", answers: ["Stichworte notieren", "Sofort abgeben", "Das Heft zumachen", "Die Zeilen zählen"], correct: 0,
                    explanation: "Ein paar Stichworte reichen – sie geben dem Text die Reihenfolge."
                },
                {
                    id: "afk4l2_t6", category: "kurs_auf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "aufsatz", difficulty: "mittel", points: 10,
                    question: "Überlesen?", answers: ["prüfen", "zerreißen", "ignorieren", "singen"], correct: 0,
                    explanation: "prüfen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "eu_k4_l2", kurs: "europa_k4", order: 2, icon: "🇪🇺",
        title: "Nachbarn", kurz: "wer grenzt an DE",
        erklaerung: {
            intro: "Nachbarn von Deutschland: u. a. <b>Frankreich, Polen, Österreich, Schweiz, Dänemark, Niederlande</b>.",
            beispiele: [
                "Westen oft: Frankreich, Niederlande, Belgien",
                "Osten: Polen",
                "Süden: Österreich, Schweiz",
                "Norden: Dänemark"
            ],
            merksatz: "Himmelsrichtung + Nachbar zusammen merken."
        },
        uebung: { leicht: [
                {
                    id: "euk4l2_l1", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "leicht", points: 10,
                    question: "Wie viele Nachbarn hat Deutschland im Osten?", answers: ["Zwei: Polen und Tschechien", "Nur eines, nämlich Polen", "Drei: Polen, Tschechien, Ungarn", "Keines, dort liegt das Meer"], correct: 0,
                    explanation: "Polen grenzt an den Nordosten, Tschechien an den Südosten."
                },
                {
                    id: "euk4l2_l2", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "leicht", points: 10,
                    question: "Welches Land grenzt im Norden an Deutschland?", answers: ["Dänemark", "Italien", "Spanien", "Griechenland"], correct: 0,
                    explanation: "Dänemark ist der einzige Nachbar im Norden. Rechts und links davon liegen Nordsee und Ostsee."
                },
                {
                    id: "euk4l2_l3", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "leicht", points: 10,
                    question: "Wie viele Nachbarländer hat Deutschland?", answers: ["Neun", "Drei", "Fünf", "Fünfzehn"], correct: 0,
                    explanation: "Neun: Dänemark, Polen, Tschechien, Österreich, Schweiz, Frankreich, Luxemburg, Belgien und die Niederlande."
                },
                {
                    id: "euk4l2_l4", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "leicht", points: 10,
                    question: "Welches Land grenzt im Westen an Deutschland?", answers: ["Frankreich", "Polen", "Dänemark", "Tschechien"], correct: 0,
                    explanation: "Im Westen liegen Frankreich, Luxemburg, Belgien und die Niederlande."
                }
            ], mittel: [
                {
                    id: "euk4l2_m1", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "mittel", points: 10,
                    question: "Welches Land grenzt im Süden an Deutschland?", answers: ["Österreich", "Dänemark", "Polen", "Schweden"], correct: 0,
                    explanation: "Im Süden grenzen Österreich und die Schweiz an Deutschland – dort liegen auch die Alpen."
                },
                {
                    id: "euk4l2_m2", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "mittel", points: 10,
                    question: "Wo liegt die Schweiz von Deutschland aus?", answers: ["Südlich", "Nördlich", "Östlich", "Westlich"], correct: 0,
                    explanation: "Die Schweiz grenzt im Süden an Deutschland."
                },
                {
                    id: "euk4l2_m3", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "mittel", points: 10,
                    question: "Wo liegen die Niederlande von Deutschland aus?", answers: ["Nordwestlich", "Südöstlich", "Weit im Osten", "Südlich der Alpen"], correct: 0,
                    explanation: "Die Niederlande liegen an der Nordwestecke, direkt an der Nordsee."
                },
                {
                    id: "euk4l2_m4", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "mittel", points: 10,
                    question: "An welchen Meeren liegt Deutschland?", answers: ["An Nord- und Ostsee", "Nur am Mittelmeer", "Nur am Schwarzen Meer", "An gar keinem Meer"], correct: 0,
                    explanation: "Zwei Meere: die Nordsee im Nordwesten, die Ostsee im Nordosten."
                }
            ], schwer: [
                {
                    id: "euk4l2_s1", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "schwer", points: 10,
                    question: "Wo liegt Italien von Deutschland aus?", answers: ["Südlich, hinter den Alpen", "Nördlich, an der Nordsee", "Östlich, hinter Polen", "Westlich, hinter Frankreich"], correct: 0,
                    explanation: "Wer von Deutschland nach Italien fährt, muss die Alpen überqueren."
                },
                {
                    id: "euk4l2_s2", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "schwer", points: 10,
                    question: "Was ist die Europäische Union?", answers: ["Ein Bund von Ländern", "Ein einzelnes Land", "Ein hohes Gebirge", "Ein großer Fluss"], correct: 0,
                    explanation: "In der EU arbeiten viele europäische Länder zusammen – zum Beispiel beim Handel und beim Reisen ohne Grenzkontrollen."
                },
                {
                    id: "euk4l2_s3", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "schwer", points: 10,
                    question: "Welches Nachbarland Deutschlands ist das kleinste?", answers: ["Luxemburg", "Frankreich", "Polen", "Österreich"], correct: 0,
                    explanation: "Luxemburg liegt im Westen und ist kleiner als das Saarland."
                },
                {
                    id: "euk4l2_s4", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "schwer", points: 10,
                    question: "Welches Land grenzt im Südosten an Deutschland?", answers: ["Tschechien", "Frankreich", "Dänemark", "Belgien"], correct: 0,
                    explanation: "Tschechien grenzt an Bayern und Sachsen."
                }
            ] },
        test: [
                {
                    id: "euk4l2_t1", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "mittel", points: 10,
                    question: "Welche zwei Länder grenzen im Süden an Deutschland?", answers: ["Österreich und die Schweiz", "Polen und Tschechien", "Dänemark und Schweden", "Belgien und Frankreich"], correct: 0,
                    explanation: "Österreich und die Schweiz. Dahinter beginnen die Alpen."
                },
                {
                    id: "euk4l2_t2", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "mittel", points: 10,
                    question: "Welches Meer liegt im Nordosten Deutschlands?", answers: ["Die Ostsee", "Die Nordsee", "Das Mittelmeer", "Der Atlantik"], correct: 0,
                    explanation: "Die Ostsee liegt im Nordosten, die Nordsee im Nordwesten."
                },
                {
                    id: "euk4l2_t3", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "mittel", points: 10,
                    question: "Was ist Berlin?", answers: ["Die Hauptstadt Deutschlands", "Die Hauptstadt Frankreichs", "Ein Fluss in Bayern", "Ein Berg im Harz"], correct: 0,
                    explanation: "Berlin ist Hauptstadt und Regierungssitz Deutschlands."
                },
                {
                    id: "euk4l2_t4", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "mittel", points: 10,
                    question: "Welches Nachbarland liegt ganz im Nordwesten?", answers: ["Die Niederlande", "Die Schweiz", "Tschechien", "Österreich"], correct: 0,
                    explanation: "Die Niederlande liegen an der Nordwestecke Deutschlands, direkt an der Nordsee."
                },
                {
                    id: "euk4l2_t5", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "mittel", points: 10,
                    question: "In welchem Land liegt Wien?", answers: ["In Österreich", "In Polen", "In Frankreich", "In Dänemark"], correct: 0,
                    explanation: "Wien ist die Hauptstadt Österreichs und liegt an der Donau."
                },
                {
                    id: "euk4l2_t6", category: "kurs_eu_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "europa", difficulty: "mittel", points: 10,
                    question: "Welches Land liegt zwischen Deutschland und Belgien?", answers: ["Luxemburg", "Polen", "Dänemark", "Tschechien"], correct: 0,
                    explanation: "Luxemburg ist ein kleines Land im Westen – zwischen Deutschland, Belgien und Frankreich."
                }
        ],
        bestehenAb: 0.75
    }
    ];
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) {
            if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l);
        });
    }
})();
