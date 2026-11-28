// Neue Deutschkurse: K2 zusammengesetzte Nomen, K3 wörtliche Rede, K4 Bericht (28.11.2026)
(function () {
    const extraKurse = [{"id": "nomen_zus_k2", "title": "Zusammengesetzte Nomen", "icon": "🧩", "grade": 2, "subject": "deutsch", "beschreibung": "Aus zwei Wörtern wird eins – mit dem richtigen Artikel."}, {"id": "woertliche_rede_k3", "title": "Wörtliche Rede", "icon": "💬", "grade": 3, "subject": "deutsch", "beschreibung": "Redezeichen, Begleitsatz und die richtigen Satzzeichen."}, {"id": "bericht_k4", "title": "Einen Bericht schreiben", "icon": "📰", "grade": 4, "subject": "deutsch", "beschreibung": "W-Fragen, sachlich bleiben, richtige Reihenfolge und Zeitform."}];
    const extraLektionen = [
 {
  "id": "nz_k2_l1",
  "kurs": "nomen_zus_k2",
  "order": 1,
  "icon": "🧩",
  "title": "Wörter zusammensetzen",
  "kurz": "Aus zwei Nomen wird eins",
  "erklaerung": {
   "intro": "Aus zwei Wörtern kann man ein neues <b>zusammengesetztes Nomen</b> bauen: <b>Haus + Tür = Haustür</b>, <b>Schnee + Mann = Schneemann</b>. Das neue Wort schreibt man <b>zusammen</b> und <b>groß</b>. Auch Verben oder Adjektive können vorne stehen: <b>Spiel + Platz = Spielplatz</b>, <b>rot + Kohl = Rotkohl</b>.",
   "merksatz": "Zwei Wörter – ein neues Nomen – zusammen und groß.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⛄</text></svg>Schnee + Mann = Schneemann",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚪</text></svg>Haus + Tür = Haustür",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛝</text></svg>spielen + Platz = Spielplatz"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "nzk2l1u_leicht_1",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Schnee + Mann =",
     "answers": [
      "Schnee Mann",
      "schneemann",
      "Mannschnee",
      "Schneemann"
     ],
     "correct": 3,
     "explanation": "Zusammen und groß.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⛄</text></svg>"
    },
    {
     "id": "nzk2l1u_leicht_2",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Haus + Tür =",
     "answers": [
      "Haus-tür",
      "haustür",
      "Türhaus",
      "Haustür"
     ],
     "correct": 3,
     "explanation": "Zusammen und groß.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚪</text></svg>"
    },
    {
     "id": "nzk2l1u_leicht_3",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Sonne + Blume =",
     "answers": [
      "Sonnenblume",
      "Sonneblume",
      "Blumensonne",
      "Sonnen Blume"
     ],
     "correct": 0,
     "explanation": "Mit Fugen-n.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌻</text></svg>"
    },
    {
     "id": "nzk2l1u_leicht_4",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort ist zusammengesetzt?",
     "answers": [
      "Fußball",
      "Ball",
      "Fuß",
      "laufen"
     ],
     "correct": 0,
     "explanation": "Fuß + Ball.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
    },
    {
     "id": "nzk2l1u_leicht_5",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Apfel + Baum =",
     "answers": [
      "Apfelbaum",
      "Baumapfel",
      "Apfel Baum",
      "apfelbaum"
     ],
     "correct": 0,
     "explanation": "Zusammen und groß.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌳</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "nzk2l1u_mittel_1",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Aus welchen Wörtern besteht 'Zahnbürste'?",
     "answers": [
      "Zahl + Bürste",
      "Zahn + Bürste",
      "Zahn + Bürsten",
      "Zähne + Bürste"
     ],
     "correct": 1,
     "explanation": "Zahn und Bürste.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪥</text></svg>"
    },
    {
     "id": "nzk2l1u_mittel_2",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man es richtig?",
     "answers": [
      "Kinderzimmer",
      "Kinder Zimmer",
      "kinderzimmer",
      "Kinder-zimmer"
     ],
     "correct": 0,
     "explanation": "Zusammen und groß.",
     "topic": "nomen_zusammen"
    },
    {
     "id": "nzk2l1u_mittel_3",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Spiel + Zeug =",
     "answers": [
      "Spiel-Zeug",
      "Spielzeug",
      "Zeugspiel",
      "spielzeug"
     ],
     "correct": 1,
     "explanation": "Zusammen.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧸</text></svg>"
    },
    {
     "id": "nzk2l1u_mittel_4",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort ist NICHT zusammengesetzt?",
     "answers": [
      "Schreibtisch",
      "Tisch",
      "Tischbein",
      "Esstisch"
     ],
     "correct": 1,
     "explanation": "Tisch ist ein einfaches Wort.",
     "topic": "nomen_zusammen"
    },
    {
     "id": "nzk2l1u_mittel_5",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Hand + Schuh =",
     "answers": [
      "Schuhhand",
      "Handschuh",
      "Hand Schuh",
      "Handschu"
     ],
     "correct": 1,
     "explanation": "Zusammen.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧤</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "nzk2l1u_schwer_1",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein 'Feuerwehrauto'?",
     "answers": [
      "eine Feuerwehr aus Autos",
      "ein Auto der Feuerwehr",
      "ein Auto, das brennt",
      "ein Feuer im Auto"
     ],
     "correct": 1,
     "explanation": "Das letzte Wort sagt, was es ist.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚒</text></svg>"
    },
    {
     "id": "nzk2l1u_schwer_2",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Aus wie vielen Wörtern besteht 'Schulbusfahrer'?",
     "answers": [
      "2",
      "3",
      "4",
      "1"
     ],
     "correct": 1,
     "explanation": "Schule + Bus + Fahrer.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚌</text></svg>"
    },
    {
     "id": "nzk2l1u_schwer_3",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "rot + Kohl =",
     "answers": [
      "Rotkohl",
      "rotkohl",
      "Rot Kohl",
      "Kohlrot"
     ],
     "correct": 0,
     "explanation": "Adjektiv + Nomen.",
     "topic": "nomen_zusammen"
    },
    {
     "id": "nzk2l1u_schwer_4",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "schreiben + Tisch =",
     "answers": [
      "Schreibentisch",
      "Tischschreib",
      "schreibtisch",
      "Schreibtisch"
     ],
     "correct": 3,
     "explanation": "Verb-Stamm + Nomen.",
     "topic": "nomen_zusammen"
    },
    {
     "id": "nzk2l1u_schwer_5",
     "category": "kurs_nz_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist der Unterschied zwischen 'Blumentopf' und 'Topfblume'?",
     "answers": [
      "kein Unterschied",
      "beides ein Topf",
      "beides eine Blume",
      "Topf für Blumen – Blume im Topf"
     ],
     "correct": 3,
     "explanation": "Das letzte Wort bestimmt.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪴</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "nzk2l1_test_1",
    "category": "kurs_nz_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Regen + Schirm =",
    "answers": [
     "Schirmregen",
     "Regenschirm",
     "Regen Schirm",
     "regenschirm"
    ],
    "correct": 1,
    "explanation": "Zusammen und groß.",
    "topic": "nomen_zusammen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☂️</text></svg>"
   },
   {
    "id": "nzk2l1_test_2",
    "category": "kurs_nz_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort ist zusammengesetzt?",
    "answers": [
     "Aufgabe",
     "Hausaufgabe",
     "Haus",
     "machen"
    ],
    "correct": 1,
    "explanation": "Haus + Aufgabe.",
    "topic": "nomen_zusammen"
   },
   {
    "id": "nzk2l1_test_3",
    "category": "kurs_nz_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Aus welchen Wörtern besteht 'Gartenzaun'?",
    "answers": [
     "Gar + Tenzaun",
     "Garten + Zahn",
     "Gast + Zaun",
     "Garten + Zaun"
    ],
    "correct": 3,
    "explanation": "Garten und Zaun.",
    "topic": "nomen_zusammen"
   },
   {
    "id": "nzk2l1_test_4",
    "category": "kurs_nz_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man es richtig?",
    "answers": [
     "Geburtstags Kuchen",
     "Geburtstagskuchen",
     "geburtstagskuchen",
     "Geburtstags-kuchen"
    ],
    "correct": 1,
    "explanation": "Zusammen.",
    "topic": "nomen_zusammen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎂</text></svg>"
   },
   {
    "id": "nzk2l1_test_5",
    "category": "kurs_nz_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Tier + Arzt =",
    "answers": [
     "Tierarzt",
     "Arzttier",
     "Tier Arzt",
     "tierarzt"
    ],
    "correct": 0,
    "explanation": "Zusammen.",
    "topic": "nomen_zusammen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐶</text></svg>"
   },
   {
    "id": "nzk2l1_test_6",
    "category": "kurs_nz_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wasser + Flasche =",
    "answers": [
     "Flaschenwasser",
     "Wasserflasche",
     "Wasser Flasche",
     "wasserflasche"
    ],
    "correct": 1,
    "explanation": "Zusammen.",
    "topic": "nomen_zusammen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍶</text></svg>"
   },
   {
    "id": "nzk2l1_test_7",
    "category": "kurs_nz_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist ein 'Kirschbaum'?",
    "answers": [
     "eine Kirsche am Boden",
     "ein Baum mit Kirschen",
     "ein Kirschkern",
     "ein Baumstamm"
    ],
    "correct": 1,
    "explanation": "Das letzte Wort sagt, was es ist.",
    "topic": "nomen_zusammen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍒</text></svg>"
   },
   {
    "id": "nzk2l1_test_8",
    "category": "kurs_nz_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort ist NICHT zusammengesetzt?",
    "answers": [
     "Hauskatze",
     "Katzenfutter",
     "Katze",
     "Katzenklo"
    ],
    "correct": 2,
    "explanation": "Einfaches Wort.",
    "topic": "nomen_zusammen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐱</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "nz_k2_l2",
  "kurs": "nomen_zus_k2",
  "order": 2,
  "icon": "🏷️",
  "title": "Der richtige Artikel",
  "kurz": "Das letzte Wort bestimmt",
  "erklaerung": {
   "intro": "Welcher <b>Artikel</b> gehört zum zusammengesetzten Nomen? Das bestimmt immer das <b>letzte Wort</b>: <b>das</b> Haus + <b>die</b> Tür = <b>die</b> Haustür. <b>die</b> Sonne + <b>der</b> Schein = <b>der</b> Sonnenschein. Das letzte Wort sagt auch, <b>was</b> es ist: Ein Haustier ist ein Tier.",
   "merksatz": "Das letzte Wort bestimmt den Artikel.",
   "beispiele": [
    "das Haus + die Tür = die Haustür",
    "die Sonne + der Schein = der Sonnenschein",
    "der Schnee + der Ball = der Schneeball"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "nzk2l2u_leicht_1",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Artikel? ___ Haustür",
     "answers": [
      "der",
      "die",
      "das",
      "den"
     ],
     "correct": 1,
     "explanation": "die Tür → die Haustür.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚪</text></svg>"
    },
    {
     "id": "nzk2l2u_leicht_2",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Artikel? ___ Schneeball",
     "answers": [
      "die",
      "das",
      "dem",
      "der"
     ],
     "correct": 3,
     "explanation": "der Ball.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚪</text></svg>"
    },
    {
     "id": "nzk2l2u_leicht_3",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Artikel? ___ Kinderzimmer",
     "answers": [
      "der",
      "die",
      "den",
      "das"
     ],
     "correct": 3,
     "explanation": "das Zimmer.",
     "topic": "nomen_zusammen"
    },
    {
     "id": "nzk2l2u_leicht_4",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort bestimmt den Artikel?",
     "answers": [
      "das erste",
      "das längste",
      "keins",
      "das letzte"
     ],
     "correct": 3,
     "explanation": "Das letzte Wort.",
     "topic": "nomen_zusammen"
    },
    {
     "id": "nzk2l2u_leicht_5",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Artikel? ___ Apfelbaum",
     "answers": [
      "der",
      "die",
      "das",
      "den"
     ],
     "correct": 0,
     "explanation": "der Baum.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌳</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "nzk2l2u_mittel_1",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Artikel? ___ Sonnenblume",
     "answers": [
      "der",
      "die",
      "das",
      "den"
     ],
     "correct": 1,
     "explanation": "die Blume.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌻</text></svg>"
    },
    {
     "id": "nzk2l2u_mittel_2",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Artikel? ___ Fußball",
     "answers": [
      "die",
      "der",
      "das",
      "dem"
     ],
     "correct": 1,
     "explanation": "der Ball.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
    },
    {
     "id": "nzk2l2u_mittel_3",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Artikel? ___ Handtuch",
     "answers": [
      "der",
      "das",
      "die",
      "den"
     ],
     "correct": 1,
     "explanation": "das Tuch.",
     "topic": "nomen_zusammen"
    },
    {
     "id": "nzk2l2u_mittel_4",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Artikel? ___ Zahnbürste",
     "answers": [
      "der",
      "das",
      "den",
      "die"
     ],
     "correct": 3,
     "explanation": "die Bürste.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪥</text></svg>"
    },
    {
     "id": "nzk2l2u_mittel_5",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist ein 'Haustier'?",
     "answers": [
      "ein Haus",
      "ein Zimmer",
      "ein Tier",
      "eine Tür"
     ],
     "correct": 2,
     "explanation": "Letztes Wort: Tier.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐹</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "nzk2l2u_schwer_1",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Artikel? ___ Spielplatz",
     "answers": [
      "die",
      "das",
      "der",
      "den"
     ],
     "correct": 2,
     "explanation": "der Platz.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛝</text></svg>"
    },
    {
     "id": "nzk2l2u_schwer_2",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Artikel? ___ Feuerwehrauto",
     "answers": [
      "der",
      "die",
      "den",
      "das"
     ],
     "correct": 3,
     "explanation": "das Auto.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚒</text></svg>"
    },
    {
     "id": "nzk2l2u_schwer_3",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Artikel? ___ Schultasche",
     "answers": [
      "die",
      "der",
      "das",
      "den"
     ],
     "correct": 0,
     "explanation": "die Tasche.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎒</text></svg>"
    },
    {
     "id": "nzk2l2u_schwer_4",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Artikel? ___ Sonnenschein",
     "answers": [
      "die",
      "das",
      "der",
      "den"
     ],
     "correct": 2,
     "explanation": "der Schein.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
    },
    {
     "id": "nzk2l2u_schwer_5",
     "category": "kurs_nz_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Artikel? ___ Bilderbuch",
     "answers": [
      "der",
      "das",
      "die",
      "dem"
     ],
     "correct": 1,
     "explanation": "das Buch.",
     "topic": "nomen_zusammen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📖</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "nzk2l2_test_1",
    "category": "kurs_nz_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Artikel? ___ Regenschirm",
    "answers": [
     "die",
     "der",
     "das",
     "den"
    ],
    "correct": 1,
    "explanation": "der Schirm.",
    "topic": "nomen_zusammen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☂️</text></svg>"
   },
   {
    "id": "nzk2l2_test_2",
    "category": "kurs_nz_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Artikel? ___ Wasserflasche",
    "answers": [
     "der",
     "die",
     "das",
     "den"
    ],
    "correct": 1,
    "explanation": "die Flasche.",
    "topic": "nomen_zusammen"
   },
   {
    "id": "nzk2l2_test_3",
    "category": "kurs_nz_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Artikel? ___ Butterbrot",
    "answers": [
     "der",
     "das",
     "die",
     "den"
    ],
    "correct": 1,
    "explanation": "das Brot.",
    "topic": "nomen_zusammen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥪</text></svg>"
   },
   {
    "id": "nzk2l2_test_4",
    "category": "kurs_nz_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Artikel? ___ Handschuh",
    "answers": [
     "der",
     "die",
     "das",
     "den"
    ],
    "correct": 0,
    "explanation": "der Schuh.",
    "topic": "nomen_zusammen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧤</text></svg>"
   },
   {
    "id": "nzk2l2_test_5",
    "category": "kurs_nz_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort bestimmt den Artikel?",
    "answers": [
     "das letzte",
     "das erste",
     "das mittlere",
     "das kürzeste"
    ],
    "correct": 0,
    "explanation": "Letztes Wort.",
    "topic": "nomen_zusammen"
   },
   {
    "id": "nzk2l2_test_6",
    "category": "kurs_nz_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Artikel? ___ Gartenzaun",
    "answers": [
     "die",
     "das",
     "der",
     "dem"
    ],
    "correct": 2,
    "explanation": "der Zaun.",
    "topic": "nomen_zusammen"
   },
   {
    "id": "nzk2l2_test_7",
    "category": "kurs_nz_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Artikel? ___ Kuscheltier",
    "answers": [
     "der",
     "das",
     "die",
     "den"
    ],
    "correct": 1,
    "explanation": "das Tier.",
    "topic": "nomen_zusammen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧸</text></svg>"
   },
   {
    "id": "nzk2l2_test_8",
    "category": "kurs_nz_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Artikel? ___ Haustür",
    "answers": [
     "der",
     "das",
     "den",
     "die"
    ],
    "correct": 3,
    "explanation": "die Tür.",
    "topic": "nomen_zusammen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚪</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "wr_k3_l1",
  "kurs": "woertliche_rede_k3",
  "order": 1,
  "icon": "💬",
  "title": "Redezeichen setzen",
  "kurz": "Was jemand sagt, steht in „…“",
  "erklaerung": {
   "intro": "Was jemand <b>genau sagt</b>, nennt man <b>wörtliche Rede</b>. Sie steht in <b>Anführungszeichen</b>: unten <b>„</b> am Anfang, oben <b>“</b> am Ende. Der <b>Begleitsatz</b> verrät, wer spricht: <b>Mia ruft: „Komm her!“</b> Steht der Begleitsatz vorne, folgt ein <b>Doppelpunkt</b>.",
   "merksatz": "Anfang unten „ – Ende oben “. Begleitsatz vorne → Doppelpunkt.",
   "beispiele": [
    "Mia ruft: „Komm her!“",
    "Tom fragt: „Wo ist mein Ball?“",
    "Oma sagt: „Das Essen ist fertig.“"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "wrk3l1u_leicht_1",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist wörtliche Rede?",
     "answers": [
      "was jemand denkt",
      "was jemand genau sagt",
      "die Überschrift",
      "ein Rätsel"
     ],
     "correct": 1,
     "explanation": "Genau gesagte Worte.",
     "topic": "woertliche_rede",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💬</text></svg>"
    },
    {
     "id": "wrk3l1u_leicht_2",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wo steht das erste Anführungszeichen?",
     "answers": [
      "oben",
      "unten",
      "in der Mitte",
      "gar nicht"
     ],
     "correct": 1,
     "explanation": "„ unten.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l1u_leicht_3",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Zeichen steht nach dem Begleitsatz vorne?",
     "answers": [
      "Komma",
      "Punkt",
      "Fragezeichen",
      "Doppelpunkt"
     ],
     "correct": 3,
     "explanation": "Mia sagt: …",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l1u_leicht_4",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Teil ist die wörtliche Rede? Mia ruft: „Komm her!“",
     "answers": [
      "Komm her!",
      "Mia ruft",
      "Mia",
      "ruft"
     ],
     "correct": 0,
     "explanation": "In den Anführungszeichen.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l1u_leicht_5",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Teil ist der Begleitsatz? Tom fragt: „Wo ist mein Ball?“",
     "answers": [
      "Wo ist mein Ball?",
      "mein Ball",
      "Tom fragt",
      "Ball"
     ],
     "correct": 2,
     "explanation": "Wer spricht.",
     "topic": "woertliche_rede"
    }
   ],
   "mittel": [
    {
     "id": "wrk3l1u_mittel_1",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "Lea sagt „Ich habe Hunger.“",
      "Lea sagt: Ich habe Hunger.",
      "Lea sagt: „Ich habe Hunger.“",
      "Lea sagt: „Ich habe Hunger."
     ],
     "correct": 2,
     "explanation": "Doppelpunkt und beide Zeichen.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l1u_mittel_2",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was fehlt? Papa ruft „Beeil dich!“",
     "answers": [
      "der Doppelpunkt nach 'ruft'",
      "ein Komma",
      "ein Fragezeichen",
      "nichts"
     ],
     "correct": 0,
     "explanation": "Papa ruft: …",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l1u_mittel_3",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie beginnt die wörtliche Rede?",
     "answers": [
      "immer klein",
      "mit einem großen Buchstaben",
      "mit einer Zahl",
      "mit einem Komma"
     ],
     "correct": 1,
     "explanation": "„Komm …",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l1u_mittel_4",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Satzzeichen gehört in die Rede? Ben fragt: „Kommst du mit_“",
     "answers": [
      ".",
      "?",
      "!",
      ":"
     ],
     "correct": 1,
     "explanation": "Eine Frage.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l1u_mittel_5",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort passt in den Begleitsatz für eine Frage?",
     "answers": [
      "sagt leise",
      "lacht",
      "fragt",
      "schläft"
     ],
     "correct": 2,
     "explanation": "fragen.",
     "topic": "woertliche_rede"
    }
   ],
   "schwer": [
    {
     "id": "wrk3l1u_schwer_1",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist ganz richtig?",
     "answers": [
      "Opa fragt: „wer hat meine Brille?“",
      "Opa fragt „Wer hat meine Brille?“",
      "Opa fragt: „Wer hat meine Brille?“",
      "Opa fragt: „Wer hat meine Brille.“"
     ],
     "correct": 2,
     "explanation": "Groß, Doppelpunkt, Fragezeichen.",
     "topic": "woertliche_rede",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👓</text></svg>"
    },
    {
     "id": "wrk3l1u_schwer_2",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wo steht das Satzschlusszeichen der Rede?",
     "answers": [
      "nach dem oberen Anführungszeichen",
      "vor dem oberen Anführungszeichen",
      "vor dem Doppelpunkt",
      "gar nicht"
     ],
     "correct": 1,
     "explanation": "„Komm!“ – erst !, dann “.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l1u_schwer_3",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz enthält wörtliche Rede?",
     "answers": [
      "Mama kocht Essen.",
      "Das Essen ist fertig.",
      "Mama hat gerufen.",
      "Mama ruft: „Essen ist fertig!“"
     ],
     "correct": 3,
     "explanation": "Nur dort steht genau Gesagtes.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l1u_schwer_4",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Verb passt? Die Lehrerin ___: „Seid bitte leise!“",
     "answers": [
      "schläft",
      "bittet",
      "isst",
      "läuft"
     ],
     "correct": 1,
     "explanation": "Sprechverb.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l1u_schwer_5",
     "category": "kurs_wr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Anführungszeichen braucht eine wörtliche Rede?",
     "answers": [
      "1",
      "3",
      "2",
      "4"
     ],
     "correct": 2,
     "explanation": "Eins am Anfang, eins am Ende.",
     "topic": "woertliche_rede"
    }
   ]
  },
  "test": [
   {
    "id": "wrk3l1_test_1",
    "category": "kurs_wr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wo steht das erste Anführungszeichen?",
    "answers": [
     "oben",
     "rechts",
     "in der Mitte",
     "unten"
    ],
    "correct": 3,
    "explanation": "„ unten.",
    "topic": "woertliche_rede"
   },
   {
    "id": "wrk3l1_test_2",
    "category": "kurs_wr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Zeichen kommt nach 'Tim sagt'?",
    "answers": [
     "Komma",
     "Punkt",
     "Doppelpunkt",
     "Strich"
    ],
    "correct": 2,
    "explanation": "Tim sagt: …",
    "topic": "woertliche_rede"
   },
   {
    "id": "wrk3l1_test_3",
    "category": "kurs_wr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz ist richtig?",
    "answers": [
     "Anna ruft: „Hallo!“",
     "Anna ruft „Hallo!“",
     "Anna ruft: Hallo!",
     "Anna ruft: „hallo!“"
    ],
    "correct": 0,
    "explanation": "Doppelpunkt, Zeichen, groß.",
    "topic": "woertliche_rede"
   },
   {
    "id": "wrk3l1_test_4",
    "category": "kurs_wr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Teil ist der Begleitsatz? Leo flüstert: „Psst!“",
    "answers": [
     "Psst!",
     "Leo flüstert",
     "Psst",
     "Leo"
    ],
    "correct": 1,
    "explanation": "Wer spricht.",
    "topic": "woertliche_rede",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🤫</text></svg>"
   },
   {
    "id": "wrk3l1_test_5",
    "category": "kurs_wr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist wörtliche Rede?",
    "answers": [
     "Gedachtes",
     "genau Gesagtes",
     "Überschrift",
     "Name"
    ],
    "correct": 1,
    "explanation": "Genau gesagt.",
    "topic": "woertliche_rede"
   },
   {
    "id": "wrk3l1_test_6",
    "category": "kurs_wr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Satzzeichen gehört in die Rede? Mia fragt: „Wie spät ist es_“",
    "answers": [
     ".",
     "?",
     "!",
     ","
    ],
    "correct": 1,
    "explanation": "Frage.",
    "topic": "woertliche_rede"
   },
   {
    "id": "wrk3l1_test_7",
    "category": "kurs_wr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wo steht das letzte Anführungszeichen?",
    "answers": [
     "unten",
     "in der Mitte",
     "oben",
     "vor dem Satz"
    ],
    "correct": 2,
    "explanation": "“ oben.",
    "topic": "woertliche_rede"
   },
   {
    "id": "wrk3l1_test_8",
    "category": "kurs_wr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz enthält wörtliche Rede?",
    "answers": [
     "Tom sagt: „Ich bin müde.“",
     "Tom ist müde.",
     "Tom geht ins Bett.",
     "Tom war müde."
    ],
    "correct": 0,
    "explanation": "Anführungszeichen.",
    "topic": "woertliche_rede"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "wr_k3_l2",
  "kurs": "woertliche_rede_k3",
  "order": 2,
  "icon": "🔀",
  "title": "Begleitsatz vorne oder hinten",
  "kurz": "Doppelpunkt oder Komma?",
  "erklaerung": {
   "intro": "Der Begleitsatz kann <b>vorne</b> oder <b>hinten</b> stehen. <b>Vorne:</b> Mia ruft: „Komm her!“ <b>Hinten:</b> „Komm her!“, ruft Mia. Steht der Begleitsatz hinten, kommt nach dem Anführungszeichen ein <b>Komma</b>. Ein Punkt in der Rede fällt dann weg: „Ich bin müde“, sagt Tom.",
   "merksatz": "Begleitsatz vorne → Doppelpunkt. Begleitsatz hinten → Komma nach “.",
   "beispiele": [
    "Vorne: Tom sagt: „Ich bin müde.“",
    "Hinten: „Ich bin müde“, sagt Tom.",
    "Hinten mit Frage: „Kommst du?“, fragt Lea."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "wrk3l2u_leicht_1",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wo steht der Begleitsatz? „Komm her!“, ruft Mia.",
     "answers": [
      "vorne",
      "in der Mitte",
      "hinten",
      "es gibt keinen"
     ],
     "correct": 2,
     "explanation": "ruft Mia steht am Ende.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l2u_leicht_2",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Zeichen steht nach der Rede, wenn der Begleitsatz hinten steht?",
     "answers": [
      "Doppelpunkt",
      "Punkt",
      "nichts",
      "Komma"
     ],
     "correct": 3,
     "explanation": "„…“, sagt …",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l2u_leicht_3",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wo steht der Begleitsatz? Papa sagt: „Gute Nacht.“",
     "answers": [
      "hinten",
      "in der Mitte",
      "gar nicht",
      "vorne"
     ],
     "correct": 3,
     "explanation": "Papa sagt steht vorne.",
     "topic": "woertliche_rede",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌙</text></svg>"
    },
    {
     "id": "wrk3l2u_leicht_4",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Zeichen kommt bei 'Begleitsatz vorne'?",
     "answers": [
      "Komma",
      "Punkt",
      "Doppelpunkt",
      "Ausrufezeichen"
     ],
     "correct": 2,
     "explanation": "Doppelpunkt.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l2u_leicht_5",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man 'sagt Tom' hinter der Rede?",
     "answers": [
      "groß",
      "klein",
      "fett",
      "in Klammern"
     ],
     "correct": 1,
     "explanation": "Der Satz geht weiter.",
     "topic": "woertliche_rede"
    }
   ],
   "mittel": [
    {
     "id": "wrk3l2u_mittel_1",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "„Ich bin müde.“ sagt Tom.",
      "„Ich bin müde“, sagt Tom.",
      "„Ich bin müde“ sagt Tom.",
      "„Ich bin müde“: sagt Tom."
     ],
     "correct": 1,
     "explanation": "Punkt fällt weg, Komma nach “.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l2u_mittel_2",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "„Wo ist Oma“, fragt Ben.",
      "„Wo ist Oma?“, fragt Ben.",
      "„Wo ist Oma?“ fragt Ben.",
      "„Wo ist Oma?“. fragt Ben."
     ],
     "correct": 1,
     "explanation": "Fragezeichen bleibt, dann Komma.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l2u_mittel_3",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was fällt weg, wenn der Begleitsatz hinten steht?",
     "answers": [
      "das Fragezeichen",
      "das Ausrufezeichen",
      "die Anführungszeichen",
      "der Punkt in der Rede"
     ],
     "correct": 3,
     "explanation": "Nur der Punkt.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l2u_mittel_4",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Stelle um: Lea ruft: „Hilfe!“",
     "answers": [
      "„Hilfe!“ Lea ruft.",
      "„Hilfe“ ruft Lea.",
      "„Hilfe!“, ruft Lea.",
      "Hilfe, ruft Lea!"
     ],
     "correct": 2,
     "explanation": "Begleitsatz hinten.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l2u_mittel_5",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz hat den Begleitsatz vorne?",
     "answers": [
      "„Ich lese“, sagt Mia.",
      "„Ich lese.“",
      "Mia sagt: „Ich lese.“",
      "Mia liest."
     ],
     "correct": 2,
     "explanation": "Vorne.",
     "topic": "woertliche_rede",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📖</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "wrk3l2u_schwer_1",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist ganz richtig?",
     "answers": [
      "„Kommst du mit“, fragt Paul.",
      "„kommst du mit?“, fragt Paul.",
      "„Kommst du mit?“, fragt Paul.",
      "„Kommst du mit?“ Fragt Paul."
     ],
     "correct": 2,
     "explanation": "Groß, Fragezeichen, Komma, klein.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l2u_schwer_2",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Stelle um: „Ich habe gewonnen!“, jubelt Ali.",
     "answers": [
      "Ali jubelt, „Ich habe gewonnen!“",
      "Ali jubelt „Ich habe gewonnen!“",
      "Ali jubelt: Ich habe gewonnen!",
      "Ali jubelt: „Ich habe gewonnen!“"
     ],
     "correct": 3,
     "explanation": "Begleitsatz vorne → Doppelpunkt.",
     "topic": "woertliche_rede",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏆</text></svg>"
    },
    {
     "id": "wrk3l2u_schwer_3",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was fehlt? „Das ist toll“ ruft Emma.",
     "answers": [
      "ein Punkt",
      "ein Doppelpunkt",
      "nichts",
      "das Komma nach “"
     ],
     "correct": 3,
     "explanation": "„…“, ruft Emma.",
     "topic": "woertliche_rede"
    },
    {
     "id": "wrk3l2u_schwer_4",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Verb passt am besten? „Psst, das Baby schläft“, ___ Mama.",
     "answers": [
      "flüstert",
      "brüllt",
      "singt laut",
      "schreit"
     ],
     "correct": 0,
     "explanation": "Leise sprechen.",
     "topic": "woertliche_rede",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👶</text></svg>"
    },
    {
     "id": "wrk3l2u_schwer_5",
     "category": "kurs_wr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Bleibt das Ausrufezeichen, wenn der Begleitsatz hinten steht?",
     "answers": [
      "nein",
      "nur bei Fragen",
      "nur am Wochenende",
      "ja"
     ],
     "correct": 3,
     "explanation": "Nur der Punkt fällt weg.",
     "topic": "woertliche_rede"
    }
   ]
  },
  "test": [
   {
    "id": "wrk3l2_test_1",
    "category": "kurs_wr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wo steht der Begleitsatz? „Gute Nacht“, sagt Mama.",
    "answers": [
     "vorne",
     "hinten",
     "in der Mitte",
     "nirgends"
    ],
    "correct": 1,
    "explanation": "Hinten.",
    "topic": "woertliche_rede"
   },
   {
    "id": "wrk3l2_test_2",
    "category": "kurs_wr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Zeichen folgt bei Begleitsatz hinten?",
    "answers": [
     "Doppelpunkt",
     "Punkt",
     "Komma",
     "Strich"
    ],
    "correct": 2,
    "explanation": "Komma.",
    "topic": "woertliche_rede"
   },
   {
    "id": "wrk3l2_test_3",
    "category": "kurs_wr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz ist richtig?",
    "answers": [
     "„Ich komme gleich.“ ruft Ben.",
     "„Ich komme gleich“, ruft Ben.",
     "„Ich komme gleich“ ruft Ben.",
     "„Ich komme gleich“: ruft Ben."
    ],
    "correct": 1,
    "explanation": "Komma.",
    "topic": "woertliche_rede"
   },
   {
    "id": "wrk3l2_test_4",
    "category": "kurs_wr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz ist richtig?",
    "answers": [
     "„Hast du Zeit“, fragt Lisa.",
     "„Hast du Zeit?“ fragt Lisa.",
     "„Hast du Zeit?“, fragt Lisa.",
     "„Hast du Zeit?“, Fragt Lisa."
    ],
    "correct": 2,
    "explanation": "? bleibt, Komma.",
    "topic": "woertliche_rede"
   },
   {
    "id": "wrk3l2_test_5",
    "category": "kurs_wr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was fällt weg, wenn der Begleitsatz hinten steht?",
    "answers": [
     "das Fragezeichen",
     "der Punkt",
     "das Ausrufezeichen",
     "das Komma"
    ],
    "correct": 1,
    "explanation": "Punkt.",
    "topic": "woertliche_rede"
   },
   {
    "id": "wrk3l2_test_6",
    "category": "kurs_wr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Stelle um: Oma sagt: „Das schmeckt.“",
    "answers": [
     "„Das schmeckt.“ sagt Oma.",
     "Das schmeckt, sagt Oma.",
     "„Das schmeckt“ Oma sagt.",
     "„Das schmeckt“, sagt Oma."
    ],
    "correct": 3,
    "explanation": "Hinten mit Komma.",
    "topic": "woertliche_rede"
   },
   {
    "id": "wrk3l2_test_7",
    "category": "kurs_wr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Bei Begleitsatz vorne steht …",
    "answers": [
     "ein Komma",
     "ein Doppelpunkt",
     "ein Punkt",
     "nichts"
    ],
    "correct": 1,
    "explanation": "Doppelpunkt.",
    "topic": "woertliche_rede"
   },
   {
    "id": "wrk3l2_test_8",
    "category": "kurs_wr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man das Verb im Begleitsatz hinten?",
    "answers": [
     "groß",
     "kursiv",
     "klein",
     "gar nicht"
    ],
    "correct": 2,
    "explanation": "„…“, sagt …",
    "topic": "woertliche_rede"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "be_k4_l1",
  "kurs": "bericht_k4",
  "order": 1,
  "icon": "📰",
  "title": "W-Fragen und sachlich bleiben",
  "kurz": "Was gehört in einen Bericht?",
  "erklaerung": {
   "intro": "Ein <b>Bericht</b> informiert <b>sachlich und genau</b> über etwas, das passiert ist – z. B. einen Unfall oder einen Ausflug. Er beantwortet die <b>W-Fragen</b>: <b>Wer? Was? Wann? Wo? Wie? Warum? Welche Folgen?</b> Im Bericht stehen <b>keine Gefühle, keine wörtliche Rede und keine Spannung</b>.",
   "merksatz": "Bericht = W-Fragen, sachlich, ohne Gefühle und ohne wörtliche Rede.",
   "beispiele": [
    "Wann? Am Montag, 10. März, um 8 Uhr",
    "Wo? Auf dem Schulhof der Grundschule",
    "Sachlich: „Tom stürzte und verletzte sich am Knie.“"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "bek4l1u_leicht_1",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist ein Bericht?",
     "answers": [
      "eine spannende Geschichte",
      "ein Gedicht",
      "ein sachlicher Text über ein Ereignis",
      "ein Märchen"
     ],
     "correct": 2,
     "explanation": "Sachlich informieren.",
     "topic": "bericht",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📰</text></svg>"
    },
    {
     "id": "bek4l1u_leicht_2",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Frage gehört zu einem Bericht?",
     "answers": [
      "Was hat er gefühlt?",
      "Wie hat es gerochen?",
      "Wann ist es passiert?",
      "Was war gruselig?"
     ],
     "correct": 2,
     "explanation": "W-Frage.",
     "topic": "bericht"
    },
    {
     "id": "bek4l1u_leicht_3",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Gehört wörtliche Rede in einen Bericht?",
     "answers": [
      "ja, viel",
      "nur am Anfang",
      "nein",
      "nur am Ende"
     ],
     "correct": 2,
     "explanation": "Keine wörtliche Rede.",
     "topic": "bericht"
    },
    {
     "id": "bek4l1u_leicht_4",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Satz passt in einen Bericht?",
     "answers": [
      "Plötzlich, oh Schreck, krachte es!",
      "Tom war sooo traurig.",
      "Am Montag um 8 Uhr stürzte Tom auf dem Schulhof.",
      "„Aua!“, schrie Tom."
     ],
     "correct": 2,
     "explanation": "Sachlich.",
     "topic": "bericht"
    },
    {
     "id": "bek4l1u_leicht_5",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was beantwortet die Frage 'Wo?'",
     "answers": [
      "die Zeit",
      "die Person",
      "den Ort",
      "den Grund"
     ],
     "correct": 2,
     "explanation": "Ort.",
     "topic": "bericht",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📍</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "bek4l1u_mittel_1",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche W-Frage fehlt oft? Wer, Was, Wann, Wo, Wie, ___",
     "answers": [
      "Was fühlst du",
      "Was isst du",
      "Warum",
      "Wie heißt dein Hund"
     ],
     "correct": 2,
     "explanation": "Grund.",
     "topic": "bericht"
    },
    {
     "id": "bek4l1u_mittel_2",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was gehört NICHT in einen Bericht?",
     "answers": [
      "Ort und Zeit",
      "Beteiligte",
      "Gefühle und Spannung",
      "Folgen"
     ],
     "correct": 2,
     "explanation": "Sachlich bleiben.",
     "topic": "bericht"
    },
    {
     "id": "bek4l1u_mittel_3",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz ist sachlich?",
     "answers": [
      "Der blöde Bus war schon wieder total spät!",
      "Ich hasse den Bus.",
      "Der Bus kam zehn Minuten zu spät.",
      "Der Bus kroch wie eine Schnecke."
     ],
     "correct": 2,
     "explanation": "Nur Fakten.",
     "topic": "bericht",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚌</text></svg>"
    },
    {
     "id": "bek4l1u_mittel_4",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Für wen schreibt man einen Unfallbericht?",
     "answers": [
      "für ein Märchenbuch",
      "z. B. für die Schule oder die Versicherung",
      "für ein Gedicht",
      "für niemanden"
     ],
     "correct": 1,
     "explanation": "Er informiert.",
     "topic": "bericht"
    },
    {
     "id": "bek4l1u_mittel_5",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Angabe beantwortet 'Wann?'",
     "answers": [
      "auf dem Sportplatz",
      "am Dienstag um 10 Uhr",
      "Lisa und Ben",
      "weil es glatt war"
     ],
     "correct": 1,
     "explanation": "Zeit.",
     "topic": "bericht",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🕙</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "bek4l1u_schwer_1",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was unterscheidet Bericht und Erzählung?",
     "answers": [
      "Beide sind gleich.",
      "Der Bericht ist sachlich, die Erzählung spannend.",
      "Der Bericht ist immer lustig.",
      "Die Erzählung hat keine Personen."
     ],
     "correct": 1,
     "explanation": "Sachlich vs. spannend.",
     "topic": "bericht"
    },
    {
     "id": "bek4l1u_schwer_2",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz beantwortet 'Welche Folgen?'",
     "answers": [
      "Tom spielte Fußball.",
      "Tom musste ins Krankenhaus.",
      "Es war Montag.",
      "Tom ist zehn."
     ],
     "correct": 1,
     "explanation": "Folgen.",
     "topic": "bericht",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏥</text></svg>"
    },
    {
     "id": "bek4l1u_schwer_3",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Überschrift passt zu einem Bericht?",
     "answers": [
      "Unfall auf dem Schulhof",
      "Das schrecklichste Erlebnis meines Lebens!",
      "Aua, aua, aua!",
      "Toms Abenteuer"
     ],
     "correct": 0,
     "explanation": "Sachlich.",
     "topic": "bericht"
    },
    {
     "id": "bek4l1u_schwer_4",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz muss für einen Bericht geändert werden?",
     "answers": [
      "Ich glaube, es war voll gefährlich.",
      "Der Unfall geschah um 9:15 Uhr.",
      "Zwei Kinder waren beteiligt.",
      "Die Ampel war rot."
     ],
     "correct": 0,
     "explanation": "Meinung und Umgangssprache.",
     "topic": "bericht"
    },
    {
     "id": "bek4l1u_schwer_5",
     "category": "kurs_be_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche W-Fragen gehören in die Einleitung eines Berichts?",
     "answers": [
      "Welche Folgen?",
      "Warum lustig?",
      "Wer? Wann? Wo?",
      "Wie schön?"
     ],
     "correct": 2,
     "explanation": "Erst die Grundlagen.",
     "topic": "bericht"
    }
   ]
  },
  "test": [
   {
    "id": "bek4l1_test_1",
    "category": "kurs_be_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist ein Bericht?",
    "answers": [
     "ein sachlicher Text",
     "eine Fantasiegeschichte",
     "ein Lied",
     "ein Witz"
    ],
    "correct": 0,
    "explanation": "Sachlich.",
    "topic": "bericht"
   },
   {
    "id": "bek4l1_test_2",
    "category": "kurs_be_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Gehören Gefühle in einen Bericht?",
    "answers": [
     "nein",
     "ja",
     "immer",
     "nur traurige"
    ],
    "correct": 0,
    "explanation": "Sachlich.",
    "topic": "bericht"
   },
   {
    "id": "bek4l1_test_3",
    "category": "kurs_be_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Frage gehört zum Bericht?",
    "answers": [
     "Was hast du geträumt?",
     "Was war gruselig?",
     "Wo ist es passiert?",
     "Was ist deine Lieblingsfarbe?"
    ],
    "correct": 2,
    "explanation": "W-Frage.",
    "topic": "bericht"
   },
   {
    "id": "bek4l1_test_4",
    "category": "kurs_be_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz passt in einen Bericht?",
    "answers": [
     "Huch, Lena fiel einfach runter!",
     "Lena war so tollpatschig.",
     "Um 11 Uhr fiel Lena vom Klettergerüst.",
     "„Hilfe!“, rief Lena."
    ],
    "correct": 2,
    "explanation": "Sachlich.",
    "topic": "bericht"
   },
   {
    "id": "bek4l1_test_5",
    "category": "kurs_be_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was beantwortet 'Wer?'",
    "answers": [
     "die Zeit",
     "die beteiligten Personen",
     "den Ort",
     "den Grund"
    ],
    "correct": 1,
    "explanation": "Personen.",
    "topic": "bericht"
   },
   {
    "id": "bek4l1_test_6",
    "category": "kurs_be_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Gehört wörtliche Rede in einen Bericht?",
    "answers": [
     "ja",
     "nur einmal",
     "nein",
     "immer am Anfang"
    ],
    "correct": 2,
    "explanation": "Nein.",
    "topic": "bericht"
   },
   {
    "id": "bek4l1_test_7",
    "category": "kurs_be_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Überschrift passt?",
    "answers": [
     "Fahrradunfall an der Kreuzung",
     "Mein schlimmster Tag!",
     "Krach, bumm!",
     "Abenteuer pur"
    ],
    "correct": 0,
    "explanation": "Sachlich.",
    "topic": "bericht",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚲</text></svg>"
   },
   {
    "id": "bek4l1_test_8",
    "category": "kurs_be_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz beantwortet 'Warum?'",
    "answers": [
     "Es war am Montag.",
     "Ben war beteiligt.",
     "Es geschah im Park.",
     "Die Straße war glatt."
    ],
    "correct": 3,
    "explanation": "Grund.",
    "topic": "bericht"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "be_k4_l2",
  "kurs": "bericht_k4",
  "order": 2,
  "icon": "🕘",
  "title": "Reihenfolge und Zeitform",
  "kurz": "Präteritum und richtige Reihenfolge",
  "erklaerung": {
   "intro": "Ein Bericht erzählt die Ereignisse in der <b>richtigen Reihenfolge</b>. Er steht im <b>Präteritum</b> (Vergangenheit): <b>Tom fuhr, er stürzte, die Lehrerin half</b>. Du schreibst <b>genau</b> (Uhrzeit, Ort) und <b>kurz</b>. Satzanfänge wie <b>Zuerst, Danach, Anschließend, Zum Schluss</b> helfen bei der Reihenfolge.",
   "merksatz": "Präteritum, richtige Reihenfolge, genau und kurz.",
   "beispiele": [
    "Präteritum: fahren → fuhr, rufen → rief, helfen → half",
    "Zuerst … Danach … Anschließend … Zum Schluss …",
    "Genau: „um 9:15 Uhr“ statt „irgendwann morgens“"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "bek4l2u_leicht_1",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "In welcher Zeitform schreibt man einen Bericht?",
     "answers": [
      "Zukunft",
      "Präteritum",
      "Präsens",
      "Befehlsform"
     ],
     "correct": 1,
     "explanation": "Vergangenheit.",
     "topic": "bericht"
    },
    {
     "id": "bek4l2u_leicht_2",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Präteritum von 'er fährt'?",
     "answers": [
      "er fahrte",
      "er fuhr",
      "er fährt",
      "er wird fahren"
     ],
     "correct": 1,
     "explanation": "fahren – fuhr.",
     "topic": "bericht",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚲</text></svg>"
    },
    {
     "id": "bek4l2u_leicht_3",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Präteritum von 'sie hilft'?",
     "answers": [
      "sie helfte",
      "sie half",
      "sie hilf",
      "sie hulf"
     ],
     "correct": 1,
     "explanation": "helfen – half.",
     "topic": "bericht"
    },
    {
     "id": "bek4l2u_leicht_4",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort hilft bei der Reihenfolge?",
     "answers": [
      "Huch",
      "Leider",
      "Super",
      "Danach"
     ],
     "correct": 3,
     "explanation": "Zeitwort.",
     "topic": "bericht"
    },
    {
     "id": "bek4l2u_leicht_5",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist genauer?",
     "answers": [
      "irgendwann",
      "um 9:15 Uhr",
      "mal morgens",
      "vorhin"
     ],
     "correct": 1,
     "explanation": "Genaue Uhrzeit.",
     "topic": "bericht",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🕘</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "bek4l2u_mittel_1",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Präteritum von 'er stürzt'?",
     "answers": [
      "er stürzt",
      "er stürz",
      "er stürzte",
      "er stirzte"
     ],
     "correct": 2,
     "explanation": "stürzen – stürzte.",
     "topic": "bericht"
    },
    {
     "id": "bek4l2u_mittel_2",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Präteritum von 'wir rufen'?",
     "answers": [
      "wir rufen",
      "wir riefen",
      "wir ruften",
      "wir rufte"
     ],
     "correct": 1,
     "explanation": "rufen – riefen.",
     "topic": "bericht"
    },
    {
     "id": "bek4l2u_mittel_3",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Reihenfolge stimmt?",
     "answers": [
      "Ball rollt auf Straße – Kind läuft hinterher – Auto bremst",
      "Auto bremst – Ball rollt – Kind läuft",
      "Kind läuft – Auto bremst – Ball rollt",
      "Auto bremst – Kind läuft – Ball rollt"
     ],
     "correct": 0,
     "explanation": "Logisch.",
     "topic": "bericht",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
    },
    {
     "id": "bek4l2u_mittel_4",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort passt an den Schluss?",
     "answers": [
      "Zuerst",
      "Am Anfang",
      "Eines Tages",
      "Zum Schluss"
     ],
     "correct": 3,
     "explanation": "Schluss.",
     "topic": "bericht"
    },
    {
     "id": "bek4l2u_mittel_5",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz steht im Präteritum?",
     "answers": [
      "Die Lehrerin holt ein Pflaster.",
      "Die Lehrerin holte ein Pflaster.",
      "Die Lehrerin wird ein Pflaster holen.",
      "Hol ein Pflaster!"
     ],
     "correct": 1,
     "explanation": "holte.",
     "topic": "bericht",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🩹</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "bek4l2u_schwer_1",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Präteritum von 'sie bringen'?",
     "answers": [
      "sie bringten",
      "sie brachten",
      "sie brangen",
      "sie bringen"
     ],
     "correct": 1,
     "explanation": "bringen – brachten.",
     "topic": "bericht"
    },
    {
     "id": "bek4l2u_schwer_2",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Präteritum von 'er sieht'?",
     "answers": [
      "er siehte",
      "er sehte",
      "er sah",
      "er sieh"
     ],
     "correct": 2,
     "explanation": "sehen – sah.",
     "topic": "bericht"
    },
    {
     "id": "bek4l2u_schwer_3",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist am besten für einen Bericht?",
     "answers": [
      "Gegen 10 Uhr rutschte Ben auf der nassen Treppe aus.",
      "Irgendwann rutschte Ben mal aus.",
      "Ben rutscht aus.",
      "Ben wird ausrutschen."
     ],
     "correct": 0,
     "explanation": "Genau + Präteritum.",
     "topic": "bericht"
    },
    {
     "id": "bek4l2u_schwer_4",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Satzanfänge passen zu einem Bericht?",
     "answers": [
      "Plötzlich – Oh Schreck – Puh",
      "Es war einmal – Und wenn sie nicht gestorben sind",
      "Hurra – Juhu – Toll",
      "Zuerst – Danach – Anschließend"
     ],
     "correct": 3,
     "explanation": "Sachlich.",
     "topic": "bericht"
    },
    {
     "id": "bek4l2u_schwer_5",
     "category": "kurs_be_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Präteritum von 'der Krankenwagen kommt'?",
     "answers": [
      "kommte",
      "der Krankenwagen kam",
      "kamte",
      "kommt"
     ],
     "correct": 1,
     "explanation": "kommen – kam.",
     "topic": "bericht",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚑</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "bek4l2_test_1",
    "category": "kurs_be_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Zeitform eines Berichts?",
    "answers": [
     "Futur",
     "Präteritum",
     "Präsens",
     "keine"
    ],
    "correct": 1,
    "explanation": "Vergangenheit.",
    "topic": "bericht"
   },
   {
    "id": "bek4l2_test_2",
    "category": "kurs_be_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Präteritum von 'sie läuft'?",
    "answers": [
     "sie laufte",
     "sie läufte",
     "sie lief",
     "sie luf"
    ],
    "correct": 2,
    "explanation": "laufen – lief.",
    "topic": "bericht"
   },
   {
    "id": "bek4l2_test_3",
    "category": "kurs_be_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Präteritum von 'er ruft'?",
    "answers": [
     "er rufte",
     "er ruft",
     "er rief",
     "er raf"
    ],
    "correct": 2,
    "explanation": "rufen – rief.",
    "topic": "bericht"
   },
   {
    "id": "bek4l2_test_4",
    "category": "kurs_be_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort hilft bei der Reihenfolge?",
    "answers": [
     "Anschließend",
     "Aua",
     "Toll",
     "Leider"
    ],
    "correct": 0,
    "explanation": "Zeitwort.",
    "topic": "bericht"
   },
   {
    "id": "bek4l2_test_5",
    "category": "kurs_be_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist genauer?",
    "answers": [
     "neulich",
     "mal nachmittags",
     "am 5. Mai um 14 Uhr",
     "irgendwann"
    ],
    "correct": 2,
    "explanation": "Datum und Uhrzeit.",
    "topic": "bericht"
   },
   {
    "id": "bek4l2_test_6",
    "category": "kurs_be_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz steht im Präteritum?",
    "answers": [
     "Der Hausmeister öffnet die Tür.",
     "Öffne die Tür!",
     "Der Hausmeister wird öffnen.",
     "Der Hausmeister öffnete die Tür."
    ],
    "correct": 3,
    "explanation": "öffnete.",
    "topic": "bericht"
   },
   {
    "id": "bek4l2_test_7",
    "category": "kurs_be_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Präteritum von 'wir gehen'?",
    "answers": [
     "wir gehten",
     "wir gingen",
     "wir gangen",
     "wir gehen"
    ],
    "correct": 1,
    "explanation": "gehen – gingen.",
    "topic": "bericht"
   },
   {
    "id": "bek4l2_test_8",
    "category": "kurs_be_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort passt an den Anfang der Ereignisse?",
    "answers": [
     "Zum Schluss",
     "Am Ende",
     "Schließlich",
     "Zuerst"
    ],
    "correct": 3,
    "explanation": "Anfang.",
    "topic": "bericht"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
