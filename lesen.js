// =======================================================
// LESEN-LERNEN FÜR KLASSE 1 & 2
// Buchstaben, Silben, Wörter und Sätze zum Lesen üben
// =======================================================
const READING_DATABASE = {

    // ============================================================
    // KLASSE 1 - BUCHSTABEN LERNEN (A-Z)
    // ============================================================
    buchstaben: {
        label: "🔤 Buchstaben lernen (A-Z)",
        description: "Lerne alle Buchstaben mit Bildern",
        items: [
            { letter: "A", word: "Affe", image: '<img src="img/A.jpg" alt="🐒">', sound: "ah" },
            { letter: "B", word: "Ball", image: "⚽", sound: "beh" },
            { letter: "C", word: "Computer", image: "💻", sound: "tseh" },
            { letter: "D", word: "Drache", image: "🐉", sound: "deh" },
            { letter: "E", word: "Ente", image: "🦆", sound: "eh" },
            { letter: "F", word: "Fisch", image: "🐟", sound: "eff" },
            { letter: "G", word: "Giraffe", image: "🦒", sound: "geh" },
            { letter: "H", word: "Hund", image: "🐕", sound: "hah" },
            { letter: "I", word: "Igel", image: "🦔", sound: "ih" },
            { letter: "J", word: "Joghurt", image: "🍦", sound: "jott" },
            { letter: "K", word: "Katze", image: "🐈", sound: "kah" },
            { letter: "L", word: "Löwe", image: "🦁", sound: "ell" },
            { letter: "M", word: "Maus", image: "🐭", sound: "emm" },
            { letter: "N", word: "Nase", image: "👃", sound: "enn" },
            { letter: "O", word: "Oma", image: "👵", sound: "oh" },
            { letter: "P", word: "Pferd", image: "🐴", sound: "peh" },
            { letter: "Q", word: "Quelle", image: "⛲", sound: "kuh" },
            { letter: "R", word: "Regen", image: "🌧️", sound: "err" },
            { letter: "S", word: "Sonne", image: "☀️", sound: "ess" },
            { letter: "T", word: "Tiger", image: "🐯", sound: "teh" },
            { letter: "U", word: "Uhu", image: "🦉", sound: "uh" },
            { letter: "V", word: "Vogel", image: "🐦", sound: "vau" },
            { letter: "W", word: "Wasser", image: "💧", sound: "weh" },
            { letter: "X", word: "Xylophon", image: "🎵", sound: "ix" },
            { letter: "Y", word: "Yoga", image: "🧘", sound: "üpsilon" },
            { letter: "Z", word: "Zebra", image: "🦓", sound: "zett" },
            // Umlaute
            { letter: "Ä", word: "Äpfel", image: "🍎", sound: "äh" },
            { letter: "Ö", word: "Öl", image: "🛢️", sound: "öh" },
            { letter: "Ü", word: "Über", image: "⬆️", sound: "üh" },
            { letter: "ß", word: "Straße", image: "🛣️", sound: "ess-tsett" }
        ]
    },

    // ============================================================
    // KLASSE 1 - SILBEN KLATSCHEN
    // ============================================================
    silben: {
        label: "👏 Silben klatschen",
        description: "Klatsche die Silben in jedem Wort",
        items: [
            { word: "Haus", syllables: "Haus", count: 1 },
            { word: "Ball", syllables: "Ball", count: 1 },
            { word: "Tisch", syllables: "Tisch", count: 1 },
            { word: "Apfel", syllables: "Ap-fel", count: 2 },
            { word: "Tasse", syllables: "Tas-se", count: 2 },
            { word: "Hose", syllables: "Ho-se", count: 2 },
            { word: "Banane", syllables: "Ba-na-ne", count: 3 },
            { word: "Tomate", syllables: "To-ma-te", count: 3 },
            { word: "Elefant", syllables: "E-le-fant", count: 3 },
            { word: "Krokodil", syllables: "Kro-ko-dil", count: 3 },
            { word: "Schmetterling", syllables: "Schmet-ter-ling", count: 3 },
            { word: "Taschenlampe", syllables: "Ta-schen-lam-pe", count: 4 },
            { word: "Bananen", syllables: "Ba-na-nen", count: 3 },
            { word: "Kartoffel", syllables: "Kar-tof-fel", count: 3 },
            { word: "Sonne", syllables: "Son-ne", count: 2 }
        ]
    },

    // ============================================================
    // KLASSE 1 - ERSTE WÖRTER (Anlaute)
    // ============================================================
    anlaute: {
        label: "🔊 Erste Wörter (Anlaute)",
        description: "Mit welchem Buchstaben beginnt das Wort?",
        items: [
            { word: "Affe", startsWith: "A", image: "🐒" },
            { word: "Ball", startsWith: "B", image: "⚽" },
            { word: "Drache", startsWith: "D", image: "🐉" },
            { word: "Ente", startsWith: "E", image: "🦆" },
            { word: "Fisch", startsWith: "F", image: "🐟" },
            { word: "Giraffe", startsWith: "G", image: "🦒" },
            { word: "Hund", startsWith: "H", image: "🐕" },
            { word: "Igel", startsWith: "I", image: "🦔" },
            { word: "Katze", startsWith: "K", image: "🐈" },
            { word: "Löwe", startsWith: "L", image: "🦁" },
            { word: "Maus", startsWith: "M", image: "🐭" },
            { word: "Nase", startsWith: "N", image: "👃" },
            { word: "Oma", startsWith: "O", image: "👵" },
            { word: "Pferd", startsWith: "P", image: "🐴" },
            { word: "Regen", startsWith: "R", image: "🌧️" },
            { word: "Sonne", startsWith: "S", image: "☀️" },
            { word: "Tiger", startsWith: "T", image: "🐯" },
            { word: "Uhu", startsWith: "U", image: "🦉" },
            { word: "Vogel", startsWith: "V", image: "🐦" },
            { word: "Wasser", startsWith: "W", image: "💧" },
            { word: "Zebra", startsWith: "Z", image: "🦓" }
        ]
    },

    // ============================================================
    // KLASSE 1 - EINFACHE WÖRTER (3-4 Buchstaben)
    // ============================================================
    simple_words: {
        label: "📖 Einfache Wörter",
        description: "Kurze Wörter mit 3-4 Buchstaben",
        items: [
            { word: "Mama", image: "👩" },
            { word: "Papa", image: "👨" },
            { word: "Oma", image: "👵" },
            { word: "Opa", image: "👴" },
            { word: "Haus", image: "🏠" },
            { word: "Baum", image: "🌳" },
            { word: "Sonne", image: "☀️" },
            { word: "Mond", image: "🌙" },
            { word: "Stern", image: "⭐" },
            { word: "Tisch", image: "🪑" },
            { word: "Stuhl", image: "💺" },
            { word: "Brot", image: "🍞" },
            { word: "Milch", image: "🥛" },
            { word: "Wasser", image: "💧" },
            { word: "Apfel", image: "🍎" },
            { word: "Banane", image: "🍌" },
            { word: "Hund", image: "🐕" },
            { word: "Katze", image: "🐈" },
            { word: "Fisch", image: "🐟" },
            { word: "Vogel", image: "🐦" },
            { word: "Auto", image: "🚗" },
            { word: "Zug", image: "🚂" },
            { word: "Schiff", image: "🚢" },
            { word: "Flugzeug", image: "✈️" }
        ]
    },

    // ============================================================
    // KLASSE 1/2 - WÖRTER MIT BILDERN ZUORDNEN
    // ============================================================
    word_match: {
        label: "🖼️ Wort zu Bild zuordnen",
        description: "Welches Wort passt zum Bild?",
        items: [
            { word: "Hund", image: "🐕" },
            { word: "Katze", image: "🐈" },
            { word: "Maus", image: "🐭" },
            { word: "Vogel", image: "🐦" },
            { word: "Fisch", image: "🐟" },
            { word: "Apfel", image: "🍎" },
            { word: "Banane", image: "🍌" },
            { word: "Brot", image: "🍞" },
            { word: "Milch", image: "🥛" },
            { word: "Wasser", image: "💧" }
        ]
    },

    // ============================================================
    // KLASSE 2 - ZWEISILBIGE WÖRTER
    // ============================================================
    zweisilbig: {
        label: "📗 Zweisilbige Wörter",
        description: "Wörter mit zwei Silben",
        items: [
            { word: "Tasse", syllables: "Tas-se", image: "☕" },
            { word: "Hose", syllables: "Ho-se", image: "👖" },
            { word: "Mütze", syllables: "Müt-ze", image: "🧢" },
            { word: "Tasche", syllables: "Ta-sche", image: "👜" },
            { word: "Schule", syllables: "Schu-le", image: "🏫" },
            { word: "Lehrer", syllables: "Leh-rer", image: "👨‍🏫" },
            { word: "Buch", syllables: "Buch", image: "📖" },
            { word: "Tür", syllables: "Tür", image: "🚪" },
            { word: "Fenster", syllables: "Fens-ter", image: "🪟" },
            { word: "Garten", syllables: "Gar-ten", image: "🌻" },
            { word: "Blume", syllables: "Blu-me", image: "🌸" },
            { word: "Baum", syllables: "Baum", image: "🌳" }
        ]
    },

    // ============================================================
    // KLASSE 2 - DREISILBIGE WÖRTER
    // ============================================================
    dreisilbig: {
        label: "📕 Dreisilbige Wörter",
        description: "Wörter mit drei Silben",
        items: [
            { word: "Banane", syllables: "Ba-na-ne", image: "🍌" },
            { word: "Tomate", syllables: "To-ma-te", image: "🍅" },
            { word: "Elefant", syllables: "E-le-fant", image: "🐘" },
            { word: "Krokodil", syllables: "Kro-ko-dil", image: "🐊" },
            { word: "Schmetterling", syllables: "Schmet-ter-ling", image: "🦋" },
            { word: "Libelle", syllables: "Li-bel-le", image: "🪰" },
            { word: "Marienkäfer", syllables: "Ma-ri-en-kä-fer", image: "🐞" },
            { word: "Schokolade", syllables: "Scho-ko-la-de", image: "🍫" },
            { word: "Kartoffel", syllables: "Kar-tof-fel", image: "🥔" },
            { word: "Giraffe", syllables: "Gi-raf-fe", image: "🦒" }
        ]
    },

    // ============================================================
    // KLASSE 1/2 - ERSTE SÄTZE
    // ============================================================
    sentences: {
        label: "📝 Erste Sätze",
        description: "Lies die kurzen Sätze vor",
        items: [
            { sentence: "Ich sehe einen Hund.", emoji: "🐕", words: ["Ich", "sehe", "einen", "Hund"] },
            { sentence: "Mama hat einen Apfel.", emoji: "🍎", words: ["Mama", "hat", "einen", "Apfel"] },
            { sentence: "Papa liest ein Buch.", emoji: "📖", words: ["Papa", "liest", "ein", "Buch"] },
            { sentence: "Die Sonne scheint warm.", emoji: "☀️", words: ["Die", "Sonne", "scheint", "warm"] },
            { sentence: "Der Hund bellt laut.", emoji: "🐕", words: ["Der", "Hund", "bellt", "laut"] },
            { sentence: "Das Kind spielt im Garten.", emoji: "🧒", words: ["Das", "Kind", "spielt", "im", "Garten"] },
            { sentence: "Die Katze schläft auf dem Stuhl.", emoji: "🐈", words: ["Die", "Katze", "schläft", "auf", "dem", "Stuhl"] },
            { sentence: "Ich trinke Wasser.", emoji: "💧", words: ["Ich", "trinke", "Wasser"] },
            { sentence: "Das Auto fährt schnell.", emoji: "🚗", words: ["Das", "Auto", "fährt", "schnell"] },
            { sentence: "Ich mag die Schule.", emoji: "🏫", words: ["Ich", "mag", "die", "Schule"] },
            { sentence: "Oma backt einen Kuchen.", emoji: "👵", words: ["Oma", "backt", "einen", "Kuchen"] },
            { sentence: "Der Vogel fliegt hoch.", emoji: "🐦", words: ["Der", "Vogel", "fliegt", "hoch"] }
        ]
    },

    // ============================================================
    // KLASSE 2 - LESEN MIT VERSTÄNDNIS
    // ============================================================
    reading_comprehension: {
        label: "🧠 Lesen mit Verständnis",
        description: "Lies den Satz und entscheide",
        items: [
            { sentence: "Die Sonne scheint. Es ist warm.", question: "Wie ist das Wetter?", answer: "warm" },
            { sentence: "Der Hund bellt laut.", question: "Was macht der Hund?", answer: "er bellt" },
            { sentence: "Mama backt einen Kuchen.", question: "Was backt Mama?", answer: "einen Kuchen" },
            { sentence: "Das Kind spielt im Sandkasten.", question: "Wo spielt das Kind?", answer: "im Sandkasten" },
            { sentence: "Die Katze schläft auf dem Bett.", question: "Wo schläft die Katze?", answer: "auf dem Bett" }
        ]
    },

    // ============================================================
    // BUCHSTABEN-PUZZLE - WÖRTER ZUSAMMENSETZEN
    // ============================================================
    word_puzzle: {
        label: "🧩 Buchstaben-Puzzle",
        description: "Setze die Buchstaben zum Wort zusammen",
        items: [
            { letters: "A-U-S-H", solution: "HAUS" },
            { letters: "B-A-L-L", solution: "BALL" },
            { letters: "T-I-S-C-H", solution: "TISCH" },
            { letters: "S-O-N-N-E", solution: "SONNE" },
            { letters: "M-O-N-D", solution: "MOND" },
            { letters: "S-T-E-R-N", solution: "STERN" },
            { letters: "A-P-F-E-L", solution: "APFEL" },
            { letters: "B-U-C-H", solution: "BUCH" },
            { letters: "F-I-S-C-H", solution: "FISCH" },
            { letters: "V-O-G-E-L", solution: "VOGEL" }
        ]
    }
};

// =======================================================
// ALIAS für die App
// =======================================================
const LESEN_DATABASE = READING_DATABASE;

console.log("✅ Lesen-Lernen geladen:", Object.keys(LESEN_DATABASE).length, "Kategorien");