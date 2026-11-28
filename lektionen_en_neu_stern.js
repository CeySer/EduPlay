// Neuer Englischkurs: K4 Numbers & My day (28.11.2026)
(function () {
    const extraKurse = [{"id": "numbers_day_en_k4", "title": "Numbers & My day", "icon": "🕗", "grade": 4, "subject": "englisch", "beschreibung": "Zahlen bis 100 und der Tagesablauf auf Englisch."}];
    const extraLektionen = [
 {
  "id": "nd_k4_l1",
  "kurs": "numbers_day_en_k4",
  "order": 1,
  "icon": "🔢",
  "title": "Numbers up to 100",
  "kurz": "twenty, thirty … one hundred",
  "erklaerung": {
   "intro": "Die Zehner enden auf <b>-ty</b>: <b>twenty</b> (20), <b>thirty</b> (30), <b>forty</b> (40 – ohne u!), <b>fifty</b> (50), sixty, seventy, eighty, ninety, <b>one hundred</b> (100). Anders als im Deutschen kommt der <b>Zehner zuerst</b>: <b>twenty-five</b> = 25 (zwanzig-fünf), mit Bindestrich. Achtung: <b>thirteen</b> (13) ≠ <b>thirty</b> (30).",
   "merksatz": "Zehner zuerst: twenty-five. -teen = 13–19, -ty = Zehner.",
   "beispiele": [
    "20 twenty · 30 thirty · 40 forty · 50 fifty",
    "25 = twenty-five, 47 = forty-seven",
    "13 thirteen ≠ 30 thirty"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "ndk4l1u_leicht_1",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'twenty'?",
     "answers": [
      "12",
      "2",
      "20",
      "200"
     ],
     "correct": 2,
     "explanation": "twenty = 20.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l1u_leicht_2",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie heißt 50 auf Englisch?",
     "answers": [
      "fifteen",
      "fifty",
      "five",
      "fivety"
     ],
     "correct": 1,
     "explanation": "fifty.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l1u_leicht_3",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'one hundred'?",
     "answers": [
      "10",
      "1000",
      "101",
      "100"
     ],
     "correct": 3,
     "explanation": "hundred = hundert.",
     "topic": "numbers_day",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💯</text></svg>"
    },
    {
     "id": "ndk4l1u_leicht_4",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'thirty'?",
     "answers": [
      "13",
      "3",
      "30",
      "33"
     ],
     "correct": 2,
     "explanation": "thirty = 30.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l1u_leicht_5",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie heißt 40 auf Englisch?",
     "answers": [
      "fourty",
      "forty",
      "fourteen",
      "four"
     ],
     "correct": 1,
     "explanation": "forty ohne u!",
     "topic": "numbers_day"
    }
   ],
   "mittel": [
    {
     "id": "ndk4l1u_mittel_1",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'twenty-five'?",
     "answers": [
      "25",
      "52",
      "205",
      "15"
     ],
     "correct": 0,
     "explanation": "Zehner zuerst.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l1u_mittel_2",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie heißt 34 auf Englisch?",
     "answers": [
      "four-thirty",
      "thirteen-four",
      "thirty-four",
      "fourty-three"
     ],
     "correct": 2,
     "explanation": "30 + 4.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l1u_mittel_3",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'sixty-one'?",
     "answers": [
      "61",
      "16",
      "60",
      "71"
     ],
     "correct": 0,
     "explanation": "60 + 1.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l1u_mittel_4",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist der Unterschied: 'fifteen' und 'fifty'?",
     "answers": [
      "50 und 15",
      "beide 15",
      "beide 50",
      "15 und 50"
     ],
     "correct": 3,
     "explanation": "-teen und -ty.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l1u_mittel_5",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie heißt 99 auf Englisch?",
     "answers": [
      "nineteen-nine",
      "ninety-nine",
      "nine-ninety",
      "ninty-nine"
     ],
     "correct": 1,
     "explanation": "90 + 9.",
     "topic": "numbers_day"
    }
   ],
   "schwer": [
    {
     "id": "ndk4l1u_schwer_1",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist 'forty-eight'?",
     "answers": [
      "48",
      "84",
      "408",
      "14"
     ],
     "correct": 0,
     "explanation": "40 + 8.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l1u_schwer_2",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie schreibt man 72?",
     "answers": [
      "seventy-two",
      "seventeen-two",
      "two-seventy",
      "seventy two-"
     ],
     "correct": 0,
     "explanation": "70 + 2 mit Bindestrich.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l1u_schwer_3",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist 'eighty' + 'eleven'?",
     "answers": [
      "81",
      "811",
      "91",
      "19"
     ],
     "correct": 2,
     "explanation": "80 + 11.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l1u_schwer_4",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl ist größer: 'thirteen' oder 'thirty'?",
     "answers": [
      "thirteen",
      "gleich",
      "thirty",
      "kann man nicht sagen"
     ],
     "correct": 2,
     "explanation": "30 > 13.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l1u_schwer_5",
     "category": "kurs_nd_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was heißt 'How old is your grandma?' – 'She's sixty-eight.'",
     "answers": [
      "Sie ist 86.",
      "Sie ist 18.",
      "Sie ist 68.",
      "Sie ist 60."
     ],
     "correct": 2,
     "explanation": "sixty-eight.",
     "topic": "numbers_day",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👵</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "ndk4l1_test_1",
    "category": "kurs_nd_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was heißt 'twenty'?",
    "answers": [
     "12",
     "200",
     "20",
     "2"
    ],
    "correct": 2,
    "explanation": "20.",
    "topic": "numbers_day"
   },
   {
    "id": "ndk4l1_test_2",
    "category": "kurs_nd_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie heißt 40?",
    "answers": [
     "fourty",
     "fourteen",
     "forty",
     "fortee"
    ],
    "correct": 2,
    "explanation": "forty.",
    "topic": "numbers_day"
   },
   {
    "id": "ndk4l1_test_3",
    "category": "kurs_nd_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was heißt 'fifty-three'?",
    "answers": [
     "35",
     "53",
     "13",
     "503"
    ],
    "correct": 1,
    "explanation": "53.",
    "topic": "numbers_day"
   },
   {
    "id": "ndk4l1_test_4",
    "category": "kurs_nd_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie heißt 100?",
    "answers": [
     "one thousand",
     "ten",
     "one hundred",
     "hundredy"
    ],
    "correct": 2,
    "explanation": "hundred.",
    "topic": "numbers_day"
   },
   {
    "id": "ndk4l1_test_5",
    "category": "kurs_nd_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was heißt 'thirty'?",
    "answers": [
     "13",
     "33",
     "30",
     "3"
    ],
    "correct": 2,
    "explanation": "30.",
    "topic": "numbers_day"
   },
   {
    "id": "ndk4l1_test_6",
    "category": "kurs_nd_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie heißt 86?",
    "answers": [
     "eighty-six",
     "sixty-eight",
     "eighteen-six",
     "eighty six-"
    ],
    "correct": 0,
    "explanation": "80 + 6.",
    "topic": "numbers_day"
   },
   {
    "id": "ndk4l1_test_7",
    "category": "kurs_nd_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was heißt 'seventeen'?",
    "answers": [
     "17",
     "70",
     "7",
     "71"
    ],
    "correct": 0,
    "explanation": "-teen.",
    "topic": "numbers_day"
   },
   {
    "id": "ndk4l1_test_8",
    "category": "kurs_nd_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was heißt 'ninety'?",
    "answers": [
     "19",
     "9",
     "90",
     "99"
    ],
    "correct": 2,
    "explanation": "90.",
    "topic": "numbers_day"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "nd_k4_l2",
  "kurs": "numbers_day_en_k4",
  "order": 2,
  "icon": "🕗",
  "title": "My day",
  "kurz": "Der Tagesablauf auf Englisch",
  "erklaerung": {
   "intro": "So beschreibst du deinen Tag: <b>I get up</b> at seven. <b>I brush my teeth</b>. <b>I have breakfast</b>. <b>I go to school</b>. After school <b>I do my homework</b>. In the evening <b>I watch TV</b>, and at nine <b>I go to bed</b>. Bei <b>he/she</b> bekommt das Verb ein <b>-s</b>: She get<b>s</b> up at seven.",
   "merksatz": "I get up – he gets up. Bei he/she/it: -s!",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⏰</text></svg>I get up at 7 o'clock.",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪥</text></svg>I brush my teeth.",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛏️</text></svg>I go to bed at 9."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "ndk4l2u_leicht_1",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'I get up'?",
     "answers": [
      "Ich gehe ins Bett.",
      "Ich frühstücke.",
      "Ich wasche mich.",
      "Ich stehe auf."
     ],
     "correct": 3,
     "explanation": "get up = aufstehen.",
     "topic": "numbers_day",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⏰</text></svg>"
    },
    {
     "id": "ndk4l2u_leicht_2",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'I go to bed'?",
     "answers": [
      "Ich stehe auf.",
      "Ich gehe zur Schule.",
      "Ich gehe ins Bett.",
      "Ich mache das Bett."
     ],
     "correct": 2,
     "explanation": "go to bed.",
     "topic": "numbers_day",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛏️</text></svg>"
    },
    {
     "id": "ndk4l2u_leicht_3",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'I have breakfast'?",
     "answers": [
      "Ich esse zu Abend.",
      "Ich frühstücke.",
      "Ich habe Hunger.",
      "Ich koche."
     ],
     "correct": 1,
     "explanation": "breakfast = Frühstück.",
     "topic": "numbers_day",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥣</text></svg>"
    },
    {
     "id": "ndk4l2u_leicht_4",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'I brush my teeth'?",
     "answers": [
      "Ich kämme meine Haare.",
      "Ich putze meine Zähne.",
      "Ich wasche meine Hände.",
      "Ich esse Brot."
     ],
     "correct": 1,
     "explanation": "brush = bürsten.",
     "topic": "numbers_day",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪥</text></svg>"
    },
    {
     "id": "ndk4l2u_leicht_5",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'I go to school'?",
     "answers": [
      "Ich komme von der Schule.",
      "Ich mag die Schule.",
      "Ich gehe zur Schule.",
      "Ich bin in der Schule."
     ],
     "correct": 2,
     "explanation": "go to school.",
     "topic": "numbers_day",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏫</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "ndk4l2u_mittel_1",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'I do my homework'?",
     "answers": [
      "Ich räume auf.",
      "Ich mache meine Hausaufgaben.",
      "Ich gehe nach Hause.",
      "Ich arbeite im Garten."
     ],
     "correct": 1,
     "explanation": "homework.",
     "topic": "numbers_day",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📝</text></svg>"
    },
    {
     "id": "ndk4l2u_mittel_2",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'She ___ up at seven.'",
     "answers": [
      "get",
      "getting",
      "gets",
      "is get"
     ],
     "correct": 2,
     "explanation": "she → -s.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l2u_mittel_3",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'in the evening'?",
     "answers": [
      "am Abend",
      "am Morgen",
      "am Mittag",
      "in der Nacht"
     ],
     "correct": 0,
     "explanation": "evening = Abend.",
     "topic": "numbers_day",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌆</text></svg>"
    },
    {
     "id": "ndk4l2u_mittel_4",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'I watch TV'?",
     "answers": [
      "Ich höre Musik.",
      "Ich lese.",
      "Ich spiele.",
      "Ich sehe fern."
     ],
     "correct": 3,
     "explanation": "watch TV.",
     "topic": "numbers_day",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📺</text></svg>"
    },
    {
     "id": "ndk4l2u_mittel_5",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'He ___ to school by bus.'",
     "answers": [
      "go",
      "goes",
      "going",
      "gos"
     ],
     "correct": 1,
     "explanation": "go → goes.",
     "topic": "numbers_day",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚌</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "ndk4l2u_schwer_1",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Reihenfolge stimmt morgens?",
     "answers": [
      "get up – brush teeth – go to school",
      "go to school – get up – brush teeth",
      "go to bed – get up – have dinner",
      "have dinner – go to school – get up"
     ],
     "correct": 0,
     "explanation": "Logisch.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l2u_schwer_2",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was heißt 'I have lunch at half past twelve'?",
     "answers": [
      "Ich esse um halb eins zu Mittag.",
      "Ich frühstücke um zwölf.",
      "Ich esse um 12:15 zu Abend.",
      "Ich habe um eins Pause."
     ],
     "correct": 0,
     "explanation": "lunch, half past twelve.",
     "topic": "numbers_day",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍽️</text></svg>"
    },
    {
     "id": "ndk4l2u_schwer_3",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was passt? 'My brother ___ his teeth.'",
     "answers": [
      "brush",
      "brushs",
      "brushes",
      "brushing"
     ],
     "correct": 2,
     "explanation": "sh → -es.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l2u_schwer_4",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was heißt 'after school'?",
     "answers": [
      "vor der Schule",
      "in der Schule",
      "nach der Schule",
      "ohne Schule"
     ],
     "correct": 2,
     "explanation": "after = nach.",
     "topic": "numbers_day"
    },
    {
     "id": "ndk4l2u_schwer_5",
     "category": "kurs_nd_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "Tom go to bed at nine.",
      "Tom going to bed at nine.",
      "Tom goes to bed at nine.",
      "Tom gos to bed at nine."
     ],
     "correct": 2,
     "explanation": "goes.",
     "topic": "numbers_day"
    }
   ]
  },
  "test": [
   {
    "id": "ndk4l2_test_1",
    "category": "kurs_nd_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was heißt 'I get up'?",
    "answers": [
     "Ich stehe auf.",
     "Ich schlafe.",
     "Ich laufe.",
     "Ich sitze."
    ],
    "correct": 0,
    "explanation": "aufstehen.",
    "topic": "numbers_day",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⏰</text></svg>"
   },
   {
    "id": "ndk4l2_test_2",
    "category": "kurs_nd_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was heißt 'I have breakfast'?",
    "answers": [
     "Ich frühstücke.",
     "Ich esse zu Mittag.",
     "Ich trinke.",
     "Ich koche."
    ],
    "correct": 0,
    "explanation": "Frühstück.",
    "topic": "numbers_day"
   },
   {
    "id": "ndk4l2_test_3",
    "category": "kurs_nd_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was heißt 'I go to bed'?",
    "answers": [
     "Ich stehe auf.",
     "Ich gehe raus.",
     "Ich gehe ins Bett.",
     "Ich mache das Bett."
    ],
    "correct": 2,
    "explanation": "Bett.",
    "topic": "numbers_day",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛏️</text></svg>"
   },
   {
    "id": "ndk4l2_test_4",
    "category": "kurs_nd_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was passt? 'He ___ up at six.'",
    "answers": [
     "get",
     "getting",
     "got up is",
     "gets"
    ],
    "correct": 3,
    "explanation": "-s.",
    "topic": "numbers_day"
   },
   {
    "id": "ndk4l2_test_5",
    "category": "kurs_nd_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was heißt 'I do my homework'?",
    "answers": [
     "Ich putze.",
     "Ich mache Hausaufgaben.",
     "Ich spiele.",
     "Ich koche."
    ],
    "correct": 1,
    "explanation": "homework.",
    "topic": "numbers_day"
   },
   {
    "id": "ndk4l2_test_6",
    "category": "kurs_nd_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was heißt 'in the morning'?",
    "answers": [
     "am Morgen",
     "am Abend",
     "in der Nacht",
     "am Mittag"
    ],
    "correct": 0,
    "explanation": "morning.",
    "topic": "numbers_day",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌅</text></svg>"
   },
   {
    "id": "ndk4l2_test_7",
    "category": "kurs_nd_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was passt? 'She ___ to school.'",
    "answers": [
     "go",
     "gos",
     "goes",
     "going"
    ],
    "correct": 2,
    "explanation": "goes.",
    "topic": "numbers_day"
   },
   {
    "id": "ndk4l2_test_8",
    "category": "kurs_nd_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was heißt 'I watch TV'?",
    "answers": [
     "Ich lese.",
     "Ich sehe fern.",
     "Ich schlafe.",
     "Ich male."
    ],
    "correct": 1,
    "explanation": "watch TV.",
    "topic": "numbers_day",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📺</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
