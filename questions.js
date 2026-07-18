const QUESTIONS_DATABASE = [
    // ==========================================
    // KATEGORIE: KLASSE 1 (DEUTSCH / BASIS)
    // ==========================================
    { id: 3001, category: "deutsch_uebungsheft", question: "Welches Tier-Wort ist hier richtig großgeschrieben?", answers: ["hund", "Hund", "HUnD", "hunD"], correct: 1, explanation: "💡 Menschen, Dinge und Tiere schreibt man immer groß! 'Hund' ist ein Tier und somit ein Nomen." },
    { id: 3002, category: "deutsch_uebungsheft", question: "Wie trennt man das Wort 'Schmetterling' richtig in Silben?", answers: ["Schme-tter-ling", "Schmet-ter-ling", "Schmett-er-ling", "Schme-tte-rling"], correct: 1, explanation: "💡 Silbenklatschen hilft! Schmet - ter - ling. Das sind genau 3 Silben." },
    { id: 3003, category: "deutsch_uebungsheft", question: "Wie schreibt man das Krabbeltier 'Spinne' richtig?", answers: ["Spine", "Schpine", "Spinne", "Schpinne"], correct: 2, explanation: "💡 Weil wir das 'i' ganz schnell sprechen, schreiben wir Doppel-n (nn) in der Mitte!" },
    { id: 3004, category: "deutsch_uebungsheft", question: "Was ist die richtige Mehrzahl (viele) von 'Haus'?", answers: ["Hauser", "Häuser", "Heuser", "Hoiser"], correct: 1, explanation: "💡 Da 'Haus' mit 'au' geschrieben wird, wird die Mehrzahl 'Häuser' mit 'äu' geschrieben." },
    { id: 3005, category: "deutsch_uebungsheft", question: "Welches Wort schreibt man mit einem V, obwohl man ein F hört?", answers: ["Fahrrad", "Fisch", "Vogel", "Flasche"], correct: 2, explanation: "💡 Der 'Vogel' ist ein wichtiges Merkwort mit V!" },

    // ==========================================
    // KATEGORIE: KLASSE 2 (MATHE & DEUTSCH)
    // ==========================================
    { id: 2001, category: "klasse2_mathe", question: "Rechne aus: Was ist 25 + 14?", answers: ["35", "38", "39", "40"], correct: 2, explanation: "💡 Rechne erst 25 + 10 = 35, und dann plus 4 ergibt 39!" },
    { id: 2002, category: "klasse2_mathe", question: "Rechne aus: Was ist 45 - 20?", answers: ["15", "25", "35", "45"], correct: 1, explanation: "💡 Ziehe 2 Zehner ab: 45 -> 35 -> 25." },
    { id: 2003, category: "klasse2_mathe", question: "Was ergibt die Malaufgabe 3 * 3?", answers: ["6", "8", "9", "12"], correct: 2, explanation: "💡 3 * 3 bedeutet 3 + 3 + 3. Das macht zusammen 9!" },
    { id: 2004, category: "klasse2_mathe", question: "Welches Zeichen passt hier: 34 [ ] 43?", answers: [">", "<", "=", "+"], correct: 1, explanation: "💡 34 is kleiner als (<) 43." },
    { id: 2101, category: "klasse2_deutsch", question: "Welches Wort schreibt man mit 'ä' (Mehrzahl von Hand)?", answers: ["Hende", "Hände", "Hande", "Hähne"], correct: 1, explanation: "💡 Die Mehrzahl von Hand heißt Hände." },
    { id: 2102, category: "klasse2_deutsch", question: "Welches Wort ist ein Nomen (Namenwort)?", answers: ["laufen", "schön", "Das Haus", "schnell"], correct: 2, explanation: "💡 Dinge wie 'Das Haus' sind Nomen und werden großgeschrieben." },

    // ==========================================
    // KATEGORIE: KLASSE 3 (ENGLISCH ÜBUNGSHEFT 3)
    // ==========================================
    { id: 3501, category: "klasse3_englisch", question: "Translate: 'Wie heißt du?'", answers: ["How are you?", "What is your name?", "Who are you?", "How old are you?"], correct: 1, explanation: "💡 Die Frage nach dem Namen lautet: 'What is your name?'" },
    { id: 3502, category: "klasse3_englisch", question: "Which number is 'twelve'?", answers: ["2", "11", "12", "20"], correct: 2, explanation: "💡 'Twelve' ist die Zahl 12." },
    { id: 3503, category: "klasse3_englisch", question: "Which number is 'seventy'?", answers: ["17", "7", "70", "77"], correct: 2, explanation: "💡 'Seventy' ist die 70. (Seventeen wäre 17)." },
    { id: 3504, category: "klasse3_englisch", question: "What colour is the sun?", answers: ["blue", "green", "red", "yellow"], correct: 3, explanation: "💡 Die Sonne ist gelb, also 'yellow'." },
    { id: 3505, category: "klasse3_englisch", question: "What is this school object: 'Lineal'?", answers: ["rubber", "ruler", "pencil", "board"], correct: 1, explanation: "💡 Das Lineal heißt auf Englisch 'ruler'." },
    { id: 3506, category: "klasse3_englisch", question: "Where do you put your books and pens?", answers: ["in the washbasin", "in the window", "in the schoolbag", "on the door"], correct: 2, explanation: "💡 Schulsachen gehören in die Schultasche ('schoolbag')." },
    { id: 3507, category: "klasse3_englisch", question: "Which pet is small, has a tail, and mice is the plural form?", answers: ["dog", "mouse", "cat", "rabbit"], correct: 1, explanation: "💡 Die Einzahl ist 'mouse', die Mehrzahl heißt 'mice'!" },
    { id: 3508, category: "klasse3_englisch", question: "Which animal lives ON THE FARM?", answers: ["hippo", "lion", "pig", "elephant"], correct: 2, explanation: "💡 Das Schwein ('pig') lebt auf dem Bauernhof. Die anderen leben im Zoo." },
    { id: 3509, category: "klasse3_englisch", question: "What do you wear on your feet when it snows?", answers: ["sandals", "T-shirt", "snowboots", "skirt"], correct: 2, explanation: "💡 Im Schnee trägt man Schneestiefel ('snowboots')." },
    { id: 3510, category: "klasse3_englisch", question: "What part of the body is 'Auge'?", answers: ["ear", "nose", "mouth", "eye"], correct: 3, explanation: "💡 Das Auge heißt 'eye'." },
    { id: 3511, category: "klasse3_englisch", question: "Complete the sentence: 'When it rains, I need an ________.'", answers: ["rainbow", "umbrella", "windy", "cold"], correct: 1, explanation: "💡 Wenn es regnet, braucht man einen Regenschirm ('umbrella')." },
    { id: 3512, category: "klasse3_englisch", question: "Which fruit is green or purple and grows in bundles?", answers: ["lemon", "apple", "grapes", "peach"], correct: 2, explanation: "💡 Weintrauben heißen 'grapes'." },
    { id: 3513, category: "klasse3_englisch", question: "What vegetable do you use to make a Halloween jack-o'-lantern?", answers: ["cucumber", "onion", "pumpkin", "peas"], correct: 2, explanation: "💡 Für Halloween nutzt man einen Kürbis ('pumpkin')." },
    { id: 3514, category: "klasse3_englisch", question: "What drink is white and comes from cows?", answers: ["tea", "orange juice", "milk", "coffee"], correct: 2, explanation: "💡 Milch ('milk') ist weiß und kommt von der Kuh." },
    { id: 3515, category: "klasse3_englisch", question: "Who is the mother of your mother?", answers: ["father", "sister", "grandmother", "brother"], correct: 2, explanation: "💡 Die Mutter deiner Mutter ist deine Oma ('grandmother')." },
    { id: 3516, category: "klasse3_englisch", question: "Who brings the presents at Christmas?", answers: ["Santa Claus", "reindeer", "stocking", "sleigh"], correct: 0, explanation: "💡 Der Weihnachtsmann heißt 'Santa Claus'." },

    // ==========================================
    // KATEGORIE: BERUFSAUSBILDUNG (KFZ-TECHNIK)
    // ==========================================
    { id: 8101, category: "kfz", question: "LF 1: Welche Flüssigkeit muss regelmäßig auf Frostschutz geprüft werden?", answers: ["Motoröl", "Kühlflüssigkeit", "Bremsflüssigkeit", "Getriebeöl"], correct: 1, explanation: "💡 Die Kühlflüssigkeit schützt vor dem Einfrieren." },
    { id: 8102, category: "kfz", question: "LF 3: Welches Messgerät misst die Spannung der Autobatterie?", answers: ["Amperemeter", "Multimeter", "Ohmmeter", "Oszilloskop"], correct: 1, explanation: "💡 Spannung misst man mit dem Multimeter parallel in Volt." }
];