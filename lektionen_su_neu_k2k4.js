// Neue Sachunterricht-Kurse: Müll K2, Feuer K3, Weltall + Medien K4 (28.11.2026)
(function () {
    const extraKurse = [{"id": "muell_k2", "title": "Müll und Umwelt", "icon": "♻️", "grade": 2, "subject": "sachunterricht", "beschreibung": "Müll richtig trennen und die Umwelt schützen."}, {"id": "feuer_k3", "title": "Feuer und Notruf", "icon": "🚒", "grade": 3, "subject": "sachunterricht", "beschreibung": "Was Feuer braucht, wie man löscht und den Notruf 112 richtig wählt."}, {"id": "weltall_k4", "title": "Sonne, Erde, Mond", "icon": "🌍", "grade": 4, "subject": "sachunterricht", "beschreibung": "Tag und Nacht, Jahreszeiten, Mondphasen und die Planeten."}, {"id": "medien_k4", "title": "Sicher im Internet", "icon": "📱", "grade": 4, "subject": "sachunterricht", "beschreibung": "Medien klug nutzen, Daten schützen, fair chatten."}];
    const extraLektionen = [
 {
  "id": "mu_k2_l1",
  "kurs": "muell_k2",
  "order": 1,
  "icon": "🗑️",
  "title": "Müll richtig trennen",
  "kurz": "Welche Tonne für welchen Müll?",
  "erklaerung": {
   "intro": "Müll kommt in verschiedene Tonnen, damit man ihn <b>wiederverwerten</b> kann (Recycling). <b>Blau:</b> Papier und Pappe. <b>Gelb:</b> Verpackungen aus Plastik und Metall. <b>Braun:</b> Bioabfall wie Obstschalen. <b>Schwarz/Grau:</b> Restmüll. <b>Glas</b> kommt in den Glascontainer – nach Farben getrennt.",
   "merksatz": "Blau = Papier, Gelb = Verpackung, Braun = Bio, Grau = Rest, Glas in den Container.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📰</text></svg>Zeitung → blaue Tonne",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧴</text></svg>Joghurtbecher → gelbe Tonne",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍌</text></svg>Bananenschale → Biotonne"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "muk2l1u_leicht_1",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wohin gehört eine alte Zeitung? 📰",
     "answers": [
      "in die gelbe Tonne",
      "in die blaue Tonne",
      "in die Biotonne",
      "in den Restmüll"
     ],
     "correct": 1,
     "explanation": "Papier → blaue Tonne.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📰</text></svg>"
    },
    {
     "id": "muk2l1u_leicht_2",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wohin gehört eine Bananenschale? 🍌",
     "answers": [
      "in die blaue Tonne",
      "in die gelbe Tonne",
      "in den Glascontainer",
      "in die Biotonne"
     ],
     "correct": 3,
     "explanation": "Obstreste sind Bioabfall.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍌</text></svg>"
    },
    {
     "id": "muk2l1u_leicht_3",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wohin gehört ein leerer Joghurtbecher?",
     "answers": [
      "in die blaue Tonne",
      "in die Biotonne",
      "in die gelbe Tonne",
      "in den Glascontainer"
     ],
     "correct": 2,
     "explanation": "Plastikverpackung → gelb.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥛</text></svg>"
    },
    {
     "id": "muk2l1u_leicht_4",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wohin gehört eine leere Glasflasche? 🍾",
     "answers": [
      "in die gelbe Tonne",
      "in den Glascontainer",
      "in die Biotonne",
      "in die blaue Tonne"
     ],
     "correct": 1,
     "explanation": "Glas kommt in den Container.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍾</text></svg>"
    },
    {
     "id": "muk2l1u_leicht_5",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was bedeutet Recycling?",
     "answers": [
      "Müll wird vergraben.",
      "Müll wird ins Meer geworfen.",
      "Aus Müll wird etwas Neues gemacht.",
      "Müll wird versteckt."
     ],
     "correct": 2,
     "explanation": "Wiederverwerten = Recycling.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>♻️</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "muk2l1u_mittel_1",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wohin gehört ein Pappkarton? 📦",
     "answers": [
      "in die gelbe Tonne",
      "in die blaue Tonne",
      "in die Biotonne",
      "in den Restmüll"
     ],
     "correct": 1,
     "explanation": "Pappe ist Papier.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📦</text></svg>"
    },
    {
     "id": "muk2l1u_mittel_2",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wohin gehört eine leere Konservendose? 🥫",
     "answers": [
      "in die blaue Tonne",
      "in die gelbe Tonne",
      "in die Biotonne",
      "in den Glascontainer"
     ],
     "correct": 1,
     "explanation": "Metallverpackung → gelb.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥫</text></svg>"
    },
    {
     "id": "muk2l1u_mittel_3",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wohin gehören Kartoffelschalen? 🥔",
     "answers": [
      "in die gelbe Tonne",
      "in die blaue Tonne",
      "in die Biotonne",
      "in den Glascontainer"
     ],
     "correct": 2,
     "explanation": "Gemüsereste → Bio.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥔</text></svg>"
    },
    {
     "id": "muk2l1u_mittel_4",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wohin gehört eine alte Windel?",
     "answers": [
      "in den Restmüll",
      "in die Biotonne",
      "in die blaue Tonne",
      "in die gelbe Tonne"
     ],
     "correct": 0,
     "explanation": "Windeln sind Restmüll.",
     "topic": "muell_umwelt"
    },
    {
     "id": "muk2l1u_mittel_5",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum trennt man Müll?",
     "answers": [
      "damit man Rohstoffe wiederverwenden kann",
      "damit die Tonnen bunt sind",
      "damit der Müll schwerer wird",
      "weil es Spaß macht"
     ],
     "correct": 0,
     "explanation": "Trennen spart Rohstoffe.",
     "topic": "muell_umwelt"
    }
   ],
   "schwer": [
    {
     "id": "muk2l1u_schwer_1",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wohin gehören alte Batterien? 🔋",
     "answers": [
      "in die gelbe Tonne",
      "in die Biotonne",
      "in eine Sammelbox im Laden",
      "in den Garten"
     ],
     "correct": 2,
     "explanation": "Batterien sind giftig – Sammelbox!",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔋</text></svg>"
    },
    {
     "id": "muk2l1u_schwer_2",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was macht man mit einer braunen und einer weißen Glasflasche?",
     "answers": [
      "nach Farben getrennt in den Glascontainer",
      "beide in die gelbe Tonne",
      "beide in den Restmüll",
      "in die Biotonne"
     ],
     "correct": 0,
     "explanation": "Glas nach Farben trennen.",
     "topic": "muell_umwelt"
    },
    {
     "id": "muk2l1u_schwer_3",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist Kompost?",
     "answers": [
      "ein Plastikberg",
      "eine Tonne",
      "ein Spielzeug",
      "Erde, die aus Bioabfall entsteht"
     ],
     "correct": 3,
     "explanation": "Bioabfall wird zu Erde.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪱</text></svg>"
    },
    {
     "id": "muk2l1u_schwer_4",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wohin gehört ein kaputtes Handy? 📱",
     "answers": [
      "in die Biotonne",
      "zum Wertstoffhof oder in eine Sammelstelle",
      "in die blaue Tonne",
      "in den Wald"
     ],
     "correct": 1,
     "explanation": "Elektrogeräte sind Sondermüll.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📱</text></svg>"
    },
    {
     "id": "muk2l1u_schwer_5",
     "category": "kurs_mu_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was wird aus Altpapier gemacht?",
     "answers": [
      "Glasflaschen",
      "neues Papier, z. B. Hefte",
      "Plastikbecher",
      "Erde"
     ],
     "correct": 1,
     "explanation": "Recyclingpapier.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📓</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "muk2l1_test_1",
    "category": "kurs_mu_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wohin gehört eine Eierschale? 🥚",
    "answers": [
     "in die gelbe Tonne",
     "in die Biotonne",
     "in die blaue Tonne",
     "in den Glascontainer"
    ],
    "correct": 1,
    "explanation": "Bioabfall.",
    "topic": "muell_umwelt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥚</text></svg>"
   },
   {
    "id": "muk2l1_test_2",
    "category": "kurs_mu_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Farbe hat die Papiertonne meist?",
    "answers": [
     "gelb",
     "blau",
     "braun",
     "grau"
    ],
    "correct": 1,
    "explanation": "Blau = Papier.",
    "topic": "muell_umwelt"
   },
   {
    "id": "muk2l1_test_3",
    "category": "kurs_mu_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wohin gehört eine Chipstüte?",
    "answers": [
     "in die blaue Tonne",
     "in die Biotonne",
     "in den Glascontainer",
     "in die gelbe Tonne"
    ],
    "correct": 3,
    "explanation": "Verpackung → gelb.",
    "topic": "muell_umwelt"
   },
   {
    "id": "muk2l1_test_4",
    "category": "kurs_mu_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wohin gehört ein Schuhkarton?",
    "answers": [
     "in die blaue Tonne",
     "in die gelbe Tonne",
     "in den Restmüll",
     "in die Biotonne"
    ],
    "correct": 0,
    "explanation": "Pappe → blau.",
    "topic": "muell_umwelt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📦</text></svg>"
   },
   {
    "id": "muk2l1_test_5",
    "category": "kurs_mu_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wohin gehört ein leeres Marmeladenglas?",
    "answers": [
     "in die gelbe Tonne",
     "in die blaue Tonne",
     "in die Biotonne",
     "in den Glascontainer"
    ],
    "correct": 3,
    "explanation": "Glas → Container.",
    "topic": "muell_umwelt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🫙</text></svg>"
   },
   {
    "id": "muk2l1_test_6",
    "category": "kurs_mu_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was gehört in die gelbe Tonne?",
    "answers": [
     "ein Apfelrest",
     "eine Zeitung",
     "eine leere Shampooflasche",
     "ein Glas"
    ],
    "correct": 2,
    "explanation": "Plastikverpackung.",
    "topic": "muell_umwelt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧴</text></svg>"
   },
   {
    "id": "muk2l1_test_7",
    "category": "kurs_mu_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was entsteht aus Bioabfall?",
    "answers": [
     "Kompost-Erde",
     "Papier",
     "Glas",
     "Plastik"
    ],
    "correct": 0,
    "explanation": "Bio wird zu Erde.",
    "topic": "muell_umwelt"
   },
   {
    "id": "muk2l1_test_8",
    "category": "kurs_mu_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wohin gehören alte Batterien?",
    "answers": [
     "in eine Sammelbox",
     "in die Biotonne",
     "in die blaue Tonne",
     "in den Restmüll"
    ],
    "correct": 0,
    "explanation": "Batterien sammeln!",
    "topic": "muell_umwelt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔋</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "mu_k2_l2",
  "kurs": "muell_k2",
  "order": 2,
  "icon": "🌱",
  "title": "Umwelt schützen",
  "kurz": "Müll vermeiden, Wasser und Strom sparen",
  "erklaerung": {
   "intro": "Noch besser als Müll trennen ist <b>Müll vermeiden</b>: Brotdose statt Alufolie, Trinkflasche statt Einwegflasche, Stoffbeutel statt Plastiktüte. Auch <b>Wasser und Strom sparen</b> schützt die Umwelt. Und: Müll gehört nie in die Natur – Tiere können daran sterben.",
   "merksatz": "Vermeiden – wiederverwenden – trennen.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥪</text></svg>Brotdose statt Alufolie",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚰</text></svg>Wasser beim Zähneputzen abdrehen",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💡</text></svg>Licht ausmachen, wenn du rausgehst"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "muk2l2u_leicht_1",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was spart Müll?",
     "answers": [
      "Alufolie",
      "eine Brotdose",
      "eine Plastiktüte",
      "ein Einwegbecher"
     ],
     "correct": 1,
     "explanation": "Die Brotdose kann man immer wieder nehmen.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥪</text></svg>"
    },
    {
     "id": "muk2l2u_leicht_2",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was spart Wasser?",
     "answers": [
      "den Hahn laufen lassen",
      "beim Zähneputzen den Hahn zudrehen",
      "jeden Tag lange baden",
      "Wasser verschütten"
     ],
     "correct": 1,
     "explanation": "Hahn zu beim Putzen.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚰</text></svg>"
    },
    {
     "id": "muk2l2u_leicht_3",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was spart Strom?",
     "answers": [
      "Licht immer anlassen",
      "Fernseher laufen lassen",
      "Kühlschrank offen lassen",
      "Licht ausmachen, wenn keiner im Raum ist"
     ],
     "correct": 3,
     "explanation": "Licht aus spart Strom.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💡</text></svg>"
    },
    {
     "id": "muk2l2u_leicht_4",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was machst du mit Müll beim Picknick?",
     "answers": [
      "liegen lassen",
      "im Busch verstecken",
      "mitnehmen und zu Hause wegwerfen",
      "in den See werfen"
     ],
     "correct": 2,
     "explanation": "Müll gehört nicht in die Natur.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧺</text></svg>"
    },
    {
     "id": "muk2l2u_leicht_5",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist besser für die Umwelt?",
     "answers": [
      "Plastiktüte",
      "Papiertüte jedes Mal neu",
      "Stoffbeutel",
      "Alufolie"
     ],
     "correct": 2,
     "explanation": "Stoffbeutel nimmt man oft.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👜</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "muk2l2u_mittel_1",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum ist Plastik im Meer gefährlich?",
     "answers": [
      "Das Meer wird bunter.",
      "Fische spielen damit.",
      "Es macht das Wasser sauber.",
      "Tiere fressen es und werden krank."
     ],
     "correct": 3,
     "explanation": "Plastik schadet Tieren.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐢</text></svg>"
    },
    {
     "id": "muk2l2u_mittel_2",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was kann man wiederverwenden?",
     "answers": [
      "ein benutztes Taschentuch",
      "eine leere Batterie",
      "eine Bananenschale",
      "ein Marmeladenglas als Stiftebecher"
     ],
     "correct": 3,
     "explanation": "Basteln statt wegwerfen.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🫙</text></svg>"
    },
    {
     "id": "muk2l2u_mittel_3",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Weg zur Schule ist gut für die Umwelt?",
     "answers": [
      "mit dem Auto allein",
      "mit dem Taxi",
      "zu Fuß oder mit dem Rad",
      "mit dem Flugzeug"
     ],
     "correct": 2,
     "explanation": "Kein Abgas.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚲</text></svg>"
    },
    {
     "id": "muk2l2u_mittel_4",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist besser zu trinken in der Schule?",
     "answers": [
      "jeden Tag eine neue Plastikflasche",
      "Saft im Tetrapack jeden Tag",
      "Dosen",
      "Trinkflasche zum Nachfüllen"
     ],
     "correct": 3,
     "explanation": "Mehrweg spart Müll.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥤</text></svg>"
    },
    {
     "id": "muk2l2u_mittel_5",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was bedeutet 'Mehrweg'?",
     "answers": [
      "Die Flasche wird viele Male benutzt.",
      "Sie wird nur einmal benutzt.",
      "Sie ist aus Gold.",
      "Sie ist leer."
     ],
     "correct": 0,
     "explanation": "Mehrweg = oft benutzen.",
     "topic": "muell_umwelt"
    }
   ],
   "schwer": [
    {
     "id": "muk2l2u_schwer_1",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie lange braucht eine Plastikflasche, bis sie in der Natur zerfällt?",
     "answers": [
      "ein Tag",
      "eine Woche",
      "ein Monat",
      "Hunderte Jahre"
     ],
     "correct": 3,
     "explanation": "Plastik zerfällt sehr langsam.",
     "topic": "muell_umwelt"
    },
    {
     "id": "muk2l2u_schwer_2",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein Pfand?",
     "answers": [
      "eine Mülltonne",
      "Geld, das man für leere Flaschen zurückbekommt",
      "ein Spielzeug",
      "eine Strafe"
     ],
     "correct": 1,
     "explanation": "Pfand bringt Flaschen zurück.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍾</text></svg>"
    },
    {
     "id": "muk2l2u_schwer_3",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Reihenfolge ist am besten für die Umwelt?",
     "answers": [
      "wegwerfen, kaufen, wegwerfen",
      "vermeiden, wiederverwenden, trennen",
      "trennen, verbrennen, kaufen",
      "kaufen, liegen lassen, vergessen"
     ],
     "correct": 1,
     "explanation": "Zuerst vermeiden.",
     "topic": "muell_umwelt"
    },
    {
     "id": "muk2l2u_schwer_4",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was kannst du mit zu klein gewordener Kleidung machen?",
     "answers": [
      "in die Biotonne werfen",
      "im Wald lassen",
      "verbrennen",
      "verschenken oder spenden"
     ],
     "correct": 3,
     "explanation": "Andere freuen sich.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👕</text></svg>"
    },
    {
     "id": "muk2l2u_schwer_5",
     "category": "kurs_mu_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wofür steht das Zeichen ♻️?",
     "answers": [
      "Gefahr",
      "Verbot",
      "Recycling",
      "Strom"
     ],
     "correct": 2,
     "explanation": "Die Pfeile laufen im Kreis.",
     "topic": "muell_umwelt",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>♻️</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "muk2l2_test_1",
    "category": "kurs_mu_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was spart Müll in der Pause?",
    "answers": [
     "Alufolie und Einwegflasche",
     "Plastiktüte",
     "Brotdose und Trinkflasche",
     "Einwegbecher"
    ],
    "correct": 2,
    "explanation": "Mehrweg.",
    "topic": "muell_umwelt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥪</text></svg>"
   },
   {
    "id": "muk2l2_test_2",
    "category": "kurs_mu_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was spart Wasser?",
    "answers": [
     "jeden Tag baden",
     "Wasser laufen lassen",
     "Spielen mit dem Schlauch",
     "duschen statt baden"
    ],
    "correct": 3,
    "explanation": "Duschen braucht weniger Wasser.",
    "topic": "muell_umwelt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚿</text></svg>"
   },
   {
    "id": "muk2l2_test_3",
    "category": "kurs_mu_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wohin gehört Müll im Wald?",
    "answers": [
     "unter einen Stein",
     "in den Bach",
     "in den Rucksack und dann in die Tonne",
     "ins Laub"
    ],
    "correct": 2,
    "explanation": "Mitnehmen!",
    "topic": "muell_umwelt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌲</text></svg>"
   },
   {
    "id": "muk2l2_test_4",
    "category": "kurs_mu_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum ist Plastikmüll für Tiere gefährlich?",
    "answers": [
     "Er macht sie stark.",
     "Er ist ihr Futter.",
     "Sie können ihn fressen oder sich verfangen.",
     "Er schützt sie."
    ],
    "correct": 2,
    "explanation": "Plastik schadet.",
    "topic": "muell_umwelt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐟</text></svg>"
   },
   {
    "id": "muk2l2_test_5",
    "category": "kurs_mu_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was bekommst du für eine Pfandflasche?",
    "answers": [
     "eine Strafe",
     "nichts",
     "Geld zurück",
     "eine neue Tüte"
    ],
    "correct": 2,
    "explanation": "Pfand.",
    "topic": "muell_umwelt"
   },
   {
    "id": "muk2l2_test_6",
    "category": "kurs_mu_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was spart Strom?",
    "answers": [
     "Standby lassen",
     "Geräte ganz ausschalten",
     "Licht an lassen",
     "Fenster auf und Heizung an"
    ],
    "correct": 1,
    "explanation": "Ausschalten.",
    "topic": "muell_umwelt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔌</text></svg>"
   },
   {
    "id": "muk2l2_test_7",
    "category": "kurs_mu_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist ein Mehrwegbecher?",
    "answers": [
     "ein Becher für einmal",
     "ein Becher aus Papier für einmal",
     "ein Becher, den man oft benutzt",
     "ein kaputter Becher"
    ],
    "correct": 2,
    "explanation": "Mehrweg = oft.",
    "topic": "muell_umwelt",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☕</text></svg>"
   },
   {
    "id": "muk2l2_test_8",
    "category": "kurs_mu_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist am besten?",
    "answers": [
     "viel Müll machen und trennen",
     "Müll verstecken",
     "Müll verbrennen",
     "Müll gar nicht erst entstehen lassen"
    ],
    "correct": 3,
    "explanation": "Vermeiden ist am besten.",
    "topic": "muell_umwelt"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "fe_k3_l1",
  "kurs": "feuer_k3",
  "order": 1,
  "icon": "🔥",
  "title": "Was Feuer braucht",
  "kurz": "Brennstoff, Sauerstoff, Hitze – und löschen",
  "erklaerung": {
   "intro": "Ein Feuer braucht drei Dinge: <b>Brennstoff</b> (z. B. Holz), <b>Sauerstoff</b> (Luft) und <b>Hitze</b> (Zündtemperatur). Fehlt eins, geht das Feuer aus. Darum löscht man mit <b>Wasser</b> (kühlt) oder einer <b>Decke</b> (nimmt die Luft weg). <b>Fett- oder Ölbrand</b> niemals mit Wasser löschen!",
   "merksatz": "Brennstoff + Luft + Hitze = Feuer. Eins wegnehmen = Feuer aus.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪵</text></svg>Brennstoff: Holz, Papier",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💨</text></svg>Sauerstoff aus der Luft",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌡️</text></svg>Hitze: Streichholz, Funke"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "fek3l1u_leicht_1",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was braucht ein Feuer?",
     "answers": [
      "Brennstoff, Luft und Hitze",
      "nur Wasser",
      "nur Sand",
      "nur Wind und Regen"
     ],
     "correct": 0,
     "explanation": "Das Verbrennungsdreieck.",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔥</text></svg>"
    },
    {
     "id": "fek3l1u_leicht_2",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist ein Brennstoff?",
     "answers": [
      "Wasser",
      "Sand",
      "Stein",
      "Holz"
     ],
     "correct": 3,
     "explanation": "Holz brennt.",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪵</text></svg>"
    },
    {
     "id": "fek3l1u_leicht_3",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Womit löscht man ein kleines Feuer im Papierkorb?",
     "answers": [
      "mit Öl",
      "mit Papier",
      "mit Benzin",
      "mit Wasser"
     ],
     "correct": 3,
     "explanation": "Wasser kühlt.",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💧</text></svg>"
    },
    {
     "id": "fek3l1u_leicht_4",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passiert, wenn man ein Glas über eine Kerze stülpt?",
     "answers": [
      "Sie brennt heller.",
      "Sie geht aus.",
      "Sie wird größer.",
      "Nichts."
     ],
     "correct": 1,
     "explanation": "Der Sauerstoff ist verbraucht.",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🕯️</text></svg>"
    },
    {
     "id": "fek3l1u_leicht_5",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was darf man mit Streichhölzern NICHT tun?",
     "answers": [
      "mit Erwachsenen eine Kerze anzünden",
      "sie sicher wegräumen",
      "sie Erwachsenen geben",
      "allein damit spielen"
     ],
     "correct": 3,
     "explanation": "Feuer ist gefährlich.",
     "topic": "feuer_notruf"
    }
   ],
   "mittel": [
    {
     "id": "fek3l1u_mittel_1",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum löscht eine Löschdecke das Feuer?",
     "answers": [
      "Sie macht es nass.",
      "Sie nimmt dem Feuer die Luft.",
      "Sie macht es heißer.",
      "Sie gibt Brennstoff."
     ],
     "correct": 1,
     "explanation": "Ohne Sauerstoff kein Feuer.",
     "topic": "feuer_notruf"
    },
    {
     "id": "fek3l1u_mittel_2",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum löscht Wasser das Feuer?",
     "answers": [
      "Es gibt Luft dazu.",
      "Es kühlt das Feuer ab.",
      "Es brennt selbst.",
      "Es macht Funken."
     ],
     "correct": 1,
     "explanation": "Wasser nimmt die Hitze.",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💧</text></svg>"
    },
    {
     "id": "fek3l1u_mittel_3",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was brennt NICHT?",
     "answers": [
      "Stein",
      "Papier",
      "Holz",
      "Pappe"
     ],
     "correct": 0,
     "explanation": "Stein ist kein Brennstoff.",
     "topic": "feuer_notruf"
    },
    {
     "id": "fek3l1u_mittel_4",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist beim Grillen wichtig?",
     "answers": [
      "Benzin nehmen",
      "nahe am Grill rennen",
      "Kinder allein lassen",
      "nie Spiritus in die Glut gießen"
     ],
     "correct": 3,
     "explanation": "Stichflammen-Gefahr!",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍖</text></svg>"
    },
    {
     "id": "fek3l1u_mittel_5",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was macht ein Rauchmelder?",
     "answers": [
      "Er piept laut bei Rauch.",
      "Er löscht das Feuer.",
      "Er macht Licht.",
      "Er ruft die Oma an."
     ],
     "correct": 0,
     "explanation": "Er warnt früh.",
     "topic": "feuer_notruf"
    }
   ],
   "schwer": [
    {
     "id": "fek3l1u_schwer_1",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Womit darf man brennendes Fett im Topf NICHT löschen?",
     "answers": [
      "mit dem Topfdeckel",
      "mit einer Löschdecke",
      "Herd aus und Deckel drauf",
      "mit Wasser"
     ],
     "correct": 3,
     "explanation": "Wasser + heißes Fett = Explosion!",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍳</text></svg>"
    },
    {
     "id": "fek3l1u_schwer_2",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was passiert beim Fettbrand mit Wasser?",
     "answers": [
      "Das Feuer geht sofort aus.",
      "Es wird kalt.",
      "Nichts.",
      "Eine riesige Stichflamme entsteht."
     ],
     "correct": 3,
     "explanation": "Wasser verdampft schlagartig.",
     "topic": "feuer_notruf"
    },
    {
     "id": "fek3l1u_schwer_3",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Teil des Verbrennungsdreiecks fehlt, wenn man Sand auf ein Lagerfeuer schüttet?",
     "answers": [
      "Sauerstoff",
      "Brennstoff",
      "Hitze",
      "alle drei"
     ],
     "correct": 0,
     "explanation": "Sand deckt ab.",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏕️</text></svg>"
    },
    {
     "id": "fek3l1u_schwer_4",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum macht man eine Schneise bei Waldbränden?",
     "answers": [
      "Damit mehr Luft kommt.",
      "Es fehlt dann Brennstoff.",
      "Damit es heißer wird.",
      "Damit Tiere spielen."
     ],
     "correct": 1,
     "explanation": "Ohne Bäume kein Brennstoff.",
     "topic": "feuer_notruf"
    },
    {
     "id": "fek3l1u_schwer_5",
     "category": "kurs_fe_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist die Zündtemperatur?",
     "answers": [
      "die Hitze, ab der ein Stoff anfängt zu brennen",
      "die Temperatur von Wasser",
      "die Temperatur im Kühlschrank",
      "die Farbe einer Flamme"
     ],
     "correct": 0,
     "explanation": "Erst ab dieser Hitze brennt es.",
     "topic": "feuer_notruf"
    }
   ]
  },
  "test": [
   {
    "id": "fek3l1_test_1",
    "category": "kurs_fe_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche drei Dinge braucht ein Feuer?",
    "answers": [
     "Wasser, Sand, Luft",
     "Holz, Wasser, Eis",
     "Stein, Luft, Regen",
     "Brennstoff, Sauerstoff, Hitze"
    ],
    "correct": 3,
    "explanation": "Verbrennungsdreieck.",
    "topic": "feuer_notruf",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔥</text></svg>"
   },
   {
    "id": "fek3l1_test_2",
    "category": "kurs_fe_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Womit löschst du einen Fettbrand?",
    "answers": [
     "Wasser drüber",
     "pusten",
     "Mehl werfen",
     "Deckel drauf, Herd aus"
    ],
    "correct": 3,
    "explanation": "Luft wegnehmen.",
    "topic": "feuer_notruf",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍳</text></svg>"
   },
   {
    "id": "fek3l1_test_3",
    "category": "kurs_fe_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was brennt gut?",
    "answers": [
     "Papier",
     "Wasser",
     "Glas",
     "Stein"
    ],
    "correct": 0,
    "explanation": "Papier ist Brennstoff.",
    "topic": "feuer_notruf",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📄</text></svg>"
   },
   {
    "id": "fek3l1_test_4",
    "category": "kurs_fe_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum geht die Kerze unter dem Glas aus?",
    "answers": [
     "Das Glas ist kalt.",
     "Der Sauerstoff fehlt.",
     "Das Wachs ist weg.",
     "Das Glas ist nass."
    ],
    "correct": 1,
    "explanation": "Kein Sauerstoff.",
    "topic": "feuer_notruf",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🕯️</text></svg>"
   },
   {
    "id": "fek3l1_test_5",
    "category": "kurs_fe_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wo sollte ein Rauchmelder hängen?",
    "answers": [
     "im Keller unter dem Boden",
     "an der Zimmerdecke",
     "im Kühlschrank",
     "im Auto"
    ],
    "correct": 1,
    "explanation": "Rauch steigt nach oben.",
    "topic": "feuer_notruf"
   },
   {
    "id": "fek3l1_test_6",
    "category": "kurs_fe_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was löscht ein Feuer durch Kühlen?",
    "answers": [
     "eine Decke",
     "Wasser",
     "Sand",
     "ein Deckel"
    ],
    "correct": 1,
    "explanation": "Wasser kühlt.",
    "topic": "feuer_notruf",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💧</text></svg>"
   },
   {
    "id": "fek3l1_test_7",
    "category": "kurs_fe_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wer darf mit Feuer umgehen?",
    "answers": [
     "Kinder allein",
     "niemand",
     "Kinder nur mit Erwachsenen",
     "nur Tiere"
    ],
    "correct": 2,
    "explanation": "Immer mit Erwachsenen.",
    "topic": "feuer_notruf"
   },
   {
    "id": "fek3l1_test_8",
    "category": "kurs_fe_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist ein Feuerlöscher?",
    "answers": [
     "ein Spielzeug",
     "eine Lampe",
     "ein Gerät zum Löschen",
     "eine Klingel"
    ],
    "correct": 2,
    "explanation": "Er löscht Brände.",
    "topic": "feuer_notruf",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧯</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "fe_k3_l2",
  "kurs": "feuer_k3",
  "order": 2,
  "icon": "🚒",
  "title": "Notruf 112 und Brandschutz",
  "kurz": "Richtig Hilfe holen",
  "erklaerung": {
   "intro": "Bei Feuer oder Unfall wählst du die <b>112</b> (Feuerwehr und Rettungsdienst). Die <b>110</b> ist die Polizei. Am Telefon helfen die <b>W-Fragen</b>: <b>Wo</b> ist es passiert? <b>Was</b> ist passiert? <b>Wie viele</b> Verletzte? <b>Warten</b> auf Rückfragen! Bei Rauch: raus, Tür zu, nicht in den Aufzug, gebückt gehen.",
   "merksatz": "112 – Wo? Was? Wie viele? Warten! Bei Feuer: raus und Tür zu.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📞</text></svg>112 = Feuerwehr und Rettung",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👮</text></svg>110 = Polizei",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚪</text></svg>Tür zu – Rauch bleibt drin"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "fek3l2u_leicht_1",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Nummer wählst du bei Feuer?",
     "answers": [
      "110",
      "911",
      "112",
      "123"
     ],
     "correct": 2,
     "explanation": "112 = Feuerwehr.",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚒</text></svg>"
    },
    {
     "id": "fek3l2u_leicht_2",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Nummer hat die Polizei?",
     "answers": [
      "112",
      "111",
      "110",
      "100"
     ],
     "correct": 2,
     "explanation": "110 = Polizei.",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👮</text></svg>"
    },
    {
     "id": "fek3l2u_leicht_3",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist die erste W-Frage beim Notruf?",
     "answers": [
      "Wie heißt dein Hund?",
      "Wann hast du Geburtstag?",
      "Wo ist es passiert?",
      "Was isst du gern?"
     ],
     "correct": 2,
     "explanation": "Der Ort ist am wichtigsten.",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📍</text></svg>"
    },
    {
     "id": "fek3l2u_leicht_4",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was machst du am Ende des Notrufs?",
     "answers": [
      "warten, ob es noch Fragen gibt",
      "sofort auflegen",
      "lachen",
      "nochmal anrufen"
     ],
     "correct": 0,
     "explanation": "Warten auf Rückfragen.",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📞</text></svg>"
    },
    {
     "id": "fek3l2u_leicht_5",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was machst du, wenn es brennt?",
     "answers": [
      "verstecken",
      "Spielzeug retten",
      "raus aus dem Haus und Hilfe holen",
      "ins Feuer schauen"
     ],
     "correct": 2,
     "explanation": "Raus und 112.",
     "topic": "feuer_notruf"
    }
   ],
   "mittel": [
    {
     "id": "fek3l2u_mittel_1",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum soll man bei Rauch gebückt gehen?",
     "answers": [
      "Weil es schneller ist.",
      "Unten ist weniger Rauch.",
      "Damit man nicht gesehen wird.",
      "Weil oben Wasser ist."
     ],
     "correct": 1,
     "explanation": "Rauch steigt nach oben.",
     "topic": "feuer_notruf"
    },
    {
     "id": "fek3l2u_mittel_2",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Darf man bei Feuer den Aufzug nehmen?",
     "answers": [
      "ja",
      "nein",
      "nur nach oben",
      "nur mit Freunden"
     ],
     "correct": 1,
     "explanation": "Der Aufzug kann stecken bleiben.",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛗</text></svg>"
    },
    {
     "id": "fek3l2u_mittel_3",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum macht man die Tür hinter sich zu?",
     "answers": [
      "damit sich Feuer und Rauch nicht ausbreiten",
      "damit es dunkler wird",
      "damit niemand reinkommt",
      "wegen der Kälte"
     ],
     "correct": 0,
     "explanation": "Tür zu bremst Rauch.",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚪</text></svg>"
    },
    {
     "id": "fek3l2u_mittel_4",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Kostet ein Notruf Geld?",
     "answers": [
      "ja, 1 €",
      "ja, 10 €",
      "nur am Wochenende",
      "nein, er ist kostenlos"
     ],
     "correct": 3,
     "explanation": "112 und 110 sind kostenlos.",
     "topic": "feuer_notruf"
    },
    {
     "id": "fek3l2u_mittel_5",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist ein Fluchtweg?",
     "answers": [
      "ein Versteck",
      "ein Spielplatz",
      "ein Keller",
      "ein Weg, um schnell nach draußen zu kommen"
     ],
     "correct": 3,
     "explanation": "Fluchtwege sind grün markiert.",
     "topic": "feuer_notruf"
    }
   ],
   "schwer": [
    {
     "id": "fek3l2u_schwer_1",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Schild zeigt den Notausgang?",
     "answers": [
      "ein grünes Schild mit laufendem Männchen",
      "ein rotes Stoppschild",
      "ein blaues Schild mit P",
      "ein gelbes Dreieck"
     ],
     "correct": 0,
     "explanation": "Grün = Rettungsweg.",
     "topic": "feuer_notruf",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚪</text></svg>"
    },
    {
     "id": "fek3l2u_schwer_2",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was tust du, wenn deine Kleidung brennt?",
     "answers": [
      "wegrennen",
      "stehen bleiben, hinlegen, wälzen",
      "pusten",
      "springen"
     ],
     "correct": 1,
     "explanation": "Rennen facht das Feuer an.",
     "topic": "feuer_notruf"
    },
    {
     "id": "fek3l2u_schwer_3",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was machst du, wenn der Flur voller Rauch ist?",
     "answers": [
      "durch den Rauch rennen",
      "im Zimmer bleiben, Tür zu, am Fenster bemerkbar machen",
      "unters Bett kriechen und still sein",
      "in den Aufzug"
     ],
     "correct": 1,
     "explanation": "Rauch ist giftig.",
     "topic": "feuer_notruf"
    },
    {
     "id": "fek3l2u_schwer_4",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein Fehlalarm aus Spaß?",
     "answers": [
      "lustig und erlaubt",
      "eine gute Übung",
      "verboten und gefährlich",
      "egal"
     ],
     "correct": 2,
     "explanation": "Echte Notfälle warten dann.",
     "topic": "feuer_notruf"
    },
    {
     "id": "fek3l2u_schwer_5",
     "category": "kurs_fe_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum ist Rauch so gefährlich?",
     "answers": [
      "Er riecht nur schlecht.",
      "Er ist kalt.",
      "Er ist giftig und man sieht nichts.",
      "Er macht nass."
     ],
     "correct": 2,
     "explanation": "Die meisten Brandopfer sterben am Rauch.",
     "topic": "feuer_notruf"
    }
   ]
  },
  "test": [
   {
    "id": "fek3l2_test_1",
    "category": "kurs_fe_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Notruf für Feuerwehr und Krankenwagen?",
    "answers": [
     "110",
     "112",
     "115",
     "118"
    ],
    "correct": 1,
    "explanation": "112.",
    "topic": "feuer_notruf",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚑</text></svg>"
   },
   {
    "id": "fek3l2_test_2",
    "category": "kurs_fe_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was fragst du dich beim Notruf zuerst?",
    "answers": [
     "Wer hat Schuld?",
     "Wie spät?",
     "Warum?",
     "Wo?"
    ],
    "correct": 3,
    "explanation": "Der Ort zuerst.",
    "topic": "feuer_notruf"
   },
   {
    "id": "fek3l2_test_3",
    "category": "kurs_fe_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum soll man bei Rauch gebückt laufen?",
    "answers": [
     "Man ist schneller.",
     "Es ist wärmer.",
     "Man sieht nichts.",
     "Unten ist die Luft besser."
    ],
    "correct": 3,
    "explanation": "Rauch steigt.",
    "topic": "feuer_notruf"
   },
   {
    "id": "fek3l2_test_4",
    "category": "kurs_fe_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Farbe haben Rettungsschilder?",
    "answers": [
     "rot",
     "blau",
     "gelb",
     "grün"
    ],
    "correct": 3,
    "explanation": "Grün = Rettungsweg.",
    "topic": "feuer_notruf"
   },
   {
    "id": "fek3l2_test_5",
    "category": "kurs_fe_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was tust du nach dem Notruf?",
    "answers": [
     "sofort auflegen",
     "wegrennen",
     "Musik hören",
     "warten, ob noch Fragen kommen"
    ],
    "correct": 3,
    "explanation": "Warten.",
    "topic": "feuer_notruf",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📞</text></svg>"
   },
   {
    "id": "fek3l2_test_6",
    "category": "kurs_fe_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Darfst du bei Feuer den Aufzug benutzen?",
    "answers": [
     "ja",
     "nein",
     "nur abwärts",
     "nur kurz"
    ],
    "correct": 1,
    "explanation": "Treppe nehmen.",
    "topic": "feuer_notruf"
   },
   {
    "id": "fek3l2_test_7",
    "category": "kurs_fe_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was tust du, wenn deine Kleidung brennt?",
    "answers": [
     "rennen",
     "hinlegen und wälzen",
     "pusten",
     "springen"
    ],
    "correct": 1,
    "explanation": "Wälzen erstickt die Flammen.",
    "topic": "feuer_notruf"
   },
   {
    "id": "fek3l2_test_8",
    "category": "kurs_fe_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Nummer ist die Polizei?",
    "answers": [
     "112",
     "911",
     "000",
     "110"
    ],
    "correct": 3,
    "explanation": "110.",
    "topic": "feuer_notruf",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👮</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "wa_k4_l1",
  "kurs": "weltall_k4",
  "order": 1,
  "icon": "🌍",
  "title": "Tag, Nacht und Jahr",
  "kurz": "Die Erde dreht sich und wandert um die Sonne",
  "erklaerung": {
   "intro": "Die Erde <b>dreht sich</b> in 24 Stunden einmal um sich selbst: Die Seite zur Sonne hat <b>Tag</b>, die andere <b>Nacht</b>. In einem <b>Jahr</b> (365 Tage) wandert die Erde einmal um die Sonne. Weil die Erdachse <b>schief</b> steht, gibt es <b>Jahreszeiten</b>. Die Sonne geht im <b>Osten</b> auf und im <b>Westen</b> unter.",
   "merksatz": "1 Drehung = 1 Tag (24 h). 1 Runde um die Sonne = 1 Jahr.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌍</text></svg>Erde dreht sich → Tag und Nacht",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>Erde kreist um die Sonne → 1 Jahr",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌅</text></svg>Sonnenaufgang im Osten"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "wak4l1u_leicht_1",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie lange dauert eine Drehung der Erde um sich selbst?",
     "answers": [
      "1 Stunde",
      "24 Stunden",
      "1 Woche",
      "1 Jahr"
     ],
     "correct": 1,
     "explanation": "Ein Tag.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌍</text></svg>"
    },
    {
     "id": "wak4l1u_leicht_2",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie lange braucht die Erde einmal um die Sonne?",
     "answers": [
      "einen Tag",
      "einen Monat",
      "ein Jahr",
      "eine Woche"
     ],
     "correct": 2,
     "explanation": "365 Tage.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
    },
    {
     "id": "wak4l1u_leicht_3",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Warum gibt es Tag und Nacht?",
     "answers": [
      "weil die Sonne ausgeht",
      "weil sich die Erde dreht",
      "weil der Mond die Sonne versteckt",
      "weil Wolken kommen"
     ],
     "correct": 1,
     "explanation": "Die Erde dreht sich.",
     "topic": "weltall"
    },
    {
     "id": "wak4l1u_leicht_4",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wo geht die Sonne auf?",
     "answers": [
      "im Westen",
      "im Norden",
      "im Süden",
      "im Osten"
     ],
     "correct": 3,
     "explanation": "Osten.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌅</text></svg>"
    },
    {
     "id": "wak4l1u_leicht_5",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist die Sonne?",
     "answers": [
      "ein Stern",
      "ein Planet",
      "ein Mond",
      "eine Wolke"
     ],
     "correct": 0,
     "explanation": "Die Sonne ist ein Stern.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "wak4l1u_mittel_1",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Tage hat ein Jahr?",
     "answers": [
      "365",
      "100",
      "300",
      "500"
     ],
     "correct": 0,
     "explanation": "365 (Schaltjahr 366).",
     "topic": "weltall"
    },
    {
     "id": "wak4l1u_mittel_2",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum gibt es Jahreszeiten?",
     "answers": [
      "Die Erdachse ist schief.",
      "Die Sonne wird größer.",
      "Der Mond wärmt uns.",
      "Die Erde bleibt stehen."
     ],
     "correct": 0,
     "explanation": "Die Neigung ändert das Sonnenlicht.",
     "topic": "weltall"
    },
    {
     "id": "wak4l1u_mittel_3",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wo geht die Sonne unter?",
     "answers": [
      "im Westen",
      "im Osten",
      "im Norden",
      "im Süden"
     ],
     "correct": 0,
     "explanation": "Westen.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌇</text></svg>"
    },
    {
     "id": "wak4l1u_mittel_4",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wenn bei uns Tag ist, ist auf der anderen Seite der Erde …",
     "answers": [
      "auch Tag",
      "Nacht",
      "Mittag",
      "Winter"
     ],
     "correct": 1,
     "explanation": "Die Erde ist eine Kugel.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌏</text></svg>"
    },
    {
     "id": "wak4l1u_mittel_5",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Form hat die Erde?",
     "answers": [
      "Scheibe",
      "Würfel",
      "Kugel",
      "Dreieck"
     ],
     "correct": 2,
     "explanation": "Die Erde ist rund.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌍</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "wak4l1u_schwer_1",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum ist es im Sommer wärmer?",
     "answers": [
      "Die Sonne steht höher und scheint länger.",
      "Die Erde ist dann näher am Mond.",
      "Es gibt mehr Wolken.",
      "Die Sonne ist größer."
     ],
     "correct": 0,
     "explanation": "Mehr und steileres Licht.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌞</text></svg>"
    },
    {
     "id": "wak4l1u_schwer_2",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie heißt der längste Tag des Jahres bei uns?",
     "answers": [
      "Neujahr",
      "Weihnachten",
      "Sommeranfang (21. Juni)",
      "Ostern"
     ],
     "correct": 2,
     "explanation": "Sommersonnenwende.",
     "topic": "weltall"
    },
    {
     "id": "wak4l1u_schwer_3",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum hat ein Schaltjahr 366 Tage?",
     "answers": [
      "Weil der Mond es will.",
      "Weil es Spaß macht.",
      "Weil der Februar zu kurz ist.",
      "Die Erde braucht etwas mehr als 365 Tage."
     ],
     "correct": 3,
     "explanation": "Ca. 365 ¼ Tage.",
     "topic": "weltall"
    },
    {
     "id": "wak4l1u_schwer_4",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie lange braucht das Sonnenlicht bis zur Erde?",
     "answers": [
      "etwa 8 Minuten",
      "1 Sekunde",
      "1 Tag",
      "1 Jahr"
     ],
     "correct": 0,
     "explanation": "Rund 8 Minuten.",
     "topic": "weltall"
    },
    {
     "id": "wak4l1u_schwer_5",
     "category": "kurs_wa_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Halbkugel hat Winter, wenn bei uns Sommer ist?",
     "answers": [
      "die Nordhalbkugel",
      "keine",
      "die Südhalbkugel",
      "beide"
     ],
     "correct": 2,
     "explanation": "Z. B. Australien.",
     "topic": "weltall"
    }
   ]
  },
  "test": [
   {
    "id": "wak4l1_test_1",
    "category": "kurs_wa_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was dauert 24 Stunden?",
    "answers": [
     "eine Runde um die Sonne",
     "ein Mondmonat",
     "eine Woche",
     "eine Erddrehung"
    ],
    "correct": 3,
    "explanation": "1 Tag.",
    "topic": "weltall",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌍</text></svg>"
   },
   {
    "id": "wak4l1_test_2",
    "category": "kurs_wa_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was dauert ein Jahr?",
    "answers": [
     "eine Erddrehung",
     "eine Mondphase",
     "eine Runde um die Sonne",
     "eine Nacht"
    ],
    "correct": 2,
    "explanation": "1 Jahr.",
    "topic": "weltall",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
   },
   {
    "id": "wak4l1_test_3",
    "category": "kurs_wa_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wo geht die Sonne auf?",
    "answers": [
     "im Osten",
     "im Westen",
     "im Süden",
     "im Norden"
    ],
    "correct": 0,
    "explanation": "Osten.",
    "topic": "weltall"
   },
   {
    "id": "wak4l1_test_4",
    "category": "kurs_wa_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist die Sonne?",
    "answers": [
     "ein Planet",
     "ein Komet",
     "ein Mond",
     "ein Stern"
    ],
    "correct": 3,
    "explanation": "Stern.",
    "topic": "weltall"
   },
   {
    "id": "wak4l1_test_5",
    "category": "kurs_wa_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum gibt es Nacht?",
    "answers": [
     "Die Sonne schläft.",
     "Der Mond deckt sie zu.",
     "Unsere Seite der Erde zeigt von der Sonne weg.",
     "Die Sonne fällt herunter."
    ],
    "correct": 2,
    "explanation": "Erddrehung.",
    "topic": "weltall",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌙</text></svg>"
   },
   {
    "id": "wak4l1_test_6",
    "category": "kurs_wa_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Tage hat ein normales Jahr?",
    "answers": [
     "360",
     "366",
     "365",
     "350"
    ],
    "correct": 2,
    "explanation": "365.",
    "topic": "weltall"
   },
   {
    "id": "wak4l1_test_7",
    "category": "kurs_wa_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum gibt es Jahreszeiten?",
    "answers": [
     "wegen des Mondes",
     "wegen der schiefen Erdachse",
     "wegen der Wolken",
     "wegen des Windes"
    ],
    "correct": 1,
    "explanation": "Schiefe Achse.",
    "topic": "weltall"
   },
   {
    "id": "wak4l1_test_8",
    "category": "kurs_wa_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Form hat die Erde?",
    "answers": [
     "Scheibe",
     "Kugel",
     "Würfel",
     "Ei"
    ],
    "correct": 1,
    "explanation": "Kugel.",
    "topic": "weltall",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌍</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "wa_k4_l2",
  "kurs": "weltall_k4",
  "order": 2,
  "icon": "🌙",
  "title": "Mond und Planeten",
  "kurz": "Mondphasen und unser Sonnensystem",
  "erklaerung": {
   "intro": "Der <b>Mond</b> kreist in etwa 4 Wochen um die Erde. Er leuchtet nicht selbst, sondern wird von der Sonne angestrahlt. Darum sehen wir <b>Mondphasen</b>: Neumond, zunehmender Mond, Vollmond, abnehmender Mond. Um die Sonne kreisen <b>8 Planeten</b>: Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun.",
   "merksatz": "Mein Vater Erklärt Mir Jeden Sonntag Unseren Nachthimmel.",
   "beispiele": [
    "<svg viewBox='0 0 371 93' style='width:100%;max-width:371px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='185' y='73' text-anchor='middle' font-size='72'>🌑🌓🌕🌗</text></svg>Neumond, zunehmend, Vollmond, abnehmend",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪐</text></svg>Saturn mit Ringen",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔴</text></svg>Mars – der rote Planet"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "wak4l2u_leicht_1",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Um was kreist der Mond?",
     "answers": [
      "um die Erde",
      "um den Mars",
      "um sich selbst nur",
      "um den Mondstein"
     ],
     "correct": 0,
     "explanation": "Der Mond ist der Erdbegleiter.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌙</text></svg>"
    },
    {
     "id": "wak4l2u_leicht_2",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele Planeten hat unser Sonnensystem?",
     "answers": [
      "5",
      "10",
      "12",
      "8"
     ],
     "correct": 3,
     "explanation": "Acht Planeten.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪐</text></svg>"
    },
    {
     "id": "wak4l2u_leicht_3",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Planet hat große Ringe?",
     "answers": [
      "Mars",
      "Erde",
      "Merkur",
      "Saturn"
     ],
     "correct": 3,
     "explanation": "Saturn hat auffällige Ringe.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪐</text></svg>"
    },
    {
     "id": "wak4l2u_leicht_4",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Leuchtet der Mond selbst?",
     "answers": [
      "ja, er hat Lampen",
      "ja, wie die Sonne",
      "nein, er wird von der Sonne angestrahlt",
      "nur im Winter"
     ],
     "correct": 2,
     "explanation": "Er reflektiert Sonnenlicht.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌕</text></svg>"
    },
    {
     "id": "wak4l2u_leicht_5",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie heißt der rote Planet?",
     "answers": [
      "Venus",
      "Mars",
      "Jupiter",
      "Neptun"
     ],
     "correct": 1,
     "explanation": "Mars ist rötlich.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔴</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "wak4l2u_mittel_1",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie heißt die Phase, wenn der Mond ganz rund leuchtet?",
     "answers": [
      "Neumond",
      "Vollmond",
      "Halbmond",
      "Sichelmond"
     ],
     "correct": 1,
     "explanation": "Vollmond.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌕</text></svg>"
    },
    {
     "id": "wak4l2u_mittel_2",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie lange braucht der Mond einmal um die Erde?",
     "answers": [
      "1 Tag",
      "etwa 4 Wochen",
      "1 Jahr",
      "1 Stunde"
     ],
     "correct": 1,
     "explanation": "Rund 29 Tage.",
     "topic": "weltall"
    },
    {
     "id": "wak4l2u_mittel_3",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Planet ist der Sonne am nächsten?",
     "answers": [
      "Neptun",
      "Erde",
      "Saturn",
      "Merkur"
     ],
     "correct": 3,
     "explanation": "Merkur ist innen.",
     "topic": "weltall"
    },
    {
     "id": "wak4l2u_mittel_4",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Planet ist der größte?",
     "answers": [
      "Jupiter",
      "Erde",
      "Mars",
      "Venus"
     ],
     "correct": 0,
     "explanation": "Jupiter ist riesig.",
     "topic": "weltall"
    },
    {
     "id": "wak4l2u_mittel_5",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie heißt die Phase, in der man den Mond nicht sieht?",
     "answers": [
      "Vollmond",
      "Neumond",
      "Halbmond",
      "Blutmond"
     ],
     "correct": 1,
     "explanation": "Neumond.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌑</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "wak4l2u_schwer_1",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Der wievielte Planet von der Sonne ist die Erde?",
     "answers": [
      "der dritte",
      "der erste",
      "der fünfte",
      "der achte"
     ],
     "correct": 0,
     "explanation": "Merkur, Venus, Erde.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌍</text></svg>"
    },
    {
     "id": "wak4l2u_schwer_2",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Planet ist am weitesten von der Sonne entfernt?",
     "answers": [
      "Uranus",
      "Neptun",
      "Saturn",
      "Mars"
     ],
     "correct": 1,
     "explanation": "Neptun ist der äußerste.",
     "topic": "weltall"
    },
    {
     "id": "wak4l2u_schwer_3",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wer war 1969 als Erster auf dem Mond?",
     "answers": [
      "Albert Einstein",
      "Neil Armstrong",
      "Christoph Kolumbus",
      "Isaac Newton"
     ],
     "correct": 1,
     "explanation": "Mondlandung 1969.",
     "topic": "weltall",
     "grafik": "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🧑‍🚀</text></svg>"
    },
    {
     "id": "wak4l2u_schwer_4",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist eine Mondfinsternis?",
     "answers": [
      "Der Mond geht kaputt.",
      "Die Sonne verschwindet.",
      "Die Erde wirft ihren Schatten auf den Mond.",
      "Der Mond wird grün."
     ],
     "correct": 2,
     "explanation": "Erdschatten.",
     "topic": "weltall"
    },
    {
     "id": "wak4l2u_schwer_5",
     "category": "kurs_wa_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Merkhilfe hilft bei der Reihenfolge der Planeten?",
     "answers": [
      "Alle Vögel sind schon da.",
      "Nie ohne Seife waschen.",
      "Mein Vater erklärt mir jeden Sonntag unseren Nachthimmel.",
      "Eins, zwei, Polizei."
     ],
     "correct": 2,
     "explanation": "M-V-E-M-J-S-U-N.",
     "topic": "weltall"
    }
   ]
  },
  "test": [
   {
    "id": "wak4l2_test_1",
    "category": "kurs_wa_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Um was kreist der Mond?",
    "answers": [
     "um die Erde",
     "um den Jupiter",
     "um den Saturn",
     "um gar nichts"
    ],
    "correct": 0,
    "explanation": "Erde.",
    "topic": "weltall",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌙</text></svg>"
   },
   {
    "id": "wak4l2_test_2",
    "category": "kurs_wa_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Planeten kreisen um die Sonne?",
    "answers": [
     "9",
     "7",
     "12",
     "8"
    ],
    "correct": 3,
    "explanation": "Acht.",
    "topic": "weltall"
   },
   {
    "id": "wak4l2_test_3",
    "category": "kurs_wa_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Planet hat Ringe, die man gut sieht?",
    "answers": [
     "Mars",
     "Merkur",
     "Venus",
     "Saturn"
    ],
    "correct": 3,
    "explanation": "Saturn.",
    "topic": "weltall",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪐</text></svg>"
   },
   {
    "id": "wak4l2_test_4",
    "category": "kurs_wa_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist der Vollmond?",
    "answers": [
     "Man sieht ihn nicht.",
     "Der Mond ist ganz rund zu sehen.",
     "Er ist halb.",
     "Er ist rot."
    ],
    "correct": 1,
    "explanation": "Vollmond.",
    "topic": "weltall",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌕</text></svg>"
   },
   {
    "id": "wak4l2_test_5",
    "category": "kurs_wa_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie heißt der größte Planet?",
    "answers": [
     "Erde",
     "Saturn",
     "Uranus",
     "Jupiter"
    ],
    "correct": 3,
    "explanation": "Jupiter.",
    "topic": "weltall"
   },
   {
    "id": "wak4l2_test_6",
    "category": "kurs_wa_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum sehen wir den Mond?",
    "answers": [
     "Er leuchtet selbst.",
     "Er hat Lampen.",
     "Die Erde leuchtet ihn an.",
     "Er wird von der Sonne angestrahlt."
    ],
    "correct": 3,
    "explanation": "Sonnenlicht.",
    "topic": "weltall"
   },
   {
    "id": "wak4l2_test_7",
    "category": "kurs_wa_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Planet ist der Sonne am nächsten?",
    "answers": [
     "Venus",
     "Erde",
     "Mars",
     "Merkur"
    ],
    "correct": 3,
    "explanation": "Merkur.",
    "topic": "weltall"
   },
   {
    "id": "wak4l2_test_8",
    "category": "kurs_wa_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Planet ist die Erde, von der Sonne aus gezählt?",
    "answers": [
     "erster Planet",
     "zweiter Planet",
     "dritter Planet",
     "vierter Planet"
    ],
    "correct": 2,
    "explanation": "Dritter.",
    "topic": "weltall",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌍</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "md_k4_l1",
  "kurs": "medien_k4",
  "order": 1,
  "icon": "📱",
  "title": "Medien klug nutzen",
  "kurz": "Bildschirmzeit, Werbung, echt oder falsch?",
  "erklaerung": {
   "intro": "Fernseher, Handy, Tablet und Computer sind <b>Medien</b>. Sie können informieren und Spaß machen. Wichtig: <b>Pausen</b> machen und Zeiten mit den Eltern absprechen. <b>Werbung</b> will dir etwas verkaufen. Nicht alles im Internet stimmt – prüfe Infos auf <b>Kinderseiten</b> oder frag Erwachsene.",
   "merksatz": "Pausen machen – Werbung erkennen – nicht alles glauben.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⏰</text></svg>Bildschirmzeit mit Eltern absprechen",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛍️</text></svg>Werbung will verkaufen",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔎</text></svg>Infos auf mehreren Seiten prüfen"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "mdk4l1u_leicht_1",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist ein Medium?",
     "answers": [
      "ein Apfel",
      "ein Tablet",
      "ein Stuhl",
      "ein Ball"
     ],
     "correct": 1,
     "explanation": "Medien übertragen Infos.",
     "topic": "medien",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📱</text></svg>"
    },
    {
     "id": "mdk4l1u_leicht_2",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was solltest du bei langer Bildschirmzeit machen?",
     "answers": [
      "immer weiterspielen",
      "das Licht ausmachen",
      "Pausen machen",
      "nichts trinken"
     ],
     "correct": 2,
     "explanation": "Pausen tun gut.",
     "topic": "medien",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⏸️</text></svg>"
    },
    {
     "id": "mdk4l1u_leicht_3",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was will Werbung?",
     "answers": [
      "dir Hausaufgaben erklären",
      "dich ins Bett schicken",
      "dir etwas verkaufen",
      "dir Geld schenken"
     ],
     "correct": 2,
     "explanation": "Werbung will verkaufen.",
     "topic": "medien",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛍️</text></svg>"
    },
    {
     "id": "mdk4l1u_leicht_4",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Stimmt alles, was im Internet steht?",
     "answers": [
      "ja, immer",
      "nur bei Videos",
      "nur bei Bildern",
      "nein"
     ],
     "correct": 3,
     "explanation": "Prüfen!",
     "topic": "medien"
    },
    {
     "id": "mdk4l1u_leicht_5",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wer hilft dir, wenn dir etwas im Internet Angst macht?",
     "answers": [
      "niemand",
      "ein Fremder im Chat",
      "eine Werbung",
      "Eltern oder Lehrer"
     ],
     "correct": 3,
     "explanation": "Sprich mit Erwachsenen.",
     "topic": "medien"
    }
   ],
   "mittel": [
    {
     "id": "mdk4l1u_mittel_1",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie erkennst du Werbung im Internet oft?",
     "answers": [
      "an der Farbe Grün",
      "an langen Texten",
      "am Wort 'Anzeige' oder 'Werbung'",
      "gar nicht"
     ],
     "correct": 2,
     "explanation": "Werbung muss gekennzeichnet sein.",
     "topic": "medien"
    },
    {
     "id": "mdk4l1u_mittel_2",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wo findest du gute Infos für Kinder?",
     "answers": [
      "in Kettenbriefen",
      "in Werbebannern",
      "in Fake-Videos",
      "auf Kinder-Suchmaschinen"
     ],
     "correct": 3,
     "explanation": "Z. B. Kindersuchmaschinen.",
     "topic": "medien",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔎</text></svg>"
    },
    {
     "id": "mdk4l1u_mittel_3",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist eine Fake-News?",
     "answers": [
      "eine falsche Nachricht",
      "eine Zeitung",
      "ein Lied",
      "ein Spiel"
     ],
     "correct": 0,
     "explanation": "Fake = falsch.",
     "topic": "medien"
    },
    {
     "id": "mdk4l1u_mittel_4",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum soll man vor dem Schlafen nicht aufs Handy schauen?",
     "answers": [
      "Das Handy wird müde.",
      "Es ist verboten.",
      "Das Licht macht wach.",
      "Es macht dick."
     ],
     "correct": 2,
     "explanation": "Blaues Licht stört den Schlaf.",
     "topic": "medien",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😴</text></svg>"
    },
    {
     "id": "mdk4l1u_mittel_5",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was machst du, wenn ein Spiel In-App-Käufe will?",
     "answers": [
      "einfach kaufen",
      "Passwort raten",
      "Eltern fragen",
      "Karte von Mama nehmen"
     ],
     "correct": 2,
     "explanation": "Nie ohne Erlaubnis kaufen.",
     "topic": "medien",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💳</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "mdk4l1u_schwer_1",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie prüfst du, ob eine Nachricht stimmt?",
     "answers": [
      "auf mehreren seriösen Seiten nachsehen",
      "sie sofort teilen",
      "nur die Überschrift lesen",
      "Kommentare zählen"
     ],
     "correct": 0,
     "explanation": "Quellen vergleichen.",
     "topic": "medien"
    },
    {
     "id": "mdk4l1u_schwer_2",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein Kettenbrief?",
     "answers": [
      "ein Brief mit Kette",
      "ein Spiel",
      "eine Nachricht, die man angeblich weiterschicken muss",
      "eine Hausaufgabe"
     ],
     "correct": 2,
     "explanation": "Nicht weiterschicken!",
     "topic": "medien"
    },
    {
     "id": "mdk4l1u_schwer_3",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum zeigen Influencer oft Produkte?",
     "answers": [
      "Sie langweilen sich.",
      "Es ist Pflicht.",
      "Sie bekommen Geld dafür.",
      "Sie wollen Hausaufgaben machen."
     ],
     "correct": 2,
     "explanation": "Oft ist es Werbung.",
     "topic": "medien"
    },
    {
     "id": "mdk4l1u_schwer_4",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was bedeutet 'Altersfreigabe ab 12'?",
     "answers": [
      "Es dauert 12 Minuten.",
      "Es kostet 12 €.",
      "Es hat 12 Level.",
      "Das Spiel oder der Film ist erst ab 12 geeignet."
     ],
     "correct": 3,
     "explanation": "USK/FSK.",
     "topic": "medien"
    },
    {
     "id": "mdk4l1u_schwer_5",
     "category": "kurs_md_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein guter Tipp gegen zu viel Bildschirmzeit?",
     "answers": [
      "Handy mit ins Bett nehmen",
      "nachts spielen",
      "feste Zeiten und Offline-Hobbys",
      "nie Pausen"
     ],
     "correct": 2,
     "explanation": "Bewegung und Freunde.",
     "topic": "medien",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "mdk4l1_test_1",
    "category": "kurs_md_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist KEIN Medium?",
    "answers": [
     "ein Fernseher",
     "ein Fußball",
     "ein Radio",
     "eine Zeitung"
    ],
    "correct": 1,
    "explanation": "Ein Ball überträgt keine Infos.",
    "topic": "medien",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
   },
   {
    "id": "mdk4l1_test_2",
    "category": "kurs_md_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was will Werbung?",
    "answers": [
     "helfen beim Lernen",
     "trösten",
     "schützen",
     "verkaufen"
    ],
    "correct": 3,
    "explanation": "Verkaufen.",
    "topic": "medien"
   },
   {
    "id": "mdk4l1_test_3",
    "category": "kurs_md_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Woran erkennst du Werbung?",
    "answers": [
     "an der Schrift",
     "am Hinweis 'Anzeige'",
     "an Tieren",
     "gar nicht"
    ],
    "correct": 1,
    "explanation": "Kennzeichnung.",
    "topic": "medien"
   },
   {
    "id": "mdk4l1_test_4",
    "category": "kurs_md_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist eine Fake-News?",
    "answers": [
     "eine echte Nachricht",
     "ein Wetterbericht",
     "ein Rezept",
     "eine falsche Nachricht"
    ],
    "correct": 3,
    "explanation": "Falsch.",
    "topic": "medien"
   },
   {
    "id": "mdk4l1_test_5",
    "category": "kurs_md_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was machst du bei langen Spielzeiten?",
    "answers": [
     "weiter ohne Pause",
     "Pausen",
     "Essen vergessen",
     "Licht aus"
    ],
    "correct": 1,
    "explanation": "Pausen.",
    "topic": "medien"
   },
   {
    "id": "mdk4l1_test_6",
    "category": "kurs_md_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was machst du bei einem Kettenbrief?",
    "answers": [
     "an alle schicken",
     "antworten",
     "nicht weiterschicken und Eltern zeigen",
     "ausdrucken"
    ],
    "correct": 2,
    "explanation": "Ignorieren.",
    "topic": "medien"
   },
   {
    "id": "mdk4l1_test_7",
    "category": "kurs_md_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was tust du vor einem In-App-Kauf?",
    "answers": [
     "einfach drücken",
     "Passwort raten",
     "Freund fragen",
     "Eltern fragen"
    ],
    "correct": 3,
    "explanation": "Erlaubnis.",
    "topic": "medien",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💳</text></svg>"
   },
   {
    "id": "mdk4l1_test_8",
    "category": "kurs_md_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was bedeutet 'ab 16'?",
    "answers": [
     "erst für 16-Jährige geeignet",
     "kostet 16 €",
     "16 Level",
     "16 Minuten"
    ],
    "correct": 0,
    "explanation": "Altersfreigabe.",
    "topic": "medien"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "md_k4_l2",
  "kurs": "medien_k4",
  "order": 2,
  "icon": "🔒",
  "title": "Sicher im Netz",
  "kurz": "Daten, Passwörter, fair chatten",
  "erklaerung": {
   "intro": "Im Internet gibst du <b>keine persönlichen Daten</b> preis: keine Adresse, keine Telefonnummer, keine Fotos von dir an Fremde. <b>Passwörter</b> sind geheim und sollten lang sein. Nicht jeder ist, wer er vorgibt. Triff dich <b>nie</b> mit Online-Bekanntschaften. Sei im Chat <b>fair</b> – gemeine Nachrichten sind Cybermobbing.",
   "merksatz": "Daten geheim – Passwort geheim – fair bleiben – Erwachsenen Bescheid sagen.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏠</text></svg>Adresse? Bleibt geheim!",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔑</text></svg>Passwort nur für dich (und Eltern)",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛑</text></svg>Treffen mit Fremden aus dem Netz – NEIN"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "mdk4l2u_leicht_1",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Darfst du einem Fremden im Chat deine Adresse sagen?",
     "answers": [
      "ja",
      "nur wenn er nett ist",
      "nein",
      "nur am Wochenende"
     ],
     "correct": 2,
     "explanation": "Adresse bleibt geheim.",
     "topic": "medien",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏠</text></svg>"
    },
    {
     "id": "mdk4l2u_leicht_2",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wem darfst du dein Passwort sagen?",
     "answers": [
      "allen Freunden",
      "nur deinen Eltern",
      "jedem im Chat",
      "der ganzen Klasse"
     ],
     "correct": 1,
     "explanation": "Passwörter sind geheim.",
     "topic": "medien",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔑</text></svg>"
    },
    {
     "id": "mdk4l2u_leicht_3",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was machst du, wenn dich jemand online beleidigt?",
     "answers": [
      "zurück beleidigen",
      "Eltern oder Lehrer Bescheid sagen",
      "nichts sagen",
      "dein Passwort schicken"
     ],
     "correct": 1,
     "explanation": "Hol dir Hilfe.",
     "topic": "medien"
    },
    {
     "id": "mdk4l2u_leicht_4",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Ein Fremder aus dem Spiel will dich treffen. Was tust du?",
     "answers": [
      "hingehen",
      "Nein sagen und Eltern erzählen",
      "allein hingehen und niemandem sagen",
      "Adresse schicken"
     ],
     "correct": 1,
     "explanation": "Nie treffen!",
     "topic": "medien",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛑</text></svg>"
    },
    {
     "id": "mdk4l2u_leicht_5",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist ein gutes Passwort?",
     "answers": [
      "Ha5e!Mond7Baum",
      "123456",
      "passwort",
      "deinName"
     ],
     "correct": 0,
     "explanation": "Lang, gemischt.",
     "topic": "medien",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔒</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "mdk4l2u_mittel_1",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist Cybermobbing?",
     "answers": [
      "ein Computerspiel",
      "eine Suchmaschine",
      "jemanden im Internet immer wieder fertigmachen",
      "ein Virus"
     ],
     "correct": 2,
     "explanation": "Mobbing im Netz.",
     "topic": "medien"
    },
    {
     "id": "mdk4l2u_mittel_2",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum soll man keine Fotos an Fremde schicken?",
     "answers": [
      "Fotos werden kaputt.",
      "Es kostet Geld.",
      "Das Handy wird langsam.",
      "Man weiß nicht, was sie damit machen."
     ],
     "correct": 3,
     "explanation": "Fotos kann man nicht zurückholen.",
     "topic": "medien",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📷</text></svg>"
    },
    {
     "id": "mdk4l2u_mittel_3",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist ein Spitzname im Internet?",
     "answers": [
      "dein voller Name",
      "deine Adresse",
      "ein ausgedachter Name statt deines echten",
      "deine Schule"
     ],
     "correct": 2,
     "explanation": "Schützt dich.",
     "topic": "medien"
    },
    {
     "id": "mdk4l2u_mittel_4",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Eine Nachricht sagt: 'Du hast ein Handy gewonnen! Klick hier!' Was tust du?",
     "answers": [
      "sofort klicken",
      "nicht klicken und löschen",
      "Daten eingeben",
      "weiterschicken"
     ],
     "correct": 1,
     "explanation": "Oft ein Trick.",
     "topic": "medien"
    },
    {
     "id": "mdk4l2u_mittel_5",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was gehört zu persönlichen Daten?",
     "answers": [
      "Telefonnummer",
      "Lieblingsfarbe allgemein",
      "das Wetter",
      "die Uhrzeit"
     ],
     "correct": 0,
     "explanation": "Telefonnummer ist privat.",
     "topic": "medien",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📞</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "mdk4l2u_schwer_1",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum ist ein langes Passwort besser?",
     "answers": [
      "Es ist schwerer zu erraten.",
      "Es sieht schöner aus.",
      "Man vergisst es nicht.",
      "Es ist schneller."
     ],
     "correct": 0,
     "explanation": "Mehr Zeichen = sicherer.",
     "topic": "medien"
    },
    {
     "id": "mdk4l2u_schwer_2",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was bedeutet 'Das Internet vergisst nicht'?",
     "answers": [
      "Was online ist, kann lange gespeichert bleiben.",
      "Das Internet hat ein Gedächtnis wie ein Mensch.",
      "Man kann alles sofort löschen.",
      "Es gibt keine Speicher."
     ],
     "correct": 0,
     "explanation": "Erst denken, dann posten.",
     "topic": "medien"
    },
    {
     "id": "mdk4l2u_schwer_3",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was tust du, wenn ein Freund gemobbt wird?",
     "answers": [
      "mitlachen",
      "wegschauen",
      "ihm helfen und Erwachsenen Bescheid sagen",
      "die Nachricht teilen"
     ],
     "correct": 2,
     "explanation": "Hilfe holen.",
     "topic": "medien"
    },
    {
     "id": "mdk4l2u_schwer_4",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wofür ist ein Screenshot bei Mobbing nützlich?",
     "answers": [
      "zum Weiterschicken",
      "zum Lachen",
      "als Beweis für Eltern oder Lehrer",
      "als Hintergrundbild"
     ],
     "correct": 2,
     "explanation": "Beweise sichern.",
     "topic": "medien"
    },
    {
     "id": "mdk4l2u_schwer_5",
     "category": "kurs_md_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Woran erkennst du eine sichere Webseite oft?",
     "answers": [
      "am Schloss-Symbol in der Adresszeile",
      "an bunten Bildern",
      "an vielen Werbebannern",
      "an Großbuchstaben"
     ],
     "correct": 0,
     "explanation": "https und Schloss.",
     "topic": "medien",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔒</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "mdk4l2_test_1",
    "category": "kurs_md_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Darfst du Fremden im Netz deine Telefonnummer geben?",
    "answers": [
     "nein",
     "ja",
     "nur einmal",
     "nur Erwachsenen"
    ],
    "correct": 0,
    "explanation": "Privat!",
    "topic": "medien",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📞</text></svg>"
   },
   {
    "id": "mdk4l2_test_2",
    "category": "kurs_md_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wer darf dein Passwort kennen?",
    "answers": [
     "deine Freunde",
     "jeder",
     "die Klasse",
     "nur du und deine Eltern"
    ],
    "correct": 3,
    "explanation": "Geheim.",
    "topic": "medien",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔑</text></svg>"
   },
   {
    "id": "mdk4l2_test_3",
    "category": "kurs_md_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist Cybermobbing?",
    "answers": [
     "Fertigmachen im Internet",
     "ein Spiel",
     "ein Video",
     "ein Passwort"
    ],
    "correct": 0,
    "explanation": "Mobbing online.",
    "topic": "medien"
   },
   {
    "id": "mdk4l2_test_4",
    "category": "kurs_md_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was tust du bei 'Du hast gewonnen – klick hier!'?",
    "answers": [
     "nicht klicken",
     "klicken",
     "Daten eingeben",
     "teilen"
    ],
    "correct": 0,
    "explanation": "Trick!",
    "topic": "medien"
   },
   {
    "id": "mdk4l2_test_5",
    "category": "kurs_md_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist ein sicheres Passwort?",
    "answers": [
     "123",
     "dein Name",
     "abc",
     "lang mit Zahlen und Zeichen"
    ],
    "correct": 3,
    "explanation": "Lang, gemischt.",
    "topic": "medien",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔒</text></svg>"
   },
   {
    "id": "mdk4l2_test_6",
    "category": "kurs_md_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was machst du, wenn dich jemand online bedroht?",
    "answers": [
     "antworten",
     "Erwachsenen Bescheid sagen",
     "geheim halten",
     "treffen"
    ],
    "correct": 1,
    "explanation": "Hilfe holen.",
    "topic": "medien"
   },
   {
    "id": "mdk4l2_test_7",
    "category": "kurs_md_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum benutzt man im Spiel einen Spitznamen?",
    "answers": [
     "weil es Pflicht ist",
     "für mehr Punkte",
     "zum Bezahlen",
     "um sich zu schützen"
    ],
    "correct": 3,
    "explanation": "Schutz.",
    "topic": "medien"
   },
   {
    "id": "mdk4l2_test_8",
    "category": "kurs_md_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Darfst du dich mit einer Online-Bekanntschaft allein treffen?",
    "answers": [
     "ja",
     "nur nachmittags",
     "nein",
     "nur im Park"
    ],
    "correct": 2,
    "explanation": "Nie allein!",
    "topic": "medien",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛑</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
