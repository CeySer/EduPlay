// ================================================================
// KLASSE 9 - MATHEMATIK (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K9_MATHEMATIK_QUESTIONS = [
  // --- QUADRATISCHE FUNKTIONEN & GLEICHUNGEN (001 - 025) ---
  {
    "id": "k9_mat_001",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Normalform einer quadratischen Gleichung?",
    "answers": [
      "x^2 + p*x + q = 0",
      "a*x + b*y + c = 0",
      "f(x) = m*x + n",
      "x^3 + p*x + q = 0"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Normalform einer quadratischen Gleichung lautet $x^2 + px + q = 0$."
  },
  {
    "id": "k9_mat_002",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die p-q-Formel zur Lösung von $x^2 + px + q = 0$?",
    "answers": [
      "x = -(p/2) +- sqrt((p/2)^2 - q)",
      "x = (p/2) +- sqrt((p/2)^2 + q)",
      "x = -p +- sqrt(p^2 - 4*q)",
      "x = -q +- sqrt((q/2)^2 - p)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Lösungsformel lautet $x_{1,2} = -\\frac{p}{2} \\pm \\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}$."
  },
  {
    "id": "k9_mat_003",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie nennt man den Term unter der Wurzel der p-q-Formel, der über die Anzahl der Lösungen entscheidet?",
    "answers": [
      "Die Diskriminante D",
      "Die Determinante D",
      "Der Koeffizient K",
      "Der Scheitelwert S"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Term $D = \\left(\\frac{p}{2}\\right)^2 - q$ heißt Diskriminante."
  },
  {
    "id": "k9_mat_004",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie viele reelle Lösungen hat eine quadratische Gleichung, wenn die Diskriminante $D > 0$ ist?",
    "answers": [
      "Genau zwei Lösungen",
      "Genau eine Lösung",
      "Keine reelle Lösung",
      "Unendlich viele"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ist $D > 0$, existieren zwei verschiedene reelle Lösungen."
  },
  {
    "id": "k9_mat_005",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie viele reelle Lösungen existieren, wenn die Diskriminante $D = 0$ ist?",
    "answers": [
      "Genau eine Lösung",
      "Genau zwei Lösungen",
      "Keine reelle Lösung",
      "Genau drei Lösungen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ist $D = 0$, gibt es genau eine Lösung (Doppellösung)."
  },
  {
    "id": "k9_mat_006",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lauten die Lösungen der quadratischen Gleichung $x^2 - 9 = 0$?",
    "answers": [
      "x1 = 3 u. x2 = -3",
      "x1 = 9 u. x2 = -9",
      "x1 = 81 u. x2 = 0",
      "x1 = 4.5 u. x2 = -4.5"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$x^2 = 9 \\Rightarrow x = \\pm \\sqrt{9} = \\pm 3$."
  },
  {
    "id": "k9_mat_007",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welchen Scheitelpunkt besitzt die Normalparabel $f(x) = x^2$?",
    "answers": [
      "Der Punkt S(0 | 0)",
      "Der Punkt S(1 | 1)",
      "Der Punkt S(0 | 1)",
      "Der Punkt S(1 | 0)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die unveränderte Normalparabel hat ihren Scheitelpunkt im Ursprung $S(0|0)$."
  },
  {
    "id": "k9_mat_008",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die allgemeine Scheitelpunktform einer quadratischen Funktion?",
    "answers": [
      "f(x) = a*(x - d)^2 + e",
      "f(x) = a*x^2 + b*x + c",
      "f(x) = (a*x + b)*(x + c)",
      "f(x) = a*x + d + e"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Scheitelpunktform lautet $f(x) = a(x - d)^2 + e$ mit dem Scheitelpunkt $S(d|e)$."
  },
  {
    "id": "k9_mat_009",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wo liegt der Scheitelpunkt der Funktion $f(x) = (x - 3)^2 + 4$?",
    "answers": [
      "Der Punkt S(3 | 4)",
      "Der Punkt S(-3 | 4)",
      "Der Punkt S(3 | -4)",
      "Der Punkt S(-3 | -4)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aus $f(x) = (x - d)^2 + e$ liest man direkt den Scheitelpunkt $S(3|4)$ ab."
  },
  {
    "id": "k9_mat_010",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was bewirkt ein negativer Faktor $a$ vor dem Quadrat ($f(x) = -a*x^2$)?",
    "answers": [
      "Parabel ist nach unten geöffnet",
      "Parabel ist nach oben geöffnet",
      "Parabel wird zur Geraden",
      "Parabel verschiebt sich rechts"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ist der Streckungsfaktor $a < 0$, ist die Parabel nach unten geöffnet."
  },
  {
    "id": "k9_mat_011",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was passiert mit dem Graphen von $f(x) = a*x^2$, wenn $|a| > 1$ ist?",
    "answers": [
      "Parabel wird gestreckt (enger)",
      "Parabel wird gestaucht (breiter)",
      "Parabel wird nach unten verschoben",
      "Parabel wird zur Parallelen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Für $|a| > 1$ verlaufen die Werte steiler; die Parabel wird gestreckt u. ist enger als die Normalparabel."
  },
  {
    "id": "k9_mat_012",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was passiert mit dem Graphen von $f(x) = a*x^2$, wenn $0 < |a| < 1$ ist?",
    "answers": [
      "Parabel wird gestaucht (breiter)",
      "Parabel wird gestreckt (enger)",
      "Parabel spiegelt sich an y-Achse",
      "Parabel wird zur Nulllinie"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Für $0 < |a| < 1$ verläuft die Parabel flacher u. ist gestaucht (breiter)."
  },
  {
    "id": "k9_mat_013",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Mit welchem mathematischen Verfahren verwandelt man $x^2 + bx$ in eine Binomische Formel?",
    "answers": [
      "Quadratische Ergänzung",
      "Polynomdivision Satz",
      "Ausklammern von x",
      "Substitutionsmethode"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch Addition von $\\left(\\frac{b}{2}\\right)^2$ (quadratische Ergänzung) bildet man ein vollständiges Quadrat."
  },
  {
    "id": "k9_mat_014",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welche Zahl muss man ergänzen, um $x^2 + 6x$ zu einem vollständigen Quadrat zu machen?",
    "answers": [
      "Die Zahl 9",
      "Die Zahl 36",
      "Die Zahl 3",
      "Die Zahl 12"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die quadratische Ergänzung lautet $\\left(\\frac{6}{2}\\right)^2 = 3^2 = 9$. Es entsteht $(x + 3)^2$."
  },
  {
    "id": "k9_mat_015",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lauten die Nullstellen der Funktion $f(x) = x^2 - 4$?",
    "answers": [
      "x1 = 2 u. x2 = -2",
      "x1 = 4 u. x2 = -4",
      "x1 = 16 u. x2 = -16",
      "x1 = 0 u. x2 = 4"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Setzt man $x^2 - 4 = 0$, folgt $x^2 = 4 \\Rightarrow x = \\pm 2$."
  },
  {
    "id": "k9_mat_016",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lösen Sie die Gleichung $x^2 - 5x = 0$ am schnellsten?",
    "answers": [
      "x ausklammern: x*(x - 5) = 0",
      "Mit der p-q-Formel immer",
      "Durch Plus 5 auf beiden Seiten",
      "Mit quadratischer Ergänzung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch Ausklammern von $x$ erhält man $x(x - 5) = 0$. Die Lösungen liest man sofort ab: $x_1 = 0$ u. $x_2 = 5$."
  },
  {
    "id": "k9_mat_017",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wo schneidet der Graph der Funktion $f(x) = x^2 - 4x + 3$ die y-Achse?",
    "answers": [
      "Im Punkt P(0 | 3)",
      "Im Punkt P(3 | 0)",
      "Im Punkt P(0 | -4)",
      "Im Punkt P(0 | 1)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der y-Achsenabschnitt ergibt sich durch Einsetzen von $x = 0$: $f(0) = 3 \\Rightarrow P(0|3)$."
  },
  {
    "id": "k9_mat_018",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welche Achsensymmetrie besitzt jede senkrechte Parabel der Form $f(x) = a*(x - d)^2 + e$?",
    "answers": [
      "Symmetrisch zu x = d",
      "Symmetrisch zu y = e",
      "Symmetrisch zum Ursprung",
      "Symmetrisch zur x-Achse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Jede Parabel ist achsensymmetrisch zu ihrer Scheitelachse $x = d$."
  },
  {
    "id": "k9_mat_019",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie viele Schnittpunkte können eine Parabel u. eine Gerade maximal im Koordinatensystem haben?",
    "answers": [
      "Maximal zwei Schnittpunkte",
      "Maximal ein Schnittpunkt",
      "Maximal drei Schnittpunkte",
      "Unendlich viele Punkte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Parabel u. eine Gerade können sich in 0, 1 (Tangente) oder 2 Punkten (Sekante) schneiden."
  },
  {
    "id": "k9_mat_020",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie nennt man eine Gerade, die eine Parabel in genau einem Punkt berührt?",
    "answers": [
      "Eine Tangente an Graph",
      "Eine Sekante an Graph",
      "Eine Passante an Graph",
      "Eine Normale an Graph"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Gerade, die eine Kurve in genau einem Punkt berührt, heißt Tangente."
  },
  {
    "id": "k9_mat_021",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welche Gestalt hat die Wurfparabel beim schrägen Wurf eines Balles?",
    "answers": [
      "Nach unten geöffnete Parabel",
      "Nach oben geöffnete Parabel",
      "Exakt kreisförmiger Bogen",
      "Rein lineare Steigung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Flugbahn entspricht wegen der Erdbeschleunigung einer nach unten geöffneten Parabel."
  },
  {
    "id": "k9_mat_022",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was beschreibt der Scheitelpunkt bei einer nach unten geöffneten Wurfparabel?",
    "answers": [
      "Den höchsten Punkt der Bahn",
      "Den Landepunkt des Balles",
      "Den Abwurfort des Balles",
      "Den tiefsten Punkt der Bahn"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei einer nach unten geöffneten Parabel stellt der Scheitelpunkt das Hochpunkt-Maximum dar."
  },
  {
    "id": "k9_mat_023",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lauten die Lösungen der Gleichung $(x - 2)*(x + 7) = 0$?",
    "answers": [
      "x1 = 2 u. x2 = -7",
      "x1 = -2 u. x2 = 7",
      "x1 = 2 u. x2 = 7",
      "x1 = -2 u. x2 = -7"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Satz vom Nullprodukt: Ein Produkt ist Null, wenn mindestens ein Faktor Null ist ($x = 2$ oder $x = -7$)."
  },
  {
    "id": "k9_mat_024",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie wandelt man $2x^2 + 8x + 6 = 0$ korrekt in die Normalform um?",
    "answers": [
      "Durch 2 teilen: x^2 + 4x + 3 = 0",
      "Minus 6 rechnen auf Seiten",
      "Mal 2 nehmen auf allen Seiten",
      "Quadratwurzel sofort ziehen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Vor der p-q-Formel muss der Koeffizient vor $x^2$ durch Division durch $2$ auf $1$ gebracht werden."
  },
  {
    "id": "k9_mat_025",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie viele Nullstellen hat die Funktion $f(x) = x^2 + 9$ im Reellen?",
    "answers": [
      "Keine reelle Nullstelle",
      "Genau eine Nullstelle",
      "Genau zwei Nullstellen",
      "Genau drei Nullstellen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$x^2 + 9 = 0 \\Rightarrow x^2 = -9$. Da Quadrate reeller Zahlen nie negativ sind, gibt es keine reelle Lösung."
  },

  // --- SATZ DES PYTHAGORAS, TRIGONOMETRIE & STRAHLENSÄTZE (026 - 050) ---
  {
    "id": "k9_mat_026",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "In welcher Dreiecksart gilt der Satz des Pythagoras ($a^2 + b^2 = c^2$)?",
    "answers": [
      "Rechtwinkliges Dreieck",
      "Gleichseitiges Dreieck",
      "Gleichschenkliges Dreieck",
      "Beliebiges Dreieck"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Satz des Pythagoras gilt ausschließlich in rechtwinkligen Dreiecken."
  },
  {
    "id": "k9_mat_027",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie nennt man die längste Seite im rechtwinkligen Dreieck, die dem rechten Winkel gegenüberliegt?",
    "answers": [
      "Die Hypotenuse Seite",
      "Die Kathete Seite",
      "Die Ankathete Seite",
      "Die Gegenkathete Seite"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die dem rechten Winkel gegenüberliegende u. längste Seite heißt Hypotenuse."
  },
  {
    "id": "k7_mat_028",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie heißen die beiden Seiten im rechtwinkligen Dreieck, die den rechten Winkel einschließen?",
    "answers": [
      "Die beiden Katheten",
      "Die beiden Hypotenusen",
      "Die beiden Diagonale",
      "Die beiden Sehnen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die am rechten Winkel anliegenden Seiten heißen Katheten."
  },
  {
    "id": "k9_mat_029",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lang ist die Hypotenuse $c$, wenn die Katheten $a = 3\\,cm$ u. $b = 4\\,cm$ lang sind?",
    "answers": [
      "Länge: c = 5 cm",
      "Länge: c = 7 cm",
      "Länge: c = 25 cm",
      "Länge: c = 6 cm"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$c^2 = 3^2 + 4^2 = 9 + 16 = 25 \\Rightarrow c = \\sqrt{25} = 5\\,cm$ (pythagoreisches Tripel)."
  },
  {
    "id": "k9_mat_030",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie berechnet man die Diagonale $d$ in einem Quadrat mit Seitenlänge $a$?",
    "answers": [
      "d = a * sqrt(2)",
      "d = a * sqrt(3)",
      "d = 2 * a",
      "d = a^2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$d^2 = a^2 + a^2 = 2a^2 \\Rightarrow d = a \\sqrt{2}$."
  },
  {
    "id": "k9_mat_031",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet der Höhensatz des Euklid im rechtwinkligen Dreieck mit Hypotenusenabschnitten $p$ u. $q$?",
    "answers": [
      "h^2 = p * q",
      "h = p + q",
      "h^2 = a * b",
      "h = (p * q) / 2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Höhensatz besagt: Das Quadrat über der Höhe ist flächengleich zum Rechteck aus den Hypotenusenabschnitten ($h^2 = p \\cdot q$)."
  },
  {
    "id": "k9_mat_032",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lauten die Kathetensätze des Euklid?",
    "answers": [
      "a^2 = c * p  u.  b^2 = c * q",
      "a^2 = c * q  u.  b^2 = c * p",
      "a^2 = p * q  u.  b^2 = p * q",
      "a = c + p  u.  b = c + q"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Kathetensätze lauten $a^2 = c \\cdot p$ u. $b^2 = c \\cdot q$."
  },
  {
    "id": "k9_mat_033",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie ist der Sinus eines akuten Winkels $\\alpha$ im rechtwinkligen Dreieck definiert?",
    "answers": [
      "Sinus = Gegenkathete / Hypotenuse",
      "Sinus = Ankathete / Hypotenuse",
      "Sinus = Gegenkathete / Ankathete",
      "Sinus = Hypotenuse / Gegenkathete"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Sinus ist das Verhältnis von Gegenkathete zur Hypotenuse."
  },
  {
    "id": "k9_mat_034",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie ist der Kosinus eines Winkels $\\alpha$ definiert?",
    "answers": [
      "Kosinus = Ankathete / Hypotenuse",
      "Kosinus = Gegenkathete / Hypotenuse",
      "Kosinus = Gegenkathete / Ankathete",
      "Kosinus = Hypotenuse / Ankathete"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Kosinus ist das Verhältnis von Ankathete zur Hypotenuse."
  },
  {
    "id": "k9_mat_035",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie ist der Tangens eines Winkels $\\alpha$ definiert?",
    "answers": [
      "Tangens = Gegenkathete / Ankathete",
      "Tangens = Ankathete / Gegenkathete",
      "Tangens = Gegenkathete / Hypotenuse",
      "Tangens = Ankathete / Hypotenuse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Tangens ist das Verhältnis von Gegenkathete zur Ankathete."
  },
  {
    "id": "k9_mat_036",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die grundlegende Beziehung zwischen Sinus, Kosinus u. Tangens?",
    "answers": [
      "tan(alpha) = sin(alpha) / cos(alpha)",
      "tan(alpha) = cos(alpha) / sin(alpha)",
      "tan(alpha) = sin(alpha) * cos(alpha)",
      "tan(alpha) = sin(alpha) + cos(alpha)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Es gilt stets $\\tan(\\alpha) = \\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$."
  },
  {
    "id": "k9_mat_037",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet der Trigonometrische Pythagoras für beliebige Winkel $\\alpha$?",
    "answers": [
      "sin^2(alpha) + cos^2(alpha) = 1",
      "sin(alpha) + cos(alpha) = 1",
      "sin^2(alpha) - cos^2(alpha) = 1",
      "tan^2(alpha) + 1 = sin(alpha)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der trigonometrische Pythagoras besagt: $\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$."
  },
  {
    "id": "k9_mat_038",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welchen Wert hat $\\sin(30^\\circ)$ exakt?",
    "answers": [
      "Wert: 0.5 (1/2)",
      "Wert: 1",
      "Wert: 0",
      "Wert: sqrt(2)/2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Sinus von $30^\\circ$ beträgt exakt $0,5$."
  },
  {
    "id": "k9_mat_039",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welchen Wert hat $\\cos(0^\\circ)$?",
    "answers": [
      "Wert: 1",
      "Wert: 0",
      "Wert: 0.5",
      "Wert: Unendlich"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Kosinus von $0^\\circ$ ist genau $1$."
  },
  {
    "id": "k9_mat_040",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welchen Wert hat $\\tan(45^\\circ)$?",
    "answers": [
      "Wert: 1",
      "Wert: 0",
      "Wert: 0.5",
      "Wert: sqrt(3)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da bei $45^\\circ$ Gegenkathete u. Ankathete gleich lang sind, ist $\\tan(45^\\circ) = 1$."
  },
  {
    "id": "k9_mat_041",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was besagt der 1. Strahlensatz bei zwei durch Parallelen geschnittenen Strahlen mit Zentrum Z?",
    "answers": [
      "Verhältnis von Strahlenabschnitten",
      "Verhältnis von Winkelmaßen",
      "Verhältnis von Dreiecksflächen",
      "Verhältnis von Höhenlinien"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der 1. Strahlensatz vergleicht Abschnitte auf den Strahlen (z. B. $ZA / ZA' = ZB / ZB'$)."
  },
  {
    "id": "k9_mat_042",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was besagt der 2. Strahlensatz?",
    "answers": [
      "Parallelenabschnitte wie Strahlen",
      "Strahlen wie Winkelhalbierende",
      "Höhen wie Grundseiten",
      "Radien wie Kreisumfänge"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der 2. Strahlensatz schließt die Parallelenabschnitte ein (z. B. $AB / A'B' = ZA / ZA'$)."
  },
  {
    "id": "k9_mat_043",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie nennt man den Satz, der in beliebigen (nicht rechtwinkligen) Dreiecken das Verhältnis von Seiten zu Sinuswerten ihrer Gegenwinkel beschreibt?",
    "answers": [
      "Der Sinussatz",
      "Der Kosinussatz",
      "Der Tangenssatz",
      "Der Strahlensatz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Sinussatz lautet: $\\frac{a}{\\sin(\\alpha)} = \\frac{b}{\\sin(\\beta)} = \\frac{c}{\\sin(\\gamma)}$."
  },
  {
    "id": "k9_mat_044",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die allgemeine Formel des Kosinussatzes zur Berechnung der Seite $c$?",
    "answers": [
      "c^2 = a^2 + b^2 - 2*a*b*cos(gamma)",
      "c^2 = a^2 + b^2 + 2*a*b*cos(gamma)",
      "c^2 = a^2 - b^2 - 2*a*b*sin(gamma)",
      "c = a + b - cos(gamma)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Kosinussatz erweitert den Pythagoras für beliebige Dreiecke: $c^2 = a^2 + b^2 - 2ab \\cos(\\gamma)$."
  },
  {
    "id": "k9_mat_045",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lang ist die Höhe $h$ in einem gleichseitigen Dreieck mit Seitenlänge $a$?",
    "answers": [
      "h = (a / 2) * sqrt(3)",
      "h = a * sqrt(2)",
      "h = a / 2",
      "h = a * sqrt(3)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aus Pythagoras folgt $h^2 + (a/2)^2 = a^2 \\Rightarrow h = \\frac{a}{2}\\sqrt{3}$."
  },
  {
    "id": "k9_mat_046",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie groß ist der Flächeninhalt $A$ eines gleichseitigen Dreiecks mit Seitenlänge $a$?",
    "answers": [
      "A = (a^2 / 4) * sqrt(3)",
      "A = a^2 * sqrt(3)",
      "A = (a^2 / 2) * sqrt(2)",
      "A = a^2 / 2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$A = \\frac{1}{2} a h = \\frac{1}{2} a \\left(\\frac{a}{2}\\sqrt{3}\\right) = \\frac{a^2}{4}\\sqrt{3}$."
  },
  {
    "id": "k9_mat_047",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welcher Winkel $\\alpha$ hat den Sinuswert $\\sin(\\alpha) = 1$ im Intervall $[0^\\circ, 180^\\circ]$?",
    "answers": [
      "Winkel: 90 Grad",
      "Winkel: 0 Grad",
      "Winkel: 45 Grad",
      "Winkel: 180 Grad"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Sinus erreicht seinen Maximalwert $1$ bei $90^\\circ$."
  },
  {
    "id": "k9_mat_048",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie nennt man die Umkehrfunktionen von Sinus, Kosinus u. Tangens zur Winkelberechnung auf dem Taschenrechner?",
    "answers": [
      "Arcussinus, Arcuskosinus...",
      "Kehrwertsinus, Reziprokkos...",
      "Logarithmussinus, Exponent...",
      "Quadratursinus, Wurzelkos..."
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Umkehrfunktionen heißen Arcussinus (arcsin bzw. $\\sin^{-1}$), Arcuskosinus u. Arcustangens."
  },
  {
    "id": "k9_mat_049",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was beschreibt die Steigung $m$ einer Geraden im Steigungsdreieck trigonometrisch?",
    "answers": [
      "m = tan(alpha)",
      "m = sin(alpha)",
      "m = cos(alpha)",
      "m = 1 / sin(alpha)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Steigung ist $m = \\frac{\\Delta y}{\\Delta x} = \\frac{\\text{Gegenkathete}}{\\text{Ankathete}} = \\tan(\\alpha)$."
  },
  {
    "id": "k9_mat_050",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie berechnet man die Raumdiagonale $d_R$ eines Quaders mit Seiten $a$, $b$ u. $c$?",
    "answers": [
      "dR = sqrt(a^2 + b^2 + c^2)",
      "dR = a + b + c",
      "dR = sqrt(a*b + b*c + a*c)",
      "dR = a*b*c / sqrt(2)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch zweifache Anwendung des Pythagoras gilt $d_R = \\sqrt{a^2 + b^2 + c^2}$."
  },

  // --- POTENZEN, WURZELN & EXPONENTIELLES WACHSTUM (051 - 075) ---
  {
    "id": "k9_mat_051",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet das 1. Potenzgesetz für das Produkt von Potenzen gleicher Basis ($a^n * a^m$)?",
    "answers": [
      "a^(n + m)",
      "a^(n * m)",
      "a^(n - m)",
      "(2*a)^(n + m)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Potenzen gleicher Basis werden multipliziert, indem man die Exponenten addiert: $a^n \\cdot a^m = a^{n+m}$."
  },
  {
    "id": "k9_mat_052",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie dividiert man Potenzen gleicher Basis ($a^n / a^m$)?",
    "answers": [
      "a^(n - m)",
      "a^(n / m)",
      "a^(n + m)",
      "a^(n * m)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Potenzen gleicher Basis werden dividiert, indem man die Exponenten subtrahiert: $a^n / a^m = a^{n-m}$."
  },
  {
    "id": "k9_mat_053",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie potenziert man eine Potenz ($(a^n)^m$)?",
    "answers": [
      "a^(n * m)",
      "a^(n + m)",
      "a^(n^m)",
      "a^(n - m)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Potenz wird potenziert, indem man die Exponenten multipliziert: $(a^n)^m = a^{n \\cdot m}$."
  },
  {
    "id": "k9_mat_054",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welchen Wert hat jede reelle Zahl $a \\neq 0$ hoch Null ($a^0$)?",
    "answers": [
      "Wert: 1",
      "Wert: 0",
      "Wert: a",
      "Wert: Unendlich"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Per Definition gilt $a^0 = 1$ für alle $a \\neq 0$."
  },
  {
    "id": "k9_mat_055",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie definiert man eine Potenz mit negativem Exponenten ($a^{-n}$)?",
    "answers": [
      "1 / (a^n)",
      "-a^n",
      "-(1 / a^n)",
      "a^(1/n)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein negativer Exponent bedeutet Kehrwertbildung: $a^{-n} = \\frac{1}{a^n}$."
  },
  {
    "id": "k9_mat_056",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie drückt man die $n$-te Wurzel aus $a$ als Potenzschreibweise aus ($\\sqrt[n]{a}$)?",
    "answers": [
      "a^(1/n)",
      "a^n",
      "a^(-n)",
      "n^a"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die $n$-te Wurzel ist äquivalent zu der Potenz $\\sqrt[n]{a} = a^{\\frac{1}{n}}$."
  },
  {
    "id": "k9_mat_057",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welchen Wert hat $27^{1/3}$?",
    "answers": [
      "Wert: 3",
      "Wert: 9",
      "Wert: 81",
      "Wert: 1/3"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$27^{1/3} = \\sqrt[3]{27} = 3$, da $3^3 = 27$."
  },
  {
    "id": "k9_mat_058",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welchen Wert hat $16^{-1/2}$?",
    "answers": [
      "Wert: 1/4 (0.25)",
      "Wert: -4",
      "Wert: -8",
      "Wert: 4"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$16^{-1/2} = \\frac{1}{16^{1/2}} = \\frac{1}{\\sqrt{16}} = \\frac{1}{4}$."
  },
  {
    "id": "k9_mat_059",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die allgemeine Funktionsgleichung für exponentielles Wachstum?",
    "answers": [
      "f(t) = N0 * q^t",
      "f(t) = m*t + b",
      "f(t) = a*t^2 + b",
      "f(t) = N0 + q*t"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Exponentielles Wachstum wird durch $f(t) = N_0 \\cdot q^t$ mit Anfangswert $N_0$ u. Wachstumsfaktor $q$ beschrieben."
  },
  {
    "id": "k9_mat_060",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie hängt der Wachstumsfaktor $q$ mit dem prozentualen Zuwachs $p\\%$ zusammen?",
    "answers": [
      "q = 1 + p / 100",
      "q = p / 100",
      "q = 1 - p / 100",
      "q = 100 + p"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei $p\\%$ Zunahme ist $q = 1 + \\frac{p}{100}$ (z. B. $5\\%$ Zunahme $\\Rightarrow q = 1,05$)."
  },
  {
    "id": "k9_mat_061",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welcher Wachstumsfaktor $q$ entspricht einer Abnahme von $12\\%$ pro Zeiteinheit?",
    "answers": [
      "Faktor: q = 0.88",
      "Faktor: q = 1.12",
      "Faktor: q = -0.12",
      "Faktor: q = 0.12"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei Abnahme gilt $q = 1 - \\frac{p}{100} = 1 - 0,12 = 0,88$."
  },
  {
    "id": "k9_mat_062",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was beschreibt der Begriff 'Halbwertszeit' bei radioaktivem Zerfall?",
    "answers": [
      "Zeit bis zur Hälfte des Stoffs",
      "Halbe Lebensdauer des Stoffs",
      "Zeit bis zum Zerfall von 25%",
      "Zeitspanne nach 50 Jahren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Halbwertszeit ist die Zeitspanne, in der sich die vorhandene Menge halbiert."
  },
  {
    "id": "k9_mat_063",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Zinseszins-Formel für ein Kapital $K_0$ nach $n$ Jahren bei Zinsfuß $p\\%$?",
    "answers": [
      "Kn = K0 * (1 + p/100)^n",
      "Kn = K0 * (1 + n * p/100)",
      "Kn = K0 + n * p",
      "Kn = K0 * (p/100)^n"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Zinseszinsformel lautet $K_n = K_0 \\cdot (1 + \\frac{p}{100})^n$."
  },
  {
    "id": "k9_mat_064",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie viel Euro wächst ein Kapital von $1000\\,€$ bei $3\\%$ Zinseszins nach $2$ Jahren an?",
    "answers": [
      "Betrag: 1060.90 Euro",
      "Betrag: 1060.00 Euro",
      "Betrag: 1030.00 Euro",
      "Betrag: 1090.00 Euro"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$K_2 = 1000 \\cdot 1,03^2 = 1000 \\cdot 1,0609 = 1060,90\\,€$."
  },
  {
    "id": "k9_mat_065",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welche grundlegende Frage beantwortet der Logarithmus $\\log_a(b)$?",
    "answers": [
      "Welche Hochzahl x löst a^x = b?",
      "Wie viel ist a mal b?",
      "Was ist die b-te Wurzel aus a?",
      "Wie lautet a geteilt durch b?"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Logarithmus ist die Umkehrung des Potenzierens: $a^x = b \\Leftrightarrow x = \\log_a(b)$."
  },
  {
    "id": "k9_mat_066",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welchen Wert hat $\\log_2(8)$?",
    "answers": [
      "Wert: 3",
      "Wert: 4",
      "Wert: 16",
      "Wert: 2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da $2^3 = 8$ ist, gilt $\\log_2(8) = 3$."
  },
  {
    "id": "k9_mat_067",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welchen Wert hat $\\log_{10}(1000)$ (Dekadischer Logarithmus)?",
    "answers": [
      "Wert: 3",
      "Wert: 100",
      "Wert: 10",
      "Wert: 30"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da $10^3 = 1000$, ist $\\log_{10}(1000) = 3$."
  },
  {
    "id": "k9_mat_068",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welchen Wert hat $\\log_a(1)$ für jede zulässige Basis $a > 0$?",
    "answers": [
      "Wert: 0",
      "Wert: 1",
      "Wert: a",
      "Wert: Unendlich"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da $a^0 = 1$ für alle $a > 0$, gilt stets $\\log_a(1) = 0$."
  },
  {
    "id": "k9_mat_069",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet das Logarithmengesetz für ein Produkt ($\\log_a(u * v)$)?",
    "answers": [
      "log_a(u) + log_a(v)",
      "log_a(u) * log_a(v)",
      "log_a(u - v)",
      "log_a(u) / log_a(v)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Logarithmus eines Produkts ist gleich der Summe der Logarithmen: $\\log_a(u \\cdot v) = \\log_a(u) + \\log_a(v)$."
  },
  {
    "id": "k9_mat_070",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet das Logarithmengesetz für eine Potenz ($\\log_a(u^r)$)?",
    "answers": [
      "r * log_a(u)",
      "(log_a(u))^r",
      "log_a(r * u)",
      "log_a(u) / r"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Exponenten dürfen als Faktor nach vorne gezogen werden: $\\log_a(u^r) = r \\cdot \\log_a(u)$."
  },
  {
    "id": "k9_mat_071",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welche charakteristische Form besitzt der Graph einer Exponentialfunktion $f(x) = b^x$ ($b > 1$)?",
    "answers": [
      "Streng monoton steigend",
      "Parabelförmig U-Kurve",
      "Kreisförmig geschlossen",
      "Streng monoton fallend"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Für $b > 1$ steigt der Graph der Exponentialfunktion immer steiler an."
  },
  {
    "id": "k9_mat_072",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welchen charakteristischen Schnittpunkt mit der y-Achse besitzen alle Funktionen der Form $f(x) = b^x$ ($b > 0$)?",
    "answers": [
      "Im Punkt P(0 | 1)",
      "Im Punkt P(0 | 0)",
      "Im Punkt P(1 | 0)",
      "Im Punkt P(0 | b)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da $b^0 = 1$, schneiden alle einfachen Exponentialfunktionen die y-Achse bei $(0|1)$."
  },
  {
    "id": "k9_mat_073",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie unterscheidet sich lineares Wachstum von exponentiellem Wachstum?",
    "answers": [
      "Lineares addiert, exponentielles multipliziert",
      "Lineares steigt schneller als exponentielles",
      "Lineares hat nie einen negativen Verlauf",
      "Exponentielles Wachstum hat eine feste Geradungssteigung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei linearem Wachstum kommt in gleichen Abschnitten derselbe Betrag hinzu; bei exponentiellem Wachstum vervielfacht sich der Wert um denselben Faktor."
  },
  {
    "id": "k9_mat_074",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie vereinfacht man den Ausdruck $\\sqrt{a^2 * b}$ bei $a, b \\ge 0$ durch teilweises Wurzelziehen?",
    "answers": [
      "a * sqrt(b)",
      "a^2 * sqrt(b)",
      "b * sqrt(a)",
      "sqrt(a) * sqrt(b)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\sqrt{a^2 \\cdot b} = \\sqrt{a^2} \\cdot \\sqrt{b} = a \\sqrt{b}$."
  },
  {
    "id": "k9_mat_075",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welchen rationalen Wert hat der Nenner des Bruchs $1 / \\sqrt{2}$ nach Nenner-Rationalisierung?",
    "answers": [
      "sqrt(2) / 2",
      "2 / sqrt(2)",
      "1 / 2",
      "sqrt(2)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch Erweitern mit $\\sqrt{2}$ erhält man $\\frac{1 \\cdot \\sqrt{2}}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{\\sqrt{2}}{2}$."
  },

  // --- KREIS-, KÖRPERBERECHNUNG & STOCHASTIK (076 - 100) ---
  {
    "id": "k9_mat_076",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie berechnet man die Bogenlänge $b$ eines Kreissektors mit Mittelpunktswinkel $\\alpha$ u. Radius $r$?",
    "answers": [
      "b = 2 * pi * r * (alpha / 360)",
      "b = pi * r^2 * (alpha / 360)",
      "b = pi * r * (alpha / 180)",
      "b = 2 * r * (alpha / 360)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Bogenlänge entspricht dem Anteil $\\frac{\\alpha}{360^\\circ}$ am gesamten Umfang $2\\pi r$."
  },
  {
    "id": "k9_mat_077",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Formel für den Flächeninhalt $A_S$ eines Kreissektors?",
    "answers": [
      "AS = pi * r^2 * (alpha / 360)",
      "AS = 2 * pi * r * (alpha / 360)",
      "AS = pi * r * alpha",
      "AS = r^2 * (alpha / 180)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Sektorflächeninhalt ist $A_S = \\pi r^2 \\cdot \\frac{\\alpha}{360^\\circ}$."
  },
  {
    "id": "k9_mat_078",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Formel zur Berechnung des Volumens $V$ eines geraden Zylinders?",
    "answers": [
      "V = pi * r^2 * h",
      "V = (1/3) * pi * r^2 * h",
      "V = 2 * pi * r * h",
      "V = (4/3) * pi * r^3"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zylindervolumen ist Grundfläche mal Höhe: $V = G \\cdot h = \\pi r^2 h$."
  },
  {
    "id": "k9_mat_079",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie berechnet man den Mantelflächeninhalt $M$ eines geraden Zylinders?",
    "answers": [
      "M = 2 * pi * r * h",
      "M = pi * r^2 * h",
      "M = pi * r * s",
      "M = 2 * pi * r^2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Abwicklung des Zylindermantels ist ein Rechteck mit Länge $2\\pi r$ u. Höhe $h$ ($M = 2\\pi r h$)."
  },
  {
    "id": "k9_mat_080",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Formel für das Volumen $V$ eines geraden Kreiskegels?",
    "answers": [
      "V = (1/3) * pi * r^2 * h",
      "V = pi * r^2 * h",
      "V = (4/3) * pi * r^3",
      "V = (1/2) * pi * r * h"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Kegelvolumen beträgt genau ein Drittel des Zylindervolumens gleicher Grundfläche u. Höhe: $V = \\frac{1}{3} \\pi r^2 h$."
  },
  {
    "id": "k9_mat_081",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie berechnet man die Mantellinie $s$ eines Kegels aus Radius $r$ u. Höhe $h$?",
    "answers": [
      "s = sqrt(r^2 + h^2)",
      "s = r + h",
      "s = sqrt(r * h)",
      "s = r^2 + h^2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Achsenschnitt bildet das Dreieck aus $r$, $h$ u. $s$ ein rechtwinkliges Dreieck: $s = \\sqrt{r^2 + h^2}$."
  },
  {
    "id": "k9_mat_082",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Formel für die Mantelfläche $M$ eines Kreiskegels?",
    "answers": [
      "M = pi * r * s",
      "M = 2 * pi * r * h",
      "M = pi * r^2 * s",
      "M = (1/3) * pi * r * s"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Kegelmantel berechnet sich mit $M = \\pi r s$."
  },
  {
    "id": "k9_mat_083",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Volumenformel für eine Kugel mit Radius $r$?",
    "answers": [
      "V = (4/3) * pi * r^3",
      "V = 4 * pi * r^2",
      "V = (1/3) * pi * r^3",
      "V = 2 * pi * r^3"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Kugelvolumen berechnet sich nach der Formel $V = \\frac{4}{3} \\pi r^3$."
  },
  {
    "id": "k9_mat_084",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Formel für den Oberflächeninhalt $O$ einer Kugel?",
    "answers": [
      "O = 4 * pi * r^2",
      "O = (4/3) * pi * r^2",
      "O = 2 * pi * r^2",
      "O = pi * r^3"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Kugeloberfläche ist genau vierfach so groß wie die Fläche ihres Großkreises: $O = 4\\pi r^2$."
  },
  {
    "id": "k9_mat_085",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie verhält sich das Volumen $V$ zweier ähnlicher Körper, wenn alle Längen um den Faktor $k$ vergrößert werden?",
    "answers": [
      "Volumen vervielfacht sich um k^3",
      "Volumen vervielfacht sich um k^2",
      "Volumen vervielfacht sich um 3*k",
      "Volumen bleibt völlig unverändert"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Längen skalieren mit $k$, Flächen mit $k^2$ u. Volumina mit $k^3$."
  },
  {
    "id": "k9_mat_086",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was besagt die 1. Pfadregel (Produktregel) in einem Baumdiagramm?",
    "answers": [
      "Wahrscheinlichkeiten längs Pfad multiplizieren",
      "Wahrscheinlichkeiten längs Pfad addieren",
      "Wahrscheinlichkeiten längs Pfad dividieren",
      "Pfadwahrscheinlichkeiten subtrahieren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Wahrscheinlichkeit eines Ergebnisses (Pfades) ist das Produkt der Wahrscheinlichkeiten entlang des Pfades."
  },
  {
    "id": "k9_mat_087",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was besagt die 2. Pfadregel (Summenregel) für günstige Ergebnisse in Baumdiagrammen?",
    "answers": [
      "Pfadwahrscheinlichkeiten addieren",
      "Pfadwahrscheinlichkeiten multiplizieren",
      "Höchsten Wert durch tiefsten teilen",
      "Kehrwerte der Pfadwerte bilden"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gehören mehrere Pfade zu einem Ereignis, werden ihre Pfadwahrscheinlichkeiten addiert."
  },
  {
    "id": "k9_mat_088",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was ist der Vorteil der Gegenwahrscheinlichkeit $P(\\bar{E})$ bei der Berechnung von 'Mindestens einmal'?",
    "answers": [
      "P(E) = 1 - P(kein einziges Mal)",
      "P(E) = 1 + P(alle Male)",
      "P(E) = P(kein Mal) / 2",
      "P(E) = P(Gegenereignis) * 100"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Statt viele Pfade aufzuaddieren, nutzt man $P(E) = 1 - P(\\bar{E})$."
  },
  {
    "id": "k9_mat_089",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie ändert sich die Wahrscheinlichkeit beim Ziehen OHNE Zurücklegen im 2. Zug?",
    "answers": [
      "Gesamtzahl im Nenner verringert sich",
      "Nenner u. Zähler verdoppeln sich",
      "Wahrscheinlichkeiten bleiben exakt gleich",
      "Nenner wird bei jedem Zug zu Null"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da das gezogene Objekt fehlt, sinkt die Gesamtzahl möglicher Ergebnisse im Nenner um $1$."
  },
  {
    "id": "k9_mat_090",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie berechnet man den Erwartungswert $E(X)$ eines Zufallsexperiments mit Werten $x_i$ u. Wahrscheinlichkeiten $p_i$?",
    "answers": [
      "E(X) = Summe(x_i * p_i)",
      "E(X) = Summe(x_i) / n",
      "E(X) = Produkt(x_i * p_i)",
      "E(X) = Höchster Wert x_i"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Erwartungswert ist die Summe der Produkte aller Werte mit ihren Eintrittswahrscheinlichkeiten ($E(X) = \\sum x_i p_i$)."
  },
  {
    "id": "k9_mat_091",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wann nennt man ein Glücksspiel 'fair'?",
    "answers": [
      "Erwartungswert des Gewinns = Einsatz",
      "Gewinnchance ist genau 50%",
      "Einsatz beträgt stets 1 Euro",
      "Bank gewinnt immer langfristig"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Spiel ist fair, wenn der erwartete Gewinn dem gezahlten Einsatz entspricht ($E(X) - \\text{Einsatz} = 0$)."
  },
  {
    "id": "k9_mat_092",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Ein Laplace-Würfel wird zweimal geworfen. Wie viele Pfade (Ergebnisse) hat das Gesamtergebnis im Baumdiagramm?",
    "answers": [
      "Anzahl: 36 Ergebnisse",
      "Anzahl: 12 Ergebnisse",
      "Anzahl: 6 Ergebnisse",
      "Anzahl: 64 Ergebnisse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Jeder der 6 Ausgänge im 1. Zug verzweigt zu 6 Ausgängen im 2. Zug ($6 \\cdot 6 = 36$)."
  },
  {
    "id": "k9_mat_093",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie hoch ist die Wahrscheinlichkeit, mit zwei fairen Würfeln die Augensumme $12$ zu würfeln?",
    "answers": [
      "Wahrscheinlichkeit: 1/36",
      "Wahrscheinlichkeit: 2/36",
      "Wahrscheinlichkeit: 1/12",
      "Wahrscheinlichkeit: 1/6"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nur die Kombination $(6;6)$ ergibt die Summe 12. $P = \\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{36}$."
  },
  {
    "id": "k9_mat_094",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie nennt man eine Tabelle, die Häufigkeiten oder Wahrscheinlichkeiten von zwei Merkmalen gleichzeitig darstellt?",
    "answers": [
      "Eine Vierfeldertafel",
      "Ein Histogramm Graph",
      "Eine Scheitelpunktform",
      "Eine Boxplot Grafik"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Vierfeldertafel dient der Übersicht von Kombinationen zweier dichotomer Merkmale."
  },
  {
    "id": "k9_mat_095",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie berechnet man die Schnittmenge $P(A \\cap B)$ zweier stochastisch unabhängiger Ereignisse $A$ u. $B$?",
    "answers": [
      "P(A und B) = P(A) * P(B)",
      "P(A und B) = P(A) + P(B)",
      "P(A und B) = P(A) / P(B)",
      "P(A und B) = P(A) - P(B)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zwei Ereignisse heißen unabhängig, wenn $P(A \\cap B) = P(A) \\cdot P(B)$ gilt."
  },
  {
    "id": "k9_mat_096",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie berechnet man den Mittelwert (arithmetisches Mittel) einer Datenreihe?",
    "answers": [
      "Summe aller Werte / Anzahl",
      "Höchster Wert minus Tiefster",
      "Der am häufigsten vorkommende Wert",
      "Der genau in der Mitte liegende Wert"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das arithmetische Mittel berechnet sich aus der Summe aller Datenwerte dividiert durch die Gesamtzahl der Daten."
  },
  {
    "id": "k9_mat_097",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was beschreibt der 'Median' (Zentralwert) einer geordneten Datenreihe?",
    "answers": [
      "Wert in der genauen Mitte",
      "Durchschnitt aller Werte",
      "Differenz Max minus Min",
      "Häufigster Wert der Reihe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Median ist der Wert, der eine geordnete Datenreihe genau in zwei hälftige Datenmengen teilt."
  },
  {
    "id": "k9_mat_098",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was versteht man unter dem Begriff 'Spannweite' in der Statistik?",
    "answers": [
      "Maximum minus Minimum",
      "Summe aller Datenwerte",
      "Wert des oberen Quartils",
      "Anzahl aller Beobachtungen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Spannweite ist der Abstand zwischen dem größten u. kleinsten Messwert ($x_{max} - x_{min}$)."
  },
  {
    "id": "k9_mat_099",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welche fünf Kenngrößen werden in einem Boxplot grafisch dargestellt?",
    "answers": [
      "Min, q1, Median, q3, Max",
      "Mittelwert, Varianz, Std",
      "5 beliebige Prozentwerte",
      "Nullstellen, Extremwerte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Boxplot zeigt das Minimum, das untere Quartil $q_1$, den Median, das obere Quartil $q_3$ u. das Maximum."
  },
  {
    "id": "k9_mat_100",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie viel Prozent der Daten liegen in einem Boxplot innerhalb der zentralen Box (zwischen $q_1$ u. $q_3$)?",
    "answers": [
      "Genau 50 % aller Daten",
      "Genau 25 % aller Daten",
      "Genau 75 % aller Daten",
      "Genau 90 % aller Daten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zwischen dem unteren u. oberen Quartil liegen stets die mittleren $50\\%$ der geordneten Daten."
  },





  // ================================================================
// KLASSE 9 - MATHEMATIK (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

  {
    "id": "k9_mat_001",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was zeichnet eine 'irrationale Zahl' im Unterschied zu rationalen Zahlen aus?",
    "answers": [
      "Nicht als Bruch darstellbar",
      "Immer kleiner als null",
      "Kann nie positiv sein",
      "Lässt sich als Bruch schreiben"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Irrationale Zahlen (wie $\\sqrt{2}$ oder $\\pi$) besitzen unendlich viele, nicht-periodische Nachkommastellen u. lassen sich nicht als Quotient zweier ganzer Zahlen darstellen."
  },
  {
    "id": "k9_mat_002",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welche Zahlenmenge ergibt sich aus der Vereinigung der rationalen u. irrationalen Zahlen?",
    "answers": [
      "Die reellen Zahlen (R)",
      "Die ganzen Zahlen (Z)",
      "Die natürlichen Zahlen (N)",
      "Die komplexen Zahlen (C)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die reellen Zahlen $\\mathbb{R}$ umfassen alle Punkte auf der durchgehenden Zahlengeraden."
  },
  {
    "id": "k9_mat_003",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was ist der exakte Wert der Quadratwurzel $\\sqrt{144}$?",
    "answers": [
      "Der Wert lautet 12",
      "Der Wert lautet 14",
      "Der Wert lautet 16",
      "Der Wert lautet 72"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da $12 \\cdot 12 = 144$ ist, beträgt die Quadratwurzel aus $144$ genau $12$."
  },
  {
    "id": "k9_mat_004",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "repräsentativ",
    "question": "Wie lautet das erste Potenzgesetz für die Multiplikation potenzieller Basen: $a^m \\cdot a^n = ...$?",
    "answers": [
      "Ergebnis lautet a^(m + n)",
      "Ergebnis lautet a^(m * n)",
      "Ergebnis lautet (a * a)^(m+n)",
      "Ergebnis lautet a^(m - n)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Potenzen mit gleicher Basis werden multipliziert, indem man die Basis beibehält u. die Exponenten addiert: $a^m \\cdot a^n = a^{m+n}$."
  },
  {
    "id": "k9_mat_005",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie vereinfacht man den Ausdruck $(a^m)^n$ nach den Potenzgesetzen?",
    "answers": [
      "Ergebnis lautet a^(m * n)",
      "Ergebnis lautet a^(m + n)",
      "Ergebnis lautet a^(m / n)",
      "Ergebnis lautet a^(m - n)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Potenz wird potenziert, indem man die Exponenten multipliziert: $(a^m)^n = a^{m \\cdot n}$."
  },
  {
    "id": "k9_mat_006",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welcher Wert ergibt sich per Definition für eine beliebige Zahl $a \\neq 0$ hoch Null ($a^0$)?",
    "answers": [
      "Ergebnis ist stets 1",
      "Ergebnis ist stets 0",
      "Ergebnis ist die Zahl a",
      "Ergebnis ist unendlich"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Jede Zahl ungleich Null hoch $0$ ergibt per Definition exakt $1$ ($a^0 = 1$)."
  },
  {
    "id": "k9_mat_007",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lässt sich eine Potenz mit negativem Exponenten $a^{-n}$ als Bruch schreiben?",
    "answers": [
      "Als Bruch 1 / (a^n)",
      "Als Bruch -1 / (a^n)",
      "Als Ausdruck -(a^n)",
      "Als Bruch a / (-n)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein negativer Exponent bedeutet den Kehrwert der Potenz mit positivem Exponenten: $a^{-n} = \\frac{1}{a^n}$."
  },
  {
    "id": "k9_mat_008",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie schreibt man die Zahl $0{,}000053$ in der wissenschaftlichen Zehnerpotenz-Schreibweise?",
    "answers": [
      "In der Form 5,3 * 10^-5",
      "In der Form 5,3 * 10^-4",
      "In der Form 53 * 10^-6",
      "In der Form 0,53 * 10^-4"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Komma wird um 5 Stellen nach rechts verschoben, somit lautet die wissenschaftliche Notation $5{,}3 \\cdot 10^{-5}$."
  },
  {
    "id": "k9_mat_009",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was ergibt das teilweise Wurzelziehen (Teil-Radizieren) von $\\sqrt{50}$?",
    "answers": [
      "Ausdruck lautet 5 * sqrt(2)",
      "Ausdruck lautet 2 * sqrt(5)",
      "Ausdruck lautet 25 * sqrt(2)",
      "Ausdruck lautet 10 * sqrt(5)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\sqrt{50} = \\sqrt{25 \\cdot 2} = \\sqrt{25} \\cdot \\sqrt{2} = 5 \\cdot \\sqrt{2}$."
  },
  {
    "id": "k9_mat_010",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Potenzdarstellung für die n-te Wurzel $\\sqrt[n]{a}$?",
    "answers": [
      "Als Potenz a^(1/n)",
      "Als Potenz a^(-n)",
      "Als Potenz (1/a)^n",
      "Als Potenz a^(n/1)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wurzeln lassen sich als Potenzen mit gebrochenen Exponenten schreiben: $\\sqrt[n]{a} = a^{\\frac{1}{n}}$."
  },

  // --- QUADRATISCHE FUNKTIONEN & GLEICHUNGEN (026 - 050) ---
  {
    "id": "k9_mat_026",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Funktionsgleichung der unveränderten Normalparabel?",
    "answers": [
      "Die Gleichung f(x) = x^2",
      "Die Gleichung f(x) = 2x",
      "Die Gleichung f(x) = x^3",
      "Die Gleichung f(x) = 1/x"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die einfachste quadratische Funktion hat die Funktionsgleichung $f(x) = x^2$ u. heißt Normalparabel."
  },
  {
    "id": "k9_mat_027",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welche Scheitelpunktform besitzt eine Parabel mit dem Scheitelpunkt $S(d \\mid e)$?",
    "answers": [
      "Gleichung f(x) = a*(x - d)^2 + e",
      "Gleichung f(x) = a*(x + d)^2 - e",
      "Gleichung f(x) = a*x^2 + d*x + e",
      "Gleichung f(x) = (a*x - d)^2 + e"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In der Scheitelpunktform $f(x) = a(x - d)^2 + e$ lässt sich der Scheitelpunkt $S(d \\mid e)$ direkt ablesen."
  },
  {
    "id": "k9_mat_028",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was bewirkt ein negativer Streckungsfaktor $a < 0$ vor dem quadratischen Term $f(x) = a \\cdot x^2$?",
    "answers": [
      "Parabel ist nach unten geöffnet",
      "Parabel ist nach oben geöffnet",
      "Parabel wird zur Geraden",
      "Parabel verschiebt sich nach rechts"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ist $a > 0$, ist die Parabel nach oben geöffnet; ist $a < 0$, ist sie nach unten geöffnet."
  },
  {
    "id": "k9_mat_029",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wo liegt der Scheitelpunkt der Parabel mit der Gleichung $f(x) = (x - 3)^2 + 5$?",
    "answers": [
      "Am Punkt S(3 | 5)",
      "Am Punkt S(-3 | 5)",
      "Am Punkt S(3 | -5)",
      "Am Punkt S(-3 | -5)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aus $f(x) = (x - d)^2 + e$ liest man $d = 3$ u. $e = 5$ ab, der Scheitelpunkt ist $S(3 \\mid 5)$."
  },
  {
    "id": "k9_mat_030",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die allgemeine Form der p-q-Formel zur Lösung von $x^2 + p \\cdot x + q = 0$?",
    "answers": [
      "x = -p/2 +- sqrt((p/2)^2 - q)",
      "x = p/2 +- sqrt((p/2)^2 + q)",
      "x = -p +- sqrt(p^2 - 4q)",
      "x = -q/2 +- sqrt((q/2)^2 - p)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Lösungsformel lautet $x_{1,2} = -\\frac{p}{2} \\pm \\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}$."
  },
  {
    "id": "k9_mat_031",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welche Voraussetzung muss erfüllt sein, damit man die p-q-Formel direkt anwenden darf?",
    "answers": [
      "Koeffizient vor x^2 muss 1 sein",
      "Der Wert von q muss 0 sein",
      "Die Gleichung muss 2 Wurzeln haben",
      "Der Wert von p muss positiv sein"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die quadratische Gleichung muss in der Normalform $x^2 + px + q = 0$ vorliegen (der Faktor vor $x^2$ muss $1$ sein)."
  },
  {
    "id": "k9_mat_032",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was gibt die 'Diskriminante' $D = \\left(\\frac{p}{2}\\right)^2 - q$ unter der Wurzel der p-q-Formel an?",
    "answers": [
      "Anzahl der reellen Lösungen",
      "Den genauen Scheitelpunkt",
      "Die Steigung der Tangente",
      "Den Schnittpunkt mit der y-Achse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ist $D > 0$, gibt es 2 Lösungen; ist $D = 0$, genau 1 Lösung; ist $D < 0$, gibt es keine reelle Lösung."
  },
  {
    "id": "k9_mat_033",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie viele reelle Lösungen hat eine quadratische Gleichung, wenn die Diskriminante $D < 0$ ist?",
    "answers": [
      "Genau null reelle Lösungen",
      "Genau eine reelle Lösung",
      "Genau zwei reelle Lösungen",
      "Unendlich viele Lösungen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da man aus negativen reellen Zahlen keine Quadratwurzel ziehen kann, existieren bei $D < 0$ keine reellen Lösungen."
  },
  {
    "id": "k9_mat_034",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lauten die Lösungen der quadratischen Gleichung $x^2 - 9 = 0$?",
    "answers": [
      "Die Werte x1 = 3 u. x2 = -3",
      "Nur die einzige Lösung x = 3",
      "Nur die einzige Lösung x = 9",
      "Die Werte x1 = 81 u. x2 = -81"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$x^2 = 9 \\Rightarrow x = \\pm \\sqrt{9} \\Rightarrow x_1 = 3, x_2 = -3$."
  },
  {
    "id": "k9_mat_035",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Mit welchem mathematischen Verfahren bringt man $x^2 + p \\cdot x$ in die Form $(x + d)^2 + e$?",
    "answers": [
      "Durch quadratische Ergänzung",
      "Durch Anwendung der Strahlensätze",
      "Durch partielles Radizieren",
      "Durch die Anwendung des MINT-Satzes"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mithilfe der quadratischen Ergänzung $\\left(\\frac{p}{2}\\right)^2$ wandelt man die allgemeine Form in die Scheitelpunktform um."
  },

  // --- GEOMETRIE (051 - 075) ---
  {
    "id": "k9_mat_051",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "In welcher Art von Dreieck gilt der Satz des Pythagoras $a^2 + b^2 = c^2$?",
    "answers": [
      "In allen rechtwinkligen Dreiecken",
      "In allen gleichseitigen Dreiecken",
      "In allen stumpfwinkligen Dreiecken",
      "In völlig beliebigen Dreiecken"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Satz des Pythagoras gilt ausschließlich in Dreiecken mit einem rechten Winkel ($90^\\circ$)."
  },
  {
    "id": "k9_mat_052",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie nennt man die längste Seite eines rechtwinkligen Dreiecks, die dem rechten Winkel gegenüberliegt?",
    "answers": [
      "Die Seite heißt Hypotenuse",
      "Die Seite heißt Ankathete",
      "Die Seite heißt Gegenkathete",
      "Die Seite heißt Transversale"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Hypotenuse liegt stets dem rechten Winkel gegenüber u. ist die längste Seite des Dreiecks."
  },
  {
    "id": "k9_mat_053",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Ein rechtwinkliges Dreieck hat die Katheten $a = 3\\text{ cm}$ u. $b = 4\\text{ cm}$. Wie lang ist die Hypotenuse $c$?",
    "answers": [
      "Die Länge beträgt 5 cm",
      "Die Länge beträgt 6 cm",
      "Die Länge beträgt 7 cm",
      "Die Länge beträgt 25 cm"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$c^2 = 3^2 + 4^2 = 9 + 16 = 25 \\Rightarrow c = \\sqrt{25} = 5\\text{ cm}$ (Pythagoreisches Tripel $3-4-5$)."
  },
  {
    "id": "k9_mat_054",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was besagt der Höhensatz des Euklid im rechtwinkligen Dreieck ($h^2 = ...$)?",
    "answers": [
      "Höhenquadrat h^2 = p * q",
      "Höhenquadrat h^2 = a * b",
      "Höhenquadrat h^2 = c * p",
      "Höhenquadrat h^2 = p + q"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Höhensatz besagt: In einem rechtwinkligen Dreieck ist das Quadrat über der Höhe flächengleich zum Rechteck aus den beiden Hypotenusenabschnitten $p$ u. $q$ ($h^2 = p \\cdot q$)."
  },
  {
    "id": "k9_mat_055",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet der Kathetensatz des Euklid für die Kathete $a$ ($a^2 = ...$)?",
    "answers": [
      "Kathetenquadrat a^2 = c * p",
      "Kathetenquadrat a^2 = p * q",
      "Kathetenquadrat a^2 = c * q",
      "Kathetenquadrat a^2 = b * h"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Kathetensatz lautet $a^2 = c \\cdot p$ bzw. $b^2 = c \\cdot q$."
  },
  {
    "id": "k9_mat_056",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welche Voraussetzung muss gegeben sein, um die Strahlensätze anwenden zu dürfen?",
    "answers": [
      "Zwei Parallelen schneiden Strahlen",
      "Es liegt ein rechter Winkel vor",
      "Alle Dreiecke müssen kongruent sein",
      "Die Figuren müssen Kreise sein"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Strahlensätze gelten, wenn zwei sich schneidende Geraden (oder Strahlen) von zwei parallelen Geraden geschnitten werden."
  },
  {
    "id": "k9_mat_057",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was besagt der 1. Strahlensatz im Kern über die Abschnitte auf den Strahlen?",
    "answers": [
      "Verhältnis der Strahlstücke ist gleich",
      "Verhältnis der Parallelen ist stets 1",
      "Summe der Abschnitte ergibt 180 Grad",
      "Produkt der Strahlstücke ist null"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der 1. Strahlensatz vergleicht Abschnitte auf den Strahlen: $\\frac{SA}{SA'} = \\frac{SB}{SB'}$."
  },
  {
    "id": "k9_mat_058",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Formel für die Diagonale $d$ in einem Quadrat mit der Seitenlänge $a$?",
    "answers": [
      "Formel lautet d = a * sqrt(2)",
      "Formel lautet d = a * sqrt(3)",
      "Formel lautet d = 2 * a",
      "Formel lautet d = a^2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nach dem Satz des Pythagoras gilt $d^2 = a^2 + a^2 = 2a^2 \\Rightarrow d = a\\sqrt{2}$."
  },
  {
    "id": "k9_mat_059",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Formel für die Höhe $h$ in einem gleichseitigen Dreieck mit der Seitenlänge $a$?",
    "answers": [
      "Formel lautet h = (a / 2) * sqrt(3)",
      "Formel lautet h = a * sqrt(2)",
      "Formel lautet h = (a / 3) * sqrt(2)",
      "Formel lautet h = a / 2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$h^2 + \\left(\\frac{a}{2}\\right)^2 = a^2 \\Rightarrow h^2 = a^2 - \\frac{a^2}{4} = \\frac{3}{4}a^2 \\Rightarrow h = \\frac{a}{2}\\sqrt{3}$."
  },
  {
    "id": "k9_mat_060",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie verändert sich der Flächeninhalt einer Figur, wenn alle ihre Längen um den Faktor $k$ vergrößert werden?",
    "answers": [
      "Fläche wächst um Faktor k^2",
      "Fläche wächst um Faktor k",
      "Fläche wächst um Faktor 2*k",
      "Fläche wächst um Faktor k^3"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei ähnlichen Figuren verhalten sich Längen wie $k$, Flächeninhalte wie $k^2$ u. Volumina wie $k^3$."
  },

  // --- TRIGONOMETRIE, KÖRPER & STOCHASTIK (076 - 100) ---
  {
    "id": "k9_mat_076",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie ist der Sinus eines spitzen Winkels $\\alpha$ im rechtwinkligen Dreieck definiert?",
    "answers": [
      "Sinus = Gegenkathete / Hypotenuse",
      "Sinus = Ankathete / Hypotenuse",
      "Sinus = Gegenkathete / Ankathete",
      "Sinus = Ankathete / Gegenkathete"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Merkhilfe (GAGA/HHAG): $\\sin(\\alpha) = \\frac{\\text{Gegenkathete}}{\\text{Hypotenuse}}$."
  },
  {
    "id": "k9_mat_077",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie ist der Kosinus (Cos) eines Winkel $\\alpha$ im rechtwinkligen Dreieck definiert?",
    "answers": [
      "Kosinus = Ankathete / Hypotenuse",
      "Kosinus = Gegenkathete / Hypotenuse",
      "Kosinus = Gegenkathete / Ankathete",
      "Kosinus = Hypotenuse / Ankathete"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\cos(\\alpha) = \\frac{\\text{Ankathete}}{\\text{Hypotenuse}}$."
  },
  {
    "id": "k9_mat_078",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie ist der Tangens (Tan) eines Winkels $\\alpha$ definiert?",
    "answers": [
      "Tangens = Gegenkathete / Ankathete",
      "Tangens = Ankathete / Hypotenuse",
      "Tangens = Hypotenuse / Gegenkathete",
      "Tangens = Ankathete / Gegenkathete"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\tan(\\alpha) = \\frac{\\text{Gegenkathete}}{\\text{Ankathete}} = \\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$."
  },
  {
    "id": "k9_mat_079",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Welchen exakten Wert hat der Sinus von $30^\\circ$ ($\\sin(30^\\circ)$)?",
    "answers": [
      "Der Wert beträgt genau 0,5",
      "Der Wert beträgt genau 1,0",
      "Der Wert beträgt sqrt(2)/2",
      "Der Wert beträgt sqrt(3)/2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\sin(30^\\circ) = \\frac{1}{2} = 0{,}5$."
  },
  {
    "id": "k9_mat_080",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet der trigonometrische Pythagoras (Zusammenhang zwischen Sinus u. Kosinus)?",
    "answers": [
      "sin^2(a) + cos^2(a) = 1",
      "sin(a) + cos(a) = 1",
      "tan^2(a) + 1 = sin^2(a)",
      "sin^2(a) - cos^2(a) = 1"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Für jeden Winkel $\\alpha$ gilt: $\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$."
  },
  {
    "id": "k9_mat_081",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie berechnet man das Volumen $V$ eines geraden Zylinders mit Radius $r$ u. Höhe $h$?",
    "answers": [
      "Volumen V = pi * r^2 * h",
      "Volumen V = (1/3) * pi * r^2 * h",
      "Volumen V = 2 * pi * r * h",
      "Volumen V = (4/3) * pi * r^3"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Zylindervolumen berechnet sich aus Grundfläche (Kreis) mal Höhe: $V = A_G \\cdot h = \\pi \\cdot r^2 \\cdot h$."
  },
  {
    "id": "k9_mat_082",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Volumenformel für einen Kegel mit Radius $r$ u. Höhe $h$?",
    "answers": [
      "Volumen V = (1/3) * pi * r^2 * h",
      "Volumen V = pi * r^2 * h",
      "Volumen V = (1/2) * pi * r^2 * h",
      "Volumen V = (4/3) * pi * r^3"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Kegel besitzt exakt ein Drittel des Volumens eines Zylinders mit gleicher Grundfläche u. Höhe: $V = \\frac{1}{3} \\pi r^2 h$."
  },
  {
    "id": "k9_mat_083",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Formel zur Berechnung des Volumens $V$ einer Kugel mit Radius $r$?",
    "answers": [
      "Volumen V = (4/3) * pi * r^3",
      "Volumen V = 4 * pi * r^2",
      "Volumen V = (1/3) * pi * r^3",
      "Volumen V = pi * r^3"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Kugelvolumen berechnet sich mit $V = \\frac{4}{3} \\pi r^3$."
  },
  {
    "id": "k9_mat_084",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie berechnet man die Oberflächenseite $O$ einer Kugel mit Radius $r$?",
    "answers": [
      "Oberfläche O = 4 * pi * r^2",
      "Oberfläche O = 2 * pi * r^2",
      "Oberfläche O = (4/3) * pi * r^2",
      "Oberfläche O = pi * r^2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Kugeloberfläche entspricht genau dem Vierfachen der Fläche ihres Großkreises: $O = 4 \\pi r^2$."
  },
  {
    "id": "k9_mat_085",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was besagt die 1. Pfadregel (Produktregel) bei Baumdiagrammen in der Wahrscheinlichkeitsrechnung?",
    "answers": [
      "Wahrscheinlichkeiten längs Pfad multiplizieren",
      "Wahrscheinlichkeiten längs Pfad addieren",
      "Wahrscheinlichkeiten voneinander subtrahieren",
      "Wahrscheinlichkeiten durch Anzahl dividieren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Wahrscheinlichkeit eines Ereignisses (Pfades) ist das Produkt der Wahrscheinlichkeiten entlang dieses Pfades."
  },
  {
    "id": "k9_mat_086",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was besagt die 2. Pfadregel (Summenregel) bei Baumdiagrammen?",
    "answers": [
      "Pfadwahrscheinlichkeiten zusammengerechnet addieren",
      "Pfadwahrscheinlichkeiten komplett multiplizieren",
      "Kehrwerte aller Ergebnisse bilden",
      "Nur den allerersten Pfad berücksichtigen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gehören mehrere Pfade zum selben Ereignis, werden deren einzelnen Pfadwahrscheinlichkeiten addiert."
  },
  {
    "id": "k9_mat_087",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was versteht man unter einem 'Laplace-Experiment'?",
    "answers": [
      "Zufallsexperiment mit gleich wahrscheinlichen Ausgängen",
      "Experiment mit unendlich vielen Ausgängen",
      "Physikalischer Test im Labor zur Messung",
      "Zufallstest, der nur genau einmal durchgeführt wird"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Laplace-Experiment liegt vor, wenn alle möglichen Ergebnisse exakt dieselbe Wahrscheinlichkeit besitzen (z. B. idealer Würfel)."
  },
  {
    "id": "k9_mat_088",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie berechnet man die Wahrscheinlichkeit $P(E)$ bei einem Laplace-Experiment?",
    "answers": [
      "Günstige Ergebnisse / Mögliche Ergebnisse",
      "Mögliche Ergebnisse / Günstige Ergebnisse",
      "Günstige Ergebnisse * Mögliche Ergebnisse",
      "Günstige Ergebnisse - Mögliche Ergebnisse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$P(E) = \\frac{|E|}{|\\Omega|} = \\frac{\\text{Anzahl der für E günstigen Ergebnisse}}{\\text{Anzahl aller möglichen Ergebnisse}}$."
  },
  {
    "id": "k9_mat_089",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie lautet die Beziehung zwischen der Wahrscheinlichkeit eines Ereignisses $P(E)$ u. seines Gegenereignisses $P(\\bar{E})$?",
    "answers": [
      "P(E) + P(Gegenereignis) = 1",
      "P(E) * P(Gegenereignis) = 1",
      "P(E) - P(Gegenereignis) = 0.5",
      "P(E) / P(Gegenereignis) = 2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Summe aus Ereignis u. Gegenereignis ergibt immer $100\\%$ ($1$). Daher gilt $P(\\bar{E}) = 1 - P(E)$."
  },
  {
    "id": "k9_mat_090",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie groß ist die Wahrscheinlichkeit, bei einem fairen 6-seitigen Würfel eine Augenzahl größer als 4 zu würfeln?",
    "answers": [
      "Wahrscheinlichkeit beträgt 2/6 = 1/3",
      "Wahrscheinlichkeit beträgt 3/6 = 1/2",
      "Wahrscheinlichkeit beträgt 1/6",
      "Wahrscheinlichkeit beträgt 4/6 = 2/3"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Größer als $4$ bedeutet $5$ oder $6$ ($2$ günstige Ergebnisse von $6$ möglichen) $\\Rightarrow P = \\frac{2}{6} = \\frac{1}{3}$."
  },
  {
    "id": "k9_mat_091",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was beschreibt der Begriff 'Ziehen OHNE Zurücklegen' bei einer Urne?",
    "answers": [
      "Gesamtzahl sinkt nach jedem Zug",
      "Wahrscheinlichkeit bleibt absolut konstant",
      "Kugeln werden nach dem Zug verdoppelt",
      "Gleiche Kugel kann mehrfach gezogen werden"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Ziehen ohne Zurücklegen verringern sich sowohl die Gesamtzahl der Objekte als auch die verbleibenden günstigen Objekte im nächsten Schritt."
  },
  {
    "id": "k9_mat_092",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was ergibt $\\sin^2(45^\\circ) + \\cos^2(45^\\circ)$?",
    "answers": [
      "Ergebnis ist exakt 1",
      "Ergebnis ist exakt 0,5",
      "Ergebnis ist sqrt(2)",
      "Ergebnis ist exakt 2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nach dem trigonometrischen Pythagoras gilt $\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1$ für JEDEN Winkel $\\alpha$."
  },
  {
    "id": "k9_mat_093",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Ein Zylinder u. ein Kegel haben dieselbe Grundfläche $A_G$ u. dieselbe Höhe $h$. In welchem Verhältnis stehen ihre Volumina?",
    "answers": [
      "Kegel hat 1/3 des Zylindervolumens",
      "Kegel hat 1/2 des Zylindervolumens",
      "Beide Volumina sind exakt identisch",
      "Kegel hat doppeltes Zylindervolumen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$V_{\\text{Kegel}} = \\frac{1}{3} A_G h$, während $V_{\\text{Zylinder}} = A_G h$ beträgt."
  },
  {
    "id": "k9_mat_094",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie nennt man die Verbindungsstrecke von der Spitze eines Kegels zum Rand der Grundfläche?",
    "answers": [
      "Die Mantellinie (s)",
      "Die Kegelhöhe (h)",
      "Der Grundkreisradius (r)",
      "Die Kegelachse (a)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Mantellinie $s$ verbindet die Kegelspitze mit der Kreislinie der Grundfläche."
  },
  {
    "id": "k9_mat_095",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie hängen Höhe $h$, Radius $r$ u. Mantellinie $s$ bei einem geraden Kreiskegel zusammen?",
    "answers": [
      "Es gilt h^2 + r^2 = s^2",
      "Es gilt h + r = s",
      "Es gilt h^2 + s^2 = r^2",
      "Es gilt h * r = s^2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Höhe $h$, Radius $r$ u. Mantellinie $s$ bilden ein rechtwinkliges Dreieck mit $s$ als Hypotenuse ($h^2 + r^2 = s^2$)."
  },
  {
    "id": "k9_mat_096",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie berechnet man den Flächeninhalt der Mantelfläche $M$ eines geraden Kegels?",
    "answers": [
      "Mantelfläche M = pi * r * s",
      "Mantelfläche M = 2 * pi * r * h",
      "Mantelfläche M = pi * r^2 * s",
      "Mantelfläche M = (1/3) * pi * r * s"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Mantelfläche eines Kegels errechnet sich mit $M = \\pi \\cdot r \\cdot s$."
  },
  {
    "id": "k9_mat_097",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie nennt man die Abweichung vom Mittelwert, wenn man Daten statistisch auswertet?",
    "answers": [
      "Die Streuung (Varianz/Standardabw.)",
      "Den Median der Stichprobe",
      "Den absoluten Häufigkeitswert",
      "Den Modalwert der Daten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Varianz u. Standardabweichung messen die Streuung von Datenwerten um ihren Mittelwert."
  },
  {
    "id": "k9_mat_098",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was beschreibt der 'Median' einer geordneten Datenreihe?",
    "answers": [
      "Der genau in der Mitte liegende Wert",
      "Der am häufigsten vorkommende Wert",
      "Der Durchschnitt aller Summenwerte",
      "Die Differenz aus Maximum u. Minimum"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Median teilt eine geordnete Datenreihe in zwei genau gleich große Hälften."
  },
  {
    "id": "k9_mat_099",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Was ist die 'Spannweite' einer statistischen Erhebung?",
    "answers": [
      "Differenz zwischen Maximum u. Minimum",
      "Summe aller erfassten Messwerte",
      "Quotient aus Mittelwert u. Anzahl",
      "Anzahl der Datenpunkte im Test"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Spannweite = Größter Messwert (Maximum) minus kleinster Messwert (Minimum)."
  },
  {
    "id": "k9_mat_0100",
    "category": "k9_mathe",
    "area": "schule",
    "grade": 9,
    "subject": "mathematik",
    "question": "Wie verhält sich die relative Häufigkeit eines Ereignisses bei extrem vielen Versuchsdurchführungen?",
    "answers": [
      "Stabilisiert sich nahe der Wahrscheinlichkeit",
      "Schwankt immer stärker hin u. her",
      "Geht gegen den Wert Null",
      "Wird genau doppelt so groß"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Gesetz der großen Zahlen besagt, dass sich die relative Häufigkeit bei steigender Versuchszahl der theoretischen Wahrscheinlichkeit annähert."
  },
  {"id":"k9ma101","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"Was ist √169?","answers":["12","13","14","15"],"correct":1,"difficulty":"mittel","points":10,"explanation":"13×13=169."},
  {"id":"k9ma102","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"Löse: 5x=35","answers":["5","6","7","8"],"correct":2,"difficulty":"mittel","points":10,"explanation":"x=7."},
  {"id":"k9ma103","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"2³·2²=?","answers":["2⁵","2⁶","4⁵","2"],"correct":0,"difficulty":"mittel","points":10,"explanation":"2⁵."},
  {"id":"k9ma104","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"15% von 200?","answers":["20","25","30","35"],"correct":2,"difficulty":"mittel","points":10,"explanation":"30."},
  {"id":"k9ma105","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"Steigung (0,0)→(4,8)?","answers":["1","2","3","4"],"correct":1,"difficulty":"mittel","points":10,"explanation":"2."},
  {"id":"k9ma106","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"Fläche Rechteck 9×4?","answers":["13","36","26","18"],"correct":1,"difficulty":"mittel","points":10,"explanation":"36."},
  {"id":"k9ma107","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"sin(0°)=?","answers":["0","1","0,5","−1"],"correct":0,"difficulty":"mittel","points":10,"explanation":"0."},
  {"id":"k9ma108","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"log₁₀(100)=?","answers":["1","2","10","100"],"correct":1,"difficulty":"mittel","points":10,"explanation":"2."},
  {"id":"k9ma109","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"x²=36 → x=?","answers":["6","±6","36","−6"],"correct":1,"difficulty":"mittel","points":10,"explanation":"±6."},
  {"id":"k9ma110","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"3-4-5 Dreieck: c=?","answers":["5","6","7","8"],"correct":0,"difficulty":"mittel","points":10,"explanation":"5."},
  {"id":"k9ma111","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"P(Kopf) fair coin?","answers":["0","1/2","1/3","1"],"correct":1,"difficulty":"mittel","points":10,"explanation":"1/2."},
  {"id":"k9ma112","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"Mittel 10,20,30?","answers":["15","20","25","60"],"correct":1,"difficulty":"mittel","points":10,"explanation":"20."},
  {"id":"k9ma113","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"1 h = ? s","answers":["60","3600","600","1000"],"correct":1,"difficulty":"mittel","points":10,"explanation":"3600."},
  {"id":"k9ma114","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"2/3 + 1/6=?","answers":["1/2","5/6","1","3/6"],"correct":1,"difficulty":"mittel","points":10,"explanation":"5/6."},
  {"id":"k9ma115","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"a⁴/a²=?","answers":["a²","a⁶","a","2a"],"correct":0,"difficulty":"mittel","points":10,"explanation":"a²."},
  {"id":"k9ma116","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"Nullstelle y=x+5?","answers":["0","−5","5","1"],"correct":1,"difficulty":"mittel","points":10,"explanation":"−5."},
  {"id":"k9ma117","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"Würfel Volumen a=5?","answers":["25","125","15","100"],"correct":1,"difficulty":"mittel","points":10,"explanation":"125."},
  {"id":"k9ma118","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"Median 1,3,100?","answers":["1","3","100","34"],"correct":1,"difficulty":"mittel","points":10,"explanation":"3."},
  {"id":"k9ma119","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"0,5 als Bruch?","answers":["1/5","1/2","2/5","1/4"],"correct":1,"difficulty":"mittel","points":10,"explanation":"1/2."},
  {"id":"k9ma120","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"3a+2a=?","answers":["5a","6a","a⁵","5"],"correct":0,"difficulty":"mittel","points":10,"explanation":"5a."},
  {"id":"k9ma121","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"Primzahl?","answers":["27","29","33","35"],"correct":1,"difficulty":"mittel","points":10,"explanation":"29."},
  {"id":"k9ma122","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"Runde 2,35 auf Zehntel?","answers":["2,3","2,4","2,35","2"],"correct":1,"difficulty":"mittel","points":10,"explanation":"2,4."},
  {"id":"k9ma123","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"f(x)=x+1, f(10)=?","answers":["9","11","10","12"],"correct":1,"difficulty":"mittel","points":10,"explanation":"11."},
  {"id":"k9ma124","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"x−3>2 →","answers":["x>5","x<5","x>2","x=5"],"correct":0,"difficulty":"mittel","points":10,"explanation":"x>5."},
  {"id":"k9ma125","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"Dreisatz 2→6, 5→?","answers":["10","15","12","30"],"correct":1,"difficulty":"mittel","points":10,"explanation":"15."},
  {"id":"k9ma126","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"U Kreis d=10 π≈3?","answers":["30","15","60","10"],"correct":0,"difficulty":"mittel","points":10,"explanation":"≈30."},
  {"id":"k9ma127","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"(−2)×3=?","answers":["−6","6","−5","5"],"correct":0,"difficulty":"mittel","points":10,"explanation":"−6."},
  {"id":"k9ma128","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"Quadrant III: x und y …","answers":["beide +","beide −","x+ y−","x− y+"],"correct":1,"difficulty":"mittel","points":10,"explanation":"beide negativ."},
  {"id":"k9ma129","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"4²=?","answers":["8","16","32","2"],"correct":1,"difficulty":"mittel","points":10,"explanation":"16."},
  {"id":"k9ma130","category":"k9_mathe","area":"schule","grade":9,"subject":"mathe","topic":"erweiterung","question":"5! =?","answers":["25","120","60","20"],"correct":1,"difficulty":"mittel","points":10,"explanation":"120."}
];
// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K9_MATHEMATIK_QUESTIONS = K9_MATHEMATIK_QUESTIONS;
}