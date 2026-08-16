// ================================================================
// KLASSE 7 - MATHEMATIK (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K7_MATHEMATIK_QUESTIONS = [
  // --- PROZENT- & ZINSRECHNUNG (001 - 025) ---
  {
    "id": "k7_ma_001",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie lautet der mathematische Zusammenhang zwischen Grundwert $G$, Prozentwert $W$ u. Prozentsatz $p\\%$?",
    "answers": [
      "Formel: W = G + p / 100",
      "Formel: W = G * p / 100",
      "Formel: W = p * 100 / G",
      "Formel: W = G * 100 / p"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Prozentwert $W$ berechnet sich durch Multiplikation von Grundwert $G$ mit dem Prozentsatz $p\\% = p/100$."
  },
  {
    "id": "k7_ma_002",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Buch kostet 80 € u. wird um 15 % reduziert. Wie viel Euro beträgt der Rabatt?",
    "answers": [
      "Rabatt beträgt: 12,00 €",
      "Rabatt beträgt: 68,00 €",
      "Rabatt beträgt: 18,00 €",
      "Rabatt beträgt: 15,00 €"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$W = 80\\text{ €} \\cdot 0{,}15 = 12\\text{ €}$ Rabatt."
  },
  {
    "id": "k7_ma_003",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Fahrrad kostet nach einer Rabattierung von 20 % genau 400 €. Wie hoch war der ursprüngliche Grundwert $G$?",
    "answers": [
      "Grundwert: 480,00 €",
      "Grundwert: 500,00 €",
      "Grundwert: 420,00 €",
      "Grundwert: 520,00 €"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "400 € entsprechen 80 % (0,8). Grundwert $G = 400 / 0{,}8 = 500\\text{ €}$."
  },
  {
    "id": "k7_ma_004",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "In einer Klasse von 25 Schülern spielen 10 Fußball. Wie viel Prozent der Schüler sind das?",
    "answers": [
      "Prozentsatz: 40,0 %",
      "Prozentsatz: 35,0 %",
      "Prozentsatz: 25,0 %",
      "Prozentsatz: 50,0 %"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$p\\% = (10 / 25) \\cdot 100\\% = 0{,}40 \\cdot 100\\% = 40\\%$."
  },
  {
    "id": "k7_ma_005",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welchem Dezimalbruch entspricht der Prozentwert von 0,5 % exakt?",
    "answers": [
      "Wert: 0,0005 als Bruch",
      "Wert: 0,500 als Bruch",
      "Wert: 0,005 als Bruch",
      "Wert: 0,050 als Bruch"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$0{,}5\\% = 0{,}5 / 100 = 0{,}005$."
  },
  {
    "id": "k7_ma_006",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welchem Bruch in einfachster Form entspricht der Prozentsatz von 35 %?",
    "answers": [
      "Gekürzt: 7 / 20",
      "Gekürzt: 35 / 50",
      "Gekürzt: 3 / 10",
      "Gekürzt: 7 / 25"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$35\\% = 35 / 100 = 7 / 20$ (durch 5 gekürzt)."
  },
  {
    "id": "k7_ma_007",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Preis von 120 € wird zuerst um 10 % erhöht u. danach der neue Preis um 10 % gesenkt. Wie viel kostet der Artikel?",
    "answers": [
      "Endpreis: 116,00 €",
      "Endpreis: 120,00 €",
      "Endpreis: 118,80 €",
      "Endpreis: 121,20 €"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$120 \\cdot 1{,}10 = 132\\text{ €}$. Dann $132 \\cdot 0{,}90 = 118{,}80\\text{ €}$."
  },
  {
    "id": "k7_ma_008",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie lautet der Multiplikationsfaktor für eine Erhöhung eines Wertes um 4,5 %?",
    "answers": [
      "Faktor: 1,450",
      "Faktor: 0,045",
      "Faktor: 1,0045",
      "Faktor: 1,045"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$100\\% + 4{,}5\\% = 104{,}5\\% = 1{,}045$ als Vervielfachungsfaktor."
  },
  {
    "id": "k7_ma_009",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie lautet der Multiplikationsfaktor für eine Verminderung eines Wertes um 12 %?",
    "answers": [
      "Faktor: 0,880",
      "Faktor: 0,120",
      "Faktor: 1,120",
      "Faktor: 0,820"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$100\\% - 12\\% = 88\\% = 0{,}88$ als Minderungsfaktor."
  },
  {
    "id": "k7_ma_010",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie nennt man in der Zinsrechnung das angelegte Geld, das dem Grundwert $G$ entspricht?",
    "answers": [
      "Die Zinsen Z",
      "Der Zinssatz p%",
      "Das Kapital K",
      "Die Zinslaufzeit t"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In der Zinsrechnung entspricht das Kapital $K$ dem Grundwert $G$ der Prozentrechnung."
  },
  {
    "id": "k7_ma_011",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie berechnet man die Jahreszinsen $Z$ für ein Kapital $K$ bei einem Zinssatz von $p\\%$?",
    "answers": [
      "Formel: Z = K + p / 100",
      "Formel: Z = K * 100 / p",
      "Formel: Z = K * p / 100",
      "Formel: Z = p * 100 / K"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Jahreszinsen errechnen sich analog zum Prozentwert: $Z = K \\cdot (p / 100)$."
  },
  {
    "id": "k7_ma_012",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Kapital von 2.000 € wird für ein Jahr zu 2,5 % Zinsen angelegt. Wie viel Euro Zinsen bringt das?",
    "answers": [
      "Jahreszins: 500,00 €",
      "Jahreszins: 20,00 €",
      "Jahreszins: 25,00 €",
      "Jahreszins: 50,00 €"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$Z = 2000\\text{ €} \\cdot 0{,}025 = 50\\text{ €}$ Zinsen."
  },
  {
    "id": "k7_ma_013",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Für ein Kapital von 4.000 € zahlt die Bank nach einem Jahr 120 € Zinsen. Wie hoch ist der Zinssatz $p\\%$?",
    "answers": [
      "Zinssatz: 3,5 %",
      "Zinssatz: 2,5 %",
      "Zinssatz: 3,0 %",
      "Zinssatz: 4,0 %"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$p\\% = (120 / 4000) \\cdot 100\\% = 0{,}03 \\cdot 100\\% = 3{,}0\\%$."
  },
  {
    "id": "k7_ma_014",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Mit wie vielen Tagen rechnet man in der kaufmännischen Zinsrechnung für ein volles Jahr?",
    "answers": [
      "Exakt 360 Tage",
      "Exakt 300 Tage",
      "Exakt 366 Tage",
      "Exakt 365 Tage"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die kaufmännische Zinsmethode setzt jeden Monat mit 30 Tagen u. das Jahr mit 360 Tagen an."
  },
  {
    "id": "k7_ma_015",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie berechnet man die Tageszinsen $Z_t$ für $t$ Tage im kaufmännischen Jahr?",
    "answers": [
      "Formel: Zt = Z * t / 365",
      "Formel: Zt = Z * t / 360",
      "Formel: Zt = Z + t / 360",
      "Formel: Zt = Z * 360 / t"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Tageszinsen entsprechen den Jahreszinsen gewichtet mit der Tagesanzahl: $Z_t = Z \\cdot (t / 360)$."
  },
  {
    "id": "k7_ma_016",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Guthaben von 6.000 € wird für 90 Tage zu 4 % Jahreszins angelegt. Wie viel Zinsen ergeben sich?",
    "answers": [
      "Tageszins: 240,00 €",
      "Tageszins: 80,00 €",
      "Tageszins: 120,00 €",
      "Tageszins: 60,00 €"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Jahreszins $Z = 6000 \\cdot 0{,}04 = 240\\text{ €}$. Für 90 Tage: $240 \\cdot (90 / 360) = 60\\text{ €}$."
  },
  {
    "id": "k7_ma_017",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie nennt man den Begriff für Zinsen, die auf bereits gutgeschriebene Zinsen früherer Jahre gezahlt werden?",
    "answers": [
      "Der Discontzins",
      "Der Zinseszins",
      "Der Nominalzins",
      "Der Sollzinssatz"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Werden Jahreszinsen dem Kapital zugeschlagen u. in den Folgejahren mitverzinst, spricht man von Zinseszins."
  },
  {
    "id": "k7_ma_018",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Betrag steigt von 80 € auf 100 €. Um wie viel Prozent hat sich der Betrag erhöht?",
    "answers": [
      "Steigerung: 15,0 %",
      "Steigerung: 20,0 %",
      "Steigerung: 30,0 %",
      "Steigerung: 25,0 %"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zunahme $= 20\\text{ €}$. Bezogen auf den Grundwert $80\\text{ €}$: $(20 / 80) \\cdot 100\\% = 25\\%$."
  },
  {
    "id": "k7_ma_019",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Preis sinkt von 150 € auf 120 €. Um wie viel Prozent wurde der Preis verringert?",
    "answers": [
      "Senkung um: 25,0 %",
      "Senkung um: 30,0 %",
      "Senkung um: 20,0 %",
      "Senkung um: 15,0 %"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Abnahme $= 30\\text{ €}$. Bezogen auf den Ausgangswert $150\\text{ €}$: $(30 / 150) \\cdot 100\\% = 20\\%$."
  },
  {
    "id": "k7_ma_020",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Bruttopreis enthält 19 % Mehrwertsteuer u. beträgt 119 €. Wie viel Euro beträgt die reine Steuer?",
    "answers": [
      "Steuerbetrag: 22,61 €",
      "Steuerbetrag: 19,00 €",
      "Steuerbetrag: 15,00 €",
      "Steuerbetrag: 20,00 €"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Brutto entspricht 119 % ($1{,}19$). Nettowert $= 119 / 1{,}19 = 100\\text{ €}$. Steuer $= 19\\text{ €}$."
  },
  {
    "id": "k7_ma_021",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was beschreibt ein Promillewert (Symbol $\\text{‰}$) mathematisch?",
    "answers": [
      "Zwei von Tausend (2/1000)",
      "Eins von Zehn (1/10)",
      "Eins von Tausend (1/1000)",
      "Eins von Hundert (1/100)"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Promille bedeutet 'pro tausend' ($1\\text{‰} = 1 / 1000 = 0{,}001$)."
  },
  {
    "id": "k7_ma_022",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie viel Euro sind 3 ‰ von einer Gesamtsumme von 50.000 €?",
    "answers": [
      "Promillewert: 1.500,00 €",
      "Promillewert: 50,00 €",
      "Promillewert: 150,00 €",
      "Promillewert: 15,00 €"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$50.000 \\cdot (3 / 1000) = 50.000 \\cdot 0{,}003 = 150\\text{ €}$."
  },
  {
    "id": "k7_ma_023",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Händler gewährt bei Barzahlung 2 % Skonto auf eine Rechnung von 450 €. Wie viel zahlt der Kunde?",
    "answers": [
      "Zahlbetrag: 448,00 €",
      "Zahlbetrag: 440,00 €",
      "Zahlbetrag: 441,00 €",
      "Zahlbetrag: 432,00 €"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Skonto $= 450 \\cdot 0{,}02 = 9\\text{ €}$. Zahlbetrag $= 450 - 9 = 441\\text{ €}$."
  },
  {
    "id": "k7_ma_024",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie lautet die umgestellte Formel zur Berechnung des Grundwerts $G$, wenn $W$ u. $p\\%$ bekannt sind?",
    "answers": [
      "Formel: G = p * 100 / W",
      "Formel: G = W / (100 * p)",
      "Formel: G = W * 100 / p",
      "Formel: G = W * p / 100"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aus $W = G \\cdot (p / 100)$ folgt durch Umstellung $G = (W \\cdot 100) / p$."
  },
  {
    "id": "k7_ma_025",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Auf einem Konto liegen 10.000 € Guthaben. Der Überziehungszins (Dispo) beträgt 9 % pro Jahr. Wie viel Zinsen kosten 30 Tage?",
    "answers": [
      "Dispozinsen: 900,00 €",
      "Dispozinsen: 90,00 €",
      "Dispozinsen: 75,00 €",
      "Dispozinsen: 150,00 €"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Jahreszins $= 10.000 \\cdot 0{,}09 = 900\\text{ €}$. Für 30 Tage: $900 \\cdot (30 / 360) = 75\\text{ €}$."
  },

  // --- ZUORDNUNGEN, DREISATZ & PROPORTIONALITÄT (026 - 050) ---
  {
    "id": "k7_ma_026",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was kennzeichnet eine proportionale Zuordnung mathematisch?",
    "answers": [
      "Verdopplung X -> Halb Y",
      "Summe X u. Y ist konstant",
      "Verdopplung X -> Doppel Y",
      "Differenz X u. Y konstant"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei proportionalen Zuordnungen führt das Verdoppeln/Verdreifachen des Ausgangswerts zum Verdoppeln/Verdreifachen des Zuordnungswerts."
  },
  {
    "id": "k7_ma_027",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was kennzeichnet eine antiproportionale (umgekehrt proportionale) Zuordnung?",
    "answers": [
      "Produkt X * Y sinkt konstant",
      "Quotient Y / X ist konstant",
      "Verdopplung X -> Halb Y",
      "Verdopplung X -> Doppel Y"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei antiproportionalen Zuordnungen führt das Verdoppeln des Ausgangswerts zur Halbierung des zugeordneten Werts."
  },
  {
    "id": "k7_ma_028",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welche rechnerische Eigenschaft besitzen alle Wertepaare $(x, y)$ einer proportionalen Zuordnung?",
    "answers": [
      "Summe x + y ist konstant",
      "Produkt x * y ist konstant",
      "Quotient y / x konstant",
      "Differenz y - x konstant"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Proportionale Zuordnungen sind quotientengleich ($y / x = k$ = Proportionalitätsfaktor)."
  },
  {
    "id": "k7_ma_029",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welche rechnerische Eigenschaft besitzen alle Wertepaare $(x, y)$ einer antiproportionalen Zuordnung?",
    "answers": [
      "Summe x + y ist konstant",
      "Produkt x * y konstant",
      "Quotient y / x ist konstant",
      "Differenz x - y konstant"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Antiproportionale Zuordnungen sind produktgleich ($x \\cdot y = c$ = Gesamtgröße)."
  },
  {
    "id": "k7_ma_030",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie verläuft der Graph einer proportionalen Zuordnung im Koordinatensystem?",
    "answers": [
      "Fallende Gerade ohne Ursprung",
      "Hyperbel im Quadranten",
      "Waagerechte X-Parallele",
      "Ursprungsgerade durch O"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Graph einer proportionalen Zuordnung ist eine Gerade, die durch den Koordinatenursprung $(0|0)$ verläuft."
  },
  {
    "id": "k7_ma_031",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie sieht der Graph einer antiproportionalen Zuordnung im Koordinatensystem aus?",
    "answers": [
      "Gekrümmte Hyperbel",
      "Steile Ursprungsgerade",
      "Waagerechte Gerade",
      "Senkrechte Gerade"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Graph einer antiproportionalen Zuordnung bildet eine stetig fallende Kurve, eine Hyperbel."
  },
  {
    "id": "k7_ma_032",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "5 kg Äpfel kosten 12,50 €. Wie viel Euro kosten 8 kg derselben Äpfel?",
    "answers": [
      "Kosten betragen: 22,50 €",
      "Kosten betragen: 20,00 €",
      "Kosten betragen: 18,00 €",
      "Kosten betragen: 16,00 €"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Dreisatz proportional: $1\\text{ kg} = 12{,}50 / 5 = 2{,}50\\text{ €}$. Für $8\\text{ kg}: 8 \\cdot 2{,}50 = 20{,}00\\text{ €}$."
  },
  {
    "id": "k7_ma_033",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "4 Arbeiter benötigen für eine Aufgabe 6 Stunden. Wie viele Stunden brauchen 3 Arbeiter bei gleicher Leistung?",
    "answers": [
      "Zeitbedarf: 9 Stunden",
      "Zeitbedarf: 7 Stunden",
      "Zeitbedarf: 4,5 Stunden",
      "Zeitbedarf: 8 Stunden"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Dreisatz antiproportional: Gesamtaufwand $= 4 \\cdot 6 = 24$ Arbeiterstunden. Für 3 Arbeiter: $24 / 3 = 8\\text{ Stunden}$."
  },
  {
    "id": "k7_ma_034",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Lkw fährt mit $60\\text{ km/h}$ u. benötigt 4 Stunden. Wie schnell muss er fahren, um die Strecke in 3 Stunden zu schaffen?",
    "answers": [
      "Geschwindigkeit: 80 km/h",
      "Geschwindigkeit: 70 km/h",
      "Geschwindigkeit: 75 km/h",
      "Geschwindigkeit: 90 km/h"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Strecke $= 60 \\cdot 4 = 240\\text{ km}$. Für 3 Stunden Dauer: $v = 240 / 3 = 80\\text{ km/h}$."
  },
  {
    "id": "k7_ma_035",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie lautet die allgemeine Funktionsgleichung einer proportionalen Zuordnung mit der Steigung $m$?",
    "answers": [
      "Gleichung: y = m / x",
      "Gleichung: y = x^m",
      "Gleichung: y = m * x",
      "Gleichung: y = m + x"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine proportionale Zuordnung hat stets die Form $y = m \\cdot x$ ohne Achsenabschnitt."
  },
  {
    "id": "k7_ma_036",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie lautet die allgemeine Funktionsgleichung einer antiproportionalen Zuordnung mit der Konstanten $c$?",
    "answers": [
      "Gleichung: y = c * x",
      "Gleichung: y = x / c",
      "Gleichung: y = c / x",
      "Gleichung: y = c - x"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aus der Produktgleichheit $x \\cdot y = c$ folgt umgestellt $y = c / x$."
  },
  {
    "id": "k7_ma_037",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welche Zuordnung liegt vor: 'Geschwindigkeit eines Autos zu dessen Bremsweg'?",
    "answers": [
      "Antiproportionale Zuordnung",
      "Weder prop. noch antiprop.",
      "Konstante Zuordnung stets",
      "Rein proportionale Zuord."
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Bremsweg wächst quadratisch mit der Geschwindigkeit ($s \\sim v^2$), ist also weder proportional noch antiproportional."
  },
  {
    "id": "k7_ma_038",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welche Zuordnung liegt vor: 'Anzahl gleicher Maschinen zur benötigten Produktionszeit'?",
    "answers": [
      "Quadratische Zuordnung",
      "Antiproportionale Z.",
      "Proportionale Zuordnung",
      "Lineare Zuordnung mit b"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Doppelt so viele Maschinen benötigen bei gleicher Gesamtmenge nur die halbe Produktionszeit."
  },
  {
    "id": "k7_ma_039",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Aus einem Rohr fließen pro Minute 15 Liter Wasser. Nach wie vielen Minuten ist ein 450-Liter-Becken voll?",
    "answers": [
      "Dauer: 35 Minuten",
      "Dauer: 30 Minuten",
      "Dauer: 40 Minuten",
      "Dauer: 25 Minuten"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Proportionale Zuordnung: $t = 450 / 15 = 30\\text{ Minuten}$."
  },
  {
    "id": "k7_ma_040",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Futtervorrat reicht für 12 Kühe exakt 20 Tage. Wie lange reicht derselbe Vorrat für 15 Kühe?",
    "answers": [
      "Dauer: 25 Tage",
      "Dauer: 16 Tage",
      "Dauer: 18 Tage",
      "Dauer: 15 Tage"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gesamtration $= 12 \\cdot 20 = 240$ Tagesrationen. Für 15 Kühe: $240 / 15 = 16\\text{ Tage}$."
  },
  {
    "id": "k7_ma_041",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Der Proportionalitätsfaktor einer Zuordnung $y = m \\cdot x$ beträgt $m = 3{,}5$. Welcher Wert $y$ gehört zu $x = 6$?",
    "answers": [
      "Wert y beträgt: 21",
      "Wert y beträgt: 18",
      "Wert y beträgt: 24",
      "Wert y beträgt: 20"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$y = 3{,}5 \\cdot 6 = 21$."
  },
  {
    "id": "k7_ma_042",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Gegeben ist die antiproportionale Zuordnung $y = 48 / x$. Welcher Wert $x$ gehört zu $y = 12$?",
    "answers": [
      "Wert x beträgt: 4",
      "Wert x beträgt: 6",
      "Wert x beträgt: 3",
      "Wert x beträgt: 8"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$12 = 48 / x \\implies x = 48 / 12 = 4$."
  },
  {
    "id": "k7_ma_043",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was versteht man unter dem Maßstab $1 : 25.000$ auf einer Landkarte?",
    "answers": [
      "1 cm Karte = 2,5 km Natur",
      "1 cm Karte = 25 m Natur",
      "1 cm Karte = 250 km Natur",
      "1 cm Karte = 250 m Natur"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$1\\text{ cm} = 25.000\\text{ cm} = 250\\text{ m}$ in der Realität."
  },
  {
    "id": "k7_ma_044",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Eine Strecke misst auf einer Karte im Maßstab $1 : 50.000$ genau $6\\text{ cm}$. Wie lang ist sie in der Natur?",
    "answers": [
      "Länge in Natur: 30 km",
      "Länge in Natur: 15 km",
      "Länge in Natur: 3 km",
      "Länge in Natur: 300 m"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$6\\text{ cm} \\cdot 50.000 = 300.000\\text{ cm} = 3.000\\text{ m} = 3\\text{ km}$."
  },
  {
    "id": "k7_ma_045",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "3 Bagger heben eine Baugrube in 10 Stunden aus. Wie lange brauchen 5 Bagger gleicher Leistung?",
    "answers": [
      "Zeitbedarf: 16 Stunden",
      "Zeitbedarf: 4 Stunden",
      "Zeitbedarf: 6 Stunden",
      "Zeitbedarf: 8 Stunden"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Antiproportional: Gesamtstunden $= 3 \\cdot 10 = 30$. Für 5 Bagger: $30 / 5 = 6\\text{ Stunden}$."
  },
  {
    "id": "k7_ma_046",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Für $250\\text{ g}$ Käse zahlt man 3,75 €. Wie viel kosten $400\\text{ g}$ desselben Käses?",
    "answers": [
      "Preis beträgt: 5,50 €",
      "Preis beträgt: 5,00 €",
      "Preis beträgt: 6,00 €",
      "Preis beträgt: 6,25 €"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$100\\text{ g} = 3{,}75 / 2{,}5 = 1{,}50\\text{ €}$. Für $400\\text{ g}: 4 \\cdot 1{,}50 = 6{,}00\\text{ €}$."
  },
  {
    "id": "k7_ma_047",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was beschreibt der Begriff 'Quotientengleichheit' bei Tabellenwerten $(x, y)$?",
    "answers": [
      "y - x für alle gleich",
      "x + y für alle gleich",
      "y / x für alle gleich",
      "x * y für alle gleich"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Liefert die Division $y / x$ für jedes Wertepaar denselben Wert $k$, ist die Zuordnung proportional."
  },
  {
    "id": "k7_ma_048",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was beschreibt der Begriff 'Produktgleichheit' bei Tabellenwerten $(x, y)$?",
    "answers": [
      "x * y für alle gleich",
      "x - y für alle gleich",
      "y / x für alle gleich",
      "x + y für alle gleich"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Liefert die Multiplikation $x \\cdot y$ für jedes Wertepaar das gleiche Produkt $c$, liegt Antiproportionalität vor."
  },
  {
    "id": "k7_ma_049",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie ändert sich der Flächeninhalt eines Quadrat, wenn man die Seitenlänge $a$ verdoppelt?",
    "answers": [
      "Verdreifachung Fläche",
      "Vierfachung der Fläche",
      "Verdopplung der Fläche",
      "Achtfachung der Fläche"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$A = a^2$. Bei $2a$ wird der Flächeninhalt $A' = (2a)^2 = 4a^2$ (Vervierfachung)."
  },
  {
    "id": "k7_ma_050",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Beim dreifachen Dreisatz arbeiten 4 Arbeiter an 5 Tagen je 8 Stunden. Was berechnet das Produkt $4 \\cdot 5 \\cdot 8$?",
    "answers": [
      "Anzahl der Pausen",
      "Leistung pro Minute",
      "Gesamte Arbeitsstunden",
      "Stundenlohn der Arbeiter"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Produkt ergibt die insgesamt aufgewendeten Personenstunden ($160$ Arbeitsstunden)."
  },

  // --- TERME, GLEICHUNGEN & UMFORMUNGEN (051 - 075) ---
  {
    "id": "k7_ma_051",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Vereinfache den Term $3x + 5y - 7x + 2y$ so weit wie möglich.",
    "answers": [
      "Term lautet: 4x + 7y",
      "Term lautet: -4x - 7y",
      "Term lautet: -4x + 7y",
      "Term lautet: 10x - 3y"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gleichartige Glieder zusammenfassen: $(3x - 7x) + (5y + 2y) = -4x + 7y$."
  },
  {
    "id": "k7_ma_052",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Multipliziere das Produkt u. vereinfache den Term: $4 \\cdot (2a - 3b)$.",
    "answers": [
      "Ergebnis: 8a - 3b",
      "Ergebnis: 6a - 7b",
      "Ergebnis: 8a + 12b",
      "Ergebnis: 8a - 12b"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Distributivgesetz anwenden: $4 \\cdot 2a - 4 \\cdot 3b = 8a - 12b$."
  },
  {
    "id": "k7_ma_053",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Klammere den größtmöglichen gemeinsamen Faktor im Term $12x + 18y$ aus.",
    "answers": [
      "Ausgeklammert: 6(2x + 3y)",
      "Ausgeklammert: 3(4x + 6y)",
      "Ausgeklammert: 2(6x + 9y)",
      "Ausgeklammert: 12(x + 1,5y)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der ggT von 12 u. 18 ist 6. Also $12x + 18y = 6 \\cdot (2x + 3y)$."
  },
  {
    "id": "k7_ma_054",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Multipliziere die beiden Klammerausdrücke aus: $(x + 3) \\cdot (y - 4)$.",
    "answers": [
      "Ergebnis: xy - 4x - 12",
      "Ergebnis: xy + 4x - 3y - 12",
      "Ergebnis: xy - 4x + 3y - 12",
      "Ergebnis: xy + 3y - 12"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Jedes Glied der ersten Klammer mit jedem der zweiten multiplizieren: $x \\cdot y - 4x + 3y - 12$."
  },
  {
    "id": "k7_ma_055",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Löse die lineare Gleichung nach $x$ auf: $5x - 8 = 22$.",
    "answers": [
      "Lösung: x = 4",
      "Lösung: x = 6",
      "Lösung: x = 7",
      "Lösung: x = 5"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$5x - 8 = 22 \\implies 5x = 30 \\implies x = 6$."
  },
  {
    "id": "k7_ma_056",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Löse die lineare Gleichung nach $x$ auf: $3x + 14 = 7x - 6$.",
    "answers": [
      "Lösung: x = 6",
      "Lösung: x = 4",
      "Lösung: x = 5",
      "Lösung: x = 2"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$3x + 14 = 7x - 6 \\implies 20 = 4x \\implies x = 5$."
  },
  {
    "id": "k7_ma_057",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Löse die Gleichung mit Klammerausdruck: $2 \\cdot (3x - 4) = 16$.",
    "answers": [
      "Lösung: x = 6",
      "Lösung: x = 5",
      "Lösung: x = 4",
      "Lösung: x = 3"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$6x - 8 = 16 \\implies 6x = 24 \\implies x = 4$."
  },
  {
    "id": "k7_ma_058",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was versteht man unter einer Äquivalenzumformung einer Gleichung?",
    "answers": [
      "Änderung des Endergebnisses",
      "Einsetzen einer Zahl ein",
      "Umformung gleicher Lösung",
      "Reine Vereinfachung oben"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Äquivalenzumformung verändert die Lösungsmenge einer Gleichung mathematisch nicht."
  },
  {
    "id": "k7_ma_059",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welche der folgenden Operationen ist KEINE allgemeine Äquivalenzumformung?",
    "answers": [
      "Subtraktion des Terms",
      "Addition einer Zahl",
      "Multiplikation mit 0",
      "Division durch 4"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Multiplikation einer Gleichung mit $0$ vernichtet Informationen u. ist keine Äquivalenzumformung."
  },
  {
    "id": "k7_ma_060",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Löse die Bruchgleichung nach $x$ auf: $x / 4 = 9 / 12$.",
    "answers": [
      "Lösung: x = 2",
      "Lösung: x = 4",
      "Lösung: x = 6",
      "Lösung: x = 3"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$x / 4 = 3 / 4 \\implies x = 3$."
  },
  {
    "id": "k7_ma_061",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Die Summe aus einer Zahl $x$ u. ihrem Dreifachen beträgt 48. Wie lautet die Zahl?",
    "answers": [
      "Zahl beträgt: 14",
      "Zahl beträgt: 10",
      "Zahl beträgt: 16",
      "Zahl beträgt: 12"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gleichung: $x + 3x = 48 \\implies 4x = 48 \\implies x = 12$."
  },
  {
    "id": "k7_ma_062",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Vater ist 3-mal so alt wie sein Sohn. Zusammen sind sie 52 Jahre alt. Wie alt ist der Sohn?",
    "answers": [
      "Alter Sohn: 13 Jahre",
      "Alter Sohn: 15 Jahre",
      "Alter Sohn: 14 Jahre",
      "Alter Sohn: 12 Jahre"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gleichung: $x + 3x = 52 \\implies 4x = 52 \\implies x = 13$ Jahre."
  },
  {
    "id": "k7_ma_063",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Vereinfache das Produkt zweier Terme: $(-3a) \\cdot (-4b)$.",
    "answers": [
      "Produkt: -12ab",
      "Produkt: 7ab",
      "Produkt: -7ab",
      "Produkt: 12ab"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Minus mal Minus ergibt Plus: $(-3) \\cdot (-4) \\cdot a \\cdot b = 12ab$."
  },
  {
    "id": "k7_ma_064",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Löse die Minusklammer korrekt auf: $15 - (4x - 7)$.",
    "answers": [
      "Ergebnis: 22 + 4x",
      "Ergebnis: 22 - 4x",
      "Ergebnis: 15 - 4x - 7",
      "Ergebnis: 8 - 4x"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Minuszeichen vor der Klammer dreht alle Vorzeichen in der Klammer um: $15 - 4x + 7 = 22 - 4x$."
  },
  {
    "id": "k7_ma_065",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne den Wert des Terms $T(a, b) = 2a^2 - 3b$ für $a = 3$ u. $b = 4$.",
    "answers": [
      "Wert des Terms: 6",
      "Wert des Terms: 24",
      "Wert des Terms: 12",
      "Wert des Terms: 18"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$T(3, 4) = 2 \\cdot (3^2) - 3 \\cdot 4 = 2 \\cdot 9 - 12 = 18 - 12 = 6$."
  },
  {
    "id": "k7_ma_066",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Löse die Gleichung $4x + 7 = 4x + 12$. Wie viele Lösungen existieren in der Grundmenge?",
    "answers": [
      "Exakt Null Lösungen",
      "Exakt eine Lösung x=5",
      "Unendlich viele Lös.",
      "Exakt zwei Lösungen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$4x + 7 = 4x + 12 \\implies 7 = 12$ (falsche Aussage), daher gibt es keine Lösung ($L = \\emptyset$)."
  },
  {
    "id": "k7_ma_067",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Löse die Gleichung $2 \\cdot (x + 3) = 2x + 6$. Wie viele Lösungen existieren?",
    "answers": [
      "Exakt Null Lösungen",
      "Exakt eine Lösung x=6",
      "Exakt eine Lösung x=0",
      "Unendlich viele Lös."
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$2x + 6 = 2x + 6 \\implies 0 = 0$ (allgemeingültige Aussage), also sind alle reellen Zahlen Lösung."
  },
  {
    "id": "k7_ma_068",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Dividiere den Term durch den Faktor: $(15x - 25y) / 5$.",
    "answers": [
      "Ergebnis: 3x - 25y",
      "Ergebnis: 3x - 5y",
      "Ergebnis: 5x - 3y",
      "Ergebnis: 15x - 5y"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Jedes Glied durch 5 dividieren: $(15x / 5) - (25y / 5) = 3x - 5y$."
  },
  {
    "id": "k7_ma_069",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Forme die Ungleichung um: $2x + 5 < 13$. Welche Lösungsmenge gilt für natürliche Zahlen $\\mathbb{N} = \\{1, 2, 3...\\}$?",
    "answers": [
      "Lösungsmenge: {1, 2, 3, 4}",
      "Lösungsmenge: {1, 2, 3}",
      "Lösungsmenge: {1, 2}",
      "Lösungsmenge: {0, 1, 2, 3}"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$2x < 8 \\implies x < 4$. In $\\mathbb{N}$ ohne 0 sind das die Zahlen $\{1, 2, 3\}$."
  },
  {
    "id": "k7_ma_070",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was passiert mit dem Vergleichszeichen einer Ungleichung bei Multiplikation mit einer negativen Zahl?",
    "answers": [
      "Zeichen bleibt gleich",
      "Ungleichung entfällt",
      "Zeichen dreht sich um",
      "Zeichen wird zu ="
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei Multiplikation oder Division mit einer negativen Zahl kehrt sich das Inequationszeichen um ($<$ wird zu $>$)."
  },
  {
    "id": "k7_ma_071",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Rechteck hat den Umfang $U = 36\\text{ cm}$. Die Länge $a$ ist doppelt so lang wie die Breite $b$. Wie lang ist $b$?",
    "answers": [
      "Breite b beträgt: 8 cm",
      "Breite b beträgt: 4 cm",
      "Breite b beträgt: 6 cm",
      "Breite b beträgt: 12 cm"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$U = 2a + 2b = 2(2b) + 2b = 6b = 36\\text{ cm} \\implies b = 6\\text{ cm}$."
  },
  {
    "id": "k7_ma_072",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Vereinfache die Potenzrechnung im Term $x^3 \\cdot x^4$ zu einer einzigen Potenz.",
    "answers": [
      "Potenz lautet: 2x^7",
      "Potenz lautet: x^12",
      "Potenz lautet: x^7",
      "Potenz lautet: x^1"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei gleicher Basis werden die Exponenten addiert: $x^3 \\cdot x^4 = x^{3+4} = x^7$."
  },
  {
    "id": "k7_ma_073",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Vereinfache den Quotienten von Potenzen: $y^8 / y^5$.",
    "answers": [
      "Potenz lautet: y^13",
      "Potenz lautet: y^3",
      "Potenz lautet: y^1,6",
      "Potenz lautet: y^40"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei gleicher Basis werden die Exponenten subtrahiert: $y^8 / y^5 = y^{8-5} = y^3$."
  },
  {
    "id": "k7_ma_074",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Löse den Doppelklammerausdruck auf: $(2x + 1) \\cdot (x + 4)$.",
    "answers": [
      "Ergebnis: 2x² + 4x + 4",
      "Ergebnis: 2x² + 9x + 4",
      "Ergebnis: 2x² + 8x + 4",
      "Ergebnis: 2x² + 9x + 5"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$2x \\cdot x + 2x \\cdot 4 + 1 \\cdot x + 1 \\cdot 4 = 2x^2 + 8x + x + 4 = 2x^2 + 9x + 4$."
  },
  {
    "id": "k7_ma_075",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Forme die Formel zur Flächeninhaltsberechnung des Trapezes $A = ((a + c) / 2) \\cdot h$ nach der Höhe $h$ um.",
    "answers": [
      "Formel: h = 2A / (a + c)",
      "Formel: h = 2A * (a + c)",
      "Formel: h = A / (2(a + c))",
      "Formel: h = A * (a + c) / 2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beide Seiten mit 2 multiplizieren u. durch $(a + c)$ dividieren: $h = 2A / (a + c)$."
  },

  // --- GEOMETRIE & STOCHASTIK (076 - 100) ---
  {
    "id": "k7_ma_076",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie groß ist die Innenwinkelsumme in jedem beliebigen ebenen Dreieck?",
    "answers": [
      "Winkelsumme: 360 Grad",
      "Winkelsumme: 180 Grad",
      "Winkelsumme: 90 Grad",
      "Winkelsumme: 270 Grad"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Summe der drei Innenwinkel $\\alpha + \\beta + \\gamma$ im Dreieck beträgt stets exakt 180°."
  },
  {
    "id": "k7_ma_077",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie groß ist die Innenwinkelsumme in jedem konvexen Viereck?",
    "answers": [
      "Winkelsumme: 720 Grad",
      "Winkelsumme: 540 Grad",
      "Winkelsumme: 360 Grad",
      "Winkelsumme: 180 Grad"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Jedes Viereck lässt sich in zwei Dreiecke zerlegen ($2 \\cdot 180^\\circ = 360^\\circ$)."
  },
  {
    "id": "k7_ma_078",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "In einem Dreieck sind zwei Winkel mit $\\alpha = 55^\\circ$ u. $\\beta = 65^\\circ$ bekannt. Wie groß ist Winkel $\\gamma$?",
    "answers": [
      "Winkel gamma: 65 Grad",
      "Winkel gamma: 60 Grad",
      "Winkel gamma: 70 Grad",
      "Winkel gamma: 50 Grad"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\gamma = 180^\\circ - 55^\\circ - 65^\\circ = 180^\\circ - 120^\\circ = 60^\\circ$."
  },
  {
    "id": "k7_ma_079",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was zeichnet ein gleichschenkliges Dreieck mathematisch aus?",
    "answers": [
      "Alle drei Winkel verschieden",
      "Ein Rechter Winkel von 90°",
      "Drei gleich lange Seiten",
      "Zwei gleiche Seiten/Winkel"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein gleichschenkliges Dreieck besitzt zwei gleich lange Schenkel u. zwei gleich große Basiswinkel."
  },
  {
    "id": "k7_ma_080",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie groß ist jeder einzelne Innenwinkel in einem gleichseitigen Dreieck?",
    "answers": [
      "Winkel beträgt: 90 Grad",
      "Winkel beträgt: 30 Grad",
      "Winkel beträgt: 60 Grad",
      "Winkel beträgt: 45 Grad"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Alle 3 Winkel sind gleich groß: $180^\\circ / 3 = 60^\\circ$."
  },
  {
    "id": "k7_ma_081",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie nennt man zwei Winkel, die sich zu exakt $180^\\circ$ ergänzen?",
    "answers": [
      "Die Stufenwinkel",
      "Die Scheitelwinkel",
      "Die Nebenwinkel",
      "Die Wechselwinkel"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nebenwinkel liegen an einer Geraden u. ergänzen sich zu einer gestreckten Lage von $180^\\circ$."
  },
  {
    "id": "k7_ma_082",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welche Eigenschaft besitzen Scheitelwinkel an zwei sich schneidenden Geraden?",
    "answers": [
      "Ergänzen sich zu 90°",
      "Ergänzen sich zu 180°",
      "Sind stets stumpfe Winkel",
      "Überall exakt gleich groß"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Scheitelwinkel liegen sich gegenüber u. sind immer exakt gleich groß."
  },
  {
    "id": "k7_ma_083",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was besagt der Kongruenzsatz SSS für die Eindeutigkeit der Dreieckskonstruktion?",
    "answers": [
      "Ein Seite zwei Winkel",
      "Drei Winkel gegeben",
      "Drei Seiten gegeben",
      "Zwei Seiten ein Winkel"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Dreieck ist eindeutig konstruierbar, wenn die Längen aller 3 Seiten gegeben sind."
  },
  {
    "id": "k7_ma_084",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was besagt der Kongruenzsatz SWS für Dreiecke?",
    "answers": [
      "Zwei Winkel / Z-Seite",
      "Zwei Seiten / Z-Winkel",
      "Drei gleiche Seiten",
      "Seite u. zwei An-Winkel"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zwei Seiten u. der von ihnen eingeschlossene Winkel bestimmen das Dreieck eindeutig."
  },
  {
    "id": "k7_ma_085",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was besagt die Dreiecksungleichung bezüglich der Seitenlängen $a, b, c$?",
    "answers": [
      "Produkt zweier = Dritte",
      "Summe zweier > Dritte",
      "Differenz zweier = 0",
      "Summe zweier < Dritte"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In jedem Dreieck ist die Summe der Längen zweier beliebiger Seiten stets größer als die dritte Seite."
  },
  {
    "id": "k7_ma_086",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was bezeichnet man als die 'Mittelsenkrechte' einer Strecke $[AB]$?",
    "answers": [
      "Verbindung Mitte zu C",
      "Parallele durch Punkt A",
      "Winkelhalbierende im Ort",
      "Senkrechte in der Mitte"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Mittelsenkrechte steht senkrecht auf der Strecke u. teilt sie in zwei gleich lange Abschnitte."
  },
  {
    "id": "k7_ma_087",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welche Eigenschaft besitzt der Schnittpunkt der drei Mittelsenkrechten im Dreieck?",
    "answers": [
      "Schwerpunkt des Dreiecks",
      "Höhenschnittpunkt H",
      "Mittelpunkt des Inkreises",
      "Mittelpunkt des Umkreises"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Schnittpunkt der Mittelsenkrechten hat zu allen drei Eckpunkten den gleichen Abstand (Umkreismittelpunkt)."
  },
  {
    "id": "k7_ma_088",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welche Eigenschaft besitzt der Schnittpunkt der drei Winkelhalbierenden im Dreieck?",
    "answers": [
      "Schwerpunkt des Dreiecks",
      "Höhenschnittpunkt H",
      "Mittelpunkt des Inkreises",
      "Mittelpunkt des Umkreises"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Schnittpunkt der Winkelhalbierenden ist von allen drei Dreiecksseiten gleich weit entfernt (Inkreismittelpunkt)."
  },
  {
    "id": "k7_ma_089",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie berechnet man den Flächeninhalt $A$ eines beliebigen Dreiecks?",
    "answers": [
      "Formel: A = (g * h) / 2",
      "Formel: A = (g + h) / 2",
      "Formel: A = g^2 / 2",
      "Formel: A = g * h"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Flächeninhalt Dreieck $= 0{,}5 \\cdot \\text{Grundseite} \\cdot \\text{Zugehörige Höhe}$."
  },
  {
    "id": "k7_ma_090",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Dreieck hat eine Grundseite von $g = 8\\text{ cm}$ u. die Höhe $h = 5\\text{ cm}$. Wie groß ist der Flächeninhalt?",
    "answers": [
      "Fläche beträgt: 20 cm²",
      "Fläche beträgt: 13 cm²",
      "Fläche beträgt: 40 cm²",
      "Fläche beträgt: 26 cm²"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$A = (8 \\cdot 5) / 2 = 40 / 2 = 20\\text{ cm}^2$."
  },
  {
    "id": "k7_ma_091",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie berechnet man den Flächeninhalt $A$ eines Parallelogramms?",
    "answers": [
      "Formel: A = a + ha",
      "Formel: A = 2a * ha",
      "Formel: A = a * ha",
      "Formel: A = (a * ha) / 2"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Parallelogrammfläche $=$ Grundseite mal zugehörige Höhe ($A = a \\cdot h_a$)."
  },
  {
    "id": "k7_ma_092",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie lautet die Formel für den Flächeninhalt $A$ eines Trapezes mit den parallelen Seiten $a$ u. $c$?",
    "answers": [
      "Formel: A = ((a + c) / 2) * h",
      "Formel: A = ((a * c) / 2) * h",
      "Formel: A = ((a - c) / 2) * h",
      "Formel: A = (a + c) * h"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Trapezfläche $=$ Arithmetisches Mittel der Parallelen mal Höhe ($A = m \\cdot h = ((a + c) / 2) \\cdot h$)."
  },
  {
    "id": "k7_ma_093",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie lautet die Formel für den Flächeninhalt $A$ eines Drachenvierecks mit den Diagonalen $e$ u. $f$?",
    "answers": [
      "Formel: A = (e * f) / 2",
      "Formel: A = e * f",
      "Formel: A = 2 * e * f",
      "Formel: A = (e + f) / 2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Drachen stehen die Diagonalen senkrecht aufeinander; $A = 0{,}5 \\cdot e \\cdot f$."
  },
  {
    "id": "k7_ma_094",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was bezeichnet man in der Stochastik als ein 'Laplace-Experiment'?",
    "answers": [
      "Unendlich viele Ergebnisse",
      "Nur zwei Ergebnisse ja/nein",
      "Ergebnisse unterschiedlich",
      "Alle Ergebnisse gleich"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Laplace-Experiment ist ein Zufallsexperiment, bei dem alle möglichen Ergebnisse die gleiche Wahrscheinlichkeit besitzen."
  },
  {
    "id": "k7_ma_095",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie berechnet man die Laplace-Wahrscheinlichkeit $P(E)$ für ein Ereignis $E$?",
    "answers": [
      "P = Mögliche / Günstige",
      "P = Günstige - Mögliche",
      "P = Günstige * Mögliche",
      "P = Günstige / Mögliche"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$P(E) = \\frac{\\text{Anzahl der günstigen Ergebnisse}}{\\text{Anzahl aller möglichen Ergebnisse}}$."
  },
  {
    "id": "k7_ma_096",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie groß ist die Wahrscheinlichkeit, mit einem fairen 6-seitigen Würfel eine Zahl größer als 4 zu würfeln?",
    "answers": [
      "Wahrscheinlichk.: 1 / 6",
      "Wahrscheinlichk.: 1 / 2",
      "Wahrscheinlichk.: 1 / 3",
      "Wahrscheinlichk.: 2 / 3"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Günstig sind $\{5, 6\}$ (2 Ergebnisse). Mögliche sind 6. $P = 2 / 6 = 1 / 3$."
  },
  {
    "id": "k7_ma_097",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "In einer Urne liegen 3 rote u. 7 blaue Kugeln. Wie groß ist die Wahrscheinlichkeit, eine rote Kugel zu ziehen?",
    "answers": [
      "Wahrscheinlichk.: 30 %",
      "Wahrscheinlichk.: 33 %",
      "Wahrscheinlichk.: 40 %",
      "Wahrscheinlichk.: 70 %"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$P(\\text{rot}) = 3 / (3 + 7) = 3 / 10 = 0{,}30 = 30\\%$."
  },
  {
    "id": "k7_ma_098",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was besagt die Pfadmultiplikationsregel für mehrstufige Zufallsexperimente entlang eines Pfades im Baumdiagramm?",
    "answers": [
      "Wahrscheinlichk. subtrahieren",
      "Wahrscheinlichk. addieren",
      "Wahrscheinlichk. dividieren",
      "Wahrscheinlichk. multipliz."
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Wahrscheinlichkeit eines Ergebnispfades ist gleich dem Produkt der Wahrscheinlichkeiten entlang dieses Pfades."
  },
  {
    "id": "k7_ma_099",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was besagt die Pfadadditionsregel im Baumdiagramm für ein Ereignis, das aus mehreren Pfaden besteht?",
    "answers": [
      "Pfade werden addiert",
      "Pfade werden multipliziert",
      "Pfade heben sich auf",
      "Pfade werden dividiert"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gehören mehrere Pfade zu einem Ereignis, werden deren einzelnen Pfadwahrscheinlichkeiten addiert."
  },
  {
    "id": "k7_ma_100",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Eine Münze wird zweimal nacheinander geworfen. Wie groß ist die Wahrscheinlichkeit für das Ereignis 'zweimal Kopf'?",
    "answers": [
      "Wahrscheinlichk.: 12,5 %",
      "Wahrscheinlichk.: 25 %",
      "Wahrscheinlichk.: 75 %",
      "Wahrscheinlichk.: 50 %"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pfadregel: $P(\\text{Kopf, Kopf}) = (1/2) \\cdot (1/2) = 1/4 = 0{,}25 = 25\\%$."
  },


// ================================================================
// KLASSE 7 - MATHEMATIK (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

  // --- PROZENT- & ZINSRECHNUNG (001 - 025) ---
  {
    "id": "k7_ma_001",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie viel Euro sind 20 % von 250 Euro?",
    "answers": [
      "Ergebnis: 45 Euro",
      "Ergebnis: 50 Euro",
      "Ergebnis: 60 Euro",
      "Ergebnis: 40 Euro"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "250 * 0,20 = 50 Euro."
  },
  {
    "id": "k7_ma_002",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Gegeben sind G = 300 € u. W = 60 €. Wie viel Prozent sind das?",
    "answers": [
      "Satz beträgt: 20 %",
      "Satz beträgt: 25 %",
      "Satz beträgt: 30 %",
      "Satz beträgt: 15 %"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "p = (60 / 300) * 100 = 20 %."
  },
  {
    "id": "k7_ma_003",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Prozentwert W = 45 € entspricht p = 15 %. Wie groß ist der Grundwert G?",
    "answers": [
      "Wert beträgt: 250 €",
      "Wert beträgt: 300 €",
      "Wert beträgt: 350 €",
      "Wert beträgt: 400 €"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "G = W / p% = 45 / 0,15 = 300 €."
  },
  {
    "id": "k7_ma_004",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was beschreibt der Grundwert G in der Prozentrechnung?",
    "answers": [
      "Ausgangsmenge (100 %)",
      "Prozentualer Teilsatz",
      "Anteiliger Geldbetrag",
      "Gewinnspanne in Euro"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Grundwert G stellt das Ganze dar (100 %)."
  },
  {
    "id": "k7_ma_005",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was beschreibt der Prozentwert W in der Prozentrechnung?",
    "answers": [
      "Zinssatz pro ein Jahr",
      "Prozentualer Teilsatz",
      "Absoluter Teilbetrag",
      "Ausgangsmenge (100 %)"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Prozentwert W ist die konkrete Menge/Größe des Anteils."
  },
  {
    "id": "k7_ma_006",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was beschreibt der Prozentsatz p% in der Prozentrechnung?",
    "answers": [
      "Anteil in Hundertstel",
      "Differenz der Werte",
      "Gesamte Ausgangsmenge",
      "Absoluter Geldbetrag"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Prozentsatz p% gibt das Verhältnis bezogen auf 100 an."
  },
  {
    "id": "k7_ma_007",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie lautet die Formel zur Berechnung des Prozentwerts W?",
    "answers": [
      "Formel: W = p * 100 / G",
      "Formel: W = G * 100 / p",
      "Formel: W = G * p / 100",
      "Formel: W = G + p / 100"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "W = G * p / 100."
  },
  {
    "id": "k7_ma_008",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie lautet die Formel zur Berechnung des Grundwerts G?",
    "answers": [
      "Formel: G = W * p / 100",
      "Formel: G = p * 100 / W",
      "Formel: G = W + p * 100",
      "Formel: G = W * 100 / p"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "G = W * 100 / p."
  },
  {
    "id": "k7_ma_009",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie lautet die Formel zur Berechnung des Prozentsatzes p?",
    "answers": [
      "Formel: p = W * 100 / G",
      "Formel: p = G * 100 / W",
      "Formel: p = W * G / 100",
      "Formel: p = W / (G * 100)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "p = W * 100 / G."
  },
  {
    "id": "k7_ma_010",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Artikel kostet 80 € u. wird um 10 % reduziert. Was ist der neue Preis?",
    "answers": [
      "Neuer Preis: 70 Euro",
      "Neuer Preis: 74 Euro",
      "Neuer Preis: 72 Euro",
      "Neuer Preis: 76 Euro"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Rabatt: 8 €. Neuer Preis: 80 - 8 = 72 €."
  },
  {
    "id": "k7_ma_011",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Fahrrad kostet netto 400 €. Wie viel kostet es brutto inkl. 19 % MwSt.?",
    "answers": [
      "Neuer Preis: 496 Euro",
      "Neuer Preis: 450 Euro",
      "Neuer Preis: 476 Euro",
      "Neuer Preis: 480 Euro"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "400 * 1,19 = 476 €."
  },
  {
    "id": "k7_ma_012",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Sparguthaben 1.000 € bringt bei 2 % Zinssatz p.a. wie viel Zinsen im 1. Jahr?",
    "answers": [
      "Zinsen betragen: 15 €",
      "Zinsen betragen: 30 €",
      "Zinsen betragen: 25 €",
      "Zinsen betragen: 20 €"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Z = K * p / 100 = 1000 * 0,02 = 20 €."
  },
  {
    "id": "k7_ma_013",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wofür steht die Abkürzung 'p.a.' bei Zinssätzen?",
    "answers": [
      "Bedeutung: pro Woche",
      "Bedeutung: pro Monat",
      "Bedeutung: pro Jahr",
      "Bedeutung: pro Tagzeit"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'per annum' ist Lateinisch u. bedeutet pro Jahr."
  },
  {
    "id": "k7_ma_014",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie berechnet man Tageszinsen für t Tage (Finanzjahr: 360 Tage)?",
    "answers": [
      "Formel: Z = K * p * t / 36000",
      "Formel: Z = K * t / (p * 360)",
      "Formel: Z = K * p * 360 / t",
      "Formel: Z = K * p * t / 36500"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Z = K * (p / 100) * (t / 360) = K * p * t / 36000."
  },
  {
    "id": "k7_ma_015",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie berechnet man Monatszinsen für m Monate?",
    "answers": [
      "Formel: Z = K * p * 12 / m",
      "Formel: Z = K * p * m / 1200",
      "Formel: Z = K * m / (p * 12)",
      "Formel: Z = K * p * m / 3600"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Z = K * (p / 100) * (m / 12) = K * p * m / 1200."
  },
  {
    "id": "k7_ma_016",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie nennt man den Abzug bei schneller Barzahlung einer Rechnung?",
    "answers": [
      "Begriff: Der Rabatt",
      "Begriff: Die Kaution",
      "Begriff: Das Pfandgeld",
      "Begriff: Der Skonto"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Skonto gewähren Verkäufer als Anreiz für rasche Überweisung."
  },
  {
    "id": "k7_ma_017",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie nennt man einen Preisnachlass auf den regulären Verkaufspreis?",
    "answers": [
      "Begriff: Der Skonto",
      "Begriff: Der Rabatt",
      "Begriff: Die Gebühr",
      "Begriff: Die Zinsrate"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Rabatte verringern den Listenpreis direkt beim Kauf."
  },
  {
    "id": "k7_ma_018",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Sparguthaben 500 € zu 3 % p.a. Zinsen nach genau 6 Monaten?",
    "answers": [
      "Zinsen betragen: 6,50 €",
      "Zinsen betragen: 8,50 €",
      "Zinsen betragen: 9,00 €",
      "Zinsen betragen: 7,50 €"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Z = 500 * 0,03 * (6/12) = 15 * 0,5 = 7,50 €."
  },
  {
    "id": "k7_ma_019",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Von 50 Schülern sind 12 in einem Sportverein. Wie viel Prozent sind das?",
    "answers": [
      "Satz beträgt: 20 %",
      "Satz beträgt: 22 %",
      "Satz beträgt: 24 %",
      "Satz beträgt: 26 %"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "12 / 50 = 24 / 100 = 24 %."
  },
  {
    "id": "k7_ma_020",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Preis steigt von 200 € auf 230 €. Um wie viel Prozent stieg der Preis?",
    "answers": [
      "Anstieg beträgt: 10 %",
      "Anstieg beträgt: 15 %",
      "Anstieg beträgt: 20 %",
      "Anstieg beträgt: 12 %"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zunahme 30 €. 30 / 200 = 15 %."
  },
  {
    "id": "k7_ma_021",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie viel Euro sind 5 % von 1.200 Euro?",
    "answers": [
      "Ergebnis: 55 Euro",
      "Ergebnis: 70 Euro",
      "Ergebnis: 60 Euro",
      "Ergebnis: 50 Euro"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "1200 * 0,05 = 60 €."
  },
  {
    "id": "k7_ma_022",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welcher Bruch entspricht exakt dem Prozentwert 25 %?",
    "answers": [
      "Bruchform: 1/3 Teil",
      "Bruchform: 2/5 Teil",
      "Bruchform: 1/4 Teil",
      "Bruchform: 1/5 Teil"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "25 / 100 gekürzt ergibt 1/4."
  },
  {
    "id": "k7_ma_023",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welcher Dezimalzahl entspricht der Prozentwert 7,5 %?",
    "answers": [
      "Dezimalzahl: 0,750",
      "Dezimalzahl: 7,500",
      "Dezimalzahl: 0,075",
      "Dezimalzahl: 0,0075"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "7,5 / 100 = 0,075."
  },
  {
    "id": "k7_ma_024",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Kapital 2.000 € zu 4 % p.a. verzinst. Kontostand nach 1 Jahr inkl. Zinsen?",
    "answers": [
      "Endbetrag: 2100 Euro",
      "Endbetrag: 2060 Euro",
      "Endbetrag: 2080 Euro",
      "Endbetrag: 2040 Euro"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zinsen = 80 €. Gesamtbetrag: 2000 + 80 = 2080 €."
  },
  {
    "id": "k7_ma_025",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "40 % von einer gesuchten Zahl entsprechen 80. Wie heißt die Zahl G?",
    "answers": [
      "Wert beträgt: 160",
      "Wert beträgt: 240",
      "Wert beträgt: 200",
      "Wert beträgt: 320"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "G = 80 / 0,40 = 200."
  },

  // --- ZUORDNUNGEN, PROPORTIONALITÄT & DREISATZ (026 - 050) ---
  {
    "id": "k7_ma_026",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was zeichnet eine proportionale Zuordnung im Kern aus?",
    "answers": [
      "Verdopplung halbiert",
      "Summe bleibt konstant",
      "Verdopplung verdoppelt",
      "Produkt bleibt konstant"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Verdoppelt/Verdreifacht man x, so verdoppelt/verdreifacht sich auch y."
  },
  {
    "id": "k7_ma_027",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was zeichnet eine antiproportionale Zuordnung im Kern aus?",
    "answers": [
      "Verhältnismäßigkeit 1:1",
      "Differenz bleibt gleich",
      "Verdopplung halbiert",
      "Verdopplung verdoppelt"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Verdoppelt man x, so halbiert sich der zugehörige y-Wert."
  },
  {
    "id": "k7_ma_028",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welcher Rechenwert ist bei einer proportionalen Zuordnung konstant?",
    "answers": [
      "Die Summe aus x + y",
      "Das Produkt y * x",
      "Der Quotient y / x",
      "Die Differenz y - x"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Proportionale Zuordnungen sind quotientengleich (k = y/x)."
  },
  {
    "id": "k7_ma_029",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welcher Rechenwert ist bei einer antiproportionalen Zuordnung konstant?",
    "answers": [
      "Die Summe aus x + y",
      "Das Produkt y * x",
      "Der Quotient y / x",
      "Die Differenz y - x"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Antiproportionale Zuordnungen sind produktgleich (k = x * y)."
  },
  {
    "id": "k7_ma_030",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie verläuft der Graph einer proportionalen Zuordnung?",
    "answers": [
      "S-förmige Schlangenlinie",
      "Waagerechte Parallele",
      "Hyperbel im Quadranten",
      "Gerade durch Ursprung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Graph ist eine Ursprungsgerade durch den Punkt (0|0)."
  },
  {
    "id": "k7_ma_031",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welche Form besitzt der Graph einer antiproportionalen Zuordnung?",
    "answers": [
      "Form einer Hyperbel",
      "Gerade durch Ursprung",
      "Parallele zur Y-Achse",
      "Kreisförmige Bogenlinie"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Antiproportionale Graphen bilden eine fallende Kurve (Hyperbel)."
  },
  {
    "id": "k7_ma_032",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "3 Äpfel kosten 1,50 €. Wie viel kosten 6 Äpfel?",
    "answers": [
      "Kosten betragen: 3,50 €",
      "Kosten betragen: 3,00 €",
      "Kosten betragen: 2,50 €",
      "Kosten betragen: 4,00 €"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Doppelte Menge bedeutet doppelter Preis (3,00 €)."
  },
  {
    "id": "k7_ma_033",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "4 Bauarbeiter brauchen 6 Std. Wie lange brauchen 8 Arbeiter?",
    "answers": [
      "Dauer beträgt: 5 Std.",
      "Dauer beträgt: 2 Std.",
      "Dauer beträgt: 4 Std.",
      "Dauer beträgt: 3 Std."
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Doppelte Arbeiteranzahl halbiert die Zeit (3 Stunden)."
  },
  {
    "id": "k7_ma_034",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was bildet die Zwischenstufe im Dreisatz bei proportionalen Rechenaufgaben?",
    "answers": [
      "Berechnung über 1 Einzg",
      "Berechnung über 100 E.",
      "Berechnung über Produkt",
      "Berechnung über Summe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Dreisatz rechnet meist über den Wert 1 als Zwischenschritt."
  },
  {
    "id": "k7_ma_035",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "5 Schulhefte kosten 7,50 €. Wie viel kostet 1 Heft?",
    "answers": [
      "Preis beträgt: 1,20 €",
      "Preis beträgt: 2,00 €",
      "Preis beträgt: 1,50 €",
      "Preis beträgt: 1,80 €"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "7,50 / 5 = 1,50 €."
  },
  {
    "id": "k7_ma_036",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "2 Arbeiter benötigen 12 Tage. Wie viele Tage brauchen 3 Arbeiter?",
    "answers": [
      "Dauer beträgt: 6 Tage",
      "Dauer beträgt: 10 Tage",
      "Dauer beträgt: 8 Tage",
      "Dauer beträgt: 9 Tage"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gesamtarbeit: 2 * 12 = 24 Tage. Bei 3 Arbeitern: 24 / 3 = 8 Tage."
  },
  {
    "id": "k7_ma_037",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie nennt man den festen Quotienten k in der Formel y = k * x?",
    "answers": [
      "Differenzenquotient k",
      "Proportionalitätsfaktor",
      "Absoluter Nullwert stets",
      "Antiproportionalität"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "k beschreibt den Proportionalitätsfaktor u. die Steigung der Geraden."
  },
  {
    "id": "k7_ma_038",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Gegeben ist y = 3,5 * x. Welcher y-Wert gehört zu x = 4?",
    "answers": [
      "Ergebnis beträgt: 15",
      "Ergebnis beträgt: 14",
      "Ergebnis beträgt: 12",
      "Ergebnis beträgt: 16"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "3,5 * 4 = 14."
  },
  {
    "id": "k7_ma_039",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Gegeben ist y * x = 24. Welcher y-Wert gehört zu x = 6?",
    "answers": [
      "Ergebnis beträgt: 6",
      "Ergebnis beträgt: 4",
      "Ergebnis beträgt: 5",
      "Ergebnis beträgt: 3"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "y = 24 / 6 = 4."
  },
  {
    "id": "k7_ma_040",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welcher der folgenden Sachverhalte ist antiproportional?",
    "answers": [
      "Strecke & Benzinverbrauch",
      "Geschwindigkeit & Zeit",
      "Gewicht & Gesamtpreis",
      "Stückzahl & Gesamtpreis"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Höhere Geschwindigkeit verringert die benötigte Fahrzeit."
  },
  {
    "id": "k7_ma_041",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welcher der folgenden Sachverhalte ist proportional?",
    "answers": [
      "Tankmenge & Gesamtpreis",
      "Maleranzahl & Arbeitszeit",
      "Fahrzeit & Restkilometer",
      "Alter & Körpergröße"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Doppelte Literzahl an Treibstoff kostet doppelten Preis."
  },
  {
    "id": "k7_ma_042",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "10 kg Kartoffeln kosten 12 €. Wie viel kosten 15 kg Kartoffeln?",
    "answers": [
      "Kosten betragen: 18,00 €",
      "Kosten betragen: 16,00 €",
      "Kosten betragen: 20,00 €",
      "Kosten betragen: 17,50 €"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "1 kg kostet 1,20 €. 15 kg kosten 15 * 1,20 = 18,00 €."
  },
  {
    "id": "k7_ma_043",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "6 Bagger heben eine Grube in 10 Std. aus. Wie lange brauchen 5 Bagger?",
    "answers": [
      "Dauer beträgt: 14 Std.",
      "Dauer beträgt: 10 Std.",
      "Dauer beträgt: 15 Std.",
      "Dauer beträgt: 12 Std."
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gesamtdauer: 6 * 10 = 60 Stunden. Bei 5 Baggern: 60 / 5 = 12 Std."
  },
  {
    "id": "k7_ma_044",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie lautet der Proportionalitätsfaktor k bei x = 5 u. y = 20?",
    "answers": [
      "Faktor beträgt: k = 5",
      "Faktor beträgt: k = 10",
      "Faktor beträgt: k = 4",
      "Faktor beträgt: k = 2"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "k = y / x = 20 / 5 = 4."
  },
  {
    "id": "k7_ma_045",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Eine Tabelle zeigt Wertepaare (2|6), (3|9), (5|15). Welche Zuordnung ist das?",
    "answers": [
      "Keine feste Gesetzmäßigkeit",
      "Quadratische Zuordnung",
      "Proportionale Zuordnung",
      "Antiproportionale Zuord."
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Alle Quotienten y/x ergeben konstant 3 (quotientengleich)."
  },
  {
    "id": "k7_ma_046",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Eine Tabelle zeigt Wertepaare (2|12), (3|8), (4|6). Welche Zuordnung ist das?",
    "answers": [
      "Proportionale Zuordnung",
      "Exponentielle Zuordnung",
      "Antiproportionale Z.",
      "Lineare Zuordnung k"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Alle Produkte x * y ergeben konstant 24 (produktgleich)."
  },
  {
    "id": "k7_ma_047",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Fahrzeug fährt konstant 80 km/h. Wie weit kommt es in 2,5 Stunden?",
    "answers": [
      "Strecke: 220 km",
      "Strecke: 160 km",
      "Strecke: 200 km",
      "Strecke: 180 km"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Strecke s = v * t = 80 * 2,5 = 200 km."
  },
  {
    "id": "k7_ma_048",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Für 8 Personen reicht ein Vorrat 15 Tage. Wie lange reicht er für 10 Personen?",
    "answers": [
      "Dauer beträgt: 12 Tage",
      "Dauer beträgt: 14 Tage",
      "Dauer beträgt: 10 Tage",
      "Dauer beträgt: 15 Tage"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "8 * 15 = 120 Portionstage. 120 / 10 = 12 Tage."
  },
  {
    "id": "k7_ma_049",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Maßstab 1 : 50.000. 4 cm auf der Karte entsprechen in der Realität wie viel km?",
    "answers": [
      "Strecke beträgt: 50 km",
      "Strecke beträgt: 2 km",
      "Strecke beträgt: 5 km",
      "Strecke beträgt: 20 km"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "4 * 50.000 = 200.000 cm = 2.000 m = 2 km."
  },
  {
    "id": "k7_ma_050",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "3 Liter Saft kosten 4,50 €. Wie viel kosten 7 Liter Saft?",
    "answers": [
      "Kosten: 9,50 Euro",
      "Kosten: 12,00 Euro",
      "Kosten: 10,50 Euro",
      "Kosten: 11,50 Euro"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "1 Liter = 1,50 €. 7 Liter = 7 * 1,50 = 10,50 €."
  },

  // --- RATIONALE ZAHLEN & ARITHMETIK (051 - 075) ---
  {
    "id": "k7_ma_051",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was versteht man unter der Menge der rationalen Zahlen Q?",
    "answers": [
      "Nur positive Ganzzahlen",
      "Nur Kommazahlen unendlich",
      "Alle Bruch- u. Ganzzahlen",
      "Nur gerade Zahlen > 0"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Rationale Zahlen sind alle Zahlen, die als Bruch a/b dargestellt werden können."
  },
  {
    "id": "k7_ma_052",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was ergibt der Betrag einer negativen Zahl |-7|?",
    "answers": [
      "Der Kehrwert der Zahl -7",
      "Das Quadrat der Zahl -7",
      "Die Gegenzahl davon (-7)",
      "Abstand zur Null (ist 7)"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Betrag einer Zahl gibt ihren Abstand vom Nullpunkt an u. ist stets positiv."
  },
  {
    "id": "k7_ma_053",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie lautet die Gegenzahl zur Zahl +4,5?",
    "answers": [
      "Gegenzahl lautet: -4,5",
      "Gegenzahl lautet: +4,5",
      "Gegenzahl lautet: +0,45",
      "Gegenzahl lautet: -0,45"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Gegenzahl liegt auf der Zahlengeraden spiegelbildlich zur Null."
  },
  {
    "id": "k7_ma_054",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne das Ergebnis der Addition: (-5) + (-8)",
    "answers": [
      "Ergebnis lautet: -3 ",
      "Ergebnis lautet: +3 ",
      "Ergebnis lautet: -13",
      "Ergebnis lautet: +13"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Addiert man zwei negative Zahlen, bleibt das Ergebnis negativ (-13)."
  },
  {
    "id": "k7_ma_055",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne das Ergebnis der Subtraktion: (-12) - (-7)",
    "answers": [
      "Ergebnis lautet: +19",
      "Ergebnis lautet: -5",
      "Ergebnis lautet: +5",
      "Ergebnis lautet: -19"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Minus u. Minus wird zu Plus: -12 + 7 = -5."
  },
  {
    "id": "k7_ma_056",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne das Produkt zweier negativer Zahlen: (-4) * (-6)",
    "answers": [
      "Ergebnis lautet: -10",
      "Ergebnis lautet: -24",
      "Ergebnis lautet: +24",
      "Ergebnis lautet: +10"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Minus mal Minus ergibt Plus (+24)."
  },
  {
    "id": "k7_ma_057",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne das Produkt: (+3) * (-7)",
    "answers": [
      "Ergebnis lautet: +4",
      "Ergebnis lautet: -4",
      "Ergebnis lautet: -21",
      "Ergebnis lautet: +21"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Plus mal Minus ergibt stets Minus (-21)."
  },
  {
    "id": "k7_ma_058",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne den Quotienten: (-36) : (-9)",
    "answers": [
      "Ergebnis lautet: -4",
      "Ergebnis lautet: +27",
      "Ergebnis lautet: +4",
      "Ergebnis lautet: -27"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Minus geteilt durch Minus ergibt Plus (+4)."
  },
  {
    "id": "k7_ma_059",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne den Quotienten: (-45) : (+5)",
    "answers": [
      "Ergebnis lautet: -40",
      "Ergebnis lautet: +9",
      "Ergebnis lautet: -9",
      "Ergebnis lautet: +40"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Minus geteilt durch Plus ergibt Minus (-9)."
  },
  {
    "id": "k7_ma_060",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne die Potenz: (-2)^3",
    "answers": [
      "Ergebnis lautet: -6",
      "Ergebnis lautet: +8",
      "Ergebnis lautet: +6",
      "Ergebnis lautet: -8"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "(-2) * (-2) * (-2) = -8 (ungerader Exponent bleibt negativ)."
  },
  {
    "id": "k7_ma_061",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne die Potenz: (-3)^2",
    "answers": [
      "Ergebnis lautet: +6",
      "Ergebnis lautet: -6",
      "Ergebnis lautet: -9",
      "Ergebnis lautet: +9"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "(-3) * (-3) = +9 (gerader Exponent wird positiv)."
  },
  {
    "id": "k7_ma_062",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welche Zahl liegt auf der Zahlengerade weiter links: -8,2 oder -8,5?",
    "answers": [
      "Die Zahl -8,5 liegt links",
      "Hängt vom Maßstab ab",
      "Beide liegen gleich weit",
      "Die Zahl -8,2 liegt links"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Je kleiner eine negative Zahl, desto weiter links liegt sie (-8,5 < -8,2)."
  },
  {
    "id": "k7_ma_063",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welches Gesetz erlaubt das Vertauschen von Summanden (a + b = b + a)?",
    "answers": [
      "Das Assoziativgesetz",
      "Das Distributivgesetz",
      "Das Identitätsgesetz",
      "Das Kommutativgesetz"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Vertauschungsgesetz heißt Kommutativgesetz."
  },
  {
    "id": "k7_ma_064",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welches Gesetz regelt das Ausmultiplizieren: a * (b + c) = a * b + a * c?",
    "answers": [
      "Das Assoziativgesetz gilt",
      "Das Distributivgesetz",
      "Das Transitivgesetz hier",
      "Das Kommutativgesetz gilt"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Verteilungsgesetz heißt Distributivgesetz."
  },
  {
    "id": "k7_ma_065",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne vorteilhaft: 7 * 19 + 7 * 1",
    "answers": [
      "Ergebnis lautet: 140",
      "Ergebnis lautet: 147",
      "Ergebnis lautet: 133",
      "Ergebnis lautet: 150"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ausklammern: 7 * (19 + 1) = 7 * 20 = 140."
  },
  {
    "id": "k7_ma_066",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne: (-3) * (+4) * (-2)",
    "answers": [
      "Ergebnis lautet: +24",
      "Ergebnis lautet: -14",
      "Ergebnis lautet: -24",
      "Ergebnis lautet: +14"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "-3 * 4 = -12; -12 * (-2) = +24."
  },
  {
    "id": "k7_ma_067",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welches Vergleichszeichen gehört in die Lücke: -5,4 ___ -5,2?",
    "answers": [
      "Zeichen: > (größer als)",
      "Zeichen: + (einfach plus)",
      "Zeichen: = (ist gleich)",
      "Zeichen: < (kleiner)"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "-5,4 liegt weiter links als -5,2, ist also kleiner (<)."
  },
  {
    "id": "k7_ma_068",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was ergibt der Potenzausdruck (-1)^100?",
    "answers": [
      "Ergebnis lautet: -1",
      "Ergebnis lautet: +1",
      "Ergebnis lautet: 100",
      "Ergebnis lautet: 0"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gerader Exponent (100) macht das Vorzeichen positiv (+1)."
  },
  {
    "id": "k7_ma_069",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was ergibt der Potenzausdruck (-1)^101?",
    "answers": [
      "Ergebnis lautet: +1",
      "Ergebnis lautet: -1",
      "Ergebnis lautet: -101",
      "Ergebnis lautet: 0"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ungerader Exponent (101) belässt das negative Vorzeichen (-1)."
  },
  {
    "id": "k7_ma_070",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne den Betragsausdruck: |-15| - |+8|",
    "answers": [
      "Ergebnis lautet: -23",
      "Ergebnis lautet: -7",
      "Ergebnis lautet: 7",
      "Ergebnis lautet: 23"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "15 - 8 = 7."
  },
  {
    "id": "k7_ma_071",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was gehört zur Menge der ganzen Zahlen Z?",
    "answers": [
      "Nur natürliche Zahlen ab 0",
      "Nur Brüche und Kommazahlen",
      "Positive/negative Ganzz.",
      "Nur Primzahlen über null"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die ganzen Zahlen Z umfassen ..., -2, -1, 0, 1, 2, ..."
  },
  {
    "id": "k7_ma_072",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Temperatur fällt von +3 °C um 8 °C. Wie viel Grad misst das Thermometer?",
    "answers": [
      "Temperatur: -8 °C",
      "Temperatur: -11 °C",
      "Temperatur: -5 °C",
      "Temperatur: +5 °C"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "3 - 8 = -5 °C."
  },
  {
    "id": "k7_ma_073",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Kontostand beträgt -120 €. Nach Einzahlung von 50 € beträgt der neue Stand?",
    "answers": [
      "Stand beträgt: -170 €",
      "Stand beträgt: -70 €",
      "Stand beträgt: +70 €",
      "Stand beträgt: -50 €"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "-120 + 50 = -70 €."
  },
  {
    "id": "k7_ma_074",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne den Term: (-4) * (-5) - 30",
    "answers": [
      "Ergebnis lautet: +50",
      "Ergebnis lautet: -10",
      "Ergebnis lautet: +10",
      "Ergebnis lautet: -50"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "20 - 30 = -10."
  },
  {
    "id": "k7_ma_075",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne den Term: 18 : (-3) + (-4)",
    "answers": [
      "Ergebnis lautet: -10",
      "Ergebnis lautet: -2",
      "Ergebnis lautet: +2",
      "Ergebnis lautet: +10"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "-6 + (-4) = -10."
  },

  // --- GEOMETRIE: DREIECKE, WINKEL & KONGRUENZ (076 - 100) ---
  {
    "id": "k7_ma_076",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie groß ist die Innenwinkelsumme in jedem beliebigen Dreieck?",
    "answers": [
      "Summe beträgt: 360°",
      "Summe beträgt: 180°",
      "Summe beträgt: 90°",
      "Summe beträgt: 270°"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Alpha + Beta + Gamma ergeben stets genau 180 Grad."
  },
  {
    "id": "k7_ma_077",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie groß ist die Innenwinkelsumme in jedem beliebigen Viereck?",
    "answers": [
      "Summe beträgt: 270°",
      "Summe beträgt: 540°",
      "Summe beträgt: 360°",
      "Summe beträgt: 180°"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Viereck lässt sich in zwei Dreiecke zerlegen (2 * 180° = 360°)."
  },
  {
    "id": "k7_ma_078",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Rechtwinkliges Dreieck hat einen Winkel von 35°. Wie groß ist der 3. Winkel?",
    "answers": [
      "Winkel beträgt: 35°",
      "Winkel beträgt: 55°",
      "Winkel beträgt: 65°",
      "Winkel beträgt: 45°"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "180 - 90 - 35 = 55°."
  },
  {
    "id": "k7_ma_079",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was zeichnet ein gleichschenkliges Dreieck aus?",
    "answers": [
      "Drei spitze Winkel",
      "Ein 90-Grad-Winkel",
      "Drei gleiche Seiten",
      "Zwei gleiche Seiten"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zwei Schenkel sind gleich lang u. die Basiswinkel sind gleich groß."
  },
  {
    "id": "k7_ma_080",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie groß sind alle drei Innenwinkel in einem gleichseitigen Dreieck?",
    "answers": [
      "Jeweils genau 90°",
      "Jeweils genau 30°",
      "Jeweils genau 60°",
      "Jeweils genau 45°"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "180° / 3 = 60°."
  },
  {
    "id": "k7_ma_081",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was besagt der Kongruenzsatz SSS für Dreiecke?",
    "answers": [
      "Winkel-Seite-Winkel",
      "Seite-Winkel-Seite",
      "Drei Seiten gleich",
      "Seite-Seite-Winkel"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Stimmen zwei Dreiecke in allen drei Seitenlängen überein, sind sie kongruent."
  },
  {
    "id": "k7_ma_082",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was besagt der Kongruenzsatz SWS für Dreiecke?",
    "answers": [
      "Drei Seiten gleich",
      "Drei Winkel gleich",
      "Winkel an Hypotenuse",
      "Zwei Seiten & Winkel"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zwei Seiten u. der eingeschlossene Winkel müssen übereinstimmen."
  },
  {
    "id": "k7_ma_083",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was besagt der Kongruenzsatz WSW für Dreiecke?",
    "answers": [
      "Zwei Seiten & Winkel",
      "Winkel-Winkel-Winkel",
      "Zwei Winkel & Seite",
      "Drei Seiten gleich"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Seite u. die beiden anliegenden Winkel müssen übereinstimmen."
  },
  {
    "id": "k7_ma_084",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wann nennt man zwei geometrische Figuren zueinander kongruent?",
    "answers": [
      "Nur gleiche Winkelgrößen",
      "Deckungsgleich in Form",
      "Nur gleiche Flächengröße",
      "Nur gleiche Farbe/Muster"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kongruent bedeutet deckungsgleich in Form u. Größe."
  },
  {
    "id": "k7_ma_085",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was versteht man unter einer Mittelsenkrechten im Dreieck?",
    "answers": [
      "Verbindung zur Ecke",
      "Senkrechte in Mitte",
      "Höhe auf der Basis",
      "Winkel halbierende"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Steht rechtwinklig (90°) im Mittelpunkt einer Seite."
  },
  {
    "id": "k7_ma_086",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Der Schnittpunkt der drei Mittelsenkrechten ist der Mittelpunkt des ...?",
    "answers": [
      "Höhenschnittpunkts",
      "Inkreises des Dreiecks",
      "Schwerpunkts der Eck.",
      "Umkreises des Dreiecks"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Umkreis verläuft durch alle drei Eckpunkte des Dreiecks."
  },
  {
    "id": "k7_ma_087",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Der Schnittpunkt der drei Winkelhalbierenden ist der Mittelpunkt des ...?",
    "answers": [
      "Schwerpunkts der Eck.",
      "Höhenschnittpunkts",
      "Umkreises des Dreiecks",
      "Inkreises des Dreiecks"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Inkreis berührt alle drei Seiten des Dreiecks von innen."
  },
  {
    "id": "k7_ma_088",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was bewirkt eine Winkelhalbierende im Dreieck?",
    "answers": [
      "Steht senkrecht 90°",
      "Verbindet zwei Ecken",
      "Teilt Winkel in zwei",
      "Teilt Seite in Mitte"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Teilt einen Innenwinkel exakt in zwei gleich große Teilwinkel."
  },
  {
    "id": "k7_ma_089",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Was ist eine Seitenhalbierende (Schwerlinie) im Dreieck?",
    "answers": [
      "Verbindung Mitte-Ecke",
      "Halbiert den Innenwinkel",
      "Parallele zur Basisseite",
      "Steht im rechten Winkel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Verbindet den Mittelpunkt einer Seite mit dem gegenüberliegenden Eckpunkt."
  },
  {
    "id": "k7_ma_090",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie nennt man den Schnittpunkt aller drei Seitenhalbierenden?",
    "answers": [
      "Der Schwerpunkt S",
      "Der Umkreismittelpunkt",
      "Der Höhenschnittpunkt",
      "Der Inkreismittelpunkt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Schwerpunkt S teilt die Seitenhalbierenden im Verhältnis 2:1."
  },
  {
    "id": "k7_ma_091",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "In welchem Winkel steht die Höhe ha auf der Grundseite a?",
    "answers": [
      "Im 60-Grad-Winkel stets",
      "Parallel zur Seite a hier",
      "Im rechten Winkel (90°)",
      "Im 45-Grad-Winkel stets"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Höhen stehen stets im 90-Grad-Winkel auf der jeweiligen Seite."
  },
  {
    "id": "k7_ma_092",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie berechnet man den Flächeninhalt A eines Dreiecks?",
    "answers": [
      "Formel: A = (g * h) / 2",
      "Formel: A = g * h",
      "Formel: A = 2 * g * h",
      "Formel: A = (g + h) / 2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "A = 1/2 * Grundseite * Höhe."
  },
  {
    "id": "k7_ma_093",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne die Fläche eines Dreiecks mit Grundseite g = 8 cm u. Höhe h = 5 cm.",
    "answers": [
      "Fläche: 20 cm²",
      "Fläche: 40 cm²",
      "Fläche: 26 cm²",
      "Fläche: 13 cm²"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "A = (8 * 5) / 2 = 20 cm²."
  },
  {
    "id": "k7_ma_094",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie heißen Winkel, die sich an zwei schneidenden Geraden gegenüberliegen?",
    "answers": [
      "Begriff: Wechselwinkel hier",
      "Begriff: Stufenwinkel dort",
      "Begriff: Nebenwinkel dabei",
      "Begriff: Scheitelwinkel"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Scheitelwinkel liegen sich gegenüber u. sind exakt gleich groß."
  },
  {
    "id": "k7_ma_095",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Wie heißen zwei nebeneinanderliegende Winkel an einer Geraden?",
    "answers": [
      "Begriff: Scheitelwinkel",
      "Begriff: Wechselwinkel",
      "Begriff: Stufenwinkel",
      "Begriff: Nebenwinkel"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nebenwinkel ergänzen sich stets zu 180 Grad."
  },
  {
    "id": "k7_ma_096",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Winkel alpha beträgt 40°. Wie groß ist sein Nebenwinkel beta?",
    "answers": [
      "Winkel beträgt hier: 50°",
      "Winkel beträgt hier: 40°",
      "Winkel beträgt: 140°",
      "Winkel beträgt hier: 90°"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "180° - 40° = 140°."
  },
  {
    "id": "k7_ma_097",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Ein Winkel alpha beträgt 65°. Wie groß ist sein Scheitelwinkel gamma?",
    "answers": [
      "Winkel beträgt: 65°",
      "Winkel beträgt: 180°",
      "Winkel beträgt: 90°",
      "Winkel beträgt: 115°"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Scheitelwinkel sind gleich groß (65°)."
  },
  {
    "id": "k7_ma_098",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Welcher Zusammenhang gilt für Stufenwinkel an Parallelen?",
    "answers": [
      "Winkel sind stets ungleich",
      "Summe ergibt stets 90°",
      "Summe ergibt hierbei 360°",
      "Winkel sind gleich groß"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Stufenwinkel (F-Winkel) an geschnittenen Parallelen sind gleich groß."
  },
  {
    "id": "k7_ma_099",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Gleichschenkliges Dreieck mit Spitzenwinkel 40°. Wie groß ist ein Basiswinkel?",
    "answers": [
      "Winkel beträgt: 70°",
      "Winkel beträgt: 60°",
      "Winkel beträgt: 50°",
      "Winkel beträgt: 80°"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "(180° - 40°) / 2 = 140° / 2 = 70°."
  },
  {
    "id": "k7_ma_0100",
    "category": "k7_mathe",
    "area": "schule",
    "grade": 7,
    "subject": "mathematik",
    "question": "Berechne den Umfang U eines Dreiecks mit a = 6 cm, b = 8 cm u. c = 10 cm.",
    "answers": [
      "Umfang beträgt: 24 cm",
      "Umfang beträgt: 48 cm",
      "Umfang beträgt: 28 cm",
      "Umfang beträgt: 20 cm"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "U = a + b + c = 6 + 8 + 10 = 24 cm."
  }
];



// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K7_MATHEMATIK_QUESTIONS = K7_MATHEMATIK_QUESTIONS;
}