
{ 
  id: "f001", 
  name: "Flächeninhalt Rechteck", 
  formula: "A = a × b", 
  variables: { a: "Länge", b: "Breite" },
  example: "a = 5 cm, b = 3 cm → A = 15 cm²",
  shape: "┌─────┐\n│     │ b\n└─────┘\n   a",
  category: "flaechen_5"
}



const FORMULA_CARDS = [
    // === FLÄCHENBERECHNUNG ===
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

    // === VOLUMENBERECHNUNG ===
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
    }
];





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
    }






// === FORMELN KLASSE 7 ===
    {
        id: "f041",
        name: "Flächeninhalt Dreieck (Heron)",
        formula: "A = √(s·(s-a)·(s-b)·(s-c)) mit s = (a+b+c)/2",
        variables: { a: "Seite a", b: "Seite b", c: "Seite c", s: "Halbumfang" },
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
    }




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
        variables: { a: "Länge", b: "Breite", s₁: "Seitenhöhe 1", s₂: "Seitenhöhe 2" },
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
        variables: { r: "Radius", h₁: "Höhe 1", h₂: "Höhe 2" },
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
        formula: "O ≈ 4 × π × (a^1.6075 × b^1.6075 + ...) / 3",
        variables: { a: "Halbachse a", b: "Halbachse b", c: "Halbachse c" },
        example: "a = 5 cm, b = 3 cm, c = 4 cm → O ≈ 188,50 cm²",
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
    }





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
        variables: { a: "Länge", b: "Breite", s₁: "Seitenhöhe 1", s₂: "Seitenhöhe 2" },
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
        formula: "A = 1/4 × n × a² × cot(π/n)",
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
    }





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
        name: "Volumen Zylinderstumpf (allgemein)",
        formula: "V = π × r² × (h₁ + h₂) / 2",
        variables: { r: "Radius", h₁: "Höhe 1", h₂: "Höhe 2" },
        example: "r = 7 cm, h₁ = 8 cm, h₂ = 6 cm → V = 1077,57 cm³",
        shape: "   .---.\n  /     \\\n |   ●   | h\n  \\     /\n   '---'",
        category: "volumen_10"
    },
    {
        id: "f114",
        name: "Oberfläche Zylinderstumpf (allgemein)",
        formula: "O = π × r × (h₁ + h₂ + r + √(r² + (h₁-h₂)²))",
        variables: { r: "Radius", h₁: "Höhe 1", h₂: "Höhe 2" },
        example: "r = 7 cm, h₁ = 8 cm, h₂ = 6 cm → O = 628,32 cm²",
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
    }



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
    }




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
    }




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
        variables: { x: "unabhängige Variable", y: "abhängige Variable" },
        example: "r = 0,95 → starke positive Korrelation",
        shape: "  r = ...",
        category: "statistik_13"
    }














