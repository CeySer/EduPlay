// Klasse 6 Englisch – Die -ing-Form (22.10.2026).
// Neue Kurse samt Lektionen. topic = Thema der Wissensfragen. Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
    {
        "id": "ing_form_k6",
        "title": "Die -ing-Form",
        "icon": "✍️",
        "grade": 6,
        "subject": "englisch",
        "beschreibung": "So schreibst und benutzt du Wörter mit -ing."
    }
];
    const extraLektionen = [
    {
        "id": "ing_form_k6_l1",
        "kurs": "ing_form_k6",
        "order": 1,
        "icon": "✏️",
        "title": "-ing richtig schreiben",
        "kurz": "Rechtschreibregeln für die -ing-Form",
        "erklaerung": {
            "intro": "Meist hängst du einfach <b>-ing</b> an: read → reading. Ein <b>stummes -e</b> fällt weg: make → making (aber see → seeing, be → being). Nach <b>kurzem, betontem Vokal + einem Konsonanten</b> verdoppelst du den Konsonanten: run → running, begin → beginning. <b>-ie</b> wird zu <b>-ying</b>: lie → lying. <b>-y</b> bleibt: play → playing.",
            "beispiele": [
                "➕ read → reading, play → playing, study → studying",
                "✂️ make → making, write → writing – aber see → seeing, be → being",
                "👯 run → running, swim → swimming, begin → beginning – aber visit → visiting, open → opening, rain → raining",
                "🇬🇧 lie → lying, die → dying, tie → tying; britisch: travel → travelling"
            ],
            "merksatz": "Stummes -e weg, -ie wird -y, kurzer betonter Vokal + 1 Konsonant: verdoppeln!"
        },
        "uebung": {
            "leicht": [
                {
                    "id": "ingformk6l1u_leicht_1",
                    "category": "kurs_ing_form_k6_l1",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie schreibt man read + -ing?",
                    "answers": [
                        "reading",
                        "readding",
                        "readeing",
                        "raeding"
                    ],
                    "correct": 0,
                    "explanation": "Grundregel: einfach -ing anhängen – read → reading."
                },
                {
                    "id": "ingformk6l1u_leicht_2",
                    "category": "kurs_ing_form_k6_l1",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie schreibt man make + -ing?",
                    "answers": [
                        "makeing",
                        "makking",
                        "making",
                        "maiking"
                    ],
                    "correct": 2,
                    "explanation": "Ein stummes -e am Ende fällt vor -ing weg: make → making."
                },
                {
                    "id": "ingformk6l1u_leicht_3",
                    "category": "kurs_ing_form_k6_l1",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie schreibt man play + -ing?",
                    "answers": [
                        "plaing",
                        "playing",
                        "pliing",
                        "playying"
                    ],
                    "correct": 1,
                    "explanation": "Ein -y am Ende bleibt stehen: play → playing."
                },
                {
                    "id": "ingformk6l1u_leicht_4",
                    "category": "kurs_ing_form_k6_l1",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie schreibt man run + -ing?",
                    "answers": [
                        "runing",
                        "runeing",
                        "runnning",
                        "running"
                    ],
                    "correct": 3,
                    "explanation": "Kurzer betonter Vokal + ein Konsonant: Der Konsonant wird verdoppelt – run → running."
                }
            ],
            "mittel": [
                {
                    "id": "ingformk6l1u_mittel_1",
                    "category": "kurs_ing_form_k6_l1",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie schreibt man swim + -ing?",
                    "answers": [
                        "swiming",
                        "swimeing",
                        "swimming",
                        "swimmming"
                    ],
                    "correct": 2,
                    "explanation": "Kurzes betontes i + ein Konsonant (m): verdoppeln – swim → swimming."
                },
                {
                    "id": "ingformk6l1u_mittel_2",
                    "category": "kurs_ing_form_k6_l1",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie schreibt man lie + -ing?",
                    "answers": [
                        "lying",
                        "lieing",
                        "liing",
                        "lieying"
                    ],
                    "correct": 0,
                    "explanation": "Aus -ie wird vor -ing ein -y: lie → lying."
                },
                {
                    "id": "ingformk6l1u_mittel_3",
                    "category": "kurs_ing_form_k6_l1",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie schreibt man see + -ing?",
                    "answers": [
                        "seing",
                        "seeeing",
                        "seeying",
                        "seeing"
                    ],
                    "correct": 3,
                    "explanation": "Bei -ee fällt nichts weg, denn das e ist nicht stumm: see → seeing."
                },
                {
                    "id": "ingformk6l1u_mittel_4",
                    "category": "kurs_ing_form_k6_l1",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Paar ist richtig?",
                    "answers": [
                        "visit → visitting",
                        "visit → visiting",
                        "open → openning",
                        "rain → rainning"
                    ],
                    "correct": 1,
                    "explanation": "Nur bei betonter letzter Silbe mit kurzem Vokal wird verdoppelt. VIsit, OPen (Betonung vorn) und rain (langer Laut) verdoppeln nicht."
                }
            ],
            "schwer": [
                {
                    "id": "ingformk6l1u_schwer_1",
                    "category": "kurs_ing_form_k6_l1",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie schreibt man begin + -ing?",
                    "answers": [
                        "begining",
                        "beginning",
                        "beginnig",
                        "beginnning"
                    ],
                    "correct": 1,
                    "explanation": "Bei beGIN liegt die Betonung auf der letzten Silbe (kurzes i + n): verdoppeln – beginning."
                },
                {
                    "id": "ingformk6l1u_schwer_2",
                    "category": "kurs_ing_form_k6_l1",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Britisches Englisch: travel + -ing?",
                    "answers": [
                        "travelleing",
                        "travaling",
                        "travellling",
                        "travelling"
                    ],
                    "correct": 3,
                    "explanation": "Im britischen Englisch wird ein -l nach einem einzelnen Vokal verdoppelt – auch wenn die Silbe unbetont ist: travelling (amerikanisch: traveling)."
                },
                {
                    "id": "ingformk6l1u_schwer_3",
                    "category": "kurs_ing_form_k6_l1",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Warum schreibt man running mit nn?",
                    "answers": [
                        "Kurzer betonter Vokal + ein Konsonant",
                        "Alle Verben auf -n verdoppeln das n",
                        "Weil run ein unregelmäßiges Verb ist",
                        "Vor -ing stehen immer zwei Konsonanten"
                    ],
                    "correct": 0,
                    "explanation": "Endet ein Verb auf kurzen, betonten Vokal + einen Konsonanten, wird dieser verdoppelt. open → opening zeigt: nicht jedes -n wird verdoppelt."
                },
                {
                    "id": "ingformk6l1u_schwer_4",
                    "category": "kurs_ing_form_k6_l1",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Form ist FALSCH geschrieben?",
                    "answers": [
                        "studying",
                        "dying",
                        "studing",
                        "tying"
                    ],
                    "correct": 2,
                    "explanation": "Das -y bleibt vor -ing stehen: study → studying. Nur -ie wird zu -y (die → dying, tie → tying)."
                }
            ]
        },
        "test": [
            {
                "id": "ingformk6l1_test_1",
                "category": "kurs_ing_form_k6_l1",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "ing_form",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie schreibt man write + -ing?",
                "answers": [
                    "writeing",
                    "writting",
                    "wrighting",
                    "writing"
                ],
                "correct": 3,
                "explanation": "Stummes -e fällt weg, kein Verdoppeln: write → writing."
            },
            {
                "id": "ingformk6l1_test_2",
                "category": "kurs_ing_form_k6_l1",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "ing_form",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie schreibt man be + -ing?",
                "answers": [
                    "bing",
                    "being",
                    "beeing",
                    "beying"
                ],
                "correct": 1,
                "explanation": "Ausnahme: Bei be fällt das e nicht weg – be → being."
            },
            {
                "id": "ingformk6l1_test_3",
                "category": "kurs_ing_form_k6_l1",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "ing_form",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie schreibt man stop + -ing?",
                "answers": [
                    "stoping",
                    "stopeing",
                    "stopping",
                    "stoppping"
                ],
                "correct": 2,
                "explanation": "Kurzes betontes o + ein Konsonant (p): verdoppeln – stop → stopping."
            },
            {
                "id": "ingformk6l1_test_4",
                "category": "kurs_ing_form_k6_l1",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "ing_form",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie schreibt man die + -ing?",
                "answers": [
                    "dying",
                    "dieing",
                    "diing",
                    "dieying"
                ],
                "correct": 0,
                "explanation": "Aus -ie wird vor -ing ein -y: die → dying."
            },
            {
                "id": "ingformk6l1_test_5",
                "category": "kurs_ing_form_k6_l1",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "ing_form",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welche Reihe ist komplett richtig?",
                "answers": [
                    "sitting – coming – flying",
                    "siting – coming – flying",
                    "sitting – comeing – flying",
                    "sitting – coming – fliing"
                ],
                "correct": 0,
                "explanation": "sit → sitting (verdoppeln), come → coming (stummes -e weg), fly → flying (-y bleibt)."
            },
            {
                "id": "ingformk6l1_test_6",
                "category": "kurs_ing_form_k6_l1",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "ing_form",
                "difficulty": "schwer",
                "points": 10,
                "question": "Bei welchem Verb wird der Endkonsonant NICHT verdoppelt?",
                "answers": [
                    "get",
                    "shop",
                    "forget",
                    "open"
                ],
                "correct": 3,
                "explanation": "Bei OPen liegt die Betonung auf der ersten Silbe: opening. get, shop und forGET verdoppeln: getting, shopping, forgetting."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "ing_form_k6_l2",
        "kurs": "ing_form_k6",
        "order": 2,
        "icon": "🧩",
        "title": "Wofür braucht man -ing?",
        "kurz": "Fünf typische Verwendungen der -ing-Form",
        "erklaerung": {
            "intro": "Die -ing-Form brauchst du für <b>Verlaufsformen</b> (I am reading), nach <b>like, love, hate, enjoy</b> (I enjoy swimming; nach like, love, hate geht auch to: I like to swim), nach <b>Präpositionen</b> (good at drawing, before going) und als <b>Subjekt</b> (Swimming is fun). Bei Adjektiven gilt: <b>-ing</b> beschreibt die Sache (boring), <b>-ed</b> das Gefühl (bored). Nach want und decide steht dagegen <b>to</b> – mehr dazu in Klasse 8.",
            "beispiele": [
                "🔄 I am reading. / I was reading when you called.",
                "❤️ I enjoy swimming. I love dancing.",
                "🎨 She is good at drawing. Wash your hands before eating.",
                "😴 Swimming is fun. – The film is boring. I am bored."
            ],
            "merksatz": "Verlaufsform, nach enjoy & Co., nach Präposition, als Subjekt – und: boring = die Sache, bored = ich."
        },
        "uebung": {
            "leicht": [
                {
                    "id": "ingformk6l2u_leicht_1",
                    "category": "kurs_ing_form_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Look! The dog ___ in the garden.",
                    "answers": [
                        "running is",
                        "are running",
                        "is running",
                        "is run"
                    ],
                    "correct": 2,
                    "explanation": "Look! zeigt: Es passiert gerade – Present Progressive mit is + -ing."
                },
                {
                    "id": "ingformk6l2u_leicht_2",
                    "category": "kurs_ing_form_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "I enjoy ___ in the sea.",
                    "answers": [
                        "swim",
                        "swimming",
                        "to swim",
                        "swims"
                    ],
                    "correct": 1,
                    "explanation": "Nach enjoy steht immer die -ing-Form, nie to: I enjoy swimming."
                },
                {
                    "id": "ingformk6l2u_leicht_3",
                    "category": "kurs_ing_form_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "She is good at ___.",
                    "answers": [
                        "draw",
                        "to draw",
                        "drawing",
                        "draws"
                    ],
                    "correct": 2,
                    "explanation": "Nach einer Präposition (at) steht die -ing-Form: good at drawing."
                },
                {
                    "id": "ingformk6l2u_leicht_4",
                    "category": "kurs_ing_form_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "The film was very long. It was ___.",
                    "answers": [
                        "bored",
                        "boring",
                        "bore",
                        "boringly"
                    ],
                    "correct": 1,
                    "explanation": "Die Sache, die langweilt, ist boring. bored beschreibt, wie sich eine Person fühlt."
                }
            ],
            "mittel": [
                {
                    "id": "ingformk6l2u_mittel_1",
                    "category": "kurs_ing_form_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "___ is my favourite hobby.",
                    "answers": [
                        "Danced",
                        "Dances",
                        "To dancing",
                        "Dancing"
                    ],
                    "correct": 3,
                    "explanation": "Ein -ing-Wort kann Subjekt sein: Dancing is my favourite hobby."
                },
                {
                    "id": "ingformk6l2u_mittel_2",
                    "category": "kurs_ing_form_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "I was ___ when you called me.",
                    "answers": [
                        "sleeping",
                        "sleep",
                        "slept",
                        "sleeps"
                    ],
                    "correct": 0,
                    "explanation": "Past Progressive: was/were + -ing – I was sleeping when you called."
                },
                {
                    "id": "ingformk6l2u_mittel_3",
                    "category": "kurs_ing_form_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "We are interested in ___ new things.",
                    "answers": [
                        "learn",
                        "learning",
                        "to learn",
                        "learned"
                    ],
                    "correct": 1,
                    "explanation": "Nach der Präposition in steht die -ing-Form: interested in learning."
                },
                {
                    "id": "ingformk6l2u_mittel_4",
                    "category": "kurs_ing_form_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Du langweilst dich. Was sagst du?",
                    "answers": [
                        "I'm bored.",
                        "I'm boring.",
                        "I'm boreing.",
                        "I'm bore."
                    ],
                    "correct": 0,
                    "explanation": "bored = gelangweilt (Gefühl). I'm boring hieße: Ich bin langweilig."
                }
            ],
            "schwer": [
                {
                    "id": "ingformk6l2u_schwer_1",
                    "category": "kurs_ing_form_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wash your hands before ___.",
                    "answers": [
                        "eat",
                        "to eat",
                        "eating",
                        "you eating"
                    ],
                    "correct": 2,
                    "explanation": "Nach der Präposition before steht die -ing-Form: before eating."
                },
                {
                    "id": "ingformk6l2u_schwer_2",
                    "category": "kurs_ing_form_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist FALSCH?",
                    "answers": [
                        "I enjoy reading comics.",
                        "I like reading comics.",
                        "I like to read comics.",
                        "I enjoy to read comics."
                    ],
                    "correct": 3,
                    "explanation": "Nach enjoy steht nur -ing. Nach like sind -ing und to beide richtig."
                },
                {
                    "id": "ingformk6l2u_schwer_3",
                    "category": "kurs_ing_form_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "The game was exciting.",
                        "The game was excited.",
                        "I was exciting about it.",
                        "I was excite about it."
                    ],
                    "correct": 0,
                    "explanation": "Die Sache ist exciting (spannend), die Person ist excited (aufgeregt): I was excited about it."
                },
                {
                    "id": "ingformk6l2u_schwer_4",
                    "category": "kurs_ing_form_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "ing_form",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Reading is fun. – Welche Verwendung ist das?",
                    "answers": [
                        "Das ist eine Verlaufsform",
                        "Das ist ein Adjektiv wie boring",
                        "Das -ing-Wort ist das Subjekt",
                        "-ing steht nach einer Präposition"
                    ],
                    "correct": 2,
                    "explanation": "Reading steht am Satzanfang als Subjekt: Was ist fun? – Reading."
                }
            ]
        },
        "test": [
            {
                "id": "ingformk6l2_test_1",
                "category": "kurs_ing_form_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "ing_form",
                "difficulty": "leicht",
                "points": 10,
                "question": "My brother hates ___ his room.",
                "answers": [
                    "tidy",
                    "tidying",
                    "tidies",
                    "tidied"
                ],
                "correct": 1,
                "explanation": "Nach hate steht die -ing-Form (oder to + Verb): He hates tidying his room."
            },
            {
                "id": "ingformk6l2_test_2",
                "category": "kurs_ing_form_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "ing_form",
                "difficulty": "leicht",
                "points": 10,
                "question": "They ___ football at 5 o'clock yesterday.",
                "answers": [
                    "was playing",
                    "are playing",
                    "were play",
                    "were playing"
                ],
                "correct": 3,
                "explanation": "Past Progressive: they + were + -ing für eine Handlung, die damals gerade lief."
            },
            {
                "id": "ingformk6l2_test_3",
                "category": "kurs_ing_form_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "ing_form",
                "difficulty": "mittel",
                "points": 10,
                "question": "Thank you for ___ me.",
                "answers": [
                    "help",
                    "to help",
                    "helping",
                    "helped"
                ],
                "correct": 2,
                "explanation": "Nach der Präposition for steht die -ing-Form: Thank you for helping me."
            },
            {
                "id": "ingformk6l2_test_4",
                "category": "kurs_ing_form_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "ing_form",
                "difficulty": "mittel",
                "points": 10,
                "question": "Die Geschichte war interessant: The story was ___.",
                "answers": [
                    "interesting",
                    "interested",
                    "interest",
                    "interestingly"
                ],
                "correct": 0,
                "explanation": "Die Sache ist interesting. interested beschreibt eine Person: I am interested."
            },
            {
                "id": "ingformk6l2_test_5",
                "category": "kurs_ing_form_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "ing_form",
                "difficulty": "schwer",
                "points": 10,
                "question": "I decided ___ home early.",
                "answers": [
                    "going",
                    "go",
                    "goes",
                    "to go"
                ],
                "correct": 3,
                "explanation": "Nach decide (wie nach want) steht to + Verb, nicht -ing. Mehr dazu in Klasse 8."
            },
            {
                "id": "ingformk6l2_test_6",
                "category": "kurs_ing_form_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "ing_form",
                "difficulty": "schwer",
                "points": 10,
                "question": "She is good at singing. – Warum steht hier -ing?",
                "answers": [
                    "Es ist das Subjekt des Satzes",
                    "Es steht nach einer Präposition",
                    "Es ist ein Adjektiv wie boring",
                    "Es ist eine Verlaufsform"
                ],
                "correct": 1,
                "explanation": "at ist eine Präposition – danach steht die -ing-Form: good at singing."
            }
        ],
        "bestehenAb": 0.8
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
        window.ING_K6_KURSE = extraKurse;
        window.ING_K6_LEKTIONEN = extraLektionen;
    }
})();
