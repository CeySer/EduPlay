// Zeit und Kalender + Sachaufgaben - Klasse 3 Mathe
(function () {
    const extraKurse = [{"id": "zeit_kalender_k3", "title": "Zeit und Kalender", "icon": "📅", "grade": 3, "subject": "mathe", "beschreibung": "Uhr minutengenau lesen, 24-Stunden-Zeit, Zeitspannen, Kalender, Monate und Daten."}, {"id": "sachaufgaben_k3", "title": "Sachaufgaben lösen", "icon": "🧩", "grade": 3, "subject": "mathe", "beschreibung": "Wichtige Angaben finden, passend rechnen, Antwortsätze, Tabellen, Skizzen und Überschlag."}];
    const extraLektionen = [
    {
        "id": "uhrzeit_k3_l1",
        "kurs": "zeit_kalender_k3",
        "order": 1,
        "icon": "🕒",
        "title": "Uhrzeit und Zeitspannen",
        "kurz": "Minutengenau ablesen und Dauer berechnen",
        "erklaerung": {
            "intro": "Der lange <b>Minutenzeiger</b> zeigt die Minuten: von Strich zu Strich ist es 1 Minute, von Zahl zu Zahl 5 Minuten. Der kurze <b>Stundenzeiger</b> wandert langsam weiter – um 3:40 Uhr steht er schon fast bei der 4. Nach 12 Uhr mittags zählt man weiter: 13, 14, 15 … Uhr. So heißt 15:40 Uhr auch „20 vor 4“ am Nachmittag. Eine <b>Zeitspanne</b> rechnest du am besten mit dem <b>Zeitstrahl</b>: erst bis zur vollen Stunde, dann weiter.",
            "merksatz": "1 h = 60 min und 1 min = 60 s – springe am Zeitstrahl erst zur vollen Stunde.",
            "beispiele": [
                "Der kurze Zeiger steht kurz vor der 4, der lange genau auf der 8 (8 · 5 = 40 Minuten): 3:40 Uhr. Am Nachmittag heißt das 15:40 Uhr – also 20 vor 4.<svg viewBox='0 0 200 200' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='100' r='93' fill='#1e293b' stroke='#94a3b8' stroke-width='4'/><circle cx='100' cy='100' r='84' fill='none' stroke='#94a3b8' stroke-width='6' stroke-dasharray='1.4 7.396' stroke-dashoffset='0.7'/><circle cx='100' cy='100' r='83' fill='none' stroke='#e5e7eb' stroke-width='10' stroke-dasharray='3.4 40.059' stroke-dashoffset='1.7'/><g font-size='17' font-weight='bold' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'><text x='131.5' y='51.4'>1</text><text x='154.6' y='74.5'>2</text><text x='163' y='106'>3</text><text x='154.6' y='137.5'>4</text><text x='131.5' y='160.6'>5</text><text x='100' y='169'>6</text><text x='68.5' y='160.6'>7</text><text x='45.4' y='137.5'>8</text><text x='37' y='106'>9</text><text x='45.4' y='74.5'>10</text><text x='68.5' y='51.4'>11</text><text x='100' y='43'>12</text></g><line x1='100' y1='100' x2='141.3' y2='115' stroke='#f59e0b' stroke-width='8' stroke-linecap='round'/><line x1='100' y1='100' x2='35.9' y2='137' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#e5e7eb'/></svg>",
                "Schulbeginn 8:00 Uhr, Pause 9:35 Uhr. Am Zeitstrahl: 8:00 → 9:00 sind 60 min, 9:00 → 9:35 sind 35 min. Zusammen 95 min = 1 h 35 min.<svg viewBox='0 0 340 114' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='80' x2='326' y2='80' stroke='#94a3b8' stroke-width='3'/><line x1='30' y1='72' x2='30' y2='88' stroke='#e5e7eb' stroke-width='3'/><text x='30' y='106' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>8:00</text><line x1='210' y1='72' x2='210' y2='88' stroke='#e5e7eb' stroke-width='3'/><text x='210' y='106' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>9:00</text><line x1='310' y1='72' x2='310' y2='88' stroke='#e5e7eb' stroke-width='3'/><text x='310' y='106' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>9:35</text><path d='M30 70 Q120 22 210 70' fill='none' stroke='#10b981' stroke-width='3'/><path d='M204.1 61.9 L210 70 L200 69.6' fill='none' stroke='#10b981' stroke-width='3' stroke-linejoin='round'/><text x='120' y='38' font-size='15' fill='#10b981' text-anchor='middle' font-weight='bold' font-family='sans-serif'>60 min</text><path d='M210 70 Q260 22 310 70' fill='none' stroke='#10b981' stroke-width='3'/><path d='M306.5 60.6 L310 70 L300.5 66.9' fill='none' stroke='#10b981' stroke-width='3' stroke-linejoin='round'/><text x='260' y='38' font-size='15' fill='#10b981' text-anchor='middle' font-weight='bold' font-family='sans-serif'>35 min</text></svg>",
                "Umrechnen: 1 h 20 min = 60 min + 20 min = 80 min. Und 2 min = 60 s + 60 s = 120 s."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "uhrzeitk3l1u_leicht_1",
                    "category": "kurs_uhrzeit_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie spät ist es?",
                    "answers": [
                        "7:23 Uhr",
                        "4:36 Uhr",
                        "7:28 Uhr",
                        "8:23 Uhr"
                    ],
                    "correct": 0,
                    "explanation": "Der kurze Zeiger ist knapp nach der 7, also 7 Uhr. Der lange Zeiger steht 3 Striche nach der 4: 20 + 3 = 23 Minuten.",
                    "grafik": "<svg viewBox='0 0 200 200' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='100' r='93' fill='#1e293b' stroke='#94a3b8' stroke-width='4'/><circle cx='100' cy='100' r='84' fill='none' stroke='#94a3b8' stroke-width='6' stroke-dasharray='1.4 7.396' stroke-dashoffset='0.7'/><circle cx='100' cy='100' r='83' fill='none' stroke='#e5e7eb' stroke-width='10' stroke-dasharray='3.4 40.059' stroke-dashoffset='1.7'/><g font-size='17' font-weight='bold' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'><text x='131.5' y='51.4'>1</text><text x='154.6' y='74.5'>2</text><text x='163' y='106'>3</text><text x='154.6' y='137.5'>4</text><text x='131.5' y='160.6'>5</text><text x='100' y='169'>6</text><text x='68.5' y='160.6'>7</text><text x='45.4' y='137.5'>8</text><text x='37' y='106'>9</text><text x='45.4' y='74.5'>10</text><text x='68.5' y='51.4'>11</text><text x='100' y='43'>12</text></g><line x1='100' y1='100' x2='70.8' y2='133' stroke='#f59e0b' stroke-width='8' stroke-linecap='round'/><line x1='100' y1='100' x2='149.5' y2='155' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#e5e7eb'/></svg>"
                },
                {
                    "id": "uhrzeitk3l1u_leicht_2",
                    "category": "kurs_uhrzeit_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "1 Minute hat wie viele Sekunden?",
                    "answers": [
                        "60 Sekunden",
                        "100 Sekunden",
                        "10 Sekunden",
                        "30 Sekunden"
                    ],
                    "correct": 0,
                    "explanation": "1 Minute hat 60 Sekunden – genau wie 1 Stunde 60 Minuten hat."
                },
                {
                    "id": "uhrzeitk3l1u_leicht_3",
                    "category": "kurs_uhrzeit_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "15:40 Uhr – wie sagst du das noch?",
                    "answers": [
                        "20 vor 4",
                        "20 nach 3",
                        "20 vor 6",
                        "20 vor 3"
                    ],
                    "correct": 0,
                    "explanation": "15 Uhr ist 3 Uhr nachmittags. 40 Minuten nach 3 sind 20 Minuten vor 4."
                },
                {
                    "id": "uhrzeitk3l1u_leicht_4",
                    "category": "kurs_uhrzeit_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele Minuten nach der vollen Stunde zeigt der lange Zeiger?",
                    "answers": [
                        "47 Minuten",
                        "11 Minuten",
                        "45 Minuten",
                        "92 Minuten"
                    ],
                    "correct": 0,
                    "explanation": "Bei der 9 sind es 9 · 5 = 45 Minuten. Dazu noch 2 Striche: 45 + 2 = 47 Minuten.",
                    "grafik": "<svg viewBox='0 0 200 200' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='100' r='93' fill='#1e293b' stroke='#94a3b8' stroke-width='4'/><circle cx='100' cy='100' r='84' fill='none' stroke='#94a3b8' stroke-width='6' stroke-dasharray='1.4 7.396' stroke-dashoffset='0.7'/><circle cx='100' cy='100' r='83' fill='none' stroke='#e5e7eb' stroke-width='10' stroke-dasharray='3.4 40.059' stroke-dashoffset='1.7'/><g font-size='17' font-weight='bold' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'><text x='131.5' y='51.4'>1</text><text x='154.6' y='74.5'>2</text><text x='163' y='106'>3</text><text x='154.6' y='137.5'>4</text><text x='131.5' y='160.6'>5</text><text x='100' y='169'>6</text><text x='68.5' y='160.6'>7</text><text x='45.4' y='137.5'>8</text><text x='37' y='106'>9</text><text x='45.4' y='74.5'>10</text><text x='68.5' y='51.4'>11</text><text x='100' y='43'>12</text></g><line x1='100' y1='100' x2='143.7' y2='95' stroke='#f59e0b' stroke-width='8' stroke-linecap='round'/><line x1='100' y1='100' x2='27.6' y2='84.6' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#e5e7eb'/></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "uhrzeitk3l1u_mittel_1",
                    "category": "kurs_uhrzeit_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie spät ist es?",
                    "answers": [
                        "3:52 Uhr",
                        "4:52 Uhr",
                        "10:19 Uhr",
                        "3:42 Uhr"
                    ],
                    "correct": 0,
                    "explanation": "Der kurze Zeiger ist fast bei der 4, aber noch nicht da – also 3 Uhr. Der lange steht 2 Striche nach der 10: 50 + 2 = 52.",
                    "grafik": "<svg viewBox='0 0 200 200' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='100' r='93' fill='#1e293b' stroke='#94a3b8' stroke-width='4'/><circle cx='100' cy='100' r='84' fill='none' stroke='#94a3b8' stroke-width='6' stroke-dasharray='1.4 7.396' stroke-dashoffset='0.7'/><circle cx='100' cy='100' r='83' fill='none' stroke='#e5e7eb' stroke-width='10' stroke-dasharray='3.4 40.059' stroke-dashoffset='1.7'/><g font-size='17' font-weight='bold' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'><text x='131.5' y='51.4'>1</text><text x='154.6' y='74.5'>2</text><text x='163' y='106'>3</text><text x='154.6' y='137.5'>4</text><text x='131.5' y='160.6'>5</text><text x='100' y='169'>6</text><text x='68.5' y='160.6'>7</text><text x='45.4' y='137.5'>8</text><text x='37' y='106'>9</text><text x='45.4' y='74.5'>10</text><text x='68.5' y='51.4'>11</text><text x='100' y='43'>12</text></g><line x1='100' y1='100' x2='139.5' y2='119.3' stroke='#f59e0b' stroke-width='8' stroke-linecap='round'/><line x1='100' y1='100' x2='45' y2='50.5' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#e5e7eb'/></svg>"
                },
                {
                    "id": "uhrzeitk3l1u_mittel_2",
                    "category": "kurs_uhrzeit_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Schule beginnt um 8:00 Uhr, Pause ist um 9:35 Uhr. Wie viele Minuten sind das?",
                    "answers": [
                        "95 min",
                        "135 min",
                        "35 min",
                        "105 min"
                    ],
                    "correct": 0,
                    "explanation": "Von 8:00 bis 9:00 sind 60 min, von 9:00 bis 9:35 sind 35 min. 60 + 35 = 95 min.",
                    "grafik": "<svg viewBox='0 0 340 114' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='80' x2='326' y2='80' stroke='#94a3b8' stroke-width='3'/><line x1='30' y1='72' x2='30' y2='88' stroke='#e5e7eb' stroke-width='3'/><text x='30' y='106' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>8:00</text><line x1='210' y1='72' x2='210' y2='88' stroke='#e5e7eb' stroke-width='3'/><text x='210' y='106' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>9:00</text><line x1='310' y1='72' x2='310' y2='88' stroke='#e5e7eb' stroke-width='3'/><text x='310' y='106' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>9:35</text><path d='M30 70 Q170 22 310 70' fill='none' stroke='#f59e0b' stroke-width='3'/><path d='M302.9 63 L310 70 L300.1 71.2' fill='none' stroke='#f59e0b' stroke-width='3' stroke-linejoin='round'/><text x='170' y='38' font-size='15' fill='#f59e0b' text-anchor='middle' font-weight='bold' font-family='sans-serif'>?</text></svg>"
                },
                {
                    "id": "uhrzeitk3l1u_mittel_3",
                    "category": "kurs_uhrzeit_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "1 h 20 min sind wie viele Minuten?",
                    "answers": [
                        "80 min",
                        "120 min",
                        "70 min",
                        "60 min"
                    ],
                    "correct": 0,
                    "explanation": "1 h = 60 min. 60 min + 20 min = 80 min."
                },
                {
                    "id": "uhrzeitk3l1u_mittel_4",
                    "category": "kurs_uhrzeit_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ben geht um 14:35 Uhr los und ist um 15:10 Uhr da. Wie lange ist er unterwegs?",
                    "answers": [
                        "35 min",
                        "75 min",
                        "25 min",
                        "45 min"
                    ],
                    "correct": 0,
                    "explanation": "Von 14:35 bis 15:00 sind 25 min, von 15:00 bis 15:10 sind 10 min. 25 + 10 = 35 min.",
                    "grafik": "<svg viewBox='0 0 340 114' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='80' x2='326' y2='80' stroke='#94a3b8' stroke-width='3'/><line x1='30' y1='72' x2='30' y2='88' stroke='#e5e7eb' stroke-width='3'/><text x='30' y='106' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>14:35</text><line x1='220' y1='72' x2='220' y2='88' stroke='#e5e7eb' stroke-width='3'/><text x='220' y='106' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>15:00</text><line x1='310' y1='72' x2='310' y2='88' stroke='#e5e7eb' stroke-width='3'/><text x='310' y='106' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>15:10</text><path d='M30 70 Q170 22 310 70' fill='none' stroke='#f59e0b' stroke-width='3'/><path d='M302.9 63 L310 70 L300.1 71.2' fill='none' stroke='#f59e0b' stroke-width='3' stroke-linejoin='round'/><text x='170' y='38' font-size='15' fill='#f59e0b' text-anchor='middle' font-weight='bold' font-family='sans-serif'>?</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "uhrzeitk3l1u_schwer_1",
                    "category": "kurs_uhrzeit_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Mia übt Klavier von 16:45 Uhr bis 18:05 Uhr. Wie lange übt sie?",
                    "answers": [
                        "1 h 20 min",
                        "1 h 60 min",
                        "2 h 20 min",
                        "1 h 40 min"
                    ],
                    "correct": 0,
                    "explanation": "16:45 bis 17:00 sind 15 min, 17:00 bis 18:00 ist 1 h, 18:00 bis 18:05 sind 5 min. Zusammen 1 h 20 min."
                },
                {
                    "id": "uhrzeitk3l1u_schwer_2",
                    "category": "kurs_uhrzeit_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Es ist Nachmittag. Wie schreibst du die Uhrzeit mit 24 Stunden?",
                    "answers": [
                        "17:25 Uhr",
                        "15:25 Uhr",
                        "5:25 Uhr",
                        "17:05 Uhr"
                    ],
                    "correct": 0,
                    "explanation": "Die Uhr zeigt 5:25. Am Nachmittag rechnest du 5 + 12 = 17, also 17:25 Uhr.",
                    "grafik": "<svg viewBox='0 0 200 200' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='100' r='93' fill='#1e293b' stroke='#94a3b8' stroke-width='4'/><circle cx='100' cy='100' r='84' fill='none' stroke='#94a3b8' stroke-width='6' stroke-dasharray='1.4 7.396' stroke-dashoffset='0.7'/><circle cx='100' cy='100' r='83' fill='none' stroke='#e5e7eb' stroke-width='10' stroke-dasharray='3.4 40.059' stroke-dashoffset='1.7'/><g font-size='17' font-weight='bold' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'><text x='131.5' y='51.4'>1</text><text x='154.6' y='74.5'>2</text><text x='163' y='106'>3</text><text x='154.6' y='137.5'>4</text><text x='131.5' y='160.6'>5</text><text x='100' y='169'>6</text><text x='68.5' y='160.6'>7</text><text x='45.4' y='137.5'>8</text><text x='37' y='106'>9</text><text x='45.4' y='74.5'>10</text><text x='68.5' y='51.4'>11</text><text x='100' y='43'>12</text></g><line x1='100' y1='100' x2='113.2' y2='142' stroke='#f59e0b' stroke-width='8' stroke-linecap='round'/><line x1='100' y1='100' x2='137' y2='164.1' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#e5e7eb'/></svg>"
                },
                {
                    "id": "uhrzeitk3l1u_schwer_3",
                    "category": "kurs_uhrzeit_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Sekunden sind 3 Minuten?",
                    "answers": [
                        "180 Sekunden",
                        "300 Sekunden",
                        "63 Sekunden",
                        "120 Sekunden"
                    ],
                    "correct": 0,
                    "explanation": "1 min = 60 s. 3 · 60 s = 180 s."
                },
                {
                    "id": "uhrzeitk3l1u_schwer_4",
                    "category": "kurs_uhrzeit_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Die Fahrt zur Oma dauert 95 min. Abfahrt ist um 10:50 Uhr. Wann seid ihr da?",
                    "answers": [
                        "12:25 Uhr",
                        "11:25 Uhr",
                        "12:35 Uhr",
                        "13:25 Uhr"
                    ],
                    "correct": 0,
                    "explanation": "95 min = 1 h 35 min. 10:50 + 1 h = 11:50. Dann 10 min bis 12:00 und noch 25 min: 12:25 Uhr."
                }
            ]
        },
        "test": [
            {
                "id": "uhrzeitk3l1_test_1",
                "category": "kurs_uhrzeit_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie spät ist es?",
                "answers": [
                    "11:38 Uhr",
                    "12:38 Uhr",
                    "7:58 Uhr",
                    "11:43 Uhr"
                ],
                "correct": 0,
                "explanation": "Der kurze Zeiger ist zwischen 11 und 12, also 11 Uhr. Der lange steht 3 Striche nach der 7: 35 + 3 = 38.",
                "grafik": "<svg viewBox='0 0 200 200' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='100' r='93' fill='#1e293b' stroke='#94a3b8' stroke-width='4'/><circle cx='100' cy='100' r='84' fill='none' stroke='#94a3b8' stroke-width='6' stroke-dasharray='1.4 7.396' stroke-dashoffset='0.7'/><circle cx='100' cy='100' r='83' fill='none' stroke='#e5e7eb' stroke-width='10' stroke-dasharray='3.4 40.059' stroke-dashoffset='1.7'/><g font-size='17' font-weight='bold' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'><text x='131.5' y='51.4'>1</text><text x='154.6' y='74.5'>2</text><text x='163' y='106'>3</text><text x='154.6' y='137.5'>4</text><text x='131.5' y='160.6'>5</text><text x='100' y='169'>6</text><text x='68.5' y='160.6'>7</text><text x='45.4' y='137.5'>8</text><text x='37' y='106'>9</text><text x='45.4' y='74.5'>10</text><text x='68.5' y='51.4'>11</text><text x='100' y='43'>12</text></g><line x1='100' y1='100' x2='91.6' y2='56.8' stroke='#f59e0b' stroke-width='8' stroke-linecap='round'/><line x1='100' y1='100' x2='45' y2='149.5' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#e5e7eb'/></svg>"
            },
            {
                "id": "uhrzeitk3l1_test_2",
                "category": "kurs_uhrzeit_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Lea trainiert von 9:40 Uhr bis 10:15 Uhr. Wie lange dauert das?",
                "answers": [
                    "35 min",
                    "75 min",
                    "25 min",
                    "45 min"
                ],
                "correct": 0,
                "explanation": "9:40 bis 10:00 sind 20 min, 10:00 bis 10:15 sind 15 min. 20 + 15 = 35 min.",
                "grafik": "<svg viewBox='0 0 340 114' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='80' x2='326' y2='80' stroke='#94a3b8' stroke-width='3'/><line x1='30' y1='72' x2='30' y2='88' stroke='#e5e7eb' stroke-width='3'/><text x='30' y='106' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>9:40</text><line x1='190' y1='72' x2='190' y2='88' stroke='#e5e7eb' stroke-width='3'/><text x='190' y='106' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>10:00</text><line x1='310' y1='72' x2='310' y2='88' stroke='#e5e7eb' stroke-width='3'/><text x='310' y='106' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>10:15</text><path d='M30 70 Q170 22 310 70' fill='none' stroke='#f59e0b' stroke-width='3'/><path d='M302.9 63 L310 70 L300.1 71.2' fill='none' stroke='#f59e0b' stroke-width='3' stroke-linejoin='round'/><text x='170' y='38' font-size='15' fill='#f59e0b' text-anchor='middle' font-weight='bold' font-family='sans-serif'>?</text></svg>"
            },
            {
                "id": "uhrzeitk3l1_test_3",
                "category": "kurs_uhrzeit_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Minuten sind 2 Stunden?",
                "answers": [
                    "120 min",
                    "200 min",
                    "100 min",
                    "60 min"
                ],
                "correct": 0,
                "explanation": "1 h = 60 min, also 2 h = 60 min + 60 min = 120 min."
            },
            {
                "id": "uhrzeitk3l1_test_4",
                "category": "kurs_uhrzeit_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Es ist 20:10 Uhr am Abend. Wie sagst du das noch?",
                "answers": [
                    "10 nach 8",
                    "10 vor 8",
                    "10 nach 10",
                    "20 nach 10"
                ],
                "correct": 0,
                "explanation": "20 Uhr ist 8 Uhr abends (20 − 12 = 8). 10 Minuten danach: 10 nach 8."
            },
            {
                "id": "uhrzeitk3l1_test_5",
                "category": "kurs_uhrzeit_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie spät ist es?",
                "answers": [
                    "6:14 Uhr",
                    "2:31 Uhr",
                    "6:16 Uhr",
                    "5:14 Uhr"
                ],
                "correct": 0,
                "explanation": "Der kurze Zeiger ist gerade über die 6 hinaus: 6 Uhr. Der lange steht 4 Striche nach der 2: 10 + 4 = 14.",
                "grafik": "<svg viewBox='0 0 200 200' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='100' r='93' fill='#1e293b' stroke='#94a3b8' stroke-width='4'/><circle cx='100' cy='100' r='84' fill='none' stroke='#94a3b8' stroke-width='6' stroke-dasharray='1.4 7.396' stroke-dashoffset='0.7'/><circle cx='100' cy='100' r='83' fill='none' stroke='#e5e7eb' stroke-width='10' stroke-dasharray='3.4 40.059' stroke-dashoffset='1.7'/><g font-size='17' font-weight='bold' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'><text x='131.5' y='51.4'>1</text><text x='154.6' y='74.5'>2</text><text x='163' y='106'>3</text><text x='154.6' y='137.5'>4</text><text x='131.5' y='160.6'>5</text><text x='100' y='169'>6</text><text x='68.5' y='160.6'>7</text><text x='45.4' y='137.5'>8</text><text x='37' y='106'>9</text><text x='45.4' y='74.5'>10</text><text x='68.5' y='51.4'>11</text><text x='100' y='43'>12</text></g><line x1='100' y1='100' x2='94.6' y2='143.7' stroke='#f59e0b' stroke-width='8' stroke-linecap='round'/><line x1='100' y1='100' x2='173.6' y2='92.3' stroke='#38bdf8' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='5' fill='#e5e7eb'/></svg>"
            },
            {
                "id": "uhrzeitk3l1_test_6",
                "category": "kurs_uhrzeit_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Elif geht um 7:45 Uhr los und braucht 25 min zur Schule. Wann ist sie da?",
                "answers": [
                    "8:10 Uhr",
                    "7:10 Uhr",
                    "8:20 Uhr",
                    "8:15 Uhr"
                ],
                "correct": 0,
                "explanation": "7:45 + 15 min = 8:00. Es fehlen noch 10 min: 8:10 Uhr."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "kalender_k3_l2",
        "kurs": "zeit_kalender_k3",
        "order": 2,
        "icon": "📅",
        "title": "Tage, Wochen, Monate",
        "kurz": "Kalender lesen und Tage zählen",
        "erklaerung": {
            "intro": "Eine <b>Woche</b> hat 7 Tage, ein <b>Jahr</b> hat 12 Monate und 365 Tage. Alle 4 Jahre gibt es ein <b>Schaltjahr</b> mit 366 Tagen. Die Monate sind verschieden lang – das merkst du dir mit der <b>Knöchelregel</b>. Ein <b>Datum</b> schreibt man Tag.Monat.: 03.05. ist der 3. Mai. Willst du wissen, in wie vielen Tagen etwas ist, rechnest du späteres Datum minus heutiges.",
            "merksatz": "Knöchel = 31 Tage, Tal = 30 Tage (Februar 28) – und 7 Tage später ist wieder derselbe Wochentag.",
            "beispiele": [
                "Knöchelregel: Zähle über die Faust. Monate auf einem Knöchel haben 31 Tage, Monate in einem Tal 30 Tage – nur der Februar hat 28. Nach dem Juli geht es wieder vorne los: Juli und August haben beide 31 Tage.<svg viewBox='0 0 340 120' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M22 90 Q31 50 40 50 Q67 74 76 74 Q103 50 112 50 Q139 74 148 74 Q175 50 184 50 Q211 74 220 74 Q247 50 256 50 Q270 74 282 90 Z' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='3' stroke-linejoin='round'/><circle cx='40' cy='50' r='4' fill='#10b981'/><text x='40' y='38' font-size='12' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Jan</text><text x='40' y='112' font-size='12' fill='#94a3b8' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Aug</text><circle cx='76' cy='74' r='4' fill='#f43f5e'/><text x='76' y='62' font-size='12' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Feb</text><text x='76' y='112' font-size='12' fill='#94a3b8' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Sep</text><circle cx='112' cy='50' r='4' fill='#10b981'/><text x='112' y='38' font-size='12' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Mär</text><text x='112' y='112' font-size='12' fill='#94a3b8' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Okt</text><circle cx='148' cy='74' r='4' fill='#f43f5e'/><text x='148' y='62' font-size='12' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Apr</text><text x='148' y='112' font-size='12' fill='#94a3b8' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Nov</text><circle cx='184' cy='50' r='4' fill='#10b981'/><text x='184' y='38' font-size='12' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Mai</text><text x='184' y='112' font-size='12' fill='#94a3b8' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Dez</text><circle cx='220' cy='74' r='4' fill='#f43f5e'/><text x='220' y='62' font-size='12' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Jun</text><circle cx='256' cy='50' r='4' fill='#10b981'/><text x='256' y='38' font-size='12' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Jul</text><text x='320' y='46' font-size='13' fill='#10b981' text-anchor='middle' font-weight='bold' font-family='sans-serif'>31</text><text x='320' y='80' font-size='11' fill='#f43f5e' text-anchor='middle' font-family='sans-serif'>kürzer</text><circle cx='303' cy='42' r='4' fill='#10b981'/><circle cx='295' cy='76' r='4' fill='#f43f5e'/></svg>",
                "Heute ist der 12. Mai, ein Dienstag. Leas Geburtstag ist am 19. Mai: 19 − 12 = 7 Tage. Nach 7 Tagen ist wieder Dienstag.<svg viewBox='0 0 300 218' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='4' width='292' height='210' rx='8' fill='#1e293b' stroke='#a78bfa' stroke-width='2'/><rect x='4' y='4' width='292' height='28' rx='8' fill='rgba(167,139,250,0.35)'/><text x='150' y='24' font-size='16' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Mai 2026</text><rect x='250' y='38' width='41' height='168' fill='rgba(244,63,94,0.12)'/><g font-size='12' fill='#94a3b8' text-anchor='middle' font-family='sans-serif'><text x='24' y='52'>Mo</text><text x='65' y='52'>Di</text><text x='106' y='52'>Mi</text><text x='147' y='52'>Do</text><text x='188' y='52'>Fr</text><text x='229' y='52'>Sa</text><text x='270' y='52'>So</text></g><circle cx='65' cy='127' r='13' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='65' cy='157' r='13' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><g font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'><text x='188' y='72'>1</text><text x='229' y='72'>2</text><text x='270' y='72'>3</text><text x='24' y='102'>4</text><text x='65' y='102'>5</text><text x='106' y='102'>6</text><text x='147' y='102'>7</text><text x='188' y='102'>8</text><text x='229' y='102'>9</text><text x='270' y='102'>10</text><text x='24' y='132'>11</text><text x='65' y='132'>12</text><text x='106' y='132'>13</text><text x='147' y='132'>14</text><text x='188' y='132'>15</text><text x='229' y='132'>16</text><text x='270' y='132'>17</text><text x='24' y='162'>18</text><text x='65' y='162'>19</text><text x='106' y='162'>20</text><text x='147' y='162'>21</text><text x='188' y='162'>22</text><text x='229' y='162'>23</text><text x='270' y='162'>24</text><text x='24' y='192'>25</text><text x='65' y='192'>26</text><text x='106' y='192'>27</text><text x='147' y='192'>28</text><text x='188' y='192'>29</text><text x='229' y='192'>30</text><text x='270' y='192'>31</text></g></svg>",
                "Datum schreiben: 3. Mai = 03.05., 25. Dezember = 25.12. Erst der Tag, dann der Monat."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "kalenderk3l2u_leicht_1",
                    "category": "kurs_kalender_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele Tage hat 1 Woche?",
                    "answers": [
                        "7 Tage",
                        "5 Tage",
                        "10 Tage",
                        "6 Tage"
                    ],
                    "correct": 0,
                    "explanation": "Montag bis Sonntag sind 7 Tage. Schultage sind nur 5, aber die Woche hat 7."
                },
                {
                    "id": "kalenderk3l2u_leicht_2",
                    "category": "kurs_kalender_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele Monate hat ein Jahr?",
                    "answers": [
                        "12 Monate",
                        "10 Monate",
                        "52 Monate",
                        "4 Monate"
                    ],
                    "correct": 0,
                    "explanation": "Ein Jahr hat 12 Monate, von Januar bis Dezember. 52 ist die Zahl der Wochen, 4 die der Jahreszeiten."
                },
                {
                    "id": "kalenderk3l2u_leicht_3",
                    "category": "kurs_kalender_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was bedeutet das Datum 03.05.?",
                    "answers": [
                        "3. Mai",
                        "5. März",
                        "3. Juni",
                        "30. Mai"
                    ],
                    "correct": 0,
                    "explanation": "Erst steht der Tag, dann der Monat: Tag 3, Monat 5 – der 5. Monat ist der Mai."
                },
                {
                    "id": "kalenderk3l2u_leicht_4",
                    "category": "kurs_kalender_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Wochentag ist der 12. Mai?",
                    "answers": [
                        "Dienstag",
                        "Montag",
                        "Mittwoch",
                        "Donnerstag"
                    ],
                    "correct": 0,
                    "explanation": "Suche die 12 im Kalender und schau nach oben: Sie steht in der Spalte Di, also Dienstag.",
                    "grafik": "<svg viewBox='0 0 300 218' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='4' width='292' height='210' rx='8' fill='#1e293b' stroke='#a78bfa' stroke-width='2'/><rect x='4' y='4' width='292' height='28' rx='8' fill='rgba(167,139,250,0.35)'/><text x='150' y='24' font-size='16' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Mai 2026</text><rect x='250' y='38' width='41' height='168' fill='rgba(244,63,94,0.12)'/><g font-size='12' fill='#94a3b8' text-anchor='middle' font-family='sans-serif'><text x='24' y='52'>Mo</text><text x='65' y='52'>Di</text><text x='106' y='52'>Mi</text><text x='147' y='52'>Do</text><text x='188' y='52'>Fr</text><text x='229' y='52'>Sa</text><text x='270' y='52'>So</text></g><g font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'><text x='188' y='72'>1</text><text x='229' y='72'>2</text><text x='270' y='72'>3</text><text x='24' y='102'>4</text><text x='65' y='102'>5</text><text x='106' y='102'>6</text><text x='147' y='102'>7</text><text x='188' y='102'>8</text><text x='229' y='102'>9</text><text x='270' y='102'>10</text><text x='24' y='132'>11</text><text x='65' y='132'>12</text><text x='106' y='132'>13</text><text x='147' y='132'>14</text><text x='188' y='132'>15</text><text x='229' y='132'>16</text><text x='270' y='132'>17</text><text x='24' y='162'>18</text><text x='65' y='162'>19</text><text x='106' y='162'>20</text><text x='147' y='162'>21</text><text x='188' y='162'>22</text><text x='229' y='162'>23</text><text x='270' y='162'>24</text><text x='24' y='192'>25</text><text x='65' y='192'>26</text><text x='106' y='192'>27</text><text x='147' y='192'>28</text><text x='188' y='192'>29</text><text x='229' y='192'>30</text><text x='270' y='192'>31</text></g></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "kalenderk3l2u_mittel_1",
                    "category": "kurs_kalender_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viele Tage hat der April? Nutze die Knöchelregel.",
                    "answers": [
                        "30 Tage",
                        "31 Tage",
                        "28 Tage",
                        "29 Tage"
                    ],
                    "correct": 0,
                    "explanation": "Jan Knöchel, Feb Tal, Mär Knöchel, Apr Tal. Monate im Tal haben 30 Tage.",
                    "grafik": "<svg viewBox='0 0 340 120' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M22 90 Q31 50 40 50 Q67 74 76 74 Q103 50 112 50 Q139 74 148 74 Q175 50 184 50 Q211 74 220 74 Q247 50 256 50 Q270 74 282 90 Z' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='3' stroke-linejoin='round'/><circle cx='40' cy='50' r='4' fill='#10b981'/><text x='40' y='38' font-size='12' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Jan</text><text x='40' y='112' font-size='12' fill='#94a3b8' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Aug</text><circle cx='76' cy='74' r='4' fill='#f43f5e'/><circle cx='112' cy='50' r='4' fill='#10b981'/><circle cx='148' cy='74' r='4' fill='#f43f5e'/><circle cx='184' cy='50' r='4' fill='#10b981'/><circle cx='220' cy='74' r='4' fill='#f43f5e'/><circle cx='256' cy='50' r='4' fill='#10b981'/><text x='320' y='46' font-size='13' fill='#10b981' text-anchor='middle' font-weight='bold' font-family='sans-serif'>31</text><text x='320' y='80' font-size='11' fill='#f43f5e' text-anchor='middle' font-family='sans-serif'>kürzer</text><circle cx='303' cy='42' r='4' fill='#10b981'/><circle cx='295' cy='76' r='4' fill='#f43f5e'/></svg>"
                },
                {
                    "id": "kalenderk3l2u_mittel_2",
                    "category": "kurs_kalender_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Heute ist der 12. Mai. Leas Geburtstag ist am 19. Mai. In wie vielen Tagen?",
                    "answers": [
                        "7 Tage",
                        "8 Tage",
                        "6 Tage",
                        "19 Tage"
                    ],
                    "correct": 0,
                    "explanation": "19 − 12 = 7. Den heutigen Tag zählst du nicht mit, also noch 7 Tage.",
                    "grafik": "<svg viewBox='0 0 300 218' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='4' width='292' height='210' rx='8' fill='#1e293b' stroke='#a78bfa' stroke-width='2'/><rect x='4' y='4' width='292' height='28' rx='8' fill='rgba(167,139,250,0.35)'/><text x='150' y='24' font-size='16' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Mai 2026</text><rect x='250' y='38' width='41' height='168' fill='rgba(244,63,94,0.12)'/><g font-size='12' fill='#94a3b8' text-anchor='middle' font-family='sans-serif'><text x='24' y='52'>Mo</text><text x='65' y='52'>Di</text><text x='106' y='52'>Mi</text><text x='147' y='52'>Do</text><text x='188' y='52'>Fr</text><text x='229' y='52'>Sa</text><text x='270' y='52'>So</text></g><circle cx='65' cy='127' r='13' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='65' cy='157' r='13' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><g font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'><text x='188' y='72'>1</text><text x='229' y='72'>2</text><text x='270' y='72'>3</text><text x='24' y='102'>4</text><text x='65' y='102'>5</text><text x='106' y='102'>6</text><text x='147' y='102'>7</text><text x='188' y='102'>8</text><text x='229' y='102'>9</text><text x='270' y='102'>10</text><text x='24' y='132'>11</text><text x='65' y='132'>12</text><text x='106' y='132'>13</text><text x='147' y='132'>14</text><text x='188' y='132'>15</text><text x='229' y='132'>16</text><text x='270' y='132'>17</text><text x='24' y='162'>18</text><text x='65' y='162'>19</text><text x='106' y='162'>20</text><text x='147' y='162'>21</text><text x='188' y='162'>22</text><text x='229' y='162'>23</text><text x='270' y='162'>24</text><text x='24' y='192'>25</text><text x='65' y='192'>26</text><text x='106' y='192'>27</text><text x='147' y='192'>28</text><text x='188' y='192'>29</text><text x='229' y='192'>30</text><text x='270' y='192'>31</text></g></svg>"
                },
                {
                    "id": "kalenderk3l2u_mittel_3",
                    "category": "kurs_kalender_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Heute ist Montag. Welcher Wochentag ist in 10 Tagen?",
                    "answers": [
                        "Donnerstag",
                        "Mittwoch",
                        "Freitag",
                        "Dienstag"
                    ],
                    "correct": 0,
                    "explanation": "Nach 7 Tagen ist wieder Montag. Dann noch 3 Tage weiter: Dienstag, Mittwoch, Donnerstag.",
                    "grafik": "<svg viewBox='0 0 340 64' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='26' width='21' height='30' rx='4' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><text x='16.5' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Mo</text><rect x='29.5' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='40' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Di</text><rect x='53' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='63.5' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Mi</text><rect x='76.5' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='87' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Do</text><rect x='100' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='110.5' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Fr</text><rect x='123.5' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='134' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Sa</text><rect x='147' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='157.5' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>So</text><rect x='170.5' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='181' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Mo</text><rect x='194' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='204.5' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Di</text><rect x='217.5' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='228' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Mi</text><rect x='241' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='251.5' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Do</text><rect x='264.5' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='275' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Fr</text><rect x='288' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='298.5' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Sa</text><rect x='311.5' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='322' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>So</text><text x='16.5' y='18' font-size='12' fill='#f59e0b' text-anchor='middle' font-weight='bold' font-family='sans-serif'>heute</text></svg>"
                },
                {
                    "id": "kalenderk3l2u_mittel_4",
                    "category": "kurs_kalender_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Monat ist der kürzeste?",
                    "answers": [
                        "Februar",
                        "November",
                        "April",
                        "Dezember"
                    ],
                    "correct": 0,
                    "explanation": "Der Februar hat nur 28 Tage, im Schaltjahr 29. Alle anderen Monate haben 30 oder 31 Tage."
                }
            ],
            "schwer": [
                {
                    "id": "kalenderk3l2u_schwer_1",
                    "category": "kurs_kalender_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Tage hat ein Jahr, das kein Schaltjahr ist?",
                    "answers": [
                        "365 Tage",
                        "360 Tage",
                        "364 Tage",
                        "366 Tage"
                    ],
                    "correct": 0,
                    "explanation": "Ein normales Jahr hat 365 Tage. Nur ein Schaltjahr hat 366 Tage, weil der Februar dann 29 Tage hat."
                },
                {
                    "id": "kalenderk3l2u_schwer_2",
                    "category": "kurs_kalender_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ben ist vom 28. Juni bis zum 5. Juli im Zeltlager. Wie viele Nächte sind das?",
                    "answers": [
                        "7 Nächte",
                        "8 Nächte",
                        "23 Nächte",
                        "6 Nächte"
                    ],
                    "correct": 0,
                    "explanation": "Der Juni hat 30 Tage: vom 28. bis 30. Juni sind 2 Nächte, dann bis 5. Juli noch 5. 2 + 5 = 7 Nächte."
                },
                {
                    "id": "kalenderk3l2u_schwer_3",
                    "category": "kurs_kalender_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Der 1. März ist ein Sonntag. Welcher Wochentag ist der 22. März?",
                    "answers": [
                        "Sonntag",
                        "Samstag",
                        "Montag",
                        "Mittwoch"
                    ],
                    "correct": 0,
                    "explanation": "Alle 7 Tage ist wieder Sonntag: 1., 8., 15., 22. März. Also ist der 22. ein Sonntag."
                },
                {
                    "id": "kalenderk3l2u_schwer_4",
                    "category": "kurs_kalender_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "3 Wochen und 4 Tage sind wie viele Tage?",
                    "answers": [
                        "25 Tage",
                        "34 Tage",
                        "21 Tage",
                        "19 Tage"
                    ],
                    "correct": 0,
                    "explanation": "3 Wochen = 3 · 7 = 21 Tage. 21 + 4 = 25 Tage."
                }
            ]
        },
        "test": [
            {
                "id": "kalenderk3l2_test_1",
                "category": "kurs_kalender_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Datum hat der zweite Freitag im Oktober?",
                "answers": [
                    "9. Oktober",
                    "2. Oktober",
                    "16. Oktober",
                    "8. Oktober"
                ],
                "correct": 0,
                "explanation": "Der erste Freitag ist der 2. Oktober. Eine Woche später, 2 + 7 = 9, ist der zweite Freitag.",
                "grafik": "<svg viewBox='0 0 300 218' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='4' width='292' height='210' rx='8' fill='#1e293b' stroke='#a78bfa' stroke-width='2'/><rect x='4' y='4' width='292' height='28' rx='8' fill='rgba(167,139,250,0.35)'/><text x='150' y='24' font-size='16' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Oktober 2026</text><rect x='250' y='38' width='41' height='168' fill='rgba(244,63,94,0.12)'/><g font-size='12' fill='#94a3b8' text-anchor='middle' font-family='sans-serif'><text x='24' y='52'>Mo</text><text x='65' y='52'>Di</text><text x='106' y='52'>Mi</text><text x='147' y='52'>Do</text><text x='188' y='52'>Fr</text><text x='229' y='52'>Sa</text><text x='270' y='52'>So</text></g><g font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'><text x='147' y='72'>1</text><text x='188' y='72'>2</text><text x='229' y='72'>3</text><text x='270' y='72'>4</text><text x='24' y='102'>5</text><text x='65' y='102'>6</text><text x='106' y='102'>7</text><text x='147' y='102'>8</text><text x='188' y='102'>9</text><text x='229' y='102'>10</text><text x='270' y='102'>11</text><text x='24' y='132'>12</text><text x='65' y='132'>13</text><text x='106' y='132'>14</text><text x='147' y='132'>15</text><text x='188' y='132'>16</text><text x='229' y='132'>17</text><text x='270' y='132'>18</text><text x='24' y='162'>19</text><text x='65' y='162'>20</text><text x='106' y='162'>21</text><text x='147' y='162'>22</text><text x='188' y='162'>23</text><text x='229' y='162'>24</text><text x='270' y='162'>25</text><text x='24' y='192'>26</text><text x='65' y='192'>27</text><text x='106' y='192'>28</text><text x='147' y='192'>29</text><text x='188' y='192'>30</text><text x='229' y='192'>31</text></g></svg>"
            },
            {
                "id": "kalenderk3l2_test_2",
                "category": "kurs_kalender_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie schreibst du den 7. Februar als Datum?",
                "answers": [
                    "07.02.",
                    "02.07.",
                    "07.03.",
                    "07.12."
                ],
                "correct": 0,
                "explanation": "Erst der Tag, dann der Monat. Der Februar ist der 2. Monat: 07.02."
            },
            {
                "id": "kalenderk3l2_test_3",
                "category": "kurs_kalender_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Monat hat 31 Tage? Nutze die Knöchelregel.",
                "answers": [
                    "August",
                    "Juni",
                    "September",
                    "November"
                ],
                "correct": 0,
                "explanation": "Nach dem Juli beginnt man wieder beim ersten Knöchel: Der August liegt auf einem Knöchel und hat 31 Tage.",
                "grafik": "<svg viewBox='0 0 340 120' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M22 90 Q31 50 40 50 Q67 74 76 74 Q103 50 112 50 Q139 74 148 74 Q175 50 184 50 Q211 74 220 74 Q247 50 256 50 Q270 74 282 90 Z' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='3' stroke-linejoin='round'/><circle cx='40' cy='50' r='4' fill='#10b981'/><text x='40' y='38' font-size='12' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Jan</text><text x='40' y='112' font-size='12' fill='#94a3b8' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Aug</text><circle cx='76' cy='74' r='4' fill='#f43f5e'/><circle cx='112' cy='50' r='4' fill='#10b981'/><circle cx='148' cy='74' r='4' fill='#f43f5e'/><circle cx='184' cy='50' r='4' fill='#10b981'/><circle cx='220' cy='74' r='4' fill='#f43f5e'/><circle cx='256' cy='50' r='4' fill='#10b981'/><text x='320' y='46' font-size='13' fill='#10b981' text-anchor='middle' font-weight='bold' font-family='sans-serif'>31</text><text x='320' y='80' font-size='11' fill='#f43f5e' text-anchor='middle' font-family='sans-serif'>kürzer</text><circle cx='303' cy='42' r='4' fill='#10b981'/><circle cx='295' cy='76' r='4' fill='#f43f5e'/></svg>"
            },
            {
                "id": "kalenderk3l2_test_4",
                "category": "kurs_kalender_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Heute ist der 25. April. In wie vielen Tagen ist der 2. Mai?",
                "answers": [
                    "7 Tage",
                    "8 Tage",
                    "23 Tage",
                    "6 Tage"
                ],
                "correct": 0,
                "explanation": "Der April hat 30 Tage: vom 25. bis 30. April sind es 5 Tage, dann noch 2 bis zum 2. Mai. 5 + 2 = 7."
            },
            {
                "id": "kalenderk3l2_test_5",
                "category": "kurs_kalender_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Heute ist Freitag. Welcher Wochentag war vor 3 Tagen?",
                "answers": [
                    "Dienstag",
                    "Mittwoch",
                    "Montag",
                    "Donnerstag"
                ],
                "correct": 0,
                "explanation": "Zähle zurück: Donnerstag (1), Mittwoch (2), Dienstag (3).",
                "grafik": "<svg viewBox='0 0 340 64' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='16.5' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Mo</text><rect x='29.5' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='40' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Di</text><rect x='53' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='63.5' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Mi</text><rect x='76.5' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='87' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Do</text><rect x='100' y='26' width='21' height='30' rx='4' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><text x='110.5' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Fr</text><rect x='123.5' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='134' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Sa</text><rect x='147' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='157.5' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>So</text><rect x='170.5' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='181' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Mo</text><rect x='194' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='204.5' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Di</text><rect x='217.5' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='228' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Mi</text><rect x='241' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='251.5' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Do</text><rect x='264.5' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='275' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Fr</text><rect x='288' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='298.5' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Sa</text><rect x='311.5' y='26' width='21' height='30' rx='4' fill='#1e293b' stroke='#94a3b8' stroke-width='1.5'/><text x='322' y='46' font-size='11' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>So</text><text x='110.5' y='18' font-size='12' fill='#f59e0b' text-anchor='middle' font-weight='bold' font-family='sans-serif'>heute</text></svg>"
            },
            {
                "id": "kalenderk3l2_test_6",
                "category": "kurs_kalender_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Tage haben Juli und August zusammen?",
                "answers": [
                    "62 Tage",
                    "61 Tage",
                    "60 Tage",
                    "64 Tage"
                ],
                "correct": 0,
                "explanation": "Juli und August haben beide 31 Tage. 31 + 31 = 62 Tage."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "sach_k3_l1",
        "kurs": "sachaufgaben_k3",
        "order": 1,
        "icon": "🧩",
        "title": "Frage, Rechnung, Antwort",
        "kurz": "Wichtige Angaben finden und passend rechnen",
        "erklaerung": {
            "intro": "Eine <b>Sachaufgabe</b> erzählt eine kleine Geschichte mit Zahlen. Lies sie genau und finde die <b>Frage</b>. Dann suchst du die <b>wichtigen Angaben</b> – manche Zahlen sind <b>überflüssig</b>. Überlege: Kommt etwas dazu (+), geht etwas weg (−), gibt es mehrmals gleich viel (·) oder wird verteilt (:)? Zum Schluss schreibst du einen <b>Antwortsatz</b>, der zur Frage passt.",
            "merksatz": "Frage – Rechnung – Antwort: Der Antwortsatz beantwortet genau die Frage.",
            "beispiele": [
                "Mia kauft 4 Packungen mit je 6 Eiern. Frage: Wie viele Eier sind es? Rechnung: 4 · 6 = 24. Antwort: Es sind 24 Eier.<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='14' width='74' height='50' rx='6' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2'/><ellipse cx='22' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='45' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='68' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='22' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='45' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='68' cy='51' rx='8' ry='10' fill='#fde68a'/><rect x='90' y='14' width='74' height='50' rx='6' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2'/><ellipse cx='104' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='127' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='150' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='104' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='127' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='150' cy='51' rx='8' ry='10' fill='#fde68a'/><rect x='172' y='14' width='74' height='50' rx='6' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2'/><ellipse cx='186' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='209' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='232' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='186' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='209' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='232' cy='51' rx='8' ry='10' fill='#fde68a'/><rect x='254' y='14' width='74' height='50' rx='6' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2'/><ellipse cx='268' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='291' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='314' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='268' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='291' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='314' cy='51' rx='8' ry='10' fill='#fde68a'/></svg>",
                "Überflüssige Angabe: „Ben ist 9 Jahre alt. Er hat 3 Tüten mit je 5 Murmeln.“ Für die Murmeln brauchst du das Alter nicht: 3 · 5 = 15 Murmeln.",
                "Signalwörter helfen: <b>dazu</b> → plus, <b>weg / übrig</b> → minus, <b>je / jeder</b> → mal, <b>verteilen / gleich viele</b> → geteilt."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "sachk3l1u_leicht_1",
                    "category": "kurs_sach_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Finn hat 24 Sticker und bekommt 8 dazu. Welche Rechnung passt?",
                    "answers": [
                        "24 + 8",
                        "24 − 8",
                        "24 · 8",
                        "24 : 8"
                    ],
                    "correct": 0,
                    "explanation": "Es kommen Sticker dazu, also rechnest du plus: 24 + 8 = 32."
                },
                {
                    "id": "sachk3l1u_leicht_2",
                    "category": "kurs_sach_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Mia kauft 4 Packungen mit je 6 Eiern. Welche Rechnung passt?",
                    "answers": [
                        "4 · 6",
                        "4 + 6",
                        "6 − 4",
                        "24 : 4"
                    ],
                    "correct": 0,
                    "explanation": "4 Packungen mit je 6 Eiern: Viermal 6 Eier, also 4 · 6 = 24.",
                    "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='14' width='74' height='50' rx='6' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2'/><ellipse cx='22' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='45' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='68' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='22' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='45' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='68' cy='51' rx='8' ry='10' fill='#fde68a'/><rect x='90' y='14' width='74' height='50' rx='6' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2'/><ellipse cx='104' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='127' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='150' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='104' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='127' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='150' cy='51' rx='8' ry='10' fill='#fde68a'/><rect x='172' y='14' width='74' height='50' rx='6' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2'/><ellipse cx='186' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='209' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='232' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='186' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='209' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='232' cy='51' rx='8' ry='10' fill='#fde68a'/><rect x='254' y='14' width='74' height='50' rx='6' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2'/><ellipse cx='268' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='291' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='314' cy='27' rx='8' ry='10' fill='#fde68a'/><ellipse cx='268' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='291' cy='51' rx='8' ry='10' fill='#fde68a'/><ellipse cx='314' cy='51' rx='8' ry='10' fill='#fde68a'/></svg>"
                },
                {
                    "id": "sachk3l1u_leicht_3",
                    "category": "kurs_sach_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ben ist 9 Jahre alt. Er hat 3 Tüten mit je 5 Murmeln. Welche Angabe brauchst du nicht?",
                    "answers": [
                        "das Alter 9",
                        "die 3 Tüten",
                        "die 5 Murmeln",
                        "alle Angaben"
                    ],
                    "correct": 0,
                    "explanation": "Gefragt sind die Murmeln: 3 · 5 = 15. Wie alt Ben ist, spielt dafür keine Rolle."
                },
                {
                    "id": "sachk3l1u_leicht_4",
                    "category": "kurs_sach_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "3 Bälle kosten je 4 €. Rechnung: 3 · 4 = 12. Welcher Antwortsatz passt?",
                    "answers": [
                        "Alles kostet 12 €.",
                        "Es sind 12 Bälle.",
                        "Ein Ball kostet 12 €.",
                        "Alles kostet 7 €."
                    ],
                    "correct": 0,
                    "explanation": "Gesucht ist der Preis für alle Bälle. 12 ist der Gesamtpreis in Euro, nicht die Zahl der Bälle."
                }
            ],
            "mittel": [
                {
                    "id": "sachk3l1u_mittel_1",
                    "category": "kurs_sach_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Im Bus sitzen 37 Kinder. 9 steigen aus, 5 steigen ein. Wie viele sitzen jetzt drin?",
                    "answers": [
                        "33 Kinder",
                        "51 Kinder",
                        "23 Kinder",
                        "41 Kinder"
                    ],
                    "correct": 0,
                    "explanation": "Aussteigen heißt minus, einsteigen plus: 37 − 9 = 28, dann 28 + 5 = 33.",
                    "grafik": "<svg viewBox='0 0 340 110' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='90' y='20' width='160' height='70' rx='12' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='3'/><circle cx='125' cy='92' r='11' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><circle cx='215' cy='92' r='11' fill='#1e293b' stroke='#94a3b8' stroke-width='3'/><text x='170' y='62' font-size='16' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>37 Kinder</text><path d='M85 50 H30 M42 40 L30 50 L42 60' fill='none' stroke='#f43f5e' stroke-width='3'/><path d='M255 50 H310 M262 40 L255 50 L262 60' fill='none' stroke='#10b981' stroke-width='3'/><text x='56' y='82' font-size='14' fill='#f43f5e' text-anchor='middle' font-weight='bold' font-family='sans-serif'>9 aus</text><text x='284' y='82' font-size='14' fill='#10b981' text-anchor='middle' font-weight='bold' font-family='sans-serif'>5 ein</text></svg>"
                },
                {
                    "id": "sachk3l1u_mittel_2",
                    "category": "kurs_sach_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Eine Kinokarte kostet 8 €. Die Klasse zahlt 56 €. Wie viele Karten sind das?",
                    "answers": [
                        "7 Karten",
                        "48 Karten",
                        "64 Karten",
                        "448 Karten"
                    ],
                    "correct": 0,
                    "explanation": "Die 56 € werden in Portionen zu 8 € aufgeteilt: 56 : 8 = 7 Karten."
                },
                {
                    "id": "sachk3l1u_mittel_3",
                    "category": "kurs_sach_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Es gibt 6 Tische mit je 8 Plätzen. Das Fest beginnt um 14 Uhr. Was ist überflüssig?",
                    "answers": [
                        "die 14 Uhr",
                        "die 6 Tische",
                        "die 8 Plätze",
                        "keine Angabe"
                    ],
                    "correct": 0,
                    "explanation": "Für die Zahl der Plätze rechnest du 6 · 8 = 48. Die Uhrzeit brauchst du dafür nicht."
                },
                {
                    "id": "sachk3l1u_mittel_4",
                    "category": "kurs_sach_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Elif läuft 3 Runden. Wie viele Meter läuft sie?",
                    "answers": [
                        "1200 m",
                        "403 m",
                        "120 m",
                        "1400 m"
                    ],
                    "correct": 0,
                    "explanation": "3 Runden zu je 400 m: 3 · 400 m = 1200 m.",
                    "grafik": "<svg viewBox='0 0 340 120' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='14' width='260' height='92' rx='46' fill='rgba(16,185,129,0.2)' stroke='#10b981' stroke-width='6'/><rect x='64' y='36' width='212' height='48' rx='24' fill='none' stroke='#10b981' stroke-width='2' stroke-dasharray='6 5'/><text x='170' y='66' font-size='16' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>1 Runde = 400 m</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "sachk3l1u_schwer_1",
                    "category": "kurs_sach_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Die 3a sammelt 345 Kronkorken, die 3b 278. Wie viele hat die 3a mehr?",
                    "answers": [
                        "67",
                        "623",
                        "133",
                        "177"
                    ],
                    "correct": 0,
                    "explanation": "„Wie viele mehr“ heißt minus: 345 − 278 = 67. Probe: 278 + 67 = 345."
                },
                {
                    "id": "sachk3l1u_schwer_2",
                    "category": "kurs_sach_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "48 Äpfel werden gleich auf 6 Körbe verteilt. Welche Frage passt zu 48 : 6?",
                    "answers": [
                        "Wie viele pro Korb?",
                        "Wie viele insgesamt?",
                        "Wie viele mehr?",
                        "Wie viele fehlen?"
                    ],
                    "correct": 0,
                    "explanation": "Beim Verteilen fragt man, wie viele in jeden Korb kommen: 48 : 6 = 8 pro Korb."
                },
                {
                    "id": "sachk3l1u_schwer_3",
                    "category": "kurs_sach_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Regal hat 5 Böden mit je 9 Büchern. 7 werden ausgeliehen. Welche Rechnung passt?",
                    "answers": [
                        "5 · 9 − 7",
                        "5 · 9 + 7",
                        "5 + 9 − 7",
                        "5 · 7 − 9"
                    ],
                    "correct": 0,
                    "explanation": "Erst alle Bücher: 5 · 9 = 45. Ausgeliehene gehen weg: 45 − 7 = 38.",
                    "grafik": "<svg viewBox='0 0 340 176' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='70' y='8' width='200' height='160' fill='none' stroke='#f59e0b' stroke-width='4'/><line x1='70' y1='40' x2='270' y2='40' stroke='#f59e0b' stroke-width='3'/><path d='M80 14 h13 v24 h-13 Z M100 14 h13 v24 h-13 Z M120 14 h13 v24 h-13 Z M140 14 h13 v24 h-13 Z M160 14 h13 v24 h-13 Z M180 14 h13 v24 h-13 Z M200 14 h13 v24 h-13 Z M220 14 h13 v24 h-13 Z M240 14 h13 v24 h-13 Z ' fill='rgba(167,139,250,0.4)' stroke='#a78bfa' stroke-width='1'/><line x1='70' y1='72' x2='270' y2='72' stroke='#f59e0b' stroke-width='3'/><path d='M80 46 h13 v24 h-13 Z M100 46 h13 v24 h-13 Z M120 46 h13 v24 h-13 Z M140 46 h13 v24 h-13 Z M160 46 h13 v24 h-13 Z M180 46 h13 v24 h-13 Z M200 46 h13 v24 h-13 Z M220 46 h13 v24 h-13 Z M240 46 h13 v24 h-13 Z ' fill='rgba(167,139,250,0.4)' stroke='#a78bfa' stroke-width='1'/><line x1='70' y1='104' x2='270' y2='104' stroke='#f59e0b' stroke-width='3'/><path d='M80 78 h13 v24 h-13 Z M100 78 h13 v24 h-13 Z M120 78 h13 v24 h-13 Z M140 78 h13 v24 h-13 Z M160 78 h13 v24 h-13 Z M180 78 h13 v24 h-13 Z M200 78 h13 v24 h-13 Z M220 78 h13 v24 h-13 Z M240 78 h13 v24 h-13 Z ' fill='rgba(167,139,250,0.4)' stroke='#a78bfa' stroke-width='1'/><line x1='70' y1='136' x2='270' y2='136' stroke='#f59e0b' stroke-width='3'/><path d='M80 110 h13 v24 h-13 Z M100 110 h13 v24 h-13 Z M120 110 h13 v24 h-13 Z M140 110 h13 v24 h-13 Z M160 110 h13 v24 h-13 Z M180 110 h13 v24 h-13 Z M200 110 h13 v24 h-13 Z M220 110 h13 v24 h-13 Z M240 110 h13 v24 h-13 Z ' fill='rgba(167,139,250,0.4)' stroke='#a78bfa' stroke-width='1'/><path d='M80 142 h13 v24 h-13 Z M100 142 h13 v24 h-13 Z M120 142 h13 v24 h-13 Z M140 142 h13 v24 h-13 Z M160 142 h13 v24 h-13 Z M180 142 h13 v24 h-13 Z M200 142 h13 v24 h-13 Z M220 142 h13 v24 h-13 Z M240 142 h13 v24 h-13 Z ' fill='rgba(167,139,250,0.4)' stroke='#a78bfa' stroke-width='1'/></svg>"
                },
                {
                    "id": "sachk3l1u_schwer_4",
                    "category": "kurs_sach_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "4 Busse mit je 25 Kindern. Rechnung: 4 · 25 = 100. Welcher Antwortsatz passt?",
                    "answers": [
                        "100 Kinder fahren mit.",
                        "4 Busse fahren mit.",
                        "25 Kinder fahren mit.",
                        "100 Busse fahren mit."
                    ],
                    "correct": 0,
                    "explanation": "Die 100 aus der Rechnung sind Kinder, nicht Busse. Also: 100 Kinder fahren mit."
                }
            ]
        },
        "test": [
            {
                "id": "sachk3l1_test_1",
                "category": "kurs_sach_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "multiplikation_division_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Bauer hat 7 Kisten. Wie viele Kürbisse sind es zusammen?",
                "answers": [
                    "56 Kürbisse",
                    "15 Kürbisse",
                    "54 Kürbisse",
                    "63 Kürbisse"
                ],
                "correct": 0,
                "explanation": "7 Kisten mit je 8 Kürbissen: 7 · 8 = 56.",
                "grafik": "<svg viewBox='0 0 340 116' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='74' height='44' rx='4' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='45' y='36' font-size='12' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>8 Kürbisse</text><rect x='90' y='8' width='74' height='44' rx='4' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='127' y='36' font-size='12' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>8 Kürbisse</text><rect x='172' y='8' width='74' height='44' rx='4' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='209' y='36' font-size='12' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>8 Kürbisse</text><rect x='254' y='8' width='74' height='44' rx='4' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='291' y='36' font-size='12' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>8 Kürbisse</text><rect x='8' y='62' width='74' height='44' rx='4' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='45' y='90' font-size='12' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>8 Kürbisse</text><rect x='90' y='62' width='74' height='44' rx='4' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='127' y='90' font-size='12' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>8 Kürbisse</text><rect x='172' y='62' width='74' height='44' rx='4' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='209' y='90' font-size='12' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>8 Kürbisse</text></svg>"
            },
            {
                "id": "sachk3l1_test_2",
                "category": "kurs_sach_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "multiplikation_division_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Mia (8 Jahre) hat 120 Perlen. Für eine Kette braucht sie 30. Was ist überflüssig?",
                "answers": [
                    "die 8 Jahre",
                    "die 120 Perlen",
                    "die 30 Perlen",
                    "keine Angabe"
                ],
                "correct": 0,
                "explanation": "Für die Ketten rechnest du 120 : 30 = 4. Mias Alter brauchst du nicht."
            },
            {
                "id": "sachk3l1_test_3",
                "category": "kurs_sach_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "multiplikation_division_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ben hat 250 Sammelkarten. Er verschenkt 75. Welche Rechnung passt?",
                "answers": [
                    "250 − 75",
                    "250 + 75",
                    "250 : 75",
                    "75 − 250"
                ],
                "correct": 0,
                "explanation": "Verschenkte Karten gehen weg, also minus: 250 − 75 = 175."
            },
            {
                "id": "sachk3l1_test_4",
                "category": "kurs_sach_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "multiplikation_division_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "In der Halle stehen 9 Reihen mit je 6 Stühlen. 5 sind kaputt. Wie viele sind heil?",
                "answers": [
                    "49 Stühle",
                    "59 Stühle",
                    "54 Stühle",
                    "10 Stühle"
                ],
                "correct": 0,
                "explanation": "Alle Stühle: 9 · 6 = 54. Ohne die kaputten: 54 − 5 = 49.",
                "grafik": "<svg viewBox='0 0 340 176' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M106 10h16v12h-16ZM128 10h16v12h-16ZM150 10h16v12h-16ZM172 10h16v12h-16ZM194 10h16v12h-16ZM216 10h16v12h-16ZM106 28h16v12h-16ZM128 28h16v12h-16ZM150 28h16v12h-16ZM172 28h16v12h-16ZM194 28h16v12h-16ZM216 28h16v12h-16ZM106 46h16v12h-16ZM128 46h16v12h-16ZM150 46h16v12h-16ZM172 46h16v12h-16ZM194 46h16v12h-16ZM216 46h16v12h-16ZM106 64h16v12h-16ZM128 64h16v12h-16ZM150 64h16v12h-16ZM172 64h16v12h-16ZM194 64h16v12h-16ZM216 64h16v12h-16ZM106 82h16v12h-16ZM128 82h16v12h-16ZM150 82h16v12h-16ZM172 82h16v12h-16ZM194 82h16v12h-16ZM216 82h16v12h-16ZM106 100h16v12h-16ZM128 100h16v12h-16ZM150 100h16v12h-16ZM172 100h16v12h-16ZM194 100h16v12h-16ZM216 100h16v12h-16ZM106 118h16v12h-16ZM128 118h16v12h-16ZM150 118h16v12h-16ZM172 118h16v12h-16ZM194 118h16v12h-16ZM216 118h16v12h-16ZM106 136h16v12h-16ZM128 136h16v12h-16ZM150 136h16v12h-16ZM172 136h16v12h-16ZM194 136h16v12h-16ZM216 136h16v12h-16ZM106 154h16v12h-16ZM128 154h16v12h-16ZM150 154h16v12h-16ZM172 154h16v12h-16ZM194 154h16v12h-16ZM216 154h16v12h-16Z' fill='rgba(56,189,248,0.3)' stroke='#38bdf8' stroke-width='1.5'/><text x='60' y='98' font-size='13' fill='#94a3b8' text-anchor='middle' font-family='sans-serif'>9 Reihen</text><text x='290' y='98' font-size='13' fill='#94a3b8' text-anchor='middle' font-family='sans-serif'>je 6</text></svg>"
            },
            {
                "id": "sachk3l1_test_5",
                "category": "kurs_sach_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "multiplikation_division_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Finn spart für 40 €. Er hat 28 €. Rechnung: 40 − 28 = 12. Welcher Antwortsatz passt?",
                "answers": [
                    "Finn fehlen noch 12 €.",
                    "Finn hat noch 40 €.",
                    "Finn fehlen noch 28 €.",
                    "Finn bezahlt 68 €."
                ],
                "correct": 0,
                "explanation": "Gefragt ist, was noch fehlt. Das Ergebnis 12 € ist der fehlende Betrag."
            },
            {
                "id": "sachk3l1_test_6",
                "category": "kurs_sach_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "multiplikation_division_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "25 Kinder zahlen je 4 € für den Ausflug. Wie viel Geld ist das?",
                "answers": [
                    "100 €",
                    "29 €",
                    "80 €",
                    "90 €"
                ],
                "correct": 0,
                "explanation": "Jedes Kind zahlt 4 €, also 25 · 4 € = 100 €."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "sach_k3_l2",
        "kurs": "sachaufgaben_k3",
        "order": 2,
        "icon": "📋",
        "title": "Tabellen und Skizzen",
        "kurz": "Angaben ordnen und Ergebnisse prüfen",
        "erklaerung": {
            "intro": "Viele Angaben ordnest du am besten in einer <b>Tabelle</b>: Oben steht zum Beispiel die Anzahl, unten der Preis. Eine <b>Skizze</b> ist ein schnelles Bild mit den wichtigen Zahlen – sie hilft bei Wegen, Zäunen und Beeten. Manche Aufgaben brauchen <b>zwei Rechenschritte</b>. Mit einem <b>Überschlag</b> prüfst du am Ende, ob dein Ergebnis ungefähr stimmt.",
            "merksatz": "Erst ordnen (Tabelle oder Skizze), dann rechnen – und mit dem Überschlag prüfen.",
            "beispiele": [
                "1 Heft kostet 2 €. In der Tabelle siehst du: Jedes Heft mehr kostet 2 € mehr. 3 Hefte kosten 3 · 2 € = 6 €.<svg viewBox='0 0 298 76' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='286' height='32' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='70' height='64' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='286' height='64' fill='none' stroke='#a78bfa' stroke-width='2'/><line x1='6' y1='38' x2='292' y2='38' stroke='#a78bfa' stroke-width='1'/><line x1='76' y1='6' x2='76' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='130' y1='6' x2='130' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='184' y1='6' x2='184' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='238' y1='6' x2='238' y2='70' stroke='#a78bfa' stroke-width='1'/><text x='41' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Hefte</text><text x='103' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>1</text><text x='157' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>2</text><text x='211' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>3</text><text x='265' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>4</text><text x='41' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Preis</text><text x='103' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>2 €</text><text x='157' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>4 €</text><text x='211' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>6 €</text><text x='265' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>8 €</text></svg>",
                "Skizze: Mia geht 350 m zur Schule und 280 m weiter zum Sportplatz. Hin: 350 + 280 = 630 m. Hin und zurück: 630 + 630 = 1260 m.<svg viewBox='0 0 340 104' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='60' x2='300' y2='60' stroke='#94a3b8' stroke-width='3' stroke-dasharray='8 5'/><circle cx='40' cy='60' r='9' fill='#38bdf8'/><text x='40' y='92' font-size='13' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Haus</text><circle cx='180' cy='60' r='9' fill='#a78bfa'/><text x='180' y='92' font-size='13' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Schule</text><circle cx='300' cy='60' r='9' fill='#10b981'/><text x='300' y='92' font-size='13' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Sportplatz</text><text x='110' y='48' font-size='14' fill='#f59e0b' text-anchor='middle' font-weight='bold' font-family='sans-serif'>350 m</text><text x='240' y='48' font-size='14' fill='#f59e0b' text-anchor='middle' font-weight='bold' font-family='sans-serif'>280 m</text></svg>",
                "Überschlag: 398 + 207 ist ungefähr 400 + 200 = 600. Wer 905 herausbekommt, hat sich verrechnet – richtig ist 605."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "sachk3l2u_leicht_1",
                    "category": "kurs_sach_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "1 Heft kostet 2 €. Wie viel kosten 3 Hefte?",
                    "answers": [
                        "6 €",
                        "5 €",
                        "8 €",
                        "3 €"
                    ],
                    "correct": 0,
                    "explanation": "Jedes Heft kostet 2 €. 3 · 2 € = 6 €.",
                    "grafik": "<svg viewBox='0 0 244 76' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='232' height='32' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='70' height='64' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='232' height='64' fill='none' stroke='#a78bfa' stroke-width='2'/><line x1='6' y1='38' x2='238' y2='38' stroke='#a78bfa' stroke-width='1'/><line x1='76' y1='6' x2='76' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='130' y1='6' x2='130' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='184' y1='6' x2='184' y2='70' stroke='#a78bfa' stroke-width='1'/><text x='41' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Hefte</text><text x='103' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>1</text><text x='157' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>2</text><text x='211' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>3</text><text x='41' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Preis</text><text x='103' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>2 €</text><text x='157' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>4 €</text><text x='211' y='59' font-size='14' fill='#f59e0b' text-anchor='middle' font-weight='bold' font-family='sans-serif'>?</text></svg>"
                },
                {
                    "id": "sachk3l2u_leicht_2",
                    "category": "kurs_sach_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ein Stickerpack kostet 3 €. Wie viel kosten 4 Packs?",
                    "answers": [
                        "12 €",
                        "9 €",
                        "8 €",
                        "7 €"
                    ],
                    "correct": 0,
                    "explanation": "4 Packs zu je 3 €: 4 · 3 € = 12 €.",
                    "grafik": "<svg viewBox='0 0 262 76' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='250' height='32' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='70' height='64' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='250' height='64' fill='none' stroke='#a78bfa' stroke-width='2'/><line x1='6' y1='38' x2='256' y2='38' stroke='#a78bfa' stroke-width='1'/><line x1='76' y1='6' x2='76' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='136' y1='6' x2='136' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='196' y1='6' x2='196' y2='70' stroke='#a78bfa' stroke-width='1'/><text x='41' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Packs</text><text x='106' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>1</text><text x='166' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>2</text><text x='226' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>4</text><text x='41' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Preis</text><text x='106' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>3 €</text><text x='166' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>6 €</text><text x='226' y='59' font-size='14' fill='#f59e0b' text-anchor='middle' font-weight='bold' font-family='sans-serif'>?</text></svg>"
                },
                {
                    "id": "sachk3l2u_leicht_3",
                    "category": "kurs_sach_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Die Klasse wurde nach dem Lieblingsobst gefragt. Wie viele Kinder waren es insgesamt?",
                    "answers": [
                        "16 Kinder",
                        "15 Kinder",
                        "13 Kinder",
                        "11 Kinder"
                    ],
                    "correct": 0,
                    "explanation": "Zähle alle Zahlen der Tabelle zusammen: 8 + 5 + 3 = 16 Kinder.",
                    "grafik": "<svg viewBox='0 0 212 140' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='200' height='32' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='110' height='128' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='200' height='128' fill='none' stroke='#a78bfa' stroke-width='2'/><line x1='6' y1='38' x2='206' y2='38' stroke='#a78bfa' stroke-width='1'/><line x1='6' y1='70' x2='206' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='6' y1='102' x2='206' y2='102' stroke='#a78bfa' stroke-width='1'/><line x1='116' y1='6' x2='116' y2='134' stroke='#a78bfa' stroke-width='1'/><text x='61' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Obst</text><text x='161' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Kinder</text><text x='61' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Apfel</text><text x='161' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>8</text><text x='61' y='91' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Banane</text><text x='161' y='91' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>5</text><text x='61' y='123' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Birne</text><text x='161' y='123' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>3</text></svg>"
                },
                {
                    "id": "sachk3l2u_leicht_4",
                    "category": "kurs_sach_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "In 1 Kiste sind 4 Bälle, in 2 Kisten 8 Bälle. Wie viele Bälle sind in 5 Kisten?",
                    "answers": [
                        "20 Bälle",
                        "12 Bälle",
                        "9 Bälle",
                        "16 Bälle"
                    ],
                    "correct": 0,
                    "explanation": "Jede Kiste hat 4 Bälle. 5 · 4 = 20 Bälle."
                }
            ],
            "mittel": [
                {
                    "id": "sachk3l2u_mittel_1",
                    "category": "kurs_sach_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "2 Erwachsene und 3 Kinder gehen ins Kino. Was zahlen sie zusammen?",
                    "answers": [
                        "33 €",
                        "14 €",
                        "45 €",
                        "37 €"
                    ],
                    "correct": 0,
                    "explanation": "Erwachsene: 2 · 9 € = 18 €. Kinder: 3 · 5 € = 15 €. Zusammen 18 € + 15 € = 33 €.",
                    "grafik": "<svg viewBox='0 0 222 108' style='width:100%;max-width:230px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='210' height='32' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='130' height='96' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='210' height='96' fill='none' stroke='#a78bfa' stroke-width='2'/><line x1='6' y1='38' x2='216' y2='38' stroke='#a78bfa' stroke-width='1'/><line x1='6' y1='70' x2='216' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='136' y1='6' x2='136' y2='102' stroke='#a78bfa' stroke-width='1'/><text x='71' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Karte</text><text x='176' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Preis</text><text x='71' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Kind</text><text x='176' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>5 €</text><text x='71' y='91' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Erwachsener</text><text x='176' y='91' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>9 €</text></svg>"
                },
                {
                    "id": "sachk3l2u_mittel_2",
                    "category": "kurs_sach_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ben rechnet 398 + 207 = 905. Mache den Überschlag: Stimmt das?",
                    "answers": [
                        "Nein, etwa 600",
                        "Ja, etwa 900",
                        "Ja, genau 905",
                        "Nein, etwa 500"
                    ],
                    "correct": 0,
                    "explanation": "Überschlag: 400 + 200 = 600. 905 ist viel zu groß. Richtig ist 605."
                },
                {
                    "id": "sachk3l2u_mittel_3",
                    "category": "kurs_sach_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Aylin kauft 3 Hefte zu je 2 € und einen Stift für 4 €. Sie zahlt 20 €. Rückgeld?",
                    "answers": [
                        "10 €",
                        "14 €",
                        "16 €",
                        "11 €"
                    ],
                    "correct": 0,
                    "explanation": "1. Schritt: 3 · 2 € + 4 € = 10 €. 2. Schritt: 20 € − 10 € = 10 € zurück."
                },
                {
                    "id": "sachk3l2u_mittel_4",
                    "category": "kurs_sach_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Lea legt einen Zaun um das ganze Beet. Wie lang wird der Zaun?",
                    "answers": [
                        "16 m",
                        "15 m",
                        "8 m",
                        "13 m"
                    ],
                    "correct": 0,
                    "explanation": "Der Zaun geht um alle 4 Seiten: 5 m + 3 m + 5 m + 3 m = 16 m.",
                    "grafik": "<svg viewBox='0 0 340 150' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='70' y='20' width='200' height='120' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='3'/><text x='170' y='14' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>5 m</text><text x='296' y='85' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>3 m</text><text x='170' y='85' font-size='15' fill='#94a3b8' text-anchor='middle' font-family='sans-serif'>Beet</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "sachk3l2u_schwer_1",
                    "category": "kurs_sach_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Zaun ist 12 m lang. Alle 3 m steht ein Pfosten, auch an den Enden. Wie viele?",
                    "answers": [
                        "5 Pfosten",
                        "4 Pfosten",
                        "3 Pfosten",
                        "6 Pfosten"
                    ],
                    "correct": 0,
                    "explanation": "12 : 3 = 4 Abschnitte. Mit dem Pfosten am Anfang braucht man einen mehr: 4 + 1 = 5.",
                    "grafik": "<svg viewBox='0 0 340 116' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='60' x2='310' y2='60' stroke='#f59e0b' stroke-width='5'/><line x1='30' y1='40' x2='310' y2='40' stroke='#f59e0b' stroke-width='3'/><path d='M30 84 V92 M30 88 H310 M310 84 V92' fill='none' stroke='#94a3b8' stroke-width='2'/><text x='170' y='108' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>12 m</text><path d='M30 22 V30 M30 26 H100 M100 22 V30' fill='none' stroke='#10b981' stroke-width='2'/><text x='65' y='16' font-size='13' fill='#10b981' text-anchor='middle' font-weight='bold' font-family='sans-serif'>3 m</text><rect x='25' y='28' width='10' height='44' fill='#38bdf8'/><rect x='95' y='28' width='10' height='44' fill='#38bdf8'/></svg>"
                },
                {
                    "id": "sachk3l2u_schwer_2",
                    "category": "kurs_sach_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Der Bus fährt alle 20 min, der 1. um 8:00 Uhr. Wann fährt der 6. Bus?",
                    "answers": [
                        "9:40 Uhr",
                        "10:00 Uhr",
                        "9:20 Uhr",
                        "10:20 Uhr"
                    ],
                    "correct": 0,
                    "explanation": "Setze die Tabelle fort: 8:00, 8:20, 8:40, 9:00, 9:20, 9:40. Der 6. Bus fährt um 9:40 Uhr.",
                    "grafik": "<svg viewBox='0 0 320 76' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='308' height='32' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='60' height='64' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='308' height='64' fill='none' stroke='#a78bfa' stroke-width='2'/><line x1='6' y1='38' x2='314' y2='38' stroke='#a78bfa' stroke-width='1'/><line x1='66' y1='6' x2='66' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='118' y1='6' x2='118' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='170' y1='6' x2='170' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='222' y1='6' x2='222' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='262' y1='6' x2='262' y2='70' stroke='#a78bfa' stroke-width='1'/><text x='36' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Bus</text><text x='92' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>1.</text><text x='144' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>2.</text><text x='196' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>3.</text><text x='242' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>…</text><text x='288' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>6.</text><text x='36' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Zeit</text><text x='92' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>8:00</text><text x='144' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>8:20</text><text x='196' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>8:40</text><text x='242' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>…</text><text x='288' y='59' font-size='14' fill='#f59e0b' text-anchor='middle' font-weight='bold' font-family='sans-serif'>?</text></svg>"
                },
                {
                    "id": "sachk3l2u_schwer_3",
                    "category": "kurs_sach_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Fahrrad kostet 289 €, ein Helm 48 €. Reichen 350 €?",
                    "answers": [
                        "Ja, es reicht",
                        "Nein, 40 € fehlen",
                        "Nein, 3 € fehlen",
                        "Ja, 61 € übrig"
                    ],
                    "correct": 0,
                    "explanation": "Überschlag: 290 € + 50 € = 340 €, das ist weniger als 350 €. Genau: 289 + 48 = 337 €, es bleiben 13 €."
                },
                {
                    "id": "sachk3l2u_schwer_4",
                    "category": "kurs_sach_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "multiplikation_division_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Jonas hat 12 € und spart jede Woche 4 € dazu. Nach wie vielen Wochen hat er 40 €?",
                    "answers": [
                        "7 Wochen",
                        "10 Wochen",
                        "3 Wochen",
                        "28 Wochen"
                    ],
                    "correct": 0,
                    "explanation": "Es fehlen 40 € − 12 € = 28 €. 28 : 4 = 7 Wochen.",
                    "grafik": "<svg viewBox='0 0 290 76' style='width:100%;max-width:290px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='278' height='32' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='70' height='64' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='278' height='64' fill='none' stroke='#a78bfa' stroke-width='2'/><line x1='6' y1='38' x2='284' y2='38' stroke='#a78bfa' stroke-width='1'/><line x1='76' y1='6' x2='76' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='132' y1='6' x2='132' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='188' y1='6' x2='188' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='244' y1='6' x2='244' y2='70' stroke='#a78bfa' stroke-width='1'/><text x='41' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Woche</text><text x='104' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>0</text><text x='160' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>1</text><text x='216' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>2</text><text x='264' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>…</text><text x='41' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Geld</text><text x='104' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>12 €</text><text x='160' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>16 €</text><text x='216' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>20 €</text><text x='264' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>…</text></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "sachk3l2_test_1",
                "category": "kurs_sach_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "multiplikation_division_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "1 Heft kostet 2 €. Wie viel kosten 7 Hefte?",
                "answers": [
                    "14 €",
                    "9 €",
                    "12 €",
                    "16 €"
                ],
                "correct": 0,
                "explanation": "7 Hefte zu je 2 €: 7 · 2 € = 14 €.",
                "grafik": "<svg viewBox='0 0 298 76' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='286' height='32' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='70' height='64' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='286' height='64' fill='none' stroke='#a78bfa' stroke-width='2'/><line x1='6' y1='38' x2='292' y2='38' stroke='#a78bfa' stroke-width='1'/><line x1='76' y1='6' x2='76' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='130' y1='6' x2='130' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='184' y1='6' x2='184' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='238' y1='6' x2='238' y2='70' stroke='#a78bfa' stroke-width='1'/><text x='41' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Hefte</text><text x='103' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>1</text><text x='157' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>2</text><text x='211' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>3</text><text x='265' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>7</text><text x='41' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Preis</text><text x='103' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>2 €</text><text x='157' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>4 €</text><text x='211' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>6 €</text><text x='265' y='59' font-size='14' fill='#f59e0b' text-anchor='middle' font-weight='bold' font-family='sans-serif'>?</text></svg>"
            },
            {
                "id": "sachk3l2_test_2",
                "category": "kurs_sach_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "multiplikation_division_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Mia geht zur Schule, dann zum Sportplatz und denselben Weg zurück. Wie weit ist das?",
                "answers": [
                    "1220 m",
                    "610 m",
                    "1030 m",
                    "800 m"
                ],
                "correct": 0,
                "explanation": "Hin: 420 m + 190 m = 610 m. Zurück noch einmal 610 m. 610 + 610 = 1220 m.",
                "grafik": "<svg viewBox='0 0 340 104' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='60' x2='300' y2='60' stroke='#94a3b8' stroke-width='3' stroke-dasharray='8 5'/><circle cx='40' cy='60' r='9' fill='#38bdf8'/><text x='40' y='92' font-size='13' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Haus</text><circle cx='180' cy='60' r='9' fill='#a78bfa'/><text x='180' y='92' font-size='13' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Schule</text><circle cx='300' cy='60' r='9' fill='#10b981'/><text x='300' y='92' font-size='13' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Sportplatz</text><text x='110' y='48' font-size='14' fill='#f59e0b' text-anchor='middle' font-weight='bold' font-family='sans-serif'>420 m</text><text x='240' y='48' font-size='14' fill='#f59e0b' text-anchor='middle' font-weight='bold' font-family='sans-serif'>190 m</text></svg>"
            },
            {
                "id": "sachk3l2_test_3",
                "category": "kurs_sach_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "multiplikation_division_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Überschlag passt am besten zu 512 − 189?",
                "answers": [
                    "500 − 200",
                    "500 − 100",
                    "600 − 200",
                    "600 − 100"
                ],
                "correct": 0,
                "explanation": "512 liegt nahe bei 500, 189 nahe bei 200. Also 500 − 200 = 300."
            },
            {
                "id": "sachk3l2_test_4",
                "category": "kurs_sach_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "multiplikation_division_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Kinder mögen Fußball mehr als Turnen?",
                "answers": [
                    "5 Kinder",
                    "13 Kinder",
                    "4 Kinder",
                    "3 Kinder"
                ],
                "correct": 0,
                "explanation": "In der Tabelle: Fußball 9, Turnen 4. 9 − 4 = 5 Kinder mehr.",
                "grafik": "<svg viewBox='0 0 232 172' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='220' height='32' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='130' height='160' fill='rgba(167,139,250,0.3)'/><rect x='6' y='6' width='220' height='160' fill='none' stroke='#a78bfa' stroke-width='2'/><line x1='6' y1='38' x2='226' y2='38' stroke='#a78bfa' stroke-width='1'/><line x1='6' y1='70' x2='226' y2='70' stroke='#a78bfa' stroke-width='1'/><line x1='6' y1='102' x2='226' y2='102' stroke='#a78bfa' stroke-width='1'/><line x1='6' y1='134' x2='226' y2='134' stroke='#a78bfa' stroke-width='1'/><line x1='136' y1='6' x2='136' y2='166' stroke='#a78bfa' stroke-width='1'/><text x='71' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Sport</text><text x='181' y='27' font-size='14' fill='#e5e7eb' text-anchor='middle' font-weight='bold' font-family='sans-serif'>Kinder</text><text x='71' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Fußball</text><text x='181' y='59' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>9</text><text x='71' y='91' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Schwimmen</text><text x='181' y='91' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>6</text><text x='71' y='123' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Turnen</text><text x='181' y='123' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>4</text><text x='71' y='155' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>Radfahren</text><text x='181' y='155' font-size='14' fill='#e5e7eb' text-anchor='middle' font-family='sans-serif'>5</text></svg>"
            },
            {
                "id": "sachk3l2_test_5",
                "category": "kurs_sach_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "multiplikation_division_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Finn kauft 4 Packungen mit je 6 Flaschen. 9 Flaschen werden getrunken. Wie viele bleiben?",
                "answers": [
                    "15 Flaschen",
                    "1 Flasche",
                    "33 Flaschen",
                    "24 Flaschen"
                ],
                "correct": 0,
                "explanation": "1. Schritt: 4 · 6 = 24 Flaschen. 2. Schritt: 24 − 9 = 15 Flaschen."
            },
            {
                "id": "sachk3l2_test_6",
                "category": "kurs_sach_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "multiplikation_division_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Lea rechnet: 6 Kisten mit je 48 Äpfeln sind 2880 Äpfel. Was zeigt der Überschlag?",
                "answers": [
                    "Falsch, etwa 300",
                    "Richtig so",
                    "Falsch, etwa 3000",
                    "Falsch, etwa 30"
                ],
                "correct": 0,
                "explanation": "Überschlag: 6 · 50 = 300. 2880 ist viel zu groß. Richtig ist 6 · 48 = 288."
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
