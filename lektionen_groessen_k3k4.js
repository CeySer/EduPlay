// Groessen, Geld & Zeit - Klasse 4 Mathe
(function () {
    const extraKurse = [{"id": "groessen_k3k4", "title": "Größen, Geld & Zeit", "icon": "⏰", "grade": 4, "subject": "mathe", "beschreibung": "Größere Geldbeträge rechnen, Wechselgeld bestimmen, Einheiten (km/m, kg/g) umrechnen und Zeitspannen zwischen Uhrzeiten berechnen."}];
    const extraLektionen = [{
    "id": "groessen_k3k4_l1",
    "kurs": "groessen_k3k4",
    "order": 1,
    "icon": "💵",
    "title": "Geld rechnen & Einheiten umrechnen",
    "kurz": "Größere Geldbeträge addieren/subtrahieren, Wechselgeld und Einheiten (km/m, kg/g) umrechnen",
    "erklaerung": {
        "intro": "Größere Geldbeträge rechnest du wie gewohnt: <b>zusammenzählen</b> für die Summe, <b>abziehen</b> für den Rest oder das Wechselgeld. Bei Einheiten gilt: 1 km = 1000 m und 1 kg = 1000 g. Um von der großen in die kleine Einheit umzurechnen, multiplizierst du mit 1000; andersherum teilst du durch 1000.",
        "beispiele": [
            "12 € + 5 € = 17 €.<svg viewBox='0 0 300 100' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='128' height='60' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='74' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>💶</text><text x='74' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>12 €</text><rect x='162' y='10' width='128' height='60' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><text x='226' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>💶</text><text x='226' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5 €</text></svg>",
            "Preis 27,35 €, bezahlt mit 50 €: Wechselgeld = 50 € − 27,35 € = 22,65 €.<svg viewBox='0 0 360 162' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(115.0,10)'><g><rect x='6' y='6' width='118' height='48' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='22' cy='30.0' r='3.5' fill='#1e293b' stroke='#f59e0b' stroke-width='1.5'/><text x='73.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='18' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>27,35 €</text></g></g><text x='180.0' y='88' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>bezahlt mit:</text><g transform='translate(127.0,98.0)'><g><rect x='0' y='0' width='92.0' height='48.0' rx='9' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='6' y='6' width='80.0' height='36.0' rx='5' fill='none' stroke='#38bdf8' stroke-width='1.5' stroke-dasharray='3,3'/><text x='46.0' y='25.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>50 €</text></g></g></svg>",
            "1 km = 1000 m, also sind 3,5 km dasselbe wie 3500 m.<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>3,5 km</text></svg>"
        ]
    },
    "uebung": {
        "leicht": [
            {
                "id": "grk34l1_l1",
                "category": "kurs_groessen_k3k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geld_addieren",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie viel Geld ist das zusammen?",
                "answers": [
                    "17 €",
                    "18 €",
                    "16 €",
                    "17,50 €"
                ],
                "correct": 0,
                "explanation": "12 € + 5 € = 17 €.",
                "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='128' height='60' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='74' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>💶</text><text x='74' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>12 €</text><rect x='162' y='10' width='128' height='60' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><text x='226' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>💶</text><text x='226' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5 €</text></svg>"
            },
            {
                "id": "grk34l1_l2",
                "category": "kurs_groessen_k3k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geld_addieren",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie viel Geld ist das zusammen?",
                "answers": [
                    "11,50 €",
                    "12,50 €",
                    "10,50 €",
                    "12 €"
                ],
                "correct": 0,
                "explanation": "8,50 € + 3 € = 11,50 €.",
                "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='128' height='60' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='74' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>💶</text><text x='74' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>8,50 €</text><rect x='162' y='10' width='128' height='60' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><text x='226' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>💶</text><text x='226' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>3 €</text></svg>"
            },
            {
                "id": "grk34l1_l3",
                "category": "kurs_groessen_k3k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "einheiten_umrechnen",
                "difficulty": "leicht",
                "points": 10,
                "question": "5 km sind wie viele m?",
                "answers": [
                    "5000 m",
                    "6000 m",
                    "4000 m",
                    "5100 m"
                ],
                "correct": 0,
                "explanation": "1 km = 1000 m, also 5 km = 5 × 1000 m = 5000 m.",
                "grafik": "<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5 km</text></svg>"
            },
            {
                "id": "grk34l1_l4",
                "category": "kurs_groessen_k3k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "einheiten_umrechnen",
                "difficulty": "leicht",
                "points": 10,
                "question": "2000 g sind wie viele kg?",
                "answers": [
                    "2 kg",
                    "2,2 kg",
                    "20 kg",
                    "0,2 kg"
                ],
                "correct": 0,
                "explanation": "1000 g = 1 kg, also 2000 g = 2 kg.",
                "grafik": "<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2000 g</text></svg>"
            }
        ],
        "mittel": [
            {
                "id": "grk34l1_m1",
                "category": "kurs_groessen_k3k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geld_subtrahieren",
                "difficulty": "mittel",
                "points": 10,
                "question": "Anna hat 20 € und kauft für 7,50 € ein. Wie viel Geld bleibt ihr?",
                "answers": [
                    "12,50 €",
                    "13,50 €",
                    "11,50 €",
                    "13 €"
                ],
                "correct": 0,
                "explanation": "20 € − 7,50 € = 12,50 €.",
                "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='128' height='60' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='74' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>💶</text><text x='74' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>20 €</text><rect x='162' y='10' width='128' height='60' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><text x='226' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>🛒</text><text x='226' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>7,50 €</text></svg>"
            },
            {
                "id": "grk34l1_m2",
                "category": "kurs_groessen_k3k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "wechselgeld",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viel Wechselgeld gibt es zurück?",
                "answers": [
                    "4,20 €",
                    "5,20 €",
                    "3,20 €",
                    "4,70 €"
                ],
                "correct": 0,
                "explanation": "20 € − 15,80 € = 4,20 €.",
                "grafik": "<svg viewBox='0 0 360 162' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(115.0,10)'><g><rect x='6' y='6' width='118' height='48' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='22' cy='30.0' r='3.5' fill='#1e293b' stroke='#f59e0b' stroke-width='1.5'/><text x='73.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='18' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>15,80 €</text></g></g><text x='180.0' y='88' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>bezahlt mit:</text><g transform='translate(127.0,98.0)'><g><rect x='0' y='0' width='92.0' height='48.0' rx='9' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='6' y='6' width='80.0' height='36.0' rx='5' fill='none' stroke='#38bdf8' stroke-width='1.5' stroke-dasharray='3,3'/><text x='46.0' y='25.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>20 €</text></g></g></svg>"
            },
            {
                "id": "grk34l1_m3",
                "category": "kurs_groessen_k3k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "einheiten_umrechnen",
                "difficulty": "mittel",
                "points": 10,
                "question": "3,5 km sind wie viele m?",
                "answers": [
                    "3500 m",
                    "4500 m",
                    "2500 m",
                    "3600 m"
                ],
                "correct": 0,
                "explanation": "1 km = 1000 m, also 3,5 km = 3,5 × 1000 m = 3500 m.",
                "grafik": "<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>3,5 km</text></svg>"
            },
            {
                "id": "grk34l1_m4",
                "category": "kurs_groessen_k3k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "einheiten_umrechnen",
                "difficulty": "mittel",
                "points": 10,
                "question": "1,2 kg sind wie viele g?",
                "answers": [
                    "1200 g",
                    "1300 g",
                    "1100 g",
                    "2200 g"
                ],
                "correct": 0,
                "explanation": "1 kg = 1000 g, also 1,2 kg = 1200 g.",
                "grafik": "<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1,2 kg</text></svg>"
            }
        ],
        "schwer": [
            {
                "id": "grk34l1_s1",
                "category": "kurs_groessen_k3k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "wechselgeld",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie viel Wechselgeld gibt es zurück?",
                "answers": [
                    "22,65 €",
                    "23,65 €",
                    "21,65 €",
                    "23,15 €"
                ],
                "correct": 0,
                "explanation": "50 € − 27,35 € = 22,65 €.",
                "grafik": "<svg viewBox='0 0 360 162' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(115.0,10)'><g><rect x='6' y='6' width='118' height='48' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='22' cy='30.0' r='3.5' fill='#1e293b' stroke='#f59e0b' stroke-width='1.5'/><text x='73.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='18' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>27,35 €</text></g></g><text x='180.0' y='88' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>bezahlt mit:</text><g transform='translate(127.0,98.0)'><g><rect x='0' y='0' width='92.0' height='48.0' rx='9' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='6' y='6' width='80.0' height='36.0' rx='5' fill='none' stroke='#38bdf8' stroke-width='1.5' stroke-dasharray='3,3'/><text x='46.0' y='25.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>50 €</text></g></g></svg>"
            },
            {
                "id": "grk34l1_s2",
                "category": "kurs_groessen_k3k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geld_addieren",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie viel Geld ist das zusammen?",
                "answers": [
                    "24,35 €",
                    "25,35 €",
                    "23,35 €",
                    "24,85 €"
                ],
                "correct": 0,
                "explanation": "15,90 € + 8,45 € = 24,35 €.",
                "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='128' height='60' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='74' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>💶</text><text x='74' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>15,90 €</text><rect x='162' y='10' width='128' height='60' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><text x='226' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>💶</text><text x='226' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>8,45 €</text></svg>"
            },
            {
                "id": "grk34l1_s3",
                "category": "kurs_groessen_k3k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "einheiten_umrechnen",
                "difficulty": "schwer",
                "points": 10,
                "question": "4500 m sind wie viele km?",
                "answers": [
                    "4,5 km",
                    "4,05 km",
                    "45 km",
                    "0,45 km"
                ],
                "correct": 0,
                "explanation": "1000 m = 1 km, die restlichen 500 m sind ein halbes km: 4500 m = 4,5 km.",
                "grafik": "<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>4500 m</text></svg>"
            },
            {
                "id": "grk34l1_s4",
                "category": "kurs_groessen_k3k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "einheiten_umrechnen",
                "difficulty": "schwer",
                "points": 10,
                "question": "2500 g sind wie viele kg?",
                "answers": [
                    "2,5 kg",
                    "2,05 kg",
                    "25 kg",
                    "0,25 kg"
                ],
                "correct": 0,
                "explanation": "1000 g = 1 kg, die restlichen 500 g sind ein halbes kg: 2500 g = 2,5 kg.",
                "grafik": "<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2500 g</text></svg>"
            }
        ]
    },
    "test": [
        {
            "id": "grk34l1_t1",
            "category": "kurs_groessen_k3k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "wechselgeld",
            "difficulty": "mittel",
            "points": 10,
            "question": "Wie viel Wechselgeld gibt es zurück?",
            "answers": [
                "3,25 €",
                "4,25 €",
                "2,25 €",
                "3,75 €"
            ],
            "correct": 0,
            "explanation": "10 € − 6,75 € = 3,25 €.",
            "grafik": "<svg viewBox='0 0 360 162' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(115.0,10)'><g><rect x='6' y='6' width='118' height='48' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='22' cy='30.0' r='3.5' fill='#1e293b' stroke='#f59e0b' stroke-width='1.5'/><text x='73.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='18' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>6,75 €</text></g></g><text x='180.0' y='88' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>bezahlt mit:</text><g transform='translate(127.0,98.0)'><g><rect x='0' y='0' width='92.0' height='48.0' rx='9' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='6' y='6' width='80.0' height='36.0' rx='5' fill='none' stroke='#38bdf8' stroke-width='1.5' stroke-dasharray='3,3'/><text x='46.0' y='25.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10 €</text></g></g></svg>"
        },
        {
            "id": "grk34l1_t2",
            "category": "kurs_groessen_k3k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "geld_subtrahieren",
            "difficulty": "mittel",
            "points": 10,
            "question": "Ben spart 45 € und kauft ein Spiel für 28 €. Wie viel Geld bleibt übrig?",
            "answers": [
                "17 €",
                "18 €",
                "16 €",
                "17,50 €"
            ],
            "correct": 0,
            "explanation": "45 € − 28 € = 17 €.",
            "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='128' height='60' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='74' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>💶</text><text x='74' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>45 €</text><rect x='162' y='10' width='128' height='60' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><text x='226' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>🛒</text><text x='226' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>28 €</text></svg>"
        },
        {
            "id": "grk34l1_t3",
            "category": "kurs_groessen_k3k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "einheiten_umrechnen",
            "difficulty": "mittel",
            "points": 10,
            "question": "Ein Auto fährt 8 km. Wie viele Meter sind das?",
            "answers": [
                "8000 m",
                "9000 m",
                "7000 m",
                "8100 m"
            ],
            "correct": 0,
            "explanation": "1 km = 1000 m, also 8 km = 8000 m.",
            "grafik": "<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>8 km</text></svg>"
        },
        {
            "id": "grk34l1_t4",
            "category": "kurs_groessen_k3k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "einheiten_umrechnen",
            "difficulty": "mittel",
            "points": 10,
            "question": "Ein Paket wiegt 3200 g. Wie viele kg sind das?",
            "answers": [
                "3,2 kg",
                "3,02 kg",
                "32 kg",
                "0,32 kg"
            ],
            "correct": 0,
            "explanation": "1000 g = 1 kg, also 3200 g = 3,2 kg.",
            "grafik": "<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>3200 g</text></svg>"
        },
        {
            "id": "grk34l1_t5",
            "category": "kurs_groessen_k3k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "geld_konzept",
            "difficulty": "mittel",
            "points": 10,
            "question": "Wie viele Cent sind 1 Euro?",
            "answers": [
                "100",
                "10",
                "1000",
                "50"
            ],
            "correct": 0,
            "explanation": "1 Euro = 100 Cent.",
            "grafik": "<svg viewBox='0 0 88 88' style='width:100%;max-width:88px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(4.0,4.0)'><g><circle cx='40.0' cy='40.0' r='40.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='40.0' cy='40.0' r='33.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='40.0' y='41.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 €</text></g></g></svg>"
        },
        {
            "id": "grk34l1_t6",
            "category": "kurs_groessen_k3k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "einheiten_umrechnen",
            "difficulty": "mittel",
            "points": 10,
            "question": "Wie viele Meter sind 1 Kilometer?",
            "answers": [
                "1000",
                "10",
                "100",
                "10000"
            ],
            "correct": 0,
            "explanation": "1 km = 1000 m.",
            "grafik": "<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 km</text></svg>"
        }
    ],
    "bestehenAb": 0.8
}, {
    "id": "groessen_k3k4_l2",
    "kurs": "groessen_k3k4",
    "order": 2,
    "icon": "⏱️",
    "title": "Zeitspannen",
    "kurz": "Die Dauer zwischen zwei Uhrzeiten berechnen und Endzeiten bestimmen",
    "erklaerung": {
        "intro": "Um die <b>Dauer</b> zwischen zwei Uhrzeiten zu finden, rechnest du die spätere Uhrzeit minus die frühere Uhrzeit (in Minuten). Um eine <b>Endzeit</b> zu bestimmen, addierst du die Dauer zur Startzeit. 1 Stunde = 60 Minuten.",
        "beispiele": [
            "Von 3:30 Uhr bis 5:15 Uhr sind es 1 Std 45 Min.<svg viewBox='0 0 236 122' style='width:100%;max-width:236px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(10,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='64.4' y2='49.5' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='44.0' y2='77.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='54.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3:30 Uhr</text><g transform='translate(138.0,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='52.1' y2='63.5' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='77.0' y2='44.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='182.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>5:15 Uhr</text></svg>",
            "Start 5:00 Uhr, Dauer 30 Min → Ende 5:30 Uhr.<svg viewBox='0 0 234 114' style='width:100%;max-width:234px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(5,5)'><circle cx='52.0' cy='52.0' r='52.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='52.0' y1='12.0' x2='52.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='74.5' y1='13.0' x2='76.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='91.0' y1='29.5' x2='93.6' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='92.0' y1='52.0' x2='100.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='91.0' y1='74.5' x2='93.6' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='74.5' y1='91.0' x2='76.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='52.0' y1='92.0' x2='52.0' y2='100.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='29.5' y1='91.0' x2='28.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='13.0' y1='74.5' x2='10.4' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='52.0' x2='4.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='13.0' y1='29.5' x2='10.4' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='29.5' y1='13.0' x2='28.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='52.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='82.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='52.0' y='82.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='52.0' y1='52.0' x2='64.5' y2='73.6' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='52.0' y1='52.0' x2='52.0' y2='13.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='52.0' cy='52.0' r='4' fill='#e5e7eb'/></g><rect x='116.0' y='37.0' width='108' height='40' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='170.0' y='58.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>30 Min</text></svg>",
            "Von 12:30 Uhr bis 14:00 Uhr sind es 1 Std 30 Min (14:00 Uhr − 12:30 Uhr).<svg viewBox='0 0 236 122' style='width:100%;max-width:236px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(10,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='49.5' y2='23.6' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='44.0' y2='77.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='54.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12:30 Uhr</text><g transform='translate(138.0,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='62.3' y2='33.4' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='44.0' y2='11.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='182.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>14:00 Uhr</text></svg>"
        ]
    },
    "uebung": {
        "leicht": [
            {
                "id": "grk34l2_l1",
                "category": "kurs_groessen_k3k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zeitspanne",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie lange dauert das?",
                "answers": [
                    "1 Std",
                    "1 Std 5 Min",
                    "55 Min",
                    "1 Std 10 Min"
                ],
                "correct": 0,
                "explanation": "Von 3:00 Uhr bis 4:00 Uhr sind es 1 Std.",
                "grafik": "<svg viewBox='0 0 236 122' style='width:100%;max-width:236px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(10,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='65.1' y2='44.0' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='44.0' y2='11.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='54.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3:00 Uhr</text><g transform='translate(138.0,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='62.3' y2='54.6' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='44.0' y2='11.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='182.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>4:00 Uhr</text></svg>"
            },
            {
                "id": "grk34l2_l2",
                "category": "kurs_groessen_k3k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zeitspanne",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie lange dauert das?",
                "answers": [
                    "30 Min",
                    "35 Min",
                    "25 Min",
                    "40 Min"
                ],
                "correct": 0,
                "explanation": "Von 2:15 Uhr bis 2:45 Uhr sind es 30 Min.",
                "grafik": "<svg viewBox='0 0 236 122' style='width:100%;max-width:236px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(10,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='63.5' y2='35.9' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='77.0' y2='44.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='54.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>2:15 Uhr</text><g transform='translate(138.0,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='64.9' y2='41.2' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='11.0' y2='44.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='182.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>2:45 Uhr</text></svg>"
            },
            {
                "id": "grk34l2_l3",
                "category": "kurs_groessen_k3k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zeitspanne",
                "difficulty": "leicht",
                "points": 10,
                "question": "Etwas beginnt um 5:00 Uhr und dauert 30 Min. Wann ist es zu Ende?",
                "answers": [
                    "5:30 Uhr",
                    "5:35 Uhr",
                    "5:25 Uhr",
                    "5:40 Uhr"
                ],
                "correct": 0,
                "explanation": "5:00 Uhr + 30 Min = 5:30 Uhr.",
                "grafik": "<svg viewBox='0 0 234 114' style='width:100%;max-width:234px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(5,5)'><circle cx='52.0' cy='52.0' r='52.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='52.0' y1='12.0' x2='52.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='74.5' y1='13.0' x2='76.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='91.0' y1='29.5' x2='93.6' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='92.0' y1='52.0' x2='100.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='91.0' y1='74.5' x2='93.6' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='74.5' y1='91.0' x2='76.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='52.0' y1='92.0' x2='52.0' y2='100.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='29.5' y1='91.0' x2='28.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='13.0' y1='74.5' x2='10.4' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='52.0' x2='4.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='13.0' y1='29.5' x2='10.4' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='29.5' y1='13.0' x2='28.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='52.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='82.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='52.0' y='82.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='52.0' y1='52.0' x2='64.5' y2='73.6' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='52.0' y1='52.0' x2='52.0' y2='13.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='52.0' cy='52.0' r='4' fill='#e5e7eb'/></g><rect x='116.0' y='37.0' width='108' height='40' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='170.0' y='58.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>30 Min</text></svg>"
            },
            {
                "id": "grk34l2_l4",
                "category": "kurs_groessen_k3k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zeitspanne",
                "difficulty": "leicht",
                "points": 10,
                "question": "Etwas beginnt um 9:00 Uhr und dauert 1 Std. Wann ist es zu Ende?",
                "answers": [
                    "10:00 Uhr",
                    "10:05 Uhr",
                    "9:55 Uhr",
                    "10:10 Uhr"
                ],
                "correct": 0,
                "explanation": "9:00 Uhr + 1 Std = 10:00 Uhr.",
                "grafik": "<svg viewBox='0 0 234 114' style='width:100%;max-width:234px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(5,5)'><circle cx='52.0' cy='52.0' r='52.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='52.0' y1='12.0' x2='52.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='74.5' y1='13.0' x2='76.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='91.0' y1='29.5' x2='93.6' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='92.0' y1='52.0' x2='100.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='91.0' y1='74.5' x2='93.6' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='74.5' y1='91.0' x2='76.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='52.0' y1='92.0' x2='52.0' y2='100.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='29.5' y1='91.0' x2='28.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='13.0' y1='74.5' x2='10.4' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='52.0' x2='4.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='13.0' y1='29.5' x2='10.4' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='29.5' y1='13.0' x2='28.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='52.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='82.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='52.0' y='82.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='52.0' y1='52.0' x2='27.0' y2='52.0' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='52.0' y1='52.0' x2='52.0' y2='13.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='52.0' cy='52.0' r='4' fill='#e5e7eb'/></g><rect x='116.0' y='37.0' width='108' height='40' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='170.0' y='58.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 Std</text></svg>"
            }
        ],
        "mittel": [
            {
                "id": "grk34l2_m1",
                "category": "kurs_groessen_k3k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zeitspanne",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie lange dauert das?",
                "answers": [
                    "45 Min",
                    "50 Min",
                    "40 Min",
                    "55 Min"
                ],
                "correct": 0,
                "explanation": "Von 7:20 Uhr bis 8:05 Uhr sind es 45 Min.",
                "grafik": "<svg viewBox='0 0 236 122' style='width:100%;max-width:236px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(10,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='30.4' y2='60.2' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='72.6' y2='60.5' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='54.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>7:20 Uhr</text><g transform='translate(138.0,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='25.3' y2='53.8' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='60.5' y2='15.4' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='182.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>8:05 Uhr</text></svg>"
            },
            {
                "id": "grk34l2_m2",
                "category": "kurs_groessen_k3k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zeitspanne",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie lange dauert das?",
                "answers": [
                    "1 Std 30 Min",
                    "1 Std 35 Min",
                    "1 Std 25 Min",
                    "1 Std 40 Min"
                ],
                "correct": 0,
                "explanation": "Von 10:00 Uhr bis 11:30 Uhr sind es 1 Std 30 Min.",
                "grafik": "<svg viewBox='0 0 236 122' style='width:100%;max-width:236px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(10,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='25.7' y2='33.4' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='44.0' y2='11.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='54.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>10:00 Uhr</text><g transform='translate(138.0,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='38.5' y2='23.6' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='44.0' y2='77.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='182.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>11:30 Uhr</text></svg>"
            },
            {
                "id": "grk34l2_m3",
                "category": "kurs_groessen_k3k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zeitspanne",
                "difficulty": "mittel",
                "points": 10,
                "question": "Etwas beginnt um 6:45 Uhr und dauert 40 Min. Wann ist es zu Ende?",
                "answers": [
                    "7:25 Uhr",
                    "7:30 Uhr",
                    "7:20 Uhr",
                    "7:35 Uhr"
                ],
                "correct": 0,
                "explanation": "6:45 Uhr + 40 Min = 7:25 Uhr.",
                "grafik": "<svg viewBox='0 0 234 114' style='width:100%;max-width:234px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(5,5)'><circle cx='52.0' cy='52.0' r='52.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='52.0' y1='12.0' x2='52.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='74.5' y1='13.0' x2='76.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='91.0' y1='29.5' x2='93.6' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='92.0' y1='52.0' x2='100.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='91.0' y1='74.5' x2='93.6' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='74.5' y1='91.0' x2='76.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='52.0' y1='92.0' x2='52.0' y2='100.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='29.5' y1='91.0' x2='28.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='13.0' y1='74.5' x2='10.4' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='52.0' x2='4.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='13.0' y1='29.5' x2='10.4' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='29.5' y1='13.0' x2='28.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='52.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='82.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='52.0' y='82.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='52.0' y1='52.0' x2='42.4' y2='75.1' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='52.0' y1='52.0' x2='13.0' y2='52.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='52.0' cy='52.0' r='4' fill='#e5e7eb'/></g><rect x='116.0' y='37.0' width='108' height='40' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='170.0' y='58.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>40 Min</text></svg>"
            },
            {
                "id": "grk34l2_m4",
                "category": "kurs_groessen_k3k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zeitspanne",
                "difficulty": "mittel",
                "points": 10,
                "question": "Etwas beginnt um 11:50 Uhr und dauert 25 Min. Wann ist es zu Ende?",
                "answers": [
                    "12:15 Uhr",
                    "12:20 Uhr",
                    "12:10 Uhr",
                    "12:25 Uhr"
                ],
                "correct": 0,
                "explanation": "11:50 Uhr + 25 Min = 12:15 Uhr.",
                "grafik": "<svg viewBox='0 0 234 114' style='width:100%;max-width:234px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(5,5)'><circle cx='52.0' cy='52.0' r='52.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='52.0' y1='12.0' x2='52.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='74.5' y1='13.0' x2='76.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='91.0' y1='29.5' x2='93.6' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='92.0' y1='52.0' x2='100.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='91.0' y1='74.5' x2='93.6' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='74.5' y1='91.0' x2='76.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='52.0' y1='92.0' x2='52.0' y2='100.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='29.5' y1='91.0' x2='28.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='13.0' y1='74.5' x2='10.4' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='52.0' x2='4.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='13.0' y1='29.5' x2='10.4' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='29.5' y1='13.0' x2='28.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='52.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='82.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='52.0' y='82.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='52.0' y1='52.0' x2='49.8' y2='27.1' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='52.0' y1='52.0' x2='18.2' y2='32.5' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='52.0' cy='52.0' r='4' fill='#e5e7eb'/></g><rect x='116.0' y='37.0' width='108' height='40' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='170.0' y='58.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>25 Min</text></svg>"
            }
        ],
        "schwer": [
            {
                "id": "grk34l2_s1",
                "category": "kurs_groessen_k3k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zeitspanne",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie lange dauert das?",
                "answers": [
                    "1 Std 30 Min",
                    "1 Std 35 Min",
                    "1 Std 25 Min",
                    "1 Std 40 Min"
                ],
                "correct": 0,
                "explanation": "Von 13:40 Uhr bis 15:10 Uhr sind es 1 Std 30 Min.",
                "grafik": "<svg viewBox='0 0 236 122' style='width:100%;max-width:236px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(10,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='60.2' y2='30.4' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='15.4' y2='60.5' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='54.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>13:40 Uhr</text><g transform='translate(138.0,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='65.0' y2='45.8' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='72.6' y2='27.5' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='182.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>15:10 Uhr</text></svg>"
            },
            {
                "id": "grk34l2_s2",
                "category": "kurs_groessen_k3k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zeitspanne",
                "difficulty": "schwer",
                "points": 10,
                "question": "Etwas beginnt um 23:40 Uhr und dauert 45 Min. Wann ist es zu Ende?",
                "answers": [
                    "0:25 Uhr",
                    "0:30 Uhr",
                    "0:20 Uhr",
                    "0:35 Uhr"
                ],
                "correct": 0,
                "explanation": "23:40 Uhr + 45 Min = 0:25 Uhr.",
                "grafik": "<svg viewBox='0 0 234 114' style='width:100%;max-width:234px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(5,5)'><circle cx='52.0' cy='52.0' r='52.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='52.0' y1='12.0' x2='52.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='74.5' y1='13.0' x2='76.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='91.0' y1='29.5' x2='93.6' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='92.0' y1='52.0' x2='100.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='91.0' y1='74.5' x2='93.6' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='74.5' y1='91.0' x2='76.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='52.0' y1='92.0' x2='52.0' y2='100.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='29.5' y1='91.0' x2='28.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='13.0' y1='74.5' x2='10.4' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='52.0' x2='4.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='13.0' y1='29.5' x2='10.4' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='29.5' y1='13.0' x2='28.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='52.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='82.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='52.0' y='82.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='52.0' y1='52.0' x2='47.7' y2='27.4' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='52.0' y1='52.0' x2='18.2' y2='71.5' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='52.0' cy='52.0' r='4' fill='#e5e7eb'/></g><rect x='116.0' y='37.0' width='108' height='40' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='170.0' y='58.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>45 Min</text></svg>"
            },
            {
                "id": "grk34l2_s3",
                "category": "kurs_groessen_k3k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zeitspanne",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie lange dauert das?",
                "answers": [
                    "2 Std 45 Min",
                    "2 Std 50 Min",
                    "2 Std 40 Min",
                    "2 Std 55 Min"
                ],
                "correct": 0,
                "explanation": "Von 16:10 Uhr bis 18:55 Uhr sind es 2 Std 45 Min.",
                "grafik": "<svg viewBox='0 0 236 122' style='width:100%;max-width:236px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(10,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='61.3' y2='56.1' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='72.6' y2='27.5' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='54.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>16:10 Uhr</text><g transform='translate(138.0,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='34.2' y2='62.7' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='27.5' y2='15.4' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='182.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>18:55 Uhr</text></svg>"
            },
            {
                "id": "grk34l2_s4",
                "category": "kurs_groessen_k3k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zeitspanne",
                "difficulty": "schwer",
                "points": 10,
                "question": "Etwas beginnt um 14:50 Uhr und dauert 55 Min. Wann ist es zu Ende?",
                "answers": [
                    "15:45 Uhr",
                    "15:50 Uhr",
                    "15:40 Uhr",
                    "15:55 Uhr"
                ],
                "correct": 0,
                "explanation": "14:50 Uhr + 55 Min = 15:45 Uhr.",
                "grafik": "<svg viewBox='0 0 234 114' style='width:100%;max-width:234px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(5,5)'><circle cx='52.0' cy='52.0' r='52.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='52.0' y1='12.0' x2='52.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='74.5' y1='13.0' x2='76.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='91.0' y1='29.5' x2='93.6' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='92.0' y1='52.0' x2='100.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='91.0' y1='74.5' x2='93.6' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='74.5' y1='91.0' x2='76.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='52.0' y1='92.0' x2='52.0' y2='100.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='29.5' y1='91.0' x2='28.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='13.0' y1='74.5' x2='10.4' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='52.0' x2='4.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='13.0' y1='29.5' x2='10.4' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='29.5' y1='13.0' x2='28.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='52.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='82.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='52.0' y='82.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='52.0' y1='52.0' x2='76.9' y2='49.8' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='52.0' y1='52.0' x2='18.2' y2='32.5' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='52.0' cy='52.0' r='4' fill='#e5e7eb'/></g><rect x='116.0' y='37.0' width='108' height='40' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='170.0' y='58.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>55 Min</text></svg>"
            }
        ]
    },
    "test": [
        {
            "id": "grk34l2_t1",
            "category": "kurs_groessen_k3k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zeitspanne",
            "difficulty": "mittel",
            "points": 10,
            "question": "Wie lange dauert das?",
            "answers": [
                "40 Min",
                "45 Min",
                "35 Min",
                "50 Min"
            ],
            "correct": 0,
            "explanation": "Von 9:10 Uhr bis 9:50 Uhr sind es 40 Min.",
            "grafik": "<svg viewBox='0 0 236 122' style='width:100%;max-width:236px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(10,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='23.0' y2='42.2' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='72.6' y2='27.5' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='54.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9:10 Uhr</text><g transform='translate(138.0,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='24.9' y2='35.1' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='15.4' y2='27.5' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='182.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9:50 Uhr</text></svg>"
        },
        {
            "id": "grk34l2_t2",
            "category": "kurs_groessen_k3k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zeitspanne",
            "difficulty": "mittel",
            "points": 10,
            "question": "Wie lange dauert das?",
            "answers": [
                "1 Std 30 Min",
                "1 Std 35 Min",
                "1 Std 25 Min",
                "1 Std 40 Min"
            ],
            "correct": 0,
            "explanation": "Von 12:30 Uhr bis 14:00 Uhr sind es 1 Std 30 Min.",
            "grafik": "<svg viewBox='0 0 236 122' style='width:100%;max-width:236px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(10,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='49.5' y2='23.6' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='44.0' y2='77.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='54.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12:30 Uhr</text><g transform='translate(138.0,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='62.3' y2='33.4' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='44.0' y2='11.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='182.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>14:00 Uhr</text></svg>"
        },
        {
            "id": "grk34l2_t3",
            "category": "kurs_groessen_k3k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zeitspanne",
            "difficulty": "mittel",
            "points": 10,
            "question": "Etwas beginnt um 8:15 Uhr und dauert 50 Min. Wann ist es zu Ende?",
            "answers": [
                "9:05 Uhr",
                "9:10 Uhr",
                "9:00 Uhr",
                "9:15 Uhr"
            ],
            "correct": 0,
            "explanation": "8:15 Uhr + 50 Min = 9:05 Uhr.",
            "grafik": "<svg viewBox='0 0 234 114' style='width:100%;max-width:234px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(5,5)'><circle cx='52.0' cy='52.0' r='52.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='52.0' y1='12.0' x2='52.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='74.5' y1='13.0' x2='76.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='91.0' y1='29.5' x2='93.6' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='92.0' y1='52.0' x2='100.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='91.0' y1='74.5' x2='93.6' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='74.5' y1='91.0' x2='76.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='52.0' y1='92.0' x2='52.0' y2='100.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='29.5' y1='91.0' x2='28.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='13.0' y1='74.5' x2='10.4' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='52.0' x2='4.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='13.0' y1='29.5' x2='10.4' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='29.5' y1='13.0' x2='28.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='52.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='82.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='52.0' y='82.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='52.0' y1='52.0' x2='28.9' y2='61.6' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='52.0' y1='52.0' x2='91.0' y2='52.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='52.0' cy='52.0' r='4' fill='#e5e7eb'/></g><rect x='116.0' y='37.0' width='108' height='40' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='170.0' y='58.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>50 Min</text></svg>"
        },
        {
            "id": "grk34l2_t4",
            "category": "kurs_groessen_k3k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zeitspanne",
            "difficulty": "mittel",
            "points": 10,
            "question": "Ein Film beginnt um 17:30 Uhr und dauert 105 Minuten. Wann ist er zu Ende?",
            "answers": [
                "19:15 Uhr",
                "19:20 Uhr",
                "19:10 Uhr",
                "19:25 Uhr"
            ],
            "correct": 0,
            "explanation": "17:30 Uhr + 1 Std 45 Min = 19:15 Uhr.",
            "grafik": "<svg viewBox='0 0 234 114' style='width:100%;max-width:234px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(5,5)'><circle cx='52.0' cy='52.0' r='52.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='52.0' y1='12.0' x2='52.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='74.5' y1='13.0' x2='76.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='91.0' y1='29.5' x2='93.6' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='92.0' y1='52.0' x2='100.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='91.0' y1='74.5' x2='93.6' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='74.5' y1='91.0' x2='76.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='52.0' y1='92.0' x2='52.0' y2='100.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='29.5' y1='91.0' x2='28.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='13.0' y1='74.5' x2='10.4' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='52.0' x2='4.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='13.0' y1='29.5' x2='10.4' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='29.5' y1='13.0' x2='28.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='52.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='82.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='52.0' y='82.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='52.0' y1='52.0' x2='58.5' y2='76.1' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='52.0' y1='52.0' x2='52.0' y2='91.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='52.0' cy='52.0' r='4' fill='#e5e7eb'/></g><rect x='116.0' y='37.0' width='108' height='40' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='170.0' y='58.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 Std 45 Min</text></svg>"
        },
        {
            "id": "grk34l2_t5",
            "category": "kurs_groessen_k3k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zeitspanne",
            "difficulty": "mittel",
            "points": 10,
            "question": "Der Bus fährt um 7:05 Uhr los und kommt um 7:38 Uhr an. Wie lange dauert die Fahrt?",
            "answers": [
                "33 Min",
                "38 Min",
                "28 Min",
                "43 Min"
            ],
            "correct": 0,
            "explanation": "Von 7:05 Uhr bis 7:38 Uhr sind es 33 Min.",
            "grafik": "<svg viewBox='0 0 236 122' style='width:100%;max-width:236px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(10,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='32.7' y2='61.8' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='60.5' y2='15.4' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='54.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>7:05 Uhr</text><g transform='translate(138.0,4)'><circle cx='44.0' cy='44.0' r='44.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='44.0' y1='12.0' x2='44.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='62.5' y1='12.0' x2='64.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='25.5' x2='78.6' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='76.0' y1='44.0' x2='84.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='76.0' y1='62.5' x2='78.6' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='62.5' y1='76.0' x2='64.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='44.0' y1='76.0' x2='44.0' y2='84.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='25.5' y1='76.0' x2='24.0' y2='78.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='62.5' x2='9.4' y2='64.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='44.0' x2='4.0' y2='44.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='12.0' y1='25.5' x2='9.4' y2='24.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='25.5' y1='12.0' x2='24.0' y2='9.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='44.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='66.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='44.0' y='66.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='44.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='44.0' y1='44.0' x2='28.1' y2='57.9' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='44.0' y1='44.0' x2='19.5' y2='66.1' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='44.0' cy='44.0' r='4' fill='#e5e7eb'/></g><text x='182.0' y='116' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>7:38 Uhr</text></svg>"
        },
        {
            "id": "grk34l2_t6",
            "category": "kurs_groessen_k3k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zeit_konzept",
            "difficulty": "mittel",
            "points": 10,
            "question": "Wie viele Minuten hat eine Stunde?",
            "answers": [
                "60",
                "30",
                "100",
                "600"
            ],
            "correct": 0,
            "explanation": "1 Stunde = 60 Minuten.",
            "grafik": "<svg viewBox='0 0 104 104' style='width:100%;max-width:124px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='52.0' cy='52.0' r='52.0' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><line x1='52.0' y1='12.0' x2='52.0' y2='4.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='74.5' y1='13.0' x2='76.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><line x1='91.0' y1='29.5' x2='93.6' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='92.0' y1='52.0' x2='100.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='91.0' y1='74.5' x2='93.6' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='74.5' y1='91.0' x2='76.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='52.0' y1='92.0' x2='52.0' y2='100.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='29.5' y1='91.0' x2='28.0' y2='93.6' stroke='#e5e7eb' stroke-width='1.3'/><line x1='13.0' y1='74.5' x2='10.4' y2='76.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='12.0' y1='52.0' x2='4.0' y2='52.0' stroke='#e5e7eb' stroke-width='2.4'/><line x1='13.0' y1='29.5' x2='10.4' y2='28.0' stroke='#e5e7eb' stroke-width='1.3'/><line x1='29.5' y1='13.0' x2='28.0' y2='10.4' stroke='#e5e7eb' stroke-width='1.3'/><text x='52.0' y='22.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>12</text><text x='82.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>3</text><text x='52.0' y='82.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>6</text><text x='22.0' y='52.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>9</text><line x1='52.0' y1='52.0' x2='52.0' y2='27.0' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><line x1='52.0' y1='52.0' x2='52.0' y2='13.0' stroke='#f59e0b' stroke-width='3' stroke-linecap='round'/><circle cx='52.0' cy='52.0' r='4' fill='#e5e7eb'/></svg>"
        }
    ],
    "bestehenAb": 0.8
}];
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
