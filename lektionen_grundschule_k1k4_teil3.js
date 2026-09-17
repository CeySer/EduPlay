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
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='60.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='100.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='140.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/></svg>",
                    explanation: "alles."
                }
            ], mittel: [
                {
                    id: "brk3l2_m1", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "mittel", points: 10,
                    question: "Zwei von vier sind wie …", answers: ["1/2", "1/8", "3/4", "0"], correct: 0,
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='60.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='100.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/><rect x='140.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/></svg>",
                    explanation: "2/4=1/2."
                },
                {
                    id: "brk3l2_m2", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "mittel", points: 10,
                    question: "Was ist mehr: 3/4 oder 1/4?", answers: ["3/4", "1/4", "gleich", "keins"], correct: 0,
                    grafik: "<svg viewBox='0 0 100.0 46' style='width:100%;max-width:100px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='0.0' y='6' width='9.6' height='34' rx='3' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='1.3'/><rect x='12.1' y='6' width='9.6' height='34' rx='3' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='1.3'/><rect x='24.2' y='6' width='9.6' height='34' rx='3' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='1.3'/><rect x='36.4' y='6' width='9.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='54.0' y='6' width='9.6' height='34' rx='3' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='1.3'/><rect x='66.1' y='6' width='9.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='78.2' y='6' width='9.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='90.4' y='6' width='9.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/></svg>",
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
                    grafik: "<svg viewBox='0 0 120 130' style='width:100%;max-width:140px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='10' width='60' height='44' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><text x='60' y='38' text-anchor='middle' font-size='22' font-weight='800' font-family='sans-serif' fill='#1f2937'>3</text><line x1='16' y1='65' x2='104' y2='65' stroke='#64748b' stroke-width='4' stroke-linecap='round'/><rect x='30' y='76' width='60' height='44' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/><text x='60' y='104' text-anchor='middle' font-size='22' font-weight='800' font-family='sans-serif' fill='#1f2937'>4</text></svg>",
                    explanation: "Der Nenner steht unten und sagt, in wie viele Teile das Ganze geteilt ist."
                },
                {
                    id: "brk3l2_s2", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "schwer", points: 10,
                    question: "Zähler ist …", answers: ["die dunklen Teile", "immer 10", "die Ampel", "Norden"], correct: 0,
                    grafik: "<svg viewBox='0 0 120 130' style='width:100%;max-width:140px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='10' width='60' height='44' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><text x='60' y='38' text-anchor='middle' font-size='22' font-weight='800' font-family='sans-serif' fill='#1f2937'>3</text><line x1='16' y1='65' x2='104' y2='65' stroke='#64748b' stroke-width='4' stroke-linecap='round'/><rect x='30' y='76' width='60' height='44' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/><text x='60' y='104' text-anchor='middle' font-size='22' font-weight='800' font-family='sans-serif' fill='#1f2937'>4</text></svg>",
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
                    grafik: "<svg viewBox='0 0 208.0 46' style='width:100%;max-width:208px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='0.0' y='6' width='9.6' height='34' rx='3' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='1.3'/><rect x='12.1' y='6' width='9.6' height='34' rx='3' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='1.3'/><rect x='24.2' y='6' width='9.6' height='34' rx='3' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='1.3'/><rect x='36.4' y='6' width='9.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='54.0' y='6' width='9.6' height='34' rx='3' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='1.3'/><rect x='66.1' y='6' width='9.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='78.2' y='6' width='9.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='90.4' y='6' width='9.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='108.0' y='6' width='21.8' height='34' rx='3' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='1.3'/><rect x='132.2' y='6' width='21.8' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='162.0' y='6' width='3.6' height='34' rx='3' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='1.3'/><rect x='168.1' y='6' width='3.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='174.1' y='6' width='3.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='180.2' y='6' width='3.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='186.2' y='6' width='3.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='192.3' y='6' width='3.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='198.4' y='6' width='3.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='204.4' y='6' width='3.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/></svg>",
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
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='60.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='100.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/><rect x='140.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='2'/></svg>",
                    explanation: "Hälfte."
                },
                {
                    id: "brk3l2_t5", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "mittel", points: 10,
                    question: "Größer?", answers: ["3/4", "1/4", "gleich", "keins"], correct: 0,
                    grafik: "<svg viewBox='0 0 100.0 46' style='width:100%;max-width:100px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='0.0' y='6' width='9.6' height='34' rx='3' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='1.3'/><rect x='12.1' y='6' width='9.6' height='34' rx='3' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='1.3'/><rect x='24.2' y='6' width='9.6' height='34' rx='3' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='1.3'/><rect x='36.4' y='6' width='9.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='54.0' y='6' width='9.6' height='34' rx='3' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='1.3'/><rect x='66.1' y='6' width='9.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='78.2' y='6' width='9.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/><rect x='90.4' y='6' width='9.6' height='34' rx='3' fill='rgba(226,232,240,0.9)' stroke='#64748b' stroke-width='1.3'/></svg>",
                    explanation: "3/4."
                },
                {
                    id: "brk3l2_t6", category: "kurs_bruch_k3_l2", area: "schule", grade: 3,
                    subject: "mathe", topic: "brueche", difficulty: "mittel", points: 10,
                    question: "4/4 =", answers: ["1 Ganzes", "1/4", "1/2", "0"], correct: 0,
                    grafik: "<svg viewBox='0 0 200 140' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='60.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='100.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/><rect x='140.0' y='40.0' width='36.0' height='60' rx='6' fill='rgba(244,114,182,0.85)' stroke='#64748b' stroke-width='2'/></svg>",
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
                    explanation: "In der Legende steht, wofür jedes Symbol steht – zum Beispiel ein Kreuz für eine Kirche.",
                    grafik: "<svg viewBox='0 0 124 100' style='width:100%;max-width:140px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='60' height='84' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><path d='M16,70 Q30,50 44,66 T60,55' fill='none' stroke='#38bdf8' stroke-width='3'/><circle cx='30' cy='30' r='9' fill='#34d399' opacity='0.8'/><rect x='78' y='16' width='38' height='68' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='2'/><rect x='86' y='26' width='10' height='10' fill='#a16207'/><line x1='100' y1='31' x2='110' y2='31' stroke='#94a3b8' stroke-width='2'/><rect x='86' y='44' width='10' height='10' fill='#34d399'/><line x1='100' y1='49' x2='110' y2='49' stroke='#94a3b8' stroke-width='2'/><rect x='86' y='62' width='10' height='10' fill='#a16207'/><line x1='100' y1='67' x2='110' y2='67' stroke='#94a3b8' stroke-width='2'/></svg>"
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
                    explanation: "Dreh die Karte so, dass ihr Norden auch in der Wirklichkeit nach Norden zeigt. Dann stimmt alles.",
                    grafik: "<svg viewBox='0 0 120 120' style='width:100%;max-width:130px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='60' r='46' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><polygon points='60,20 68,60 60,54 52,60' fill='#ef4444'/><polygon points='60,100 68,60 60,66 52,60' fill='#e5e7eb'/><circle cx='60' cy='60' r='4' fill='#e5e7eb'/></svg>"
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
                    explanation: "Die Nadel zeigt nach Norden. Stehst du mit dem Gesicht nach Norden, ist rechts Osten und links Westen.",
                    grafik: "<svg viewBox='0 0 120 120' style='width:100%;max-width:130px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='60' r='46' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><polygon points='60,20 68,60 60,54 52,60' fill='#ef4444'/><polygon points='60,100 68,60 60,66 52,60' fill='#e5e7eb'/><circle cx='60' cy='60' r='4' fill='#e5e7eb'/></svg>"
                },
                {
                    id: "kak3l2_m3", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "mittel", points: 10,
                    question: "Am Morgen steht die Sonne links von dir. In welche Richtung schaust du?", answers: ["Nach Norden", "Nach Süden", "Nach Westen", "Nach Osten"], correct: 0,
                    explanation: "Morgens steht die Sonne im Osten. Ist Osten links, dann schaust du nach Norden.",
                    grafik: "<svg viewBox='0 0 120 90' style='width:100%;max-width:130px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='6' y1='72' x2='114' y2='72' stroke='#94a3b8' stroke-width='3'/><path d='M40,72 A20,20 0 0 1 80,72 Z' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><line x1='60' y1='34' x2='60' y2='22' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><line x1='38' y1='42' x2='29' y2='33' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><line x1='82' y1='42' x2='91' y2='33' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><polygon points='60,72 55,64 65,64' fill='#f59e0b'/></svg>"
                },
                {
                    id: "kak3l2_m4", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "mittel", points: 10,
                    question: "Was bedeutet ein blaues Band auf der Karte?", answers: ["Einen Fluss", "Eine Straße", "Eine Bahnlinie", "Eine Grenze"], correct: 0,
                    explanation: "Blau ist immer Wasser. Ein schmales blaues Band ist ein Fluss oder Bach.",
                    grafik: "<svg viewBox='0 0 100 80' style='width:100%;max-width:110px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M10,20 Q40,10 50,35 T90,45 Q100,55 90,70' fill='none' stroke='#38bdf8' stroke-width='7' stroke-linecap='round'/></svg>"
                }
            ], schwer: [
                {
                    id: "kak3l2_s1", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "schwer", points: 10,
                    question: "Du gehst nach Norden und drehst dich um. Wohin gehst du jetzt?", answers: ["Nach Süden", "Weiter nach Norden", "Nach Westen", "Nach Osten"], correct: 0,
                    explanation: "Beim Umdrehen läufst du in die Gegenrichtung – und die Gegenrichtung von Norden ist Süden.",
                    grafik: "<svg viewBox='0 0 120 120' style='width:100%;max-width:120px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='60' r='10' fill='#e5e7eb'/><path d='M60,20 A40,40 0 1 1 20,60' fill='none' stroke='#f59e0b' stroke-width='6' stroke-linecap='round'/><polygon points='20,60 30,52 30,68' fill='#f59e0b'/><path d='M60,100 A40,40 0 1 1 100,60' fill='none' stroke='#94a3b8' stroke-width='6' stroke-linecap='round' opacity='0.4'/></svg>"
                },
                {
                    id: "kak3l2_s2", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "schwer", points: 10,
                    question: "Wozu braucht eine Karte einen Maßstab?", answers: ["Er zeigt echte Entfernungen", "Er zeigt die Uhrzeit", "Er zeigt die Höhe", "Er zeigt das Wetter"], correct: 0,
                    explanation: "Der Maßstab sagt dir, wie viele Meter in der Wirklichkeit einem Zentimeter auf der Karte entsprechen.",
                    grafik: "<svg viewBox='0 0 140 90' style='width:100%;max-width:160px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='40' width='120' height='20' rx='3' fill='#1e293b' stroke='#94a3b8' stroke-width='2'/><line x1='10' y1='40' x2='10' y2='60' stroke='#e5e7eb' stroke-width='1.5'/><line x1='22' y1='40' x2='22' y2='52' stroke='#94a3b8' stroke-width='1.5'/><line x1='34' y1='40' x2='34' y2='60' stroke='#94a3b8' stroke-width='1.5'/><line x1='46' y1='40' x2='46' y2='52' stroke='#94a3b8' stroke-width='1.5'/><line x1='58' y1='40' x2='58' y2='60' stroke='#94a3b8' stroke-width='1.5'/><line x1='70' y1='40' x2='70' y2='52' stroke='#e5e7eb' stroke-width='1.5'/><line x1='82' y1='40' x2='82' y2='60' stroke='#94a3b8' stroke-width='1.5'/><line x1='94' y1='40' x2='94' y2='52' stroke='#94a3b8' stroke-width='1.5'/><line x1='106' y1='40' x2='106' y2='60' stroke='#94a3b8' stroke-width='1.5'/><line x1='118' y1='40' x2='118' y2='52' stroke='#94a3b8' stroke-width='1.5'/><line x1='130' y1='40' x2='130' y2='60' stroke='#e5e7eb' stroke-width='1.5'/><line x1='10' y1='76' x2='130' y2='76' stroke='#94a3b8' stroke-width='2'/><polygon points='10,76 18,71 18,81' fill='#f59e0b'/><polygon points='130,76 122,71 122,81' fill='#f59e0b'/><text x='70' y='72' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>in Wirklichkeit</text></svg>"
                },
                {
                    id: "kak3l2_s3", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "schwer", points: 10,
                    question: "Was zeigt ein Stadtplan genauer als eine Landkarte?", answers: ["Einzelne Straßen", "Ganze Länder", "Alle Kontinente", "Die Meere"], correct: 0,
                    explanation: "Je kleiner der Ausschnitt, desto mehr Einzelheiten passen darauf. Ein Stadtplan zeigt jede Straße.",
                    grafik: "<svg viewBox='0 0 116 116' style='width:100%;max-width:126px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='90' height='90' rx='6' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><path d='M14,60 Q30,40 46,58 T80,44' fill='none' stroke='#38bdf8' stroke-width='2.5'/><circle cx='30' cy='24' r='8' fill='#34d399' opacity='0.7'/><circle cx='66' cy='70' r='24' fill='rgba(15,23,42,0.35)' stroke='#f59e0b' stroke-width='4'/><line x1='84' y1='88' x2='104' y2='108' stroke='#f59e0b' stroke-width='6' stroke-linecap='round'/></svg>"
                },
                {
                    id: "kak3l2_s4", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "schwer", points: 10,
                    question: "Du willst von der Schule nach Hause. Was hilft dir?", answers: ["Ein Stadtplan", "Eine Weltkarte", "Ein Kalender", "Ein Lineal"], correct: 0,
                    explanation: "Für kurze Wege im Ort brauchst du einen Stadtplan – die Weltkarte ist viel zu grob.",
                    grafik: "<svg viewBox='0 0 120 105' style='width:100%;max-width:130px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M14,20 L44,10 L74,20 L104,10 L104,90 L74,100 L44,90 L14,100 Z' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><line x1='44' y1='10' x2='44' y2='90' stroke='#94a3b8' stroke-width='1.5' stroke-dasharray='4,3'/><line x1='74' y1='20' x2='74' y2='100' stroke='#94a3b8' stroke-width='1.5' stroke-dasharray='4,3'/><circle cx='60' cy='52' r='13' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><polygon points='60,80 52,58 68,58' fill='#f59e0b'/><circle cx='60' cy='52' r='4' fill='#1e293b'/></svg>"
                }
            ] },
        test: [
                {
                    id: "kak3l2_t1", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "mittel", points: 10,
                    question: "Wo steht auf der Karte, was die Zeichen bedeuten?", answers: ["In der Legende", "Im Maßstab", "Im Titel", "Am Rand unten"], correct: 0,
                    explanation: "Die Legende erklärt jedes Symbol.",
                    grafik: "<svg viewBox='0 0 124 100' style='width:100%;max-width:140px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='60' height='84' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><path d='M16,70 Q30,50 44,66 T60,55' fill='none' stroke='#38bdf8' stroke-width='3'/><circle cx='30' cy='30' r='9' fill='#34d399' opacity='0.8'/><rect x='78' y='16' width='38' height='68' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='2'/><rect x='86' y='26' width='10' height='10' fill='#a16207'/><line x1='100' y1='31' x2='110' y2='31' stroke='#94a3b8' stroke-width='2'/><rect x='86' y='44' width='10' height='10' fill='#34d399'/><line x1='100' y1='49' x2='110' y2='49' stroke='#94a3b8' stroke-width='2'/><rect x='86' y='62' width='10' height='10' fill='#a16207'/><line x1='100' y1='67' x2='110' y2='67' stroke='#94a3b8' stroke-width='2'/></svg>"
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
                    explanation: "Die rote Spitze zeigt immer nach Norden.",
                    grafik: "<svg viewBox='0 0 120 120' style='width:100%;max-width:130px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='60' r='46' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><polygon points='60,20 68,60 60,54 52,60' fill='#ef4444'/><polygon points='60,100 68,60 60,66 52,60' fill='#e5e7eb'/><circle cx='60' cy='60' r='4' fill='#e5e7eb'/></svg>"
                },
                {
                    id: "kak3l2_t4", category: "kurs_karte_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte", difficulty: "mittel", points: 10,
                    question: "Was sagt dir der Maßstab?", answers: ["Die echte Entfernung", "Die Uhrzeit", "Die Himmelsrichtung", "Die Farbe"], correct: 0,
                    explanation: "Er rechnet Zentimeter auf der Karte in Meter in der Wirklichkeit um.",
                    grafik: "<svg viewBox='0 0 140 90' style='width:100%;max-width:160px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='40' width='120' height='20' rx='3' fill='#1e293b' stroke='#94a3b8' stroke-width='2'/><line x1='10' y1='40' x2='10' y2='60' stroke='#e5e7eb' stroke-width='1.5'/><line x1='22' y1='40' x2='22' y2='52' stroke='#94a3b8' stroke-width='1.5'/><line x1='34' y1='40' x2='34' y2='60' stroke='#94a3b8' stroke-width='1.5'/><line x1='46' y1='40' x2='46' y2='52' stroke='#94a3b8' stroke-width='1.5'/><line x1='58' y1='40' x2='58' y2='60' stroke='#94a3b8' stroke-width='1.5'/><line x1='70' y1='40' x2='70' y2='52' stroke='#e5e7eb' stroke-width='1.5'/><line x1='82' y1='40' x2='82' y2='60' stroke='#94a3b8' stroke-width='1.5'/><line x1='94' y1='40' x2='94' y2='52' stroke='#94a3b8' stroke-width='1.5'/><line x1='106' y1='40' x2='106' y2='60' stroke='#94a3b8' stroke-width='1.5'/><line x1='118' y1='40' x2='118' y2='52' stroke='#94a3b8' stroke-width='1.5'/><line x1='130' y1='40' x2='130' y2='60' stroke='#e5e7eb' stroke-width='1.5'/><line x1='10' y1='76' x2='130' y2='76' stroke='#94a3b8' stroke-width='2'/><polygon points='10,76 18,71 18,81' fill='#f59e0b'/><polygon points='130,76 122,71 122,81' fill='#f59e0b'/><text x='70' y='72' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>in Wirklichkeit</text></svg>"
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
                    explanation: "Große Entfernungen passen nur auf eine Karte mit großem Ausschnitt.",
                    grafik: "<svg viewBox='0 0 120 120' style='width:100%;max-width:130px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='60' r='46' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><ellipse cx='60' cy='60' rx='46' ry='18' fill='none' stroke='#38bdf8' stroke-width='1.5'/><ellipse cx='60' cy='60' rx='18' ry='46' fill='none' stroke='#38bdf8' stroke-width='1.5'/><path d='M28,44 Q40,36 50,44 T74,42 Q84,46 80,56 Q70,58 66,68 Q56,74 46,68 Q34,64 28,44 Z' fill='#34d399' opacity='0.85'/><path d='M78,70 Q90,72 88,82 Q80,86 74,80 Q74,72 78,70 Z' fill='#34d399' opacity='0.85'/></svg>"
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
        "id": "bl_k4_l2",
        "kurs": "bundeslaender_k4",
        "order": 2,
        "icon": "🧭",
        "title": "Lage & Nachbarn",
        "kurz": "Flächenländer, Stadtstaaten und wo die Bundesländer liegen",
        "erklaerung": {
            "intro": "Die meisten Bundesländer sind <b>Flächenländer</b> – große Gebiete mit vielen Städten. <b>Berlin, Hamburg und Bremen</b> sind <b>Stadtstaaten</b>: Stadt und Bundesland sind dort dasselbe. Manche Bundesländer grenzen ans Meer (Nordsee oder Ostsee), andere liegen mitten im Land.",
            "merksatz": "Stadtstaat = Stadt und Bundesland zugleich. Alle anderen sind Flächenländer.",
            "beispiele": [
                "Bayern ist ein Flächenland.<svg viewBox='0 0 200 70' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='188' height='58' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='16' y='16' width='10' height='38' fill='#f59e0b'/><text x='108' y='42' text-anchor='middle' dominant-baseline='middle' font-size='17' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Bayern</text></svg>",
                "Hamburg ist ein Stadtstaat.<svg viewBox='0 0 200 70' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='188' height='58' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='16' y='16' width='10' height='38' fill='#f59e0b'/><text x='108' y='42' text-anchor='middle' dominant-baseline='middle' font-size='17' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Hamburg</text></svg>",
                "Schleswig-Holstein grenzt an die Nordsee.<svg viewBox='0 0 200 70' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='188' height='58' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='16' y='16' width='10' height='38' fill='#f59e0b'/><text x='108' y='42' text-anchor='middle' dominant-baseline='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Schleswig-Holstein</text></svg>"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "blk4l2_l1",
                    "category": "kurs_bl_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "sachunterricht",
                    "topic": "geografie",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Bundesland liegt ganz im Norden, an der Grenze zu Dänemark?",
                    "answers": [
                        "Schleswig-Holstein",
                        "Niedersachsen",
                        "Brandenburg",
                        "Sachsen-Anhalt"
                    ],
                    "correct": 0,
                    "explanation": "Schleswig-Holstein ist das nördlichste Bundesland und grenzt direkt an Dänemark."
                },
                {
                    "id": "blk4l2_l2",
                    "category": "kurs_bl_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "sachunterricht",
                    "topic": "geografie",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Bundesland liegt ganz im Süden Deutschlands?",
                    "answers": [
                        "Bayern",
                        "Sachsen",
                        "Saarland",
                        "Hessen"
                    ],
                    "correct": 0,
                    "explanation": "Bayern liegt im Süden, dort verlaufen auch die Alpen."
                },
                {
                    "id": "blk4l2_l3",
                    "category": "kurs_bl_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "sachunterricht",
                    "topic": "flaechenland_stadtstaat",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ist Bayern ein Flächenland oder ein Stadtstaat?",
                    "answers": [
                        "Flächenland",
                        "Stadtstaat",
                        "Keins von beidem",
                        "Beides gleichzeitig"
                    ],
                    "correct": 0,
                    "explanation": "Bayern ist ein Flächenland.",
                    "grafik": "<svg viewBox='0 0 200 70' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='188' height='58' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='16' y='16' width='10' height='38' fill='#f59e0b'/><text x='108' y='42' text-anchor='middle' dominant-baseline='middle' font-size='17' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Bayern</text></svg>"
                },
                {
                    "id": "blk4l2_l4",
                    "category": "kurs_bl_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "sachunterricht",
                    "topic": "flaechenland_stadtstaat",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ist Hamburg ein Flächenland oder ein Stadtstaat?",
                    "answers": [
                        "Stadtstaat",
                        "Flächenland",
                        "Keins von beidem",
                        "Beides gleichzeitig"
                    ],
                    "correct": 0,
                    "explanation": "Hamburg ist ein Stadtstaat.",
                    "grafik": "<svg viewBox='0 0 200 70' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='188' height='58' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='16' y='16' width='10' height='38' fill='#f59e0b'/><text x='108' y='42' text-anchor='middle' dominant-baseline='middle' font-size='17' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Hamburg</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "blk4l2_m1",
                    "category": "kurs_bl_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "sachunterricht",
                    "topic": "flaechenland_stadtstaat",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ist Sachsen ein Flächenland oder ein Stadtstaat?",
                    "answers": [
                        "Flächenland",
                        "Stadtstaat",
                        "Keins von beidem",
                        "Beides gleichzeitig"
                    ],
                    "correct": 0,
                    "explanation": "Sachsen ist ein Flächenland.",
                    "grafik": "<svg viewBox='0 0 200 70' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='188' height='58' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='16' y='16' width='10' height='38' fill='#f59e0b'/><text x='108' y='42' text-anchor='middle' dominant-baseline='middle' font-size='17' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Sachsen</text></svg>"
                },
                {
                    "id": "blk4l2_m2",
                    "category": "kurs_bl_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "sachunterricht",
                    "topic": "flaechenland_stadtstaat",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ist Bremen ein Flächenland oder ein Stadtstaat?",
                    "answers": [
                        "Stadtstaat",
                        "Flächenland",
                        "Keins von beidem",
                        "Beides gleichzeitig"
                    ],
                    "correct": 0,
                    "explanation": "Bremen ist ein Stadtstaat.",
                    "grafik": "<svg viewBox='0 0 200 70' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='188' height='58' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='16' y='16' width='10' height='38' fill='#f59e0b'/><text x='108' y='42' text-anchor='middle' dominant-baseline='middle' font-size='17' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Bremen</text></svg>"
                },
                {
                    "id": "blk4l2_m3",
                    "category": "kurs_bl_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "sachunterricht",
                    "topic": "geografie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "An welches Meer grenzt Schleswig-Holstein?",
                    "answers": [
                        "Nordsee",
                        "Ostsee",
                        "Ostsee und Nordsee",
                        "Kein Meer"
                    ],
                    "correct": 0,
                    "explanation": "Schleswig-Holstein grenzt an die Nordsee.",
                    "grafik": "<svg viewBox='0 0 200 70' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='188' height='58' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='16' y='16' width='10' height='38' fill='#f59e0b'/><text x='108' y='42' text-anchor='middle' dominant-baseline='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Schleswig-Holstein</text></svg>"
                },
                {
                    "id": "blk4l2_m4",
                    "category": "kurs_bl_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "sachunterricht",
                    "topic": "geografie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "An welches Meer grenzt Mecklenburg-Vorpommern?",
                    "answers": [
                        "Ostsee",
                        "Nordsee",
                        "Ostsee und Nordsee",
                        "Kein Meer"
                    ],
                    "correct": 0,
                    "explanation": "Mecklenburg-Vorpommern grenzt an die Ostsee.",
                    "grafik": "<svg viewBox='0 0 200 70' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='188' height='58' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='16' y='16' width='10' height='38' fill='#f59e0b'/><text x='108' y='42' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Mecklenburg-Vorpommern</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "blk4l2_s1",
                    "category": "kurs_bl_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "sachunterricht",
                    "topic": "geografie",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "In welchem Bundesland liegt die Zugspitze, der höchste Berg Deutschlands?",
                    "answers": [
                        "Bayern",
                        "Baden-Württemberg",
                        "Sachsen",
                        "Thüringen"
                    ],
                    "correct": 0,
                    "explanation": "Die Zugspitze liegt in den bayerischen Alpen, an der Grenze zu Österreich."
                },
                {
                    "id": "blk4l2_s2",
                    "category": "kurs_bl_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "sachunterricht",
                    "topic": "geografie",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welches Bundesland ist von der Fläche her das zweitgrößte?",
                    "answers": [
                        "Niedersachsen",
                        "Nordrhein-Westfalen",
                        "Hessen",
                        "Sachsen"
                    ],
                    "correct": 0,
                    "explanation": "Nach Bayern ist Niedersachsen das flächenmäßig zweitgrößte Bundesland."
                },
                {
                    "id": "blk4l2_s3",
                    "category": "kurs_bl_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "sachunterricht",
                    "topic": "geografie",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welches Bundesland liegt zwischen Bayern und Hessen?",
                    "answers": [
                        "Thüringen",
                        "Sachsen-Anhalt",
                        "Brandenburg",
                        "Saarland"
                    ],
                    "correct": 0,
                    "explanation": "Thüringen grenzt sowohl an Bayern im Süden als auch an Hessen im Westen."
                },
                {
                    "id": "blk4l2_s4",
                    "category": "kurs_bl_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "sachunterricht",
                    "topic": "flaechenland_stadtstaat",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was unterscheidet einen Stadtstaat von einem Flächenland?",
                    "answers": [
                        "Ein Stadtstaat ist eine einzelne Stadt",
                        "Ein Stadtstaat hat keine Regierung",
                        "Ein Stadtstaat liegt immer im Süden",
                        "Ein Stadtstaat hat keine Einwohner"
                    ],
                    "correct": 0,
                    "explanation": "Bei einem Stadtstaat sind Stadt und Bundesland dasselbe Gebiet – bei einem Flächenland gibt es viele Städte in einem großen Gebiet.",
                    "grafik": "<svg viewBox='0 0 120 105' style='width:100%;max-width:130px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='60' width='16' height='40' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><rect x='30' y='46' width='18' height='54' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><rect x='52' y='58' width='16' height='42' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><line x1='84' y1='100' x2='84' y2='30' stroke='#94a3b8' stroke-width='3'/><polygon points='84,30 110,38 84,46' fill='#f59e0b' stroke='#f59e0b' stroke-width='1.5'/><line x1='4' y1='100' x2='116' y2='100' stroke='#94a3b8' stroke-width='2'/></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "blk4l2_t1",
                "category": "kurs_bl_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "sachunterricht",
                "topic": "flaechenland_stadtstaat",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ist Berlin ein Flächenland oder ein Stadtstaat?",
                "answers": [
                    "Stadtstaat",
                    "Flächenland",
                    "Keins von beidem",
                    "Beides gleichzeitig"
                ],
                "correct": 0,
                "explanation": "Berlin ist ein Stadtstaat.",
                "grafik": "<svg viewBox='0 0 200 70' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='188' height='58' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='16' y='16' width='10' height='38' fill='#f59e0b'/><text x='108' y='42' text-anchor='middle' dominant-baseline='middle' font-size='17' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Berlin</text></svg>"
            },
            {
                "id": "blk4l2_t2",
                "category": "kurs_bl_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "sachunterricht",
                "topic": "flaechenland_stadtstaat",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ist Hessen ein Flächenland oder ein Stadtstaat?",
                "answers": [
                    "Flächenland",
                    "Stadtstaat",
                    "Keins von beidem",
                    "Beides gleichzeitig"
                ],
                "correct": 0,
                "explanation": "Hessen ist ein Flächenland.",
                "grafik": "<svg viewBox='0 0 200 70' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='188' height='58' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='16' y='16' width='10' height='38' fill='#f59e0b'/><text x='108' y='42' text-anchor='middle' dominant-baseline='middle' font-size='17' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Hessen</text></svg>"
            },
            {
                "id": "blk4l2_t3",
                "category": "kurs_bl_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "sachunterricht",
                "topic": "geografie",
                "difficulty": "mittel",
                "points": 10,
                "question": "An welches Meer grenzt Niedersachsen?",
                "answers": [
                    "Nordsee",
                    "Ostsee",
                    "Ostsee und Nordsee",
                    "Kein Meer"
                ],
                "correct": 0,
                "explanation": "Niedersachsen grenzt an die Nordsee.",
                "grafik": "<svg viewBox='0 0 200 70' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='188' height='58' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='16' y='16' width='10' height='38' fill='#f59e0b'/><text x='108' y='42' text-anchor='middle' dominant-baseline='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Niedersachsen</text></svg>"
            },
            {
                "id": "blk4l2_t4",
                "category": "kurs_bl_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "sachunterricht",
                "topic": "flaechenland_stadtstaat",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was bedeutet 'Flächenland'?",
                "answers": [
                    "Ein großes Bundesland mit vielen Städten",
                    "Ein Bundesland ohne Hauptstadt",
                    "Ein Bundesland direkt am Meer",
                    "Ein Bundesland ohne Einwohner"
                ],
                "correct": 0,
                "explanation": "Ein Flächenland ist ein großes Gebiet mit vielen Städten – im Gegensatz zum Stadtstaat, der nur eine einzige Stadt ist.",
                "grafik": "<svg viewBox='0 0 120 118' style='width:100%;max-width:120px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M60,10 L104,26 V60 Q104,90 60,108 Q16,90 16,60 V26 Z' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><line x1='60' y1='30' x2='60' y2='86' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4,4'/><line x1='34' y1='58' x2='86' y2='58' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4,4'/></svg>"
            },
            {
                "id": "blk4l2_t5",
                "category": "kurs_bl_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "sachunterricht",
                "topic": "bundeslaender",
                "difficulty": "mittel",
                "points": 10,
                "question": "In welchem Bundesland liegt die Landeshauptstadt Kiel?",
                "answers": [
                    "Schleswig-Holstein",
                    "Niedersachsen",
                    "Brandenburg",
                    "Sachsen-Anhalt"
                ],
                "correct": 0,
                "explanation": "Kiel ist die Landeshauptstadt von Schleswig-Holstein.",
                "grafik": "<svg viewBox='0 0 200 70' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='188' height='58' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='16' y='16' width='10' height='38' fill='#f59e0b'/><text x='108' y='42' text-anchor='middle' dominant-baseline='middle' font-size='17' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Kiel</text></svg>"
            },
            {
                "id": "blk4l2_t6",
                "category": "kurs_bl_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "sachunterricht",
                "topic": "bundeslaender",
                "difficulty": "mittel",
                "points": 10,
                "question": "In welchem Bundesland liegt die Landeshauptstadt Mainz?",
                "answers": [
                    "Rheinland-Pfalz",
                    "Saarland",
                    "Hessen",
                    "Baden-Württemberg"
                ],
                "correct": 0,
                "explanation": "Mainz ist die Landeshauptstadt von Rheinland-Pfalz.",
                "grafik": "<svg viewBox='0 0 200 70' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='188' height='58' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='16' y='16' width='10' height='38' fill='#f59e0b'/><text x='108' y='42' text-anchor='middle' dominant-baseline='middle' font-size='17' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Mainz</text></svg>"
            }
        ],
        "bestehenAb": 0.75
    }
    ];
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) {
            if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l);
        });
    }
})();
