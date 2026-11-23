// Mit Größen rechnen - Klasse 5 Mathe (Längen, Gewichte, Rechnen mit Größen, Sachaufgaben)
(function () {
    const extraKurse = [{"id": "groessen_rechnen_k5", "title": "Mit Größen rechnen", "icon": "⚖️", "grade": 5, "subject": "mathe", "beschreibung": "Längen und Gewichte umrechnen, verschiedene Einheiten zusammenrechnen und Sachaufgaben lösen."}];
    const extraLektionen = [
    {
        "id": "grr_k5_l1",
        "kurs": "groessen_rechnen_k5",
        "order": 1,
        "icon": "📏",
        "title": "Längen umrechnen",
        "kurz": "mm, cm, dm, m, km – auch mit Komma",
        "erklaerung": {
            "intro": "Längeneinheiten von klein nach groß: <b>mm → cm → dm → m → km</b>. Zwischen mm, cm, dm und m ist die Umrechnungszahl immer <b>10</b>, von m zu km ist sie <b>1000</b>. Von der großen zur kleinen Einheit rechnest du <b>mal</b>, von der kleinen zur großen <b>geteilt</b>. Bei <b>Kommazahlen</b> steht vor dem Komma die große Einheit: 3,45 m = 3 m 45 cm = 345 cm.",
            "merksatz": "Groß → klein: mal. Klein → groß: geteilt. 1 m = 100 cm, 1 km = 1000 m.",
            "beispiele": [
                "Die Umrechnungstreppe: nach unten mal, nach oben geteilt.<svg viewBox='0 0 380 170' style='width:100%;max-width:380px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='136' width='60' height='28' rx='6' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='40' y='155' text-anchor='middle' font-size='14' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>km</text><text x='76' y='132' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>: 1000</text><rect x='80' y='110' width='60' height='28' rx='6' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='110' y='129' text-anchor='middle' font-size='14' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>m</text><text x='146' y='106' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>: 10</text><rect x='150' y='84' width='60' height='28' rx='6' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='180' y='103' text-anchor='middle' font-size='14' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>dm</text><text x='216' y='80' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>: 10</text><rect x='220' y='58' width='60' height='28' rx='6' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='250' y='77' text-anchor='middle' font-size='14' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>cm</text><text x='286' y='54' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>: 10</text><rect x='290' y='32' width='60' height='28' rx='6' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='320' y='51' text-anchor='middle' font-size='14' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>mm</text><text x='8' y='14' font-size='10' font-weight='700' font-family='sans-serif' fill='#94a3b8'>hoch: teilen · runter: mal</text></svg>",
                "3,45 m = 345 cm, denn 1 m = 100 cm: 3,45 · 100 = 345.",
                "Achtung: 3 m 5 cm = 3,05 m – nicht 3,5 m! Die Zentimeter brauchen zwei Stellen nach dem Komma."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "grrk5l1u_leicht_1",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wandle 3 m in cm um.",
                    "answers": [
                        "300 cm",
                        "3 000 cm",
                        "30 cm",
                        "3 cm"
                    ],
                    "correct": 0,
                    "explanation": "Von m nach cm rechnest du mal 100: 3 m = 300 cm."
                },
                {
                    "id": "grrk5l1u_leicht_2",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wandle 500 cm in m um.",
                    "answers": [
                        "5 m",
                        "50 m",
                        "0,5 m",
                        "500 m"
                    ],
                    "correct": 0,
                    "explanation": "Von cm nach m rechnest du geteilt durch 100: 500 cm = 5 m."
                },
                {
                    "id": "grrk5l1u_leicht_3",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wandle 4 km in m um.",
                    "answers": [
                        "40 000 m",
                        "4 000 m",
                        "400 m",
                        "40 m"
                    ],
                    "correct": 1,
                    "explanation": "Von km nach m rechnest du mal 1 000: 4 km = 4 000 m."
                },
                {
                    "id": "grrk5l1u_leicht_4",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wandle 7 cm in mm um.",
                    "answers": [
                        "70 mm",
                        "700 mm",
                        "7 mm",
                        "7 000 mm"
                    ],
                    "correct": 0,
                    "explanation": "Von cm nach mm rechnest du mal 10: 7 cm = 70 mm."
                },
                {
                    "id": "grrk5l1u_leicht_5",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wie viele Zentimeter sind 1 Meter?",
                    "answers": [
                        "10 cm",
                        "100 cm",
                        "1000 cm",
                        "60 cm"
                    ],
                    "correct": 1,
                    "explanation": "1 m = 10 dm = 100 cm."
                }
            ],
            "mittel": [
                {
                    "id": "grrk5l1u_mittel_1",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wandle 3,45 m in cm um.",
                    "answers": [
                        "3 450 cm",
                        "34,5 cm",
                        "3,45 cm",
                        "345 cm"
                    ],
                    "correct": 3,
                    "explanation": "Von m nach cm rechnest du mal 100: 3,45 m = 345 cm."
                },
                {
                    "id": "grrk5l1u_mittel_2",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wandle 2 450 m in km um.",
                    "answers": [
                        "24,5 km",
                        "0,245 km",
                        "2,45 km",
                        "245 km"
                    ],
                    "correct": 2,
                    "explanation": "Von m nach km rechnest du geteilt durch 1 000: 2 450 m = 2,45 km."
                },
                {
                    "id": "grrk5l1u_mittel_3",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wandle 85 mm in cm um.",
                    "answers": [
                        "85 cm",
                        "0,85 cm",
                        "850 cm",
                        "8,5 cm"
                    ],
                    "correct": 3,
                    "explanation": "Von mm nach cm rechnest du geteilt durch 10: 85 mm = 8,5 cm."
                },
                {
                    "id": "grrk5l1u_mittel_4",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Schreibe 3 m 45 cm in cm.",
                    "answers": [
                        "48 cm",
                        "3 045 cm",
                        "345 cm",
                        "3 450 cm"
                    ],
                    "correct": 2,
                    "explanation": "3 m = 300 cm, dazu 45 cm: zusammen 345 cm."
                },
                {
                    "id": "grrk5l1u_mittel_5",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wandle 1,2 km in m um.",
                    "answers": [
                        "12 000 m",
                        "1 200 m",
                        "120 m",
                        "12 m"
                    ],
                    "correct": 1,
                    "explanation": "Von km nach m rechnest du mal 1 000: 1,2 km = 1 200 m."
                }
            ],
            "schwer": [
                {
                    "id": "grrk5l1u_schwer_1",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Schreibe 3 m 5 cm in m.",
                    "answers": [
                        "3,5 m",
                        "30,5 m",
                        "3,05 m",
                        "3,005 m"
                    ],
                    "correct": 2,
                    "explanation": "3 m = 3 m, dazu 0,05 m: zusammen 3,05 m."
                },
                {
                    "id": "grrk5l1u_schwer_2",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wandle 1 250 mm in m um.",
                    "answers": [
                        "12,5 m",
                        "1,25 m",
                        "0,125 m",
                        "125 m"
                    ],
                    "correct": 1,
                    "explanation": "Von mm nach m rechnest du geteilt durch 1 000: 1 250 mm = 1,25 m."
                },
                {
                    "id": "grrk5l1u_schwer_3",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wandle 0,75 km in m um.",
                    "answers": [
                        "750 m",
                        "7 500 m",
                        "75 m",
                        "7,5 m"
                    ],
                    "correct": 0,
                    "explanation": "Von km nach m rechnest du mal 1 000: 0,75 km = 750 m."
                },
                {
                    "id": "grrk5l1u_schwer_4",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Schreibe 2 km 300 m in m.",
                    "answers": [
                        "302 m",
                        "20 300 m",
                        "2 300 m",
                        "23 000 m"
                    ],
                    "correct": 2,
                    "explanation": "2 km = 2 000 m, dazu 300 m: zusammen 2 300 m."
                },
                {
                    "id": "grrk5l1u_schwer_5",
                    "category": "kurs_grr_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "laengen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Was ist am längsten?",
                    "answers": [
                        "115 cm",
                        "1 050 mm",
                        "11 dm",
                        "1,2 m"
                    ],
                    "correct": 3,
                    "explanation": "Alles in cm: 1,2 m = 120 cm, 115 cm, 1 050 mm = 105 cm, 11 dm = 110 cm. Am längsten: 1,2 m."
                }
            ]
        },
        "test": [
            {
                "id": "grrk5l1_test_1",
                "category": "kurs_grr_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "laengen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 6 m in cm um.",
                "answers": [
                    "6 000 cm",
                    "600 cm",
                    "60 cm",
                    "6 cm"
                ],
                "correct": 1,
                "explanation": "Von m nach cm rechnest du mal 100: 6 m = 600 cm."
            },
            {
                "id": "grrk5l1_test_2",
                "category": "kurs_grr_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "laengen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 3 000 m in km um.",
                "answers": [
                    "30 km",
                    "0,3 km",
                    "300 km",
                    "3 km"
                ],
                "correct": 3,
                "explanation": "Von m nach km rechnest du geteilt durch 1 000: 3 000 m = 3 km."
            },
            {
                "id": "grrk5l1_test_3",
                "category": "kurs_grr_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "laengen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 2,5 m in cm um.",
                "answers": [
                    "2 500 cm",
                    "250 cm",
                    "25 cm",
                    "2,5 cm"
                ],
                "correct": 1,
                "explanation": "Von m nach cm rechnest du mal 100: 2,5 m = 250 cm."
            },
            {
                "id": "grrk5l1_test_4",
                "category": "kurs_grr_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "laengen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 40 mm in cm um.",
                "answers": [
                    "40 cm",
                    "0,4 cm",
                    "400 cm",
                    "4 cm"
                ],
                "correct": 3,
                "explanation": "Von mm nach cm rechnest du geteilt durch 10: 40 mm = 4 cm."
            },
            {
                "id": "grrk5l1_test_5",
                "category": "kurs_grr_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "laengen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Schreibe 4 m 8 cm in cm.",
                "answers": [
                    "12 cm",
                    "4 008 cm",
                    "4 080 cm",
                    "408 cm"
                ],
                "correct": 3,
                "explanation": "4 m = 400 cm, dazu 8 cm: zusammen 408 cm."
            },
            {
                "id": "grrk5l1_test_6",
                "category": "kurs_grr_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "laengen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Schreibe 1 km 50 m in m.",
                "answers": [
                    "1 050 m",
                    "51 m",
                    "10 050 m",
                    "10 500 m"
                ],
                "correct": 0,
                "explanation": "1 km = 1 000 m, dazu 50 m: zusammen 1 050 m."
            },
            {
                "id": "grrk5l1_test_7",
                "category": "kurs_grr_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "laengen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Schreibe 7 m 9 cm in m.",
                "answers": [
                    "7,9 m",
                    "70,9 m",
                    "7,009 m",
                    "7,09 m"
                ],
                "correct": 3,
                "explanation": "7 m = 7 m, dazu 0,09 m: zusammen 7,09 m."
            },
            {
                "id": "grrk5l1_test_8",
                "category": "kurs_grr_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "laengen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Angabe ist genauso lang wie 250 cm?",
                "answers": [
                    "25 m",
                    "0,25 m",
                    "2,5 m",
                    "2,05 m"
                ],
                "correct": 2,
                "explanation": "250 cm : 100 = 2,5 m."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "grr_k5_l2",
        "kurs": "groessen_rechnen_k5",
        "order": 2,
        "icon": "⚖️",
        "title": "Gewichte umrechnen",
        "kurz": "g, kg und t – auch mit Komma",
        "erklaerung": {
            "intro": "Gewichte: <b>g → kg → t</b> (Gramm, Kilogramm, Tonne). Die Umrechnungszahl ist immer <b>1000</b>: 1 kg = 1000 g, 1 t = 1000 kg. Groß → klein: mal 1000. Klein → groß: geteilt durch 1000. Mit Komma: 2,5 kg = 2 kg 500 g = 2500 g.",
            "merksatz": "Bei Gewichten ist die Umrechnungszahl immer 1000.",
            "beispiele": [
                "Umrechnungstreppe für Gewichte.<svg viewBox='0 0 240 118' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='84' width='60' height='28' rx='6' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='40' y='103' text-anchor='middle' font-size='14' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>t</text><text x='76' y='80' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>: 1000</text><rect x='80' y='58' width='60' height='28' rx='6' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='110' y='77' text-anchor='middle' font-size='14' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>kg</text><text x='146' y='54' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>: 1000</text><rect x='150' y='32' width='60' height='28' rx='6' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='180' y='51' text-anchor='middle' font-size='14' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>g</text><text x='8' y='14' font-size='10' font-weight='700' font-family='sans-serif' fill='#94a3b8'>hoch: teilen · runter: mal</text></svg>",
                "3,5 kg = 3 500 g, denn 3,5 · 1000 = 3500.",
                "Achtung: 2 kg 50 g = 2,050 kg = 2,05 kg – nicht 2,5 kg! Gramm brauchen drei Stellen nach dem Komma."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "grrk5l2u_leicht_1",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wandle 2 kg in g um.",
                    "answers": [
                        "20 000 g",
                        "200 g",
                        "20 g",
                        "2 000 g"
                    ],
                    "correct": 3,
                    "explanation": "Von kg nach g rechnest du mal 1 000: 2 kg = 2 000 g."
                },
                {
                    "id": "grrk5l2u_leicht_2",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wandle 3 000 g in kg um.",
                    "answers": [
                        "30 kg",
                        "0,3 kg",
                        "3 kg",
                        "300 kg"
                    ],
                    "correct": 2,
                    "explanation": "Von g nach kg rechnest du geteilt durch 1 000: 3 000 g = 3 kg."
                },
                {
                    "id": "grrk5l2u_leicht_3",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wandle 5 t in kg um.",
                    "answers": [
                        "50 000 kg",
                        "500 kg",
                        "5 000 kg",
                        "50 kg"
                    ],
                    "correct": 2,
                    "explanation": "Von t nach kg rechnest du mal 1 000: 5 t = 5 000 kg."
                },
                {
                    "id": "grrk5l2u_leicht_4",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wie viel Gramm sind 1 Kilogramm?",
                    "answers": [
                        "1000 g",
                        "100 g",
                        "10 g",
                        "60 g"
                    ],
                    "correct": 0,
                    "explanation": "1 kg = 1000 g."
                },
                {
                    "id": "grrk5l2u_leicht_5",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Was wiegt ungefähr 1 kg?",
                    "answers": [
                        "Eine Packung Zucker",
                        "Ein Blatt Papier",
                        "Ein Auto",
                        "Eine Feder"
                    ],
                    "correct": 0,
                    "explanation": "Eine Packung Zucker wiegt 1 kg."
                }
            ],
            "mittel": [
                {
                    "id": "grrk5l2u_mittel_1",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wandle 3,5 kg in g um.",
                    "answers": [
                        "35 000 g",
                        "350 g",
                        "35 g",
                        "3 500 g"
                    ],
                    "correct": 3,
                    "explanation": "Von kg nach g rechnest du mal 1 000: 3,5 kg = 3 500 g."
                },
                {
                    "id": "grrk5l2u_mittel_2",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wandle 750 g in kg um.",
                    "answers": [
                        "0,75 kg",
                        "7,5 kg",
                        "0,075 kg",
                        "75 kg"
                    ],
                    "correct": 0,
                    "explanation": "Von g nach kg rechnest du geteilt durch 1 000: 750 g = 0,75 kg."
                },
                {
                    "id": "grrk5l2u_mittel_3",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wandle 2,4 t in kg um.",
                    "answers": [
                        "24 000 kg",
                        "240 kg",
                        "24 kg",
                        "2 400 kg"
                    ],
                    "correct": 3,
                    "explanation": "Von t nach kg rechnest du mal 1 000: 2,4 t = 2 400 kg."
                },
                {
                    "id": "grrk5l2u_mittel_4",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Schreibe 4 kg 250 g in g.",
                    "answers": [
                        "254 g",
                        "40 250 g",
                        "42 500 g",
                        "4 250 g"
                    ],
                    "correct": 3,
                    "explanation": "4 kg = 4 000 g, dazu 250 g: zusammen 4 250 g."
                },
                {
                    "id": "grrk5l2u_mittel_5",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was ist schwerer: 1,5 kg oder 1 450 g?",
                    "answers": [
                        "1 450 g",
                        "1,5 kg",
                        "Beide gleich",
                        "Kann man nicht vergleichen"
                    ],
                    "correct": 1,
                    "explanation": "1,5 kg = 1 500 g. 1 500 g ist mehr als 1 450 g."
                }
            ],
            "schwer": [
                {
                    "id": "grrk5l2u_schwer_1",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Schreibe 2 kg 50 g in g.",
                    "answers": [
                        "52 g",
                        "20 050 g",
                        "2 050 g",
                        "20 500 g"
                    ],
                    "correct": 2,
                    "explanation": "2 kg = 2 000 g, dazu 50 g: zusammen 2 050 g."
                },
                {
                    "id": "grrk5l2u_schwer_2",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wandle 125 g in kg um.",
                    "answers": [
                        "1,25 kg",
                        "0,125 kg",
                        "0,0125 kg",
                        "12,5 kg"
                    ],
                    "correct": 1,
                    "explanation": "Von g nach kg rechnest du geteilt durch 1 000: 125 g = 0,125 kg."
                },
                {
                    "id": "grrk5l2u_schwer_3",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wandle 4 500 kg in t um.",
                    "answers": [
                        "45 t",
                        "4,5 t",
                        "0,45 t",
                        "450 t"
                    ],
                    "correct": 1,
                    "explanation": "Von kg nach t rechnest du geteilt durch 1 000: 4 500 kg = 4,5 t."
                },
                {
                    "id": "grrk5l2u_schwer_4",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Schreibe 2 kg 50 g in kg.",
                    "answers": [
                        "2,5 kg",
                        "2,005 kg",
                        "20,5 kg",
                        "2,05 kg"
                    ],
                    "correct": 3,
                    "explanation": "50 g = 0,050 kg. 2 kg 50 g = 2,050 kg = 2,05 kg."
                },
                {
                    "id": "grrk5l2u_schwer_5",
                    "category": "kurs_grr_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "gewichte",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Was ist am schwersten?",
                    "answers": [
                        "2 050 g",
                        "2 kg 90 g",
                        "1 990 g",
                        "2,1 kg"
                    ],
                    "correct": 3,
                    "explanation": "Alles in g: 2,1 kg = 2 100 g, 2 050 g, 2 kg 90 g = 2 090 g, 1 990 g. Am schwersten: 2,1 kg."
                }
            ]
        },
        "test": [
            {
                "id": "grrk5l2_test_1",
                "category": "kurs_grr_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "gewichte",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 7 kg in g um.",
                "answers": [
                    "70 000 g",
                    "7 000 g",
                    "700 g",
                    "70 g"
                ],
                "correct": 1,
                "explanation": "Von kg nach g rechnest du mal 1 000: 7 kg = 7 000 g."
            },
            {
                "id": "grrk5l2_test_2",
                "category": "kurs_grr_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "gewichte",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 6 000 g in kg um.",
                "answers": [
                    "60 kg",
                    "0,6 kg",
                    "600 kg",
                    "6 kg"
                ],
                "correct": 3,
                "explanation": "Von g nach kg rechnest du geteilt durch 1 000: 6 000 g = 6 kg."
            },
            {
                "id": "grrk5l2_test_3",
                "category": "kurs_grr_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "gewichte",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 1,25 kg in g um.",
                "answers": [
                    "12 500 g",
                    "1 250 g",
                    "125 g",
                    "12,5 g"
                ],
                "correct": 1,
                "explanation": "Von kg nach g rechnest du mal 1 000: 1,25 kg = 1 250 g."
            },
            {
                "id": "grrk5l2_test_4",
                "category": "kurs_grr_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "gewichte",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 3 t in kg um.",
                "answers": [
                    "30 000 kg",
                    "3 000 kg",
                    "300 kg",
                    "30 kg"
                ],
                "correct": 1,
                "explanation": "Von t nach kg rechnest du mal 1 000: 3 t = 3 000 kg."
            },
            {
                "id": "grrk5l2_test_5",
                "category": "kurs_grr_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "gewichte",
                "difficulty": "mittel",
                "points": 10,
                "question": "Schreibe 1 t 200 kg in kg.",
                "answers": [
                    "201 kg",
                    "10 200 kg",
                    "1 200 kg",
                    "12 000 kg"
                ],
                "correct": 2,
                "explanation": "1 t = 1 000 kg, dazu 200 kg: zusammen 1 200 kg."
            },
            {
                "id": "grrk5l2_test_6",
                "category": "kurs_grr_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "gewichte",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 400 g in kg um.",
                "answers": [
                    "4 kg",
                    "0,04 kg",
                    "40 kg",
                    "0,4 kg"
                ],
                "correct": 3,
                "explanation": "Von g nach kg rechnest du geteilt durch 1 000: 400 g = 0,4 kg."
            },
            {
                "id": "grrk5l2_test_7",
                "category": "kurs_grr_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "gewichte",
                "difficulty": "mittel",
                "points": 10,
                "question": "Schreibe 3 kg 400 g in kg.",
                "answers": [
                    "3,04 kg",
                    "34 kg",
                    "3,4 kg",
                    "3,004 kg"
                ],
                "correct": 2,
                "explanation": "400 g = 0,4 kg. Zusammen 3,4 kg."
            },
            {
                "id": "grrk5l2_test_8",
                "category": "kurs_grr_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "gewichte",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Elefant wiegt 5 t. Wie viel kg sind das?",
                "answers": [
                    "500 kg",
                    "5 000 kg",
                    "50 000 kg",
                    "50 kg"
                ],
                "correct": 1,
                "explanation": "1 t = 1000 kg, also 5 t = 5 000 kg."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "grr_k5_l3",
        "kurs": "groessen_rechnen_k5",
        "order": 3,
        "icon": "➕",
        "title": "Mit Größen rechnen",
        "kurz": "Verschiedene Einheiten zusammenrechnen und abziehen",
        "erklaerung": {
            "intro": "Größen kannst du nur zusammenrechnen, wenn sie die <b>gleiche Einheit</b> haben. Also: <b>1.</b> Alles in dieselbe Einheit umrechnen – am besten in die kleinere. <b>2.</b> Dann rechnen. Falle: 2 m + 35 cm ist <b>nicht</b> 37! Richtig: 200 cm + 35 cm = 235 cm. Bei der Zeit ist die Umrechnungszahl <b>60</b> (1 h = 60 min), beim Geld <b>100</b> (1 € = 100 ct).",
            "merksatz": "Erst gleiche Einheit, dann rechnen. Zeit: 60. Geld: 100. Länge: 10 oder 1000. Gewicht: 1000.",
            "beispiele": [
                "2 m + 35 cm = 200 cm + 35 cm = 235 cm (= 2,35 m).",
                "3 kg + 450 g = 3 000 g + 450 g = 3 450 g (= 3,45 kg).",
                "1 km − 250 m = 1 000 m − 250 m = 750 m.",
                "1 h 45 min + 30 min = 1 h 75 min = 2 h 15 min. 3,50 € + 75 ct = 350 ct + 75 ct = 425 ct = 4,25 €."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "grrk5l3u_leicht_1",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "2 m + 35 cm = ? (in cm)",
                    "answers": [
                        "235 cm",
                        "37 cm",
                        "2 350 cm",
                        "23,5 cm"
                    ],
                    "correct": 0,
                    "explanation": "Erst in die gleiche Einheit umrechnen: 2 m = 200 cm, 35 cm = 35 cm. Dann rechnen: 200 + 35 = 235 cm."
                },
                {
                    "id": "grrk5l3u_leicht_2",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "1 m + 40 cm = ? (in m)",
                    "answers": [
                        "1,04 m",
                        "1,4 m",
                        "41 m",
                        "14 m"
                    ],
                    "correct": 1,
                    "explanation": "Erst in die gleiche Einheit umrechnen: 1 m = 1 m, 40 cm = 0,4 m. Dann rechnen: 1 + 0,4 = 1,4 m."
                },
                {
                    "id": "grrk5l3u_leicht_3",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "3 kg + 450 g = ? (in g)",
                    "answers": [
                        "3 450 g",
                        "453 g",
                        "34 500 g",
                        "345 g"
                    ],
                    "correct": 0,
                    "explanation": "Erst in die gleiche Einheit umrechnen: 3 kg = 3 000 g, 450 g = 450 g. Dann rechnen: 3 000 + 450 = 3 450 g."
                },
                {
                    "id": "grrk5l3u_leicht_4",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "1 km − 250 m = ? (in m)",
                    "answers": [
                        "7 500 m",
                        "75 m",
                        "9 750 m",
                        "750 m"
                    ],
                    "correct": 3,
                    "explanation": "Erst in die gleiche Einheit umrechnen: 1 km = 1 000 m, 250 m = 250 m. Dann rechnen: 1 000 − 250 = 750 m."
                },
                {
                    "id": "grrk5l3u_leicht_5",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "3,50 € + 75 ct = ?",
                    "answers": [
                        "5,25 €",
                        "4,15 €",
                        "4,25 €",
                        "3,57 €"
                    ],
                    "correct": 2,
                    "explanation": "In Cent rechnen: 350 ct + 75 ct = 425 ct = 4,25 €."
                },
                {
                    "id": "grrk5l3u_leicht_6",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Was musst du bei 4 m + 20 cm zuerst tun?",
                    "answers": [
                        "Einfach 4 + 20 rechnen",
                        "Die Einheiten weglassen",
                        "In die gleiche Einheit umrechnen",
                        "Nur die größere Zahl nehmen"
                    ],
                    "correct": 2,
                    "explanation": "Nur gleiche Einheiten kann man zusammenrechnen: 400 cm + 20 cm = 420 cm."
                }
            ],
            "mittel": [
                {
                    "id": "grrk5l3u_mittel_1",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "1,5 m + 80 cm = ? (in cm)",
                    "answers": [
                        "230 cm",
                        "81,5 cm",
                        "2 300 cm",
                        "23 cm"
                    ],
                    "correct": 0,
                    "explanation": "Erst in die gleiche Einheit umrechnen: 1,5 m = 150 cm, 80 cm = 80 cm. Dann rechnen: 150 + 80 = 230 cm."
                },
                {
                    "id": "grrk5l3u_mittel_2",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "2 m + 5 cm = ? (in m)",
                    "answers": [
                        "2,5 m",
                        "2,05 m",
                        "2,005 m",
                        "7 m"
                    ],
                    "correct": 1,
                    "explanation": "Erst in die gleiche Einheit umrechnen: 2 m = 2 m, 5 cm = 0,05 m. Dann rechnen: 2 + 0,05 = 2,05 m."
                },
                {
                    "id": "grrk5l3u_mittel_3",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "2 kg + 300 g = ? (in kg)",
                    "answers": [
                        "2,03 kg",
                        "302 kg",
                        "23 kg",
                        "2,3 kg"
                    ],
                    "correct": 3,
                    "explanation": "Erst in die gleiche Einheit umrechnen: 2 kg = 2 kg, 300 g = 0,3 kg. Dann rechnen: 2 + 0,3 = 2,3 kg."
                },
                {
                    "id": "grrk5l3u_mittel_4",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "2 kg − 750 g = ? (in g)",
                    "answers": [
                        "12 500 g",
                        "125 g",
                        "19 250 g",
                        "1 250 g"
                    ],
                    "correct": 3,
                    "explanation": "Erst in die gleiche Einheit umrechnen: 2 kg = 2 000 g, 750 g = 750 g. Dann rechnen: 2 000 − 750 = 1 250 g."
                },
                {
                    "id": "grrk5l3u_mittel_5",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "1 h 45 min + 30 min = ?",
                    "answers": [
                        "2 h 15 min",
                        "1 h 75 min",
                        "3 h 15 min",
                        "1 h 15 min"
                    ],
                    "correct": 0,
                    "explanation": "1 h hat 60 min – nicht 100! 1 h 45 min + 30 min = 2 h 15 min."
                },
                {
                    "id": "grrk5l3u_mittel_6",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "5,00 € − 120 ct = ?",
                    "answers": [
                        "4,80 €",
                        "3,80 €",
                        "3,70 €",
                        "4,88 €"
                    ],
                    "correct": 1,
                    "explanation": "In Cent rechnen: 500 ct − 120 ct = 380 ct = 3,80 €."
                },
                {
                    "id": "grrk5l3u_mittel_7",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "5 km + 800 m = ? (in km)",
                    "answers": [
                        "5,08 km",
                        "805 km",
                        "5,8 km",
                        "58 km"
                    ],
                    "correct": 2,
                    "explanation": "Erst in die gleiche Einheit umrechnen: 5 km = 5 km, 800 m = 0,8 km. Dann rechnen: 5 + 0,8 = 5,8 km."
                }
            ],
            "schwer": [
                {
                    "id": "grrk5l3u_schwer_1",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "2,4 kg + 650 g = ? (in g)",
                    "answers": [
                        "652,4 g",
                        "3 050 g",
                        "30 500 g",
                        "305 g"
                    ],
                    "correct": 1,
                    "explanation": "Erst in die gleiche Einheit umrechnen: 2,4 kg = 2 400 g, 650 g = 650 g. Dann rechnen: 2 400 + 650 = 3 050 g."
                },
                {
                    "id": "grrk5l3u_schwer_2",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "1 kg + 50 g = ? (in kg)",
                    "answers": [
                        "1,05 kg",
                        "1,5 kg",
                        "1,005 kg",
                        "51 kg"
                    ],
                    "correct": 0,
                    "explanation": "Erst in die gleiche Einheit umrechnen: 1 kg = 1 kg, 50 g = 0,05 kg. Dann rechnen: 1 + 0,05 = 1,05 kg."
                },
                {
                    "id": "grrk5l3u_schwer_3",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "3 km − 200 m = ? (in km)",
                    "answers": [
                        "2,8 km",
                        "28 km",
                        "0,28 km",
                        "29,8 km"
                    ],
                    "correct": 0,
                    "explanation": "Erst in die gleiche Einheit umrechnen: 3 km = 3 km, 200 m = 0,2 km. Dann rechnen: 3 − 0,2 = 2,8 km."
                },
                {
                    "id": "grrk5l3u_schwer_4",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "3 m − 45 cm = ? (in cm)",
                    "answers": [
                        "2 550 cm",
                        "25,5 cm",
                        "2 955 cm",
                        "255 cm"
                    ],
                    "correct": 3,
                    "explanation": "Erst in die gleiche Einheit umrechnen: 3 m = 300 cm, 45 cm = 45 cm. Dann rechnen: 300 − 45 = 255 cm."
                },
                {
                    "id": "grrk5l3u_schwer_5",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "2 h 20 min − 50 min = ?",
                    "answers": [
                        "2 h 10 min",
                        "2 h 30 min",
                        "1 h 30 min",
                        "30 min"
                    ],
                    "correct": 2,
                    "explanation": "1 h hat 60 min – nicht 100! 2 h 20 min − 50 min = 1 h 30 min."
                },
                {
                    "id": "grrk5l3u_schwer_6",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "2 t + 350 kg = ? (in t)",
                    "answers": [
                        "2,35 t",
                        "2,035 t",
                        "352 t",
                        "23,5 t"
                    ],
                    "correct": 0,
                    "explanation": "Erst in die gleiche Einheit umrechnen: 2 t = 2 t, 350 kg = 0,35 t. Dann rechnen: 2 + 0,35 = 2,35 t."
                },
                {
                    "id": "grrk5l3u_schwer_7",
                    "category": "kurs_grr_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_rechnen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wie viel ist 1,2 km + 350 m + 450 m in Metern?",
                    "answers": [
                        "801,2 m",
                        "2 000 m",
                        "1 200 m",
                        "2 450 m"
                    ],
                    "correct": 1,
                    "explanation": "1,2 km = 1 200 m. 1 200 m + 350 m + 450 m = 2 000 m."
                }
            ]
        },
        "test": [
            {
                "id": "grrk5l3_test_1",
                "category": "kurs_grr_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_rechnen",
                "difficulty": "mittel",
                "points": 10,
                "question": "6 m + 25 cm = ? (in cm)",
                "answers": [
                    "31 cm",
                    "6 250 cm",
                    "62,5 cm",
                    "625 cm"
                ],
                "correct": 3,
                "explanation": "Erst in die gleiche Einheit umrechnen: 6 m = 600 cm, 25 cm = 25 cm. Dann rechnen: 600 + 25 = 625 cm."
            },
            {
                "id": "grrk5l3_test_2",
                "category": "kurs_grr_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_rechnen",
                "difficulty": "mittel",
                "points": 10,
                "question": "4 m + 8 cm = ? (in m)",
                "answers": [
                    "4,8 m",
                    "4,008 m",
                    "12 m",
                    "4,08 m"
                ],
                "correct": 3,
                "explanation": "Erst in die gleiche Einheit umrechnen: 4 m = 4 m, 8 cm = 0,08 m. Dann rechnen: 4 + 0,08 = 4,08 m."
            },
            {
                "id": "grrk5l3_test_3",
                "category": "kurs_grr_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_rechnen",
                "difficulty": "mittel",
                "points": 10,
                "question": "4 kg + 300 g = ? (in g)",
                "answers": [
                    "304 g",
                    "4 300 g",
                    "43 000 g",
                    "430 g"
                ],
                "correct": 1,
                "explanation": "Erst in die gleiche Einheit umrechnen: 4 kg = 4 000 g, 300 g = 300 g. Dann rechnen: 4 000 + 300 = 4 300 g."
            },
            {
                "id": "grrk5l3_test_4",
                "category": "kurs_grr_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_rechnen",
                "difficulty": "mittel",
                "points": 10,
                "question": "3 kg + 250 g = ? (in kg)",
                "answers": [
                    "3,25 kg",
                    "3,025 kg",
                    "253 kg",
                    "32,5 kg"
                ],
                "correct": 0,
                "explanation": "Erst in die gleiche Einheit umrechnen: 3 kg = 3 kg, 250 g = 0,25 kg. Dann rechnen: 3 + 0,25 = 3,25 kg."
            },
            {
                "id": "grrk5l3_test_5",
                "category": "kurs_grr_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_rechnen",
                "difficulty": "mittel",
                "points": 10,
                "question": "2 km − 600 m = ? (in m)",
                "answers": [
                    "14 000 m",
                    "140 m",
                    "1 400 m",
                    "19 400 m"
                ],
                "correct": 2,
                "explanation": "Erst in die gleiche Einheit umrechnen: 2 km = 2 000 m, 600 m = 600 m. Dann rechnen: 2 000 − 600 = 1 400 m."
            },
            {
                "id": "grrk5l3_test_6",
                "category": "kurs_grr_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_rechnen",
                "difficulty": "mittel",
                "points": 10,
                "question": "1 h 40 min + 35 min = ?",
                "answers": [
                    "1 h 75 min",
                    "3 h 15 min",
                    "1 h 15 min",
                    "2 h 15 min"
                ],
                "correct": 3,
                "explanation": "1 h hat 60 min – nicht 100! 1 h 40 min + 35 min = 2 h 15 min."
            },
            {
                "id": "grrk5l3_test_7",
                "category": "kurs_grr_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_rechnen",
                "difficulty": "mittel",
                "points": 10,
                "question": "2,75 € + 150 ct = ?",
                "answers": [
                    "5,25 €",
                    "4,15 €",
                    "2,90 €",
                    "4,25 €"
                ],
                "correct": 3,
                "explanation": "In Cent rechnen: 275 ct + 150 ct = 425 ct = 4,25 €."
            },
            {
                "id": "grrk5l3_test_8",
                "category": "kurs_grr_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_rechnen",
                "difficulty": "mittel",
                "points": 10,
                "question": "1 m − 35 cm = ? (in cm)",
                "answers": [
                    "65 cm",
                    "650 cm",
                    "6,5 cm",
                    "965 cm"
                ],
                "correct": 0,
                "explanation": "Erst in die gleiche Einheit umrechnen: 1 m = 100 cm, 35 cm = 35 cm. Dann rechnen: 100 − 35 = 65 cm."
            },
            {
                "id": "grrk5l3_test_9",
                "category": "kurs_grr_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_rechnen",
                "difficulty": "mittel",
                "points": 10,
                "question": "2,5 kg + 800 g = ? (in g)",
                "answers": [
                    "802,5 g",
                    "3 300 g",
                    "33 000 g",
                    "330 g"
                ],
                "correct": 1,
                "explanation": "Erst in die gleiche Einheit umrechnen: 2,5 kg = 2 500 g, 800 g = 800 g. Dann rechnen: 2 500 + 800 = 3 300 g."
            },
            {
                "id": "grrk5l3_test_10",
                "category": "kurs_grr_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_rechnen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Tom rechnet: 2 m + 35 cm = 37 cm. Was hat er falsch gemacht?",
                "answers": [
                    "Er hat falsch addiert",
                    "Nichts, das stimmt",
                    "Er hätte malnehmen müssen",
                    "Er hat nicht umgerechnet"
                ],
                "correct": 3,
                "explanation": "2 m sind 200 cm. Richtig: 200 cm + 35 cm = 235 cm."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "grr_k5_l4",
        "kurs": "groessen_rechnen_k5",
        "order": 4,
        "icon": "🛒",
        "title": "Sachaufgaben mit Größen",
        "kurz": "Einkaufen, Schulweg, Basteln – Größen im Alltag",
        "erklaerung": {
            "intro": "Bei Sachaufgaben gehst du so vor: <b>1.</b> Was ist gegeben, was ist gesucht? <b>2.</b> Alle Größen in die <b>gleiche Einheit</b> bringen. <b>3.</b> Rechnen. <b>4.</b> Antwort mit <b>Einheit</b> schreiben – und prüfen, ob sie sinnvoll ist.",
            "merksatz": "Gegeben – gesucht – gleiche Einheit – rechnen – Antwort mit Einheit.",
            "beispiele": [
                "Mia kauft 1,5 kg Äpfel und 750 g Birnen. 1 500 g + 750 g = 2 250 g = 2,25 kg.",
                "Ein Brett ist 2 m lang. Davon werden 75 cm abgesägt. 200 cm − 75 cm = 125 cm bleiben übrig.",
                "Der Film beginnt um 15:45 Uhr und dauert 1 h 50 min. 15:45 + 1 h = 16:45, + 50 min = 17:35 Uhr."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "grrk5l4u_leicht_1",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Mia kauft 1 kg Äpfel und 500 g Birnen. Wie schwer ist alles zusammen?",
                    "answers": [
                        "1 500 g",
                        "501 g",
                        "1 050 g",
                        "6 kg"
                    ],
                    "correct": 0,
                    "explanation": "1 kg = 1 000 g. 1 000 g + 500 g = 1 500 g."
                },
                {
                    "id": "grrk5l4u_leicht_2",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Ein Band ist 1 m lang. Lea schneidet 30 cm ab. Wie viel bleibt übrig?",
                    "answers": [
                        "29 cm",
                        "70 cm",
                        "97 cm",
                        "130 cm"
                    ],
                    "correct": 1,
                    "explanation": "1 m = 100 cm. 100 cm − 30 cm = 70 cm."
                },
                {
                    "id": "grrk5l4u_leicht_3",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Ben hat 5 € und kauft ein Heft für 80 ct. Wie viel Geld hat er noch?",
                    "answers": [
                        "4,80 €",
                        "4,20 €",
                        "4,92 €",
                        "5,80 €"
                    ],
                    "correct": 1,
                    "explanation": "5 € = 500 ct. 500 ct − 80 ct = 420 ct = 4,20 €."
                },
                {
                    "id": "grrk5l4u_leicht_4",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Die Pause dauert 20 min, danach kommen 45 min Mathe. Wie lange ist das zusammen?",
                    "answers": [
                        "1 h 5 min",
                        "65 h",
                        "1 h 45 min",
                        "1 h 15 min"
                    ],
                    "correct": 0,
                    "explanation": "20 min + 45 min = 65 min = 1 h 5 min."
                },
                {
                    "id": "grrk5l4u_leicht_5",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Ein Tisch ist 75 cm hoch. Wie viele Meter sind das?",
                    "answers": [
                        "0,75 m",
                        "7,5 m",
                        "75 m",
                        "0,075 m"
                    ],
                    "correct": 0,
                    "explanation": "75 cm : 100 = 0,75 m."
                }
            ],
            "mittel": [
                {
                    "id": "grrk5l4u_mittel_1",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Der Schulweg ist 1,2 km lang. Finn geht hin und zurück. Wie weit geht er?",
                    "answers": [
                        "1 400 m",
                        "2 400 m",
                        "240 m",
                        "2,4 m"
                    ],
                    "correct": 1,
                    "explanation": "1,2 km = 1 200 m. Hin und zurück: 2 · 1 200 m = 2 400 m."
                },
                {
                    "id": "grrk5l4u_mittel_2",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ein Paket wiegt 2,5 kg. Ein Buch mit 600 g kommt dazu. Wie schwer ist das Paket jetzt?",
                    "answers": [
                        "602,5 g",
                        "3 100 g",
                        "2 560 g",
                        "8,5 kg"
                    ],
                    "correct": 1,
                    "explanation": "2,5 kg = 2 500 g. 2 500 g + 600 g = 3 100 g = 3,1 kg."
                },
                {
                    "id": "grrk5l4u_mittel_3",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ein Film dauert 1 h 50 min. Er beginnt um 15:45 Uhr. Wann ist er zu Ende?",
                    "answers": [
                        "16:35 Uhr",
                        "17:35 Uhr",
                        "17:95 Uhr",
                        "17:05 Uhr"
                    ],
                    "correct": 1,
                    "explanation": "15:45 + 1 h = 16:45. + 50 min = 17:35 Uhr."
                },
                {
                    "id": "grrk5l4u_mittel_4",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Lisa kauft 3 Brötchen zu je 45 ct. Sie bezahlt mit 2 €. Wie viel bekommt sie zurück?",
                    "answers": [
                        "1,35 €",
                        "0,55 €",
                        "0,65 €",
                        "1,55 €"
                    ],
                    "correct": 2,
                    "explanation": "3 · 45 ct = 135 ct. 200 ct − 135 ct = 65 ct = 0,65 €."
                },
                {
                    "id": "grrk5l4u_mittel_5",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ein Regal ist 1,8 m breit. Passt es in eine Lücke von 175 cm?",
                    "answers": [
                        "Ja, es ist 5 cm schmaler",
                        "Ja, genau passend",
                        "Nein, es ist 50 cm zu breit",
                        "Nein, es ist 5 cm zu breit"
                    ],
                    "correct": 3,
                    "explanation": "1,8 m = 180 cm. 180 cm ist 5 cm mehr als 175 cm."
                }
            ],
            "schwer": [
                {
                    "id": "grrk5l4u_schwer_1",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Ein Lkw darf 7,5 t laden. Er hat schon 6 800 kg geladen. Wie viel darf noch drauf?",
                    "answers": [
                        "1 300 kg",
                        "700 kg",
                        "6 792,5 kg",
                        "70 kg"
                    ],
                    "correct": 1,
                    "explanation": "7,5 t = 7 500 kg. 7 500 kg − 6 800 kg = 700 kg."
                },
                {
                    "id": "grrk5l4u_schwer_2",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Opa sägt von einem 3-m-Brett vier Stücke zu je 65 cm ab. Wie viel bleibt übrig?",
                    "answers": [
                        "40 cm",
                        "35 cm",
                        "2,35 m",
                        "1 m 40 cm"
                    ],
                    "correct": 0,
                    "explanation": "4 · 65 cm = 260 cm. 300 cm − 260 cm = 40 cm."
                },
                {
                    "id": "grrk5l4u_schwer_3",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Ein Rezept braucht 250 g Mehl. Mama backt die vierfache Menge. Wie viel kg Mehl braucht sie?",
                    "answers": [
                        "1 000 kg",
                        "0,1 kg",
                        "10 kg",
                        "1 kg"
                    ],
                    "correct": 3,
                    "explanation": "4 · 250 g = 1 000 g = 1 kg."
                },
                {
                    "id": "grrk5l4u_schwer_4",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Der Zug fährt um 7:48 Uhr ab und kommt um 9:15 Uhr an. Wie lange dauert die Fahrt?",
                    "answers": [
                        "1 h 67 min",
                        "2 h 27 min",
                        "1 h 27 min",
                        "1 h 33 min"
                    ],
                    "correct": 2,
                    "explanation": "7:48 → 8:00 sind 12 min, 8:00 → 9:15 sind 1 h 15 min. Zusammen 1 h 27 min."
                },
                {
                    "id": "grrk5l4u_schwer_5",
                    "category": "kurs_grr_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "groessen_sachaufgaben",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Eine Flasche hat 1,5 l. Wie viele Gläser mit 250 ml kann man füllen?",
                    "answers": [
                        "5",
                        "60",
                        "6",
                        "4"
                    ],
                    "correct": 2,
                    "explanation": "1,5 l = 1 500 ml. 1 500 ml : 250 ml = 6."
                }
            ]
        },
        "test": [
            {
                "id": "grrk5l4_test_1",
                "category": "kurs_grr_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_sachaufgaben",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Hund wiegt 12 kg, seine Leine 300 g. Wie schwer ist beides zusammen?",
                "answers": [
                    "312 g",
                    "12 300 g",
                    "15 kg",
                    "12 030 g"
                ],
                "correct": 1,
                "explanation": "12 kg = 12 000 g. 12 000 g + 300 g = 12 300 g = 12,3 kg."
            },
            {
                "id": "grrk5l4_test_2",
                "category": "kurs_grr_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_sachaufgaben",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Weg ist 2 km lang. Nach 750 m macht Ali Pause. Wie weit ist es noch?",
                "answers": [
                    "1 250 m",
                    "748 m",
                    "1 750 m",
                    "2 750 m"
                ],
                "correct": 0,
                "explanation": "2 km = 2 000 m. 2 000 m − 750 m = 1 250 m."
            },
            {
                "id": "grrk5l4_test_3",
                "category": "kurs_grr_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_sachaufgaben",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Eis kostet 1,20 €. Wie viel kosten 3 Eis?",
                "answers": [
                    "3,20 €",
                    "36 €",
                    "3,60 €",
                    "4,60 €"
                ],
                "correct": 2,
                "explanation": "3 · 120 ct = 360 ct = 3,60 €."
            },
            {
                "id": "grrk5l4_test_4",
                "category": "kurs_grr_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_sachaufgaben",
                "difficulty": "mittel",
                "points": 10,
                "question": "Die Hausaufgaben dauern 35 min, das Üben in der App 25 min. Wie lange ist das zusammen?",
                "answers": [
                    "50 min",
                    "1 h",
                    "1 h 10 min",
                    "60 h"
                ],
                "correct": 1,
                "explanation": "35 min + 25 min = 60 min = 1 h."
            },
            {
                "id": "grrk5l4_test_5",
                "category": "kurs_grr_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_sachaufgaben",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Bild ist 45 cm breit. Wie breit sind 4 Bilder nebeneinander in Metern?",
                "answers": [
                    "18 m",
                    "1,8 m",
                    "1,08 m",
                    "180 m"
                ],
                "correct": 1,
                "explanation": "4 · 45 cm = 180 cm = 1,8 m."
            },
            {
                "id": "grrk5l4_test_6",
                "category": "kurs_grr_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_sachaufgaben",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Koffer darf höchstens 20 kg wiegen. Er wiegt 18,6 kg. Wie viel darf noch rein?",
                "answers": [
                    "1,6 kg",
                    "2,4 kg",
                    "1 400 g",
                    "140 g"
                ],
                "correct": 2,
                "explanation": "20 kg − 18,6 kg = 1,4 kg = 1 400 g."
            },
            {
                "id": "grrk5l4_test_7",
                "category": "kurs_grr_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_sachaufgaben",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Bus fährt um 13:35 Uhr ab. Die Fahrt dauert 40 min. Wann kommt er an?",
                "answers": [
                    "13:75 Uhr",
                    "14:35 Uhr",
                    "14:05 Uhr",
                    "14:15 Uhr"
                ],
                "correct": 3,
                "explanation": "13:35 + 25 min = 14:00, + 15 min = 14:15 Uhr."
            },
            {
                "id": "grrk5l4_test_8",
                "category": "kurs_grr_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "groessen_sachaufgaben",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Antwort ist bei „Wie lang ist ein Bleistift?“ sinnvoll?",
                "answers": [
                    "17 cm",
                    "17 m",
                    "17 mm",
                    "17 km"
                ],
                "correct": 0,
                "explanation": "Ein Bleistift ist etwa so lang wie eine Hand: 17 cm."
            }
        ],
        "bestehenAb": 0.8
    }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) {
        extraKurse.forEach(function (k) {
            if (KURSE.some(function (x) { return x.id === k.id; })) return;
            // direkt hinter "Zahlen verstehen" bzw. vorne bei Klasse 5 Mathe einsortieren
            var i = KURSE.findIndex(function (x) { return x.id === "zahlen_verstehen_k5"; });
            if (i >= 0) { KURSE.splice(i + 1, 0, k); return; }
            i = KURSE.findIndex(function (x) { return Number(x.grade) === 5 && x.subject === "mathe"; });
            if (i < 0) KURSE.push(k); else KURSE.splice(i, 0, k);
        });
    }
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
    }
})();
