// Sinusfunktion, Sinus-/Kosinussatz anwenden, Kugel anwenden - Klasse 10 Mathe
(function () {
    const extraKurse = [
    {
        "id": "sinusfunktion_k10",
        "title": "Die Sinusfunktion",
        "icon": "〰️",
        "grade": 10,
        "subject": "mathe",
        "beschreibung": "Sinus am Einheitskreis und die Sinuskurve mit Periode und Amplitude."
    }
];
    const extraLektionen = [
    {
        "id": "sinfkt_k10_l1",
        "kurs": "sinusfunktion_k10",
        "order": 1,
        "icon": "⭕",
        "title": "Sinus am Einheitskreis",
        "kurz": "sin und cos als Koordinaten",
        "erklaerung": {
            "intro": "Am <b>Einheitskreis</b> (Radius 1) dreht sich ein Punkt P um den Winkel α – ab der positiven x-Achse gegen den Uhrzeigersinn. Seine Koordinaten sind <b>P(cos α | sin α)</b>. So gibt es Sinus und Kosinus auch für Winkel über 90°. Liegt P unter der x-Achse, ist sin α <b>negativ</b>.",
            "merksatz": "Am Einheitskreis ist sin α die y-Koordinate und cos α die x-Koordinate von P.",
            "beispiele": [
                "⭕ P bei α = 50°: Die lila Strecke ist sin α, die orange ist cos α.<svg viewBox='0 0 240 205' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='105' x2='222' y2='105' stroke='#94a3b8' stroke-width='1.2'/><line x1='120' y1='196' x2='120' y2='12' stroke='#94a3b8' stroke-width='1.2'/><polygon points='226,105 218,101 218,109' fill='#94a3b8'/><polygon points='120,8 116,16 124,16' fill='#94a3b8'/><text x='230' y='120' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>x</text><text x='132' y='14' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>y</text><circle cx='120' cy='105' r='78' fill='none' fill-opacity='0.4' stroke='#38bdf8' stroke-width='2'/><text x='204' y='119' text-anchor='start' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='114' y='23' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='38' y='119' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><text x='114' y='196' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><line x1='170.1' y1='45.2' x2='170.1' y2='105' stroke='#a78bfa' stroke-width='2' stroke-dasharray='4,3'/><line x1='170.1' y1='105' x2='120' y2='105' stroke='#f59e0b' stroke-width='3'/><line x1='120' y1='105' x2='170.1' y2='45.2' stroke='#e5e7eb' stroke-width='2'/><path d='M142 105 A22 22 0 0 0 134.1 88.1' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='149.908' y='95.0536' text-anchor='middle' font-size='12' fill='#f59e0b' font-family='sans-serif'>α</text><circle cx='170.1' cy='45.2' r='4.5' fill='#f43f5e'/><text x='180.137' y='37.2485' text-anchor='start' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>P</text><text x='145.069' y='120' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>cos α</text><text x='202' y='79.1243' text-anchor='start' font-size='11' fill='#a78bfa' font-family='sans-serif'>sin α</text></svg>",
                "📍 Besondere Werte: sin 30° = 0,5 und sin 180° = 0.",
                "🪞 Spiegeln an der y-Achse: sin(180° − α) = sin α. Beispiel: sin 120° = sin 60° ≈ 0,87.",
                "📐 Ausblick Bogenmaß: Ein halber Kreis ist π lang. Also π ≙ 180°."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "sinfktk10l1u_leicht_1",
                    "category": "kurs_sinfkt_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Der Einheitskreis hat seinen Mittelpunkt im Ursprung. Wie groß ist sein Radius?",
                    "answers": [
                        "1",
                        "2",
                        "0,5",
                        "π"
                    ],
                    "correct": 0,
                    "explanation": "Beim Einheitskreis ist der Radius genau 1. Die 2 wäre der Durchmesser."
                },
                {
                    "id": "sinfktk10l1u_leicht_2",
                    "category": "kurs_sinfkt_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Der Punkt P liegt auf dem Einheitskreis. Welche Koordinate von P ist sin α?",
                    "answers": [
                        "die y-Koordinate",
                        "die x-Koordinate",
                        "der Abstand zu O",
                        "der Bogen bis P"
                    ],
                    "correct": 0,
                    "explanation": "P hat die Koordinaten (cos α | sin α). Der Sinus ist also die Höhe, die y-Koordinate.",
                    "grafik": "<svg viewBox='0 0 240 205' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='105' x2='222' y2='105' stroke='#94a3b8' stroke-width='1.2'/><line x1='120' y1='196' x2='120' y2='12' stroke='#94a3b8' stroke-width='1.2'/><polygon points='226,105 218,101 218,109' fill='#94a3b8'/><polygon points='120,8 116,16 124,16' fill='#94a3b8'/><text x='230' y='120' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>x</text><text x='132' y='14' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>y</text><circle cx='120' cy='105' r='78' fill='none' fill-opacity='0.4' stroke='#38bdf8' stroke-width='2'/><text x='204' y='119' text-anchor='start' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='114' y='23' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='38' y='119' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><text x='114' y='196' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><line x1='179.8' y1='54.9' x2='179.8' y2='105' stroke='#a78bfa' stroke-width='2' stroke-dasharray='4,3'/><line x1='179.8' y1='105' x2='120' y2='105' stroke='#f59e0b' stroke-width='3'/><line x1='120' y1='105' x2='179.8' y2='54.9' stroke='#e5e7eb' stroke-width='2'/><path d='M142 105 A22 22 0 0 0 136.9 90.9' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='151.01' y='97.7133' text-anchor='middle' font-size='12' fill='#f59e0b' font-family='sans-serif'>α</text><circle cx='179.8' cy='54.9' r='4.5' fill='#f43f5e'/><text x='189.751' y='46.8626' text-anchor='start' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>P</text></svg>"
                },
                {
                    "id": "sinfktk10l1u_leicht_3",
                    "category": "kurs_sinfkt_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie groß ist sin 90°?",
                    "answers": [
                        "1",
                        "0",
                        "−1",
                        "0,5"
                    ],
                    "correct": 0,
                    "explanation": "Bei 90° steht P ganz oben im Punkt (0 | 1). Die y-Koordinate ist 1, also sin 90° = 1."
                },
                {
                    "id": "sinfktk10l1u_leicht_4",
                    "category": "kurs_sinfkt_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Der Winkel α beträgt 130°. In welchem Quadranten liegt dann der Punkt P?",
                    "answers": [
                        "im II. Quadranten",
                        "im I. Quadranten",
                        "im III. Quadranten",
                        "im IV. Quadranten"
                    ],
                    "correct": 0,
                    "explanation": "Der II. Quadrant reicht von 90° bis 180°. 130° liegt dazwischen.",
                    "grafik": "<svg viewBox='0 0 240 205' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='105' x2='222' y2='105' stroke='#94a3b8' stroke-width='1.2'/><line x1='120' y1='196' x2='120' y2='12' stroke='#94a3b8' stroke-width='1.2'/><polygon points='226,105 218,101 218,109' fill='#94a3b8'/><polygon points='120,8 116,16 124,16' fill='#94a3b8'/><text x='230' y='120' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>x</text><text x='132' y='14' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>y</text><circle cx='120' cy='105' r='78' fill='rgba(56,189,248,0.25)' fill-opacity='0.4' stroke='#38bdf8' stroke-width='2'/><text x='204' y='119' text-anchor='start' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='114' y='23' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='38' y='119' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><text x='114' y='196' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><text x='158' y='73' text-anchor='middle' font-size='16' font-weight='700' fill='#f59e0b' font-family='sans-serif'>I</text><text x='82' y='73' text-anchor='middle' font-size='16' font-weight='700' fill='#f59e0b' font-family='sans-serif'>II</text><text x='82' y='149' text-anchor='middle' font-size='16' font-weight='700' fill='#f59e0b' font-family='sans-serif'>III</text><text x='158' y='149' text-anchor='middle' font-size='16' font-weight='700' fill='#f59e0b' font-family='sans-serif'>IV</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "sinfktk10l1u_mittel_1",
                    "category": "kurs_sinfkt_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie groß ist sin 270°?",
                    "answers": [
                        "−1",
                        "1",
                        "0",
                        "−0,5"
                    ],
                    "correct": 0,
                    "explanation": "Bei 270° steht P ganz unten im Punkt (0 | −1). Die y-Koordinate ist −1."
                },
                {
                    "id": "sinfktk10l1u_mittel_2",
                    "category": "kurs_sinfkt_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Es gilt sin 30° = 0,5. Wie groß ist dann sin 150°?",
                    "answers": [
                        "0,5",
                        "−0,5",
                        "0,87",
                        "−0,87"
                    ],
                    "correct": 0,
                    "explanation": "Es gilt sin(180° − α) = sin α. Wegen 180° − 30° = 150° ist sin 150° = sin 30° = 0,5."
                },
                {
                    "id": "sinfktk10l1u_mittel_3",
                    "category": "kurs_sinfkt_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Für welchen Winkel ist sin α negativ?",
                    "answers": [
                        "α = 200°",
                        "α = 100°",
                        "α = 170°",
                        "α = 80°"
                    ],
                    "correct": 0,
                    "explanation": "sin α ist negativ, wenn P unterhalb der x-Achse liegt – also im III. und IV. Quadranten (180° bis 360°). Nur 200° liegt dort.",
                    "grafik": "<svg viewBox='0 0 240 205' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='105' x2='222' y2='105' stroke='#94a3b8' stroke-width='1.2'/><line x1='120' y1='196' x2='120' y2='12' stroke='#94a3b8' stroke-width='1.2'/><polygon points='226,105 218,101 218,109' fill='#94a3b8'/><polygon points='120,8 116,16 124,16' fill='#94a3b8'/><text x='230' y='120' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>x</text><text x='132' y='14' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>y</text><circle cx='120' cy='105' r='78' fill='rgba(56,189,248,0.25)' fill-opacity='0.4' stroke='#38bdf8' stroke-width='2'/><text x='204' y='119' text-anchor='start' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='114' y='23' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='38' y='119' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><text x='114' y='196' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><text x='158' y='73' text-anchor='middle' font-size='16' font-weight='700' fill='#f59e0b' font-family='sans-serif'>I</text><text x='82' y='73' text-anchor='middle' font-size='16' font-weight='700' fill='#f59e0b' font-family='sans-serif'>II</text><text x='82' y='149' text-anchor='middle' font-size='16' font-weight='700' fill='#f59e0b' font-family='sans-serif'>III</text><text x='158' y='149' text-anchor='middle' font-size='16' font-weight='700' fill='#f59e0b' font-family='sans-serif'>IV</text></svg>"
                },
                {
                    "id": "sinfktk10l1u_mittel_4",
                    "category": "kurs_sinfkt_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Im Bogenmaß gilt π ≙ 180°. Welcher Winkel im Gradmaß gehört zu 3π/2?",
                    "answers": [
                        "270°",
                        "540°",
                        "135°",
                        "4,71°"
                    ],
                    "correct": 0,
                    "explanation": "π entspricht 180°, also π/2 entspricht 90°. 3π/2 = 3 · 90° = 270°."
                }
            ],
            "schwer": [
                {
                    "id": "sinfktk10l1u_schwer_1",
                    "category": "kurs_sinfkt_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Winkel zwischen 90° und 180° hat denselben Sinus wie 40°?",
                    "answers": [
                        "140°",
                        "130°",
                        "220°",
                        "320°"
                    ],
                    "correct": 0,
                    "explanation": "Es gilt sin(180° − α) = sin α. 180° − 40° = 140°. Beide Punkte liegen auf gleicher Höhe.",
                    "grafik": "<svg viewBox='0 0 240 205' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='105' x2='222' y2='105' stroke='#94a3b8' stroke-width='1.2'/><line x1='120' y1='196' x2='120' y2='12' stroke='#94a3b8' stroke-width='1.2'/><polygon points='226,105 218,101 218,109' fill='#94a3b8'/><polygon points='120,8 116,16 124,16' fill='#94a3b8'/><text x='230' y='120' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>x</text><text x='132' y='14' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>y</text><circle cx='120' cy='105' r='78' fill='none' fill-opacity='0.4' stroke='#38bdf8' stroke-width='2'/><text x='204' y='119' text-anchor='start' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='114' y='23' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='38' y='119' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><text x='114' y='196' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><line x1='30' y1='54.9' x2='210' y2='54.9' stroke='#10b981' stroke-width='1.3' stroke-dasharray='5,4'/><line x1='120' y1='105' x2='179.8' y2='54.9' stroke='#e5e7eb' stroke-width='2'/><path d='M142 105 A22 22 0 0 0 136.9 90.9' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='151.01' y='97.7133' text-anchor='middle' font-size='12' fill='#f59e0b' font-family='sans-serif'>α</text><circle cx='179.8' cy='54.9' r='4.5' fill='#f43f5e'/><text x='189.751' y='46.8626' text-anchor='start' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>P</text></svg>"
                },
                {
                    "id": "sinfktk10l1u_schwer_2",
                    "category": "kurs_sinfkt_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "P auf dem Einheitskreis hat die x-Koordinate −0,6 und liegt über der x-Achse. Wie groß ist sin α?",
                    "answers": [
                        "0,8",
                        "−0,8",
                        "0,4",
                        "0,6"
                    ],
                    "correct": 0,
                    "explanation": "Es gilt (cos α)² + (sin α)² = 1. Also (sin α)² = 1 − 0,36 = 0,64, sin α = 0,8 (positiv, weil P oben liegt)."
                },
                {
                    "id": "sinfktk10l1u_schwer_3",
                    "category": "kurs_sinfkt_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Winkel zwischen 0° und 360° haben genau sin α = 0,5?",
                    "answers": [
                        "zwei",
                        "einen",
                        "drei",
                        "vier"
                    ],
                    "correct": 0,
                    "explanation": "sin 30° = 0,5 und sin 150° = 0,5. Auf der Höhe 0,5 schneidet die Waagerechte den Kreis zweimal."
                },
                {
                    "id": "sinfktk10l1u_schwer_4",
                    "category": "kurs_sinfkt_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Aussage über sin 210° stimmt?",
                    "answers": [
                        "sin 210° = −0,5",
                        "sin 210° = 0,5",
                        "sin 210° = −0,87",
                        "sin 210° = 0,87"
                    ],
                    "correct": 0,
                    "explanation": "210° = 180° + 30°. P liegt im III. Quadranten so tief wie P bei 30° hoch liegt: sin 210° = −0,5."
                }
            ]
        },
        "test": [
            {
                "id": "sinfktk10l1_test_1",
                "category": "kurs_sinfkt_k10_l1",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was gibt cos α am Einheitskreis an?",
                "answers": [
                    "die x-Koordinate von P",
                    "die y-Koordinate von P",
                    "die Länge des Bogens",
                    "den Radius des Kreises"
                ],
                "correct": 0,
                "explanation": "P hat die Koordinaten (cos α | sin α). Der Kosinus ist die x-Koordinate.",
                "grafik": "<svg viewBox='0 0 240 205' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='105' x2='222' y2='105' stroke='#94a3b8' stroke-width='1.2'/><line x1='120' y1='196' x2='120' y2='12' stroke='#94a3b8' stroke-width='1.2'/><polygon points='226,105 218,101 218,109' fill='#94a3b8'/><polygon points='120,8 116,16 124,16' fill='#94a3b8'/><text x='230' y='120' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>x</text><text x='132' y='14' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>y</text><circle cx='120' cy='105' r='78' fill='none' fill-opacity='0.4' stroke='#38bdf8' stroke-width='2'/><text x='204' y='119' text-anchor='start' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='114' y='23' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='38' y='119' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><text x='114' y='196' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><line x1='159.0' y1='37.5' x2='159.0' y2='105' stroke='#a78bfa' stroke-width='2' stroke-dasharray='4,3'/><line x1='159.0' y1='105' x2='120' y2='105' stroke='#f59e0b' stroke-width='3'/><line x1='120' y1='105' x2='159.0' y2='37.5' stroke='#e5e7eb' stroke-width='2'/><path d='M142 105 A22 22 0 0 0 131.0 85.9' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='148.579' y='92.5' text-anchor='middle' font-size='12' fill='#f59e0b' font-family='sans-serif'>α</text><circle cx='159.0' cy='37.5' r='4.5' fill='#f43f5e'/><text x='169' y='29.45' text-anchor='start' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>P</text></svg>"
            },
            {
                "id": "sinfktk10l1_test_2",
                "category": "kurs_sinfkt_k10_l1",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie groß ist sin 0°?",
                "answers": [
                    "0",
                    "1",
                    "−1",
                    "0,5"
                ],
                "correct": 0,
                "explanation": "Bei 0° liegt P auf der x-Achse im Punkt (1 | 0). Die y-Koordinate ist 0."
            },
            {
                "id": "sinfktk10l1_test_3",
                "category": "kurs_sinfkt_k10_l1",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "In welchen Quadranten ist sin α positiv?",
                "answers": [
                    "im I. und II.",
                    "im I. und IV.",
                    "im I. und III.",
                    "nur im I."
                ],
                "correct": 0,
                "explanation": "sin α ist positiv, wenn P oberhalb der x-Achse liegt. Das ist im I. und II. Quadranten (0° bis 180°).",
                "grafik": "<svg viewBox='0 0 240 205' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='105' x2='222' y2='105' stroke='#94a3b8' stroke-width='1.2'/><line x1='120' y1='196' x2='120' y2='12' stroke='#94a3b8' stroke-width='1.2'/><polygon points='226,105 218,101 218,109' fill='#94a3b8'/><polygon points='120,8 116,16 124,16' fill='#94a3b8'/><text x='230' y='120' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>x</text><text x='132' y='14' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>y</text><circle cx='120' cy='105' r='78' fill='rgba(56,189,248,0.25)' fill-opacity='0.4' stroke='#38bdf8' stroke-width='2'/><text x='204' y='119' text-anchor='start' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='114' y='23' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='38' y='119' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><text x='114' y='196' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><text x='158' y='73' text-anchor='middle' font-size='16' font-weight='700' fill='#f59e0b' font-family='sans-serif'>I</text><text x='82' y='73' text-anchor='middle' font-size='16' font-weight='700' fill='#f59e0b' font-family='sans-serif'>II</text><text x='82' y='149' text-anchor='middle' font-size='16' font-weight='700' fill='#f59e0b' font-family='sans-serif'>III</text><text x='158' y='149' text-anchor='middle' font-size='16' font-weight='700' fill='#f59e0b' font-family='sans-serif'>IV</text></svg>"
            },
            {
                "id": "sinfktk10l1_test_4",
                "category": "kurs_sinfkt_k10_l1",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Winkel hat denselben Sinus wie 70°?",
                "answers": [
                    "110°",
                    "160°",
                    "250°",
                    "290°"
                ],
                "correct": 0,
                "explanation": "sin(180° − α) = sin α. 180° − 70° = 110°."
            },
            {
                "id": "sinfktk10l1_test_5",
                "category": "kurs_sinfkt_k10_l1",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Winkel im Gradmaß gehört zum Bogenmaß π/4?",
                "answers": [
                    "45°",
                    "90°",
                    "22,5°",
                    "0,79°"
                ],
                "correct": 0,
                "explanation": "π entspricht 180°. Ein Viertel davon, π/4, entspricht 180° : 4 = 45°."
            },
            {
                "id": "sinfktk10l1_test_6",
                "category": "kurs_sinfkt_k10_l1",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Der Punkt P liegt im III. Quadranten. Welche Vorzeichen haben cos α und sin α?",
                "answers": [
                    "beide negativ",
                    "beide positiv",
                    "cos −, sin +",
                    "cos +, sin −"
                ],
                "correct": 0,
                "explanation": "Im III. Quadranten liegt P links von der y-Achse und unter der x-Achse. Beide Koordinaten sind negativ.",
                "grafik": "<svg viewBox='0 0 240 205' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='105' x2='222' y2='105' stroke='#94a3b8' stroke-width='1.2'/><line x1='120' y1='196' x2='120' y2='12' stroke='#94a3b8' stroke-width='1.2'/><polygon points='226,105 218,101 218,109' fill='#94a3b8'/><polygon points='120,8 116,16 124,16' fill='#94a3b8'/><text x='230' y='120' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>x</text><text x='132' y='14' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>y</text><circle cx='120' cy='105' r='78' fill='none' fill-opacity='0.4' stroke='#38bdf8' stroke-width='2'/><text x='204' y='119' text-anchor='start' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='114' y='23' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>1</text><text x='38' y='119' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><text x='114' y='196' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>−1</text><line x1='64.8' y1='160.2' x2='64.8' y2='105' stroke='#a78bfa' stroke-width='2' stroke-dasharray='4,3'/><line x1='64.8' y1='105' x2='120' y2='105' stroke='#f59e0b' stroke-width='3'/><line x1='120' y1='105' x2='64.8' y2='160.2' stroke='#e5e7eb' stroke-width='2'/><path d='M142 105 A22 22 0 1 0 104.4 120.6' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='107.371' y='78.512' text-anchor='middle' font-size='12' fill='#f59e0b' font-family='sans-serif'>α</text><circle cx='64.8' cy='160.2' r='4.5' fill='#f43f5e'/><text x='54.8457' y='176.154' text-anchor='end' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>P</text></svg>"
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "sinfkt_k10_l2",
        "kurs": "sinusfunktion_k10",
        "order": 2,
        "icon": "〰️",
        "title": "Graph der Sinusfunktion",
        "kurz": "Periode, Amplitude, Streckung",
        "erklaerung": {
            "intro": "Trägt man zu jedem Winkel x den Wert sin x ab, entsteht die <b>Sinuskurve</b>. Sie wiederholt sich alle 360° – das ist die <b>Periode</b>. Sie schwankt zwischen −1 und 1, die <b>Amplitude</b> ist 1. Bei f(x) = a · sin(x) ist die Amplitude a, bei f(x) = sin(b · x) ist die Periode 360° : b.",
            "merksatz": "f(x) = a · sin(b · x): a gibt die Amplitude an, b die Periode 360° : b.",
            "beispiele": [
                "〰️ Der Graph von sin x von 0° bis 360°:<svg viewBox='0 0 340 150' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='18.0' x2='322' y2='18.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='22' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>1</text><line x1='40' y1='132.0' x2='322' y2='132.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='136' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>−1</text><line x1='110.5' y1='72.0' x2='110.5' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='110.5' y1='12' x2='110.5' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='110.5' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>90°</text><line x1='181.0' y1='72.0' x2='181.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='181.0' y1='12' x2='181.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='181' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>180°</text><line x1='251.5' y1='72.0' x2='251.5' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='251.5' y1='12' x2='251.5' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='251.5' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>270°</text><line x1='322.0' y1='72.0' x2='322.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='322.0' y1='12' x2='322.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='322' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>360°</text><line x1='40' y1='75.0' x2='332' y2='75.0' stroke='#94a3b8' stroke-width='1.2'/><line x1='40' y1='138' x2='40' y2='6' stroke='#94a3b8' stroke-width='1.2'/><polygon points='336,75.0 328,71.0 328,79.0' fill='#94a3b8'/><text x='334' y='68' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>x</text><text x='35' y='79' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0</text><polyline points='40,75 44.7,69 49.4,63.1 54.1,57.4 58.8,51.8 63.5,46.5 68.2,41.5 72.9,36.9 77.6,32.6 82.3,28.9 87,25.6 91.7,22.9 96.4,20.8 101.1,19.2 105.8,18.3 110.5,18 115.2,18.3 119.9,19.2 124.6,20.8 129.3,22.9 134,25.6 138.7,28.9 143.4,32.6 148.1,36.9 152.8,41.5 157.5,46.5 162.2,51.8 166.9,57.4 171.6,63.1 176.3,69 181,75 185.7,81 190.4,86.9 195.1,92.6 199.8,98.2 204.5,103.5 209.2,108.5 213.9,113.1 218.6,117.4 223.3,121.1 228,124.4 232.7,127.1 237.4,129.2 242.1,130.8 246.8,131.7 251.5,132 256.2,131.7 260.9,130.8 265.6,129.2 270.3,127.1 275,124.4 279.7,121.1 284.4,117.4 289.1,113.1 293.8,108.5 298.5,103.5 303.2,98.2 307.9,92.6 312.6,86.9 317.3,81 322,75' fill='none' stroke='#38bdf8' stroke-width='2.4'/></svg>",
                "📍 f(x) = 1,5 · sin(x) schwankt zwischen −1,5 und 1,5. Ihre Amplitude ist 1,5, die Periode bleibt 360°.",
                "↕️ Blau: sin x. Lila: 2 · sin(x) – doppelt so hoch, gleiche Periode.<svg viewBox='0 0 340 140' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='18.0' x2='322' y2='18.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='22' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>2</text><line x1='40' y1='44.0' x2='322' y2='44.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='48' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>1</text><line x1='40' y1='96.0' x2='322' y2='96.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='100' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>−1</text><line x1='40' y1='122.0' x2='322' y2='122.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='126' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>−2</text><line x1='110.5' y1='67.0' x2='110.5' y2='73.0' stroke='#94a3b8' stroke-width='1'/><line x1='110.5' y1='12' x2='110.5' y2='128' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='110.5' y='138' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>90°</text><line x1='181.0' y1='67.0' x2='181.0' y2='73.0' stroke='#94a3b8' stroke-width='1'/><line x1='181.0' y1='12' x2='181.0' y2='128' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='181' y='138' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>180°</text><line x1='251.5' y1='67.0' x2='251.5' y2='73.0' stroke='#94a3b8' stroke-width='1'/><line x1='251.5' y1='12' x2='251.5' y2='128' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='251.5' y='138' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>270°</text><line x1='322.0' y1='67.0' x2='322.0' y2='73.0' stroke='#94a3b8' stroke-width='1'/><line x1='322.0' y1='12' x2='322.0' y2='128' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='322' y='138' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>360°</text><line x1='40' y1='70.0' x2='332' y2='70.0' stroke='#94a3b8' stroke-width='1.2'/><line x1='40' y1='128' x2='40' y2='6' stroke='#94a3b8' stroke-width='1.2'/><polygon points='336,70.0 328,66.0 328,74.0' fill='#94a3b8'/><text x='334' y='63' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>x</text><text x='35' y='74' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0</text><polyline points='40,70 44.7,67.3 49.4,64.6 54.1,62 58.8,59.4 63.5,57 68.2,54.7 72.9,52.6 77.6,50.7 82.3,49 87,47.5 91.7,46.2 96.4,45.3 101.1,44.6 105.8,44.1 110.5,44 115.2,44.1 119.9,44.6 124.6,45.3 129.3,46.2 134,47.5 138.7,49 143.4,50.7 148.1,52.6 152.8,54.7 157.5,57 162.2,59.4 166.9,62 171.6,64.6 176.3,67.3 181,70 185.7,72.7 190.4,75.4 195.1,78 199.8,80.6 204.5,83 209.2,85.3 213.9,87.4 218.6,89.3 223.3,91 228,92.5 232.7,93.8 237.4,94.7 242.1,95.4 246.8,95.9 251.5,96 256.2,95.9 260.9,95.4 265.6,94.7 270.3,93.8 275,92.5 279.7,91 284.4,89.3 289.1,87.4 293.8,85.3 298.5,83 303.2,80.6 307.9,78 312.6,75.4 317.3,72.7 322,70' fill='none' stroke='#38bdf8' stroke-width='2.4'/><polyline points='40,70 44.7,64.6 49.4,59.2 54.1,53.9 58.8,48.8 63.5,44 68.2,39.4 72.9,35.2 77.6,31.4 82.3,27.9 87,25 91.7,22.5 96.4,20.5 101.1,19.1 105.8,18.3 110.5,18 115.2,18.3 119.9,19.1 124.6,20.5 129.3,22.5 134,25 138.7,27.9 143.4,31.4 148.1,35.2 152.8,39.4 157.5,44 162.2,48.8 166.9,53.9 171.6,59.2 176.3,64.6 181,70 185.7,75.4 190.4,80.8 195.1,86.1 199.8,91.2 204.5,96 209.2,100.6 213.9,104.8 218.6,108.6 223.3,112.1 228,115 232.7,117.5 237.4,119.5 242.1,120.9 246.8,121.7 251.5,122 256.2,121.7 260.9,120.9 265.6,119.5 270.3,117.5 275,115 279.7,112.1 284.4,108.6 289.1,104.8 293.8,100.6 298.5,96 303.2,91.2 307.9,86.1 312.6,80.8 317.3,75.4 322,70' fill='none' stroke='#a78bfa' stroke-width='2.4'/></svg>",
                "🎡 Riesenrad und Gezeiten schwingen wie eine Sinuskurve: Die Amplitude ist der Radius des Rades bzw. der halbe Tidenhub."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "sinfktk10l2u_leicht_1",
                    "category": "kurs_sinfkt_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Nach wie viel Grad wiederholt sich der Graph von sin x?",
                    "answers": [
                        "nach 360°",
                        "nach 180°",
                        "nach 90°",
                        "nach 720°"
                    ],
                    "correct": 0,
                    "explanation": "Nach einer vollen Drehung (360°) steht P wieder am Start. Die Periode von sin x ist 360°.",
                    "grafik": "<svg viewBox='0 0 340 150' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='18.0' x2='322' y2='18.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='22' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>1</text><line x1='40' y1='132.0' x2='322' y2='132.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='136' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>−1</text><line x1='110.5' y1='72.0' x2='110.5' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='110.5' y1='12' x2='110.5' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='110.5' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>90°</text><line x1='181.0' y1='72.0' x2='181.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='181.0' y1='12' x2='181.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='181' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>180°</text><line x1='251.5' y1='72.0' x2='251.5' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='251.5' y1='12' x2='251.5' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='251.5' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>270°</text><line x1='322.0' y1='72.0' x2='322.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='322.0' y1='12' x2='322.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='322' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>360°</text><line x1='40' y1='75.0' x2='332' y2='75.0' stroke='#94a3b8' stroke-width='1.2'/><line x1='40' y1='138' x2='40' y2='6' stroke='#94a3b8' stroke-width='1.2'/><polygon points='336,75.0 328,71.0 328,79.0' fill='#94a3b8'/><text x='334' y='68' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>x</text><text x='35' y='79' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0</text><polyline points='40,75 44.7,69 49.4,63.1 54.1,57.4 58.8,51.8 63.5,46.5 68.2,41.5 72.9,36.9 77.6,32.6 82.3,28.9 87,25.6 91.7,22.9 96.4,20.8 101.1,19.2 105.8,18.3 110.5,18 115.2,18.3 119.9,19.2 124.6,20.8 129.3,22.9 134,25.6 138.7,28.9 143.4,32.6 148.1,36.9 152.8,41.5 157.5,46.5 162.2,51.8 166.9,57.4 171.6,63.1 176.3,69 181,75 185.7,81 190.4,86.9 195.1,92.6 199.8,98.2 204.5,103.5 209.2,108.5 213.9,113.1 218.6,117.4 223.3,121.1 228,124.4 232.7,127.1 237.4,129.2 242.1,130.8 246.8,131.7 251.5,132 256.2,131.7 260.9,130.8 265.6,129.2 270.3,127.1 275,124.4 279.7,121.1 284.4,117.4 289.1,113.1 293.8,108.5 298.5,103.5 303.2,98.2 307.9,92.6 312.6,86.9 317.3,81 322,75' fill='none' stroke='#38bdf8' stroke-width='2.4'/></svg>"
                },
                {
                    "id": "sinfktk10l2u_leicht_2",
                    "category": "kurs_sinfkt_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Zwischen welchen Werten schwankt sin x?",
                    "answers": [
                        "zwischen −1 und 1",
                        "zwischen 0 und 1",
                        "zwischen 0 und 360",
                        "zwischen −90 und 90"
                    ],
                    "correct": 0,
                    "explanation": "sin x ist die y-Koordinate am Einheitskreis. Sie liegt immer zwischen −1 und 1."
                },
                {
                    "id": "sinfktk10l2u_leicht_3",
                    "category": "kurs_sinfkt_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Lies am Graphen ab: Wo hat sin x zwischen 0° und 360° seinen Hochpunkt?",
                    "answers": [
                        "bei x = 90°",
                        "bei x = 180°",
                        "bei x = 270°",
                        "bei x = 360°"
                    ],
                    "correct": 0,
                    "explanation": "Der höchste Punkt der Kurve ist (90° | 1). Bei 270° liegt der Tiefpunkt.",
                    "grafik": "<svg viewBox='0 0 340 150' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='18.0' x2='322' y2='18.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='22' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>1</text><line x1='40' y1='132.0' x2='322' y2='132.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='136' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>−1</text><line x1='110.5' y1='72.0' x2='110.5' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='110.5' y1='12' x2='110.5' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='110.5' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>90°</text><line x1='181.0' y1='72.0' x2='181.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='181.0' y1='12' x2='181.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='181' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>180°</text><line x1='251.5' y1='72.0' x2='251.5' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='251.5' y1='12' x2='251.5' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='251.5' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>270°</text><line x1='322.0' y1='72.0' x2='322.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='322.0' y1='12' x2='322.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='322' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>360°</text><line x1='40' y1='75.0' x2='332' y2='75.0' stroke='#94a3b8' stroke-width='1.2'/><line x1='40' y1='138' x2='40' y2='6' stroke='#94a3b8' stroke-width='1.2'/><polygon points='336,75.0 328,71.0 328,79.0' fill='#94a3b8'/><text x='334' y='68' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>x</text><text x='35' y='79' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0</text><polyline points='40,75 44.7,69 49.4,63.1 54.1,57.4 58.8,51.8 63.5,46.5 68.2,41.5 72.9,36.9 77.6,32.6 82.3,28.9 87,25.6 91.7,22.9 96.4,20.8 101.1,19.2 105.8,18.3 110.5,18 115.2,18.3 119.9,19.2 124.6,20.8 129.3,22.9 134,25.6 138.7,28.9 143.4,32.6 148.1,36.9 152.8,41.5 157.5,46.5 162.2,51.8 166.9,57.4 171.6,63.1 176.3,69 181,75 185.7,81 190.4,86.9 195.1,92.6 199.8,98.2 204.5,103.5 209.2,108.5 213.9,113.1 218.6,117.4 223.3,121.1 228,124.4 232.7,127.1 237.4,129.2 242.1,130.8 246.8,131.7 251.5,132 256.2,131.7 260.9,130.8 265.6,129.2 270.3,127.1 275,124.4 279.7,121.1 284.4,117.4 289.1,113.1 293.8,108.5 298.5,103.5 303.2,98.2 307.9,92.6 312.6,86.9 317.3,81 322,75' fill='none' stroke='#38bdf8' stroke-width='2.4'/></svg>"
                },
                {
                    "id": "sinfktk10l2u_leicht_4",
                    "category": "kurs_sinfkt_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie groß ist die Amplitude von f(x) = 3 · sin(x)?",
                    "answers": [
                        "3",
                        "1",
                        "6",
                        "1/3"
                    ],
                    "correct": 0,
                    "explanation": "Die Zahl a vor dem Sinus ist die Amplitude. Die Kurve schwankt zwischen −3 und 3, die Amplitude ist 3."
                }
            ],
            "mittel": [
                {
                    "id": "sinfktk10l2u_mittel_1",
                    "category": "kurs_sinfkt_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Nullstellen hat sin x zwischen 0° und 360° (Ränder zählen mit)?",
                    "answers": [
                        "0°, 180°, 360°",
                        "90° und 270°",
                        "0°, 90°, 180°",
                        "180° und 360°"
                    ],
                    "correct": 0,
                    "explanation": "sin x = 0, wenn P auf der x-Achse liegt: bei 0°, 180° und 360°."
                },
                {
                    "id": "sinfktk10l2u_mittel_2",
                    "category": "kurs_sinfkt_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Der Graph zeigt f(x) = a · sin(x). Wie groß ist a?",
                    "answers": [
                        "2",
                        "1",
                        "4",
                        "0,5"
                    ],
                    "correct": 0,
                    "explanation": "Die Kurve geht bis 2 hoch und bis −2 runter. Die Amplitude a ist 2 – nicht der Abstand 4 von oben nach unten.",
                    "grafik": "<svg viewBox='0 0 340 150' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='18.0' x2='322' y2='18.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='22' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>2</text><line x1='40' y1='46.5' x2='322' y2='46.5' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='50.5' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>1</text><line x1='40' y1='103.5' x2='322' y2='103.5' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='107.5' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>−1</text><line x1='40' y1='132.0' x2='322' y2='132.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='136' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>−2</text><line x1='110.5' y1='72.0' x2='110.5' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='110.5' y1='12' x2='110.5' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='110.5' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>90°</text><line x1='181.0' y1='72.0' x2='181.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='181.0' y1='12' x2='181.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='181' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>180°</text><line x1='251.5' y1='72.0' x2='251.5' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='251.5' y1='12' x2='251.5' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='251.5' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>270°</text><line x1='322.0' y1='72.0' x2='322.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='322.0' y1='12' x2='322.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='322' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>360°</text><line x1='40' y1='75.0' x2='332' y2='75.0' stroke='#94a3b8' stroke-width='1.2'/><line x1='40' y1='138' x2='40' y2='6' stroke='#94a3b8' stroke-width='1.2'/><polygon points='336,75.0 328,71.0 328,79.0' fill='#94a3b8'/><text x='334' y='68' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>x</text><text x='35' y='79' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0</text><polyline points='40,75 44.7,69 49.4,63.1 54.1,57.4 58.8,51.8 63.5,46.5 68.2,41.5 72.9,36.9 77.6,32.6 82.3,28.9 87,25.6 91.7,22.9 96.4,20.8 101.1,19.2 105.8,18.3 110.5,18 115.2,18.3 119.9,19.2 124.6,20.8 129.3,22.9 134,25.6 138.7,28.9 143.4,32.6 148.1,36.9 152.8,41.5 157.5,46.5 162.2,51.8 166.9,57.4 171.6,63.1 176.3,69 181,75 185.7,81 190.4,86.9 195.1,92.6 199.8,98.2 204.5,103.5 209.2,108.5 213.9,113.1 218.6,117.4 223.3,121.1 228,124.4 232.7,127.1 237.4,129.2 242.1,130.8 246.8,131.7 251.5,132 256.2,131.7 260.9,130.8 265.6,129.2 270.3,127.1 275,124.4 279.7,121.1 284.4,117.4 289.1,113.1 293.8,108.5 298.5,103.5 303.2,98.2 307.9,92.6 312.6,86.9 317.3,81 322,75' fill='none' stroke='#a78bfa' stroke-width='2.4'/></svg>"
                },
                {
                    "id": "sinfktk10l2u_mittel_3",
                    "category": "kurs_sinfkt_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Periode hat f(x) = sin(2x)?",
                    "answers": [
                        "180°",
                        "720°",
                        "360°",
                        "90°"
                    ],
                    "correct": 0,
                    "explanation": "Periode = 360° : b = 360° : 2 = 180°. Die Kurve schwingt doppelt so schnell."
                },
                {
                    "id": "sinfktk10l2u_mittel_4",
                    "category": "kurs_sinfkt_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wo hat f(x) = 2 · sin(x) zwischen 0° und 360° ihren Tiefpunkt?",
                    "answers": [
                        "(270° | −2)",
                        "(270° | −1)",
                        "(90° | −2)",
                        "(180° | −2)"
                    ],
                    "correct": 0,
                    "explanation": "sin x ist bei 270° am kleinsten (−1). Mal 2 ergibt −2. Tiefpunkt (270° | −2)."
                }
            ],
            "schwer": [
                {
                    "id": "sinfktk10l2u_schwer_1",
                    "category": "kurs_sinfkt_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Der Graph zeigt f(x) = sin(b · x). Wie groß ist b?",
                    "answers": [
                        "3",
                        "6",
                        "2",
                        "1/3"
                    ],
                    "correct": 0,
                    "explanation": "Eine Welle ist 120° lang (Periode). Aus 360° : b = 120° folgt b = 3.",
                    "grafik": "<svg viewBox='0 0 340 150' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='18.0' x2='322' y2='18.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='22' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>1</text><line x1='40' y1='132.0' x2='322' y2='132.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='136' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>−1</text><line x1='87.0' y1='72.0' x2='87.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='87.0' y1='12' x2='87.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='87' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>60°</text><line x1='134.0' y1='72.0' x2='134.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='134.0' y1='12' x2='134.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='134' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>120°</text><line x1='181.0' y1='72.0' x2='181.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='181.0' y1='12' x2='181.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='181' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>180°</text><line x1='228.0' y1='72.0' x2='228.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='228.0' y1='12' x2='228.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='228' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>240°</text><line x1='275.0' y1='72.0' x2='275.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='275.0' y1='12' x2='275.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='275' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>300°</text><line x1='322.0' y1='72.0' x2='322.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='322.0' y1='12' x2='322.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='322' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>360°</text><line x1='40' y1='75.0' x2='332' y2='75.0' stroke='#94a3b8' stroke-width='1.2'/><line x1='40' y1='138' x2='40' y2='6' stroke='#94a3b8' stroke-width='1.2'/><polygon points='336,75.0 328,71.0 328,79.0' fill='#94a3b8'/><text x='334' y='68' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>x</text><text x='35' y='79' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0</text><polyline points='40,75 43.1,63.1 46.3,51.8 49.4,41.5 52.5,32.6 55.7,25.6 58.8,20.8 61.9,18.3 65.1,18.3 68.2,20.8 71.3,25.6 74.5,32.6 77.6,41.5 80.7,51.8 83.9,63.1 87,75 90.1,86.9 93.3,98.2 96.4,108.5 99.5,117.4 102.7,124.4 105.8,129.2 108.9,131.7 112.1,131.7 115.2,129.2 118.3,124.4 121.5,117.4 124.6,108.5 127.7,98.2 130.9,86.9 134,75 137.1,63.1 140.3,51.8 143.4,41.5 146.5,32.6 149.7,25.6 152.8,20.8 155.9,18.3 159.1,18.3 162.2,20.8 165.3,25.6 168.5,32.6 171.6,41.5 174.7,51.8 177.9,63.1 181,75 184.1,86.9 187.3,98.2 190.4,108.5 193.5,117.4 196.7,124.4 199.8,129.2 202.9,131.7 206.1,131.7 209.2,129.2 212.3,124.4 215.5,117.4 218.6,108.5 221.7,98.2 224.9,86.9 228,75 231.1,63.1 234.3,51.8 237.4,41.5 240.5,32.6 243.7,25.6 246.8,20.8 249.9,18.3 253.1,18.3 256.2,20.8 259.3,25.6 262.5,32.6 265.6,41.5 268.7,51.8 271.9,63.1 275,75 278.1,86.9 281.3,98.2 284.4,108.5 287.5,117.4 290.7,124.4 293.8,129.2 296.9,131.7 300.1,131.7 303.2,129.2 306.3,124.4 309.5,117.4 312.6,108.5 315.7,98.2 318.9,86.9 322,75' fill='none' stroke='#10b981' stroke-width='2.4'/></svg>"
                },
                {
                    "id": "sinfktk10l2u_schwer_2",
                    "category": "kurs_sinfkt_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Riesenrad: Höhe h(x) = 25 + 20 · sin(x) in m, x ist der Drehwinkel. Wie hoch kommt eine Gondel maximal?",
                    "answers": [
                        "45 m",
                        "25 m",
                        "20 m",
                        "40 m"
                    ],
                    "correct": 0,
                    "explanation": "sin(x) ist höchstens 1. Also h = 25 + 20 · 1 = 45 m. 40 m wäre nur der Durchmesser.",
                    "grafik": "<svg viewBox='0 0 310 180' style='width:100%;max-width:310px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='172' x2='300' y2='172' stroke='#94a3b8' stroke-width='2'/><polygon points='130,85 90,172 170,172' fill='none' stroke='#94a3b8' stroke-width='2'/><circle cx='130' cy='85' r='62' fill='none' stroke='#38bdf8' stroke-width='2.5'/><line x1='130' y1='85' x2='192.0' y2='85.0' stroke='#38bdf8' stroke-width='1'/><rect x='186.0' y='83.0' width='12' height='10' rx='2' fill='#a78bfa'/><line x1='130' y1='85' x2='173.8' y2='41.2' stroke='#38bdf8' stroke-width='1'/><rect x='167.8' y='39.2' width='12' height='10' rx='2' fill='#a78bfa'/><line x1='130' y1='85' x2='130.0' y2='23.0' stroke='#38bdf8' stroke-width='1'/><rect x='124.0' y='21.0' width='12' height='10' rx='2' fill='#a78bfa'/><line x1='130' y1='85' x2='86.2' y2='41.2' stroke='#38bdf8' stroke-width='1'/><rect x='80.2' y='39.2' width='12' height='10' rx='2' fill='#a78bfa'/><line x1='130' y1='85' x2='68.0' y2='85.0' stroke='#38bdf8' stroke-width='1'/><rect x='62.0' y='83.0' width='12' height='10' rx='2' fill='#a78bfa'/><line x1='130' y1='85' x2='86.2' y2='128.8' stroke='#38bdf8' stroke-width='1'/><rect x='80.2' y='126.8' width='12' height='10' rx='2' fill='#a78bfa'/><line x1='130' y1='85' x2='130.0' y2='147.0' stroke='#38bdf8' stroke-width='1'/><rect x='124.0' y='145.0' width='12' height='10' rx='2' fill='#a78bfa'/><line x1='130' y1='85' x2='173.8' y2='128.8' stroke='#38bdf8' stroke-width='1'/><rect x='167.8' y='126.8' width='12' height='10' rx='2' fill='#a78bfa'/><circle cx='130' cy='85' r='4' fill='#f59e0b'/><line x1='130' y1='85' x2='68' y2='85' stroke='#f59e0b' stroke-width='2.2'/><text x='97' y='78' text-anchor='middle' font-size='10' fill='#f59e0b' font-family='sans-serif'>r = 20 m</text><line x1='230' y1='85' x2='230' y2='172' stroke='#10b981' stroke-width='1.6'/><line x1='130' y1='85' x2='236' y2='85' stroke='#94a3b8' stroke-width='0.8' stroke-dasharray='3,3'/><text x='238' y='132.5' text-anchor='start' font-size='12' fill='#10b981' font-family='sans-serif'>25 m</text></svg>"
                },
                {
                    "id": "sinfktk10l2u_schwer_3",
                    "category": "kurs_sinfkt_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Der Wasserstand im Hafen schwankt bei Ebbe und Flut zwischen 1 m und 5 m. Wie groß ist die Amplitude?",
                    "answers": [
                        "2 m",
                        "4 m",
                        "5 m",
                        "3 m"
                    ],
                    "correct": 0,
                    "explanation": "Amplitude = halber Abstand von Hoch zu Tief: (5 m − 1 m) : 2 = 2 m. Die Mittellinie liegt bei 3 m."
                },
                {
                    "id": "sinfktk10l2u_schwer_4",
                    "category": "kurs_sinfkt_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Funktion hat die Amplitude 3 und die Periode 180°?",
                    "answers": [
                        "3 · sin(2x)",
                        "2 · sin(3x)",
                        "3 · sin(0,5x)",
                        "0,5 · sin(3x)"
                    ],
                    "correct": 0,
                    "explanation": "Amplitude 3 heißt a = 3. Periode 360° : b = 180° heißt b = 2. Also f(x) = 3 · sin(2x)."
                }
            ]
        },
        "test": [
            {
                "id": "sinfktk10l2_test_1",
                "category": "kurs_sinfkt_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Lies am Graphen ab: Welchen Wert hat sin x bei x = 270°?",
                "answers": [
                    "−1",
                    "1",
                    "0",
                    "−0,5"
                ],
                "correct": 0,
                "explanation": "Bei 270° liegt der Tiefpunkt der Kurve. Dort ist sin x = −1.",
                "grafik": "<svg viewBox='0 0 340 150' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='18.0' x2='322' y2='18.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='22' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>1</text><line x1='40' y1='132.0' x2='322' y2='132.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='136' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>−1</text><line x1='110.5' y1='72.0' x2='110.5' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='110.5' y1='12' x2='110.5' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='110.5' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>90°</text><line x1='181.0' y1='72.0' x2='181.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='181.0' y1='12' x2='181.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='181' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>180°</text><line x1='251.5' y1='72.0' x2='251.5' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='251.5' y1='12' x2='251.5' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='251.5' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>270°</text><line x1='322.0' y1='72.0' x2='322.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='322.0' y1='12' x2='322.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='322' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>360°</text><line x1='40' y1='75.0' x2='332' y2='75.0' stroke='#94a3b8' stroke-width='1.2'/><line x1='40' y1='138' x2='40' y2='6' stroke='#94a3b8' stroke-width='1.2'/><polygon points='336,75.0 328,71.0 328,79.0' fill='#94a3b8'/><text x='334' y='68' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>x</text><text x='35' y='79' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0</text><polyline points='40,75 44.7,69 49.4,63.1 54.1,57.4 58.8,51.8 63.5,46.5 68.2,41.5 72.9,36.9 77.6,32.6 82.3,28.9 87,25.6 91.7,22.9 96.4,20.8 101.1,19.2 105.8,18.3 110.5,18 115.2,18.3 119.9,19.2 124.6,20.8 129.3,22.9 134,25.6 138.7,28.9 143.4,32.6 148.1,36.9 152.8,41.5 157.5,46.5 162.2,51.8 166.9,57.4 171.6,63.1 176.3,69 181,75 185.7,81 190.4,86.9 195.1,92.6 199.8,98.2 204.5,103.5 209.2,108.5 213.9,113.1 218.6,117.4 223.3,121.1 228,124.4 232.7,127.1 237.4,129.2 242.1,130.8 246.8,131.7 251.5,132 256.2,131.7 260.9,130.8 265.6,129.2 270.3,127.1 275,124.4 279.7,121.1 284.4,117.4 289.1,113.1 293.8,108.5 298.5,103.5 303.2,98.2 307.9,92.6 312.6,86.9 317.3,81 322,75' fill='none' stroke='#38bdf8' stroke-width='2.4'/></svg>"
            },
            {
                "id": "sinfktk10l2_test_2",
                "category": "kurs_sinfkt_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Nullstellen hat sin x von 0° bis 360° (Ränder zählen mit)?",
                "answers": [
                    "3",
                    "2",
                    "4",
                    "1"
                ],
                "correct": 0,
                "explanation": "Die Nullstellen sind 0°, 180° und 360° – also drei."
            },
            {
                "id": "sinfktk10l2_test_3",
                "category": "kurs_sinfkt_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Periode hat f(x) = sin(4x)?",
                "answers": [
                    "90°",
                    "1440°",
                    "360°",
                    "180°"
                ],
                "correct": 0,
                "explanation": "Periode = 360° : 4 = 90°. Wer mal 4 rechnet, kommt fälschlich auf 1440°."
            },
            {
                "id": "sinfktk10l2_test_4",
                "category": "kurs_sinfkt_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Blau ist sin x, lila ist f(x) = a · sin(x). Wie groß ist die Amplitude der lila Kurve?",
                "answers": [
                    "0,5",
                    "1",
                    "2",
                    "0,25"
                ],
                "correct": 0,
                "explanation": "Die lila Kurve geht nur bis 0,5 hoch und bis −0,5 runter. Die Amplitude ist 0,5.",
                "grafik": "<svg viewBox='0 0 340 150' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='18.0' x2='322' y2='18.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='22' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>1</text><line x1='40' y1='46.5' x2='322' y2='46.5' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='50.5' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0,5</text><line x1='40' y1='103.5' x2='322' y2='103.5' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='107.5' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>−0,5</text><line x1='40' y1='132.0' x2='322' y2='132.0' stroke='#94a3b8' stroke-width='0.6' stroke-dasharray='3,3'/><text x='35' y='136' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>−1</text><line x1='110.5' y1='72.0' x2='110.5' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='110.5' y1='12' x2='110.5' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='110.5' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>90°</text><line x1='181.0' y1='72.0' x2='181.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='181.0' y1='12' x2='181.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='181' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>180°</text><line x1='251.5' y1='72.0' x2='251.5' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='251.5' y1='12' x2='251.5' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='251.5' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>270°</text><line x1='322.0' y1='72.0' x2='322.0' y2='78.0' stroke='#94a3b8' stroke-width='1'/><line x1='322.0' y1='12' x2='322.0' y2='138' stroke='#94a3b8' stroke-width='0.4' stroke-dasharray='2,4'/><text x='322' y='148' text-anchor='middle' font-size='9' fill='#94a3b8' font-family='sans-serif'>360°</text><line x1='40' y1='75.0' x2='332' y2='75.0' stroke='#94a3b8' stroke-width='1.2'/><line x1='40' y1='138' x2='40' y2='6' stroke='#94a3b8' stroke-width='1.2'/><polygon points='336,75.0 328,71.0 328,79.0' fill='#94a3b8'/><text x='334' y='68' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>x</text><text x='35' y='79' text-anchor='end' font-size='10' fill='#94a3b8' font-family='sans-serif'>0</text><polyline points='40,75 44.7,69 49.4,63.1 54.1,57.4 58.8,51.8 63.5,46.5 68.2,41.5 72.9,36.9 77.6,32.6 82.3,28.9 87,25.6 91.7,22.9 96.4,20.8 101.1,19.2 105.8,18.3 110.5,18 115.2,18.3 119.9,19.2 124.6,20.8 129.3,22.9 134,25.6 138.7,28.9 143.4,32.6 148.1,36.9 152.8,41.5 157.5,46.5 162.2,51.8 166.9,57.4 171.6,63.1 176.3,69 181,75 185.7,81 190.4,86.9 195.1,92.6 199.8,98.2 204.5,103.5 209.2,108.5 213.9,113.1 218.6,117.4 223.3,121.1 228,124.4 232.7,127.1 237.4,129.2 242.1,130.8 246.8,131.7 251.5,132 256.2,131.7 260.9,130.8 265.6,129.2 270.3,127.1 275,124.4 279.7,121.1 284.4,117.4 289.1,113.1 293.8,108.5 298.5,103.5 303.2,98.2 307.9,92.6 312.6,86.9 317.3,81 322,75' fill='none' stroke='#38bdf8' stroke-width='2.4'/><polyline points='40,75 44.7,72 49.4,69.1 54.1,66.2 58.8,63.4 63.5,60.8 68.2,58.2 72.9,55.9 77.6,53.8 82.3,51.9 87,50.3 91.7,49 96.4,47.9 101.1,47.1 105.8,46.7 110.5,46.5 115.2,46.7 119.9,47.1 124.6,47.9 129.3,49 134,50.3 138.7,51.9 143.4,53.8 148.1,55.9 152.8,58.2 157.5,60.8 162.2,63.4 166.9,66.2 171.6,69.1 176.3,72 181,75 185.7,78 190.4,80.9 195.1,83.8 199.8,86.6 204.5,89.2 209.2,91.8 213.9,94.1 218.6,96.2 223.3,98.1 228,99.7 232.7,101 237.4,102.1 242.1,102.9 246.8,103.3 251.5,103.5 256.2,103.3 260.9,102.9 265.6,102.1 270.3,101 275,99.7 279.7,98.1 284.4,96.2 289.1,94.1 293.8,91.8 298.5,89.3 303.2,86.6 307.9,83.8 312.6,80.9 317.3,78 322,75' fill='none' stroke='#a78bfa' stroke-width='2.4'/></svg>"
            },
            {
                "id": "sinfktk10l2_test_5",
                "category": "kurs_sinfkt_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Riesenrad hat 30 m Durchmesser. Welche Amplitude hat die Höhenkurve einer Gondel?",
                "answers": [
                    "15 m",
                    "30 m",
                    "60 m",
                    "7,5 m"
                ],
                "correct": 0,
                "explanation": "Die Gondel schwankt um die Achse herum, jeweils um den Radius. Amplitude = 30 m : 2 = 15 m."
            },
            {
                "id": "sinfktk10l2_test_6",
                "category": "kurs_sinfkt_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ändert sich bei f(x) = 3 · sin(x) gegenüber sin x?",
                "answers": [
                    "Die Kurve wird dreimal so hoch",
                    "Die Periode wird dreimal so lang",
                    "Die Kurve wird ein Drittel so hoch",
                    "Die Nullstellen verdreifachen sich"
                ],
                "correct": 0,
                "explanation": "Der Faktor 3 streckt die Kurve in y-Richtung: Amplitude 3. Periode und Nullstellen bleiben gleich."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "sinus_k10_l2",
        "kurs": "sinus_kosinussatz_k10",
        "order": 2,
        "icon": "🧭",
        "title": "Sinus- und Kosinussatz anwenden",
        "kurz": "Vermessen, Entfernungen, Flächen",
        "erklaerung": {
            "intro": "Beim Vermessen misst man oft nur eine Strecke und Winkel. Kennst du eine Seite und ihren <b>Gegenwinkel</b>, hilft der <b>Sinussatz</b>. Bei zwei Seiten mit <b>eingeschlossenem Winkel</b> oder drei Seiten hilft der <b>Kosinussatz</b>. Den <b>Flächeninhalt</b> liefert A = ½ · a · b · sin γ.",
            "merksatz": "Erst eine Skizze, dann wählen: Seite mit Gegenwinkel → Sinussatz, Zwischenwinkel oder drei Seiten → Kosinussatz.",
            "beispiele": [
                "🗺️ Vermessung: A und B liegen 80 m auseinander, beide peilen den Turm C an.<svg viewBox='0 0 320 172' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='80.0,150.0 240.0,150.0 174.8,37.0' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><path d='M100.0 150.0 A20 20 0 0 0 92.9 134.7' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='110.814' y='139.631' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>50°</text><path d='M230.0 132.7 A20 20 0 0 0 220.0 150.0' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='210.555' y='137' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>60°</text><text x='160' y='166' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>80 m</text><text x='174.783' y='29.0415' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>C</text><text x='70' y='160' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>A</text><text x='250' y='160' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>B</text></svg>",
                "🔢 Dort gilt γ = 180° − 50° − 60° = 70°. Sinussatz: AC = 80 · sin 60° : sin 70° ≈ 73,7 m.",
                "🛤️ Wege 4 km und 6 km mit 50° dazwischen: c² = 16 + 36 − 48 · cos 50° ≈ 21,15, also c ≈ 4,6 km.",
                "🌱 Fläche: a = 8 m, b = 5 m, γ = 30° → A = ½ · 8 · 5 · sin 30° = 10 m²."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "sinusk10l2u_leicht_1",
                    "category": "kurs_sinus_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "sinus_kosinussatz",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Gegeben sind a, α und β. Welcher Satz liefert dir die Seite b?",
                    "answers": [
                        "der Sinussatz",
                        "der Kosinussatz",
                        "der Satz des Pythagoras",
                        "der Strahlensatz"
                    ],
                    "correct": 0,
                    "explanation": "a und α liegen sich gegenüber, β ist bekannt. Dann gilt b = a · sin β : sin α (Sinussatz)."
                },
                {
                    "id": "sinusk10l2u_leicht_2",
                    "category": "kurs_sinus_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "sinus_kosinussatz",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Gegeben sind b, c und der Winkel α dazwischen. Womit berechnest du a?",
                    "answers": [
                        "mit dem Kosinussatz",
                        "mit dem Sinussatz",
                        "mit dem Pythagoras",
                        "mit dem Strahlensatz"
                    ],
                    "correct": 0,
                    "explanation": "Zwei Seiten und der eingeschlossene Winkel: a² = b² + c² − 2bc · cos α (Kosinussatz).",
                    "grafik": "<svg viewBox='0 0 300 165' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='70.0,140.0 220.0,140.0 133.1,49.9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><path d='M90.0 140.0 A20 20 0 0 0 81.5 123.6' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='100.158' y='128.301' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>α</text><text x='145' y='156' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>c</text><text x='89.5467' y='94.9466' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>b</text><text x='190.547' y='94.9466' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>a = ?</text></svg>"
                },
                {
                    "id": "sinusk10l2u_leicht_3",
                    "category": "kurs_sinus_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "sinus_kosinussatz",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Bei γ = 90° gilt sin γ = 1. Was wird dann aus A = ½ · a · b · sin γ?",
                    "answers": [
                        "A = ½ · a · b",
                        "A = a · b",
                        "A = 0",
                        "A = ½ · a · b · 90"
                    ],
                    "correct": 0,
                    "explanation": "Mit sin 90° = 1 bleibt A = ½ · a · b – die bekannte Formel für rechtwinklige Dreiecke."
                },
                {
                    "id": "sinusk10l2u_leicht_4",
                    "category": "kurs_sinus_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "sinus_kosinussatz",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ein dreieckiges Beet hat zwei Seiten 10 m und 8 m mit 30° dazwischen. Wie groß ist es?",
                    "answers": [
                        "20 m²",
                        "40 m²",
                        "80 m²",
                        "34,6 m²"
                    ],
                    "correct": 0,
                    "explanation": "A = ½ · 10 · 8 · sin 30° = 40 · 0,5 = 20 m².",
                    "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='188.6,60.0 250.0,140.0 50.0,140.0' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><path d='M67.3 130.0 A20 20 0 0 1 70.0 140.0' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='82.8415' y='135.2' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>30°</text><text x='150' y='156' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>10 m</text><text x='111.282' y='94' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>8 m</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "sinusk10l2u_mittel_1",
                    "category": "kurs_sinus_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "sinus_kosinussatz",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "A und B sind 80 m auseinander. Zum Turm C misst du α = 50° und β = 60°. Wie weit ist B von C? (1 Nachkommastelle)",
                    "answers": [
                        "65,2 m",
                        "73,7 m",
                        "98,1 m",
                        "70,8 m"
                    ],
                    "correct": 0,
                    "explanation": "γ = 180° − 50° − 60° = 70°. Sinussatz: BC = 80 · sin 50° : sin 70° ≈ 65,2 m.",
                    "grafik": "<svg viewBox='0 0 320 172' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='80.0,150.0 240.0,150.0 174.8,37.0' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><path d='M100.0 150.0 A20 20 0 0 0 92.9 134.7' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='110.814' y='139.631' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>50°</text><path d='M230.0 132.7 A20 20 0 0 0 220.0 150.0' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='210.555' y='137' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>60°</text><text x='160' y='166' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>80 m</text><text x='174.783' y='29.0415' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>C</text><text x='70' y='160' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>A</text><text x='250' y='160' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>B</text></svg>"
                },
                {
                    "id": "sinusk10l2u_mittel_2",
                    "category": "kurs_sinus_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "sinus_kosinussatz",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Zwei gerade Wege starten am selben Punkt: 3 km und 5 km lang, 60° dazwischen. Wie weit liegen ihre Enden auseinander?",
                    "answers": [
                        "4,4 km",
                        "5,8 km",
                        "7,0 km",
                        "5,1 km"
                    ],
                    "correct": 0,
                    "explanation": "c² = 3² + 5² − 2 · 3 · 5 · cos 60° = 34 − 15 = 19, also c = √19 ≈ 4,4 km.",
                    "grafik": "<svg viewBox='0 0 300 172' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='100.0,46.1 240.0,150.0 40.0,150.0' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><path d='M50.0 132.7 A20 20 0 0 1 60.0 150.0' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='69.4449' y='137' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>60°</text><text x='140' y='166' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>5 km</text><text x='52' y='98.0385' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>3 km</text><text x='184' y='94.0385' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>?</text></svg>"
                },
                {
                    "id": "sinusk10l2u_mittel_3",
                    "category": "kurs_sinus_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "sinus_kosinussatz",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ein Grundstück ist ein Dreieck mit a = 30 m, b = 40 m und γ = 50°. Flächeninhalt? (1 Nachkommastelle)",
                    "answers": [
                        "459,6 m²",
                        "919,3 m²",
                        "385,7 m²",
                        "600,0 m²"
                    ],
                    "correct": 0,
                    "explanation": "A = ½ · 30 · 40 · sin 50° = 600 · 0,766… ≈ 459,6 m²."
                },
                {
                    "id": "sinusk10l2u_mittel_4",
                    "category": "kurs_sinus_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "sinus_kosinussatz",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Gegeben: a = 7 cm, b = 9 cm und α = 40°. Womit berechnest du zuerst β?",
                    "answers": [
                        "mit dem Sinussatz",
                        "mit dem Kosinussatz",
                        "mit der Winkelsumme",
                        "mit dem Pythagoras"
                    ],
                    "correct": 0,
                    "explanation": "a und α bilden ein Paar aus Seite und Gegenwinkel. Dann gilt sin β = b · sin α : a (Sinussatz)."
                }
            ],
            "schwer": [
                {
                    "id": "sinusk10l2u_schwer_1",
                    "category": "kurs_sinus_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "sinus_kosinussatz",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Garten ist ein Dreieck mit 5 m, 7 m und 8 m. Wie groß ist der Winkel gegenüber der 7-m-Seite?",
                    "answers": [
                        "60,0°",
                        "81,8°",
                        "38,2°",
                        "120,0°"
                    ],
                    "correct": 0,
                    "explanation": "cos γ = (5² + 8² − 7²) : (2 · 5 · 8) = 40 : 80 = 0,5, also γ = 60,0°.",
                    "grafik": "<svg viewBox='0 0 300 172' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='110.0,28.8 264.0,150.0 40.0,150.0' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><path d='M50.0 132.7 A20 20 0 0 1 60.0 150.0' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='69.4449' y='137' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>?</text><text x='152' y='166' text-anchor='middle' font-size='12' fill='#10b981' font-family='sans-serif'>8 m</text><text x='59' y='89.3782' text-anchor='middle' font-size='12' fill='#10b981' font-family='sans-serif'>5 m</text><text x='203' y='85.3782' text-anchor='middle' font-size='12' fill='#10b981' font-family='sans-serif'>7 m</text></svg>"
                },
                {
                    "id": "sinusk10l2u_schwer_2",
                    "category": "kurs_sinus_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "sinus_kosinussatz",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein See liegt zwischen A und B. Von P: PA = 300 m, PB = 400 m, Winkel bei P 75°. Wie lang ist AB? (1 Nachkommastelle)",
                    "answers": [
                        "433,5 m",
                        "500,0 m",
                        "558,7 m",
                        "467,9 m"
                    ],
                    "correct": 0,
                    "explanation": "AB² = 300² + 400² − 2 · 300 · 400 · cos 75° ≈ 187 883, also AB ≈ 433,5 m.",
                    "grafik": "<svg viewBox='0 0 320 172' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><ellipse cx='185' cy='57' rx='80' ry='19' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><polyline points='100,50 40,150 270,70' fill='none' stroke='#f59e0b' stroke-width='2'/><line x1='100' y1='50' x2='270' y2='70' stroke='#e5e7eb' stroke-width='1.6' stroke-dasharray='5,4'/><text x='30' y='162' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>P</text><text x='92' y='44' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>A</text><text x='282' y='72' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>B</text><text x='56' y='96' text-anchor='end' font-size='11' fill='#f59e0b' font-family='sans-serif'>300 m</text><text x='170' y='130' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>400 m</text><path d='M51.3 131.1 A22 22 0 0 1 60.7 142.7' fill='none' stroke='#f59e0b' stroke-width='1.5'/><text x='84' y='132' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>75°</text><text x='185' y='52' text-anchor='middle' font-size='13' fill='#e5e7eb' font-family='sans-serif'>?</text></svg>"
                },
                {
                    "id": "sinusk10l2u_schwer_3",
                    "category": "kurs_sinus_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "sinus_kosinussatz",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Dreieck hat a = 12 cm, b = 10 cm und A = 30 cm². Wie groß ist der spitze Winkel γ?",
                    "answers": [
                        "30°",
                        "60°",
                        "14,5°",
                        "90°"
                    ],
                    "correct": 0,
                    "explanation": "30 = ½ · 12 · 10 · sin γ, also sin γ = 30 : 60 = 0,5 und γ = 30°."
                },
                {
                    "id": "sinusk10l2u_schwer_4",
                    "category": "kurs_sinus_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "sinus_kosinussatz",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Boote A und B sind 2 km auseinander. Zur Boje C: Winkel bei A 40°, bei B 105°. Wie weit ist B von C?",
                    "answers": [
                        "2,2 km",
                        "3,4 km",
                        "1,3 km",
                        "1,8 km"
                    ],
                    "correct": 0,
                    "explanation": "γ = 180° − 40° − 105° = 35°. Sinussatz: BC = 2 · sin 40° : sin 35° ≈ 2,2 km.",
                    "grafik": "<svg viewBox='0 0 260 172' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='60.0,150.0 150.0,150.0 176.1,52.6' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><path d='M80.0 150.0 A20 20 0 0 0 75.3 137.1' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='91.9495' y='142.371' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>40°</text><path d='M155.2 130.7 A20 20 0 0 0 130.0 150.0' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='129.302' y='127.026' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>105°</text><text x='105' y='166' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>2 km</text><text x='176.104' y='44.5768' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>C</text><text x='50' y='160' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>A</text><text x='162' y='162' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>B</text></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "sinusk10l2_test_1",
                "category": "kurs_sinus_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "sinus_kosinussatz",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Dreieck hat a = 6 cm, b = 5 cm und γ = 30°. Wie groß ist der Flächeninhalt?",
                "answers": [
                    "7,5 cm²",
                    "15,0 cm²",
                    "13,0 cm²",
                    "30,0 cm²"
                ],
                "correct": 0,
                "explanation": "A = ½ · 6 · 5 · sin 30° = 15 · 0,5 = 7,5 cm²."
            },
            {
                "id": "sinusk10l2_test_2",
                "category": "kurs_sinus_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "sinus_kosinussatz",
                "difficulty": "mittel",
                "points": 10,
                "question": "Gegeben sind c = 9 m, α = 45° und γ = 70°. Welcher Satz liefert a?",
                "answers": [
                    "der Sinussatz",
                    "der Kosinussatz",
                    "der Pythagoras",
                    "der Höhensatz"
                ],
                "correct": 0,
                "explanation": "c und γ liegen sich gegenüber, α ist bekannt. Also a = c · sin α : sin γ (Sinussatz)."
            },
            {
                "id": "sinusk10l2_test_3",
                "category": "kurs_sinus_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "sinus_kosinussatz",
                "difficulty": "mittel",
                "points": 10,
                "question": "Dreieck: c = 9 m, α = 45° und γ = 70°. Wie lang ist a? (1 Nachkommastelle)",
                "answers": [
                    "6,8 m",
                    "12,0 m",
                    "18,6 m",
                    "7,0 m"
                ],
                "correct": 0,
                "explanation": "a = c · sin α : sin γ = 9 · sin 45° : sin 70° ≈ 6,8 m.",
                "grafik": "<svg viewBox='0 0 300 172' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40.0,150.0 238.0,150.0 175.0,15.0' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><path d='M60.0 150.0 A20 20 0 0 0 54.1 135.9' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='71.4119' y='140.989' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>45°</text><path d='M160.9 29.1 A20 20 0 0 0 183.5 33.1' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='169.129' y='52.4504' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>70°</text><text x='139' y='166' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>c = 9 m</text><text x='228.517' y='82.4835' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>a = ?</text></svg>"
            },
            {
                "id": "sinusk10l2_test_4",
                "category": "kurs_sinus_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "sinus_kosinussatz",
                "difficulty": "mittel",
                "points": 10,
                "question": "Zwei Wege: 6 km und 8 km lang, 120° dazwischen. Wie weit sind ihre Enden auseinander? (1 Nachkommastelle)",
                "answers": [
                    "12,2 km",
                    "10,0 km",
                    "7,2 km",
                    "11,1 km"
                ],
                "correct": 0,
                "explanation": "c² = 36 + 64 − 2 · 6 · 8 · cos 120° = 100 + 48 = 148, also c ≈ 12,2 km.",
                "grafik": "<svg viewBox='0 0 300 172' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='76.0,56.5 274.0,150.0 130.0,150.0' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><path d='M120.0 132.7 A20 20 0 0 1 150.0 150.0' fill='none' stroke='#f59e0b' stroke-width='1.6'/><text x='147' y='124.555' text-anchor='middle' font-size='11' fill='#f59e0b' font-family='sans-serif'>120°</text><text x='202' y='166' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>8 km</text><text x='79' y='105.235' text-anchor='middle' font-size='12' fill='#38bdf8' font-family='sans-serif'>6 km</text><text x='175' y='95.2346' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>?</text></svg>"
            },
            {
                "id": "sinusk10l2_test_5",
                "category": "kurs_sinus_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "sinus_kosinussatz",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Feld hat zwei Seiten 50 m und 70 m mit 80° dazwischen. Flächeninhalt? (1 Nachkommastelle)",
                "answers": [
                    "1723,4 m²",
                    "3446,8 m²",
                    "303,9 m²",
                    "1750,0 m²"
                ],
                "correct": 0,
                "explanation": "A = ½ · 50 · 70 · sin 80° = 1750 · 0,985 ≈ 1723,4 m²."
            },
            {
                "id": "sinusk10l2_test_6",
                "category": "kurs_sinus_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "sinus_kosinussatz",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Dreieck hat die Seiten 4 cm, 5 cm und 6 cm. Wie groß ist sein größter Winkel?",
                "answers": [
                    "82,8°",
                    "41,4°",
                    "55,8°",
                    "97,2°"
                ],
                "correct": 0,
                "explanation": "Der größte Winkel liegt der längsten Seite gegenüber: cos γ = (4² + 5² − 6²) : (2 · 4 · 5) = 0,125, also γ ≈ 82,8°."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "kugel_k10_l2",
        "kurs": "kugel_k10",
        "order": 2,
        "icon": "🍦",
        "title": "Kugel anwenden",
        "kurz": "Zusammengesetzte Körper, Masse, Radius",
        "erklaerung": {
            "intro": "Viele Körper sind <b>zusammengesetzt</b>: Du berechnest die Teile einzeln und addierst. Eine <b>Halbkugel</b> hat V = 2/3 · π · r³. Kennst du das Volumen, rechnest du rückwärts: r³ = 3 · V : (4π). Die <b>Masse</b> ist m = Dichte · Volumen. Wir rechnen mit π ≈ 3,14.",
            "merksatz": "Zerlegen, Teile einzeln berechnen, addieren – und für die Masse: Dichte mal Volumen.",
            "beispiele": [
                "🏠 Silo = Zylinder + Halbkugel:<svg viewBox='0 0 270 190' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M80 70 A45 45 0 0 1 170 70' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><rect x='80' y='70' width='90' height='100' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><ellipse cx='125' cy='70' rx='45' ry='9' fill='none' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3,3'/><path d='M80 170 A45 9 0 0 0 170 170' fill='none' stroke='#38bdf8' stroke-width='2'/><line x1='125' y1='70' x2='80' y2='70' stroke='#f59e0b' stroke-width='2.5'/><text x='74' y='74' text-anchor='end' font-size='12' fill='#f59e0b' font-family='sans-serif'>r = 3 m</text><line x1='184' y1='70' x2='184' y2='170' stroke='#10b981' stroke-width='1.6'/><text x='190' y='124' text-anchor='start' font-size='12' fill='#10b981' font-family='sans-serif'>h = 10 m</text></svg>V = 3,14 · 9 · 10 + 2/3 · 3,14 · 27 = 282,6 + 56,52 = 339,12 m³.",
                "🍦 Eiswaffel = Kegel + Halbkugel mit gleichem Radius.<svg viewBox='0 0 260 195' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M82 72 A38 38 0 0 1 158 72' fill='rgba(244,63,94,0.25)' stroke='#f43f5e' stroke-width='2'/><polygon points='82,72 158,72 120,180' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><path d='M98 82 L132 124 M142 82 L108 124' stroke='#f59e0b' stroke-width='1' opacity='0.6'/><ellipse cx='120' cy='72' rx='38' ry='8' fill='none' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3,3'/><line x1='120' y1='72' x2='82' y2='72' stroke='#e5e7eb' stroke-width='2.2'/><text x='76' y='76' text-anchor='end' font-size='12' fill='#e5e7eb' font-family='sans-serif'>r</text><line x1='174' y1='72' x2='174' y2='180' stroke='#10b981' stroke-width='1.6'/><line x1='120' y1='180' x2='178' y2='180' stroke='#94a3b8' stroke-width='0.8' stroke-dasharray='2,3'/><text x='180' y='130' text-anchor='start' font-size='12' fill='#10b981' font-family='sans-serif'>h</text></svg>",
                "🔙 Rückwärts: V = 113,04 cm³ → r³ = 113,04 · 3 : 12,56 = 27 → r = 3 cm.",
                "⚖️ Stahlkugel mit r = 2 cm: V = 4/3 · 3,14 · 8 ≈ 33,49 cm³. Mit 7,8 g/cm³: m ≈ 261,2 g."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "kugelk10l2u_leicht_1",
                    "category": "kurs_kugel_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "kugel",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Mit welcher Formel berechnest du das Volumen einer Halbkugel?",
                    "answers": [
                        "V = 2/3 · π · r³",
                        "V = 4/3 · π · r³",
                        "V = 2 · π · r²",
                        "V = 1/3 · π · r³"
                    ],
                    "correct": 0,
                    "explanation": "Eine Halbkugel ist die Hälfte der Kugel: ½ · 4/3 · π · r³ = 2/3 · π · r³."
                },
                {
                    "id": "kugelk10l2u_leicht_2",
                    "category": "kurs_kugel_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "kugel",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ein Silo besteht aus diesen Teilen. Wie berechnest du sein Volumen?",
                    "answers": [
                        "Zylinder + Halbkugel",
                        "Zylinder + Kugel",
                        "Zylinder − Halbkugel",
                        "Kegel + Halbkugel"
                    ],
                    "correct": 0,
                    "explanation": "Das Silo ist ein Zylinder mit einer Halbkugel als Dach. Beide Volumen werden addiert.",
                    "grafik": "<svg viewBox='0 0 270 190' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M80 70 A45 45 0 0 1 170 70' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><rect x='80' y='70' width='90' height='100' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><ellipse cx='125' cy='70' rx='45' ry='9' fill='none' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3,3'/><path d='M80 170 A45 9 0 0 0 170 170' fill='none' stroke='#38bdf8' stroke-width='2'/><line x1='125' y1='70' x2='80' y2='70' stroke='#f59e0b' stroke-width='2.5'/><text x='74' y='74' text-anchor='end' font-size='12' fill='#f59e0b' font-family='sans-serif'>r</text><line x1='184' y1='70' x2='184' y2='170' stroke='#10b981' stroke-width='1.6'/><text x='190' y='124' text-anchor='start' font-size='12' fill='#10b981' font-family='sans-serif'>h</text></svg>"
                },
                {
                    "id": "kugelk10l2u_leicht_3",
                    "category": "kurs_kugel_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "kugel",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Eine Stahlkugel hat 10 cm³ Volumen. 1 cm³ Stahl wiegt 7,8 g. Wie schwer ist die Kugel?",
                    "answers": [
                        "78 g",
                        "780 g",
                        "17,8 g",
                        "1,3 g"
                    ],
                    "correct": 0,
                    "explanation": "Masse = Dichte · Volumen = 7,8 g/cm³ · 10 cm³ = 78 g."
                },
                {
                    "id": "kugelk10l2u_leicht_4",
                    "category": "kurs_kugel_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "kugel",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Eine Eiswaffel ist voll Eis, oben sitzt eine Halbkugel Eis. Aus welchen Körpern besteht das?",
                    "answers": [
                        "Kegel + Halbkugel",
                        "Zylinder + Halbkugel",
                        "Pyramide + Kugel",
                        "Kegel + ganze Kugel"
                    ],
                    "correct": 0,
                    "explanation": "Die Waffel ist ein Kegel, das Eis oben eine Halbkugel mit demselben Radius.",
                    "grafik": "<svg viewBox='0 0 260 195' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M82 72 A38 38 0 0 1 158 72' fill='rgba(244,63,94,0.25)' stroke='#f43f5e' stroke-width='2'/><polygon points='82,72 158,72 120,180' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><path d='M98 82 L132 124 M142 82 L108 124' stroke='#f59e0b' stroke-width='1' opacity='0.6'/><ellipse cx='120' cy='72' rx='38' ry='8' fill='none' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3,3'/><line x1='120' y1='72' x2='82' y2='72' stroke='#e5e7eb' stroke-width='2.2'/><text x='76' y='76' text-anchor='end' font-size='12' fill='#e5e7eb' font-family='sans-serif'>r</text><line x1='174' y1='72' x2='174' y2='180' stroke='#10b981' stroke-width='1.6'/><line x1='120' y1='180' x2='178' y2='180' stroke='#94a3b8' stroke-width='0.8' stroke-dasharray='2,3'/><text x='180' y='130' text-anchor='start' font-size='12' fill='#10b981' font-family='sans-serif'>h</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "kugelk10l2u_mittel_1",
                    "category": "kurs_kugel_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "kugel",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Silo: Zylinder mit r = 2 m und h = 6 m, oben eine Halbkugel. Volumen? (π ≈ 3,14, 1 Nachkommastelle)",
                    "answers": [
                        "92,1 m³",
                        "108,9 m³",
                        "75,4 m³",
                        "58,6 m³"
                    ],
                    "correct": 0,
                    "explanation": "Zylinder: 3,14 · 4 · 6 = 75,36 m³. Halbkugel: 2/3 · 3,14 · 8 ≈ 16,75 m³. Zusammen ≈ 92,1 m³.",
                    "grafik": "<svg viewBox='0 0 270 190' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M80 70 A45 45 0 0 1 170 70' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><rect x='80' y='70' width='90' height='100' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><ellipse cx='125' cy='70' rx='45' ry='9' fill='none' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3,3'/><path d='M80 170 A45 9 0 0 0 170 170' fill='none' stroke='#38bdf8' stroke-width='2'/><line x1='125' y1='70' x2='80' y2='70' stroke='#f59e0b' stroke-width='2.5'/><text x='74' y='74' text-anchor='end' font-size='12' fill='#f59e0b' font-family='sans-serif'>r = 2 m</text><line x1='184' y1='70' x2='184' y2='170' stroke='#10b981' stroke-width='1.6'/><text x='190' y='124' text-anchor='start' font-size='12' fill='#10b981' font-family='sans-serif'>h = 6 m</text></svg>"
                },
                {
                    "id": "kugelk10l2u_mittel_2",
                    "category": "kurs_kugel_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "kugel",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Eine Holzkugel mit r = 3 cm wiegt 80 g. Wie schwer ist eine Kugel aus gleichem Holz mit r = 6 cm?",
                    "answers": [
                        "640 g",
                        "160 g",
                        "320 g",
                        "480 g"
                    ],
                    "correct": 0,
                    "explanation": "Doppelter Radius heißt 2³ = 8-faches Volumen und damit 8-fache Masse: 80 g · 8 = 640 g."
                },
                {
                    "id": "kugelk10l2u_mittel_3",
                    "category": "kurs_kugel_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "kugel",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Eine Kugel hat das Volumen 904,32 cm³ (π ≈ 3,14). Wie groß ist ihr Radius?",
                    "answers": [
                        "6 cm",
                        "14,7 cm",
                        "72 cm",
                        "12 cm"
                    ],
                    "correct": 0,
                    "explanation": "r³ = 904,32 · 3 : (4 · 3,14) = 216. Die dritte Wurzel aus 216 ist 6, also r = 6 cm."
                },
                {
                    "id": "kugelk10l2u_mittel_4",
                    "category": "kurs_kugel_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "kugel",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Eiswaffel (Kegel): r = 3 cm, h = 10 cm, voll Eis. Oben eine Halbkugel Eis. Wie viel Eis? (π ≈ 3,14)",
                    "answers": [
                        "150,7 cm³",
                        "207,2 cm³",
                        "339,1 cm³",
                        "94,2 cm³"
                    ],
                    "correct": 0,
                    "explanation": "Kegel: 1/3 · 3,14 · 9 · 10 = 94,2 cm³. Halbkugel: 2/3 · 3,14 · 27 = 56,52 cm³. Zusammen ≈ 150,7 cm³.",
                    "grafik": "<svg viewBox='0 0 260 195' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M82 72 A38 38 0 0 1 158 72' fill='rgba(244,63,94,0.25)' stroke='#f43f5e' stroke-width='2'/><polygon points='82,72 158,72 120,180' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><path d='M98 82 L132 124 M142 82 L108 124' stroke='#f59e0b' stroke-width='1' opacity='0.6'/><ellipse cx='120' cy='72' rx='38' ry='8' fill='none' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3,3'/><line x1='120' y1='72' x2='82' y2='72' stroke='#e5e7eb' stroke-width='2.2'/><text x='76' y='76' text-anchor='end' font-size='12' fill='#e5e7eb' font-family='sans-serif'>r = 3 cm</text><line x1='174' y1='72' x2='174' y2='180' stroke='#10b981' stroke-width='1.6'/><line x1='120' y1='180' x2='178' y2='180' stroke='#94a3b8' stroke-width='0.8' stroke-dasharray='2,3'/><text x='180' y='130' text-anchor='start' font-size='12' fill='#10b981' font-family='sans-serif'>h = 10 cm</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "kugelk10l2u_schwer_1",
                    "category": "kurs_kugel_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "kugel",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Eine Goldkugel wiegt 193 g. 1 cm³ Gold wiegt 19,3 g. Welchen Radius hat sie? (π ≈ 3,14, 1 Nachkommastelle)",
                    "answers": [
                        "1,3 cm",
                        "2,2 cm",
                        "2,7 cm",
                        "1,5 cm"
                    ],
                    "correct": 0,
                    "explanation": "V = 193 : 19,3 = 10 cm³. r³ = 3 · 10 : (4 · 3,14) ≈ 2,39, also r ≈ 1,3 cm."
                },
                {
                    "id": "kugelk10l2u_schwer_2",
                    "category": "kurs_kugel_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "kugel",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Eine Schale hat die Form einer Halbkugel mit r = 9 cm (innen). Wie viele Liter passen hinein? (π ≈ 3,14)",
                    "answers": [
                        "1,5 l",
                        "3,1 l",
                        "15,3 l",
                        "0,8 l"
                    ],
                    "correct": 0,
                    "explanation": "V = 2/3 · 3,14 · 729 ≈ 1526 cm³. 1000 cm³ = 1 l, also passen ≈ 1,5 l hinein."
                },
                {
                    "id": "kugelk10l2u_schwer_3",
                    "category": "kurs_kugel_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "kugel",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Eine Kugel hat das 27-fache Volumen einer anderen. Wie viel mal so groß ist ihr Radius?",
                    "answers": [
                        "3-mal",
                        "9-mal",
                        "27-mal",
                        "5,2-mal"
                    ],
                    "correct": 0,
                    "explanation": "Das Volumen wächst mit r³. Aus k³ = 27 folgt k = 3."
                },
                {
                    "id": "kugelk10l2u_schwer_4",
                    "category": "kurs_kugel_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "kugel",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Kapsel: Zylinder (r = 1 cm, h = 4 cm) mit je einer Halbkugel an beiden Enden. Volumen? (π ≈ 3,14)",
                    "answers": [
                        "16,7 cm³",
                        "14,7 cm³",
                        "12,6 cm³",
                        "20,9 cm³"
                    ],
                    "correct": 0,
                    "explanation": "Zylinder: 3,14 · 1 · 4 = 12,56 cm³. Zwei Halbkugeln = eine Kugel: 4/3 · 3,14 ≈ 4,19 cm³. Zusammen ≈ 16,7 cm³.",
                    "grafik": "<svg viewBox='0 0 320 140' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M90 40 A30 30 0 0 0 90 100' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><path d='M230 40 A30 30 0 0 1 230 100' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><rect x='90' y='40' width='140' height='60' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='230' y1='70' x2='230' y2='40' stroke='#f59e0b' stroke-width='2'/><text x='234' y='32' text-anchor='start' font-size='12' fill='#f59e0b' font-family='sans-serif'>r = 1 cm</text><line x1='90' y1='114' x2='230' y2='114' stroke='#10b981' stroke-width='1.6'/><line x1='90' y1='109' x2='90' y2='119' stroke='#10b981' stroke-width='1.6'/><line x1='230' y1='109' x2='230' y2='119' stroke='#10b981' stroke-width='1.6'/><text x='160' y='131' text-anchor='middle' font-size='12' fill='#10b981' font-family='sans-serif'>h = 4 cm</text></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "kugelk10l2_test_1",
                "category": "kurs_kugel_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "kugel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Eine Halbkugel hat r = 6 cm. Wie groß ist ihr Volumen? (π ≈ 3,14, 1 Nachkommastelle)",
                "answers": [
                    "452,2 cm³",
                    "904,3 cm³",
                    "226,1 cm³",
                    "75,4 cm³"
                ],
                "correct": 0,
                "explanation": "V = 2/3 · 3,14 · 6³ = 2/3 · 3,14 · 216 ≈ 452,2 cm³."
            },
            {
                "id": "kugelk10l2_test_2",
                "category": "kurs_kugel_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "kugel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Eine Eisenkugel hat 50 cm³ Volumen. 1 cm³ Eisen wiegt 7,9 g. Wie schwer ist sie?",
                "answers": [
                    "395 g",
                    "3950 g",
                    "57,9 g",
                    "6,3 g"
                ],
                "correct": 0,
                "explanation": "Masse = Dichte · Volumen = 7,9 g/cm³ · 50 cm³ = 395 g."
            },
            {
                "id": "kugelk10l2_test_3",
                "category": "kurs_kugel_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "kugel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Schneemann: Die untere Kugel hat r = 30 cm, die obere r = 15 cm. Wie viel mal so viel Schnee steckt unten?",
                "answers": [
                    "8-mal",
                    "2-mal",
                    "4-mal",
                    "6-mal"
                ],
                "correct": 0,
                "explanation": "Der Radius ist doppelt so groß. Das Volumen wächst mit r³: 2³ = 8."
            },
            {
                "id": "kugelk10l2_test_4",
                "category": "kurs_kugel_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "kugel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Eine Kugel hat das Volumen 3052,08 cm³ (π ≈ 3,14). Wie groß ist ihr Radius?",
                "answers": [
                    "9 cm",
                    "27 cm",
                    "18 cm",
                    "243 cm"
                ],
                "correct": 0,
                "explanation": "r³ = 3052,08 · 3 : (4 · 3,14) = 729. Die dritte Wurzel aus 729 ist 9, also r = 9 cm."
            },
            {
                "id": "kugelk10l2_test_5",
                "category": "kurs_kugel_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "kugel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Waffel (Kegel, r = 2 cm, h = 9 cm) voll Eis, oben eine Halbkugel Eis. Gesamtvolumen? (π ≈ 3,14)",
                "answers": [
                    "54,4 cm³",
                    "71,2 cm³",
                    "129,8 cm³",
                    "37,7 cm³"
                ],
                "correct": 0,
                "explanation": "Kegel: 1/3 · 3,14 · 4 · 9 = 37,68 cm³. Halbkugel: 2/3 · 3,14 · 8 ≈ 16,75 cm³. Zusammen ≈ 54,4 cm³.",
                "grafik": "<svg viewBox='0 0 260 195' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M82 72 A38 38 0 0 1 158 72' fill='rgba(244,63,94,0.25)' stroke='#f43f5e' stroke-width='2'/><polygon points='82,72 158,72 120,180' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><path d='M98 82 L132 124 M142 82 L108 124' stroke='#f59e0b' stroke-width='1' opacity='0.6'/><ellipse cx='120' cy='72' rx='38' ry='8' fill='none' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3,3'/><line x1='120' y1='72' x2='82' y2='72' stroke='#e5e7eb' stroke-width='2.2'/><text x='76' y='76' text-anchor='end' font-size='12' fill='#e5e7eb' font-family='sans-serif'>r = 2 cm</text><line x1='174' y1='72' x2='174' y2='180' stroke='#10b981' stroke-width='1.6'/><line x1='120' y1='180' x2='178' y2='180' stroke='#94a3b8' stroke-width='0.8' stroke-dasharray='2,3'/><text x='180' y='130' text-anchor='start' font-size='12' fill='#10b981' font-family='sans-serif'>h = 9 cm</text></svg>"
            },
            {
                "id": "kugelk10l2_test_6",
                "category": "kurs_kugel_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "kugel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Turm: Zylinder mit r = 5 m und h = 12 m, oben eine Halbkugel-Kuppel. Volumen? (π ≈ 3,14)",
                "answers": [
                    "1203,7 m³",
                    "1465,3 m³",
                    "942,0 m³",
                    "680,3 m³"
                ],
                "correct": 0,
                "explanation": "Zylinder: 3,14 · 25 · 12 = 942 m³. Kuppel: 2/3 · 3,14 · 125 ≈ 261,67 m³. Zusammen ≈ 1203,7 m³.",
                "grafik": "<svg viewBox='0 0 270 190' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M80 70 A45 45 0 0 1 170 70' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><rect x='80' y='70' width='90' height='100' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><ellipse cx='125' cy='70' rx='45' ry='9' fill='none' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3,3'/><path d='M80 170 A45 9 0 0 0 170 170' fill='none' stroke='#38bdf8' stroke-width='2'/><line x1='125' y1='70' x2='80' y2='70' stroke='#f59e0b' stroke-width='2.5'/><text x='74' y='74' text-anchor='end' font-size='12' fill='#f59e0b' font-family='sans-serif'>r = 5 m</text><line x1='184' y1='70' x2='184' y2='170' stroke='#10b981' stroke-width='1.6'/><text x='190' y='124' text-anchor='start' font-size='12' fill='#10b981' font-family='sans-serif'>h = 12 m</text></svg>"
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
