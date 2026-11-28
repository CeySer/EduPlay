// Neue Mathekurse: K2 Geteilt rechnen, K3 Teilen mit Rest (28.11.2026)
(function () {
    const extraKurse = [{"id": "geteilt_k2", "title": "Geteilt rechnen", "icon": "🍪", "grade": 2, "subject": "mathe", "beschreibung": "Aufteilen, verteilen und mit der Malaufgabe prüfen."}, {"id": "rest_k3", "title": "Teilen mit Rest", "icon": "🧮", "grade": 3, "subject": "mathe", "beschreibung": "Wenn es nicht aufgeht: Rest finden und in Sachaufgaben richtig deuten."}];
    const extraLektionen = [
 {
  "id": "gt_k2_l1",
  "kurs": "geteilt_k2",
  "order": 1,
  "icon": "🍪",
  "title": "Aufteilen und Verteilen",
  "kurz": "Gerecht teilen mit dem Zeichen :",
  "erklaerung": {
   "intro": "Beim <b>Teilen</b> wird eine Menge <b>gerecht</b> aufgeteilt. <b>Verteilen:</b> 6 Kekse an 2 Kinder – jedes bekommt 3. <b>Aufteilen:</b> 6 Kekse, je 2 in eine Tüte – das gibt 3 Tüten. Man schreibt <b>6 : 2 = 3</b> und sagt „6 geteilt durch 2 ist 3“.",
   "merksatz": "Teilen heißt: gerecht verteilen. Zeichen: geteilt durch ( : ).",
   "beispiele": [
    "<svg viewBox='0 0 536 93' style='width:100%;max-width:536px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='268' y='73' text-anchor='middle' font-size='72'>🍪🍪🍪🍪🍪🍪</text></svg>6 Kekse an 2 Kinder: 6 : 2 = 3",
    "<svg viewBox='0 0 702 93' style='width:100%;max-width:702px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='351' y='73' text-anchor='middle' font-size='72'>🍎🍎🍎🍎🍎🍎🍎🍎</text></svg>8 Äpfel an 4 Kinder: 8 : 4 = 2",
    "<svg viewBox='0 0 868 93' style='width:100%;max-width:868px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='434' y='73' text-anchor='middle' font-size='72'>🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈</text></svg>10 Ballons, je 5 in einen Strauß: 10 : 5 = 2"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "gtk2l1u_leicht_1",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "6 Kekse für 2 Kinder. Wie viele bekommt jedes Kind?",
     "answers": [
      "2",
      "4",
      "6",
      "3"
     ],
     "correct": 3,
     "explanation": "6 : 2 = 3.",
     "topic": "geteilt",
     "grafik": "<svg viewBox='0 0 536 93' style='width:100%;max-width:536px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='268' y='73' text-anchor='middle' font-size='72'>🍪🍪🍪🍪🍪🍪</text></svg>"
    },
    {
     "id": "gtk2l1u_leicht_2",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "4 Äpfel für 2 Kinder. Wie viele bekommt jedes Kind?",
     "answers": [
      "2",
      "1",
      "3",
      "4"
     ],
     "correct": 0,
     "explanation": "4 : 2 = 2.",
     "topic": "geteilt",
     "grafik": "<svg viewBox='0 0 371 93' style='width:100%;max-width:371px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='185' y='73' text-anchor='middle' font-size='72'>🍎🍎🍎🍎</text></svg>"
    },
    {
     "id": "gtk2l1u_leicht_3",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie sagt man zu 8 : 2?",
     "answers": [
      "8 geteilt durch 2",
      "8 mal 2",
      "8 plus 2",
      "8 minus 2"
     ],
     "correct": 0,
     "explanation": "Das Zeichen : heißt geteilt durch.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l1u_leicht_4",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "10 : 2 =",
     "answers": [
      "4",
      "8",
      "5",
      "12"
     ],
     "correct": 2,
     "explanation": "2 · 5 = 10.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l1u_leicht_5",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "9 Bonbons für 3 Kinder. Wie viele bekommt jedes Kind?",
     "answers": [
      "2",
      "6",
      "3",
      "4"
     ],
     "correct": 2,
     "explanation": "9 : 3 = 3.",
     "topic": "geteilt",
     "grafik": "<svg viewBox='0 0 785 93' style='width:100%;max-width:785px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='392' y='73' text-anchor='middle' font-size='72'>🍬🍬🍬🍬🍬🍬🍬🍬🍬</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "gtk2l1u_mittel_1",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "12 Stifte in Gruppen zu 3. Wie viele Gruppen?",
     "answers": [
      "4",
      "3",
      "6",
      "9"
     ],
     "correct": 0,
     "explanation": "12 : 3 = 4.",
     "topic": "geteilt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>✏️</text></svg>"
    },
    {
     "id": "gtk2l1u_mittel_2",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "8 Räder, jedes Fahrrad hat 2. Wie viele Fahrräder?",
     "answers": [
      "2",
      "4",
      "6",
      "16"
     ],
     "correct": 1,
     "explanation": "8 : 2 = 4.",
     "topic": "geteilt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚲</text></svg>"
    },
    {
     "id": "gtk2l1u_mittel_3",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "15 : 5 =",
     "answers": [
      "5",
      "10",
      "3",
      "4"
     ],
     "correct": 2,
     "explanation": "5 · 3 = 15.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l1u_mittel_4",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "20 Euro für 2 Kinder. Wie viel bekommt jedes Kind?",
     "answers": [
      "10 €",
      "5 €",
      "18 €",
      "22 €"
     ],
     "correct": 0,
     "explanation": "20 : 2 = 10.",
     "topic": "geteilt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💶</text></svg>"
    },
    {
     "id": "gtk2l1u_mittel_5",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist gerecht verteilt?",
     "answers": [
      "Ein Kind bekommt alles.",
      "Jedes Kind bekommt etwas anderes.",
      "Jedes Kind bekommt gleich viel.",
      "Keiner bekommt etwas."
     ],
     "correct": 2,
     "explanation": "Gerecht = gleich viel.",
     "topic": "geteilt"
    }
   ],
   "schwer": [
    {
     "id": "gtk2l1u_schwer_1",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "18 Eier, je 6 in einen Karton. Wie viele Kartons?",
     "answers": [
      "2",
      "4",
      "12",
      "3"
     ],
     "correct": 3,
     "explanation": "18 : 6 = 3.",
     "topic": "geteilt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥚</text></svg>"
    },
    {
     "id": "gtk2l1u_schwer_2",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "16 Kinder in 4 gleich große Gruppen. Wie viele pro Gruppe?",
     "answers": [
      "2",
      "4",
      "8",
      "12"
     ],
     "correct": 1,
     "explanation": "16 : 4 = 4.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l1u_schwer_3",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "30 : 10 =",
     "answers": [
      "20",
      "3",
      "40",
      "300"
     ],
     "correct": 1,
     "explanation": "10 · 3 = 30.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l1u_schwer_4",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Lea verteilt 14 Murmeln an 2 Freunde. Wie viele bekommt jeder?",
     "answers": [
      "6",
      "7",
      "12",
      "8"
     ],
     "correct": 1,
     "explanation": "14 : 2 = 7.",
     "topic": "geteilt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔵</text></svg>"
    },
    {
     "id": "gtk2l1u_schwer_5",
     "category": "kurs_gt_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Aufgabe passt? 12 Muffins, je 4 auf einen Teller.",
     "answers": [
      "12 − 4 = 8",
      "12 : 4 = 3",
      "12 + 4 = 16",
      "4 : 12 = 3"
     ],
     "correct": 1,
     "explanation": "Aufteilen: 12 : 4.",
     "topic": "geteilt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧁</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "gtk2l1_test_1",
    "category": "kurs_gt_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "8 Kekse für 4 Kinder. Wie viele bekommt jedes Kind?",
    "answers": [
     "4",
     "1",
     "3",
     "2"
    ],
    "correct": 3,
    "explanation": "8 : 4 = 2.",
    "topic": "geteilt",
    "grafik": "<svg viewBox='0 0 702 93' style='width:100%;max-width:702px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='351' y='73' text-anchor='middle' font-size='72'>🍪🍪🍪🍪🍪🍪🍪🍪</text></svg>"
   },
   {
    "id": "gtk2l1_test_2",
    "category": "kurs_gt_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "6 : 3 =",
    "answers": [
     "3",
     "9",
     "2",
     "1"
    ],
    "correct": 2,
    "explanation": "3 · 2 = 6.",
    "topic": "geteilt"
   },
   {
    "id": "gtk2l1_test_3",
    "category": "kurs_gt_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "20 : 5 =",
    "answers": [
     "5",
     "4",
     "15",
     "3"
    ],
    "correct": 1,
    "explanation": "5 · 4 = 20.",
    "topic": "geteilt"
   },
   {
    "id": "gtk2l1_test_4",
    "category": "kurs_gt_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "10 Socken, immer 2 sind ein Paar. Wie viele Paare?",
    "answers": [
     "5",
     "2",
     "8",
     "4"
    ],
    "correct": 0,
    "explanation": "10 : 2 = 5.",
    "topic": "geteilt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧦</text></svg>"
   },
   {
    "id": "gtk2l1_test_5",
    "category": "kurs_gt_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "12 Bananen für 3 Affen. Wie viele bekommt jeder?",
    "answers": [
     "3",
     "4",
     "6",
     "9"
    ],
    "correct": 1,
    "explanation": "12 : 3 = 4.",
    "topic": "geteilt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍌</text></svg>"
   },
   {
    "id": "gtk2l1_test_6",
    "category": "kurs_gt_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie heißt das Zeichen für geteilt?",
    "answers": [
     ":",
     "·",
     "+",
     "−"
    ],
    "correct": 0,
    "explanation": "Geteilt: Doppelpunkt.",
    "topic": "geteilt"
   },
   {
    "id": "gtk2l1_test_7",
    "category": "kurs_gt_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "40 : 10 =",
    "answers": [
     "30",
     "50",
     "10",
     "4"
    ],
    "correct": 3,
    "explanation": "10 · 4 = 40.",
    "topic": "geteilt"
   },
   {
    "id": "gtk2l1_test_8",
    "category": "kurs_gt_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ben verteilt 9 Karten an 3 Freunde. Wie viele bekommt jeder?",
    "answers": [
     "6",
     "2",
     "3",
     "4"
    ],
    "correct": 2,
    "explanation": "9 : 3 = 3.",
    "topic": "geteilt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🃏</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "gt_k2_l2",
  "kurs": "geteilt_k2",
  "order": 2,
  "icon": "🔄",
  "title": "Geteilt und Mal gehören zusammen",
  "kurz": "Umkehraufgaben und Aufgabenfamilien",
  "erklaerung": {
   "intro": "Geteilt ist die <b>Umkehrung</b> von Mal. Aus <b>3 · 4 = 12</b> folgt <b>12 : 4 = 3</b> und <b>12 : 3 = 4</b>. So kannst du jede Geteiltaufgabe mit dem Einmaleins lösen und prüfen. Vier Aufgaben mit denselben Zahlen heißen <b>Aufgabenfamilie</b>.",
   "merksatz": "Denk an die Malaufgabe: 12 : 4 = ? → ? · 4 = 12.",
   "beispiele": [
    "2 · 5 = 10 → 10 : 5 = 2 und 10 : 2 = 5",
    "Prüfen: 15 : 3 = 5, denn 5 · 3 = 15",
    "Familie: 4 · 2 = 8, 2 · 4 = 8, 8 : 2 = 4, 8 : 4 = 2"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "gtk2l2u_leicht_1",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Malaufgabe hilft bei 10 : 2?",
     "answers": [
      "10 · 2 = 20",
      "5 · 2 = 10",
      "2 + 10 = 12",
      "10 − 2 = 8"
     ],
     "correct": 1,
     "explanation": "? · 2 = 10 → 5.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l2u_leicht_2",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "3 · 5 = 15. Also ist 15 : 5 =",
     "answers": [
      "5",
      "3",
      "15",
      "10"
     ],
     "correct": 1,
     "explanation": "Umkehraufgabe.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l2u_leicht_3",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "4 · 2 = 8. Also ist 8 : 2 =",
     "answers": [
      "2",
      "6",
      "4",
      "16"
     ],
     "correct": 2,
     "explanation": "Umkehraufgabe.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l2u_leicht_4",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Zahl fehlt: ___ · 2 = 6?",
     "answers": [
      "2",
      "4",
      "12",
      "3"
     ],
     "correct": 3,
     "explanation": "3 · 2 = 6.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l2u_leicht_5",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie prüfst du 6 : 2 = 3?",
     "answers": [
      "3 + 2 = 5",
      "3 · 2 = 6",
      "6 · 2 = 12",
      "6 − 3 = 3"
     ],
     "correct": 1,
     "explanation": "Mit der Malaufgabe.",
     "topic": "geteilt"
    }
   ],
   "mittel": [
    {
     "id": "gtk2l2u_mittel_1",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Aufgabe gehört NICHT zur Familie 2, 5, 10?",
     "answers": [
      "2 · 5 = 10",
      "10 : 2 = 5",
      "10 : 5 = 2",
      "10 : 10 = 1"
     ],
     "correct": 3,
     "explanation": "In der Familie kommen nur 2, 5 und 10 vor.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l2u_mittel_2",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "5 · 4 = 20. Also ist 20 : 4 =",
     "answers": [
      "5",
      "4",
      "16",
      "24"
     ],
     "correct": 0,
     "explanation": "Umkehraufgabe.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l2u_mittel_3",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Zahl fehlt: 18 : ___ = 9?",
     "answers": [
      "3",
      "2",
      "9",
      "6"
     ],
     "correct": 1,
     "explanation": "9 · 2 = 18.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l2u_mittel_4",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Geteiltaufgabe passt zu 3 · 6 = 18?",
     "answers": [
      "18 : 9 = 2",
      "6 : 3 = 2",
      "18 − 6 = 12",
      "18 : 6 = 3"
     ],
     "correct": 3,
     "explanation": "Umkehrung von 3 · 6.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l2u_mittel_5",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "12 : 2 =",
     "answers": [
      "5",
      "6",
      "10",
      "14"
     ],
     "correct": 1,
     "explanation": "6 · 2 = 12.",
     "topic": "geteilt"
    }
   ],
   "schwer": [
    {
     "id": "gtk2l2u_schwer_1",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl fehlt: ___ : 5 = 4?",
     "answers": [
      "9",
      "1",
      "20",
      "25"
     ],
     "correct": 2,
     "explanation": "4 · 5 = 20.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l2u_schwer_2",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Aufgaben hat die Familie 3, 4, 12?",
     "answers": [
      "2",
      "3",
      "4",
      "6"
     ],
     "correct": 2,
     "explanation": "3·4, 4·3, 12:3, 12:4.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l2u_schwer_3",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Mia rechnet 16 : 2 = 7. Was zeigt die Probe?",
     "answers": [
      "richtig, denn 7 · 2 = 16",
      "richtig, denn 16 − 2 = 14",
      "falsch, denn 7 · 2 = 14",
      "kann man nicht prüfen"
     ],
     "correct": 2,
     "explanation": "Richtig ist 8.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l2u_schwer_4",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl fehlt: 25 : ___ = 5?",
     "answers": [
      "5",
      "20",
      "10",
      "4"
     ],
     "correct": 0,
     "explanation": "5 · 5 = 25.",
     "topic": "geteilt"
    },
    {
     "id": "gtk2l2u_schwer_5",
     "category": "kurs_gt_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Aufgabe hat das Ergebnis 3?",
     "answers": [
      "15 : 3",
      "15 : 5",
      "12 : 3",
      "10 : 2"
     ],
     "correct": 1,
     "explanation": "15 : 5 = 3.",
     "topic": "geteilt"
    }
   ]
  },
  "test": [
   {
    "id": "gtk2l2_test_1",
    "category": "kurs_gt_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "2 · 7 = 14. Also ist 14 : 7 =",
    "answers": [
     "2",
     "7",
     "14",
     "12"
    ],
    "correct": 0,
    "explanation": "Umkehraufgabe.",
    "topic": "geteilt"
   },
   {
    "id": "gtk2l2_test_2",
    "category": "kurs_gt_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Malaufgabe hilft bei 20 : 10?",
    "answers": [
     "10 · 10 = 100",
     "20 · 10 = 200",
     "20 + 10 = 30",
     "2 · 10 = 20"
    ],
    "correct": 3,
    "explanation": "? · 10 = 20.",
    "topic": "geteilt"
   },
   {
    "id": "gtk2l2_test_3",
    "category": "kurs_gt_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl fehlt: 8 : ___ = 4?",
    "answers": [
     "4",
     "2",
     "8",
     "6"
    ],
    "correct": 1,
    "explanation": "4 · 2 = 8.",
    "topic": "geteilt"
   },
   {
    "id": "gtk2l2_test_4",
    "category": "kurs_gt_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "16 : 4 =",
    "answers": [
     "4",
     "2",
     "8",
     "12"
    ],
    "correct": 0,
    "explanation": "4 · 4 = 16.",
    "topic": "geteilt"
   },
   {
    "id": "gtk2l2_test_5",
    "category": "kurs_gt_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie prüfst du 30 : 5 = 6?",
    "answers": [
     "6 + 5 = 11",
     "30 · 5 = 150",
     "6 · 5 = 30",
     "30 − 5 = 25"
    ],
    "correct": 2,
    "explanation": "Mit der Malaufgabe.",
    "topic": "geteilt"
   },
   {
    "id": "gtk2l2_test_6",
    "category": "kurs_gt_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Aufgabe gehört zur Familie 4, 5, 20?",
    "answers": [
     "20 : 2 = 10",
     "4 + 5 = 9",
     "20 : 4 = 5",
     "5 · 5 = 25"
    ],
    "correct": 2,
    "explanation": "4 · 5 = 20.",
    "topic": "geteilt"
   },
   {
    "id": "gtk2l2_test_7",
    "category": "kurs_gt_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl fehlt: ___ : 2 = 9?",
    "answers": [
     "11",
     "18",
     "7",
     "16"
    ],
    "correct": 1,
    "explanation": "9 · 2 = 18.",
    "topic": "geteilt"
   },
   {
    "id": "gtk2l2_test_8",
    "category": "kurs_gt_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Aufgabe hat das Ergebnis 5?",
    "answers": [
     "10 : 2",
     "10 : 5",
     "12 : 3",
     "8 : 2"
    ],
    "correct": 0,
    "explanation": "10 : 2 = 5.",
    "topic": "geteilt"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "rest_k3_l1",
  "kurs": "rest_k3",
  "order": 1,
  "icon": "🧮",
  "title": "Was bleibt übrig?",
  "kurz": "Teilen, wenn es nicht aufgeht",
  "erklaerung": {
   "intro": "Nicht jede Geteiltaufgabe geht auf. <b>17 : 5</b>: In die 17 passt die 5 dreimal (3 · 5 = 15). Es bleiben <b>2 übrig</b>. Man schreibt <b>17 : 5 = 3 Rest 2</b> (kurz: 3 R 2). Der Rest ist immer <b>kleiner</b> als die Zahl, durch die du teilst.",
   "merksatz": "Größte passende Malaufgabe suchen – Unterschied ist der Rest. Rest < Teiler!",
   "beispiele": [
    "<svg viewBox='0 0 619 93' style='width:100%;max-width:619px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='309' y='73' text-anchor='middle' font-size='72'>🍬🍬🍬🍬🍬🍬🍬</text></svg>7 Bonbons an 2 Kinder: 7 : 2 = 3 Rest 1",
    "17 : 5 → 3 · 5 = 15 → 17 − 15 = 2 → 3 Rest 2",
    "Probe: 3 · 5 + 2 = 17 ✔"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "restk3l1u_leicht_1",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "7 Bonbons für 2 Kinder. Wie viele bleiben übrig?",
     "answers": [
      "0",
      "1",
      "2",
      "3"
     ],
     "correct": 1,
     "explanation": "7 : 2 = 3 Rest 1.",
     "topic": "teilen_rest",
     "grafik": "<svg viewBox='0 0 619 93' style='width:100%;max-width:619px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='309' y='73' text-anchor='middle' font-size='72'>🍬🍬🍬🍬🍬🍬🍬</text></svg>"
    },
    {
     "id": "restk3l1u_leicht_2",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "9 : 2 =",
     "answers": [
      "4 Rest 1",
      "4",
      "5 Rest 1",
      "3 Rest 3"
     ],
     "correct": 0,
     "explanation": "4 · 2 = 8, Rest 1.",
     "topic": "teilen_rest"
    },
    {
     "id": "restk3l1u_leicht_3",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "10 : 3 =",
     "answers": [
      "3",
      "4 Rest 1",
      "3 Rest 1",
      "2 Rest 4"
     ],
     "correct": 2,
     "explanation": "3 · 3 = 9, Rest 1.",
     "topic": "teilen_rest"
    },
    {
     "id": "restk3l1u_leicht_4",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Geht 12 : 3 mit Rest auf?",
     "answers": [
      "nein, es bleibt kein Rest",
      "ja, Rest 1",
      "ja, Rest 2",
      "ja, Rest 3"
     ],
     "correct": 0,
     "explanation": "4 · 3 = 12.",
     "topic": "teilen_rest"
    },
    {
     "id": "restk3l1u_leicht_5",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "11 : 5 =",
     "answers": [
      "2 Rest 1",
      "2",
      "1 Rest 6",
      "3 Rest 1"
     ],
     "correct": 0,
     "explanation": "2 · 5 = 10, Rest 1.",
     "topic": "teilen_rest"
    }
   ],
   "mittel": [
    {
     "id": "restk3l1u_mittel_1",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "17 : 5 =",
     "answers": [
      "3 Rest 1",
      "3 Rest 2",
      "2 Rest 7",
      "4 Rest 2"
     ],
     "correct": 1,
     "explanation": "3 · 5 = 15, Rest 2.",
     "topic": "teilen_rest"
    },
    {
     "id": "restk3l1u_mittel_2",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "23 : 4 =",
     "answers": [
      "5 Rest 2",
      "6 Rest 1",
      "5 Rest 3",
      "4 Rest 7"
     ],
     "correct": 2,
     "explanation": "5 · 4 = 20, Rest 3.",
     "topic": "teilen_rest"
    },
    {
     "id": "restk3l1u_mittel_3",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Rest ist bei Teilen durch 3 unmöglich?",
     "answers": [
      "0",
      "3",
      "1",
      "2"
     ],
     "correct": 1,
     "explanation": "Der Rest muss kleiner als 3 sein.",
     "topic": "teilen_rest"
    },
    {
     "id": "restk3l1u_mittel_4",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "20 : 6 =",
     "answers": [
      "3 Rest 2",
      "3 Rest 1",
      "2 Rest 8",
      "4 Rest 2"
     ],
     "correct": 0,
     "explanation": "3 · 6 = 18, Rest 2.",
     "topic": "teilen_rest"
    },
    {
     "id": "restk3l1u_mittel_5",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Probe passt zu 14 : 4 = 3 Rest 2?",
     "answers": [
      "3 · 4 = 14",
      "3 · 4 + 2 = 14",
      "4 · 2 + 3 = 11",
      "14 − 4 = 10"
     ],
     "correct": 1,
     "explanation": "Mal plus Rest.",
     "topic": "teilen_rest"
    }
   ],
   "schwer": [
    {
     "id": "restk3l1u_schwer_1",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "38 : 6 =",
     "answers": [
      "6 Rest 2",
      "6 Rest 3",
      "5 Rest 8",
      "7 Rest 2"
     ],
     "correct": 0,
     "explanation": "6 · 6 = 36, Rest 2.",
     "topic": "teilen_rest"
    },
    {
     "id": "restk3l1u_schwer_2",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "50 : 7 =",
     "answers": [
      "7 Rest 2",
      "7 Rest 1",
      "6 Rest 8",
      "8 Rest 1"
     ],
     "correct": 1,
     "explanation": "7 · 7 = 49, Rest 1.",
     "topic": "teilen_rest"
    },
    {
     "id": "restk3l1u_schwer_3",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Tim rechnet 29 : 4 = 6 Rest 5. Was stimmt?",
     "answers": [
      "falsch, der Rest ist zu groß",
      "richtig",
      "falsch, kein Rest",
      "falsch, Rest 3"
     ],
     "correct": 0,
     "explanation": "Rest 5 > 4: Es passt noch einmal. 7 Rest 1.",
     "topic": "teilen_rest"
    },
    {
     "id": "restk3l1u_schwer_4",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl geteilt durch 5 ergibt 4 Rest 3?",
     "answers": [
      "20",
      "23",
      "17",
      "43"
     ],
     "correct": 1,
     "explanation": "4 · 5 + 3 = 23.",
     "topic": "teilen_rest"
    },
    {
     "id": "restk3l1u_schwer_5",
     "category": "kurs_rest_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "65 : 8 =",
     "answers": [
      "7 Rest 9",
      "8 Rest 2",
      "9 Rest 1",
      "8 Rest 1"
     ],
     "correct": 3,
     "explanation": "8 · 8 = 64, Rest 1.",
     "topic": "teilen_rest"
    }
   ]
  },
  "test": [
   {
    "id": "restk3l1_test_1",
    "category": "kurs_rest_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "13 : 2 =",
    "answers": [
     "6",
     "5 Rest 3",
     "6 Rest 1",
     "7 Rest 1"
    ],
    "correct": 2,
    "explanation": "6 · 2 = 12, Rest 1.",
    "topic": "teilen_rest"
   },
   {
    "id": "restk3l1_test_2",
    "category": "kurs_rest_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "19 : 3 =",
    "answers": [
     "6 Rest 2",
     "6 Rest 1",
     "5 Rest 4",
     "7 Rest 1"
    ],
    "correct": 1,
    "explanation": "6 · 3 = 18, Rest 1.",
    "topic": "teilen_rest"
   },
   {
    "id": "restk3l1_test_3",
    "category": "kurs_rest_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "26 : 5 =",
    "answers": [
     "5 Rest 2",
     "4 Rest 6",
     "6 Rest 1",
     "5 Rest 1"
    ],
    "correct": 3,
    "explanation": "5 · 5 = 25, Rest 1.",
    "topic": "teilen_rest"
   },
   {
    "id": "restk3l1_test_4",
    "category": "kurs_rest_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Der Rest beim Teilen durch 4 ist höchstens …",
    "answers": [
     "4",
     "3",
     "5",
     "2"
    ],
    "correct": 1,
    "explanation": "Rest < 4.",
    "topic": "teilen_rest"
   },
   {
    "id": "restk3l1_test_5",
    "category": "kurs_rest_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "33 : 10 =",
    "answers": [
     "3",
     "30 Rest 3",
     "3 Rest 3",
     "4 Rest 3"
    ],
    "correct": 2,
    "explanation": "3 · 10 = 30, Rest 3.",
    "topic": "teilen_rest"
   },
   {
    "id": "restk3l1_test_6",
    "category": "kurs_rest_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "44 : 9 =",
    "answers": [
     "4 Rest 8",
     "4 Rest 9",
     "5 Rest 1",
     "3 Rest 17"
    ],
    "correct": 0,
    "explanation": "4 · 9 = 36, Rest 8.",
    "topic": "teilen_rest"
   },
   {
    "id": "restk3l1_test_7",
    "category": "kurs_rest_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Probe passt zu 22 : 5 = 4 Rest 2?",
    "answers": [
     "4 · 5 + 2 = 22",
     "4 · 5 = 22",
     "5 · 2 + 4 = 14",
     "22 − 5 = 17"
    ],
    "correct": 0,
    "explanation": "Mal plus Rest.",
    "topic": "teilen_rest"
   },
   {
    "id": "restk3l1_test_8",
    "category": "kurs_rest_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wann bleibt kein Rest?",
    "answers": [
     "wenn die Zahl in der Reihe vorkommt",
     "immer bei geraden Zahlen",
     "nie",
     "nur bei der 10"
    ],
    "correct": 0,
    "explanation": "24 : 6 geht auf, weil 24 in der 6er-Reihe ist.",
    "topic": "teilen_rest"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "rest_k3_l2",
  "kurs": "rest_k3",
  "order": 2,
  "icon": "🚌",
  "title": "Rest im Sachtext",
  "kurz": "Aufrunden, abrunden oder Rest übrig?",
  "erklaerung": {
   "intro": "In Sachaufgaben musst du überlegen, <b>was der Rest bedeutet</b>. <b>26 Kinder, Autos mit 4 Plätzen:</b> 26 : 4 = 6 Rest 2 – auch die 2 Kinder brauchen ein Auto, also <b>7 Autos</b> (aufrunden). <b>26 €, ein Ball kostet 4 €:</b> nur <b>6 Bälle</b>, 2 € bleiben übrig (abrunden).",
   "merksatz": "Erst rechnen, dann denken: Brauche ich für den Rest noch eins?",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚗</text></svg>26 Kinder, 4 pro Auto → 7 Autos",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>26 €, Ball 4 € → 6 Bälle, 2 € Rest",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍪</text></svg>17 Kekse, 5 pro Tüte → 3 volle Tüten, 2 übrig"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "restk3l2u_leicht_1",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "13 Kinder, 2 pro Boot. Wie viele Boote brauchen sie?",
     "answers": [
      "7",
      "6",
      "5",
      "8"
     ],
     "correct": 0,
     "explanation": "13 : 2 = 6 Rest 1 → noch ein Boot.",
     "topic": "teilen_rest",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚣</text></svg>"
    },
    {
     "id": "restk3l2u_leicht_2",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "11 Äpfel, 3 pro Tüte. Wie viele volle Tüten?",
     "answers": [
      "3",
      "4",
      "2",
      "8"
     ],
     "correct": 0,
     "explanation": "11 : 3 = 3 Rest 2.",
     "topic": "teilen_rest",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍎</text></svg>"
    },
    {
     "id": "restk3l2u_leicht_3",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "11 Äpfel, 3 pro Tüte. Wie viele Äpfel bleiben übrig?",
     "answers": [
      "1",
      "3",
      "0",
      "2"
     ],
     "correct": 3,
     "explanation": "3 · 3 = 9, 11 − 9 = 2.",
     "topic": "teilen_rest",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍎</text></svg>"
    },
    {
     "id": "restk3l2u_leicht_4",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Ein Heft kostet 2 €. Wie viele Hefte bekommst du für 9 €?",
     "answers": [
      "4",
      "5",
      "3",
      "7"
     ],
     "correct": 0,
     "explanation": "9 : 2 = 4 Rest 1.",
     "topic": "teilen_rest"
    },
    {
     "id": "restk3l2u_leicht_5",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "21 Kinder, 5 pro Tisch. Wie viele Tische brauchen sie?",
     "answers": [
      "4",
      "6",
      "5",
      "16"
     ],
     "correct": 2,
     "explanation": "21 : 5 = 4 Rest 1 → 5 Tische.",
     "topic": "teilen_rest"
    }
   ],
   "mittel": [
    {
     "id": "restk3l2u_mittel_1",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "30 Kinder, 8 pro Bank. Wie viele Bänke?",
     "answers": [
      "4",
      "3",
      "5",
      "22"
     ],
     "correct": 0,
     "explanation": "30 : 8 = 3 Rest 6 → 4 Bänke.",
     "topic": "teilen_rest"
    },
    {
     "id": "restk3l2u_mittel_2",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Ein Eis kostet 3 €. Wie viele Eis bekommst du für 20 €?",
     "answers": [
      "7",
      "5",
      "6",
      "17"
     ],
     "correct": 2,
     "explanation": "20 : 3 = 6 Rest 2.",
     "topic": "teilen_rest",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍦</text></svg>"
    },
    {
     "id": "restk3l2u_mittel_3",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "25 Eier, 6 pro Karton. Wie viele Kartons werden voll?",
     "answers": [
      "5",
      "4",
      "3",
      "19"
     ],
     "correct": 1,
     "explanation": "25 : 6 = 4 Rest 1.",
     "topic": "teilen_rest",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥚</text></svg>"
    },
    {
     "id": "restk3l2u_mittel_4",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Musst du hier aufrunden? 'Wie viele Taxis für 9 Leute, 4 pro Taxi?'",
     "answers": [
      "nein, 2 Taxis",
      "ja, 3 Taxis",
      "nein, 5 Taxis",
      "ja, 4 Taxis"
     ],
     "correct": 1,
     "explanation": "9 : 4 = 2 Rest 1 → 3.",
     "topic": "teilen_rest",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚕</text></svg>"
    },
    {
     "id": "restk3l2u_mittel_5",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "40 Stifte für 6 Kinder gerecht. Wie viele bekommt jedes, wie viele bleiben?",
     "answers": [
      "7 Stifte, keiner übrig",
      "6 Stifte, 2 bleiben",
      "5 Stifte, 10 bleiben",
      "6 Stifte, 4 bleiben übrig"
     ],
     "correct": 3,
     "explanation": "40 : 6 = 6 Rest 4.",
     "topic": "teilen_rest",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>✏️</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "restk3l2u_schwer_1",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "58 Kinder fahren mit Bussen zu 9 Plätzen. Wie viele Busse?",
     "answers": [
      "6",
      "8",
      "7",
      "49"
     ],
     "correct": 2,
     "explanation": "58 : 9 = 6 Rest 4 → 7 Busse.",
     "topic": "teilen_rest",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚌</text></svg>"
    },
    {
     "id": "restk3l2u_schwer_2",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Brett ist 50 cm lang. Wie viele 8-cm-Stücke kann man absägen?",
     "answers": [
      "7",
      "5",
      "42",
      "6"
     ],
     "correct": 3,
     "explanation": "50 : 8 = 6 Rest 2.",
     "topic": "teilen_rest",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪵</text></svg>"
    },
    {
     "id": "restk3l2u_schwer_3",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Lena hat 35 €. Ein Buch kostet 6 €. Wie viel Geld bleibt nach dem Kauf von so vielen Büchern wie möglich?",
     "answers": [
      "1 €",
      "5 €",
      "6 €",
      "29 €"
     ],
     "correct": 1,
     "explanation": "35 : 6 = 5 Rest 5.",
     "topic": "teilen_rest",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📚</text></svg>"
    },
    {
     "id": "restk3l2u_schwer_4",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "In welcher Aufgabe musst du aufrunden?",
     "answers": [
      "Wie viele Bälle für 23 €, 6 € pro Ball?",
      "Wie viele Kisten für 23 Flaschen, 6 pro Kiste?",
      "Wie viele volle Tüten bei 23 Bonbons, 6 pro Tüte?",
      "Wie viele 6-cm-Stücke aus 23 cm?"
     ],
     "correct": 1,
     "explanation": "Alle Flaschen brauchen Platz.",
     "topic": "teilen_rest"
    },
    {
     "id": "restk3l2u_schwer_5",
     "category": "kurs_rest_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "45 Bilder, 4 pro Seite im Album. Wie viele Seiten brauchst du?",
     "answers": [
      "11",
      "10",
      "41",
      "12"
     ],
     "correct": 3,
     "explanation": "45 : 4 = 11 Rest 1 → 12.",
     "topic": "teilen_rest",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🖼️</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "restk3l2_test_1",
    "category": "kurs_rest_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "17 Kinder, 3 pro Zelt. Wie viele Zelte?",
    "answers": [
     "5",
     "6",
     "7",
     "14"
    ],
    "correct": 1,
    "explanation": "17 : 3 = 5 Rest 2 → 6.",
    "topic": "teilen_rest",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⛺</text></svg>"
   },
   {
    "id": "restk3l2_test_2",
    "category": "kurs_rest_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ein Brötchen kostet 2 €. Wie viele bekommst du für 15 €?",
    "answers": [
     "8",
     "6",
     "13",
     "7"
    ],
    "correct": 3,
    "explanation": "15 : 2 = 7 Rest 1.",
    "topic": "teilen_rest",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥖</text></svg>"
   },
   {
    "id": "restk3l2_test_3",
    "category": "kurs_rest_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "29 Bonbons, 4 pro Tüte. Wie viele volle Tüten?",
    "answers": [
     "8",
     "6",
     "7",
     "25"
    ],
    "correct": 2,
    "explanation": "29 : 4 = 7 Rest 1.",
    "topic": "teilen_rest",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍬</text></svg>"
   },
   {
    "id": "restk3l2_test_4",
    "category": "kurs_rest_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "29 Bonbons, 4 pro Tüte. Wie viele bleiben übrig?",
    "answers": [
     "0",
     "2",
     "1",
     "3"
    ],
    "correct": 2,
    "explanation": "7 · 4 = 28.",
    "topic": "teilen_rest",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍬</text></svg>"
   },
   {
    "id": "restk3l2_test_5",
    "category": "kurs_rest_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "34 Kinder, Autos mit 4 Plätzen. Wie viele Autos?",
    "answers": [
     "8",
     "9",
     "10",
     "30"
    ],
    "correct": 1,
    "explanation": "34 : 4 = 8 Rest 2 → 9.",
    "topic": "teilen_rest",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚗</text></svg>"
   },
   {
    "id": "restk3l2_test_6",
    "category": "kurs_rest_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ein Seil ist 20 m lang. Wie viele 3-m-Stücke?",
    "answers": [
     "7",
     "6",
     "5",
     "17"
    ],
    "correct": 1,
    "explanation": "20 : 3 = 6 Rest 2.",
    "topic": "teilen_rest"
   },
   {
    "id": "restk3l2_test_7",
    "category": "kurs_rest_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was bedeutet der Rest bei '50 € für Kinokarten zu 8 €'?",
    "answers": [
     "eine weitere Karte",
     "die Zahl der Kinder",
     "Geld, das übrig bleibt",
     "ein Fehler"
    ],
    "correct": 2,
    "explanation": "50 : 8 = 6 Rest 2 → 2 € übrig.",
    "topic": "teilen_rest",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎬</text></svg>"
   },
   {
    "id": "restk3l2_test_8",
    "category": "kurs_rest_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was tust du zuerst bei einer Sachaufgabe mit Rest?",
    "answers": [
     "den Rest weglassen",
     "rechnen und dann überlegen, was der Rest bedeutet",
     "immer aufrunden",
     "immer abrunden"
    ],
    "correct": 1,
    "explanation": "Je nach Frage auf- oder abrunden.",
    "topic": "teilen_rest"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
