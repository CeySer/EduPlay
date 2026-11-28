// Klasse 5 Rest Mathe: Netze/Schrägbild, Potenzen, Terme, römische Zahlen (28.11.2026)
(function () {
    const extraKurse = [{"id": "netze_k5", "title": "Körpernetze und Schrägbilder", "icon": "📦", "grade": 5, "subject": "mathe", "beschreibung": "Würfel- und Quadernetze erkennen, Schrägbilder zeichnen und lesen."}, {"id": "potenzen_k5", "title": "Quadratzahlen und Potenzen", "icon": "²", "grade": 5, "subject": "mathe", "beschreibung": "Quadratzahlen, Potenzschreibweise und Zehnerpotenzen."}, {"id": "terme_k5", "title": "Terme und Rechenregeln", "icon": "🧮", "grade": 5, "subject": "mathe", "beschreibung": "Klammer vor Punkt vor Strich, Terme aufstellen und berechnen."}, {"id": "roemisch_k5", "title": "Römische Zahlen", "icon": "🏛️", "grade": 5, "subject": "mathe", "beschreibung": "I, V, X, L, C, D, M – lesen und schreiben."}];
    const extraLektionen = [
 {
  "id": "nz_k5_l1",
  "kurs": "netze_k5",
  "order": 1,
  "icon": "📦",
  "title": "Würfel- und Quadernetze",
  "kurz": "Welches Netz lässt sich falten?",
  "erklaerung": {
   "intro": "Schneidet man einen Körper an den Kanten auf und klappt ihn flach, entsteht ein <b>Netz</b>. Ein <b>Würfelnetz</b> besteht aus <b>6 gleichen Quadraten</b>; es gibt <b>11 verschiedene</b>. Ein <b>Quadernetz</b> besteht aus <b>6 Rechtecken</b>, je zwei gleich. Gegenüberliegende Flächen haben im Netz <b>nie eine gemeinsame Kante</b>. Beim Spielwürfel ergeben gegenüberliegende Augen zusammen <b>7</b>.",
   "merksatz": "6 Flächen. Kein Würfelnetz: 4 Quadrate um eine Ecke oder 5+ in einer Reihe.",
   "beispiele": [
    "<svg viewBox='0 0 148 116' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='42' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='10' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='106' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='74' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/></svg>Kreuz – ein Würfelnetz",
    "<svg viewBox='0 0 116 148' style='width:100%;max-width:185px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='10' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='74' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='74' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='106' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/></svg>Treppe – auch ein Würfelnetz",
    "<svg viewBox='0 0 212 52' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='106' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='138' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='170' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/></svg>6 in einer Reihe – kein Würfelnetz"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "nzk5l1u_leicht_1",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Lässt sich das zu einem Würfel falten?",
     "answers": [
      "nein",
      "nur mit Kleber",
      "ja",
      "nur halb"
     ],
     "correct": 2,
     "explanation": "Das Kreuz ist ein Würfelnetz.",
     "topic": "netze",
     "grafik": "<svg viewBox='0 0 148 116' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='42' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='10' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='106' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='74' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/></svg>"
    },
    {
     "id": "nzk5l1u_leicht_2",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Lässt sich das zu einem Würfel falten?",
     "answers": [
      "ja",
      "ja, zweimal",
      "nein",
      "nur als Quader"
     ],
     "correct": 2,
     "explanation": "6 in einer Reihe überlappen.",
     "topic": "netze",
     "grafik": "<svg viewBox='0 0 212 52' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='106' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='138' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='170' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/></svg>"
    },
    {
     "id": "nzk5l1u_leicht_3",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Aus wie vielen Quadraten besteht ein Würfelnetz?",
     "answers": [
      "4",
      "6",
      "5",
      "8"
     ],
     "correct": 1,
     "explanation": "6 Flächen.",
     "topic": "netze"
    },
    {
     "id": "nzk5l1u_leicht_4",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele verschiedene Würfelnetze gibt es?",
     "answers": [
      "6",
      "8",
      "20",
      "11"
     ],
     "correct": 3,
     "explanation": "11.",
     "topic": "netze"
    },
    {
     "id": "nzk5l1u_leicht_5",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Lässt sich das zu einem Würfel falten?",
     "answers": [
      "ja",
      "nein, eine Fläche fehlt",
      "ja, mit Deckel",
      "nur als Pyramide"
     ],
     "correct": 1,
     "explanation": "Nur 5 Quadrate.",
     "topic": "netze",
     "grafik": "<svg viewBox='0 0 116 116' style='width:100%;max-width:185px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='42' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='10' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='74' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/></svg>"
    }
   ],
   "mittel": [
    {
     "id": "nzk5l1u_mittel_1",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Lässt sich das zu einem Würfel falten?",
     "answers": [
      "nein",
      "nur halb",
      "nur mit Schere",
      "ja"
     ],
     "correct": 3,
     "explanation": "Treppennetz.",
     "topic": "netze",
     "grafik": "<svg viewBox='0 0 116 148' style='width:100%;max-width:185px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='10' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='74' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='74' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='106' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/></svg>"
    },
    {
     "id": "nzk5l1u_mittel_2",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Lässt sich das zu einem Würfel falten?",
     "answers": [
      "ja",
      "nein",
      "ja, als Quader",
      "zweimal"
     ],
     "correct": 1,
     "explanation": "2×3-Block überlappt.",
     "topic": "netze",
     "grafik": "<svg viewBox='0 0 116 84' style='width:100%;max-width:185px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='10' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/></svg>"
    },
    {
     "id": "nzk5l1u_mittel_3",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Woraus besteht ein Quadernetz?",
     "answers": [
      "aus 6 Kreisen",
      "aus 4 Dreiecken",
      "aus 6 Rechtecken, je zwei gleich",
      "aus 8 Quadraten"
     ],
     "correct": 2,
     "explanation": "Quader.",
     "topic": "netze"
    },
    {
     "id": "nzk5l1u_mittel_4",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ergeben gegenüberliegende Augen beim Spielwürfel?",
     "answers": [
      "7",
      "6",
      "10",
      "12"
     ],
     "correct": 0,
     "explanation": "1+6, 2+5, 3+4.",
     "topic": "netze",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎲</text></svg>"
    },
    {
     "id": "nzk5l1u_mittel_5",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Haben gegenüberliegende Flächen im Netz eine gemeinsame Kante?",
     "answers": [
      "ja",
      "immer zwei",
      "manchmal drei",
      "nein"
     ],
     "correct": 3,
     "explanation": "Nie.",
     "topic": "netze"
    }
   ],
   "schwer": [
    {
     "id": "nzk5l1u_schwer_1",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Lässt sich das zu einem Würfel falten?",
     "answers": [
      "nein",
      "ja",
      "nur halb",
      "nur als Quader"
     ],
     "correct": 1,
     "explanation": "T-Form mit 4er-Reihe ist ein Würfelnetz.",
     "topic": "netze",
     "grafik": "<svg viewBox='0 0 116 148' style='width:100%;max-width:185px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='74' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='106' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/></svg>"
    },
    {
     "id": "nzk5l1u_schwer_2",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Beim Spielwürfel liegt oben die 2. Welche Zahl liegt unten?",
     "answers": [
      "4",
      "6",
      "3",
      "5"
     ],
     "correct": 3,
     "explanation": "2 + 5 = 7.",
     "topic": "netze",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎲</text></svg>"
    },
    {
     "id": "nzk5l1u_schwer_3",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Quader ist 4 cm lang, 3 cm breit, 2 cm hoch. Wie viele verschiedene Rechteckgrößen hat sein Netz?",
     "answers": [
      "6",
      "3",
      "2",
      "1"
     ],
     "correct": 1,
     "explanation": "4×3, 4×2, 3×2.",
     "topic": "netze"
    },
    {
     "id": "nzk5l1u_schwer_4",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Kanten hat ein Würfel?",
     "answers": [
      "8",
      "12",
      "6",
      "24"
     ],
     "correct": 1,
     "explanation": "12.",
     "topic": "netze"
    },
    {
     "id": "nzk5l1u_schwer_5",
     "category": "kurs_nz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum sind 5 Quadrate in einer Reihe kein Würfelnetz?",
     "answers": [
      "Es sind zu wenige.",
      "Beim Falten überlappen sich Flächen.",
      "Quadrate sind zu groß.",
      "Es ist doch eins."
     ],
     "correct": 1,
     "explanation": "Überlappung.",
     "topic": "netze"
    }
   ]
  },
  "test": [
   {
    "id": "nzk5l1_test_1",
    "category": "kurs_nz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Lässt sich das zu einem Würfel falten?",
    "answers": [
     "nein",
     "ja",
     "nur halb",
     "nur mit Kleber"
    ],
    "correct": 1,
    "explanation": "Kreuz.",
    "topic": "netze",
    "grafik": "<svg viewBox='0 0 148 116' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='42' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='10' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='106' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='74' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/></svg>"
   },
   {
    "id": "nzk5l1_test_2",
    "category": "kurs_nz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Lässt sich das zu einem Würfel falten?",
    "answers": [
     "ja",
     "zweimal",
     "nein",
     "als Quader"
    ],
    "correct": 2,
    "explanation": "Reihe.",
    "topic": "netze",
    "grafik": "<svg viewBox='0 0 212 52' style='width:100%;max-width:220px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='106' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='138' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='170' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/></svg>"
   },
   {
    "id": "nzk5l1_test_3",
    "category": "kurs_nz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Lässt sich das zu einem Würfel falten?",
    "answers": [
     "nein",
     "ja",
     "nur halb",
     "nur mit Schere"
    ],
    "correct": 1,
    "explanation": "Treppe.",
    "topic": "netze",
    "grafik": "<svg viewBox='0 0 116 148' style='width:100%;max-width:185px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='10' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='74' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='74' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='106' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/></svg>"
   },
   {
    "id": "nzk5l1_test_4",
    "category": "kurs_nz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Flächen hat ein Würfelnetz?",
    "answers": [
     "6",
     "5",
     "4",
     "8"
    ],
    "correct": 0,
    "explanation": "6.",
    "topic": "netze"
   },
   {
    "id": "nzk5l1_test_5",
    "category": "kurs_nz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Würfelnetze gibt es?",
    "answers": [
     "10",
     "12",
     "6",
     "11"
    ],
    "correct": 3,
    "explanation": "11.",
    "topic": "netze"
   },
   {
    "id": "nzk5l1_test_6",
    "category": "kurs_nz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Spielwürfel: oben 6, unten?",
    "answers": [
     "2",
     "5",
     "3",
     "1"
    ],
    "correct": 3,
    "explanation": "6 + 1 = 7.",
    "topic": "netze",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎲</text></svg>"
   },
   {
    "id": "nzk5l1_test_7",
    "category": "kurs_nz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Woraus besteht ein Quadernetz?",
    "answers": [
     "6 Rechtecke",
     "6 Kreise",
     "4 Dreiecke",
     "5 Quadrate"
    ],
    "correct": 0,
    "explanation": "Rechtecke.",
    "topic": "netze"
   },
   {
    "id": "nzk5l1_test_8",
    "category": "kurs_nz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Lässt sich das zu einem Würfel falten?",
    "answers": [
     "ja",
     "ja, als Quader",
     "nur halb",
     "nein"
    ],
    "correct": 3,
    "explanation": "Block überlappt.",
    "topic": "netze",
    "grafik": "<svg viewBox='0 0 116 84' style='width:100%;max-width:185px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='10' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='10' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='42' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/><rect x='74' y='42' width='32' height='32' fill='#fde68a' stroke='#92400e' stroke-width='2'/></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "nz_k5_l2",
  "kurs": "netze_k5",
  "order": 2,
  "icon": "🧊",
  "title": "Schrägbilder",
  "kurz": "Körper räumlich zeichnen",
  "erklaerung": {
   "intro": "Ein <b>Schrägbild</b> zeigt einen Körper räumlich. Die <b>Vorderfläche</b> zeichnest du in <b>wahrer Größe</b>. Die <b>nach hinten</b> laufenden Kanten zeichnest du <b>schräg (45°)</b> und <b>halb so lang</b> (auf Kästchenpapier: diagonal durch die Kästchen). <b>Verdeckte Kanten</b> werden <b>gestrichelt</b>.",
   "merksatz": "Vorne echt, nach hinten schräg und halb, verdeckt gestrichelt.",
   "beispiele": [
    "<svg viewBox='0 0 201 171' style='width:100%;max-width:201px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,151.0 150,151.0 150,61.0 30,61.0' fill='#bfdbfe' stroke='#1e3a8a' stroke-width='2.5'/><polygon points='30,61.0 150,61.0 171.0,40.0 51.0,40.0' fill='#93c5fd' stroke='#1e3a8a' stroke-width='2.5'/><polygon points='150,151.0 171.0,130.0 171.0,40.0 150,61.0' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2.5'/><line x1='30' y1='151.0' x2='51.0' y2='130.0' stroke='#1e3a8a' stroke-width='2' stroke-dasharray='6 5'/><line x1='51.0' y1='130.0' x2='171.0' y2='130.0' stroke='#1e3a8a' stroke-width='2' stroke-dasharray='6 5'/><line x1='51.0' y1='130.0' x2='51.0' y2='40.0' stroke='#1e3a8a' stroke-width='2' stroke-dasharray='6 5'/></svg>Quader 4 × 2 × 3",
    "Nach hinten: 2 cm → 1 cm schräg",
    "Verdeckte Kanten gestrichelt"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "nzk5l2u_leicht_1",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie zeichnet man verdeckte Kanten?",
     "answers": [
      "gestrichelt",
      "dick",
      "rot",
      "gar nicht"
     ],
     "correct": 0,
     "explanation": "Gestrichelt.",
     "topic": "netze",
     "grafik": "<svg viewBox='0 0 201 171' style='width:100%;max-width:201px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,151.0 150,151.0 150,61.0 30,61.0' fill='#bfdbfe' stroke='#1e3a8a' stroke-width='2.5'/><polygon points='30,61.0 150,61.0 171.0,40.0 51.0,40.0' fill='#93c5fd' stroke='#1e3a8a' stroke-width='2.5'/><polygon points='150,151.0 171.0,130.0 171.0,40.0 150,61.0' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2.5'/><line x1='30' y1='151.0' x2='51.0' y2='130.0' stroke='#1e3a8a' stroke-width='2' stroke-dasharray='6 5'/><line x1='51.0' y1='130.0' x2='171.0' y2='130.0' stroke='#1e3a8a' stroke-width='2' stroke-dasharray='6 5'/><line x1='51.0' y1='130.0' x2='51.0' y2='40.0' stroke='#1e3a8a' stroke-width='2' stroke-dasharray='6 5'/></svg>"
    },
    {
     "id": "nzk5l2u_leicht_2",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie zeichnet man die Vorderfläche?",
     "answers": [
      "halb so groß",
      "in wahrer Größe",
      "schräg",
      "gar nicht"
     ],
     "correct": 1,
     "explanation": "Wahre Größe.",
     "topic": "netze"
    },
    {
     "id": "nzk5l2u_leicht_3",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie lang zeichnet man Kanten nach hinten?",
     "answers": [
      "gleich lang",
      "doppelt so lang",
      "gar nicht",
      "halb so lang"
     ],
     "correct": 3,
     "explanation": "Halbiert.",
     "topic": "netze"
    },
    {
     "id": "nzk5l2u_leicht_4",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "In welchem Winkel zeichnet man Kanten nach hinten?",
     "answers": [
      "90°",
      "45°",
      "180°",
      "10°"
     ],
     "correct": 1,
     "explanation": "Schräg 45°.",
     "topic": "netze"
    },
    {
     "id": "nzk5l2u_leicht_5",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was zeigt ein Schrägbild?",
     "answers": [
      "ein Netz",
      "nur eine Fläche",
      "einen Körper räumlich",
      "eine Strecke"
     ],
     "correct": 2,
     "explanation": "Räumlich.",
     "topic": "netze"
    }
   ],
   "mittel": [
    {
     "id": "nzk5l2u_mittel_1",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Eine Kante nach hinten ist 6 cm lang. Wie lang zeichnet man sie?",
     "answers": [
      "6 cm",
      "12 cm",
      "2 cm",
      "3 cm"
     ],
     "correct": 3,
     "explanation": "Halbiert.",
     "topic": "netze"
    },
    {
     "id": "nzk5l2u_mittel_2",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Kanten sind beim Quader-Schrägbild meist gestrichelt?",
     "answers": [
      "1",
      "6",
      "3",
      "12"
     ],
     "correct": 2,
     "explanation": "Drei verdeckte.",
     "topic": "netze",
     "grafik": "<svg viewBox='0 0 201 171' style='width:100%;max-width:201px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,151.0 150,151.0 150,61.0 30,61.0' fill='#bfdbfe' stroke='#1e3a8a' stroke-width='2.5'/><polygon points='30,61.0 150,61.0 171.0,40.0 51.0,40.0' fill='#93c5fd' stroke='#1e3a8a' stroke-width='2.5'/><polygon points='150,151.0 171.0,130.0 171.0,40.0 150,61.0' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2.5'/><line x1='30' y1='151.0' x2='51.0' y2='130.0' stroke='#1e3a8a' stroke-width='2' stroke-dasharray='6 5'/><line x1='51.0' y1='130.0' x2='171.0' y2='130.0' stroke='#1e3a8a' stroke-width='2' stroke-dasharray='6 5'/><line x1='51.0' y1='130.0' x2='51.0' y2='40.0' stroke='#1e3a8a' stroke-width='2' stroke-dasharray='6 5'/></svg>"
    },
    {
     "id": "nzk5l2u_mittel_3",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie zeichnet man auf Kästchenpapier eine Kante nach hinten?",
     "answers": [
      "diagonal durch die Kästchen",
      "waagerecht",
      "senkrecht",
      "als Bogen"
     ],
     "correct": 0,
     "explanation": "Diagonal.",
     "topic": "netze"
    },
    {
     "id": "nzk5l2u_mittel_4",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Ein Würfel hat 4 cm Kante. Wie lang zeichnest du die Kanten nach hinten?",
     "answers": [
      "4 cm",
      "8 cm",
      "2 cm",
      "1 cm"
     ],
     "correct": 2,
     "explanation": "Halbiert.",
     "topic": "netze"
    },
    {
     "id": "nzk5l2u_mittel_5",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Kanten zeichnet man in wahrer Länge?",
     "answers": [
      "die nach hinten",
      "die verdeckten",
      "die der Vorderfläche",
      "keine"
     ],
     "correct": 2,
     "explanation": "Vorderfläche.",
     "topic": "netze"
    }
   ],
   "schwer": [
    {
     "id": "nzk5l2u_schwer_1",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum zeichnet man Kanten nach hinten verkürzt?",
     "answers": [
      "um Platz zu sparen",
      "weil es so Regel ist ohne Grund",
      "damit es kleiner wird",
      "damit der Körper räumlich wirkt"
     ],
     "correct": 3,
     "explanation": "Räumliche Wirkung.",
     "topic": "netze"
    },
    {
     "id": "nzk5l2u_schwer_2",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Quader 5 × 4 × 2 (Länge × Tiefe × Höhe). Wie lang zeichnet man die Tiefe?",
     "answers": [
      "4 cm",
      "5 cm",
      "2 cm",
      "1 cm"
     ],
     "correct": 2,
     "explanation": "4 : 2.",
     "topic": "netze"
    },
    {
     "id": "nzk5l2u_schwer_3",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Ecken sieht man beim Quader-Schrägbild insgesamt?",
     "answers": [
      "6",
      "8",
      "4",
      "12"
     ],
     "correct": 1,
     "explanation": "Alle 8 (eine verdeckt).",
     "topic": "netze"
    },
    {
     "id": "nzk5l2u_schwer_4",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Ecken sind beim Quader-Schrägbild verdeckt?",
     "answers": [
      "1",
      "0",
      "2",
      "4"
     ],
     "correct": 0,
     "explanation": "Eine hinten unten.",
     "topic": "netze"
    },
    {
     "id": "nzk5l2u_schwer_5",
     "category": "kurs_nz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist der Unterschied zwischen Netz und Schrägbild?",
     "answers": [
      "kein Unterschied",
      "Netz ist aufgeklappt, Schrägbild ist räumlich",
      "Netz ist räumlich",
      "Schrägbild ist flach aufgeklappt"
     ],
     "correct": 1,
     "explanation": "Unterschied.",
     "topic": "netze"
    }
   ]
  },
  "test": [
   {
    "id": "nzk5l2_test_1",
    "category": "kurs_nz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Verdeckte Kanten zeichnet man …",
    "answers": [
     "dick",
     "gestrichelt",
     "farbig",
     "gar nicht"
    ],
    "correct": 1,
    "explanation": "Gestrichelt.",
    "topic": "netze"
   },
   {
    "id": "nzk5l2_test_2",
    "category": "kurs_nz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Kanten nach hinten zeichnet man …",
    "answers": [
     "gerade und doppelt",
     "gar nicht",
     "schräg und halb so lang",
     "senkrecht"
    ],
    "correct": 2,
    "explanation": "Schräg, halb.",
    "topic": "netze"
   },
   {
    "id": "nzk5l2_test_3",
    "category": "kurs_nz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Kante nach hinten 8 cm → gezeichnet?",
    "answers": [
     "8 cm",
     "16 cm",
     "4 cm",
     "2 cm"
    ],
    "correct": 2,
    "explanation": "Halbiert.",
    "topic": "netze"
   },
   {
    "id": "nzk5l2_test_4",
    "category": "kurs_nz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Vorderfläche wird gezeichnet …",
    "answers": [
     "halb",
     "in wahrer Größe",
     "doppelt",
     "gestrichelt"
    ],
    "correct": 1,
    "explanation": "Wahr.",
    "topic": "netze"
   },
   {
    "id": "nzk5l2_test_5",
    "category": "kurs_nz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Winkel für Kanten nach hinten?",
    "answers": [
     "90°",
     "30°",
     "45°",
     "180°"
    ],
    "correct": 2,
    "explanation": "45°.",
    "topic": "netze"
   },
   {
    "id": "nzk5l2_test_6",
    "category": "kurs_nz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was zeigt ein Schrägbild?",
    "answers": [
     "einen Körper räumlich",
     "ein Netz",
     "eine Fläche",
     "einen Winkel"
    ],
    "correct": 0,
    "explanation": "Räumlich.",
    "topic": "netze",
    "grafik": "<svg viewBox='0 0 171 171' style='width:100%;max-width:171px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,151.0 120,151.0 120,61.0 30,61.0' fill='#bfdbfe' stroke='#1e3a8a' stroke-width='2.5'/><polygon points='30,61.0 120,61.0 141.0,40.0 51.0,40.0' fill='#93c5fd' stroke='#1e3a8a' stroke-width='2.5'/><polygon points='120,151.0 141.0,130.0 141.0,40.0 120,61.0' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2.5'/><line x1='30' y1='151.0' x2='51.0' y2='130.0' stroke='#1e3a8a' stroke-width='2' stroke-dasharray='6 5'/><line x1='51.0' y1='130.0' x2='141.0' y2='130.0' stroke='#1e3a8a' stroke-width='2' stroke-dasharray='6 5'/><line x1='51.0' y1='130.0' x2='51.0' y2='40.0' stroke='#1e3a8a' stroke-width='2' stroke-dasharray='6 5'/></svg>"
   },
   {
    "id": "nzk5l2_test_7",
    "category": "kurs_nz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Kanten sind meist gestrichelt?",
    "answers": [
     "1",
     "3",
     "4",
     "6"
    ],
    "correct": 1,
    "explanation": "Drei.",
    "topic": "netze"
   },
   {
    "id": "nzk5l2_test_8",
    "category": "kurs_nz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Würfel 6 cm: Kanten nach hinten gezeichnet?",
    "answers": [
     "6 cm",
     "3 cm",
     "12 cm",
     "2 cm"
    ],
    "correct": 1,
    "explanation": "Halb.",
    "topic": "netze"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "pt_k5_l1",
  "kurs": "potenzen_k5",
  "order": 1,
  "icon": "²",
  "title": "Quadratzahlen und Potenzen",
  "kurz": "3² = 3 · 3, 2³ = 2 · 2 · 2",
  "erklaerung": {
   "intro": "Multipliziert man eine Zahl mit sich selbst, entsteht eine <b>Quadratzahl</b>: 5 · 5 = <b>5² = 25</b> (fünf hoch zwei). Allgemein ist eine <b>Potenz</b> eine verkürzte Malaufgabe: <b>2³ = 2 · 2 · 2 = 8</b>. Die untere Zahl heißt <b>Basis</b>, die obere <b>Exponent</b> (Hochzahl) – sie sagt, wie oft die Basis mit sich selbst malgenommen wird.",
   "merksatz": "Basis hoch Exponent: Exponent = wie oft malnehmen.",
   "beispiele": [
    "5² = 5 · 5 = 25",
    "2³ = 2 · 2 · 2 = 8",
    "Quadratzahlen: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "ptk5l1u_leicht_1",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist 4²?",
     "answers": [
      "8",
      "6",
      "42",
      "16"
     ],
     "correct": 3,
     "explanation": "4 · 4.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l1u_leicht_2",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist 6²?",
     "answers": [
      "36",
      "12",
      "62",
      "8"
     ],
     "correct": 0,
     "explanation": "6 · 6.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l1u_leicht_3",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist 10²?",
     "answers": [
      "20",
      "1000",
      "100",
      "102"
     ],
     "correct": 2,
     "explanation": "10 · 10.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l1u_leicht_4",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man 7 · 7 als Potenz?",
     "answers": [
      "2⁷",
      "7²",
      "7 · 2",
      "14"
     ],
     "correct": 1,
     "explanation": "7 hoch 2.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l1u_leicht_5",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Zahl ist eine Quadratzahl?",
     "answers": [
      "50",
      "49",
      "48",
      "20"
     ],
     "correct": 1,
     "explanation": "7².",
     "topic": "potenzen"
    }
   ],
   "mittel": [
    {
     "id": "ptk5l1u_mittel_1",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist 2³?",
     "answers": [
      "8",
      "6",
      "9",
      "5"
     ],
     "correct": 0,
     "explanation": "2 · 2 · 2.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l1u_mittel_2",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist 3³?",
     "answers": [
      "9",
      "6",
      "33",
      "27"
     ],
     "correct": 3,
     "explanation": "3 · 3 · 3.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l1u_mittel_3",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie heißt die Hochzahl?",
     "answers": [
      "Exponent",
      "Basis",
      "Summand",
      "Faktor"
     ],
     "correct": 0,
     "explanation": "Exponent.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l1u_mittel_4",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist 12²?",
     "answers": [
      "144",
      "24",
      "122",
      "124"
     ],
     "correct": 0,
     "explanation": "12 · 12.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l1u_mittel_5",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man 5 · 5 · 5 · 5 als Potenz?",
     "answers": [
      "4⁵",
      "5 · 4",
      "5⁴",
      "20"
     ],
     "correct": 2,
     "explanation": "Vier Faktoren.",
     "topic": "potenzen"
    }
   ],
   "schwer": [
    {
     "id": "ptk5l1u_schwer_1",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist 2⁵?",
     "answers": [
      "10",
      "25",
      "16",
      "32"
     ],
     "correct": 3,
     "explanation": "2·2·2·2·2.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l1u_schwer_2",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist größer: 2⁴ oder 4²?",
     "answers": [
      "gleich groß",
      "2⁴",
      "4²",
      "kann man nicht sagen"
     ],
     "correct": 0,
     "explanation": "Beide 16.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l1u_schwer_3",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist 15²?",
     "answers": [
      "30",
      "225",
      "215",
      "250"
     ],
     "correct": 1,
     "explanation": "15 · 15.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l1u_schwer_4",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist 1¹⁰⁰?",
     "answers": [
      "100",
      "0",
      "101",
      "1"
     ],
     "correct": 3,
     "explanation": "1 mal 1 bleibt 1.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l1u_schwer_5",
     "category": "kurs_pt_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl ist KEINE Quadratzahl?",
     "answers": [
      "60",
      "64",
      "81",
      "121"
     ],
     "correct": 0,
     "explanation": "Zwischen 49 und 64.",
     "topic": "potenzen"
    }
   ]
  },
  "test": [
   {
    "id": "ptk5l1_test_1",
    "category": "kurs_pt_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist 3²?",
    "answers": [
     "6",
     "5",
     "32",
     "9"
    ],
    "correct": 3,
    "explanation": "3 · 3.",
    "topic": "potenzen"
   },
   {
    "id": "ptk5l1_test_2",
    "category": "kurs_pt_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist 8²?",
    "answers": [
     "16",
     "64",
     "82",
     "56"
    ],
    "correct": 1,
    "explanation": "8 · 8.",
    "topic": "potenzen"
   },
   {
    "id": "ptk5l1_test_3",
    "category": "kurs_pt_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist 2⁴?",
    "answers": [
     "16",
     "8",
     "6",
     "24"
    ],
    "correct": 0,
    "explanation": "2·2·2·2.",
    "topic": "potenzen"
   },
   {
    "id": "ptk5l1_test_4",
    "category": "kurs_pt_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie heißt die untere Zahl?",
    "answers": [
     "Exponent",
     "Summe",
     "Basis",
     "Rest"
    ],
    "correct": 2,
    "explanation": "Basis.",
    "topic": "potenzen"
   },
   {
    "id": "ptk5l1_test_5",
    "category": "kurs_pt_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist 11²?",
    "answers": [
     "121",
     "22",
     "111",
     "112"
    ],
    "correct": 0,
    "explanation": "11 · 11.",
    "topic": "potenzen"
   },
   {
    "id": "ptk5l1_test_6",
    "category": "kurs_pt_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man 3 · 3 · 3 · 3?",
    "answers": [
     "4³",
     "12",
     "3⁴",
     "3 · 4"
    ],
    "correct": 2,
    "explanation": "Vier Dreien.",
    "topic": "potenzen"
   },
   {
    "id": "ptk5l1_test_7",
    "category": "kurs_pt_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche ist eine Quadratzahl?",
    "answers": [
     "80",
     "82",
     "81",
     "18"
    ],
    "correct": 2,
    "explanation": "9².",
    "topic": "potenzen"
   },
   {
    "id": "ptk5l1_test_8",
    "category": "kurs_pt_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist 4³?",
    "answers": [
     "12",
     "64",
     "16",
     "43"
    ],
    "correct": 1,
    "explanation": "4·4·4.",
    "topic": "potenzen"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "pt_k5_l2",
  "kurs": "potenzen_k5",
  "order": 2,
  "icon": "🔟",
  "title": "Zehnerpotenzen",
  "kurz": "10³ = 1000 – große Zahlen kurz schreiben",
  "erklaerung": {
   "intro": "<b>Zehnerpotenzen</b>: 10¹ = 10, 10² = 100, 10³ = <b>1 000</b> (Tausend), 10⁶ = <b>1 000 000</b> (Million), 10⁹ = Milliarde. Der <b>Exponent</b> sagt dir, <b>wie viele Nullen</b> die Zahl hat. Große Zahlen schreibt man so kürzer: 5 000 000 = <b>5 · 10⁶</b>.",
   "merksatz": "Exponent = Anzahl der Nullen.",
   "beispiele": [
    "10³ = 1 000",
    "10⁶ = 1 000 000 (Million)",
    "3 000 = 3 · 10³"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "ptk5l2u_leicht_1",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist 10²?",
     "answers": [
      "20",
      "1000",
      "100",
      "12"
     ],
     "correct": 2,
     "explanation": "Zwei Nullen.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l2u_leicht_2",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist 10³?",
     "answers": [
      "30",
      "1 000",
      "100",
      "10 000"
     ],
     "correct": 1,
     "explanation": "Drei Nullen.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l2u_leicht_3",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele Nullen hat 10⁵?",
     "answers": [
      "4",
      "6",
      "10",
      "5"
     ],
     "correct": 3,
     "explanation": "Exponent.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l2u_leicht_4",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man 10 000 als Zehnerpotenz?",
     "answers": [
      "10⁴",
      "10³",
      "10⁵",
      "4¹⁰"
     ],
     "correct": 0,
     "explanation": "Vier Nullen.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l2u_leicht_5",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist 10⁶?",
     "answers": [
      "1 Tausend",
      "1 Million",
      "1 Milliarde",
      "60"
     ],
     "correct": 1,
     "explanation": "Sechs Nullen.",
     "topic": "potenzen"
    }
   ],
   "mittel": [
    {
     "id": "ptk5l2u_mittel_1",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man 3 000 mit Zehnerpotenz?",
     "answers": [
      "3 · 10²",
      "30 · 10³",
      "3 · 10³",
      "3³"
     ],
     "correct": 2,
     "explanation": "3 · 1000.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l2u_mittel_2",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist 7 · 10⁴?",
     "answers": [
      "7 000",
      "70 000",
      "700 000",
      "28"
     ],
     "correct": 1,
     "explanation": "7 · 10 000.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l2u_mittel_3",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist 10⁹?",
     "answers": [
      "1 Million",
      "1 Milliarde",
      "1 Billion",
      "90"
     ],
     "correct": 1,
     "explanation": "Neun Nullen.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l2u_mittel_4",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man 5 000 000?",
     "answers": [
      "5 · 10⁶",
      "5 · 10⁵",
      "5 · 10⁷",
      "50 · 10⁶"
     ],
     "correct": 0,
     "explanation": "Million.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l2u_mittel_5",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist 10¹?",
     "answers": [
      "10",
      "1",
      "0",
      "100"
     ],
     "correct": 0,
     "explanation": "Eine Null.",
     "topic": "potenzen"
    }
   ],
   "schwer": [
    {
     "id": "ptk5l2u_schwer_1",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie schreibt man 250 000?",
     "answers": [
      "25 · 10³",
      "25 · 10⁵",
      "2,5 · 10³",
      "25 · 10⁴"
     ],
     "correct": 3,
     "explanation": "25 · 10 000.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l2u_schwer_2",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist 10³ · 10²?",
     "answers": [
      "100 000 = 10⁵",
      "10⁶",
      "1 000",
      "10⁸"
     ],
     "correct": 0,
     "explanation": "1000 · 100.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l2u_schwer_3",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Die Erde ist etwa 150 000 000 km von der Sonne entfernt. Als Zehnerpotenz?",
     "answers": [
      "15 · 10⁷ km",
      "15 · 10⁶ km",
      "15 · 10⁸ km",
      "150 · 10⁷ km"
     ],
     "correct": 0,
     "explanation": "15 mit 7 Nullen.",
     "topic": "potenzen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
    },
    {
     "id": "ptk5l2u_schwer_4",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist 10⁰?",
     "answers": [
      "0",
      "10",
      "100",
      "1"
     ],
     "correct": 3,
     "explanation": "Keine Null.",
     "topic": "potenzen"
    },
    {
     "id": "ptk5l2u_schwer_5",
     "category": "kurs_pt_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl ist größer: 9 · 10⁴ oder 1 · 10⁵?",
     "answers": [
      "9 · 10⁴",
      "gleich",
      "1 · 10⁵",
      "kann man nicht sagen"
     ],
     "correct": 2,
     "explanation": "100 000 > 90 000.",
     "topic": "potenzen"
    }
   ]
  },
  "test": [
   {
    "id": "ptk5l2_test_1",
    "category": "kurs_pt_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist 10⁴?",
    "answers": [
     "1 000",
     "40",
     "10 000",
     "100 000"
    ],
    "correct": 2,
    "explanation": "Vier Nullen.",
    "topic": "potenzen"
   },
   {
    "id": "ptk5l2_test_2",
    "category": "kurs_pt_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Nullen hat 10⁷?",
    "answers": [
     "6",
     "8",
     "7",
     "70"
    ],
    "correct": 2,
    "explanation": "7.",
    "topic": "potenzen"
   },
   {
    "id": "ptk5l2_test_3",
    "category": "kurs_pt_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist 4 · 10³?",
    "answers": [
     "400",
     "40 000",
     "4 000",
     "12"
    ],
    "correct": 2,
    "explanation": "4 · 1000.",
    "topic": "potenzen"
   },
   {
    "id": "ptk5l2_test_4",
    "category": "kurs_pt_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "1 Million als Zehnerpotenz?",
    "answers": [
     "10⁵",
     "10⁷",
     "10⁶",
     "10⁹"
    ],
    "correct": 2,
    "explanation": "6 Nullen.",
    "topic": "potenzen"
   },
   {
    "id": "ptk5l2_test_5",
    "category": "kurs_pt_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man 800 000?",
    "answers": [
     "8 · 10⁴",
     "8 · 10⁶",
     "80 · 10⁵",
     "8 · 10⁵"
    ],
    "correct": 3,
    "explanation": "8 · 100 000.",
    "topic": "potenzen"
   },
   {
    "id": "ptk5l2_test_6",
    "category": "kurs_pt_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist 10²?",
    "answers": [
     "20",
     "100",
     "1000",
     "102"
    ],
    "correct": 1,
    "explanation": "100.",
    "topic": "potenzen"
   },
   {
    "id": "ptk5l2_test_7",
    "category": "kurs_pt_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "1 Milliarde als Zehnerpotenz?",
    "answers": [
     "10⁹",
     "10⁶",
     "10¹²",
     "10⁸"
    ],
    "correct": 0,
    "explanation": "9 Nullen.",
    "topic": "potenzen"
   },
   {
    "id": "ptk5l2_test_8",
    "category": "kurs_pt_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was sagt der Exponent bei Zehnerpotenzen?",
    "answers": [
     "die Ziffer vorne",
     "die Summe",
     "die Anzahl der Nullen",
     "nichts"
    ],
    "correct": 2,
    "explanation": "Nullen.",
    "topic": "potenzen"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "tr_k5_l1",
  "kurs": "terme_k5",
  "order": 1,
  "icon": "🧮",
  "title": "Klammer vor Punkt vor Strich",
  "kurz": "Die Reihenfolge beim Rechnen",
  "erklaerung": {
   "intro": "Ein <b>Term</b> ist ein Rechenausdruck wie 3 + 4 · 5. Es gilt: <b>Klammern zuerst</b>, dann <b>Punktrechnung</b> (· und :), dann <b>Strichrechnung</b> (+ und −). Sonst von <b>links nach rechts</b>. 3 + 4 · 5 = 3 + 20 = <b>23</b>, aber (3 + 4) · 5 = 7 · 5 = <b>35</b>.",
   "merksatz": "Klammer vor Punkt vor Strich – sonst von links nach rechts.",
   "beispiele": [
    "3 + 4 · 5 = 3 + 20 = 23",
    "(3 + 4) · 5 = 7 · 5 = 35",
    "20 − 8 − 2 = 10 (von links)"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "trk5l1u_leicht_1",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "3 + 4 · 5 =",
     "answers": [
      "35",
      "27",
      "23",
      "12"
     ],
     "correct": 2,
     "explanation": "Punkt vor Strich.",
     "topic": "terme"
    },
    {
     "id": "trk5l1u_leicht_2",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "(3 + 4) · 5 =",
     "answers": [
      "23",
      "12",
      "27",
      "35"
     ],
     "correct": 3,
     "explanation": "Klammer zuerst.",
     "topic": "terme"
    },
    {
     "id": "trk5l1u_leicht_3",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "10 − 2 · 3 =",
     "answers": [
      "4",
      "24",
      "5",
      "8"
     ],
     "correct": 0,
     "explanation": "6 abziehen.",
     "topic": "terme"
    },
    {
     "id": "trk5l1u_leicht_4",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was rechnet man zuerst?",
     "answers": [
      "Plus",
      "Minus",
      "die Klammer",
      "von rechts"
     ],
     "correct": 2,
     "explanation": "Klammer.",
     "topic": "terme"
    },
    {
     "id": "trk5l1u_leicht_5",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "8 : 2 + 2 =",
     "answers": [
      "2",
      "5",
      "8",
      "6"
     ],
     "correct": 3,
     "explanation": "4 + 2.",
     "topic": "terme"
    }
   ],
   "mittel": [
    {
     "id": "trk5l1u_mittel_1",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "20 − 8 − 2 =",
     "answers": [
      "14",
      "6",
      "10",
      "12"
     ],
     "correct": 2,
     "explanation": "Von links.",
     "topic": "terme"
    },
    {
     "id": "trk5l1u_mittel_2",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "2 · (6 + 4) =",
     "answers": [
      "16",
      "14",
      "20",
      "12"
     ],
     "correct": 2,
     "explanation": "2 · 10.",
     "topic": "terme"
    },
    {
     "id": "trk5l1u_mittel_3",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "18 : 3 · 2 =",
     "answers": [
      "3",
      "12",
      "6",
      "9"
     ],
     "correct": 1,
     "explanation": "Von links: 6 · 2.",
     "topic": "terme"
    },
    {
     "id": "trk5l1u_mittel_4",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "5 + 3 · 4 − 2 =",
     "answers": [
      "15",
      "30",
      "22",
      "17"
     ],
     "correct": 0,
     "explanation": "5 + 12 − 2.",
     "topic": "terme"
    },
    {
     "id": "trk5l1u_mittel_5",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "(12 − 4) : 2 =",
     "answers": [
      "10",
      "8",
      "4",
      "6"
     ],
     "correct": 2,
     "explanation": "8 : 2.",
     "topic": "terme"
    }
   ],
   "schwer": [
    {
     "id": "trk5l1u_schwer_1",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "3 · (8 − 2 · 3) =",
     "answers": [
      "18",
      "6",
      "12",
      "0"
     ],
     "correct": 1,
     "explanation": "8 − 6 = 2, · 3.",
     "topic": "terme"
    },
    {
     "id": "trk5l1u_schwer_2",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "100 − (20 + 5 · 6) =",
     "answers": [
      "35",
      "70",
      "50",
      "45"
     ],
     "correct": 2,
     "explanation": "20 + 30 = 50.",
     "topic": "terme"
    },
    {
     "id": "trk5l1u_schwer_3",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "48 : (2 + 6) · 3 =",
     "answers": [
      "2",
      "6",
      "18",
      "24"
     ],
     "correct": 2,
     "explanation": "48 : 8 = 6, · 3.",
     "topic": "terme"
    },
    {
     "id": "trk5l1u_schwer_4",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Setze Klammern so, dass 2 + 3 · 4 = 20 ergibt.",
     "answers": [
      "(2 + 3) · 4",
      "2 + (3 · 4)",
      "2 · (3 + 4)",
      "keine Klammer"
     ],
     "correct": 0,
     "explanation": "5 · 4.",
     "topic": "terme"
    },
    {
     "id": "trk5l1u_schwer_5",
     "category": "kurs_tr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "7 + 3 · (10 − 6) : 2 =",
     "answers": [
      "20",
      "11",
      "13",
      "14"
     ],
     "correct": 2,
     "explanation": "4 · 3 = 12, : 2 = 6, + 7.",
     "topic": "terme"
    }
   ]
  },
  "test": [
   {
    "id": "trk5l1_test_1",
    "category": "kurs_tr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "6 + 2 · 3 =",
    "answers": [
     "12",
     "24",
     "11",
     "18"
    ],
    "correct": 0,
    "explanation": "6 + 6.",
    "topic": "terme"
   },
   {
    "id": "trk5l1_test_2",
    "category": "kurs_tr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "(6 + 2) · 3 =",
    "answers": [
     "24",
     "12",
     "11",
     "36"
    ],
    "correct": 0,
    "explanation": "8 · 3.",
    "topic": "terme"
   },
   {
    "id": "trk5l1_test_3",
    "category": "kurs_tr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "20 − 12 : 4 =",
    "answers": [
     "2",
     "8",
     "17",
     "14"
    ],
    "correct": 2,
    "explanation": "20 − 3.",
    "topic": "terme"
   },
   {
    "id": "trk5l1_test_4",
    "category": "kurs_tr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Punkt vor …",
    "answers": [
     "Klammer",
     "Komma",
     "Gleich",
     "Strich"
    ],
    "correct": 3,
    "explanation": "Strich.",
    "topic": "terme"
   },
   {
    "id": "trk5l1_test_5",
    "category": "kurs_tr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "30 : 5 : 2 =",
    "answers": [
     "12",
     "6",
     "3",
     "1"
    ],
    "correct": 2,
    "explanation": "Von links.",
    "topic": "terme"
   },
   {
    "id": "trk5l1_test_6",
    "category": "kurs_tr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "4 · (5 − 3) + 1 =",
    "answers": [
     "9",
     "8",
     "18",
     "21"
    ],
    "correct": 0,
    "explanation": "4 · 2 + 1.",
    "topic": "terme"
   },
   {
    "id": "trk5l1_test_7",
    "category": "kurs_tr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "50 − 5 · 8 =",
    "answers": [
     "360",
     "40",
     "10",
     "15"
    ],
    "correct": 2,
    "explanation": "50 − 40.",
    "topic": "terme"
   },
   {
    "id": "trk5l1_test_8",
    "category": "kurs_tr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "(9 + 6) : (8 − 3) =",
    "answers": [
     "5",
     "3",
     "15",
     "9"
    ],
    "correct": 1,
    "explanation": "15 : 5.",
    "topic": "terme"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "tr_k5_l2",
  "kurs": "terme_k5",
  "order": 2,
  "icon": "✏️",
  "title": "Terme aufstellen",
  "kurz": "Vom Text zur Rechnung",
  "erklaerung": {
   "intro": "Aus Textaufgaben machst du <b>Terme</b>: „Addiere 5 zum Produkt aus 3 und 4“ → <b>3 · 4 + 5</b>. Wichtige Wörter: <b>Summe</b> (+), <b>Differenz</b> (−), <b>Produkt</b> (·), <b>Quotient</b> (:). Wenn eine Summe malgenommen wird, brauchst du <b>Klammern</b>: „Das Doppelte der Summe aus 4 und 6“ → <b>2 · (4 + 6)</b>.",
   "merksatz": "Summe +, Differenz −, Produkt ·, Quotient :. Klammern, wenn ein Ergebnis weiterverrechnet wird.",
   "beispiele": [
    "Summe aus 3 und 7 → 3 + 7",
    "Produkt aus 5 und 6 → 5 · 6",
    "Das Doppelte der Summe aus 4 und 6 → 2 · (4 + 6)"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "trk5l2u_leicht_1",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist das Produkt aus 6 und 7?",
     "answers": [
      "13",
      "1",
      "67",
      "42"
     ],
     "correct": 3,
     "explanation": "6 · 7.",
     "topic": "terme"
    },
    {
     "id": "trk5l2u_leicht_2",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist die Summe aus 15 und 9?",
     "answers": [
      "24",
      "6",
      "135",
      "159"
     ],
     "correct": 0,
     "explanation": "15 + 9.",
     "topic": "terme"
    },
    {
     "id": "trk5l2u_leicht_3",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist die Differenz aus 20 und 8?",
     "answers": [
      "28",
      "160",
      "2,5",
      "12"
     ],
     "correct": 3,
     "explanation": "20 − 8.",
     "topic": "terme"
    },
    {
     "id": "trk5l2u_leicht_4",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist der Quotient aus 36 und 4?",
     "answers": [
      "40",
      "32",
      "9",
      "144"
     ],
     "correct": 2,
     "explanation": "36 : 4.",
     "topic": "terme"
    },
    {
     "id": "trk5l2u_leicht_5",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Rechenzeichen gehört zum Produkt?",
     "answers": [
      "·",
      "+",
      "−",
      ":"
     ],
     "correct": 0,
     "explanation": "Mal.",
     "topic": "terme"
    }
   ],
   "mittel": [
    {
     "id": "trk5l2u_mittel_1",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Term passt? 'Addiere 5 zum Produkt aus 3 und 4.'",
     "answers": [
      "(3 + 4) · 5",
      "3 + 4 · 5",
      "3 · 4 + 5",
      "5 · 3 + 4"
     ],
     "correct": 2,
     "explanation": "Produkt + 5.",
     "topic": "terme"
    },
    {
     "id": "trk5l2u_mittel_2",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Term passt? 'Das Doppelte der Summe aus 4 und 6.'",
     "answers": [
      "2 · 4 + 6",
      "4 + 6 · 2",
      "2 · (4 + 6)",
      "2 + 4 + 6"
     ],
     "correct": 2,
     "explanation": "Klammer.",
     "topic": "terme"
    },
    {
     "id": "trk5l2u_mittel_3",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Term passt? 'Subtrahiere 7 von 30.'",
     "answers": [
      "7 − 30",
      "30 + 7",
      "7 · 30",
      "30 − 7"
     ],
     "correct": 3,
     "explanation": "Von 30 weg.",
     "topic": "terme"
    },
    {
     "id": "trk5l2u_mittel_4",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Ein Heft kostet 2 €, ein Stift 1 €. Tim kauft 3 Hefte und 2 Stifte. Term?",
     "answers": [
      "3 · 2 + 2 · 1",
      "(3 + 2) · 3",
      "3 + 2 · 2 + 1",
      "2 + 1 · 5"
     ],
     "correct": 0,
     "explanation": "8 €.",
     "topic": "terme",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📓</text></svg>"
    },
    {
     "id": "trk5l2u_mittel_5",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viel ergibt '2 · (4 + 6)'?",
     "answers": [
      "14",
      "16",
      "20",
      "12"
     ],
     "correct": 2,
     "explanation": "2 · 10.",
     "topic": "terme"
    }
   ],
   "schwer": [
    {
     "id": "trk5l2u_schwer_1",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Term passt? 'Teile die Summe aus 18 und 12 durch 5.'",
     "answers": [
      "(18 + 12) : 5",
      "18 + 12 : 5",
      "18 : 5 + 12",
      "5 : (18 + 12)"
     ],
     "correct": 0,
     "explanation": "Klammer.",
     "topic": "terme"
    },
    {
     "id": "trk5l2u_schwer_2",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Kinobesuch: 4 Karten zu 8 €, dazu 2 Popcorn zu 5 €. Term?",
     "answers": [
      "4 · 8 + 2 · 5",
      "(4 + 2) · (8 + 5)",
      "4 + 8 · 2 + 5",
      "4 · (8 + 2) · 5"
     ],
     "correct": 0,
     "explanation": "42 €.",
     "topic": "terme",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍿</text></svg>"
    },
    {
     "id": "trk5l2u_schwer_3",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Text passt zu (10 − 4) · 3?",
     "answers": [
      "die Differenz aus 10 und dem Dreifachen von 4",
      "die Summe aus 10, 4 und 3",
      "das Produkt aus 10 und 4 minus 3",
      "das Dreifache der Differenz aus 10 und 4"
     ],
     "correct": 3,
     "explanation": "Klammer zuerst.",
     "topic": "terme"
    },
    {
     "id": "trk5l2u_schwer_4",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Lena hat 50 €. Sie kauft 3 Bücher zu je 12 €. Was bleibt? Term?",
     "answers": [
      "(50 − 3) · 12",
      "50 − 3 + 12",
      "3 · 12 − 50",
      "50 − 3 · 12"
     ],
     "correct": 3,
     "explanation": "14 €.",
     "topic": "terme",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📚</text></svg>"
    },
    {
     "id": "trk5l2u_schwer_5",
     "category": "kurs_tr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viel ergibt (18 + 12) : 5?",
     "answers": [
      "20,4",
      "30",
      "6",
      "3"
     ],
     "correct": 2,
     "explanation": "30 : 5.",
     "topic": "terme"
    }
   ]
  },
  "test": [
   {
    "id": "trk5l2_test_1",
    "category": "kurs_tr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Produkt aus 8 und 9?",
    "answers": [
     "17",
     "1",
     "72",
     "89"
    ],
    "correct": 2,
    "explanation": "8 · 9.",
    "topic": "terme"
   },
   {
    "id": "trk5l2_test_2",
    "category": "kurs_tr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Summe aus 27 und 13?",
    "answers": [
     "14",
     "351",
     "40",
     "30"
    ],
    "correct": 2,
    "explanation": "27 + 13.",
    "topic": "terme"
   },
   {
    "id": "trk5l2_test_3",
    "category": "kurs_tr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Quotient aus 56 und 7?",
    "answers": [
     "8",
     "63",
     "49",
     "392"
    ],
    "correct": 0,
    "explanation": "56 : 7.",
    "topic": "terme"
   },
   {
    "id": "trk5l2_test_4",
    "category": "kurs_tr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Differenz aus 100 und 35?",
    "answers": [
     "65",
     "135",
     "75",
     "3500"
    ],
    "correct": 0,
    "explanation": "100 − 35.",
    "topic": "terme"
   },
   {
    "id": "trk5l2_test_5",
    "category": "kurs_tr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Term für 'das Dreifache der Summe aus 2 und 5'?",
    "answers": [
     "3 · 2 + 5",
     "3 · (2 + 5)",
     "2 + 5 · 3",
     "3 + 2 + 5"
    ],
    "correct": 1,
    "explanation": "Klammer.",
    "topic": "terme"
   },
   {
    "id": "trk5l2_test_6",
    "category": "kurs_tr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Term für 'Addiere 4 zum Quotienten aus 20 und 5'?",
    "answers": [
     "(20 + 4) : 5",
     "20 : (5 + 4)",
     "20 : 5 + 4",
     "4 : 20 + 5"
    ],
    "correct": 2,
    "explanation": "Quotient + 4.",
    "topic": "terme"
   },
   {
    "id": "trk5l2_test_7",
    "category": "kurs_tr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viel ist 3 · (2 + 5)?",
    "answers": [
     "11",
     "17",
     "21",
     "30"
    ],
    "correct": 2,
    "explanation": "3 · 7.",
    "topic": "terme"
   },
   {
    "id": "trk5l2_test_8",
    "category": "kurs_tr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort gehört zu ':'?",
    "answers": [
     "Produkt",
     "Summe",
     "Quotient",
     "Differenz"
    ],
    "correct": 2,
    "explanation": "Quotient.",
    "topic": "terme"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "rz_k5_l1",
  "kurs": "roemisch_k5",
  "order": 1,
  "icon": "🏛️",
  "title": "Römische Zahlen lesen",
  "kurz": "I, V, X, L, C, D, M",
  "erklaerung": {
   "intro": "Die Römer schrieben Zahlen mit Buchstaben: <b>I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000</b>. Die Werte werden <b>addiert</b>: XVI = 10 + 5 + 1 = 16. Steht ein <b>kleineres Zeichen vor einem größeren</b>, wird es <b>abgezogen</b>: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900.",
   "merksatz": "I V X L C D M = 1 5 10 50 100 500 1000. Kleines vor großem: abziehen.",
   "beispiele": [
    "XVI = 10 + 5 + 1 = 16",
    "IX = 10 − 1 = 9",
    "MMXXVI = 2026"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "rzk5l1u_leicht_1",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welchen Wert hat V?",
     "answers": [
      "1",
      "10",
      "50",
      "5"
     ],
     "correct": 3,
     "explanation": "V = 5.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l1u_leicht_2",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welchen Wert hat X?",
     "answers": [
      "5",
      "50",
      "10",
      "100"
     ],
     "correct": 2,
     "explanation": "X = 10.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l1u_leicht_3",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Zahl ist III?",
     "answers": [
      "3",
      "4",
      "2",
      "13"
     ],
     "correct": 0,
     "explanation": "III = 3.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l1u_leicht_4",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Zahl ist VII?",
     "answers": [
      "8",
      "6",
      "7",
      "17"
     ],
     "correct": 2,
     "explanation": "VII = 7.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l1u_leicht_5",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welchen Wert hat C?",
     "answers": [
      "100",
      "50",
      "500",
      "1000"
     ],
     "correct": 0,
     "explanation": "C = 100.",
     "topic": "roemisch"
    }
   ],
   "mittel": [
    {
     "id": "rzk5l1u_mittel_1",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Zahl ist IV?",
     "answers": [
      "5",
      "3",
      "4",
      "14"
     ],
     "correct": 2,
     "explanation": "IV = 4.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l1u_mittel_2",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Zahl ist IX?",
     "answers": [
      "10",
      "8",
      "9",
      "19"
     ],
     "correct": 2,
     "explanation": "IX = 9.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l1u_mittel_3",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Zahl ist XIV?",
     "answers": [
      "15",
      "13",
      "24",
      "14"
     ],
     "correct": 3,
     "explanation": "XIV = 14.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l1u_mittel_4",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Zahl ist XIX?",
     "answers": [
      "20",
      "18",
      "19",
      "29"
     ],
     "correct": 2,
     "explanation": "XIX = 19.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l1u_mittel_5",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welchen Wert hat L?",
     "answers": [
      "5",
      "100",
      "500",
      "50"
     ],
     "correct": 3,
     "explanation": "L = 50.",
     "topic": "roemisch"
    }
   ],
   "schwer": [
    {
     "id": "rzk5l1u_schwer_1",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl ist XLIV?",
     "answers": [
      "45",
      "43",
      "44",
      "54"
     ],
     "correct": 2,
     "explanation": "XLIV = 44.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l1u_schwer_2",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl ist XCIX?",
     "answers": [
      "100",
      "99",
      "98",
      "109"
     ],
     "correct": 1,
     "explanation": "XCIX = 99.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l1u_schwer_3",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl ist MCMXCIX?",
     "answers": [
      "2000",
      "1999",
      "1998",
      "2009"
     ],
     "correct": 1,
     "explanation": "MCMXCIX = 1999.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l1u_schwer_4",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Zahl ist MMXXVI?",
     "answers": [
      "2027",
      "2025",
      "2026",
      "2036"
     ],
     "correct": 2,
     "explanation": "MMXXVI = 2026.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l1u_schwer_5",
     "category": "kurs_rz_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welchen Wert hat D?",
     "answers": [
      "500",
      "50",
      "100",
      "1000"
     ],
     "correct": 0,
     "explanation": "D = 500.",
     "topic": "roemisch"
    }
   ]
  },
  "test": [
   {
    "id": "rzk5l1_test_1",
    "category": "kurs_rz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl ist VI?",
    "answers": [
     "7",
     "5",
     "6",
     "16"
    ],
    "correct": 2,
    "explanation": "VI = 6.",
    "topic": "roemisch"
   },
   {
    "id": "rzk5l1_test_2",
    "category": "kurs_rz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl ist XII?",
    "answers": [
     "13",
     "11",
     "22",
     "12"
    ],
    "correct": 3,
    "explanation": "XII = 12.",
    "topic": "roemisch"
   },
   {
    "id": "rzk5l1_test_3",
    "category": "kurs_rz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl ist XXIV?",
    "answers": [
     "25",
     "23",
     "34",
     "24"
    ],
    "correct": 3,
    "explanation": "XXIV = 24.",
    "topic": "roemisch"
   },
   {
    "id": "rzk5l1_test_4",
    "category": "kurs_rz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl ist XL?",
    "answers": [
     "41",
     "39",
     "50",
     "40"
    ],
    "correct": 3,
    "explanation": "XL = 40.",
    "topic": "roemisch"
   },
   {
    "id": "rzk5l1_test_5",
    "category": "kurs_rz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl ist XC?",
    "answers": [
     "91",
     "90",
     "89",
     "100"
    ],
    "correct": 1,
    "explanation": "XC = 90.",
    "topic": "roemisch"
   },
   {
    "id": "rzk5l1_test_6",
    "category": "kurs_rz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welchen Wert hat M?",
    "answers": [
     "1000",
     "100",
     "500",
     "10 000"
    ],
    "correct": 0,
    "explanation": "M = 1000.",
    "topic": "roemisch"
   },
   {
    "id": "rzk5l1_test_7",
    "category": "kurs_rz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl ist CL?",
    "answers": [
     "151",
     "150",
     "149",
     "160"
    ],
    "correct": 1,
    "explanation": "CL = 150.",
    "topic": "roemisch"
   },
   {
    "id": "rzk5l1_test_8",
    "category": "kurs_rz_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Zahl ist CD?",
    "answers": [
     "401",
     "400",
     "399",
     "410"
    ],
    "correct": 1,
    "explanation": "CD = 400.",
    "topic": "roemisch"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "rz_k5_l2",
  "kurs": "roemisch_k5",
  "order": 2,
  "icon": "✍️",
  "title": "Römische Zahlen schreiben",
  "kurz": "Von groß nach klein, höchstens 3 gleiche",
  "erklaerung": {
   "intro": "Beim Schreiben gehst du <b>von groß nach klein</b>: 2026 = 1000 + 1000 + 10 + 10 + 5 + 1 = <b>MMXXVI</b>. Ein Zeichen steht <b>höchstens dreimal</b> hintereinander: 4 ist nicht IIII, sondern <b>IV</b>. Abziehen darf man nur <b>I, X, C</b> – und nur vor den nächsten beiden größeren (I vor V/X, X vor L/C, C vor D/M).",
   "merksatz": "Groß nach klein, höchstens 3 gleiche, abziehen nur mit I, X, C.",
   "beispiele": [
    "8 = VIII",
    "40 = XL",
    "1984 = MCMLXXXIV"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "rzk5l2u_leicht_1",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man 2 römisch?",
     "answers": [
      "II",
      "III",
      "I",
      "XII"
     ],
     "correct": 0,
     "explanation": "2 = II.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l2u_leicht_2",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man 6 römisch?",
     "answers": [
      "VII",
      "V",
      "XVI",
      "VI"
     ],
     "correct": 3,
     "explanation": "6 = VI.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l2u_leicht_3",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man 8 römisch?",
     "answers": [
      "IX",
      "VII",
      "VIII",
      "XVIII"
     ],
     "correct": 2,
     "explanation": "8 = VIII.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l2u_leicht_4",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man 11 römisch?",
     "answers": [
      "XII",
      "XI",
      "X",
      "XXI"
     ],
     "correct": 1,
     "explanation": "11 = XI.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l2u_leicht_5",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie schreibt man 20 römisch?",
     "answers": [
      "XXI",
      "XIX",
      "XXX",
      "XX"
     ],
     "correct": 3,
     "explanation": "20 = XX.",
     "topic": "roemisch"
    }
   ],
   "mittel": [
    {
     "id": "rzk5l2u_mittel_1",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man 4 römisch?",
     "answers": [
      "V",
      "III",
      "XIV",
      "IV"
     ],
     "correct": 3,
     "explanation": "4 = IV.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l2u_mittel_2",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man 9 römisch?",
     "answers": [
      "X",
      "VIII",
      "IX",
      "XIX"
     ],
     "correct": 2,
     "explanation": "9 = IX.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l2u_mittel_3",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man 15 römisch?",
     "answers": [
      "XVI",
      "XIV",
      "XXV",
      "XV"
     ],
     "correct": 3,
     "explanation": "15 = XV.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l2u_mittel_4",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man 40 römisch?",
     "answers": [
      "XL",
      "XLI",
      "XXXIX",
      "L"
     ],
     "correct": 0,
     "explanation": "40 = XL.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l2u_mittel_5",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie oft darf ein Zeichen höchstens hintereinander stehen?",
     "answers": [
      "2-mal",
      "4-mal",
      "beliebig oft",
      "3-mal"
     ],
     "correct": 3,
     "explanation": "Höchstens dreimal.",
     "topic": "roemisch"
    }
   ],
   "schwer": [
    {
     "id": "rzk5l2u_schwer_1",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie schreibt man 49 römisch?",
     "answers": [
      "L",
      "XLVIII",
      "LIX",
      "XLIX"
     ],
     "correct": 3,
     "explanation": "49 = XLIX.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l2u_schwer_2",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie schreibt man 90 römisch?",
     "answers": [
      "XC",
      "XCI",
      "LXXXIX",
      "C"
     ],
     "correct": 0,
     "explanation": "90 = XC.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l2u_schwer_3",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie schreibt man 444 römisch?",
     "answers": [
      "CDXLV",
      "CDXLIV",
      "CDXLIII",
      "CDLIV"
     ],
     "correct": 1,
     "explanation": "444 = CDXLIV.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l2u_schwer_4",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie schreibt man 1990 römisch?",
     "answers": [
      "MCMXCI",
      "MCMXC",
      "MCMLXXXIX",
      "MM"
     ],
     "correct": 1,
     "explanation": "1990 = MCMXC.",
     "topic": "roemisch"
    },
    {
     "id": "rzk5l2u_schwer_5",
     "category": "kurs_rz_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum schreibt man 99 nicht IC?",
     "answers": [
      "IC ist richtig.",
      "C ist zu groß.",
      "I darf nur vor V und X stehen.",
      "Man schreibt 99 nicht."
     ],
     "correct": 2,
     "explanation": "Richtig: XCIX.",
     "topic": "roemisch"
    }
   ]
  },
  "test": [
   {
    "id": "rzk5l2_test_1",
    "category": "kurs_rz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man 3 römisch?",
    "answers": [
     "IV",
     "II",
     "III",
     "XIII"
    ],
    "correct": 2,
    "explanation": "3 = III.",
    "topic": "roemisch"
   },
   {
    "id": "rzk5l2_test_2",
    "category": "kurs_rz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man 12 römisch?",
    "answers": [
     "XIII",
     "XI",
     "XXII",
     "XII"
    ],
    "correct": 3,
    "explanation": "12 = XII.",
    "topic": "roemisch"
   },
   {
    "id": "rzk5l2_test_3",
    "category": "kurs_rz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man 19 römisch?",
    "answers": [
     "XX",
     "XIX",
     "XVIII",
     "XXIX"
    ],
    "correct": 1,
    "explanation": "19 = XIX.",
    "topic": "roemisch"
   },
   {
    "id": "rzk5l2_test_4",
    "category": "kurs_rz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man 25 römisch?",
    "answers": [
     "XXVI",
     "XXV",
     "XXIV",
     "XXXV"
    ],
    "correct": 1,
    "explanation": "25 = XXV.",
    "topic": "roemisch"
   },
   {
    "id": "rzk5l2_test_5",
    "category": "kurs_rz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man 50 römisch?",
    "answers": [
     "LI",
     "XLIX",
     "LX",
     "L"
    ],
    "correct": 3,
    "explanation": "50 = L.",
    "topic": "roemisch"
   },
   {
    "id": "rzk5l2_test_6",
    "category": "kurs_rz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man 60 römisch?",
    "answers": [
     "LXI",
     "LIX",
     "LX",
     "LXX"
    ],
    "correct": 2,
    "explanation": "60 = LX.",
    "topic": "roemisch"
   },
   {
    "id": "rzk5l2_test_7",
    "category": "kurs_rz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man 100 römisch?",
    "answers": [
     "CI",
     "C",
     "XCIX",
     "CX"
    ],
    "correct": 1,
    "explanation": "100 = C.",
    "topic": "roemisch"
   },
   {
    "id": "rzk5l2_test_8",
    "category": "kurs_rz_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man 2026 römisch?",
    "answers": [
     "MMXXVI",
     "MMXXVII",
     "MMXXV",
     "MMXXXVI"
    ],
    "correct": 0,
    "explanation": "2026 = MMXXVI.",
    "topic": "roemisch"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
