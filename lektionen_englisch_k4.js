// Englisch Klasse 4 - Hobbys/Sport, Schule/Uhrzeit/Weg, Einkaufen/Essen, Koerper/Kleidung
// 4 Kurse mit je 3 Lektionen - erzeugt aus /tmp/en4/d1..d4.js.
// Klasse 4 hatte vorher keinen Englisch-Kurs.
// Die Themen (topic) entsprechen genau den Wissensfragen derselben Klasse, damit
// die Kurs-Empfehlung aus dem Wissen-Modus den passenden Kurs findet.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "hobbys_en_k4", title: "Hobbys und Sport", icon: "⚽", grade: 4, subject: "englisch", beschreibung: "Sportarten, Freizeit, sagen was man kann und wie oft man etwas macht." },
        { id: "schule_stadt_en_k4", title: "Schule, Uhrzeit, Weg", icon: "🏫", grade: 4, subject: "englisch", beschreibung: "Schulfächer und Klassenzimmer, die Uhrzeit und den Weg beschreiben." },
        { id: "einkaufen_en_k4", title: "Einkaufen und Essen", icon: "🛒", grade: 4, subject: "englisch", beschreibung: "Lebensmittel, im Laden einkaufen, mit Pfund bezahlen und Mahlzeiten." },
        { id: "koerper_kleidung_en_k4", title: "Körper, krank sein, Kleidung", icon: "💪", grade: 4, subject: "englisch", beschreibung: "Körperteile, sagen was weh tut, und Kleidung für jedes Wetter." }
    ];
    const extraLektionen = [
    {
        id: "enho_k4_l1", kurs: "hobbys_en_k4", order: 1, icon: "🏊",
        title: "Sportarten", kurz: "play football, go swimming",
        erklaerung: {
            intro: "Sport auf Englisch: <b>football</b> (Fußball), <b>basketball</b>, <b>tennis</b>, <b>swimming</b> (Schwimmen), <b>riding</b> (Reiten), <b>skiing</b> (Skifahren), <b>running</b> (Laufen), <b>climbing</b> (Klettern). Mit Ball sagt man <b>play</b>: <b>I play football.</b> Sonst meist <b>go</b>: <b>I go swimming.</b>",
            beispiele: ["I play football on Mondays. – Ich spiele montags Fußball.",
                "She goes swimming. – Sie geht schwimmen.",
                "We play tennis. – Wir spielen Tennis."],
            merksatz: "play football, play tennis – aber: go swimming, go riding."
        },
        uebung: {
            leicht: [
                {
                    id: "enhok4l1_l1", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "leicht", points: 10,
                    question: "Was heißt 'climbing'?", answers: ["Klettern", "Kämpfen", "Klatschen", "Kochen"], correct: 0,
                    explanation: "Climbing heißt Klettern. Das b spricht man nicht."
                },
                {
                    id: "enhok4l1_l2", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "leicht", points: 10,
                    question: "⚽ Wie heißt der Sport auf Englisch?", answers: ["football", "basketball", "handball", "baseball"], correct: 0,
                    explanation: "Fußball heißt in England football."
                },
                {
                    id: "enhok4l1_l3", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "leicht", points: 10,
                    question: "Was heißt 'riding'?", answers: ["Reiten", "Reisen", "Rudern", "Rennen"], correct: 0,
                    explanation: "Riding heißt Reiten."
                },
                {
                    id: "enhok4l1_l4", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Schwimmen' auf Englisch?", answers: ["swimming", "skiing", "sailing", "singing"], correct: 0,
                    explanation: "Schwimmen heißt swimming."
                }
            ],
            mittel: [
                {
                    id: "enhok4l1_m1", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Welches Wort passt? 'I ___ tennis every Friday.'", answers: ["play", "go", "do", "make"], correct: 0,
                    explanation: "Ballspiele: play tennis."
                },
                {
                    id: "enhok4l1_m2", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Welches Wort passt? 'We ___ swimming in summer.'", answers: ["go", "play", "make", "have"], correct: 0,
                    explanation: "Sport mit -ing: go swimming."
                },
                {
                    id: "enhok4l1_m3", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Skifahren' auf Englisch?", answers: ["skiing", "skating", "sliding", "skipping"], correct: 0,
                    explanation: "Skifahren heißt skiing."
                },
                {
                    id: "enhok4l1_m4", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'team'?", answers: ["Mannschaft", "Trainer", "Schiedsrichter", "Tor"], correct: 0,
                    explanation: "Team heißt Mannschaft."
                }
            ],
            schwer: [
                {
                    id: "enhok4l1_s1", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "schwer", points: 10,
                    question: "Was heißt 'She goes riding every weekend'?", answers: ["Sie reitet jedes Wochenende.", "Sie reitet jeden Tag.", "Sie fährt jedes Wochenende.", "Sie reitet nie am Wochenende."], correct: 0,
                    explanation: "Every weekend heißt jedes Wochenende."
                },
                {
                    id: "enhok4l1_s2", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Tor' beim Fußball auf Englisch?", answers: ["goal", "gate", "door", "ball"], correct: 0,
                    explanation: "Ein Fußballtor heißt goal. Gate ist ein Gartentor."
                },
                {
                    id: "enhok4l1_s3", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["He plays basketball.", "He play basketball.", "He goes basketball.", "He playing basketball."], correct: 0,
                    explanation: "Bei he bekommt play ein s, und Ballspiele gehen mit play."
                },
                {
                    id: "enhok4l1_s4", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "schwer", points: 10,
                    question: "Was heißt 'win'?", answers: ["gewinnen", "verlieren", "werfen", "wählen"], correct: 0,
                    explanation: "Win heißt gewinnen."
                }
            ]
        },
        test: [
                {
                    id: "enhok4l1_t1", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'running'?", answers: ["Laufen", "Reiten", "Rudern", "Regnen"], correct: 0,
                    explanation: "Running heißt Laufen oder Rennen."
                },
                {
                    id: "enhok4l1_t2", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Fußball' auf Englisch?", answers: ["football", "handball", "footpath", "basketball"], correct: 0,
                    explanation: "Fußball heißt football."
                },
                {
                    id: "enhok4l1_t3", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Welches Wort passt? 'They ___ football after school.'", answers: ["play", "go", "do", "goes"], correct: 0,
                    explanation: "Ballspiele: play football."
                },
                {
                    id: "enhok4l1_t4", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'lose' beim Spiel?", answers: ["verlieren", "gewinnen", "lösen", "laufen"], correct: 0,
                    explanation: "Lose heißt verlieren."
                },
                {
                    id: "enhok4l1_t5", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "🎾 Wie heißt der Sport auf Englisch?", answers: ["tennis", "golf", "hockey", "cricket"], correct: 0,
                    explanation: "Das ist ein Tennisball – tennis."
                },
                {
                    id: "enhok4l1_t6", category: "kurs_enho_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Ich gehe klettern.' auf Englisch?", answers: ["I go climbing.", "I play climbing.", "I go climb.", "I am climb."], correct: 0,
                    explanation: "Sport mit -ing: go climbing."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enho_k4_l2", kurs: "hobbys_en_k4", order: 2, icon: "🎸",
        title: "Freizeit", kurz: "reading, painting, dancing …",
        erklaerung: {
            intro: "Hobbys (<b>hobbies</b>): <b>reading</b> (Lesen), <b>painting</b> (Malen), <b>cooking</b> (Kochen), <b>dancing</b> (Tanzen), <b>singing</b> (Singen), <b>listening to music</b> (Musik hören), <b>playing the guitar</b> (Gitarre spielen), <b>playing the piano</b> (Klavier spielen), <b>meeting friends</b> (Freunde treffen).",
            beispiele: ["My hobby is painting. – Mein Hobby ist Malen.",
                "I like listening to music. – Ich höre gern Musik.",
                "He plays the guitar. – Er spielt Gitarre."],
            merksatz: "My hobby is reading. I like dancing. – Nach like steht oft die -ing-Form."
        },
        uebung: {
            leicht: [
                {
                    id: "enhok4l2_l1", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "leicht", points: 10,
                    question: "Was heißt 'painting'?", answers: ["Malen", "Basteln", "Putzen", "Spielen"], correct: 0,
                    explanation: "Painting heißt Malen."
                },
                {
                    id: "enhok4l2_l2", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "leicht", points: 10,
                    question: "Was heißt 'dancing'?", answers: ["Tanzen", "Turnen", "Tauchen", "Tragen"], correct: 0,
                    explanation: "Dancing heißt Tanzen."
                },
                {
                    id: "enhok4l2_l3", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Singen' auf Englisch?", answers: ["singing", "swimming", "sitting", "sinking"], correct: 0,
                    explanation: "Singen heißt singing."
                },
                {
                    id: "enhok4l2_l4", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "leicht", points: 10,
                    question: "Was heißt 'My hobby is reading'?", answers: ["Mein Hobby ist Lesen.", "Mein Hobby ist Reiten.", "Mein Hobby ist Rechnen.", "Mein Hobby ist Reisen."], correct: 0,
                    explanation: "Reading heißt Lesen."
                }
            ],
            mittel: [
                {
                    id: "enhok4l2_m1", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'playing the guitar'?", answers: ["Gitarre spielen", "Gitarre kaufen", "Klavier spielen", "Gitarre stimmen"], correct: 0,
                    explanation: "Bei Instrumenten sagt man play the …"
                },
                {
                    id: "enhok4l2_m2", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'meeting friends'?", answers: ["Freunde treffen", "Freunde anrufen", "Fleisch essen", "Freunde suchen"], correct: 0,
                    explanation: "Meet heißt treffen. Fleisch heißt meat!"
                },
                {
                    id: "enhok4l2_m3", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Ich male gern.' auf Englisch?", answers: ["I like painting.", "I like paint.", "I liking paint.", "I am like painting."], correct: 0,
                    explanation: "Gern tun: I like + -ing."
                },
                {
                    id: "enhok4l2_m4", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'cooking'?", answers: ["Kochen", "Backen", "Kaufen", "Klettern"], correct: 0,
                    explanation: "Cooking heißt Kochen."
                }
            ],
            schwer: [
                {
                    id: "enhok4l2_s1", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Sie hört gern Musik.' auf Englisch?", answers: ["She likes listening to music.", "She likes hearing to music.", "She like listening to music.", "She listens music likes."], correct: 0,
                    explanation: "Musik hören heißt listening to music – und bei she: likes."
                },
                {
                    id: "enhok4l2_s2", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "schwer", points: 10,
                    question: "Was heißt 'What's your hobby'?", answers: ["Was ist dein Hobby?", "Wo ist dein Hobby?", "Hast du ein Hobby?", "Wer ist dein Hobby?"], correct: 0,
                    explanation: "What heißt was."
                },
                {
                    id: "enhok4l2_s3", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["I like reading books.", "I like read books.", "I likes reading books.", "I liking read books."], correct: 0,
                    explanation: "I like + -ing, und bei I kein s."
                },
                {
                    id: "enhok4l2_s4", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "schwer", points: 10,
                    question: "Was heißt 'playing the piano'?", answers: ["Klavier spielen", "Gitarre spielen", "Flöte spielen", "Klavier tragen"], correct: 0,
                    explanation: "Piano heißt Klavier."
                }
            ]
        },
        test: [
                {
                    id: "enhok4l2_t1", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'reading'?", answers: ["Lesen", "Reiten", "Reden", "Rechnen"], correct: 0,
                    explanation: "Reading heißt Lesen."
                },
                {
                    id: "enhok4l2_t2", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Tanzen' auf Englisch?", answers: ["dancing", "singing", "jumping", "drawing"], correct: 0,
                    explanation: "Tanzen heißt dancing."
                },
                {
                    id: "enhok4l2_t3", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'hobbies'?", answers: ["Hobbys", "Hausaufgaben", "Ferien", "Freunde"], correct: 0,
                    explanation: "Ein hobby, viele hobbies – das y wird zu ies."
                },
                {
                    id: "enhok4l2_t4", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I can play the guitar'?", answers: ["Ich kann Gitarre spielen.", "Ich will Gitarre spielen.", "Ich habe eine Gitarre.", "Ich kann Klavier spielen."], correct: 0,
                    explanation: "Can heißt kann, guitar heißt Gitarre."
                },
                {
                    id: "enhok4l2_t5", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Ich treffe gern Freunde.' auf Englisch?", answers: ["I like meeting friends.", "I like meet friends.", "I meeting like friends.", "I likes meeting friends."], correct: 0,
                    explanation: "Gern tun: I like + -ing."
                },
                {
                    id: "enhok4l2_t6", category: "kurs_enho_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'singing'?", answers: ["Singen", "Sinken", "Sitzen", "Segeln"], correct: 0,
                    explanation: "Singing heißt Singen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enho_k4_l3", kurs: "hobbys_en_k4", order: 3, icon: "🏆",
        title: "Können, Lieblingssport, wie oft", kurz: "can, favourite, always, never",
        erklaerung: {
            intro: "Was du kannst: <b>I can swim.</b> Was du nicht kannst: <b>I can't ride a horse.</b> Frage: <b>Can you dance?</b> – <b>Yes, I can.</b> / <b>No, I can't.</b> Lieblings-: <b>My favourite sport is football.</b> Wie oft? <b>always</b> (immer), <b>often</b> (oft), <b>sometimes</b> (manchmal), <b>never</b> (nie), <b>every day</b> (jeden Tag), <b>on Mondays</b> (montags).",
            beispiele: ["My favourite sport is tennis. – Mein Lieblingssport ist Tennis.",
                "I play football on Tuesdays. – Ich spiele dienstags Fußball.",
                "I sometimes go swimming. – Ich gehe manchmal schwimmen."],
            merksatz: "Can you …? – Yes, I can. / No, I can't."
        },
        uebung: {
            leicht: [
                {
                    id: "enhok4l3_l1", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "leicht", points: 10,
                    question: "Was heißt 'every day'?", answers: ["jeden Tag", "einen Tag", "heute", "jede Woche"], correct: 0,
                    explanation: "Every day heißt jeden Tag."
                },
                {
                    id: "enhok4l3_l2", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "leicht", points: 10,
                    question: "Was heißt 'favourite sport'?", answers: ["Lieblingssport", "Lieblingsessen", "Schulsport", "Sporthalle"], correct: 0,
                    explanation: "Favourite heißt Lieblings-."
                },
                {
                    id: "enhok4l3_l3", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "leicht", points: 10,
                    question: "Was heißt 'at the weekend'?", answers: ["am Wochenende", "in der Woche", "am Montag", "nach der Schule"], correct: 0,
                    explanation: "Weekend heißt Wochenende."
                },
                {
                    id: "enhok4l3_l4", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "leicht", points: 10,
                    question: "Was heißt 'on Mondays'?", answers: ["montags", "am Sonntag", "morgens", "monatlich"], correct: 0,
                    explanation: "On Mondays heißt jeden Montag – montags."
                }
            ],
            mittel: [
                {
                    id: "enhok4l3_m1", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Mein Lieblingssport ist Tennis.' auf Englisch?", answers: ["My favourite sport is tennis.", "My favourite tennis is sport.", "My sport favourite is tennis.", "I favourite sport is tennis."], correct: 0,
                    explanation: "Lieblingssport heißt favourite sport."
                },
                {
                    id: "enhok4l3_m2", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I can't ride a horse'?", answers: ["Ich kann nicht reiten.", "Ich kann gut reiten.", "Ich will nicht reiten.", "Ich habe kein Pferd."], correct: 0,
                    explanation: "Can't heißt kann nicht, ride a horse heißt reiten."
                },
                {
                    id: "enhok4l3_m3", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'twice a week'?", answers: ["zweimal pro Woche", "zwei Wochen lang", "jede zweite Woche", "einmal pro Woche"], correct: 0,
                    explanation: "Twice heißt zweimal, once heißt einmal."
                },
                {
                    id: "enhok4l3_m4", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was passt? 'I play football ___ Saturdays.'", answers: ["on", "in", "at", "of"], correct: 0,
                    explanation: "Bei Wochentagen steht on."
                }
            ],
            schwer: [
                {
                    id: "enhok4l3_s1", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "schwer", points: 10,
                    question: "Was heißt 'How often do you play tennis'?", answers: ["Wie oft spielst du Tennis?", "Wie lange spielst du Tennis?", "Wann spielst du Tennis?", "Wo spielst du Tennis?"], correct: 0,
                    explanation: "How often heißt wie oft."
                },
                {
                    id: "enhok4l3_s2", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Ich bin gut im Fußball.' auf Englisch?", answers: ["I'm good at football.", "I'm good in football.", "I'm well at football.", "I good at football."], correct: 0,
                    explanation: "Gut in etwas sein heißt good at."
                },
                {
                    id: "enhok4l3_s3", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["She can play tennis well.", "She can plays tennis well.", "She cans play tennis well.", "She can to play tennis well."], correct: 0,
                    explanation: "Can bekommt kein s, danach das Tunwort ohne s."
                },
                {
                    id: "enhok4l3_s4", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "schwer", points: 10,
                    question: "Was heißt 'never'?", answers: ["nie", "immer", "oft", "manchmal"], correct: 0,
                    explanation: "Never heißt nie."
                }
            ]
        },
        test: [
                {
                    id: "enhok4l3_t1", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'always'?", answers: ["immer", "alle", "nie", "überall"], correct: 0,
                    explanation: "Always heißt immer."
                },
                {
                    id: "enhok4l3_t2", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'sometimes'?", answers: ["manchmal", "immer", "oft", "sonntags"], correct: 0,
                    explanation: "Sometimes heißt manchmal."
                },
                {
                    id: "enhok4l3_t3", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Wie antwortest du auf 'Can you ski?' mit Ja?", answers: ["Yes, I can.", "Yes, I do.", "Yes, I am.", "Yes, I ski can."], correct: 0,
                    explanation: "Auf Can you …? antwortest du Yes, I can."
                },
                {
                    id: "enhok4l3_t4", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Ich spiele dienstags Tennis.' auf Englisch?", answers: ["I play tennis on Tuesdays.", "I play tennis in Tuesdays.", "I play tennis on Thursdays.", "I plays tennis on Tuesdays."], correct: 0,
                    explanation: "Dienstag heißt Tuesday, und vor Tagen steht on."
                },
                {
                    id: "enhok4l3_t5", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'What's your favourite sport'?", answers: ["Was ist dein Lieblingssport?", "Welchen Sport magst du nicht?", "Treibst du gern Sport?", "Wo machst du Sport?"], correct: 0,
                    explanation: "Favourite sport heißt Lieblingssport."
                },
                {
                    id: "enhok4l3_t6", category: "kurs_enho_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "hobbies_sports", difficulty: "mittel", points: 10,
                    question: "Was heißt 'often'?", answers: ["oft", "offen", "nie", "Ofen"], correct: 0,
                    explanation: "Often heißt oft. Offen heißt open."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enss_k4_l1", kurs: "schule_stadt_en_k4", order: 1, icon: "📚",
        title: "Schulfächer", kurz: "maths, art, music, PE …",
        erklaerung: {
            intro: "Schulfächer (<b>subjects</b>): <b>maths</b> (Mathe), <b>English</b>, <b>German</b> (Deutsch), <b>art</b> (Kunst), <b>music</b> (Musik), <b>PE</b> (Sport), <b>science</b> (Sachunterricht, Naturwissenschaft). Der Stundenplan heißt <b>timetable</b>, die Pause <b>break</b>, die Hausaufgaben <b>homework</b>. Schülerin oder Schüler: <b>pupil</b>.",
            beispiele: ["My favourite subject is art. – Mein Lieblingsfach ist Kunst.",
                "We have got maths on Mondays. – Wir haben montags Mathe.",
                "At break we play outside. – In der Pause spielen wir draußen."],
            merksatz: "Sprachen schreibt man groß: English, German."
        },
        uebung: {
            leicht: [
                {
                    id: "enssk4l1_l1", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Deutsch' (Schulfach) auf Englisch?", answers: ["German", "Dutch", "English", "Germany"], correct: 0,
                    explanation: "Deutsch heißt German. Germany ist das Land Deutschland, Dutch heißt niederländisch."
                },
                {
                    id: "enssk4l1_l2", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'music'?", answers: ["Musik", "Mathe", "Kunst", "Sport"], correct: 0,
                    explanation: "Music heißt Musik."
                },
                {
                    id: "enssk4l1_l3", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'break' in der Schule?", answers: ["Pause", "Bremse", "Tafel", "Stunde"], correct: 0,
                    explanation: "Break heißt Pause. Die Bremse heißt brake!"
                },
                {
                    id: "enssk4l1_l4", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Mathe' auf Englisch?", answers: ["maths", "music", "matches", "marks"], correct: 0,
                    explanation: "In England heißt Mathe maths."
                }
            ],
            mittel: [
                {
                    id: "enssk4l1_m1", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'subject' in der Schule?", answers: ["Schulfach", "Schulweg", "Hausaufgabe", "Klassenzimmer"], correct: 0,
                    explanation: "Subject heißt Schulfach."
                },
                {
                    id: "enssk4l1_m2", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'homework'?", answers: ["Hausaufgaben", "Hausschuhe", "Heimweg", "Klassenarbeit"], correct: 0,
                    explanation: "Homework heißt Hausaufgaben."
                },
                {
                    id: "enssk4l1_m3", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'My favourite subject is art'?", answers: ["Mein Lieblingsfach ist Kunst.", "Mein Lieblingsfach ist Musik.", "Ich mag keine Kunst.", "Kunst ist mein Hobby."], correct: 0,
                    explanation: "Art heißt Kunst."
                },
                {
                    id: "enssk4l1_m4", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'classroom'?", answers: ["Klassenzimmer", "Klassenfahrt", "Klassenarbeit", "Lehrerzimmer"], correct: 0,
                    explanation: "Class heißt Klasse, room heißt Zimmer."
                }
            ],
            schwer: [
                {
                    id: "enssk4l1_s1", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'We have got PE on Fridays'?", answers: ["Wir haben freitags Sport.", "Wir haben freitags Musik.", "Wir haben freitags frei.", "Wir machen freitags Pause."], correct: 0,
                    explanation: "PE heißt Sport."
                },
                {
                    id: "enssk4l1_s2", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Lehrerin' auf Englisch?", answers: ["teacher", "pupil", "headteacher", "learner"], correct: 0,
                    explanation: "Lehrerin oder Lehrer heißt teacher. Headteacher ist die Schulleitung."
                },
                {
                    id: "enssk4l1_s3", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'pupil'?", answers: ["Schüler", "Lehrer", "Puppe", "Pult"], correct: 0,
                    explanation: "Pupil heißt Schülerin oder Schüler."
                },
                {
                    id: "enssk4l1_s4", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'What's your favourite subject'?", answers: ["Was ist dein Lieblingsfach?", "Welches Fach hast du jetzt?", "Was ist dein Lieblingsbuch?", "Was ist deine Lieblingsfarbe?"], correct: 0,
                    explanation: "Subject heißt Fach."
                }
            ]
        },
        test: [
                {
                    id: "enssk4l1_t1", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Kunst' (Schulfach) auf Englisch?", answers: ["art", "music", "maths", "PE"], correct: 0,
                    explanation: "Kunst heißt art."
                },
                {
                    id: "enssk4l1_t2", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'timetable'?", answers: ["Stundenplan", "Tischdecke", "Wecker", "Kalender"], correct: 0,
                    explanation: "Timetable heißt Stundenplan."
                },
                {
                    id: "enssk4l1_t3", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'pencil case'?", answers: ["Federmäppchen", "Bleistift", "Schultasche", "Bleistiftspitzer"], correct: 0,
                    explanation: "Pencil case heißt Federmäppchen."
                },
                {
                    id: "enssk4l1_t4", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Open your books, please'?", answers: ["Öffnet bitte eure Bücher.", "Schließt bitte eure Bücher.", "Holt bitte eure Bücher.", "Lest bitte eure Bücher."], correct: 0,
                    explanation: "Open heißt öffnen."
                },
                {
                    id: "enssk4l1_t5", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Be quiet, please'?", answers: ["Seid bitte leise.", "Kommt bitte her.", "Setzt euch bitte.", "Steht bitte auf."], correct: 0,
                    explanation: "Quiet heißt leise oder still."
                },
                {
                    id: "enssk4l1_t6", category: "kurs_enss_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'desk'?", answers: ["Schreibtisch", "Tafel", "Schrank", "Stuhl"], correct: 0,
                    explanation: "Desk heißt Schreibtisch oder Schulbank."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enss_k4_l2", kurs: "schule_stadt_en_k4", order: 2, icon: "🕒",
        title: "Die Uhrzeit", kurz: "o'clock, half past, quarter to",
        erklaerung: {
            intro: "<b>What time is it?</b> heißt Wie spät ist es? Volle Stunde: <b>It's three o'clock.</b> Halbe Stunde: <b>half past three</b> = 3:30, auf Deutsch halb vier (Achtung!). Viertel: <b>quarter past three</b> = Viertel nach drei, <b>quarter to four</b> = Viertel vor vier.",
            beispiele: ["It's eight o'clock. – Es ist acht Uhr.",
                "It's half past seven. – Es ist halb acht.",
                "It's quarter to nine. – Es ist Viertel vor neun."],
            merksatz: "half past three ist 3:30 – auf Deutsch halb vier!"
        },
        uebung: {
            leicht: [
                {
                    id: "enssk4l2_l1", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'What time is it'?", answers: ["Wie spät ist es?", "Wie alt bist du?", "Wie viel kostet es?", "Welcher Tag ist heute?"], correct: 0,
                    explanation: "Time heißt Zeit – What time is it? heißt Wie spät ist es?"
                },
                {
                    id: "enssk4l2_l2", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "leicht", points: 10,
                    question: "Wie viel Uhr ist 'five o'clock'?", answers: ["5:00", "5:30", "4:30", "15:30"], correct: 0,
                    explanation: "O'clock heißt volle Stunde: 5 Uhr."
                },
                {
                    id: "enssk4l2_l3", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "leicht", points: 10,
                    question: "Wie viel Uhr ist 'ten o'clock'?", answers: ["10:00", "10:30", "9:30", "2:00"], correct: 0,
                    explanation: "Ten o'clock ist 10 Uhr."
                },
                {
                    id: "enssk4l2_l4", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'clock'?", answers: ["Uhr", "Glocke", "Kleid", "Schloss"], correct: 0,
                    explanation: "Clock heißt Uhr. Die Armbanduhr heißt watch."
                }
            ],
            mittel: [
                {
                    id: "enssk4l2_m1", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Wie viel Uhr ist 'half past three'?", answers: ["3:30", "2:30", "4:30", "3:15"], correct: 0,
                    explanation: "Half past three heißt halb nach drei – also 3:30."
                },
                {
                    id: "enssk4l2_m2", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Wie viel Uhr ist 'quarter past six'?", answers: ["6:15", "5:45", "6:45", "6:30"], correct: 0,
                    explanation: "Quarter past heißt Viertel nach: 6:15."
                },
                {
                    id: "enssk4l2_m3", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Wie sagst du 3:00 auf Englisch?", answers: ["It's three o'clock.", "It's half past three.", "It's quarter to three.", "It's three past."], correct: 0,
                    explanation: "Volle Stunde: o'clock."
                },
                {
                    id: "enssk4l2_m4", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Wie viel Uhr ist 'half past eight'?", answers: ["8:30", "7:30", "9:30", "8:15"], correct: 0,
                    explanation: "Half past eight ist 8:30 – auf Deutsch halb neun."
                }
            ],
            schwer: [
                {
                    id: "enssk4l2_s1", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "schwer", points: 10,
                    question: "Wie viel Uhr ist 'quarter to nine'?", answers: ["8:45", "9:15", "9:45", "8:15"], correct: 0,
                    explanation: "Quarter to nine heißt Viertel vor neun: 8:45."
                },
                {
                    id: "enssk4l2_s2", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "schwer", points: 10,
                    question: "Wie sagst du 'halb sieben' (6:30) auf Englisch?", answers: ["half past six", "half past seven", "half to seven", "quarter past six"], correct: 0,
                    explanation: "6:30 ist eine halbe Stunde nach sechs: half past six."
                },
                {
                    id: "enssk4l2_s3", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'School starts at eight o'clock'?", answers: ["Die Schule fängt um 8 Uhr an.", "Die Schule endet um 8 Uhr.", "Die Schule fängt um 7:30 an.", "Die Schule hat 8 Klassen."], correct: 0,
                    explanation: "Start heißt anfangen."
                },
                {
                    id: "enssk4l2_s4", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "schwer", points: 10,
                    question: "Wie viel Uhr ist 'quarter to twelve'?", answers: ["11:45", "12:15", "12:45", "11:15"], correct: 0,
                    explanation: "Viertel vor zwölf ist 11:45."
                }
            ]
        },
        test: [
                {
                    id: "enssk4l2_t1", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Wie viel Uhr ist 'seven o'clock'?", answers: ["7:00", "7:30", "6:30", "11:00"], correct: 0,
                    explanation: "Seven o'clock ist 7 Uhr."
                },
                {
                    id: "enssk4l2_t2", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Wie viel Uhr ist 'half past one'?", answers: ["1:30", "12:30", "2:30", "1:15"], correct: 0,
                    explanation: "Half past one ist 1:30 – halb zwei."
                },
                {
                    id: "enssk4l2_t3", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Wie viel Uhr ist 'quarter past ten'?", answers: ["10:15", "9:45", "10:45", "10:30"], correct: 0,
                    explanation: "Viertel nach zehn ist 10:15."
                },
                {
                    id: "enssk4l2_t4", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Wie sagst du 4:30 auf Englisch?", answers: ["half past four", "half past five", "half to five", "quarter to five"], correct: 0,
                    explanation: "4:30 ist half past four."
                },
                {
                    id: "enssk4l2_t5", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Wie viel Uhr ist 'quarter to three'?", answers: ["2:45", "3:15", "3:45", "2:15"], correct: 0,
                    explanation: "Viertel vor drei ist 2:45."
                },
                {
                    id: "enssk4l2_t6", category: "kurs_enss_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'It's late'?", answers: ["Es ist spät.", "Es ist früh.", "Es ist Zeit.", "Es ist laut."], correct: 0,
                    explanation: "Late heißt spät, early heißt früh."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enss_k4_l3", kurs: "schule_stadt_en_k4", order: 3, icon: "🗺️",
        title: "Den Weg beschreiben", kurz: "left, right, straight on …",
        erklaerung: {
            intro: "Nach dem Weg fragen: <b>Excuse me, where is the station?</b> Antworten: <b>Go straight on</b> (geradeaus), <b>turn left</b> (links abbiegen), <b>turn right</b> (rechts abbiegen), <b>go past</b> (vorbeigehen). Wo genau? <b>next to</b> (neben), <b>opposite</b> (gegenüber), <b>on the corner</b> (an der Ecke).",
            beispiele: ["Go straight on. – Geh geradeaus.",
                "Turn left at the church. – Bieg bei der Kirche links ab.",
                "The bank is opposite the park. – Die Bank ist gegenüber vom Park."],
            merksatz: "left = links, right = rechts, straight on = geradeaus."
        },
        uebung: {
            leicht: [
                {
                    id: "enssk4l3_l1", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Go straight on'?", answers: ["Geh geradeaus.", "Geh zurück.", "Bieg links ab.", "Bleib stehen."], correct: 0,
                    explanation: "Straight on heißt geradeaus."
                },
                {
                    id: "enssk4l3_l2", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'left'?", answers: ["links", "rechts", "oben", "letzte"], correct: 0,
                    explanation: "Left heißt links."
                },
                {
                    id: "enssk4l3_l3", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'rechts' auf Englisch?", answers: ["right", "left", "write", "straight"], correct: 0,
                    explanation: "Rechts heißt right. Write heißt schreiben – es klingt gleich!"
                },
                {
                    id: "enssk4l3_l4", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'opposite'?", answers: ["gegenüber", "neben", "hinter", "zwischen"], correct: 0,
                    explanation: "Opposite heißt gegenüber."
                }
            ],
            mittel: [
                {
                    id: "enssk4l3_m1", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Turn left at the church'?", answers: ["Bieg bei der Kirche links ab.", "Bieg bei der Kirche rechts ab.", "Geh bis zur Kirche.", "Die Kirche ist links."], correct: 0,
                    explanation: "Turn left heißt links abbiegen."
                },
                {
                    id: "enssk4l3_m2", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'on the corner'?", answers: ["an der Ecke", "in der Mitte", "am Ende", "auf dem Dach"], correct: 0,
                    explanation: "Corner heißt Ecke."
                },
                {
                    id: "enssk4l3_m3", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Wo ist der Bahnhof?' auf Englisch?", answers: ["Where is the station?", "Where are the station?", "What is the station?", "Where the station is?"], correct: 0,
                    explanation: "Wo heißt where, Bahnhof heißt station."
                },
                {
                    id: "enssk4l3_m4", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'traffic lights'?", answers: ["Ampel", "Verkehrsschild", "Straßenlaterne", "Zebrastreifen"], correct: 0,
                    explanation: "Traffic lights heißt Ampel."
                }
            ],
            schwer: [
                {
                    id: "enssk4l3_s1", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'The shop is next to the bank'?", answers: ["Der Laden ist neben der Bank.", "Der Laden ist in der Bank.", "Der Laden ist hinter der Bank.", "Der Laden ist vor der Bank."], correct: 0,
                    explanation: "Next to heißt neben."
                },
                {
                    id: "enssk4l3_s2", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'the second street'?", answers: ["die zweite Straße", "die nächste Straße", "die zweite Stunde", "die erste Straße"], correct: 0,
                    explanation: "Second heißt zweite, first heißt erste."
                },
                {
                    id: "enssk4l3_s3", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "schwer", points: 10,
                    question: "Wie sagst du 'Bieg rechts ab.' auf Englisch?", answers: ["Turn right.", "Turn left.", "Go right on.", "Turn write."], correct: 0,
                    explanation: "Rechts abbiegen heißt turn right."
                },
                {
                    id: "enssk4l3_s4", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Go past the cinema'?", answers: ["Geh am Kino vorbei.", "Geh ins Kino.", "Geh zum Kino zurück.", "Warte vor dem Kino."], correct: 0,
                    explanation: "Go past heißt vorbeigehen."
                }
            ]
        },
        test: [
                {
                    id: "enssk4l3_t1", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'straight on'?", answers: ["geradeaus", "rechts", "zurück", "um die Ecke"], correct: 0,
                    explanation: "Straight on heißt geradeaus."
                },
                {
                    id: "enssk4l3_t2", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'links' auf Englisch?", answers: ["left", "right", "light", "list"], correct: 0,
                    explanation: "Links heißt left."
                },
                {
                    id: "enssk4l3_t3", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'next to the bank'?", answers: ["neben der Bank", "in der Bank", "hinter der Bank", "gegenüber der Bank"], correct: 0,
                    explanation: "Next to heißt neben."
                },
                {
                    id: "enssk4l3_t4", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'map'?", answers: ["Landkarte", "Mappe", "Mütze", "Taschenlampe"], correct: 0,
                    explanation: "Map heißt Landkarte oder Stadtplan."
                },
                {
                    id: "enssk4l3_t5", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Where is the post office'?", answers: ["Wo ist die Post?", "Wo ist der Briefkasten?", "Wann kommt die Post?", "Wo ist das Büro?"], correct: 0,
                    explanation: "Post office heißt Post, das Postamt."
                },
                {
                    id: "enssk4l3_t6", category: "kurs_enss_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "school_town_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Geh geradeaus.' auf Englisch?", answers: ["Go straight on.", "Go straight back.", "Turn straight on.", "Go straight left."], correct: 0,
                    explanation: "Geradeaus heißt straight on."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enei_k4_l1", kurs: "einkaufen_en_k4", order: 1, icon: "🥦",
        title: "Lebensmittel", kurz: "potatoes, onions, grapes, rice …",
        erklaerung: {
            intro: "Obst (<b>fruit</b>) und Gemüse (<b>vegetables</b>): <b>potatoes</b> (Kartoffeln), <b>tomatoes</b>, <b>onions</b> (Zwiebeln), <b>peas</b> (Erbsen), <b>grapes</b> (Weintrauben), <b>cherries</b> (Kirschen), <b>lemons</b> (Zitronen). Außerdem: <b>meat</b> (Fleisch), <b>chicken</b> (Hähnchen), <b>rice</b> (Reis), <b>noodles</b> (Nudeln), <b>sausage</b> (Wurst).",
            beispiele: ["a kilo of potatoes – ein Kilo Kartoffeln",
                "some grapes – ein paar Weintrauben",
                "rice and chicken – Reis und Hähnchen"],
            merksatz: "Mehrzahl mit -es: potato → potatoes, tomato → tomatoes."
        },
        uebung: {
            leicht: [
                {
                    id: "eneik4l1_l1", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "leicht", points: 10,
                    question: "Was heißt 'potatoes'?", answers: ["Kartoffeln", "Tomaten", "Zwiebeln", "Paprikaschoten"], correct: 0,
                    explanation: "Potatoes heißt Kartoffeln."
                },
                {
                    id: "eneik4l1_l2", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "leicht", points: 10,
                    question: "🍇 Wie heißt das auf Englisch?", answers: ["grapes", "cherries", "plums", "lemons"], correct: 0,
                    explanation: "Weintrauben heißen grapes."
                },
                {
                    id: "eneik4l1_l3", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "leicht", points: 10,
                    question: "Was heißt 'meat'?", answers: ["Fleisch", "Milch", "Mehl", "Treffen"], correct: 0,
                    explanation: "Meat heißt Fleisch. Treffen heißt meet – klingt gleich!"
                },
                {
                    id: "eneik4l1_l4", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "leicht", points: 10,
                    question: "🍋 Wie heißt das auf Englisch?", answers: ["lemon", "melon", "lime", "orange"], correct: 0,
                    explanation: "Die Zitrone heißt lemon."
                }
            ],
            mittel: [
                {
                    id: "eneik4l1_m1", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Zwiebel' auf Englisch?", answers: ["onion", "garlic", "pepper", "union"], correct: 0,
                    explanation: "Zwiebel heißt onion. Garlic ist Knoblauch."
                },
                {
                    id: "eneik4l1_m2", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Nudeln' auf Englisch?", answers: ["noodles", "needles", "nuts", "nails"], correct: 0,
                    explanation: "Nudeln heißen noodles. Needles sind Nadeln!"
                },
                {
                    id: "eneik4l1_m3", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Mehrzahl von 'tomato'?", answers: ["tomatoes", "tomatos", "tomatoe", "tomates"], correct: 0,
                    explanation: "Tomato bekommt -es: tomatoes."
                },
                {
                    id: "eneik4l1_m4", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'sausage'?", answers: ["Wurst", "Soße", "Salat", "Suppe"], correct: 0,
                    explanation: "Sausage heißt Wurst."
                }
            ],
            schwer: [
                {
                    id: "eneik4l1_s1", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "schwer", points: 10,
                    question: "Was heißt 'peas'?", answers: ["Erbsen", "Birnen", "Pizza", "Bohnen"], correct: 0,
                    explanation: "Peas heißt Erbsen. Birnen heißen pears."
                },
                {
                    id: "eneik4l1_s2", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "schwer", points: 10,
                    question: "Was heißt 'a slice of bread'?", answers: ["eine Scheibe Brot", "ein Laib Brot", "ein Stück Kuchen", "ein Brötchen mit Butter"], correct: 0,
                    explanation: "Slice heißt Scheibe."
                },
                {
                    id: "eneik4l1_s3", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist KEIN Gemüse?", answers: ["cherry", "onion", "carrot", "potato"], correct: 0,
                    explanation: "Cherry, die Kirsche, ist Obst."
                },
                {
                    id: "eneik4l1_s4", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Wir brauchen Reis.' auf Englisch?", answers: ["We need rice.", "We need ice.", "We need rise.", "We needs rice."], correct: 0,
                    explanation: "Brauchen heißt need, Reis heißt rice."
                }
            ]
        },
        test: [
                {
                    id: "eneik4l1_t1", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'rice'?", answers: ["Reis", "Reise", "Rinde", "Erbse"], correct: 0,
                    explanation: "Rice heißt Reis."
                },
                {
                    id: "eneik4l1_t2", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Kirschen' auf Englisch?", answers: ["cherries", "churches", "cheeses", "chairs"], correct: 0,
                    explanation: "Kirschen heißen cherries. Churches sind Kirchen!"
                },
                {
                    id: "eneik4l1_t3", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Obst' auf Englisch?", answers: ["fruit", "food", "vegetables", "sweets"], correct: 0,
                    explanation: "Obst heißt fruit."
                },
                {
                    id: "eneik4l1_t4", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "🍅 Wie heißt das auf Englisch?", answers: ["tomato", "potato", "apple", "cherry"], correct: 0,
                    explanation: "Die Tomate heißt tomato."
                },
                {
                    id: "eneik4l1_t5", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'chicken' beim Essen?", answers: ["Hähnchen", "Küche", "Kirsche", "Käse"], correct: 0,
                    explanation: "Chicken heißt Huhn oder Hähnchen."
                },
                {
                    id: "eneik4l1_t6", category: "kurs_enei_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'some grapes'?", answers: ["ein paar Weintrauben", "eine Weintraube", "viele Weintrauben", "ein Glas Traubensaft"], correct: 0,
                    explanation: "Some heißt einige oder ein paar."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enei_k4_l2", kurs: "einkaufen_en_k4", order: 2, icon: "🛍️",
        title: "Im Laden", kurz: "How much is it? pounds und pence",
        erklaerung: {
            intro: "Im Laden: <b>Can I help you?</b> (Kann ich dir helfen?) – <b>I'd like two apples, please.</b> (Ich hätte gern zwei Äpfel.) – <b>How much is it?</b> (Wie viel kostet das?) – <b>It's two pounds.</b> In England zahlt man mit <b>pounds</b> (£) und <b>pence</b> (p). 100 pence sind 1 pound. <b>cheap</b> heißt billig, <b>expensive</b> heißt teuer.",
            beispiele: ["I'd like a pizza, please. – Ich hätte gern eine Pizza.",
                "How much are the bananas? – Was kosten die Bananen?",
                "That's cheap! – Das ist billig!"],
            merksatz: "How much is it? – It's … pounds. Here you are. – Thank you."
        },
        uebung: {
            leicht: [
                {
                    id: "eneik4l2_l1", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Can I help you'?", answers: ["Kann ich dir helfen?", "Kannst du mir helfen?", "Hilfst du mir?", "Brauchst du Geld?"], correct: 0,
                    explanation: "Help heißt helfen."
                },
                {
                    id: "eneik4l2_l2", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "leicht", points: 10,
                    question: "Was heißt 'shop assistant'?", answers: ["Verkäuferin", "Kundin", "Kassenbon", "Ladenbesitzer"], correct: 0,
                    explanation: "Shop assistant heißt Verkäuferin oder Verkäufer."
                },
                {
                    id: "eneik4l2_l3", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Wie viel kostet das?' auf Englisch?", answers: ["How much is it?", "How many is it?", "How old is it?", "What is it?"], correct: 0,
                    explanation: "Nach dem Preis fragt man How much is it?"
                },
                {
                    id: "eneik4l2_l4", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "leicht", points: 10,
                    question: "Wie viele 'pence' sind ein 'pound'?", answers: ["100", "10", "12", "1000"], correct: 0,
                    explanation: "100 pence sind 1 pound."
                }
            ],
            mittel: [
                {
                    id: "eneik4l2_m1", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I'd like two apples, please'?", answers: ["Ich hätte gern zwei Äpfel.", "Ich kann zwei Äpfel essen.", "Ich habe schon zwei Äpfel.", "Hast du zwei Äpfel für mich?"], correct: 0,
                    explanation: "I'd like heißt ich hätte gern."
                },
                {
                    id: "eneik4l2_m2", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Wie viel ist '£2.50'?", answers: ["2 Pfund 50 Pence", "25 Pfund", "2 Pfund 5 Pence", "250 Pfund"], correct: 0,
                    explanation: "£2.50 heißt zwei Pfund und 50 Pence. Im Englischen steht ein Punkt, wo wir ein Komma schreiben."
                },
                {
                    id: "eneik4l2_m3", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'It's too expensive'?", answers: ["Es ist zu teuer.", "Es ist sehr billig.", "Es ist zu groß.", "Es ist zu wenig."], correct: 0,
                    explanation: "Too heißt zu, expensive heißt teuer."
                },
                {
                    id: "eneik4l2_m4", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Here's your change'?", answers: ["Hier ist dein Wechselgeld.", "Hier ist deine Tüte.", "Das ändert sich hier.", "Hier ist dein Einkaufszettel."], correct: 0,
                    explanation: "Change heißt beim Bezahlen Wechselgeld."
                }
            ],
            schwer: [
                {
                    id: "eneik4l2_s1", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "schwer", points: 10,
                    question: "Was heißt 'How much are the bananas'?", answers: ["Was kosten die Bananen?", "Wie viele Bananen sind das?", "Wo sind die Bananen?", "Sind die Bananen reif?"], correct: 0,
                    explanation: "How much heißt wie viel – hier: was kosten."
                },
                {
                    id: "eneik4l2_s2", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Ich hätte gern ein Eis, bitte.' auf Englisch?", answers: ["I'd like an ice cream, please.", "I like an ice cream, please.", "I'd like a ice cream, please.", "I would an ice cream, please."], correct: 0,
                    explanation: "Ich hätte gern heißt I'd like. Vor ice steht an."
                },
                {
                    id: "eneik4l2_s3", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Have you got it in blue'?", answers: ["Haben Sie das auch in Blau?", "Haben Sie das auch in Grün?", "Ist das hier etwa blau?", "Malen Sie es bitte blau?"], correct: 0,
                    explanation: "Have you got heißt Haben Sie, in blue heißt in Blau."
                },
                {
                    id: "eneik4l2_s4", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "schwer", points: 10,
                    question: "Was heißt 'money'?", answers: ["Geld", "Montag", "Affe", "Münze"], correct: 0,
                    explanation: "Money heißt Geld. Der Affe heißt monkey!"
                }
            ]
        },
        test: [
                {
                    id: "eneik4l2_t1", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'customer'?", answers: ["Kunde", "Kostüm", "Kasse", "Zoll"], correct: 0,
                    explanation: "Customer heißt Kunde oder Kundin."
                },
                {
                    id: "eneik4l2_t2", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'shopping list'?", answers: ["Einkaufszettel", "Einkaufswagen", "Einkaufstasche", "Sonderangebot"], correct: 0,
                    explanation: "List heißt Liste – shopping list ist der Einkaufszettel."
                },
                {
                    id: "eneik4l2_t3", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Das ist billig.' auf Englisch?", answers: ["That's cheap.", "That's expensive.", "That's chip.", "That's cheaply."], correct: 0,
                    explanation: "Billig heißt cheap."
                },
                {
                    id: "eneik4l2_t4", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Wie viel ist '£1.20'?", answers: ["1 Pfund 20 Pence", "12 Pfund", "120 Pfund", "1 Pfund 2 Pence"], correct: 0,
                    explanation: "£1.20 heißt ein Pfund und 20 Pence."
                },
                {
                    id: "eneik4l2_t5", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'till' im Laden?", answers: ["Kasse", "Theke", "Regal", "Tür"], correct: 0,
                    explanation: "Till heißt in England die Kasse."
                },
                {
                    id: "eneik4l2_t6", category: "kurs_enei_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Can I pay, please'?", answers: ["Kann ich bitte zahlen?", "Kann ich bitte spielen?", "Kann ich bitte gehen?", "Darf ich bitte packen?"], correct: 0,
                    explanation: "Pay heißt bezahlen, play heißt spielen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enei_k4_l3", kurs: "einkaufen_en_k4", order: 3, icon: "🍽️",
        title: "Mahlzeiten", kurz: "breakfast, lunch, dinner",
        erklaerung: {
            intro: "Die Mahlzeiten (<b>meals</b>): <b>breakfast</b> (Frühstück), <b>lunch</b> (Mittagessen), <b>dinner</b> (Abendessen), <b>dessert</b> (Nachtisch). Höflich anbieten: <b>Would you like some tea?</b> (Möchtest du Tee?) – <b>Yes, please.</b> / <b>No, thank you.</b> Mengen: <b>a glass of</b>, <b>a cup of</b>, <b>a bottle of</b>, <b>a piece of</b>.",
            beispiele: ["a cup of tea – eine Tasse Tee",
                "a bottle of water – eine Flasche Wasser",
                "a piece of cake – ein Stück Kuchen"],
            merksatz: "Would you like …? – Yes, please. / No, thank you."
        },
        uebung: {
            leicht: [
                {
                    id: "eneik4l3_l1", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "leicht", points: 10,
                    question: "Was heißt 'lunch'?", answers: ["Mittagessen", "Frühstück", "Abendessen", "Nachtisch"], correct: 0,
                    explanation: "Lunch heißt Mittagessen."
                },
                {
                    id: "eneik4l3_l2", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Abendessen' auf Englisch?", answers: ["dinner", "lunch", "breakfast", "dessert"], correct: 0,
                    explanation: "Abendessen heißt dinner."
                },
                {
                    id: "eneik4l3_l3", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "leicht", points: 10,
                    question: "Was heißt 'a cup of tea'?", answers: ["eine Tasse Tee", "ein Glas Tee", "eine Kanne Tee", "ein Teebeutel"], correct: 0,
                    explanation: "Cup heißt Tasse."
                },
                {
                    id: "eneik4l3_l4", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Would you like some tea'?", answers: ["Möchtest du Tee?", "Magst du Tee?", "Hast du Tee?", "Kochst du Tee?"], correct: 0,
                    explanation: "Would you like heißt möchtest du – do you like heißt magst du."
                }
            ],
            mittel: [
                {
                    id: "eneik4l3_m1", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'a bottle of water'?", answers: ["eine Flasche Wasser", "ein Glas Wasser", "ein Becher Wasser", "ein Eimer voll Wasser"], correct: 0,
                    explanation: "Bottle heißt Flasche."
                },
                {
                    id: "eneik4l3_m2", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'a piece of cake'?", answers: ["ein Stück Kuchen", "ein ganzer Kuchen", "ein Kuchenteller", "eine Kuchengabel"], correct: 0,
                    explanation: "Piece heißt Stück."
                },
                {
                    id: "eneik4l3_m3", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Wie sagst du höflich Ja zu 'Would you like some juice?'", answers: ["Yes, please.", "Yes, I would like.", "Yes, I am.", "Yes, give me."], correct: 0,
                    explanation: "Höflich: Yes, please."
                },
                {
                    id: "eneik4l3_m4", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'dessert'?", answers: ["Nachtisch", "Wüste", "Frühstück", "Vorspeise"], correct: 0,
                    explanation: "Dessert heißt Nachtisch. Die Wüste heißt desert – mit einem s!"
                }
            ],
            schwer: [
                {
                    id: "eneik4l3_s1", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "schwer", points: 10,
                    question: "Was heißt 'What's for dinner'?", answers: ["Was gibt es zum Abendessen?", "Wann gibt es Abendessen?", "Wer kocht das Abendessen?", "Wo essen wir zu Abend?"], correct: 0,
                    explanation: "What's for dinner? heißt Was gibt es zum Abendessen?"
                },
                {
                    id: "eneik4l3_s2", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Ein Glas Milch, bitte.' auf Englisch?", answers: ["A glass of milk, please.", "A glass milk, please.", "A glass for milk, please.", "A glasses of milk, please."], correct: 0,
                    explanation: "Ein Glas Milch heißt a glass of milk – mit of."
                },
                {
                    id: "eneik4l3_s3", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "schwer", points: 10,
                    question: "Wie sagst du höflich Nein zu 'Would you like soup?'", answers: ["No, thank you.", "No, I don't want.", "No, I wouldn't like.", "Not, thanks."], correct: 0,
                    explanation: "Höflich: No, thank you."
                },
                {
                    id: "eneik4l3_s4", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "schwer", points: 10,
                    question: "Was heißt 'I'm full'?", answers: ["Ich bin satt.", "Ich bin hungrig.", "Ich bin fertig.", "Ich bin durstig."], correct: 0,
                    explanation: "I'm full heißt ich bin satt."
                }
            ]
        },
        test: [
                {
                    id: "eneik4l3_t1", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Frühstück' auf Englisch?", answers: ["breakfast", "lunch", "dinner", "supper"], correct: 0,
                    explanation: "Frühstück heißt breakfast."
                },
                {
                    id: "eneik4l3_t2", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'meal'?", answers: ["Mahlzeit", "Mehl", "Milch", "Meile"], correct: 0,
                    explanation: "Meal heißt Mahlzeit."
                },
                {
                    id: "eneik4l3_t3", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'a glass of orange juice'?", answers: ["ein Glas Orangensaft", "eine Orange im Glas", "ein Glas Orangen", "eine Flasche Saft"], correct: 0,
                    explanation: "Orange juice heißt Orangensaft."
                },
                {
                    id: "eneik4l3_t4", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Can I have some more, please'?", answers: ["Kann ich bitte noch was haben?", "Kann ich bitte weniger haben?", "Kann ich bitte gehen?", "Kann ich bitte mehr kochen?"], correct: 0,
                    explanation: "Some more heißt noch etwas."
                },
                {
                    id: "eneik4l3_t5", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'The soup is hot'?", answers: ["Die Suppe ist heiß.", "Die Suppe ist kalt.", "Die Seife ist heiß.", "Die Suppe ist lecker."], correct: 0,
                    explanation: "Soup heißt Suppe. Seife heißt soap!"
                },
                {
                    id: "eneik4l3_t6", category: "kurs_enei_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "shopping_food", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Enjoy your meal'?", answers: ["Guten Appetit!", "Gute Besserung!", "Viel Glück!", "Gute Reise!"], correct: 0,
                    explanation: "Enjoy your meal heißt Guten Appetit."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enkk_k4_l1", kurs: "koerper_kleidung_en_k4", order: 1, icon: "💪",
        title: "Körperteile", kurz: "neck, back, elbow, teeth …",
        erklaerung: {
            intro: "Körperteile: <b>head</b>, <b>neck</b> (Hals), <b>shoulders</b>, <b>arm</b>, <b>elbow</b> (Ellbogen), <b>hand</b>, <b>thumb</b> (Daumen), <b>back</b> (Rücken), <b>stomach</b> (Bauch), <b>leg</b> (Bein), <b>knee</b>, <b>ankle</b> (Knöchel), <b>foot</b> – Mehrzahl <b>feet</b>, <b>toe</b> (Zeh). Im Gesicht (<b>face</b>): <b>eyes, ears, nose, mouth, teeth</b> (Zähne), <b>tongue</b> (Zunge).",
            beispiele: ["I've got two arms. – Ich habe zwei Arme.",
                "Touch your knees! – Fass deine Knie an!",
                "Brush your teeth. – Putz deine Zähne."],
            merksatz: "one foot – two feet, one tooth – two teeth."
        },
        uebung: {
            leicht: [
                {
                    id: "enkkk4l1_l1", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'neck'?", answers: ["Hals", "Nase", "Knie", "Ecke"], correct: 0,
                    explanation: "Neck heißt Hals."
                },
                {
                    id: "enkkk4l1_l2", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'back' am Körper?", answers: ["Rücken", "Backe", "Bauch", "Bein"], correct: 0,
                    explanation: "Back heißt Rücken."
                },
                {
                    id: "enkkk4l1_l3", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Gesicht' auf Englisch?", answers: ["face", "foot", "fist", "feet"], correct: 0,
                    explanation: "Gesicht heißt face."
                },
                {
                    id: "enkkk4l1_l4", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'elbow'?", answers: ["Ellbogen", "Knöchel", "Schulter", "Handgelenk"], correct: 0,
                    explanation: "Elbow heißt Ellbogen."
                }
            ],
            mittel: [
                {
                    id: "enkkk4l1_m1", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'stomach'?", answers: ["Bauch", "Stamm", "Rücken", "Brust"], correct: 0,
                    explanation: "Stomach heißt Bauch oder Magen."
                },
                {
                    id: "enkkk4l1_m2", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Mehrzahl von 'foot'?", answers: ["feet", "foots", "feets", "foot"], correct: 0,
                    explanation: "Ein Fuß: foot – zwei Füße: feet."
                },
                {
                    id: "enkkk4l1_m3", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Mehrzahl von 'tooth'?", answers: ["teeth", "tooths", "teeths", "toothes"], correct: 0,
                    explanation: "Ein Zahn: tooth – viele Zähne: teeth."
                },
                {
                    id: "enkkk4l1_m4", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Zähne' auf Englisch?", answers: ["teeth", "toes", "tongue", "tooth"], correct: 0,
                    explanation: "Zähne heißen teeth. Tooth ist nur ein Zahn."
                }
            ],
            schwer: [
                {
                    id: "enkkk4l1_s1", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'ankle'?", answers: ["Knöchel", "Onkel", "Knie", "Ferse"], correct: 0,
                    explanation: "Ankle heißt Knöchel. Onkel heißt uncle!"
                },
                {
                    id: "enkkk4l1_s2", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Wash your hands'?", answers: ["Wasch deine Hände.", "Wasch dein Gesicht.", "Heb deine Hände.", "Zeig deine Hände."], correct: 0,
                    explanation: "Wash heißt waschen."
                },
                {
                    id: "enkkk4l1_s3", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Daumen' auf Englisch?", answers: ["thumb", "finger", "toe", "thump"], correct: 0,
                    explanation: "Daumen heißt thumb. Das b spricht man nicht."
                },
                {
                    id: "enkkk4l1_s4", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Ich habe kalte Füße.' auf Englisch?", answers: ["I've got cold feet.", "I've got cold foot.", "I've got cold foots.", "I'm cold feet."], correct: 0,
                    explanation: "Mehrere Füße: feet."
                }
            ]
        },
        test: [
                {
                    id: "enkkk4l1_t1", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Hals' auf Englisch?", answers: ["neck", "nose", "knee", "nail"], correct: 0,
                    explanation: "Hals heißt neck."
                },
                {
                    id: "enkkk4l1_t2", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Bein' auf Englisch?", answers: ["leg", "arm", "bone", "back"], correct: 0,
                    explanation: "Bein heißt leg. Bone ist ein Knochen."
                },
                {
                    id: "enkkk4l1_t3", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Rücken' auf Englisch?", answers: ["back", "black", "neck", "belly"], correct: 0,
                    explanation: "Rücken heißt back."
                },
                {
                    id: "enkkk4l1_t4", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Brush your teeth'?", answers: ["Putz deine Zähne.", "Zeig deine Zähne.", "Zähl deine Zähne.", "Putz deine Schuhe."], correct: 0,
                    explanation: "Brush heißt bürsten oder putzen."
                },
                {
                    id: "enkkk4l1_t5", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'tongue'?", answers: ["Zunge", "Zange", "Zehe", "Zahn"], correct: 0,
                    explanation: "Tongue heißt Zunge."
                },
                {
                    id: "enkkk4l1_t6", category: "kurs_enkk_k4_l1", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Wie heißt die Mehrzahl von 'knee'?", answers: ["knees", "kneees", "knee's", "kneeys"], correct: 0,
                    explanation: "Einfach ein s anhängen: knees."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enkk_k4_l2", kurs: "koerper_kleidung_en_k4", order: 2, icon: "🤒",
        title: "Krank sein", kurz: "headache, a cold, my leg hurts",
        erklaerung: {
            intro: "Wenn es dir nicht gut geht: <b>I'm ill</b> (ich bin krank). <b>What's the matter?</b> (Was ist los?) – <b>I've got a headache</b> (Kopfschmerzen), <b>a stomach ache</b> (Bauchschmerzen), <b>toothache</b> (Zahnschmerzen), <b>a sore throat</b> (Halsschmerzen), <b>a cold</b> (eine Erkältung), <b>a temperature</b> (Fieber). Oder: <b>My leg hurts.</b> (Mein Bein tut weh.)",
            beispiele: ["I've got a headache. – Ich habe Kopfschmerzen.",
                "My arm hurts. – Mein Arm tut weh.",
                "Get well soon! – Gute Besserung!"],
            merksatz: "head + ache = headache. My … hurts = Mein … tut weh."
        },
        uebung: {
            leicht: [
                {
                    id: "enkkk4l2_l1", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'headache'?", answers: ["Kopfschmerzen", "Bauchschmerzen", "Zahnschmerzen", "Halsschmerzen"], correct: 0,
                    explanation: "Head heißt Kopf, ache heißt Schmerz."
                },
                {
                    id: "enkkk4l2_l2", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'I'm ill'?", answers: ["Ich bin krank.", "Ich bin müde.", "Ich bin froh.", "Ich bin allein."], correct: 0,
                    explanation: "Ill heißt krank."
                },
                {
                    id: "enkkk4l2_l3", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'doctor'?", answers: ["Ärztin oder Arzt", "Krankenschwester", "Apotheker", "Patient"], correct: 0,
                    explanation: "Doctor heißt Ärztin oder Arzt."
                },
                {
                    id: "enkkk4l2_l4", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'My leg hurts'?", answers: ["Mein Bein tut weh.", "Mein Bein ist kurz.", "Mein Bein ist kalt.", "Ich habe kein Bein."], correct: 0,
                    explanation: "Hurts heißt tut weh."
                }
            ],
            mittel: [
                {
                    id: "enkkk4l2_m1", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'What's the matter'?", answers: ["Was ist los?", "Was ist das?", "Wie spät ist es?", "Was ist Materie?"], correct: 0,
                    explanation: "What's the matter? heißt Was ist los?"
                },
                {
                    id: "enkkk4l2_m2", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Bauchschmerzen' auf Englisch?", answers: ["stomach ache", "back ache", "headache", "stomach"], correct: 0,
                    explanation: "Bauch heißt stomach, Schmerz heißt ache."
                },
                {
                    id: "enkkk4l2_m3", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'a cold' beim Kranksein?", answers: ["eine Erkältung", "ein kalter Tag", "ein Kühlschrank", "ein Eiswürfel"], correct: 0,
                    explanation: "A cold heißt eine Erkältung."
                },
                {
                    id: "enkkk4l2_m4", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Get well soon'?", answers: ["Gute Besserung!", "Bis bald!", "Viel Glück!", "Komm gut nach Hause!"], correct: 0,
                    explanation: "Get well soon heißt Gute Besserung."
                }
            ],
            schwer: [
                {
                    id: "enkkk4l2_s1", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Ich habe Zahnschmerzen.' auf Englisch?", answers: ["I've got toothache.", "I've got teethache.", "I've got a tooth.", "I'm toothache."], correct: 0,
                    explanation: "Zahnschmerzen heißt toothache."
                },
                {
                    id: "enkkk4l2_s2", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'I've got a temperature'?", answers: ["Ich habe Fieber.", "Ich habe ein Thermometer.", "Mir ist sehr kalt.", "Ich habe Zeit."], correct: 0,
                    explanation: "A temperature heißt hier Fieber."
                },
                {
                    id: "enkkk4l2_s3", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'My eyes hurt'?", answers: ["Meine Augen tun weh.", "Meine Ohren tun weh.", "Meine Augen sind müde.", "Mein Auge ist rot."], correct: 0,
                    explanation: "Eyes heißt Augen, hurt heißt wehtun."
                },
                {
                    id: "enkkk4l2_s4", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Stay in bed'?", answers: ["Bleib im Bett.", "Geh ins Bett.", "Steh auf.", "Mach dein Bett."], correct: 0,
                    explanation: "Stay heißt bleiben."
                }
            ]
        },
        test: [
                {
                    id: "enkkk4l2_t1", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'toothache'?", answers: ["Zahnschmerzen", "Zahnbürste", "Zahnarzt", "Zehenschmerzen"], correct: 0,
                    explanation: "Tooth heißt Zahn, ache heißt Schmerz."
                },
                {
                    id: "enkkk4l2_t2", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Ich bin krank.' auf Englisch?", answers: ["I'm ill.", "I'm well.", "I'm tall.", "I'm all."], correct: 0,
                    explanation: "Krank heißt ill. Well heißt gesund."
                },
                {
                    id: "enkkk4l2_t3", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'My head hurts'?", answers: ["Mein Kopf tut weh.", "Mein Kopf ist heiß.", "Mein Hut tut weh.", "Mein Haus ist weit."], correct: 0,
                    explanation: "Head heißt Kopf."
                },
                {
                    id: "enkkk4l2_t4", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'medicine'?", answers: ["Medizin", "Mittag", "Melone", "Messer"], correct: 0,
                    explanation: "Medicine heißt Medizin."
                },
                {
                    id: "enkkk4l2_t5", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Halsschmerzen' auf Englisch?", answers: ["a sore throat", "a sore knee", "a headache", "a throat"], correct: 0,
                    explanation: "Halsschmerzen heißt a sore throat. Throat ist der Hals innen, neck der Hals außen."
                },
                {
                    id: "enkkk4l2_t6", category: "kurs_enkk_k4_l2", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I feel better'?", answers: ["Mir geht es besser.", "Mir geht es schlechter.", "Ich bin besser als du.", "Ich fühle mich krank."], correct: 0,
                    explanation: "Better heißt besser."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enkk_k4_l3", kurs: "koerper_kleidung_en_k4", order: 3, icon: "🧣",
        title: "Kleidung für jedes Wetter", kurz: "coat, scarf, gloves, put on",
        erklaerung: {
            intro: "Bei Kälte trägst du (<b>wear</b>): <b>coat</b> (Mantel), <b>scarf</b> (Schal), <b>gloves</b> (Handschuhe), <b>boots</b> (Stiefel), <b>woolly hat</b> (Wollmütze). Bei Regen: <b>raincoat</b>. Bei Sonne: <b>shorts</b>, <b>sunglasses</b> (Sonnenbrille), <b>sandals</b>, <b>sun hat</b>. Anziehen heißt <b>put on</b>, ausziehen <b>take off</b>.",
            beispiele: ["I'm wearing a scarf. – Ich trage einen Schal.",
                "Put on your gloves! – Zieh deine Handschuhe an!",
                "Take off your shoes, please. – Zieh bitte die Schuhe aus."],
            merksatz: "It's cold – put on your coat! It's hot – take off your jumper!"
        },
        uebung: {
            leicht: [
                {
                    id: "enkkk4l3_l1", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "leicht", points: 10,
                    question: "🧤 Wie heißt das auf Englisch?", answers: ["gloves", "socks", "boots", "slippers"], correct: 0,
                    explanation: "Handschuhe heißen gloves."
                },
                {
                    id: "enkkk4l3_l2", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'coat'?", answers: ["Mantel", "Mütze", "Kragen", "Gürtel"], correct: 0,
                    explanation: "Coat heißt Mantel."
                },
                {
                    id: "enkkk4l3_l3", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "leicht", points: 10,
                    question: "🧣 Wie heißt das auf Englisch?", answers: ["scarf", "scar", "skirt", "shirt"], correct: 0,
                    explanation: "Der Schal heißt scarf."
                },
                {
                    id: "enkkk4l3_l4", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "leicht", points: 10,
                    question: "Was heißt 'sunglasses'?", answers: ["Sonnenbrille", "Sonnencreme", "Sonnenhut", "Sonnenschirm"], correct: 0,
                    explanation: "Glasses heißt Brille – sunglasses ist die Sonnenbrille."
                }
            ],
            mittel: [
                {
                    id: "enkkk4l3_m1", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'boots'?", answers: ["Stiefel", "Boote", "Socken", "Sandalen"], correct: 0,
                    explanation: "Boots heißt Stiefel. Boote heißen boats."
                },
                {
                    id: "enkkk4l3_m2", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'put on'?", answers: ["anziehen", "ausziehen", "hinlegen", "aufräumen"], correct: 0,
                    explanation: "Put on heißt anziehen."
                },
                {
                    id: "enkkk4l3_m3", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Take off your shoes'?", answers: ["Zieh deine Schuhe aus.", "Zieh deine Schuhe an.", "Nimm deine Schuhe mit.", "Putz deine Schuhe."], correct: 0,
                    explanation: "Take off heißt ausziehen."
                },
                {
                    id: "enkkk4l3_m4", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Handschuhe' auf Englisch?", answers: ["gloves", "hand shoes", "handbags", "glasses"], correct: 0,
                    explanation: "Handschuhe heißen gloves – nicht hand shoes!"
                }
            ],
            schwer: [
                {
                    id: "enkkk4l3_s1", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "schwer", points: 10,
                    question: "Was ziehst du bei Regen an? (Englisch)", answers: ["a raincoat", "sunglasses", "sandals", "shorts"], correct: 0,
                    explanation: "Bei Regen hilft ein raincoat."
                },
                {
                    id: "enkkk4l3_s2", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Cold! Put on your coat'?", answers: ["Kalt! Zieh den Mantel an.", "Kalt! Zieh den Mantel aus.", "Heiß! Zieh den Mantel aus.", "Kalt! Hol den Mantel."], correct: 0,
                    explanation: "Put on heißt anziehen."
                },
                {
                    id: "enkkk4l3_s3", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["She is wearing a red scarf.", "She is wearing a scarf red.", "She wearing a red scarf.", "She is wear a red scarf."], correct: 0,
                    explanation: "She is wearing …, und die Farbe steht vor dem Nomen."
                },
                {
                    id: "enkkk4l3_s4", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Wollmütze' auf Englisch?", answers: ["woolly hat", "sun hat", "wool jumper", "hat stand"], correct: 0,
                    explanation: "Wollmütze heißt woolly hat."
                }
            ]
        },
        test: [
                {
                    id: "enkkk4l3_t1", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'scarf'?", answers: ["Schal", "scharf", "Schaf", "Schirm"], correct: 0,
                    explanation: "Scarf heißt Schal."
                },
                {
                    id: "enkkk4l3_t2", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "🧥 Wie heißt das auf Englisch?", answers: ["coat", "cat", "dress", "T-shirt"], correct: 0,
                    explanation: "Der Mantel heißt coat."
                },
                {
                    id: "enkkk4l3_t3", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Stiefel' auf Englisch?", answers: ["boots", "boats", "shoes", "socks"], correct: 0,
                    explanation: "Stiefel heißen boots."
                },
                {
                    id: "enkkk4l3_t4", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was setzt du bei Sonne auf? (Englisch)", answers: ["a sun hat", "a woolly hat", "a scarf", "a raincoat"], correct: 0,
                    explanation: "Gegen die Sonne hilft ein sun hat."
                },
                {
                    id: "enkkk4l3_t5", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Zieh deine Jacke aus!' auf Englisch?", answers: ["Take off your jacket!", "Put on your jacket!", "Take your jacket!", "Off take your jacket!"], correct: 0,
                    explanation: "Ausziehen heißt take off."
                },
                {
                    id: "enkkk4l3_t6", category: "kurs_enkk_k4_l3", area: "schule", grade: 4,
                    subject: "englisch", topic: "body_clothes_k4", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I'm wearing jeans'?", answers: ["Ich trage Jeans.", "Ich kaufe Jeans.", "Ich wasche Jeans.", "Ich mag Jeans."], correct: 0,
                    explanation: "Wear heißt tragen."
                }
        ],
        bestehenAb: 0.75
    }
    ];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) {
        extraKurse.forEach(function (k) {
            if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k);
        });
    }
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) {
            if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l);
        });
    }
    if (typeof window !== "undefined") {
        window.ENGLISCH_K4_KURSE = extraKurse;
        window.ENGLISCH_K4_LEKTIONEN = extraLektionen;
    }
})();
