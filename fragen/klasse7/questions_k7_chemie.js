// ================================================================
// KLASSE 7 - CHEMIE (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K7_CHEMIE_QUESTIONS = [
  // --- SICHERHEIT IM CHEMIEUNTERRICHT & LABORGERÄTE (001 - 020) ---
  {
    "id": "k7_ch_001",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welche persönliche Schutzausrüstung muss bei jedem Experiment im Chemieraum getragen werden?",
    "answers": [
      "Der Gehörschutz Ohren",
      "Die Lederhandschuhe",
      "Der Kittel aus Wolle",
      "Die Schutzbrille Auge"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Schutzbrille schützt die Augen vor Verätzungen u. verspritzenden Chemikalien."
  },
  {
    "id": "k7_ch_002",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie reagiert man richtig, wenn eine Säure auf die Haut gelangt ist?",
    "answers": [
      "Mit Tuch abreiben",
      "Eine Seife auftragen",
      "Warten bis es trocknet",
      "Sofort viel Wasser"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Säurespritzer müssen sofort u. gründlich mit fließendem kaltem Wasser abgespült werden."
  },
  {
    "id": "k7_ch_003",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie stellt man am Bunsenbrenner die heiße, rauschende Flamme ein?",
    "answers": [
      "Luftzufuhr öffnen",
      "Gasventil verengen",
      "Luftzufuhr schließen",
      "Brenner schräg halten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch Öffnen der Luftzufuhr strömt Sauerstoff ein, was zu einer heißen u. vollständigen Verbrennung führt."
  },
  {
    "id": "k7_ch_004",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welche Eigenschaft besitzt die leuchtend gelbe Flamme des Bunsenbrenners bei geschlossener Luftzufuhr?",
    "answers": [
      "Heiß u. rußfrei",
      "Rußend u. kühler",
      "Unsichtbar hell",
      "Farb- u. geruchlos"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei geschlossener Luftzufuhr verbrennt das Gas unvollständig, leuchtet gelb, rußt u. ist weniger heiß."
  },
  {
    "id": "k7_ch_005",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Warum darf ein Fettbrand in der Küche oder im Labor NIEMALS mit Wasser gelöscht werden?",
    "answers": [
      "Starke Explosion",
      "Gasbildung Gift",
      "Wasser brennt mit",
      "Fett kühlt zu schnell"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wasser verdampft schlagartig im heißen Öl u. schleudert brennendes Fett großflächig im Raum herum."
  },
  {
    "id": "k7_ch_006",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wohin darf die Öffnung eines Reagenzglases beim Erwärmen von Flüssigkeiten niemals zeigen?",
    "answers": [
      "Nach schräg oben weg",
      "Auf Menschen im Raum",
      "Zur Raumdecke hin",
      "Zum Brennerfuß hin"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Siedeverzögerungen können heiße Flüssigkeiten schlagartig herausschleudern."
  },
  {
    "id": "k7_ch_007",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches GHS-Gefahrensymbol zeigt eine offene Flamme auf weißem Grund mit rotem Rahmen?",
    "answers": [
      "Giftig Substanz",
      "Oxidierend Gase",
      "Explosiv Reaktiv",
      "Entzündbar Stoff"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Flamme steht für leicht- oder hochertzündliche Stoffe u. Gemische."
  },
  {
    "id": "k7_ch_008",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches Gefahrensymbol zeigt Flüssigkeiten, die auf eine Hand u. Metall tropfen?",
    "answers": [
      "Reizend Wirkung",
      "Umweltgefahr",
      "Giftig Substanz",
      "Ätzend Wirkung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Symbol 'Ätzwirkung' warnt vor Verätzungen der Haut u. Zerstörung von Materialien."
  },
  {
    "id": "k7_ch_009",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches Gefahrensymbol zeigt einen Totenkopf mit gekreuzten Knochen?",
    "answers": [
      "Akute Toxizität",
      "Ätzende Wirkung",
      "Umweltgefährdend",
      "Entzündbarkeit"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Totenkopf warnt vor lebensgefährlichen oder giftigen Substanzen beim Verschlucken oder Einatmen."
  },
  {
    "id": "k7_ch_010",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches Gefahrensymbol zeigt einen entlaubten Baum u. einen toten Fisch?",
    "answers": [
      "Gesundheitsschädlich",
      "Gas unter Druck",
      "Explosionsgefährlich",
      "Gewässergefährdend"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Dieses Symbol kennzeichnet Stoffe, die Wasserorganismen u. Ökosysteme nachhaltig schädigen."
  },
  {
    "id": "k7_ch_011",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches Laborgerät nutzt man zum tropfenweisen u. exakten Dosieren kleiner Flüssigkeitsmengen?",
    "answers": [
      "Die Abdampfschale",
      "Die Glaspipette",
      "Der Trichter Glas",
      "Das Reagenzglas"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pipetten dienen dem präzisen Abmessen u. Zudosieren kleiner Tröpfchen."
  },
  {
    "id": "k7_ch_012",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches Laborgefäß besitzt eine konische Form mit engem Hals zum spritzfreien Mischen?",
    "answers": [
      "Eindampfschale",
      "Erlenmeyerkolben",
      "Becherglas hoch",
      "Standzylinder eng"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Verengung des Erlenmeyerkolbens verhindert das Herausspritzen beim Umschwenken."
  },
  {
    "id": "k7_ch_013",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches zylindrische Glasgefäß mit Skala dient dem Abmessen von Flüssigkeitsvolumina?",
    "answers": [
      "Das Reagenzglas",
      "Die Porzellansch.",
      "Der Glaskolben",
      "Der Messzylinder"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Messzylinder besitzen eine genaue Volumenskala zur Volumenbestimmung von Flüssigkeiten."
  },
  {
    "id": "k7_ch_014",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches Hitzebeständige Gefäß nutzt man zum vollständigen Verdampfen von Lösungsmitteln?",
    "answers": [
      "Der Erlenmeyerkolben",
      "Die Porzellanschale",
      "Der Messzylinder",
      "Der Trichter Glas"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In der flachen Porzellan- bzw. Eindampfschale wird die Flüssigkeit erhitzt, bis der Feststoff zurückbleibt."
  },
  {
    "id": "k7_ch_015",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie führt man eine Geruchsprobe von chemischen Dämpfen im Labor korrekt u. sicher durch?",
    "answers": [
      "Mit Mund absaugen",
      "Vorsichtig fächeln",
      "Direkt an Röhre",
      "Tief einatmen Nase"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Man fächelt sich die Dämpfe mit der Hand vorsichtig zur Nase zu, um Verätzungen der Atemwege zu vermeiden."
  },
  {
    "id": "k7_ch_016",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "In welcher Reihenfolge entzündet man einen Gasbrenner im Chemieunterricht richtig?",
    "answers": [
      "Holz an, Gas auf",
      "Gas auf, Luft auf",
      "Gas auf, Holz an",
      "Luft auf, Gas auf"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zuerst brennendes Zündholz bereithalten, erst danach den Gashahn öffnen, um Gasansammlungen zu vermeiden."
  },
  {
    "id": "k7_ch_017",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Warum dürfen verschlossene Gefäße niemals in der Brennerflamme erhitzt werden?",
    "answers": [
      "Gas brennt innen",
      "Glas schmilzt ab",
      "Farbe ändert sich",
      "Berstgefahr Druck"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der entstehende Gasdruck lässt das verschlossene Gefäß explisionsartig zerspringen."
  },
  {
    "id": "k7_ch_018",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie entsorgt man chemische Abfälle nach dem Experimentieren ordnungsgemäß?",
    "answers": [
      "In den Papierkorb",
      "Auf Rasen gießen",
      "In Sammelbehälter",
      "Alles ins Waschbecken"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Chemikalienreste müssen getrennt nach Stoffgruppen in speziellen Sonderabfallbehältern gesammelt werden."
  },
  {
    "id": "k7_ch_019",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches Gerät dient dem Festhalten von Reagenzgläsern in der heißen Flamme?",
    "answers": [
      "Der Stativring",
      "Die Tiegelzange",
      "Die Holzklammer",
      "Die Metallpinzette"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Reagenzgläser werden während des Erwärmens mit einer Holzklammer gehalten."
  },
  {
    "id": "k7_ch_020",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches GHS-Gefahrensymbol zeigt einen zerberstenden Ball mit Splittern?",
    "answers": [
      "Umweltgefährdung",
      "Ätzende Wirkung",
      "Explosionsgefahr",
      "Akute Toxizität"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Symbol warnt vor instabilen, selbstzersetzlichen u. explisionsgefährlichen Stoffen."
  },

  // --- STOFFE, STOFFEIGENSCHAFTEN & TEILCHENMODELL (021 - 040) ---
  {
    "id": "k7_ch_021",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welche der folgenden Größen ist eine charakteristische physikalische Stoffeigenschaft?",
    "answers": [
      "Die äußere Form",
      "Das Gesamtvolumen",
      "Die Dichte Rho",
      "Die Gesamtmasse"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Dichte ist vom Körperunabhängig u. für jeden Reinstoff spezifisch."
  },
  {
    "id": "k7_ch_022",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie lautet die mathematische Formel zur Berechnung der Dichte $\\rho$ eines Körpers?",
    "answers": [
      "Formel: Rho = m / V",
      "Formel: Rho = V / m",
      "Formel: Rho = m * V",
      "Formel: Rho = m + V"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Dichte ist der Quotient aus Masse $m$ u. Volumen $V$ ($\\rho = m / V$)."
  },
  {
    "id": "k7_ch_023",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "In welcher Standardeinheit wird die Dichte fester Stoffe in der Chemie üblicherweise angegeben?",
    "answers": [
      "Einheit: mg / l²",
      "Einheit: g / cm³",
      "Einheit: g * cm³",
      "Einheit: kg / m²"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gramm pro Kubikzentimeter ($\\text{g/cm}^3$) ist die gebräuchliche Einheit in der Chemie."
  },
  {
    "id": "k7_ch_024",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man den Übergang eines Stoffes vom festen in den flüssigen Aggregatzustand?",
    "answers": [
      "Vorgang: Schmelzen",
      "Vorgang: Sublimieren",
      "Vorgang: Verdampfen",
      "Vorgang: Erstaren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Phasenübergang von fest zu flüssig heißt Schmelzen."
  },
  {
    "id": "k7_ch_025",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man den Phasenübergang vom flüssigen in den gasförmigen Aggregatzustand?",
    "answers": [
      "Vorgang: Resublimieren",
      "Vorgang: Kondensieren",
      "Vorgang: Verdampfen",
      "Vorgang: Schmelzen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Übergang von flüssig zu gasförmig nennt man Verdampfen oder Sieden."
  },
  {
    "id": "k7_ch_026",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man den direkten Phasenübergang von gasförmig zu fest unter Umgehung der flüssigen Phase?",
    "answers": [
      "Vorgang: Kondensieren",
      "Vorgang: Resublimieren",
      "Vorgang: Kristallisieren",
      "Vorgang: Sublimieren"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Übergang direkt von gasförmig nach fest wird als Resublimieren bezeichnet."
  },
  {
    "id": "k7_ch_027",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man den Phasenübergang vom festen Zustand direkt in den gasförmigen Zustand (z. B. Trockeneis)?",
    "answers": [
      "Vorgang: Resublimieren",
      "Vorgang: Schmelzen",
      "Vorgang: Sublimieren",
      "Vorgang: Verdampfen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das direkte Verdampfen eines Feststoffes ohne Verflüssigung heißt Sublimieren."
  },
  {
    "id": "k7_ch_028",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie verhalten sich die Teilchen in einem festen Körper laut dem Kugelteilchenmodell?",
    "answers": [
      "Frei u. weit entfernt",
      "Sehr schnell beweglich",
      "Dicht u. feste Plätze",
      "Locker u. leicht gleit"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Feststoff sind die Teilchen dicht gepackt u. schwingen nur um ihre festen Gitterplätze."
  },
  {
    "id": "k7_ch_029",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie verhalten sich die Teilchen in einem Gas laut dem Teilchenmodell?",
    "answers": [
      "Weit weg u. rasch frei",
      "Dicht aneinander fixiert",
      "Verschiebbar geordnet",
      "Geordnet im Gitter"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Gas haben die Teilchen große Abstände u. bewegen sich völlig ungeordnet u. schnell."
  },
  {
    "id": "k7_ch_030",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Was versteht man in der Chemie unter dem Phänomen der 'Diffusion'?",
    "answers": [
      "Reaktion mit Sauerstoff",
      "Kühlen von Schmelze",
      "Selbsttätiges Mischen",
      "Verdampfen bei Hitze"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Diffusion ist die selbsttätige Durchmischung von Stoffen aufgrund der Eigenbewegung der Teilchen."
  },
  {
    "id": "k7_ch_031",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Was beschreibt die 'Brownsche Molekularbewegung' mikroskopisch?",
    "answers": [
      "Erstarren einer Schmelze",
      "Zitterbewegung Teilchen",
      "Kristallbildung Salz",
      "Wärmestrom im Metall"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die unregelmäßige Zitterbewegung kleiner Partikel durch den Anprall unsichtbarer Moleküle."
  },
  {
    "id": "k7_ch_032",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Warum leiten Metalle wie Kupfer oder Aluminium den elektrischen Strom hervorragend?",
    "answers": [
      "Feste Ionenbindung",
      "Feste Moleküle",
      "Freie Elektronen",
      "Hohe Dichte Rho"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Frei bewegliche Elektronen im Metallgitter sind die Träger der elektrischen Ladung."
  },
  {
    "id": "k7_ch_033",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie verändert sich die Löslichkeit der meisten festen Salze in Wasser bei Temperaturerhöhung?",
    "answers": [
      "Löslichkeit bleibt gleich",
      "Löslichkeit sinkt ab",
      "Salz schmilzt sofort",
      "Löslichkeit steigt an"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mit steigender Wassertemperatur löst sich bei den meisten Salzen mehr Feststoff."
  },
  {
    "id": "k7_ch_034",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man eine Lösung, die bei einer bestimmten Temperatur keinen weiteren Feststoff mehr auflösen kann?",
    "answers": [
      "Verdünnte Lösung",
      "Homogene Emulsion",
      "Ungesättigte Lösung",
      "Gesättigte Lösung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine gesättigte Lösung enthält die maximale Menge des gelösten Stoffes bei dieser Temperatur."
  },
  {
    "id": "k7_ch_035",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Bei welcher Temperatur besitzt reines Wasser seine höchste Dichte (Anomalie des Wassers)?",
    "answers": [
      "Bei exakt 100 °C Temp.",
      "Bei exakt 4 °C Temp.",
      "Bei exakt -4 °C Temp.",
      "Bei exakt 0 °C Temp."
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wasser hat bei 4 °C seine maximale Dichte ($1{,}0\\text{ g/cm}^3$), weshalb Eis oben schwimmt."
  },
  {
    "id": "k7_ch_036",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welche drei Metalle besitzen ferromagnetische Eigenschaften u. werden von einem Magneten angezogen?",
    "answers": [
      "Aluminium, Zink, Blei",
      "Kupfer, Silber, Gold",
      "Zink, Zinn, Blei",
      "Eisen, Nickel, Kobalt"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eisen, Nickel u. Kobalt sind die drei klassischen ferromagnetischen Metalle."
  },
  {
    "id": "k7_ch_037",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man einen Reinstoff, der sich mit chemischen Methoden nicht weiter in einfache Stoffe zerlegen lässt?",
    "answers": [
      "Homogene Lösung",
      "Heterogenes Gemisch",
      "Chemisches Element",
      "Chemische Verbind."
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Element besteht nur aus einer einzigen Atomart u. ist chemisch nicht weiter zerlegbar."
  },
  {
    "id": "k7_ch_038",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man Reinstoffe, die aus Atomen verschiedener Elemente in festem Zahlenverhältnis aufgebaut sind?",
    "answers": [
      "Chemisches Element",
      "Legierung der Metalle",
      "Heterogenes Gemenge",
      "Chemische Verbindung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Verbindungen (z. B. Wasser $H_2O$) bestehen aus mindestens zwei verschiedenen Elementen."
  },
  {
    "id": "k7_ch_039",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Was beschreibt der Begriff 'Siedepunkt' eines Reinstoffes?",
    "answers": [
      "Temp. flüssig -> gas",
      "Temp. flüssig -> fest",
      "Temp. fest -> flüssig",
      "Temp. gas -> fest"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Siedepunkt ist die Temperatur, bei der eine Flüssigkeit unter Normaldruck in den gasförmigen Zustand übergeht."
  },
  {
    "id": "k7_ch_040",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welche Eigenschaft unterscheidet einen Reinstoff von einem Gemisch?",
    "answers": [
      "Mehrere Siedepunkte",
      "Schwankende Schmelze",
      "Mischbarkeit variabel",
      "Feste Stoffkonstanten"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Reinstoffe besitzen exakt definierte u. unveränderliche physikalische Stoffkonstanten (z. B. Schmelzpunkt)."
  },

  // --- GEMISCHE & TRENNVERFAHREN (041 - 060) ---
  {
    "id": "k7_ch_041",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Was zeichnet ein 'heterogenes Stoffgemisch' aus?",
    "answers": [
      "Optisch völlig einheit",
      "Immer flüssige Phase",
      "Nur ein einziges Atom",
      "Bestandteile sichtbar"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In heterogenen Gemischen kann man die einzelnen Bestandteile mit bloßem Auge oder dem Mikroskop unterscheiden."
  },
  {
    "id": "k7_ch_042",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Was zeichnet ein 'homogenes Stoffgemisch' aus?",
    "answers": [
      "Immer fest u. gasförmig",
      "Bestandteile sichtbar",
      "Optisch einheitlich",
      "Mechanisch trennbar"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Homogene Gemische erscheinen selbst unter dem Lichtmikroskop vollkommen gleichmäßig (einphasig)."
  },
  {
    "id": "k7_ch_043",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man ein heterogenes Gemisch aus unlöslichen Feststoffpartikeln in einer Flüssigkeit?",
    "answers": [
      "Gemisch: Emulsion",
      "Gemisch: Suspension",
      "Gemisch: Kolloidlösung",
      "Gemisch: Aerosol"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Suspension ist ein heterogenes Gemisch aus festen Teilchen in einer Flüssigkeit (z. B. Schlammwasser)."
  },
  {
    "id": "k7_ch_044",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man ein heterogenes Gemisch zweier nicht mischbarer Flüssigkeiten (z. B. Öl u. Wasser)?",
    "answers": [
      "Gemisch: Suspension",
      "Gemisch: Lösung",
      "Gemisch: Emulsion",
      "Gemisch: Legierung"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Tröpfchen einer Flüssigkeit fein verteilt in einer anderen Flüssigkeit nennt man Emulsion (z. B. Milch)."
  },
  {
    "id": "k7_ch_045",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man ein heterogenes Gemisch mehrerer fester Stoffe (z. B. Granitstein)?",
    "answers": [
      "Begriff: Das Gemenge",
      "Begriff: Die Legierung",
      "Begriff: Die Lösung",
      "Begriff: Das Aerosol"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Gemisch aus verschiedenen Feststoffen bezeichnet man als Gemenge (z. B. Sand u. Salz)."
  },
  {
    "id": "k7_ch_046",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man ein heterogenes Gemisch aus festen Partikeln oder Flüssigkeitströpfchen in einem Gas?",
    "answers": [
      "Begriff: Die Legierung",
      "Begriff: Die Emulsion",
      "Begriff: Die Suspension",
      "Begriff: Das Aerosol"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nebel (flüssig in gasförmig) u. Rauch (fest in gasförmig) gehören zu den Aerosolen."
  },
  {
    "id": "k7_ch_047",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man ein homogenes Gemisch aus geschmolzenen u. wieder erstarrten Metallen?",
    "answers": [
      "Begriff: Die Emulsion",
      "Begriff: Die Suspension",
      "Begriff: Das Gemenge",
      "Begriff: Die Legierung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Legierungen (z. B. Messing aus Kupfer u. Zink) sind homogene Metallgemische."
  },
  {
    "id": "k7_ch_048",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Auf welcher unterschiedlichen Stoffeigenschaft basiert das Trennverfahren der 'Filtration'?",
    "answers": [
      "Auf Dichteunterschied",
      "Auf Magnetismus",
      "Auf Partikelgröße",
      "Auf Siedetemperatur"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Poren des Filterpapiers halten größere Feststoffteilchen zurück u. lassen kleine Flüssigkeitsmoleküle passieren."
  },
  {
    "id": "k7_ch_049",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Auf welcher unterschiedlichen Stoffeigenschaft basiert das Trennverfahren der 'Destillation'?",
    "answers": [
      "Auf Siedepunkten",
      "Auf der Löslichkeit",
      "Auf Magnetismus",
      "Auf Teilchengrößen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Stoffe mit niedrigerem Siedepunkt verdampfen zuerst u. werden im Kühler wieder kondensiert."
  },
  {
    "id": "k7_ch_050",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Auf welcher Stoffeigenschaft beruht das Absetzenlassen unlöslicher Feststoffe am Boden (Sedimentieren)?",
    "answers": [
      "Auf der Löslichkeit",
      "Auf Verdunstungsrate",
      "Auf Dichteunterschied",
      "Auf der Zähflüssigkeit"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schwere Feststoffteilchen mit höherer Dichte sinken aufgrund der Schwerkraft auf den Boden."
  },
  {
    "id": "k7_ch_051",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man das vorsichtige Abgießen der überstehenden Flüssigkeit nach dem Sedimentieren?",
    "answers": [
      "Vorgang: Destillieren",
      "Vorgang: Dekantieren",
      "Vorgang: Zentrifug.",
      "Vorgang: Extrahieren"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nach dem Absetzen wird die klare Flüssigkeit vorsichtig abgegossen (Dekantieren)."
  },
  {
    "id": "k7_ch_052",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Auf welcher Stoffeigenschaft beruht die Trennung von Farbstoffgemischen mittels Papierchromatografie?",
    "answers": [
      "Elektrische Ladung",
      "Löslichkeit / Haftung",
      "Magnetische Eigenschaft",
      "Dichte des Stoffes"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Trennung basiert auf der unterschiedlichen Löslichkeit im Laufmittel u. Adsorption am Papier."
  },
  {
    "id": "k7_ch_053",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man das Herauslösen von bestimmten Inhaltsstoffen mithilfe eines geeigneten Lösungsmittels (z. B. Tee kochen)?",
    "answers": [
      "Vorgang: Extraktion",
      "Vorgang: Destillation",
      "Vorgang: Filtration",
      "Vorgang: Sedimentat."
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei der Extraktion werden lösliche Komponenten gezielt mit einem Lösungsmittel herausgelöst."
  },
  {
    "id": "k7_ch_054",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie bezeichnet man die geklärte Flüssigkeit, die beim Filtrieren durch das Filterpapier gelaufen ist?",
    "answers": [
      "Begriff: Der Rückstand",
      "Begriff: Das Filtrat",
      "Begriff: Das Destillat",
      "Begriff: Das Eruat"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die durch das Filterpapier hindurchgetretene flüssige Phase heißt Filtrat."
  },
  {
    "id": "k7_ch_055",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie bezeichnet man den festen Stoff, der nach dem Filtrieren im Filterpapier zurückbleibt?",
    "answers": [
      "Begriff: Der Bodensatz",
      "Begriff: Das Sediment",
      "Begriff: Das Filtrat",
      "Begriff: Der Rückstand"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der vom Filter zurückgehaltene unlösliche Feststoff bildet den Filterrückstand."
  },
  {
    "id": "k7_ch_056",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie lässt sich ein Gemisch aus Eisenspänen u. Schwefelpulver physikalisch trennen?",
    "answers": [
      "Durch Sieben Poren",
      "Durch Destillation",
      "Durch Dekantieren",
      "Mit einem Magneten"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Eisenspäne werden aufgrund ihres Ferromagnetismus vom Magneten angezogen."
  },
  {
    "id": "k7_ch_057",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches Trennverfahren nutzt man im Labor, um Kochsalz aus Meerwasser zurückzugewinnen?",
    "answers": [
      "Magnetabscheidung",
      "Verdampfen Wasser",
      "Extraktion Wasser",
      "Filtrieren Wasser"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch Erhitzen oder Verdunsten entweicht das Wasser, u. das feste Salz kristallisiert aus."
  },
  {
    "id": "k7_ch_058",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Mit welchem Gerät lässt sich die Sedimentation im Labor durch schnelle Rotation drastisch beschleunigen?",
    "answers": [
      "Die Zentrifuge",
      "Die Saugflasche",
      "Der Kaltkühler",
      "Der Scheidetrichter"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch Fliehkräfte (Zentrifugalkraft) werden feste Bestandteile rasch auf den Boden des Röhrchens gedrückt."
  },
  {
    "id": "k7_ch_059",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Worin besteht der genaue Unterschied zwischen Rauch u. Nebel?",
    "answers": [
      "Rauch fl. / Nebel fest",
      "Beide sind gasförmig",
      "Rauch fest / Nebel fl.",
      "Kein Unterschied da"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Rauch besteht aus festen Teilchen in Gas; Nebel besteht aus flüssigen Tröpfchen in Gas."
  },
  {
    "id": "k7_ch_060",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welcher Schritt gehört zur Aufbereitung von Flusswasser zu klarem Trinkwasser im Wasserwerk?",
    "answers": [
      "Eindampfen der Reste",
      "Filtration über Sand",
      "Destillation Siedung",
      "Extraktion Ölbad"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sand- u. Kiesfilter halten suspendierte Trübstoffe zuverlässig aus dem Rohwasser zurück."
  },

  // --- CHEMISCHE REAKTIONEN & ENERGIE (061 - 080) ---
  {
    "id": "k7_ch_061",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Was sind die zwei zwingenden Merkmale JEDER chemischen Reaktion?",
    "answers": [
      "Geruch u. Explosion",
      "Schmelzen u. Sieden",
      "Stoff- u. Energieumstz",
      "Wärme u. Volumenwechsel"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei jeder chemischen Reaktion entstehen neue Stoffe mit neuen Eigenschaften unter Energieumsatz."
  },
  {
    "id": "k7_ch_062",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Worin unterscheidet sich ein physikalischer Vorgang von einer chemischen Reaktion?",
    "answers": [
      "Immer irreversibel",
      "Keine neue Substanz",
      "Stoff ändert Atome",
      "Wärme entsteht immer"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim physikalischen Vorgang (z. B. Schmelzen) ändern sich nur Zustand oder Form, die Substanz bleibt dieselbe."
  },
  {
    "id": "k7_ch_063",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man die Ausgangsstoffe einer chemischen Reaktion?",
    "answers": [
      "Begriff: Katalysat.",
      "Begriff: Die Isotope",
      "Begriff: Die Produkte",
      "Begriff: Die Edukte"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die vor der Reaktion vorliegenden Stoffe heißen Edukte oder Reaktanten."
  },
  {
    "id": "k7_ch_064",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man die neu entstandenen Stoffe einer chemischen Reaktion?",
    "answers": [
      "Begriff: Die Produkte",
      "Begriff: Die Edukte",
      "Begriff: Die Elemente",
      "Begriff: Der Ansatz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die nach dem chemischen Prozess neu gebildeten Substanzen heißen Produkte."
  },
  {
    "id": "k7_ch_065",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Was besagt das 'Gesetz von der Erhaltung der Masse' nach Lavoisier bei chemischen Reaktionen?",
    "answers": [
      "Masse halbiert sich",
      "Gesamtmasse konstant",
      "Masse nimmt stets zu",
      "Masse wird vernichtet"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In einem geschlossenen System ist die Gesamtmasse der Produkte exakt gleich der Gesamtmasse der Edukte."
  },
  {
    "id": "k7_ch_066",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man eine chemische Reaktion, bei der Energie (z. B. Wärme oder Licht) an die Umgebung abgegeben wird?",
    "answers": [
      "Exotherme Reaktion",
      "Endotherme Reaktion",
      "Katalytische Phase",
      "Physikalische Phase"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Exotherme Reaktionen setzen Energie frei (z. B. Verbrennungen)."
  },
  {
    "id": "k7_ch_067",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man eine chemische Reaktion, die zum Ablaufen ständig Energie aus der Umgebung aufnehmen muss?",
    "answers": [
      "Exotherme Reaktion",
      "Katalytische Reaktion",
      "Endotherme Reaktion",
      "Synthetische Phase"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Endotherme Reaktionen verbrauchen kontinuierlich Energie u. kühlen die Umgebung ab."
  },
  {
    "id": "k7_ch_068",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Was versteht man unter der 'Aktivierungsenergie' bei chemischen Reaktionen?",
    "answers": [
      "Energie zum Starten",
      "Freigesetzte Wärme",
      "Gesamte Kernenergie",
      "Verlust an Masse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Aktivierungsenergie ist die Barriere, die überwunden werden muss, um eine Reaktion auszulösen."
  },
  {
    "id": "k7_ch_069",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welche Wirkung u. Eigenschaft besitzt ein 'Katalysator' bei chemischen Reaktionen?",
    "answers": [
      "Senkt EA, unverändert",
      "Stoppt Reaktion ganz",
      "Wird zum Produkt hin",
      "Erhöht EA, verbraucht"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Katalysator beschleunigt die Reaktion u. senkt die Aktivierungsenergie, ohne sich selbst zu verbrauchen."
  },
  {
    "id": "k7_ch_070",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie lautet das internationale chemische Symbol für das Element Eisen?",
    "answers": [
      "Symbol: Fe",
      "Symbol: Es",
      "Symbol: Er",
      "Symbol: Ei"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Symbol 'Fe' leitet sich vom lateinischen Begriff 'Ferrum' ab."
  },
  {
    "id": "k7_ch_071",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie lautet das internationale chemische Symbol für das Element Kupfer?",
    "answers": [
      "Symbol: Ku",
      "Symbol: Kp",
      "Symbol: Ko",
      "Symbol: Cu"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Symbol 'Cu' stammt von der lateinischen Bezeichnung 'Cuprum'."
  },
  {
    "id": "k7_ch_072",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie lautet das chemische Symbol für elementaren Sauerstoff als Gasmolekül?",
    "answers": [
      "Symbol: S2",
      "Symbol: O2",
      "Symbol: O3",
      "Symbol: SO"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sauerstoff kommt in der Luft als zweiatomiges Molekül $O_2$ vor."
  },
  {
    "id": "k7_ch_073",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie lautet das chemische Symbol für elementaren Wasserstoff als Gasmolekül?",
    "answers": [
      "Symbol: Wa",
      "Symbol: H2",
      "Symbol: HO",
      "Symbol: W2"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wasserstoffgas liegt als zweiatomiges Molekül $H_2$ (Hydrogenium) vor."
  },
  {
    "id": "k7_ch_074",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man eine chemische Reaktion, bei der aus mehreren Stoffen ein einziger neuer Stoff entsteht?",
    "answers": [
      "Reaktion: Kation",
      "Reaktion: Eruption",
      "Reaktion: Synthese",
      "Reaktion: Analyse"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Vereinigung von Elementen zu einer Verbindung heißt Synthese (Aufbau)."
  },
  {
    "id": "k7_ch_075",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man eine chemische Reaktion, bei der eine Verbindung in ihre Bestandteile zerlegt wird?",
    "answers": [
      "Reaktion: Synthese",
      "Reaktion: Fusion",
      "Reaktion: Hydrierung",
      "Reaktion: Analyse"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Spaltung einer Verbindung in einfachere Stoffe oder Elemente heißt Analyse (Zerlegung)."
  },
  {
    "id": "k7_ch_076",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches Reaktionsprodukt entsteht bei der exothermen Synthese von Kupfer u. Schwefel?",
    "answers": [
      "Das Kupfersulfat",
      "Das Kupfersulfid",
      "Das Kupferchlorid",
      "Das Kupferoxid"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kupfer u. Schwefel reagieren unter starkem Glühen zu schwarzem Kupfersulfid."
  },
  {
    "id": "k7_ch_077",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie nennt man Verbindungen, die bei der Reaktion eines Elements mit Sauerstoff entstehen?",
    "answers": [
      "Begriff: Die Sulfide",
      "Begriff: Die Chloride",
      "Begriff: Die Hydride",
      "Begriff: Die Oxide"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sauerstoffverbindungen bezeichnet man allgemein als Oxide (z. B. Eisenoxid)."
  },
  {
    "id": "k7_ch_078",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welche Nachweisreaktion dient der eindeutigen Identifikation von reinem Sauerstoffgas ($O_2$)?",
    "answers": [
      "Die Beilsteinprobe",
      "Die Knallgasprobe",
      "Die Kalkwasserprobe",
      "Die Glimmspanprobe"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein glimmender Holzspan flammt in reinem Sauerstoff wieder hell u. leuchtend auf."
  },
  {
    "id": "k7_ch_079",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Was beobachtet man bei der Verbrennung von dünnem Magnesiumband an der Luft?",
    "answers": [
      "Grellweißes Licht",
      "Grüner Rauch stinken",
      "Blaue Flamme ruhig",
      "Keine Veränderung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Magnesium verbrennt extrem exotherm unter Aussendung von intensiv gleißendem, weißem Licht zu Magnesiumoxid."
  },
  {
    "id": "k7_ch_080",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches weiße Pulver bildet sich als Reaktionsprodukt bei der Verbrennung von Magnesium an der Luft?",
    "answers": [
      "Das Magnesiumoxid",
      "Das Magnesiumchlorid",
      "Magnesiumcarbonat",
      "Das Magnesiumsulfid"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$ (sprödes, weißes Magnesiumoxid)."
  },

  // --- LUFT, SAUERSTOFF, VERBRENNUNG & REDOXREAKTIONEN (081 - 100) ---
  {
    "id": "k7_ch_081",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches Gas bildet mit ca. 78 Vol.-% den Hauptbestandteil der Erdatmosphäre?",
    "answers": [
      "Gas: Kohlenstoffdioxid",
      "Gas: Stickstoff N2",
      "Gas: Argon Ar",
      "Gas: Sauerstoff O2"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Trockene Luft besteht zu rund 78 % aus reaktionsträgem Stickstoff."
  },
  {
    "id": "k7_ch_082",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie hoch ist der prozentuale Anteil von Sauerstoff ($O_2$) in der natürlichen Atemluft etwa?",
    "answers": [
      "Anteil ca. 78 Vol.-%",
      "Anteil ca. 21 Vol.-%",
      "Anteil ca. 1 Vol.-%",
      "Anteil ca. 50 Vol.-%"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sauerstoff macht etwa 21 % des Volumens der Luft aus."
  },
  {
    "id": "k7_ch_083",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches Edelgas ist in der Atemluft mit knapp 1 Vol.-% vertreten?",
    "answers": [
      "Das Edelgas Neon",
      "Das Edelgas Helium",
      "Das Edelgas Argon",
      "Das Edelgas Krypton"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Argon ist mit ca. 0,93 Vol.-% das dritthäufigste Gas in unserer Atmosphäre."
  },
  {
    "id": "k7_ch_084",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie hoch ist der Kohlenstoffdioxid-Gehalt ($CO_2$) in der unveränderten Atemluft ungefähr?",
    "answers": [
      "Anteil ca. 4,00 %",
      "Anteil ca. 1,00 %",
      "Anteil ca. 0,40 %",
      "Anteil ca. 0,04 %"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der $CO_2$-Gehalt der reinen Luft liegt bei etwa 0,04 Vol.-% (ca. 420 ppm)."
  },
  {
    "id": "k7_ch_085",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welche drei Voraussetzungen müssen im 'Verbrennungsdreieck' zeitgleich für ein Feuer erfüllt sein?",
    "answers": [
      "Brennstoff, CO2, Hitze",
      "Holz, Funke, Wasser",
      "Gas, Druck, Katalys.",
      "Brennstoff, O2, Zündt."
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Feuer erfordert brennbaren Stoff, Sauerstoff u. das Erreichen der Zündtemperatur."
  },
  {
    "id": "k7_ch_086",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welche Nachweisreaktion nutzt man zur eindeutigen Identifikation von Wasserstoffgas ($H_2$)?",
    "answers": [
      "Die Kalkwasserprobe",
      "Die Glimmspanprobe",
      "Die Jodprobe Stärke",
      "Die Knallgasprobe"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Entzünden im Reagenzglas reagiert Wasserstoff mit Luft unter einem charakteristischen 'Plopp' oder Pfeifen."
  },
  {
    "id": "k7_ch_087",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie weist man das Gas Kohlenstoffdioxid ($CO_2$) chemisch im Labor nach?",
    "answers": [
      "Blaufärbung Papier",
      "Trübung Kalkwasser",
      "Pfeifender Knall",
      "Glimmspan entzündet"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Leitet man $CO_2$ in klares Kalkwasser, entsteht eine milchig-weiße Trübung aus Calciumcarbonat."
  },
  {
    "id": "k7_ch_088",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Mit welchem Reagenz weist man Spuren von Wasser ($H_2O$) durch Farbwechsel von weiß nach blau nach?",
    "answers": [
      "Kupfersulfat wasserfrei",
      "Konzentrierte Salzsäure",
      "Universalindikator",
      "Kalkwasser lösung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wasserfreies, weißes Kupfersulfat färbt sich bei Kontakt mit Wasser durch Bildung von Kristallwasser intensiv blau."
  },
  {
    "id": "k7_ch_089",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie lautet die allgemeine Definition einer 'Oxidation' in der Sekundarstufe I?",
    "answers": [
      "Sauerstoffabgabe",
      "Wasserstoffaufnahme",
      "Sauerstoffaufnahme",
      "Elektronenaufnahme"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Oxidation ist klassisch die chemische Reaktion eines Stoffes mit Sauerstoff."
  },
  {
    "id": "k7_ch_090",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Wie lautet die allgemeine Definition einer 'Reduktion' in der Sekundarstufe I?",
    "answers": [
      "Sauerstoffaufnahme",
      "Wasserstoffabgabe",
      "Verbrennung Flamme",
      "Sauerstoffabgabe"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Reduktion bezeichnet den Entzug von Sauerstoff aus einer Sauerstoffverbindung (Oxid)."
  },
  {
    "id": "k7_ch_091",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Was beschreibt eine chemische 'Redoxreaktion' im Kern?",
    "answers": [
      "Nur eine Neutralisierung",
      "Oxid. u. Red. zeitgleich",
      "Nur die reine Oxidation",
      "Nur die reine Reduktion"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Oxidation u. Reduktion finden stets gekoppelt u. gleichzeitig statt."
  },
  {
    "id": "k7_ch_092",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welcher Alltags-Vorgang stellt ein Beispiel für eine stille, langsame Oxidation dar?",
    "answers": [
      "Verdampfen Wasser",
      "Rosten von Eisen",
      "Explosion Dynamit",
      "Verbrennung von Gas"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Rosten reagiert Eisen langsam mit Sauerstoff u. Feuchtigkeit ohne Flammenschein."
  },
  {
    "id": "k7_ch_093",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Was versteht man unter einem 'Reduktionsmittel' in einer Redoxreaktion?",
    "answers": [
      "Stoff kühlt Gemisch",
      "Stoff gibt O2 ab",
      "Stoff verhindert O2",
      "Stoff zieht O2 an"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Reduktionsmittel entzieht dem Reaktionspartner Sauerstoff u. wird dabei selbst oxidiert."
  },
  {
    "id": "k7_ch_094",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Was versteht man unter einem 'Oxidationsmittel' in einer Redoxreaktion?",
    "answers": [
      "Stoff schützt Eisen",
      "Stoff nimmt O2 auf",
      "Stoff gibt O2 ab",
      "Stoff stoppt Wärme"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Oxidationsmittel überträgt Sauerstoff auf den Partner u. wird dabei selbst reduziert."
  },
  {
    "id": "k7_ch_095",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Was passiert bei der Gewaltsamen Trennung von Wasser durch elektrischen Strom (Elektrolyse)?",
    "answers": [
      "Zerfall N2 u. O2 (4:1)",
      "Reines Schmelzen Eis",
      "Zerfall H2 u. O2 (2:1)",
      "Verdampfen zu Dampf"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wasser zerfällt elektrochemisch im Volumenverhältnis 2:1 in Wasserstoff ($H_2$) u. Sauerstoff ($O_2$)."
  },
  {
    "id": "k7_ch_096",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welcher Stoff dient im Hochofenprozess traditionell als starkes Reduktionsmittel zur Eisenerzeugung?",
    "answers": [
      "Sand / Silizium",
      "Reiner Wasserstoff",
      "Kupfermetall pulv.",
      "Kohlenstoff / Koks"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kohlenstoff (Koks) u. Kohlenstoffmonoxid entziehen dem Eisenerz (Eisenoxid) den Sauerstoff."
  },
  {
    "id": "k7_ch_097",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Was zeichnet ein 'edles Metall' wie Gold oder Platin chemisch aus?",
    "answers": [
      "Brennt bei Raumtemp.",
      "Reagiert stark Wasser",
      "Reagiert kaum mit O2",
      "Rostet extrem rasch"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Edelmetalle besitzen eine sehr geringe Affinität zu Sauerstoff u. oxidieren unter normalen Bedingungen nicht."
  },
  {
    "id": "k7_ch_098",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welche Schutzschicht schützt edlere Metalle oder Aluminium vor fortschreitender Korrosion?",
    "answers": [
      "Passivierende Oxid.",
      "Feuchtes Salzgitter",
      "Verbrauchte Säure",
      "Fett freie Oberfläche"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine dichte, dünne Oxidschicht (Passivierung) schützt das darunterliegende Metall vor weiterem Sauerstoffangriff."
  },
  {
    "id": "k7_ch_099",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welches Gas entsteht bei der unvollständigen Verbrennung von kohlenstoffhaltigen Brennstoffen bei Sauerstoffmangel?",
    "answers": [
      "Kohlenstoffmonoxid",
      "Reiner Stickstoff",
      "Kohlenstoffdioxid",
      "Reines Wasserstoffgas"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei O2-Mangel entsteht das hochgiftige, geruchlose Gas Kohlenstoffmonoxid ($CO$)."
  },
  {
    "id": "k7_ch_100",
    "category": "k7_chemie",
    "area": "schule",
    "grade": 7,
    "subject": "chemie",
    "question": "Welche Hauptgase aus Abgasen reagieren mit Regenwasser zu saurem Regen?",
    "answers": [
      "Helium u. Neon Gas",
      "Sauerstoff u. Argon",
      "Kohlenmonoxid pur",
      "SO2 u. Stickoxide"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schwefeldioxid ($SO_2$) u. Stickstoffoxide ($NO_x$) bilden in der Atmosphäre Säuren (schweflige Säure, Salpetersäure)."
  }
];

// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K7_CHEMIE_QUESTIONS = K7_CHEMIE_QUESTIONS;
}