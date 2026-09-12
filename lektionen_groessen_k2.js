// Groessen & Geld - Klasse 2 Mathe
(function () {
    const extraKurse = [{"id": "groessen_k2", "title": "Größen & Geld", "icon": "💶", "grade": 2, "subject": "mathe", "beschreibung": "Münzen und Scheine zählen, Wechselgeld berechnen, mit dem Lineal messen und Längen sowie Gewichte vergleichen und umrechnen."}];
    const extraLektionen = [{
    "id": "groessen_k2_l1",
    "kurs": "groessen_k2",
    "order": 1,
    "icon": "💰",
    "title": "Geld",
    "kurz": "Münzen und Scheine erkennen, zusammenzählen und Wechselgeld berechnen",
    "erklaerung": {
        "intro": "Es gibt <b>Münzen</b> (1, 2, 5, 10, 20, 50 Cent sowie 1 € und 2 €) und <b>Scheine</b> (5 €, 10 €, 20 €, 50 €, ...). 100 Cent sind 1 Euro. Um zu wissen, wie viel Geld du hast, zählst du alle Münzen und Scheine zusammen. Beim Einkaufen bekommst du <b>Wechselgeld</b> zurück, wenn du mehr bezahlst, als etwas kostet: Wechselgeld = bezahlter Betrag − Preis.",
        "beispiele": [
            "50 ct + 20 ct = 70 ct.<svg viewBox='0 0 360 88' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(44.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>50 ct</text></g></g><g transform='translate(116.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>20 ct</text></g></g></svg>",
            "2 € + 1 € + 20 ct = 3,20 €.<svg viewBox='0 0 360 88' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(44.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2 €</text></g></g><g transform='translate(116.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 €</text></g></g><g transform='translate(188.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>20 ct</text></g></g></svg>",
            "Preis 3,50 €, bezahlt mit 5 €: Wechselgeld = 5 € − 3,50 € = 1,50 €.<svg viewBox='0 0 360 162' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(115.0,10)'><g><rect x='6' y='6' width='118' height='48' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='22' cy='30.0' r='3.5' fill='#1e293b' stroke='#f59e0b' stroke-width='1.5'/><text x='73.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='18' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>3,50 €</text></g></g><text x='180.0' y='88' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>bezahlt mit:</text><g transform='translate(127.0,98.0)'><g><rect x='0' y='0' width='92.0' height='48.0' rx='9' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='6' y='6' width='80.0' height='36.0' rx='5' fill='none' stroke='#38bdf8' stroke-width='1.5' stroke-dasharray='3,3'/><text x='46.0' y='25.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5 €</text></g></g></svg>"
        ]
    },
    "uebung": {
        "leicht": [
            {
                "id": "grk2l1_l1",
                "category": "kurs_groessen_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "geld_zaehlen",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie viel Geld ist das insgesamt?",
                "answers": [
                    "70 ct",
                    "1,70 €",
                    "1,20 €",
                    "20 ct"
                ],
                "correct": 0,
                "explanation": "50 ct + 20 ct = 70 ct.",
                "grafik": "<svg viewBox='0 0 360 88' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(44.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>50 ct</text></g></g><g transform='translate(116.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>20 ct</text></g></g></svg>"
            },
            {
                "id": "grk2l1_l2",
                "category": "kurs_groessen_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "geld_zaehlen",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie viel Geld ist das insgesamt?",
                "answers": [
                    "30 ct",
                    "1,30 €",
                    "80 ct",
                    "50 ct"
                ],
                "correct": 0,
                "explanation": "20 ct + 10 ct = 30 ct.",
                "grafik": "<svg viewBox='0 0 360 88' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(44.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>20 ct</text></g></g><g transform='translate(116.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10 ct</text></g></g></svg>"
            },
            {
                "id": "grk2l1_l3",
                "category": "kurs_groessen_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "geld_zaehlen",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie viel Geld ist das insgesamt?",
                "answers": [
                    "15 ct",
                    "1,15 €",
                    "65 ct",
                    "35 ct"
                ],
                "correct": 0,
                "explanation": "10 ct + 5 ct = 15 ct.",
                "grafik": "<svg viewBox='0 0 360 88' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(44.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10 ct</text></g></g><g transform='translate(116.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5 ct</text></g></g></svg>"
            },
            {
                "id": "grk2l1_l4",
                "category": "kurs_groessen_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "geld_zaehlen",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie viel Geld ist das insgesamt?",
                "answers": [
                    "60 ct",
                    "1,60 €",
                    "1,10 €",
                    "10 ct"
                ],
                "correct": 0,
                "explanation": "50 ct + 10 ct = 60 ct.",
                "grafik": "<svg viewBox='0 0 360 88' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(44.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>50 ct</text></g></g><g transform='translate(116.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10 ct</text></g></g></svg>"
            }
        ],
        "mittel": [
            {
                "id": "grk2l1_m1",
                "category": "kurs_groessen_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "geld_zaehlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viel Geld ist das insgesamt?",
                "answers": [
                    "1,70 €",
                    "2,70 €",
                    "70 ct",
                    "2,20 €"
                ],
                "correct": 0,
                "explanation": "1 € + 50 ct + 20 ct = 1,70 €.",
                "grafik": "<svg viewBox='0 0 360 88' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(44.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 €</text></g></g><g transform='translate(116.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>50 ct</text></g></g><g transform='translate(188.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>20 ct</text></g></g></svg>"
            },
            {
                "id": "grk2l1_m2",
                "category": "kurs_groessen_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "geld_zaehlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viel Geld ist das insgesamt?",
                "answers": [
                    "2,50 €",
                    "3,50 €",
                    "1,50 €",
                    "3 €"
                ],
                "correct": 0,
                "explanation": "2 € + 50 ct = 2,50 €.",
                "grafik": "<svg viewBox='0 0 360 88' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(44.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2 €</text></g></g><g transform='translate(116.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>50 ct</text></g></g></svg>"
            },
            {
                "id": "grk2l1_m3",
                "category": "kurs_groessen_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "geld_zaehlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viel Geld ist das insgesamt?",
                "answers": [
                    "2,20 €",
                    "3,20 €",
                    "1,20 €",
                    "2,70 €"
                ],
                "correct": 0,
                "explanation": "1 € + 1 € + 20 ct = 2,20 €.",
                "grafik": "<svg viewBox='0 0 360 88' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(44.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 €</text></g></g><g transform='translate(116.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 €</text></g></g><g transform='translate(188.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>20 ct</text></g></g></svg>"
            },
            {
                "id": "grk2l1_m4",
                "category": "kurs_groessen_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "geld_zaehlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viel Geld ist das insgesamt?",
                "answers": [
                    "7,10 €",
                    "8,10 €",
                    "6,10 €",
                    "7,60 €"
                ],
                "correct": 0,
                "explanation": "5 € + 2 € + 10 ct = 7,10 €.",
                "grafik": "<svg viewBox='0 0 360 88' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(14.0,14.0)'><g><rect x='0' y='0' width='100.0' height='52.0' rx='9' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='6' y='6' width='88.0' height='40.0' rx='5' fill='none' stroke='#38bdf8' stroke-width='1.5' stroke-dasharray='3,3'/><text x='50.0' y='27.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5 €</text></g></g><g transform='translate(156.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2 €</text></g></g><g transform='translate(228.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10 ct</text></g></g></svg>"
            }
        ],
        "schwer": [
            {
                "id": "grk2l1_s1",
                "category": "kurs_groessen_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "wechselgeld",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie viel Wechselgeld gibt es zurück?",
                "answers": [
                    "1,50 €",
                    "2,50 €",
                    "50 ct",
                    "2 €"
                ],
                "correct": 0,
                "explanation": "5 € − 3,50 € = 1,50 €.",
                "grafik": "<svg viewBox='0 0 360 162' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(115.0,10)'><g><rect x='6' y='6' width='118' height='48' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='22' cy='30.0' r='3.5' fill='#1e293b' stroke='#f59e0b' stroke-width='1.5'/><text x='73.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='18' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>3,50 €</text></g></g><text x='180.0' y='88' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>bezahlt mit:</text><g transform='translate(127.0,98.0)'><g><rect x='0' y='0' width='92.0' height='48.0' rx='9' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='6' y='6' width='80.0' height='36.0' rx='5' fill='none' stroke='#38bdf8' stroke-width='1.5' stroke-dasharray='3,3'/><text x='46.0' y='25.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5 €</text></g></g></svg>"
            },
            {
                "id": "grk2l1_s2",
                "category": "kurs_groessen_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "wechselgeld",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie viel Wechselgeld gibt es zurück?",
                "answers": [
                    "2,80 €",
                    "3,80 €",
                    "1,80 €",
                    "3,30 €"
                ],
                "correct": 0,
                "explanation": "10 € − 7,20 € = 2,80 €.",
                "grafik": "<svg viewBox='0 0 360 162' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(115.0,10)'><g><rect x='6' y='6' width='118' height='48' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='22' cy='30.0' r='3.5' fill='#1e293b' stroke='#f59e0b' stroke-width='1.5'/><text x='73.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='18' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>7,20 €</text></g></g><text x='180.0' y='88' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>bezahlt mit:</text><g transform='translate(127.0,98.0)'><g><rect x='0' y='0' width='92.0' height='48.0' rx='9' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='6' y='6' width='80.0' height='36.0' rx='5' fill='none' stroke='#38bdf8' stroke-width='1.5' stroke-dasharray='3,3'/><text x='46.0' y='25.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10 €</text></g></g></svg>"
            },
            {
                "id": "grk2l1_s3",
                "category": "kurs_groessen_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "wechselgeld",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie viel Wechselgeld gibt es zurück?",
                "answers": [
                    "7,50 €",
                    "8,50 €",
                    "6,50 €",
                    "8 €"
                ],
                "correct": 0,
                "explanation": "20 € − 12,50 € = 7,50 €.",
                "grafik": "<svg viewBox='0 0 360 162' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(115.0,10)'><g><rect x='6' y='6' width='118' height='48' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='22' cy='30.0' r='3.5' fill='#1e293b' stroke='#f59e0b' stroke-width='1.5'/><text x='73.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='18' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>12,50 €</text></g></g><text x='180.0' y='88' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>bezahlt mit:</text><g transform='translate(127.0,98.0)'><g><rect x='0' y='0' width='92.0' height='48.0' rx='9' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='6' y='6' width='80.0' height='36.0' rx='5' fill='none' stroke='#38bdf8' stroke-width='1.5' stroke-dasharray='3,3'/><text x='46.0' y='25.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>20 €</text></g></g></svg>"
            },
            {
                "id": "grk2l1_s4",
                "category": "kurs_groessen_k2_l1",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "wechselgeld",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie viel Wechselgeld gibt es zurück?",
                "answers": [
                    "40 ct",
                    "1,40 €",
                    "90 ct",
                    "60 ct"
                ],
                "correct": 0,
                "explanation": "5 € − 4,60 € = 40 ct.",
                "grafik": "<svg viewBox='0 0 360 162' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(115.0,10)'><g><rect x='6' y='6' width='118' height='48' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='22' cy='30.0' r='3.5' fill='#1e293b' stroke='#f59e0b' stroke-width='1.5'/><text x='73.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='18' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>4,60 €</text></g></g><text x='180.0' y='88' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>bezahlt mit:</text><g transform='translate(127.0,98.0)'><g><rect x='0' y='0' width='92.0' height='48.0' rx='9' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='6' y='6' width='80.0' height='36.0' rx='5' fill='none' stroke='#38bdf8' stroke-width='1.5' stroke-dasharray='3,3'/><text x='46.0' y='25.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5 €</text></g></g></svg>"
            }
        ]
    },
    "test": [
        {
            "id": "grk2l1_t1",
            "category": "kurs_groessen_k2_l1",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "geld_zaehlen",
            "difficulty": "mittel",
            "points": 10,
            "question": "Wie viel Geld ist das insgesamt?",
            "answers": [
                "3,70 €",
                "4,70 €",
                "2,70 €",
                "4,20 €"
            ],
            "correct": 0,
            "explanation": "2 € + 1 € + 50 ct + 20 ct = 3,70 €.",
            "grafik": "<svg viewBox='0 0 360 88' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(44.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2 €</text></g></g><g transform='translate(116.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 €</text></g></g><g transform='translate(188.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>50 ct</text></g></g><g transform='translate(260.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>20 ct</text></g></g></svg>"
        },
        {
            "id": "grk2l1_t2",
            "category": "kurs_groessen_k2_l1",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "wechselgeld",
            "difficulty": "mittel",
            "points": 10,
            "question": "Wie viel Wechselgeld gibt es zurück?",
            "answers": [
                "1,70 €",
                "2,70 €",
                "70 ct",
                "2,20 €"
            ],
            "correct": 0,
            "explanation": "10 € − 8,30 € = 1,70 €.",
            "grafik": "<svg viewBox='0 0 360 162' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(115.0,10)'><g><rect x='6' y='6' width='118' height='48' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='22' cy='30.0' r='3.5' fill='#1e293b' stroke='#f59e0b' stroke-width='1.5'/><text x='73.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='18' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>8,30 €</text></g></g><text x='180.0' y='88' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>bezahlt mit:</text><g transform='translate(127.0,98.0)'><g><rect x='0' y='0' width='92.0' height='48.0' rx='9' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='6' y='6' width='80.0' height='36.0' rx='5' fill='none' stroke='#38bdf8' stroke-width='1.5' stroke-dasharray='3,3'/><text x='46.0' y='25.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10 €</text></g></g></svg>"
        },
        {
            "id": "grk2l1_t3",
            "category": "kurs_groessen_k2_l1",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "geld_zaehlen",
            "difficulty": "mittel",
            "points": 10,
            "question": "Paul hat 2 €, 1 € und 50 ct in seiner Spardose. Wie viel Geld hat er insgesamt?",
            "answers": [
                "3,50 €",
                "4,50 €",
                "2,50 €",
                "4 €"
            ],
            "correct": 0,
            "explanation": "2 € + 1 € + 50 ct = 3,50 €.",
            "grafik": "<svg viewBox='0 0 360 88' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(44.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2 €</text></g></g><g transform='translate(116.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 €</text></g></g><g transform='translate(188.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>50 ct</text></g></g></svg>"
        },
        {
            "id": "grk2l1_t4",
            "category": "kurs_groessen_k2_l1",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "wechselgeld",
            "difficulty": "mittel",
            "points": 10,
            "question": "Lena kauft ein Buch für 6,50 € und bezahlt mit einem 10-€-Schein. Wie viel Wechselgeld bekommt sie zurück?",
            "answers": [
                "3,50 €",
                "4,50 €",
                "2,50 €",
                "4 €"
            ],
            "correct": 0,
            "explanation": "10 € − 6,50 € = 3,50 €.",
            "grafik": "<svg viewBox='0 0 360 162' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(115.0,10)'><g><rect x='6' y='6' width='118' height='48' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='22' cy='30.0' r='3.5' fill='#1e293b' stroke='#f59e0b' stroke-width='1.5'/><text x='73.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='18' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>6,50 €</text></g></g><text x='180.0' y='88' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>bezahlt mit:</text><g transform='translate(127.0,98.0)'><g><rect x='0' y='0' width='92.0' height='48.0' rx='9' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><rect x='6' y='6' width='80.0' height='36.0' rx='5' fill='none' stroke='#38bdf8' stroke-width='1.5' stroke-dasharray='3,3'/><text x='46.0' y='25.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10 €</text></g></g></svg>"
        },
        {
            "id": "grk2l1_t5",
            "category": "kurs_groessen_k2_l1",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "geld_konzept",
            "difficulty": "mittel",
            "points": 10,
            "question": "Wie viele 50-Cent-Münzen ergeben genau 1 Euro?",
            "answers": [
                "2",
                "3",
                "4",
                "1"
            ],
            "correct": 0,
            "explanation": "50 ct + 50 ct = 100 ct = 1 €. Du brauchst also 2 Münzen.",
            "grafik": "<svg viewBox='0 0 88 88' style='width:100%;max-width:88px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(4.0,4.0)'><g><circle cx='40.0' cy='40.0' r='40.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='40.0' cy='40.0' r='33.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='40.0' y='41.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>50 ct</text></g></g></svg>"
        },
        {
            "id": "grk2l1_t6",
            "category": "kurs_groessen_k2_l1",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "geld_konzept",
            "difficulty": "mittel",
            "points": 10,
            "question": "Hier liegen vier Münzen: 1 €, 50 ct, 20 ct und 10 ct. Welche hat den kleinsten Wert?",
            "answers": [
                "10 ct",
                "50 ct",
                "20 ct",
                "1 €"
            ],
            "correct": 0,
            "explanation": "10 ct ist von den vier gezeigten Münzen der kleinste Wert.",
            "grafik": "<svg viewBox='0 0 360 88' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g transform='translate(44.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 €</text></g></g><g transform='translate(116.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>50 ct</text></g></g><g transform='translate(188.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>20 ct</text></g></g><g transform='translate(260.0,44.0)'><g><circle cx='30.0' cy='30.0' r='30.0' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><circle cx='30.0' cy='30.0' r='23.0' fill='none' stroke='#f59e0b' stroke-width='1.5' stroke-dasharray='2,3'/><text x='30.0' y='31.0' text-anchor='middle' dominant-baseline='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10 ct</text></g></g></svg>"
        }
    ],
    "bestehenAb": 0.8
}, {
    "id": "groessen_k2_l2",
    "kurs": "groessen_k2",
    "order": 2,
    "icon": "📏",
    "title": "Längen & Gewichte",
    "kurz": "Mit Lineal messen, Längen und Gewichte vergleichen, m/cm und kg/g umrechnen",
    "erklaerung": {
        "intro": "Längen misst du mit einem <b>Lineal</b> in Zentimetern (cm) oder Metern (m): 1 m = 100 cm. Gewichte misst du in Gramm (g) oder Kilogramm (kg): 1 kg = 1000 g. Beim Ablesen am Lineal beginnst du immer bei der 0 und zählst die Striche bis zum Ende des Gegenstands.",
        "beispiele": [
            "Ein Balken reicht bis zum Strich bei 7 cm → er ist 7 cm lang.<svg viewBox='0 0 380 78' style='width:100%;max-width:380px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='26.0' y='16' width='233.8' height='14' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><rect x='22.0' y='50' width='342.0' height='22' rx='3' fill='#1e293b' stroke='#94a3b8' stroke-width='2'/><line x1='26.0' y1='54' x2='26.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='26.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>0</text><line x1='59.4' y1='62' x2='59.4' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='92.8' y1='62' x2='92.8' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='126.2' y1='62' x2='126.2' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='159.6' y1='62' x2='159.6' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='193.0' y1='54' x2='193.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='193.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5</text><line x1='226.4' y1='62' x2='226.4' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='259.8' y1='62' x2='259.8' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='293.2' y1='62' x2='293.2' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='326.6' y1='62' x2='326.6' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='360.0' y1='54' x2='360.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='360.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10</text><text x='372.0' y='68' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>",
            "1 m = 100 cm, also sind 2 m genauso lang wie 200 cm.<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2 m</text></svg>",
            "500 g sind leichter als 1 kg (= 1000 g).<svg viewBox='-25 0 350 150' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='150.0' y1='20' x2='150.0' y2='46.0' stroke='#94a3b8' stroke-width='4'/><line x1='40' y1='46.0' x2='260' y2='46.0' stroke='#e5e7eb' stroke-width='5' stroke-linecap='round'/><circle cx='150.0' cy='20' r='6' fill='#e5e7eb'/><line x1='40' y1='46.0' x2='40' y2='90' stroke='#94a3b8' stroke-width='3'/><line x1='260' y1='46.0' x2='260' y2='90' stroke='#94a3b8' stroke-width='3'/><path d='M15,90 L65,90 L52,112 A20,10 0 0 1 28,112 Z' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><path d='M235,90 L285,90 L272,112 A20,10 0 0 1 248,112 Z' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='40' y='105' text-anchor='middle' font-size='18' font-family='sans-serif'>📦</text><text x='260' y='105' text-anchor='middle' font-size='18' font-family='sans-serif'>🧸</text><text x='40' y='134' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>500 g</text><text x='260' y='134' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 kg</text><rect x='142.0' y='20' width='16' height='38' fill='#94a3b8'/></svg>"
        ]
    },
    "uebung": {
        "leicht": [
            {
                "id": "grk2l2_l1",
                "category": "kurs_groessen_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "laenge_lineal",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie lang ist der Gegenstand? (Er beginnt bei 0.)",
                "answers": [
                    "4 cm",
                    "5 cm",
                    "3 cm",
                    "6 cm"
                ],
                "correct": 0,
                "explanation": "Der Balken reicht bis zum Strich bei 4 cm.",
                "grafik": "<svg viewBox='0 0 380 78' style='width:100%;max-width:380px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='26.0' y='16' width='133.6' height='14' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><rect x='22.0' y='50' width='342.0' height='22' rx='3' fill='#1e293b' stroke='#94a3b8' stroke-width='2'/><line x1='26.0' y1='54' x2='26.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='26.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>0</text><line x1='59.4' y1='62' x2='59.4' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='92.8' y1='62' x2='92.8' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='126.2' y1='62' x2='126.2' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='159.6' y1='62' x2='159.6' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='193.0' y1='54' x2='193.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='193.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5</text><line x1='226.4' y1='62' x2='226.4' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='259.8' y1='62' x2='259.8' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='293.2' y1='62' x2='293.2' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='326.6' y1='62' x2='326.6' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='360.0' y1='54' x2='360.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='360.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10</text><text x='372.0' y='68' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
            },
            {
                "id": "grk2l2_l2",
                "category": "kurs_groessen_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "laenge_lineal",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie lang ist der Gegenstand? (Er beginnt bei 0.)",
                "answers": [
                    "8 cm",
                    "9 cm",
                    "7 cm",
                    "10 cm"
                ],
                "correct": 0,
                "explanation": "Der Balken reicht bis zum Strich bei 8 cm.",
                "grafik": "<svg viewBox='0 0 380 78' style='width:100%;max-width:380px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='26.0' y='16' width='267.2' height='14' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><rect x='22.0' y='50' width='342.0' height='22' rx='3' fill='#1e293b' stroke='#94a3b8' stroke-width='2'/><line x1='26.0' y1='54' x2='26.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='26.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>0</text><line x1='59.4' y1='62' x2='59.4' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='92.8' y1='62' x2='92.8' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='126.2' y1='62' x2='126.2' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='159.6' y1='62' x2='159.6' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='193.0' y1='54' x2='193.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='193.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5</text><line x1='226.4' y1='62' x2='226.4' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='259.8' y1='62' x2='259.8' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='293.2' y1='62' x2='293.2' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='326.6' y1='62' x2='326.6' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='360.0' y1='54' x2='360.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='360.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10</text><text x='372.0' y='68' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
            },
            {
                "id": "grk2l2_l3",
                "category": "kurs_groessen_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "laenge_vergleich",
                "difficulty": "leicht",
                "points": 10,
                "question": "Was ist länger?",
                "answers": [
                    "3 m",
                    "150 cm",
                    "gleich lang",
                    "nicht klar"
                ],
                "correct": 0,
                "explanation": "3 m sind 300 cm, 150 cm sind 150 cm. 3 m ist länger.",
                "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='128' height='60' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='74' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>📏</text><text x='74' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>3 m</text><rect x='162' y='10' width='128' height='60' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><text x='226' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>📏</text><text x='226' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>150 cm</text></svg>"
            },
            {
                "id": "grk2l2_l4",
                "category": "kurs_groessen_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "gewicht_vergleich",
                "difficulty": "leicht",
                "points": 10,
                "question": "Was ist schwerer?",
                "answers": [
                    "1 kg",
                    "500 g",
                    "gleich schwer",
                    "nicht klar"
                ],
                "correct": 0,
                "explanation": "500 g sind 500 g, 1 kg sind 1000 g. 1 kg ist schwerer.",
                "grafik": "<svg viewBox='-25 0 350 150' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='150.0' y1='20' x2='150.0' y2='46.0' stroke='#94a3b8' stroke-width='4'/><line x1='40' y1='46.0' x2='260' y2='46.0' stroke='#e5e7eb' stroke-width='5' stroke-linecap='round'/><circle cx='150.0' cy='20' r='6' fill='#e5e7eb'/><line x1='40' y1='46.0' x2='40' y2='90' stroke='#94a3b8' stroke-width='3'/><line x1='260' y1='46.0' x2='260' y2='90' stroke='#94a3b8' stroke-width='3'/><path d='M15,90 L65,90 L52,112 A20,10 0 0 1 28,112 Z' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><path d='M235,90 L285,90 L272,112 A20,10 0 0 1 248,112 Z' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='40' y='105' text-anchor='middle' font-size='18' font-family='sans-serif'>📦</text><text x='260' y='105' text-anchor='middle' font-size='18' font-family='sans-serif'>🧸</text><text x='40' y='134' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>500 g</text><text x='260' y='134' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 kg</text><rect x='142.0' y='20' width='16' height='38' fill='#94a3b8'/></svg>"
            }
        ],
        "mittel": [
            {
                "id": "grk2l2_m1",
                "category": "kurs_groessen_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "laenge_lineal",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie lang ist der Gegenstand? (Er beginnt bei 0.)",
                "answers": [
                    "11 cm",
                    "12 cm",
                    "10 cm",
                    "13 cm"
                ],
                "correct": 0,
                "explanation": "Der Balken reicht bis zum Strich bei 11 cm.",
                "grafik": "<svg viewBox='0 0 380 78' style='width:100%;max-width:380px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='26.0' y='16' width='244.9' height='14' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><rect x='22.0' y='50' width='342.0' height='22' rx='3' fill='#1e293b' stroke='#94a3b8' stroke-width='2'/><line x1='26.0' y1='54' x2='26.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='26.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>0</text><line x1='48.3' y1='62' x2='48.3' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='70.5' y1='62' x2='70.5' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='92.8' y1='62' x2='92.8' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='115.1' y1='62' x2='115.1' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='137.3' y1='54' x2='137.3' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='137.3' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5</text><line x1='159.6' y1='62' x2='159.6' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='181.9' y1='62' x2='181.9' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='204.1' y1='62' x2='204.1' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='226.4' y1='62' x2='226.4' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='248.7' y1='54' x2='248.7' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='248.7' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10</text><line x1='270.9' y1='62' x2='270.9' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='293.2' y1='62' x2='293.2' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='315.5' y1='62' x2='315.5' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='337.7' y1='62' x2='337.7' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='360.0' y1='54' x2='360.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='360.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>15</text><text x='372.0' y='68' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
            },
            {
                "id": "grk2l2_m2",
                "category": "kurs_groessen_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "einheiten_umrechnen",
                "difficulty": "mittel",
                "points": 10,
                "question": "2 m sind wie viele cm?",
                "answers": [
                    "200 cm",
                    "300 cm",
                    "100 cm",
                    "210 cm"
                ],
                "correct": 0,
                "explanation": "1 m = 100 cm, also 2 m = 2 × 100 cm = 200 cm.",
                "grafik": "<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2 m</text></svg>"
            },
            {
                "id": "grk2l2_m3",
                "category": "kurs_groessen_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "einheiten_umrechnen",
                "difficulty": "mittel",
                "points": 10,
                "question": "3 kg sind wie viele g?",
                "answers": [
                    "3000 g",
                    "4000 g",
                    "2000 g",
                    "3100 g"
                ],
                "correct": 0,
                "explanation": "1 kg = 1000 g, also 3 kg = 3 × 1000 g = 3000 g.",
                "grafik": "<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>3 kg</text></svg>"
            },
            {
                "id": "grk2l2_m4",
                "category": "kurs_groessen_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "laenge_vergleich",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ist länger?",
                "answers": [
                    "450 cm",
                    "4 m",
                    "gleich lang",
                    "nicht klar"
                ],
                "correct": 0,
                "explanation": "450 cm sind 450 cm, 4 m sind 400 cm. 450 cm ist länger.",
                "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='128' height='60' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='74' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>📏</text><text x='74' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>450 cm</text><rect x='162' y='10' width='128' height='60' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><text x='226' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>📏</text><text x='226' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>4 m</text></svg>"
            }
        ],
        "schwer": [
            {
                "id": "grk2l2_s1",
                "category": "kurs_groessen_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "laenge_lineal",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie lang ist der Gegenstand? (Er beginnt bei 0.)",
                "answers": [
                    "13 cm",
                    "14 cm",
                    "12 cm",
                    "15 cm"
                ],
                "correct": 0,
                "explanation": "Der Balken reicht bis zum Strich bei 13 cm.",
                "grafik": "<svg viewBox='0 0 380 78' style='width:100%;max-width:380px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='26.0' y='16' width='217.1' height='14' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><rect x='22.0' y='50' width='342.0' height='22' rx='3' fill='#1e293b' stroke='#94a3b8' stroke-width='2'/><line x1='26.0' y1='54' x2='26.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='26.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>0</text><line x1='42.7' y1='62' x2='42.7' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='59.4' y1='62' x2='59.4' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='76.1' y1='62' x2='76.1' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='92.8' y1='62' x2='92.8' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='109.5' y1='54' x2='109.5' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='109.5' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5</text><line x1='126.2' y1='62' x2='126.2' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='142.9' y1='62' x2='142.9' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='159.6' y1='62' x2='159.6' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='176.3' y1='62' x2='176.3' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='193.0' y1='54' x2='193.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='193.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10</text><line x1='209.7' y1='62' x2='209.7' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='226.4' y1='62' x2='226.4' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='243.1' y1='62' x2='243.1' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='259.8' y1='62' x2='259.8' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='276.5' y1='54' x2='276.5' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='276.5' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>15</text><line x1='293.2' y1='62' x2='293.2' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='309.9' y1='62' x2='309.9' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='326.6' y1='62' x2='326.6' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='343.3' y1='62' x2='343.3' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='360.0' y1='54' x2='360.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='360.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>20</text><text x='372.0' y='68' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
            },
            {
                "id": "grk2l2_s2",
                "category": "kurs_groessen_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "einheiten_umrechnen",
                "difficulty": "schwer",
                "points": 10,
                "question": "2 km sind wie viele m?",
                "answers": [
                    "2000 m",
                    "3000 m",
                    "1000 m",
                    "2100 m"
                ],
                "correct": 0,
                "explanation": "1 km = 1000 m, also 2 km = 2 × 1000 m = 2000 m.",
                "grafik": "<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2 km</text></svg>"
            },
            {
                "id": "grk2l2_s3",
                "category": "kurs_groessen_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "gewicht_vergleich",
                "difficulty": "schwer",
                "points": 10,
                "question": "Was ist schwerer?",
                "answers": [
                    "1200 g",
                    "1 kg",
                    "gleich schwer",
                    "nicht klar"
                ],
                "correct": 0,
                "explanation": "1200 g sind 1200 g, 1 kg sind 1000 g. 1200 g ist schwerer.",
                "grafik": "<svg viewBox='-25 0 350 150' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='150.0' y1='20' x2='150.0' y2='46.0' stroke='#94a3b8' stroke-width='4'/><line x1='40' y1='46.0' x2='260' y2='46.0' stroke='#e5e7eb' stroke-width='5' stroke-linecap='round'/><circle cx='150.0' cy='20' r='6' fill='#e5e7eb'/><line x1='40' y1='46.0' x2='40' y2='90' stroke='#94a3b8' stroke-width='3'/><line x1='260' y1='46.0' x2='260' y2='90' stroke='#94a3b8' stroke-width='3'/><path d='M15,90 L65,90 L52,112 A20,10 0 0 1 28,112 Z' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><path d='M235,90 L285,90 L272,112 A20,10 0 0 1 248,112 Z' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='40' y='105' text-anchor='middle' font-size='18' font-family='sans-serif'>📦</text><text x='260' y='105' text-anchor='middle' font-size='18' font-family='sans-serif'>🧸</text><text x='40' y='134' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1200 g</text><text x='260' y='134' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 kg</text><rect x='142.0' y='20' width='16' height='38' fill='#94a3b8'/></svg>"
            },
            {
                "id": "grk2l2_s4",
                "category": "kurs_groessen_k2_l2",
                "area": "schule",
                "grade": 2,
                "subject": "mathe",
                "topic": "einheiten_umrechnen",
                "difficulty": "schwer",
                "points": 10,
                "question": "1500 g sind wie viele kg?",
                "answers": [
                    "1,5 kg",
                    "1,05 kg",
                    "15 kg",
                    "0,15 kg"
                ],
                "correct": 0,
                "explanation": "1000 g = 1 kg, die restlichen 500 g sind ein halbes kg: 1500 g = 1,5 kg.",
                "grafik": "<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1500 g</text></svg>"
            }
        ]
    },
    "test": [
        {
            "id": "grk2l2_t1",
            "category": "kurs_groessen_k2_l2",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "laenge_lineal",
            "difficulty": "mittel",
            "points": 10,
            "question": "Wie lang ist der Gegenstand? (Er beginnt bei 0.)",
            "answers": [
                "6 cm",
                "7 cm",
                "5 cm",
                "8 cm"
            ],
            "correct": 0,
            "explanation": "Der Balken reicht bis zum Strich bei 6 cm.",
            "grafik": "<svg viewBox='0 0 380 78' style='width:100%;max-width:380px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='26.0' y='16' width='200.4' height='14' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><rect x='22.0' y='50' width='342.0' height='22' rx='3' fill='#1e293b' stroke='#94a3b8' stroke-width='2'/><line x1='26.0' y1='54' x2='26.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='26.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>0</text><line x1='59.4' y1='62' x2='59.4' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='92.8' y1='62' x2='92.8' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='126.2' y1='62' x2='126.2' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='159.6' y1='62' x2='159.6' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='193.0' y1='54' x2='193.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='193.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5</text><line x1='226.4' y1='62' x2='226.4' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='259.8' y1='62' x2='259.8' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='293.2' y1='62' x2='293.2' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='326.6' y1='62' x2='326.6' y2='72' stroke='#94a3b8' stroke-width='1.2'/><line x1='360.0' y1='54' x2='360.0' y2='72' stroke='#e5e7eb' stroke-width='2.0'/><text x='360.0' y='46' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>10</text><text x='372.0' y='68' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
        },
        {
            "id": "grk2l2_t2",
            "category": "kurs_groessen_k2_l2",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "laenge_vergleich",
            "difficulty": "mittel",
            "points": 10,
            "question": "Was ist länger?",
            "answers": [
                "8 m",
                "700 cm",
                "gleich lang",
                "nicht klar"
            ],
            "correct": 0,
            "explanation": "700 cm sind 700 cm, 8 m sind 800 cm. 8 m ist länger.",
            "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='128' height='60' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='74' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>📏</text><text x='74' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>700 cm</text><rect x='162' y='10' width='128' height='60' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><text x='226' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>📏</text><text x='226' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>8 m</text></svg>"
        },
        {
            "id": "grk2l2_t3",
            "category": "kurs_groessen_k2_l2",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "gewicht_vergleich",
            "difficulty": "mittel",
            "points": 10,
            "question": "Was ist schwerer?",
            "answers": [
                "2 kg",
                "1800 g",
                "gleich schwer",
                "nicht klar"
            ],
            "correct": 0,
            "explanation": "2 kg sind 2000 g, 1800 g sind 1800 g. 2 kg ist schwerer.",
            "grafik": "<svg viewBox='-25 0 350 150' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='150.0' y1='20' x2='150.0' y2='46.0' stroke='#94a3b8' stroke-width='4'/><line x1='40' y1='46.0' x2='260' y2='46.0' stroke='#e5e7eb' stroke-width='5' stroke-linecap='round'/><circle cx='150.0' cy='20' r='6' fill='#e5e7eb'/><line x1='40' y1='46.0' x2='40' y2='90' stroke='#94a3b8' stroke-width='3'/><line x1='260' y1='46.0' x2='260' y2='90' stroke='#94a3b8' stroke-width='3'/><path d='M15,90 L65,90 L52,112 A20,10 0 0 1 28,112 Z' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><path d='M235,90 L285,90 L272,112 A20,10 0 0 1 248,112 Z' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='40' y='105' text-anchor='middle' font-size='18' font-family='sans-serif'>📦</text><text x='260' y='105' text-anchor='middle' font-size='18' font-family='sans-serif'>🧸</text><text x='40' y='134' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2 kg</text><text x='260' y='134' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1800 g</text><rect x='142.0' y='20' width='16' height='38' fill='#94a3b8'/></svg>"
        },
        {
            "id": "grk2l2_t4",
            "category": "kurs_groessen_k2_l2",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "einheiten_umrechnen",
            "difficulty": "mittel",
            "points": 10,
            "question": "4 m sind wie viele cm?",
            "answers": [
                "400 cm",
                "500 cm",
                "300 cm",
                "410 cm"
            ],
            "correct": 0,
            "explanation": "1 m = 100 cm, also 4 m = 4 × 100 cm = 400 cm.",
            "grafik": "<svg viewBox='0 0 160 70' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='144' height='54' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='80' y='42' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>4 m</text></svg>"
        },
        {
            "id": "grk2l2_t5",
            "category": "kurs_groessen_k2_l2",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "laenge_vergleich",
            "difficulty": "mittel",
            "points": 10,
            "question": "Was ist länger, der Stift oder der Radiergummi?",
            "answers": [
                "Stift: 9 cm",
                "Radiergummi: 4 cm",
                "gleich lang",
                "nicht klar"
            ],
            "correct": 0,
            "explanation": "Stift: 9 cm sind 9 cm, Radiergummi: 4 cm sind 4 cm. Stift: 9 cm ist länger.",
            "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='128' height='60' rx='10' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='3'/><text x='74' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>📏</text><text x='74' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Stift: 9 cm</text><rect x='162' y='10' width='128' height='60' rx='10' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='3'/><text x='226' y='36' text-anchor='middle' font-size='22' font-family='sans-serif'>📏</text><text x='226' y='60' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Radiergummi: 4 cm</text></svg>"
        },
        {
            "id": "grk2l2_t6",
            "category": "kurs_groessen_k2_l2",
            "area": "schule",
            "grade": 2,
            "subject": "mathe",
            "topic": "gewicht_vergleich",
            "difficulty": "mittel",
            "points": 10,
            "question": "Was ist schwerer, die Kartoffeln oder das Mehl?",
            "answers": [
                "Kartoffeln: 5 kg",
                "Mehl: 500 g",
                "gleich schwer",
                "nicht klar"
            ],
            "correct": 0,
            "explanation": "Kartoffeln: 5 kg sind 5000 g, Mehl: 500 g sind 500 g. Kartoffeln: 5 kg ist schwerer.",
            "grafik": "<svg viewBox='-25 0 350 150' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='150.0' y1='20' x2='150.0' y2='46.0' stroke='#94a3b8' stroke-width='4'/><line x1='40' y1='46.0' x2='260' y2='46.0' stroke='#e5e7eb' stroke-width='5' stroke-linecap='round'/><circle cx='150.0' cy='20' r='6' fill='#e5e7eb'/><line x1='40' y1='46.0' x2='40' y2='90' stroke='#94a3b8' stroke-width='3'/><line x1='260' y1='46.0' x2='260' y2='90' stroke='#94a3b8' stroke-width='3'/><path d='M15,90 L65,90 L52,112 A20,10 0 0 1 28,112 Z' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><path d='M235,90 L285,90 L272,112 A20,10 0 0 1 248,112 Z' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='40' y='105' text-anchor='middle' font-size='18' font-family='sans-serif'>📦</text><text x='260' y='105' text-anchor='middle' font-size='18' font-family='sans-serif'>🧸</text><text x='40' y='134' text-anchor='middle' font-size='10' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Kartoffeln: 5 kg</text><text x='260' y='134' text-anchor='middle' font-size='10' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Mehl: 500 g</text><rect x='142.0' y='20' width='16' height='38' fill='#94a3b8'/></svg>"
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
