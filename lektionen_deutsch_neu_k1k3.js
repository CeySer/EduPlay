// Neue Deutschkurse: K1 Groß/klein + Sätze, K3 Wörterbuch + Dehnung (28.11.2026)
(function () {
    const extraKurse = [{"id": "gross_saetze_k1", "title": "Groß, klein und erste Sätze", "icon": "✍️", "grade": 1, "subject": "deutsch", "beschreibung": "Namen und Dinge groß schreiben, Sätze richtig bauen."}, {"id": "woerterbuch_k3", "title": "Wörterbuch und lange Laute", "icon": "📚", "grade": 3, "subject": "deutsch", "beschreibung": "Nach dem ABC sortieren, im Wörterbuch suchen, Wörter mit h und ie."}];
    const extraLektionen = [
 {
  "id": "gk_k1_l1",
  "kurs": "gross_saetze_k1",
  "order": 1,
  "icon": "🔠",
  "title": "Groß oder klein?",
  "kurz": "Namen und Dinge schreibt man groß",
  "erklaerung": {
   "intro": "Manche Wörter schreibt man mit einem <b>großen</b> Anfangsbuchstaben: <b>Namen</b> (Mia, Tom), <b>Tiere</b> (Hund), <b>Dinge</b> (Ball) – und das <b>erste Wort im Satz</b>. Was man <b>tun</b> kann (laufen) oder <b>wie</b> etwas ist (rot), schreibt man klein.",
   "merksatz": "Namen, Tiere, Dinge und der Satzanfang: groß!",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐶</text></svg>der <b>H</b>und – groß, ein Tier",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>der <b>B</b>all – groß, ein Ding",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏃</text></svg><b>l</b>aufen – klein, das tut man"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "gkk1l1u_leicht_1",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man es richtig? 🐱",
     "answers": [
      "katze",
      "KAtze",
      "kAtze",
      "Katze"
     ],
     "correct": 3,
     "explanation": "Katze ist ein Tier – groß.",
     "topic": "gross_klein",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐱</text></svg>"
    },
    {
     "id": "gkk1l1u_leicht_2",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man den Namen richtig?",
     "answers": [
      "mia",
      "Mia",
      "MIa",
      "miA"
     ],
     "correct": 1,
     "explanation": "Namen schreibt man groß.",
     "topic": "gross_klein",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👧</text></svg>"
    },
    {
     "id": "gkk1l1u_leicht_3",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort schreibt man groß?",
     "answers": [
      "laufen",
      "rot",
      "Baum",
      "und"
     ],
     "correct": 2,
     "explanation": "Baum ist ein Ding – groß.",
     "topic": "gross_klein",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌳</text></svg>"
    },
    {
     "id": "gkk1l1u_leicht_4",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man es richtig? 🍎",
     "answers": [
      "apfel",
      "aPfel",
      "Apfel",
      "APfel"
     ],
     "correct": 2,
     "explanation": "Apfel ist ein Ding – groß.",
     "topic": "gross_klein",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍎</text></svg>"
    },
    {
     "id": "gkk1l1u_leicht_5",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort schreibt man klein?",
     "answers": [
      "Hase",
      "Tisch",
      "springen",
      "Oma"
     ],
     "correct": 2,
     "explanation": "springen tut man – klein.",
     "topic": "gross_klein",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐇</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "gkk1l1u_mittel_1",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort schreibt man groß?",
     "answers": [
      "warm",
      "scheinen",
      "Sonne",
      "hell"
     ],
     "correct": 2,
     "explanation": "Sonne ist ein Ding – groß.",
     "topic": "gross_klein",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
    },
    {
     "id": "gkk1l1u_mittel_2",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Wörter schreibt man groß: Der Hund bellt.",
     "answers": [
      "1",
      "3",
      "2",
      "0"
     ],
     "correct": 2,
     "explanation": "Der (Satzanfang) und Hund (Tier).",
     "topic": "gross_klein",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐶</text></svg>"
    },
    {
     "id": "gkk1l1u_mittel_3",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "tom hat einen Ball.",
      "Tom hat einen Ball.",
      "Tom hat einen ball.",
      "Tom Hat einen Ball."
     ],
     "correct": 1,
     "explanation": "Tom (Name) und Ball (Ding) groß.",
     "topic": "gross_klein",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
    },
    {
     "id": "gkk1l1u_mittel_4",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort ist falsch? Der hase frisst.",
     "answers": [
      "Der",
      "hase",
      "frisst",
      "keins"
     ],
     "correct": 1,
     "explanation": "Hase ist ein Tier – groß.",
     "topic": "gross_klein",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐰</text></svg>"
    },
    {
     "id": "gkk1l1u_mittel_5",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man es richtig? 🌙",
     "answers": [
      "mond",
      "MOND",
      "mOnd",
      "Mond"
     ],
     "correct": 3,
     "explanation": "Mond – groß.",
     "topic": "gross_klein",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌙</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "gkk1l1u_schwer_1",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Wörter schreibt man groß: Mama kauft Brot.",
     "answers": [
      "1",
      "2",
      "3",
      "0"
     ],
     "correct": 1,
     "explanation": "Mama (Name/Person, Satzanfang) und Brot (Ding).",
     "topic": "gross_klein",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍞</text></svg>"
    },
    {
     "id": "gkk1l1u_schwer_2",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort ist falsch? Die Katze ist Müde.",
     "answers": [
      "Müde",
      "Die",
      "Katze",
      "ist"
     ],
     "correct": 0,
     "explanation": "müde sagt, wie jemand ist – klein.",
     "topic": "gross_klein",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😴</text></svg>"
    },
    {
     "id": "gkk1l1u_schwer_3",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist ganz richtig?",
     "answers": [
      "opa liest ein Buch.",
      "Opa liest ein buch.",
      "Opa liest ein Buch.",
      "Opa Liest ein Buch."
     ],
     "correct": 2,
     "explanation": "Opa und Buch groß, liest klein.",
     "topic": "gross_klein",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📖</text></svg>"
    },
    {
     "id": "gkk1l1u_schwer_4",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum schreibt man 'Die' groß in 'Die Ente schwimmt.'?",
     "answers": [
      "Es ist ein Tier.",
      "Es ist ein Name.",
      "Es steht am Satzanfang.",
      "Es ist laut."
     ],
     "correct": 2,
     "explanation": "Das erste Wort im Satz ist immer groß.",
     "topic": "gross_klein",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦆</text></svg>"
    },
    {
     "id": "gkk1l1u_schwer_5",
     "category": "kurs_gk_k1_l1",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort schreibt man klein?",
     "answers": [
      "Schule",
      "Schaf",
      "schön",
      "Schal"
     ],
     "correct": 2,
     "explanation": "schön sagt, wie etwas ist – klein.",
     "topic": "gross_klein"
    }
   ]
  },
  "test": [
   {
    "id": "gkk1l1_test_1",
    "category": "kurs_gk_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man es richtig? 🚗",
    "answers": [
     "auto",
     "aUto",
     "AUTo",
     "Auto"
    ],
    "correct": 3,
    "explanation": "Auto ist ein Ding – groß.",
    "topic": "gross_klein",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚗</text></svg>"
   },
   {
    "id": "gkk1l1_test_2",
    "category": "kurs_gk_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort schreibt man groß?",
    "answers": [
     "blühen",
     "gelb",
     "schön",
     "Blume"
    ],
    "correct": 3,
    "explanation": "Blume ist ein Ding – groß.",
    "topic": "gross_klein",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌼</text></svg>"
   },
   {
    "id": "gkk1l1_test_3",
    "category": "kurs_gk_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Wörter schreibt man groß: Lena malt ein Bild.",
    "answers": [
     "1",
     "3",
     "4",
     "2"
    ],
    "correct": 3,
    "explanation": "Lena (Name) und Bild (Ding).",
    "topic": "gross_klein",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎨</text></svg>"
   },
   {
    "id": "gkk1l1_test_4",
    "category": "kurs_gk_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort ist falsch? ich spiele Ball.",
    "answers": [
     "spiele",
     "Ball",
     "ich",
     "keins"
    ],
    "correct": 2,
    "explanation": "Am Satzanfang groß: Ich.",
    "topic": "gross_klein"
   },
   {
    "id": "gkk1l1_test_5",
    "category": "kurs_gk_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort schreibt man klein?",
    "answers": [
     "Lampe",
     "lachen",
     "Löwe",
     "Leo"
    ],
    "correct": 1,
    "explanation": "lachen tut man – klein.",
    "topic": "gross_klein",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😄</text></svg>"
   },
   {
    "id": "gkk1l1_test_6",
    "category": "kurs_gk_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man den Namen richtig?",
    "answers": [
     "Ali",
     "ali",
     "aLi",
     "ALi"
    ],
    "correct": 0,
    "explanation": "Namen groß.",
    "topic": "gross_klein"
   },
   {
    "id": "gkk1l1_test_7",
    "category": "kurs_gk_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz ist richtig?",
    "answers": [
     "Der Fisch schwimmt.",
     "der Fisch schwimmt.",
     "Der fisch schwimmt.",
     "Der Fisch Schwimmt."
    ],
    "correct": 0,
    "explanation": "Satzanfang und Fisch groß.",
    "topic": "gross_klein",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐟</text></svg>"
   },
   {
    "id": "gkk1l1_test_8",
    "category": "kurs_gk_k1_l1",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was schreibt man immer groß?",
    "answers": [
     "jedes Wort",
     "das erste Wort im Satz",
     "nur Tiere",
     "das letzte Wort"
    ],
    "correct": 1,
    "explanation": "Satzanfang ist immer groß.",
    "topic": "gross_klein"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "gk_k1_l2",
  "kurs": "gross_saetze_k1",
  "order": 2,
  "icon": "🧩",
  "title": "Erste Sätze bauen",
  "kurz": "Wörter ordnen, Satz mit Punkt",
  "erklaerung": {
   "intro": "Ein <b>Satz</b> erzählt etwas. Er hat eine sinnvolle <b>Reihenfolge</b>: Der Hund bellt. Er beginnt <b>groß</b> und endet mit einem <b>Punkt</b> (oder ? oder !). Zwischen den Wörtern ist eine Lücke.",
   "merksatz": "Groß anfangen – sinnvoll ordnen – Punkt am Ende.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐶</text></svg>Der Hund bellt.",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐱</text></svg>Die Katze schläft.",
    "Falsch: bellt Hund der – richtig: Der Hund bellt."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "gkk1l2u_leicht_1",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Satz ist richtig geordnet?",
     "answers": [
      "Hund der bellt.",
      "bellt Der Hund.",
      "Der Hund bellt.",
      "Der bellt Hund."
     ],
     "correct": 2,
     "explanation": "Wer? Der Hund. Was tut er? bellt.",
     "topic": "erste_saetze",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐶</text></svg>"
    },
    {
     "id": "gkk1l2u_leicht_2",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was fehlt am Satzende? Ich esse Eis",
     "answers": [
      "ein Komma",
      "nichts",
      "ein Punkt",
      "ein Strich"
     ],
     "correct": 2,
     "explanation": "Ein Satz endet mit Punkt.",
     "topic": "erste_saetze",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍦</text></svg>"
    },
    {
     "id": "gkk1l2u_leicht_3",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort fehlt? Die ___ miaut.",
     "answers": [
      "Kuh",
      "Ente",
      "Maus",
      "Katze"
     ],
     "correct": 3,
     "explanation": "Eine Katze miaut.",
     "topic": "erste_saetze",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐱</text></svg>"
    },
    {
     "id": "gkk1l2u_leicht_4",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Satz ist richtig?",
     "answers": [
      "ich male ein Bild",
      "Ich male ein Bild",
      "Ich male ein Bild.",
      "ich male ein Bild."
     ],
     "correct": 2,
     "explanation": "Groß anfangen und Punkt am Ende.",
     "topic": "erste_saetze",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎨</text></svg>"
    },
    {
     "id": "gkk1l2u_leicht_5",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort fehlt? Der Vogel ___.",
     "answers": [
      "fliegt",
      "schwimmt",
      "bellt",
      "liest"
     ],
     "correct": 0,
     "explanation": "Ein Vogel fliegt.",
     "topic": "erste_saetze",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐦</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "gkk1l2u_mittel_1",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz ist richtig geordnet?",
     "answers": [
      "Mama kocht Suppe.",
      "Suppe Mama kocht.",
      "kocht Suppe Mama.",
      "Mama Suppe kocht."
     ],
     "correct": 0,
     "explanation": "Mama kocht Suppe.",
     "topic": "erste_saetze",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍲</text></svg>"
    },
    {
     "id": "gkk1l2u_mittel_2",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Wörter hat der Satz: Ich spiele im Garten.",
     "answers": [
      "3",
      "4",
      "5",
      "2"
     ],
     "correct": 1,
     "explanation": "Ich | spiele | im | Garten – 4 Wörter.",
     "topic": "erste_saetze",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌻</text></svg>"
    },
    {
     "id": "gkk1l2u_mittel_3",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort fehlt? Das Baby ___ im Bett.",
     "answers": [
      "rennt",
      "kocht",
      "schläft",
      "fährt"
     ],
     "correct": 2,
     "explanation": "Das Baby schläft im Bett.",
     "topic": "erste_saetze",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👶</text></svg>"
    },
    {
     "id": "gkk1l2u_mittel_4",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz passt zum Bild? 🚲",
     "answers": [
      "Ben fährt Rad.",
      "Ben isst Rad.",
      "Ben schläft Rad.",
      "Rad fährt Ben."
     ],
     "correct": 0,
     "explanation": "Ben fährt Rad.",
     "topic": "erste_saetze",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚲</text></svg>"
    },
    {
     "id": "gkk1l2u_mittel_5",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist kein Satz?",
     "answers": [
      "Der Hund spielt.",
      "Ich lache.",
      "Oma backt.",
      "Hund Ball rot"
     ],
     "correct": 3,
     "explanation": "„Hund Ball rot“ erzählt nichts – kein Satz.",
     "topic": "erste_saetze"
    }
   ],
   "schwer": [
    {
     "id": "gkk1l2u_schwer_1",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig geordnet?",
     "answers": [
      "Wir in den Zoo gehen.",
      "Zoo wir gehen in den.",
      "In gehen wir den Zoo.",
      "Wir gehen in den Zoo."
     ],
     "correct": 3,
     "explanation": "Wir gehen in den Zoo.",
     "topic": "erste_saetze",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦁</text></svg>"
    },
    {
     "id": "gkk1l2u_schwer_2",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist eine Frage?",
     "answers": [
      "Ich komme mit.",
      "Komm mit!",
      "Er kommt mit.",
      "Kommst du mit?"
     ],
     "correct": 3,
     "explanation": "Fragen enden mit ?",
     "topic": "erste_saetze"
    },
    {
     "id": "gkk1l2u_schwer_3",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort fehlt? Im Winter ___ es.",
     "answers": [
      "schwimmt",
      "schneit",
      "blüht",
      "brennt"
     ],
     "correct": 1,
     "explanation": "Im Winter schneit es.",
     "topic": "erste_saetze",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>❄️</text></svg>"
    },
    {
     "id": "gkk1l2u_schwer_4",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Sätze sind das? Ich bin Mia. Ich bin sechs.",
     "answers": [
      "1",
      "2",
      "3",
      "4"
     ],
     "correct": 1,
     "explanation": "Zwei Punkte – zwei Sätze.",
     "topic": "erste_saetze"
    },
    {
     "id": "gkk1l2u_schwer_5",
     "category": "kurs_gk_k1_l2",
     "area": "schule",
     "grade": 1,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz ist richtig geschrieben?",
     "answers": [
      "Papa trinkt Kaffee.",
      "papa trinkt Kaffee.",
      "Papa trinkt Kaffee",
      "Papa trinkt kaffee."
     ],
     "correct": 0,
     "explanation": "Groß anfangen, Kaffee groß, Punkt am Ende.",
     "topic": "erste_saetze",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☕</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "gkk1l2_test_1",
    "category": "kurs_gk_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz ist richtig geordnet?",
    "answers": [
     "Sonne die scheint.",
     "scheint Die Sonne.",
     "Die scheint Sonne.",
     "Die Sonne scheint."
    ],
    "correct": 3,
    "explanation": "Die Sonne scheint.",
    "topic": "erste_saetze",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
   },
   {
    "id": "gkk1l2_test_2",
    "category": "kurs_gk_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort fehlt? Der Fisch ___.",
    "answers": [
     "fliegt",
     "bellt",
     "schwimmt",
     "klettert"
    ],
    "correct": 2,
    "explanation": "Fische schwimmen.",
    "topic": "erste_saetze",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐟</text></svg>"
   },
   {
    "id": "gkk1l2_test_3",
    "category": "kurs_gk_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was fehlt am Satzende? Wir spielen Ball",
    "answers": [
     "ein Komma",
     "nichts",
     "ein Punkt",
     "ein Strich"
    ],
    "correct": 2,
    "explanation": "Aussage → Punkt.",
    "topic": "erste_saetze",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
   },
   {
    "id": "gkk1l2_test_4",
    "category": "kurs_gk_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz passt zum Bild? 🛁",
    "answers": [
     "Lea badet.",
     "Lea fliegt.",
     "Lea kocht.",
     "Lea reitet."
    ],
    "correct": 0,
    "explanation": "Lea badet.",
    "topic": "erste_saetze",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛁</text></svg>"
   },
   {
    "id": "gkk1l2_test_5",
    "category": "kurs_gk_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Wörter hat der Satz: Der Hase hoppelt.",
    "answers": [
     "3",
     "2",
     "4",
     "5"
    ],
    "correct": 0,
    "explanation": "Der | Hase | hoppelt.",
    "topic": "erste_saetze",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐰</text></svg>"
   },
   {
    "id": "gkk1l2_test_6",
    "category": "kurs_gk_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satz ist richtig?",
    "answers": [
     "opa schläft.",
     "Opa schläft",
     "Opa Schläft.",
     "Opa schläft."
    ],
    "correct": 3,
    "explanation": "Groß, sinnvoll, Punkt.",
    "topic": "erste_saetze",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👴</text></svg>"
   },
   {
    "id": "gkk1l2_test_7",
    "category": "kurs_gk_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist kein Satz?",
    "answers": [
     "Der Baum ist grün.",
     "Ich sehe ein Haus.",
     "Es regnet.",
     "Baum grün Haus"
    ],
    "correct": 3,
    "explanation": "Ein Satz muss etwas erzählen.",
    "topic": "erste_saetze"
   },
   {
    "id": "gkk1l2_test_8",
    "category": "kurs_gk_k1_l2",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Womit fängt ein Satz an?",
    "answers": [
     "mit einem Punkt",
     "mit einer Zahl",
     "mit einem kleinen Buchstaben",
     "mit einem großen Buchstaben"
    ],
    "correct": 3,
    "explanation": "Satzanfang groß.",
    "topic": "erste_saetze"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "wb_k3_l1",
  "kurs": "woerterbuch_k3",
  "order": 1,
  "icon": "🔤",
  "title": "ABC und Wörterbuch",
  "kurz": "Nach dem ABC ordnen und nachschlagen",
  "erklaerung": {
   "intro": "Im <b>Wörterbuch</b> stehen die Wörter nach dem <b>ABC</b>. Erst zählt der <b>erste</b> Buchstabe: Apfel vor Birne. Ist er gleich, schaust du auf den <b>zweiten</b>: Ball vor Bett. Verben suchst du in der <b>Grundform</b> (ging → gehen), Nomen in der <b>Einzahl</b> (Bäume → Baum).",
   "merksatz": "Erst 1. Buchstabe, dann 2., dann 3. – Verben in der Grundform, Nomen in der Einzahl nachschlagen.",
   "beispiele": [
    "Apfel – Birne – Zitrone: A vor B vor Z",
    "Ball – Bett – Bus: a vor e vor u",
    "„ging“ findest du unter „gehen“."
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "wbk3l1u_leicht_1",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort steht im Wörterbuch zuerst?",
     "answers": [
      "Hund",
      "Maus",
      "Zebra",
      "Affe"
     ],
     "correct": 3,
     "explanation": "A kommt vor H, M und Z.",
     "topic": "woerterbuch"
    },
    {
     "id": "wbk3l1u_leicht_2",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Buchstabe kommt im ABC nach K?",
     "answers": [
      "J",
      "L",
      "M",
      "I"
     ],
     "correct": 1,
     "explanation": "… J, K, L, M …",
     "topic": "woerterbuch"
    },
    {
     "id": "wbk3l1u_leicht_3",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort steht zuerst?",
     "answers": [
      "Bus",
      "Bett",
      "Ball",
      "Birne"
     ],
     "correct": 2,
     "explanation": "Ba vor Be, Bi, Bu.",
     "topic": "woerterbuch"
    },
    {
     "id": "wbk3l1u_leicht_4",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie ist das Wörterbuch geordnet?",
     "answers": [
      "nach dem ABC",
      "nach der Länge",
      "nach Farben",
      "zufällig"
     ],
     "correct": 0,
     "explanation": "Wörter stehen alphabetisch.",
     "topic": "woerterbuch",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📚</text></svg>"
    },
    {
     "id": "wbk3l1u_leicht_5",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Buchstabe kommt vor S?",
     "answers": [
      "T",
      "Q",
      "R",
      "U"
     ],
     "correct": 2,
     "explanation": "… Q, R, S, T …",
     "topic": "woerterbuch"
    }
   ],
   "mittel": [
    {
     "id": "wbk3l1u_mittel_1",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Reihe ist richtig nach dem ABC geordnet?",
     "answers": [
      "Birne, Apfel, Kirsche",
      "Kirsche, Apfel, Birne",
      "Apfel, Kirsche, Birne",
      "Apfel, Birne, Kirsche"
     ],
     "correct": 3,
     "explanation": "A – B – K.",
     "topic": "woerterbuch",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍒</text></svg>"
    },
    {
     "id": "wbk3l1u_mittel_2",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort steht zuerst?",
     "answers": [
      "Haus",
      "Hund",
      "Hose",
      "Hase"
     ],
     "correct": 3,
     "explanation": "Ha-s vor Ha-u, Ho, Hu.",
     "topic": "woerterbuch"
    },
    {
     "id": "wbk3l1u_mittel_3",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Unter welchem Wort findest du 'lief'?",
     "answers": [
      "lief",
      "Läufer",
      "liefern",
      "laufen"
     ],
     "correct": 3,
     "explanation": "Verben in der Grundform suchen: laufen.",
     "topic": "woerterbuch",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏃</text></svg>"
    },
    {
     "id": "wbk3l1u_mittel_4",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Unter welchem Wort findest du 'Häuser'?",
     "answers": [
      "Haus",
      "Häuser",
      "Hausen",
      "häuslich"
     ],
     "correct": 0,
     "explanation": "Nomen in der Einzahl suchen: Haus.",
     "topic": "woerterbuch",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏘️</text></svg>"
    },
    {
     "id": "wbk3l1u_mittel_5",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort steht zuletzt?",
     "answers": [
      "Ziege",
      "Zug",
      "Zahn",
      "Zelt"
     ],
     "correct": 1,
     "explanation": "Za – Ze – Zi – Zu: Zug ist zuletzt.",
     "topic": "woerterbuch"
    }
   ],
   "schwer": [
    {
     "id": "wbk3l1u_schwer_1",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Reihe ist richtig geordnet?",
     "answers": [
      "Maus, Mais, Meer",
      "Mais, Maus, Meer",
      "Meer, Mais, Maus",
      "Mais, Meer, Maus"
     ],
     "correct": 1,
     "explanation": "Mai vor Mau (i vor u), dann Me.",
     "topic": "woerterbuch"
    },
    {
     "id": "wbk3l1u_schwer_2",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Unter welchem Wort findest du 'aß'?",
     "answers": [
      "aß",
      "Aas",
      "essen",
      "Essig"
     ],
     "correct": 2,
     "explanation": "aß ist von essen.",
     "topic": "woerterbuch",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍽️</text></svg>"
    },
    {
     "id": "wbk3l1u_schwer_3",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort steht zuerst?",
     "answers": [
      "Schule",
      "Schiff",
      "Schere",
      "Schaf"
     ],
     "correct": 3,
     "explanation": "Scha vor Sche, Schi, Schu.",
     "topic": "woerterbuch",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐑</text></svg>"
    },
    {
     "id": "wbk3l1u_schwer_4",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was hilft dir beim schnellen Suchen?",
     "answers": [
      "die Seitenfarbe",
      "die Bilder",
      "die Leitwörter oben auf der Seite",
      "der Umschlag"
     ],
     "correct": 2,
     "explanation": "Leitwörter zeigen das erste und letzte Wort der Seite.",
     "topic": "woerterbuch"
    },
    {
     "id": "wbk3l1u_schwer_5",
     "category": "kurs_wb_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Unter welchem Wort findest du 'größer'?",
     "answers": [
      "größer",
      "Größe",
      "grob",
      "groß"
     ],
     "correct": 3,
     "explanation": "Adjektive in der Grundstufe suchen: groß.",
     "topic": "woerterbuch"
    }
   ]
  },
  "test": [
   {
    "id": "wbk3l1_test_1",
    "category": "kurs_wb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort steht im Wörterbuch zuerst?",
    "answers": [
     "Igel",
     "Eimer",
     "Ofen",
     "Uhr"
    ],
    "correct": 1,
    "explanation": "E vor I, O, U.",
    "topic": "woerterbuch"
   },
   {
    "id": "wbk3l1_test_2",
    "category": "kurs_wb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Reihe ist richtig geordnet?",
    "answers": [
     "Biene, Bär, Bus",
     "Bär, Biene, Bus",
     "Bus, Biene, Bär",
     "Bär, Bus, Biene"
    ],
    "correct": 1,
    "explanation": "Bä vor Bi vor Bu.",
    "topic": "woerterbuch"
   },
   {
    "id": "wbk3l1_test_3",
    "category": "kurs_wb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Unter welchem Wort findest du 'sang'?",
    "answers": [
     "sang",
     "Sänger",
     "Sand",
     "singen"
    ],
    "correct": 3,
    "explanation": "Grundform: singen.",
    "topic": "woerterbuch",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎤</text></svg>"
   },
   {
    "id": "wbk3l1_test_4",
    "category": "kurs_wb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Buchstabe kommt nach P?",
    "answers": [
     "Q",
     "O",
     "R",
     "B"
    ],
    "correct": 0,
    "explanation": "… O, P, Q, R …",
    "topic": "woerterbuch"
   },
   {
    "id": "wbk3l1_test_5",
    "category": "kurs_wb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Unter welchem Wort findest du 'Kinder'?",
    "answers": [
     "Kinder",
     "kindisch",
     "Kind",
     "Kinn"
    ],
    "correct": 2,
    "explanation": "Einzahl: Kind.",
    "topic": "woerterbuch"
   },
   {
    "id": "wbk3l1_test_6",
    "category": "kurs_wb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort steht zuletzt?",
    "answers": [
     "Tag",
     "Tee",
     "Tür",
     "Tor"
    ],
    "correct": 2,
    "explanation": "Ta – Te – To – Tü.",
    "topic": "woerterbuch"
   },
   {
    "id": "wbk3l1_test_7",
    "category": "kurs_wb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort steht zuerst?",
    "answers": [
     "Kerze",
     "Kuchen",
     "Kiste",
     "Koffer"
    ],
    "correct": 0,
    "explanation": "Ke vor Ki, Ko, Ku.",
    "topic": "woerterbuch",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🕯️</text></svg>"
   },
   {
    "id": "wbk3l1_test_8",
    "category": "kurs_wb_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Buchstaben hat das ABC?",
    "answers": [
     "24",
     "28",
     "26",
     "20"
    ],
    "correct": 2,
    "explanation": "Das ABC hat 26 Buchstaben (plus ä, ö, ü und ß).",
    "topic": "woerterbuch"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "wb_k3_l2",
  "kurs": "woerterbuch_k3",
  "order": 2,
  "icon": "🐄",
  "title": "Wörter mit h und ie",
  "kurz": "Dehnungs-h, ie und ah, eh, oh, uh",
  "erklaerung": {
   "intro": "Lange Laute schreibt man oft besonders: Ein langes <b>i</b> schreibt man meist <b>ie</b> (Biene). Manchmal zeigt ein <b>stummes h</b> den langen Laut: Kuh, Uhr, fahren, Zahn. Das h hörst du nicht! Es steht oft vor <b>l, m, n, r</b>: kühl, nehmen, Zahn, Ohr.",
   "merksatz": "Langes i → meist ie. Stummes h oft vor l, m, n, r. Merkwörter üben!",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐄</text></svg>die Ku<b>h</b> – stummes h",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⏰</text></svg>die U<b>h</b>r – stummes h vor r",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐝</text></svg>die B<b>ie</b>ne – langes i"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "wbk3l2u_leicht_1",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man es richtig? 🐄",
     "answers": [
      "Ku",
      "Kuu",
      "Kuhh",
      "Kuh"
     ],
     "correct": 3,
     "explanation": "Kuh – mit stummem h.",
     "topic": "dehnung",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐄</text></svg>"
    },
    {
     "id": "wbk3l2u_leicht_2",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man es richtig? ⏰",
     "answers": [
      "Ur",
      "Uur",
      "Huhr",
      "Uhr"
     ],
     "correct": 3,
     "explanation": "Uhr – mit stummem h.",
     "topic": "dehnung",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⏰</text></svg>"
    },
    {
     "id": "wbk3l2u_leicht_3",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man es richtig? 🐝",
     "answers": [
      "Biene",
      "Bine",
      "Bihne",
      "Bienne"
     ],
     "correct": 0,
     "explanation": "langes i → ie.",
     "topic": "dehnung",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐝</text></svg>"
    },
    {
     "id": "wbk3l2u_leicht_4",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Hörst du das h in 'Zahn'?",
     "answers": [
      "ja, ganz laut",
      "nein, es ist stumm",
      "nur am Anfang",
      "nur in der Mehrzahl"
     ],
     "correct": 1,
     "explanation": "Das Dehnungs-h hört man nicht.",
     "topic": "dehnung",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦷</text></svg>"
    },
    {
     "id": "wbk3l2u_leicht_5",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man es richtig? 🚗",
     "answers": [
      "faren",
      "fahren",
      "fahrn",
      "farhen"
     ],
     "correct": 1,
     "explanation": "fahren – mit h.",
     "topic": "dehnung",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚗</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "wbk3l2u_mittel_1",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort hat ein stummes h?",
     "answers": [
      "Sonne",
      "Sand",
      "Sohn",
      "Socke"
     ],
     "correct": 2,
     "explanation": "So-h-n: langes o mit h.",
     "topic": "dehnung"
    },
    {
     "id": "wbk3l2u_mittel_2",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man es richtig? 👂",
     "answers": [
      "Or",
      "Ohr",
      "Ohhr",
      "Oor"
     ],
     "correct": 1,
     "explanation": "Ohr – h vor r.",
     "topic": "dehnung",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👂</text></svg>"
    },
    {
     "id": "wbk3l2u_mittel_3",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man es richtig? 🦁",
     "answers": [
      "Tir",
      "Tihr",
      "Tier",
      "Tiehr"
     ],
     "correct": 2,
     "explanation": "Tier – langes i → ie.",
     "topic": "dehnung",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦁</text></svg>"
    },
    {
     "id": "wbk3l2u_mittel_4",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Vor welchen Buchstaben steht das Dehnungs-h oft?",
     "answers": [
      "b, d, g, k",
      "s, t, p, f",
      "l, m, n, r",
      "a, e, i, o"
     ],
     "correct": 2,
     "explanation": "kühl, nehmen, Zahn, Ohr.",
     "topic": "dehnung"
    },
    {
     "id": "wbk3l2u_mittel_5",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man es richtig? 🥛",
     "answers": [
      "kühl",
      "kül",
      "kühhl",
      "küel"
     ],
     "correct": 0,
     "explanation": "kühl – h vor l.",
     "topic": "dehnung",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧊</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "wbk3l2u_schwer_1",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort ist falsch geschrieben?",
     "answers": [
      "Schuh",
      "Stuhl",
      "Huhn",
      "Schuhle"
     ],
     "correct": 3,
     "explanation": "Schule hat kein h: Schule.",
     "topic": "dehnung"
    },
    {
     "id": "wbk3l2u_schwer_2",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort hat KEIN stummes h?",
     "answers": [
      "Huhn",
      "Mehl",
      "Bohne",
      "Hose"
     ],
     "correct": 3,
     "explanation": "Hose – das h am Anfang hört man.",
     "topic": "dehnung"
    },
    {
     "id": "wbk3l2u_schwer_3",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie schreibt man es richtig? 🛏️ (sie ___ im Bett)",
     "answers": [
      "liegt",
      "ligt",
      "lihgt",
      "liegd"
     ],
     "correct": 0,
     "explanation": "liegen – ie.",
     "topic": "dehnung",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛏️</text></svg>"
    },
    {
     "id": "wbk3l2u_schwer_4",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie schreibt man es richtig? 🐔",
     "answers": [
      "Hun",
      "Huhnn",
      "Huun",
      "Huhn"
     ],
     "correct": 3,
     "explanation": "Huhn – h vor n.",
     "topic": "dehnung",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐔</text></svg>"
    },
    {
     "id": "wbk3l2u_schwer_5",
     "category": "kurs_wb_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie schreibt man es richtig? (zum Nehmen)",
     "answers": [
      "nehmen",
      "nemen",
      "nähmen",
      "neemen"
     ],
     "correct": 0,
     "explanation": "nehmen – h vor m.",
     "topic": "dehnung"
    }
   ]
  },
  "test": [
   {
    "id": "wbk3l2_test_1",
    "category": "kurs_wb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man es richtig? 🪑",
    "answers": [
     "Stul",
     "Stuhl",
     "Stuul",
     "Schtuhl"
    ],
    "correct": 1,
    "explanation": "Stuhl – h vor l.",
    "topic": "dehnung",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪑</text></svg>"
   },
   {
    "id": "wbk3l2_test_2",
    "category": "kurs_wb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man es richtig? 🥾",
    "answers": [
     "Schu",
     "Schuh",
     "Schuu",
     "Schuhh"
    ],
    "correct": 1,
    "explanation": "Schuh – mit stummem h.",
    "topic": "dehnung",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👟</text></svg>"
   },
   {
    "id": "wbk3l2_test_3",
    "category": "kurs_wb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man es richtig? 🌧️ (es ___ kalt)",
    "answers": [
     "zieht",
     "zit",
     "zihet",
     "ziet"
    ],
    "correct": 0,
    "explanation": "ziehen – ie und h.",
    "topic": "dehnung"
   },
   {
    "id": "wbk3l2_test_4",
    "category": "kurs_wb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort hat ein stummes h?",
    "answers": [
     "Bohne",
     "Bote",
     "Boden",
     "Boot"
    ],
    "correct": 0,
    "explanation": "Bo-h-ne.",
    "topic": "dehnung",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🫘</text></svg>"
   },
   {
    "id": "wbk3l2_test_5",
    "category": "kurs_wb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man es richtig? 🍞 (zum Backen)",
    "answers": [
     "Mehl",
     "Mel",
     "Meehl",
     "Mähl"
    ],
    "correct": 0,
    "explanation": "Mehl – h vor l.",
    "topic": "dehnung"
   },
   {
    "id": "wbk3l2_test_6",
    "category": "kurs_wb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man es richtig? 🪰",
    "answers": [
     "Flige",
     "Flihge",
     "Fliege",
     "Fliehge"
    ],
    "correct": 2,
    "explanation": "langes i → ie.",
    "topic": "dehnung",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪰</text></svg>"
   },
   {
    "id": "wbk3l2_test_7",
    "category": "kurs_wb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Hörst du das h in 'Uhr'?",
    "answers": [
     "ja",
     "nur leise am Anfang",
     "nein",
     "nur in der Mehrzahl"
    ],
    "correct": 2,
    "explanation": "Das Dehnungs-h ist stumm.",
    "topic": "dehnung"
   },
   {
    "id": "wbk3l2_test_8",
    "category": "kurs_wb_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man es richtig? 🦷 (die ___)",
    "answers": [
     "Zäne",
     "Zähhne",
     "Zähne",
     "Zehne"
    ],
    "correct": 2,
    "explanation": "Zahn – Zähne: mit h.",
    "topic": "dehnung",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🦷</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
