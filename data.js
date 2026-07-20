// ==========================================
// WISSEN & GRAMMATIK DATENBANK (Das große Quiz)
// ==========================================
const QUESTIONS_DATABASE = [
    // --- Englisch Grammatik Klasse 5-6 ---
    { category: "eng_grammatik_5_6", question: "He ___ to school every day.", answers: ["go", "goes", "going"], correct: 1, explanation: "💡 Simple Present: Bei 'he, she, it' muss das 's' mit! (He goes)" },
    { category: "eng_grammatik_5_6", question: "Look! The dog ___ in the garden.", answers: ["plays", "is playing", "play"], correct: 1, explanation: "💡 Present Progressive: Signalwort 'Look!'. Es passiert genau jetzt." },
    { category: "eng_grammatik_5_6", question: "I ___ not like apples.", answers: ["does", "am", "do"], correct: 2, explanation: "💡 Simple Present Verneinung: I do not (don't) like." },
    { category: "eng_grammatik_5_6", question: "Where is Peter? - He is in ___ room.", answers: ["his", "her", "their"], correct: 0, explanation: "💡 Possessivpronomen für männlich (Peter) ist 'his'." },
    { category: "eng_grammatik_5_6", question: "___ you play football on Sundays?", answers: ["Do", "Are", "Does"], correct: 0, explanation: "💡 Frage im Simple Present mit 'Do you...?'" },

    // --- Englisch Grammatik Klasse 7-8 ---
    { category: "eng_grammatik_7_8", question: "Yesterday, I ___ a great movie.", answers: ["see", "saw", "have seen"], correct: 1, explanation: "💡 Simple Past: Signalwort 'Yesterday' verlangt die 2. Form (saw)." },
    { category: "eng_grammatik_7_8", question: "I ___ to London three times in my life.", answers: ["went", "have been", "am"], correct: 1, explanation: "💡 Present Perfect: Es geht um Erfahrungen bis heute ('in my life')." },
    { category: "eng_grammatik_7_8", question: "She runs ___ than her brother.", answers: ["faster", "fastest", "more fast"], correct: 0, explanation: "💡 Steigerung (Adjektiv): fast -> faster -> fastest. Hier Vergleich (faster than)." },
    { category: "eng_grammatik_7_8", question: "While we were eating, the phone ___.", answers: ["was ringing", "rang", "rings"], correct: 1, explanation: "💡 Past Progressive + Simple Past: Ein langes Ereignis wird durch ein kurzes (rang) unterbrochen." },
    { category: "eng_grammatik_7_8", question: "They ___ already finished their homework.", answers: ["have", "did", "are"], correct: 0, explanation: "💡 Signalwort 'already' steht oft mit Present Perfect (have finished)." },

    // --- Englisch Grammatik Klasse 9-11 ---
    { category: "eng_grammatik_9_11", question: "If I had a million dollars, I ___ a big house.", answers: ["will buy", "would buy", "bought"], correct: 1, explanation: "💡 If-Clause Typ 2 (unwahrscheinlich): If + Simple Past, im Hauptsatz 'would' + Verb." },
    { category: "eng_grammatik_9_11", question: "If it rains tomorrow, we ___ at home.", answers: ["will stay", "would stay", "stayed"], correct: 0, explanation: "💡 If-Clause Typ 1 (möglich): If + Simple Present, im Hauptsatz 'will' + Verb." },
    { category: "eng_grammatik_9_11", question: "The car ___ repaired tomorrow.", answers: ["is repaired", "was repaired", "will be repaired"], correct: 2, explanation: "💡 Passiv in der Zukunft: will + be + Partizip Perfekt (3. Form)." },
    { category: "eng_grammatik_9_11", question: "She said that she ___ tired.", answers: ["is", "was", "has been"], correct: 1, explanation: "💡 Reported Speech (Indirekte Rede): Wenn der Einleitungssatz in der Vergangenheit steht ('said'), gibt es einen Backshift (is -> was)." },
    { category: "eng_grammatik_9_11", question: "If he had studied harder, he ___ the exam.", answers: ["would have passed", "would pass", "will pass"], correct: 0, explanation: "💡 If-Clause Typ 3 (Vergangenheit, unmöglich): If + Past Perfect, Hauptsatz 'would have' + 3. Form." },

    // --- Deutsch & Mathe (Für die Grundschule) ---
    { category: "deutsch_uebungsheft", question: "Welches Wort ist hier richtig großgeschrieben?", answers: ["hund", "Hund", "HUnD"], correct: 1, explanation: "💡 Regel: Menschen, Dinge und Tiere schreibt man immer groß!" },
    { category: "deutsch_uebungsheft", question: "Welches dieser Wörter ist ein Tuwort (Verb)?", answers: ["Schön", "Laufen", "Auto"], correct: 1, explanation: "💡 Verben beschreiben, was man tut (laufen, springen, spielen)." },
    { category: "klasse2_mathe", question: "Rechne aus: Was ist 25 + 14?", answers: ["35", "38", "39"], correct: 2, explanation: "💡 Tipp: 20+10=30, 5+4=9. Ergibt 39!" },
    { category: "klasse2_mathe", question: "Was ist 8 mal 4?", answers: ["32", "24", "36"], correct: 0, explanation: "💡 Das kleine Einmaleins: 8, 16, 24, 32!" },

    // --- KFZ-Technik & Mechatronik ---
    { category: "kfz", question: "Zahnriemenwechsel: Was darfst du auf gar keinen Fall tun, während das Absteckwerkzeug angebracht ist?", answers: ["Wasserpumpe lösen", "Motor durchdrehen", "Riemen abnehmen"], correct: 1, explanation: "💡 Wichtig: Ist die Arretierung dran, darf der Motor nicht mehr gedreht werden!" },
    { category: "kfz", question: "Welches Bauteil wandelt im Auto Wechselstrom in Gleichstrom um?", answers: ["Der Anlasser", "Die Zündspule", "Die Diodenplatte"], correct: 2, explanation: "💡 Die Dioden in der Lichtmaschine richten den erzeugten Wechselstrom in den fürs Auto nötigen Gleichstrom gleich." },
    { category: "kfz", question: "Was genau ist ein Domlager?", answers: ["Ein Teil des Turboladers", "Das Verbindungsstück zwischen Federbein und Karosserie", "Ein Radlager an der Hinterachse"], correct: 1, explanation: "💡 Das Domlager (Federbeinstützlager) sitzt oben am Stoßdämpfer und verbindet das Fahrwerk flexibel mit der Karosserie." },
    { category: "kfz", question: "Welches Kürzel steht z.B. bei einem Opel 2.2 Motor für eine bestimmte Getriebevariante?", answers: ["ATC", "M32", "DSG"], correct: 0, explanation: "💡 Die korrekte Bezeichnung in den technischen Dokumenten für diese Variante ist ATC." },

    // --- Allgemeinwissen, Sport & Filme ---
    { category: "allgemeinwissen", question: "Wer ist der Hauptdarsteller, der den Detective in der südkoreanischen 'Crime City' (The Roundup) Reihe spielt?", answers: ["Jackie Chan", "Don Lee", "Tony Jaa"], correct: 1, explanation: "💡 Don Lee (Ma Dong-seok) spielt den schlagkräftigen Detective." },
    { category: "allgemeinwissen", question: "Wer war Miyamoto Musashi?", answers: ["Ein berühmter japanischer Samurai", "Ein südkoreanischer Kampfkünstler", "Ein Charakter aus Star Wars"], correct: 0, explanation: "💡 Er war einer der legendärsten Samurai der Geschichte, der mit zwei Schwertern kämpfte und nie ein Duell verlor." },
    { category: "allgemeinwissen", question: "Wie lange dauert ein Fußballspiel bei einer F-Jugend in der Regel?", answers: ["2 x 45 Minuten", "2 x 20 Minuten", "3 x 15 Minuten"], correct: 1, explanation: "💡 Im Kleinfeldfußball bei den Jüngsten (z.B. F-Jugend) wird standardmäßig 2 x 20 Minuten gespielt." }
];

// ==========================================
// VOKABEL DATENBANK (Vollständige Listen)
// ==========================================
const VOCABULARY_DATABASE = {
    en: {
        basics: { 
            label: "🧸 Basis (Kl. 1-4)", 
            words: [
                {de:"Null",foreign:"zero"}, {de:"Eins",foreign:"one"}, {de:"Zwei",foreign:"two"}, {de:"Drei",foreign:"three"}, 
                {de:"Vier",foreign:"four"}, {de:"Fünf",foreign:"five"}, {de:"Sechs",foreign:"six"}, {de:"Sieben",foreign:"seven"}, 
                {de:"Acht",foreign:"eight"}, {de:"Neun",foreign:"nine"}, {de:"Zehn",foreign:"ten"}, {de:"Rot",foreign:"red"}, 
                {de:"Blau",foreign:"blue"}, {de:"Grün",foreign:"green"}, {de:"Gelb",foreign:"yellow"}, {de:"Schwarz",foreign:"black"}, 
                {de:"Weiß",foreign:"white"}, {de:"Hund",foreign:"dog"}, {de:"Katze",foreign:"cat"}, {de:"Maus",foreign:"mouse"}, 
                {de:"Vogel",foreign:"bird"}, {de:"Fisch",foreign:"fish"}, {de:"Apfel",foreign:"apple"}, {de:"Banane",foreign:"banana"}, 
                {de:"Brot",foreign:"bread"}, {de:"Wasser",foreign:"water"}, {de:"Milch",foreign:"milk"}, {de:"Tisch",foreign:"desk"}, 
                {de:"Stuhl",foreign:"chair"}, {de:"Buch",foreign:"book"}, {de:"Stift",foreign:"pen"}, {de:"Schule",foreign:"school"}, 
                {de:"Lehrer",foreign:"teacher"}, {de:"spielen",foreign:"play"}, {de:"lernen",foreign:"learn"}, {de:"lesen",foreign:"read"}, 
                {de:"schreiben",foreign:"write"}, {de:"gehen",foreign:"go"}, {de:"kommen",foreign:"come"}, {de:"essen",foreign:"eat"}, 
                {de:"trinken",foreign:"drink"}, {de:"Hallo",foreign:"hello"}, {de:"Tschüss",foreign:"goodbye"}, {de:"Danke",foreign:"thank you"}, 
                {de:"Bitte",foreign:"please"}, {de:"Mutter",foreign:"mother"}, {de:"Vater",foreign:"father"}, {de:"Bruder",foreign:"brother"}, 
                {de:"Schwester",foreign:"sister"}, {de:"Haus",foreign:"house"}
            ] 
        },
        hobbies: { 
            label: "⚽ Alltag & Hobbys (Kl. 5-7)", 
            words: [
                {de:"Fußball",foreign:"football"}, {de:"Schwimmen",foreign:"swimming"}, {de:"Lesen",foreign:"reading"}, {de:"Tanzen",foreign:"dancing"}, 
                {de:"Singen",foreign:"singing"}, {de:"Kino",foreign:"cinema"}, {de:"Konzert",foreign:"concert"}, {de:"Freundschaft",foreign:"friendship"}, 
                {de:"lustig",foreign:"funny"}, {de:"spannend",foreign:"exciting"}, {de:"langweilig",foreign:"boring"}, {de:"beliebt",foreign:"popular"}, 
                {de:"besuchen",foreign:"visit"}, {de:"treffen",foreign:"meet"}, {de:"verabreden",foreign:"arrange"}, {de:"Hausaufgabe",foreign:"homework"}, 
                {de:"Ferien",foreign:"holidays"}, {de:"Reisen",foreign:"travel"}, {de:"Strand",foreign:"beach"}, {de:"Wandern",foreign:"hiking"}, 
                {de:"Camping",foreign:"camping"}, {de:"Fahrrad",foreign:"bicycle"}, {de:"Auto",foreign:"car"}, {de:"Zug",foreign:"train"}, 
                {de:"Flug",foreign:"flight"}, {de:"Hotel",foreign:"hotel"}, {de:"Souvenir",foreign:"souvenir"}, {de:"Karte",foreign:"map"}, 
                {de:"Kamera",foreign:"camera"}, {de:"telefonieren",foreign:"call"}, {de:"schreiben",foreign:"write"}, {de:"Nachrichten",foreign:"messages"}, 
                {de:"Internet",foreign:"internet"}, {de:"Computer",foreign:"computer"}, {de:"Spiele",foreign:"games"}, {de:"Musik",foreign:"music"}, 
                {de:"Film",foreign:"movie"}, {de:"Zeitung",foreign:"newspaper"}, {de:"Sport",foreign:"sport"}, {de:"Mannschaft",foreign:"team"}, 
                {de:"Gewinn",foreign:"win"}, {de:"Verlust",foreign:"loss"}, {de:"Schiedsrichter",foreign:"referee"}, {de:"Training",foreign:"training"}, 
                {de:"Fitness",foreign:"fitness"}, {de:"gesund",foreign:"healthy"}, {de:"aktiv",foreign:"active"}, {de:"Hobby",foreign:"hobby"}, 
                {de:"Freizeit",foreign:"free time"}, {de:"Wochenende",foreign:"weekend"}
            ] 
        },
        environment: { 
            label: "🌍 Umwelt & Welt (Kl. 8-9)", 
            words: [
                {de:"Klimawandel",foreign:"climate change"}, {de:"Umwelt",foreign:"environment"}, {de:"Schutz",foreign:"protection"}, {de:"Verschmutzung",foreign:"pollution"}, 
                {de:"Müll",foreign:"rubbish"}, {de:"Recycling",foreign:"recycling"}, {de:"nachhaltig",foreign:"sustainable"}, {de:"Energie",foreign:"energy"}, 
                {de:"erneuerbar",foreign:"renewable"}, {de:"Sonne",foreign:"sun"}, {de:"Wind",foreign:"wind"}, {de:"Wasser",foreign:"water"}, 
                {de:"Luft",foreign:"air"}, {de:"Wald",foreign:"forest"}, {de:"Baum",foreign:"tree"}, {de:"Blume",foreign:"flower"}, 
                {de:"Tier",foreign:"animal"}, {de:"Art",foreign:"species"}, {de:"bedroht",foreign:"endangered"}, {de:"Aussterben",foreign:"extinction"}, 
                {de:"Natur",foreign:"nature"}, {de:"Wetter",foreign:"weather"}, {de:"Sturm",foreign:"storm"}, {de:"Flut",foreign:"flood"}, 
                {de:"Dürre",foreign:"drought"}, {de:"Temperatur",foreign:"temperature"}, {de:"global",foreign:"global"}, {de:"Zukunft",foreign:"future"}, 
                {de:"Verantwortung",foreign:"responsibility"}, {de:"handeln",foreign:"act"}, {de:"sparen",foreign:"save"}, {de:"nutzen",foreign:"use"}, 
                {de:"vermeiden",foreign:"avoid"}, {de:"Plastik",foreign:"plastic"}, {de:"Verpackung",foreign:"packaging"}, {de:"Kohlendioxid",foreign:"carbon dioxide"}, 
                {de:"Transport",foreign:"transport"}, {de:"zu Fuß",foreign:"on foot"}, {de:"lokal",foreign:"local"}, {de:"Garten",foreign:"garden"}, 
                {de:"Park",foreign:"park"}, {de:"Ozean",foreign:"ocean"}, {de:"Berg",foreign:"mountain"}, {de:"Fluss",foreign:"river"}, 
                {de:"Land",foreign:"country"}, {de:"Welt",foreign:"world"}, {de:"Planet",foreign:"planet"}, {de:"Klima",foreign:"climate"}, 
                {de:"Ökologie",foreign:"ecology"}
            ] 
        },
        society: { 
            label: "👥 Gesellschaft & Zukunft (Kl. 10-11)", 
            words: [
                {de:"Gesellschaft",foreign:"society"}, {de:"Politik",foreign:"politics"}, {de:"Demokratie",foreign:"democracy"}, {de:"Wahl",foreign:"election"}, 
                {de:"Recht",foreign:"law"}, {de:"Freiheit",foreign:"freedom"}, {de:"Menschenrechte",foreign:"human rights"}, {de:"Gerechtigkeit",foreign:"justice"}, 
                {de:"Vielfalt",foreign:"diversity"}, {de:"Gleichheit",foreign:"equality"}, {de:"Frieden",foreign:"peace"}, {de:"Krieg",foreign:"war"}, 
                {de:"Regierung",foreign:"government"}, {de:"Bürger",foreign:"citizen"}, {de:"Zusammenarbeit",foreign:"cooperation"}, {de:"Geschichte",foreign:"history"}, 
                {de:"Kultur",foreign:"culture"}, {de:"Tradition",foreign:"tradition"}, {de:"Diskussion",foreign:"discussion"}, {de:"Meinung",foreign:"opinion"}, 
                {de:"Entscheidung",foreign:"decision"}, {de:"Pflicht",foreign:"duty"}, {de:"Respekt",foreign:"respect"}, {de:"Toleranz",foreign:"tolerance"}, 
                {de:"Hilfe",foreign:"help"}, {de:"Spende",foreign:"donation"}, {de:"Projekt",foreign:"project"}, {de:"Arbeit",foreign:"work"}, 
                {de:"Bildung",foreign:"education"}, {de:"Lehre",foreign:"apprenticeship"}, {de:"Beruf",foreign:"job"}, {de:"Ziel",foreign:"goal"}, 
                {de:"Chance",foreign:"chance"}, {de:"Erfolg",foreign:"success"}, {de:"Problem",foreign:"problem"}, {de:"Lösung",foreign:"solution"}, 
                {de:"Änderung",foreign:"change"}, {de:"Aktion",foreign:"action"}, {de:"Partei",foreign:"party"}, {de:"Europa",foreign:"Europe"}, 
                {de:"Wirtschaft",foreign:"economy"}, {de:"Finanzen",foreign:"finances"}, {de:"Geld",foreign:"money"}, {de:"Gesetz",foreign:"legislation"}, 
                {de:"Technologie",foreign:"technology"}, {de:"Forschung",foreign:"research"}, {de:"Wissenschaft",foreign:"science"}, {de:"Entwicklung",foreign:"development"}, 
                {de:"Netzwerk",foreign:"network"}, {de:"Künstliche Intelligenz",foreign:"artificial intelligence"}
            ] 
        },
        kfz: {
            label: "🔧 KFZ-Werkstatt",
            words: [
                { de: "Motor", foreign: "engine" }, { de: "Bremse", foreign: "brake" }, { de: "Schaltplan", foreign: "wiring diagram" },
                { de: "Zündspule", foreign: "ignition coil" }, { de: "Reifen", foreign: "tire" }, { de: "Schraubenschlüssel", foreign: "wrench" }
            ]
        }
    },
    tr: {
        basics: { 
            label: "🧸 Temel Kelimeler (Basis)", 
            words: [
                {de:"Null",foreign:"sıfır"}, {de:"Eins",foreign:"bir"}, {de:"Zwei",foreign:"iki"}, {de:"Drei",foreign:"üç"}, 
                {de:"Vier",foreign:"dört"}, {de:"Fünf",foreign:"beş"}, {de:"Sechs",foreign:"altı"}, {de:"Sieben",foreign:"yedi"}, 
                {de:"Acht",foreign:"sekiz"}, {de:"Neun",foreign:"dokuz"}, {de:"Zehn",foreign:"on"}, {de:"Rot",foreign:"kırmızı"}, 
                {de:"Blau",foreign:"mavi"}, {de:"Grün",foreign:"yeşil"}, {de:"Gelb",foreign:"sarı"}, {de:"Schwarz",foreign:"siyah"}, 
                {de:"Weiß",foreign:"beyaz"}, {de:"Hund",foreign:"köpek"}, {de:"Katze",foreign:"kedi"}, {de:"Maus",foreign:"fare"}, 
                {de:"Vogel",foreign:"kuş"}, {de:"Fisch",foreign:"balık"}, {de:"Apfel",foreign:"elma"}, {de:"Banane",foreign:"muz"}, 
                {de:"Brot",foreign:"ekmek"}, {de:"Wasser",foreign:"su"}, {de:"Milch",foreign:"süt"}, {de:"Tisch",foreign:"masa"}, 
                {de:"Stuhl",foreign:"sandalye"}, {de:"Buch",foreign:"kitap"}, {de:"Stift",foreign:"kalem"}, {de:"Schule",foreign:"okul"}, 
                {de:"Lehrer",foreign:"öğretmen"}, {de:"spielen",foreign:"oynamak"}, {de:"lernen",foreign:"öğrenmek"}, {de:"lesen",foreign:"okumak"}, 
                {de:"schreiben",foreign:"yazmak"}, {de:"gehen",foreign:"gitmek"}, {de:"kommen",foreign:"gelmek"}, {de:"essen",foreign:"yemek"}, 
                {de:"trinken",foreign:"içmek"}, {de:"Hallo",foreign:"merhaba"}, {de:"Tschüss",foreign:"hoşçakal"}, {de:"Danke",foreign:"teşekkürler"}, 
                {de:"Bitte",foreign:"lütfen"}, {de:"Mutter",foreign:"anne"}, {de:"Vater",foreign:"baba"}, {de:"Bruder",foreign:"erkek kardeş"}, 
                {de:"Schwester",foreign:"kız kardeş"}, {de:"Haus",foreign:"ev"}
            ] 
        },
        hobbies: { 
            label: "⚽ Hobiler (Hobbys)", 
            words: [
                {de:"Fußball",foreign:"futbol"}, {de:"Schwimmen",foreign:"yüzme"}, {de:"Lesen",foreign:"okuma"}, {de:"Tanzen",foreign:"dans"}, 
                {de:"Singen",foreign:"şarkı söyleme"}, {de:"Kino",foreign:"sinema"}, {de:"Konzert",foreign:"konser"}, {de:"Freundschaft",foreign:"arkadaşlık"}, 
                {de:"lustig",foreign:"komik"}, {de:"spannend",foreign:"heyecan verici"}, {de:"langweilig",foreign:"sıkıcı"}, {de:"beliebt",foreign:"popüler"}, 
                {de:"besuchen",foreign:"ziyaret etmek"}, {de:"treffen",foreign:"buluşmak"}, {de:"verabreden",foreign:"sözleşmek"}, {de:"Hausaufgabe",foreign:"ödev"}, 
                {de:"Ferien",foreign:"tatil"}, {de:"Reisen",foreign:"seyahat"}, {de:"Strand",foreign:"plaj"}, {de:"Wandern",foreign:"doğa yürüyüşü"}, 
                {de:"Camping",foreign:"kamp"}, {de:"Fahrrad",foreign:"bisiklet"}, {de:"Auto",foreign:"araba"}, {de:"Zug",foreign:"tren"}, 
                {de:"Flug",foreign:"uçuş"}, {de:"Hotel",foreign:"otel"}, {de:"Souvenir",foreign:"hediyelik eşya"}, {de:"Karte",foreign:"harita"}, 
                {de:"Kamera",foreign:"kamera"}, {de:"telefonieren",foreign:"telefon etmek"}, {de:"schreiben",foreign:"yazmak"}, {de:"Nachrichten",foreign:"mesajlar"}, 
                {de:"Internet",foreign:"internet"}, {de:"Computer",foreign:"bilgisayar"}, {de:"Spiele",foreign:"oyunlar"}, {de:"Musik",foreign:"müzik"}, 
                {de:"Film",foreign:"film"}, {de:"Zeitung",foreign:"gazete"}, {de:"Sport",foreign:"spor"}, {de:"Mannschaft",foreign:"takım"}, 
                {de:"Gewinn",foreign:"kazanç"}, {de:"Verlust",foreign:"kayıp"}, {de:"Schiedsrichter",foreign:"hakem"}, {de:"Training",foreign:"antrenman"}, 
                {de:"Fitness",foreign:"fitness"}, {de:"gesund",foreign:"sağlıklı"}, {de:"aktiv",foreign:"aktif"}, {de:"Hobby",foreign:"hobi"}, 
                {de:"Freizeit",foreign:"boş zaman"}, {de:"Wochenende",foreign:"hafta sonu"}
            ] 
        },
        environment: { 
            label: "🌍 Çevre (Umwelt)", 
            words: [
                {de:"Klimawandel",foreign:"iklim değişikliği"}, {de:"Umwelt",foreign:"çevre"}, {de:"Schutz",foreign:"koruma"}, {de:"Verschmutzung",foreign:"kirlilik"}, 
                {de:"Müll",foreign:"çöp"}, {de:"Recycling",foreign:"geri dönüşüm"}, {de:"nachhaltig",foreign:"sürdürülebilir"}, {de:"Energie",foreign:"enerji"}, 
                {de:"erneuerbar",foreign:"yenilenebilir"}, {de:"Sonne",foreign:"güneş"}, {de:"Wind",foreign:"rüzgar"}, {de:"Wasser",foreign:"su"}, 
                {de:"Luft",foreign:"hava"}, {de:"Wald",foreign:"orman"}, {de:"Baum",foreign:"ağaç"}, {de:"Blume",foreign:"çiçek"}, 
                {de:"Tier",foreign:"hayvan"}, {de:"Art",foreign:"tür"}, {de:"bedroht",foreign:"nesli tükenmekte olan"}, {de:"Aussterben",foreign:"yok olma"}, 
                {de:"Natur",foreign:"doğa"}, {de:"Wetter",foreign:"hava durumu"}, {de:"Sturm",foreign:"fırtına"}, {de:"Flut",foreign:"sel"}, 
                {de:"Dürre",foreign:"kuraklık"}, {de:"Temperatur",foreign:"sıcaklık"}, {de:"global",foreign:"küresel"}, {de:"Zukunft",foreign:"gelecek"}, 
                {de:"Verantwortung",foreign:"sorumluluk"}, {de:"handeln",foreign:"harekete geçmek"}, {de:"sparen",foreign:"tasarruf etmek"}, {de:"nutzen",foreign:"kullanmak"}, 
                {de:"vermeiden",foreign:"kaçınmak"}, {de:"Plastik",foreign:"plastik"}, {de:"Verpackung",foreign:"ambalaj"}, {de:"Kohlendioxid",foreign:"karbondioksit"}, 
                {de:"Transport",foreign:"ulaşım"}, {de:"zu Fuß",foreign:"yaya"}, {de:"lokal",foreign:"yerel"}, {de:"Garten",foreign:"bahçe"}, 
                {de:"Park",foreign:"park"}, {de:"Ozean",foreign:"okyanus"}, {de:"Berg",foreign:"dağ"}, {de:"Fluss",foreign:"nehir"}, 
                {de:"Land",foreign:"ülke"}, {de:"Welt",foreign:"dünya"}, {de:"Planet",foreign:"gezegen"}, {de:"Klima",foreign:"iklim"}, 
                {de:"Ökologie",foreign:"ekoloji"}
            ] 
        },
        society: { 
            label: "👥 Toplum (Gesellschaft)", 
            words: [
                {de:"Gesellschaft",foreign:"toplum"}, {de:"Politik",foreign:"politika"}, {de:"Demokratie",foreign:"demokrasi"}, {de:"Wahl",foreign:"seçim"}, 
                {de:"Recht",foreign:"hukuk"}, {de:"Freiheit",foreign:"özgürlük"}, {de:"Menschenrechte",foreign:"insan hakları"}, {de:"Gerechtigkeit",foreign:"adalet"}, 
                {de:"Vielfalt",foreign:"çeşitlilik"}, {de:"Gleichheit",foreign:"eşitlik"}, {de:"Frieden",foreign:"barış"}, {de:"Krieg",foreign:"savaş"}, 
                {de:"Regierung",foreign:"hükümet"}, {de:"Bürger",foreign:"vatandaş"}, {de:"Zusammenarbeit",foreign:"işbirliği"}, {de:"Geschichte",foreign:"tarih"}, 
                {de:"Kultur",foreign:"kültür"}, {de:"Tradition",foreign:"gelenek"}, {de:"Diskussion",foreign:"tartışma"}, {de:"Meinung",foreign:"fikir"}, 
                {de:"Entscheidung",foreign:"karar"}, {de:"Pflicht",foreign:"görev"}, {de:"Respekt",foreign:"saygı"}, {de:"Toleranz",foreign:"hoşgörü"}, 
                {de:"Hilfe",foreign:"yardım"}, {de:"Spende",foreign:"bağış"}, {de:"Projekt",foreign:"proje"}, {de:"Arbeit",foreign:"iş"}, 
                {de:"Bildung",foreign:"eğitim"}, {de:"Lehre",foreign:"çıraklık"}, {de:"Beruf",foreign:"meslek"}, {de:"Ziel",foreign:"hedef"}, 
                {de:"Chance",foreign:"fırsat"}, {de:"Erfolg",foreign:"başarı"}, {de:"Problem",foreign:"sorun"}, {de:"Lösung",foreign:"çözüm"}, 
                {de:"Änderung",foreign:"değişim"}, {de:"Aktion",foreign:"eylem"}, {de:"Partei",foreign:"parti"}, {de:"Europa",foreign:"Avrupa"}, 
                {de:"Wirtschaft",foreign:"ekonomi"}, {de:"Finanzen",foreign:"finans"}, {de:"Geld",foreign:"para"}, {de:"Gesetz",foreign:"yasa"}, 
                {de:"Technologie",foreign:"teknoloji"}, {de:"Forschung",foreign:"araştırma"}, {de:"Wissenschaft",foreign:"bilim"}, {de:"Entwicklung",foreign:"gelişim"}, 
                {de:"Netzwerk",foreign:"ağ"}, {de:"Künstliche Intelligenz",foreign:"yapay zeka"}
            ] 
        },
        kfz: {
            label: "🔧 Arabalar (Autos)",
            words: [
                { de: "Auto", foreign: "araba" }, { de: "Motor", foreign: "motor" }, { de: "Reifen", foreign: "lastik" }
            ]
        }
    }
};