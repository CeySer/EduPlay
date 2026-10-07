// Sachunterricht Klasse 3 - Karte/Heimat, Koerper, Strom/Energie, Wald
// 4 Kurse mit je 3 Lektionen - erzeugt aus /tmp/gs/s3_1..4.js.
// Die Themen (topic) entsprechen genau den Wissensfragen derselben Klasse, damit
// die Kurs-Empfehlung aus dem Wissen-Modus den passenden Kurs findet.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "karte_heimat_k3", title: "Karte und Heimat", icon: "🗺️", grade: 3, subject: "sachunterricht", beschreibung: "Himmelsrichtungen und Kompass, Karten lesen mit Legende und Maßstab, Gemeinde und Bundesland." },
        { id: "koerper_k3", title: "Körper und Gesundheit", icon: "❤️", grade: 3, subject: "sachunterricht", beschreibung: "Knochen, Muskeln und Gelenke, die fünf Sinne, gesund essen und Erste Hilfe." },
        { id: "strom_k3", title: "Strom und Energie", icon: "⚡", grade: 3, subject: "sachunterricht", beschreibung: "Der Stromkreis, Leiter und Nichtleiter, sicher mit Strom umgehen, Energie sparen und erneuerbare Energien." },
        { id: "wald_k3", title: "Wald und Natur", icon: "🌲", grade: 3, subject: "sachunterricht", beschreibung: "Die Stockwerke des Waldes, Laub- und Nadelbäume, Waldtiere und Nahrungsketten." }
    ];
    const extraLektionen = [
    {
        id: "kh_k3_l1", kurs: "karte_heimat_k3", order: 1, icon: "🌅",
        title: "Himmelsrichtungen", kurz: "Norden, Osten, Süden, Westen",
        erklaerung: {
            intro: "Die vier <b>Himmelsrichtungen</b> sind Norden, Osten, Süden und Westen. Die <b>Kompassnadel</b> zeigt nach Norden. Die Sonne geht im <b>Osten</b> auf, steht mittags im <b>Süden</b> und geht im <b>Westen</b> unter. Auf Karten ist Norden fast immer oben.",
            beispiele: ["Norden – oben auf der Karte",
                "Osten – Sonnenaufgang",
                "Westen – Sonnenuntergang"],
            merksatz: "Nie ohne Seife waschen: Norden, Osten, Süden, Westen – im Uhrzeigersinn."
        },
        uebung: {
            leicht: [
                {
                    id: "khk3l1_l1", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "leicht", points: 10,
                    question: "In welcher Himmelsrichtung geht die Sonne auf?", answers: ["im Osten", "im Westen", "im Norden", "im Süden"], correct: 0,
                    explanation: "Die Sonne geht im Osten auf."
                },
                {
                    id: "khk3l1_l2", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "leicht", points: 10,
                    question: "In welche Richtung zeigt die Nadel am Kompass?", answers: ["nach Norden", "nach Süden", "nach Osten", "nach Westen"], correct: 0,
                    explanation: "Die Nadel zeigt nach Norden."
                },
                {
                    id: "khk3l1_l3", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "leicht", points: 10,
                    question: "Wo ist auf den meisten Karten Norden?", answers: ["oben", "unten", "links", "rechts"], correct: 0,
                    explanation: "Norden ist meist oben."
                },
                {
                    id: "khk3l1_l4", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "leicht", points: 10,
                    question: "In welcher Himmelsrichtung geht die Sonne unter?", answers: ["im Westen", "im Osten", "im Norden", "im Süden"], correct: 0,
                    explanation: "Die Sonne geht im Westen unter."
                }
            ],
            mittel: [
                {
                    id: "khk3l1_m1", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Wo steht die Sonne bei uns mittags?", answers: ["im Süden", "im Norden", "im Osten", "im Westen"], correct: 0,
                    explanation: "Mittags steht die Sonne bei uns im Süden."
                },
                {
                    id: "khk3l1_m2", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Welche Richtung liegt gegenüber von Osten?", answers: ["Westen", "Norden", "Süden", "Nordosten"], correct: 0,
                    explanation: "Osten und Westen liegen gegenüber."
                },
                {
                    id: "khk3l1_m3", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Welcher Merksatz hilft bei den Himmelsrichtungen?", answers: ["Nie ohne Seife waschen", "Alle meine Entchen", "Eins, zwei, drei", "Ene mene muh"], correct: 0,
                    explanation: "N-O-S-W: Nie ohne Seife waschen."
                },
                {
                    id: "khk3l1_m4", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Was liegt auf der Karte rechts?", answers: ["Osten", "Westen", "Norden", "Süden"], correct: 0,
                    explanation: "Ist Norden oben, liegt Osten rechts."
                }
            ],
            schwer: [
                {
                    id: "khk3l1_s1", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "schwer", points: 10,
                    question: "Du gehst nach Norden. Was ist rechts von dir?", answers: ["Osten", "Westen", "Süden", "Norden"], correct: 0,
                    explanation: "Blick nach Norden: rechts ist Osten."
                },
                {
                    id: "khk3l1_s2", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "schwer", points: 10,
                    question: "Welche Richtung liegt zwischen Norden und Osten?", answers: ["Nordosten", "Südosten", "Nordwesten", "Südwesten"], correct: 0,
                    explanation: "Zwischen Norden und Osten liegt Nordosten."
                },
                {
                    id: "khk3l1_s3", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "schwer", points: 10,
                    question: "Warum zeigt die Kompassnadel nach Norden?", answers: ["Die Erde ist ein Magnet.", "Der Wind schiebt sie.", "Sie ist schwer.", "Die Sonne zieht sie."], correct: 0,
                    explanation: "Die Erde wirkt wie ein riesiger Magnet."
                },
                {
                    id: "khk3l1_s4", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "schwer", points: 10,
                    question: "Du schaust zum Sonnenaufgang. Was ist hinter dir?", answers: ["Westen", "Osten", "Norden", "Süden"], correct: 0,
                    explanation: "Vor dir ist Osten, hinter dir Westen."
                }
            ]
        },
        test: [
                {
                    id: "khk3l1_t1", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Wie viele Haupthimmelsrichtungen gibt es?", answers: ["4", "2", "3", "8"], correct: 0,
                    explanation: "Norden, Osten, Süden, Westen."
                },
                {
                    id: "khk3l1_t2", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Welche Himmelsrichtung ist auf der Karte unten?", answers: ["Süden", "Norden", "Osten", "Westen"], correct: 0,
                    explanation: "Unten liegt Süden."
                },
                {
                    id: "khk3l1_t3", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Welche Richtung liegt gegenüber von Norden?", answers: ["Süden", "Osten", "Westen", "Nordwesten"], correct: 0,
                    explanation: "Norden und Süden liegen gegenüber."
                },
                {
                    id: "khk3l1_t4", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Mit welchem Gerät findet man Norden?", answers: ["Kompass", "Lupe", "Thermometer", "Waage"], correct: 0,
                    explanation: "Mit dem Kompass."
                },
                {
                    id: "khk3l1_t5", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Du gehst nach Süden. Was ist links von dir?", answers: ["Osten", "Westen", "Norden", "Süden"], correct: 0,
                    explanation: "Blick nach Süden: links ist Osten."
                },
                {
                    id: "khk3l1_t6", category: "kurs_kh_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Welche Richtung liegt zwischen Süden und Westen?", answers: ["Südwesten", "Südosten", "Nordwesten", "Nordosten"], correct: 0,
                    explanation: "Zwischen Süden und Westen liegt Südwesten."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "kh_k3_l2", kurs: "karte_heimat_k3", order: 2, icon: "🗺️",
        title: "Karten lesen", kurz: "Legende, Maßstab, Farben",
        erklaerung: {
            intro: "Eine <b>Karte</b> zeigt die Welt verkleinert von oben. Die <b>Legende</b> erklärt die <b>Kartenzeichen</b>. Der <b>Maßstab</b> sagt, wie stark verkleinert wurde: 1 : 100 heißt, 1 cm auf der Karte sind 100 cm (1 m) in echt. Auf Landkarten gilt: <b>Blau</b> = Wasser, <b>Grün</b> = Tiefland, <b>Braun</b> = Berge.",
            beispiele: ["1 : 100 – 1 cm sind 1 m",
                "Blaue Linie – Fluss",
                "Kreuz – Kirche"],
            merksatz: "Legende lesen, Maßstab prüfen, Norden suchen."
        },
        uebung: {
            leicht: [
                {
                    id: "khk3l2_l1", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "leicht", points: 10,
                    question: "Was erklärt die Legende einer Karte?", answers: ["die Kartenzeichen", "den Weg nach Hause", "das Wetter", "die Uhrzeit"], correct: 0,
                    explanation: "Die Legende erklärt die Zeichen."
                },
                {
                    id: "khk3l2_l2", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "leicht", points: 10,
                    question: "Welche Farbe hat Wasser auf Karten?", answers: ["Blau", "Rot", "Gelb", "Schwarz"], correct: 0,
                    explanation: "Wasser ist blau."
                },
                {
                    id: "khk3l2_l3", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "leicht", points: 10,
                    question: "Wie zeigt eine Karte die Welt?", answers: ["von oben", "von unten", "von der Seite", "von innen"], correct: 0,
                    explanation: "Karten zeigen alles von oben."
                },
                {
                    id: "khk3l2_l4", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "leicht", points: 10,
                    question: "Was zeigt der Maßstab?", answers: ["wie stark verkleinert ist", "wie alt die Karte ist", "wo Norden ist", "wie das Wetter wird"], correct: 0,
                    explanation: "Der Maßstab zeigt die Verkleinerung."
                }
            ],
            mittel: [
                {
                    id: "khk3l2_m1", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Was bedeutet der Maßstab 1 : 1000?", answers: ["1 cm sind 10 m", "1 cm sind 1 m", "1 cm sind 100 m", "1 m sind 1 cm"], correct: 0,
                    explanation: "1000 cm sind 10 m."
                },
                {
                    id: "khk3l2_m2", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Welche Farbe zeigt auf Landkarten hohe Berge?", answers: ["Braun", "Grün", "Blau", "Orange"], correct: 0,
                    explanation: "Berge sind braun."
                },
                {
                    id: "khk3l2_m3", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Was ist ein Stadtplan?", answers: ["eine Karte einer Stadt", "ein Bauplan für Häuser", "ein Busfahrplan", "ein Foto einer Stadt"], correct: 0,
                    explanation: "Ein Stadtplan ist eine Karte."
                },
                {
                    id: "khk3l2_m4", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Was zeigt eine blaue Linie auf der Karte?", answers: ["einen Fluss", "eine Straße", "eine Grenze", "eine Bahn"], correct: 0,
                    explanation: "Blaue Linien sind Flüsse oder Bäche."
                }
            ],
            schwer: [
                {
                    id: "khk3l2_s1", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "schwer", points: 10,
                    question: "Bei 1 : 100 000 sind 2 cm auf der Karte wie weit?", answers: ["2 km", "200 m", "20 km", "2 m"], correct: 0,
                    explanation: "1 cm sind 100 000 cm = 1 km, also 2 cm = 2 km."
                },
                {
                    id: "khk3l2_s2", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "schwer", points: 10,
                    question: "Welche Karte zeigt mehr Einzelheiten?", answers: ["1 : 1000", "1 : 100000", "1 : 1000000", "alle gleich"], correct: 0,
                    explanation: "Je kleiner die Zahl hinten, desto genauer."
                },
                {
                    id: "khk3l2_s3", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "schwer", points: 10,
                    question: "Was bedeutet 'Die Karte ist genordet'?", answers: ["Ihr Norden zeigt nach Norden.", "Die Karte ist ganz neu.", "Die Karte ist sehr klein.", "Die Karte ist bunt gemalt."], correct: 0,
                    explanation: "Man dreht sie, bis ihr Norden in echt nach Norden zeigt."
                },
                {
                    id: "khk3l2_s4", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "schwer", points: 10,
                    question: "Wofür steht oft ein Kreuz auf dem Stadtplan?", answers: ["Kirche", "Schwimmbad", "Schule", "Bahnhof"], correct: 0,
                    explanation: "Ein Kreuz steht für eine Kirche."
                }
            ]
        },
        test: [
                {
                    id: "khk3l2_t1", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Was steht in der Legende?", answers: ["die Bedeutung der Zeichen", "der Name des Zeichners", "das Datum von heute", "die Telefonnummer"], correct: 0,
                    explanation: "Die Legende erklärt die Kartenzeichen."
                },
                {
                    id: "khk3l2_t2", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Welche Farbe hat Tiefland auf Landkarten?", answers: ["Grün", "Braun", "Weiß", "Blau"], correct: 0,
                    explanation: "Tiefland ist grün."
                },
                {
                    id: "khk3l2_t3", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 1 : 100?", answers: ["1 cm sind 1 m", "1 cm sind 100 km", "1 m sind 1 cm", "100 cm sind 1 cm"], correct: 0,
                    explanation: "1 cm sind 100 cm, also 1 m."
                },
                {
                    id: "khk3l2_t4", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Wie heißt eine Karte von einer Stadt?", answers: ["Stadtplan", "Weltkarte", "Bauplan", "Fahrplan"], correct: 0,
                    explanation: "Stadtplan."
                },
                {
                    id: "khk3l2_t5", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Was zeigt ein Globus?", answers: ["die ganze Erde", "nur Deutschland", "nur den Mond", "eine Stadt"], correct: 0,
                    explanation: "Ein Globus ist ein Modell der Erde."
                },
                {
                    id: "khk3l2_t6", category: "kurs_kh_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Auf welcher Karte sieht man Häuser am größten?", answers: ["1 : 500", "1 : 50000", "1 : 500000", "1 : 5000000"], correct: 0,
                    explanation: "1 : 500 ist am wenigsten verkleinert."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "kh_k3_l3", kurs: "karte_heimat_k3", order: 3, icon: "🏛️",
        title: "Gemeinde und Bundesland", kurz: "Rathaus, Bürgermeister, 16 Länder",
        erklaerung: {
            intro: "Deine <b>Gemeinde</b> (Dorf oder Stadt) wird von einem <b>Bürgermeister</b> oder einer Bürgermeisterin geleitet. Gewählt wird von den Menschen im Ort. Das <b>Rathaus</b> ist der Sitz der Verwaltung. Mehrere Gemeinden bilden einen <b>Kreis</b>, mehrere Kreise ein <b>Bundesland</b>. Deutschland hat <b>16 Bundesländer</b>, die Hauptstadt ist <b>Berlin</b>.",
            beispiele: ["Rathaus – dort arbeitet die Bürgermeisterin",
                "16 Bundesländer",
                "Berlin – Hauptstadt"],
            merksatz: "Gemeinde → Kreis → Bundesland → Deutschland."
        },
        uebung: {
            leicht: [
                {
                    id: "khk3l3_l1", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "leicht", points: 10,
                    question: "Wo arbeitet die Bürgermeisterin?", answers: ["im Rathaus", "im Krankenhaus", "im Bahnhof", "im Museum"], correct: 0,
                    explanation: "Im Rathaus."
                },
                {
                    id: "khk3l3_l2", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "leicht", points: 10,
                    question: "Wie heißt die Hauptstadt von Deutschland?", answers: ["Berlin", "München", "Hamburg", "Bonn"], correct: 0,
                    explanation: "Berlin ist die Hauptstadt."
                },
                {
                    id: "khk3l3_l3", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "leicht", points: 10,
                    question: "Wer leitet eine Gemeinde?", answers: ["Bürgermeister/in", "Bundeskanzler/in", "Schulleiter/in", "Polizist/in"], correct: 0,
                    explanation: "Die Bürgermeisterin oder der Bürgermeister."
                },
                {
                    id: "khk3l3_l4", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "leicht", points: 10,
                    question: "Was ist ein Dorf oder eine Stadt?", answers: ["eine Gemeinde", "ein Bundesland", "ein Kontinent", "ein Staat"], correct: 0,
                    explanation: "Dörfer und Städte sind Gemeinden."
                }
            ],
            mittel: [
                {
                    id: "khk3l3_m1", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Wie viele Bundesländer gibt es in Deutschland?", answers: ["16", "12", "10", "20"], correct: 0,
                    explanation: "Deutschland hat 16 Bundesländer."
                },
                {
                    id: "khk3l3_m2", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Welches Gebirge liegt ganz im Süden Deutschlands?", answers: ["die Alpen", "der Harz", "die Eifel", "das Erzgebirge"], correct: 0,
                    explanation: "Im Süden liegen die Alpen."
                },
                {
                    id: "khk3l3_m3", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Wer wählt die Bürgermeisterin?", answers: ["die Menschen im Ort", "der Bundeskanzler", "nur die Lehrer", "der Bundespräsident"], correct: 0,
                    explanation: "Die Bürgerinnen und Bürger wählen sie."
                },
                {
                    id: "khk3l3_m4", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Welcher Fluss fließt durch Köln?", answers: ["der Rhein", "die Elbe", "die Donau", "die Spree"], correct: 0,
                    explanation: "Köln liegt am Rhein."
                }
            ],
            schwer: [
                {
                    id: "khk3l3_s1", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "schwer", points: 10,
                    question: "Was wird im Rathaus gemacht?", answers: ["Ausweise ausstellen", "Brot backen", "Autos reparieren", "Kranke heilen"], correct: 0,
                    explanation: "Im Rathaus gibt es z. B. Ausweise."
                },
                {
                    id: "khk3l3_s2", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "schwer", points: 10,
                    question: "Was ist ein Wappen?", answers: ["Zeichen einer Stadt", "ein alter Stadtplan", "eine Fahne mit Musik", "ein altes Gebäude"], correct: 0,
                    explanation: "Städte und Länder haben ein Wappen als Erkennungszeichen."
                },
                {
                    id: "khk3l3_s3", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "schwer", points: 10,
                    question: "In welchem Bundesland liegt Köln?", answers: ["Nordrhein-Westfalen", "Rheinland-Pfalz", "Schleswig-Holstein", "Niedersachsen"], correct: 0,
                    explanation: "Köln liegt in Nordrhein-Westfalen."
                },
                {
                    id: "khk3l3_s4", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "schwer", points: 10,
                    question: "Was gehört zu einer Gemeinde?", answers: ["Rathaus und Schule", "ein einziges Haus", "das ganze Meer", "der Mond und Sterne"], correct: 0,
                    explanation: "Zur Gemeinde gehören z. B. Rathaus, Schule, Straßen."
                }
            ]
        },
        test: [
                {
                    id: "khk3l3_t1", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Wie heißt das Haus der Gemeindeverwaltung?", answers: ["Rathaus", "Gasthaus", "Kaufhaus", "Treppenhaus"], correct: 0,
                    explanation: "Das Rathaus."
                },
                {
                    id: "khk3l3_t2", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Welcher große Fluss fließt im Westen Deutschlands?", answers: ["Rhein", "Elbe", "Oder", "Spree"], correct: 0,
                    explanation: "Der Rhein fließt im Westen."
                },
                {
                    id: "khk3l3_t3", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Was ist größer?", answers: ["ein Bundesland", "eine Gemeinde", "ein Stadtviertel", "eine Straße"], correct: 0,
                    explanation: "Ein Bundesland umfasst viele Gemeinden."
                },
                {
                    id: "khk3l3_t4", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Wo tagt der Bundestag?", answers: ["in Berlin", "in Bonn", "in Köln", "in München"], correct: 0,
                    explanation: "Der Bundestag tagt in Berlin im Reichstagsgebäude."
                },
                {
                    id: "khk3l3_t5", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Was liegt zwischen Gemeinde und Bundesland?", answers: ["der Kreis", "der Kontinent", "die Straße", "das Haus"], correct: 0,
                    explanation: "Gemeinden bilden Kreise, Kreise ein Bundesland."
                },
                {
                    id: "khk3l3_t6", category: "kurs_kh_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "karte_heimat", difficulty: "mittel", points: 10,
                    question: "Wie heißt Deutschlands höchster Berg?", answers: ["die Zugspitze", "der Brocken", "der Feldberg", "der Fichtelberg"], correct: 0,
                    explanation: "Die Zugspitze ist 2962 m hoch."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "kg_k3_l1", kurs: "koerper_k3", order: 1, icon: "🏃",
        title: "Knochen, Muskeln, Gelenke", kurz: "Was uns hält und bewegt",
        erklaerung: {
            intro: "Das <b>Skelett</b> gibt dem Körper Halt und schützt die Organe: der <b>Schädel</b> das Gehirn, die <b>Rippen</b> Herz und Lunge. Ein Erwachsener hat etwa 206 Knochen. <b>Muskeln</b> bewegen die Knochen. Sie können sich nur zusammenziehen, darum arbeiten sie paarweise (Beuger und Strecker). <b>Gelenke</b> verbinden Knochen beweglich.",
            beispiele: ["Schädel schützt das Gehirn",
                "Bizeps beugt den Arm",
                "Knie – ein Gelenk"],
            merksatz: "Knochen stützen, Muskeln ziehen, Gelenke bewegen."
        },
        uebung: {
            leicht: [
                {
                    id: "kgk3l1_l1", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "leicht", points: 10,
                    question: "Was schützt das Gehirn?", answers: ["der Schädel", "die Rippen", "das Becken", "die Wirbelsäule"], correct: 0,
                    explanation: "Der Schädel schützt das Gehirn."
                },
                {
                    id: "kgk3l1_l2", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "leicht", points: 10,
                    question: "Was bewegt die Knochen?", answers: ["die Muskeln", "die Haare", "die Fingernägel", "die Zähne"], correct: 0,
                    explanation: "Muskeln ziehen an den Knochen."
                },
                {
                    id: "kgk3l1_l3", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "leicht", points: 10,
                    question: "Was schützt Herz und Lunge?", answers: ["die Rippen", "der Schädel", "die Zehen", "die Haare"], correct: 0,
                    explanation: "Der Brustkorb aus Rippen schützt sie."
                },
                {
                    id: "kgk3l1_l4", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "leicht", points: 10,
                    question: "Wie heißt das Gelenk in der Mitte des Beins?", answers: ["Knie", "Ellenbogen", "Schulter", "Handgelenk"], correct: 0,
                    explanation: "Das Knie verbindet Ober- und Unterschenkel."
                }
            ],
            mittel: [
                {
                    id: "kgk3l1_m1", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Wie viele Knochen hat ein Erwachsener etwa?", answers: ["206", "50", "1000", "12"], correct: 0,
                    explanation: "Etwa 206 Knochen."
                },
                {
                    id: "kgk3l1_m2", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was verbindet Knochen beweglich?", answers: ["Gelenke", "Muskeln", "Sehnen", "Adern"], correct: 0,
                    explanation: "Gelenke machen Bewegung möglich."
                },
                {
                    id: "kgk3l1_m3", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Welcher Muskel beugt den Arm?", answers: ["Bizeps", "Wade", "Bauchmuskel", "Po-Muskel"], correct: 0,
                    explanation: "Der Bizeps beugt den Arm."
                },
                {
                    id: "kgk3l1_m4", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was ist die Wirbelsäule?", answers: ["die Stütze des Rückens", "ein Muskel im Bein", "ein Teil des Schädels", "ein Gelenk am Arm"], correct: 0,
                    explanation: "Sie trägt den Oberkörper."
                }
            ],
            schwer: [
                {
                    id: "kgk3l1_s1", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "schwer", points: 10,
                    question: "Warum arbeiten Muskeln paarweise?", answers: ["Sie können nur ziehen.", "Sie sind zu schwach.", "Sie sind zu klein.", "Damit es schöner aussieht."], correct: 0,
                    explanation: "Einer beugt, der andere streckt."
                },
                {
                    id: "kgk3l1_s2", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "schwer", points: 10,
                    question: "Wie heißt das größte Gelenk des Körpers?", answers: ["Knie", "Ellenbogen", "Fingergelenk", "Zehengelenk"], correct: 0,
                    explanation: "Das Kniegelenk ist das größte."
                },
                {
                    id: "kgk3l1_s3", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "schwer", points: 10,
                    question: "Was brauchen Knochen, um stark zu bleiben?", answers: ["Kalzium und Bewegung", "viel Zucker und Ruhe", "nur Wasser", "Süßigkeiten"], correct: 0,
                    explanation: "Kalzium, z. B. aus Milch, und Bewegung."
                },
                {
                    id: "kgk3l1_s4", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "schwer", points: 10,
                    question: "Wie heißt der längste Knochen?", answers: ["Oberschenkelknochen", "Schienbeinknochen", "Schlüsselbein", "Oberarmknochen"], correct: 0,
                    explanation: "Der Oberschenkelknochen ist der längste."
                }
            ]
        },
        test: [
                {
                    id: "kgk3l1_t1", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Wie heißt das Knochengerüst?", answers: ["Skelett", "Knorpel", "Gelenk", "Organ"], correct: 0,
                    explanation: "Das Skelett."
                },
                {
                    id: "kgk3l1_t2", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was ist der Ellenbogen?", answers: ["ein Gelenk", "ein Muskel", "ein Organ", "ein Knochenbruch"], correct: 0,
                    explanation: "Der Ellenbogen ist ein Gelenk."
                },
                {
                    id: "kgk3l1_t3", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was tut ein Muskel, wenn er arbeitet?", answers: ["er zieht sich zusammen", "er dehnt sich weit aus", "er wird ganz weich", "er löst sich ganz auf"], correct: 0,
                    explanation: "Er wird kürzer und zieht."
                },
                {
                    id: "kgk3l1_t4", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was hilft gegen schwache Muskeln?", answers: ["Bewegung und Sport", "viel Fernsehen", "lange liegen", "nur Süßes essen"], correct: 0,
                    explanation: "Muskeln wachsen durch Bewegung."
                },
                {
                    id: "kgk3l1_t5", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Wo sitzt der Schädel?", answers: ["am Kopf", "am Bein", "am Bauch", "an der Hand"], correct: 0,
                    explanation: "Der Schädel ist der Kopfknochen."
                },
                {
                    id: "kgk3l1_t6", category: "kurs_kg_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was trägt das Gewicht des Oberkörpers?", answers: ["die Wirbelsäule", "der Schädel", "die Fingerknochen", "das Ohr"], correct: 0,
                    explanation: "Die Wirbelsäule."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "kg_k3_l2", kurs: "koerper_k3", order: 2, icon: "👁️",
        title: "Die fünf Sinne", kurz: "Sehen, hören, riechen, schmecken, tasten",
        erklaerung: {
            intro: "Wir haben fünf Sinne: <b>Sehen</b> (Augen), <b>Hören</b> (Ohren), <b>Riechen</b> (Nase), <b>Schmecken</b> (Zunge) und <b>Tasten/Fühlen</b> (Haut). Im Ohr sitzt außerdem das <b>Gleichgewichtsorgan</b>. Die Sinnesorgane schicken Nachrichten über die Nerven ans <b>Gehirn</b>.",
            beispiele: ["Augen – sehen",
                "Ohren – hören und Gleichgewicht",
                "Haut – tasten, Wärme, Schmerz"],
            merksatz: "Augen, Ohren, Nase, Zunge, Haut – fünf Sinne."
        },
        uebung: {
            leicht: [
                {
                    id: "kgk3l2_l1", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "leicht", points: 10,
                    question: "Mit welchem Organ hörst du?", answers: ["Ohr", "Auge", "Nase", "Zunge"], correct: 0,
                    explanation: "Mit den Ohren."
                },
                {
                    id: "kgk3l2_l2", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "leicht", points: 10,
                    question: "Mit welchem Organ riechst du?", answers: ["Nase", "Ohr", "Haut", "Auge"], correct: 0,
                    explanation: "Mit der Nase."
                },
                {
                    id: "kgk3l2_l3", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "leicht", points: 10,
                    question: "Welches Sinnesorgan ist das größte?", answers: ["die Haut", "das Auge", "das Ohr", "die Nase"], correct: 0,
                    explanation: "Die Haut bedeckt den ganzen Körper."
                },
                {
                    id: "kgk3l2_l4", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "leicht", points: 10,
                    question: "Womit schmeckst du?", answers: ["mit der Zunge", "mit den Ohren", "mit den Augen", "mit den Haaren"], correct: 0,
                    explanation: "Mit der Zunge."
                }
            ],
            mittel: [
                {
                    id: "kgk3l2_m1", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "In welchem Organ sitzt der Gleichgewichtssinn?", answers: ["im Ohr", "im Auge", "in der Nase", "im Fuß"], correct: 0,
                    explanation: "Im Innenohr."
                },
                {
                    id: "kgk3l2_m2", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Wohin schicken die Sinne ihre Nachrichten?", answers: ["ans Gehirn", "ans Herz", "an den Magen", "an die Lunge"], correct: 0,
                    explanation: "Das Gehirn verarbeitet alles."
                },
                {
                    id: "kgk3l2_m3", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was schützt die Augen vor Staub?", answers: ["Wimpern und Lider", "die Ohren", "die Nase", "die Haare am Kopf"], correct: 0,
                    explanation: "Wimpern und Lider."
                },
                {
                    id: "kgk3l2_m4", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Welche Geschmacksrichtung hat eine Zitrone?", answers: ["sauer", "süß", "salzig", "bitter"], correct: 0,
                    explanation: "Zitronen schmecken sauer."
                }
            ],
            schwer: [
                {
                    id: "kgk3l2_s1", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "schwer", points: 10,
                    question: "Wozu wird die Pupille größer oder kleiner?", answers: ["für passend viel Licht", "für bessere Lautstärke", "für eine neue Augenfarbe", "zum schnelleren Blinzeln"], correct: 0,
                    explanation: "Die Iris macht die Pupille im Hellen klein und im Dunkeln groß."
                },
                {
                    id: "kgk3l2_s2", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "schwer", points: 10,
                    question: "Warum schmeckt Essen mit Schnupfen fade?", answers: ["Die Nase riecht nichts.", "Die Zunge ist krank.", "Die Ohren sind zu.", "Das Essen ist kalt."], correct: 0,
                    explanation: "Riechen gehört zum Schmecken dazu."
                },
                {
                    id: "kgk3l2_s3", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "schwer", points: 10,
                    question: "Was solltest du zum Schutz der Ohren meiden?", answers: ["sehr laute Musik", "leises Flüstern", "Vogelgezwitscher", "Ohrenschützer"], correct: 0,
                    explanation: "Zu laute Musik schadet dem Gehör."
                },
                {
                    id: "kgk3l2_s4", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "schwer", points: 10,
                    question: "Wie heißt die bunte Scheibe im Auge?", answers: ["Iris", "Pupille", "Linse", "Wimper"], correct: 0,
                    explanation: "Die Iris heißt auch Regenbogenhaut."
                }
            ]
        },
        test: [
                {
                    id: "kgk3l2_t1", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Wie viele Sinne zählt man klassisch?", answers: ["5", "3", "7", "10"], correct: 0,
                    explanation: "Sehen, hören, riechen, schmecken, tasten."
                },
                {
                    id: "kgk3l2_t2", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Womit fühlst du, ob etwas heiß ist?", answers: ["mit der Haut", "mit den Augen", "mit der Nase", "mit den Ohren"], correct: 0,
                    explanation: "Die Haut spürt Wärme und Kälte."
                },
                {
                    id: "kgk3l2_t3", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Welches Organ gehört zum Sehen?", answers: ["Auge", "Ohr", "Zunge", "Nase"], correct: 0,
                    explanation: "Das Auge."
                },
                {
                    id: "kgk3l2_t4", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was hilft beim Lesen in der Dämmerung?", answers: ["gutes Licht", "laute Musik", "Sonnenbrille", "Ohrstöpsel"], correct: 0,
                    explanation: "Gutes Licht schont die Augen."
                },
                {
                    id: "kgk3l2_t5", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was leiten die Nerven weiter?", answers: ["Reize zum Gehirn", "Blut zum Herzen", "Luft zur Lunge", "Essen zum Magen"], correct: 0,
                    explanation: "Nerven leiten Reize zum Gehirn."
                },
                {
                    id: "kgk3l2_t6", category: "kurs_kg_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was schmeckt salzig?", answers: ["Brezel", "Honig", "Zitrone", "Schokolade"], correct: 0,
                    explanation: "Brezeln sind salzig."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "kg_k3_l3", kurs: "koerper_k3", order: 3, icon: "🥗",
        title: "Gesund leben und Erste Hilfe", kurz: "Essen, Bewegung, Notruf 112",
        erklaerung: {
            intro: "Die <b>Ernährungspyramide</b> zeigt: viel trinken (Wasser!) und viel Obst, Gemüse und Getreide, weniger Milch, Fleisch und Fisch, nur wenig Süßes und Fett. Dazu gehören <b>Bewegung</b> und genug <b>Schlaf</b>. Im Notfall rufst du die <b>112</b>. Eine bewusstlose Person, die atmet, bringt man in die <b>stabile Seitenlage</b>.",
            beispiele: ["Wasser – bester Durstlöscher",
                "Obst und Gemüse – fünf Portionen am Tag",
                "Süßes – nur ein bisschen"],
            merksatz: "Viel trinken, bunt essen, viel bewegen – und im Notfall 112."
        },
        uebung: {
            leicht: [
                {
                    id: "kgk3l3_l1", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "leicht", points: 10,
                    question: "Was ist der beste Durstlöscher?", answers: ["Wasser", "Limonade", "Cola", "Kakao"], correct: 0,
                    explanation: "Wasser hat keinen Zucker."
                },
                {
                    id: "kgk3l3_l2", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "leicht", points: 10,
                    question: "Was sollte man nur wenig essen?", answers: ["Süßigkeiten", "Gemüse", "Obst", "Vollkornbrot"], correct: 0,
                    explanation: "Süßes steht ganz oben in der Pyramide."
                },
                {
                    id: "kgk3l3_l3", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "leicht", points: 10,
                    question: "Welche Nummer ruft Rettungsdienst und Feuerwehr?", answers: ["112", "110", "111", "911"], correct: 0,
                    explanation: "Die 112. Die 110 ist die Polizei."
                },
                {
                    id: "kgk3l3_l4", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "leicht", points: 10,
                    question: "Was ist gut für den Körper?", answers: ["viel Bewegung", "den ganzen Tag sitzen", "wenig schlafen", "nur Chips essen"], correct: 0,
                    explanation: "Bewegung hält fit."
                }
            ],
            mittel: [
                {
                    id: "kgk3l3_m1", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Wie viele Portionen Obst und Gemüse sind am Tag gut?", answers: ["5", "1", "2", "10"], correct: 0,
                    explanation: "Fünf Portionen am Tag."
                },
                {
                    id: "kgk3l3_m2", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Wovon brauchst du am meisten?", answers: ["Wasser und Tee", "Süßigkeiten", "Wurst und Fleisch", "Butter und Öl"], correct: 0,
                    explanation: "Getränke bilden die Basis der Pyramide."
                },
                {
                    id: "kgk3l3_m3", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Wie viel Schlaf brauchen Grundschulkinder etwa?", answers: ["etwa 10 Stunden", "etwa 5 Stunden", "etwa 2 Stunden", "etwa 18 Stunden"], correct: 0,
                    explanation: "Etwa 9 bis 12 Stunden."
                },
                {
                    id: "kgk3l3_m4", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Warum ist Vollkornbrot gut?", answers: ["Es macht lange satt.", "Es ist sehr süß.", "Es enthält viel Zucker.", "Es ist bunt."], correct: 0,
                    explanation: "Vollkorn hat viele Ballaststoffe."
                }
            ],
            schwer: [
                {
                    id: "kgk3l3_s1", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "schwer", points: 10,
                    question: "Wie legt man eine Person hin, die bewusstlos ist, aber atmet?", answers: ["stabile Seitenlage", "flach auf den Bauch", "aufrecht sitzend", "Beine nach oben"], correct: 0,
                    explanation: "So bleiben die Atemwege frei."
                },
                {
                    id: "kgk3l3_s2", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "schwer", points: 10,
                    question: "Was sagst du beim Notruf zuerst?", answers: ["Wo ist es passiert?", "Wie alt bist du?", "Wie ist das Wetter?", "Welche Farbe hat das Auto?"], correct: 0,
                    explanation: "Der Ort ist am wichtigsten."
                },
                {
                    id: "kgk3l3_s3", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "schwer", points: 10,
                    question: "Was gehört in eine gesunde Pause?", answers: ["Apfel und Käsebrot", "Chips und Cola", "Gummibärchen", "Schokoriegel"], correct: 0,
                    explanation: "Obst und Brot geben Kraft."
                },
                {
                    id: "kgk3l3_s4", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "schwer", points: 10,
                    question: "Warum ist Bewegung wichtig?", answers: ["Sie stärkt die Muskeln.", "Sie macht müde Augen.", "Sie macht dick.", "Sie ist verboten."], correct: 0,
                    explanation: "Bewegung stärkt Muskeln, Herz und Knochen."
                }
            ]
        },
        test: [
                {
                    id: "kgk3l3_t1", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was ist gesünder?", answers: ["eine Banane", "ein Schokoriegel", "eine Limo", "ein Lolli"], correct: 0,
                    explanation: "Die Banane."
                },
                {
                    id: "kgk3l3_t2", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Welche Nummer wählst du, wenn es brennt?", answers: ["112", "110", "115", "116"], correct: 0,
                    explanation: "Feuerwehr: 112."
                },
                {
                    id: "kgk3l3_t3", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was trinkst du am besten bei Durst?", answers: ["Wasser", "Energydrink", "Cola", "Eistee"], correct: 0,
                    explanation: "Wasser."
                },
                {
                    id: "kgk3l3_t4", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was hilft, gesund zu bleiben?", answers: ["Hände waschen", "Nägel kauen", "wenig schlafen", "nie lüften"], correct: 0,
                    explanation: "Händewaschen schützt vor Keimen."
                },
                {
                    id: "kgk3l3_t5", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was enthält viel Zucker?", answers: ["Limonade", "Wasser", "Gurke", "Kräutertee"], correct: 0,
                    explanation: "Limonade enthält viel Zucker."
                },
                {
                    id: "kgk3l3_t6", category: "kurs_kg_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "koerper_gesundheit_k3", difficulty: "mittel", points: 10,
                    question: "Was tust du bei einer kleinen Schürfwunde?", answers: ["säubern, Pflaster drauf", "Sand drauf streuen", "gar nichts tun", "kräftig reiben"], correct: 0,
                    explanation: "Säubern und abdecken."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "se_k3_l1", kurs: "strom_k3", order: 1, icon: "💡",
        title: "Der Stromkreis", kurz: "Batterie, Kabel, Lampe, Schalter",
        erklaerung: {
            intro: "Damit eine Lampe leuchtet, braucht es einen <b>geschlossenen Stromkreis</b>: Batterie (Pluspol und Minuspol) – Kabel – Lampe – Kabel – zurück zur Batterie. Ein <b>Schalter</b> öffnet oder schließt den Stromkreis. Ist der Kreis unterbrochen, fließt kein Strom.",
            beispiele: ["Schalter an – Kreis geschlossen – Lampe leuchtet",
                "Schalter aus – Kreis offen – Lampe aus",
                "Batterie: Pluspol (+) und Minuspol (−)"],
            merksatz: "Kein geschlossener Kreis – kein Licht."
        },
        uebung: {
            leicht: [
                {
                    id: "sek3l1_l1", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "leicht", points: 10,
                    question: "Was braucht eine Lampe, um zu leuchten?", answers: ["einen Stromkreis", "viel Wasser", "einen Magneten", "Sonnenlicht"], correct: 0,
                    explanation: "Einen geschlossenen Stromkreis."
                },
                {
                    id: "sek3l1_l2", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "leicht", points: 10,
                    question: "Was macht ein Schalter?", answers: ["unterbricht den Strom", "erzeugt neuen Strom", "kühlt die Lampe", "speichert den Strom"], correct: 0,
                    explanation: "Er öffnet oder schließt den Kreis."
                },
                {
                    id: "sek3l1_l3", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "leicht", points: 10,
                    question: "Wie heißen die Pole einer Batterie?", answers: ["Plus und Minus", "Nord und Süd", "oben und unten", "an und aus"], correct: 0,
                    explanation: "Pluspol und Minuspol."
                },
                {
                    id: "sek3l1_l4", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "leicht", points: 10,
                    question: "Was passiert, wenn ein Kabel ab ist?", answers: ["Die Lampe geht aus.", "Die Lampe wird heller.", "Die Batterie lädt.", "Nichts passiert."], correct: 0,
                    explanation: "Der Kreis ist unterbrochen."
                }
            ],
            mittel: [
                {
                    id: "sek3l1_m1", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Wie fließt der Strom im Stromkreis?", answers: ["im Kreis herum", "nur bis zur Lampe", "in die Luft", "in den Boden"], correct: 0,
                    explanation: "Er fließt von der Batterie durch die Lampe zurück."
                },
                {
                    id: "sek3l1_m2", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Warum leuchtet die Lampe bei offenem Schalter nicht?", answers: ["Der Kreis ist unterbrochen.", "Die Lampe ist kaputt.", "Die Batterie ist zu voll.", "Es ist zu hell."], correct: 0,
                    explanation: "Ein offener Schalter unterbricht den Kreis."
                },
                {
                    id: "sek3l1_m3", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was zeigt das Zeichen '+' an der Batterie?", answers: ["den Pluspol", "den Minuspol", "den Schalter", "das Kabel"], correct: 0,
                    explanation: "Plus steht für den Pluspol."
                },
                {
                    id: "sek3l1_m4", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was ist im Inneren eines Kabels?", answers: ["ein Metalldraht", "ein Gummiband", "ein Holzstab", "ein Wollfaden"], correct: 0,
                    explanation: "Ein Draht aus Metall leitet den Strom."
                }
            ],
            schwer: [
                {
                    id: "sek3l1_s1", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "schwer", points: 10,
                    question: "Zwei Lampen hintereinander: Eine geht kaputt. Was passiert?", answers: ["Beide gehen aus.", "Die andere wird heller.", "Nichts passiert.", "Die Batterie platzt."], correct: 0,
                    explanation: "In der Reihenschaltung ist der Kreis dann unterbrochen."
                },
                {
                    id: "sek3l1_s2", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "schwer", points: 10,
                    question: "Wie heißt es, wenn jede Lampe einen eigenen Weg hat?", answers: ["Parallelschaltung", "Reihenschaltung", "Kurzschluss", "Wechselschalter"], correct: 0,
                    explanation: "Parallelschaltung."
                },
                {
                    id: "sek3l1_s3", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "schwer", points: 10,
                    question: "Was ist ein Kurzschluss?", answers: ["Pole direkt verbunden", "ein sehr kurzes Kabel", "eine kaputte Lampe", "ein leerer Akku"], correct: 0,
                    explanation: "Der Strom fließt ohne Lampe direkt zurück."
                },
                {
                    id: "sek3l1_s4", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "schwer", points: 10,
                    question: "Warum ist ein Kurzschluss gefährlich?", answers: ["Kabel werden heiß.", "Die Lampe wird bunt.", "Es wird dunkel.", "Der Schalter klemmt."], correct: 0,
                    explanation: "Die Drähte können sehr heiß werden."
                }
            ]
        },
        test: [
                {
                    id: "sek3l1_t1", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was liefert im Stromkreis die Energie?", answers: ["die Batterie", "die Lampe", "der Schalter", "das Kabel"], correct: 0,
                    explanation: "Die Batterie."
                },
                {
                    id: "sek3l1_t2", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was passiert, wenn du den Schalter schließt?", answers: ["Die Lampe leuchtet.", "Die Lampe geht aus.", "Die Batterie wird voll.", "Nichts passiert."], correct: 0,
                    explanation: "Der Kreis ist geschlossen."
                },
                {
                    id: "sek3l1_t3", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Welcher Stromkreis ist geschlossen?", answers: ["ohne Lücke", "mit Lücke", "ohne Batterie", "ohne Kabel"], correct: 0,
                    explanation: "Geschlossen heißt: ohne Lücke."
                },
                {
                    id: "sek3l1_t4", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Woraus ist der Draht im Kabel meist?", answers: ["Kupfer", "Holz", "Gummi", "Papier"], correct: 0,
                    explanation: "Meist aus Kupfer."
                },
                {
                    id: "sek3l1_t5", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Wie viele Pole hat eine Batterie?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Plus und Minus."
                },
                {
                    id: "sek3l1_t6", category: "kurs_se_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was macht die Lampe aus Strom?", answers: ["Licht", "Wasser", "Wind", "Luft"], correct: 0,
                    explanation: "Licht (und etwas Wärme)."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "se_k3_l2", kurs: "strom_k3", order: 2, icon: "🔌",
        title: "Leiter, Nichtleiter, Sicherheit", kurz: "Metall leitet, Plastik schützt",
        erklaerung: {
            intro: "<b>Leiter</b> lassen Strom durch: Metalle wie Kupfer, Eisen, Aluminium – leider auch Wasser und der menschliche Körper. <b>Nichtleiter</b> (Isolatoren) lassen keinen Strom durch: Kunststoff, Gummi, Glas, trockenes Holz. Darum sind Kabel mit Kunststoff ummantelt. <b>Strom aus der Steckdose (230 Volt) ist lebensgefährlich!</b> Experimentiere nur mit Batterien.",
            beispiele: ["Büroklammer – Leiter",
                "Radiergummi – Nichtleiter",
                "Wasser – leitet, darum kein Föhn an der Badewanne"],
            merksatz: "Metall leitet, Plastik schützt – und die Steckdose ist tabu!"
        },
        uebung: {
            leicht: [
                {
                    id: "sek3l2_l1", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "leicht", points: 10,
                    question: "Welcher Gegenstand leitet Strom?", answers: ["Büroklammer", "Radiergummi", "Holzstab", "Plastiklineal"], correct: 0,
                    explanation: "Büroklammern sind aus Metall."
                },
                {
                    id: "sek3l2_l2", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "leicht", points: 10,
                    question: "Welcher Stoff ist ein Nichtleiter?", answers: ["Gummi", "Kupfer", "Eisen", "Aluminium"], correct: 0,
                    explanation: "Gummi lässt keinen Strom durch."
                },
                {
                    id: "sek3l2_l3", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "leicht", points: 10,
                    question: "Warum haben Kabel eine Plastikhülle?", answers: ["Sie schützt vor Strom.", "Sie sieht schön aus.", "Sie macht Strom.", "Sie ist billig."], correct: 0,
                    explanation: "Kunststoff ist ein Nichtleiter."
                },
                {
                    id: "sek3l2_l4", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "leicht", points: 10,
                    question: "Womit darfst du Strom-Versuche machen?", answers: ["mit Batterien", "mit der Steckdose", "mit dem Föhn", "mit der Lampe im Flur"], correct: 0,
                    explanation: "Nur mit Batterien."
                }
            ],
            mittel: [
                {
                    id: "sek3l2_m1", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Warum ist Wasser in der Nähe von Strom gefährlich?", answers: ["Wasser leitet Strom.", "Wasser ist kalt.", "Wasser ist schwer.", "Wasser macht Lärm."], correct: 0,
                    explanation: "Wasser leitet den Strom weiter."
                },
                {
                    id: "sek3l2_m2", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was leitet Strom?", answers: ["eine Münze", "ein Luftballon", "ein Wollfaden", "ein Stück Papier"], correct: 0,
                    explanation: "Münzen sind aus Metall."
                },
                {
                    id: "sek3l2_m3", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Wie viel Volt hat eine Steckdose bei uns?", answers: ["230 Volt", "4,5 Volt", "12 Volt", "1,5 Volt"], correct: 0,
                    explanation: "230 Volt – lebensgefährlich."
                },
                {
                    id: "sek3l2_m4", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was tust du, wenn ein Kabel kaputt ist?", answers: ["Erwachsenen holen", "selbst reparieren", "mit Wasser kühlen", "daran ziehen"], correct: 0,
                    explanation: "Nie selbst anfassen – Erwachsene holen."
                }
            ],
            schwer: [
                {
                    id: "sek3l2_s1", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "schwer", points: 10,
                    question: "Welcher Stoff leitet Strom NICHT?", answers: ["Glas", "Eisen", "Kupfer", "Silber"], correct: 0,
                    explanation: "Glas ist ein Nichtleiter."
                },
                {
                    id: "sek3l2_s2", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "schwer", points: 10,
                    question: "Warum keinen Drachen nahe Stromleitungen steigen lassen?", answers: ["Strom kann überspringen.", "Der Drachen wird nass.", "Die Vögel stören.", "Es ist zu windig."], correct: 0,
                    explanation: "Bei Hochspannung kann Strom überspringen."
                },
                {
                    id: "sek3l2_s3", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "schwer", points: 10,
                    question: "Ist der menschliche Körper ein Leiter?", answers: ["Ja, er leitet.", "Nein, niemals.", "Nur im Winter.", "Nur die Haare."], correct: 0,
                    explanation: "Ja – darum ist Strom so gefährlich."
                },
                {
                    id: "sek3l2_s4", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "schwer", points: 10,
                    question: "Warum soll man nie in eine Steckdose fassen?", answers: ["Es ist lebensgefährlich.", "Weil sie schmutzig ist", "Weil sie sehr heiß ist", "Weil sie zu klein ist"], correct: 0,
                    explanation: "230 Volt können töten."
                }
            ]
        },
        test: [
                {
                    id: "sek3l2_t1", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Welcher Gegenstand ist ein Nichtleiter?", answers: ["Plastiklöffel", "Eisennagel", "Alufolie", "Schlüssel"], correct: 0,
                    explanation: "Kunststoff leitet nicht."
                },
                {
                    id: "sek3l2_t2", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was leitet Strom gut?", answers: ["Metall", "Gummi", "Kunststoff", "Glas"], correct: 0,
                    explanation: "Metalle leiten gut."
                },
                {
                    id: "sek3l2_t3", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Wo darf kein Föhn in der Nähe sein?", answers: ["an der Badewanne", "im Kinderzimmer", "im langen Flur", "am Kleiderschrank"], correct: 0,
                    explanation: "Wasser und Strom sind gefährlich."
                },
                {
                    id: "sek3l2_t4", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Woraus ist die Hülle eines Kabels?", answers: ["Kunststoff", "Kupfer", "Eisen", "Glasfasern"], correct: 0,
                    explanation: "Aus Kunststoff."
                },
                {
                    id: "sek3l2_t5", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Welche Spannung hat eine kleine Batterie (AA)?", answers: ["1,5 Volt", "230 Volt", "100 Volt", "50 Volt"], correct: 0,
                    explanation: "1,5 Volt – ungefährlich."
                },
                {
                    id: "sek3l2_t6", category: "kurs_se_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Ist trockenes Holz ein Leiter?", answers: ["Nein, ein Nichtleiter", "Ja, ein guter Leiter", "Ja, wie Metall", "Nur wenn es brennt"], correct: 0,
                    explanation: "Trockenes Holz leitet nicht."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "se_k3_l3", kurs: "strom_k3", order: 3, icon: "🌬️",
        title: "Energie sparen", kurz: "Sonne, Wind, Wasser – und Licht aus",
        erklaerung: {
            intro: "Strom kommt aus <b>Kraftwerken</b>. <b>Erneuerbare Energien</b> gehen nicht aus: Sonne (Solaranlage), Wind (Windrad), Wasser (Wasserkraftwerk). <b>Fossile Brennstoffe</b> wie Kohle, Erdöl und Erdgas sind irgendwann verbraucht und schaden dem Klima. Energie sparen: Licht aus, LED-Lampen, Geräte ganz ausschalten statt Standby.",
            beispiele: ["Windrad – Strom aus Wind",
                "Solaranlage – Strom aus Sonne",
                "Licht aus beim Rausgehen – Energie sparen"],
            merksatz: "Sonne, Wind und Wasser – Energie, die nicht ausgeht."
        },
        uebung: {
            leicht: [
                {
                    id: "sek3l3_l1", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "leicht", points: 10,
                    question: "Welche Energie geht nie aus?", answers: ["Sonnenenergie", "Kohlekraft", "Erdölheizung", "Erdgasofen"], correct: 0,
                    explanation: "Die Sonne scheint noch sehr lange."
                },
                {
                    id: "sek3l3_l2", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "leicht", points: 10,
                    question: "Was erzeugt ein Windrad?", answers: ["Strom", "Regen", "Wärme", "Wolken"], correct: 0,
                    explanation: "Windräder erzeugen Strom."
                },
                {
                    id: "sek3l3_l3", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "leicht", points: 10,
                    question: "Wie sparst du Energie?", answers: ["Licht ausmachen", "beim Heizen lüften", "Fernseher anlassen", "Kühlschrank aufhalten"], correct: 0,
                    explanation: "Licht aus, wenn du gehst."
                },
                {
                    id: "sek3l3_l4", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "leicht", points: 10,
                    question: "Welche Lampe braucht am wenigsten Strom?", answers: ["LED-Lampe", "Glühbirne", "Halogenlampe", "Leuchtstoffröhre"], correct: 0,
                    explanation: "LED-Lampen sind am sparsamsten."
                }
            ],
            mittel: [
                {
                    id: "sek3l3_m1", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was wandelt eine Solaranlage in Strom um?", answers: ["Sonnenlicht", "Wind", "Regen", "Wärme aus der Erde"], correct: 0,
                    explanation: "Solarzellen nutzen Sonnenlicht."
                },
                {
                    id: "sek3l3_m2", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was ist ein fossiler Brennstoff?", answers: ["Kohle", "Wind", "Sonnenlicht", "Wasserkraft"], correct: 0,
                    explanation: "Kohle ist fossil."
                },
                {
                    id: "sek3l3_m3", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Warum ist Standby nicht gut?", answers: ["Es verbraucht Strom.", "Es ist zu laut.", "Es macht Geräte kalt.", "Es ist verboten."], correct: 0,
                    explanation: "Auch im Standby fließt Strom."
                },
                {
                    id: "sek3l3_m4", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was erzeugt ein Dynamo am Fahrrad?", answers: ["Strom für das Licht", "Luft für die Reifen", "Wärme für die Hände", "Musik"], correct: 0,
                    explanation: "Der Dynamo macht aus Bewegung Strom."
                }
            ],
            schwer: [
                {
                    id: "sek3l3_s1", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "schwer", points: 10,
                    question: "Warum schaden Kohlekraftwerke dem Klima?", answers: ["Sie stoßen CO₂ aus.", "Sie sind zu laut.", "Sie sind zu hoch.", "Sie brauchen Wind."], correct: 0,
                    explanation: "CO₂ erwärmt die Erde."
                },
                {
                    id: "sek3l3_s2", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "schwer", points: 10,
                    question: "Woraus entstanden Kohle und Erdöl?", answers: ["aus uralten Lebewesen", "aus altem Plastik", "aus heißen Steinen", "aus Regenwasser"], correct: 0,
                    explanation: "Aus Pflanzen und Kleinstlebewesen vor Millionen Jahren."
                },
                {
                    id: "sek3l3_s3", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "schwer", points: 10,
                    question: "Was braucht ein Wasserkraftwerk?", answers: ["fließendes Wasser", "viel Sonne", "starken Wind", "Kohle"], correct: 0,
                    explanation: "Fließendes Wasser treibt Turbinen an."
                },
                {
                    id: "sek3l3_s4", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "schwer", points: 10,
                    question: "Was spart beim Kochen Energie?", answers: ["Deckel auf den Topf", "Herd länger anlassen", "Topf ohne Deckel", "Fenster aufreißen"], correct: 0,
                    explanation: "Mit Deckel wird es schneller heiß."
                }
            ]
        },
        test: [
                {
                    id: "sek3l3_t1", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was ist eine erneuerbare Energie?", answers: ["Windkraft", "Erdgas", "Braunkohle", "Erdöl"], correct: 0,
                    explanation: "Wind geht nicht aus."
                },
                {
                    id: "sek3l3_t2", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was erzeugt Strom aus Sonnenlicht?", answers: ["Solarzellen", "Windräder", "Kohleöfen", "Wasserräder"], correct: 0,
                    explanation: "Solarzellen."
                },
                {
                    id: "sek3l3_t3", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was ist besser für die Umwelt?", answers: ["Strom sparen", "Licht anlassen", "Geräte im Standby", "Heizung voll aufdrehen"], correct: 0,
                    explanation: "Strom sparen schont das Klima."
                },
                {
                    id: "sek3l3_t4", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Welche Energiequelle geht irgendwann aus?", answers: ["Erdöl", "Wind", "Sonne", "Wasser"], correct: 0,
                    explanation: "Erdöl ist begrenzt."
                },
                {
                    id: "sek3l3_t5", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was ist ein Windrad?", answers: ["eine Stromanlage", "eine Wetterfahne", "ein Wasserrad", "ein Ventilator"], correct: 0,
                    explanation: "Es macht aus Wind Strom."
                },
                {
                    id: "sek3l3_t6", category: "kurs_se_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "strom_energie", difficulty: "mittel", points: 10,
                    question: "Was tust du, wenn du das Zimmer verlässt?", answers: ["das Licht ausmachen", "das Fenster öffnen", "den Fernseher anlassen", "die Heizung aufdrehen"], correct: 0,
                    explanation: "Licht aus spart Energie."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "wn_k3_l1", kurs: "wald_k3", order: 1, icon: "🌳",
        title: "Die Stockwerke des Waldes", kurz: "Boden, Moos, Kraut, Strauch, Baum",
        erklaerung: {
            intro: "Der Wald hat <b>Stockwerke</b>: unten der <b>Boden</b> mit Wurzeln, Pilzen und Regenwürmern, dann die <b>Moosschicht</b>, die <b>Krautschicht</b> (Farne, Blumen), die <b>Strauchschicht</b> (Holunder, Haselnuss) und oben die <b>Baumschicht</b> mit den Kronen. Jedes Stockwerk hat eigene Tiere und Pflanzen.",
            beispiele: ["Regenwurm – Bodenschicht",
                "Farn – Krautschicht",
                "Specht – Baumschicht"],
            merksatz: "Boden – Moos – Kraut – Strauch – Baum: von unten nach oben."
        },
        uebung: {
            leicht: [
                {
                    id: "wnk3l1_l1", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "leicht", points: 10,
                    question: "Welche Schicht ist ganz oben im Wald?", answers: ["Baumschicht", "Moosschicht", "Krautschicht", "Bodenschicht"], correct: 0,
                    explanation: "Oben sind die Baumkronen."
                },
                {
                    id: "wnk3l1_l2", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "leicht", points: 10,
                    question: "Wo lebt der Regenwurm?", answers: ["im Boden", "in der Baumkrone", "im Strauch", "auf Blättern"], correct: 0,
                    explanation: "Im Waldboden."
                },
                {
                    id: "wnk3l1_l3", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "leicht", points: 10,
                    question: "Welche Pflanze wächst in der Krautschicht?", answers: ["Farn", "Eiche", "Buche", "Fichte"], correct: 0,
                    explanation: "Farne gehören zur Krautschicht."
                },
                {
                    id: "wnk3l1_l4", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "leicht", points: 10,
                    question: "Wo baut der Specht seine Höhle?", answers: ["im Baumstamm", "im Boden", "im Moos", "im Gartenteich"], correct: 0,
                    explanation: "Er hackt sie in den Stamm."
                }
            ],
            mittel: [
                {
                    id: "wnk3l1_m1", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Wie viele Stockwerke hat der Wald?", answers: ["5", "2", "3", "10"], correct: 0,
                    explanation: "Boden, Moos, Kraut, Strauch, Baum."
                },
                {
                    id: "wnk3l1_m2", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Welcher Strauch wächst in der Strauchschicht?", answers: ["Haselnuss", "Eiche", "Moos", "Löwenzahn"], correct: 0,
                    explanation: "Die Haselnuss ist ein Strauch."
                },
                {
                    id: "wnk3l1_m3", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Warum blühen im Frühling viele Blumen am Waldboden?", answers: ["Viel Licht, noch kein Laub", "Weil es nie regnet", "Weil es schon heiß ist", "Weil Rehe sie pflanzen"], correct: 0,
                    explanation: "Die Bäume haben noch keine Blätter, darum kommt Licht nach unten."
                },
                {
                    id: "wnk3l1_m4", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Was speichert Moos?", answers: ["viel Wasser", "viel Strom", "viel Honig", "viel Sand"], correct: 0,
                    explanation: "Moos saugt Wasser wie ein Schwamm."
                }
            ],
            schwer: [
                {
                    id: "wnk3l1_s1", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "schwer", points: 10,
                    question: "Was machen Pilze und Würmer mit dem Laub?", answers: ["Sie zersetzen es zu Humus.", "Sie färben es grün.", "Sie kleben es an.", "Sie fressen den Stamm."], correct: 0,
                    explanation: "Daraus entsteht fruchtbare Erde."
                },
                {
                    id: "wnk3l1_s2", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "schwer", points: 10,
                    question: "Was ist Humus?", answers: ["fruchtbare Erde", "ein Waldtier", "ein Baum", "ein Pilz"], correct: 0,
                    explanation: "Humus ist fruchtbare Erde aus zersetztem Laub."
                },
                {
                    id: "wnk3l1_s3", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "schwer", points: 10,
                    question: "Welches Tier lebt in der Baumschicht?", answers: ["Eichhörnchen", "Regenwurm", "Maulwurf", "Schnecke"], correct: 0,
                    explanation: "Eichhörnchen klettern in den Kronen."
                },
                {
                    id: "wnk3l1_s4", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "schwer", points: 10,
                    question: "Warum ist es im Sommer am Waldboden dunkel?", answers: ["Kronen halten Licht ab.", "Es regnet viel.", "Die Sonne scheint nicht.", "Der Boden ist schwarz."], correct: 0,
                    explanation: "Das dichte Laub schluckt das Licht."
                }
            ]
        },
        test: [
                {
                    id: "wnk3l1_t1", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Welche Schicht liegt direkt über dem Boden?", answers: ["Moosschicht", "Baumschicht", "Strauchschicht", "Kronendach"], correct: 0,
                    explanation: "Die Moosschicht."
                },
                {
                    id: "wnk3l1_t2", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Wo wächst der Farn?", answers: ["in der Krautschicht", "in der Baumschicht", "unter der Erde", "im Wasser"], correct: 0,
                    explanation: "In der Krautschicht."
                },
                {
                    id: "wnk3l1_t3", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Was lebt im Waldboden?", answers: ["Regenwurm", "Specht", "Eichhörnchen", "Eule"], correct: 0,
                    explanation: "Der Regenwurm."
                },
                {
                    id: "wnk3l1_t4", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Wie heißt ein Wald aus Laub- und Nadelbäumen?", answers: ["Mischwald", "Nadelwald", "Laubwald", "Urwald"], correct: 0,
                    explanation: "Mischwald."
                },
                {
                    id: "wnk3l1_t5", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Welche Schicht liegt zwischen Kraut und Baum?", answers: ["Strauchschicht", "Moosschicht", "Bodenschicht", "Wurzelschicht"], correct: 0,
                    explanation: "Die Strauchschicht."
                },
                {
                    id: "wnk3l1_t6", category: "kurs_wn_k3_l1", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Was entsteht aus totem Laub?", answers: ["Humus", "Sand", "Stein", "Lehm"], correct: 0,
                    explanation: "Humus."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "wn_k3_l2", kurs: "wald_k3", order: 2, icon: "🍁",
        title: "Laub- und Nadelbäume", kurz: "Eiche, Buche, Fichte, Tanne …",
        erklaerung: {
            intro: "<b>Laubbäume</b> wie Eiche, Buche, Ahorn und Birke verlieren im Herbst ihre Blätter. <b>Nadelbäume</b> wie Fichte, Tanne und Kiefer behalten ihre Nadeln im Winter – Ausnahme: die <b>Lärche</b> wirft sie ab. Früchte: Eiche – Eicheln, Buche – Bucheckern, Ahorn – Flügelsamen. Das Alter eines Baumes erkennt man an den <b>Jahresringen</b>.",
            beispiele: ["Eiche – Eicheln",
                "Birke – weiße Rinde",
                "Lärche – Nadelbaum, der die Nadeln abwirft"],
            merksatz: "Fichtenzapfen hängen, Tannenzapfen stehen."
        },
        uebung: {
            leicht: [
                {
                    id: "wnk3l2_l1", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "leicht", points: 10,
                    question: "Welcher Baum ist ein Nadelbaum?", answers: ["Fichte", "Eiche", "Buche", "Kastanie"], correct: 0,
                    explanation: "Die Fichte hat Nadeln."
                },
                {
                    id: "wnk3l2_l2", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "leicht", points: 10,
                    question: "Welche Früchte hat die Buche?", answers: ["Bucheckern", "Eicheln", "Kastanien", "Tannenzapfen"], correct: 0,
                    explanation: "Bucheckern."
                },
                {
                    id: "wnk3l2_l3", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "leicht", points: 10,
                    question: "Woran erkennt man die Birke leicht?", answers: ["weiße Rinde", "rote Blätter", "blaue Nadeln", "gelbe Blüten"], correct: 0,
                    explanation: "Die Birke hat eine weiße Rinde."
                },
                {
                    id: "wnk3l2_l4", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "leicht", points: 10,
                    question: "Was verlieren Laubbäume im Herbst?", answers: ["ihre Blätter", "ihre Wurzeln", "ihre Rinde", "ihren Stamm"], correct: 0,
                    explanation: "Ihre Blätter."
                }
            ],
            mittel: [
                {
                    id: "wnk3l2_m1", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Welcher Nadelbaum verliert im Winter seine Nadeln?", answers: ["Lärche", "Fichte", "Tanne", "Kiefer"], correct: 0,
                    explanation: "Die Lärche wirft ihre Nadeln ab."
                },
                {
                    id: "wnk3l2_m2", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Woran erkennt man das Alter eines Baumes?", answers: ["an den Jahresringen", "an der Blattfarbe", "an den Ästen", "an der Höhe"], correct: 0,
                    explanation: "Jedes Jahr wächst ein Ring."
                },
                {
                    id: "wnk3l2_m3", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Wie hängen die Zapfen der Fichte?", answers: ["nach unten", "nach oben", "seitlich gerade", "gar nicht"], correct: 0,
                    explanation: "Fichtenzapfen hängen."
                },
                {
                    id: "wnk3l2_m4", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Welche Form hat ein Ahornblatt?", answers: ["handförmig", "nadelförmig", "kreisrund", "herzförmig"], correct: 0,
                    explanation: "Ahornblätter sehen aus wie eine Hand."
                }
            ],
            schwer: [
                {
                    id: "wnk3l2_s1", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "schwer", points: 10,
                    question: "Warum werfen Laubbäume im Herbst die Blätter ab?", answers: ["Sie sparen so Wasser.", "Sie sind zu schwer.", "Die Vögel wollen es.", "Sie sind zu bunt."], correct: 0,
                    explanation: "Im Winter ist der Boden oft gefroren – der Baum spart Wasser."
                },
                {
                    id: "wnk3l2_s2", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "schwer", points: 10,
                    question: "Wie stehen die Zapfen der Tanne?", answers: ["aufrecht nach oben", "hängend nach unten", "quer zur Seite", "im Boden"], correct: 0,
                    explanation: "Tannenzapfen stehen aufrecht."
                },
                {
                    id: "wnk3l2_s3", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "schwer", points: 10,
                    question: "Was ist Harz?", answers: ["klebriger Baumsaft", "ein kleines Waldtier", "eine Pilzart", "ein Vogelnest"], correct: 0,
                    explanation: "Nadelbäume schützen Wunden mit Harz."
                },
                {
                    id: "wnk3l2_s4", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "schwer", points: 10,
                    question: "Welcher Baum hat Flügelsamen, die wie Propeller fliegen?", answers: ["Ahorn", "Eiche", "Fichte", "Kastanie"], correct: 0,
                    explanation: "Der Ahorn."
                }
            ]
        },
        test: [
                {
                    id: "wnk3l2_t1", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Welcher Baum ist ein Laubbaum?", answers: ["Eiche", "Fichte", "Tanne", "Kiefer"], correct: 0,
                    explanation: "Die Eiche."
                },
                {
                    id: "wnk3l2_t2", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Worin bilden Nadelbäume ihre Samen?", answers: ["in Zapfen", "in Eicheln", "in Kastanien", "in Nüssen"], correct: 0,
                    explanation: "In Zapfen – Nadelbäume haben keine Früchte wie Laubbäume."
                },
                {
                    id: "wnk3l2_t3", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Wann tragen Laubbäume keine Blätter?", answers: ["im Winter", "im Sommer", "im Frühling", "nie"], correct: 0,
                    explanation: "Im Winter."
                },
                {
                    id: "wnk3l2_t4", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Wie heißt ein Wald nur aus Nadelbäumen?", answers: ["Nadelwald", "Laubwald", "Mischwald", "Regenwald"], correct: 0,
                    explanation: "Nadelwald."
                },
                {
                    id: "wnk3l2_t5", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Was sammeln Eichhörnchen gern?", answers: ["Nüsse und Eicheln", "Steine und Sand", "Gras und Moos", "Federn und Fell"], correct: 0,
                    explanation: "Nüsse und Eicheln als Wintervorrat."
                },
                {
                    id: "wnk3l2_t6", category: "kurs_wn_k3_l2", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Woran erkennt man einen Nadelbaum?", answers: ["an den Nadeln", "an der Blüte", "am Geruch", "an der Farbe"], correct: 0,
                    explanation: "An den Nadeln."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "wn_k3_l3", kurs: "wald_k3", order: 3, icon: "🦊",
        title: "Tiere und Nahrungskette", kurz: "Wer frisst wen?",
        erklaerung: {
            intro: "Im Wald leben <b>Pflanzenfresser</b> (Reh, Hase), <b>Fleischfresser</b> (Luchs, Wolf) und <b>Allesfresser</b> (Wildschwein, Dachs). Eine <b>Nahrungskette</b> zeigt, wer wen frisst: Eichel → Maus → Fuchs. Viele Tiere sind <b>nachtaktiv</b>, zum Beispiel Eule und Fledermaus. Im Wald gilt: leise sein, auf den Wegen bleiben, nichts wegwerfen.",
            beispiele: ["Gras → Hase → Fuchs",
                "Reh – Pflanzenfresser",
                "Wildschwein – Allesfresser"],
            merksatz: "Pflanze → Pflanzenfresser → Fleischfresser."
        },
        uebung: {
            leicht: [
                {
                    id: "wnk3l3_l1", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "leicht", points: 10,
                    question: "Was frisst ein Reh?", answers: ["Pflanzen", "Mäuse", "Fische", "Insekten"], correct: 0,
                    explanation: "Rehe fressen Pflanzen."
                },
                {
                    id: "wnk3l3_l2", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "leicht", points: 10,
                    question: "Welches Tier ist ein Fleischfresser?", answers: ["Luchs", "Reh", "Hase", "Hirsch"], correct: 0,
                    explanation: "Der Luchs jagt andere Tiere."
                },
                {
                    id: "wnk3l3_l3", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "leicht", points: 10,
                    question: "Welches Tier ist nachtaktiv?", answers: ["Eule", "Specht", "Eichhörnchen", "Buchfink"], correct: 0,
                    explanation: "Die Eule jagt nachts."
                },
                {
                    id: "wnk3l3_l4", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "leicht", points: 10,
                    question: "Wie verhältst du dich im Wald?", answers: ["leise sein", "laut schreien", "Müll liegen lassen", "Tiere jagen"], correct: 0,
                    explanation: "Leise sein und nichts wegwerfen."
                }
            ],
            mittel: [
                {
                    id: "wnk3l3_m1", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Welches Tier ist ein Allesfresser?", answers: ["Wildschwein", "Rothirsch", "Feldhase", "Luchs"], correct: 0,
                    explanation: "Wildschweine fressen fast alles."
                },
                {
                    id: "wnk3l3_m2", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Was steht am Anfang jeder Nahrungskette?", answers: ["eine Pflanze", "ein Fuchs", "ein Wolf", "ein Mensch"], correct: 0,
                    explanation: "Pflanzen stehen am Anfang."
                },
                {
                    id: "wnk3l3_m3", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Ergänze: Gras → Hase → ?", answers: ["Fuchs", "Reh", "Maus", "Eichel"], correct: 0,
                    explanation: "Der Fuchs frisst den Hasen."
                },
                {
                    id: "wnk3l3_m4", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Wo schläft die Fledermaus am Tag?", answers: ["in Höhlen und Spalten", "im Wasser", "im Nest am Boden", "im Bau unter der Erde"], correct: 0,
                    explanation: "In Höhlen, Spalten oder Baumhöhlen."
                }
            ],
            schwer: [
                {
                    id: "wnk3l3_s1", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "schwer", points: 10,
                    question: "Was passiert, wenn alle Füchse verschwinden?", answers: ["Es gibt mehr Mäuse.", "Es gibt weniger Mäuse.", "Es wächst mehr Moos.", "Nichts ändert sich."], correct: 0,
                    explanation: "Niemand frisst die Mäuse mehr."
                },
                {
                    id: "wnk3l3_s2", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "schwer", points: 10,
                    question: "Warum soll man im Wald auf den Wegen bleiben?", answers: ["um Tiere nicht zu stören", "weil es schneller geht", "weil Wege schöner sind", "um Pilze zu zertreten"], correct: 0,
                    explanation: "So stört man Tiere und Pflanzen nicht."
                },
                {
                    id: "wnk3l3_s3", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "schwer", points: 10,
                    question: "Welcher Käfer schadet Fichten, wenn es trocken ist?", answers: ["Borkenkäfer", "Marienkäfer", "Maikäfer", "Mistkäfer"], correct: 0,
                    explanation: "Der Borkenkäfer bohrt sich unter die Rinde."
                },
                {
                    id: "wnk3l3_s4", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "schwer", points: 10,
                    question: "Was frisst die Eule?", answers: ["Mäuse", "Gras", "Eicheln", "Pilze"], correct: 0,
                    explanation: "Eulen jagen Mäuse."
                }
            ]
        },
        test: [
                {
                    id: "wnk3l3_t1", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Welches Tier frisst Pflanzen?", answers: ["Hase", "Luchs", "Wolf", "Eule"], correct: 0,
                    explanation: "Der Hase."
                },
                {
                    id: "wnk3l3_t2", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Wie nennt man die Reihe 'Wer frisst wen'?", answers: ["Nahrungskette", "Halskette", "Fahrradkette", "Lichterkette"], correct: 0,
                    explanation: "Nahrungskette."
                },
                {
                    id: "wnk3l3_t3", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Welches Tier ist tagsüber aktiv?", answers: ["Eichhörnchen", "Eule", "Fledermaus", "Igel"], correct: 0,
                    explanation: "Das Eichhörnchen."
                },
                {
                    id: "wnk3l3_t4", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Was darf man im Wald NICHT tun?", answers: ["Feuer machen", "Vögel beobachten", "Blätter anschauen", "auf Wegen gehen"], correct: 0,
                    explanation: "Feuer ist im Wald gefährlich und verboten."
                },
                {
                    id: "wnk3l3_t5", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Eichel → Maus → ? Wer frisst die Maus?", answers: ["Fuchs", "Reh", "Eichel", "Hase"], correct: 0,
                    explanation: "Der Fuchs."
                },
                {
                    id: "wnk3l3_t6", category: "kurs_wn_k3_l3", area: "schule", grade: 3,
                    subject: "sachunterricht", topic: "wald_natur", difficulty: "mittel", points: 10,
                    question: "Was ist ein Wildschwein?", answers: ["ein Allesfresser", "ein Fleischfresser", "ein Insekt", "ein Vogel"], correct: 0,
                    explanation: "Es frisst Pflanzen und Tiere."
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
        window.SACHUNTERRICHT_K3_KURSE = extraKurse;
        window.SACHUNTERRICHT_K3_LEKTIONEN = extraLektionen;
    }
})();
