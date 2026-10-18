// Zahlenraum bis 100 - dritte Lektion: Vorgänger, Nachfolger, Nachbarzehner (Klasse 2)
(function () {
    const extraLektionen = [{
    "id": "zahlen100_k2_l3",
    "kurs": "zahlen100_k2",
    "order": 3,
    "icon": "↔️",
    "title": "Vorgänger, Nachfolger und Nachbarzehner",
    "kurz": "Wer steht davor, wer danach?",
    "erklaerung": {
        "intro": "Der <b>Vorgänger</b> ist die Zahl direkt davor – also 1 weniger. Der <b>Nachfolger</b> ist die Zahl direkt danach – also 1 mehr. Zusammen heißen sie <b>Nachbarzahlen</b>. Die <b>Nachbarzehner</b> sind die Zehnerzahlen davor und danach.",
        "merksatz": "Vorgänger: 1 weniger. Nachfolger: 1 mehr. Nachbarzehner: die Zehnerzahlen links und rechts.",
        "beispiele": [
            "Die Nachbarzahlen von 24 sind 23 und 25.<svg viewBox='0 0 360 84' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='40' x2='346' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='354,40 344,34 344,46' fill='#38bdf8'/><line x1='24.0' y1='30' x2='24.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='55.2' y1='30' x2='55.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='86.4' y1='30' x2='86.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='117.6' y1='30' x2='117.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='148.8' y1='30' x2='148.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='180.0' y1='30' x2='180.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='211.2' y1='30' x2='211.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='242.4' y1='30' x2='242.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='273.6' y1='30' x2='273.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='304.8' y1='30' x2='304.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='336.0' y1='30' x2='336.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><text x='24.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20</text><text x='117.6' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>23</text><text x='148.8' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>24</text><text x='180.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>25</text><text x='336.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>30</text></svg>",
            "Achtung beim Zehner: Der Nachfolger von 49 ist 50, der Vorgänger von 60 ist 59.",
            "Die 34 liegt zwischen den Nachbarzehnern 30 und 40.<svg viewBox='0 0 360 84' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='40' x2='346' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='354,40 344,34 344,46' fill='#38bdf8'/><line x1='24.0' y1='30' x2='24.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='55.2' y1='30' x2='55.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='86.4' y1='30' x2='86.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='117.6' y1='30' x2='117.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='148.8' y1='30' x2='148.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='180.0' y1='30' x2='180.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='211.2' y1='30' x2='211.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='242.4' y1='30' x2='242.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='273.6' y1='30' x2='273.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='304.8' y1='30' x2='304.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='336.0' y1='30' x2='336.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><text x='24.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>30</text><text x='336.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>40</text><circle cx='148.8' cy='40' r='7' fill='#f43f5e' stroke='#fff' stroke-width='2'/><text x='148.8' y='22' text-anchor='middle' font-size='13' font-weight='800' font-family='sans-serif' fill='#f43f5e'>34</text></svg>"
        ]
    },
    "uebung": {
        "leicht": [
            {
                "id": "zahlen100k2l3u_leicht_1",
                "category": "kurs_zahlen100_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "hunderterraum",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Zahl ist der Nachfolger von 36?",
                "answers": [
                    "37",
                    "35",
                    "46",
                    "38"
                ],
                "correct": 0,
                "explanation": "Der Nachfolger kommt direkt danach: 36 + 1 = 37."
            },
            {
                "id": "zahlen100k2l3u_leicht_2",
                "category": "kurs_zahlen100_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "hunderterraum",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Zahl ist der Vorgänger von 52?",
                "answers": [
                    "51",
                    "53",
                    "42",
                    "50"
                ],
                "correct": 0,
                "explanation": "Der Vorgänger kommt direkt davor: 52 − 1 = 51."
            },
            {
                "id": "zahlen100k2l3u_leicht_3",
                "category": "kurs_zahlen100_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "hunderterraum",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Zahl fehlt am Zahlenstrahl?",
                "answers": [
                    "24",
                    "26",
                    "22",
                    "34"
                ],
                "correct": 0,
                "explanation": "Zwischen 23 und 25 liegt genau eine Zahl: 24.",
                "grafik": "<svg viewBox='0 0 360 84' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='40' x2='346' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='354,40 344,34 344,46' fill='#38bdf8'/><line x1='24.0' y1='30' x2='24.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='55.2' y1='30' x2='55.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='86.4' y1='30' x2='86.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='117.6' y1='30' x2='117.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='148.8' y1='30' x2='148.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='180.0' y1='30' x2='180.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='211.2' y1='30' x2='211.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='242.4' y1='30' x2='242.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='273.6' y1='30' x2='273.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='304.8' y1='30' x2='304.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='336.0' y1='30' x2='336.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><text x='24.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20</text><text x='117.6' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>23</text><text x='180.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>25</text><text x='336.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>30</text><rect x='133.8' y='54' width='30' height='22' rx='5' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='148.8' y='70' text-anchor='middle' font-size='14' font-weight='800' font-family='sans-serif' fill='#f59e0b'>?</text></svg>"
            },
            {
                "id": "zahlen100k2l3u_leicht_4",
                "category": "kurs_zahlen100_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "hunderterraum",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Zahlen sind die Nachbarzahlen von 68?",
                "answers": [
                    "67 und 69",
                    "66 und 70",
                    "58 und 78",
                    "67 und 68"
                ],
                "correct": 0,
                "explanation": "Die Nachbarzahlen sind Vorgänger und Nachfolger: 68 − 1 = 67 und 68 + 1 = 69."
            }
        ],
        "mittel": [
            {
                "id": "zahlen100k2l3u_mittel_1",
                "category": "kurs_zahlen100_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "hunderterraum",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl ist der Nachfolger von 39?",
                "answers": [
                    "40",
                    "49",
                    "30",
                    "38"
                ],
                "correct": 0,
                "explanation": "Nach der 39 kommt ein neuer Zehner: 39 + 1 = 40."
            },
            {
                "id": "zahlen100k2l3u_mittel_2",
                "category": "kurs_zahlen100_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "hunderterraum",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl ist der Vorgänger von 70?",
                "answers": [
                    "69",
                    "71",
                    "60",
                    "79"
                ],
                "correct": 0,
                "explanation": "Vor der 70 kommt die 69. Der Zehner wird dabei kleiner: 70 − 1 = 69."
            },
            {
                "id": "zahlen100k2l3u_mittel_3",
                "category": "kurs_zahlen100_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "hunderterraum",
                "difficulty": "mittel",
                "points": 10,
                "question": "Zwischen welchen Nachbarzehnern liegt die 47?",
                "answers": [
                    "40 und 50",
                    "47 und 50",
                    "40 und 47",
                    "30 und 40"
                ],
                "correct": 0,
                "explanation": "Die Zehnerzahl davor ist 40, die Zehnerzahl danach ist 50. Die 47 liegt dazwischen.",
                "grafik": "<svg viewBox='0 0 360 84' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='40' x2='346' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='354,40 344,34 344,46' fill='#38bdf8'/><line x1='24.0' y1='30' x2='24.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='55.2' y1='30' x2='55.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='86.4' y1='30' x2='86.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='117.6' y1='30' x2='117.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='148.8' y1='30' x2='148.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='180.0' y1='30' x2='180.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='211.2' y1='30' x2='211.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='242.4' y1='30' x2='242.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='273.6' y1='30' x2='273.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='304.8' y1='30' x2='304.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='336.0' y1='30' x2='336.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><text x='24.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>40</text><text x='336.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>50</text><circle cx='242.4' cy='40' r='7' fill='#f43f5e' stroke='#fff' stroke-width='2'/><text x='242.4' y='22' text-anchor='middle' font-size='13' font-weight='800' font-family='sans-serif' fill='#f43f5e'>47</text></svg>"
            },
            {
                "id": "zahlen100k2l3u_mittel_4",
                "category": "kurs_zahlen100_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "hunderterraum",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahlen gehören in die Kästchen?",
                "answers": [
                    "79 und 81",
                    "70 und 90",
                    "78 und 82",
                    "79 und 80"
                ],
                "correct": 0,
                "explanation": "Vor der 80 steht der Vorgänger 79, danach der Nachfolger 81.",
                "grafik": "<svg viewBox='0 0 360 84' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='40' x2='346' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='354,40 344,34 344,46' fill='#38bdf8'/><line x1='24.0' y1='30' x2='24.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='55.2' y1='30' x2='55.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='86.4' y1='30' x2='86.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='117.6' y1='30' x2='117.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='148.8' y1='30' x2='148.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='180.0' y1='30' x2='180.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='211.2' y1='30' x2='211.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='242.4' y1='30' x2='242.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='273.6' y1='30' x2='273.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='304.8' y1='30' x2='304.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='336.0' y1='30' x2='336.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><text x='24.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>75</text><text x='180.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>80</text><text x='336.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>85</text><rect x='133.8' y='54' width='30' height='22' rx='5' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='148.8' y='70' text-anchor='middle' font-size='14' font-weight='800' font-family='sans-serif' fill='#f59e0b'>?</text><rect x='196.2' y='54' width='30' height='22' rx='5' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='211.2' y='70' text-anchor='middle' font-size='14' font-weight='800' font-family='sans-serif' fill='#f59e0b'>?</text></svg>"
            }
        ],
        "schwer": [
            {
                "id": "zahlen100k2l3u_schwer_1",
                "category": "kurs_zahlen100_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "hunderterraum",
                "difficulty": "schwer",
                "points": 10,
                "question": "Mia denkt an eine Zahl. Ihr Vorgänger ist 59. An welche Zahl denkt Mia?",
                "answers": [
                    "60",
                    "58",
                    "61",
                    "50"
                ],
                "correct": 0,
                "explanation": "Wenn 59 der Vorgänger ist, kommt die gesuchte Zahl direkt danach: 59 + 1 = 60."
            },
            {
                "id": "zahlen100k2l3u_schwer_2",
                "category": "kurs_zahlen100_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "hunderterraum",
                "difficulty": "schwer",
                "points": 10,
                "question": "Der Nachfolger einer Zahl ist 100. Welche Zahl ist es?",
                "answers": [
                    "99",
                    "101",
                    "90",
                    "98"
                ],
                "correct": 0,
                "explanation": "Die gesuchte Zahl steht direkt vor der 100: 100 − 1 = 99."
            },
            {
                "id": "zahlen100k2l3u_schwer_3",
                "category": "kurs_zahlen100_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "hunderterraum",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welche Zahlen sind die Nachbarzehner von 95?",
                "answers": [
                    "90 und 100",
                    "90 und 95",
                    "95 und 100",
                    "80 und 90"
                ],
                "correct": 0,
                "explanation": "Die Zehnerzahl vor 95 ist 90, die danach ist 100.",
                "grafik": "<svg viewBox='0 0 360 84' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='40' x2='346' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='354,40 344,34 344,46' fill='#38bdf8'/><line x1='24.0' y1='30' x2='24.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='55.2' y1='30' x2='55.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='86.4' y1='30' x2='86.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='117.6' y1='30' x2='117.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='148.8' y1='30' x2='148.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='180.0' y1='30' x2='180.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='211.2' y1='30' x2='211.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='242.4' y1='30' x2='242.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='273.6' y1='30' x2='273.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='304.8' y1='30' x2='304.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='336.0' y1='30' x2='336.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><text x='24.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>90</text><text x='336.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>100</text><circle cx='180.0' cy='40' r='7' fill='#f43f5e' stroke='#fff' stroke-width='2'/><text x='180.0' y='22' text-anchor='middle' font-size='13' font-weight='800' font-family='sans-serif' fill='#f43f5e'>95</text></svg>"
            },
            {
                "id": "zahlen100k2l3u_schwer_4",
                "category": "kurs_zahlen100_k2_l3",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "hunderterraum",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welche Zahl hat den Vorgänger 29 und den Nachfolger 31?",
                "answers": [
                    "30",
                    "28",
                    "32",
                    "39"
                ],
                "correct": 0,
                "explanation": "Die Zahl liegt genau zwischen 29 und 31. Das ist die 30."
            }
        ]
    },
    "test": [
        {
            "id": "zahlen100k2l3_test_1",
            "category": "kurs_zahlen100_k2_l3",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "hunderterraum",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Zahl ist der Nachfolger von 59?",
            "answers": [
                "60",
                "58",
                "50",
                "69"
            ],
            "correct": 0,
            "explanation": "Nach der 59 beginnt ein neuer Zehner: 59 + 1 = 60."
        },
        {
            "id": "zahlen100k2l3_test_2",
            "category": "kurs_zahlen100_k2_l3",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "hunderterraum",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Zahl ist der Vorgänger von 41?",
            "answers": [
                "40",
                "42",
                "31",
                "39"
            ],
            "correct": 0,
            "explanation": "Direkt vor der 41 steht die 40: 41 − 1 = 40."
        },
        {
            "id": "zahlen100k2l3_test_3",
            "category": "kurs_zahlen100_k2_l3",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "hunderterraum",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Zahlen sind die Nachbarzehner von 63?",
            "answers": [
                "60 und 70",
                "63 und 70",
                "50 und 60",
                "60 und 63"
            ],
            "correct": 0,
            "explanation": "Die Zehnerzahl vor 63 ist 60, die danach ist 70.",
            "grafik": "<svg viewBox='0 0 360 84' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='40' x2='346' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='354,40 344,34 344,46' fill='#38bdf8'/><line x1='24.0' y1='30' x2='24.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='55.2' y1='30' x2='55.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='86.4' y1='30' x2='86.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='117.6' y1='30' x2='117.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='148.8' y1='30' x2='148.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='180.0' y1='30' x2='180.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='211.2' y1='30' x2='211.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='242.4' y1='30' x2='242.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='273.6' y1='30' x2='273.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='304.8' y1='30' x2='304.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='336.0' y1='30' x2='336.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><text x='24.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>60</text><text x='336.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>70</text><circle cx='117.6' cy='40' r='7' fill='#f43f5e' stroke='#fff' stroke-width='2'/><text x='117.6' y='22' text-anchor='middle' font-size='13' font-weight='800' font-family='sans-serif' fill='#f43f5e'>63</text></svg>"
        },
        {
            "id": "zahlen100k2l3_test_4",
            "category": "kurs_zahlen100_k2_l3",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "hunderterraum",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Zahl fehlt am Zahlenstrahl?",
            "answers": [
                "89",
                "91",
                "87",
                "98"
            ],
            "correct": 0,
            "explanation": "Zwischen 88 und 90 liegt genau eine Zahl: 89.",
            "grafik": "<svg viewBox='0 0 360 84' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='40' x2='346' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='354,40 344,34 344,46' fill='#38bdf8'/><line x1='24.0' y1='30' x2='24.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='55.2' y1='30' x2='55.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='86.4' y1='30' x2='86.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='117.6' y1='30' x2='117.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='148.8' y1='30' x2='148.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='180.0' y1='30' x2='180.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='211.2' y1='30' x2='211.2' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='242.4' y1='30' x2='242.4' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='273.6' y1='30' x2='273.6' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='304.8' y1='30' x2='304.8' y2='50' stroke='#e2e8f0' stroke-width='2'/><line x1='336.0' y1='30' x2='336.0' y2='50' stroke='#e2e8f0' stroke-width='2'/><text x='24.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>85</text><text x='117.6' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>88</text><text x='180.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>90</text><text x='336.0' y='70' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>95</text><rect x='133.8' y='54' width='30' height='22' rx='5' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='148.8' y='70' text-anchor='middle' font-size='14' font-weight='800' font-family='sans-serif' fill='#f59e0b'>?</text></svg>"
        },
        {
            "id": "zahlen100k2l3_test_5",
            "category": "kurs_zahlen100_k2_l3",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "hunderterraum",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Zahl liegt genau zwischen 76 und 78?",
            "answers": [
                "77",
                "75",
                "79",
                "86"
            ],
            "correct": 0,
            "explanation": "76 und 78 sind die Nachbarzahlen von 77. Also liegt 77 genau dazwischen."
        },
        {
            "id": "zahlen100k2l3_test_6",
            "category": "kurs_zahlen100_k2_l3",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "hunderterraum",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Zahl ist der Vorgänger von 90?",
            "answers": [
                "89",
                "91",
                "80",
                "99"
            ],
            "correct": 0,
            "explanation": "Vor der 90 kommt die 89. Der Zehner wird kleiner: 90 − 1 = 89."
        }
    ],
    "bestehenAb": 0.8
}];
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) {
            if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l);
        });
    }
})();
