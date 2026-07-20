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

    // --- UNTERSTUFE (Klasse 5 - 6) ---
    { category: "klasse_5_6", question: "Englisch: He ___ to school every day.", answers: ["go", "goes", "going"], correct: 1, explanation: "💡 Simple Present: Bei 'he, she, it' muss das 's' mit! (He goes)" },
    { category: "klasse_5_6", question: "Englisch: Look! The dog ___ in the garden.", answers: ["plays", "is playing", "play"], correct: 1, explanation: "💡 Present Progressive: Signalwort 'Look!'. Es passiert genau jetzt." },
    { category: "klasse_5_6", question: "Englisch: I ___ not like apples.", answers: ["does", "am", "do"], correct: 2, explanation: "💡 Simple Present Verneinung: I do not (don't) like." },
    { category: "klasse_5_6", question: "Biologie: Was benötigen Pflanzen, um Sauerstoff zu produzieren (Fotosynthese)?", answers: ["Nur Wasser", "Sonnenlicht, Wasser und CO2", "Erde und Dünger"], correct: 1, explanation: "💡 Pflanzen machen aus Sonnenlicht, Wasser und Kohlendioxid (CO2) Sauerstoff." },

    // --- MITTELSTUFE (Klasse 7 - 8) ---
    { category: "klasse_7_8", question: "Englisch: Yesterday, I ___ a great movie.", answers: ["see", "saw", "have seen"], correct: 1, explanation: "💡 Simple Past: Signalwort 'Yesterday' verlangt die 2. Form (saw)." },
    { category: "klasse_7_8", question: "Englisch: I ___ to London three times in my life.", answers: ["went", "have been", "am"], correct: 1, explanation: "💡 Present Perfect: Es geht um Erfahrungen bis heute ('in my life')." },
    { category: "klasse_7_8", question: "Englisch: She runs ___ than her brother.", answers: ["faster", "fastest", "more fast"], correct: 0, explanation: "💡 Steigerung (Adjektiv): fast -> faster -> fastest. Hier Vergleich (faster than)." },
    { category: "klasse_7_8", question: "Physik: Welche Einheit wird für elektrische Spannung verwendet?", answers: ["Ampere", "Watt", "Volt"], correct: 2, explanation: "💡 Die Spannung wird in Volt (V) gemessen. Stromstärke in Ampere (A)." },

    // --- OBERSTUFE (Klasse 9 - 11) ---
    { category: "klasse_9_11", question: "Englisch: If I had a million dollars, I ___ a big house.", answers: ["will buy", "would buy", "bought"], correct: 1, explanation: "💡 If-Clause Typ 2 (unwahrscheinlich): If + Simple Past, im Hauptsatz 'would' + Verb." },
    { category: "klasse_9_11", question: "Englisch: The car ___ repaired tomorrow.", answers: ["is repaired", "was repaired", "will be repaired"], correct: 2, explanation: "💡 Passiv in der Zukunft: will + be + Partizip Perfekt (3. Form)." },
    { category: "klasse_9_11", question: "Englisch: She said that she ___ tired.", answers: ["is", "was", "has been"], correct: 1, explanation: "💡 Reported Speech (Indirekte Rede): Wenn der Einleitungssatz in der Vergangenheit steht ('said'), gibt es einen Backshift (is -> was)." },
    { category: "klasse_9_11", question: "Politik: Wer wählt in Deutschland direkt den Bundeskanzler?", answers: ["Das Volk", "Der Bundestag", "Der Bundespräsident"], correct: 1, explanation: "💡 Das Volk wählt den Bundestag, und die Abgeordneten des Bundestages wählen den Kanzler." },

    // --- KFZ-TECHNIK (Berufsschule) ---
    { category: "kfz", question: "Werkstatt: Was darfst du auf gar keinen Fall tun, während das Absteckwerkzeug beim Zahnriemenwechsel angebracht ist?", answers: ["Wasserpumpe lösen", "Motor durchdrehen", "Riemen abnehmen"], correct: 1, explanation: "💡 Wichtig: Ist die Arretierung dran, darf der Motor nicht mehr gedreht werden!" },
    { category: "kfz", question: "Elektrik: Welches Bauteil wandelt in der Lichtmaschine Wechselstrom in Gleichstrom um?", answers: ["Anlasser", "Zündspule", "Diodenplatte"], correct: 2, explanation: "💡 Die Dioden richten den erzeugten Wechselstrom in Gleichstrom für das Auto gleich." },
    { category: "kfz", question: "Fahrwerk: Was genau ist ein Domlager?", answers: ["Ein Teil des Turboladers", "Das Verbindungsstück zwischen Federbein und Karosserie", "Ein Radlager an der Hinterachse"], correct: 1, explanation: "💡 Das Domlager sitzt oben am Stoßdämpfer und verbindet das Fahrwerk mit der Karosserie." },
    { category: "kfz", question: "Getriebe: Welches Kürzel steht z.B. bei einem Opel 2.2 Motor für eine bestimmte Variante?", answers: ["ATC", "M32", "DSG"], correct: 0, explanation: "💡 Die exakte Bezeichnung der Variante ist ATC." },

    // --- ALLGEMEINWISSEN, SPORT & FILM ---
    { category: "allgemeinwissen", question: "Kino: Wer ist der Hauptdarsteller, der den Detective in der 'Crime City' Reihe spielt?", answers: ["Jackie Chan", "Don Lee", "Tony Jaa"], correct: 1, explanation: "💡 Don Lee (Ma Dong-seok) spielt den schlagkräftigen Detective." },
    { category: "allgemeinwissen", question: "Geschichte: Wer war Miyamoto Musashi?", answers: ["Ein berühmter japanischer Samurai", "Ein südkoreanischer Kampfkünstler", "Ein Charakter aus Star Wars"], correct: 0, explanation: "💡 Er war einer der legendärsten Samurai der Geschichte und kämpfte mit zwei Schwertern." },
    { category: "allgemeinwissen", question: "Sport: Wie lange dauert ein Fußballspiel bei einer F-Jugend in der Regel?", answers: ["2 x 45 Minuten", "2 x 20 Minuten", "3 x 15 Minuten"], correct: 1, explanation: "💡 Im Kleinfeldfußball bei den Jüngsten (z.B. F-Jugend) wird meist 2 x 20 Minuten gespielt." }
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
                {de:"Apfel",foreign:"apple"}, {de:"Banane",foreign:"banana"}, {de:"Brot",foreign:"bread"}, {de:"Wasser",foreign:"water"}, {de:"Milch",foreign:"milk"}
            ] 
        },
        klasse_3_4: { 
            label: "🎒 Klasse 3-4 (Schule, Haus, Familie)", 
            words: [
                {de:"Tisch",foreign:"desk"}, {de:"Stuhl",foreign:"chair"}, {de:"Buch",foreign:"book"}, {de:"Stift",foreign:"pen"}, {de:"Schule",foreign:"school"},
                {de:"Lehrer",foreign:"teacher"}, {de:"spielen",foreign:"play"}, {de:"lernen",foreign:"learn"}, {de:"lesen",foreign:"read"}, {de:"schreiben",foreign:"write"},
                {de:"Hallo",foreign:"hello"}, {de:"Tschüss",foreign:"goodbye"}, {de:"Danke",foreign:"thank you"}, {de:"Bitte",foreign:"please"}, 
                {de:"Mutter",foreign:"mother"}, {de:"Vater",foreign:"father"}, {de:"Bruder",foreign:"brother"}, {de:"Schwester",foreign:"sister"}, {de:"Haus",foreign:"house"}, {de:"Garten",foreign:"garden"}
            ] 
        },
        klasse_5_6: { 
            label: "⚽ Klasse 5-6 (Hobbys, Zeit, Körper)", 
            words: [
                {de:"Fußball",foreign:"football"}, {de:"Schwimmen",foreign:"swimming"}, {de:"Singen",foreign:"singing"}, {de:"Kino",foreign:"cinema"}, {de:"Freundschaft",foreign:"friendship"},
                {de:"Kopf",foreign:"head"}, {de:"Auge",foreign:"eye"}, {de:"Ohr",foreign:"ear"}, {de:"Hand",foreign:"hand"}, {de:"Fuß",foreign:"foot"},
                {de:"Morgen",foreign:"morning"}, {de:"Abend",foreign:"evening"}, {de:"Uhr",foreign:"clock"}, {de:"Stunde",foreign:"hour"}, {de:"Woche",foreign:"week"},
                {de:"lustig",foreign:"funny"}, {de:"spannend",foreign:"exciting"}, {de:"langweilig",foreign:"boring"}, {de:"Wochenende",foreign:"weekend"}, {de:"Ferien",foreign:"holidays"}
            ] 
        },
        klasse_7_8: { 
            label: "🌍 Klasse 7-8 (Umwelt, Medien, Reise)", 
            words: [
                {de:"Umwelt",foreign:"environment"}, {de:"Schutz",foreign:"protection"}, {de:"Müll",foreign:"rubbish"}, {de:"Energie",foreign:"energy"}, {de:"Klima",foreign:"climate"},
                {de:"Internet",foreign:"internet"}, {de:"Computer",foreign:"computer"}, {de:"Nachricht",foreign:"message"}, {de:"Zeitung",foreign:"newspaper"}, {de:"Handy",foreign:"mobile phone"},
                {de:"Reisen",foreign:"travel"}, {de:"Zug",foreign:"train"}, {de:"Flugzeug",foreign:"airplane"}, {de:"Strand",foreign:"beach"}, {de:"Hotel",foreign:"hotel"},
                {de:"besuchen",foreign:"visit"}, {de:"treffen",foreign:"meet"}, {de:"verabreden",foreign:"arrange"}, {de:"Wald",foreign:"forest"}, {de:"Ozean",foreign:"ocean"}
            ] 
        },
        klasse_9_11: { 
            label: "👥 Klasse 9-11 (Gesellschaft, Politik)", 
            words: [
                {de:"Gesellschaft",foreign:"society"}, {de:"Politik",foreign:"politics"}, {de:"Demokratie",foreign:"democracy"}, {de:"Wahl",foreign:"election"}, {de:"Gesetz",foreign:"law"},
                {de:"Freiheit",foreign:"freedom"}, {de:"Menschenrechte",foreign:"human rights"}, {de:"Gerechtigkeit",foreign:"justice"}, {de:"Regierung",foreign:"government"}, {de:"Bürger",foreign:"citizen"},
                {de:"Wirtschaft",foreign:"economy"}, {de:"Entwicklung",foreign:"development"}, {de:"Bildung",foreign:"education"}, {de:"Erfolg",foreign:"success"}, {de:"Verantwortung",foreign:"responsibility"},
                {de:"Technologie",foreign:"technology"}, {de:"Wissenschaft",foreign:"science"}, {de:"Diskussion",foreign:"discussion"}, {de:"Meinung",foreign:"opinion"}, {de:"Frieden",foreign:"peace"}
            ] 
        },
        kfz: {
            label: "🔧 Berufsschule KFZ (Englisch)",
            words: [
                { de: "Motor", foreign: "engine" }, { de: "Bremse", foreign: "brake" }, { de: "Schaltplan", foreign: "wiring diagram" },
                { de: "Zündspule", foreign: "ignition coil" }, { de: "Reifen", foreign: "tire" }, { de: "Schraubenschlüssel", foreign: "wrench" },
                { de: "Kupplung", foreign: "clutch" }, { de: "Getriebe", foreign: "gearbox" }, { de: "Auspuff", foreign: "exhaust" }, { de: "Batterie", foreign: "battery" },
                { de: "Lichtmaschine", foreign: "alternator" }, { de: "Zahnriemen", foreign: "timing belt" }, { de: "Stoßdämpfer", foreign: "shock absorber" }, { de: "tanken", foreign: "refuel" }
            ]
        }
    },
    tr: {
        klasse_1_4: { 
            label: "🧸 Grundschule (Temel Kelimeler)", 
            words: [
                {de:"Eins",foreign:"bir"}, {de:"Zwei",foreign:"iki"}, {de:"Drei",foreign:"üç"}, {de:"Hund",foreign:"köpek"}, {de:"Katze",foreign:"kedi"}, 
                {de:"Vogel",foreign:"kuş"}, {de:"Rot",foreign:"kırmızı"}, {de:"Blau",foreign:"mavi"}, {de:"Tisch",foreign:"masa"}, {de:"Buch",foreign:"kitap"},
                {de:"Hallo",foreign:"merhaba"}, {de:"Tschüss",foreign:"hoşçakal"}, {de:"Danke",foreign:"teşekkürler"}, {de:"Bitte",foreign:"lütfen"}, {de:"Schule",foreign:"okul"}
            ] 
        },
        klasse_5_8: { 
            label: "⚽ Mittelstufe (Hobiler & Çevre)", 
            words: [
                {de:"Fußball",foreign:"futbol"}, {de:"Schwimmen",foreign:"yüzme"}, {de:"Lesen",foreign:"okuma"}, {de:"Freundschaft",foreign:"arkadaşlık"}, {de:"Kino",foreign:"sinema"},
                {de:"Umwelt",foreign:"çevre"}, {de:"Wald",foreign:"orman"}, {de:"Wasser",foreign:"su"}, {de:"Wetter",foreign:"hava durumu"}, {de:"Reisen",foreign:"seyahat"}
            ] 
        },
        klasse_9_11: { 
            label: "👥 Oberstufe (Toplum)", 
            words: [
                {de:"Gesellschaft",foreign:"toplum"}, {de:"Demokratie",foreign:"demokrasi"}, {de:"Bildung",foreign:"eğitim"}, {de:"Beruf",foreign:"meslek"}, {de:"Ziel",foreign:"hedef"},
                {de:"Problem",foreign:"sorun"}, {de:"Lösung",foreign:"çözüm"}, {de:"Geld",foreign:"para"}, {de:"Wirtschaft",foreign:"ekonomi"}, {de:"Erfolg",foreign:"başarı"}
            ] 
        },
        kfz: {
            label: "🔧 Arabalar (Autos)",
            words: [
                { de: "Auto", foreign: "araba" }, { de: "Motor", foreign: "motor" }, { de: "Reifen", foreign: "lastik" },
                { de: "Bremse", foreign: "fren" }, { de: "tanken", foreign: "yakıt almak" }
            ]
        }
    }
};