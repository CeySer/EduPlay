// Englisch Klasse 5 - Kurs "Unit 1: Check für die Englischarbeit"
// Passend zur Checkliste: Short forms, Reading (Timetable), Writing (My school).
// Wörter (Unit 1) stehen in fragen/vocabulary.js (Liste VOCABULARY_LISTEN.en.k5.unit1).
// Topics = Wissensthemen in fragen/klasse5/questions_k5_themen.js.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "unit1_k5", title: "Unit 1: Check für die Arbeit", icon: "✅", grade: 5, subject: "englisch", beschreibung: "Short forms, einen Stundenplan lesen und einen Text über deine Schule schreiben." }
    ];
    const extraLektionen = [
    {
        id: "u1k5_l1", kurs: "unit1_k5", order: 1, icon: "✂️",
        title: "Short forms", kurz: "I'm, isn't, don't, can't – Kurzformen sicher bilden",
        erklaerung: {
            intro: "Im Englischen zieht man beim Sprechen und in Nachrichten an Freunde oft zwei Wörter zusammen. Der <b>Apostroph (')</b> steht genau dort, wo Buchstaben fehlen: <b>I am → I'm</b> (das a fehlt), <b>do not → don't</b> (das o fehlt).",
            beispiele: ["🙋 be: I am → <b>I'm</b> · you are → <b>you're</b> · he is → <b>he's</b> · she is → <b>she's</b> · it is → <b>it's</b> · we are → <b>we're</b> · they are → <b>they're</b>", "🚫 not: is not → <b>isn't</b> · are not → <b>aren't</b> · do not → <b>don't</b> · does not → <b>doesn't</b> · cannot → <b>can't</b> · I am not → <b>I'm not</b>", "🎒 have got: I have got → <b>I've got</b> · she has got → <b>she's got</b> · have not got → <b>haven't got</b> · has not got → <b>hasn't got</b>", "❓ Fragen: what is → <b>what's</b> · where is → <b>where's</b> · who is → <b>who's</b> · let us → <b>let's</b>"],
            merksatz: "Der Apostroph steht da, wo Buchstaben fehlen. Achtung: its (ohne ') heißt „sein/ihr“ – it's heißt it is. Kurzantwort mit Yes ohne Kurzform: Yes, I am."
        },
        uebung: {
            leicht: [
                { id: "u1k5l1u_leicht_1", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "leicht", points: 10,
                    question: "Wie lautet die Kurzform von 'I am'?",
                    answers: ["Im", "I'am", "Iam", "I'm"], correct: 3,
                    explanation: "Das a fällt weg, dafür steht der Apostroph: I'm." },
                { id: "u1k5l1u_leicht_2", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "leicht", points: 10,
                    question: "Wie lautet die Kurzform von 'do not'?",
                    answers: ["don't", "dont", "do'nt", "d'not"], correct: 0,
                    explanation: "Das o von not fällt weg: don't." },
                { id: "u1k5l1u_leicht_3", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "leicht", points: 10,
                    question: "Wofür steht 'she's' in 'She's my sister.'?",
                    answers: ["she is", "she has", "she was", "she does"], correct: 0,
                    explanation: "She's my sister = She is my sister." },
                { id: "u1k5l1u_leicht_4", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "leicht", points: 10,
                    question: "Wie lautet die Kurzform von 'we are'?",
                    answers: ["were", "wer'e", "we're", "w'are"], correct: 2,
                    explanation: "we are → we're. Achtung: were ohne Apostroph ist eine andere Form (waren)." }
            ],
            mittel: [
                { id: "u1k5l1u_mittel_1", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Tom ___ like football.' (does not)",
                    answers: ["doesn't", "don't", "isn't", "not"], correct: 0,
                    explanation: "Bei he/she/it heißt die Verneinung doesn't." },
                { id: "u1k5l1u_mittel_2", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["I'm not twelve.", "I amn't twelve.", "I'm no twelve.", "I not am twelve."], correct: 0,
                    explanation: "I am not → I'm not. Eine Form „amn't“ gibt es nicht." },
                { id: "u1k5l1u_mittel_3", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "mittel", points: 10,
                    question: "Wie lautet 'They have got a dog.' mit Kurzform?",
                    answers: ["They's got a dog.", "They've got a dog.", "They're got a dog.", "Theyve got a dog."], correct: 1,
                    explanation: "they have got → they've got." },
                { id: "u1k5l1u_mittel_4", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "mittel", points: 10,
                    question: "Ergänze: '___ your name?'",
                    answers: ["Whats", "What're", "What's", "Wha's"], correct: 2,
                    explanation: "What is your name? → What's your name?" }
            ],
            schwer: [
                { id: "u1k5l1u_schwer_1", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "schwer", points: 10,
                    question: "Was bedeutet 'it's' in 'It's cold today.'?",
                    answers: ["it has", "its", "it is", "it was"], correct: 2,
                    explanation: "It's cold = It is cold." },
                { id: "u1k5l1u_schwer_2", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["The dog wags its tail.", "The dog wags it's tail.", "The dog wags its' tail.", "The dog wag it's tail."], correct: 0,
                    explanation: "its (ohne Apostroph) heißt „sein“: its tail = sein Schwanz." },
                { id: "u1k5l1u_schwer_3", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "schwer", points: 10,
                    question: "'Are you twelve?' – Welche Kurzantwort ist richtig?",
                    answers: ["Yes, I'm.", "Yes, I am.", "Yes, I'm am.", "Yes, am I."], correct: 1,
                    explanation: "Bei Yes gibt es keine Kurzform am Satzende: Yes, I am." },
                { id: "u1k5l1u_schwer_4", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "schwer", points: 10,
                    question: "Wie lautet die Langform von 'can't'?",
                    answers: ["can not't", "cannot", "could not", "can it"], correct: 1,
                    explanation: "can't = cannot (zusammengeschrieben)." }
            ]
        },
        test: [
                { id: "u1k5l1_test_1", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "leicht", points: 10,
                    question: "Wie lautet die Kurzform von 'is not'?",
                    answers: ["isn't", "is'nt", "isnt", "i'snt"], correct: 0,
                    explanation: "Das o von not fällt weg: isn't." },
                { id: "u1k5l1_test_2", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "leicht", points: 10,
                    question: "Wie lautet die Kurzform von 'he has got'?",
                    answers: ["he've got", "he'd got", "hes got", "he's got"], correct: 3,
                    explanation: "he has got → he's got." },
                { id: "u1k5l1_test_3", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'We ___ got a cat.' (have not)",
                    answers: ["haven't", "hasn't", "don't", "aren't"], correct: 0,
                    explanation: "we have not got → we haven't got." },
                { id: "u1k5l1_test_4", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "mittel", points: 10,
                    question: "Wofür steht 'Let's' in 'Let's play!'?",
                    answers: ["let is", "let us", "let has", "let it"], correct: 1,
                    explanation: "Let's = let us (Lass uns …)." },
                { id: "u1k5l1_test_5", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["You're my friend.", "Your my friend.", "You'r my friend.", "Youre my friend."], correct: 0,
                    explanation: "you are → you're. your heißt „dein“." },
                { id: "u1k5l1_test_6", category: "kurs_u1k5_l1", area: "schule", grade: 5, subject: "englisch", topic: "short_forms", difficulty: "schwer", points: 10,
                    question: "Wie lautet die Kurzform von 'Where is'?",
                    answers: ["Wheres", "Where's", "Where'is", "Were's"], correct: 1,
                    explanation: "where is → where's." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "u1k5_l2", kurs: "unit1_k5", order: 2, icon: "📄",
        title: "Reading: Timetable", kurz: "Stundenpläne und kurze Texte lesen und Fragen beantworten",
        erklaerung: {
            intro: "So liest du einen englischen Text in der Arbeit: <b>1.</b> Erst die Frage lesen. <b>2.</b> Im Text nach dem Schlüsselwort suchen – einem Wochentag, einer Uhrzeit oder einem Fach. <b>3.</b> Die Antwort genau im Text prüfen. Bei „Richtig oder falsch?“ gilt nur, was wirklich im Text steht.",
            beispiele: ["📄 Tom's Monday: 8:00 maths · 8:45 English · 9:30 break", "❓ What does Tom have at 8:45? → Schlüsselwort 8:45 suchen → <b>English</b>.", "🔑 Fragewörter: What? (Was?) · When? (Wann?) · Who? (Wer?) · How? (Wie?) · Why? (Warum?) · Which? (Welche/r?)"],
            merksatz: "Erst die Frage, dann der Text. Such das Schlüsselwort (Tag, Uhrzeit, Fach, Name) – die Antwort steht meist direkt daneben."
        },
        uebung: {
            leicht: [
                { id: "u1k5l2u_leicht_1", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "leicht", points: 10,
                    question: "📄 Tom's Monday: 8:00 maths · 8:45 English · 9:30 break · 9:50 art (double lesson) · 11:20 lunch break · 12:00 PE\n\nWhat does Tom have at 8:00?",
                    answers: ["English", "maths", "art", "PE"], correct: 1,
                    explanation: "Neben 8:00 steht maths." },
                { id: "u1k5l2u_leicht_2", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "leicht", points: 10,
                    question: "📄 Tom's Monday: 8:00 maths · 8:45 English · 9:30 break · 9:50 art (double lesson) · 11:20 lunch break · 12:00 PE\n\nWhen is the break?",
                    answers: ["at 8:45", "at 11:20", "at 12:00", "at 9:30"], correct: 3,
                    explanation: "Neben break steht 9:30." },
                { id: "u1k5l2u_leicht_3", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "leicht", points: 10,
                    question: "📄 Emma: \"My favourite day is Wednesday. In the morning we have music and German. After the break we have biology. I don't like biology, but I love music!\"\n\nWhich subject does Emma love?",
                    answers: ["German", "biology", "art", "music"], correct: 3,
                    explanation: "Emma sagt: „I love music!“" },
                { id: "u1k5l2u_leicht_4", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "leicht", points: 10,
                    question: "📄 Mia: \"I'm in class 5b. Our form teacher is Mr Brown. He teaches English and history. My best friend Lily sits next to me.\"\n\nWho is Mia's form teacher?",
                    answers: ["Lily", "Mr Brown", "Mrs Brown", "Mr Black"], correct: 1,
                    explanation: "Our form teacher is Mr Brown." }
            ],
            mittel: [
                { id: "u1k5l2u_mittel_1", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "mittel", points: 10,
                    question: "📄 Tom's Monday: 8:00 maths · 8:45 English · 9:30 break · 9:50 art (double lesson) · 11:20 lunch break · 12:00 PE\n\nRichtig oder falsch? „Tom has a double lesson of art.“",
                    answers: ["Richtig – so steht es im Text.", "Falsch – im Text steht etwas anderes.", "Das steht nicht im Text.", "Nur am Wochenende richtig."], correct: 0,
                    explanation: "Im Plan steht: art (double lesson)." },
                { id: "u1k5l2u_mittel_2", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "mittel", points: 10,
                    question: "📄 Emma: \"My favourite day is Wednesday. In the morning we have music and German. After the break we have biology. I don't like biology, but I love music!\"\n\nRichtig oder falsch? „Emma likes biology.“",
                    answers: ["Richtig – so steht es im Text.", "Falsch – im Text steht etwas anderes.", "Das steht nicht im Text.", "Nur am Wochenende richtig."], correct: 1,
                    explanation: "Emma sagt: „I don't like biology.“" },
                { id: "u1k5l2u_mittel_3", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "mittel", points: 10,
                    question: "📄 Jack: \"My school starts at half past eight and finishes at quarter past three. I go to school by bus. On Fridays I have a free period after lunch.\"\n\nHow does Jack go to school?",
                    answers: ["by bus", "by bike", "on foot", "by car"], correct: 0,
                    explanation: "I go to school by bus." },
                { id: "u1k5l2u_mittel_4", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "mittel", points: 10,
                    question: "📄 Jack: \"My school starts at half past eight and finishes at quarter past three. I go to school by bus. On Fridays I have a free period after lunch.\"\n\nWhen does Jack's school finish?",
                    answers: ["at 3:45", "at 8:30", "at 2:15", "at 3:15"], correct: 3,
                    explanation: "quarter past three = 3:15." }
            ],
            schwer: [
                { id: "u1k5l2u_schwer_1", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "schwer", points: 10,
                    question: "📄 Jack: \"My school starts at half past eight and finishes at quarter past three. I go to school by bus. On Fridays I have a free period after lunch.\"\n\nWhen does Jack have a free period?",
                    answers: ["on Fridays before lunch", "on Fridays after lunch", "every day after lunch", "on Mondays after lunch"], correct: 1,
                    explanation: "On Fridays I have a free period after lunch." },
                { id: "u1k5l2u_schwer_2", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "schwer", points: 10,
                    question: "📄 Mia: \"I'm in class 5b. Our form teacher is Mr Brown. He teaches English and history. My best friend Lily sits next to me.\"\n\nWhich subjects does Mr Brown teach?",
                    answers: ["English and history", "English and maths", "history and art", "German and history"], correct: 0,
                    explanation: "He teaches English and history." },
                { id: "u1k5l2u_schwer_3", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "schwer", points: 10,
                    question: "📄 Emma: \"My favourite day is Wednesday. In the morning we have music and German. After the break we have biology. I don't like biology, but I love music!\"\n\nWhat does Emma have after the break on Wednesday?",
                    answers: ["music", "German", "a free period", "biology"], correct: 3,
                    explanation: "After the break we have biology." },
                { id: "u1k5l2u_schwer_4", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "schwer", points: 10,
                    question: "📄 Tom's Monday: 8:00 maths · 8:45 English · 9:30 break · 9:50 art (double lesson) · 11:20 lunch break · 12:00 PE\n\nWhat does Tom have after the lunch break?",
                    answers: ["PE", "art", "maths", "English"], correct: 0,
                    explanation: "Nach 11:20 lunch break kommt 12:00 PE." }
            ]
        },
        test: [
                { id: "u1k5l2_test_1", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "leicht", points: 10,
                    question: "📄 Mia: \"I'm in class 5b. Our form teacher is Mr Brown. He teaches English and history. My best friend Lily sits next to me.\"\n\nWho sits next to Mia?",
                    answers: ["Mr Brown", "her sister", "Lily", "nobody"], correct: 2,
                    explanation: "My best friend Lily sits next to me." },
                { id: "u1k5l2_test_2", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "leicht", points: 10,
                    question: "📄 Jack: \"My school starts at half past eight and finishes at quarter past three. I go to school by bus. On Fridays I have a free period after lunch.\"\n\nWhen does Jack's school start?",
                    answers: ["at 9:30", "at 8:15", "at 7:30", "at 8:30"], correct: 3,
                    explanation: "half past eight = 8:30." },
                { id: "u1k5l2_test_3", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "mittel", points: 10,
                    question: "📄 Tom's Monday: 8:00 maths · 8:45 English · 9:30 break · 9:50 art (double lesson) · 11:20 lunch break · 12:00 PE\n\nHow long is the break?",
                    answers: ["30 minutes", "20 minutes", "15 minutes", "50 minutes"], correct: 1,
                    explanation: "Von 9:30 bis 9:50 sind es 20 Minuten." },
                { id: "u1k5l2_test_4", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "mittel", points: 10,
                    question: "📄 Emma: \"My favourite day is Wednesday. In the morning we have music and German. After the break we have biology. I don't like biology, but I love music!\"\n\nRichtig oder falsch? „Emma has music and German in the morning.“",
                    answers: ["Richtig – so steht es im Text.", "Falsch – im Text steht etwas anderes.", "Das steht nicht im Text.", "Nur am Wochenende richtig."], correct: 0,
                    explanation: "In the morning we have music and German." },
                { id: "u1k5l2_test_5", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "schwer", points: 10,
                    question: "📄 Mia: \"I'm in class 5b. Our form teacher is Mr Brown. He teaches English and history. My best friend Lily sits next to me.\"\n\nMia is in class …",
                    answers: ["5a", "6b", "5b", "4b"], correct: 2,
                    explanation: "I'm in class 5b." },
                { id: "u1k5l2_test_6", category: "kurs_u1k5_l2", area: "schule", grade: 5, subject: "englisch", topic: "reading_timetable", difficulty: "schwer", points: 10,
                    question: "📄 Tom's Monday: 8:00 maths · 8:45 English · 9:30 break · 9:50 art (double lesson) · 11:20 lunch break · 12:00 PE\n\nRichtig oder falsch? „Tom has PE before the break.“",
                    answers: ["Richtig – so steht es im Text.", "Das steht nicht im Text.", "Nur am Wochenende richtig.", "Falsch – im Text steht etwas anderes."], correct: 3,
                    explanation: "PE ist um 12:00, also nach der Pause." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "u1k5_l3", kurs: "unit1_k5", order: 3, icon: "✍️",
        title: "Writing: My school", kurz: "Einen kurzen Text über deine Schule schreiben",
        erklaerung: {
            intro: "So schreibst du einen Text über deine Schule: <b>1. Anfang:</b> Wer bist du, welche Schule, welche Klasse? <b>2. Mitte:</b> Wie ist die Schule, welche Fächer magst du – und warum? Wer ist dein Lehrer, wer dein Freund? <b>3. Schluss:</b> Ein Satz, wie du deine Schule findest. Verbinde Sätze mit <b>and, but, because</b>.",
            beispiele: ["📝 Mustertext: My name is Lea and I'm eleven. I go to Park School. I'm in class 5c. My school is big and it has got a library and a canteen. My favourite subject is art because I love drawing. I don't like maths, but my maths teacher is nice. My best friend is Ben. I like my school!", "🧱 Satzbausteine: My school is … · It has got … · I'm in class … · My favourite subject is … because … · I don't like …, but … · On Mondays we have … · My form teacher is … · I like my school because …", "🔗 Verbinden: and (und) · but (aber) · because (weil) · First … Then … (Zuerst … Dann …)"],
            merksatz: "Jeder Satz braucht ein Verb: I like …, My school is … Beginne nicht jeden Satz mit I. Ein guter Text hat Anfang, Mitte und Schluss. Tipp: Schreib den Mustertext mit deinen Infos ins Heft."
        },
        uebung: {
            leicht: [
                { id: "u1k5l3u_leicht_1", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "leicht", points: 10,
                    question: "Welches Wort passt? 'I like art ___ I love drawing.'",
                    answers: ["because", "but", "and", "or"], correct: 0,
                    explanation: "Eine Begründung kommt mit because (weil)." },
                { id: "u1k5l3u_leicht_2", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "leicht", points: 10,
                    question: "Welches Wort passt? 'I like English, ___ I don't like maths.'",
                    answers: ["but", "because", "and", "so"], correct: 0,
                    explanation: "Ein Gegensatz kommt mit but (aber)." },
                { id: "u1k5l3u_leicht_3", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "leicht", points: 10,
                    question: "Wie beginnst du einen Text über deine Schule?",
                    answers: ["Bye, see you soon at school!", "Maths is very hard for me.", "Because it's fun and easy.", "My name is Lea and I'm in class 5c."], correct: 3,
                    explanation: "Am Anfang stellst du dich vor." },
                { id: "u1k5l3u_leicht_4", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "leicht", points: 10,
                    question: "Was heißt 'My favourite subject is music.'?",
                    answers: ["Mein Lieblingsfach ist Musik.", "Ich mag das Fach Musik nicht.", "Musik ist sehr schwierig.", "Wir haben heute Musik."], correct: 0,
                    explanation: "favourite subject = Lieblingsfach." }
            ],
            mittel: [
                { id: "u1k5l3u_mittel_1", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "mittel", points: 10,
                    question: "Bring in die richtige Reihenfolge: subject / my / art / favourite / is",
                    answers: ["My subject favourite is art.", "Art my favourite subject is.", "My favourite subject is art.", "Is my favourite subject art."], correct: 2,
                    explanation: "Erst my favourite subject, dann is, dann das Fach." },
                { id: "u1k5l3u_mittel_2", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["My school has got a big library.", "My school have got a big library.", "My school has a got big library.", "My school is got a big library."], correct: 0,
                    explanation: "my school = it → has got." },
                { id: "u1k5l3u_mittel_3", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "mittel", points: 10,
                    question: "Welcher Satz passt als Schluss?",
                    answers: ["My name is Tom and I'm 11.", "I really like my school!", "First we have maths at eight.", "Hello, I'm in class 5a."], correct: 1,
                    explanation: "Der Schluss sagt, wie du die Schule findest." },
                { id: "u1k5l3u_mittel_4", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'On Mondays ___ have PE.'",
                    answers: ["us", "our", "are", "we"], correct: 3,
                    explanation: "Vor dem Verb have steht das Subjekt we." }
            ],
            schwer: [
                { id: "u1k5l3u_schwer_1", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist am besten?",
                    answers: ["I like PE because.", "Because I love sports and PE.", "I PE like because sports.", "I like PE because I love sports."], correct: 3,
                    explanation: "Nach because kommt ein ganzer Satz mit Grund." },
                { id: "u1k5l3u_schwer_2", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["I don't like history.", "I not like history.", "I doesn't like history.", "I no like history."], correct: 0,
                    explanation: "Verneinung mit I: I don't like …" },
                { id: "u1k5l3u_schwer_3", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "schwer", points: 10,
                    question: "Bring in die richtige Reihenfolge: in / I'm / class / 5c",
                    answers: ["I'm class in 5c.", "In class I'm 5c.", "I'm in class 5c.", "Class 5c I'm in."], correct: 2,
                    explanation: "I'm in class 5c. – Ich bin in Klasse 5c." },
                { id: "u1k5l3u_schwer_4", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "schwer", points: 10,
                    question: "Was macht deinen Text besser?",
                    answers: ["jeden Satz mit I anfangen", "nur Wörter ohne ganze Sätze", "and, but, because und andere Satzanfänge", "viele Wörter auf Deutsch dazwischen"], correct: 2,
                    explanation: "Verbindungswörter und wechselnde Satzanfänge machen den Text lebendig." }
            ]
        },
        test: [
                { id: "u1k5l3_test_1", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "leicht", points: 10,
                    question: "Welches Wort passt? 'My school is big ___ it has got a canteen.'",
                    answers: ["but", "because", "or", "and"], correct: 3,
                    explanation: "Zwei Infos ohne Gegensatz verbindet man mit and." },
                { id: "u1k5l3_test_2", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "leicht", points: 10,
                    question: "Welcher Satz ist richtig?",
                    answers: ["My form teacher are Mrs Green.", "My form teacher Mrs Green is.", "My form teacher be Mrs Green.", "My form teacher is Mrs Green."], correct: 3,
                    explanation: "Eine Person → is." },
                { id: "u1k5l3_test_3", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Ich bin in Klasse 5a.'?",
                    answers: ["I have class 5a.", "I'm on class 5a.", "I am class in 5a.", "I'm in class 5a."], correct: 3,
                    explanation: "in Klasse = in class." },
                { id: "u1k5l3_test_4", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "mittel", points: 10,
                    question: "Welcher Satz beschreibt die Schule?",
                    answers: ["My favourite animal is a cat.", "I go swimming on Fridays.", "My little sister is nine.", "My school is small and old."], correct: 3,
                    explanation: "Nur dieser Satz sagt etwas über die Schule." },
                { id: "u1k5l3_test_5", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'I like my school ___ my friends are there.'",
                    answers: ["because", "but", "or", "then"], correct: 0,
                    explanation: "Begründung → because." },
                { id: "u1k5l3_test_6", category: "kurs_u1k5_l3", area: "schule", grade: 5, subject: "englisch", topic: "writing_school", difficulty: "schwer", points: 10,
                    question: "Welcher Satz passt nach 'First we have maths.'?",
                    answers: ["First we have English.", "Then we have English.", "Because we have English.", "But first we have maths."], correct: 1,
                    explanation: "First … Then … = Zuerst … dann …" }
        ],
        bestehenAb: 0.8
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
})();
