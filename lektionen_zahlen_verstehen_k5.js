// Zahlen verstehen - Klasse 5 Mathe (Zahlenstrahl, Vergleichen, Runden, Stellenwerttafel)
(function () {
    const extraKurse = [{"id": "zahlen_verstehen_k5", "title": "Zahlen verstehen", "icon": "📏", "grade": 5, "subject": "mathe", "beschreibung": "Zahlenstrahl, Vergleichen, Runden und Stellenwerttafel – fit für die Mathearbeit."}];
    const extraLektionen = [
    {
        "id": "zverst_k5_l1",
        "kurs": "zahlen_verstehen_k5",
        "order": 1,
        "icon": "📏",
        "title": "Zahlen am Zahlenstrahl",
        "kurz": "Skala erkennen, Zahlen ablesen und eintragen",
        "erklaerung": {
            "intro": "Am <b>Zahlenstrahl</b> liegen die Zahlen der Größe nach: links die kleinen, rechts die großen. Alle Striche haben den <b>gleichen Abstand</b>. Bevor du abliest, findest du heraus, wie viel <b>ein Schritt</b> wert ist: Abstand zwischen zwei beschrifteten Zahlen <b>geteilt durch</b> die Anzahl der Schritte dazwischen.",
            "merksatz": "Erst die Schrittweite finden, dann abzählen: Schrittweite = Abstand der beschrifteten Zahlen : Anzahl der Schritte.",
            "beispiele": [
                "Von 0 bis 1000 sind es 10 Schritte. Ein Schritt ist 1000 : 10 = 100 wert. Der Pfeil steht beim 7. Strich: 700.<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 000</text><line x1='229.2' y1='8' x2='229.2' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='229.2,38 224.2,30 234.2,30' fill='#f59e0b'/></svg>",
                "Von 2 Mio bis 3 Mio sind es 10 Schritte, ein Schritt = 100 000. A liegt bei 2 300 000, B bei 2 800 000.<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2 Mio</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 Mio</text><line x1='110.8' y1='8' x2='110.8' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='110.8,38 105.8,30 115.8,30' fill='#f59e0b'/><text x='121.8' y='14' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>A</text><line x1='258.8' y1='8' x2='258.8' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='258.8,38 253.8,30 263.8,30' fill='#f59e0b'/><text x='269.8' y='14' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>B</text></svg>",
                "Vorgänger und Nachfolger: Am Zahlenstrahl steht der Vorgänger direkt links (1 kleiner), der Nachfolger direkt rechts (1 größer). Vorgänger von 50 000 ist 49 999, Nachfolger ist 50 001."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "zverstk5l1u_leicht_1",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Zahlenstrahl von 0 bis 100: Welche Zahl zeigt der Pfeil?",
                    "answers": [
                        "70",
                        "60",
                        "50",
                        "6"
                    ],
                    "correct": 1,
                    "explanation": "Von 0 bis 100 sind es 10 gleich große Schritte. Ein Schritt ist also 100 : 10 = 10 wert. Der Pfeil steht beim 6. Strich: 60.",
                    "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>100</text><line x1='199.6' y1='8' x2='199.6' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='199.6,38 194.6,30 204.6,30' fill='#f59e0b'/></svg>"
                },
                {
                    "id": "zverstk5l1u_leicht_2",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Zahlenstrahl von 0 bis 1 000: Welche Zahl zeigt der Pfeil?",
                    "answers": [
                        "400",
                        "200",
                        "30",
                        "300"
                    ],
                    "correct": 3,
                    "explanation": "Von 0 bis 1 000 sind es 10 gleich große Schritte. Ein Schritt ist also 1 000 : 10 = 100 wert. Der Pfeil steht beim 3. Strich: 300.",
                    "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 000</text><line x1='110.8' y1='8' x2='110.8' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='110.8,38 105.8,30 115.8,30' fill='#f59e0b'/></svg>"
                },
                {
                    "id": "zverstk5l1u_leicht_3",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wo liegen am Zahlenstrahl die größeren Zahlen?",
                    "answers": [
                        "Weiter links",
                        "Weiter rechts",
                        "Ganz oben",
                        "In der Mitte"
                    ],
                    "correct": 1,
                    "explanation": "Am Zahlenstrahl werden die Zahlen nach rechts immer größer."
                },
                {
                    "id": "zverstk5l1u_leicht_4",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Was ist der Nachfolger von 39 999?",
                    "answers": [
                        "40 000",
                        "39 998",
                        "40 001",
                        "39 990"
                    ],
                    "correct": 0,
                    "explanation": "Nachfolger = 1 mehr: 39 999 + 1 = 40 000."
                },
                {
                    "id": "zverstk5l1u_leicht_5",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Zahlenstrahl von 0 bis 500: Wie viel ist ein Schritt (von Strich zu Strich) wert?",
                    "answers": [
                        "1 000",
                        "100",
                        "10",
                        "200"
                    ],
                    "correct": 1,
                    "explanation": "Die Strecke von 0 bis 500 ist in 5 gleiche Abschnitte geteilt: 500 : 5 = 100.",
                    "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>500</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "zverstk5l1u_mittel_1",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Zahlenstrahl von 0 bis 10 000: Welche Zahl zeigt der Pfeil?",
                    "answers": [
                        "5 000",
                        "3 000",
                        "4 000",
                        "400"
                    ],
                    "correct": 2,
                    "explanation": "Von 0 bis 10 000 sind es 10 gleich große Schritte. Ein Schritt ist also 10 000 : 10 = 1 000 wert. Der Pfeil steht beim 4. Strich: 4 000.",
                    "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 000</text><line x1='140.4' y1='8' x2='140.4' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='140.4,38 135.4,30 145.4,30' fill='#f59e0b'/></svg>"
                },
                {
                    "id": "zverstk5l1u_mittel_2",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Zahlenstrahl von 5 000 bis 6 000: Welche Zahl zeigt der Pfeil?",
                    "answers": [
                        "5 700",
                        "5 800",
                        "5 600",
                        "5 070"
                    ],
                    "correct": 0,
                    "explanation": "Von 5 000 bis 6 000 sind es 10 gleich große Schritte. Ein Schritt ist also 1 000 : 10 = 100 wert. Der Pfeil steht beim 7. Strich: 5 700.",
                    "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 000</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 000</text><line x1='229.2' y1='8' x2='229.2' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='229.2,38 224.2,30 234.2,30' fill='#f59e0b'/></svg>"
                },
                {
                    "id": "zverstk5l1u_mittel_3",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Zahlenstrahl von 0 bis 2 000: Wie viel ist ein Schritt (von Strich zu Strich) wert?",
                    "answers": [
                        "2 000",
                        "20",
                        "400",
                        "200"
                    ],
                    "correct": 3,
                    "explanation": "Die Strecke von 0 bis 2 000 ist in 10 gleiche Abschnitte geteilt: 2 000 : 10 = 200.",
                    "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2 000</text></svg>"
                },
                {
                    "id": "zverstk5l1u_mittel_4",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Zahlenstrahl von 0 bis 1 000: Wie groß ist der Abstand zwischen A und B?",
                    "answers": [
                        "600",
                        "500",
                        "400",
                        "700"
                    ],
                    "correct": 1,
                    "explanation": "A = 200, B = 700. Abstand: 700 − 200 = 500.",
                    "grafik": "<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 000</text><line x1='81.2' y1='8' x2='81.2' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='81.2,38 76.2,30 86.2,30' fill='#f59e0b'/><text x='92.2' y='14' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>A</text><line x1='229.2' y1='8' x2='229.2' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='229.2,38 224.2,30 234.2,30' fill='#f59e0b'/><text x='240.2' y='14' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>B</text></svg>"
                },
                {
                    "id": "zverstk5l1u_mittel_5",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Zahl liegt genau in der Mitte zwischen 4 000 und 5 000?",
                    "answers": [
                        "4 050",
                        "4 005",
                        "4 500",
                        "5 500"
                    ],
                    "correct": 2,
                    "explanation": "Die Mitte ist der halbe Abstand: 4 000 + 500 = 4 500."
                }
            ],
            "schwer": [
                {
                    "id": "zverstk5l1u_schwer_1",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Zahlenstrahl von 2 Mio bis 3 Mio: Welche Zahl zeigt der Pfeil?",
                    "answers": [
                        "2 700 000",
                        "2 600 000",
                        "2 500 000",
                        "2 060 000"
                    ],
                    "correct": 1,
                    "explanation": "Von 2 000 000 bis 3 000 000 sind es 10 gleich große Schritte. Ein Schritt ist also 1 000 000 : 10 = 100 000 wert. Der Pfeil steht beim 6. Strich: 2 600 000.",
                    "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2 Mio</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 Mio</text><line x1='199.6' y1='8' x2='199.6' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='199.6,38 194.6,30 204.6,30' fill='#f59e0b'/></svg>"
                },
                {
                    "id": "zverstk5l1u_schwer_2",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Zahlenstrahl von 0 bis 100 000: Welche Zahl zeigt der Pfeil?",
                    "answers": [
                        "100 000",
                        "50 000",
                        "75 000",
                        "7 500"
                    ],
                    "correct": 2,
                    "explanation": "Von 0 bis 100 000 sind es 4 gleich große Schritte. Ein Schritt ist also 100 000 : 4 = 25 000 wert. Der Pfeil steht beim 3. Strich: 75 000.",
                    "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='96.0' y1='38' x2='96.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='244.0' y1='38' x2='244.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>100 000</text><line x1='244.0' y1='8' x2='244.0' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='244.0,38 239.0,30 249.0,30' fill='#f59e0b'/></svg>"
                },
                {
                    "id": "zverstk5l1u_schwer_3",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Zahlenstrahl von 300 bis 500: Wie viel ist ein Schritt (von Strich zu Strich) wert?",
                    "answers": [
                        "500",
                        "5",
                        "40",
                        "50"
                    ],
                    "correct": 3,
                    "explanation": "Die Strecke von 300 bis 500 ist in 4 gleiche Abschnitte geteilt: 200 : 4 = 50.",
                    "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='96.0' y1='38' x2='96.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='244.0' y1='38' x2='244.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>300</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>500</text></svg>"
                },
                {
                    "id": "zverstk5l1u_schwer_4",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Was ist der Vorgänger von 1 000 000?",
                    "answers": [
                        "999 000",
                        "1 000 001",
                        "99 999",
                        "999 999"
                    ],
                    "correct": 3,
                    "explanation": "Vorgänger = 1 weniger: 1 000 000 − 1 = 999 999."
                },
                {
                    "id": "zverstk5l1u_schwer_5",
                    "category": "kurs_zverst_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlenstrahl",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Zahlenstrahl von 0 bis 50 000: Wie groß ist der Abstand zwischen A und B?",
                    "answers": [
                        "30 000",
                        "20 000",
                        "25 000",
                        "40 000"
                    ],
                    "correct": 2,
                    "explanation": "A = 15 000, B = 40 000. Abstand: 40 000 − 15 000 = 25 000.",
                    "grafik": "<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>50 000</text><line x1='110.8' y1='8' x2='110.8' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='110.8,38 105.8,30 115.8,30' fill='#f59e0b'/><text x='121.8' y='14' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>A</text><line x1='258.8' y1='8' x2='258.8' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='258.8,38 253.8,30 263.8,30' fill='#f59e0b'/><text x='269.8' y='14' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>B</text></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "zverstk5l1_test_1",
                "category": "kurs_zverst_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlenstrahl",
                "difficulty": "mittel",
                "points": 10,
                "question": "Zahlenstrahl von 0 bis 200: Welche Zahl zeigt der Pfeil?",
                "answers": [
                    "140",
                    "160",
                    "120",
                    "14"
                ],
                "correct": 0,
                "explanation": "Von 0 bis 200 sind es 10 gleich große Schritte. Ein Schritt ist also 200 : 10 = 20 wert. Der Pfeil steht beim 7. Strich: 140.",
                "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>200</text><line x1='229.2' y1='8' x2='229.2' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='229.2,38 224.2,30 234.2,30' fill='#f59e0b'/></svg>"
            },
            {
                "id": "zverstk5l1_test_2",
                "category": "kurs_zverst_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlenstrahl",
                "difficulty": "mittel",
                "points": 10,
                "question": "Zahlenstrahl von 0 bis 1 Mio: Welche Zahl zeigt der Pfeil?",
                "answers": [
                    "500 000",
                    "400 000",
                    "300 000",
                    "40 000"
                ],
                "correct": 1,
                "explanation": "Von 0 bis 1 000 000 sind es 10 gleich große Schritte. Ein Schritt ist also 1 000 000 : 10 = 100 000 wert. Der Pfeil steht beim 4. Strich: 400 000.",
                "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 Mio</text><line x1='140.4' y1='8' x2='140.4' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='140.4,38 135.4,30 145.4,30' fill='#f59e0b'/></svg>"
            },
            {
                "id": "zverstk5l1_test_3",
                "category": "kurs_zverst_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlenstrahl",
                "difficulty": "mittel",
                "points": 10,
                "question": "Zahlenstrahl von 0 bis 600: Wie viel ist ein Schritt (von Strich zu Strich) wert?",
                "answers": [
                    "1 000",
                    "10",
                    "200",
                    "100"
                ],
                "correct": 3,
                "explanation": "Die Strecke von 0 bis 600 ist in 6 gleiche Abschnitte geteilt: 600 : 6 = 100.",
                "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='71.3' y1='38' x2='71.3' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='120.7' y1='38' x2='120.7' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='219.3' y1='38' x2='219.3' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='268.7' y1='38' x2='268.7' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>600</text></svg>"
            },
            {
                "id": "zverstk5l1_test_4",
                "category": "kurs_zverst_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlenstrahl",
                "difficulty": "mittel",
                "points": 10,
                "question": "Zahlenstrahl von 400 bis 500: Welche Zahl zeigt der Pfeil?",
                "answers": [
                    "430",
                    "440",
                    "420",
                    "403"
                ],
                "correct": 0,
                "explanation": "Von 400 bis 500 sind es 10 gleich große Schritte. Ein Schritt ist also 100 : 10 = 10 wert. Der Pfeil steht beim 3. Strich: 430.",
                "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>400</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>500</text><line x1='110.8' y1='8' x2='110.8' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='110.8,38 105.8,30 115.8,30' fill='#f59e0b'/></svg>"
            },
            {
                "id": "zverstk5l1_test_5",
                "category": "kurs_zverst_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlenstrahl",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl liegt genau in der Mitte zwischen 0 und 1 Million?",
                "answers": [
                    "50 000",
                    "5 000 000",
                    "500 000",
                    "100 000"
                ],
                "correct": 2,
                "explanation": "Die Hälfte von 1 000 000 ist 500 000."
            },
            {
                "id": "zverstk5l1_test_6",
                "category": "kurs_zverst_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlenstrahl",
                "difficulty": "mittel",
                "points": 10,
                "question": "Zahlenstrahl von 1 000 bis 2 000: Wie groß ist der Abstand zwischen A und B?",
                "answers": [
                    "600",
                    "400",
                    "1 600",
                    "500"
                ],
                "correct": 3,
                "explanation": "A = 1 100, B = 1 600. Abstand: 1 600 − 1 100 = 500.",
                "grafik": "<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 000</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2 000</text><line x1='51.6' y1='8' x2='51.6' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='51.6,38 46.6,30 56.6,30' fill='#f59e0b'/><text x='62.6' y='14' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>A</text><line x1='199.6' y1='8' x2='199.6' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='199.6,38 194.6,30 204.6,30' fill='#f59e0b'/><text x='210.6' y='14' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>B</text></svg>"
            },
            {
                "id": "zverstk5l1_test_7",
                "category": "kurs_zverst_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlenstrahl",
                "difficulty": "mittel",
                "points": 10,
                "question": "Zahlenstrahl von 0 bis 5 000: Welche Zahl zeigt der Pfeil?",
                "answers": [
                    "3 000",
                    "2 000",
                    "1 000",
                    "200"
                ],
                "correct": 1,
                "explanation": "Von 0 bis 5 000 sind es 5 gleich große Schritte. Ein Schritt ist also 5 000 : 5 = 1 000 wert. Der Pfeil steht beim 2. Strich: 2 000.",
                "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 000</text><line x1='140.4' y1='8' x2='140.4' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='140.4,38 135.4,30 145.4,30' fill='#f59e0b'/></svg>"
            },
            {
                "id": "zverstk5l1_test_8",
                "category": "kurs_zverst_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlenstrahl",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl ist der Nachfolger von 2 099 999?",
                "answers": [
                    "2 100 001",
                    "2 099 998",
                    "2 100 000",
                    "2 009 999"
                ],
                "correct": 2,
                "explanation": "Nachfolger = 1 mehr. Aus 2 099 999 wird 2 100 000."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "zverst_k5_l2",
        "kurs": "zahlen_verstehen_k5",
        "order": 2,
        "icon": "⚖️",
        "title": "Zahlen vergleichen und ordnen",
        "kurz": "Größer, kleiner und der Größe nach ordnen",
        "erklaerung": {
            "intro": "Zwei Zahlen vergleichst du so: <b>1.</b> Zähle die Stellen – die Zahl mit <b>mehr Stellen</b> ist größer. <b>2.</b> Haben beide gleich viele Stellen, vergleichst du <b>von links</b> Stelle für Stelle. Die erste Stelle, die verschieden ist, entscheidet. Zeichen: <b>&lt;</b> kleiner als, <b>&gt;</b> größer als, <b>=</b> gleich.",
            "merksatz": "Das Krokodil frisst immer die größere Zahl: Die offene Seite von &lt; und &gt; zeigt zur größeren Zahl.",
            "beispiele": [
                "45 312 und 45 287: Zehntausender gleich (4), Tausender gleich (5), Hunderter 3 &gt; 2. Also 45 312 &gt; 45 287.<svg viewBox='0 0 300 60' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='176' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='132' y='12' width='36' height='36' rx='8' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2' stroke-dasharray='4 3'/><text x='64' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>45 312</text><text x='236' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>45 287</text><text x='150' y='37' text-anchor='middle' font-size='18' font-weight='700' font-family='sans-serif' fill='#f59e0b'>?</text></svg>",
                "98 765 &lt; 100 000, denn 100 000 hat sechs Stellen und 98 765 nur fünf.",
                "Ordnen: 3 050 &lt; 3 500 &lt; 30 500 &lt; 35 000"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "zverstk5l2u_leicht_1",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welches Zeichen gehört zwischen 4 521 und 4 512?",
                    "answers": [
                        "<",
                        "=",
                        ">",
                        "≈"
                    ],
                    "correct": 2,
                    "explanation": "Vergleiche von links Stelle für Stelle. 4 521 > 4 512.",
                    "grafik": "<svg viewBox='0 0 300 60' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='176' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='132' y='12' width='36' height='36' rx='8' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2' stroke-dasharray='4 3'/><text x='64' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 521</text><text x='236' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 512</text><text x='150' y='37' text-anchor='middle' font-size='18' font-weight='700' font-family='sans-serif' fill='#f59e0b'>?</text></svg>"
                },
                {
                    "id": "zverstk5l2u_leicht_2",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welches Zeichen gehört zwischen 999 und 1 000?",
                    "answers": [
                        ">",
                        "=",
                        "≈",
                        "<"
                    ],
                    "correct": 3,
                    "explanation": "Die Zahl mit mehr Stellen ist größer. 999 < 1 000.",
                    "grafik": "<svg viewBox='0 0 300 60' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='176' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='132' y='12' width='36' height='36' rx='8' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2' stroke-dasharray='4 3'/><text x='64' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>999</text><text x='236' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 000</text><text x='150' y='37' text-anchor='middle' font-size='18' font-weight='700' font-family='sans-serif' fill='#f59e0b'>?</text></svg>"
                },
                {
                    "id": "zverstk5l2u_leicht_3",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welche Zahl ist am größten: 3 405, 3 540, 3 054, 3 450?",
                    "answers": [
                        "3 540",
                        "3 405",
                        "3 054",
                        "3 450"
                    ],
                    "correct": 0,
                    "explanation": "Erst die Anzahl der Stellen vergleichen, dann von links Stelle für Stelle. Am größten ist 3 540."
                },
                {
                    "id": "zverstk5l2u_leicht_4",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Was bedeutet das Zeichen <?",
                    "answers": [
                        "ist kleiner als",
                        "ist größer als",
                        "ist gleich",
                        "ist ungefähr"
                    ],
                    "correct": 0,
                    "explanation": "< heißt „ist kleiner als“, z. B. 3 < 5."
                },
                {
                    "id": "zverstk5l2u_leicht_5",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welches Zeichen gehört zwischen 70 000 und 7 000?",
                    "answers": [
                        "<",
                        "=",
                        "≈",
                        ">"
                    ],
                    "correct": 3,
                    "explanation": "Die Zahl mit mehr Stellen ist größer. 70 000 > 7 000.",
                    "grafik": "<svg viewBox='0 0 300 60' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='176' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='132' y='12' width='36' height='36' rx='8' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2' stroke-dasharray='4 3'/><text x='64' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>70 000</text><text x='236' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7 000</text><text x='150' y='37' text-anchor='middle' font-size='18' font-weight='700' font-family='sans-serif' fill='#f59e0b'>?</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "zverstk5l2u_mittel_1",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Zeichen gehört zwischen 560 400 und 564 000?",
                    "answers": [
                        "<",
                        ">",
                        "=",
                        "≈"
                    ],
                    "correct": 0,
                    "explanation": "Vergleiche von links Stelle für Stelle. 560 400 < 564 000.",
                    "grafik": "<svg viewBox='0 0 300 60' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='176' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='132' y='12' width='36' height='36' rx='8' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2' stroke-dasharray='4 3'/><text x='64' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>560 400</text><text x='236' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>564 000</text><text x='150' y='37' text-anchor='middle' font-size='18' font-weight='700' font-family='sans-serif' fill='#f59e0b'>?</text></svg>"
                },
                {
                    "id": "zverstk5l2u_mittel_2",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Zahl ist am größten: 89 999, 100 001, 99 998, 98 765?",
                    "answers": [
                        "89 999",
                        "99 998",
                        "100 001",
                        "98 765"
                    ],
                    "correct": 2,
                    "explanation": "Erst die Anzahl der Stellen vergleichen, dann von links Stelle für Stelle. Am größten ist 100 001."
                },
                {
                    "id": "zverstk5l2u_mittel_3",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Zahl ist am kleinsten: 12 034, 12 304, 12 340, 12 043?",
                    "answers": [
                        "12 304",
                        "12 340",
                        "12 034",
                        "12 043"
                    ],
                    "correct": 2,
                    "explanation": "Erst die Anzahl der Stellen vergleichen, dann von links Stelle für Stelle. Am kleinsten ist 12 034."
                },
                {
                    "id": "zverstk5l2u_mittel_4",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ordne 7 080, 7 800, 7 008, 70 080 vom kleinsten zum größten. Welche Reihe stimmt?",
                    "answers": [
                        "7 080 < 7 008 < 7 800 < 70 080",
                        "7 008 < 7 080 < 70 080 < 7 800",
                        "70 080 < 7 800 < 7 080 < 7 008",
                        "7 008 < 7 080 < 7 800 < 70 080"
                    ],
                    "correct": 3,
                    "explanation": "Richtig: 7 008 < 7 080 < 7 800 < 70 080. Tipp: zuerst die Stellenzahl, dann von links vergleichen."
                },
                {
                    "id": "zverstk5l2u_mittel_5",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Zahl liegt zwischen 45 000 und 46 000?",
                    "answers": [
                        "45 600",
                        "46 500",
                        "44 999",
                        "54 500"
                    ],
                    "correct": 0,
                    "explanation": "45 600 ist größer als 45 000 und kleiner als 46 000."
                }
            ],
            "schwer": [
                {
                    "id": "zverstk5l2u_schwer_1",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welches Zeichen gehört zwischen 3 040 500 und 3 045 000?",
                    "answers": [
                        ">",
                        "<",
                        "=",
                        "≈"
                    ],
                    "correct": 1,
                    "explanation": "Vergleiche von links Stelle für Stelle. 3 040 500 < 3 045 000.",
                    "grafik": "<svg viewBox='0 0 300 60' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='176' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='132' y='12' width='36' height='36' rx='8' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2' stroke-dasharray='4 3'/><text x='64' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 040 500</text><text x='236' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 045 000</text><text x='150' y='37' text-anchor='middle' font-size='18' font-weight='700' font-family='sans-serif' fill='#f59e0b'>?</text></svg>"
                },
                {
                    "id": "zverstk5l2u_schwer_2",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Ordne 2 300 000, 2 030 000, 2 003 000, 20 300 000 vom kleinsten zum größten. Welche Reihe stimmt?",
                    "answers": [
                        "2 030 000 < 2 003 000 < 2 300 000 < 20 300 000",
                        "2 003 000 < 2 030 000 < 2 300 000 < 20 300 000",
                        "2 003 000 < 2 030 000 < 20 300 000 < 2 300 000",
                        "20 300 000 < 2 300 000 < 2 030 000 < 2 003 000"
                    ],
                    "correct": 1,
                    "explanation": "Richtig: 2 003 000 < 2 030 000 < 2 300 000 < 20 300 000. Tipp: zuerst die Stellenzahl, dann von links vergleichen."
                },
                {
                    "id": "zverstk5l2u_schwer_3",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welche Ziffer passt? 58 _72 > 58 872",
                    "answers": [
                        "9",
                        "8",
                        "7",
                        "0"
                    ],
                    "correct": 0,
                    "explanation": "Die Hunderterstelle muss größer als 8 sein. Nur 9 passt: 58 972 > 58 872."
                },
                {
                    "id": "zverstk5l2u_schwer_4",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welche Aussage ist falsch?",
                    "answers": [
                        "1 000 000 < 999 999",
                        "1 001 > 999",
                        "45 600 < 46 500",
                        "300 000 = 300 000"
                    ],
                    "correct": 0,
                    "explanation": "1 000 000 hat 7 Stellen, 999 999 nur 6. Also ist 1 000 000 größer – die Aussage ist falsch."
                },
                {
                    "id": "zverstk5l2u_schwer_5",
                    "category": "kurs_zverst_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "zahlen_vergleichen",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wie viele natürliche Zahlen liegen zwischen 998 und 1 003?",
                    "answers": [
                        "5",
                        "6",
                        "4",
                        "3"
                    ],
                    "correct": 2,
                    "explanation": "Dazwischen liegen 999, 1 000, 1 001 und 1 002 – also 4 Zahlen."
                }
            ]
        },
        "test": [
            {
                "id": "zverstk5l2_test_1",
                "category": "kurs_zverst_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlen_vergleichen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Zeichen gehört zwischen 80 150 und 80 105?",
                "answers": [
                    "<",
                    "=",
                    ">",
                    "≈"
                ],
                "correct": 2,
                "explanation": "Vergleiche von links Stelle für Stelle. 80 150 > 80 105.",
                "grafik": "<svg viewBox='0 0 300 60' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='176' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='132' y='12' width='36' height='36' rx='8' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2' stroke-dasharray='4 3'/><text x='64' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>80 150</text><text x='236' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>80 105</text><text x='150' y='37' text-anchor='middle' font-size='18' font-weight='700' font-family='sans-serif' fill='#f59e0b'>?</text></svg>"
            },
            {
                "id": "zverstk5l2_test_2",
                "category": "kurs_zverst_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlen_vergleichen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Zeichen gehört zwischen 1 000 000 und 999 999?",
                "answers": [
                    "<",
                    "=",
                    "≈",
                    ">"
                ],
                "correct": 3,
                "explanation": "Die Zahl mit mehr Stellen ist größer. 1 000 000 > 999 999.",
                "grafik": "<svg viewBox='0 0 300 60' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='176' y='8' width='120' height='44' rx='8' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='1.5'/><rect x='132' y='12' width='36' height='36' rx='8' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2' stroke-dasharray='4 3'/><text x='64' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 000 000</text><text x='236' y='37' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>999 999</text><text x='150' y='37' text-anchor='middle' font-size='18' font-weight='700' font-family='sans-serif' fill='#f59e0b'>?</text></svg>"
            },
            {
                "id": "zverstk5l2_test_3",
                "category": "kurs_zverst_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlen_vergleichen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl ist am größten: 45 600, 46 500, 45 060, 46 050?",
                "answers": [
                    "45 600",
                    "45 060",
                    "46 500",
                    "46 050"
                ],
                "correct": 2,
                "explanation": "Erst die Anzahl der Stellen vergleichen, dann von links Stelle für Stelle. Am größten ist 46 500."
            },
            {
                "id": "zverstk5l2_test_4",
                "category": "kurs_zverst_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlen_vergleichen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl ist am kleinsten: 701 070, 710 007, 700 710, 707 100?",
                "answers": [
                    "701 070",
                    "700 710",
                    "710 007",
                    "707 100"
                ],
                "correct": 1,
                "explanation": "Erst die Anzahl der Stellen vergleichen, dann von links Stelle für Stelle. Am kleinsten ist 700 710."
            },
            {
                "id": "zverstk5l2_test_5",
                "category": "kurs_zverst_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlen_vergleichen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ordne 13 500, 1 350, 15 300, 13 050 vom kleinsten zum größten. Welche Reihe stimmt?",
                "answers": [
                    "13 050 < 1 350 < 13 500 < 15 300",
                    "1 350 < 13 050 < 15 300 < 13 500",
                    "15 300 < 13 500 < 13 050 < 1 350",
                    "1 350 < 13 050 < 13 500 < 15 300"
                ],
                "correct": 3,
                "explanation": "Richtig: 1 350 < 13 050 < 13 500 < 15 300. Tipp: zuerst die Stellenzahl, dann von links vergleichen."
            },
            {
                "id": "zverstk5l2_test_6",
                "category": "kurs_zverst_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlen_vergleichen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Ziffer passt? 4 _56 < 4 256",
                "answers": [
                    "2",
                    "3",
                    "1",
                    "5"
                ],
                "correct": 2,
                "explanation": "Die Hunderterstelle muss kleiner als 2 sein, z. B. 1: 4 156 < 4 256. (0 würde auch passen.)"
            },
            {
                "id": "zverstk5l2_test_7",
                "category": "kurs_zverst_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlen_vergleichen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl ist größer als 2 Millionen?",
                "answers": [
                    "1 999 999",
                    "200 000",
                    "2 000 100",
                    "2 000 000"
                ],
                "correct": 2,
                "explanation": "2 000 100 ist 100 mehr als 2 000 000. Die anderen sind kleiner oder gleich."
            },
            {
                "id": "zverstk5l2_test_8",
                "category": "kurs_zverst_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "zahlen_vergleichen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Lisa sagt: „Die Zahl mit der größten ersten Ziffer ist immer am größten.“ Stimmt das?",
                "answers": [
                    "Nein, erst die Stellenzahl zählt",
                    "Ja, das stimmt immer",
                    "Nur bei geraden Zahlen",
                    "Ja, aber nur bei Millionen"
                ],
                "correct": 0,
                "explanation": "9 999 hat die größere erste Ziffer, aber 10 000 ist größer, weil es mehr Stellen hat."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "zverst_k5_l3",
        "kurs": "zahlen_verstehen_k5",
        "order": 3,
        "icon": "🎯",
        "title": "Zahlen runden",
        "kurz": "Auf Zehner, Hunderter, Tausender und mehr runden",
        "erklaerung": {
            "intro": "Beim <b>Runden</b> machst du eine Zahl einfacher. Schau auf die Ziffer <b>rechts neben</b> der Rundungsstelle: Bei <b>0, 1, 2, 3, 4</b> wird <b>abgerundet</b>, bei <b>5, 6, 7, 8, 9</b> wird <b>aufgerundet</b>. Alle Stellen rechts davon werden zu Nullen. Für gerundete Zahlen schreibt man <b>≈</b> (ungefähr gleich).",
            "merksatz": "Nur die Ziffer direkt rechts neben der Rundungsstelle entscheidet: 0–4 abrunden, 5–9 aufrunden.",
            "beispiele": [
                "4 386 auf Hunderter: rechts neben der 3 steht 8 → aufrunden. 4 386 ≈ 4 400.",
                "72 349 auf Tausender: rechts neben der 2 steht 3 → abrunden. 72 349 ≈ 72 000.",
                "Am Zahlenstrahl: 4 386 liegt näher an 4 400 als an 4 300.<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 300</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 400</text><line x1='276.6' y1='8' x2='276.6' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='276.6,38 271.6,30 281.6,30' fill='#f59e0b'/></svg>",
                "Achtung Übertrag: 9 960 auf Hunderter → 10 000."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "zverstk5l3u_leicht_1",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Runde 47 auf Zehner.",
                    "answers": [
                        "40",
                        "50",
                        "60",
                        "47"
                    ],
                    "correct": 1,
                    "explanation": "Auf Zehner runden: Schau auf die Ziffer rechts daneben. Sie ist 7 → aufrunden. 47 ≈ 50."
                },
                {
                    "id": "zverstk5l3u_leicht_2",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Runde 352 auf Zehner.",
                    "answers": [
                        "340",
                        "360",
                        "350",
                        "400"
                    ],
                    "correct": 2,
                    "explanation": "Auf Zehner runden: Schau auf die Ziffer rechts daneben. Sie ist 2 → abrunden. 352 ≈ 350."
                },
                {
                    "id": "zverstk5l3u_leicht_3",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Runde 3 847 auf Hunderter.",
                    "answers": [
                        "3 800",
                        "3 700",
                        "3 900",
                        "4 000"
                    ],
                    "correct": 0,
                    "explanation": "Auf Hunderter runden: Schau auf die Ziffer rechts daneben. Sie ist 4 → abrunden. 3 847 ≈ 3 800."
                },
                {
                    "id": "zverstk5l3u_leicht_4",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Runde 2 350 auf Hunderter.",
                    "answers": [
                        "2 300",
                        "2 500",
                        "2 000",
                        "2 400"
                    ],
                    "correct": 3,
                    "explanation": "Auf Hunderter runden: Schau auf die Ziffer rechts daneben. Sie ist 5 → aufrunden. 2 350 ≈ 2 400."
                },
                {
                    "id": "zverstk5l3u_leicht_5",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welches Zeichen benutzt man für gerundete Zahlen?",
                    "answers": [
                        "=",
                        "<",
                        ">",
                        "≈"
                    ],
                    "correct": 3,
                    "explanation": "≈ heißt „ungefähr gleich“, z. B. 47 ≈ 50."
                }
            ],
            "mittel": [
                {
                    "id": "zverstk5l3u_mittel_1",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Runde 14 562 auf Tausender.",
                    "answers": [
                        "14 000",
                        "16 000",
                        "10 000",
                        "15 000"
                    ],
                    "correct": 3,
                    "explanation": "Auf Tausender runden: Schau auf die Ziffer rechts daneben. Sie ist 5 → aufrunden. 14 562 ≈ 15 000."
                },
                {
                    "id": "zverstk5l3u_mittel_2",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Runde 72 349 auf Tausender.",
                    "answers": [
                        "71 000",
                        "73 000",
                        "70 000",
                        "72 000"
                    ],
                    "correct": 3,
                    "explanation": "Auf Tausender runden: Schau auf die Ziffer rechts daneben. Sie ist 3 → abrunden. 72 349 ≈ 72 000."
                },
                {
                    "id": "zverstk5l3u_mittel_3",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Runde 84 500 auf Zehntausender.",
                    "answers": [
                        "80 000",
                        "70 000",
                        "90 000",
                        "100 000"
                    ],
                    "correct": 0,
                    "explanation": "Auf Zehntausender runden: Schau auf die Ziffer rechts daneben. Sie ist 4 → abrunden. 84 500 ≈ 80 000."
                },
                {
                    "id": "zverstk5l3u_mittel_4",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Runde 5 449 auf Hunderter.",
                    "answers": [
                        "5 300",
                        "5 500",
                        "5 000",
                        "5 400"
                    ],
                    "correct": 3,
                    "explanation": "Auf Hunderter runden: Schau auf die Ziffer rechts daneben. Sie ist 4 → abrunden. 5 449 ≈ 5 400."
                },
                {
                    "id": "zverstk5l3u_mittel_5",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Zahl ergibt auf Zehner gerundet 80?",
                    "answers": [
                        "74",
                        "75",
                        "85",
                        "70 000"
                    ],
                    "correct": 1,
                    "explanation": "Auf Zehner gerundet ergibt 80 alles von 75 bis 84. Von den Antworten passt nur 75."
                }
            ],
            "schwer": [
                {
                    "id": "zverstk5l3u_schwer_1",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Runde 6 481 000 auf Millionen.",
                    "answers": [
                        "6 000 000",
                        "5 000 000",
                        "7 000 000",
                        "10 000 000"
                    ],
                    "correct": 0,
                    "explanation": "Auf Millionen runden: Schau auf die Ziffer rechts daneben. Sie ist 4 → abrunden. 6 481 000 ≈ 6 000 000."
                },
                {
                    "id": "zverstk5l3u_schwer_2",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Runde 9 960 auf Hunderter.",
                    "answers": [
                        "9 900",
                        "10 100",
                        "10 000",
                        "9 960"
                    ],
                    "correct": 2,
                    "explanation": "Auf Hunderter runden: Schau auf die Ziffer rechts daneben. Sie ist 6 → aufrunden. 9 960 ≈ 10 000."
                },
                {
                    "id": "zverstk5l3u_schwer_3",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Runde 349 999 auf Hunderttausender.",
                    "answers": [
                        "200 000",
                        "300 000",
                        "400 000",
                        "349 999"
                    ],
                    "correct": 1,
                    "explanation": "Auf Hunderttausender runden: Schau auf die Ziffer rechts daneben. Sie ist 4 → abrunden. 349 999 ≈ 300 000."
                },
                {
                    "id": "zverstk5l3u_schwer_4",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welche ist die kleinste Zahl, die auf Hunderter gerundet 500 ergibt?",
                    "answers": [
                        "400",
                        "449",
                        "450",
                        "500"
                    ],
                    "correct": 2,
                    "explanation": "Ab 450 wird auf 500 aufgerundet. 449 wird noch auf 400 abgerundet."
                },
                {
                    "id": "zverstk5l3u_schwer_5",
                    "category": "kurs_zverst_k5_l3",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Ein Stadion hat 54 382 Plätze. In der Zeitung steht „rund 54 000“. Auf welche Stelle wurde gerundet?",
                    "answers": [
                        "Hunderter",
                        "Zehntausender",
                        "Zehner",
                        "Tausender"
                    ],
                    "correct": 3,
                    "explanation": "54 382 ≈ 54 000 – die Tausenderstelle bleibt stehen, alles rechts davon wird 0."
                }
            ]
        },
        "test": [
            {
                "id": "zverstk5l3_test_1",
                "category": "kurs_zverst_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde 678 auf Zehner.",
                "answers": [
                    "670",
                    "690",
                    "680",
                    "700"
                ],
                "correct": 2,
                "explanation": "Auf Zehner runden: Schau auf die Ziffer rechts daneben. Sie ist 8 → aufrunden. 678 ≈ 680."
            },
            {
                "id": "zverstk5l3_test_2",
                "category": "kurs_zverst_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde 4 386 auf Hunderter.",
                "answers": [
                    "4 300",
                    "4 500",
                    "4 000",
                    "4 400"
                ],
                "correct": 3,
                "explanation": "Auf Hunderter runden: Schau auf die Ziffer rechts daneben. Sie ist 8 → aufrunden. 4 386 ≈ 4 400."
            },
            {
                "id": "zverstk5l3_test_3",
                "category": "kurs_zverst_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde 23 501 auf Tausender.",
                "answers": [
                    "23 000",
                    "25 000",
                    "20 000",
                    "24 000"
                ],
                "correct": 3,
                "explanation": "Auf Tausender runden: Schau auf die Ziffer rechts daneben. Sie ist 5 → aufrunden. 23 501 ≈ 24 000."
            },
            {
                "id": "zverstk5l3_test_4",
                "category": "kurs_zverst_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde 149 999 auf Zehntausender.",
                "answers": [
                    "140 000",
                    "150 000",
                    "160 000",
                    "100 000"
                ],
                "correct": 1,
                "explanation": "Auf Zehntausender runden: Schau auf die Ziffer rechts daneben. Sie ist 9 → aufrunden. 149 999 ≈ 150 000."
            },
            {
                "id": "zverstk5l3_test_5",
                "category": "kurs_zverst_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde 2 750 000 auf Millionen.",
                "answers": [
                    "2 000 000",
                    "4 000 000",
                    "2 750 000",
                    "3 000 000"
                ],
                "correct": 3,
                "explanation": "Auf Millionen runden: Schau auf die Ziffer rechts daneben. Sie ist 7 → aufrunden. 2 750 000 ≈ 3 000 000."
            },
            {
                "id": "zverstk5l3_test_6",
                "category": "kurs_zverst_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl ergibt auf Tausender gerundet 8 000?",
                "answers": [
                    "7 620",
                    "7 420",
                    "8 500",
                    "8 712"
                ],
                "correct": 0,
                "explanation": "Auf 8 000 rundet alles von 7 500 bis 8 499. Nur 7 620 liegt dazwischen."
            },
            {
                "id": "zverstk5l3_test_7",
                "category": "kurs_zverst_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ben rundet 3 449 auf Hunderter und erhält 3 500. Was hat er falsch gemacht?",
                "answers": [
                    "Er hat in zwei Schritten gerundet",
                    "Nichts, 3 500 ist richtig",
                    "Er hätte auf 3 000 runden müssen",
                    "Er hat auf Zehner gerundet"
                ],
                "correct": 0,
                "explanation": "Man rundet in einem Schritt: Rechts neben der Hunderterziffer 4 steht die Zehnerziffer 4 → abrunden: 3 449 ≈ 3 400. Die 9 bei den Einern zählt nicht – erst auf 3 450 und dann auf 3 500 zu runden ist falsch."
            },
            {
                "id": "zverstk5l3_test_8",
                "category": "kurs_zverst_k5_l3",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde 999 500 auf Tausender.",
                "answers": [
                    "1 000 000",
                    "999 000",
                    "1 001 000",
                    "999 500"
                ],
                "correct": 0,
                "explanation": "Auf Tausender runden: Schau auf die Ziffer rechts daneben. Sie ist 5 → aufrunden. 999 500 ≈ 1 000 000."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "zverst_k5_l4",
        "kurs": "zahlen_verstehen_k5",
        "order": 4,
        "icon": "🧮",
        "title": "Die Stellenwerttafel",
        "kurz": "Stellen lesen, Werte bestimmen, Zahlen schreiben",
        "erklaerung": {
            "intro": "In der <b>Stellenwerttafel</b> hat jede Stelle einen Wert: Einer (E), Zehner (Z), Hunderter (H). Diese drei wiederholen sich in jeder Gruppe: <b>Einer</b>, <b>Tausender</b>, <b>Millionen</b>, <b>Milliarden</b>. Jede Stelle ist <b>10-mal</b> so viel wert wie die rechts daneben. Eine leere Stelle in der Mitte schreibst du als <b>0</b>.",
            "merksatz": "Gleiche Ziffer, anderer Platz, anderer Wert: Die 5 in 500 ist 100-mal so viel wert wie die 5 in 5.",
            "beispiele": [
                "4 076 302 in der Stellenwerttafel: vier Millionen sechsundsiebzigtausenddreihundertzwei.<svg viewBox='0 0 251 74' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Millionen</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><text x='69' y='60' font-size='17' fill='#e5e7eb'>4</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><text x='100' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='126' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><text x='126' y='60' font-size='17' fill='#e5e7eb'>7</text><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>6</text><rect x='170' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='170' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='209' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='183' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='196' y1='39' x2='196' y2='69' stroke='#38bdf8'/><text x='183' y='60' font-size='17' fill='#e5e7eb'>3</text><text x='209' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='222' y1='39' x2='222' y2='69' stroke='#38bdf8'/><text x='209' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='235' y='34' font-size='10' fill='#38bdf8'>E</text><text x='235' y='60' font-size='17' fill='#e5e7eb'>2</text></g></svg>",
                "Die orange Ziffer 7 steht bei den Zehntausendern: Wert 70 000.<svg viewBox='0 0 251 74' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Millionen</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><text x='69' y='60' font-size='17' fill='#e5e7eb'>4</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><text x='100' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='126' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><rect x='115' y='42' width='22' height='24' rx='4' fill='rgba(245,158,11,0.85)'/><text x='126' y='60' font-size='17' fill='#111827'>7</text><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>6</text><rect x='170' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='170' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='209' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='183' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='196' y1='39' x2='196' y2='69' stroke='#38bdf8'/><text x='183' y='60' font-size='17' fill='#e5e7eb'>3</text><text x='209' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='222' y1='39' x2='222' y2='69' stroke='#38bdf8'/><text x='209' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='235' y='34' font-size='10' fill='#38bdf8'>E</text><text x='235' y='60' font-size='17' fill='#e5e7eb'>2</text></g></svg>",
                "Bündeln: 10 Einer = 1 Zehner, 10 Hunderter = 1 Tausender, 1 000 Tausender = 1 Million."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "zverstk5l4u_leicht_1",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welche Zahl steht in der Stellenwerttafel? (4 Stellen)",
                    "answers": [
                        "5 370",
                        "530",
                        "53 070",
                        "5 307"
                    ],
                    "correct": 3,
                    "explanation": "Lies Gruppe für Gruppe von links nach rechts (Millionen, Tausender, Einer) und vergiss die Nullen nicht: 5 307.",
                    "grafik": "<svg viewBox='0 0 168 74' style='width:100%;max-width:168px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><text x='69' y='60' font-size='17' fill='#e5e7eb'>5</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><text x='100' y='60' font-size='17' fill='#e5e7eb'>3</text><text x='126' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><text x='126' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>7</text></g></svg>"
                },
                {
                    "id": "zverstk5l4u_leicht_2",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Welchen Wert hat die orange markierte Ziffer in 56 234?",
                    "answers": [
                        "60 000",
                        "600",
                        "6",
                        "6 000"
                    ],
                    "correct": 3,
                    "explanation": "Die 6 steht bei den Tausender. Ihr Wert ist 6 · 1 000 = 6 000.",
                    "grafik": "<svg viewBox='0 0 168 74' style='width:100%;max-width:168px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='43' y='60' font-size='17' fill='#e5e7eb'>5</text><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><rect x='58' y='42' width='22' height='24' rx='4' fill='rgba(245,158,11,0.85)'/><text x='69' y='60' font-size='17' fill='#111827'>6</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><text x='100' y='60' font-size='17' fill='#e5e7eb'>2</text><text x='126' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><text x='126' y='60' font-size='17' fill='#e5e7eb'>3</text><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>4</text></g></svg>"
                },
                {
                    "id": "zverstk5l4u_leicht_3",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wie viele Einer hat die Zahl 4 307?",
                    "answers": [
                        "0",
                        "7",
                        "3",
                        "4"
                    ],
                    "correct": 1,
                    "explanation": "Die Einerstelle ist ganz rechts: 4 307 → 7 Einer."
                },
                {
                    "id": "zverstk5l4u_leicht_4",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wie viele Nullen hat eine Million?",
                    "answers": [
                        "3",
                        "9",
                        "7",
                        "6"
                    ],
                    "correct": 3,
                    "explanation": "1 Million = 1 000 000 – sechs Nullen."
                },
                {
                    "id": "zverstk5l4u_leicht_5",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Wie viel sind 10 Hunderter?",
                    "answers": [
                        "100",
                        "10 000",
                        "110",
                        "1 000"
                    ],
                    "correct": 3,
                    "explanation": "10 · 100 = 1 000. 10 Hunderter bündelt man zu 1 Tausender."
                }
            ],
            "mittel": [
                {
                    "id": "zverstk5l4u_mittel_1",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Zahl steht in der Stellenwerttafel? (6 Stellen)",
                    "answers": [
                        "480 500",
                        "408 050",
                        "40 805",
                        "4 080 500"
                    ],
                    "correct": 1,
                    "explanation": "Lies Gruppe für Gruppe von links nach rechts (Millionen, Tausender, Einer) und vergiss die Nullen nicht: 408 050.",
                    "grafik": "<svg viewBox='0 0 168 74' style='width:100%;max-width:168px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><text x='17' y='60' font-size='17' fill='#e5e7eb'>4</text><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='43' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><text x='69' y='60' font-size='17' fill='#e5e7eb'>8</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><text x='100' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='126' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><text x='126' y='60' font-size='17' fill='#e5e7eb'>5</text><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>0</text></g></svg>"
                },
                {
                    "id": "zverstk5l4u_mittel_2",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welchen Wert hat die orange markierte Ziffer in 73 509?",
                    "answers": [
                        "30 000",
                        "300",
                        "3",
                        "3 000"
                    ],
                    "correct": 3,
                    "explanation": "Die 3 steht bei den Tausender. Ihr Wert ist 3 · 1 000 = 3 000.",
                    "grafik": "<svg viewBox='0 0 168 74' style='width:100%;max-width:168px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='43' y='60' font-size='17' fill='#e5e7eb'>7</text><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><rect x='58' y='42' width='22' height='24' rx='4' fill='rgba(245,158,11,0.85)'/><text x='69' y='60' font-size='17' fill='#111827'>3</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><text x='100' y='60' font-size='17' fill='#e5e7eb'>5</text><text x='126' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><text x='126' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>9</text></g></svg>"
                },
                {
                    "id": "zverstk5l4u_mittel_3",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welchen Wert hat die orange markierte Ziffer in 4 826 150?",
                    "answers": [
                        "40 000 000",
                        "400 000",
                        "4",
                        "4 000 000"
                    ],
                    "correct": 3,
                    "explanation": "Die 4 steht bei den Millionen. Ihr Wert ist 4 · 1 000 000 = 4 000 000.",
                    "grafik": "<svg viewBox='0 0 251 74' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Millionen</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><rect x='58' y='42' width='22' height='24' rx='4' fill='rgba(245,158,11,0.85)'/><text x='69' y='60' font-size='17' fill='#111827'>4</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><text x='100' y='60' font-size='17' fill='#e5e7eb'>8</text><text x='126' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><text x='126' y='60' font-size='17' fill='#e5e7eb'>2</text><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>6</text><rect x='170' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='170' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='209' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='183' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='196' y1='39' x2='196' y2='69' stroke='#38bdf8'/><text x='183' y='60' font-size='17' fill='#e5e7eb'>1</text><text x='209' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='222' y1='39' x2='222' y2='69' stroke='#38bdf8'/><text x='209' y='60' font-size='17' fill='#e5e7eb'>5</text><text x='235' y='34' font-size='10' fill='#38bdf8'>E</text><text x='235' y='60' font-size='17' fill='#e5e7eb'>0</text></g></svg>"
                },
                {
                    "id": "zverstk5l4u_mittel_4",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Schreibe als Zahl: 8 Hunderttausender + 4 Zehner + 9 Einer",
                    "answers": [
                        "800 490",
                        "849",
                        "80 049",
                        "800 049"
                    ],
                    "correct": 3,
                    "explanation": "Leere Stellen werden Nullen: 8 H-Tausender, 0 Z-Tausender, 0 Tausender, 0 Hunderter, 4 Zehner, 9 Einer → 800 049."
                },
                {
                    "id": "zverstk5l4u_mittel_5",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Schreibe als Zahl: drei Millionen vierhunderttausendfünfzig",
                    "answers": [
                        "3 400 500",
                        "3 400 050",
                        "3 040 050",
                        "340 050"
                    ],
                    "correct": 1,
                    "explanation": "3 Millionen | 400 Tausend | 050 → 3 400 050."
                }
            ],
            "schwer": [
                {
                    "id": "zverstk5l4u_schwer_1",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welche Zahl steht in der Stellenwerttafel? (8 Stellen)",
                    "answers": [
                        "20 304 000",
                        "2 003 040",
                        "20 030 400",
                        "200 304 000"
                    ],
                    "correct": 2,
                    "explanation": "Lies Gruppe für Gruppe von links nach rechts (Millionen, Tausender, Einer) und vergiss die Nullen nicht: 20 030 400.",
                    "grafik": "<svg viewBox='0 0 251 74' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Millionen</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='43' y='60' font-size='17' fill='#e5e7eb'>2</text><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><text x='69' y='60' font-size='17' fill='#e5e7eb'>0</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><text x='100' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='126' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><text x='126' y='60' font-size='17' fill='#e5e7eb'>3</text><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>0</text><rect x='170' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='170' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='209' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='183' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='196' y1='39' x2='196' y2='69' stroke='#38bdf8'/><text x='183' y='60' font-size='17' fill='#e5e7eb'>4</text><text x='209' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='222' y1='39' x2='222' y2='69' stroke='#38bdf8'/><text x='209' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='235' y='34' font-size='10' fill='#38bdf8'>E</text><text x='235' y='60' font-size='17' fill='#e5e7eb'>0</text></g></svg>"
                },
                {
                    "id": "zverstk5l4u_schwer_2",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welchen Wert hat die orange markierte Ziffer in 305 000 000?",
                    "answers": [
                        "300 000 000",
                        "3 000 000 000",
                        "30 000 000",
                        "3"
                    ],
                    "correct": 0,
                    "explanation": "Die 3 steht bei den Hundertmillionen. Ihr Wert ist 3 · 100 000 000 = 300 000 000.",
                    "grafik": "<svg viewBox='0 0 251 74' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Millionen</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><rect x='6' y='42' width='22' height='24' rx='4' fill='rgba(245,158,11,0.85)'/><text x='17' y='60' font-size='17' fill='#111827'>3</text><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='43' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><text x='69' y='60' font-size='17' fill='#e5e7eb'>5</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><text x='100' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='126' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><text x='126' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>0</text><rect x='170' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='170' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='209' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='183' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='196' y1='39' x2='196' y2='69' stroke='#38bdf8'/><text x='183' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='209' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='222' y1='39' x2='222' y2='69' stroke='#38bdf8'/><text x='209' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='235' y='34' font-size='10' fill='#38bdf8'>E</text><text x='235' y='60' font-size='17' fill='#e5e7eb'>0</text></g></svg>"
                },
                {
                    "id": "zverstk5l4u_schwer_3",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wie viele Tausender sind eine Million?",
                    "answers": [
                        "100",
                        "10 000",
                        "1 000 000",
                        "1 000"
                    ],
                    "correct": 3,
                    "explanation": "1 000 000 : 1 000 = 1 000. Eine Million sind tausend Tausender."
                },
                {
                    "id": "zverstk5l4u_schwer_4",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Wie heißt die Zahl? 12 Tausender + 15 Einer",
                    "answers": [
                        "12 150",
                        "1 215",
                        "120 015",
                        "12 015"
                    ],
                    "correct": 3,
                    "explanation": "12 Tausender = 12 000, dazu 15 Einer: 12 015."
                },
                {
                    "id": "zverstk5l4u_schwer_5",
                    "category": "kurs_zverst_k5_l4",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "stellenwerttafel",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Die Ziffern 3, 0, 7, 5 dürfen je einmal benutzt werden. Welche ist die größte vierstellige Zahl?",
                    "answers": [
                        "7 503",
                        "5 730",
                        "3 075",
                        "7 530"
                    ],
                    "correct": 3,
                    "explanation": "Die größte Ziffer nach links: 7, dann 5, dann 3, dann 0 → 7 530."
                }
            ]
        },
        "test": [
            {
                "id": "zverstk5l4_test_1",
                "category": "kurs_zverst_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "stellenwerttafel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl steht in der Stellenwerttafel? (7 Stellen)",
                "answers": [
                    "6 090 015",
                    "6 900 150",
                    "609 001",
                    "60 900 150"
                ],
                "correct": 0,
                "explanation": "Lies Gruppe für Gruppe von links nach rechts (Millionen, Tausender, Einer) und vergiss die Nullen nicht: 6 090 015.",
                "grafik": "<svg viewBox='0 0 251 74' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Millionen</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><text x='69' y='60' font-size='17' fill='#e5e7eb'>6</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><text x='100' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='126' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><text x='126' y='60' font-size='17' fill='#e5e7eb'>9</text><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>0</text><rect x='170' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='170' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='209' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='183' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='196' y1='39' x2='196' y2='69' stroke='#38bdf8'/><text x='183' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='209' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='222' y1='39' x2='222' y2='69' stroke='#38bdf8'/><text x='209' y='60' font-size='17' fill='#e5e7eb'>1</text><text x='235' y='34' font-size='10' fill='#38bdf8'>E</text><text x='235' y='60' font-size='17' fill='#e5e7eb'>5</text></g></svg>"
            },
            {
                "id": "zverstk5l4_test_2",
                "category": "kurs_zverst_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "stellenwerttafel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welchen Wert hat die orange markierte Ziffer in 2 478 000?",
                "answers": [
                    "400 000",
                    "4 000 000",
                    "40 000",
                    "4"
                ],
                "correct": 0,
                "explanation": "Die 4 steht bei den Hunderttausender. Ihr Wert ist 4 · 100 000 = 400 000.",
                "grafik": "<svg viewBox='0 0 251 74' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Millionen</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><text x='69' y='60' font-size='17' fill='#e5e7eb'>2</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><rect x='89' y='42' width='22' height='24' rx='4' fill='rgba(245,158,11,0.85)'/><text x='100' y='60' font-size='17' fill='#111827'>4</text><text x='126' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><text x='126' y='60' font-size='17' fill='#e5e7eb'>7</text><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>8</text><rect x='170' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='170' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='209' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='183' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='196' y1='39' x2='196' y2='69' stroke='#38bdf8'/><text x='183' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='209' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='222' y1='39' x2='222' y2='69' stroke='#38bdf8'/><text x='209' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='235' y='34' font-size='10' fill='#38bdf8'>E</text><text x='235' y='60' font-size='17' fill='#e5e7eb'>0</text></g></svg>"
            },
            {
                "id": "zverstk5l4_test_3",
                "category": "kurs_zverst_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "stellenwerttafel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welchen Wert hat die orange markierte Ziffer in 91 305?",
                "answers": [
                    "3 000",
                    "30",
                    "300",
                    "3"
                ],
                "correct": 2,
                "explanation": "Die 3 steht bei den Hunderter. Ihr Wert ist 3 · 100 = 300.",
                "grafik": "<svg viewBox='0 0 168 74' style='width:100%;max-width:168px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='43' y='60' font-size='17' fill='#e5e7eb'>9</text><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><text x='69' y='60' font-size='17' fill='#e5e7eb'>1</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><rect x='89' y='42' width='22' height='24' rx='4' fill='rgba(245,158,11,0.85)'/><text x='100' y='60' font-size='17' fill='#111827'>3</text><text x='126' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><text x='126' y='60' font-size='17' fill='#e5e7eb'>0</text><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>5</text></g></svg>"
            },
            {
                "id": "zverstk5l4_test_4",
                "category": "kurs_zverst_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "stellenwerttafel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Schreibe als Zahl: fünfzehn Millionen zwanzigtausendacht",
                "answers": [
                    "15 200 008",
                    "15 020 800",
                    "1 520 008",
                    "15 020 008"
                ],
                "correct": 3,
                "explanation": "15 Millionen | 020 Tausend | 008 → 15 020 008."
            },
            {
                "id": "zverstk5l4_test_5",
                "category": "kurs_zverst_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "stellenwerttafel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viel ist die 4 in 340 000 wert?",
                "answers": [
                    "4 000",
                    "400 000",
                    "4",
                    "40 000"
                ],
                "correct": 3,
                "explanation": "Die 4 steht bei den Zehntausendern: 4 · 10 000 = 40 000."
            },
            {
                "id": "zverstk5l4_test_6",
                "category": "kurs_zverst_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "stellenwerttafel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ist richtig?",
                "answers": [
                    "1 Milliarde = 100 Millionen",
                    "1 Milliarde = 1 000 000",
                    "1 Milliarde = 10 Millionen",
                    "1 Milliarde = 1 000 Millionen"
                ],
                "correct": 3,
                "explanation": "1 000 000 000 = 1 000 · 1 000 000."
            },
            {
                "id": "zverstk5l4_test_7",
                "category": "kurs_zverst_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "stellenwerttafel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Zehner hat die Zahl 4 560 insgesamt?",
                "answers": [
                    "456",
                    "6",
                    "56",
                    "4 560"
                ],
                "correct": 0,
                "explanation": "4 560 : 10 = 456. Die Zahl besteht aus 456 Zehnern."
            },
            {
                "id": "zverstk5l4_test_8",
                "category": "kurs_zverst_k5_l4",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "stellenwerttafel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl hat 7 Hunderter, 0 Zehner und 3 Einer und keine Tausender?",
                "answers": [
                    "730",
                    "7 003",
                    "703",
                    "73"
                ],
                "correct": 2,
                "explanation": "7 H, 0 Z, 3 E → 703."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "zverst_k5_l5",
        "kurs": "zahlen_verstehen_k5",
        "order": 5,
        "icon": "🏆",
        "title": "Runden für Profis",
        "kurz": "Kleine Zahlen, Millionen, Zahlenstern und Grenzen",
        "erklaerung": {
            "intro": "Für Profis gibt es drei Fallen: <b>1.</b> Ist die Zahl <b>kleiner</b> als die Rundungsstelle, wird sie zu <b>0</b> oder zur nächsten Stufe: 45 auf Hunderter ≈ <b>0</b>, 985 auf Tausender ≈ <b>1 000</b>. Nie einfach abschreiben! <b>2.</b> Bei großen Zahlen erst die Stelle in der Stellenwerttafel finden, dann rechts daneben schauen. <b>3.</b> Rückwärts: Zu jeder gerundeten Zahl gibt es eine <b>kleinste</b> und eine <b>größte</b> Zahl, die dorthin gerundet wird.",
            "merksatz": "Rechts neben der Rundungsstelle schauen – auch wenn dort die erste Ziffer steht. Kleine Zahlen werden zu 0 oder zur nächsten Stufe.",
            "beispiele": [
                "45 auf Hunderter: 45 liegt zwischen 0 und 100, näher an 0 → 45 ≈ 0.<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>100</text><line x1='155.2' y1='8' x2='155.2' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='155.2,38 150.2,30 160.2,30' fill='#f59e0b'/></svg>",
                "985 auf Tausender: 985 liegt zwischen 0 und 1 000, näher an 1 000 → 985 ≈ 1 000.",
                "Zahlenstern 568 289 371: auf Zehner ≈ 568 289 370 · auf Zehntausender ≈ 568 290 000 · auf Millionen ≈ 568 000 000 · auf Hundertmillionen ≈ 600 000 000.",
                "Auf Hunderter gerundet 1 100: kleinste Zahl 1 050, größte Zahl 1 149."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "zverstk5l5u_leicht_1",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Runde 45 auf Hunderter.",
                    "answers": [
                        "45",
                        "100",
                        "50",
                        "0"
                    ],
                    "correct": 3,
                    "explanation": "45 hat keine Hunderter. Es liegt zwischen 0 und 100 und ist näher an 0. Also 45 ≈ 0 – nicht einfach abschreiben!"
                },
                {
                    "id": "zverstk5l5u_leicht_2",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Runde 985 auf Tausender.",
                    "answers": [
                        "985",
                        "0",
                        "1 000",
                        "2 000"
                    ],
                    "correct": 2,
                    "explanation": "985 hat keine Tausender. Es liegt zwischen 0 und 1 000 und ist näher an 1 000. Also 985 ≈ 1 000 – nicht einfach abschreiben!"
                },
                {
                    "id": "zverstk5l5u_leicht_3",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Runde 82 926 auf Hunderter.",
                    "answers": [
                        "82 900",
                        "82 800",
                        "83 000",
                        "82 930"
                    ],
                    "correct": 0,
                    "explanation": "Auf Hunderter runden: Schau auf die Ziffer rechts daneben. Sie ist 2 → abrunden. 82 926 ≈ 82 900."
                },
                {
                    "id": "zverstk5l5u_leicht_4",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Runde 53 600 auf Tausender.",
                    "answers": [
                        "53 000",
                        "55 000",
                        "50 000",
                        "54 000"
                    ],
                    "correct": 3,
                    "explanation": "Auf Tausender runden: Schau auf die Ziffer rechts daneben. Sie ist 6 → aufrunden. 53 600 ≈ 54 000."
                },
                {
                    "id": "zverstk5l5u_leicht_5",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "leicht",
                    "points": 5,
                    "question": "Runde 395 auf Tausender.",
                    "answers": [
                        "395",
                        "1 000",
                        "0",
                        "400"
                    ],
                    "correct": 2,
                    "explanation": "395 hat keine Tausender. Es liegt zwischen 0 und 1 000 und ist näher an 0. Also 395 ≈ 0 – nicht einfach abschreiben!"
                }
            ],
            "mittel": [
                {
                    "id": "zverstk5l5u_mittel_1",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Runde 642 312 auf Hunderttausender.",
                    "answers": [
                        "500 000",
                        "700 000",
                        "1 000 000",
                        "600 000"
                    ],
                    "correct": 3,
                    "explanation": "Auf Hunderttausender runden: Schau auf die Ziffer rechts daneben. Sie ist 4 → abrunden. 642 312 ≈ 600 000."
                },
                {
                    "id": "zverstk5l5u_mittel_2",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Runde 8 446 917 auf Hunderttausender.",
                    "answers": [
                        "8 300 000",
                        "8 400 000",
                        "8 500 000",
                        "8 000 000"
                    ],
                    "correct": 1,
                    "explanation": "Auf Hunderttausender runden: Schau auf die Ziffer rechts daneben. Sie ist 4 → abrunden. 8 446 917 ≈ 8 400 000."
                },
                {
                    "id": "zverstk5l5u_mittel_3",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Runde 55 834 199 auf Millionen.",
                    "answers": [
                        "56 000 000",
                        "55 000 000",
                        "57 000 000",
                        "60 000 000"
                    ],
                    "correct": 0,
                    "explanation": "Auf Millionen runden: Schau auf die Ziffer rechts daneben. Sie ist 8 → aufrunden. 55 834 199 ≈ 56 000 000."
                },
                {
                    "id": "zverstk5l5u_mittel_4",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Runde 375 100 auf Millionen.",
                    "answers": [
                        "375 100",
                        "1 000 000",
                        "0",
                        "400 000"
                    ],
                    "correct": 2,
                    "explanation": "375 100 hat keine Millionen. Es liegt zwischen 0 und 1 000 000 und ist näher an 0. Also 375 100 ≈ 0 – nicht einfach abschreiben!"
                },
                {
                    "id": "zverstk5l5u_mittel_5",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Runde 5 001 auf Zehntausender.",
                    "answers": [
                        "5 001",
                        "10 000",
                        "0",
                        "5 000"
                    ],
                    "correct": 1,
                    "explanation": "5 001 hat keine Zehntausender. Es liegt zwischen 0 und 10 000 und ist näher an 10 000. Also 5 001 ≈ 10 000 – nicht einfach abschreiben!"
                }
            ],
            "schwer": [
                {
                    "id": "zverstk5l5u_schwer_1",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Runde 568 289 371 auf Zehner.",
                    "answers": [
                        "568 289 360",
                        "568 289 370",
                        "568 289 380",
                        "568 289 400"
                    ],
                    "correct": 1,
                    "explanation": "Auf Zehner runden: Schau auf die Ziffer rechts daneben. Sie ist 1 → abrunden. 568 289 371 ≈ 568 289 370."
                },
                {
                    "id": "zverstk5l5u_schwer_2",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Runde 568 289 371 auf Zehntausender.",
                    "answers": [
                        "568 280 000",
                        "568 300 000",
                        "568 290 000",
                        "568 289 000"
                    ],
                    "correct": 2,
                    "explanation": "Auf Zehntausender runden: Schau auf die Ziffer rechts daneben. Sie ist 9 → aufrunden. 568 289 371 ≈ 568 290 000."
                },
                {
                    "id": "zverstk5l5u_schwer_3",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Runde 568 289 371 auf Hundertmillionen.",
                    "answers": [
                        "500 000 000",
                        "700 000 000",
                        "600 000 000",
                        "1 000 000 000"
                    ],
                    "correct": 2,
                    "explanation": "Auf Hundertmillionen runden: Schau auf die Ziffer rechts daneben. Sie ist 6 → aufrunden. 568 289 371 ≈ 600 000 000."
                },
                {
                    "id": "zverstk5l5u_schwer_4",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welche ist die kleinste Zahl, die auf Hunderter gerundet 1 100 ergibt?",
                    "answers": [
                        "1 049",
                        "1 000",
                        "1 060",
                        "1 050"
                    ],
                    "correct": 3,
                    "explanation": "Ab 1 050 wird auf 1 100 aufgerundet. 1 049 wird noch auf 1 000 abgerundet."
                },
                {
                    "id": "zverstk5l5u_schwer_5",
                    "category": "kurs_zverst_k5_l5",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "runden",
                    "difficulty": "schwer",
                    "points": 15,
                    "question": "Welche ist die größte Zahl, die auf Tausender gerundet 333 000 ergibt?",
                    "answers": [
                        "333 500",
                        "333 499",
                        "333 599",
                        "333 999"
                    ],
                    "correct": 1,
                    "explanation": "Bis 333 499 wird auf 333 000 abgerundet. Ab 333 500 rundet man schon auf 334 000 auf."
                }
            ]
        },
        "test": [
            {
                "id": "zverstk5l5_test_1",
                "category": "kurs_zverst_k5_l5",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde 15 100 auf Hunderttausender.",
                "answers": [
                    "15 100",
                    "100 000",
                    "0",
                    "20 000"
                ],
                "correct": 2,
                "explanation": "15 100 hat keine Hunderttausender. Es liegt zwischen 0 und 100 000 und ist näher an 0. Also 15 100 ≈ 0 – nicht einfach abschreiben!"
            },
            {
                "id": "zverstk5l5_test_2",
                "category": "kurs_zverst_k5_l5",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde 999 088 777 auf Millionen.",
                "answers": [
                    "998 000 000",
                    "1 000 000 000",
                    "999 100 000",
                    "999 000 000"
                ],
                "correct": 3,
                "explanation": "Auf Millionen runden: Schau auf die Ziffer rechts daneben. Sie ist 0 → abrunden. 999 088 777 ≈ 999 000 000."
            },
            {
                "id": "zverstk5l5_test_3",
                "category": "kurs_zverst_k5_l5",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde 19 545 112 auf Millionen.",
                "answers": [
                    "20 000 000",
                    "19 000 000",
                    "21 000 000",
                    "19 500 000"
                ],
                "correct": 0,
                "explanation": "Auf Millionen runden: Schau auf die Ziffer rechts daneben. Sie ist 5 → aufrunden. 19 545 112 ≈ 20 000 000."
            },
            {
                "id": "zverstk5l5_test_4",
                "category": "kurs_zverst_k5_l5",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde 568 289 371 auf Hunderter.",
                "answers": [
                    "568 289 300",
                    "568 289 400",
                    "568 289 500",
                    "568 289 000"
                ],
                "correct": 1,
                "explanation": "Auf Hunderter runden: Schau auf die Ziffer rechts daneben. Sie ist 7 → aufrunden. 568 289 371 ≈ 568 289 400."
            },
            {
                "id": "zverstk5l5_test_5",
                "category": "kurs_zverst_k5_l5",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde 568 289 371 auf Millionen.",
                "answers": [
                    "567 000 000",
                    "569 000 000",
                    "568 000 000",
                    "570 000 000"
                ],
                "correct": 2,
                "explanation": "Auf Millionen runden: Schau auf die Ziffer rechts daneben. Sie ist 2 → abrunden. 568 289 371 ≈ 568 000 000."
            },
            {
                "id": "zverstk5l5_test_6",
                "category": "kurs_zverst_k5_l5",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche ist die größte Zahl, die auf Hunderter gerundet 1 100 ergibt?",
                "answers": [
                    "1 150",
                    "1 159",
                    "1 149",
                    "1 199"
                ],
                "correct": 2,
                "explanation": "Bis 1 149 wird auf 1 100 abgerundet. Ab 1 150 rundet man schon auf 1 200 auf."
            },
            {
                "id": "zverstk5l5_test_7",
                "category": "kurs_zverst_k5_l5",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche ist die kleinste Zahl, die auf Hunderttausender gerundet 500 000 ergibt?",
                "answers": [
                    "449 999",
                    "400 000",
                    "460 000",
                    "450 000"
                ],
                "correct": 3,
                "explanation": "Ab 450 000 wird auf 500 000 aufgerundet. 449 999 wird noch auf 400 000 abgerundet."
            },
            {
                "id": "zverstk5l5_test_8",
                "category": "kurs_zverst_k5_l5",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "runden",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde 4 999 auf Zehntausender.",
                "answers": [
                    "4 999",
                    "0",
                    "10 000",
                    "5 000"
                ],
                "correct": 1,
                "explanation": "4 999 hat keine Zehntausender. Es liegt zwischen 0 und 10 000 und ist näher an 0. Also 4 999 ≈ 0 – nicht einfach abschreiben!"
            }
        ],
        "bestehenAb": 0.8
    }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) {
        extraKurse.forEach(function (k) {
            if (KURSE.some(function (x) { return x.id === k.id; })) return;
            // Vorne bei Klasse 5 Mathe einsortieren - das ist das erste Thema im Schuljahr
            var i = KURSE.findIndex(function (x) { return Number(x.grade) === 5 && x.subject === "mathe"; });
            if (i < 0) KURSE.push(k); else KURSE.splice(i, 0, k);
        });
    }
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
    }
})();
