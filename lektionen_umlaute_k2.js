// Umlaute Klasse 2 – Neuaufbau (ersetzt die alten 3 Lektionen aus lektionen_deutsch_k2.js)
(function () {
    const kurs = {"id": "umlaute_k2", "title": "Umlaute: ä, ö, ü, äu", "icon": "🐻", "grade": 2, "subject": "deutsch", "beschreibung": "Umlaute erkennen, Mehrzahl mit Umlaut, e oder ä, eu oder äu, klein machen und steigern."};
    const neu = [
    {
        "id": "uml_k2_l1",
        "kurs": "umlaute_k2",
        "order": 1,
        "icon": "🐻",
        "title": "ä, ö und ü erkennen",
        "kurz": "Bär, Löwe, Tür – Umlaute hören und finden",
        "erklaerung": {
            "intro": "<b>ä, ö, ü</b> heißen <b>Umlaute</b>. Sie haben <b>zwei Punkte</b> und klingen anders als a, o, u: der B<b>ä</b>r 🐻, der L<b>ö</b>we 🦁, die T<b>ü</b>r 🚪. Auch <b>äu</b> gehört dazu: die M<b>äu</b>se 🐭.",
            "merksatz": "Umlaute haben zwei Punkte: ä, ö, ü – und äu.",
            "beispiele": [
                "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐻</text></svg>B<b>ä</b>r – mit ä",
                "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦁</text></svg>L<b>ö</b>we – mit ö",
                "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚪</text></svg>T<b>ü</b>r – mit ü",
                "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🐭🐭</text></svg>M<b>äu</b>se – mit äu"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "umlk2l1u_leicht_1",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Schau dir das Bild an. Welcher Umlaut steckt im Wort? 🐻 (Tipp: B…, 3 Buchstaben)",
                    "answers": [
                        "ä",
                        "ö",
                        "ü",
                        "äu"
                    ],
                    "correct": 0,
                    "explanation": "Das Bild zeigt: Bär. Man schreibt es mit ä.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐻</text></svg>"
                },
                {
                    "id": "umlk2l1u_leicht_2",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Schau dir das Bild an. Welcher Umlaut steckt im Wort? 🦁 (Tipp: L…, 4 Buchstaben)",
                    "answers": [
                        "ö",
                        "ä",
                        "ü",
                        "äu"
                    ],
                    "correct": 0,
                    "explanation": "Das Bild zeigt: Löwe. Man schreibt es mit ö.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦁</text></svg>"
                },
                {
                    "id": "umlk2l1u_leicht_3",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Schau dir das Bild an. Welcher Umlaut steckt im Wort? 🚪 (Tipp: T…, 3 Buchstaben)",
                    "answers": [
                        "ä",
                        "ü",
                        "ö",
                        "äu"
                    ],
                    "correct": 1,
                    "explanation": "Das Bild zeigt: Tür. Man schreibt es mit ü.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚪</text></svg>"
                },
                {
                    "id": "umlk2l1u_leicht_4",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Schau dir das Bild an. Welcher Umlaut steckt im Wort? 🧀 (Tipp: K…, 4 Buchstaben)",
                    "answers": [
                        "ö",
                        "ä",
                        "ü",
                        "äu"
                    ],
                    "correct": 1,
                    "explanation": "Das Bild zeigt: Käse. Man schreibt es mit ä.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧀</text></svg>"
                },
                {
                    "id": "umlk2l1u_leicht_5",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wie viele Punkte hat ein Umlaut?",
                    "answers": [
                        "2",
                        "1",
                        "3",
                        "keinen"
                    ],
                    "correct": 0,
                    "explanation": "Umlaute haben zwei Punkte: ä, ö, ü."
                }
            ],
            "mittel": [
                {
                    "id": "umlk2l1u_mittel_1",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Wort passt zum Bild? 🐻",
                    "answers": [
                        "Bar",
                        "Bär",
                        "Ber",
                        "Bör"
                    ],
                    "correct": 1,
                    "explanation": "Das Bild zeigt: Bär.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐻</text></svg>"
                },
                {
                    "id": "umlk2l1u_mittel_2",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Wort passt zum Bild? 🥯",
                    "answers": [
                        "Brotchen",
                        "Bretchen",
                        "Brötchen",
                        "Brütchen"
                    ],
                    "correct": 2,
                    "explanation": "Das Bild zeigt: Brötchen.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥯</text></svg>"
                },
                {
                    "id": "umlk2l1u_mittel_3",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Buchstabe fehlt: Schl_ssel?",
                    "answers": [
                        "u",
                        "ö",
                        "ü",
                        "i"
                    ],
                    "correct": 2,
                    "explanation": "Richtig geschrieben: Schlüssel.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔑</text></svg>"
                },
                {
                    "id": "umlk2l1u_mittel_4",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Buchstabe fehlt: Kr_te?",
                    "answers": [
                        "o",
                        "ä",
                        "ü",
                        "ö"
                    ],
                    "correct": 3,
                    "explanation": "Richtig geschrieben: Kröte.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐸</text></svg>"
                },
                {
                    "id": "umlk2l1u_mittel_5",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Schau dir das Bild an. Welcher Umlaut steckt im Wort? 🐭 (Tipp: M…, 5 Buchstaben)",
                    "answers": [
                        "ä",
                        "äu",
                        "ö",
                        "ü"
                    ],
                    "correct": 1,
                    "explanation": "Das Bild zeigt: Mäuse. Man schreibt es mit äu.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐭</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "umlk2l1u_schwer_1",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welcher Buchstabe fehlt: Gem_se?",
                    "answers": [
                        "u",
                        "ü",
                        "ö",
                        "i"
                    ],
                    "correct": 1,
                    "explanation": "Richtig geschrieben: Gemüse.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥕</text></svg>"
                },
                {
                    "id": "umlk2l1u_schwer_2",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welcher Buchstabe fehlt: M_hre?",
                    "answers": [
                        "ö",
                        "o",
                        "ä",
                        "ü"
                    ],
                    "correct": 0,
                    "explanation": "Richtig geschrieben: Möhre.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥕</text></svg>"
                },
                {
                    "id": "umlk2l1u_schwer_3",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welches Wort passt zum Bild? 🎲",
                    "answers": [
                        "Wurfel",
                        "Wörfel",
                        "Wirfel",
                        "Würfel"
                    ],
                    "correct": 3,
                    "explanation": "Das Bild zeigt: Würfel.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎲</text></svg>"
                },
                {
                    "id": "umlk2l1u_schwer_4",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welches Wort hat KEINEN Umlaut?",
                    "answers": [
                        "Hütte",
                        "Hähnchen",
                        "Hund",
                        "Höhle"
                    ],
                    "correct": 2,
                    "explanation": "Hund hat kein ä, ö oder ü."
                },
                {
                    "id": "umlk2l1u_schwer_5",
                    "category": "kurs_uml_k2_l1",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wie viele Umlaute hat das Wort „Bücherkäfer“?",
                    "answers": [
                        "1",
                        "3",
                        "0",
                        "2"
                    ],
                    "correct": 3,
                    "explanation": "B<ü>cherk<ä>fer: ü und ä – also 2."
                }
            ]
        },
        "test": [
            {
                "id": "umlk2l1_test_1",
                "category": "kurs_uml_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Schau dir das Bild an. Welcher Umlaut steckt im Wort? 🐄 (Tipp: K…, 4 Buchstaben)",
                "answers": [
                    "ä",
                    "ö",
                    "ü",
                    "äu"
                ],
                "correct": 2,
                "explanation": "Das Bild zeigt: Kühe. Man schreibt es mit ü.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐄</text></svg>"
            },
            {
                "id": "umlk2l1_test_2",
                "category": "kurs_uml_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Schau dir das Bild an. Welcher Umlaut steckt im Wort? 🥕 (Tipp: M…, 5 Buchstaben)",
                "answers": [
                    "ä",
                    "ü",
                    "äu",
                    "ö"
                ],
                "correct": 3,
                "explanation": "Das Bild zeigt: Möhre. Man schreibt es mit ö.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥕</text></svg>"
            },
            {
                "id": "umlk2l1_test_3",
                "category": "kurs_uml_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Wort passt zum Bild? 🥄",
                "answers": [
                    "Löffel",
                    "Loffel",
                    "Leffel",
                    "Lüffel"
                ],
                "correct": 0,
                "explanation": "Das Bild zeigt: Löffel.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥄</text></svg>"
            },
            {
                "id": "umlk2l1_test_4",
                "category": "kurs_uml_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Buchstabe fehlt: M_dchen?",
                "answers": [
                    "a",
                    "e",
                    "ä",
                    "ö"
                ],
                "correct": 2,
                "explanation": "Richtig geschrieben: Mädchen.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👧</text></svg>"
            },
            {
                "id": "umlk2l1_test_5",
                "category": "kurs_uml_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Buchstabe fehlt: Fl_te?",
                "answers": [
                    "o",
                    "ö",
                    "ä",
                    "ü"
                ],
                "correct": 1,
                "explanation": "Richtig geschrieben: Flöte.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪈</text></svg>"
            },
            {
                "id": "umlk2l1_test_6",
                "category": "kurs_uml_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Schau dir das Bild an. Welcher Umlaut steckt im Wort? 🌳 (Tipp: B…, 5 Buchstaben)",
                "answers": [
                    "ä",
                    "ö",
                    "ü",
                    "äu"
                ],
                "correct": 3,
                "explanation": "Das Bild zeigt: Bäume. Man schreibt es mit äu.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌳</text></svg>"
            },
            {
                "id": "umlk2l1_test_7",
                "category": "kurs_uml_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Wort hat einen Umlaut?",
                "answers": [
                    "Arm",
                    "Auto",
                    "Apfel",
                    "Ärmel"
                ],
                "correct": 3,
                "explanation": "Ärmel beginnt mit Ä."
            },
            {
                "id": "umlk2l1_test_8",
                "category": "kurs_uml_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Umlaute sind …",
                "answers": [
                    "a, o, u",
                    "b, d, g",
                    "ä, ö, ü",
                    "e, i, o"
                ],
                "correct": 2,
                "explanation": "ä, ö und ü sind die Umlaute."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "uml_k2_l2",
        "kurs": "umlaute_k2",
        "order": 2,
        "icon": "🍎",
        "title": "Einer und viele",
        "kurz": "Apfel → Äpfel: der Umlaut in der Mehrzahl",
        "erklaerung": {
            "intro": "Bei vielen Wörtern kommt in der <b>Mehrzahl</b> ein Umlaut: ein <b>A</b>pfel – viele <b>Ä</b>pfel 🍎, ein V<b>o</b>gel – viele V<b>ö</b>gel 🐦, ein H<b>u</b>t – viele H<b>ü</b>te 🎩, ein H<b>au</b>s – viele H<b>äu</b>ser 🏠.",
            "merksatz": "Aus a wird ä, aus o wird ö, aus u wird ü, aus au wird äu.",
            "beispiele": [
                "<svg viewBox='0 0 370 67' style='width:100%;max-width:370px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='185' y='53' text-anchor='middle' font-size='52'>🍎 → 🍎🍎🍎</text></svg>Apfel – <b>Ä</b>pfel",
                "<svg viewBox='0 0 370 67' style='width:100%;max-width:370px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='185' y='53' text-anchor='middle' font-size='52'>🐦 → 🐦🐦🐦</text></svg>Vogel – V<b>ö</b>gel",
                "<svg viewBox='0 0 250 67' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='125' y='53' text-anchor='middle' font-size='52'>📖 → 📚</text></svg>Buch – B<b>ü</b>cher",
                "<svg viewBox='0 0 250 67' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='125' y='53' text-anchor='middle' font-size='52'>🏠 → 🏘️</text></svg>Haus – H<b>äu</b>ser"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "umlk2l2u_leicht_1",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Einer: Apfel. Viele: ?",
                    "answers": [
                        "Apfels",
                        "Apfelen",
                        "Äpfel",
                        "Apfel"
                    ],
                    "correct": 2,
                    "explanation": "Einer: Apfel – viele: Äpfel. In der Mehrzahl kommt der Umlaut.",
                    "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🍎 → 🍎🍎🍎</text></svg>"
                },
                {
                    "id": "umlk2l2u_leicht_2",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Einer: Buch. Viele: ?",
                    "answers": [
                        "Buchs",
                        "Buchen",
                        "Bücher",
                        "Bucher"
                    ],
                    "correct": 2,
                    "explanation": "Einer: Buch – viele: Bücher. In der Mehrzahl kommt der Umlaut.",
                    "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>📖 → 📖📖📖</text></svg>"
                },
                {
                    "id": "umlk2l2u_leicht_3",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Einer: Ball. Viele: ?",
                    "answers": [
                        "Balls",
                        "Ballen",
                        "Bälle",
                        "Balle"
                    ],
                    "correct": 2,
                    "explanation": "Einer: Ball – viele: Bälle. In der Mehrzahl kommt der Umlaut.",
                    "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>⚽ → ⚽⚽⚽</text></svg>"
                },
                {
                    "id": "umlk2l2u_leicht_4",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Einer: Haus. Viele: ?",
                    "answers": [
                        "Häuser",
                        "Hauss",
                        "Hausen",
                        "Hauser"
                    ],
                    "correct": 0,
                    "explanation": "Einer: Haus – viele: Häuser. In der Mehrzahl kommt der Umlaut.",
                    "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🏠 → 🏠🏠🏠</text></svg>"
                },
                {
                    "id": "umlk2l2u_leicht_5",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Einer: Kuh. Viele: ?",
                    "answers": [
                        "Kuhs",
                        "Kühe",
                        "Kuhen",
                        "Kuhe"
                    ],
                    "correct": 1,
                    "explanation": "Einer: Kuh – viele: Kühe. In der Mehrzahl kommt der Umlaut.",
                    "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🐄 → 🐄🐄🐄</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "umlk2l2u_mittel_1",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Einer: Vogel. Viele: ?",
                    "answers": [
                        "Vogels",
                        "Vogelen",
                        "Vogel",
                        "Vögel"
                    ],
                    "correct": 3,
                    "explanation": "Einer: Vogel – viele: Vögel. In der Mehrzahl kommt der Umlaut.",
                    "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🐦 → 🐦🐦🐦</text></svg>"
                },
                {
                    "id": "umlk2l2u_mittel_2",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Einer: Fuchs. Viele: ?",
                    "answers": [
                        "Fuchss",
                        "Füchse",
                        "Fuchsen",
                        "Fuchse"
                    ],
                    "correct": 1,
                    "explanation": "Einer: Fuchs – viele: Füchse. In der Mehrzahl kommt der Umlaut.",
                    "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🦊 → 🦊🦊🦊</text></svg>"
                },
                {
                    "id": "umlk2l2u_mittel_3",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Einer: Maus. Viele: ?",
                    "answers": [
                        "Mauss",
                        "Mausen",
                        "Mause",
                        "Mäuse"
                    ],
                    "correct": 3,
                    "explanation": "Einer: Maus – viele: Mäuse. In der Mehrzahl kommt der Umlaut.",
                    "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🐭 → 🐭🐭🐭</text></svg>"
                },
                {
                    "id": "umlk2l2u_mittel_4",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Einer: Zahn. Viele: ?",
                    "answers": [
                        "Zähne",
                        "Zahns",
                        "Zahnen",
                        "Zahne"
                    ],
                    "correct": 0,
                    "explanation": "Einer: Zahn – viele: Zähne. In der Mehrzahl kommt der Umlaut.",
                    "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🦷 → 🦷🦷🦷</text></svg>"
                },
                {
                    "id": "umlk2l2u_mittel_5",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Einer: Glas. Viele: ?",
                    "answers": [
                        "Glass",
                        "Glasen",
                        "Gläser",
                        "Glaser"
                    ],
                    "correct": 2,
                    "explanation": "Einer: Glas – viele: Gläser. In der Mehrzahl kommt der Umlaut.",
                    "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🥛 → 🥛🥛🥛</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "umlk2l2u_schwer_1",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Einer: Frosch. Viele: ?",
                    "answers": [
                        "Froschs",
                        "Frösche",
                        "Froschen",
                        "Frosche"
                    ],
                    "correct": 1,
                    "explanation": "Einer: Frosch – viele: Frösche. In der Mehrzahl kommt der Umlaut.",
                    "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🐸 → 🐸🐸🐸</text></svg>"
                },
                {
                    "id": "umlk2l2u_schwer_2",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Einer: Blatt. Viele: ?",
                    "answers": [
                        "Blätter",
                        "Blatts",
                        "Blatten",
                        "Blatter"
                    ],
                    "correct": 0,
                    "explanation": "Einer: Blatt – viele: Blätter. In der Mehrzahl kommt der Umlaut.",
                    "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🍃 → 🍃🍃🍃</text></svg>"
                },
                {
                    "id": "umlk2l2u_schwer_3",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Einer: Wolf. Viele: ?",
                    "answers": [
                        "Wölfe",
                        "Wolfs",
                        "Wolfen",
                        "Wolfe"
                    ],
                    "correct": 0,
                    "explanation": "Einer: Wolf – viele: Wölfe. In der Mehrzahl kommt der Umlaut.",
                    "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🐺 → 🐺🐺🐺</text></svg>"
                },
                {
                    "id": "umlk2l2u_schwer_4",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welches Wort bekommt in der Mehrzahl KEINEN Umlaut?",
                    "answers": [
                        "Hut",
                        "Hahn",
                        "Haus",
                        "Hund"
                    ],
                    "correct": 3,
                    "explanation": "Hund – Hunde. Hut – Hüte, Hahn – Hähne, Haus – Häuser."
                },
                {
                    "id": "umlk2l2u_schwer_5",
                    "category": "kurs_uml_k2_l2",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Einer: Stuhl. Viele: ?",
                    "answers": [
                        "Stuhls",
                        "Stühle",
                        "Stuhlen",
                        "Stuhle"
                    ],
                    "correct": 1,
                    "explanation": "Einer: Stuhl – viele: Stühle. In der Mehrzahl kommt der Umlaut.",
                    "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🪑 → 🪑🪑🪑</text></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "umlk2l2_test_1",
                "category": "kurs_uml_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Einer: Baum. Viele: ?",
                "answers": [
                    "Baums",
                    "Baumen",
                    "Baume",
                    "Bäume"
                ],
                "correct": 3,
                "explanation": "Einer: Baum – viele: Bäume. In der Mehrzahl kommt der Umlaut.",
                "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🌳 → 🌳🌳🌳</text></svg>"
            },
            {
                "id": "umlk2l2_test_2",
                "category": "kurs_uml_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Einer: Hut. Viele: ?",
                "answers": [
                    "Huts",
                    "Huten",
                    "Hüte",
                    "Hute"
                ],
                "correct": 2,
                "explanation": "Einer: Hut – viele: Hüte. In der Mehrzahl kommt der Umlaut.",
                "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🎩 → 🎩🎩🎩</text></svg>"
            },
            {
                "id": "umlk2l2_test_3",
                "category": "kurs_uml_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Einer: Topf. Viele: ?",
                "answers": [
                    "Topfs",
                    "Topfen",
                    "Töpfe",
                    "Topfe"
                ],
                "correct": 2,
                "explanation": "Einer: Topf – viele: Töpfe. In der Mehrzahl kommt der Umlaut.",
                "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🍲 → 🍲🍲🍲</text></svg>"
            },
            {
                "id": "umlk2l2_test_4",
                "category": "kurs_uml_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Einer: Rad. Viele: ?",
                "answers": [
                    "Rads",
                    "Räder",
                    "Raden",
                    "Rader"
                ],
                "correct": 1,
                "explanation": "Einer: Rad – viele: Räder. In der Mehrzahl kommt der Umlaut.",
                "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🛞 → 🛞🛞🛞</text></svg>"
            },
            {
                "id": "umlk2l2_test_5",
                "category": "kurs_uml_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Einer: Hahn. Viele: ?",
                "answers": [
                    "Hahns",
                    "Hahnen",
                    "Hähne",
                    "Hahne"
                ],
                "correct": 2,
                "explanation": "Einer: Hahn – viele: Hähne. In der Mehrzahl kommt der Umlaut.",
                "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🐓 → 🐓🐓🐓</text></svg>"
            },
            {
                "id": "umlk2l2_test_6",
                "category": "kurs_uml_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Einer: Korb. Viele: ?",
                "answers": [
                    "Körbe",
                    "Korbs",
                    "Korben",
                    "Korbe"
                ],
                "correct": 0,
                "explanation": "Einer: Korb – viele: Körbe. In der Mehrzahl kommt der Umlaut.",
                "grafik": "<svg viewBox='0 0 395 72' style='width:100%;max-width:395px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='197' y='57' text-anchor='middle' font-size='56'>🧺 → 🧺🧺🧺</text></svg>"
            },
            {
                "id": "umlk2l2_test_7",
                "category": "kurs_uml_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie heißt die Mehrzahl von „Dach“?",
                "answers": [
                    "Dachen",
                    "Dächer",
                    "Dachs",
                    "Decher"
                ],
                "correct": 1,
                "explanation": "Ein Dach – viele Dächer."
            },
            {
                "id": "umlk2l2_test_8",
                "category": "kurs_uml_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was passiert oft in der Mehrzahl?",
                "answers": [
                    "Aus ä wird a",
                    "Aus e wird i",
                    "Aus a wird ä",
                    "Nichts"
                ],
                "correct": 2,
                "explanation": "Apfel – Äpfel, Ball – Bälle."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "uml_k2_l3",
        "kurs": "umlaute_k2",
        "order": 3,
        "icon": "🧤",
        "title": "e oder ä?",
        "kurz": "Hände kommt von Hand – verwandte Wörter helfen",
        "erklaerung": {
            "intro": "<b>e</b> und <b>ä</b> klingen oft gleich. So findest du es heraus: Gibt es ein <b>verwandtes Wort mit a</b>? Dann schreibst du <b>ä</b>: H<b>ä</b>nde – H<b>a</b>nd, B<b>ä</b>cker – b<b>a</b>cken. Findest du kein Wort mit a, schreibst du meistens <b>e</b>: B<b>e</b>tt, H<b>e</b>md.",
            "merksatz": "Gibt es ein Wort mit a? → ä. Sonst → e.",
            "beispiele": [
                "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>✋✋</text></svg>H<b>ä</b>nde – kommt von H<b>a</b>nd",
                "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥖</text></svg>B<b>ä</b>cker – kommt von b<b>a</b>cken",
                "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛏️</text></svg>B<b>e</b>tt – kein Wort mit a, also e"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "umlk2l3u_leicht_1",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welches Wort hilft dir bei „Hände“?",
                    "answers": [
                        "Hund",
                        "Hand",
                        "Held",
                        "Haut"
                    ],
                    "correct": 1,
                    "explanation": "Hände kommt von Hand. Darum schreibt man ä.",
                    "grafik": "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>✋✋</text></svg>"
                },
                {
                    "id": "umlk2l3u_leicht_2",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welches Wort hilft dir bei „Bäcker“?",
                    "answers": [
                        "bauen",
                        "beten",
                        "backen",
                        "bitten"
                    ],
                    "correct": 2,
                    "explanation": "Bäcker kommt von backen. Darum schreibt man ä.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥖</text></svg>"
                },
                {
                    "id": "umlk2l3u_leicht_3",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welches Wort hilft dir bei „Gärtner“?",
                    "answers": [
                        "Gurke",
                        "Garten",
                        "Gabel",
                        "Geige"
                    ],
                    "correct": 1,
                    "explanation": "Gärtner kommt von Garten. Darum schreibt man ä.",
                    "grafik": "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🧑‍🌾</text></svg>"
                },
                {
                    "id": "umlk2l3u_leicht_4",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welches Wort hilft dir bei „kälter“?",
                    "answers": [
                        "klar",
                        "kurz",
                        "kalt",
                        "klein"
                    ],
                    "correct": 2,
                    "explanation": "kälter kommt von kalt. Darum schreibt man ä.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥶</text></svg>"
                },
                {
                    "id": "umlk2l3u_leicht_5",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "e oder ä? B_tt",
                    "answers": [
                        "ä",
                        "a",
                        "ö",
                        "e"
                    ],
                    "correct": 3,
                    "explanation": "Bett – es gibt kein Wort mit a. Also e.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛏️</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "umlk2l3u_mittel_1",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Buchstabe fehlt: Z_hne (von Zahn)?",
                    "answers": [
                        "ä",
                        "a",
                        "e",
                        "ö"
                    ],
                    "correct": 0,
                    "explanation": "Richtig geschrieben: Zähne.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦷</text></svg>"
                },
                {
                    "id": "umlk2l3u_mittel_2",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Buchstabe fehlt: W_lder (von Wald)?",
                    "answers": [
                        "a",
                        "ä",
                        "e",
                        "ö"
                    ],
                    "correct": 1,
                    "explanation": "Richtig geschrieben: Wälder.",
                    "grafik": "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🌲🌲</text></svg>"
                },
                {
                    "id": "umlk2l3u_mittel_3",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "e oder ä? H_md",
                    "answers": [
                        "ä",
                        "a",
                        "ö",
                        "e"
                    ],
                    "correct": 3,
                    "explanation": "Hemd – kein Wort mit a. Also e.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👕</text></svg>"
                },
                {
                    "id": "umlk2l3u_mittel_4",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Buchstabe fehlt: Bl_tter (von Blatt)?",
                    "answers": [
                        "a",
                        "e",
                        "ä",
                        "ö"
                    ],
                    "correct": 2,
                    "explanation": "Richtig geschrieben: Blätter.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍃</text></svg>"
                },
                {
                    "id": "umlk2l3u_mittel_5",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Wort ist richtig geschrieben? 👨👨",
                    "answers": [
                        "Menner",
                        "Manner",
                        "Männer",
                        "Mänerr"
                    ],
                    "correct": 2,
                    "explanation": "Richtig ist: Männer.",
                    "grafik": "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>👨👨</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "umlk2l3u_schwer_1",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "e oder ä? F_ld (der Acker)",
                    "answers": [
                        "ä",
                        "a",
                        "e",
                        "ö"
                    ],
                    "correct": 2,
                    "explanation": "Feld – kein Wort mit a. Also e.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌾</text></svg>"
                },
                {
                    "id": "umlk2l3u_schwer_2",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welcher Buchstabe fehlt: F_hre (von fahren)?",
                    "answers": [
                        "a",
                        "e",
                        "ö",
                        "ä"
                    ],
                    "correct": 3,
                    "explanation": "Richtig geschrieben: Fähre.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⛴️</text></svg>"
                },
                {
                    "id": "umlk2l3u_schwer_3",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welches Wort hilft dir bei „Länder“?",
                    "answers": [
                        "Leiter",
                        "Linde",
                        "Lunge",
                        "Land"
                    ],
                    "correct": 3,
                    "explanation": "Länder kommt von Land. Darum schreibt man ä."
                },
                {
                    "id": "umlk2l3u_schwer_4",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welches Wort ist richtig geschrieben? 🏓",
                    "answers": [
                        "Schläger",
                        "Schleger",
                        "Schlager",
                        "Schlöger"
                    ],
                    "correct": 0,
                    "explanation": "Richtig ist: Schläger.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏓</text></svg>"
                },
                {
                    "id": "umlk2l3u_schwer_5",
                    "category": "kurs_uml_k2_l3",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Warum schreibt man „Gärtner“ mit ä?",
                    "answers": [
                        "Weil es ein Beruf ist",
                        "Weil es von Garten kommt",
                        "Weil es lang ist",
                        "Weil man es so hört"
                    ],
                    "correct": 1,
                    "explanation": "Gärtner – Garten. Das verwandte Wort hat ein a."
                }
            ]
        },
        "test": [
            {
                "id": "umlk2l3_test_1",
                "category": "kurs_uml_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Wort hilft dir bei „Bälle“?",
                "answers": [
                    "Ball",
                    "Bild",
                    "Bulle",
                    "Beule"
                ],
                "correct": 0,
                "explanation": "Bälle kommt von Ball. Darum schreibt man ä.",
                "grafik": "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>⚽⚽</text></svg>"
            },
            {
                "id": "umlk2l3_test_2",
                "category": "kurs_uml_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Buchstabe fehlt: Gl_ser (von Glas)?",
                "answers": [
                    "a",
                    "e",
                    "ö",
                    "ä"
                ],
                "correct": 3,
                "explanation": "Richtig geschrieben: Gläser.",
                "grafik": "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🥛🥛</text></svg>"
            },
            {
                "id": "umlk2l3_test_3",
                "category": "kurs_uml_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "e oder ä? W_lt",
                "answers": [
                    "ä",
                    "e",
                    "a",
                    "ö"
                ],
                "correct": 1,
                "explanation": "Welt – kein Wort mit a. Also e.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌍</text></svg>"
            },
            {
                "id": "umlk2l3_test_4",
                "category": "kurs_uml_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Wort hilft dir bei „Fässer“?",
                "answers": [
                    "Fisch",
                    "Fuß",
                    "Fass",
                    "Fest"
                ],
                "correct": 2,
                "explanation": "Fässer kommt von Fass. Darum schreibt man ä.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛢️</text></svg>"
            },
            {
                "id": "umlk2l3_test_5",
                "category": "kurs_uml_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Wort ist richtig geschrieben? 🐄",
                "answers": [
                    "Kelber",
                    "Kalber",
                    "Kälber",
                    "Kölber"
                ],
                "correct": 2,
                "explanation": "Richtig ist: Kälber.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐄</text></svg>"
            },
            {
                "id": "umlk2l3_test_6",
                "category": "kurs_uml_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Buchstabe fehlt: _ste (von Ast)?",
                "answers": [
                    "a",
                    "e",
                    "ö",
                    "ä"
                ],
                "correct": 3,
                "explanation": "Richtig geschrieben: Äste.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌳</text></svg>"
            },
            {
                "id": "umlk2l3_test_7",
                "category": "kurs_uml_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "e oder ä? N_st (das Vogelhaus)",
                "answers": [
                    "ä",
                    "a",
                    "e",
                    "ö"
                ],
                "correct": 2,
                "explanation": "Nest – kein Wort mit a. Also e.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪺</text></svg>"
            },
            {
                "id": "umlk2l3_test_8",
                "category": "kurs_uml_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Bei ä hilft ein verwandtes Wort mit …",
                "answers": [
                    "e",
                    "a",
                    "i",
                    "o"
                ],
                "correct": 1,
                "explanation": "Hände – Hand, Bäcker – backen."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "uml_k2_l4",
        "kurs": "umlaute_k2",
        "order": 4,
        "icon": "🐭",
        "title": "eu oder äu?",
        "kurz": "Mäuse kommt von Maus – Feuer bleibt eu",
        "erklaerung": {
            "intro": "<b>eu</b> und <b>äu</b> klingen gleich. Gibt es ein <b>verwandtes Wort mit au</b>, schreibst du <b>äu</b>: M<b>äu</b>se – M<b>au</b>s 🐭, B<b>äu</b>me – B<b>au</b>m 🌳. Gibt es keins, schreibst du <b>eu</b>: F<b>eu</b>er 🔥, <b>Eu</b>le 🦉, h<b>eu</b>te.",
            "merksatz": "Gibt es ein Wort mit au? → äu. Sonst → eu.",
            "beispiele": [
                "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🐭🐭</text></svg>M<b>äu</b>se – von M<b>au</b>s",
                "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🌳🌳</text></svg>B<b>äu</b>me – von B<b>au</b>m",
                "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔥</text></svg>F<b>eu</b>er – kein au, also eu",
                "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦉</text></svg><b>Eu</b>le – kein au, also eu"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "umlk2l4u_leicht_1",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welcher Buchstabe fehlt: M__se?",
                    "answers": [
                        "eu",
                        "au",
                        "ei",
                        "äu"
                    ],
                    "correct": 3,
                    "explanation": "Richtig geschrieben: Mäuse.",
                    "grafik": "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🐭🐭</text></svg>"
                },
                {
                    "id": "umlk2l4u_leicht_2",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "eu oder äu? F__er",
                    "answers": [
                        "äu",
                        "eu",
                        "au",
                        "ei"
                    ],
                    "correct": 1,
                    "explanation": "Feuer – kein Wort mit au. Also eu.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔥</text></svg>"
                },
                {
                    "id": "umlk2l4u_leicht_3",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welcher Buchstabe fehlt: H__ser?",
                    "answers": [
                        "eu",
                        "au",
                        "ei",
                        "äu"
                    ],
                    "correct": 3,
                    "explanation": "Richtig geschrieben: Häuser.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏘️</text></svg>"
                },
                {
                    "id": "umlk2l4u_leicht_4",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "eu oder äu? __le (der Vogel)",
                    "answers": [
                        "eu",
                        "äu",
                        "au",
                        "ei"
                    ],
                    "correct": 0,
                    "explanation": "Eule – kein Wort mit au. Also eu.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦉</text></svg>"
                },
                {
                    "id": "umlk2l4u_leicht_5",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welches Wort hilft dir bei „Bäume“?",
                    "answers": [
                        "Bein",
                        "Baum",
                        "Beule",
                        "Besen"
                    ],
                    "correct": 1,
                    "explanation": "Bäume kommt von Baum. Darum schreibt man äu.",
                    "grafik": "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🌳🌳</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "umlk2l4u_mittel_1",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Buchstabe fehlt: Tr__me (von Traum)?",
                    "answers": [
                        "eu",
                        "au",
                        "ei",
                        "äu"
                    ],
                    "correct": 3,
                    "explanation": "Richtig geschrieben: Träume.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💭</text></svg>"
                },
                {
                    "id": "umlk2l4u_mittel_2",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "eu oder äu? n__n (die Zahl 9)",
                    "answers": [
                        "eu",
                        "äu",
                        "au",
                        "ei"
                    ],
                    "correct": 0,
                    "explanation": "neun – kein Wort mit au. Also eu.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>9️⃣</text></svg>"
                },
                {
                    "id": "umlk2l4u_mittel_3",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Buchstabe fehlt: Kr__ter (von Kraut)?",
                    "answers": [
                        "eu",
                        "au",
                        "ei",
                        "äu"
                    ],
                    "correct": 3,
                    "explanation": "Richtig geschrieben: Kräuter.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌿</text></svg>"
                },
                {
                    "id": "umlk2l4u_mittel_4",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "eu oder äu? Fr__nd",
                    "answers": [
                        "äu",
                        "au",
                        "ei",
                        "eu"
                    ],
                    "correct": 3,
                    "explanation": "Freund – kein Wort mit au. Also eu.",
                    "grafik": "<svg viewBox='0 0 288 93' style='width:100%;max-width:288px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='144' y='73' text-anchor='middle' font-size='72'>🧑‍🤝‍🧑</text></svg>"
                },
                {
                    "id": "umlk2l4u_mittel_5",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Wort hilft dir bei „Läufer“?",
                    "answers": [
                        "leuchten",
                        "lesen",
                        "laufen",
                        "legen"
                    ],
                    "correct": 2,
                    "explanation": "Läufer kommt von laufen. Darum schreibt man äu.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏃</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "umlk2l4u_schwer_1",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welches Wort ist richtig geschrieben? 🫃",
                    "answers": [
                        "Beuche",
                        "Bauche",
                        "Bäiche",
                        "Bäuche"
                    ],
                    "correct": 3,
                    "explanation": "Richtig ist: Bäuche.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🫃</text></svg>"
                },
                {
                    "id": "umlk2l4u_schwer_2",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welches Wort ist richtig geschrieben? 📅",
                    "answers": [
                        "häute",
                        "heute",
                        "haute",
                        "hoite"
                    ],
                    "correct": 1,
                    "explanation": "Richtig ist: heute.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📅</text></svg>"
                },
                {
                    "id": "umlk2l4u_schwer_3",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welcher Buchstabe fehlt: Schl__che (von Schlauch)?",
                    "answers": [
                        "eu",
                        "au",
                        "äu",
                        "ei"
                    ],
                    "correct": 2,
                    "explanation": "Richtig geschrieben: Schläuche.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚿</text></svg>"
                },
                {
                    "id": "umlk2l4u_schwer_4",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Warum schreibt man „Mäuse“ mit äu?",
                    "answers": [
                        "Weil es Tiere sind",
                        "Weil es Mehrzahl ist",
                        "Weil man es so hört",
                        "Weil es von Maus kommt"
                    ],
                    "correct": 3,
                    "explanation": "Mäuse – Maus. Das verwandte Wort hat au."
                },
                {
                    "id": "umlk2l4u_schwer_5",
                    "category": "kurs_uml_k2_l4",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "eu oder äu? L__te (die Menschen)",
                    "answers": [
                        "äu",
                        "eu",
                        "au",
                        "ei"
                    ],
                    "correct": 1,
                    "explanation": "Leute – kein Wort mit au. Also eu.",
                    "grafik": "<svg viewBox='0 0 288 93' style='width:100%;max-width:288px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='144' y='73' text-anchor='middle' font-size='72'>👨‍👩‍👧</text></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "umlk2l4_test_1",
                "category": "kurs_uml_k2_l4",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Buchstabe fehlt: B__me?",
                "answers": [
                    "eu",
                    "au",
                    "äu",
                    "ei"
                ],
                "correct": 2,
                "explanation": "Richtig geschrieben: Bäume.",
                "grafik": "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🌳🌳</text></svg>"
            },
            {
                "id": "umlk2l4_test_2",
                "category": "kurs_uml_k2_l4",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "eu oder äu? __ro (das Geld)",
                "answers": [
                    "eu",
                    "äu",
                    "au",
                    "ei"
                ],
                "correct": 0,
                "explanation": "Euro – kein Wort mit au. Also eu.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💶</text></svg>"
            },
            {
                "id": "umlk2l4_test_3",
                "category": "kurs_uml_k2_l4",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Wort ist richtig geschrieben? 🏘️",
                "answers": [
                    "Heuser",
                    "Hauser",
                    "Heiser",
                    "Häuser"
                ],
                "correct": 3,
                "explanation": "Richtig ist: Häuser.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏘️</text></svg>"
            },
            {
                "id": "umlk2l4_test_4",
                "category": "kurs_uml_k2_l4",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Buchstabe fehlt: Str__cher (von Strauch)?",
                "answers": [
                    "eu",
                    "au",
                    "ei",
                    "äu"
                ],
                "correct": 3,
                "explanation": "Richtig geschrieben: Sträucher.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌳</text></svg>"
            },
            {
                "id": "umlk2l4_test_5",
                "category": "kurs_uml_k2_l4",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "eu oder äu? B__le (am Kopf)",
                "answers": [
                    "äu",
                    "au",
                    "ei",
                    "eu"
                ],
                "correct": 3,
                "explanation": "Beule – kein Wort mit au. Also eu.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🤕</text></svg>"
            },
            {
                "id": "umlk2l4_test_6",
                "category": "kurs_uml_k2_l4",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Wort ist richtig geschrieben? 🧑‍🤝‍🧑",
                "answers": [
                    "Fräunde",
                    "Freunde",
                    "Fraunde",
                    "Freinde"
                ],
                "correct": 1,
                "explanation": "Richtig ist: Freunde.",
                "grafik": "<svg viewBox='0 0 288 93' style='width:100%;max-width:288px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='144' y='73' text-anchor='middle' font-size='72'>🧑‍🤝‍🧑</text></svg>"
            },
            {
                "id": "umlk2l4_test_7",
                "category": "kurs_uml_k2_l4",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Wort hilft dir bei „Räuber“?",
                "answers": [
                    "reiben",
                    "reiten",
                    "rufen",
                    "rauben"
                ],
                "correct": 3,
                "explanation": "Räuber kommt von rauben. Darum schreibt man äu.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦹</text></svg>"
            },
            {
                "id": "umlk2l4_test_8",
                "category": "kurs_uml_k2_l4",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Gibt es kein Wort mit au, schreibt man …",
                "answers": [
                    "eu",
                    "äu",
                    "au",
                    "ou"
                ],
                "correct": 0,
                "explanation": "Feuer, Eule, heute – kein au, also eu."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "uml_k2_l5",
        "kurs": "umlaute_k2",
        "order": 5,
        "icon": "🐣",
        "title": "Klein machen und steigern",
        "kurz": "Haus → Häuschen, alt → älter",
        "erklaerung": {
            "intro": "Auch beim <b>Kleinmachen</b> kommt oft ein Umlaut: das Haus – das H<b>äu</b>schen 🏠, der Hund – das H<b>ü</b>ndchen 🐶. Und beim <b>Vergleichen</b>: alt – <b>ä</b>lter, groß – gr<b>ö</b>ßer, jung – j<b>ü</b>nger.",
            "merksatz": "-chen und -lein machen klein: Haus → Häuschen. Vergleichen: alt → älter.",
            "beispiele": [
                "<svg viewBox='0 0 250 67' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='125' y='53' text-anchor='middle' font-size='52'>🏠 → 🏡</text></svg>Haus – H<b>äu</b>schen",
                "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐶</text></svg>Hund – H<b>ü</b>ndchen",
                "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👴</text></svg>alt – <b>ä</b>lter",
                "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦒</text></svg>groß – gr<b>ö</b>ßer"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "umlk2l5u_leicht_1",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wie heißt es in klein: Haus → ?",
                    "answers": [
                        "Hauschen",
                        "Hauslein",
                        "Häuser",
                        "Häuschen"
                    ],
                    "correct": 3,
                    "explanation": "Haus → Häuschen. Beim Verkleinern mit -chen oder -lein kommt oft ein Umlaut.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏡</text></svg>"
                },
                {
                    "id": "umlk2l5u_leicht_2",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wie heißt es in klein: Hund → ?",
                    "answers": [
                        "Hundchen",
                        "Hundlein",
                        "Hündchen",
                        "Hunde"
                    ],
                    "correct": 2,
                    "explanation": "Hund → Hündchen. Beim Verkleinern mit -chen oder -lein kommt oft ein Umlaut.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐶</text></svg>"
                },
                {
                    "id": "umlk2l5u_leicht_3",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wie geht es weiter: alt → ?",
                    "answers": [
                        "alter",
                        "älter",
                        "elter",
                        "mehr alt"
                    ],
                    "correct": 1,
                    "explanation": "alt – älter – am ältten. Beim Steigern kommt oft ein Umlaut.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👴</text></svg>"
                },
                {
                    "id": "umlk2l5u_leicht_4",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wie geht es weiter: groß → ?",
                    "answers": [
                        "größer",
                        "großer",
                        "greßer",
                        "mehr groß"
                    ],
                    "correct": 0,
                    "explanation": "groß – größer – am größten. Beim Steigern kommt oft ein Umlaut.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦒</text></svg>"
                },
                {
                    "id": "umlk2l5u_leicht_5",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wie heißt es in klein: Katze → ?",
                    "answers": [
                        "Katzchen",
                        "Katzlein",
                        "Katzen",
                        "Kätzchen"
                    ],
                    "correct": 3,
                    "explanation": "Katze → Kätzchen. Beim Verkleinern mit -chen oder -lein kommt oft ein Umlaut.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐱</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "umlk2l5u_mittel_1",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie heißt es in klein: Hase → ?",
                    "answers": [
                        "Haschen",
                        "Haslein",
                        "Hasen",
                        "Häschen"
                    ],
                    "correct": 3,
                    "explanation": "Hase → Häschen. Beim Verkleinern mit -chen oder -lein kommt oft ein Umlaut.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐰</text></svg>"
                },
                {
                    "id": "umlk2l5u_mittel_2",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie heißt es in klein: Baum → ?",
                    "answers": [
                        "Baumchen",
                        "Baumlein",
                        "Bäume",
                        "Bäumchen"
                    ],
                    "correct": 3,
                    "explanation": "Baum → Bäumchen. Beim Verkleinern mit -chen oder -lein kommt oft ein Umlaut.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌱</text></svg>"
                },
                {
                    "id": "umlk2l5u_mittel_3",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie geht es weiter: jung → ?",
                    "answers": [
                        "jünger",
                        "junger",
                        "jinger",
                        "mehr jung"
                    ],
                    "correct": 0,
                    "explanation": "jung – jünger – am jüngten. Beim Steigern kommt oft ein Umlaut.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👶</text></svg>"
                },
                {
                    "id": "umlk2l5u_mittel_4",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie geht es weiter: kalt → ?",
                    "answers": [
                        "kalter",
                        "kelter",
                        "mehr kalt",
                        "kälter"
                    ],
                    "correct": 3,
                    "explanation": "kalt – kälter – am kältten. Beim Steigern kommt oft ein Umlaut.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥶</text></svg>"
                },
                {
                    "id": "umlk2l5u_mittel_5",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie heißt es in klein: Blume → ?",
                    "answers": [
                        "Blumchen",
                        "Blumlein",
                        "Blumen",
                        "Blümchen"
                    ],
                    "correct": 3,
                    "explanation": "Blume → Blümchen. Beim Verkleinern mit -chen oder -lein kommt oft ein Umlaut.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌼</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "umlk2l5u_schwer_1",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wie heißt es in klein: Buch → ?",
                    "answers": [
                        "Büchlein",
                        "Buchlein",
                        "Buchchen",
                        "Bücher"
                    ],
                    "correct": 0,
                    "explanation": "Buch → Büchlein. Beim Verkleinern mit -chen oder -lein kommt oft ein Umlaut.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📖</text></svg>"
                },
                {
                    "id": "umlk2l5u_schwer_2",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wie geht es weiter: lang → ?",
                    "answers": [
                        "langer",
                        "länger",
                        "lenger",
                        "mehr lang"
                    ],
                    "correct": 1,
                    "explanation": "lang – länger – am längten. Beim Steigern kommt oft ein Umlaut.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐍</text></svg>"
                },
                {
                    "id": "umlk2l5u_schwer_3",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wie geht es weiter: stark → ?",
                    "answers": [
                        "starker",
                        "stärker",
                        "sterker",
                        "mehr stark"
                    ],
                    "correct": 1,
                    "explanation": "stark – stärker – am stärkten. Beim Steigern kommt oft ein Umlaut.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💪</text></svg>"
                },
                {
                    "id": "umlk2l5u_schwer_4",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wie heißt es in klein: Glas → ?",
                    "answers": [
                        "Glaschen",
                        "Glaslein",
                        "Gläschen",
                        "Gläser"
                    ],
                    "correct": 2,
                    "explanation": "Glas → Gläschen. Beim Verkleinern mit -chen oder -lein kommt oft ein Umlaut.",
                    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥛</text></svg>"
                },
                {
                    "id": "umlk2l5u_schwer_5",
                    "category": "kurs_uml_k2_l5",
                    "area": "schule",
                    "grade": 2,
                    "subject": "deutsch",
                    "topic": "umlaute",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Mein Bruder ist alter als ich.",
                        "Mein Bruder ist älter als ich.",
                        "Mein Bruder ist elter als ich.",
                        "Mein Bruder ist mehr alt als ich."
                    ],
                    "correct": 1,
                    "explanation": "alt – älter: mit ä."
                }
            ]
        },
        "test": [
            {
                "id": "umlk2l5_test_1",
                "category": "kurs_uml_k2_l5",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie heißt es in klein: Vogel → ?",
                "answers": [
                    "Vogelchen",
                    "Vogellein",
                    "Vögelchen",
                    "Vögel"
                ],
                "correct": 2,
                "explanation": "Vogel → Vögelchen. Beim Verkleinern mit -chen oder -lein kommt oft ein Umlaut.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐤</text></svg>"
            },
            {
                "id": "umlk2l5_test_2",
                "category": "kurs_uml_k2_l5",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie geht es weiter: warm → ?",
                "answers": [
                    "warmer",
                    "wermer",
                    "mehr warm",
                    "wärmer"
                ],
                "correct": 3,
                "explanation": "warm – wärmer – am wärmten. Beim Steigern kommt oft ein Umlaut.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
            },
            {
                "id": "umlk2l5_test_3",
                "category": "kurs_uml_k2_l5",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie geht es weiter: kurz → ?",
                "answers": [
                    "kürzer",
                    "kurzer",
                    "kirzer",
                    "mehr kurz"
                ],
                "correct": 0,
                "explanation": "kurz – kürzer – am kürzten. Beim Steigern kommt oft ein Umlaut.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📏</text></svg>"
            },
            {
                "id": "umlk2l5_test_4",
                "category": "kurs_uml_k2_l5",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie heißt es in klein: Mund → ?",
                "answers": [
                    "Mundchen",
                    "Mundlein",
                    "Mündchen",
                    "Münder"
                ],
                "correct": 2,
                "explanation": "Mund → Mündchen. Beim Verkleinern mit -chen oder -lein kommt oft ein Umlaut.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👄</text></svg>"
            },
            {
                "id": "umlk2l5_test_5",
                "category": "kurs_uml_k2_l5",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie geht es weiter: klug → ?",
                "answers": [
                    "klüger",
                    "kluger",
                    "kliger",
                    "mehr klug"
                ],
                "correct": 0,
                "explanation": "klug – klüger – am klügten. Beim Steigern kommt oft ein Umlaut.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦉</text></svg>"
            },
            {
                "id": "umlk2l5_test_6",
                "category": "kurs_uml_k2_l5",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie heißt es in klein: Korb → ?",
                "answers": [
                    "Körbchen",
                    "Korbchen",
                    "Korblein",
                    "Körbe"
                ],
                "correct": 0,
                "explanation": "Korb → Körbchen. Beim Verkleinern mit -chen oder -lein kommt oft ein Umlaut.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧺</text></svg>"
            },
            {
                "id": "umlk2l5_test_7",
                "category": "kurs_uml_k2_l5",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie heißt ein kleiner Bär?",
                "answers": [
                    "Bärchen",
                    "Barchen",
                    "Berchen",
                    "Bären"
                ],
                "correct": 0,
                "explanation": "Bär – Bärchen.",
                "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧸</text></svg>"
            },
            {
                "id": "umlk2l5_test_8",
                "category": "kurs_uml_k2_l5",
                "area": "schule",
                "grade": 2,
                "subject": "deutsch",
                "topic": "umlaute",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was passiert oft beim Kleinmachen mit -chen?",
                "answers": [
                    "Es kommt ein Umlaut",
                    "Das Wort wird länger ohne Umlaut",
                    "Es wird Mehrzahl",
                    "Es wird ein Verb"
                ],
                "correct": 0,
                "explanation": "Haus – Häuschen, Hund – Hündchen."
            }
        ],
        "bestehenAb": 0.8
    }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) {
        var k = KURSE.find(function (x) { return x.id === kurs.id; });
        if (k) Object.assign(k, kurs); else KURSE.push(kurs);
    }
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        for (var i = LEKTIONEN.length - 1; i >= 0; i--) if (LEKTIONEN[i].kurs === kurs.id) LEKTIONEN.splice(i, 1);
        neu.forEach(function (l) { LEKTIONEN.push(l); });
    }
})();
