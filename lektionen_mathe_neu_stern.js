// Neue Mathekurse: K1 Zahlen zerlegen, K3 halbschriftlich + rechter Winkel, K4 Rauminhalt (28.11.2026)
(function () {
    const extraKurse = [{"id": "zerlegen_k1", "title": "Zahlen zerlegen", "icon": "🏠", "grade": 1, "subject": "mathe", "beschreibung": "Zahlenhaus, Schüttelbox, Tausch- und Umkehraufgaben."}, {"id": "halbschriftlich_k3", "title": "Halbschriftlich mal und geteilt", "icon": "✍️", "grade": 3, "subject": "mathe", "beschreibung": "Mit Zehnern rechnen und große Aufgaben geschickt zerlegen."}, {"id": "winkel_k3", "title": "Rechter Winkel und Geodreieck", "icon": "📐", "grade": 3, "subject": "mathe", "beschreibung": "Rechte Winkel erkennen, senkrecht und parallel, mit dem Geodreieck messen."}, {"id": "rauminhalt_k4", "title": "Rauminhalt und Hohlmaße", "icon": "🧊", "grade": 4, "subject": "mathe", "beschreibung": "Würfel zählen, Liter und Milliliter umrechnen."}];
    const extraLektionen = [
 {
  "id": "zl_k1_l1",
  "kurs": "zerlegen_k1",
  "order": 1,
  "icon": "🏠",
  "title": "Das Zahlenhaus",
  "kurz": "Eine Zahl in zwei Teile zerlegen",
  "erklaerung": {
   "intro": "Jede Zahl kann man in <b>zwei Teile zerlegen</b>. Im <b>Zahlenhaus</b> steht die Zahl oben im Dach, darunter zwei Zahlen, die zusammen die Dachzahl ergeben. Die 5 wohnt so: 5 = 1 + 4 = 2 + 3 = 3 + 2 … Bei der <b>Schüttelbox</b> fallen Kugeln auf zwei Seiten – zusammen sind es immer gleich viele.",
   "merksatz": "Beide Zimmer zusammen = die Zahl im Dach.",
   "beispiele": [
    "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>5</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>2</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>3</text></svg>",
    "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>7</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>4</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>3</text></svg>",
    "<svg viewBox='0 0 497 93' style='width:100%;max-width:497px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='248' y='73' text-anchor='middle' font-size='72'>🔴🔴🔴 | 🔴🔴</text></svg>Schüttelbox: 3 und 2 sind 5"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "zlk1l1u_leicht_1",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Zahl fehlt im Zahlenhaus?",
     "answers": [
      "2",
      "4",
      "8",
      "3"
     ],
     "correct": 3,
     "explanation": "5 = 2 + 3.",
     "topic": "zerlegen",
     "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>5</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>2</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>?</text></svg>"
    },
    {
     "id": "zlk1l1u_leicht_2",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Zahl fehlt im Zahlenhaus?",
     "answers": [
      "3",
      "5",
      "10",
      "4"
     ],
     "correct": 3,
     "explanation": "6 = 2 + 4.",
     "topic": "zerlegen",
     "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>6</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>2</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>?</text></svg>"
    },
    {
     "id": "zlk1l1u_leicht_3",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Zahl fehlt im Zahlenhaus?",
     "answers": [
      "2",
      "1",
      "0",
      "5"
     ],
     "correct": 1,
     "explanation": "4 = 3 + 1.",
     "topic": "zerlegen",
     "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>4</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>3</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>?</text></svg>"
    },
    {
     "id": "zlk1l1u_leicht_4",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist 2 und 2 zusammen?",
     "answers": [
      "3",
      "4",
      "5",
      "22"
     ],
     "correct": 1,
     "explanation": "2 + 2 = 4.",
     "topic": "zerlegen",
     "grafik": "<svg viewBox='0 0 392 93' style='width:100%;max-width:392px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='196' y='73' text-anchor='middle' font-size='72'>🍎🍎 🍎🍎</text></svg>"
    },
    {
     "id": "zlk1l1u_leicht_5",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Zahl fehlt im Zahlenhaus?",
     "answers": [
      "4",
      "6",
      "0",
      "5"
     ],
     "correct": 3,
     "explanation": "5 = 0 + 5.",
     "topic": "zerlegen",
     "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>5</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>0</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>?</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "zlk1l1u_mittel_1",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Zahl fehlt im Zahlenhaus?",
     "answers": [
      "5",
      "7",
      "6",
      "14"
     ],
     "correct": 2,
     "explanation": "10 = 4 + 6.",
     "topic": "zerlegen",
     "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>10</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>4</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>?</text></svg>"
    },
    {
     "id": "zlk1l1u_mittel_2",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Zahl fehlt im Zahlenhaus?",
     "answers": [
      "3",
      "1",
      "11",
      "2"
     ],
     "correct": 3,
     "explanation": "9 = 7 + 2.",
     "topic": "zerlegen",
     "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>9</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>7</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>?</text></svg>"
    },
    {
     "id": "zlk1l1u_mittel_3",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "In der Schüttelbox sind 8 Kugeln. Links liegen 5. Wie viele rechts?",
     "answers": [
      "2",
      "3",
      "4",
      "13"
     ],
     "correct": 1,
     "explanation": "8 = 5 + 3.",
     "topic": "zerlegen",
     "grafik": "<svg viewBox='0 0 454 93' style='width:100%;max-width:454px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='227' y='73' text-anchor='middle' font-size='72'>🔴🔴🔴🔴🔴</text></svg>"
    },
    {
     "id": "zlk1l1u_mittel_4",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Zerlegung passt NICHT zur 7?",
     "answers": [
      "4 und 3",
      "5 und 2",
      "6 und 1",
      "3 und 3"
     ],
     "correct": 3,
     "explanation": "3 + 3 = 6.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l1u_mittel_5",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Zahl gehört ins Dach?",
     "answers": [
      "7",
      "8",
      "9",
      "6"
     ],
     "correct": 1,
     "explanation": "3 + 5 = 8.",
     "topic": "zerlegen",
     "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>?</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>3</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>5</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "zlk1l1u_schwer_1",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Zerlegungen der 4 gibt es (mit 0)?",
     "answers": [
      "4",
      "3",
      "6",
      "5"
     ],
     "correct": 3,
     "explanation": "0+4, 1+3, 2+2, 3+1, 4+0.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l1u_schwer_2",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl gehört ins Dach?",
     "answers": [
      "10",
      "9",
      "11",
      "8"
     ],
     "correct": 0,
     "explanation": "7 + 3 = 10.",
     "topic": "zerlegen",
     "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>?</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>7</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>3</text></svg>"
    },
    {
     "id": "zlk1l1u_schwer_3",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl fehlt im Zahlenhaus?",
     "answers": [
      "1",
      "8",
      "0",
      "16"
     ],
     "correct": 2,
     "explanation": "8 = 8 + 0.",
     "topic": "zerlegen",
     "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>8</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>8</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>?</text></svg>"
    },
    {
     "id": "zlk1l1u_schwer_4",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "In der Schüttelbox sind 10 Kugeln. Rechts liegen 6. Wie viele links?",
     "answers": [
      "5",
      "6",
      "4",
      "16"
     ],
     "correct": 2,
     "explanation": "10 = 4 + 6.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l1u_schwer_5",
     "category": "kurs_zl_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zerlegung passt zur 9?",
     "answers": [
      "4 und 4",
      "5 und 5",
      "3 und 5",
      "4 und 5"
     ],
     "correct": 3,
     "explanation": "4 + 5 = 9.",
     "topic": "zerlegen"
    }
   ]
  },
  "test": [
   {
    "id": "zlk1l1_test_1",
    "category": "kurs_zl_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl fehlt im Zahlenhaus?",
    "answers": [
     "3",
     "5",
     "4",
     "11"
    ],
    "correct": 2,
    "explanation": "7 = 3 + 4.",
    "topic": "zerlegen",
    "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>7</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>3</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>?</text></svg>"
   },
   {
    "id": "zlk1l1_test_2",
    "category": "kurs_zl_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl fehlt im Zahlenhaus?",
    "answers": [
     "2",
     "0",
     "3",
     "1"
    ],
    "correct": 3,
    "explanation": "3 = 2 + 1.",
    "topic": "zerlegen",
    "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>3</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>2</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>?</text></svg>"
   },
   {
    "id": "zlk1l1_test_3",
    "category": "kurs_zl_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl gehört ins Dach?",
    "answers": [
     "5",
     "7",
     "15",
     "6"
    ],
    "correct": 3,
    "explanation": "1 + 5 = 6.",
    "topic": "zerlegen",
    "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>?</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>1</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>5</text></svg>"
   },
   {
    "id": "zlk1l1_test_4",
    "category": "kurs_zl_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl fehlt im Zahlenhaus?",
    "answers": [
     "4",
     "6",
     "5",
     "15"
    ],
    "correct": 2,
    "explanation": "10 = 5 + 5.",
    "topic": "zerlegen",
    "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>10</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>5</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>?</text></svg>"
   },
   {
    "id": "zlk1l1_test_5",
    "category": "kurs_zl_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zerlegung passt zur 6?",
    "answers": [
     "4 und 3",
     "5 und 2",
     "3 und 2",
     "4 und 2"
    ],
    "correct": 3,
    "explanation": "4 + 2 = 6.",
    "topic": "zerlegen"
   },
   {
    "id": "zlk1l1_test_6",
    "category": "kurs_zl_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "In der Schüttelbox sind 7 Kugeln. Links liegen 7. Wie viele rechts?",
    "answers": [
     "1",
     "0",
     "7",
     "14"
    ],
    "correct": 1,
    "explanation": "7 = 7 + 0.",
    "topic": "zerlegen"
   },
   {
    "id": "zlk1l1_test_7",
    "category": "kurs_zl_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl fehlt im Zahlenhaus?",
    "answers": [
     "2",
     "3",
     "4",
     "9"
    ],
    "correct": 1,
    "explanation": "9 = 6 + 3.",
    "topic": "zerlegen",
    "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,60 110,10 200,60' fill='#fed7aa' stroke='#9a3412' stroke-width='3'/><text x='110' y='50' text-anchor='middle' font-size='30' font-weight='700' fill='#9a3412'>9</text><rect x='20' y='60' width='180' height='50' fill='#fff' stroke='#9a3412' stroke-width='3'/><line x1='110' y1='60' x2='110' y2='110' stroke='#9a3412' stroke-width='3'/><text x='65' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#1e293b'>6</text><text x='155' y='96' text-anchor='middle' font-size='28' font-weight='700' fill='#2563eb'>?</text></svg>"
   },
   {
    "id": "zlk1l1_test_8",
    "category": "kurs_zl_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zerlegung passt NICHT zur 8?",
    "answers": [
     "4 und 4",
     "6 und 2",
     "7 und 1",
     "5 und 2"
    ],
    "correct": 3,
    "explanation": "5 + 2 = 7.",
    "topic": "zerlegen"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "zl_k1_l2",
  "kurs": "zerlegen_k1",
  "order": 2,
  "icon": "🔄",
  "title": "Tausch- und Umkehraufgaben",
  "kurz": "Zahlen tauschen, Rechnung umdrehen",
  "erklaerung": {
   "intro": "<b>Tauschaufgabe:</b> Beim Plus darfst du die Zahlen tauschen: 2 + 5 = 5 + 2 = 7. Das hilft: Rechne lieber 5 + 2 als 2 + 5. <b>Umkehraufgabe:</b> Minus macht Plus rückgängig: 3 + 4 = 7, also 7 − 4 = 3. So kannst du jede Rechnung prüfen.",
   "merksatz": "Plus: tauschen erlaubt. Minus macht Plus rückgängig.",
   "beispiele": [
    "2 + 5 = 7 → Tauschaufgabe 5 + 2 = 7",
    "3 + 4 = 7 → Umkehraufgabe 7 − 4 = 3",
    "<svg viewBox='0 0 641 93' style='width:100%;max-width:641px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='320' y='73' text-anchor='middle' font-size='72'>🐞🐞🐞 🐞🐞🐞🐞</text></svg>3 + 4 und 4 + 3 sind gleich viel"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "zlk1l2u_leicht_1",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist die Tauschaufgabe zu 2 + 5?",
     "answers": [
      "5 − 2",
      "2 − 5",
      "2 + 2",
      "5 + 2"
     ],
     "correct": 3,
     "explanation": "Zahlen tauschen.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l2u_leicht_2",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "3 + 1 = 4. Wie viel ist 1 + 3?",
     "answers": [
      "4",
      "3",
      "2",
      "13"
     ],
     "correct": 0,
     "explanation": "Tauschaufgabe: gleich.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l2u_leicht_3",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist die Tauschaufgabe zu 4 + 6?",
     "answers": [
      "6 − 4",
      "6 + 4",
      "4 + 4",
      "10 − 6"
     ],
     "correct": 1,
     "explanation": "Zahlen tauschen.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l2u_leicht_4",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "5 + 2 = 7. Wie viel ist 7 − 2?",
     "answers": [
      "2",
      "5",
      "7",
      "9"
     ],
     "correct": 1,
     "explanation": "Umkehraufgabe.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l2u_leicht_5",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Aufgabe ist leichter zu rechnen?",
     "answers": [
      "1 + 8",
      "beide gleich schwer",
      "8 + 1",
      "keine"
     ],
     "correct": 2,
     "explanation": "Große Zahl zuerst.",
     "topic": "zerlegen"
    }
   ],
   "mittel": [
    {
     "id": "zlk1l2u_mittel_1",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "6 + 3 = 9. Welche Umkehraufgabe passt?",
     "answers": [
      "9 + 3 = 12",
      "6 − 3 = 3",
      "9 − 3 = 6",
      "3 + 6 = 9"
     ],
     "correct": 2,
     "explanation": "Minus macht Plus rückgängig.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l2u_mittel_2",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Darf man bei Minus die Zahlen tauschen?",
     "answers": [
      "ja",
      "immer",
      "nein",
      "nur bei 10"
     ],
     "correct": 2,
     "explanation": "5 − 2 ist nicht 2 − 5.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l2u_mittel_3",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "4 + 5 = 9. Welche Aufgabe ist die Tauschaufgabe?",
     "answers": [
      "9 − 5 = 4",
      "5 + 4 = 9",
      "9 − 4 = 5",
      "4 + 4 = 8"
     ],
     "correct": 1,
     "explanation": "Tauschen.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l2u_mittel_4",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "10 − 4 = 6. Wie prüfst du?",
     "answers": [
      "6 − 4 = 2",
      "6 + 4 = 10",
      "10 + 4 = 14",
      "4 − 6"
     ],
     "correct": 1,
     "explanation": "Umkehraufgabe.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l2u_mittel_5",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Aufgabe hat dasselbe Ergebnis wie 2 + 7?",
     "answers": [
      "7 − 2",
      "7 + 2",
      "2 + 2",
      "9 − 7"
     ],
     "correct": 1,
     "explanation": "Tauschaufgabe.",
     "topic": "zerlegen"
    }
   ],
   "schwer": [
    {
     "id": "zlk1l2u_schwer_1",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche vier Aufgaben gehören zu 3, 5 und 8?",
     "answers": [
      "3+5, 5+3, 5−3, 8+3",
      "3+8, 5+8, 8−5, 8−3",
      "3+5, 8+5, 8−3, 3−5",
      "3+5, 5+3, 8−5, 8−3"
     ],
     "correct": 3,
     "explanation": "Aufgabenfamilie.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l2u_schwer_2",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl fehlt? 7 + ___ = 10",
     "answers": [
      "2",
      "4",
      "3",
      "17"
     ],
     "correct": 2,
     "explanation": "10 − 7 = 3.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l2u_schwer_3",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl fehlt? ___ + 6 = 9",
     "answers": [
      "15",
      "2",
      "4",
      "3"
     ],
     "correct": 3,
     "explanation": "9 − 6 = 3.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l2u_schwer_4",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Tom rechnet 9 − 3 = 5. Was zeigt die Probe 5 + 3?",
     "answers": [
      "9 – also richtig",
      "5 – also richtig",
      "8 – also falsch",
      "3 – also falsch"
     ],
     "correct": 2,
     "explanation": "9 − 3 = 6.",
     "topic": "zerlegen"
    },
    {
     "id": "zlk1l2u_schwer_5",
     "category": "kurs_zl_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl fehlt? 12 − ___ = 8",
     "answers": [
      "3",
      "5",
      "20",
      "4"
     ],
     "correct": 3,
     "explanation": "8 + 4 = 12.",
     "topic": "zerlegen"
    }
   ]
  },
  "test": [
   {
    "id": "zlk1l2_test_1",
    "category": "kurs_zl_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist die Tauschaufgabe zu 3 + 6?",
    "answers": [
     "6 − 3",
     "3 + 3",
     "9 − 3",
     "6 + 3"
    ],
    "correct": 3,
    "explanation": "Tauschen.",
    "topic": "zerlegen"
   },
   {
    "id": "zlk1l2_test_2",
    "category": "kurs_zl_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "2 + 8 = 10. Wie viel ist 8 + 2?",
    "answers": [
     "6",
     "28",
     "8",
     "10"
    ],
    "correct": 3,
    "explanation": "Gleich.",
    "topic": "zerlegen"
   },
   {
    "id": "zlk1l2_test_3",
    "category": "kurs_zl_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "7 + 2 = 9. Wie viel ist 9 − 2?",
    "answers": [
     "2",
     "7",
     "9",
     "11"
    ],
    "correct": 1,
    "explanation": "Umkehraufgabe.",
    "topic": "zerlegen"
   },
   {
    "id": "zlk1l2_test_4",
    "category": "kurs_zl_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Aufgabe ist leichter?",
    "answers": [
     "1 + 9",
     "9 + 1",
     "beide gleich schwer",
     "keine"
    ],
    "correct": 1,
    "explanation": "Große Zahl zuerst.",
    "topic": "zerlegen"
   },
   {
    "id": "zlk1l2_test_5",
    "category": "kurs_zl_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "5 + 3 = 8. Welche Umkehraufgabe passt?",
    "answers": [
     "8 + 3 = 11",
     "8 − 3 = 5",
     "5 − 3 = 2",
     "3 + 5 = 8"
    ],
    "correct": 1,
    "explanation": "Rückgängig.",
    "topic": "zerlegen"
   },
   {
    "id": "zlk1l2_test_6",
    "category": "kurs_zl_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Darf man bei Plus die Zahlen tauschen?",
    "answers": [
     "nein",
     "ja",
     "nur bei 1",
     "nur bei Minus"
    ],
    "correct": 1,
    "explanation": "Tauschaufgabe.",
    "topic": "zerlegen"
   },
   {
    "id": "zlk1l2_test_7",
    "category": "kurs_zl_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl fehlt? 4 + ___ = 9",
    "answers": [
     "4",
     "6",
     "13",
     "5"
    ],
    "correct": 3,
    "explanation": "9 − 4 = 5.",
    "topic": "zerlegen"
   },
   {
    "id": "zlk1l2_test_8",
    "category": "kurs_zl_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie prüfst du 7 − 5 = 2?",
    "answers": [
     "2 − 5",
     "2 + 5 = 7",
     "7 + 5 = 12",
     "5 − 2 = 3"
    ],
    "correct": 1,
    "explanation": "Umkehraufgabe.",
    "topic": "zerlegen"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "hs_k3_l1",
  "kurs": "halbschriftlich_k3",
  "order": 1,
  "icon": "✖️",
  "title": "Halbschriftlich multiplizieren",
  "kurz": "Mit Zehnern malnehmen und zerlegen",
  "erklaerung": {
   "intro": "<b>Mit Zehnern:</b> 3 · 40 = 3 · 4 Zehner = 12 Zehner = <b>120</b>. <b>Zerlegen:</b> Große Zahl in Zehner und Einer aufteilen: 13 · 4 = 10 · 4 + 3 · 4 = 40 + 12 = <b>52</b>. Die Teilergebnisse werden zum Schluss addiert.",
   "merksatz": "Zerlegen – einzeln malnehmen – zusammenzählen.",
   "beispiele": [
    "3 · 40 = 120 (wie 3 · 4 = 12, nur Zehner)",
    "13 · 4 = 10 · 4 + 3 · 4 = 40 + 12 = 52",
    "26 · 3 = 20 · 3 + 6 · 3 = 60 + 18 = 78"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "hsk3l1u_leicht_1",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "2 · 30 =",
     "answers": [
      "32",
      "60",
      "50",
      "600"
     ],
     "correct": 1,
     "explanation": "2 · 3 Zehner = 6 Zehner.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l1u_leicht_2",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "4 · 20 =",
     "answers": [
      "80",
      "24",
      "60",
      "800"
     ],
     "correct": 0,
     "explanation": "4 · 2 Zehner = 8 Zehner.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l1u_leicht_3",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "5 · 10 =",
     "answers": [
      "50",
      "15",
      "510",
      "500"
     ],
     "correct": 0,
     "explanation": "5 Zehner.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l1u_leicht_4",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "3 · 30 =",
     "answers": [
      "90",
      "33",
      "60",
      "900"
     ],
     "correct": 0,
     "explanation": "3 · 3 Zehner.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l1u_leicht_5",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "12 · 2 = 10 · 2 + 2 · 2 =",
     "answers": [
      "22",
      "14",
      "122",
      "24"
     ],
     "correct": 3,
     "explanation": "20 + 4.",
     "topic": "halbschriftlich"
    }
   ],
   "mittel": [
    {
     "id": "hsk3l1u_mittel_1",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "6 · 40 =",
     "answers": [
      "24",
      "240",
      "46",
      "2400"
     ],
     "correct": 1,
     "explanation": "6 · 4 = 24 → 24 Zehner.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l1u_mittel_2",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "14 · 3 =",
     "answers": [
      "32",
      "42",
      "17",
      "43"
     ],
     "correct": 1,
     "explanation": "30 + 12.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l1u_mittel_3",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie zerlegst du 16 · 5 geschickt?",
     "answers": [
      "16 + 5",
      "10 · 6 + 5",
      "1 · 5 + 6 · 5",
      "10 · 5 + 6 · 5"
     ],
     "correct": 3,
     "explanation": "Zehner und Einer.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l1u_mittel_4",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "21 · 4 =",
     "answers": [
      "82",
      "25",
      "48",
      "84"
     ],
     "correct": 3,
     "explanation": "80 + 4.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l1u_mittel_5",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "7 · 30 =",
     "answers": [
      "37",
      "21",
      "210",
      "2100"
     ],
     "correct": 2,
     "explanation": "7 · 3 = 21 Zehner.",
     "topic": "halbschriftlich"
    }
   ],
   "schwer": [
    {
     "id": "hsk3l1u_schwer_1",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "26 · 3 =",
     "answers": [
      "68",
      "78",
      "29",
      "618"
     ],
     "correct": 1,
     "explanation": "60 + 18.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l1u_schwer_2",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "8 · 70 =",
     "answers": [
      "560",
      "56",
      "78",
      "5600"
     ],
     "correct": 0,
     "explanation": "8 · 7 = 56 Zehner.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l1u_schwer_3",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "35 · 4 =",
     "answers": [
      "120",
      "39",
      "1220",
      "140"
     ],
     "correct": 3,
     "explanation": "120 + 20.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l1u_schwer_4",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Buch kostet 18 €. Was kosten 5 Bücher?",
     "answers": [
      "80 €",
      "23 €",
      "90 €",
      "95 €"
     ],
     "correct": 2,
     "explanation": "50 + 40.",
     "topic": "halbschriftlich",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📚</text></svg>"
    },
    {
     "id": "hsk3l1u_schwer_5",
     "category": "kurs_hs_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Rechnung passt zu 47 · 2?",
     "answers": [
      "40 + 7 · 2",
      "4 · 2 + 7 · 2",
      "47 + 2",
      "40 · 2 + 7 · 2"
     ],
     "correct": 3,
     "explanation": "Zehner und Einer.",
     "topic": "halbschriftlich"
    }
   ]
  },
  "test": [
   {
    "id": "hsk3l1_test_1",
    "category": "kurs_hs_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "3 · 20 =",
    "answers": [
     "23",
     "50",
     "60",
     "600"
    ],
    "correct": 2,
    "explanation": "6 Zehner.",
    "topic": "halbschriftlich"
   },
   {
    "id": "hsk3l1_test_2",
    "category": "kurs_hs_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "9 · 30 =",
    "answers": [
     "39",
     "27",
     "2700",
     "270"
    ],
    "correct": 3,
    "explanation": "27 Zehner.",
    "topic": "halbschriftlich"
   },
   {
    "id": "hsk3l1_test_3",
    "category": "kurs_hs_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "13 · 3 =",
    "answers": [
     "33",
     "39",
     "16",
     "93"
    ],
    "correct": 1,
    "explanation": "30 + 9.",
    "topic": "halbschriftlich"
   },
   {
    "id": "hsk3l1_test_4",
    "category": "kurs_hs_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "24 · 2 =",
    "answers": [
     "44",
     "26",
     "48",
     "84"
    ],
    "correct": 2,
    "explanation": "40 + 8.",
    "topic": "halbschriftlich"
   },
   {
    "id": "hsk3l1_test_5",
    "category": "kurs_hs_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "15 · 6 =",
    "answers": [
     "90",
     "80",
     "21",
     "96"
    ],
    "correct": 0,
    "explanation": "60 + 30.",
    "topic": "halbschriftlich"
   },
   {
    "id": "hsk3l1_test_6",
    "category": "kurs_hs_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie zerlegst du 32 · 3?",
    "answers": [
     "32 + 3",
     "30 · 3 + 2 · 3",
     "3 · 3 + 2 · 3",
     "30 + 2 · 3"
    ],
    "correct": 1,
    "explanation": "Zehner und Einer.",
    "topic": "halbschriftlich"
   },
   {
    "id": "hsk3l1_test_7",
    "category": "kurs_hs_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "5 · 60 =",
    "answers": [
     "30",
     "300",
     "65",
     "3000"
    ],
    "correct": 1,
    "explanation": "30 Zehner.",
    "topic": "halbschriftlich"
   },
   {
    "id": "hsk3l1_test_8",
    "category": "kurs_hs_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Eine Kiste hat 12 Flaschen. Wie viele haben 6 Kisten?",
    "answers": [
     "62",
     "72",
     "18",
     "66"
    ],
    "correct": 1,
    "explanation": "60 + 12.",
    "topic": "halbschriftlich",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍾</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "hs_k3_l2",
  "kurs": "halbschriftlich_k3",
  "order": 2,
  "icon": "➗",
  "title": "Halbschriftlich dividieren",
  "kurz": "Mit Zehnern teilen und zerlegen",
  "erklaerung": {
   "intro": "<b>Mit Zehnern:</b> 240 : 6 = 24 Zehner : 6 = 4 Zehner = <b>40</b>. <b>Zerlegen:</b> Teile die Zahl so, dass sich beide Teile gut teilen lassen: 84 : 4 = 80 : 4 + 4 : 4 = 20 + 1 = <b>21</b>. 72 : 3 = 60 : 3 + 12 : 3 = 20 + 4 = <b>24</b>.",
   "merksatz": "So zerlegen, dass sich beide Teile gut teilen lassen.",
   "beispiele": [
    "240 : 6 = 40 (wie 24 : 6 = 4)",
    "84 : 4 = 80 : 4 + 4 : 4 = 21",
    "72 : 3 = 60 : 3 + 12 : 3 = 24"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "hsk3l2u_leicht_1",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "60 : 2 =",
     "answers": [
      "3",
      "30",
      "20",
      "62"
     ],
     "correct": 1,
     "explanation": "6 Zehner : 2 = 3 Zehner.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l2u_leicht_2",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "80 : 4 =",
     "answers": [
      "20",
      "2",
      "40",
      "84"
     ],
     "correct": 0,
     "explanation": "8 Zehner : 4.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l2u_leicht_3",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "90 : 3 =",
     "answers": [
      "3",
      "30",
      "60",
      "33"
     ],
     "correct": 1,
     "explanation": "9 Zehner : 3.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l2u_leicht_4",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "100 : 10 =",
     "answers": [
      "1",
      "100",
      "10",
      "90"
     ],
     "correct": 2,
     "explanation": "10 · 10 = 100.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l2u_leicht_5",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "46 : 2 = 40 : 2 + 6 : 2 =",
     "answers": [
      "22",
      "23",
      "43",
      "26"
     ],
     "correct": 1,
     "explanation": "20 + 3.",
     "topic": "halbschriftlich"
    }
   ],
   "mittel": [
    {
     "id": "hsk3l2u_mittel_1",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "240 : 6 =",
     "answers": [
      "4",
      "400",
      "24",
      "40"
     ],
     "correct": 3,
     "explanation": "24 : 6 = 4 → 40.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l2u_mittel_2",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "84 : 4 =",
     "answers": [
      "22",
      "21",
      "12",
      "20"
     ],
     "correct": 1,
     "explanation": "20 + 1.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l2u_mittel_3",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "150 : 5 =",
     "answers": [
      "3",
      "35",
      "300",
      "30"
     ],
     "correct": 3,
     "explanation": "15 : 5 = 3 → 30.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l2u_mittel_4",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie zerlegst du 72 : 3 geschickt?",
     "answers": [
      "70 : 3 + 2 : 3",
      "60 : 3 + 12 : 3",
      "72 − 3",
      "7 : 3 + 2 : 3"
     ],
     "correct": 1,
     "explanation": "Beide Teile durch 3 teilbar.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l2u_mittel_5",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "63 : 3 =",
     "answers": [
      "12",
      "23",
      "20",
      "21"
     ],
     "correct": 3,
     "explanation": "60 : 3 + 3 : 3.",
     "topic": "halbschriftlich"
    }
   ],
   "schwer": [
    {
     "id": "hsk3l2u_schwer_1",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "72 : 3 =",
     "answers": [
      "24",
      "21",
      "34",
      "23"
     ],
     "correct": 0,
     "explanation": "20 + 4.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l2u_schwer_2",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "96 : 4 =",
     "answers": [
      "26",
      "22",
      "23",
      "24"
     ],
     "correct": 3,
     "explanation": "80 : 4 + 16 : 4.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l2u_schwer_3",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "560 : 8 =",
     "answers": [
      "70",
      "7",
      "700",
      "80"
     ],
     "correct": 0,
     "explanation": "56 : 8 = 7 → 70.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l2u_schwer_4",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie zerlegst du 91 : 7?",
     "answers": [
      "90 : 7 + 1 : 7",
      "9 : 7 + 1 : 7",
      "91 − 7",
      "70 : 7 + 21 : 7"
     ],
     "correct": 3,
     "explanation": "Beide Teile durch 7 teilbar.",
     "topic": "halbschriftlich"
    },
    {
     "id": "hsk3l2u_schwer_5",
     "category": "kurs_hs_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "120 Kinder in 4 gleich große Gruppen. Wie viele pro Gruppe?",
     "answers": [
      "30",
      "40",
      "24",
      "116"
     ],
     "correct": 0,
     "explanation": "12 : 4 = 3 → 30.",
     "topic": "halbschriftlich"
    }
   ]
  },
  "test": [
   {
    "id": "hsk3l2_test_1",
    "category": "kurs_hs_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "80 : 2 =",
    "answers": [
     "40",
     "4",
     "60",
     "82"
    ],
    "correct": 0,
    "explanation": "8 Zehner : 2.",
    "topic": "halbschriftlich"
   },
   {
    "id": "hsk3l2_test_2",
    "category": "kurs_hs_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "210 : 7 =",
    "answers": [
     "3",
     "30",
     "300",
     "21"
    ],
    "correct": 1,
    "explanation": "21 : 7 = 3.",
    "topic": "halbschriftlich"
   },
   {
    "id": "hsk3l2_test_3",
    "category": "kurs_hs_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "48 : 4 =",
    "answers": [
     "12",
     "14",
     "11",
     "21"
    ],
    "correct": 0,
    "explanation": "40 : 4 + 8 : 4.",
    "topic": "halbschriftlich"
   },
   {
    "id": "hsk3l2_test_4",
    "category": "kurs_hs_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "66 : 3 =",
    "answers": [
     "23",
     "21",
     "33",
     "22"
    ],
    "correct": 3,
    "explanation": "60 : 3 + 6 : 3.",
    "topic": "halbschriftlich"
   },
   {
    "id": "hsk3l2_test_5",
    "category": "kurs_hs_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie zerlegst du 52 : 4?",
    "answers": [
     "50 : 4 + 2 : 4",
     "5 : 4 + 2 : 4",
     "40 : 4 + 12 : 4",
     "52 − 4"
    ],
    "correct": 2,
    "explanation": "Beide teilbar.",
    "topic": "halbschriftlich"
   },
   {
    "id": "hsk3l2_test_6",
    "category": "kurs_hs_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "52 : 4 =",
    "answers": [
     "12",
     "14",
     "31",
     "13"
    ],
    "correct": 3,
    "explanation": "10 + 3.",
    "topic": "halbschriftlich"
   },
   {
    "id": "hsk3l2_test_7",
    "category": "kurs_hs_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "360 : 9 =",
    "answers": [
     "4",
     "400",
     "40",
     "36"
    ],
    "correct": 2,
    "explanation": "36 : 9 = 4.",
    "topic": "halbschriftlich"
   },
   {
    "id": "hsk3l2_test_8",
    "category": "kurs_hs_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ein Seil ist 84 m lang. In 2 gleiche Teile geschnitten. Wie lang ist ein Teil?",
    "answers": [
     "42 m",
     "41 m",
     "82 m",
     "24 m"
    ],
    "correct": 0,
    "explanation": "84 : 2.",
    "topic": "halbschriftlich"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "wk_k3_l1",
  "kurs": "winkel_k3",
  "order": 1,
  "icon": "📐",
  "title": "Der rechte Winkel",
  "kurz": "Rechte Winkel erkennen und falten",
  "erklaerung": {
   "intro": "Ein <b>rechter Winkel</b> sieht aus wie eine <b>Ecke von einem Blatt Papier</b>. Man markiert ihn mit einem kleinen <b>Quadrat mit Punkt</b>. Du kannst einen rechten Winkel <b>falten</b>: Blatt einmal falten, dann die Faltkante noch einmal aufeinanderlegen. Rechtecke und Quadrate haben <b>4 rechte Winkel</b>.",
   "merksatz": "Rechter Winkel = Papierecke. Zeichen: kleines Quadrat mit Punkt.",
   "beispiele": [
    "<svg viewBox='0 0 280 170' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='150' x2='190' y2='150' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><line x1='50' y1='150' x2='50' y2='10' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><rect x='50' y='124' width='26' height='26' fill='none' stroke='#f97316' stroke-width='4'/><circle cx='63' cy='137' r='3' fill='#f97316'/></svg>",
    "<svg viewBox='0 0 240 160' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='30' width='180' height='100' fill='#dbeafe' stroke='#1e293b' stroke-width='4'/></svg>Rechteck: 4 rechte Winkel",
    "<svg viewBox='0 0 280 170' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='150' x2='190' y2='150' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><line x1='50' y1='150' x2='149' y2='51' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><path d='M84,150 A34,34 0 0 0 74,126' fill='none' stroke='#f97316' stroke-width='4'/></svg>kein rechter Winkel (spitz)"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "wkk3l1u_leicht_1",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Ist das ein rechter Winkel?",
     "answers": [
      "nein",
      "nur halb",
      "ja",
      "kann man nicht sagen"
     ],
     "correct": 2,
     "explanation": "Das kleine Quadrat zeigt: rechter Winkel.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 280 170' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='150' x2='190' y2='150' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><line x1='50' y1='150' x2='50' y2='10' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><rect x='50' y='124' width='26' height='26' fill='none' stroke='#f97316' stroke-width='4'/><circle cx='63' cy='137' r='3' fill='#f97316'/></svg>"
    },
    {
     "id": "wkk3l1u_leicht_2",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Ist das ein rechter Winkel?",
     "answers": [
      "ja",
      "nein, er ist größer",
      "ja, genau",
      "nein, er ist kleiner"
     ],
     "correct": 3,
     "explanation": "Der Winkel ist spitz.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 280 170' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='150' x2='190' y2='150' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><line x1='50' y1='150' x2='149' y2='51' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><path d='M84,150 A34,34 0 0 0 74,126' fill='none' stroke='#f97316' stroke-width='4'/></svg>"
    },
    {
     "id": "wkk3l1u_leicht_3",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wo findest du einen rechten Winkel?",
     "answers": [
      "an der Ecke eines Blattes",
      "an einem Ball",
      "an einem Ei",
      "an einer Wolke"
     ],
     "correct": 0,
     "explanation": "Papierecke.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📄</text></svg>"
    },
    {
     "id": "wkk3l1u_leicht_4",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele rechte Winkel hat ein Rechteck?",
     "answers": [
      "4",
      "2",
      "3",
      "0"
     ],
     "correct": 0,
     "explanation": "Alle vier Ecken.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 240 160' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='30' width='180' height='100' fill='#dbeafe' stroke='#1e293b' stroke-width='4'/></svg>"
    },
    {
     "id": "wkk3l1u_leicht_5",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie markiert man einen rechten Winkel?",
     "answers": [
      "mit einem Kreuz",
      "mit einem Stern",
      "mit einem kleinen Quadrat und Punkt",
      "gar nicht"
     ],
     "correct": 2,
     "explanation": "Quadrat mit Punkt.",
     "topic": "rechter_winkel"
    }
   ],
   "mittel": [
    {
     "id": "wkk3l1u_mittel_1",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Ist das ein rechter Winkel?",
     "answers": [
      "ja",
      "nein, er ist größer",
      "nein, er ist kleiner",
      "ja, fast"
     ],
     "correct": 1,
     "explanation": "Stumpfer Winkel.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 280 170' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='120' y1='150' x2='260' y2='150' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><line x1='120' y1='150' x2='30' y2='43' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><path d='M154,150 A34,34 0 0 0 98,124' fill='none' stroke='#f97316' stroke-width='4'/></svg>"
    },
    {
     "id": "wkk3l1u_mittel_2",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele rechte Winkel hat ein Quadrat?",
     "answers": [
      "2",
      "1",
      "0",
      "4"
     ],
     "correct": 3,
     "explanation": "Alle vier Ecken.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 240 160' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='20' width='120' height='120' fill='#dbeafe' stroke='#1e293b' stroke-width='4'/></svg>"
    },
    {
     "id": "wkk3l1u_mittel_3",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele rechte Winkel hat dieses Dreieck?",
     "answers": [
      "0",
      "2",
      "3",
      "1"
     ],
     "correct": 3,
     "explanation": "Unten links ist ein rechter Winkel.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 240 160' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40,140 200,140 40,30' fill='#dbeafe' stroke='#1e293b' stroke-width='4'/><rect x='40' y='116' width='24' height='24' fill='none' stroke='#f97316' stroke-width='3'/></svg>"
    },
    {
     "id": "wkk3l1u_mittel_4",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie faltest du einen rechten Winkel?",
     "answers": [
      "einmal knüllen",
      "zweimal falten, Kante auf Kante",
      "einmal schräg falten",
      "gar nicht"
     ],
     "correct": 1,
     "explanation": "Faltwinkel.",
     "topic": "rechter_winkel"
    },
    {
     "id": "wkk3l1u_mittel_5",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Uhrzeit zeigt einen rechten Winkel zwischen den Zeigern?",
     "answers": [
      "6 Uhr",
      "3 Uhr",
      "12 Uhr",
      "4 Uhr"
     ],
     "correct": 1,
     "explanation": "Bei 3 Uhr stehen die Zeiger rechtwinklig.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🕒</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "wkk3l1u_schwer_1",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele rechte Winkel hat dieses Viereck?",
     "answers": [
      "0",
      "4",
      "2",
      "1"
     ],
     "correct": 0,
     "explanation": "Es ist schief (Parallelogramm).",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 240 160' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,130 190,130 220,30 60,30' fill='#dbeafe' stroke='#1e293b' stroke-width='4'/></svg>"
    },
    {
     "id": "wkk3l1u_schwer_2",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele rechte Winkel hat dieses Dreieck?",
     "answers": [
      "0",
      "1",
      "2",
      "3"
     ],
     "correct": 0,
     "explanation": "Alle Ecken sind spitz.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 240 160' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,140 210,140 120,30' fill='#dbeafe' stroke='#1e293b' stroke-width='4'/></svg>"
    },
    {
     "id": "wkk3l1u_schwer_3",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Kann ein Dreieck zwei rechte Winkel haben?",
     "answers": [
      "ja",
      "nein",
      "nur große Dreiecke",
      "nur kleine"
     ],
     "correct": 1,
     "explanation": "Dann würde es sich nicht schließen.",
     "topic": "rechter_winkel"
    },
    {
     "id": "wkk3l1u_schwer_4",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Buchstabe hat rechte Winkel?",
     "answers": [
      "O",
      "L",
      "V",
      "S"
     ],
     "correct": 1,
     "explanation": "Beim L treffen sich die Linien rechtwinklig.",
     "topic": "rechter_winkel"
    },
    {
     "id": "wkk3l1u_schwer_5",
     "category": "kurs_wk_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele rechte Winkel bilden zwei Linien, die senkrecht aufeinander stehen und sich kreuzen?",
     "answers": [
      "4",
      "1",
      "2",
      "0"
     ],
     "correct": 0,
     "explanation": "Ein Kreuz hat 4 rechte Winkel.",
     "topic": "rechter_winkel"
    }
   ]
  },
  "test": [
   {
    "id": "wkk3l1_test_1",
    "category": "kurs_wk_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ist das ein rechter Winkel?",
    "answers": [
     "nein",
     "fast",
     "kann man nicht sagen",
     "ja"
    ],
    "correct": 3,
    "explanation": "Quadrat-Zeichen.",
    "topic": "rechter_winkel",
    "grafik": "<svg viewBox='0 0 280 170' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='150' x2='190' y2='150' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><line x1='50' y1='150' x2='50' y2='10' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><rect x='50' y='124' width='26' height='26' fill='none' stroke='#f97316' stroke-width='4'/><circle cx='63' cy='137' r='3' fill='#f97316'/></svg>"
   },
   {
    "id": "wkk3l1_test_2",
    "category": "kurs_wk_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ist das ein rechter Winkel?",
    "answers": [
     "ja",
     "nein",
     "genau",
     "fast genau"
    ],
    "correct": 1,
    "explanation": "Er ist spitz.",
    "topic": "rechter_winkel",
    "grafik": "<svg viewBox='0 0 280 170' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='150' x2='190' y2='150' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><line x1='50' y1='150' x2='171' y2='80' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><path d='M84,150 A34,34 0 0 0 79,133' fill='none' stroke='#f97316' stroke-width='4'/></svg>"
   },
   {
    "id": "wkk3l1_test_3",
    "category": "kurs_wk_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele rechte Winkel hat ein Rechteck?",
    "answers": [
     "4",
     "2",
     "1",
     "3"
    ],
    "correct": 0,
    "explanation": "Vier Ecken.",
    "topic": "rechter_winkel"
   },
   {
    "id": "wkk3l1_test_4",
    "category": "kurs_wk_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wo ist ein rechter Winkel?",
    "answers": [
     "an einem Teller",
     "an einem Ball",
     "an einer Banane",
     "an der Ecke eines Tisches"
    ],
    "correct": 3,
    "explanation": "Tischecke.",
    "topic": "rechter_winkel"
   },
   {
    "id": "wkk3l1_test_5",
    "category": "kurs_wk_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele rechte Winkel hat dieses Dreieck?",
    "answers": [
     "0",
     "2",
     "1",
     "3"
    ],
    "correct": 2,
    "explanation": "Unten links.",
    "topic": "rechter_winkel",
    "grafik": "<svg viewBox='0 0 240 160' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40,140 200,140 40,30' fill='#dbeafe' stroke='#1e293b' stroke-width='4'/><rect x='40' y='116' width='24' height='24' fill='none' stroke='#f97316' stroke-width='3'/></svg>"
   },
   {
    "id": "wkk3l1_test_6",
    "category": "kurs_wk_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ist das ein rechter Winkel?",
    "answers": [
     "ja",
     "genau",
     "fast",
     "nein"
    ],
    "correct": 3,
    "explanation": "Er ist stumpf.",
    "topic": "rechter_winkel",
    "grafik": "<svg viewBox='0 0 280 170' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='120' y1='150' x2='260' y2='150' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><line x1='120' y1='150' x2='50' y2='29' stroke='#1e293b' stroke-width='5' stroke-linecap='round'/><path d='M154,150 A34,34 0 0 0 103,121' fill='none' stroke='#f97316' stroke-width='4'/></svg>"
   },
   {
    "id": "wkk3l1_test_7",
    "category": "kurs_wk_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie markiert man den rechten Winkel?",
    "answers": [
     "Kreis",
     "Pfeil",
     "kleines Quadrat mit Punkt",
     "Stern"
    ],
    "correct": 2,
    "explanation": "Zeichen.",
    "topic": "rechter_winkel"
   },
   {
    "id": "wkk3l1_test_8",
    "category": "kurs_wk_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Buchstabe hat KEINEN rechten Winkel?",
    "answers": [
     "L",
     "O",
     "T",
     "E"
    ],
    "correct": 1,
    "explanation": "O ist rund.",
    "topic": "rechter_winkel"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "wk_k3_l2",
  "kurs": "winkel_k3",
  "order": 2,
  "icon": "📏",
  "title": "Senkrecht, parallel, Geodreieck",
  "kurz": "Linien und das Geodreieck",
  "erklaerung": {
   "intro": "Zwei Linien sind <b>senkrecht</b> zueinander, wenn sie einen rechten Winkel bilden. Sie sind <b>parallel</b>, wenn sie überall gleich weit voneinander entfernt sind und sich nie treffen. Mit dem <b>Geodreieck</b> prüfst und zeichnest du rechte Winkel: Die <b>Mittellinie</b> auf die Linie legen – an der langen Kante zeichnen. Die Linien auf dem Geodreieck helfen bei Parallelen.",
   "merksatz": "Senkrecht = rechter Winkel. Parallel = überall gleicher Abstand, treffen sich nie.",
   "beispiele": [
    "<svg viewBox='0 0 240 150' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='130' x2='220' y2='130' stroke='#2563eb' stroke-width='5'/><line x1='120' y1='20' x2='120' y2='130' stroke='#2563eb' stroke-width='5'/><rect x='120' y='106' width='24' height='24' fill='none' stroke='#f97316' stroke-width='4'/></svg>senkrecht",
    "<svg viewBox='0 0 240 150' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='50' x2='220' y2='50' stroke='#2563eb' stroke-width='5'/><line x1='20' y1='110' x2='220' y2='110' stroke='#2563eb' stroke-width='5'/></svg>parallel",
    "<svg viewBox='0 0 240 150' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='40' x2='220' y2='130' stroke='#2563eb' stroke-width='5'/><line x1='20' y1='120' x2='220' y2='70' stroke='#2563eb' stroke-width='5'/></svg>weder noch – sie schneiden sich schief"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "wkk3l2u_leicht_1",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie liegen diese Linien zueinander?",
     "answers": [
      "senkrecht",
      "schief",
      "parallel",
      "rund"
     ],
     "correct": 2,
     "explanation": "Gleicher Abstand.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 240 150' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='50' x2='220' y2='50' stroke='#2563eb' stroke-width='5'/><line x1='20' y1='110' x2='220' y2='110' stroke='#2563eb' stroke-width='5'/></svg>"
    },
    {
     "id": "wkk3l2u_leicht_2",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie liegen diese Linien zueinander?",
     "answers": [
      "parallel",
      "gar nicht",
      "rund",
      "senkrecht"
     ],
     "correct": 3,
     "explanation": "Rechter Winkel.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 240 150' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='130' x2='220' y2='130' stroke='#2563eb' stroke-width='5'/><line x1='120' y1='20' x2='120' y2='130' stroke='#2563eb' stroke-width='5'/><rect x='120' y='106' width='24' height='24' fill='none' stroke='#f97316' stroke-width='4'/></svg>"
    },
    {
     "id": "wkk3l2u_leicht_3",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Treffen sich parallele Linien?",
     "answers": [
      "immer",
      "nach 10 cm",
      "nie",
      "in der Mitte"
     ],
     "correct": 2,
     "explanation": "Sie laufen nebeneinander.",
     "topic": "rechter_winkel"
    },
    {
     "id": "wkk3l2u_leicht_4",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Womit prüfst du einen rechten Winkel?",
     "answers": [
      "mit dem Geodreieck",
      "mit dem Radiergummi",
      "mit der Schere",
      "mit dem Kleber"
     ],
     "correct": 0,
     "explanation": "Geodreieck.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📐</text></svg>"
    },
    {
     "id": "wkk3l2u_leicht_5",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist parallel?",
     "answers": [
      "ein Kreuz",
      "ein Kreis",
      "ein Zickzack",
      "zwei Schienen eines Gleises"
     ],
     "correct": 3,
     "explanation": "Schienen haben überall gleichen Abstand.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛤️</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "wkk3l2u_mittel_1",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie liegen diese Linien zueinander?",
     "answers": [
      "weder senkrecht noch parallel",
      "senkrecht",
      "parallel",
      "gleich lang"
     ],
     "correct": 0,
     "explanation": "Sie schneiden sich schief.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 240 150' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='40' x2='220' y2='130' stroke='#2563eb' stroke-width='5'/><line x1='20' y1='120' x2='220' y2='70' stroke='#2563eb' stroke-width='5'/></svg>"
    },
    {
     "id": "wkk3l2u_mittel_2",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Linien bilden einen rechten Winkel?",
     "answers": [
      "parallele Linien",
      "krumme Linien",
      "keine",
      "senkrechte Linien"
     ],
     "correct": 3,
     "explanation": "Senkrecht = 90°.",
     "topic": "rechter_winkel"
    },
    {
     "id": "wkk3l2u_mittel_3",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Grad hat ein rechter Winkel?",
     "answers": [
      "90°",
      "45°",
      "180°",
      "60°"
     ],
     "correct": 0,
     "explanation": "90 Grad.",
     "topic": "rechter_winkel"
    },
    {
     "id": "wkk3l2u_mittel_4",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was legst du beim Geodreieck auf die Linie, um senkrecht zu zeichnen?",
     "answers": [
      "die Spitze",
      "die Mittellinie",
      "die Rückseite",
      "den Rand mit Zahlen schräg"
     ],
     "correct": 1,
     "explanation": "Mittellinie auf die Linie.",
     "topic": "rechter_winkel"
    },
    {
     "id": "wkk3l2u_mittel_5",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Kanten am Rechteck sind parallel?",
     "answers": [
      "die nebeneinanderliegenden",
      "die gegenüberliegenden",
      "keine",
      "nur zwei kurze und eine lange"
     ],
     "correct": 1,
     "explanation": "Gegenüber = parallel.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 240 160' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='30' width='180' height='100' fill='#dbeafe' stroke='#1e293b' stroke-width='4'/></svg>"
    }
   ],
   "schwer": [
    {
     "id": "wkk3l2u_schwer_1",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Fensterrahmen hat 4 rechte Winkel. Die obere und untere Kante sind …",
     "answers": [
      "senkrecht",
      "schief",
      "rund",
      "parallel"
     ],
     "correct": 3,
     "explanation": "Gegenüber im Rechteck.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪟</text></svg>"
    },
    {
     "id": "wkk3l2u_schwer_2",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Die linke und die obere Kante eines Blatts sind …",
     "answers": [
      "parallel",
      "gleich lang immer",
      "senkrecht zueinander",
      "schief"
     ],
     "correct": 2,
     "explanation": "Sie treffen sich in einer Ecke.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📄</text></svg>"
    },
    {
     "id": "wkk3l2u_schwer_3",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Paare paralleler Seiten hat ein Quadrat?",
     "answers": [
      "1",
      "4",
      "2",
      "0"
     ],
     "correct": 2,
     "explanation": "oben/unten und links/rechts.",
     "topic": "rechter_winkel",
     "grafik": "<svg viewBox='0 0 240 160' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='20' width='120' height='120' fill='#dbeafe' stroke='#1e293b' stroke-width='4'/></svg>"
    },
    {
     "id": "wkk3l2u_schwer_4",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Buchstaben haben parallele Linien?",
     "answers": [
      "V",
      "O",
      "H",
      "C"
     ],
     "correct": 2,
     "explanation": "Die zwei Striche vom H sind parallel.",
     "topic": "rechter_winkel"
    },
    {
     "id": "wkk3l2u_schwer_5",
     "category": "kurs_wk_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Aussage stimmt?",
     "answers": [
      "Parallele Linien schneiden sich.",
      "Senkrechte Linien sind nie gerade.",
      "Senkrechte Linien bilden 4 rechte Winkel, wenn sie sich kreuzen.",
      "Ein Kreis hat rechte Winkel."
     ],
     "correct": 2,
     "explanation": "Kreuz = 4 rechte Winkel.",
     "topic": "rechter_winkel"
    }
   ]
  },
  "test": [
   {
    "id": "wkk3l2_test_1",
    "category": "kurs_wk_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie liegen diese Linien zueinander?",
    "answers": [
     "parallel",
     "senkrecht",
     "schief",
     "gebogen"
    ],
    "correct": 1,
    "explanation": "Rechter Winkel.",
    "topic": "rechter_winkel",
    "grafik": "<svg viewBox='0 0 240 150' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='130' x2='220' y2='130' stroke='#2563eb' stroke-width='5'/><line x1='120' y1='20' x2='120' y2='130' stroke='#2563eb' stroke-width='5'/><rect x='120' y='106' width='24' height='24' fill='none' stroke='#f97316' stroke-width='4'/></svg>"
   },
   {
    "id": "wkk3l2_test_2",
    "category": "kurs_wk_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie liegen diese Linien zueinander?",
    "answers": [
     "parallel",
     "senkrecht",
     "schief",
     "gekreuzt"
    ],
    "correct": 0,
    "explanation": "Gleicher Abstand.",
    "topic": "rechter_winkel",
    "grafik": "<svg viewBox='0 0 240 150' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='50' x2='220' y2='50' stroke='#2563eb' stroke-width='5'/><line x1='20' y1='110' x2='220' y2='110' stroke='#2563eb' stroke-width='5'/></svg>"
   },
   {
    "id": "wkk3l2_test_3",
    "category": "kurs_wk_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viel Grad hat ein rechter Winkel?",
    "answers": [
     "100°",
     "90°",
     "45°",
     "180°"
    ],
    "correct": 1,
    "explanation": "90°.",
    "topic": "rechter_winkel"
   },
   {
    "id": "wkk3l2_test_4",
    "category": "kurs_wk_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Treffen sich parallele Linien?",
    "answers": [
     "ja",
     "manchmal",
     "nein, nie",
     "immer am Rand"
    ],
    "correct": 2,
    "explanation": "Nie.",
    "topic": "rechter_winkel"
   },
   {
    "id": "wkk3l2_test_5",
    "category": "kurs_wk_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist parallel?",
    "answers": [
     "ein Kreuz",
     "die Linien im Heft",
     "ein Kreis",
     "ein Stern"
    ],
    "correct": 1,
    "explanation": "Heftlinien.",
    "topic": "rechter_winkel",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📓</text></svg>"
   },
   {
    "id": "wkk3l2_test_6",
    "category": "kurs_wk_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Womit zeichnest du einen rechten Winkel genau?",
    "answers": [
     "mit dem Pinsel",
     "mit dem Zirkel",
     "mit dem Geodreieck",
     "freihändig"
    ],
    "correct": 2,
    "explanation": "Geodreieck.",
    "topic": "rechter_winkel",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📐</text></svg>"
   },
   {
    "id": "wkk3l2_test_7",
    "category": "kurs_wk_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie liegen diese Linien zueinander?",
    "answers": [
     "senkrecht",
     "schief – weder noch",
     "parallel",
     "gleich"
    ],
    "correct": 1,
    "explanation": "Kein rechter Winkel.",
    "topic": "rechter_winkel",
    "grafik": "<svg viewBox='0 0 240 150' style='width:100%;max-width:240px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='40' x2='220' y2='130' stroke='#2563eb' stroke-width='5'/><line x1='20' y1='120' x2='220' y2='70' stroke='#2563eb' stroke-width='5'/></svg>"
   },
   {
    "id": "wkk3l2_test_8",
    "category": "kurs_wk_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Paare paralleler Seiten hat ein Rechteck?",
    "answers": [
     "1",
     "4",
     "2",
     "0"
    ],
    "correct": 2,
    "explanation": "Zwei Paare.",
    "topic": "rechter_winkel"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "ri_k4_l1",
  "kurs": "rauminhalt_k4",
  "order": 1,
  "icon": "🧊",
  "title": "Würfel zählen",
  "kurz": "Rauminhalt mit Einheitswürfeln",
  "erklaerung": {
   "intro": "Der <b>Rauminhalt</b> (Volumen) sagt, wie viel Platz ein Körper einnimmt. Wir zählen kleine <b>Einheitswürfel</b>. Bei einem Quader rechnest du: <b>Länge · Breite · Höhe</b>. Ein Quader mit 3 · 2 · 2 Würfeln hat <b>12 Würfel</b>. Ein Würfel mit 1 cm Kante hat <b>1 cm³</b> (Kubikzentimeter).",
   "merksatz": "Rauminhalt = Länge · Breite · Höhe (in Würfeln).",
   "beispiele": [
    "<svg viewBox='0 0 172 170' style='width:100%;max-width:172px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,116 64,116 78,104 44,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 78,104 78,138 64,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='30,82 64,82 78,70 44,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 78,70 78,104 64,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 98,116 112,104 78,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 112,104 112,138 98,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 98,82 112,70 78,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 112,70 112,104 98,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 132,116 146,104 112,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,116 146,104 146,138 132,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 132,82 146,70 112,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,82 146,70 146,104 132,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/></svg>3 Säulen à 2 = 6 Würfel",
    "Quader 3 · 2 · 2 = 12 Würfel",
    "1 Würfel mit 1 cm Kante = 1 cm³"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "rik4l1u_leicht_1",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele Würfel sind das?",
     "answers": [
      "3",
      "2",
      "4",
      "6"
     ],
     "correct": 0,
     "explanation": "3 Würfel nebeneinander.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 172 170' style='width:100%;max-width:172px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,116 64,116 78,104 44,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 78,104 78,138 64,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 98,116 112,104 78,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 112,104 112,138 98,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 132,116 146,104 112,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,116 146,104 146,138 132,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/></svg>"
    },
    {
     "id": "rik4l1u_leicht_2",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele Würfel sind das?",
     "answers": [
      "3",
      "5",
      "2",
      "4"
     ],
     "correct": 3,
     "explanation": "2 + 2.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 138 170' style='width:100%;max-width:160px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,116 64,116 78,104 44,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 78,104 78,138 64,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='30,82 64,82 78,70 44,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 78,70 78,104 64,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 98,116 112,104 78,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 112,104 112,138 98,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 98,82 112,70 78,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 112,70 112,104 98,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/></svg>"
    },
    {
     "id": "rik4l1u_leicht_3",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele Würfel sind das?",
     "answers": [
      "5",
      "3",
      "6",
      "9"
     ],
     "correct": 2,
     "explanation": "3 Säulen à 2.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 172 170' style='width:100%;max-width:172px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,116 64,116 78,104 44,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 78,104 78,138 64,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='30,82 64,82 78,70 44,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 78,70 78,104 64,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 98,116 112,104 78,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 112,104 112,138 98,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 98,82 112,70 78,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 112,70 112,104 98,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 132,116 146,104 112,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,116 146,104 146,138 132,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 132,82 146,70 112,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,82 146,70 146,104 132,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/></svg>"
    },
    {
     "id": "rik4l1u_leicht_4",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was misst der Rauminhalt?",
     "answers": [
      "wie schwer er ist",
      "wie viel Platz ein Körper einnimmt",
      "wie warm er ist",
      "welche Farbe er hat"
     ],
     "correct": 1,
     "explanation": "Volumen.",
     "topic": "rauminhalt"
    },
    {
     "id": "rik4l1u_leicht_5",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele Würfel sind das?",
     "answers": [
      "4",
      "6",
      "5",
      "3"
     ],
     "correct": 2,
     "explanation": "1 + 2 + 2.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 172 170' style='width:100%;max-width:172px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,116 64,116 78,104 44,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 78,104 78,138 64,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 98,116 112,104 78,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 112,104 112,138 98,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 98,82 112,70 78,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 112,70 112,104 98,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 132,116 146,104 112,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,116 146,104 146,138 132,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 132,82 146,70 112,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,82 146,70 146,104 132,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/></svg>"
    }
   ],
   "mittel": [
    {
     "id": "rik4l1u_mittel_1",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Ein Quader ist 3 Würfel lang, 2 breit, 1 hoch. Wie viele Würfel?",
     "answers": [
      "6",
      "5",
      "7",
      "9"
     ],
     "correct": 0,
     "explanation": "3 · 2 · 1.",
     "topic": "rauminhalt"
    },
    {
     "id": "rik4l1u_mittel_2",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Ein Quader ist 4 lang, 2 breit, 2 hoch. Wie viele Würfel?",
     "answers": [
      "8",
      "12",
      "10",
      "16"
     ],
     "correct": 3,
     "explanation": "4 · 2 · 2.",
     "topic": "rauminhalt"
    },
    {
     "id": "rik4l1u_mittel_3",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Würfel sind das?",
     "answers": [
      "8",
      "9",
      "6",
      "10"
     ],
     "correct": 1,
     "explanation": "3 Säulen à 3.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 172 170' style='width:100%;max-width:172px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,116 64,116 78,104 44,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 78,104 78,138 64,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='30,82 64,82 78,70 44,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 78,70 78,104 64,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='30,48 64,48 78,36 44,36' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='48' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,48 78,36 78,70 64,82' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 98,116 112,104 78,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 112,104 112,138 98,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 98,82 112,70 78,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 112,70 112,104 98,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,48 98,48 112,36 78,36' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='48' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,48 112,36 112,70 98,82' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 132,116 146,104 112,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,116 146,104 146,138 132,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 132,82 146,70 112,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,82 146,70 146,104 132,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,48 132,48 146,36 112,36' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='48' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,48 146,36 146,70 132,82' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/></svg>"
    },
    {
     "id": "rik4l1u_mittel_4",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist 1 cm³?",
     "answers": [
      "ein Quadrat mit 1 cm",
      "eine Linie von 1 cm",
      "ein Würfel mit 1 cm Kantenlänge",
      "1 Liter"
     ],
     "correct": 2,
     "explanation": "Kubikzentimeter.",
     "topic": "rauminhalt"
    },
    {
     "id": "rik4l1u_mittel_5",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Ein Würfel aus 2 · 2 · 2 kleinen Würfeln hat …",
     "answers": [
      "6",
      "8 kleine Würfel",
      "4",
      "12"
     ],
     "correct": 1,
     "explanation": "2 · 2 · 2 = 8.",
     "topic": "rauminhalt"
    }
   ],
   "schwer": [
    {
     "id": "rik4l1u_schwer_1",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Würfel aus 3 · 3 · 3 kleinen Würfeln hat …",
     "answers": [
      "9",
      "27 kleine Würfel",
      "18",
      "36"
     ],
     "correct": 1,
     "explanation": "3 · 3 · 3 = 27.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎲</text></svg>"
    },
    {
     "id": "rik4l1u_schwer_2",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Quader 5 · 3 · 2: Wie viele Würfel?",
     "answers": [
      "10",
      "25",
      "30",
      "15"
     ],
     "correct": 2,
     "explanation": "5 · 3 = 15, · 2 = 30.",
     "topic": "rauminhalt"
    },
    {
     "id": "rik4l1u_schwer_3",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Würfel sind das?",
     "answers": [
      "9",
      "8",
      "10",
      "12"
     ],
     "correct": 2,
     "explanation": "1 + 2 + 3 + 4.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 206 170' style='width:100%;max-width:206px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,116 64,116 78,104 44,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 78,104 78,138 64,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 98,116 112,104 78,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 112,104 112,138 98,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 98,82 112,70 78,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 112,70 112,104 98,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 132,116 146,104 112,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,116 146,104 146,138 132,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 132,82 146,70 112,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,82 146,70 146,104 132,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,48 132,48 146,36 112,36' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='48' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,48 146,36 146,70 132,82' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,116 166,116 180,104 146,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='132' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='166,116 180,104 180,138 166,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,82 166,82 180,70 146,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='132' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='166,82 180,70 180,104 166,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,48 166,48 180,36 146,36' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='132' y='48' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='166,48 180,36 180,70 166,82' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,14 166,14 180,2 146,2' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='132' y='14' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='166,14 180,2 180,36 166,48' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/></svg>"
    },
    {
     "id": "rik4l1u_schwer_4",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Karton fasst 4 Reihen zu 5 Würfeln in 3 Schichten. Wie viele?",
     "answers": [
      "12",
      "60",
      "20",
      "45"
     ],
     "correct": 1,
     "explanation": "4 · 5 · 3.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📦</text></svg>"
    },
    {
     "id": "rik4l1u_schwer_5",
     "category": "kurs_ri_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Quader hat mehr Würfel: 4 · 3 · 1 oder 2 · 2 · 2?",
     "answers": [
      "2 · 2 · 2",
      "beide gleich",
      "kann man nicht sagen",
      "4 · 3 · 1"
     ],
     "correct": 3,
     "explanation": "12 > 8.",
     "topic": "rauminhalt"
    }
   ]
  },
  "test": [
   {
    "id": "rik4l1_test_1",
    "category": "kurs_ri_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Würfel sind das?",
    "answers": [
     "4",
     "3",
     "5",
     "6"
    ],
    "correct": 0,
    "explanation": "2 + 2.",
    "topic": "rauminhalt",
    "grafik": "<svg viewBox='0 0 138 170' style='width:100%;max-width:160px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,116 64,116 78,104 44,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 78,104 78,138 64,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='30,82 64,82 78,70 44,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 78,70 78,104 64,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 98,116 112,104 78,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 112,104 112,138 98,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 98,82 112,70 78,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 112,70 112,104 98,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/></svg>"
   },
   {
    "id": "rik4l1_test_2",
    "category": "kurs_ri_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Würfel sind das?",
    "answers": [
     "6",
     "7",
     "8",
     "5"
    ],
    "correct": 1,
    "explanation": "3 + 1 + 3.",
    "topic": "rauminhalt",
    "grafik": "<svg viewBox='0 0 172 170' style='width:100%;max-width:172px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,116 64,116 78,104 44,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 78,104 78,138 64,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='30,82 64,82 78,70 44,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 78,70 78,104 64,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='30,48 64,48 78,36 44,36' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='48' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,48 78,36 78,70 64,82' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 98,116 112,104 78,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 112,104 112,138 98,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 132,116 146,104 112,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,116 146,104 146,138 132,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 132,82 146,70 112,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,82 146,70 146,104 132,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,48 132,48 146,36 112,36' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='48' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,48 146,36 146,70 132,82' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/></svg>"
   },
   {
    "id": "rik4l1_test_3",
    "category": "kurs_ri_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Quader 2 · 2 · 3: Wie viele Würfel?",
    "answers": [
     "12",
     "7",
     "10",
     "9"
    ],
    "correct": 0,
    "explanation": "2 · 2 · 3.",
    "topic": "rauminhalt"
   },
   {
    "id": "rik4l1_test_4",
    "category": "kurs_ri_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was rechnest du für den Rauminhalt eines Quaders?",
    "answers": [
     "Länge + Breite",
     "Länge · Breite",
     "Länge · Breite · Höhe",
     "2 · Länge"
    ],
    "correct": 2,
    "explanation": "Drei Maße.",
    "topic": "rauminhalt"
   },
   {
    "id": "rik4l1_test_5",
    "category": "kurs_ri_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Quader 3 · 3 · 1: Wie viele Würfel?",
    "answers": [
     "9",
     "6",
     "7",
     "12"
    ],
    "correct": 0,
    "explanation": "3 · 3 · 1.",
    "topic": "rauminhalt"
   },
   {
    "id": "rik4l1_test_6",
    "category": "kurs_ri_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie heißt die Einheit für einen Würfel mit 1 cm Kante?",
    "answers": [
     "cm²",
     "cm³",
     "cm",
     "ml²"
    ],
    "correct": 1,
    "explanation": "Kubikzentimeter.",
    "topic": "rauminhalt"
   },
   {
    "id": "rik4l1_test_7",
    "category": "kurs_ri_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Würfel sind das?",
    "answers": [
     "6",
     "7",
     "9",
     "8"
    ],
    "correct": 3,
    "explanation": "4 Säulen à 2.",
    "topic": "rauminhalt",
    "grafik": "<svg viewBox='0 0 206 170' style='width:100%;max-width:206px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,116 64,116 78,104 44,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 78,104 78,138 64,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='30,82 64,82 78,70 44,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='30' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 78,70 78,104 64,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,116 98,116 112,104 78,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 112,104 112,138 98,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='64,82 98,82 112,70 78,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='64' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 112,70 112,104 98,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,116 132,116 146,104 112,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,116 146,104 146,138 132,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='98,82 132,82 146,70 112,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='98' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,82 146,70 146,104 132,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,116 166,116 180,104 146,104' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='132' y='116' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='166,116 180,104 180,138 166,150' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/><polygon points='132,82 166,82 180,70 146,70' fill='#fdba74' stroke='#7c2d12' stroke-width='2'/><rect x='132' y='82' width='34' height='34' fill='#fb923c' stroke='#7c2d12' stroke-width='2'/><polygon points='166,82 180,70 180,104 166,116' fill='#ea580c' stroke='#7c2d12' stroke-width='2'/></svg>"
   },
   {
    "id": "rik4l1_test_8",
    "category": "kurs_ri_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Würfel aus 2 · 2 · 2 kleinen Würfeln?",
    "answers": [
     "6",
     "4",
     "8",
     "16"
    ],
    "correct": 2,
    "explanation": "8.",
    "topic": "rauminhalt"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "ri_k4_l2",
  "kurs": "rauminhalt_k4",
  "order": 2,
  "icon": "🥛",
  "title": "Liter und Milliliter",
  "kurz": "Hohlmaße umrechnen und schätzen",
  "erklaerung": {
   "intro": "Wie viel in ein Gefäß passt, misst man in <b>Litern (l)</b> und <b>Millilitern (ml)</b>. <b>1 l = 1000 ml</b>. Eine Milchtüte hat 1 l, ein Glas etwa 200 ml, ein Esslöffel etwa 15 ml. ½ l = 500 ml, ¼ l = 250 ml. Ein Liter passt genau in einen Würfel mit 10 cm Kante.",
   "merksatz": "1 l = 1000 ml. ½ l = 500 ml, ¼ l = 250 ml.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥛</text></svg>Milchtüte: 1 l = 1000 ml",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥤</text></svg>Glas: etwa 200 ml",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪣</text></svg>Eimer: etwa 10 l"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "rik4l2u_leicht_1",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele ml sind 1 l?",
     "answers": [
      "1000 ml",
      "100 ml",
      "10 ml",
      "500 ml"
     ],
     "correct": 0,
     "explanation": "1 l = 1000 ml.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥛</text></svg>"
    },
    {
     "id": "rik4l2u_leicht_2",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viel passt etwa in ein Trinkglas?",
     "answers": [
      "2 l",
      "20 l",
      "200 ml",
      "2 ml"
     ],
     "correct": 2,
     "explanation": "Etwa 200 ml.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥤</text></svg>"
    },
    {
     "id": "rik4l2u_leicht_3",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viel passt in eine Milchtüte?",
     "answers": [
      "1 ml",
      "10 l",
      "1 l",
      "100 l"
     ],
     "correct": 2,
     "explanation": "1 Liter.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥛</text></svg>"
    },
    {
     "id": "rik4l2u_leicht_4",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele ml sind ½ l?",
     "answers": [
      "50 ml",
      "250 ml",
      "200 ml",
      "500 ml"
     ],
     "correct": 3,
     "explanation": "1000 : 2.",
     "topic": "rauminhalt"
    },
    {
     "id": "rik4l2u_leicht_5",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Einheit passt? Eine Badewanne fasst 150 ___.",
     "answers": [
      "ml",
      "kg",
      "cm",
      "l"
     ],
     "correct": 3,
     "explanation": "Große Mengen in Litern.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛁</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "rik4l2u_mittel_1",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele ml sind 2 l?",
     "answers": [
      "200 ml",
      "20 ml",
      "2 ml",
      "2000 ml"
     ],
     "correct": 3,
     "explanation": "2 · 1000.",
     "topic": "rauminhalt"
    },
    {
     "id": "rik4l2u_mittel_2",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele ml sind ¼ l?",
     "answers": [
      "250 ml",
      "25 ml",
      "400 ml",
      "500 ml"
     ],
     "correct": 0,
     "explanation": "1000 : 4.",
     "topic": "rauminhalt"
    },
    {
     "id": "rik4l2u_mittel_3",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele l sind 3000 ml?",
     "answers": [
      "30 l",
      "300 l",
      "3 l",
      "0,3 l"
     ],
     "correct": 2,
     "explanation": "3000 : 1000.",
     "topic": "rauminhalt"
    },
    {
     "id": "rik4l2u_mittel_4",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Einheit passt? Ein Teelöffel Medizin: 5 ___.",
     "answers": [
      "ml",
      "l",
      "g",
      "m"
     ],
     "correct": 0,
     "explanation": "Kleine Mengen in ml.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥄</text></svg>"
    },
    {
     "id": "rik4l2u_mittel_5",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele 250-ml-Gläser füllt 1 l?",
     "answers": [
      "2",
      "5",
      "10",
      "4"
     ],
     "correct": 3,
     "explanation": "1000 : 250.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥤</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "rik4l2u_schwer_1",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele ml sind 1 l 500 ml?",
     "answers": [
      "150 ml",
      "1500 ml",
      "1050 ml",
      "15 000 ml"
     ],
     "correct": 1,
     "explanation": "1000 + 500.",
     "topic": "rauminhalt"
    },
    {
     "id": "rik4l2u_schwer_2",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Eine Flasche hat 1,5 l. Wie viele ml?",
     "answers": [
      "150 ml",
      "15 ml",
      "1500 ml",
      "105 ml"
     ],
     "correct": 2,
     "explanation": "1,5 · 1000.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍾</text></svg>"
    },
    {
     "id": "rik4l2u_schwer_3",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist mehr: 800 ml oder ¾ l?",
     "answers": [
      "¾ l",
      "beides gleich",
      "800 ml",
      "kann man nicht sagen"
     ],
     "correct": 2,
     "explanation": "¾ l = 750 ml.",
     "topic": "rauminhalt"
    },
    {
     "id": "rik4l2u_schwer_4",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Tim trinkt 4 Gläser zu 200 ml. Wie viel ist das?",
     "answers": [
      "600 ml",
      "1 l",
      "800 ml",
      "204 ml"
     ],
     "correct": 2,
     "explanation": "4 · 200.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥤</text></svg>"
    },
    {
     "id": "rik4l2u_schwer_5",
     "category": "kurs_ri_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viel passt in einen Würfel mit 10 cm Kante?",
     "answers": [
      "1 l",
      "10 ml",
      "100 l",
      "10 l"
     ],
     "correct": 0,
     "explanation": "1 dm³ = 1 l.",
     "topic": "rauminhalt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧊</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "rik4l2_test_1",
    "category": "kurs_ri_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele ml sind 1 l?",
    "answers": [
     "1000",
     "100",
     "10",
     "10 000"
    ],
    "correct": 0,
    "explanation": "1000.",
    "topic": "rauminhalt"
   },
   {
    "id": "rik4l2_test_2",
    "category": "kurs_ri_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele ml sind ½ l?",
    "answers": [
     "50",
     "250",
     "200",
     "500"
    ],
    "correct": 3,
    "explanation": "500.",
    "topic": "rauminhalt"
   },
   {
    "id": "rik4l2_test_3",
    "category": "kurs_ri_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Einheit passt? Ein Eimer fasst 10 ___.",
    "answers": [
     "l",
     "ml",
     "kg",
     "m"
    ],
    "correct": 0,
    "explanation": "Liter.",
    "topic": "rauminhalt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪣</text></svg>"
   },
   {
    "id": "rik4l2_test_4",
    "category": "kurs_ri_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele l sind 2000 ml?",
    "answers": [
     "20 l",
     "200 l",
     "2 l",
     "0,2 l"
    ],
    "correct": 2,
    "explanation": "2.",
    "topic": "rauminhalt"
   },
   {
    "id": "rik4l2_test_5",
    "category": "kurs_ri_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele ml sind ¼ l?",
    "answers": [
     "25",
     "250",
     "400",
     "750"
    ],
    "correct": 1,
    "explanation": "250.",
    "topic": "rauminhalt"
   },
   {
    "id": "rik4l2_test_6",
    "category": "kurs_ri_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele 500-ml-Flaschen sind 2 l?",
    "answers": [
     "2",
     "5",
     "4",
     "8"
    ],
    "correct": 2,
    "explanation": "2000 : 500.",
    "topic": "rauminhalt"
   },
   {
    "id": "rik4l2_test_7",
    "category": "kurs_ri_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist mehr: 1 l oder 900 ml?",
    "answers": [
     "900 ml",
     "gleich",
     "kann man nicht sagen",
     "1 l"
    ],
    "correct": 3,
    "explanation": "1000 > 900.",
    "topic": "rauminhalt"
   },
   {
    "id": "rik4l2_test_8",
    "category": "kurs_ri_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viel passt etwa in einen Esslöffel?",
    "answers": [
     "15 l",
     "15 ml",
     "150 ml",
     "1 l"
    ],
    "correct": 1,
    "explanation": "Etwa 15 ml.",
    "topic": "rauminhalt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥄</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
