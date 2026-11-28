// Neue Sachunterricht-Kurse: K1 Familie/Gefühle, K3 Kinderrechte, Pflanzen/Luft, K4 Licht/Schall, Tiere im Winter (28.11.2026)
(function () {
    const extraKurse = [{"id": "familie_k1", "title": "Familie und Gefühle", "icon": "👨‍👩‍👧", "grade": 1, "subject": "sachunterricht", "beschreibung": "Wer gehört zur Familie, wie leben wir zusammen, welche Gefühle gibt es?"}, {"id": "kinderrechte_k3", "title": "Kinderrechte und Klassenrat", "icon": "🧒", "grade": 3, "subject": "sachunterricht", "beschreibung": "Welche Rechte Kinder haben und wie wir gemeinsam entscheiden."}, {"id": "pflanzen_luft_k3", "title": "Pflanzen und Luft", "icon": "🌱", "grade": 3, "subject": "sachunterricht", "beschreibung": "Blüte, Samen, Keimung – und was Luft alles kann."}, {"id": "licht_schall_k4", "title": "Licht, Schatten, Schall", "icon": "🔦", "grade": 4, "subject": "sachunterricht", "beschreibung": "Wie Schatten entstehen und wie sich Schall ausbreitet."}, {"id": "tiere_winter_k4", "title": "Tiere im Winter", "icon": "🦔", "grade": 4, "subject": "sachunterricht", "beschreibung": "Zugvögel, Winterschlaf, Winterruhe und Winterstarre."}];
    const extraLektionen = [
 {
  "id": "fg_k1_l1",
  "kurs": "familie_k1",
  "order": 1,
  "icon": "👨‍👩‍👧",
  "title": "Meine Familie",
  "kurz": "Wer gehört dazu, wie helfen wir uns?",
  "erklaerung": {
   "intro": "Familien sind <b>verschieden</b>: Manche Kinder leben mit Mama und Papa, manche nur mit einem Elternteil, mit Großeltern oder in zwei Zuhause. Zur Familie gehören z. B. <b>Eltern, Geschwister, Oma und Opa, Tante, Onkel, Cousin und Cousine</b>. In einer Familie <b>hilft man sich</b>: Tisch decken, aufräumen, trösten.",
   "merksatz": "Jede Familie ist anders – und alle helfen mit.",
   "beispiele": [
    "<svg viewBox='0 0 371 93' style='width:100%;max-width:371px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='185' y='73' text-anchor='middle' font-size='72'>👨‍👩‍👧‍👦</text></svg>Eltern und Geschwister",
    "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>👵👴</text></svg>Oma und Opa – die Großeltern",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍽️</text></svg>Helfen: Tisch decken"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "fgk1l1u_leicht_1",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wer ist die Mutter deiner Mutter?",
     "answers": [
      "Oma",
      "Tante",
      "Schwester",
      "Cousine"
     ],
     "correct": 0,
     "explanation": "Großmutter.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👵</text></svg>"
    },
    {
     "id": "fgk1l1u_leicht_2",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie heißen Bruder und Schwester zusammen?",
     "answers": [
      "Eltern",
      "Großeltern",
      "Cousins",
      "Geschwister"
     ],
     "correct": 3,
     "explanation": "Geschwister.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>👦👧</text></svg>"
    },
    {
     "id": "fgk1l1u_leicht_3",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie heißen Mama und Papa zusammen?",
     "answers": [
      "Geschwister",
      "Großeltern",
      "Eltern",
      "Kinder"
     ],
     "correct": 2,
     "explanation": "Eltern.",
     "topic": "familie_gefuehle"
    },
    {
     "id": "fgk1l1u_leicht_4",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie kannst du zu Hause helfen?",
     "answers": [
      "den Tisch decken",
      "nur fernsehen",
      "Spielzeug liegen lassen",
      "nichts tun"
     ],
     "correct": 0,
     "explanation": "Mithelfen.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍽️</text></svg>"
    },
    {
     "id": "fgk1l1u_leicht_5",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Sind alle Familien gleich?",
     "answers": [
      "nein, jede ist anders",
      "ja, alle gleich",
      "nur große",
      "nur kleine"
     ],
     "correct": 0,
     "explanation": "Familien sind verschieden.",
     "topic": "familie_gefuehle"
    }
   ],
   "mittel": [
    {
     "id": "fgk1l1u_mittel_1",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wer ist der Bruder deines Vaters?",
     "answers": [
      "dein Opa",
      "dein Cousin",
      "dein Onkel",
      "dein Bruder"
     ],
     "correct": 2,
     "explanation": "Onkel.",
     "topic": "familie_gefuehle"
    },
    {
     "id": "fgk1l1u_mittel_2",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wer ist das Kind deiner Tante?",
     "answers": [
      "deine Schwester",
      "dein Cousin oder deine Cousine",
      "dein Onkel",
      "deine Oma"
     ],
     "correct": 1,
     "explanation": "Cousin/Cousine.",
     "topic": "familie_gefuehle"
    },
    {
     "id": "fgk1l1u_mittel_3",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie heißen Oma und Opa zusammen?",
     "answers": [
      "Großeltern",
      "Eltern",
      "Geschwister",
      "Verwandte Kinder"
     ],
     "correct": 0,
     "explanation": "Großeltern.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>👵👴</text></svg>"
    },
    {
     "id": "fgk1l1u_mittel_4",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was gehört zum guten Zusammenleben?",
     "answers": [
      "immer streiten",
      "einander zuhören",
      "nie teilen",
      "andere auslachen"
     ],
     "correct": 1,
     "explanation": "Zuhören.",
     "topic": "familie_gefuehle"
    },
    {
     "id": "fgk1l1u_mittel_5",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist ein Haushalt?",
     "answers": [
      "ein Haus aus Holz",
      "die Menschen, die zusammen wohnen",
      "ein Spielzeug",
      "eine Schule"
     ],
     "correct": 1,
     "explanation": "Zusammen wohnen.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏠</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "fgk1l1u_schwer_1",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wer ist die Schwester deiner Mutter?",
     "answers": [
      "deine Oma",
      "deine Cousine",
      "deine Schwester",
      "deine Tante"
     ],
     "correct": 3,
     "explanation": "Tante.",
     "topic": "familie_gefuehle"
    },
    {
     "id": "fgk1l1u_schwer_2",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie nennt man ein Kind ohne Geschwister?",
     "answers": [
      "Zwilling",
      "Einzelkind",
      "Cousin",
      "Enkel"
     ],
     "correct": 1,
     "explanation": "Einzelkind.",
     "topic": "familie_gefuehle"
    },
    {
     "id": "fgk1l1u_schwer_3",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein Enkel?",
     "answers": [
      "dein Bruder",
      "dein Onkel",
      "das Kind deines Kindes",
      "dein Vater"
     ],
     "correct": 2,
     "explanation": "Für Oma bist du ein Enkelkind.",
     "topic": "familie_gefuehle"
    },
    {
     "id": "fgk1l1u_schwer_4",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was sind Zwillinge?",
     "answers": [
      "Oma und Opa",
      "zwei Geschwister, die am selben Tag geboren sind",
      "zwei Freunde",
      "Cousins"
     ],
     "correct": 1,
     "explanation": "Gleicher Geburtstag.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👯</text></svg>"
    },
    {
     "id": "fgk1l1u_schwer_5",
     "category": "kurs_fg_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was kannst du tun, wenn es Streit gibt?",
     "answers": [
      "schreien",
      "ruhig reden und zuhören",
      "hauen",
      "weglaufen für immer"
     ],
     "correct": 1,
     "explanation": "Reden hilft.",
     "topic": "familie_gefuehle"
    }
   ]
  },
  "test": [
   {
    "id": "fgk1l1_test_1",
    "category": "kurs_fg_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wer ist der Vater deines Vaters?",
    "answers": [
     "Onkel",
     "Bruder",
     "Cousin",
     "Opa"
    ],
    "correct": 3,
    "explanation": "Großvater.",
    "topic": "familie_gefuehle",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👴</text></svg>"
   },
   {
    "id": "fgk1l1_test_2",
    "category": "kurs_fg_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie heißen Bruder und Schwester zusammen?",
    "answers": [
     "Eltern",
     "Großeltern",
     "Geschwister",
     "Nachbarn"
    ],
    "correct": 2,
    "explanation": "Geschwister.",
    "topic": "familie_gefuehle"
   },
   {
    "id": "fgk1l1_test_3",
    "category": "kurs_fg_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wer ist der Bruder deiner Mutter?",
    "answers": [
     "Opa",
     "Onkel",
     "Cousin",
     "Vater"
    ],
    "correct": 1,
    "explanation": "Onkel.",
    "topic": "familie_gefuehle"
   },
   {
    "id": "fgk1l1_test_4",
    "category": "kurs_fg_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie hilfst du mit?",
    "answers": [
     "alles liegen lassen",
     "nur spielen",
     "Zimmer aufräumen",
     "nichts"
    ],
    "correct": 2,
    "explanation": "Mithelfen.",
    "topic": "familie_gefuehle",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧸</text></svg>"
   },
   {
    "id": "fgk1l1_test_5",
    "category": "kurs_fg_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie heißen Oma und Opa zusammen?",
    "answers": [
     "Eltern",
     "Geschwister",
     "Großeltern",
     "Kinder"
    ],
    "correct": 2,
    "explanation": "Großeltern.",
    "topic": "familie_gefuehle"
   },
   {
    "id": "fgk1l1_test_6",
    "category": "kurs_fg_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Sind alle Familien gleich?",
    "answers": [
     "ja",
     "nein",
     "nur am Sonntag",
     "nur in der Stadt"
    ],
    "correct": 1,
    "explanation": "Verschieden.",
    "topic": "familie_gefuehle"
   },
   {
    "id": "fgk1l1_test_7",
    "category": "kurs_fg_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was hilft beim Streit?",
    "answers": [
     "schreien",
     "hauen",
     "beleidigen",
     "reden und zuhören"
    ],
    "correct": 3,
    "explanation": "Reden.",
    "topic": "familie_gefuehle"
   },
   {
    "id": "fgk1l1_test_8",
    "category": "kurs_fg_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie nennt man ein Kind ohne Geschwister?",
    "answers": [
     "Zwilling",
     "Enkel",
     "Neffe",
     "Einzelkind"
    ],
    "correct": 3,
    "explanation": "Einzelkind.",
    "topic": "familie_gefuehle"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "fg_k1_l2",
  "kurs": "familie_k1",
  "order": 2,
  "icon": "😊",
  "title": "Gefühle",
  "kurz": "Freude, Wut, Angst, Trauer",
  "erklaerung": {
   "intro": "Jeder Mensch hat <b>Gefühle</b>: <b>Freude</b> 😀, <b>Trauer</b> 😢, <b>Wut</b> 😠, <b>Angst</b> 😨, <b>Überraschung</b> 😲. Alle Gefühle sind <b>in Ordnung</b>. Wichtig ist, wie wir damit umgehen: Bei Wut tief atmen, bei Angst oder Trauer mit jemandem <b>reden</b>. Und: Auf die Gefühle der anderen achten.",
   "merksatz": "Alle Gefühle sind okay – darüber reden hilft.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😀</text></svg>Freude",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😢</text></svg>Trauer",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😠</text></svg>Wut – tief durchatmen"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "fgk1l2u_leicht_1",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Gefühl zeigt das Gesicht? 😀",
     "answers": [
      "Wut",
      "Angst",
      "Freude",
      "Trauer"
     ],
     "correct": 2,
     "explanation": "Lachen = Freude.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😀</text></svg>"
    },
    {
     "id": "fgk1l2u_leicht_2",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Gefühl zeigt das Gesicht? 😢",
     "answers": [
      "Trauer",
      "Freude",
      "Wut",
      "Langeweile"
     ],
     "correct": 0,
     "explanation": "Weinen = Trauer.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😢</text></svg>"
    },
    {
     "id": "fgk1l2u_leicht_3",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Gefühl zeigt das Gesicht? 😠",
     "answers": [
      "Freude",
      "Müdigkeit",
      "Wut",
      "Angst"
     ],
     "correct": 2,
     "explanation": "Wut.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😠</text></svg>"
    },
    {
     "id": "fgk1l2u_leicht_4",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Gefühl zeigt das Gesicht? 😨",
     "answers": [
      "Freude",
      "Angst",
      "Wut",
      "Stolz"
     ],
     "correct": 1,
     "explanation": "Angst.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😨</text></svg>"
    },
    {
     "id": "fgk1l2u_leicht_5",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Sind alle Gefühle in Ordnung?",
     "answers": [
      "nein, nur Freude",
      "nur am Tag",
      "ja",
      "nur bei Erwachsenen"
     ],
     "correct": 2,
     "explanation": "Alle Gefühle sind okay.",
     "topic": "familie_gefuehle"
    }
   ],
   "mittel": [
    {
     "id": "fgk1l2u_mittel_1",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was hilft bei Wut?",
     "answers": [
      "hauen",
      "tief durchatmen",
      "Sachen werfen",
      "schreien bis man heiser ist"
     ],
     "correct": 1,
     "explanation": "Atmen beruhigt.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌬️</text></svg>"
    },
    {
     "id": "fgk1l2u_mittel_2",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Dein Freund weint. Was tust du?",
     "answers": [
      "auslachen",
      "weggehen",
      "ihn trösten",
      "nichts sagen"
     ],
     "correct": 2,
     "explanation": "Trösten.",
     "topic": "familie_gefuehle"
    },
    {
     "id": "fgk1l2u_mittel_3",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Gefühl hast du an deinem Geburtstag oft?",
     "answers": [
      "Wut",
      "Trauer",
      "Angst",
      "Freude"
     ],
     "correct": 3,
     "explanation": "Freude.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎂</text></svg>"
    },
    {
     "id": "fgk1l2u_mittel_4",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Gefühl zeigt das Gesicht? 😲",
     "answers": [
      "Wut",
      "Überraschung",
      "Trauer",
      "Müdigkeit"
     ],
     "correct": 1,
     "explanation": "Staunen.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😲</text></svg>"
    },
    {
     "id": "fgk1l2u_mittel_5",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Mit wem kannst du über Angst sprechen?",
     "answers": [
      "mit niemandem",
      "mit Eltern oder Lehrern",
      "nur mit Fremden",
      "mit dem Fernseher"
     ],
     "correct": 1,
     "explanation": "Vertrauenspersonen.",
     "topic": "familie_gefuehle"
    }
   ],
   "schwer": [
    {
     "id": "fgk1l2u_schwer_1",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Lena hat ihr Kuscheltier verloren. Wie fühlt sie sich wohl?",
     "answers": [
      "traurig",
      "fröhlich",
      "stolz",
      "gelangweilt"
     ],
     "correct": 0,
     "explanation": "Verlust macht traurig.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧸</text></svg>"
    },
    {
     "id": "fgk1l2u_schwer_2",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Tim hat das Bild alleine gemalt. Wie fühlt er sich?",
     "answers": [
      "wütend",
      "stolz",
      "traurig",
      "ängstlich"
     ],
     "correct": 1,
     "explanation": "Stolz.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎨</text></svg>"
    },
    {
     "id": "fgk1l2u_schwer_3",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Woran merkst du, dass jemand wütend ist?",
     "answers": [
      "rotes Gesicht, laute Stimme",
      "lächelt",
      "schläft",
      "summt fröhlich"
     ],
     "correct": 0,
     "explanation": "Körpersignale.",
     "topic": "familie_gefuehle"
    },
    {
     "id": "fgk1l2u_schwer_4",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist eine 'Stopp'-Regel?",
     "answers": [
      "Wenn jemand Stopp sagt, hört man auf.",
      "Man rennt weg.",
      "Man macht weiter.",
      "Man lacht."
     ],
     "correct": 0,
     "explanation": "Grenzen achten.",
     "topic": "familie_gefuehle",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>✋</text></svg>"
    },
    {
     "id": "fgk1l2u_schwer_5",
     "category": "kurs_fg_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist Eifersucht?",
     "answers": [
      "Man ist müde.",
      "Man ist satt.",
      "Man ist gesund.",
      "Man möchte etwas haben, was ein anderer hat."
     ],
     "correct": 3,
     "explanation": "Eifersucht.",
     "topic": "familie_gefuehle"
    }
   ]
  },
  "test": [
   {
    "id": "fgk1l2_test_1",
    "category": "kurs_fg_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Gefühl zeigt 😀?",
    "answers": [
     "Freude",
     "Wut",
     "Trauer",
     "Angst"
    ],
    "correct": 0,
    "explanation": "Freude.",
    "topic": "familie_gefuehle",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😀</text></svg>"
   },
   {
    "id": "fgk1l2_test_2",
    "category": "kurs_fg_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Gefühl zeigt 😢?",
    "answers": [
     "Freude",
     "Wut",
     "Trauer",
     "Stolz"
    ],
    "correct": 2,
    "explanation": "Trauer.",
    "topic": "familie_gefuehle",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😢</text></svg>"
   },
   {
    "id": "fgk1l2_test_3",
    "category": "kurs_fg_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was hilft bei Wut?",
    "answers": [
     "tief atmen",
     "hauen",
     "treten",
     "werfen"
    ],
    "correct": 0,
    "explanation": "Atmen.",
    "topic": "familie_gefuehle"
   },
   {
    "id": "fgk1l2_test_4",
    "category": "kurs_fg_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Dein Freund ist traurig. Was tust du?",
    "answers": [
     "auslachen",
     "ärgern",
     "weglaufen",
     "trösten"
    ],
    "correct": 3,
    "explanation": "Trösten.",
    "topic": "familie_gefuehle"
   },
   {
    "id": "fgk1l2_test_5",
    "category": "kurs_fg_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Sind alle Gefühle okay?",
    "answers": [
     "nein",
     "nur gute",
     "ja",
     "nur bei Kindern"
    ],
    "correct": 2,
    "explanation": "Ja.",
    "topic": "familie_gefuehle"
   },
   {
    "id": "fgk1l2_test_6",
    "category": "kurs_fg_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Gefühl zeigt 😨?",
    "answers": [
     "Freude",
     "Stolz",
     "Angst",
     "Wut"
    ],
    "correct": 2,
    "explanation": "Angst.",
    "topic": "familie_gefuehle",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😨</text></svg>"
   },
   {
    "id": "fgk1l2_test_7",
    "category": "kurs_fg_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was bedeutet 'Stopp' beim Spielen?",
    "answers": [
     "weitermachen",
     "lauter werden",
     "schneller werden",
     "aufhören"
    ],
    "correct": 3,
    "explanation": "Stopp heißt Stopp.",
    "topic": "familie_gefuehle",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>✋</text></svg>"
   },
   {
    "id": "fgk1l2_test_8",
    "category": "kurs_fg_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Mit wem sprichst du über Sorgen?",
    "answers": [
     "mit niemandem",
     "mit Fremden im Internet",
     "mit dem Kuscheltier allein",
     "mit Menschen, denen du vertraust"
    ],
    "correct": 3,
    "explanation": "Vertrauen.",
    "topic": "familie_gefuehle"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "kr_k3_l1",
  "kurs": "kinderrechte_k3",
  "order": 1,
  "icon": "🧒",
  "title": "Kinderrechte",
  "kurz": "Rechte für alle Kinder der Welt",
  "erklaerung": {
   "intro": "1989 haben die <b>Vereinten Nationen</b> die <b>Kinderrechte</b> beschlossen. Sie gelten für <b>alle Kinder</b> unter 18. Zum Beispiel das Recht auf <b>Bildung</b> (Schule), auf <b>Gesundheit</b>, auf <b>Spiel und Freizeit</b>, auf <b>Schutz vor Gewalt</b>, auf eine <b>eigene Meinung</b> und auf <b>Gleichheit</b> – kein Kind darf benachteiligt werden. Am <b>20. November</b> ist Weltkindertag der UN.",
   "merksatz": "Kinderrechte gelten für alle Kinder – überall.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏫</text></svg>Recht auf Bildung",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>Recht auf Spiel und Freizeit",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛡️</text></svg>Recht auf Schutz vor Gewalt"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "krk3l1u_leicht_1",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Für wen gelten die Kinderrechte?",
     "answers": [
      "nur für Jungen",
      "nur für Mädchen",
      "für alle Kinder",
      "nur für reiche Kinder"
     ],
     "correct": 2,
     "explanation": "Alle Kinder.",
     "topic": "kinderrechte"
    },
    {
     "id": "krk3l1u_leicht_2",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches ist ein Kinderrecht?",
     "answers": [
      "Recht auf ein Handy",
      "Recht auf Bildung",
      "Recht auf Süßigkeiten",
      "Recht auf ein Pony"
     ],
     "correct": 1,
     "explanation": "Schule.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏫</text></svg>"
    },
    {
     "id": "krk3l1u_leicht_3",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches ist ein Kinderrecht?",
     "answers": [
      "Recht auf Spiel und Freizeit",
      "Recht auf Autofahren",
      "Recht auf Wahlen",
      "Recht auf Arbeit"
     ],
     "correct": 0,
     "explanation": "Spielen.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
    },
    {
     "id": "krk3l1u_leicht_4",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Bis zu welchem Alter gelten die Kinderrechte?",
     "answers": [
      "bis 6 Jahre",
      "bis 18 Jahre",
      "bis 10 Jahre",
      "für immer"
     ],
     "correct": 1,
     "explanation": "Unter 18.",
     "topic": "kinderrechte"
    },
    {
     "id": "krk3l1u_leicht_5",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Dürfen Kinder geschlagen werden?",
     "answers": [
      "ja",
      "manchmal",
      "nein",
      "nur in der Schule"
     ],
     "correct": 2,
     "explanation": "Schutz vor Gewalt.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛡️</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "krk3l1u_mittel_1",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wer hat die Kinderrechte beschlossen?",
     "answers": [
      "der Schulleiter",
      "die Polizei",
      "die Vereinten Nationen (UN)",
      "eine Firma"
     ],
     "correct": 2,
     "explanation": "UN, 1989.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌍</text></svg>"
    },
    {
     "id": "krk3l1u_mittel_2",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was bedeutet das Recht auf Gleichheit?",
     "answers": [
      "Kein Kind darf benachteiligt werden.",
      "Alle Kinder sind gleich groß.",
      "Alle tragen gleiche Kleidung.",
      "Alle haben gleiche Namen."
     ],
     "correct": 0,
     "explanation": "Gleichheit.",
     "topic": "kinderrechte"
    },
    {
     "id": "krk3l1u_mittel_3",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was bedeutet das Recht auf Meinung?",
     "answers": [
      "Kinder müssen schweigen.",
      "Nur Erwachsene dürfen reden.",
      "Kinder dürfen sagen, was sie denken.",
      "Kinder dürfen nichts entscheiden."
     ],
     "correct": 2,
     "explanation": "Meinung sagen.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💬</text></svg>"
    },
    {
     "id": "krk3l1u_mittel_4",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wann ist der Weltkindertag der UN?",
     "answers": [
      "am 24. Dezember",
      "am 20. November",
      "am 1. Januar",
      "am 1. Mai"
     ],
     "correct": 1,
     "explanation": "20. November – in Deutschland feiert man den Weltkindertag am 20. September.",
     "topic": "kinderrechte"
    },
    {
     "id": "krk3l1u_mittel_5",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Recht hilft, wenn ein Kind krank ist?",
     "answers": [
      "Recht auf Freizeit",
      "Recht auf Gesundheit",
      "Recht auf Meinung",
      "Recht auf Namen"
     ],
     "correct": 1,
     "explanation": "Gesundheit.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏥</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "krk3l1u_schwer_1",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Seit wann gibt es die UN-Kinderrechtskonvention?",
     "answers": [
      "seit 1800",
      "seit 2020",
      "seit 1500",
      "seit 1989"
     ],
     "correct": 3,
     "explanation": "1989.",
     "topic": "kinderrechte"
    },
    {
     "id": "krk3l1u_schwer_2",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wo können Kinder Hilfe bekommen, wenn ihre Rechte verletzt werden?",
     "answers": [
      "nirgends",
      "z. B. beim Kinder- und Jugendtelefon 116 111",
      "nur im Internet bei Fremden",
      "beim Bäcker"
     ],
     "correct": 1,
     "explanation": "Nummer gegen Kummer.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📞</text></svg>"
    },
    {
     "id": "krk3l1u_schwer_3",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist Kinderarbeit?",
     "answers": [
      "Kinder müssen arbeiten statt zur Schule zu gehen",
      "Hausaufgaben",
      "Tisch decken",
      "Zimmer aufräumen"
     ],
     "correct": 0,
     "explanation": "Verboten.",
     "topic": "kinderrechte"
    },
    {
     "id": "krk3l1u_schwer_4",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Recht hat ein Kind, das fliehen musste?",
     "answers": [
      "kein Recht",
      "Recht auf Arbeit",
      "Recht auf Schutz und Hilfe",
      "nur Recht auf Essen"
     ],
     "correct": 2,
     "explanation": "Alle Kinder.",
     "topic": "kinderrechte"
    },
    {
     "id": "krk3l1u_schwer_5",
     "category": "kurs_kr_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was bedeutet Recht auf Privatsphäre?",
     "answers": [
      "Kinder müssen alles zeigen.",
      "Kinder dürfen nichts besitzen.",
      "Kinder dürfen nicht alleine sein.",
      "Kinder dürfen Geheimnisse und eigene Sachen haben."
     ],
     "correct": 3,
     "explanation": "Privatsphäre.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔒</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "krk3l1_test_1",
    "category": "kurs_kr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Für wen gelten Kinderrechte?",
    "answers": [
     "für alle Kinder",
     "nur für deutsche Kinder",
     "nur für Schulkinder",
     "nur für Babys"
    ],
    "correct": 0,
    "explanation": "Alle.",
    "topic": "kinderrechte"
   },
   {
    "id": "krk3l1_test_2",
    "category": "kurs_kr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches ist ein Kinderrecht?",
    "answers": [
     "Recht auf Fernsehen",
     "Recht auf ein Auto",
     "Recht auf Pizza",
     "Recht auf Bildung"
    ],
    "correct": 3,
    "explanation": "Bildung.",
    "topic": "kinderrechte"
   },
   {
    "id": "krk3l1_test_3",
    "category": "kurs_kr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Dürfen Kinder geschlagen werden?",
    "answers": [
     "nein",
     "ja",
     "wenn sie frech sind",
     "manchmal"
    ],
    "correct": 0,
    "explanation": "Nein.",
    "topic": "kinderrechte"
   },
   {
    "id": "krk3l1_test_4",
    "category": "kurs_kr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wer hat die Kinderrechte beschlossen?",
    "answers": [
     "die Lehrer",
     "die Eltern",
     "die UN",
     "die Polizei"
    ],
    "correct": 2,
    "explanation": "UN.",
    "topic": "kinderrechte"
   },
   {
    "id": "krk3l1_test_5",
    "category": "kurs_kr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was bedeutet Gleichheit?",
    "answers": [
     "Kein Kind wird benachteiligt.",
     "Alle sind gleich alt.",
     "Alle wohnen gleich.",
     "Alle heißen gleich."
    ],
    "correct": 0,
    "explanation": "Gleichheit.",
    "topic": "kinderrechte"
   },
   {
    "id": "krk3l1_test_6",
    "category": "kurs_kr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was bedeutet Recht auf Meinung?",
    "answers": [
     "Kinder dürfen sagen, was sie denken.",
     "Kinder müssen leise sein.",
     "Kinder entscheiden alles allein.",
     "Kinder dürfen nie fragen."
    ],
    "correct": 0,
    "explanation": "Meinung.",
    "topic": "kinderrechte"
   },
   {
    "id": "krk3l1_test_7",
    "category": "kurs_kr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wann ist der UN-Weltkindertag?",
    "answers": [
     "24. Dezember",
     "20. November",
     "1. Mai",
     "31. Oktober"
    ],
    "correct": 1,
    "explanation": "20.11. – in Deutschland zusätzlich am 20. September.",
    "topic": "kinderrechte"
   },
   {
    "id": "krk3l1_test_8",
    "category": "kurs_kr_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Nummer hilft Kindern mit Sorgen?",
    "answers": [
     "110",
     "112",
     "116 111",
     "0800 Pizza"
    ],
    "correct": 2,
    "explanation": "Nummer gegen Kummer.",
    "topic": "kinderrechte",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📞</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "kr_k3_l2",
  "kurs": "kinderrechte_k3",
  "order": 2,
  "icon": "🗳️",
  "title": "Klassenrat und Regeln",
  "kurz": "Gemeinsam entscheiden",
  "erklaerung": {
   "intro": "Im <b>Klassenrat</b> besprechen Kinder Probleme und Wünsche der Klasse – einmal pro Woche. Es gibt <b>Rollen</b>: Leitung, Protokoll, Zeitwächter. Alle dürfen ihre <b>Meinung</b> sagen, man <b>hört zu</b> und lässt andere ausreden. Entschieden wird oft durch <b>Abstimmung</b>: Die <b>Mehrheit</b> gewinnt. Das nennt man <b>Demokratie</b>.",
   "merksatz": "Zuhören, ausreden lassen, abstimmen – Mehrheit entscheidet.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🗣️</text></svg>Meinung sagen",
    "<svg viewBox='0 0 288 93' style='width:100%;max-width:288px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='144' y='73' text-anchor='middle' font-size='72'>✋✋✋</text></svg>Abstimmen per Handzeichen",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📝</text></svg>Protokoll schreibt auf"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "krk3l2u_leicht_1",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist der Klassenrat?",
     "answers": [
      "ein Schrank",
      "eine Runde, in der die Klasse gemeinsam bespricht und entscheidet",
      "ein Lehrer",
      "ein Spiel"
     ],
     "correct": 1,
     "explanation": "Gemeinsam entscheiden.",
     "topic": "kinderrechte"
    },
    {
     "id": "krk3l2u_leicht_2",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was tust du, wenn ein anderes Kind spricht?",
     "answers": [
      "dazwischenrufen",
      "lachen",
      "zuhören und ausreden lassen",
      "weggehen"
     ],
     "correct": 2,
     "explanation": "Ausreden lassen.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👂</text></svg>"
    },
    {
     "id": "krk3l2u_leicht_3",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie wird im Klassenrat oft entschieden?",
     "answers": [
      "durch Würfeln",
      "der Lauteste entscheidet",
      "gar nicht",
      "durch Abstimmung"
     ],
     "correct": 3,
     "explanation": "Abstimmen.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>✋</text></svg>"
    },
    {
     "id": "krk3l2u_leicht_4",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wer gewinnt bei einer Abstimmung?",
     "answers": [
      "der Kleinste",
      "der Erste",
      "der Lauteste",
      "die Mehrheit"
     ],
     "correct": 3,
     "explanation": "Mehrheit.",
     "topic": "kinderrechte"
    },
    {
     "id": "krk3l2u_leicht_5",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Warum gibt es Klassenregeln?",
     "answers": [
      "damit alle gut zusammen lernen können",
      "damit es langweilig ist",
      "zum Ärgern",
      "ohne Grund"
     ],
     "correct": 0,
     "explanation": "Zusammenleben.",
     "topic": "kinderrechte"
    }
   ],
   "mittel": [
    {
     "id": "krk3l2u_mittel_1",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was macht der Protokollführer?",
     "answers": [
      "Er leitet das Gespräch.",
      "Er passt auf die Zeit auf.",
      "Er stimmt allein ab.",
      "Er schreibt die Ergebnisse auf."
     ],
     "correct": 3,
     "explanation": "Protokoll.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📝</text></svg>"
    },
    {
     "id": "krk3l2u_mittel_2",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was macht der Zeitwächter?",
     "answers": [
      "Er schreibt auf.",
      "Er achtet auf die Zeit.",
      "Er bestimmt allein.",
      "Er räumt auf."
     ],
     "correct": 1,
     "explanation": "Zeit.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⏱️</text></svg>"
    },
    {
     "id": "krk3l2u_mittel_3",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "12 Kinder sind für einen Ausflug in den Zoo, 10 für den Park. Was gewinnt?",
     "answers": [
      "der Zoo",
      "der Park",
      "beides",
      "keins"
     ],
     "correct": 0,
     "explanation": "12 > 10.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦁</text></svg>"
    },
    {
     "id": "krk3l2u_mittel_4",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was bedeutet Demokratie?",
     "answers": [
      "Einer bestimmt alles.",
      "Alle dürfen mitbestimmen.",
      "Niemand darf etwas sagen.",
      "Nur Erwachsene zählen."
     ],
     "correct": 1,
     "explanation": "Mitbestimmen.",
     "topic": "kinderrechte"
    },
    {
     "id": "krk3l2u_mittel_5",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist eine gute Gesprächsregel?",
     "answers": [
      "dazwischenrufen",
      "flüstern mit dem Nachbarn",
      "auslachen",
      "sich melden"
     ],
     "correct": 3,
     "explanation": "Melden.",
     "topic": "kinderrechte"
    }
   ],
   "schwer": [
    {
     "id": "krk3l2u_schwer_1",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein Kompromiss?",
     "answers": [
      "Beide Seiten geben ein bisschen nach.",
      "Einer gewinnt alles.",
      "Man streitet weiter.",
      "Man hört auf zu reden."
     ],
     "correct": 0,
     "explanation": "Einigung.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🤝</text></svg>"
    },
    {
     "id": "krk3l2u_schwer_2",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie heißt die Abstimmung, bei der niemand sieht, wie man stimmt?",
     "answers": [
      "Handzeichen",
      "geheime Wahl",
      "Zuruf",
      "Würfeln"
     ],
     "correct": 1,
     "explanation": "Mit Zetteln.",
     "topic": "kinderrechte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🗳️</text></svg>"
    },
    {
     "id": "krk3l2u_schwer_3",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein Klassensprecher?",
     "answers": [
      "der Lehrer",
      "der Hausmeister",
      "ein gewähltes Kind, das die Klasse vertritt",
      "das lauteste Kind"
     ],
     "correct": 2,
     "explanation": "Gewählt.",
     "topic": "kinderrechte"
    },
    {
     "id": "krk3l2u_schwer_4",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Bei der Abstimmung steht es 11 zu 11. Was jetzt?",
     "answers": [
      "der Lehrer gewinnt immer",
      "der Kleinste entscheidet",
      "nichts machen",
      "neu besprechen oder neu abstimmen"
     ],
     "correct": 3,
     "explanation": "Gleichstand.",
     "topic": "kinderrechte"
    },
    {
     "id": "krk3l2u_schwer_5",
     "category": "kurs_kr_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was bedeutet 'Ich-Botschaft'?",
     "answers": [
      "Man beschimpft andere.",
      "Man redet nur über sich.",
      "Man sagt, wie es einem selbst geht: 'Ich bin traurig, weil …'",
      "Man schweigt."
     ],
     "correct": 2,
     "explanation": "Ich-Botschaft.",
     "topic": "kinderrechte"
    }
   ]
  },
  "test": [
   {
    "id": "krk3l2_test_1",
    "category": "kurs_kr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist der Klassenrat?",
    "answers": [
     "gemeinsames Besprechen in der Klasse",
     "ein Fach",
     "ein Ausflug",
     "eine Pause"
    ],
    "correct": 0,
    "explanation": "Klassenrat.",
    "topic": "kinderrechte"
   },
   {
    "id": "krk3l2_test_2",
    "category": "kurs_kr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wer gewinnt eine Abstimmung?",
    "answers": [
     "der Erste",
     "der Lauteste",
     "der Lehrer immer",
     "die Mehrheit"
    ],
    "correct": 3,
    "explanation": "Mehrheit.",
    "topic": "kinderrechte"
   },
   {
    "id": "krk3l2_test_3",
    "category": "kurs_kr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was macht der Protokollführer?",
    "answers": [
     "aufschreiben",
     "leiten",
     "Zeit messen",
     "abstimmen allein"
    ],
    "correct": 0,
    "explanation": "Protokoll.",
    "topic": "kinderrechte"
   },
   {
    "id": "krk3l2_test_4",
    "category": "kurs_kr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was tust du, wenn andere reden?",
    "answers": [
     "dazwischenrufen",
     "lachen",
     "spielen",
     "zuhören"
    ],
    "correct": 3,
    "explanation": "Zuhören.",
    "topic": "kinderrechte"
   },
   {
    "id": "krk3l2_test_5",
    "category": "kurs_kr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was bedeutet Demokratie?",
    "answers": [
     "Einer bestimmt.",
     "Alle bestimmen mit.",
     "Keiner bestimmt.",
     "Die Größten bestimmen."
    ],
    "correct": 1,
    "explanation": "Mitbestimmen.",
    "topic": "kinderrechte"
   },
   {
    "id": "krk3l2_test_6",
    "category": "kurs_kr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist ein Kompromiss?",
    "answers": [
     "Einer gewinnt alles.",
     "Streit.",
     "Nichts passiert.",
     "Beide geben etwas nach."
    ],
    "correct": 3,
    "explanation": "Einigung.",
    "topic": "kinderrechte"
   },
   {
    "id": "krk3l2_test_7",
    "category": "kurs_kr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "15 Kinder wollen Fußball, 8 Basketball. Was wird gespielt?",
    "answers": [
     "Basketball",
     "beides",
     "Fußball",
     "nichts"
    ],
    "correct": 2,
    "explanation": "Mehrheit.",
    "topic": "kinderrechte",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
   },
   {
    "id": "krk3l2_test_8",
    "category": "kurs_kr_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist ein Klassensprecher?",
    "answers": [
     "der Lehrer",
     "ein gewähltes Kind",
     "der Hausmeister",
     "die Mama"
    ],
    "correct": 1,
    "explanation": "Gewählt.",
    "topic": "kinderrechte"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "pl_k3_l1",
  "kurs": "pflanzen_luft_k3",
  "order": 1,
  "icon": "🌸",
  "title": "Blüte, Samen, Keimung",
  "kurz": "Wie aus einem Samen eine Pflanze wird",
  "erklaerung": {
   "intro": "Eine Pflanze hat <b>Wurzel, Stängel, Blätter und Blüte</b>. In der Blüte entstehen nach der <b>Bestäubung</b> (oft durch Bienen) die <b>Samen</b>. Ein Samen <b>keimt</b>, wenn er <b>Wasser, Wärme und Luft</b> bekommt: Zuerst kommt die Wurzel, dann der Keimling. Zum Wachsen braucht die Pflanze dann auch <b>Licht</b>.",
   "merksatz": "Keimen braucht Wasser, Wärme, Luft – Wachsen braucht auch Licht.",
   "beispiele": [
    "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🌸🐝</text></svg>Biene bestäubt die Blüte",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🫘</text></svg>Bohnensamen keimt",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌱</text></svg>Keimling"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "plk3l1u_leicht_1",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Teil der Pflanze steckt in der Erde?",
     "answers": [
      "die Blüte",
      "die Wurzel",
      "das Blatt",
      "der Stängel"
     ],
     "correct": 1,
     "explanation": "Wurzel.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌱</text></svg>"
    },
    {
     "id": "plk3l1u_leicht_2",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was braucht ein Samen zum Keimen?",
     "answers": [
      "nur Dunkelheit",
      "nur Kälte",
      "Salz",
      "Wasser, Wärme und Luft"
     ],
     "correct": 3,
     "explanation": "Keimbedingungen.",
     "topic": "pflanzen_luft"
    },
    {
     "id": "plk3l1u_leicht_3",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Tier bestäubt viele Blüten?",
     "answers": [
      "der Hund",
      "die Biene",
      "die Katze",
      "der Fisch"
     ],
     "correct": 1,
     "explanation": "Biene.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐝</text></svg>"
    },
    {
     "id": "plk3l1u_leicht_4",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was kommt beim Keimen zuerst?",
     "answers": [
      "die Wurzel",
      "die Blüte",
      "die Frucht",
      "das Blatt"
     ],
     "correct": 0,
     "explanation": "Erst Wurzel.",
     "topic": "pflanzen_luft"
    },
    {
     "id": "plk3l1u_leicht_5",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was nimmt die Wurzel auf?",
     "answers": [
      "Licht",
      "Wasser",
      "Luft allein",
      "Sonne"
     ],
     "correct": 1,
     "explanation": "Wasser und Nährstoffe.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💧</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "plk3l1u_mittel_1",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was braucht eine Pflanze zusätzlich zum Wachsen?",
     "answers": [
      "Licht",
      "Salz",
      "Zucker",
      "Lärm"
     ],
     "correct": 0,
     "explanation": "Licht.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
    },
    {
     "id": "plk3l1u_mittel_2",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wo entstehen die Samen?",
     "answers": [
      "in der Wurzel",
      "im Stängel",
      "im Boden",
      "in der Blüte"
     ],
     "correct": 3,
     "explanation": "Blüte → Frucht → Samen.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌸</text></svg>"
    },
    {
     "id": "plk3l1u_mittel_3",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist ein Keimling?",
     "answers": [
      "eine Blüte",
      "eine Frucht",
      "ein Stein",
      "eine ganz junge Pflanze"
     ],
     "correct": 3,
     "explanation": "Keimling.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌱</text></svg>"
    },
    {
     "id": "plk3l1u_mittel_4",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was transportiert der Stängel?",
     "answers": [
      "Wasser zu den Blättern",
      "Licht",
      "Erde",
      "Bienen"
     ],
     "correct": 0,
     "explanation": "Wie ein Rohr.",
     "topic": "pflanzen_luft"
    },
    {
     "id": "plk3l1u_mittel_5",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist Bestäubung?",
     "answers": [
      "Blütenstaub kommt zu einer anderen Blüte",
      "die Pflanze wird gegossen",
      "die Pflanze wird geschnitten",
      "die Pflanze schläft"
     ],
     "correct": 0,
     "explanation": "Pollen.",
     "topic": "pflanzen_luft"
    }
   ],
   "schwer": [
    {
     "id": "plk3l1u_schwer_1",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum keimt eine Bohne im Kühlschrank nicht?",
     "answers": [
      "Es ist zu hell.",
      "Es ist zu kalt.",
      "Es ist zu laut.",
      "Es gibt zu viel Luft."
     ],
     "correct": 1,
     "explanation": "Wärme fehlt.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧊</text></svg>"
    },
    {
     "id": "plk3l1u_schwer_2",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was machen grüne Blätter mit Licht?",
     "answers": [
      "Sie stellen Nahrung (Zucker) her.",
      "Sie schlafen.",
      "Sie werden rot.",
      "Sie fallen ab."
     ],
     "correct": 0,
     "explanation": "Fotosynthese.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍃</text></svg>"
    },
    {
     "id": "plk3l1u_schwer_3",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was geben Pflanzen an die Luft ab?",
     "answers": [
      "Rauch",
      "Salz",
      "Staub",
      "Sauerstoff"
     ],
     "correct": 3,
     "explanation": "Sauerstoff.",
     "topic": "pflanzen_luft"
    },
    {
     "id": "plk3l1u_schwer_4",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie verbreitet der Löwenzahn seine Samen?",
     "answers": [
      "mit Wasser",
      "mit dem Wind",
      "mit Katzen",
      "gar nicht"
     ],
     "correct": 1,
     "explanation": "Pusteblume.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌬️</text></svg>"
    },
    {
     "id": "plk3l1u_schwer_5",
     "category": "kurs_pl_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum sind Bienen wichtig?",
     "answers": [
      "Sie fressen Blätter.",
      "Sie machen Erde.",
      "Sie bestäuben Blüten, damit Früchte wachsen.",
      "Sie gießen Pflanzen."
     ],
     "correct": 2,
     "explanation": "Bestäubung.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐝</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "plk3l1_test_1",
    "category": "kurs_pl_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Teil ist in der Erde?",
    "answers": [
     "Blüte",
     "Wurzel",
     "Blatt",
     "Frucht"
    ],
    "correct": 1,
    "explanation": "Wurzel.",
    "topic": "pflanzen_luft"
   },
   {
    "id": "plk3l1_test_2",
    "category": "kurs_pl_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was braucht ein Samen zum Keimen?",
    "answers": [
     "Kälte",
     "Dunkelheit und Salz",
     "nichts",
     "Wasser, Wärme, Luft"
    ],
    "correct": 3,
    "explanation": "Drei Dinge.",
    "topic": "pflanzen_luft"
   },
   {
    "id": "plk3l1_test_3",
    "category": "kurs_pl_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wer bestäubt Blüten?",
    "answers": [
     "Bienen",
     "Fische",
     "Hunde",
     "Maulwürfe"
    ],
    "correct": 0,
    "explanation": "Bienen.",
    "topic": "pflanzen_luft",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐝</text></svg>"
   },
   {
    "id": "plk3l1_test_4",
    "category": "kurs_pl_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was kommt beim Keimen zuerst?",
    "answers": [
     "die Blüte",
     "die Wurzel",
     "die Frucht",
     "das Blatt"
    ],
    "correct": 1,
    "explanation": "Wurzel.",
    "topic": "pflanzen_luft"
   },
   {
    "id": "plk3l1_test_5",
    "category": "kurs_pl_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was braucht eine Pflanze zum Wachsen auch?",
    "answers": [
     "Lärm",
     "Licht",
     "Zucker",
     "Salz"
    ],
    "correct": 1,
    "explanation": "Licht.",
    "topic": "pflanzen_luft"
   },
   {
    "id": "plk3l1_test_6",
    "category": "kurs_pl_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was geben Pflanzen ab?",
    "answers": [
     "Rauch",
     "Staub",
     "Salz",
     "Sauerstoff"
    ],
    "correct": 3,
    "explanation": "Sauerstoff.",
    "topic": "pflanzen_luft"
   },
   {
    "id": "plk3l1_test_7",
    "category": "kurs_pl_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wo entstehen Samen?",
    "answers": [
     "in der Wurzel",
     "im Boden",
     "in der Blüte",
     "im Stängel"
    ],
    "correct": 2,
    "explanation": "Blüte.",
    "topic": "pflanzen_luft"
   },
   {
    "id": "plk3l1_test_8",
    "category": "kurs_pl_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie verbreitet der Löwenzahn Samen?",
    "answers": [
     "mit dem Wind",
     "mit Wasser",
     "mit Hunden",
     "gar nicht"
    ],
    "correct": 0,
    "explanation": "Wind.",
    "topic": "pflanzen_luft",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌬️</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "pl_k3_l2",
  "kurs": "pflanzen_luft_k3",
  "order": 2,
  "icon": "💨",
  "title": "Luft ist nicht nichts",
  "kurz": "Luft braucht Platz, warme Luft steigt",
  "erklaerung": {
   "intro": "Luft kann man nicht sehen, aber sie ist <b>da</b>: Sie <b>braucht Platz</b> (ein Glas mit Luft kann nicht ganz mit Wasser gefüllt werden, wenn man es umgedreht eintaucht) und sie <b>drückt</b>. <b>Warme Luft steigt nach oben</b> – darum fliegt ein Heißluftballon. Bewegte Luft ist <b>Wind</b>. Wir brauchen den <b>Sauerstoff</b> aus der Luft zum Atmen.",
   "merksatz": "Luft braucht Platz, warme Luft steigt, bewegte Luft ist Wind.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎈</text></svg>Luft im Ballon braucht Platz",
    "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🎈🔥</text></svg>Heißluftballon: warme Luft steigt",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌬️</text></svg>Wind = bewegte Luft"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "plk3l2u_leicht_1",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist Wind?",
     "answers": [
      "Wasser",
      "Licht",
      "bewegte Luft",
      "Staub"
     ],
     "correct": 2,
     "explanation": "Bewegte Luft.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌬️</text></svg>"
    },
    {
     "id": "plk3l2u_leicht_2",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was brauchen wir aus der Luft zum Atmen?",
     "answers": [
      "Rauch",
      "Sauerstoff",
      "Staub",
      "Wasser"
     ],
     "correct": 1,
     "explanation": "Sauerstoff.",
     "topic": "pflanzen_luft"
    },
    {
     "id": "plk3l2u_leicht_3",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Warum wird ein Luftballon dick?",
     "answers": [
      "Luft braucht Platz.",
      "Er wächst.",
      "Er isst.",
      "Er wird nass."
     ],
     "correct": 0,
     "explanation": "Luft füllt ihn.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎈</text></svg>"
    },
    {
     "id": "plk3l2u_leicht_4",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Kann man Luft sehen?",
     "answers": [
      "ja, sie ist blau",
      "ja, sie ist weiß",
      "nein, aber spüren",
      "nur nachts"
     ],
     "correct": 2,
     "explanation": "Unsichtbar.",
     "topic": "pflanzen_luft"
    },
    {
     "id": "plk3l2u_leicht_5",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wohin steigt warme Luft?",
     "answers": [
      "nach oben",
      "nach unten",
      "zur Seite",
      "gar nicht"
     ],
     "correct": 0,
     "explanation": "Nach oben.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⬆️</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "plk3l2u_mittel_1",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum fliegt ein Heißluftballon?",
     "answers": [
      "Er hat Flügel.",
      "Er hat einen Motor.",
      "Die warme Luft im Ballon steigt.",
      "Er ist aus Stein."
     ],
     "correct": 2,
     "explanation": "Warme Luft ist leichter.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎈</text></svg>"
    },
    {
     "id": "plk3l2u_mittel_2",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was zeigt eine Windfahne?",
     "answers": [
      "aus welcher Richtung der Wind kommt",
      "wie warm es ist",
      "wie spät es ist",
      "ob es regnet"
     ],
     "correct": 0,
     "explanation": "Windrichtung.",
     "topic": "pflanzen_luft"
    },
    {
     "id": "plk3l2u_mittel_3",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Ein Glas wird umgedreht ins Wasser gedrückt. Was ist drin?",
     "answers": [
      "nur Wasser",
      "nichts",
      "Sand",
      "Luft – das Wasser kann nicht ganz hinein"
     ],
     "correct": 3,
     "explanation": "Luft braucht Platz.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥛</text></svg>"
    },
    {
     "id": "plk3l2u_mittel_4",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wofür nutzt man Wind?",
     "answers": [
      "zum Kochen",
      "für Windräder und Segelboote",
      "zum Lesen",
      "zum Gießen"
     ],
     "correct": 1,
     "explanation": "Windkraft.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⛵</text></svg>"
    },
    {
     "id": "plk3l2u_mittel_5",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wo ist es im Zimmer meist wärmer?",
     "answers": [
      "am Boden",
      "oben an der Decke",
      "überall gleich",
      "unter dem Teppich"
     ],
     "correct": 1,
     "explanation": "Warme Luft steigt.",
     "topic": "pflanzen_luft"
    }
   ],
   "schwer": [
    {
     "id": "plk3l2u_schwer_1",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum soll man beim Lüften die Fenster ganz öffnen?",
     "answers": [
      "Damit es dunkel wird.",
      "So kommt schnell frische Luft herein.",
      "Damit Vögel reinfliegen.",
      "Damit es lauter wird."
     ],
     "correct": 1,
     "explanation": "Stoßlüften.",
     "topic": "pflanzen_luft"
    },
    {
     "id": "plk3l2u_schwer_2",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was passiert mit einer Kerze in einem geschlossenen Glas?",
     "answers": [
      "Sie brennt ewig.",
      "Sie wird größer.",
      "Sie wird kalt.",
      "Sie geht aus, weil Sauerstoff fehlt."
     ],
     "correct": 3,
     "explanation": "Sauerstoff.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🕯️</text></svg>"
    },
    {
     "id": "plk3l2u_schwer_3",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist Luftdruck?",
     "answers": [
      "Die Luft drückt von allen Seiten.",
      "Luft ist leicht wie nichts.",
      "Luft ist Wasser.",
      "Luft ist Licht."
     ],
     "correct": 0,
     "explanation": "Luft drückt.",
     "topic": "pflanzen_luft"
    },
    {
     "id": "plk3l2u_schwer_4",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum bewegt sich ein Windrad?",
     "answers": [
      "Es hat einen Akku.",
      "Der Wind drückt gegen die Flügel.",
      "Die Sonne zieht es.",
      "Vögel schieben es."
     ],
     "correct": 1,
     "explanation": "Wind.",
     "topic": "pflanzen_luft",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌬️</text></svg>"
    },
    {
     "id": "plk3l2u_schwer_5",
     "category": "kurs_pl_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist in der Luft am meisten enthalten?",
     "answers": [
      "Sauerstoff",
      "Wasser",
      "Stickstoff",
      "Rauch"
     ],
     "correct": 2,
     "explanation": "Etwa 78 % Stickstoff.",
     "topic": "pflanzen_luft"
    }
   ]
  },
  "test": [
   {
    "id": "plk3l2_test_1",
    "category": "kurs_pl_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist Wind?",
    "answers": [
     "Regen",
     "Licht",
     "bewegte Luft",
     "Nebel"
    ],
    "correct": 2,
    "explanation": "Bewegte Luft.",
    "topic": "pflanzen_luft"
   },
   {
    "id": "plk3l2_test_2",
    "category": "kurs_pl_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wohin steigt warme Luft?",
    "answers": [
     "nach oben",
     "nach unten",
     "zur Seite",
     "gar nicht"
    ],
    "correct": 0,
    "explanation": "Oben.",
    "topic": "pflanzen_luft"
   },
   {
    "id": "plk3l2_test_3",
    "category": "kurs_pl_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was brauchen wir zum Atmen?",
    "answers": [
     "Sauerstoff",
     "Rauch",
     "Staub",
     "Sand"
    ],
    "correct": 0,
    "explanation": "Sauerstoff.",
    "topic": "pflanzen_luft"
   },
   {
    "id": "plk3l2_test_4",
    "category": "kurs_pl_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum fliegt ein Heißluftballon?",
    "answers": [
     "Flügel",
     "Motor",
     "Magie",
     "warme Luft steigt"
    ],
    "correct": 3,
    "explanation": "Warme Luft.",
    "topic": "pflanzen_luft",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎈</text></svg>"
   },
   {
    "id": "plk3l2_test_5",
    "category": "kurs_pl_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was zeigt eine Windfahne?",
    "answers": [
     "die Windrichtung",
     "die Temperatur",
     "die Uhrzeit",
     "den Regen"
    ],
    "correct": 0,
    "explanation": "Richtung.",
    "topic": "pflanzen_luft"
   },
   {
    "id": "plk3l2_test_6",
    "category": "kurs_pl_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Kann man Luft sehen?",
    "answers": [
     "nein",
     "ja",
     "nur am Tag",
     "nur blau"
    ],
    "correct": 0,
    "explanation": "Unsichtbar.",
    "topic": "pflanzen_luft"
   },
   {
    "id": "plk3l2_test_7",
    "category": "kurs_pl_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wofür nutzt man Wind?",
    "answers": [
     "Windräder",
     "Kühlschränke",
     "Bücher",
     "Kerzen"
    ],
    "correct": 0,
    "explanation": "Windkraft.",
    "topic": "pflanzen_luft",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌬️</text></svg>"
   },
   {
    "id": "plk3l2_test_8",
    "category": "kurs_pl_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was zeigt das umgedrehte Glas im Wasser?",
    "answers": [
     "Luft ist nichts",
     "Wasser ist leicht",
     "Luft braucht Platz",
     "Glas schwimmt"
    ],
    "correct": 2,
    "explanation": "Platz.",
    "topic": "pflanzen_luft"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "ls_k4_l1",
  "kurs": "licht_schall_k4",
  "order": 1,
  "icon": "🔦",
  "title": "Licht und Schatten",
  "kurz": "Wie Schatten entstehen",
  "erklaerung": {
   "intro": "Licht breitet sich <b>geradlinig</b> aus. Trifft es auf einen <b>undurchsichtigen</b> Gegenstand, entsteht dahinter ein <b>Schatten</b>. Der Schatten liegt immer auf der <b>Seite gegenüber der Lichtquelle</b>. Je <b>näher</b> der Gegenstand an der Lampe ist, desto <b>größer</b> der Schatten. Morgens und abends (Sonne tief) sind Schatten <b>lang</b>, mittags <b>kurz</b>.",
   "merksatz": "Schatten = gegenüber vom Licht. Näher an der Lampe = größer.",
   "beispiele": [
    "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🔦🧸</text></svg>Lampe – Teddy – Schatten dahinter",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌅</text></svg>Sonne tief → langer Schatten",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌞</text></svg>Mittags → kurzer Schatten"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "lsk4l1u_leicht_1",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wann entsteht ein Schatten?",
     "answers": [
      "wenn es regnet",
      "wenn es laut ist",
      "wenn ein Gegenstand das Licht verdeckt",
      "wenn es kalt ist"
     ],
     "correct": 2,
     "explanation": "Licht wird abgehalten.",
     "topic": "licht_schall"
    },
    {
     "id": "lsk4l1u_leicht_2",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wo liegt der Schatten?",
     "answers": [
      "auf der Seite gegenüber vom Licht",
      "immer links",
      "immer vor der Lampe",
      "über dem Gegenstand"
     ],
     "correct": 0,
     "explanation": "Gegenüber.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔦</text></svg>"
    },
    {
     "id": "lsk4l1u_leicht_3",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist eine Lichtquelle?",
     "answers": [
      "die Sonne",
      "der Mond",
      "ein Spiegel",
      "ein Stein"
     ],
     "correct": 0,
     "explanation": "Sie leuchtet selbst.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
    },
    {
     "id": "lsk4l1u_leicht_4",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wann sind Schatten am kürzesten?",
     "answers": [
      "morgens",
      "mittags",
      "abends",
      "nachts"
     ],
     "correct": 1,
     "explanation": "Sonne hoch.",
     "topic": "licht_schall"
    },
    {
     "id": "lsk4l1u_leicht_5",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Lässt Glas Licht durch?",
     "answers": [
      "ja, es ist durchsichtig",
      "nein",
      "nur nachts",
      "nur blaues Licht"
     ],
     "correct": 0,
     "explanation": "Durchsichtig.",
     "topic": "licht_schall"
    }
   ],
   "mittel": [
    {
     "id": "lsk4l1u_mittel_1",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wann sind Schatten lang?",
     "answers": [
      "mittags",
      "morgens und abends",
      "nie",
      "nur im Sommer"
     ],
     "correct": 1,
     "explanation": "Sonne tief.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌅</text></svg>"
    },
    {
     "id": "lsk4l1u_mittel_2",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passiert, wenn du den Teddy näher an die Lampe hältst?",
     "answers": [
      "Der Schatten wird größer.",
      "Der Schatten wird kleiner.",
      "Der Schatten verschwindet.",
      "Nichts."
     ],
     "correct": 0,
     "explanation": "Mehr Licht verdeckt.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧸</text></svg>"
    },
    {
     "id": "lsk4l1u_mittel_3",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie breitet sich Licht aus?",
     "answers": [
      "im Zickzack",
      "in Kurven",
      "gar nicht",
      "geradlinig"
     ],
     "correct": 3,
     "explanation": "Gerade.",
     "topic": "licht_schall"
    },
    {
     "id": "lsk4l1u_mittel_4",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Stoff lässt kein Licht durch?",
     "answers": [
      "Glas",
      "Holz",
      "klares Wasser",
      "Klarsichtfolie"
     ],
     "correct": 1,
     "explanation": "Undurchsichtig.",
     "topic": "licht_schall"
    },
    {
     "id": "lsk4l1u_mittel_5",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Ist der Mond eine Lichtquelle?",
     "answers": [
      "ja",
      "nur bei Vollmond",
      "nein, er wird angestrahlt",
      "nur im Winter"
     ],
     "correct": 2,
     "explanation": "Reflektiert Sonnenlicht.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌙</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "lsk4l1u_schwer_1",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Die Sonne steht im Osten. Wohin fällt dein Schatten?",
     "answers": [
      "nach Osten",
      "nach Westen",
      "nach Norden",
      "nach unten"
     ],
     "correct": 1,
     "explanation": "Gegenüber.",
     "topic": "licht_schall"
    },
    {
     "id": "lsk4l1u_schwer_2",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein Spiegel?",
     "answers": [
      "Er macht Licht.",
      "Er schluckt Licht.",
      "Er ist eine Lichtquelle.",
      "Er wirft Licht zurück."
     ],
     "correct": 3,
     "explanation": "Reflexion.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪞</text></svg>"
    },
    {
     "id": "lsk4l1u_schwer_3",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum trägt man nachts helle Kleidung oder Reflektoren?",
     "answers": [
      "Sie leuchten selbst.",
      "Sie werfen das Licht der Autos zurück.",
      "Sie halten warm.",
      "Sie sind modisch."
     ],
     "correct": 1,
     "explanation": "Sicherheit.",
     "topic": "licht_schall"
    },
    {
     "id": "lsk4l1u_schwer_4",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist Milchglas?",
     "answers": [
      "durchscheinend – etwas Licht kommt durch",
      "undurchsichtig",
      "durchsichtig wie Luft",
      "ein Spiegel"
     ],
     "correct": 0,
     "explanation": "Durchscheinend.",
     "topic": "licht_schall"
    },
    {
     "id": "lsk4l1u_schwer_5",
     "category": "kurs_ls_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Zwei Lampen beleuchten einen Ball. Wie viele Schatten gibt es?",
     "answers": [
      "1",
      "0",
      "4",
      "2"
     ],
     "correct": 3,
     "explanation": "Jede Lampe einen.",
     "topic": "licht_schall"
    }
   ]
  },
  "test": [
   {
    "id": "lsk4l1_test_1",
    "category": "kurs_ls_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wann entsteht ein Schatten?",
    "answers": [
     "wenn es regnet",
     "wenn es windig ist",
     "immer",
     "wenn etwas Licht verdeckt"
    ],
    "correct": 3,
    "explanation": "Licht verdeckt.",
    "topic": "licht_schall"
   },
   {
    "id": "lsk4l1_test_2",
    "category": "kurs_ls_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wo liegt der Schatten?",
    "answers": [
     "neben der Lampe",
     "über dem Ding",
     "gegenüber vom Licht",
     "immer rechts"
    ],
    "correct": 2,
    "explanation": "Gegenüber.",
    "topic": "licht_schall"
   },
   {
    "id": "lsk4l1_test_3",
    "category": "kurs_ls_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wann sind Schatten kurz?",
    "answers": [
     "morgens",
     "abends",
     "nachts",
     "mittags"
    ],
    "correct": 3,
    "explanation": "Sonne hoch.",
    "topic": "licht_schall",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌞</text></svg>"
   },
   {
    "id": "lsk4l1_test_4",
    "category": "kurs_ls_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ist die Sonne eine Lichtquelle?",
    "answers": [
     "nein",
     "ja",
     "nur im Sommer",
     "nur mittags"
    ],
    "correct": 1,
    "explanation": "Ja.",
    "topic": "licht_schall"
   },
   {
    "id": "lsk4l1_test_5",
    "category": "kurs_ls_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was lässt Licht durch?",
    "answers": [
     "Holz",
     "Glas",
     "Pappe",
     "Stein"
    ],
    "correct": 1,
    "explanation": "Durchsichtig.",
    "topic": "licht_schall"
   },
   {
    "id": "lsk4l1_test_6",
    "category": "kurs_ls_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Teddy näher an die Lampe – der Schatten wird …",
    "answers": [
     "kleiner",
     "unsichtbar",
     "größer",
     "bunt"
    ],
    "correct": 2,
    "explanation": "Größer.",
    "topic": "licht_schall"
   },
   {
    "id": "lsk4l1_test_7",
    "category": "kurs_ls_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ist der Mond eine Lichtquelle?",
    "answers": [
     "ja",
     "nur bei Vollmond",
     "manchmal",
     "nein"
    ],
    "correct": 3,
    "explanation": "Angestrahlt.",
    "topic": "licht_schall",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌙</text></svg>"
   },
   {
    "id": "lsk4l1_test_8",
    "category": "kurs_ls_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was macht ein Spiegel?",
    "answers": [
     "Licht zurückwerfen",
     "Licht machen",
     "Licht schlucken",
     "Schatten machen"
    ],
    "correct": 0,
    "explanation": "Reflexion.",
    "topic": "licht_schall",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪞</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "ls_k4_l2",
  "kurs": "licht_schall_k4",
  "order": 2,
  "icon": "🔊",
  "title": "Schall",
  "kurz": "Wie Töne entstehen und reisen",
  "erklaerung": {
   "intro": "Schall entsteht, wenn etwas <b>schwingt</b> (vibriert): eine Gitarrensaite, unsere Stimmbänder, eine Trommel. Die Schwingung wird durch die <b>Luft</b> (auch Wasser, Holz) weitergegeben bis zu unserem <b>Ohr</b> – dort schwingt das <b>Trommelfell</b>. Im Weltall gibt es keinen Schall, weil dort keine Luft ist. <b>Lärm</b> kann den Ohren schaden.",
   "merksatz": "Schall = Schwingung. Ohne Luft kein Schall.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎸</text></svg>Saite schwingt → Ton",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥁</text></svg>Trommelfell schwingt",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👂</text></svg>Im Ohr schwingt das Trommelfell"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "lsk4l2u_leicht_1",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie entsteht Schall?",
     "answers": [
      "durch Schwingungen",
      "durch Licht",
      "durch Kälte",
      "durch Farbe"
     ],
     "correct": 0,
     "explanation": "Schwingen.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎸</text></svg>"
    },
    {
     "id": "lsk4l2u_leicht_2",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Womit hören wir?",
     "answers": [
      "mit den Augen",
      "mit den Ohren",
      "mit der Nase",
      "mit den Füßen"
     ],
     "correct": 1,
     "explanation": "Ohren.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👂</text></svg>"
    },
    {
     "id": "lsk4l2u_leicht_3",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was schwingt bei einer Gitarre?",
     "answers": [
      "der Gurt",
      "das Etui",
      "die Saite",
      "der Notenständer"
     ],
     "correct": 2,
     "explanation": "Saite.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎸</text></svg>"
    },
    {
     "id": "lsk4l2u_leicht_4",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was kann den Ohren schaden?",
     "answers": [
      "leise Musik",
      "sehr lauter Lärm",
      "Flüstern",
      "Stille"
     ],
     "correct": 1,
     "explanation": "Lärm.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔊</text></svg>"
    },
    {
     "id": "lsk4l2u_leicht_5",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wodurch kommt Schall meist zu uns?",
     "answers": [
      "durch Licht",
      "durch Farben",
      "durch Gedanken",
      "durch die Luft"
     ],
     "correct": 3,
     "explanation": "Luft.",
     "topic": "licht_schall"
    }
   ],
   "mittel": [
    {
     "id": "lsk4l2u_mittel_1",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Gibt es im Weltall Schall?",
     "answers": [
      "ja, sehr laut",
      "nur bei Sternen",
      "nein, dort ist keine Luft",
      "nur auf dem Mond laut"
     ],
     "correct": 2,
     "explanation": "Keine Luft.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚀</text></svg>"
    },
    {
     "id": "lsk4l2u_mittel_2",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was schwingt in unserem Ohr?",
     "answers": [
      "die Pupille",
      "die Zunge",
      "der Zahn",
      "das Trommelfell"
     ],
     "correct": 3,
     "explanation": "Trommelfell.",
     "topic": "licht_schall"
    },
    {
     "id": "lsk4l2u_mittel_3",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was schwingt, wenn wir sprechen?",
     "answers": [
      "die Zähne",
      "die Ohren",
      "die Stimmbänder",
      "die Haare"
     ],
     "correct": 2,
     "explanation": "Stimmbänder im Hals.",
     "topic": "licht_schall"
    },
    {
     "id": "lsk4l2u_mittel_4",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was schützt vor Lärm?",
     "answers": [
      "Gehörschutz oder Ohrstöpsel",
      "Sonnenbrille",
      "Handschuhe",
      "Mütze im Sommer"
     ],
     "correct": 0,
     "explanation": "Gehörschutz.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎧</text></svg>"
    },
    {
     "id": "lsk4l2u_mittel_5",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist ein Echo?",
     "answers": [
      "Schall, der zurückgeworfen wird",
      "ein Tier",
      "ein Licht",
      "ein Instrument"
     ],
     "correct": 0,
     "explanation": "Echo.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⛰️</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "lsk4l2u_schwer_1",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum sieht man den Blitz vor dem Donner?",
     "answers": [
      "Der Donner ist müde.",
      "Der Blitz ist lauter.",
      "Der Donner kommt später los.",
      "Licht ist schneller als Schall."
     ],
     "correct": 3,
     "explanation": "Licht ist viel schneller.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚡</text></svg>"
    },
    {
     "id": "lsk4l2u_schwer_2",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum hört man durch eine Wand den Nachbarn?",
     "answers": [
      "Die Wand ist offen.",
      "Licht trägt ihn.",
      "Gar nicht.",
      "Schall geht auch durch feste Stoffe."
     ],
     "correct": 3,
     "explanation": "Feste Stoffe leiten.",
     "topic": "licht_schall"
    },
    {
     "id": "lsk4l2u_schwer_3",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein hoher Ton?",
     "answers": [
      "eine langsame Schwingung",
      "gar keine Schwingung",
      "eine schnelle Schwingung",
      "ein lauter Ton immer"
     ],
     "correct": 2,
     "explanation": "Schnell = hoch.",
     "topic": "licht_schall"
    },
    {
     "id": "lsk4l2u_schwer_4",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie können Fledermäuse im Dunkeln fliegen?",
     "answers": [
      "Sie sehen sehr gut.",
      "Sie riechen den Weg.",
      "Sie nutzen das Echo ihrer Rufe.",
      "Sie raten."
     ],
     "correct": 2,
     "explanation": "Echoortung.",
     "topic": "licht_schall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦇</text></svg>"
    },
    {
     "id": "lsk4l2u_schwer_5",
     "category": "kurs_ls_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist leiser?",
     "answers": [
      "Flüstern",
      "Presslufthammer",
      "Rockkonzert",
      "Flugzeug"
     ],
     "correct": 0,
     "explanation": "Flüstern ist leise.",
     "topic": "licht_schall"
    }
   ]
  },
  "test": [
   {
    "id": "lsk4l2_test_1",
    "category": "kurs_ls_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie entsteht Schall?",
    "answers": [
     "durch Licht",
     "durch Wärme",
     "durch Farbe",
     "durch Schwingungen"
    ],
    "correct": 3,
    "explanation": "Schwingen.",
    "topic": "licht_schall"
   },
   {
    "id": "lsk4l2_test_2",
    "category": "kurs_ls_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Womit hören wir?",
    "answers": [
     "Augen",
     "Ohren",
     "Nase",
     "Haut"
    ],
    "correct": 1,
    "explanation": "Ohren.",
    "topic": "licht_schall",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👂</text></svg>"
   },
   {
    "id": "lsk4l2_test_3",
    "category": "kurs_ls_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Gibt es im Weltall Schall?",
    "answers": [
     "nein",
     "ja",
     "nur nachts",
     "nur bei der Sonne"
    ],
    "correct": 0,
    "explanation": "Keine Luft.",
    "topic": "licht_schall"
   },
   {
    "id": "lsk4l2_test_4",
    "category": "kurs_ls_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was schwingt im Ohr?",
    "answers": [
     "Zunge",
     "Trommelfell",
     "Pupille",
     "Haare"
    ],
    "correct": 1,
    "explanation": "Trommelfell.",
    "topic": "licht_schall"
   },
   {
    "id": "lsk4l2_test_5",
    "category": "kurs_ls_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was schützt die Ohren?",
    "answers": [
     "Sonnenbrille",
     "Schal",
     "Gehörschutz",
     "Handschuhe"
    ],
    "correct": 2,
    "explanation": "Gehörschutz.",
    "topic": "licht_schall"
   },
   {
    "id": "lsk4l2_test_6",
    "category": "kurs_ls_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist ein Echo?",
    "answers": [
     "ein Licht",
     "ein Tier",
     "ein Wind",
     "zurückgeworfener Schall"
    ],
    "correct": 3,
    "explanation": "Echo.",
    "topic": "licht_schall"
   },
   {
    "id": "lsk4l2_test_7",
    "category": "kurs_ls_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum sieht man den Blitz zuerst?",
    "answers": [
     "Donner ist langsam müde",
     "Licht ist schneller als Schall",
     "Blitz ist lauter",
     "Zufall"
    ],
    "correct": 1,
    "explanation": "Licht schneller.",
    "topic": "licht_schall",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚡</text></svg>"
   },
   {
    "id": "lsk4l2_test_8",
    "category": "kurs_ls_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was schwingt beim Sprechen?",
    "answers": [
     "Zähne",
     "Stimmbänder",
     "Ohren",
     "Augen"
    ],
    "correct": 1,
    "explanation": "Stimmbänder.",
    "topic": "licht_schall"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "tw_k4_l1",
  "kurs": "tiere_winter_k4",
  "order": 1,
  "icon": "🐦",
  "title": "Zugvögel",
  "kurz": "Wer fliegt im Winter in den Süden?",
  "erklaerung": {
   "intro": "Im Winter finden viele Vögel bei uns <b>kein Futter</b> (keine Insekten). <b>Zugvögel</b> fliegen darum im Herbst in <b>wärmere Länder</b>, z. B. nach Afrika – und kommen im Frühling zurück. Beispiele: <b>Storch, Schwalbe, Kuckuck, Kranich</b>. <b>Standvögel</b> bleiben das ganze Jahr hier: <b>Amsel, Meise, Spatz, Rotkehlchen</b>.",
   "merksatz": "Zugvögel ziehen weg – Standvögel bleiben.",
   "beispiele": [
    "<svg viewBox='0 0 288 93' style='width:100%;max-width:288px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='144' y='73' text-anchor='middle' font-size='72'>🕊️✈️🌍</text></svg>Storch fliegt nach Afrika",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐦</text></svg>Meise bleibt – Standvogel",
    "Kraniche fliegen in V-Form"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "twk4l1u_leicht_1",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Warum fliegen Zugvögel im Herbst weg?",
     "answers": [
      "Sie haben Urlaub.",
      "Sie mögen keinen Schnee ansehen.",
      "Sie finden im Winter kein Futter.",
      "Sie verlaufen sich."
     ],
     "correct": 2,
     "explanation": "Futter fehlt.",
     "topic": "tiere_winter"
    },
    {
     "id": "twk4l1u_leicht_2",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Vogel ist ein Zugvogel?",
     "answers": [
      "Amsel",
      "Storch",
      "Spatz",
      "Meise"
     ],
     "correct": 1,
     "explanation": "Storch.",
     "topic": "tiere_winter"
    },
    {
     "id": "twk4l1u_leicht_3",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Vogel bleibt im Winter hier?",
     "answers": [
      "Storch",
      "Schwalbe",
      "Meise",
      "Kuckuck"
     ],
     "correct": 2,
     "explanation": "Standvogel.",
     "topic": "tiere_winter"
    },
    {
     "id": "twk4l1u_leicht_4",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wohin fliegen viele Zugvögel?",
     "answers": [
      "zum Nordpol",
      "nach Afrika",
      "auf den Mond",
      "in den Keller"
     ],
     "correct": 1,
     "explanation": "In den warmen Süden.",
     "topic": "tiere_winter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌍</text></svg>"
    },
    {
     "id": "twk4l1u_leicht_5",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wann kommen die Zugvögel zurück?",
     "answers": [
      "im Frühling",
      "im Winter",
      "nie",
      "an Weihnachten"
     ],
     "correct": 0,
     "explanation": "Frühling.",
     "topic": "tiere_winter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌷</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "twk4l1u_mittel_1",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie heißen Vögel, die das ganze Jahr hier bleiben?",
     "answers": [
      "Zugvögel",
      "Wintervögel aus Afrika",
      "Standvögel",
      "Seevögel"
     ],
     "correct": 2,
     "explanation": "Standvögel.",
     "topic": "tiere_winter"
    },
    {
     "id": "twk4l1u_mittel_2",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Vogel fliegt oft in V-Form?",
     "answers": [
      "Kranich",
      "Spatz",
      "Amsel",
      "Huhn"
     ],
     "correct": 0,
     "explanation": "Kraniche.",
     "topic": "tiere_winter"
    },
    {
     "id": "twk4l1u_mittel_3",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was fressen Schwalben?",
     "answers": [
      "Körner",
      "Insekten",
      "Fisch",
      "Gras"
     ],
     "correct": 1,
     "explanation": "Im Winter gibt es keine Insekten.",
     "topic": "tiere_winter"
    },
    {
     "id": "twk4l1u_mittel_4",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie kann man Vögeln im Winter helfen?",
     "answers": [
      "Brot mit Salz geben",
      "Nester zerstören",
      "Futterhaus mit Körnern aufstellen",
      "laut sein"
     ],
     "correct": 2,
     "explanation": "Futterhaus.",
     "topic": "tiere_winter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏠</text></svg>"
    },
    {
     "id": "twk4l1u_mittel_5",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Vogel ruft seinen Namen?",
     "answers": [
      "Storch",
      "Meise",
      "Spatz",
      "Kuckuck"
     ],
     "correct": 3,
     "explanation": "Ku-ckuck!",
     "topic": "tiere_winter"
    }
   ],
   "schwer": [
    {
     "id": "twk4l1u_schwer_1",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum fliegen Kraniche in V-Form?",
     "answers": [
      "Sie sparen Kraft im Windschatten.",
      "Weil es schön aussieht.",
      "Damit sie sich sehen.",
      "Zufall."
     ],
     "correct": 0,
     "explanation": "Energie sparen.",
     "topic": "tiere_winter"
    },
    {
     "id": "twk4l1u_schwer_2",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Woran orientieren sich Zugvögel?",
     "answers": [
      "an Straßenschildern",
      "an Sonne, Sternen und dem Magnetfeld der Erde",
      "an Handys",
      "gar nicht"
     ],
     "correct": 1,
     "explanation": "Innerer Kompass.",
     "topic": "tiere_winter"
    },
    {
     "id": "twk4l1u_schwer_3",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum bleibt die Amsel im Winter hier?",
     "answers": [
      "Sie kann nicht fliegen.",
      "Sie mag Schnee.",
      "Sie hat keinen Pass.",
      "Sie frisst auch Beeren und Körner."
     ],
     "correct": 3,
     "explanation": "Anderes Futter.",
     "topic": "tiere_winter"
    },
    {
     "id": "twk4l1u_schwer_4",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie weit fliegen Störche ungefähr?",
     "answers": [
      "10 km",
      "100 km",
      "über 10 000 km",
      "1 km"
     ],
     "correct": 2,
     "explanation": "Bis Südafrika.",
     "topic": "tiere_winter"
    },
    {
     "id": "twk4l1u_schwer_5",
     "category": "kurs_tw_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein Wintergast?",
     "answers": [
      "ein Vogel aus dem Norden, der bei uns überwintert",
      "ein Vogel, der im Sommer kommt",
      "ein Haustier",
      "ein Pinguin"
     ],
     "correct": 0,
     "explanation": "z. B. Bergfink.",
     "topic": "tiere_winter"
    }
   ]
  },
  "test": [
   {
    "id": "twk4l1_test_1",
    "category": "kurs_tw_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum ziehen Vögel weg?",
    "answers": [
     "Urlaub",
     "Langeweile",
     "Lärm",
     "kein Futter im Winter"
    ],
    "correct": 3,
    "explanation": "Futter.",
    "topic": "tiere_winter"
   },
   {
    "id": "twk4l1_test_2",
    "category": "kurs_tw_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher ist ein Zugvogel?",
    "answers": [
     "Schwalbe",
     "Amsel",
     "Spatz",
     "Meise"
    ],
    "correct": 0,
    "explanation": "Schwalbe.",
    "topic": "tiere_winter"
   },
   {
    "id": "twk4l1_test_3",
    "category": "kurs_tw_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher ist ein Standvogel?",
    "answers": [
     "Storch",
     "Spatz",
     "Kuckuck",
     "Kranich"
    ],
    "correct": 1,
    "explanation": "Spatz.",
    "topic": "tiere_winter"
   },
   {
    "id": "twk4l1_test_4",
    "category": "kurs_tw_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wann kommen Zugvögel zurück?",
    "answers": [
     "im Winter",
     "im Frühling",
     "im Herbst",
     "nie"
    ],
    "correct": 1,
    "explanation": "Frühling.",
    "topic": "tiere_winter"
   },
   {
    "id": "twk4l1_test_5",
    "category": "kurs_tw_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wohin fliegen viele Zugvögel?",
    "answers": [
     "zum Nordpol",
     "nach Grönland",
     "nirgendwohin",
     "nach Afrika"
    ],
    "correct": 3,
    "explanation": "Afrika.",
    "topic": "tiere_winter",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌍</text></svg>"
   },
   {
    "id": "twk4l1_test_6",
    "category": "kurs_tw_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie hilfst du Vögeln im Winter?",
    "answers": [
     "Brot mit Salz",
     "Lärm",
     "nichts",
     "Futterhaus"
    ],
    "correct": 3,
    "explanation": "Futterhaus.",
    "topic": "tiere_winter"
   },
   {
    "id": "twk4l1_test_7",
    "category": "kurs_tw_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was fressen Schwalben?",
    "answers": [
     "Körner",
     "Gras",
     "Insekten",
     "Fisch"
    ],
    "correct": 2,
    "explanation": "Insekten.",
    "topic": "tiere_winter"
   },
   {
    "id": "twk4l1_test_8",
    "category": "kurs_tw_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Vögel fliegen in V-Form?",
    "answers": [
     "Kraniche",
     "Hühner",
     "Spatzen",
     "Meisen"
    ],
    "correct": 0,
    "explanation": "Kraniche.",
    "topic": "tiere_winter"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "tw_k4_l2",
  "kurs": "tiere_winter_k4",
  "order": 2,
  "icon": "🦔",
  "title": "Winterschlaf, Winterruhe, Winterstarre",
  "kurz": "Wie Tiere den Winter überstehen",
  "erklaerung": {
   "intro": "Tiere überstehen den Winter verschieden: <b>Winterschlaf</b> – Körper fährt stark herunter, kaum Herzschlag, man wacht fast nie auf (<b>Igel, Fledermaus, Siebenschläfer</b>). <b>Winterruhe</b> – viel schlafen, aber zwischendurch aufwachen und fressen (<b>Eichhörnchen, Dachs</b>). <b>Winterstarre</b> – wechselwarme Tiere werden kalt und steif (<b>Frosch, Eidechse, Schlange</b>). Andere sind <b>winteraktiv</b> mit dickem Fell (Fuchs, Reh).",
   "merksatz": "Schlaf (Igel) – Ruhe (Eichhörnchen) – Starre (Frosch) – aktiv (Fuchs).",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦔</text></svg>Igel: Winterschlaf",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐿️</text></svg>Eichhörnchen: Winterruhe",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐸</text></svg>Frosch: Winterstarre"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "twk4l2u_leicht_1",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Tier hält Winterschlaf?",
     "answers": [
      "Igel",
      "Fuchs",
      "Reh",
      "Eichhörnchen"
     ],
     "correct": 0,
     "explanation": "Igel.",
     "topic": "tiere_winter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦔</text></svg>"
    },
    {
     "id": "twk4l2u_leicht_2",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Tier hält Winterruhe?",
     "answers": [
      "Igel",
      "Frosch",
      "Eichhörnchen",
      "Schlange"
     ],
     "correct": 2,
     "explanation": "Eichhörnchen.",
     "topic": "tiere_winter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐿️</text></svg>"
    },
    {
     "id": "twk4l2u_leicht_3",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Tier fällt in Winterstarre?",
     "answers": [
      "Fuchs",
      "Igel",
      "Frosch",
      "Dachs"
     ],
     "correct": 2,
     "explanation": "Frosch.",
     "topic": "tiere_winter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐸</text></svg>"
    },
    {
     "id": "twk4l2u_leicht_4",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Tier ist im Winter aktiv?",
     "answers": [
      "Igel",
      "Frosch",
      "Fledermaus",
      "Fuchs"
     ],
     "correct": 3,
     "explanation": "Fuchs.",
     "topic": "tiere_winter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦊</text></svg>"
    },
    {
     "id": "twk4l2u_leicht_5",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was hilft Tieren gegen Kälte?",
     "answers": [
      "dünnes Fell",
      "nasses Fell",
      "gar kein Fell",
      "dickes Winterfell"
     ],
     "correct": 3,
     "explanation": "Winterfell.",
     "topic": "tiere_winter"
    }
   ],
   "mittel": [
    {
     "id": "twk4l2u_mittel_1",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist der Unterschied zwischen Winterschlaf und Winterruhe?",
     "answers": [
      "Kein Unterschied.",
      "Beim Winterschlaf frisst das Tier viel.",
      "Bei der Winterruhe wacht das Tier zwischendurch auf und frisst.",
      "Winterruhe dauert nur einen Tag."
     ],
     "correct": 2,
     "explanation": "Aufwachen.",
     "topic": "tiere_winter"
    },
    {
     "id": "twk4l2u_mittel_2",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum frisst der Igel im Herbst viel?",
     "answers": [
      "Er hat Langeweile.",
      "Er wächst schnell.",
      "Er will verkaufen.",
      "Er braucht Fettreserven für den Winterschlaf."
     ],
     "correct": 3,
     "explanation": "Fett speichern.",
     "topic": "tiere_winter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦔</text></svg>"
    },
    {
     "id": "twk4l2u_mittel_3",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum legen Eichhörnchen Vorräte an?",
     "answers": [
      "Sie wachen auf und brauchen Futter.",
      "Zum Spielen.",
      "Für andere Tiere.",
      "Aus Versehen."
     ],
     "correct": 0,
     "explanation": "Winterruhe.",
     "topic": "tiere_winter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌰</text></svg>"
    },
    {
     "id": "twk4l2u_mittel_4",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Tier hält Winterschlaf?",
     "answers": [
      "Reh",
      "Fledermaus",
      "Wildschwein",
      "Fuchs"
     ],
     "correct": 1,
     "explanation": "Fledermaus.",
     "topic": "tiere_winter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦇</text></svg>"
    },
    {
     "id": "twk4l2u_mittel_5",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie fühlt sich ein Tier in Winterstarre an?",
     "answers": [
      "warm und weich",
      "kalt und steif",
      "nass und laut",
      "heiß"
     ],
     "correct": 1,
     "explanation": "Starre.",
     "topic": "tiere_winter"
    }
   ],
   "schwer": [
    {
     "id": "twk4l2u_schwer_1",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum fallen Frösche in Winterstarre?",
     "answers": [
      "Sie sind faul.",
      "Sie sind wechselwarm – ihre Körpertemperatur passt sich an.",
      "Sie haben Fell.",
      "Sie sind Vögel."
     ],
     "correct": 1,
     "explanation": "Wechselwarm.",
     "topic": "tiere_winter"
    },
    {
     "id": "twk4l2u_schwer_2",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was sollte man tun, wenn man einen Igel im Laubhaufen findet?",
     "answers": [
      "aufwecken",
      "ihn in Ruhe lassen",
      "mit nach Hause nehmen",
      "Milch geben"
     ],
     "correct": 1,
     "explanation": "Nicht stören!",
     "topic": "tiere_winter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍂</text></svg>"
    },
    {
     "id": "twk4l2u_schwer_3",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie sinkt der Herzschlag beim Igel im Winterschlaf?",
     "answers": [
      "gar nicht",
      "er steigt",
      "sehr stark – nur wenige Schläge pro Minute",
      "er verdoppelt sich"
     ],
     "correct": 2,
     "explanation": "Stark gesenkt.",
     "topic": "tiere_winter"
    },
    {
     "id": "twk4l2u_schwer_4",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Tier heißt sogar nach seinem langen Schlaf?",
     "answers": [
      "Murmelhase",
      "Siebenschläfer",
      "Schlafmaus-Fuchs",
      "Dauerreh"
     ],
     "correct": 1,
     "explanation": "Siebenschläfer.",
     "topic": "tiere_winter"
    },
    {
     "id": "twk4l2u_schwer_5",
     "category": "kurs_tw_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wo überwintern Frösche oft?",
     "answers": [
      "auf Bäumen",
      "im Schlamm am Grund von Teichen",
      "in Vogelnestern",
      "im Schnee oben"
     ],
     "correct": 1,
     "explanation": "Im Schlamm.",
     "topic": "tiere_winter"
    }
   ]
  },
  "test": [
   {
    "id": "twk4l2_test_1",
    "category": "kurs_tw_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wer hält Winterschlaf?",
    "answers": [
     "Fuchs",
     "Reh",
     "Frosch",
     "Igel"
    ],
    "correct": 3,
    "explanation": "Igel.",
    "topic": "tiere_winter",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦔</text></svg>"
   },
   {
    "id": "twk4l2_test_2",
    "category": "kurs_tw_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wer hält Winterruhe?",
    "answers": [
     "Igel",
     "Frosch",
     "Eichhörnchen",
     "Eidechse"
    ],
    "correct": 2,
    "explanation": "Eichhörnchen.",
    "topic": "tiere_winter"
   },
   {
    "id": "twk4l2_test_3",
    "category": "kurs_tw_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wer fällt in Winterstarre?",
    "answers": [
     "Fuchs",
     "Dachs",
     "Igel",
     "Eidechse"
    ],
    "correct": 3,
    "explanation": "Eidechse.",
    "topic": "tiere_winter",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦎</text></svg>"
   },
   {
    "id": "twk4l2_test_4",
    "category": "kurs_tw_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wer ist winteraktiv?",
    "answers": [
     "Igel",
     "Frosch",
     "Reh",
     "Fledermaus"
    ],
    "correct": 2,
    "explanation": "Reh.",
    "topic": "tiere_winter",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦌</text></svg>"
   },
   {
    "id": "twk4l2_test_5",
    "category": "kurs_tw_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist Winterruhe?",
    "answers": [
     "schlafen ohne Aufwachen",
     "starr werden",
     "wegfliegen",
     "schlafen mit Aufwachen und Fressen"
    ],
    "correct": 3,
    "explanation": "Ruhe.",
    "topic": "tiere_winter"
   },
   {
    "id": "twk4l2_test_6",
    "category": "kurs_tw_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum frisst der Igel im Herbst viel?",
    "answers": [
     "Langeweile",
     "Spaß",
     "Fettreserven",
     "Hunger nur"
    ],
    "correct": 2,
    "explanation": "Fett.",
    "topic": "tiere_winter"
   },
   {
    "id": "twk4l2_test_7",
    "category": "kurs_tw_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was tust du, wenn du einen schlafenden Igel findest?",
    "answers": [
     "wecken",
     "in Ruhe lassen",
     "mitnehmen",
     "füttern mit Milch"
    ],
    "correct": 1,
    "explanation": "Ruhe.",
    "topic": "tiere_winter"
   },
   {
    "id": "twk4l2_test_8",
    "category": "kurs_tw_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum fallen Frösche in Starre?",
    "answers": [
     "Sie haben Fell.",
     "Sie sind faul.",
     "Sie sind wechselwarm.",
     "Sie fliegen weg."
    ],
    "correct": 2,
    "explanation": "Wechselwarm.",
    "topic": "tiere_winter",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐸</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
