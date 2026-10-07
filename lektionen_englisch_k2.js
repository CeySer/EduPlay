// Englisch Klasse 2 - Begruessen, Farben und Zahlen, Tiere, Familie/Schule/Koerper
// 4 Kurse mit je 3 Lektionen - erzeugt aus /tmp/en2/d1..d4.js.
// Englische Woerter stehen in 'einfachen Anfuehrungszeichen' und werden englisch vorgelesen;
// bei 'auf Englisch' ist das Zitat deutsch und die Antworten werden englisch vorgelesen.
// Die Themen (topic) entsprechen genau den Wissensfragen derselben Klasse, damit
// die Kurs-Empfehlung aus dem Wissen-Modus den passenden Kurs findet.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "hallo_en_k2", title: "Hallo auf Englisch", icon: "👋", grade: 2, subject: "englisch", beschreibung: "Begrüßen, verabschieden, nach dem Namen fragen, bitte und danke sagen." },
        { id: "farben_zahlen_en_k2", title: "Farben und Zahlen auf Englisch", icon: "🎨", grade: 2, subject: "englisch", beschreibung: "Die wichtigsten Farben und die Zahlen von 1 bis 20 auf Englisch." },
        { id: "tiere_en_k2", title: "Tiere auf Englisch", icon: "🐶", grade: 2, subject: "englisch", beschreibung: "Haustiere, Bauernhof und Zoo – Tiernamen auf Englisch." },
        { id: "familie_schule_en_k2", title: "Familie, Schule, Körper", icon: "🎒", grade: 2, subject: "englisch", beschreibung: "Familie, Schulsachen und Körperteile auf Englisch." }
    ];
    const extraLektionen = [
    {
        id: "engr_k2_l1", kurs: "hallo_en_k2", order: 1, icon: "👋",
        title: "Hello und Goodbye", kurz: "Begrüßen und verabschieden",
        erklaerung: {
            intro: "Zur Begrüßung sagst du auf Englisch <b>Hello</b> oder <b>Hi</b>. Zum Abschied sagst du <b>Goodbye</b> oder <b>Bye</b>. Morgens sagst du <b>Good morning</b>, abends <b>Good evening</b> und vor dem Schlafen <b>Good night</b>.",
            beispiele: ["Hello, Tom! – Hallo, Tom!",
                "Bye, Mia! – Tschüss, Mia!",
                "Good morning! – Guten Morgen!"],
            merksatz: "Hello = Hallo. Goodbye = Tschüss. Good morning = Guten Morgen. Good night = Gute Nacht."
        },
        uebung: {
            leicht: [
                {
                    id: "engrk2l1_l1", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Hello'?", answers: ["Hallo", "Danke", "Bitte", "Tschüss"], correct: 0,
                    explanation: "Hello heißt Hallo."
                },
                {
                    id: "engrk2l1_l2", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Goodbye'?", answers: ["Tschüss", "Hallo", "Guten Tag", "Danke"], correct: 0,
                    explanation: "Goodbye sagst du zum Abschied: Tschüss!"
                },
                {
                    id: "engrk2l1_l3", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Good morning'?", answers: ["Guten Morgen", "Gute Nacht", "Guten Appetit", "Auf Wiedersehen"], correct: 0,
                    explanation: "Morning ist der Morgen – Good morning heißt Guten Morgen."
                },
                {
                    id: "engrk2l1_l4", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Good night'?", answers: ["Gute Nacht", "Guten Morgen", "Guten Tag", "Bis morgen"], correct: 0,
                    explanation: "Night ist die Nacht – Good night heißt Gute Nacht."
                }
            ],
            mittel: [
                {
                    id: "engrk2l1_m1", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Wie sagst du 'Hallo' auf Englisch?", answers: ["Hello", "Thanks", "Sorry", "Please"], correct: 0,
                    explanation: "Hallo heißt auf Englisch Hello."
                },
                {
                    id: "engrk2l1_m2", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Wie sagst du 'Tschüss' auf Englisch?", answers: ["Bye", "Yes", "Hi", "Sorry"], correct: 0,
                    explanation: "Tschüss heißt Bye oder Goodbye."
                },
                {
                    id: "engrk2l1_m3", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Was sagst du morgens auf Englisch?", answers: ["Good morning", "Good night", "Good afternoon", "Thank you"], correct: 0,
                    explanation: "Am Morgen sagst du Good morning."
                },
                {
                    id: "engrk2l1_m4", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Was sagst du vor dem Schlafen auf Englisch?", answers: ["Good night", "Good morning", "Hello", "Thank you"], correct: 0,
                    explanation: "Vor dem Schlafen sagst du Good night."
                }
            ],
            schwer: [
                {
                    id: "engrk2l1_s1", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Hi'?", answers: ["Hallo", "Tschüss", "Danke", "Bitte"], correct: 0,
                    explanation: "Hi ist ein kurzes Hallo."
                },
                {
                    id: "engrk2l1_s2", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'See you'?", answers: ["Bis bald", "Guten Tag", "Wie geht's?", "Danke sehr"], correct: 0,
                    explanation: "See you heißt Bis bald – man sieht sich wieder."
                },
                {
                    id: "engrk2l1_s3", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Good afternoon'?", answers: ["Guten Tag", "Gute Nacht", "Guten Morgen", "Auf Wiedersehen"], correct: 0,
                    explanation: "Good afternoon sagt man am Nachmittag – so wie Guten Tag."
                },
                {
                    id: "engrk2l1_s4", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "schwer", points: 10,
                    question: "Wie heißt 'Guten Abend' auf Englisch?", answers: ["Good evening", "Good night", "Good morning", "Goodbye"], correct: 0,
                    explanation: "Evening ist der Abend – Good evening heißt Guten Abend."
                }
            ]
        },
        test: [
                {
                    id: "engrk2l1_t1", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Gute Nacht' auf Englisch?", answers: ["Good night", "Good morning", "Good evening", "Goodbye"], correct: 0,
                    explanation: "Gute Nacht heißt Good night."
                },
                {
                    id: "engrk2l1_t2", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Bye'?", answers: ["Tschüss", "Hallo", "Bitte", "Guten Tag"], correct: 0,
                    explanation: "Bye ist ein kurzes Goodbye – Tschüss!"
                },
                {
                    id: "engrk2l1_t3", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Guten Morgen' auf Englisch?", answers: ["Good morning", "Good night", "Good evening", "Good luck"], correct: 0,
                    explanation: "Guten Morgen heißt Good morning."
                },
                {
                    id: "engrk2l1_t4", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Du kommst in die Klasse. Was sagst du auf Englisch?", answers: ["Hello!", "Goodbye!", "Good night!", "Sorry!"], correct: 0,
                    explanation: "Zur Begrüßung sagst du Hello!"
                },
                {
                    id: "engrk2l1_t5", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Du gehst nach Hause. Was sagst du auf Englisch?", answers: ["Goodbye!", "Hello!", "Good morning!", "Please!"], correct: 0,
                    explanation: "Zum Abschied sagst du Goodbye!"
                },
                {
                    id: "engrk2l1_t6", category: "kurs_engr_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Hello, Tom'?", answers: ["Hallo, Tom", "Tschüss, Tom", "Danke, Tom", "Bitte, Tom"], correct: 0,
                    explanation: "Hello, Tom heißt Hallo, Tom."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "engr_k2_l2", kurs: "hallo_en_k2", order: 2, icon: "🙂",
        title: "Name und wie es dir geht", kurz: "What's your name? How are you?",
        erklaerung: {
            intro: "Mit <b>What's your name?</b> fragst du nach dem Namen. Du antwortest: <b>My name is …</b> oder <b>I'm …</b>. Mit <b>How are you?</b> fragst du, wie es jemandem geht. Du antwortest zum Beispiel: <b>I'm fine, thank you.</b>",
            beispiele: ["What's your name? – Wie heißt du?",
                "My name is Ben. – Ich heiße Ben.",
                "How are you? – Wie geht es dir?"],
            merksatz: "What's your name? – My name is Lea. How are you? – I'm fine, thank you."
        },
        uebung: {
            leicht: [
                {
                    id: "engrk2l2_l1", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'What's your name'?", answers: ["Wie heißt du?", "Wie alt bist du?", "Wo wohnst du?", "Wie geht es dir?"], correct: 0,
                    explanation: "Name ist der Name – What's your name? heißt Wie heißt du?"
                },
                {
                    id: "engrk2l2_l2", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'How are you'?", answers: ["Wie geht es dir?", "Wie heißt du?", "Wie alt bist du?", "Wo bist du?"], correct: 0,
                    explanation: "How are you? heißt Wie geht es dir?"
                },
                {
                    id: "engrk2l2_l3", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'I'm fine'?", answers: ["Mir geht es gut.", "Ich bin müde.", "Ich bin traurig.", "Ich bin hier."], correct: 0,
                    explanation: "I'm fine heißt Mir geht es gut."
                },
                {
                    id: "engrk2l2_l4", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'My name is Ben'?", answers: ["Ich heiße Ben.", "Ben ist mein Freund.", "Ich mag Ben.", "Wo ist Ben?"], correct: 0,
                    explanation: "My name is … heißt Ich heiße …"
                }
            ],
            mittel: [
                {
                    id: "engrk2l2_m1", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Wie fragst du 'Wie heißt du?' auf Englisch?", answers: ["What's your name?", "How are you?", "What's your colour?", "Where are you from?"], correct: 0,
                    explanation: "Nach dem Namen fragst du: What's your name?"
                },
                {
                    id: "engrk2l2_m2", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Wie fragst du 'Wie geht es dir?' auf Englisch?", answers: ["How are you?", "What's your name?", "How old are you?", "Who are you?"], correct: 0,
                    explanation: "Wie es jemandem geht, fragst du mit How are you?"
                },
                {
                    id: "engrk2l2_m3", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Wie sagst du 'Ich heiße Lea.' auf Englisch?", answers: ["My name is Lea.", "I like Lea.", "Lea is my friend.", "Where is Lea?"], correct: 0,
                    explanation: "Ich heiße Lea heißt My name is Lea."
                },
                {
                    id: "engrk2l2_m4", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I'm sad'?", answers: ["Ich bin traurig.", "Ich bin wütend.", "Ich bin glücklich.", "Ich bin müde."], correct: 0,
                    explanation: "Sad heißt traurig."
                }
            ],
            schwer: [
                {
                    id: "engrk2l2_s1", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'How old are you'?", answers: ["Wie alt bist du?", "Wie heißt du?", "Wie geht es dir?", "Wo wohnst du?"], correct: 0,
                    explanation: "Old heißt alt – How old are you? heißt Wie alt bist du?"
                },
                {
                    id: "engrk2l2_s2", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "schwer", points: 10,
                    question: "Wie sagst du 'Ich bin sieben.' auf Englisch?", answers: ["I'm seven.", "I'm eight.", "I'm fine.", "I'm seventeen."], correct: 0,
                    explanation: "Sieben heißt seven – I'm seven."
                },
                {
                    id: "engrk2l2_s3", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'I'm happy'?", answers: ["Ich bin froh.", "Ich bin müde.", "Ich bin traurig.", "Ich habe Hunger."], correct: 0,
                    explanation: "Happy heißt froh oder glücklich."
                },
                {
                    id: "engrk2l2_s4", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'I'm tired'?", answers: ["Ich bin müde.", "Ich bin froh.", "Ich bin krank.", "Ich bin wach."], correct: 0,
                    explanation: "Tired heißt müde."
                }
            ]
        },
        test: [
                {
                    id: "engrk2l2_t1", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I'm Mia'?", answers: ["Ich bin Mia.", "Ich mag Mia.", "Mia ist müde.", "Wo ist Mia?"], correct: 0,
                    explanation: "I'm Mia heißt Ich bin Mia."
                },
                {
                    id: "engrk2l2_t2", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Wie fragst du 'Wie alt bist du?' auf Englisch?", answers: ["How old are you?", "How are you?", "What's your name?", "Where are you?"], correct: 0,
                    explanation: "Nach dem Alter fragst du: How old are you?"
                },
                {
                    id: "engrk2l2_t3", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Wie sagst du 'Mir geht es gut.' auf Englisch?", answers: ["I'm fine.", "I'm sad.", "I'm seven.", "I'm tired."], correct: 0,
                    explanation: "Mir geht es gut heißt I'm fine."
                },
                {
                    id: "engrk2l2_t4", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I'm fine, thank you'?", answers: ["Mir geht es gut, danke.", "Ich bin müde, danke.", "Ich bin sieben, danke.", "Ich bin nicht da, danke."], correct: 0,
                    explanation: "I'm fine, thank you heißt Mir geht es gut, danke."
                },
                {
                    id: "engrk2l2_t5", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Wie sagst du 'Ich bin froh.' auf Englisch?", answers: ["I'm happy.", "I'm sad.", "I'm tired.", "I'm hungry."], correct: 0,
                    explanation: "Froh heißt happy – I'm happy."
                },
                {
                    id: "engrk2l2_t6", category: "kurs_engr_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I'm hungry'?", answers: ["Ich habe Hunger.", "Ich habe Durst.", "Ich bin müde.", "Ich bin traurig."], correct: 0,
                    explanation: "Hungry heißt hungrig – I'm hungry heißt Ich habe Hunger."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "engr_k2_l3", kurs: "hallo_en_k2", order: 3, icon: "🙏",
        title: "Bitte, danke, sorry", kurz: "Please, thank you, sorry, yes, no",
        erklaerung: {
            intro: "<b>Please</b> heißt bitte. <b>Thank you</b> oder kurz <b>Thanks</b> heißt danke. Wenn dir etwas leidtut, sagst du <b>Sorry</b>. <b>Yes</b> heißt ja, <b>no</b> heißt nein.",
            beispiele: ["An apple, please. – Einen Apfel, bitte.",
                "Thank you! – Danke!",
                "I'm sorry. – Es tut mir leid."],
            merksatz: "Please = bitte. Thank you = danke. Sorry = Entschuldigung. Yes = ja, no = nein."
        },
        uebung: {
            leicht: [
                {
                    id: "engrk2l3_l1", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'please'?", answers: ["bitte", "danke", "ja", "nein"], correct: 0,
                    explanation: "Please heißt bitte."
                },
                {
                    id: "engrk2l3_l2", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Thank you'?", answers: ["Danke", "Bitte", "Hallo", "Tschüss"], correct: 0,
                    explanation: "Thank you heißt danke."
                },
                {
                    id: "engrk2l3_l3", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'yes'?", answers: ["ja", "nein", "vielleicht", "bitte"], correct: 0,
                    explanation: "Yes heißt ja."
                },
                {
                    id: "engrk2l3_l4", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'no'?", answers: ["nein", "ja", "danke", "hallo"], correct: 0,
                    explanation: "No heißt nein."
                }
            ],
            mittel: [
                {
                    id: "engrk2l3_m1", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Wie sagst du 'danke' auf Englisch?", answers: ["Thank you", "Please", "Sorry", "Good night"], correct: 0,
                    explanation: "Danke heißt Thank you."
                },
                {
                    id: "engrk2l3_m2", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Wie sagst du 'bitte' auf Englisch?", answers: ["please", "thanks", "sorry", "hello"], correct: 0,
                    explanation: "Bitte heißt please."
                },
                {
                    id: "engrk2l3_m3", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'sorry'?", answers: ["Entschuldigung", "Danke schön", "Bitte sehr", "Auf Wiedersehen"], correct: 0,
                    explanation: "Sorry sagst du, wenn dir etwas leidtut: Entschuldigung."
                },
                {
                    id: "engrk2l3_m4", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I'm sorry'?", answers: ["Es tut mir leid.", "Ich bin froh.", "Ich bin müde.", "Ich habe Hunger."], correct: 0,
                    explanation: "I'm sorry heißt Es tut mir leid."
                }
            ],
            schwer: [
                {
                    id: "engrk2l3_s1", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Thanks'?", answers: ["Danke", "Bitte", "Nein", "Hallo"], correct: 0,
                    explanation: "Thanks ist ein kurzes Thank you – danke."
                },
                {
                    id: "engrk2l3_s2", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'You're welcome'?", answers: ["Gern geschehen", "Herzlich willkommen", "Danke schön", "Bis bald"], correct: 0,
                    explanation: "Auf Thank you antwortest du You're welcome – gern geschehen."
                },
                {
                    id: "engrk2l3_s3", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Excuse me'?", answers: ["Entschuldigung", "Gern geschehen", "Guten Appetit", "Bis morgen"], correct: 0,
                    explanation: "Excuse me sagst du, wenn du jemanden ansprichst oder vorbei möchtest."
                },
                {
                    id: "engrk2l3_s4", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Yes, please'?", answers: ["Ja, bitte.", "Nein, danke.", "Ja, danke.", "Nein, bitte."], correct: 0,
                    explanation: "Yes, please heißt Ja, bitte."
                }
            ]
        },
        test: [
                {
                    id: "engrk2l3_t1", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Du bekommst ein Geschenk. Was sagst du auf Englisch?", answers: ["Thank you!", "Sorry!", "Please!", "Good night!"], correct: 0,
                    explanation: "Für ein Geschenk sagst du Thank you!"
                },
                {
                    id: "engrk2l3_t2", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Du rempelst jemanden an. Was sagst du auf Englisch?", answers: ["Sorry!", "Thanks!", "Hello!", "Yes!"], correct: 0,
                    explanation: "Wenn dir etwas leidtut, sagst du Sorry!"
                },
                {
                    id: "engrk2l3_t3", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'No, thank you'?", answers: ["Nein, danke.", "Ja, bitte.", "Ja, danke.", "Nein, bitte."], correct: 0,
                    explanation: "No, thank you heißt Nein, danke."
                },
                {
                    id: "engrk2l3_t4", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Wie sagst du 'ja' auf Englisch?", answers: ["yes", "no", "hi", "bye"], correct: 0,
                    explanation: "Ja heißt yes."
                },
                {
                    id: "engrk2l3_t5", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Wie sagst du 'nein' auf Englisch?", answers: ["no", "yes", "hi", "thanks"], correct: 0,
                    explanation: "Nein heißt no."
                },
                {
                    id: "engrk2l3_t6", category: "kurs_engr_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "greetings", difficulty: "mittel", points: 10,
                    question: "Du möchtest ein Eis. Was sagst du auf Englisch?", answers: ["An ice cream, please.", "An ice cream, sorry.", "An ice cream, bye.", "An ice cream, hello."], correct: 0,
                    explanation: "Wenn du etwas möchtest, sagst du please."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enfz_k2_l1", kurs: "farben_zahlen_en_k2", order: 1, icon: "🎨",
        title: "Farben", kurz: "red, blue, yellow, green …",
        erklaerung: {
            intro: "Farben auf Englisch: <b>red</b> (rot), <b>blue</b> (blau), <b>yellow</b> (gelb), <b>green</b> (grün), <b>black</b> (schwarz), <b>white</b> (weiß), <b>brown</b> (braun), <b>pink</b> (rosa), <b>purple</b> (lila) und <b>grey</b> (grau).",
            beispiele: ["a red apple – ein roter Apfel",
                "the blue sky – der blaue Himmel",
                "a green frog – ein grüner Frosch"],
            merksatz: "The sun is yellow. The sky is blue. The grass is green."
        },
        uebung: {
            leicht: [
                {
                    id: "enfzk2l1_l1", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "leicht", points: 10,
                    question: "Was heißt 'red'?", answers: ["rot", "grün", "braun", "weiß"], correct: 0,
                    explanation: "Red heißt rot."
                },
                {
                    id: "enfzk2l1_l2", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "leicht", points: 10,
                    question: "Was heißt 'green'?", answers: ["grün", "gelb", "grau", "rot"], correct: 0,
                    explanation: "Green heißt grün."
                },
                {
                    id: "enfzk2l1_l3", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "leicht", points: 10,
                    question: "Was heißt 'yellow'?", answers: ["gelb", "blau", "lila", "rosa"], correct: 0,
                    explanation: "Yellow heißt gelb."
                },
                {
                    id: "enfzk2l1_l4", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "leicht", points: 10,
                    question: "Was heißt 'black'?", answers: ["schwarz", "weiß", "braun", "dunkelblau"], correct: 0,
                    explanation: "Black heißt schwarz."
                }
            ],
            mittel: [
                {
                    id: "enfzk2l1_m1", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "🍓 Welche Farbe hat die Erdbeere auf Englisch?", answers: ["red", "blue", "green", "white"], correct: 0,
                    explanation: "Eine reife Erdbeere ist rot – red."
                },
                {
                    id: "enfzk2l1_m2", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "🐸 Welche Farbe hat der Frosch auf Englisch?", answers: ["green", "red", "pink", "black"], correct: 0,
                    explanation: "Der Frosch ist grün – green."
                },
                {
                    id: "enfzk2l1_m3", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "🍌 Welche Farbe hat die Banane auf Englisch?", answers: ["yellow", "blue", "purple", "black"], correct: 0,
                    explanation: "Die Banane ist gelb – yellow."
                },
                {
                    id: "enfzk2l1_m4", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'blau' auf Englisch?", answers: ["blue", "brown", "black", "white"], correct: 0,
                    explanation: "Blau heißt blue."
                }
            ],
            schwer: [
                {
                    id: "enfzk2l1_s1", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "schwer", points: 10,
                    question: "Was heißt 'purple'?", answers: ["lila", "rosa", "grau", "braun"], correct: 0,
                    explanation: "Purple heißt lila."
                },
                {
                    id: "enfzk2l1_s2", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "schwer", points: 10,
                    question: "Was heißt 'grey'?", answers: ["grau", "grün", "gelb", "rot"], correct: 0,
                    explanation: "Grey heißt grau."
                },
                {
                    id: "enfzk2l1_s3", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "schwer", points: 10,
                    question: "Wie heißt 'weiß' auf Englisch?", answers: ["white", "black", "pink", "grey"], correct: 0,
                    explanation: "Weiß heißt white."
                },
                {
                    id: "enfzk2l1_s4", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "schwer", points: 10,
                    question: "Was heißt 'a blue car'?", answers: ["ein blaues Auto", "ein rotes Auto", "ein braunes Auto", "ein gelbes Auto"], correct: 0,
                    explanation: "Blue heißt blau, car heißt Auto."
                }
            ]
        },
        test: [
                {
                    id: "enfzk2l1_t1", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Was heißt 'brown'?", answers: ["braun", "blau", "schwarz", "grau"], correct: 0,
                    explanation: "Brown heißt braun."
                },
                {
                    id: "enfzk2l1_t2", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'rot' auf Englisch?", answers: ["red", "green", "yellow", "blue"], correct: 0,
                    explanation: "Rot heißt red."
                },
                {
                    id: "enfzk2l1_t3", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "❄️ Welche Farbe hat Schnee auf Englisch?", answers: ["white", "black", "green", "purple"], correct: 0,
                    explanation: "Schnee ist weiß – white."
                },
                {
                    id: "enfzk2l1_t4", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'rosa' auf Englisch?", answers: ["pink", "brown", "grey", "yellow"], correct: 0,
                    explanation: "Rosa heißt pink."
                },
                {
                    id: "enfzk2l1_t5", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Was heißt 'a red apple'?", answers: ["ein roter Apfel", "ein grüner Apfel", "ein gelber Apfel", "eine rote Birne"], correct: 0,
                    explanation: "Red heißt rot, apple heißt Apfel."
                },
                {
                    id: "enfzk2l1_t6", category: "kurs_enfz_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'schwarz' auf Englisch?", answers: ["black", "blue", "brown", "white"], correct: 0,
                    explanation: "Schwarz heißt black."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enfz_k2_l2", kurs: "farben_zahlen_en_k2", order: 2, icon: "🔢",
        title: "Zahlen 1 bis 10", kurz: "one, two, three …",
        erklaerung: {
            intro: "So zählst du auf Englisch: <b>one</b> 1, <b>two</b> 2, <b>three</b> 3, <b>four</b> 4, <b>five</b> 5, <b>six</b> 6, <b>seven</b> 7, <b>eight</b> 8, <b>nine</b> 9, <b>ten</b> 10.",
            beispiele: ["two cats – zwei Katzen",
                "five dogs – fünf Hunde",
                "ten fingers – zehn Finger"],
            merksatz: "One, two, three, four, five – six, seven, eight, nine, ten!"
        },
        uebung: {
            leicht: [
                {
                    id: "enfzk2l2_l1", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist 'two'?", answers: ["2", "3", "7", "10"], correct: 0,
                    explanation: "Two ist die 2."
                },
                {
                    id: "enfzk2l2_l2", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "leicht", points: 10,
                    question: "Welche Zahl ist 'four'?", answers: ["4", "5", "14", "40"], correct: 0,
                    explanation: "Four ist die 4."
                },
                {
                    id: "enfzk2l2_l3", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "leicht", points: 10,
                    question: "Wie heißt 1 auf Englisch?", answers: ["one", "two", "ten", "nine"], correct: 0,
                    explanation: "1 heißt one."
                },
                {
                    id: "enfzk2l2_l4", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "leicht", points: 10,
                    question: "Wie heißt 3 auf Englisch?", answers: ["three", "tree", "two", "thirty"], correct: 0,
                    explanation: "3 heißt three. Tree ist ein Baum!"
                }
            ],
            mittel: [
                {
                    id: "enfzk2l2_m1", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Wie heißt 8 auf Englisch?", answers: ["eight", "eighty", "nine", "seven"], correct: 0,
                    explanation: "8 heißt eight."
                },
                {
                    id: "enfzk2l2_m2", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Was ist 'two' plus 'three'?", answers: ["5", "6", "4", "7"], correct: 0,
                    explanation: "2 + 3 = 5, also five."
                },
                {
                    id: "enfzk2l2_m3", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "✋ Wie viele Finger sind das auf Englisch?", answers: ["five", "four", "six", "ten"], correct: 0,
                    explanation: "Eine Hand hat 5 Finger – five."
                },
                {
                    id: "enfzk2l2_m4", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Was ist 'ten' minus 'one'?", answers: ["9", "8", "11", "10"], correct: 0,
                    explanation: "10 − 1 = 9, also nine."
                }
            ],
            schwer: [
                {
                    id: "enfzk2l2_s1", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "schwer", points: 10,
                    question: "Wie heißt 6 auf Englisch?", answers: ["six", "seven", "sixty", "five"], correct: 0,
                    explanation: "6 heißt six."
                },
                {
                    id: "enfzk2l2_s2", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "schwer", points: 10,
                    question: "Was ist 'four' plus 'four'?", answers: ["8", "4", "6", "9"], correct: 0,
                    explanation: "4 + 4 = 8, also eight."
                },
                {
                    id: "enfzk2l2_s3", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "schwer", points: 10,
                    question: "Was ist 'seven' minus 'two'?", answers: ["5", "9", "4", "6"], correct: 0,
                    explanation: "7 − 2 = 5, also five."
                },
                {
                    id: "enfzk2l2_s4", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "schwer", points: 10,
                    question: "Welche Zahl kommt nach 'seven'?", answers: ["8", "6", "9", "17"], correct: 0,
                    explanation: "Nach 7 kommt 8 – eight."
                }
            ]
        },
        test: [
                {
                    id: "enfzk2l2_t1", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Was ist 'one' plus 'one'?", answers: ["2", "1", "3", "11"], correct: 0,
                    explanation: "1 + 1 = 2, also two."
                },
                {
                    id: "enfzk2l2_t2", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Wie heißt 10 auf Englisch?", answers: ["ten", "two", "one", "nine"], correct: 0,
                    explanation: "10 heißt ten."
                },
                {
                    id: "enfzk2l2_t3", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Wie heißt 7 auf Englisch?", answers: ["seven", "eleven", "six", "seventy"], correct: 0,
                    explanation: "7 heißt seven."
                },
                {
                    id: "enfzk2l2_t4", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Welche Zahl kommt vor 'four'?", answers: ["3", "5", "2", "14"], correct: 0,
                    explanation: "Vor 4 kommt 3 – three."
                },
                {
                    id: "enfzk2l2_t5", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Was ist 'nine' minus 'three'?", answers: ["6", "5", "7", "12"], correct: 0,
                    explanation: "9 − 3 = 6, also six."
                },
                {
                    id: "enfzk2l2_t6", category: "kurs_enfz_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Wie heißt 5 auf Englisch?", answers: ["five", "four", "fifteen", "fifty"], correct: 0,
                    explanation: "5 heißt five."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enfz_k2_l3", kurs: "farben_zahlen_en_k2", order: 3, icon: "🔟",
        title: "Zahlen 11 bis 20", kurz: "eleven, twelve … twenty",
        erklaerung: {
            intro: "<b>eleven</b> 11, <b>twelve</b> 12, <b>thirteen</b> 13, <b>fourteen</b> 14, <b>fifteen</b> 15, <b>sixteen</b> 16, <b>seventeen</b> 17, <b>eighteen</b> 18, <b>nineteen</b> 19, <b>twenty</b> 20. Von 13 bis 19 hörst du am Ende <b>-teen</b>.",
            beispiele: ["thirteen – dreizehn",
                "sixteen – sechzehn",
                "twenty – zwanzig"],
            merksatz: "-teen am Ende heißt: 13 bis 19. Eleven = 11, twelve = 12, twenty = 20."
        },
        uebung: {
            leicht: [
                {
                    id: "enfzk2l3_l1", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "leicht", points: 10,
                    question: "Welche Zahl hörst du: 'twelve'?", answers: ["12", "2", "20", "11"], correct: 0,
                    explanation: "Twelve ist die 12."
                },
                {
                    id: "enfzk2l3_l2", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "leicht", points: 10,
                    question: "Welche Zahl hörst du: 'sixteen'?", answers: ["16", "60", "6", "17"], correct: 0,
                    explanation: "Six und -teen: sixteen ist die 16."
                },
                {
                    id: "enfzk2l3_l3", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "leicht", points: 10,
                    question: "Wie heißt 11 auf Englisch?", answers: ["eleven", "twelve", "seven", "twenty"], correct: 0,
                    explanation: "11 heißt eleven."
                },
                {
                    id: "enfzk2l3_l4", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "leicht", points: 10,
                    question: "Wie heißt 20 auf Englisch?", answers: ["twenty", "twelve", "two", "thirty"], correct: 0,
                    explanation: "20 heißt twenty."
                }
            ],
            mittel: [
                {
                    id: "enfzk2l3_m1", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Welche Zahl hörst du: 'fourteen'?", answers: ["14", "40", "4", "15"], correct: 0,
                    explanation: "Four und -teen: fourteen ist die 14."
                },
                {
                    id: "enfzk2l3_m2", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Wie heißt 13 auf Englisch?", answers: ["thirteen", "thirty", "three", "fourteen"], correct: 0,
                    explanation: "13 heißt thirteen."
                },
                {
                    id: "enfzk2l3_m3", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Was ist 'ten' plus 'eight'?", answers: ["18", "80", "17", "8"], correct: 0,
                    explanation: "10 + 8 = 18, also eighteen."
                },
                {
                    id: "enfzk2l3_m4", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Welche Zahl hörst du: 'nineteen'?", answers: ["19", "90", "9", "18"], correct: 0,
                    explanation: "Nine und -teen: nineteen ist die 19."
                }
            ],
            schwer: [
                {
                    id: "enfzk2l3_s1", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "schwer", points: 10,
                    question: "Wie heißt 17 auf Englisch?", answers: ["seventeen", "seventy", "sixteen", "seventy-one"], correct: 0,
                    explanation: "17 heißt seventeen."
                },
                {
                    id: "enfzk2l3_s2", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "schwer", points: 10,
                    question: "Was ist 'ten' plus 'five'?", answers: ["15", "50", "16", "5"], correct: 0,
                    explanation: "10 + 5 = 15, also fifteen."
                },
                {
                    id: "enfzk2l3_s3", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "schwer", points: 10,
                    question: "Was ist 'twenty' minus 'one'?", answers: ["19", "21", "18", "10"], correct: 0,
                    explanation: "20 − 1 = 19, also nineteen."
                },
                {
                    id: "enfzk2l3_s4", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "schwer", points: 10,
                    question: "Welche Zahl kommt nach 'twelve'?", answers: ["13", "11", "20", "3"], correct: 0,
                    explanation: "Nach 12 kommt 13 – thirteen."
                }
            ]
        },
        test: [
                {
                    id: "enfzk2l3_t1", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Welche Zahl hörst du: 'eighteen'?", answers: ["18", "80", "8", "19"], correct: 0,
                    explanation: "Eight und -teen: eighteen ist die 18."
                },
                {
                    id: "enfzk2l3_t2", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Wie heißt 15 auf Englisch?", answers: ["fifteen", "fifty", "five", "fourteen"], correct: 0,
                    explanation: "15 heißt fifteen."
                },
                {
                    id: "enfzk2l3_t3", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Wie heißt 12 auf Englisch?", answers: ["twelve", "twenty", "eleven", "two"], correct: 0,
                    explanation: "12 heißt twelve."
                },
                {
                    id: "enfzk2l3_t4", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Was ist 'ten' plus 'ten'?", answers: ["20", "10", "12", "100"], correct: 0,
                    explanation: "10 + 10 = 20, also twenty."
                },
                {
                    id: "enfzk2l3_t5", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Welche Zahl hörst du: 'thirteen'?", answers: ["13", "30", "3", "14"], correct: 0,
                    explanation: "Thirteen ist die 13."
                },
                {
                    id: "enfzk2l3_t6", category: "kurs_enfz_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "colors_numbers", difficulty: "mittel", points: 10,
                    question: "Was ist 'eleven' plus 'one'?", answers: ["12", "11", "13", "2"], correct: 0,
                    explanation: "11 + 1 = 12, also twelve."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enti_k2_l1", kurs: "tiere_en_k2", order: 1, icon: "🐱",
        title: "Haustiere", kurz: "dog, cat, mouse, fish …",
        erklaerung: {
            intro: "Tiere im Haus: <b>dog</b> (Hund), <b>cat</b> (Katze), <b>mouse</b> (Maus), <b>fish</b> (Fisch), <b>bird</b> (Vogel), <b>rabbit</b> (Kaninchen oder Hase) und <b>horse</b> (Pferd).",
            beispiele: ["a dog – ein Hund",
                "two cats – zwei Katzen",
                "a little mouse – eine kleine Maus"],
            merksatz: "I have a dog. – Ich habe einen Hund. The cat says miaow."
        },
        uebung: {
            leicht: [
                {
                    id: "entik2l1_l1", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "leicht", points: 10,
                    question: "🐶 Wie heißt das auf Englisch?", answers: ["dog", "cat", "cow", "pig"], correct: 0,
                    explanation: "Der Hund heißt dog."
                },
                {
                    id: "entik2l1_l2", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "leicht", points: 10,
                    question: "🐱 Wie heißt das auf Englisch?", answers: ["cat", "dog", "rat", "bat"], correct: 0,
                    explanation: "Die Katze heißt cat."
                },
                {
                    id: "entik2l1_l3", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "leicht", points: 10,
                    question: "Was heißt 'mouse'?", answers: ["Maus", "Hase", "Katze", "Vogel"], correct: 0,
                    explanation: "Mouse heißt Maus."
                },
                {
                    id: "entik2l1_l4", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "leicht", points: 10,
                    question: "Was heißt 'bird'?", answers: ["Vogel", "Fisch", "Hund", "Pferd"], correct: 0,
                    explanation: "Bird heißt Vogel."
                }
            ],
            mittel: [
                {
                    id: "entik2l1_m1", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "🐰 Wie heißt das auf Englisch?", answers: ["rabbit", "horse", "mouse", "hamster"], correct: 0,
                    explanation: "Das Kaninchen heißt rabbit."
                },
                {
                    id: "entik2l1_m2", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Was heißt 'fish'?", answers: ["Fisch", "Frosch", "Vogel", "Hase"], correct: 0,
                    explanation: "Fish heißt Fisch."
                },
                {
                    id: "entik2l1_m3", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "🐴 Wie heißt das auf Englisch?", answers: ["horse", "house", "mouse", "goose"], correct: 0,
                    explanation: "Das Pferd heißt horse. House ist ein Haus!"
                },
                {
                    id: "entik2l1_m4", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I have a cat'?", answers: ["Ich habe eine Katze.", "Ich bin eine Katze.", "Ich sehe eine Katze.", "Wo ist die Katze?"], correct: 0,
                    explanation: "I have heißt ich habe."
                }
            ],
            schwer: [
                {
                    id: "entik2l1_s1", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "schwer", points: 10,
                    question: "Was heißt 'rabbit'?", answers: ["Kaninchen", "Ratte", "Rabe", "Hamster"], correct: 0,
                    explanation: "Rabbit heißt Kaninchen – oft sagt man auch Hase."
                },
                {
                    id: "entik2l1_s2", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "schwer", points: 10,
                    question: "Wie heißt 'Hund' auf Englisch?", answers: ["dog", "duck", "doll", "cat"], correct: 0,
                    explanation: "Hund heißt dog. Duck ist eine Ente!"
                },
                {
                    id: "entik2l1_s3", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "schwer", points: 10,
                    question: "Was heißt 'a black cat'?", answers: ["eine schwarze Katze", "eine schwarze Maus", "ein schwarzer Hund", "ein schwarzer Vogel"], correct: 0,
                    explanation: "Black heißt schwarz, cat heißt Katze."
                },
                {
                    id: "entik2l1_s4", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "schwer", points: 10,
                    question: "Was heißt 'two dogs'?", answers: ["zwei Hunde", "zwei Katzen", "drei Hunde", "ein Hund"], correct: 0,
                    explanation: "Two heißt zwei, dogs heißt Hunde."
                }
            ]
        },
        test: [
                {
                    id: "entik2l1_t1", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "🐟 Wie heißt das auf Englisch?", answers: ["fish", "bird", "frog", "dish"], correct: 0,
                    explanation: "Der Fisch heißt fish."
                },
                {
                    id: "entik2l1_t2", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "🐦 Wie heißt das auf Englisch?", answers: ["bird", "bear", "fish", "bee"], correct: 0,
                    explanation: "Der Vogel heißt bird."
                },
                {
                    id: "entik2l1_t3", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Was heißt 'dog'?", answers: ["Hund", "Katze", "Vogel", "Maus"], correct: 0,
                    explanation: "Dog heißt Hund."
                },
                {
                    id: "entik2l1_t4", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Maus' auf Englisch?", answers: ["mouse", "house", "horse", "moose"], correct: 0,
                    explanation: "Maus heißt mouse."
                },
                {
                    id: "entik2l1_t5", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Was heißt 'horse'?", answers: ["Pferd", "Haus", "Hase", "Huhn"], correct: 0,
                    explanation: "Horse heißt Pferd. Haus heißt house!"
                },
                {
                    id: "entik2l1_t6", category: "kurs_enti_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Katze' auf Englisch?", answers: ["cat", "cap", "cut", "dog"], correct: 0,
                    explanation: "Katze heißt cat."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enti_k2_l2", kurs: "tiere_en_k2", order: 2, icon: "🐮",
        title: "Auf dem Bauernhof", kurz: "cow, pig, sheep, duck …",
        erklaerung: {
            intro: "Tiere auf dem Bauernhof: <b>cow</b> (Kuh), <b>pig</b> (Schwein), <b>sheep</b> (Schaf), <b>horse</b> (Pferd), <b>hen</b> (Huhn), <b>duck</b> (Ente) und <b>goat</b> (Ziege).",
            beispiele: ["a cow – eine Kuh",
                "a pig – ein Schwein",
                "three sheep – drei Schafe"],
            merksatz: "The cow says moo. The pig says oink. The duck says quack."
        },
        uebung: {
            leicht: [
                {
                    id: "entik2l2_l1", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "leicht", points: 10,
                    question: "🐮 Wie heißt das auf Englisch?", answers: ["cow", "pig", "cat", "owl"], correct: 0,
                    explanation: "Die Kuh heißt cow."
                },
                {
                    id: "entik2l2_l2", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "leicht", points: 10,
                    question: "🐷 Wie heißt das auf Englisch?", answers: ["pig", "dog", "cow", "bee"], correct: 0,
                    explanation: "Das Schwein heißt pig."
                },
                {
                    id: "entik2l2_l3", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "leicht", points: 10,
                    question: "Was heißt 'sheep'?", answers: ["Schaf", "Ziege", "Kuh", "Schwein"], correct: 0,
                    explanation: "Sheep heißt Schaf."
                },
                {
                    id: "entik2l2_l4", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "leicht", points: 10,
                    question: "Was heißt 'duck'?", answers: ["Ente", "Huhn", "Gans", "Hund"], correct: 0,
                    explanation: "Duck heißt Ente."
                }
            ],
            mittel: [
                {
                    id: "entik2l2_m1", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Was heißt 'goat'?", answers: ["Ziege", "Gans", "Kuh", "Schaf"], correct: 0,
                    explanation: "Goat heißt Ziege."
                },
                {
                    id: "entik2l2_m2", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "🦆 Wie heißt das auf Englisch?", answers: ["duck", "hen", "goat", "sheep"], correct: 0,
                    explanation: "Die Ente heißt duck."
                },
                {
                    id: "entik2l2_m3", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "🐔 Wie heißt das auf Englisch?", answers: ["hen", "pen", "pig", "duck"], correct: 0,
                    explanation: "Das Huhn heißt hen oder chicken."
                },
                {
                    id: "entik2l2_m4", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Schwein' auf Englisch?", answers: ["pig", "big", "cow", "dog"], correct: 0,
                    explanation: "Schwein heißt pig. Big heißt groß!"
                }
            ],
            schwer: [
                {
                    id: "entik2l2_s1", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "schwer", points: 10,
                    question: "Welches Tier sagt 'moo'?", answers: ["Kuh", "Hund", "Ente", "Schwein"], correct: 0,
                    explanation: "Auf Englisch macht die Kuh moo."
                },
                {
                    id: "entik2l2_s2", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "schwer", points: 10,
                    question: "Welches Tier sagt 'quack'?", answers: ["Ente", "Kuh", "Schaf", "Katze"], correct: 0,
                    explanation: "Die Ente macht quack."
                },
                {
                    id: "entik2l2_s3", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "schwer", points: 10,
                    question: "Was heißt 'three sheep'?", answers: ["drei Schafe", "drei Schiffe", "drei Ziegen", "ein Schaf"], correct: 0,
                    explanation: "Sheep bleibt gleich: one sheep, three sheep. Schiff heißt ship!"
                },
                {
                    id: "entik2l2_s4", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "schwer", points: 10,
                    question: "Wie heißt 'Ziege' auf Englisch?", answers: ["goat", "goose", "coat", "cow"], correct: 0,
                    explanation: "Ziege heißt goat. Coat ist ein Mantel!"
                }
            ]
        },
        test: [
                {
                    id: "entik2l2_t1", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Was heißt 'cow'?", answers: ["Kuh", "Katze", "Hund", "Kalb"], correct: 0,
                    explanation: "Cow heißt Kuh."
                },
                {
                    id: "entik2l2_t2", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "🐐 Wie heißt das auf Englisch?", answers: ["goat", "sheep", "horse", "cow"], correct: 0,
                    explanation: "Die Ziege heißt goat."
                },
                {
                    id: "entik2l2_t3", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Was heißt 'pig'?", answers: ["Schwein", "Schaf", "Ziege", "Hühnchen"], correct: 0,
                    explanation: "Pig heißt Schwein."
                },
                {
                    id: "entik2l2_t4", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Kuh' auf Englisch?", answers: ["cow", "cat", "owl", "car"], correct: 0,
                    explanation: "Kuh heißt cow."
                },
                {
                    id: "entik2l2_t5", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Welches Tier sagt 'oink'?", answers: ["Schwein", "Kuh", "Ente", "Schäfchen"], correct: 0,
                    explanation: "Auf Englisch macht das Schwein oink."
                },
                {
                    id: "entik2l2_t6", category: "kurs_enti_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Was heißt 'a white hen'?", answers: ["ein weißes Huhn", "ein weißer Hund", "ein braunes Huhn", "eine weiße Ente"], correct: 0,
                    explanation: "White heißt weiß, hen heißt Huhn."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enti_k2_l3", kurs: "tiere_en_k2", order: 3, icon: "🦁",
        title: "Im Zoo", kurz: "lion, elephant, monkey …",
        erklaerung: {
            intro: "Tiere im Zoo: <b>lion</b> (Löwe), <b>elephant</b> (Elefant), <b>monkey</b> (Affe), <b>snake</b> (Schlange), <b>bear</b> (Bär), <b>penguin</b> (Pinguin) und <b>crocodile</b> (Krokodil).",
            beispiele: ["a big lion – ein großer Löwe",
                "a long snake – eine lange Schlange",
                "a funny monkey – ein lustiger Affe"],
            merksatz: "The elephant is big. The monkey can climb. The snake is long."
        },
        uebung: {
            leicht: [
                {
                    id: "entik2l3_l1", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "leicht", points: 10,
                    question: "🦁 Wie heißt das auf Englisch?", answers: ["lion", "bear", "snake", "monkey"], correct: 0,
                    explanation: "Der Löwe heißt lion."
                },
                {
                    id: "entik2l3_l2", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "leicht", points: 10,
                    question: "🐘 Wie heißt das auf Englisch?", answers: ["elephant", "penguin", "monkey", "crocodile"], correct: 0,
                    explanation: "Der Elefant heißt elephant."
                },
                {
                    id: "entik2l3_l3", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "leicht", points: 10,
                    question: "Was heißt 'monkey'?", answers: ["Affe", "Bär", "Löwe", "Esel"], correct: 0,
                    explanation: "Monkey heißt Affe."
                },
                {
                    id: "entik2l3_l4", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "leicht", points: 10,
                    question: "Was heißt 'snake'?", answers: ["Schlange", "Schnecke", "Schaf", "Spinne"], correct: 0,
                    explanation: "Snake heißt Schlange."
                }
            ],
            mittel: [
                {
                    id: "entik2l3_m1", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "🐻 Wie heißt das auf Englisch?", answers: ["bear", "pear", "bird", "lion"], correct: 0,
                    explanation: "Der Bär heißt bear. Pear ist eine Birne!"
                },
                {
                    id: "entik2l3_m2", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "🐧 Wie heißt das auf Englisch?", answers: ["penguin", "pelican", "parrot", "pig"], correct: 0,
                    explanation: "Der Pinguin heißt penguin."
                },
                {
                    id: "entik2l3_m3", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Was heißt 'bear'?", answers: ["Bär", "Birne", "Biene", "Vogel"], correct: 0,
                    explanation: "Bear heißt Bär."
                },
                {
                    id: "entik2l3_m4", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Löwe' auf Englisch?", answers: ["lion", "line", "lamb", "bear"], correct: 0,
                    explanation: "Löwe heißt lion."
                }
            ],
            schwer: [
                {
                    id: "entik2l3_s1", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "schwer", points: 10,
                    question: "Was heißt 'crocodile'?", answers: ["Krokodil", "Kröte", "Krake", "Kranich"], correct: 0,
                    explanation: "Crocodile heißt Krokodil."
                },
                {
                    id: "entik2l3_s2", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "schwer", points: 10,
                    question: "Wie heißt 'Affe' auf Englisch?", answers: ["monkey", "money", "donkey", "mouse"], correct: 0,
                    explanation: "Affe heißt monkey. Money ist Geld, donkey ein Esel!"
                },
                {
                    id: "entik2l3_s3", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "schwer", points: 10,
                    question: "Was heißt 'The elephant is big'?", answers: ["Der Elefant ist groß.", "Der Elefant ist klein.", "Der Löwe ist groß.", "Der Affe ist lustig."], correct: 0,
                    explanation: "Big heißt groß."
                },
                {
                    id: "entik2l3_s4", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "schwer", points: 10,
                    question: "🐊 Wie heißt das auf Englisch?", answers: ["crocodile", "caterpillar", "penguin", "elephant"], correct: 0,
                    explanation: "Das Krokodil heißt crocodile."
                }
            ]
        },
        test: [
                {
                    id: "entik2l3_t1", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Was heißt 'lion'?", answers: ["Löwe", "Tiger", "Bär", "Affe"], correct: 0,
                    explanation: "Lion heißt Löwe."
                },
                {
                    id: "entik2l3_t2", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Elefant' auf Englisch?", answers: ["elephant", "elegant", "eleven", "elevator"], correct: 0,
                    explanation: "Elefant heißt elephant."
                },
                {
                    id: "entik2l3_t3", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "🐒 Wie heißt das auf Englisch?", answers: ["monkey", "donkey", "turkey", "mouse"], correct: 0,
                    explanation: "Der Affe heißt monkey."
                },
                {
                    id: "entik2l3_t4", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Schlange' auf Englisch?", answers: ["snake", "snail", "shark", "sheep"], correct: 0,
                    explanation: "Schlange heißt snake. Snail ist eine Schnecke!"
                },
                {
                    id: "entik2l3_t5", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Was heißt 'penguin'?", answers: ["Pinguin", "Papagei", "Pelikan", "Panda"], correct: 0,
                    explanation: "Penguin heißt Pinguin."
                },
                {
                    id: "entik2l3_t6", category: "kurs_enti_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "animals", difficulty: "mittel", points: 10,
                    question: "Was heißt 'The monkey can climb'?", answers: ["Der Affe kann klettern.", "Der Affe kann schwimmen.", "Der Bär kann klettern.", "Der Affe ist klein."], correct: 0,
                    explanation: "Can climb heißt kann klettern."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enfs_k2_l1", kurs: "familie_schule_en_k2", order: 1, icon: "👪",
        title: "Meine Familie", kurz: "mum, dad, sister, brother …",
        erklaerung: {
            intro: "Deine Familie heißt <b>family</b>: <b>mum</b> (Mama), <b>dad</b> (Papa), <b>sister</b> (Schwester), <b>brother</b> (Bruder), <b>grandma</b> (Oma) und <b>grandpa</b> (Opa).",
            beispiele: ["my mum – meine Mama",
                "my brother – mein Bruder",
                "my grandma – meine Oma"],
            merksatz: "This is my mum. This is my dad. I have a sister."
        },
        uebung: {
            leicht: [
                {
                    id: "enfsk2l1_l1", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "leicht", points: 10,
                    question: "Was heißt 'mum'?", answers: ["Mama", "Papa", "Oma", "Opa"], correct: 0,
                    explanation: "Mum heißt Mama."
                },
                {
                    id: "enfsk2l1_l2", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "leicht", points: 10,
                    question: "Was heißt 'dad'?", answers: ["Papa", "Mama", "Onkel", "Baby"], correct: 0,
                    explanation: "Dad heißt Papa."
                },
                {
                    id: "enfsk2l1_l3", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "leicht", points: 10,
                    question: "👵 Wie heißt das auf Englisch?", answers: ["grandma", "grandpa", "sister", "mum"], correct: 0,
                    explanation: "Die Oma heißt grandma."
                },
                {
                    id: "enfsk2l1_l4", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "leicht", points: 10,
                    question: "Was heißt 'sister'?", answers: ["Schwester", "Bruder", "Tante", "Großmutter"], correct: 0,
                    explanation: "Sister heißt Schwester."
                }
            ],
            mittel: [
                {
                    id: "enfsk2l1_m1", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'brother'?", answers: ["Bruder", "Schwester", "Vater", "Onkel"], correct: 0,
                    explanation: "Brother heißt Bruder."
                },
                {
                    id: "enfsk2l1_m2", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "👴 Wie heißt das auf Englisch?", answers: ["grandpa", "grandma", "brother", "dad"], correct: 0,
                    explanation: "Der Opa heißt grandpa."
                },
                {
                    id: "enfsk2l1_m3", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Familie' auf Englisch?", answers: ["family", "funny", "father", "friend"], correct: 0,
                    explanation: "Familie heißt family."
                },
                {
                    id: "enfsk2l1_m4", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'This is my dad'?", answers: ["Das ist mein Papa.", "Das ist meine Mama.", "Wo ist mein Papa?", "Ich bin der Papa."], correct: 0,
                    explanation: "This is heißt das ist."
                }
            ],
            schwer: [
                {
                    id: "enfsk2l1_s1", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "schwer", points: 10,
                    question: "Wie heißt 'Schwester' auf Englisch?", answers: ["sister", "brother", "mister", "sitter"], correct: 0,
                    explanation: "Schwester heißt sister."
                },
                {
                    id: "enfsk2l1_s2", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "schwer", points: 10,
                    question: "Was heißt 'I have a brother'?", answers: ["Ich habe einen Bruder.", "Ich bin ein Bruder.", "Ich mag meinen Bruder.", "Ich habe eine Schwester."], correct: 0,
                    explanation: "I have heißt ich habe."
                },
                {
                    id: "enfsk2l1_s3", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "schwer", points: 10,
                    question: "Was heißt 'grandpa'?", answers: ["Opa", "Oma", "Papa", "Onkel"], correct: 0,
                    explanation: "Grandpa heißt Opa."
                },
                {
                    id: "enfsk2l1_s4", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "schwer", points: 10,
                    question: "Wie heißt 'Bruder' auf Englisch?", answers: ["brother", "mother", "father", "sister"], correct: 0,
                    explanation: "Bruder heißt brother."
                }
            ]
        },
        test: [
                {
                    id: "enfsk2l1_t1", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Mama' auf Englisch?", answers: ["mum", "dad", "man", "map"], correct: 0,
                    explanation: "Mama heißt mum."
                },
                {
                    id: "enfsk2l1_t2", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'family'?", answers: ["Familie", "Freunde", "Fahrrad", "Ferien"], correct: 0,
                    explanation: "Family heißt Familie."
                },
                {
                    id: "enfsk2l1_t3", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Papa' auf Englisch?", answers: ["dad", "mum", "bad", "dog"], correct: 0,
                    explanation: "Papa heißt dad."
                },
                {
                    id: "enfsk2l1_t4", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'my grandma'?", answers: ["meine Oma", "mein Opa", "meine Mama", "mein Bruder"], correct: 0,
                    explanation: "My heißt mein oder meine, grandma heißt Oma."
                },
                {
                    id: "enfsk2l1_t5", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'This is my sister'?", answers: ["Das ist meine Schwester.", "Das ist mein Bruder.", "Das ist meine Mama.", "Wo ist meine Schwester?"], correct: 0,
                    explanation: "Sister heißt Schwester."
                },
                {
                    id: "enfsk2l1_t6", category: "kurs_enfs_k2_l1", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Opa' auf Englisch?", answers: ["grandpa", "grandma", "brother", "father"], correct: 0,
                    explanation: "Opa heißt grandpa."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enfs_k2_l2", kurs: "familie_schule_en_k2", order: 2, icon: "✏️",
        title: "In der Schule", kurz: "pencil, book, ruler …",
        erklaerung: {
            intro: "In der Schultasche (<b>schoolbag</b>) sind: <b>pencil</b> (Bleistift), <b>pen</b> (Stift), <b>book</b> (Buch), <b>ruler</b> (Lineal), <b>rubber</b> (Radiergummi), <b>crayon</b> (Wachsmalstift) und <b>scissors</b> (Schere). Deine Lehrerin oder dein Lehrer heißt <b>teacher</b>.",
            beispiele: ["a red pencil – ein roter Bleistift",
                "my book – mein Buch",
                "a long ruler – ein langes Lineal"],
            merksatz: "I have a pencil and a book in my schoolbag."
        },
        uebung: {
            leicht: [
                {
                    id: "enfsk2l2_l1", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "leicht", points: 10,
                    question: "✏️ Wie heißt das auf Englisch?", answers: ["pencil", "ruler", "book", "rubber"], correct: 0,
                    explanation: "Der Bleistift heißt pencil."
                },
                {
                    id: "enfsk2l2_l2", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "leicht", points: 10,
                    question: "📖 Wie heißt das auf Englisch?", answers: ["book", "bag", "pen", "desk"], correct: 0,
                    explanation: "Das Buch heißt book."
                },
                {
                    id: "enfsk2l2_l3", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "leicht", points: 10,
                    question: "Was heißt 'pencil'?", answers: ["Bleistift", "Lineal", "Schere", "Schultasche"], correct: 0,
                    explanation: "Pencil heißt Bleistift."
                },
                {
                    id: "enfsk2l2_l4", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "leicht", points: 10,
                    question: "🎒 Wie heißt das auf Englisch?", answers: ["schoolbag", "school", "pencil case", "scissors"], correct: 0,
                    explanation: "Die Schultasche heißt schoolbag."
                }
            ],
            mittel: [
                {
                    id: "enfsk2l2_m1", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "📏 Wie heißt das auf Englisch?", answers: ["ruler", "rubber", "pencil", "pen"], correct: 0,
                    explanation: "Das Lineal heißt ruler."
                },
                {
                    id: "enfsk2l2_m2", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "✂️ Wie heißt das auf Englisch?", answers: ["scissors", "pencil", "ruler", "pencil case"], correct: 0,
                    explanation: "Die Schere heißt scissors."
                },
                {
                    id: "enfsk2l2_m3", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'rubber'?", answers: ["Radiergummi", "Gummibär", "Lineal", "Gummistiefel"], correct: 0,
                    explanation: "Rubber heißt Radiergummi. In Amerika sagt man eraser."
                },
                {
                    id: "enfsk2l2_m4", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'teacher'?", answers: ["Lehrerin oder Lehrer", "Schülerin oder Schüler", "Tante oder Onkel", "Mama oder Papa"], correct: 0,
                    explanation: "Teacher heißt Lehrerin oder Lehrer."
                }
            ],
            schwer: [
                {
                    id: "enfsk2l2_s1", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "schwer", points: 10,
                    question: "Wie heißt 'Lineal' auf Englisch?", answers: ["ruler", "rubber", "rule", "roller"], correct: 0,
                    explanation: "Lineal heißt ruler."
                },
                {
                    id: "enfsk2l2_s2", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "schwer", points: 10,
                    question: "Was heißt 'I have a red pen'?", answers: ["Ich habe einen roten Stift.", "Ich habe einen blauen Stift.", "Ich mag rote Stifte.", "Ich habe ein rotes Buch."], correct: 0,
                    explanation: "Red heißt rot, pen heißt Stift."
                },
                {
                    id: "enfsk2l2_s3", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "schwer", points: 10,
                    question: "Was heißt 'crayon'?", answers: ["Wachsmalstift", "Radiergummi", "Bleistift", "Federmäppchen"], correct: 0,
                    explanation: "Crayon heißt Wachsmalstift."
                },
                {
                    id: "enfsk2l2_s4", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "schwer", points: 10,
                    question: "Wie heißt 'Schere' auf Englisch?", answers: ["scissors", "sisters", "scarecrow", "scooter"], correct: 0,
                    explanation: "Schere heißt scissors. Sisters sind Schwestern!"
                }
            ]
        },
        test: [
                {
                    id: "enfsk2l2_t1", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Buch' auf Englisch?", answers: ["book", "bag", "bike", "ball"], correct: 0,
                    explanation: "Buch heißt book."
                },
                {
                    id: "enfsk2l2_t2", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'schoolbag'?", answers: ["Schultasche", "Schulhof", "Schulbus", "Klassenzimmer"], correct: 0,
                    explanation: "Schoolbag heißt Schultasche."
                },
                {
                    id: "enfsk2l2_t3", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "🖍️ Wie heißt das auf Englisch?", answers: ["crayon", "crown", "pencil case", "rubber"], correct: 0,
                    explanation: "Der Wachsmalstift heißt crayon."
                },
                {
                    id: "enfsk2l2_t4", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Open your book'?", answers: ["Öffne dein Buch.", "Schließ dein Buch.", "Lies dein Buch.", "Hol dein Buch."], correct: 0,
                    explanation: "Open heißt öffnen."
                },
                {
                    id: "enfsk2l2_t5", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Bleistift' auf Englisch?", answers: ["pencil", "pen", "paper", "pencil case"], correct: 0,
                    explanation: "Bleistift heißt pencil."
                },
                {
                    id: "enfsk2l2_t6", category: "kurs_enfs_k2_l2", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Sit down, please'?", answers: ["Setz dich bitte.", "Steh bitte auf.", "Sei bitte leise.", "Komm bitte her."], correct: 0,
                    explanation: "Sit down heißt setz dich."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enfs_k2_l3", kurs: "familie_schule_en_k2", order: 3, icon: "👀",
        title: "Mein Körper", kurz: "head, eyes, ears, nose …",
        erklaerung: {
            intro: "Der Körper auf Englisch: <b>head</b> (Kopf), <b>eyes</b> (Augen), <b>ears</b> (Ohren), <b>nose</b> (Nase), <b>mouth</b> (Mund), <b>hair</b> (Haare), <b>legs</b> (Beine) und <b>feet</b> (Füße). Das Lied <b>Head, shoulders, knees and toes</b> hilft beim Merken.",
            beispiele: ["two eyes – zwei Augen",
                "one nose – eine Nase",
                "ten toes – zehn Zehen"],
            merksatz: "Head, shoulders, knees and toes – eyes and ears and mouth and nose!"
        },
        uebung: {
            leicht: [
                {
                    id: "enfsk2l3_l1", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "leicht", points: 10,
                    question: "👃 Wie heißt das auf Englisch?", answers: ["nose", "ears", "eyes", "hair"], correct: 0,
                    explanation: "Die Nase heißt nose."
                },
                {
                    id: "enfsk2l3_l2", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "leicht", points: 10,
                    question: "👀 Wie heißt das auf Englisch?", answers: ["eyes", "ears", "nose", "legs"], correct: 0,
                    explanation: "Die Augen heißen eyes."
                },
                {
                    id: "enfsk2l3_l3", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "leicht", points: 10,
                    question: "Was heißt 'head'?", answers: ["Kopf", "Hand", "Haare", "Hals"], correct: 0,
                    explanation: "Head heißt Kopf."
                },
                {
                    id: "enfsk2l3_l4", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "leicht", points: 10,
                    question: "👂 Wie heißt das auf Englisch?", answers: ["ear", "eye", "arm", "hair"], correct: 0,
                    explanation: "Das Ohr heißt ear."
                }
            ],
            mittel: [
                {
                    id: "enfsk2l3_m1", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'mouth'?", answers: ["Mund", "Maus", "Nase", "Ohr"], correct: 0,
                    explanation: "Mouth heißt Mund. Maus heißt mouse!"
                },
                {
                    id: "enfsk2l3_m2", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'hair'?", answers: ["Haare", "Hase", "Hände", "Herz"], correct: 0,
                    explanation: "Hair heißt Haare."
                },
                {
                    id: "enfsk2l3_m3", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Kopf' auf Englisch?", answers: ["head", "hand", "hat", "heart"], correct: 0,
                    explanation: "Kopf heißt head."
                },
                {
                    id: "enfsk2l3_m4", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "👄 Wie heißt das auf Englisch?", answers: ["mouth", "mouse", "nose", "teeth"], correct: 0,
                    explanation: "Der Mund heißt mouth."
                }
            ],
            schwer: [
                {
                    id: "enfsk2l3_s1", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "schwer", points: 10,
                    question: "Was heißt 'knees'?", answers: ["Knie", "Nase", "Zehen", "Kinn"], correct: 0,
                    explanation: "Knees heißt Knie – das k spricht man nicht."
                },
                {
                    id: "enfsk2l3_s2", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "schwer", points: 10,
                    question: "Was heißt 'toes'?", answers: ["Zehen", "Finger", "Ohren", "Zähne"], correct: 0,
                    explanation: "Toes heißt Zehen."
                },
                {
                    id: "enfsk2l3_s3", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "schwer", points: 10,
                    question: "Was heißt 'legs'?", answers: ["Beine", "Arme", "Lippen", "Augen"], correct: 0,
                    explanation: "Legs heißt Beine."
                },
                {
                    id: "enfsk2l3_s4", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "schwer", points: 10,
                    question: "Wie heißt 'Füße' auf Englisch?", answers: ["feet", "foot", "legs", "hands"], correct: 0,
                    explanation: "Ein Fuß heißt foot, zwei Füße heißen feet."
                }
            ]
        },
        test: [
                {
                    id: "enfsk2l3_t1", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Nase' auf Englisch?", answers: ["nose", "knees", "nails", "neck"], correct: 0,
                    explanation: "Nase heißt nose."
                },
                {
                    id: "enfsk2l3_t2", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'eyes'?", answers: ["Augen", "Ohren", "Eier", "Arme"], correct: 0,
                    explanation: "Eyes heißt Augen."
                },
                {
                    id: "enfsk2l3_t3", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'shoulders'?", answers: ["Schultern", "Schuhe", "Schulen", "Schnecken"], correct: 0,
                    explanation: "Shoulders heißt Schultern."
                },
                {
                    id: "enfsk2l3_t4", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Wie heißt 'Augen' auf Englisch?", answers: ["eyes", "ears", "eggs", "arms"], correct: 0,
                    explanation: "Augen heißt eyes."
                },
                {
                    id: "enfsk2l3_t5", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Touch your nose'?", answers: ["Fass deine Nase an.", "Putz deine Nase.", "Zeig deine Ohren.", "Halt dir die Ohren zu."], correct: 0,
                    explanation: "Touch heißt anfassen."
                },
                {
                    id: "enfsk2l3_t6", category: "kurs_enfs_k2_l3", area: "schule", grade: 2,
                    subject: "englisch", topic: "school_family", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I have two ears'?", answers: ["Ich habe zwei Ohren.", "Ich habe zwei Augen.", "Ich habe zehn Ohren.", "Ich habe zwei Arme."], correct: 0,
                    explanation: "Ears heißt Ohren."
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
        window.ENGLISCH_K2_KURSE = extraKurse;
        window.ENGLISCH_K2_LEKTIONEN = extraLektionen;
    }
})();
