// Trigonometrie Klasse 9 – Ausbau (Lektion 3–4)
(function () {
    const extraLektionen = [
    {
        "id": "trig_k9_l3",
        "kurs": "trigonometrie_k9",
        "order": 3,
        "icon": "🎯",
        "title": "Winkel berechnen",
        "kurz": "Mit sin⁻¹, cos⁻¹ und tan⁻¹ den Winkel finden",
        "erklaerung": {
            "intro": "Kennst du <b>zwei Seiten</b>, kannst du den <b>Winkel</b> berechnen. <b>1.</b> Welche Seiten sind gegeben – Gegenkathete, Ankathete, Hypotenuse? <b>2.</b> Passende Funktion wählen (sin, cos oder tan) und das Verhältnis ausrechnen. <b>3.</b> Mit der <b>Umkehrfunktion</b> den Winkel holen: Taste <b>SHIFT + sin</b> (sin⁻¹). Der Taschenrechner muss auf <b>DEG</b> stehen!",
            "merksatz": "Seiten gegeben → Verhältnis ausrechnen → mit sin⁻¹, cos⁻¹ oder tan⁻¹ den Winkel holen. Taschenrechner auf DEG.",
            "beispiele": [
                "Gegenkathete 3 cm, Hypotenuse 5 cm: sin α = 3 : 5 = 0,6 → α = sin⁻¹(0,6) ≈ 36,9°.<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,130.0 240.0,130.0 240.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><path d='M 230.0 130.0 L 230.0 120.0 L 240.0 120.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><path d='M 70 130 A 40 40 0 0 0 66.2 111.9' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='80.0' y='124.0' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>α</text><text x='248.0' y='84.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 cm</text><text x='122.0' y='72.0' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 cm</text></svg>",
                "Ankathete 4 cm, Hypotenuse 8 cm: cos α = 0,5 → α = 60°.",
                "Gegenkathete 7 cm, Ankathete 7 cm: tan α = 1 → α = 45°."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "trigk9l3u_leicht_1",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "sin α = 0,5. Wie groß ist α?",
                    "answers": [
                        "60°",
                        "30°",
                        "45°",
                        "0,5°"
                    ],
                    "correct": 1,
                    "explanation": "sin⁻¹(0,5) = 30°."
                },
                {
                    "id": "trigk9l3u_leicht_2",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "cos α = 0,5. Wie groß ist α?",
                    "answers": [
                        "60°",
                        "30°",
                        "45°",
                        "90°"
                    ],
                    "correct": 0,
                    "explanation": "cos⁻¹(0,5) = 60°."
                },
                {
                    "id": "trigk9l3u_leicht_3",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "tan α = 1. Wie groß ist α?",
                    "answers": [
                        "45°",
                        "1°",
                        "90°",
                        "30°"
                    ],
                    "correct": 0,
                    "explanation": "tan⁻¹(1) = 45°: Gegenkathete und Ankathete sind gleich lang."
                },
                {
                    "id": "trigk9l3u_leicht_4",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Mit welcher Taste berechnest du α aus sin α = 0,6?",
                    "answers": [
                        "sin (normal)",
                        "√ (Wurzel)",
                        "sin⁻¹ (SHIFT + sin)",
                        "x² (Quadrat)"
                    ],
                    "correct": 2,
                    "explanation": "Die Umkehrfunktion sin⁻¹ liefert den Winkel."
                },
                {
                    "id": "trigk9l3u_leicht_5",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Berechne den Winkel α (Gegenkathete = 3 cm, Hypotenuse = 5 cm).",
                    "answers": [
                        "≈ 53,1°",
                        "≈ 31°",
                        "≈ 0,6°",
                        "≈ 36,9°"
                    ],
                    "correct": 3,
                    "explanation": "sin α = 3 : 5 = 0,6. Dann mit sin⁻¹ (SHIFT + sin): α ≈ 36,9°.",
                    "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,130.0 240.0,130.0 240.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><path d='M 230.0 130.0 L 230.0 120.0 L 240.0 120.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><path d='M 70 130 A 40 40 0 0 0 66.2 111.9' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='80.0' y='124.0' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>α</text><text x='248.0' y='84.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 cm</text><text x='122.0' y='72.0' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 cm</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "trigk9l3u_mittel_1",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Berechne den Winkel α (Ankathete = 4 cm, Hypotenuse = 5 cm).",
                    "answers": [
                        "≈ 53,1°",
                        "≈ 38,7°",
                        "≈ 0,8°",
                        "≈ 36,9°"
                    ],
                    "correct": 3,
                    "explanation": "cos α = 4 : 5 = 0,8. Dann mit cos⁻¹ (SHIFT + cos): α ≈ 36,9°.",
                    "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,130.0 240.0,130.0 240.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><path d='M 230.0 130.0 L 230.0 120.0 L 240.0 120.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><path d='M 70 130 A 40 40 0 0 0 66.2 111.9' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='80.0' y='124.0' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>α</text><text x='135.0' y='150.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 cm</text><text x='122.0' y='72.0' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 cm</text></svg>"
                },
                {
                    "id": "trigk9l3u_mittel_2",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Berechne den Winkel α (Gegenkathete = 5 cm, Ankathete = 12 cm).",
                    "answers": [
                        "≈ 22,6°",
                        "≈ 24,6°",
                        "≈ 65,4°",
                        "≈ 67,4°"
                    ],
                    "correct": 0,
                    "explanation": "tan α = 5 : 12 = 0,417. Dann mit tan⁻¹ (SHIFT + tan): α ≈ 22,6°.",
                    "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,130.0 240.0,130.0 240.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><path d='M 230.0 130.0 L 230.0 120.0 L 240.0 120.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><path d='M 70 130 A 40 40 0 0 0 66.2 111.9' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='80.0' y='124.0' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>α</text><text x='135.0' y='150.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>12 cm</text><text x='248.0' y='84.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 cm</text></svg>"
                },
                {
                    "id": "trigk9l3u_mittel_3",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Berechne den Winkel α (Gegenkathete = 7 cm, Hypotenuse = 10 cm).",
                    "answers": [
                        "≈ 44,4°",
                        "≈ 45,6°",
                        "≈ 35°",
                        "≈ 0,7°"
                    ],
                    "correct": 0,
                    "explanation": "sin α = 7 : 10 = 0,7. Dann mit sin⁻¹ (SHIFT + sin): α ≈ 44,4°.",
                    "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,130.0 240.0,130.0 240.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><path d='M 230.0 130.0 L 230.0 120.0 L 240.0 120.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><path d='M 70 130 A 40 40 0 0 0 66.2 111.9' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='80.0' y='124.0' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>α</text><text x='248.0' y='84.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7 cm</text><text x='122.0' y='72.0' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 cm</text></svg>"
                },
                {
                    "id": "trigk9l3u_mittel_4",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Berechne den Winkel α (Ankathete = 9 cm, Hypotenuse = 15 cm).",
                    "answers": [
                        "≈ 36,9°",
                        "≈ 31°",
                        "≈ 0,6°",
                        "≈ 53,1°"
                    ],
                    "correct": 3,
                    "explanation": "cos α = 9 : 15 = 0,6. Dann mit cos⁻¹ (SHIFT + cos): α ≈ 53,1°.",
                    "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,130.0 240.0,130.0 240.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><path d='M 230.0 130.0 L 230.0 120.0 L 240.0 120.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><path d='M 70 130 A 40 40 0 0 0 66.2 111.9' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='80.0' y='124.0' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>α</text><text x='135.0' y='150.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9 cm</text><text x='122.0' y='72.0' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>15 cm</text></svg>"
                },
                {
                    "id": "trigk9l3u_mittel_5",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Dein Ergebnis für sin⁻¹(0,5) ist 0,52. Was ist falsch?",
                    "answers": [
                        "Nichts, das stimmt so",
                        "Man muss cos nehmen",
                        "Rechner steht auf RAD statt DEG",
                        "Man muss mal 100 rechnen"
                    ],
                    "correct": 2,
                    "explanation": "0,52 ist das Bogenmaß. Auf DEG umstellen, dann kommt 30° heraus."
                }
            ],
            "schwer": [
                {
                    "id": "trigk9l3u_schwer_1",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Berechne den Winkel α (Gegenkathete = 8 cm, Ankathete = 3 cm).",
                    "answers": [
                        "≈ 69,4°",
                        "≈ 20,6°",
                        "≈ 2,67°",
                        "≈ 1,2°"
                    ],
                    "correct": 0,
                    "explanation": "tan α = 8 : 3 = 2,667. Dann mit tan⁻¹ (SHIFT + tan): α ≈ 69,4°.",
                    "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,130.0 240.0,130.0 240.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><path d='M 230.0 130.0 L 230.0 120.0 L 240.0 120.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><path d='M 70 130 A 40 40 0 0 0 66.2 111.9' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='80.0' y='124.0' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>α</text><text x='135.0' y='150.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 cm</text><text x='248.0' y='84.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8 cm</text></svg>"
                },
                {
                    "id": "trigk9l3u_schwer_2",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Berechne den Winkel α (Gegenkathete = 4,5 cm, Hypotenuse = 12 cm).",
                    "answers": [
                        "≈ 68°",
                        "≈ 20,6°",
                        "≈ 0,38°",
                        "≈ 22°"
                    ],
                    "correct": 3,
                    "explanation": "sin α = 4,5 : 12 = 0,375. Dann mit sin⁻¹ (SHIFT + sin): α ≈ 22°.",
                    "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,130.0 240.0,130.0 240.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><path d='M 230.0 130.0 L 230.0 120.0 L 240.0 120.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><path d='M 70 130 A 40 40 0 0 0 66.2 111.9' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='80.0' y='124.0' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>α</text><text x='248.0' y='84.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4,5 cm</text><text x='122.0' y='72.0' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>12 cm</text></svg>"
                },
                {
                    "id": "trigk9l3u_schwer_3",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Berechne den Winkel α (Ankathete = 11 cm, Hypotenuse = 13 cm).",
                    "answers": [
                        "≈ 57,8°",
                        "≈ 40,2°",
                        "≈ 0,85°",
                        "≈ 32,2°"
                    ],
                    "correct": 3,
                    "explanation": "cos α = 11 : 13 = 0,846. Dann mit cos⁻¹ (SHIFT + cos): α ≈ 32,2°.",
                    "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,130.0 240.0,130.0 240.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><path d='M 230.0 130.0 L 230.0 120.0 L 240.0 120.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><path d='M 70 130 A 40 40 0 0 0 66.2 111.9' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='80.0' y='124.0' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>α</text><text x='135.0' y='150.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>11 cm</text><text x='122.0' y='72.0' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>13 cm</text></svg>"
                },
                {
                    "id": "trigk9l3u_schwer_4",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Im rechtwinkligen Dreieck ist α = 35°. Wie groß ist der dritte Winkel β?",
                    "answers": [
                        "55°",
                        "35°",
                        "145°",
                        "65°"
                    ],
                    "correct": 0,
                    "explanation": "Winkelsumme 180°: 180° − 90° − 35° = 55°."
                },
                {
                    "id": "trigk9l3u_schwer_5",
                    "category": "kurs_trig_k9_l3",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Gegenkathete 6 cm, Hypotenuse 10 cm. Wie groß ist β (der andere spitze Winkel)?",
                    "answers": [
                        "≈ 36,9°",
                        "≈ 31,0°",
                        "0,6°",
                        "≈ 53,1°"
                    ],
                    "correct": 3,
                    "explanation": "α = sin⁻¹(0,6) ≈ 36,9°. β = 90° − 36,9° ≈ 53,1°."
                }
            ]
        },
        "test": [
            {
                "id": "trigk9l3_test_1",
                "category": "kurs_trig_k9_l3",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Berechne den Winkel α (Gegenkathete = 5 cm, Hypotenuse = 13 cm).",
                "answers": [
                    "≈ 22,6°",
                    "≈ 67,4°",
                    "≈ 21°",
                    "≈ 0,38°"
                ],
                "correct": 0,
                "explanation": "sin α = 5 : 13 = 0,385. Dann mit sin⁻¹ (SHIFT + sin): α ≈ 22,6°.",
                "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,130.0 240.0,130.0 240.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><path d='M 230.0 130.0 L 230.0 120.0 L 240.0 120.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><path d='M 70 130 A 40 40 0 0 0 66.2 111.9' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='80.0' y='124.0' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>α</text><text x='248.0' y='84.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 cm</text><text x='122.0' y='72.0' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>13 cm</text></svg>"
            },
            {
                "id": "trigk9l3_test_2",
                "category": "kurs_trig_k9_l3",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Berechne den Winkel α (Ankathete = 6 cm, Hypotenuse = 10 cm).",
                "answers": [
                    "≈ 36,9°",
                    "≈ 31°",
                    "≈ 0,6°",
                    "≈ 53,1°"
                ],
                "correct": 3,
                "explanation": "cos α = 6 : 10 = 0,6. Dann mit cos⁻¹ (SHIFT + cos): α ≈ 53,1°.",
                "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,130.0 240.0,130.0 240.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><path d='M 230.0 130.0 L 230.0 120.0 L 240.0 120.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><path d='M 70 130 A 40 40 0 0 0 66.2 111.9' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='80.0' y='124.0' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>α</text><text x='135.0' y='150.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 cm</text><text x='122.0' y='72.0' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 cm</text></svg>"
            },
            {
                "id": "trigk9l3_test_3",
                "category": "kurs_trig_k9_l3",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Berechne den Winkel α (Gegenkathete = 4 cm, Ankathete = 7 cm).",
                "answers": [
                    "≈ 34,8°",
                    "≈ 29,7°",
                    "≈ 55,2°",
                    "≈ 60,3°"
                ],
                "correct": 1,
                "explanation": "tan α = 4 : 7 = 0,571. Dann mit tan⁻¹ (SHIFT + tan): α ≈ 29,7°.",
                "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,130.0 240.0,130.0 240.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><path d='M 230.0 130.0 L 230.0 120.0 L 240.0 120.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><path d='M 70 130 A 40 40 0 0 0 66.2 111.9' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='80.0' y='124.0' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>α</text><text x='135.0' y='150.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7 cm</text><text x='248.0' y='84.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 cm</text></svg>"
            },
            {
                "id": "trigk9l3_test_4",
                "category": "kurs_trig_k9_l3",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Berechne den Winkel α (Gegenkathete = 9 cm, Ankathete = 9 cm).",
                "answers": [
                    "≈ 90°",
                    "≈ 45°",
                    "≈ 0°",
                    "≈ 1°"
                ],
                "correct": 1,
                "explanation": "tan α = 9 : 9 = 1. Dann mit tan⁻¹ (SHIFT + tan): α ≈ 45°.",
                "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,130.0 240.0,130.0 240.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><path d='M 230.0 130.0 L 230.0 120.0 L 240.0 120.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><path d='M 70 130 A 40 40 0 0 0 66.2 111.9' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='80.0' y='124.0' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>α</text><text x='135.0' y='150.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9 cm</text><text x='248.0' y='84.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9 cm</text></svg>"
            },
            {
                "id": "trigk9l3_test_5",
                "category": "kurs_trig_k9_l3",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "sin α = 0,866. Wie groß ist α (gerundet)?",
                "answers": [
                    "30°",
                    "60°",
                    "45°",
                    "86,6°"
                ],
                "correct": 1,
                "explanation": "sin⁻¹(0,866) ≈ 60°."
            },
            {
                "id": "trigk9l3_test_6",
                "category": "kurs_trig_k9_l3",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Funktion nimmst du, wenn Ankathete und Hypotenuse gegeben sind?",
                "answers": [
                    "cos",
                    "sin",
                    "tan",
                    "Pythagoras"
                ],
                "correct": 0,
                "explanation": "cos α = Ankathete : Hypotenuse."
            },
            {
                "id": "trigk9l3_test_7",
                "category": "kurs_trig_k9_l3",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Berechne den Winkel α (Gegenkathete = 8 cm, Hypotenuse = 17 cm).",
                "answers": [
                    "≈ 61,9°",
                    "≈ 25,2°",
                    "≈ 0,47°",
                    "≈ 28,1°"
                ],
                "correct": 3,
                "explanation": "sin α = 8 : 17 = 0,471. Dann mit sin⁻¹ (SHIFT + sin): α ≈ 28,1°.",
                "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30.0,130.0 240.0,130.0 240.0,30.0' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2'/><path d='M 230.0 130.0 L 230.0 120.0 L 240.0 120.0' fill='none' stroke='#f59e0b' stroke-width='1.5'/><path d='M 70 130 A 40 40 0 0 0 66.2 111.9' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='80.0' y='124.0' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>α</text><text x='248.0' y='84.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8 cm</text><text x='122.0' y='72.0' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>17 cm</text></svg>"
            },
            {
                "id": "trigk9l3_test_8",
                "category": "kurs_trig_k9_l3",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "tan α = 0,25. Wie groß ist α ungefähr?",
                "answers": [
                    "≈ 0,25°",
                    "≈ 75,96°",
                    "≈ 14,0°",
                    "≈ 25°"
                ],
                "correct": 2,
                "explanation": "tan⁻¹(0,25) ≈ 14,0°."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "trig_k9_l4",
        "kurs": "trigonometrie_k9",
        "order": 4,
        "icon": "🪜",
        "title": "Trigonometrie im Alltag",
        "kurz": "Leiter, Rampe, Schatten, Steigung",
        "erklaerung": {
            "intro": "So löst du Sachaufgaben: <b>1.</b> Skizze mit rechtem Winkel zeichnen. <b>2.</b> Gegeben und gesucht markieren. <b>3.</b> Seiten benennen: Gegenkathete, Ankathete, Hypotenuse (die längste, gegenüber dem rechten Winkel). <b>4.</b> sin, cos oder tan wählen und rechnen. <b>Steigung in Prozent</b>: 12 % heißt tan α = 0,12.",
            "merksatz": "Skizze → Seiten benennen → passende Funktion. Leiter = Hypotenuse. Steigung in % = tan α · 100.",
            "beispiele": [
                "Leiter 5 m, Winkel zum Boden 70°: Höhe = 5 · sin 70° ≈ 4,70 m.<svg viewBox='0 0 240 160' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='140' x2='200' y2='140' stroke='#94a3b8' stroke-width='3'/><line x1='160' y1='140' x2='160' y2='15' stroke='#94a3b8' stroke-width='6'/><line x1='70' y1='140' x2='160' y2='30' stroke='#f59e0b' stroke-width='4'/><text x='100.0' y='78.0' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>5 m</text><path d='M 92 140 A 22 22 0 0 0 84 123' fill='none' stroke='#38bdf8' stroke-width='2'/><text x='100.0' y='133.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#38bdf8'>70°</text><text x='170.0' y='90.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>h = ?</text></svg>",
                "Turmschatten 30 m, Sonnenwinkel 40°: Höhe = 30 · tan 40° ≈ 25,17 m.<svg viewBox='0 0 260 160' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='140' x2='240' y2='140' stroke='#94a3b8' stroke-width='3'/><rect x='190' y='30' width='16' height='110' fill='rgba(56,189,248,0.3)' stroke='#38bdf8'/><line x1='40.0' y1='140.0' x2='198.0' y2='30.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><text x='115.0' y='156.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Schatten 30 m</text><path d='M 70 140 A 30 30 0 0 0 64.6 123' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='78.0' y='132.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>40°</text><text x='214.0' y='90.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>h = ?</text></svg>",
                "Straße mit 10 % Steigung: tan α = 0,10 → α ≈ 5,7°."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "trigk9l4u_leicht_1",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Eine 5 m lange Leiter lehnt im Winkel von 70° an der Wand. Wie hoch reicht sie?",
                    "answers": [
                        "≈ 1,71 m",
                        "≈ 4,7 m",
                        "≈ 3,87 m",
                        "≈ 14,62 m"
                    ],
                    "correct": 1,
                    "explanation": "Höhe = 5 · sin(70°) = 5 · 0,9397 ≈ 4,7 m. (Taschenrechner auf DEG!)",
                    "grafik": "<svg viewBox='0 0 240 160' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='140' x2='200' y2='140' stroke='#94a3b8' stroke-width='3'/><line x1='160' y1='140' x2='160' y2='15' stroke='#94a3b8' stroke-width='6'/><line x1='70' y1='140' x2='160' y2='30' stroke='#f59e0b' stroke-width='4'/><text x='100.0' y='78.0' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>5 m</text><path d='M 92 140 A 22 22 0 0 0 84 123' fill='none' stroke='#38bdf8' stroke-width='2'/><text x='100.0' y='133.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#38bdf8'>70°</text><text x='170.0' y='90.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>h = ?</text></svg>"
                },
                {
                    "id": "trigk9l4u_leicht_2",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welche Seite ist bei einer angelehnten Leiter die Hypotenuse?",
                    "answers": [
                        "Die Wand",
                        "Der Boden",
                        "Die Leiter",
                        "Keine"
                    ],
                    "correct": 2,
                    "explanation": "Die Leiter liegt dem rechten Winkel (Wand/Boden) gegenüber."
                },
                {
                    "id": "trigk9l4u_leicht_3",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Eine Straße hat 10 % Steigung. Was bedeutet das?",
                    "answers": [
                        "10 m hoch auf 10 m",
                        "Der Winkel ist 10°",
                        "10 m hoch auf 100 m waagerecht",
                        "Die Straße ist 10 km lang"
                    ],
                    "correct": 2,
                    "explanation": "Steigung = Höhe : waagerechte Strecke = 10 : 100 = tan α."
                },
                {
                    "id": "trigk9l4u_leicht_4",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Ein Turm wirft einen 30 m langen Schatten. Die Sonne steht 40° hoch. Wie hoch ist der Turm?",
                    "answers": [
                        "≈ 19,28 m",
                        "≈ 25,17 m",
                        "≈ 39,16 m",
                        "≈ 251,73 m"
                    ],
                    "correct": 1,
                    "explanation": "Höhe = 30 · tan(40°) = 30 · 0,8391 ≈ 25,17 m. (Taschenrechner auf DEG!)",
                    "grafik": "<svg viewBox='0 0 260 160' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='140' x2='240' y2='140' stroke='#94a3b8' stroke-width='3'/><rect x='190' y='30' width='16' height='110' fill='rgba(56,189,248,0.3)' stroke='#38bdf8'/><line x1='40.0' y1='140.0' x2='198.0' y2='30.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><text x='115.0' y='156.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Schatten 30 m</text><path d='M 70 140 A 30 30 0 0 0 64.6 123' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='78.0' y='132.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>40°</text><text x='214.0' y='90.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>h = ?</text></svg>"
                },
                {
                    "id": "trigk9l4u_leicht_5",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Was muss am Taschenrechner eingestellt sein?",
                    "answers": [
                        "RAD",
                        "DEG (Grad)",
                        "GRA",
                        "egal"
                    ],
                    "correct": 1,
                    "explanation": "Winkel in Grad → Modus DEG."
                }
            ],
            "mittel": [
                {
                    "id": "trigk9l4u_mittel_1",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Eine 5 m lange Leiter steht im Winkel von 70°. Wie weit ist ihr Fuß von der Wand entfernt?",
                    "answers": [
                        "≈ 4,7 m",
                        "≈ 3,17 m",
                        "≈ 5,32 m",
                        "≈ 1,71 m"
                    ],
                    "correct": 3,
                    "explanation": "Abstand = 5 · cos(70°) = 5 · 0,342 ≈ 1,71 m. (Taschenrechner auf DEG!)"
                },
                {
                    "id": "trigk9l4u_mittel_2",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Eine Straße hat 10 % Steigung. Wie groß ist der Steigungswinkel?",
                    "answers": [
                        "≈ 84,3°",
                        "≈ 5,7°",
                        "≈ 11,4°",
                        "≈ 10°"
                    ],
                    "correct": 1,
                    "explanation": "tan α = 10 : 100 = 0,1 → α = tan⁻¹(0,1) ≈ 5,7°."
                },
                {
                    "id": "trigk9l4u_mittel_3",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ein Drachen hängt an einer 50 m langen Schnur im Winkel von 55°. Wie hoch fliegt er?",
                    "answers": [
                        "≈ 40,96 m",
                        "≈ 28,68 m",
                        "≈ 87,17 m",
                        "≈ 409,58 m"
                    ],
                    "correct": 0,
                    "explanation": "Höhe = 50 · sin(55°) = 50 · 0,8192 ≈ 40,96 m. (Taschenrechner auf DEG!)"
                },
                {
                    "id": "trigk9l4u_mittel_4",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Eine Rampe steigt auf 6 m waagerechter Länge um 0,5 m an. Wie groß ist der Steigungswinkel?",
                    "answers": [
                        "≈ 85,2°",
                        "≈ 9,5°",
                        "≈ 8,3°",
                        "≈ 4,8°"
                    ],
                    "correct": 3,
                    "explanation": "tan α = 0,5 : 6 = 0,083 → α = tan⁻¹(0,083) ≈ 4,8°."
                },
                {
                    "id": "trigk9l4u_mittel_5",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Du stehst 20 m vor einem Baum und siehst die Spitze unter 35°. Wie hoch ist der Baum (ohne Augenhöhe)?",
                    "answers": [
                        "≈ 11,47 m",
                        "≈ 9,48 m",
                        "≈ 24,42 m",
                        "≈ 14 m"
                    ],
                    "correct": 3,
                    "explanation": "Höhe = 20 · tan(35°) = 20 · 0,7002 ≈ 14 m. (Taschenrechner auf DEG!)"
                }
            ],
            "schwer": [
                {
                    "id": "trigk9l4u_schwer_1",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Eine 6 m lange Leiter reicht 4 m hoch an die Wand. Welchen Winkel hat sie zum Boden?",
                    "answers": [
                        "≈ 48,2°",
                        "≈ 33,7°",
                        "≈ 41,8°",
                        "≈ 66,7°"
                    ],
                    "correct": 2,
                    "explanation": "sin α = 4 : 6 = 0,667 → α = sin⁻¹(0,667) ≈ 41,8°."
                },
                {
                    "id": "trigk9l4u_schwer_2",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Eine Seilbahn fährt 1 200 m schräg mit 8° Steigung. Wie viel Höhe überwindet sie?",
                    "answers": [
                        "≈ 1 188,32 m",
                        "≈ 1 187,23 m",
                        "≈ 167,01 m",
                        "≈ 1 211,79 m"
                    ],
                    "correct": 2,
                    "explanation": "Höhenunterschied = 1 200 · sin(8°) = 1 200 · 0,1392 ≈ 167,01 m. (Taschenrechner auf DEG!)"
                },
                {
                    "id": "trigk9l4u_schwer_3",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Ein Schild zeigt 12 % Gefälle. Wie groß ist der Winkel?",
                    "answers": [
                        "≈ 83,2°",
                        "≈ 13,7°",
                        "≈ 12°",
                        "≈ 6,8°"
                    ],
                    "correct": 3,
                    "explanation": "tan α = 12 : 100 = 0,12 → α = tan⁻¹(0,12) ≈ 6,8°."
                },
                {
                    "id": "trigk9l4u_schwer_4",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Ein Dach hat 35° Neigung und ist 4 m breit (halbe Hausbreite, waagerecht). Wie lang ist der Dachsparren?",
                    "answers": [
                        "≈ 3,28 m",
                        "≈ 2,80 m",
                        "≈ 6,97 m",
                        "≈ 4,88 m"
                    ],
                    "correct": 3,
                    "explanation": "Sparren = Hypotenuse = 4 : cos 35° ≈ 4,88 m."
                },
                {
                    "id": "trigk9l4u_schwer_5",
                    "category": "kurs_trig_k9_l4",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "trigonometrie",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Rollstuhlrampen dürfen höchstens 6 % Steigung haben. Wie lang muss eine Rampe (waagerecht) für 30 cm Höhe mindestens sein?",
                    "answers": [
                        "1,8 m",
                        "50 cm",
                        "18 m",
                        "5 m"
                    ],
                    "correct": 3,
                    "explanation": "0,30 m : 0,06 = 5 m."
                }
            ]
        },
        "test": [
            {
                "id": "trigk9l4_test_1",
                "category": "kurs_trig_k9_l4",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Eine 6 m lange Leiter lehnt im Winkel von 65° an der Wand. Wie hoch reicht sie?",
                "answers": [
                    "≈ 2,54 m",
                    "≈ 4,96 m",
                    "≈ 5,44 m",
                    "≈ 14,2 m"
                ],
                "correct": 2,
                "explanation": "Höhe = 6 · sin(65°) = 6 · 0,9063 ≈ 5,44 m. (Taschenrechner auf DEG!)",
                "grafik": "<svg viewBox='0 0 240 160' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='140' x2='200' y2='140' stroke='#94a3b8' stroke-width='3'/><line x1='160' y1='140' x2='160' y2='15' stroke='#94a3b8' stroke-width='6'/><line x1='70' y1='140' x2='160' y2='30' stroke='#f59e0b' stroke-width='4'/><text x='100.0' y='78.0' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>6 m</text><path d='M 92 140 A 22 22 0 0 0 84 123' fill='none' stroke='#38bdf8' stroke-width='2'/><text x='100.0' y='133.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#38bdf8'>65°</text><text x='170.0' y='90.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>h = ?</text></svg>"
            },
            {
                "id": "trigk9l4_test_2",
                "category": "kurs_trig_k9_l4",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Mast wirft 12 m Schatten bei 50° Sonnenhöhe. Wie hoch ist der Mast?",
                "answers": [
                    "≈ 9,19 m",
                    "≈ 18,67 m",
                    "≈ 14,3 m",
                    "≈ 143,01 m"
                ],
                "correct": 2,
                "explanation": "Höhe = 12 · tan(50°) = 12 · 1,1918 ≈ 14,3 m. (Taschenrechner auf DEG!)",
                "grafik": "<svg viewBox='0 0 260 160' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='140' x2='240' y2='140' stroke='#94a3b8' stroke-width='3'/><rect x='190' y='30' width='16' height='110' fill='rgba(56,189,248,0.3)' stroke='#38bdf8'/><line x1='40.0' y1='140.0' x2='198.0' y2='30.0' stroke='#f59e0b' stroke-width='2' stroke-dasharray='5 4'/><text x='115.0' y='156.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Schatten 12 m</text><path d='M 70 140 A 30 30 0 0 0 64.6 123' fill='none' stroke='#f59e0b' stroke-width='2'/><text x='78.0' y='132.0' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>50°</text><text x='214.0' y='90.0' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>h = ?</text></svg>"
            },
            {
                "id": "trigk9l4_test_3",
                "category": "kurs_trig_k9_l4",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Eine Straße hat 8 % Steigung. Wie groß ist der Winkel?",
                "answers": [
                    "≈ 85,4°",
                    "≈ 4,6°",
                    "≈ 9,1°",
                    "≈ 8°"
                ],
                "correct": 1,
                "explanation": "tan α = 8 : 100 = 0,08 → α = tan⁻¹(0,08) ≈ 4,6°."
            },
            {
                "id": "trigk9l4_test_4",
                "category": "kurs_trig_k9_l4",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Eine 5 m lange Rutsche überwindet 3 m Höhe. Wie steil ist sie?",
                "answers": [
                    "≈ 53,1°",
                    "≈ 31°",
                    "≈ 60°",
                    "≈ 36,9°"
                ],
                "correct": 3,
                "explanation": "sin α = 3 : 5 = 0,6 → α = sin⁻¹(0,6) ≈ 36,9°."
            },
            {
                "id": "trigk9l4_test_5",
                "category": "kurs_trig_k9_l4",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Eine 4 m lange Leiter steht im Winkel von 60°. Wie weit ist ihr Fuß von der Wand?",
                "answers": [
                    "≈ 2 m",
                    "≈ 3,46 m",
                    "≈ 4,62 m",
                    "≈ 20 m"
                ],
                "correct": 0,
                "explanation": "Abstand = 4 · cos(60°) = 4 · 0,5 ≈ 2 m. (Taschenrechner auf DEG!)"
            },
            {
                "id": "trigk9l4_test_6",
                "category": "kurs_trig_k9_l4",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Funktion brauchst du: Schattenlänge und Sonnenwinkel gegeben, Turmhöhe gesucht?",
                "answers": [
                    "sin",
                    "tan",
                    "cos",
                    "Pythagoras"
                ],
                "correct": 1,
                "explanation": "Höhe = Gegenkathete, Schatten = Ankathete → tan."
            },
            {
                "id": "trigk9l4_test_7",
                "category": "kurs_trig_k9_l4",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Flugzeug steigt 200 m weit im Winkel von 30°. Wie viel Höhe gewinnt es?",
                "answers": [
                    "≈ 173,21 m",
                    "≈ 230,94 m",
                    "≈ 100 m",
                    "≈ 1 000 m"
                ],
                "correct": 2,
                "explanation": "Höhe = 200 · sin(30°) = 200 · 0,5 ≈ 100 m. (Taschenrechner auf DEG!)"
            },
            {
                "id": "trigk9l4_test_8",
                "category": "kurs_trig_k9_l4",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "trigonometrie",
                "difficulty": "mittel",
                "points": 10,
                "question": "Eine Rampe hat 5° Steigung. Wie viel Prozent sind das ungefähr?",
                "answers": [
                    "5 %",
                    "≈ 50 %",
                    "≈ 8,7 %",
                    "≈ 0,9 %"
                ],
                "correct": 2,
                "explanation": "tan 5° ≈ 0,087 = 8,7 %."
            }
        ],
        "bestehenAb": 0.8
    }
];
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
    }
})();
