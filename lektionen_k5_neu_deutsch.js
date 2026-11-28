// Neue Deutschkurse Klasse 5: Zeitformen, Erzählen, Gedichte (28.11.2026)
(function () {
    const extraKurse = [{"id": "zeitformen_k5", "title": "Die Zeitformen", "icon": "⏳", "grade": 5, "subject": "deutsch", "beschreibung": "Präsens, Präteritum, Perfekt, Plusquamperfekt, Futur I."}, {"id": "erzaehlen_k5", "title": "Spannend erzählen", "icon": "📖", "grade": 5, "subject": "deutsch", "beschreibung": "Aufbau einer Erzählung, Spannung, Erzählperspektive."}, {"id": "gedichte_k5", "title": "Gedichte untersuchen", "icon": "🎭", "grade": 5, "subject": "deutsch", "beschreibung": "Vers, Strophe, Reimschema und sprachliche Bilder."}];
    const extraLektionen = [
 {
  "id": "zf_k5_l1",
  "kurs": "zeitformen_k5",
  "order": 1,
  "icon": "⏳",
  "title": "Präsens, Präteritum, Futur",
  "kurz": "Gegenwart, Vergangenheit, Zukunft",
  "erklaerung": {
   "intro": "<b>Präsens</b> (Gegenwart): ich <b>spiele</b>. <b>Präteritum</b> (1. Vergangenheit, schriftliches Erzählen): ich <b>spielte</b>, ich <b>ging</b>. <b>Futur I</b> (Zukunft): ich <b>werde spielen</b> – mit „werden“ + Grundform. Präsens und Präteritum sind <b>einfache</b> Zeitformen (ein Wort), Futur ist <b>zusammengesetzt</b>.",
   "merksatz": "spiele – spielte – werde spielen.",
   "beispiele": [
    "Präsens: Sie liest ein Buch.",
    "Präteritum: Sie las ein Buch.",
    "Futur I: Sie wird ein Buch lesen."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "zfk5l1u_leicht_1",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Zeitform? 'Ich spiele Fußball.'",
     "answers": [
      "Präteritum",
      "Futur I",
      "Perfekt",
      "Präsens"
     ],
     "correct": 3,
     "explanation": "Gegenwart.",
     "topic": "zeitformen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
    },
    {
     "id": "zfk5l1u_leicht_2",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Zeitform? 'Er lief schnell.'",
     "answers": [
      "Präteritum",
      "Präsens",
      "Futur I",
      "Plusquamperfekt"
     ],
     "correct": 0,
     "explanation": "lief.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l1u_leicht_3",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Zeitform? 'Wir werden schwimmen.'",
     "answers": [
      "Präsens",
      "Futur I",
      "Präteritum",
      "Perfekt"
     ],
     "correct": 1,
     "explanation": "werden + Grundform.",
     "topic": "zeitformen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏊</text></svg>"
    },
    {
     "id": "zfk5l1u_leicht_4",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Präteritum von 'ich gehe'?",
     "answers": [
      "ich gehte",
      "ich bin gegangen",
      "ich ging",
      "ich werde gehen"
     ],
     "correct": 2,
     "explanation": "gehen – ging.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l1u_leicht_5",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Womit bildet man das Futur I?",
     "answers": [
      "mit 'haben'",
      "mit 'sein'",
      "mit 'werden' + Grundform",
      "mit -te"
     ],
     "correct": 2,
     "explanation": "werden.",
     "topic": "zeitformen"
    }
   ],
   "mittel": [
    {
     "id": "zfk5l1u_mittel_1",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Präteritum von 'sie singt'?",
     "answers": [
      "sie sang",
      "sie singte",
      "sie hat gesungen",
      "sie sung"
     ],
     "correct": 0,
     "explanation": "singen – sang.",
     "topic": "zeitformen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎤</text></svg>"
    },
    {
     "id": "zfk5l1u_mittel_2",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Futur I von 'du lernst'?",
     "answers": [
      "du lerntest",
      "du wirst lernen",
      "du hast gelernt",
      "du wirst gelernt"
     ],
     "correct": 1,
     "explanation": "wirst + lernen.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l1u_mittel_3",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Präteritum von 'wir denken'?",
     "answers": [
      "wir dachten",
      "wir denkten",
      "wir dankten",
      "wir haben gedacht"
     ],
     "correct": 0,
     "explanation": "denken – dachte.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l1u_mittel_4",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "In welcher Zeitform schreibt man meist Erzählungen?",
     "answers": [
      "Futur I",
      "Präsens immer",
      "Plusquamperfekt",
      "Präteritum"
     ],
     "correct": 3,
     "explanation": "Präteritum.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l1u_mittel_5",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Zeitform? 'Morgen regnet es.'",
     "answers": [
      "Futur I",
      "Präteritum",
      "Perfekt",
      "Präsens (mit Zukunftsbedeutung)"
     ],
     "correct": 3,
     "explanation": "Präsens kann Zukunft ausdrücken.",
     "topic": "zeitformen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌧️</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "zfk5l1u_schwer_1",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Präteritum von 'er bringt'?",
     "answers": [
      "er bringte",
      "er brang",
      "er brachte",
      "er brachtete"
     ],
     "correct": 2,
     "explanation": "bringen – brachte.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l1u_schwer_2",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Präteritum von 'ihr esst'?",
     "answers": [
      "ihr esstet",
      "ihr aßt",
      "ihr aßet",
      "ihr habt gegessen"
     ],
     "correct": 1,
     "explanation": "essen – aß.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l1u_schwer_3",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz steht im Futur I?",
     "answers": [
      "Ich rief dich an.",
      "Ich rufe dich an.",
      "Ich habe dich angerufen.",
      "Ich werde dich anrufen."
     ],
     "correct": 3,
     "explanation": "werde + anrufen.",
     "topic": "zeitformen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📞</text></svg>"
    },
    {
     "id": "zfk5l1u_schwer_4",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was drückt das Präsens NICHT aus?",
     "answers": [
      "Gegenwart",
      "allgemeine Wahrheiten",
      "Zukunft mit Zeitangabe",
      "eine abgeschlossene Vergangenheit"
     ],
     "correct": 3,
     "explanation": "Dafür Präteritum/Perfekt.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l1u_schwer_5",
     "category": "kurs_zf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Präteritum von 'du weißt'?",
     "answers": [
      "du weißtest",
      "du wisstest",
      "du wusstest",
      "du wusst"
     ],
     "correct": 2,
     "explanation": "wissen – wusste.",
     "topic": "zeitformen"
    }
   ]
  },
  "test": [
   {
    "id": "zfk5l1_test_1",
    "category": "kurs_zf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zeitform? 'Sie tanzt.'",
    "answers": [
     "Präteritum",
     "Futur I",
     "Perfekt",
     "Präsens"
    ],
    "correct": 3,
    "explanation": "Gegenwart.",
    "topic": "zeitformen"
   },
   {
    "id": "zfk5l1_test_2",
    "category": "kurs_zf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zeitform? 'Wir fuhren weg.'",
    "answers": [
     "Präsens",
     "Futur I",
     "Perfekt",
     "Präteritum"
    ],
    "correct": 3,
    "explanation": "fuhren.",
    "topic": "zeitformen"
   },
   {
    "id": "zfk5l1_test_3",
    "category": "kurs_zf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zeitform? 'Ihr werdet staunen.'",
    "answers": [
     "Präsens",
     "Präteritum",
     "Perfekt",
     "Futur I"
    ],
    "correct": 3,
    "explanation": "werden.",
    "topic": "zeitformen"
   },
   {
    "id": "zfk5l1_test_4",
    "category": "kurs_zf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Präteritum von 'ich schreibe'?",
    "answers": [
     "ich schrieb",
     "ich schreibte",
     "ich schrub",
     "ich habe geschrieben"
    ],
    "correct": 0,
    "explanation": "schrieb.",
    "topic": "zeitformen"
   },
   {
    "id": "zfk5l1_test_5",
    "category": "kurs_zf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Futur I von 'sie kommt'?",
    "answers": [
     "sie kam",
     "sie wird kommen",
     "sie ist gekommen",
     "sie wird gekommen"
    ],
    "correct": 1,
    "explanation": "wird kommen.",
    "topic": "zeitformen"
   },
   {
    "id": "zfk5l1_test_6",
    "category": "kurs_zf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Präteritum von 'es fällt'?",
    "answers": [
     "es fallte",
     "es fällte",
     "es ist gefallen",
     "es fiel"
    ],
    "correct": 3,
    "explanation": "fiel.",
    "topic": "zeitformen"
   },
   {
    "id": "zfk5l1_test_7",
    "category": "kurs_zf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Womit bildet man Futur I?",
    "answers": [
     "haben + Partizip",
     "sein + Partizip",
     "-te",
     "werden + Grundform"
    ],
    "correct": 3,
    "explanation": "werden.",
    "topic": "zeitformen"
   },
   {
    "id": "zfk5l1_test_8",
    "category": "kurs_zf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Präteritum von 'wir sehen'?",
    "answers": [
     "wir sehten",
     "wir sahten",
     "wir sahen",
     "wir haben gesehen"
    ],
    "correct": 2,
    "explanation": "sahen.",
    "topic": "zeitformen"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "zf_k5_l2",
  "kurs": "zeitformen_k5",
  "order": 2,
  "icon": "🔗",
  "title": "Perfekt und Plusquamperfekt",
  "kurz": "haben/sein + Partizip II",
  "erklaerung": {
   "intro": "<b>Perfekt</b> (2. Vergangenheit, mündlich): <b>haben/sein</b> im Präsens + <b>Partizip II</b>: ich <b>habe gespielt</b>, ich <b>bin gelaufen</b>. <b>Plusquamperfekt</b> (Vorvergangenheit): <b>hatte/war</b> + Partizip II: ich <b>hatte gegessen</b>. Es zeigt, was <b>vor</b> einem anderen vergangenen Ereignis passiert ist: <i>Nachdem ich gegessen hatte, ging ich los.</i> Bewegung/Veränderung → meist <b>sein</b>.",
   "merksatz": "Perfekt: habe/bin + ge…t/en. Plusquamperfekt: hatte/war + ge…t/en.",
   "beispiele": [
    "Perfekt: Wir haben gelacht. / Sie ist gerannt.",
    "Plusquamperfekt: Wir hatten gelacht. / Sie war gerannt.",
    "Nachdem es geregnet hatte, schien die Sonne."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "zfk5l2u_leicht_1",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Zeitform? 'Ich habe gespielt.'",
     "answers": [
      "Präteritum",
      "Plusquamperfekt",
      "Perfekt",
      "Futur I"
     ],
     "correct": 2,
     "explanation": "habe + Partizip.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l2u_leicht_2",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Zeitform? 'Ich hatte gespielt.'",
     "answers": [
      "Perfekt",
      "Präteritum",
      "Präsens",
      "Plusquamperfekt"
     ],
     "correct": 3,
     "explanation": "hatte + Partizip.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l2u_leicht_3",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Perfekt von 'er lacht'?",
     "answers": [
      "er hat gelacht",
      "er lachte",
      "er hatte gelacht",
      "er wird lachen"
     ],
     "correct": 0,
     "explanation": "hat gelacht.",
     "topic": "zeitformen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😄</text></svg>"
    },
    {
     "id": "zfk5l2u_leicht_4",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Partizip II von 'machen'?",
     "answers": [
      "machte",
      "gemachen",
      "gemacht",
      "macht"
     ],
     "correct": 2,
     "explanation": "ge-mach-t.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l2u_leicht_5",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Perfekt von 'sie läuft'?",
     "answers": [
      "sie hat gelaufen",
      "sie lief",
      "sie ist gelaufen",
      "sie war gelaufen"
     ],
     "correct": 2,
     "explanation": "Bewegung → sein.",
     "topic": "zeitformen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏃</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "zfk5l2u_mittel_1",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Perfekt von 'wir fahren'?",
     "answers": [
      "wir haben gefahren",
      "wir fuhren",
      "wir waren gefahren",
      "wir sind gefahren"
     ],
     "correct": 3,
     "explanation": "Bewegung → sein.",
     "topic": "zeitformen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚗</text></svg>"
    },
    {
     "id": "zfk5l2u_mittel_2",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Plusquamperfekt von 'du isst'?",
     "answers": [
      "du hattest gegessen",
      "du hast gegessen",
      "du aßt",
      "du warst gegessen"
     ],
     "correct": 0,
     "explanation": "hattest + gegessen.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l2u_mittel_3",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Partizip II von 'schreiben'?",
     "answers": [
      "geschreibt",
      "schrieb",
      "geschrieben",
      "geschrieben hat"
     ],
     "correct": 2,
     "explanation": "unregelmäßig.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l2u_mittel_4",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wann benutzt man das Plusquamperfekt?",
     "answers": [
      "für die Zukunft",
      "für etwas, das vor einem anderen Vergangenen geschah",
      "für die Gegenwart",
      "nie"
     ],
     "correct": 1,
     "explanation": "Vorvergangenheit.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l2u_mittel_5",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Zeitform nutzt man beim Erzählen im Gespräch oft?",
     "answers": [
      "Plusquamperfekt",
      "Perfekt",
      "Futur I",
      "Präteritum immer"
     ],
     "correct": 1,
     "explanation": "Mündlich.",
     "topic": "zeitformen"
    }
   ],
   "schwer": [
    {
     "id": "zfk5l2u_schwer_1",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ergänze: 'Nachdem er die Hausaufgaben ___, spielte er.'",
     "answers": [
      "gemacht hat",
      "machte",
      "gemacht hatte",
      "machen wird"
     ],
     "correct": 2,
     "explanation": "Plusquamperfekt + Präteritum.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l2u_schwer_2",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Perfekt von 'es passiert'?",
     "answers": [
      "es hat passiert",
      "es ist passiert",
      "es passierte",
      "es hat gepassiert"
     ],
     "correct": 1,
     "explanation": "sein.",
     "topic": "zeitformen"
    },
    {
     "id": "zfk5l2u_schwer_3",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "Ich habe eingeschlafen.",
      "Ich bin eingeschlaft.",
      "Ich habe eingeschlafen gehabt.",
      "Ich bin eingeschlafen."
     ],
     "correct": 3,
     "explanation": "Veränderung → sein.",
     "topic": "zeitformen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😴</text></svg>"
    },
    {
     "id": "zfk5l2u_schwer_4",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Partizip II von 'telefonieren'?",
     "answers": [
      "telefoniert",
      "getelefoniert",
      "telefonierte",
      "getelefonieren"
     ],
     "correct": 0,
     "explanation": "-ieren ohne ge-.",
     "topic": "zeitformen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📞</text></svg>"
    },
    {
     "id": "zfk5l2u_schwer_5",
     "category": "kurs_zf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zeitform? 'Sie waren schon gegangen, als wir kamen.'",
     "answers": [
      "Perfekt",
      "Präteritum",
      "Plusquamperfekt",
      "Futur I"
     ],
     "correct": 2,
     "explanation": "waren gegangen.",
     "topic": "zeitformen"
    }
   ]
  },
  "test": [
   {
    "id": "zfk5l2_test_1",
    "category": "kurs_zf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zeitform? 'Wir haben gewonnen.'",
    "answers": [
     "Präteritum",
     "Perfekt",
     "Plusquamperfekt",
     "Futur I"
    ],
    "correct": 1,
    "explanation": "haben + Partizip.",
    "topic": "zeitformen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏆</text></svg>"
   },
   {
    "id": "zfk5l2_test_2",
    "category": "kurs_zf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zeitform? 'Sie war gekommen.'",
    "answers": [
     "Plusquamperfekt",
     "Perfekt",
     "Präteritum",
     "Präsens"
    ],
    "correct": 0,
    "explanation": "war + Partizip.",
    "topic": "zeitformen"
   },
   {
    "id": "zfk5l2_test_3",
    "category": "kurs_zf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Perfekt von 'ich trinke'?",
    "answers": [
     "ich bin getrunken",
     "ich habe getrunken",
     "ich trank",
     "ich hatte getrunken"
    ],
    "correct": 1,
    "explanation": "habe getrunken.",
    "topic": "zeitformen"
   },
   {
    "id": "zfk5l2_test_4",
    "category": "kurs_zf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Perfekt von 'er springt'?",
    "answers": [
     "er hat gesprungen",
     "er sprang",
     "er war gesprungen",
     "er ist gesprungen"
    ],
    "correct": 3,
    "explanation": "Bewegung → sein.",
    "topic": "zeitformen"
   },
   {
    "id": "zfk5l2_test_5",
    "category": "kurs_zf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Partizip II von 'lesen'?",
    "answers": [
     "gelest",
     "gelesen",
     "las",
     "geleset"
    ],
    "correct": 1,
    "explanation": "gelesen.",
    "topic": "zeitformen"
   },
   {
    "id": "zfk5l2_test_6",
    "category": "kurs_zf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wofür steht das Plusquamperfekt?",
    "answers": [
     "Zukunft",
     "Gegenwart",
     "Vorvergangenheit",
     "Befehl"
    ],
    "correct": 2,
    "explanation": "Vor der Vergangenheit.",
    "topic": "zeitformen"
   },
   {
    "id": "zfk5l2_test_7",
    "category": "kurs_zf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ergänze: 'Als wir ankamen, ___ der Film schon ___.'",
    "answers": [
     "hatte … begonnen",
     "hat … begonnen",
     "wird … beginnen",
     "begann … gehabt"
    ],
    "correct": 0,
    "explanation": "Plusquamperfekt.",
    "topic": "zeitformen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎬</text></svg>"
   },
   {
    "id": "zfk5l2_test_8",
    "category": "kurs_zf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Partizip II von 'studieren'?",
    "answers": [
     "studiert",
     "gestudiert",
     "studierte",
     "gestudieren"
    ],
    "correct": 0,
    "explanation": "-ieren ohne ge-.",
    "topic": "zeitformen"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "ez_k5_l1",
  "kurs": "erzaehlen_k5",
  "order": 1,
  "icon": "📖",
  "title": "Aufbau einer Erzählung",
  "kurz": "Einleitung, Hauptteil mit Höhepunkt, Schluss",
  "erklaerung": {
   "intro": "Eine Erzählung hat drei Teile: <b>Einleitung</b> (Wer? Wo? Wann? – kurz!), <b>Hauptteil</b> mit <b>Spannungsbogen</b> bis zum <b>Höhepunkt</b> (ausführlich!) und <b>Schluss</b> (Auflösung, kurz). Erzählt wird im <b>Präteritum</b>. Die <b>Überschrift</b> macht neugierig, verrät aber nicht das Ende. Ein <b>roter Faden</b> hält alles zusammen.",
   "merksatz": "Kurz anfangen – Spannung steigern – Höhepunkt – kurz auflösen.",
   "beispiele": [
    "Einleitung: Am letzten Ferientag ging ich mit Max in den Wald.",
    "Höhepunkt: Plötzlich knackte es hinter uns …",
    "Schluss: Erleichtert lachten wir – es war nur ein Reh."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "ezk5l1u_leicht_1",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was gehört in die Einleitung?",
     "answers": [
      "der Höhepunkt",
      "Wer? Wo? Wann?",
      "die Auflösung",
      "die Lehre"
     ],
     "correct": 1,
     "explanation": "Grundinfos.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l1u_leicht_2",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Teil ist am ausführlichsten?",
     "answers": [
      "die Einleitung",
      "der Schluss",
      "der Hauptteil",
      "die Überschrift"
     ],
     "correct": 2,
     "explanation": "Hauptteil.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l1u_leicht_3",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wo liegt der Höhepunkt?",
     "answers": [
      "in der Einleitung",
      "im Hauptteil",
      "im Schluss",
      "in der Überschrift"
     ],
     "correct": 1,
     "explanation": "Hauptteil.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l1u_leicht_4",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "In welcher Zeitform erzählt man meist?",
     "answers": [
      "Präsens",
      "Futur I",
      "Präteritum",
      "Plusquamperfekt"
     ],
     "correct": 2,
     "explanation": "Präteritum.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l1u_leicht_5",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was macht eine gute Überschrift?",
     "answers": [
      "Sie verrät das Ende.",
      "Sie ist sehr lang.",
      "Sie macht neugierig.",
      "Sie fehlt."
     ],
     "correct": 2,
     "explanation": "Neugierig.",
     "topic": "erzaehlen"
    }
   ],
   "mittel": [
    {
     "id": "ezk5l1u_mittel_1",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist ein Spannungsbogen?",
     "answers": [
      "die Spannung steigt bis zum Höhepunkt und fällt dann",
      "eine Zeichnung",
      "ein Gedicht",
      "die Überschrift"
     ],
     "correct": 0,
     "explanation": "Bogen.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l1u_mittel_2",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was gehört in den Schluss?",
     "answers": [
      "neue Figuren",
      "eine lange Beschreibung",
      "die Auflösung, kurz",
      "der Höhepunkt"
     ],
     "correct": 2,
     "explanation": "Auflösung.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l1u_mittel_3",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Einleitung ist am besten?",
     "answers": [
      "An einem stürmischen Abend saß ich allein zu Hause.",
      "Es war einmal ein Mann, und dann passierte ganz viel Spannendes und am Ende war alles gut.",
      "Hallo, ich erzähle jetzt.",
      "Ende."
     ],
     "correct": 0,
     "explanation": "Kurz, Wer/Wo/Wann.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l1u_mittel_4",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist ein roter Faden?",
     "answers": [
      "eine Schnur",
      "die Überschrift",
      "eine Figur",
      "ein zusammenhängender Handlungsverlauf"
     ],
     "correct": 3,
     "explanation": "Zusammenhang.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l1u_mittel_5",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was sollte im Schluss NICHT stehen?",
     "answers": [
      "wie es ausging",
      "ein neuer spannender Handlungsstrang",
      "Gefühle am Ende",
      "ein kurzer Ausblick"
     ],
     "correct": 1,
     "explanation": "Keine neue Handlung.",
     "topic": "erzaehlen"
    }
   ],
   "schwer": [
    {
     "id": "ezk5l1u_schwer_1",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum verrät man das Ende nicht in der Überschrift?",
     "answers": [
      "damit die Spannung erhalten bleibt",
      "weil es verboten ist",
      "weil es zu kurz ist",
      "zufällig"
     ],
     "correct": 0,
     "explanation": "Spannung.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l1u_schwer_2",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist eine Pointe?",
     "answers": [
      "die Einleitung",
      "eine Figur",
      "eine überraschende Wendung am Ende",
      "ein Reim"
     ],
     "correct": 2,
     "explanation": "Überraschung.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l1u_schwer_3",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zeitform verwendet man für Vorgeschichte im Präteritum-Text?",
     "answers": [
      "Futur I",
      "Präsens",
      "Plusquamperfekt",
      "Perfekt"
     ],
     "correct": 2,
     "explanation": "Vorvergangenheit.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l1u_schwer_4",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was hilft, die Handlung zu planen?",
     "answers": [
      "sofort losschreiben",
      "ein Erzählplan mit Stichpunkten",
      "nur die Überschrift",
      "Abschreiben"
     ],
     "correct": 1,
     "explanation": "Planen.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l1u_schwer_5",
     "category": "kurs_ez_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie verlangsamt man die Handlung am Höhepunkt?",
     "answers": [
      "durch einen schnellen Satz",
      "durch genaue Beschreibung von Gedanken und Gefühlen",
      "durch Weglassen",
      "durch das Ende"
     ],
     "correct": 1,
     "explanation": "Zeitlupe.",
     "topic": "erzaehlen"
    }
   ]
  },
  "test": [
   {
    "id": "ezk5l1_test_1",
    "category": "kurs_ez_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was gehört in die Einleitung?",
    "answers": [
     "Höhepunkt",
     "Auflösung",
     "Wer, wo, wann",
     "Lehre"
    ],
    "correct": 2,
    "explanation": "Grundinfos.",
    "topic": "erzaehlen"
   },
   {
    "id": "ezk5l1_test_2",
    "category": "kurs_ez_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wo ist der Höhepunkt?",
    "answers": [
     "Einleitung",
     "Schluss",
     "Überschrift",
     "im Hauptteil"
    ],
    "correct": 3,
    "explanation": "Hauptteil.",
    "topic": "erzaehlen"
   },
   {
    "id": "ezk5l1_test_3",
    "category": "kurs_ez_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was steht im Schluss?",
    "answers": [
     "der Höhepunkt",
     "neue Figuren",
     "die Auflösung",
     "die Einleitung"
    ],
    "correct": 2,
    "explanation": "Auflösung.",
    "topic": "erzaehlen"
   },
   {
    "id": "ezk5l1_test_4",
    "category": "kurs_ez_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Zeitform einer Erzählung?",
    "answers": [
     "Futur I",
     "Präsens",
     "Präteritum",
     "Befehl"
    ],
    "correct": 2,
    "explanation": "Präteritum.",
    "topic": "erzaehlen"
   },
   {
    "id": "ezk5l1_test_5",
    "category": "kurs_ez_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was macht die Überschrift?",
    "answers": [
     "alles verraten",
     "das Ende nennen",
     "neugierig machen",
     "nichts"
    ],
    "correct": 2,
    "explanation": "Neugierig.",
    "topic": "erzaehlen"
   },
   {
    "id": "ezk5l1_test_6",
    "category": "kurs_ez_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Teil ist am längsten?",
    "answers": [
     "Hauptteil",
     "Einleitung",
     "Schluss",
     "Überschrift"
    ],
    "correct": 0,
    "explanation": "Hauptteil.",
    "topic": "erzaehlen"
   },
   {
    "id": "ezk5l1_test_7",
    "category": "kurs_ez_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist ein Spannungsbogen?",
    "answers": [
     "Spannung steigt zum Höhepunkt",
     "ein Bild",
     "ein Reim",
     "eine Figur"
    ],
    "correct": 0,
    "explanation": "Bogen.",
    "topic": "erzaehlen"
   },
   {
    "id": "ezk5l1_test_8",
    "category": "kurs_ez_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist eine Pointe?",
    "answers": [
     "eine überraschende Wendung",
     "die Einleitung",
     "der Titel",
     "der Autor"
    ],
    "correct": 0,
    "explanation": "Überraschung.",
    "topic": "erzaehlen"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "ez_k5_l2",
  "kurs": "erzaehlen_k5",
  "order": 2,
  "icon": "🎢",
  "title": "Spannung erzeugen",
  "kurz": "Mittel der Spannung, Erzählperspektive",
  "erklaerung": {
   "intro": "Spannung erzeugst du durch: <b>Gedanken und Gefühle</b> (Mein Herz klopfte), <b>wörtliche Rede</b>, <b>treffende Verben und Adjektive</b> (schleichen, unheimlich), <b>spannende Satzanfänge</b> (Plötzlich, Auf einmal), <b>kurze Sätze</b> am Höhepunkt und <b>Andeutungen</b>. Erzählperspektive: <b>Ich-Erzähler</b> (ich sah …) oder <b>Er-/Sie-Erzähler</b> (sie sah …) – nicht wechseln!",
   "merksatz": "Gefühle, Rede, starke Wörter, kurze Sätze – und eine Perspektive beibehalten.",
   "beispiele": [
    "Gefühl: Mir lief ein Schauer über den Rücken.",
    "Kurze Sätze: Stille. Ein Knacken. Dann ein Schrei.",
    "Ich-Erzähler: Ich öffnete langsam die Tür."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "ezk5l2u_leicht_1",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Satzanfang erzeugt Spannung?",
     "answers": [
      "Dann",
      "Und dann",
      "Plötzlich",
      "Danach dann"
     ],
     "correct": 2,
     "explanation": "Überraschung.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l2u_leicht_2",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Satz zeigt ein Gefühl?",
     "answers": [
      "Mein Herz raste vor Angst.",
      "Ich ging nach Hause.",
      "Das Haus war groß.",
      "Es war Dienstag."
     ],
     "correct": 0,
     "explanation": "Gefühl.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l2u_leicht_3",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Verb ist spannender als 'gehen'?",
     "answers": [
      "machen",
      "sein",
      "haben",
      "schleichen"
     ],
     "correct": 3,
     "explanation": "Treffend.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l2u_leicht_4",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Adjektiv passt zu einer Gruselgeschichte?",
     "answers": [
      "fröhlich",
      "bunt",
      "unheimlich",
      "lecker"
     ],
     "correct": 2,
     "explanation": "Stimmung.",
     "topic": "erzaehlen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👻</text></svg>"
    },
    {
     "id": "ezk5l2u_leicht_5",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist ein Ich-Erzähler?",
     "answers": [
      "Der Erzähler erzählt aus seiner eigenen Sicht: 'ich'.",
      "Er erzählt über andere mit 'er'.",
      "Er erzählt nie.",
      "Er ist der Leser."
     ],
     "correct": 0,
     "explanation": "Ich-Form.",
     "topic": "erzaehlen"
    }
   ],
   "mittel": [
    {
     "id": "ezk5l2u_mittel_1",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum nutzt man am Höhepunkt kurze Sätze?",
     "answers": [
      "Weil man müde wird.",
      "Weil lange Sätze verboten sind.",
      "Zufällig.",
      "Sie erhöhen das Tempo und die Spannung."
     ],
     "correct": 3,
     "explanation": "Tempo.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l2u_mittel_2",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz verwendet wörtliche Rede?",
     "answers": [
      "„Wer ist da?“, flüsterte ich.",
      "Ich fragte, wer da sei.",
      "Jemand war da.",
      "Es war dunkel."
     ],
     "correct": 0,
     "explanation": "Anführungszeichen.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l2u_mittel_3",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist eine Andeutung?",
     "answers": [
      "das Ende",
      "die Überschrift",
      "ein Hinweis, der neugierig macht, ohne alles zu verraten",
      "eine Lüge"
     ],
     "correct": 2,
     "explanation": "Hinweis.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l2u_mittel_4",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Fehler stört die Erzählung?",
     "answers": [
      "Gefühle",
      "wörtliche Rede",
      "spannende Verben",
      "Wechsel zwischen Ich- und Er-Erzähler"
     ],
     "correct": 3,
     "explanation": "Perspektive halten.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l2u_mittel_5",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Sinneswahrnehmung baut Spannung auf?",
     "answers": [
      "Ich hatte Hunger.",
      "Ich war 10.",
      "Ein modriger Geruch stieg mir in die Nase.",
      "Die Wand war weiß."
     ],
     "correct": 2,
     "explanation": "Sinne.",
     "topic": "erzaehlen"
    }
   ],
   "schwer": [
    {
     "id": "ezk5l2u_schwer_1",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist der Er-/Sie-Erzähler?",
     "answers": [
      "Er sagt 'ich'.",
      "Er ist der Autor.",
      "Er erzählt von außen über eine Figur.",
      "Er redet nur in Dialogen."
     ],
     "correct": 2,
     "explanation": "Er/Sie-Form.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l2u_schwer_2",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Methode verlangsamt die Zeit am Höhepunkt?",
     "answers": [
      "Zeitdehnung (Gedanken, Details)",
      "Zeitraffer",
      "Weglassen",
      "Zusammenfassen"
     ],
     "correct": 0,
     "explanation": "Zeitlupe.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l2u_schwer_3",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein Cliffhanger?",
     "answers": [
      "der Schluss mit Auflösung",
      "die Einleitung",
      "ein Abbruch an der spannendsten Stelle",
      "der Titel"
     ],
     "correct": 2,
     "explanation": "Spannungsabbruch.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l2u_schwer_4",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist am spannendsten?",
     "answers": [
      "Jemand berührte mich.",
      "Da war eine Hand.",
      "Ich spürte etwas.",
      "Eine eiskalte Hand legte sich auf meine Schulter."
     ],
     "correct": 3,
     "explanation": "Treffende Wörter.",
     "topic": "erzaehlen"
    },
    {
     "id": "ezk5l2u_schwer_5",
     "category": "kurs_ez_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist Zeitraffung?",
     "answers": [
      "Zeit wird gedehnt",
      "lange Zeit wird kurz zusammengefasst",
      "Zeit bleibt stehen",
      "Zukunft"
     ],
     "correct": 1,
     "explanation": "Zusammenfassen.",
     "topic": "erzaehlen"
    }
   ]
  },
  "test": [
   {
    "id": "ezk5l2_test_1",
    "category": "kurs_ez_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satzanfang ist spannend?",
    "answers": [
     "Auf einmal",
     "Dann",
     "Und",
     "Danach"
    ],
    "correct": 0,
    "explanation": "Überraschung.",
    "topic": "erzaehlen"
   },
   {
    "id": "ezk5l2_test_2",
    "category": "kurs_ez_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz zeigt ein Gefühl?",
    "answers": [
     "Ich lief los.",
     "Der Baum war hoch.",
     "Mir zitterten die Knie.",
     "Es war Montag."
    ],
    "correct": 2,
    "explanation": "Gefühl.",
    "topic": "erzaehlen"
   },
   {
    "id": "ezk5l2_test_3",
    "category": "kurs_ez_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist ein Ich-Erzähler?",
    "answers": [
     "erzählt mit 'er'",
     "ist der Leser",
     "erzählt mit 'ich'",
     "ist ein Gedicht"
    ],
    "correct": 2,
    "explanation": "Ich.",
    "topic": "erzaehlen"
   },
   {
    "id": "ezk5l2_test_4",
    "category": "kurs_ez_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum kurze Sätze am Höhepunkt?",
    "answers": [
     "weniger Spannung",
     "mehr Tempo und Spannung",
     "Langeweile",
     "Pflicht"
    ],
    "correct": 1,
    "explanation": "Tempo.",
    "topic": "erzaehlen"
   },
   {
    "id": "ezk5l2_test_5",
    "category": "kurs_ez_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Verb ist am spannendsten?",
    "answers": [
     "gehen",
     "machen",
     "huschen",
     "sein"
    ],
    "correct": 2,
    "explanation": "Treffend.",
    "topic": "erzaehlen"
   },
   {
    "id": "ezk5l2_test_6",
    "category": "kurs_ez_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was darf man nicht wechseln?",
    "answers": [
     "die Satzanfänge",
     "die Erzählperspektive",
     "die Verben",
     "die Adjektive"
    ],
    "correct": 1,
    "explanation": "Perspektive.",
    "topic": "erzaehlen"
   },
   {
    "id": "ezk5l2_test_7",
    "category": "kurs_ez_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist ein Cliffhanger?",
    "answers": [
     "Abbruch an der spannendsten Stelle",
     "Auflösung",
     "Titel",
     "Einleitung"
    ],
    "correct": 0,
    "explanation": "Abbruch.",
    "topic": "erzaehlen"
   },
   {
    "id": "ezk5l2_test_8",
    "category": "kurs_ez_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist Zeitdehnung?",
    "answers": [
     "Handlung wird verkürzt",
     "Zukunft",
     "Überschrift",
     "Gedanken und Details verlangsamen die Handlung"
    ],
    "correct": 3,
    "explanation": "Zeitlupe.",
    "topic": "erzaehlen"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "gd_k5_l1",
  "kurs": "gedichte_k5",
  "order": 1,
  "icon": "🎭",
  "title": "Vers, Strophe, Reim",
  "kurz": "Aufbau eines Gedichts",
  "erklaerung": {
   "intro": "Eine Zeile im Gedicht heißt <b>Vers</b>. Mehrere Verse bilden eine <b>Strophe</b>. Klingen Wörter am Versende gleich, ist das ein <b>Reim</b>. Das <b>Reimschema</b> beschreibt man mit Buchstaben: <b>Paarreim (aabb)</b>, <b>Kreuzreim (abab)</b>, <b>umarmender Reim (abba)</b>. Das lyrische Ich ist die Stimme, die im Gedicht spricht.",
   "merksatz": "Vers = Zeile, Strophe = Abschnitt. aabb Paar, abab Kreuz, abba umarmend.",
   "beispiele": [
    "<b>Der Herbst</b><br>Die Blätter fallen sacht vom Baum, (a)<br>der Wind, er singt ein leises Lied, (b)<br>der Sommer war ein schöner Traum, (a)<br>der jetzt ganz still nach Süden zieht. (b)",
    "Baum – Traum (a), Lied – zieht (b) → Kreuzreim abab",
    "Haus – Maus – Sonne – Wonne → Paarreim aabb"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "gdk5l1u_leicht_1",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie heißt eine Zeile im Gedicht?",
     "answers": [
      "Strophe",
      "Reim",
      "Vers",
      "Satz"
     ],
     "correct": 2,
     "explanation": "Vers.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l1u_leicht_2",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie heißen mehrere Verse zusammen?",
     "answers": [
      "Vers",
      "Reim",
      "Kapitel",
      "Strophe"
     ],
     "correct": 3,
     "explanation": "Strophe.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l1u_leicht_3",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was reimt sich auf 'Haus'?",
     "answers": [
      "Hase",
      "Hose",
      "Hut",
      "Maus"
     ],
     "correct": 3,
     "explanation": "-aus.",
     "topic": "gedichte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐭</text></svg>"
    },
    {
     "id": "gdk5l1u_leicht_4",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Reimschema ist 'aabb'?",
     "answers": [
      "Paarreim",
      "Kreuzreim",
      "umarmender Reim",
      "kein Reim"
     ],
     "correct": 0,
     "explanation": "Paarreim.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l1u_leicht_5",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Reimschema ist 'abab'?",
     "answers": [
      "Paarreim",
      "umarmender Reim",
      "Schweifreim",
      "Kreuzreim"
     ],
     "correct": 3,
     "explanation": "Kreuzreim.",
     "topic": "gedichte"
    }
   ],
   "mittel": [
    {
     "id": "gdk5l1u_mittel_1",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Reimschema hat das Gedicht 'Der Herbst'?",
     "answers": [
      "Paarreim (aabb)",
      "Kreuzreim (abab)",
      "umarmender Reim (abba)",
      "kein Reim"
     ],
     "correct": 1,
     "explanation": "Baum/Traum, Lied/zieht.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l1u_mittel_2",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Reimschema ist 'abba'?",
     "answers": [
      "umarmender Reim",
      "Kreuzreim",
      "Paarreim",
      "Haufenreim"
     ],
     "correct": 0,
     "explanation": "Umarmend.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l1u_mittel_3",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was reimt sich auf 'Wind'?",
     "answers": [
      "Wand",
      "Wunde",
      "Winter",
      "Kind"
     ],
     "correct": 3,
     "explanation": "-ind.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l1u_mittel_4",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Verse hat das Gedicht 'Der Herbst'?",
     "answers": [
      "4",
      "2",
      "3",
      "8"
     ],
     "correct": 0,
     "explanation": "Vier Zeilen.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l1u_mittel_5",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wer spricht in einem Gedicht?",
     "answers": [
      "immer der Dichter selbst",
      "der Leser",
      "niemand",
      "das lyrische Ich"
     ],
     "correct": 3,
     "explanation": "Lyrisches Ich.",
     "topic": "gedichte"
    }
   ],
   "schwer": [
    {
     "id": "gdk5l1u_schwer_1",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Reimschema: Sonne – Tag – Wonne – mag?",
     "answers": [
      "abab",
      "aabb",
      "abba",
      "abcd"
     ],
     "correct": 0,
     "explanation": "Kreuzreim.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l1u_schwer_2",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Reimschema: Licht – Baum – Traum – nicht?",
     "answers": [
      "abab",
      "aabb",
      "abba",
      "abcd"
     ],
     "correct": 2,
     "explanation": "Umarmend.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l1u_schwer_3",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein unreiner Reim?",
     "answers": [
      "gar kein Reim",
      "ein schmutziges Wort",
      "Wörter, die nur ähnlich klingen, z. B. 'Tür – Tier'",
      "ein Kreuzreim"
     ],
     "correct": 2,
     "explanation": "Ähnlicher Klang.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l1u_schwer_4",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Strophen hat ein Gedicht mit 12 Versen zu je 4 Versen pro Strophe?",
     "answers": [
      "4",
      "12",
      "3",
      "2"
     ],
     "correct": 2,
     "explanation": "12 : 4.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l1u_schwer_5",
     "category": "kurs_gd_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein Refrain?",
     "answers": [
      "die erste Zeile",
      "ein Reimschema",
      "eine Strophe oder Zeile, die sich wiederholt",
      "der Titel"
     ],
     "correct": 2,
     "explanation": "Wiederholung.",
     "topic": "gedichte"
    }
   ]
  },
  "test": [
   {
    "id": "gdk5l1_test_1",
    "category": "kurs_gd_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Eine Zeile im Gedicht heißt …",
    "answers": [
     "Strophe",
     "Absatz",
     "Reim",
     "Vers"
    ],
    "correct": 3,
    "explanation": "Vers.",
    "topic": "gedichte"
   },
   {
    "id": "gdk5l1_test_2",
    "category": "kurs_gd_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Mehrere Verse bilden eine …",
    "answers": [
     "Zeile",
     "Reim",
     "Strophe",
     "Satz"
    ],
    "correct": 2,
    "explanation": "Strophe.",
    "topic": "gedichte"
   },
   {
    "id": "gdk5l1_test_3",
    "category": "kurs_gd_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "aabb heißt …",
    "answers": [
     "Kreuzreim",
     "umarmender Reim",
     "Schweifreim",
     "Paarreim"
    ],
    "correct": 3,
    "explanation": "Paarreim.",
    "topic": "gedichte"
   },
   {
    "id": "gdk5l1_test_4",
    "category": "kurs_gd_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "abab heißt …",
    "answers": [
     "Kreuzreim",
     "Paarreim",
     "umarmender Reim",
     "Haufenreim"
    ],
    "correct": 0,
    "explanation": "Kreuzreim.",
    "topic": "gedichte"
   },
   {
    "id": "gdk5l1_test_5",
    "category": "kurs_gd_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "abba heißt …",
    "answers": [
     "Kreuzreim",
     "Paarreim",
     "umarmender Reim",
     "kein Reim"
    ],
    "correct": 2,
    "explanation": "Umarmend.",
    "topic": "gedichte"
   },
   {
    "id": "gdk5l1_test_6",
    "category": "kurs_gd_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was reimt sich auf 'Nacht'?",
    "answers": [
     "Nase",
     "Nest",
     "lacht",
     "nackt"
    ],
    "correct": 2,
    "explanation": "-acht.",
    "topic": "gedichte",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌙</text></svg>"
   },
   {
    "id": "gdk5l1_test_7",
    "category": "kurs_gd_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wer spricht im Gedicht?",
    "answers": [
     "das lyrische Ich",
     "der Leser",
     "der Verlag",
     "niemand"
    ],
    "correct": 0,
    "explanation": "Lyrisches Ich.",
    "topic": "gedichte"
   },
   {
    "id": "gdk5l1_test_8",
    "category": "kurs_gd_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Reimschema: Hund – Mund – See – Fee?",
    "answers": [
     "aabb",
     "abab",
     "abba",
     "abcd"
    ],
    "correct": 0,
    "explanation": "Paarreim.",
    "topic": "gedichte"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "gd_k5_l2",
  "kurs": "gedichte_k5",
  "order": 2,
  "icon": "🌈",
  "title": "Sprachliche Bilder",
  "kurz": "Vergleich, Personifikation, Metapher",
  "erklaerung": {
   "intro": "Gedichte arbeiten mit <b>sprachlichen Bildern</b>: <b>Vergleich</b> mit „wie“ oder „als ob“ (<i>Augen wie Sterne</i>), <b>Personifikation</b> – Dinge handeln wie Menschen (<i>der Wind singt</i>), <b>Metapher</b> – ein Bild ohne „wie“ (<i>Lebensabend</i>, <i>das Meer aus Blumen</i>). Auch <b>Wiederholungen</b> und <b>lautmalerische Wörter</b> (<i>zischen, plätschern</i>) machen Gedichte lebendig.",
   "merksatz": "Vergleich mit 'wie', Personifikation: Ding wird Mensch, Metapher: Bild ohne 'wie'.",
   "beispiele": [
    "Vergleich: Sie ist schnell wie der Wind.",
    "Personifikation: Die Sonne lacht.",
    "Metapher: Er hat ein Herz aus Stein."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "gdk5l2u_leicht_1",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist 'schnell wie der Wind'?",
     "answers": [
      "eine Personifikation",
      "eine Metapher",
      "ein Vergleich",
      "ein Reim"
     ],
     "correct": 2,
     "explanation": "mit 'wie'.",
     "topic": "gedichte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌬️</text></svg>"
    },
    {
     "id": "gdk5l2u_leicht_2",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist 'Die Sonne lacht'?",
     "answers": [
      "ein Vergleich",
      "ein Reim",
      "eine Strophe",
      "eine Personifikation"
     ],
     "correct": 3,
     "explanation": "Sonne handelt wie ein Mensch.",
     "topic": "gedichte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
    },
    {
     "id": "gdk5l2u_leicht_3",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist 'ein Herz aus Stein'?",
     "answers": [
      "ein Vergleich",
      "eine Personifikation",
      "ein Paarreim",
      "eine Metapher"
     ],
     "correct": 3,
     "explanation": "Bild ohne 'wie'.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l2u_leicht_4",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Woran erkennst du einen Vergleich?",
     "answers": [
      "an 'wie' oder 'als ob'",
      "an Großschreibung",
      "am Reim",
      "an der Strophe"
     ],
     "correct": 0,
     "explanation": "wie.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l2u_leicht_5",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort ist lautmalerisch?",
     "answers": [
      "Tisch",
      "plätschern",
      "rot",
      "laufen"
     ],
     "correct": 1,
     "explanation": "Klingt wie das Geräusch.",
     "topic": "gedichte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💧</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "gdk5l2u_mittel_1",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist 'Der Wind flüstert in den Bäumen'?",
     "answers": [
      "Vergleich",
      "Metapher",
      "Reim",
      "Personifikation"
     ],
     "correct": 3,
     "explanation": "Wind flüstert.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l2u_mittel_2",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist 'Augen wie Sterne'?",
     "answers": [
      "Vergleich",
      "Personifikation",
      "Metapher",
      "Refrain"
     ],
     "correct": 0,
     "explanation": "wie.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l2u_mittel_3",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist 'ein Meer aus Blumen'?",
     "answers": [
      "Metapher",
      "Vergleich",
      "Personifikation",
      "Kreuzreim"
     ],
     "correct": 0,
     "explanation": "Bild ohne wie.",
     "topic": "gedichte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌸</text></svg>"
    },
    {
     "id": "gdk5l2u_mittel_4",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was bewirken sprachliche Bilder?",
     "answers": [
      "Sie machen Texte anschaulich.",
      "Sie machen Texte kürzer.",
      "Sie sind Fehler.",
      "Sie ersetzen Reime."
     ],
     "correct": 0,
     "explanation": "Anschaulich.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l2u_mittel_5",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort ist lautmalerisch?",
     "answers": [
      "Haus",
      "zischen",
      "grün",
      "denken"
     ],
     "correct": 1,
     "explanation": "Geräusch.",
     "topic": "gedichte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐍</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "gdk5l2u_schwer_1",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist 'Die Zeit rennt'?",
     "answers": [
      "Personifikation",
      "Vergleich",
      "Metapher-Reim",
      "Paarreim"
     ],
     "correct": 0,
     "explanation": "Zeit rennt wie ein Mensch.",
     "topic": "gedichte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⏰</text></svg>"
    },
    {
     "id": "gdk5l2u_schwer_2",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist 'Er kämpfte wie ein Löwe'?",
     "answers": [
      "Metapher",
      "Personifikation",
      "Vergleich",
      "Refrain"
     ],
     "correct": 2,
     "explanation": "wie.",
     "topic": "gedichte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦁</text></svg>"
    },
    {
     "id": "gdk5l2u_schwer_3",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist 'Lebensabend'?",
     "answers": [
      "Vergleich",
      "Personifikation",
      "eine Uhrzeit",
      "Metapher für das Alter"
     ],
     "correct": 3,
     "explanation": "Bild.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l2u_schwer_4",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist eine Wiederholung als Stilmittel?",
     "answers": [
      "ein Fehler",
      "ein Reim",
      "ein Vergleich",
      "Ein Wort oder Vers kommt mehrmals vor, um es zu betonen."
     ],
     "correct": 3,
     "explanation": "Betonung.",
     "topic": "gedichte"
    },
    {
     "id": "gdk5l2u_schwer_5",
     "category": "kurs_gd_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Aussage stimmt?",
     "answers": [
      "Eine Metapher braucht immer 'wie'.",
      "Eine Personifikation ist ein Reim.",
      "Vergleiche gibt es nur in Prosa.",
      "Eine Metapher ist ein verkürzter Vergleich ohne 'wie'."
     ],
     "correct": 3,
     "explanation": "Verkürzter Vergleich.",
     "topic": "gedichte"
    }
   ]
  },
  "test": [
   {
    "id": "gdk5l2_test_1",
    "category": "kurs_gd_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'groß wie ein Riese' ist …",
    "answers": [
     "eine Metapher",
     "ein Vergleich",
     "eine Personifikation",
     "ein Reim"
    ],
    "correct": 1,
    "explanation": "wie.",
    "topic": "gedichte"
   },
   {
    "id": "gdk5l2_test_2",
    "category": "kurs_gd_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'Der Mond schaut zu' ist …",
    "answers": [
     "eine Personifikation",
     "ein Vergleich",
     "eine Metapher",
     "ein Vers"
    ],
    "correct": 0,
    "explanation": "Mond schaut.",
    "topic": "gedichte",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌙</text></svg>"
   },
   {
    "id": "gdk5l2_test_3",
    "category": "kurs_gd_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'Herz aus Gold' ist …",
    "answers": [
     "eine Metapher",
     "ein Vergleich",
     "eine Personifikation",
     "ein Paarreim"
    ],
    "correct": 0,
    "explanation": "Bild.",
    "topic": "gedichte"
   },
   {
    "id": "gdk5l2_test_4",
    "category": "kurs_gd_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Woran erkennt man einen Vergleich?",
    "answers": [
     "Großbuchstaben",
     "Reime",
     "'wie' oder 'als ob'",
     "Strophen"
    ],
    "correct": 2,
    "explanation": "wie.",
    "topic": "gedichte"
   },
   {
    "id": "gdk5l2_test_5",
    "category": "kurs_gd_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort ist lautmalerisch?",
    "answers": [
     "Stuhl",
     "blau",
     "summen",
     "glauben"
    ],
    "correct": 2,
    "explanation": "Klang.",
    "topic": "gedichte",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐝</text></svg>"
   },
   {
    "id": "gdk5l2_test_6",
    "category": "kurs_gd_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "'Der Regen tanzt auf dem Dach' ist …",
    "answers": [
     "Personifikation",
     "Vergleich",
     "Metapher",
     "Reim"
    ],
    "correct": 0,
    "explanation": "tanzt.",
    "topic": "gedichte",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌧️</text></svg>"
   },
   {
    "id": "gdk5l2_test_7",
    "category": "kurs_gd_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was bewirken sprachliche Bilder?",
    "answers": [
     "Langeweile",
     "Kürze",
     "Anschaulichkeit",
     "Fehler"
    ],
    "correct": 2,
    "explanation": "Anschaulich.",
    "topic": "gedichte"
   },
   {
    "id": "gdk5l2_test_8",
    "category": "kurs_gd_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist eine Metapher?",
    "answers": [
     "ein Bild mit 'wie'",
     "ein Bild ohne 'wie'",
     "ein Reim",
     "eine Zeile"
    ],
    "correct": 1,
    "explanation": "Ohne wie.",
    "topic": "gedichte"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
