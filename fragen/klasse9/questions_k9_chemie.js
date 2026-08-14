// ================================================================
// KLASSE 9 - CHEMIE (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K9_CHEMIE_QUESTIONS = [
  // --- ATOMBAU & PERIODENSYSTEM (001 - 025) ---
  {
    "id": "k9_che_001",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Elementarteilchen befinden sich im Atomkern eines Atoms?",
    "answers": [
      "Protonen und Neutronen",
      "Protonen und Elektronen",
      "Neutronen und Elektronen",
      "Nur einzelne Elektronen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Atomkern besteht aus den positiv geladenen Protonen und den ungeladenen Neutronen."
  },
  {
    "id": "k9_che_002",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche elektrische Ladung tragen die Elektronen in der Atomhülle?",
    "answers": [
      "Eine negative Ladung",
      "Eine positive Ladung",
      "Eine neutrale Ladung",
      "Wechselnde Ladungen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Elektronen sind einfach negativ geladene Elementarteilchen."
  },
  {
    "id": "k9_che_003",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was gibt die Ordnungszahl eines Elements im Periodensystem an?",
    "answers": [
      "Anzahl der Protonen",
      "Anzahl der Schalen",
      "Masse des Atomkerns",
      "Anzahl der Neutronen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Ordnungszahl entspricht der Anzahl der Protonen im Kern (und der Elektronen im neutralen Atom)."
  },
  {
    "id": "k9_che_004",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was besagt die Periodennummer im Periodensystem der Elemente?",
    "answers": [
      "Anzahl der Schalen",
      "Anzahl Valenzelektronen",
      "Gesamtzahl Protonen",
      "Masse des Atoms"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Zeile (Periode) gibt die Anzahl der besetzten Elektronenschalen im Schalenmodell an."
  },
  {
    "id": "k9_che_005",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was bedeutet die Hauptgruppennummer für die Atome der jeweiligen Gruppe?",
    "answers": [
      "Anzahl Valenzelektronen",
      "Anzahl aller Schalen",
      "Gesamtzahl Neutronen",
      "Masse der Elektronen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Hauptgruppennummer gibt die Anzahl der Außenelektronen (Valenzelektronen) an."
  },
  {
    "id": "k9_che_006",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie viele Elektronen passen maximal auf die innerste Elektronenschale (K-Schale)?",
    "answers": [
      "Maximal 2 Elektronen",
      "Maximal 8 Elektronen",
      "Maximal 18 Elektronen",
      "Maximal 32 Elektronen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die K-Schale fasst nach der Formel $2n^2$ höchstens 2 Elektronen."
  },
  {
    "id": "k9_che_007",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie viele Elektronen finden maximal auf der zweiten Schale (L-Schale) Platz?",
    "answers": [
      "Maximal 8 Elektronen",
      "Maximal 2 Elektronen",
      "Maximal 18 Elektronen",
      "Maximal 10 Elektronen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die L-Schale fasst maximal 8 Elektronen."
  },
  {
    "id": "k9_che_008",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was beschreibt der Begriff 'Valenzelektronen' in der Chemie?",
    "answers": [
      "Elektronen auf Außenschale",
      "Elektronen im Atomkern",
      "Innere Paare Elektronen",
      "Gesamtzahl der Teilchen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Valenzelektronen sind die Elektronen auf der äußersten Schale, die chemische Reaktionen bestimmen."
  },
  {
    "id": "k9_che_009",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie nennt man die Elemente der VIII. Hauptgruppe im Periodensystem?",
    "answers": [
      "Die Edelgase Element",
      "Die Halogene Gruppe",
      "Die Alkalimetalle",
      "Die Erdalkalimetalle"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die VIII. Hauptgruppe umfasst die reaktionsträgen Edelgase (Helium, Neon, Argon usw.)."
  },
  {
    "id": "k9_che_010",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie heißen die Elemente der I. Hauptgruppe (außer Wasserstoff)?",
    "answers": [
      "Die Alkalimetalle",
      "Die Erdalkalimetalle",
      "Die Halogene Gruppe",
      "Die Chalkogene Stoffe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Lithium, Natrium, Kalium usw. bilden die Gruppe der hochreaktiven Alkalimetalle."
  },
  {
    "id": "k9_che_011",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie nennt man die Elemente der VII. Hauptgruppe (z. B. Fluor, Chlor, Brom)?",
    "answers": [
      "Die Halogene Stoffe",
      "Die Edelgase Gruppe",
      "Die Alkalimetalle",
      "Die Erdalkalimetalle"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die VII. Hauptgruppe enthält die Halogene ('Salzbildner')."
  },
  {
    "id": "k9_che_012",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was versteht man in der Chemie unter dem Begriff 'Oktettregel'?",
    "answers": [
      "Streben nach 8 Außenelek.",
      "Kern hat genau 8 Protonen",
      "Atome haben 8 Schalen",
      "Masse verachtfacht sich"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Atome streben durch Bindungen eine stabile Edelgaskonfiguration mit 8 Außenelektronen an."
  },
  {
    "id": "k9_che_013",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was unterscheidet Isotope eines chemischen Elements voneinander?",
    "answers": [
      "Verschiedene Neutronenzahl",
      "Verschiedene Protonenzahl",
      "Verschiedene Elektronen",
      "Verschiedene Schalen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Isotope haben dieselbe Protonenzahl (gleiches Element), aber unterschiedliche Neutronenzahlen."
  },
  {
    "id": "k9_che_014",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welches Atommodell führte Schalen für die Elektronenbewegung ein?",
    "answers": [
      "Bohrsches Atommodell",
      "Rutherfords Modell",
      "Daltons Kugelmodell",
      "Thomsons Rosinenmodell"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Niels Bohr erweiterte das Rutherfordsche Modell um gequantelte Elektronenschalen."
  },
  {
    "id": "k9_che_015",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was zeigte der Streuversuch von Ernest Rutherford im Jahr 1911?",
    "answers": [
      "Kern klein u. positiv",
      "Elektronen im Kern",
      "Atome sind unteilbar",
      "Masse verteilt im Raum"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Rutherford bewies, dass die Masse u. positive Ladung im winzigen Atomkern konzentriert sind."
  },
  {
    "id": "k9_che_016",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie verhält sich der Atomradius innerhalb einer Hauptgruppe von oben nach unten?",
    "answers": [
      "Radius wird größer",
      "Radius wird kleiner",
      "Radius bleibt exakt",
      "Radius schwankt stark"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Von oben nach unten kommt in jeder Periode eine neue Elektronenschale hinzu, der Radius wächst."
  },
  {
    "id": "k9_che_017",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie verändert sich der Atomradius innerhalb einer Periode von links nach rechts?",
    "answers": [
      "Radius wird kleiner",
      "Radius wird größer",
      "Radius bleibt unverändert",
      "Radius verdoppelt sich"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch die steigende Kernladung werden die Elektronen derselben Schale stärker angezogen; der Radius sinkt."
  },
  {
    "id": "k9_che_018",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was versteht man unter dem Begriff 'Ionisationsenergie'?",
    "answers": [
      "Energie um Elektron abzuspalten",
      "Energie um Proton aufzunehmen",
      "Energie bei Kernverschmelzung",
      "Wärme bei der Salzbildung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ionisationsenergie ist die Mindestenergie, die nötig ist, um ein Elektron von einem Atom zu trennen."
  },
  {
    "id": "k9_che_019",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Ladung besitzt ein Kation?",
    "answers": [
      "Eine positive Ladung",
      "Eine negative Ladung",
      "Gar keine Ladung",
      "Eine wechselnde Ladung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kationen entstehen durch Elektronenabgabe u. sind positiv geladen."
  },
  {
    "id": "k9_che_020",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Ladung besitzt ein Anion?",
    "answers": [
      "Eine negative Ladung",
      "Eine positive Ladung",
      "Gar keine Ladung",
      "Eine doppelte Ladung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Anionen entstehen durch Elektronenaufnahme u. sind negativ geladen."
  },
  {
    "id": "k9_che_021",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welches Symbol hat das Element Natrium im Periodensystem?",
    "answers": [
      "Chemiesymbol Na",
      "Chemiesymbol N",
      "Chemiesymbol K",
      "Chemiesymbol Ni"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Natrium trägt das Symbol Na (vom lateinischen Natrium)."
  },
  {
    "id": "k9_che_022",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welches Symbol hat das Element Kalium im Periodensystem?",
    "answers": [
      "Chemiesymbol K",
      "Chemiesymbol Ka",
      "Chemiesymbol Ca",
      "Chemiesymbol P"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kalium trägt das Symbol K (vom lateinischen Kalium)."
  },
  {
    "id": "k9_che_023",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie viele Valenzelektronen besitzt ein Sauerstoff-Atom (VI. Hauptgruppe)?",
    "answers": [
      "Exakt 6 Elektronen",
      "Exakt 8 Elektronen",
      "Exakt 2 Elektronen",
      "Exakt 4 Elektronen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sauerstoff steht in der VI. Hauptgruppe u. besitzt somit 6 Valenzelektronen."
  },
  {
    "id": "k9_che_024",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie viele Valenzelektronen besitzen die Halogene (VII. Hauptgruppe)?",
    "answers": [
      "Exakt 7 Elektronen",
      "Exakt 1 Elektron",
      "Exakt 8 Elektronen",
      "Exakt 5 Elektronen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Elemente der VII. Hauptgruppe besitzen 7 Außenelektronen u. benötigen noch 1 Elektron zum Oktett."
  },
  {
    "id": "k9_che_025",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was beschreibt die Massenzahl eines Atoms?",
    "answers": [
      "Protonen plus Neutronen",
      "Protonen plus Elektronen",
      "Nutronen plus Elektronen",
      "Anzahl der Schalen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Massenzahl $A$ ist die Gesamtzahl der schweren Kernbausteine (Protonen + Neutronen)."
  },

  // --- CHEMISCHE BINDUNGEN (026 - 050) ---
  {
    "id": "k9_che_026",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Zwischen welchen Teilchenarten bildet sich typischerweise eine Ionenbindung aus?",
    "answers": [
      "Metall und Nichtmetall",
      "Zwei Nichtmetallen",
      "Zwei Metallen Stoff",
      "Zwei Edelgasen Atom"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ionenbindungen entstehen durch Elektronenübertragung zwischen Metallen (Elektronenabgabe) u. Nichtmetallen (Elektronenaufnahme)."
  },
  {
    "id": "k9_che_027",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie nennt man die regelmäßige räumliche Anordnung von Anionen u. Kationen im Salz?",
    "answers": [
      "Das Ionengitter Krist",
      "Das Molekülgitter Stoff",
      "Das Metallgitter Körper",
      "Die ungeordnete Masse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In Salzen bilden gegenseitig angezogene Kationen u. Anionen ein dreidimensionales Ionengitter."
  },
  {
    "id": "k9_che_028",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Warum leiten feste Salzkristalle keinen elektrischen Strom?",
    "answers": [
      "Ionen fest im Gitter",
      "Salze haben keine Ionen",
      "Elektronen fehlen völlig",
      "Gitter ist zu heiß"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im festen Gitter sind die Ionen nicht frei beweglich. Erst in Schmelze oder Lösung leiten sie den Strom."
  },
  {
    "id": "k9_che_029",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wann leitet Kochsalz ($NaCl$) den elektrischen Strom?",
    "answers": [
      "In Schmelze u. Lösung",
      "Nur im festen Zustand",
      "Nur unter hohem Druck",
      "Niemals unter Kälte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Schmelzen oder Lösen im Wasser werden die Ionen frei beweglich u. können Ladung transportieren."
  },
  {
    "id": "k9_che_030",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Bindungsart liegt in einem Wasserstoff-Molekül ($H_2$) oder Methan ($CH_4$) vor?",
    "answers": [
      "Elektronenpaarbindung",
      "Eine reine Ionenbindung",
      "Eine feste Metallbindung",
      "Eine Van-der-Waals-Kraft"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nichtmetalle teilen sich Elektronenpaare, um Moleküle mit Atombindung (kovalente Bindung) zu bilden."
  },
  {
    "id": "k9_che_031",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was misst die Elektronegativität (EN) eines Atoms?",
    "answers": [
      "Fähigkeit Elektronen anzuziehen",
      "Anzahl aller Neutronen",
      "Geschwindigkeit der Elektronen",
      "Masse des Atomkerns"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Elektronegativität ist das Maß für das Bestreben eines Atoms, Bindungselektronen an sich zu ziehen."
  },
  {
    "id": "k9_che_032",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welches Element besitzt die höchste Elektronegativität im Periodensystem (EN = 4,0)?",
    "answers": [
      "Das Element Fluor",
      "Das Element Sauerstoff",
      "Das Element Chlor",
      "Das Element Francium"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Fluor ist das am stärksten elektronegative Element überhaupt."
  },
  {
    "id": "k9_che_033",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wann spricht man von einer 'polaren Elektronenpaarbindung'?",
    "answers": [
      "EN-Differenz zw. 0.5 u. 1.7",
      "EN-Differenz exakt Null",
      "EN-Differenz größer 2.0",
      "Keine Elektronen geteilt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei einer EN-Differenz von etwa $0,5$ bis $1,7$ ziehen die Bindungspartner das Elektronenpaar unterschiedlich stark an."
  },
  {
    "id": "k9_che_034",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Warum ist das Wasser-Molekül ($H_2O$) ein Dipol-Molekül?",
    "answers": [
      "Gewinkelt u. polare Bindung",
      "Linear u. unpolare Bindung",
      "Besteht aus Metallionen",
      "Hat keine Ladungsschwerpunkte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aufgrund der gewinkelten Bauweise u. der polaren O-H-Bindungen fallen der positive u. negative Ladungsschwerpunkt nicht zusammen."
  },
  {
    "id": "k9_che_035",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Bindungsart herrscht zwischen den Atomen in einem rein metallischen Festkörper?",
    "answers": [
      "Die Metallbindung",
      "Die Ionenbindung Salz",
      "Die kovalente Bindung",
      "Die Wasserstoffbrücke"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Metalle bestehen aus positiv geladenen Metallrümpsen u. frei beweglichen Elektronen ('Elektronengas')."
  },
  {
    "id": "k9_che_036",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie nennt man die frei beweglichen Elektronen im Metallgitter?",
    "answers": [
      "Das Elektronengas",
      "Die Ionenwolke Stoff",
      "Die feste Schale Atom",
      "Das Neutronengitter"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die abgegebenen Valenzelektronen bewegen sich frei zwischen den Atomrümpfen als Elektronengas."
  },
  {
    "id": "k9_che_037",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Eigenschaft von Metallen wird durch das delokalisierte Elektronengas erklärt?",
    "answers": [
      "Gute Leitfähigkeit Strom",
      "Geringe Dichte der Stoffe",
      "Transparenz für Licht",
      "Sprödes Brikett-Verhalten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die frei beweglichen Elektronen ermöglichen hervorragende elektrische Leitfähigkeit u. Wärmeleitfähigkeit."
  },
  {
    "id": "k9_che_038",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche zwischenmolekulare Kraft bewirkt den hohen Siedepunkt von Wasser ($100^\\circ C$)?",
    "answers": [
      "Wasserstoffbrücken",
      "Van-der-Waals-Kräfte",
      "Ionen-Anziehungskraft",
      "Kovalente Hauptbindung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wasserstoffbrückenbindungen sind starke Anziehungskräfte zwischen den O- u. H-Atomen benachbarter Wassermoleküle."
  },
  {
    "id": "k9_che_039",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie nennt man die schwachen Anziehungskräfte zwischen unpolaren Molekülen?",
    "answers": [
      "Van-der-Waals-Kräfte",
      "Wasserstoffbrücken",
      "Ionenanziehung Salz",
      "Metallische Bindung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Van-der-Waals-Kräfte entstehen durch spontane u. induzierte temporäre Dipole in unpolaren Molekülen."
  },
  {
    "id": "k9_che_040",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Moleküle lösen sich bevorzugt im polaren Lösemittel Wasser ('Ähnliches löst Ähnliches')?",
    "answers": [
      "Polare Stoffe u. Salze",
      "Unpolare Öle u. Fette",
      "Reiner Benzin Treibstoff",
      "Methangas Moleküle"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Polare Lösemittel wie Wasser lösen hervorragend andere polare Verbindungen u. Ionen (Salze)."
  },
  {
    "id": "k9_che_041",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie nennt man Stoffe, die hydrophob (wasserabweisend) u. lipophil (fettliebend) sind?",
    "answers": [
      "Unpolare Verbindungen",
      "Polare Verbindungen",
      "Salzartige Ionen",
      "Metallische Festkörper"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Unpolare Stoffe (z. B. Öle, Fette, Benzin) mischen sich nicht mit Wasser, aber gut mit Fetten."
  },
  {
    "id": "k9_che_042",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Bindungsart liegt im Kochsalzkristall ($NaCl$) vor?",
    "answers": [
      "Eine reine Ionenbindung",
      "Eine kovalente Bindung",
      "Eine flüssige Metallbindung",
      "Eine Van-der-Waals-Kraft"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$NaCl$ besteht aus $Na^+$-Kationen u. $Cl^-$-Anionen, die durch elektrostatische Ionenbindung zusammengehalten werden."
  },
  {
    "id": "k9_che_043",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welches Gas liegt in der Luft als zweiatomiges Molekül mit Dreifachbindung vor?",
    "answers": [
      "Stickstoff-Gas (N2)",
      "Sauerstoff-Gas (O2)",
      "Wasserstoff-Gas (H2)",
      "Chlor-Gas (Cl2)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Stickstoffmolekül $N_2$ besitzt eine sehr stabile Dreifachbindung ($N \\equiv N$)."
  },
  {
    "id": "k9_che_044",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie viele Elektronenpaare werden bei einer Doppelbindung geteilt?",
    "answers": [
      "Exakt 2 Elektronenpaare",
      "Exakt 1 Elektronenpaar",
      "Exakt 3 Elektronenpaare",
      "Exakt 4 Elektronenpaare"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Doppelbindung besteht aus 2 gemeinsamen Elektronenpaaren (insgesamt 4 Bindungselektronen)."
  },
  {
    "id": "k9_che_045",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie lautet die Summenformel von Magnesiumchlorid?",
    "answers": [
      "Formel MgCl2",
      "Formel MgCl",
      "Formel Mg2Cl",
      "Formel Mg3Cl2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$Mg^{2+}$ erfordert zwei $Cl^-$-Ionen zum Ladungsausgleich: $MgCl_2$."
  },
  {
    "id": "k9_che_046",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie lautet die Summenformel von Aluminiumoxid?",
    "answers": [
      "Formel Al2O3",
      "Formel AlO",
      "Formel AlO2",
      "Formel Al3O2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zwei $Al^{3+}$-Ionen ($+6$) u. drei $O^{2-}$-Ionen ($-6$) ergeben neutrales $Al_2O_3$."
  },
  {
    "id": "k9_che_047",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Warum lässt sich ein Salzkristall unter Hammerschlag nicht verformen, sondern zerspringt?",
    "answers": [
      "Gleichgeladene Ionen treffen aufeinander",
      "Elektronengas weicht sofort aus",
      "Ionen wandeln sich in Gase um",
      "Wasserstoffbrücken brechen ab"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Verschiebt man die Schichten, kommen gleich geladene Ionen nebeneinander u. stoßen sich schlagartig ab."
  },
  {
    "id": "k9_che_048",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Warum sind Metalle im Gegensatz zu Salzen gut verformbar (duktil)?",
    "answers": [
      "Elektronengas hält Rümpfe flexibel",
      "Atome schmelzen beim Schlag sofort",
      "Ionen stoßen sich kräftig ab",
      "Gitter enthält viel Hohlraum"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Verschieben der Metallrümpfe kittet das bewegliche Elektronengas den Zusammenhalt ohne Abstossung."
  },
  {
    "id": "k9_che_049",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche räumliche Struktur besitzt das Methan-Molekül ($CH_4$)?",
    "answers": [
      "Tetraedrische Struktur",
      "Gewinkelte Struktur",
      "Lineare Kettenstruktur",
      "Ebener Quadratbau"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die 4 Elektronenpaare stoßen sich maximal ab u. bilden eine Tetraederform (Winkel $109,5^\circ$)."
  },
  {
    "id": "k9_che_050",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Molekülgestalt hat Kohlenstoffdioxid ($CO_2$)?",
    "answers": [
      "Lineare Struktur",
      "Gewinkelte Struktur",
      "Pyramidale Struktur",
      "Tetraedrische Form"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die beiden Doppelbindungen ordnen sich im Winkel von $180^\circ$ linear an ($O=C=O$)."
  },

  // --- CHEMISCHE REAKTIONEN & STÖCHIOMETRIE (051 - 075) ---
  {
    "id": "k9_che_051",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was besagt das Gesetz von der Erhaltung der Masse bei chemischen Reaktionen?",
    "answers": [
      "Masse Edukte = Masse Produkte",
      "Masse steigt bei Verbrennung",
      "Masse halbiert sich immer",
      "Masse wird zu reiner Wärme"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei einer chemischen Reaktion geht keine Masse verloren; Atomzahl u. Gesamtmasse bleiben unverändert."
  },
  {
    "id": "k9_che_052",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie nennt man die Stoffe, die Vor der chemischen Reaktion vorliegen?",
    "answers": [
      "Die Edukte / Ausgangsstoffe",
      "Die Produkte / Endstoffe",
      "Die Katalysatoren Stoffe",
      "Die Isotope Elemente"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ausgangsstoffe einer chemischen Reaktion werden als Edukte bezeichnet."
  },
  {
    "id": "k9_che_053",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie nennt man eine chemische Reaktion, bei der Wärmeenergie an die Umgebung ABGEGEBEN wird?",
    "answers": [
      "Exotherme Reaktion",
      "Endotherme Reaktion",
      "Katalytische Reaktion",
      "Isotherme Reaktion"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Exotherme Reaktionen setzen Energie (Wärme, Licht) frei ($\\Delta H < 0$)."
  },
  {
    "id": "k9_che_054",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie nennt man eine chemische Reaktion, die ständig Energie aus der Umgebung AUFNEHMEN muss?",
    "answers": [
      "Endotherme Reaktion",
      "Exotherme Reaktion",
      "Synthetische Reaktion",
      "Spontane Explosion"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Endotherme Reaktionen verbrauchen Energie aus der Umgebung ($\\Delta H > 0$)."
  },
  {
    "id": "k9_che_055",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Funktion hat ein 'Katalysator' in einer chemischen Reaktion?",
    "answers": [
      "Senkt Aktivierungsenergie",
      "Wird selbst verbraucht",
      "Verändert Reaktionswärme",
      "Stoppt die Reaktion völlig"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Katalysator beschleunigt eine Reaktion durch Senkung der Aktivierungsenergie u. liegt danach unverändert vor."
  },
  {
    "id": "k9_che_056",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was beschreibt die Stoffmenge $n$ in der Chemie u. was ist ihre SI-Einheit?",
    "answers": [
      "Einheit: Mol (mol)",
      "Einheit: Gramm (g)",
      "Einheit: Liter (l)",
      "Einheit: Pascal (Pa)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Stoffmenge $n$ misst die Teilchenanzahl in der Einheit Mol."
  },
  {
    "id": "k9_che_057",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie viele Teilchen befinden sich in genau 1 Mol eines Stoffes (Avogadro-Konstante $N_A$)?",
    "answers": [
      "6.022 * 10^23 Teilchen",
      "3.000 * 10^10 Teilchen",
      "1.000 * 10^12 Teilchen",
      "6.022 * 10^15 Teilchen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$1\\,mol$ enthält exakt $6,022 \\cdot 10^{23}$ Teilchen ($N_A$)."
  },
  {
    "id": "k9_che_058",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie berechnet man die molare Masse $M$ aus Masse $m$ u. Stoffmenge $n$?",
    "answers": [
      "M = m / n",
      "M = m * n",
      "M = n / m",
      "M = m + n"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Molare Masse ist Masse pro Stoffmenge ($M = \\frac{m}{n}$, Einheit $g/mol$)."
  },
  {
    "id": "k9_che_059",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie groß ist das molare Normvolumen $V_m$ eines idealen Gases bei $0^\circ C$ u. $1013\,hPa$?",
    "answers": [
      "Volumen: 22.4 l/mol",
      "Volumen: 24.0 l/mol",
      "Volumen: 10.0 l/mol",
      "Volumen: 100 l/mol"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "1 Mol jedes idealen Gases nimmt unter Normbedingungen $22,4\\,l$ Volumen ein."
  },
  {
    "id": "k9_che_060",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was versteht man unter einer 'Oxidation' im erweiterter modernen Sinn?",
    "answers": [
      "Abgabe von Elektronen",
      "Aufnahme von Elektronen",
      "Aufnahme von Sauerstoff",
      "Abgabe von Protonen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Modern definiert ist Oxidation der Teilprozess der Elektronenabgabe."
  },
  {
    "id": "k9_che_061",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was versteht man unter einer 'Reduktion' im erweiterten Sinn?",
    "answers": [
      "Aufnahme von Elektronen",
      "Abgabe von Elektronen",
      "Abgabe von Sauerstoff",
      "Aufnahme von Wasserstoff"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Reduktion ist der Teilprozess der Elektronenaufnahme."
  },
  {
    "id": "k9_che_062",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was kennzeichnet eine 'Redoxreaktion'?",
    "answers": [
      "Elektronenübertragung",
      "Protonenübertragung",
      "Säure-Base-Reaktion",
      "Reine Kernspaltung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Redoxreaktion ist eine gekoppelte Elektronenübertragungsreaktion (Oxidation + Reduktion)."
  },
  {
    "id": "k9_che_063",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was macht ein 'Reduktionsmittel' in einer Redoxreaktion?",
    "answers": [
      "Gibt Elektronen ab",
      "Nimmt Elektronen auf",
      "Wird selbst reduziert",
      "Entzieht dem Stoff Wasser"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Reduktionsmittel reduziert den Partner, gibt dabei selbst Elektronen ab u. wird oxidiert."
  },
  {
    "id": "k9_che_064",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was macht ein 'Oxidationsmittel'?",
    "answers": [
      "Nimmt Elektronen auf",
      "Gibt Elektronen ab",
      "Wird selbst oxidiert",
      "Erzeugt reines Wasser"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Oxidationsmittel oxidiert den Partner, nimmt Elektronen auf u. wird selbst reduziert."
  },
  {
    "id": "k9_che_065",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Gleiche die Gleichung aus: $2 H_2 + O_2 \\rightarrow ?$",
    "answers": [
      "Produkt: 2 H2O",
      "Produkt: H2O2",
      "Produkt: H2O",
      "Produkt: 4 H2O"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zwei Wasserstoffmoleküle u. ein Sauerstoffmolekül reagieren zu zwei Wassermolekülen ($2 H_2 O$)."
  },
  {
    "id": "k9_che_066",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Oxidationszahl besitzt ein elementarer Stoff (z. B. $Fe$, $O_2$, $N_2$)?",
    "answers": [
      "Oxidationszahl Null",
      "Oxidationszahl Plus 1",
      "Oxidationszahl Minus 1",
      "Hängt vom Druck ab"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Atome im elementaren Zustand besitzen immer die Oxidationszahl 0."
  },
  {
    "id": "k9_che_067",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Oxidationszahl hat Fluor in fast all seinen Verbindungen?",
    "answers": [
      "Oxidationszahl -1",
      "Oxidationszahl +1",
      "Oxidationszahl -2",
      "Oxidationszahl 0"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Fluor ist das elektronegativste Element u. hat in Verbindungen stets die Oxidationszahl -I."
  },
  {
    "id": "k9_che_068",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Oxidationszahl hat Sauerstoff in den meisten organischen u. anorganischen Verbindungen?",
    "answers": [
      "Oxidationszahl -2",
      "Oxidationszahl -1",
      "Oxidationszahl +2",
      "Oxidationszahl 0"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sauerstoff hat in Verbindungen meist die Oxidationszahl -II (Ausnahme z. B. Peroxide)."
  },
  {
    "id": "k9_che_069",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was beschreibt eine 'Kompression' oder Verbrennung von Kohlenwasserstoffen ($CH_4 + 2 O_2 \\rightarrow ?$)?",
    "answers": [
      "CO2 und 2 H2O",
      "C und 2 H2O",
      "CO und H2",
      "CO2 und H2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Vollständige Verbrennung von Methan ergibt Kohlenstoffdioxid u. Wasser ($CO_2 + 2 H_2O$)."
  },
  {
    "id": "k9_che_070",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie nennt man die Reaktion von unedlen Metallen mit Sauerstoff unter Rost- oder Oxidbildung?",
    "answers": [
      "Eine Oxidation Stoff",
      "Eine Reduktion Stoff",
      "Eine Neutralisation",
      "Eine Elektrolyse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die chemische Reaktion mit Sauerstoff ist die klassische Oxidation."
  },
  {
    "id": "k9_che_071",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was versteht man unter dem Begriff 'Thermit-Reaktion' im Eisenbahnbau?",
    "answers": [
      "Reduktion von Eisenoxid durch Al",
      "Oxidation von Eisen durch Wasser",
      "Verbindung von Kupfer u. Zink",
      "Elektrolyse von Aluminium"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aluminium reduziert Eisenoxid exotherm zu flüssigem Eisen u. Aluminiumoxid ($Fe_2O_3 + 2 Al \\rightarrow 2 Fe + Al_2O_3$)."
  },
  {
    "id": "k9_che_072",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was gibt die Koeffizientenzahl VOR einer Molekülformel in der Reaktionsgleichung an?",
    "answers": [
      "Anzahl der Moleküle/Mol",
      "Anzahl der Atome im Molekül",
      "Masse in Kilogramm",
      "Ladung des Ions"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Große Zahlen vor Formeln (Koeffizienten) geben das Mengenverhältnis der Moleküle/Formeleinheiten an."
  },
  {
    "id": "k9_che_073",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was gibt die kleine tiefergestellte Zahl (Index) IN einer chemischen Formel an?",
    "answers": [
      "Anzahl Atome im Molekül",
      "Anzahl aller Moleküle",
      "Molare Masse des Stoffs",
      "Temperatur der Reaktion"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Index (z. B. 2 in $H_2O$) gibt das genaue Atomanzahl-Verhältnis im Molekül an."
  },
  {
    "id": "k9_che_074",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie lautet die molare Masse von Wasser ($H_2O$) gerundet ($H \\approx 1\\,g/mol, O \\approx 16\\,g/mol$)?",
    "answers": [
      "Masse: 18 g/mol",
      "Masse: 17 g/mol",
      "Masse: 33 g/mol",
      "Masse: 16 g/mol"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$M(H_2O) = 2 \\cdot 1 + 16 = 18\\,g/mol$."
  },
  {
    "id": "k9_che_075",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie lautet die molare Masse von Kohlenstoffdioxid ($CO_2$) ($C \\approx 12\\,g/mol, O \\approx 16\\,g/mol$)?",
    "answers": [
      "Masse: 44 g/mol",
      "Masse: 28 g/mol",
      "Masse: 32 g/mol",
      "Masse: 56 g/mol"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$M(CO_2) = 12 + 2 \\cdot 16 = 44\\,g/mol$."
  },

  // --- SÄUREN, LAUGEN, SALZE & ELEKTROCHEMIE (076 - 100) ---
  {
    "id": "k9_che_076",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie ist eine Säure nach der Definition von Johannes Brønsted definiert?",
    "answers": [
      "Ein Protonendonator",
      "Ein Protonenakzeptor",
      "Ein Elektronenpaar-Spender",
      "Ein reines Hydroxid-Ion"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Säuren sind Teilchen, die Wasserstoff-Ionen (Protonen $H^+$) abgeben können (Protonendonatoren)."
  },
  {
    "id": "k9_che_077",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie ist eine Base/Lauge nach Brønsted definiert?",
    "answers": [
      "Ein Protonenakzeptor",
      "Ein Protonendonator",
      "Ein Elektronenpaar-Empfänger",
      "Ein reines Gasmolekül"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Basen sind Teilchen, die Protonen ($H^+$) aufnehmen können (Protonenakzeptoren)."
  },
  {
    "id": "k9_che_078",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Ionen sind für die saure Wirkung einer wässrigen Lösung verantwortlich?",
    "answers": [
      "Oxonium-Ionen (H3O+)",
      "Hydroxid-Ionen (OH-)",
      "Natrium-Ionen (Na+)",
      "Chlorid-Ionen (Cl-)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Oxonium-Ionen ($H_3O^+$ bzw. vereinfacht $H^+$) verursachen saure Eigenschaften."
  },
  {
    "id": "k9_che_079",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Ionen sind für die alkalische (basische) Wirkung verantwortlich?",
    "answers": [
      "Hydroxid-Ionen (OH-)",
      "Oxonium-Ionen (H3O+)",
      "Sulfat-Ionen (SO4 2-)",
      "Nitrat-Ionen (NO3-)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Hydroxid-Ionen ($OH^-$) bewirken den alkalischen/basischen Charakter einer Lösung."
  },
  {
    "id": "k9_che_080",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welchen Wert hat der pH-Wert einer exakt neutralen wässrigen Lösung bei $25^\circ C$?",
    "answers": [
      "Exakter pH-Wert 7",
      "Exakter pH-Wert 0",
      "Exakter pH-Wert 14",
      "Exakter pH-Wert 1"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Neutrale Lösungen (z. B. reines Wasser) haben einen pH-Wert von 7."
  },
  {
    "id": "k9_che_081",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "In welchem Bereich liegt der pH-Wert saurer Lösungen?",
    "answers": [
      "pH-Wert kleiner als 7",
      "pH-Wert größer als 7",
      "pH-Wert exakt 7.0",
      "pH-Wert stets negativ"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Saure Lösungen weisen pH-Werte von unter 7 auf (0 bis $<7$)."
  },
  {
    "id": "k9_che_082",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "In welchem Bereich liegt der pH-Wert basischer (alkalischer) Lösungen?",
    "answers": [
      "pH-Wert größer als 7",
      "pH-Wert kleiner als 7",
      "pH-Wert exakt 0.0",
      "pH-Wert zw. 3 u. 5"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Basische Lösungen haben pH-Werte von über 7 bis 14."
  },
  {
    "id": "k9_che_083",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Farbe nimmt der Indikator Phenolphthalein in einer alkalischen Lösung an?",
    "answers": [
      "Färbt sich Pink/Violett",
      "Bleibt völlig farblos",
      "Färbt sich Knallgelb",
      "Färbt sich Tiefblau"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Phenolphthalein ist im Sauren farblos u. färbt sich im Basischen (pH $> 8,2$) intensitiv pink/magenta."
  },
  {
    "id": "k9_che_084",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Produkte entstehen bei der vollständigen Neutralisation von Salzsäure mit Natronlauge?",
    "answers": [
      "Wasser und Kochsalz",
      "Wasserstoff u. Sauerstoff",
      "Chlor gas u. Natrium",
      "Säure u. reines Gas"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$HCl + NaOH \\rightarrow H_2O + NaCl$. Es entstehen Wasser u. gelöstes Salz."
  },
  {
    "id": "k9_che_085",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie lautet die chemische Formel der Salzsäure?",
    "answers": [
      "Formel HCl",
      "Formel H2SO4",
      "Formel HNO3",
      "Formel CH3COOH"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Salzsäure ist die wässrige Lösung von Chlorwasserstoff ($HCl$)."
  },
  {
    "id": "k9_che_086",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie lautet die chemische Formel der Schwefelsäure?",
    "answers": [
      "Formel H2SO4",
      "Formel HCl",
      "Formel HNO3",
      "Formel H2CO3"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schwefelsäure besitzt die Summenformel $H_2SO_4$."
  },
  {
    "id": "k9_che_087",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie lautet die chemische Formel der Salpetersäure?",
    "answers": [
      "Formel HNO3",
      "Formel H2SO4",
      "Formel HCl",
      "Formel H3PO4"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Salpetersäure hat die Summenformel $HNO_3$."
  },
  {
    "id": "k9_che_088",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Wie heißt die Base $NaOH$ mit chemischem Namen?",
    "answers": [
      "Natriumhydroxid Base",
      "Kaliumhydroxid Base",
      "Calciumhydroxid Base",
      "Ammoniumhydroxid"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$NaOH$ heißt Natriumhydroxid (wässrig: Natronlauge)."
  },
  {
    "id": "k9_che_089",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welches Gas entsteht, wenn unedle Metalle (z. B. Zink) mit sauren Lösungen reagieren?",
    "answers": [
      "Wasserstoff-Gas (H2)",
      "Sauerstoff-Gas (O2)",
      "Chlor-Gas (Cl2)",
      "Kohlenstoffdioxid"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Unedle Metalle werden durch Säuren unter Bildung von Wasserstoffgas oxidiert ($Zn + 2 H^+ \\rightarrow Zn^{2+} + H_2$)."
  },
  {
    "id": "k9_che_090",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welcher Stoff entsteht bei der Nachweisreaktion von Kohlenstoffdioxid mit Kalkwasser?",
    "answers": [
      "Calciumcarbonat Trüb",
      "Natriumchlorid Salz",
      "Calciumhydroxid Lauge",
      "Schwefelsäure Lösung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$CO_2$ bildet mit Kalkwasser $Ca(OH)_2$ schwerlösliches Calciumcarbonat ($CaCO_3$), das als weißer Niederschlag trübt."
  },
  {
    "id": "k9_che_091",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was versteht man unter einer 'Elektrolyse' in der Chemie?",
    "answers": [
      "Zersetzung durch Strom",
      "Reaktion durch Wärme",
      "Lösung von Salz in Wasser",
      "Mischung zweier Gase"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Elektrolyse ist die erzwungene chemische Umwandlung/Zersetzung durch Anlegen einer elektrischen Gleichspannung."
  },
  {
    "id": "k9_che_092",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Reaktion findet bei einer Elektrolyse an der positiv geladenen Anode statt?",
    "answers": [
      "Die Oxidation Anode",
      "Die Reduktion Anode",
      "Die Neutralisation",
      "Die Fällung des Salzes"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "An der Anode geben Anionen Elektronen ab; dort findet stets die Oxidation statt."
  },
  {
    "id": "k9_che_093",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Reaktion findet bei einer Elektrolyse an der negativ geladenen Kathode statt?",
    "answers": [
      "Die Reduktion Kathode",
      "Die Oxidation Kathode",
      "Die Säurebildung",
      "Die Verbrennung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "An der Kathode nehmen Kationen Elektronen auf; dort findet stets die Reduktion statt."
  },
  {
    "id": "k9_che_094",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was beschreibt ein 'Galvanisches Element' (z. B. Daniell-Element oder Batterie)?",
    "answers": [
      "Chemische in elektrische Energie",
      "Elektrische in chemische Energie",
      "Thermische in mechanische Energie",
      "Atomare in thermische Energie"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Galvanisches Element wandelt freiwillig ablaufende chemische Redoxreaktionen in elektrische Energie um."
  },
  {
    "id": "k9_che_095",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Aus welchen zwei Halbzellen besteht das klassische Daniell-Element?",
    "answers": [
      "Zink- und Kupferhalbzelle",
      "Eisen- u. Aluminiumzelle",
      "Silber- u. Goldhalbzelle",
      "Blei- u. Nickelhalbzelle"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Daniell-Element besteht aus einer $Zn/Zn^{2+}$-Halbzelle u. einer $Cu/Cu^{2+}$-Halbzelle."
  },
  {
    "id": "k9_che_096",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welches Metall bildet im Daniell-Element die Anode (Elektronenquelle/Donator)?",
    "answers": [
      "Das unedlere Zink (Zn)",
      "Das edlere Kupfer (Cu)",
      "Die Platin-Elektrode",
      "Der Kohlenstoffstab"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das unedlere Zink wird oxidiert ($Zn \\rightarrow Zn^{2+} + 2e^-$) u. bildet den Minuspol (Anode)."
  },
  {
    "id": "k9_che_097",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was ordnet die 'Elektrochemische Spannungsreihe' der Metalle an?",
    "answers": [
      "Streben Elektronen abzugeben",
      "Masse u. Dichte der Metalle",
      "Schmelztemperatur Metalle",
      "Härte nach der Mohs-Skala"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sie ordnet Elemente nach ihrem Standard-Redoxpotenzial u. ihrer Neigung zur Elektronenabgabe (Edel- bzw. Unedelmengen)."
  },
  {
    "id": "k9_che_098",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Metalle bezeichnet man als 'unedle Metalle'?",
    "answers": [
      "Geben leicht Elektronen ab",
      "Geben schwer Elektronen ab",
      "Reagieren nie mit Säuren",
      "Kommen nur gediegen vor"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Unedle Metalle (z. B. $Na$, $Mg$, $Zn$, $Fe$) oxidieren leicht u. reagieren mit Säuren unter $H_2$-Entwicklung."
  },
  {
    "id": "k9_che_099",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Metalle bezeichnet man als 'edle Metalle' (z. B. Gold, Platin, Silber)?",
    "answers": [
      "Geben schwer Elektronen ab",
      "Oxidieren sehr rasch an Luft",
      "Lösen sich in Wasser auf",
      "Sind stets hochradioaktiv"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Edelmetalle haben ein positives Standardpotenzial, geben nur schwer Elektronen ab u. korrodieren kaum."
  },
  {
    "id": "k9_che_0100",
    "category": "k9_chemie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Was dient in Batterien u. Akkus als leitende Verbindung zwischen den Elektrodenraum-Halbzellen?",
    "answers": [
      "Der Elektrolyt / Diaphragma",
      "Ein reiner Holzbalken",
      "Eine Kumpferdrahtspule",
      "Eine feine Plastikfolie"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Elektrolyt (oder Salzbrücke/Diaphragma) ermöglicht den Ionenstrom zum Ladungsausgleich zwischen den Halbzellen."
  },
  {"id":"k9ch101","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Ordnungszahl = Anzahl …","answers":["Neutronen","Protonen","Elektronen Ion","Nucleonen"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Protonen."},
  {"id":"k9ch102","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Ionenbindung typisch …","answers":["Non-Non","Metall-Nonmetall","Metall-Metall","Edelgas"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Salz."},
  {"id":"k9ch103","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"pH 14 eher …","answers":["sauer","neutral","basisch","pH7"],"correct":2,"difficulty":"mittel","points":10,"explanation":"basisch."},
  {"id":"k9ch104","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Neutralisation → …","answers":["Gas","Salz+Wasser","Metall","Licht"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Salz+Wasser."},
  {"id":"k9ch105","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Oxidation: Elektronen…","answers":["Aufnahme","Abgabe","Neutron","Photon"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Abgabe."},
  {"id":"k9ch106","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Mol misst …","answers":["kg","Stoffmenge","Liter","Kelvin"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Stoffmenge."},
  {"id":"k9ch107","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Katalysator … EA.","answers":["erhöht","senkt","löscht","ignoriert"],"correct":1,"difficulty":"mittel","points":10,"explanation":"senkt."},
  {"id":"k9ch108","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Edelgase sind … reaktiv.","answers":["sehr","wenig","immer","mit Wasser"],"correct":1,"difficulty":"mittel","points":10,"explanation":"wenig."},
  {"id":"k9ch109","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Säure gibt H⁺ ab.","answers":["kein Ergebnis","Brønsted","OH⁻","e⁻"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Brønsted."},
  {"id":"k9ch110","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"c = n/V in …","answers":["kg/L","mol/L","m/s","Pa"],"correct":1,"difficulty":"mittel","points":10,"explanation":"mol/L."},
  {"id":"k9ch111","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Exotherm: Wärme …","answers":["aufgenommen","abgegeben","gelöscht","Masse"],"correct":1,"difficulty":"mittel","points":10,"explanation":"abgegeben."},
  {"id":"k9ch112","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Verbrennung C → …","answers":["CO","CO₂","C","O₂"],"correct":1,"difficulty":"mittel","points":10,"explanation":"CO₂."},
  {"id":"k9ch113","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Elektrolyse braucht …","answers":["Druck","Strom","Magnet","Licht"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Strom."},
  {"id":"k9ch114","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Massenerhaltung: Masse …","answers":["weg","bleibt","doppelt","Licht"],"correct":1,"difficulty":"mittel","points":10,"explanation":"bleibt."},
  {"id":"k9ch115","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Wasser ist …","answers":["unpolar","polar","ionisch","metallisch"],"correct":1,"difficulty":"mittel","points":10,"explanation":"polar."},
  {"id":"k9ch116","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"PSE Gruppe = …","answers":["Zeile","Spalte","Block","Ion"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Spalte."},
  {"id":"k9ch117","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Isotope gleiche …","answers":["Massenzahl","Ordnungszahl","Neutronen","Dichte"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Z."},
  {"id":"k9ch118","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Reduktion: e⁻ …","answers":["Abgabe","Aufnahme","Neutron","Photon"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Aufnahme."},
  {"id":"k9ch119","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Endotherm ΔH …","answers":["<0",">0","=0","∞"],"correct":1,"difficulty":"mittel","points":10,"explanation":">0."},
  {"id":"k9ch120","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Kohlenwasserstoff: …","answers":["Fe","C und H","nur O","U"],"correct":1,"difficulty":"mittel","points":10,"explanation":"C/H."},
  {"id":"k9ch121","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Indikator zeigt …","answers":["Masse","pH","Druck","Temp"],"correct":1,"difficulty":"mittel","points":10,"explanation":"pH."},
  {"id":"k9ch122","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Ionengitter ist …","answers":["frei","starr","gasförmig","flüssig"],"correct":1,"difficulty":"mittel","points":10,"explanation":"starr."},
  {"id":"k9ch123","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"EN hoch bei …","answers":["Metallen","Nonmetallen","Edelgasen","Neutronen"],"correct":1,"difficulty":"mittel","points":10,"explanation":"F/O."},
  {"id":"k9ch124","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Le Chatelier: wirkt …","answers":["verstärkend","entgegen","ignorierend","löschend"],"correct":1,"difficulty":"mittel","points":10,"explanation":"entgegen."},
  {"id":"k9ch125","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Organik Kern: …","answers":["Fe","C","U","He"],"correct":1,"difficulty":"mittel","points":10,"explanation":"C."},
  {"id":"k9ch126","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Salz in Wasser → …","answers":["Moleküle","Ionen","Atome","Photonen"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Ionen."},
  {"id":"k9ch127","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Aktivierungsenergie = …","answers":["Produkt","Schwelle","Temp","Druck"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Schwelle."},
  {"id":"k9ch128","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"Gruppe 17 = …","answers":["Alkali","Halogene","Edelgase","Erdalkali"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Halogene."},
  {"id":"k9ch129","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"pV=nRT für …","answers":["Festkörper","ideales Gas","Flüssigkeit","Plasma"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Gas."},
  {"id":"k9ch130","category":"k9_chemie","area":"schule","grade":9,"subject":"chemie","topic":"erweiterung","question":"HCl dissoziiert zu …","answers":["Cl₂","H⁺ und Cl⁻","H₂","O₂"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Ionen."}
];
// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K9_CHEMIE_QUESTIONS = K9_CHEMIE_QUESTIONS;
}