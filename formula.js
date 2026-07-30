// =======================================================
// FORMELSAMMLUNG - MATHEMATIK & PHYSIK (Klasse 1-13)
// Kurze, jugendgerechte Erklärungen fürs Auswendiglernen
// =======================================================

// ============================================================
// TEIL 1: FORMULA_DATABASE - Nach Klassen sortiert
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
            { name: "Binomialverteilung", formula: "E(X) = n × p", explanation: "Durchschnittlicher Erwartungswert" },
            { name: "Normalverteilung", formula: "f(x) = 1/(σ√2π) · e^{-(x-μ)²/(2σ²)}", explanation: "Glockenkurve" },
            { name: "Sigma-Regeln", formula: "μ ± σ = 68%, μ ± 2σ = 95%, μ ± 3σ = 99,7%", explanation: "Streuung der Normalverteilung" },
            { name: "Hypothesentest", formula: "H₀: p = p₀, H₁: p ≠ p₀", explanation: "Null- und Alternativhypothese" },
            { name: "Konfidenzintervall", formula: "p̂ ± z · √(p̂(1-p̂)/n)", explanation: "Vertrauensbereich für p" }
        ]
    }
};

// ============================================================
// TEIL 2: FORMULA_CARDS - 260 Karten mit IDs f001-f260
// ============================================================
const FORMULA_CARDS = [
    // === FLÄCHENBERECHNUNG (Klasse 5) ===
    {
        id: "f001",
        name: "Flächeninhalt Rechteck",
        formula: "A = a × b",
        variables: { a: "Länge", b: "Breite" },
        example: "a = 5 cm, b = 3 cm → A = 15 cm²",
        shape: "┌─────────┐\n│         │ b\n│         │\n└─────────┘\n    a",
        category: "flaechen_5"
    },
    {
        id: "f002",
        name: "Umfang Rechteck",
        formula: "U = 2 × (a + b)",
        variables: { a: "Länge", b: "Breite" },
        example: "a = 5 cm, b = 3 cm → U = 16 cm",
        shape: "┌─────────┐\n│         │ b\n│         │\n└─────────┘\n    a",
        category: "flaechen_5"
    },
    {
        id: "f003",
        name: "Flächeninhalt Quadrat",
        formula: "A = a × a = a²",
        variables: { a: "Seitenlänge" },
        example: "a = 4 cm → A = 16 cm²",
        shape: "┌─────┐\n│     │ a\n│     │\n└─────┘\n   a",
        category: "flaechen_5"
    },
    {
        id: "f004",
        name: "Umfang Quadrat",
        formula: "U = 4 × a",
        variables: { a: "Seitenlänge" },
        example: "a = 4 cm → U = 16 cm",
        shape: "┌─────┐\n│     │ a\n│     │\n└─────┘\n   a",
        category: "flaechen_5"
    },
    {
        id: "f005",
        name: "Flächeninhalt Dreieck",
        formula: "A = (g × h) ÷ 2",
        variables: { g: "Grundseite", h: "Höhe" },
        example: "g = 6 cm, h = 4 cm → A = 12 cm²",
        shape: "    /\\\n   /  \\ h\n  /    \\\n /______\\\n    g",
        category: "flaechen_5"
    },
    {
        id: "f006",
        name: "Umfang Dreieck",
        formula: "U = a + b + c",
        variables: { a: "Seite a", b: "Seite b", c: "Seite c" },
        example: "a = 3 cm, b = 4 cm, c = 5 cm → U = 12 cm",
        shape: "    /\\\n   /  \\\n  /    \\\n /______\\",
        category: "flaechen_5"
    },
    {
        id: "f007",
        name: "Flächeninhalt Parallelogramm",
        formula: "A = g × h",
        variables: { g: "Grundseite", h: "Höhe" },
        example: "g = 5 cm, h = 3 cm → A = 15 cm²",
        shape: "    /______\\\n   /        \\ h\n  /          \\\n /____________\\\n    g",
        category: "flaechen_5"
    },
    {
        id: "f008",
        name: "Flächeninhalt Trapez",
        formula: "A = (a + c) × h ÷ 2",
        variables: { a: "Seite a (oben)", c: "Seite c (unten)", h: "Höhe" },
        example: "a = 3 cm, c = 5 cm, h = 4 cm → A = 16 cm²",
        shape: "    /\\\n   /  \\\n  /    \\\n /______\\",
        category: "flaechen_5"
    },
    {
        id: "f009",
        name: "Flächeninhalt Kreis",
        formula: "A = π × r²",
        variables: { r: "Radius" },
        example: "r = 3 cm → A = 28,27 cm²",
        shape: "   .---.\n  /     \\\n |   ●   | r\n  \\     /\n   '---'",
        category: "flaechen_5"
    },
    {
        id: "f010",
        name: "Umfang Kreis",
        formula: "U = 2 × π × r",
        variables: { r: "Radius" },
        example: "r = 3 cm → U = 18,85 cm",
        shape: "   .---.\n  /     \\\n |   ●   | r\n  \\     /\n   '---'",
        category: "flaechen_5"
    },

    // === VOLUMENBERECHNUNG (Klasse 5) ===
    {
        id: "f011",
        name: "Volumen Würfel",
        formula: "V = a × a × a = a³",
        variables: { a: "Kantenlänge" },
        example: "a = 4 cm → V = 64 cm³",
        shape: "  .------.\n /|     /|\n/_|____/ |\n| |    | |\n| /____|/\n|/____a/",
        category: "volumen_5"
    },
    {
        id: "f012",
        name: "Volumen Quader",
        formula: "V = a × b × c",
        variables: { a: "Länge", b: "Breite", c: "Höhe" },
        example: "a = 5 cm, b = 3 cm, c = 2 cm → V = 30 cm³",
        shape: "  .------.\n /|     /|\n/_|____/ |\n| |    | |\n| /____|/\n|/____c/",
        category: "volumen_5"
    },
    {
        id: "f013",
        name: "Volumen Prisma",
        formula: "V = G × h",
        variables: { G: "Grundfläche", h: "Höhe" },
        example: "G = 15 cm², h = 5 cm → V = 75 cm³",
        shape: "    /\\\n   /__\\\n  /____\\ h\n /______\\\n/________\\",
        category: "volumen_5"
    },
    {
        id: "f014",
        name: "Volumen Zylinder",
        formula: "V = π × r² × h",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 3 cm, h = 5 cm → V = 141,37 cm³",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "volumen_5"
    },
    {
        id: "f015",
        name: "Oberfläche Würfel",
        formula: "O = 6 × a²",
        variables: { a: "Kantenlänge" },
        example: "a = 4 cm → O = 96 cm²",
        shape: "  .------.\n /|     /|\n/_|____/ |\n| |    | |\n| /____|/\n|/____a/",
        category: "oberflaeche_5"
    },
    {
        id: "f016",
        name: "Oberfläche Quader",
        formula: "O = 2 × (a×b + a×c + b×c)",
        variables: { a: "Länge", b: "Breite", c: "Höhe" },
        example: "a = 5 cm, b = 3 cm, c = 2 cm → O = 62 cm²",
        shape: "  .------.\n /|     /|\n/_|____/ |\n| |    | |\n| /____|/\n|/____c/",
        category: "oberflaeche_5"
    },
    {
        id: "f017",
        name: "Oberfläche Zylinder",
        formula: "O = 2 × π × r × (r + h)",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 3 cm, h = 5 cm → O = 150,80 cm²",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "oberflaeche_5"
    },
    {
        id: "f018",
        name: "Volumen Kugel",
        formula: "V = 4/3 × π × r³",
        variables: { r: "Radius" },
        example: "r = 3 cm → V = 113,10 cm³",
        shape: "   .---.\n  /     \\\n |   ●   |\n  \\     /\n   '---'",
        category: "volumen_5"
    },
    {
        id: "f019",
        name: "Oberfläche Kugel",
        formula: "O = 4 × π × r²",
        variables: { r: "Radius" },
        example: "r = 3 cm → O = 113,10 cm²",
        shape: "   .---.\n  /     \\\n |   ●   |\n  \\     /\n   '---'",
        category: "oberflaeche_5"
    },
    {
        id: "f020",
        name: "Satz des Pythagoras",
        formula: "a² + b² = c²",
        variables: { a: "Kathete a", b: "Kathete b", c: "Hypotenuse" },
        example: "a = 3 cm, b = 4 cm → c = 5 cm",
        shape: "    /|\\\n   / | \\\n  /  |  \\\n /___|___\\\n    c",
        category: "geometrie_5"
    },

    // === FORMELN KLASSE 6 ===
    {
        id: "f021",
        name: "Flächeninhalt Dreieck (allgemein)",
        formula: "A = ½ × g × h",
        variables: { g: "Grundseite", h: "Höhe" },
        example: "g = 8 cm, h = 5 cm → A = 20 cm²",
        shape: "    /\\\n   /  \\ h\n  /    \\\n /______\\\n    g",
        category: "flaechen_6"
    },
    {
        id: "f022",
        name: "Flächeninhalt Dreieck (rechtwinklig)",
        formula: "A = ½ × a × b",
        variables: { a: "Kathete a", b: "Kathete b" },
        example: "a = 3 cm, b = 4 cm → A = 6 cm²",
        shape: "    /|\\\n   / | \\\n  /  |  \\\n /___|___\\\n    a",
        category: "flaechen_6"
    },
    {
        id: "f023",
        name: "Flächeninhalt Parallelogramm",
        formula: "A = g × h",
        variables: { g: "Grundseite", h: "Höhe" },
        example: "g = 6 cm, h = 4 cm → A = 24 cm²",
        shape: "    /______\\\n   /        \\ h\n  /          \\\n /____________\\\n    g",
        category: "flaechen_6"
    },
    {
        id: "f024",
        name: "Flächeninhalt Trapez",
        formula: "A = (a + c) × h ÷ 2",
        variables: { a: "Seite a (oben)", c: "Seite c (unten)", h: "Höhe" },
        example: "a = 4 cm, c = 6 cm, h = 5 cm → A = 25 cm²",
        shape: "  /______\\\n /        \\ h\n/__________\\\n    c",
        category: "flaechen_6"
    },
    {
        id: "f025",
        name: "Flächeninhalt Kreis",
        formula: "A = π × r²",
        variables: { r: "Radius" },
        example: "r = 5 cm → A = 78,54 cm²",
        shape: "   .---.\n  /     \\\n |   ●   | r\n  \\     /\n   '---'",
        category: "flaechen_6"
    },
    {
        id: "f026",
        name: "Umfang Kreis",
        formula: "U = 2 × π × r",
        variables: { r: "Radius" },
        example: "r = 5 cm → U = 31,42 cm",
        shape: "   .---.\n  /     \\\n |   ●   | r\n  \\     /\n   '---'",
        category: "flaechen_6"
    },
    {
        id: "f027",
        name: "Kreisbogenlänge",
        formula: "b = (α ÷ 360°) × 2 × π × r",
        variables: { α: "Mittelpunktswinkel", r: "Radius" },
        example: "α = 90°, r = 4 cm → b = 6,28 cm",
        shape: "   .---.\n  /     \\\n |   α   |\n  \\     /\n   '---'",
        category: "flaechen_6"
    },
    {
        id: "f028",
        name: "Kreisausschnitt (Sektor)",
        formula: "A = (α ÷ 360°) × π × r²",
        variables: { α: "Mittelpunktswinkel", r: "Radius" },
        example: "α = 60°, r = 6 cm → A = 18,85 cm²",
        shape: "   .---.\n  /     \\\n |   α   |\n  \\     /\n   '---'",
        category: "flaechen_6"
    },
    {
        id: "f029",
        name: "Volumen Würfel",
        formula: "V = a³",
        variables: { a: "Kantenlänge" },
        example: "a = 5 cm → V = 125 cm³",
        shape: "  .------.\n /|     /|\n/_|____/ |\n| |    | |\n| /____|/\n|/____a/",
        category: "volumen_6"
    },
    {
        id: "f030",
        name: "Volumen Quader",
        formula: "V = a × b × c",
        variables: { a: "Länge", b: "Breite", c: "Höhe" },
        example: "a = 6 cm, b = 4 cm, c = 3 cm → V = 72 cm³",
        shape: "  .------.\n /|     /|\n/_|____/ |\n| |    | |\n| /____|/\n|/____c/",
        category: "volumen_6"
    },
    {
        id: "f031",
        name: "Volumen Prisma",
        formula: "V = G × h",
        variables: { G: "Grundfläche", h: "Höhe" },
        example: "G = 20 cm², h = 6 cm → V = 120 cm³",
        shape: "    /\\\n   /__\\\n  /____\\ h\n /______\\\n/________\\",
        category: "volumen_6"
    },
    {
        id: "f032",
        name: "Volumen Zylinder",
        formula: "V = π × r² × h",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 4 cm, h = 6 cm → V = 301,59 cm³",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "volumen_6"
    },
    {
        id: "f033",
        name: "Oberfläche Würfel",
        formula: "O = 6 × a²",
        variables: { a: "Kantenlänge" },
        example: "a = 5 cm → O = 150 cm²",
        shape: "  .------.\n /|     /|\n/_|____/ |\n| |    | |\n| /____|/\n|/____a/",
        category: "oberflaeche_6"
    },
    {
        id: "f034",
        name: "Oberfläche Quader",
        formula: "O = 2 × (a×b + a×c + b×c)",
        variables: { a: "Länge", b: "Breite", c: "Höhe" },
        example: "a = 6 cm, b = 4 cm, c = 3 cm → O = 108 cm²",
        shape: "  .------.\n /|     /|\n/_|____/ |\n| |    | |\n| /____|/\n|/____c/",
        category: "oberflaeche_6"
    },
    {
        id: "f035",
        name: "Oberfläche Zylinder",
        formula: "O = 2 × π × r × (r + h)",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 4 cm, h = 6 cm → O = 251,33 cm²",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "oberflaeche_6"
    },
    {
        id: "f036",
        name: "Mantelfläche Zylinder",
        formula: "M = 2 × π × r × h",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 4 cm, h = 6 cm → M = 150,80 cm²",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "oberflaeche_6"
    },
    {
        id: "f037",
        name: "Volumen Kugel",
        formula: "V = 4/3 × π × r³",
        variables: { r: "Radius" },
        example: "r = 5 cm → V = 523,60 cm³",
        shape: "   .---.\n  /     \\\n |   ●   |\n  \\     /\n   '---'",
        category: "volumen_6"
    },
    {
        id: "f038",
        name: "Oberfläche Kugel",
        formula: "O = 4 × π × r²",
        variables: { r: "Radius" },
        example: "r = 5 cm → O = 314,16 cm²",
        shape: "   .---.\n  /     \\\n |   ●   |\n  \\     /\n   '---'",
        category: "oberflaeche_6"
    },
    {
        id: "f039",
        name: "Satz des Pythagoras",
        formula: "a² + b² = c²",
        variables: { a: "Kathete a", b: "Kathete b", c: "Hypotenuse" },
        example: "a = 3 cm, b = 4 cm → c = 5 cm",
        shape: "    /|\\\n   / | \\\n  /  |  \\\n /___|___\\\n    c",
        category: "geometrie_6"
    },
    {
        id: "f040",
        name: "Umfang Dreieck",
        formula: "U = a + b + c",
        variables: { a: "Seite a", b: "Seite b", c: "Seite c" },
        example: "a = 3 cm, b = 4 cm, c = 5 cm → U = 12 cm",
        shape: "    /\\\n   /  \\\n  /    \\\n /______\\",
        category: "geometrie_6"
    },

    // === FORMELN KLASSE 7 ===
    {
        id: "f041",
        name: "Flächeninhalt Dreieck (Heron)",
        formula: "A = √(s·(s-a)·(s-b)·(s-c))",
        variables: { a: "Seite a", b: "Seite b", c: "Seite c", s: "Halbumfang (a+b+c)/2" },
        example: "a = 5 cm, b = 6 cm, c = 7 cm → A = 14,70 cm²",
        shape: "    /\\\n   /  \\\n  /    \\\n /______\\",
        category: "flaechen_7"
    },

    {
        id: "f042",
        name: "Flächeninhalt reguläres Sechseck",
        formula: "A = (3√3/2) × a²",
        variables: { a: "Seitenlänge" },
        example: "a = 4 cm → A = 41,57 cm²",
        shape: "   /\\  /\\\n  /  \\/  \\\n /   /\\   \\\n/___/  \\___\\",
        category: "flaechen_7"
    },
    {
        id: "f043",
        name: "Volumen Pyramide (allgemein)",
        formula: "V = 1/3 × G × h",
        variables: { G: "Grundfläche", h: "Höhe" },
        example: "G = 25 cm², h = 6 cm → V = 50 cm³",
        shape: "    /\\\n   /  \\\n  /    \\ h\n /______\\\n   G",
        category: "volumen_7"
    },
    {
        id: "f044",
        name: "Volumen Kegel",
        formula: "V = 1/3 × π × r² × h",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 3 cm, h = 5 cm → V = 47,12 cm³",
        shape: "    /\\\n   /  \\\n  /    \\ h\n /______\\\n   r",
        category: "volumen_7"
    },
    {
        id: "f045",
        name: "Mantelfläche Kegel",
        formula: "M = π × r × s",
        variables: { r: "Radius", s: "Mantellinie" },
        example: "r = 3 cm, s = 5 cm → M = 47,12 cm²",
        shape: "    /\\\n   /  \\ s\n  /    \\\n /______\\\n   r",
        category: "oberflaeche_7"
    },
    {
        id: "f046",
        name: "Oberfläche Kegel",
        formula: "O = π × r × (r + s)",
        variables: { r: "Radius", s: "Mantellinie" },
        example: "r = 3 cm, s = 5 cm → O = 75,40 cm²",
        shape: "    /\\\n   /  \\ s\n  /    \\\n /______\\\n   r",
        category: "oberflaeche_7"
    },
    {
        id: "f047",
        name: "Volumen Pyramide (quadratisch)",
        formula: "V = 1/3 × a² × h",
        variables: { a: "Grundseite", h: "Höhe" },
        example: "a = 4 cm, h = 6 cm → V = 32 cm³",
        shape: "    /\\\n   /  \\\n  /    \\ h\n /______\\\n   a",
        category: "volumen_7"
    },
    {
        id: "f048",
        name: "Volumen Pyramide (rechteckig)",
        formula: "V = 1/3 × a × b × h",
        variables: { a: "Länge", b: "Breite", h: "Höhe" },
        example: "a = 5 cm, b = 4 cm, h = 6 cm → V = 40 cm³",
        shape: "    /\\\n   /  \\\n  /    \\ h\n /______\\\n  a × b",
        category: "volumen_7"
    },
    {
        id: "f049",
        name: "Volumen Kegelstumpf",
        formula: "V = 1/3 × π × h × (R² + R·r + r²)",
        variables: { R: "großer Radius", r: "kleiner Radius", h: "Höhe" },
        example: "R = 5 cm, r = 3 cm, h = 6 cm → V = 307,88 cm³",
        shape: "  /______\\\n /   R   \\\n/___r___\\",
        category: "volumen_7"
    },
    {
        id: "f050",
        name: "Oberfläche Kegelstumpf",
        formula: "O = π × (R + r) × s + π × R² + π × r²",
        variables: { R: "großer Radius", r: "kleiner Radius", s: "Mantellinie" },
        example: "R = 5 cm, r = 3 cm, s = 5 cm → O = 282,74 cm²",
        shape: "  /______\\\n /   R   \\\n/___r___\\",
        category: "oberflaeche_7"
    },
    {
        id: "f051",
        name: "Mantelfläche Pyramide (quadratisch)",
        formula: "M = 2 × a × s",
        variables: { a: "Grundseite", s: "Seitenhöhe" },
        example: "a = 4 cm, s = 5 cm → M = 40 cm²",
        shape: "    /\\\n   /  \\\n  /    \\ s\n /______\\\n   a",
        category: "oberflaeche_7"
    },
    {
        id: "f052",
        name: "Oberfläche Pyramide (quadratisch)",
        formula: "O = a² + 2 × a × s",
        variables: { a: "Grundseite", s: "Seitenhöhe" },
        example: "a = 4 cm, s = 5 cm → O = 56 cm²",
        shape: "    /\\\n   /  \\\n  /    \\ s\n /______\\\n   a",
        category: "oberflaeche_7"
    },
    {
        id: "f053",
        name: "Satz des Thales",
        formula: "Der Winkel im Halbkreis ist ein rechter Winkel.",
        variables: { α: "Winkel am Halbkreis" },
        example: "α = 90° (immer!)",
        shape: "  .---.\n /     \\\n|   α   |\n \\     /\n  '---'",
        category: "geometrie_7"
    },
    {
        id: "f054",
        name: "Höhensatz im rechtwinkligen Dreieck",
        formula: "h² = p · q",
        variables: { h: "Höhe", p: "Hypotenusenabschnitt p", q: "Hypotenusenabschnitt q" },
        example: "p = 3 cm, q = 4 cm → h = 3,46 cm",
        shape: "    /|\\\n   / | \\\n  /  |h \\\n /___|___\\\n  p   q",
        category: "geometrie_7"
    },
    {
        id: "f055",
        name: "Kathetensatz im rechtwinkligen Dreieck",
        formula: "a² = c · p   und   b² = c · q",
        variables: { a: "Kathete a", b: "Kathete b", c: "Hypotenuse", p: "Hypotenusenabschnitt p", q: "Hypotenusenabschnitt q" },
        example: "c = 5 cm, p = 2 cm → a = √10 = 3,16 cm",
        shape: "    /|\\\n   / | \\\n  /  |  \\\n /___|___\\\n  p   q",
        category: "geometrie_7"
    },
    {
        id: "f056",
        name: "Trigonometrie (Sinus)",
        formula: "sin(α) = Gegenkathete ÷ Hypotenuse",
        variables: { α: "Winkel", G: "Gegenkathete", H: "Hypotenuse" },
        example: "G = 3 cm, H = 5 cm → sin(α) = 0,6 → α = 36,87°",
        shape: "    /|\\\n   / | \\\n  /  |  \\\n /___|___\\",
        category: "trigonometrie_7"
    },
    {
        id: "f057",
        name: "Trigonometrie (Cosinus)",
        formula: "cos(α) = Ankathete ÷ Hypotenuse",
        variables: { α: "Winkel", A: "Ankathete", H: "Hypotenuse" },
        example: "A = 4 cm, H = 5 cm → cos(α) = 0,8 → α = 36,87°",
        shape: "    /|\\\n   / | \\\n  /  |  \\\n /___|___\\",
        category: "trigonometrie_7"
    },
    {
        id: "f058",
        name: "Trigonometrie (Tangens)",
        formula: "tan(α) = Gegenkathete ÷ Ankathete",
        variables: { α: "Winkel", G: "Gegenkathete", A: "Ankathete" },
        example: "G = 3 cm, A = 4 cm → tan(α) = 0,75 → α = 36,87°",
        shape: "    /|\\\n   / | \\\n  /  |  \\\n /___|___\\",
        category: "trigonometrie_7"
    },
    {
        id: "f059",
        name: "Sinus im rechtwinkligen Dreieck",
        formula: "sin(α) = a ÷ c   (a = Gegenkathete, c = Hypotenuse)",
        variables: { α: "Winkel", a: "Gegenkathete", c: "Hypotenuse" },
        example: "a = 4 cm, c = 5 cm → sin(α) = 0,8 → α = 53,13°",
        shape: "    /|\\\n   / | \\\n  /  |  \\\n /___|___\\",
        category: "trigonometrie_7"
    },
    {
        id: "f060",
        name: "Cosinus im rechtwinkligen Dreieck",
        formula: "cos(α) = b ÷ c   (b = Ankathete, c = Hypotenuse)",
        variables: { α: "Winkel", b: "Ankathete", c: "Hypotenuse" },
        example: "b = 3 cm, c = 5 cm → cos(α) = 0,6 → α = 53,13°",
        shape: "    /|\\\n   / | \\\n  /  |  \\\n /___|___\\",
        category: "trigonometrie_7"
    },

    // === FORMELN KLASSE 8 ===
    {
        id: "f061",
        name: "Volumen Kugel (Herleitung)",
        formula: "V = 4/3 × π × r³",
        variables: { r: "Radius" },
        example: "r = 6 cm → V = 904,78 cm³",
        shape: "   .---.\n  /     \\\n |   ●   |\n  \\     /\n   '---'",
        category: "volumen_8"
    },
    {
        id: "f062",
        name: "Oberfläche Kugel",
        formula: "O = 4 × π × r²",
        variables: { r: "Radius" },
        example: "r = 6 cm → O = 452,39 cm²",
        shape: "   .---.\n  /     \\\n |   ●   |\n  \\     /\n   '---'",
        category: "oberflaeche_8"
    },
    {
        id: "f063",
        name: "Volumen Zylinder (allgemein)",
        formula: "V = π × r² × h",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 5 cm, h = 8 cm → V = 628,32 cm³",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "volumen_8"
    },
    {
        id: "f064",
        name: "Oberfläche Zylinder (allgemein)",
        formula: "O = 2 × π × r × (r + h)",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 5 cm, h = 8 cm → O = 408,41 cm²",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "oberflaeche_8"
    },
    {
        id: "f065",
        name: "Volumen Kegel (allgemein)",
        formula: "V = 1/3 × π × r² × h",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 4 cm, h = 6 cm → V = 100,53 cm³",
        shape: "    /\\\n   /  \\\n  /    \\ h\n /______\\\n   r",
        category: "volumen_8"
    },
    {
        id: "f066",
        name: "Oberfläche Kegel (allgemein)",
        formula: "O = π × r × (r + s)",
        variables: { r: "Radius", s: "Mantellinie" },
        example: "r = 4 cm, s = 6 cm → O = 125,66 cm²",
        shape: "    /\\\n   /  \\ s\n  /    \\\n /______\\\n   r",
        category: "oberflaeche_8"
    },
    {
        id: "f067",
        name: "Volumen Pyramide (allgemein)",
        formula: "V = 1/3 × G × h",
        variables: { G: "Grundfläche", h: "Höhe" },
        example: "G = 36 cm², h = 7 cm → V = 84 cm³",
        shape: "    /\\\n   /  \\\n  /    \\ h\n /______\\\n   G",
        category: "volumen_8"
    },
    {
        id: "f068",
        name: "Oberfläche Pyramide (allgemein)",
        formula: "O = G + M",
        variables: { G: "Grundfläche", M: "Mantelfläche" },
        example: "G = 36 cm², M = 40 cm² → O = 76 cm²",
        shape: "    /\\\n   /  \\\n  /    \\\n /______\\",
        category: "oberflaeche_8"
    },
    {
        id: "f069",
        name: "Volumen Pyramide (quadratisch)",
        formula: "V = 1/3 × a² × h",
        variables: { a: "Grundseite", h: "Höhe" },
        example: "a = 5 cm, h = 8 cm → V = 66,67 cm³",
        shape: "    /\\\n   /  \\\n  /    \\ h\n /______\\\n   a",
        category: "volumen_8"
    },
    {
        id: "f070",
        name: "Oberfläche Pyramide (quadratisch)",
        formula: "O = a² + 2 × a × s",
        variables: { a: "Grundseite", s: "Seitenhöhe" },
        example: "a = 5 cm, s = 6 cm → O = 85 cm²",
        shape: "    /\\\n   /  \\\n  /    \\ s\n /______\\\n   a",
        category: "oberflaeche_8"
    },
    {
        id: "f071",
        name: "Volumen Pyramide (rechteckig)",
        formula: "V = 1/3 × a × b × h",
        variables: { a: "Länge", b: "Breite", h: "Höhe" },
        example: "a = 6 cm, b = 4 cm, h = 7 cm → V = 56 cm³",
        shape: "    /\\\n   /  \\\n  /    \\ h\n /______\\\n  a × b",
        category: "volumen_8"
    },
    {
        id: "f072",
        name: "Oberfläche Pyramide (rechteckig)",
        formula: "O = a × b + a × s₁ + b × s₂",
        variables: { a: "Länge", b: "Breite", s1: "Seitenhöhe 1", s2: "Seitenhöhe 2" },
        example: "a = 6 cm, b = 4 cm, s₁ = 5 cm, s₂ = 4,5 cm → O = 72 cm²",
        shape: "    /\\\n   /  \\\n  /    \\\n /______\\\n  a × b",
        category: "oberflaeche_8"
    },
    {
        id: "f073",
        name: "Volumen Kugelstumpf",
        formula: "V = 1/3 × π × h × (R² + R·r + r²)",
        variables: { R: "großer Radius", r: "kleiner Radius", h: "Höhe" },
        example: "R = 6 cm, r = 4 cm, h = 5 cm → V = 418,88 cm³",
        shape: "  .---.\n /     \\\n|   R   | h\n \\     /\n  '---'",
        category: "volumen_8"
    },
    {
        id: "f074",
        name: "Oberfläche Kugelstumpf",
        formula: "O = 2 × π × R × h + 2 × π × r × h + π × (R² + r²)",
        variables: { R: "großer Radius", r: "kleiner Radius", h: "Höhe" },
        example: "R = 6 cm, r = 4 cm, h = 5 cm → O = 345,58 cm²",
        shape: "  .---.\n /     \\\n|   R   | h\n \\     /\n  '---'",
        category: "oberflaeche_8"
    },
    {
        id: "f075",
        name: "Volumen Zylinderstumpf",
        formula: "V = π × r² × (h₁ + h₂) / 2",
        variables: { r: "Radius", h1: "Höhe 1", h2: "Höhe 2" },
        example: "r = 5 cm, h₁ = 6 cm, h₂ = 4 cm → V = 392,70 cm³",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "volumen_8"
    },
    {
        id: "f076",
        name: "Flächeninhalt Ellipse",
        formula: "A = π × a × b",
        variables: { a: "große Halbachse", b: "kleine Halbachse" },
        example: "a = 5 cm, b = 3 cm → A = 47,12 cm²",
        shape: "  .-------.\n /         \\\n|     ●     |\n \\         /\n  '-------'",
        category: "flaechen_8"
    },
    {
        id: "f077",
        name: "Umfang Ellipse (Näherung)",
        formula: "U ≈ π × (3 × (a+b) - √(3×a + b) × (a + 3×b))",
        variables: { a: "große Halbachse", b: "kleine Halbachse" },
        example: "a = 5 cm, b = 3 cm → U ≈ 25,53 cm",
        shape: "  .-------.\n /         \\\n|     ●     |\n \\         /\n  '-------'",
        category: "flaechen_8"
    },
    {
        id: "f078",
        name: "Volumen Ellipsoid",
        formula: "V = 4/3 × π × a × b × c",
        variables: { a: "Halbachse a", b: "Halbachse b", c: "Halbachse c" },
        example: "a = 5 cm, b = 3 cm, c = 4 cm → V = 251,33 cm³",
        shape: "  .-------.\n /         \\\n|     ●     |\n \\         /\n  '-------'",
        category: "volumen_8"
    },
    {
        id: "f079",
        name: "Oberfläche Ellipsoid (Näherung)",
        formula: "O ≈ 4π × ((a·b + a·c + b·c)/3)",
        variables: { a: "Halbachse a", b: "Halbachse b", c: "Halbachse c" },
        example: "a = 5 cm, b = 3 cm, c = 4 cm → O ≈ 200,96 cm²",
        shape: "  .-------.\n /         \\\n|     ●     |\n \\         /\n  '-------'",
        category: "oberflaeche_8"
    },
    {
        id: "f080",
        name: "Satz des Pythagoras (erweitert)",
        formula: "a² + b² = c²   (für rechtwinklige Dreiecke)",
        variables: { a: "Kathete a", b: "Kathete b", c: "Hypotenuse" },
        example: "a = 5 cm, b = 12 cm → c = 13 cm",
        shape: "    /|\\\n   / | \\\n  /  |  \\\n /___|___\\\n    c",
        category: "geometrie_8"
    },

    // === FORMELN KLASSE 9 ===
    {
        id: "f081",
        name: "Volumen Pyramide (allgemein)",
        formula: "V = 1/3 × G × h",
        variables: { G: "Grundfläche", h: "Höhe" },
        example: "G = 40 cm², h = 8 cm → V = 106,67 cm³",
        shape: "    /\\\n   /  \\\n  /    \\ h\n /______\\\n   G",
        category: "volumen_9"
    },
    {
        id: "f082",
        name: "Oberfläche Pyramide (allgemein)",
        formula: "O = G + M",
        variables: { G: "Grundfläche", M: "Mantelfläche" },
        example: "G = 40 cm², M = 50 cm² → O = 90 cm²",
        shape: "    /\\\n   /  \\\n  /    \\\n /______\\",
        category: "oberflaeche_9"
    },
    {
        id: "f083",
        name: "Volumen Pyramide (quadratisch)",
        formula: "V = 1/3 × a² × h",
        variables: { a: "Grundseite", h: "Höhe" },
        example: "a = 6 cm, h = 9 cm → V = 108 cm³",
        shape: "    /\\\n   /  \\\n  /    \\ h\n /______\\\n   a",
        category: "volumen_9"
    },
    {
        id: "f084",
        name: "Oberfläche Pyramide (quadratisch)",
        formula: "O = a² + 2 × a × s",
        variables: { a: "Grundseite", s: "Seitenhöhe" },
        example: "a = 6 cm, s = 7 cm → O = 120 cm²",
        shape: "    /\\\n   /  \\\n  /    \\ s\n /______\\\n   a",
        category: "oberflaeche_9"
    },
    {
        id: "f085",
        name: "Volumen Pyramide (rechteckig)",
        formula: "V = 1/3 × a × b × h",
        variables: { a: "Länge", b: "Breite", h: "Höhe" },
        example: "a = 7 cm, b = 5 cm, h = 8 cm → V = 93,33 cm³",
        shape: "    /\\\n   /  \\\n  /    \\ h\n /______\\\n  a × b",
        category: "volumen_9"
    },
    {
        id: "f086",
        name: "Oberfläche Pyramide (rechteckig)",
        formula: "O = a × b + a × s₁ + b × s₂",
        variables: { a: "Länge", b: "Breite", s1: "Seitenhöhe 1", s2: "Seitenhöhe 2" },
        example: "a = 7 cm, b = 5 cm, s₁ = 6 cm, s₂ = 5,5 cm → O = 92,5 cm²",
        shape: "    /\\\n   /  \\\n  /    \\\n /______\\\n  a × b",
        category: "oberflaeche_9"
    },
    {
        id: "f087",
        name: "Volumen Kegel (allgemein)",
        formula: "V = 1/3 × π × r² × h",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 5 cm, h = 8 cm → V = 209,44 cm³",
        shape: "    /\\\n   /  \\\n  /    \\ h\n /______\\\n   r",
        category: "volumen_9"
    },
    {
        id: "f088",
        name: "Oberfläche Kegel (allgemein)",
        formula: "O = π × r × (r + s)",
        variables: { r: "Radius", s: "Mantellinie" },
        example: "r = 5 cm, s = 8 cm → O = 204,20 cm²",
        shape: "    /\\\n   /  \\ s\n  /    \\\n /______\\\n   r",
        category: "oberflaeche_9"
    },
    {
        id: "f089",
        name: "Volumen Kugel (allgemein)",
        formula: "V = 4/3 × π × r³",
        variables: { r: "Radius" },
        example: "r = 7 cm → V = 1436,76 cm³",
        shape: "   .---.\n  /     \\\n |   ●   |\n  \\     /\n   '---'",
        category: "volumen_9"
    },
    {
        id: "f090",
        name: "Oberfläche Kugel (allgemein)",
        formula: "O = 4 × π × r²",
        variables: { r: "Radius" },
        example: "r = 7 cm → O = 615,75 cm²",
        shape: "   .---.\n  /     \\\n |   ●   |\n  \\     /\n   '---'",
        category: "oberflaeche_9"
    },
    {
        id: "f091",
        name: "Volumen Zylinder (allgemein)",
        formula: "V = π × r² × h",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 6 cm, h = 10 cm → V = 1130,97 cm³",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "volumen_9"
    },
    {
        id: "f092",
        name: "Oberfläche Zylinder (allgemein)",
        formula: "O = 2 × π × r × (r + h)",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 6 cm, h = 10 cm → O = 603,19 cm²",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "oberflaeche_9"
    },
    {
        id: "f093",
        name: "Volumen Kegelstumpf (allgemein)",
        formula: "V = 1/3 × π × h × (R² + R·r + r²)",
        variables: { R: "großer Radius", r: "kleiner Radius", h: "Höhe" },
        example: "R = 7 cm, r = 5 cm, h = 6 cm → V = 628,32 cm³",
        shape: "  /______\\\n /   R   \\\n/___r___\\",
        category: "volumen_9"
    },
    {
        id: "f094",
        name: "Oberfläche Kegelstumpf (allgemein)",
        formula: "O = π × (R + r) × s + π × R² + π × r²",
        variables: { R: "großer Radius", r: "kleiner Radius", s: "Mantellinie" },
        example: "R = 7 cm, r = 5 cm, s = 6 cm → O = 376,99 cm²",
        shape: "  /______\\\n /   R   \\\n/___r___\\",
        category: "oberflaeche_9"
    },
    {
        id: "f095",
        name: "Flächeninhalt reguläres Achteck",
        formula: "A = 2 × (1 + √2) × a²",
        variables: { a: "Seitenlänge" },
        example: "a = 4 cm → A = 77,25 cm²",
        shape: "   ______\n  /      \\\n /        \\\n|          |\n \\        /\n  \\______/",
        category: "flaechen_9"
    },
    {
        id: "f096",
        name: "Umfang reguläres Achteck",
        formula: "U = 8 × a",
        variables: { a: "Seitenlänge" },
        example: "a = 4 cm → U = 32 cm",
        shape: "   ______\n  /      \\\n /        \\\n|          |\n \\        /\n  \\______/",
        category: "flaechen_9"
    },
{
    id: "f097",
    name: "Flächeninhalt reguläres n-Eck",
    formula: "A = 1/4 × n × a² × cot(180°/n)",
    variables: { n: "Anzahl der Seiten", a: "Seitenlänge" },
    example: "n = 6, a = 5 cm → A = 64,95 cm²",
    shape: "   /\\  /\\\n  /  \\/  \\\n /   /\\   \\\n/___/  \\___\\",
    category: "flaechen_9"
},
    {
        id: "f098",
        name: "Umfang reguläres n-Eck",
        formula: "U = n × a",
        variables: { n: "Anzahl der Seiten", a: "Seitenlänge" },
        example: "n = 6, a = 5 cm → U = 30 cm",
        shape: "   /\\  /\\\n  /  \\/  \\\n /   /\\   \\\n/___/  \\___\\",
        category: "flaechen_9"
    },
    {
        id: "f099",
        name: "Satz des Pythagoras in 3D",
        formula: "d² = a² + b² + c²",
        variables: { a: "Kante a", b: "Kante b", c: "Kante c", d: "Raumdiagonale" },
        example: "a = 3 cm, b = 4 cm, c = 5 cm → d = 7,07 cm",
        shape: "  .------.\n /|     /|\n/_|____/ |\n| |    | |\n| /____|/\n|/____c/",
        category: "geometrie_9"
    },
    {
        id: "f100",
        name: "Kreiszahl π",
        formula: "π ≈ 3,14159265358979323846...",
        variables: { π: "Kreiszahl" },
        example: "π wird in vielen Formeln verwendet.",
        shape: "   .---.\n  /     \\\n |   π   |\n  \\     /\n   '---'",
        category: "geometrie_9"
    },

    // === FORMELN KLASSE 10 ===
    {
        id: "f101",
        name: "Volumen Pyramide (allgemein) – Oberstufe",
        formula: "V = 1/3 × G × h",
        variables: { G: "Grundfläche", h: "Höhe" },
        example: "G = 50 cm², h = 10 cm → V = 166,67 cm³",
        shape: "    /\\\n   /  \\\n  /    \\ h\n /______\\\n   G",
        category: "volumen_10"
    },
    {
        id: "f102",
        name: "Oberfläche Pyramide (allgemein) – Oberstufe",
        formula: "O = G + M",
        variables: { G: "Grundfläche", M: "Mantelfläche" },
        example: "G = 50 cm², M = 60 cm² → O = 110 cm²",
        shape: "    /\\\n   /  \\\n  /    \\\n /______\\",
        category: "oberflaeche_10"
    },
    {
        id: "f103",
        name: "Volumen Kegel (allgemein) – Oberstufe",
        formula: "V = 1/3 × π × r² × h",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 6 cm, h = 10 cm → V = 376,99 cm³",
        shape: "    /\\\n   /  \\\n  /    \\ h\n /______\\\n   r",
        category: "volumen_10"
    },
    {
        id: "f104",
        name: "Oberfläche Kegel (allgemein) – Oberstufe",
        formula: "O = π × r × (r + s)",
        variables: { r: "Radius", s: "Mantellinie" },
        example: "r = 6 cm, s = 10 cm → O = 301,59 cm²",
        shape: "    /\\\n   /  \\ s\n  /    \\\n /______\\\n   r",
        category: "oberflaeche_10"
    },
    {
        id: "f105",
        name: "Volumen Kugel (allgemein) – Oberstufe",
        formula: "V = 4/3 × π × r³",
        variables: { r: "Radius" },
        example: "r = 8 cm → V = 2144,66 cm³",
        shape: "   .---.\n  /     \\\n |   ●   |\n  \\     /\n   '---'",
        category: "volumen_10"
    },
    {
        id: "f106",
        name: "Oberfläche Kugel (allgemein) – Oberstufe",
        formula: "O = 4 × π × r²",
        variables: { r: "Radius" },
        example: "r = 8 cm → O = 804,25 cm²",
        shape: "   .---.\n  /     \\\n |   ●   |\n  \\     /\n   '---'",
        category: "oberflaeche_10"
    },
    {
        id: "f107",
        name: "Volumen Zylinder (allgemein) – Oberstufe",
        formula: "V = π × r² × h",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 7 cm, h = 12 cm → V = 1847,26 cm³",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "volumen_10"
    },
    {
        id: "f108",
        name: "Oberfläche Zylinder (allgemein) – Oberstufe",
        formula: "O = 2 × π × r × (r + h)",
        variables: { r: "Radius", h: "Höhe" },
        example: "r = 7 cm, h = 12 cm → O = 835,66 cm²",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "oberflaeche_10"
    },
    {
        id: "f109",
        name: "Volumen Kegelstumpf (allgemein) – Oberstufe",
        formula: "V = 1/3 × π × h × (R² + R·r + r²)",
        variables: { R: "großer Radius", r: "kleiner Radius", h: "Höhe" },
        example: "R = 8 cm, r = 6 cm, h = 7 cm → V = 1089,38 cm³",
        shape: "  /______\\\n /   R   \\\n/___r___\\",
        category: "volumen_10"
    },
    {
        id: "f110",
        name: "Oberfläche Kegelstumpf (allgemein) – Oberstufe",
        formula: "O = π × (R + r) × s + π × R² + π × r²",
        variables: { R: "großer Radius", r: "kleiner Radius", s: "Mantellinie" },
        example: "R = 8 cm, r = 6 cm, s = 7 cm → O = 502,65 cm²",
        shape: "  /______\\\n /   R   \\\n/___r___\\",
        category: "oberflaeche_10"
    },
    {
        id: "f111",
        name: "Volumen Kugelstumpf (allgemein)",
        formula: "V = 1/3 × π × h × (R² + R·r + r²)",
        variables: { R: "großer Radius", r: "kleiner Radius", h: "Höhe" },
        example: "R = 8 cm, r = 6 cm, h = 7 cm → V = 1089,38 cm³",
        shape: "  .---.\n /     \\\n|   R   | h\n \\     /\n  '---'",
        category: "volumen_10"
    },
    {
        id: "f112",
        name: "Oberfläche Kugelstumpf (allgemein)",
        formula: "O = 2 × π × R × h + 2 × π × r × h + π × (R² + r²)",
        variables: { R: "großer Radius", r: "kleiner Radius", h: "Höhe" },
        example: "R = 8 cm, r = 6 cm, h = 7 cm → O = 628,32 cm²",
        shape: "  .---.\n /     \\\n|   R   | h\n \\     /\n  '---'",
        category: "oberflaeche_10"
    },
    {
        id: "f113",
        name: "Volumen Zylinderstumpf",
        formula: "V = π × r² × (h₁ + h₂) / 2",
        variables: { r: "Radius", h₁: "Höhe 1", h₂: "Höhe 2" },
        example: "r = 7 cm, h₁ = 8 cm, h₂ = 6 cm → V = 1077,57 cm³",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "volumen_10"
    },
   {
        id: "f114",
        name: "Oberfläche Zylinderstumpf",
        formula: "O = π × r × (h₁ + h₂ + 2r)",
        variables: { r: "Radius", h₁: "Höhe 1", h₂: "Höhe 2" },
        example: "r = 7 cm, h₁ = 8 cm, h₂ = 6 cm → O ≈ 703,72 cm²",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "oberflaeche_10"
    },
    {
        id: "f115",
        name: "Flächeninhalt reguläres Zehneck",
        formula: "A = 5/2 × a² × √(5 + 2√5)",
        variables: { a: "Seitenlänge" },
        example: "a = 4 cm → A = 123,11 cm²",
        shape: "   ______\n  /      \\\n /        \\\n|          |\n \\        /\n  \\______/",
        category: "flaechen_10"
    },
    {
        id: "f116",
        name: "Umfang reguläres Zehneck",
        formula: "U = 10 × a",
        variables: { a: "Seitenlänge" },
        example: "a = 4 cm → U = 40 cm",
        shape: "   ______\n  /      \\\n /        \\\n|          |\n \\        /\n  \\______/",
        category: "flaechen_10"
    },
    {
        id: "f117",
        name: "Flächeninhalt reguläres Zwölfeck",
        formula: "A = 3 × a² × (2 + √3)",
        variables: { a: "Seitenlänge" },
        example: "a = 4 cm → A = 179,14 cm²",
        shape: "   ______\n  /      \\\n /        \\\n|          |\n \\        /\n  \\______/",
        category: "flaechen_10"
    },
    {
        id: "f118",
        name: "Umfang reguläres Zwölfeck",
        formula: "U = 12 × a",
        variables: { a: "Seitenlänge" },
        example: "a = 4 cm → U = 48 cm",
        shape: "   ______\n  /      \\\n /        \\\n|          |\n \\        /\n  \\______/",
        category: "flaechen_10"
    },
    {
        id: "f119",
        name: "Satz des Thales (erweitert)",
        formula: "Der Winkel im Halbkreis ist ein rechter Winkel.",
        variables: { α: "Winkel am Halbkreis" },
        example: "α = 90° (immer!)",
        shape: "  .---.\n /     \\\n|   α   |\n \\     /\n  '---'",
        category: "geometrie_10"
    },
    {
        id: "f120",
        name: "Kreiszahl π (erweitert)",
        formula: "π ≈ 3,14159265358979323846...",
        variables: { π: "Kreiszahl" },
        example: "π wird in vielen Formeln verwendet.",
        shape: "   .---.\n  /     \\\n |   π   |\n  \\     /\n   '---'",
        category: "geometrie_10"
    },

    // === FORMELN KLASSE 11 ===
    {
        id: "f121",
        name: "Vektorlänge (Betrag eines Vektors)",
        formula: "|v| = √(x² + y² + z²)",
        variables: { x: "x-Komponente", y: "y-Komponente", z: "z-Komponente" },
        example: "v = (3, 4, 0) → |v| = 5",
        shape: "  /|\\\n / | \\\n/__|__\\",
        category: "analytische_geometrie_11"
    },
    {
        id: "f122",
        name: "Skalarprodukt zweier Vektoren",
        formula: "v · w = v₁·w₁ + v₂·w₂ + v₃·w₃",
        variables: { v: "Vektor v", w: "Vektor w" },
        example: "v = (1, 2, 3), w = (4, 5, 6) → v·w = 32",
        shape: "  v → · w →",
        category: "analytische_geometrie_11"
    },
    {
        id: "f123",
        name: "Kreuzprodukt (Vektorprodukt)",
        formula: "v × w = (v₂·w₃ - v₃·w₂, v₃·w₁ - v₁·w₃, v₁·w₂ - v₂·w₁)",
        variables: { v: "Vektor v", w: "Vektor w" },
        example: "v = (1, 0, 0), w = (0, 1, 0) → v×w = (0, 0, 1)",
        shape: "  v × w",
        category: "analytische_geometrie_11"
    },
    {
        id: "f124",
        name: "Abstand zweier Punkte",
        formula: "d = √((x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²)",
        variables: { P₁: "Punkt 1", P₂: "Punkt 2" },
        example: "P₁ = (1, 2, 3), P₂ = (4, 5, 6) → d = 5,20",
        shape: "  P₁ → P₂",
        category: "analytische_geometrie_11"
    },
    {
        id: "f125",
        name: "Gerade in Parameterform",
        formula: "x = a + t · v",
        variables: { a: "Stützvektor", v: "Richtungsvektor", t: "Parameter" },
        example: "a = (1, 2, 3), v = (4, 5, 6) → x = (1,2,3) + t·(4,5,6)",
        shape: "  a → + t·v",
        category: "analytische_geometrie_11"
    },
    {
        id: "f126",
        name: "Ebene in Parameterform",
        formula: "x = a + t·v + s·w",
        variables: { a: "Stützvektor", v: "Richtungsvektor 1", w: "Richtungsvektor 2", t: "Parameter 1", s: "Parameter 2" },
        example: "a = (1, 0, 0), v = (0, 1, 0), w = (0, 0, 1) → x = (1,0,0) + t·(0,1,0) + s·(0,0,1)",
        shape: "  a → + t·v + s·w",
        category: "analytische_geometrie_11"
    },
    {
        id: "f127",
        name: "Ebene in Normalenform",
        formula: "n · (x - a) = 0",
        variables: { n: "Normalenvektor", a: "Stützvektor" },
        example: "n = (1, 1, 1), a = (1, 0, 0) → (1,1,1)·(x - (1,0,0)) = 0",
        shape: "  n → · (x - a) = 0",
        category: "analytische_geometrie_11"
    },
    {
        id: "f128",
        name: "Ebene in Koordinatenform",
        formula: "ax + by + cz = d",
        variables: { a: "Koeffizient a", b: "Koeffizient b", c: "Koeffizient c", d: "Konstante" },
        example: "1x + 2y + 3z = 6",
        shape: "  ax + by + cz = d",
        category: "analytische_geometrie_11"
    },
    {
        id: "f129",
        name: "Ableitung (Differentialquotient)",
        formula: "f'(x) = lim_{h→0} (f(x+h) - f(x)) / h",
        variables: { f: "Funktion", x: "Stelle", h: "Inkrement" },
        example: "f(x) = x² → f'(x) = 2x",
        shape: "  f'(x) = lim_{h→0} (f(x+h) - f(x)) / h",
        category: "differentialrechnung_11"
    },
    {
        id: "f130",
        name: "Potenzregel (Ableitung)",
        formula: "d/dx x^n = n·x^{n-1}",
        variables: { n: "Exponent" },
        example: "x³ → 3x²",
        shape: "  d/dx x^n = n·x^{n-1}",
        category: "differentialrechnung_11"
    },
    {
        id: "f131",
        name: "Summenregel (Ableitung)",
        formula: "d/dx (f(x) + g(x)) = f'(x) + g'(x)",
        variables: { f: "Funktion f", g: "Funktion g" },
        example: "(x² + x³)' = 2x + 3x²",
        shape: "  (f + g)' = f' + g'",
        category: "differentialrechnung_11"
    },
    {
        id: "f132",
        name: "Produktregel (Ableitung)",
        formula: "d/dx (f(x) · g(x)) = f'(x)·g(x) + f(x)·g'(x)",
        variables: { f: "Funktion f", g: "Funktion g" },
        example: "(x²·x³)' = 2x·x³ + x²·3x² = 5x⁴",
        shape: "  (f·g)' = f'·g + f·g'",
        category: "differentialrechnung_11"
    },
    {
        id: "f133",
        name: "Quotientenregel (Ableitung)",
        formula: "d/dx (f(x) / g(x)) = (f'(x)·g(x) - f(x)·g'(x)) / g(x)²",
        variables: { f: "Funktion f", g: "Funktion g" },
        example: "(x² / x³)' = (2x·x³ - x²·3x²) / x⁶ = -1/x²",
        shape: "  (f/g)' = (f'·g - f·g') / g²",
        category: "differentialrechnung_11"
    },
    {
        id: "f134",
        name: "Kettenregel (Ableitung)",
        formula: "d/dx f(g(x)) = f'(g(x)) · g'(x)",
        variables: { f: "äußere Funktion", g: "innere Funktion" },
        example: "(sin(x²))' = cos(x²)·2x",
        shape: "  (f(g))' = f'(g)·g'",
        category: "differentialrechnung_11"
    },
    {
        id: "f135",
        name: "Ableitung von sin(x)",
        formula: "d/dx sin(x) = cos(x)",
        variables: { x: "Variable" },
        example: "sin(x)' = cos(x)",
        shape: "  d/dx sin(x) = cos(x)",
        category: "differentialrechnung_11"
    },
    {
        id: "f136",
        name: "Ableitung von cos(x)",
        formula: "d/dx cos(x) = -sin(x)",
        variables: { x: "Variable" },
        example: "cos(x)' = -sin(x)",
        shape: "  d/dx cos(x) = -sin(x)",
        category: "differentialrechnung_11"
    },
    {
        id: "f137",
        name: "Ableitung von tan(x)",
        formula: "d/dx tan(x) = 1/cos²(x)",
        variables: { x: "Variable" },
        example: "tan(x)' = 1/cos²(x)",
        shape: "  d/dx tan(x) = 1/cos²(x)",
        category: "differentialrechnung_11"
    },
    {
        id: "f138",
        name: "Ableitung von e^x",
        formula: "d/dx e^x = e^x",
        variables: { x: "Variable" },
        example: "e^x' = e^x",
        shape: "  d/dx e^x = e^x",
        category: "differentialrechnung_11"
    },
    {
        id: "f139",
        name: "Ableitung von ln(x)",
        formula: "d/dx ln(x) = 1/x",
        variables: { x: "Variable" },
        example: "ln(x)' = 1/x",
        shape: "  d/dx ln(x) = 1/x",
        category: "differentialrechnung_11"
    },
    {
        id: "f140",
        name: "Extremwerte (Notwendige Bedingung)",
        formula: "f'(x) = 0",
        variables: { f: "Funktion", x: "Stelle" },
        example: "f(x) = x² → f'(x) = 2x = 0 → x = 0",
        shape: "  f'(x) = 0",
        category: "differentialrechnung_11"
    },

    // === FORMELN KLASSE 12 ===
    {
        id: "f141",
        name: "Stammfunktion (unbestimmtes Integral)",
        formula: "∫ f(x) dx = F(x) + C",
        variables: { f: "Funktion", F: "Stammfunktion", C: "Konstante" },
        example: "∫ 2x dx = x² + C",
        shape: "  ∫ f(x) dx = F(x) + C",
        category: "integralrechnung_12"
    },
    {
        id: "f142",
        name: "Potenzregel (Integration)",
        formula: "∫ x^n dx = (x^{n+1})/(n+1) + C",
        variables: { n: "Exponent", C: "Konstante" },
        example: "∫ x³ dx = x⁴/4 + C",
        shape: "  ∫ x^n dx = x^{n+1}/(n+1) + C",
        category: "integralrechnung_12"
    },
    {
        id: "f143",
        name: "Integration von sin(x)",
        formula: "∫ sin(x) dx = -cos(x) + C",
        variables: { x: "Variable", C: "Konstante" },
        example: "∫ sin(x) dx = -cos(x) + C",
        shape: "  ∫ sin(x) dx = -cos(x) + C",
        category: "integralrechnung_12"
    },
    {
        id: "f144",
        name: "Integration von cos(x)",
        formula: "∫ cos(x) dx = sin(x) + C",
        variables: { x: "Variable", C: "Konstante" },
        example: "∫ cos(x) dx = sin(x) + C",
        shape: "  ∫ cos(x) dx = sin(x) + C",
        category: "integralrechnung_12"
    },
    {
        id: "f145",
        name: "Integration von e^x",
        formula: "∫ e^x dx = e^x + C",
        variables: { x: "Variable", C: "Konstante" },
        example: "∫ e^x dx = e^x + C",
        shape: "  ∫ e^x dx = e^x + C",
        category: "integralrechnung_12"
    },
    {
        id: "f146",
        name: "Integration von 1/x",
        formula: "∫ 1/x dx = ln|x| + C",
        variables: { x: "Variable", C: "Konstante" },
        example: "∫ 1/x dx = ln|x| + C",
        shape: "  ∫ 1/x dx = ln|x| + C",
        category: "integralrechnung_12"
    },
    {
        id: "f147",
        name: "Bestimmtes Integral (Fläche unter der Kurve)",
        formula: "∫_a^b f(x) dx = F(b) - F(a)",
        variables: { a: "Untergrenze", b: "Obergrenze", f: "Funktion", F: "Stammfunktion" },
        example: "∫_0^1 x² dx = 1/3",
        shape: "  ∫_a^b f(x) dx = F(b) - F(a)",
        category: "integralrechnung_12"
    },
    {
        id: "f148",
        name: "Hauptsatz der Differential- und Integralrechnung",
        formula: "d/dx ∫_a^x f(t) dt = f(x)",
        variables: { f: "Funktion", a: "Untergrenze", x: "Obergrenze" },
        example: "d/dx ∫_0^x t² dt = x²",
        shape: "  d/dx ∫_a^x f(t) dt = f(x)",
        category: "integralrechnung_12"
    },
    {
        id: "f149",
        name: "Rotationsvolumen (um x-Achse)",
        formula: "V = π ∫_a^b (f(x))² dx",
        variables: { f: "Funktion", a: "Untergrenze", b: "Obergrenze" },
        example: "f(x) = x, a = 0, b = 1 → V = π/3",
        shape: "  V = π ∫_a^b (f(x))² dx",
        category: "integralrechnung_12"
    },
    {
        id: "f150",
        name: "Rotationsvolumen (um y-Achse)",
        formula: "V = π ∫_a^b (g(y))² dy",
        variables: { g: "Umkehrfunktion", a: "Untergrenze", b: "Obergrenze" },
        example: "g(y) = y, a = 0, b = 1 → V = π/3",
        shape: "  V = π ∫_a^b (g(y))² dy",
        category: "integralrechnung_12"
    },
    {
        id: "f151",
        name: "Mittelwert einer Funktion",
        formula: "m = 1/(b-a) ∫_a^b f(x) dx",
        variables: { f: "Funktion", a: "Untergrenze", b: "Obergrenze" },
        example: "f(x) = x², a = 0, b = 1 → m = 1/3",
        shape: "  m = 1/(b-a) ∫_a^b f(x) dx",
        category: "integralrechnung_12"
    },
    {
        id: "f152",
        name: "Binomialkoeffizient",
        formula: "(n über k) = n! / (k! · (n-k)!)",
        variables: { n: "Gesamtzahl", k: "Auswahl" },
        example: "(5 über 2) = 10",
        shape: "  (n über k) = n! / (k! · (n-k)!)",
        category: "stochastik_12"
    },
    {
        id: "f153",
        name: "Binomialverteilung (Wahrscheinlichkeit)",
        formula: "P(X = k) = (n über k) · p^k · (1-p)^{n-k}",
        variables: { n: "Versuche", k: "Treffer", p: "Wahrscheinlichkeit" },
        example: "n = 5, k = 2, p = 0,5 → P = 0,3125",
        shape: "  P(X = k) = (n über k) · p^k · (1-p)^{n-k}",
        category: "stochastik_12"
    },
    {
        id: "f154",
        name: "Erwartungswert (Binomialverteilung)",
        formula: "E(X) = n · p",
        variables: { n: "Versuche", p: "Wahrscheinlichkeit" },
        example: "n = 10, p = 0,5 → E(X) = 5",
        shape: "  E(X) = n·p",
        category: "stochastik_12"
    },
    {
        id: "f155",
        name: "Varianz (Binomialverteilung)",
        formula: "Var(X) = n · p · (1-p)",
        variables: { n: "Versuche", p: "Wahrscheinlichkeit" },
        example: "n = 10, p = 0,5 → Var(X) = 2,5",
        shape: "  Var(X) = n·p·(1-p)",
        category: "stochastik_12"
    },
    {
        id: "f156",
        name: "Standardabweichung (Binomialverteilung)",
        formula: "σ = √(n · p · (1-p))",
        variables: { n: "Versuche", p: "Wahrscheinlichkeit" },
        example: "n = 10, p = 0,5 → σ = 1,58",
        shape: "  σ = √(n·p·(1-p))",
        category: "stochastik_12"
    },
    {
        id: "f157",
        name: "Normalverteilung (Dichtefunktion)",
        formula: "f(x) = 1/(σ·√(2π)) · e^{-(x-μ)²/(2σ²)}",
        variables: { μ: "Mittelwert", σ: "Standardabweichung", x: "Wert" },
        example: "μ = 0, σ = 1 → f(0) = 0,3989",
        shape: "  f(x) = ...",
        category: "stochastik_12"
    },
    {
        id: "f158",
        name: "Standardnormalverteilung (Z-Wert)",
        formula: "z = (x - μ) / σ",
        variables: { x: "Wert", μ: "Mittelwert", σ: "Standardabweichung" },
        example: "x = 1, μ = 0, σ = 1 → z = 1",
        shape: "  z = (x - μ) / σ",
        category: "stochastik_12"
    },
    {
        id: "f159",
        name: "Sigma-Regeln (Normalverteilung)",
        formula: "P(|X - μ| < σ) ≈ 68,3%, P(|X - μ| < 2σ) ≈ 95,4%, P(|X - μ| < 3σ) ≈ 99,7%",
        variables: { μ: "Mittelwert", σ: "Standardabweichung" },
        example: "Bei μ = 0, σ = 1 liegen 68,3% der Werte zwischen -1 und 1.",
        shape: "  μ ± σ, μ ± 2σ, μ ± 3σ",
        category: "stochastik_12"
    },
    {
        id: "f160",
        name: "Bedingte Wahrscheinlichkeit",
        formula: "P(A|B) = P(A ∩ B) / P(B)",
        variables: { A: "Ereignis A", B: "Ereignis B" },
        example: "P(A|B) = 0,3 / 0,5 = 0,6",
        shape: "  P(A|B) = P(A ∩ B) / P(B)",
        category: "stochastik_12"
    },

    // === FORMELN KLASSE 13 ===
    {
        id: "f161",
        name: "Kettenregel (Ableitung – Vertiefung)",
        formula: "d/dx f(g(x)) = f'(g(x)) · g'(x)",
        variables: { f: "äußere Funktion", g: "innere Funktion" },
        example: "(sin(x²))' = cos(x²)·2x",
        shape: "  (f(g))' = f'(g)·g'",
        category: "differentialrechnung_13"
    },
    {
        id: "f162",
        name: "Produktregel (Ableitung – Vertiefung)",
        formula: "d/dx (f(x) · g(x)) = f'(x)·g(x) + f(x)·g'(x)",
        variables: { f: "Funktion f", g: "Funktion g" },
        example: "(x²·x³)' = 2x·x³ + x²·3x² = 5x⁴",
        shape: "  (f·g)' = f'·g + f·g'",
        category: "differentialrechnung_13"
    },
    {
        id: "f163",
        name: "Quotientenregel (Ableitung – Vertiefung)",
        formula: "d/dx (f(x) / g(x)) = (f'(x)·g(x) - f(x)·g'(x)) / g(x)²",
        variables: { f: "Funktion f", g: "Funktion g" },
        example: "(x² / x³)' = (2x·x³ - x²·3x²) / x⁶ = -1/x²",
        shape: "  (f/g)' = (f'·g - f·g') / g²",
        category: "differentialrechnung_13"
    },
    {
        id: "f164",
        name: "Ableitung von arcsin(x)",
        formula: "d/dx arcsin(x) = 1/√(1-x²)",
        variables: { x: "Variable" },
        example: "arcsin(x)' = 1/√(1-x²)",
        shape: "  d/dx arcsin(x) = 1/√(1-x²)",
        category: "differentialrechnung_13"
    },
    {
        id: "f165",
        name: "Ableitung von arccos(x)",
        formula: "d/dx arccos(x) = -1/√(1-x²)",
        variables: { x: "Variable" },
        example: "arccos(x)' = -1/√(1-x²)",
        shape: "  d/dx arccos(x) = -1/√(1-x²)",
        category: "differentialrechnung_13"
    },
    {
        id: "f166",
        name: "Ableitung von arctan(x)",
        formula: "d/dx arctan(x) = 1/(1+x²)",
        variables: { x: "Variable" },
        example: "arctan(x)' = 1/(1+x²)",
        shape: "  d/dx arctan(x) = 1/(1+x²)",
        category: "differentialrechnung_13"
    },
    {
        id: "f167",
        name: "Partielle Integration",
        formula: "∫ u(x)·v'(x) dx = u(x)·v(x) - ∫ u'(x)·v(x) dx",
        variables: { u: "Funktion u", v: "Funktion v" },
        example: "∫ x·e^x dx = x·e^x - ∫ 1·e^x dx = x·e^x - e^x + C",
        shape: "  ∫ u·v' = u·v - ∫ u'·v",
        category: "integralrechnung_13"
    },
    {
        id: "f168",
        name: "Substitutionsmethode (Integration)",
        formula: "∫ f(g(x))·g'(x) dx = ∫ f(u) du",
        variables: { f: "Funktion", g: "innere Funktion", u: "Substitution" },
        example: "∫ 2x·sin(x²) dx = ∫ sin(u) du = -cos(u) + C",
        shape: "  ∫ f(g)·g' dx = ∫ f(u) du",
        category: "integralrechnung_13"
    },
    {
        id: "f169",
        name: "Integral der Exponentialfunktion",
        formula: "∫ a^x dx = a^x / ln(a) + C",
        variables: { a: "Basis", x: "Variable", C: "Konstante" },
        example: "∫ 2^x dx = 2^x / ln(2) + C",
        shape: "  ∫ a^x dx = a^x / ln(a) + C",
        category: "integralrechnung_13"
    },
    {
        id: "f170",
        name: "Integral der Logarithmusfunktion",
        formula: "∫ ln(x) dx = x·ln(x) - x + C",
        variables: { x: "Variable", C: "Konstante" },
        example: "∫ ln(x) dx = x·ln(x) - x + C",
        shape: "  ∫ ln(x) dx = x·ln(x) - x + C",
        category: "integralrechnung_13"
    },
    {
        id: "f171",
        name: "Taylorreihe (sin x)",
        formula: "sin(x) = x - x³/3! + x⁵/5! - x⁷/7! + ...",
        variables: { x: "Variable" },
        example: "sin(0,5) ≈ 0,5 - 0,125/6 + 0,03125/120 = 0,4794",
        shape: "  sin(x) = x - x³/3! + x⁵/5! - x⁷/7! + ...",
        category: "analysis_13"
    },
    {
        id: "f172",
        name: "Taylorreihe (cos x)",
        formula: "cos(x) = 1 - x²/2! + x⁴/4! - x⁶/6! + ...",
        variables: { x: "Variable" },
        example: "cos(0,5) ≈ 1 - 0,25/2 + 0,0625/24 = 0,8776",
        shape: "  cos(x) = 1 - x²/2! + x⁴/4! - x⁶/6! + ...",
        category: "analysis_13"
    },
    {
        id: "f173",
        name: "Taylorreihe (e^x)",
        formula: "e^x = 1 + x + x²/2! + x³/3! + ...",
        variables: { x: "Variable" },
        example: "e^1 ≈ 1 + 1 + 1/2 + 1/6 + 1/24 = 2,7183",
        shape: "  e^x = 1 + x + x²/2! + x³/3! + ...",
        category: "analysis_13"
    },
    {
        id: "f174",
        name: "Differentialgleichung (einfach)",
        formula: "dy/dx = f(x) → y = ∫ f(x) dx",
        variables: { f: "Funktion" },
        example: "dy/dx = 2x → y = x² + C",
        shape: "  dy/dx = f(x) → y = ∫ f(x) dx",
        category: "analysis_13"
    },
    {
        id: "f175",
        name: "Differentialgleichung (Trennung der Variablen)",
        formula: "dy/dx = g(y)·h(x) → ∫ 1/g(y) dy = ∫ h(x) dx",
        variables: { g: "Funktion g", h: "Funktion h" },
        example: "dy/dx = y·x → ∫ 1/y dy = ∫ x dx → ln|y| = x²/2 + C",
        shape: "  dy/dx = g(y)·h(x) → ∫ 1/g(y) dy = ∫ h(x) dx",
        category: "analysis_13"
    },
    {
        id: "f176",
        name: "Bayes-Theorem",
        formula: "P(A|B) = (P(B|A) · P(A)) / P(B)",
        variables: { A: "Ereignis A", B: "Ereignis B" },
        example: "P(A|B) = (0,8·0,6) / 0,5 = 0,96",
        shape: "  P(A|B) = (P(B|A) · P(A)) / P(B)",
        category: "stochastik_13"
    },
    {
        id: "f177",
        name: "Totale Wahrscheinlichkeit",
        formula: "P(B) = ∑ P(B|A_i) · P(A_i)",
        variables: { A_i: "Ereignisse A_i", B: "Ereignis B" },
        example: "P(B) = 0,7·0,3 + 0,4·0,7 = 0,49",
        shape: "  P(B) = ∑ P(B|A_i) · P(A_i)",
        category: "stochastik_13"
    },
    {
        id: "f178",
        name: "Unabhängigkeit von Ereignissen",
        formula: "P(A ∩ B) = P(A) · P(B)",
        variables: { A: "Ereignis A", B: "Ereignis B" },
        example: "P(A) = 0,5, P(B) = 0,5 → P(A ∩ B) = 0,25",
        shape: "  P(A ∩ B) = P(A) · P(B)",
        category: "stochastik_13"
    },
    {
        id: "f179",
        name: "Lineare Regression",
        formula: "y = a·x + b   mit   a = (∑(x_i - x̄)(y_i - ȳ)) / ∑(x_i - x̄)²",
        variables: { x: "unabhängige Variable", y: "abhängige Variable" },
        example: "x = 1,2,3 → y = 2,4,6 → a = 2, b = 0",
        shape: "  y = a·x + b",
        category: "statistik_13"
    },
     {
    id: "f180",
    name: "Korrelation (Pearson)",
    formula: "r = (∑(x_i - x̄)(y_i - ȳ)) / √(∑(x_i - x̄)² · ∑(y_i - ȳ)²)",
    variables: { x: "unabhängige Variable", y: "abhängige Variable", x̄: "Mittelwert von x", ȳ: "Mittelwert von y" },
    example: "r = 0,95 → starke positive Korrelation, r = -0,8 → starke negative Korrelation",
    shape: "  r = ...",
    category: "statistik_13"
},
    // === BINOMISCHE FORMELN ===
    {
        id: "f181",
        name: "1. Binomische Formel",
        formula: "(a + b)² = a² + 2ab + b²",
        variables: { a: "1. Variable", b: "2. Variable" },
        example: "(3 + 4)² = 9 + 24 + 16 = 49",
        shape: "(a+b)² = (a+b)·(a+b)",
        category: "binomische_formeln"
    },
    {
        id: "f182",
        name: "2. Binomische Formel",
        formula: "(a - b)² = a² - 2ab + b²",
        variables: { a: "1. Variable", b: "2. Variable" },
        example: "(5 - 2)² = 25 - 20 + 4 = 9",
        shape: "(a-b)² = (a-b)·(a-b)",
        category: "binomische_formeln"
    },
    {
        id: "f183",
        name: "3. Binomische Formel",
        formula: "(a + b)·(a - b) = a² - b²",
        variables: { a: "1. Variable", b: "2. Variable" },
        example: "(6 + 2)·(6 - 2) = 36 - 4 = 32",
        shape: "(a+b)·(a-b) = a² - b²",
        category: "binomische_formeln"
    },
    {
        id: "f184",
        name: "(a + b)³",
        formula: "(a + b)³ = a³ + 3a²b + 3ab² + b³",
        variables: { a: "1. Variable", b: "2. Variable" },
        example: "(2 + 1)³ = 8 + 12 + 6 + 1 = 27",
        shape: "(a+b)³ = a³ + 3a²b + 3ab² + b³",
        category: "binomische_formeln"
    },
    {
        id: "f185",
        name: "(a - b)³",
        formula: "(a - b)³ = a³ - 3a²b + 3ab² - b³",
        variables: { a: "1. Variable", b: "2. Variable" },
        example: "(3 - 1)³ = 27 - 27 + 9 - 1 = 8",
        shape: "(a-b)³ = a³ - 3a²b + 3ab² - b³",
        category: "binomische_formeln"
    },
    {
        id: "f186",
        name: "Summe von Quadraten (Faktorisierung)",
        formula: "a² + b² = (a + b)² - 2ab",
        variables: { a: "1. Variable", b: "2. Variable" },
        example: "5² + 3² = 25 + 9 = 34 = (8)² - 30 = 34",
        shape: "a² + b² = (a+b)² - 2ab",
        category: "binomische_formeln"
    },
    {
        id: "f187",
        name: "Differenz von Quadraten (Faktorisierung)",
        formula: "a² - b² = (a + b)·(a - b)",
        variables: { a: "1. Variable", b: "2. Variable" },
        example: "7² - 4² = 49 - 16 = 33 = (7+4)·(7-4) = 11·3 = 33",
        shape: "a² - b² = (a+b)·(a-b)",
        category: "binomische_formeln"
    },
    {
        id: "f188",
        name: "Faktorisierung (x² + 2ax + a²)",
        formula: "x² + 2ax + a² = (x + a)²",
        variables: { x: "Variable", a: "Konstante" },
        example: "x² + 6x + 9 = (x + 3)²",
        shape: "x² + 2ax + a² = (x+a)²",
        category: "binomische_formeln"
    },
    {
        id: "f189",
        name: "Faktorisierung (x² - 2ax + a²)",
        formula: "x² - 2ax + a² = (x - a)²",
        variables: { x: "Variable", a: "Konstante" },
        example: "x² - 10x + 25 = (x - 5)²",
        shape: "x² - 2ax + a² = (x-a)²",
        category: "binomische_formeln"
    },
    {
        id: "f190",
        name: "Summe von Kubikzahlen",
        formula: "a³ + b³ = (a + b)·(a² - ab + b²)",
        variables: { a: "1. Variable", b: "2. Variable" },
        example: "2³ + 1³ = 8 + 1 = 9 = (3)·(4 - 2 + 1) = 9",
        shape: "a³ + b³ = (a+b)·(a² - ab + b²)",
        category: "binomische_formeln"
    },
    {
        id: "f191",
        name: "Differenz von Kubikzahlen",
        formula: "a³ - b³ = (a - b)·(a² + ab + b²)",
        variables: { a: "1. Variable", b: "2. Variable" },
        example: "3³ - 1³ = 27 - 1 = 26 = (2)·(9 + 3 + 1) = 26",
        shape: "a³ - b³ = (a-b)·(a² + ab + b²)",
        category: "binomische_formeln"
    },

    // === POTENZGESETZE ===
    {
        id: "f192",
        name: "Multiplikation gleicher Basen",
        formula: "a^m · a^n = a^{m+n}",
        variables: { a: "Basis", m: "Exponent 1", n: "Exponent 2" },
        example: "2³ · 2⁵ = 2⁸ = 256",
        shape: "a^m · a^n = a^{m+n}",
        category: "potenzgesetze"
    },
    {
        id: "f193",
        name: "Division gleicher Basen",
        formula: "a^m / a^n = a^{m-n}",
        variables: { a: "Basis", m: "Exponent 1", n: "Exponent 2" },
        example: "3⁶ / 3² = 3⁴ = 81",
        shape: "a^m / a^n = a^{m-n}",
        category: "potenzgesetze"
    },
    {
        id: "f194",
        name: "Potenz einer Potenz",
        formula: "(a^m)^n = a^{m·n}",
        variables: { a: "Basis", m: "Exponent 1", n: "Exponent 2" },
        example: "(2³)² = 2⁶ = 64",
        shape: "(a^m)^n = a^{m·n}",
        category: "potenzgesetze"
    },
    {
        id: "f195",
        name: "Multiplikation gleicher Exponenten",
        formula: "(a · b)^n = a^n · b^n",
        variables: { a: "Faktor 1", b: "Faktor 2", n: "Exponent" },
        example: "(2·3)² = 6² = 36 = 2²·3² = 4·9 = 36",
        shape: "(a·b)^n = a^n·b^n",
        category: "potenzgesetze"
    },
    {
        id: "f196",
        name: "Division gleicher Exponenten",
        formula: "(a / b)^n = a^n / b^n",
        variables: { a: "Zähler", b: "Nenner", n: "Exponent" },
        example: "(6/2)² = 3² = 9 = 6²/2² = 36/4 = 9",
        shape: "(a/b)^n = a^n / b^n",
        category: "potenzgesetze"
    },
    {
        id: "f197",
        name: "Negative Exponenten",
        formula: "a^{-n} = 1 / a^n",
        variables: { a: "Basis", n: "Exponent" },
        example: "2^{-3} = 1/8 = 0,125",
        shape: "a^{-n} = 1/a^n",
        category: "potenzgesetze"
    },
    {
        id: "f198",
        name: "Nuller Exponent",
        formula: "a^0 = 1   (a ≠ 0)",
        variables: { a: "Basis" },
        example: "5^0 = 1",
        shape: "a^0 = 1",
        category: "potenzgesetze"
    },
    {
        id: "f199",
        name: "Rationale Exponenten (Wurzel)",
        formula: "a^{1/n} = √[n]{a}",
        variables: { a: "Basis", n: "Wurzelexponent" },
        example: "8^{1/3} = ³√8 = 2",
        shape: "a^{1/n} = √[n]{a}",
        category: "potenzgesetze"
    },
    {
        id: "f200",
        name: "Rationale Exponenten (allgemein)",
        formula: "a^{m/n} = (√[n]{a})^m",
        variables: { a: "Basis", m: "Zähler", n: "Nenner" },
        example: "27^{2/3} = (³√27)² = 3² = 9",
        shape: "a^{m/n} = (√[n]{a})^m",
        category: "potenzgesetze"
    },

    // === LOGARITHMUSGESETZE ===
    {
        id: "f201",
        name: "Definition des Logarithmus",
        formula: "log_a(b) = c  ↔  a^c = b",
        variables: { a: "Basis", b: "Numerus", c: "Exponent" },
        example: "log_2(8) = 3 ↔ 2³ = 8",
        shape: "log_a(b) = c ↔ a^c = b",
        category: "logarithmusgesetze"
    },
    {
        id: "f202",
        name: "Logarithmus eines Produkts",
        formula: "log_a(x·y) = log_a(x) + log_a(y)",
        variables: { a: "Basis", x: "Faktor 1", y: "Faktor 2" },
        example: "log_2(4·8) = log_2(4) + log_2(8) = 2 + 3 = 5",
        shape: "log_a(x·y) = log_a(x) + log_a(y)",
        category: "logarithmusgesetze"
    },
    {
        id: "f203",
        name: "Logarithmus eines Quotienten",
        formula: "log_a(x/y) = log_a(x) - log_a(y)",
        variables: { a: "Basis", x: "Zähler", y: "Nenner" },
        example: "log_2(16/4) = log_2(16) - log_2(4) = 4 - 2 = 2",
        shape: "log_a(x/y) = log_a(x) - log_a(y)",
        category: "logarithmusgesetze"
    },
    {
        id: "f204",
        name: "Logarithmus einer Potenz",
        formula: "log_a(x^n) = n · log_a(x)",
        variables: { a: "Basis", x: "Numerus", n: "Exponent" },
        example: "log_2(8³) = 3 · log_2(8) = 3·3 = 9",
        shape: "log_a(x^n) = n·log_a(x)",
        category: "logarithmusgesetze"
    },
    {
        id: "f205",
        name: "Basiswechsel (Logarithmus)",
        formula: "log_a(b) = log_c(b) / log_c(a)",
        variables: { a: "alte Basis", b: "Numerus", c: "neue Basis" },
        example: "log_2(16) = log_10(16) / log_10(2) ≈ 1,204 / 0,301 = 4",
        shape: "log_a(b) = log_c(b) / log_c(a)",
        category: "logarithmusgesetze"
    },
    {
        id: "f206",
        name: "Logarithmus zur Basis 10 (lg)",
        formula: "lg(x) = log_10(x)",
        variables: { x: "Numerus" },
        example: "lg(100) = 2",
        shape: "lg(x) = log_10(x)",
        category: "logarithmusgesetze"
    },
    {
        id: "f207",
        name: "Natürlicher Logarithmus (ln)",
        formula: "ln(x) = log_e(x)   (e ≈ 2,71828)",
        variables: { x: "Numerus" },
        example: "ln(1) = 0, ln(e) = 1",
        shape: "ln(x) = log_e(x)",
        category: "logarithmusgesetze"
    },
    {
        id: "f208",
        name: "Logarithmus von 1",
        formula: "log_a(1) = 0",
        variables: { a: "Basis" },
        example: "log_5(1) = 0",
        shape: "log_a(1) = 0",
        category: "logarithmusgesetze"
    },
    {
        id: "f209",
        name: "Logarithmus der Basis",
        formula: "log_a(a) = 1",
        variables: { a: "Basis" },
        example: "log_3(3) = 1",
        shape: "log_a(a) = 1",
        category: "logarithmusgesetze"
    },
    {
        id: "f210",
        name: "Logarithmus einer Wurzel",
        formula: "log_a(√[n]{x}) = 1/n · log_a(x)",
        variables: { a: "Basis", x: "Numerus", n: "Wurzelexponent" },
        example: "log_2(√[3]{8}) = 1/3 · log_2(8) = 1/3 · 3 = 1",
        shape: "log_a(√[n]{x}) = 1/n·log_a(x)",
        category: "logarithmusgesetze"
    },

    // === DREISATZ & PROZENTRECHNUNG ===
    {
        id: "f211",
        name: "Einfacher Dreisatz (proportional)",
        formula: "a / b = c / x  →  x = (b · c) / a",
        variables: { a: "1. Wert", b: "2. Wert", c: "3. Wert" },
        example: "3 Äpfel kosten 2€ → 5 Äpfel kosten x = (5·2)/3 = 3,33€",
        shape: "a / b = c / x",
        category: "dreisatz_prozent"
    },
    {
        id: "f212",
        name: "Dreisatz (antiproportional)",
        formula: "a · b = c · x  →  x = (a · b) / c",
        variables: { a: "1. Wert", b: "2. Wert", c: "3. Wert" },
        example: "2 Arbeiter brauchen 6h → 3 Arbeiter brauchen x = (2·6)/3 = 4h",
        shape: "a·b = c·x",
        category: "dreisatz_prozent"
    },
    {
        id: "f213",
        name: "Prozentsatz berechnen",
        formula: "p% = (W / G) · 100",
        variables: { W: "Prozentwert", G: "Grundwert" },
        example: "W = 30, G = 150 → p = (30/150)·100 = 20%",
        shape: "p% = (W / G) · 100",
        category: "dreisatz_prozent"
    },
    {
        id: "f214",
        name: "Prozentwert berechnen",
        formula: "W = (G · p) / 100",
        variables: { G: "Grundwert", p: "Prozentsatz" },
        example: "G = 200, p = 15% → W = (200·15)/100 = 30",
        shape: "W = (G · p) / 100",
        category: "dreisatz_prozent"
    },
    {
        id: "f215",
        name: "Grundwert berechnen",
        formula: "G = (W · 100) / p",
        variables: { W: "Prozentwert", p: "Prozentsatz" },
        example: "W = 45, p = 9% → G = (45·100)/9 = 500",
        shape: "G = (W · 100) / p",
        category: "dreisatz_prozent"
    },
    {
        id: "f216",
        name: "Zinseszinsformel",
        formula: "K_n = K_0 · (1 + p/100)^n",
        variables: { K_0: "Anfangskapital", p: "Zinssatz", n: "Jahre" },
        example: "1000€, 5%, 10 Jahre → K_10 = 1000·(1,05)^10 = 1628,89€",
        shape: "K_n = K_0 · (1 + p/100)^n",
        category: "dreisatz_prozent"
    },
    {
        id: "f217",
        name: "Jährlicher Zins",
        formula: "Z = K_0 · p / 100",
        variables: { K_0: "Kapital", p: "Zinssatz" },
        example: "1000€, 5% → Z = 1000·5/100 = 50€",
        shape: "Z = K_0 · p / 100",
        category: "dreisatz_prozent"
    },
    {
        id: "f218",
        name: "Tageszins",
        formula: "Z = K_0 · p · t / (100 · 360)",
        variables: { K_0: "Kapital", p: "Zinssatz", t: "Tage" },
        example: "1000€, 5%, 30 Tage → Z = 1000·5·30/(100·360) = 4,17€",
        shape: "Z = K_0 · p · t / (100 · 360)",
        category: "dreisatz_prozent"
    },
    {
        id: "f219",
        name: "Monatszins",
        formula: "Z = K_0 · p · m / (100 · 12)",
        variables: { K_0: "Kapital", p: "Zinssatz", m: "Monate" },
        example: "1000€, 5%, 6 Monate → Z = 1000·5·6/(100·12) = 25€",
        shape: "Z = K_0 · p · m / (100 · 12)",
        category: "dreisatz_prozent"
    },
    {
        id: "f220",
        name: "Inflationsberechnung",
        formula: "K_neu = K_alt · (1 + Inflation/100)",
        variables: { K_alt: "alter Wert", Inflation: "Inflationsrate" },
        example: "100€, Inflation 2% → K_neu = 100·1,02 = 102€",
        shape: "K_neu = K_alt · (1 + Inflation/100)",
        category: "dreisatz_prozent"
    },

    // === PHYSIKALISCHE GRUNDFORMELN ===
    {
        id: "f221",
        name: "Geschwindigkeit (gleichförmig)",
        formula: "v = s / t",
        variables: { s: "Strecke", t: "Zeit" },
        example: "100km in 2h → v = 50km/h",
        shape: "v = s / t",
        category: "physik_grundlagen"
    },
    {
        id: "f222",
        name: "Beschleunigung (gleichmäßig)",
        formula: "a = (v - v_0) / t",
        variables: { v: "Endgeschwindigkeit", v_0: "Anfangsgeschwindigkeit", t: "Zeit" },
        example: "0 auf 100km/h in 5s → a = (27,78 - 0)/5 = 5,56 m/s²",
        shape: "a = (v - v_0) / t",
        category: "physik_grundlagen"
    },
    {
        id: "f223",
        name: "Weg bei gleichmäßiger Beschleunigung",
        formula: "s = v_0·t + 1/2·a·t²",
        variables: { v_0: "Anfangsgeschwindigkeit", t: "Zeit", a: "Beschleunigung" },
        example: "v_0 = 0, a = 2m/s², t = 3s → s = 0 + 0,5·2·9 = 9m",
        shape: "s = v_0·t + 1/2·a·t²",
        category: "physik_grundlagen"
    },
    {
        id: "f224",
        name: "Kraft (2. Newton'sches Gesetz)",
        formula: "F = m · a",
        variables: { m: "Masse", a: "Beschleunigung" },
        example: "2kg, 3m/s² → F = 6N",
        shape: "F = m · a",
        category: "physik_grundlagen"
    },
    {
        id: "f225",
        name: "Gewichtskraft",
        formula: "F_G = m · g   (g ≈ 9,81 m/s²)",
        variables: { m: "Masse", g: "Fallbeschleunigung" },
        example: "m = 10kg → F_G = 10·9,81 = 98,1N",
        shape: "F_G = m · g",
        category: "physik_grundlagen"
    },
    {
        id: "f226",
        name: "Arbeit",
        formula: "W = F · s",
        variables: { F: "Kraft", s: "Weg" },
        example: "10N über 5m → W = 50J",
        shape: "W = F · s",
        category: "physik_grundlagen"
    },
    {
        id: "f227",
        name: "Hubarbeit",
        formula: "W_hub = m · g · h",
        variables: { m: "Masse", g: "Fallbeschleunigung", h: "Höhe" },
        example: "5kg, 2m → W_hub = 5·9,81·2 = 98,1J",
        shape: "W_hub = m · g · h",
        category: "physik_grundlagen"
    },
    {
        id: "f228",
        name: "Leistung",
        formula: "P = W / t",
        variables: { W: "Arbeit", t: "Zeit" },
        example: "100J in 5s → P = 20W",
        shape: "P = W / t",
        category: "physik_grundlagen"
    },
    {
        id: "f229",
        name: "Kinetische Energie",
        formula: "E_kin = 1/2 · m · v²",
        variables: { m: "Masse", v: "Geschwindigkeit" },
        example: "2kg, 3m/s → E_kin = 0,5·2·9 = 9J",
        shape: "E_kin = 1/2 · m · v²",
        category: "physik_grundlagen"
    },
    {
        id: "f230",
        name: "Potentielle Energie",
        formula: "E_pot = m · g · h",
        variables: { m: "Masse", g: "Fallbeschleunigung", h: "Höhe" },
        example: "5kg, 2m → E_pot = 5·9,81·2 = 98,1J",
        shape: "E_pot = m · g · h",
        category: "physik_grundlagen"
    },
    {
        id: "f231",
        name: "Druck",
        formula: "p = F / A",
        variables: { F: "Kraft", A: "Fläche" },
        example: "100N auf 0,5m² → p = 200Pa",
        shape: "p = F / A",
        category: "physik_grundlagen"
    },
    {
        id: "f232",
        name: "Dichte",
        formula: "ρ = m / V",
        variables: { m: "Masse", V: "Volumen" },
        example: "500g, 0,2l → ρ = 2,5 kg/l",
        shape: "ρ = m / V",
        category: "physik_grundlagen"
    },
    {
        id: "f233",
        name: "Auftriebskraft",
        formula: "F_A = ρ · V · g",
        variables: { ρ: "Flüssigkeitsdichte", V: "verdrängtes Volumen", g: "Fallbeschleunigung" },
        example: "1000kg/m³, 0,001m³ → F_A = 1000·0,001·9,81 = 9,81N",
        shape: "F_A = ρ · V · g",
        category: "physik_grundlagen"
    },
    {
        id: "f234",
        name: "Energieerhaltung",
        formula: "E_gesamt = E_kin + E_pot = konstant",
        variables: { E_kin: "kinetische Energie", E_pot: "potentielle Energie" },
        example: "E_gesamt bleibt bei Reibungsfreiheit erhalten",
        shape: "E_ges = E_kin + E_pot",
        category: "physik_grundlagen"
    },
    {
        id: "f235",
        name: "Wirkungsgrad",
        formula: "η = P_nutz / P_zu",
        variables: { P_nutz: "Nutzleistung", P_zu: "zugeführte Leistung" },
        example: "η = 0,8 → 80% Wirkungsgrad",
        shape: "η = P_nutz / P_zu",
        category: "physik_grundlagen"
    },
    {
        id: "f236",
        name: "Ohm'sches Gesetz",
        formula: "U = R · I",
        variables: { U: "Spannung", R: "Widerstand", I: "Stromstärke" },
        example: "R = 10Ω, I = 2A → U = 20V",
        shape: "U = R · I",
        category: "physik_grundlagen"
    },
    {
        id: "f237",
        name: "Elektrische Leistung",
        formula: "P = U · I",
        variables: { U: "Spannung", I: "Stromstärke" },
        example: "230V, 2A → P = 460W",
        shape: "P = U · I",
        category: "physik_grundlagen"
    },
    {
        id: "f238",
        name: "Elektrische Arbeit",
        formula: "W = P · t = U · I · t",
        variables: { P: "Leistung", t: "Zeit", U: "Spannung", I: "Stromstärke" },
        example: "100W, 1h → W = 0,1kWh",
        shape: "W = U · I · t",
        category: "physik_grundlagen"
    },
    {
        id: "f239",
        name: "Wellenlänge/Frequenz (Licht/Schall)",
        formula: "c = λ · f   (c = Lichtgeschwindigkeit)",
        variables: { c: "Lichtgeschwindigkeit", λ: "Wellenlänge", f: "Frequenz" },
        example: "f = 5·10¹⁴ Hz → λ = 3·10⁸ / 5·10¹⁴ = 6·10⁻⁷m",
        shape: "c = λ · f",
        category: "physik_grundlagen"
    },
    {
        id: "f240",
        name: "Schallgeschwindigkeit in Luft",
        formula: "c_luft ≈ 343 m/s (bei 20°C)",
        variables: { c_luft: "Schallgeschwindigkeit" },
        example: "343 m/s ≈ 1235 km/h",
        shape: "c_luft ≈ 343 m/s",
        category: "physik_grundlagen"
    },

    // === EINHEITEN & UMRECHNUNGEN ===
    {
        id: "f241",
        name: "Längeneinheiten",
        formula: "1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm",
        variables: { km: "Kilometer", m: "Meter", cm: "Zentimeter", mm: "Millimeter" },
        example: "5 km = 5000 m = 500.000 cm",
        shape: "km → m → cm → mm",
        category: "einheiten_umrechnung"
    },
    {
        id: "f242",
        name: "Flächeneinheiten",
        formula: "1 m² = 100 dm² = 10.000 cm²",
        variables: { m²: "Quadratmeter", dm²: "Quadratdezimeter", cm²: "Quadratzentimeter" },
        example: "2 m² = 200 dm² = 20.000 cm²",
        shape: "m² → dm² → cm²",
        category: "einheiten_umrechnung"
    },
    {
        id: "f243",
        name: "Volumeneinheiten",
        formula: "1 m³ = 1000 dm³ = 1.000.000 cm³",
        variables: { m³: "Kubikmeter", dm³: "Kubikdezimeter", cm³: "Kubikzentimeter" },
        example: "3 m³ = 3000 dm³ = 3.000.000 cm³",
        shape: "m³ → dm³ → cm³",
        category: "einheiten_umrechnung"
    },
    {
        id: "f244",
        name: "Hohlmaße",
        formula: "1 l = 1 dm³ = 1000 ml",
        variables: { l: "Liter", dm³: "Kubikdezimeter", ml: "Milliliter" },
        example: "5 l = 5 dm³ = 5000 ml",
        shape: "l → dm³ → ml",
        category: "einheiten_umrechnung"
    },
    {
        id: "f245",
        name: "Masseinheiten",
        formula: "1 t = 1000 kg, 1 kg = 1000 g, 1 g = 1000 mg",
        variables: { t: "Tonne", kg: "Kilogramm", g: "Gramm", mg: "Milligramm" },
        example: "2 kg = 2000 g = 2.000.000 mg",
        shape: "t → kg → g → mg",
        category: "einheiten_umrechnung"
    },
    {
        id: "f246",
        name: "Zeiteinheiten",
        formula: "1 d = 24 h, 1 h = 60 min, 1 min = 60 s",
        variables: { d: "Tag", h: "Stunde", min: "Minute", s: "Sekunde" },
        example: "2 h = 120 min = 7200 s",
        shape: "d → h → min → s",
        category: "einheiten_umrechnung"
    },
    {
        id: "f247",
        name: "Geschwindigkeitseinheiten (km/h ↔ m/s)",
        formula: "1 m/s = 3,6 km/h",
        variables: { m_s: "m/s", km_h: "km/h" },
        example: "10 m/s = 36 km/h",
        shape: "1 m/s = 3,6 km/h",
        category: "einheiten_umrechnung"
    },
    {
        id: "f248",
        name: "Krafteinheiten",
        formula: "1 N = 1 kg·m/s²",
        variables: { N: "Newton", kg: "Kilogramm", m: "Meter", s: "Sekunde" },
        example: "10 N = 10 kg·m/s²",
        shape: "1 N = 1 kg·m/s²",
        category: "einheiten_umrechnung"
    },
    {
        id: "f249",
        name: "Energieeinheiten",
        formula: "1 J = 1 N·m = 1 kg·m²/s²",
        variables: { J: "Joule", N: "Newton", m: "Meter", kg: "Kilogramm", s: "Sekunde" },
        example: "10 J = 10 N·m",
        shape: "1 J = 1 N·m",
        category: "einheiten_umrechnung"
    },
    {
        id: "f250",
        name: "Leistungseinheiten",
        formula: "1 W = 1 J/s = 1 N·m/s",
        variables: { W: "Watt", J: "Joule", N: "Newton", m: "Meter", s: "Sekunde" },
        example: "10 W = 10 J/s",
        shape: "1 W = 1 J/s",
        category: "einheiten_umrechnung"
    },
    {
        id: "f251",
        name: "Druckeinheiten",
        formula: "1 Pa = 1 N/m²",
        variables: { Pa: "Pascal", N: "Newton", m: "Meter" },
        example: "10 Pa = 10 N/m²",
        shape: "1 Pa = 1 N/m²",
        category: "einheiten_umrechnung"
    },

    // === TRIGONOMETRISCHE IDENTITÄTEN ===
    {
        id: "f252",
        name: "Trigonometrischer Pythagoras",
        formula: "sin²(α) + cos²(α) = 1",
        variables: { α: "Winkel" },
        example: "α = 30° → sin²(30°) + cos²(30°) = 0,25 + 0,75 = 1",
        shape: "sin²(α) + cos²(α) = 1",
        category: "trigonometrie_identitaeten"
    },
    {
        id: "f253",
        name: "Additionstheorem (sin)",
        formula: "sin(α ± β) = sin(α)·cos(β) ± cos(α)·sin(β)",
        variables: { α: "Winkel 1", β: "Winkel 2" },
        example: "sin(30°+20°) = sin(30)·cos(20) + cos(30)·sin(20)",
        shape: "sin(α ± β) = sin(α)·cos(β) ± cos(α)·sin(β)",
        category: "trigonometrie_identitaeten"
    },
    {
        id: "f254",
        name: "Additionstheorem (cos)",
        formula: "cos(α ± β) = cos(α)·cos(β) ∓ sin(α)·sin(β)",
        variables: { α: "Winkel 1", β: "Winkel 2" },
        example: "cos(30°+20°) = cos(30)·cos(20) - sin(30)·sin(20)",
        shape: "cos(α ± β) = cos(α)·cos(β) ∓ sin(α)·sin(β)",
        category: "trigonometrie_identitaeten"
    },
    {
        id: "f255",
        name: "Doppelwinkelsatz (sin)",
        formula: "sin(2α) = 2·sin(α)·cos(α)",
        variables: { α: "Winkel" },
        example: "α = 30° → sin(60°) = 2·0,5·0,866 = 0,866",
        shape: "sin(2α) = 2·sin(α)·cos(α)",
        category: "trigonometrie_identitaeten"
    },
    {
        id: "f256",
        name: "Doppelwinkelsatz (cos)",
        formula: "cos(2α) = cos²(α) - sin²(α) = 2cos²(α) - 1 = 1 - 2sin²(α)",
        variables: { α: "Winkel" },
        example: "α = 30° → cos(60°) = 0,866² - 0,5² = 0,5",
        shape: "cos(2α) = cos²(α) - sin²(α)",
        category: "trigonometrie_identitaeten"
    },
    {
        id: "f257",
        name: "Halbwinkelsatz (sin)",
        formula: "sin²(α/2) = (1 - cos(α)) / 2",
        variables: { α: "Winkel" },
        example: "α = 60° → sin²(30°) = (1 - 0,5)/2 = 0,25",
        shape: "sin²(α/2) = (1 - cos(α)) / 2",
        category: "trigonometrie_identitaeten"
    },
    {
        id: "f258",
        name: "Halbwinkelsatz (cos)",
        formula: "cos²(α/2) = (1 + cos(α)) / 2",
        variables: { α: "Winkel" },
        example: "α = 60° → cos²(30°) = (1 + 0,5)/2 = 0,75",
        shape: "cos²(α/2) = (1 + cos(α)) / 2",
        category: "trigonometrie_identitaeten"
    },
    {
        id: "f259",
        name: "sin(α + π/2)",
        formula: "sin(α + π/2) = cos(α)",
        variables: { α: "Winkel" },
        example: "sin(30°+90°) = cos(30°) → sin(120°) = cos(30°)",
        shape: "sin(α + π/2) = cos(α)",
        category: "trigonometrie_identitaeten"
    },
    {
        id: "f260",
        name: "cos(α + π/2)",
        formula: "cos(α + π/2) = -sin(α)",
        variables: { α: "Winkel" },
        example: "cos(30°+90°) = -sin(30°) → cos(120°) = -0,5",
        shape: "cos(α + π/2) = -sin(α)",
        category: "trigonometrie_identitaeten"
    }
];

// Export für Node.js / Browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FORMULA_DATABASE, FORMULA_CARDS };
}
if (typeof window !== 'undefined') {
    window.FORMULA_DATABASE = FORMULA_DATABASE;
    window.FORMULA_CARDS = FORMULA_CARDS;
}