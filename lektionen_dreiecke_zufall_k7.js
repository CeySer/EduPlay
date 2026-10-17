// Dreiecke konstruieren / Häufigkeiten und Zufall - Klasse 7 Mathe
(function () {
    const extraKurse = [
    {
        "id": "dreiecke_k7",
        "title": "Dreiecke konstruieren",
        "icon": "📐",
        "grade": 7,
        "subject": "mathe",
        "beschreibung": "Dreiecksarten, Dreiecksungleichung und die Kongruenzsätze SSS, SWS, WSW und SsW."
    },
    {
        "id": "haeufigkeit_k7",
        "title": "Häufigkeiten und Zufall",
        "icon": "🎲",
        "grade": 7,
        "subject": "mathe",
        "beschreibung": "Absolute und relative Häufigkeit, Diagramme und Laplace-Wahrscheinlichkeit."
    }
];
    const extraLektionen = [
    {
        "id": "dreieck_k7_l1",
        "kurs": "dreiecke_k7",
        "order": 1,
        "icon": "🔺",
        "title": "Dreiecksarten und Dreiecksungleichung",
        "kurz": "Spitz, recht, stumpf – und wann es überhaupt passt",
        "erklaerung": {
            "intro": "Dreiecke ordnest du <b>nach Winkeln</b>: <b>spitzwinklig</b> (alle Winkel unter 90°), <b>rechtwinklig</b> (ein Winkel genau 90°) oder <b>stumpfwinklig</b> (ein Winkel über 90°). <b>Nach Seiten</b> gibt es <b>gleichschenklige</b> (zwei gleich lange Seiten) und <b>gleichseitige</b> Dreiecke (alle drei gleich, jeder Winkel 60°). Die Innenwinkel ergeben zusammen immer 180°. Die <b>Dreiecksungleichung</b> sagt dir, ob drei Längen überhaupt ein Dreieck ergeben.",
            "merksatz": "Ein Dreieck gibt es nur, wenn die beiden kürzeren Seiten zusammen länger sind als die längste Seite.",
            "beispiele": [
                "Die drei Arten nach Winkeln:<svg viewBox='0 0 348 124' style='width:100%;max-width:348px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='8.0,92.0 98.0,92.0 47.6,27.2' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2' stroke-linejoin='round'/><text x='53.0' y='116.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>spitzwinklig</text><polygon points='122.0,92.0 212.0,92.0 122.0,27.2' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2' stroke-linejoin='round'/><path d='M131.0 92.0L131.0 83.0L122.0 83.0' fill='none' stroke='#e5e7eb' stroke-width='1.5'/><text x='167.0' y='116.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>rechtwinklig</text><polygon points='228.0,92.0 318.0,92.0 339.6,52.4' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2' stroke-linejoin='round'/><text x='273.0' y='116.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>stumpfwinklig</text><text x='160.0' y='18.0' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>alle Winkel &lt; 90°  ·  ein Winkel = 90°  ·  ein Winkel &gt; 90°</text></svg>",
                "3 cm, 4 cm und 8 cm: 3 + 4 = 7 ist kleiner als 8. Die kurzen Seiten erreichen sich nicht – kein Dreieck.<svg viewBox='0 0 320 150' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='132' x2='280' y2='132' stroke='#38bdf8' stroke-width='3'/><path d='M130.0 132.0A90 90 0 0 0 47.8 42.3' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='5,4'/><path d='M160.0 132.0A120 120 0 0 1 269.5 12.5' fill='none' stroke='#a78bfa' stroke-width='1.5' stroke-dasharray='5,4'/><line x1='40' y1='132' x2='91.6' y2='58.3' stroke='#f59e0b' stroke-width='3.5' stroke-linecap='round'/><line x1='280' y1='132' x2='211.2' y2='33.7' stroke='#a78bfa' stroke-width='3.5' stroke-linecap='round'/><line x1='130.0' y1='132' x2='160.0' y2='132' stroke='#f43f5e' stroke-width='5'/><text x='43.8' y='95.1' text-anchor='middle' font-size='12' fill='#f59e0b' font-family='sans-serif'>3 cm</text><text x='269.6' y='82.9' text-anchor='middle' font-size='12' fill='#a78bfa' font-family='sans-serif'>4 cm</text><text x='145.0' y='118.0' text-anchor='middle' font-size='11' font-weight='700' fill='#f43f5e' font-family='sans-serif'>Lücke</text><text x='220.0' y='150.0' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>8 cm</text><text x='28.0' y='136.0' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='292.0' y='136.0' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text></svg>",
                "Der <b>größte Winkel</b> liegt immer der <b>längsten Seite</b> gegenüber, der kleinste Winkel der kürzesten Seite. Hier: c = 9 cm ist am längsten, also ist γ am größten.<svg viewBox='0 0 300 170' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,136.6 270.0,136.6 185.6,33.4' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2' stroke-linejoin='round'/><line x1='30.0' y1='136.6' x2='270.0' y2='136.6' stroke='#f59e0b' stroke-width='4' stroke-linecap='round'/><path d='M185.6 33.4L170.6 43.4A18 18 0 0 0 197.0 47.3Z' fill='rgba(245,158,11,0.6)' stroke='#f59e0b' stroke-width='1.5'/><text x='181.1' y='67.1' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>γ</text><text x='244.1' y='75.7' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>5 cm</text><text x='97.4' y='73.4' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>7 cm</text><text x='150.0' y='153.6' text-anchor='middle' font-size='12' fill='#f59e0b' font-family='sans-serif'>9 cm</text><text x='17.4' y='143.9' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='282.4' y='144.5' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text><text x='189.8' y='25.1' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>C</text></svg>"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "dreieckk7l1u_leicht_1",
                    "category": "kurs_dreieck_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Dreiecksart nach Winkeln siehst du hier?",
                    "answers": [
                        "rechtwinklig",
                        "spitzwinklig",
                        "stumpfwinklig",
                        "gleichseitig"
                    ],
                    "correct": 0,
                    "explanation": "Das Kästchen am Winkel zeigt einen rechten Winkel (90°). Ein Dreieck mit genau einem rechten Winkel heißt rechtwinklig.",
                    "grafik": "<svg viewBox='0 0 260 170' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='46.2,142.0 213.8,142.0 46.2,28.0' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2' stroke-linejoin='round'/><path d='M58.2 142.0L58.2 130.0L46.2 130.0' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='35.4' y='153.3' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='226.1' y='150.2' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text><text x='38.5' y='21.5' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>C</text></svg>"
                },
                {
                    "id": "dreieckk7l1u_leicht_2",
                    "category": "kurs_dreieck_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ein Winkel in diesem Dreieck ist 120° groß. Wie heißt das Dreieck?",
                    "answers": [
                        "stumpfwinklig",
                        "spitzwinklig",
                        "rechtwinklig",
                        "überstumpf"
                    ],
                    "correct": 0,
                    "explanation": "120° ist größer als 90°, also ein stumpfer Winkel. Ein Dreieck mit einem stumpfen Winkel heißt stumpfwinklig.",
                    "grafik": "<svg viewBox='0 0 300 150' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='86.7,122.0 267.6,122.0 32.4,28.0' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2' stroke-linejoin='round'/><path d='M104.7 122.0A18 18 0 0 0 77.7 106.4' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='101.7' y='100.0' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>120°</text><text x='76.2' y='133.7' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='280.3' y='128.9' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text><text x='21.5' y='24.9' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>C</text></svg>"
                },
                {
                    "id": "dreieckk7l1u_leicht_3",
                    "category": "kurs_dreieck_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Die Striche zeigen gleich lange Seiten. Wie heißt das Dreieck?",
                    "answers": [
                        "gleichschenklig",
                        "gleichseitig",
                        "rechtwinklig",
                        "unregelmäßig"
                    ],
                    "correct": 0,
                    "explanation": "Zwei Seiten sind gleich lang, die dritte ist kürzer. So ein Dreieck heißt gleichschenklig. Gleichseitig wäre es nur bei drei gleichen Seiten.",
                    "grafik": "<svg viewBox='0 0 240 180' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='79.3,154.0 160.7,154.0 120.0,26.0' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2' stroke-linejoin='round'/><line x1='134.6' y1='91.8' x2='146.1' y2='88.2' stroke='#e5e7eb' stroke-width='2'/><line x1='93.9' y1='88.2' x2='105.4' y2='91.8' stroke='#e5e7eb' stroke-width='2'/></svg>"
                },
                {
                    "id": "dreieckk7l1u_leicht_4",
                    "category": "kurs_dreieck_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie groß ist jeder Winkel in einem gleichseitigen Dreieck?",
                    "answers": [
                        "60°",
                        "90°",
                        "45°",
                        "180°"
                    ],
                    "correct": 0,
                    "explanation": "Alle drei Winkel sind gleich groß und ergeben zusammen 180°. Also ist jeder Winkel 180° : 3 = 60°."
                }
            ],
            "mittel": [
                {
                    "id": "dreieckk7l1u_mittel_1",
                    "category": "kurs_dreieck_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Kannst du aus Stäben mit 2 cm, 6 cm und 9 cm ein Dreieck legen?",
                    "answers": [
                        "Nein, 2 + 6 < 9",
                        "Ja, 2 + 9 > 6",
                        "Ja, 6 + 9 > 2",
                        "Nein, 9 ist zu kurz"
                    ],
                    "correct": 0,
                    "explanation": "Die beiden kurzen Seiten müssen zusammen länger sein als die längste: 2 cm + 6 cm = 8 cm < 9 cm. Also gibt es kein Dreieck."
                },
                {
                    "id": "dreieckk7l1u_mittel_2",
                    "category": "kurs_dreieck_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Mit welchen drei Längen kannst du ein Dreieck zeichnen?",
                    "answers": [
                        "4 cm, 5 cm, 7 cm",
                        "2 cm, 3 cm, 5 cm",
                        "1 cm, 2 cm, 6 cm",
                        "3 cm, 3 cm, 7 cm"
                    ],
                    "correct": 0,
                    "explanation": "Nur bei 4, 5, 7 gilt: 4 + 5 = 9 > 7. Bei 2, 3, 5 ist 2 + 3 = 5 nicht größer als 5 – die Stäbe liegen nur flach aufeinander."
                },
                {
                    "id": "dreieckk7l1u_mittel_3",
                    "category": "kurs_dreieck_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Die Seiten sind 8 cm, 5 cm und 6 cm lang. Welcher Winkel ist am größten?",
                    "answers": [
                        "α",
                        "β",
                        "γ",
                        "alle gleich"
                    ],
                    "correct": 0,
                    "explanation": "Der größte Winkel liegt der längsten Seite gegenüber. Die längste Seite ist a = 8 cm (BC), ihr gegenüber liegt α.",
                    "grafik": "<svg viewBox='0 0 300 170' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='86.7,140.0 218.8,140.0 81.2,30.0' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2' stroke-linejoin='round'/><path d='M104.7 140.0A18 18 0 0 0 85.8 122.0' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='107.3' y='122.3' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>α</text><path d='M204.8 128.8A18 18 0 0 0 200.8 140.0' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='185.2' y='132.2' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>β</text><path d='M82.1 48.0A18 18 0 0 0 95.2 41.2' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='95.2' y='61.4' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>γ</text><text x='162.2' y='73.8' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>8 cm</text><text x='60.6' y='90.2' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>5 cm</text><text x='152.8' y='157.0' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>6 cm</text><text x='76.9' y='152.5' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='230.9' y='148.9' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text><text x='74.1' y='23.1' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>C</text></svg>"
                },
                {
                    "id": "dreieckk7l1u_mittel_4",
                    "category": "kurs_dreieck_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Kann ein Dreieck zwei rechte Winkel haben?",
                    "answers": [
                        "Nein, 90° + 90° ist schon 180°",
                        "Ja, so wie beim Rechteck",
                        "Ja, wenn γ = 0° ist",
                        "Nur wenn es gleichseitig ist"
                    ],
                    "correct": 0,
                    "explanation": "Zwei rechte Winkel ergeben schon 180°. Für den dritten Winkel bliebe 0° – das ist kein Dreieck mehr."
                }
            ],
            "schwer": [
                {
                    "id": "dreieckk7l1u_schwer_1",
                    "category": "kurs_dreieck_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Zwei Seiten sind 4 cm und 9 cm lang. Welche Länge kann die dritte Seite haben?",
                    "answers": [
                        "7 cm",
                        "5 cm",
                        "13 cm",
                        "4 cm"
                    ],
                    "correct": 0,
                    "explanation": "Die dritte Seite muss länger als 9 − 4 = 5 cm und kürzer als 9 + 4 = 13 cm sein. Nur 7 cm liegt dazwischen."
                },
                {
                    "id": "dreieckk7l1u_schwer_2",
                    "category": "kurs_dreieck_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Gleichschenkliges Dreieck: Beide Basiswinkel sind 70°. Wie groß ist der Winkel oben?",
                    "answers": [
                        "40°",
                        "70°",
                        "110°",
                        "20°"
                    ],
                    "correct": 0,
                    "explanation": "Die Winkelsumme ist 180°. 180° − 70° − 70° = 40°.",
                    "grafik": "<svg viewBox='0 0 240 190' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='71.2,162.0 168.8,162.0 120.0,28.0' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2' stroke-linejoin='round'/><path d='M89.2 162.0A18 18 0 0 0 77.4 145.1' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='95.8' y='148.8' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>70°</text><path d='M162.6 145.1A18 18 0 0 0 150.8 162.0' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='144.2' y='148.8' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>70°</text><path d='M113.8 44.9A18 18 0 0 0 126.2 44.9' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='120.0' y='67.0' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>?</text><line x1='138.7' y1='97.1' x2='150.0' y2='92.9' stroke='#e5e7eb' stroke-width='2'/><line x1='90.0' y1='92.9' x2='101.3' y2='97.1' stroke='#e5e7eb' stroke-width='2'/></svg>"
                },
                {
                    "id": "dreieckk7l1u_schwer_3",
                    "category": "kurs_dreieck_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Dreieck hat die Winkel 35° und 55°. Welche Art ist es?",
                    "answers": [
                        "rechtwinklig",
                        "spitzwinklig",
                        "stumpfwinklig",
                        "gleichschenklig"
                    ],
                    "correct": 0,
                    "explanation": "Der dritte Winkel ist 180° − 35° − 55° = 90°. Also ist das Dreieck rechtwinklig."
                },
                {
                    "id": "dreieckk7l1u_schwer_4",
                    "category": "kurs_dreieck_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Mia hat Stäbe mit 6 cm, 6 cm und 12 cm. Was entsteht?",
                    "answers": [
                        "kein Dreieck, nur eine Strecke",
                        "ein gleichschenkliges Dreieck",
                        "ein rechtwinkliges Dreieck",
                        "ein gleichseitiges Dreieck"
                    ],
                    "correct": 0,
                    "explanation": "6 cm + 6 cm = 12 cm ist nicht größer als 12 cm. Die beiden Stäbe liegen genau auf dem langen Stab – es entsteht keine Spitze."
                }
            ]
        },
        "test": [
            {
                "id": "dreieckk7l1_test_1",
                "category": "kurs_dreieck_k7_l1",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "dreiecke",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Dreiecksart nach Winkeln ist das?",
                "answers": [
                    "spitzwinklig",
                    "rechtwinklig",
                    "stumpfwinklig",
                    "gleichseitig"
                ],
                "correct": 0,
                "explanation": "Alle drei Winkel (50°, 70°, 60°) sind kleiner als 90°. Darum ist das Dreieck spitzwinklig.",
                "grafik": "<svg viewBox='0 0 280 180' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='65.4,152.0 214.6,152.0 169.5,28.0' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2' stroke-linejoin='round'/><path d='M83.4 152.0A18 18 0 0 0 77.0 138.2' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='92.6' y='143.3' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>50°</text><path d='M208.4 135.1A18 18 0 0 0 196.6 152.0' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='190.0' y='138.8' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>70°</text><path d='M157.9 41.8A18 18 0 0 0 175.6 44.9' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='164.2' y='61.5' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>60°</text></svg>"
            },
            {
                "id": "dreieckk7l1_test_2",
                "category": "kurs_dreieck_k7_l1",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "dreiecke",
                "difficulty": "mittel",
                "points": 10,
                "question": "Mit welchen drei Längen gibt es KEIN Dreieck?",
                "answers": [
                    "2 cm, 5 cm, 8 cm",
                    "5 cm, 5 cm, 8 cm",
                    "4 cm, 6 cm, 8 cm",
                    "6 cm, 7 cm, 8 cm"
                ],
                "correct": 0,
                "explanation": "2 cm + 5 cm = 7 cm ist kürzer als 8 cm. Die beiden kurzen Seiten treffen sich nicht."
            },
            {
                "id": "dreieckk7l1_test_3",
                "category": "kurs_dreieck_k7_l1",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "dreiecke",
                "difficulty": "mittel",
                "points": 10,
                "question": "An welcher Ecke ist der Winkel am größten?",
                "answers": [
                    "C",
                    "A",
                    "B",
                    "überall gleich"
                ],
                "correct": 0,
                "explanation": "Die längste Seite ist AB mit 8 cm. Der größte Winkel liegt ihr gegenüber – an der Ecke C.",
                "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,123.6 270.0,123.6 187.5,36.4' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2' stroke-linejoin='round'/><text x='243.7' y='69.9' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>4 cm</text><text x='100.0' y='68.2' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>6 cm</text><text x='150.0' y='140.6' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>8 cm</text><text x='17.3' y='130.4' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='282.5' y='131.0' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text><text x='192.6' y='28.5' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>C</text></svg>"
            },
            {
                "id": "dreieckk7l1_test_4",
                "category": "kurs_dreieck_k7_l1",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "dreiecke",
                "difficulty": "mittel",
                "points": 10,
                "question": "Gleichschenkliges Dreieck mit 40° an der Spitze. Wie groß ist ein Basiswinkel?",
                "answers": [
                    "70°",
                    "140°",
                    "40°",
                    "50°"
                ],
                "correct": 0,
                "explanation": "Für beide Basiswinkel bleiben 180° − 40° = 140°. Jeder ist halb so groß: 140° : 2 = 70°."
            },
            {
                "id": "dreieckk7l1_test_5",
                "category": "kurs_dreieck_k7_l1",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "dreiecke",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Winkel im Dreieck ist 100°. Wie viele stumpfe Winkel hat es?",
                "answers": [
                    "einen",
                    "zwei",
                    "drei",
                    "keinen"
                ],
                "correct": 0,
                "explanation": "Für die anderen beiden Winkel bleiben zusammen nur 80°. Also sind sie spitz – es gibt genau einen stumpfen Winkel."
            },
            {
                "id": "dreieckk7l1_test_6",
                "category": "kurs_dreieck_k7_l1",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "dreiecke",
                "difficulty": "mittel",
                "points": 10,
                "question": "Zwei Seiten sind 5 cm und 8 cm lang. Welche dritte Seite ist NICHT möglich?",
                "answers": [
                    "13 cm",
                    "4 cm",
                    "10 cm",
                    "12 cm"
                ],
                "correct": 0,
                "explanation": "Die dritte Seite muss kürzer als 5 + 8 = 13 cm sein. Bei genau 13 cm liegen die Seiten flach – es gibt kein Dreieck."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "kongruenz_k7_l2",
        "kurs": "dreiecke_k7",
        "order": 2,
        "icon": "📐",
        "title": "Kongruenzsätze",
        "kurz": "SSS, SWS, WSW, SsW – wann ein Dreieck eindeutig ist",
        "erklaerung": {
            "intro": "Zwei Dreiecke sind <b>kongruent</b> (deckungsgleich), wenn sie genau aufeinanderpassen. Ein Dreieck ist <b>eindeutig</b> konstruierbar, wenn du drei passende Stücke kennst: <b>SSS</b> (drei Seiten), <b>SWS</b> (zwei Seiten und der Winkel dazwischen), <b>WSW</b> (eine Seite und zwei Winkel) oder <b>SsW</b> (zwei Seiten und der Winkel gegenüber der <b>längeren</b> Seite). Drei Winkel (<b>WWW</b>) reichen nicht. Vor jeder Konstruktion zeichnest du eine <b>Planfigur</b>.",
            "merksatz": "SSS, SWS, WSW und SsW legen ein Dreieck eindeutig fest – drei Winkel (WWW) nicht.",
            "beispiele": [
                "Planfigur in Standardlage: A unten links, B unten rechts, C oben. Die Seite gegenüber von A heißt a, der Winkel an A heißt α.<svg viewBox='0 0 300 180' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='48.2,146.0 251.8,146.0 180.5,34.0' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2' stroke-linejoin='round'/><path d='M66.2 146.0A18 18 0 0 0 61.9 134.4' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='80.9' y='138.0' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>α</text><path d='M242.2 130.8A18 18 0 0 0 233.8 146.0' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='225.5' y='135.6' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>β</text><path d='M166.8 45.6A18 18 0 0 0 190.2 49.2' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='176.0' y='67.7' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>γ</text><text x='229.0' y='85.8' text-anchor='middle' font-size='12' font-style='italic' fill='#e5e7eb' font-family='sans-serif'>a</text><text x='104.9' y='82.8' text-anchor='middle' font-size='12' font-style='italic' fill='#e5e7eb' font-family='sans-serif'>b</text><text x='150.0' y='163.0' text-anchor='middle' font-size='12' font-style='italic' fill='#e5e7eb' font-family='sans-serif'>c</text><text x='35.8' y='154.1' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='263.9' y='154.9' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text><text x='184.0' y='25.5' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>C</text></svg>",
                "SSS mit a = 4 cm, b = 5 cm, c = 6 cm: Strecke c zeichnen, Kreis um A mit r = b, Kreis um B mit r = a. Der Schnittpunkt ist C.<svg viewBox='0 0 320 176' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='150' x2='256' y2='150' stroke='#38bdf8' stroke-width='3'/><path d='M196.8 61.6A180 180 0 0 0 147.3 5.5' fill='none' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5,4'/><path d='M225.5 9.3A144 144 0 0 0 136.3 70.0' fill='none' stroke='#a78bfa' stroke-width='2' stroke-dasharray='5,4'/><line x1='40' y1='150' x2='175.0' y2='30.9' stroke='#f59e0b' stroke-width='2'/><line x1='256' y1='150' x2='175.0' y2='30.9' stroke='#a78bfa' stroke-width='2'/><circle cx='175.0' cy='30.9' r='3.5' fill='#e5e7eb'/><text x='175.0' y='54.9' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>C</text><text x='148.0' y='167.0' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>c = 6 cm</text><text x='57.5' y='94.5' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>r = b = 5 cm</text><text x='273.5' y='112.5' text-anchor='middle' font-size='11' fill='#a78bfa' font-family='sans-serif'>r = a = 4 cm</text><text x='28.0' y='154.0' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='268.0' y='154.0' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text></svg>",
                "SWS mit c = 6 cm, α = 50°, b = 4 cm: ① c zeichnen ② in A α antragen ③ auf dem Schenkel b abtragen → C ④ C mit B verbinden.<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='140' x2='258' y2='140' stroke='#38bdf8' stroke-width='3'/><line x1='30' y1='140' x2='161.9' y2='-17.2' stroke='#94a3b8' stroke-width='1.5' stroke-dasharray='5,4'/><line x1='30' y1='140' x2='127.7' y2='23.6' stroke='#f59e0b' stroke-width='3'/><line x1='127.7' y1='23.6' x2='258' y2='140' stroke='#10b981' stroke-width='2' stroke-dasharray='6,4'/><path d='M54 140 A24 24 0 0 0 45.4 121.6' fill='none' stroke='#a78bfa' stroke-width='2'/><text x='70.0' y='130.0' text-anchor='middle' font-size='11' fill='#a78bfa' font-family='sans-serif'>50°</text><text x='144.0' y='157.0' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>① c = 6 cm</text><text x='38.9' y='81.8' text-anchor='middle' font-size='12' fill='#f59e0b' font-family='sans-serif'>③ b = 4 cm</text><text x='96.0' y='100.0' text-anchor='middle' font-size='12' fill='#a78bfa' font-family='sans-serif'>②</text><text x='113.7' y='21.6' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>C</text><text x='214.9' y='77.8' text-anchor='middle' font-size='12' fill='#10b981' font-family='sans-serif'>④</text><text x='18.0' y='144.0' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='270.0' y='144.0' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text></svg>",
                "WWW reicht nicht: Beide Dreiecke haben die Winkel 50°, 70° und 60° – sind aber verschieden groß.<svg viewBox='0 0 300 150' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='12.0,140.0 85.4,140.0 63.2,79.0' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2' stroke-linejoin='round'/><text x='24.6' y='138.1' text-anchor='middle' font-size='10' fill='#e5e7eb' font-family='sans-serif'>50°</text><text x='74.0' y='136.0' text-anchor='middle' font-size='10' fill='#e5e7eb' font-family='sans-serif'>70°</text><text x='60.8' y='96.7' text-anchor='middle' font-size='10' fill='#e5e7eb' font-family='sans-serif'>60°</text><polygon points='112.0,140.0 258.8,140.0 214.4,18.0' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2' stroke-linejoin='round'/><text x='135.6' y='133.0' text-anchor='middle' font-size='10' fill='#e5e7eb' font-family='sans-serif'>50°</text><text x='237.5' y='129.1' text-anchor='middle' font-size='10' fill='#e5e7eb' font-family='sans-serif'>70°</text><text x='209.9' y='47.6' text-anchor='middle' font-size='10' fill='#e5e7eb' font-family='sans-serif'>60°</text></svg>"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "kongruenzk7l2u_leicht_1",
                    "category": "kurs_kongruenz_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was bedeutet „kongruent“ bei zwei Dreiecken?",
                    "answers": [
                        "deckungsgleich",
                        "ähnlich",
                        "gleichseitig",
                        "gleich hoch"
                    ],
                    "correct": 0,
                    "explanation": "Kongruente Dreiecke passen genau aufeinander, wenn man eins ausschneidet und darauflegt. Sie sind deckungsgleich."
                },
                {
                    "id": "kongruenzk7l2u_leicht_2",
                    "category": "kurs_kongruenz_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie heißt die markierte Seite in der Planfigur?",
                    "answers": [
                        "a",
                        "c",
                        "b",
                        "α"
                    ],
                    "correct": 0,
                    "explanation": "Die Seite gegenüber der Ecke A heißt a. Sie verbindet B und C.",
                    "grafik": "<svg viewBox='0 0 300 180' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='48.2,146.0 251.8,146.0 180.5,34.0' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2' stroke-linejoin='round'/><line x1='251.8' y1='146.0' x2='180.5' y2='34.0' stroke='#f59e0b' stroke-width='4' stroke-linecap='round'/><text x='229.0' y='85.8' text-anchor='middle' font-size='12' font-style='italic' fill='#f59e0b' font-family='sans-serif'>?</text><text x='35.8' y='154.1' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='263.9' y='154.9' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text><text x='184.0' y='25.5' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>C</text></svg>"
                },
                {
                    "id": "kongruenzk7l2u_leicht_3",
                    "category": "kurs_kongruenz_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie heißt der markierte Winkel?",
                    "answers": [
                        "β",
                        "α",
                        "γ",
                        "b"
                    ],
                    "correct": 0,
                    "explanation": "Der Winkel an der Ecke B heißt β (Beta). An A liegt α, an C liegt γ.",
                    "grafik": "<svg viewBox='0 0 300 180' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='48.2,146.0 251.8,146.0 180.5,34.0' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2' stroke-linejoin='round'/><path d='M251.8 146.0L242.2 130.8A18 18 0 0 0 233.8 146.0Z' fill='rgba(245,158,11,0.6)' stroke='#f59e0b' stroke-width='1.5'/><text x='225.5' y='135.6' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>?</text><text x='35.8' y='154.1' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='263.9' y='154.9' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text><text x='184.0' y='25.5' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>C</text></svg>"
                },
                {
                    "id": "kongruenzk7l2u_leicht_4",
                    "category": "kurs_kongruenz_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Angaben legen ein Dreieck NICHT eindeutig fest?",
                    "answers": [
                        "WWW",
                        "SSS",
                        "SWS",
                        "WSW"
                    ],
                    "correct": 0,
                    "explanation": "Drei Winkel legen nur die Form fest, nicht die Größe. Es gibt kleine und große Dreiecke mit denselben Winkeln."
                }
            ],
            "mittel": [
                {
                    "id": "kongruenzk7l2u_mittel_1",
                    "category": "kurs_kongruenz_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Gegeben sind a = 5 cm, b = 6 cm und c = 7 cm. Welcher Kongruenzsatz passt?",
                    "answers": [
                        "SSS",
                        "SWS",
                        "WSW",
                        "SsW"
                    ],
                    "correct": 0,
                    "explanation": "Es sind drei Seiten gegeben und kein Winkel. Das ist der Kongruenzsatz SSS."
                },
                {
                    "id": "kongruenzk7l2u_mittel_2",
                    "category": "kurs_kongruenz_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Gegeben sind c = 6 cm, α = 40° und β = 65°. Welcher Kongruenzsatz passt?",
                    "answers": [
                        "WSW",
                        "SWS",
                        "SSS",
                        "WWW"
                    ],
                    "correct": 0,
                    "explanation": "α und β liegen an den beiden Enden der Seite c. Eine Seite mit den beiden anliegenden Winkeln ist WSW."
                },
                {
                    "id": "kongruenzk7l2u_mittel_3",
                    "category": "kurs_kongruenz_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Gegeben sind b = 4 cm, c = 5 cm und α = 70° (markiert). Welcher Satz passt?",
                    "answers": [
                        "SWS",
                        "WSW",
                        "SsW",
                        "SSS"
                    ],
                    "correct": 0,
                    "explanation": "α liegt an der Ecke A genau zwischen den Seiten b und c. Zwei Seiten mit dem Zwischenwinkel sind SWS.",
                    "grafik": "<svg viewBox='0 0 300 180' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='48.2,146.0 251.8,146.0 180.5,34.0' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2' stroke-linejoin='round'/><line x1='48.2' y1='146.0' x2='180.5' y2='34.0' stroke='#f59e0b' stroke-width='4' stroke-linecap='round'/><line x1='48.2' y1='146.0' x2='251.8' y2='146.0' stroke='#f59e0b' stroke-width='4' stroke-linecap='round'/><path d='M48.2 146.0L66.2 146.0A18 18 0 0 0 61.9 134.4Z' fill='rgba(167,139,250,0.6)' stroke='#a78bfa' stroke-width='1.5'/><text x='80.9' y='138.0' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>α</text><text x='104.9' y='82.8' text-anchor='middle' font-size='12' font-style='italic' fill='#f59e0b' font-family='sans-serif'>b</text><text x='150.0' y='163.0' text-anchor='middle' font-size='12' font-style='italic' fill='#f59e0b' font-family='sans-serif'>c</text><text x='35.8' y='154.1' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='263.9' y='154.9' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text><text x='184.0' y='25.5' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>C</text></svg>"
                },
                {
                    "id": "kongruenzk7l2u_mittel_4",
                    "category": "kurs_kongruenz_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Beide Dreiecke haben dieselben Winkel. Sind sie kongruent?",
                    "answers": [
                        "Nein, eins ist größer",
                        "Ja, gleiche Winkel reichen aus",
                        "Ja, das folgt aus dem Satz WSW",
                        "Nein, weil eins gedreht ist"
                    ],
                    "correct": 0,
                    "explanation": "Gleiche Winkel bedeuten nur gleiche Form. Das rechte Dreieck ist doppelt so groß, also passen sie nicht aufeinander.",
                    "grafik": "<svg viewBox='0 0 300 150' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='12.0,140.0 102.0,140.0 72.6,89.1' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2' stroke-linejoin='round'/><text x='28.1' y='138.2' text-anchor='middle' font-size='10' fill='#e5e7eb' font-family='sans-serif'>40°</text><text x='87.2' y='135.4' text-anchor='middle' font-size='10' fill='#e5e7eb' font-family='sans-serif'>60°</text><text x='69.7' y='110.0' text-anchor='middle' font-size='10' fill='#e5e7eb' font-family='sans-serif'>80°</text><polygon points='112.0,140.0 292.0,140.0 233.3,38.3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2' stroke-linejoin='round'/><text x='136.4' y='135.1' text-anchor='middle' font-size='10' fill='#e5e7eb' font-family='sans-serif'>40°</text><text x='269.5' y='131.0' text-anchor='middle' font-size='10' fill='#e5e7eb' font-family='sans-serif'>60°</text><text x='228.7' y='67.9' text-anchor='middle' font-size='10' fill='#e5e7eb' font-family='sans-serif'>80°</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "kongruenzk7l2u_schwer_1",
                    "category": "kurs_kongruenz_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "SSS: Diesmal ist b = AC zuerst gezeichnet. Um welchen Punkt schlägst du den Kreis mit r = a?",
                    "answers": [
                        "um C",
                        "um A",
                        "um B",
                        "um die Mitte von b"
                    ],
                    "correct": 0,
                    "explanation": "a ist die Seite BC. Von ihr kennst du schon den Endpunkt C, B wird gesucht. Darum Kreis um C mit r = a (und um A mit r = c).",
                    "grafik": "<svg viewBox='0 0 300 96' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='60' x2='250' y2='60' stroke='#38bdf8' stroke-width='3'/><circle cx='50' cy='60' r='3.5' fill='#e5e7eb'/><circle cx='250' cy='60' r='3.5' fill='#e5e7eb'/><text x='150.0' y='80.0' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>b = 5 cm</text><text x='36.0' y='64.0' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='264.0' y='64.0' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>C</text><text x='150.0' y='30.0' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>B = ?</text></svg>"
                },
                {
                    "id": "kongruenzk7l2u_schwer_2",
                    "category": "kurs_kongruenz_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "SWS mit b = 5 cm, γ = 60°, a = 4 cm. Du hast b = AC gezeichnet. Wo trägst du γ an?",
                    "answers": [
                        "an C",
                        "an A",
                        "an B",
                        "in der Mitte von b"
                    ],
                    "correct": 0,
                    "explanation": "γ ist der Winkel an der Ecke C. Du trägst ihn in C an b an und misst auf dem freien Schenkel a = 4 cm ab – so findest du B."
                },
                {
                    "id": "kongruenzk7l2u_schwer_3",
                    "category": "kurs_kongruenz_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Gegeben: a = 7 cm, c = 4 cm, α = 50°. Ist das Dreieck eindeutig?",
                    "answers": [
                        "Ja, α liegt gegenüber von a",
                        "Nein, α liegt nicht zwischen a, c",
                        "Nein, dafür fehlt eine Seite",
                        "Ja, aber nur rechtwinklig"
                    ],
                    "correct": 0,
                    "explanation": "Das ist SsW: α liegt der längeren der beiden Seiten (a = 7 cm > c = 4 cm) gegenüber. Dann ist das Dreieck eindeutig."
                },
                {
                    "id": "kongruenzk7l2u_schwer_4",
                    "category": "kurs_kongruenz_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "dreiecke",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "a = 3 cm, c = 5 cm, α = 30°: Es gibt zwei Dreiecke. Warum?",
                    "answers": [
                        "α liegt der kürzeren Seite gegenüber",
                        "3 cm und 5 cm sind zusammen zu kurz",
                        "Ein einziger Winkel reicht nie aus",
                        "30° ist zu klein für ein Dreieck"
                    ],
                    "correct": 0,
                    "explanation": "Bei SsW muss der Winkel der längeren Seite gegenüberliegen. Hier liegt α der kürzeren Seite a gegenüber – der Kreis um B schneidet den Schenkel zweimal.",
                    "grafik": "<svg viewBox='0 0 290 162' style='width:100%;max-width:290px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='140' x2='210' y2='140' stroke='#38bdf8' stroke-width='3'/><line x1='30' y1='140' x2='232.6' y2='23.0' stroke='#94a3b8' stroke-width='2'/><path d='M102 140 A108 108 0 0 1 255.6 42.1' fill='none' stroke='#a78bfa' stroke-width='2' stroke-dasharray='5,4'/><line x1='210' y1='140' x2='216.7' y2='32.2' stroke='#f59e0b' stroke-width='2.5'/><circle cx='216.7' cy='32.2' r='3.5' fill='#f59e0b'/><line x1='210' y1='140' x2='113.3' y2='91.9' stroke='#10b981' stroke-width='2.5'/><circle cx='113.3' cy='91.9' r='3.5' fill='#10b981'/><text x='214.7' y='22.2' text-anchor='middle' font-size='12' font-weight='700' fill='#f59e0b' font-family='sans-serif'>C₁</text><text x='101.3' y='83.9' text-anchor='middle' font-size='12' font-weight='700' fill='#10b981' font-family='sans-serif'>C₂</text><path d='M56 140 A26 26 0 0 0 52.5 127.0' fill='none' stroke='#e5e7eb' stroke-width='1.5'/><text x='76.0' y='134.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>30°</text><text x='120.0' y='157.0' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>c = 5 cm</text><text x='246.0' y='90.0' text-anchor='middle' font-size='11' fill='#a78bfa' font-family='sans-serif'>a = 3 cm</text><text x='18.0' y='144.0' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='220.0' y='156.0' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "kongruenzk7l2_test_1",
                "category": "kurs_kongruenz_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "dreiecke",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Angaben legen ein Dreieck eindeutig fest?",
                "answers": [
                    "a = 4 cm, b = 5 cm, c = 6 cm",
                    "α = 50°, β = 60°, γ = 70°",
                    "a = 2 cm, b = 3 cm, c = 6 cm",
                    "α = 90°, β = 95°, c = 4 cm"
                ],
                "correct": 0,
                "explanation": "4, 5, 6 erfüllen die Dreiecksungleichung (SSS). Drei Winkel legen die Größe nicht fest, 2 + 3 < 6 geht nicht, 90° + 95° ist über 180°."
            },
            {
                "id": "kongruenzk7l2_test_2",
                "category": "kurs_kongruenz_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "dreiecke",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Kongruenzsatz gehört zu den markierten Stücken?",
                "answers": [
                    "WSW",
                    "SWS",
                    "SSS",
                    "SsW"
                ],
                "correct": 0,
                "explanation": "Markiert sind die Seite c und die beiden Winkel α und β an ihren Enden. Das ist WSW.",
                "grafik": "<svg viewBox='0 0 300 180' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='48.2,146.0 251.8,146.0 180.5,34.0' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2' stroke-linejoin='round'/><line x1='48.2' y1='146.0' x2='251.8' y2='146.0' stroke='#f59e0b' stroke-width='4' stroke-linecap='round'/><path d='M48.2 146.0L66.2 146.0A18 18 0 0 0 61.9 134.4Z' fill='rgba(167,139,250,0.6)' stroke='#a78bfa' stroke-width='1.5'/><text x='80.9' y='138.0' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>α</text><path d='M251.8 146.0L242.2 130.8A18 18 0 0 0 233.8 146.0Z' fill='rgba(167,139,250,0.6)' stroke='#a78bfa' stroke-width='1.5'/><text x='225.5' y='135.6' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>β</text><text x='150.0' y='163.0' text-anchor='middle' font-size='12' font-style='italic' fill='#f59e0b' font-family='sans-serif'>c</text><text x='35.8' y='154.1' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='263.9' y='154.9' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text><text x='184.0' y='25.5' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>C</text></svg>"
            },
            {
                "id": "kongruenzk7l2_test_3",
                "category": "kurs_kongruenz_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "dreiecke",
                "difficulty": "mittel",
                "points": 10,
                "question": "Konstruktion nach WSW mit c, α und β: Wo liegt der Punkt C?",
                "answers": [
                    "Schnitt der beiden Schenkel",
                    "Auf dem Kreis um A mit r = c",
                    "Genau über der Mitte von c",
                    "Senkrecht über dem Punkt B"
                ],
                "correct": 0,
                "explanation": "Du trägst α in A und β in B an. Die beiden freien Schenkel schneiden sich im Punkt C."
            },
            {
                "id": "kongruenzk7l2_test_4",
                "category": "kurs_kongruenz_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "dreiecke",
                "difficulty": "mittel",
                "points": 10,
                "question": "Gegenüber welcher Ecke liegt die Seite b?",
                "answers": [
                    "B",
                    "A",
                    "C",
                    "β"
                ],
                "correct": 0,
                "explanation": "Jede Seite trägt den kleinen Buchstaben der Ecke, die ihr gegenüberliegt. b liegt also gegenüber von B und verbindet A und C.",
                "grafik": "<svg viewBox='0 0 300 180' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='48.2,146.0 251.8,146.0 180.5,34.0' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2' stroke-linejoin='round'/><text x='35.8' y='154.1' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>A</text><text x='263.9' y='154.9' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>B</text><text x='184.0' y='25.5' text-anchor='middle' font-size='13' font-weight='700' fill='#94a3b8' font-family='sans-serif'>C</text></svg>"
            },
            {
                "id": "kongruenzk7l2_test_5",
                "category": "kurs_kongruenz_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "dreiecke",
                "difficulty": "mittel",
                "points": 10,
                "question": "Zwei Dreiecke stimmen in a, b und γ überein. Was gilt?",
                "answers": [
                    "Sie sind kongruent (SWS)",
                    "Sie sind kongruent (WSW)",
                    "Nicht kongruent, Winkel fehlt",
                    "Nicht kongruent, c fehlt"
                ],
                "correct": 0,
                "explanation": "γ liegt an der Ecke C zwischen den Seiten a und b. Zwei Seiten und der Zwischenwinkel – nach SWS sind die Dreiecke kongruent."
            },
            {
                "id": "kongruenzk7l2_test_6",
                "category": "kurs_kongruenz_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "dreiecke",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wozu zeichnest du vor der Konstruktion eine Planfigur?",
                "answers": [
                    "Gegebenes markieren und planen",
                    "Um die Lösung genau zu messen",
                    "Für ein maßstabsgetreues Bild",
                    "Um die Winkelsumme zu prüfen"
                ],
                "correct": 0,
                "explanation": "Die Planfigur ist eine Skizze. Du markierst darin die gegebenen Stücke und planst die Reihenfolge. Messen kannst du darin nicht."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "haeuf_k7_l1",
        "kurs": "haeufigkeit_k7",
        "order": 1,
        "icon": "📊",
        "title": "Absolute und relative Häufigkeit",
        "kurz": "Zählen, Anteile bilden und Diagramme lesen",
        "erklaerung": {
            "intro": "Die <b>absolute Häufigkeit</b> sagt, wie oft ein Ergebnis vorkommt – zum Beispiel 10 Kinder fahren Bus. Die <b>relative Häufigkeit</b> ist der Anteil: absolute Häufigkeit ÷ Gesamtzahl. Du kannst sie als <b>Bruch</b>, <b>Dezimalzahl</b> oder in <b>Prozent</b> angeben. Im <b>Kreisdiagramm</b> entspricht 100 % dem ganzen Kreis mit 360°. Nach dem <b>Gesetz der großen Zahlen</b> pendeln sich relative Häufigkeiten bei vielen Versuchen ein.",
            "merksatz": "Relative Häufigkeit = absolute Häufigkeit ÷ Anzahl aller Versuche – sie liegt immer zwischen 0 und 1.",
            "beispiele": [
                "25 Kinder, 10 fahren Bus: relative Häufigkeit 10/25 = 0,4 = 40 %.<svg viewBox='0 0 320 190' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='44' y1='160.0' x2='310' y2='160.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='164.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='44' y1='138.3' x2='310' y2='138.3' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='142.3' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>2</text><line x1='44' y1='116.7' x2='310' y2='116.7' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='120.7' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>4</text><line x1='44' y1='95.0' x2='310' y2='95.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='99.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>6</text><line x1='44' y1='73.3' x2='310' y2='73.3' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='77.3' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>8</text><line x1='44' y1='51.7' x2='310' y2='51.7' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='55.7' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>10</text><line x1='44' y1='30.0' x2='310' y2='30.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='34.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>12</text><rect x='57.3' y='51.7' width='39.9' height='108.3' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='1.5'/><text x='77.2' y='176.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Bus</text><rect x='123.8' y='73.3' width='39.9' height='86.7' fill='rgba(16,185,129,0.6)' stroke='#10b981' stroke-width='1.5'/><text x='143.8' y='176.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Fahrrad</text><rect x='190.3' y='105.8' width='39.9' height='54.2' fill='rgba(245,158,11,0.6)' stroke='#f59e0b' stroke-width='1.5'/><text x='210.2' y='176.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>zu Fuß</text><rect x='256.8' y='138.3' width='39.9' height='21.7' fill='rgba(167,139,250,0.6)' stroke='#a78bfa' stroke-width='1.5'/><text x='276.8' y='176.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Auto</text><line x1='44' y1='160' x2='310' y2='160' stroke='#94a3b8' stroke-width='1.5'/><line x1='44' y1='22' x2='44' y2='160' stroke='#94a3b8' stroke-width='1.5'/><text x='8.0' y='18.0' text-anchor='start' font-size='10' fill='#94a3b8' font-family='sans-serif'>Anzahl</text></svg>",
                "Im Kreisdiagramm: 40 % von 360° sind 0,4 · 360° = 144°.<svg viewBox='0 0 320 170' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M85 85L85.0 13.0A72 72 0 0 1 127.3 143.2Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M85 85L127.3 143.2A72 72 0 0 1 14.3 98.5Z' fill='rgba(16,185,129,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M85 85L14.3 98.5A72 72 0 0 1 50.3 21.9Z' fill='rgba(245,158,11,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M85 85L50.3 21.9A72 72 0 0 1 85.0 13.0Z' fill='rgba(167,139,250,0.6)' stroke='#0f172a' stroke-width='2'/><rect x='180' y='19' width='14' height='14' rx='2' fill='rgba(56,189,248,0.6)' stroke='#38bdf8'/><text x='202.0' y='31.0' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Bus 40 %</text><rect x='180' y='47' width='14' height='14' rx='2' fill='rgba(16,185,129,0.6)' stroke='#10b981'/><text x='202.0' y='59.0' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Fahrrad 32 %</text><rect x='180' y='75' width='14' height='14' rx='2' fill='rgba(245,158,11,0.6)' stroke='#f59e0b'/><text x='202.0' y='87.0' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>zu Fuß 20 %</text><rect x='180' y='103' width='14' height='14' rx='2' fill='rgba(167,139,250,0.6)' stroke='#a78bfa'/><text x='202.0' y='115.0' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Auto 8 %</text></svg>",
                "Gesetz der großen Zahlen: Am Anfang springt der Anteil von „Kopf“ wild hin und her. Bei vielen Würfen pendelt er sich um 0,5 ein.<svg viewBox='0 0 330 190' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='46' y1='150.0' x2='318' y2='150.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.5'/><text x='40.0' y='154.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='46' y1='90.0' x2='318' y2='90.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.5' stroke-dasharray='4,4'/><text x='40.0' y='94.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0,5</text><line x1='46' y1='30.0' x2='318' y2='30.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.5'/><text x='40.0' y='34.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>1</text><polyline points='54.0,30.0 79.7,90.0 94.7,70.0 105.4,60.0 120.4,90.0 139.3,114.0 165.0,96.0 190.7,84.0 211.4,95.1 224.7,86.4 250.4,91.8 276.0,89.1 296.8,90.7 310.0,89.8' fill='none' stroke='#f59e0b' stroke-width='2.5' stroke-linejoin='round'/><circle cx='54.0' cy='30.0' r='3' fill='#f59e0b'/><circle cx='79.7' cy='90.0' r='3' fill='#f59e0b'/><circle cx='94.7' cy='70.0' r='3' fill='#f59e0b'/><circle cx='105.4' cy='60.0' r='3' fill='#f59e0b'/><circle cx='120.4' cy='90.0' r='3' fill='#f59e0b'/><circle cx='139.3' cy='114.0' r='3' fill='#f59e0b'/><circle cx='165.0' cy='96.0' r='3' fill='#f59e0b'/><circle cx='190.7' cy='84.0' r='3' fill='#f59e0b'/><circle cx='211.4' cy='95.1' r='3' fill='#f59e0b'/><circle cx='224.7' cy='86.4' r='3' fill='#f59e0b'/><circle cx='250.4' cy='91.8' r='3' fill='#f59e0b'/><circle cx='276.0' cy='89.1' r='3' fill='#f59e0b'/><circle cx='296.8' cy='90.7' r='3' fill='#f59e0b'/><circle cx='310.0' cy='89.8' r='3' fill='#f59e0b'/><text x='54.0' y='166.0' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>1</text><text x='139.3' y='166.0' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>10</text><text x='224.7' y='166.0' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>100</text><text x='310.0' y='166.0' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>1000</text><line x1='46' y1='150' x2='318' y2='150' stroke='#94a3b8' stroke-width='1.5'/><line x1='46' y1='24' x2='46' y2='150' stroke='#94a3b8' stroke-width='1.5'/><text x='182.0' y='184.0' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>Anzahl der Münzwürfe</text><text x='60.0' y='16.0' text-anchor='start' font-size='10' fill='#94a3b8' font-family='sans-serif'>rel. Häufigkeit „Kopf“</text></svg>"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "haeufk7l1u_leicht_1",
                    "category": "kurs_haeuf_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Lieblingsfarben in der 7b: Wie groß ist die absolute Häufigkeit von Blau?",
                    "answers": [
                        "12",
                        "10",
                        "14",
                        "2"
                    ],
                    "correct": 0,
                    "explanation": "Zwei Fünferbündel und zwei Einzelstriche: 5 + 5 + 2 = 12. Der Querstrich ist der fünfte Strich im Bündel.",
                    "grafik": "<svg viewBox='0 0 300 106' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='14.0' y='28.0' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Rot</text><line x1='110' y1='14' x2='110' y2='34' stroke='#f43f5e' stroke-width='2.2' stroke-linecap='round'/><line x1='117' y1='14' x2='117' y2='34' stroke='#f43f5e' stroke-width='2.2' stroke-linecap='round'/><line x1='124' y1='14' x2='124' y2='34' stroke='#f43f5e' stroke-width='2.2' stroke-linecap='round'/><line x1='131' y1='14' x2='131' y2='34' stroke='#f43f5e' stroke-width='2.2' stroke-linecap='round'/><line x1='106' y1='31' x2='135' y2='17' stroke='#f43f5e' stroke-width='2.2' stroke-linecap='round'/><line x1='150' y1='14' x2='150' y2='34' stroke='#f43f5e' stroke-width='2.2' stroke-linecap='round'/><line x1='157' y1='14' x2='157' y2='34' stroke='#f43f5e' stroke-width='2.2' stroke-linecap='round'/><line x1='8' y1='38' x2='292' y2='38' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.5'/><text x='14.0' y='58.0' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Blau</text><line x1='110' y1='44' x2='110' y2='64' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='117' y1='44' x2='117' y2='64' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='124' y1='44' x2='124' y2='64' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='131' y1='44' x2='131' y2='64' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='106' y1='61' x2='135' y2='47' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='150' y1='44' x2='150' y2='64' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='157' y1='44' x2='157' y2='64' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='164' y1='44' x2='164' y2='64' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='171' y1='44' x2='171' y2='64' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='146' y1='61' x2='175' y2='47' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='190' y1='44' x2='190' y2='64' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='197' y1='44' x2='197' y2='64' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='8' y1='68' x2='292' y2='68' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.5'/><text x='14.0' y='88.0' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Grün</text><line x1='110' y1='74' x2='110' y2='94' stroke='#10b981' stroke-width='2.2' stroke-linecap='round'/><line x1='117' y1='74' x2='117' y2='94' stroke='#10b981' stroke-width='2.2' stroke-linecap='round'/><line x1='124' y1='74' x2='124' y2='94' stroke='#10b981' stroke-width='2.2' stroke-linecap='round'/><line x1='131' y1='74' x2='131' y2='94' stroke='#10b981' stroke-width='2.2' stroke-linecap='round'/><line x1='106' y1='91' x2='135' y2='77' stroke='#10b981' stroke-width='2.2' stroke-linecap='round'/><line x1='8' y1='98' x2='292' y2='98' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.5'/><line x1='100' y1='10' x2='100' y2='100' stroke='#94a3b8' stroke-width='0.8'/></svg>"
                },
                {
                    "id": "haeufk7l1u_leicht_2",
                    "category": "kurs_haeuf_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Bei 20 Würfen kam 5-mal eine Sechs. Wie groß ist die relative Häufigkeit?",
                    "answers": [
                        "5/20",
                        "20/5",
                        "5/6",
                        "1/5"
                    ],
                    "correct": 0,
                    "explanation": "Relative Häufigkeit = absolute Häufigkeit ÷ Anzahl aller Würfe = 5/20 (gekürzt 1/4)."
                },
                {
                    "id": "haeufk7l1u_leicht_3",
                    "category": "kurs_haeuf_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie schreibst du die relative Häufigkeit 0,25 in Prozent?",
                    "answers": [
                        "25 %",
                        "2,5 %",
                        "0,25 %",
                        "250 %"
                    ],
                    "correct": 0,
                    "explanation": "0,25 = 25/100 = 25 %. Beim Umwandeln in Prozent rechnest du mal 100."
                },
                {
                    "id": "haeufk7l1u_leicht_4",
                    "category": "kurs_haeuf_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ergeben alle relativen Häufigkeiten einer Umfrage zusammen?",
                    "answers": [
                        "1 bzw. 100 %",
                        "10 bzw. 10 %",
                        "0,5 bzw. 50 %",
                        "n bzw. n %"
                    ],
                    "correct": 0,
                    "explanation": "Alle Anteile zusammen sind das Ganze. Darum ergeben die relativen Häufigkeiten zusammen 1, also 100 %."
                }
            ],
            "mittel": [
                {
                    "id": "haeufk7l1u_mittel_1",
                    "category": "kurs_haeuf_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "So kommen 25 Kinder der 7c zur Schule. Wie viel Prozent fahren Fahrrad?",
                    "answers": [
                        "28 %",
                        "7 %",
                        "70 %",
                        "25 %"
                    ],
                    "correct": 0,
                    "explanation": "7 von 25 Kindern fahren Rad: 7 ÷ 25 = 0,28 = 28 %.",
                    "grafik": "<svg viewBox='0 0 320 190' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='44' y1='160.0' x2='310' y2='160.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='164.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='44' y1='134.0' x2='310' y2='134.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='138.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>2</text><line x1='44' y1='108.0' x2='310' y2='108.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='112.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>4</text><line x1='44' y1='82.0' x2='310' y2='82.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='86.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>6</text><line x1='44' y1='56.0' x2='310' y2='56.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='60.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>8</text><line x1='44' y1='30.0' x2='310' y2='30.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='34.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>10</text><rect x='57.3' y='43.0' width='39.9' height='117.0' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='1.5'/><text x='77.2' y='176.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Bus</text><rect x='123.8' y='69.0' width='39.9' height='91.0' fill='rgba(16,185,129,0.6)' stroke='#10b981' stroke-width='1.5'/><text x='143.8' y='176.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Fahrrad</text><rect x='190.3' y='82.0' width='39.9' height='78.0' fill='rgba(245,158,11,0.6)' stroke='#f59e0b' stroke-width='1.5'/><text x='210.2' y='176.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>zu Fuß</text><rect x='256.8' y='121.0' width='39.9' height='39.0' fill='rgba(167,139,250,0.6)' stroke='#a78bfa' stroke-width='1.5'/><text x='276.8' y='176.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Auto</text><line x1='44' y1='160' x2='310' y2='160' stroke='#94a3b8' stroke-width='1.5'/><line x1='44' y1='22' x2='44' y2='160' stroke='#94a3b8' stroke-width='1.5'/><text x='8.0' y='18.0' text-anchor='start' font-size='10' fill='#94a3b8' font-family='sans-serif'>Anzahl</text></svg>"
                },
                {
                    "id": "haeufk7l1u_mittel_2",
                    "category": "kurs_haeuf_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "In einer Klasse mit 30 Kindern spielen 12 Fußball. Relative Häufigkeit als Dezimalzahl?",
                    "answers": [
                        "0,4",
                        "0,12",
                        "2,5",
                        "0,3"
                    ],
                    "correct": 0,
                    "explanation": "12 ÷ 30 = 0,4. Du teilst immer die Anzahl durch die Gesamtzahl, nicht umgekehrt."
                },
                {
                    "id": "haeufk7l1u_mittel_3",
                    "category": "kurs_haeuf_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Schwimmen hat im Kreisdiagramm 20 %. Wie groß ist der Winkel dieses Kreisteils?",
                    "answers": [
                        "72°",
                        "20°",
                        "36°",
                        "200°"
                    ],
                    "correct": 0,
                    "explanation": "Der ganze Kreis hat 360°. 20 % davon sind 0,2 · 360° = 72°.",
                    "grafik": "<svg viewBox='0 0 320 170' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M85 85L85.0 13.0A72 72 0 0 1 127.3 143.2Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M85 85L127.3 143.2A72 72 0 0 1 42.7 143.2Z' fill='rgba(16,185,129,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M85 85L42.7 143.2A72 72 0 0 1 26.8 42.7Z' fill='rgba(167,139,250,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M85 85L26.8 42.7A72 72 0 0 1 85.0 13.0Z' fill='rgba(245,158,11,0.6)' stroke='#0f172a' stroke-width='2'/><rect x='180' y='19' width='14' height='14' rx='2' fill='rgba(56,189,248,0.6)' stroke='#38bdf8'/><text x='202.0' y='31.0' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Fußball 40 %</text><rect x='180' y='47' width='14' height='14' rx='2' fill='rgba(16,185,129,0.6)' stroke='#10b981'/><text x='202.0' y='59.0' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Schwimmen 20 %</text><rect x='180' y='75' width='14' height='14' rx='2' fill='rgba(167,139,250,0.6)' stroke='#a78bfa'/><text x='202.0' y='87.0' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Tanzen 25 %</text><rect x='180' y='103' width='14' height='14' rx='2' fill='rgba(245,158,11,0.6)' stroke='#f59e0b'/><text x='202.0' y='115.0' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Sonstiges 15 %</text></svg>"
                },
                {
                    "id": "haeufk7l1u_mittel_4",
                    "category": "kurs_haeuf_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Lea würfelt 50-mal und hat 9 Sechsen. Wie groß ist die relative Häufigkeit in Prozent?",
                    "answers": [
                        "18 %",
                        "9 %",
                        "1,8 %",
                        "5,6 %"
                    ],
                    "correct": 0,
                    "explanation": "9 ÷ 50 = 0,18 = 18 %. Tipp: 9/50 = 18/100."
                }
            ],
            "schwer": [
                {
                    "id": "haeufk7l1u_schwer_1",
                    "category": "kurs_haeuf_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Anteil der Sechsen beim Würfeln: Was zeigt das Bild?",
                    "answers": [
                        "Der Anteil pendelt sich bei 1/6 ein",
                        "Jede Zahl kommt genau gleich oft",
                        "Nach vielen Würfen kommt keine 6",
                        "Wenige Würfe sind genauer als viele"
                    ],
                    "correct": 0,
                    "explanation": "Am Anfang schwankt der Anteil der Sechsen stark. Bei vielen Würfen pendelt er sich bei etwa 1/6 ≈ 0,17 ein – genau gleich oft muss aber keine Zahl kommen.",
                    "grafik": "<svg viewBox='0 0 330 190' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='46' y1='150.0' x2='318' y2='150.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.5'/><text x='40.0' y='154.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='46' y1='116.7' x2='318' y2='116.7' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.5' stroke-dasharray='4,4'/><text x='40.0' y='120.7' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>1/6</text><line x1='46' y1='50.0' x2='318' y2='50.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.5'/><text x='40.0' y='54.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0,5</text><polyline points='54.0,150.0 79.7,50.0 94.7,83.3 105.4,100.0 120.4,83.3 139.3,110.0 165.0,130.0 190.7,110.0 211.4,121.4 224.7,114.0 250.4,119.0 276.0,115.5 296.8,117.4 310.0,116.6' fill='none' stroke='#f59e0b' stroke-width='2.5' stroke-linejoin='round'/><circle cx='54.0' cy='150.0' r='3' fill='#f59e0b'/><circle cx='79.7' cy='50.0' r='3' fill='#f59e0b'/><circle cx='94.7' cy='83.3' r='3' fill='#f59e0b'/><circle cx='105.4' cy='100.0' r='3' fill='#f59e0b'/><circle cx='120.4' cy='83.3' r='3' fill='#f59e0b'/><circle cx='139.3' cy='110.0' r='3' fill='#f59e0b'/><circle cx='165.0' cy='130.0' r='3' fill='#f59e0b'/><circle cx='190.7' cy='110.0' r='3' fill='#f59e0b'/><circle cx='211.4' cy='121.4' r='3' fill='#f59e0b'/><circle cx='224.7' cy='114.0' r='3' fill='#f59e0b'/><circle cx='250.4' cy='119.0' r='3' fill='#f59e0b'/><circle cx='276.0' cy='115.5' r='3' fill='#f59e0b'/><circle cx='296.8' cy='117.4' r='3' fill='#f59e0b'/><circle cx='310.0' cy='116.6' r='3' fill='#f59e0b'/><text x='54.0' y='166.0' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>1</text><text x='139.3' y='166.0' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>10</text><text x='224.7' y='166.0' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>100</text><text x='310.0' y='166.0' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>1000</text><line x1='46' y1='150' x2='318' y2='150' stroke='#94a3b8' stroke-width='1.5'/><line x1='46' y1='24' x2='46' y2='150' stroke='#94a3b8' stroke-width='1.5'/><text x='182.0' y='184.0' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>Anzahl der Würfe</text><text x='60.0' y='16.0' text-anchor='start' font-size='10' fill='#94a3b8' font-family='sans-serif'>rel. Häufigkeit der 6</text></svg>"
                },
                {
                    "id": "haeufk7l1u_schwer_2",
                    "category": "kurs_haeuf_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ben würfelt 40-mal, Elif 2000-mal. Wessen relative Häufigkeit der 6 liegt eher bei 1/6?",
                    "answers": [
                        "Elifs, sie hat mehr Würfe",
                        "Bens, er macht weniger Fehler",
                        "Beide sind sicher genau 1/6",
                        "Keine, Würfeln ist nur Glück"
                    ],
                    "correct": 0,
                    "explanation": "Je mehr Würfe, desto näher liegt die relative Häufigkeit meist am erwarteten Wert. Bei 2000 Würfen ist das viel zuverlässiger als bei 40."
                },
                {
                    "id": "haeufk7l1u_schwer_3",
                    "category": "kurs_haeuf_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Von 40 Kindern haben 10 einen Hund. Wie groß ist der Winkel im Kreisdiagramm?",
                    "answers": [
                        "90°",
                        "10°",
                        "40°",
                        "25°"
                    ],
                    "correct": 0,
                    "explanation": "10 von 40 ist 1/4. Ein Viertel des Kreises sind 360° : 4 = 90°."
                },
                {
                    "id": "haeufk7l1u_schwer_4",
                    "category": "kurs_haeuf_k7_l1",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie groß ist die relative Häufigkeit von Grün in der Tabelle?",
                    "answers": [
                        "0,25",
                        "0,35",
                        "0,75",
                        "0,15"
                    ],
                    "correct": 0,
                    "explanation": "Alle zusammen ergeben 1. 1 − 0,3 − 0,45 = 0,25.",
                    "grafik": "<svg viewBox='0 0 280 128' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='8' width='260' height='112' rx='4' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='1'/><text x='80.0' y='27.0' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Farbe</text><text x='200.0' y='27.0' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>rel. Häufigkeit</text><line x1='10' y1='36' x2='270' y2='36' stroke='#94a3b8' stroke-width='0.8'/><circle cx='40' cy='50' r='6' fill='rgba(244,63,94,0.6)' stroke='#f43f5e'/><text x='80.0' y='55.0' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Rot</text><text x='200.0' y='55.0' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>0,3</text><line x1='10' y1='64' x2='270' y2='64' stroke='#94a3b8' stroke-width='0.8'/><circle cx='40' cy='78' r='6' fill='rgba(56,189,248,0.6)' stroke='#38bdf8'/><text x='80.0' y='83.0' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Blau</text><text x='200.0' y='83.0' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>0,45</text><line x1='10' y1='92' x2='270' y2='92' stroke='#94a3b8' stroke-width='0.8'/><circle cx='40' cy='106' r='6' fill='rgba(16,185,129,0.6)' stroke='#10b981'/><text x='80.0' y='111.0' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Grün</text><text x='200.0' y='111.0' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>?</text><line x1='140' y1='8' x2='140' y2='120' stroke='#94a3b8' stroke-width='0.8'/></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "haeufk7l1_test_1",
                "category": "kurs_haeuf_k7_l1",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zufall_k7",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie oft wurde Schwimmen als Lieblingssport genannt?",
                "answers": [
                    "9",
                    "5",
                    "8",
                    "4"
                ],
                "correct": 0,
                "explanation": "Ein Fünferbündel und vier Einzelstriche: 5 + 4 = 9.",
                "grafik": "<svg viewBox='0 0 300 106' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='14.0' y='28.0' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Fußball</text><line x1='110' y1='14' x2='110' y2='34' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='117' y1='14' x2='117' y2='34' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='124' y1='14' x2='124' y2='34' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='131' y1='14' x2='131' y2='34' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='106' y1='31' x2='135' y2='17' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='150' y1='14' x2='150' y2='34' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='157' y1='14' x2='157' y2='34' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='164' y1='14' x2='164' y2='34' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='171' y1='14' x2='171' y2='34' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='146' y1='31' x2='175' y2='17' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='190' y1='14' x2='190' y2='34' stroke='#38bdf8' stroke-width='2.2' stroke-linecap='round'/><line x1='8' y1='38' x2='292' y2='38' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.5'/><text x='14.0' y='58.0' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Schwimmen</text><line x1='110' y1='44' x2='110' y2='64' stroke='#10b981' stroke-width='2.2' stroke-linecap='round'/><line x1='117' y1='44' x2='117' y2='64' stroke='#10b981' stroke-width='2.2' stroke-linecap='round'/><line x1='124' y1='44' x2='124' y2='64' stroke='#10b981' stroke-width='2.2' stroke-linecap='round'/><line x1='131' y1='44' x2='131' y2='64' stroke='#10b981' stroke-width='2.2' stroke-linecap='round'/><line x1='106' y1='61' x2='135' y2='47' stroke='#10b981' stroke-width='2.2' stroke-linecap='round'/><line x1='150' y1='44' x2='150' y2='64' stroke='#10b981' stroke-width='2.2' stroke-linecap='round'/><line x1='157' y1='44' x2='157' y2='64' stroke='#10b981' stroke-width='2.2' stroke-linecap='round'/><line x1='164' y1='44' x2='164' y2='64' stroke='#10b981' stroke-width='2.2' stroke-linecap='round'/><line x1='171' y1='44' x2='171' y2='64' stroke='#10b981' stroke-width='2.2' stroke-linecap='round'/><line x1='8' y1='68' x2='292' y2='68' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.5'/><text x='14.0' y='88.0' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Tennis</text><line x1='110' y1='74' x2='110' y2='94' stroke='#f59e0b' stroke-width='2.2' stroke-linecap='round'/><line x1='117' y1='74' x2='117' y2='94' stroke='#f59e0b' stroke-width='2.2' stroke-linecap='round'/><line x1='124' y1='74' x2='124' y2='94' stroke='#f59e0b' stroke-width='2.2' stroke-linecap='round'/><line x1='8' y1='98' x2='292' y2='98' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.5'/><line x1='100' y1='10' x2='100' y2='100' stroke='#94a3b8' stroke-width='0.8'/></svg>"
            },
            {
                "id": "haeufk7l1_test_2",
                "category": "kurs_haeuf_k7_l1",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zufall_k7",
                "difficulty": "mittel",
                "points": 10,
                "question": "15 von 60 Losen gewinnen. Wie groß ist die relative Häufigkeit der Gewinne in Prozent?",
                "answers": [
                    "25 %",
                    "15 %",
                    "45 %",
                    "4 %"
                ],
                "correct": 0,
                "explanation": "15 ÷ 60 = 0,25 = 25 %."
            },
            {
                "id": "haeufk7l1_test_3",
                "category": "kurs_haeuf_k7_l1",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zufall_k7",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl kann keine relative Häufigkeit sein?",
                "answers": [
                    "1,2",
                    "0,8",
                    "0",
                    "1"
                ],
                "correct": 0,
                "explanation": "Eine relative Häufigkeit liegt immer zwischen 0 und 1. Mehr als alle Versuche kann ein Ergebnis nicht haben, darum ist 1,2 unmöglich."
            },
            {
                "id": "haeufk7l1_test_4",
                "category": "kurs_haeuf_k7_l1",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zufall_k7",
                "difficulty": "mittel",
                "points": 10,
                "question": "20 Kinder nennen ihr Lieblingsobst. Wie groß ist die relative Häufigkeit von Banane?",
                "answers": [
                    "0,4",
                    "0,8",
                    "8",
                    "0,2"
                ],
                "correct": 0,
                "explanation": "8 von 20 Kindern mögen Banane am liebsten: 8 ÷ 20 = 0,4.",
                "grafik": "<svg viewBox='0 0 320 190' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='44' y1='160.0' x2='310' y2='160.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='164.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='44' y1='134.0' x2='310' y2='134.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='138.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>2</text><line x1='44' y1='108.0' x2='310' y2='108.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='112.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>4</text><line x1='44' y1='82.0' x2='310' y2='82.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='86.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>6</text><line x1='44' y1='56.0' x2='310' y2='56.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='60.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>8</text><line x1='44' y1='30.0' x2='310' y2='30.0' stroke='#94a3b8' stroke-width='0.6' stroke-opacity='0.45'/><text x='38.0' y='34.0' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>10</text><rect x='57.3' y='82.0' width='39.9' height='78.0' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='1.5'/><text x='77.2' y='176.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Apfel</text><rect x='123.8' y='56.0' width='39.9' height='104.0' fill='rgba(245,158,11,0.6)' stroke='#f59e0b' stroke-width='1.5'/><text x='143.8' y='176.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Banane</text><rect x='190.3' y='108.0' width='39.9' height='52.0' fill='rgba(167,139,250,0.6)' stroke='#a78bfa' stroke-width='1.5'/><text x='210.2' y='176.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Erdbeere</text><rect x='256.8' y='134.0' width='39.9' height='26.0' fill='rgba(16,185,129,0.6)' stroke='#10b981' stroke-width='1.5'/><text x='276.8' y='176.0' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Kiwi</text><line x1='44' y1='160' x2='310' y2='160' stroke='#94a3b8' stroke-width='1.5'/><line x1='44' y1='22' x2='44' y2='160' stroke='#94a3b8' stroke-width='1.5'/><text x='8.0' y='18.0' text-anchor='start' font-size='10' fill='#94a3b8' font-family='sans-serif'>Anzahl</text></svg>"
            },
            {
                "id": "haeufk7l1_test_5",
                "category": "kurs_haeuf_k7_l1",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zufall_k7",
                "difficulty": "mittel",
                "points": 10,
                "question": "Der orange Kreisteil hat 108°. Welchem Anteil entspricht das?",
                "answers": [
                    "30 %",
                    "108 %",
                    "10,8 %",
                    "36 %"
                ],
                "correct": 0,
                "explanation": "108° ÷ 360° = 0,3 = 30 %.",
                "grafik": "<svg viewBox='0 0 170 170' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M85 85L85.0 13.0A72 72 0 0 1 153.5 107.2Z' fill='rgba(245,158,11,0.6)' stroke='#0f172a' stroke-width='2'/><text x='121.1' y='62.8' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>108°</text><path d='M85 85L153.5 107.2A72 72 0 0 1 13.0 85.0Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M85 85L13.0 85.0A72 72 0 0 1 85.0 13.0Z' fill='rgba(167,139,250,0.6)' stroke='#0f172a' stroke-width='2'/></svg>"
            },
            {
                "id": "haeufk7l1_test_6",
                "category": "kurs_haeuf_k7_l1",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zufall_k7",
                "difficulty": "mittel",
                "points": 10,
                "question": "Finn wirft 10-mal eine Münze und hat 7-mal Kopf. Was stimmt?",
                "answers": [
                    "Bei 10 Würfen ist das möglich",
                    "Die Münze ist sicher gezinkt",
                    "Als Nächstes kommt sicher Zahl",
                    "Die rel. Häufigkeit ist 7 %"
                ],
                "correct": 0,
                "explanation": "Bei wenigen Würfen schwankt das Ergebnis stark, 7 von 10 ist gut möglich. Die relative Häufigkeit ist 7/10 = 70 %."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "laplace_k7_l2",
        "kurs": "haeufigkeit_k7",
        "order": 2,
        "icon": "🎲",
        "title": "Wahrscheinlichkeit bei Laplace-Experimenten",
        "kurz": "Günstige durch mögliche Ergebnisse",
        "erklaerung": {
            "intro": "Ein Zufallsexperiment, bei dem alle Ergebnisse <b>gleich wahrscheinlich</b> sind, heißt <b>Laplace-Experiment</b> – zum Beispiel ein fairer Würfel, eine Münze oder ein Glücksrad mit gleich großen Feldern. Dann gilt: <b>P = günstige Ergebnisse ÷ mögliche Ergebnisse</b>. Jede Wahrscheinlichkeit liegt zwischen <b>0</b> (unmöglich) und <b>1</b> (sicher). Für das <b>Gegenereignis</b> „nicht E“ gilt: P(nicht E) = 1 − P(E).",
            "merksatz": "P = günstige ÷ mögliche Ergebnisse – aber nur, wenn alle Ergebnisse gleich wahrscheinlich sind.",
            "beispiele": [
                "Würfel: Günstig für „gerade Zahl“ sind 2, 4 und 6. P(gerade) = 3/6 = 1/2.<svg viewBox='0 0 344 66' style='width:100%;max-width:344px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='10' width='46' height='46' rx='8' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><circle cx='31.0' cy='33.0' r='3.7' fill='#e5e7eb'/><rect x='64' y='10' width='46' height='46' rx='8' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><circle cx='75.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='99.0' cy='45.0' r='3.7' fill='#e5e7eb'/><rect x='120' y='10' width='46' height='46' rx='8' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><circle cx='131.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='143.0' cy='33.0' r='3.7' fill='#e5e7eb'/><circle cx='155.0' cy='45.0' r='3.7' fill='#e5e7eb'/><rect x='176' y='10' width='46' height='46' rx='8' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><circle cx='187.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='211.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='187.0' cy='45.0' r='3.7' fill='#e5e7eb'/><circle cx='211.0' cy='45.0' r='3.7' fill='#e5e7eb'/><rect x='232' y='10' width='46' height='46' rx='8' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><circle cx='243.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='267.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='255.0' cy='33.0' r='3.7' fill='#e5e7eb'/><circle cx='243.0' cy='45.0' r='3.7' fill='#e5e7eb'/><circle cx='267.0' cy='45.0' r='3.7' fill='#e5e7eb'/><rect x='288' y='10' width='46' height='46' rx='8' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><circle cx='299.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='323.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='299.0' cy='33.0' r='3.7' fill='#e5e7eb'/><circle cx='323.0' cy='33.0' r='3.7' fill='#e5e7eb'/><circle cx='299.0' cy='45.0' r='3.7' fill='#e5e7eb'/><circle cx='323.0' cy='45.0' r='3.7' fill='#e5e7eb'/></svg>",
                "Glücksrad mit 8 gleich großen Feldern, 3 davon rot: P(rot) = 3/8 = 0,375 = 37,5 %.<svg viewBox='0 0 200 180' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M100 96L100.0 18.0A78 78 0 0 1 155.2 40.8Z' fill='rgba(244,63,94,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L155.2 40.8A78 78 0 0 1 178.0 96.0Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L178.0 96.0A78 78 0 0 1 155.2 151.2Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L155.2 151.2A78 78 0 0 1 100.0 174.0Z' fill='rgba(244,63,94,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L100.0 174.0A78 78 0 0 1 44.8 151.2Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L44.8 151.2A78 78 0 0 1 22.0 96.0Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L22.0 96.0A78 78 0 0 1 44.8 40.8Z' fill='rgba(244,63,94,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L44.8 40.8A78 78 0 0 1 100.0 18.0Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><circle cx='100' cy='96' r='78' fill='none' stroke='#94a3b8' stroke-width='2'/><circle cx='100' cy='96' r='5' fill='#e5e7eb'/><polygon points='91,4 109,4 100,22' fill='#e5e7eb'/></svg>",
                "Urne mit 4 blauen und 6 roten Kugeln: P(blau) = 4/10 = 0,4. Gegenereignis: P(nicht blau) = 1 − 0,4 = 0,6.<svg viewBox='0 0 280 180' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M50 30 L50 150 Q50 170 70 170 L210 170 Q230 170 230 150 L230 30' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='3'/><line x1='40' y1='30' x2='60' y2='30' stroke='#94a3b8' stroke-width='3'/><line x1='220' y1='30' x2='240' y2='30' stroke='#94a3b8' stroke-width='3'/><circle cx='65' cy='150' r='12' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='2'/><circle cx='95' cy='150' r='12' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='2'/><circle cx='125' cy='150' r='12' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='2'/><circle cx='155' cy='150' r='12' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='2'/><circle cx='185' cy='150' r='12' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='2'/><circle cx='215' cy='150' r='12' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='2'/><circle cx='101' cy='123' r='12' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='2'/><circle cx='131' cy='123' r='12' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='2'/><circle cx='161' cy='123' r='12' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='2'/><circle cx='191' cy='123' r='12' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='2'/></svg>",
                "⚠️ Sind die Felder verschieden groß, ist es <b>kein</b> Laplace-Experiment. Dann darfst du nicht einfach Felder zählen."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "laplacek7l2u_leicht_1",
                    "category": "kurs_laplace_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie groß ist die Wahrscheinlichkeit für eine 4 beim fairen Würfel?",
                    "answers": [
                        "1/6",
                        "1/4",
                        "4/6",
                        "1/2"
                    ],
                    "correct": 0,
                    "explanation": "Es gibt 6 gleich wahrscheinliche Ergebnisse, davon ist eins günstig. P(4) = 1/6."
                },
                {
                    "id": "laplacek7l2u_leicht_2",
                    "category": "kurs_laplace_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Das Glücksrad hat 6 gleich große Felder. Wie groß ist P(grün)?",
                    "answers": [
                        "1/3",
                        "2/4",
                        "1/6",
                        "2/3"
                    ],
                    "correct": 0,
                    "explanation": "2 von 6 Feldern sind grün: P(grün) = 2/6 = 1/3. Du teilst durch alle Felder, nicht durch die übrigen.",
                    "grafik": "<svg viewBox='0 0 200 180' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M100 96L100.0 18.0A78 78 0 0 1 167.5 57.0Z' fill='rgba(16,185,129,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L167.5 57.0A78 78 0 0 1 167.5 135.0Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L167.5 135.0A78 78 0 0 1 100.0 174.0Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L100.0 174.0A78 78 0 0 1 32.5 135.0Z' fill='rgba(16,185,129,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L32.5 135.0A78 78 0 0 1 32.5 57.0Z' fill='rgba(245,158,11,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L32.5 57.0A78 78 0 0 1 100.0 18.0Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><circle cx='100' cy='96' r='78' fill='none' stroke='#94a3b8' stroke-width='2'/><circle cx='100' cy='96' r='5' fill='#e5e7eb'/><polygon points='91,4 109,4 100,22' fill='#e5e7eb'/></svg>"
                },
                {
                    "id": "laplacek7l2u_leicht_3",
                    "category": "kurs_laplace_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Wahrscheinlichkeit hat ein unmögliches Ereignis?",
                    "answers": [
                        "0",
                        "1",
                        "−1",
                        "0,5"
                    ],
                    "correct": 0,
                    "explanation": "Unmöglich bedeutet: Es tritt nie ein. Die Wahrscheinlichkeit ist 0. Sicher wäre 1."
                },
                {
                    "id": "laplacek7l2u_leicht_4",
                    "category": "kurs_laplace_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Noah zieht blind eine Kugel. Wie groß ist P(rot)?",
                    "answers": [
                        "3/10",
                        "3/7",
                        "7/10",
                        "1/3"
                    ],
                    "correct": 0,
                    "explanation": "In der Urne sind 10 Kugeln, 3 davon rot. P(rot) = 3/10.",
                    "grafik": "<svg viewBox='0 0 280 180' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M50 30 L50 150 Q50 170 70 170 L210 170 Q230 170 230 150 L230 30' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='3'/><line x1='40' y1='30' x2='60' y2='30' stroke='#94a3b8' stroke-width='3'/><line x1='220' y1='30' x2='240' y2='30' stroke='#94a3b8' stroke-width='3'/><circle cx='65' cy='150' r='12' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='2'/><circle cx='95' cy='150' r='12' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='2'/><circle cx='125' cy='150' r='12' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='2'/><circle cx='155' cy='150' r='12' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='2'/><circle cx='185' cy='150' r='12' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='2'/><circle cx='215' cy='150' r='12' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='2'/><circle cx='101' cy='123' r='12' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='2'/><circle cx='131' cy='123' r='12' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='2'/><circle cx='161' cy='123' r='12' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='2'/><circle cx='191' cy='123' r='12' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='2'/></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "laplacek7l2u_mittel_1",
                    "category": "kurs_laplace_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie groß ist beim Würfel P(Zahl größer als 4)?",
                    "answers": [
                        "1/3",
                        "1/2",
                        "2/3",
                        "1/6"
                    ],
                    "correct": 0,
                    "explanation": "Größer als 4 sind nur 5 und 6. P = 2/6 = 1/3. Die 4 selbst zählt nicht mit.",
                    "grafik": "<svg viewBox='0 0 344 66' style='width:100%;max-width:344px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='10' width='46' height='46' rx='8' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><circle cx='31.0' cy='33.0' r='3.7' fill='#e5e7eb'/><rect x='64' y='10' width='46' height='46' rx='8' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><circle cx='75.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='99.0' cy='45.0' r='3.7' fill='#e5e7eb'/><rect x='120' y='10' width='46' height='46' rx='8' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><circle cx='131.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='143.0' cy='33.0' r='3.7' fill='#e5e7eb'/><circle cx='155.0' cy='45.0' r='3.7' fill='#e5e7eb'/><rect x='176' y='10' width='46' height='46' rx='8' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><circle cx='187.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='211.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='187.0' cy='45.0' r='3.7' fill='#e5e7eb'/><circle cx='211.0' cy='45.0' r='3.7' fill='#e5e7eb'/><rect x='232' y='10' width='46' height='46' rx='8' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><circle cx='243.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='267.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='255.0' cy='33.0' r='3.7' fill='#e5e7eb'/><circle cx='243.0' cy='45.0' r='3.7' fill='#e5e7eb'/><circle cx='267.0' cy='45.0' r='3.7' fill='#e5e7eb'/><rect x='288' y='10' width='46' height='46' rx='8' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><circle cx='299.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='323.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='299.0' cy='33.0' r='3.7' fill='#e5e7eb'/><circle cx='323.0' cy='33.0' r='3.7' fill='#e5e7eb'/><circle cx='299.0' cy='45.0' r='3.7' fill='#e5e7eb'/><circle cx='323.0' cy='45.0' r='3.7' fill='#e5e7eb'/></svg>"
                },
                {
                    "id": "laplacek7l2u_mittel_2",
                    "category": "kurs_laplace_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Experiment ist ein Laplace-Experiment?",
                    "answers": [
                        "fairen Würfel werfen",
                        "Reißzwecke werfen",
                        "Wetter von morgen",
                        "Rad mit ungleichen Feldern"
                    ],
                    "correct": 0,
                    "explanation": "Nur beim fairen Würfel sind alle Ergebnisse gleich wahrscheinlich. Eine Reißzwecke landet z. B. nicht gleich oft auf Spitze und Kopf."
                },
                {
                    "id": "laplacek7l2u_mittel_3",
                    "category": "kurs_laplace_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "P(rot) = 0,35. Wie groß ist P(nicht rot)?",
                    "answers": [
                        "0,65",
                        "0,35",
                        "1,35",
                        "0,75"
                    ],
                    "correct": 0,
                    "explanation": "Gegenereignis: P(nicht rot) = 1 − 0,35 = 0,65."
                },
                {
                    "id": "laplacek7l2u_mittel_4",
                    "category": "kurs_laplace_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Das Rad hat 8 gleich große Felder. Wie groß ist P(Primzahl)?",
                    "answers": [
                        "1/2",
                        "3/8",
                        "5/8",
                        "1/4"
                    ],
                    "correct": 0,
                    "explanation": "Primzahlen von 1 bis 8 sind 2, 3, 5 und 7 – also 4 Felder. P = 4/8 = 1/2. Die 1 ist keine Primzahl.",
                    "grafik": "<svg viewBox='0 0 200 180' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M100 96L100.0 18.0A78 78 0 0 1 155.2 40.8Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><text x='120.3' y='52.0' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1</text><path d='M100 96L155.2 40.8A78 78 0 0 1 178.0 96.0Z' fill='rgba(167,139,250,0.6)' stroke='#0f172a' stroke-width='2'/><text x='149.0' y='80.7' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2</text><path d='M100 96L178.0 96.0A78 78 0 0 1 155.2 151.2Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><text x='149.0' y='121.3' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>3</text><path d='M100 96L155.2 151.2A78 78 0 0 1 100.0 174.0Z' fill='rgba(167,139,250,0.6)' stroke='#0f172a' stroke-width='2'/><text x='120.3' y='150.0' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>4</text><path d='M100 96L100.0 174.0A78 78 0 0 1 44.8 151.2Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><text x='79.7' y='150.0' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5</text><path d='M100 96L44.8 151.2A78 78 0 0 1 22.0 96.0Z' fill='rgba(167,139,250,0.6)' stroke='#0f172a' stroke-width='2'/><text x='51.0' y='121.3' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>6</text><path d='M100 96L22.0 96.0A78 78 0 0 1 44.8 40.8Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><text x='51.0' y='80.7' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>7</text><path d='M100 96L44.8 40.8A78 78 0 0 1 100.0 18.0Z' fill='rgba(167,139,250,0.6)' stroke='#0f172a' stroke-width='2'/><text x='79.7' y='52.0' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>8</text><circle cx='100' cy='96' r='78' fill='none' stroke='#94a3b8' stroke-width='2'/><circle cx='100' cy='96' r='5' fill='#e5e7eb'/><polygon points='91,4 109,4 100,22' fill='#e5e7eb'/></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "laplacek7l2u_schwer_1",
                    "category": "kurs_laplace_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Du ziehst einen Buchstaben aus dem Wort „BANANE“. Wie groß ist P(A)?",
                    "answers": [
                        "1/3",
                        "1/6",
                        "1/4",
                        "2/5"
                    ],
                    "correct": 0,
                    "explanation": "BANANE hat 6 Buchstaben, 2 davon sind A. P(A) = 2/6 = 1/3. Gezählt werden alle Buchstaben, nicht nur die verschiedenen."
                },
                {
                    "id": "laplacek7l2u_schwer_2",
                    "category": "kurs_laplace_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie groß ist P(nicht blau) bei dieser Urne?",
                    "answers": [
                        "7/10",
                        "3/10",
                        "5/10",
                        "7/3"
                    ],
                    "correct": 0,
                    "explanation": "3 von 10 Kugeln sind blau. Nicht blau sind 10 − 3 = 7 Kugeln: P = 7/10 = 1 − 3/10.",
                    "grafik": "<svg viewBox='0 0 280 180' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M50 30 L50 150 Q50 170 70 170 L210 170 Q230 170 230 150 L230 30' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='3'/><line x1='40' y1='30' x2='60' y2='30' stroke='#94a3b8' stroke-width='3'/><line x1='220' y1='30' x2='240' y2='30' stroke='#94a3b8' stroke-width='3'/><circle cx='65' cy='150' r='12' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='2'/><circle cx='95' cy='150' r='12' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='2'/><circle cx='125' cy='150' r='12' fill='rgba(16,185,129,0.6)' stroke='#10b981' stroke-width='2'/><circle cx='155' cy='150' r='12' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='2'/><circle cx='185' cy='150' r='12' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='2'/><circle cx='215' cy='150' r='12' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='2'/><circle cx='101' cy='123' r='12' fill='rgba(16,185,129,0.6)' stroke='#10b981' stroke-width='2'/><circle cx='131' cy='123' r='12' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='2'/><circle cx='161' cy='123' r='12' fill='rgba(56,189,248,0.6)' stroke='#38bdf8' stroke-width='2'/><circle cx='191' cy='123' r='12' fill='rgba(244,63,94,0.6)' stroke='#f43f5e' stroke-width='2'/></svg>"
                },
                {
                    "id": "laplacek7l2u_schwer_3",
                    "category": "kurs_laplace_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Rad hat gleich große Felder, eins ist rot. P(rot) = 0,2. Wie viele Felder hat es?",
                    "answers": [
                        "5",
                        "20",
                        "2",
                        "10"
                    ],
                    "correct": 0,
                    "explanation": "0,2 = 1/5. Wenn 1 Feld von allen ein Fünftel ist, hat das Rad 5 Felder."
                },
                {
                    "id": "laplacek7l2u_schwer_4",
                    "category": "kurs_laplace_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zufall_k7",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Aylin sagt: „P(6) = 1/6, also kommt in 6 Würfen genau eine 6.“ Was stimmt?",
                    "answers": [
                        "Nein, nur bei vielen Würfen etwa",
                        "Ja, genau so ist P definiert",
                        "Ja, aber nur bei fairem Würfel",
                        "Nein, es sind mindestens zwei"
                    ],
                    "correct": 0,
                    "explanation": "Die Wahrscheinlichkeit sagt nichts Sicheres über wenige Würfe. In 6 Würfen kann es keine, eine oder mehrere Sechsen geben."
                }
            ]
        },
        "test": [
            {
                "id": "laplacek7l2_test_1",
                "category": "kurs_laplace_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zufall_k7",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie groß ist beim fairen Würfel P(1 oder 2)?",
                "answers": [
                    "1/3",
                    "1/6",
                    "2/3",
                    "1/2"
                ],
                "correct": 0,
                "explanation": "Günstig sind 2 von 6 Ergebnissen: P = 2/6 = 1/3.",
                "grafik": "<svg viewBox='0 0 344 66' style='width:100%;max-width:344px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='10' width='46' height='46' rx='8' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><circle cx='31.0' cy='33.0' r='3.7' fill='#e5e7eb'/><rect x='64' y='10' width='46' height='46' rx='8' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><circle cx='75.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='99.0' cy='45.0' r='3.7' fill='#e5e7eb'/><rect x='120' y='10' width='46' height='46' rx='8' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><circle cx='131.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='143.0' cy='33.0' r='3.7' fill='#e5e7eb'/><circle cx='155.0' cy='45.0' r='3.7' fill='#e5e7eb'/><rect x='176' y='10' width='46' height='46' rx='8' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><circle cx='187.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='211.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='187.0' cy='45.0' r='3.7' fill='#e5e7eb'/><circle cx='211.0' cy='45.0' r='3.7' fill='#e5e7eb'/><rect x='232' y='10' width='46' height='46' rx='8' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><circle cx='243.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='267.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='255.0' cy='33.0' r='3.7' fill='#e5e7eb'/><circle cx='243.0' cy='45.0' r='3.7' fill='#e5e7eb'/><circle cx='267.0' cy='45.0' r='3.7' fill='#e5e7eb'/><rect x='288' y='10' width='46' height='46' rx='8' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><circle cx='299.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='323.0' cy='21.0' r='3.7' fill='#e5e7eb'/><circle cx='299.0' cy='33.0' r='3.7' fill='#e5e7eb'/><circle cx='323.0' cy='33.0' r='3.7' fill='#e5e7eb'/><circle cx='299.0' cy='45.0' r='3.7' fill='#e5e7eb'/><circle cx='323.0' cy='45.0' r='3.7' fill='#e5e7eb'/></svg>"
            },
            {
                "id": "laplacek7l2_test_2",
                "category": "kurs_laplace_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zufall_k7",
                "difficulty": "mittel",
                "points": 10,
                "question": "Das Glücksrad hat 10 gleich große Felder. Wie groß ist P(blau)?",
                "answers": [
                    "40 %",
                    "4 %",
                    "25 %",
                    "10 %"
                ],
                "correct": 0,
                "explanation": "4 von 10 Feldern sind blau: 4/10 = 0,4 = 40 %.",
                "grafik": "<svg viewBox='0 0 200 180' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M100 96L100.0 18.0A78 78 0 0 1 145.8 32.9Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L145.8 32.9A78 78 0 0 1 174.2 71.9Z' fill='rgba(244,63,94,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L174.2 71.9A78 78 0 0 1 174.2 120.1Z' fill='rgba(16,185,129,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L174.2 120.1A78 78 0 0 1 145.8 159.1Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L145.8 159.1A78 78 0 0 1 100.0 174.0Z' fill='rgba(244,63,94,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L100.0 174.0A78 78 0 0 1 54.2 159.1Z' fill='rgba(245,158,11,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L54.2 159.1A78 78 0 0 1 25.8 120.1Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L25.8 120.1A78 78 0 0 1 25.8 71.9Z' fill='rgba(16,185,129,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L25.8 71.9A78 78 0 0 1 54.2 32.9Z' fill='rgba(244,63,94,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L54.2 32.9A78 78 0 0 1 100.0 18.0Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><circle cx='100' cy='96' r='78' fill='none' stroke='#94a3b8' stroke-width='2'/><circle cx='100' cy='96' r='5' fill='#e5e7eb'/><polygon points='91,4 109,4 100,22' fill='#e5e7eb'/></svg>"
            },
            {
                "id": "laplacek7l2_test_3",
                "category": "kurs_laplace_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zufall_k7",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Wert kann keine Wahrscheinlichkeit sein?",
                "answers": [
                    "5/4",
                    "4/5",
                    "0",
                    "1"
                ],
                "correct": 0,
                "explanation": "5/4 = 1,25 ist größer als 1. Wahrscheinlichkeiten liegen immer zwischen 0 und 1."
            },
            {
                "id": "laplacek7l2_test_4",
                "category": "kurs_laplace_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zufall_k7",
                "difficulty": "mittel",
                "points": 10,
                "question": "Jonas zieht eine Kugel. Wie groß ist P(nicht grün)?",
                "answers": [
                    "3/4",
                    "1/4",
                    "2/6",
                    "6/2"
                ],
                "correct": 0,
                "explanation": "Von 8 Kugeln sind 6 nicht grün: P = 6/8 = 3/4. Oder: 1 − 2/8 = 3/4.",
                "grafik": "<svg viewBox='0 0 280 180' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M50 30 L50 150 Q50 170 70 170 L210 170 Q230 170 230 150 L230 30' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='3'/><line x1='40' y1='30' x2='60' y2='30' stroke='#94a3b8' stroke-width='3'/><line x1='220' y1='30' x2='240' y2='30' stroke='#94a3b8' stroke-width='3'/><circle cx='65' cy='150' r='12' fill='rgba(245,158,11,0.6)' stroke='#f59e0b' stroke-width='2'/><circle cx='95' cy='150' r='12' fill='rgba(16,185,129,0.6)' stroke='#10b981' stroke-width='2'/><circle cx='125' cy='150' r='12' fill='rgba(245,158,11,0.6)' stroke='#f59e0b' stroke-width='2'/><circle cx='155' cy='150' r='12' fill='rgba(245,158,11,0.6)' stroke='#f59e0b' stroke-width='2'/><circle cx='185' cy='150' r='12' fill='rgba(245,158,11,0.6)' stroke='#f59e0b' stroke-width='2'/><circle cx='215' cy='150' r='12' fill='rgba(16,185,129,0.6)' stroke='#10b981' stroke-width='2'/><circle cx='131' cy='123' r='12' fill='rgba(245,158,11,0.6)' stroke='#f59e0b' stroke-width='2'/><circle cx='161' cy='123' r='12' fill='rgba(245,158,11,0.6)' stroke='#f59e0b' stroke-width='2'/></svg>"
            },
            {
                "id": "laplacek7l2_test_5",
                "category": "kurs_laplace_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zufall_k7",
                "difficulty": "mittel",
                "points": 10,
                "question": "Das Rad hat drei Felder. Ist P(großes Feld) = 1/3?",
                "answers": [
                    "Nein, die Felder sind ungleich groß",
                    "Ja, denn es gibt genau drei Felder",
                    "Ja, P ist immer 1 ÷ Anzahl Felder",
                    "Nein, denn P ist hier genau 1/4"
                ],
                "correct": 0,
                "explanation": "Die Laplace-Regel gilt nur bei gleich großen Feldern. Das große Feld ist ein halber Kreis, also ist P = 1/2.",
                "grafik": "<svg viewBox='0 0 200 180' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M100 96L100.0 18.0A78 78 0 0 1 100.0 174.0Z' fill='rgba(56,189,248,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L100.0 174.0A78 78 0 0 1 22.0 96.0Z' fill='rgba(245,158,11,0.6)' stroke='#0f172a' stroke-width='2'/><path d='M100 96L22.0 96.0A78 78 0 0 1 100.0 18.0Z' fill='rgba(16,185,129,0.6)' stroke='#0f172a' stroke-width='2'/><circle cx='100' cy='96' r='78' fill='none' stroke='#94a3b8' stroke-width='2'/><circle cx='100' cy='96' r='5' fill='#e5e7eb'/><polygon points='91,4 109,4 100,22' fill='#e5e7eb'/></svg>"
            },
            {
                "id": "laplacek7l2_test_6",
                "category": "kurs_laplace_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zufall_k7",
                "difficulty": "mittel",
                "points": 10,
                "question": "In einer Urne sind 12 Kugeln. P(rot) = 1/4. Wie viele rote Kugeln sind darin?",
                "answers": [
                    "3",
                    "4",
                    "8",
                    "9"
                ],
                "correct": 0,
                "explanation": "Ein Viertel von 12 ist 12 : 4 = 3."
            }
        ],
        "bestehenAb": 0.8
    }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) {
        extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    }
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
    }
})();
