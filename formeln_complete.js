// ============================================================
// FORMELN_COMPLETE.JS - v1.0
// Alle Formeln aus formeln.js + formula_cards_001.js + formula_cards_002.js
// Zusammengefasst und optimiert für EduPlay Hub
// ============================================================

// ============================================================
// 1. FORMULA_DATABASE - aus formeln.js
// Klassen 1-13 mit einfachen Erklärungen
// ============================================================
const FORMULA_DATABASE = {
    // ============================================================
    // KLASSE 1 - Grundrechenarten
    // ============================================================
    k1: {
        label: "Klasse 1 · Grundrechenarten",
        formulas: [
            { name: "Plus rechnen", formula: "3 + 4 = 7", explanation: "Zwei Zahlen zusammenzählen" },
            { name: "Minus rechnen", formula: "7 - 4 = 3", explanation: "Eine Zahl wegnehmen" },
            { name: "Zahlen bis 10", formula: "1,2,3,4,5,6,7,8,9,10", explanation: "Die ersten zehn Zahlen" },
            { name: "Verdoppeln", formula: "4 + 4 = 8", explanation: "Eine Zahl mit sich selbst addieren" },
            { name: "Halbieren", formula: "8 : 2 = 4", explanation: "Eine Zahl durch 2 teilen" },
            { name: "Nachbarzahlen", formula: "7 → 8 → 9", explanation: "Die Zahl davor und danach" },
            { name: "Größer & Kleiner", formula: "3 < 5", explanation: "Die Spitze zeigt zur kleineren Zahl" },
            { name: "Plus mit 0", formula: "5 + 0 = 5", explanation: "Null ändert nichts" },
            { name: "Minus mit 0", formula: "5 - 0 = 5", explanation: "Null ändert nichts" },
            { name: "Zahlen ordnen", formula: "0--1--2--3--4--5", explanation: "Zahlen der Größe nach aufschreiben" }
        ]
    },

    // ============================================================
    // KLASSE 2 - Einmaleins & Maße
    // ============================================================
    k2: {
        label: "Klasse 2 · Einmaleins & Maße",
        formulas: [
            { name: "1er-Reihe", formula: "1 × 1 = 1 bis 10", explanation: "Jede Zahl × 1 bleibt gleich" },
            { name: "2er-Reihe", formula: "2 × 1 = 2 bis 20", explanation: "Alles verdoppeln" },
            { name: "5er-Reihe", formula: "5 × 1 = 5 bis 50", explanation: "Immer 5er-Schritte" },
            { name: "10er-Reihe", formula: "10 × 1 = 10 bis 100", explanation: "Einfach eine Null dranhängen" },
            { name: "1 Stunde", formula: "1 h = 60 min", explanation: "Eine Stunde sind 60 Minuten" },
            { name: "1 Meter", formula: "1 m = 100 cm", explanation: "Ein Meter sind 100 Zentimeter" },
            { name: "1 Liter", formula: "1 l = 1000 ml", explanation: "Ein Liter sind 1000 Milliliter" },
            { name: "1 Kilogramm", formula: "1 kg = 1000 g", explanation: "Ein Kilo sind 1000 Gramm" },
            { name: "1 Euro", formula: "1 € = 100 ct", explanation: "Ein Euro sind 100 Cent" },
            { name: "3er-Reihe", formula: "3 × 1 = 3 bis 30", explanation: "Dreierschritte" },
            { name: "4er-Reihe", formula: "4 × 1 = 4 bis 40", explanation: "Vierschritte" },
            { name: "6er-Reihe", formula: "6 × 1 = 6 bis 60", explanation: "Sechserschritte" }
        ]
    },

    // ============================================================
    // KLASSE 3 - Multiplikation & Geometrie
    // ============================================================
    k3: {
        label: "Klasse 3 · Multiplikation & Geometrie",
        formulas: [
            { name: "7er-Reihe", formula: "7 × 1 = 7 bis 70", explanation: "Siebenerschritte" },
            { name: "8er-Reihe", formula: "8 × 1 = 8 bis 80", explanation: "Achtererschritte" },
            { name: "9er-Reihe", formula: "9 × 1 = 9 bis 90", explanation: "Neunerschritte" },
            { name: "Umfang Rechteck", formula: "U = 2 × (a + b)", explanation: "Alle Seiten einmal zusammenzählen" },
            { name: "Umfang Quadrat", formula: "U = 4 × a", explanation: "Eine Seite × 4" },
            { name: "Fläche Rechteck", formula: "A = a × b", explanation: "Länge × Breite" },
            { name: "Fläche Quadrat", formula: "A = a × a", explanation: "Seite × Seite" },
            { name: "Dreisatz", formula: "2 Äpfel = 4€ → 5 Äpfel = 10€", explanation: "Je mehr, desto mehr" },
            { name: "Runden auf Zehner", formula: "123 → 120", explanation: "Auf den nächsten Zehner runden" },
            { name: "Runden auf Hunderter", formula: "123 → 100", explanation: "Auf den nächsten Hunderter runden" },
            { name: "Winkel im Dreieck", formula: "α + β + γ = 180°", explanation: "Alle Winkel zusammen ergeben 180°" },
            { name: "Quadrat", formula: "Alle Seiten gleich lang", explanation: "Ein Quadrat hat 4 gleiche Seiten" }
        ]
    },

    // ============================================================
    // KLASSE 4 - Brüche & Prozent
    // ============================================================
    k4: {
        label: "Klasse 4 · Brüche & Prozent",
        formulas: [
            { name: "Bruch", formula: "3/4", explanation: "Oben = Zähler, unten = Nenner" },
            { name: "Hälfte", formula: "1/2 = 50% = 0,5", explanation: "Die Hälfte vom Ganzen" },
            { name: "Brüche addieren", formula: "1/2 + 1/4 = 3/4", explanation: "Erst gleichnamig machen, dann addieren" },
            { name: "Bruch × Zahl", formula: "3 × 1/4 = 3/4", explanation: "Zahl × Zähler, Nenner bleibt" },
            { name: "Prozent", formula: "25% = 25/100 = 1/4", explanation: "Von 100 Teilen 25 nehmen" },
            { name: "Grundwert", formula: "G = 100%", explanation: "Das Ganze ist immer 100%" },
            { name: "Prozentwert", formula: "W = p% × G", explanation: "Der Anteil vom Ganzen" },
            { name: "Prozentsatz", formula: "p% = W / G × 100", explanation: "Wie viel Prozent vom Ganzen?" },
            { name: "Bruch kürzen", formula: "6/8 = 3/4", explanation: "Zähler und Nenner durch dieselbe Zahl teilen" },
            { name: "Bruch erweitern", formula: "2/3 = 4/6", explanation: "Zähler und Nenner mit derselben Zahl malnehmen" },
            { name: "Gemischte Zahl", formula: "1 1/2 = 3/2", explanation: "Ganze × Nenner + Zähler" },
            { name: "Kehrwert", formula: "a/b → b/a", explanation: "Zähler und Nenner vertauschen" }
        ]
    },

    // ============================================================
    // KLASSE 5 - Brüche & Dezimalzahlen
    // ============================================================
    k5: {
        label: "Klasse 5 · Brüche & Dezimalzahlen",
        formulas: [
            { name: "Bruch → Dezimal", formula: "3/4 = 0,75", explanation: "Zähler durch Nenner teilen" },
            { name: "Dezimal → Bruch", formula: "0,75 = 75/100 = 3/4", explanation: "Als Bruch schreiben und kürzen" },
            { name: "Runden", formula: "3,146 → 3,15", explanation: "Auf zwei Stellen nach dem Komma runden" },
            { name: "Durchschnitt", formula: "(a + b + c) / 3", explanation: "Alles zusammenzählen, durch Anzahl teilen" },
            { name: "Primzahl", formula: "2, 3, 5, 7, 11...", explanation: "Nur durch 1 und sich selbst teilbar" },
            { name: "Teiler", formula: "12 → 1,2,3,4,6,12", explanation: "Alle Zahlen, durch die 12 teilbar ist" },
            { name: "Vielfache", formula: "3 → 3,6,9,12,15...", explanation: "Die 3er-Reihe" },
            { name: "Kommazahlen", formula: "3,14 = 3 + 14/100", explanation: "Zahlen mit Komma" },
            { name: "Zehnerpotenzen", formula: "10⁰=1, 10¹=10, 10²=100", explanation: "10er-Potenzen" },
            { name: "Dezimal vergleichen", formula: "3,14 < 3,2", explanation: "Nach dem Komma vergleichen" }
        ]
    },

    // ============================================================
    // KLASSE 6 - Prozent, Zins & Geometrie
    // ============================================================
    k6: {
        label: "Klasse 6 · Prozent, Zins & Geometrie",
        formulas: [
            { name: "Prozentwert", formula: "W = G × p / 100", explanation: "Grundwert × Prozentsatz ÷ 100" },
            { name: "Grundwert", formula: "G = W × 100 / p", explanation: "Prozentwert × 100 ÷ Prozentsatz" },
            { name: "Prozentsatz", formula: "p = W / G × 100", explanation: "Prozentwert ÷ Grundwert × 100" },
            { name: "Jahreszinsen", formula: "Z = K × p / 100", explanation: "Kapital × Zinssatz ÷ 100" },
            { name: "Monatszinsen", formula: "Z = K × p / 100 × t / 12", explanation: "Zinsen für t Monate" },
            { name: "Tageszinsen", formula: "Z = K × p / 100 × t / 360", explanation: "Zinsen für t Tage" },
            { name: "Fläche Dreieck", formula: "A = (g × h) / 2", explanation: "Grundseite × Höhe ÷ 2" },
            { name: "Fläche Kreis", formula: "A = π × r²", explanation: "3,14 × Radius × Radius" },
            { name: "Umfang Kreis", formula: "U = 2 × π × r", explanation: "2 × 3,14 × Radius" },
            { name: "Volumen Quader", formula: "V = a × b × c", explanation: "Länge × Breite × Höhe" },
            { name: "Oberfläche Quader", formula: "O = 2 × (ab + ac + bc)", explanation: "Alle 6 Flächen addieren" },
            { name: "Mantel Zylinder", formula: "M = 2 × π × r × h", explanation: "Umfang × Höhe" }
        ]
    },

    // ============================================================
    // KLASSE 7 - Algebra & Gleichungen
    // ============================================================
    k7: {
        label: "Klasse 7 · Algebra & Gleichungen",
        formulas: [
            { name: "Gleichung lösen", formula: "3x + 5 = 20 → x = 5", explanation: "x allein auf eine Seite bringen" },
            { name: "Umformung", formula: "+5 → -5", explanation: "Auf beiden Seiten dasselbe tun" },
            { name: "Variable", formula: "x, y, z", explanation: "Platzhalter für eine unbekannte Zahl" },
            { name: "Term", formula: "3x + 2", explanation: "Rechenausdruck mit Variablen" },
            { name: "Gleichung umstellen", formula: "2x = 10 → x = 5", explanation: "Beide Seiten durch 2 teilen" },
            { name: "Binomische Formel 1", formula: "(a+b)² = a² + 2ab + b²", explanation: "Klammer auflösen: plus" },
            { name: "Binomische Formel 2", formula: "(a-b)² = a² - 2ab + b²", explanation: "Klammer auflösen: minus" },
            { name: "Binomische Formel 3", formula: "(a+b)(a-b) = a² - b²", explanation: "Plus mal Minus" },
            { name: "Zinseszins", formula: "K_n = K_0 × (1 + p/100)^n", explanation: "Kapital nach n Jahren" },
            { name: "Dreisatz proportional", formula: "2 Äpfel = 4€ → 5 = 10€", explanation: "Je mehr, desto mehr" },
            { name: "Dreisatz antiproportional", formula: "2 Arbeiter = 6h → 3 = 4h", explanation: "Je mehr, desto weniger" },
            { name: "Klammern auflösen", formula: "a(b + c) = ab + ac", explanation: "Jeden Term in der Klammer malnehmen" }
        ]
    },

    // ============================================================
    // KLASSE 8 - Geometrie & Funktionen
    // ============================================================
    k8: {
        label: "Klasse 8 · Geometrie & Funktionen",
        formulas: [
            { name: "Pythagoras", formula: "a² + b² = c²", explanation: "Nur im rechtwinkligen Dreieck" },
            { name: "Hypotenuse", formula: "c = √(a² + b²)", explanation: "Die längste Seite im Dreieck" },
            { name: "Kathete", formula: "a = √(c² - b²)", explanation: "Eine der kurzen Seiten" },
            { name: "Fläche Parallelogramm", formula: "A = g × h", explanation: "Grundseite × Höhe" },
            { name: "Fläche Trapez", formula: "A = (a + c) / 2 × h", explanation: "(oben + unten) ÷ 2 × Höhe" },
            { name: "Volumen Zylinder", formula: "V = π × r² × h", explanation: "Grundfläche × Höhe" },
            { name: "Volumen Kugel", formula: "V = 4/3 × π × r³", explanation: "4/3 × 3,14 × Radius³" },
            { name: "Oberfläche Kugel", formula: "O = 4 × π × r²", explanation: "4 × 3,14 × Radius²" },
            { name: "Volumen Pyramide", formula: "V = 1/3 × G × h", explanation: "Grundfläche × Höhe ÷ 3" },
            { name: "Volumen Kegel", formula: "V = 1/3 × π × r² × h", explanation: "Grundfläche × Höhe ÷ 3" },
            { name: "Schrägbild", formula: "3D zeichnen", explanation: "Körper räumlich darstellen" },
            { name: "Körpernetz", formula: "Körper → flach", explanation: "Körper auseinanderfalten" }
        ]
    },

    // ============================================================
    // KLASSE 9 - Funktionen & Trigonometrie
    // ============================================================
    k9: {
        label: "Klasse 9 · Funktionen & Trigonometrie",
        formulas: [
            { name: "Lineare Funktion", formula: "y = m × x + b", explanation: "Eine Gerade: Steigung m + Startwert b" },
            { name: "Steigung", formula: "m = (y₂ - y₁) / (x₂ - x₁)", explanation: "Höhenunterschied ÷ Seitenunterschied" },
            { name: "Quadratische Funktion", formula: "f(x) = ax² + bx + c", explanation: "Eine Parabel (U-Form)" },
            { name: "Scheitelpunkt", formula: "S = (-b/2a | ...)", explanation: "Der tiefste oder höchste Punkt" },
            { name: "Sinus", formula: "sin(α) = Gegenkathete / Hypotenuse", explanation: "Gegenüberliegende Seite ÷ längste Seite" },
            { name: "Cosinus", formula: "cos(α) = Ankathete / Hypotenuse", explanation: "Anliegende Seite ÷ längste Seite" },
            { name: "Tangens", formula: "tan(α) = Gegenkathete / Ankathete", explanation: "Gegenüberliegende ÷ anliegende Seite" },
            { name: "Sin² + Cos²", formula: "sin²(α) + cos²(α) = 1", explanation: "Wichtiger Zusammenhang" },
            { name: "Potenzgesetz 1", formula: "x^a × x^b = x^(a+b)", explanation: "Gleiche Basis → Exponenten addieren" },
            { name: "Potenzgesetz 2", formula: "x^a / x^b = x^(a-b)", explanation: "Gleiche Basis → Exponenten subtrahieren" },
            { name: "Potenzgesetz 3", formula: "(x^a)^b = x^(a×b)", explanation: "Potenz potenzieren → multiplizieren" },
            { name: "Negativer Exponent", formula: "x^(-a) = 1 / x^a", explanation: "Minus → Kehrwert" }
        ]
    },

    // ============================================================
    // KLASSE 10 - Differentialrechnung & Wahrscheinlichkeit
    // ============================================================
    k10: {
        label: "Klasse 10 · Differentialrechnung & Wahrscheinlichkeit",
        formulas: [
            { name: "Ableitung Potenz", formula: "(x^n)' = n × x^(n-1)", explanation: "Exponent vorziehen, dann -1" },
            { name: "Ableitung Konstante", formula: "(c)' = 0", explanation: "Zahlen haben keine Steigung" },
            { name: "Ableitung Summe", formula: "(f+g)' = f' + g'", explanation: "Jeden Teil einzeln ableiten" },
            { name: "Produktregel", formula: "(u×v)' = u'v + uv'", explanation: "Erste abgeleitet × zweite + erste × zweite abgeleitet" },
            { name: "Quotientenregel", formula: "(u/v)' = (u'v - uv') / v²", explanation: "Bruch ableiten" },
            { name: "Ableitung von x", formula: "(x)' = 1", explanation: "Die Ableitung von x ist 1" },
            { name: "Integration", formula: "∫x^n dx = x^(n+1)/(n+1) + C", explanation: "Umkehrung der Ableitung" },
            { name: "Binomialkoeffizient", formula: "(n über k) = n! / (k!(n-k)!)", explanation: "Anzahl der Kombinationen" },
            { name: "Wahrscheinlichkeit", formula: "P = günstige / mögliche", explanation: "Günstige Fälle ÷ alle Fälle" },
            { name: "Erwartungswert", formula: "E(X) = Σ x_i × P(x_i)", explanation: "Wert × Wahrscheinlichkeit, alles addieren" },
            { name: "Varianz", formula: "Var(X) = Σ (x_i - μ)² × P(x_i)", explanation: "Abweichung vom Mittelwert" },
            { name: "Standardabweichung", formula: "σ = √Var(X)", explanation: "Wurzel aus der Varianz" }
        ]
    },

    // ============================================================
    // KLASSE 11 - Differentialrechnung
    // ============================================================
    k11: {
        label: "Klasse 11 · Differentialrechnung",
        formulas: [
            { name: "Ableitung sin(x)", formula: "(sin x)' = cos x", explanation: "Sinus wird zu Cosinus" },
            { name: "Ableitung cos(x)", formula: "(cos x)' = -sin x", explanation: "Cosinus wird zu -Sinus" },
            { name: "Ableitung e^x", formula: "(e^x)' = e^x", explanation: "e^x bleibt e^x" },
            { name: "Ableitung ln(x)", formula: "(ln x)' = 1/x", explanation: "Natürlicher Logarithmus" },
            { name: "Ableitung a^x", formula: "(a^x)' = a^x × ln(a)", explanation: "Allgemeine Exponentialfunktion" },
            { name: "Kettenregel", formula: "(f(g(x)))' = f'(g(x)) × g'(x)", explanation: "Äußere × innere Ableitung" },
            { name: "Grenzwert", formula: "lim 1/x = 0", explanation: "Für große x wird der Bruch fast 0" },
            { name: "Stetigkeit", formula: "lim f(x) = f(a)", explanation: "Kein Sprung im Graphen" },
            { name: "Ableitung x^x", formula: "(x^x)' = x^x × (ln x + 1)", explanation: "Besondere Ableitung" },
            { name: "Ableitung Konstante", formula: "(a)' = 0", explanation: "Zahlen haben keine Steigung" },
            { name: "Ableitung √x", formula: "(√x)' = 1/(2√x)", explanation: "Wurzel ableiten" },
            { name: "Ableitung 1/x", formula: "(1/x)' = -1/x²", explanation: "1 durch x ableiten" }
        ]
    },

    // ============================================================
    // KLASSE 12 - Integralrechnung & Vektoren
    // ============================================================
    k12: {
        label: "Klasse 12 · Integralrechnung & Vektoren",
        formulas: [
            { name: "Bestimmtes Integral", formula: "∫_a^b f(x) dx", explanation: "Fläche unter der Kurve" },
            { name: "Hauptsatz", formula: "∫_a^b f(x) dx = F(b) - F(a)", explanation: "Stammfunktion an Grenzen einsetzen" },
            { name: "Fläche", formula: "A = ∫_a^b f(x) dx", explanation: "Das Integral gibt die Fläche" },
            { name: "Rotationskörper", formula: "V = π ∫_a^b f(x)² dx", explanation: "Volumen beim Rotieren" },
            { name: "Vektoren addieren", formula: "(x₁+y₁, x₂+y₂, x₃+y₃)", explanation: "Komponentenweise addieren" },
            { name: "Skalarprodukt", formula: "a·b = a₁b₁ + a₂b₂ + a₃b₃", explanation: "Jede Komponente malnehmen und addieren" },
            { name: "Vektorlänge", formula: "|a| = √(a₁² + a₂² + a₃²)", explanation: "Länge des Vektors" },
            { name: "Kreuzprodukt", formula: "a × b = (a₂b₃ - a₃b₂, ...)", explanation: "Senkrechter Vektor" },
            { name: "Gerade", formula: "g: x = a + t × v", explanation: "Startpunkt + t × Richtung" },
            { name: "Ebene", formula: "E: x = a + r × u + s × v", explanation: "Start + zwei Richtungen" },
            { name: "Abstand Punkt-Gerade", formula: "d = |(p-a) × v| / |v|", explanation: "Kürzester Abstand zur Gerade" },
            { name: "Abstand Punkt-Ebene", formula: "d = |(p-a) · n| / |n|", explanation: "Kürzester Abstand zur Ebene" }
        ]
    },

    // ============================================================
    // KLASSE 13 - Abitur - Komplexe Funktionen
    // ============================================================
    k13: {
        label: "Klasse 13 · Abitur - Komplexe Funktionen",
        formulas: [
            { name: "Partialbruchzerlegung", formula: "1/((x-a)(x-b)) = A/(x-a) + B/(x-b)", explanation: "Großen Bruch aufteilen" },
            { name: "Substitution", formula: "∫ f(g(x)) × g'(x) dx = ∫ f(u) du", explanation: "Ersetzen vereinfacht" },
            { name: "Partielle Integration", formula: "∫ u dv = uv - ∫ v du", explanation: "Produkt integrieren" },
            { name: "Differentialgleichung", formula: "y' = f(x, y)", explanation: "Gleichung mit einer Ableitung" },
            { name: "Bernoulli", formula: "P(X=k) = (n über k) × p^k × (1-p)^(n-k)", explanation: "Wahrscheinlichkeit bei k Treffern" },
            { name: "Binomialverteilung", formula: "E(X) = n × p", explanation: "Durchschnittliche Anzahl Treffer" },
            { name: "Varianz Binomial", formula: "Var(X) = n × p × (1-p)", explanation: "Streuung der Binomialverteilung" },
            { name: "Sigma-Regeln", formula: "μ ± σ = 68%, μ ± 2σ = 95%, μ ± 3σ = 99,7%", explanation: "Normalverteilung" },
            { name: "Bayes-Theorem", formula: "P(A|B) = (P(B|A) × P(A)) / P(B)", explanation: "Bedingte Wahrscheinlichkeit" },
            { name: "Totale Wahrscheinlichkeit", formula: "P(B) = Σ P(B|A_i) × P(A_i)", explanation: "Summe über alle Pfade" }
        ]
    }
};


// ============================================================
// 2. FORMULA_CARDS - aus formula_cards_001.js + 002.js
// Detailierte Formelkarten mit Variablen, Beispielen und Shapes
// ============================================================
const FORMULA_CARDS = [
    // === FLÄCHENBERECHNUNG ===
    {
        id: "fc_001",
        name: "Flächeninhalt Rechteck",
        formula: "A = a × b",
        variables: { a: "Länge", b: "Breite" },
        example: "a = 5 cm, b = 3 cm → A = 15 cm²",
        shape: "┌─────────┐\n│         │ b\n│         │\n└─────────┘\n    a",
        category: "flaechen_5"
    },
    {
        id: "fc_002",
        name: "Umfang Rechteck",
        formula: "U = 2 × (a + b)",
        variables: { a: "Länge", b: "Breite" },
        example: "a = 5 cm, b = 3 cm → U = 16 cm",
        shape: "┌─────────┐\n│         │ b\n│         │\n└─────────┘\n    a",
        category: "flaechen_5"
    },
    {
        id: "fc_003",
        name: "Flächeninhalt Quadrat",
        formula: "A = a × a = a²",
        variables: { a: "Seitenlänge" },
        example: "a = 4 cm → A = 16 cm²",
        shape: "┌─────┐\n│     │ a\n│     │\n└─────┘\n   a",
        category: "flaechen_5"
    },
    {
        id: "fc_004",
        name: "Umfang Quadrat",
        formula: "U = 4 × a",
        variables: { a: "Seitenlänge" },
        example: "a = 4 cm → U = 16 cm",
        shape: "┌─────┐\n│     │ a\n│     │\n└─────┘\n   a",
        category: "flaechen_5"
    },
    {
        id: "fc_005",
        name: "Flächeninhalt Dreieck",
        formula: "A = (g × h) ÷ 2",
        variables: { g: "Grundseite", h: "Höhe" },
        example: "g = 6 cm, h = 4 cm → A = 12 cm²",
        shape: "    /\\\n   /  \\ h\n  /    \\\n /______\\\n    g",
        category: "flaechen_5"
    },
    {
        id: "fc_006",
        name: "Flächeninhalt Kreis",
        formula: "A = π × r²",
        variables: { r: "Radius" },
        example: "r = 3 cm → A = 28,27 cm²",
        shape: "   .---.\n  /     \\\n |   ●   | r\n  \\     /\n   '---'",
        category: "flaechen_5"
    },
    {
        id: "fc_007",
        name: "Umfang Kreis",
        formula: "U = 2 × π × r",
        variables: { r: "Radius" },
        example: "r = 3 cm → U = 18,85 cm",
        shape: "   .---.\n  /     \\\n |   ●   | r\n  \\     /\n   '---'",
        category: "flaechen_5"
    },

    // === VOLUMENBERECHNUNG ===
    {
        id: "fc_008",
        name: "Volumen Würfel",
        formula: "V = a × a × a = a³",
        variables: { a: "Kantenlänge" },
        example: "a = 4 cm → V = 64 cm³",
        shape: "  .------.\n /|     /|\n/_|____/ |\n| |    | |\n| /____|/\n|/____a/",
        category: "volumen_5"
    },
    {
        id: "fc_009",
        name: "Volumen Quader",
        formula: "V = a × b × c",
        variables: { a: "Länge", b: "Breite", c: "Höhe" },
        example: "a = 5 cm, b = 3 cm, c = 2 cm → V = 30 cm³",
        shape: "  .------.\n /|     /|\n/_|____/ |\n| |    | |\n| /____|/\n|/____c/",
        category: "volumen_5"
    },
    {
        id: "fc_010",
        name: "Volumen Zylinder",
        formula: "V = π × r² × h",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 3 cm, h = 5 cm → V = 141,37 cm³",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "volumen_5"
    },
    {
        id: "fc_011",
        name: "Volumen Kugel",
        formula: "V = 4/3 × π × r³",
        variables: { r: "Radius" },
        example: "r = 3 cm → V = 113,10 cm³",
        shape: "   .---.\n  /     \\\n |   ●   |\n  \\     /\n   '---'",
        category: "volumen_5"
    },

    // === PYTHAGORAS ===
    {
        id: "fc_012",
        name: "Satz des Pythagoras",
        formula: "a² + b² = c²",
        variables: { a: "Kathete a", b: "Kathete b", c: "Hypotenuse" },
        example: "a = 3 cm, b = 4 cm → c = 5 cm",
        shape: "    /|\\\n   / | \\\n  /  |  \\\n /___|___\\\n    c",
        category: "geometrie_5"
    },

    // === BINOMISCHE FORMELN ===
    {
        id: "fc_013",
        name: "1. Binomische Formel",
        formula: "(a + b)² = a² + 2ab + b²",
        variables: { a: "1. Variable", b: "2. Variable" },
        example: "(3 + 4)² = 9 + 24 + 16 = 49",
        shape: "(a+b)² = (a+b)·(a+b)",
        category: "binomische_formeln"
    },
    {
        id: "fc_014",
        name: "2. Binomische Formel",
        formula: "(a - b)² = a² - 2ab + b²",
        variables: { a: "1. Variable", b: "2. Variable" },
        example: "(5 - 2)² = 25 - 20 + 4 = 9",
        shape: "(a-b)² = (a-b)·(a-b)",
        category: "binomische_formeln"
    },
    {
        id: "fc_015",
        name: "3. Binomische Formel",
        formula: "(a + b)·(a - b) = a² - b²",
        variables: { a: "1. Variable", b: "2. Variable" },
        example: "(6 + 2)·(6 - 2) = 36 - 4 = 32",
        shape: "(a+b)·(a-b) = a² - b²",
        category: "binomische_formeln"
    },

    // === POTENZGESETZE ===
    {
        id: "fc_016",
        name: "Multiplikation gleicher Basen",
        formula: "a^m · a^n = a^{m+n}",
        variables: { a: "Basis", m: "Exponent 1", n: "Exponent 2" },
        example: "2³ · 2⁵ = 2⁸ = 256",
        shape: "a^m · a^n = a^{m+n}",
        category: "potenzgesetze"
    },
    {
        id: "fc_017",
        name: "Division gleicher Basen",
        formula: "a^m / a^n = a^{m-n}",
        variables: { a: "Basis", m: "Exponent 1", n: "Exponent 2" },
        example: "3⁶ / 3² = 3⁴ = 81",
        shape: "a^m / a^n = a^{m-n}",
        category: "potenzgesetze"
    },
    {
        id: "fc_018",
        name: "Potenz einer Potenz",
        formula: "(a^m)^n = a^{m·n}",
        variables: { a: "Basis", m: "Exponent 1", n: "Exponent 2" },
        example: "(2³)² = 2⁶ = 64",
        shape: "(a^m)^n = a^{m·n}",
        category: "potenzgesetze"
    },
    {
        id: "fc_019",
        name: "Negative Exponenten",
        formula: "a^{-n} = 1 / a^n",
        variables: { a: "Basis", n: "Exponent" },
        example: "2^{-3} = 1/8 = 0,125",
        shape: "a^{-n} = 1/a^n",
        category: "potenzgesetze"
    },

    // === TRIGONOMETRIE ===
    {
        id: "fc_020",
        name: "Trigonometrischer Pythagoras",
        formula: "sin²(α) + cos²(α) = 1",
        variables: { α: "Winkel" },
        example: "α = 30° → sin²(30°) + cos²(30°) = 0,25 + 0,75 = 1",
        shape: "sin²(α) + cos²(α) = 1",
        category: "trigonometrie_identitaeten"
    },
    {
        id: "fc_021",
        name: "Doppelwinkelsatz (sin)",
        formula: "sin(2α) = 2·sin(α)·cos(α)",
        variables: { α: "Winkel" },
        example: "α = 30° → sin(60°) = 2·0,5·0,866 = 0,866",
        shape: "sin(2α) = 2·sin(α)·cos(α)",
        category: "trigonometrie_identitaeten"
    },
    {
        id: "fc_022",
        name: "Doppelwinkelsatz (cos)",
        formula: "cos(2α) = cos²(α) - sin²(α)",
        variables: { α: "Winkel" },
        example: "α = 30° → cos(60°) = 0,866² - 0,5² = 0,5",
        shape: "cos(2α) = cos²(α) - sin²(α)",
        category: "trigonometrie_identitaeten"
    },

    // === LOGARITHMUS ===
    {
        id: "fc_023",
        name: "Definition des Logarithmus",
        formula: "log_a(b) = c  ↔  a^c = b",
        variables: { a: "Basis", b: "Numerus", c: "Exponent" },
        example: "log_2(8) = 3 ↔ 2³ = 8",
        shape: "log_a(b) = c ↔ a^c = b",
        category: "logarithmusgesetze"
    },
    {
        id: "fc_024",
        name: "Logarithmus eines Produkts",
        formula: "log_a(x·y) = log_a(x) + log_a(y)",
        variables: { a: "Basis", x: "Faktor 1", y: "Faktor 2" },
        example: "log_2(4·8) = log_2(4) + log_2(8) = 2 + 3 = 5",
        shape: "log_a(x·y) = log_a(x) + log_a(y)",
        category: "logarithmusgesetze"
    },
    {
        id: "fc_025",
        name: "Basiswechsel (Logarithmus)",
        formula: "log_a(b) = log_c(b) / log_c(a)",
        variables: { a: "alte Basis", b: "Numerus", c: "neue Basis" },
        example: "log_2(16) = log_10(16) / log_10(2) ≈ 4",
        shape: "log_a(b) = log_c(b) / log_c(a)",
        category: "logarithmusgesetze"
    },

    // === DREISATZ & PROZENT ===
    {
        id: "fc_026",
        name: "Einfacher Dreisatz (proportional)",
        formula: "a / b = c / x  →  x = (b · c) / a",
        variables: { a: "1. Wert", b: "2. Wert", c: "3. Wert" },
        example: "3 Äpfel kosten 2€ → 5 Äpfel kosten x = (5·2)/3 = 3,33€",
        shape: "a / b = c / x",
        category: "dreisatz_prozent"
    },
    {
        id: "fc_027",
        name: "Prozentsatz berechnen",
        formula: "p% = (W / G) · 100",
        variables: { W: "Prozentwert", G: "Grundwert" },
        example: "W = 30, G = 150 → p = (30/150)·100 = 20%",
        shape: "p% = (W / G) · 100",
        category: "dreisatz_prozent"
    },
    {
        id: "fc_028",
        name: "Zinseszinsformel",
        formula: "K_n = K_0 · (1 + p/100)^n",
        variables: { K_0: "Anfangskapital", p: "Zinssatz", n: "Jahre" },
        example: "1000€, 5%, 10 Jahre → K_10 = 1000·(1,05)^10 = 1628,89€",
        shape: "K_n = K_0 · (1 + p/100)^n",
        category: "dreisatz_prozent"
    },

    // === PHYSIK ===
    {
        id: "fc_029",
        name: "Geschwindigkeit (gleichförmig)",
        formula: "v = s / t",
        variables: { s: "Strecke", t: "Zeit" },
        example: "100km in 2h → v = 50km/h",
        shape: "v = s / t",
        category: "physik_grundlagen"
    },
    {
        id: "fc_030",
        name: "Kraft (2. Newton'sches Gesetz)",
        formula: "F = m · a",
        variables: { m: "Masse", a: "Beschleunigung" },
        example: "2kg, 3m/s² → F = 6N",
        shape: "F = m · a",
        category: "physik_grundlagen"
    },
    {
        id: "fc_031",
        name: "Arbeit",
        formula: "W = F · s",
        variables: { F: "Kraft", s: "Weg" },
        example: "10N über 5m → W = 50J",
        shape: "W = F · s",
        category: "physik_grundlagen"
    },
    {
        id: "fc_032",
        name: "Leistung",
        formula: "P = W / t",
        variables: { W: "Arbeit", t: "Zeit" },
        example: "100J in 5s → P = 20W",
        shape: "P = W / t",
        category: "physik_grundlagen"
    },
    {
        id: "fc_033",
        name: "Kinetische Energie",
        formula: "E_kin = 1/2 · m · v²",
        variables: { m: "Masse", v: "Geschwindigkeit" },
        example: "2kg, 3m/s → E_kin = 0,5·2·9 = 9J",
        shape: "E_kin = 1/2 · m · v²",
        category: "physik_grundlagen"
    },
    {
        id: "fc_034",
        name: "Dichte",
        formula: "ρ = m / V",
        variables: { m: "Masse", V: "Volumen" },
        example: "500g, 0,2l → ρ = 2,5 kg/l",
        shape: "ρ = m / V",
        category: "physik_grundlagen"
    },
    {
        id: "fc_035",
        name: "Ohm'sches Gesetz",
        formula: "U = R · I",
        variables: { U: "Spannung", R: "Widerstand", I: "Stromstärke" },
        example: "R = 10Ω, I = 2A → U = 20V",
        shape: "U = R · I",
        category: "physik_grundlagen"
    },

    // === EINHEITEN ===
    {
        id: "fc_036",
        name: "Längeneinheiten",
        formula: "1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm",
        variables: { km: "Kilometer", m: "Meter", cm: "Zentimeter", mm: "Millimeter" },
        example: "5 km = 5000 m = 500.000 cm",
        shape: "km → m → cm → mm",
        category: "einheiten_umrechnung"
    },
    {
        id: "fc_037",
        name: "Flächeneinheiten",
        formula: "1 m² = 100 dm² = 10.000 cm²",
        variables: { m²: "Quadratmeter", dm²: "Quadratdezimeter", cm²: "Quadratzentimeter" },
        example: "2 m² = 200 dm² = 20.000 cm²",
        shape: "m² → dm² → cm²",
        category: "einheiten_umrechnung"
    },
    {
        id: "fc_038",
        name: "Volumeneinheiten",
        formula: "1 m³ = 1000 dm³ = 1.000.000 cm³",
        variables: { m³: "Kubikmeter", dm³: "Kubikdezimeter", cm³: "Kubikzentimeter" },
        example: "3 m³ = 3000 dm³ = 3.000.000 cm³",
        shape: "m³ → dm³ → cm³",
        category: "einheiten_umrechnung"
    },
    {
        id: "fc_039",
        name: "Zeiteinheiten",
        formula: "1 d = 24 h, 1 h = 60 min, 1 min = 60 s",
        variables: { d: "Tag", h: "Stunde", min: "Minute", s: "Sekunde" },
        example: "2 h = 120 min = 7200 s",
        shape: "d → h → min → s",
        category: "einheiten_umrechnung"
    }
];


// ============================================================
// 3. HILFSFUNKTIONEN FÜR FORMELN
// ============================================================

// Kategorie-Labels für bessere Anzeige
const FORMULA_CATEGORY_LABELS = {
    'k1': 'Klasse 1',
    'k2': 'Klasse 2',
    'k3': 'Klasse 3',
    'k4': 'Klasse 4',
    'k5': 'Klasse 5',
    'k6': 'Klasse 6',
    'k7': 'Klasse 7',
    'k8': 'Klasse 8',
    'k9': 'Klasse 9',
    'k10': 'Klasse 10',
    'k11': 'Klasse 11',
    'k12': 'Klasse 12',
    'k13': 'Klasse 13',
    'flaechen_5': 'Flächen (Klasse 5)',
    'flaechen_6': 'Flächen (Klasse 6)',
    'flaechen_7': 'Flächen (Klasse 7)',
    'flaechen_8': 'Flächen (Klasse 8)',
    'flaechen_9': 'Flächen (Klasse 9)',
    'flaechen_10': 'Flächen (Klasse 10)',
    'volumen_5': 'Volumen (Klasse 5)',
    'volumen_6': 'Volumen (Klasse 6)',
    'volumen_7': 'Volumen (Klasse 7)',
    'volumen_8': 'Volumen (Klasse 8)',
    'volumen_9': 'Volumen (Klasse 9)',
    'volumen_10': 'Volumen (Klasse 10)',
    'oberflaeche_5': 'Oberfläche (Klasse 5)',
    'oberflaeche_6': 'Oberfläche (Klasse 6)',
    'oberflaeche_7': 'Oberfläche (Klasse 7)',
    'oberflaeche_8': 'Oberfläche (Klasse 8)',
    'oberflaeche_9': 'Oberfläche (Klasse 9)',
    'oberflaeche_10': 'Oberfläche (Klasse 10)',
    'geometrie_5': 'Geometrie (Klasse 5)',
    'geometrie_6': 'Geometrie (Klasse 6)',
    'geometrie_7': 'Geometrie (Klasse 7)',
    'geometrie_8': 'Geometrie (Klasse 8)',
    'geometrie_9': 'Geometrie (Klasse 9)',
    'geometrie_10': 'Geometrie (Klasse 10)',
    'trigonometrie_7': 'Trigonometrie (Klasse 7)',
    'trigonometrie_identitaeten': 'Trigonometrie Identitäten',
    'binomische_formeln': 'Binomische Formeln',
    'potenzgesetze': 'Potenzgesetze',
    'logarithmusgesetze': 'Logarithmusgesetze',
    'dreisatz_prozent': 'Dreisatz & Prozent',
    'physik_grundlagen': 'Physik Grundlagen',
    'einheiten_umrechnung': 'Einheiten & Umrechnung',
    'analytische_geometrie_11': 'Analytische Geometrie (Klasse 11)',
    'differentialrechnung_11': 'Differentialrechnung (Klasse 11)',
    'integralrechnung_12': 'Integralrechnung (Klasse 12)',
    'stochastik_12': 'Stochastik (Klasse 12)',
    'differentialrechnung_13': 'Differentialrechnung (Klasse 13)',
    'integralrechnung_13': 'Integralrechnung (Klasse 13)',
    'analysis_13': 'Analysis (Klasse 13)',
    'stochastik_13': 'Stochastik (Klasse 13)',
    'statistik_13': 'Statistik (Klasse 13)'
};

// Alle Formeln aus beiden Quellen zusammenführen
function getAllFormulas() {
    const all = [];

    // Aus FORMULA_DATABASE
    if (typeof FORMULA_DATABASE !== 'undefined') {
        Object.keys(FORMULA_DATABASE).forEach(key => {
            const klasse = FORMULA_DATABASE[key];
            (klasse.formulas || []).forEach(f => {
                all.push({
                    id: 'fd_' + key + '_' + (f.name || '').replace(/\s+/g, '_').toLowerCase(),
                    name: f.name || 'Formel',
                    formula: f.formula || '',
                    desc: f.explanation || '',
                    category: key,
                    categoryLabel: FORMULA_CATEGORY_LABELS[key] || klasse.label || key,
                    variables: {},
                    example: '',
                    shape: ''
                });
            });
        });
    }

    // Aus FORMULA_CARDS
    if (typeof FORMULA_CARDS !== 'undefined') {
        FORMULA_CARDS.forEach(f => {
            all.push({
                id: f.id || 'fc_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
                name: f.name || 'Formel',
                formula: f.formula || '',
                desc: f.variables ? Object.entries(f.variables).map(([k, v]) => `${k} = ${v}`).join(', ') : '',
                category: f.category || 'sonstige',
                categoryLabel: FORMULA_CATEGORY_LABELS[f.category] || f.category || 'Sonstige',
                variables: f.variables || {},
                example: f.example || '',
                shape: f.shape || ''
            });
        });
    }

    return all;
}

// Alle Kategorien aus den Formeln extrahieren
function getFormulaCategories(formulas) {
    const cats = new Set();
    formulas.forEach(f => {
        if (f.category) cats.add(f.category);
    });
    return Array.from(cats).sort();
}

// Kategorie-Label zurückgeben
function getFormulaCategoryLabel(category) {
    return FORMULA_CATEGORY_LABELS[category] || category || 'Sonstige';
}

// ============================================================
// EXPORT für Browser
// ============================================================
console.log('📐 Formeln geladen:');
console.log(`   - FORMULA_DATABASE: ${typeof FORMULA_DATABASE !== 'undefined' ? Object.keys(FORMULA_DATABASE).length : 0} Klassen`);
console.log(`   - FORMULA_CARDS: ${typeof FORMULA_CARDS !== 'undefined' ? FORMULA_CARDS.length : 0} Karten`);
console.log(`   - Gesamt: ${getAllFormulas().length} Formeln`);