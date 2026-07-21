// ==========================================
// EDUPLAY HUB - ZENTRALE DATENBANK (data.js)
// ==========================================

const APP_DATABASE = {

    // 📚 BEREICH 1: SCHULE (Klasse 1 bis 13 einzeln aufgeteilt)
    schule: {
        klasse_1: {
            faecher: ["Mathematik", "Deutsch", "Sachkunde", "Englisch"],
            fragen: [
                { fach: "Mathematik", question: "Was ist 25 + 14?", answers: ["35", "38", "39"], correct: 2, explanation: "💡 20+10=30, 5+4=9. Ergibt 39!" },
                { fach: "Mathematik", question: "Was ist 8 mal 4?", answers: ["32", "24", "36"], correct: 0, explanation: "💡 Das kleine Einmaleins: 8, 16, 24, 32!" },
                { fach: "Deutsch", question: "Welches Wort ist hier richtig großgeschrieben?", answers: ["hund", "Hund", "HUnD"], correct: 1, explanation: "💡 Regel: Menschen, Dinge und Tiere (Nomen) schreibt man immer groß!" },
                { fach: "Mathematik", question: "Was ist 10 minus 3?", answers: ["6", "7", "8"], correct: 1, explanation: "💡 Wenn man von 10 drei wegnimmt, bleiben 7 übrig." },
                { fach: "Deutsch", question: "Wie viele Silben hat das Wort 'Son-ne'?", answers: ["Eine", "Zwei", "Drei"], correct: 1, explanation: "💡 Son-ne wird in zwei Teile (Silben) geklatscht: Son und ne." },
                { fach: "Sachkunde", question: "Welches Tier legt Eier und kann fliegen?", answers: ["Hund", "Vogel", "Katze"], correct: 1, explanation: "💡 Vögel legen Eier und die meisten von ihnen können fliegen." },
                { fach: "Mathematik", question: "Was ist die Hälfte von 10?", answers: ["4", "5", "6"], correct: 1, explanation: "💡 10 geteilt durch 2 ergibt 5." },
                { fach: "Mathematik", question: "Was ist 7 + 8?", answers: ["14", "15", "16"], correct: 1, explanation: "💡 7 + 8 = 15. Tipp: 7+7=14, plus 1 macht 15!" },
                { fach: "Deutsch", question: "Welches Wort reimt sich auf 'Maus'?", answers: ["Haus", "Tisch", "Ball"], correct: 0, explanation: "💡 'Maus' und 'Haus' klingen am Ende gleich – das ist ein Reim." },
                { fach: "Sachkunde", question: "Welche Jahreszeit kommt nach dem Winter?", answers: ["Sommer", "Frühling", "Herbst"], correct: 1, explanation: "💡 Die Reihenfolge ist: Frühling, Sommer, Herbst, Winter." }
            ],
            vokabeln: {
                en: [
                    {de:"Eins",foreign:"one"}, {de:"Zwei",foreign:"two"}, {de:"Drei",foreign:"three"}, {de:"Vier",foreign:"four"}, {de:"Fünf",foreign:"five"}, 
                    {de:"Rot",foreign:"red"}, {de:"Blau",foreign:"blue"}, {de:"Grün",foreign:"green"}, {de:"Gelb",foreign:"yellow"}, {de:"Schwarz",foreign:"black"},
                    {de:"Hund",foreign:"dog"}, {de:"Katze",foreign:"cat"}, {de:"Maus",foreign:"mouse"}, {de:"Vogel",foreign:"bird"}, {de:"Fisch",foreign:"fish"}
                ],
                tr: [
                    {de:"Eins",foreign:"bir"}, {de:"Zwei",foreign:"iki"}, {de:"Drei",foreign:"üç"}, {de:"Hund",foreign:"köpek"}, {de:"Katze",foreign:"kedi"}, 
                    {de:"Vogel",foreign:"kuş"}, {de:"Rot",foreign:"kırmızı"}, {de:"Blau",foreign:"mavi"}, {de:"Tisch",foreign:"masa"}, {de:"Buch",foreign:"kitap"}
                ]
            }
        },
        klasse_2: {
            faecher: ["Mathematik", "Deutsch", "Sachkunde", "Englisch"],
            fragen: [
                { fach: "Mathematik", question: "Was ist 5 + 6?", answers: ["10", "11", "12"], correct: 1, explanation: "💡 5 + 5 = 10, und noch 1 dazu ergibt 11." },
                { fach: "Deutsch", question: "Mit welchem Buchstaben beginnt das Wort 'Elefant'?", answers: ["A", "E", "I"], correct: 1, explanation: "💡 Elefant beginnt mit dem Buchstaben E." },
                { fach: "Sachkunde", question: "Wie viele Beine hat ein Hund?", answers: ["2", "4", "6"], correct: 1, explanation: "💡 Hunde sind Vierbeiner – sie haben 4 Beine." },
                { fach: "Mathematik", question: "Welche Zahl kommt nach der 19?", answers: ["18", "20", "21"], correct: 1, explanation: "💡 Nach 19 kommt die 20." },
                { fach: "Sachkunde", question: "Welche Farbe hat eine reife Banane?", answers: ["Blau", "Gelb", "Rot"], correct: 1, explanation: "💡 Reife Bananen sind gelb." },
                { fach: "Deutsch", question: "Was ist das Gegenteil von 'kalt'?", answers: ["warm", "nass", "leise"], correct: 0, explanation: "💡 Das Gegenteil von kalt ist warm." },
                { fach: "Mathematik", question: "Wie viele Finger hat man an einer Hand?", answers: ["4", "5", "6"], correct: 1, explanation: "💡 An einer Hand hat man 5 Finger." },
                { fach: "Sachkunde", question: "Wo leben Fische?", answers: ["In der Luft", "Im Wasser", "Unter der Erde"], correct: 1, explanation: "💡 Fische leben im Wasser und atmen mit Kiemen." },
                { fach: "Deutsch", question: "Wie viele Buchstaben hat das Wort 'Hund'?", answers: ["3", "4", "5"], correct: 1, explanation: "💡 H-U-N-D sind 4 Buchstaben." },
                { fach: "Mathematik", question: "Was ist größer: 7 oder 9?", answers: ["7", "9", "Beide gleich"], correct: 1, explanation: "💡 9 ist größer als 7." }
            ],
            vokabeln: {
                en: [
                    {de:"Apfel",foreign:"apple"}, {de:"Banane",foreign:"banana"}, {de:"Brot",foreign:"bread"}, {de:"Wasser",foreign:"water"}, {de:"Milch",foreign:"milk"},
                    {de:"Sechs",foreign:"six"}, {de:"Sieben",foreign:"seven"}, {de:"Acht",foreign:"eight"}, {de:"Neun",foreign:"nine"}, {de:"Zehn",foreign:"ten"},
                    {de:"Weiß",foreign:"white"}, {de:"Orange",foreign:"orange"}, {de:"Rosa",foreign:"pink"}, {de:"Braun",foreign:"brown"}, {de:"Lila",foreign:"purple"}
                ],
                tr: [
                    {de:"Hallo",foreign:"merhaba"}, {de:"Tschüss",foreign:"hoşçakal"}, {de:"Danke",foreign:"teşekkürler"}, {de:"Bitte",foreign:"lütfen"}, {de:"Schule",foreign:"okul"},
                    {de:"Vier",foreign:"dört"}, {de:"Fünf",foreign:"beş"}, {de:"Grün",foreign:"yeşil"}, {de:"Gelb",foreign:"sarı"}, {de:"Mutter",foreign:"anne"}
                ]
            }
        },
        klasse_3: {
            faecher: ["Mathematik", "Deutsch", "Sachkunde", "Englisch", "Türkisch"],
            fragen: [
                { fach: "Deutsch", question: "Welches dieser Wörter ist ein Tuwort (Verb)?", answers: ["Schön", "Laufen", "Auto"], correct: 1, explanation: "💡 Verben beschreiben, was man tut (laufen, springen, spielen)." },
                { fach: "Sachkunde", question: "In welche Richtung zeigt die Nadel eines Kompasses immer?", answers: ["Süden", "Westen", "Norden"], correct: 2, explanation: "💡 Die Magnetnadel richtet sich immer nach dem magnetischen Nordpol der Erde aus." },
                { fach: "Mathematik", question: "Was ist 6 mal 7?", answers: ["42", "36", "48"], correct: 0, explanation: "💡 Einmaleins: 6, 12, 18, 24, 30, 36, 42!" },
                { fach: "Mathematik", question: "Wie viele Ecken hat ein Rechteck?", answers: ["3", "4", "5"], correct: 1, explanation: "💡 Ein Rechteck hat immer vier Ecken und vier Seiten." },
                { fach: "Deutsch", question: "Was ist das Gegenteil von 'groß'?", answers: ["klein", "schnell", "laut"], correct: 0, explanation: "💡 'klein' ist das Gegenteil (Antonym) von 'groß'." },
                { fach: "Sachkunde", question: "Wie nennt man den Übergang von Wasser zu Wasserdampf?", answers: ["Schmelzen", "Verdunsten", "Gefrieren"], correct: 1, explanation: "💡 Wenn Wasser erhitzt wird und zu Dampf wird, nennt man das Verdunsten." },
                { fach: "Mathematik", question: "Was ist 100 geteilt durch 4?", answers: ["20", "25", "30"], correct: 1, explanation: "💡 100 : 4 = 25, denn 4 × 25 = 100." },
                { fach: "Deutsch", question: "Wie lautet die Mehrzahl (Plural) von 'Kind'?", answers: ["Kinde", "Kinder", "Kindern"], correct: 1, explanation: "💡 Die Mehrzahl von 'Kind' ist 'Kinder'." },
                { fach: "Sachkunde", question: "Welches Organ pumpt das Blut durch den Körper?", answers: ["Lunge", "Herz", "Magen"], correct: 1, explanation: "💡 Das Herz ist ein Muskel, der das Blut durch die Adern pumpt." }
            ],
            vokabeln: {
                en: [
                    {de:"Pferd",foreign:"horse"}, {de:"Kuh",foreign:"cow"}, {de:"Schwein",foreign:"pig"}, {de:"Schaf",foreign:"sheep"}, {de:"Ente",foreign:"duck"},
                    {de:"Ball",foreign:"ball"}, {de:"Puppe",foreign:"doll"}, {de:"Sonne",foreign:"sun"}, {de:"Mond",foreign:"moon"}, {de:"Stern",foreign:"star"}
                ]
            }
        },
        klasse_4: {
            faecher: ["Mathematik", "Deutsch", "Sachkunde", "Englisch", "Türkisch"],
            fragen: [
                { fach: "Mathematik", question: "Was ist 7 mal 8?", answers: ["54", "56", "58"], correct: 1, explanation: "💡 7 × 8 = 56." },
                { fach: "Sachkunde", question: "Wie viele Jahreszeiten gibt es?", answers: ["2", "3", "4"], correct: 2, explanation: "💡 Frühling, Sommer, Herbst und Winter – das sind 4 Jahreszeiten." },
                { fach: "Deutsch", question: "Welches Wort ist ein Nomen (Hauptwort)?", answers: ["laufen", "Tisch", "schnell"], correct: 1, explanation: "💡 'Tisch' ist ein Nomen – man kann 'der Tisch' sagen und schreibt es groß." },
                { fach: "Mathematik", question: "Wie viele Minuten hat eine halbe Stunde?", answers: ["15", "30", "45"], correct: 1, explanation: "💡 Eine ganze Stunde hat 60 Minuten, die Hälfte davon sind 30." },
                { fach: "Sachkunde", question: "Welches Tier ist ein Säugetier?", answers: ["Forelle", "Delfin", "Adler"], correct: 1, explanation: "💡 Delfine leben im Wasser, sind aber Säugetiere – sie atmen Luft und säugen ihre Jungen." },
                { fach: "Deutsch", question: "Wie schreibt man das Wort richtig?", answers: ["Fahrrad", "Farrad", "Fahrat"], correct: 0, explanation: "💡 Richtig ist 'Fahrrad' – von 'fahren' und 'Rad'." },
                { fach: "Mathematik", question: "Wie viel ist die Hälfte von 48?", answers: ["22", "24", "26"], correct: 1, explanation: "💡 48 : 2 = 24." },
                { fach: "Sachkunde", question: "Welcher Planet ist unser Heimatplanet?", answers: ["Mars", "Erde", "Venus"], correct: 1, explanation: "💡 Wir leben auf der Erde, dem dritten Planeten von der Sonne." },
                { fach: "Deutsch", question: "Was ist ein Verb?", answers: ["Ein Tuwort (z.B. laufen)", "Ein Namenwort", "Ein Wiewort"], correct: 0, explanation: "💡 Verben sind Tuwörter und beschreiben, was jemand macht." },
                { fach: "Mathematik", question: "Wie viele Seiten hat ein Würfel?", answers: ["4", "6", "8"], correct: 1, explanation: "💡 Ein Würfel hat 6 quadratische Flächen." }
            ],
            vokabeln: {
                en: [
                    {de:"Baum",foreign:"tree"}, {de:"Blume",foreign:"flower"}, {de:"Auto",foreign:"car"}, {de:"Buch",foreign:"book"}, {de:"Schuh",foreign:"shoe"},
                    {de:"Tisch",foreign:"desk"}, {de:"Stuhl",foreign:"chair"}, {de:"Stift",foreign:"pen"}, {de:"Schule",foreign:"school"}, {de:"Lehrer",foreign:"teacher"}
                ]
            }
        },
        klasse_5: {
            faecher: ["Englisch", "Biologie", "Geografie", "Mathematik", "Türkisch"],
            fragen: [
                { fach: "Englisch", question: "He ___ to school every day.", answers: ["go", "goes", "going"], correct: 1, explanation: "💡 Simple Present: Bei 'he, she, it' muss das 's' mit! (He goes)" },
                { fach: "Englisch", question: "Look! The dog ___ in the garden.", answers: ["plays", "is playing", "play"], correct: 1, explanation: "💡 Present Progressive: Signalwort 'Look!'. Es passiert genau jetzt." },
                { fach: "Englisch", question: "I ___ not like apples.", answers: ["does", "am", "do"], correct: 2, explanation: "💡 Simple Present Verneinung: I do not (don't) like." },
                { fach: "Biologie", question: "Was benötigen Pflanzen, um Sauerstoff zu produzieren (Fotosynthese)?", answers: ["Nur Wasser", "Sonnenlicht, Wasser und CO2", "Erde und Dünger"], correct: 1, explanation: "💡 Pflanzen machen aus Sonnenlicht, Wasser und Kohlendioxid (CO2) Sauerstoff." },
                { fach: "Englisch", question: "There ___ two cats in the garden.", answers: ["is", "are", "be"], correct: 1, explanation: "💡 'There are' benutzt man bei mehreren Dingen (Plural: two cats)." },
                { fach: "Englisch", question: "This is my dog. ___ name is Rex.", answers: ["His", "Her", "Its"], correct: 2, explanation: "💡 Für Tiere und Dinge benutzt man 'its'." },
                { fach: "Mathematik", question: "Was ist ein Zehntel als Bruch?", answers: ["1/100", "1/10", "10/1"], correct: 1, explanation: "💡 Ein Zehntel schreibt man als 1/10." },
                { fach: "Geografie", question: "Wie heißt der längste Fluss Deutschlands?", answers: ["Donau", "Elbe", "Rhein"], correct: 2, explanation: "💡 Der Rhein ist mit rund 865 km auf deutschem Gebiet der längste Fluss Deutschlands." },
                { fach: "Biologie", question: "Wie viele Beine hat ein Insekt?", answers: ["4", "6", "8"], correct: 1, explanation: "💡 Insekten haben immer genau sechs Beine." }
            ],
            vokabeln: {
                en: [
                    {de:"spielen",foreign:"play"}, {de:"lernen",foreign:"learn"}, {de:"lesen",foreign:"read"}, {de:"schreiben",foreign:"write"},
                    {de:"Mutter",foreign:"mother"}, {de:"Vater",foreign:"father"}, {de:"Bruder",foreign:"brother"}, {de:"Schwester",foreign:"sister"},
                    {de:"Haus",foreign:"house"}, {de:"Garten",foreign:"garden"}
                ]
            }
        },
        klasse_6: {
            faecher: ["Englisch", "Biologie", "Geografie", "Mathematik", "Türkisch"],
            fragen: [
                { fach: "Englisch", question: "My birthday is ___ May.", answers: ["at", "on", "in"], correct: 2, explanation: "💡 Bei Monaten benutzt man immer 'in' (in May, in June)." },
                { fach: "Mathematik", question: "Wie viele Grad hat ein rechter Winkel?", answers: ["45°", "90°", "180°"], correct: 1, explanation: "💡 Ein rechter Winkel hat genau 90°." },
                { fach: "Englisch", question: "We ___ football every Saturday.", answers: ["plays", "play", "playing"], correct: 1, explanation: "💡 Simple Present: Bei 'we' gibt es kein 's' am Verb (we play)." },
                { fach: "Geografie", question: "Wie heißt der höchste Berg Deutschlands?", answers: ["Watzmann", "Zugspitze", "Brocken"], correct: 1, explanation: "💡 Die Zugspitze ist mit 2.962 m der höchste Berg Deutschlands." },
                { fach: "Mathematik", question: "Was ist 3/4 als Dezimalzahl?", answers: ["0,34", "0,75", "0,43"], correct: 1, explanation: "💡 3 geteilt durch 4 ergibt 0,75." },
                { fach: "Englisch", question: "Can you ___ me the salt, please?", answers: ["pass", "passes", "passing"], correct: 0, explanation: "💡 Nach 'can' folgt immer die Grundform des Verbs." },
                { fach: "Biologie", question: "Wozu dienen die Wurzeln einer Pflanze?", answers: ["Nur zur Deko", "Aufnahme von Wasser und Nährstoffen", "Fotosynthese"], correct: 1, explanation: "💡 Wurzeln verankern die Pflanze im Boden und nehmen Wasser sowie Nährstoffe auf." },
                { fach: "Mathematik", question: "Was ist der Umfang eines Quadrats mit 5 cm Seitenlänge?", answers: ["10 cm", "20 cm", "25 cm"], correct: 1, explanation: "💡 Ein Quadrat hat 4 gleiche Seiten: 4 × 5 cm = 20 cm." },
                { fach: "Biologie", question: "Welches Tier ist ein Wirbeltier?", answers: ["Regenwurm", "Frosch", "Schnecke"], correct: 1, explanation: "💡 Frösche haben eine Wirbelsäule und gehören zu den Wirbeltieren (Amphibien)." },
                { fach: "Geografie", question: "An welches Meer grenzt Deutschland im Norden?", answers: ["Mittelmeer", "Nord- und Ostsee", "Schwarzes Meer"], correct: 1, explanation: "💡 Deutschland grenzt im Norden an die Nordsee und die Ostsee." }
            ],
            vokabeln: {
                en: [
                    {de:"Montag",foreign:"Monday"}, {de:"Dienstag",foreign:"Tuesday"}, {de:"Mittwoch",foreign:"Wednesday"}, {de:"Donnerstag",foreign:"Thursday"}, {de:"Freitag",foreign:"Friday"},
                    {de:"Kopf",foreign:"head"}, {de:"Auge",foreign:"eye"}, {de:"Ohr",foreign:"ear"}, {de:"Hand",foreign:"hand"}, {de:"Fuß",foreign:"foot"}
                ]
            }
        },
        klasse_7: {
            faecher: ["Englisch", "Physik", "Chemie", "Geschichte", "Mathematik", "Deutsch", "Biologie", "Gesellschaft", "Informatik", "Türkisch"],
            fragen: [
                { fach: "Englisch", question: "Yesterday, I ___ a great movie.", answers: ["see", "saw", "have seen"], correct: 1, explanation: "💡 Simple Past: Signalwort 'Yesterday' verlangt die 2. Form (saw)." },
                { fach: "Physik", question: "Welche Einheit wird für elektrische Spannung verwendet?", answers: ["Ampere", "Watt", "Volt"], correct: 2, explanation: "💡 Die Spannung wird in Volt (V) gemessen." },
                { fach: "Englisch", question: "By next year, I ___ my exams.", answers: ["will finish", "will have finished", "finish"], correct: 1, explanation: "💡 Future Perfect: 'will have' + 3. Form." },
                { fach: "Chemie", question: "Wie lautet das chemische Symbol für Sauerstoff?", answers: ["O", "S", "Ox"], correct: 0, explanation: "💡 Sauerstoff heißt auf Englisch/Latein 'oxygenium', daher das Symbol O." },
                { fach: "Mathematik", question: "Wie berechnet man die Fläche eines Kreises?", answers: ["π × r", "π × r²", "2 × π × r"], correct: 1, explanation: "💡 Die Kreisfläche berechnet man mit π mal Radius zum Quadrat (π × r²)." },
                { fach: "Geschichte", question: "In welchem Jahr endete der Zweite Weltkrieg?", answers: ["1939", "1945", "1950"], correct: 1, explanation: "💡 Der Zweite Weltkrieg endete 1945." },
                { fach: "Deutsch", question: "Welcher Fall (Kasus) antwortet auf die Frage 'Wem?'", answers: ["Nominativ", "Dativ", "Akkusativ"], correct: 1, explanation: "💡 Der Dativ ist der 3. Fall und antwortet auf 'Wem?'." },
                { fach: "Informatik", question: "Was ist ein Algorithmus?", answers: ["Ein Computer-Virus", "Eine feste Schritt-für-Schritt-Anleitung", "Ein Programmiersprache"], correct: 1, explanation: "💡 Ein Algorithmus ist eine eindeutige, endliche Abfolge von Schritten." },
                { fach: "Biologie", question: "Was ist die 'Kraftwerk der Zelle'?", answers: ["Zellkern", "Mitochondrium", "Ribosom"], correct: 1, explanation: "💡 Mitochondrien erzeugen Energie für die Zelle." }
            ],
            vokabeln: {
                en: [
                    {de:"Umwelt",foreign:"environment"}, {de:"Schutz",foreign:"protection"}, {de:"Müll",foreign:"rubbish"}, {de:"Energie",foreign:"energy"},
                    {de:"Internet",foreign:"internet"}, {de:"Computer",foreign:"computer"}, {de:"Nachricht",foreign:"message"}, {de:"Zeitung",foreign:"newspaper"}
                ]
            }
        },
        klasse_8: {
            faecher: ["Englisch", "Physik", "Chemie", "Geschichte", "Mathematik", "Deutsch", "Biologie", "Gesellschaft", "Informatik", "Türkisch"],
            fragen: [
                { fach: "Physik", question: "Was beschreibt das Ohmsche Gesetz?", answers: ["U = R / I", "U = I × R", "I = U × R"], correct: 1, explanation: "💡 Ohmsches Gesetz: Spannung = Stromstärke × Widerstand." },
                { fach: "Mathematik", question: "Was ist der Satz des Pythagoras?", answers: ["a + b = c", "a² + b² = c²", "a × b = c²"], correct: 1, explanation: "💡 Im rechtwinkligen Dreieck gilt: a² + b² = c²." },
                { fach: "Englisch", question: "I have ___ finished my homework.", answers: ["already", "yet", "just now"], correct: 0, explanation: "💡 'already' steht typischerweise im Present Perfect für 'schon'." },
                { fach: "Chemie", question: "Was ist der pH-Wert 7?", answers: ["Sauer", "Neutral", "Basisch"], correct: 1, explanation: "💡 pH 7 ist neutral, darunter sauer, darüber basisch." },
                { fach: "Geschichte", question: "Wer war Otto von Bismarck?", answers: ["Ein Komponist", "Der erste Reichskanzler Deutschlands", "Ein Erfinder"], correct: 1, explanation: "💡 Bismarck war maßgeblich an der Reichsgründung 1871 beteiligt." },
                { fach: "Englisch", question: "If it rains tomorrow, we ___ at home.", answers: ["stay", "will stay", "stayed"], correct: 1, explanation: "💡 If-Clause Typ 1: If + Present, im Hauptsatz 'will' + Grundform." },
                { fach: "Deutsch", question: "Was ist das Prädikat in 'Der Hund bellt laut'?", answers: ["Der Hund", "bellt", "laut"], correct: 1, explanation: "💡 Das Prädikat ist das Verb im Satz – hier 'bellt'." },
                { fach: "Informatik", question: "Was ist eine 'Variable'?", answers: ["Ein fester Text", "Ein Speicherplatz für Werte, die sich ändern können", "Ein Fehler"], correct: 1, explanation: "💡 Eine Variable speichert einen Wert, der im Programmverlauf verändert werden kann." },
                { fach: "Biologie", question: "Wo beginnt die Verdauung von Stärke bereits?", answers: ["Im Magen", "Im Mund", "Im Dünndarm"], correct: 1, explanation: "💡 Speichelenzyme (Amylase) beginnen schon im Mund mit dem Stärkeabbau." }
            ],
            vokabeln: {
                en: [
                    {de:"Reisen",foreign:"travel"}, {de:"Zug",foreign:"train"}, {de:"Flugzeug",foreign:"airplane"}, {de:"Strand",foreign:"beach"},
                    {de:"Chemie",foreign:"chemistry"}, {de:"Physik",foreign:"physics"}, {de:"Geschichte",foreign:"history"}, {de:"Erdkunde",foreign:"geography"}
                ]
            }
        },
        klasse_9: {
            faecher: ["Englisch", "Politik", "Wirtschaft", "Biologie", "Philosophie", "Deutsch", "Mathematik", "Türkisch"],
            fragen: [
                { fach: "Englisch", question: "If I had a million dollars, I ___ a big house.", answers: ["will buy", "would buy", "bought"], correct: 1, explanation: "💡 If-Clause Typ 2: If + Simple Past, im Hauptsatz 'would' + Verb." },
                { fach: "Englisch", question: "The car ___ repaired tomorrow.", answers: ["is repaired", "was repaired", "will be repaired"], correct: 2, explanation: "💡 Passiv in der Zukunft: will + be + Partizip Perfekt (3. Form)." },
                { fach: "Politik", question: "Wer wählt in Deutschland direkt den Bundeskanzler?", answers: ["Das Volk", "Der Bundestag", "Der Bundespräsident"], correct: 1, explanation: "💡 Das Volk wählt den Bundestag, und die Abgeordneten wählen den Kanzler." },
                { fach: "Wirtschaft", question: "Was versteht man unter 'Inflation'?", answers: ["Sinkende Preise", "Steigende Preise / Kaufkraftverlust", "Steigende Löhne"], correct: 1, explanation: "💡 Inflation bedeutet, dass das allgemeine Preisniveau steigt." },
                { fach: "Politik", question: "Wie viele Bundesländer hat Deutschland?", answers: ["14", "16", "18"], correct: 1, explanation: "💡 Deutschland besteht aus 16 Bundesländern." },
                { fach: "Deutsch", question: "Wie heißt die Übertreibung als Stilmittel?", answers: ["Metapher", "Hyperbel", "Ironie"], correct: 1, explanation: "💡 Eine Hyperbel ist eine bewusste, starke Übertreibung." },
                { fach: "Mathematik", question: "Was ist 2 hoch 5 (2⁵)?", answers: ["10", "16", "32"], correct: 2, explanation: "💡 2×2×2×2×2 = 32." },
                { fach: "Biologie", question: "Was ist Mitose?", answers: ["Zellteilung", "Ein Zellorganell", "Ein Hormon"], correct: 0, explanation: "💡 Mitose ist die Zellteilung, bei der genetisch identische Zellen entstehen." }
            ],
            vokabeln: {
                en: [
                    {de:"Gesellschaft",foreign:"society"}, {de:"Politik",foreign:"politics"}, {de:"Demokratie",foreign:"democracy"}, {de:"Wahl",foreign:"election"},
                    {de:"Wirtschaft",foreign:"economy"}, {de:"Entwicklung",foreign:"development"}, {de:"Bildung",foreign:"education"}
                ]
            }
        },
        klasse_10: {
            faecher: ["Englisch", "Politik", "Wirtschaft", "Biologie", "Philosophie", "Deutsch", "Mathematik", "Türkisch"],
            fragen: [
                { fach: "Englisch", question: "She said that she ___ tired.", answers: ["is", "was", "has been"], correct: 1, explanation: "💡 Reported Speech: Backshift von 'is' zu 'was', da Einleitung in Vergangenheit." },
                { fach: "Wirtschaft", question: "Was beschreibt das Gesetz von Angebot und Nachfrage?", answers: ["Staat legt Preise fest", "Preise entstehen durch Verhältnis von Angebot und Nachfrage", "Konstante Preise"], correct: 1, explanation: "💡 Steigt die Nachfrage bei gleichem Angebot, steigen die Preise." },
                { fach: "Englisch", question: "He suggested ___ to the cinema.", answers: ["to go", "going", "go"], correct: 1, explanation: "💡 Nach 'suggest' folgt immer die -ing Form (Gerundium)." },
                { fach: "Biologie", question: "Was ist die Grundeinheit der Vererbung?", answers: ["Zelle", "Gen", "Protein"], correct: 1, explanation: "💡 Gene sind die Abschnitte der DNA, die Erbinformationen tragen." },
                { fach: "Philosophie", question: "Wer prägte den Satz 'Ich denke, also bin ich'?", answers: ["Kant", "Descartes", "Nietzsche"], correct: 1, explanation: "💡 'Cogito ergo sum' stammt von René Descartes." },
                { fach: "Deutsch", question: "Was ist ein Konjunktiv?", answers: ["Zeitform", "Möglichkeitsform / Wunschform", "Satzzeichen"], correct: 1, explanation: "💡 Der Konjunktiv drückt Wünsche, Möglichkeiten oder indirekte Rede aus." },
                { fach: "Mathematik", question: "Was ist die binomische Formel für (a+b)²?", answers: ["a² + b²", "a² + 2ab + b²", "a² - b²"], correct: 1, explanation: "💡 Erste binomische Formel: (a+b)² = a² + 2ab + b²." },
                { fach: "Politik", question: "Was ist das Grundgesetz?", answers: ["Die Verfassung Deutschlands", "Ein einfaches Gesetz", "Ein EU-Vertrag"], correct: 0, explanation: "💡 Das Grundgesetz ist seit 1949 die Verfassung der BRD." }
            ],
            vokabeln: {
                en: [
                    {de:"Technologie",foreign:"technology"}, {de:"Wissenschaft",foreign:"science"}, {de:"Diskussion",foreign:"discussion"}, {de:"Meinung",foreign:"opinion"},
                    {de:"Arbeitslosigkeit",foreign:"unemployment"}, {de:"Steuer",foreign:"tax"}, {de:"Vertrag",foreign:"contract"}
                ]
            }
        },
        klasse_11: {
            faecher: ["Englisch", "Politik", "Philosophie", "Deutsch", "Mathematik"],
            fragen: [
                { fach: "Englisch", question: "Hardly ___ arrived when the phone rang.", answers: ["I had", "had I", "I have"], correct: 1, explanation: "💡 Nach 'Hardly' am Satzanfang folgt eine Inversion: had I arrived." },
                { fach: "Englisch", question: "I would have helped you if I ___ about it.", answers: ["knew", "had known", "know"], correct: 1, explanation: "💡 If-Clause Typ 3: If + Past Perfect, im Hauptsatz 'would have' + 3. Form." },
                { fach: "Deutsch", question: "Was ist eine These in einer Erörterung?", answers: ["Behauptung, die begründet wird", "Ein Beispiel", "Zusammenfassung"], correct: 0, explanation: "💡 Eine These ist die zentrale Behauptung, die mit Argumenten gestützt wird." },
                { fach: "Politik", question: "Was bedeutet 'Gewaltenteilung'?", answers: ["Trennung von Legislative, Exekutive und Judikative", "Aufteilung des Militärs", "Verteilung von Steuern"], correct: 0, explanation: "💡 Die Gewaltenteilung verhindert, dass eine Institution zu viel Macht hat." }
            ],
            vokabeln: {
                en: [
                    {de:"Klimawandel",foreign:"climate change"}, {de:"Globalisierung",foreign:"globalization"}, {de:"Einwanderung",foreign:"immigration"}
                ]
            }
        },
        klasse_12: {
            faecher: ["Englisch", "Politik", "Deutsch", "Mathematik"],
            fragen: [
                { fach: "Englisch", question: "Not only ___ late, but he also forgot his homework.", answers: ["he was", "was he", "he is"], correct: 1, explanation: "💡 Nach 'Not only' am Satzanfang folgt eine Inversion (was he)." },
                { fach: "Mathematik", question: "Was ist die Ableitung von f(x) = x²?", answers: ["2x", "x", "x³"], correct: 0, explanation: "💡 Nach der Potenzregel: f'(x) = 2x." },
                { fach: "Politik", question: "Wie nennt man ein Wahlsystem, bei dem Sitze proportional zu Stimmenanteilen vergeben werden?", answers: ["Mehrheitswahlrecht", "Verhältniswahlrecht", "Zensuswahlrecht"], correct: 1, explanation: "💡 Beim Verhältniswahlrecht entspricht der Sitzanteil ungefähr dem Stimmenanteil." }
            ],
            vokabeln: {}
        },
        klasse_13: {
            faecher: ["Englisch", "Geschichte", "Deutsch", "Mathematik"],
            fragen: [
                { fach: "Englisch", question: "It's high time we ___ a decision.", answers: ["make", "made", "will make"], correct: 1, explanation: "💡 Nach 'it's (high) time' folgt das Simple Past." },
                { fach: "Geschichte", question: "Wann begann die Französische Revolution?", answers: ["1789", "1815", "1848"], correct: 0, explanation: "💡 Die Französische Revolution begann 1789 mit dem Sturm auf die Bastille." },
                { fach: "Geschichte", question: "In welchem Jahrhundert fand die industrielle Revolution in Europa hauptsächlich statt?", answers: ["16. Jahrhundert", "18./19. Jahrhundert", "20. Jahrhundert"], correct: 1, explanation: "💡 Die industrielle Revolution begann Ende des 18. Jahrhunderts in England." }
            ],
            vokabeln: {}
        }
    },

    // 🔧 BEREICH 2: BERUFSSCHULE (Komplett separiert für deine KFZ Ausbildung)
    berufsschule: {
        kfz_mechatronik: {
            faecher: ["Werkstatt", "Elektrik", "Fahrwerk", "Getriebe", "Bremsanlage", "Motor", "Reifen", "Klimaanlage", "Antriebsstrang", "Sicherheit", "Abgas", "Fachenglisch", "Fachtürkisch"],
            fragen: [
                { fach: "Werkstatt", question: "Was darfst du auf gar keinen Fall tun, während das Absteckwerkzeug beim Zahnriemenwechsel angebracht ist?", answers: ["Wasserpumpe lösen", "Motor durchdrehen", "Riemen abnehmen"], correct: 1, explanation: "💡 Wichtig: Ist die Arretierung dran, darf der Motor nicht mehr gedreht werden!" },
                { fach: "Elektrik", question: "Welches Bauteil wandelt in der Lichtmaschine Wechselstrom in Gleichstrom um?", answers: ["Anlasser", "Zündspule", "Diodenplatte"], correct: 2, explanation: "💡 Die Dioden richten den erzeugten Wechselstrom in Gleichstrom für das Auto gleich." },
                { fach: "Fahrwerk", question: "Was genau ist ein Domlager?", answers: ["Ein Teil des Turboladers", "Das Verbindungsstück zwischen Federbein und Karosserie", "Ein Radlager an der Hinterachse"], correct: 1, explanation: "💡 Das Domlager sitzt oben am Stoßdämpfer und verbindet das Fahrwerk mit der Karosserie." },
                { fach: "Getriebe", question: "Welches Kürzel steht z.B. bei einem Opel 2.2 Motor für eine bestimmte Variante?", answers: ["ATC", "M32", "DSG"], correct: 0, explanation: "💡 Die exakte Bezeichnung der Variante ist ATC." },
                { fach: "Bremsanlage", question: "Wofür steht die Abkürzung ABS?", answers: ["Anti-Blockier-System", "Automatik-Brems-Sensor", "Achsen-Balance-Steuerung"], correct: 0, explanation: "💡 ABS verhindert das Blockieren der Räder beim Bremsen, damit das Fahrzeug lenkbar bleibt." },
                { fach: "Motor", question: "Was ist die Aufgabe des Turboladers?", answers: ["Kraftstoff einspritzen", "Die angesaugte Luft verdichten", "Öl kühlen"], correct: 1, explanation: "💡 Der Turbolader verdichtet die Ansaugluft, damit mehr Sauerstoff in den Zylinder gelangt und mehr Leistung entsteht." },
                { fach: "Elektrik", question: "Wofür steht die Abkürzung OBD?", answers: ["On-Board-Diagnose", "Öl-Behälter-Druck", "Ohm-Bemessungs-Daten"], correct: 0, explanation: "💡 OBD (On-Board-Diagnose) überwacht abgasrelevante Systeme und speichert Fehlercodes." },
                { fach: "Fahrwerk", question: "Was bewirkt ein Stoßdämpfer?", answers: ["Er dämpft die Schwingungen der Feder", "Er trägt das Fahrzeuggewicht allein", "Er lenkt die Räder"], correct: 0, explanation: "💡 Der Stoßdämpfer dämpft die Federbewegungen, damit das Auto nicht dauerhaft wippt." },
                { fach: "Motor", question: "Wie viele Takte hat ein klassischer Ottomotor?", answers: ["2", "4", "6"], correct: 1, explanation: "💡 Ansaugen, Verdichten, Arbeiten, Ausstoßen – der klassische Viertaktmotor." },
                { fach: "Reifen", question: "Was gibt die Zahl in '205/55 R16' an?", answers: ["Reifenbreite in mm, Höhe in % und Felgendurchmesser in Zoll", "Luftdruck und Gewicht", "Herstellungsjahr"], correct: 0, explanation: "💡 205 = Breite in mm, 55 = Querschnittsverhältnis in %, R16 = Felgendurchmesser in Zoll." },
                { fach: "Klimaanlage", question: "Welches Kältemittel wird häufig in modernen Klimaanlagen verwendet?", answers: ["R134a bzw. R1234yf", "Frigen", "Stickstoff"], correct: 0, explanation: "💡 R134a war lange Standard, moderne Fahrzeuge nutzen zunehmend das umweltfreundlichere R1234yf." },
                { fach: "Motor", question: "Was ist die Aufgabe der Lambdasonde?", answers: ["Sie misst den Restsauerstoff im Abgas", "Sie kühlt den Motor", "Sie erzeugt den Zündfunken"], correct: 0, explanation: "💡 Die Lambdasonde misst den Sauerstoffgehalt im Abgas, um das Kraftstoff-Luft-Gemisch zu regeln." },
                { fach: "Elektrik", question: "Was zeigt ein Multimeter im Modus 'Durchgangsprüfung' an?", answers: ["Ob ein Stromkreis geschlossen ist", "Die Motordrehzahl", "Den Ölstand"], correct: 0, explanation: "💡 Die Durchgangsprüfung piept, wenn ein Stromkreis leitfähig (geschlossen) ist – nützlich zur Fehlersuche." },
                { fach: "Antriebsstrang", question: "Was überträgt die Kraft vom Motor auf die Räder bei Frontantrieb typischerweise?", answers: ["Kardanwelle", "Antriebswelle (Gelenkwelle)", "Blattfeder"], correct: 1, explanation: "💡 Bei Frontantrieb übertragen Antriebs- bzw. Gelenkwellen die Kraft vom Getriebe auf die Vorderräder." },
                { fach: "Sicherheit", question: "Wofür steht die Abkürzung ESP?", answers: ["Elektronisches Stabilitätsprogramm", "Extra Sicherheits-Paket", "Elektro-Servo-Pumpe"], correct: 0, explanation: "💡 ESP greift gezielt in die Bremsen ein, um das Fahrzeug bei drohendem Schleudern zu stabilisieren." },
                { fach: "Motor", question: "Was passiert beim 'Verdichtungstakt' im Viertaktmotor?", answers: ["Das Gemisch wird angesaugt", "Das Gemisch wird komprimiert", "Die Abgase werden ausgestoßen"], correct: 1, explanation: "💡 Im zweiten Takt wird das angesaugte Luft-Kraftstoff-Gemisch vom Kolben verdichtet." },
                { fach: "Motor", question: "Wozu dient der Ölfilter?", answers: ["Er reinigt das Motoröl von Partikeln", "Er kühlt den Motor", "Er filtert die Ansaugluft"], correct: 0, explanation: "💡 Der Ölfilter hält Abrieb und Schmutzpartikel aus dem Motoröl zurück." },
                { fach: "Elektrik", question: "Was passiert, wenn die Batterie leer ist?", answers: ["Der Anlasser dreht nicht oder nur langsam", "Der Motor läuft schneller", "Die Bremsen versagen"], correct: 0, explanation: "💡 Ohne ausreichende Batteriespannung bekommt der Anlasser zu wenig Strom." },
                { fach: "Bremsen", question: "Woran erkennt man verschlissene Bremsbeläge?", answers: ["Quietschen und längerer Bremsweg", "Der Motor ruckelt", "Die Klimaanlage kühlt schlechter"], correct: 0, explanation: "💡 Verschleißanzeiger erzeugen Quietschgeräusche, außerdem verlängert sich der Bremsweg." },
                { fach: "Abgas", question: "Welche Aufgabe hat der Katalysator?", answers: ["Schadstoffe im Abgas umwandeln", "Kraftstoff filtern", "Öl reinigen"], correct: 0, explanation: "💡 Der Katalysator wandelt schädliche Abgase (CO, HC, NOx) in weniger schädliche Stoffe um." }
            ],
            vokabeln: {
                en: [
                    { de: "Motor", foreign: "engine" }, { de: "Bremse", foreign: "brake" }, { de: "Schaltplan", foreign: "wiring diagram" },
                    { de: "Zündspule", foreign: "ignition coil" }, { de: "Reifen", foreign: "tire" }, { de: "Schraubenschlüssel", foreign: "wrench" },
                    { de: "Kupplung", foreign: "clutch" }, { de: "Getriebe", foreign: "gearbox" }, { de: "Auspuff", foreign: "exhaust" }, { de: "Batterie", foreign: "battery" },
                    { de: "Lichtmaschine", foreign: "alternator" }, { de: "Zahnriemen", foreign: "timing belt" }, { de: "Stoßdämpfer", foreign: "shock absorber" }, { de: "tanken", foreign: "refuel" },
                    { de: "Achse", foreign: "axle" }, { de: "Kolben", foreign: "piston" }, { de: "Zylinder", foreign: "cylinder" }, { de: "Kühler", foreign: "radiator" },
                    { de: "Werkstatt", foreign: "workshop" }, { de: "Ersatzteil", foreign: "spare part" }, { de: "Wartung", foreign: "maintenance" }, { de: "Fehlercode", foreign: "fault code" },
                    { de: "Anlasser", foreign: "starter motor" }, { de: "Sicherung", foreign: "fuse" }, { de: "Achsschenkel", foreign: "steering knuckle" }, { de: "Ölwechsel", foreign: "oil change" },
                    { de: "Auspuffrohr", foreign: "tailpipe" }, { de: "Zündkerze", foreign: "spark plug" }, { de: "Steuergerät", foreign: "control unit" }, { de: "Federung", foreign: "suspension" },
                    { de: "Lenkrad", foreign: "steering wheel" }, { de: "Windschutzscheibe", foreign: "windshield" }, { de: "Scheinwerfer", foreign: "headlight" }, { de: "Rückspiegel", foreign: "rearview mirror" },
                    { de: "Radlager", foreign: "wheel bearing" }, { de: "Keilriemen", foreign: "V-belt" },
                    { de: "Drehmoment", foreign: "torque" }, { de: "Leerlauf", foreign: "idle" }, { de: "Kraftstoffpumpe", foreign: "fuel pump" }, { de: "Kühlmittel", foreign: "coolant" },
                    { de: "Drehmomentschlüssel", foreign: "torque wrench" }, { de: "Hebebühne", foreign: "vehicle lift" }, { de: "Kostenvoranschlag", foreign: "cost estimate" }
                ],
                tr: [
                    { de: "Auto", foreign: "araba" }, { de: "Motor", foreign: "motor" }, { de: "Reifen", foreign: "lastik" },
                    { de: "Bremse", foreign: "fren" }, { de: "tanken", foreign: "yakıt almak" },
                    { de: "Getriebe", foreign: "vites kutusu" }, { de: "Batterie", foreign: "akü" }, { de: "Werkstatt", foreign: "tamirhane" }, { de: "Öl", foreign: "yağ" },
                    { de: "Lenkrad", foreign: "direksiyon" }, { de: "Scheinwerfer", foreign: "far" }, { de: "Pannenhilfe", foreign: "yol yardımı" }, { de: "Führerschein", foreign: "ehliyet" },
                    { de: "Benzin", foreign: "benzin" }, { de: "Unfall", foreign: "kaza" },
                    { de: "Werkzeug", foreign: "alet" }, { de: "reparieren", foreign: "tamir etmek" }
                ]
            }
        }
    },

    // 🎮 BEREICH 3: SPASS & QUIZ (Losgelöst vom Schulstoff)
    spass_und_quiz: {
        allgemeinwissen: [
            { question: "Wer ist der Hauptdarsteller, der den Detective in der 'Crime City' Reihe spielt?", answers: ["Jackie Chan", "Don Lee", "Tony Jaa"], correct: 1, explanation: "💡 Don Lee (Ma Dong-seok) spielt den schlagkräftigen Detective." },
            { question: "Wer war Miyamoto Musashi?", answers: ["Ein berühmter japanischer Samurai", "Ein südkoreanischer Kampfkünstler", "Ein Charakter aus Star Wars"], correct: 0, explanation: "💡 Er war einer der legendärsten Samurai der Geschichte und kämpfte mit zwei Schwertern." },
            { question: "Wie lange dauert ein Fußballspiel bei einer F-Jugend in der Regel?", answers: ["2 x 45 Minuten", "2 x 20 Minuten", "3 x 15 Minuten"], correct: 1, explanation: "💡 Im Kleinfeldfußball bei den Jüngsten (z.B. F-Jugend) wird meist 2 x 20 Minuten gespielt." },
            { question: "Wie heißt die Hauptstadt von Südkorea?", answers: ["Busan", "Seoul", "Incheon"], correct: 1, explanation: "💡 Seoul ist die Hauptstadt und größte Stadt Südkoreas." },
            { question: "In welchem Land wird ein Großteil der Martial-Arts-Filme mit Don Lee produziert?", answers: ["Japan", "Südkorea", "China"], correct: 1, explanation: "💡 Don Lee ist ein koreanisch-amerikanischer Schauspieler, viele seiner Filme entstehen in Südkorea." },
            { question: "Wie viele Spieler stehen bei einem regulären Fußballspiel pro Mannschaft auf dem Feld?", answers: ["9", "10", "11"], correct: 2, explanation: "💡 Jede Mannschaft stellt 11 Spieler, inklusive Torwart." },
            { question: "Wer war Alexander der Große?", answers: ["Ein römischer Kaiser", "Ein makedonischer König und Feldherr", "Ein ägyptischer Pharao"], correct: 1, explanation: "💡 Alexander der Große war König von Makedonien und eroberte eines der größten Reiche der Antike." },
            { question: "Welches Kampfkunst-Genre ist besonders für Filme aus Thailand bekannt (z.B. mit Tony Jaa)?", answers: ["Muay Thai", "Karate", "Judo"], correct: 0, explanation: "💡 Muay Thai (Thaiboxen) ist die traditionelle Kampfkunst Thailands und prägt viele Actionfilme des Landes." },
            { question: "Wie heißt die gelbe Karte im Fußball auch umgangssprachlich?", answers: ["Verwarnung", "Platzverweis", "Elfmeter"], correct: 0, explanation: "💡 Die gelbe Karte ist eine Verwarnung; erst die rote Karte führt zum Platzverweis." },
            { question: "In welchem Jahrhundert lebte der Samurai Miyamoto Musashi?", answers: ["12. Jahrhundert", "16./17. Jahrhundert", "20. Jahrhundert"], correct: 1, explanation: "💡 Musashi lebte von 1584 bis 1645, also im 16./17. Jahrhundert." },
            { question: "Wie heißt der Wettkampf, bei dem Schwimmen, Radfahren und Laufen kombiniert werden?", answers: ["Triathlon", "Biathlon", "Pentathlon"], correct: 0, explanation: "💡 Beim Triathlon werden diese drei Ausdauersportarten hintereinander absolviert." },
            { question: "Wie heißt der japanische Regisseur, der für Filme wie 'Die sieben Samurai' bekannt ist?", answers: ["Hayao Miyazaki", "Akira Kurosawa", "Takeshi Kitano"], correct: 1, explanation: "💡 Akira Kurosawa gilt als einer der einflussreichsten Regisseure Japans." },
            { question: "Welcher Ozean ist der größte der Erde?", answers: ["Atlantik", "Pazifik", "Indischer Ozean"], correct: 1, explanation: "💡 Der Pazifische Ozean ist mit Abstand der größte und tiefste Ozean der Welt." },
            { question: "Wie viele Ringe hat das olympische Symbol?", answers: ["4", "5", "6"], correct: 1, explanation: "💡 Die fünf Ringe stehen für die fünf bewohnten Kontinente." },
            { question: "Wie viele Runden hat ein Profi-Boxkampf maximal?", answers: ["8", "12", "15"], correct: 1, explanation: "💡 WM-Kämpfe gehen heute über maximal 12 Runden." },
            { question: "Welches ist das größte Land der Welt nach Fläche?", answers: ["China", "Russland", "Kanada"], correct: 1, explanation: "💡 Russland ist mit rund 17 Millionen km² das flächengrößte Land der Erde." },
            { question: "In welcher Sportart gibt es einen 'Slam Dunk'?", answers: ["Basketball", "Volleyball", "Handball"], correct: 0, explanation: "💡 Beim Slam Dunk stopft ein Basketballspieler den Ball direkt in den Korb." },
            { question: "Wie viele Saiten hat eine klassische Gitarre normalerweise?", answers: ["4", "6", "8"], correct: 1, explanation: "💡 Eine klassische Gitarre hat 6 Saiten." }
        ],
        wuerdest_du_eher: [
            { question: "Schätzfrage: Was würden die meisten Menschen eher tun – einen Popel essen oder mit Fallschirm springen?", answers: ["Popel essen 🤢", "Fallschirmspringen 🪂", "Beides auf keinen Fall!"], correct: 1, explanation: "😄 Die meisten würden wohl eher springen als naschen!" },
            { question: "Schätzfrage: Was wählen die meisten, wenn sie sich für immer entscheiden müssten – Ketchup oder Senf?", answers: ["Nur Ketchup 🍅", "Nur Senf 🌭", "Dann lieber gar nichts mehr essen"], correct: 0, explanation: "😄 Reine Geschmackssache – die meisten Menschen wählen laut Umfragen Ketchup." },
            { question: "Schätzfrage: Welche Superkraft wünschen sich die meisten Menschen – Fliegen oder Unsichtbarkeit?", answers: ["Fliegen ✈️", "Unsichtbar werden 👻", "Ich brauch keine Superkräfte"], correct: 0, explanation: "😄 Fliegen gewinnt bei den meisten Umfragen knapp gegen Unsichtbarkeit!" },
            { question: "Scherzfrage: Nie wieder Schokolade oder nie wieder Chips – was ist die ehrlichste Antwort?", answers: ["Nie wieder Schokolade 🍫", "Nie wieder Chips 🍟", "Unmöglich zu entscheiden!"], correct: 2, explanation: "😄 Ehrlich gesagt: die schwerste Frage des ganzen Quiz." },
            { question: "Schätzfrage: Was wären die meisten lieber für einen Tag – ein Vogel oder ein Fisch?", answers: ["Ein Vogel 🐦", "Ein Fisch 🐠", "Lieber Mensch bleiben"], correct: 0, explanation: "😄 Fliegen können vs. tauchen können – die Vögel gewinnen meist knapp." },
            { question: "Scherzfrage: Jeden Tag Hausaufgaben in Mathe oder in Deutsch – was ist die ehrlichste Antwort?", answers: ["Nur Mathe 📐", "Nur Deutsch 📚", "Gar keine Hausaufgaben bitte!"], correct: 2, explanation: "😄 Das wär wohl die Lieblingsantwort der meisten Kids." },
            { question: "Scherzfrage: Riesige Hände oder riesige Füße – was ist die ehrlichste Antwort?", answers: ["Riesige Hände 🖐️", "Riesige Füße 🦶", "Weder noch, bitte!"], correct: 2, explanation: "😄 Eine schön unangenehme Wahl – beides klingt nach Problemen beim Schuhe kaufen." },
            { question: "Schätzfrage: Wo würden die meisten Menschen lieber für immer leben – im Sommer oder im Winter?", answers: ["Immer Sommer ☀️", "Immer Winter ❄️", "Ich brauch alle vier Jahreszeiten"], correct: 0, explanation: "😄 Weltweit sagen die meisten Menschen: Sommer gewinnt!" },
            { question: "Schätzfrage: Was würden die meisten lieber können – in die Zukunft sehen oder die Vergangenheit noch mal erleben?", answers: ["Die Zukunft sehen 🔮", "Die Vergangenheit erleben ⏳", "Lieber überrascht werden"], correct: 0, explanation: "😄 Neugier auf das, was kommt, gewinnt bei den meisten." },
            { question: "Schätzfrage: Worauf würden die meisten eher eine Woche verzichten – auf das Handy oder auf Süßigkeiten?", answers: ["Ohne Handy 📵", "Ohne Süßigkeiten 🍭", "Beides geht gar nicht!"], correct: 1, explanation: "😄 Für die meisten ist das Handy schwerer wegzudenken als Süßes." },
            { question: "Schätzfrage: Was mögen die meisten Menschen weltweit lieber – Hunde oder Katzen?", answers: ["Hunde 🐕", "Katzen 🐈", "Beide gleich gern"], correct: 0, explanation: "😄 In den meisten Umfragen liegen Hunde als Lieblingshaustier knapp vorn." },
            { question: "Schätzfrage: Was ist bei Kindern beliebter – Pizza oder Pommes?", answers: ["Pizza 🍕", "Pommes 🍟", "Beides zusammen!"], correct: 0, explanation: "😄 Pizza landet in Umfragen fast immer auf Platz 1 der Lieblingsgerichte." },
            { question: "Scherzfrage: Zähne putzen oder Zimmer aufräumen – was ist die ehrlichste Antwort?", answers: ["Zähne putzen 🪥", "Zimmer aufräumen 🧹", "Am liebsten keins von beidem!"], correct: 2, explanation: "😄 Zähne putzen muss trotzdem sein – Zimmer aufräumen leider auch." },
            { question: "Schätzfrage: Was würden die meisten lieber machen – eine Weltreise oder ins Weltall fliegen?", answers: ["Weltreise 🌍", "Ins Weltall 🚀", "Lieber zu Hause bleiben"], correct: 0, explanation: "😄 Die Weltreise gewinnt in Umfragen meist deutlich – das Weltall ist vielen zu weit weg." }
        ],
        nice_to_know: [
            { question: "Wie viele Herzen hat ein Oktopus?", answers: ["1", "3", "8"], correct: 1, explanation: "💡 Oktopusse haben drei Herzen – zwei pumpen Blut zu den Kiemen, eins durch den restlichen Körper." },
            { question: "Welches Tier schläft am meisten am Tag?", answers: ["Koala", "Elefant", "Löwe"], correct: 0, explanation: "💡 Koalas schlafen bis zu 20 Stunden am Tag – ihre Blätternahrung liefert kaum Energie." },
            { question: "Kann Honig eigentlich schlecht werden?", answers: ["Ja, nach wenigen Monaten", "Nein, er ist praktisch unbegrenzt haltbar", "Nur wenn er geöffnet wird"], correct: 1, explanation: "💡 Archäologen fanden 3000 Jahre alten Honig in ägyptischen Gräbern, der noch genießbar war!" },
            { question: "Wie lange dauert es ungefähr, bis Licht von der Sonne die Erde erreicht?", answers: ["8 Sekunden", "8 Minuten", "8 Stunden"], correct: 1, explanation: "💡 Das Sonnenlicht braucht etwa 8 Minuten und 20 Sekunden bis zur Erde." },
            { question: "Welches ist das einzige Säugetier, das nicht springen kann?", answers: ["Elefant", "Nilpferd", "Beide können nicht springen"], correct: 2, explanation: "💡 Sowohl Elefanten als auch Nilpferde sind zu schwer, um mit allen vier Beinen gleichzeitig abzuheben." },
            { question: "Wie viele Knochen hat ein erwachsener Mensch ungefähr?", answers: ["106", "206", "306"], correct: 1, explanation: "💡 Erwachsene haben etwa 206 Knochen – Babys werden mit rund 300 geboren, viele wachsen später zusammen." },
            { question: "Welche Farbe hat das Blut eines Oktopus?", answers: ["Rot", "Blau", "Grün"], correct: 1, explanation: "💡 Oktopus-Blut ist blau, weil es Kupfer statt Eisen zum Sauerstofftransport nutzt." },
            { question: "Wie lange kann eine Schnecke schlafen (am Stück)?", answers: ["Ein paar Stunden", "Ein paar Tage", "Bis zu 3 Jahre"], correct: 2, explanation: "💡 Manche Schneckenarten können bei ungünstigen Bedingungen jahrelang in einer Art Schlafstarre verharren." },
            { question: "Was passiert, wenn man einen Stern (den Fisch, nicht das Weltall) in zwei Hälften teilt?", answers: ["Er stirbt sofort", "Ein Seestern kann sich aus einem Armstück komplett neu bilden", "Nichts Besonderes"], correct: 1, explanation: "💡 Seesterne können aus einem einzigen Arm mit einem Stück Zentralscheibe einen komplett neuen Körper regenerieren." },
            { question: "Wie viele Sprachen gibt es schätzungsweise auf der Welt?", answers: ["Etwa 700", "Etwa 3.000", "Etwa 7.000"], correct: 2, explanation: "💡 Weltweit werden schätzungsweise über 7.000 Sprachen gesprochen, viele davon sind vom Aussterben bedroht." },
            { question: "Welches Körperteil wächst beim Menschen ein Leben lang weiter?", answers: ["Die Nase und die Ohren", "Die Füße", "Die Zähne"], correct: 0, explanation: "💡 Nase und Ohren bestehen aus Knorpel und verändern sich das ganze Leben lang." },
            { question: "Wie viele Muskeln braucht man ungefähr zum Lächeln?", answers: ["Etwa 5", "Etwa 17", "Etwa 60"], correct: 1, explanation: "💡 Zum Lächeln braucht man ungefähr 17 Muskeln – zum Stirnrunzeln deutlich mehr." },
            { question: "Können Enten wirklich nicht 'echoen'?", answers: ["Stimmt, ihr Quaken erzeugt kein Echo", "Falsch, es ist ein Mythos", "Nur bei Regen"], correct: 1, explanation: "💡 Das ist ein bekannter Mythos – Entenquaken erzeugt sehr wohl ein Echo, es ist nur schwer zu hören." },
            { question: "Wie schnell wächst menschliches Kopfhaar ungefähr pro Monat?", answers: ["Etwa 1 cm", "Etwa 5 cm", "Etwa 10 cm"], correct: 0, explanation: "💡 Haare wachsen im Schnitt rund 1 bis 1,5 cm pro Monat." },
            { question: "Welches Tier hat den größten Augapfel der Welt?", answers: ["Elefant", "Riesenkalmar", "Blauwal"], correct: 1, explanation: "💡 Riesenkalmare haben Augen von bis zu 27 cm Durchmesser – so groß wie ein Fußball." },
            { question: "Wie viel Prozent der Erdoberfläche sind von Wasser bedeckt?", answers: ["Etwa 50%", "Etwa 71%", "Etwa 90%"], correct: 1, explanation: "💡 Rund 71% der Erdoberfläche sind mit Wasser bedeckt." }
        ],
        ungewoehnliches: [
            { question: "In welchem Land ist es gesetzlich verboten, Kaugummi zu verkaufen?", answers: ["Japan", "Singapur", "Norwegen"], correct: 1, explanation: "💡 In Singapur ist der Verkauf von Kaugummi seit 1992 aus Gründen der Sauberkeit weitgehend verboten." },
            { question: "Welche deutsche Stadt hat mehr Brücken als Venedig, Amsterdam und London zusammen?", answers: ["Berlin", "Hamburg", "Köln"], correct: 1, explanation: "💡 Hamburg hat rund 2.500 Brücken – mehr als Venedig, Amsterdam und London zusammen." },
            { question: "Wie lange dauerte der kürzeste Krieg der Geschichte?", answers: ["Ca. 38 Minuten", "Ca. 3 Tage", "Ca. 3 Wochen"], correct: 0, explanation: "💡 Der Anglo-Sansibar-Krieg von 1896 dauerte nur etwa 38 Minuten." },
            { question: "In welchem Land gibt es mehr Schafe als Menschen?", answers: ["Neuseeland", "Irland", "Schottland"], correct: 0, explanation: "💡 In Neuseeland leben etwa 5x mehr Schafe als Menschen." },
            { question: "Welches Land besteht aus über 17.000 Inseln?", answers: ["Philippinen", "Indonesien", "Japan"], correct: 1, explanation: "💡 Indonesien besteht aus über 17.000 Inseln, von denen nur etwa 6.000 bewohnt sind." },
            { question: "Wie heißt die einzige Zahl, die auf Deutsch genauso viele Buchstaben hat wie ihr Wert?", answers: ["Vier", "Fünf", "Sechs"], correct: 0, explanation: "💡 'Vier' hat genau 4 Buchstaben – ein kleines Sprachkuriosum." },
            { question: "Welche Farbe hatten die ersten Karotten, bevor sie orange gezüchtet wurden?", answers: ["Lila/violett", "Weiß", "Grün"], correct: 0, explanation: "💡 Ursprüngliche Karotten waren meist violett oder gelb – orange Karotten wurden erst im 17. Jahrhundert in den Niederlanden gezüchtet." },
            { question: "Wie viele Zeitzonen hat Russland?", answers: ["5", "8", "11"], correct: 2, explanation: "💡 Russland erstreckt sich über 11 Zeitzonen – mehr als jedes andere Land der Welt." },
            { question: "In welchem Land gibt es einen Ort, an dem die Sonne im Sommer wochenlang nicht untergeht?", answers: ["Norwegen", "Portugal", "Griechenland"], correct: 0, explanation: "💡 Nördlich des Polarkreises (z.B. in Norwegen) geht die Sonne im Sommer wochenlang nicht unter – die Mitternachtssonne." },
            { question: "Welches Land hat die Nationalflagge in Quadratform (nicht rechteckig)?", answers: ["Schweiz", "Österreich", "Dänemark"], correct: 0, explanation: "💡 Die Schweizer Flagge ist (neben der des Vatikans) eine der wenigen quadratischen Nationalflaggen der Welt." },
            { question: "In welchem Land ist Ketchup an Schulen zeitweise eingeschränkt worden?", answers: ["Frankreich", "Italien", "Japan"], correct: 0, explanation: "💡 Frankreich schränkte 2011 Ketchup in Schulkantinen ein, um die traditionelle französische Küche zu fördern." },
            { question: "Welches Tier kann bis zu 3 Jahre ohne Essen überleben?", answers: ["Kamel", "Krokodil", "Braunbär"], correct: 1, explanation: "💡 Krokodile haben einen extrem langsamen Stoffwechsel und können sehr lange hungern." },
            { question: "Welches Land hat kein einziges natürliches Fließgewässer (keinen Fluss)?", answers: ["Saudi-Arabien", "Ägypten", "Marokko"], correct: 0, explanation: "💡 Saudi-Arabien hat keine dauerhaften natürlichen Flüsse – nur zeitweise wasserführende Täler (Wadis)." },
            { question: "Wie viele Zeitzonen hat China – trotz seiner riesigen Fläche?", answers: ["1", "3", "5"], correct: 0, explanation: "💡 China nutzt landesweit nur eine einzige Zeitzone, obwohl es geografisch fünf umfassen würde." },
            { question: "Welche Frucht schwimmt im Wasser, weil sie zu etwa 25% aus Luft besteht?", answers: ["Apfel", "Birne", "Kiwi"], correct: 0, explanation: "💡 Äpfel bestehen zu rund einem Viertel aus Luft und schwimmen deshalb oben." },
            { question: "Welches Land verbraucht pro Kopf am meisten Schokolade?", answers: ["Schweiz", "Belgien", "Deutschland"], correct: 0, explanation: "💡 Die Schweiz liegt beim Pro-Kopf-Schokoladenkonsum regelmäßig weltweit an der Spitze." }
        ],
        allgemeinwissen_easy: [
            { question: "Wie viele Tage hat ein Schaltjahr?", answers: ["364", "365", "366"], correct: 2, explanation: "💡 Ein Schaltjahr hat einen zusätzlichen Tag (29. Februar) und damit 366 Tage." },
            { question: "Welche Farbe entsteht, wenn man Blau und Gelb mischt?", answers: ["Grün", "Lila", "Orange"], correct: 0, explanation: "💡 Blau und Gelb ergeben zusammen Grün." },
            { question: "Wie viele Kontinente kann man mit bloßem Auge auf einer Weltkarte grob zählen?", answers: ["5", "7", "9"], correct: 1, explanation: "💡 Klassisch werden 7 Kontinente unterschieden." },
            { question: "Welches Tier gilt als das schnellste Landtier der Welt?", answers: ["Löwe", "Gepard", "Pferd"], correct: 1, explanation: "💡 Der Gepard kann kurzzeitig über 100 km/h erreichen." },
            { question: "Wie viele Minuten hat eine Stunde?", answers: ["30", "60", "100"], correct: 1, explanation: "💡 Eine Stunde hat 60 Minuten." },
            { question: "Welches ist der größte Ozean der Welt?", answers: ["Atlantik", "Pazifik", "Indischer Ozean"], correct: 1, explanation: "💡 Der Pazifische Ozean ist der größte und tiefste Ozean der Erde." },
            { question: "Wie viele Beine hat eine Spinne?", answers: ["6", "8", "10"], correct: 1, explanation: "💡 Spinnen haben 8 Beine – das unterscheidet sie von Insekten mit 6 Beinen." },
            { question: "In welchem Land steht der Eiffelturm?", answers: ["Italien", "Frankreich", "Spanien"], correct: 1, explanation: "💡 Der Eiffelturm steht in Paris, Frankreich." },
            { question: "Welcher Planet wird auch 'der rote Planet' genannt?", answers: ["Venus", "Mars", "Jupiter"], correct: 1, explanation: "💡 Mars wirkt durch das eisenhaltige Gestein rötlich – daher der Spitzname." },
            { question: "Wie viele Farben hat ein klassischer Regenbogen?", answers: ["5", "7", "9"], correct: 1, explanation: "💡 Ein klassischer Regenbogen zeigt 7 Farben: Rot, Orange, Gelb, Grün, Blau, Indigo, Violett." },
            { question: "Wie viele Monate hat ein Jahr?", answers: ["10", "12", "14"], correct: 1, explanation: "💡 Ein Jahr hat 12 Monate." },
            { question: "Welches Tier wird auch 'König der Tiere' genannt?", answers: ["Tiger", "Löwe", "Bär"], correct: 1, explanation: "💡 Der Löwe gilt traditionell als 'König der Tiere'." },
            { question: "Was ist die Hauptstadt von Deutschland?", answers: ["München", "Berlin", "Hamburg"], correct: 1, explanation: "💡 Berlin ist seit 1990 wieder Hauptstadt Deutschlands." },
            { question: "Wie viele Sekunden hat eine Minute?", answers: ["30", "60", "100"], correct: 1, explanation: "💡 Eine Minute hat 60 Sekunden." },
            { question: "Welche Farbe entsteht, wenn man Rot und Weiß mischt?", answers: ["Rosa", "Braun", "Grau"], correct: 0, explanation: "💡 Rot und Weiß ergeben Rosa." },
            { question: "Woraus besteht Wasser chemisch?", answers: ["Wasserstoff und Sauerstoff", "Nur Sauerstoff", "Stickstoff und Kohlenstoff"], correct: 0, explanation: "💡 Wasser (H₂O) besteht aus zwei Wasserstoffatomen und einem Sauerstoffatom." },
            { question: "Welches ist das größte Tier der Welt?", answers: ["Elefant", "Blauwal", "Giraffe"], correct: 1, explanation: "💡 Der Blauwal ist mit bis zu 30 Metern das größte Tier der Erde." },
            { question: "In welcher Himmelsrichtung geht die Sonne auf?", answers: ["Osten", "Westen", "Norden"], correct: 0, explanation: "💡 Die Sonne geht im Osten auf und im Westen unter." }
        ]
    },

    // 🔠 BEREICH 4: TOOLS & SYSTEMDATEN
    tools: {
        deutsches_woerterbuch: [
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
        ]
    }
};
