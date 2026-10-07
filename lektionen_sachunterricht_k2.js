// Sachunterricht Klasse 2 - Tiere/Getreide, Wasser und Stoffe, Zeit, Zaehne und Fahrrad
// 4 Kurse mit je 3 Lektionen - erzeugt aus /tmp/su/k2d1..k2d4.js.
// Klasse 2 hatte vorher keinen einzigen Sachunterricht-Kurs.
// Die Themen (topic) entsprechen genau den Wissensfragen derselben Klasse, damit
// die Kurs-Empfehlung aus dem Wissen-Modus den passenden Kurs findet.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "tiere_k2", title: "Tiere, Pflanzen, Getreide", icon: "🌾", grade: 2, subject: "sachunterricht", beschreibung: "Tiergruppen erkennen, vom Korn zum Brot, Frühblüher und Verwandlungen." },
        { id: "stoffe_k2", title: "Wasser und Stoffe", icon: "💧", grade: 2, subject: "sachunterricht", beschreibung: "Schwimmen und sinken, Eis, Wasser und Dampf, Magnete und Materialien." },
        { id: "zeit_k2", title: "Zeit und Orientierung", icon: "📅", grade: 2, subject: "sachunterricht", beschreibung: "Wochentage, Monate und das Jahr, Himmelsrichtungen und der Lauf der Sonne." },
        { id: "zaehne_rad_k2", title: "Zähne und Fahrrad", icon: "🚲", grade: 2, subject: "sachunterricht", beschreibung: "Gesunde Zähne, das verkehrssichere Fahrrad und Verkehrszeichen." }
    ];
    const extraLektionen = [
    {
        id: "tp_k2_l1", kurs: "tiere_k2", order: 1, icon: "🐟",
        title: "Säugetier, Vogel, Fisch", kurz: "Tiere in Gruppen ordnen",
        erklaerung: {
            intro: "Tiere lassen sich in Gruppen ordnen. <b>Säugetiere</b> trinken als Baby Milch bei der Mutter, die meisten haben Fell. <b>Vögel</b> haben Federn und legen Eier. <b>Fische</b> leben im Wasser und atmen mit <b>Kiemen</b>. <b>Insekten</b> haben sechs Beine.",
            beispiele: ["Hund, Kuh, Wal – Säugetiere",
                "Huhn, Amsel, Pinguin – Vögel",
                "Forelle, Hai – Fische"],
            merksatz: "Säugetier: Milch für die Babys. Vogel: Federn und Eier. Fisch: Kiemen und Flossen. Insekt: sechs Beine."
        },
        uebung: {
            leicht: [
                {
                    id: "tpk2l1_l1", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "leicht", points: 10,
                    question: "Womit atmen Fische?", answers: ["mit Kiemen", "mit der Lunge", "mit der Nase", "mit den Flossen"], correct: 0,
                    explanation: "Fische atmen mit Kiemen."
                },
                {
                    id: "tpk2l1_l2", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "leicht", points: 10,
                    question: "Was haben alle Vögel?", answers: ["Federn", "Fell", "Schuppen", "Stacheln"], correct: 0,
                    explanation: "Alle Vögel haben Federn."
                },
                {
                    id: "tpk2l1_l3", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "leicht", points: 10,
                    question: "Was trinken Säugetier-Babys?", answers: ["Milch der Mutter", "Wasser aus dem Teich", "Apfelsaft", "Honig und Tee"], correct: 0,
                    explanation: "Darum heißen sie Säugetiere."
                },
                {
                    id: "tpk2l1_l4", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "leicht", points: 10,
                    question: "Welches Tier ist ein Vogel?", answers: ["Pinguin", "Fledermaus", "Wal", "Hund"], correct: 0,
                    explanation: "Der Pinguin ist ein Vogel – er kann nur nicht fliegen."
                }
            ],
            mittel: [
                {
                    id: "tpk2l1_m1", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Welches Tier ist KEIN Säugetier?", answers: ["Huhn", "Hund", "Pferd", "Wal"], correct: 0,
                    explanation: "Das Huhn ist ein Vogel."
                },
                {
                    id: "tpk2l1_m2", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Welches Tier ist ein Säugetier?", answers: ["Wal", "Hai", "Forelle", "Karpfen"], correct: 0,
                    explanation: "Der Wal säugt seine Jungen."
                },
                {
                    id: "tpk2l1_m3", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Welches Tier legt Eier?", answers: ["Huhn", "Kuh", "Katze", "Pferd"], correct: 0,
                    explanation: "Vögel legen Eier."
                },
                {
                    id: "tpk2l1_m4", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Welches Tier ist ein Fisch?", answers: ["Hai", "Delfin", "Wal", "Robbe"], correct: 0,
                    explanation: "Der Hai atmet mit Kiemen."
                }
            ],
            schwer: [
                {
                    id: "tpk2l1_s1", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "schwer", points: 10,
                    question: "Die Fledermaus kann fliegen. Was ist sie?", answers: ["ein Säugetier", "ein Vogel", "ein Fisch", "ein Insekt"], correct: 0,
                    explanation: "Fledermäuse säugen ihre Jungen."
                },
                {
                    id: "tpk2l1_s2", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "schwer", points: 10,
                    question: "Was haben die meisten Fische auf der Haut?", answers: ["Schuppen", "Federn", "Fell", "Stacheln"], correct: 0,
                    explanation: "Fische haben Schuppen."
                },
                {
                    id: "tpk2l1_s3", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "schwer", points: 10,
                    question: "Wie viele Beine hat ein Insekt?", answers: ["6", "4", "8", "2"], correct: 0,
                    explanation: "Insekten haben sechs Beine."
                },
                {
                    id: "tpk2l1_s4", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "schwer", points: 10,
                    question: "Welches Tier ist ein Insekt?", answers: ["Biene", "Spinne", "Schnecke", "Regenwurm"], correct: 0,
                    explanation: "Die Biene hat sechs Beine."
                }
            ]
        },
        test: [
                {
                    id: "tpk2l1_t1", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Womit schwimmen Fische?", answers: ["mit Flossen", "mit Flügeln", "mit Füßen", "mit Federn"], correct: 0,
                    explanation: "Fische schwimmen mit Flossen."
                },
                {
                    id: "tpk2l1_t2", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Welches Tier hat Federn?", answers: ["Amsel", "Igel", "Maus", "Frosch"], correct: 0,
                    explanation: "Die Amsel ist ein Vogel."
                },
                {
                    id: "tpk2l1_t3", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Welches dieser Tiere ist ein Säugetier?", answers: ["Delfin", "Hai", "Karpfen", "Lachs"], correct: 0,
                    explanation: "Der Delfin säugt seine Jungen."
                },
                {
                    id: "tpk2l1_t4", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Wie viele Beine hat eine Spinne?", answers: ["8", "6", "4", "10"], correct: 0,
                    explanation: "Spinnen haben acht Beine – sie sind keine Insekten."
                },
                {
                    id: "tpk2l1_t5", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Welches Tier bringt lebende Junge zur Welt?", answers: ["Katze", "Huhn", "Ente", "Schildkröte"], correct: 0,
                    explanation: "Die Katze ist ein Säugetier."
                },
                {
                    id: "tpk2l1_t6", category: "kurs_tp_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Pinguine können nicht fliegen. Was sind sie?", answers: ["Vögel", "Fische", "Säugetiere", "Insekten"], correct: 0,
                    explanation: "Pinguine haben Federn und legen Eier."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "tp_k2_l2", kurs: "tiere_k2", order: 2, icon: "🍞",
        title: "Vom Korn zum Brot", kurz: "Getreide, Mühle, Bäcker",
        erklaerung: {
            intro: "<b>Getreide</b> sind Gräser mit Körnern: <b>Weizen</b>, <b>Roggen</b>, <b>Gerste</b>, <b>Hafer</b> und <b>Mais</b>. Im Sommer erntet der <b>Mähdrescher</b> die Körner, die <b>Mühle</b> mahlt sie zu <b>Mehl</b>, und der <b>Bäcker</b> backt daraus Brot.",
            beispiele: ["🌾 Weizen → helles Mehl für Brötchen",
                "Roggen → dunkles Brot",
                "Hafer → Haferflocken"],
            merksatz: "Korn – Mühle – Mehl – Bäcker – Brot."
        },
        uebung: {
            leicht: [
                {
                    id: "tpk2l2_l1", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "leicht", points: 10,
                    question: "Was ist ein Getreide?", answers: ["Weizen", "Kartoffel", "Apfel", "Möhre"], correct: 0,
                    explanation: "Weizen ist ein Getreide."
                },
                {
                    id: "tpk2l2_l2", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "leicht", points: 10,
                    question: "Woraus macht man Mehl?", answers: ["aus Getreidekörnern", "aus kleinen Steinen", "aus Äpfeln und Birnen", "aus Milch und Käse"], correct: 0,
                    explanation: "Mehl ist gemahlenes Korn."
                },
                {
                    id: "tpk2l2_l3", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "leicht", points: 10,
                    question: "Wo wird das Korn zu Mehl gemahlen?", answers: ["in der Mühle", "im Kühlschrank", "im Stall", "in der Schule"], correct: 0,
                    explanation: "Die Mühle mahlt das Korn."
                },
                {
                    id: "tpk2l2_l4", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "leicht", points: 10,
                    question: "Wer backt Brot und Brötchen?", answers: ["der Bäcker", "der Metzger", "der Gärtner", "der Maler"], correct: 0,
                    explanation: "Der Bäcker backt Brot."
                }
            ],
            mittel: [
                {
                    id: "tpk2l2_m1", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Woraus macht man Haferflocken?", answers: ["aus Hafer", "aus Weizen", "aus Mais", "aus Reis"], correct: 0,
                    explanation: "Haferflocken sind gewalzter Hafer."
                },
                {
                    id: "tpk2l2_m2", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Welche Maschine erntet das Getreide?", answers: ["Mähdrescher", "Bagger", "Kran", "Rasenmäher"], correct: 0,
                    explanation: "Der Mähdrescher mäht und drischt."
                },
                {
                    id: "tpk2l2_m3", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Woraus backt man oft dunkles Brot?", answers: ["aus Roggen", "aus Zucker", "aus Reis", "aus Kakao"], correct: 0,
                    explanation: "Roggenbrot ist dunkel."
                },
                {
                    id: "tpk2l2_m4", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Woraus backt man meist helle Brötchen?", answers: ["aus Weizen", "aus Roggen", "aus Hafer", "aus Mais"], correct: 0,
                    explanation: "Brötchen sind meist aus Weizenmehl."
                }
            ],
            schwer: [
                {
                    id: "tpk2l2_s1", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "schwer", points: 10,
                    question: "Was ist die richtige Reihenfolge?", answers: ["Korn, Mehl, Brot", "Brot, Korn, Mehl", "Mehl, Brot, Korn", "Korn, Brot, Mehl"], correct: 0,
                    explanation: "Erst das Korn, dann Mehl, dann Brot."
                },
                {
                    id: "tpk2l2_s2", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "schwer", points: 10,
                    question: "In welcher Jahreszeit wird Getreide geerntet?", answers: ["im Sommer", "im Winter", "im Frühling", "an Weihnachten"], correct: 0,
                    explanation: "Getreide wird im Sommer reif."
                },
                {
                    id: "tpk2l2_s3", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "schwer", points: 10,
                    question: "Was wächst unter der Erde?", answers: ["die Kartoffel", "der Apfel", "die Kirsche", "das Weizenkorn"], correct: 0,
                    explanation: "Die Kartoffel wächst in der Erde."
                },
                {
                    id: "tpk2l2_s4", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "schwer", points: 10,
                    question: "Woraus wird Popcorn gemacht?", answers: ["aus Mais", "aus Weizen", "aus Reis", "aus Hafer"], correct: 0,
                    explanation: "Popcorn sind geplatzte Maiskörner."
                }
            ]
        },
        test: [
                {
                    id: "tpk2l2_t1", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Wer mahlt das Korn zu Mehl?", answers: ["der Müller", "der Bäcker", "der Bauer", "der Koch"], correct: 0,
                    explanation: "Der Müller arbeitet in der Mühle."
                },
                {
                    id: "tpk2l2_t2", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Welches ist KEIN Getreide?", answers: ["Kartoffel", "Roggen", "Hafer", "Gerste"], correct: 0,
                    explanation: "Die Kartoffel ist eine Knolle."
                },
                {
                    id: "tpk2l2_t3", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Was braucht man für Brot?", answers: ["Mehl", "Schokolade", "Ketchup", "Gummibärchen"], correct: 0,
                    explanation: "Brot backt man aus Mehl."
                },
                {
                    id: "tpk2l2_t4", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Wo wächst Getreide?", answers: ["auf dem Feld", "im Meer", "im Keller", "auf dem Dach"], correct: 0,
                    explanation: "Getreide wächst auf Feldern."
                },
                {
                    id: "tpk2l2_t5", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Woraus macht man Cornflakes?", answers: ["aus Mais", "aus Hafer", "aus Reis", "aus Roggen"], correct: 0,
                    explanation: "Corn heißt Mais."
                },
                {
                    id: "tpk2l2_t6", category: "kurs_tp_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Was kommt nach der Ernte in die Mühle?", answers: ["die Körner", "die Brote", "die Kühe", "die Traktoren"], correct: 0,
                    explanation: "Die Körner werden gemahlen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "tp_k2_l3", kurs: "tiere_k2", order: 3, icon: "🦋",
        title: "Wachsen und verwandeln", kurz: "Kaulquappe, Raupe, Frühblüher",
        erklaerung: {
            intro: "Manche Tiere <b>verwandeln</b> sich: Aus der <b>Kaulquappe</b> wird ein Frosch, aus der <b>Raupe</b> wird ein Schmetterling. Die ersten Blumen im Jahr heißen <b>Frühblüher</b> – viele speichern Kraft in einer <b>Zwiebel</b> unter der Erde.",
            beispiele: ["🐸 Ei → Kaulquappe → Frosch",
                "🦋 Ei → Raupe → Puppe → Schmetterling",
                "🌷 Tulpe – Frühblüher mit Zwiebel"],
            merksatz: "Ei – Kaulquappe – Frosch. Ei – Raupe – Puppe – Schmetterling."
        },
        uebung: {
            leicht: [
                {
                    id: "tpk2l3_l1", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "leicht", points: 10,
                    question: "Was wird aus einer Kaulquappe?", answers: ["ein Frosch", "ein Fisch", "ein Vogel", "eine Schnecke"], correct: 0,
                    explanation: "Die Kaulquappe wird zum Frosch."
                },
                {
                    id: "tpk2l3_l2", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "leicht", points: 10,
                    question: "Was wird aus einer Raupe?", answers: ["ein Schmetterling", "eine Honigbiene", "ein Marienkäfer", "eine Kreuzspinne"], correct: 0,
                    explanation: "Die Raupe wird zum Schmetterling."
                },
                {
                    id: "tpk2l3_l3", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "leicht", points: 10,
                    question: "Welche Blume ist ein Frühblüher?", answers: ["Schneeglöckchen", "Sonnenblume", "Rose", "Lavendel"], correct: 0,
                    explanation: "Schneeglöckchen blühen ganz früh im Jahr."
                },
                {
                    id: "tpk2l3_l4", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "leicht", points: 10,
                    question: "Was macht die Wurzel einer Pflanze?", answers: ["nimmt Wasser auf", "macht Blüten", "fängt Licht", "macht Samen"], correct: 0,
                    explanation: "Die Wurzel nimmt Wasser auf."
                }
            ],
            mittel: [
                {
                    id: "tpk2l3_m1", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Wo lebt eine Kaulquappe?", answers: ["im Wasser", "im Baum", "in der Erde", "in der Luft"], correct: 0,
                    explanation: "Kaulquappen leben im Teich."
                },
                {
                    id: "tpk2l3_m2", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Was kommt zwischen Raupe und Schmetterling?", answers: ["die Puppe", "das Ei", "der Frosch", "die Blüte"], correct: 0,
                    explanation: "In der Puppe verwandelt sich die Raupe."
                },
                {
                    id: "tpk2l3_m3", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Worin speichert die Tulpe Kraft fürs nächste Jahr?", answers: ["in der Zwiebel", "in der Blüte", "im Blatt", "im Stängel"], correct: 0,
                    explanation: "Die Zwiebel liegt in der Erde."
                },
                {
                    id: "tpk2l3_m4", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Wann blühen Frühblüher?", answers: ["früh im Jahr", "im Herbst", "im Hochsommer", "nie"], correct: 0,
                    explanation: "Sie blühen schon ab Februar und März."
                }
            ],
            schwer: [
                {
                    id: "tpk2l3_s1", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "schwer", points: 10,
                    question: "Was ist die richtige Reihenfolge?", answers: ["Ei, Kaulquappe, Frosch", "Frosch, Ei, Kaulquappe", "Kaulquappe, Ei, Frosch", "Ei, Frosch, Kaulquappe"], correct: 0,
                    explanation: "Aus dem Ei schlüpft die Kaulquappe."
                },
                {
                    id: "tpk2l3_s2", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "schwer", points: 10,
                    question: "Was holen Bienen von den Blüten?", answers: ["Nektar und Pollen", "Blätter und Rinde", "Wurzeln und Erde", "Wasser und Sand"], correct: 0,
                    explanation: "Nektar und Blütenstaub."
                },
                {
                    id: "tpk2l3_s3", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "schwer", points: 10,
                    question: "Was tun Bienen für die Blüten?", answers: ["sie bestäuben sie", "sie gießen sie", "sie schneiden sie", "sie malen sie an"], correct: 0,
                    explanation: "So können Früchte wachsen."
                },
                {
                    id: "tpk2l3_s4", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "schwer", points: 10,
                    question: "Welcher Frühblüher wächst aus einer Zwiebel?", answers: ["Tulpe", "Sonnenblume", "Löwenzahn", "Klee"], correct: 0,
                    explanation: "Tulpen wachsen aus Zwiebeln."
                }
            ]
        },
        test: [
                {
                    id: "tpk2l3_t1", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Was schlüpft aus einem Froschei?", answers: ["eine Kaulquappe", "ein kleines Küken", "eine Raupe", "ein kleiner Fisch"], correct: 0,
                    explanation: "Aus dem Froschlaich schlüpfen Kaulquappen."
                },
                {
                    id: "tpk2l3_t2", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Was frisst eine Raupe?", answers: ["Blätter", "Fleisch", "Steine", "Fische"], correct: 0,
                    explanation: "Raupen fressen Blätter."
                },
                {
                    id: "tpk2l3_t3", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Welche Blume blüht schon, wenn noch Schnee liegt?", answers: ["Schneeglöckchen", "Sonnenblume", "Rose", "Mohn"], correct: 0,
                    explanation: "Daher hat sie ihren Namen."
                },
                {
                    id: "tpk2l3_t4", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Was passiert mit den Laubblättern im Herbst?", answers: ["sie werden bunt und fallen", "sie werden alle himmelblau", "sie wachsen viel schneller", "sie werden zu Tannennadeln"], correct: 0,
                    explanation: "Im Herbst färben sie sich und fallen ab."
                },
                {
                    id: "tpk2l3_t5", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Was passiert in der Puppe?", answers: ["die Verwandlung", "sie schläft für immer", "sie legt Eier", "sie frisst Blätter"], correct: 0,
                    explanation: "Aus der Raupe wird ein Schmetterling."
                },
                {
                    id: "tpk2l3_t6", category: "kurs_tp_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "tiere_pflanzen_k2", difficulty: "mittel", points: 10,
                    question: "Was braucht ein Samen, um zu keimen?", answers: ["Wasser und Wärme", "Eis und Dunkelheit", "Salz", "Schokolade"], correct: 0,
                    explanation: "Mit Wasser und Wärme beginnt er zu wachsen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "sw_k2_l1", kurs: "stoffe_k2", order: 1, icon: "⛵",
        title: "Schwimmt oder sinkt?", kurz: "Material und Form",
        erklaerung: {
            intro: "Manche Dinge <b>schwimmen</b> auf dem Wasser, andere <b>sinken</b>. Das hängt vom <b>Material</b> und von der <b>Form</b> ab. Holz und Korken schwimmen. Ein Stein und ein Nagel sinken. Ein Schiff aus Stahl schwimmt, weil es innen <b>hohl</b> ist.",
            beispiele: ["🍎 Apfel – schwimmt",
                "🔑 Schlüssel – sinkt",
                "🚢 Schiff aus Stahl – schwimmt wegen seiner Form"],
            merksatz: "Holz, Korken und ein Wasserball schwimmen. Stein, Nagel und Münze sinken."
        },
        uebung: {
            leicht: [
                {
                    id: "swk2l1_l1", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "leicht", points: 10,
                    question: "Was schwimmt auf dem Wasser?", answers: ["ein Korken", "ein Stein", "ein Nagel", "ein Schlüssel"], correct: 0,
                    explanation: "Korken sind sehr leicht."
                },
                {
                    id: "swk2l1_l2", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "leicht", points: 10,
                    question: "Was sinkt im Wasser?", answers: ["ein Stein", "ein Korken", "ein Holzstück", "ein Wasserball"], correct: 0,
                    explanation: "Der Stein geht unter."
                },
                {
                    id: "swk2l1_l3", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "leicht", points: 10,
                    question: "Schwimmt ein Stück Holz?", answers: ["ja", "nein", "nur im Winter", "nur nachts"], correct: 0,
                    explanation: "Holz schwimmt."
                },
                {
                    id: "swk2l1_l4", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "leicht", points: 10,
                    question: "Was geht im Wasser unter?", answers: ["eine Münze", "ein Blatt", "eine Feder", "ein Korken"], correct: 0,
                    explanation: "Metall-Münzen sinken."
                }
            ],
            mittel: [
                {
                    id: "swk2l1_m1", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Schwimmt ein Apfel?", answers: ["ja", "nein", "nur geschält", "nur im Meer"], correct: 0,
                    explanation: "Ein Apfel schwimmt – probier es aus!"
                },
                {
                    id: "swk2l1_m2", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Was schwimmt?", answers: ["ein Wasserball", "eine Schere", "ein Löffel aus Metall", "eine Glasmurmel"], correct: 0,
                    explanation: "Der Ball ist voller Luft."
                },
                {
                    id: "swk2l1_m3", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Warum schwimmt ein großes Schiff aus Stahl?", answers: ["weil es innen hohl ist", "weil es aus Holz ist", "weil es Räder hat", "weil es bunt ist"], correct: 0,
                    explanation: "Die Form mit viel Luft trägt das Schiff."
                },
                {
                    id: "swk2l1_m4", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Eine Knetkugel sinkt. Wie kann sie schwimmen?", answers: ["als Schiffchen formen", "noch fester kneten", "mit Wasser nass machen", "bunt anmalen"], correct: 0,
                    explanation: "Als Schiffchen geformt schwimmt sie."
                }
            ],
            schwer: [
                {
                    id: "swk2l1_s1", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "schwer", points: 10,
                    question: "Welches Paar schwimmt beides?", answers: ["Korken und Holz", "Stein und Holz", "Nagel und Korken", "Münze und Stein"], correct: 0,
                    explanation: "Korken und Holz schwimmen."
                },
                {
                    id: "swk2l1_s2", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "schwer", points: 10,
                    question: "Welches Paar sinkt beides?", answers: ["Nagel und Stein", "Korken und Nagel", "Holz und Stein", "Apfel und Münze"], correct: 0,
                    explanation: "Nagel und Stein sinken."
                },
                {
                    id: "swk2l1_s3", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "schwer", points: 10,
                    question: "Was passiert mit einem Schwamm im Wasser?", answers: ["er saugt sich voll", "er wird steinhart", "er schmilzt weg", "er wird ganz bunt"], correct: 0,
                    explanation: "Der Schwamm nimmt Wasser auf."
                },
                {
                    id: "swk2l1_s4", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "schwer", points: 10,
                    question: "Was trägt dich im Wasser, weil es voller Luft ist?", answers: ["eine Schwimmnudel", "ein Stein", "ein Gewicht", "schwere Schuhe"], correct: 0,
                    explanation: "Die Schwimmnudel ist voller Luft. Trotzdem nie ohne Erwachsene ins Wasser!"
                }
            ]
        },
        test: [
                {
                    id: "swk2l1_t1", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Was davon schwimmt?", answers: ["ein Blatt", "eine Glasmurmel", "ein Nagel", "ein Stein"], correct: 0,
                    explanation: "Ein Blatt ist ganz leicht."
                },
                {
                    id: "swk2l1_t2", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Was sinkt?", answers: ["ein Schlüssel", "ein Korken", "ein Holzlöffel", "ein Ball"], correct: 0,
                    explanation: "Der Schlüssel ist aus Metall."
                },
                {
                    id: "swk2l1_t3", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Was schwimmt NICHT?", answers: ["eine Schere", "ein Korken", "ein Wasserball", "ein Holzbrett"], correct: 0,
                    explanation: "Die Schere sinkt."
                },
                {
                    id: "swk2l1_t4", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Wie findest du heraus, ob etwas schwimmt?", answers: ["ausprobieren", "raten", "anmalen", "schütteln"], correct: 0,
                    explanation: "Ein Versuch zeigt es dir."
                },
                {
                    id: "swk2l1_t5", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Was passiert mit einer Feder auf dem Wasser?", answers: ["sie schwimmt", "sie sinkt sofort", "sie schmilzt", "sie wird schwer"], correct: 0,
                    explanation: "Federn sind sehr leicht."
                },
                {
                    id: "swk2l1_t6", category: "kurs_sw_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Eine leere, zugeschraubte Flasche. Was passiert im Wasser?", answers: ["sie schwimmt", "sie sinkt", "sie platzt", "sie schmilzt"], correct: 0,
                    explanation: "Die Luft darin trägt sie."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "sw_k2_l2", kurs: "stoffe_k2", order: 2, icon: "❄️",
        title: "Eis, Wasser, Dampf", kurz: "Fest, flüssig, gasförmig",
        erklaerung: {
            intro: "Wasser gibt es in drei <b>Zuständen</b>: <b>fest</b> als Eis, <b>flüssig</b> als Wasser und <b>gasförmig</b> als Dampf. Bei <b>0 Grad</b> gefriert Wasser zu Eis, bei <b>100 Grad</b> kocht es. In der Sonne <b>verdunstet</b> Wasser, steigt auf und bildet Wolken.",
            beispiele: ["❄️ Eis – fest",
                "💧 Wasser – flüssig",
                "♨️ Dampf – gasförmig"],
            merksatz: "Eis – fest. Wasser – flüssig. Dampf – gasförmig. Bei 0 Grad gefriert es, bei 100 Grad kocht es."
        },
        uebung: {
            leicht: [
                {
                    id: "swk2l2_l1", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "leicht", points: 10,
                    question: "Wie nennt man gefrorenes Wasser?", answers: ["Eis", "Dampf", "Tau", "Nebel"], correct: 0,
                    explanation: "Gefrorenes Wasser ist Eis."
                },
                {
                    id: "swk2l2_l2", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "leicht", points: 10,
                    question: "Was entsteht, wenn Wasser kocht?", answers: ["Dampf", "Eis", "Schnee", "Sand"], correct: 0,
                    explanation: "Kochendes Wasser wird zu Dampf."
                },
                {
                    id: "swk2l2_l3", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "leicht", points: 10,
                    question: "Was passiert mit Eis in der Sonne?", answers: ["es schmilzt", "es wächst", "es wird härter", "es wird bunt"], correct: 0,
                    explanation: "Eis schmilzt zu Wasser."
                },
                {
                    id: "swk2l2_l4", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "leicht", points: 10,
                    question: "In wie vielen Zuständen gibt es Wasser?", answers: ["3", "2", "4", "5"], correct: 0,
                    explanation: "Fest, flüssig und gasförmig."
                }
            ],
            mittel: [
                {
                    id: "swk2l2_m1", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Bei wie viel Grad gefriert Wasser?", answers: ["0 Grad", "10 Grad", "50 Grad", "100 Grad"], correct: 0,
                    explanation: "Bei 0 Grad wird Wasser zu Eis."
                },
                {
                    id: "swk2l2_m2", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Bei wie viel Grad kocht Wasser?", answers: ["100 Grad", "0 Grad", "50 Grad", "20 Grad"], correct: 0,
                    explanation: "Bei 100 Grad kocht Wasser."
                },
                {
                    id: "swk2l2_m3", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Eis ist …", answers: ["fest", "flüssig", "gasförmig", "unsichtbar"], correct: 0,
                    explanation: "Eis ist fest."
                },
                {
                    id: "swk2l2_m4", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Dampf ist …", answers: ["gasförmig", "fest", "flüssig", "hart"], correct: 0,
                    explanation: "Dampf ist gasförmig."
                }
            ],
            schwer: [
                {
                    id: "swk2l2_s1", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "schwer", points: 10,
                    question: "Was passiert mit einer Pfütze in der Sonne?", answers: ["das Wasser verdunstet", "sie wird immer größer", "sie gefriert zu Eis", "sie wird zu Sand"], correct: 0,
                    explanation: "Das Wasser steigt als Dampf auf."
                },
                {
                    id: "swk2l2_s2", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "schwer", points: 10,
                    question: "Woraus bestehen Wolken?", answers: ["aus Wassertröpfchen", "aus Rauch und Ruß", "aus weißer Watte", "aus feinem Staub"], correct: 0,
                    explanation: "Wolken sind winzige Wassertropfen."
                },
                {
                    id: "swk2l2_s3", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "schwer", points: 10,
                    question: "Verdunsten, Wolke, Regen – wie heißt das?", answers: ["Wasserkreislauf", "Wetterbericht", "Regenbogen", "Gewitter"], correct: 0,
                    explanation: "Das Wasser läuft immer im Kreis."
                },
                {
                    id: "swk2l2_s4", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "schwer", points: 10,
                    question: "Was passiert mit Salz in Wasser?", answers: ["es löst sich auf", "es schwimmt oben", "es wird zu Eis", "es färbt das Wasser rot"], correct: 0,
                    explanation: "Salz löst sich im Wasser auf."
                }
            ]
        },
        test: [
                {
                    id: "swk2l2_t1", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Wie ist Wasser bei 20 Grad?", answers: ["flüssig", "fest", "gasförmig", "gefroren"], correct: 0,
                    explanation: "Bei 20 Grad ist Wasser flüssig."
                },
                {
                    id: "swk2l2_t2", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Was passiert mit Sand in Wasser?", answers: ["er sinkt nach unten", "er löst sich auf", "er wird zu Eis", "er verdunstet"], correct: 0,
                    explanation: "Sand löst sich nicht auf."
                },
                {
                    id: "swk2l2_t3", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Was passiert mit Zucker in warmem Tee?", answers: ["er löst sich auf", "er wird hart", "er schwimmt oben", "er wird zu Eis"], correct: 0,
                    explanation: "Zucker löst sich auf."
                },
                {
                    id: "swk2l2_t4", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Wie heißt das Wasser morgens auf dem Gras?", answers: ["Tau", "Dampf", "Eis", "Hagel"], correct: 0,
                    explanation: "Tautropfen glitzern morgens im Gras."
                },
                {
                    id: "swk2l2_t5", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Wie ist Wasser im Gefrierfach?", answers: ["fest", "flüssig", "gasförmig", "warm"], correct: 0,
                    explanation: "Im Gefrierfach wird es zu Eis."
                },
                {
                    id: "swk2l2_t6", category: "kurs_sw_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Bei 100 Grad wird Wasser zu …", answers: ["Dampf", "Eis", "Schnee", "Sand"], correct: 0,
                    explanation: "Kochendes Wasser verdampft."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "sw_k2_l3", kurs: "stoffe_k2", order: 3, icon: "📎",
        title: "Magnete und Materialien", kurz: "Was zieht ein Magnet an?",
        erklaerung: {
            intro: "Ein <b>Magnet</b> zieht Dinge aus <b>Eisen</b> an, zum Beispiel einen Nagel oder eine Büroklammer. Holz, Papier, Glas und Plastik zieht er <b>nicht</b> an. Ein Magnet hat zwei <b>Pole</b>: Gleiche Pole stoßen sich ab, verschiedene ziehen sich an.",
            beispiele: ["📎 Büroklammer – wird angezogen",
                "📄 Papier – wird nicht angezogen",
                "Nordpol und Südpol – ziehen sich an"],
            merksatz: "Ein Magnet zieht Eisen an. Gleiche Pole stoßen sich ab, verschiedene ziehen sich an."
        },
        uebung: {
            leicht: [
                {
                    id: "swk2l3_l1", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "leicht", points: 10,
                    question: "Was zieht ein Magnet an?", answers: ["einen Nagel", "ein Blatt Papier", "ein Glas", "einen Radiergummi"], correct: 0,
                    explanation: "Der Nagel ist aus Eisen."
                },
                {
                    id: "swk2l3_l2", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "leicht", points: 10,
                    question: "Was zieht ein Magnet NICHT an?", answers: ["ein Holzstück", "eine Büroklammer", "einen Nagel", "eine Eisenschraube"], correct: 0,
                    explanation: "Holz wird nicht angezogen."
                },
                {
                    id: "swk2l3_l3", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "leicht", points: 10,
                    question: "Woraus ist ein Nagel meistens?", answers: ["aus Eisen", "aus Holz", "aus Glas", "aus Papier"], correct: 0,
                    explanation: "Nägel sind aus Eisen."
                },
                {
                    id: "swk2l3_l4", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "leicht", points: 10,
                    question: "Was geht leicht kaputt, wenn es runterfällt?", answers: ["ein Glas", "ein Kissen", "ein Gummiball", "ein Teddy"], correct: 0,
                    explanation: "Glas zerbricht leicht."
                }
            ],
            mittel: [
                {
                    id: "swk2l3_m1", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Zwei gleiche Pole kommen zusammen. Was passiert?", answers: ["sie stoßen sich ab", "sie ziehen sich an", "sie werden warm", "sie leuchten"], correct: 0,
                    explanation: "Gleiche Pole stoßen sich ab."
                },
                {
                    id: "swk2l3_m2", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Nordpol und Südpol kommen zusammen. Was passiert?", answers: ["sie ziehen sich an", "sie stoßen sich ab", "sie werden nass", "nichts"], correct: 0,
                    explanation: "Verschiedene Pole ziehen sich an."
                },
                {
                    id: "swk2l3_m3", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Woraus wird Papier gemacht?", answers: ["aus Holz", "aus Glas", "aus Eisen", "aus Sand"], correct: 0,
                    explanation: "Papier macht man aus Holz."
                },
                {
                    id: "swk2l3_m4", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Woraus sind Autoreifen?", answers: ["aus Gummi", "aus Glas", "aus Papier", "aus Holz"], correct: 0,
                    explanation: "Reifen sind aus Gummi."
                }
            ],
            schwer: [
                {
                    id: "swk2l3_s1", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "schwer", points: 10,
                    question: "Welche Dinge zieht ein Magnet beide an?", answers: ["Nagel und Büroklammer", "Nagel und Papier", "Holz und Glas", "Papier und Plastik"], correct: 0,
                    explanation: "Beide sind aus Eisen."
                },
                {
                    id: "swk2l3_s2", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "schwer", points: 10,
                    question: "Warum hält eine Wollmütze warm?", answers: ["Wolle hält die Wärme fest", "Wolle ist immer nass", "Wolle ist sehr schwer", "Wolle leuchtet im Dunkeln"], correct: 0,
                    explanation: "Wolle hält die Körperwärme."
                },
                {
                    id: "swk2l3_s3", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "schwer", points: 10,
                    question: "Welches Material ist durchsichtig?", answers: ["Glas", "Holz", "Eisen", "Pappe"], correct: 0,
                    explanation: "Durch Glas kann man schauen."
                },
                {
                    id: "swk2l3_s4", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "schwer", points: 10,
                    question: "Welches Material leitet Strom gut?", answers: ["Kupfer", "Holz", "Gummi", "Plastik"], correct: 0,
                    explanation: "Kabel haben innen Kupfer."
                }
            ]
        },
        test: [
                {
                    id: "swk2l3_t1", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Was davon zieht ein Magnet an?", answers: ["eine Büroklammer", "einen Bleistift", "ein Gummiband", "einen Wollfaden"], correct: 0,
                    explanation: "Büroklammern sind aus Eisen."
                },
                {
                    id: "swk2l3_t2", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Was davon zieht ein Magnet NICHT an?", answers: ["einen Plastiklöffel", "einen Nagel", "eine Eisenkette", "eine Schraube aus Eisen"], correct: 0,
                    explanation: "Plastik wird nicht angezogen."
                },
                {
                    id: "swk2l3_t3", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Welches Material ist weich und biegsam?", answers: ["Gummi", "Glas", "Stein", "Eisen"], correct: 0,
                    explanation: "Gummi lässt sich biegen."
                },
                {
                    id: "swk2l3_t4", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Was passiert mit Schokolade in der Sonne?", answers: ["sie schmilzt", "sie gefriert", "sie wird hart", "sie wächst"], correct: 0,
                    explanation: "Schokolade schmilzt in der Wärme."
                },
                {
                    id: "swk2l3_t5", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Woraus macht man Fensterscheiben?", answers: ["aus Glas", "aus Holz", "aus Stoff", "aus Papier"], correct: 0,
                    explanation: "Fenster sind aus Glas."
                },
                {
                    id: "swk2l3_t6", category: "kurs_sw_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "stoffe_wasser", difficulty: "mittel", points: 10,
                    question: "Wie viele Pole hat ein Magnet?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Nordpol und Südpol."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "zo_k2_l1", kurs: "zeit_k2", order: 1, icon: "🗓️",
        title: "Die Woche", kurz: "Montag bis Sonntag",
        erklaerung: {
            intro: "Eine <b>Woche</b> hat <b>sieben Tage</b>: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag und Sonntag. Samstag und Sonntag sind das <b>Wochenende</b>.",
            beispiele: ["Montag – der erste Tag der Woche",
                "Mittwoch – die Mitte der Schulwoche",
                "Samstag und Sonntag – das Wochenende"],
            merksatz: "Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag – sieben Tage."
        },
        uebung: {
            leicht: [
                {
                    id: "zok2l1_l1", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "leicht", points: 10,
                    question: "Wie viele Tage hat eine Woche?", answers: ["7", "5", "6", "10"], correct: 0,
                    explanation: "Eine Woche hat sieben Tage."
                },
                {
                    id: "zok2l1_l2", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "leicht", points: 10,
                    question: "Welcher Tag kommt nach Montag?", answers: ["Dienstag", "Sonntag", "Mittwoch", "Freitag"], correct: 0,
                    explanation: "Nach Montag kommt Dienstag."
                },
                {
                    id: "zok2l1_l3", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "leicht", points: 10,
                    question: "Welche Tage sind das Wochenende?", answers: ["Samstag und Sonntag", "Montag und Dienstag", "Freitag und Montag", "Mittwoch und Donnerstag"], correct: 0,
                    explanation: "Samstag und Sonntag."
                },
                {
                    id: "zok2l1_l4", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "leicht", points: 10,
                    question: "Welcher Tag kommt nach Freitag?", answers: ["Samstag", "Donnerstag", "Sonntag", "Montag"], correct: 0,
                    explanation: "Nach Freitag kommt Samstag."
                }
            ],
            mittel: [
                {
                    id: "zok2l1_m1", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Welcher Tag kommt vor Mittwoch?", answers: ["Dienstag", "Donnerstag", "Montag", "Freitag"], correct: 0,
                    explanation: "Vor Mittwoch kommt Dienstag."
                },
                {
                    id: "zok2l1_m2", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Welcher Tag kommt nach Sonntag?", answers: ["Montag", "Samstag", "Dienstag", "Freitag"], correct: 0,
                    explanation: "Nach Sonntag beginnt die Woche neu."
                },
                {
                    id: "zok2l1_m3", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Welcher Tag liegt zwischen Mittwoch und Freitag?", answers: ["Donnerstag", "Dienstag", "Samstag", "Montag"], correct: 0,
                    explanation: "Mittwoch, Donnerstag, Freitag."
                },
                {
                    id: "zok2l1_m4", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Heute ist Dienstag. Was war gestern?", answers: ["Montag", "Mittwoch", "Sonntag", "Donnerstag"], correct: 0,
                    explanation: "Vor Dienstag kommt Montag."
                }
            ],
            schwer: [
                {
                    id: "zok2l1_s1", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "schwer", points: 10,
                    question: "Heute ist Freitag. Was ist morgen?", answers: ["Samstag", "Donnerstag", "Sonntag", "Montag"], correct: 0,
                    explanation: "Nach Freitag kommt Samstag."
                },
                {
                    id: "zok2l1_s2", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "schwer", points: 10,
                    question: "Heute ist Sonntag. Was war gestern?", answers: ["Samstag", "Montag", "Freitag", "Dienstag"], correct: 0,
                    explanation: "Vor Sonntag kommt Samstag."
                },
                {
                    id: "zok2l1_s3", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "schwer", points: 10,
                    question: "Welcher Tag ist in der Mitte der Schulwoche?", answers: ["Mittwoch", "Montag", "Freitag", "Dienstag"], correct: 0,
                    explanation: "Montag bis Freitag – Mittwoch ist in der Mitte."
                },
                {
                    id: "zok2l1_s4", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "schwer", points: 10,
                    question: "Heute ist Montag. Was ist übermorgen?", answers: ["Mittwoch", "Dienstag", "Donnerstag", "Sonntag"], correct: 0,
                    explanation: "Montag, Dienstag, Mittwoch."
                }
            ]
        },
        test: [
                {
                    id: "zok2l1_t1", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Welcher Tag kommt nach Donnerstag?", answers: ["Freitag", "Mittwoch", "Samstag", "Dienstag"], correct: 0,
                    explanation: "Nach Donnerstag kommt Freitag."
                },
                {
                    id: "zok2l1_t2", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Welcher Tag kommt vor Samstag?", answers: ["Freitag", "Sonntag", "Donnerstag", "Montag"], correct: 0,
                    explanation: "Vor Samstag kommt Freitag."
                },
                {
                    id: "zok2l1_t3", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Heute ist Mittwoch. Was ist morgen?", answers: ["Donnerstag", "Dienstag", "Freitag", "Montag"], correct: 0,
                    explanation: "Nach Mittwoch kommt Donnerstag."
                },
                {
                    id: "zok2l1_t4", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "An welchem Tag beginnt die Schulwoche?", answers: ["Montag", "Sonntag", "Samstag", "Mittwoch"], correct: 0,
                    explanation: "Die Schulwoche beginnt am Montag."
                },
                {
                    id: "zok2l1_t5", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Wie viele Tage hat das Wochenende?", answers: ["2", "1", "3", "7"], correct: 0,
                    explanation: "Samstag und Sonntag."
                },
                {
                    id: "zok2l1_t6", category: "kurs_zo_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Heute ist Samstag. Was ist übermorgen?", answers: ["Montag", "Sonntag", "Dienstag", "Freitag"], correct: 0,
                    explanation: "Samstag, Sonntag, Montag."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "zo_k2_l2", kurs: "zeit_k2", order: 2, icon: "📆",
        title: "Monate und Jahr", kurz: "Januar bis Dezember",
        erklaerung: {
            intro: "Ein <b>Jahr</b> hat <b>12 Monate</b>: Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November und Dezember. Der <b>Kalender</b> zeigt alle Tage, Wochen und Monate.",
            beispiele: ["Januar – der erste Monat",
                "Februar – der kürzeste Monat",
                "Dezember – der letzte Monat"],
            merksatz: "Januar ist der erste Monat, Dezember der letzte. Ein Jahr hat 12 Monate."
        },
        uebung: {
            leicht: [
                {
                    id: "zok2l2_l1", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "leicht", points: 10,
                    question: "Wie viele Monate hat ein Jahr?", answers: ["12", "10", "7", "4"], correct: 0,
                    explanation: "Ein Jahr hat zwölf Monate."
                },
                {
                    id: "zok2l2_l2", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "leicht", points: 10,
                    question: "Welcher Monat ist der erste im Jahr?", answers: ["Januar", "Dezember", "März", "Juni"], correct: 0,
                    explanation: "Das Jahr beginnt im Januar."
                },
                {
                    id: "zok2l2_l3", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "leicht", points: 10,
                    question: "Welcher Monat ist der letzte im Jahr?", answers: ["Dezember", "Januar", "November", "Oktober"], correct: 0,
                    explanation: "Das Jahr endet im Dezember."
                },
                {
                    id: "zok2l2_l4", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "leicht", points: 10,
                    question: "Was zeigt alle Tage und Monate?", answers: ["der Kalender", "die Uhr", "das Thermometer", "der Kompass"], correct: 0,
                    explanation: "Im Kalender stehen alle Tage."
                }
            ],
            mittel: [
                {
                    id: "zok2l2_m1", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Welcher Monat kommt nach März?", answers: ["April", "Februar", "Mai", "Juni"], correct: 0,
                    explanation: "Nach März kommt April."
                },
                {
                    id: "zok2l2_m2", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Welcher Monat kommt nach Juli?", answers: ["August", "Juni", "September", "Mai"], correct: 0,
                    explanation: "Nach Juli kommt August."
                },
                {
                    id: "zok2l2_m3", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Welcher Monat kommt vor Oktober?", answers: ["September", "November", "August", "Dezember"], correct: 0,
                    explanation: "Vor Oktober kommt September."
                },
                {
                    id: "zok2l2_m4", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Welcher Monat ist am kürzesten?", answers: ["Februar", "Januar", "März", "August"], correct: 0,
                    explanation: "Der Februar hat nur 28 oder 29 Tage."
                }
            ],
            schwer: [
                {
                    id: "zok2l2_s1", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "schwer", points: 10,
                    question: "In welchem Monat ist Weihnachten?", answers: ["Dezember", "Januar", "November", "Oktober"], correct: 0,
                    explanation: "Weihnachten ist am 24. und 25. Dezember."
                },
                {
                    id: "zok2l2_s2", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "schwer", points: 10,
                    question: "Wie viele Tage hat ein Jahr meistens?", answers: ["365", "100", "12", "52"], correct: 0,
                    explanation: "365 Tage – im Schaltjahr 366."
                },
                {
                    id: "zok2l2_s3", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "schwer", points: 10,
                    question: "Wie heißt ein Jahr mit 366 Tagen?", answers: ["Schaltjahr", "Feiertag", "Ferienjahr", "Monatsjahr"], correct: 0,
                    explanation: "Alle vier Jahre gibt es ein Schaltjahr."
                },
                {
                    id: "zok2l2_s4", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "schwer", points: 10,
                    question: "Welcher Monat kommt nach Dezember?", answers: ["Januar", "November", "Februar", "Oktober"], correct: 0,
                    explanation: "Dann beginnt ein neues Jahr."
                }
            ]
        },
        test: [
                {
                    id: "zok2l2_t1", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Welcher Monat kommt nach Mai?", answers: ["Juni", "April", "Juli", "März"], correct: 0,
                    explanation: "Nach Mai kommt Juni."
                },
                {
                    id: "zok2l2_t2", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Welcher Monat kommt vor Februar?", answers: ["Januar", "März", "Dezember", "April"], correct: 0,
                    explanation: "Vor Februar kommt Januar."
                },
                {
                    id: "zok2l2_t3", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Welche Monate gehören zum Sommer?", answers: ["Juni, Juli, August", "Dezember, Januar, Februar", "März, April, Mai", "September, Oktober, November"], correct: 0,
                    explanation: "Juni, Juli und August sind Sommermonate."
                },
                {
                    id: "zok2l2_t4", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Welche Monate gehören zum Winter?", answers: ["Dezember, Januar, Februar", "Juni, Juli, August", "März, April, Mai", "September, Oktober, November"], correct: 0,
                    explanation: "Dezember, Januar und Februar sind Wintermonate."
                },
                {
                    id: "zok2l2_t5", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Wie viele Wochen hat ein Jahr ungefähr?", answers: ["52", "12", "7", "100"], correct: 0,
                    explanation: "Ein Jahr hat ungefähr 52 Wochen."
                },
                {
                    id: "zok2l2_t6", category: "kurs_zo_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Welcher Monat kommt nach September?", answers: ["Oktober", "August", "November", "Juli"], correct: 0,
                    explanation: "Nach September kommt Oktober."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "zo_k2_l3", kurs: "zeit_k2", order: 3, icon: "🌅",
        title: "Himmelsrichtungen", kurz: "Norden, Osten, Süden, Westen",
        erklaerung: {
            intro: "Es gibt vier <b>Himmelsrichtungen</b>: <b>Norden</b>, <b>Osten</b>, <b>Süden</b> und <b>Westen</b>. Die Sonne geht im <b>Osten</b> auf, steht mittags im <b>Süden</b> und geht im <b>Westen</b> unter. Ein <b>Kompass</b> zeigt nach Norden.",
            beispiele: ["🌅 Osten – Sonnenaufgang",
                "☀️ Süden – die Sonne am Mittag",
                "🌇 Westen – Sonnenuntergang"],
            merksatz: "Im Osten geht die Sonne auf, im Süden nimmt sie ihren Lauf, im Westen wird sie untergehn, im Norden ist sie nie zu sehn."
        },
        uebung: {
            leicht: [
                {
                    id: "zok2l3_l1", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "leicht", points: 10,
                    question: "Wie viele Haupt-Himmelsrichtungen gibt es?", answers: ["4", "2", "3", "6"], correct: 0,
                    explanation: "Norden, Osten, Süden, Westen."
                },
                {
                    id: "zok2l3_l2", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "leicht", points: 10,
                    question: "Wo geht die Sonne auf?", answers: ["im Osten", "im Westen", "im Norden", "im Süden"], correct: 0,
                    explanation: "Die Sonne geht im Osten auf."
                },
                {
                    id: "zok2l3_l3", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "leicht", points: 10,
                    question: "Wo geht die Sonne unter?", answers: ["im Westen", "im Osten", "im Norden", "im Süden"], correct: 0,
                    explanation: "Die Sonne geht im Westen unter."
                },
                {
                    id: "zok2l3_l4", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "leicht", points: 10,
                    question: "Womit findet man Norden?", answers: ["mit dem Kompass", "mit dem Thermometer", "mit der Waage", "mit dem Lineal"], correct: 0,
                    explanation: "Der Kompass zeigt nach Norden."
                }
            ],
            mittel: [
                {
                    id: "zok2l3_m1", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Wo steht die Sonne am Mittag?", answers: ["im Süden", "im Norden", "im Osten", "im Westen"], correct: 0,
                    explanation: "Mittags steht sie bei uns im Süden."
                },
                {
                    id: "zok2l3_m2", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Wohin zeigt die Kompassnadel?", answers: ["nach Norden", "nach Süden", "nach Osten", "nach Westen"], correct: 0,
                    explanation: "Die Nadel zeigt immer nach Norden."
                },
                {
                    id: "zok2l3_m3", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Was liegt gegenüber von Norden?", answers: ["Süden", "Osten", "Westen", "oben"], correct: 0,
                    explanation: "Norden und Süden sind Gegenteile."
                },
                {
                    id: "zok2l3_m4", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Was liegt gegenüber von Osten?", answers: ["Westen", "Norden", "Süden", "unten"], correct: 0,
                    explanation: "Osten und Westen sind Gegenteile."
                }
            ],
            schwer: [
                {
                    id: "zok2l3_s1", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "schwer", points: 10,
                    question: "Auf der Landkarte ist Norden meistens …", answers: ["oben", "unten", "links", "rechts"], correct: 0,
                    explanation: "Norden ist oben."
                },
                {
                    id: "zok2l3_s2", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "schwer", points: 10,
                    question: "Auf der Landkarte ist Osten meistens …", answers: ["rechts", "links", "oben", "unten"], correct: 0,
                    explanation: "Osten ist rechts."
                },
                {
                    id: "zok2l3_s3", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "schwer", points: 10,
                    question: "Was dreht sich in 24 Stunden einmal um sich selbst?", answers: ["die Erde", "der Mond", "die Sonne", "der Kompass"], correct: 0,
                    explanation: "Die Erde dreht sich einmal am Tag."
                },
                {
                    id: "zok2l3_s4", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "schwer", points: 10,
                    question: "Warum gibt es Tag und Nacht?", answers: ["die Erde dreht sich", "die Sonne geht aus", "der Mond schiebt sich davor", "die Wolken werden dunkel"], correct: 0,
                    explanation: "Mal zeigt unsere Seite zur Sonne, mal weg."
                }
            ]
        },
        test: [
                {
                    id: "zok2l3_t1", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Morgens geht die Sonne auf. In welcher Richtung?", answers: ["Osten", "Westen", "Norden", "Süden"], correct: 0,
                    explanation: "Im Osten geht die Sonne auf."
                },
                {
                    id: "zok2l3_t2", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Abends geht die Sonne unter. In welcher Richtung?", answers: ["Westen", "Osten", "Norden", "Süden"], correct: 0,
                    explanation: "Im Westen geht die Sonne unter."
                },
                {
                    id: "zok2l3_t3", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Was ist die Hauptstadt von Deutschland?", answers: ["Berlin", "Hamburg", "München", "Köln"], correct: 0,
                    explanation: "Berlin ist die Hauptstadt."
                },
                {
                    id: "zok2l3_t4", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Auf der Landkarte ist Süden meistens …", answers: ["unten", "oben", "links", "rechts"], correct: 0,
                    explanation: "Süden ist unten."
                },
                {
                    id: "zok2l3_t5", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Wann sind die Tage am längsten?", answers: ["im Sommer", "im Winter", "im Herbst", "im Frühling"], correct: 0,
                    explanation: "Im Sommer ist es lange hell."
                },
                {
                    id: "zok2l3_t6", category: "kurs_zo_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "zeit_orientierung", difficulty: "mittel", points: 10,
                    question: "Was zeigt ein Kompass?", answers: ["die Himmelsrichtung", "die genaue Uhrzeit", "die Temperatur", "das Gewicht"], correct: 0,
                    explanation: "Ein Kompass zeigt die Richtung."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "zf_k2_l1", kurs: "zaehne_rad_k2", order: 1, icon: "😁",
        title: "Unsere Zähne", kurz: "Milchzähne und Zähneputzen",
        erklaerung: {
            intro: "Kinder haben <b>20 Milchzähne</b>. Ab etwa 6 Jahren fallen sie aus und <b>bleibende Zähne</b> wachsen nach – Erwachsene haben bis zu <b>32</b>. Vorne beißen die <b>Schneidezähne</b> ab, hinten kauen die <b>Backenzähne</b>. Außen schützt der harte <b>Zahnschmelz</b>.",
            beispiele: ["Schneidezähne – vorne, zum Abbeißen",
                "Backenzähne – hinten, zum Kauen",
                "Zahnschmelz – die harte Schutzschicht"],
            merksatz: "20 Milchzähne, bis zu 32 bleibende Zähne. Zweimal am Tag putzen!"
        },
        uebung: {
            leicht: [
                {
                    id: "zfk2l1_l1", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "leicht", points: 10,
                    question: "Wie heißen die ersten Zähne von Kindern?", answers: ["Milchzähne", "Weisheitszähne", "dritte Zähne", "Goldzähne"], correct: 0,
                    explanation: "Die ersten Zähne sind Milchzähne."
                },
                {
                    id: "zfk2l1_l2", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "leicht", points: 10,
                    question: "Wie viele Milchzähne hat ein Kind?", answers: ["20", "10", "32", "50"], correct: 0,
                    explanation: "Ein Kind hat 20 Milchzähne."
                },
                {
                    id: "zfk2l1_l3", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "leicht", points: 10,
                    question: "Womit beißt du vom Apfel ab?", answers: ["mit den Schneidezähnen", "mit den Backenzähnen", "mit den Weisheitszähnen", "mit der Zunge"], correct: 0,
                    explanation: "Die Schneidezähne sind vorne."
                },
                {
                    id: "zfk2l1_l4", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "leicht", points: 10,
                    question: "Wie oft am Tag putzt du die Zähne?", answers: ["zweimal", "einmal pro Woche", "nie", "nur am Geburtstag"], correct: 0,
                    explanation: "Morgens und abends."
                }
            ],
            mittel: [
                {
                    id: "zfk2l1_m1", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Welche Zähne kauen das Essen hinten klein?", answers: ["die Backenzähne", "die Schneidezähne", "die Eckzähne", "die Zunge"], correct: 0,
                    explanation: "Backenzähne zermahlen das Essen."
                },
                {
                    id: "zfk2l1_m2", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Was entsteht, wenn man nicht Zähne putzt?", answers: ["Karies", "Muskeln", "Haare", "Sommersprossen"], correct: 0,
                    explanation: "Karies macht Löcher in die Zähne."
                },
                {
                    id: "zfk2l1_m3", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Wie heißt die harte Schicht außen am Zahn?", answers: ["Zahnschmelz", "Zahnfleisch", "Zahnseide", "Zahnpasta"], correct: 0,
                    explanation: "Der Zahnschmelz ist sehr hart."
                },
                {
                    id: "zfk2l1_m4", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Wie viele bleibende Zähne hat ein Erwachsener höchstens?", answers: ["32", "20", "10", "50"], correct: 0,
                    explanation: "Mit Weisheitszähnen sind es 32."
                }
            ],
            schwer: [
                {
                    id: "zfk2l1_s1", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "schwer", points: 10,
                    question: "Wozu ist Fluorid in der Zahnpasta?", answers: ["es macht den Schmelz stark", "es färbt die Zähne bunt", "es macht Löcher hinein", "es macht den Bauch satt"], correct: 0,
                    explanation: "Fluorid härtet den Zahnschmelz."
                },
                {
                    id: "zfk2l1_s2", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "schwer", points: 10,
                    question: "Was tust du nach dem Zähneputzen am Abend nicht mehr?", answers: ["Süßes essen", "Wasser trinken", "schlafen", "lesen"], correct: 0,
                    explanation: "Sonst bleibt Zucker an den Zähnen."
                },
                {
                    id: "zfk2l1_s3", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "schwer", points: 10,
                    question: "Was hält den Zahn im Kiefer fest?", answers: ["die Wurzel", "der Schmelz", "die Krone", "die Zunge"], correct: 0,
                    explanation: "Die Zahnwurzel steckt im Kiefer."
                },
                {
                    id: "zfk2l1_s4", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "schwer", points: 10,
                    question: "Wann fallen die ersten Milchzähne meist aus?", answers: ["mit etwa 6 Jahren", "mit 1 Jahr", "mit 15 Jahren", "mit 30 Jahren"], correct: 0,
                    explanation: "Meist ab etwa 6 Jahren."
                }
            ]
        },
        test: [
                {
                    id: "zfk2l1_t1", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Wer hilft, wenn ein Zahn wehtut?", answers: ["der Zahnarzt", "der Bäcker", "der Tierarzt", "der Friseur"], correct: 0,
                    explanation: "Der Zahnarzt behandelt Zähne."
                },
                {
                    id: "zfk2l1_t2", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Was ist gut für die Zähne?", answers: ["Rohkost wie Möhren", "Bonbons und Lutscher", "süße Limo", "Gummibärchen"], correct: 0,
                    explanation: "Möhren haben keinen Zucker zum Kleben."
                },
                {
                    id: "zfk2l1_t3", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Wo sitzen die Schneidezähne?", answers: ["vorne", "hinten", "oben im Gaumen", "in der Wange"], correct: 0,
                    explanation: "Die Schneidezähne sind vorne."
                },
                {
                    id: "zfk2l1_t4", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Wie lange sollst du die Zähne putzen?", answers: ["etwa 2 bis 3 Minuten", "nur 2 Sekunden", "eine ganze Stunde", "einen ganzen Tag"], correct: 0,
                    explanation: "Zwei bis drei Minuten gründlich."
                },
                {
                    id: "zfk2l1_t5", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Was ist Karies?", answers: ["ein Loch im Zahn", "ein Zahnarzt", "eine Zahnbürste", "eine Frucht"], correct: 0,
                    explanation: "Karies ist eine Zahnkrankheit."
                },
                {
                    id: "zfk2l1_t6", category: "kurs_zf_k2_l1", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Was kommt nach den Milchzähnen?", answers: ["die bleibenden Zähne", "keine Zähne mehr", "Milchzähne nochmal", "Holzzähne"], correct: 0,
                    explanation: "Die bleibenden Zähne wachsen nach."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "zf_k2_l2", kurs: "zaehne_rad_k2", order: 2, icon: "🚲",
        title: "Das sichere Fahrrad", kurz: "Licht, Klingel, Bremsen",
        erklaerung: {
            intro: "Ein <b>verkehrssicheres Fahrrad</b> hat zwei <b>Bremsen</b>, eine <b>Klingel</b>, vorne ein <b>weißes Licht</b> und hinten ein <b>rotes Licht</b>. Dazu kommen <b>Reflektoren</b>: vorne weiß, hinten rot, gelb an den <b>Pedalen</b>. An der Seite leuchten gelbe Reflektoren in den <b>Speichen</b> oder weiße Streifen an den <b>Reifen</b>. Ein <b>Helm</b> schützt deinen Kopf.",
            beispiele: ["🔔 Klingel – damit andere dich hören",
                "💡 Licht vorne weiß, hinten rot",
                "Gelbe Reflektoren an den Pedalen"],
            merksatz: "Vorne weiß, hinten rot, Pedale gelb, an der Seite gelbe Speichen-Reflektoren oder weiße Reifenstreifen – dazu Klingel und zwei Bremsen."
        },
        uebung: {
            leicht: [
                {
                    id: "zfk2l2_l1", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "leicht", points: 10,
                    question: "Welche Farbe hat das Licht vorne am Fahrrad?", answers: ["weiß", "rot", "grün", "blau"], correct: 0,
                    explanation: "Vorne leuchtet es weiß."
                },
                {
                    id: "zfk2l2_l2", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "leicht", points: 10,
                    question: "Welche Farbe hat das Licht hinten am Fahrrad?", answers: ["rot", "weiß", "grün", "gelb"], correct: 0,
                    explanation: "Hinten leuchtet es rot."
                },
                {
                    id: "zfk2l2_l3", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "leicht", points: 10,
                    question: "Wozu hat das Fahrrad eine Klingel?", answers: ["damit andere dich hören", "damit es schneller fährt", "als Spielzeug", "gegen Regen"], correct: 0,
                    explanation: "Mit der Klingel warnst du andere."
                },
                {
                    id: "zfk2l2_l4", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "leicht", points: 10,
                    question: "Was schützt beim Radfahren den Kopf?", answers: ["der Helm", "die Mütze", "die Kapuze", "das Stirnband"], correct: 0,
                    explanation: "Der Helm schützt bei einem Sturz."
                }
            ],
            mittel: [
                {
                    id: "zfk2l2_m1", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Wie viele Bremsen braucht ein Fahrrad?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Zwei Bremsen, die unabhängig wirken."
                },
                {
                    id: "zfk2l2_m2", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Welche Farbe haben Katzenaugen in den Speichen?", answers: ["gelb", "rot", "blau", "grün"], correct: 0,
                    explanation: "Katzenaugen in den Speichen sind gelb. Statt ihnen gehen auch weiße Reifenstreifen."
                },
                {
                    id: "zfk2l2_m3", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Wo sind auch gelbe Reflektoren?", answers: ["an den Pedalen", "am Sattel", "an der Klingel", "am Lenker"], correct: 0,
                    explanation: "Die Pedale haben gelbe Reflektoren."
                },
                {
                    id: "zfk2l2_m4", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Warum braucht ein Fahrrad Licht?", answers: ["damit man es im Dunkeln sieht", "damit es schöner aussieht", "damit es schneller fährt", "damit es nicht rostet"], correct: 0,
                    explanation: "Im Dunkeln musst du gesehen werden."
                }
            ],
            schwer: [
                {
                    id: "zfk2l2_s1", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "schwer", points: 10,
                    question: "Was gehört NICHT an ein sicheres Fahrrad?", answers: ["ein Lautsprecher", "eine Klingel", "zwei Bremsen", "ein Rücklicht"], correct: 0,
                    explanation: "Ein Lautsprecher ist nicht nötig."
                },
                {
                    id: "zfk2l2_s2", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "schwer", points: 10,
                    question: "Welche Farbe hat der Reflektor hinten?", answers: ["rot", "weiß", "gelb", "blau"], correct: 0,
                    explanation: "Hinten ist der Reflektor rot."
                },
                {
                    id: "zfk2l2_s3", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "schwer", points: 10,
                    question: "Welche Farbe hat der Reflektor vorne?", answers: ["weiß", "rot", "gelb", "grün"], correct: 0,
                    explanation: "Vorne ist der Reflektor weiß."
                },
                {
                    id: "zfk2l2_s4", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "schwer", points: 10,
                    question: "Was prüfst du vor der Fahrt?", answers: ["Bremsen und Licht", "die Farbe", "den Sattelbezug", "die Klingelmelodie"], correct: 0,
                    explanation: "Funktionieren Bremsen und Licht?"
                }
            ]
        },
        test: [
                {
                    id: "zfk2l2_t1", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Was braucht ein sicheres Fahrrad?", answers: ["Klingel und Bremsen", "Radio und Fahne", "Korb und Sticker", "Wimpel und Glitzer"], correct: 0,
                    explanation: "Klingel und Bremsen sind Pflicht."
                },
                {
                    id: "zfk2l2_t2", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Das Licht vorne am Fahrrad ist …", answers: ["weiß", "rot", "gelb", "blau"], correct: 0,
                    explanation: "Vorne weiß."
                },
                {
                    id: "zfk2l2_t3", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Das Licht hinten am Fahrrad ist …", answers: ["rot", "weiß", "gelb", "grün"], correct: 0,
                    explanation: "Hinten rot."
                },
                {
                    id: "zfk2l2_t4", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Wozu sind Reflektoren?", answers: ["damit Autos dich sehen", "damit das Rad leichter ist", "zum Bremsen", "zum Klingeln"], correct: 0,
                    explanation: "Reflektoren leuchten im Scheinwerferlicht."
                },
                {
                    id: "zfk2l2_t5", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Wann muss das Fahrradlicht an sein?", answers: ["im Dunkeln", "nur mittags", "nie", "nur im Sommer"], correct: 0,
                    explanation: "Im Dunkeln, in der Dämmerung und bei Nebel: Licht an."
                },
                {
                    id: "zfk2l2_t6", category: "kurs_zf_k2_l2", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Was trägst du auf dem Kopf beim Radfahren?", answers: ["einen Helm", "eine Sonnenbrille", "Kopfhörer", "nichts"], correct: 0,
                    explanation: "Der Helm schützt deinen Kopf."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "zf_k2_l3", kurs: "zaehne_rad_k2", order: 3, icon: "🛑",
        title: "Verkehrszeichen", kurz: "Dreieck, Kreis, Stopp",
        erklaerung: {
            intro: "Verkehrszeichen sprechen mit ihrer <b>Form</b>: <b>Dreiecke</b> warnen vor Gefahren, <b>runde Schilder mit rotem Rand</b> verbieten etwas, <b>blaue runde Schilder</b> sagen, was man tun soll. Das <b>Stoppschild</b> ist rot und achteckig. Kinder <b>unter 8 Jahren</b> müssen mit dem Rad auf dem <b>Gehweg</b> fahren, bis 10 Jahre dürfen sie es. Über die Straße wird geschoben.",
            beispiele: ["🛑 Stopp – ganz anhalten",
                "⚠️ Dreieck – Achtung, Gefahr",
                "Blaues Schild mit Fahrrad – Radweg"],
            merksatz: "Dreieck warnt, roter Rand verbietet, blau zeigt, was man tun soll. Stopp heißt: ganz anhalten."
        },
        uebung: {
            leicht: [
                {
                    id: "zfk2l3_l1", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "leicht", points: 10,
                    question: "🛑 Was bedeutet das Stoppschild?", answers: ["ganz anhalten", "schneller fahren", "hupen", "parken"], correct: 0,
                    explanation: "Am Stoppschild hält man ganz an."
                },
                {
                    id: "zfk2l3_l2", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "leicht", points: 10,
                    question: "Welche Form hat ein Warnschild?", answers: ["ein Dreieck", "ein Kreis", "ein Quadrat", "ein Stern"], correct: 0,
                    explanation: "Warnschilder sind dreieckig."
                },
                {
                    id: "zfk2l3_l3", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "leicht", points: 10,
                    question: "Welche Form hat das Stoppschild?", answers: ["achteckig", "rund", "dreieckig", "viereckig"], correct: 0,
                    explanation: "Das Stoppschild hat acht Ecken."
                },
                {
                    id: "zfk2l3_l4", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "leicht", points: 10,
                    question: "Wo fahren Kinder unter 8 Jahren Fahrrad?", answers: ["auf dem Gehweg", "auf der Straße", "auf der Autobahn", "auf den Schienen"], correct: 0,
                    explanation: "Unter 8 Jahren auf dem Gehweg."
                }
            ],
            mittel: [
                {
                    id: "zfk2l3_m1", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Was bedeutet ein blaues rundes Schild mit Fahrrad?", answers: ["Radweg", "Fahrräder verboten", "Fahrradladen", "Fahrradparkplatz"], correct: 0,
                    explanation: "Hier ist ein Radweg."
                },
                {
                    id: "zfk2l3_m2", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Was bedeutet ein rundes Schild mit rotem Rand?", answers: ["etwas ist verboten", "hier ist ein Spielplatz", "hier gibt es Eis", "Achtung, Kinder"], correct: 0,
                    explanation: "Roter Rand heißt: verboten."
                },
                {
                    id: "zfk2l3_m3", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Du willst links abbiegen. Was zeigst du?", answers: ["linken Arm raus", "rechten Arm raus", "beide Arme hoch", "nichts"], correct: 0,
                    explanation: "Den linken Arm ausstrecken."
                },
                {
                    id: "zfk2l3_m4", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Was tust du vor dem Abbiegen?", answers: ["umschauen und Arm raus", "schneller in die Pedale", "klingeln und losfahren", "kurz die Augen zu"], correct: 0,
                    explanation: "Erst schauen, dann Zeichen geben."
                }
            ],
            schwer: [
                {
                    id: "zfk2l3_s1", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "schwer", points: 10,
                    question: "Was zeigt ein dreieckiges Schild mit rotem Rand?", answers: ["eine Gefahr", "einen Parkplatz", "ein Restaurant", "eine Tankstelle"], correct: 0,
                    explanation: "Dreiecke warnen."
                },
                {
                    id: "zfk2l3_s2", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "schwer", points: 10,
                    question: "Warum bleibt man am Bordstein stehen?", answers: ["um nach Autos zu schauen", "um kurz auszuruhen", "um laut zu klingeln", "um dort zu spielen"], correct: 0,
                    explanation: "Erst schauen, dann gehen."
                },
                {
                    id: "zfk2l3_s3", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "schwer", points: 10,
                    question: "Mit dem Rad über den Zebrastreifen – was tust du?", answers: ["absteigen und schieben", "schnell drüberfahren", "klingeln und fahren", "freihändig fahren"], correct: 0,
                    explanation: "Wer schiebt, ist Fußgänger."
                },
                {
                    id: "zfk2l3_s4", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "schwer", points: 10,
                    question: "Was bedeutet ein blaues rundes Schild mit Fußgänger?", answers: ["Gehweg", "Spielstraße", "Fußgänger verboten", "Bushaltestelle"], correct: 0,
                    explanation: "Hier ist ein Gehweg."
                }
            ]
        },
        test: [
                {
                    id: "zfk2l3_t1", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "🛑 Am Stoppschild musst du …", answers: ["ganz anhalten", "langsam weiterfahren", "hupen", "umdrehen"], correct: 0,
                    explanation: "Ganz anhalten und schauen."
                },
                {
                    id: "zfk2l3_t2", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Ein dreieckiges Schild bedeutet …", answers: ["Achtung, Gefahr", "hier ist ein Laden", "Parkplatz", "Spielplatz"], correct: 0,
                    explanation: "Dreiecke warnen."
                },
                {
                    id: "zfk2l3_t3", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Du willst rechts abbiegen. Was zeigst du?", answers: ["rechten Arm raus", "linken Arm raus", "beide Arme hoch", "nichts"], correct: 0,
                    explanation: "Den rechten Arm ausstrecken."
                },
                {
                    id: "zfk2l3_t4", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Wo fährt ein 6-jähriges Kind Fahrrad?", answers: ["auf dem Gehweg", "auf der Autobahn", "auf der Straße", "auf den Schienen"], correct: 0,
                    explanation: "Unter 8 Jahren auf dem Gehweg."
                },
                {
                    id: "zfk2l3_t5", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Welche Farbe hat das Stoppschild?", answers: ["rot", "blau", "grün", "gelb"], correct: 0,
                    explanation: "Das Stoppschild ist rot."
                },
                {
                    id: "zfk2l3_t6", category: "kurs_zf_k2_l3", area: "schule", grade: 2,
                    subject: "sachunterricht", topic: "verkehr_koerper_k2", difficulty: "mittel", points: 10,
                    question: "Blaue runde Schilder sagen dir, …", answers: ["was man tun soll", "was verboten ist", "wo es Eis gibt", "wie spät es ist"], correct: 0,
                    explanation: "Blau zeigt, was man tun soll."
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
        window.SACHUNTERRICHT_K2_KURSE = extraKurse;
        window.SACHUNTERRICHT_K2_LEKTIONEN = extraLektionen;
    }
})();
