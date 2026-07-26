

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
    }



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
    }




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
    }



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
    }




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
    }






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
    }




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




