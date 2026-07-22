// ==========================================
// WISSEN & GRAMMATIK DATENBANK (Das große Quiz)
// Struktur: Klassen 1-13 + Berufsschule mit Ausbildungsberufen
// ==========================================
const QUESTIONS_DATABASE = [
    // ==========================================
    // KLASSE 1
    // ==========================================
    { category: "k1_deutsch", question: "Mit welchem Buchstaben beginnt das Wort 'Oma'?", answers: ["O", "A", "M"], correct: 0, explanation: "Oma beginnt mit dem Buchstaben O." },
    { category: "k1_deutsch", question: "Wie viele Buchstaben hat das Wort 'Ball'?", answers: ["3", "4", "5"], correct: 1, explanation: "B-A-L-L sind vier Buchstaben." },
    { category: "k1_deutsch", question: "Welches Wort reimt sich auf 'Haus'?", answers: ["Maus", "Baum", "Tisch"], correct: 0, explanation: "Haus und Maus klingen am Ende gleich." },
    { category: "k1_deutsch", question: "Wie viele Silben hat das Wort 'Ba-na-ne'?", answers: ["2", "3", "4"], correct: 1, explanation: "Ba-na-ne klatscht man in drei Teile." },
    { category: "k1_deutsch", question: "Welcher Buchstabe fehlt: B, C, D, __, F?", answers: ["E", "G", "A"], correct: 0, explanation: "Das Alphabet geht B, C, D, E, F." },
    { category: "k1_mathe", question: "Was ist 3 + 4?", answers: ["6", "7", "8"], correct: 1, explanation: "3 und 4 zusammen ergeben 7." },
    { category: "k1_mathe", question: "Welche Zahl kommt nach der 9?", answers: ["8", "10", "11"], correct: 1, explanation: "Nach der 9 kommt die 10." },
    { category: "k1_mathe", question: "Was ist 10 - 4?", answers: ["5", "6", "7"], correct: 1, explanation: "Von 10 vier weggenommen bleiben 6." },
    { category: "k1_mathe", question: "Wie viele Finger hat man an beiden Händen zusammen?", answers: ["8", "10", "12"], correct: 1, explanation: "An jeder Hand 5 Finger, zusammen also 10." },
    { category: "k1_mathe", question: "Welche Zahl ist größer: 5 oder 8?", answers: ["5", "8", "Beide gleich"], correct: 1, explanation: "8 kommt später beim Zählen, also ist 8 größer." },
    { category: "k1_sachunterricht", question: "Wie viele Beine hat eine Katze?", answers: ["2", "4", "6"], correct: 1, explanation: "Katzen sind Vierbeiner." },
    { category: "k1_sachunterricht", question: "Welche Farbe hat der Himmel bei schönem Wetter?", answers: ["Blau", "Grün", "Rot"], correct: 0, explanation: "Bei Sonnenschein ist der Himmel blau." },
    { category: "k1_sachunterricht", question: "Was brauchen Pflanzen zum Wachsen?", answers: ["Wasser und Licht", "Nur Erde", "Nur Luft"], correct: 0, explanation: "Pflanzen brauchen Wasser, Licht und Nährstoffe." },
    { category: "k1_sachunterricht", question: "Welche Jahreszeit ist am kältesten?", answers: ["Sommer", "Winter", "Frühling"], correct: 1, explanation: "Im Winter ist es am kältesten, oft schneit es." },
    { category: "k1_sachunterricht", question: "Wo wohnt eine Biene?", answers: ["Im Bienenstock", "Im Vogelnest", "In der Höhle"], correct: 0, explanation: "Bienen leben zusammen im Bienenstock." },

    // ==========================================
    // KLASSE 2
    // ==========================================
    { category: "k2_deutsch", question: "Welche Schreibweise ist richtig?", answers: ["Sonne", "Sone", "Zonne"], correct: 0, explanation: "Sonne schreibt man mit doppeltem n." },
    { category: "k2_deutsch", question: "Was ist das Gegenteil von 'hell'?", answers: ["dunkel", "laut", "schnell"], correct: 0, explanation: "Hell und dunkel sind Gegenteile." },
    { category: "k2_deutsch", question: "Welches Wort ist ein Nomen (Namenwort)?", answers: ["Baum", "laufen", "schnell"], correct: 0, explanation: "Baum ist ein Nomen – man sagt 'der Baum' und schreibt es groß." },
    { category: "k2_deutsch", question: "Wie viele Silben hat 'Schmet-ter-ling'?", answers: ["2", "3", "4"], correct: 1, explanation: "Schmet-ter-ling hat drei Silben." },
    { category: "k2_deutsch", question: "Welcher Satz ist richtig geschrieben?", answers: ["Ich gehe nach Hause.", "ich gehe nach hause.", "Ich gehe nach hause"], correct: 0, explanation: "Satzanfang groß, Nomen groß, Punkt am Ende." },
    { category: "k2_mathe", question: "Was ist 7 + 8?", answers: ["14", "15", "16"], correct: 1, explanation: "7 + 7 = 14, und einer mehr ergibt 15." },
    { category: "k2_mathe", question: "Was ist die Hälfte von 12?", answers: ["5", "6", "7"], correct: 1, explanation: "12 geteilt durch 2 ergibt 6." },
    { category: "k2_mathe", question: "Was ist 20 - 7?", answers: ["12", "13", "14"], correct: 1, explanation: "Von 20 sieben weggenommen bleiben 13." },
    { category: "k2_mathe", question: "Wie viele Minuten hat eine Stunde?", answers: ["30", "60", "100"], correct: 1, explanation: "Eine Stunde hat 60 Minuten." },
    { category: "k2_mathe", question: "Was ist 5 × 2?", answers: ["8", "10", "12"], correct: 1, explanation: "5 zweimal genommen ergibt 10." },
    { category: "k2_sachunterricht", question: "Welches Tier legt Eier?", answers: ["Huhn", "Kuh", "Hund"], correct: 0, explanation: "Hühner legen Eier, Kühe und Hunde bekommen lebende Junge." },
    { category: "k2_sachunterricht", question: "Wie nennt man gefrorenes Wasser?", answers: ["Eis", "Dampf", "Nebel"], correct: 0, explanation: "Wird Wasser sehr kalt, gefriert es zu Eis." },
    { category: "k2_sachunterricht", question: "Welche Jahreszeit kommt nach dem Sommer?", answers: ["Frühling", "Herbst", "Winter"], correct: 1, explanation: "Die Reihenfolge ist Frühling, Sommer, Herbst, Winter." },
    { category: "k2_sachunterricht", question: "In welcher Richtung geht die Sonne auf?", answers: ["Osten", "Westen", "Norden"], correct: 0, explanation: "Die Sonne geht im Osten auf und im Westen unter." },
    { category: "k2_sachunterricht", question: "Welches Verkehrszeichen bedeutet, dass man anhalten muss?", answers: ["Stoppschild", "Vorfahrtsschild", "Parkplatzschild"], correct: 0, explanation: "Das rote achteckige Stoppschild bedeutet: anhalten." },

    // ==========================================
    // KLASSE 3
    // ==========================================
    { category: "k3_deutsch", question: "Welche Wortart ist 'schnell' in 'Er läuft schnell'?", answers: ["Adjektiv", "Nomen", "Verb"], correct: 0, explanation: "'schnell' beschreibt näher, wie er läuft – es ist ein Adjektiv." },
    { category: "k3_deutsch", question: "Wie lautet die Mehrzahl von 'Kind'?", answers: ["Kinder", "Kinde", "Kindern"], correct: 0, explanation: "Die Mehrzahl von Kind ist Kinder." },
    { category: "k3_deutsch", question: "Was ist ein Verb?", answers: ["Ein Tuwort wie 'laufen'", "Ein Namenwort", "Ein Wiewort"], correct: 0, explanation: "Verben beschreiben Tätigkeiten: laufen, essen, lesen." },
    { category: "k3_deutsch", question: "Wie schreibt man das Wort richtig?", answers: ["Fahrrad", "Farrad", "Fahrat"], correct: 0, explanation: "Fahrrad kommt von 'fahren' und 'Rad' – daher doppeltes r." },
    { category: "k3_deutsch", question: "Wann schreibt man ein Wort groß?", answers: ["Bei Nomen und am Satzanfang", "Immer", "Nie"], correct: 0, explanation: "Nomen und der erste Buchstabe im Satz werden großgeschrieben." },
    { category: "k3_mathe", question: "Was ist 6 × 7?", answers: ["42", "36", "48"], correct: 0, explanation: "Einmaleins: 6, 12, 18, 24, 30, 36, 42." },
    { category: "k3_mathe", question: "Was ist 100 : 4?", answers: ["20", "25", "30"], correct: 1, explanation: "4 × 25 = 100, also ist 100 : 4 = 25." },
    { category: "k3_mathe", question: "Wie viele Ecken hat ein Rechteck?", answers: ["3", "4", "5"], correct: 1, explanation: "Ein Rechteck hat vier Ecken und vier Seiten." },
    { category: "k3_mathe", question: "Was ist 45 + 38?", answers: ["73", "83", "93"], correct: 1, explanation: "45 + 38 = 83." },
    { category: "k3_mathe", question: "Wie viele Zentimeter sind 1 Meter?", answers: ["10", "100", "1000"], correct: 1, explanation: "1 Meter sind 100 Zentimeter." },
    { category: "k3_sachunterricht", question: "Welches Organ pumpt das Blut durch den Körper?", answers: ["Herz", "Lunge", "Magen"], correct: 0, explanation: "Das Herz ist ein Muskel und pumpt das Blut." },
    { category: "k3_sachunterricht", question: "In welche Richtung zeigt die Nadel eines Kompasses?", answers: ["Norden", "Süden", "Westen"], correct: 0, explanation: "Die Kompassnadel richtet sich nach Norden aus." },
    { category: "k3_sachunterricht", question: "Wie nennt man Tiere, die nur Fleisch fressen?", answers: ["Fleischfresser", "Pflanzenfresser", "Allesfresser"], correct: 0, explanation: "Fleischfresser sind zum Beispiel Löwe und Wolf." },
    { category: "k3_sachunterricht", question: "Was passiert mit Wasser bei 0 Grad Celsius?", answers: ["Es gefriert", "Es kocht", "Es passiert nichts"], correct: 0, explanation: "Bei 0 °C wird Wasser zu Eis." },
    { category: "k3_sachunterricht", question: "Welches Bundesland ist das größte nach Fläche?", answers: ["Bayern", "Hessen", "Saarland"], correct: 0, explanation: "Bayern ist mit Abstand das flächengrößte Bundesland." },
    { category: "k3_englisch", question: "Was heißt 'Hund' auf Englisch?", answers: ["dog", "cat", "bird"], correct: 0, explanation: "Hund heißt auf Englisch 'dog'." },
    { category: "k3_englisch", question: "Was bedeutet 'red'?", answers: ["rot", "blau", "grün"], correct: 0, explanation: "'red' heißt rot." },
    { category: "k3_englisch", question: "Wie sagt man 'Guten Morgen'?", answers: ["Good morning", "Good night", "Goodbye"], correct: 0, explanation: "'Good morning' bedeutet Guten Morgen." },
    { category: "k3_englisch", question: "Was bedeutet 'school'?", answers: ["Schule", "Straße", "Stuhl"], correct: 0, explanation: "'school' heißt Schule." },
    { category: "k3_englisch", question: "Wie geht es weiter: one, two, __?", answers: ["three", "four", "five"], correct: 0, explanation: "Die Reihenfolge ist one, two, three." },
    { category: "k3_tuerkisch", question: "Was heißt 'Hallo' auf Türkisch?", answers: ["Merhaba", "Hoşçakal", "Teşekkürler"], correct: 0, explanation: "'Merhaba' bedeutet Hallo." },
    { category: "k3_tuerkisch", question: "Was bedeutet 'okul'?", answers: ["Schule", "Haus", "Auto"], correct: 0, explanation: "'okul' heißt Schule." },
    { category: "k3_tuerkisch", question: "Was heißt 'Wasser' auf Türkisch?", answers: ["su", "ev", "kitap"], correct: 0, explanation: "'su' bedeutet Wasser." },
    { category: "k3_tuerkisch", question: "Was bedeutet 'anne'?", answers: ["Mutter", "Vater", "Bruder"], correct: 0, explanation: "'anne' heißt Mutter, 'baba' heißt Vater." },
    { category: "k3_tuerkisch", question: "Wie geht es weiter: bir, iki, __?", answers: ["üç", "dört", "beş"], correct: 0, explanation: "Auf Türkisch zählt man bir, iki, üç." },

    // ==========================================
    // KLASSE 4
    // ==========================================
    { category: "k4_deutsch", question: "Welcher Fall antwortet auf die Frage 'Wem?'", answers: ["Dativ", "Genitiv", "Akkusativ"], correct: 0, explanation: "Der Dativ ist der 3. Fall und antwortet auf 'Wem?'." },
    { category: "k4_deutsch", question: "Was ist das Subjekt in 'Der Hund bellt laut'?", answers: ["Der Hund", "bellt", "laut"], correct: 0, explanation: "Das Subjekt ist der Satzteil, der etwas tut – hier 'Der Hund'." },
    { category: "k4_deutsch", question: "Welche Zeitform ist 'ich ging'?", answers: ["Präteritum", "Perfekt", "Futur"], correct: 0, explanation: "'ich ging' ist Präteritum (einfache Vergangenheit)." },
    { category: "k4_deutsch", question: "Was gehört in die Lücke: 'Ich weiß, __ du kommst.'", answers: ["dass", "das", "daß"], correct: 0, explanation: "Als Bindewort schreibt man 'dass' mit doppeltem s." },
    { category: "k4_deutsch", question: "Was ist ein Adjektiv?", answers: ["Ein Wiewort wie 'groß'", "Ein Tuwort", "Ein Namenwort"], correct: 0, explanation: "Adjektive beschreiben, wie etwas ist: groß, schnell, bunt." },
    { category: "k4_mathe", question: "Was ist 8 × 9?", answers: ["64", "72", "81"], correct: 1, explanation: "8 × 9 = 72." },
    { category: "k4_mathe", question: "Was ist die Hälfte von 48?", answers: ["22", "24", "26"], correct: 1, explanation: "48 : 2 = 24." },
    { category: "k4_mathe", question: "Wie groß ist der Umfang eines Quadrats mit 5 cm Seitenlänge?", answers: ["20 cm", "25 cm", "10 cm"], correct: 0, explanation: "Vier gleiche Seiten: 4 × 5 cm = 20 cm." },
    { category: "k4_mathe", question: "Wie viele Gramm sind 1 Kilogramm?", answers: ["100", "1000", "10000"], correct: 1, explanation: "1 Kilogramm sind 1000 Gramm." },
    { category: "k4_mathe", question: "Wie heißt 1234 auf Hunderter gerundet?", answers: ["1200", "1230", "1300"], correct: 0, explanation: "Die Zehnerstelle ist 3, also wird abgerundet: 1200." },
    { category: "k4_sachunterricht", question: "Wie nennt man die Karte, die Berge und Flüsse zeigt?", answers: ["Physische Karte", "Politische Karte", "Wetterkarte"], correct: 0, explanation: "Physische Karten zeigen die natürliche Landschaft." },
    { category: "k4_sachunterricht", question: "Was ist ein Stromkreis?", answers: ["Ein geschlossener Weg für den Strom", "Eine Batterie", "Ein Schalter"], correct: 0, explanation: "Nur in einem geschlossenen Stromkreis kann Strom fließen." },
    { category: "k4_sachunterricht", question: "Auf welchem Planeten leben wir?", answers: ["Erde", "Mars", "Venus"], correct: 0, explanation: "Wir leben auf der Erde, dem dritten Planeten von der Sonne." },
    { category: "k4_sachunterricht", question: "Wie nennt man den Übergang von Wasser zu Wasserdampf?", answers: ["Verdunsten", "Gefrieren", "Schmelzen"], correct: 0, explanation: "Beim Erhitzen verdunstet Wasser zu Wasserdampf." },
    { category: "k4_sachunterricht", question: "Wie heißt die Hauptstadt von Deutschland?", answers: ["Berlin", "München", "Hamburg"], correct: 0, explanation: "Berlin ist die Hauptstadt Deutschlands." },
    { category: "k4_englisch", question: "Wie sagt man 'Ich habe einen Bruder'?", answers: ["I have a brother", "I am a brother", "I has a brother"], correct: 0, explanation: "'I have' heißt 'ich habe'." },
    { category: "k4_englisch", question: "Was bedeutet 'Wednesday'?", answers: ["Mittwoch", "Montag", "Freitag"], correct: 0, explanation: "'Wednesday' ist der Mittwoch." },
    { category: "k4_englisch", question: "Was gehört in die Lücke: 'There __ two cats.'", answers: ["are", "is", "am"], correct: 0, explanation: "Bei mehreren Dingen benutzt man 'are'." },
    { category: "k4_englisch", question: "Was bedeutet 'breakfast'?", answers: ["Frühstück", "Mittagessen", "Abendessen"], correct: 0, explanation: "'breakfast' ist das Frühstück." },
    { category: "k4_englisch", question: "Wie fragt man nach dem Namen?", answers: ["What's your name?", "How are you?", "Where are you?"], correct: 0, explanation: "'What's your name?' heißt 'Wie heißt du?'." },
    { category: "k4_tuerkisch", question: "Was bedeutet 'teşekkürler'?", answers: ["Danke", "Bitte", "Tschüss"], correct: 0, explanation: "'teşekkürler' heißt danke." },
    { category: "k4_tuerkisch", question: "Was heißt 'Buch' auf Türkisch?", answers: ["kitap", "kalem", "masa"], correct: 0, explanation: "'kitap' bedeutet Buch." },
    { category: "k4_tuerkisch", question: "Was bedeutet 'kardeş'?", answers: ["Geschwister", "Freund", "Lehrer"], correct: 0, explanation: "'kardeş' bedeutet Geschwisterkind (Bruder oder Schwester)." },
    { category: "k4_tuerkisch", question: "Was heißt 'öğretmen'?", answers: ["Lehrer", "Schüler", "Arzt"], correct: 0, explanation: "'öğretmen' bedeutet Lehrerin oder Lehrer." },
    { category: "k4_tuerkisch", question: "Welche Farbe ist 'kırmızı'?", answers: ["rot", "blau", "gelb"], correct: 0, explanation: "'kırmızı' bedeutet rot." },

    // ==========================================
    // KLASSE 5
    // ==========================================
    { category: "k5_deutsch", question: "Was ist das Prädikat in 'Der Hund bellt laut'?", answers: ["bellt", "Der Hund", "laut"], correct: 0, explanation: "Das Prädikat ist das Verb im Satz." },
    { category: "k5_deutsch", question: "Welche Wortart sind 'und', 'aber', 'weil'?", answers: ["Konjunktionen", "Präpositionen", "Pronomen"], correct: 0, explanation: "Konjunktionen verbinden Wörter oder Sätze." },
    { category: "k5_deutsch", question: "Was ist eine Inhaltsangabe?", answers: ["Sachliche Zusammenfassung im Präsens", "Eine eigene Meinung", "Ein wörtliches Zitat"], correct: 0, explanation: "Inhaltsangaben fassen sachlich, im Präsens und in eigenen Worten zusammen." },
    { category: "k5_deutsch", question: "Wie lautet der Genitiv von 'der Hund'?", answers: ["des Hundes", "dem Hund", "den Hund"], correct: 0, explanation: "Der Genitiv ist der 2. Fall: des Hundes." },
    { category: "k5_deutsch", question: "Was ist ein Märchen typischerweise?", answers: ["Eine erfundene Erzählung mit Zauber", "Ein Sachtext", "Ein Zeitungsbericht"], correct: 0, explanation: "Märchen sind erfundene Erzählungen, oft mit magischen Elementen." },
    { category: "k5_mathe", question: "Was ist 3/4 als Dezimalzahl?", answers: ["0,34", "0,75", "0,43"], correct: 1, explanation: "3 geteilt durch 4 ergibt 0,75." },
    { category: "k5_mathe", question: "Wie viele Grad hat ein rechter Winkel?", answers: ["45°", "90°", "180°"], correct: 1, explanation: "Ein rechter Winkel hat genau 90°." },
    { category: "k5_mathe", question: "Wie berechnet man den Umfang eines Rechtecks?", answers: ["a × b", "2 × (a + b)", "a² + b²"], correct: 1, explanation: "Umfang = 2 × (Länge + Breite)." },
    { category: "k5_mathe", question: "Was ist der Mittelwert von 2, 4 und 6?", answers: ["3", "4", "6"], correct: 1, explanation: "(2 + 4 + 6) : 3 = 4." },
    { category: "k5_mathe", question: "Was ist eine Primzahl?", answers: ["Nur durch 1 und sich selbst teilbar", "Jede gerade Zahl", "Jede ungerade Zahl"], correct: 0, explanation: "Primzahlen wie 2, 3, 5, 7 haben genau zwei Teiler." },
    { category: "k5_englisch", question: "'She __ to school every day.'", answers: ["go", "goes", "going"], correct: 1, explanation: "Bei he/she/it kommt im Simple Present ein 's' ans Verb." },
    { category: "k5_englisch", question: "'My birthday is __ May.'", answers: ["at", "on", "in"], correct: 2, explanation: "Bei Monaten benutzt man 'in'." },
    { category: "k5_englisch", question: "'This is my dog. __ name is Rex.'", answers: ["His", "Her", "Its"], correct: 2, explanation: "Für Tiere und Dinge benutzt man 'its'." },
    { category: "k5_englisch", question: "'Can you __ me the salt, please?'", answers: ["pass", "passes", "passing"], correct: 0, explanation: "Nach 'can' folgt die Grundform." },
    { category: "k5_englisch", question: "Was bedeutet 'yesterday'?", answers: ["gestern", "heute", "morgen"], correct: 0, explanation: "'yesterday' heißt gestern." },
    { category: "k5_biologie", question: "Was brauchen Pflanzen für die Fotosynthese?", answers: ["Sonnenlicht, Wasser und CO2", "Nur Wasser", "Nur Dünger"], correct: 0, explanation: "Aus Licht, Wasser und Kohlendioxid entsteht Traubenzucker und Sauerstoff." },
    { category: "k5_biologie", question: "Wie viele Beine hat ein Insekt?", answers: ["4", "6", "8"], correct: 1, explanation: "Insekten haben immer sechs Beine, Spinnen dagegen acht." },
    { category: "k5_biologie", question: "Wozu dienen die Wurzeln einer Pflanze?", answers: ["Aufnahme von Wasser und Nährstoffen", "Nur zur Zierde", "Zur Fotosynthese"], correct: 0, explanation: "Wurzeln verankern die Pflanze und nehmen Wasser und Nährstoffe auf." },
    { category: "k5_geografie", question: "Wie heißt der längste Fluss Deutschlands?", answers: ["Donau", "Elbe", "Rhein"], correct: 2, explanation: "Der Rhein ist mit rund 865 km auf deutschem Gebiet der längste Fluss." },
    { category: "k5_geografie", question: "Wie heißt der höchste Berg Deutschlands?", answers: ["Watzmann", "Zugspitze", "Brocken"], correct: 1, explanation: "Die Zugspitze ist mit 2.962 m der höchste Berg Deutschlands." },

    // ==========================================
    // KLASSE 6
    // ==========================================
    { category: "k6_englisch", question: "'Look! The dog __ in the garden.'", answers: ["plays", "is playing", "play"], correct: 1, explanation: "Present Progressive: Signalwort 'Look!' – es passiert jetzt." },
    { category: "k6_englisch", question: "'We __ football every Saturday.'", answers: ["plays", "play", "playing"], correct: 1, explanation: "Simple Present: 'we play' ohne 's'." },
    { category: "k6_englisch", question: "Was bedeutet 'breakfast'?", answers: ["Frühstück", "Mittagessen", "Abendessen"], correct: 0, explanation: "'breakfast' ist das Frühstück." },
    { category: "k6_mathe", question: "Was ist der Umfang eines Quadrats mit 5 cm Seitenlänge?", answers: ["10 cm", "20 cm", "25 cm"], correct: 1, explanation: "4 × 5 cm = 20 cm." },
    { category: "k6_biologie", question: "Welches Tier ist ein Wirbeltier?", answers: ["Regenwurm", "Frosch", "Schnecke"], correct: 1, explanation: "Frösche haben eine Wirbelsäule und gehören zu den Wirbeltieren." },
    { category: "k6_geografie", question: "An welches Meer grenzt Deutschland im Norden?", answers: ["Mittelmeer", "Nord- und Ostsee", "Schwarzes Meer"], correct: 1, explanation: "Deutschland grenzt im Norden an die Nordsee und die Ostsee." },

    // ==========================================
    // KLASSE 7
    // ==========================================
    { category: "k7_englisch", question: "'Yesterday, I __ a great movie.'", answers: ["see", "saw", "have seen"], correct: 1, explanation: "Simple Past: 'Yesterday' verlangt die 2. Form (saw)." },
    { category: "k7_englisch", question: "'She runs __ than her brother.'", answers: ["faster", "fastest", "more fast"], correct: 0, explanation: "Vergleich: faster than." },
    { category: "k7_englisch", question: "'This is the book __ I told you about.'", answers: ["who", "which", "whose"], correct: 1, explanation: "Für Sachen benutzt man 'which'." },
    { category: "k7_mathe", question: "Wie berechnet man die Fläche eines Kreises?", answers: ["π × r", "π × r²", "2 × π × r"], correct: 1, explanation: "Kreisfläche = π × r²." },
    { category: "k7_physik", question: "Welche Einheit wird für elektrische Spannung verwendet?", answers: ["Ampere", "Watt", "Volt"], correct: 2, explanation: "Die Spannung wird in Volt (V) gemessen." },
    { category: "k7_chemie", question: "Wie lautet das chemische Symbol für Sauerstoff?", answers: ["O", "S", "Ox"], correct: 0, explanation: "Sauerstoff = Oxygenium, Symbol O." },
    { category: "k7_geschichte", question: "In welchem Jahr endete der Zweite Weltkrieg?", answers: ["1939", "1945", "1950"], correct: 1, explanation: "Der 2. Weltkrieg endete 1945." },
    { category: "k7_physik", question: "Was beschreibt das Ohmsche Gesetz?", answers: ["U = R / I", "U = I × R", "I = U × R"], correct: 1, explanation: "Ohmsches Gesetz: U = I × R." },
    { category: "k7_geschichte", question: "Wer war Otto von Bismarck?", answers: ["Ein Komponist", "Der erste Reichskanzler", "Ein Erfinder"], correct: 1, explanation: "Bismarck war der erste Reichskanzler des Deutschen Reiches." },
    { category: "k7_mathe", question: "Was ist der Satz des Pythagoras?", answers: ["a + b = c", "a² + b² = c²", "a × b = c²"], correct: 1, explanation: "Im rechtwinkligen Dreieck gilt: a² + b² = c²." },

    // ==========================================
    // KLASSE 8
    // ==========================================
    { category: "k8_englisch", question: "'I __ to London three times.'", answers: ["went", "have been", "am"], correct: 1, explanation: "Present Perfect für Erfahrungen." },
    { category: "k8_englisch", question: "'I wish I __ more time.'", answers: ["have", "had", "will have"], correct: 1, explanation: "Nach 'I wish': Simple Past für unrealen Wunsch." },
    { category: "k8_englisch", question: "'I have __ finished my homework.'", answers: ["already", "yet", "just now"], correct: 0, explanation: "'already' im Present Perfect für 'schon'." },
    { category: "k8_englisch", question: "'They __ been living here for ten years.'", answers: ["has", "have", "had"], correct: 1, explanation: "Present Perfect mit 'they': have been living." },
    { category: "k8_englisch", question: "'If it rains tomorrow, we __ at home.'", answers: ["stay", "will stay", "stayed"], correct: 1, explanation: "If-Clause Typ 1: will + stay." },
    { category: "k8_mathe", question: "Was ist der Kehrwert von 3/5?", answers: ["5/3", "3/5", "-3/5"], correct: 0, explanation: "Kehrwert: Zähler und Nenner tauschen → 5/3." },
    { category: "k8_chemie", question: "Was ist der pH-Wert 7?", answers: ["Sauer", "Neutral", "Basisch"], correct: 1, explanation: "pH 7 ist neutral, darunter sauer, darüber basisch." },
    { category: "k8_geschichte", question: "Was war die Reformation?", answers: ["Eine Kirchenerneuerung ab 1517", "Ein Krieg", "Eine Erfindung"], correct: 0, explanation: "Martin Luther löste 1517 die Reformation aus." },
    { category: "k8_physik", question: "Was ist eine Kraft?", answers: ["Ein Maß für Wärme", "Etwas, das Körper verformt oder bewegt", "Eine Energieform"], correct: 1, explanation: "Kräfte können Körper beschleunigen, abbremsen oder verformen." },
    { category: "k8_englisch", question: "'By next year, I __ my exams.'", answers: ["will finish", "will have finished", "finish"], correct: 1, explanation: "Future Perfect: will have + 3. Form." },

    // ==========================================
    // KLASSE 9
    // ==========================================
    { category: "k9_englisch", question: "'If I had a million dollars, I __ a big house.'", answers: ["will buy", "would buy", "bought"], correct: 1, explanation: "If-Clause Typ 2: would + Verb." },
    { category: "k9_englisch", question: "'She said that she __ tired.'", answers: ["is", "was", "has been"], correct: 1, explanation: "Reported Speech: Backshift is → was." },
    { category: "k9_englisch", question: "'The car __ repaired tomorrow.'", answers: ["is repaired", "was repaired", "will be repaired"], correct: 2, explanation: "Passiv Zukunft: will be + 3. Form." },
    { category: "k9_englisch", question: "'He suggested __ to the cinema.'", answers: ["to go", "going", "go"], correct: 1, explanation: "Nach 'suggest': -ing Form." },
    { category: "k9_politik", question: "Wer wählt den Bundeskanzler?", answers: ["Das Volk", "Der Bundestag", "Der Bundespräsident"], correct: 1, explanation: "Der Bundestag wählt den Kanzler." },
    { category: "k9_politik", question: "Wie viele Bundesländer hat Deutschland?", answers: ["14", "16", "18"], correct: 1, explanation: "Deutschland hat 16 Bundesländer." },
    { category: "k9_wirtschaft", question: "Was ist Inflation?", answers: ["Sinkende Preise", "Steigende Preise / Kaufkraftverlust", "Steigende Löhne"], correct: 1, explanation: "Inflation = Geld verliert an Wert, Preise steigen." },
    { category: "k9_biologie", question: "Was ist die Grundeinheit der Vererbung?", answers: ["Zelle", "Gen", "Protein"], correct: 1, explanation: "Gene sind die Grundeinheit der Vererbung." },

    // ==========================================
    // KLASSE 10
    // ==========================================
    { category: "k10_englisch", question: "'I would have helped if I __ about it.'", answers: ["knew", "had known", "know"], correct: 1, explanation: "If-Clause Typ 3: Past Perfect." },
    { category: "k10_englisch", question: "'Not only __ late, but he also forgot his homework.'", answers: ["he was", "was he", "he is"], correct: 1, explanation: "Inversion nach 'Not only'." },
    { category: "k10_mathe", question: "Was ist die Ableitung von x²?", answers: ["x", "2x", "2"], correct: 1, explanation: "Ableitung: f'(x) = 2x." },
    { category: "k10_geschichte", question: "Wann fiel die Berliner Mauer?", answers: ["1987", "1989", "1991"], correct: 1, explanation: "Die Berliner Mauer fiel am 9. November 1989." },
    { category: "k10_chemie", question: "Was ist H₂O?", answers: ["Kohlendioxid", "Wasser", "Sauerstoff"], correct: 1, explanation: "H₂O ist die chemische Formel für Wasser." },
    { category: "k10_biologie", question: "Was ist DNA?", answers: ["Ein Protein", "Die Erbsubstanz", "Ein Kohlenhydrat"], correct: 1, explanation: "DNA ist die Erbsubstanz in allen Lebewesen." },
    { category: "k10_politik", question: "Was ist die Gewaltenteilung?", answers: ["Legislative, Exekutive, Judikative", "Bund, Länder, Gemeinden", "Regierung, Opposition, Medien"], correct: 0, explanation: "Gewaltenteilung: Legislative, Exekutive, Judikative." },
    { category: "k10_physik", question: "Was ist die Lichtgeschwindigkeit?", answers: ["300 km/h", "300.000 km/s", "3.000 km/s"], correct: 1, explanation: "Lichtgeschwindigkeit ≈ 300.000 km/s." },

    // ==========================================
    // KLASSE 11
    // ==========================================
    { category: "k11_mathe", question: "Was ist das Integral von 2x?", answers: ["x²", "x² + C", "2x² + C"], correct: 1, explanation: "∫2x dx = x² + C (Integrationskonstante)." },
    { category: "k11_mathe", question: "Was ist e^(0)?", answers: ["0", "1", "e"], correct: 1, explanation: "Jede Zahl hoch 0 ergibt 1: e⁰ = 1." },
    { category: "k11_physik", question: "Was besagt die Relativitätstheorie?", answers: ["E = mc²", "F = ma", "U = RI"], correct: 0, explanation: "Einsteins berühmte Formel: E = mc²." },
    { category: "k11_geschichte", question: "Was war der Kalte Krieg?", answers: ["Ein Krieg in der Arktis", "Ost-West-Konflikt nach 1945", "Ein Krieg im Mittelalter"], correct: 1, explanation: "Kalter Krieg = Konflikt zwischen USA und Sowjetunion." },
    { category: "k11_englisch", question: "'Hardly __ when the phone rang.'", answers: ["I had arrived", "had I arrived", "arrived I"], correct: 1, explanation: "Inversion nach 'Hardly'." },
    { category: "k11_biologie", question: "Was ist die Mitose?", answers: ["Zellteilung", "Proteinproduktion", "Energiegewinnung"], correct: 0, explanation: "Mitose = Zellteilung zur Vermehrung." },
    { category: "k11_chemie", question: "Was ist ein Katalysator?", answers: ["Ein Reaktionsprodukt", "Ein Stoff, der Reaktionen beschleunigt", "Ein Lösungsmittel"], correct: 1, explanation: "Katalysatoren beschleunigen Reaktionen, ohne verbraucht zu werden." },
    { category: "k11_politik", question: "Was ist die EU?", answers: ["Ein Staatenbund in Europa", "Eine Weltorganisation", "Eine Partei"], correct: 0, explanation: "EU = Europäische Union, ein Staatenbund." },

    // ==========================================
    // KLASSE 12
    // ==========================================
    { category: "k12_mathe", question: "Was ist die Stammfunktion von 1/x?", answers: ["ln(x)", "ln|x| + C", "x + C"], correct: 1, explanation: "∫1/x dx = ln|x| + C." },
    { category: "k12_mathe", question: "Was ist eine Matrix?", answers: ["Eine Zahlentabelle", "Eine Funktion", "Ein Diagramm"], correct: 0, explanation: "Matrizen sind rechteckige Zahlentabellen." },
    { category: "k12_physik", question: "Was ist der photoelektrische Effekt?", answers: ["Licht erzeugt Strom", "Strom erzeugt Licht", "Wärme erzeugt Licht"], correct: 0, explanation: "Einstein: Licht kann Elektronen aus Metall lösen." },
    { category: "k12_physik", question: "Was ist die Quantenmechanik?", answers: ["Mechanik großer Körper", "Physik der kleinsten Teilchen", "Wärmelehre"], correct: 1, explanation: "Quantenmechanik beschreibt das Verhalten von Atomen und Elementarteilchen." },
    { category: "k12_geschichte", question: "Was war die Französische Revolution?", answers: ["1789", "1848", "1917"], correct: 0, explanation: "Die Französische Revolution begann 1789." },
    { category: "k12_biologie", question: "Was ist die Gentechnik?", answers: ["Herstellung von Genen", "Gezielte Veränderung von Erbgut", "Analyse von Proteinen"], correct: 1, explanation: "Gentechnik verändert gezielt das Erbgut." },
    { category: "k12_chemie", question: "Was sind Isotope?", answers: ["Atome mit gleicher Protonenzahl, unterschiedlicher Neutronenzahl", "Verschiedene Elemente", "Moleküle"], correct: 0, explanation: "Isotope haben gleiche Protonen-, aber verschiedene Neutronenzahl." },
    { category: "k12_politik", question: "Was ist der Föderalismus?", answers: ["Zentralstaat", "Bundesstaat mit Länderautonomie", "Diktatur"], correct: 1, explanation: "Föderalismus = Aufteilung der Macht zwischen Bund und Ländern." },

    // ==========================================
    // KLASSE 13
    // ==========================================
    { category: "k13_mathe", question: "Was ist eine komplexe Zahl?", answers: ["a + bi", "a × b", "a - b"], correct: 0, explanation: "Komplexe Zahlen: a + bi (i² = -1)." },
    { category: "k13_mathe", question: "Was ist ein Grenzwert (Limes)?", answers: ["Ein fester Wert", "Wert, dem sich eine Funktion annähert", "Der Maximalwert"], correct: 1, explanation: "Grenzwert = Wert, dem sich eine Funktion beliebig annähert." },
    { category: "k13_physik", question: "Was ist die Stringtheorie?", answers: ["Eine Theorie über Musik", "Versuch der Vereinheitlichung aller Kräfte", "Eine Theorie über Seile"], correct: 1, explanation: "Stringtheorie versucht, alle Grundkräfte zu vereinen." },
    { category: "k13_physik", question: "Was ist der Urknall?", answers: ["Entstehung des Universums", "Eine Explosion auf der Erde", "Ein Experiment"], correct: 0, explanation: "Urknalltheorie: Das Universum entstand vor ca. 13,8 Mrd. Jahren." },
    { category: "k13_geschichte", question: "Was war die Industrialisierung?", answers: ["Übergang zur maschinellen Produktion", "Erfindung des Internets", "Entwicklung der Landwirtschaft"], correct: 0, explanation: "Industrialisierung = Übergang zur maschinellen Massenproduktion ab ca. 1750." },
    { category: "k13_biologie", question: "Was ist die Evolutionstheorie?", answers: ["Darwins Theorie der Artenentstehung", "Eine Schöpfungsgeschichte", "Eine Theorie über Sterne"], correct: 0, explanation: "Darwin beschrieb die Evolution durch natürliche Selektion." },
    { category: "k13_chemie", question: "Was ist die organische Chemie?", answers: ["Chemie der Metalle", "Chemie der Kohlenstoffverbindungen", "Chemie der Gase"], correct: 1, explanation: "Organische Chemie = Chemie der Kohlenstoffverbindungen." },
    { category: "k13_politik", question: "Was ist die Globalisierung?", answers: ["Weltweite Vernetzung von Wirtschaft und Kultur", "Abschottung der Länder", "Lokale Produktion"], correct: 0, explanation: "Globalisierung = zunehmende weltweite Vernetzung." },

    // ==========================================
    // BERUFSSCHULE - KFZ-MECHATRONIKER (Lernfelder 1-14)
    // ==========================================
    { category: "berufsschule_kfz_lf1", question: "Kfz LF1: Wozu dient die Fahrzeugidentifikationsnummer (FIN)?", answers: ["Zur eindeutigen Identifikation eines Fahrzeugs", "Zur Angabe der Lackfarbe", "Für die Versicherung"], correct: 0, explanation: "LF1: Die FIN (Fahrgestellnummer) identifiziert jedes Fahrzeug eindeutig." },
    { category: "berufsschule_kfz_lf1", question: "Kfz LF1: Welches Werkzeug gehört zur Grundausstattung eines Kfz-Mechatronikers?", answers: ["Drehmomentschlüssel", "Schweißgerät", "Diagnosetester"], correct: 0, explanation: "LF1: Der Drehmomentschlüssel ist essenziell für korrekte Anzugsmomente." },
    { category: "berufsschule_kfz_lf2", question: "Kfz LF2: Was ist beim Umgang mit Bremsflüssigkeit zu beachten?", answers: ["Sie ist ungiftig", "Sie ist hygroskopisch (zieht Wasser an)", "Sie ist brennbar"], correct: 1, explanation: "LF2: Bremsflüssigkeit zieht Wasser an → niedrigerer Siedepunkt." },
    { category: "berufsschule_kfz_lf2", question: "Kfz LF2: In welchem Intervall sollte Bremsflüssigkeit gewechselt werden?", answers: ["Alle 6 Monate", "Alle 2 Jahre", "Alle 5 Jahre"], correct: 1, explanation: "LF2: Herstellervorgabe meist alle 2 Jahre wegen Wasseraufnahme." },
    { category: "berufsschule_kfz_lf3", question: "Kfz LF3: Was prüft man mit einem Multimeter?", answers: ["Nur Spannung", "Spannung, Strom und Widerstand", "Nur Durchgang"], correct: 1, explanation: "LF3: Ein Multimeter misst Spannung (V), Strom (A) und Widerstand (Ω)." },
    { category: "berufsschule_kfz_lf3", question: "Kfz LF3: Welche Spannung hat eine voll geladene Starterbatterie?", answers: ["6V", "12,6V", "24V"], correct: 1, explanation: "LF3: Eine gesunde 12V-Batterie hat im Ruhezustand 12,6-12,8V." },
    { category: "berufsschule_kfz_lf4", question: "Kfz LF4: Wofür steht die Abkürzung CAN-Bus?", answers: ["Car Area Network", "Controller Area Network", "Computer Assisted Navigation"], correct: 1, explanation: "LF4: CAN = Controller Area Network, ein Bussystem im Fahrzeug." },
    { category: "berufsschule_kfz_lf4", question: "Kfz LF4: Welcher Vorteil bietet ein CAN-Bus-System?", answers: ["Weniger Kabel im Fahrzeug", "Mehr Leistung", "Geringeres Gewicht"], correct: 0, explanation: "LF4: Der CAN-Bus reduziert den Kabelbaum erheblich." },
    { category: "berufsschule_kfz_lf5", question: "Kfz LF5: Was versteht man unter dem OT beim Motor?", answers: ["Oberer Totpunkt", "Öltemperatur", "Offene Tür"], correct: 0, explanation: "LF5: OT = Oberer Totpunkt, der höchste Punkt des Kolbens." },
    { category: "berufsschule_kfz_lf5", question: "Kfz LF5: Wie viele Takte hat ein Viertaktmotor?", answers: ["2", "4", "6"], correct: 1, explanation: "LF5: Ansaugen, Verdichten, Arbeiten, Ausstoßen = 4 Takte." },
    { category: "berufsschule_kfz_lf6", question: "Kfz LF6: Welche Aufgabe hat der Katalysator?", answers: ["Leistungssteigerung", "Umwandlung schädlicher Abgase", "Kühlung des Motors"], correct: 1, explanation: "LF6: Der Kat wandelt CO, HC und NOx in unschädliche Stoffe um." },
    { category: "berufsschule_kfz_lf6", question: "Kfz LF6: Was misst die Lambda-Sonde?", answers: ["Drehzahl", "Restsauerstoff im Abgas", "Kühlmitteltemperatur"], correct: 1, explanation: "LF6: Die Lambda-Sonde misst den Restsauerstoff für das optimale Gemisch." },
    { category: "berufsschule_kfz_lf7", question: "Kfz LF7: Welche Funktion hat das ABS?", answers: ["Automatisches Bremsen", "Verhindert Blockieren der Räder beim Bremsen", "Beschleunigungskontrolle"], correct: 1, explanation: "LF7: ABS = Antiblockiersystem, verhindert blockierende Räder." },
    { category: "berufsschule_kfz_lf8", question: "Kfz LF8: Was bedeutet ESP?", answers: ["Elektronisches Stabilitätsprogramm", "Elektrische Servopumpe", "Energiesparprogramm"], correct: 0, explanation: "LF8: ESP hilft, das Fahrzeug in kritischen Situationen zu stabilisieren." },
    { category: "berufsschule_kfz_lf9", question: "Kfz LF9: Welches Öl wird für moderne Dieselmotoren empfohlen?", answers: ["10W-40", "5W-30 (Low-SAPS)", "20W-50"], correct: 1, explanation: "LF9: Low-SAPS-Öle schützen den Dieselpartikelfilter." },
    { category: "berufsschule_kfz_lf10", question: "Kfz LF10: Wie erfolgt die Klimaanlagenwartung?", answers: ["Nur Kältemittel auffüllen", "Desinfektion + ggf. Kältemittel prüfen", "Kompressor austauschen"], correct: 1, explanation: "LF10: Regelmäßige Desinfektion und Kältemittelprüfung sind wichtig." },
    { category: "berufsschule_kfz_lf11", question: "Kfz LF11: Was ist Hybridtechnologie?", answers: ["Nur Elektroantrieb", "Kombination aus Verbrenner + Elektromotor", "Nur Wasserstoffantrieb"], correct: 1, explanation: "LF11: Hybrid = Verbrennungsmotor + Elektromotor." },
    { category: "berufsschule_kfz_lf12", question: "Kfz LF12: Welche Spannung führt ein Hochvoltsystem?", answers: ["12V", "48V", ">60V (meist 400-800V)"], correct: 2, explanation: "LF12: Hochvoltsysteme arbeiten mit Spannungen über 60V DC." },
    { category: "berufsschule_kfz_lf13", question: "Kfz LF13: Was ist beim Radwechsel zu beachten?", answers: ["Überkreuz anziehen", "Drehmoment nach Herstellervorgabe", "Beides ist richtig"], correct: 2, explanation: "LF13: Erst über Kreuz anziehen, dann mit Drehmomentschlüssel finalisieren." },
    { category: "berufsschule_kfz_lf14", question: "Kfz LF14: Was ist eine HU/AU?", answers: ["Hauptuntersuchung/Abgasuntersuchung", "Hilfsuntersuchung", "Herstelleruntersuchung"], correct: 0, explanation: "LF14: HU = Hauptuntersuchung (TÜV), AU = Abgasuntersuchung." },

    // ==========================================
    // BERUFSSCHULE - TISCHLER
    // ==========================================
    { category: "berufsschule_tischler", question: "Tischler: Welches Holz eignet sich am besten für den Außenbereich?", answers: ["Buche", "Lärche", "Fichte"], correct: 1, explanation: "Lärche ist witterungsbeständig und ideal für draußen." },
    { category: "berufsschule_tischler", question: "Tischler: Was ist eine Schlitz-und-Zapfen-Verbindung?", answers: ["Eine Holzverbindung", "Eine Metallverbindung", "Eine Klebeverbindung"], correct: 0, explanation: "Klassische Holzverbindung: Zapfen greift in Schlitz." },
    { category: "berufsschule_tischler", question: "Tischler: Wozu dient ein Hobel?", answers: ["Zum Sägen", "Zum Glätten von Holzoberflächen", "Zum Bohren"], correct: 1, explanation: "Der Hobel glättet und formt Holzoberflächen." },
    { category: "berufsschule_tischler", question: "Tischler: Was bedeutet 'Vollholz'?", answers: ["Massives Holz aus einem Stück", "Pressspanplatte", "Furniertes Holz"], correct: 0, explanation: "Vollholz = massives Naturholz, kein Verbundmaterial." },
    { category: "berufsschule_tischler", question: "Tischler: Welches Werkzeug für präzise Gehrungsschnitte?", answers: ["Handsäge", "Kapp- und Gehrungssäge", "Stichsäge"], correct: 1, explanation: "Die Kapp- und Gehrungssäge ermöglicht exakte Winkelschnitte." },
    { category: "berufsschule_tischler", question: "Tischler: Was ist ein Furnier?", answers: ["Massivholz", "Dünnes Echtholzblatt", "Kunststoffbeschichtung"], correct: 1, explanation: "Furnier ist ein dünnes Blatt aus echtem Holz (0,5-3mm)." },
    { category: "berufsschule_tischler", question: "Tischler: Wie wird Holz vor Feuchtigkeit geschützt?", answers: ["Gar nicht", "Durch Lacke, Lasuren oder Öle", "Nur durch Farbe"], correct: 1, explanation: "Lacke, Lasuren und Öle schützen Holz vor Feuchtigkeit." },
    { category: "berufsschule_tischler", question: "Tischler: Was sind Dübel?", answers: ["Holzstäbe zur Verbindung", "Schrauben", "Nägel"], correct: 0, explanation: "Dübel aus Holz oder Kunststoff dienen der unsichtbaren Verbindung." },

    // ==========================================
    // BERUFSSCHULE - ELEKTRONIKER
    // ==========================================
    { category: "berufsschule_elektroniker", question: "Elektroniker: Was besagt das Ohmsche Gesetz?", answers: ["U = I × R", "P = U × I", "R = U / I²"], correct: 0, explanation: "U = I × R (Spannung = Strom × Widerstand)." },
    { category: "berufsschule_elektroniker", question: "Elektroniker: Welche Farbe hat der Schutzleiter?", answers: ["Blau", "Grün-Gelb", "Braun"], correct: 1, explanation: "Der Schutzleiter (PE) ist immer grün-gelb." },
    { category: "berufsschule_elektroniker", question: "Elektroniker: Was ist ein Kurzschluss?", answers: ["Eine Unterbrechung", "Verbindung mit sehr geringem Widerstand", "Eine Sicherung"], correct: 1, explanation: "Kurzschluss = ungewollte niederohmige Verbindung." },
    { category: "berufsschule_elektroniker", question: "Elektroniker: Wofür steht VDE?", answers: ["Verband der Elektrotechnik", "Verein Deutscher Erfinder", "Vertrag der Energie"], correct: 0, explanation: "VDE = Verband der Elektrotechnik Elektronik Informationstechnik." },
    { category: "berufsschule_elektroniker", question: "Elektroniker: Was ist Wechselspannung?", answers: ["Spannung, die ihre Polarität periodisch ändert", "Konstante Spannung", "Gleichspannung"], correct: 0, explanation: "Wechselspannung (AC) ändert periodisch Polarität, 50Hz in Deutschland." },
    { category: "berufsschule_elektroniker", question: "Elektroniker: Was misst ein Oszilloskop?", answers: ["Nur Widerstand", "Spannungsverlauf über Zeit", "Nur Strom"], correct: 1, explanation: "Ein Oszilloskop zeigt den zeitlichen Verlauf von Spannungen." },

    // ==========================================
    // BERUFSSCHULE - FRISEUR
    // ==========================================
    { category: "berufsschule_friseur", question: "Friseur: Welche Haarschicht ist für die Farbe verantwortlich?", answers: ["Haarmark", "Haarrinde (Cortex)", "Schuppenschicht"], correct: 1, explanation: "Im Cortex sitzen die Melanin-Pigmente für die Haarfarbe." },
    { category: "berufsschule_friseur", question: "Friseur: Was bewirkt eine Dauerwelle?", answers: ["Glättung der Haare", "Umformung durch chemische Prozesse", "Nur Reinigung"], correct: 1, explanation: "Dauerwelle verändert die Haarstruktur chemisch für Locken." },
    { category: "berufsschule_friseur", question: "Friseur: Welcher pH-Wert ist hautfreundlich?", answers: ["1-2", "5,5", "10-12"], correct: 1, explanation: "Der natürliche pH-Wert der Haut liegt bei etwa 5,5." },
    { category: "berufsschule_friseur", question: "Friseur: Was ist Balayage?", answers: ["Eine Schnitttechnik", "Freihand-Färbetechnik", "Eine Dauerwellentechnik"], correct: 1, explanation: "Balayage = freihändiges Auftragen von Farbe für natürliche Strähnen." },
    { category: "berufsschule_friseur", question: "Friseur: Wie desinfiziert man Kämme und Scheren richtig?", answers: ["Mit Wasser abspülen", "Mit geeignetem Desinfektionsmittel", "Nur abtrocknen"], correct: 1, explanation: "Werkzeuge müssen nach jedem Kunden desinfiziert werden." },

    // ==========================================
    // BERUFSSCHULE - KAUFMANN/-FRAU FÜR BÜROMANAGEMENT
    // ==========================================
    { category: "berufsschule_buerokaufmann", question: "Büromanagement: Was ist eine Bilanz?", answers: ["Eine Rechnung", "Gegenüberstellung von Aktiva und Passiva", "Ein Brief"], correct: 1, explanation: "Die Bilanz zeigt Vermögen (Aktiva) und Kapital (Passiva)." },
    { category: "berufsschule_buerokaufmann", question: "Büromanagement: Was steht in einem Angebot?", answers: ["Nur der Preis", "Leistungsumfang, Preis, Bedingungen", "Nur die Adresse"], correct: 1, explanation: "Ein Angebot enthält Leistungsbeschreibung, Preise, Lieferbedingungen etc." },
    { category: "berufsschule_buerokaufmann", question: "Büromanagement: Was bedeutet 'Deadline'?", answers: ["Eine Linie auf dem Papier", "Eine festgelegte Frist", "Ein Feiertag"], correct: 1, explanation: "Deadline = letzter Abgabetermin / Frist." },
    { category: "berufsschule_buerokaufmann", question: "Büromanagement: Welche DIN-Norm gilt für Geschäftsbriefe?", answers: ["DIN 5008", "DIN A4", "DIN 476"], correct: 0, explanation: "DIN 5008 regelt Schreib- und Gestaltungsregeln für Geschäftsbriefe." },
    { category: "berufsschule_buerokaufmann", question: "Büromanagement: Was ist eine Mahnung?", answers: ["Ein Lob", "Zahlungsaufforderung bei Verzug", "Eine Einladung"], correct: 1, explanation: "Eine Mahnung fordert zur Zahlung einer fälligen Rechnung auf." },

    // ==========================================
    // BERUFSSCHULE - INDUSTRIEMECHANIKER
    // ==========================================
    { category: "berufsschule_industriemechaniker", question: "Industriemechaniker: Was ist CNC?", answers: ["Computerized Numerical Control", "Central Network Computer", "Continuous Numerical Calculation"], correct: 0, explanation: "CNC = computergesteuerte Maschinen." },
    { category: "berufsschule_industriemechaniker", question: "Industriemechaniker: Welches Material ist am härtesten?", answers: ["Aluminium", "Stahl", "Diamant (Schneidstoff)"], correct: 2, explanation: "Diamant ist der härteste bekannte Schneidstoff." },
    { category: "berufsschule_industriemechaniker", question: "Industriemechaniker: Was ist eine Toleranzangabe?", answers: ["Eine ungefähre Maßeingabe", "Die erlaubte Abweichung vom Nennmaß", "Die Endgröße eines Werkstücks"], correct: 1, explanation: "Toleranz = zulässige Abweichung vom Sollmaß." },
    { category: "berufsschule_industriemechaniker", question: "Industriemechaniker: Was versteht man unter Drehen?", answers: ["Werkstück dreht sich, Werkzeug ist fest", "Werkzeug dreht sich, Werkstück ist fest", "Beides dreht sich"], correct: 0, explanation: "Beim Drehen rotiert das Werkstück gegen ein feststehendes Werkzeug." },
    { category: "berufsschule_industriemechaniker", question: "Industriemechaniker: Was bedeutet 'DIN'?", answers: ["Deutsche Industrie-Norm", "Deutsches Institut für Normung", "Dienstleistungs-Information"], correct: 1, explanation: "DIN = Deutsches Institut für Normung e.V." },

    // ==========================================
    // BERUFSSCHULE - FACHINFORMATIKER
    // ==========================================
    { category: "berufsschule_fachinformatiker", question: "Fachinformatiker: Was ist ein Algorithmus?", answers: ["Eine Programmiersprache", "Eine eindeutige Handlungsvorschrift", "Ein Betriebssystem"], correct: 1, explanation: "Algorithmus = Schritt-für-Schritt-Anleitung zur Problemlösung." },
    { category: "berufsschule_fachinformatiker", question: "Fachinformatiker: Wofür steht HTML?", answers: ["HyperText Markup Language", "High Tech Modern Language", "HyperText Machine Learning"], correct: 0, explanation: "HTML = HyperText Markup Language (Auszeichnungssprache für Webseiten)." },
    { category: "berufsschule_fachinformatiker", question: "Fachinformatiker: Was ist eine IP-Adresse?", answers: ["Eine Telefonnummer", "Eine eindeutige Netzwerkadresse", "Eine Postadresse"], correct: 1, explanation: "IP-Adresse identifiziert Geräte im Netzwerk (z.B. 192.168.1.1)." },
    { category: "berufsschule_fachinformatiker", question: "Fachinformatiker: Was ist eine Datenbank?", answers: ["Eine Textdatei", "Ein System zur strukturierten Datenspeicherung", "Eine Tabellenkalkulation"], correct: 1, explanation: "Datenbanken speichern und verwalten strukturierte Daten (z.B. SQL)." },
    { category: "berufsschule_fachinformatiker", question: "Fachinformatiker: Was ist ein Compiler?", answers: ["Ein Texteditor", "Übersetzt Quellcode in Maschinensprache", "Eine Datenbank"], correct: 1, explanation: "Ein Compiler übersetzt Programmcode in ausführbare Dateien." },

    // ==========================================
    // BERUFSSCHULE - PFLEGEFACHKRAFT
    // ==========================================
    { category: "berufsschule_pflegefachkraft", question: "Pflege: Was sind Vitalzeichen?", answers: ["Nur Körpertemperatur", "Puls, Blutdruck, Temperatur, Atmung", "Nur Blutwerte"], correct: 1, explanation: "Vitalzeichen geben Auskunft über lebenswichtige Körperfunktionen." },
    { category: "berufsschule_pflegefachkraft", question: "Pflege: Was ist Dekubitusprophylaxe?", answers: ["Wundversorgung", "Vorbeugung von Druckgeschwüren", "Medikamentengabe"], correct: 1, explanation: "Dekubitus = Druckgeschwür, Prophylaxe = Vorbeugung." },
    { category: "berufsschule_pflegefachkraft", question: "Pflege: Welche Hygienemaßnahme ist die wichtigste?", answers: ["Desinfektion", "Händewaschen", "Handschuhe tragen"], correct: 1, explanation: "Gründliches Händewaschen ist die Basis der Hygiene." },
    { category: "berufsschule_pflegefachkraft", question: "Pflege: Was bedeutet 'Mobilisation'?", answers: ["Ruhigstellung", "Aktivierung/Bewegung des Patienten", "Medikamenteneinnahme"], correct: 1, explanation: "Mobilisation fördert die Bewegungsfähigkeit des Patienten." },

    // ==========================================
    // BERUFSSCHULE - VERKÄUFER/EINZELHANDEL
    // ==========================================
    { category: "berufsschule_verkaeufer", question: "Einzelhandel: Was ist ein Warenwirtschaftssystem?", answers: ["Ein Kassensystem", "System zur Warenbestandsverwaltung", "Eine Werbeplattform"], correct: 1, explanation: "Es verwaltet Warenbestand, Bestellungen und Verkäufe." },
    { category: "berufsschule_verkaeufer", question: "Einzelhandel: Was ist eine Inventur?", answers: ["Eine Werbeaktion", "Bestandsaufnahme aller Waren", "Eine Rabattaktion"], correct: 1, explanation: "Inventur = mengen- und wertmäßige Erfassung des Warenbestands." },
    { category: "berufsschule_verkaeufer", question: "Einzelhandel: Was bedeutet 'Kulanz'?", answers: ["Gesetzliche Pflicht", "Freiwilliges Entgegenkommen ohne rechtliche Verpflichtung", "Ein Rabatt"], correct: 1, explanation: "Kulanz = freiwillige Leistung über die gesetzliche Gewährleistung hinaus." },
    { category: "berufsschule_verkaeufer", question: "Einzelhandel: Was ist die optimale Regalplatzierung?", answers: ["Ganz unten", "Auf Augenhöhe", "Ganz oben"], correct: 1, explanation: "Produkte auf Augenhöhe werden am meisten wahrgenommen." },

    // ==========================================
    // DÖNERSTEIN 5 - Zusatzfragen (ergänzend zu Kfz)
    // ==========================================
    { category: "doenerstein5", question: "Dönerstein 5: Wie viele Döner braucht ein Kfz-Azubi pro Tag?", answers: ["1", "3", "5+"], correct: 2, explanation: "😄 Dönerstein 5 besagt: Mindestens 5 Döner für maximale Leistung!" },
    { category: "doenerstein5", question: "Dönerstein 5: Was ist die wichtigste Mahlzeit eines Kfz-Mechatronikers?", answers: ["Frühstück", "Mittagessen", "Döner (mit alles und scharf)"], correct: 2, explanation: "💡 Ein Döner mit allem gibt die nötige Energie für den Werkstatttag!" },
    { category: "doenerstein5", question: "Dönerstein 5: Wie prüft man, ob der Motor warm ist?", answers: ["Mit dem Finger", "Kühlmitteltemperatur-Anzeige", "Einen Döner drauflegen"], correct: 2, explanation: "😄 Dönerstein-Methode: Wenn der Döner brutzelt, ist er warm!" }
];