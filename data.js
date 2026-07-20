// ==========================================
// WISSEN & GRAMMATIK DATENBANK (Das große Quiz)
// ==========================================
const QUESTIONS_DATABASE = [
    // --- Englisch Grammatik ---
    { category: "eng_grammatik_5_6", question: "He ___ to school every day.", answers: ["go", "goes", "going"], correct: 1, explanation: "💡 Simple Present: Bei 'he, she, it' muss das 's' mit! (He goes)" },
    { category: "eng_grammatik_5_6", question: "Look! The dog ___ in the garden.", answers: ["plays", "is playing", "play"], correct: 1, explanation: "💡 Present Progressive: Signalwort 'Look!'. Es passiert genau jetzt im Moment." },
    { category: "eng_grammatik_5_6", question: "I ___ not like apples.", answers: ["does", "am", "do"], correct: 2, explanation: "💡 Simple Present Verneinung: I do not (don't) like." },
    { category: "eng_grammatik_7_8", question: "Yesterday, I ___ a great movie.", answers: ["see", "saw", "have seen"], correct: 1, explanation: "💡 Simple Past: Das Signalwort 'Yesterday' verlangt die 2. Form der Vergangenheit (saw)." },
    { category: "eng_grammatik_7_8", question: "She runs ___ than her brother.", answers: ["faster", "fastest", "more fast"], correct: 0, explanation: "💡 Steigerung: fast -> faster -> fastest. Hier ist es ein Vergleich (faster than)." },
    { category: "eng_grammatik_9_11", question: "If I had a million dollars, I ___ a big house.", answers: ["will buy", "would buy", "bought"], correct: 1, explanation: "💡 If-Clause Typ 2 (unwahrscheinlich): If + Simple Past, dann im Hauptsatz 'would' + Verb." },
    { category: "eng_grammatik_9_11", question: "The car ___ repaired tomorrow.", answers: ["is repaired", "was repaired", "will be repaired"], correct: 2, explanation: "💡 Passiv in der Zukunft: will + be + Partizip Perfekt (3. Form)." },

    // --- Deutsch & Mathe (Für die Grundschule) ---
    { category: "deutsch_uebungsheft", question: "Welches Wort ist richtig großgeschrieben?", answers: ["hund", "Hund", "HUnD"], correct: 1, explanation: "💡 Regel: Menschen, Dinge und Tiere (Nomen) schreibt man immer groß!" },
    { category: "deutsch_uebungsheft", question: "Welches dieser Wörter ist ein Tuwort (Verb)?", answers: ["Schön", "Laufen", "Auto"], correct: 1, explanation: "💡 Verben beschreiben, was man tut (laufen, springen, spielen)." },
    { category: "klasse2_mathe", question: "Was ist 25 + 14?", answers: ["35", "38", "39"], correct: 2, explanation: "💡 Zerlegen: 20+10=30. Dann 5+4=9. Zusammen ergibt das 39!" },
    { category: "klasse2_mathe", question: "Was ist 8 mal 4?", answers: ["32", "24", "36"], correct: 0, explanation: "💡 Das kleine Einmaleins: 8, 16, 24, 32!" },

    // --- KFZ-Technik & Mechatronik ---
    { category: "kfz", question: "Zahnriemenwechsel: Darfst du den Motor durchdrehen, während das Absteckwerkzeug angebracht ist?", answers: ["Ja", "Nur rückwärts", "Auf gar keinen Fall"], correct: 2, explanation: "💡 Wichtig: Ist die Arretierung (Absteckwerkzeug) einmal dran, darf der Motor absolut nicht mehr gedreht werden, sonst droht ein kapitaler Motorschaden!" },
    { category: "kfz", question: "Welches Bauteil wandelt in der Lichtmaschine den Wechselstrom in Gleichstrom um?", answers: ["Der Anlasser", "Die Zündspule", "Die Diodenplatte"], correct: 2, explanation: "💡 Die Dioden lassen den Strom nur in eine Richtung fließen und richten so den Wechselstrom für die Batterie in Gleichstrom um." },
    { category: "kfz", question: "Was genau ist ein Domlager?", answers: ["Ein Teil des Turboladers", "Das Verbindungsstück zwischen Federbein und Karosserie", "Ein Radlager an der Hinterachse"], correct: 1, explanation: "💡 Das Domlager (Federbeinstützlager) sitzt oben am Stoßdämpfer und verbindet das Fahrwerk flexibel mit der Karosserie." },
    { category: "kfz", question: "Welches Kürzel steht z.B. bei einem Opel 2.2 Motor für eine bestimmte Getriebevariante?", answers: ["ATC", "M32", "DSG"], correct: 0, explanation: "💡 Die korrekte Bezeichnung in den technischen Dokumenten für diese Variante ist ATC." },

    // --- Allgemeinwissen, Sport & Filme ---
    { category: "allgemeinwissen", question: "Wer ist der Hauptdarsteller, der den Detective in der südkoreanischen 'Crime City' (The Roundup) Reihe spielt?", answers: ["Jackie Chan", "Don Lee", "Tony Jaa"], correct: 1, explanation: "💡 Don Lee (Ma Dong-seok) verteilt dort ordentlich Schellen." },
    { category: "allgemeinwissen", question: "Wer war Miyamoto Musashi?", answers: ["Ein berühmter japanischer Samurai", "Ein südkoreanischer Kampfkünstler", "Ein Charakter aus Star Wars"], correct: 0, explanation: "💡 Er war einer der legendärsten Samurai der Geschichte, der mit zwei Schwertern kämpfte und nie ein Duell verlor." },
    { category: "allgemeinwissen", question: "Wie lange dauert ein Fußballspiel bei einer F-Jugend in der Regel?", answers: ["2 x 45 Minuten", "2 x 20 Minuten", "3 x 15 Minuten"], correct: 1, explanation: "💡 Im Kleinfeldfußball bei den Jüngsten (z.B. F-Jugend) wird standardmäßig 2 x 20 Minuten gespielt." }
];

// ==========================================
// VOKABEL DATENBANK (Nach Sprachen sortiert)
// ==========================================
const VOCABULARY_DATABASE = {
    en: {
        basics: { 
            label: "🧸 Basis (Grundschule)", 
            words: [
                { de: "Null", foreign: "zero" },
                { de: "Eins", foreign: "one" },
                { de: "Zwei", foreign: "two" },
                { de: "Hund", foreign: "dog" },
                { de: "Katze", foreign: "cat" },
                { de: "Tisch", foreign: "desk" },
                { de: "Buch", foreign: "book" },
                { de: "Schule", foreign: "school" }
            ] 
        },
        hobbies: { 
            label: "⚽ Hobbys & Sport", 
            words: [
                { de: "Fußball", foreign: "football" },
                { de: "Schwimmen", foreign: "swimming" },
                { de: "Lesen", foreign: "reading" },
                { de: "Schiedsrichter", foreign: "referee" },
                { de: "Training", foreign: "training" },
                { de: "Kampfkunst", foreign: "martial arts" }
            ] 
        },
        kfz: {
            label: "🔧 KFZ-Werkstatt",
            words: [
                { de: "Motor", foreign: "engine" },
                { de: "Bremse", foreign: "brake" },
                { de: "Schaltplan", foreign: "wiring diagram" },
                { de: "Zündspule", foreign: "ignition coil" },
                { de: "Reifen", foreign: "tire" },
                { de: "Schraubenschlüssel", foreign: "wrench" }
            ]
        },
        society: { 
            label: "👥 Gesellschaft & Beruf", 
            words: [
                { de: "Gesellschaft", foreign: "society" },
                { de: "Demokratie", foreign: "democracy" },
                { de: "Arbeit", foreign: "work" },
                { de: "Ausbildung", foreign: "apprenticeship" }
            ] 
        }
    },
    tr: {
        basics: { 
            label: "🧸 Temel Kelimeler", 
            words: [
                { de: "Null", foreign: "sıfır" },
                { de: "Eins", foreign: "bir" },
                { de: "Zwei", foreign: "iki" },
                { de: "Hund", foreign: "köpek" },
                { de: "Katze", foreign: "kedi" },
                { de: "Buch", foreign: "kitap" }
            ] 
        },
        kfz: {
            label: "🔧 Arabalar (Autos)",
            words: [
                { de: "Auto", foreign: "araba" },
                { de: "Motor", foreign: "motor" },
                { de: "Reifen", foreign: "lastik" }
            ]
        }
    }
};
