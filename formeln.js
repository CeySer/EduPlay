// =======================================================
// FORMELSAMMLUNG - MATHEMATIK (Klasse 1-13)
// Kurze, jugendgerechte Erklärungen fürs Auswendiglernen
// =======================================================
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
            { name: "Binomialverteilung", formula: "E(X) = n × p", explanation: "Durchschnittli