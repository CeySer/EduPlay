const QUESTIONS_DATABASE = [
    // ==========================================
    // KATEGORIE: KLASSE 1 - DEUTSCH-ÜBUNGSHEFT
    // ==========================================
    { id: 3001, category: "deutsch_uebungsheft", question: "Welches Tier-Wort ist hier richtig großgeschrieben?", answers: ["hund", "Hund", "HUnD", "hunD"], correct: 1, explanation: "💡 Regel: Menschen, Dinge und Tiere schreibt man immer groß! 'Hund' ist ein Tier und somit ein Nomen." },
    { id: 3002, category: "deutsch_uebungsheft", question: "Wie trennt man das Wort 'Schmetterling' richtig in Silben?", answers: ["Schme-tter-ling", "Schmet-ter-ling", "Schmett-er-ling", "Schme-tte-rling"], correct: 1, explanation: "💡 Silbenklatschen hilft dir beim Schreiben! Klatsche mit: Schmet - ter - ling. Das sind genau 3 Silben." },
    { id: 3003, category: "deutsch_uebungsheft", question: "Wie schreibt man das Krabbeltier 'Spinne' richtig?", answers: ["Spine", "Schpine", "Spinne", "Schpinne"], correct: 2, explanation: "💡 Klatsche mit: Spin - ne. Weil wir das 'i' ganz schnell sprechen und in der Silbenmitte trennen, schreiben wir Doppel-n (nn)!" },
    { id: 3004, category: "deutsch_uebungsheft", question: "Was ist die richtige Mehrzahl (viele) von 'Haus'?", answers: ["Hauser", "Häuser", "Heuser", "Hoiser"], correct: 1, explanation: "💡 Denk an die Einzahl! Da 'Haus' mit 'au' geschrieben wird, schreiben wir die Mehrzahl 'Häuser' mit dem Umlaut 'äu'." },
    { id: 3005, category: "deutsch_uebungsheft", question: "Was ist die richtige Mehrzahl von 'Gans'?", answers: ["Ganse", "Gänse", "Gense", "Gähnse"], correct: 1, explanation: "💡 Die Einzahl 'Gans' hat ein 'a', deshalb schreiben wir die Mehrzahl 'Gänse' mit einem Umlaut 'ä'." },
    { id: 3006, category: "deutsch_uebungsheft", question: "Manchmal hörst du ein F, musst aber ein V schreiben. Welches Wort schreibt man mit V?", answers: ["Fisch", "Fahrrad", "Vogel", "Flasche"], correct: 2, explanation: "💡 Der 'Vogel' ist ein wichtiges Merkwort. Man hört ein 'F', schreibt aber ein 'V'." },
    { id: 3007, category: "deutsch_uebungsheft", question: "In manchen Wörtern hörst du ein ks, musst aber x schreiben. Wie schreibt man die Zauberin?", answers: ["Hekse", "Hexe", "Häckse", "Hegse"], correct: 1, explanation: "💡 Du hörst zwar das Geräusch 'ks' am Ende, aber du schreibst ein 'x' wie in 'Hexe'!" },
    { id: 3008, category: "deutsch_uebungsheft", question: "Wie schreibt man das Wort 'spielen' richtig?", answers: ["schpielen", "spielen", "stielen", "schielen"], correct: 1, explanation: "💡 Am Wortanfang schreiben wir immer 'Sp' oder 'St', auch wenn wir ein 'Sch' hören! Z.B. spielen, Stein, Spinne." },
    { id: 3009, category: "deutsch_uebungsheft", question: "Welches Wort reimt sich auf 'Maus'?", answers: ["Katze", "Haus", "Baum", "Hund"], correct: 1, explanation: "💡 Maus und Haus klingen am Ende gleich. Sie reimen sich!" },
    { id: 3010, category: "deutsch_uebungsheft", question: "Welcher Satz ist ein Fragesatz?", answers: ["Ich gehe nach Hause.", "Der Hund bellt laut.", "Kommst du heute spielen?", "Das Eis ist lecker!"], correct: 2, explanation: "💡 Eine Frage erkennst du an dem Fragezeichen (?) am Ende des Satzes." },

    // ==========================================
    // KATEGORIE: KLASSE 2 - MATHEMATIK
    // ==========================================
    { id: 2001, category: "klasse2_mathe", question: "Rechne aus: Was ist 25 + 14?", answers: ["35", "38", "39", "40"], correct: 2, explanation: "💡 Tipp: Rechne erst die Zehner zusammen (20 + 10 = 30) und dann die Einer (5 + 4 = 9). Zusammen ergibt das 39!" },
    { id: 2002, category: "klasse2_mathe", question: "Rechne aus: Was ist 45 - 20?", answers: ["15", "25", "35", "45"], correct: 1, explanation: "💡 Ziehe einfach 2 Zehner von den 4 Zehnern ab. Aus 40 wird 20, also bleibt 25!" },
    { id: 2003, category: "klasse2_mathe", question: "Was ergibt die Malaufgabe 2 * 5?", answers: ["7", "8", "10", "12"], correct: 2, explanation: "💡 2 * 5 ist das Gleiche wie 5 + 5. Das ergibt genau 10!" },
    { id: 2005, category: "klasse2_mathe", question: "Rechne aus: 3 * 3 = ?", answers: ["6", "8", "9", "12"], correct: 2, explanation: "💡 3 * 3 bedeutet 3 + 3 + 3. Das macht zusammen 9!" },
    { id: 2010, category: "klasse2_mathe", question: "Welches Zeichen passt hier: 34 [ ] 43?", answers: [">", "<", "=", "+"], correct: 1, explanation: "💡 34 ist kleiner als 43. Das Krokodil frisst immer die größere Zahl: < !" },
    { id: 2011, category: "klasse2_mathe", question: "Emma rechnet eine Tauschaufgabe: 15 + 4 = 19. Welcher Trick hilft ihr, um 4 + 15 einfacher im Kopf zu lösen?", answers: ["Tauschaufgabe: 15 + 4 hat dasselbe Ergebnis!", "Umkehraufgabe: 19 - 4 = 15", "Nachbaraufgabe: 15 + 5 = 20", "Verdoppeln: 15 + 15 = 30"], correct: 0, explanation: "💡 Emmas Rechentrick: Bei Plusaufgaben darfst du die Zahlen vertauschen. Das Ergebnis bleibt gleich!" },
    { id: 2012, category: "klasse2_mathe", question: "Max nutzt eine einfache Nachbaraufgabe für 15 + 16. Er weiß, dass 15 + 15 = 30 ist. Was ist dann 15 + 16?", answers: ["29", "30", "31", "32"], correct: 2, explanation: "💡 Max' Rechentrick: Da 16 genau um 1 größer ist als 15, rechnet Max einfach 15 + 15 = 30 und zählt 1 dazu. Das macht 31!" },
    { id: 2013, category: "klasse2_mathe", question: "Verdopple die Zahl 12!", answers: ["20", "22", "24", "26"], correct: 2, explanation: "💡 Verdoppeln heißt: Die Zahl plus sich selbst. 12 + 12 = 24." },
    { id: 2014, category: "klasse2_mathe", question: "Halbiere die Zahl 18!", answers: ["7", "8", "9", "10"], correct: 2, explanation: "💡 Halbieren heißt: In zwei gleich große Teile teilen. 9 + 9 = 18." },

    // ==========================================
    // KATEGORIE: KLASSE 3 - ENGLISCH ÜBUNGSHEFT 3
    // ==========================================
    { id: 3501, category: "klasse3_englisch", question: "Translate into English: 'Wie heißt du?'", answers: ["How are you?", "What is your name?", "Who are you?", "How old are you?"], correct: 1, explanation: "💡 Um nach dem Namen zu fragen, sagt man auf Englisch 'What is your name?'" },
    { id: 3502, category: "klasse3_englisch", question: "Which pet is it? 'It is small and likes cheese.'", answers: ["dog", "cat", "mouse", "fish"], correct: 2, explanation: "💡 Eine Maus (mouse) ist klein und mag Käse!" },
    { id: 3503, category: "klasse3_englisch", question: "What are you wearing? 'Ich trage ein rotes T-Shirt.'", answers: ["I wear a red T-shirt.", "I am wearing a red T-shirt.", "I am wearing a red shoes.", "I wearing a red T-shirt."], correct: 1, explanation: "💡 Wenn du etwas im Moment trägst, sagst du 'I am wearing...'" },
    { id: 3507, category: "klasse3_englisch", question: "Which number is 'twelve'?", answers: ["2", "11", "12", "20"], correct: 2, explanation: "💡 'Twelve' ist die Zahl 12." },
    { id: 3511, category: "klasse3_englisch", question: "What part of the body is 'Auge'?", answers: ["ear", "nose", "mouth", "eye"], correct: 3, explanation: "💡 Das Auge heißt 'eye'." },
    { id: 3512, category: "klasse3_englisch", question: "How do you say 'Guten Morgen' in English?", answers: ["Good evening", "Good afternoon", "Good night", "Good morning"], correct: 3, explanation: "💡 Am Morgen begrüßt man sich auf Englisch mit 'Good morning'." },
    { id: 3513, category: "klasse3_englisch", question: "Which colour is a banana?", answers: ["red", "blue", "yellow", "green"], correct: 2, explanation: "💡 Eine Banane ist gelb. Gelb heißt auf Englisch 'yellow'." },

    // ==========================================
    // KATEGORIE: BERUFSAUSBILDUNG (KFZ-TECHNIK)
    // ==========================================
    { id: 8101, category: "kfz", question: "Welche Flüssigkeit muss regelmäßig auf Frostschutz geprüft werden?", answers: ["Motoröl", "Kühlflüssigkeit", "Bremsflüssigkeit", "Getriebeöl"], correct: 1, explanation: "💡 Die Kühlflüssigkeit schützt den Motor vor dem Einfrieren und muss vor dem Winter gespindelt werden." },
    { id: 8301, category: "kfz", question: "Welches Messgerät misst die Spannung der Autobatterie?", answers: ["Amperemeter", "Multimeter (Spannungsmessung)", "Ohmmeter", "Oszilloskop"], correct: 1, explanation: "💡 Mit einem Multimeter misst man die elektrische Spannung parallel, die Einheit ist Volt (V)." },
    { id: 8302, category: "kfz", question: "Zahnriemenwechsel: Was darfst du auf gar keinen Fall tun, während das Absteckwerkzeug angebracht ist?", answers: ["Die Wasserpumpe lösen", "Den Motor an der Kurbelwelle durchdrehen", "Die Spannrolle entspannen", "Den alten Keilrippenriemen abnehmen"], correct: 1, explanation: "💡 Wichtig: Ist die Arretierung dran, darf der Motor nicht mehr gedreht werden! Die Kurbel- und Nockenwelle sind blockiert, Werkzeug oder Motor könnten beschädigt werden." },
    { id: 8303, category: "kfz", question: "Fahrwerktechnik: Wie nennt man eine Felge, deren Felgenbett nach innen vertieft ist, um die Reifenmontage zu ermöglichen?", answers: ["Flachbettfelge", "Steilschulterfelge", "Tiefbettfelge", "Sprengringfelge"], correct: 2, explanation: "💡 Durch das vertiefte Bett (Tiefbettfelge) kann der Reifen bei der Montage über das Hornflansch gehebelt werden." },
    { id: 8304, category: "kfz", question: "Werkzeugkunde: Welche bekannte Marke wird in vielen Profi-Werkstätten oft für Mini-Knarrenkästen oder Chemie-Produkte verwendet?", answers: ["Bender", "Berner", "Baumann", "Biller"], correct: 1, explanation: "💡 Die Marke heißt Berner. Sie ist ein sehr bekannter Zulieferer für Werkstattbedarf und Handwerkzeuge." },

    // ==========================================
    // KATEGORIE: ALLGEMEINWISSEN & KULTUR
    // ==========================================
    { id: 9001, category: "allgemein", question: "Wie viele Bundesländer hat Deutschland?", answers: ["12", "14", "16", "18"], correct: 2, explanation: "💡 Deutschland besteht aus 16 Bundesländern, zum Beispiel Nordrhein-Westfalen oder Bayern." },
    { id: 9002, category: "allgemein", question: "Welcher Planet ist der Sonne am nächsten?", answers: ["Venus", "Mars", "Merkur", "Erde"], correct: 2, explanation: "💡 Merkur ist der kleinste und der sonnennächste Planet in unserem Sonnensystem." },
    { id: 9003, category: "allgemein", question: "Wie viele Kontinente gibt es auf der Erde?", answers: ["5", "6", "7", "8"], correct: 2, explanation: "💡 Es gibt 7 Kontinente: Asien, Afrika, Nordamerika, Südamerika, Antarktika, Europa und Australien." },
    { id: 9004, category: "allgemein", question: "Aus wie vielen Spielern besteht eine Fußballmannschaft auf dem Feld?", answers: ["9", "10", "11", "12"], correct: 2, explanation: "💡 Eine Mannschaft spielt mit 11 Spielern: Einem Torwart und 10 Feldspielern." }
];