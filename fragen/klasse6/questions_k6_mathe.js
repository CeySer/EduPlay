const K6_MATHE_QUESTIONS = [
  // ================================================================
  // 1. BRUCHRECHNUNG (25 Fragen)
  // ================================================================
  {
    id: "q6_m_001",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Was gibt der Zähler eines Bruches an?",
    answers: [
      "Wie viele Teile vom Ganzen genommen werden",
      "In wie viele Teile das Ganze geteilt wird",
      "Das Ergebnis nach dem Kürzen des Bruches",
      "Die Gesamtzahl aller Brüche in der Aufgabe"
    ],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Der Zähler (oben) zählt, wie viele Anteile genommen werden."
  },
  {
    id: "q6_m_002",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Was gibt der Nenner eines Bruches an?",
    answers: [
      "In wie viele gleich große Teile das Ganze geteilt ist",
      "Wie viele Teile insgesamt vom ganzen Bruch genommen werden",
      "Die Gesamtzahl aller Aufgaben in der heutigen Übung",
      "Der genaue Wert der Zahl direkt nach dem Komma"
    ],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Der Nenner (unten) benennt, in wie viele gleich große Teile das Ganze zerlegt wurde."
  },
  {
    id: "q6_m_003",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie viel ist 3/4 von 20?",
    answers: ["15", "12", "5", "10"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "20 : 4 = 5; 5 * 3 = 15."
  },
  {
    id: "q6_m_004",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie nennt man einen Bruch, bei dem der Zähler kleiner als der Nenner ist?",
    answers: ["Gemischte Zahl", "Stammbruch", "Echter Bruch", "Unechter Bruch"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "Bei einem echten Bruch ist der Wert kleiner als 1 (z. B. 2/3)."
  },
  {
    id: "q6_m_005",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wandle den unechten Bruch 11/4 in eine gemischte Zahl um.",
    answers: ["2 3/4", "2 1/4", "3 1/4", "2 1/2"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "11 : 4 = 2 Rest 3, also 2 Ganzes und 3/4."
  },
  {
    id: "q6_m_006",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wandle die gemischte Zahl 3 1/2 in einen unechten Bruch um.",
    answers: ["6/2", "5/2", "7/2", "8/2"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "3 * 2 + 1 = 7, also 7/2."
  },
  {
    id: "q6_m_007",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Was passiert beim Erweitern eines Bruches?",
    answers: [
      "Nur der Zähler wird mit einer Zahl multipliziert",
      "Zähler und Nenner werden beide durch dieselbe Zahl dividiert",
      "Nur der Nenner wird mit einer bestimmten Zahl multipliziert",
      "Zähler und Nenner werden mit derselben Zahl multipliziert"
    ],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "Beim Erweitern ändert sich der Wert des Bruches nicht, nur die Feineinteilung."
  },
  {
    id: "q6_m_008",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Erweitere den Bruch 2/5 mit der Zahl 3.",
    answers: ["6/15", "2/15", "6/5", "5/8"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "2 * 3 = 6 und 5 * 3 = 15, also 6/15."
  },
  {
    id: "q6_m_009",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Was passiert beim Kürzen eines Bruches?",
    answers: [
      "Zähler und Nenner werden hier beide miteinander multipliziert",
      "Vom Zähler wird einfach der Nenner abgezogen",
      "Der Bruch wird in eine Dezimalzahl umgewandelt",
      "Zähler und Nenner werden durch dieselbe Zahl dividiert"
    ],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "Kürzen macht die Zahlen in Zähler und Nenner kleiner, ohne den Gesamtwert zu verändern."
  },
  {
    id: "q6_m_010",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Kürze den Bruch 8/12 vollständig.",
    answers: ["3/4", "2/3", "1/2", "4/6"],
    correct: 1,
    difficulty: "leicht",
    points: 5,
    explanation: "Teilt man Zähler und Nenner durch 4, erhält man 2/3."
  },
  {
    id: "q6_m_011",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Welcher Bruch ist äquivalent (wertgleich) zu 1/2?",
    answers: ["2/3", "4/6", "3/5", "4/8"],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "4/8 lässt sich durch 4 kürzen und ergibt 1/2."
  },
  {
    id: "q6_m_012",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 2/7 + 3/7",
    answers: ["5/14", "5/7", "1/7", "6/7"],
    correct: 1,
    difficulty: "leicht",
    points: 5,
    explanation: "Bei gleichem Nenner werden nur die Zähler addiert: 2 + 3 = 5, Nenner bleibt 7."
  },
  {
    id: "q6_m_013",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 5/9 - 2/9",
    answers: ["7/9 (falsch gerechnet)", "3/0 (nicht erlaubt)", "3/9 (gekürtzt 1/3)", "3/18 (falsch gekürzt)"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "5 - 2 = 3. Das ergibt 3/9, gekürzt 1/3."
  },
  {
    id: "q6_m_014",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Was ist der kleinste gemeinsame Hauptnenner von 1/4 und 1/6?",
    answers: ["12", "10", "6", "24"],
    correct: 0,
    difficulty: "mittel",
    points: 5,
    explanation: "Das kleinste gemeinsame Vielfache (kgV) von 4 und 6 ist 12."
  },
  {
    id: "q6_m_015",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 1/3 + 1/4",
    answers: ["2/12", "7/12", "5/12", "2/7"],
    correct: 1,
    difficulty: "mittel",
    points: 5,
    explanation: "Gleichnamig machen auf Zwölftel: 4/12 + 3/12 = 7/12."
  },
  {
    id: "q6_m_016",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 3/4 - 1/2",
    answers: ["1/4", "2/4", "1/2", "2/2"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "1/2 erweitern zu 2/4. Dann 3/4 - 2/4 = 1/4."
  },
  {
    id: "q6_m_017",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie multipliziert man einen Bruch mit einer ganzen Zahl?",
    answers: [
      "Man multipliziert Zähler und Nenner mit der Zahl",
      "Man multipliziert nur den Zähler mit der Zahl",
      "Man dividiert den Nenner durch die Zahl",
      "Man addiert die Zahl zum Zähler"
    ],
    correct: 1,
    difficulty: "leicht",
    points: 5,
    explanation: "Bruch mal ganze Zahl = (Zähler * Zahl) / Nenner."
  },
  {
    id: "q6_m_018",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 2/5 * 3",
    answers: ["6/5 (1 1/5)", "2/15 (falsch)", "5/5 (falsch)", "6/15 (falsch)"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "2 * 3 = 6, also 6/5 = 1 1/5."
  },
  {
    id: "q6_m_019",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 6/7 : 3",
    answers: ["2/21", "2/7", "18/7", "6/21"],
    correct: 1,
    difficulty: "mittel",
    points: 5,
    explanation: "Man teilt den Zähler durch 3: 6 : 3 = 2, also 2/7."
  },
  {
    id: "q6_m_020",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie multipliziert man zwei Brüche miteinander?",
    answers: [
      "Zähler mal Zähler und Nenner mal Nenner",
      "Über Kreuz die Zahlen multiplizieren",
      "Nur die beiden Zähler miteinander rechnen",
      "Erst die Nenner gleichnamig machen"
    ],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Die Merkregel lautet: Zähler mal Zähler, Nenner mal Nenner!"
  },
  {
    id: "q6_m_021",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 2/3 * 3/4",
    answers: ["1/4 (falsch)", "6/7 (falsch)", "1/2 (6/12)", "5/7 (falsch)"],
    correct: 2,
    difficulty: "mittel",
    points: 5,
    explanation: "(2 * 3) / (3 * 4) = 6/12 = 1/2."
  },
  {
    id: "q6_m_022",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Was ist der Kehrwert von 3/5?",
    answers: ["1/5", "5/3", "-3/5", "3/10"],
    correct: 1,
    difficulty: "leicht",
    points: 5,
    explanation: "Beim Kehrwert vertauscht man Zähler und Nenner."
  },
  {
    id: "q6_m_023",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie dividiert man durch einen Bruch?",
    answers: [
      "Man zieht die Brüche voneinander ab",
      "Man addiert die Kehrwerte",
      "Man multipliziert mit dem Kehrwert des zweiten Bruches",
      "Man dividiert Zähler durch Zähler und Nenner durch Nenner"
    ],
    correct: 2,
    difficulty: "mittel",
    points: 5,
    explanation: "Teilen durch einen Bruch bedeutet Vervielfachen mit seinem Kehrwert."
  },
  {
    id: "q6_m_024",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 1/2 : 1/4",
    answers: ["2", "4", "1/8", "1/2"],
    correct: 0,
    difficulty: "mittel",
    points: 5,
    explanation: "1/2 * 4/1 = 4/2 = 2."
  },
  {
    id: "q6_m_025",
    category: "k6_mathe",
    topic: "bruchrechnung_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Ein Rezept benötigt 3/4 kg Mehl. Du möchtest die Hälfte der Menge machen. Wie viel Mehl brauchst du?",
    answers: ["1/4 kg", "6/8 kg", "3/2 kg", "3/8 kg"],
    correct: 3,
    difficulty: "mittel",
    points: 5,
    explanation: "3/4 : 2 = 3/8 kg."
  },

  // ================================================================
  // 2. DEZIMALZAHLEN & KOMMARECHNUNG (25 Fragen)
  // ================================================================
  {
    id: "q6_m_026",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Welcher Dezimalzahl entspricht der Bruch 1/2?",
    answers: ["0,2", "0,12", "0,05", "0,5"],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "1/2 = 5/10 = 0,5."
  },
  {
    id: "q6_m_027",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Welcher Dezimalzahl entspricht der Bruch 3/4?",
    answers: ["0,3", "0,34", "0,75", "0,43"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "3/4 = 75/100 = 0,75."
  },
  {
    id: "q6_m_028",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Welcher Bruch entspricht der Dezimalzahl 0,25?",
    answers: ["1/25", "1/5", "1/4", "2/5"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "0,25 = 25/100 = 1/4."
  },
  {
    id: "q6_m_029",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Welche Stelle in der Stellenwerttafel steht direkt rechts vom Komma?",
    answers: ["Zehntelstelle (z)", "Zehnerstelle (Z)", "Tausendstelstelle (t)", "Hundertstelstelle (h)"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Die erste Nachkommastelle zeigt die Zehntel."
  },
  {
    id: "q6_m_030",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Welche der folgenden Zahlen ist die größte?",
    answers: ["0,25", "0,299", "0,099", "0,3"],
    correct: 3,
    difficulty: "mittel",
    points: 5,
    explanation: "0,3 entspricht 0,300 und ist somit größer als 0,299."
  },
  {
    id: "q6_m_031",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Runde die Zahl 4,837 auf Zehntel.",
    answers: ["4,8", "4,84", "5,0", "4,9"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Die Hundertstelziffer ist 3 (abrunden), also bleibt es bei 4,8."
  },
  {
    id: "q6_m_032",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Runde die Zahl 12,658 auf Hundertstel.",
    answers: ["12,60", "12,65", "12,66", "12,70"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "Die Tausendstelziffer ist 8 (aufrunden), aus 5 wird 6 -> 12,66."
  },
  {
    id: "q6_m_033",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 3,4 + 2,15",
    answers: ["5,45", "5,19", "5,55", "6,05"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "3,40 + 2,15 = 5,55."
  },
  {
    id: "q6_m_034",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 7,8 - 2,35",
    answers: ["4,45", "5,55", "5,15", "5,45"],
    correct: 3,
    difficulty: "mittel",
    points: 5,
    explanation: "7,80 - 2,35 = 5,45."
  },
  {
    id: "q6_m_035",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 0,4 * 100",
    answers: ["4", "400", "0,04", "40"],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "Beim Multiplizieren mit 100 rückt das Komma um 2 Stellen nach rechts."
  },
  {
    id: "q6_m_036",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 3,5 * 0,2",
    answers: ["0,35", "7", "0,07", "0,7"],
    correct: 3,
    difficulty: "mittel",
    points: 5,
    explanation: "35 * 2 = 70. Zusammen 2 Nachkommastellen -> 0,70 = 0,7."
  },
  {
    id: "q6_m_037",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 12,5 : 10",
    answers: ["12,05", "0,125", "1,25", "125"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "Bei der Division durch 10 wandert das Komma um 1 Stelle nach links."
  },
  {
    id: "q6_m_038",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 4,8 : 0,6",
    answers: ["8", "80", "0,8", "0,08"],
    correct: 0,
    difficulty: "mittel",
    points: 5,
    explanation: "Komma bei beiden um 1 Stelle verschieben: 48 : 6 = 8."
  },
  {
    id: "q6_m_039",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Was muss man bei der schriftlichen Addition von Dezimalzahlen dringend beachten?",
    answers: [
      "Kommas werden ignoriert und am Ende weggelassen",
      "Man muss immer von links nach rechts rechnen",
      "Die Zahl mit den meisten Stellen steht unten",
      "Die Kommas müssen genau untereinander stehen"
    ],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "Komma unter Komma schreiben sichert die richtige Stellenwertzuordnung."
  },
  {
    id: "q6_m_040",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie verschiebt sich das Komma bei einer Division durch 1000?",
    answers: [
      "Um 2 Stellen nach links",
      "Gar nicht",
      "Um 3 Stellen nach links",
      "Um 3 Stellen nach rechts"
    ],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "Drei Nullen = drei Stellen nach links rücken."
  },
  {
    id: "q6_m_041",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wandle 0,08 in einen vollständig gekürzten Bruch um.",
    answers: ["8/10", "2/25", "4/50", "1/8"],
    correct: 1,
    difficulty: "mittel",
    points: 5,
    explanation: "0,08 = 8/100. Kürzen durch 4 ergibt 2/25."
  },
  {
    id: "q6_m_042",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Welcher Dezimalzahl entspricht der Bruch 1/8?",
    answers: ["0,18", "0,125", "0,215", "0,25"],
    correct: 1,
    difficulty: "mittel",
    points: 5,
    explanation: "1 : 8 = 0,125."
  },
  {
    id: "q6_m_043",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Was bedeutet die Schreibweise 0,333... (0,3 mit Periode)?",
    answers: [
      "Die Ziffer 3 wiederholt sich unendlich oft",
      "Die Zahl endet genau nach der dritten Drei",
      "Es ist ungefähr der gerundete Wert 0,34",
      "Man teilt die Zahl einfach durch drei"
    ],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Eine periodische Dezimalzahl hat ein sich unendlich wiederholendes Muster."
  },
  {
    id: "q6_m_044",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie viel sind 2,5 kg umgerechnet in Gramm?",
    answers: ["2500 g", "250 g", "25 g", "25000 g"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "1 kg = 1000 g; 2,5 * 1000 = 2500 g."
  },
  {
    id: "q6_m_045",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Ein Buch kostet 14,95 €. Wie viel Rückgeld erhält man von einem 20-€-Schein?",
    answers: ["4,05 €", "5,15 €", "5,05 €", "6,05 €"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "20,00 € - 14,95 € = 5,05 €."
  },
  {
    id: "q6_m_046",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 0,05 * 0,04",
    answers: ["0,002", "0,02", "0,0002", "0,2"],
    correct: 0,
    difficulty: "schwer",
    points: 5,
    explanation: "5 * 4 = 20. Insgesamt 4 Nachkommastellen -> 0,0020 = 0,002."
  },
  {
    id: "q6_m_047",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 1,21 : 1,1",
    answers: ["0,11", "1,1", "1,01", "11"],
    correct: 1,
    difficulty: "schwer",
    points: 5,
    explanation: "Verschiebe Komma um 1 Stelle: 12,1 : 11 = 1,1."
  },
  {
    id: "q6_m_048",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wandle 7/100 in eine Dezimalzahl um.",
    answers: ["0,007", "0,07", "0,7", "7,0"],
    correct: 1,
    difficulty: "leicht",
    points: 5,
    explanation: "7 Hundertstel = 0,07."
  },
  {
    id: "q6_m_049",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: 10 - 3,45",
    answers: ["7,55", "7,45", "6,55", "6,65"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "10,00 - 3,45 = 6,55."
  },
  {
    id: "q6_m_050",
    category: "k6_mathe",
    topic: "dezimalzahlen_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Welches Zeichen gehört in die Lücke: 0,405 ___ 0,45 ?",
    answers: [">= (größer gleich)", "= (gleich)", "> (größer als)", "< (kleiner als)"],
    correct: 3,
    difficulty: "mittel",
    points: 5,
    explanation: "0,405 verglichen mit 0,450: 405 ist kleiner als 450."
  },

  // ================================================================
  // 3. GEOMETRIE (25 Fragen)
  // ================================================================
  {
    id: "q6_m_051",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie nennt man einen Winkel, der kleiner als 90° ist?",
    answers: ["Stumpfer Winkel", "Spitzer Winkel", "Rechter Winkel", "Gestreckter Winkel"],
    correct: 1,
    difficulty: "leicht",
    points: 5,
    explanation: "Winkel zwischen 0° und 90° sind spitz."
  },
  {
    id: "q6_m_052",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie groß ist ein rechter Winkel?",
    answers: ["Genau 360°", "Genau 45°", "Genau 90°", "Genau 180°"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "Ein rechter Winkel misst exakt 90°."
  },
  {
    id: "q6_m_053",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie nennt man einen Winkel zwischen 90° und 180°?",
    answers: ["Vollwinkel", "Stumpfer Winkel", "Überstumpfer Winkel", "Spitzer Winkel"],
    correct: 1,
    difficulty: "leicht",
    points: 5,
    explanation: "Winkel größer als 90° und kleiner als 180° nennt man stumpf."
  },
  {
    id: "q6_m_054",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie groß ist ein gestreckter Winkel?",
    answers: ["Genau 180°", "Genau 90°", "Genau 270°", "Genau 360°"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Ein gestreckter Winkel bildet eine gerade Linie und misst 180°."
  },
  {
    id: "q6_m_055",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie nennt man einen Winkel zwischen 180° und 360°?",
    answers: ["Stumpfer Winkel (90-180°)", "Überstumpfer Winkel", "Gestreckter Winkel (180°)", "Vollwinkel (360°)"],
    correct: 1,
    difficulty: "mittel",
    points: 5,
    explanation: "Winkel, die größer als 180° sind, heißen überstumpf."
  },
  {
    id: "q6_m_056",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie hängen Radius r und Durchmesser d eines Kreises zusammen?",
    answers: ["d = 2 * r", "d = r + 2", "r = 2 * d", "d = r * r"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Der Durchmesser d geht durch die Mitte und ist doppelt so lang wie der Radius r."
  },
  {
    id: "q6_m_057",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Ein Kreis hat den Radius r = 4 cm. Wie groß ist sein Durchmesser?",
    answers: ["2 cm", "16 cm", "4 cm", "8 cm"],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "d = 2 * 4 cm = 8 cm."
  },
  {
    id: "q6_m_058",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Ein Kreis hat den Durchmesser d = 14 cm. Wie lang ist sein Radius?",
    answers: ["3,5 cm", "7 cm", "14 cm", "28 cm"],
    correct: 1,
    difficulty: "leicht",
    points: 5,
    explanation: "r = d : 2 = 14 : 2 = 7 cm."
  },
  {
    id: "q6_m_059",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie groß ist die Winkelsumme in jedem beliebigen Dreieck?",
    answers: ["180°", "360°", "90°", "270°"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Die drei Innenwinkel eines Dreiecks ergeben zusammen stets 180°."
  },
  {
    id: "q6_m_060",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie groß ist die Winkelsumme in jedem Viereck?",
    answers: ["270°", "180°", "360°", "540°"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "Jedes Viereck lässt sich in zwei Dreiecke zerlegen: 2 * 180° = 360°."
  },
  {
    id: "q6_m_061",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie berechnet man den Flächeninhalt A eines Parallelogramms?",
    answers: [
      "A = Grundseite g * Höhe h",
      "A = (g mal h) geteilt durch 2",
      "A = Seite a plus Seite b",
      "A = 2 mal g plus 2 mal h"
    ],
    correct: 0,
    difficulty: "mittel",
    points: 5,
    explanation: "A = g * h."
  },
  {
    id: "q6_m_062",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie berechnet man den Flächeninhalt A eines Dreiecks?",
    answers: [
      "A = / 2",
      "A = Grundseite g * Höhe h",
      "A = a + b + c",
      "A = g * h * 2"
    ],
    correct: 0,
    difficulty: "mittel",
    points: 5,
    explanation: "Ein Dreieck ist halb so groß wie ein Parallelogramm mit gleicher Grundseite und Höhe."
  },
  {
    id: "q6_m_063",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Ein Dreieck hat eine Grundseite g = 6 cm und eine Höhe h = 4 cm. Wie groß ist die Fläche?",
    answers: ["12 cm²", "16 cm²", "24 cm²", "10 cm²"],
    correct: 0,
    difficulty: "mittel",
    points: 5,
    explanation: "A = (6 * 4) / 2 = 24 / 2 = 12 cm²."
  },
  {
    id: "q6_m_064",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Ein Parallelogramm hat g = 8 cm und h = 5 cm. Wie groß ist sein Flächeninhalt?",
    answers: ["40 cm²", "20 cm²", "26 cm²", "13 cm²"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "A = 8 * 5 = 40 cm²."
  },
  {
    id: "q6_m_065",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie berechnet man das Volumen V (Rauminhalt) eines Quaders?",
    answers: [
      "V = a mal b plus c gerechnet",
      "V = sechsmal die Fläche a mal a",
      "V = 2 mal a plus 2 mal b plus 2 mal c",
      "V = Länge a * Breite b * Höhe c"
    ],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "V = a * b * c."
  },
  {
    id: "q6_m_066",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Ein Würfel hat die Kantenlänge a = 3 cm. Wie groß ist sein Volumen V?",
    answers: ["27 cm³", "18 cm³", "9 cm³", "54 cm³"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "V = 3 * 3 * 3 = 27 cm³."
  },
  {
    id: "q6_m_067",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie berechnet man die Oberfläche O eines Würfels mit Kantenlänge a?",
    answers: ["O = 4 * a²", "O = 6 * a²", "O = 12 * a", "O = a³"],
    correct: 1,
    difficulty: "mittel",
    points: 5,
    explanation: "Der Würfel besitzt 6 quadratische Begrenzungsflächen."
  },
  {
    id: "q6_m_068",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Ein Würfel hat eine Kantenlänge von 2 cm. Wie groß ist seine Oberfläche O?",
    answers: ["12 cm²", "16 cm²", "8 cm²", "24 cm²"],
    correct: 3,
    difficulty: "mittel",
    points: 5,
    explanation: "Eine Fläche = 2 * 2 = 4 cm². Sechs Flächen = 6 * 4 = 24 cm²."
  },
  {
    id: "q6_m_069",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie viele Kubikzentimeter (cm³) entsprechen genau 1 Liter?",
    answers: ["10 cm³", "10000 cm³", "1000 cm³", "100 cm³"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "1 Liter = 1 dm³ = 1000 cm³."
  },
  {
    id: "q6_m_070",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie viele Flächen hat ein Quader?",
    answers: ["12 Flächen", "8 Flächen", "4 Flächen", "6 Flächen"],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "Ein Quader hat 6 Begrenzungsflächen (je 2 gegenüberliegende sind deckungsgleich)."
  },
  {
    id: "q6_m_071",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie viele Ecken hat ein Quader?",
    answers: ["8 Ecken", "12 Ecken", "6 Ecken", "16 Ecken"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Ein Quader besitzt 8 Ecken."
  },
  {
    id: "q6_m_072",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie viele Kanten hat ein Quader?",
    answers: ["10 Kanten", "6 Kanten", "12 Kanten", "8 Kanten"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "Ein Quader hat 12 Kanten."
  },
  {
    id: "q6_m_073",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Ein Quader hat a = 4 cm, b = 3 cm und c = 5 cm. Wie groß ist sein Volumen V?",
    answers: ["60 cm³", "24 cm³", "12 cm³", "30 cm³"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "V = 4 * 3 * 5 = 60 cm³."
  },
  {
    id: "q6_m_074",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Welches Messgerät verwendet man zum Messen und Zeichnen von Winkeln?",
    answers: ["Waage", "Taschenrechner", "Geodreieck", "Zirkel"],
    correct: 2,
    difficulty: "leicht",
    points: 5,
    explanation: "Mit dem Geodreieck lassen sich Winkel gradgenau ablesen und zeichnen."
  },
  {
    id: "q6_m_075",
    category: "k6_mathe",
    topic: "geometrie_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Zwei Winkel α und β ergänzen sich zu einem gestreckten Winkel (180°). Wenn α = 70° ist, wie groß ist β?",
    answers: ["20°", "90°", "120°", "110°"],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "180° - 70° = 110°."
  },

  // ================================================================
  // 4. NEGATIVE ZAHLEN, KOORDINATENSYSTEM & DATEN (25 Fragen)
  // ================================================================
  {
    id: "q6_m_076",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Welches Vorzeichen steht vor einer negativen Zahl?",
    answers: ["Minuszeichen (-)", "Malzeichen (*)", "Pluszeichen (+)", "Gleichheitszeichen (=)"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Negative Zahlen tragen ein Minuszeichen (-)."
  },
  {
    id: "q6_m_077",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Welche Zahl liegt auf der Zahlengerade weiter links: -5 oder -2?",
    answers: ["-5", "0", "-2", "Beide liegen gleich"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Je kleiner eine Zahl, desto weiter links liegt sie auf der Zahlengerade (-5 ist kleiner als -2)."
  },
  {
    id: "q6_m_078",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Welche Aussage über negative Zahlen ist korrekt?",
    answers: ["-3 ist kleiner als -10", "-3 ist größer als -7", "-7 ist größer als -3", "-5 ist gleich +5"],
    correct: 1,
    difficulty: "leicht",
    points: 5,
    explanation: "-3 liegt weiter rechts als -7, ist also größer."
  },
  {
    id: "q6_m_079",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Die Temperatur beträgt morgens -4 °C und steigt tagsüber um 9 °C. Wie warm ist es am Nachmittag?",
    answers: ["-5 °C", "+5 °C", "+13 °C", "-13 °C"],
    correct: 1,
    difficulty: "leicht",
    points: 5,
    explanation: "-4 + 9 = +5 °C."
  },
  {
    id: "q6_m_080",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Die Temperatur beträgt +3 °C und fällt in der Nacht um 8 °C. Wie kalt wird es?",
    answers: ["-11 °C", "-5 °C", "+5 °C", "-3 °C"],
    correct: 1,
    difficulty: "leicht",
    points: 5,
    explanation: "3 - 8 = -5 °C."
  },
  {
    id: "q6_m_081",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Was versteht man unter dem Betrag einer Zahl (z. B. |-8|)?",
    answers: [
      "Das Quadrat der Zahl, also die Zahl mal sich selbst",
      "Die Gegenzahl mit dem umgekehrten Vorzeichen",
      "Der Kehrwert der Zahl, also eins geteilt durch sie",
      "Den Abstand der Zahl zur Null auf der Zahlengerade"
    ],
    correct: 3,
    difficulty: "mittel",
    points: 5,
    explanation: "Der Betrag ist nie negativ: |-8| = 8."
  },
  {
    id: "q6_m_082",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Was ist die Gegenzahl von -12?",
    answers: ["-1/12", "+12", "-12", "0"],
    correct: 1,
    difficulty: "leicht",
    points: 5,
    explanation: "Die Gegenzahl liegt spiegelsymmetrisch zur Null: aus -12 wird +12."
  },
  {
    id: "q6_m_083",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: -4 + 7",
    answers: ["3", "-3", "-11", "11"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "-4 + 7 = 3."
  },
  {
    id: "q6_m_084",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: -3 - 5",
    answers: ["-2", "2", "8", "-8"],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "Vom Schuldenstand -3 werden weitere 5 abgezogen -> -8."
  },
  {
    id: "q6_m_085",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "In welchem Quadranten des Koordinatensystems liegt der Punkt P(-3 | 4)?",
    answers: ["3. Quadrant (unten links)", "2. Quadrant (oben links)", "4. Quadrant (unten rechts)", "1. Quadrant (oben rechts)"],
    correct: 1,
    difficulty: "mittel",
    points: 5,
    explanation: "x ist negativ (-3) und y positiv (+4) -> 2. Quadrant."
  },
  {
    id: "q6_m_086",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Welche Koordinate nennt man bei der Angabe eines Punktes P(x | y) zuerst?",
    answers: ["Der Nullpunkt (Ursprung)", "Der Höhenwert der Achse", "y-Koordinate (der Hochwert)", "x-Koordinate (Rechtswert)"],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "Merkregel: Zuerst geht man auf der x-Achse entlang, dann auf der y-Achse."
  },
  {
    id: "q6_m_087",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wo liegt der Ursprung (Nullpunkt) des Koordinatensystems?",
    answers: ["(1 | 1)", "(0 | 1)", "(1 | 0)", "(0 | 0)"],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "Der Schnittpunkt der Achsen hat die Koordinaten (0 | 0)."
  },
  {
    id: "q6_m_088",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Was gibt die 'absolute Häufigkeit' bei einer Datenerhebung an?",
    answers: [
      "Die genaue Anzahl, wie oft ein Ereignis eingetreten ist",
      "Den Prozentwert im Vergleich zu allen Versuchen",
      "Den Durchschnittswert aller gemessenen Ergebnisse",
      "Den Anteil im Vergleich zur gesamten Anzahl aller Versuche"
    ],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Die absolute Häufigkeit ist eine konkrete Anzahl (z. B. 5 Schüler)."
  },
  {
    id: "q6_m_089",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Was gibt die 'relative Häufigkeit' an?",
    answers: [
      "Den Anteil der absoluten Häufigkeit an der Gesamtzahl",
      "Die Differenz von größtem und kleinstem Wert",
      "Nur die Anzahl der im Test gemachten Fehler",
      "Die Gesamtzahl aller in der Studie durchgeführten Versuche"
    ],
    correct: 0,
    difficulty: "mittel",
    points: 5,
    explanation: "Relative Häufigkeit = Absolute Häufigkeit / Gesamtzahl."
  },
  {
    id: "q6_m_090",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie berechnet man das arithmetische Mittel (den Durchschnitt) mehrerer Zahlen?",
    answers: [
      "Der Wert, der ganz genau in der Mitte aller Zahlen steht",
      "Summe aller Werte geteilt durch die Anzahl der Werte",
      "Die Summe aller Werte einfach nochmal verdoppelt",
      "Größter Wert minus kleinster Wert der Reihe"
    ],
    correct: 1,
    difficulty: "leicht",
    points: 5,
    explanation: "Durchschnitt = Summe aller Werte / Anzahl der Werte."
  },
  {
    id: "q6_m_091",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne den Notendurchschnitt folgender fünf Arbeiten: 2, 3, 1, 4, 2.",
    answers: ["3,0", "2,0", "2,4", "2,5"],
    correct: 2,
    difficulty: "mittel",
    points: 5,
    explanation: "Summe: 2 + 3 + 1 + 4 + 2 = 12. 12 : 5 = 2,4."
  },
  {
    id: "q6_m_092",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Was versteht man unter der Spannweite einer Datenreihe?",
    answers: [
      "Den Mittelwert aller Zahlen der kompletten Datenreihe zusammen",
      "Die Differenz zwischen dem größten und dem kleinsten Wert",
      "Die Anzahl aller Messwerte in der gesamten Datenreihe",
      "Den am häufigsten vorkommenden Wert in der Datenreihe"
    ],
    correct: 1,
    difficulty: "leicht",
    points: 5,
    explanation: "Spannweite = Maximum - Minimum."
  },
  {
    id: "q6_m_093",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Bestimme die Spannweite der Datenreihe: 3, 7, 2, 12, 5.",
    answers: ["9", "5", "12", "10"],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "Größter Wert (12) - kleinster Wert (2) = 10."
  },
  {
    id: "q6_m_094",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie groß ist die Wahrscheinlichkeit, bei einem fairen 6-seitigen Würfel eine '4' zu würfeln?",
    answers: ["1/6", "1/4", "4/6", "1/2"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Es gibt 1 günstige Zahl (die 4) von 6 möglichen Zahlen."
  },
  {
    id: "q6_m_095",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie groß ist die Wahrscheinlichkeit, bei einem Würfel eine gerade Zahl (2, 4 oder 6) zu würfeln?",
    answers: ["3/6 (gekürtzt 1/2)", "2/6 (falsch gerechnet)", "5/6 (falsch)", "1/6 (falsch)"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "3 günstige Ergebnisse (2, 4, 6) von 6 möglichen -> 3/6 = 1/2."
  },
  {
    id: "q6_m_096",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Wie nennt man ein Zufallsexperiment, bei dem alle möglichen Ergebnisse gleich wahrscheinlich sind?",
    answers: ["Bruch-Experiment", "Gauß-Experiment", "Symmetrie-Experiment", "Laplace-Experiment"],
    correct: 3,
    difficulty: "mittel",
    points: 5,
    explanation: "Ein ideales Experiment mit gleich korrekten Gewinnchancen heißt Laplace-Experiment."
  },
  {
    id: "q6_m_097",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: -10 + (-5)",
    answers: ["+5", "-15", "+15", "-5"],
    correct: 1,
    difficulty: "mittel",
    points: 5,
    explanation: "-10 - 5 = -15."
  },
  {
    id: "q6_m_098",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Berechne: -8 - (-3)",
    answers: ["+5", "-5", "-11", "+11"],
    correct: 1,
    difficulty: "schwer",
    points: 5,
    explanation: "Minus und Minus ergibt Plus: -8 + 3 = -5."
  },
  {
    id: "q6_m_099",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Bei 20 Würfen wurde 5-mal eine '6' gewürfelt. Wie hoch ist die relative Häufigkeit?",
    answers: ["6/20 als falsches Ergebnis", "5/6 (falsch gerechnet)", "5/20 (gekürtzt 1/4 bzw. 25%)", "20/5 (Zähler und Nenner vertauscht)"],
    correct: 2,
    difficulty: "mittel",
    points: 5,
    explanation: "5 von 20 Versuchen = 5/20 = 1/4 = 25 %."
  },
  {
    id: "q6_m_100",
    category: "k6_mathe",
    topic: "negative_zahlen_daten_k6",
    area: "schule",
    grade: 6,
    subject: "mathematik",
    question: "Welcher der folgenden Punkte liegt direkt auf der x-Achse?",
    answers: ["(1 | 1)", "(0 | 4)", "(-2 | 3)", "(4 | 0)"],
    correct: 3,
    difficulty: "leicht",
    points: 5,
    explanation: "Wenn die y-Koordinate 0 ist, liegt der Punkt auf der x-Achse."
  },


  // ================================================================
// KLASSE 6 - MATHEMATIK (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

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
      "Den Wert des Ganzen",
      "Das Ergebnis der Summe",
      "Gesamtzahl aller Abschnitte"
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
      "Das Produkt der Summe",
      "Den Wert des Zählers"
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
      "Ergibt den Bruch $\\frac{3}{2}$",
      "Ergibt den Bruch $\\frac{1}{6}$",
      "Ergibt den Bruch $\\frac{3}{6}$",
      "Ergibt den Bruch $\\frac{4}{5}$"
    ],
    "correct": 2,
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
      "Ergibt den Bruch $\\frac{1}{4}$",
      "Ergibt den Bruch $\\frac{2}{3}$",
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
      "Dezimaler Bruchraum",
      "Echter Bruchanteil",
      "Unechter Bruchwert",
      "Gemischter Zehner"
    ],
    "correct": 2,
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
      "Ergibt die Zahl $1\\frac{4}{3}$",
      "Ergibt die Zahl $2\\frac{2}{3}$",
      "Ergibt die Zahl $2\\frac{1}{3}$",
      "Ergibt die Zahl $3\\frac{1}{3}$"
    ],
    "correct": 2,
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
      "Ergibt den Bruch $\\frac{1}{5}$",
      "Ergibt den Bruch $\\frac{2}{25}$",
      "Ergibt den Bruch $\\frac{3}{10}$"
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
      "Ergibt den Bruch $\\frac{7}{7}$",
      "Ergibt den Bruch $\\frac{2}{7}$",
      "Ergibt den Bruch $\\frac{3}{7}$",
      "Ergibt den Bruch $\\frac{3}{0}$"
    ],
    "correct": 2,
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
      "Der Hauptnenner ist $7$",
      "Der Hauptnenner ist $12$",
      "Der Hauptnenner ist $24$",
      "Der Hauptnenner ist $6$"
    ],
    "correct": 1,
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
      "Ergibt den Bruch $\\frac{2}{4}$",
      "Ergibt den Bruch $\\frac{1}{8}$"
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
      "Nur die beiden Zähler addieren",
      "Zähler $\\cdot$ Nenner / Nenner $\\cdot$ Zähler",
      "Zähler $\\cdot$ Zähler / Nenner $\\cdot$ Nenner",
      "Umberkreuz das Ganze kreuzen"
    ],
    "correct": 2,
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
      "Ergibt den Bruch $\\frac{6}{7}$",
      "Ergibt den Bruch $\\frac{5}{7}$",
      "Ergibt den Bruch $\\frac{2}{4}$",
      "Ergibt den Bruch $\\frac{1}{2}$"
    ],
    "correct": 3,
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
      "Der Kehrwert ist $\\frac{4}{1}$",
      "Der Kehrwert ist $-\\frac{4}{5}$",
      "Der Kehrwert ist $\\frac{1}{5}$"
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
      "Zähler durch Nenner teilen",
      "Beide Nenner subtrahieren",
      "Mit dem Kehrwert malnehmen",
      "Einfach die Nenner tauschen"
    ],
    "correct": 2,
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
      "Das Ergebnis ist $\\frac{1}{8}$",
      "Das Ergebnis ist $2$",
      "Das Ergebnis ist $\\frac{1}{2}$",
      "Das Ergebnis ist $4$"
    ],
    "correct": 1,
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
      "Beide Brüche sind gleich",
      "Der Bruch $\\frac{1}{4}$ ist größer",
      "Der Bruch $\\frac{1}{3}$ ist größer",
      "Kann man nicht vergleichen"
    ],
    "correct": 2,
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
      "Die Dezimalzahl $0{,}100$",
      "Die Dezimalzahl $1{,}0$",
      "Die Dezimalzahl $0{,}01$"
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
      "Die gesuchte Zahl $12$",
      "Die gesuchte Zahl $10$",
      "Die gesuchte Zahl $6$",
      "Die gesuchte Zahl $8$"
    ],
    "correct": 3,
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
      "Die Hundertstelstelle",
      "Die Tausendstelstelle",
      "Die Einerstelle",
      "Die Zehntelstelle"
    ],
    "correct": 3,
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
      "Die Kommazahl $3{,}00$",
      "Die Kommazahl $0{,}3$",
      "Die Kommazahl $0{,}03$",
      "Die Kommazahl $0{,}003$"
    ],
    "correct": 2,
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
      "Ergibt das Ergebnis $6{,}1$",
      "Ergibt das Ergebnis $5{,}8$",
      "Ergibt das Ergebnis $5{,}10$",
      "Ergibt das Ergebnis $5{,}9$"
    ],
    "correct": 3,
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
      "Ergibt das Ergebnis $4{,}5$",
      "Ergibt das Ergebnis $5{,}6$",
      "Ergibt das Ergebnis $5{,}3$",
      "Ergibt das Ergebnis $5{,}5$"
    ],
    "correct": 3,
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
      "Zahlen nur aufrunden",
      "Komma unter Komma",
      "Komma ganz weglassen",
      "Rechtsbündig schreiben"
    ],
    "correct": 1,
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
      "Eine Stelle nach links",
      "Das Komma bleibt gleich",
      "Eine Stelle nach rechts",
      "Zwei Stellen nach rechts"
    ],
    "correct": 2,
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
      "Das Ergebnis ist $4$",
      "Das Ergebnis ist $40$",
      "Das Ergebnis ist $400$",
      "Das Ergebnis ist $0{,}04$"
    ],
    "correct": 1,
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
      "Es verschiebt sich nie",
      "Zwei Stellen nach links",
      "Eine Stelle nach links",
      "Zwei Stellen nach rechts"
    ],
    "correct": 1,
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
      "Das Ergebnis ist $0{,}035$",
      "Das Ergebnis ist $35$",
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
      "Differenz der Stellen",
      "Immer genau zwei Stellen",
      "Summe der Kommastellen",
      "Anzahl der ersten Zahl"
    ],
    "correct": 2,
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
      "Ergibt den Wert $0{,}006$",
      "Ergibt den Wert $6{,}0$",
      "Ergibt den Wert $0{,}6$"
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
      "Gerundet auf $5{,}0$",
      "Gerundet auf $4{,}3$",
      "Gerundet auf $4{,}0$",
      "Gerundet auf $4{,}4$"
    ],
    "correct": 3,
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
      "Bei $0, 1, 2, 3, 4$",
      "Ausschließlich bei $5$",
      "Nur bei $8$ und $9$",
      "Bei $5, 6, 7, 8, 9$"
    ],
    "correct": 3,
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
      "Die Zahl $0{,}49$ ist größer",
      "Beide Zahlen sind gleich",
      "Lässt sich nicht vergleichen",
      "Die Zahl $0{,}5$ ist größer"
    ],
    "correct": 3,
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
      "Abgerundete Dezimalzahl",
      "Unechte Kommazahl mit Rest",
      "Periodische Kommazahl",
      "Endliche Kommazahl"
    ],
    "correct": 2,
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
      "Dezimalzahl $0{,}14$",
      "Dezimalzahl $0{,}5$",
      "Dezimalzahl $0{,}25$",
      "Dezimalzahl $0{,}4$"
    ],
    "correct": 2,
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
      "Dezimalzahl $0{,}34$",
      "Dezimalzahl $0{,}75$",
      "Dezimalzahl $0{,}6$",
      "Dezimalzahl $0{,}8$"
    ],
    "correct": 1,
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
      "Das Ergebnis ist $4{,}2$",
      "Das Ergebnis ist $3{,}8$",
      "Das Ergebnis ist $3{,}2$",
      "Das Ergebnis ist $4{,}8$"
    ],
    "correct": 1,
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
      "Mitten liegt $1{,}35$",
      "Mitten liegt $1{,}3$",
      "Mitten liegt $1{,}25$",
      "Mitten liegt $1{,}31$"
    ],
    "correct": 1,
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
      "Formel: $A = a : b$ geteilt",
      "Formel: $A = a + b$ addiert",
      "Formel: $A = a \\cdot b$",
      "Formel: $A = 2a + 2b$ Umfang"
    ],
    "correct": 2,
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
      "Fläche $18\\text{ cm}^2$",
      "Fläche $12\\text{ cm}^2$",
      "Fläche $36\\text{ cm}^2$",
      "Fläche $24\\text{ cm}^2$"
    ],
    "correct": 2,
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
      "Genau $1.000\\text{ m}^2$",
      "Genau $10\\text{ m}^2$",
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
      "Genau $10.000\\text{ ha}$",
      "Genau $1.000\\text{ ha}$"
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
      "Genau $12$ Flächen",
      "Genau $8$ Flächen",
      "Genau $6$ Flächen",
      "Genau $4$ Flächen"
    ],
    "correct": 2,
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
      "Genau $16$ Ecken",
      "Genau $12$ Ecken",
      "Genau $6$ Ecken"
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
      "Genau $10$ Kanten",
      "Genau $6$ Kanten",
      "Genau $8$ Kanten"
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
      "Formel: $V = (a \\cdot b) + c$ falsch",
      "Formel: $V = a + b + c$ addiert",
      "Formel: $V = 2a + 2b + 2c$ Kanten"
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
      "Volumen $48\\text{ cm}^3$",
      "Volumen $14\\text{ cm}^3$"
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
      "Volumen $9\\text{ cm}^3$",
      "Volumen $18\\text{ cm}^3$",
      "Volumen $36\\text{ cm}^3$",
      "Volumen $27\\text{ cm}^3$"
    ],
    "correct": 3,
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
      "Genau $100\\text{ cm}^3$",
      "Genau $10\\text{ cm}^3$",
      "Genau $10.000\\text{ cm}^3$",
      "Genau $1.000\\text{ cm}^3$"
    ],
    "correct": 3,
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
      "Genau $100\\text{ ml}$",
      "Genau $10.000\\text{ ml}$",
      "Genau $1.000\\text{ ml}$",
      "Genau $10\\text{ ml}$"
    ],
    "correct": 2,
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
      "Fläche der Grundseite",
      "Inhalt des leeren Innenraums",
      "Summe aller $6$ Flächen",
      "Länge der Kantensumme"
    ],
    "correct": 2,
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
      "Das Flächenprofil",
      "Das Körpernetz",
      "Das Kantenmodell",
      "Das Schrägbild"
    ],
    "correct": 1,
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
      "Senkrecht zueinander",
      "Unterschiedlich groß",
      "Deckungsgleich u. parallel",
      "Haben eine krumm gebogene Form"
    ],
    "correct": 2,
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
      "Immer waagerecht gerade",
      "Verdoppelt nach oben hin gezeichnet",
      "Doppelt so lang senkrecht gezeichnet"
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
      "Als Punkte ohne Linie",
      "Besonders dick rot markiert",
      "Gar nicht einzeichnen"
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
      "Länge beträgt $40\\text{ cm}$",
      "Länge beträgt $60\\text{ cm}$",
      "Länge beträgt $30\\text{ cm}$",
      "Länge beträgt $20\\text{ cm}$"
    ],
    "correct": 1,
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
      "Ergebnis in Prozent",
      "Reine Anzahl Treffer",
      "Mittelwert aller Werte",
      "Anteil an der Gesamtzahl"
    ],
    "correct": 1,
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
      "Gesamtzahl : Absolutes",
      "Absolute Zahl $\\cdot$ Gesamtzahl",
      "Absolute Zahl : Gesamtzahl",
      "Gesamtzahl - Absolutes"
    ],
    "correct": 2,
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
      "Ergibt $\\frac{1}{6}$ als Anteil",
      "Ergibt $\\frac{5}{6}$ als Anteil",
      "Ergibt $\\frac{6}{20}$ als falscher Anteil",
      "Ergibt $\\frac{5}{20} = \\frac{1}{4}$"
    ],
    "correct": 3,
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
      "Von Tausend Teilen gerechnet",
      "Aus Zehn gleichen Einheiten",
      "Mal Hundert einfach gerechnet",
      "Von Hundert (Pro Hundert)"
    ],
    "correct": 3,
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
      "Entspricht genau $10\\%$",
      "Entspricht genau $25\\%$",
      "Entspricht genau $20\\%$"
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
      "Entspricht genau $15\\%$",
      "Entspricht genau $25\\%$",
      "Entspricht genau $75\\%$",
      "Entspricht genau $40\\%$"
    ],
    "correct": 1,
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
      "Als Bruch $\\frac{2}{5}$",
      "Als Bruch $\\frac{1}{2}$",
      "Als Bruch $\\frac{1}{20}$",
      "Als Bruch $\\frac{1}{5}$"
    ],
    "correct": 3,
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
      "Das sind $4$ Euro",
      "Das sind $8$ Euro",
      "Das sind $10$ Euro",
      "Das sind $18$ Euro"
    ],
    "correct": 1,
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
      "Das sind $25$ Gramm",
      "Das sind $100$ Gramm",
      "Das sind $50$ Gramm",
      "Das sind $200$ Gramm"
    ],
    "correct": 1,
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
      "Entspricht genau $500\\%$",
      "Entspricht genau $50\\%$"
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
      "Die ganze Zahl $10$",
      "Die ganze Zahl $0$",
      "Die ganze Zahl $100$",
      "Die ganze Zahl $1$"
    ],
    "correct": 3,
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
      "Das sind genau $25\\%$",
      "Das sind genau $5\\%$",
      "Das sind genau $20\\%$",
      "Das sind genau $10\\%$"
    ],
    "correct": 2,
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
      "Man spart $2{,}50$ Euro",
      "Man spart $1$ Euro",
      "Man spart $10$ Euro"
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
      "Immer genau $0$, nie erfüllt",
      "Abhängig von der Anzahl",
      "Immer genau $10$ Prozent",
      "Immer genau $1$ ($100\\%$)"
    ],
    "correct": 3,
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
      "Das sind $50\\text{ km}$",
      "Das sind $24\\text{ km}$",
      "Das sind $60\\text{ km}$",
      "Das sind $30\\text{ km}$"
    ],
    "correct": 2,
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
      "Entspricht $0{,}12\\%$",
      "Entspricht $1{,}2\\%$",
      "Entspricht $120\\%$"
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
      "Das sind $0{,}5$ Meter",
      "Das sind $50$ Meter",
      "Das sind $1$ Meter"
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
      "Das sind $55\\%$",
      "Das sind $65\\%$",
      "Das sind $75\\%$",
      "Das sind $60\\%$"
    ],
    "correct": 1,
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
      "Der Nenner des Bruchs",
      "Das ganze Ganze $G$",
      "Der Prozentsatz $p\\%$"
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
      "Die Hoch-Achse",
      "Die $x$-Achse",
      "Die $y$-Achse",
      "Die $z$-Achse"
    ],
    "correct": 1,
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
      "Die Breiteachse",
      "Die $y$-Achse",
      "Die Null-Achse",
      "Die $x$-Achse"
    ],
    "correct": 1,
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
      "Koordinaten $(1|0)$",
      "Koordinaten $(1|1)$",
      "Koordinaten $(0|1)$",
      "Koordinaten $(0|0)$"
    ],
    "correct": 3,
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
      "Der höchste Wert zuerst",
      "Erst $y$, dann $x$",
      "Erst $x$, dann $y$",
      "Nach Belieben wählen"
    ],
    "correct": 2,
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
      "Im freien Feld oben",
      "Im Nullpunkt selbst",
      "Auf der $y$-Achse",
      "Auf der $x$-Achse"
    ],
    "correct": 3,
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
      "Das Säulendiagramm",
      "Das Kreisdiagramm",
      "Das Punkt-Diagramm",
      "Das Liniendiagramm"
    ],
    "correct": 1,
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
      "Genau $45^\\circ$ Winkel",
      "Genau $180^\\circ$ Winkel",
      "Genau $90^\\circ$ Winkel",
      "Genau $360^\\circ$ Winkel"
    ],
    "correct": 1,
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
      "Genau $45^\\circ$ Winkel",
      "Genau $90^\\circ$ Winkel",
      "Genau $60^\\circ$ Winkel",
      "Genau $180^\\circ$ Winkel"
    ],
    "correct": 1,
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
      "Das Kreisdiagramm (rund)",
      "Das Liniendiagramm",
      "Das Streudiagramm",
      "Die Strichliste"
    ],
    "correct": 1,
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
      "Der Wert in der Mitte",
      "Höchster minus Tiefster",
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
      "Der Mittelwert ist $4$",
      "Der Mittelwert ist $5$",
      "Der Mittelwert ist $20$",
      "Der Mittelwert ist $6$"
    ],
    "correct": 1,
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
      "Mittelwert der Daten",
      "Anzahl aller Versuche",
      "Summe aller Messwerte",
      "Maximum minus Minimum"
    ],
    "correct": 3,
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
      "Die Spannweite ist $3$",
      "Die Spannweite ist $2$",
      "Die Spannweite ist $5$"
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
      "Die Summe aller Werte",
      "Der am häufigsten Wert",
      "Der Wert genau mittig",
      "Der allergrößte Wert"
    ],
    "correct": 2,
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
      "Der Median ist $9$",
      "Der Median ist $35$",
      "Der Median ist $7$",
      "Der Median ist $5$"
    ],
    "correct": 2,
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
      "In $3$er-Gruppen",
      "In $5$er-Päckchen",
      "In $10$er-Blöcken",
      "In $2$er-Paaren"
    ],
    "correct": 1,
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
      "Punkt-Diagramm",
      "Kreisdiagramm",
      "Säulendiagramm"
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
      "Bilder von Zahlen",
      "Bunte Farben allein",
      "Achsenbeschriftung",
      "Mittelwert-Rechnung"
    ],
    "correct": 2,
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
      "Winkel von $90^\\circ$",
      "Winkel von $180^\\circ$",
      "Winkel von $360^\\circ$",
      "Winkel von $100^\\circ$"
    ],
    "correct": 2,
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
      "Der kleinste Wert",
      "Häufigster Wert",
      "Der höchste Wert",
      "Der Mittelwert"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Modalwert ist der Wert, der in einer Datenmenge am häufigsten vorkommt."
  }


];

if (typeof window !== 'undefined') window.K6_MATHE_QUESTIONS = K6_MATHE_QUESTIONS;
if (typeof registerQuestions === 'function') registerQuestions('K6_MATHE_QUESTIONS', K6_MATHE_QUESTIONS);
