// Klasse 5 Rest Englisch: Free time, Shopping & food, London (28.11.2026)
(function () {
    const extraKurse = [{"id": "freetime_en_k5", "title": "Free time & hobbies", "icon": "🎸", "grade": 5, "subject": "englisch", "beschreibung": "Hobbys, play/go/do und like + -ing."}, {"id": "shopping_en_k5", "title": "Shopping & food", "icon": "🛒", "grade": 5, "subject": "englisch", "beschreibung": "Lebensmittel, Mengen, im Laden und Preise."}, {"id": "london_en_k5", "title": "A trip to London", "icon": "🎡", "grade": 5, "subject": "englisch", "beschreibung": "Sehenswürdigkeiten, Verkehrsmittel und Wegbeschreibungen in London."}];
    const extraLektionen = [
 {
  "id": "ft_k5_l1",
  "kurs": "freetime_en_k5",
  "order": 1,
  "icon": "🎸",
  "title": "play, go or do?",
  "kurz": "Sportarten und Hobbys",
  "erklaerung": {
   "intro": "Welches Verb passt? <b>play</b> + Ballspiele und Instrumente: <b>play football, play the guitar</b>. <b>go</b> + Aktivitäten mit <b>-ing</b>: <b>go swimming, go riding, go shopping</b>. <b>do</b> + Einzelsport/Kampfsport: <b>do judo, do gymnastics, do karate</b>. Bei Instrumenten steht <b>the</b>: play <b>the</b> piano.",
   "merksatz": "play + Ball/Instrument, go + -ing, do + Judo & Co.",
   "beispiele": [
    "I play football and the guitar.",
    "We go swimming on Saturdays.",
    "She does judo."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "ftk5l1u_leicht_1",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passt? 'I ___ football.'",
     "answers": [
      "play",
      "go",
      "do",
      "make"
     ],
     "correct": 0,
     "explanation": "Ballspiel → play.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
    },
    {
     "id": "ftk5l1u_leicht_2",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passt? 'We ___ swimming.'",
     "answers": [
      "play",
      "go",
      "do",
      "make"
     ],
     "correct": 1,
     "explanation": "-ing → go.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏊</text></svg>"
    },
    {
     "id": "ftk5l1u_leicht_3",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passt? 'She ___ judo.'",
     "answers": [
      "plays",
      "does",
      "goes",
      "makes"
     ],
     "correct": 1,
     "explanation": "Kampfsport → do.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥋</text></svg>"
    },
    {
     "id": "ftk5l1u_leicht_4",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'riding'?",
     "answers": [
      "Reiten",
      "Radfahren",
      "Rennen",
      "Rudern"
     ],
     "correct": 0,
     "explanation": "riding.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐎</text></svg>"
    },
    {
     "id": "ftk5l1u_leicht_5",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passt? 'He plays ___ piano.'",
     "answers": [
      "a",
      "the",
      "an",
      "–"
     ],
     "correct": 1,
     "explanation": "Instrumente mit the.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎹</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "ftk5l1u_mittel_1",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'They ___ tennis.'",
     "answers": [
      "play",
      "go",
      "do",
      "make"
     ],
     "correct": 0,
     "explanation": "Ballspiel.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎾</text></svg>"
    },
    {
     "id": "ftk5l1u_mittel_2",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'I ___ skating.'",
     "answers": [
      "play",
      "do",
      "go",
      "make"
     ],
     "correct": 2,
     "explanation": "-ing.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⛸️</text></svg>"
    },
    {
     "id": "ftk5l1u_mittel_3",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'My brother ___ gymnastics.'",
     "answers": [
      "plays",
      "does",
      "goes",
      "makes"
     ],
     "correct": 1,
     "explanation": "do.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🤸</text></svg>"
    },
    {
     "id": "ftk5l1u_mittel_4",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'drums'?",
     "answers": [
      "Trompete",
      "Geige",
      "Schlagzeug",
      "Flöte"
     ],
     "correct": 2,
     "explanation": "drums.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥁</text></svg>"
    },
    {
     "id": "ftk5l1u_mittel_5",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'Do you ___ the violin?'",
     "answers": [
      "go",
      "do",
      "play",
      "make"
     ],
     "correct": 2,
     "explanation": "Instrument.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎻</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "ftk5l1u_schwer_1",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was passt? 'We ___ shopping on Saturdays.'",
     "answers": [
      "play",
      "go",
      "do",
      "make"
     ],
     "correct": 1,
     "explanation": "go shopping.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛍️</text></svg>"
    },
    {
     "id": "ftk5l1u_schwer_2",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "She plays guitar the.",
      "She does the guitar.",
      "She plays the guitar.",
      "She goes guitar."
     ],
     "correct": 2,
     "explanation": "play the.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎸</text></svg>"
    },
    {
     "id": "ftk5l1u_schwer_3",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was passt? 'He ___ karate twice a week.'",
     "answers": [
      "plays",
      "goes",
      "does",
      "makes"
     ],
     "correct": 2,
     "explanation": "do karate.",
     "topic": "freetime"
    },
    {
     "id": "ftk5l1u_schwer_4",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was passt? 'I ___ fishing with my dad.'",
     "answers": [
      "play",
      "do",
      "make",
      "go"
     ],
     "correct": 3,
     "explanation": "go fishing.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎣</text></svg>"
    },
    {
     "id": "ftk5l1u_schwer_5",
     "category": "kurs_ft_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "They play cycling.",
      "They do cycle.",
      "They go cycle.",
      "They go cycling."
     ],
     "correct": 3,
     "explanation": "go + -ing.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚲</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "ftk5l1_test_1",
    "category": "kurs_ft_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'I ___ basketball.'",
    "answers": [
     "go",
     "play",
     "do",
     "make"
    ],
    "correct": 1,
    "explanation": "play.",
    "topic": "freetime",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏀</text></svg>"
   },
   {
    "id": "ftk5l1_test_2",
    "category": "kurs_ft_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'We ___ riding.'",
    "answers": [
     "go",
     "play",
     "do",
     "make"
    ],
    "correct": 0,
    "explanation": "go.",
    "topic": "freetime"
   },
   {
    "id": "ftk5l1_test_3",
    "category": "kurs_ft_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'She ___ yoga.'",
    "answers": [
     "plays",
     "goes",
     "does",
     "makes"
    ],
    "correct": 2,
    "explanation": "do.",
    "topic": "freetime"
   },
   {
    "id": "ftk5l1_test_4",
    "category": "kurs_ft_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'He plays ___ drums.'",
    "answers": [
     "the",
     "a",
     "an",
     "–"
    ],
    "correct": 0,
    "explanation": "the.",
    "topic": "freetime"
   },
   {
    "id": "ftk5l1_test_5",
    "category": "kurs_ft_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'I ___ swimming.'",
    "answers": [
     "play",
     "go",
     "do",
     "make"
    ],
    "correct": 1,
    "explanation": "go.",
    "topic": "freetime"
   },
   {
    "id": "ftk5l1_test_6",
    "category": "kurs_ft_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'They ___ volleyball.'",
    "answers": [
     "go",
     "do",
     "play",
     "make"
    ],
    "correct": 2,
    "explanation": "play.",
    "topic": "freetime",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏐</text></svg>"
   },
   {
    "id": "ftk5l1_test_7",
    "category": "kurs_ft_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was heißt 'hobby'?",
    "answers": [
     "Haus",
     "Hobby",
     "Hof",
     "Hut"
    ],
    "correct": 1,
    "explanation": "Hobby.",
    "topic": "freetime"
   },
   {
    "id": "ftk5l1_test_8",
    "category": "kurs_ft_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'I ___ judo.'",
    "answers": [
     "do",
     "play",
     "go",
     "make"
    ],
    "correct": 0,
    "explanation": "do.",
    "topic": "freetime"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "ft_k5_l2",
  "kurs": "freetime_en_k5",
  "order": 2,
  "icon": "❤️",
  "title": "I like / love / hate + -ing",
  "kurz": "Über Vorlieben sprechen",
  "erklaerung": {
   "intro": "Nach <b>like, love, hate, enjoy</b> steht oft ein Verb mit <b>-ing</b>: <b>I love reading. She hates getting up early.</b> Fragen: <b>Do you like dancing?</b> – <b>Yes, I do. / No, I don't.</b> Bei he/she/it: <b>Does he like swimming?</b> – <b>Yes, he does.</b> Rechtschreibung: swim → swi<b>mm</b>ing, dance → danc<b>ing</b>.",
   "merksatz": "like/love/hate + -ing. swim → swimming, dance → dancing.",
   "beispiele": [
    "I love reading comics.",
    "Does she like dancing? – Yes, she does.",
    "He hates cleaning his room."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "ftk5l2u_leicht_1",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passt? 'I love ___.'",
     "answers": [
      "read",
      "reading",
      "reads",
      "to reading"
     ],
     "correct": 1,
     "explanation": "-ing.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📚</text></svg>"
    },
    {
     "id": "ftk5l2u_leicht_2",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'I hate getting up early'?",
     "answers": [
      "Ich stehe gern früh auf.",
      "Ich bin früh wach.",
      "Ich hasse den Morgen nicht.",
      "Ich hasse es, früh aufzustehen."
     ],
     "correct": 3,
     "explanation": "hate.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⏰</text></svg>"
    },
    {
     "id": "ftk5l2u_leicht_3",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passt? 'Do you like dancing?' – 'Yes, I ___.'",
     "answers": [
      "do",
      "am",
      "does",
      "like"
     ],
     "correct": 0,
     "explanation": "Kurzantwort.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💃</text></svg>"
    },
    {
     "id": "ftk5l2u_leicht_4",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "-ing-Form von 'swim'?",
     "answers": [
      "swiming",
      "swimmming",
      "swimeing",
      "swimming"
     ],
     "correct": 3,
     "explanation": "Doppel-m.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏊</text></svg>"
    },
    {
     "id": "ftk5l2u_leicht_5",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "-ing-Form von 'dance'?",
     "answers": [
      "danceing",
      "dancking",
      "dancinng",
      "dancing"
     ],
     "correct": 3,
     "explanation": "e fällt weg.",
     "topic": "freetime"
    }
   ],
   "mittel": [
    {
     "id": "ftk5l2u_mittel_1",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'She ___ playing chess.'",
     "answers": [
      "enjoy",
      "enjoying",
      "is enjoy",
      "enjoys"
     ],
     "correct": 3,
     "explanation": "she → -s.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>♟️</text></svg>"
    },
    {
     "id": "ftk5l2u_mittel_2",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'Does he like cooking?' – 'No, he ___.'",
     "answers": [
      "don't",
      "isn't",
      "not",
      "doesn't"
     ],
     "correct": 3,
     "explanation": "he → doesn't.",
     "topic": "freetime"
    },
    {
     "id": "ftk5l2u_mittel_3",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "-ing-Form von 'run'?",
     "answers": [
      "runing",
      "runeing",
      "runnning",
      "running"
     ],
     "correct": 3,
     "explanation": "Doppel-n.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏃</text></svg>"
    },
    {
     "id": "ftk5l2u_mittel_4",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "-ing-Form von 'write'?",
     "answers": [
      "writeing",
      "writting",
      "writing",
      "writng"
     ],
     "correct": 2,
     "explanation": "e fällt weg.",
     "topic": "freetime"
    },
    {
     "id": "ftk5l2u_mittel_5",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'What do you like doing at the weekend?'",
     "answers": [
      "Was machst du heute?",
      "Was machst du am Wochenende gern?",
      "Wann ist Wochenende?",
      "Magst du das Wochenende?"
     ],
     "correct": 1,
     "explanation": "Frage.",
     "topic": "freetime"
    }
   ],
   "schwer": [
    {
     "id": "ftk5l2u_schwer_1",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "My sister love taking photos.",
      "My sister loves taking photos.",
      "My sister loves take photos.",
      "My sister loving takes photos."
     ],
     "correct": 1,
     "explanation": "loves + -ing.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📷</text></svg>"
    },
    {
     "id": "ftk5l2u_schwer_2",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "-ing-Form von 'sit'?",
     "answers": [
      "siting",
      "sitteing",
      "sitng",
      "sitting"
     ],
     "correct": 3,
     "explanation": "Doppel-t.",
     "topic": "freetime"
    },
    {
     "id": "ftk5l2u_schwer_3",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "They doesn't like watching horror films.",
      "They don't likes watching horror films.",
      "They don't like watching horror films.",
      "They not like watching horror films."
     ],
     "correct": 2,
     "explanation": "don't like.",
     "topic": "freetime"
    },
    {
     "id": "ftk5l2u_schwer_4",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "-ing-Form von 'lie' (liegen)?",
     "answers": [
      "lieing",
      "liying",
      "lying",
      "liing"
     ],
     "correct": 2,
     "explanation": "ie → y.",
     "topic": "freetime"
    },
    {
     "id": "ftk5l2u_schwer_5",
     "category": "kurs_ft_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was passt? 'I'm good at ___.'",
     "answers": [
      "drawing",
      "draw",
      "draws",
      "to drawing"
     ],
     "correct": 0,
     "explanation": "Nach Präposition -ing.",
     "topic": "freetime",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎨</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "ftk5l2_test_1",
    "category": "kurs_ft_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'I like ___.'",
    "answers": [
     "singing",
     "sing",
     "sings",
     "to singing"
    ],
    "correct": 0,
    "explanation": "-ing.",
    "topic": "freetime",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎤</text></svg>"
   },
   {
    "id": "ftk5l2_test_2",
    "category": "kurs_ft_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'Does she like reading?' – 'Yes, she ___.'",
    "answers": [
     "do",
     "is",
     "does",
     "likes"
    ],
    "correct": 2,
    "explanation": "does.",
    "topic": "freetime"
   },
   {
    "id": "ftk5l2_test_3",
    "category": "kurs_ft_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "-ing von 'swim'?",
    "answers": [
     "swimming",
     "swiming",
     "swimeing",
     "swimmming"
    ],
    "correct": 0,
    "explanation": "mm.",
    "topic": "freetime"
   },
   {
    "id": "ftk5l2_test_4",
    "category": "kurs_ft_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "-ing von 'make'?",
    "answers": [
     "makeing",
     "making",
     "makking",
     "maken"
    ],
    "correct": 1,
    "explanation": "e fällt weg.",
    "topic": "freetime"
   },
   {
    "id": "ftk5l2_test_5",
    "category": "kurs_ft_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'He ___ playing football.'",
    "answers": [
     "love",
     "loving",
     "loves",
     "is love"
    ],
    "correct": 2,
    "explanation": "-s.",
    "topic": "freetime"
   },
   {
    "id": "ftk5l2_test_6",
    "category": "kurs_ft_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'Do you like skating?' – 'No, I ___.'",
    "answers": [
     "doesn't",
     "don't",
     "am not",
     "not"
    ],
    "correct": 1,
    "explanation": "don't.",
    "topic": "freetime"
   },
   {
    "id": "ftk5l2_test_7",
    "category": "kurs_ft_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was heißt 'hate'?",
    "answers": [
     "lieben",
     "mögen",
     "hassen",
     "haben"
    ],
    "correct": 2,
    "explanation": "hate.",
    "topic": "freetime"
   },
   {
    "id": "ftk5l2_test_8",
    "category": "kurs_ft_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "-ing von 'get'?",
    "answers": [
     "geting",
     "getteing",
     "gettting",
     "getting"
    ],
    "correct": 3,
    "explanation": "tt.",
    "topic": "freetime"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "sh_k5_l1",
  "kurs": "shopping_en_k5",
  "order": 1,
  "icon": "🥕",
  "title": "Food & quantities",
  "kurz": "a bottle of, a packet of, some, any",
  "erklaerung": {
   "intro": "Mengenangaben: <b>a bottle of</b> water (Flasche), <b>a packet of</b> crisps (Packung), <b>a can of</b> cola (Dose), <b>a loaf of</b> bread (Laib), <b>a bar of</b> chocolate (Tafel), <b>a kilo of</b> apples, <b>a carton of</b> milk. <b>some</b> in Aussagen und Bitten, <b>any</b> in Fragen und Verneinungen: <i>We need some eggs. Have we got any milk?</i>",
   "merksatz": "a bottle/packet/can/loaf/bar of … – some (Aussage), any (Frage/Verneinung).",
   "beispiele": [
    "a bottle of water · a bar of chocolate",
    "a loaf of bread · a carton of milk",
    "We haven't got any bread."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "shk5l1u_leicht_1",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'a bottle of water'?",
     "answers": [
      "ein Glas Wasser",
      "eine Dose Wasser",
      "ein Eimer Wasser",
      "eine Flasche Wasser"
     ],
     "correct": 3,
     "explanation": "bottle.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💧</text></svg>"
    },
    {
     "id": "shk5l1u_leicht_2",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'a bar of chocolate'?",
     "answers": [
      "eine Packung Kekse",
      "eine Dose Kakao",
      "ein Stück Kuchen",
      "eine Tafel Schokolade"
     ],
     "correct": 3,
     "explanation": "bar.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍫</text></svg>"
    },
    {
     "id": "shk5l1u_leicht_3",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'a packet of crisps'?",
     "answers": [
      "eine Tüte Äpfel",
      "eine Dose Cola",
      "eine Packung Chips",
      "eine Flasche Saft"
     ],
     "correct": 2,
     "explanation": "packet.",
     "topic": "shopping"
    },
    {
     "id": "shk5l1u_leicht_4",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passt? 'We need ___ eggs.'",
     "answers": [
      "any",
      "a",
      "some",
      "an"
     ],
     "correct": 2,
     "explanation": "Aussage → some.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥚</text></svg>"
    },
    {
     "id": "shk5l1u_leicht_5",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passt? 'Have we got ___ milk?'",
     "answers": [
      "any",
      "some",
      "a",
      "an"
     ],
     "correct": 0,
     "explanation": "Frage → any.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥛</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "shk5l1u_mittel_1",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'a loaf of bread'?",
     "answers": [
      "eine Scheibe Brot",
      "ein Brötchen",
      "ein Laib Brot",
      "eine Packung Mehl"
     ],
     "correct": 2,
     "explanation": "loaf.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍞</text></svg>"
    },
    {
     "id": "shk5l1u_mittel_2",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'a can of cola'?",
     "answers": [
      "eine Dose Cola",
      "eine Flasche Cola",
      "ein Glas Cola",
      "ein Kasten Cola"
     ],
     "correct": 0,
     "explanation": "can.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥤</text></svg>"
    },
    {
     "id": "shk5l1u_mittel_3",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'There isn't ___ cheese.'",
     "answers": [
      "some",
      "a",
      "any",
      "an"
     ],
     "correct": 2,
     "explanation": "Verneinung.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧀</text></svg>"
    },
    {
     "id": "shk5l1u_mittel_4",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'a carton of juice'?",
     "answers": [
      "eine Kiste Äpfel",
      "eine Tüte Saft",
      "ein Fass Saft",
      "ein Karton/Tetrapack Saft"
     ],
     "correct": 3,
     "explanation": "carton.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧃</text></svg>"
    },
    {
     "id": "shk5l1u_mittel_5",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'Can I have ___ water, please?'",
     "answers": [
      "any",
      "some",
      "a",
      "an"
     ],
     "correct": 1,
     "explanation": "Bitte → some.",
     "topic": "shopping"
    }
   ],
   "schwer": [
    {
     "id": "shk5l1u_schwer_1",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist richtig?",
     "answers": [
      "a kilo of potatoes",
      "a kilo potatoes",
      "a kilo from potatoes",
      "one kilo potato"
     ],
     "correct": 0,
     "explanation": "of.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥔</text></svg>"
    },
    {
     "id": "shk5l1u_schwer_2",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "We haven't got any apples.",
      "We haven't got some apples.",
      "We have got any apples.",
      "We haven't any got apples."
     ],
     "correct": 0,
     "explanation": "Verneinung → any.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍎</text></svg>"
    },
    {
     "id": "shk5l1u_schwer_3",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was heißt 'a jar of jam'?",
     "answers": [
      "eine Flasche Saft",
      "eine Dose Bohnen",
      "eine Tüte Zucker",
      "ein Glas Marmelade"
     ],
     "correct": 3,
     "explanation": "jar.",
     "topic": "shopping"
    },
    {
     "id": "shk5l1u_schwer_4",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was passt? 'Would you like ___ tea?'",
     "answers": [
      "any",
      "a",
      "an",
      "some"
     ],
     "correct": 3,
     "explanation": "Angebot → some.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍵</text></svg>"
    },
    {
     "id": "shk5l1u_schwer_5",
     "category": "kurs_sh_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was heißt 'a slice of pizza'?",
     "answers": [
      "eine ganze Pizza",
      "eine Pizzaschachtel",
      "ein Stück Pizza",
      "ein Teller Pizza"
     ],
     "correct": 2,
     "explanation": "slice.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍕</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "shk5l1_test_1",
    "category": "kurs_sh_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'a bottle of' =",
    "answers": [
     "eine Dose",
     "eine Tüte",
     "eine Flasche",
     "ein Glas"
    ],
    "correct": 2,
    "explanation": "bottle.",
    "topic": "shopping"
   },
   {
    "id": "shk5l1_test_2",
    "category": "kurs_sh_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'a bar of chocolate' =",
    "answers": [
     "eine Tafel Schokolade",
     "eine Dose Kakao",
     "eine Packung Kekse",
     "ein Becher Eis"
    ],
    "correct": 0,
    "explanation": "bar.",
    "topic": "shopping"
   },
   {
    "id": "shk5l1_test_3",
    "category": "kurs_sh_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'We need ___ bread.'",
    "answers": [
     "some",
     "any",
     "a",
     "an"
    ],
    "correct": 0,
    "explanation": "some.",
    "topic": "shopping"
   },
   {
    "id": "shk5l1_test_4",
    "category": "kurs_sh_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'Is there ___ juice?'",
    "answers": [
     "any",
     "some",
     "a",
     "an"
    ],
    "correct": 0,
    "explanation": "any.",
    "topic": "shopping"
   },
   {
    "id": "shk5l1_test_5",
    "category": "kurs_sh_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'a loaf of bread' =",
    "answers": [
     "ein Brötchen",
     "ein Toast",
     "ein Laib Brot",
     "eine Scheibe"
    ],
    "correct": 2,
    "explanation": "loaf.",
    "topic": "shopping"
   },
   {
    "id": "shk5l1_test_6",
    "category": "kurs_sh_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'a can of' =",
    "answers": [
     "eine Flasche",
     "eine Dose",
     "ein Glas",
     "ein Karton"
    ],
    "correct": 1,
    "explanation": "can.",
    "topic": "shopping"
   },
   {
    "id": "shk5l1_test_7",
    "category": "kurs_sh_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'There aren't ___ bananas.'",
    "answers": [
     "some",
     "any",
     "a",
     "an"
    ],
    "correct": 1,
    "explanation": "any.",
    "topic": "shopping",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍌</text></svg>"
   },
   {
    "id": "shk5l1_test_8",
    "category": "kurs_sh_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'a packet of crisps' =",
    "answers": [
     "ein Glas Chips",
     "eine Dose Chips",
     "eine Packung Chips",
     "eine Flasche Chips"
    ],
    "correct": 2,
    "explanation": "packet.",
    "topic": "shopping"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "sh_k5_l2",
  "kurs": "shopping_en_k5",
  "order": 2,
  "icon": "💷",
  "title": "At the shop",
  "kurz": "How much is it? – pounds and pence",
  "erklaerung": {
   "intro": "Im Laden: <b>Can I help you?</b> – <b>Yes, I'd like …, please.</b> <b>How much is it?</b> (Einzahl) / <b>How much are they?</b> (Mehrzahl) – <b>It's £2.50</b> (two pounds fifty). <b>£1 = 100p</b> (pence). <b>Here you are.</b> – <b>Thank you.</b> <b>That's too expensive!</b> (zu teuer) – <b>cheap</b> = billig.",
   "merksatz": "How much is it / are they? £1 = 100p.",
   "beispiele": [
    "Can I help you? – Yes, I'd like two apples, please.",
    "How much are they? – They're 80p.",
    "£3.20 = three pounds twenty"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "shk5l2u_leicht_1",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'How much is it?'",
     "answers": [
      "Wie viel kostet das?",
      "Wie viele sind es?",
      "Was ist das?",
      "Wo ist das?"
     ],
     "correct": 0,
     "explanation": "Preis.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💷</text></svg>"
    },
    {
     "id": "shk5l2u_leicht_2",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele pence sind £1?",
     "answers": [
      "10",
      "1000",
      "100",
      "50"
     ],
     "correct": 2,
     "explanation": "100p.",
     "topic": "shopping"
    },
    {
     "id": "shk5l2u_leicht_3",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'I'd like an apple, please.'",
     "answers": [
      "Ich mag Äpfel.",
      "Ich habe einen Apfel.",
      "Ich hätte gern einen Apfel.",
      "Ist das ein Apfel?"
     ],
     "correct": 2,
     "explanation": "I'd like.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍎</text></svg>"
    },
    {
     "id": "shk5l2u_leicht_4",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'expensive'?",
     "answers": [
      "billig",
      "teuer",
      "lecker",
      "frisch"
     ],
     "correct": 1,
     "explanation": "expensive.",
     "topic": "shopping"
    },
    {
     "id": "shk5l2u_leicht_5",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was sagt der Verkäufer oft zuerst?",
     "answers": [
      "Goodbye!",
      "How old are you?",
      "Can I help you?",
      "Where are you from?"
     ],
     "correct": 2,
     "explanation": "Hilfe anbieten.",
     "topic": "shopping"
    }
   ],
   "mittel": [
    {
     "id": "shk5l2u_mittel_1",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'How much ___ the bananas?'",
     "answers": [
      "are",
      "is",
      "am",
      "be"
     ],
     "correct": 0,
     "explanation": "Mehrzahl.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍌</text></svg>"
    },
    {
     "id": "shk5l2u_mittel_2",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie sagt man £2.50?",
     "answers": [
      "two pounds fifty",
      "two fifty pounds",
      "two pound and fifty",
      "two and fifty"
     ],
     "correct": 0,
     "explanation": "pounds + pence.",
     "topic": "shopping"
    },
    {
     "id": "shk5l2u_mittel_3",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'Here you are.'",
     "answers": [
      "Bitte schön (hier, nimm).",
      "Hier bist du.",
      "Wo bist du?",
      "Komm her."
     ],
     "correct": 0,
     "explanation": "Übergeben.",
     "topic": "shopping"
    },
    {
     "id": "shk5l2u_mittel_4",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'cheap'?",
     "answers": [
      "billig",
      "teuer",
      "groß",
      "frisch"
     ],
     "correct": 0,
     "explanation": "cheap.",
     "topic": "shopping"
    },
    {
     "id": "shk5l2u_mittel_5",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'How much ___ this T-shirt?'",
     "answers": [
      "are",
      "am",
      "be",
      "is"
     ],
     "correct": 3,
     "explanation": "Einzahl.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👕</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "shk5l2u_schwer_1",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Du gibst £5 und zahlst £3.40. Wie viel Wechselgeld?",
     "answers": [
      "£2.60",
      "£1.60",
      "£1.40",
      "£8.40"
     ],
     "correct": 1,
     "explanation": "5,00 − 3,40.",
     "topic": "shopping"
    },
    {
     "id": "shk5l2u_schwer_2",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was heißt 'Have you got this in a smaller size?'",
     "answers": [
      "Ist das kleiner?",
      "Haben Sie kleine Kinder?",
      "Ist es zu klein?",
      "Haben Sie das eine Nummer kleiner?"
     ],
     "correct": 3,
     "explanation": "size = Größe.",
     "topic": "shopping"
    },
    {
     "id": "shk5l2u_schwer_3",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was heißt 'Anything else?'",
     "answers": [
      "Sonst noch etwas?",
      "Gar nichts?",
      "Wer noch?",
      "Wo noch?"
     ],
     "correct": 0,
     "explanation": "Anything else.",
     "topic": "shopping"
    },
    {
     "id": "shk5l2u_schwer_4",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie sagt man 75p?",
     "answers": [
      "seventy-five pence",
      "seventy-five pounds",
      "seventy-five pennies pound",
      "zero pounds seventy-five"
     ],
     "correct": 0,
     "explanation": "pence.",
     "topic": "shopping"
    },
    {
     "id": "shk5l2u_schwer_5",
     "category": "kurs_sh_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "These shoes is too expensive.",
      "These shoes are too expensive.",
      "This shoes are too expensive.",
      "These shoe are too expensive."
     ],
     "correct": 1,
     "explanation": "these + are.",
     "topic": "shopping",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👟</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "shk5l2_test_1",
    "category": "kurs_sh_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'How much is it?' =",
    "answers": [
     "Wie viel kostet das?",
     "Wie viele?",
     "Wie alt?",
     "Wo ist es?"
    ],
    "correct": 0,
    "explanation": "Preis.",
    "topic": "shopping"
   },
   {
    "id": "shk5l2_test_2",
    "category": "kurs_sh_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "£1 = ?p",
    "answers": [
     "10",
     "50",
     "1000",
     "100"
    ],
    "correct": 3,
    "explanation": "100.",
    "topic": "shopping"
   },
   {
    "id": "shk5l2_test_3",
    "category": "kurs_sh_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'expensive' =",
    "answers": [
     "teuer",
     "billig",
     "lecker",
     "alt"
    ],
    "correct": 0,
    "explanation": "teuer.",
    "topic": "shopping"
   },
   {
    "id": "shk5l2_test_4",
    "category": "kurs_sh_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'How much ___ the apples?'",
    "answers": [
     "is",
     "am",
     "be",
     "are"
    ],
    "correct": 3,
    "explanation": "are.",
    "topic": "shopping"
   },
   {
    "id": "shk5l2_test_5",
    "category": "kurs_sh_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "£4.20 =",
    "answers": [
     "four twenty pounds",
     "twenty four pounds",
     "four and twenty",
     "four pounds twenty"
    ],
    "correct": 3,
    "explanation": "pounds + pence.",
    "topic": "shopping"
   },
   {
    "id": "shk5l2_test_6",
    "category": "kurs_sh_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'I'd like …' =",
    "answers": [
     "Ich mag …",
     "Ich habe …",
     "Ich hätte gern …",
     "Ich bin …"
    ],
    "correct": 2,
    "explanation": "I'd like.",
    "topic": "shopping"
   },
   {
    "id": "shk5l2_test_7",
    "category": "kurs_sh_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'cheap' =",
    "answers": [
     "teuer",
     "billig",
     "frisch",
     "groß"
    ],
    "correct": 1,
    "explanation": "billig.",
    "topic": "shopping"
   },
   {
    "id": "shk5l2_test_8",
    "category": "kurs_sh_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wechselgeld: £10 − £6.50?",
    "answers": [
     "£4.50",
     "£3.50",
     "£3.40",
     "£16.50"
    ],
    "correct": 1,
    "explanation": "10 − 6,50.",
    "topic": "shopping"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "ld_k5_l1",
  "kurs": "london_en_k5",
  "order": 1,
  "icon": "🎡",
  "title": "Sights in London",
  "kurz": "Big Ben, Tower Bridge, London Eye …",
  "erklaerung": {
   "intro": "London ist die Hauptstadt von <b>England</b> und des <b>United Kingdom</b>. Sehenswürdigkeiten: <b>Big Ben</b> (die Glocke im Uhrturm am Parlament), <b>Tower Bridge</b>, <b>the Tower of London</b> (Kronjuwelen), <b>Buckingham Palace</b> (offizieller Palast des Königs), <b>the London Eye</b> (Riesenrad), der Fluss <b>Thames</b> (Themse), <b>Trafalgar Square</b>.",
   "merksatz": "Big Ben, Tower Bridge, Buckingham Palace, London Eye – an der Thames.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🕰️</text></svg>Big Ben",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎡</text></svg>the London Eye",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👑</text></svg>Buckingham Palace"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "ldk5l1u_leicht_1",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Fluss fließt durch London?",
     "answers": [
      "the Thames",
      "the Rhine",
      "the Danube",
      "the Seine"
     ],
     "correct": 0,
     "explanation": "Themse.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌊</text></svg>"
    },
    {
     "id": "ldk5l1u_leicht_2",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist das London Eye?",
     "answers": [
      "ein Turm",
      "ein Riesenrad",
      "ein Museum",
      "eine Brücke"
     ],
     "correct": 1,
     "explanation": "Riesenrad.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎡</text></svg>"
    },
    {
     "id": "ldk5l1u_leicht_3",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie heißt der offizielle Palast des britischen Königs in London?",
     "answers": [
      "Big Ben",
      "Buckingham Palace",
      "Tower Bridge",
      "London Eye"
     ],
     "correct": 1,
     "explanation": "Palast.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👑</text></svg>"
    },
    {
     "id": "ldk5l1u_leicht_4",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist Big Ben?",
     "answers": [
      "eine Brücke",
      "die große Glocke im Uhrturm",
      "ein Park",
      "ein Bus"
     ],
     "correct": 1,
     "explanation": "Glocke.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🕰️</text></svg>"
    },
    {
     "id": "ldk5l1u_leicht_5",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "London ist die Hauptstadt von …",
     "answers": [
      "Irland",
      "Schottland allein",
      "England und dem United Kingdom",
      "den USA"
     ],
     "correct": 2,
     "explanation": "UK.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🇬🇧</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "ldk5l1u_mittel_1",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was kann man im Tower of London sehen?",
     "answers": [
      "Dinosaurier",
      "ein Riesenrad",
      "die Kronjuwelen",
      "Flugzeuge"
     ],
     "correct": 2,
     "explanation": "Crown Jewels.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💎</text></svg>"
    },
    {
     "id": "ldk5l1u_mittel_2",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Brücke kann sich öffnen?",
     "answers": [
      "London Bridge Eye",
      "Tower Bridge",
      "Big Ben Bridge",
      "Thames Gate"
     ],
     "correct": 1,
     "explanation": "Tower Bridge.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌉</text></svg>"
    },
    {
     "id": "ldk5l1u_mittel_3",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Farbe haben die typischen Londoner Busse?",
     "answers": [
      "gelb",
      "rot",
      "blau",
      "grün"
     ],
     "correct": 1,
     "explanation": "Red double-deckers.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚌</text></svg>"
    },
    {
     "id": "ldk5l1u_mittel_4",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist ein 'double-decker'?",
     "answers": [
      "eine Brücke",
      "ein Bus mit zwei Etagen",
      "ein Zug",
      "ein Boot"
     ],
     "correct": 1,
     "explanation": "Doppeldecker.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚌</text></svg>"
    },
    {
     "id": "ldk5l1u_mittel_5",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'sights'?",
     "answers": [
      "Straßen",
      "Sehenswürdigkeiten",
      "Geschäfte",
      "Hotels"
     ],
     "correct": 1,
     "explanation": "sights.",
     "topic": "london"
    }
   ],
   "schwer": [
    {
     "id": "ldk5l1u_schwer_1",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist Trafalgar Square?",
     "answers": [
      "ein Park",
      "ein Museum",
      "ein großer Platz mit einer hohen Säule",
      "ein Fußballstadion"
     ],
     "correct": 2,
     "explanation": "Nelson's Column.",
     "topic": "london"
    },
    {
     "id": "ldk5l1u_schwer_2",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie heißen die Wachen vor dem Buckingham Palace?",
     "answers": [
      "the Police Boys",
      "the Tower Kids",
      "the King's Guard",
      "the London Rangers"
     ],
     "correct": 2,
     "explanation": "Wachen mit Bärenfellmützen.",
     "topic": "london"
    },
    {
     "id": "ldk5l1u_schwer_3",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "We visit the Tower of London yesterday.",
      "We visited the Tower of London yesterday.",
      "We visiting the Tower of London yesterday.",
      "We visited Tower of London the yesterday."
     ],
     "correct": 1,
     "explanation": "Simple past.",
     "topic": "london"
    },
    {
     "id": "ldk5l1u_schwer_4",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Einwohner hat London ungefähr?",
     "answers": [
      "80 000",
      "800 000",
      "80 Millionen",
      "über 8 Millionen"
     ],
     "correct": 3,
     "explanation": "Rund 9 Mio.",
     "topic": "london"
    },
    {
     "id": "ldk5l1u_schwer_5",
     "category": "kurs_ld_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist das British Museum?",
     "answers": [
      "ein Schloss",
      "ein großes, kostenloses Museum",
      "eine Brücke",
      "ein Riesenrad"
     ],
     "correct": 1,
     "explanation": "Museum.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏛️</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "ldk5l1_test_1",
    "category": "kurs_ld_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Fluss durch London?",
    "answers": [
     "the Thames",
     "the Rhine",
     "the Seine",
     "the Elbe"
    ],
    "correct": 0,
    "explanation": "Themse.",
    "topic": "london"
   },
   {
    "id": "ldk5l1_test_2",
    "category": "kurs_ld_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist das London Eye?",
    "answers": [
     "ein Turm",
     "eine Brücke",
     "ein Riesenrad",
     "ein Bus"
    ],
    "correct": 2,
    "explanation": "Riesenrad.",
    "topic": "london"
   },
   {
    "id": "ldk5l1_test_3",
    "category": "kurs_ld_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Offizieller Palast des Königs?",
    "answers": [
     "Buckingham Palace",
     "Big Ben",
     "Tower Bridge",
     "Hyde Park"
    ],
    "correct": 0,
    "explanation": "Palast.",
    "topic": "london"
   },
   {
    "id": "ldk5l1_test_4",
    "category": "kurs_ld_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist Big Ben?",
    "answers": [
     "eine Brücke",
     "ein Palast",
     "ein Bus",
     "eine Glocke im Uhrturm"
    ],
    "correct": 3,
    "explanation": "Glocke.",
    "topic": "london"
   },
   {
    "id": "ldk5l1_test_5",
    "category": "kurs_ld_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Farbe der London-Busse?",
    "answers": [
     "blau",
     "gelb",
     "rot",
     "grün"
    ],
    "correct": 2,
    "explanation": "Rot.",
    "topic": "london"
   },
   {
    "id": "ldk5l1_test_6",
    "category": "kurs_ld_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was liegt im Tower of London?",
    "answers": [
     "Dinosaurier",
     "die Kronjuwelen",
     "Autos",
     "Bücher"
    ],
    "correct": 1,
    "explanation": "Juwelen.",
    "topic": "london"
   },
   {
    "id": "ldk5l1_test_7",
    "category": "kurs_ld_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'sights' =",
    "answers": [
     "Straßen",
     "Läden",
     "Sehenswürdigkeiten",
     "Sitze"
    ],
    "correct": 2,
    "explanation": "sights.",
    "topic": "london"
   },
   {
    "id": "ldk5l1_test_8",
    "category": "kurs_ld_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Brücke öffnet sich?",
    "answers": [
     "London Eye",
     "Big Ben",
     "Tower Bridge",
     "Trafalgar"
    ],
    "correct": 2,
    "explanation": "Tower Bridge.",
    "topic": "london"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "ld_k5_l2",
  "kurs": "london_en_k5",
  "order": 2,
  "icon": "🚇",
  "title": "Getting around London",
  "kurz": "Tube, bus, directions",
  "erklaerung": {
   "intro": "Die Londoner U-Bahn heißt <b>the Underground</b> oder <b>the Tube</b>. Man fährt mit <b>by bus, by Tube, by taxi</b> – aber <b>on foot</b> (zu Fuß). Nach dem Weg fragen: <b>Excuse me, how do I get to …?</b> Antworten: <b>Go straight on. Turn left/right. Take the second street on the left. It's next to / opposite the bank.</b> Achtung: In Großbritannien herrscht <b>Linksverkehr</b> – <b>Look right!</b>",
   "merksatz": "by bus/Tube – on foot. Excuse me, how do I get to …?",
   "beispiele": [
    "Excuse me, how do I get to the station?",
    "Go straight on and turn left.",
    "It's opposite the museum."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "ldk5l2u_leicht_1",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie heißt die Londoner U-Bahn?",
     "answers": [
      "the Metro",
      "the Subway",
      "the Tube",
      "the S-Bahn"
     ],
     "correct": 2,
     "explanation": "Tube/Underground.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚇</text></svg>"
    },
    {
     "id": "ldk5l2u_leicht_2",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'Turn left'?",
     "answers": [
      "Bieg rechts ab.",
      "Bieg links ab.",
      "Geh geradeaus.",
      "Dreh um."
     ],
     "correct": 1,
     "explanation": "left.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⬅️</text></svg>"
    },
    {
     "id": "ldk5l2u_leicht_3",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was heißt 'Go straight on'?",
     "answers": [
      "Geh geradeaus.",
      "Geh zurück.",
      "Bieg ab.",
      "Halt an."
     ],
     "correct": 0,
     "explanation": "straight on.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⬆️</text></svg>"
    },
    {
     "id": "ldk5l2u_leicht_4",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passt? 'I go to school ___ foot.'",
     "answers": [
      "by",
      "on",
      "with",
      "in"
     ],
     "correct": 1,
     "explanation": "on foot.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚶</text></svg>"
    },
    {
     "id": "ldk5l2u_leicht_5",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passt? 'We go ___ bus.'",
     "answers": [
      "by",
      "on",
      "with",
      "at"
     ],
     "correct": 0,
     "explanation": "by bus.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚌</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "ldk5l2u_mittel_1",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'opposite'?",
     "answers": [
      "neben",
      "hinter",
      "gegenüber",
      "zwischen"
     ],
     "correct": 2,
     "explanation": "opposite.",
     "topic": "london"
    },
    {
     "id": "ldk5l2u_mittel_2",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie fragst du nach dem Weg?",
     "answers": [
      "Where you go station?",
      "Station is where me?",
      "Excuse me, how do I get to the station?",
      "Give me station!"
     ],
     "correct": 2,
     "explanation": "Höflich.",
     "topic": "london"
    },
    {
     "id": "ldk5l2u_mittel_3",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'Take the second street on the right'?",
     "answers": [
      "Nimm die zweite Straße links.",
      "Geh zwei Straßen zurück.",
      "Nimm die zweite Straße rechts.",
      "Nimm die erste Straße rechts."
     ],
     "correct": 2,
     "explanation": "second, right.",
     "topic": "london"
    },
    {
     "id": "ldk5l2u_mittel_4",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum steht auf Londoner Straßen 'Look right'?",
     "answers": [
      "Weil rechts Läden sind.",
      "Weil es ein Spiel ist.",
      "Weil links nichts ist.",
      "Weil Linksverkehr herrscht."
     ],
     "correct": 3,
     "explanation": "Linksverkehr.",
     "topic": "london"
    },
    {
     "id": "ldk5l2u_mittel_5",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was heißt 'next to the bank'?",
     "answers": [
      "neben der Bank",
      "gegenüber der Bank",
      "hinter der Bank",
      "in der Bank"
     ],
     "correct": 0,
     "explanation": "next to.",
     "topic": "london"
    }
   ],
   "schwer": [
    {
     "id": "ldk5l2u_schwer_1",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist 'the Oyster card'?",
     "answers": [
      "eine Restaurantkarte",
      "eine Postkarte",
      "eine Fahrkarte für Bus und Tube in London",
      "ein Museumsticket"
     ],
     "correct": 2,
     "explanation": "Oyster.",
     "topic": "london"
    },
    {
     "id": "ldk5l2u_schwer_2",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "It's between the café and the bookshop.",
      "It's between of the café and the bookshop.",
      "It's among the café and the bookshop.",
      "It's between the café or the bookshop."
     ],
     "correct": 0,
     "explanation": "between … and.",
     "topic": "london"
    },
    {
     "id": "ldk5l2u_schwer_3",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was heißt 'Mind the gap'?",
     "answers": [
      "Achte auf den Spalt (zwischen Zug und Bahnsteig).",
      "Achte auf die Lücke im Text.",
      "Pass auf deine Tasche auf.",
      "Halte Abstand."
     ],
     "correct": 0,
     "explanation": "Berühmte Ansage.",
     "topic": "london",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚇</text></svg>"
    },
    {
     "id": "ldk5l2u_schwer_4",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was heißt 'at the end of the street'?",
     "answers": [
      "am Anfang der Straße",
      "in der Mitte der Straße",
      "neben der Straße",
      "am Ende der Straße"
     ],
     "correct": 3,
     "explanation": "end.",
     "topic": "london"
    },
    {
     "id": "ldk5l2u_schwer_5",
     "category": "kurs_ld_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "englisch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was passt? 'How long does it take ___ bus?'",
     "answers": [
      "on",
      "by",
      "with",
      "at"
     ],
     "correct": 1,
     "explanation": "by bus.",
     "topic": "london"
    }
   ]
  },
  "test": [
   {
    "id": "ldk5l2_test_1",
    "category": "kurs_ld_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Londoner U-Bahn?",
    "answers": [
     "the Metro",
     "the Tram",
     "the Tube",
     "the Subway"
    ],
    "correct": 2,
    "explanation": "Tube.",
    "topic": "london"
   },
   {
    "id": "ldk5l2_test_2",
    "category": "kurs_ld_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'Turn right' =",
    "answers": [
     "Bieg links ab.",
     "Bieg rechts ab.",
     "Geh geradeaus.",
     "Bleib stehen."
    ],
    "correct": 1,
    "explanation": "right.",
    "topic": "london",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>➡️</text></svg>"
   },
   {
    "id": "ldk5l2_test_3",
    "category": "kurs_ld_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'by Tube' / '___ foot'",
    "answers": [
     "by",
     "on",
     "with",
     "in"
    ],
    "correct": 1,
    "explanation": "on foot.",
    "topic": "london"
   },
   {
    "id": "ldk5l2_test_4",
    "category": "kurs_ld_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'opposite' =",
    "answers": [
     "neben",
     "gegenüber",
     "hinter",
     "unter"
    ],
    "correct": 1,
    "explanation": "opposite.",
    "topic": "london"
   },
   {
    "id": "ldk5l2_test_5",
    "category": "kurs_ld_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie fragst du nach dem Weg?",
    "answers": [
     "Where is me …?",
     "Go me to …!",
     "Excuse me, how do I get to …?",
     "How old is …?"
    ],
    "correct": 2,
    "explanation": "Höflich.",
    "topic": "london"
   },
   {
    "id": "ldk5l2_test_6",
    "category": "kurs_ld_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Verkehr in Großbritannien?",
    "answers": [
     "Rechtsverkehr",
     "kein Verkehr",
     "Linksverkehr",
     "nur Fahrräder"
    ],
    "correct": 2,
    "explanation": "Links.",
    "topic": "london"
   },
   {
    "id": "ldk5l2_test_7",
    "category": "kurs_ld_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'Mind the gap' =",
    "answers": [
     "Achte auf den Spalt.",
     "Pass auf die Zeit auf.",
     "Denk an die Karte.",
     "Halte an."
    ],
    "correct": 0,
    "explanation": "Spalt.",
    "topic": "london"
   },
   {
    "id": "ldk5l2_test_8",
    "category": "kurs_ld_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "englisch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'next to' =",
    "answers": [
     "gegenüber",
     "zwischen",
     "hinter",
     "neben"
    ],
    "correct": 3,
    "explanation": "next to.",
    "topic": "london"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
