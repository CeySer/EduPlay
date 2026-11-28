// Neue Deutschkurse: K2 Wortschatz/Silben, K3 Verben beugen, K4 Brief/E-Mail (28.11.2026)
(function () {
    const extraKurse = [{"id": "wortschatz_k2", "title": "Wortfelder, Gegenteile, Silben", "icon": "🧠", "grade": 2, "subject": "deutsch", "beschreibung": "Wörter ordnen, Gegenteile finden und richtig trennen."}, {"id": "verben_k3", "title": "Verben beugen", "icon": "🏃", "grade": 3, "subject": "deutsch", "beschreibung": "Grundform und Personalform: ich gehe, du gehst, er geht."}, {"id": "brief_k4", "title": "Brief und E-Mail", "icon": "✉️", "grade": 4, "subject": "deutsch", "beschreibung": "Aufbau, Anrede, Gruß und höfliche Anredepronomen."}];
    const extraLektionen = [
 {
  "id": "ws_k2_l1",
  "kurs": "wortschatz_k2",
  "order": 1,
  "icon": "🧠",
  "title": "Wortfelder und Gegenteile",
  "kurz": "Wörter, die zusammengehören",
  "erklaerung": {
   "intro": "Ein <b>Wortfeld</b> sind Wörter mit <b>ähnlicher Bedeutung</b>: gehen, laufen, rennen, schleichen gehören zum Wortfeld „gehen“. Mit verschiedenen Wörtern werden Texte lebendiger. <b>Gegenteile</b> sind Wörter mit ganz anderer Bedeutung: groß – klein, heiß – kalt, lachen – weinen.",
   "merksatz": "Wortfeld = ähnlich. Gegenteil = ganz anders.",
   "beispiele": [
    "Wortfeld „sagen“: rufen, flüstern, fragen, schreien",
    "<svg viewBox='0 0 227 93' style='width:100%;max-width:227px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='113' y='73' text-anchor='middle' font-size='72'>🔥 ❄️</text></svg>heiß – kalt",
    "<svg viewBox='0 0 227 93' style='width:100%;max-width:227px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='113' y='73' text-anchor='middle' font-size='72'>😀 😢</text></svg>lachen – weinen"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "wsk2l1u_leicht_1",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist das Gegenteil von 'groß'?",
     "answers": [
      "lang",
      "dick",
      "klein",
      "hoch"
     ],
     "correct": 2,
     "explanation": "groß – klein.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐘</text></svg>"
    },
    {
     "id": "wsk2l1u_leicht_2",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist das Gegenteil von 'heiß'?",
     "answers": [
      "kalt",
      "warm",
      "nass",
      "hell"
     ],
     "correct": 0,
     "explanation": "heiß – kalt.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔥</text></svg>"
    },
    {
     "id": "wsk2l1u_leicht_3",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort gehört zum Wortfeld 'gehen'?",
     "answers": [
      "rennen",
      "essen",
      "schlafen",
      "malen"
     ],
     "correct": 0,
     "explanation": "Fortbewegung.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏃</text></svg>"
    },
    {
     "id": "wsk2l1u_leicht_4",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist das Gegenteil von 'lachen'?",
     "answers": [
      "kichern",
      "singen",
      "weinen",
      "lächeln"
     ],
     "correct": 2,
     "explanation": "lachen – weinen.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😢</text></svg>"
    },
    {
     "id": "wsk2l1u_leicht_5",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist das Gegenteil von 'Tag'?",
     "answers": [
      "Morgen",
      "Sonne",
      "Woche",
      "Nacht"
     ],
     "correct": 3,
     "explanation": "Tag – Nacht.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌙</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "wsk2l1u_mittel_1",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort gehört NICHT zum Wortfeld 'sagen'?",
     "answers": [
      "rufen",
      "flüstern",
      "springen",
      "fragen"
     ],
     "correct": 2,
     "explanation": "springen ist eine Bewegung.",
     "topic": "wortschatz"
    },
    {
     "id": "wsk2l1u_mittel_2",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist das Gegenteil von 'schnell'?",
     "answers": [
      "laut",
      "leise",
      "langsam",
      "weit"
     ],
     "correct": 2,
     "explanation": "schnell – langsam.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐢</text></svg>"
    },
    {
     "id": "wsk2l1u_mittel_3",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort ist leiser als 'sagen'?",
     "answers": [
      "schreien",
      "rufen",
      "brüllen",
      "flüstern"
     ],
     "correct": 3,
     "explanation": "flüstern.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🤫</text></svg>"
    },
    {
     "id": "wsk2l1u_mittel_4",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist das Gegenteil von 'voll'?",
     "answers": [
      "satt",
      "viel",
      "leer",
      "rund"
     ],
     "correct": 2,
     "explanation": "voll – leer.",
     "topic": "wortschatz"
    },
    {
     "id": "wsk2l1u_mittel_5",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort gehört zum Wortfeld 'essen'?",
     "answers": [
      "knabbern",
      "trinken",
      "laufen",
      "lesen"
     ],
     "correct": 0,
     "explanation": "Wie man isst.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐰</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "wsk2l1u_schwer_1",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort passt am besten? Die Katze ___ leise ins Zimmer.",
     "answers": [
      "rennt",
      "schleicht",
      "stampft",
      "hüpft laut"
     ],
     "correct": 1,
     "explanation": "leise → schleichen.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐈</text></svg>"
    },
    {
     "id": "wsk2l1u_schwer_2",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist das Gegenteil von 'öffnen'?",
     "answers": [
      "aufmachen",
      "ziehen",
      "schließen",
      "drücken"
     ],
     "correct": 2,
     "explanation": "öffnen – schließen.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚪</text></svg>"
    },
    {
     "id": "wsk2l1u_schwer_3",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort ist stärker als 'gut'?",
     "answers": [
      "schlecht",
      "geht so",
      "super",
      "mittel"
     ],
     "correct": 2,
     "explanation": "Steigerung im Wortfeld.",
     "topic": "wortschatz"
    },
    {
     "id": "wsk2l1u_schwer_4",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist das Gegenteil von 'gewinnen'?",
     "answers": [
      "spielen",
      "siegen",
      "verlieren",
      "finden"
     ],
     "correct": 2,
     "explanation": "gewinnen – verlieren.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏆</text></svg>"
    },
    {
     "id": "wsk2l1u_schwer_5",
     "category": "kurs_ws_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort gehört zum Wortfeld 'schauen'?",
     "answers": [
      "hören",
      "riechen",
      "beobachten",
      "schmecken"
     ],
     "correct": 2,
     "explanation": "Mit den Augen.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👀</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "wsk2l1_test_1",
    "category": "kurs_ws_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Gegenteil von 'alt'?",
    "answers": [
     "müde",
     "groß",
     "laut",
     "jung oder neu"
    ],
    "correct": 3,
    "explanation": "alt – jung/neu.",
    "topic": "wortschatz"
   },
   {
    "id": "wsk2l1_test_2",
    "category": "kurs_ws_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Gegenteil von 'hell'?",
    "answers": [
     "dunkel",
     "weiß",
     "bunt",
     "hoch"
    ],
    "correct": 0,
    "explanation": "hell – dunkel.",
    "topic": "wortschatz",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌑</text></svg>"
   },
   {
    "id": "wsk2l1_test_3",
    "category": "kurs_ws_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort gehört zum Wortfeld 'gehen'?",
    "answers": [
     "trinken",
     "schlafen",
     "rechnen",
     "schlendern"
    ],
    "correct": 3,
    "explanation": "Fortbewegung.",
    "topic": "wortschatz"
   },
   {
    "id": "wsk2l1_test_4",
    "category": "kurs_ws_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Gegenteil von 'oben'?",
    "answers": [
     "innen",
     "vorne",
     "unten",
     "links"
    ],
    "correct": 2,
    "explanation": "oben – unten.",
    "topic": "wortschatz"
   },
   {
    "id": "wsk2l1_test_5",
    "category": "kurs_ws_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort gehört NICHT zum Wortfeld 'sagen'?",
    "answers": [
     "lesen",
     "rufen",
     "erzählen",
     "antworten"
    ],
    "correct": 0,
    "explanation": "lesen ≠ sprechen.",
    "topic": "wortschatz"
   },
   {
    "id": "wsk2l1_test_6",
    "category": "kurs_ws_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Gegenteil von 'laut'?",
    "answers": [
     "leise",
     "schnell",
     "hoch",
     "schön"
    ],
    "correct": 0,
    "explanation": "laut – leise.",
    "topic": "wortschatz",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔇</text></svg>"
   },
   {
    "id": "wsk2l1_test_7",
    "category": "kurs_ws_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort passt? Der Hund ___ laut.",
    "answers": [
     "bellt",
     "miaut",
     "zwitschert",
     "flüstert"
    ],
    "correct": 0,
    "explanation": "Hund → bellen.",
    "topic": "wortschatz",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐶</text></svg>"
   },
   {
    "id": "wsk2l1_test_8",
    "category": "kurs_ws_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Gegenteil von 'nass'?",
    "answers": [
     "kalt",
     "trocken",
     "feucht",
     "schmutzig"
    ],
    "correct": 1,
    "explanation": "nass – trocken.",
    "topic": "wortschatz"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "ws_k2_l2",
  "kurs": "wortschatz_k2",
  "order": 2,
  "icon": "✂️",
  "title": "Wörter trennen",
  "kurz": "Silbentrennung am Zeilenende",
  "erklaerung": {
   "intro": "Wenn ein Wort nicht mehr in die Zeile passt, <b>trennst</b> du es nach <b>Silben</b> – so wie du es klatschst: <b>Blu-me</b>, <b>Ta-sche</b>, <b>Fens-ter</b>. Einzelne Buchstaben am Anfang trennt man nicht ab (nicht: A-pfel). <b>ck</b> und <b>ch</b>, <b>sch</b> bleiben zusammen: <b>Zu-cker</b>, <b>la-chen</b>.",
   "merksatz": "Trennen wie klatschen. ck, ch, sch bleiben zusammen.",
   "beispiele": [
    "Blu-me · Ta-sche · Fens-ter",
    "Zu-cker · la-chen · Fla-sche",
    "Schmet-ter-ling – drei Silben"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "wsk2l2u_leicht_1",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie trennt man 'Blume'?",
     "answers": [
      "Bl-ume",
      "Blum-e",
      "B-lume",
      "Blu-me"
     ],
     "correct": 3,
     "explanation": "Wie klatschen.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌸</text></svg>"
    },
    {
     "id": "wsk2l2u_leicht_2",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele Silben hat 'Tasche'?",
     "answers": [
      "1",
      "2",
      "3",
      "4"
     ],
     "correct": 1,
     "explanation": "Ta-sche.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👜</text></svg>"
    },
    {
     "id": "wsk2l2u_leicht_3",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie trennt man 'Sonne'?",
     "answers": [
      "So-nne",
      "Sonn-e",
      "S-onne",
      "Son-ne"
     ],
     "correct": 3,
     "explanation": "Doppelter Mitlaut wird getrennt.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
    },
    {
     "id": "wsk2l2u_leicht_4",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele Silben hat 'Banane'?",
     "answers": [
      "3",
      "2",
      "4",
      "1"
     ],
     "correct": 0,
     "explanation": "Ba-na-ne.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍌</text></svg>"
    },
    {
     "id": "wsk2l2u_leicht_5",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie trennt man 'Hase'?",
     "answers": [
      "Ha-se",
      "H-ase",
      "Has-e",
      "Hase (gar nicht)"
     ],
     "correct": 0,
     "explanation": "Ha-se.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐰</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "wsk2l2u_mittel_1",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie trennt man 'Zucker'?",
     "answers": [
      "Zuck-er",
      "Zu-cker",
      "Zuc-ker",
      "Z-ucker"
     ],
     "correct": 1,
     "explanation": "ck bleibt zusammen.",
     "topic": "wortschatz"
    },
    {
     "id": "wsk2l2u_mittel_2",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie trennt man 'Fenster'?",
     "answers": [
      "Fen-ster",
      "Fens-ter",
      "Fenst-er",
      "F-enster"
     ],
     "correct": 1,
     "explanation": "Fens-ter.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪟</text></svg>"
    },
    {
     "id": "wsk2l2u_mittel_3",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie trennt man 'lachen'?",
     "answers": [
      "lac-hen",
      "lach-en",
      "l-achen",
      "la-chen"
     ],
     "correct": 3,
     "explanation": "ch bleibt zusammen.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😄</text></svg>"
    },
    {
     "id": "wsk2l2u_mittel_4",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Silben hat 'Schmetterling'?",
     "answers": [
      "2",
      "4",
      "3",
      "5"
     ],
     "correct": 2,
     "explanation": "Schmet-ter-ling.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦋</text></svg>"
    },
    {
     "id": "wsk2l2u_mittel_5",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie trennt man 'Flasche'?",
     "answers": [
      "Flas-che",
      "Flasch-e",
      "F-lasche",
      "Fla-sche"
     ],
     "correct": 3,
     "explanation": "sch bleibt zusammen.",
     "topic": "wortschatz"
    }
   ],
   "schwer": [
    {
     "id": "wsk2l2u_schwer_1",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort kann man NICHT trennen?",
     "answers": [
      "Bälle",
      "Ball",
      "Tasse",
      "Kerze"
     ],
     "correct": 1,
     "explanation": "Nur eine Silbe.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
    },
    {
     "id": "wsk2l2u_schwer_2",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie trennt man 'Apfel'?",
     "answers": [
      "A-pfel",
      "Apf-el",
      "Ap-f-el",
      "Ap-fel"
     ],
     "correct": 3,
     "explanation": "Einzelne Buchstaben nicht abtrennen.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍎</text></svg>"
    },
    {
     "id": "wsk2l2u_schwer_3",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie trennt man 'Krokodil'?",
     "answers": [
      "Kro-ko-dil",
      "Krok-o-dil",
      "Kro-kod-il",
      "K-ro-ko-dil"
     ],
     "correct": 0,
     "explanation": "Drei Silben.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐊</text></svg>"
    },
    {
     "id": "wsk2l2u_schwer_4",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie trennt man 'Socke'?",
     "answers": [
      "Sock-e",
      "So-cke",
      "Soc-ke",
      "S-ocke"
     ],
     "correct": 1,
     "explanation": "ck zusammen.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧦</text></svg>"
    },
    {
     "id": "wsk2l2u_schwer_5",
     "category": "kurs_ws_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Silben hat 'Regenschirm'?",
     "answers": [
      "2",
      "3",
      "4",
      "5"
     ],
     "correct": 1,
     "explanation": "Re-gen-schirm.",
     "topic": "wortschatz",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☂️</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "wsk2l2_test_1",
    "category": "kurs_ws_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie trennt man 'Katze'?",
    "answers": [
     "Kat-ze",
     "Ka-tze",
     "Katz-e",
     "K-atze"
    ],
    "correct": 0,
    "explanation": "Kat-ze.",
    "topic": "wortschatz",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐱</text></svg>"
   },
   {
    "id": "wsk2l2_test_2",
    "category": "kurs_ws_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Silben hat 'Elefant'?",
    "answers": [
     "2",
     "4",
     "3",
     "1"
    ],
    "correct": 2,
    "explanation": "E-le-fant.",
    "topic": "wortschatz",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐘</text></svg>"
   },
   {
    "id": "wsk2l2_test_3",
    "category": "kurs_ws_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie trennt man 'Hecke'?",
    "answers": [
     "Hec-ke",
     "Heck-e",
     "He-cke",
     "H-ecke"
    ],
    "correct": 2,
    "explanation": "ck zusammen.",
    "topic": "wortschatz"
   },
   {
    "id": "wsk2l2_test_4",
    "category": "kurs_ws_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort hat nur eine Silbe?",
    "answers": [
     "Hund",
     "Hunde",
     "Hase",
     "Tiger"
    ],
    "correct": 0,
    "explanation": "Hund.",
    "topic": "wortschatz"
   },
   {
    "id": "wsk2l2_test_5",
    "category": "kurs_ws_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie trennt man 'Tasse'?",
    "answers": [
     "Ta-sse",
     "Tas-se",
     "Tass-e",
     "T-asse"
    ],
    "correct": 1,
    "explanation": "Tas-se.",
    "topic": "wortschatz",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☕</text></svg>"
   },
   {
    "id": "wsk2l2_test_6",
    "category": "kurs_ws_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie trennt man 'Kuchen'?",
    "answers": [
     "Kuc-hen",
     "Kuch-en",
     "Ku-chen",
     "K-uchen"
    ],
    "correct": 2,
    "explanation": "ch zusammen.",
    "topic": "wortschatz",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍰</text></svg>"
   },
   {
    "id": "wsk2l2_test_7",
    "category": "kurs_ws_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Silben hat 'Tomate'?",
    "answers": [
     "3",
     "2",
     "4",
     "1"
    ],
    "correct": 0,
    "explanation": "To-ma-te.",
    "topic": "wortschatz",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍅</text></svg>"
   },
   {
    "id": "wsk2l2_test_8",
    "category": "kurs_ws_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie trennt man 'Garten'?",
    "answers": [
     "Gar-ten",
     "Ga-rten",
     "Gart-en",
     "G-arten"
    ],
    "correct": 0,
    "explanation": "Gar-ten.",
    "topic": "wortschatz",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌻</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "vb_k3_l1",
  "kurs": "verben_k3",
  "order": 1,
  "icon": "🏃",
  "title": "Personalformen",
  "kurz": "ich gehe, du gehst, er geht",
  "erklaerung": {
   "intro": "Verben verändern sich je nach Person – man sagt <b>beugen</b> oder <b>konjugieren</b>. Die <b>Grundform</b> steht im Wörterbuch: <b>gehen</b>. Die <b>Personalformen</b>: ich geh<b>e</b>, du geh<b>st</b>, er/sie/es geh<b>t</b>, wir geh<b>en</b>, ihr geh<b>t</b>, sie geh<b>en</b>.",
   "merksatz": "ich -e, du -st, er -t, wir -en, ihr -t, sie -en.",
   "beispiele": [
    "ich spiele · du spielst · er spielt",
    "wir spielen · ihr spielt · sie spielen",
    "Grundform: spielen"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "vbk3l1u_leicht_1",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passt? 'ich ___' (spielen)",
     "answers": [
      "spielst",
      "spielt",
      "spiele",
      "spielen"
     ],
     "correct": 2,
     "explanation": "ich → -e.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
    },
    {
     "id": "vbk3l1u_leicht_2",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passt? 'du ___' (lachen)",
     "answers": [
      "lache",
      "lachst",
      "lacht",
      "lachen"
     ],
     "correct": 1,
     "explanation": "du → -st.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😄</text></svg>"
    },
    {
     "id": "vbk3l1u_leicht_3",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passt? 'er ___' (malen)",
     "answers": [
      "malt",
      "male",
      "malst",
      "malen"
     ],
     "correct": 0,
     "explanation": "er → -t.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎨</text></svg>"
    },
    {
     "id": "vbk3l1u_leicht_4",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passt? 'wir ___' (singen)",
     "answers": [
      "singe",
      "singen",
      "singst",
      "singt"
     ],
     "correct": 1,
     "explanation": "wir → -en.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎤</text></svg>"
    },
    {
     "id": "vbk3l1u_leicht_5",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist die Grundform von 'du kochst'?",
     "answers": [
      "kochen",
      "koche",
      "kocht",
      "kochst"
     ],
     "correct": 0,
     "explanation": "Grundform endet auf -en.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍳</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "vbk3l1u_mittel_1",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'ihr ___' (lernen)",
     "answers": [
      "lernen",
      "lernt",
      "lernst",
      "lerne"
     ],
     "correct": 1,
     "explanation": "ihr → -t.",
     "topic": "verben_beugen"
    },
    {
     "id": "vbk3l1u_mittel_2",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'sie (viele) ___' (tanzen)",
     "answers": [
      "tanzt",
      "tanzst",
      "tanze",
      "tanzen"
     ],
     "correct": 3,
     "explanation": "sie (Mehrzahl) → -en.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💃</text></svg>"
    },
    {
     "id": "vbk3l1u_mittel_3",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist die Grundform von 'er schwimmt'?",
     "answers": [
      "schwimmt",
      "schwamm",
      "schwimme",
      "schwimmen"
     ],
     "correct": 3,
     "explanation": "Grundform.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏊</text></svg>"
    },
    {
     "id": "vbk3l1u_mittel_4",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Personalform passt? '___ hüpfst.'",
     "answers": [
      "du",
      "ich",
      "er",
      "wir"
     ],
     "correct": 0,
     "explanation": "-st → du.",
     "topic": "verben_beugen"
    },
    {
     "id": "vbk3l1u_mittel_5",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passt? 'es ___' (regnen)",
     "answers": [
      "regnet",
      "regnt",
      "regnen",
      "regnest"
     ],
     "correct": 0,
     "explanation": "es → -et.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌧️</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "vbk3l1u_schwer_1",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was passt? 'du ___' (lesen)",
     "answers": [
      "lest",
      "lesst",
      "liest",
      "lese"
     ],
     "correct": 2,
     "explanation": "e wird zu ie.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📖</text></svg>"
    },
    {
     "id": "vbk3l1u_schwer_2",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was passt? 'er ___' (fahren)",
     "answers": [
      "fährt",
      "fahrt",
      "fahrst",
      "fährst"
     ],
     "correct": 0,
     "explanation": "a wird zu ä.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚗</text></svg>"
    },
    {
     "id": "vbk3l1u_schwer_3",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was passt? 'ich ___' (sein)",
     "answers": [
      "bist",
      "ist",
      "bin",
      "sind"
     ],
     "correct": 2,
     "explanation": "Unregelmäßig.",
     "topic": "verben_beugen"
    },
    {
     "id": "vbk3l1u_schwer_4",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was passt? 'du ___' (haben)",
     "answers": [
      "hast",
      "habst",
      "hat",
      "habe"
     ],
     "correct": 0,
     "explanation": "Unregelmäßig.",
     "topic": "verben_beugen"
    },
    {
     "id": "vbk3l1u_schwer_5",
     "category": "kurs_vb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist die Grundform von 'sie isst'?",
     "answers": [
      "isst",
      "aß",
      "esse",
      "essen"
     ],
     "correct": 3,
     "explanation": "Grundform.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍝</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "vbk3l1_test_1",
    "category": "kurs_vb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was passt? 'ich ___' (rufen)",
    "answers": [
     "rufe",
     "rufst",
     "ruft",
     "rufen"
    ],
    "correct": 0,
    "explanation": "-e.",
    "topic": "verben_beugen"
   },
   {
    "id": "vbk3l1_test_2",
    "category": "kurs_vb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was passt? 'du ___' (bauen)",
    "answers": [
     "baue",
     "baut",
     "baust",
     "bauen"
    ],
    "correct": 2,
    "explanation": "-st.",
    "topic": "verben_beugen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧱</text></svg>"
   },
   {
    "id": "vbk3l1_test_3",
    "category": "kurs_vb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was passt? 'sie (eine) ___' (lachen)",
    "answers": [
     "lachen",
     "lacht",
     "lachst",
     "lache"
    ],
    "correct": 1,
    "explanation": "sie (Einzahl) → -t.",
    "topic": "verben_beugen"
   },
   {
    "id": "vbk3l1_test_4",
    "category": "kurs_vb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was passt? 'wir ___' (spielen)",
    "answers": [
     "spielt",
     "spielen",
     "spielst",
     "spiele"
    ],
    "correct": 1,
    "explanation": "-en.",
    "topic": "verben_beugen"
   },
   {
    "id": "vbk3l1_test_5",
    "category": "kurs_vb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was passt? 'ihr ___' (kommen)",
    "answers": [
     "kommen",
     "kommst",
     "komme",
     "kommt"
    ],
    "correct": 3,
    "explanation": "-t.",
    "topic": "verben_beugen"
   },
   {
    "id": "vbk3l1_test_6",
    "category": "kurs_vb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Grundform von 'er rennt'?",
    "answers": [
     "rennt",
     "rannte",
     "renne",
     "rennen"
    ],
    "correct": 3,
    "explanation": "-en.",
    "topic": "verben_beugen"
   },
   {
    "id": "vbk3l1_test_7",
    "category": "kurs_vb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was passt? 'er ___' (sein)",
    "answers": [
     "bin",
     "bist",
     "ist",
     "sind"
    ],
    "correct": 2,
    "explanation": "Unregelmäßig.",
    "topic": "verben_beugen"
   },
   {
    "id": "vbk3l1_test_8",
    "category": "kurs_vb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was passt? 'du ___' (geben)",
    "answers": [
     "gebst",
     "gibt",
     "gibst",
     "gebe"
    ],
    "correct": 2,
    "explanation": "e → i.",
    "topic": "verben_beugen"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "vb_k3_l2",
  "kurs": "verben_k3",
  "order": 2,
  "icon": "🔍",
  "title": "Personalform im Satz finden",
  "kurz": "Wer tut was?",
  "erklaerung": {
   "intro": "Im Satz steht das Verb in der <b>Personalform</b> – passend zum <b>Subjekt</b> (Wer?). <b>Die Kinder spielen.</b> → Wer spielt? Die Kinder (Mehrzahl) → spiel<b>en</b>. <b>Mia spielt.</b> → Mia (eine Person) → spiel<b>t</b>. Wenn Person und Verb nicht zusammenpassen, ist der Satz falsch: <i>Die Kinder spielt.</i> ✗",
   "merksatz": "Subjekt und Verb müssen zusammenpassen.",
   "beispiele": [
    "Mia spielt. (eine) – Die Kinder spielen. (viele)",
    "Ich lese. – Wir lesen.",
    "Falsch: Der Hund bellen. Richtig: Der Hund bellt."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "vbk3l2u_leicht_1",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Verb passt? 'Der Hund ___.'",
     "answers": [
      "bellt",
      "bellen",
      "bellst",
      "belle"
     ],
     "correct": 0,
     "explanation": "Ein Hund → -t.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐶</text></svg>"
    },
    {
     "id": "vbk3l2u_leicht_2",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Verb passt? 'Die Vögel ___.'",
     "answers": [
      "singt",
      "singst",
      "singen",
      "singe"
     ],
     "correct": 2,
     "explanation": "Viele → -en.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐦</text></svg>"
    },
    {
     "id": "vbk3l2u_leicht_3",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "Ich lese ein Buch.",
      "Ich liest ein Buch.",
      "Ich lesen ein Buch.",
      "Ich lest ein Buch."
     ],
     "correct": 0,
     "explanation": "ich → lese.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📖</text></svg>"
    },
    {
     "id": "vbk3l2u_leicht_4",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort ist das Verb? 'Tom malt ein Bild.'",
     "answers": [
      "Tom",
      "malt",
      "Bild",
      "ein"
     ],
     "correct": 1,
     "explanation": "Was tut Tom?",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎨</text></svg>"
    },
    {
     "id": "vbk3l2u_leicht_5",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Verb passt? 'Wir ___ nach Hause.'",
     "answers": [
      "geht",
      "gehst",
      "gehe",
      "gehen"
     ],
     "correct": 3,
     "explanation": "wir → -en.",
     "topic": "verben_beugen"
    }
   ],
   "mittel": [
    {
     "id": "vbk3l2u_mittel_1",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "Die Kinder lacht.",
      "Die Kinder lachst.",
      "Die Kinder lache.",
      "Die Kinder lachen."
     ],
     "correct": 3,
     "explanation": "Mehrzahl.",
     "topic": "verben_beugen"
    },
    {
     "id": "vbk3l2u_mittel_2",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Verb passt? 'Mama und Papa ___ Kaffee.'",
     "answers": [
      "trinken",
      "trinkt",
      "trinkst",
      "trinke"
     ],
     "correct": 0,
     "explanation": "Zwei Personen → -en.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☕</text></svg>"
    },
    {
     "id": "vbk3l2u_mittel_3",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Verb passt? 'Du ___ schnell.'",
     "answers": [
      "rennt",
      "rennen",
      "renne",
      "rennst"
     ],
     "correct": 3,
     "explanation": "du → -st.",
     "topic": "verben_beugen"
    },
    {
     "id": "vbk3l2u_mittel_4",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort ist das Verb? 'Morgen fahren wir ans Meer.'",
     "answers": [
      "fahren",
      "Morgen",
      "wir",
      "Meer"
     ],
     "correct": 0,
     "explanation": "Tunwort.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌊</text></svg>"
    },
    {
     "id": "vbk3l2u_mittel_5",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist falsch? 'Die Katze schlafen.'",
     "answers": [
      "Katze → Katzen",
      "Die → Der",
      "nichts",
      "schlafen → schläft"
     ],
     "correct": 3,
     "explanation": "Eine Katze schläft.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐱</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "vbk3l2u_schwer_1",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Verb passt? 'Lena und ich ___ Fußball.'",
     "answers": [
      "spielen",
      "spielt",
      "spiele",
      "spielst"
     ],
     "correct": 0,
     "explanation": "Lena und ich = wir.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
    },
    {
     "id": "vbk3l2u_schwer_2",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Verb passt? 'Ihr ___ zu laut.'",
     "answers": [
      "seid",
      "sind",
      "seit",
      "ist"
     ],
     "correct": 0,
     "explanation": "ihr seid.",
     "topic": "verben_beugen"
    },
    {
     "id": "vbk3l2u_schwer_3",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Verb passt? 'Jeder ___ ein Eis.'",
     "answers": [
      "bekommen",
      "bekommst",
      "bekomme",
      "bekommt"
     ],
     "correct": 3,
     "explanation": "jeder = eine Person.",
     "topic": "verben_beugen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍦</text></svg>"
    },
    {
     "id": "vbk3l2u_schwer_4",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort ist das Verb? 'Im Sommer schwimmen die Kinder im See.'",
     "answers": [
      "Sommer",
      "Kinder",
      "See",
      "schwimmen"
     ],
     "correct": 3,
     "explanation": "Tunwort.",
     "topic": "verben_beugen"
    },
    {
     "id": "vbk3l2u_schwer_5",
     "category": "kurs_vb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie heißt die Personalform? 'du' + 'wissen'",
     "answers": [
      "wisst",
      "weißt",
      "wissst",
      "weiß"
     ],
     "correct": 1,
     "explanation": "du weißt.",
     "topic": "verben_beugen"
    }
   ]
  },
  "test": [
   {
    "id": "vbk3l2_test_1",
    "category": "kurs_vb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Verb passt? 'Die Sonne ___.'",
    "answers": [
     "scheinen",
     "scheinst",
     "scheine",
     "scheint"
    ],
    "correct": 3,
    "explanation": "Eine Sonne.",
    "topic": "verben_beugen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
   },
   {
    "id": "vbk3l2_test_2",
    "category": "kurs_vb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Verb passt? 'Die Blumen ___.'",
    "answers": [
     "blühen",
     "blüht",
     "blühst",
     "blühe"
    ],
    "correct": 0,
    "explanation": "Viele.",
    "topic": "verben_beugen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌷</text></svg>"
   },
   {
    "id": "vbk3l2_test_3",
    "category": "kurs_vb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz ist richtig?",
    "answers": [
     "Wir backt einen Kuchen.",
     "Wir backst einen Kuchen.",
     "Wir backe einen Kuchen.",
     "Wir backen einen Kuchen."
    ],
    "correct": 3,
    "explanation": "-en.",
    "topic": "verben_beugen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎂</text></svg>"
   },
   {
    "id": "vbk3l2_test_4",
    "category": "kurs_vb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort ist das Verb? 'Ben schreibt einen Brief.'",
    "answers": [
     "Ben",
     "Brief",
     "schreibt",
     "einen"
    ],
    "correct": 2,
    "explanation": "Tunwort.",
    "topic": "verben_beugen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>✉️</text></svg>"
   },
   {
    "id": "vbk3l2_test_5",
    "category": "kurs_vb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Verb passt? 'Du ___ mir.'",
    "answers": [
     "helfst",
     "hilft",
     "hilfst",
     "helfen"
    ],
    "correct": 2,
    "explanation": "e → i.",
    "topic": "verben_beugen"
   },
   {
    "id": "vbk3l2_test_6",
    "category": "kurs_vb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist falsch? 'Die Kinder rennt.'",
    "answers": [
     "Kinder → Kind",
     "Die → Der",
     "rennt → rennen",
     "nichts"
    ],
    "correct": 2,
    "explanation": "Mehrzahl.",
    "topic": "verben_beugen"
   },
   {
    "id": "vbk3l2_test_7",
    "category": "kurs_vb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Verb passt? 'Oma ___ einen Pulli.'",
    "answers": [
     "stricken",
     "strickst",
     "strickt",
     "stricke"
    ],
    "correct": 2,
    "explanation": "Eine Person.",
    "topic": "verben_beugen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧶</text></svg>"
   },
   {
    "id": "vbk3l2_test_8",
    "category": "kurs_vb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Verb passt? 'Ihr ___ toll.'",
    "answers": [
     "tanzen",
     "tanzst",
     "tanze",
     "tanzt"
    ],
    "correct": 3,
    "explanation": "ihr → -t.",
    "topic": "verben_beugen"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "br_k4_l1",
  "kurs": "brief_k4",
  "order": 1,
  "icon": "✉️",
  "title": "Einen Brief schreiben",
  "kurz": "Ort, Datum, Anrede, Gruß",
  "erklaerung": {
   "intro": "Ein Brief hat einen festen Aufbau: oben rechts <b>Ort und Datum</b>, dann die <b>Anrede</b> mit Komma (<b>Liebe Oma,</b> / <b>Sehr geehrte Frau Meier,</b>), danach geht es <b>klein</b> weiter (wenn kein Nomen folgt). Dann der <b>Hauptteil</b>, am Ende der <b>Gruß</b> (Viele Grüße / Mit freundlichen Grüßen) und die <b>Unterschrift</b>.",
   "merksatz": "Ort/Datum – Anrede, – Text – Gruß – Unterschrift.",
   "beispiele": [
    "Kamp-Lintfort, 28.11.2026",
    "Liebe Oma, / Sehr geehrte Frau Meier,",
    "Viele Grüße / Mit freundlichen Grüßen – Unterschrift"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "brk4l1u_leicht_1",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was steht oben rechts im Brief?",
     "answers": [
      "Ort und Datum",
      "die Unterschrift",
      "der Gruß",
      "die Briefmarke"
     ],
     "correct": 0,
     "explanation": "Ort, Datum.",
     "topic": "brief",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📅</text></svg>"
    },
    {
     "id": "brk4l1u_leicht_2",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Anrede passt für Oma?",
     "answers": [
      "Sehr geehrte Oma,",
      "Liebe Oma,",
      "Hey Oma!",
      "Oma."
     ],
     "correct": 1,
     "explanation": "Persönlicher Brief.",
     "topic": "brief",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👵</text></svg>"
    },
    {
     "id": "brk4l1u_leicht_3",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Zeichen steht nach der Anrede?",
     "answers": [
      "ein Punkt",
      "ein Komma",
      "ein Fragezeichen",
      "nichts"
     ],
     "correct": 1,
     "explanation": "Liebe Oma,",
     "topic": "brief"
    },
    {
     "id": "brk4l1u_leicht_4",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was steht ganz am Ende?",
     "answers": [
      "das Datum",
      "die Unterschrift",
      "die Anrede",
      "die Adresse"
     ],
     "correct": 1,
     "explanation": "Unterschrift.",
     "topic": "brief",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>✍️</text></svg>"
    },
    {
     "id": "brk4l1u_leicht_5",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Gruß passt an Freunde?",
     "answers": [
      "Mit freundlichen Grüßen, hochachtungsvoll",
      "Sehr geehrte",
      "Viele Grüße",
      "Guten Tag"
     ],
     "correct": 2,
     "explanation": "Persönlich.",
     "topic": "brief"
    }
   ],
   "mittel": [
    {
     "id": "brk4l1u_mittel_1",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Anrede passt für die Schulleiterin?",
     "answers": [
      "Liebe Schmidti,",
      "Hallo du,",
      "Sehr geehrte Frau Schmidt,",
      "Hey Frau Schmidt!"
     ],
     "correct": 2,
     "explanation": "Förmlich.",
     "topic": "brief"
    },
    {
     "id": "brk4l1u_mittel_2",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie geht es nach 'Liebe Oma,' weiter?",
     "answers": [
      "klein (z. B. 'wie geht es dir?')",
      "immer groß",
      "mit Punkt",
      "gar nicht"
     ],
     "correct": 0,
     "explanation": "Nach Komma klein.",
     "topic": "brief"
    },
    {
     "id": "brk4l1u_mittel_3",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Gruß passt in einen förmlichen Brief?",
     "answers": [
      "Mit freundlichen Grüßen",
      "Hab dich lieb",
      "Tschüssi",
      "Bussi"
     ],
     "correct": 0,
     "explanation": "Förmlich.",
     "topic": "brief"
    },
    {
     "id": "brk4l1u_mittel_4",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man das Datum richtig?",
     "answers": [
      "28-11",
      "28.11.2026",
      "November",
      "2026.11.28.28"
     ],
     "correct": 1,
     "explanation": "Tag.Monat.Jahr.",
     "topic": "brief"
    },
    {
     "id": "brk4l1u_mittel_5",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was gehört in den Hauptteil?",
     "answers": [
      "nur die Anrede",
      "nur die Unterschrift",
      "die Briefmarke",
      "das, was du mitteilen willst"
     ],
     "correct": 3,
     "explanation": "Inhalt.",
     "topic": "brief"
    }
   ],
   "schwer": [
    {
     "id": "brk4l1u_schwer_1",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Reihenfolge stimmt?",
     "answers": [
      "Gruß – Text – Anrede – Datum",
      "Text – Anrede – Unterschrift – Gruß",
      "Anrede – Unterschrift – Text – Datum",
      "Ort/Datum – Anrede – Text – Gruß – Unterschrift"
     ],
     "correct": 3,
     "explanation": "Aufbau.",
     "topic": "brief"
    },
    {
     "id": "brk4l1u_schwer_2",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Anrede passt für einen Mann, den du nicht kennst?",
     "answers": [
      "Sehr geehrte Herr Klein,",
      "Lieber Herr,",
      "Hallo Klein,",
      "Sehr geehrter Herr Klein,"
     ],
     "correct": 3,
     "explanation": "geehrter für Herr.",
     "topic": "brief"
    },
    {
     "id": "brk4l1u_schwer_3",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was steht auf dem Briefumschlag unten rechts?",
     "answers": [
      "deine Unterschrift",
      "die Adresse des Empfängers",
      "der Gruß",
      "das Datum"
     ],
     "correct": 1,
     "explanation": "Empfänger.",
     "topic": "brief",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📮</text></svg>"
    },
    {
     "id": "brk4l1u_schwer_4",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wo klebt die Briefmarke?",
     "answers": [
      "oben rechts auf dem Umschlag",
      "unten links",
      "im Brief",
      "hinten"
     ],
     "correct": 0,
     "explanation": "Oben rechts.",
     "topic": "brief",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📮</text></svg>"
    },
    {
     "id": "brk4l1u_schwer_5",
     "category": "kurs_br_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist richtig?",
     "answers": [
      "Liebe Lena. Wie war dein Urlaub?",
      "Liebe Lena wie war dein Urlaub?",
      "Liebe Lena, Wie war dein Urlaub?",
      "Liebe Lena, wie war dein Urlaub?"
     ],
     "correct": 3,
     "explanation": "Komma, dann klein.",
     "topic": "brief"
    }
   ]
  },
  "test": [
   {
    "id": "brk4l1_test_1",
    "category": "kurs_br_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was steht oben rechts?",
    "answers": [
     "Gruß",
     "Ort und Datum",
     "Unterschrift",
     "Anrede"
    ],
    "correct": 1,
    "explanation": "Ort, Datum.",
    "topic": "brief"
   },
   {
    "id": "brk4l1_test_2",
    "category": "kurs_br_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Zeichen kommt nach der Anrede?",
    "answers": [
     "Komma",
     "Punkt",
     "Doppelpunkt",
     "Ausrufezeichen"
    ],
    "correct": 0,
    "explanation": "Komma.",
    "topic": "brief"
   },
   {
    "id": "brk4l1_test_3",
    "category": "kurs_br_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Anrede ist förmlich?",
    "answers": [
     "Sehr geehrte Frau Meier,",
     "Liebe Tante,",
     "Hi Lisa,",
     "Hallo Ben,"
    ],
    "correct": 0,
    "explanation": "Förmlich.",
    "topic": "brief"
   },
   {
    "id": "brk4l1_test_4",
    "category": "kurs_br_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Gruß ist förmlich?",
    "answers": [
     "Mit freundlichen Grüßen",
     "Bis bald",
     "Viele Küsse",
     "Tschüss"
    ],
    "correct": 0,
    "explanation": "Förmlich.",
    "topic": "brief"
   },
   {
    "id": "brk4l1_test_5",
    "category": "kurs_br_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was steht ganz unten?",
    "answers": [
     "das Datum",
     "der Ort",
     "die Briefmarke",
     "die Unterschrift"
    ],
    "correct": 3,
    "explanation": "Unterschrift.",
    "topic": "brief"
   },
   {
    "id": "brk4l1_test_6",
    "category": "kurs_br_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie geht es nach der Anrede weiter?",
    "answers": [
     "groß",
     "mit Punkt",
     "mit Datum",
     "klein"
    ],
    "correct": 3,
    "explanation": "Klein.",
    "topic": "brief"
   },
   {
    "id": "brk4l1_test_7",
    "category": "kurs_br_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wo steht die Adresse des Empfängers?",
    "answers": [
     "im Gruß",
     "in der Anrede",
     "auf dem Umschlag",
     "nirgends"
    ],
    "correct": 2,
    "explanation": "Umschlag.",
    "topic": "brief",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>✉️</text></svg>"
   },
   {
    "id": "brk4l1_test_8",
    "category": "kurs_br_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Anrede passt für deinen Freund?",
    "answers": [
     "Sehr geehrter Tim,",
     "Lieber Tim,",
     "Herr Tim,",
     "Tim."
    ],
    "correct": 1,
    "explanation": "Persönlich.",
    "topic": "brief"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "br_k4_l2",
  "kurs": "brief_k4",
  "order": 2,
  "icon": "📧",
  "title": "E-Mail und Höflichkeit",
  "kurz": "Betreff, Sie/Ihnen groß",
  "erklaerung": {
   "intro": "Eine <b>E-Mail</b> braucht eine <b>Adresse</b> und einen <b>Betreff</b> (worum es geht). Anrede und Gruß wie im Brief. Wenn du jemanden <b>siezt</b>, schreibst du <b>Sie, Ihnen, Ihr</b> immer <b>groß</b>: „Können <b>Sie</b> mir helfen?“ <b>du/dich/dein</b> darf man klein schreiben.",
   "merksatz": "Betreff nicht vergessen – Sie, Ihnen, Ihr groß!",
   "beispiele": [
    "Betreff: Einladung zum Geburtstag",
    "Sehr geehrter Herr Klein, können Sie mir helfen?",
    "Ich danke Ihnen."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "brk4l2u_leicht_1",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was beschreibt der Betreff einer E-Mail?",
     "answers": [
      "wer sie schreibt",
      "das Wetter",
      "die Uhrzeit",
      "worum es geht"
     ],
     "correct": 3,
     "explanation": "Thema.",
     "topic": "brief",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📧</text></svg>"
    },
    {
     "id": "brk4l2u_leicht_2",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man 'Sie' in der höflichen Anrede?",
     "answers": [
      "klein",
      "fett",
      "groß",
      "gar nicht"
     ],
     "correct": 2,
     "explanation": "Sie groß.",
     "topic": "brief"
    },
    {
     "id": "brk4l2u_leicht_3",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was braucht eine E-Mail unbedingt?",
     "answers": [
      "eine Briefmarke",
      "eine E-Mail-Adresse",
      "einen Umschlag",
      "einen Stempel"
     ],
     "correct": 1,
     "explanation": "Adresse.",
     "topic": "brief"
    },
    {
     "id": "brk4l2u_leicht_4",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Betreff passt zu einer Einladung?",
     "answers": [
      "Hallo",
      "Einladung zum Geburtstag",
      "Wichtig!!!",
      "Frage"
     ],
     "correct": 1,
     "explanation": "Genau benennen.",
     "topic": "brief",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎂</text></svg>"
    },
    {
     "id": "brk4l2u_leicht_5",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Zeichen gehört in jede E-Mail-Adresse?",
     "answers": [
      "#",
      "&",
      "§",
      "@"
     ],
     "correct": 3,
     "explanation": "Das 'at'-Zeichen.",
     "topic": "brief"
    }
   ],
   "mittel": [
    {
     "id": "brk4l2u_mittel_1",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist richtig?",
     "answers": [
      "Können sie mir helfen?",
      "Können Sie mir helfen?",
      "können Sie mir helfen?",
      "Können SIE mir helfen?"
     ],
     "correct": 1,
     "explanation": "Höflich: Sie groß.",
     "topic": "brief"
    },
    {
     "id": "brk4l2u_mittel_2",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist richtig?",
     "answers": [
      "Ich danke ihnen.",
      "Ich danke Ihr.",
      "ich danke ihnen.",
      "Ich danke Ihnen."
     ],
     "correct": 3,
     "explanation": "Ihnen groß.",
     "topic": "brief"
    },
    {
     "id": "brk4l2u_mittel_3",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist richtig?",
     "answers": [
      "Wie geht es Dich?",
      "Wie geht es dir?",
      "Wie geht es dich?",
      "wie geht es Dir"
     ],
     "correct": 1,
     "explanation": "dir (klein erlaubt).",
     "topic": "brief"
    },
    {
     "id": "brk4l2u_mittel_4",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wem schreibst du förmlich?",
     "answers": [
      "deinem Bruder",
      "deiner Freundin",
      "der Lehrerin",
      "deinem Opa"
     ],
     "correct": 2,
     "explanation": "Förmlich.",
     "topic": "brief"
    },
    {
     "id": "brk4l2u_mittel_5",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was gehört in eine Einladung?",
     "answers": [
      "Wann, wo und was gefeiert wird",
      "nur der Name",
      "nur das Wetter",
      "gar nichts"
     ],
     "correct": 0,
     "explanation": "Die wichtigen Infos.",
     "topic": "brief",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎉</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "brk4l2u_schwer_1",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist ganz richtig?",
     "answers": [
      "Sehr geehrte Frau Lang, vielen Dank für Ihre Hilfe.",
      "Sehr geehrte Frau Lang, Vielen Dank für ihre Hilfe.",
      "Sehr geehrte Frau Lang vielen dank für Ihre Hilfe.",
      "sehr geehrte Frau Lang, vielen Dank für ihre Hilfe."
     ],
     "correct": 0,
     "explanation": "Komma, klein, Ihre groß.",
     "topic": "brief"
    },
    {
     "id": "brk4l2u_schwer_2",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum schreibt man 'sie' in 'Mia sagt, sie kommt' klein?",
     "answers": [
      "Weil es kurz ist.",
      "Es meint Mia, keine höfliche Anrede.",
      "Weil es am Ende steht.",
      "Das ist falsch."
     ],
     "correct": 1,
     "explanation": "sie = Mia.",
     "topic": "brief"
    },
    {
     "id": "brk4l2u_schwer_3",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was solltest du NICHT in eine E-Mail an Fremde schreiben?",
     "answers": [
      "deine Adresse und dein Passwort",
      "einen Betreff",
      "eine Anrede",
      "einen Gruß"
     ],
     "correct": 0,
     "explanation": "Datenschutz.",
     "topic": "brief",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔒</text></svg>"
    },
    {
     "id": "brk4l2u_schwer_4",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was bedeutet 'CC' bei einer E-Mail?",
     "answers": [
      "eine Kopie an weitere Personen",
      "Löschen",
      "Spam",
      "Anhang"
     ],
     "correct": 0,
     "explanation": "Kopie.",
     "topic": "brief"
    },
    {
     "id": "brk4l2u_schwer_5",
     "category": "kurs_br_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein Anhang?",
     "answers": [
      "eine Datei, die mitgeschickt wird",
      "der Betreff",
      "die Unterschrift",
      "die Anrede"
     ],
     "correct": 0,
     "explanation": "z. B. ein Foto.",
     "topic": "brief",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📎</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "brk4l2_test_1",
    "category": "kurs_br_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist ein Betreff?",
    "answers": [
     "der Gruß",
     "die Unterschrift",
     "das Thema der E-Mail",
     "die Adresse"
    ],
    "correct": 2,
    "explanation": "Thema.",
    "topic": "brief"
   },
   {
    "id": "brk4l2_test_2",
    "category": "kurs_br_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man höflich 'Ihnen'?",
    "answers": [
     "groß",
     "klein",
     "gar nicht",
     "mit Bindestrich"
    ],
    "correct": 0,
    "explanation": "Groß.",
    "topic": "brief"
   },
   {
    "id": "brk4l2_test_3",
    "category": "kurs_br_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist richtig?",
    "answers": [
     "Haben sie Zeit?",
     "Haben Sie Zeit?",
     "haben Sie Zeit?",
     "Haben SIE Zeit?"
    ],
    "correct": 1,
    "explanation": "Sie groß.",
    "topic": "brief"
   },
   {
    "id": "brk4l2_test_4",
    "category": "kurs_br_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Zeichen steht in E-Mail-Adressen?",
    "answers": [
     "#",
     "%",
     "€",
     "@"
    ],
    "correct": 3,
    "explanation": "@.",
    "topic": "brief"
   },
   {
    "id": "brk4l2_test_5",
    "category": "kurs_br_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist ein Anhang?",
    "answers": [
     "der Betreff",
     "die Anrede",
     "eine mitgeschickte Datei",
     "der Gruß"
    ],
    "correct": 2,
    "explanation": "Datei.",
    "topic": "brief",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📎</text></svg>"
   },
   {
    "id": "brk4l2_test_6",
    "category": "kurs_br_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Betreff ist gut?",
    "answers": [
     "Hallo!!!",
     "?",
     "dringend dringend",
     "Frage zu den Hausaufgaben"
    ],
    "correct": 3,
    "explanation": "Genau.",
    "topic": "brief"
   },
   {
    "id": "brk4l2_test_7",
    "category": "kurs_br_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist richtig?",
    "answers": [
     "Vielen Dank für ihre Antwort.",
     "vielen dank für Ihre Antwort",
     "Vielen Dank für Ihre Antwort.",
     "Vielen Dank für Ihr Antwort."
    ],
    "correct": 2,
    "explanation": "Ihre groß.",
    "topic": "brief"
   },
   {
    "id": "brk4l2_test_8",
    "category": "kurs_br_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wem schreibst du 'Liebe …'?",
    "answers": [
     "dem Bürgermeister",
     "einer Firma",
     "Freunden und Familie",
     "Fremden"
    ],
    "correct": 2,
    "explanation": "Persönlich.",
    "topic": "brief"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
