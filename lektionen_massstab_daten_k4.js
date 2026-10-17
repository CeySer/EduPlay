// Maßstab und Pläne / Daten und Zufall - Klasse 4 Mathe
// 2 Kurse mit je 2 Lektionen. topic: geometrie_k4 bzw. groessen_daten_k4.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [{"id": "massstab_k4", "title": "Maßstab und Pläne", "icon": "🗺️", "grade": 4, "subject": "mathe", "beschreibung": "Maßstab 1 : 100 und 2 : 1 verstehen, Zimmerpläne mit Raster und Wege auf Karten lesen"}, {"id": "daten_zufall_k4", "title": "Daten und Zufall", "icon": "📊", "grade": 4, "subject": "mathe", "beschreibung": "Strichlisten, Tabellen und Säulendiagramme lesen; sicher, möglich, unmöglich und Gewinnchancen"}];
    const extraLektionen = [
    {
        "id": "massstab_k4_l1",
        "kurs": "massstab_k4",
        "order": 1,
        "icon": "🔍",
        "title": "Was ein Maßstab bedeutet",
        "kurz": "1 : 100, 2 : 1 – vom Plan zur Wirklichkeit und zurück",
        "erklaerung": {
            "intro": "Ein <b>Plan</b> zeigt Dinge viel kleiner, als sie wirklich sind. Der <b>Maßstab</b> sagt dir, wie viel kleiner. <b>1 : 100</b> heißt: 1 cm im Plan sind 100 cm = 1 m in echt. Bei <b>2 : 1</b> ist das Bild doppelt so groß wie in echt – das ist eine <b>Vergrößerung</b>.",
            "merksatz": "Vom Plan zur Wirklichkeit rechnest du mal der Maßstabszahl, von der Wirklichkeit zum Plan geteilt durch sie.",
            "beispiele": [
                "Maßstab 1 : 100: Der Tisch ist im Plan 2 cm lang. In echt: 2 · 100 cm = 200 cm = 2 m.<svg viewBox='0 0 256 98' style='width:100%;max-width:256px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='246' y='15' text-anchor='end' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Maßstab 1 : 100</text><rect x='20' y='26' width='72' height='20' rx='2' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='56' y='40' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Tisch</text><rect x='10' y='52' width='236' height='38' rx='4' fill='rgba(245,158,11,0.15)' stroke='#f59e0b' stroke-width='2'/><path d='M20 52v12M38 52v7M56 52v12M74 52v7M92 52v12M110 52v7M128 52v12M146 52v7M164 52v12M182 52v7M200 52v12M218 52v7M236 52v12' stroke='#e5e7eb' stroke-width='1.2'/><g font-size='11' fill='#e5e7eb' font-family='sans-serif' text-anchor='middle'><text x='20' y='80'>0</text><text x='56' y='80'>1</text><text x='92' y='80'>2</text><text x='128' y='80'>3</text><text x='164' y='80'>4</text><text x='200' y='80'>5</text><text x='236' y='80'>6</text></g><text x='242' y='87' text-anchor='end' font-size='9' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>",
                "Maßstab 1 : 50: Ein Bett ist in echt 2 m = 200 cm lang. Im Plan: 200 cm : 50 = 4 cm.",
                "Maßstab 2 : 1: Ein Marienkäfer ist 5 mm lang. Im Bild ist er 2 · 5 mm = 10 mm = 1 cm lang.<svg viewBox='0 0 260 124' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='60' r='12' fill='rgba(244,63,94,0.25)' stroke='#f43f5e' stroke-width='2'/><line x1='60' y1='48' x2='60' y2='72' stroke='#0f172a' stroke-width='1.5'/><circle cx='60' cy='44.4' r='4.8' fill='#94a3b8'/><circle cx='54.6' cy='58.8' r='1.8' fill='#0f172a'/><circle cx='65.4' cy='58.8' r='1.8' fill='#0f172a'/><circle cx='55.2' cy='65.4' r='1.8' fill='#0f172a'/><circle cx='64.8' cy='65.4' r='1.8' fill='#0f172a'/><text x='60' y='112' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>in echt</text><circle cx='190' cy='60' r='24' fill='rgba(244,63,94,0.25)' stroke='#f43f5e' stroke-width='2'/><line x1='190' y1='36' x2='190' y2='84' stroke='#0f172a' stroke-width='1.5'/><circle cx='190' cy='28.8' r='9.6' fill='#94a3b8'/><circle cx='179.2' cy='57.6' r='3.6' fill='#0f172a'/><circle cx='200.8' cy='57.6' r='3.6' fill='#0f172a'/><circle cx='180.4' cy='70.8' r='3.6' fill='#0f172a'/><circle cx='199.6' cy='70.8' r='3.6' fill='#0f172a'/><text x='190' y='112' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>im Bild 2 : 1</text></svg>"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "massstabk4l1u_leicht_1",
                    "category": "kurs_massstab_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Maßstab 1 : 100. Was bedeutet 1 cm im Plan?",
                    "answers": [
                        "1 m in echt",
                        "100 m in echt",
                        "10 cm in echt",
                        "1 cm in echt"
                    ],
                    "correct": 0,
                    "explanation": "1 cm im Plan sind 100 cm in echt. 100 cm sind genau 1 m.",
                    "grafik": "<svg viewBox='0 0 256 98' style='width:100%;max-width:256px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='246' y='15' text-anchor='end' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Maßstab 1 : 100</text><rect x='20' y='26' width='36' height='20' rx='2' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='10' y='52' width='236' height='38' rx='4' fill='rgba(245,158,11,0.15)' stroke='#f59e0b' stroke-width='2'/><path d='M20 52v12M38 52v7M56 52v12M74 52v7M92 52v12M110 52v7M128 52v12M146 52v7M164 52v12M182 52v7M200 52v12M218 52v7M236 52v12' stroke='#e5e7eb' stroke-width='1.2'/><g font-size='11' fill='#e5e7eb' font-family='sans-serif' text-anchor='middle'><text x='20' y='80'>0</text><text x='56' y='80'>1</text><text x='92' y='80'>2</text><text x='128' y='80'>3</text><text x='164' y='80'>4</text><text x='200' y='80'>5</text><text x='236' y='80'>6</text></g><text x='242' y='87' text-anchor='end' font-size='9' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
                },
                {
                    "id": "massstabk4l1u_leicht_2",
                    "category": "kurs_massstab_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Maßstab 1 : 100. Der Schrank ist im Plan 3 cm breit. Wie breit ist er in echt?",
                    "answers": [
                        "3 m",
                        "30 cm",
                        "300 m",
                        "103 cm"
                    ],
                    "correct": 0,
                    "explanation": "3 · 100 cm = 300 cm. Das sind 3 m.",
                    "grafik": "<svg viewBox='0 0 256 98' style='width:100%;max-width:256px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='246' y='15' text-anchor='end' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Maßstab 1 : 100</text><rect x='20' y='26' width='108' height='20' rx='2' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='74' y='40' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Schrank</text><rect x='10' y='52' width='236' height='38' rx='4' fill='rgba(245,158,11,0.15)' stroke='#f59e0b' stroke-width='2'/><path d='M20 52v12M38 52v7M56 52v12M74 52v7M92 52v12M110 52v7M128 52v12M146 52v7M164 52v12M182 52v7M200 52v12M218 52v7M236 52v12' stroke='#e5e7eb' stroke-width='1.2'/><g font-size='11' fill='#e5e7eb' font-family='sans-serif' text-anchor='middle'><text x='20' y='80'>0</text><text x='56' y='80'>1</text><text x='92' y='80'>2</text><text x='128' y='80'>3</text><text x='164' y='80'>4</text><text x='200' y='80'>5</text><text x='236' y='80'>6</text></g><text x='242' y='87' text-anchor='end' font-size='9' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
                },
                {
                    "id": "massstabk4l1u_leicht_3",
                    "category": "kurs_massstab_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ein Bild hat den Maßstab 2 : 1. Wie groß ist es im Vergleich zu echt?",
                    "answers": [
                        "doppelt so groß",
                        "halb so groß",
                        "genauso groß",
                        "2 cm größer"
                    ],
                    "correct": 0,
                    "explanation": "Bei 2 : 1 sind 2 cm im Bild nur 1 cm in echt. Das Bild ist also doppelt so groß – eine Vergrößerung."
                },
                {
                    "id": "massstabk4l1u_leicht_4",
                    "category": "kurs_massstab_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Maßstab 1 : 10. Der Stift ist im Bild 1 cm lang. Wie lang ist er in echt?",
                    "answers": [
                        "10 cm",
                        "1 cm",
                        "100 cm",
                        "11 cm"
                    ],
                    "correct": 0,
                    "explanation": "Bei 1 : 10 ist alles in echt 10-mal so lang: 1 cm · 10 = 10 cm.",
                    "grafik": "<svg viewBox='0 0 256 98' style='width:100%;max-width:256px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='246' y='15' text-anchor='end' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Maßstab 1 : 10</text><rect x='20' y='26' width='36' height='20' rx='2' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='62' y='40' text-anchor='start' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Stift</text><rect x='10' y='52' width='236' height='38' rx='4' fill='rgba(245,158,11,0.15)' stroke='#f59e0b' stroke-width='2'/><path d='M20 52v12M38 52v7M56 52v12M74 52v7M92 52v12M110 52v7M128 52v12M146 52v7M164 52v12M182 52v7M200 52v12M218 52v7M236 52v12' stroke='#e5e7eb' stroke-width='1.2'/><g font-size='11' fill='#e5e7eb' font-family='sans-serif' text-anchor='middle'><text x='20' y='80'>0</text><text x='56' y='80'>1</text><text x='92' y='80'>2</text><text x='128' y='80'>3</text><text x='164' y='80'>4</text><text x='200' y='80'>5</text><text x='236' y='80'>6</text></g><text x='242' y='87' text-anchor='end' font-size='9' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "massstabk4l1u_mittel_1",
                    "category": "kurs_massstab_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Maßstab 1 : 100. Das Zimmer ist in echt 4 m lang. Wie lang ist es im Plan?",
                    "answers": [
                        "4 cm",
                        "40 cm",
                        "400 cm",
                        "4 mm"
                    ],
                    "correct": 0,
                    "explanation": "4 m = 400 cm. Im Plan: 400 cm : 100 = 4 cm.",
                    "grafik": "<svg viewBox='0 0 240 142' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='30' width='160' height='80' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2.5'/><text x='120' y='76' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Zimmer</text><line x1='40' y1='20' x2='200' y2='20' stroke='#f59e0b' stroke-width='1.5'/><line x1='40' y1='15' x2='40' y2='25' stroke='#f59e0b' stroke-width='1.5'/><line x1='200' y1='15' x2='200' y2='25' stroke='#f59e0b' stroke-width='1.5'/><text x='120' y='14' text-anchor='middle' font-size='12' font-weight='700' fill='#f59e0b' font-family='sans-serif'>in echt: 4 m</text><text x='120' y='132' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Plan im Maßstab 1 : 100</text></svg>"
                },
                {
                    "id": "massstabk4l1u_mittel_2",
                    "category": "kurs_massstab_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Maßstab 1 : 50. Der Tisch ist im Plan 3 cm lang. Wie lang ist er in echt?",
                    "answers": [
                        "150 cm",
                        "53 cm",
                        "15 cm",
                        "300 cm"
                    ],
                    "correct": 0,
                    "explanation": "Bei 1 : 50 ist 1 cm im Plan 50 cm in echt. 3 · 50 cm = 150 cm.",
                    "grafik": "<svg viewBox='0 0 256 98' style='width:100%;max-width:256px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='246' y='15' text-anchor='end' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Maßstab 1 : 50</text><rect x='20' y='26' width='108' height='20' rx='2' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='74' y='40' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Tisch</text><rect x='10' y='52' width='236' height='38' rx='4' fill='rgba(245,158,11,0.15)' stroke='#f59e0b' stroke-width='2'/><path d='M20 52v12M38 52v7M56 52v12M74 52v7M92 52v12M110 52v7M128 52v12M146 52v7M164 52v12M182 52v7M200 52v12M218 52v7M236 52v12' stroke='#e5e7eb' stroke-width='1.2'/><g font-size='11' fill='#e5e7eb' font-family='sans-serif' text-anchor='middle'><text x='20' y='80'>0</text><text x='56' y='80'>1</text><text x='92' y='80'>2</text><text x='128' y='80'>3</text><text x='164' y='80'>4</text><text x='200' y='80'>5</text><text x='236' y='80'>6</text></g><text x='242' y='87' text-anchor='end' font-size='9' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
                },
                {
                    "id": "massstabk4l1u_mittel_3",
                    "category": "kurs_massstab_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ein Käfer ist 4 mm lang. Wie lang ist er im Bild mit Maßstab 2 : 1?",
                    "answers": [
                        "8 mm",
                        "2 mm",
                        "6 mm",
                        "4 cm"
                    ],
                    "correct": 0,
                    "explanation": "2 : 1 ist eine Vergrößerung auf das Doppelte: 2 · 4 mm = 8 mm."
                },
                {
                    "id": "massstabk4l1u_mittel_4",
                    "category": "kurs_massstab_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Im Plan steht: in echt 500 cm. Wie viele Meter sind das?",
                    "answers": [
                        "5 m",
                        "50 m",
                        "500 m",
                        "0,5 m"
                    ],
                    "correct": 0,
                    "explanation": "100 cm sind 1 m. 500 cm sind deshalb 5 m."
                }
            ],
            "schwer": [
                {
                    "id": "massstabk4l1u_schwer_1",
                    "category": "kurs_massstab_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Schrank ist in echt 150 cm hoch, im Plan 3 cm. Welcher Maßstab ist das?",
                    "answers": [
                        "1 : 50",
                        "1 : 100",
                        "1 : 150",
                        "1 : 3"
                    ],
                    "correct": 0,
                    "explanation": "150 cm : 3 = 50, also ist 1 cm im Plan 50 cm in echt: 1 : 50.",
                    "grafik": "<svg viewBox='0 0 256 98' style='width:100%;max-width:256px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='246' y='15' text-anchor='end' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Maßstab ?</text><rect x='20' y='26' width='108' height='20' rx='2' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='74' y='40' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Schrank</text><rect x='10' y='52' width='236' height='38' rx='4' fill='rgba(245,158,11,0.15)' stroke='#f59e0b' stroke-width='2'/><path d='M20 52v12M38 52v7M56 52v12M74 52v7M92 52v12M110 52v7M128 52v12M146 52v7M164 52v12M182 52v7M200 52v12M218 52v7M236 52v12' stroke='#e5e7eb' stroke-width='1.2'/><g font-size='11' fill='#e5e7eb' font-family='sans-serif' text-anchor='middle'><text x='20' y='80'>0</text><text x='56' y='80'>1</text><text x='92' y='80'>2</text><text x='128' y='80'>3</text><text x='164' y='80'>4</text><text x='200' y='80'>5</text><text x='236' y='80'>6</text></g><text x='242' y='87' text-anchor='end' font-size='9' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
                },
                {
                    "id": "massstabk4l1u_schwer_2",
                    "category": "kurs_massstab_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Maßstab 1 : 20. Die Tür ist in echt 80 cm breit. Wie breit ist sie im Plan?",
                    "answers": [
                        "4 cm",
                        "40 cm",
                        "16 cm",
                        "60 cm"
                    ],
                    "correct": 0,
                    "explanation": "Von echt zum Plan teilst du: 80 cm : 20 = 4 cm."
                },
                {
                    "id": "massstabk4l1u_schwer_3",
                    "category": "kurs_massstab_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Maßstab 1 : 100. Wie lang und breit ist dieser Raum in echt?",
                    "answers": [
                        "5 m und 3 m",
                        "50 cm und 30 cm",
                        "50 m und 30 m",
                        "5 cm und 3 cm"
                    ],
                    "correct": 0,
                    "explanation": "5 cm · 100 = 500 cm = 5 m und 3 cm · 100 = 300 cm = 3 m.",
                    "grafik": "<svg viewBox='0 0 260 158' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M30 26v102M64 26v102M98 26v102M132 26v102M166 26v102M200 26v102M30 26h170M30 60h170M30 94h170M30 128h170' stroke='#94a3b8' stroke-width='0.6' opacity='0.6'/><rect x='30' y='26' width='170' height='102' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5'/><text x='115' y='81' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Raum</text><line x1='30' y1='16' x2='200' y2='16' stroke='#f59e0b' stroke-width='1.5'/><line x1='30' y1='11' x2='30' y2='21' stroke='#f59e0b' stroke-width='1.5'/><line x1='200' y1='11' x2='200' y2='21' stroke='#f59e0b' stroke-width='1.5'/><text x='115' y='11' text-anchor='middle' font-size='12' font-weight='700' fill='#f59e0b' font-family='sans-serif'>5 cm</text><line x1='212' y1='26' x2='212' y2='128' stroke='#f59e0b' stroke-width='1.5'/><line x1='207' y1='26' x2='217' y2='26' stroke='#f59e0b' stroke-width='1.5'/><line x1='207' y1='128' x2='217' y2='128' stroke='#f59e0b' stroke-width='1.5'/><text x='220' y='81' text-anchor='start' font-size='12' font-weight='700' fill='#f59e0b' font-family='sans-serif'>3 cm</text><text x='30' y='150' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Maßstab 1 : 100</text></svg>"
                },
                {
                    "id": "massstabk4l1u_schwer_4",
                    "category": "kurs_massstab_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Eine Ameise ist 6 mm lang. Im Bild ist sie 3 cm lang. Welcher Maßstab?",
                    "answers": [
                        "5 : 1",
                        "1 : 5",
                        "2 : 1",
                        "3 : 1"
                    ],
                    "correct": 0,
                    "explanation": "3 cm = 30 mm. 30 mm : 6 mm = 5, das Bild ist 5-mal so groß: 5 : 1."
                }
            ]
        },
        "test": [
            {
                "id": "massstabk4l1_test_1",
                "category": "kurs_massstab_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Maßstab 1 : 100. Die Küche ist im Plan 6 cm lang. Wie lang ist sie in echt?",
                "answers": [
                    "6 m",
                    "60 cm",
                    "600 m",
                    "106 cm"
                ],
                "correct": 0,
                "explanation": "6 · 100 cm = 600 cm. Das sind 6 m.",
                "grafik": "<svg viewBox='0 0 292 98' style='width:100%;max-width:292px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='282' y='15' text-anchor='end' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Maßstab 1 : 100</text><rect x='20' y='26' width='216' height='20' rx='2' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='128' y='40' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Küche</text><rect x='10' y='52' width='272' height='38' rx='4' fill='rgba(245,158,11,0.15)' stroke='#f59e0b' stroke-width='2'/><path d='M20 52v12M38 52v7M56 52v12M74 52v7M92 52v12M110 52v7M128 52v12M146 52v7M164 52v12M182 52v7M200 52v12M218 52v7M236 52v12M254 52v7M272 52v12' stroke='#e5e7eb' stroke-width='1.2'/><g font-size='11' fill='#e5e7eb' font-family='sans-serif' text-anchor='middle'><text x='20' y='80'>0</text><text x='56' y='80'>1</text><text x='92' y='80'>2</text><text x='128' y='80'>3</text><text x='164' y='80'>4</text><text x='200' y='80'>5</text><text x='236' y='80'>6</text><text x='272' y='80'>7</text></g><text x='278' y='87' text-anchor='end' font-size='9' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
            },
            {
                "id": "massstabk4l1_test_2",
                "category": "kurs_massstab_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Maßstab 1 : 50. Das Sofa ist in echt 3 m lang. Wie lang ist es im Plan?",
                "answers": [
                    "6 cm",
                    "60 cm",
                    "3 cm",
                    "6 mm"
                ],
                "correct": 0,
                "explanation": "3 m = 300 cm. 300 cm : 50 = 6 cm."
            },
            {
                "id": "massstabk4l1_test_3",
                "category": "kurs_massstab_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was bedeutet der Maßstab 1 : 1000?",
                "answers": [
                    "1 cm sind 10 m",
                    "1 cm sind 1000 m",
                    "1 cm sind 100 m",
                    "1 cm sind 1 m"
                ],
                "correct": 0,
                "explanation": "1 cm im Plan sind 1000 cm in echt. 1000 cm sind 10 m."
            },
            {
                "id": "massstabk4l1_test_4",
                "category": "kurs_massstab_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Maßstab 3 : 1. Eine Schraube ist in echt 2 cm lang. Wie lang ist sie im Bild?",
                "answers": [
                    "6 cm",
                    "5 cm",
                    "2 cm",
                    "3 cm"
                ],
                "correct": 0,
                "explanation": "3 : 1 heißt dreimal so groß: 3 · 2 cm = 6 cm."
            },
            {
                "id": "massstabk4l1_test_5",
                "category": "kurs_massstab_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Maßstab ist eine Vergrößerung?",
                "answers": [
                    "2 : 1",
                    "1 : 2",
                    "1 : 1",
                    "1 : 100"
                ],
                "correct": 0,
                "explanation": "Bei 2 : 1 ist das Bild doppelt so groß wie in echt. Bei 1 : 2 und 1 : 100 wird verkleinert, bei 1 : 1 bleibt alles gleich."
            },
            {
                "id": "massstabk4l1_test_6",
                "category": "kurs_massstab_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Garten ist 12 m lang. Wie lang ist er im Plan mit Maßstab 1 : 200?",
                "answers": [
                    "6 cm",
                    "60 cm",
                    "12 cm",
                    "24 cm"
                ],
                "correct": 0,
                "explanation": "12 m = 1200 cm. 1200 cm : 200 = 6 cm."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "plaene_k4_l2",
        "kurs": "massstab_k4",
        "order": 2,
        "icon": "🗺️",
        "title": "Pläne und Karten lesen",
        "kurz": "Zimmerpläne mit Raster, Wege auf Karten mit 1 : 10 000 und 1 : 100 000",
        "erklaerung": {
            "intro": "Auf einem <b>Zimmerplan</b> hilft oft ein <b>Raster</b>: Jedes Kästchen steht z. B. für 1 m. Auf <b>Karten</b> steht der Maßstab meist unten. <b>1 : 10 000</b> heißt: 1 cm auf der Karte sind 100 m. <b>1 : 100 000</b> heißt: 1 cm auf der Karte ist 1 km.",
            "merksatz": "Erst im Plan messen oder Kästchen zählen, dann mit dem Maßstab in echte Längen umrechnen.",
            "beispiele": [
                "Raster mit 1 Kästchen = 1 m: Das Zimmer ist 5 Kästchen lang und 4 Kästchen breit, also 5 m lang und 4 m breit.<svg viewBox='0 0 240 176' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M30 26v120M60 26v120M90 26v120M120 26v120M150 26v120M180 26v120M30 26h150M30 56h150M30 86h150M30 116h150M30 146h150' stroke='#94a3b8' stroke-width='0.6' opacity='0.6'/><rect x='30' y='26' width='150' height='120' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5'/><text x='105' y='90' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Zimmer</text><rect x='30' y='26' width='60' height='30' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2.5'/><text x='60' y='45' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Bett</text><line x1='30' y1='16' x2='180' y2='16' stroke='#f59e0b' stroke-width='1.5'/><line x1='30' y1='11' x2='30' y2='21' stroke='#f59e0b' stroke-width='1.5'/><line x1='180' y1='11' x2='180' y2='21' stroke='#f59e0b' stroke-width='1.5'/><text x='105' y='11' text-anchor='middle' font-size='12' font-weight='700' fill='#f59e0b' font-family='sans-serif'>5 m</text><line x1='192' y1='26' x2='192' y2='146' stroke='#f59e0b' stroke-width='1.5'/><line x1='187' y1='26' x2='197' y2='26' stroke='#f59e0b' stroke-width='1.5'/><line x1='187' y1='146' x2='197' y2='146' stroke='#f59e0b' stroke-width='1.5'/><text x='200' y='90' text-anchor='start' font-size='12' font-weight='700' fill='#f59e0b' font-family='sans-serif'>4 m</text><text x='30' y='168' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>1 Kästchen = 1 m</text></svg>",
                "Karte 1 : 10 000: Der Schulweg ist 3 cm lang. In echt: 3 · 100 m = 300 m.<svg viewBox='0 0 300 130' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='4' width='292' height='122' rx='6' fill='rgba(16,185,129,0.08)' stroke='#94a3b8' stroke-width='1'/><polyline points='40,70 130,70' fill='none' stroke='#38bdf8' stroke-width='4' stroke-linejoin='round' stroke-linecap='round'/><text x='85' y='60' text-anchor='middle' font-size='12' font-weight='700' fill='#38bdf8' font-family='sans-serif'>3 cm</text><circle cx='40' cy='70' r='6' fill='#e5e7eb' stroke='#0f172a' stroke-width='1.5'/><text x='40' y='94' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Haus</text><circle cx='130' cy='70' r='6' fill='#e5e7eb' stroke='#0f172a' stroke-width='1.5'/><text x='130' y='94' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Schule</text><text x='288' y='118' text-anchor='end' font-size='11' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Maßstab 1 : 10 000</text></svg>",
                "Karte 1 : 100 000: Die Nachbarstadt ist 7 cm entfernt. In echt: 7 · 1 km = 7 km."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "plaenek4l2u_leicht_1",
                    "category": "kurs_plaene_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ein Kästchen ist 1 m. Wie lang ist das Zimmer in echt?",
                    "answers": [
                        "6 m",
                        "4 m",
                        "10 m",
                        "24 m"
                    ],
                    "correct": 0,
                    "explanation": "Das Zimmer ist 6 Kästchen lang. 6 · 1 m = 6 m.",
                    "grafik": "<svg viewBox='0 0 218 168' style='width:100%;max-width:218px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M30 26v112M58 26v112M86 26v112M114 26v112M142 26v112M170 26v112M198 26v112M30 26h168M30 54h168M30 82h168M30 110h168M30 138h168' stroke='#94a3b8' stroke-width='0.6' opacity='0.6'/><rect x='30' y='26' width='168' height='112' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5'/><text x='114' y='86' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Zimmer</text><text x='30' y='160' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>1 Kästchen = 1 m</text></svg>"
                },
                {
                    "id": "plaenek4l2u_leicht_2",
                    "category": "kurs_plaene_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Karte 1 : 10 000. Wie viele Meter sind 1 cm auf der Karte?",
                    "answers": [
                        "100 m",
                        "10 m",
                        "1000 m",
                        "10 000 m"
                    ],
                    "correct": 0,
                    "explanation": "1 cm auf der Karte sind 10 000 cm in echt. 10 000 cm sind 100 m."
                },
                {
                    "id": "plaenek4l2u_leicht_3",
                    "category": "kurs_plaene_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Karte 1 : 100 000. 1 cm auf der Karte ist in echt …",
                    "answers": [
                        "1 km",
                        "100 m",
                        "10 km",
                        "100 km"
                    ],
                    "correct": 0,
                    "explanation": "100 000 cm sind 1000 m, und 1000 m sind 1 km."
                },
                {
                    "id": "plaenek4l2u_leicht_4",
                    "category": "kurs_plaene_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ein Kästchen ist 1 m. Wie lang ist der Flur?",
                    "answers": [
                        "7 m",
                        "8 m",
                        "6 m",
                        "70 cm"
                    ],
                    "correct": 0,
                    "explanation": "Zähle die Kästchen, nicht die Linien: Der Flur ist 7 Kästchen lang, also 7 m.",
                    "grafik": "<svg viewBox='0 0 302 140' style='width:100%;max-width:302px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M30 26v84M58 26v84M86 26v84M114 26v84M142 26v84M170 26v84M198 26v84M226 26v84M254 26v84M282 26v84M30 26h252M30 54h252M30 82h252M30 110h252' stroke='#94a3b8' stroke-width='0.6' opacity='0.6'/><rect x='58' y='54' width='196' height='28' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2.5'/><text x='156' y='72' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Flur</text><text x='30' y='132' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>1 Kästchen = 1 m</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "plaenek4l2u_mittel_1",
                    "category": "kurs_plaene_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Karte 1 : 10 000. Wie lang ist Elifs Schulweg in echt?",
                    "answers": [
                        "400 m",
                        "40 m",
                        "4 km",
                        "4 m"
                    ],
                    "correct": 0,
                    "explanation": "1 cm + 3 cm = 4 cm. Jeder cm sind 100 m: 4 · 100 m = 400 m.",
                    "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='4' width='292' height='152' rx='6' fill='rgba(16,185,129,0.08)' stroke='#94a3b8' stroke-width='1'/><polyline points='40,50 70,50 70,140' fill='none' stroke='#f59e0b' stroke-width='4' stroke-linejoin='round' stroke-linecap='round'/><text x='55' y='40' text-anchor='middle' font-size='12' font-weight='700' fill='#f59e0b' font-family='sans-serif'>1 cm</text><text x='78' y='100' text-anchor='start' font-size='12' font-weight='700' fill='#f59e0b' font-family='sans-serif'>3 cm</text><circle cx='40' cy='50' r='6' fill='#e5e7eb' stroke='#0f172a' stroke-width='1.5'/><text x='30' y='54' text-anchor='end' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Elif</text><circle cx='70' cy='140' r='6' fill='#e5e7eb' stroke='#0f172a' stroke-width='1.5'/><text x='80' y='144' text-anchor='start' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Schule</text><text x='288' y='148' text-anchor='end' font-size='11' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Maßstab 1 : 10 000</text></svg>"
                },
                {
                    "id": "plaenek4l2u_mittel_2",
                    "category": "kurs_plaene_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Karte 1 : 100 000. Von Dorf A nach Dorf B sind es 6 cm. Wie weit in echt?",
                    "answers": [
                        "6 km",
                        "60 km",
                        "600 m",
                        "6 m"
                    ],
                    "correct": 0,
                    "explanation": "Bei 1 : 100 000 ist 1 cm genau 1 km. 6 cm sind also 6 km."
                },
                {
                    "id": "plaenek4l2u_mittel_3",
                    "category": "kurs_plaene_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ein Kästchen ist 1 m. Wie lang ist das Bett in echt?",
                    "answers": [
                        "2 m",
                        "1 m",
                        "3 m",
                        "2 cm"
                    ],
                    "correct": 0,
                    "explanation": "Das Bett ist 2 Kästchen lang, also 2 m. 1 m ist seine Breite.",
                    "grafik": "<svg viewBox='0 0 200 146' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M30 26v90M60 26v90M90 26v90M120 26v90M150 26v90M180 26v90M30 26h150M30 56h150M30 86h150M30 116h150' stroke='#94a3b8' stroke-width='0.6' opacity='0.6'/><rect x='30' y='26' width='150' height='90' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5'/><rect x='30' y='26' width='60' height='30' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2.5'/><text x='60' y='45' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Bett</text><rect x='150' y='26' width='30' height='60' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2.5'/><text x='30' y='138' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>1 Kästchen = 1 m</text></svg>"
                },
                {
                    "id": "plaenek4l2u_mittel_4",
                    "category": "kurs_plaene_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Karte 1 : 10 000. Wie lang ist Bens Weg zum Sportplatz?",
                    "answers": [
                        "500 m",
                        "50 m",
                        "5 km",
                        "600 m"
                    ],
                    "correct": 0,
                    "explanation": "2 cm + 3 cm = 5 cm. 5 · 100 m = 500 m.",
                    "grafik": "<svg viewBox='0 0 300 150' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='4' width='292' height='142' rx='6' fill='rgba(16,185,129,0.08)' stroke='#94a3b8' stroke-width='1'/><polyline points='40,110 40,50 130,50' fill='none' stroke='#10b981' stroke-width='4' stroke-linejoin='round' stroke-linecap='round'/><text x='48' y='84' text-anchor='start' font-size='12' font-weight='700' fill='#10b981' font-family='sans-serif'>2 cm</text><text x='85' y='40' text-anchor='middle' font-size='12' font-weight='700' fill='#10b981' font-family='sans-serif'>3 cm</text><circle cx='40' cy='110' r='6' fill='#e5e7eb' stroke='#0f172a' stroke-width='1.5'/><text x='50' y='114' text-anchor='start' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Ben</text><circle cx='130' cy='50' r='6' fill='#e5e7eb' stroke='#0f172a' stroke-width='1.5'/><text x='140' y='54' text-anchor='start' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Sportplatz</text><text x='288' y='138' text-anchor='end' font-size='11' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Maßstab 1 : 10 000</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "plaenek4l2u_schwer_1",
                    "category": "kurs_plaene_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Karte 1 : 10 000. Um wie viele Meter ist der blaue Weg kürzer als der rote?",
                    "answers": [
                        "200 m",
                        "20 m",
                        "2 km",
                        "1200 m"
                    ],
                    "correct": 0,
                    "explanation": "Rot: 3 cm + 4 cm = 7 cm = 700 m. Blau: 5 cm = 500 m. 700 m − 500 m = 200 m.",
                    "grafik": "<svg viewBox='0 0 300 170' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='4' width='292' height='162' rx='6' fill='rgba(16,185,129,0.08)' stroke='#94a3b8' stroke-width='1'/><polyline points='70,140 70,50 190,50' fill='none' stroke='#f43f5e' stroke-width='4' stroke-linejoin='round' stroke-linecap='round'/><text x='62' y='100' text-anchor='end' font-size='12' font-weight='700' fill='#f43f5e' font-family='sans-serif'>3 cm</text><text x='130' y='40' text-anchor='middle' font-size='12' font-weight='700' fill='#f43f5e' font-family='sans-serif'>4 cm</text><polyline points='70,140 190,50' fill='none' stroke='#38bdf8' stroke-width='4' stroke-linejoin='round' stroke-linecap='round'/><text x='138' y='112' text-anchor='start' font-size='12' font-weight='700' fill='#38bdf8' font-family='sans-serif'>5 cm</text><circle cx='70' cy='140' r='6' fill='#e5e7eb' stroke='#0f172a' stroke-width='1.5'/><text x='80' y='158' text-anchor='start' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Start</text><circle cx='190' cy='50' r='6' fill='#e5e7eb' stroke='#0f172a' stroke-width='1.5'/><text x='200' y='54' text-anchor='start' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Ziel</text><text x='288' y='158' text-anchor='end' font-size='11' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Maßstab 1 : 10 000</text></svg>"
                },
                {
                    "id": "plaenek4l2u_schwer_2",
                    "category": "kurs_plaene_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Radweg ist 12 km lang. Wie lang ist er auf einer Karte 1 : 100 000?",
                    "answers": [
                        "12 cm",
                        "120 cm",
                        "1,2 cm",
                        "12 m"
                    ],
                    "correct": 0,
                    "explanation": "1 km in echt ist 1 cm auf der Karte. 12 km sind also 12 cm."
                },
                {
                    "id": "plaenek4l2u_schwer_3",
                    "category": "kurs_plaene_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Kästchen ist 50 cm. Wie lang ist das Zimmer in echt?",
                    "answers": [
                        "4 m",
                        "8 m",
                        "16 m",
                        "40 cm"
                    ],
                    "correct": 0,
                    "explanation": "Das Zimmer ist 8 Kästchen lang. 8 · 50 cm = 400 cm = 4 m.",
                    "grafik": "<svg viewBox='0 0 242 200' style='width:100%;max-width:242px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M30 26v144M54 26v144M78 26v144M102 26v144M126 26v144M150 26v144M174 26v144M198 26v144M222 26v144M30 26h192M30 50h192M30 74h192M30 98h192M30 122h192M30 146h192M30 170h192' stroke='#94a3b8' stroke-width='0.6' opacity='0.6'/><rect x='30' y='26' width='192' height='144' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5'/><text x='126' y='102' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Zimmer</text><text x='30' y='192' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>1 Kästchen = 50 cm</text></svg>"
                },
                {
                    "id": "plaenek4l2u_schwer_4",
                    "category": "kurs_plaene_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Karte 1 : 10 000. Wie viele cm auf der Karte ist 1 km?",
                    "answers": [
                        "10 cm",
                        "1 cm",
                        "100 cm",
                        "1000 cm"
                    ],
                    "correct": 0,
                    "explanation": "1 km = 1000 m. Jeder cm auf der Karte sind 100 m, also 1000 m : 100 m = 10 cm."
                }
            ]
        },
        "test": [
            {
                "id": "plaenek4l2_test_1",
                "category": "kurs_plaene_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Kästchen ist 1 m. Wie breit ist das Zimmer?",
                "answers": [
                    "3 m",
                    "4 m",
                    "7 m",
                    "12 m"
                ],
                "correct": 0,
                "explanation": "Die Breite ist die kürzere Seite: 3 Kästchen, also 3 m.",
                "grafik": "<svg viewBox='0 0 170 146' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M30 26v90M60 26v90M90 26v90M120 26v90M150 26v90M30 26h120M30 56h120M30 86h120M30 116h120' stroke='#94a3b8' stroke-width='0.6' opacity='0.6'/><rect x='30' y='26' width='120' height='90' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5'/><text x='90' y='75' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Zimmer</text><text x='30' y='138' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>1 Kästchen = 1 m</text></svg>"
            },
            {
                "id": "plaenek4l2_test_2",
                "category": "kurs_plaene_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Karte 1 : 10 000. Der Weg zum See ist 8 cm lang. Wie weit ist das?",
                "answers": [
                    "800 m",
                    "80 m",
                    "8 km",
                    "8 m"
                ],
                "correct": 0,
                "explanation": "Jeder cm sind 100 m: 8 · 100 m = 800 m."
            },
            {
                "id": "plaenek4l2_test_3",
                "category": "kurs_plaene_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Karte 1 : 100 000. Bis zur Stadt sind es 9 cm. Wie weit ist das in echt?",
                "answers": [
                    "9 km",
                    "90 km",
                    "900 m",
                    "90 m"
                ],
                "correct": 0,
                "explanation": "Bei 1 : 100 000 ist 1 cm genau 1 km. 9 cm sind 9 km."
            },
            {
                "id": "plaenek4l2_test_4",
                "category": "kurs_plaene_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Karte 1 : 10 000. Wie viel länger ist Finns Schulweg als Mias?",
                "answers": [
                    "200 m",
                    "20 m",
                    "2 km",
                    "1200 m"
                ],
                "correct": 0,
                "explanation": "Finn: 3 cm + 4 cm = 7 cm = 700 m. Mia: 5 cm = 500 m. Finns Weg ist 200 m länger.",
                "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='4' width='292' height='152' rx='6' fill='rgba(16,185,129,0.08)' stroke='#94a3b8' stroke-width='1'/><polyline points='50,40 200,40' fill='none' stroke='#a78bfa' stroke-width='4' stroke-linejoin='round' stroke-linecap='round'/><text x='125' y='30' text-anchor='middle' font-size='12' font-weight='700' fill='#a78bfa' font-family='sans-serif'>5 cm</text><polyline points='36,130 126,130 200,40' fill='none' stroke='#f59e0b' stroke-width='4' stroke-linejoin='round' stroke-linecap='round'/><text x='81' y='120' text-anchor='middle' font-size='12' font-weight='700' fill='#f59e0b' font-family='sans-serif'>3 cm</text><text x='174' y='96' text-anchor='start' font-size='12' font-weight='700' fill='#f59e0b' font-family='sans-serif'>4 cm</text><circle cx='50' cy='40' r='6' fill='#e5e7eb' stroke='#0f172a' stroke-width='1.5'/><text x='50' y='62' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Mia</text><circle cx='36' cy='130' r='6' fill='#e5e7eb' stroke='#0f172a' stroke-width='1.5'/><text x='36' y='151' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Finn</text><circle cx='200' cy='40' r='6' fill='#e5e7eb' stroke='#0f172a' stroke-width='1.5'/><text x='210' y='44' text-anchor='start' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Schule</text><text x='288' y='148' text-anchor='end' font-size='11' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Maßstab 1 : 10 000</text></svg>"
            },
            {
                "id": "plaenek4l2_test_5",
                "category": "kurs_plaene_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Karte zeigt ein Dorf größer und genauer?",
                "answers": [
                    "1 : 10 000",
                    "1 : 100 000",
                    "beide gleich",
                    "1 : 1 000 000"
                ],
                "correct": 0,
                "explanation": "Bei 1 : 10 000 wird weniger verkleinert als bei 1 : 100 000. Darum siehst du das Dorf größer und mit mehr Einzelheiten."
            },
            {
                "id": "plaenek4l2_test_6",
                "category": "kurs_plaene_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Kästchen sind 2 m. Wie lang ist das Beet?",
                "answers": [
                    "6 m",
                    "3 m",
                    "5 m",
                    "8 m"
                ],
                "correct": 0,
                "explanation": "Das Beet ist 3 Kästchen lang. 3 · 2 m = 6 m.",
                "grafik": "<svg viewBox='0 0 230 184' style='width:100%;max-width:230px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='30' y='16' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Garten</text><path d='M30 34v120M60 34v120M90 34v120M120 34v120M150 34v120M180 34v120M210 34v120M30 34h180M30 64h180M30 94h180M30 124h180M30 154h180' stroke='#94a3b8' stroke-width='0.6' opacity='0.6'/><rect x='60' y='64' width='90' height='30' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2.5'/><text x='105' y='83' text-anchor='middle' font-size='11' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Beet</text><text x='30' y='176' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>1 Kästchen = 2 m</text></svg>"
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "daten_k4_l1",
        "kurs": "daten_zufall_k4",
        "order": 1,
        "icon": "📊",
        "title": "Diagramme lesen",
        "kurz": "Strichliste, Tabelle und Säulendiagramm ablesen und vergleichen",
        "erklaerung": {
            "intro": "Mit <b>Daten</b> beantwortest du Fragen wie „Welcher Sport ist am beliebtesten?“. Zum Zählen hilft eine <b>Strichliste</b>: Der fünfte Strich geht quer durch die vier anderen. In einer <b>Tabelle</b> stehen die Anzahlen geordnet. Im <b>Säulendiagramm</b> zeigt die Höhe jeder Säule die Anzahl. Du liest sie an der <b>Skala</b> ab.",
            "merksatz": "Schau zuerst, in welchen Schritten die Skala zählt (zum Beispiel 2, 5 oder 10), dann lies die Höhe der Säule ab.",
            "beispiele": [
                "Strichliste: Ein Fünferbündel und zwei Striche sind 5 + 2 = 7.<svg viewBox='0 0 270 106' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='18' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Lieblingsobst</text><rect x='10' y='28' width='250' height='64' fill='none' stroke='#94a3b8' stroke-width='1'/><line x1='100' y1='28' x2='100' y2='92' stroke='#94a3b8' stroke-width='1'/><text x='18' y='49' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Apfel</text><path d='M114 35v18M121 35v18M128 35v18M135 35v18M111 50L138 38M154 35v18M161 35v18' stroke='#38bdf8' stroke-width='2' stroke-linecap='round'/><line x1='10' y1='60' x2='260' y2='60' stroke='#94a3b8' stroke-width='1'/><text x='18' y='81' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Banane</text><path d='M114 67v18M121 67v18M128 67v18M135 67v18' stroke='#f59e0b' stroke-width='2' stroke-linecap='round'/></svg>",
                "Säulendiagramm mit Schritten von 2: Die Säule für Hund endet bei 6, also mögen 6 Kinder Hunde am liebsten.<svg viewBox='0 0 300 210' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='16' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Lieblingstier der Klasse 4a</text><line x1='46' y1='170' x2='290' y2='170' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='174' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='46' y1='142' x2='290' y2='142' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='146' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>2</text><line x1='46' y1='114' x2='290' y2='114' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='118' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>4</text><line x1='46' y1='86' x2='290' y2='86' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='90' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>6</text><line x1='46' y1='58' x2='290' y2='58' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='62' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>8</text><line x1='46' y1='30' x2='290' y2='30' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='34' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>10</text><rect x='59.725' y='86' width='33.55' height='84' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='76.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Hund</text><rect x='120.725' y='114' width='33.55' height='56' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='137.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Katze</text><rect x='181.725' y='142' width='33.55' height='28' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='198.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Fisch</text><rect x='242.725' y='58' width='33.55' height='112' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='259.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Hase</text><line x1='46' y1='24' x2='46' y2='170' stroke='#e5e7eb' stroke-width='1.5'/><line x1='46' y1='170' x2='290' y2='170' stroke='#e5e7eb' stroke-width='1.5'/></svg>",
                "Unterschied: Hase 8 Kinder, Katze 4 Kinder. 8 − 4 = 4, also wählten 4 Kinder mehr den Hasen."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "datenk4l1u_leicht_1",
                    "category": "kurs_daten_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele Kinder mögen Äpfel am liebsten?",
                    "answers": [
                        "7 Kinder",
                        "6 Kinder",
                        "2 Kinder",
                        "5 Kinder"
                    ],
                    "correct": 0,
                    "explanation": "Ein Fünferbündel sind 5 Striche, dazu kommen 2 einzelne: 5 + 2 = 7.",
                    "grafik": "<svg viewBox='0 0 270 106' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='18' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Lieblingsobst</text><rect x='10' y='28' width='250' height='64' fill='none' stroke='#94a3b8' stroke-width='1'/><line x1='100' y1='28' x2='100' y2='92' stroke='#94a3b8' stroke-width='1'/><text x='18' y='49' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Apfel</text><path d='M114 35v18M121 35v18M128 35v18M135 35v18M111 50L138 38M154 35v18M161 35v18' stroke='#38bdf8' stroke-width='2' stroke-linecap='round'/><line x1='10' y1='60' x2='260' y2='60' stroke='#94a3b8' stroke-width='1'/><text x='18' y='81' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Birne</text><path d='M114 67v18M121 67v18M128 67v18' stroke='#f59e0b' stroke-width='2' stroke-linecap='round'/></svg>"
                },
                {
                    "id": "datenk4l1u_leicht_2",
                    "category": "kurs_daten_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Tier wurde am häufigsten gewählt?",
                    "answers": [
                        "Hase",
                        "Hund",
                        "Katze",
                        "Fisch"
                    ],
                    "correct": 0,
                    "explanation": "Die Säule für Hase ist am höchsten. Sie reicht bis 8.",
                    "grafik": "<svg viewBox='0 0 300 210' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='16' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Lieblingstier der Klasse 4a</text><line x1='46' y1='170' x2='290' y2='170' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='174' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='46' y1='142' x2='290' y2='142' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='146' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>2</text><line x1='46' y1='114' x2='290' y2='114' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='118' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>4</text><line x1='46' y1='86' x2='290' y2='86' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='90' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>6</text><line x1='46' y1='58' x2='290' y2='58' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='62' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>8</text><line x1='46' y1='30' x2='290' y2='30' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='34' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>10</text><rect x='59.725' y='86' width='33.55' height='84' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='76.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Hund</text><rect x='120.725' y='114' width='33.55' height='56' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='137.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Katze</text><rect x='181.725' y='142' width='33.55' height='28' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='198.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Fisch</text><rect x='242.725' y='58' width='33.55' height='112' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='259.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Hase</text><line x1='46' y1='24' x2='46' y2='170' stroke='#e5e7eb' stroke-width='1.5'/><line x1='46' y1='170' x2='290' y2='170' stroke='#e5e7eb' stroke-width='1.5'/></svg>"
                },
                {
                    "id": "datenk4l1u_leicht_3",
                    "category": "kurs_daten_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele Kinder wählten die Katze?",
                    "answers": [
                        "4",
                        "2",
                        "3",
                        "5"
                    ],
                    "correct": 0,
                    "explanation": "Die Skala zählt in Zweierschritten. Die Säule für Katze endet genau bei der Linie 4.",
                    "grafik": "<svg viewBox='0 0 300 210' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='16' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Lieblingstier der Klasse 4a</text><line x1='46' y1='170' x2='290' y2='170' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='174' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='46' y1='142' x2='290' y2='142' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='146' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>2</text><line x1='46' y1='114' x2='290' y2='114' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='118' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>4</text><line x1='46' y1='86' x2='290' y2='86' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='90' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>6</text><line x1='46' y1='58' x2='290' y2='58' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='62' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>8</text><line x1='46' y1='30' x2='290' y2='30' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='34' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>10</text><rect x='59.725' y='86' width='33.55' height='84' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='76.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Hund</text><rect x='120.725' y='114' width='33.55' height='56' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='137.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Katze</text><rect x='181.725' y='142' width='33.55' height='28' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='198.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Fisch</text><rect x='242.725' y='58' width='33.55' height='112' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='259.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Hase</text><line x1='46' y1='24' x2='46' y2='170' stroke='#e5e7eb' stroke-width='1.5'/><line x1='46' y1='170' x2='290' y2='170' stroke='#e5e7eb' stroke-width='1.5'/></svg>"
                },
                {
                    "id": "datenk4l1u_leicht_4",
                    "category": "kurs_daten_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Farbe wurde am seltensten gewählt?",
                    "answers": [
                        "Grün",
                        "Blau",
                        "Rot",
                        "Gelb"
                    ],
                    "correct": 0,
                    "explanation": "Grün hat mit 4 Stimmen die kleinste Zahl in der Tabelle.",
                    "grafik": "<svg viewBox='0 0 240 150' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='220' height='130' fill='none' stroke='#94a3b8' stroke-width='1'/><rect x='10' y='10' width='220' height='26' fill='rgba(56,189,248,0.25)'/><line x1='140' y1='10' x2='140' y2='140' stroke='#94a3b8' stroke-width='1'/><text x='20' y='28' text-anchor='start' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Lieblingsfarbe</text><text x='186' y='28' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Kinder</text><line x1='10' y1='36' x2='230' y2='36' stroke='#94a3b8' stroke-width='1'/><text x='20' y='54' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Rot</text><text x='186' y='54' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>5</text><line x1='10' y1='62' x2='230' y2='62' stroke='#94a3b8' stroke-width='1'/><text x='20' y='80' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Blau</text><text x='186' y='80' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>9</text><line x1='10' y1='88' x2='230' y2='88' stroke='#94a3b8' stroke-width='1'/><text x='20' y='106' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Grün</text><text x='186' y='106' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>4</text><line x1='10' y1='114' x2='230' y2='114' stroke='#94a3b8' stroke-width='1'/><text x='20' y='132' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Gelb</text><text x='186' y='132' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>6</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "datenk4l1u_mittel_1",
                    "category": "kurs_daten_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viele Kinder spielen am liebsten Fußball?",
                    "answers": [
                        "20 Kinder",
                        "4 Kinder",
                        "15 Kinder",
                        "25 Kinder"
                    ],
                    "correct": 0,
                    "explanation": "Die Skala zählt in Fünferschritten. Die Säule für Fußball endet bei 20.",
                    "grafik": "<svg viewBox='0 0 300 210' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='16' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Lieblingssport</text><line x1='46' y1='170' x2='290' y2='170' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='174' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='46' y1='142' x2='290' y2='142' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='146' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>5</text><line x1='46' y1='114' x2='290' y2='114' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='118' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>10</text><line x1='46' y1='86' x2='290' y2='86' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='90' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>15</text><line x1='46' y1='58' x2='290' y2='58' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='62' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>20</text><line x1='46' y1='30' x2='290' y2='30' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='34' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>25</text><rect x='59.725' y='58' width='33.55' height='112' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='76.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Fußball</text><rect x='120.725' y='114' width='33.55' height='56' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='137.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Tennis</text><rect x='181.725' y='86' width='33.55' height='84' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='198.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Schwimmen</text><rect x='242.725' y='142' width='33.55' height='28' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='259.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Turnen</text><line x1='46' y1='24' x2='46' y2='170' stroke='#e5e7eb' stroke-width='1.5'/><line x1='46' y1='170' x2='290' y2='170' stroke='#e5e7eb' stroke-width='1.5'/></svg>"
                },
                {
                    "id": "datenk4l1u_mittel_2",
                    "category": "kurs_daten_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viele Kinder mehr fahren mit dem Rad als mit dem Bus?",
                    "answers": [
                        "10",
                        "5",
                        "2",
                        "40"
                    ],
                    "correct": 0,
                    "explanation": "Rad: 25 Kinder, Bus: 15 Kinder. 25 − 15 = 10.",
                    "grafik": "<svg viewBox='0 0 300 210' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='16' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>So kommen wir zur Schule</text><line x1='46' y1='170' x2='290' y2='170' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='174' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='46' y1='146.667' x2='290' y2='146.667' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='150.667' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>5</text><line x1='46' y1='123.333' x2='290' y2='123.333' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='127.333' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>10</text><line x1='46' y1='100' x2='290' y2='100' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='104' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>15</text><line x1='46' y1='76.6667' x2='290' y2='76.6667' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='80.6667' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>20</text><line x1='46' y1='53.3333' x2='290' y2='53.3333' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='57.3333' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>25</text><line x1='46' y1='30' x2='290' y2='30' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='34' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>30</text><rect x='59.725' y='100' width='33.55' height='70' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='76.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Bus</text><rect x='120.725' y='53.3333' width='33.55' height='116.667' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='137.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Rad</text><rect x='181.725' y='76.6667' width='33.55' height='93.3333' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='198.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>zu Fuß</text><rect x='242.725' y='123.333' width='33.55' height='46.6667' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='259.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Auto</text><line x1='46' y1='24' x2='46' y2='170' stroke='#e5e7eb' stroke-width='1.5'/><line x1='46' y1='170' x2='290' y2='170' stroke='#e5e7eb' stroke-width='1.5'/></svg>"
                },
                {
                    "id": "datenk4l1u_mittel_3",
                    "category": "kurs_daten_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viele Kinder wurden insgesamt gefragt?",
                    "answers": [
                        "29 Kinder",
                        "26 Kinder",
                        "30 Kinder",
                        "19 Kinder"
                    ],
                    "correct": 0,
                    "explanation": "Erdbeere 11, Schoko 8, Vanille 10. 11 + 8 + 10 = 29.",
                    "grafik": "<svg viewBox='0 0 270 138' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='18' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Lieblingseis</text><rect x='10' y='28' width='250' height='96' fill='none' stroke='#94a3b8' stroke-width='1'/><line x1='100' y1='28' x2='100' y2='124' stroke='#94a3b8' stroke-width='1'/><text x='18' y='49' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Erdbeere</text><path d='M114 35v18M121 35v18M128 35v18M135 35v18M111 50L138 38M154 35v18M161 35v18M168 35v18M175 35v18M151 50L178 38M194 35v18' stroke='#38bdf8' stroke-width='2' stroke-linecap='round'/><line x1='10' y1='60' x2='260' y2='60' stroke='#94a3b8' stroke-width='1'/><text x='18' y='81' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Schoko</text><path d='M114 67v18M121 67v18M128 67v18M135 67v18M111 82L138 70M154 67v18M161 67v18M168 67v18' stroke='#f59e0b' stroke-width='2' stroke-linecap='round'/><line x1='10' y1='92' x2='260' y2='92' stroke='#94a3b8' stroke-width='1'/><text x='18' y='113' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Vanille</text><path d='M114 99v18M121 99v18M128 99v18M135 99v18M111 114L138 102M154 99v18M161 99v18M168 99v18M175 99v18M151 114L178 102' stroke='#a78bfa' stroke-width='2' stroke-linecap='round'/></svg>"
                },
                {
                    "id": "datenk4l1u_mittel_4",
                    "category": "kurs_daten_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Klasse hat doppelt so viele Bücher gelesen wie die 4d?",
                    "answers": [
                        "4a",
                        "4b",
                        "4c",
                        "4d"
                    ],
                    "correct": 0,
                    "explanation": "Die 4d hat 20 Bücher gelesen. Doppelt so viele sind 40 – das ist die 4a.",
                    "grafik": "<svg viewBox='0 0 300 210' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='16' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Gelesene Bücher</text><line x1='46' y1='170' x2='290' y2='170' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='174' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='46' y1='142' x2='290' y2='142' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='146' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>10</text><line x1='46' y1='114' x2='290' y2='114' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='118' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>20</text><line x1='46' y1='86' x2='290' y2='86' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='90' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>30</text><line x1='46' y1='58' x2='290' y2='58' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='62' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>40</text><line x1='46' y1='30' x2='290' y2='30' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='34' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>50</text><rect x='59.725' y='58' width='33.55' height='112' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='76.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>4a</text><rect x='120.725' y='86' width='33.55' height='84' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='137.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>4b</text><rect x='181.725' y='30' width='33.55' height='140' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='198.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>4c</text><rect x='242.725' y='114' width='33.55' height='56' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='259.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>4d</text><line x1='46' y1='24' x2='46' y2='170' stroke='#e5e7eb' stroke-width='1.5'/><line x1='46' y1='170' x2='290' y2='170' stroke='#e5e7eb' stroke-width='1.5'/></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "datenk4l1u_schwer_1",
                    "category": "kurs_daten_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Flaschen wurden am Dienstag gesammelt?",
                    "answers": [
                        "35",
                        "30",
                        "40",
                        "45"
                    ],
                    "correct": 0,
                    "explanation": "Die Säule endet genau in der Mitte zwischen 30 und 40. In der Mitte liegt 35.",
                    "grafik": "<svg viewBox='0 0 300 210' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='16' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Gesammelte Pfandflaschen</text><line x1='46' y1='170' x2='290' y2='170' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='174' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='46' y1='142' x2='290' y2='142' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='146' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>10</text><line x1='46' y1='114' x2='290' y2='114' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='118' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>20</text><line x1='46' y1='86' x2='290' y2='86' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='90' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>30</text><line x1='46' y1='58' x2='290' y2='58' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='62' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>40</text><line x1='46' y1='30' x2='290' y2='30' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='34' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>50</text><rect x='59.725' y='114' width='33.55' height='56' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='76.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Mo</text><rect x='120.725' y='72' width='33.55' height='98' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='137.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Di</text><rect x='181.725' y='58' width='33.55' height='112' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='198.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Mi</text><rect x='242.725' y='128' width='33.55' height='42' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='259.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Do</text><line x1='46' y1='24' x2='46' y2='170' stroke='#e5e7eb' stroke-width='1.5'/><line x1='46' y1='170' x2='290' y2='170' stroke='#e5e7eb' stroke-width='1.5'/></svg>"
                },
                {
                    "id": "datenk4l1u_schwer_2",
                    "category": "kurs_daten_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ben würfelt: 3, 5, 3, 6, 2, 3, 5. Welche Zahl kam am häufigsten?",
                    "answers": [
                        "3",
                        "5",
                        "6",
                        "2"
                    ],
                    "correct": 0,
                    "explanation": "Die 3 kommt dreimal vor, die 5 nur zweimal, 6 und 2 nur einmal."
                },
                {
                    "id": "datenk4l1u_schwer_3",
                    "category": "kurs_daten_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Stücke Schokokuchen wurden mehr verkauft als Apfelkuchen?",
                    "answers": [
                        "5",
                        "4",
                        "6",
                        "19"
                    ],
                    "correct": 0,
                    "explanation": "Schoko: 12 Stücke. Apfel: Die Säule endet zwischen 6 und 8, also 7 Stücke. 12 − 7 = 5.",
                    "grafik": "<svg viewBox='0 0 300 210' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='16' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Verkaufte Kuchenstücke</text><line x1='46' y1='170' x2='290' y2='170' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='174' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='46' y1='150' x2='290' y2='150' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='154' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>2</text><line x1='46' y1='130' x2='290' y2='130' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='134' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>4</text><line x1='46' y1='110' x2='290' y2='110' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='114' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>6</text><line x1='46' y1='90' x2='290' y2='90' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='94' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>8</text><line x1='46' y1='70' x2='290' y2='70' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='74' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>10</text><line x1='46' y1='50' x2='290' y2='50' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='54' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>12</text><line x1='46' y1='30' x2='290' y2='30' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='34' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>14</text><rect x='59.725' y='100' width='33.55' height='70' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='76.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Apfel</text><rect x='120.725' y='70' width='33.55' height='100' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='137.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Käse</text><rect x='181.725' y='50' width='33.55' height='120' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='198.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Schoko</text><rect x='242.725' y='120' width='33.55' height='50' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='259.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Muffin</text><line x1='46' y1='24' x2='46' y2='170' stroke='#e5e7eb' stroke-width='1.5'/><line x1='46' y1='170' x2='290' y2='170' stroke='#e5e7eb' stroke-width='1.5'/></svg>"
                },
                {
                    "id": "datenk4l1u_schwer_4",
                    "category": "kurs_daten_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Mias Skala zählt in Fünferschritten. Wie viele Kästchen hoch wird die Säule für 30?",
                    "answers": [
                        "6",
                        "30",
                        "5",
                        "3"
                    ],
                    "correct": 0,
                    "explanation": "Jedes Kästchen sind 5. 30 : 5 = 6 Kästchen."
                }
            ]
        },
        "test": [
            {
                "id": "datenk4l1_test_1",
                "category": "kurs_daten_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "groessen_daten_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Kinder wählten Verstecken?",
                "answers": [
                    "6 Kinder",
                    "3 Kinder",
                    "5 Kinder",
                    "4 Kinder"
                ],
                "correct": 0,
                "explanation": "Die Skala zählt in Zweierschritten. Die Säule für Verstecken endet bei 6.",
                "grafik": "<svg viewBox='0 0 300 210' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='16' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Lieblingsspiel in der Pause</text><line x1='46' y1='170' x2='290' y2='170' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='174' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='46' y1='146.667' x2='290' y2='146.667' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='150.667' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>2</text><line x1='46' y1='123.333' x2='290' y2='123.333' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='127.333' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>4</text><line x1='46' y1='100' x2='290' y2='100' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='104' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>6</text><line x1='46' y1='76.6667' x2='290' y2='76.6667' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='80.6667' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>8</text><line x1='46' y1='53.3333' x2='290' y2='53.3333' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='57.3333' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>10</text><line x1='46' y1='30' x2='290' y2='30' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='34' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>12</text><rect x='59.725' y='53.3333' width='33.55' height='116.667' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='76.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Fangen</text><rect x='120.725' y='100' width='33.55' height='70' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='137.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Verstecken</text><rect x='181.725' y='123.333' width='33.55' height='46.6667' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='198.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Hüpfen</text><rect x='242.725' y='76.6667' width='33.55' height='93.3333' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='259.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Ball</text><line x1='46' y1='24' x2='46' y2='170' stroke='#e5e7eb' stroke-width='1.5'/><line x1='46' y1='170' x2='290' y2='170' stroke='#e5e7eb' stroke-width='1.5'/></svg>"
            },
            {
                "id": "datenk4l1_test_2",
                "category": "kurs_daten_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "groessen_daten_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Kinder wurden insgesamt gefragt?",
                "answers": [
                    "28",
                    "24",
                    "14",
                    "30"
                ],
                "correct": 0,
                "explanation": "Fangen 10, Verstecken 6, Hüpfen 4, Ball 8. 10 + 6 + 4 + 8 = 28.",
                "grafik": "<svg viewBox='0 0 300 210' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='16' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Lieblingsspiel in der Pause</text><line x1='46' y1='170' x2='290' y2='170' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='174' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='46' y1='146.667' x2='290' y2='146.667' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='150.667' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>2</text><line x1='46' y1='123.333' x2='290' y2='123.333' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='127.333' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>4</text><line x1='46' y1='100' x2='290' y2='100' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='104' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>6</text><line x1='46' y1='76.6667' x2='290' y2='76.6667' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='80.6667' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>8</text><line x1='46' y1='53.3333' x2='290' y2='53.3333' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='57.3333' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>10</text><line x1='46' y1='30' x2='290' y2='30' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='34' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>12</text><rect x='59.725' y='53.3333' width='33.55' height='116.667' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='76.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Fangen</text><rect x='120.725' y='100' width='33.55' height='70' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='137.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Verstecken</text><rect x='181.725' y='123.333' width='33.55' height='46.6667' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='198.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Hüpfen</text><rect x='242.725' y='76.6667' width='33.55' height='93.3333' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='259.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Ball</text><line x1='46' y1='24' x2='46' y2='170' stroke='#e5e7eb' stroke-width='1.5'/><line x1='46' y1='170' x2='290' y2='170' stroke='#e5e7eb' stroke-width='1.5'/></svg>"
            },
            {
                "id": "datenk4l1_test_3",
                "category": "kurs_daten_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "groessen_daten_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele blaue Autos hat Jonas gezählt?",
                "answers": [
                    "12",
                    "10",
                    "14",
                    "7"
                ],
                "correct": 0,
                "explanation": "Zwei Fünferbündel sind 10, dazu 2 einzelne Striche: 10 + 2 = 12.",
                "grafik": "<svg viewBox='0 0 270 138' style='width:100%;max-width:270px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='18' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Autos an der Straße</text><rect x='10' y='28' width='250' height='96' fill='none' stroke='#94a3b8' stroke-width='1'/><line x1='100' y1='28' x2='100' y2='124' stroke='#94a3b8' stroke-width='1'/><text x='18' y='49' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>rot</text><path d='M114 35v18M121 35v18M128 35v18M135 35v18M111 50L138 38M154 35v18M161 35v18' stroke='#38bdf8' stroke-width='2' stroke-linecap='round'/><line x1='10' y1='60' x2='260' y2='60' stroke='#94a3b8' stroke-width='1'/><text x='18' y='81' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>blau</text><path d='M114 67v18M121 67v18M128 67v18M135 67v18M111 82L138 70M154 67v18M161 67v18M168 67v18M175 67v18M151 82L178 70M194 67v18M201 67v18' stroke='#f59e0b' stroke-width='2' stroke-linecap='round'/><line x1='10' y1='92' x2='260' y2='92' stroke='#94a3b8' stroke-width='1'/><text x='18' y='113' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>weiß</text><path d='M114 99v18M121 99v18M128 99v18M135 99v18M111 114L138 102M154 99v18M161 99v18M168 99v18M175 99v18' stroke='#a78bfa' stroke-width='2' stroke-linecap='round'/></svg>"
            },
            {
                "id": "datenk4l1_test_4",
                "category": "kurs_daten_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "groessen_daten_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Karten hat Lea mehr als Finn?",
                "answers": [
                    "12",
                    "11",
                    "10",
                    "50"
                ],
                "correct": 0,
                "explanation": "Lea hat 31 Karten, Finn 19. 31 − 19 = 12.",
                "grafik": "<svg viewBox='0 0 240 150' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='220' height='130' fill='none' stroke='#94a3b8' stroke-width='1'/><rect x='10' y='10' width='220' height='26' fill='rgba(56,189,248,0.25)'/><line x1='140' y1='10' x2='140' y2='140' stroke='#94a3b8' stroke-width='1'/><text x='20' y='28' text-anchor='start' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Name</text><text x='186' y='28' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Karten</text><line x1='10' y1='36' x2='230' y2='36' stroke='#94a3b8' stroke-width='1'/><text x='20' y='54' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Noah</text><text x='186' y='54' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>24</text><line x1='10' y1='62' x2='230' y2='62' stroke='#94a3b8' stroke-width='1'/><text x='20' y='80' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Lea</text><text x='186' y='80' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>31</text><line x1='10' y1='88' x2='230' y2='88' stroke='#94a3b8' stroke-width='1'/><text x='20' y='106' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Finn</text><text x='186' y='106' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>19</text><line x1='10' y1='114' x2='230' y2='114' stroke='#94a3b8' stroke-width='1'/><text x='20' y='132' text-anchor='start' font-size='12' fill='#e5e7eb' font-family='sans-serif'>Aylin</text><text x='186' y='132' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>28</text></svg>"
            },
            {
                "id": "datenk4l1_test_5",
                "category": "kurs_daten_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "groessen_daten_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Besucher kamen am Mittwoch?",
                "answers": [
                    "20",
                    "2",
                    "30",
                    "10"
                ],
                "correct": 0,
                "explanation": "Die Skala zählt in Zehnerschritten. Die Säule für Mittwoch endet bei 20.",
                "grafik": "<svg viewBox='0 0 300 210' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='10' y='16' text-anchor='start' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Besucher in der Bücherei</text><line x1='46' y1='170' x2='290' y2='170' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='174' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>0</text><line x1='46' y1='142' x2='290' y2='142' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='146' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>10</text><line x1='46' y1='114' x2='290' y2='114' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='118' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>20</text><line x1='46' y1='86' x2='290' y2='86' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='90' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>30</text><line x1='46' y1='58' x2='290' y2='58' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='62' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>40</text><line x1='46' y1='30' x2='290' y2='30' stroke='#94a3b8' stroke-width='0.7' opacity='0.5'/><text x='40' y='34' text-anchor='end' font-size='11' fill='#94a3b8' font-family='sans-serif'>50</text><rect x='59.725' y='86' width='33.55' height='84' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='76.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Mo</text><rect x='120.725' y='30' width='33.55' height='140' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='137.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Di</text><rect x='181.725' y='114' width='33.55' height='56' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='198.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Mi</text><rect x='242.725' y='58' width='33.55' height='112' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='259.5' y='188' text-anchor='middle' font-size='11' fill='#e5e7eb' font-family='sans-serif'>Do</text><line x1='46' y1='24' x2='46' y2='170' stroke='#e5e7eb' stroke-width='1.5'/><line x1='46' y1='170' x2='290' y2='170' stroke='#e5e7eb' stroke-width='1.5'/></svg>"
            },
            {
                "id": "datenk4l1_test_6",
                "category": "kurs_daten_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "groessen_daten_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Die Werte sind 4, 7, 4, 9, 7, 4. Welcher Wert ist am häufigsten?",
                "answers": [
                    "4",
                    "7",
                    "9",
                    "6"
                ],
                "correct": 0,
                "explanation": "Die 4 kommt dreimal vor, die 7 zweimal und die 9 einmal."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "zufall_k4_l2",
        "kurs": "daten_zufall_k4",
        "order": 2,
        "icon": "🎲",
        "title": "Sicher, möglich, unmöglich",
        "kurz": "Würfel, Münze, Glücksrad und Kugeln: Gewinnchancen vergleichen",
        "erklaerung": {
            "intro": "Manche Ereignisse sind <b>sicher</b>: Sie passieren immer. Andere sind <b>unmöglich</b>: Sie passieren nie. Dazwischen liegt <b>möglich</b>: Es kann passieren, muss aber nicht. Gibt es für ein Ergebnis mehr Möglichkeiten, ist es <b>wahrscheinlicher</b>.",
            "merksatz": "Zähle die Möglichkeiten: Je mehr Möglichkeiten für ein Ergebnis, desto wahrscheinlicher ist es.",
            "beispiele": [
                "Würfel: Eine Zahl von 1 bis 6 ist sicher. Eine 6 ist möglich. Eine 8 ist unmöglich.<svg viewBox='0 0 330 64' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='46' height='46' rx='6.9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='31' cy='31' r='3.68' fill='#e5e7eb'/><rect x='62' y='8' width='46' height='46' rx='6.9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='73.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='96.5' cy='42.5' r='3.68' fill='#e5e7eb'/><rect x='116' y='8' width='46' height='46' rx='6.9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='127.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='139' cy='31' r='3.68' fill='#e5e7eb'/><circle cx='150.5' cy='42.5' r='3.68' fill='#e5e7eb'/><rect x='170' y='8' width='46' height='46' rx='6.9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='181.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='204.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='181.5' cy='42.5' r='3.68' fill='#e5e7eb'/><circle cx='204.5' cy='42.5' r='3.68' fill='#e5e7eb'/><rect x='224' y='8' width='46' height='46' rx='6.9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='235.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='258.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='247' cy='31' r='3.68' fill='#e5e7eb'/><circle cx='235.5' cy='42.5' r='3.68' fill='#e5e7eb'/><circle cx='258.5' cy='42.5' r='3.68' fill='#e5e7eb'/><rect x='278' y='8' width='46' height='46' rx='6.9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='289.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='312.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='289.5' cy='31' r='3.68' fill='#e5e7eb'/><circle cx='312.5' cy='31' r='3.68' fill='#e5e7eb'/><circle cx='289.5' cy='42.5' r='3.68' fill='#e5e7eb'/><circle cx='312.5' cy='42.5' r='3.68' fill='#e5e7eb'/></svg>",
                "Im Säckchen sind 7 rote und 3 blaue Kugeln. Rot ist wahrscheinlicher: 7 von 10 Kugeln sind rot.<svg viewBox='0 0 200 166' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M70 28Q30 70 38 128Q42 156 100 156Q158 156 162 128Q170 70 130 28Z' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><path d='M66 22Q100 34 134 22' fill='none' stroke='#f59e0b' stroke-width='3'/><circle cx='67' cy='96' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='89' cy='96' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='111' cy='96' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='133' cy='96' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='67' cy='118' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='89' cy='118' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='111' cy='118' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='133' cy='118' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='89' cy='140' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='111' cy='140' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/></svg>",
                "Zwei Würfel: Die Augensumme 12 gibt es nur mit 6 + 6, also auf 1 Weg. Für die Summe 7 gibt es 6 Wege: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "zufallk4l2u_leicht_1",
                    "category": "kurs_zufall_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Du würfelst mit einem normalen Würfel. Eine 7 zu würfeln ist …",
                    "answers": [
                        "unmöglich",
                        "sicher",
                        "möglich",
                        "wahrscheinlich"
                    ],
                    "correct": 0,
                    "explanation": "Auf einem Würfel gibt es nur die Zahlen 1 bis 6. Eine 7 kann nie kommen.",
                    "grafik": "<svg viewBox='0 0 330 64' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='8' width='46' height='46' rx='6.9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='31' cy='31' r='3.68' fill='#e5e7eb'/><rect x='62' y='8' width='46' height='46' rx='6.9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='73.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='96.5' cy='42.5' r='3.68' fill='#e5e7eb'/><rect x='116' y='8' width='46' height='46' rx='6.9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='127.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='139' cy='31' r='3.68' fill='#e5e7eb'/><circle cx='150.5' cy='42.5' r='3.68' fill='#e5e7eb'/><rect x='170' y='8' width='46' height='46' rx='6.9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='181.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='204.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='181.5' cy='42.5' r='3.68' fill='#e5e7eb'/><circle cx='204.5' cy='42.5' r='3.68' fill='#e5e7eb'/><rect x='224' y='8' width='46' height='46' rx='6.9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='235.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='258.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='247' cy='31' r='3.68' fill='#e5e7eb'/><circle cx='235.5' cy='42.5' r='3.68' fill='#e5e7eb'/><circle cx='258.5' cy='42.5' r='3.68' fill='#e5e7eb'/><rect x='278' y='8' width='46' height='46' rx='6.9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='289.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='312.5' cy='19.5' r='3.68' fill='#e5e7eb'/><circle cx='289.5' cy='31' r='3.68' fill='#e5e7eb'/><circle cx='312.5' cy='31' r='3.68' fill='#e5e7eb'/><circle cx='289.5' cy='42.5' r='3.68' fill='#e5e7eb'/><circle cx='312.5' cy='42.5' r='3.68' fill='#e5e7eb'/></svg>"
                },
                {
                    "id": "zufallk4l2u_leicht_2",
                    "category": "kurs_zufall_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Du wirfst eine Münze. Dass Kopf oder Zahl oben liegt, ist …",
                    "answers": [
                        "sicher",
                        "möglich",
                        "unmöglich",
                        "unwahrscheinlich"
                    ],
                    "correct": 0,
                    "explanation": "Eine Münze zeigt immer Kopf oder Zahl. Das passiert jedes Mal, also ist es sicher.",
                    "grafik": "<svg viewBox='0 0 260 92' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='70' cy='46' r='34' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='3'/><circle cx='70' cy='46' r='27' fill='none' stroke='#f59e0b' stroke-width='1'/><text x='70' y='51' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Kopf</text><circle cx='190' cy='46' r='34' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='3'/><circle cx='190' cy='46' r='27' fill='none' stroke='#a78bfa' stroke-width='1'/><text x='190' y='51' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Zahl</text></svg>"
                },
                {
                    "id": "zufallk4l2u_leicht_3",
                    "category": "kurs_zufall_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Im Säckchen sind nur rote Kugeln. Eine blaue zu ziehen ist …",
                    "answers": [
                        "unmöglich",
                        "möglich",
                        "sicher",
                        "wahrscheinlich"
                    ],
                    "correct": 0,
                    "explanation": "Es ist keine einzige blaue Kugel im Säckchen. Darum kannst du nie eine blaue ziehen.",
                    "grafik": "<svg viewBox='0 0 200 166' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M70 28Q30 70 38 128Q42 156 100 156Q158 156 162 128Q170 70 130 28Z' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><path d='M66 22Q100 34 134 22' fill='none' stroke='#f59e0b' stroke-width='3'/><circle cx='67' cy='118' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='89' cy='118' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='111' cy='118' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='133' cy='118' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='89' cy='140' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='111' cy='140' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/></svg>"
                },
                {
                    "id": "zufallk4l2u_leicht_4",
                    "category": "kurs_zufall_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Du würfelst einmal. Eine 3 zu würfeln ist …",
                    "answers": [
                        "möglich",
                        "sicher",
                        "unmöglich",
                        "sehr wahrscheinlich"
                    ],
                    "correct": 0,
                    "explanation": "Die 3 kann kommen, muss aber nicht. Sie ist nur 1 von 6 Zahlen."
                }
            ],
            "mittel": [
                {
                    "id": "zufallk4l2u_mittel_1",
                    "category": "kurs_zufall_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Farbe ist beim Drehen am wahrscheinlichsten?",
                    "answers": [
                        "Blau",
                        "Rot",
                        "Grün",
                        "alle gleich"
                    ],
                    "correct": 0,
                    "explanation": "Blau hat 5 von 8 Feldern, Rot nur 2 und Grün nur 1. Die meisten Felder sind blau.",
                    "grafik": "<svg viewBox='0 0 200 190' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M100 98L100.0 26.0A72 72 0 0 1 150.9 47.1Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L150.9 47.1A72 72 0 0 1 172.0 98.0Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L172.0 98.0A72 72 0 0 1 150.9 148.9Z' fill='#f43f5e' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L150.9 148.9A72 72 0 0 1 100.0 170.0Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L100.0 170.0A72 72 0 0 1 49.1 148.9Z' fill='#10b981' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L49.1 148.9A72 72 0 0 1 28.0 98.0Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L28.0 98.0A72 72 0 0 1 49.1 47.1Z' fill='#f43f5e' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L49.1 47.1A72 72 0 0 1 100.0 26.0Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><circle cx='100' cy='98' r='72' fill='none' stroke='#e5e7eb' stroke-width='2'/><circle cx='100' cy='98' r='5' fill='#e5e7eb'/><polygon points='92,12 108,12 100,30' fill='#e5e7eb'/></svg>"
                },
                {
                    "id": "zufallk4l2u_mittel_2",
                    "category": "kurs_zufall_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie ist die Chance, eine rote Kugel zu ziehen?",
                    "answers": [
                        "3 von 10",
                        "3 von 7",
                        "7 von 10",
                        "1 von 3"
                    ],
                    "correct": 0,
                    "explanation": "Im Säckchen sind 3 rote und 7 blaue Kugeln, zusammen 10. Rot sind 3 von 10.",
                    "grafik": "<svg viewBox='0 0 200 166' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M70 28Q30 70 38 128Q42 156 100 156Q158 156 162 128Q170 70 130 28Z' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><path d='M66 22Q100 34 134 22' fill='none' stroke='#f59e0b' stroke-width='3'/><circle cx='67' cy='96' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='89' cy='96' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='111' cy='96' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='133' cy='96' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='67' cy='118' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='89' cy='118' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='111' cy='118' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='133' cy='118' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='89' cy='140' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='111' cy='140' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/></svg>"
                },
                {
                    "id": "zufallk4l2u_mittel_3",
                    "category": "kurs_zufall_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was würfelst du am wahrscheinlichsten?",
                    "answers": [
                        "1, 2, 3 oder 4",
                        "5 oder 6",
                        "nur die 6",
                        "eine 7 oder 8"
                    ],
                    "correct": 0,
                    "explanation": "Für 1, 2, 3 oder 4 gibt es 4 Möglichkeiten, für 5 oder 6 nur 2, für die 6 nur 1. Eine 7 oder 8 ist unmöglich."
                },
                {
                    "id": "zufallk4l2u_mittel_4",
                    "category": "kurs_zufall_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Du wirfst eine Münze zweimal. Wie viele verschiedene Ergebnisse gibt es?",
                    "answers": [
                        "4",
                        "3",
                        "2",
                        "6"
                    ],
                    "correct": 0,
                    "explanation": "Kopf-Kopf, Kopf-Zahl, Zahl-Kopf, Zahl-Zahl. Kopf-Zahl und Zahl-Kopf sind verschieden, das sind 4.",
                    "grafik": "<svg viewBox='0 0 260 92' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='70' cy='46' r='34' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='3'/><circle cx='70' cy='46' r='27' fill='none' stroke='#f59e0b' stroke-width='1'/><text x='70' y='51' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Kopf</text><circle cx='190' cy='46' r='34' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='3'/><circle cx='190' cy='46' r='27' fill='none' stroke='#a78bfa' stroke-width='1'/><text x='190' y='51' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Zahl</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "zufallk4l2u_schwer_1",
                    "category": "kurs_zufall_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein roter und ein blauer Würfel: Auf wie viele Arten gibt es die Summe 12?",
                    "answers": [
                        "1",
                        "2",
                        "6",
                        "12"
                    ],
                    "correct": 0,
                    "explanation": "Die Summe 12 geht nur mit 6 + 6. Das ist genau 1 Weg.",
                    "grafik": "<svg viewBox='0 0 300 80' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='12' width='56' height='56' rx='8.4' fill='rgba(244,63,94,0.25)' stroke='#f43f5e' stroke-width='2'/><text x='88' y='47' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>?</text><text x='150' y='48' text-anchor='middle' font-size='22' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>+</text><rect x='184' y='12' width='56' height='56' rx='8.4' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='212' y='47' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>?</text></svg>"
                },
                {
                    "id": "zufallk4l2u_schwer_2",
                    "category": "kurs_zufall_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Zwei Würfel: Welche Augensumme ist am wahrscheinlichsten?",
                    "answers": [
                        "7",
                        "12",
                        "2",
                        "6"
                    ],
                    "correct": 0,
                    "explanation": "Für die 7 gibt es 6 Wege, für die 6 nur 5 Wege, für 2 und 12 nur je 1 Weg."
                },
                {
                    "id": "zufallk4l2u_schwer_3",
                    "category": "kurs_zufall_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Bei Grün gewinnst du. Bei welchem Rad ist die Chance größer?",
                    "answers": [
                        "Rad B",
                        "Rad A",
                        "beide gleich",
                        "weiß man nie"
                    ],
                    "correct": 0,
                    "explanation": "Rad A: 1 von 4 Feldern, das ist wie 2 von 8. Rad B: 3 von 8 Feldern. 3 von 8 ist mehr.",
                    "grafik": "<svg viewBox='0 0 320 190' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M80 86L80.0 24.0A62 62 0 0 1 142.0 86.0Z' fill='#10b981' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M80 86L142.0 86.0A62 62 0 0 1 80.0 148.0Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M80 86L80.0 148.0A62 62 0 0 1 18.0 86.0Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M80 86L18.0 86.0A62 62 0 0 1 80.0 24.0Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><circle cx='80' cy='86' r='62' fill='none' stroke='#e5e7eb' stroke-width='2'/><circle cx='80' cy='86' r='5' fill='#e5e7eb'/><polygon points='72,10 88,10 80,28' fill='#e5e7eb'/><text x='80' y='168' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Rad A</text><path d='M240 86L240.0 24.0A62 62 0 0 1 283.8 42.2Z' fill='#10b981' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M240 86L283.8 42.2A62 62 0 0 1 302.0 86.0Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M240 86L302.0 86.0A62 62 0 0 1 283.8 129.8Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M240 86L283.8 129.8A62 62 0 0 1 240.0 148.0Z' fill='#10b981' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M240 86L240.0 148.0A62 62 0 0 1 196.2 129.8Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M240 86L196.2 129.8A62 62 0 0 1 178.0 86.0Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M240 86L178.0 86.0A62 62 0 0 1 196.2 42.2Z' fill='#10b981' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M240 86L196.2 42.2A62 62 0 0 1 240.0 24.0Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><circle cx='240' cy='86' r='62' fill='none' stroke='#e5e7eb' stroke-width='2'/><circle cx='240' cy='86' r='5' fill='#e5e7eb'/><polygon points='232,10 248,10 240,28' fill='#e5e7eb'/><text x='240' y='168' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Rad B</text></svg>"
                },
                {
                    "id": "zufallk4l2u_schwer_4",
                    "category": "kurs_zufall_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "groessen_daten_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Du willst Rot ziehen. Welches Säckchen ist besser?",
                    "answers": [
                        "Säckchen A",
                        "Säckchen B",
                        "beide gleich",
                        "keins von beiden"
                    ],
                    "correct": 0,
                    "explanation": "A: 3 rote von 5, das ist wie 6 von 10. B: 5 rote von 10. 6 von 10 ist mehr, also ist A besser.",
                    "grafik": "<svg viewBox='0 0 320 188' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M50 28Q10 70 18 128Q22 156 80 156Q138 156 142 128Q150 70 110 28Z' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><path d='M46 22Q80 34 114 22' fill='none' stroke='#f59e0b' stroke-width='3'/><circle cx='47' cy='118' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='69' cy='118' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='91' cy='118' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='113' cy='118' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='80' cy='140' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><text x='80' y='178' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Säckchen A</text><path d='M210 28Q170 70 178 128Q182 156 240 156Q298 156 302 128Q310 70 270 28Z' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><path d='M206 22Q240 34 274 22' fill='none' stroke='#f59e0b' stroke-width='3'/><circle cx='207' cy='96' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='229' cy='96' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='251' cy='96' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='273' cy='96' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='207' cy='118' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='229' cy='118' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='251' cy='118' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='273' cy='118' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><circle cx='229' cy='140' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='251' cy='140' r='9' fill='#38bdf8' stroke='#0f172a' stroke-width='1.5'/><text x='240' y='178' text-anchor='middle' font-size='12' font-weight='700' fill='#94a3b8' font-family='sans-serif'>Säckchen B</text></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "zufallk4l2_test_1",
                "category": "kurs_zufall_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "groessen_daten_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Du ziehst aus einem Säckchen mit nur blauen Kugeln. Blau zu ziehen ist …",
                "answers": [
                    "sicher",
                    "möglich",
                    "unmöglich",
                    "unwahrscheinlich"
                ],
                "correct": 0,
                "explanation": "Alle Kugeln sind blau. Du ziehst jedes Mal eine blaue, also ist es sicher."
            },
            {
                "id": "zufallk4l2_test_2",
                "category": "kurs_zufall_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "groessen_daten_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Farbe ist am wenigsten wahrscheinlich?",
                "answers": [
                    "Rot",
                    "Blau",
                    "Orange",
                    "alle gleich"
                ],
                "correct": 0,
                "explanation": "Orange hat 3 Felder, Blau 2 und Rot nur 1. Rot hat die wenigsten Felder.",
                "grafik": "<svg viewBox='0 0 200 190' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M100 98L100.0 26.0A72 72 0 0 1 162.4 62.0Z' fill='#f59e0b' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L162.4 62.0A72 72 0 0 1 162.4 134.0Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L162.4 134.0A72 72 0 0 1 100.0 170.0Z' fill='#f59e0b' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L100.0 170.0A72 72 0 0 1 37.6 134.0Z' fill='#f43f5e' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L37.6 134.0A72 72 0 0 1 37.6 62.0Z' fill='#f59e0b' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L37.6 62.0A72 72 0 0 1 100.0 26.0Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><circle cx='100' cy='98' r='72' fill='none' stroke='#e5e7eb' stroke-width='2'/><circle cx='100' cy='98' r='5' fill='#e5e7eb'/><polygon points='92,12 108,12 100,30' fill='#e5e7eb'/></svg>"
            },
            {
                "id": "zufallk4l2_test_3",
                "category": "kurs_zufall_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "groessen_daten_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie ist die Chance, eine grüne Kugel zu ziehen?",
                "answers": [
                    "4 von 10",
                    "4 von 6",
                    "6 von 10",
                    "1 von 4"
                ],
                "correct": 0,
                "explanation": "4 grüne und 6 rote Kugeln sind zusammen 10. Grün sind 4 von 10.",
                "grafik": "<svg viewBox='0 0 200 166' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M70 28Q30 70 38 128Q42 156 100 156Q158 156 162 128Q170 70 130 28Z' fill='rgba(148,163,184,0.15)' stroke='#94a3b8' stroke-width='2'/><path d='M66 22Q100 34 134 22' fill='none' stroke='#f59e0b' stroke-width='3'/><circle cx='67' cy='96' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='89' cy='96' r='9' fill='#10b981' stroke='#0f172a' stroke-width='1.5'/><circle cx='111' cy='96' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='133' cy='96' r='9' fill='#10b981' stroke='#0f172a' stroke-width='1.5'/><circle cx='67' cy='118' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='89' cy='118' r='9' fill='#10b981' stroke='#0f172a' stroke-width='1.5'/><circle cx='111' cy='118' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='133' cy='118' r='9' fill='#10b981' stroke='#0f172a' stroke-width='1.5'/><circle cx='89' cy='140' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/><circle cx='111' cy='140' r='9' fill='#f43f5e' stroke='#0f172a' stroke-width='1.5'/></svg>"
            },
            {
                "id": "zufallk4l2_test_4",
                "category": "kurs_zufall_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "groessen_daten_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Du würfelst. Eine Zahl kleiner als 7 zu würfeln ist …",
                "answers": [
                    "sicher",
                    "möglich",
                    "unmöglich",
                    "unwahrscheinlich"
                ],
                "correct": 0,
                "explanation": "Alle Zahlen auf dem Würfel (1 bis 6) sind kleiner als 7. Das passiert also immer."
            },
            {
                "id": "zufallk4l2_test_5",
                "category": "kurs_zufall_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "groessen_daten_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein roter und ein blauer Würfel: Auf wie viele Arten gibt es die Summe 3?",
                "answers": [
                    "2",
                    "1",
                    "3",
                    "4"
                ],
                "correct": 0,
                "explanation": "Rot 1 und Blau 2 oder Rot 2 und Blau 1. Das sind 2 Wege.",
                "grafik": "<svg viewBox='0 0 300 80' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='12' width='56' height='56' rx='8.4' fill='rgba(244,63,94,0.25)' stroke='#f43f5e' stroke-width='2'/><text x='88' y='47' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>?</text><text x='150' y='48' text-anchor='middle' font-size='22' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>+</text><rect x='184' y='12' width='56' height='56' rx='8.4' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='212' y='47' text-anchor='middle' font-size='20' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>?</text></svg>"
            },
            {
                "id": "zufallk4l2_test_6",
                "category": "kurs_zufall_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "groessen_daten_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Das Rad hat 10 Felder. Wie ist die Chance auf Blau?",
                "answers": [
                    "7 von 10",
                    "3 von 10",
                    "1 von 10",
                    "1 von 7"
                ],
                "correct": 0,
                "explanation": "7 der 10 Felder sind blau. Die Chance auf Blau ist 7 von 10.",
                "grafik": "<svg viewBox='0 0 200 190' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M100 98L100.0 26.0A72 72 0 0 1 142.3 39.8Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L142.3 39.8A72 72 0 0 1 168.5 75.8Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L168.5 75.8A72 72 0 0 1 168.5 120.2Z' fill='#f43f5e' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L168.5 120.2A72 72 0 0 1 142.3 156.2Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L142.3 156.2A72 72 0 0 1 100.0 170.0Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L100.0 170.0A72 72 0 0 1 57.7 156.2Z' fill='#f59e0b' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L57.7 156.2A72 72 0 0 1 31.5 120.2Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L31.5 120.2A72 72 0 0 1 31.5 75.8Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L31.5 75.8A72 72 0 0 1 57.7 39.8Z' fill='#f43f5e' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><path d='M100 98L57.7 39.8A72 72 0 0 1 100.0 26.0Z' fill='#38bdf8' fill-opacity='0.6' stroke='#0f172a' stroke-width='2'/><circle cx='100' cy='98' r='72' fill='none' stroke='#e5e7eb' stroke-width='2'/><circle cx='100' cy='98' r='5' fill='#e5e7eb'/><polygon points='92,12 108,12 100,30' fill='#e5e7eb'/></svg>"
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
