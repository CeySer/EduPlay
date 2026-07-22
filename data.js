// =======================================================
// FRAGEN-DATENBANK
// Aufbau: LERNEN (nach Klassenstufe 1-13 und Fach) ist strikt
// getrennt vom SPASS-Bereich. Die Faecher je Klasse richten sich
// nach den ueblichen Lehrplaenen der Bundeslaender (KMK-Rahmen).
// Hinweis: Lehrplaene sind Laendersache und unterscheiden sich
// im Detail - dies ist eine gaengige, gut uebertragbare Einteilung.
// =======================================================
const QUESTIONS_DATABASE = [
    // --- Klasse 1 - Deutsch (Lesen & Schreiben) ---
    { category: "k1_deutsch", question: "Mit welchem Buchstaben beginnt das Wort 'Oma'?", answers: ["O", "A", "M"], correct: 0, explanation: "Oma beginnt mit dem Buchstaben O." },
    { category: "k1_deutsch", question: "Wie viele Buchstaben hat das Wort 'Ball'?", answers: ["3", "4", "5"], correct: 1, explanation: "B-A-L-L sind vier Buchstaben." },
    { category: "k1_deutsch", question: "Welches Wort reimt sich auf 'Haus'?", answers: ["Maus", "Baum", "Tisch"], correct: 0, explanation: "Haus und Maus klingen am Ende gleich." },
    { category: "k1_deutsch", question: "Wie viele Silben hat das Wort 'Ba-na-ne'?", answers: ["2", "3", "4"], correct: 1, explanation: "Ba-na-ne klatscht man in drei Teile." },
    { category: "k1_deutsch", question: "Welcher Buchstabe fehlt: B, C, D, __, F?", answers: ["E", "G", "A"], correct: 0, explanation: "Das Alphabet geht B, C, D, E, F." },

    // --- Klasse 1 - Mathematik ---
    { category: "k1_mathe", question: "Was ist 3 + 4?", answers: ["6", "7", "8"], correct: 1, explanation: "3 und 4 zusammen ergeben 7." },
    { category: "k1_mathe", question: "Welche Zahl kommt nach der 9?", answers: ["8", "10", "11"], correct: 1, explanation: "Nach der 9 kommt die 10." },
    { category: "k1_mathe", question: "Was ist 10 - 4?", answers: ["5", "6", "7"], correct: 1, explanation: "Von 10 vier weggenommen bleiben 6." },
    { category: "k1_mathe", question: "Wie viele Finger hat man an beiden Händen zusammen?", answers: ["8", "10", "12"], correct: 1, explanation: "An jeder Hand 5 Finger, zusammen also 10." },
    { category: "k1_mathe", question: "Welche Zahl ist größer: 5 oder 8?", answers: ["5", "8", "Beide gleich"], correct: 1, explanation: "8 kommt später beim Zählen, also ist 8 größer." },

    // --- Klasse 1 - Sachunterricht ---
    { category: "k1_sachunterricht", question: "Wie viele Beine hat eine Katze?", answers: ["2", "4", "6"], correct: 1, explanation: "Katzen sind Vierbeiner." },
    { category: "k1_sachunterricht", question: "Welche Farbe hat der Himmel bei schönem Wetter?", answers: ["Blau", "Grün", "Rot"], correct: 0, explanation: "Bei Sonnenschein ist der Himmel blau." },
    { category: "k1_sachunterricht", question: "Was brauchen Pflanzen zum Wachsen?", answers: ["Wasser und Licht", "Nur Erde", "Nur Luft"], correct: 0, explanation: "Pflanzen brauchen Wasser, Licht und Nährstoffe." },
    { category: "k1_sachunterricht", question: "Welche Jahreszeit ist am kältesten?", answers: ["Sommer", "Winter", "Frühling"], correct: 1, explanation: "Im Winter ist es am kältesten, oft schneit es." },
    { category: "k1_sachunterricht", question: "Wo wohnt eine Biene?", answers: ["Im Bienenstock", "Im Vogelnest", "In der Höhle"], correct: 0, explanation: "Bienen leben zusammen im Bienenstock." },

    // --- Klasse 2 - Deutsch ---
    { category: "k2_deutsch", question: "Welche Schreibweise ist richtig?", answers: ["Sonne", "Sone", "Zonne"], correct: 0, explanation: "Sonne schreibt man mit doppeltem n." },
    { category: "k2_deutsch", question: "Was ist das Gegenteil von 'hell'?", answers: ["dunkel", "laut", "schnell"], correct: 0, explanation: "Hell und dunkel sind Gegenteile." },
    { category: "k2_deutsch", question: "Welches Wort ist ein Nomen (Namenwort)?", answers: ["Baum", "laufen", "schnell"], correct: 0, explanation: "Baum ist ein Nomen – man sagt 'der Baum' und schreibt es groß." },
    { category: "k2_deutsch", question: "Wie viele Silben hat 'Schmet-ter-ling'?", answers: ["2", "3", "4"], correct: 1, explanation: "Schmet-ter-ling hat drei Silben." },
    { category: "k2_deutsch", question: "Welcher Satz ist richtig geschrieben?", answers: ["Ich gehe nach Hause.", "ich gehe nach hause.", "Ich gehe nach hause"], correct: 0, explanation: "Satzanfang groß, Nomen groß, Punkt am Ende." },

    // --- Klasse 2 - Mathematik ---
    { category: "k2_mathe", question: "Was ist 7 + 8?", answers: ["14", "15", "16"], correct: 1, explanation: "7 + 7 = 14, und einer mehr ergibt 15." },
    { category: "k2_mathe", question: "Was ist die Hälfte von 12?", answers: ["5", "6", "7"], correct: 1, explanation: "12 geteilt durch 2 ergibt 6." },
    { category: "k2_mathe", question: "Was ist 20 - 7?", answers: ["12", "13", "14"], correct: 1, explanation: "Von 20 sieben weggenommen bleiben 13." },
    { category: "k2_mathe", question: "Wie viele Minuten hat eine Stunde?", answers: ["30", "60", "100"], correct: 1, explanation: "Eine Stunde hat 60 Minuten." },
    { category: "k2_mathe", question: "Was ist 5 × 2?", answers: ["8", "10", "12"], correct: 1, explanation: "5 zweimal genommen ergibt 10." },

    // --- Klasse 2 - Sachunterricht ---
    { category: "k2_sachunterricht", question: "Welches Tier legt Eier?", answers: ["Huhn", "Kuh", "Hund"], correct: 0, explanation: "Hühner legen Eier, Kühe und Hunde bekommen lebende Junge." },
    { category: "k2_sachunterricht", question: "Wie nennt man gefrorenes Wasser?", answers: ["Eis", "Dampf", "Nebel"], correct: 0, explanation: "Wird Wasser sehr kalt, gefriert es zu Eis." },
    { category: "k2_sachunterricht", question: "Welche Jahreszeit kommt nach dem Sommer?", answers: ["Frühling", "Herbst", "Winter"], correct: 1, explanation: "Die Reihenfolge ist Frühling, Sommer, Herbst, Winter." },
    { category: "k2_sachunterricht", question: "In welcher Richtung geht die Sonne auf?", answers: ["Osten", "Westen", "Norden"], correct: 0, explanation: "Die Sonne geht im Osten auf und im Westen unter." },
    { category: "k2_sachunterricht", question: "Welches Verkehrszeichen bedeutet, dass man anhalten muss?", answers: ["Stoppschild", "Vorfahrtsschild", "Parkplatzschild"], correct: 0, explanation: "Das rote achteckige Stoppschild bedeutet: anhalten." },

    // --- Klasse 3 - Deutsch ---
    { category: "k3_deutsch", question: "Welche Wortart ist 'schnell' in 'Er läuft schnell'?", answers: ["Adjektiv", "Nomen", "Verb"], correct: 0, explanation: "'schnell' beschreibt näher, wie er läuft – es ist ein Adjektiv." },
    { category: "k3_deutsch", question: "Wie lautet die Mehrzahl von 'Kind'?", answers: ["Kinder", "Kinde", "Kindern"], correct: 0, explanation: "Die Mehrzahl von Kind ist Kinder." },
    { category: "k3_deutsch", question: "Was ist ein Verb?", answers: ["Ein Tuwort wie 'laufen'", "Ein Namenwort", "Ein Wiewort"], correct: 0, explanation: "Verben beschreiben Tätigkeiten: laufen, essen, lesen." },
    { category: "k3_deutsch", question: "Wie schreibt man das Wort richtig?", answers: ["Fahrrad", "Farrad", "Fahrat"], correct: 0, explanation: "Fahrrad kommt von 'fahren' und 'Rad' – daher doppeltes r." },
    { category: "k3_deutsch", question: "Wann schreibt man ein Wort groß?", answers: ["Bei Nomen und am Satzanfang", "Bei Verben und am Satzende", "Bei allen Wörtern über vier Buchstaben"], correct: 0, explanation: "Nomen und der erste Buchstabe im Satz werden großgeschrieben." },

    // --- Klasse 3 - Mathematik ---
    { category: "k3_mathe", question: "Was ist 6 × 7?", answers: ["42", "36", "48"], correct: 0, explanation: "Einmaleins: 6, 12, 18, 24, 30, 36, 42." },
    { category: "k3_mathe", question: "Was ist 100 : 4?", answers: ["20", "25", "30"], correct: 1, explanation: "4 × 25 = 100, also ist 100 : 4 = 25." },
    { category: "k3_mathe", question: "Wie viele Ecken hat ein Rechteck?", answers: ["3", "4", "5"], correct: 1, explanation: "Ein Rechteck hat vier Ecken und vier Seiten." },
    { category: "k3_mathe", question: "Was ist 45 + 38?", answers: ["73", "83", "93"], correct: 1, explanation: "45 + 38 = 83." },
    { category: "k3_mathe", question: "Wie viele Zentimeter sind 1 Meter?", answers: ["10", "100", "1000"], correct: 1, explanation: "1 Meter sind 100 Zentimeter." },

    // --- Klasse 3 - Sachunterricht ---
    { category: "k3_sachunterricht", question: "Welches Organ pumpt das Blut durch den Körper?", answers: ["Herz", "Lunge", "Magen"], correct: 0, explanation: "Das Herz ist ein Muskel und pumpt das Blut." },
    { category: "k3_sachunterricht", question: "In welche Richtung zeigt die Nadel eines Kompasses?", answers: ["Norden", "Süden", "Westen"], correct: 0, explanation: "Die Kompassnadel richtet sich nach Norden aus." },
    { category: "k3_sachunterricht", question: "Wie nennt man Tiere, die nur Fleisch fressen?", answers: ["Fleischfresser", "Pflanzenfresser", "Allesfresser"], correct: 0, explanation: "Fleischfresser sind zum Beispiel Löwe und Wolf." },
    { category: "k3_sachunterricht", question: "Was passiert mit Wasser bei 0 Grad Celsius?", answers: ["Es gefriert", "Es kocht", "Es passiert nichts"], correct: 0, explanation: "Bei 0 °C wird Wasser zu Eis." },
    { category: "k3_sachunterricht", question: "Welches Bundesland ist das größte nach Fläche?", answers: ["Bayern", "Hessen", "Saarland"], correct: 0, explanation: "Bayern ist mit Abstand das flächengrößte Bundesland." },

    // --- Klasse 3 - Englisch ---
    { category: "k3_englisch", question: "Was heißt 'Hund' auf Englisch?", answers: ["dog", "cat", "bird"], correct: 0, explanation: "Hund heißt auf Englisch 'dog'." },
    { category: "k3_englisch", question: "Was bedeutet 'red'?", answers: ["rot", "blau", "grün"], correct: 0, explanation: "'red' heißt rot." },
    { category: "k3_englisch", question: "Wie sagt man 'Guten Morgen'?", answers: ["Good morning", "Good night", "Goodbye"], correct: 0, explanation: "'Good morning' bedeutet Guten Morgen." },
    { category: "k3_englisch", question: "Was bedeutet 'school'?", answers: ["Schule", "Straße", "Stuhl"], correct: 0, explanation: "'school' heißt Schule." },
    { category: "k3_englisch", question: "Wie geht es weiter: one, two, __?", answers: ["three", "four", "five"], correct: 0, explanation: "Die Reihenfolge ist one, two, three." },

    // --- Klasse 3 - Türkisch (Herkunftssprache) ---
    { category: "k3_tuerkisch", question: "Was heißt 'Hallo' auf Türkisch?", answers: ["Merhaba", "Hoşçakal", "Teşekkürler"], correct: 0, explanation: "'Merhaba' bedeutet Hallo." },
    { category: "k3_tuerkisch", question: "Was bedeutet 'okul'?", answers: ["Schule", "Haus", "Auto"], correct: 0, explanation: "'okul' heißt Schule." },
    { category: "k3_tuerkisch", question: "Was heißt 'Wasser' auf Türkisch?", answers: ["su", "ev", "kitap"], correct: 0, explanation: "'su' bedeutet Wasser." },
    { category: "k3_tuerkisch", question: "Was bedeutet 'anne'?", answers: ["Mutter", "Vater", "Bruder"], correct: 0, explanation: "'anne' heißt Mutter, 'baba' heißt Vater." },
    { category: "k3_tuerkisch", question: "Wie geht es weiter: bir, iki, __?", answers: ["üç", "dört", "beş"], correct: 0, explanation: "Auf Türkisch zählt man bir, iki, üç." },

    // --- Klasse 4 - Deutsch (Grammatik) ---
    { category: "k4_deutsch", question: "Welcher Fall antwortet auf die Frage 'Wem?'", answers: ["Dativ", "Genitiv", "Akkusativ"], correct: 0, explanation: "Der Dativ ist der 3. Fall und antwortet auf 'Wem?'." },
    { category: "k4_deutsch", question: "Was ist das Subjekt in 'Der Hund bellt laut'?", answers: ["Der Hund", "bellt", "laut"], correct: 0, explanation: "Das Subjekt ist der Satzteil, der etwas tut – hier 'Der Hund'." },
    { category: "k4_deutsch", question: "Welche Zeitform ist 'ich ging'?", answers: ["Präteritum", "Perfekt", "Futur"], correct: 0, explanation: "'ich ging' ist Präteritum (einfache Vergangenheit)." },
    { category: "k4_deutsch", question: "Was gehört in die Lücke: 'Ich weiß, __ du kommst.'", answers: ["dass", "das", "daß"], correct: 0, explanation: "Als Bindewort schreibt man 'dass' mit doppeltem s." },
    { category: "k4_deutsch", question: "Was ist ein Adjektiv?", answers: ["Ein Wiewort wie 'groß'", "Ein Tuwort", "Ein Namenwort"], correct: 0, explanation: "Adjektive beschreiben, wie etwas ist: groß, schnell, bunt." },

    // --- Klasse 4 - Mathematik ---
    { category: "k4_mathe", question: "Was ist 8 × 9?", answers: ["64", "72", "81"], correct: 1, explanation: "8 × 9 = 72." },
    { category: "k4_mathe", question: "Was ist die Hälfte von 48?", answers: ["22", "24", "26"], correct: 1, explanation: "48 : 2 = 24." },
    { category: "k4_mathe", question: "Wie groß ist der Umfang eines Quadrats mit 5 cm Seitenlänge?", answers: ["20 cm", "25 cm", "10 cm"], correct: 0, explanation: "Vier gleiche Seiten: 4 × 5 cm = 20 cm." },
    { category: "k4_mathe", question: "Wie viele Gramm sind 1 Kilogramm?", answers: ["100", "1000", "10000"], correct: 1, explanation: "1 Kilogramm sind 1000 Gramm." },
    { category: "k4_mathe", question: "Wie heißt 1234 auf Hunderter gerundet?", answers: ["1200", "1230", "1300"], correct: 0, explanation: "Die Zehnerstelle ist 3, also wird abgerundet: 1200." },

    // --- Klasse 4 - Sachunterricht ---
    { category: "k4_sachunterricht", question: "Wie nennt man die Karte, die Berge und Flüsse zeigt?", answers: ["Physische Karte", "Politische Karte", "Wetterkarte"], correct: 0, explanation: "Physische Karten zeigen die natürliche Landschaft." },
    { category: "k4_sachunterricht", question: "Was ist ein Stromkreis?", answers: ["Ein geschlossener Weg für den Strom", "Eine Batterie", "Ein Schalter"], correct: 0, explanation: "Nur in einem geschlossenen Stromkreis kann Strom fließen." },
    { category: "k4_sachunterricht", question: "Auf welchem Planeten leben wir?", answers: ["Erde", "Mars", "Venus"], correct: 0, explanation: "Wir leben auf der Erde, dem dritten Planeten von der Sonne." },
    { category: "k4_sachunterricht", question: "Wie nennt man den Übergang von Wasser zu Wasserdampf?", answers: ["Verdunsten", "Gefrieren", "Schmelzen"], correct: 0, explanation: "Beim Erhitzen verdunstet Wasser zu Wasserdampf." },
    { category: "k4_sachunterricht", question: "Wie heißt die Hauptstadt von Deutschland?", answers: ["Berlin", "München", "Hamburg"], correct: 0, explanation: "Berlin ist die Hauptstadt Deutschlands." },

    // --- Klasse 4 - Englisch ---
    { category: "k4_englisch", question: "Wie sagt man 'Ich habe einen Bruder'?", answers: ["I have a brother", "I am a brother", "I has a brother"], correct: 0, explanation: "'I have' heißt 'ich habe'." },
    { category: "k4_englisch", question: "Was bedeutet 'Wednesday'?", answers: ["Mittwoch", "Montag", "Freitag"], correct: 0, explanation: "'Wednesday' ist der Mittwoch." },
    { category: "k4_englisch", question: "Was gehört in die Lücke: 'There __ two cats.'", answers: ["are", "is", "am"], correct: 0, explanation: "Bei mehreren Dingen benutzt man 'are'." },
    { category: "k4_englisch", question: "Was bedeutet 'breakfast'?", answers: ["Frühstück", "Mittagessen", "Abendessen"], correct: 0, explanation: "'breakfast' ist das Frühstück." },
    { category: "k4_englisch", question: "Wie fragt man nach dem Namen?", answers: ["What's your name?", "How are you?", "Where are you?"], correct: 0, explanation: "'What's your name?' heißt 'Wie heißt du?'." },

    // --- Klasse 4 - Türkisch (Herkunftssprache) ---
    { category: "k4_tuerkisch", question: "Was bedeutet 'teşekkürler'?", answers: ["Danke", "Bitte", "Tschüss"], correct: 0, explanation: "'teşekkürler' heißt danke." },
    { category: "k4_tuerkisch", question: "Was heißt 'Buch' auf Türkisch?", answers: ["kitap", "kalem", "masa"], correct: 0, explanation: "'kitap' bedeutet Buch." },
    { category: "k4_tuerkisch", question: "Was bedeutet 'kardeş'?", answers: ["Geschwister", "Freund", "Lehrer"], correct: 0, explanation: "'kardeş' bedeutet Geschwisterkind (Bruder oder Schwester)." },
    { category: "k4_tuerkisch", question: "Was heißt 'öğretmen'?", answers: ["Lehrer", "Schüler", "Arzt"], correct: 0, explanation: "'öğretmen' bedeutet Lehrerin oder Lehrer." },
    { category: "k4_tuerkisch", question: "Welche Farbe ist 'kırmızı'?", answers: ["rot", "blau", "gelb"], correct: 0, explanation: "'kırmızı' bedeutet rot." },

    // --- Klasse 5 - Deutsch ---
    { category: "k5_deutsch", question: "Was ist das Prädikat in 'Der Hund bellt laut'?", answers: ["bellt", "Der Hund", "laut"], correct: 0, explanation: "Das Prädikat ist das Verb im Satz." },
    { category: "k5_deutsch", question: "Welche Wortart sind 'und', 'aber', 'weil'?", answers: ["Konjunktionen", "Präpositionen", "Pronomen"], correct: 0, explanation: "Konjunktionen verbinden Wörter oder Sätze." },
    { category: "k5_deutsch", question: "Was ist eine Inhaltsangabe?", answers: ["Sachliche Zusammenfassung im Präsens", "Eine eigene Meinung", "Ein wörtliches Zitat"], correct: 0, explanation: "Inhaltsangaben fassen sachlich, im Präsens und in eigenen Worten zusammen." },
    { category: "k5_deutsch", question: "Wie lautet der Genitiv von 'der Hund'?", answers: ["des Hundes", "dem Hund", "den Hund"], correct: 0, explanation: "Der Genitiv ist der 2. Fall: des Hundes." },
    { category: "k5_deutsch", question: "Was ist ein Märchen typischerweise?", answers: ["Eine erfundene Erzählung mit Zauber", "Ein Sachtext", "Ein Zeitungsbericht"], correct: 0, explanation: "Märchen sind erfundene Erzählungen, oft mit magischen Elementen." },

    // --- Klasse 5 - Mathematik ---
    { category: "k5_mathe", question: "Was ist 3/4 als Dezimalzahl?", answers: ["0,34", "0,75", "0,43"], correct: 1, explanation: "3 geteilt durch 4 ergibt 0,75." },
    { category: "k5_mathe", question: "Wie viele Grad hat ein rechter Winkel?", answers: ["45°", "90°", "180°"], correct: 1, explanation: "Ein rechter Winkel hat genau 90°." },
    { category: "k5_mathe", question: "Wie berechnet man den Umfang eines Rechtecks?", answers: ["a × b", "2 × (a + b)", "a² + b²"], correct: 1, explanation: "Umfang = 2 × (Länge + Breite)." },
    { category: "k5_mathe", question: "Was ist der Mittelwert von 2, 4 und 6?", answers: ["3", "4", "6"], correct: 1, explanation: "(2 + 4 + 6) : 3 = 4." },
    { category: "k5_mathe", question: "Was ist eine Primzahl?", answers: ["Nur durch 1 und sich selbst teilbar", "Jede gerade Zahl", "Jede ungerade Zahl"], correct: 0, explanation: "Primzahlen wie 2, 3, 5, 7 haben genau zwei Teiler." },

    // --- Klasse 5 - Englisch ---
    { category: "k5_englisch", question: "'She __ to school every day.'", answers: ["go", "goes", "going"], correct: 1, explanation: "Bei he/she/it kommt im Simple Present ein 's' ans Verb." },
    { category: "k5_englisch", question: "'My birthday is __ May.'", answers: ["at", "on", "in"], correct: 2, explanation: "Bei Monaten benutzt man 'in'." },
    { category: "k5_englisch", question: "'This is my dog. __ name is Rex.'", answers: ["His", "Her", "Its"], correct: 2, explanation: "Für Tiere und Dinge benutzt man 'its'." },
    { category: "k5_englisch", question: "'Can you __ me the salt, please?'", answers: ["pass", "passes", "passing"], correct: 0, explanation: "Nach 'can' folgt die Grundform." },
    { category: "k5_englisch", question: "Was bedeutet 'yesterday'?", answers: ["gestern", "heute", "morgen"], correct: 0, explanation: "'yesterday' heißt gestern." },

    // --- Klasse 5 - Biologie ---
    { category: "k5_biologie", question: "Was brauchen Pflanzen für die Fotosynthese?", answers: ["Sonnenlicht, Wasser und CO2", "Nur Wasser", "Nur Dünger"], correct: 0, explanation: "Aus Licht, Wasser und Kohlendioxid entsteht Traubenzucker und Sauerstoff." },
    { category: "k5_biologie", question: "Wie viele Beine hat ein Insekt?", answers: ["4", "6", "8"], correct: 1, explanation: "Insekten haben immer sechs Beine, Spinnen dagegen acht." },
    { category: "k5_biologie", question: "Wozu dienen die Wurzeln einer Pflanze?", answers: ["Aufnahme von Wasser und Nährstoffen", "Nur zur Zierde", "Zur Fotosynthese"], correct: 0, explanation: "Wurzeln verankern die Pflanze und nehmen Wasser auf." },
    { category: "k5_biologie", question: "Welches Tier ist ein Wirbeltier?", answers: ["Frosch", "Regenwurm", "Schnecke"], correct: 0, explanation: "Frösche haben eine Wirbelsäule und sind Amphibien." },
    { category: "k5_biologie", question: "Welches Organ tauscht Sauerstoff und Kohlendioxid aus?", answers: ["Lunge", "Leber", "Niere"], correct: 0, explanation: "In den Lungenbläschen findet der Gasaustausch statt." },

    // --- Klasse 5 - Erdkunde ---
    { category: "k5_erdkunde", question: "Wie heißt der höchste Berg Deutschlands?", answers: ["Zugspitze", "Watzmann", "Brocken"], correct: 0, explanation: "Die Zugspitze ist 2.962 m hoch." },
    { category: "k5_erdkunde", question: "An welche Meere grenzt Deutschland im Norden?", answers: ["Nord- und Ostsee", "Mittelmeer", "Schwarzes Meer"], correct: 0, explanation: "Deutschland grenzt an Nordsee und Ostsee." },
    { category: "k5_erdkunde", question: "Wie viele Kontinente gibt es im klassischen Modell?", answers: ["5", "6", "7"], correct: 2, explanation: "Klassisch werden sieben Kontinente unterschieden." },
    { category: "k5_erdkunde", question: "Was zeigt eine Legende auf einer Landkarte?", answers: ["Die Bedeutung der Zeichen", "Den Maßstab", "Die Himmelsrichtung"], correct: 0, explanation: "Die Legende erklärt, wofür die Symbole und Farben stehen." },
    { category: "k5_erdkunde", question: "Wie heißt der längste Fluss Deutschlands?", answers: ["Rhein", "Donau", "Elbe"], correct: 0, explanation: "Der Rhein ist auf deutschem Gebiet der längste Fluss." },

    // --- Klasse 5 - Politik & Gesellschaftslehre ---
    { category: "k5_politik", question: "Was bedeutet 'Demokratie'?", answers: ["Herrschaft des Volkes", "Herrschaft eines Königs", "Herrschaft des Militärs"], correct: 0, explanation: "Demokratie kommt aus dem Griechischen und heißt Volksherrschaft." },
    { category: "k5_politik", question: "Wie viele Bundesländer hat Deutschland?", answers: ["14", "16", "18"], correct: 1, explanation: "Deutschland besteht aus 16 Bundesländern." },
    { category: "k5_politik", question: "Was ist eine Klassensprecherwahl ein Beispiel für?", answers: ["Eine demokratische Wahl", "Eine Diktatur", "Eine Monarchie"], correct: 0, explanation: "Alle dürfen wählen – das ist ein demokratisches Grundprinzip." },
    { category: "k5_politik", question: "Was sind Kinderrechte?", answers: ["Rechte, die allen Kindern zustehen", "Regeln nur für die Schule", "Gesetze für Erwachsene"], correct: 0, explanation: "Die UN-Kinderrechtskonvention sichert Kindern weltweit Rechte zu." },
    { category: "k5_politik", question: "Was ist eine Gemeinde?", answers: ["Die kleinste politische Einheit vor Ort", "Ein Bundesland", "Ein Staat"], correct: 0, explanation: "Städte und Dörfer sind Gemeinden mit eigener Verwaltung." },

    // --- Klasse 5 - Türkisch (Herkunftssprache) ---
    { category: "k5_tuerkisch", question: "Was bedeutet 'aile'?", answers: ["Familie", "Freund", "Schule"], correct: 0, explanation: "'aile' heißt Familie." },
    { category: "k5_tuerkisch", question: "Was heißt 'Zeit' auf Türkisch?", answers: ["zaman", "yemek", "sağlık"], correct: 0, explanation: "'zaman' bedeutet Zeit." },
    { category: "k5_tuerkisch", question: "Was bedeutet 'güzel'?", answers: ["schön", "schnell", "schwer"], correct: 0, explanation: "'güzel' heißt schön." },
    { category: "k5_tuerkisch", question: "Was heißt 'Stadt' auf Türkisch?", answers: ["şehir", "köy", "sokak"], correct: 0, explanation: "'şehir' bedeutet Stadt, 'köy' bedeutet Dorf." },
    { category: "k5_tuerkisch", question: "Was bedeutet 'kitap okumak'?", answers: ["ein Buch lesen", "Musik hören", "Fußball spielen"], correct: 0, explanation: "'kitap' = Buch, 'okumak' = lesen." },

    // --- Klasse 6 - Deutsch ---
    { category: "k6_deutsch", question: "Welche Zeitform ist 'ich bin gegangen'?", answers: ["Perfekt", "Präteritum", "Futur I"], correct: 0, explanation: "Perfekt bildet man mit haben/sein + Partizip II." },
    { category: "k6_deutsch", question: "Was ist ein Attribut?", answers: ["Ein Wort, das ein Satzglied näher beschreibt", "Ein eigener Satz", "Ein Satzzeichen"], correct: 0, explanation: "Beispiel: 'der GROSSE Hund' – 'große' ist ein Attribut." },
    { category: "k6_deutsch", question: "Was ist der Unterschied zwischen 'wie' und 'als' beim Vergleich?", answers: ["'wie' bei Gleichheit, 'als' bei Ungleichheit", "Kein Unterschied", "Genau umgekehrt"], correct: 0, explanation: "So groß WIE (gleich), größer ALS (ungleich)." },
    { category: "k6_deutsch", question: "Was kennzeichnet einen Bericht?", answers: ["Sachlich, im Präteritum, W-Fragen beantwortet", "Spannend und ausgeschmückt", "In der Ich-Form erfunden"], correct: 0, explanation: "Ein Bericht antwortet sachlich auf Wer, Was, Wann, Wo, Wie, Warum." },
    { category: "k6_deutsch", question: "Was ist ein Reflexivpronomen?", answers: ["'sich' – bezieht sich aufs Subjekt zurück", "Ein Fragewort wie 'wer' oder 'was'", "Ein Zeitwort wie 'laufen' oder 'sehen'"], correct: 0, explanation: "Beispiel: 'Er wäscht SICH.'" },

    // --- Klasse 6 - Mathematik ---
    { category: "k6_mathe", question: "Was ist 1/2 + 1/4?", answers: ["2/6", "3/4", "1/6"], correct: 1, explanation: "Gleichnamig machen: 2/4 + 1/4 = 3/4." },
    { category: "k6_mathe", question: "Wie viel sind 20 % von 150?", answers: ["20", "30", "40"], correct: 1, explanation: "150 × 0,20 = 30." },
    { category: "k6_mathe", question: "Was ist 2/3 × 3/4?", answers: ["1/2", "5/7", "6/7"], correct: 0, explanation: "2×3=6 und 3×4=12, also 6/12 = 1/2." },
    { category: "k6_mathe", question: "Was ist -5 + 8?", answers: ["-13", "3", "13"], correct: 1, explanation: "Von -5 aus acht nach oben zählen ergibt 3." },
    { category: "k6_mathe", question: "Wie viel ist die Winkelsumme im Dreieck?", answers: ["90°", "180°", "360°"], correct: 1, explanation: "Die Innenwinkel eines Dreiecks ergeben zusammen 180°." },

    // --- Klasse 6 - Englisch ---
    { category: "k6_englisch", question: "'We __ football every Saturday.'", answers: ["plays", "play", "playing"], correct: 1, explanation: "Bei 'we' gibt es kein 's' am Verb." },
    { category: "k6_englisch", question: "'I __ my homework yesterday.'", answers: ["do", "did", "does"], correct: 1, explanation: "Simple Past von 'do' ist 'did'." },
    { category: "k6_englisch", question: "Was ist die Vergangenheit von 'go'?", answers: ["went", "goed", "gone"], correct: 0, explanation: "'go' ist unregelmäßig: go – went – gone." },
    { category: "k6_englisch", question: "'She is __ than her brother.'", answers: ["taller", "tall", "tallest"], correct: 0, explanation: "Beim Vergleich zweier Dinge nutzt man den Komparativ." },
    { category: "k6_englisch", question: "Was bedeutet 'always'?", answers: ["immer", "nie", "manchmal"], correct: 0, explanation: "'always' heißt immer." },

    // --- Klasse 6 - Biologie ---
    { category: "k6_biologie", question: "Wo beginnt die Verdauung von Stärke?", answers: ["Im Mund durch Speichel", "Im Magen", "Im Dünndarm"], correct: 0, explanation: "Enzyme im Speichel beginnen schon im Mund mit dem Stärkeabbau." },
    { category: "k6_biologie", question: "Was ist eine Nahrungskette?", answers: ["Eine Reihenfolge, wer wen frisst", "Eine Kochanleitung", "Ein Verdauungsorgan"], correct: 0, explanation: "Sie zeigt, wie Energie von Pflanzen über Tiere weitergegeben wird." },
    { category: "k6_biologie", question: "Wie nennt man die Bestäubung durch Insekten?", answers: ["Entomophilie", "Anemophilie", "Zoochorie"], correct: 0, explanation: "Entomophilie ist die Bestäubung durch Insekten." },
    { category: "k6_biologie", question: "Wozu dienen die Blätter einer Pflanze vor allem?", answers: ["Fotosynthese", "Wasseraufnahme", "Verankerung"], correct: 0, explanation: "In den Blättern findet die Fotosynthese statt." },
    { category: "k6_biologie", question: "Welches Merkmal haben alle Säugetiere?", answers: ["Sie säugen ihre Jungen", "Sie legen Eier", "Sie leben im Wasser"], correct: 0, explanation: "Säugetiere ernähren ihre Jungen mit Milch." },

    // --- Klasse 6 - Physik ---
    { category: "k6_physik", question: "Bei welcher Temperatur gefriert Wasser?", answers: ["0 °C", "10 °C", "-10 °C"], correct: 0, explanation: "Bei Normaldruck gefriert Wasser bei 0 °C." },
    { category: "k6_physik", question: "Was ist ein geschlossener Stromkreis?", answers: ["Ein durchgehender Weg, in dem Strom fließen kann", "Nur eine Batterie", "Ein Schalter allein"], correct: 0, explanation: "Erst im geschlossenen Kreis fließt Strom." },
    { category: "k6_physik", question: "Wie nennt man das Zurückwerfen von Licht an einer Oberfläche?", answers: ["Reflexion", "Brechung", "Absorption"], correct: 0, explanation: "Ein Spiegel reflektiert das Licht." },
    { category: "k6_physik", question: "Wovon hängt die Tonhöhe ab?", answers: ["Von der Frequenz", "Von der Lautstärke", "Von der Temperatur"], correct: 0, explanation: "Je höher die Frequenz, desto höher der Ton." },
    { category: "k6_physik", question: "Wie breitet sich Wärme in Metall hauptsächlich aus?", answers: ["Durch Wärmeleitung", "Durch Strahlung", "Gar nicht"], correct: 0, explanation: "In Feststoffen wird Wärme vor allem geleitet." },

    // --- Klasse 6 - Geschichte ---
    { category: "k6_geschichte", question: "Wer war Alexander der Große?", answers: ["Ein makedonischer König und Feldherr", "Ein römischer Kaiser", "Ein ägyptischer Pharao"], correct: 0, explanation: "Er eroberte eines der größten Reiche der Antike." },
    { category: "k6_geschichte", question: "Wer war der erste römische Kaiser?", answers: ["Augustus", "Julius Caesar", "Nero"], correct: 0, explanation: "Augustus regierte von 27 v. Chr. bis 14 n. Chr." },
    { category: "k6_geschichte", question: "Was waren die Pyramiden in Ägypten?", answers: ["Grabmäler für Pharaonen", "Wohnhäuser", "Tempel für Sport"], correct: 0, explanation: "Die Pyramiden dienten als Grabstätten der Pharaonen." },
    { category: "k6_geschichte", question: "Was bedeutet die Zeitangabe 'v. Chr.'?", answers: ["Vor Christi Geburt", "Vor der Christenheit", "Vor dem Krieg"], correct: 0, explanation: "Die Zeitrechnung wird ab Christi Geburt gezählt." },
    { category: "k6_geschichte", question: "Wie nennt man die Zeit vor der Schrift?", answers: ["Vorgeschichte / Urgeschichte", "Neuzeit", "Mittelalter"], correct: 0, explanation: "Ohne schriftliche Quellen spricht man von Vor- oder Urgeschichte." },

    // --- Klasse 6 - Erdkunde ---
    { category: "k6_erdkunde", question: "Welche Klimazone liegt am Äquator?", answers: ["Tropen", "Polarzone", "Gemäßigte Zone"], correct: 0, explanation: "Am Äquator ist es ganzjährig warm und feucht." },
    { category: "k6_erdkunde", question: "Was ist ein Delta?", answers: ["Eine Flussmündung mit mehreren Armen", "Ein Gebirgszug mit mehreren Gipfeln", "Eine Wüste mit wandernden Sanddünen"], correct: 0, explanation: "Der Fluss teilt sich vor der Mündung in mehrere Arme." },
    { category: "k6_erdkunde", question: "Welcher Ozean ist der größte?", answers: ["Pazifik", "Atlantik", "Indischer Ozean"], correct: 0, explanation: "Der Pazifik ist der größte und tiefste Ozean." },
    { category: "k6_erdkunde", question: "Was versteht man unter Urbanisierung?", answers: ["Wachstum der Städte durch Zuzug", "Rückzug aufs Land", "Bau von Straßen"], correct: 0, explanation: "Immer mehr Menschen ziehen in Städte." },
    { category: "k6_erdkunde", question: "Was zeigt der Maßstab 1:100.000?", answers: ["1 cm auf der Karte = 1 km in Wirklichkeit", "1 cm auf der Karte = 100 m in Wirklichkeit", "1 cm auf der Karte = 10 km in Wirklichkeit"], correct: 0, explanation: "100.000 cm sind 1.000 m, also 1 km." },

    // --- Klasse 6 - Türkisch (Herkunftssprache) ---
    { category: "k6_tuerkisch", question: "Was bedeutet 'çevre'?", answers: ["Umwelt", "Familie", "Schule"], correct: 0, explanation: "'çevre' heißt Umwelt." },
    { category: "k6_tuerkisch", question: "Was heißt 'Gesundheit' auf Türkisch?", answers: ["sağlık", "yemek", "para"], correct: 0, explanation: "'sağlık' bedeutet Gesundheit." },
    { category: "k6_tuerkisch", question: "Was bedeutet 'zor'?", answers: ["schwierig", "einfach", "schnell"], correct: 0, explanation: "'zor' heißt schwierig, 'kolay' heißt einfach." },
    { category: "k6_tuerkisch", question: "Was heißt 'Ferien'?", answers: ["tatil", "okul", "ders"], correct: 0, explanation: "'tatil' bedeutet Ferien oder Urlaub." },
    { category: "k6_tuerkisch", question: "Was bedeutet 'arkadaş'?", answers: ["Freund", "Bruder", "Nachbar"], correct: 0, explanation: "'arkadaş' heißt Freundin oder Freund." },

    // --- Klasse 7 - Deutsch ---
    { category: "k7_deutsch", question: "Wie nennt man die Übertreibung als Stilmittel?", answers: ["Hyperbel", "Metapher", "Ironie"], correct: 0, explanation: "Beispiel: 'Ich habe es dir tausendmal gesagt.'" },
    { category: "k7_deutsch", question: "Was ist der Konjunktiv?", answers: ["Die Möglichkeits- und Wunschform", "Eine Zeitform", "Ein Satzzeichen"], correct: 0, explanation: "Der Konjunktiv drückt Wünsche, Möglichkeiten oder indirekte Rede aus." },
    { category: "k7_deutsch", question: "Wann kann ein Komma vor 'und' stehen?", answers: ["Zwischen zwei vollständigen Hauptsätzen", "Vor jedem 'und' in einer Aufzählung", "Nur wenn danach ein Name folgt"], correct: 0, explanation: "Dort ist das Komma erlaubt, aber nicht verpflichtend." },
    { category: "k7_deutsch", question: "Wie nennt man die Wiederholung des Anfangslauts?", answers: ["Alliteration", "Personifikation", "Vergleich"], correct: 0, explanation: "Beispiel: 'Milch macht müde Männer munter'." },
    { category: "k7_deutsch", question: "Was ist typisch für eine Charakterisierung?", answers: ["Aussehen, Verhalten und Denken einer Figur beschreiben", "Die Handlung nacherzählen", "Die eigene Meinung schreiben"], correct: 0, explanation: "Eine Charakterisierung beschreibt äußere und innere Merkmale einer Figur." },

    // --- Klasse 7 - Mathematik ---
    { category: "k7_mathe", question: "Löse: 3x + 5 = 20", answers: ["x = 5", "x = 8", "x = 3"], correct: 0, explanation: "3x = 15, also x = 5." },
    { category: "k7_mathe", question: "Wie viel Zinsen bringen 1000 € bei 4 % pro Jahr?", answers: ["4 €", "40 €", "400 €"], correct: 1, explanation: "1000 × 0,04 = 40 €." },
    { category: "k7_mathe", question: "3 kg Äpfel kosten 6 €. Was kosten 5 kg?", answers: ["8 €", "10 €", "12 €"], correct: 1, explanation: "1 kg kostet 2 €, also 5 kg = 10 €." },
    { category: "k7_mathe", question: "Was ist 2 hoch 5?", answers: ["10", "16", "32"], correct: 2, explanation: "2×2×2×2×2 = 32." },
    { category: "k7_mathe", question: "Was ist der Kehrwert von 3/5?", answers: ["5/3", "3/5", "-3/5"], correct: 0, explanation: "Beim Kehrwert werden Zähler und Nenner vertauscht." },

    // --- Klasse 7 - Englisch ---
    { category: "k7_englisch", question: "'If it rains tomorrow, we __ at home.'", answers: ["stay", "will stay", "stayed"], correct: 1, explanation: "If-Satz Typ 1: If + Present, Hauptsatz mit 'will'." },
    { category: "k7_englisch", question: "'I have __ finished my homework.'", answers: ["already", "yet", "since"], correct: 0, explanation: "'already' bedeutet 'schon' im Present Perfect." },
    { category: "k7_englisch", question: "'This is the book __ I told you about.'", answers: ["who", "which", "whose"], correct: 1, explanation: "Für Sachen benutzt man 'which' oder 'that'." },
    { category: "k7_englisch", question: "'They __ been living here for ten years.'", answers: ["has", "have", "had"], correct: 1, explanation: "Bei 'they' benutzt man 'have'." },
    { category: "k7_englisch", question: "Was bedeutet 'to borrow'?", answers: ["sich etwas leihen", "etwas verleihen", "etwas kaufen"], correct: 0, explanation: "'borrow' = sich leihen, 'lend' = verleihen." },

    // --- Klasse 7 - Biologie ---
    { category: "k7_biologie", question: "Was ist das 'Kraftwerk der Zelle'?", answers: ["Mitochondrium", "Zellkern", "Ribosom"], correct: 0, explanation: "Mitochondrien erzeugen Energie in Form von ATP." },
    { category: "k7_biologie", question: "Was unterscheidet Pflanzenzellen von Tierzellen?", answers: ["Zellwand und Chloroplasten", "Mehr Zellkerne", "Gar nichts"], correct: 0, explanation: "Pflanzenzellen haben zusätzlich eine feste Zellwand und Chloroplasten." },
    { category: "k7_biologie", question: "Welches Organ produziert Insulin?", answers: ["Bauchspeicheldrüse", "Die Leber", "Die Niere"], correct: 0, explanation: "Die Bauchspeicheldrüse regelt damit den Blutzucker." },
    { category: "k7_biologie", question: "Wie viele Kammern hat das menschliche Herz?", answers: ["2", "4", "6"], correct: 1, explanation: "Zwei Vorhöfe und zwei Herzkammern." },
    { category: "k7_biologie", question: "Welche Blutzellen bekämpfen Krankheitserreger?", answers: ["Weiße Blutkörperchen", "Rote Blutkörperchen", "Blutplättchen"], correct: 0, explanation: "Weiße Blutkörperchen gehören zum Immunsystem." },

    // --- Klasse 7 - Chemie ---
    { category: "k7_chemie", question: "Woraus besteht der Atomkern?", answers: ["Protonen und Neutronen", "Nur Elektronen", "Nur Protonen"], correct: 0, explanation: "Elektronen umkreisen den Kern in der Hülle." },
    { category: "k7_chemie", question: "Welcher pH-Bereich gilt als sauer?", answers: ["0-6", "genau 7", "8-14"], correct: 0, explanation: "Unter 7 sauer, 7 neutral, über 7 basisch." },
    { category: "k7_chemie", question: "Welches Element hat das Symbol 'Fe'?", answers: ["Eisen", "Fluor", "Phosphor"], correct: 0, explanation: "'Fe' kommt vom lateinischen 'ferrum'." },
    { category: "k7_chemie", question: "Was braucht man für eine Verbrennung?", answers: ["Brennstoff, Sauerstoff und Zündtemperatur", "Ausschließlich eine offene Flamme", "Ausschließlich reinen Sauerstoff"], correct: 0, explanation: "Das ist das sogenannte Verbrennungsdreieck." },
    { category: "k7_chemie", question: "Was ist der Unterschied zwischen Gemisch und Verbindung?", answers: ["Gemische kann man physikalisch trennen", "Es gibt keinen", "Verbindungen sind immer flüssig"], correct: 0, explanation: "Gemische trennt man z.B. durch Filtern, Verbindungen nur chemisch." },

    // --- Klasse 7 - Physik ---
    { category: "k7_physik", question: "Welche Einheit hat die Kraft?", answers: ["Newton", "Joule", "Watt"], correct: 0, explanation: "Kraft wird in Newton (N) gemessen." },
    { category: "k7_physik", question: "Was besagt das Trägheitsgesetz?", answers: ["Ohne Kraft bleibt der Bewegungszustand gleich", "Kraft = Masse × Beschleunigung", "Actio = Reactio"], correct: 0, explanation: "Das ist das erste Newtonsche Gesetz." },
    { category: "k7_physik", question: "Welche Einheit hat die elektrische Spannung?", answers: ["Volt", "Ampere", "Watt"], correct: 0, explanation: "Spannung in Volt, Stromstärke in Ampere." },
    { category: "k7_physik", question: "Wie nennt man das Brechen von Licht beim Medienwechsel?", answers: ["Refraktion", "Reflexion", "Absorption"], correct: 0, explanation: "Licht wird beim Übergang von Luft in Wasser gebrochen." },
    { category: "k7_physik", question: "Was misst eine Federwaage?", answers: ["Die Gewichtskraft in Newton", "Die Masse in Gramm", "Die Geschwindigkeit"], correct: 0, explanation: "Sie misst die Kraft, mit der ein Körper zieht." },

    // --- Klasse 7 - Geschichte ---
    { category: "k7_geschichte", question: "Was war die Reformation?", answers: ["Eine Kirchenerneuerung ab 1517 durch Martin Luther", "Ein Krieg im Altertum", "Eine Erfindung"], correct: 0, explanation: "Aus ihr ging die evangelische Kirche hervor." },
    { category: "k7_geschichte", question: "Wer entdeckte 1492 Amerika für Europa?", answers: ["Christoph Kolumbus", "Marco Polo", "Vasco da Gama"], correct: 0, explanation: "Kolumbus erreichte 1492 die Karibik." },
    { category: "k7_geschichte", question: "Was war ein Lehnswesen im Mittelalter?", answers: ["Land gegen Treue und Dienst", "Eine Handelsform", "Eine Schulform"], correct: 0, explanation: "Der Lehnsherr vergab Land, der Lehnsmann leistete dafür Dienste." },
    { category: "k7_geschichte", question: "Wer erfand um 1450 den Buchdruck mit beweglichen Lettern?", answers: ["Johannes Gutenberg", "Martin Luther", "Leonardo da Vinci"], correct: 0, explanation: "Gutenbergs Erfindung revolutionierte die Verbreitung von Wissen." },
    { category: "k7_geschichte", question: "Was bedeutet 'Renaissance'?", answers: ["Wiedergeburt (der Antike)", "Neuzeit", "Aufklärung"], correct: 0, explanation: "Die Renaissance knüpfte an antike Vorbilder an." },

    // --- Klasse 7 - Erdkunde ---
    { category: "k7_erdkunde", question: "Was ist eine Wüste?", answers: ["Ein sehr trockenes Gebiet mit wenig Niederschlag", "Ein Gebiet mit viel Regen", "Ein Waldgebiet"], correct: 0, explanation: "Wüsten erhalten meist unter 250 mm Niederschlag pro Jahr." },
    { category: "k7_erdkunde", question: "Wodurch entstehen Erdbeben?", answers: ["Durch Bewegung der Erdplatten", "Durch starken Wind", "Durch Regen"], correct: 0, explanation: "Spannungen zwischen tektonischen Platten entladen sich ruckartig." },
    { category: "k7_erdkunde", question: "Was ist ein Passatwind?", answers: ["Ein beständiger Wind in den Tropen", "Ein Sturm in Europa", "Ein kalter Polarwind"], correct: 0, explanation: "Passate wehen regelmäßig Richtung Äquator." },
    { category: "k7_erdkunde", question: "Welches Land hat die meisten Einwohner?", answers: ["Indien", "USA", "Russland"], correct: 0, explanation: "Indien hat China als bevölkerungsreichstes Land überholt." },
    { category: "k7_erdkunde", question: "Was versteht man unter Tourismus?", answers: ["Reisen aus Freizeit- oder Erholungsgründen", "Handel mit Waren", "Landwirtschaft"], correct: 0, explanation: "Tourismus ist ein wichtiger Wirtschaftszweig vieler Regionen." },

    // --- Klasse 7 - Politik & Wirtschaft ---
    { category: "k7_politik", question: "Was bedeutet Gewaltenteilung?", answers: ["Trennung von Gesetzgebung, Regierung und Gerichten", "Aufteilung des Militärs", "Verteilung von Steuern"], correct: 0, explanation: "Legislative, Exekutive und Judikative kontrollieren sich gegenseitig." },
    { category: "k7_politik", question: "Wer wählt den Bundeskanzler?", answers: ["Der Bundestag", "Das Volk direkt", "Der Bundespräsident"], correct: 0, explanation: "Das Volk wählt den Bundestag, dieser wählt den Kanzler." },
    { category: "k7_politik", question: "Was ist das Grundgesetz?", answers: ["Die Verfassung Deutschlands", "Ein einfaches Gesetz", "Ein EU-Vertrag"], correct: 0, explanation: "Es gilt seit 1949 als Verfassung der Bundesrepublik." },
    { category: "k7_politik", question: "Was beschreibt Angebot und Nachfrage?", answers: ["Wie Preise am Markt entstehen", "Wie der Staat Preise festlegt", "Wie Löhne berechnet werden"], correct: 0, explanation: "Steigt die Nachfrage bei gleichem Angebot, steigen meist die Preise." },
    { category: "k7_politik", question: "Was ist ein Tarifvertrag?", answers: ["Eine Vereinbarung über Löhne und Arbeitsbedingungen", "Eine Vereinbarung über den Kauf einer Ware", "Eine Vereinbarung über die Miete einer Wohnung"], correct: 0, explanation: "Gewerkschaften und Arbeitgeber handeln ihn aus." },

    // --- Klasse 7 - Türkisch (Herkunftssprache) ---
    { category: "k7_tuerkisch", question: "Was bedeutet 'sorumluluk'?", answers: ["Verantwortung", "Freiheit", "Gerechtigkeit"], correct: 0, explanation: "'sorumluluk' heißt Verantwortung." },
    { category: "k7_tuerkisch", question: "Was heißt 'Umwelt schützen'?", answers: ["çevreyi korumak", "kitap okumak", "spor yapmak"], correct: 0, explanation: "'çevre' = Umwelt, 'korumak' = schützen." },
    { category: "k7_tuerkisch", question: "Was bedeutet 'gelecek'?", answers: ["Zukunft", "Vergangenheit", "Gegenwart"], correct: 0, explanation: "'gelecek' heißt Zukunft." },
    { category: "k7_tuerkisch", question: "Was heißt 'Meinung' auf Türkisch?", answers: ["düşünce", "deneyim", "gelişme"], correct: 0, explanation: "'düşünce' bedeutet Gedanke oder Meinung." },
    { category: "k7_tuerkisch", question: "Was bedeutet 'eğitim'?", answers: ["Bildung", "Arbeit", "Gesundheit"], correct: 0, explanation: "'eğitim' heißt Bildung oder Erziehung." },

    // --- Klasse 8 - Deutsch ---
    { category: "k8_deutsch", question: "Was ist das Ziel einer Erörterung?", answers: ["Pro- und Contra-Argumente abwägen", "Nur nacherzählen", "Gedichte reimen"], correct: 0, explanation: "Man wägt Argumente ab und kommt zu einem begründeten Fazit." },
    { category: "k8_deutsch", question: "Was ist eine Metapher?", answers: ["Ein bildhafter Ausdruck ohne 'wie'", "Ein direkter Vergleich mit 'wie'", "Eine Übertreibung"], correct: 0, explanation: "Beispiel: 'ein Meer aus Menschen'." },
    { category: "k8_deutsch", question: "Was ist die indirekte Rede?", answers: ["Wiedergabe von Gesagtem, meist im Konjunktiv", "Wörtliches Zitat", "Eine Frage"], correct: 0, explanation: "Beispiel: 'Er sagte, er komme später.'" },
    { category: "k8_deutsch", question: "Was kennzeichnet einen Sachtext?", answers: ["Er informiert sachlich über ein Thema", "Er erzählt eine erfundene Geschichte", "Er reimt sich"], correct: 0, explanation: "Sachtexte vermitteln Informationen, keine erfundene Handlung." },
    { category: "k8_deutsch", question: "Was ist ein Nebensatz?", answers: ["Ein Satz, der allein nicht stehen kann", "Der Hauptteil des Satzes", "Ein Satzzeichen"], correct: 0, explanation: "Nebensätze werden durch Konjunktionen eingeleitet und mit Komma abgetrennt." },

    // --- Klasse 8 - Mathematik ---
    { category: "k8_mathe", question: "Wie lautet die erste binomische Formel?", answers: ["a² + 2ab + b²", "a² + b²", "a² - b²"], correct: 0, explanation: "(a+b)² = a² + 2ab + b²." },
    { category: "k8_mathe", question: "Wie berechnet man die Fläche eines Kreises?", answers: ["π × r²", "π × r", "2 × π × r"], correct: 0, explanation: "Die Kreisfläche ist π mal Radius zum Quadrat." },
    { category: "k8_mathe", question: "Was ist der Satz des Pythagoras?", answers: ["a² + b² = c²", "a + b = c", "a × b = c²"], correct: 0, explanation: "Gilt im rechtwinkligen Dreieck, c ist die Hypotenuse." },
    { category: "k8_mathe", question: "Wie viel Prozent Rabatt sind 10 € bei einem Preis von 40 €?", answers: ["20 %", "25 %", "30 %"], correct: 1, explanation: "10 von 40 sind ein Viertel, also 25 %." },
    { category: "k8_mathe", question: "Wie berechnet man das Volumen eines Würfels?", answers: ["a³", "a²", "6 × a"], correct: 0, explanation: "Volumen = Kantenlänge hoch drei." },

    // --- Klasse 8 - Englisch ---
    { category: "k8_englisch", question: "'By next year, I __ my exams.'", answers: ["will finish", "will have finished", "finish"], correct: 1, explanation: "Future Perfect: will have + 3. Form." },
    { category: "k8_englisch", question: "'The report __ by the committee last week.'", answers: ["was reviewed", "reviewed", "has reviewed"], correct: 0, explanation: "Passiv Vergangenheit: was/were + 3. Form." },
    { category: "k8_englisch", question: "'He suggested __ to the cinema.'", answers: ["to go", "going", "go"], correct: 1, explanation: "Nach 'suggest' folgt die -ing-Form." },
    { category: "k8_englisch", question: "'I wish I __ more time.'", answers: ["have", "had", "will have"], correct: 1, explanation: "Nach 'I wish' steht für die Gegenwart das Simple Past." },
    { category: "k8_englisch", question: "Was bedeutet 'to afford'?", answers: ["sich etwas leisten können", "etwas anbieten", "etwas verlieren"], correct: 0, explanation: "'I can't afford it' = ich kann es mir nicht leisten." },

    // --- Klasse 8 - Biologie ---
    { category: "k8_biologie", question: "Was ist die Grundeinheit der Vererbung?", answers: ["Das Gen", "Die Zelle", "Das Protein"], correct: 0, explanation: "Gene sind DNA-Abschnitte mit Erbinformation." },
    { category: "k8_biologie", question: "Wie viele Chromosomen hat eine menschliche Körperzelle?", answers: ["23", "46", "48"], correct: 1, explanation: "46 Chromosomen, also 23 Paare." },
    { category: "k8_biologie", question: "Was ist Mitose?", answers: ["Zellteilung mit zwei identischen Tochterzellen", "Ein Zellorganell zur Energiegewinnung", "Ein Hormon zur Steuerung des Wachstums"], correct: 0, explanation: "Die Mitose dient dem Wachstum und der Erneuerung." },
    { category: "k8_biologie", question: "Was ist ein dominantes Allel?", answers: ["Es setzt sich gegenüber dem rezessiven durch", "Ein fehlerhaftes Gen", "Ein Gen ohne Wirkung"], correct: 0, explanation: "Das rezessive Merkmal zeigt sich nur bei zwei rezessiven Allelen." },
    { category: "k8_biologie", question: "Welches Organ ist für das Gleichgewicht zuständig?", answers: ["Das Innenohr", "Das Auge", "Die Nase"], correct: 0, explanation: "Im Innenohr sitzt das Gleichgewichtsorgan." },

    // --- Klasse 8 - Chemie ---
    { category: "k8_chemie", question: "Was entsteht bei einer Neutralisation?", answers: ["Salz und Wasser", "Nur Wasser", "Ein Gas"], correct: 0, explanation: "Säure + Base ergeben Salz und Wasser." },
    { category: "k8_chemie", question: "Was ist eine Ionenbindung?", answers: ["Elektronen werden übertragen", "Elektronen werden geteilt", "Es bewegen sich keine Elektronen"], correct: 0, explanation: "Beispiel Kochsalz: Natrium gibt ein Elektron an Chlor ab." },
    { category: "k8_chemie", question: "In welcher Gruppe stehen die Edelgase?", answers: ["Gruppe 18", "Gruppe 1", "Gruppe 17"], correct: 0, explanation: "Edelgase wie Helium und Neon stehen ganz rechts." },
    { category: "k8_chemie", question: "Was ist ein Katalysator?", answers: ["Er beschleunigt eine Reaktion, ohne verbraucht zu werden", "Das Endprodukt einer chemischen Reaktion", "Ein Messgerät für die Reaktionstemperatur"], correct: 0, explanation: "Er senkt die nötige Aktivierungsenergie." },
    { category: "k8_chemie", question: "Wie nennt man den Übergang von fest direkt zu gasförmig?", answers: ["Sublimation", "Kondensation", "Schmelzen"], correct: 0, explanation: "Beispiel: Trockeneis sublimiert." },

    // --- Klasse 8 - Physik ---
    { category: "k8_physik", question: "Wie lautet das Ohmsche Gesetz?", answers: ["U = I × R", "U = R / I", "I = U × R"], correct: 0, explanation: "Spannung = Stromstärke × Widerstand." },
    { category: "k8_physik", question: "Wie berechnet man die elektrische Leistung?", answers: ["P = U × I", "P = U / I", "P = U + I"], correct: 0, explanation: "Leistung = Spannung × Stromstärke." },
    { category: "k8_physik", question: "Was passiert mit dem Gesamtwiderstand in einer Reihenschaltung?", answers: ["Die Widerstände addieren sich", "Er wird kleiner", "Er bleibt gleich"], correct: 0, explanation: "R gesamt = R1 + R2 + ..." },
    { category: "k8_physik", question: "Was besagt der Energieerhaltungssatz?", answers: ["Energie wird nur umgewandelt, nie vernichtet", "Energie kann erzeugt werden", "Energie verschwindet mit der Zeit"], correct: 0, explanation: "In einem geschlossenen System bleibt die Energie konstant." },
    { category: "k8_physik", question: "Welche Einheit hat die Energie?", answers: ["Joule", "Newton", "Volt"], correct: 0, explanation: "Arbeit und Energie werden in Joule gemessen." },

    // --- Klasse 8 - Geschichte ---
    { category: "k8_geschichte", question: "Wann begann die Französische Revolution?", answers: ["1789", "1815", "1848"], correct: 0, explanation: "1789 begann sie mit dem Sturm auf die Bastille." },
    { category: "k8_geschichte", question: "Was war die Industrielle Revolution?", answers: ["Der Übergang zur maschinellen Produktion", "Ein Krieg", "Eine Kirchenreform"], correct: 0, explanation: "Sie begann Ende des 18. Jahrhunderts in England." },
    { category: "k8_geschichte", question: "Wofür stehen die Ideale der Französischen Revolution?", answers: ["Freiheit, Gleichheit, Brüderlichkeit", "Ordnung, Fleiß, Gehorsam", "Glaube, Liebe, Hoffnung"], correct: 0, explanation: "'Liberté, égalité, fraternité'." },
    { category: "k8_geschichte", question: "Wer war Otto von Bismarck?", answers: ["Der erste Reichskanzler Deutschlands", "Ein Komponist", "Ein Erfinder"], correct: 0, explanation: "Er war maßgeblich an der Reichsgründung 1871 beteiligt." },
    { category: "k8_geschichte", question: "Was war die Aufklärung?", answers: ["Eine Geistesbewegung, die Vernunft betonte", "Eine Kriegstaktik", "Eine Kunstrichtung"], correct: 0, explanation: "Kant fasste sie als Ausgang aus selbstverschuldeter Unmündigkeit." },

    // --- Klasse 8 - Erdkunde ---
    { category: "k8_erdkunde", question: "Was versteht man unter dem Treibhauseffekt?", answers: ["Rückhalt von Wärmestrahlung in der Atmosphäre", "Abkühlung der Erde", "Ein Vulkanausbruch"], correct: 0, explanation: "Treibhausgase wie CO2 halten Wärme zurück." },
    { category: "k8_erdkunde", question: "Was ist Erosion?", answers: ["Abtragung von Boden durch Wasser oder Wind", "Aufbau von Gebirgen", "Ein Erdbeben"], correct: 0, explanation: "Wind und Wasser tragen Material ab." },
    { category: "k8_erdkunde", question: "Was sind erneuerbare Energien?", answers: ["Energie aus Sonne, Wind, Wasser", "Kohle und Erdöl", "Erdgas"], correct: 0, explanation: "Sie stehen dauerhaft zur Verfügung." },
    { category: "k8_erdkunde", question: "Was bedeutet Migration?", answers: ["Wanderung von Menschen über Grenzen", "Handel mit Waren", "Klimawandel"], correct: 0, explanation: "Menschen verlassen dauerhaft ihren Wohnort." },
    { category: "k8_erdkunde", question: "Was ist eine Megastadt?", answers: ["Eine Stadt mit über 10 Millionen Einwohnern", "Eine Hauptstadt", "Eine Industriestadt"], correct: 0, explanation: "Beispiele sind Tokio, Delhi oder Shanghai." },

    // --- Klasse 8 - Politik & Wirtschaft ---
    { category: "k8_politik", question: "Was ist Inflation?", answers: ["Allgemeiner Preisanstieg, Geld verliert an Wert", "Allgemeiner Preisrückgang, Geld gewinnt an Wert", "Allgemeiner Lohnanstieg bei gleichen Preisen"], correct: 0, explanation: "Für dasselbe Geld bekommt man weniger." },
    { category: "k8_politik", question: "Was ist der Unterschied zwischen Monarchie und Republik?", answers: ["In der Republik wird das Staatsoberhaupt gewählt", "Kein Unterschied", "Republiken haben keine Regierung"], correct: 0, explanation: "In Monarchien wird die Macht meist vererbt." },
    { category: "k8_politik", question: "Was ist eine Koalition?", answers: ["Ein Regierungsbündnis mehrerer Parteien", "Ein Gesetz zur Regelung von Wahlen", "Ein Gericht zur Prüfung von Parteien"], correct: 0, explanation: "Nötig, wenn keine Partei allein die Mehrheit hat." },
    { category: "k8_politik", question: "Was macht eine Gewerkschaft?", answers: ["Sie vertritt die Interessen der Arbeitnehmer", "Sie vertritt Arbeitgeber", "Sie erlässt Gesetze"], correct: 0, explanation: "Gewerkschaften verhandeln z.B. über Löhne." },
    { category: "k8_politik", question: "Was ist das Verhältniswahlrecht?", answers: ["Sitze werden nach Stimmenanteilen verteilt", "Nur der Sieger bekommt den Sitz", "Nur Reiche dürfen wählen"], correct: 0, explanation: "In Deutschland entspricht der Sitzanteil etwa dem Stimmenanteil." },

    // --- Klasse 8 - Informatik & Medien ---
    { category: "k8_informatik", question: "Was ist ein Algorithmus?", answers: ["Eine eindeutige Schritt-für-Schritt-Anleitung", "Ein Computervirus", "Eine Programmiersprache"], correct: 0, explanation: "Ein Algorithmus löst ein Problem in endlich vielen Schritten." },
    { category: "k8_informatik", question: "Wie viele Ziffern kennt das Binärsystem?", answers: ["2 (0 und 1)", "8 (die Ziffern 0 bis 7)", "10 (die Ziffern 0 bis 9)"], correct: 0, explanation: "Computer rechnen mit 0 und 1." },
    { category: "k8_informatik", question: "Was macht eine Schleife in einem Programm?", answers: ["Sie wiederholt einen Codeblock", "Sie beendet das Programm", "Sie löscht Daten"], correct: 0, explanation: "Solange die Bedingung gilt, wird wiederholt." },
    { category: "k8_informatik", question: "Was macht ein gutes Passwort aus?", answers: ["Lang und gemischt aus Zeichenarten", "Kurz und der eigene Name", "Immer '123456'"], correct: 0, explanation: "Länge und Mischung erschweren das Erraten." },
    { category: "k8_informatik", question: "Was ist 'Phishing'?", answers: ["Betrug, um an Zugangsdaten zu kommen", "Ein Computerspiel", "Eine Datensicherung"], correct: 0, explanation: "Betrüger täuschen echte Nachrichten vor." },

    // --- Klasse 8 - Türkisch (Herkunftssprache) ---
    { category: "k8_tuerkisch", question: "Was bedeutet 'ekonomi'?", answers: ["Wirtschaft", "Politik", "Geschichte"], correct: 0, explanation: "'ekonomi' heißt Wirtschaft." },
    { category: "k8_tuerkisch", question: "Was heißt 'Lösung' auf Türkisch?", answers: ["çözüm", "sorun", "başarı"], correct: 0, explanation: "'çözüm' = Lösung, 'sorun' = Problem." },
    { category: "k8_tuerkisch", question: "Was bedeutet 'başarı'?", answers: ["Erfolg", "Fehler", "Arbeit"], correct: 0, explanation: "'başarı' heißt Erfolg." },
    { category: "k8_tuerkisch", question: "Was heißt 'Technologie'?", answers: ["teknoloji", "kanun", "seçim"], correct: 0, explanation: "'teknoloji' bedeutet Technologie." },
    { category: "k8_tuerkisch", question: "Was bedeutet 'deneyim'?", answers: ["Erfahrung", "Beruf", "Bildung"], correct: 0, explanation: "'deneyim' heißt Erfahrung." },

    // --- Klasse 9 - Deutsch ---
    { category: "k9_deutsch", question: "Was ist eine These?", answers: ["Eine Behauptung, die begründet wird", "Ein Beispiel", "Die Zusammenfassung"], correct: 0, explanation: "Die These ist der Kern einer Argumentation." },
    { category: "k9_deutsch", question: "Was ist ein Symbol in der Literatur?", answers: ["Ein Zeichen mit tieferer Bedeutung", "Ein Satzzeichen", "Eine Überschrift"], correct: 0, explanation: "Beispiel: die Taube als Symbol für Frieden." },
    { category: "k9_deutsch", question: "Was ist eine Ballade?", answers: ["Ein erzählendes Gedicht", "Ein Sachtext", "Ein Drama"], correct: 0, explanation: "Balladen verbinden Merkmale von Epik, Lyrik und Dramatik." },
    { category: "k9_deutsch", question: "Was ist eine Personifikation?", answers: ["Etwas Unbelebtes handelt wie ein Mensch", "Eine Übertreibung", "Ein Vergleich"], correct: 0, explanation: "Beispiel: 'Die Sonne lacht'." },
    { category: "k9_deutsch", question: "Was gehört in eine Bewerbung?", answers: ["Anschreiben und Lebenslauf", "Nur ein Foto", "Nur ein Zeugnis"], correct: 0, explanation: "Anschreiben, Lebenslauf und Zeugnisse gehören dazu." },

    // --- Klasse 9 - Mathematik ---
    { category: "k9_mathe", question: "Was ist die Lösung von x² = 49?", answers: ["x = 7 oder x = -7", "nur x = 7", "x = 24,5"], correct: 0, explanation: "Beide Zahlen ergeben quadriert 49." },
    { category: "k9_mathe", question: "Wie berechnet man das Volumen eines Zylinders?", answers: ["π × r² × h", "π × r × h", "2 × π × r"], correct: 0, explanation: "Grundfläche mal Höhe." },
    { category: "k9_mathe", question: "Was ist eine lineare Funktion?", answers: ["y = m·x + b, Graph ist eine Gerade", "Eine Parabel", "Ein Kreis"], correct: 0, explanation: "m ist die Steigung, b der y-Achsenabschnitt." },
    { category: "k9_mathe", question: "Was ist der Sinus in einem rechtwinkligen Dreieck?", answers: ["Gegenkathete geteilt durch Hypotenuse", "Ankathete durch Hypotenuse", "Gegenkathete durch Ankathete"], correct: 0, explanation: "sin = Gegenkathete / Hypotenuse." },
    { category: "k9_mathe", question: "Wie hoch ist die Wahrscheinlichkeit für zweimal Kopf beim Münzwurf?", answers: ["1/2", "1/4", "1/8"], correct: 1, explanation: "1/2 × 1/2 = 1/4." },

    // --- Klasse 9 - Englisch ---
    { category: "k9_englisch", question: "'I would have helped you if I __ about it.'", answers: ["knew", "had known", "know"], correct: 1, explanation: "If-Satz Typ 3: If + Past Perfect." },
    { category: "k9_englisch", question: "'Not only __ late, but he also forgot his homework.'", answers: ["he was", "was he", "he is"], correct: 1, explanation: "Nach 'Not only' am Satzanfang folgt Inversion." },
    { category: "k9_englisch", question: "'I look forward to __ from you.'", answers: ["hear", "hearing", "heard"], correct: 1, explanation: "Nach 'look forward to' folgt die -ing-Form." },
    { category: "k9_englisch", question: "'It's high time we __ a decision.'", answers: ["make", "made", "will make"], correct: 1, explanation: "Nach 'it's high time' steht das Simple Past." },
    { category: "k9_englisch", question: "Was bedeutet 'unemployment'?", answers: ["Arbeitslosigkeit", "Anstellung", "Bewerbung"], correct: 0, explanation: "'unemployment' heißt Arbeitslosigkeit." },

    // --- Klasse 9 - Biologie ---
    { category: "k9_biologie", question: "Wer entwickelte die Theorie der natürlichen Selektion?", answers: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur"], correct: 0, explanation: "Darwin veröffentlichte 1859 'Die Entstehung der Arten'." },
    { category: "k9_biologie", question: "Was passiert bei einer Mutation?", answers: ["Die DNA verändert sich dauerhaft", "Die Zelle stirbt sofort", "Gar nichts"], correct: 0, explanation: "Mutationen sind die Grundlage genetischer Vielfalt." },
    { category: "k9_biologie", question: "Was ist ein Ökosystem?", answers: ["Lebewesen und ihre Umwelt im Zusammenspiel", "Nur die Tiere eines Gebiets", "Ein künstlicher Garten"], correct: 0, explanation: "Belebte und unbelebte Faktoren wirken zusammen." },
    { category: "k9_biologie", question: "Was bewirkt eine Impfung?", answers: ["Das Immunsystem lernt den Erreger kennen", "Sie tötet alle Bakterien", "Sie ersetzt Blut"], correct: 0, explanation: "Der Körper bildet Antikörper und Gedächtniszellen." },
    { category: "k9_biologie", question: "Was ist Meiose?", answers: ["Reifeteilung mit halbem Chromosomensatz", "Normale Zellteilung", "Ein Hormon"], correct: 0, explanation: "Bei der Meiose entstehen Keimzellen." },

    // --- Klasse 9 - Chemie ---
    { category: "k9_chemie", question: "Was ist eine Oxidation im engeren Sinn?", answers: ["Reaktion mit Sauerstoff", "Aufnahme von Wasser", "Abgabe von Wärme"], correct: 0, explanation: "Im weiteren Sinn ist es die Abgabe von Elektronen." },
    { category: "k9_chemie", question: "Welche Säure steckt im Essig?", answers: ["Essigsäure", "Salzsäure", "Schwefelsäure"], correct: 0, explanation: "Essigsäure heißt chemisch Ethansäure." },
    { category: "k9_chemie", question: "Was sind Kohlenwasserstoffe?", answers: ["Verbindungen aus Kohlenstoff und Wasserstoff", "Verbindungen aus Metall und Sauerstoff", "Salze aus Säure und Lauge"], correct: 0, explanation: "Beispiele sind Methan, Ethan und Propan." },
    { category: "k9_chemie", question: "Was ist ein Redoxvorgang?", answers: ["Elektronenübertragung: Oxidation und Reduktion", "Nur eine Verbrennung", "Eine Filtration"], correct: 0, explanation: "Ein Stoff gibt Elektronen ab, ein anderer nimmt sie auf." },
    { category: "k9_chemie", question: "Was ist eine Legierung?", answers: ["Ein Gemisch aus Metallen", "Eine Säure", "Ein Gas"], correct: 0, explanation: "Beispiel: Messing aus Kupfer und Zink." },

    // --- Klasse 9 - Physik ---
    { category: "k9_physik", question: "Wie lautet das zweite Newtonsche Gesetz?", answers: ["F = m × a", "Actio = Reactio", "E = m × c²"], correct: 0, explanation: "Kraft ist Masse mal Beschleunigung." },
    { category: "k9_physik", question: "Was ist die Einheit der Frequenz?", answers: ["Hertz", "Watt", "Newton"], correct: 0, explanation: "1 Hertz bedeutet eine Schwingung pro Sekunde." },
    { category: "k9_physik", question: "Wie funktioniert ein Generator?", answers: ["Bewegung erzeugt elektrische Spannung", "Strom erzeugt Bewegung", "Er speichert Strom"], correct: 0, explanation: "Er nutzt elektromagnetische Induktion." },
    { category: "k9_physik", question: "Was ist Radioaktivität?", answers: ["Zerfall instabiler Atomkerne unter Strahlung", "Eine besonders energiereiche Lichtart", "Ein Magnetfeld um bewegte Ladungen"], correct: 0, explanation: "Es gibt Alpha-, Beta- und Gammastrahlung." },
    { category: "k9_physik", question: "Was besagt das Hebelgesetz?", answers: ["Kraft × Kraftarm = Last × Lastarm", "Kraft = Masse × Weg", "Energie bleibt erhalten"], correct: 0, explanation: "Damit lassen sich Hebel berechnen." },

    // --- Klasse 9 - Geschichte ---
    { category: "k9_geschichte", question: "Wann endete der Zweite Weltkrieg?", answers: ["1945", "1939", "1950"], correct: 0, explanation: "1945 kapitulierten Deutschland und Japan." },
    { category: "k9_geschichte", question: "Was war die Weimarer Republik?", answers: ["Deutschlands erste Demokratie 1919-1933", "Ein Königreich", "Die heutige Bundesrepublik"], correct: 0, explanation: "Sie entstand nach dem Ersten Weltkrieg." },
    { category: "k9_geschichte", question: "Wann begann der Erste Weltkrieg?", answers: ["1914", "1918", "1900"], correct: 0, explanation: "Er dauerte von 1914 bis 1918." },
    { category: "k9_geschichte", question: "Was war der Holocaust?", answers: ["Der Völkermord an den europäischen Juden", "Eine Schlacht", "Ein Friedensvertrag"], correct: 0, explanation: "Millionen Menschen wurden systematisch ermordet." },
    { category: "k9_geschichte", question: "Was war der Kalte Krieg?", answers: ["Der Ost-West-Konflikt nach 1945", "Ein Krieg im Winter", "Ein Bürgerkrieg"], correct: 0, explanation: "Systemkonflikt zwischen USA und Sowjetunion ohne direkten Krieg." },

    // --- Klasse 9 - Erdkunde ---
    { category: "k9_erdkunde", question: "Was bedeutet Globalisierung?", answers: ["Weltweite Verflechtung von Wirtschaft und Kultur", "Rückzug ins eigene Land", "Nur Tourismus"], correct: 0, explanation: "Waren, Kapital und Informationen bewegen sich weltweit." },
    { category: "k9_erdkunde", question: "Was ist Nachhaltigkeit?", answers: ["Heute so wirtschaften, dass künftige Generationen leben können", "Möglichst schnell wachsen", "Nur sparen"], correct: 0, explanation: "Ökologie, Ökonomie und Soziales im Gleichgewicht." },
    { category: "k9_erdkunde", question: "Was ist ein Entwicklungsland?", answers: ["Land mit geringerem wirtschaftlichem Entwicklungsstand", "Ein Land ohne Regierung", "Ein sehr kleines Land"], correct: 0, explanation: "Kennzeichen sind z.B. niedriges Pro-Kopf-Einkommen." },
    { category: "k9_erdkunde", question: "Was ist Desertifikation?", answers: ["Ausbreitung von Wüsten", "Bildung von Wäldern", "Anstieg des Meeresspiegels"], correct: 0, explanation: "Oft durch Übernutzung und Klimawandel verursacht." },
    { category: "k9_erdkunde", question: "Was sind fossile Energieträger?", answers: ["Kohle, Erdöl, Erdgas", "Sonne und Wind", "Wasserkraft"], correct: 0, explanation: "Sie sind endlich und setzen CO2 frei." },

    // --- Klasse 9 - Politik & Wirtschaft ---
    { category: "k9_politik", question: "Was ist die soziale Marktwirtschaft?", answers: ["Freie Marktwirtschaft mit sozialem Ausgleich", "Reine Planwirtschaft", "Wirtschaft ohne Regeln"], correct: 0, explanation: "Der Staat sorgt für sozialen Ausgleich und Wettbewerb." },
    { category: "k9_politik", question: "Was ist ein Sozialversicherungssystem?", answers: ["Absicherung bei Krankheit, Alter, Arbeitslosigkeit", "Ein Sparkonto mit festem Zinssatz", "Ein freiwilliger Verein für Nachbarschaftshilfe"], correct: 0, explanation: "In Deutschland gibt es fünf Säulen der Sozialversicherung." },
    { category: "k9_politik", question: "Was ist die EU?", answers: ["Ein Staatenverbund europäischer Länder", "Ein einzelner Staat", "Eine Firma"], correct: 0, explanation: "Die Europäische Union hat gemeinsame Institutionen und Regeln." },
    { category: "k9_politik", question: "Was sind Steuern?", answers: ["Abgaben an den Staat ohne direkte Gegenleistung", "Freiwillige Spenden", "Bankgebühren"], correct: 0, explanation: "Sie finanzieren staatliche Aufgaben." },
    { category: "k9_politik", question: "Was ist Meinungsfreiheit?", answers: ["Das Recht, die eigene Meinung zu äußern", "Das Recht, alles zu behaupten ohne Grenzen", "Ein Verbot von Kritik"], correct: 0, explanation: "Sie steht in Artikel 5 des Grundgesetzes, hat aber Schranken." },

    // --- Klasse 9 - Informatik & Medien ---
    { category: "k9_informatik", question: "Wofür steht 'https' in einer Webadresse?", answers: ["Die Verbindung ist verschlüsselt", "Die Seite ist schnell", "Die Seite ist kostenlos"], correct: 0, explanation: "Das 's' steht für 'secure'." },
    { category: "k9_informatik", question: "Was ist eine Variable?", answers: ["Ein Speicherplatz für veränderbare Werte", "Ein fester Text", "Ein Programmfehler"], correct: 0, explanation: "Der Inhalt kann sich während des Programms ändern." },
    { category: "k9_informatik", question: "Wofür steht DSGVO?", answers: ["Datenschutz-Grundverordnung", "Digitale Software-Gruppenverordnung", "Deutsche Serverordnung"], correct: 0, explanation: "Sie regelt EU-weit den Umgang mit personenbezogenen Daten." },
    { category: "k9_informatik", question: "Was ist ein Backup?", answers: ["Eine Sicherheitskopie von Daten", "Ein gelöschter Ordner", "Ein Virus"], correct: 0, explanation: "Falls die Originaldaten verloren gehen." },
    { category: "k9_informatik", question: "Welche Dezimalzahl ist binär 1010?", answers: ["8", "10", "12"], correct: 1, explanation: "8 + 0 + 2 + 0 = 10." },

    // --- Klasse 9 - Türkisch (Herkunftssprache) ---
    { category: "k9_tuerkisch", question: "Was bedeutet 'özgürlük'?", answers: ["Freiheit", "Gerechtigkeit", "Verantwortung"], correct: 0, explanation: "'özgürlük' heißt Freiheit." },
    { category: "k9_tuerkisch", question: "Was heißt 'Gesetz' auf Türkisch?", answers: ["kanun", "seçim", "adalet"], correct: 0, explanation: "'kanun' bedeutet Gesetz." },
    { category: "k9_tuerkisch", question: "Was bedeutet 'adalet'?", answers: ["Gerechtigkeit", "Freiheit", "Wahl"], correct: 0, explanation: "'adalet' heißt Gerechtigkeit." },
    { category: "k9_tuerkisch", question: "Was heißt 'Wahl' auf Türkisch?", answers: ["seçim", "anayasa", "eğitim"], correct: 0, explanation: "'seçim' bedeutet Wahl." },
    { category: "k9_tuerkisch", question: "Was bedeutet 'anayasa'?", answers: ["Verfassung", "Regierung", "Partei"], correct: 0, explanation: "'anayasa' heißt Verfassung." },

    // --- Klasse 10 - Deutsch ---
    { category: "k10_deutsch", question: "Was ist ein Drama in der Literatur?", answers: ["Ein Text für die Bühne mit Dialogen", "Ein Gedicht mit Reim und festem Versmaß", "Ein Sachtext mit informierender Absicht"], correct: 0, explanation: "Dramen bestehen aus Akten und Szenen." },
    { category: "k10_deutsch", question: "Was ist der Unterschied zwischen Epik, Lyrik und Dramatik?", answers: ["Erzählende, gedichtartige und dramatische Texte", "Alte, neue und moderne Texte", "Kurze, mittlere und lange Texte"], correct: 0, explanation: "Das sind die drei literarischen Gattungen." },
    { category: "k10_deutsch", question: "Was ist Sprachkritik?", answers: ["Das bewusste Hinterfragen von Sprachgebrauch", "Rechtschreibkorrektur", "Lautes Vorlesen"], correct: 0, explanation: "Zum Beispiel Analyse von Werbe- oder Politikersprache." },
    { category: "k10_deutsch", question: "Was ist eine Textanalyse?", answers: ["Untersuchung von Inhalt, Aufbau und Sprache", "Eine Nacherzählung der Handlung in eigenen Worten", "Eine persönliche Meinung zum Thema des Textes"], correct: 0, explanation: "Man untersucht, WIE ein Text wirkt und warum." },
    { category: "k10_deutsch", question: "Was ist ein Exposé?", answers: ["Eine kurze Vorstellung eines Vorhabens", "Ein Schlusswort", "Eine Fußnote"], correct: 0, explanation: "Es fasst Thema, Ziel und Vorgehen zusammen." },

    // --- Klasse 10 - Mathematik ---
    { category: "k10_mathe", question: "Wie lautet die Mitternachtsformel für ax² + bx + c = 0?", answers: ["x = (-b ± √(b²-4ac)) / 2a", "x = -b / 2a", "x = b² - 4ac"], correct: 0, explanation: "Damit löst man quadratische Gleichungen." },
    { category: "k10_mathe", question: "Was ist eine Parabel?", answers: ["Der Graph einer quadratischen Funktion", "Der Graph einer linearen Funktion", "Der Graph einer Kreisgleichung"], correct: 0, explanation: "y = x² ergibt eine nach oben geöffnete Parabel." },
    { category: "k10_mathe", question: "Was ist der Kosinussatz nützlich für?", answers: ["Dreiecke ohne rechten Winkel berechnen", "Nur rechtwinklige Dreiecke", "Kreise"], correct: 0, explanation: "c² = a² + b² - 2ab·cos(γ)." },
    { category: "k10_mathe", question: "Was ist exponentielles Wachstum?", answers: ["Wachstum mit gleichbleibendem Faktor pro Schritt", "Gleichmäßige Zunahme", "Abnahme"], correct: 0, explanation: "Beispiel: Verdopplung in jedem Zeitschritt." },
    { category: "k10_mathe", question: "Wie berechnet man das Volumen einer Kugel?", answers: ["4/3 × π × r³", "π × r²", "2 × π × r"], correct: 0, explanation: "V = 4/3 π r³." },

    // --- Klasse 10 - Englisch ---
    { category: "k10_englisch", question: "'Hardly __ arrived when the phone rang.'", answers: ["I had", "had I", "I have"], correct: 1, explanation: "Nach 'Hardly' am Satzanfang folgt Inversion." },
    { category: "k10_englisch", question: "Was ist ein 'gerund'?", answers: ["Die -ing-Form als Substantiv", "Eine Vergangenheitsform", "Ein Adjektiv"], correct: 0, explanation: "Beispiel: 'Swimming is fun.'" },
    { category: "k10_englisch", question: "'The book, __ was published in 2020, is great.'", answers: ["which", "who", "whose"], correct: 0, explanation: "Nicht-notwendiger Relativsatz mit Komma und 'which'." },
    { category: "k10_englisch", question: "Was bedeutet 'to sustain'?", answers: ["aufrechterhalten", "zerstören", "vergessen"], correct: 0, explanation: "'sustainable' heißt nachhaltig." },
    { category: "k10_englisch", question: "'If I were you, I __ apply for the job.'", answers: ["will", "would", "would have"], correct: 1, explanation: "If-Satz Typ 2: If + Past, Hauptsatz mit 'would'." },

    // --- Klasse 10 - Biologie ---
    { category: "k10_biologie", question: "Was ist die DNA?", answers: ["Träger der Erbinformation", "Ein Protein", "Ein Hormon"], correct: 0, explanation: "Sie hat die Form einer Doppelhelix." },
    { category: "k10_biologie", question: "Was sind Hormone?", answers: ["Botenstoffe, die Vorgänge im Körper steuern", "Blutzellen", "Verdauungsenzyme"], correct: 0, explanation: "Beispiel: Insulin regelt den Blutzucker." },
    { category: "k10_biologie", question: "Was ist die Aufgabe der Nieren?", answers: ["Blut filtern und Harn bilden", "Blut pumpen", "Sauerstoff aufnehmen"], correct: 0, explanation: "Sie regulieren auch den Wasserhaushalt." },
    { category: "k10_biologie", question: "Was versteht man unter Biodiversität?", answers: ["Die Vielfalt des Lebens", "Die Anzahl der Menschen", "Die Größe eines Waldes"], correct: 0, explanation: "Vielfalt an Arten, Genen und Ökosystemen." },
    { category: "k10_biologie", question: "Was ist ein Antibiotikum?", answers: ["Ein Mittel gegen Bakterien", "Ein Mittel gegen Viren", "Ein Schmerzmittel"], correct: 0, explanation: "Gegen Viren wirken Antibiotika nicht." },

    // --- Klasse 10 - Chemie ---
    { category: "k10_chemie", question: "Was ist eine funktionelle Gruppe?", answers: ["Atomgruppe, die Eigenschaften bestimmt", "Eine Atomsorte", "Ein Katalysator"], correct: 0, explanation: "Beispiel: die OH-Gruppe bei Alkoholen." },
    { category: "k10_chemie", question: "Was sind Alkane?", answers: ["Gesättigte Kohlenwasserstoffe", "Säuren mit einer Carboxygruppe", "Salze aus Metall und Säurerest"], correct: 0, explanation: "Methan, Ethan, Propan, Butan." },
    { category: "k10_chemie", question: "Was ist ein Ester?", answers: ["Reaktionsprodukt aus Säure und Alkohol", "Ein Metall mit niedrigem Schmelzpunkt", "Ein Edelgas ohne Reaktionsfreude"], correct: 0, explanation: "Ester sind oft für Fruchtaromen verantwortlich." },
    { category: "k10_chemie", question: "Was gibt die Molmasse an?", answers: ["Masse eines Mols eines Stoffes in g/mol", "Die Dichte eines Stoffes in g/cm³", "Das Volumen eines Stoffes in Litern"], correct: 0, explanation: "Wasser hat etwa 18 g/mol." },
    { category: "k10_chemie", question: "Was passiert bei einer Elektrolyse?", answers: ["Strom erzwingt eine chemische Reaktion", "Wärme erzeugt Strom", "Ein Stoff wird gefiltert"], correct: 0, explanation: "Beispiel: Zerlegung von Wasser in Wasserstoff und Sauerstoff." },

    // --- Klasse 10 - Physik ---
    { category: "k10_physik", question: "Was ist Induktion?", answers: ["Spannungserzeugung durch Magnetfeldänderung", "Erwärmung durch Reibung", "Lichtbrechung"], correct: 0, explanation: "Grundlage von Generatoren und Transformatoren." },
    { category: "k10_physik", question: "Wozu dient ein Transformator?", answers: ["Wechselspannung hoch- oder heruntersetzen", "Gleichstrom speichern", "Strom messen"], correct: 0, explanation: "Er nutzt zwei Spulen und Induktion." },
    { category: "k10_physik", question: "Was beschreibt E = m·c²?", answers: ["Die Äquivalenz von Masse und Energie", "Die Fallgeschwindigkeit", "Den Luftwiderstand"], correct: 0, explanation: "Einsteins berühmte Formel." },
    { category: "k10_physik", question: "Was ist der Unterschied zwischen Gleich- und Wechselstrom?", answers: ["Wechselstrom ändert regelmäßig die Richtung", "Gleichstrom ist stärker", "Es gibt keinen"], correct: 0, explanation: "Aus der Steckdose kommt Wechselstrom." },
    { category: "k10_physik", question: "Was ist der Impuls in der Physik?", answers: ["Masse mal Geschwindigkeit", "Kraft mal Weg", "Energie pro Zeit"], correct: 0, explanation: "p = m × v, er bleibt in abgeschlossenen Systemen erhalten." },

    // --- Klasse 10 - Geschichte ---
    { category: "k10_geschichte", question: "Wann fiel die Berliner Mauer?", answers: ["1989", "1985", "1991"], correct: 0, explanation: "Am 9. November 1989." },
    { category: "k10_geschichte", question: "Was war die deutsche Wiedervereinigung?", answers: ["Der Zusammenschluss von BRD und DDR 1990", "Die Reichsgründung 1871", "Der EU-Beitritt"], correct: 0, explanation: "Am 3. Oktober 1990 wurde Deutschland wiedervereinigt." },
    { category: "k10_geschichte", question: "Wann wurde Deutschland Gründungsmitglied der EWG?", answers: ["1957", "1990", "2004"], correct: 0, explanation: "Die EWG war ein Vorläufer der heutigen EU." },
    { category: "k10_geschichte", question: "Was war die Entkolonialisierung?", answers: ["Die Unabhängigkeit ehemaliger Kolonien", "Die Eroberung neuer Gebiete", "Ein Handelsabkommen"], correct: 0, explanation: "Vor allem in den 1950er und 1960er Jahren." },
    { category: "k10_geschichte", question: "Wer war der erste Bundeskanzler der Bundesrepublik?", answers: ["Konrad Adenauer", "Willy Brandt", "Helmut Kohl"], correct: 0, explanation: "Adenauer regierte von 1949 bis 1963." },

    // --- Klasse 10 - Erdkunde ---
    { category: "k10_erdkunde", question: "Was ist der Strukturwandel?", answers: ["Verschiebung von Industrie zu Dienstleistung", "Bau neuer Straßen", "Wachstum der Bevölkerung"], correct: 0, explanation: "Beispiel: das Ruhrgebiet nach dem Bergbau." },
    { category: "k10_erdkunde", question: "Was ist Raumordnung?", answers: ["Planung der Nutzung von Flächen", "Möbelplanung", "Wetterbeobachtung"], correct: 0, explanation: "Sie steuert Siedlung, Verkehr und Naturschutz." },
    { category: "k10_erdkunde", question: "Was ist der demografische Wandel?", answers: ["Veränderung des Altersaufbaus der Bevölkerung", "Wetterveränderung", "Wanderung von Tieren"], correct: 0, explanation: "In Deutschland altert die Bevölkerung." },
    { category: "k10_erdkunde", question: "Was ist eine Disparität?", answers: ["Ungleichheit zwischen Regionen", "Ein Naturereignis", "Eine Handelsroute"], correct: 0, explanation: "Zum Beispiel Unterschiede in Einkommen oder Infrastruktur." },
    { category: "k10_erdkunde", question: "Was ist Landwirtschaft im Gunstraum?", answers: ["Anbau unter günstigen natürlichen Bedingungen", "Anbau in der Wüste", "Anbau im Gewächshaus"], correct: 0, explanation: "Gunsträume haben gutes Klima und fruchtbare Böden." },

    // --- Klasse 10 - Politik & Wirtschaft ---
    { category: "k10_politik", question: "Was ist das Subsidiaritätsprinzip?", answers: ["Aufgaben werden auf der kleinstmöglichen Ebene gelöst", "Der Staat regelt alles", "Nur die EU entscheidet"], correct: 0, explanation: "Höhere Ebenen greifen nur ein, wenn nötig." },
    { category: "k10_politik", question: "Was macht das Bundesverfassungsgericht?", answers: ["Es prüft Gesetze auf Vereinbarkeit mit dem Grundgesetz", "Es erlässt Gesetze", "Es wählt den Kanzler"], correct: 0, explanation: "Es ist das höchste deutsche Gericht." },
    { category: "k10_politik", question: "Was ist ein Betriebsrat?", answers: ["Vertretung der Beschäftigten im Betrieb", "Die Geschäftsführung", "Eine Behörde"], correct: 0, explanation: "Er hat Mitbestimmungsrechte." },
    { category: "k10_politik", question: "Was bedeutet Konjunktur?", answers: ["Der wirtschaftliche Auf- und Abschwung", "Der Staatshaushalt", "Der Wechselkurs"], correct: 0, explanation: "Man spricht von Konjunkturzyklen." },
    { category: "k10_politik", question: "Was ist Föderalismus?", answers: ["Aufteilung der Macht zwischen Bund und Ländern", "Alleinherrschaft", "Direkte Demokratie"], correct: 0, explanation: "Deutschland ist ein föderaler Bundesstaat." },

    // --- Klasse 10 - Informatik & Medien ---
    { category: "k10_informatik", question: "Was ist eine Bedingung (if-Abfrage)?", answers: ["Code läuft nur, wenn etwas zutrifft", "Code läuft immer", "Ein Fehler"], correct: 0, explanation: "Damit trifft ein Programm Entscheidungen." },
    { category: "k10_informatik", question: "Was ist eine Datenbank?", answers: ["Ein System zum strukturierten Speichern von Daten", "Ein Programm zum Schreiben von Texten", "Ein Format zum Speichern von Bildern"], correct: 0, explanation: "Beispiele sind MySQL oder SQLite." },
    { category: "k10_informatik", question: "Was ist ein Betriebssystem?", answers: ["Software, die die Hardware steuert", "Ein Bauteil", "Ein Internetdienst"], correct: 0, explanation: "Windows, macOS, Linux, Android." },
    { category: "k10_informatik", question: "Was ist der Unterschied zwischen RAM und Festplatte?", answers: ["RAM ist schnell und flüchtig", "RAM speichert dauerhaft", "Kein Unterschied"], correct: 0, explanation: "Der RAM wird beim Ausschalten geleert." },
    { category: "k10_informatik", question: "Was sind Urheberrechte im Netz?", answers: ["Rechte des Erstellers an eigenen Werken", "Rechte des Internetanbieters", "Rechte des Servers"], correct: 0, explanation: "Fremde Bilder und Musik darf man nicht einfach nutzen." },

    // --- Klasse 10 - Türkisch (Herkunftssprache) ---
    { category: "k10_tuerkisch", question: "Was bedeutet 'sürdürülebilirlik'?", answers: ["Nachhaltigkeit", "Globalisierung", "Wirtschaft"], correct: 0, explanation: "'sürdürülebilirlik' heißt Nachhaltigkeit." },
    { category: "k10_tuerkisch", question: "Was heißt 'global' auf Türkisch?", answers: ["küresel", "yerel", "ulusal"], correct: 0, explanation: "'küresel' bedeutet global." },
    { category: "k10_tuerkisch", question: "Was bedeutet 'gelişme'?", answers: ["Entwicklung", "Erfahrung", "Beruf"], correct: 0, explanation: "'gelişme' heißt Entwicklung." },
    { category: "k10_tuerkisch", question: "Was heißt 'Beruf' auf Türkisch?", answers: ["meslek", "iş", "okul"], correct: 0, explanation: "'meslek' = Beruf, 'iş' = Arbeit." },
    { category: "k10_tuerkisch", question: "Was bedeutet 'toplum'?", answers: ["Gesellschaft", "Familie", "Regierung"], correct: 0, explanation: "'toplum' heißt Gesellschaft." },

    // --- Klasse 11 - Deutsch ---
    { category: "k11_deutsch", question: "Was kennzeichnet die Epoche der Aufklärung in der Literatur?", answers: ["Vernunft und Kritik an Autoritäten", "Gefühl über alles", "Rückzug in die Natur"], correct: 0, explanation: "Lessings 'Nathan der Weise' ist ein typisches Werk." },
    { category: "k11_deutsch", question: "Was ist ein Motiv in der Literaturwissenschaft?", answers: ["Ein wiederkehrendes inhaltliches Element", "Der Grund einer Figur zu handeln", "Die Textsorte"], correct: 0, explanation: "Zum Beispiel das Motiv der Reise oder des Doppelgängers." },
    { category: "k11_deutsch", question: "Was ist eine Sprachvarietät?", answers: ["Eine Ausprägung wie Dialekt oder Fachsprache", "Ein Rechtschreibfehler", "Eine Zeitform"], correct: 0, explanation: "Dazu zählen Dialekt, Soziolekt und Fachsprache." },
    { category: "k11_deutsch", question: "Was untersucht die Rhetorik?", answers: ["Die Kunst der wirkungsvollen Rede", "Die Rechtschreibung", "Die Grammatik"], correct: 0, explanation: "Sie analysiert Aufbau, Stilmittel und Wirkung von Reden." },

    // --- Klasse 11 - Mathematik ---
    { category: "k11_mathe", question: "Was ist die Ableitung von f(x) = x²?", answers: ["2x", "x", "x³/3"], correct: 0, explanation: "Nach der Potenzregel gilt f'(x) = 2x." },
    { category: "k11_mathe", question: "Was beschreibt der Grenzwert einer Funktion?", answers: ["Das Verhalten bei Annäherung an einen Wert", "Den größten Funktionswert", "Die Nullstelle"], correct: 0, explanation: "Grundlage der Differenzialrechnung." },
    { category: "k11_mathe", question: "Was bedeutet f'(x) = 0 an einer Stelle?", answers: ["Möglicher Hoch- oder Tiefpunkt", "Die Funktion ist null", "Die Funktion ist unstetig"], correct: 0, explanation: "Notwendige Bedingung für einen Extrempunkt." },
    { category: "k11_mathe", question: "Was ist die Ableitung von f(x) = 3x³?", answers: ["9x²", "3x²", "x²"], correct: 0, explanation: "3 × 3x² = 9x²." },

    // --- Klasse 11 - Englisch ---
    { category: "k11_englisch", question: "Was ist 'mediation' im Englischunterricht?", answers: ["Sinngemäßes Übertragen zwischen Sprachen", "Wörtliche Übersetzung", "Eine Diskussion"], correct: 0, explanation: "Man gibt Inhalte adressatengerecht in der anderen Sprache wieder." },
    { category: "k11_englisch", question: "Was bedeutet 'to advocate something'?", answers: ["sich für etwas einsetzen", "etwas ablehnen", "etwas ignorieren"], correct: 0, explanation: "'advocate' heißt befürworten." },
    { category: "k11_englisch", question: "Was ist ein 'topic sentence'?", answers: ["Der Kernsatz eines Absatzes", "Die Überschrift", "Der Schlusssatz"], correct: 0, explanation: "Er nennt die Hauptaussage des Absatzes." },
    { category: "k11_englisch", question: "'The data __ that climate change is accelerating.'", answers: ["suggest", "suggests", "suggesting"], correct: 0, explanation: "'data' wird im wissenschaftlichen Englisch meist als Plural behandelt." },

    // --- Klasse 11 - Biologie ---
    { category: "k11_biologie", question: "Was ist die Funktion der Zellmembran?", answers: ["Sie regelt den Stoffaustausch der Zelle", "Sie speichert Erbgut", "Sie erzeugt Energie"], correct: 0, explanation: "Sie ist selektiv permeabel." },
    { category: "k11_biologie", question: "Was ist Enzymspezifität?", answers: ["Ein Enzym passt nur zu bestimmten Substraten", "Enzyme wirken überall gleich", "Enzyme werden verbraucht"], correct: 0, explanation: "Schlüssel-Schloss-Prinzip." },
    { category: "k11_biologie", question: "Was passiert bei der Zellatmung?", answers: ["Glucose wird unter Sauerstoff zu Energie abgebaut", "Zucker wird aufgebaut", "Wasser wird gespalten"], correct: 0, explanation: "Sie liefert ATP für die Zelle." },
    { category: "k11_biologie", question: "Was ist Osmose?", answers: ["Wasserbewegung durch eine halbdurchlässige Membran", "Aktiver Transport unter Einsatz von Energie", "Ein Enzym zur Spaltung von Wassermolekülen"], correct: 0, explanation: "Wasser wandert zur höheren Teilchenkonzentration." },

    // --- Klasse 11 - Chemie ---
    { category: "k11_chemie", question: "Was besagt das Prinzip von Le Chatelier?", answers: ["Ein Gleichgewicht weicht dem Zwang aus", "Reaktionen laufen immer vollständig ab", "Energie geht verloren"], correct: 0, explanation: "Auch Prinzip des kleinsten Zwanges genannt." },
    { category: "k11_chemie", question: "Was ist eine exotherme Reaktion?", answers: ["Sie gibt Energie ab", "Sie nimmt Energie auf", "Sie verändert nichts"], correct: 0, explanation: "Die Umgebung erwärmt sich." },
    { category: "k11_chemie", question: "Was ist die Aktivierungsenergie?", answers: ["Die Energie, die eine Reaktion zum Start braucht", "Die frei werdende Energie", "Die Gesamtenergie"], correct: 0, explanation: "Katalysatoren senken sie." },
    { category: "k11_chemie", question: "Was sind Alkohole chemisch gesehen?", answers: ["Verbindungen mit einer OH-Gruppe", "Verbindungen mit COOH", "Salze"], correct: 0, explanation: "Beispiel: Ethanol." },

    // --- Klasse 11 - Physik ---
    { category: "k11_physik", question: "Was ist eine gleichförmige Bewegung?", answers: ["Konstante Geschwindigkeit, keine Beschleunigung", "Ständig steigende Geschwindigkeit", "Stillstand"], correct: 0, explanation: "Der Weg-Zeit-Graph ist eine Gerade." },
    { category: "k11_physik", question: "Was ist der freie Fall?", answers: ["Bewegung nur unter Schwerkraft ohne Luftwiderstand", "Bewegung mit Motor", "Bewegung im Kreis"], correct: 0, explanation: "Auf der Erde etwa 9,81 m/s²." },
    { category: "k11_physik", question: "Was beschreibt die kinetische Energie?", answers: ["E = ½ m v²", "E = m g h", "E = m c²"], correct: 0, explanation: "Die Energie eines bewegten Körpers." },
    { category: "k11_physik", question: "Was ist die Zentripetalkraft?", answers: ["Die zum Kreismittelpunkt gerichtete Kraft", "Eine nach außen wirkende Kraft", "Die Schwerkraft"], correct: 0, explanation: "Sie hält einen Körper auf der Kreisbahn." },

    // --- Klasse 11 - Geschichte ---
    { category: "k11_geschichte", question: "Was war der Absolutismus?", answers: ["Herrschaftsform mit unbeschränkter Macht des Fürsten", "Eine Demokratie mit gewähltem Parlament", "Eine Republik mit begrenzter Amtszeit"], correct: 0, explanation: "Ludwig XIV. gilt als Musterbeispiel." },
    { category: "k11_geschichte", question: "Was ist eine historische Quelle?", answers: ["Ein Überrest oder Bericht aus der Vergangenheit", "Ein moderner Fachtext", "Eine Meinung"], correct: 0, explanation: "Man unterscheidet Primär- und Sekundärquellen." },
    { category: "k11_geschichte", question: "Was war der Wiener Kongress 1815?", answers: ["Neuordnung Europas nach Napoleon", "Gründung der EU", "Ein Friedensschluss 1945"], correct: 0, explanation: "Er ordnete Europa nach den Napoleonischen Kriegen neu." },
    { category: "k11_geschichte", question: "Was bedeutet Historizität?", answers: ["Die Gebundenheit an eine bestimmte Zeit", "Zeitlose Gültigkeit", "Ein Datum"], correct: 0, explanation: "Ereignisse müssen aus ihrer Zeit heraus verstanden werden." },

    // --- Klasse 11 - Sozialwissenschaften ---
    { category: "k11_sowi", question: "Was ist Sozialisation?", answers: ["Der Prozess des Hineinwachsens in die Gesellschaft", "Ein Gesetz zur Verteilung von Sozialleistungen", "Die Wahl der Vertreter einer Sozialbehörde"], correct: 0, explanation: "Familie, Schule und Medien sind Sozialisationsinstanzen." },
    { category: "k11_sowi", question: "Was ist eine Rolle im soziologischen Sinn?", answers: ["Erwartungen an eine soziale Position", "Eine Theaterfigur", "Ein Beruf"], correct: 0, explanation: "Zum Beispiel die Schüler- oder Elternrolle." },
    { category: "k11_sowi", question: "Was ist das Bruttoinlandsprodukt?", answers: ["Wert aller im Inland erzeugten Güter und Dienste", "Das Staatsvermögen", "Der Außenhandel"], correct: 0, explanation: "Ein zentraler Wohlstandsindikator." },
    { category: "k11_sowi", question: "Was sind Grundrechte?", answers: ["Rechte des Einzelnen gegenüber dem Staat", "Pflichten der Bürger", "Regeln der EU"], correct: 0, explanation: "Sie stehen in den Artikeln 1-19 des Grundgesetzes." },

    // --- Klasse 11 - Informatik ---
    { category: "k11_informatik", question: "Was ist ein Array?", answers: ["Eine Liste gleichartiger Werte", "Eine einzelne Zahl", "Ein Kommentar"], correct: 0, explanation: "Auf Elemente greift man über einen Index zu." },
    { category: "k11_informatik", question: "Was ist objektorientierte Programmierung?", answers: ["Programmierung mit Klassen und Objekten", "Nur Schleifen benutzen", "Programmieren ohne Variablen"], correct: 0, explanation: "Daten und Funktionen werden gebündelt." },
    { category: "k11_informatik", question: "Was ist eine Funktion in der Programmierung?", answers: ["Ein wiederverwendbarer Codeblock", "Eine Variable", "Ein Datentyp"], correct: 0, explanation: "Sie kann Parameter annehmen und Werte zurückgeben." },
    { category: "k11_informatik", question: "Was beschreibt die Laufzeit eines Algorithmus?", answers: ["Wie der Aufwand mit der Datenmenge wächst", "Wie lange der PC läuft", "Die Dateigröße"], correct: 0, explanation: "Angegeben z.B. in O-Notation." },

    // --- Klasse 12 - Deutsch ---
    { category: "k12_deutsch", question: "Was kennzeichnet den Sturm und Drang?", answers: ["Gefühl, Natur und Auflehnung gegen Regeln", "Strenge Vernunft", "Nüchterne Sachlichkeit"], correct: 0, explanation: "Goethes 'Die Leiden des jungen Werthers' ist typisch." },
    { category: "k12_deutsch", question: "Was ist die Weimarer Klassik?", answers: ["Streben nach Harmonie, Humanität und Maß", "Radikale Gefühlsbetonung", "Politische Satire"], correct: 0, explanation: "Hauptvertreter sind Goethe und Schiller." },
    { category: "k12_deutsch", question: "Was ist ein innerer Monolog?", answers: ["Ungefilterte Gedankenwiedergabe einer Figur", "Ein Dialog", "Eine Regieanweisung"], correct: 0, explanation: "Er gibt das Denken in der Ich-Form wieder." },
    { category: "k12_deutsch", question: "Was ist Expressionismus in der Literatur?", answers: ["Ausdruck innerer Zustände, oft verstörend", "Naturgetreue Abbildung", "Heitere Idylle"], correct: 0, explanation: "Typisch sind Großstadt-, Kriegs- und Weltuntergangsmotive." },

    // --- Klasse 12 - Mathematik ---
    { category: "k12_mathe", question: "Was ist die Stammfunktion von f(x) = 2x?", answers: ["x² + C", "2x + C", "x³ + C"], correct: 0, explanation: "Beim Integrieren steigt der Exponent um eins." },
    { category: "k12_mathe", question: "Was berechnet ein bestimmtes Integral?", answers: ["Die Fläche zwischen Graph und x-Achse", "Die Steigung", "Die Nullstelle"], correct: 0, explanation: "Zwischen den angegebenen Grenzen." },
    { category: "k12_mathe", question: "Was ist ein Wendepunkt?", answers: ["Punkt, an dem die Krümmung wechselt", "Der höchste Punkt", "Die Nullstelle"], correct: 0, explanation: "Dort gilt f''(x) = 0 mit Vorzeichenwechsel." },
    { category: "k12_mathe", question: "Was ist ein Vektor?", answers: ["Eine Größe mit Betrag und Richtung", "Nur eine Zahl", "Eine Fläche"], correct: 0, explanation: "Zum Beispiel Kraft oder Geschwindigkeit." },

    // --- Klasse 12 - Englisch ---
    { category: "k12_englisch", question: "Was ist 'globalisation' als Unterrichtsthema?", answers: ["Weltweite wirtschaftliche und kulturelle Verflechtung", "Ausschließlich der weltweite Tourismus", "Ausschließlich der Handel zwischen Nachbarländern"], correct: 0, explanation: "Chancen und Risiken werden diskutiert." },
    { category: "k12_englisch", question: "Was bedeutet 'melting pot'?", answers: ["Bild für die Vermischung von Kulturen", "Ein Kochtopf", "Ein Klimaphänomen"], correct: 0, explanation: "Klassisch auf die USA bezogen." },
    { category: "k12_englisch", question: "Was ist ein 'unreliable narrator'?", answers: ["Ein Erzähler, dem man nicht trauen kann", "Ein allwissender Erzähler", "Ein Ich-Erzähler"], correct: 0, explanation: "Seine Darstellung ist bewusst verzerrt." },
    { category: "k12_englisch", question: "Was bedeutet 'to tackle a problem'?", answers: ["ein Problem angehen", "ein Problem ignorieren", "ein Problem verursachen"], correct: 0, explanation: "'tackle' heißt anpacken." },

    // --- Klasse 12 - Biologie ---
    { category: "k12_biologie", question: "Was ist die Proteinbiosynthese?", answers: ["Herstellung von Proteinen nach DNA-Bauplan", "Abbau von Proteinen", "Zellteilung"], correct: 0, explanation: "Sie läuft in Transkription und Translation ab." },
    { category: "k12_biologie", question: "Was ist ein Neuron?", answers: ["Eine Nervenzelle", "Eine Muskelzelle", "Ein Hormon"], correct: 0, explanation: "Es leitet elektrische Signale weiter." },
    { category: "k12_biologie", question: "Was ist ein Aktionspotenzial?", answers: ["Kurzfristige Spannungsänderung an der Nervenzelle", "Eine dauerhafte Spannung entlang des Nervs", "Ein Enzym zur Übertragung von Reizen"], correct: 0, explanation: "So werden Reize weitergeleitet." },
    { category: "k12_biologie", question: "Was ist Selektion in der Evolution?", answers: ["Auslese der besser angepassten Individuen", "Zufällige Genveränderung", "Wanderung von Arten"], correct: 0, explanation: "Sie wirkt auf die vorhandene Variabilität." },

    // --- Klasse 12 - Chemie ---
    { category: "k12_chemie", question: "Was ist ein Puffersystem?", answers: ["Es hält den pH-Wert weitgehend konstant", "Es beschleunigt Reaktionen", "Es speichert Wärme"], correct: 0, explanation: "Wichtig zum Beispiel im Blut." },
    { category: "k12_chemie", question: "Was ist die Elektronegativität?", answers: ["Maß für die Anziehung von Bindungselektronen", "Die Ladung des Kerns", "Die Atommasse"], correct: 0, explanation: "Fluor hat den höchsten Wert." },
    { category: "k12_chemie", question: "Was sind Aminosäuren?", answers: ["Bausteine der Proteine mit NH2- und COOH-Gruppe", "Bausteine der Kohlenhydrate mit Ringstruktur", "Bausteine der Fette mit langer Kohlenstoffkette"], correct: 0, explanation: "20 proteinogene Aminosäuren sind bekannt." },
    { category: "k12_chemie", question: "Was passiert in einer galvanischen Zelle?", answers: ["Chemische Energie wird zu elektrischer Energie", "Strom erzwingt eine Reaktion", "Nichts"], correct: 0, explanation: "Das ist das Prinzip der Batterie." },

    // --- Klasse 12 - Physik ---
    { category: "k12_physik", question: "Was ist ein elektrisches Feld?", answers: ["Der Raum, in dem Kräfte auf Ladungen wirken", "Der Raum, in dem Kräfte auf Magnete wirken", "Ein geschlossener Stromkreis mit Widerstand"], correct: 0, explanation: "Feldlinien zeigen Richtung und Stärke." },
    { category: "k12_physik", question: "Was ist die Lorentzkraft?", answers: ["Kraft auf bewegte Ladungen im Magnetfeld", "Die Schwerkraft", "Die Reibungskraft"], correct: 0, explanation: "Sie steht senkrecht zu Bewegung und Feld." },
    { category: "k12_physik", question: "Was zeigt der Photoeffekt?", answers: ["Licht hat Teilchencharakter", "Licht ist nur eine Welle", "Licht hat keine Energie"], correct: 0, explanation: "Einstein erklärte ihn 1905 mit Lichtquanten." },
    { category: "k12_physik", question: "Was ist Interferenz?", answers: ["Überlagerung von Wellen", "Brechung von Licht", "Absorption"], correct: 0, explanation: "Wellen können sich verstärken oder auslöschen." },

    // --- Klasse 12 - Geschichte ---
    { category: "k12_geschichte", question: "Was war der Imperialismus?", answers: ["Streben der Großmächte nach Kolonien und Einfluss", "Eine Wirtschaftskrise", "Eine Kunstepoche"], correct: 0, explanation: "Vor allem im späten 19. Jahrhundert." },
    { category: "k12_geschichte", question: "Was war die Weltwirtschaftskrise ab 1929?", answers: ["Eine schwere globale Wirtschaftskrise", "Ein Krieg", "Eine Naturkatastrophe"], correct: 0, explanation: "Sie begann mit dem Börsencrash in New York." },
    { category: "k12_geschichte", question: "Was kennzeichnet eine Diktatur?", answers: ["Machtkonzentration ohne echte Gewaltenteilung", "Freie Wahlen", "Unabhängige Gerichte"], correct: 0, explanation: "Opposition und Presse werden unterdrückt." },
    { category: "k12_geschichte", question: "Was war der Marshallplan?", answers: ["US-Wirtschaftshilfe für Europa nach 1947", "Ein Kriegsplan", "Ein Handelsverbot"], correct: 0, explanation: "Er sollte den Wiederaufbau fördern." },

    // --- Klasse 12 - Sozialwissenschaften ---
    { category: "k12_sowi", question: "Was ist Konjunkturpolitik?", answers: ["Staatliche Steuerung des Wirtschaftsverlaufs", "Reine Steuererhöhung", "Nur Sparen"], correct: 0, explanation: "Zum Beispiel über Ausgaben oder Zinsen." },
    { category: "k12_sowi", question: "Was ist das magische Viereck?", answers: ["Wachstum, Preisstabilität, Beschäftigung, Außenbeitrag", "Vier Parteien mit gleicher Sitzzahl im Parlament", "Vier Gerichte mit gleicher Zuständigkeit"], correct: 0, explanation: "Ziele des Stabilitätsgesetzes von 1967." },
    { category: "k12_sowi", question: "Was ist soziale Ungleichheit?", answers: ["Ungleiche Verteilung von Chancen und Ressourcen", "Gleichbehandlung", "Ein Rechtsbegriff"], correct: 0, explanation: "Betrifft Einkommen, Bildung und Gesundheit." },
    { category: "k12_sowi", question: "Was ist eine repräsentative Demokratie?", answers: ["Das Volk wählt Vertreter, die entscheiden", "Das Volk entscheidet alles direkt", "Ein Monarch entscheidet"], correct: 0, explanation: "Deutschland ist eine repräsentative Demokratie." },

    // --- Klasse 12 - Informatik ---
    { category: "k12_informatik", question: "Was ist Rekursion?", answers: ["Eine Funktion ruft sich selbst auf", "Eine Endlosschleife", "Ein Datentyp"], correct: 0, explanation: "Sie braucht immer eine Abbruchbedingung." },
    { category: "k12_informatik", question: "Was ist eine verkettete Liste?", answers: ["Datenstruktur, in der Elemente aufeinander verweisen", "Ein Array fester Größe", "Eine Datenbank"], correct: 0, explanation: "Jedes Element kennt seinen Nachfolger." },
    { category: "k12_informatik", question: "Was ist ein Binärbaum?", answers: ["Baumstruktur mit maximal zwei Kindknoten", "Eine Liste mit genau zwei Einträgen", "Ein Kreis aus zwei verbundenen Knoten"], correct: 0, explanation: "Wichtig für effizientes Suchen und Sortieren." },
    { category: "k12_informatik", question: "Was ist Datenkapselung?", answers: ["Interne Daten werden vor direktem Zugriff geschützt", "Daten werden gelöscht", "Daten werden kopiert"], correct: 0, explanation: "Zugriff erfolgt über definierte Methoden." },

    // --- Klasse 13 - Deutsch (Abitur) ---
    { category: "k13_deutsch", question: "Was ist ein episches Theater nach Brecht?", answers: ["Theater, das zum Nachdenken statt Mitfühlen anregt", "Klassisches Illusionstheater", "Ein Musical"], correct: 0, explanation: "Mit Verfremdungseffekten wird Distanz erzeugt." },
    { category: "k13_deutsch", question: "Was ist Intertextualität?", answers: ["Bezüge eines Textes auf andere Texte", "Die Textlänge", "Die Grammatik"], correct: 0, explanation: "Zitate und Anspielungen erzeugen Bedeutung." },
    { category: "k13_deutsch", question: "Was ist ein Sonett?", answers: ["Gedichtform mit 14 Versen", "Ein Roman", "Ein Drama"], correct: 0, explanation: "Typisch sind zwei Quartette und zwei Terzette." },
    { category: "k13_deutsch", question: "Was untersucht eine Sprachursprungstheorie?", answers: ["Wie menschliche Sprache entstanden ist", "Die Rechtschreibung", "Fremdwörter"], correct: 0, explanation: "Herder ist ein bekannter Vertreter." },

    // --- Klasse 13 - Mathematik (Abitur) ---
    { category: "k13_mathe", question: "Wie berechnet man das Skalarprodukt zweier Vektoren?", answers: ["Komponentenweise multiplizieren und addieren", "Komponenten subtrahieren", "Beträge multiplizieren"], correct: 0, explanation: "Ist es null, stehen die Vektoren senkrecht zueinander." },
    { category: "k13_mathe", question: "Was beschreibt die Binomialverteilung?", answers: ["Wahrscheinlichkeit von Treffern bei n Versuchen", "Stetige Messwerte", "Die Ableitung"], correct: 0, explanation: "Zum Beispiel Münzwürfe mit zwei Ausgängen." },
    { category: "k13_mathe", question: "Was ist die Normalverteilung?", answers: ["Eine glockenförmige stetige Verteilung", "Eine Gerade", "Eine Treppenfunktion"], correct: 0, explanation: "Beschreibt viele natürliche Messgrößen." },
    { category: "k13_mathe", question: "Was ist eine Ebenengleichung in Parameterform?", answers: ["Ortsvektor plus zwei Spannvektoren", "Nur ein Punkt", "Eine Zahl"], correct: 0, explanation: "E: x = a + r·u + s·v." },

    // --- Klasse 13 - Englisch (Abitur) ---
    { category: "k13_englisch", question: "Was ist 'the American Dream'?", answers: ["Die Vorstellung, durch Leistung aufsteigen zu können", "Ein Feiertag zum Gedenken der Einwanderung", "Ein berühmter Roman über den Bürgerkrieg"], correct: 0, explanation: "Ein zentrales Abiturthema mit kritischer Betrachtung." },
    { category: "k13_englisch", question: "Was ist 'postcolonialism'?", answers: ["Auseinandersetzung mit den Folgen des Kolonialismus", "Eine Kunstepoche", "Ein Wirtschaftsmodell"], correct: 0, explanation: "Themen sind Identität, Macht und Sprache." },
    { category: "k13_englisch", question: "Was ist eine 'analysis of a cartoon'?", answers: ["Beschreibung und Deutung einer Karikatur", "Eine Nacherzählung", "Eine Übersetzung"], correct: 0, explanation: "Man beschreibt zuerst, deutet dann die Aussage." },
    { category: "k13_englisch", question: "Was bedeutet 'to jeopardise'?", answers: ["gefährden", "unterstützen", "beschleunigen"], correct: 0, explanation: "'jeopardise' heißt aufs Spiel setzen." },

    // --- Klasse 13 - Biologie (Abitur) ---
    { category: "k13_biologie", question: "Was ist die Genregulation?", answers: ["Steuerung, welche Gene abgelesen werden", "Die Zellteilung", "Der Stoffwechsel"], correct: 0, explanation: "Das Operon-Modell beschreibt sie bei Bakterien." },
    { category: "k13_biologie", question: "Was ist ein Stoffkreislauf?", answers: ["Weg eines Stoffes durch das Ökosystem", "Ein einmaliger Verbrauch", "Eine Nahrungskette"], correct: 0, explanation: "Beispiel: Kohlenstoff- oder Stickstoffkreislauf." },
    { category: "k13_biologie", question: "Was ist die PCR?", answers: ["Verfahren zur Vervielfältigung von DNA", "Ein Verfahren zur Impfung gegen Viren", "Ein Mikroskop zur Betrachtung von DNA"], correct: 0, explanation: "Polymerase-Kettenreaktion, wichtig in der Diagnostik." },
    { category: "k13_biologie", question: "Was ist Homologie?", answers: ["Ähnlichkeit durch gemeinsame Abstammung", "Ähnlichkeit durch gleiche Funktion", "Ein Zufall"], correct: 0, explanation: "Analogie dagegen entsteht durch gleiche Anpassung." },

    // --- Klasse 13 - Chemie (Abitur) ---
    { category: "k13_chemie", question: "Was ist eine Titration?", answers: ["Maßanalyse zur Konzentrationsbestimmung", "Ein Filterverfahren", "Eine Destillation"], correct: 0, explanation: "Man gibt eine Maßlösung bis zum Äquivalenzpunkt zu." },
    { category: "k13_chemie", question: "Was sind Kunststoffe chemisch?", answers: ["Polymere aus vielen Monomeren", "Legierungen aus mehreren Metallen", "Kristalline Salze aus Ionenbindungen"], correct: 0, explanation: "Beispiel: Polyethylen aus Ethen." },
    { category: "k13_chemie", question: "Was ist die Nernst-Gleichung nützlich für?", answers: ["Berechnung von Elektrodenpotenzialen", "Berechnung der Masse", "Berechnung des Volumens"], correct: 0, explanation: "Sie berücksichtigt Konzentrationen." },
    { category: "k13_chemie", question: "Was ist ein Aromat in der Chemie?", answers: ["Ringförmige Verbindung wie Benzol", "Ein Duftstoff allgemein", "Ein Salz"], correct: 0, explanation: "Aromaten haben ein delokalisiertes Elektronensystem." },

    // --- Klasse 13 - Physik (Abitur) ---
    { category: "k13_physik", question: "Was besagt die Heisenbergsche Unschärferelation?", answers: ["Ort und Impuls sind nicht gleichzeitig exakt bestimmbar", "Energie geht verloren", "Licht ist nur eine Welle"], correct: 0, explanation: "Ein Grundprinzip der Quantenphysik." },
    { category: "k13_physik", question: "Was ist der Welle-Teilchen-Dualismus?", answers: ["Objekte zeigen je nach Versuch Wellen- oder Teilchencharakter", "Alles ist nur Welle", "Alles ist nur Teilchen"], correct: 0, explanation: "Gilt für Licht und für Materie." },
    { category: "k13_physik", question: "Was ist Kernfusion?", answers: ["Verschmelzung leichter Kerne unter Energiefreisetzung", "Spaltung schwerer Kerne", "Radioaktiver Zerfall"], correct: 0, explanation: "Sie liefert die Energie der Sonne." },
    { category: "k13_physik", question: "Was beschreibt die spezielle Relativitätstheorie?", answers: ["Raum und Zeit hängen vom Bezugssystem ab", "Nur die Schwerkraft", "Nur Magnetismus"], correct: 0, explanation: "Einstein veröffentlichte sie 1905." },

    // --- Klasse 13 - Geschichte (Abitur) ---
    { category: "k13_geschichte", question: "Was war die deutsche Teilung?", answers: ["Trennung in BRD und DDR von 1949 bis 1990", "Die Reichsteilung 1871", "Ein Kolonialkonflikt"], correct: 0, explanation: "Sie endete mit der Wiedervereinigung 1990." },
    { category: "k13_geschichte", question: "Was ist Vergangenheitsbewältigung?", answers: ["Auseinandersetzung mit der NS-Zeit und ihren Folgen", "Vergessen der Geschichte", "Eine Geschichtsschreibung ohne Quellen"], correct: 0, explanation: "Erinnerungskultur ist ein zentrales Abiturthema." },
    { category: "k13_geschichte", question: "Was war die europäische Integration?", answers: ["Der Zusammenschluss europäischer Staaten seit 1951", "Die Teilung Europas", "Ein Handelskrieg"], correct: 0, explanation: "Von der Montanunion bis zur heutigen EU." },
    { category: "k13_geschichte", question: "Was versteht man unter Modernisierung in der Geschichte?", answers: ["Wandel zu Industrie, Urbanisierung und Demokratie", "Rückkehr zur Landwirtschaft", "Nur technischer Fortschritt"], correct: 0, explanation: "Ein umfassender gesellschaftlicher Wandlungsprozess." },

    // --- Klasse 13 - Sozialwissenschaften (Abitur) ---
    { category: "k13_sowi", question: "Was sind die Institutionen der EU?", answers: ["Kommission, Parlament, Rat und Gerichtshof", "Nur das Parlament", "Nur die Kommission"], correct: 0, explanation: "Sie teilen sich Gesetzgebung und Kontrolle." },
    { category: "k13_sowi", question: "Was ist Globalisierungskritik?", answers: ["Hinterfragen der Folgen weltweiter Verflechtung", "Ablehnung jeden Handels", "Eine Partei"], correct: 0, explanation: "Themen sind Arbeitsbedingungen, Umwelt und Ungleichheit." },
    { category: "k13_sowi", question: "Was ist der Sozialstaat?", answers: ["Staat mit Verantwortung für soziale Sicherheit", "Staat ohne Steuern", "Staat ohne Gesetze"], correct: 0, explanation: "Im Grundgesetz als Sozialstaatsprinzip verankert." },
    { category: "k13_sowi", question: "Was ist internationale Friedenssicherung?", answers: ["Konfliktverhütung durch Institutionen wie die UNO", "Aufrüstung zur Abschreckung möglicher Gegner", "Handelsblockaden gegen unliebsame Staaten"], correct: 0, explanation: "Die UNO wurde 1945 dafür gegründet." },

    // --- Klasse 13 - Informatik (Abitur) ---
    { category: "k13_informatik", question: "Was ist ein Sortieralgorithmus?", answers: ["Verfahren, um Daten in eine Reihenfolge zu bringen", "Ein Speichermedium", "Ein Netzwerkprotokoll"], correct: 0, explanation: "Beispiele: Bubblesort, Quicksort, Mergesort." },
    { category: "k13_informatik", question: "Was bedeutet O(n log n)?", answers: ["Eine Aufwandsklasse effizienter Sortierverfahren", "Ein Speicherplatz", "Eine Fehlermeldung"], correct: 0, explanation: "Quicksort und Mergesort liegen im Mittel dort." },
    { category: "k13_informatik", question: "Was ist ein endlicher Automat?", answers: ["Modell mit Zuständen und Übergängen", "Ein Roboter mit begrenzter Rechenleistung", "Ein Computer mit festem Arbeitsspeicher"], correct: 0, explanation: "Grundlage für Sprach- und Mustererkennung." },
    { category: "k13_informatik", question: "Was ist Kryptografie?", answers: ["Die Lehre vom Verschlüsseln von Informationen", "Datenkompression", "Bildbearbeitung"], correct: 0, explanation: "Man unterscheidet symmetrische und asymmetrische Verfahren." },

    // --- KFZ-Mechatronik (Berufsschule) ---
    { category: "beruf_kfz", question: "Wofür steht die Abkürzung ABS?", answers: ["Anti-Blockier-System", "Automatik-Brems-Sensor", "Achsen-Balance-Steuerung"], correct: 0, explanation: "ABS verhindert das Blockieren der Räder beim Bremsen." },
    { category: "beruf_kfz", question: "Was ist die Aufgabe des Turboladers?", answers: ["Die angesaugte Luft verdichten", "Kraftstoff einspritzen", "Öl kühlen"], correct: 0, explanation: "Mehr Sauerstoff im Zylinder bedeutet mehr Leistung." },
    { category: "beruf_kfz", question: "Wofür steht OBD?", answers: ["On-Board-Diagnose", "Öl-Behälter-Druck", "Ohm-Bemessungs-Daten"], correct: 0, explanation: "Sie überwacht abgasrelevante Systeme und speichert Fehlercodes." },
    { category: "beruf_kfz", question: "Wie viele Takte hat ein klassischer Ottomotor?", answers: ["2", "4", "6"], correct: 1, explanation: "Ansaugen, Verdichten, Arbeiten, Ausstoßen." },
    { category: "beruf_kfz", question: "Was bedeutet '205/55 R16' beim Reifen?", answers: ["Breite in mm, Höhe in %, Felge in Zoll", "Luftdruck und Gewicht", "Herstellungsjahr"], correct: 0, explanation: "205 mm breit, Verhältnis 55 %, 16 Zoll Felge." },
    { category: "beruf_kfz", question: "Was ist die Aufgabe der Lambdasonde?", answers: ["Restsauerstoff im Abgas messen", "Den Motor kühlen", "Den Zündfunken erzeugen"], correct: 0, explanation: "Damit wird das Kraftstoff-Luft-Gemisch geregelt." },
    { category: "beruf_kfz", question: "Wofür steht ESP?", answers: ["Elektronisches Stabilitätsprogramm", "Extra Sicherheits-Paket", "Elektro-Servo-Pumpe"], correct: 0, explanation: "ESP bremst gezielt einzelne Räder ab." },
    { category: "beruf_kfz", question: "Welche Aufgabe hat der Katalysator?", answers: ["Schadstoffe im Abgas umwandeln", "Kraftstoff filtern", "Öl reinigen"], correct: 0, explanation: "Er wandelt CO, HC und NOx in weniger schädliche Stoffe um." },
    { category: "beruf_kfz", question: "Wozu dient der Ölfilter?", answers: ["Er reinigt das Motoröl", "Er kühlt den Motor", "Er filtert die Ansaugluft"], correct: 0, explanation: "Er hält Abrieb und Schmutzpartikel zurück." },
    { category: "beruf_kfz", question: "Was bewirkt ein Stoßdämpfer?", answers: ["Er dämpft die Schwingungen der Feder", "Er trägt das Gewicht allein", "Er lenkt die Räder"], correct: 0, explanation: "Ohne ihn würde das Auto dauerhaft nachwippen." },

    // ============ SPASS-BEREICH (kein Schulstoff) ============
    // --- SPASS: Allgemeinwissen ---
    { category: "spass_allgemein", question: "Wie viele Tage hat ein Schaltjahr?", answers: ["364", "365", "366"], correct: 2, explanation: "Ein Schaltjahr hat den 29. Februar zusätzlich." },
    { category: "spass_allgemein", question: "Welche Farbe entsteht aus Blau und Gelb?", answers: ["Grün", "Lila", "Orange"], correct: 0, explanation: "Blau und Gelb ergeben Grün." },
    { category: "spass_allgemein", question: "Welches Tier gilt als schnellstes Landtier?", answers: ["Löwe", "Gepard", "Pferd"], correct: 1, explanation: "Der Gepard erreicht kurzzeitig über 100 km/h." },
    { category: "spass_allgemein", question: "Wie viele Beine hat eine Spinne?", answers: ["6", "8", "10"], correct: 1, explanation: "Spinnen haben acht Beine, Insekten sechs." },
    { category: "spass_allgemein", question: "In welchem Land steht der Eiffelturm?", answers: ["Italien", "Frankreich", "Spanien"], correct: 1, explanation: "Er steht in Paris." },
    { category: "spass_allgemein", question: "Welches ist das größte Tier der Welt?", answers: ["Elefant", "Blauwal", "Giraffe"], correct: 1, explanation: "Der Blauwal wird bis zu 30 Meter lang." },
    { category: "spass_allgemein", question: "Wie viele Farben hat ein klassischer Regenbogen?", answers: ["5", "7", "9"], correct: 1, explanation: "Rot, Orange, Gelb, Grün, Blau, Indigo, Violett." },
    { category: "spass_allgemein", question: "Wie viele Ringe hat das olympische Symbol?", answers: ["4", "5", "6"], correct: 1, explanation: "Die fünf Ringe stehen für die bewohnten Kontinente." },
    { category: "spass_allgemein", question: "Wie heißt die Hauptstadt von Südkorea?", answers: ["Busan", "Seoul", "Incheon"], correct: 1, explanation: "Seoul ist die größte Stadt des Landes." },
    { category: "spass_allgemein", question: "Wie viele Spieler stehen beim Fußball pro Mannschaft auf dem Feld?", answers: ["9", "10", "11"], correct: 2, explanation: "Elf Spieler inklusive Torwart." },
    { category: "spass_allgemein", question: "Wie viele Saiten hat eine klassische Gitarre?", answers: ["4", "6", "8"], correct: 1, explanation: "Eine klassische Gitarre hat sechs Saiten." },
    { category: "spass_allgemein", question: "Welches Land ist flächenmäßig das größte der Welt?", answers: ["China", "Russland", "Kanada"], correct: 1, explanation: "Russland umfasst rund 17 Millionen km²." },

    // --- SPASS: Schätzfragen & Würdest du eher ---
    { category: "spass_wuerdest_du", question: "Was würden die meisten eher tun – einen Popel essen oder Fallschirmspringen?", answers: ["Popel essen 🤢", "Fallschirmspringen 🪂", "Beides auf keinen Fall!"], correct: 1, explanation: "😄 Die meisten würden wohl eher springen als naschen." },
    { category: "spass_wuerdest_du", question: "Was wählen die meisten: Ketchup oder Senf für immer?", answers: ["Ketchup 🍅", "Senf 🌭", "Lieber gar nichts"], correct: 0, explanation: "😄 Ketchup gewinnt in Umfragen fast immer." },
    { category: "spass_wuerdest_du", question: "Welche Superkraft wünschen sich die meisten?", answers: ["Fliegen ✈️", "Unsichtbarkeit 👻", "Keine davon"], correct: 0, explanation: "😄 Fliegen liegt meist knapp vorn." },
    { category: "spass_wuerdest_du", question: "Was mögen die meisten Menschen lieber: Hunde oder Katzen?", answers: ["Hunde 🐕", "Katzen 🐈", "Beide gleich"], correct: 0, explanation: "😄 Hunde liegen als Lieblingshaustier meist vorn." },
    { category: "spass_wuerdest_du", question: "Was ist bei Kindern beliebter: Pizza oder Pommes?", answers: ["Pizza 🍕", "Pommes 🍟", "Beides zusammen"], correct: 0, explanation: "😄 Pizza landet fast immer auf Platz 1." },
    { category: "spass_wuerdest_du", question: "Wo würden die meisten lieber für immer leben?", answers: ["Immer Sommer ☀️", "Immer Winter ❄️", "Alle vier Jahreszeiten"], correct: 0, explanation: "😄 Der Sommer gewinnt weltweit deutlich." },
    { category: "spass_wuerdest_du", question: "Worauf würden die meisten eher eine Woche verzichten?", answers: ["Auf das Handy 📵", "Auf Süßigkeiten 🍭", "Auf beides nicht"], correct: 1, explanation: "😄 Das Handy fällt den meisten schwerer wegzudenken." },
    { category: "spass_wuerdest_du", question: "Riesige Hände oder riesige Füße – was ist die ehrlichste Antwort?", answers: ["Riesige Hände 🖐️", "Riesige Füße 🦶", "Weder noch, bitte!"], correct: 2, explanation: "😄 Beides klingt nach Problemen beim Schuhkauf." },

    // --- SPASS: Nice to Know ---
    { category: "spass_nice_to_know", question: "Wie viele Herzen hat ein Oktopus?", answers: ["1", "3", "8"], correct: 1, explanation: "Zwei für die Kiemen, eins für den restlichen Körper." },
    { category: "spass_nice_to_know", question: "Welches Tier schläft am meisten am Tag?", answers: ["Koala", "Elefant", "Löwe"], correct: 0, explanation: "Koalas schlafen bis zu 20 Stunden täglich." },
    { category: "spass_nice_to_know", question: "Kann Honig schlecht werden?", answers: ["Ja, nach Monaten", "Nein, praktisch unbegrenzt haltbar", "Nur geöffnet"], correct: 1, explanation: "In ägyptischen Gräbern fand man noch genießbaren Honig." },
    { category: "spass_nice_to_know", question: "Wie lange braucht Sonnenlicht bis zur Erde?", answers: ["8 Sekunden", "8 Minuten", "8 Stunden"], correct: 1, explanation: "Etwa 8 Minuten und 20 Sekunden." },
    { category: "spass_nice_to_know", question: "Welche Farbe hat das Blut eines Oktopus?", answers: ["Rot", "Blau", "Grün"], correct: 1, explanation: "Es enthält Kupfer statt Eisen." },
    { category: "spass_nice_to_know", question: "Wie viele Knochen hat ein erwachsener Mensch?", answers: ["106", "206", "306"], correct: 1, explanation: "Babys haben rund 300, viele wachsen zusammen." },
    { category: "spass_nice_to_know", question: "Wie viele Sprachen gibt es schätzungsweise weltweit?", answers: ["etwa 700", "etwa 3.000", "über 7.000"], correct: 2, explanation: "Viele davon sind vom Aussterben bedroht." },
    { category: "spass_nice_to_know", question: "Welches Körperteil wächst ein Leben lang weiter?", answers: ["Nase und Ohren", "Die Füße", "Die Zähne"], correct: 0, explanation: "Sie bestehen aus Knorpel." },
    { category: "spass_nice_to_know", question: "Wie viel Prozent der Erdoberfläche sind Wasser?", answers: ["etwa 50 %", "etwa 71 %", "etwa 90 %"], correct: 1, explanation: "Rund 71 % sind von Wasser bedeckt." },
    { category: "spass_nice_to_know", question: "Welches Tier hat den größten Augapfel?", answers: ["Elefant", "Riesenkalmar", "Blauwal"], correct: 1, explanation: "Bis zu 27 cm Durchmesser." },

    // --- SPASS: Ungewöhnliches aus der Welt ---
    { category: "spass_welt", question: "In welchem Land ist der Verkauf von Kaugummi stark eingeschränkt?", answers: ["Japan", "Singapur", "Norwegen"], correct: 1, explanation: "Singapur verbot ihn 1992 aus Sauberkeitsgründen." },
    { category: "spass_welt", question: "Welche deutsche Stadt hat mehr Brücken als Venedig, Amsterdam und London zusammen?", answers: ["Berlin", "Hamburg", "Köln"], correct: 1, explanation: "Hamburg hat rund 2.500 Brücken." },
    { category: "spass_welt", question: "Wie lange dauerte der kürzeste Krieg der Geschichte?", answers: ["ca. 38 Minuten", "ca. 3 Tage", "ca. 3 Wochen"], correct: 0, explanation: "Der Anglo-Sansibar-Krieg von 1896." },
    { category: "spass_welt", question: "In welchem Land leben mehr Schafe als Menschen?", answers: ["Neuseeland", "Irland", "Schottland"], correct: 0, explanation: "Etwa fünfmal so viele Schafe wie Menschen." },
    { category: "spass_welt", question: "Welches Land besteht aus über 17.000 Inseln?", answers: ["Philippinen", "Indonesien", "Japan"], correct: 1, explanation: "Nur etwa 6.000 davon sind bewohnt." },
    { category: "spass_welt", question: "Welche Farbe hatten Karotten ursprünglich?", answers: ["Lila", "Weiß", "Grün"], correct: 0, explanation: "Orange Karotten wurden erst im 17. Jahrhundert gezüchtet." },
    { category: "spass_welt", question: "Wie viele Zeitzonen hat Russland?", answers: ["5", "8", "11"], correct: 2, explanation: "Mehr als jedes andere Land." },
    { category: "spass_welt", question: "Wie viele Zeitzonen nutzt China trotz seiner Größe?", answers: ["1", "3", "5"], correct: 0, explanation: "Landesweit gilt nur eine einzige Zeitzone." },
    { category: "spass_welt", question: "Welches Land verbraucht pro Kopf am meisten Schokolade?", answers: ["Schweiz", "Belgien", "Deutschland"], correct: 0, explanation: "Die Schweiz liegt regelmäßig an der Spitze." },
    { category: "spass_welt", question: "In welchem Land geht die Sonne im Sommer wochenlang nicht unter?", answers: ["Norwegen", "Portugal", "Griechenland"], correct: 0, explanation: "Nördlich des Polarkreises: die Mitternachtssonne." },

    // --- SPASS: Sport & Film ---
    { category: "spass_sport_film", question: "Wie heißt der Wettkampf aus Schwimmen, Radfahren und Laufen?", answers: ["Triathlon", "Biathlon", "Pentathlon"], correct: 0, explanation: "Drei Ausdauersportarten hintereinander." },
    { category: "spass_sport_film", question: "Wie heißt die gelbe Karte im Fußball auch?", answers: ["Verwarnung", "Platzverweis", "Elfmeter"], correct: 0, explanation: "Erst Rot führt zum Platzverweis." },
    { category: "spass_sport_film", question: "Wie viele Runden hat ein WM-Boxkampf maximal?", answers: ["8", "12", "15"], correct: 1, explanation: "Heute sind es maximal 12 Runden." },
    { category: "spass_sport_film", question: "In welcher Sportart gibt es einen 'Slam Dunk'?", answers: ["Basketball", "Volleyball", "Handball"], correct: 0, explanation: "Der Ball wird direkt in den Korb gestopft." },
    { category: "spass_sport_film", question: "Welcher japanische Regisseur drehte 'Die sieben Samurai'?", answers: ["Hayao Miyazaki", "Akira Kurosawa", "Takeshi Kitano"], correct: 1, explanation: "Kurosawa gilt als einer der einflussreichsten Regisseure." },
    { category: "spass_sport_film", question: "Welche Kampfkunst prägt viele thailändische Actionfilme?", answers: ["Muay Thai", "Karate", "Judo"], correct: 0, explanation: "Muay Thai ist die traditionelle Kampfkunst Thailands." },
    { category: "spass_sport_film", question: "Wie lange dauert ein Fußballspiel der F-Jugend meist?", answers: ["2 × 45 Minuten", "2 × 20 Minuten", "3 × 15 Minuten"], correct: 1, explanation: "Im Kleinfeldfußball wird kürzer gespielt." },
    { category: "spass_sport_film", question: "In welchem Land entstehen die Martial-Arts-Filme mit Don Lee?", answers: ["Japan", "Südkorea", "China"], correct: 1, explanation: "Don Lee ist ein koreanisch-amerikanischer Schauspieler." },

    // --- ERGAENZUNG OBERSTUFE (Klasse 11-13) ---
    { category: "k11_deutsch", question: "Was ist ein Leitmotiv in einem literarischen Werk?", answers: ["Ein wiederkehrendes Motiv mit besonderer Bedeutung", "Der erste Satz eines Textes", "Die Biografie des Autors"], correct: 0, explanation: "Leitmotive tauchen mehrfach auf und tragen zur Deutung des Werks bei." },
    { category: "k11_deutsch", question: "Was ist eine auktoriale Erzählperspektive?", answers: ["Ein allwissender Erzähler außerhalb der Handlung", "Ein Erzähler als Figur der Handlung", "Ein Erzähler ohne jede Wertung"], correct: 0, explanation: "Der auktoriale Erzähler kennt Gedanken aller Figuren und kommentiert das Geschehen." },
    { category: "k11_deutsch", question: "Was kennzeichnet einen Konflikt im Drama?", answers: ["Der Gegensatz gegnerischer Kräfte oder Interessen", "Die Anzahl der Akte", "Die Länge der Regieanweisungen"], correct: 0, explanation: "Der Konflikt treibt die dramatische Handlung an und steuert auf einen Höhepunkt zu." },
    { category: "k11_deutsch", question: "Was ist ein Vergleich als sprachliches Mittel?", answers: ["Eine Gegenüberstellung mit 'wie' oder 'als'", "Eine Übertreibung", "Eine Frage ohne Antwort"], correct: 0, explanation: "Anders als die Metapher benennt der Vergleich das Vergleichswort ausdrücklich." },

    { category: "k11_mathe", question: "Wie lautet die Produktregel der Ableitung?", answers: ["(u·v)' = u'·v + u·v'", "(u·v)' = u'·v'", "(u·v)' = u' + v'"], correct: 0, explanation: "Produktregel: Ableitung des ersten mal zweiter plus erster mal Ableitung des zweiten." },
    { category: "k11_mathe", question: "Was ist die Ableitung von f(x) = sin(x)?", answers: ["cos(x)", "-cos(x)", "-sin(x)"], correct: 0, explanation: "Die Ableitung von sin(x) ist cos(x), die von cos(x) ist -sin(x)." },
    { category: "k11_mathe", question: "Was beschreibt die Monotonie einer Funktion?", answers: ["Ob sie steigt oder fällt", "Ihre Nullstellen", "Ihren Definitionsbereich"], correct: 0, explanation: "Ist f'(x) > 0, steigt die Funktion streng monoton; bei f'(x) < 0 fällt sie." },
    { category: "k11_mathe", question: "Was ist eine Nullstelle einer Funktion?", answers: ["Eine Stelle x mit f(x) = 0", "Der höchste Funktionswert", "Die Steigung im Ursprung"], correct: 0, explanation: "An einer Nullstelle schneidet oder berührt der Graph die x-Achse." },

    { category: "k11_englisch", question: "Was ist ein 'summary' im Englischunterricht?", answers: ["Eine sachliche Zusammenfassung im Present Tense", "Eine persönliche Meinung", "Eine wörtliche Übersetzung"], correct: 0, explanation: "Eine summary gibt den Inhalt sachlich, im Präsens und in eigenen Worten wieder." },
    { category: "k11_englisch", question: "'If I had known, I ___ differently.'", answers: ["would have acted", "will act", "would act"], correct: 0, explanation: "If-Clause Typ 3: Past Perfect im Nebensatz, 'would have' + Partizip im Hauptsatz." },
    { category: "k11_englisch", question: "Was bedeutet 'to be in favour of something'?", answers: ["Für etwas sein", "Gegen etwas sein", "Etwas verbieten"], correct: 0, explanation: "'to be in favour of' heißt, etwas zu befürworten." },
    { category: "k11_englisch", question: "Was ist 'characterisation' in der Textarbeit?", answers: ["Die Beschreibung einer Figur mit Belegen aus dem Text", "Die Nacherzählung der Handlung", "Die Biografie des Autors"], correct: 0, explanation: "Eine characterisation beschreibt Aussehen, Verhalten und Entwicklung einer Figur, belegt am Text." },

    { category: "k11_biologie", question: "Was ist die Aufgabe der Mitochondrien?", answers: ["Energiegewinnung durch Zellatmung (ATP)", "Speicherung der Erbinformation", "Proteinabbau"], correct: 0, explanation: "In den Mitochondrien wird über die Atmungskette der Energieträger ATP hergestellt." },
    { category: "k11_biologie", question: "Was beschreibt das Schlüssel-Schloss-Prinzip?", answers: ["Die passgenaue Bindung von Substrat und Enzym", "Den Zellzyklus", "Den Blutkreislauf"], correct: 0, explanation: "Nur ein räumlich passendes Substrat bindet an das aktive Zentrum des Enzyms." },
    { category: "k11_biologie", question: "Was ist Diffusion?", answers: ["Der Ausgleich von Konzentrationsunterschieden ohne Energieaufwand", "Aktiver Transport gegen ein Gefälle", "Die Zellteilung"], correct: 0, explanation: "Teilchen bewegen sich von hoher zu niedriger Konzentration – ein passiver Vorgang." },
    { category: "k11_biologie", question: "Wovon hängt die Enzymaktivität besonders stark ab?", answers: ["Von Temperatur und pH-Wert", "Nur von der Tageszeit", "Von der Farbe des Substrats"], correct: 0, explanation: "Jedes Enzym hat ein Temperatur- und pH-Optimum; darüber hinaus denaturiert es." },

    { category: "k11_chemie", question: "Was ist eine Redoxreaktion?", answers: ["Eine Reaktion mit Elektronenübergang", "Eine reine Wärmeabgabe", "Eine Zustandsänderung ohne Stoffumwandlung"], correct: 0, explanation: "Oxidation ist Elektronenabgabe, Reduktion Elektronenaufnahme – beides läuft gekoppelt ab." },
    { category: "k11_chemie", question: "Was ist eine Elektronenpaarbindung?", answers: ["Zwei Atome teilen sich ein Elektronenpaar", "Ein Elektron wird vollständig übertragen", "Zwei Ionen ziehen sich an"], correct: 0, explanation: "Die Atombindung entsteht durch gemeinsam genutzte Elektronenpaare zwischen Nichtmetallen." },
    { category: "k11_chemie", question: "Was besagt die Oktettregel?", answers: ["Atome streben acht Außenelektronen an", "Jedes Molekül hat acht Atome", "Es gibt acht Bindungsarten"], correct: 0, explanation: "Atome erreichen durch Bindungen die stabile Edelgaskonfiguration mit acht Außenelektronen." },
    { category: "k11_chemie", question: "Was ist ein Katalysator im Energiediagramm?", answers: ["Ein Stoff, der die Aktivierungsenergie senkt", "Ein Stoff, der die Reaktionswärme erhöht", "Ein Endprodukt der Reaktion"], correct: 0, explanation: "Der Katalysator senkt die Aktivierungsenergie, ohne selbst verbraucht zu werden." },

    { category: "k11_physik", question: "Was besagt der Impulserhaltungssatz?", answers: ["Der Gesamtimpuls bleibt in einem abgeschlossenen System konstant", "Impuls wandelt sich immer in Wärme um", "Impuls nimmt mit der Zeit ab"], correct: 0, explanation: "Ohne äußere Kräfte bleibt die Summe aller Impulse (m·v) erhalten – wichtig bei Stößen." },
    { category: "k11_physik", question: "Was beschreibt die potentielle Energie im Schwerefeld?", answers: ["E = m·g·h", "E = ½·m·v²", "E = U·I"], correct: 0, explanation: "Die Lageenergie hängt von Masse, Ortsfaktor und Höhe ab." },
    { category: "k11_physik", question: "Was ist eine beschleunigte Bewegung?", answers: ["Eine Bewegung mit sich ändernder Geschwindigkeit", "Eine Bewegung mit konstanter Geschwindigkeit", "Ein Zustand der Ruhe"], correct: 0, explanation: "Beschleunigung ist die Änderung der Geschwindigkeit pro Zeit (a = Δv/Δt)." },
    { category: "k11_physik", question: "Was ist der Wirkungsgrad einer Maschine?", answers: ["Das Verhältnis von nutzbarer zu zugeführter Energie", "Die Leistung in Watt", "Die Betriebsdauer"], correct: 0, explanation: "Der Wirkungsgrad ist immer kleiner als 1, da stets Energie als Wärme verloren geht." },

    { category: "k11_geschichte", question: "Was war die Aufklärung als Epoche?", answers: ["Eine Geistesbewegung, die Vernunft und Mündigkeit betonte", "Eine Kriegsphase im Mittelalter", "Eine Kunstrichtung der Antike"], correct: 0, explanation: "Kant fasste sie als 'Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit'." },
    { category: "k11_geschichte", question: "Was kennzeichnete die Industrialisierung in Deutschland?", answers: ["Fabrikarbeit, Urbanisierung und die soziale Frage", "Rückkehr zur Landwirtschaft", "Abschaffung der Städte"], correct: 0, explanation: "Massenproduktion und Landflucht führten zu neuen sozialen Problemen und zur Arbeiterbewegung." },
    { category: "k11_geschichte", question: "Was ist eine Sekundärquelle?", answers: ["Eine spätere Darstellung über ein Ereignis", "Ein Augenzeugenbericht", "Ein Originaldokument der Zeit"], correct: 0, explanation: "Sekundärquellen deuten Ereignisse im Nachhinein, Primärquellen stammen aus der Zeit selbst." },
    { category: "k11_geschichte", question: "Was war die Deutsche Revolution von 1848/49?", answers: ["Ein Aufstand für Einheit, Freiheit und Verfassung", "Ein Bauernkrieg des Mittelalters", "Der Beginn des Ersten Weltkriegs"], correct: 0, explanation: "Die Nationalversammlung tagte in der Frankfurter Paulskirche, die Revolution scheiterte jedoch." },

    { category: "k11_sowi", question: "Was ist ein Markt in der Wirtschaft?", answers: ["Der Ort des Zusammentreffens von Angebot und Nachfrage", "Nur ein Wochenmarkt", "Eine staatliche Behörde"], correct: 0, explanation: "Auf Märkten bildet sich über Angebot und Nachfrage der Preis." },
    { category: "k11_sowi", question: "Was ist eine Norm im soziologischen Sinn?", answers: ["Eine Verhaltenserwartung an Mitglieder einer Gruppe", "Ein Naturgesetz", "Eine mathematische Regel"], correct: 0, explanation: "Normen steuern Verhalten; bei Verstoß drohen Sanktionen." },
    { category: "k11_sowi", question: "Was bedeutet Gewaltenverschränkung?", answers: ["Gegenseitige Kontrolle und Verzahnung der Staatsgewalten", "Die Abschaffung der Gewaltenteilung", "Die Trennung von Staat und Kirche"], correct: 0, explanation: "In der Praxis sind Legislative und Exekutive verschränkt, kontrollieren sich aber gegenseitig." },
    { category: "k11_sowi", question: "Was versteht man unter Opportunitätskosten?", answers: ["Der Nutzen der besten nicht gewählten Alternative", "Die Steuern auf einen Gewinn", "Die Kosten einer Reparatur"], correct: 0, explanation: "Wer sich für eine Option entscheidet, verzichtet auf den Nutzen der nächstbesten – das sind die Opportunitätskosten." },

    { category: "k11_informatik", question: "Was ist eine Schleife mit Abbruchbedingung?", answers: ["Eine while-Schleife", "Eine Konstante", "Ein Kommentar"], correct: 0, explanation: "Die while-Schleife läuft, solange ihre Bedingung wahr ist." },
    { category: "k11_informatik", question: "Was ist eine Klasse in der objektorientierten Programmierung?", answers: ["Ein Bauplan für Objekte", "Ein einzelnes Objekt", "Eine Datei"], correct: 0, explanation: "Die Klasse definiert Attribute und Methoden; Objekte sind konkrete Ausprägungen davon." },
    { category: "k11_informatik", question: "Was ist ein Boolescher Wert?", answers: ["Ein Wahrheitswert (true/false)", "Eine Zeichenkette", "Eine Kommazahl"], correct: 0, explanation: "Boolesche Werte steuern Bedingungen und Verzweigungen." },
    { category: "k11_informatik", question: "Was ist ein Struktogramm?", answers: ["Eine grafische Darstellung eines Algorithmus", "Ein Schaltplan", "Eine Datenbanktabelle"], correct: 0, explanation: "Struktogramme (Nassi-Shneiderman-Diagramme) stellen Abläufe übersichtlich dar." },
    { category: "k12_deutsch", question: "Was kennzeichnet die Romantik als Literaturepoche?", answers: ["Sehnsucht, Naturverbundenheit und das Fantastische", "Strenge Vernunftorientierung", "Sachliche Reportagen"], correct: 0, explanation: "Die Romantik betont Gefühl, Fernweh und das Geheimnisvolle – Symbol ist die blaue Blume." },
    { category: "k12_deutsch", question: "Was ist eine Novelle als literarische Gattung?", answers: ["Eine Erzählung mittlerer Länge um ein zentrales Ereignis", "Ein mehrbändiger Roman", "Ein Bühnenstück in fünf Akten"], correct: 0, explanation: "Kennzeichen sind die straffe Handlung um eine unerhörte Begebenheit und oft ein Dingsymbol." },
    { category: "k12_deutsch", question: "Was ist eine Antithese?", answers: ["Die Gegenüberstellung gegensätzlicher Begriffe", "Eine Wiederholung", "Eine Untertreibung"], correct: 0, explanation: "Beispiel: 'Der eine lacht, der andere weint' – Gegensätze werden bewusst kontrastiert." },
    { category: "k12_deutsch", question: "Was ist der Realismus in der Literatur?", answers: ["Eine Epoche, die Wirklichkeit maßvoll und geordnet darstellt", "Eine Fantasy-Richtung", "Die Literatur der Antike"], correct: 0, explanation: "Der poetische Realismus (ca. 1848-1890) zeigt Alltag, aber künstlerisch verklärt." },

    { category: "k12_mathe", question: "Was besagt der Hauptsatz der Differential- und Integralrechnung?", answers: ["Integration und Differentiation sind Umkehroperationen", "Jede Funktion ist stetig", "Ableitungen sind immer positiv"], correct: 0, explanation: "Ist F eine Stammfunktion von f, gilt: Integral von a bis b = F(b) - F(a)." },
    { category: "k12_mathe", question: "Was ist die Stammfunktion von f(x) = x²?", answers: ["(1/3)x³ + C", "2x + C", "x³ + C"], correct: 0, explanation: "Beim Integrieren erhöht sich der Exponent um 1 und man teilt durch den neuen Exponenten." },
    { category: "k12_mathe", question: "Wann sind zwei Vektoren orthogonal zueinander?", answers: ["Wenn ihr Skalarprodukt null ist", "Wenn sie gleich lang sind", "Wenn sie parallel sind"], correct: 0, explanation: "Skalarprodukt = 0 bedeutet, die Vektoren stehen senkrecht aufeinander." },
    { category: "k12_mathe", question: "Was beschreibt eine Geradengleichung in Parameterform?", answers: ["Stützvektor plus Vielfaches eines Richtungsvektors", "Nur einen einzelnen Punkt", "Eine Kreisgleichung"], correct: 0, explanation: "g: x = a + t·u, wobei a der Stütz- und u der Richtungsvektor ist." },

    { category: "k12_englisch", question: "Was bedeutet 'to be aware of something'?", answers: ["Sich einer Sache bewusst sein", "Etwas ablehnen", "Etwas vergessen"], correct: 0, explanation: "'to be aware of' heißt, etwas wahrzunehmen oder sich dessen bewusst zu sein." },
    { category: "k12_englisch", question: "Was ist eine 'thesis statement'?", answers: ["Die zentrale Aussage eines Aufsatzes", "Die Überschrift", "Das Literaturverzeichnis"], correct: 0, explanation: "Sie fasst die Kernthese, die im Text belegt wird, in ein bis zwei Sätzen zusammen." },
    { category: "k12_englisch", question: "'Not until later ___ what had happened.'", answers: ["did we realise", "we realised", "we did realise"], correct: 0, explanation: "Nach 'Not until' am Satzanfang folgt eine Inversion mit Hilfsverb." },
    { category: "k12_englisch", question: "Was ist 'stereotyping'?", answers: ["Verallgemeinernde, vereinfachte Bilder über Gruppen", "Eine Druckertechnik im Unterricht", "Eine Zeitform"], correct: 0, explanation: "Stereotype vereinfachen komplexe Wirklichkeit und können zu Vorurteilen führen." },

    { category: "k12_biologie", question: "Was ist die Transkription?", answers: ["Das Umschreiben von DNA in mRNA", "Die Zellteilung", "Der Abbau von Proteinen"], correct: 0, explanation: "Im Zellkern wird die DNA-Information in mRNA übersetzt und dann zum Ribosom gebracht." },
    { category: "k12_biologie", question: "Was besagen die Mendelschen Regeln?", answers: ["Gesetzmäßigkeiten der Vererbung von Merkmalen", "Regeln der Fotosynthese", "Gesetze der Thermodynamik"], correct: 0, explanation: "Uniformitäts-, Spaltungs- und Unabhängigkeitsregel beschreiben Kreuzungsergebnisse." },
    { category: "k12_biologie", question: "Was ist die Meiose?", answers: ["Reifeteilung mit Halbierung des Chromosomensatzes", "Normale Körperzellteilung", "Der Zelltod"], correct: 0, explanation: "Aus einer diploiden Zelle entstehen vier haploide Keimzellen." },
    { category: "k12_biologie", question: "Was ist eine Synapse?", answers: ["Die Kontaktstelle zwischen zwei Nervenzellen", "Ein Muskelfaserbündel", "Ein Zellorganell zur Energiegewinnung"], correct: 0, explanation: "An der Synapse wird das Signal chemisch über Botenstoffe (Transmitter) übertragen." },

    { category: "k12_chemie", question: "Was ist eine Veresterung?", answers: ["Reaktion von Alkohol und Carbonsäure zu Ester und Wasser", "Die Verbrennung von Metall", "Die Bildung eines Salzes aus Ionen"], correct: 0, explanation: "Die Veresterung ist eine Kondensationsreaktion und läuft im Gleichgewicht ab." },
    { category: "k12_chemie", question: "Was kennzeichnet Alkane?", answers: ["Gesättigte Kohlenwasserstoffe mit Einfachbindungen", "Kohlenwasserstoffe mit Dreifachbindung", "Sauerstoffhaltige Säuren"], correct: 0, explanation: "Alkane haben die allgemeine Formel CnH2n+2, z.B. Methan und Ethan." },
    { category: "k12_chemie", question: "Was ist der pKs-Wert?", answers: ["Ein Maß für die Stärke einer Säure", "Die Siedetemperatur", "Die Molare Masse"], correct: 0, explanation: "Je kleiner der pKs-Wert, desto stärker die Säure." },
    { category: "k12_chemie", question: "Was sind Isomere?", answers: ["Stoffe mit gleicher Summenformel, aber unterschiedlichem Bau", "Stoffe mit gleicher Farbe", "Zwei Namen für denselben Stoff"], correct: 0, explanation: "Butan und Isobutan haben beide C4H10, unterscheiden sich aber in der Struktur und damit in ihren Eigenschaften." },

    { category: "k12_physik", question: "Was beschreibt das Induktionsgesetz?", answers: ["Eine Spannung entsteht bei Änderung des magnetischen Flusses", "Strom fließt nur in Metallen", "Ladung geht verloren"], correct: 0, explanation: "Grundlage von Generator und Transformator – eine Flussänderung erzeugt eine Induktionsspannung." },
    { category: "k12_physik", question: "Was ist die Kapazität eines Kondensators?", answers: ["Das Verhältnis von Ladung zu Spannung", "Die Leistung in Watt", "Der Widerstand in Ohm"], correct: 0, explanation: "C = Q/U, gemessen in Farad." },
    { category: "k12_physik", question: "Was ist die Resonanz bei Schwingungen?", answers: ["Starke Amplitudenzunahme bei passender Erregerfrequenz", "Das Abklingen einer Welle", "Die Umkehr der Bewegungsrichtung"], correct: 0, explanation: "Stimmt die Erregerfrequenz mit der Eigenfrequenz überein, wächst die Amplitude stark an." },
    { category: "k12_physik", question: "Was zeigt das Doppelspaltexperiment mit Licht?", answers: ["Den Wellencharakter durch Interferenzmuster", "Dass Licht keine Energie hat", "Dass Licht nur geradlinig verläuft"], correct: 0, explanation: "Das Streifenmuster entsteht durch Überlagerung – ein klarer Wellennachweis." },

    { category: "k12_geschichte", question: "Warum gilt die Weimarer Republik als 'Demokratie ohne Demokraten'?", answers: ["Viele Eliten und Bürger lehnten die Republik ab", "Es gab keine Wahlen", "Es fehlte eine Verfassung"], correct: 0, explanation: "Justiz, Militär und Teile der Bevölkerung standen der Republik ablehnend gegenüber." },
    { category: "k12_geschichte", question: "Was war die Machtübertragung 1933?", answers: ["Hitlers Ernennung zum Reichskanzler am 30. Januar 1933", "Die Gründung der Bundesrepublik", "Der Beginn des Ersten Weltkriegs"], correct: 0, explanation: "Reichspräsident Hindenburg ernannte Hitler; es folgte die rasche Ausschaltung der Demokratie." },
    { category: "k12_geschichte", question: "Was war der Versailler Vertrag von 1919?", answers: ["Der Friedensvertrag nach dem Ersten Weltkrieg", "Ein Handelsabkommen des Mittelalters", "Die Gründungsurkunde der EU"], correct: 0, explanation: "Er legte Deutschland Gebietsverluste und Reparationen auf und belastete die Weimarer Republik." },
    { category: "k12_geschichte", question: "Was bedeutet 'Gleichschaltung' im Nationalsozialismus?", answers: ["Die erzwungene Ausrichtung aller Bereiche auf die NS-Ideologie", "Die Angleichung der Löhne", "Die Vereinheitlichung der Stromnetze"], correct: 0, explanation: "Parteien, Verbände und Länder wurden 1933/34 systematisch entmachtet oder unterworfen." },

    { category: "k12_sowi", question: "Was ist Inflation volkswirtschaftlich?", answers: ["Ein anhaltender Anstieg des Preisniveaus", "Ein Rückgang der Preise", "Ein Anstieg der Beschäftigung"], correct: 0, explanation: "Bei Inflation sinkt die Kaufkraft des Geldes; die EZB strebt rund 2 Prozent an." },
    { category: "k12_sowi", question: "Was ist Angebotspolitik?", answers: ["Stärkung der Produktionsbedingungen der Unternehmen", "Erhöhung der Staatsnachfrage", "Verstaatlichung der Wirtschaft"], correct: 0, explanation: "Angebotspolitik setzt auf Steuersenkungen und Deregulierung statt auf Nachfrageimpulse." },
    { category: "k12_sowi", question: "Was misst die Arbeitslosenquote?", answers: ["Den Anteil der Arbeitslosen an den Erwerbspersonen", "Die Zahl aller Nichterwerbstätigen", "Die Zahl der offenen Stellen"], correct: 0, explanation: "Sie bezieht die registrierten Arbeitslosen auf alle zivilen Erwerbspersonen." },
    { category: "k12_sowi", question: "Was sind Interessenverbände?", answers: ["Organisationen, die Interessen ihrer Mitglieder vertreten", "Staatliche Ministerien", "Gerichte"], correct: 0, explanation: "Gewerkschaften und Arbeitgeberverbände nehmen Einfluss auf politische Entscheidungen." },

    { category: "k12_informatik", question: "Was ist ein Stack (Stapelspeicher)?", answers: ["Eine Datenstruktur nach dem LIFO-Prinzip", "Eine Warteschlange nach FIFO", "Eine Datenbank"], correct: 0, explanation: "Last In, First Out: Das zuletzt abgelegte Element wird zuerst entnommen." },
    { category: "k12_informatik", question: "Was ist eine Queue?", answers: ["Eine Warteschlange nach dem FIFO-Prinzip", "Ein Stapelspeicher", "Ein Sortierverfahren"], correct: 0, explanation: "First In, First Out – wie eine Warteschlange an der Kasse." },
    { category: "k12_informatik", question: "Wozu dient ein Primärschlüssel in einer Datenbank?", answers: ["Zur eindeutigen Identifikation eines Datensatzes", "Zum Verschlüsseln der Datenbank", "Zum Sortieren der Spalten"], correct: 0, explanation: "Der Primärschlüssel ist eindeutig und darf nicht leer sein." },
    { category: "k12_informatik", question: "Was ist Vererbung in der objektorientierten Programmierung?", answers: ["Eine Klasse übernimmt Eigenschaften einer Oberklasse", "Das Löschen von Objekten", "Das Kopieren von Dateien"], correct: 0, explanation: "Unterklassen erben Attribute und Methoden und können sie erweitern oder überschreiben." },
    { category: "k13_deutsch", question: "Was kennzeichnet die literarische Moderne um 1900?", answers: ["Brüche mit Traditionen und neue Erzählformen", "Strenge Regelpoetik der Antike", "Ausschließlich Heimatliteratur"], correct: 0, explanation: "Autoren wie Kafka und Musil lösen sich von geschlossenen Formen und festen Weltbildern." },
    { category: "k13_deutsch", question: "Was ist eine Ellipse als Stilmittel?", answers: ["Ein unvollständiger Satz durch Auslassung", "Eine Übertreibung", "Ein Vergleich"], correct: 0, explanation: "Beispiel: 'Ende gut, alles gut' – Satzglieder werden bewusst weggelassen." },
    { category: "k13_deutsch", question: "Was untersucht die Sprachkritik?", answers: ["Wie Sprache Denken und Wirklichkeit beeinflusst", "Nur die Rechtschreibung", "Die Druckgeschichte von Büchern"], correct: 0, explanation: "Sprachkritik fragt, ob und wie Sprache Wirklichkeit abbilden oder verschleiern kann." },
    { category: "k13_deutsch", question: "Was ist ein Bildungsroman?", answers: ["Ein Roman über die innere Entwicklung einer Hauptfigur", "Ein Sachbuch über Schule", "Eine Gedichtsammlung"], correct: 0, explanation: "Klassisches Beispiel ist Goethes 'Wilhelm Meisters Lehrjahre'." },

    { category: "k13_mathe", question: "Was ist die Bernoulli-Kette?", answers: ["Wiederholte unabhängige Versuche mit zwei Ausgängen", "Eine Folge von Ableitungen", "Ein Gleichungssystem"], correct: 0, explanation: "Sie ist die Grundlage der Binomialverteilung – jeder Versuch hat dieselbe Trefferwahrscheinlichkeit." },
    { category: "k13_mathe", question: "Was ist der Erwartungswert einer Zufallsgröße?", answers: ["Der auf lange Sicht durchschnittlich erwartete Wert", "Der größte mögliche Wert", "Die Anzahl der Versuche"], correct: 0, explanation: "Bei der Binomialverteilung gilt E(X) = n·p." },
    { category: "k13_mathe", question: "Was ist ein Hypothesentest?", answers: ["Ein Verfahren zur Prüfung einer Annahme anhand von Daten", "Eine Kurvendiskussion", "Ein Integrationsverfahren"], correct: 0, explanation: "Man prüft, ob ein Stichprobenergebnis mit der Nullhypothese vereinbar ist." },
    { category: "k13_mathe", question: "Wie berechnet man den Abstand eines Punktes von einer Ebene?", answers: ["Mit der Hesseschen Normalform", "Mit dem Skalarprodukt allein", "Mit der Produktregel"], correct: 0, explanation: "Die Hessesche Normalform liefert direkt den Abstand als Betrag des eingesetzten Punktes." },

    { category: "k13_englisch", question: "Was ist 'utopia' und 'dystopia' in der Literatur?", answers: ["Idealer bzw. bedrohlicher Gesellschaftsentwurf", "Zwei englische Zeitformen", "Zwei Städte in England"], correct: 0, explanation: "Dystopien wie '1984' warnen vor gesellschaftlichen Fehlentwicklungen." },
    { category: "k13_englisch", question: "Was ist ein 'comment' als Aufgabenformat?", answers: ["Eine begründete eigene Stellungnahme", "Eine reine Inhaltsangabe", "Eine Übersetzung"], correct: 0, explanation: "Im comment nimmt man Stellung, argumentiert und kommt zu einem klaren Fazit." },
    { category: "k13_englisch", question: "Was bedeutet 'to bridge the gap'?", answers: ["Eine Kluft überbrücken", "Eine Brücke abreißen", "Ein Problem verschweigen"], correct: 0, explanation: "Bildlich: Unterschiede oder Gegensätze verringern." },
    { category: "k13_englisch", question: "Was ist 'irony' als Stilmittel?", answers: ["Das Gegenteil des Gesagten ist gemeint", "Eine wörtliche Wiederholung", "Eine Frage ohne Antwort"], correct: 0, explanation: "Ironie erzeugt eine Spannung zwischen Wortlaut und tatsächlicher Aussageabsicht." },

    { category: "k13_biologie", question: "Was ist die Synapsengift-Wirkung am Beispiel von Hemmstoffen?", answers: ["Sie stören die Signalübertragung an der Synapse", "Sie beschleunigen die Zellteilung", "Sie verändern die DNA"], correct: 0, explanation: "Hemmstoffe blockieren z.B. Rezeptoren oder den Abbau von Transmittern." },
    { category: "k13_biologie", question: "Was besagt die Endosymbiontentheorie?", answers: ["Mitochondrien und Chloroplasten stammen von aufgenommenen Bakterien ab", "Alle Zellen entstehen aus Kristallen", "Arten entstehen ohne Selektion"], correct: 0, explanation: "Beide Organellen besitzen eigene DNA und Doppelmembranen – starke Belege der Theorie." },
    { category: "k13_biologie", question: "Was ist genetische Drift?", answers: ["Zufällige Änderung der Allelhäufigkeit in kleinen Populationen", "Gerichtete Auslese durch die Umwelt", "Die Verdopplung der DNA"], correct: 0, explanation: "Anders als die Selektion wirkt die Drift ungerichtet und besonders in kleinen Populationen stark." },
    { category: "k13_biologie", question: "Was ist ein ökologisches Gleichgewicht?", answers: ["Ein dynamisch schwankender, aber stabiler Zustand im Ökosystem", "Ein völlig unveränderlicher Zustand", "Das Aussterben aller Arten"], correct: 0, explanation: "Populationsgrößen schwanken um einen Mittelwert, das System bleibt insgesamt stabil." },

    { category: "k13_chemie", question: "Was ist ein Elektrolyt?", answers: ["Ein Stoff, dessen Lösung oder Schmelze Strom leitet", "Ein Stoff, der elektrischen Strom vollständig sperrt", "Ein Gas, das keine chemischen Bindungen eingeht"], correct: 0, explanation: "Elektrolyte enthalten frei bewegliche Ionen, die den Ladungstransport ermöglichen." },
    { category: "k13_chemie", question: "Was beschreibt das chemische Gleichgewicht?", answers: ["Hin- und Rückreaktion laufen gleich schnell ab", "Die Reaktion ist vollständig beendet", "Es entstehen keine Produkte"], correct: 0, explanation: "Die Konzentrationen bleiben konstant, obwohl beide Reaktionen weiterlaufen." },
    { category: "k13_chemie", question: "Was ist die Elektrolyse?", answers: ["Eine durch elektrische Energie erzwungene Redoxreaktion", "Eine spontane Batteriereaktion", "Ein Filterverfahren"], correct: 0, explanation: "Bei der Elektrolyse wird elektrische Energie zugeführt, um eine Reaktion zu erzwingen." },
    { category: "k13_chemie", question: "Was sind Kohlenhydrate chemisch?", answers: ["Polyhydroxyaldehyde bzw. -ketone", "Reine Kohlenwasserstoffe", "Anorganische Salze"], correct: 0, explanation: "Glucose ist ein typisches Beispiel; Kohlenhydrate dienen als Energieträger." },

    { category: "k13_physik", question: "Was beschreibt das Plancksche Wirkungsquantum?", answers: ["Den Zusammenhang von Energie und Frequenz eines Photons", "Die Lichtgeschwindigkeit", "Die Gravitationskonstante"], correct: 0, explanation: "E = h·f – Energie tritt nur in festen Portionen (Quanten) auf." },
    { category: "k13_physik", question: "Was ist der radioaktive Zerfall?", answers: ["Die spontane Umwandlung instabiler Atomkerne", "Die Verbrennung von Uran", "Die Aufheizung von Metall"], correct: 0, explanation: "Man unterscheidet Alpha-, Beta- und Gammazerfall; die Halbwertszeit beschreibt das Tempo." },
    { category: "k13_physik", question: "Was ist die Halbwertszeit?", answers: ["Die Zeit, nach der die Hälfte der Kerne zerfallen ist", "Die Lebensdauer eines Atoms", "Die halbe Lichtgeschwindigkeit"], correct: 0, explanation: "Sie ist für jedes Nuklid charakteristisch und unabhängig von der Ausgangsmenge." },
    { category: "k13_physik", question: "Was besagt die Zeitdilatation?", answers: ["Bewegte Uhren gehen aus Sicht eines ruhenden Beobachters langsamer", "Zeit vergeht überall gleich", "Zeit läuft rückwärts"], correct: 0, explanation: "Ein Ergebnis der speziellen Relativitätstheorie, messbar z.B. bei Myonen." },

    { category: "k13_geschichte", question: "Was war die Kubakrise 1962?", answers: ["Eine Zuspitzung des Kalten Krieges um Raketen auf Kuba", "Ein Handelsstreit um Zucker", "Der Beginn der NATO"], correct: 0, explanation: "Die Welt stand kurz vor einem Atomkrieg; die Krise endete mit dem Abzug der Raketen." },
    { category: "k13_geschichte", question: "Was war der Mauerbau 1961?", answers: ["Die Abriegelung West-Berlins durch die DDR", "Der Bau der Berliner Stadtmauer im Mittelalter", "Ein Bauprojekt der Bundesrepublik"], correct: 0, explanation: "Die DDR wollte die massenhafte Flucht in den Westen stoppen." },
    { category: "k13_geschichte", question: "Was kennzeichnete die Friedliche Revolution 1989?", answers: ["Gewaltlose Massenproteste in der DDR", "Ein Militärputsch", "Ein Bürgerkrieg"], correct: 0, explanation: "Montagsdemonstrationen und der Ruf 'Wir sind das Volk' führten zum Fall der Mauer." },
    { category: "k13_geschichte", question: "Was war der Zwei-plus-Vier-Vertrag 1990?", answers: ["Die außenpolitische Regelung der deutschen Einheit", "Ein Wirtschaftsabkommen der EU", "Ein Militärbündnis"], correct: 0, explanation: "Die beiden deutschen Staaten und die vier Siegermächte regelten die volle Souveränität Deutschlands." },

    { category: "k13_sowi", question: "Was ist der Europäische Binnenmarkt?", answers: ["Freier Verkehr von Waren, Personen, Dienstleistungen und Kapital", "Ein gemeinsamer Wochenmarkt", "Eine EU-Behörde"], correct: 0, explanation: "Die vier Grundfreiheiten bilden das wirtschaftliche Kernstück der EU." },
    { category: "k13_sowi", question: "Wofür steht das Prinzip der Tarifautonomie?", answers: ["Gewerkschaften und Arbeitgeber handeln Löhne ohne den Staat aus", "Der Staat legt alle Löhne fest", "Jeder verhandelt seinen Lohn allein"], correct: 0, explanation: "Die Tarifautonomie ist grundgesetzlich geschützt (Art. 9 Abs. 3 GG)." },
    { category: "k13_sowi", question: "Was ist das Umlageverfahren in der Rentenversicherung?", answers: ["Die Beiträge der Erwerbstätigen finanzieren die heutigen Renten", "Jeder spart nur für sich selbst", "Der Staat zahlt Renten aus Steuern allein"], correct: 0, explanation: "Der Generationenvertrag gerät durch den demografischen Wandel unter Druck." },
    { category: "k13_sowi", question: "Was ist Multilateralismus?", answers: ["Zusammenarbeit mehrerer Staaten nach gemeinsamen Regeln", "Alleingang eines einzelnen Staates", "Ein Handelsverbot"], correct: 0, explanation: "Organisationen wie UNO, WTO und EU sind Ausdruck multilateraler Politik." },

    { category: "k13_informatik", question: "Was ist die Zeitkomplexität O(n²) typischerweise?", answers: ["Quadratisches Wachstum, z.B. bei einfachen Sortierverfahren", "Konstante Laufzeit", "Logarithmisches Wachstum"], correct: 0, explanation: "Bubblesort und Insertionsort liegen im schlechtesten Fall bei O(n²)." },
    { category: "k13_informatik", question: "Was ist eine reguläre Sprache?", answers: ["Eine Sprache, die ein endlicher Automat erkennen kann", "Eine natürliche Sprache wie Deutsch", "Eine Programmiersprache mit Klassen"], correct: 0, explanation: "Reguläre Sprachen lassen sich durch reguläre Ausdrücke beschreiben." },
    { category: "k13_informatik", question: "Was ist asymmetrische Verschlüsselung?", answers: ["Verfahren mit öffentlichem und privatem Schlüssel", "Verschlüsselung mit nur einem Schlüssel", "Eine Datenkompression"], correct: 0, explanation: "Der öffentliche Schlüssel verschlüsselt, nur der private kann entschlüsseln – Basis von RSA." },
    { category: "k13_informatik", question: "Wozu dient das Client-Server-Modell?", answers: ["Aufgabenteilung: Server bietet Dienste, Client fragt sie an", "Zur Sortierung von Daten", "Zur Verschlüsselung von Passwörtern"], correct: 0, explanation: "Webseiten, E-Mail und Datenbanken arbeiten typischerweise nach diesem Modell." },

    // --- BERUFSSCHULE: ELEKTRONIKER/IN ---
    { category: "beruf_elektro", question: "Wie lauten die fünf Sicherheitsregeln der Elektrotechnik in der richtigen Reihenfolge?", answers: ["Freischalten, gegen Wiedereinschalten sichern, Spannungsfreiheit feststellen, erden und kurzschließen, benachbarte Teile abdecken", "Erden, freischalten, messen, abdecken, sichern", "Messen, abdecken, freischalten, erden, sichern"], correct: 0, explanation: "Die Reihenfolge ist verbindlich und schützt vor Stromunfällen." },
    { category: "beruf_elektro", question: "Welche Farbe hat der Schutzleiter (PE) nach Norm?", answers: ["Grün-gelb", "Blau", "Braun"], correct: 0, explanation: "Grün-gelb ist ausschließlich dem Schutzleiter vorbehalten, blau ist der Neutralleiter." },
    { category: "beruf_elektro", question: "Wozu dient ein FI-Schutzschalter (RCD)?", answers: ["Er trennt bei Fehlerströmen und schützt Personen", "Er begrenzt die Spannung", "Er misst den Stromverbrauch"], correct: 0, explanation: "Der RCD vergleicht Hin- und Rückstrom und löst bei einer Differenz (Fehlerstrom) aus." },
    { category: "beruf_elektro", question: "Was passiert mit dem Gesamtwiderstand in einer Parallelschaltung?", answers: ["Er wird kleiner als der kleinste Einzelwiderstand", "Er ist die Summe aller Widerstände", "Er bleibt unverändert"], correct: 0, explanation: "Bei Parallelschaltung addieren sich die Leitwerte, der Gesamtwiderstand sinkt." },
    { category: "beruf_elektro", question: "Was gibt der Nennstrom einer Sicherung an?", answers: ["Den Strom, den sie dauerhaft führen darf, ohne auszulösen", "Die Spannung im Stromkreis", "Den Widerstand der Leitung"], correct: 0, explanation: "Die Sicherung schützt vor allem die Leitung vor Überlastung und Brand." },
    { category: "beruf_elektro", question: "Warum wählt man bei langen Leitungen einen größeren Querschnitt?", answers: ["Um Spannungsfall und Erwärmung zu begrenzen", "Damit die Leitung schwerer wird", "Um die Spannung zu erhöhen"], correct: 0, explanation: "Ein größerer Querschnitt senkt den Leitungswiderstand und damit den Spannungsfall." },
    { category: "beruf_elektro", question: "Was bedeutet die Schutzart IP44?", answers: ["Schutz gegen feste Fremdkörper über 1 mm und Spritzwasser", "Schutz gegen Berührung und vollständiges Untertauchen", "Kein besonderer Schutz"], correct: 0, explanation: "Die erste Ziffer steht für Fremdkörper-, die zweite für Wasserschutz." },
    { category: "beruf_elektro", question: "Was ist der Unterschied zwischen Gleichstrom und Wechselstrom?", answers: ["Gleichstrom fließt immer in eine Richtung, Wechselstrom wechselt periodisch", "Gleichstrom ist immer stärker", "Es gibt keinen Unterschied"], correct: 0, explanation: "Im deutschen Netz beträgt die Frequenz des Wechselstroms 50 Hz." },

    // --- BERUFSSCHULE: TISCHLER/IN ---
    { category: "beruf_tischler", question: "Welches Holz zählt zu den Nadelhölzern?", answers: ["Fichte", "Eiche", "Buche"], correct: 0, explanation: "Fichte, Kiefer und Tanne sind Nadelhölzer; Eiche und Buche sind Laubhölzer." },
    { category: "beruf_tischler", question: "Welche Holzfeuchte ist für Möbel in beheizten Räumen üblich?", answers: ["Etwa 8 bis 10 Prozent", "Etwa 30 Prozent", "Etwa 50 Prozent"], correct: 0, explanation: "Zu feuchtes Holz schwindet später und die Verbindungen reißen auf." },
    { category: "beruf_tischler", question: "Was ist eine Zinkenverbindung?", answers: ["Eine formschlüssige Eckverbindung aus ineinandergreifenden Zapfen", "Eine Verbindung mit Zinkblech", "Eine geklebte Stumpfverbindung"], correct: 0, explanation: "Schwalbenschwanzzinken sind besonders zugfest und ein Qualitätsmerkmal im Möbelbau." },
    { category: "beruf_tischler", question: "Warum arbeitet Holz auch nach der Verarbeitung noch?", answers: ["Es nimmt Feuchtigkeit auf und gibt sie ab", "Es wächst weiter", "Es reagiert auf Licht"], correct: 0, explanation: "Holz quillt und schwindet quer zur Faser deutlich stärker als in Längsrichtung." },
    { category: "beruf_tischler", question: "Wofür wird ein Stechbeitel verwendet?", answers: ["Zum Ausstemmen von Vertiefungen und Zapfenlöchern", "Zum Sägen von Brettern", "Zum Schleifen von Oberflächen"], correct: 0, explanation: "Der Stechbeitel wird mit dem Klüpfel oder von Hand geführt." },
    { category: "beruf_tischler", question: "Was ist Furnier?", answers: ["Ein dünnes Blatt Echtholz zum Beschichten von Trägerplatten", "Eine schützende Lackschicht auf der Oberfläche", "Ein Spezialklebstoff für Holzverbindungen"], correct: 0, explanation: "Furniere sind meist 0,5 bis 0,9 mm dick und sparen wertvolles Vollholz." },
    { category: "beruf_tischler", question: "Welche Schutzeinrichtung ist an der Tischkreissäge vorgeschrieben?", answers: ["Spaltkeil und Schutzhaube", "Nur eine Brille", "Keine, wenn man vorsichtig ist"], correct: 0, explanation: "Der Spaltkeil verhindert das Klemmen des Werkstücks und damit gefährliche Rückschläge." },
    { category: "beruf_tischler", question: "Wozu dient eine Absauganlage in der Werkstatt?", answers: ["Sie entfernt gesundheitsschädlichen Holzstaub", "Sie kühlt die Maschinen", "Sie erhöht die Drehzahl"], correct: 0, explanation: "Holzstaub gilt als krebserzeugend, besonders Eichen- und Buchenstaub." },

    // --- BERUFSSCHULE: INDUSTRIEMECHANIKER/IN ---
    { category: "beruf_industriemechaniker", question: "Womit misst man Längen auf Hundertstelmillimeter genau?", answers: ["Mit der Bügelmessschraube (Mikrometer)", "Mit dem Zollstock", "Mit dem Maßband"], correct: 0, explanation: "Der Messschieber schafft üblicherweise 0,05 mm, die Bügelmessschraube 0,01 mm." },
    { category: "beruf_industriemechaniker", question: "Was bedeutet die Bezeichnung M8 bei einer Schraube?", answers: ["Metrisches Gewinde mit 8 mm Nenndurchmesser", "Eine Materialgüte", "8 mm Schlüsselweite"], correct: 0, explanation: "M steht für metrisches ISO-Gewinde, die Zahl gibt den Außendurchmesser in mm an." },
    { category: "beruf_industriemechaniker", question: "Was versteht man unter einer Passung?", answers: ["Das Zusammenspiel der Toleranzen von Welle und Bohrung", "Die Farbe des Werkstücks", "Die Länge eines Bauteils"], correct: 0, explanation: "Man unterscheidet Spiel-, Übergangs- und Presspassung." },
    { category: "beruf_industriemechaniker", question: "Welches Fertigungsverfahren ist Drehen?", answers: ["Spanendes Verfahren mit rotierendem Werkstück", "Umformendes Verfahren", "Fügendes Verfahren"], correct: 0, explanation: "Beim Drehen rotiert das Werkstück, das Werkzeug führt die Vorschubbewegung aus." },
    { category: "beruf_industriemechaniker", question: "Wozu dient das Härten von Stahl?", answers: ["Zur Erhöhung von Härte und Verschleißfestigkeit", "Zum Weichmachen für die Bearbeitung", "Zum Schutz vor Rost"], correct: 0, explanation: "Beim Härten wird der Stahl erhitzt und schnell abgeschreckt; danach folgt meist das Anlassen." },
    { category: "beruf_industriemechaniker", question: "Was zeigt eine technische Zeichnung in der Vorderansicht?", answers: ["Die Hauptansicht des Werkstücks nach Projektionsmethode 1", "Immer die Rückseite", "Nur Maßangaben ohne Form"], correct: 0, explanation: "In Europa gilt die Projektionsmethode 1 (Erstwinkelprojektion)." },
    { category: "beruf_industriemechaniker", question: "Warum verwendet man beim Zerspanen Kühlschmierstoff?", answers: ["Zur Kühlung, Schmierung und zum Abtransport der Späne", "Nur zur Reinigung nach der Arbeit", "Um das Werkstück zu färben"], correct: 0, explanation: "Kühlschmierstoff verlängert die Standzeit des Werkzeugs und verbessert die Oberfläche." },
    { category: "beruf_industriemechaniker", question: "Was ist eine Presspassung?", answers: ["Die Welle ist größer als die Bohrung, Teile werden fest gefügt", "Es bleibt immer Spiel zwischen den Teilen", "Die Teile sind lose gesteckt"], correct: 0, explanation: "Presspassungen übertragen Kräfte durch Reibschluss, oft mit Erwärmen gefügt." },

    // --- BERUFSSCHULE: FACHINFORMATIKER/IN ---
    { category: "beruf_fachinformatiker", question: "Wofür steht die Abkürzung IP bei einer IP-Adresse?", answers: ["Internet Protocol", "Internal Port", "Info Packet"], correct: 0, explanation: "Die IP-Adresse identifiziert ein Gerät eindeutig im Netzwerk." },
    { category: "beruf_fachinformatiker", question: "Welche Aufgabe hat ein DNS-Server?", answers: ["Er übersetzt Domainnamen in IP-Adressen", "Er speichert E-Mails", "Er verschlüsselt Passwörter"], correct: 0, explanation: "Ohne DNS müsste man IP-Adressen statt Namen wie beispiel.de eingeben." },
    { category: "beruf_fachinformatiker", question: "Was bewirkt der SQL-Befehl SELECT?", answers: ["Er liest Daten aus einer Tabelle aus", "Er löscht eine Tabelle", "Er legt einen Benutzer an"], correct: 0, explanation: "SELECT ist der Abfragebefehl; DELETE löscht und CREATE legt an." },
    { category: "beruf_fachinformatiker", question: "Was beschreibt die 3-2-1-Regel bei Backups?", answers: ["3 Kopien, 2 Medien, 1 Kopie außer Haus", "3 Server, 2 Nutzer, 1 Passwort", "3 Tage, 2 Wochen, 1 Monat"], correct: 0, explanation: "Sie schützt vor Datenverlust durch Defekt, Diebstahl oder Brand." },
    { category: "beruf_fachinformatiker", question: "Was ist ein RAID 1?", answers: ["Spiegelung der Daten auf zwei Festplatten", "Aufteilung der Daten auf viele Platten ohne Sicherung", "Eine Datensicherung auf Band"], correct: 0, explanation: "RAID 1 erhöht die Ausfallsicherheit, ersetzt aber kein Backup." },
    { category: "beruf_fachinformatiker", question: "Wozu dient eine Firewall?", answers: ["Sie filtert den Netzwerkverkehr nach Regeln", "Sie beschleunigt das Internet", "Sie sichert Daten automatisch"], correct: 0, explanation: "Firewalls erlauben oder blockieren Verbindungen anhand von Ports, Adressen und Protokollen." },
    { category: "beruf_fachinformatiker", question: "Was ist der Unterschied zwischen Hardware und Software?", answers: ["Hardware ist die Technik zum Anfassen, Software sind die Programme", "Software ist teurer", "Es gibt keinen Unterschied"], correct: 0, explanation: "Hardware ist der physische Teil, Software die Menge der Programme und Daten." },
    { category: "beruf_fachinformatiker", question: "Was regelt die DSGVO für IT-Betriebe?", answers: ["Den Umgang mit personenbezogenen Daten", "Die Höhe der Ausbildungsvergütung", "Die Kabelfarben im Serverraum"], correct: 0, explanation: "Verstöße können empfindliche Bußgelder nach sich ziehen." },

    // --- BERUFSSCHULE: BÜROMANAGEMENT ---
    { category: "beruf_buero", question: "Was bedeutet 'Skonto' auf einer Rechnung?", answers: ["Ein Preisnachlass bei schneller Zahlung", "Eine Mahngebühr", "Die Umsatzsteuer"], correct: 0, explanation: "Beispiel: '2 % Skonto bei Zahlung innerhalb von 10 Tagen'." },
    { category: "beruf_buero", question: "Wie hoch ist der reguläre Umsatzsteuersatz in Deutschland?", answers: ["19 Prozent", "7 Prozent", "25 Prozent"], correct: 0, explanation: "Der ermäßigte Satz von 7 Prozent gilt etwa für Lebensmittel und Bücher." },
    { category: "beruf_buero", question: "Wodurch kommt ein Kaufvertrag zustande?", answers: ["Durch zwei übereinstimmende Willenserklärungen", "Erst durch die Zahlung", "Erst durch die Lieferung"], correct: 0, explanation: "Antrag und Annahme genügen; ein schriftlicher Vertrag ist meist nicht nötig." },
    { category: "beruf_buero", question: "Was regelt die DIN 5008?", answers: ["Die Gestaltung von Geschäftsbriefen und Schriftstücken", "Die Größe von Büromöbeln", "Die Arbeitszeiten"], correct: 0, explanation: "Sie legt Abstände, Anschriftfeld und Aufbau von Geschäftsbriefen fest." },
    { category: "beruf_buero", question: "Was ist eine Inventur?", answers: ["Die mengen- und wertmäßige Erfassung aller Vermögenswerte", "Ein Werbeprospekt", "Eine Kundenbefragung"], correct: 0, explanation: "Die Inventur ist gesetzlich vorgeschrieben und Grundlage des Inventars." },
    { category: "beruf_buero", question: "Was ist ein Verzug beim Zahlungsziel?", answers: ["Die verspätete Zahlung nach Fälligkeit", "Ein Rabatt", "Eine Vorauszahlung"], correct: 0, explanation: "Nach Verzugseintritt können Verzugszinsen und Mahnkosten verlangt werden." },
    { category: "beruf_buero", question: "Was gehört zu den Aufgaben der Ablageorganisation?", answers: ["Systematisches Ordnen und Aufbewahren von Dokumenten", "Die Bestellung von Waren", "Die Personalplanung"], correct: 0, explanation: "Wichtig sind einheitliche Ordnungssysteme und die Beachtung von Aufbewahrungsfristen." },
    { category: "beruf_buero", question: "Wie lange müssen Rechnungen handelsrechtlich in der Regel aufbewahrt werden?", answers: ["10 Jahre", "1 Jahr", "3 Monate"], correct: 0, explanation: "Buchungsbelege und Jahresabschlüsse unterliegen der zehnjährigen Aufbewahrungsfrist." },

    // --- BERUFSSCHULE: VERKÄUFER/IN & EINZELHANDEL ---
    { category: "beruf_verkaeufer", question: "Was ist bei der Warenannahme zuerst zu prüfen?", answers: ["Menge, Art und Zustand der Ware anhand des Lieferscheins", "Nur der Preis", "Nur das Haltbarkeitsdatum"], correct: 0, explanation: "Mängel müssen sofort dokumentiert und gemeldet werden." },
    { category: "beruf_verkaeufer", question: "Wie lange beträgt die gesetzliche Gewährleistung auf neue Waren?", answers: ["2 Jahre", "6 Monate", "5 Jahre"], correct: 0, explanation: "Die Gewährleistung ist gesetzlich, die Garantie dagegen eine freiwillige Zusage des Herstellers." },
    { category: "beruf_verkaeufer", question: "Muss ein Geschäft einwandfreie Ware umtauschen, die dem Kunden nicht gefällt?", answers: ["Nein, ein Umtausch ist bei Nichtgefallen freiwillig", "Ja, immer innerhalb von 14 Tagen", "Ja, unbegrenzt"], correct: 0, explanation: "Im Ladengeschäft besteht kein gesetzliches Umtauschrecht bei Nichtgefallen – anders als im Onlinehandel." },
    { category: "beruf_verkaeufer", question: "Was versteht man unter Warenpräsentation?", answers: ["Die verkaufsfördernde Anordnung der Ware im Laden", "Die Lagerung im Keller", "Die Buchhaltung"], correct: 0, explanation: "Sichtzone und Griffzone in Augen- und Handhöhe verkaufen am besten." },
    { category: "beruf_verkaeufer", question: "Was ist ein 'offenes Fragen' im Verkaufsgespräch?", answers: ["Eine Frage, die nicht mit Ja oder Nein beantwortet werden kann", "Eine unhöfliche Frage", "Eine Frage nach dem Preis"], correct: 0, explanation: "W-Fragen wie 'Wofür möchten Sie es nutzen?' bringen den Kunden ins Erzählen." },
    { category: "beruf_verkaeufer", question: "Was bedeutet die Preisangabenverordnung für den Einzelhandel?", answers: ["Preise müssen klar erkennbar inklusive Mehrwertsteuer ausgezeichnet sein", "Preise dürfen frei versteckt werden", "Es gilt nur für Onlineshops"], correct: 0, explanation: "Verbraucher müssen den Endpreis auf einen Blick erkennen können." },
    { category: "beruf_verkaeufer", question: "Wie reagiert man richtig auf eine Reklamation?", answers: ["Ruhig zuhören, Verständnis zeigen und eine Lösung anbieten", "Den Kunden abweisen", "Den Fehler bestreiten"], correct: 0, explanation: "Eine gut gelöste Reklamation stärkt oft die Kundenbindung." },
    { category: "beruf_verkaeufer", question: "Was ist Warenschwund im Einzelhandel?", answers: ["Ungeplanter Warenverlust, z.B. durch Diebstahl oder Verderb", "Die geplante Rabattaktion", "Der Umsatz eines Tages"], correct: 0, explanation: "Der Schwund wird über die Inventur ermittelt und mindert den Gewinn." },

    // --- BERUFSSCHULE: PFLEGEFACHKRAFT ---
    { category: "beruf_pflege", question: "Welche Werte zählen zu den Vitalzeichen?", answers: ["Puls, Blutdruck, Atmung und Temperatur", "Nur der Blutdruck", "Größe und Gewicht"], correct: 0, explanation: "Vitalzeichen geben Auskunft über die lebenswichtigen Körperfunktionen." },
    { category: "beruf_pflege", question: "Was ist die wichtigste Maßnahme zur Infektionsprävention?", answers: ["Die hygienische Händedesinfektion", "Das Tragen von Schmuck", "Das Lüften allein"], correct: 0, explanation: "Die Händedesinfektion nach den fünf Momenten der WHO ist die wirksamste Einzelmaßnahme." },
    { category: "beruf_pflege", question: "Was versteht man unter Dekubitusprophylaxe?", answers: ["Maßnahmen zur Vorbeugung von Druckgeschwüren", "Vorbeugung von Stürzen", "Vorbeugung von Erkältungen"], correct: 0, explanation: "Regelmäßige Positionswechsel, Hautpflege und Druckentlastung sind zentral." },
    { category: "beruf_pflege", question: "Welche Schritte umfasst der Pflegeprozess?", answers: ["Informationssammlung, Planung, Durchführung und Evaluation", "Nur die Dokumentation", "Nur die Visite"], correct: 0, explanation: "Der Pflegeprozess ist ein Regelkreis und wird laufend angepasst." },
    { category: "beruf_pflege", question: "Warum ist die Pflegedokumentation so wichtig?", answers: ["Sie sichert Nachvollziehbarkeit, Qualität und rechtliche Absicherung", "Sie ist reine Formsache", "Sie ersetzt die Übergabe"], correct: 0, explanation: "Was nicht dokumentiert ist, gilt im Streitfall als nicht durchgeführt." },
    { category: "beruf_pflege", question: "Was gilt für die Schweigepflicht in der Pflege?", answers: ["Patientendaten dürfen nicht unbefugt weitergegeben werden", "Angehörige dürfen immer alles erfahren", "Sie gilt nur für Ärzte"], correct: 0, explanation: "Die Schweigepflicht ist strafbewehrt (§ 203 StGB) und gilt auch für Auszubildende." },
    { category: "beruf_pflege", question: "Wie lagert man eine bewusstlose Person mit normaler Atmung?", answers: ["In der stabilen Seitenlage", "Flach auf dem Rücken", "Sitzend an die Wand gelehnt"], correct: 0, explanation: "Die Seitenlage hält die Atemwege frei und verhindert das Einatmen von Erbrochenem." },
    { category: "beruf_pflege", question: "Was ist ein Ziel der Sturzprophylaxe?", answers: ["Sturzrisiken erkennen und die Umgebung sicher gestalten", "Bewegung möglichst vermeiden", "Betroffene dauerhaft im Bett halten"], correct: 0, explanation: "Bewegungsförderung, gutes Schuhwerk und freie Wege senken das Sturzrisiko." },

    // --- BERUFSSCHULE: FRISEUR/IN ---
    { category: "beruf_friseur", question: "Aus welchen drei Schichten besteht das Haar von außen nach innen?", answers: ["Schuppenschicht, Faserschicht, Mark", "Mark, Haut, Wurzel", "Fettschicht, Hornschicht, Nervenschicht"], correct: 0, explanation: "Cuticula (Schuppenschicht), Cortex (Faserschicht) und Medulla (Mark)." },
    { category: "beruf_friseur", question: "Welchen pH-Wert hat gesunde Kopfhaut ungefähr?", answers: ["Etwa 5,5 (leicht sauer)", "Etwa 7 (neutral)", "Etwa 9 (basisch)"], correct: 0, explanation: "Der leicht saure Schutzmantel hemmt das Wachstum von Keimen." },
    { category: "beruf_friseur", question: "Was bewirkt Wasserstoffperoxid beim Färben?", answers: ["Es öffnet die Schuppenschicht und entwickelt die Farbe", "Es kühlt die Kopfhaut", "Es fixiert die Frisur"], correct: 0, explanation: "H2O2 oxidiert die Farbstoffvorstufen und hellt gleichzeitig das Naturpigment auf." },
    { category: "beruf_friseur", question: "Welche zwei Schritte umfasst eine Dauerwelle?", answers: ["Reduktion (Umformen) und Fixierung", "Waschen und Föhnen", "Schneiden und Tönen"], correct: 0, explanation: "Das Wellmittel öffnet die Schwefelbrücken, die Fixierung schließt sie in neuer Form." },
    { category: "beruf_friseur", question: "Warum wird vor einer Coloration eine Verträglichkeitsprobe empfohlen?", answers: ["Um allergische Reaktionen auf Farbstoffe auszuschließen", "Um den Preis zu ermitteln", "Um die Haarlänge zu messen"], correct: 0, explanation: "Besonders PPD in Oxidationsfarben kann Allergien auslösen." },
    { category: "beruf_friseur", question: "Was gehört zur Hygiene am Arbeitsplatz im Salon?", answers: ["Desinfektion von Scheren, Kämmen und Flächen", "Nur das Fegen der Haare", "Nur das Händewaschen am Feierabend"], correct: 0, explanation: "Der Hygieneplan regelt Reinigung und Desinfektion aller Werkzeuge und Flächen." },
    { category: "beruf_friseur", question: "Was ist das Ziel einer Kundenberatung vor dem Schnitt?", answers: ["Wünsche, Haarstruktur und Gesichtsform gemeinsam abzustimmen", "Möglichst teure Produkte zu verkaufen", "Den Termin zu verkürzen"], correct: 0, explanation: "Eine gute Beratung verhindert Missverständnisse und Reklamationen." },
    { category: "beruf_friseur", question: "Was passiert beim Blondieren mit dem Haar?", answers: ["Die natürlichen Pigmente werden aufgehellt und zerstört", "Es wird Farbe hinzugefügt", "Die Schuppenschicht wird verdichtet"], correct: 0, explanation: "Blondieren belastet das Haar stark, deshalb sind Pflege und Abstände wichtig." },

    // --- SPASS: FÜR DIE KLEINEN ---
    { category: "spass_kleine", question: "Welches Tier sagt 'Muh'?", answers: ["Kuh 🐄", "Ente 🦆", "Hund 🐕"], correct: 0, explanation: "Die Kuh macht 'Muh'!" },
    { category: "spass_kleine", question: "Welche Farbe hat Gras?", answers: ["Grün", "Blau", "Rot"], correct: 0, explanation: "Gras ist grün – das kommt vom Blattgrün (Chlorophyll)." },
    { category: "spass_kleine", question: "Wie viele Räder hat ein Fahrrad?", answers: ["2", "3", "4"], correct: 0, explanation: "Ein Fahrrad hat zwei Räder, ein Dreirad drei." },
    { category: "spass_kleine", question: "Was fliegt am Himmel?", answers: ["Ein Vogel", "Ein Fisch", "Ein Auto"], correct: 0, explanation: "Vögel und Flugzeuge fliegen am Himmel." },
    { category: "spass_kleine", question: "Welches Tier hat einen langen Rüssel?", answers: ["Elefant 🐘", "Maus 🐭", "Katze 🐈"], correct: 0, explanation: "Mit dem Rüssel trinkt und greift der Elefant." },
    { category: "spass_kleine", question: "Was isst man zum Frühstück?", answers: ["Brötchen", "Schuhe", "Steine"], correct: 0, explanation: "Zum Frühstück gibt es meist Brot, Müsli oder Obst." },
    { category: "spass_kleine", question: "Welche Farbe hat Schnee?", answers: ["Weiß", "Schwarz", "Grün"], correct: 0, explanation: "Schnee sieht weiß aus, weil er das Licht in alle Richtungen streut." },
    { category: "spass_kleine", question: "Wo schläft man normalerweise?", answers: ["Im Bett", "Im Kühlschrank", "Im Auto"], correct: 0, explanation: "Zum Schlafen legt man sich ins Bett." },
    { category: "spass_kleine", question: "Wie viele Augen hat ein Mensch?", answers: ["2", "1", "3"], correct: 0, explanation: "Zwei Augen helfen uns, räumlich zu sehen." },
    { category: "spass_kleine", question: "Welches Tier wohnt im Wasser?", answers: ["Fisch 🐟", "Löwe 🦁", "Pferd 🐴"], correct: 0, explanation: "Fische atmen mit Kiemen und leben im Wasser." },
    { category: "spass_kleine", question: "Was braucht eine Pflanze zum Wachsen?", answers: ["Wasser und Licht", "Schokolade", "Musik"], correct: 0, explanation: "Pflanzen brauchen Wasser, Licht und Erde." },
    { category: "spass_kleine", question: "Welche Jahreszeit ist es, wenn es schneit?", answers: ["Winter ❄️", "Sommer ☀️", "Frühling 🌷"], correct: 0, explanation: "Im Winter ist es kalt und es kann schneien." },

    // --- SPASS: MUSIK ---
    { category: "spass_musik", question: "Wie viele Saiten hat eine normale Gitarre?", answers: ["6", "4", "8"], correct: 0, explanation: "Eine E-Bass hat meist 4 Saiten, eine Gitarre 6." },
    { category: "spass_musik", question: "Welches Instrument hat schwarze und weiße Tasten?", answers: ["Klavier", "Trompete", "Geige"], correct: 0, explanation: "Ein Klavier hat 88 Tasten – 52 weiße und 36 schwarze." },
    { category: "spass_musik", question: "Wie heißt der Anführer eines Orchesters?", answers: ["Dirigent", "Kapitän", "Trainer"], correct: 0, explanation: "Der Dirigent gibt Takt und Einsätze vor." },
    { category: "spass_musik", question: "Aus welchem Land stammt die Musikrichtung Reggae?", answers: ["Jamaika", "Brasilien", "Irland"], correct: 0, explanation: "Reggae entstand in den 1960er-Jahren in Jamaika." },
    { category: "spass_musik", question: "Wie viele Töne hat eine Tonleiter von C bis zum nächsten C?", answers: ["8", "5", "12"], correct: 0, explanation: "C-D-E-F-G-A-H-C – acht Töne, daher der Name Oktave." },
    { category: "spass_musik", question: "Welches Instrument gehört zu den Schlaginstrumenten?", answers: ["Trommel", "Flöte", "Cello"], correct: 0, explanation: "Bei Schlaginstrumenten entsteht der Ton durch Schlagen oder Schütteln." },
    { category: "spass_musik", question: "Wer komponierte die 'Kleine Nachtmusik'?", answers: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach"], correct: 0, explanation: "Mozart schrieb sie 1787 – eines der bekanntesten klassischen Stücke." },
    { category: "spass_musik", question: "Was ist ein 'Refrain' in einem Lied?", answers: ["Der wiederkehrende Teil zwischen den Strophen", "Der erste Ton", "Das Instrument im Hintergrund"], correct: 0, explanation: "Der Refrain wiederholt sich und bleibt am besten im Ohr." },
    { category: "spass_musik", question: "Welches Instrument spielt man mit einem Bogen?", answers: ["Geige", "Klavier", "Schlagzeug"], correct: 0, explanation: "Streichinstrumente wie Geige, Bratsche und Cello werden mit dem Bogen gestrichen." },
    { category: "spass_musik", question: "Was misst man in 'BPM'?", answers: ["Das Tempo eines Liedes", "Die Lautstärke", "Die Länge des Liedes"], correct: 0, explanation: "BPM steht für 'beats per minute' – Schläge pro Minute." },
    { category: "spass_musik", question: "Wie nennt man Musik ohne Gesang?", answers: ["Instrumental", "A cappella", "Duett"], correct: 0, explanation: "Umgekehrt bedeutet 'a cappella' Gesang ohne Instrumente." },
    { category: "spass_musik", question: "Aus welchem Land kommt der Tango ursprünglich?", answers: ["Argentinien", "Spanien", "Italien"], correct: 0, explanation: "Der Tango entstand rund um Buenos Aires und Montevideo." },

    // --- SPASS: ESSEN & TRINKEN ---
    { category: "spass_essen", question: "Aus welchem Land stammt die Pizza ursprünglich?", answers: ["Italien", "Griechenland", "Spanien"], correct: 0, explanation: "Die Pizza Margherita stammt aus Neapel und trägt die Farben Italiens." },
    { category: "spass_essen", question: "Woraus wird Schokolade hergestellt?", answers: ["Aus Kakaobohnen", "Aus Kaffeebohnen", "Aus Nüssen"], correct: 0, explanation: "Kakaobohnen wachsen an Kakaobäumen in tropischen Regionen." },
    { category: "spass_essen", question: "Welches Gemüse macht beim Schneiden oft die Augen tränen?", answers: ["Zwiebel", "Karotte", "Gurke"], correct: 0, explanation: "Beim Schneiden werden reizende Schwefelverbindungen freigesetzt." },
    { category: "spass_essen", question: "Was ist Sushi hauptsächlich?", answers: ["Reis mit Fisch oder Gemüse", "Gebratene Nudeln", "Ein Suppengericht"], correct: 0, explanation: "'Sushi' bezieht sich eigentlich auf den gesäuerten Reis." },
    { category: "spass_essen", question: "Welches Getränk wird aus Gerste, Hopfen, Hefe und Wasser gebraut?", answers: ["Bier", "Wein", "Limonade"], correct: 0, explanation: "Das deutsche Reinheitsgebot von 1516 nennt genau diese Zutaten." },
    { category: "spass_essen", question: "Woraus besteht Guacamole hauptsächlich?", answers: ["Avocado", "Erbsen", "Brokkoli"], correct: 0, explanation: "Guacamole ist eine mexikanische Creme aus Avocado, Limette und Zwiebel." },
    { category: "spass_essen", question: "Welche Frucht ist botanisch gesehen eine Beere?", answers: ["Banane", "Erdbeere", "Himbeere"], correct: 0, explanation: "Kurios: Bananen sind botanisch Beeren, Erdbeeren dagegen Sammelnussfrüchte." },
    { category: "spass_essen", question: "Was macht Chili scharf?", answers: ["Capsaicin", "Zucker", "Salz"], correct: 0, explanation: "Capsaicin reizt die Wärmerezeptoren im Mund – daher das Brennen." },
    { category: "spass_essen", question: "Wie heißt das japanische Wort für grünen Pulvertee?", answers: ["Matcha", "Mango", "Miso"], correct: 0, explanation: "Matcha wird aus fein gemahlenen Grünteeblättern zubereitet." },
    { category: "spass_essen", question: "Welches Lebensmittel besteht zu über 90 Prozent aus Wasser?", answers: ["Gurke", "Brot", "Käse"], correct: 0, explanation: "Gurken bestehen zu etwa 95 Prozent aus Wasser." },
    { category: "spass_essen", question: "Was ist Hummus?", answers: ["Eine Creme aus Kichererbsen", "Ein Fleischgericht", "Eine Süßspeise"], correct: 0, explanation: "Hummus wird aus Kichererbsen, Sesampaste, Zitrone und Knoblauch gemacht." },
    { category: "spass_essen", question: "Welcher Käse hat traditionell Löcher?", answers: ["Emmentaler", "Gouda", "Feta"], correct: 0, explanation: "Die Löcher entstehen durch Gasbildung bestimmter Bakterien beim Reifen." },

    // --- SPASS: TIERE ---
    { category: "spass_tiere", question: "Welches Tier kann seine Augen unabhängig voneinander bewegen?", answers: ["Chamäleon", "Katze", "Hund"], correct: 0, explanation: "So kann es gleichzeitig in zwei Richtungen schauen." },
    { category: "spass_tiere", question: "Wie lange ist ein Blauwal ungefähr maximal?", answers: ["Etwa 30 Meter", "Etwa 10 Meter", "Etwa 60 Meter"], correct: 0, explanation: "Der Blauwal ist das größte Tier, das je auf der Erde gelebt hat." },
    { category: "spass_tiere", question: "Welches Tier hat den stärksten Biss?", answers: ["Krokodil", "Löwe", "Wolf"], correct: 0, explanation: "Das Salzwasserkrokodil erreicht die höchste gemessene Beißkraft." },
    { category: "spass_tiere", question: "Wie nennt man ein Baby-Känguru?", answers: ["Joey", "Kalb", "Welpe"], correct: 0, explanation: "Ein Joey ist bei der Geburt nur etwa 2 cm groß." },
    { category: "spass_tiere", question: "Welches Tier schläft im Stehen?", answers: ["Pferd", "Hund", "Hamster"], correct: 0, explanation: "Pferde können dank eines Sperrmechanismus im Bein im Stehen dösen." },
    { category: "spass_tiere", question: "Wie viele Beine hat ein Tausendfüßler tatsächlich meistens?", answers: ["Deutlich weniger als 1000", "Genau 1000", "Über 5000"], correct: 0, explanation: "Die meisten Arten haben zwischen 30 und 400 Beine." },
    { category: "spass_tiere", question: "Welcher Vogel kann rückwärts fliegen?", answers: ["Kolibri", "Adler", "Taube"], correct: 0, explanation: "Kolibris schlagen bis zu 80-mal pro Sekunde mit den Flügeln." },
    { category: "spass_tiere", question: "Was fressen Pandas fast ausschließlich?", answers: ["Bambus", "Fisch", "Fleisch"], correct: 0, explanation: "Große Pandas fressen täglich bis zu 20 kg Bambus." },
    { category: "spass_tiere", question: "Welches Tier wechselt im Winter die Fellfarbe zu Weiß?", answers: ["Schneehase", "Fuchs", "Reh"], correct: 0, explanation: "Auch Hermelin und Schneehuhn tarnen sich so im Schnee." },
    { category: "spass_tiere", question: "Wie verständigen sich Bienen über Futterquellen?", answers: ["Mit einem Schwänzeltanz", "Mit Gesang", "Mit Farben"], correct: 0, explanation: "Der Tanz verrät Richtung und Entfernung zur Blüte." },
    { category: "spass_tiere", question: "Welches ist das schnellste Tier der Welt (im Sturzflug)?", answers: ["Wanderfalke", "Gepard", "Segelfisch"], correct: 0, explanation: "Im Sturzflug erreicht der Wanderfalke über 300 km/h." },
    { category: "spass_tiere", question: "Wie viele Zähne hat ein erwachsener Hund ungefähr?", answers: ["42", "20", "60"], correct: 0, explanation: "Hunde haben 42 bleibende Zähne, Katzen nur 30." },

    // --- SPASS: LÄNDER & FLAGGEN ---
    { category: "spass_laender", question: "Welche Farben hat die deutsche Flagge von oben nach unten?", answers: ["Schwarz, Rot, Gold", "Rot, Schwarz, Gold", "Gold, Rot, Schwarz"], correct: 0, explanation: "Die Reihenfolge ist Schwarz-Rot-Gold." },
    { category: "spass_laender", question: "Welches Land hat einen roten Punkt auf weißer Flagge?", answers: ["Japan", "China", "Südkorea"], correct: 0, explanation: "Die japanische Flagge heißt 'Hinomaru' – Sonnenscheibe." },
    { category: "spass_laender", question: "Wie heißt die Hauptstadt der Türkei?", answers: ["Ankara", "Istanbul", "Izmir"], correct: 0, explanation: "Istanbul ist die größte Stadt, Hauptstadt ist aber Ankara." },
    { category: "spass_laender", question: "Auf welchem Kontinent liegt Ägypten hauptsächlich?", answers: ["Afrika", "Asien", "Europa"], correct: 0, explanation: "Nur die Sinai-Halbinsel gehört geografisch zu Asien." },
    { category: "spass_laender", question: "Welches Land ist das kleinste der Welt?", answers: ["Vatikanstadt", "Monaco", "Malta"], correct: 0, explanation: "Der Vatikan ist nur etwa 0,44 km² groß." },
    { category: "spass_laender", question: "Welche Flagge zeigt ein Ahornblatt?", answers: ["Kanada", "Norwegen", "Australien"], correct: 0, explanation: "Das rote Ahornblatt ist das Wahrzeichen Kanadas." },
    { category: "spass_laender", question: "An welches Land grenzt Deutschland im Süden?", answers: ["Österreich und Schweiz", "Dänemark", "Polen"], correct: 0, explanation: "Deutschland hat insgesamt neun Nachbarländer." },
    { category: "spass_laender", question: "In welchem Land steht die Freiheitsstatue?", answers: ["USA", "Frankreich", "England"], correct: 0, explanation: "Sie steht in New York und war ein Geschenk Frankreichs." },
    { category: "spass_laender", question: "Welches Land hat die meisten Zeitzonen?", answers: ["Frankreich (mit Überseegebieten)", "Deutschland (mit den Nordseeinseln)", "Italien (mit Sizilien und Sardinien)"], correct: 0, explanation: "Durch seine Überseegebiete kommt Frankreich auf zwölf Zeitzonen." },
    { category: "spass_laender", question: "Wie heißt der längste Fluss Afrikas?", answers: ["Nil", "Kongo", "Sambesi"], correct: 0, explanation: "Der Nil ist etwa 6.650 km lang." },
    { category: "spass_laender", question: "Welche Stadt wird auch 'die ewige Stadt' genannt?", answers: ["Rom", "Athen", "Kairo"], correct: 0, explanation: "Rom trägt diesen Beinamen seit der Antike." },
    { category: "spass_laender", question: "Welches Land liegt vollständig in den Alpen und ist sehr klein?", answers: ["Liechtenstein", "Belgien", "Portugal"], correct: 0, explanation: "Liechtenstein liegt zwischen der Schweiz und Österreich." },

    // --- SPASS: ERFINDUNGEN & TECHNIK ---
    { category: "spass_erfindungen", question: "Wer erfand den Buchdruck mit beweglichen Lettern in Europa?", answers: ["Johannes Gutenberg", "Albert Einstein", "Karl Benz"], correct: 0, explanation: "Um 1450 revolutionierte Gutenberg die Verbreitung von Wissen." },
    { category: "spass_erfindungen", question: "Wer baute das erste Automobil mit Verbrennungsmotor?", answers: ["Carl Benz", "Henry Ford", "Rudolf Diesel"], correct: 0, explanation: "1886 meldete Carl Benz seinen Motorwagen zum Patent an." },
    { category: "spass_erfindungen", question: "Wofür steht 'WWW'?", answers: ["World Wide Web", "Wireless Web World", "Web Work Widget"], correct: 0, explanation: "Tim Berners-Lee entwickelte es 1989 am CERN." },
    { category: "spass_erfindungen", question: "Was war der Zweck der ersten Glühbirne?", answers: ["Elektrisches Licht ohne offene Flamme", "Wärme erzeugen", "Töne verstärken"], correct: 0, explanation: "Thomas Edison machte sie ab 1879 alltagstauglich." },
    { category: "spass_erfindungen", question: "Welches Gerät wandelt Sonnenlicht direkt in Strom um?", answers: ["Solarzelle", "Dynamo", "Turbine"], correct: 0, explanation: "In der Photovoltaik entsteht Strom durch den photoelektrischen Effekt." },
    { category: "spass_erfindungen", question: "Wofür steht 'GPS'?", answers: ["Global Positioning System", "General Power Supply", "Global Phone Service"], correct: 0, explanation: "Satelliten bestimmen die Position über Laufzeitmessung." },
    { category: "spass_erfindungen", question: "Was war die Aufgabe des ersten Computers ENIAC (1945)?", answers: ["Ballistische Berechnungen", "Videospiele", "Musik abspielen"], correct: 0, explanation: "Der ENIAC füllte einen ganzen Raum und wog etwa 27 Tonnen." },
    { category: "spass_erfindungen", question: "Wer entwickelte die Theorie der Relativität?", answers: ["Albert Einstein", "Isaac Newton", "Nikola Tesla"], correct: 0, explanation: "Einstein veröffentlichte die spezielle Relativitätstheorie 1905." },
    { category: "spass_erfindungen", question: "Was macht ein 3D-Drucker?", answers: ["Er baut Gegenstände Schicht für Schicht auf", "Er druckt bunte Bilder", "Er scannt Dokumente"], correct: 0, explanation: "Dieses Verfahren nennt man additive Fertigung." },
    { category: "spass_erfindungen", question: "Wofür wurde Klettverschluss vorbildhaft nachgeahmt?", answers: ["Für Kletten aus der Natur", "Für Fischschuppen", "Für Spinnennetze"], correct: 0, explanation: "Ein Beispiel für Bionik: Natur als Vorbild für Technik." },
    { category: "spass_erfindungen", question: "Was ist ein Akku im Unterschied zur Batterie?", answers: ["Er ist wiederaufladbar", "Er ist immer größer", "Er hält ewig"], correct: 0, explanation: "Batterien sind Primärzellen (einmalig), Akkus Sekundärzellen (wiederaufladbar)." },
    { category: "spass_erfindungen", question: "Wann startete die erste bemannte Mondlandung?", answers: ["1969", "1959", "1979"], correct: 0, explanation: "Apollo 11 landete am 20. Juli 1969 auf dem Mond." },

    // --- SPASS: RÄTSEL & LOGIK ---
    { category: "spass_raetsel", question: "Was wird nasser, je mehr es trocknet?", answers: ["Ein Handtuch", "Ein Stein", "Ein Schuh"], correct: 0, explanation: "Je mehr es abtrocknet, desto nasser wird es selbst." },
    { category: "spass_raetsel", question: "Ein Bauer hat 17 Schafe. Alle bis auf 9 laufen weg. Wie viele bleiben?", answers: ["9", "8", "17"], correct: 0, explanation: "'Alle bis auf 9' heißt: genau 9 bleiben übrig." },
    { category: "spass_raetsel", question: "Was hat Städte, aber keine Häuser, und Wasser, aber keine Fische?", answers: ["Eine Landkarte", "Ein Buch", "Ein Fernseher"], correct: 0, explanation: "Auf einer Landkarte sind Städte und Flüsse eingezeichnet." },
    { category: "spass_raetsel", question: "Wie viele Monate haben 28 Tage?", answers: ["Alle 12", "Nur einer", "Zwei"], correct: 0, explanation: "Jeder Monat hat mindestens 28 Tage." },
    { category: "spass_raetsel", question: "Was geht hoch, wenn der Regen runterkommt?", answers: ["Der Regenschirm", "Der Boden", "Die Sonne"], correct: 0, explanation: "Ein kleines Wortspiel-Rätsel." },
    { category: "spass_raetsel", question: "Setze die Reihe fort: 2, 4, 8, 16, ...", answers: ["32", "20", "24"], correct: 0, explanation: "Jede Zahl ist das Doppelte der vorherigen." },
    { category: "spass_raetsel", question: "Setze fort: 1, 1, 2, 3, 5, 8, ...", answers: ["13", "11", "16"], correct: 0, explanation: "Fibonacci-Folge: Jede Zahl ist die Summe der beiden vorherigen." },
    { category: "spass_raetsel", question: "Ein Zug fährt von Köln nach Berlin. Was fährt er, wenn er zurückfährt?", answers: ["Von Berlin nach Köln", "Nach Hamburg", "Er bleibt stehen"], correct: 0, explanation: "Eine Scherzfrage, bei der man oft zu kompliziert denkt." },
    { category: "spass_raetsel", question: "Was ist schwerer: 1 kg Federn oder 1 kg Blei?", answers: ["Beides gleich schwer", "Blei", "Federn"], correct: 0, explanation: "Ein Kilogramm ist ein Kilogramm – nur das Volumen unterscheidet sich." },
    { category: "spass_raetsel", question: "Vater und Sohn sind zusammen 60 Jahre. Der Vater ist dreimal so alt. Wie alt ist der Sohn?", answers: ["15", "20", "12"], correct: 0, explanation: "Sohn 15, Vater 45 – zusammen 60 und dreimal so alt." },
    { category: "spass_raetsel", question: "Wie oft kann man 10 von 100 abziehen?", answers: ["Einmal, danach ist es 90", "Zehnmal", "Unendlich oft"], correct: 0, explanation: "Beim zweiten Mal zieht man ja von 90 ab, nicht mehr von 100." },
    { category: "spass_raetsel", question: "Was kann man fangen, aber nicht werfen?", answers: ["Eine Erkältung", "Einen Ball", "Einen Stein"], correct: 0, explanation: "Man 'fängt sich' eine Erkältung ein." },

    // --- ERGAENZUNG BESTEHENDE SPASS-KATEGORIEN ---
    { category: "spass_allgemein", question: "Wie viele Bundesländer hat Österreich?", answers: ["9", "16", "7"], correct: 0, explanation: "Österreich besteht aus neun Bundesländern, Deutschland aus 16." },
    { category: "spass_allgemein", question: "Welches Metall ist bei Zimmertemperatur flüssig?", answers: ["Quecksilber", "Eisen", "Kupfer"], correct: 0, explanation: "Quecksilber schmilzt bereits bei etwa -39 °C." },
    { category: "spass_allgemein", question: "Wie viele Spieler stehen bei einer Volleyball-Mannschaft auf dem Feld?", answers: ["6", "5", "7"], correct: 0, explanation: "Beim Hallenvolleyball spielen sechs pro Team, beim Beachvolleyball zwei." },
    { category: "spass_allgemein", question: "Welche Sprache wird in Brasilien gesprochen?", answers: ["Portugiesisch", "Spanisch", "Brasilianisch"], correct: 0, explanation: "Brasilien war portugiesische Kolonie – als einziges Land Südamerikas." },
    { category: "spass_allgemein", question: "Wie heißt der höchste Berg der Welt?", answers: ["Mount Everest", "K2", "Mont Blanc"], correct: 0, explanation: "Der Mount Everest ist rund 8.849 Meter hoch." },

    { category: "spass_wuerdest_du", question: "Schätzfrage: Was ist beliebter als Urlaubsziel – Berge oder Meer?", answers: ["Meer 🏖️", "Berge ⛰️", "Beides gleich"], correct: 0, explanation: "😄 In Umfragen liegt der Strandurlaub meist deutlich vorn." },
    { category: "spass_wuerdest_du", question: "Schätzfrage: Was trinken die meisten Deutschen morgens?", answers: ["Kaffee ☕", "Tee 🍵", "Kakao"], correct: 0, explanation: "😄 Deutschland ist ein Kaffeeland – rund 160 Liter pro Kopf und Jahr." },
    { category: "spass_wuerdest_du", question: "Scherzfrage: Aufstehen um 6 Uhr oder bis Mittag schlafen – was ist die ehrlichste Antwort?", answers: ["Bis Mittag schlafen 😴", "Um 6 Uhr aufstehen ⏰", "Kommt ganz auf den Tag an"], correct: 2, explanation: "😄 Am Wochenende sieht die Antwort meist anders aus als am Montag." },
    { category: "spass_wuerdest_du", question: "Schätzfrage: Was ist das beliebteste Haustier in Deutschland?", answers: ["Katze 🐈", "Hund 🐕", "Hamster 🐹"], correct: 0, explanation: "😄 In deutschen Haushalten leben mehr Katzen als Hunde." },
    { category: "spass_wuerdest_du", question: "Scherzfrage: Nie wieder Pizza oder nie wieder Pommes?", answers: ["Nie wieder Pommes 🍟", "Nie wieder Pizza 🍕", "Bitte beides behalten!"], correct: 2, explanation: "😄 Die ehrlichste Antwort am Familienabend." },
    { category: "spass_wuerdest_du", question: "Schätzfrage: Welche Eissorte wird weltweit am meisten gegessen?", answers: ["Vanille 🍦", "Schokolade 🍫", "Erdbeere 🍓"], correct: 0, explanation: "😄 Vanille gilt als beliebteste Eissorte der Welt." },

    { category: "spass_nice_to_know", question: "Nice to know: Wie viele Geschmacksrichtungen kann die Zunge unterscheiden?", answers: ["Fünf (süß, sauer, salzig, bitter, umami)", "Vier (süß, sauer, salzig, bitter)", "Zwei (süß und salzig)"], correct: 0, explanation: "Umami wurde erst 1908 in Japan beschrieben." },
    { category: "spass_nice_to_know", question: "Nice to know: Warum ist der Himmel blau?", answers: ["Blaues Licht wird in der Luft am stärksten gestreut", "Weil das Meer sich spiegelt", "Weil die Sonne blau ist"], correct: 0, explanation: "Man nennt das Rayleigh-Streuung." },
    { category: "spass_nice_to_know", question: "Nice to know: Wie viele Herzschläge hat ein Mensch etwa pro Tag?", answers: ["Rund 100.000", "Rund 10.000", "Rund 1 Million"], correct: 0, explanation: "Bei etwa 70 Schlägen pro Minute sind das gut 100.000 am Tag." },
    { category: "spass_nice_to_know", question: "Nice to know: Was ist der härteste natürliche Stoff?", answers: ["Diamant", "Granit", "Stahl"], correct: 0, explanation: "Diamant hat den Härtegrad 10 auf der Mohs-Skala." },
    { category: "spass_nice_to_know", question: "Nice to know: Wie viele Zellen hat der menschliche Körper ungefähr?", answers: ["Rund 30 Billionen", "Rund 30 Millionen", "Rund 30 Milliarden"], correct: 0, explanation: "Dazu kommen noch etwa genauso viele Bakterien im und am Körper." },
    { category: "spass_nice_to_know", question: "Nice to know: Warum gähnen Menschen ansteckend?", answers: ["Vermutlich durch Empathie und Spiegelneurone", "Wegen Sauerstoffmangel im Raum", "Reiner Zufall"], correct: 0, explanation: "Je näher man sich steht, desto ansteckender wirkt das Gähnen." },

    { category: "spass_welt", question: "Ungewöhnliches: Welches Land hat mehr Seen als der Rest der Welt zusammen?", answers: ["Kanada", "Russland", "Finnland"], correct: 0, explanation: "Kanada hat über zwei Millionen Seen." },
    { category: "spass_welt", question: "Ungewöhnliches: In welchem Land gibt es einen See, der pink ist?", answers: ["Australien (Lake Hillier)", "Island (wegen der heißen Quellen)", "Kanada (wegen der roten Algen)"], correct: 0, explanation: "Die Farbe entsteht durch Algen und salzliebende Mikroorganismen." },
    { category: "spass_welt", question: "Ungewöhnliches: Welche Stadt liegt auf zwei Kontinenten?", answers: ["Istanbul", "Kairo", "Athen"], correct: 0, explanation: "Der Bosporus trennt den europäischen vom asiatischen Teil." },
    { category: "spass_welt", question: "Ungewöhnliches: Welcher Ort gilt als trockenster der Erde?", answers: ["Atacama-Wüste in Chile", "Sahara", "Death Valley"], correct: 0, explanation: "In manchen Teilen der Atacama wurde jahrzehntelang kein Regen gemessen." },
    { category: "spass_welt", question: "Ungewöhnliches: Wie viele Menschen sprechen Chinesisch als Muttersprache?", answers: ["Über 900 Millionen", "Etwa 200 Millionen", "Etwa 50 Millionen"], correct: 0, explanation: "Mandarin ist die meistgesprochene Muttersprache der Welt." },
    { category: "spass_welt", question: "Ungewöhnliches: Warum liegen Samoa und Amerikanisch-Samoa fast einen ganzen Tag auseinander?", answers: ["Zwischen ihnen verläuft die Datumsgrenze", "Sie liegen sehr weit voneinander entfernt", "Sie nutzen unterschiedliche Kalender"], correct: 0, explanation: "Die Nachbarinseln sind nur rund 100 km entfernt – aber Samoa feiert Neujahr fast 24 Stunden früher." },

    { category: "spass_sport_film", question: "Wie lange dauert ein Basketballspiel in der NBA (reine Spielzeit)?", answers: ["4 x 12 Minuten", "2 x 45 Minuten", "3 x 20 Minuten"], correct: 0, explanation: "In der NBA sind es vier Viertel zu je zwölf Minuten." },
    { category: "spass_sport_film", question: "Alle wie viele Jahre finden die Olympischen Sommerspiele statt?", answers: ["Alle 4 Jahre", "Alle 2 Jahre", "Jedes Jahr"], correct: 0, explanation: "Sommer- und Winterspiele wechseln sich im Zwei-Jahres-Rhythmus ab." },
    { category: "spass_sport_film", question: "Wie heißt der wichtigste Filmpreis der USA?", answers: ["Oscar", "Grammy", "Emmy"], correct: 0, explanation: "Der Grammy ist für Musik, der Emmy für Fernsehen." },
    { category: "spass_sport_film", question: "In welchem Sport gibt es den Begriff 'Strike'?", answers: ["Bowling", "Tennis", "Schwimmen"], correct: 0, explanation: "Ein Strike bedeutet: alle zehn Pins mit dem ersten Wurf." },
    { category: "spass_sport_film", question: "Wie viele Minuten dauert eine Halbzeit beim Profi-Fußball?", answers: ["45", "30", "60"], correct: 0, explanation: "Zwei Halbzeiten à 45 Minuten plus Nachspielzeit." },
    { category: "spass_sport_film", question: "Was ist ein 'Cliffhanger' im Film?", answers: ["Ein Spannungsende, das offen bleibt", "Eine Verfolgungsjagd", "Der Abspann"], correct: 0, explanation: "Cliffhanger sollen die Zuschauer zur nächsten Folge locken." },

    // --- SPASS: SCHUL- & ALLTAGSHUMOR ---
    { category: "spass_humor", question: "Was ist das gefährlichste Tier Deutschlands?", answers: ["Wolf", "Wildschwein", "Der Montagmorgen"], correct: 2, explanation: "😱 Kein Tier ist so gefährlich wie der Wecker am Montag!" },
    { category: "spass_humor", question: "Wie überlebt man eine Gruppenarbeit?", answers: ["Nichts machen", "Kaffee trinken und nicken", "Alles selbst machen"], correct: 2, explanation: "🤝 Gruppenarbeit = Eine(r) macht's, der Rest guckt zu!" },
    { category: "spass_humor", question: "Was bedeutet 'kurz' auf Deutsch?", answers: ["Weniger als 1 Minute", "Weniger als 5 Minuten", "Irgendwas zwischen 5 Minuten und 3 Stunden"], correct: 2, explanation: "⏰ 'Ich bin kurz weg' = Komm in 3 Stunden wieder!" },
    { category: "spass_humor", noShuffle: true, question: "Was ist das wichtigste Schulfach, das es nicht gibt?", answers: ["Steuererklärung", "'Wie überlebe ich den Alltag?'", "Beides!"], correct: 2, explanation: "📚 Warum lernt man Gedichtanalyse, aber nicht, wie man eine Wohnung findet?!" },
    { category: "spass_humor", question: "Wofür steht die Abkürzung 'LOL' bei Lehrern?", answers: ["Laughing Out Loud", "Lehrer Ohne Langeweile", "Lernziel Ohne Lust"], correct: 2, explanation: "😂 Lehrer-LOL = 'Warum lacht da jemand? Das ist ein ernstes Thema!'" },
    { category: "spass_humor", question: "Was ist die häufigste Ausrede für fehlende Hausaufgaben?", answers: ["'Der Drucker war kaputt'", "'Ich dachte, das ist freiwillig'", "'Mein Hund hat sie gefressen'"], correct: 2, explanation: "🐶 Der Klassiker! Funktioniert seit 100 Jahren." },
    { category: "spass_humor", question: "Was denkt ein Lehrer wirklich, wenn er sagt 'Das wird eine leichte Übung'?", answers: ["'Ich will einfach nur meine Ruhe'", "'Das habe ich aus dem Internet'", "'Ihr werdet alle scheitern'"], correct: 2, explanation: "😈 'Leichte Übung' = Lehrer-Code für 'Ihr werdet leiden'!" },
    { category: "spass_humor", question: "Wofür steht die Abkürzung 'Muttizettel'?", answers: ["Mutters Genehmigung", "Mutti, ich will zocken", "Mündliche Unverbindliche Teilnahme-Toleranz"], correct: 2, explanation: "📝 Bürokratisch korrekt: M.U.T.T.! Egal was draufsteht – Hauptsache unterschrieben!" },
    { category: "spass_humor", question: "Was macht ein Schüler in der letzten Reihe?", answers: ["Aufpassen", "Schlafen mit offenen Augen", "Das echte Leben planen"], correct: 2, explanation: "💭 Letzte Reihe = Denkfabrik für alles außer Unterricht!" },
    { category: "spass_humor", question: "Was passiert, wenn der Lehrer sagt 'Ich brauche einen Freiwilligen'?", answers: ["Alle melden sich sofort", "Der Klassenbeste steht auf", "Plötzlich sind alle Schnürsenkel interessant"], correct: 2, explanation: "👀 Nie war der Fußboden so spannend wie in diesem Moment!" },
    { category: "spass_humor", question: "Wie lange dauert 'gleich' bei Eltern?", answers: ["Ungefähr eine Minute", "Ungefähr fünf Minuten", "Niemand hat es je gemessen"], correct: 2, explanation: "⌛ 'Gleich' ist die dehnbarste Zeiteinheit der Welt." },
    { category: "spass_humor", question: "Was ist das Erste, was man nach den Ferien in der Schule lernt?", answers: ["Den neuen Stundenplan", "Die neuen Regeln", "Wie man wieder früh aufsteht"], correct: 2, explanation: "😴 Und das ist mit Abstand das schwerste Fach!" },

    // --- SPASS: BERUFE MIT HUMOR ---
    { category: "spass_beruf_humor", question: "KFZ: Was sagt der Kunde, wenn der Motor klopft?", answers: ["'Da ist was kaputt'", "'Der klopft schon immer so'", "'Können Sie mal schnell gucken? Dauert bestimmt nur 5 Minuten'"], correct: 2, explanation: "⏱️ 'Nur 5 Minuten' = KFZ-Albtraum! In Wahrheit mindestens 5 Stunden." },
    { category: "spass_beruf_humor", noShuffle: true, question: "KFZ: Was bleibt nach jeder Reparatur übrig?", answers: ["Eine Schraube", "Ein Werkzeug", "Beides – und keiner weiß, wo sie hingehören"], correct: 2, explanation: "🔩 Zwei Schrauben übrig? Das Auto ist jetzt leichter = schneller!" },
    { category: "spass_beruf_humor", question: "Tischler: Was macht ein Tischler, wenn er Holz sägt?", answers: ["Genau nach Plan", "Dreimal falsch, einmal richtig", "Sägen, fluchen, neu sägen"], correct: 2, explanation: "🪚 Tischler-Regel Nr. 1: Immer mehr Holz einplanen als man braucht!" },
    { category: "spass_beruf_humor", question: "Friseur: Was sagt der Kunde NIE beim Friseur?", answers: ["'Machen Sie ruhig kürzer'", "'Ich habe noch viel Zeit'", "'Genau so wollte ich es!'"], correct: 2, explanation: "💇 Egal wie gut es aussieht – der Kunde wollte es 'eigentlich anders'!" },
    { category: "spass_beruf_humor", question: "Elektroniker: Wann funktioniert ein Gerät wieder?", answers: ["Nach genauer Fehleranalyse", "Wenn der Chef kommt", "Sobald man dagegen haut"], correct: 2, explanation: "⚡ 'Percussive Maintenance' – die edle Kunst des Draufhauens!" },
    { category: "spass_beruf_humor", question: "IT: Was ist die Lösung für 99 Prozent aller IT-Probleme?", answers: ["Das Kabel einmal umdrehen", "Lauter schimpfen", "'Haben Sie schon versucht, es aus- und wieder einzuschalten?'"], correct: 2, explanation: "🖥️ Der IT-Support-Klassiker – und er funktioniert WIRKLICH meistens!" },
    { category: "spass_beruf_humor", question: "Büro: Was bedeutet 'Ich melde mich zeitnah'?", answers: ["Innerhalb einer Stunde", "Noch heute", "Irgendwann zwischen morgen und nie"], correct: 2, explanation: "📧 'Zeitnah' ist die höflichste Art, 'keine Ahnung wann' zu sagen." },
    { category: "spass_beruf_humor", question: "Einzelhandel: Wann kommt der letzte Kunde?", answers: ["Mittags", "Am Nachmittag", "Genau eine Minute vor Ladenschluss"], correct: 2, explanation: "🛒 Und er braucht dann natürlich eine ausführliche Beratung." },
    { category: "spass_beruf_humor", question: "Werkstatt: Was ist die meistgenutzte Maßeinheit?", answers: ["Millimeter", "Zentimeter", "Pi mal Daumen"], correct: 2, explanation: "📏 Dicht gefolgt von 'passt schon' und 'ungefähr so'." },
    { category: "spass_beruf_humor", question: "Pflege: Was ist die häufigste Antwort auf 'Wie geht es Ihnen?'", answers: ["'Sehr gut, danke'", "'Geht so'", "'Muss ja'"], correct: 2, explanation: "🩺 Zwei Wörter, die alles sagen." },
    { category: "spass_beruf_humor", question: "Handwerk: Was heißt 'Ich komme dann Dienstag'?", answers: ["Nächsten Dienstag", "Übernächsten Dienstag", "Irgendeinen Dienstag in diesem Jahr"], correct: 2, explanation: "🔨 Die Handwerker-Woche hat bekanntlich sehr viele Dienstage." },
    { category: "spass_beruf_humor", question: "Ausbildung: Was lernt man im ersten Lehrjahr am besten?", answers: ["Alle Fachbegriffe", "Alle Werkzeuge", "Wo die Kaffeemaschine steht"], correct: 2, explanation: "☕ Und wie man sie bedient – die wichtigste Grundqualifikation!" }
];

// =======================================================
// LEHRPLAN-STRUKTUR: welche Faecher gibt es in welcher Klasse
// =======================================================
const CURRICULUM = [
    { grade: 1, label: "Klasse 1", stufe: "Grundschule", subjects: [{ key: "k1_deutsch", label: "📖 Deutsch (Lesen & Schreiben)" }, { key: "k1_mathe", label: "🔢 Mathematik" }, { key: "k1_sachunterricht", label: "🌱 Sachunterricht" }] },
    { grade: 2, label: "Klasse 2", stufe: "Grundschule", subjects: [{ key: "k2_deutsch", label: "📖 Deutsch" }, { key: "k2_mathe", label: "🔢 Mathematik" }, { key: "k2_sachunterricht", label: "🌱 Sachunterricht" }] },
    { grade: 3, label: "Klasse 3", stufe: "Grundschule", subjects: [{ key: "k3_deutsch", label: "📖 Deutsch" }, { key: "k3_mathe", label: "🔢 Mathematik" }, { key: "k3_sachunterricht", label: "🌱 Sachunterricht" }, { key: "k3_englisch", label: "🇬🇧 Englisch" }, { key: "k3_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 4, label: "Klasse 4", stufe: "Grundschule", subjects: [{ key: "k4_deutsch", label: "📖 Deutsch (Grammatik)" }, { key: "k4_mathe", label: "🔢 Mathematik" }, { key: "k4_sachunterricht", label: "🌱 Sachunterricht" }, { key: "k4_englisch", label: "🇬🇧 Englisch" }, { key: "k4_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 5, label: "Klasse 5", stufe: "Sekundarstufe I", subjects: [{ key: "k5_deutsch", label: "📖 Deutsch" }, { key: "k5_mathe", label: "🔢 Mathematik" }, { key: "k5_englisch", label: "🇬🇧 Englisch" }, { key: "k5_biologie", label: "🧬 Biologie" }, { key: "k5_erdkunde", label: "🌍 Erdkunde" }, { key: "k5_politik", label: "🏛️ Politik & Gesellschaftslehre" }, { key: "k5_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 6, label: "Klasse 6", stufe: "Sekundarstufe I", subjects: [{ key: "k6_deutsch", label: "📖 Deutsch" }, { key: "k6_mathe", label: "🔢 Mathematik" }, { key: "k6_englisch", label: "🇬🇧 Englisch" }, { key: "k6_biologie", label: "🧬 Biologie" }, { key: "k6_physik", label: "⚡ Physik" }, { key: "k6_geschichte", label: "📜 Geschichte" }, { key: "k6_erdkunde", label: "🌍 Erdkunde" }, { key: "k6_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 7, label: "Klasse 7", stufe: "Sekundarstufe I", subjects: [{ key: "k7_deutsch", label: "📖 Deutsch" }, { key: "k7_mathe", label: "🔢 Mathematik" }, { key: "k7_englisch", label: "🇬🇧 Englisch" }, { key: "k7_biologie", label: "🧬 Biologie" }, { key: "k7_chemie", label: "⚗️ Chemie" }, { key: "k7_physik", label: "⚡ Physik" }, { key: "k7_geschichte", label: "📜 Geschichte" }, { key: "k7_erdkunde", label: "🌍 Erdkunde" }, { key: "k7_politik", label: "🏛️ Politik & Wirtschaft" }, { key: "k7_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 8, label: "Klasse 8", stufe: "Sekundarstufe I", subjects: [{ key: "k8_deutsch", label: "📖 Deutsch" }, { key: "k8_mathe", label: "🔢 Mathematik" }, { key: "k8_englisch", label: "🇬🇧 Englisch" }, { key: "k8_biologie", label: "🧬 Biologie" }, { key: "k8_chemie", label: "⚗️ Chemie" }, { key: "k8_physik", label: "⚡ Physik" }, { key: "k8_geschichte", label: "📜 Geschichte" }, { key: "k8_erdkunde", label: "🌍 Erdkunde" }, { key: "k8_politik", label: "🏛️ Politik & Wirtschaft" }, { key: "k8_informatik", label: "💻 Informatik & Medien" }, { key: "k8_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 9, label: "Klasse 9", stufe: "Sekundarstufe I", subjects: [{ key: "k9_deutsch", label: "📖 Deutsch" }, { key: "k9_mathe", label: "🔢 Mathematik" }, { key: "k9_englisch", label: "🇬🇧 Englisch" }, { key: "k9_biologie", label: "🧬 Biologie" }, { key: "k9_chemie", label: "⚗️ Chemie" }, { key: "k9_physik", label: "⚡ Physik" }, { key: "k9_geschichte", label: "📜 Geschichte" }, { key: "k9_erdkunde", label: "🌍 Erdkunde" }, { key: "k9_politik", label: "🏛️ Politik & Wirtschaft" }, { key: "k9_informatik", label: "💻 Informatik & Medien" }, { key: "k9_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 10, label: "Klasse 10", stufe: "Sekundarstufe I", subjects: [{ key: "k10_deutsch", label: "📖 Deutsch" }, { key: "k10_mathe", label: "🔢 Mathematik" }, { key: "k10_englisch", label: "🇬🇧 Englisch" }, { key: "k10_biologie", label: "🧬 Biologie" }, { key: "k10_chemie", label: "⚗️ Chemie" }, { key: "k10_physik", label: "⚡ Physik" }, { key: "k10_geschichte", label: "📜 Geschichte" }, { key: "k10_erdkunde", label: "🌍 Erdkunde" }, { key: "k10_politik", label: "🏛️ Politik & Wirtschaft" }, { key: "k10_informatik", label: "💻 Informatik & Medien" }, { key: "k10_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 11, label: "Klasse 11", stufe: "Oberstufe", subjects: [{ key: "k11_deutsch", label: "📖 Deutsch" }, { key: "k11_mathe", label: "🔢 Mathematik" }, { key: "k11_englisch", label: "🇬🇧 Englisch" }, { key: "k11_biologie", label: "🧬 Biologie" }, { key: "k11_chemie", label: "⚗️ Chemie" }, { key: "k11_physik", label: "⚡ Physik" }, { key: "k11_geschichte", label: "📜 Geschichte" }, { key: "k11_sowi", label: "🏛️ Sozialwissenschaften" }, { key: "k11_informatik", label: "💻 Informatik" }] },
    { grade: 12, label: "Klasse 12", stufe: "Oberstufe", subjects: [{ key: "k12_deutsch", label: "📖 Deutsch" }, { key: "k12_mathe", label: "🔢 Mathematik" }, { key: "k12_englisch", label: "🇬🇧 Englisch" }, { key: "k12_biologie", label: "🧬 Biologie" }, { key: "k12_chemie", label: "⚗️ Chemie" }, { key: "k12_physik", label: "⚡ Physik" }, { key: "k12_geschichte", label: "📜 Geschichte" }, { key: "k12_sowi", label: "🏛️ Sozialwissenschaften" }, { key: "k12_informatik", label: "💻 Informatik" }] },
    { grade: 13, label: "Klasse 13", stufe: "Oberstufe", subjects: [{ key: "k13_deutsch", label: "📖 Deutsch (Abitur)" }, { key: "k13_mathe", label: "🔢 Mathematik (Abitur)" }, { key: "k13_englisch", label: "🇬🇧 Englisch (Abitur)" }, { key: "k13_biologie", label: "🧬 Biologie (Abitur)" }, { key: "k13_chemie", label: "⚗️ Chemie (Abitur)" }, { key: "k13_physik", label: "⚡ Physik (Abitur)" }, { key: "k13_geschichte", label: "📜 Geschichte (Abitur)" }, { key: "k13_sowi", label: "🏛️ Sozialwissenschaften (Abitur)" }, { key: "k13_informatik", label: "💻 Informatik (Abitur)" }] }
];

const BERUFSSCHULE = [
    { key: "beruf_kfz", label: "🔧 KFZ-Mechatronik" },
    { key: "beruf_elektro", label: "⚡ Elektroniker/in" },
    { key: "beruf_tischler", label: "🪵 Tischler/in" },
    { key: "beruf_industriemechaniker", label: "⚙️ Industriemechaniker/in" },
    { key: "beruf_fachinformatiker", label: "💻 Fachinformatiker/in" },
    { key: "beruf_buero", label: "📇 Kaufmann/-frau für Büromanagement" },
    { key: "beruf_verkaeufer", label: "🛒 Verkäufer/in & Einzelhandel" },
    { key: "beruf_pflege", label: "🩺 Pflegefachkraft" },
    { key: "beruf_friseur", label: "✂️ Friseur/in" }
];

// Spass-Kategorien - bewusst getrennt vom Lernbereich
const FUN_CATEGORIES = [
    { key: "spass_allgemein", label: "🏆 Allgemeinwissen" },
    { key: "spass_kleine", label: "🧸 Für die Kleinen (ganz leicht)" },
    { key: "spass_wuerdest_du", label: "🤔 Schätzfragen & Würdest du eher" },
    { key: "spass_nice_to_know", label: "✨ Nice to Know" },
    { key: "spass_welt", label: "🌍 Ungewöhnliches aus der Welt" },
    { key: "spass_sport_film", label: "🎬 Sport & Film" },
    { key: "spass_musik", label: "🎵 Musik" },
    { key: "spass_essen", label: "🍕 Essen & Trinken" },
    { key: "spass_tiere", label: "🐾 Tiere" },
    { key: "spass_laender", label: "🗺️ Länder & Flaggen" },
    { key: "spass_erfindungen", label: "💡 Erfindungen & Technik" },
    { key: "spass_raetsel", label: "🧩 Rätsel & Logik" },
    { key: "spass_humor", label: "😂 Schul- & Alltagshumor" },
    { key: "spass_beruf_humor", label: "🔧 Berufe mit Humor" }
];

const VOCABULARY_DATABASE = {
    en: {
        k3: {
            label: "Klasse 3 · Erste Wörter",
            words: [
                {de:"Eins",foreign:"one"}, {de:"Zwei",foreign:"two"}, {de:"Drei",foreign:"three"}, {de:"Vier",foreign:"four"}, {de:"Fünf",foreign:"five"},
                {de:"Sechs",foreign:"six"}, {de:"Sieben",foreign:"seven"}, {de:"Acht",foreign:"eight"}, {de:"Neun",foreign:"nine"}, {de:"Zehn",foreign:"ten"},
                {de:"Rot",foreign:"red"}, {de:"Blau",foreign:"blue"}, {de:"Grün",foreign:"green"}, {de:"Gelb",foreign:"yellow"}, {de:"Schwarz",foreign:"black"},
                {de:"Weiß",foreign:"white"}, {de:"Orange",foreign:"orange"}, {de:"Rosa",foreign:"pink"}, {de:"Braun",foreign:"brown"},
                {de:"Hund",foreign:"dog"}, {de:"Katze",foreign:"cat"}, {de:"Vogel",foreign:"bird"}, {de:"Pferd",foreign:"horse"}, {de:"Kuh",foreign:"cow"},
                {de:"Ball",foreign:"ball"}, {de:"Buch",foreign:"book"}, {de:"Stift",foreign:"pen"}, {de:"Tasche",foreign:"bag"},
                {de:"Hallo",foreign:"hello"}, {de:"Tschüss",foreign:"goodbye"}, {de:"Danke",foreign:"thank you"}, {de:"Bitte",foreign:"please"}
            ]
        },
        k4: {
            label: "Klasse 4 · Familie, Haus & Alltag",
            words: [
                {de:"Mutter",foreign:"mother"}, {de:"Vater",foreign:"father"}, {de:"Bruder",foreign:"brother"}, {de:"Schwester",foreign:"sister"},
                {de:"Großmutter",foreign:"grandmother"}, {de:"Großvater",foreign:"grandfather"}, {de:"Freund",foreign:"friend"},
                {de:"Haus",foreign:"house"}, {de:"Garten",foreign:"garden"}, {de:"Küche",foreign:"kitchen"}, {de:"Schlafzimmer",foreign:"bedroom"},
                {de:"Badezimmer",foreign:"bathroom"}, {de:"Fenster",foreign:"window"}, {de:"Tür",foreign:"door"}, {de:"Stuhl",foreign:"chair"}, {de:"Tisch",foreign:"table"},
                {de:"Schule",foreign:"school"}, {de:"Lehrer",foreign:"teacher"}, {de:"Tafel",foreign:"blackboard"}, {de:"Radiergummi",foreign:"eraser"}, {de:"Lineal",foreign:"ruler"},
                {de:"Montag",foreign:"Monday"}, {de:"Dienstag",foreign:"Tuesday"}, {de:"Mittwoch",foreign:"Wednesday"}, {de:"Donnerstag",foreign:"Thursday"},
                {de:"Freitag",foreign:"Friday"}, {de:"Samstag",foreign:"Saturday"}, {de:"Sonntag",foreign:"Sunday"},
                {de:"Apfel",foreign:"apple"}, {de:"Brot",foreign:"bread"}, {de:"Wasser",foreign:"water"}, {de:"Milch",foreign:"milk"}
            ]
        },
        k5: {
            label: "Klasse 5 · Körper, Zeit & Hobbys",
            words: [
                {de:"Kopf",foreign:"head"}, {de:"Hand",foreign:"hand"}, {de:"Fuß",foreign:"foot"}, {de:"Auge",foreign:"eye"}, {de:"Ohr",foreign:"ear"},
                {de:"Nase",foreign:"nose"}, {de:"Mund",foreign:"mouth"}, {de:"Arm",foreign:"arm"}, {de:"Bein",foreign:"leg"}, {de:"Haar",foreign:"hair"},
                {de:"Frühling",foreign:"spring"}, {de:"Sommer",foreign:"summer"}, {de:"Herbst",foreign:"autumn"}, {de:"Winter",foreign:"winter"},
                {de:"Morgen",foreign:"morning"}, {de:"Abend",foreign:"evening"}, {de:"Nacht",foreign:"night"}, {de:"Woche",foreign:"week"}, {de:"Monat",foreign:"month"},
                {de:"Fußball",foreign:"football"}, {de:"Schwimmen",foreign:"swimming"}, {de:"Radfahren",foreign:"cycling"}, {de:"Tanzen",foreign:"dancing"},
                {de:"Malen",foreign:"painting"}, {de:"Lesen",foreign:"reading"}, {de:"Musik",foreign:"music"},
                {de:"lustig",foreign:"funny"}, {de:"langweilig",foreign:"boring"}, {de:"schnell",foreign:"fast"}, {de:"langsam",foreign:"slow"}
            ]
        },
        k6: {
            label: "Klasse 6 · Alltag, Wetter & Kleidung",
            words: [
                {de:"Hemd",foreign:"shirt"}, {de:"Hose",foreign:"trousers"}, {de:"Jacke",foreign:"jacket"}, {de:"Schuh",foreign:"shoe"},
                {de:"Mütze",foreign:"cap"}, {de:"Kleid",foreign:"dress"}, {de:"Socke",foreign:"sock"},
                {de:"Wetter",foreign:"weather"}, {de:"Regen",foreign:"rain"}, {de:"Schnee",foreign:"snow"}, {de:"Wind",foreign:"wind"},
                {de:"Wolke",foreign:"cloud"}, {de:"Sonne",foreign:"sun"}, {de:"heiß",foreign:"hot"}, {de:"kalt",foreign:"cold"},
                {de:"aufstehen",foreign:"to get up"}, {de:"frühstücken",foreign:"to have breakfast"}, {de:"arbeiten",foreign:"to work"},
                {de:"kaufen",foreign:"to buy"}, {de:"helfen",foreign:"to help"}, {de:"warten",foreign:"to wait"}, {de:"bleiben",foreign:"to stay"},
                {de:"Frühstück",foreign:"breakfast"}, {de:"Mittagessen",foreign:"lunch"}, {de:"Abendessen",foreign:"dinner"},
                {de:"gestern",foreign:"yesterday"}, {de:"heute",foreign:"today"}, {de:"morgen",foreign:"tomorrow"},
                {de:"immer",foreign:"always"}, {de:"nie",foreign:"never"}, {de:"manchmal",foreign:"sometimes"}
            ]
        },
        k7: {
            label: "Klasse 7 · Reisen, Stadt & Medien",
            words: [
                {de:"Reise",foreign:"journey"}, {de:"Gepäck",foreign:"luggage"}, {de:"Reisepass",foreign:"passport"}, {de:"Fahrkarte",foreign:"ticket"},
                {de:"Ankunft",foreign:"arrival"}, {de:"Abflug",foreign:"departure"}, {de:"Unterkunft",foreign:"accommodation"}, {de:"Sehenswürdigkeit",foreign:"sight"},
                {de:"Bahnhof",foreign:"railway station"}, {de:"Flughafen",foreign:"airport"}, {de:"Straße",foreign:"street"}, {de:"Brücke",foreign:"bridge"},
                {de:"Geschäft",foreign:"shop"}, {de:"Markt",foreign:"market"}, {de:"Krankenhaus",foreign:"hospital"}, {de:"Bücherei",foreign:"library"},
                {de:"Nachricht",foreign:"news"}, {de:"Zeitung",foreign:"newspaper"}, {de:"Bildschirm",foreign:"screen"}, {de:"herunterladen",foreign:"to download"},
                {de:"hochladen",foreign:"to upload"}, {de:"Passwort",foreign:"password"}, {de:"soziales Netzwerk",foreign:"social network"}, {de:"Werbung",foreign:"advertising"},
                {de:"besuchen",foreign:"to visit"}, {de:"treffen",foreign:"to meet"}, {de:"entdecken",foreign:"to discover"}, {de:"vergleichen",foreign:"to compare"},
                {de:"spannend",foreign:"exciting"}, {de:"beliebt",foreign:"popular"}
            ]
        },
        k8: {
            label: "Klasse 8 · Umwelt, Technik & Gefühle",
            words: [
                {de:"Umwelt",foreign:"environment"}, {de:"Klima",foreign:"climate"}, {de:"Verschmutzung",foreign:"pollution"}, {de:"Abfall",foreign:"waste"},
                {de:"Recycling",foreign:"recycling"}, {de:"erneuerbar",foreign:"renewable"}, {de:"Ressource",foreign:"resource"}, {de:"Art (Tierart)",foreign:"species"},
                {de:"bedroht",foreign:"endangered"}, {de:"Energie sparen",foreign:"to save energy"},
                {de:"Technik",foreign:"technology"}, {de:"Erfindung",foreign:"invention"}, {de:"Gerät",foreign:"device"}, {de:"entwickeln",foreign:"to develop"},
                {de:"verbessern",foreign:"to improve"}, {de:"Experiment",foreign:"experiment"},
                {de:"stolz",foreign:"proud"}, {de:"aufgeregt",foreign:"excited"}, {de:"enttäuscht",foreign:"disappointed"}, {de:"nervös",foreign:"nervous"},
                {de:"überrascht",foreign:"surprised"}, {de:"zufrieden",foreign:"satisfied"}, {de:"besorgt",foreign:"worried"},
                {de:"Fach (Schule)",foreign:"subject"}, {de:"Prüfung",foreign:"exam"}, {de:"Note",foreign:"grade / mark"}, {de:"Hausaufgabe",foreign:"homework"},
                {de:"Chemie",foreign:"chemistry"}, {de:"Physik",foreign:"physics"}, {de:"Erdkunde",foreign:"geography"}
            ]
        },
        k9: {
            label: "Klasse 9 · Gesellschaft & Meinung",
            words: [
                {de:"Gesellschaft",foreign:"society"}, {de:"Gemeinschaft",foreign:"community"}, {de:"Regierung",foreign:"government"}, {de:"Gesetz",foreign:"law"},
                {de:"Recht",foreign:"right"}, {de:"Pflicht",foreign:"duty"}, {de:"Freiheit",foreign:"freedom"}, {de:"Gleichberechtigung",foreign:"equality"},
                {de:"Vorurteil",foreign:"prejudice"}, {de:"Toleranz",foreign:"tolerance"}, {de:"Einwanderung",foreign:"immigration"},
                {de:"Meinung",foreign:"opinion"}, {de:"Argument",foreign:"argument"}, {de:"Beweis",foreign:"evidence"}, {de:"Vorteil",foreign:"advantage"},
                {de:"Nachteil",foreign:"disadvantage"}, {de:"zustimmen",foreign:"to agree"}, {de:"ablehnen",foreign:"to reject"}, {de:"überzeugen",foreign:"to convince"},
                {de:"vorschlagen",foreign:"to suggest"}, {de:"erklären",foreign:"to explain"}, {de:"vergleichen",foreign:"to compare with"},
                {de:"Beruf",foreign:"profession"}, {de:"Praktikum",foreign:"work placement"}, {de:"Bewerbung",foreign:"application"}, {de:"Lebenslauf",foreign:"CV"},
                {de:"Erfahrung",foreign:"experience"}, {de:"Fähigkeit",foreign:"skill"}, {de:"Verantwortung",foreign:"responsibility"}
            ]
        },
        k10: {
            label: "Klasse 10 · Beruf, Wirtschaft & Diskussion",
            words: [
                {de:"Wirtschaft",foreign:"economy"}, {de:"Unternehmen",foreign:"company"}, {de:"Arbeitsmarkt",foreign:"job market"}, {de:"Arbeitslosigkeit",foreign:"unemployment"},
                {de:"Gehalt",foreign:"salary"}, {de:"Steuer",foreign:"tax"}, {de:"Vertrag",foreign:"contract"}, {de:"Gewinn",foreign:"profit"},
                {de:"Verbraucher",foreign:"consumer"}, {de:"Angebot",foreign:"supply"}, {de:"Nachfrage",foreign:"demand"},
                {de:"Herausforderung",foreign:"challenge"}, {de:"Lösung",foreign:"solution"}, {de:"Folge",foreign:"consequence"}, {de:"Ursache",foreign:"cause"},
                {de:"Entwicklung",foreign:"development"}, {de:"Auswirkung",foreign:"impact"}, {de:"Verhandlung",foreign:"negotiation"},
                {de:"einerseits",foreign:"on the one hand"}, {de:"andererseits",foreign:"on the other hand"}, {de:"außerdem",foreign:"moreover"},
                {de:"dennoch",foreign:"nevertheless"}, {de:"deshalb",foreign:"therefore"}, {de:"zusammenfassend",foreign:"to sum up"},
                {de:"Nachhaltigkeit",foreign:"sustainability"}, {de:"Globalisierung",foreign:"globalisation"}, {de:"Verfassung",foreign:"constitution"},
                {de:"Staatsangehörigkeit",foreign:"nationality"}, {de:"Gewaltenteilung",foreign:"separation of powers"}
            ]
        },
        k11: {
            label: "Klasse 11 · Textarbeit & Analyse",
            words: [
                {de:"Zusammenfassung",foreign:"summary"}, {de:"Stellungnahme",foreign:"comment"}, {de:"Analyse",foreign:"analysis"}, {de:"Behauptung",foreign:"claim"},
                {de:"Kernaussage",foreign:"key message"}, {de:"Absicht",foreign:"intention"}, {de:"Zielgruppe",foreign:"target audience"},
                {de:"Erzähler",foreign:"narrator"}, {de:"Figur",foreign:"character"}, {de:"Handlung",foreign:"plot"}, {de:"Schauplatz",foreign:"setting"},
                {de:"Stilmittel",foreign:"stylistic device"}, {de:"Metapher",foreign:"metaphor"}, {de:"Symbol",foreign:"symbol"}, {de:"Ironie",foreign:"irony"},
                {de:"betonen",foreign:"to emphasise"}, {de:"darstellen",foreign:"to portray"}, {de:"hinweisen auf",foreign:"to point out"},
                {de:"schlussfolgern",foreign:"to conclude"}, {de:"belegen",foreign:"to prove"}, {de:"beziehen auf",foreign:"to refer to"},
                {de:"Sprachvermittlung",foreign:"mediation"}, {de:"befürworten",foreign:"to advocate"}, {de:"bewusst sein",foreign:"to be aware of"},
                {de:"Vermutung",foreign:"assumption"}, {de:"Perspektive",foreign:"perspective"}, {de:"Widerspruch",foreign:"contradiction"},
                {de:"überzeugend",foreign:"convincing"}, {de:"eindeutig",foreign:"obvious"}, {de:"bedeutend",foreign:"significant"}
            ]
        },
        k12: {
            label: "Klasse 12 · Globalisierung & Politik",
            words: [
                {de:"Vielfalt",foreign:"diversity"}, {de:"Integration",foreign:"integration"}, {de:"Identität",foreign:"identity"}, {de:"Herkunft",foreign:"origin"},
                {de:"Schmelztiegel",foreign:"melting pot"}, {de:"Klischee",foreign:"stereotype"}, {de:"Diskriminierung",foreign:"discrimination"},
                {de:"Wohlstand",foreign:"prosperity"}, {de:"Armut",foreign:"poverty"}, {de:"Kluft",foreign:"gap"}, {de:"überbrücken",foreign:"to bridge"},
                {de:"Menschenrecht",foreign:"human right"}, {de:"Flüchtling",foreign:"refugee"}, {de:"Grenze",foreign:"border"},
                {de:"Klimawandel",foreign:"climate change"}, {de:"Emission",foreign:"emission"}, {de:"Verantwortung übernehmen",foreign:"to take responsibility"},
                {de:"Überwachung",foreign:"surveillance"}, {de:"Datenschutz",foreign:"data protection"}, {de:"künstliche Intelligenz",foreign:"artificial intelligence"},
                {de:"Fortschritt",foreign:"progress"}, {de:"Bedrohung",foreign:"threat"}, {de:"Chance",foreign:"opportunity"},
                {de:"angehen (Problem)",foreign:"to tackle"}, {de:"bewältigen",foreign:"to cope with"}, {de:"beitragen zu",foreign:"to contribute to"},
                {de:"unzuverlässig",foreign:"unreliable"}, {de:"nachhaltig",foreign:"sustainable"}, {de:"umstritten",foreign:"controversial"}, {de:"dringend",foreign:"urgent"}
            ]
        },
        k13: {
            label: "Klasse 13 · Abitur-Wortschatz",
            words: [
                {de:"Utopie",foreign:"utopia"}, {de:"Dystopie",foreign:"dystopia"}, {de:"Nachkolonialismus",foreign:"postcolonialism"},
                {de:"Amerikanischer Traum",foreign:"the American Dream"}, {de:"Karikatur",foreign:"cartoon"}, {de:"Erbe",foreign:"heritage"},
                {de:"Wahrnehmung",foreign:"perception"}, {de:"Werte",foreign:"values"}, {de:"Glaube",foreign:"belief"}, {de:"Ausgrenzung",foreign:"exclusion"},
                {de:"gefährden",foreign:"to jeopardise"}, {de:"hinterfragen",foreign:"to question"}, {de:"aufdecken",foreign:"to reveal"},
                {de:"verstärken",foreign:"to reinforce"}, {de:"beeinflussen",foreign:"to influence"}, {de:"bezweifeln",foreign:"to doubt"},
                {de:"Zusammenhang",foreign:"context"}, {de:"Entwicklungsverlauf",foreign:"development"}, {de:"Gegensatz",foreign:"contrast"},
                {de:"Voraussetzung",foreign:"prerequisite"}, {de:"Schlussfolgerung",foreign:"conclusion"}, {de:"Rechtfertigung",foreign:"justification"},
                {de:"tiefgreifend",foreign:"profound"}, {de:"unvermeidlich",foreign:"inevitable"}, {de:"weitreichend",foreign:"far-reaching"},
                {de:"zweideutig",foreign:"ambiguous"}, {de:"bemerkenswert",foreign:"remarkable"}, {de:"maßgeblich",foreign:"decisive"},
                {de:"Wahlrecht",foreign:"right to vote"}, {de:"Abgeordneter",foreign:"member of parliament"}
            ]
        }
    },
    tr: {
        k3: {
            label: "Klasse 3 · Temel Kelimeler (Grundwörter)",
            words: [
                {de:"Hallo",foreign:"merhaba"}, {de:"Tschüss",foreign:"hoşçakal"}, {de:"Danke",foreign:"teşekkürler"}, {de:"Bitte",foreign:"lütfen"},
                {de:"Ja",foreign:"evet"}, {de:"Nein",foreign:"hayır"},
                {de:"Eins",foreign:"bir"}, {de:"Zwei",foreign:"iki"}, {de:"Drei",foreign:"üç"}, {de:"Vier",foreign:"dört"}, {de:"Fünf",foreign:"beş"},
                {de:"Sechs",foreign:"altı"}, {de:"Sieben",foreign:"yedi"}, {de:"Acht",foreign:"sekiz"}, {de:"Neun",foreign:"dokuz"}, {de:"Zehn",foreign:"on"},
                {de:"Rot",foreign:"kırmızı"}, {de:"Blau",foreign:"mavi"}, {de:"Grün",foreign:"yeşil"}, {de:"Gelb",foreign:"sarı"},
                {de:"Schwarz",foreign:"siyah"}, {de:"Weiß",foreign:"beyaz"},
                {de:"Mutter",foreign:"anne"}, {de:"Vater",foreign:"baba"}, {de:"Geschwisterkind",foreign:"kardeş"}, {de:"Kind",foreign:"çocuk"},
                {de:"Katze",foreign:"kedi"}, {de:"Hund",foreign:"köpek"}, {de:"Vogel",foreign:"kuş"}
            ]
        },
        k4: {
            label: "Klasse 4 · Okul & Ev (Schule & Haus)",
            words: [
                {de:"Schule",foreign:"okul"}, {de:"Lehrer",foreign:"öğretmen"}, {de:"Schüler",foreign:"öğrenci"}, {de:"Buch",foreign:"kitap"},
                {de:"Stift",foreign:"kalem"}, {de:"Tafel",foreign:"tahta"}, {de:"lernen",foreign:"öğrenmek"}, {de:"schreiben",foreign:"yazmak"},
                {de:"lesen",foreign:"okumak"}, {de:"spielen",foreign:"oynamak"},
                {de:"Haus",foreign:"ev"}, {de:"Tür",foreign:"kapı"}, {de:"Fenster",foreign:"pencere"}, {de:"Tisch",foreign:"masa"}, {de:"Stuhl",foreign:"sandalye"},
                {de:"Zimmer",foreign:"oda"}, {de:"Küche",foreign:"mutfak"},
                {de:"Wasser",foreign:"su"}, {de:"Brot",foreign:"ekmek"}, {de:"Milch",foreign:"süt"}, {de:"Apfel",foreign:"elma"}, {de:"Käse",foreign:"peynir"},
                {de:"essen",foreign:"yemek"}, {de:"trinken",foreign:"içmek"},
                {de:"Baum",foreign:"ağaç"}, {de:"Blume",foreign:"çiçek"}, {de:"Sonne",foreign:"güneş"}, {de:"Mond",foreign:"ay"}
            ]
        },
        k5: {
            label: "Klasse 5 · Günlük Hayat (Alltag)",
            words: [
                {de:"Tag",foreign:"gün"}, {de:"Woche",foreign:"hafta"}, {de:"Monat",foreign:"ay"}, {de:"Jahr",foreign:"yıl"}, {de:"Zeit",foreign:"zaman"},
                {de:"heute",foreign:"bugün"}, {de:"morgen",foreign:"yarın"}, {de:"gestern",foreign:"dün"}, {de:"jetzt",foreign:"şimdi"},
                {de:"Morgen (früh)",foreign:"sabah"}, {de:"Abend",foreign:"akşam"}, {de:"Nacht",foreign:"gece"},
                {de:"Kopf",foreign:"baş"}, {de:"Hand",foreign:"el"}, {de:"Fuß",foreign:"ayak"}, {de:"Auge",foreign:"göz"}, {de:"Ohr",foreign:"kulak"},
                {de:"Nase",foreign:"burun"}, {de:"Mund",foreign:"ağız"}, {de:"Herz",foreign:"kalp"},
                {de:"gehen",foreign:"gitmek"}, {de:"kommen",foreign:"gelmek"}, {de:"sehen",foreign:"görmek"}, {de:"hören",foreign:"duymak"},
                {de:"sprechen",foreign:"konuşmak"}, {de:"geben",foreign:"vermek"}, {de:"nehmen",foreign:"almak"},
                {de:"groß",foreign:"büyük"}, {de:"klein",foreign:"küçük"}
            ]
        },
        k6: {
            label: "Klasse 6 · Hobiler & Doğa (Hobbys & Natur)",
            words: [
                {de:"Sport",foreign:"spor"}, {de:"Fußball",foreign:"futbol"}, {de:"Musik",foreign:"müzik"}, {de:"Film",foreign:"film"},
                {de:"Spiel",foreign:"oyun"}, {de:"Ferien",foreign:"tatil"}, {de:"Reise",foreign:"seyahat"}, {de:"Freund",foreign:"arkadaş"},
                {de:"Natur",foreign:"doğa"}, {de:"Wald",foreign:"orman"}, {de:"Berg",foreign:"dağ"}, {de:"Meer",foreign:"deniz"}, {de:"Fluss",foreign:"nehir"},
                {de:"Himmel",foreign:"gökyüzü"}, {de:"Regen",foreign:"yağmur"}, {de:"Schnee",foreign:"kar"}, {de:"Wind",foreign:"rüzgar"},
                {de:"Wetter",foreign:"hava durumu"}, {de:"heiß",foreign:"sıcak"}, {de:"kalt",foreign:"soğuk"},
                {de:"schön",foreign:"güzel"}, {de:"schnell",foreign:"hızlı"}, {de:"langsam",foreign:"yavaş"}, {de:"schwierig",foreign:"zor"}, {de:"einfach",foreign:"kolay"},
                {de:"Farbe",foreign:"renk"}, {de:"Tier",foreign:"hayvan"}, {de:"Pferd",foreign:"at"}, {de:"Fisch",foreign:"balık"}
            ]
        },
        k7: {
            label: "Klasse 7 · Şehir & Yolculuk (Stadt & Reisen)",
            words: [
                {de:"Stadt",foreign:"şehir"}, {de:"Dorf",foreign:"köy"}, {de:"Straße",foreign:"sokak"}, {de:"Weg",foreign:"yol"}, {de:"Platz",foreign:"meydan"},
                {de:"Markt",foreign:"pazar"}, {de:"Geschäft",foreign:"dükkan"}, {de:"Restaurant",foreign:"lokanta"}, {de:"Hotel",foreign:"otel"},
                {de:"Krankenhaus",foreign:"hastane"}, {de:"Bahnhof",foreign:"gar"}, {de:"Flughafen",foreign:"havalimanı"},
                {de:"Auto",foreign:"araba"}, {de:"Bus",foreign:"otobüs"}, {de:"Zug",foreign:"tren"}, {de:"Flugzeug",foreign:"uçak"}, {de:"Fahrkarte",foreign:"bilet"},
                {de:"Koffer",foreign:"bavul"}, {de:"Geld",foreign:"para"}, {de:"Preis",foreign:"fiyat"}, {de:"teuer",foreign:"pahalı"}, {de:"billig",foreign:"ucuz"},
                {de:"kaufen",foreign:"satın almak"}, {de:"verkaufen",foreign:"satmak"}, {de:"warten",foreign:"beklemek"}, {de:"fragen",foreign:"sormak"},
                {de:"finden",foreign:"bulmak"}, {de:"helfen",foreign:"yardım etmek"}
            ]
        },
        k8: {
            label: "Klasse 8 · Çevre & Medya (Umwelt & Medien)",
            words: [
                {de:"Umwelt",foreign:"çevre"}, {de:"Luft",foreign:"hava"}, {de:"Erde (Boden)",foreign:"toprak"}, {de:"Müll",foreign:"çöp"},
                {de:"Energie",foreign:"enerji"}, {de:"schützen",foreign:"korumak"}, {de:"sauber",foreign:"temiz"}, {de:"schmutzig",foreign:"kirli"},
                {de:"Internet",foreign:"internet"}, {de:"Telefon",foreign:"telefon"}, {de:"Computer",foreign:"bilgisayar"}, {de:"Nachricht",foreign:"haber"},
                {de:"Zeitung",foreign:"gazete"}, {de:"Fernsehen",foreign:"televizyon"}, {de:"Foto",foreign:"fotoğraf"},
                {de:"Gefühl",foreign:"duygu"}, {de:"glücklich",foreign:"mutlu"}, {de:"traurig",foreign:"üzgün"}, {de:"wütend",foreign:"kızgın"},
                {de:"müde",foreign:"yorgun"}, {de:"Angst",foreign:"korku"}, {de:"Hoffnung",foreign:"umut"},
                {de:"Gesundheit",foreign:"sağlık"}, {de:"krank",foreign:"hasta"}, {de:"Arzt",foreign:"doktor"}, {de:"Medikament",foreign:"ilaç"},
                {de:"denken",foreign:"düşünmek"}, {de:"verstehen",foreign:"anlamak"}
            ]
        },
        k9: {
            label: "Klasse 9 · Toplum & Meslek (Gesellschaft & Beruf)",
            words: [
                {de:"Gesellschaft",foreign:"toplum"}, {de:"Familie",foreign:"aile"}, {de:"Nachbar",foreign:"komşu"}, {de:"Freundschaft",foreign:"dostluk"},
                {de:"Kultur",foreign:"kültür"}, {de:"Sprache",foreign:"dil"}, {de:"Heimat",foreign:"memleket"}, {de:"Tradition",foreign:"gelenek"},
                {de:"Arbeit",foreign:"iş"}, {de:"Beruf",foreign:"meslek"}, {de:"Ausbildung",foreign:"eğitim"}, {de:"Erfahrung",foreign:"deneyim"},
                {de:"Erfolg",foreign:"başarı"}, {de:"Ziel",foreign:"hedef"}, {de:"Zukunft",foreign:"gelecek"}, {de:"Vergangenheit",foreign:"geçmiş"},
                {de:"Problem",foreign:"sorun"}, {de:"Lösung",foreign:"çözüm"}, {de:"Möglichkeit",foreign:"imkan"}, {de:"Entscheidung",foreign:"karar"},
                {de:"Verantwortung",foreign:"sorumluluk"}, {de:"Respekt",foreign:"saygı"}, {de:"Vertrauen",foreign:"güven"},
                {de:"wichtig",foreign:"önemli"}, {de:"nötig",foreign:"gerekli"}, {de:"möglich",foreign:"mümkün"}, {de:"arbeiten",foreign:"çalışmak"}, {de:"entscheiden",foreign:"karar vermek"}
            ]
        },
        k10: {
            label: "Klasse 10 · Görüş & Politika (Meinung & Politik)",
            words: [
                {de:"Meinung",foreign:"düşünce"}, {de:"Diskussion",foreign:"tartışma"}, {de:"Beispiel",foreign:"örnek"}, {de:"Grund",foreign:"sebep"},
                {de:"Ergebnis",foreign:"sonuç"}, {de:"Vorteil",foreign:"avantaj"}, {de:"Nachteil",foreign:"dezavantaj"},
                {de:"Recht",foreign:"hak"}, {de:"Gesetz",foreign:"kanun"}, {de:"Verfassung",foreign:"anayasa"}, {de:"Freiheit",foreign:"özgürlük"},
                {de:"Gerechtigkeit",foreign:"adalet"}, {de:"Wahl",foreign:"seçim"}, {de:"Regierung",foreign:"hükümet"}, {de:"Staat",foreign:"devlet"},
                {de:"Frieden",foreign:"barış"}, {de:"Krieg",foreign:"savaş"}, {de:"Gleichheit",foreign:"eşitlik"},
                {de:"Wirtschaft",foreign:"ekonomi"}, {de:"Entwicklung",foreign:"gelişme"}, {de:"Technologie",foreign:"teknoloji"}, {de:"Bildung",foreign:"eğitim sistemi"},
                {de:"Nachhaltigkeit",foreign:"sürdürülebilirlik"}, {de:"global",foreign:"küresel"},
                {de:"erklären",foreign:"açıklamak"}, {de:"vergleichen",foreign:"karşılaştırmak"}, {de:"unterstützen",foreign:"desteklemek"}, {de:"kritisieren",foreign:"eleştirmek"}
            ]
        }
    }
};

// =======================================================
// DEUTSCHES WOERTERBUCH (fuer das Wort-Duell / Scrabble)
// Zweck 1: Aus diesen Woertern werden die Buchstaben erzeugt,
//          damit garantiert immer mindestens ein Wort loesbar ist.
// Zweck 2: Sofortige Wortpruefung auch ohne Internet.
// Nur A-Z, keine Umlaute (die gibt es auch nicht als Spielsteine).

// =======================================================
const GERMAN_WORDS = [
    "AAL", "ABEND", "ADLER", "ADRESSE", "AFFE", "AKTE", "ALT", "AMSEL", "ANFANG", "ANGEL",
    "ANTWORT", "APFEL", "ARBEIT", "ARM", "ART", "ARZT", "AST", "ATLAS", "AUGE", "AUGUST",
    "AUS", "AUSFLUG", "AUTO", "AXT", "BAD", "BALKON", "BALL", "BANANE", "BANK", "BAR",
    "BART", "BAU", "BAUCH", "BAUM", "BEERE", "BEIN", "BERG", "BERUF", "BESEN", "BETT",
    "BEUTEL", "BIENE", "BIER", "BILD", "BIRNE", "BLATT", "BLAU", "BLUME", "BLUMEN", "BLUT",
    "BODEN", "BOGEN", "BOOT", "BOT", "BRIEF", "BROT", "BRUDER", "BRUST", "BUCH", "BUCHE",
    "BUNT", "BUS", "DACH", "DACHS", "DAME", "DAMPF", "DANK", "DATUM", "DECKE", "DECKEL",
    "DIENST", "DOM", "DONNER", "DORF", "DOSE", "DRACHE", "DRAHT", "DRUCK", "DUFT", "EBBE",
    "ECKE", "EIER", "EIMER", "EIN", "EIS", "EISEN", "ELEFANT", "ELF", "ELTERN", "ENDE",
    "ENGEL", "ENTE", "ERDE", "ERNTE", "ERZ", "ESEL", "ESSEN", "EULE", "FABRIK", "FADEN",
    "FAMILIE", "FARBE", "FASS", "FEDER", "FEDERN", "FEE", "FEIN", "FELD", "FENSTER", "FERIEN",
    "FEST", "FEUER", "FINGER", "FISCH", "FLASCHE", "FLIEGE", "FLUG", "FLUSS", "FORELLE", "FOTO",
    "FRAGE", "FRAU", "FREUND", "FREUNDE", "FRUCHT", "FUSS", "GABEL", "GARAGE", "GARTEN", "GAS",
    "GAST", "GEBIRGE", "GEDICHT", "GEFAHR", "GEIST", "GEL", "GELB", "GELD", "GEN", "GERN",
    "GESICHT", "GITARRE", "GLANZ", "GLAS", "GLEIS", "GLOCKE", "GOLD", "GRAS", "GRAU", "GRUND",
    "GUT", "HAAR", "HAFEN", "HAI", "HALLE", "HALS", "HAND", "HANDEL", "HANDY", "HASE",
    "HAUCH", "HAUS", "HEBEL", "HEFT", "HEIM", "HERBST", "HERZ", "HIMMEL", "HOCH", "HOLZ",
    "HONIG", "HOSEN", "HUND", "HUNGER", "HUT", "IGEL", "INSEKT", "INSEL", "JAHR", "KAFFEE",
    "KALT", "KAMEL", "KAMERA", "KAMIN", "KANTE", "KARTE", "KARTON", "KASSE", "KASTEN", "KATZE",
    "KEGEL", "KERZE", "KETTE", "KIND", "KINO", "KIRCHE", "KISSEN", "KLANG", "KLASSE", "KLAVIER",
    "KLEE", "KLEID", "KNIE", "KNOCHEN", "KOCH", "KOFFER", "KOHLE", "KONZERT", "KOPF", "KOPIE",
    "KORB", "KRAFT", "KREIDE", "KREIS", "KREUZ", "KUCHEN", "KUGEL", "KUH", "KUNST", "KUSS",
    "LADEN", "LAMM", "LAMPE", "LAND", "LAUB", "LAUT", "LEBEN", "LEDER", "LEER", "LEHRER",
    "LEITER", "LICHT", "LIEBE", "LIED", "LINIE", "LOB", "LOCH", "LUFT", "LUNGE", "MAGEN",
    "MAI", "MAL", "MANTEL", "MARKT", "MAUER", "MAUS", "MEER", "MEHL", "MEHR", "MESSER",
    "METALL", "MINUTE", "MITTE", "MOND", "MORGEN", "MOTOR", "MUND", "MUSEUM", "MUSIK", "MUT",
    "MUTTER", "NACHBAR", "NACHT", "NADEL", "NAGEL", "NAME", "NASE", "NASS", "NEBEL", "NEST",
    "NETT", "NEU", "NEUN", "NIE", "NORDEN", "NUDEL", "NUDELN", "NUN", "NUR", "OBST",
    "OFEN", "OHR", "OMA", "ONKEL", "OPA", "OPER", "ORANGE", "ORGEL", "ORT", "OSTEN",
    "PALAST", "PAPIER", "PARK", "PECH", "PERLE", "PFERD", "PFLANZE", "PILOT", "PILZ", "PLAN",
    "PLANET", "PLATZ", "POLIZEI", "PREIS", "PROBLEM", "PULT", "PUNKT", "RAD", "RAHMEN", "RASEN",
    "RAT", "RATTE", "RAUM", "RECHNER", "REGAL", "REGEN", "REGION", "REH", "REIS", "REISE",
    "REISEN", "RICHTER", "RIESE", "RING", "ROH", "ROLLE", "ROLLER", "ROSE", "ROT", "RUHE",
    "RUM", "SAAL", "SAFT", "SALAT", "SALZ", "SAND", "SCHAF", "SCHATTEN", "SCHATZ", "SCHIFF",
    "SCHNEE", "SCHRANK", "SCHUH", "SCHULE", "SCHWESTER", "SEE", "SEIL", "SEITE", "SESSEL", "SIEBEN",
    "SILBER", "SOFA", "SOHN", "SOMMER", "SONNE", "SPIEGEL", "SPIEL", "SPINNE", "SPORT", "STADT",
    "STAR", "STEIN", "STERN", "STOCK", "STRAND", "STRASSE", "STUHL", "STUNDE", "STURM", "SUPPE",
    "TAFEL", "TAG", "TAL", "TANZ", "TASCHE", "TASSE", "TAU", "TEICH", "TELLER", "TEPPICH",
    "TIER", "TIGER", "TISCH", "TOMATE", "TON", "TOR", "TRAUM", "TREPPE", "TUCH", "TUN",
    "TURM", "UFER", "UHR", "VATER", "VOGEL", "VOR", "WAGEN", "WALD", "WAND", "WASSER",
    "WEG", "WEH", "WEIN", "WEIZEN", "WELLE", "WELT", "WESTE", "WIESE", "WIND", "WINTER",
    "WOCHE", "WOLKE", "WOLKEN", "WOLLE", "WORT", "WUNDER", "WURZEL", "ZAHL", "ZAHN", "ZEBRA",
    "ZEH", "ZEIT", "ZELT", "ZIEGE", "ZIEL", "ZIMMER", "ZOLL", "ZOO", "ZUCKER", "ZUG",
    "ZWERG", "ZWIEBEL"
];
