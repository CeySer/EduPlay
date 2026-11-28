// Neue Englischkurse Klasse 5: Time & dates, Frequency & word order (28.11.2026)
(function () {
    const extraKurse = [{"id": "time_dates_en_k5", "title": "Time, dates & ordinal numbers", "icon": "📅", "grade": 5, "subject": "englisch", "beschreibung": "Uhrzeit, Datum, Ordnungszahlen und Monate auf Englisch."}, {"id": "frequency_en_k5", "title": "Adverbs of frequency & word order", "icon": "🔁", "grade": 5, "subject": "englisch", "beschreibung": "always, often, never – und die richtige Satzstellung."}];
    const extraLektionen = [
 {
  "id": "td_k5_l1",
  "kurs": "time_dates_en_k5",
  "order": 1,
  "icon": "🕒",
  "title": "Telling the time",
  "kurz": "o'clock, half past, quarter to …",
  "erklaerung": {
   "intro": "<b>What time is it?</b> – <b>It's three o'clock</b> (3:00). <b>half past</b> = halb (nach der Stunde!): half past three = 3:30. <b>quarter past</b> = Viertel nach (3:15), <b>quarter to</b> = Viertel vor (2:45 = quarter to three). Minuten: <b>ten past four</b> (4:10), <b>twenty to six</b> (5:40). <b>a.m.</b> = vormittags, <b>p.m.</b> = nachmittags/abends.",
   "merksatz": "past = nach, to = vor. half past three = 3:30 (nicht 2:30!).",
   "beispiele": [
    "3:30 = half past three",
    "2:45 = quarter to three",
    "4:10 = ten past four · 7 p.m. = 19 Uhr"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "tdk5l1u_leicht_1",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viel Uhr ist 'half past three'?",
     "answers": [
      "2:30",
      "3:15",
      "3:45",
      "3:30"
     ],
     "correct": 3,
     "explanation": "half past = nach.",
     "topic": "time_dates",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🕞</text></svg>"
    },
    {
     "id": "tdk5l1u_leicht_2",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viel Uhr ist 'quarter past six'?",
     "answers": [
      "5:45",
      "6:45",
      "6:15",
      "6:30"
     ],
     "correct": 2,
     "explanation": "Viertel nach.",
     "topic": "time_dates",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🕕</text></svg>"
    },
    {
     "id": "tdk5l1u_leicht_3",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viel Uhr ist 'quarter to nine'?",
     "answers": [
      "9:15",
      "9:45",
      "8:15",
      "8:45"
     ],
     "correct": 3,
     "explanation": "Viertel vor neun.",
     "topic": "time_dates",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🕘</text></svg>"
    },
    {
     "id": "tdk5l1u_leicht_4",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'What time is it?'",
     "answers": [
      "Wann kommst du?",
      "Wie lange dauert es?",
      "Wie spät ist es?",
      "Was ist los?"
     ],
     "correct": 2,
     "explanation": "Uhrzeit fragen.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l1u_leicht_5",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie sagst du 5:00?",
     "answers": [
      "half past five",
      "quarter to five",
      "five past",
      "five o'clock"
     ],
     "correct": 3,
     "explanation": "o'clock.",
     "topic": "time_dates"
    }
   ],
   "mittel": [
    {
     "id": "tdk5l1u_mittel_1",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viel Uhr ist 'ten past four'?",
     "answers": [
      "3:50",
      "4:10",
      "4:50",
      "10:04"
     ],
     "correct": 1,
     "explanation": "10 nach 4.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l1u_mittel_2",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viel Uhr ist 'twenty to six'?",
     "answers": [
      "5:40",
      "6:20",
      "5:20",
      "6:40"
     ],
     "correct": 0,
     "explanation": "20 vor 6.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l1u_mittel_3",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie sagst du 7:30?",
     "answers": [
      "half past six",
      "half seven to",
      "seven half",
      "half past seven"
     ],
     "correct": 3,
     "explanation": "half past seven.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l1u_mittel_4",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was bedeutet 'p.m.'?",
     "answers": [
      "vormittags",
      "mitternachts",
      "morgens früh",
      "nachmittags/abends"
     ],
     "correct": 3,
     "explanation": "p.m.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l1u_mittel_5",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie sagst du 11:45?",
     "answers": [
      "quarter past eleven",
      "quarter to eleven",
      "quarter to twelve",
      "half past eleven"
     ],
     "correct": 2,
     "explanation": "Viertel vor zwölf.",
     "topic": "time_dates"
    }
   ],
   "schwer": [
    {
     "id": "tdk5l1u_schwer_1",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie sagst du 9:25?",
     "answers": [
      "twenty-five to nine",
      "twenty-five past ten",
      "twenty-five past nine",
      "nine twenty-five to"
     ],
     "correct": 2,
     "explanation": "past.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l1u_schwer_2",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie sagst du 2:35?",
     "answers": [
      "twenty-five past two",
      "twenty-five to three",
      "thirty-five to two",
      "twenty-five to two"
     ],
     "correct": 1,
     "explanation": "35 nach = 25 vor drei.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l1u_schwer_3",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "8 p.m. ist …",
     "answers": [
      "20 Uhr",
      "8 Uhr morgens",
      "18 Uhr",
      "22 Uhr"
     ],
     "correct": 0,
     "explanation": "p.m. + 12.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l1u_schwer_4",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was heißt 'The film starts at a quarter past eight'?",
     "answers": [
      "Der Film beginnt um Viertel vor acht.",
      "Der Film beginnt um Viertel nach acht.",
      "Der Film dauert acht Viertel.",
      "Der Film endet um acht."
     ],
     "correct": 1,
     "explanation": "quarter past.",
     "topic": "time_dates",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎬</text></svg>"
    },
    {
     "id": "tdk5l1u_schwer_5",
     "category": "kurs_td_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "School starts at eight o'clock.",
      "School starts on eight o'clock.",
      "School starts in eight o'clock.",
      "School start at eight o'clock."
     ],
     "correct": 0,
     "explanation": "at + Uhrzeit.",
     "topic": "time_dates"
    }
   ]
  },
  "test": [
   {
    "id": "tdk5l1_test_1",
    "category": "kurs_td_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'half past ten' =",
    "answers": [
     "9:30",
     "10:15",
     "10:30",
     "11:30"
    ],
    "correct": 2,
    "explanation": "half past.",
    "topic": "time_dates"
   },
   {
    "id": "tdk5l1_test_2",
    "category": "kurs_td_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'quarter to four' =",
    "answers": [
     "4:15",
     "4:45",
     "3:45",
     "3:15"
    ],
    "correct": 2,
    "explanation": "Viertel vor.",
    "topic": "time_dates"
   },
   {
    "id": "tdk5l1_test_3",
    "category": "kurs_td_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'quarter past one' =",
    "answers": [
     "12:45",
     "1:45",
     "1:15",
     "1:30"
    ],
    "correct": 2,
    "explanation": "Viertel nach.",
    "topic": "time_dates"
   },
   {
    "id": "tdk5l1_test_4",
    "category": "kurs_td_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie sagst du 6:00?",
    "answers": [
     "half past six",
     "six past",
     "six o'clock",
     "quarter six"
    ],
    "correct": 2,
    "explanation": "o'clock.",
    "topic": "time_dates"
   },
   {
    "id": "tdk5l1_test_5",
    "category": "kurs_td_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'five to twelve' =",
    "answers": [
     "12:05",
     "12:55",
     "11:05",
     "11:55"
    ],
    "correct": 3,
    "explanation": "5 vor 12.",
    "topic": "time_dates"
   },
   {
    "id": "tdk5l1_test_6",
    "category": "kurs_td_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'a.m.' bedeutet …",
    "answers": [
     "nachmittags",
     "abends",
     "vormittags",
     "nachts immer"
    ],
    "correct": 2,
    "explanation": "a.m.",
    "topic": "time_dates"
   },
   {
    "id": "tdk5l1_test_7",
    "category": "kurs_td_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Präposition vor Uhrzeiten?",
    "answers": [
     "at",
     "on",
     "in",
     "to"
    ],
    "correct": 0,
    "explanation": "at seven.",
    "topic": "time_dates"
   },
   {
    "id": "tdk5l1_test_8",
    "category": "kurs_td_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie sagst du 4:20?",
    "answers": [
     "twenty to four",
     "four twenty to",
     "twenty past four",
     "twenty past five"
    ],
    "correct": 2,
    "explanation": "past.",
    "topic": "time_dates"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "td_k5_l2",
  "kurs": "time_dates_en_k5",
  "order": 2,
  "icon": "📅",
  "title": "Dates & ordinal numbers",
  "kurz": "first, second, third – on 3rd May",
  "erklaerung": {
   "intro": "<b>Ordnungszahlen</b>: <b>first (1st), second (2nd), third (3rd)</b>, dann meist <b>-th</b>: fourth (4th), fifth (5th!), twelfth (12th!), twentieth (20th), twenty-first (21st). Datum: <b>on the third of May</b> / <b>on 3rd May</b>. Präpositionen: <b>on</b> + Tag/Datum (on Monday, on 5th June), <b>in</b> + Monat/Jahr/Jahreszeit (in May, in 2026, in summer), <b>at</b> + Uhrzeit.",
   "merksatz": "1st, 2nd, 3rd, dann -th. on + Tag/Datum, in + Monat/Jahr, at + Uhrzeit.",
   "beispiele": [
    "My birthday is on 3rd May.",
    "first – second – third – fourth – fifth",
    "in July · on Friday · at 6 o'clock"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "tdk5l2u_leicht_1",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie heißt '1.' auf Englisch?",
     "answers": [
      "one",
      "first",
      "firsth",
      "oneth"
     ],
     "correct": 1,
     "explanation": "1st.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l2u_leicht_2",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie heißt '2.' auf Englisch?",
     "answers": [
      "second",
      "twoth",
      "secondth",
      "two"
     ],
     "correct": 0,
     "explanation": "2nd.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l2u_leicht_3",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie heißt '3.' auf Englisch?",
     "answers": [
      "threeth",
      "thirth",
      "three",
      "third"
     ],
     "correct": 3,
     "explanation": "3rd.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l2u_leicht_4",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Präposition? '___ Monday'",
     "answers": [
      "in",
      "at",
      "to",
      "on"
     ],
     "correct": 3,
     "explanation": "on + Tag.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l2u_leicht_5",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Präposition? '___ July'",
     "answers": [
      "on",
      "at",
      "of",
      "in"
     ],
     "correct": 3,
     "explanation": "in + Monat.",
     "topic": "time_dates"
    }
   ],
   "mittel": [
    {
     "id": "tdk5l2u_mittel_1",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie heißt '5.' auf Englisch?",
     "answers": [
      "fiveth",
      "fivth",
      "fifth",
      "fift"
     ],
     "correct": 2,
     "explanation": "fifth.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l2u_mittel_2",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie heißt '12.' auf Englisch?",
     "answers": [
      "twelveth",
      "twelfth",
      "twelvth",
      "twelf"
     ],
     "correct": 1,
     "explanation": "twelfth.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l2u_mittel_3",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man '21.' kurz?",
     "answers": [
      "21st",
      "21th",
      "21nd",
      "21rd"
     ],
     "correct": 0,
     "explanation": "twenty-first.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l2u_mittel_4",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Präposition? 'My birthday is ___ 4th June.'",
     "answers": [
      "in",
      "on",
      "at",
      "by"
     ],
     "correct": 1,
     "explanation": "on + Datum.",
     "topic": "time_dates",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎂</text></svg>"
    },
    {
     "id": "tdk5l2u_mittel_5",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Präposition? '___ summer'",
     "answers": [
      "on",
      "in",
      "at",
      "with"
     ],
     "correct": 1,
     "explanation": "in + Jahreszeit.",
     "topic": "time_dates",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "tdk5l2u_schwer_1",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie liest man '3rd May'?",
     "answers": [
      "three May",
      "the three of May",
      "May three",
      "the third of May"
     ],
     "correct": 3,
     "explanation": "the third of May.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l2u_schwer_2",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie heißt '22.' auf Englisch?",
     "answers": [
      "twenty-twoth",
      "twenty-second",
      "twentieth-second",
      "twenty-secondth"
     ],
     "correct": 1,
     "explanation": "22nd.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l2u_schwer_3",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "We go on holiday in August.",
      "We go on holiday on August.",
      "We go on holiday at August.",
      "We go in holiday in August."
     ],
     "correct": 0,
     "explanation": "in + Monat.",
     "topic": "time_dates",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>✈️</text></svg>"
    },
    {
     "id": "tdk5l2u_schwer_4",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie heißt '20.' auf Englisch?",
     "answers": [
      "twentyth",
      "twentieth",
      "twentiest",
      "twentys"
     ],
     "correct": 1,
     "explanation": "y → ie + th.",
     "topic": "time_dates"
    },
    {
     "id": "tdk5l2u_schwer_5",
     "category": "kurs_td_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie sagst du 'am Wochenende' (britisch)?",
     "answers": [
      "on the weekend in",
      "in weekend",
      "at weekend the",
      "at the weekend"
     ],
     "correct": 3,
     "explanation": "BE: at the weekend.",
     "topic": "time_dates"
    }
   ]
  },
  "test": [
   {
    "id": "tdk5l2_test_1",
    "category": "kurs_td_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'1st' =",
    "answers": [
     "first",
     "one",
     "oneth",
     "firsth"
    ],
    "correct": 0,
    "explanation": "first.",
    "topic": "time_dates"
   },
   {
    "id": "tdk5l2_test_2",
    "category": "kurs_td_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'3rd' =",
    "answers": [
     "three",
     "threeth",
     "third",
     "thirth"
    ],
    "correct": 2,
    "explanation": "third.",
    "topic": "time_dates"
   },
   {
    "id": "tdk5l2_test_3",
    "category": "kurs_td_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'5th' =",
    "answers": [
     "fiveth",
     "fivth",
     "fif",
     "fifth"
    ],
    "correct": 3,
    "explanation": "fifth.",
    "topic": "time_dates"
   },
   {
    "id": "tdk5l2_test_4",
    "category": "kurs_td_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Präposition: '___ Friday'",
    "answers": [
     "in",
     "at",
     "on",
     "of"
    ],
    "correct": 2,
    "explanation": "on.",
    "topic": "time_dates"
   },
   {
    "id": "tdk5l2_test_5",
    "category": "kurs_td_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Präposition: '___ 2026'",
    "answers": [
     "on",
     "in",
     "at",
     "by"
    ],
    "correct": 1,
    "explanation": "in + Jahr.",
    "topic": "time_dates"
   },
   {
    "id": "tdk5l2_test_6",
    "category": "kurs_td_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Präposition: '___ 7 o'clock'",
    "answers": [
     "on",
     "at",
     "in",
     "of"
    ],
    "correct": 1,
    "explanation": "at.",
    "topic": "time_dates"
   },
   {
    "id": "tdk5l2_test_7",
    "category": "kurs_td_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Kurzform von 'second'",
    "answers": [
     "2th",
     "2st",
     "2rd",
     "2nd"
    ],
    "correct": 3,
    "explanation": "2nd.",
    "topic": "time_dates"
   },
   {
    "id": "tdk5l2_test_8",
    "category": "kurs_td_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie liest man '1st April'?",
    "answers": [
     "one April",
     "the one of April",
     "April one",
     "the first of April"
    ],
    "correct": 3,
    "explanation": "the first of April.",
    "topic": "time_dates"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "fq_k5_l1",
  "kurs": "frequency_en_k5",
  "order": 1,
  "icon": "🔁",
  "title": "always, often, never",
  "kurz": "Häufigkeitsadverbien und ihre Stellung",
  "erklaerung": {
   "intro": "Häufigkeitsadverbien sagen, <b>wie oft</b>: <b>always</b> (immer, 100 %) – <b>usually</b> (normalerweise) – <b>often</b> (oft) – <b>sometimes</b> (manchmal) – <b>rarely</b> (selten) – <b>never</b> (nie, 0 %). Sie stehen <b>vor dem Vollverb</b>: I <b>often</b> play football. Aber <b>nach 'be'</b>: She <b>is always</b> late.",
   "merksatz": "Vor dem Vollverb – aber nach am/is/are.",
   "beispiele": [
    "I always get up at seven.",
    "He never eats fish.",
    "They are often tired."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "fqk5l1u_leicht_1",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'always'?",
     "answers": [
      "immer",
      "nie",
      "oft",
      "manchmal"
     ],
     "correct": 0,
     "explanation": "100 %.",
     "topic": "frequency"
    },
    {
     "id": "fqk5l1u_leicht_2",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'never'?",
     "answers": [
      "immer",
      "nie",
      "oft",
      "selten"
     ],
     "correct": 1,
     "explanation": "0 %.",
     "topic": "frequency"
    },
    {
     "id": "fqk5l1u_leicht_3",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'sometimes'?",
     "answers": [
      "immer",
      "nie",
      "selten",
      "manchmal"
     ],
     "correct": 3,
     "explanation": "manchmal.",
     "topic": "frequency"
    },
    {
     "id": "fqk5l1u_leicht_4",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'often'?",
     "answers": [
      "selten",
      "nie",
      "immer",
      "oft"
     ],
     "correct": 3,
     "explanation": "oft.",
     "topic": "frequency"
    },
    {
     "id": "fqk5l1u_leicht_5",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "I always play football.",
      "I play always football.",
      "Always I football play.",
      "I play football always I."
     ],
     "correct": 0,
     "explanation": "Vor dem Verb.",
     "topic": "frequency",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "fqk5l1u_mittel_1",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "She always is late.",
      "Always she is late.",
      "She is late always is.",
      "She is always late."
     ],
     "correct": 3,
     "explanation": "Nach 'be'.",
     "topic": "frequency",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⏰</text></svg>"
    },
    {
     "id": "fqk5l1u_mittel_2",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'usually'?",
     "answers": [
      "selten",
      "nie",
      "normalerweise",
      "manchmal"
     ],
     "correct": 2,
     "explanation": "usually.",
     "topic": "frequency"
    },
    {
     "id": "fqk5l1u_mittel_3",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'rarely'?",
     "answers": [
      "oft",
      "selten",
      "immer",
      "manchmal"
     ],
     "correct": 1,
     "explanation": "rarely.",
     "topic": "frequency"
    },
    {
     "id": "fqk5l1u_mittel_4",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "We go often swimming.",
      "We often go swimming.",
      "Often we go swimming often.",
      "We go swimming often go."
     ],
     "correct": 1,
     "explanation": "Vor dem Verb.",
     "topic": "frequency",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏊</text></svg>"
    },
    {
     "id": "fqk5l1u_mittel_5",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort bedeutet am häufigsten?",
     "answers": [
      "often",
      "sometimes",
      "always",
      "usually"
     ],
     "correct": 2,
     "explanation": "100 %.",
     "topic": "frequency"
    }
   ],
   "schwer": [
    {
     "id": "fqk5l1u_schwer_1",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ordne von oft nach selten: often, always, never, sometimes",
     "answers": [
      "never, sometimes, often, always",
      "always, often, sometimes, never",
      "often, always, sometimes, never",
      "always, sometimes, often, never"
     ],
     "correct": 1,
     "explanation": "100 % → 0 %.",
     "topic": "frequency"
    },
    {
     "id": "fqk5l1u_schwer_2",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "They never are bored.",
      "Never they are bored.",
      "They are bored never are.",
      "They are never bored."
     ],
     "correct": 3,
     "explanation": "Nach are.",
     "topic": "frequency"
    },
    {
     "id": "fqk5l1u_schwer_3",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "My dad usually drinks coffee.",
      "My dad drinks usually coffee.",
      "Usually my dad drink coffee.",
      "My dad usually drink coffee."
     ],
     "correct": 0,
     "explanation": "Adverb vor Verb + -s.",
     "topic": "frequency",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☕</text></svg>"
    },
    {
     "id": "fqk5l1u_schwer_4",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie fragst du 'Wie oft …?'",
     "answers": [
      "How many …?",
      "How much …?",
      "How often …?",
      "How long …?"
     ],
     "correct": 2,
     "explanation": "How often.",
     "topic": "frequency"
    },
    {
     "id": "fqk5l1u_schwer_5",
     "category": "kurs_fq_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "Does he watch often TV?",
      "Does often he watch TV?",
      "He does often watches TV?",
      "Does he often watch TV?"
     ],
     "correct": 3,
     "explanation": "Vor dem Vollverb.",
     "topic": "frequency",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📺</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "fqk5l1_test_1",
    "category": "kurs_fq_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'always' =",
    "answers": [
     "nie",
     "oft",
     "manchmal",
     "immer"
    ],
    "correct": 3,
    "explanation": "immer.",
    "topic": "frequency"
   },
   {
    "id": "fqk5l1_test_2",
    "category": "kurs_fq_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'never' =",
    "answers": [
     "nie",
     "immer",
     "selten",
     "oft"
    ],
    "correct": 0,
    "explanation": "nie.",
    "topic": "frequency"
   },
   {
    "id": "fqk5l1_test_3",
    "category": "kurs_fq_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'sometimes' =",
    "answers": [
     "manchmal",
     "immer",
     "nie",
     "oft"
    ],
    "correct": 0,
    "explanation": "manchmal.",
    "topic": "frequency"
   },
   {
    "id": "fqk5l1_test_4",
    "category": "kurs_fq_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz ist richtig?",
    "answers": [
     "I eat never fish.",
     "Never I eat fish.",
     "I eat fish never I.",
     "I never eat fish."
    ],
    "correct": 3,
    "explanation": "Vor dem Verb.",
    "topic": "frequency",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐟</text></svg>"
   },
   {
    "id": "fqk5l1_test_5",
    "category": "kurs_fq_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz ist richtig?",
    "answers": [
     "He often is tired.",
     "Often he is tired is.",
     "He is often tired.",
     "He is tired often is."
    ],
    "correct": 2,
    "explanation": "Nach is.",
    "topic": "frequency"
   },
   {
    "id": "fqk5l1_test_6",
    "category": "kurs_fq_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'rarely' =",
    "answers": [
     "selten",
     "oft",
     "immer",
     "manchmal"
    ],
    "correct": 0,
    "explanation": "selten.",
    "topic": "frequency"
   },
   {
    "id": "fqk5l1_test_7",
    "category": "kurs_fq_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie fragst du 'Wie oft?'",
    "answers": [
     "How many?",
     "How often?",
     "How long?",
     "How old?"
    ],
    "correct": 1,
    "explanation": "How often.",
    "topic": "frequency"
   },
   {
    "id": "fqk5l1_test_8",
    "category": "kurs_fq_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort = 0 %?",
    "answers": [
     "always",
     "often",
     "usually",
     "never"
    ],
    "correct": 3,
    "explanation": "never.",
    "topic": "frequency"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "fq_k5_l2",
  "kurs": "frequency_en_k5",
  "order": 2,
  "icon": "🧩",
  "title": "Word order: S – V – O – Place – Time",
  "kurz": "Die englische Satzstellung",
  "erklaerung": {
   "intro": "Im englischen Aussagesatz gilt fast immer: <b>Subject – Verb – Object</b> (S-V-O), dann <b>Ort vor Zeit</b> (<b>place before time</b>): <i>I play football in the park on Saturdays.</i> Anders als im Deutschen bleibt das Verb an <b>zweiter Stelle direkt nach dem Subjekt</b> – auch wenn eine Zeitangabe vorne steht: <i>On Saturdays I play football.</i>",
   "merksatz": "S – V – O, dann Ort vor Zeit.",
   "beispiele": [
    "I (S) play (V) football (O) in the park (Ort) on Saturdays (Zeit).",
    "She reads books at home every evening.",
    "On Mondays we have maths."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "fqk5l2u_leicht_1",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "Football I play.",
      "Play I football.",
      "I football play.",
      "I play football."
     ],
     "correct": 3,
     "explanation": "S-V-O.",
     "topic": "frequency",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
    },
    {
     "id": "fqk5l2u_leicht_2",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was steht im Englischen zuerst?",
     "answers": [
      "das Objekt",
      "die Zeit",
      "der Ort",
      "das Subjekt"
     ],
     "correct": 3,
     "explanation": "Subject first.",
     "topic": "frequency"
    },
    {
     "id": "fqk5l2u_leicht_3",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "Cats she likes.",
      "She cats likes.",
      "She likes cats.",
      "Likes she cats."
     ],
     "correct": 2,
     "explanation": "S-V-O.",
     "topic": "frequency",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐱</text></svg>"
    },
    {
     "id": "fqk5l2u_leicht_4",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was kommt zuerst: Ort oder Zeit?",
     "answers": [
      "die Zeit",
      "egal",
      "beide gleichzeitig",
      "der Ort"
     ],
     "correct": 3,
     "explanation": "Place before time.",
     "topic": "frequency"
    },
    {
     "id": "fqk5l2u_leicht_5",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "We go every day to school.",
      "Every day we to school go.",
      "We go to school every day.",
      "We every day go to school."
     ],
     "correct": 2,
     "explanation": "Ort vor Zeit.",
     "topic": "frequency",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏫</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "fqk5l2u_mittel_1",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "I meet on Fridays my friends in town.",
      "I meet my friends on Fridays in town.",
      "On Fridays meet I my friends in town.",
      "I meet my friends in town on Fridays."
     ],
     "correct": 3,
     "explanation": "S-V-O-Ort-Zeit.",
     "topic": "frequency"
    },
    {
     "id": "fqk5l2u_mittel_2",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "On Sundays visit we Grandma.",
      "On Sundays we Grandma visit.",
      "On Sundays we visit Grandma.",
      "Visit we on Sundays Grandma."
     ],
     "correct": 2,
     "explanation": "Verb nach Subjekt.",
     "topic": "frequency",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👵</text></svg>"
    },
    {
     "id": "fqk5l2u_mittel_3",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "Tom reads in the evening comics in his room.",
      "Tom reads comics in his room in the evening.",
      "Tom in his room reads comics.",
      "In the evening reads Tom comics."
     ],
     "correct": 1,
     "explanation": "S-V-O-Ort-Zeit.",
     "topic": "frequency",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📚</text></svg>"
    },
    {
     "id": "fqk5l2u_mittel_4",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wo steht das Verb im Aussagesatz?",
     "answers": [
      "immer am Ende",
      "immer am Anfang",
      "direkt nach dem Subjekt",
      "nach der Zeit"
     ],
     "correct": 2,
     "explanation": "S-V.",
     "topic": "frequency"
    },
    {
     "id": "fqk5l2u_mittel_5",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "My sister plays the piano at school.",
      "My sister the piano plays at school.",
      "At school plays my sister the piano.",
      "My sister plays at school the piano."
     ],
     "correct": 0,
     "explanation": "S-V-O-Ort.",
     "topic": "frequency",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎹</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "fqk5l2u_schwer_1",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "Yesterday saw I a fox in the garden.",
      "Yesterday I saw a fox in the garden.",
      "Yesterday I saw in the garden a fox.",
      "I yesterday saw a fox in the garden."
     ],
     "correct": 1,
     "explanation": "Verb nach Subjekt.",
     "topic": "frequency",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦊</text></svg>"
    },
    {
     "id": "fqk5l2u_schwer_2",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "They usually eat pizza at home on Fridays.",
      "They eat usually pizza at home on Fridays.",
      "They usually eat pizza on Fridays at home.",
      "Usually eat they pizza at home on Fridays."
     ],
     "correct": 0,
     "explanation": "Adverb, Ort vor Zeit.",
     "topic": "frequency",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍕</text></svg>"
    },
    {
     "id": "fqk5l2u_schwer_3",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist der typische deutsche Fehler?",
     "answers": [
      "Ort vor Zeit",
      "Subjekt zuerst",
      "Objekt nach Verb",
      "Am Montag spiele ich → 'On Monday play I'"
     ],
     "correct": 3,
     "explanation": "Keine Inversion im Englischen.",
     "topic": "frequency"
    },
    {
     "id": "fqk5l2u_schwer_4",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "We watched last night a film at the cinema.",
      "We watched a film last night at the cinema.",
      "We watched a film at the cinema last night.",
      "Last night watched we a film at the cinema."
     ],
     "correct": 2,
     "explanation": "Ort vor Zeit.",
     "topic": "frequency",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎬</text></svg>"
    },
    {
     "id": "fqk5l2u_schwer_5",
     "category": "kurs_fq_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie lautet die Reihenfolge?",
     "answers": [
      "Time – Verb – Subject – Object – Place",
      "Object – Subject – Verb – Time – Place",
      "Subject – Verb – Object – Place – Time",
      "Verb – Subject – Place – Time – Object"
     ],
     "correct": 2,
     "explanation": "SVO-P-T.",
     "topic": "frequency"
    }
   ]
  },
  "test": [
   {
    "id": "fqk5l2_test_1",
    "category": "kurs_fq_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz ist richtig?",
    "answers": [
     "An apple he eats.",
     "He eats an apple.",
     "He an apple eats.",
     "Eats he an apple."
    ],
    "correct": 1,
    "explanation": "S-V-O.",
    "topic": "frequency",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍎</text></svg>"
   },
   {
    "id": "fqk5l2_test_2",
    "category": "kurs_fq_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ort oder Zeit zuerst?",
    "answers": [
     "Zeit",
     "Ort",
     "egal",
     "keins"
    ],
    "correct": 1,
    "explanation": "Place before time.",
    "topic": "frequency"
   },
   {
    "id": "fqk5l2_test_3",
    "category": "kurs_fq_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz ist richtig?",
    "answers": [
     "I do after school my homework at home.",
     "I do my homework after school at home.",
     "After school do I my homework at home.",
     "I do my homework at home after school."
    ],
    "correct": 3,
    "explanation": "Ort vor Zeit.",
    "topic": "frequency"
   },
   {
    "id": "fqk5l2_test_4",
    "category": "kurs_fq_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz ist richtig?",
    "answers": [
     "In the morning have I breakfast.",
     "In the morning I breakfast have.",
     "In the morning I have breakfast.",
     "Have I in the morning breakfast."
    ],
    "correct": 2,
    "explanation": "Verb nach Subjekt.",
    "topic": "frequency"
   },
   {
    "id": "fqk5l2_test_5",
    "category": "kurs_fq_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wo steht das Verb?",
    "answers": [
     "am Ende",
     "nach dem Subjekt",
     "am Anfang",
     "nach dem Objekt"
    ],
    "correct": 1,
    "explanation": "S-V.",
    "topic": "frequency"
   },
   {
    "id": "fqk5l2_test_6",
    "category": "kurs_fq_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz ist richtig?",
    "answers": [
     "She plays often tennis in the park.",
     "She plays tennis often in the park often.",
     "She often plays tennis in the park.",
     "Often plays she tennis in the park."
    ],
    "correct": 2,
    "explanation": "Adverb vor Verb.",
    "topic": "frequency",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎾</text></svg>"
   },
   {
    "id": "fqk5l2_test_7",
    "category": "kurs_fq_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz ist richtig?",
    "answers": [
     "We met on Sunday our friends at the zoo.",
     "We met our friends on Sunday at the zoo.",
     "On Sunday met we our friends at the zoo.",
     "We met our friends at the zoo on Sunday."
    ],
    "correct": 3,
    "explanation": "Ort vor Zeit.",
    "topic": "frequency",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦁</text></svg>"
   },
   {
    "id": "fqk5l2_test_8",
    "category": "kurs_fq_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was steht im englischen Satz meist ganz vorne?",
    "answers": [
     "das Verb",
     "das Objekt",
     "der Ort",
     "das Subjekt"
    ],
    "correct": 3,
    "explanation": "Subjekt.",
    "topic": "frequency"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
