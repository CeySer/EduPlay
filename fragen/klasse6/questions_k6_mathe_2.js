// ================================================================
// KLASSE 6 - MATHEMATIK (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K6_MATHE2_QUESTIONS = [
  // --- BRUCHRECHNUNG (001 - 020) ---
  {
    "id": "k6_ma_001",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was gibt der Zähler in einem Bruch wie $\\frac{3}{4}$ an?",
    "answers": [
      "Anzahl ausgewählter Teile",
      "Gesamtzahl aller Abschnitte",
      "Den Wert des Ganzen",
      "Das Ergebnis der Summe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Zähler oben zählt die betrachteten Teile des Ganzen."
  },
  {
    "id": "k6_ma_002",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was gibt der Nenner in einem Bruch wie $\\frac{3}{4}$ an?",
    "answers": [
      "Gesamtzahl aller Teile",
      "Anzahl gewählter Stücke",
      "Den Wert des Zählers",
      "Das Produkt der Summe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Nenner unten benennt, in wie viele gleich große Teile das Ganze geteilt ist."
  },
  {
    "id": "k6_ma_003",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie erweitert man den Bruch $\\frac{1}{2}$ mit der Zahl $3$?",
    "answers": [
      "Ergibt den Bruch $\\frac{3}{6}$",
      "Ergibt den Bruch $\\frac{4}{5}$",
      "Ergibt den Bruch $\\frac{3}{2}$",
      "Ergibt den Bruch $\\frac{1}{6}$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Erweitern multipliziert man Zähler und Nenner mit derselben Zahl ($1 \\cdot 3 = 3$, $2 \\cdot 3 = 6$)."
  },
  {
    "id": "k6_ma_004",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie kürzt man den Bruch $\\frac{4}{8}$ vollständig?",
    "answers": [
      "Ergibt den Bruch $\\frac{1}{2}$",
      "Ergibt den Bruch $\\frac{2}{3}$",
      "Ergibt den Bruch $\\frac{1}{4}$",
      "Ergibt den Bruch $\\frac{3}{4}$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zähler und Nenner werden durch $4$ dividiert: $\\frac{4 : 4}{8 : 4} = \\frac{1}{2}$."
  },
  {
    "id": "k6_ma_005",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie nennt man einen Bruch, bei dem der Zähler größer als der Nenner ist?",
    "answers": [
      "Unechter Bruchwert",
      "Echter Bruchanteil",
      "Gemischter Zehner",
      "Dezimaler Bruchraum"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ist der Zähler größer oder gleich dem Nenner (z. B. $\\frac{5}{3}$), ist es ein unechter Bruch."
  },
  {
    "id": "k6_ma_006",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie schreibt man den unechten Bruch $\\frac{7}{3}$ als gemischte Zahl?",
    "answers": [
      "Ergibt die Zahl $2\\frac{1}{3}$",
      "Ergibt die Zahl $1\\frac{4}{3}$",
      "Ergibt die Zahl $3\\frac{1}{3}$",
      "Ergibt die Zahl $2\\frac{2}{3}$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$7 : 3 = 2$ Rest $1$, also $2\\frac{1}{3}$."
  },
  {
    "id": "k6_ma_007",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was berechnet man: $\\frac{1}{5} + \\frac{2}{5}$?",
    "answers": [
      "Ergibt den Bruch $\\frac{3}{5}$",
      "Ergibt den Bruch $\\frac{3}{10}$",
      "Ergibt den Bruch $\\frac{2}{25}$",
      "Ergibt den Bruch $\\frac{1}{5}$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gleichnamige Brüche addiert man, indem man die Zähler addiert und den Nenner beibehält."
  },
  {
    "id": "k6_ma_008",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was berechnet man: $\\frac{5}{7} - \\frac{2}{7}$?",
    "answers": [
      "Ergibt den Bruch $\\frac{3}{7}$",
      "Ergibt den Bruch $\\frac{3}{0}$",
      "Ergibt den Bruch $\\frac{7}{7}$",
      "Ergibt den Bruch $\\frac{2}{7}$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\frac{5 - 2}{7} = \\frac{3}{7}$."
  },
  {
    "id": "k6_ma_009",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was muss man vor der Addition von ungleichnamigen Brüchen tun?",
    "answers": [
      "Auf Hauptnenner bringen",
      "Beide Zähler malnehmen",
      "Nenner einfach addieren",
      "Durch zwei dividieren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Unterschiedliche Nenner müssen erst durch Erweitern/Kürzen gleichnamig gemacht werden."
  },
  {
    "id": "k6_ma_10",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was ist der Hauptnenner (kleinstes gemeinsames Vielfaches) von $\\frac{1}{3}$ und $\\frac{1}{4}$?",
    "answers": [
      "Der Hauptnenner ist $12$",
      "Der Hauptnenner ist $7$",
      "Der Hauptnenner ist $24$",
      "Der Hauptnenner ist $6$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das kleinste gemeinsame Vielfache von $3$ und $4$ ist $12$."
  },
  {
    "id": "k6_ma_011",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was berechnet man: $\\frac{1}{2} + \\frac{1}{4}$?",
    "answers": [
      "Ergibt den Bruch $\\frac{3}{4}$",
      "Ergibt den Bruch $\\frac{2}{6}$",
      "Ergibt den Bruch $\\frac{1}{8}$",
      "Ergibt den Bruch $\\frac{2}{4}$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\frac{1}{2} = \\frac{2}{4}$. Dann: $\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$."
  },
  {
    "id": "k6_ma_012",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie multipliziert man zwei Brüche miteinander?",
    "answers": [
      "Zähler $\\cdot$ Zähler / Nenner $\\cdot$ Nenner",
      "Zähler $\\cdot$ Nenner / Nenner $\\cdot$ Zähler",
      "Nur die beiden Zähler addieren",
      "Umberkreuz das Ganze kreuzen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Merkregel: Zähler mal Zähler, Nenner mal Nenner."
  },
  {
    "id": "k6_ma_013",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was berechnet man: $\\frac{2}{3} \\cdot \\frac{3}{4}$?",
    "answers": [
      "Ergibt den Bruch $\\frac{1}{2}$",
      "Ergibt den Bruch $\\frac{5}{7}$",
      "Ergibt den Bruch $\\frac{6}{7}$",
      "Ergibt den Bruch $\\frac{2}{4}$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\frac{2 \\cdot 3}{3 \\cdot 4} = \\frac{6}{12} = \\frac{1}{2}$."
  },
  {
    "id": "k6_ma_014",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was ist der Kehrwert des Bruches $\\frac{4}{5}$?",
    "answers": [
      "Der Kehrwert ist $\\frac{5}{4}$",
      "Der Kehrwert ist $-\\frac{4}{5}$",
      "Der Kehrwert ist $\\frac{1}{5}$",
      "Der Kehrwert ist $\\frac{4}{1}$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Kehrwert vertauscht man Zähler und Nenner."
  },
  {
    "id": "k6_ma_015",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie dividiert man durch einen Bruch?",
    "answers": [
      "Mit dem Kehrwert malnehmen",
      "Zähler durch Nenner teilen",
      "Beide Nenner subtrahieren",
      "Einfach die Nenner tauschen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Man dividiert durch einen Bruch, indem man mit seinem Kehrwert multipliziert."
  },
  {
    "id": "k6_ma_016",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was berechnet man: $\\frac{1}{2} : \\frac{1}{4}$?",
    "answers": [
      "Das Ergebnis ist $2$",
      "Das Ergebnis ist $\\frac{1}{8}$",
      "Das Ergebnis ist $\\frac{1}{2}$",
      "Das Ergebnis ist $4$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\frac{1}{2} \\cdot \\frac{4}{1} = \\frac{4}{2} = 2$."
  },
  {
    "id": "k6_ma_017",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Welcher Bruch ist größer: $\\frac{1}{3}$ oder $\\frac{1}{4}$?",
    "answers": [
      "Der Bruch $\\frac{1}{3}$ ist größer",
      "Der Bruch $\\frac{1}{4}$ ist größer",
      "Beide Brüche sind gleich",
      "Kann man nicht vergleichen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei gleichem Zähler ist der Bruch mit dem kleineren Nenner größer."
  },
  {
    "id": "k6_ma_018",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viel ist $\\frac{3}{4}$ von $20$ Euro?",
    "answers": [
      "Das sind $15$ Euro",
      "Das sind $12$ Euro",
      "Das sind $10$ Euro",
      "Das sind $16$ Euro"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$20 : 4 = 5$, dann $5 \\cdot 3 = 15$ Euro."
  },
  {
    "id": "k6_ma_019",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie lautet $\\frac{1}{10}$ als Dezimalzahl?",
    "answers": [
      "Die Dezimalzahl $0{,}1$",
      "Die Dezimalzahl $0{,}01$",
      "Die Dezimalzahl $1{,}0$",
      "Die Dezimalzahl $0{,}100$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Zehntel entspricht $0{,}1$."
  },
  {
    "id": "k6_ma_020",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Welche Zahl fehlt beim Erweitern: $\\frac{2}{5} = \\frac{?}{20}$?",
    "answers": [
      "Die gesuchte Zahl $8$",
      "Die gesuchte Zahl $6$",
      "Die gesuchte Zahl $10$",
      "Die gesuchte Zahl $12$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nenner mit $4$ erweitert ($5 \\cdot 4 = 20$), also Zähler: $2 \\cdot 4 = 8$."
  },

  // --- DEZIMALZAHLEN / KOMMAZAHLEN (021 - 040) ---
  {
    "id": "k6_ma_021",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Welcher Stellenwert folgt direkt nach dem Komma rechts?",
    "answers": [
      "Die Zehntelstelle",
      "Die Hundertstelstelle",
      "Die Einerstelle",
      "Die Tausendstelstelle"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die erste Stelle rechts nach dem Komma ist die Zehntelstelle ($z$)."
  },
  {
    "id": "k6_ma_022",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie lautet der Bruch $\\frac{3}{100}$ als Kommazahl?",
    "answers": [
      "Die Kommazahl $0{,}03$",
      "Die Kommazahl $0{,}3$",
      "Die Kommazahl $0{,}003$",
      "Die Kommazahl $3{,}00$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Drei Hundertstel werden als $0{,}03$ geschrieben."
  },
  {
    "id": "k6_ma_023",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was ergibt die Addition: $2{,}4 + 3{,}5$?",
    "answers": [
      "Ergibt das Ergebnis $5{,}9$",
      "Ergibt das Ergebnis $5{,}8$",
      "Ergibt das Ergebnis $6{,}1$",
      "Ergibt das Ergebnis $5{,}10$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Einer addieren ($2+3=5$), Zehntel addiert ($0{,}4+0{,}5=0{,}9$) $\\rightarrow 5{,}9$."
  },
  {
    "id": "k6_ma_024",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was ergibt die Subtraktion: $7{,}8 - 2{,}3$?",
    "answers": [
      "Ergibt das Ergebnis $5{,}5$",
      "Ergibt das Ergebnis $5{,}3$",
      "Ergibt das Ergebnis $5{,}6$",
      "Ergibt das Ergebnis $4{,}5$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$7{,}8 - 2{,}3 = 5{,}5$."
  },
  {
    "id": "k6_ma_025",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Worauf muss man bei der schriftlichen Addition von Kommazahlen achten?",
    "answers": [
      "Komma unter Komma",
      "Rechtsbündig schreiben",
      "Komma ganz weglassen",
      "Zahlen nur aufrunden"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Kommas müssen exakt untereinanderstehen."
  },
  {
    "id": "k6_ma_026",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie verschiebt sich das Komma bei Multiplikation mit $10$?",
    "answers": [
      "Eine Stelle nach rechts",
      "Eine Stelle nach links",
      "Zwei Stellen nach rechts",
      "Das Komma bleibt gleich"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Multiplikation mit $10$ macht die Zahl zehnmal größer $\\rightarrow$ Komma $1$ Stelle nach rechts."
  },
  {
    "id": "k6_ma_027",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was ergibt die Rechnung: $0{,}4 \\cdot 100$?",
    "answers": [
      "Das Ergebnis ist $40$",
      "Das Ergebnis ist $4$",
      "Das Ergebnis ist $400$",
      "Das Ergebnis ist $0{,}04$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Komma wird um zwei Stellen nach rechts verschoben: $0{,}4 \\rightarrow 40$."
  },
  {
    "id": "k6_ma_028",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie verschiebt sich das Komma bei Division durch $100$?",
    "answers": [
      "Zwei Stellen nach links",
      "Zwei Stellen nach rechts",
      "Eine Stelle nach links",
      "Es verschiebt sich nie"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Division durch $100$ macht die Zahl hundertmal kleiner $\\rightarrow$ Komma $2$ Stellen nach links."
  },
  {
    "id": "k6_ma_029",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was berechnet man: $3{,}5 : 10$?",
    "answers": [
      "Das Ergebnis ist $0{,}35$",
      "Das Ergebnis ist $35$",
      "Das Ergebnis ist $0{,}035$",
      "Das Ergebnis ist $3{,}50$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Komma eine Stelle nach links verschieben $\\rightarrow 0{,}35$."
  },
  {
    "id": "k6_ma_030",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie bestimmt man die Kommastellen beim Produkt zweier Kommazahlen?",
    "answers": [
      "Summe der Kommastellen",
      "Anzahl der ersten Zahl",
      "Differenz der Stellen",
      "Immer genau zwei Stellen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Ergebnis hat so viele Nachkommastellen wie beide Faktoren zusammen."
  },
  {
    "id": "k6_ma_031",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was berechnet man: $0{,}2 \\cdot 0{,}3$?",
    "answers": [
      "Ergibt den Wert $0{,}06$",
      "Ergibt den Wert $0{,}6$",
      "Ergibt den Wert $0{,}006$",
      "Ergibt den Wert $6{,}0$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$2 \\cdot 3 = 6$. Zusammen 2 Nachkommastellen $\\rightarrow 0{,}06$."
  },
  {
    "id": "k6_ma_032",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Runde die Zahl $4{,}37$ auf eine Nachkommastelle (Zehntel):",
    "answers": [
      "Gerundet auf $4{,}4$",
      "Gerundet auf $4{,}3$",
      "Gerundet auf $4{,}0$",
      "Gerundet auf $5{,}0$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Hundertstelstelle ist $7$ (aufrunden) $\\rightarrow 4{,}4$."
  },
  {
    "id": "k6_ma_033",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Bei welchen Ziffern wird aufgerundet?",
    "answers": [
      "Bei $5, 6, 7, 8, 9$",
      "Bei $0, 1, 2, 3, 4$",
      "Nur bei $8$ und $9$",
      "Ausschließlich bei $5$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei den Ziffern $0$ bis $4$ wird abgerundet, bei $5$ bis $9$ wird aufgerundet."
  },
  {
    "id": "k6_ma_034",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Welche Kommazahl ist größer: $0{,}5$ oder $0{,}49$?",
    "answers": [
      "Die Zahl $0{,}5$ ist größer",
      "Die Zahl $0{,}49$ ist größer",
      "Beide Zahlen sind gleich",
      "Lässt sich nicht vergleichen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$0{,}5 = 0{,}50$. $50$ Hundertstel sind mehr als $49$ Hundertstel."
  },
  {
    "id": "k6_ma_035",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie nennt man eine Kommazahl, bei der sich Ziffern unendlich wiederholen?",
    "answers": [
      "Periodische Kommazahl",
      "Endliche Kommazahl",
      "Runde Dezimalzahl",
      "Unechte Kommazahl"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beispiel: $\\frac{1}{3} = 0{,}333... = 0{,}\\bar{3}$ (periodische Dezimalzahl)."
  },
  {
    "id": "k6_ma_036",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was berechnet man: $1{,}2 : 0{,}3$?",
    "answers": [
      "Das Ergebnis ist $4$",
      "Das Ergebnis ist $0{,}4$",
      "Das Ergebnis ist $40$",
      "Das Ergebnis ist $0{,}04$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Komma bei beiden um eine Stelle verschieben: $12 : 3 = 4$."
  },
  {
    "id": "k6_ma_037",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie lautet der Bruch $\\frac{1}{4}$ als Dezimalzahl?",
    "answers": [
      "Dezimalzahl $0{,}25$",
      "Dezimalzahl $0{,}4$",
      "Dezimalzahl $0{,}14$",
      "Dezimalzahl $0{,}5$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\frac{1}{4} = \\frac{25}{100} = 0{,}25$."
  },
  {
    "id": "k6_ma_038",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie lautet der Bruch $\\frac{3}{4}$ als Dezimalzahl?",
    "answers": [
      "Dezimalzahl $0{,}75$",
      "Dezimalzahl $0{,}34$",
      "Dezimalzahl $0{,}6$",
      "Dezimalzahl $0{,}8$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\frac{3}{4} = \\frac{75}{100} = 0{,}75$."
  },
  {
    "id": "k6_ma_039",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was ist das Ergebnis von $5 - 1{,}2$?",
    "answers": [
      "Das Ergebnis ist $3{,}8$",
      "Das Ergebnis ist $4{,}2$",
      "Das Ergebnis ist $3{,}2$",
      "Das Ergebnis ist $4{,}8$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$5{,}0 - 1{,}2 = 3{,}8$."
  },
  {
    "id": "k6_ma_040",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Welche Zahl liegt exakt in der Mitte von $1{,}2$ und $1{,}4$?",
    "answers": [
      "Mitten liegt $1{,}3$",
      "Mitten liegt $1{,}25$",
      "Mitten liegt $1{,}35$",
      "Mitten liegt $1{,}31$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Mittelwert aus $1{,}2$ und $1{,}4$ ist $1{,}3$."
  },

  // --- GEOMETRIE, FLÄCHEN & RAUMINHALTE (041 - 060) ---
  {
    "id": "k6_ma_041",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie berechnet man den Umfang $U$ eines Rechtecks mit Seiten $a$ und $b$?",
    "answers": [
      "Formel: $U = 2a + 2b$",
      "Formel: $U = a \\cdot b$",
      "Formel: $U = a + b$",
      "Formel: $U = 4a \\cdot b$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Umfang ist die Summe aller Seitenkanten: $a + b + a + b = 2a + 2b$."
  },
  {
    "id": "k6_ma_042",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie berechnet man den Flächeninhalt $A$ eines Rechtecks?",
    "answers": [
      "Formel: $A = a \\cdot b$",
      "Formel: $A = 2a + 2b$",
      "Formel: $A = a + b$",
      "Formel: $A = a : b$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Flächeninhalt Rechteck = Länge mal Breite ($a \\cdot b$)."
  },
  {
    "id": "k6_ma_043",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Welcher Flächeninhalt $A$ hat ein Quadrat mit Seitenlänge $a = 6\\text{ cm}$?",
    "answers": [
      "Fläche $36\\text{ cm}^2$",
      "Fläche $24\\text{ cm}^2$",
      "Fläche $12\\text{ cm}^2$",
      "Fläche $18\\text{ cm}^2$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$A = a \\cdot a = 6 \\cdot 6 = 36\\text{ cm}^2$."
  },
  {
    "id": "k6_ma_044",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viele Quadratmeter ($\\text{m}^2$) entsprechen einem Ar (a)?",
    "answers": [
      "Genau $100\\text{ m}^2$",
      "Genau $10\\text{ m}^2$",
      "Genau $1.000\\text{ m}^2$",
      "Genau $10.000\\text{ m}^2$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$1\\text{ a} = 100\\text{ m}^2$ (Umrechnungszahl bei Flächen ist $100$)."
  },
  {
    "id": "k6_ma_045",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viele Hektar (ha) entsprechen einem Quadratkilometer ($\\text{km}^2$)?",
    "answers": [
      "Genau $100\\text{ ha}$",
      "Genau $10\\text{ ha}$",
      "Genau $1.000\\text{ ha}$",
      "Genau $10.000\\text{ ha}$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$1\\text{ km}^2 = 100\\text{ ha}$."
  },
  {
    "id": "k6_ma_046",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viele Begrenzungsflächen hat ein Quader?",
    "answers": [
      "Genau $6$ Flächen",
      "Genau $8$ Flächen",
      "Genau $12$ Flächen",
      "Genau $4$ Flächen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Quader besitzt $6$ rechteckige Seitenflächen."
  },
  {
    "id": "k6_ma_047",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viele Ecken hat ein geometrischer Würfel?",
    "answers": [
      "Genau $8$ Ecken",
      "Genau $6$ Ecken",
      "Genau $12$ Ecken",
      "Genau $16$ Ecken"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Würfel hat $8$ Eckpunkte."
  },
  {
    "id": "k6_ma_048",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viele Kanten besitzt ein Quader insgesamt?",
    "answers": [
      "Genau $12$ Kanten",
      "Genau $8$ Kanten",
      "Genau $6$ Kanten",
      "Genau $10$ Kanten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Quader besitzt $12$ Kanten."
  },
  {
    "id": "k6_ma_049",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie berechnet man das Volumen $V$ eines Quaders mit Kanten $a, b, c$?",
    "answers": [
      "Formel: $V = a \\cdot b \\cdot c$",
      "Formel: $V = a + b + c$",
      "Formel: $V = 2a + 2b + 2c$",
      "Formel: $V = (a \\cdot b) + c$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Volumen = Länge $\\cdot$ Breite $\\cdot$ Höhe ($a \\cdot b \\cdot c$)."
  },
  {
    "id": "k6_ma_050",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Berechne das Volumen eines Quaders mit $a=2\\text{ cm}, b=3\\text{ cm}, c=4\\text{ cm}$:",
    "answers": [
      "Volumen $24\\text{ cm}^3$",
      "Volumen $9\\text{ cm}^3$",
      "Volumen $14\\text{ cm}^3$",
      "Volumen $48\\text{ cm}^3$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$V = 2 \\cdot 3 \\cdot 4 = 24\\text{ cm}^3$."
  },
  {
    "id": "k6_ma_051",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Welches Volumen $V$ hat ein Würfel mit Kantenlänge $a = 3\\text{ cm}$?",
    "answers": [
      "Volumen $27\\text{ cm}^3$",
      "Volumen $9\\text{ cm}^3$",
      "Volumen $18\\text{ cm}^3$",
      "Volumen $36\\text{ cm}^3$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$V = a \\cdot a \\cdot a = 3 \\cdot 3 \\cdot 3 = 27\\text{ cm}^3$."
  },
  {
    "id": "k6_ma_052",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viele Kubikzentimeter ($\\text{cm}^3$) sind ein Kubikdezimeter ($\\text{dm}^3$)?",
    "answers": [
      "Genau $1.000\\text{ cm}^3$",
      "Genau $100\\text{ cm}^3$",
      "Genau $10\\text{ cm}^3$",
      "Genau $10.000\\text{ cm}^3$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Umrechnungszahl für Volumeneinheiten beträgt $1.000$."
  },
  {
    "id": "k6_ma_053",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Welcher Rauminhalt entspricht genau $1$ Liter ($1\\text{ l}$)?",
    "answers": [
      "Genau $1\\text{ dm}^3$",
      "Genau $1\\text{ cm}^3$",
      "Genau $1\\text{ m}^3$",
      "Genau $10\\text{ cm}^3$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Liter entspricht dem Rauminhalt eines Würfels von $1\\text{ dm} \\times 1\\text{ dm} \\times 1\\text{ dm}$."
  },
  {
    "id": "k6_ma_054",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viele Milliliter ($\\text{ml}$) sind in $1$ Liter enthalten?",
    "answers": [
      "Genau $1.000\\text{ ml}$",
      "Genau $100\\text{ ml}$",
      "Genau $10\\text{ ml}$",
      "Genau $10.000\\text{ ml}$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$1\\text{ l} = 1.000\\text{ ml}$ ($1\\text{ ml} = 1\\text{ cm}^3$)."
  },
  {
    "id": "k6_ma_055",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was beschreibt die 'Oberfläche' eines Quaders?",
    "answers": [
      "Summe aller $6$ Flächen",
      "Inhalt des Innenraums",
      "Länge der Kantensumme",
      "Fläche der Grundseite"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Oberfläche ist die Summe der Flächeninhalte aller $6$ Begrenzungsflächen."
  },
  {
    "id": "k6_ma_056",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie nennt man die aufgeklappte Außenhülle eines Körpers in der Ebene?",
    "answers": [
      "Das Körpernetz",
      "Das Schrägbild",
      "Das Kantenmodell",
      "Das Flächenprofil"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wird ein Quader aufgeschnitten und flach gelegt, entsteht sein Netz."
  },
  {
    "id": "k6_ma_057",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Welche Eigenschaft besitzen gegenüberliegende Seitenflächen im Quader?",
    "answers": [
      "Deckungsgleich u. parallel",
      "Unterschiedlich groß",
      "Senkrecht zueinander",
      "Krumm gebogene Form"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gegenüberliegende Flächen sind genau gleich groß (kongruent) und parallel."
  },
  {
    "id": "k6_ma_058",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie zeichnet man nach hinten verlaufende Kanten im Schrägbild meist?",
    "answers": [
      "Verkürzt im $45^\\circ$-Winkel",
      "Doppelt so lang senkrecht",
      "Immer waagerecht gerade",
      "Verdoppelt nach oben"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Tiefenkanten zeichnet man schräg ($45^\\circ$) u. auf die Hälfte verkürzt."
  },
  {
    "id": "k6_ma_059",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie zeichnet man verdeckte Kanten in einem Schrägbild?",
    "answers": [
      "Als gestrichelte Linien",
      "Besonders dick rot",
      "Gar nicht einzeichnen",
      "Als Punkte ohne Linie"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Verdeckte, nicht sichtbare Kanten werden gestrichelt gezeichnet."
  },
  {
    "id": "k6_ma_060",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Berechne die Gesamtkantenlänge eines Würfels mit Kante $a = 5\\text{ cm}$:",
    "answers": [
      "Länge beträgt $60\\text{ cm}$",
      "Länge beträgt $30\\text{ cm}$",
      "Länge beträgt $40\\text{ cm}$",
      "Länge beträgt $20\\text{ cm}$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Würfel hat $12$ Kanten: $12 \\cdot 5\\text{ cm} = 60\\text{ cm}$."
  },

  // --- RELATIVE HÄUFIGKEIT & PROZENTRECHNUNG (061 - 080) ---
  {
    "id": "k6_ma_061",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was beschreibt die 'absolute Häufigkeit' bei einer Umfrage?",
    "answers": [
      "Reine Anzahl Treffer",
      "Anteil an der Gesamtzahl",
      "Ergebnis in Prozent",
      "Mittelwert aller Werte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die absolute Häufigkeit gibt als konkrete Zahl an, wie oft etwas gezählt wurde."
  },
  {
    "id": "k6_ma_062",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie berechnet man die 'relative Häufigkeit'?",
    "answers": [
      "Absolute Zahl : Gesamtzahl",
      "Gesamtzahl : Absolutes",
      "Absolute Zahl $\\cdot$ Gesamtzahl",
      "Gesamtzahl - Absolutes"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Relative Häufigkeit = Absolute Häufigkeit geteilt durch die Gesamtzahl der Versuche."
  },
  {
    "id": "k6_ma_063",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Bei $20$ Würfen fällt $5$-mal die Sechs. Wie hoch ist die relative Häufigkeit?",
    "answers": [
      "Ergibt $\\frac{5}{20} = \\frac{1}{4}$",
      "Ergibt $\\frac{5}{6}$ Anteil",
      "Ergibt $\\frac{6}{20}$ Anteil",
      "Ergibt $\\frac{1}{6}$ Anteil"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Relative Häufigkeit: $\\frac{5}{20} = \\frac{1}{4} = 0{,}25$."
  },
  {
    "id": "k6_ma_064",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was bedeutet das Prozentzeichen ($\\%$ ) übersetzt?",
    "answers": [
      "Von Hundert (Pro Hundert)",
      "Von Tausend Teile",
      "Aus Zehn Einheiten",
      "Mal Hundert Gerechnet"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Prozent stammt vom Lateinischen 'pro centum' (von Hundert)."
  },
  {
    "id": "k6_ma_065",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viel Prozent entspricht dem Bruch $\\frac{1}{2}$?",
    "answers": [
      "Entspricht genau $50\\%$",
      "Entspricht genau $20\\%$",
      "Entspricht genau $25\\%$",
      "Entspricht genau $10\\%$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\frac{1}{2} = \\frac{50}{100} = 50\\%$."
  },
  {
    "id": "k6_ma_066",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viel Prozent entspricht dem Bruch $\\frac{1}{4}$?",
    "answers": [
      "Entspricht genau $25\\%$",
      "Entspricht genau $40\\%$",
      "Entspricht genau $15\\%$",
      "Entspricht genau $75\\%$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\frac{1}{4} = \\frac{25}{100} = 25\\%$."
  },
  {
    "id": "k6_ma_067",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viel Prozent entspricht dem Bruch $\\frac{3}{4}$?",
    "answers": [
      "Entspricht genau $75\\%$",
      "Entspricht genau $34\\%$",
      "Entspricht genau $60\\%$",
      "Entspricht genau $80\\%$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\frac{3}{4} = \\frac{75}{100} = 75\\%$."
  },
  {
    "id": "k6_ma_068",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie schreibt man $20\\%$ als vereinfachten Bruch?",
    "answers": [
      "Als Bruch $\\frac{1}{5}$",
      "Als Bruch $\\frac{1}{2}$",
      "Als Bruch $\\frac{2}{5}$",
      "Als Bruch $\\frac{1}{20}$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$20\\% = \\frac{20}{100} = \\frac{1}{5}$."
  },
  {
    "id": "k6_ma_069",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viel sind $10\\%$ von $80$ Euro?",
    "answers": [
      "Das sind $8$ Euro",
      "Das sind $18$ Euro",
      "Das sind $4$ Euro",
      "Das sind $10$ Euro"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$10\\% = \\frac{1}{10}$. $80 : 10 = 8$ Euro."
  },
  {
    "id": "k6_ma_070",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viel sind $25\\%$ von $400$ Gramm?",
    "answers": [
      "Das sind $100$ Gramm",
      "Das sind $200$ Gramm",
      "Das sind $50$ Gramm",
      "Das sind $25$ Gramm"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$25\\% = \\frac{1}{4}$. $400 : 4 = 100$ Gramm."
  },
  {
    "id": "k6_ma_071",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie schreibt man die Zahl $0{,}05$ in Prozent?",
    "answers": [
      "Entspricht genau $5\\%$",
      "Entspricht genau $0{,}5\\%$",
      "Entspricht genau $50\\%$",
      "Entspricht genau $500\\%$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$0{,}05 = \\frac{5}{100} = 5\\%$."
  },
  {
    "id": "k6_ma_072",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie schreibt man $100\\%$ als ganze Zahl?",
    "answers": [
      "Die ganze Zahl $1$",
      "Die ganze Zahl $100$",
      "Die ganze Zahl $10$",
      "Die ganze Zahl $0$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$100\\% = \\frac{100}{100} = 1$ (das Ganze)."
  },
  {
    "id": "k6_ma_073",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "In einer Klasse von $25$ Kindern tragen $5$ eine Brille. Wie viel $\\%$ sind das?",
    "answers": [
      "Das sind genau $20\\%$",
      "Das sind genau $25\\%$",
      "Das sind genau $5\\%$",
      "Das sind genau $10\\%$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\frac{5}{25} = \\frac{1}{5} = \\frac{20}{100} = 20\\%$."
  },
  {
    "id": "k6_ma_074",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Ein Pullover kostet $50$ Euro. Er wird um $10\\%$ reduziert. Wie viel spart man?",
    "answers": [
      "Man spart $5$ Euro",
      "Man spart $10$ Euro",
      "Man spart $2{,}50$ Euro",
      "Man spart $1$ Euro"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$10\\%$ von $50$ Euro $= 50 : 10 = 5$ Euro Rabatt."
  },
  {
    "id": "k6_ma_075",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was ist die Summe aller relativen Häufigkeiten eines Zufallsexperiments?",
    "answers": [
      "Immer genau $1$ ($100\\%$)",
      "Immer genau $0$",
      "Abhängig von Zahl",
      "Immer genau $10$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Summe aller Anteile ergibt zusammen stets das Ganze ($1$ bzw. $100\\%$)."
  },
  {
    "id": "k6_ma_076",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viel sind $50\\%$ von $120$ Kilometern?",
    "answers": [
      "Das sind $60\\text{ km}$",
      "Das sind $50\\text{ km}$",
      "Das sind $30\\text{ km}$",
      "Das sind $24\\text{ km}$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$50\\%$ ist die Hälfte $\\rightarrow 120 : 2 = 60\\text{ km}$."
  },
  {
    "id": "k6_ma_077",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Welcher Prozentwert entspricht der Kommazahl $0{,}12$?",
    "answers": [
      "Entspricht $12\\%$",
      "Entspricht $1{,}2\\%$",
      "Entspricht $120\\%$",
      "Entspricht $0{,}12\\%$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$0{,}12 = \\frac{12}{100} = 12\\%$."
  },
  {
    "id": "k6_ma_078",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viel sind $1\\%$ von $500$ Metern?",
    "answers": [
      "Das sind $5$ Meter",
      "Das sind $50$ Meter",
      "Das sind $1$ Meter",
      "Das sind $0{,}5$ Meter"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$1\\% = \\frac{1}{100}$. $500 : 100 = 5$ Meter."
  },
  {
    "id": "k6_ma_079",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Ergänze zu $100\\%$: Wenn $35\\%$ Jungen sind, wie viel $\\%$ Mädels sind es?",
    "answers": [
      "Das sind $65\\%$",
      "Das sind $75\\%$",
      "Das sind $55\\%$",
      "Das sind $60\\%$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$100\\% - 35\\% = 65\\%$."
  },
  {
    "id": "k6_ma_080",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was bedeutet ein 'Prozentwert' in der Mathematik?",
    "answers": [
      "Die berechnete Menge",
      "Der Prozentsatz $p\\%$",
      "Das ganze Ganze $G$",
      "Der Nenner des Bruchs"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Prozentwert $W$ gibt die konkrete Menge an, die dem Prozentsatz entspricht."
  },

  // --- KOORDINATENSYSTEM, DIAGRAMME & STATISTIK (081 - 100) ---
  {
    "id": "k6_ma_081",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie heißt die waagerechte Achse im Koordinatensystem?",
    "answers": [
      "Die $x$-Achse",
      "Die $y$-Achse",
      "Die $z$-Achse",
      "Die Hoch-Achse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die waagerechte Achse wird als $x$-Achse (Rechtsachse) bezeichnet."
  },
  {
    "id": "k6_ma_082",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie heißt die senkrechte Achse im Koordinatensystem?",
    "answers": [
      "Die $y$-Achse",
      "Die $x$-Achse",
      "Die Breiteachse",
      "Die Null-Achse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die senkrechte Achse wird als $y$-Achse (Hochachse) bezeichnet."
  },
  {
    "id": "k6_ma_083",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie lauten die Koordinaten des Ursprungs (Nullpunkts)?",
    "answers": [
      "Koordinaten $(0|0)$",
      "Koordinaten $(1|1)$",
      "Koordinaten $(0|1)$",
      "Koordinaten $(1|0)$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Schnittpunkt der Achsen liegt bei $(0|0)$."
  },
  {
    "id": "k6_ma_084",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "In welcher Reihenfolge liest man Punkte $P(x|y)$ ab?",
    "answers": [
      "Erst $x$, dann $y$",
      "Erst $y$, dann $x$",
      "Nach Belieben wählen",
      "Der höchste Wert zuerst"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Merkregel: Erst gehen wir nach rechts ($x$), dann nach oben ($y$)."
  },
  {
    "id": "k6_ma_085",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wo liegt der Punkt $P(4|0)$ im Koordinatensystem?",
    "answers": [
      "Auf der $x$-Achse",
      "Auf der $y$-Achse",
      "Im Nullpunkt selbst",
      "Im freien Feld oben"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da der $y$-Wert $0$ ist, liegt der Punkt direkt auf der $x$-Achse bei $4$."
  },
  {
    "id": "k6_ma_086",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Welches Diagramm eignet sich besonders gut für Anteile am Ganzen?",
    "answers": [
      "Das Kreisdiagramm",
      "Das Liniendiagramm",
      "Das Säulendiagramm",
      "Das Punkt-Diagramm"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Kreisdiagramm ($360^\\circ$) stellt Prozentanteile anschaulich als Tortenstücke dar."
  },
  {
    "id": "k6_ma_087",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viel Grad im Kreisdiagramm entsprechen $50\\%$?",
    "answers": [
      "Genau $180^\\circ$ Winkel",
      "Genau $90^\\circ$ Winkel",
      "Genau $360^\\circ$ Winkel",
      "Genau $45^\\circ$ Winkel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$50\\%$ entspricht der Hälfte des Vollkreises ($360^\\circ : 2 = 180^\\circ$)."
  },
  {
    "id": "k6_ma_088",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie viel Grad im Kreisdiagramm entsprechen $25\\%$?",
    "answers": [
      "Genau $90^\\circ$ Winkel",
      "Genau $180^\\circ$ Winkel",
      "Genau $45^\\circ$ Winkel",
      "Genau $60^\\circ$ Winkel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$25\\%$ entspricht einem Viertelkreis ($360^\\circ : 4 = 90^\\circ$)."
  },
  {
    "id": "k6_ma_089",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Welches Diagramm stellt Verläufe (z. B. Temperaturen über Zeit) dar?",
    "answers": [
      "Das Liniendiagramm",
      "Das Kreisdiagramm",
      "Das Streudiagramm",
      "Die Strichliste"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Veränderungen im Zeitverlauf verbindet man am besten mit Punkten und Linien."
  },
  {
    "id": "k6_ma_090",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie berechnet man den arithmetischen Mittelwert (Durchschnitt)?",
    "answers": [
      "Summe : Anzahl Werte",
      "Höchster minus Tiefster",
      "Der Wert in der Mitte",
      "Häufigster Wert der Zahl"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Alle Werte addieren und die Summe durch die Anzahl der Werte dividieren."
  },
  {
    "id": "k6_ma_091",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Berechne den Mittelwert der Zahlen $2, 4, 6, 8$:",
    "answers": [
      "Der Mittelwert ist $5$",
      "Der Mittelwert ist $4$",
      "Der Mittelwert ist $6$",
      "Der Mittelwert ist $20$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Summe: $2+4+6+8 = 20$. Durch $4$ Werte teilen: $20 : 4 = 5$."
  },
  {
    "id": "k6_ma_092",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was versteht man unter der 'Spannweite' einer Datenreihe?",
    "answers": [
      "Maximum minus Minimum",
      "Summe aller Messwerte",
      "Mittelwert der Daten",
      "Anzahl aller Versuche"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Spannweite = Differenz zwischen dem größten Wert (Maximum) und kleinsten Wert (Minimum)."
  },
  {
    "id": "k6_ma_093",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Bestimme die Spannweite der Noten: $1, 2, 2, 3, 5$:",
    "answers": [
      "Die Spannweite ist $4$",
      "Die Spannweite ist $5$",
      "Die Spannweite ist $3$",
      "Die Spannweite ist $2$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Maximum ($5$) minus Minimum ($1$) = $5 - 1 = 4$."
  },
  {
    "id": "k6_ma_094",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was ist der 'Median' (Zentralwert) einer sortierten Datenreihe?",
    "answers": [
      "Der Wert genau mittig",
      "Der am häufigsten Wert",
      "Der allergrößte Wert",
      "Die Summe aller Werte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In einer geordneten Reihe steht der Median exakt in der Mitte."
  },
  {
    "id": "k6_ma_095",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Bestimme den Median der sortierten Reihe: $3, 5, 7, 9, 11$:",
    "answers": [
      "Der Median ist $7$",
      "Der Median ist $5$",
      "Der Median ist $9$",
      "Der Median ist $35$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Zahl $7$ steht genau an der $3$. Stelle von $5$ Werten."
  },
  {
    "id": "k6_ma_096",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie stellt man Strichlisten bei Datenerhebungen bündelnd dar?",
    "answers": [
      "In $5$er-Päckchen",
      "In $10$er-Blöcken",
      "In $3$er-Gruppen",
      "In $2$er-Paaren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Jeder 5. Strich wird quer gelegt, um $5$er-Blöcke schnell zu zählen."
  },
  {
    "id": "k6_ma_097",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Wie nennt man ein Diagramm mit waagerechten Balken?",
    "answers": [
      "Balkendiagramm",
      "Säulendiagramm",
      "Kreisdiagramm",
      "Punkt-Diagramm"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Waagerechte Streifen nennt man Balken, senkrechte Säulen."
  },
  {
    "id": "k6_ma_098",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was muss bei Diagrammen enthalten sein, damit man sie richtig versteht?",
    "answers": [
      "Achsenbeschriftung",
      "Bunte Farben allein",
      "Bilder von Zahlen",
      "Mittelwert-Rechnung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beschriftungen und Einheiten an den Achsen sind für die Lesbarkeit unverzichtbar."
  },
  {
    "id": "k6_ma_099",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Welchen Gesamtwinkel hat ein vollständiges Kreisdiagramm?",
    "answers": [
      "Winkel von $360^\\circ$",
      "Winkel von $180^\\circ$",
      "Winkel von $100^\\circ$",
      "Winkel von $90^\\circ$"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein voller Kreis hat immer $360^\\circ$."
  },
  {
    "id": "k6_ma_100",
    "category": "k6_mathe",
    "area": "schule",
    "grade": 6,
    "subject": "mathematik",
    "question": "Was beschreibt der 'Modalwert' (Modus) in einer Statistik?",
    "answers": [
      "Häufigster Wert",
      "Der höchste Wert",
      "Der kleinste Wert",
      "Der Mittelwert"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Modalwert ist der Wert, der in einer Datenmenge am häufigsten vorkommt."
  }
];

// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K6_MATHE2_QUESTIONS = K6_MATHE2_QUESTIONS;
}

if (typeof window !== 'undefined') window.K6_MATHE2_QUESTIONS = K6_MATHE2_QUESTIONS;
if (typeof registerQuestions === 'function') registerQuestions('K6_MATHE2_QUESTIONS', K6_MATHE2_QUESTIONS);
