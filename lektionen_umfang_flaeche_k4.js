// Umfang und Fläche - Klasse 4 Mathe
// 1 Kurs mit 3 Lektionen (Umfang, Flächeninhalt, Umfang oder Fläche?).
// topic "geometrie_k4" = Thema der Wissensfragen Klasse 4, damit die Kurs-Empfehlung greift.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [{"id": "umfang_flaeche_k4", "title": "Umfang und Fläche", "icon": "📐", "grade": 4, "subject": "mathe", "beschreibung": "Umfang als Weg rundherum, Flächeninhalt mit Kästchen und Länge · Breite, Sachaufgaben: Umfang oder Fläche?"}];
    const extraLektionen = [
    {
        "id": "umff_k4_l1",
        "kurs": "umfang_flaeche_k4",
        "order": 1,
        "icon": "📏",
        "title": "Der Umfang",
        "kurz": "Alle Seiten zusammenzählen – beim Rechteck und beim Quadrat",
        "erklaerung": {
            "intro": "Der <b>Umfang</b> ist der Weg einmal ganz um eine Figur herum. Du zählst alle Seitenlängen zusammen. Beim Rechteck sind gegenüberliegende Seiten gleich lang: <b>U = a + b + a + b = 2 · (a + b)</b>. Beim Quadrat sind alle vier Seiten gleich lang: <b>U = 4 · a</b>. „Rechteck 4 cm · 2 cm“ heißt hier: 4 cm lang und 2 cm breit.",
            "merksatz": "Umfang = alle Seiten zusammenzählen. Er wird in mm, cm, m oder km angegeben.",
            "beispiele": [
                "Rechteck, 4 cm lang und 3 cm breit: U = 4 + 3 + 4 + 3 = 14 cm.<svg viewBox='0 0 170 130' style='width:100%;max-width:238px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='80' height='60' fill='none' stroke='#38bdf8' stroke-width='2.5'/><rect x='41' y='21' width='88' height='68' fill='none' stroke='#f59e0b' stroke-width='2' stroke-dasharray='6 3'/><text x='85.0' y='16' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>4 cm</text><text x='133' y='59.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>3 cm</text><text x='85.0' y='120' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#4ade80'>U = 14 cm</text></svg>",
                "Quadrat mit 5 cm Seitenlänge: U = 4 · 5 cm = 20 cm.<svg viewBox='0 0 190 170' style='width:100%;max-width:266px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='100' height='100' fill='none' stroke='#38bdf8' stroke-width='2.5'/><rect x='41' y='21' width='108' height='108' fill='none' stroke='#f59e0b' stroke-width='2' stroke-dasharray='6 3'/><text x='95.0' y='16' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>5 cm</text><text x='153' y='79.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>5 cm</text><text x='95.0' y='160' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#4ade80'>U = 20 cm</text></svg>",
                "Dreieck mit den Seiten 3 cm, 4 cm und 5 cm: U = 3 + 4 + 5 = 12 cm."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "umffk4l1_l1",
                    "category": "kurs_umff_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ist der Umfang einer Figur?",
                    "answers": [
                        "Der Weg einmal herum",
                        "Die Fläche innen drin",
                        "Die längste Seite",
                        "Die Zahl der Ecken"
                    ],
                    "correct": 0,
                    "explanation": "Der Umfang ist der Weg einmal ganz um die Figur herum."
                },
                {
                    "id": "umffk4l1_l2",
                    "category": "kurs_umff_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Rechteck 4 cm · 2 cm: Wie groß ist der Umfang?",
                    "answers": [
                        "12 cm",
                        "8 cm",
                        "6 cm",
                        "10 cm"
                    ],
                    "correct": 0,
                    "explanation": "4 + 2 + 4 + 2 = 12 cm.",
                    "grafik": "<svg viewBox='0 0 170 90' style='width:100%;max-width:238px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='80' height='40' fill='none' stroke='#38bdf8' stroke-width='2.5'/><text x='85.0' y='16' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>4 cm</text><text x='133' y='49.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>2 cm</text></svg>"
                },
                {
                    "id": "umffk4l1_l3",
                    "category": "kurs_umff_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Quadrat, Seite 3 cm: Wie groß ist der Umfang?",
                    "answers": [
                        "12 cm",
                        "9 cm",
                        "6 cm",
                        "15 cm"
                    ],
                    "correct": 0,
                    "explanation": "Vier gleiche Seiten: 4 · 3 cm = 12 cm.",
                    "grafik": "<svg viewBox='0 0 150 110' style='width:100%;max-width:210px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='60' height='60' fill='none' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='16' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>3 cm</text><text x='113' y='59.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>3 cm</text></svg>"
                },
                {
                    "id": "umffk4l1_l4",
                    "category": "kurs_umff_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Einheit passt zum Umfang?",
                    "answers": [
                        "cm",
                        "cm²",
                        "kg",
                        "Liter"
                    ],
                    "correct": 0,
                    "explanation": "Der Umfang ist eine Länge. Längen misst man in cm, m oder km."
                }
            ],
            "mittel": [
                {
                    "id": "umffk4l1_m1",
                    "category": "kurs_umff_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Rechteck 6 cm · 2 cm: Wie groß ist der Umfang?",
                    "answers": [
                        "16 cm",
                        "12 cm",
                        "8 cm",
                        "14 cm"
                    ],
                    "correct": 0,
                    "explanation": "6 + 2 + 6 + 2 = 16 cm. 12 wäre 6 · 2 – das ist die Fläche.",
                    "grafik": "<svg viewBox='0 0 210 90' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='120' height='40' fill='none' stroke='#38bdf8' stroke-width='2.5'/><text x='105.0' y='16' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>6 cm</text><text x='173' y='49.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>2 cm</text></svg>"
                },
                {
                    "id": "umffk4l1_m2",
                    "category": "kurs_umff_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Quadrat, Seite 7 cm: Wie groß ist der Umfang?",
                    "answers": [
                        "28 cm",
                        "49 cm",
                        "14 cm",
                        "21 cm"
                    ],
                    "correct": 0,
                    "explanation": "4 · 7 cm = 28 cm."
                },
                {
                    "id": "umffk4l1_m3",
                    "category": "kurs_umff_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Dreieck: 4 cm, 5 cm, 6 cm. Wie groß ist der Umfang?",
                    "answers": [
                        "15 cm",
                        "14 cm",
                        "16 cm",
                        "11 cm"
                    ],
                    "correct": 0,
                    "explanation": "4 + 5 + 6 = 15 cm."
                },
                {
                    "id": "umffk4l1_m4",
                    "category": "kurs_umff_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Rechnung ergibt den Umfang eines Rechtecks?",
                    "answers": [
                        "2 · (a + b)",
                        "a · b",
                        "a + b",
                        "4 · a"
                    ],
                    "correct": 0,
                    "explanation": "Beim Rechteck kommen Länge und Breite je zweimal vor: 2 · (a + b)."
                }
            ],
            "schwer": [
                {
                    "id": "umffk4l1_s1",
                    "category": "kurs_umff_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Garten 12 m · 8 m: Wie lang ist der Zaun rundherum?",
                    "answers": [
                        "40 m",
                        "20 m",
                        "96 m",
                        "32 m"
                    ],
                    "correct": 0,
                    "explanation": "12 + 8 + 12 + 8 = 40 m."
                },
                {
                    "id": "umffk4l1_s2",
                    "category": "kurs_umff_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Quadrat mit 20 cm Umfang: Wie lang ist eine Seite?",
                    "answers": [
                        "5 cm",
                        "4 cm",
                        "10 cm",
                        "80 cm"
                    ],
                    "correct": 0,
                    "explanation": "Vier gleiche Seiten: 20 cm : 4 = 5 cm."
                },
                {
                    "id": "umffk4l1_s3",
                    "category": "kurs_umff_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Rechteck: 18 cm Umfang, 5 cm lang. Wie breit?",
                    "answers": [
                        "4 cm",
                        "13 cm",
                        "8 cm",
                        "9 cm"
                    ],
                    "correct": 0,
                    "explanation": "Länge + Breite ist die Hälfte vom Umfang: 9 cm. 9 − 5 = 4 cm."
                },
                {
                    "id": "umffk4l1_s4",
                    "category": "kurs_umff_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Bild 30 cm · 20 cm: Wie lang ist der Rahmen?",
                    "answers": [
                        "100 cm",
                        "50 cm",
                        "600 cm",
                        "120 cm"
                    ],
                    "correct": 0,
                    "explanation": "30 + 20 + 30 + 20 = 100 cm."
                }
            ]
        },
        "test": [
            {
                "id": "umffk4l1_t1",
                "category": "kurs_umff_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechteck 5 cm · 1 cm: Wie groß ist der Umfang?",
                "answers": [
                    "12 cm",
                    "6 cm",
                    "5 cm",
                    "10 cm"
                ],
                "correct": 0,
                "explanation": "5 + 1 + 5 + 1 = 12 cm.",
                "grafik": "<svg viewBox='0 0 190 70' style='width:100%;max-width:266px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='100' height='20' fill='none' stroke='#38bdf8' stroke-width='2.5'/><text x='95.0' y='16' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>5 cm</text><text x='153' y='39.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>1 cm</text></svg>"
            },
            {
                "id": "umffk4l1_t2",
                "category": "kurs_umff_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Quadrat, Seite 6 cm: Wie groß ist der Umfang?",
                "answers": [
                    "24 cm",
                    "36 cm",
                    "12 cm",
                    "18 cm"
                ],
                "correct": 0,
                "explanation": "4 · 6 cm = 24 cm."
            },
            {
                "id": "umffk4l1_t3",
                "category": "kurs_umff_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Dreieck, alle Seiten 4 cm: Wie groß ist der Umfang?",
                "answers": [
                    "12 cm",
                    "16 cm",
                    "8 cm",
                    "10 cm"
                ],
                "correct": 0,
                "explanation": "3 · 4 cm = 12 cm."
            },
            {
                "id": "umffk4l1_t4",
                "category": "kurs_umff_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was rechnest du, wenn du den Umfang suchst?",
                "answers": [
                    "Alle Seiten addieren",
                    "Länge mal Breite",
                    "Kästchen innen zählen",
                    "Die Ecken zählen"
                ],
                "correct": 0,
                "explanation": "Für den Umfang zählst du alle Seitenlängen zusammen."
            },
            {
                "id": "umffk4l1_t5",
                "category": "kurs_umff_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Sportplatz 100 m · 60 m: Wie lang ist eine Runde?",
                "answers": [
                    "320 m",
                    "160 m",
                    "6000 m",
                    "260 m"
                ],
                "correct": 0,
                "explanation": "100 + 60 + 100 + 60 = 320 m."
            },
            {
                "id": "umffk4l1_t6",
                "category": "kurs_umff_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Quadrat mit 32 cm Umfang: Wie lang ist eine Seite?",
                "answers": [
                    "8 cm",
                    "16 cm",
                    "4 cm",
                    "28 cm"
                ],
                "correct": 0,
                "explanation": "32 cm : 4 = 8 cm."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "umff_k4_l2",
        "kurs": "umfang_flaeche_k4",
        "order": 2,
        "icon": "🟩",
        "title": "Der Flächeninhalt",
        "kurz": "Kästchen zählen und Länge · Breite rechnen",
        "erklaerung": {
            "intro": "Der <b>Flächeninhalt</b> sagt, wie viel Platz eine Figur innen bedeckt. Man misst ihn mit kleinen Quadraten: Ein Quadrat mit 1 cm Seitenlänge hat <b>1 cm²</b> (Quadratzentimeter). Beim Rechteck liegen so viele Reihen untereinander, wie es breit ist – in jeder Reihe so viele Kästchen, wie es lang ist. Darum rechnest du <b>Länge · Breite</b>. Beim Quadrat: <b>Seite · Seite</b>.",
            "merksatz": "Fläche = Kästchen innen zählen. Beim Rechteck: Länge · Breite. Einheit: cm² oder m².",
            "beispiele": [
                "Rechteck, 4 cm lang und 3 cm breit: 3 Reihen mit je 4 Kästchen. 4 · 3 = 12 cm².<svg viewBox='0 0 170 130' style='width:100%;max-width:238px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='80' height='60' fill='rgba(74,222,128,0.18)' stroke='#38bdf8' stroke-width='2.5'/><line x1='65' y1='25' x2='65' y2='85' stroke='#94a3b8' stroke-width='1'/><line x1='85' y1='25' x2='85' y2='85' stroke='#94a3b8' stroke-width='1'/><line x1='105' y1='25' x2='105' y2='85' stroke='#94a3b8' stroke-width='1'/><line x1='45' y1='45' x2='125' y2='45' stroke='#94a3b8' stroke-width='1'/><line x1='45' y1='65' x2='125' y2='65' stroke='#94a3b8' stroke-width='1'/><text x='85.0' y='16' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>4 cm</text><text x='133' y='59.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>3 cm</text><text x='85.0' y='120' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#4ade80'>A = 12 cm²</text></svg>",
                "Quadrat mit 3 cm Seitenlänge: 3 · 3 = 9 cm².<svg viewBox='0 0 150 130' style='width:100%;max-width:210px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='60' height='60' fill='rgba(74,222,128,0.18)' stroke='#38bdf8' stroke-width='2.5'/><line x1='65' y1='25' x2='65' y2='85' stroke='#94a3b8' stroke-width='1'/><line x1='85' y1='25' x2='85' y2='85' stroke='#94a3b8' stroke-width='1'/><line x1='45' y1='45' x2='105' y2='45' stroke='#94a3b8' stroke-width='1'/><line x1='45' y1='65' x2='105' y2='65' stroke='#94a3b8' stroke-width='1'/><text x='75.0' y='16' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>3 cm</text><text x='113' y='59.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>3 cm</text><text x='75.0' y='120' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#4ade80'>A = 9 cm²</text></svg>",
                "1 cm² ist ein Kästchen mit 1 cm Seitenlänge. 1 m² ist ein Quadrat mit 1 m Seitenlänge – so groß wie eine kleine Decke."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "umffk4l2_l1",
                    "category": "kurs_umff_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele Kästchen hat dieses Rechteck?",
                    "answers": [
                        "6",
                        "5",
                        "10",
                        "8"
                    ],
                    "correct": 0,
                    "explanation": "2 Reihen mit je 3 Kästchen: 2 · 3 = 6.",
                    "grafik": "<svg viewBox='0 0 150 90' style='width:100%;max-width:210px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='60' height='40' fill='rgba(74,222,128,0.18)' stroke='#38bdf8' stroke-width='2.5'/><line x1='65' y1='25' x2='65' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='85' y1='25' x2='85' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='45' y1='45' x2='105' y2='45' stroke='#94a3b8' stroke-width='1'/></svg>"
                },
                {
                    "id": "umffk4l2_l2",
                    "category": "kurs_umff_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was bedeutet die Einheit cm²?",
                    "answers": [
                        "Quadratzentimeter",
                        "Zentimeter",
                        "Kubikzentimeter",
                        "Zentimeter mal zwei"
                    ],
                    "correct": 0,
                    "explanation": "cm² heißt Quadratzentimeter – die Fläche eines Kästchens mit 1 cm Seitenlänge."
                },
                {
                    "id": "umffk4l2_l3",
                    "category": "kurs_umff_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Rechteck 5 cm · 2 cm: Wie groß ist die Fläche?",
                    "answers": [
                        "10 cm²",
                        "7 cm²",
                        "14 cm²",
                        "12 cm²"
                    ],
                    "correct": 0,
                    "explanation": "5 · 2 = 10 cm².",
                    "grafik": "<svg viewBox='0 0 190 90' style='width:100%;max-width:266px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='100' height='40' fill='rgba(74,222,128,0.18)' stroke='#38bdf8' stroke-width='2.5'/><line x1='65' y1='25' x2='65' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='85' y1='25' x2='85' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='105' y1='25' x2='105' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='125' y1='25' x2='125' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='45' y1='45' x2='145' y2='45' stroke='#94a3b8' stroke-width='1'/><text x='95.0' y='16' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>5 cm</text><text x='153' y='49.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>2 cm</text></svg>"
                },
                {
                    "id": "umffk4l2_l4",
                    "category": "kurs_umff_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Quadrat, Seite 2 cm: Wie groß ist die Fläche?",
                    "answers": [
                        "4 cm²",
                        "8 cm²",
                        "2 cm²",
                        "6 cm²"
                    ],
                    "correct": 0,
                    "explanation": "2 · 2 = 4 cm². 8 wäre der Umfang.",
                    "grafik": "<svg viewBox='0 0 130 90' style='width:100%;max-width:182px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='40' height='40' fill='rgba(74,222,128,0.18)' stroke='#38bdf8' stroke-width='2.5'/><line x1='65' y1='25' x2='65' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='45' y1='45' x2='85' y2='45' stroke='#94a3b8' stroke-width='1'/><text x='65.0' y='16' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>2 cm</text><text x='93' y='49.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>2 cm</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "umffk4l2_m1",
                    "category": "kurs_umff_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viele Kästchen liegen in diesem Rechteck?",
                    "answers": [
                        "15",
                        "16",
                        "8",
                        "18"
                    ],
                    "correct": 0,
                    "explanation": "3 Reihen mit je 5 Kästchen: 3 · 5 = 15.",
                    "grafik": "<svg viewBox='0 0 190 110' style='width:100%;max-width:266px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='100' height='60' fill='rgba(74,222,128,0.18)' stroke='#38bdf8' stroke-width='2.5'/><line x1='65' y1='25' x2='65' y2='85' stroke='#94a3b8' stroke-width='1'/><line x1='85' y1='25' x2='85' y2='85' stroke='#94a3b8' stroke-width='1'/><line x1='105' y1='25' x2='105' y2='85' stroke='#94a3b8' stroke-width='1'/><line x1='125' y1='25' x2='125' y2='85' stroke='#94a3b8' stroke-width='1'/><line x1='45' y1='45' x2='145' y2='45' stroke='#94a3b8' stroke-width='1'/><line x1='45' y1='65' x2='145' y2='65' stroke='#94a3b8' stroke-width='1'/></svg>"
                },
                {
                    "id": "umffk4l2_m2",
                    "category": "kurs_umff_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Rechteck 7 cm · 3 cm: Wie groß ist die Fläche?",
                    "answers": [
                        "21 cm²",
                        "20 cm²",
                        "10 cm²",
                        "24 cm²"
                    ],
                    "correct": 0,
                    "explanation": "7 · 3 = 21 cm². 20 wäre der Umfang."
                },
                {
                    "id": "umffk4l2_m3",
                    "category": "kurs_umff_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Quadrat, Seite 6 cm: Wie groß ist die Fläche?",
                    "answers": [
                        "36 cm²",
                        "24 cm²",
                        "12 cm²",
                        "30 cm²"
                    ],
                    "correct": 0,
                    "explanation": "6 · 6 = 36 cm²."
                },
                {
                    "id": "umffk4l2_m4",
                    "category": "kurs_umff_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Rechnung ergibt die Fläche eines Rechtecks?",
                    "answers": [
                        "Länge · Breite",
                        "Länge + Breite",
                        "2 · (Länge + Breite)",
                        "4 · Länge"
                    ],
                    "correct": 0,
                    "explanation": "Reihen mal Kästchen pro Reihe: Länge · Breite."
                }
            ],
            "schwer": [
                {
                    "id": "umffk4l2_s1",
                    "category": "kurs_umff_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Zimmer 5 m · 4 m: Wie viel m² Teppich brauchst du?",
                    "answers": [
                        "20 m²",
                        "18 m²",
                        "9 m²",
                        "25 m²"
                    ],
                    "correct": 0,
                    "explanation": "5 · 4 = 20 m²."
                },
                {
                    "id": "umffk4l2_s2",
                    "category": "kurs_umff_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Rechteck: 24 cm² Fläche, 6 cm lang. Wie breit?",
                    "answers": [
                        "4 cm",
                        "18 cm",
                        "30 cm",
                        "3 cm"
                    ],
                    "correct": 0,
                    "explanation": "6 · ? = 24, also 24 : 6 = 4 cm."
                },
                {
                    "id": "umffk4l2_s3",
                    "category": "kurs_umff_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Quadrat mit 49 cm² Fläche: Wie lang ist eine Seite?",
                    "answers": [
                        "7 cm",
                        "12 cm",
                        "24 cm",
                        "9 cm"
                    ],
                    "correct": 0,
                    "explanation": "7 · 7 = 49, also ist eine Seite 7 cm lang."
                },
                {
                    "id": "umffk4l2_s4",
                    "category": "kurs_umff_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Zwei Rechtecke, je 3 cm · 2 cm: Fläche zusammen?",
                    "answers": [
                        "12 cm²",
                        "6 cm²",
                        "10 cm²",
                        "24 cm²"
                    ],
                    "correct": 0,
                    "explanation": "Ein Rechteck hat 3 · 2 = 6 cm², zwei haben 12 cm²."
                }
            ]
        },
        "test": [
            {
                "id": "umffk4l2_t1",
                "category": "kurs_umff_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "1 Kästchen = 1 cm². Wie groß ist die Fläche?",
                "answers": [
                    "8 cm²",
                    "12 cm²",
                    "6 cm²",
                    "10 cm²"
                ],
                "correct": 0,
                "explanation": "2 Reihen mit je 4 Kästchen: 8 cm².",
                "grafik": "<svg viewBox='0 0 170 90' style='width:100%;max-width:238px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='80' height='40' fill='rgba(74,222,128,0.18)' stroke='#38bdf8' stroke-width='2.5'/><line x1='65' y1='25' x2='65' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='85' y1='25' x2='85' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='105' y1='25' x2='105' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='45' y1='45' x2='125' y2='45' stroke='#94a3b8' stroke-width='1'/></svg>"
            },
            {
                "id": "umffk4l2_t2",
                "category": "kurs_umff_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechteck 8 cm · 2 cm: Wie groß ist die Fläche?",
                "answers": [
                    "16 cm²",
                    "20 cm²",
                    "10 cm²",
                    "18 cm²"
                ],
                "correct": 0,
                "explanation": "8 · 2 = 16 cm²."
            },
            {
                "id": "umffk4l2_t3",
                "category": "kurs_umff_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Quadrat, Seite 5 cm: Wie groß ist die Fläche?",
                "answers": [
                    "25 cm²",
                    "20 cm²",
                    "10 cm²",
                    "15 cm²"
                ],
                "correct": 0,
                "explanation": "5 · 5 = 25 cm²."
            },
            {
                "id": "umffk4l2_t4",
                "category": "kurs_umff_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Womit misst man eine Fläche?",
                "answers": [
                    "Mit Quadraten auslegen",
                    "Mit Faden umlegen",
                    "Mit einer Waage",
                    "Mit einer Uhr"
                ],
                "correct": 0,
                "explanation": "Eine Fläche misst man, indem man sie mit gleich großen Quadraten auslegt."
            },
            {
                "id": "umffk4l2_t5",
                "category": "kurs_umff_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Beet 6 m · 2 m: Wie groß ist die Fläche?",
                "answers": [
                    "12 m²",
                    "16 m²",
                    "8 m²",
                    "14 m²"
                ],
                "correct": 0,
                "explanation": "6 · 2 = 12 m²."
            },
            {
                "id": "umffk4l2_t6",
                "category": "kurs_umff_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechteck: 30 cm² Fläche, 5 cm breit. Wie lang?",
                "answers": [
                    "6 cm",
                    "25 cm",
                    "35 cm",
                    "150 cm"
                ],
                "correct": 0,
                "explanation": "30 : 5 = 6 cm."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "umff_k4_l3",
        "kurs": "umfang_flaeche_k4",
        "order": 3,
        "icon": "🤔",
        "title": "Umfang oder Fläche?",
        "kurz": "Sachaufgaben: Geht es um den Rand oder um das Innere?",
        "erklaerung": {
            "intro": "Bei Sachaufgaben überlegst du zuerst: Geht es um den <b>Rand</b> oder um das <b>Innere</b>? Zaun, Rahmen, Borte oder eine Runde laufen: Das ist der <b>Umfang</b> (cm, m). Teppich, Rasen, Fliesen oder eine Wand streichen: Das ist die <b>Fläche</b> (cm², m²).",
            "merksatz": "Am Rand entlang → Umfang. Innen bedecken → Fläche.",
            "beispiele": [
                "Rasenstück, 4 m lang und 2 m breit. Zaun: U = 4 + 2 + 4 + 2 = 12 m. Rasen: A = 4 · 2 = 8 m².<svg viewBox='0 0 170 110' style='width:100%;max-width:238px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='80' height='40' fill='rgba(74,222,128,0.18)' stroke='#38bdf8' stroke-width='2.5'/><line x1='65' y1='25' x2='65' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='85' y1='25' x2='85' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='105' y1='25' x2='105' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='45' y1='45' x2='125' y2='45' stroke='#94a3b8' stroke-width='1'/><rect x='41' y='21' width='88' height='48' fill='none' stroke='#f59e0b' stroke-width='2' stroke-dasharray='6 3'/><text x='85.0' y='16' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>4 m</text><text x='133' y='49.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>2 m</text><text x='85.0' y='100' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#4ade80'>Zaun 12 m · Rasen 8 m²</text></svg>",
                "Gleiche Fläche, anderer Umfang: 6 cm · 2 cm und 4 cm · 3 cm haben beide 12 cm². Der Umfang ist 16 cm und 14 cm.<svg viewBox='0 0 320 130' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='96' height='32' fill='rgba(74,222,128,0.18)' stroke='#38bdf8' stroke-width='2.5'/><line x1='36' y1='20' x2='36' y2='52' stroke='#94a3b8' stroke-width='1'/><line x1='52' y1='20' x2='52' y2='52' stroke='#94a3b8' stroke-width='1'/><line x1='68' y1='20' x2='68' y2='52' stroke='#94a3b8' stroke-width='1'/><line x1='84' y1='20' x2='84' y2='52' stroke='#94a3b8' stroke-width='1'/><line x1='100' y1='20' x2='100' y2='52' stroke='#94a3b8' stroke-width='1'/><line x1='20' y1='36' x2='116' y2='36' stroke='#94a3b8' stroke-width='1'/><text x='68.0' y='118' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>U = 16 cm</text><rect x='176' y='20' width='64' height='48' fill='rgba(74,222,128,0.18)' stroke='#38bdf8' stroke-width='2.5'/><line x1='192' y1='20' x2='192' y2='68' stroke='#94a3b8' stroke-width='1'/><line x1='208' y1='20' x2='208' y2='68' stroke='#94a3b8' stroke-width='1'/><line x1='224' y1='20' x2='224' y2='68' stroke='#94a3b8' stroke-width='1'/><line x1='176' y1='36' x2='240' y2='36' stroke='#94a3b8' stroke-width='1'/><line x1='176' y1='52' x2='240' y2='52' stroke='#94a3b8' stroke-width='1'/><text x='208.0' y='118' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>U = 14 cm</text></svg>",
                "Achte auf die Einheit: Umfang in cm oder m, Fläche in cm² oder m²."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "umffk4l3_l1",
                    "category": "kurs_umff_k4_l3",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Du baust einen Zaun um den Garten. Was brauchst du?",
                    "answers": [
                        "Den Umfang",
                        "Die Fläche",
                        "Die Höhe",
                        "Das Gewicht"
                    ],
                    "correct": 0,
                    "explanation": "Der Zaun läuft am Rand entlang – also brauchst du den Umfang."
                },
                {
                    "id": "umffk4l3_l2",
                    "category": "kurs_umff_k4_l3",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Du legst einen Teppich ins Zimmer. Was brauchst du?",
                    "answers": [
                        "Die Fläche",
                        "Den Umfang",
                        "Die Höhe",
                        "Das Gewicht"
                    ],
                    "correct": 0,
                    "explanation": "Der Teppich bedeckt den Boden innen – also brauchst du die Fläche."
                },
                {
                    "id": "umffk4l3_l3",
                    "category": "kurs_umff_k4_l3",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "In welcher Einheit gibt man eine Fläche an?",
                    "answers": [
                        "m²",
                        "m",
                        "kg",
                        "Liter"
                    ],
                    "correct": 0,
                    "explanation": "Flächen misst man in cm² oder m²."
                },
                {
                    "id": "umffk4l3_l4",
                    "category": "kurs_umff_k4_l3",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Borte rund um ein Bild: Was rechnest du?",
                    "answers": [
                        "Den Umfang",
                        "Die Fläche",
                        "Die Höhe",
                        "Die Ecken"
                    ],
                    "correct": 0,
                    "explanation": "Die Borte läuft am Rand entlang: Umfang."
                }
            ],
            "mittel": [
                {
                    "id": "umffk4l3_m1",
                    "category": "kurs_umff_k4_l3",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Rasenstück 5 m · 2 m: Wie viel Meter Zaun?",
                    "answers": [
                        "14 m",
                        "10 m",
                        "7 m",
                        "12 m"
                    ],
                    "correct": 0,
                    "explanation": "Zaun = Umfang: 5 + 2 + 5 + 2 = 14 m.",
                    "grafik": "<svg viewBox='0 0 190 90' style='width:100%;max-width:266px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='100' height='40' fill='none' stroke='#38bdf8' stroke-width='2.5'/><text x='95.0' y='16' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>5 m</text><text x='153' y='49.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>2 m</text></svg>"
                },
                {
                    "id": "umffk4l3_m2",
                    "category": "kurs_umff_k4_l3",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Rasenstück 5 m · 2 m: Wie viel m² Rasen?",
                    "answers": [
                        "10 m²",
                        "14 m²",
                        "7 m²",
                        "12 m²"
                    ],
                    "correct": 0,
                    "explanation": "Rasen = Fläche: 5 · 2 = 10 m².",
                    "grafik": "<svg viewBox='0 0 190 90' style='width:100%;max-width:266px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='45' y='25' width='100' height='40' fill='rgba(74,222,128,0.18)' stroke='#38bdf8' stroke-width='2.5'/><line x1='65' y1='25' x2='65' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='85' y1='25' x2='85' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='105' y1='25' x2='105' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='125' y1='25' x2='125' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='45' y1='45' x2='145' y2='45' stroke='#94a3b8' stroke-width='1'/><text x='95.0' y='16' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>5 m</text><text x='153' y='49.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>2 m</text></svg>"
                },
                {
                    "id": "umffk4l3_m3",
                    "category": "kurs_umff_k4_l3",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was gehört zur Fläche?",
                    "answers": [
                        "Fliesen legen",
                        "Zaun bauen",
                        "Runde laufen",
                        "Rahmen kleben"
                    ],
                    "correct": 0,
                    "explanation": "Fliesen bedecken eine Fläche."
                },
                {
                    "id": "umffk4l3_m4",
                    "category": "kurs_umff_k4_l3",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was gehört zum Umfang?",
                    "answers": [
                        "Runde laufen",
                        "Fliesen legen",
                        "Rasen säen",
                        "Wand streichen"
                    ],
                    "correct": 0,
                    "explanation": "Eine Runde führt am Rand entlang: Umfang."
                }
            ],
            "schwer": [
                {
                    "id": "umffk4l3_s1",
                    "category": "kurs_umff_k4_l3",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "A: 6 cm · 2 cm, B: 4 cm · 3 cm. Was stimmt?",
                    "answers": [
                        "Gleiche Fläche",
                        "Gleicher Umfang",
                        "A hat mehr Fläche",
                        "B hat mehr Fläche"
                    ],
                    "correct": 0,
                    "explanation": "Beide haben 12 cm². Der Umfang ist verschieden: 16 cm und 14 cm.",
                    "grafik": "<svg viewBox='0 0 320 130' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='96' height='32' fill='rgba(74,222,128,0.18)' stroke='#38bdf8' stroke-width='2.5'/><line x1='36' y1='20' x2='36' y2='52' stroke='#94a3b8' stroke-width='1'/><line x1='52' y1='20' x2='52' y2='52' stroke='#94a3b8' stroke-width='1'/><line x1='68' y1='20' x2='68' y2='52' stroke='#94a3b8' stroke-width='1'/><line x1='84' y1='20' x2='84' y2='52' stroke='#94a3b8' stroke-width='1'/><line x1='100' y1='20' x2='100' y2='52' stroke='#94a3b8' stroke-width='1'/><line x1='20' y1='36' x2='116' y2='36' stroke='#94a3b8' stroke-width='1'/><text x='68.0' y='118' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>A</text><rect x='176' y='20' width='64' height='48' fill='rgba(74,222,128,0.18)' stroke='#38bdf8' stroke-width='2.5'/><line x1='192' y1='20' x2='192' y2='68' stroke='#94a3b8' stroke-width='1'/><line x1='208' y1='20' x2='208' y2='68' stroke='#94a3b8' stroke-width='1'/><line x1='224' y1='20' x2='224' y2='68' stroke='#94a3b8' stroke-width='1'/><line x1='176' y1='36' x2='240' y2='36' stroke='#94a3b8' stroke-width='1'/><line x1='176' y1='52' x2='240' y2='52' stroke='#94a3b8' stroke-width='1'/><text x='208.0' y='118' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>B</text></svg>"
                },
                {
                    "id": "umffk4l3_s2",
                    "category": "kurs_umff_k4_l3",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welches Rechteck mit 12 cm² hat den größten Umfang?",
                    "answers": [
                        "12 cm · 1 cm",
                        "6 cm · 2 cm",
                        "4 cm · 3 cm",
                        "Alle gleich groß"
                    ],
                    "correct": 0,
                    "explanation": "Umfänge: 26 cm, 16 cm und 14 cm. Je länger und schmaler, desto größer der Umfang."
                },
                {
                    "id": "umffk4l3_s3",
                    "category": "kurs_umff_k4_l3",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Quadrat mit 16 cm Umfang: Wie groß ist die Fläche?",
                    "answers": [
                        "16 cm²",
                        "64 cm²",
                        "8 cm²",
                        "32 cm²"
                    ],
                    "correct": 0,
                    "explanation": "Eine Seite ist 16 : 4 = 4 cm lang. Fläche: 4 · 4 = 16 cm²."
                },
                {
                    "id": "umffk4l3_s4",
                    "category": "kurs_umff_k4_l3",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Bad 3 m · 2 m, Fliesen je 1 m²: Wie viele Fliesen?",
                    "answers": [
                        "6",
                        "10",
                        "5",
                        "12"
                    ],
                    "correct": 0,
                    "explanation": "Fläche: 3 · 2 = 6 m², also 6 Fliesen."
                }
            ]
        },
        "test": [
            {
                "id": "umffk4l3_t1",
                "category": "kurs_umff_k4_l3",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Du streichst eine Wand. Was musst du kennen?",
                "answers": [
                    "Die Fläche",
                    "Den Umfang",
                    "Das Gewicht",
                    "Die Uhrzeit"
                ],
                "correct": 0,
                "explanation": "Die Farbe bedeckt die Wand innen: Fläche."
            },
            {
                "id": "umffk4l3_t2",
                "category": "kurs_umff_k4_l3",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Du läufst einmal um den Sportplatz. Das ist …",
                "answers": [
                    "der Umfang",
                    "die Fläche",
                    "die Höhe",
                    "das Volumen"
                ],
                "correct": 0,
                "explanation": "Einmal herum ist der Umfang."
            },
            {
                "id": "umffk4l3_t3",
                "category": "kurs_umff_k4_l3",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Spielplatz 8 m · 5 m: Wie lang ist der Zaun?",
                "answers": [
                    "26 m",
                    "40 m",
                    "13 m",
                    "18 m"
                ],
                "correct": 0,
                "explanation": "8 + 5 + 8 + 5 = 26 m."
            },
            {
                "id": "umffk4l3_t4",
                "category": "kurs_umff_k4_l3",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Spielplatz 8 m · 5 m: Wie viel m² Kunstrasen?",
                "answers": [
                    "40 m²",
                    "26 m²",
                    "13 m²",
                    "45 m²"
                ],
                "correct": 0,
                "explanation": "8 · 5 = 40 m²."
            },
            {
                "id": "umffk4l3_t5",
                "category": "kurs_umff_k4_l3",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Quadrat, Seite 3 cm: Umfang und Fläche?",
                "answers": [
                    "12 cm und 9 cm²",
                    "9 cm und 12 cm²",
                    "6 cm und 9 cm²",
                    "12 cm und 6 cm²"
                ],
                "correct": 0,
                "explanation": "Umfang 4 · 3 = 12 cm, Fläche 3 · 3 = 9 cm²."
            },
            {
                "id": "umffk4l3_t6",
                "category": "kurs_umff_k4_l3",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Foto 10 cm · 10 cm: Wie lang ist der Rahmen?",
                "answers": [
                    "40 cm",
                    "100 cm",
                    "20 cm",
                    "30 cm"
                ],
                "correct": 0,
                "explanation": "Rahmen = Umfang: 4 · 10 cm = 40 cm."
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
})();
