// ==========================================
// WISSEN & GRAMMATIK DATENBANK (Das große Quiz)
// ==========================================
const QUESTIONS_DATABASE = [
    // --- GRUNDSCHULE (Klasse 1 - 4) ---
    { category: "klasse_1_2", question: "Mathe: Was ist 25 + 14?", answers: ["35", "38", "39"], correct: 2, explanation: "💡 20+10=30, 5+4=9. Ergibt 39!" },
    { category: "klasse_1_2", question: "Mathe: Was ist 8 mal 4?", answers: ["32", "24", "36"], correct: 0, explanation: "💡 Das kleine Einmaleins: 8, 16, 24, 32!" },
    { category: "klasse_1_2", question: "Deutsch: Welches Wort ist hier richtig großgeschrieben?", answers: ["hund", "Hund", "HUnD"], correct: 1, explanation: "💡 Regel: Menschen, Dinge und Tiere (Nomen) schreibt man immer groß!" },
    { category: "klasse_3_4", question: "Deutsch: Welches dieser Wörter ist ein Tuwort (Verb)?", answers: ["Schön", "Laufen", "Auto"], correct: 1, explanation: "💡 Verben beschreiben, was man tut (laufen, springen, spielen)." },
    { category: "klasse_3_4", question: "Sachkunde: In welche Richtung zeigt die Nadel eines Kompasses immer?", answers: ["Süden", "Westen", "Norden"], correct: 2, explanation: "💡 Die Magnetnadel richtet sich immer nach dem magnetischen Nordpol der Erde aus." },
    { category: "klasse_1_2", question: "Mathe: Was ist 10 minus 3?", answers: ["6", "7", "8"], correct: 1, explanation: "💡 Wenn man von 10 drei wegnimmt, bleiben 7 übrig." },
    { category: "klasse_1_2", question: "Deutsch: Wie viele Silben hat das Wort 'Son-ne'?", answers: ["Eine", "Zwei", "Drei"], correct: 1, explanation: "💡 Son-ne wird in zwei Teile (Silben) geklatscht: Son und ne." },
    { category: "klasse_1_2", question: "Sachkunde: Welches Tier legt Eier und kann fliegen?", answers: ["Hund", "Vogel", "Katze"], correct: 1, explanation: "💡 Vögel legen Eier und die meisten von ihnen können fliegen." },
    { category: "klasse_1_2", question: "Mathe: Was ist die Hälfte von 10?", answers: ["4", "5", "6"], correct: 1, explanation: "💡 10 geteilt durch 2 ergibt 5." },
    { category: "klasse_3_4", question: "Mathe: Was ist 6 mal 7?", answers: ["42", "36", "48"], correct: 0, explanation: "💡 Einmaleins: 6, 12, 18, 24, 30, 36, 42!" },
    { category: "klasse_3_4", question: "Mathe: Wie viele Ecken hat ein Rechteck?", answers: ["3", "4", "5"], correct: 1, explanation: "💡 Ein Rechteck hat immer vier Ecken und vier Seiten." },
    { category: "klasse_3_4", question: "Deutsch: Was ist das Gegenteil von 'groß'?", answers: ["klein", "schnell", "laut"], correct: 0, explanation: "💡 'klein' ist das Gegenteil (Antonym) von 'groß'." },
    { category: "klasse_3_4", question: "Sachkunde: Wie nennt man den Übergang von Wasser zu Wasserdampf?", answers: ["Schmelzen", "Verdunsten", "Gefrieren"], correct: 1, explanation: "💡 Wenn Wasser erhitzt wird und zu Dampf wird, nennt man das Verdunsten (Verdampfen)." },
    { category: "klasse_1_2", question: "Mathe: Was ist 7 + 8?", answers: ["14", "15", "16"], correct: 1, explanation: "💡 7 + 8 = 15. Tipp: 7+7=14, plus 1 macht 15!" },
    { category: "klasse_1_2", question: "Deutsch: Welches Wort reimt sich auf 'Maus'?", answers: ["Haus", "Tisch", "Ball"], correct: 0, explanation: "💡 'Maus' und 'Haus' klingen am Ende gleich – das ist ein Reim." },
    { category: "klasse_1_2", question: "Sachkunde: Welche Jahreszeit kommt nach dem Winter?", answers: ["Sommer", "Frühling", "Herbst"], correct: 1, explanation: "💡 Die Reihenfolge ist: Frühling, Sommer, Herbst, Winter." },
    { category: "klasse_3_4", question: "Mathe: Was ist 100 geteilt durch 4?", answers: ["20", "25", "30"], correct: 1, explanation: "💡 100 : 4 = 25, denn 4 × 25 = 100." },
    { category: "klasse_3_4", question: "Deutsch: Wie lautet die Mehrzahl (Plural) von 'Kind'?", answers: ["Kinde", "Kinder", "Kindern"], correct: 1, explanation: "💡 Die Mehrzahl von 'Kind' ist 'Kinder'." },
    { category: "klasse_3_4", question: "Sachkunde: Welches Organ pumpt das Blut durch den Körper?", answers: ["Lunge", "Herz", "Magen"], correct: 1, explanation: "💡 Das Herz ist ein Muskel, der das Blut durch die Adern pumpt." },

    // --- UNTERSTUFE (Klasse 5 - 6) ---
    { category: "klasse_5_6", question: "Englisch: He ___ to school every day.", answers: ["go", "goes", "going"], correct: 1, explanation: "💡 Simple Present: Bei 'he, she, it' muss das 's' mit! (He goes)" },
    { category: "klasse_5_6", question: "Englisch: Look! The dog ___ in the garden.", answers: ["plays", "is playing", "play"], correct: 1, explanation: "💡 Present Progressive: Signalwort 'Look!'. Es passiert genau jetzt." },
    { category: "klasse_5_6", question: "Englisch: I ___ not like apples.", answers: ["does", "am", "do"], correct: 2, explanation: "💡 Simple Present Verneinung: I do not (don't) like." },
    { category: "klasse_5_6", question: "Biologie: Was benötigen Pflanzen, um Sauerstoff zu produzieren (Fotosynthese)?", answers: ["Nur Wasser", "Sonnenlicht, Wasser und CO2", "Erde und Dünger"], correct: 1, explanation: "💡 Pflanzen machen aus Sonnenlicht, Wasser und Kohlendioxid (CO2) Sauerstoff." },
    { category: "klasse_5_6", question: "Englisch: There ___ two cats in the garden.", answers: ["is", "are", "be"], correct: 1, explanation: "💡 'There are' benutzt man bei mehreren Dingen (Plural: two cats)." },
    { category: "klasse_5_6", question: "Englisch: This is my dog. ___ name is Rex.", answers: ["His", "Her", "Its"], correct: 2, explanation: "💡 Für Tiere und Dinge benutzt man 'its' (nicht 'it's', das heißt 'es ist')." },
    { category: "klasse_5_6", question: "Mathe: Was ist ein Zehntel als Bruch?", answers: ["1/100", "1/10", "10/1"], correct: 1, explanation: "💡 Ein Zehntel schreibt man als 1/10." },
    { category: "klasse_5_6", question: "Geografie: Wie heißt der längste Fluss Deutschlands?", answers: ["Donau", "Elbe", "Rhein"], correct: 2, explanation: "💡 Der Rhein ist mit rund 865 km auf deutschem Gebiet der längste Fluss Deutschlands." },
    { category: "klasse_5_6", question: "Biologie: Wie viele Beine hat ein Insekt?", answers: ["4", "6", "8"], correct: 1, explanation: "💡 Insekten haben immer genau sechs Beine, das unterscheidet sie z.B. von Spinnen (8 Beine)." },
    { category: "klasse_5_6", question: "Englisch: My birthday is ___ May.", answers: ["at", "on", "in"], correct: 2, explanation: "💡 Bei Monaten benutzt man immer 'in' (in May, in June)." },
    { category: "klasse_5_6", question: "Mathe: Wie viele Grad hat ein rechter Winkel?", answers: ["45°", "90°", "180°"], correct: 1, explanation: "💡 Ein rechter Winkel hat genau 90°, erkennbar am kleinen Quadrat in der Ecke." },
    { category: "klasse_5_6", question: "Englisch: We ___ football every Saturday.", answers: ["plays", "play", "playing"], correct: 1, explanation: "💡 Simple Present: Bei 'we' gibt es kein 's' am Verb (we play)." },
    { category: "klasse_5_6", question: "Geografie: Wie heißt der höchste Berg Deutschlands?", answers: ["Watzmann", "Zugspitze", "Brocken"], correct: 1, explanation: "💡 Die Zugspitze ist mit 2.962 m der höchste Berg Deutschlands." },
    { category: "klasse_5_6", question: "Mathe: Was ist 3/4 als Dezimalzahl?", answers: ["0,34", "0,75", "0,43"], correct: 1, explanation: "💡 3 geteilt durch 4 ergibt 0,75." },
    { category: "klasse_5_6", question: "Englisch: Can you ___ me the salt, please?", answers: ["pass", "passes", "passing"], correct: 0, explanation: "💡 Nach 'can' folgt immer die Grundform des Verbs (pass, nicht passes)." },
    { category: "klasse_5_6", question: "Biologie: Wozu dienen die Wurzeln einer Pflanze?", answers: ["Nur zur Deko", "Aufnahme von Wasser und Nährstoffen", "Fotosynthese"], correct: 1, explanation: "💡 Wurzeln verankern die Pflanze im Boden und nehmen Wasser sowie Nährstoffe auf." },

    // --- MITTELSTUFE (Klasse 7 - 8) ---
    { category: "klasse_7_8", question: "Englisch: Yesterday, I ___ a great movie.", answers: ["see", "saw", "have seen"], correct: 1, explanation: "💡 Simple Past: Signalwort 'Yesterday' verlangt die 2. Form (saw)." },
    { category: "klasse_7_8", question: "Englisch: I ___ to London three times in my life.", answers: ["went", "have been", "am"], correct: 1, explanation: "💡 Present Perfect: Es geht um Erfahrungen bis heute ('in my life')." },
    { category: "klasse_7_8", question: "Englisch: She runs ___ than her brother.", answers: ["faster", "fastest", "more fast"], correct: 0, explanation: "💡 Steigerung (Adjektiv): fast -> faster -> fastest. Hier Vergleich (faster than)." },
    { category: "klasse_7_8", question: "Physik: Welche Einheit wird für elektrische Spannung verwendet?", answers: ["Ampere", "Watt", "Volt"], correct: 2, explanation: "💡 Die Spannung wird in Volt (V) gemessen. Stromstärke in Ampere (A)." },
    { category: "klasse_7_8", question: "Englisch: By next year, I ___ my exams.", answers: ["will finish", "will have finished", "finish"], correct: 1, explanation: "💡 Future Perfect: 'will have' + 3. Form, für etwas, das bis zu einem Zeitpunkt abgeschlossen ist." },
    { category: "klasse_7_8", question: "Englisch: This is the book ___ I told you about.", answers: ["who", "which", "whose"], correct: 1, explanation: "💡 Für Sachen benutzt man 'which' oder 'that' als Relativpronomen." },
    { category: "klasse_7_8", question: "Chemie: Wie lautet das chemische Symbol für Sauerstoff?", answers: ["O", "S", "Ox"], correct: 0, explanation: "💡 Sauerstoff heißt auf Englisch/Latein 'oxygenium', daher das Symbol O." },
    { category: "klasse_7_8", question: "Mathe: Wie berechnet man die Fläche eines Kreises?", answers: ["π × r", "π × r²", "2 × π × r"], correct: 1, explanation: "💡 Die Kreisfläche berechnet man mit π mal Radius zum Quadrat (π × r²)." },
    { category: "klasse_7_8", question: "Geschichte: In welchem Jahr endete der Zweite Weltkrieg?", answers: ["1939", "1945", "1950"], correct: 1, explanation: "💡 Der Zweite Weltkrieg endete 1945 mit der Kapitulation Deutschlands und Japans." },
    { category: "klasse_7_8", question: "Englisch: I wish I ___ more time.", answers: ["have", "had", "will have"], correct: 1, explanation: "💡 Nach 'I wish' benutzt man für die Gegenwart das Simple Past (unrealer Wunsch)." },
    { category: "klasse_7_8", question: "Physik: Was beschreibt das Ohmsche Gesetz?", answers: ["U = R / I", "U = I × R", "I = U × R"], correct: 1, explanation: "💡 Ohmsches Gesetz: Spannung = Stromstärke × Widerstand (U = I × R)." },
    { category: "klasse_7_8", question: "Mathe: Was ist der Satz des Pythagoras?", answers: ["a + b = c", "a² + b² = c²", "a × b = c²"], correct: 1, explanation: "💡 Im rechtwinkligen Dreieck gilt: a² + b² = c² (c ist die Hypotenuse)." },
    { category: "klasse_7_8", question: "Englisch: I have ___ finished my homework.", answers: ["already", "yet", "just now"], correct: 0, explanation: "💡 'already' steht typischerweise im Present Perfect für 'schon'." },
    { category: "klasse_7_8", question: "Chemie: Was ist der pH-Wert 7?", answers: ["Sauer", "Neutral", "Basisch"], correct: 1, explanation: "💡 pH 7 ist neutral, darunter sauer, darüber basisch (alkalisch)." },
    { category: "klasse_7_8", question: "Geschichte: Wer war Otto von Bismarck?", answers: ["Ein Komponist", "Der erste Reichskanzler Deutschlands", "Ein Erfinder"], correct: 1, explanation: "💡 Bismarck war maßgeblich an der Reichsgründung 1871 beteiligt und wurde erster Reichskanzler." },
    { category: "klasse_7_8", question: "Englisch: They ___ been living here for ten years.", answers: ["has", "have", "had"], correct: 1, explanation: "💡 Present Perfect mit 'they' (Plural): have been living." },

    // --- OBERSTUFE (Klasse 9 - 11) ---
    { category: "klasse_9_11", question: "Englisch: If I had a million dollars, I ___ a big house.", answers: ["will buy", "would buy", "bought"], correct: 1, explanation: "💡 If-Clause Typ 2 (unwahrscheinlich): If + Simple Past, im Hauptsatz 'would' + Verb." },
    { category: "klasse_9_11", question: "Englisch: The car ___ repaired tomorrow.", answers: ["is repaired", "was repaired", "will be repaired"], correct: 2, explanation: "💡 Passiv in der Zukunft: will + be + Partizip Perfekt (3. Form)." },
    { category: "klasse_9_11", question: "Englisch: She said that she ___ tired.", answers: ["is", "was", "has been"], correct: 1, explanation: "💡 Reported Speech (Indirekte Rede): Wenn der Einleitungssatz in der Vergangenheit steht ('said'), gibt es einen Backshift (is -> was)." },
    { category: "klasse_9_11", question: "Politik: Wer wählt in Deutschland direkt den Bundeskanzler?", answers: ["Das Volk", "Der Bundestag", "Der Bundespräsident"], correct: 1, explanation: "💡 Das Volk wählt den Bundestag, und die Abgeordneten des Bundestages wählen den Kanzler." },
    { category: "klasse_9_11", question: "Englisch: I would have helped you if I ___ about it.", answers: ["knew", "had known", "know"], correct: 1, explanation: "💡 If-Clause Typ 3 (unreale Vergangenheit): If + Past Perfect, im Hauptsatz 'would have' + 3. Form." },
    { category: "klasse_9_11", question: "Englisch: He suggested ___ to the cinema.", answers: ["to go", "going", "go"], correct: 1, explanation: "💡 Nach 'suggest' folgt immer die -ing Form (Gerundium)." },
    { category: "klasse_9_11", question: "Wirtschaft: Was versteht man unter 'Inflation'?", answers: ["Sinkende Preise", "Steigende Preise / Kaufkraftverlust", "Steigende Löhne"], correct: 1, explanation: "💡 Inflation bedeutet, dass das allgemeine Preisniveau steigt und Geld an Wert verliert." },
    { category: "klasse_9_11", question: "Politik: Wie viele Bundesländer hat Deutschland?", answers: ["14", "16", "18"], correct: 1, explanation: "💡 Deutschland besteht aus 16 Bundesländern." },
    { category: "klasse_9_11", question: "Englisch: Not only ___ late, but he also forgot his homework.", answers: ["he was", "was he", "he is"], correct: 1, explanation: "💡 Nach 'Not only' am Satzanfang folgt eine Inversion (was he statt he was)." },
    { category: "klasse_9_11", question: "Biologie: Was ist die Grundeinheit der Vererbung?", answers: ["Zelle", "Gen", "Protein"], correct: 1, explanation: "💡 Gene sind die Abschnitte der DNA, die Erbinformationen tragen." },
    { category: "klasse_9_11", question: "Englisch: The report ___ by the committee last week.", answers: ["was reviewed", "reviewed", "has reviewed"], correct: 0, explanation: "💡 Passiv Vergangenheit: was/were + 3. Form (was reviewed)." },
    { category: "klasse_9_11", question: "Philosophie: Wer prägte den Satz 'Ich denke, also bin ich'?", answers: ["Kant", "Descartes", "Nietzsche"], correct: 1, explanation: "💡 'Cogito ergo sum' stammt von René Descartes." },
    { category: "klasse_9_11", question: "Englisch: Hardly ___ arrived when the phone rang.", answers: ["I had", "had I", "I have"], correct: 1, explanation: "💡 Nach 'Hardly' am Satzanfang folgt eine Inversion: had I arrived." },
    { category: "klasse_9_11", question: "Wirtschaft: Was beschreibt das Gesetz von Angebot und Nachfrage?", answers: ["Der Staat legt Preise fest", "Preise entstehen durch das Verhältnis von Angebot und Nachfrage", "Preise sind immer konstant"], correct: 1, explanation: "💡 Steigt die Nachfrage bei gleichem Angebot, steigen meist die Preise – und umgekehrt." },
    { category: "klasse_9_11", question: "Englisch: It's high time we ___ a decision.", answers: ["make", "made", "will make"], correct: 1, explanation: "💡 Nach 'it's (high) time' folgt das Simple Past für einen unrealen Wunsch in der Gegenwart." },
    { category: "klasse_9_11", question: "Biologie: Was ist Mitose?", answers: ["Zellteilung zur Vermehrung", "Ein Zellorganell", "Ein Hormon"], correct: 0, explanation: "💡 Mitose ist die Zellteilung, bei der zwei genetisch identische Tochterzellen entstehen." },

    // --- KFZ-TECHNIK (Berufsschule) ---
    { category: "kfz", question: "Werkstatt: Was darfst du auf gar keinen Fall tun, während das Absteckwerkzeug beim Zahnriemenwechsel angebracht ist?", answers: ["Wasserpumpe lösen", "Motor durchdrehen", "Riemen abnehmen"], correct: 1, explanation: "💡 Wichtig: Ist die Arretierung dran, darf der Motor nicht mehr gedreht werden!" },
    { category: "kfz", question: "Elektrik: Welches Bauteil wandelt in der Lichtmaschine Wechselstrom in Gleichstrom um?", answers: ["Anlasser", "Zündspule", "Diodenplatte"], correct: 2, explanation: "💡 Die Dioden richten den erzeugten Wechselstrom in Gleichstrom für das Auto gleich." },
    { category: "kfz", question: "Fahrwerk: Was genau ist ein Domlager?", answers: ["Ein Teil des Turboladers", "Das Verbindungsstück zwischen Federbein und Karosserie", "Ein Radlager an der Hinterachse"], correct: 1, explanation: "💡 Das Domlager sitzt oben am Stoßdämpfer und verbindet das Fahrwerk mit der Karosserie." },
    { category: "kfz", question: "Getriebe: Welches Kürzel steht z.B. bei einem Opel 2.2 Motor für eine bestimmte Variante?", answers: ["ATC", "M32", "DSG"], correct: 0, explanation: "💡 Die exakte Bezeichnung der Variante ist ATC." },
    { category: "kfz", question: "Bremsanlage: Wofür steht die Abkürzung ABS?", answers: ["Anti-Blockier-System", "Automatik-Brems-Sensor", "Achsen-Balance-Steuerung"], correct: 0, explanation: "💡 ABS verhindert das Blockieren der Räder beim Bremsen, damit das Fahrzeug lenkbar bleibt." },
    { category: "kfz", question: "Motor: Was ist die Aufgabe des Turboladers?", answers: ["Kraftstoff einspritzen", "Die angesaugte Luft verdichten", "Öl kühlen"], correct: 1, explanation: "💡 Der Turbolader verdichtet die Ansaugluft, damit mehr Sauerstoff in den Zylinder gelangt und mehr Leistung entsteht." },
    { category: "kfz", question: "Elektrik: Wofür steht die Abkürzung OBD?", answers: ["On-Board-Diagnose", "Öl-Behälter-Druck", "Ohm-Bemessungs-Daten"], correct: 0, explanation: "💡 OBD (On-Board-Diagnose) überwacht abgasrelevante Systeme und speichert Fehlercodes." },
    { category: "kfz", question: "Fahrwerk: Was bewirkt ein Stoßdämpfer?", answers: ["Er dämpft die Schwingungen der Feder", "Er trägt das Fahrzeuggewicht allein", "Er lenkt die Räder"], correct: 0, explanation: "💡 Der Stoßdämpfer dämpft die Federbewegungen, damit das Auto nicht dauerhaft wippt." },
    { category: "kfz", question: "Motor: Wie viele Takte hat ein klassischer Ottomotor?", answers: ["2", "4", "6"], correct: 1, explanation: "💡 Ansaugen, Verdichten, Arbeiten, Ausstoßen – der klassische Viertaktmotor." },
    { category: "kfz", question: "Reifen: Was gibt die Zahl in '205/55 R16' an?", answers: ["Reifenbreite in mm, Höhe in % und Felgendurchmesser in Zoll", "Luftdruck und Gewicht", "Herstellungsjahr"], correct: 0, explanation: "💡 205 = Breite in mm, 55 = Querschnittsverhältnis in %, R16 = Felgendurchmesser in Zoll." },
    { category: "kfz", question: "Klimaanlage: Welches Kältemittel wird häufig in modernen Klimaanlagen verwendet?", answers: ["R134a bzw. R1234yf", "Frigen", "Stickstoff"], correct: 0, explanation: "💡 R134a war lange Standard, moderne Fahrzeuge nutzen zunehmend das umweltfreundlichere R1234yf." },
    { category: "kfz", question: "Motor: Was ist die Aufgabe der Lambdasonde?", answers: ["Sie misst den Restsauerstoff im Abgas", "Sie kühlt den Motor", "Sie erzeugt den Zündfunken"], correct: 0, explanation: "💡 Die Lambdasonde misst den Sauerstoffgehalt im Abgas, um das Kraftstoff-Luft-Gemisch zu regeln." },
    { category: "kfz", question: "Elektrik: Was zeigt ein Multimeter im Modus 'Durchgangsprüfung' an?", answers: ["Ob ein Stromkreis geschlossen ist", "Die Motordrehzahl", "Den Ölstand"], correct: 0, explanation: "💡 Die Durchgangsprüfung piept, wenn ein Stromkreis leitfähig (geschlossen) ist – nützlich zur Fehlersuche." },
    { category: "kfz", question: "Antriebsstrang: Was überträgt die Kraft vom Motor auf die Räder bei Frontantrieb typischerweise?", answers: ["Kardanwelle", "Antriebswelle (Gelenkwelle)", "Blattfeder"], correct: 1, explanation: "💡 Bei Frontantrieb übertragen Antriebs- bzw. Gelenkwellen die Kraft vom Getriebe auf die Vorderräder." },
    { category: "kfz", question: "Sicherheit: Wofür steht die Abkürzung ESP?", answers: ["Elektronisches Stabilitätsprogramm", "Extra Sicherheits-Paket", "Elektro-Servo-Pumpe"], correct: 0, explanation: "💡 ESP greift gezielt in die Bremsen ein, um das Fahrzeug bei drohendem Schleudern zu stabilisieren." },
    { category: "kfz", question: "Motor: Was passiert beim 'Verdichtungstakt' im Viertaktmotor?", answers: ["Das Gemisch wird angesaugt", "Das Gemisch wird komprimiert", "Die Abgase werden ausgestoßen"], correct: 1, explanation: "💡 Im zweiten Takt wird das angesaugte Luft-Kraftstoff-Gemisch vom Kolben verdichtet." },

    // --- ALLGEMEINWISSEN, SPORT & FILM ---
    { category: "allgemeinwissen", question: "Kino: Wer ist der Hauptdarsteller, der den Detective in der 'Crime City' Reihe spielt?", answers: ["Jackie Chan", "Don Lee", "Tony Jaa"], correct: 1, explanation: "💡 Don Lee (Ma Dong-seok) spielt den schlagkräftigen Detective." },
    { category: "allgemeinwissen", question: "Geschichte: Wer war Miyamoto Musashi?", answers: ["Ein berühmter japanischer Samurai", "Ein südkoreanischer Kampfkünstler", "Ein Charakter aus Star Wars"], correct: 0, explanation: "💡 Er war einer der legendärsten Samurai der Geschichte und kämpfte mit zwei Schwertern." },
    { category: "allgemeinwissen", question: "Sport: Wie lange dauert ein Fußballspiel bei einer F-Jugend in der Regel?", answers: ["2 x 45 Minuten", "2 x 20 Minuten", "3 x 15 Minuten"], correct: 1, explanation: "💡 Im Kleinfeldfußball bei den Jüngsten (z.B. F-Jugend) wird meist 2 x 20 Minuten gespielt." },
    { category: "allgemeinwissen", question: "Geografie: Wie heißt die Hauptstadt von Südkorea?", answers: ["Busan", "Seoul", "Incheon"], correct: 1, explanation: "💡 Seoul ist die Hauptstadt und größte Stadt Südkoreas." },
    { category: "allgemeinwissen", question: "Kino: In welchem Land wird ein Großteil der Martial-Arts-Filme mit Don Lee produziert?", answers: ["Japan", "Südkorea", "China"], correct: 1, explanation: "💡 Don Lee ist ein koreanisch-amerikanischer Schauspieler, viele seiner Filme entstehen in Südkorea." },
    { category: "allgemeinwissen", question: "Sport: Wie viele Spieler stehen bei einem regulären Fußballspiel pro Mannschaft auf dem Feld?", answers: ["9", "10", "11"], correct: 2, explanation: "💡 Jede Mannschaft stellt 11 Spieler, inklusive Torwart." },
    { category: "allgemeinwissen", question: "Geschichte: Wer war Alexander der Große?", answers: ["Ein römischer Kaiser", "Ein makedonischer König und Feldherr", "Ein ägyptischer Pharao"], correct: 1, explanation: "💡 Alexander der Große war König von Makedonien und eroberte eines der größten Reiche der Antike." },
    { category: "allgemeinwissen", question: "Kino: Welches Kampfkunst-Genre ist besonders für Filme aus Thailand bekannt (z.B. mit Tony Jaa)?", answers: ["Muay Thai", "Karate", "Judo"], correct: 0, explanation: "💡 Muay Thai (Thaiboxen) ist die traditionelle Kampfkunst Thailands und prägt viele Actionfilme des Landes." },
    { category: "allgemeinwissen", question: "Sport: Wie heißt die gelbe Karte im Fußball auch umgangssprachlich?", answers: ["Verwarnung", "Platzverweis", "Elfmeter"], correct: 0, explanation: "💡 Die gelbe Karte ist eine Verwarnung; erst die rote Karte führt zum Platzverweis." },
    { category: "allgemeinwissen", question: "Geschichte: In welchem Jahrhundert lebte der Samurai Miyamoto Musashi?", answers: ["12. Jahrhundert", "16./17. Jahrhundert", "20. Jahrhundert"], correct: 1, explanation: "💡 Musashi lebte von 1584 bis 1645, also im 16./17. Jahrhundert." },
    { category: "allgemeinwissen", question: "Sport: Wie heißt der Wettkampf, bei dem Schwimmen, Radfahren und Laufen kombiniert werden?", answers: ["Triathlon", "Biathlon", "Pentathlon"], correct: 0, explanation: "💡 Beim Triathlon werden diese drei Ausdauersportarten hintereinander absolviert." },
    { category: "allgemeinwissen", question: "Kino: Wie heißt der japanische Regisseur, der für Filme wie 'Die sieben Samurai' bekannt ist?", answers: ["Hayao Miyazaki", "Akira Kurosawa", "Takeshi Kitano"], correct: 1, explanation: "💡 Akira Kurosawa gilt als einer der einflussreichsten Regisseure Japans." },
    { category: "allgemeinwissen", question: "Geografie: Welcher Ozean ist der größte der Erde?", answers: ["Atlantik", "Pazifik", "Indischer Ozean"], correct: 1, explanation: "💡 Der Pazifische Ozean ist mit Abstand der größte und tiefste Ozean der Welt." },
    { category: "allgemeinwissen", question: "Sport: Wie viele Ringe hat das olympische Symbol?", answers: ["4", "5", "6"], correct: 1, explanation: "💡 Die fünf Ringe stehen für die fünf bewohnten Kontinente." },

    // --- FACH: MATHEMATIK (Sek I, nach Lehrplan) ---
    { category: "mathematik", question: "Bruchrechnung: Was ist 1/2 + 1/4?", answers: ["2/6", "3/4", "1/6"], correct: 1, explanation: "💡 Gleichnamig machen: 2/4 + 1/4 = 3/4." },
    { category: "mathematik", question: "Prozentrechnung: Wie viel sind 20% von 150?", answers: ["20", "30", "40"], correct: 1, explanation: "💡 150 × 0,20 = 30." },
    { category: "mathematik", question: "Gleichungen: Löse nach x auf: 3x + 5 = 20", answers: ["x = 5", "x = 8", "x = 3"], correct: 0, explanation: "💡 3x = 15, also x = 15 : 3 = 5." },
    { category: "mathematik", question: "Geometrie: Wie berechnet man den Umfang eines Rechtecks?", answers: ["a × b", "2 × (a + b)", "a² + b²"], correct: 1, explanation: "💡 Umfang = 2 × (Länge + Breite)." },
    { category: "mathematik", question: "Dreisatz: 3 Kilo Äpfel kosten 6€. Was kosten 5 Kilo?", answers: ["8€", "10€", "12€"], correct: 1, explanation: "💡 1 Kilo kostet 2€, also 5 Kilo = 10€." },
    { category: "mathematik", question: "Zinsrechnung: Was ist der Jahreszins bei 1000€ und 4% Zinssatz?", answers: ["4€", "40€", "400€"], correct: 1, explanation: "💡 1000 × 0,04 = 40€ Zinsen pro Jahr." },
    { category: "mathematik", question: "Potenzen: Was ist 2 hoch 5 (2⁵)?", answers: ["10", "16", "32"], correct: 2, explanation: "💡 2×2×2×2×2 = 32." },
    { category: "mathematik", question: "Statistik: Wie berechnet man den Mittelwert (Durchschnitt) von 2, 4 und 6?", answers: ["3", "4", "6"], correct: 1, explanation: "💡 (2+4+6) : 3 = 4." },
    { category: "mathematik", question: "Geometrie: Wie viele Seiten hat ein Hexagon (Sechseck)?", answers: ["5", "6", "7"], correct: 1, explanation: "💡 'Hexa' kommt aus dem Griechischen für sechs." },
    { category: "mathematik", question: "Algebra: Was ist die binomische Formel für (a+b)²?", answers: ["a² + b²", "a² + 2ab + b²", "a² - b²"], correct: 1, explanation: "💡 Erste binomische Formel: (a+b)² = a² + 2ab + b²." },

    // --- FACH: DEUTSCH (Sek I, Grammatik & Sprache) ---
    { category: "deutsch", question: "Grammatik: Welcher Fall (Kasus) antwortet auf die Frage 'Wem?'", answers: ["Nominativ", "Dativ", "Akkusativ"], correct: 1, explanation: "💡 Der Dativ ist der 3. Fall und antwortet auf 'Wem?'." },
    { category: "deutsch", question: "Satzglieder: Was ist das Prädikat in 'Der Hund bellt laut'?", answers: ["Der Hund", "bellt", "laut"], correct: 1, explanation: "💡 Das Prädikat ist das Verb im Satz – hier 'bellt'." },
    { category: "deutsch", question: "Zeichensetzung: Wann setzt man ein Komma vor 'und'?", answers: ["Nie", "Bei zwei Hauptsätzen (optional)", "Immer"], correct: 1, explanation: "💡 Vor 'und' zwischen zwei vollständigen Hauptsätzen kann man ein Komma setzen, muss aber nicht." },
    { category: "deutsch", question: "Wortarten: Was für eine Wortart ist 'schnell' in 'Er läuft schnell'?", answers: ["Adjektiv (hier als Adverb)", "Nomen", "Konjunktion"], correct: 0, explanation: "💡 'schnell' beschreibt hier das Verb näher, also adverbialer Gebrauch eines Adjektivs." },
    { category: "deutsch", question: "Textsorten: Was ist das Hauptmerkmal einer Inhaltsangabe?", answers: ["Eigene Meinung einbringen", "Sachlich und im Präsens zusammenfassen", "Wörtlich zitieren"], correct: 1, explanation: "💡 Eine Inhaltsangabe fasst sachlich, im Präsens und in eigenen Worten zusammen." },
    { category: "deutsch", question: "Rechtschreibung: Wie schreibt man 'dass' richtig in 'Ich weiß, ___ du kommst'?", answers: ["das", "dass", "daß"], correct: 1, explanation: "💡 Als Konjunktion (Bindewort) schreibt man 'dass' mit Doppel-s." },
    { category: "deutsch", question: "Grammatik: Welche Zeitform ist 'ich bin gegangen'?", answers: ["Präteritum", "Perfekt", "Futur I"], correct: 1, explanation: "💡 Perfekt bildet man mit 'haben/sein' + Partizip II (bin gegangen)." },
    { category: "deutsch", question: "Stilmittel: Wie heißt die Übertreibung als Stilmittel?", answers: ["Metapher", "Hyperbel", "Ironie"], correct: 1, explanation: "💡 Eine Hyperbel ist eine bewusste, starke Übertreibung ('Ich hab dir das schon tausendmal gesagt')." },
    { category: "deutsch", question: "Satzarten: Was ist ein Konjunktiv?", answers: ["Eine Zeitform", "Der Möglichkeitsform / Wunschform", "Ein Satzzeichen"], correct: 1, explanation: "💡 Der Konjunktiv drückt Wünsche, Möglichkeiten oder indirekte Rede aus (z.B. 'er sagte, er käme')." },
    { category: "deutsch", question: "Wortarten: Zu welcher Wortart gehört 'und', 'aber', 'weil'?", answers: ["Präposition", "Konjunktion", "Pronomen"], correct: 1, explanation: "💡 Konjunktionen verbinden Wörter oder Sätze miteinander." },

    // --- FACH: BIOLOGIE (Sek I) ---
    { category: "biologie", question: "Zellbiologie: Was ist die 'Kraftwerk der Zelle'?", answers: ["Zellkern", "Mitochondrium", "Ribosom"], correct: 1, explanation: "💡 Mitochondrien erzeugen Energie (ATP) für die Zelle." },
    { category: "biologie", question: "Ökologie: Was ist ein Ökosystem?", answers: ["Nur die Tiere eines Gebiets", "Lebewesen und ihre Umwelt im Zusammenspiel", "Ein künstlicher Garten"], correct: 1, explanation: "💡 Ein Ökosystem umfasst alle Lebewesen und ihre unbelebte Umwelt in einem Gebiet, die zusammenwirken." },
    { category: "biologie", question: "Verdauung: Wo beginnt die Verdauung von Stärke bereits?", answers: ["Im Magen", "Im Mund (durch Speichel)", "Im Dünndarm"], correct: 1, explanation: "💡 Speichelenzyme (Amylase) beginnen schon im Mund mit dem Stärkeabbau." },
    { category: "biologie", question: "Genetik: Wie viele Chromosomen hat eine menschliche Körperzelle normalerweise?", answers: ["23", "46", "48"], correct: 1, explanation: "💡 Der Mensch hat 46 Chromosomen (23 Paare)." },
    { category: "biologie", question: "Evolution: Wer entwickelte die Theorie der natürlichen Selektion?", answers: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur"], correct: 1, explanation: "💡 Charles Darwin veröffentlichte 1859 'Die Entstehung der Arten'." },
    { category: "biologie", question: "Ökologie: Was versteht man unter einer Nahrungskette?", answers: ["Eine Reihenfolge, wer wen frisst", "Eine Art zu kochen", "Ein Verdauungsorgan"], correct: 0, explanation: "💡 Die Nahrungskette zeigt, wie Energie von Produzenten über Konsumenten weitergegeben wird." },
    { category: "biologie", question: "Anatomie: Welches Organ produziert Insulin?", answers: ["Leber", "Bauchspeicheldrüse", "Niere"], correct: 1, explanation: "💡 Die Bauchspeicheldrüse (Pankreas) produziert Insulin zur Regulierung des Blutzuckers." },
    { category: "biologie", question: "Genetik: Was ist ein dominantes Gen?", answers: ["Ein Gen, das sich immer durchsetzt, wenn vorhanden", "Ein fehlerhaftes Gen", "Ein Gen, das nie sichtbar wird"], correct: 0, explanation: "💡 Ein dominantes Allel setzt sich gegenüber einem rezessiven durch." },
    { category: "biologie", question: "Botanik: Wie nennt man die Bestäubung durch Insekten?", answers: ["Zoogamie", "Entomophilie", "Anemophilie"], correct: 1, explanation: "💡 Entomophilie bezeichnet die Bestäubung von Pflanzen durch Insekten." },
    { category: "biologie", question: "Immunsystem: Welche Blutzellen bekämpfen hauptsächlich Krankheitserreger?", answers: ["Rote Blutkörperchen", "Weiße Blutkörperchen (Leukozyten)", "Blutplättchen"], correct: 1, explanation: "💡 Weiße Blutkörperchen sind Teil des Immunsystems und bekämpfen Erreger." },

    // --- FACH: CHEMIE (Sek I) ---
    { category: "chemie", question: "Periodensystem: Wie viele Elektronen hat ein neutrales Wasserstoffatom?", answers: ["1", "2", "0"], correct: 0, explanation: "💡 Wasserstoff hat die Ordnungszahl 1 und damit 1 Proton und 1 Elektron." },
    { category: "chemie", question: "Reaktionen: Wie nennt man eine Reaktion mit Sauerstoff, die Wärme freisetzt?", answers: ["Reduktion", "Verbrennung (Oxidation)", "Neutralisation"], correct: 1, explanation: "💡 Eine Verbrennung ist eine exotherme Oxidation mit Sauerstoff." },
    { category: "chemie", question: "Säuren & Basen: Was entsteht bei der Neutralisation einer Säure mit einer Base?", answers: ["Nur Wasser", "Salz und Wasser", "Ein Gas"], correct: 1, explanation: "💡 Säure + Base → Salz + Wasser (Neutralisationsreaktion)." },
    { category: "chemie", question: "Atommodell: Woraus besteht der Atomkern?", answers: ["Protonen und Neutronen", "Nur Elektronen", "Nur Protonen"], correct: 0, explanation: "💡 Der Atomkern besteht aus positiv geladenen Protonen und neutralen Neutronen." },
    { category: "chemie", question: "Periodensystem: Welches Element hat das Symbol 'Fe'?", answers: ["Fluor", "Eisen", "Phosphor"], correct: 1, explanation: "💡 'Fe' kommt vom lateinischen Wort 'ferrum' für Eisen." },
    { category: "chemie", question: "Stoffe: Was ist der Unterschied zwischen einem Gemisch und einer Verbindung?", answers: ["Kein Unterschied", "Ein Gemisch kann man physikalisch trennen, eine Verbindung nicht", "Verbindungen sind immer flüssig"], correct: 1, explanation: "💡 Gemische lassen sich z.B. durch Filtern trennen, chemische Verbindungen nur durch chemische Reaktionen." },
    { category: "chemie", question: "pH-Wert: Welcher pH-Wert-Bereich gilt als sauer?", answers: ["0-6", "7", "8-14"], correct: 0, explanation: "💡 Werte unter 7 sind sauer, 7 ist neutral, darüber basisch." },
    { category: "chemie", question: "Periodensystem: In welcher Gruppe stehen die Edelgase?", answers: ["Gruppe 1", "Gruppe 17", "Gruppe 18"], correct: 2, explanation: "💡 Edelgase wie Helium und Neon stehen in Gruppe 18 (ganz rechts)." },
    { category: "chemie", question: "Reaktionen: Was ist ein Katalysator?", answers: ["Ein Stoff, der die Reaktion beschleunigt, ohne verbraucht zu werden", "Ein Endprodukt", "Ein Messgerät"], correct: 0, explanation: "💡 Katalysatoren senken die Aktivierungsenergie, ohne selbst verbraucht zu werden." },
    { category: "chemie", question: "Aggregatzustände: Wie nennt man den Übergang von fest direkt zu gasförmig?", answers: ["Kondensation", "Sublimation", "Schmelzen"], correct: 1, explanation: "💡 Sublimation ist der direkte Übergang von fest zu gasförmig, z.B. bei Trockeneis." },

    // --- FACH: PHYSIK (Sek I) ---
    { category: "physik", question: "Mechanik: Welche Einheit hat die Kraft?", answers: ["Joule", "Newton", "Watt"], correct: 1, explanation: "💡 Kraft wird in Newton (N) gemessen." },
    { category: "physik", question: "Energie: Was besagt der Energieerhaltungssatz?", answers: ["Energie kann erzeugt werden", "Energie kann nicht erzeugt oder vernichtet, nur umgewandelt werden", "Energie verschwindet mit der Zeit"], correct: 1, explanation: "💡 Energie bleibt in einem geschlossenen System immer konstant, wird nur umgewandelt." },
    { category: "physik", question: "Elektrizität: Welche Formel beschreibt die elektrische Leistung?", answers: ["P = U × I", "P = U / I", "P = U + I"], correct: 0, explanation: "💡 Leistung = Spannung × Stromstärke (P = U × I)." },
    { category: "physik", question: "Optik: Wie nennt man das Brechen von Licht beim Übergang in ein anderes Medium?", answers: ["Reflexion", "Refraktion (Brechung)", "Absorption"], correct: 1, explanation: "💡 Licht wird gebrochen, wenn es z.B. von Luft ins Wasser übergeht." },
    { category: "physik", question: "Mechanik: Was besagt das erste Newtonsche Gesetz (Trägheitsgesetz)?", answers: ["Kraft = Masse × Beschleunigung", "Ein Körper bleibt in Ruhe oder Bewegung, solange keine Kraft wirkt", "Actio = Reactio"], correct: 1, explanation: "💡 Ohne äußere Kraft bleibt ein Körper in seinem Bewegungszustand (Trägheit)." },
    { category: "physik", question: "Wärmelehre: Bei welcher Temperatur gefriert Wasser (bei Normaldruck)?", answers: ["0°C", "10°C", "-10°C"], correct: 0, explanation: "💡 Wasser gefriert bei 0°C und siedet bei 100°C (bei Normaldruck)." },
    { category: "physik", question: "Elektrizität: Was passiert mit dem Gesamtwiderstand bei einer Reihenschaltung?", answers: ["Er wird kleiner", "Die Widerstände addieren sich", "Er bleibt gleich"], correct: 1, explanation: "💡 In der Reihenschaltung addieren sich die Einzelwiderstände zum Gesamtwiderstand." },
    { category: "physik", question: "Mechanik: Was ist die Einheit der Arbeit/Energie?", answers: ["Newton", "Joule", "Volt"], correct: 1, explanation: "💡 Arbeit und Energie werden in Joule (J) gemessen." },
    { category: "physik", question: "Akustik: Wovon hängt die Tonhöhe eines Schalls ab?", answers: ["Von der Lautstärke", "Von der Frequenz", "Von der Temperatur"], correct: 1, explanation: "💡 Je höher die Frequenz (Hz), desto höher klingt der Ton." },
    { category: "physik", question: "Optik: Wie nennt man eine Linse, die Licht bündelt?", answers: ["Konkavlinse (Zerstreuungslinse)", "Konvexlinse (Sammellinse)", "Prisma"], correct: 1, explanation: "💡 Eine Konvexlinse (Sammellinse) bündelt einfallendes Licht in einem Brennpunkt." },

    // --- FACH: GESCHICHTE, ERDKUNDE & POLITIK (Sek I) ---
    { category: "gesellschaft", question: "Geschichte: Wann begann die Französische Revolution?", answers: ["1789", "1815", "1848"], correct: 0, explanation: "💡 Die Französische Revolution begann 1789 mit dem Sturm auf die Bastille." },
    { category: "gesellschaft", question: "Erdkunde: Wie viele Kontinente gibt es üblicherweise (klassisches Modell)?", answers: ["5", "6", "7"], correct: 2, explanation: "💡 Klassisch werden 7 Kontinente unterschieden: Afrika, Antarktika, Asien, Australien, Europa, Nordamerika, Südamerika." },
    { category: "gesellschaft", question: "Politik: Was bedeutet 'Gewaltenteilung'?", answers: ["Trennung von Legislative, Exekutive und Judikative", "Aufteilung des Militärs", "Verteilung von Steuern"], correct: 0, explanation: "💡 Die Gewaltenteilung verhindert, dass eine Institution zu viel Macht hat (Gesetzgebung, Ausführung, Rechtsprechung)." },
    { category: "gesellschaft", question: "Geschichte: Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?", answers: ["Willy Brandt", "Konrad Adenauer", "Helmut Kohl"], correct: 1, explanation: "💡 Konrad Adenauer war von 1949 bis 1963 Bundeskanzler." },
    { category: "gesellschaft", question: "Erdkunde: Welche Klimazone liegt am Äquator?", answers: ["Polarzone", "Tropen", "Gemäßigte Zone"], correct: 1, explanation: "💡 Am Äquator herrscht das tropische Klima mit hohen Temperaturen und viel Niederschlag." },
    { category: "gesellschaft", question: "Politik: Was ist der Unterschied zwischen einer Monarchie und einer Republik?", answers: ["Kein Unterschied", "In einer Monarchie herrscht ein Erbmonarch, in einer Republik wird das Staatsoberhaupt gewählt", "Republiken haben keine Regierung"], correct: 1, explanation: "💡 In Monarchien wird die Macht meist vererbt, in Republiken durch Wahlen legitimiert." },
    { category: "gesellschaft", question: "Geschichte: In welchem Jahr fiel die Berliner Mauer?", answers: ["1985", "1989", "1991"], correct: 1, explanation: "💡 Die Berliner Mauer fiel am 9. November 1989." },
    { category: "gesellschaft", question: "Erdkunde: Was versteht man unter 'Urbanisierung'?", answers: ["Landflucht in ländliche Gebiete", "Wachstum von Städten durch Zuzug", "Bau von Straßen"], correct: 1, explanation: "💡 Urbanisierung bezeichnet das Wachstum und die Ausbreitung von Städten." },
    { category: "gesellschaft", question: "Politik: Wie nennt man ein Wahlsystem, bei dem Sitze proportional zu Stimmenanteilen vergeben werden?", answers: ["Mehrheitswahlrecht", "Verhältniswahlrecht", "Zensuswahlrecht"], correct: 1, explanation: "💡 Beim Verhältniswahlrecht (wie in Deutschland) entspricht der Sitzanteil ungefähr dem Stimmenanteil." },
    { category: "gesellschaft", question: "Geschichte: Wer war römischer Kaiser zur Zeitenwende (um Christi Geburt)?", answers: ["Julius Caesar", "Augustus", "Nero"], correct: 1, explanation: "💡 Augustus war der erste römische Kaiser und regierte von 27 v. Chr. bis 14 n. Chr." }
];

// ==========================================
// VOKABEL DATENBANK (Klasse 1 bis 11 & KFZ)
// ==========================================
const VOCABULARY_DATABASE = {
    en: {
        klasse_1_2: { 
            label: "🧸 Klasse 1-2 (Farben, Tiere, Zahlen)", 
            words: [
                {de:"Eins",foreign:"one"}, {de:"Zwei",foreign:"two"}, {de:"Drei",foreign:"three"}, {de:"Vier",foreign:"four"}, {de:"Fünf",foreign:"five"}, 
                {de:"Rot",foreign:"red"}, {de:"Blau",foreign:"blue"}, {de:"Grün",foreign:"green"}, {de:"Gelb",foreign:"yellow"}, {de:"Schwarz",foreign:"black"},
                {de:"Hund",foreign:"dog"}, {de:"Katze",foreign:"cat"}, {de:"Maus",foreign:"mouse"}, {de:"Vogel",foreign:"bird"}, {de:"Fisch",foreign:"fish"},
                {de:"Apfel",foreign:"apple"}, {de:"Banane",foreign:"banana"}, {de:"Brot",foreign:"bread"}, {de:"Wasser",foreign:"water"}, {de:"Milch",foreign:"milk"},
                {de:"Sechs",foreign:"six"}, {de:"Sieben",foreign:"seven"}, {de:"Acht",foreign:"eight"}, {de:"Neun",foreign:"nine"}, {de:"Zehn",foreign:"ten"},
                {de:"Weiß",foreign:"white"}, {de:"Orange",foreign:"orange"}, {de:"Rosa",foreign:"pink"}, {de:"Braun",foreign:"brown"}, {de:"Lila",foreign:"purple"},
                {de:"Pferd",foreign:"horse"}, {de:"Kuh",foreign:"cow"}, {de:"Schwein",foreign:"pig"}, {de:"Schaf",foreign:"sheep"}, {de:"Ente",foreign:"duck"},
                {de:"Ball",foreign:"ball"}, {de:"Puppe",foreign:"doll"}, {de:"Sonne",foreign:"sun"}, {de:"Mond",foreign:"moon"}, {de:"Stern",foreign:"star"}
            ] 
        },
        klasse_3_4: { 
            label: "🎒 Klasse 3-4 (Schule, Haus, Familie)", 
            words: [
                {de:"Tisch",foreign:"desk"}, {de:"Stuhl",foreign:"chair"}, {de:"Buch",foreign:"book"}, {de:"Stift",foreign:"pen"}, {de:"Schule",foreign:"school"},
                {de:"Lehrer",foreign:"teacher"}, {de:"spielen",foreign:"play"}, {de:"lernen",foreign:"learn"}, {de:"lesen",foreign:"read"}, {de:"schreiben",foreign:"write"},
                {de:"Hallo",foreign:"hello"}, {de:"Tschüss",foreign:"goodbye"}, {de:"Danke",foreign:"thank you"}, {de:"Bitte",foreign:"please"}, 
                {de:"Mutter",foreign:"mother"}, {de:"Vater",foreign:"father"}, {de:"Bruder",foreign:"brother"}, {de:"Schwester",foreign:"sister"}, {de:"Haus",foreign:"house"}, {de:"Garten",foreign:"garden"},
                {de:"Küche",foreign:"kitchen"}, {de:"Schlafzimmer",foreign:"bedroom"}, {de:"Badezimmer",foreign:"bathroom"}, {de:"Fenster",foreign:"window"}, {de:"Tür",foreign:"door"},
                {de:"Tafel",foreign:"blackboard"}, {de:"Radiergummi",foreign:"eraser"}, {de:"Lineal",foreign:"ruler"}, {de:"Rucksack",foreign:"backpack"}, {de:"Pause",foreign:"break"},
                {de:"Montag",foreign:"Monday"}, {de:"Dienstag",foreign:"Tuesday"}, {de:"Mittwoch",foreign:"Wednesday"}, {de:"Freitag",foreign:"Friday"}, {de:"Sonntag",foreign:"Sunday"}
            ] 
        },
        klasse_5_6: { 
            label: "⚽ Klasse 5-6 (Hobbys, Zeit, Körper)", 
            words: [
                {de:"Fußball",foreign:"football"}, {de:"Schwimmen",foreign:"swimming"}, {de:"Singen",foreign:"singing"}, {de:"Kino",foreign:"cinema"}, {de:"Freundschaft",foreign:"friendship"},
                {de:"Kopf",foreign:"head"}, {de:"Auge",foreign:"eye"}, {de:"Ohr",foreign:"ear"}, {de:"Hand",foreign:"hand"}, {de:"Fuß",foreign:"foot"},
                {de:"Morgen",foreign:"morning"}, {de:"Abend",foreign:"evening"}, {de:"Uhr",foreign:"clock"}, {de:"Stunde",foreign:"hour"}, {de:"Woche",foreign:"week"},
                {de:"lustig",foreign:"funny"}, {de:"spannend",foreign:"exciting"}, {de:"langweilig",foreign:"boring"}, {de:"Wochenende",foreign:"weekend"}, {de:"Ferien",foreign:"holidays"},
                {de:"Bauch",foreign:"stomach"}, {de:"Bein",foreign:"leg"}, {de:"Arm",foreign:"arm"}, {de:"Nase",foreign:"nose"}, {de:"Mund",foreign:"mouth"},
                {de:"Basketball",foreign:"basketball"}, {de:"Tanzen",foreign:"dancing"}, {de:"Malen",foreign:"painting"}, {de:"Musik hören",foreign:"listening to music"}, {de:"Videospiele",foreign:"video games"},
                {de:"gestern",foreign:"yesterday"}, {de:"heute",foreign:"today"}, {de:"morgen",foreign:"tomorrow"}, {de:"nie",foreign:"never"}, {de:"immer",foreign:"always"},
                {de:"Mathematik",foreign:"maths"}, {de:"Deutsch",foreign:"German"}, {de:"Biologie",foreign:"biology"}, {de:"Sport",foreign:"PE / sports"}, {de:"Kunst",foreign:"art"}, {de:"Musik",foreign:"music"}
            ] 
        },
        klasse_7_8: { 
            label: "🌍 Klasse 7-8 (Umwelt, Medien, Reise)", 
            words: [
                {de:"Umwelt",foreign:"environment"}, {de:"Schutz",foreign:"protection"}, {de:"Müll",foreign:"rubbish"}, {de:"Energie",foreign:"energy"}, {de:"Klima",foreign:"climate"},
                {de:"Internet",foreign:"internet"}, {de:"Computer",foreign:"computer"}, {de:"Nachricht",foreign:"message"}, {de:"Zeitung",foreign:"newspaper"}, {de:"Handy",foreign:"mobile phone"},
                {de:"Reisen",foreign:"travel"}, {de:"Zug",foreign:"train"}, {de:"Flugzeug",foreign:"airplane"}, {de:"Strand",foreign:"beach"}, {de:"Hotel",foreign:"hotel"},
                {de:"besuchen",foreign:"visit"}, {de:"treffen",foreign:"meet"}, {de:"verabreden",foreign:"arrange"}, {de:"Wald",foreign:"forest"}, {de:"Ozean",foreign:"ocean"},
                {de:"Nachhaltigkeit",foreign:"sustainability"}, {de:"Recycling",foreign:"recycling"}, {de:"Verschmutzung",foreign:"pollution"}, {de:"Ressource",foreign:"resource"}, {de:"erneuerbar",foreign:"renewable"},
                {de:"soziales Netzwerk",foreign:"social network"}, {de:"Werbung",foreign:"advertising"}, {de:"herunterladen",foreign:"download"}, {de:"hochladen",foreign:"upload"}, {de:"Passwort",foreign:"password"},
                {de:"Gepäck",foreign:"luggage"}, {de:"Reisepass",foreign:"passport"}, {de:"Ankunft",foreign:"arrival"}, {de:"Abflug",foreign:"departure"}, {de:"Sehenswürdigkeit",foreign:"sight"},
                {de:"Chemie",foreign:"chemistry"}, {de:"Physik",foreign:"physics"}, {de:"Geschichte",foreign:"history"}, {de:"Erdkunde",foreign:"geography"}, {de:"Experiment",foreign:"experiment"}
            ] 
        },
        klasse_9_11: { 
            label: "👥 Klasse 9-11 (Gesellschaft, Politik)", 
            words: [
                {de:"Gesellschaft",foreign:"society"}, {de:"Politik",foreign:"politics"}, {de:"Demokratie",foreign:"democracy"}, {de:"Wahl",foreign:"election"}, {de:"Gesetz",foreign:"law"},
                {de:"Freiheit",foreign:"freedom"}, {de:"Menschenrechte",foreign:"human rights"}, {de:"Gerechtigkeit",foreign:"justice"}, {de:"Regierung",foreign:"government"}, {de:"Bürger",foreign:"citizen"},
                {de:"Wirtschaft",foreign:"economy"}, {de:"Entwicklung",foreign:"development"}, {de:"Bildung",foreign:"education"}, {de:"Erfolg",foreign:"success"}, {de:"Verantwortung",foreign:"responsibility"},
                {de:"Technologie",foreign:"technology"}, {de:"Wissenschaft",foreign:"science"}, {de:"Diskussion",foreign:"discussion"}, {de:"Meinung",foreign:"opinion"}, {de:"Frieden",foreign:"peace"},
                {de:"Arbeitslosigkeit",foreign:"unemployment"}, {de:"Steuer",foreign:"tax"}, {de:"Vertrag",foreign:"contract"}, {de:"Bewerbung",foreign:"application"}, {de:"Lebenslauf",foreign:"CV / résumé"},
                {de:"Klimawandel",foreign:"climate change"}, {de:"Globalisierung",foreign:"globalization"}, {de:"Einwanderung",foreign:"immigration"}, {de:"Vorurteil",foreign:"prejudice"}, {de:"Toleranz",foreign:"tolerance"},
                {de:"Argument",foreign:"argument"}, {de:"Beweis",foreign:"evidence"}, {de:"Vorteil",foreign:"advantage"}, {de:"Nachteil",foreign:"disadvantage"}, {de:"Herausforderung",foreign:"challenge"},
                {de:"Gewaltenteilung",foreign:"separation of powers"}, {de:"Nachhaltigkeit",foreign:"sustainability"}, {de:"Verfassung",foreign:"constitution"}, {de:"Abgeordneter",foreign:"member of parliament"}, {de:"Staatsangehörigkeit",foreign:"nationality"}
            ] 
        },
        kfz: {
            label: "🔧 Berufsschule KFZ (Englisch)",
            words: [
                { de: "Motor", foreign: "engine" }, { de: "Bremse", foreign: "brake" }, { de: "Schaltplan", foreign: "wiring diagram" },
                { de: "Zündspule", foreign: "ignition coil" }, { de: "Reifen", foreign: "tire" }, { de: "Schraubenschlüssel", foreign: "wrench" },
                { de: "Kupplung", foreign: "clutch" }, { de: "Getriebe", foreign: "gearbox" }, { de: "Auspuff", foreign: "exhaust" }, { de: "Batterie", foreign: "battery" },
                { de: "Lichtmaschine", foreign: "alternator" }, { de: "Zahnriemen", foreign: "timing belt" }, { de: "Stoßdämpfer", foreign: "shock absorber" }, { de: "tanken", foreign: "refuel" },
                { de: "Achse", foreign: "axle" }, { de: "Kolben", foreign: "piston" }, { de: "Zylinder", foreign: "cylinder" }, { de: "Kühler", foreign: "radiator" },
                { de: "Werkstatt", foreign: "workshop" }, { de: "Ersatzteil", foreign: "spare part" }, { de: "Wartung", foreign: "maintenance" }, { de: "Fehlercode", foreign: "fault code" },
                { de: "Anlasser", foreign: "starter motor" }, { de: "Sicherung", foreign: "fuse" }, { de: "Achsschenkel", foreign: "steering knuckle" }, { de: "Ölwechsel", foreign: "oil change" },
                { de: "Auspuffrohr", foreign: "tailpipe" }, { de: "Zündkerze", foreign: "spark plug" }, { de: "Steuergerät", foreign: "control unit" }, { de: "Federung", foreign: "suspension" },
                { de: "Lenkrad", foreign: "steering wheel" }, { de: "Windschutzscheibe", foreign: "windshield" }, { de: "Scheinwerfer", foreign: "headlight" }, { de: "Rückspiegel", foreign: "rearview mirror" }
            ]
        }
    },
    tr: {
        klasse_1_4: { 
            label: "🧸 Grundschule (Temel Kelimeler)", 
            words: [
                {de:"Eins",foreign:"bir"}, {de:"Zwei",foreign:"iki"}, {de:"Drei",foreign:"üç"}, {de:"Hund",foreign:"köpek"}, {de:"Katze",foreign:"kedi"}, 
                {de:"Vogel",foreign:"kuş"}, {de:"Rot",foreign:"kırmızı"}, {de:"Blau",foreign:"mavi"}, {de:"Tisch",foreign:"masa"}, {de:"Buch",foreign:"kitap"},
                {de:"Hallo",foreign:"merhaba"}, {de:"Tschüss",foreign:"hoşçakal"}, {de:"Danke",foreign:"teşekkürler"}, {de:"Bitte",foreign:"lütfen"}, {de:"Schule",foreign:"okul"},
                {de:"Vier",foreign:"dört"}, {de:"Fünf",foreign:"beş"}, {de:"Grün",foreign:"yeşil"}, {de:"Gelb",foreign:"sarı"}, {de:"Mutter",foreign:"anne"},
                {de:"Vater",foreign:"baba"}, {de:"Haus",foreign:"ev"}, {de:"Apfel",foreign:"elma"}, {de:"Wasser",foreign:"su"}, {de:"Stuhl",foreign:"sandalye"},
                {de:"Lehrer",foreign:"öğretmen"}, {de:"lernen",foreign:"öğrenmek"}, {de:"spielen",foreign:"oynamak"}, {de:"Bruder",foreign:"kardeş"}, {de:"Zahlen (elf-zwanzig)",foreign:"on bir - yirmi"}
            ] 
        },
        klasse_5_8: { 
            label: "⚽ Mittelstufe (Hobiler & Çevre)", 
            words: [
                {de:"Fußball",foreign:"futbol"}, {de:"Schwimmen",foreign:"yüzme"}, {de:"Lesen",foreign:"okuma"}, {de:"Freundschaft",foreign:"arkadaşlık"}, {de:"Kino",foreign:"sinema"},
                {de:"Umwelt",foreign:"çevre"}, {de:"Wald",foreign:"orman"}, {de:"Wasser",foreign:"su"}, {de:"Wetter",foreign:"hava durumu"}, {de:"Reisen",foreign:"seyahat"},
                {de:"Musik",foreign:"müzik"}, {de:"Buch",foreign:"kitap"}, {de:"Handy",foreign:"telefon"}, {de:"Internet",foreign:"internet"}, {de:"Strand",foreign:"plaj"},
                {de:"Familie",foreign:"aile"}, {de:"Geburtstag",foreign:"doğum günü"}, {de:"Zeit",foreign:"zaman"}, {de:"Gesundheit",foreign:"sağlık"}, {de:"Essen",foreign:"yemek"},
                {de:"Mathematik",foreign:"matematik"}, {de:"Geschichte (Fach)",foreign:"tarih"}, {de:"Biologie",foreign:"biyoloji"}, {de:"Sport",foreign:"spor"}, {de:"Ferien",foreign:"tatil"}
            ] 
        },
        klasse_9_11: { 
            label: "👥 Oberstufe (Toplum)", 
            words: [
                {de:"Gesellschaft",foreign:"toplum"}, {de:"Demokratie",foreign:"demokrasi"}, {de:"Bildung",foreign:"eğitim"}, {de:"Beruf",foreign:"meslek"}, {de:"Ziel",foreign:"hedef"},
                {de:"Problem",foreign:"sorun"}, {de:"Lösung",foreign:"çözüm"}, {de:"Geld",foreign:"para"}, {de:"Wirtschaft",foreign:"ekonomi"}, {de:"Erfolg",foreign:"başarı"},
                {de:"Gesetz",foreign:"kanun"}, {de:"Freiheit",foreign:"özgürlük"}, {de:"Gerechtigkeit",foreign:"adalet"}, {de:"Wahl",foreign:"seçim"}, {de:"Verantwortung",foreign:"sorumluluk"},
                {de:"Nachhaltigkeit",foreign:"sürdürülebilirlik"}, {de:"Verfassung",foreign:"anayasa"}, {de:"Technologie",foreign:"teknoloji"}, {de:"global",foreign:"küresel"}
            ] 
        },
        kfz: {
            label: "🔧 Arabalar (Autos)",
            words: [
                { de: "Auto", foreign: "araba" }, { de: "Motor", foreign: "motor" }, { de: "Reifen", foreign: "lastik" },
                { de: "Bremse", foreign: "fren" }, { de: "tanken", foreign: "yakıt almak" },
                { de: "Getriebe", foreign: "vites kutusu" }, { de: "Batterie", foreign: "akü" }, { de: "Werkstatt", foreign: "tamirhane" }, { de: "Öl", foreign: "yağ" },
                { de: "Lenkrad", foreign: "direksiyon" }, { de: "Far (Scheinwerfer)", foreign: "far" }, { de: "Yol yardımı (Pannenhilfe)", foreign: "yol yardımı" }, { de: "Ehliyet (Führerschein)", foreign: "ehliyet" }
            ]
        }
    }
};