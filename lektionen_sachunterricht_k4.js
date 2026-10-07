// Sachunterricht Klasse 4 - Deutschland/Europa, Geschichte, Koerper/Entwicklung, Radfahrpruefung
// 4 Kurse mit je 3 Lektionen - erzeugt aus /tmp/gs/s4_1..4.js.
// Die Themen (topic) entsprechen genau den Wissensfragen derselben Klasse, damit
// die Kurs-Empfehlung aus dem Wissen-Modus den passenden Kurs findet.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "de_europa_k4", title: "Deutschland und Europa", icon: "🌍", grade: 4, subject: "sachunterricht", beschreibung: "Bundesländer und Hauptstädte, Flüsse, Gebirge und Meere, Nachbarländer und die EU." },
        { id: "geschichte_k4", title: "Reise in die Vergangenheit", icon: "🏺", grade: 4, subject: "sachunterricht", beschreibung: "Steinzeit, Römer in Germanien, Ritter und Burgen im Mittelalter." },
        { id: "entwicklung_k4", title: "Körper und Entwicklung", icon: "💓", grade: 4, subject: "sachunterricht", beschreibung: "Herz und Blutkreislauf, Atmung und Verdauung, groß werden in der Pubertät." },
        { id: "radfahren_k4", title: "Fit für die Radfahrprüfung", icon: "🚲", grade: 4, subject: "sachunterricht", beschreibung: "Das verkehrssichere Fahrrad, Vorfahrt und Verkehrszeichen, sicher abbiegen." }
    ];
    const extraLektionen = [
    {
        id: "de_k4_l1", kurs: "de_europa_k4", order: 1, icon: "🏙️",
        title: "Bundesländer und Hauptstädte", kurz: "16 Länder, 3 Stadtstaaten",
        erklaerung: {
            intro: "Deutschland hat <b>16 Bundesländer</b>. Drei davon sind <b>Stadtstaaten</b>: Berlin, Hamburg und Bremen. Jedes Land hat eine <b>Landeshauptstadt</b>, zum Beispiel Nordrhein-Westfalen – Düsseldorf, Bayern – München, Hessen – Wiesbaden. Das größte Bundesland ist <b>Bayern</b>, die meisten Menschen leben in <b>Nordrhein-Westfalen</b>.",
            beispiele: ["Niedersachsen – Hannover",
                "Sachsen – Dresden",
                "Schleswig-Holstein – Kiel"],
            merksatz: "16 Länder, 3 Stadtstaaten: Berlin, Hamburg, Bremen."
        },
        uebung: {
            leicht: [
                {
                    id: "dek4l1_l1", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "leicht", points: 10,
                    question: "Welche Stadt ist ein Stadtstaat?", answers: ["Hamburg", "München", "Köln", "Dresden"], correct: 0,
                    explanation: "Hamburg ist Stadt und Bundesland zugleich."
                },
                {
                    id: "dek4l1_l2", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "leicht", points: 10,
                    question: "Wie heißt die Hauptstadt von Sachsen?", answers: ["Dresden", "Leipzig", "Chemnitz", "Erfurt"], correct: 0,
                    explanation: "Dresden."
                },
                {
                    id: "dek4l1_l3", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "leicht", points: 10,
                    question: "Welches Bundesland ist das größte?", answers: ["Bayern", "Saarland", "Hessen", "Bremen"], correct: 0,
                    explanation: "Bayern ist das größte."
                },
                {
                    id: "dek4l1_l4", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "leicht", points: 10,
                    question: "Wie heißt die Hauptstadt von Niedersachsen?", answers: ["Hannover", "Bremen", "Oldenburg", "Braunschweig"], correct: 0,
                    explanation: "Hannover."
                }
            ],
            mittel: [
                {
                    id: "dek4l1_m1", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welche Stadt ist Hessens Landeshauptstadt?", answers: ["Wiesbaden", "Frankfurt", "Kassel", "Darmstadt"], correct: 0,
                    explanation: "Wiesbaden – nicht Frankfurt!"
                },
                {
                    id: "dek4l1_m2", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Hauptstadt von Schleswig-Holstein?", answers: ["Kiel", "Lübeck", "Flensburg", "Husum"], correct: 0,
                    explanation: "Kiel."
                },
                {
                    id: "dek4l1_m3", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "In welchem Bundesland leben die meisten Menschen?", answers: ["Nordrhein-Westfalen", "Bayern", "Baden-Württemberg", "Niedersachsen"], correct: 0,
                    explanation: "In Nordrhein-Westfalen."
                },
                {
                    id: "dek4l1_m4", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Wie viele Stadtstaaten gibt es?", answers: ["3", "1", "2", "5"], correct: 0,
                    explanation: "Berlin, Hamburg und Bremen."
                }
            ],
            schwer: [
                {
                    id: "dek4l1_s1", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "schwer", points: 10,
                    question: "Wie heißt die Hauptstadt von Rheinland-Pfalz?", answers: ["Mainz", "Koblenz", "Trier", "Kaiserslautern"], correct: 0,
                    explanation: "Mainz."
                },
                {
                    id: "dek4l1_s2", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "schwer", points: 10,
                    question: "Welche Stadt ist Thüringens Landeshauptstadt?", answers: ["Erfurt", "Weimar", "Jena", "Gera"], correct: 0,
                    explanation: "Erfurt."
                },
                {
                    id: "dek4l1_s3", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "schwer", points: 10,
                    question: "Wie heißt die Hauptstadt von Sachsen-Anhalt?", answers: ["Magdeburg", "Halle (Saale)", "Dessau", "Leipzig"], correct: 0,
                    explanation: "Magdeburg."
                },
                {
                    id: "dek4l1_s4", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "schwer", points: 10,
                    question: "Welches ist das kleinste Flächenland?", answers: ["Saarland", "Bremen", "Hamburg", "Thüringen"], correct: 0,
                    explanation: "Bremen, Hamburg und Berlin sind Stadtstaaten – das kleinste Flächenland ist das Saarland."
                }
            ]
        },
        test: [
                {
                    id: "dek4l1_t1", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welche Stadt ist die Landeshauptstadt von Baden-Württemberg?", answers: ["Stuttgart", "Karlsruhe", "Freiburg", "Mannheim"], correct: 0,
                    explanation: "Stuttgart."
                },
                {
                    id: "dek4l1_t2", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Hauptstadt von Brandenburg?", answers: ["Potsdam", "Cottbus", "Berlin", "Frankfurt (Oder)"], correct: 0,
                    explanation: "Potsdam."
                },
                {
                    id: "dek4l1_t3", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welches Bundesland liegt ganz im Norden?", answers: ["Schleswig-Holstein", "Baden-Württemberg", "Rheinland-Pfalz", "Saarland"], correct: 0,
                    explanation: "Schleswig-Holstein grenzt an Dänemark."
                },
                {
                    id: "dek4l1_t4", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welche Stadt ist die Landeshauptstadt von Mecklenburg-Vorpommern?", answers: ["Schwerin", "Rostock", "Stralsund", "Greifswald"], correct: 0,
                    explanation: "Schwerin."
                },
                {
                    id: "dek4l1_t5", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Hauptstadt des Saarlandes?", answers: ["Saarbrücken", "Saarlouis", "Homburg", "Neunkirchen"], correct: 0,
                    explanation: "Saarbrücken."
                },
                {
                    id: "dek4l1_t6", category: "kurs_de_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welches Bundesland ist auch eine Stadt?", answers: ["Bremen", "Bayern", "Sachsen", "Hessen"], correct: 0,
                    explanation: "Bremen ist ein Stadtstaat."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "de_k4_l2", kurs: "de_europa_k4", order: 2, icon: "🏞️",
        title: "Flüsse, Gebirge, Meere", kurz: "Vom Tiefland bis zu den Alpen",
        erklaerung: {
            intro: "Im Norden grenzt Deutschland an <b>Nordsee</b> und <b>Ostsee</b>. Von Norden nach Süden folgen: <b>Norddeutsches Tiefland</b>, <b>Mittelgebirge</b> (zum Beispiel Harz und Schwarzwald), <b>Alpenvorland</b> und <b>Alpen</b> mit der Zugspitze (2962 m). Große Flüsse sind <b>Rhein, Elbe, Donau, Weser</b> und <b>Main</b>.",
            beispiele: ["Hamburg liegt an der Elbe.",
                "Köln liegt am Rhein.",
                "Die Donau fließt ins Schwarze Meer."],
            merksatz: "Im Norden flach, im Süden hoch: Tiefland – Mittelgebirge – Alpen."
        },
        uebung: {
            leicht: [
                {
                    id: "dek4l2_l1", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "leicht", points: 10,
                    question: "An welchen zwei Meeren liegt Deutschland?", answers: ["Nordsee und Ostsee", "Mittelmeer und Nordsee", "Ostsee und Atlantik", "Schwarzes Meer und Ostsee"], correct: 0,
                    explanation: "Nordsee und Ostsee."
                },
                {
                    id: "dek4l2_l2", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "leicht", points: 10,
                    question: "Wo ist Deutschland eher flach?", answers: ["im Norden", "im Süden", "in den Alpen", "im Schwarzwald"], correct: 0,
                    explanation: "Im Norden liegt das Tiefland."
                },
                {
                    id: "dek4l2_l3", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "leicht", points: 10,
                    question: "An welchem Fluss liegt Hamburg?", answers: ["Elbe", "Rhein", "Donau", "Main"], correct: 0,
                    explanation: "An der Elbe."
                },
                {
                    id: "dek4l2_l4", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "leicht", points: 10,
                    question: "Wie heißt das höchste Gebirge Deutschlands?", answers: ["die Alpen", "der Harz", "die Eifel", "der Taunus"], correct: 0,
                    explanation: "Die Alpen."
                }
            ],
            mittel: [
                {
                    id: "dek4l2_m1", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "An welchem Fluss liegt Frankfurt?", answers: ["Main", "Elbe", "Weser", "Mosel"], correct: 0,
                    explanation: "Frankfurt am Main."
                },
                {
                    id: "dek4l2_m2", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welcher Fluss mündet ins Schwarze Meer?", answers: ["Donau", "Rhein", "Elbe", "Weser"], correct: 0,
                    explanation: "Die Donau."
                },
                {
                    id: "dek4l2_m3", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Was ist der Harz?", answers: ["ein Mittelgebirge", "ein großer Fluss", "ein Binnenmeer", "eine Nordseeinsel"], correct: 0,
                    explanation: "Ein Mittelgebirge mit dem Brocken."
                },
                {
                    id: "dek4l2_m4", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welcher See liegt an der Grenze zu Österreich und der Schweiz?", answers: ["Bodensee", "Chiemsee", "Müritz", "Steinhuder Meer"], correct: 0,
                    explanation: "Der Bodensee."
                }
            ],
            schwer: [
                {
                    id: "dek4l2_s1", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "schwer", points: 10,
                    question: "In welchem Mittelgebirge liegt der Feldberg?", answers: ["Schwarzwald", "Bayerischer Wald", "Erzgebirge", "Thüringer Wald"], correct: 0,
                    explanation: "Im Schwarzwald."
                },
                {
                    id: "dek4l2_s2", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "schwer", points: 10,
                    question: "In welche Richtung fließt der Rhein durch Deutschland?", answers: ["nach Norden", "nach Süden", "nach Osten", "im großen Kreis"], correct: 0,
                    explanation: "Er fließt nach Norden zur Nordsee."
                },
                {
                    id: "dek4l2_s3", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "schwer", points: 10,
                    question: "Wie heißt der höchste Berg im Harz?", answers: ["Brocken", "Feldberg", "Zugspitze", "Watzmann"], correct: 0,
                    explanation: "Der Brocken."
                },
                {
                    id: "dek4l2_s4", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "schwer", points: 10,
                    question: "In welches Meer mündet der Rhein?", answers: ["Nordsee", "Ostsee", "Mittelmeer", "Schwarzes Meer"], correct: 0,
                    explanation: "In die Nordsee."
                }
            ]
        },
        test: [
                {
                    id: "dek4l2_t1", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "An welchem Fluss liegt Köln?", answers: ["Rhein", "Elbe", "Main", "Spree"], correct: 0,
                    explanation: "Am Rhein."
                },
                {
                    id: "dek4l2_t2", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welche Landschaft liegt ganz im Süden?", answers: ["Alpen", "Tiefland", "Heide", "Küste"], correct: 0,
                    explanation: "Die Alpen."
                },
                {
                    id: "dek4l2_t3", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "An welchem Fluss liegt Berlin?", answers: ["Spree", "Elbe", "Rhein", "Donau"], correct: 0,
                    explanation: "An der Spree."
                },
                {
                    id: "dek4l2_t4", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Wie hoch ist die Zugspitze ungefähr?", answers: ["knapp 3000 m", "etwa 1000 m", "etwa 500 m", "deutlich über 8000 m"], correct: 0,
                    explanation: "2962 m."
                },
                {
                    id: "dek4l2_t5", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welches Meer liegt im Osten von Schleswig-Holstein?", answers: ["Ostsee", "Nordsee", "Mittelmeer", "Atlantik"], correct: 0,
                    explanation: "Die Ostsee."
                },
                {
                    id: "dek4l2_t6", category: "kurs_de_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welcher Fluss fließt durch Bremen?", answers: ["Weser", "Elbe", "Rhein", "Main"], correct: 0,
                    explanation: "Die Weser."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "de_k4_l3", kurs: "de_europa_k4", order: 3, icon: "⭐",
        title: "Nachbarn und EU", kurz: "9 Nachbarländer, 12 Sterne",
        erklaerung: {
            intro: "Deutschland hat <b>9 Nachbarländer</b>: Dänemark, Polen, Tschechien, Österreich, die Schweiz, Frankreich, Luxemburg, Belgien und die Niederlande. Deutschland gehört zur <b>Europäischen Union (EU)</b>. Viele EU-Länder zahlen mit dem <b>Euro</b>. Die EU-Flagge hat <b>12 goldene Sterne</b> auf blauem Grund – sie stehen für Einheit, nicht für die Zahl der Länder.",
            beispiele: ["Frankreich – Paris",
                "Österreich – Wien",
                "Polen – Warschau"],
            merksatz: "9 Nachbarn, 12 Sterne, ein Euro."
        },
        uebung: {
            leicht: [
                {
                    id: "dek4l3_l1", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "leicht", points: 10,
                    question: "Wie viele Nachbarländer hat Deutschland?", answers: ["9", "5", "12", "3"], correct: 0,
                    explanation: "Neun Nachbarländer."
                },
                {
                    id: "dek4l3_l2", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "leicht", points: 10,
                    question: "Mit welchem Geld zahlt man in Deutschland?", answers: ["Euro", "Dollar", "Pfund", "Franken"], correct: 0,
                    explanation: "Mit dem Euro."
                },
                {
                    id: "dek4l3_l3", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "leicht", points: 10,
                    question: "Wie heißt die Hauptstadt von Österreich?", answers: ["Wien", "Salzburg", "Graz", "Innsbruck"], correct: 0,
                    explanation: "Wien."
                },
                {
                    id: "dek4l3_l4", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "leicht", points: 10,
                    question: "Wie viele Sterne hat die EU-Flagge?", answers: ["12", "27", "10", "50"], correct: 0,
                    explanation: "Zwölf Sterne."
                }
            ],
            mittel: [
                {
                    id: "dek4l3_m1", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welches Land ist ein Nachbar Deutschlands?", answers: ["Polen", "Spanien", "Italien", "Schweden"], correct: 0,
                    explanation: "Polen grenzt im Osten an Deutschland."
                },
                {
                    id: "dek4l3_m2", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welches Nachbarland gehört NICHT zur EU?", answers: ["die Schweiz", "Frankreich", "die Niederlande", "Österreich"], correct: 0,
                    explanation: "Die Schweiz ist kein EU-Mitglied."
                },
                {
                    id: "dek4l3_m3", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Hauptstadt von Polen?", answers: ["Warschau", "Krakau", "Kattowitz", "Breslau"], correct: 0,
                    explanation: "Warschau."
                },
                {
                    id: "dek4l3_m4", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welches Land liegt im Norden von Deutschland?", answers: ["Dänemark", "Österreich", "Schweiz", "Frankreich"], correct: 0,
                    explanation: "Dänemark."
                }
            ],
            schwer: [
                {
                    id: "dek4l3_s1", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "schwer", points: 10,
                    question: "Wofür stehen die 12 Sterne der EU-Flagge?", answers: ["für Einheit", "für 12 Länder", "für 12 Monate", "für 12 Städte"], correct: 0,
                    explanation: "Sie stehen für Einheit und Vollkommenheit."
                },
                {
                    id: "dek4l3_s2", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "schwer", points: 10,
                    question: "In welcher Stadt sitzen viele EU-Behörden?", answers: ["Brüssel", "Berlin", "Paris", "Madrid"], correct: 0,
                    explanation: "In Brüssel."
                },
                {
                    id: "dek4l3_s3", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "schwer", points: 10,
                    question: "Welches Nachbarland ist am kleinsten?", answers: ["Luxemburg", "Belgien", "Dänemark", "die Niederlande"], correct: 0,
                    explanation: "Luxemburg."
                },
                {
                    id: "dek4l3_s4", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "schwer", points: 10,
                    question: "Wie heißt die Hauptstadt von Tschechien?", answers: ["Prag", "Brünn", "Pilsen", "Wien"], correct: 0,
                    explanation: "Prag."
                }
            ]
        },
        test: [
                {
                    id: "dek4l3_t1", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welches Land grenzt im Süden an Deutschland?", answers: ["Österreich", "Dänemark", "Niederlande", "Polen"], correct: 0,
                    explanation: "Österreich (und die Schweiz)."
                },
                {
                    id: "dek4l3_t2", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Hauptstadt von Italien?", answers: ["Rom", "Mailand", "Venedig", "Neapel"], correct: 0,
                    explanation: "Rom."
                },
                {
                    id: "dek4l3_t3", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Hauptstadt der Niederlande?", answers: ["Amsterdam", "Rotterdam", "Eindhoven", "Utrecht"], correct: 0,
                    explanation: "Amsterdam."
                },
                {
                    id: "dek4l3_t4", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Wie sieht die EU-Flagge aus?", answers: ["blau mit gelben Sternen", "rot mit weißem Kreuz", "rot mit weißem Halbmond", "grün mit Sternen"], correct: 0,
                    explanation: "Blau mit einem Kreis aus gelben Sternen."
                },
                {
                    id: "dek4l3_t5", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welches Land ist KEIN Nachbar Deutschlands?", answers: ["Italien", "Belgien", "Luxemburg", "Tschechien"], correct: 0,
                    explanation: "Italien grenzt nicht an Deutschland."
                },
                {
                    id: "dek4l3_t6", category: "kurs_de_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "deutschland_europa", difficulty: "mittel", points: 10,
                    question: "Welche Währung haben die meisten EU-Länder?", answers: ["Euro", "Dollar", "Pfund", "Yen"], correct: 0,
                    explanation: "Den Euro."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "gk_k4_l1", kurs: "geschichte_k4", order: 1, icon: "🔥",
        title: "Die Steinzeit", kurz: "Jäger, Sammler, erste Bauern",
        erklaerung: {
            intro: "In der <b>Altsteinzeit</b> lebten die Menschen als <b>Jäger und Sammler</b>. Sie zogen umher, nutzten Werkzeuge aus Stein, Knochen und Holz und beherrschten das <b>Feuer</b>. In Höhlen malten sie Tiere an die Wände. In der <b>Jungsteinzeit</b> wurden sie <b>sesshaft</b>: Sie bauten Häuser, legten Felder an, hielten Tiere und töpferten.",
            beispiele: ["Faustkeil – Werkzeug aus Stein",
                "Höhlenmalerei – Bilder von Tieren",
                "Jungsteinzeit – erste Dörfer"],
            merksatz: "Altsteinzeit: jagen und sammeln. Jungsteinzeit: Ackerbau und Viehzucht."
        },
        uebung: {
            leicht: [
                {
                    id: "gkk4l1_l1", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "leicht", points: 10,
                    question: "Wie lebten die Menschen in der Altsteinzeit?", answers: ["als Jäger und Sammler", "als Bauern im Dorf", "in großen Städten", "als Ritter auf Burgen"], correct: 0,
                    explanation: "Sie jagten und sammelten."
                },
                {
                    id: "gkk4l1_l2", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "leicht", points: 10,
                    question: "Woraus waren Werkzeuge in der Steinzeit?", answers: ["aus Stein und Knochen", "aus Plastik und Glas", "aus Stahl und Eisen", "aus Gold und Silber"], correct: 0,
                    explanation: "Aus Stein, Knochen und Holz."
                },
                {
                    id: "gkk4l1_l3", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "leicht", points: 10,
                    question: "Was malten Steinzeitmenschen an Höhlenwände?", answers: ["Tiere", "Autos", "Häuser", "Buchstaben"], correct: 0,
                    explanation: "Vor allem Tiere."
                },
                {
                    id: "gkk4l1_l4", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "leicht", points: 10,
                    question: "Was lernten die Menschen schon früh zu nutzen?", answers: ["das Feuer", "den Strom", "das Telefon", "das Auto"], correct: 0,
                    explanation: "Das Feuer."
                }
            ],
            mittel: [
                {
                    id: "gkk4l1_m1", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'sesshaft werden'?", answers: ["an einem Ort bleiben", "immer umherziehen", "auf Bäumen wohnen", "schwimmen lernen"], correct: 0,
                    explanation: "Man bleibt an einem Ort wohnen."
                },
                {
                    id: "gkk4l1_m2", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Wann begannen die Menschen mit Ackerbau?", answers: ["in der Jungsteinzeit", "in der Altsteinzeit", "im Mittelalter", "in der Römerzeit"], correct: 0,
                    explanation: "In der Jungsteinzeit."
                },
                {
                    id: "gkk4l1_m3", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Was ist ein Faustkeil?", answers: ["ein Steinwerkzeug", "ein Musikinstrument", "eine Waffe aus Eisen", "ein Spielzeug"], correct: 0,
                    explanation: "Ein Werkzeug aus Stein."
                },
                {
                    id: "gkk4l1_m4", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Welche Tiere jagten Menschen in der Eiszeit?", answers: ["Mammuts", "Dinosaurier", "Elefanten im Zoo", "Pinguine"], correct: 0,
                    explanation: "Mammuts – Dinosaurier gab es da längst nicht mehr."
                }
            ],
            schwer: [
                {
                    id: "gkk4l1_s1", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "schwer", points: 10,
                    question: "Was erfanden die Menschen in der Jungsteinzeit?", answers: ["Töpferei", "Buchdruck", "Dampfmaschine", "Telefon"], correct: 0,
                    explanation: "Sie töpferten Gefäße aus Ton."
                },
                {
                    id: "gkk4l1_s2", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "schwer", points: 10,
                    question: "Warum zogen die Menschen der Altsteinzeit umher?", answers: ["Sie folgten den Tieren.", "Sie hatten Langeweile.", "Sie suchten Schulen.", "Sie wollten Urlaub."], correct: 0,
                    explanation: "Sie folgten den Tierherden."
                },
                {
                    id: "gkk4l1_s3", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "schwer", points: 10,
                    question: "Welche Tiere hielten Menschen in der Jungsteinzeit?", answers: ["Schafe und Ziegen", "Löwen und Tiger", "Mammuts und Bären", "Dinosaurier"], correct: 0,
                    explanation: "Schafe, Ziegen, Rinder, Schweine."
                },
                {
                    id: "gkk4l1_s4", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "schwer", points: 10,
                    question: "Wer war Ötzi?", answers: ["ein Mensch der Kupferzeit", "ein römischer Soldat", "ein Ritter aus Tirol", "ein ägyptischer Pharao"], correct: 0,
                    explanation: "Ein Mann, der vor über 5000 Jahren in den Alpen starb."
                }
            ]
        },
        test: [
                {
                    id: "gkk4l1_t1", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Was taten Sammler?", answers: ["Beeren und Pilze suchen", "große Häuser bauen", "in Kutschen fahren", "Bücher abschreiben"], correct: 0,
                    explanation: "Sie sammelten Früchte, Beeren und Pilze."
                },
                {
                    id: "gkk4l1_t2", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Was gab es in der Jungsteinzeit zum ersten Mal?", answers: ["Dörfer", "Burgen", "Kirchen", "Fabriken"], correct: 0,
                    explanation: "Die ersten Dörfer."
                },
                {
                    id: "gkk4l1_t3", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Was nutzten die Menschen gegen Kälte?", answers: ["Feuer und Felle", "Heizkörper", "elektrische Heizdecken", "Daunenjacken"], correct: 0,
                    explanation: "Feuer und Tierfelle."
                },
                {
                    id: "gkk4l1_t4", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Welche Zeit kam zuerst?", answers: ["Altsteinzeit", "Jungsteinzeit", "Römerzeit", "Mittelalter"], correct: 0,
                    explanation: "Die Altsteinzeit."
                },
                {
                    id: "gkk4l1_t5", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Womit machten Steinzeitmenschen Feuer?", answers: ["mit Feuersteinen", "mit Streichhölzern", "mit einem Feuerzeug", "mit einem Toaster"], correct: 0,
                    explanation: "Man schlug Feuerstein gegen Schwefelkies (Pyrit). Die Funken entzündeten den Zunder."
                },
                {
                    id: "gkk4l1_t6", category: "kurs_gk_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Was ist eine Höhlenmalerei?", answers: ["ein Bild an einer Felswand", "ein Ölgemälde", "ein altes Foto", "eine Zeichnung im Heft"], correct: 0,
                    explanation: "Ein Bild an einer Höhlenwand."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "gk_k4_l2", kurs: "geschichte_k4", order: 2, icon: "⚔️",
        title: "Die Römer", kurz: "Limes, Latein, Thermen",
        erklaerung: {
            intro: "Vor etwa 2000 Jahren eroberten die <b>Römer</b> Teile des heutigen Deutschlands. Zum Schutz bauten sie den <b>Limes</b>, einen langen Grenzwall mit Wachtürmen. Römische Städte waren zum Beispiel <b>Köln</b>, <b>Trier</b> und <b>Mainz</b>. Die Römer brachten Straßen, Thermen (Bäder), Wasserleitungen (<b>Aquädukte</b>) und den Weinbau. Sie sprachen <b>Latein</b>.",
            beispiele: ["Colonia – Köln",
                "Limes – Grenzwall",
                "Therme – römisches Bad"],
            merksatz: "Römer: Limes, Latein, Straßen und Thermen."
        },
        uebung: {
            leicht: [
                {
                    id: "gkk4l2_l1", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "leicht", points: 10,
                    question: "Welche Sprache sprachen die Römer?", answers: ["Latein", "Griechisch", "Deutsch", "Englisch"], correct: 0,
                    explanation: "Latein."
                },
                {
                    id: "gkk4l2_l2", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "leicht", points: 10,
                    question: "Was war der Limes?", answers: ["ein Grenzwall", "ein Fluss", "ein römischer Kaiser", "eine Münze"], correct: 0,
                    explanation: "Ein Grenzwall mit Wachtürmen."
                },
                {
                    id: "gkk4l2_l3", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "leicht", points: 10,
                    question: "Welche Stadt gründeten die Römer?", answers: ["Köln", "Berlin", "Hamburg", "Hannover"], correct: 0,
                    explanation: "Köln hieß Colonia."
                },
                {
                    id: "gkk4l2_l4", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "leicht", points: 10,
                    question: "Was ist eine Therme?", answers: ["ein römisches Bad", "ein Tempel für Götter", "eine Rüstung", "ein Schiff"], correct: 0,
                    explanation: "Ein Badehaus."
                }
            ],
            mittel: [
                {
                    id: "gkk4l2_m1", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Vor wie vielen Jahren lebten die Römer bei uns etwa?", answers: ["2000", "200", "20 000", "50"], correct: 0,
                    explanation: "Vor etwa 2000 Jahren."
                },
                {
                    id: "gkk4l2_m2", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Wie hieß Köln bei den Römern?", answers: ["Colonia", "Roma", "Moguntiacum", "Augusta"], correct: 0,
                    explanation: "Colonia – daher der Name Köln."
                },
                {
                    id: "gkk4l2_m3", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Wofür bauten die Römer den Limes?", answers: ["zum Schutz der Grenze", "als Rennbahn", "als Wasserleitung", "für Theater"], correct: 0,
                    explanation: "Zum Schutz gegen die Germanen."
                },
                {
                    id: "gkk4l2_m4", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Wer herrschte über das Römische Reich?", answers: ["der Kaiser", "der Pharao", "der Bürgermeister", "der Häuptling"], correct: 0,
                    explanation: "Der Kaiser."
                }
            ],
            schwer: [
                {
                    id: "gkk4l2_s1", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "schwer", points: 10,
                    question: "In welchem Jahr war die Varusschlacht?", answers: ["9 n. Chr.", "1000 n. Chr.", "500 v. Chr.", "1945"], correct: 0,
                    explanation: "9 nach Christus."
                },
                {
                    id: "gkk4l2_s2", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "schwer", points: 10,
                    question: "Welche Zahl ist das römische 'X'?", answers: ["10", "5", "50", "100"], correct: 0,
                    explanation: "X = 10."
                },
                {
                    id: "gkk4l2_s3", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "schwer", points: 10,
                    question: "Was brachten die Römer zu uns?", answers: ["den Weinbau", "Kartoffeln", "das Fernsehen", "das Fahrrad"], correct: 0,
                    explanation: "Den Weinbau, Straßen und Steinhäuser."
                },
                {
                    id: "gkk4l2_s4", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "schwer", points: 10,
                    question: "Wie heißt eine römische Wasserleitung?", answers: ["Aquädukt", "Amphitheater", "Limes", "Forum"], correct: 0,
                    explanation: "Aquädukt."
                }
            ]
        },
        test: [
                {
                    id: "gkk4l2_t1", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Was ist das römische Zahlzeichen für 5?", answers: ["V", "X", "L", "I"], correct: 0,
                    explanation: "V = 5."
                },
                {
                    id: "gkk4l2_t2", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Welche deutsche Stadt war eine Römerstadt?", answers: ["Trier", "Hannover", "Kiel", "Rostock"], correct: 0,
                    explanation: "Trier."
                },
                {
                    id: "gkk4l2_t3", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Was war ein Legionär?", answers: ["ein römischer Soldat", "ein römischer Händler", "ein römischer Bauer", "ein römischer König"], correct: 0,
                    explanation: "Ein Soldat."
                },
                {
                    id: "gkk4l2_t4", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Welche Sprache stammt vom Latein ab?", answers: ["Italienisch", "Polnisch", "Indonesisch", "Türkisch"], correct: 0,
                    explanation: "Italienisch."
                },
                {
                    id: "gkk4l2_t5", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Was war ein Forum?", answers: ["ein Marktplatz", "eine Burg", "ein Schiff", "ein Helm"], correct: 0,
                    explanation: "Ein Markt- und Versammlungsplatz."
                },
                {
                    id: "gkk4l2_t6", category: "kurs_gk_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Wo verlief der Limes?", answers: ["vom Rhein bis zur Donau", "an der ganzen Nordseeküste", "mitten in den Alpen", "rund um die Stadt Berlin"], correct: 0,
                    explanation: "Vom Rhein bis zur Donau durch Süd- und Westdeutschland."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "gk_k4_l3", kurs: "geschichte_k4", order: 3, icon: "🏰",
        title: "Ritter und Burgen", kurz: "Das Mittelalter",
        erklaerung: {
            intro: "Das <b>Mittelalter</b> dauerte etwa von 500 bis 1500. <b>Ritter</b> lebten auf <b>Burgen</b>. Ein Junge wurde erst Page, dann <b>Knappe</b> und schließlich durch den <b>Ritterschlag</b> Ritter. Burgen hatten einen <b>Bergfried</b> (Hauptturm), dicke Mauern, einen Graben und eine Zugbrücke. Um 1450 erfand <b>Johannes Gutenberg</b> den Buchdruck mit beweglichen Buchstaben.",
            beispiele: ["Bergfried – höchster Turm",
                "Turnier – Wettkampf der Ritter",
                "Gutenberg – Buchdruck"],
            merksatz: "Page – Knappe – Ritter. Bergfried, Graben, Zugbrücke."
        },
        uebung: {
            leicht: [
                {
                    id: "gkk4l3_l1", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "leicht", points: 10,
                    question: "Wo lebten Ritter?", answers: ["auf Burgen", "in Hochhäusern", "in Zelten", "auf Schiffen"], correct: 0,
                    explanation: "Auf Burgen."
                },
                {
                    id: "gkk4l3_l2", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "leicht", points: 10,
                    question: "Was trug ein Ritter zum Schutz?", answers: ["eine Rüstung", "einen Anzug", "eine Badehose", "einen Schlafanzug"], correct: 0,
                    explanation: "Eine Rüstung."
                },
                {
                    id: "gkk4l3_l3", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "leicht", points: 10,
                    question: "Wie heißt der höchste Turm einer Burg?", answers: ["Bergfried", "Leuchtturm", "Kirchturm", "Fernsehturm"], correct: 0,
                    explanation: "Der Bergfried."
                },
                {
                    id: "gkk4l3_l4", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "leicht", points: 10,
                    question: "Was führte über den Burggraben?", answers: ["eine Zugbrücke", "eine Autobahn", "eine Seilbahn", "eine Rolltreppe"], correct: 0,
                    explanation: "Eine Zugbrücke."
                }
            ],
            mittel: [
                {
                    id: "gkk4l3_m1", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Wie nennt man einen Ritter in Ausbildung?", answers: ["Knappe", "Mönch", "Bauer", "Händler"], correct: 0,
                    explanation: "Knappe."
                },
                {
                    id: "gkk4l3_m2", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Wann war das Mittelalter etwa?", answers: ["500 bis 1500", "100 bis 200", "1800 bis 1900", "2000 bis heute"], correct: 0,
                    explanation: "Etwa 500 bis 1500."
                },
                {
                    id: "gkk4l3_m3", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Was war ein Turnier?", answers: ["ein Ritterkampf", "ein Kochfest", "eine Schulprüfung", "ein Tanzabend"], correct: 0,
                    explanation: "Ein Wettkampf der Ritter."
                },
                {
                    id: "gkk4l3_m4", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Wer erfand um 1450 den Buchdruck?", answers: ["Johannes Gutenberg", "Albert Einstein", "Martin Luther", "Karl der Große"], correct: 0,
                    explanation: "Johannes Gutenberg in Mainz."
                }
            ],
            schwer: [
                {
                    id: "gkk4l3_s1", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "schwer", points: 10,
                    question: "Wie wurde ein Knappe zum Ritter?", answers: ["durch den Ritterschlag", "durch eine Leseprüfung", "durch viel Geld", "durch eine Hochzeit"], correct: 0,
                    explanation: "Durch den Ritterschlag."
                },
                {
                    id: "gkk4l3_s2", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "schwer", points: 10,
                    question: "Woraus bestand ein Kettenhemd?", answers: ["aus Eisenringen", "aus dicker Wolle", "aus festem Leder", "aus Holzplatten"], correct: 0,
                    explanation: "Aus vielen kleinen Eisenringen."
                },
                {
                    id: "gkk4l3_s3", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "schwer", points: 10,
                    question: "Was war ein Burgfräulein?", answers: ["eine junge Adlige", "eine Köchin der Burg", "eine Ritterin im Kampf", "eine Marktfrau"], correct: 0,
                    explanation: "Die unverheiratete Tochter einer Adelsfamilie."
                },
                {
                    id: "gkk4l3_s4", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "schwer", points: 10,
                    question: "Wozu diente das Wappen auf dem Schild?", answers: ["als Erkennungszeichen", "als Zielscheibe im Kampf", "als Spiegel", "als Glücksbringer"], correct: 0,
                    explanation: "Unter dem Helm erkannte man so den Ritter."
                }
            ]
        },
        test: [
                {
                    id: "gkk4l3_t1", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Wer lebte im Mittelalter auf Burgen?", answers: ["Ritter", "Astronauten", "Piloten", "Römer"], correct: 0,
                    explanation: "Ritter und ihre Familien."
                },
                {
                    id: "gkk4l3_t2", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Was war ein Bergfried?", answers: ["der Hauptturm der Burg", "ein alter Friedhof", "ein Berg mit Wald", "ein tiefer Brunnen"], correct: 0,
                    explanation: "Der höchste Turm."
                },
                {
                    id: "gkk4l3_t3", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Was erfand Gutenberg?", answers: ["den Buchdruck", "das Telefon", "die Dampfmaschine", "die Brille"], correct: 0,
                    explanation: "Den Buchdruck."
                },
                {
                    id: "gkk4l3_t4", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Wie hieß der Wettkampf der Ritter?", answers: ["Turnier", "Olympiade", "Bundesliga", "Marathon"], correct: 0,
                    explanation: "Turnier."
                },
                {
                    id: "gkk4l3_t5", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Wer bestellte im Mittelalter meist die Felder?", answers: ["Bauern", "Ritter", "Könige", "Mönche"], correct: 0,
                    explanation: "Die Bauern."
                },
                {
                    id: "gkk4l3_t6", category: "kurs_gk_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "geschichte_kultur", difficulty: "mittel", points: 10,
                    question: "Was schützte eine Burg?", answers: ["dicke Mauern", "bunte Fenster", "ein Garten", "ein Spielplatz"], correct: 0,
                    explanation: "Dicke Mauern und Gräben."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "ke_k4_l1", kurs: "entwicklung_k4", order: 1, icon: "❤️",
        title: "Herz und Blut", kurz: "Wie das Blut durch den Körper fließt",
        erklaerung: {
            intro: "Das <b>Herz</b> ist ein Muskel, etwa so groß wie deine Faust. Es pumpt das Blut durch den Körper. <b>Arterien</b> führen das Blut vom Herzen weg, <b>Venen</b> zurück zum Herzen. Das Blut bringt <b>Sauerstoff</b> und Nährstoffe zu allen Zellen. <b>Rote Blutkörperchen</b> tragen Sauerstoff, <b>weiße</b> bekämpfen Krankheitserreger, <b>Blutplättchen</b> verschließen Wunden.",
            beispiele: ["Puls – man fühlt das Herz am Handgelenk",
                "Erwachsene haben etwa 5 bis 6 Liter Blut",
                "Blutplättchen – Schorf auf der Wunde"],
            merksatz: "Arterien weg vom Herzen, Venen hin zum Herzen."
        },
        uebung: {
            leicht: [
                {
                    id: "kek4l1_l1", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "leicht", points: 10,
                    question: "Wie groß ist dein Herz etwa?", answers: ["wie deine Faust", "wie ein Fußball", "wie eine Erbse", "wie ein Buch"], correct: 0,
                    explanation: "Etwa so groß wie deine Faust."
                },
                {
                    id: "kek4l1_l2", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "leicht", points: 10,
                    question: "Was pumpt das Herz?", answers: ["Blut", "Luft", "Wasser", "Essen"], correct: 0,
                    explanation: "Das Herz pumpt Blut."
                },
                {
                    id: "kek4l1_l3", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "leicht", points: 10,
                    question: "Wo kann man den Puls gut fühlen?", answers: ["am Handgelenk", "am Ellenbogen", "an den Haaren", "an den Nägeln"], correct: 0,
                    explanation: "Am Handgelenk oder am Hals."
                },
                {
                    id: "kek4l1_l4", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "leicht", points: 10,
                    question: "Was bringt das Blut zu den Zellen?", answers: ["Sauerstoff", "kleine Steine", "Haare", "Farbe"], correct: 0,
                    explanation: "Sauerstoff und Nährstoffe."
                }
            ],
            mittel: [
                {
                    id: "kek4l1_m1", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Wohin führen Arterien das Blut?", answers: ["vom Herzen weg", "zum Herzen hin", "in den Magen", "in die Knochen"], correct: 0,
                    explanation: "Arterien: weg vom Herzen."
                },
                {
                    id: "kek4l1_m2", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Was machen weiße Blutkörperchen?", answers: ["Keime bekämpfen", "Sauerstoff tragen", "Wunden verschließen", "Essen verdauen"], correct: 0,
                    explanation: "Sie wehren Krankheitserreger ab."
                },
                {
                    id: "kek4l1_m3", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Wie viel Blut hat ein Erwachsener etwa?", answers: ["5 bis 6 Liter", "1 Liter", "20 bis 30 Liter", "100 Liter"], correct: 0,
                    explanation: "Etwa 5 bis 6 Liter."
                },
                {
                    id: "kek4l1_m4", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Was ist das Herz?", answers: ["ein Muskel", "ein Knochen", "eine Drüse", "ein Nerv"], correct: 0,
                    explanation: "Ein Hohlmuskel."
                }
            ],
            schwer: [
                {
                    id: "kek4l1_s1", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "schwer", points: 10,
                    question: "Was passiert mit dem Puls beim Rennen?", answers: ["Er wird schneller.", "Er wird langsamer.", "Er stoppt.", "Er bleibt gleich."], correct: 0,
                    explanation: "Die Muskeln brauchen mehr Sauerstoff."
                },
                {
                    id: "kek4l1_s2", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "schwer", points: 10,
                    question: "Was verschließt eine Wunde?", answers: ["Blutplättchen", "rote Blutkörperchen", "Venen", "Muskeln"], correct: 0,
                    explanation: "Blutplättchen sorgen für Gerinnung."
                },
                {
                    id: "kek4l1_s3", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "schwer", points: 10,
                    question: "Aus wie vielen Räumen besteht das Herz?", answers: ["vier Räume", "zwei Räume", "acht Räume", "keinen Raum"], correct: 0,
                    explanation: "Zwei Vorhöfe und zwei Kammern."
                },
                {
                    id: "kek4l1_s4", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "schwer", points: 10,
                    question: "Was ist gut für das Herz?", answers: ["regelmäßig Sport", "viel Rauchen", "wenig bewegen", "viel Fett"], correct: 0,
                    explanation: "Bewegung trainiert den Herzmuskel."
                }
            ]
        },
        test: [
                {
                    id: "kek4l1_t1", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Wohin führen Venen das Blut?", answers: ["zum Herzen hin", "vom Herzen weg", "in die Haare", "in die Zähne"], correct: 0,
                    explanation: "Venen: hin zum Herzen."
                },
                {
                    id: "kek4l1_t2", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Was tragen rote Blutkörperchen?", answers: ["Sauerstoff", "Zucker", "Fett", "Muskelfasern"], correct: 0,
                    explanation: "Sauerstoff."
                },
                {
                    id: "kek4l1_t3", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Wie schlägt das Herz im Schlaf?", answers: ["langsamer", "schneller", "gar nicht", "rückwärts"], correct: 0,
                    explanation: "In Ruhe schlägt es langsamer."
                },
                {
                    id: "kek4l1_t4", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Was ist der Puls?", answers: ["der Herzschlag", "die Atmung", "die Verdauung", "die Temperatur"], correct: 0,
                    explanation: "Man spürt den Herzschlag in den Adern."
                },
                {
                    id: "kek4l1_t5", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Welcher Muskel macht nie Pause?", answers: ["Herz", "Bizeps", "Wade", "Bauchmuskel"], correct: 0,
                    explanation: "Das Herz schlägt Tag und Nacht."
                },
                {
                    id: "kek4l1_t6", category: "kurs_ke_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Was kann man am Handgelenk zählen?", answers: ["die Pulsschläge", "die Knochen", "die Haare", "die Finger"], correct: 0,
                    explanation: "Die Pulsschläge pro Minute."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "ke_k4_l2", kurs: "entwicklung_k4", order: 2, icon: "💨",
        title: "Atmung und Verdauung", kurz: "Lunge, Magen, Darm",
        erklaerung: {
            intro: "Beim <b>Einatmen</b> strömt Luft durch Nase oder Mund in die <b>Luftröhre</b> und in die <b>Lunge</b>. In den <b>Lungenbläschen</b> geht Sauerstoff ins Blut, <b>Kohlenstoffdioxid</b> wird ausgeatmet. Die <b>Verdauung</b> beginnt im Mund: Zähne zerkleinern, Speichel weicht auf. Über die Speiseröhre gelangt das Essen in den <b>Magen</b>, dann in den <b>Dünndarm</b>, wo Nährstoffe ins Blut gehen, und in den <b>Dickdarm</b>.",
            beispiele: ["Einatmen – Sauerstoff rein",
                "Ausatmen – Kohlenstoffdioxid raus",
                "Dünndarm – Nährstoffe ins Blut"],
            merksatz: "Mund – Speiseröhre – Magen – Dünndarm – Dickdarm."
        },
        uebung: {
            leicht: [
                {
                    id: "kek4l2_l1", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "leicht", points: 10,
                    question: "Wohin strömt die Luft beim Einatmen?", answers: ["in die Lunge", "in den Magen", "ins Herz", "in die Leber"], correct: 0,
                    explanation: "In die Lunge."
                },
                {
                    id: "kek4l2_l2", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "leicht", points: 10,
                    question: "Wo beginnt die Verdauung?", answers: ["im Mund", "im Magen", "im Darm", "in der Nase"], correct: 0,
                    explanation: "Schon im Mund."
                },
                {
                    id: "kek4l2_l3", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "leicht", points: 10,
                    question: "Was atmen wir aus?", answers: ["Kohlenstoffdioxid", "nur Sauerstoff", "Wasserstoff", "Feinstaub und Ruß"], correct: 0,
                    explanation: "Kohlenstoffdioxid (und Luft)."
                },
                {
                    id: "kek4l2_l4", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "leicht", points: 10,
                    question: "Wohin kommt das Essen nach dem Schlucken?", answers: ["in die Speiseröhre", "in die Luftröhre", "in die Lunge", "ins Herz"], correct: 0,
                    explanation: "In die Speiseröhre."
                }
            ],
            mittel: [
                {
                    id: "kek4l2_m1", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Wo gelangen Nährstoffe ins Blut?", answers: ["im Dünndarm", "im Mund", "in der Speiseröhre", "in der Nase"], correct: 0,
                    explanation: "Im Dünndarm."
                },
                {
                    id: "kek4l2_m2", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Was macht der Speichel?", answers: ["weicht das Essen auf", "färbt das Essen", "kühlt die Zähne", "macht Durst"], correct: 0,
                    explanation: "Er weicht das Essen auf."
                },
                {
                    id: "kek4l2_m3", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Wie heißen die kleinen Säckchen in der Lunge?", answers: ["Lungenbläschen", "Lungenzähne", "Lungenkügelchen", "Lungenhaare"], correct: 0,
                    explanation: "Lungenbläschen."
                },
                {
                    id: "kek4l2_m4", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Welcher Muskel hilft beim Atmen?", answers: ["Zwerchfell", "Bizeps", "Wadenmuskel", "Herzmuskel"], correct: 0,
                    explanation: "Das Zwerchfell."
                }
            ],
            schwer: [
                {
                    id: "kek4l2_s1", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "schwer", points: 10,
                    question: "Was entzieht der Dickdarm dem Speisebrei?", answers: ["Wasser", "Zucker", "Luft", "Blut"], correct: 0,
                    explanation: "Er entzieht Wasser."
                },
                {
                    id: "kek4l2_s2", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "schwer", points: 10,
                    question: "Was passiert im Magen?", answers: ["Magensaft zersetzt das Essen", "Das Essen wird zu Luft", "Das Essen wird dort gekühlt", "Das Essen wird nur gezählt"], correct: 0,
                    explanation: "Magensaft zersetzt die Nahrung."
                },
                {
                    id: "kek4l2_s3", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "schwer", points: 10,
                    question: "Warum soll man gut kauen?", answers: ["Das erleichtert die Verdauung.", "Damit Zähne wachsen.", "Damit man Durst hat.", "Damit man schneller isst."], correct: 0,
                    explanation: "Gut gekaut ist halb verdaut."
                },
                {
                    id: "kek4l2_s4", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "schwer", points: 10,
                    question: "Warum atmet man beim Sport schneller?", answers: ["Muskeln brauchen Sauerstoff.", "Die Lunge ist zu klein.", "Man hat Hunger.", "Es ist zu laut."], correct: 0,
                    explanation: "Muskeln brauchen mehr Sauerstoff."
                }
            ]
        },
        test: [
                {
                    id: "kek4l2_t1", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Durch welches Rohr gelangt die Luft in die Lunge?", answers: ["Luftröhre", "Speiseröhre", "Darm", "Vene"], correct: 0,
                    explanation: "Die Luftröhre."
                },
                {
                    id: "kek4l2_t2", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Was nimmt das Blut in der Lunge auf?", answers: ["Sauerstoff", "Wasser", "Nährstoffe", "Fett"], correct: 0,
                    explanation: "Sauerstoff."
                },
                {
                    id: "kek4l2_t3", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Welches Organ kommt nach dem Magen?", answers: ["Dünndarm", "Speiseröhre", "Mund", "Lunge"], correct: 0,
                    explanation: "Der Dünndarm."
                },
                {
                    id: "kek4l2_t4", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Was schützt die Lunge?", answers: ["nicht rauchen", "viel Rauch", "Staub einatmen", "Abgase"], correct: 0,
                    explanation: "Nicht rauchen."
                },
                {
                    id: "kek4l2_t5", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Wozu brauchen wir Nahrung?", answers: ["für Energie", "zum Atmen", "zum Sehen", "zum Hören"], correct: 0,
                    explanation: "Für Energie und Wachstum."
                },
                {
                    id: "kek4l2_t6", category: "kurs_ke_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Wie lang ist der Dünndarm etwa?", answers: ["mehrere Meter", "2 Zentimeter", "10 Zentimeter", "100 Meter"], correct: 0,
                    explanation: "Mehrere Meter."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "ke_k4_l3", kurs: "entwicklung_k4", order: 3, icon: "🌱",
        title: "Groß werden", kurz: "Pubertät und Körperpflege",
        erklaerung: {
            intro: "Die <b>Pubertät</b> ist die Zeit, in der aus Kindern Jugendliche werden. Sie beginnt meist zwischen 9 und 14 Jahren – bei jedem anders. <b>Hormone</b> (Botenstoffe) steuern das. Der Körper wächst schnell, Haare wachsen unter den Achseln, man schwitzt mehr. Bei Jungen kommt der <b>Stimmbruch</b>, bei Mädchen wachsen die Brüste und die <b>Periode</b> beginnt. Auch Gefühle verändern sich – das ist normal. Rede mit Menschen, denen du vertraust.",
            beispiele: ["Hormone – Botenstoffe im Körper",
                "Stimmbruch – die Stimme wird tiefer",
                "Duschen und Deo – mehr Schweiß"],
            merksatz: "Jeder Körper hat sein eigenes Tempo – das ist normal."
        },
        uebung: {
            leicht: [
                {
                    id: "kek4l3_l1", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "leicht", points: 10,
                    question: "Was beginnt meist zwischen 9 und 14 Jahren?", answers: ["die Pubertät", "die Rente", "die Kindheit", "das Babyalter"], correct: 0,
                    explanation: "Die Pubertät."
                },
                {
                    id: "kek4l3_l2", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "leicht", points: 10,
                    question: "Warum ist in der Pubertät Duschen besonders wichtig?", answers: ["Man schwitzt mehr.", "Man wird kleiner.", "Die Haare fallen aus.", "Man wird müde."], correct: 0,
                    explanation: "Die Schweißdrüsen arbeiten mehr."
                },
                {
                    id: "kek4l3_l3", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "leicht", points: 10,
                    question: "Was steuert die Veränderungen in der Pubertät?", answers: ["Hormone", "Vitamine", "Zähne", "Muskeln"], correct: 0,
                    explanation: "Hormone."
                },
                {
                    id: "kek4l3_l4", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "leicht", points: 10,
                    question: "Was passiert bei Jungen in der Pubertät?", answers: ["Stimmbruch", "Milchzähne kommen", "die Augen werden blau", "Haarausfall"], correct: 0,
                    explanation: "Die Stimme wird tiefer."
                }
            ],
            mittel: [
                {
                    id: "kek4l3_m1", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Was ist der Stimmbruch?", answers: ["Die Stimme wird tiefer.", "Die Stimme geht kaputt.", "Man kann nicht reden.", "Man singt besser."], correct: 0,
                    explanation: "Der Kehlkopf wächst, die Stimme wird tiefer."
                },
                {
                    id: "kek4l3_m2", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Wann beginnt die Pubertät?", answers: ["bei jedem anders", "bei allen mit 10", "nur im Sommer", "mit 18 Jahren"], correct: 0,
                    explanation: "Jeder hat sein eigenes Tempo."
                },
                {
                    id: "kek4l3_m3", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Was hilft bei fettiger Haut und Pickeln?", answers: ["Gesicht sanft waschen", "Pickel ausdrücken", "gar nicht waschen", "Schokolade essen"], correct: 0,
                    explanation: "Sanft waschen, nicht ausdrücken."
                },
                {
                    id: "kek4l3_m4", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Was hilft bei Gefühlschaos?", answers: ["mit Vertrauten reden", "alles für sich behalten", "nie schlafen", "immer streiten"], correct: 0,
                    explanation: "Reden hilft."
                }
            ],
            schwer: [
                {
                    id: "kek4l3_s1", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "schwer", points: 10,
                    question: "Was sind Hormone?", answers: ["Botenstoffe im Körper", "kleine Knochen", "Vitamine im Essen", "Muskeln im Arm"], correct: 0,
                    explanation: "Botenstoffe, die Vorgänge im Körper steuern."
                },
                {
                    id: "kek4l3_s2", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "schwer", points: 10,
                    question: "Wer kommt meist etwas früher in die Pubertät?", answers: ["Mädchen", "Jungen", "Erwachsene", "Babys"], correct: 0,
                    explanation: "Mädchen im Durchschnitt etwas früher."
                },
                {
                    id: "kek4l3_s3", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "schwer", points: 10,
                    question: "Was wächst in der Pubertät bei allen?", answers: ["Haare unter den Achseln", "Federn auf dem Rücken", "neue Milchzähne im Mund", "Schuppen auf der Haut"], correct: 0,
                    explanation: "Achsel- und Körperhaare."
                },
                {
                    id: "kek4l3_s4", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "schwer", points: 10,
                    question: "Was gehört zur Körperpflege in der Pubertät?", answers: ["täglich waschen und Deo", "nie duschen", "nur Parfüm", "Zähne nicht putzen"], correct: 0,
                    explanation: "Waschen und Deo."
                }
            ]
        },
        test: [
                {
                    id: "kek4l3_t1", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Was ist in der Pubertät normal?", answers: ["sich schnell verändern", "immer gleich bleiben", "aufhören zu wachsen", "kleiner werden"], correct: 0,
                    explanation: "Der Körper verändert sich schnell."
                },
                {
                    id: "kek4l3_t2", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Was passiert bei Mädchen in der Pubertät?", answers: ["Die Periode beginnt.", "Der Bart wächst.", "Die Zähne fallen aus.", "Die Füße schrumpfen."], correct: 0,
                    explanation: "Die Periode beginnt."
                },
                {
                    id: "kek4l3_t3", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Warum schwitzt man in der Pubertät mehr?", answers: ["Schweißdrüsen werden aktiver.", "Weil man mehr Wasser trinkt", "Weil es im Sommer wärmer ist", "Weil man viel mehr rennt"], correct: 0,
                    explanation: "Hormone machen die Schweißdrüsen aktiver."
                },
                {
                    id: "kek4l3_t4", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Mit wem kannst du über Veränderungen reden?", answers: ["mit Eltern oder Lehrkraft", "mit niemandem", "nur mit Fremden im Netz", "mit dem Haustier"], correct: 0,
                    explanation: "Mit Menschen, denen du vertraust."
                },
                {
                    id: "kek4l3_t5", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Was verändert sich bei Jungen an der Stimme?", answers: ["Sie wird tiefer.", "Sie wird höher.", "Sie verschwindet.", "Sie wird leiser."], correct: 0,
                    explanation: "Sie wird tiefer."
                },
                {
                    id: "kek4l3_t6", category: "kurs_ke_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "koerper_entwicklung", difficulty: "mittel", points: 10,
                    question: "Wie nennt man Jugendliche zwischen 13 und 19 Jahren?", answers: ["Teenager", "Senioren", "Babys", "Kleinkinder"], correct: 0,
                    explanation: "Teenager – von thirteen bis nineteen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "rf_k4_l1", kurs: "radfahren_k4", order: 1, icon: "🔧",
        title: "Das verkehrssichere Fahrrad", kurz: "Bremsen, Klingel, Licht, Strahler",
        erklaerung: {
            intro: "Ein <b>verkehrssicheres Fahrrad</b> braucht: zwei unabhängige <b>Bremsen</b>, eine helltönende <b>Klingel</b>, vorne einen weißen <b>Scheinwerfer</b> und einen weißen Rückstrahler, hinten ein rotes <b>Rücklicht</b> und einen roten Rückstrahler, gelbe <b>Pedalrückstrahler</b> und seitlich gelbe Speichenreflektoren oder weiße Reflexstreifen. Ein <b>Helm</b> ist keine Pflicht, schützt aber den Kopf.",
            beispiele: ["vorne: weiß",
                "hinten: rot",
                "Pedale und Speichen: gelb"],
            merksatz: "Bremsen, Klingel, Licht und Strahler – dann darf ich los."
        },
        uebung: {
            leicht: [
                {
                    id: "rfk4l1_l1", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "leicht", points: 10,
                    question: "Wie viele Bremsen schreibt das Gesetz für ein Fahrrad vor?", answers: ["2", "1", "3", "4"], correct: 0,
                    explanation: "Zwei voneinander unabhängige Bremsen."
                },
                {
                    id: "rfk4l1_l2", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "leicht", points: 10,
                    question: "Welche Farbe hat das Licht vorne?", answers: ["weiß", "rot", "grün", "blau"], correct: 0,
                    explanation: "Vorne weiß."
                },
                {
                    id: "rfk4l1_l3", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "leicht", points: 10,
                    question: "Welche Farbe hat das Rücklicht?", answers: ["rot", "weiß", "gelb", "grün"], correct: 0,
                    explanation: "Hinten rot."
                },
                {
                    id: "rfk4l1_l4", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "leicht", points: 10,
                    question: "Wozu dient die Klingel?", answers: ["um zu warnen", "als Schmuck", "zum Bremsen", "zum Lenken"], correct: 0,
                    explanation: "Um andere zu warnen."
                }
            ],
            mittel: [
                {
                    id: "rfk4l1_m1", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Welche Farbe haben die Pedalrückstrahler?", answers: ["gelb", "rot", "blau", "weiß"], correct: 0,
                    explanation: "Gelb."
                },
                {
                    id: "rfk4l1_m2", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was ist seitlich am Fahrrad vorgeschrieben?", answers: ["Speichenreflektoren", "ein Seitenspiegel", "eine laute Hupe", "ein Blinklicht"], correct: 0,
                    explanation: "Gelbe Speichenreflektoren oder weiße Reflexstreifen."
                },
                {
                    id: "rfk4l1_m3", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Ist ein Fahrradhelm Pflicht?", answers: ["Nein, aber er schützt.", "Ja, immer und überall.", "Nur in der Nacht.", "Nur im Winter."], correct: 0,
                    explanation: "Keine Pflicht – aber sehr sinnvoll."
                },
                {
                    id: "rfk4l1_m4", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was prüfst du vor der Fahrt?", answers: ["Bremsen und Licht", "die Farbe", "den Sattelbezug", "die Klingeltonart"], correct: 0,
                    explanation: "Bremsen und Licht."
                }
            ],
            schwer: [
                {
                    id: "rfk4l1_s1", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "schwer", points: 10,
                    question: "Welche Farbe hat der Rückstrahler vorne?", answers: ["weiß", "rot", "gelb", "orange"], correct: 0,
                    explanation: "Vorne weiß."
                },
                {
                    id: "rfk4l1_s2", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "schwer", points: 10,
                    question: "Was gehört hinten an jedes Fahrrad?", answers: ["roter Rückstrahler", "weißer Scheinwerfer", "grünes Licht", "blaue Klingel"], correct: 0,
                    explanation: "Ein roter Rückstrahler und ein rotes Rücklicht."
                },
                {
                    id: "rfk4l1_s3", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "schwer", points: 10,
                    question: "Warum braucht man zwei Bremsen?", answers: ["Falls eine ausfällt.", "Weil es schöner aussieht.", "Damit man schneller fährt.", "Weil es Spaß macht."], correct: 0,
                    explanation: "Wenn eine ausfällt, bremst die andere."
                },
                {
                    id: "rfk4l1_s4", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "schwer", points: 10,
                    question: "Wann muss das Licht an sein?", answers: ["im Dunkeln und bei Nebel", "nur am hellen Mittag", "nur bei Sonnenschein", "nur im Sommer"], correct: 0,
                    explanation: "Bei Dämmerung, Dunkelheit und schlechter Sicht."
                }
            ]
        },
        test: [
                {
                    id: "rfk4l1_t1", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was ist KEINE Pflicht am Fahrrad?", answers: ["ein Gepäckträger", "eine Klingel", "zwei Bremsen", "ein Rücklicht"], correct: 0,
                    explanation: "Ein Gepäckträger ist nicht vorgeschrieben."
                },
                {
                    id: "rfk4l1_t2", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Welche Farbe haben Speichenreflektoren?", answers: ["gelb", "rot", "blau", "grün"], correct: 0,
                    explanation: "Gelb."
                },
                {
                    id: "rfk4l1_t3", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was schützt bei einem Sturz den Kopf?", answers: ["ein Helm", "eine Mütze", "ein Schal", "eine Brille"], correct: 0,
                    explanation: "Ein Helm."
                },
                {
                    id: "rfk4l1_t4", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was muss vorne am Fahrrad leuchten?", answers: ["ein weißer Scheinwerfer", "ein rotes Rücklicht", "ein grünes Licht", "eine Lichterkette"], correct: 0,
                    explanation: "Ein weißer Scheinwerfer."
                },
                {
                    id: "rfk4l1_t5", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Wie muss die Klingel klingen?", answers: ["hell und deutlich", "ganz leise", "wie eine Hupe", "wie Musik"], correct: 0,
                    explanation: "Helltönend."
                },
                {
                    id: "rfk4l1_t6", category: "kurs_rf_k4_l1", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was tust du, wenn die Bremse nicht geht?", answers: ["nicht fahren, reparieren", "trotzdem fahren", "schneller fahren", "mit den Füßen bremsen"], correct: 0,
                    explanation: "Erst reparieren, dann fahren."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "rf_k4_l2", kurs: "radfahren_k4", order: 2, icon: "⚠️",
        title: "Vorfahrt und Verkehrszeichen", kurz: "Rechts vor links, Stopp, Raute",
        erklaerung: {
            intro: "Wo kein Schild und keine Ampel steht, gilt <b>rechts vor links</b>. Das Schild <b>Vorfahrt gewähren</b> ist ein rot-weißes Dreieck auf der Spitze: Du musst warten. Das <b>Stoppschild</b> ist achteckig: anhalten und warten. Die gelbe <b>Raute</b> bedeutet Vorfahrtstraße: Du hast Vorfahrt. Ein blaues rundes Schild mit Fahrrad bedeutet <b>Radweg</b> – den müssen Radfahrer benutzen. Kinder bis 10 Jahre dürfen aber auch auf dem Gehweg fahren.",
            beispiele: ["Dreieck auf der Spitze – Vorfahrt gewähren",
                "Achteck – Stopp",
                "gelbe Raute – Vorfahrtstraße"],
            merksatz: "Polizist vor Ampel, Ampel vor Schild, Schild vor rechts vor links."
        },
        uebung: {
            leicht: [
                {
                    id: "rfk4l2_l1", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "leicht", points: 10,
                    question: "Was gilt an einer Kreuzung ohne Schilder und Ampel?", answers: ["rechts vor links", "links vor rechts", "der Schnellere zuerst", "der Größere zuerst"], correct: 0,
                    explanation: "Rechts vor links."
                },
                {
                    id: "rfk4l2_l2", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "leicht", points: 10,
                    question: "Welche Form hat das Stoppschild?", answers: ["achteckig", "rund", "dreieckig", "quadratisch"], correct: 0,
                    explanation: "Achteckig."
                },
                {
                    id: "rfk4l2_l3", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "leicht", points: 10,
                    question: "Was bedeutet die gelbe Raute?", answers: ["Vorfahrtstraße", "Halteverbotszone", "Spielstraße", "Radweg"], correct: 0,
                    explanation: "Du fährst auf einer Vorfahrtstraße."
                },
                {
                    id: "rfk4l2_l4", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "leicht", points: 10,
                    question: "Was zeigt ein blaues rundes Schild mit Fahrrad?", answers: ["Radweg", "Fahrradladen", "Radfahren verboten", "Fahrradparkplatz"], correct: 0,
                    explanation: "Einen Radweg, den man benutzen muss."
                }
            ],
            mittel: [
                {
                    id: "rfk4l2_m1", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was bedeutet ein rot-weißes Dreieck auf der Spitze?", answers: ["Vorfahrt gewähren", "Vorfahrtstraße", "Einbahnstraße", "Sackgasse"], correct: 0,
                    explanation: "Du musst Vorfahrt gewähren."
                },
                {
                    id: "rfk4l2_m2", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was musst du am Stoppschild tun?", answers: ["anhalten und warten", "langsam weiterfahren", "hupen", "schneller fahren"], correct: 0,
                    explanation: "Immer ganz anhalten."
                },
                {
                    id: "rfk4l2_m3", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was gilt mehr: Ampel oder Schild?", answers: ["die Ampel", "das Schild", "immer rechts vor links", "der Radfahrer"], correct: 0,
                    explanation: "Die Ampel geht vor."
                },
                {
                    id: "rfk4l2_m4", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was bedeutet ein weißes rundes Schild mit rotem Rand und Fahrrad?", answers: ["Verbot für Fahrräder", "Radweg für alle", "Fahrradladen in der Nähe", "Fahrradständer hier"], correct: 0,
                    explanation: "Hier dürfen keine Fahrräder fahren."
                }
            ],
            schwer: [
                {
                    id: "rfk4l2_s1", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "schwer", points: 10,
                    question: "Rechts vor links: Ein Auto kommt von rechts. Wer fährt zuerst?", answers: ["das Auto von rechts", "ich als Radfahrer", "wer zuerst klingelt", "wer schneller ist"], correct: 0,
                    explanation: "Wer von rechts kommt, hat Vorfahrt."
                },
                {
                    id: "rfk4l2_s2", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "schwer", points: 10,
                    question: "Wer regelt den Verkehr noch vor der Ampel?", answers: ["Polizisten", "Busfahrer", "Fußgänger", "Taxifahrer"], correct: 0,
                    explanation: "Zeichen von Polizisten gehen vor."
                },
                {
                    id: "rfk4l2_s3", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "schwer", points: 10,
                    question: "Was zeigt ein blaues rechteckiges Schild mit weißem Pfeil?", answers: ["Einbahnstraße", "Sackgasse", "Vorfahrtstraße", "Spielstraße"], correct: 0,
                    explanation: "Einbahnstraße: nur in Pfeilrichtung."
                },
                {
                    id: "rfk4l2_s4", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "schwer", points: 10,
                    question: "Was musst du tun, wenn ein blaues Radweg-Schild da ist?", answers: ["den Radweg benutzen", "auf der Straße fahren", "absteigen und schieben", "in der Straßenmitte fahren"], correct: 0,
                    explanation: "Der Radweg muss benutzt werden."
                }
            ]
        },
        test: [
                {
                    id: "rfk4l2_t1", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Welches Schild ist achteckig?", answers: ["Stopp", "Vorfahrtstraße", "Radweg", "Einbahnstraße"], correct: 0,
                    explanation: "Das Stoppschild."
                },
                {
                    id: "rfk4l2_t2", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Wer hat ohne Schilder an Kreuzungen Vorfahrt?", answers: ["wer von rechts kommt", "wer von links kommt", "immer das Fahrrad", "immer das Auto"], correct: 0,
                    explanation: "Rechts vor links."
                },
                {
                    id: "rfk4l2_t3", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'Vorfahrt gewähren'?", answers: ["Ich muss warten.", "Ich darf zuerst.", "Ich muss hupen.", "Ich darf parken."], correct: 0,
                    explanation: "Du musst die anderen vorlassen."
                },
                {
                    id: "rfk4l2_t4", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Welches Schild zeigt, dass du Vorfahrt hast?", answers: ["gelbe Raute", "rotes Achteck", "Dreieck auf der Spitze", "blauer Kreis"], correct: 0,
                    explanation: "Die gelbe Raute."
                },
                {
                    id: "rfk4l2_t5", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Wie heißt das Schild mit der gelben Raute?", answers: ["Vorfahrtstraße", "Spielstraße", "Halteverbot", "Ortseingangsschild"], correct: 0,
                    explanation: "Vorfahrtstraße."
                },
                {
                    id: "rfk4l2_t6", category: "kurs_rf_k4_l2", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was bedeutet ein rot umrandetes Dreieck mit Kindern?", answers: ["Achtung, Kinder!", "Spielplatz hier", "Schule geschlossen", "Kinder verboten"], correct: 0,
                    explanation: "Vorsicht, hier sind oft Kinder."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "rf_k4_l3", kurs: "radfahren_k4", order: 3, icon: "↩️",
        title: "Sicher abbiegen", kurz: "Schulterblick und Handzeichen",
        erklaerung: {
            intro: "<b>Rechtsabbiegen</b>: umschauen, rechten Arm raus, auf Fußgänger achten. <b>Linksabbiegen</b>: 1. Schulterblick nach hinten, 2. linken Arm raus, 3. zur Mitte einordnen, 4. Gegenverkehr vorlassen, 5. nochmal Schulterblick, 6. abbiegen. Wer unsicher ist, biegt <b>indirekt</b> ab: erst geradeaus über die Kreuzung, am rechten Rand halten, dann die andere Straße überqueren.",
            beispiele: ["Schulterblick – nach hinten schauen",
                "linker Arm – Linksabbiegen",
                "indirekt abbiegen – der sichere Weg"],
            merksatz: "Schauen, zeigen, einordnen, vorlassen, schauen, abbiegen."
        },
        uebung: {
            leicht: [
                {
                    id: "rfk4l3_l1", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "leicht", points: 10,
                    question: "Was zeigst du vor dem Linksabbiegen an?", answers: ["den linken Arm", "den rechten Arm", "beide Arme", "gar nichts"], correct: 0,
                    explanation: "Den linken Arm raus."
                },
                {
                    id: "rfk4l3_l2", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "leicht", points: 10,
                    question: "Was ist der Schulterblick?", answers: ["Blick nach hinten", "Blick nach oben", "Blick aufs Handy", "Blick in den Himmel"], correct: 0,
                    explanation: "Ein kurzer Blick über die Schulter nach hinten."
                },
                {
                    id: "rfk4l3_l3", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "leicht", points: 10,
                    question: "Was machst du beim Rechtsabbiegen?", answers: ["rechten Arm raus", "linken Arm raus", "laut hupen", "Augen zu"], correct: 0,
                    explanation: "Den rechten Arm raus."
                },
                {
                    id: "rfk4l3_l4", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "leicht", points: 10,
                    question: "Auf welcher Seite der Straße fährst du mit dem Rad?", answers: ["rechts", "links", "in der Mitte", "egal"], correct: 0,
                    explanation: "Rechts."
                }
            ],
            mittel: [
                {
                    id: "rfk4l3_m1", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Wen lässt du beim Linksabbiegen zuerst fahren?", answers: ["den Gegenverkehr", "niemanden", "nur Fahrräder", "nur Busse"], correct: 0,
                    explanation: "Den Gegenverkehr."
                },
                {
                    id: "rfk4l3_m2", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Wohin ordnest du dich zum Linksabbiegen ein?", answers: ["zur Straßenmitte", "an den rechten Rand", "auf den Gehweg", "hinter ein Auto"], correct: 0,
                    explanation: "Zur Mitte der Straße."
                },
                {
                    id: "rfk4l3_m3", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Worauf achtest du beim Rechtsabbiegen besonders?", answers: ["auf Fußgänger", "auf Vögel", "auf die Wolken", "auf Musik"], correct: 0,
                    explanation: "Auf Fußgänger, die die Straße queren."
                },
                {
                    id: "rfk4l3_m4", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was ist der erste Schritt beim Linksabbiegen?", answers: ["Schulterblick", "Abbiegen", "laut Klingeln", "Bremsen"], correct: 0,
                    explanation: "Zuerst nach hinten schauen."
                }
            ],
            schwer: [
                {
                    id: "rfk4l3_s1", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "schwer", points: 10,
                    question: "Was ist 'indirektes Linksabbiegen'?", answers: ["erst geradeaus, dann queren", "schnell links abbiegen", "rückwärts fahren", "über den Gehweg rasen"], correct: 0,
                    explanation: "Erst über die Kreuzung, dann die Straße queren."
                },
                {
                    id: "rfk4l3_s2", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "schwer", points: 10,
                    question: "Warum schaust du vor dem Abbiegen nach hinten?", answers: ["Wegen Autos hinter mir.", "Um den Weg zu finden.", "Um zu winken.", "Weil es Spaß macht."], correct: 0,
                    explanation: "Du musst wissen, wer hinter dir fährt."
                },
                {
                    id: "rfk4l3_s3", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "schwer", points: 10,
                    question: "Wie oft machst du beim Linksabbiegen den Schulterblick?", answers: ["zweimal", "nie", "einmal", "zehnmal"], correct: 0,
                    explanation: "Vor dem Einordnen und direkt vor dem Abbiegen."
                },
                {
                    id: "rfk4l3_s4", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "schwer", points: 10,
                    question: "Warum streckst du beim Abbiegen den Arm raus?", answers: ["Andere sehen meine Richtung.", "Um andere zu grüßen.", "Damit die Hand trocknet.", "Damit ich schneller bin."], correct: 0,
                    explanation: "So wissen andere, wohin du fährst."
                }
            ]
        },
        test: [
                {
                    id: "rfk4l3_t1", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Welcher Arm zeigt Rechtsabbiegen an?", answers: ["der rechte", "der linke", "beide zusammen", "keiner"], correct: 0,
                    explanation: "Der rechte."
                },
                {
                    id: "rfk4l3_t2", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was kommt nach dem Einordnen beim Linksabbiegen?", answers: ["Gegenverkehr vorlassen", "sofort abbiegen", "anhalten und absteigen", "klingeln"], correct: 0,
                    explanation: "Den Gegenverkehr vorlassen."
                },
                {
                    id: "rfk4l3_t3", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Wo fährst du, wenn es einen Radweg gibt?", answers: ["auf dem Radweg", "auf der Autobahn", "in der Straßenmitte", "auf dem Rasen"], correct: 0,
                    explanation: "Auf dem Radweg."
                },
                {
                    id: "rfk4l3_t4", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Was ist an großen Kreuzungen sicherer für Anfänger?", answers: ["indirekt abbiegen", "schnell durchfahren", "freihändig fahren", "bei Rot fahren"], correct: 0,
                    explanation: "Indirekt abbiegen."
                },
                {
                    id: "rfk4l3_t5", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Wann ist der zweite Schulterblick beim Linksabbiegen?", answers: ["direkt vor dem Abbiegen", "erst nach dem Abbiegen", "schon zu Hause", "beim Losfahren am Morgen"], correct: 0,
                    explanation: "Direkt vor dem Abbiegen."
                },
                {
                    id: "rfk4l3_t6", category: "kurs_rf_k4_l3", area: "schule", grade: 4,
                    subject: "sachunterricht", topic: "radfahrpruefung_technik", difficulty: "mittel", points: 10,
                    question: "Wie fährst du an parkenden Autos vorbei?", answers: ["mit Abstand", "ganz dicht", "freihändig", "mit geschlossenen Augen"], correct: 0,
                    explanation: "Mit Abstand – Türen könnten aufgehen."
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
        window.SACHUNTERRICHT_K4_KURSE = extraKurse;
        window.SACHUNTERRICHT_K4_LEKTIONEN = extraLektionen;
    }
})();
