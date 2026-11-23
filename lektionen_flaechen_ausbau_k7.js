// Flächen Klasse 7 – Ausbau (Lektion 3–5)
(function () {
    const extraLektionen = [
    {
        "id": "flae_k7_l3",
        "kurs": "flaechen_k7",
        "order": 3,
        "icon": "🖼️",
        "title": "Flächen am Bild berechnen",
        "kurz": "Rechteck, Dreieck, Parallelogramm, Trapez – mit Zeichnung",
        "erklaerung": {
            "intro": "Bei jeder Figur zuerst schauen: <b>Welche Form ist es?</b> Dann die passende Formel nehmen: Rechteck <b>A = a · b</b>, Dreieck <b>A = g · h : 2</b>, Parallelogramm <b>A = g · h</b>, Trapez <b>A = (a + c) : 2 · h</b>. Die <b>Höhe h</b> ist immer die gestrichelte Linie, die <b>senkrecht</b> auf der Grundseite steht. Schräge Seiten (grau) brauchst du für die Fläche nicht!",
            "merksatz": "Höhe = senkrecht (gestrichelt). Schräge Seiten nur für den Umfang. Beim Dreieck : 2 nicht vergessen.",
            "beispiele": [
                "Dreieck: g = 8 cm, h = 5 cm → A = 8 · 5 : 2 = 20 cm². Die schräge Seite 6 cm spielt keine Rolle.<svg viewBox='0 0 270 150' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,120.0 230.0,120.0 90.0,25.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='90.0' y1='25.0' x2='90.0' y2='120.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 100.0 120.0 L 100.0 110.0 L 90.0 110.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='130.0' y='142.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>g = 8 cm</text><text x='96.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 5 cm</text><text x='160.0' y='62.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>6 cm</text></svg>",
                "Parallelogramm: g = 7 cm, h = 4 cm → A = 7 · 4 = 28 cm².<svg viewBox='0 0 290 150' style='width:100%;max-width:290px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,120.0 210.0,120.0 260.0,30.0 80.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='80.0' y1='30.0' x2='80.0' y2='120.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 90.0 120.0 L 90.0 110.0 L 80.0 110.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='120.0' y='142.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>g = 7 cm</text><text x='86.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 4 cm</text><text x='244.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>5 cm</text></svg>",
                "Trapez: a = 10 cm, c = 6 cm, h = 4 cm → A = (10 + 6) : 2 · 4 = 32 cm².<svg viewBox='0 0 290 160' style='width:100%;max-width:290px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,125.0 260.0,125.0 200.0,35.0 80.0,35.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='80.0' y1='35.0' x2='80.0' y2='125.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 90.0 125.0 L 90.0 115.0 L 80.0 115.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='145.0' y='148.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>a = 10 cm</text><text x='140.0' y='26.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>c = 6 cm</text><text x='86.0' y='85.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 4 cm</text><text x='236.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>5 cm</text></svg>"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "flaek7l3u_leicht_1",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Rechteck (a = 7, b = 4): Wie groß ist die Fläche?",
                    "answers": [
                        "22 cm²",
                        "11 cm²",
                        "28 cm²",
                        "14 cm²"
                    ],
                    "correct": 2,
                    "explanation": "A = a · b = 7 · 4 = 28 cm². (22 cm wäre der Umfang.)",
                    "grafik": "<svg viewBox='0 0 300 150' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40.0,25.0 220.0,25.0 220.0,115.0 40.0,115.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><text x='130.0' y='137.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7 cm</text><text x='232.0' y='75.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 cm</text></svg>"
                },
                {
                    "id": "flaek7l3u_leicht_2",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Dreieck (g = 6, h = 4): Wie groß ist die Fläche?",
                    "answers": [
                        "24 cm²",
                        "15 cm²",
                        "30 cm²",
                        "12 cm²"
                    ],
                    "correct": 3,
                    "explanation": "A = g · h : 2 = 6 · 4 : 2 = 12 cm². Die schräge Seite (5) brauchst du nicht – und das : 2 nicht vergessen!",
                    "grafik": "<svg viewBox='0 0 270 150' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,120.0 230.0,120.0 90.0,25.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='90.0' y1='25.0' x2='90.0' y2='120.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 100.0 120.0 L 100.0 110.0 L 90.0 110.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='130.0' y='142.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>g = 6 cm</text><text x='96.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 4 cm</text><text x='160.0' y='62.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>5 cm</text></svg>"
                },
                {
                    "id": "flaek7l3u_leicht_3",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Parallelogramm (g = 8, h = 3): Wie groß ist die Fläche?",
                    "answers": [
                        "32 cm²",
                        "24 cm²",
                        "12 cm²",
                        "11 cm²"
                    ],
                    "correct": 1,
                    "explanation": "A = g · h = 8 · 3 = 24 cm². Nicht die schräge Seite 4 nehmen – die Höhe steht senkrecht!",
                    "grafik": "<svg viewBox='0 0 290 150' style='width:100%;max-width:290px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,120.0 210.0,120.0 260.0,30.0 80.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='80.0' y1='30.0' x2='80.0' y2='120.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 90.0 120.0 L 90.0 110.0 L 80.0 110.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='120.0' y='142.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>g = 8 cm</text><text x='86.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 3 cm</text><text x='244.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>4 cm</text></svg>"
                },
                {
                    "id": "flaek7l3u_leicht_4",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Trapez (a = 8, c = 4, h = 3): Wie groß ist die Fläche?",
                    "answers": [
                        "36 cm²",
                        "24 cm²",
                        "32 cm²",
                        "18 cm²"
                    ],
                    "correct": 3,
                    "explanation": "A = (a + c) : 2 · h = (8 + 4) : 2 · 3 = 6 · 3 = 18 cm².",
                    "grafik": "<svg viewBox='0 0 290 160' style='width:100%;max-width:290px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,125.0 260.0,125.0 200.0,35.0 80.0,35.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='80.0' y1='35.0' x2='80.0' y2='125.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 90.0 125.0 L 90.0 115.0 L 80.0 115.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='145.0' y='148.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>a = 8 cm</text><text x='140.0' y='26.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>c = 4 cm</text><text x='86.0' y='85.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 3 cm</text><text x='236.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>4 cm</text></svg>"
                },
                {
                    "id": "flaek7l3u_leicht_5",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welche Linie ist im Bild die Höhe?",
                    "answers": [
                        "Die längste Seite",
                        "Die schräge graue Seite",
                        "Die untere Seite",
                        "Die gestrichelte Linie"
                    ],
                    "correct": 3,
                    "explanation": "Die Höhe steht immer senkrecht (90°) auf der Grundseite – im Bild gestrichelt.",
                    "grafik": "<svg viewBox='0 0 270 150' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,120.0 230.0,120.0 90.0,25.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='90.0' y1='25.0' x2='90.0' y2='120.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 100.0 120.0 L 100.0 110.0 L 90.0 110.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='130.0' y='142.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>g = 8 cm</text><text x='96.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 5 cm</text><text x='160.0' y='62.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>6 cm</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "flaek7l3u_mittel_1",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Dreieck (g = 9, h = 6): Wie groß ist die Fläche?",
                    "answers": [
                        "54 cm²",
                        "31,5 cm²",
                        "27 cm²",
                        "22 cm²"
                    ],
                    "correct": 2,
                    "explanation": "A = g · h : 2 = 9 · 6 : 2 = 27 cm². Die schräge Seite (7) brauchst du nicht – und das : 2 nicht vergessen!",
                    "grafik": "<svg viewBox='0 0 270 150' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,120.0 230.0,120.0 90.0,25.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='90.0' y1='25.0' x2='90.0' y2='120.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 100.0 120.0 L 100.0 110.0 L 90.0 110.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='130.0' y='142.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>g = 9 cm</text><text x='96.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 6 cm</text><text x='160.0' y='62.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>7 cm</text></svg>"
                },
                {
                    "id": "flaek7l3u_mittel_2",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Parallelogramm (g = 12, h = 5): Wie groß ist die Fläche?",
                    "answers": [
                        "72 cm²",
                        "30 cm²",
                        "60 cm²",
                        "36 cm²"
                    ],
                    "correct": 2,
                    "explanation": "A = g · h = 12 · 5 = 60 cm². Nicht die schräge Seite 6 nehmen – die Höhe steht senkrecht!",
                    "grafik": "<svg viewBox='0 0 290 150' style='width:100%;max-width:290px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,120.0 210.0,120.0 260.0,30.0 80.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='80.0' y1='30.0' x2='80.0' y2='120.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 90.0 120.0 L 90.0 110.0 L 80.0 110.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='120.0' y='142.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>g = 12 cm</text><text x='86.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 5 cm</text><text x='244.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>6 cm</text></svg>"
                },
                {
                    "id": "flaek7l3u_mittel_3",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Trapez (a = 11, c = 5, h = 6): Wie groß ist die Fläche?",
                    "answers": [
                        "96 cm²",
                        "56 cm²",
                        "66 cm²",
                        "48 cm²"
                    ],
                    "correct": 3,
                    "explanation": "A = (a + c) : 2 · h = (11 + 5) : 2 · 6 = 8 · 6 = 48 cm².",
                    "grafik": "<svg viewBox='0 0 290 160' style='width:100%;max-width:290px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,125.0 260.0,125.0 200.0,35.0 80.0,35.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='80.0' y1='35.0' x2='80.0' y2='125.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 90.0 125.0 L 90.0 115.0 L 80.0 115.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='145.0' y='148.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>a = 11 cm</text><text x='140.0' y='26.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>c = 5 cm</text><text x='86.0' y='85.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 6 cm</text><text x='236.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>7 cm</text></svg>"
                },
                {
                    "id": "flaek7l3u_mittel_4",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Rechteck (a = 4,5, b = 6): Wie groß ist die Fläche?",
                    "answers": [
                        "21 cm²",
                        "10,5 cm²",
                        "13,5 cm²",
                        "27 cm²"
                    ],
                    "correct": 3,
                    "explanation": "A = a · b = 4,5 · 6 = 27 cm². (21 cm wäre der Umfang.)",
                    "grafik": "<svg viewBox='0 0 300 150' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40.0,25.0 220.0,25.0 220.0,115.0 40.0,115.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><text x='130.0' y='137.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4,5 cm</text><text x='232.0' y='75.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 cm</text></svg>"
                },
                {
                    "id": "flaek7l3u_mittel_5",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Dreieck (g = 7,5, h = 4): Wie groß ist die Fläche?",
                    "answers": [
                        "30 cm²",
                        "22,5 cm²",
                        "17,5 cm²",
                        "15 cm²"
                    ],
                    "correct": 3,
                    "explanation": "A = g · h : 2 = 7,5 · 4 : 2 = 15 cm². Die schräge Seite (6) brauchst du nicht – und das : 2 nicht vergessen!",
                    "grafik": "<svg viewBox='0 0 270 150' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,120.0 230.0,120.0 90.0,25.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='90.0' y1='25.0' x2='90.0' y2='120.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 100.0 120.0 L 100.0 110.0 L 90.0 110.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='130.0' y='142.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>g = 7,5 cm</text><text x='96.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 4 cm</text><text x='160.0' y='62.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>6 cm</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "flaek7l3u_schwer_1",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Trapez (a = 9,5, c = 4,5, h = 5): Wie groß ist die Fläche?",
                    "answers": [
                        "70 cm²",
                        "42 cm²",
                        "35 cm²",
                        "47,5 cm²"
                    ],
                    "correct": 2,
                    "explanation": "A = (a + c) : 2 · h = (9,5 + 4,5) : 2 · 5 = 7 · 5 = 35 cm².",
                    "grafik": "<svg viewBox='0 0 290 160' style='width:100%;max-width:290px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,125.0 260.0,125.0 200.0,35.0 80.0,35.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='80.0' y1='35.0' x2='80.0' y2='125.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 90.0 125.0 L 90.0 115.0 L 80.0 115.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='145.0' y='148.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>a = 9,5 cm</text><text x='140.0' y='26.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>c = 4,5 cm</text><text x='86.0' y='85.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 5 cm</text><text x='236.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>6 cm</text></svg>"
                },
                {
                    "id": "flaek7l3u_schwer_2",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Parallelogramm (g = 6,5, h = 4): Wie groß ist die Fläche?",
                    "answers": [
                        "26 cm²",
                        "32,5 cm²",
                        "13 cm²",
                        "23 cm²"
                    ],
                    "correct": 0,
                    "explanation": "A = g · h = 6,5 · 4 = 26 cm². Nicht die schräge Seite 5 nehmen – die Höhe steht senkrecht!",
                    "grafik": "<svg viewBox='0 0 290 150' style='width:100%;max-width:290px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,120.0 210.0,120.0 260.0,30.0 80.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='80.0' y1='30.0' x2='80.0' y2='120.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 90.0 120.0 L 90.0 110.0 L 80.0 110.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='120.0' y='142.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>g = 6,5 cm</text><text x='86.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 4 cm</text><text x='244.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>5 cm</text></svg>"
                },
                {
                    "id": "flaek7l3u_schwer_3",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Dreieck (g = 13, h = 7): Wie groß ist die Fläche?",
                    "answers": [
                        "91 cm²",
                        "58,5 cm²",
                        "29 cm²",
                        "45,5 cm²"
                    ],
                    "correct": 3,
                    "explanation": "A = g · h : 2 = 13 · 7 : 2 = 45,5 cm². Die schräge Seite (9) brauchst du nicht – und das : 2 nicht vergessen!",
                    "grafik": "<svg viewBox='0 0 270 150' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,120.0 230.0,120.0 90.0,25.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='90.0' y1='25.0' x2='90.0' y2='120.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 100.0 120.0 L 100.0 110.0 L 90.0 110.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='130.0' y='142.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>g = 13 cm</text><text x='96.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 7 cm</text><text x='160.0' y='62.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>9 cm</text></svg>"
                },
                {
                    "id": "flaek7l3u_schwer_4",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Ein Dreieck hat A = 36 cm² und g = 9 cm. Wie hoch ist es?",
                    "answers": [
                        "4 cm",
                        "8 cm",
                        "18 cm",
                        "27 cm"
                    ],
                    "correct": 1,
                    "explanation": "A = g · h : 2 → h = 2 · A : g = 72 : 9 = 8 cm."
                },
                {
                    "id": "flaek7l3u_schwer_5",
                    "category": "kurs_flae_k7_l3",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Ein Trapez hat A = 40 cm², a = 12 cm, c = 8 cm. Wie hoch ist es?",
                    "answers": [
                        "2 cm",
                        "8 cm",
                        "4 cm",
                        "20 cm"
                    ],
                    "correct": 2,
                    "explanation": "(12 + 8) : 2 = 10. h = A : 10 = 40 : 10 = 4 cm."
                }
            ]
        },
        "test": [
            {
                "id": "flaek7l3_test_1",
                "category": "kurs_flae_k7_l3",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechteck (a = 9, b = 5): Wie groß ist die Fläche?",
                "answers": [
                    "28 cm²",
                    "45 cm²",
                    "14 cm²",
                    "22,5 cm²"
                ],
                "correct": 1,
                "explanation": "A = a · b = 9 · 5 = 45 cm². (28 cm wäre der Umfang.)",
                "grafik": "<svg viewBox='0 0 300 150' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40.0,25.0 220.0,25.0 220.0,115.0 40.0,115.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><text x='130.0' y='137.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9 cm</text><text x='232.0' y='75.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 cm</text></svg>"
            },
            {
                "id": "flaek7l3_test_2",
                "category": "kurs_flae_k7_l3",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Dreieck (g = 10, h = 6): Wie groß ist die Fläche?",
                "answers": [
                    "60 cm²",
                    "40 cm²",
                    "24 cm²",
                    "30 cm²"
                ],
                "correct": 3,
                "explanation": "A = g · h : 2 = 10 · 6 : 2 = 30 cm². Die schräge Seite (8) brauchst du nicht – und das : 2 nicht vergessen!",
                "grafik": "<svg viewBox='0 0 270 150' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,120.0 230.0,120.0 90.0,25.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='90.0' y1='25.0' x2='90.0' y2='120.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 100.0 120.0 L 100.0 110.0 L 90.0 110.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='130.0' y='142.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>g = 10 cm</text><text x='96.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 6 cm</text><text x='160.0' y='62.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>8 cm</text></svg>"
            },
            {
                "id": "flaek7l3_test_3",
                "category": "kurs_flae_k7_l3",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Parallelogramm (g = 9, h = 4): Wie groß ist die Fläche?",
                "answers": [
                    "45 cm²",
                    "36 cm²",
                    "18 cm²",
                    "28 cm²"
                ],
                "correct": 1,
                "explanation": "A = g · h = 9 · 4 = 36 cm². Nicht die schräge Seite 5 nehmen – die Höhe steht senkrecht!",
                "grafik": "<svg viewBox='0 0 290 150' style='width:100%;max-width:290px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,120.0 210.0,120.0 260.0,30.0 80.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='80.0' y1='30.0' x2='80.0' y2='120.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 90.0 120.0 L 90.0 110.0 L 80.0 110.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='120.0' y='142.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>g = 9 cm</text><text x='86.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 4 cm</text><text x='244.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>5 cm</text></svg>"
            },
            {
                "id": "flaek7l3_test_4",
                "category": "kurs_flae_k7_l3",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Trapez (a = 12, c = 6, h = 5): Wie groß ist die Fläche?",
                "answers": [
                    "90 cm²",
                    "45 cm²",
                    "54 cm²",
                    "60 cm²"
                ],
                "correct": 1,
                "explanation": "A = (a + c) : 2 · h = (12 + 6) : 2 · 5 = 9 · 5 = 45 cm².",
                "grafik": "<svg viewBox='0 0 290 160' style='width:100%;max-width:290px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,125.0 260.0,125.0 200.0,35.0 80.0,35.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='80.0' y1='35.0' x2='80.0' y2='125.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 90.0 125.0 L 90.0 115.0 L 80.0 115.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='145.0' y='148.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>a = 12 cm</text><text x='140.0' y='26.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>c = 6 cm</text><text x='86.0' y='85.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 5 cm</text><text x='236.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>6 cm</text></svg>"
            },
            {
                "id": "flaek7l3_test_5",
                "category": "kurs_flae_k7_l3",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Dreieck (g = 5, h = 8): Wie groß ist die Fläche?",
                "answers": [
                    "40 cm²",
                    "20 cm²",
                    "22,5 cm²",
                    "22 cm²"
                ],
                "correct": 1,
                "explanation": "A = g · h : 2 = 5 · 8 : 2 = 20 cm². Die schräge Seite (9) brauchst du nicht – und das : 2 nicht vergessen!",
                "grafik": "<svg viewBox='0 0 270 150' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,120.0 230.0,120.0 90.0,25.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='90.0' y1='25.0' x2='90.0' y2='120.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 100.0 120.0 L 100.0 110.0 L 90.0 110.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='130.0' y='142.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>g = 5 cm</text><text x='96.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 8 cm</text><text x='160.0' y='62.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>9 cm</text></svg>"
            },
            {
                "id": "flaek7l3_test_6",
                "category": "kurs_flae_k7_l3",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Parallelogramm (g = 15, h = 6): Wie groß ist die Fläche?",
                "answers": [
                    "120 cm²",
                    "45 cm²",
                    "46 cm²",
                    "90 cm²"
                ],
                "correct": 3,
                "explanation": "A = g · h = 15 · 6 = 90 cm². Nicht die schräge Seite 8 nehmen – die Höhe steht senkrecht!",
                "grafik": "<svg viewBox='0 0 290 150' style='width:100%;max-width:290px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,120.0 210.0,120.0 260.0,30.0 80.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='80.0' y1='30.0' x2='80.0' y2='120.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 90.0 120.0 L 90.0 110.0 L 80.0 110.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='120.0' y='142.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>g = 15 cm</text><text x='86.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 6 cm</text><text x='244.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>8 cm</text></svg>"
            },
            {
                "id": "flaek7l3_test_7",
                "category": "kurs_flae_k7_l3",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Trapez (a = 7, c = 3, h = 4): Wie groß ist die Fläche?",
                "answers": [
                    "40 cm²",
                    "25 cm²",
                    "20 cm²",
                    "28 cm²"
                ],
                "correct": 2,
                "explanation": "A = (a + c) : 2 · h = (7 + 3) : 2 · 4 = 5 · 4 = 20 cm².",
                "grafik": "<svg viewBox='0 0 290 160' style='width:100%;max-width:290px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,125.0 260.0,125.0 200.0,35.0 80.0,35.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><line x1='80.0' y1='35.0' x2='80.0' y2='125.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><path d='M 90.0 125.0 L 90.0 115.0 L 80.0 115.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='145.0' y='148.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>a = 7 cm</text><text x='140.0' y='26.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>c = 3 cm</text><text x='86.0' y='85.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>h = 4 cm</text><text x='236.0' y='80.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>5 cm</text></svg>"
            },
            {
                "id": "flaek7l3_test_8",
                "category": "kurs_flae_k7_l3",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Parallelogramm hat A = 42 cm² und h = 6 cm. Wie lang ist g?",
                "answers": [
                    "36 cm",
                    "14 cm",
                    "7 cm",
                    "3,5 cm"
                ],
                "correct": 2,
                "explanation": "g = A : h = 42 : 6 = 7 cm."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "flae_k7_l4",
        "kurs": "flaechen_k7",
        "order": 4,
        "icon": "🔁",
        "title": "Flächeneinheiten umrechnen",
        "kurz": "mm², cm², dm², m², a, ha, km²",
        "erklaerung": {
            "intro": "Flächeneinheiten: <b>mm² → cm² → dm² → m² → a → ha → km²</b>. Die Umrechnungszahl ist immer <b>100</b>! Warum? Ein Quadrat mit 1 cm Seite ist 10 mm · 10 mm = <b>100 mm²</b>. Also: 1 m² = 100 dm² = 10 000 cm². Für Grundstücke: 1 a (Ar) = 100 m², 1 ha (Hektar) = 100 a = 10 000 m², 1 km² = 100 ha.",
            "merksatz": "Flächen: immer 100 (zwei Nullen pro Stufe). Groß → klein: mal 100. Klein → groß: geteilt durch 100.",
            "beispiele": [
                "1 cm² = 10 mm · 10 mm = 100 mm². Deshalb ist die Umrechnungszahl 100.",
                "3 m² = 300 dm² = 30 000 cm².",
                "Ein Fußballfeld hat etwa 7 000 m² = 70 a = 0,7 ha."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "flaek7l4u_leicht_1",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wandle 5 cm² in mm² um.",
                    "answers": [
                        "50 mm²",
                        "5 000 mm²",
                        "5 mm²",
                        "500 mm²"
                    ],
                    "correct": 3,
                    "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von cm² nach mm²: mal 100 → 5 cm² = 500 mm²."
                },
                {
                    "id": "flaek7l4u_leicht_2",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wandle 3 m² in dm² um.",
                    "answers": [
                        "30 dm²",
                        "3 000 dm²",
                        "3 dm²",
                        "300 dm²"
                    ],
                    "correct": 3,
                    "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von m² nach dm²: mal 100 → 3 m² = 300 dm²."
                },
                {
                    "id": "flaek7l4u_leicht_3",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wandle 400 mm² in cm² um.",
                    "answers": [
                        "40 cm²",
                        "4 cm²",
                        "0,04 cm²",
                        "0,4 cm²"
                    ],
                    "correct": 1,
                    "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von mm² nach cm²: geteilt durch 100 → 400 mm² = 4 cm²."
                },
                {
                    "id": "flaek7l4u_leicht_4",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wandle 2 ha in a um.",
                    "answers": [
                        "20 a",
                        "2 000 a",
                        "200 a",
                        "2 a"
                    ],
                    "correct": 2,
                    "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von ha nach a: mal 100 → 2 ha = 200 a."
                },
                {
                    "id": "flaek7l4u_leicht_5",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wie viele cm² sind 1 dm²?",
                    "answers": [
                        "10 cm²",
                        "1 000 cm²",
                        "100 cm²",
                        "60 cm²"
                    ],
                    "correct": 2,
                    "explanation": "1 dm² = 10 cm · 10 cm = 100 cm²."
                }
            ],
            "mittel": [
                {
                    "id": "flaek7l4u_mittel_1",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wandle 2 m² in cm² um.",
                    "answers": [
                        "200 cm²",
                        "200 000 cm²",
                        "20 000 cm²",
                        "2 000 cm²"
                    ],
                    "correct": 2,
                    "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von m² nach cm²: mal 10 000 → 2 m² = 20 000 cm²."
                },
                {
                    "id": "flaek7l4u_mittel_2",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wandle 35 000 cm² in m² um.",
                    "answers": [
                        "350 m²",
                        "35 m²",
                        "3,5 m²",
                        "0,35 m²"
                    ],
                    "correct": 2,
                    "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von cm² nach m²: geteilt durch 10 000 → 35 000 cm² = 3,5 m²."
                },
                {
                    "id": "flaek7l4u_mittel_3",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wandle 7 a in m² um.",
                    "answers": [
                        "70 m²",
                        "7 000 m²",
                        "700 m²",
                        "7 m²"
                    ],
                    "correct": 2,
                    "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von a nach m²: mal 100 → 7 a = 700 m²."
                },
                {
                    "id": "flaek7l4u_mittel_4",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wandle 50 000 m² in ha um.",
                    "answers": [
                        "500 ha",
                        "5 ha",
                        "50 ha",
                        "0,5 ha"
                    ],
                    "correct": 1,
                    "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von m² nach ha: geteilt durch 10 000 → 50 000 m² = 5 ha."
                },
                {
                    "id": "flaek7l4u_mittel_5",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Warum ist die Umrechnungszahl bei Flächen 100 und nicht 10?",
                    "answers": [
                        "Weil 10 · 10 = 100",
                        "Weil Flächen größer sind",
                        "Das ist reiner Zufall",
                        "Wegen der Prozente"
                    ],
                    "correct": 0,
                    "explanation": "Ein Quadrat mit 1 cm Seite hat 10 mm · 10 mm = 100 mm²."
                }
            ],
            "schwer": [
                {
                    "id": "flaek7l4u_schwer_1",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wandle 2,5 m² in dm² um.",
                    "answers": [
                        "250 dm²",
                        "25 dm²",
                        "2 500 dm²",
                        "2,5 dm²"
                    ],
                    "correct": 0,
                    "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von m² nach dm²: mal 100 → 2,5 m² = 250 dm²."
                },
                {
                    "id": "flaek7l4u_schwer_2",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wandle 450 cm² in dm² um.",
                    "answers": [
                        "45 dm²",
                        "0,045 dm²",
                        "4,5 dm²",
                        "0,45 dm²"
                    ],
                    "correct": 2,
                    "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von cm² nach dm²: geteilt durch 100 → 450 cm² = 4,5 dm²."
                },
                {
                    "id": "flaek7l4u_schwer_3",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wandle 1,2 ha in m² um.",
                    "answers": [
                        "120 m²",
                        "120 000 m²",
                        "1 200 m²",
                        "12 000 m²"
                    ],
                    "correct": 3,
                    "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von ha nach m²: mal 10 000 → 1,2 ha = 12 000 m²."
                },
                {
                    "id": "flaek7l4u_schwer_4",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wandle 3 km² in ha um.",
                    "answers": [
                        "30 ha",
                        "300 ha",
                        "3 000 ha",
                        "3 ha"
                    ],
                    "correct": 1,
                    "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von km² nach ha: mal 100 → 3 km² = 300 ha."
                },
                {
                    "id": "flaek7l4u_schwer_5",
                    "category": "kurs_flae_k7_l4",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaecheneinheiten",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Ein Zimmer ist 4 m lang und 3 m breit. Wie viele dm² sind das?",
                    "answers": [
                        "120 dm²",
                        "1 200 dm²",
                        "12 000 dm²",
                        "1 400 dm²"
                    ],
                    "correct": 1,
                    "explanation": "A = 12 m² = 1 200 dm²."
                }
            ]
        },
        "test": [
            {
                "id": "flaek7l4_test_1",
                "category": "kurs_flae_k7_l4",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaecheneinheiten",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 8 dm² in cm² um.",
                "answers": [
                    "80 cm²",
                    "800 cm²",
                    "8 000 cm²",
                    "8 cm²"
                ],
                "correct": 1,
                "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von dm² nach cm²: mal 100 → 8 dm² = 800 cm²."
            },
            {
                "id": "flaek7l4_test_2",
                "category": "kurs_flae_k7_l4",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaecheneinheiten",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 600 cm² in dm² um.",
                "answers": [
                    "60 dm²",
                    "6 dm²",
                    "0,06 dm²",
                    "0,6 dm²"
                ],
                "correct": 1,
                "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von cm² nach dm²: geteilt durch 100 → 600 cm² = 6 dm²."
            },
            {
                "id": "flaek7l4_test_3",
                "category": "kurs_flae_k7_l4",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaecheneinheiten",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 4 m² in cm² um.",
                "answers": [
                    "400 cm²",
                    "40 000 cm²",
                    "400 000 cm²",
                    "4 000 cm²"
                ],
                "correct": 1,
                "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von m² nach cm²: mal 10 000 → 4 m² = 40 000 cm²."
            },
            {
                "id": "flaek7l4_test_4",
                "category": "kurs_flae_k7_l4",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaecheneinheiten",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 20 000 m² in ha um.",
                "answers": [
                    "200 ha",
                    "20 ha",
                    "0,2 ha",
                    "2 ha"
                ],
                "correct": 3,
                "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von m² nach ha: geteilt durch 10 000 → 20 000 m² = 2 ha."
            },
            {
                "id": "flaek7l4_test_5",
                "category": "kurs_flae_k7_l4",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaecheneinheiten",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 3 ha in a um.",
                "answers": [
                    "30 a",
                    "3 000 a",
                    "300 a",
                    "3 a"
                ],
                "correct": 2,
                "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von ha nach a: mal 100 → 3 ha = 300 a."
            },
            {
                "id": "flaek7l4_test_6",
                "category": "kurs_flae_k7_l4",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaecheneinheiten",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wandle 1,5 m² in dm² um.",
                "answers": [
                    "15 dm²",
                    "150 dm²",
                    "1 500 dm²",
                    "1,5 dm²"
                ],
                "correct": 1,
                "explanation": "Bei Flächen ist die Umrechnungszahl 100 (nicht 10!). Von m² nach dm²: mal 100 → 1,5 m² = 150 dm²."
            },
            {
                "id": "flaek7l4_test_7",
                "category": "kurs_flae_k7_l4",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaecheneinheiten",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ist größer: 1 m² oder 900 dm²?",
                "answers": [
                    "900 dm²",
                    "1 m²",
                    "Beide gleich",
                    "Kann man nicht vergleichen"
                ],
                "correct": 0,
                "explanation": "1 m² = 100 dm². 900 dm² sind also 9 m²."
            },
            {
                "id": "flaek7l4_test_8",
                "category": "kurs_flae_k7_l4",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaecheneinheiten",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele m² hat 1 Hektar?",
                "answers": [
                    "100 m²",
                    "1 000 m²",
                    "10 000 m²",
                    "1 000 000 m²"
                ],
                "correct": 2,
                "explanation": "1 ha = 100 a = 10 000 m²."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "flae_k7_l5",
        "kurs": "flaechen_k7",
        "order": 5,
        "icon": "🏠",
        "title": "Zusammengesetzte Flächen und Sachaufgaben",
        "kurz": "L-Formen, Hauswände, Zimmer und Gärten",
        "erklaerung": {
            "intro": "Viele Flächen sind aus einfachen Formen <b>zusammengesetzt</b>. Zwei Wege: <b>Zerlegen</b> (in Rechtecke, Dreiecke … und addieren) oder <b>Ergänzen</b> (großes Rechteck minus das, was fehlt). Bei Sachaufgaben: erst Skizze, dann Teilflächen, dann Einheit prüfen.",
            "merksatz": "Zerlegen und addieren – oder ergänzen und abziehen. Am Ende Einheit in m² oder cm² prüfen.",
            "beispiele": [
                "L-Form 8 m × 6 m mit Ausschnitt 3 m × 2 m: 8 · 6 − 3 · 2 = 48 − 6 = 42 m².<svg viewBox='0 0 280 167' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40.0,20.0 146.2,20.0 146.2,62.5 210.0,62.5 210.0,147.5 40.0,147.5' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><text x='125.0' y='163.5' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8 m</text><text x='34.0' y='83.8' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 m</text><text x='178.1' y='56.5' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>3 m</text><text x='214.0' y='45.2' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>2 m</text></svg>",
                "Hauswand 6 m breit, 4 m hoch, Giebel 3 m hoch: 6 · 4 + 6 · 3 : 2 = 24 + 9 = 33 m².<svg viewBox='0 0 280 190' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='60.0,79.3 188.6,79.3 188.6,165.0 60.0,165.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><polygon points='60.0,79.3 188.6,79.3 124.3,15.0' fill='rgba(245,158,11,0.18)' stroke='#f59e0b' stroke-width='2'/><line x1='124.3' y1='15.0' x2='124.3' y2='79.3' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><text x='124.3' y='181.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 m</text><text x='194.6' y='122.1' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 m</text><text x='130.3' y='51.1' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>3 m</text></svg>",
                "Wand 5 m × 2,5 m mit Fenster 1,5 m × 1 m: 12,5 − 1,5 = 11 m² zum Streichen."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "flaek7l5u_leicht_1",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wie groß ist die L-förmige Fläche (8 × 6, Ausschnitt 3 × 2)?",
                    "answers": [
                        "48 m²",
                        "54 m²",
                        "28 m²",
                        "42 m²"
                    ],
                    "correct": 3,
                    "explanation": "Großes Rechteck minus Ausschnitt: 8 · 6 − 3 · 2 = 48 − 6 = 42 m².",
                    "grafik": "<svg viewBox='0 0 280 167' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40.0,20.0 146.2,20.0 146.2,62.5 210.0,62.5 210.0,147.5 40.0,147.5' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><text x='125.0' y='163.5' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8 m</text><text x='34.0' y='83.8' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 m</text><text x='178.1' y='56.5' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>3 m</text><text x='214.0' y='45.2' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>2 m</text></svg>"
                },
                {
                    "id": "flaek7l5u_leicht_2",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Hauswand mit Giebel (Breite 6, Wand 4 hoch, Giebel 3 hoch): Wie groß ist die Fläche?",
                    "answers": [
                        "42 m²",
                        "33 m²",
                        "24 m²",
                        "9 m²"
                    ],
                    "correct": 1,
                    "explanation": "Rechteck + Dreieck: 6 · 4 + 6 · 3 : 2 = 24 + 9 = 33 m².",
                    "grafik": "<svg viewBox='0 0 280 190' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='60.0,79.3 188.6,79.3 188.6,165.0 60.0,165.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><polygon points='60.0,79.3 188.6,79.3 124.3,15.0' fill='rgba(245,158,11,0.18)' stroke='#f59e0b' stroke-width='2'/><line x1='124.3' y1='15.0' x2='124.3' y2='79.3' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><text x='124.3' y='181.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 m</text><text x='194.6' y='122.1' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 m</text><text x='130.3' y='51.1' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>3 m</text></svg>"
                },
                {
                    "id": "flaek7l5u_leicht_3",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Ein Zimmer ist 5 m lang und 4 m breit. Wie viel m² Teppich braucht man?",
                    "answers": [
                        "18 m²",
                        "20 m²",
                        "9 m²",
                        "40 m²"
                    ],
                    "correct": 1,
                    "explanation": "A = 5 · 4 = 20 m²."
                },
                {
                    "id": "flaek7l5u_leicht_4",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wie berechnet man eine L-förmige Fläche am einfachsten?",
                    "answers": [
                        "Alle Seitenlängen addieren",
                        "Nur Länge mal Länge rechnen",
                        "Nur die größte Seite nehmen",
                        "Großes Rechteck minus Ausschnitt"
                    ],
                    "correct": 3,
                    "explanation": "Ergänzen zum Rechteck und den Ausschnitt abziehen (oder in zwei Rechtecke zerlegen)."
                },
                {
                    "id": "flaek7l5u_leicht_5",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Eine Wand ist 4 m breit und 2,5 m hoch. Wie groß ist sie?",
                    "answers": [
                        "6,5 m²",
                        "13 m²",
                        "10 m²",
                        "100 m²"
                    ],
                    "correct": 2,
                    "explanation": "A = 4 · 2,5 = 10 m²."
                }
            ],
            "mittel": [
                {
                    "id": "flaek7l5u_mittel_1",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie groß ist die L-förmige Fläche (10 × 7, Ausschnitt 4 × 3)?",
                    "answers": [
                        "58 m²",
                        "70 m²",
                        "82 m²",
                        "34 m²"
                    ],
                    "correct": 0,
                    "explanation": "Großes Rechteck minus Ausschnitt: 10 · 7 − 4 · 3 = 70 − 12 = 58 m².",
                    "grafik": "<svg viewBox='0 0 280 159' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40.0,20.0 142.0,20.0 142.0,71.0 210.0,71.0 210.0,139.0 40.0,139.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><text x='125.0' y='155.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 m</text><text x='34.0' y='79.5' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7 m</text><text x='176.0' y='65.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>4 m</text><text x='214.0' y='49.5' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>3 m</text></svg>"
                },
                {
                    "id": "flaek7l5u_mittel_2",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Hauswand mit Giebel (Breite 8, Wand 5 hoch, Giebel 4 hoch): Wie groß ist die Fläche?",
                    "answers": [
                        "72 m²",
                        "40 m²",
                        "16 m²",
                        "56 m²"
                    ],
                    "correct": 3,
                    "explanation": "Rechteck + Dreieck: 8 · 5 + 8 · 4 : 2 = 40 + 16 = 56 m².",
                    "grafik": "<svg viewBox='0 0 280 190' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='60.0,81.7 193.3,81.7 193.3,165.0 60.0,165.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><polygon points='60.0,81.7 193.3,81.7 126.7,15.0' fill='rgba(245,158,11,0.18)' stroke='#f59e0b' stroke-width='2'/><line x1='126.7' y1='15.0' x2='126.7' y2='81.7' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><text x='126.7' y='181.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8 m</text><text x='199.3' y='123.3' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 m</text><text x='132.7' y='52.3' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>4 m</text></svg>"
                },
                {
                    "id": "flaek7l5u_mittel_3",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Eine Wand (5 m × 2,5 m) hat ein Fenster (1,5 m × 1 m). Wie viel m² müssen gestrichen werden?",
                    "answers": [
                        "12,5 m²",
                        "11 m²",
                        "14 m²",
                        "10 m²"
                    ],
                    "correct": 1,
                    "explanation": "12,5 m² − 1,5 m² = 11 m²."
                },
                {
                    "id": "flaek7l5u_mittel_4",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ein Garten (20 m × 15 m) hat in der Mitte ein Beet (4 m × 3 m). Wie viel m² Rasen bleiben?",
                    "answers": [
                        "300 m²",
                        "288 m²",
                        "312 m²",
                        "58 m²"
                    ],
                    "correct": 1,
                    "explanation": "300 m² − 12 m² = 288 m²."
                },
                {
                    "id": "flaek7l5u_mittel_5",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Fliesen: Ein Bad ist 3 m × 2 m groß. Eine Fliese ist 0,5 m × 0,5 m. Wie viele Fliesen braucht man?",
                    "answers": [
                        "12",
                        "6",
                        "48",
                        "24"
                    ],
                    "correct": 3,
                    "explanation": "Bad: 6 m². Fliese: 0,25 m². 6 : 0,25 = 24."
                }
            ],
            "schwer": [
                {
                    "id": "flaek7l5u_schwer_1",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wie groß ist die L-förmige Fläche (12 × 9, Ausschnitt 5 × 4)?",
                    "answers": [
                        "108 m²",
                        "88 m²",
                        "128 m²",
                        "42 m²"
                    ],
                    "correct": 1,
                    "explanation": "Großes Rechteck minus Ausschnitt: 12 · 9 − 5 · 4 = 108 − 20 = 88 m².",
                    "grafik": "<svg viewBox='0 0 280 167' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40.0,20.0 139.2,20.0 139.2,76.7 210.0,76.7 210.0,147.5 40.0,147.5' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><text x='125.0' y='163.5' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>12 m</text><text x='34.0' y='83.8' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9 m</text><text x='174.6' y='70.7' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>5 m</text><text x='214.0' y='52.3' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>4 m</text></svg>"
                },
                {
                    "id": "flaek7l5u_schwer_2",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Hauswand mit Giebel (Breite 10, Wand 6 hoch, Giebel 5 hoch): Wie groß ist die Fläche?",
                    "answers": [
                        "110 m²",
                        "60 m²",
                        "85 m²",
                        "25 m²"
                    ],
                    "correct": 2,
                    "explanation": "Rechteck + Dreieck: 10 · 6 + 10 · 5 : 2 = 60 + 25 = 85 m².",
                    "grafik": "<svg viewBox='0 0 280 190' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='60.0,83.2 196.4,83.2 196.4,165.0 60.0,165.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><polygon points='60.0,83.2 196.4,83.2 128.2,15.0' fill='rgba(245,158,11,0.18)' stroke='#f59e0b' stroke-width='2'/><line x1='128.2' y1='15.0' x2='128.2' y2='83.2' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><text x='128.2' y='181.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 m</text><text x='202.4' y='124.1' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 m</text><text x='134.2' y='53.1' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>5 m</text></svg>"
                },
                {
                    "id": "flaek7l5u_schwer_3",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Ein Grundstück ist ein Trapez: a = 40 m, c = 30 m, h = 25 m. Wie viel Ar sind das?",
                    "answers": [
                        "875 a",
                        "8,75 a",
                        "17,5 a",
                        "87,5 a"
                    ],
                    "correct": 1,
                    "explanation": "A = (40 + 30) : 2 · 25 = 875 m² = 8,75 a."
                },
                {
                    "id": "flaek7l5u_schwer_4",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Eine Wand (6 m × 3 m) bekommt Farbe. 1 Liter reicht für 6 m². Wie viele Liter braucht man für 2 Anstriche?",
                    "answers": [
                        "6 l",
                        "3 l",
                        "18 l",
                        "12 l"
                    ],
                    "correct": 0,
                    "explanation": "18 m² · 2 = 36 m². 36 : 6 = 6 Liter."
                },
                {
                    "id": "flaek7l5u_schwer_5",
                    "category": "kurs_flae_k7_l5",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "flaechen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Ein Rasen (15 m × 8 m) soll Rollrasen bekommen. 1 m² kostet 4 €. Was kostet alles?",
                    "answers": [
                        "120 €",
                        "92 €",
                        "184 €",
                        "480 €"
                    ],
                    "correct": 3,
                    "explanation": "15 · 8 = 120 m². 120 · 4 € = 480 €."
                }
            ]
        },
        "test": [
            {
                "id": "flaek7l5_test_1",
                "category": "kurs_flae_k7_l5",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie groß ist die L-förmige Fläche (9 × 7, Ausschnitt 3 × 3)?",
                "answers": [
                    "63 m²",
                    "72 m²",
                    "54 m²",
                    "32 m²"
                ],
                "correct": 2,
                "explanation": "Großes Rechteck minus Ausschnitt: 9 · 7 − 3 · 3 = 63 − 9 = 54 m².",
                "grafik": "<svg viewBox='0 0 280 172' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40.0,20.0 153.3,20.0 153.3,76.7 210.0,76.7 210.0,152.2 40.0,152.2' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><text x='125.0' y='168.2' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9 m</text><text x='34.0' y='86.1' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7 m</text><text x='181.7' y='70.7' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>3 m</text><text x='214.0' y='52.3' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>3 m</text></svg>"
            },
            {
                "id": "flaek7l5_test_2",
                "category": "kurs_flae_k7_l5",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Hauswand mit Giebel (Breite 7, Wand 4 hoch, Giebel 2 hoch): Wie groß ist die Fläche?",
                "answers": [
                    "42 m²",
                    "28 m²",
                    "35 m²",
                    "7 m²"
                ],
                "correct": 2,
                "explanation": "Rechteck + Dreieck: 7 · 4 + 7 · 2 : 2 = 28 + 7 = 35 m².",
                "grafik": "<svg viewBox='0 0 280 168' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='60.0,57.9 210.0,57.9 210.0,143.6 60.0,143.6' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><polygon points='60.0,57.9 210.0,57.9 135.0,15.0' fill='rgba(245,158,11,0.18)' stroke='#f59e0b' stroke-width='2'/><line x1='135.0' y1='15.0' x2='135.0' y2='57.9' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><text x='135.0' y='159.6' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7 m</text><text x='216.0' y='100.7' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 m</text><text x='141.0' y='40.4' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>2 m</text></svg>"
            },
            {
                "id": "flaek7l5_test_3",
                "category": "kurs_flae_k7_l5",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie groß ist die L-förmige Fläche (6 × 5, Ausschnitt 2 × 2)?",
                "answers": [
                    "30 m²",
                    "34 m²",
                    "26 m²",
                    "22 m²"
                ],
                "correct": 2,
                "explanation": "Großes Rechteck minus Ausschnitt: 6 · 5 − 2 · 2 = 30 − 4 = 26 m².",
                "grafik": "<svg viewBox='0 0 280 181' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40.0,20.0 153.3,20.0 153.3,76.7 210.0,76.7 210.0,161.7 40.0,161.7' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><text x='125.0' y='177.7' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 m</text><text x='34.0' y='90.8' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 m</text><text x='181.7' y='70.7' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>2 m</text><text x='214.0' y='52.3' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>2 m</text></svg>"
            },
            {
                "id": "flaek7l5_test_4",
                "category": "kurs_flae_k7_l5",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Zimmer (4,5 m × 4 m) bekommt Laminat. Wie viel m² sind das?",
                "answers": [
                    "17 m²",
                    "8,5 m²",
                    "18 m²",
                    "16 m²"
                ],
                "correct": 2,
                "explanation": "4,5 · 4 = 18 m²."
            },
            {
                "id": "flaek7l5_test_5",
                "category": "kurs_flae_k7_l5",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Eine Tür (2 m × 1 m) ist in einer Wand (4 m × 2,5 m). Wie groß ist die Wand ohne Tür?",
                "answers": [
                    "10 m²",
                    "8 m²",
                    "12 m²",
                    "7 m²"
                ],
                "correct": 1,
                "explanation": "10 m² − 2 m² = 8 m²."
            },
            {
                "id": "flaek7l5_test_6",
                "category": "kurs_flae_k7_l5",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Spielplatz ist 30 m × 20 m groß. Wie viel Ar sind das?",
                "answers": [
                    "600 a",
                    "60 a",
                    "6 a",
                    "0,6 a"
                ],
                "correct": 2,
                "explanation": "600 m² = 6 a (1 a = 100 m²)."
            },
            {
                "id": "flaek7l5_test_7",
                "category": "kurs_flae_k7_l5",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Beet ist ein Dreieck (g = 6 m, h = 4 m). 1 m² braucht 5 Pflanzen. Wie viele Pflanzen?",
                "answers": [
                    "120",
                    "50",
                    "24",
                    "60"
                ],
                "correct": 3,
                "explanation": "A = 6 · 4 : 2 = 12 m². 12 · 5 = 60 Pflanzen."
            },
            {
                "id": "flaek7l5_test_8",
                "category": "kurs_flae_k7_l5",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "flaechen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Platten (1 m × 0,5 m) braucht man für eine Terrasse 5 m × 4 m?",
                "answers": [
                    "20",
                    "10",
                    "45",
                    "40"
                ],
                "correct": 3,
                "explanation": "20 m² : 0,5 m² = 40 Platten."
            }
        ],
        "bestehenAb": 0.8
    }
];
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
    }
})();
