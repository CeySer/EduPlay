// ================================================================
// KLASSE 7 - DEUTSCH (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K7_DEUTSCH_QUESTIONS = [
  // --- AKTIV & PASSIV (001 - 020) ---
  {
    "id": "k7_de_001",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was steht beim Passivsatz im Mittelpunkt der Aussage?",
    "answers": [
      "Das genannte Subjekt",
      "Die Handlung selbst",
      "Die passende Zeitform",
      "Der ausführende Täter"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Passiv steht das Geschehen oder das Objekt im Fokus, nicht der Handelnde."
  },
  {
    "id": "k7_de_002",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Hilfsverb benötigt man zur Bildung des Vorgangspassivs?",
    "answers": [
      "Das Hilfsverb haben",
      "Das Hilfsverb sein",
      "Das Hilfsverb werden",
      "Das Hilfsverb sollen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Vorgangspassiv wird mit einer Form von 'werden' u. dem Partizip II gebildet."
  },
  {
    "id": "k7_de_003",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Hilfsverb benötigt man zur Bildung des Zustandspassivs?",
    "answers": [
      "Das Hilfsverb werden",
      "Das Hilfsverb bleiben",
      "Das Hilfsverb haben",
      "Das Hilfsverb sein"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Zustandspassiv drückt ein Ergebnis aus u. nutzt 'sein' + Partizip II."
  },
  {
    "id": "k7_de_004",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wandle in das Vorgangspassiv um: 'Der Mechaniker repariert das Auto.'",
    "answers": [
      "Das Auto wurde repariert",
      "Das Auto wird repariert",
      "Das Auto war repariert",
      "Das Auto ist repariert"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Präsens Aktiv ('repariert') wird zu Präsens Passiv ('wird repariert')."
  },
  {
    "id": "k7_de_005",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Satzglied des Aktivsatzes wird im Passivsatz meist zum Subjekt?",
    "answers": [
      "Das Genitivobjekt",
      "Die Adverbial-Angabe",
      "Das Akkusativobjekt",
      "Das Prädikat selber"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Akkusativobjekt des Aktivsatzes ('den Ball') wird im Passiv zum Subjekt ('Der Ball')."
  },
  {
    "id": "k7_de_006",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "In welcher Zeitform steht: 'Das Gebäude wurde gestern gereinigt'?",
    "answers": [
      "Präteritum Passiv",
      "Präsens Passiv",
      "Plusquamperfekt P.",
      "Perfekt Passiv"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'wurde' ist das Präteritum von 'werden', kombiniert mit Partizip II ('gereinigt')."
  },
  {
    "id": "k7_de_007",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "In welcher Zeitform steht: 'Die Aufgabe ist gelöst worden'?",
    "answers": [
      "Präsens Passiv",
      "Futur I Passiv",
      "Präteritum Passiv",
      "Perfekt Passiv"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'ist ... worden' bildet das Perfekt des Vorgangspassivs."
  },
  {
    "id": "k7_de_008",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Satz enthält ein Zustandspassiv?",
    "answers": [
      "Man öffnet das Fenster",
      "Das Fenster ist geöffnet",
      "Das Fenster öffnet sich",
      "Das Fenster wird geöffnet"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'ist geöffnet' beschreibt den erreichten Zustand nach dem Vorgang."
  },
  {
    "id": "k7_de_009",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie lautet das Vorgangspassiv im Futur I für: 'Er liest das Buch'?",
    "answers": [
      "Das Buch ist gelesen worden",
      "Das Buch wird bald gelesen",
      "Das Buch wird gelesen werden",
      "Das Buch wurde jetzt gelesen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Futur I Passiv bildet man mit 'werden' + Partizip II + 'werden'."
  },
  {
    "id": "k7_de_010",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie nennt man ein Passiv, in dem kein handelndes Subjekt genannt wird?",
    "answers": [
      "Unvollständiges Passiv",
      "Indirektes Zustandspassiv",
      "Subjektloses Passiv",
      "Inaktives Vorgangspassiv"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei 'Es wird gelacht' gibt es kein logisches Subjekt."
  },
  {
    "id": "k7_de_011",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wandle in Aktiv um: 'Der Ball wird vom Schüler geworfen.'",
    "answers": [
      "Der Schüler hat geworfen",
      "Der Schüler warf Ball",
      "Der Schüler muss werfen",
      "Der Schüler wirft Ball"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Täter ('vom Schüler') wird im Aktivsatz wieder zum Subjekt."
  },
  {
    "id": "k7_de_012",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Durch welche Präposition wird der Täter im Passivsatz oft angefügt?",
    "answers": [
      "Durch Präposition trotz",
      "Durch Präposition ohne",
      "Durch Präposition gegen",
      "Durch Präposition von"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Verursacher wird meist mit der Präposition 'von' (oder 'durch') ergänzt."
  },
  {
    "id": "k7_de_013",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wann nutzt man das Passiv in Sachtexten vorrangig?",
    "answers": [
      "Bei wörtlicher Rede stets",
      "Bei sachlicher Betonung",
      "Bei Gefühlsbeschreibungen",
      "Bei lebhafter Erzählung"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Passiv wirkt sachlich, neutral u. hebt den Ablauf oder Prozess hervor."
  },
  {
    "id": "k7_de_014",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Zeitform liegt vor: 'Das Tor war geschossen worden'?",
    "answers": [
      "Präteritum im Aktivsatz",
      "Futur II im Passivsatz",
      "Plusquamperfekt Passiv",
      "Perfekt in Aktivform"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'war ... worden' bildet das Plusquamperfekt des Passivs."
  },
  {
    "id": "k7_de_015",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Satz steht im Aktiv?",
    "answers": [
      "Der Hund bellt laut",
      "Der Hund ist gebadet",
      "Der Hund wird gebadet",
      "Der Hund wurde belohnt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Aktiv führt das Subjekt ('Der Hund') die Handlung selbst aus."
  },
  {
    "id": "k7_de_016",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie lautet die Partizip-II-Form des Verbs 'schreiben'?",
    "answers": [
      "Form: geschreibt",
      "Form: geschrieben",
      "Form: geschriebenem",
      "Form: schreibend"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Starke Verben bilden das Partizip II mit 'ge-' u. Endung '-en'."
  },
  {
    "id": "k7_de_017",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Ist das Verb 'schlafen' problemlos in ein Vorgangspassiv setzbar?",
    "answers": [
      "Ja, nur im Präsens",
      "Ja, in allen Zeiten",
      "Nein, da intrakitiv",
      "Ja, nur mit Objekt"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Intransitive Verben ohne Akkusativobjekt bilden meist kein persönliches Passiv."
  },
  {
    "id": "k7_de_018",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Hilfsverb zeigt im Passiv die grammatische Zeit an?",
    "answers": [
      "Das Partizip II Verb",
      "Das Hauptverb allein",
      "Das Hilfsverb werden",
      "Das Modalverb stets"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Hilfsverb 'werden' passt seine Form an Tempus u. Person an."
  },
  {
    "id": "k7_de_019",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was unterscheidet Vorgangs- u. Zustandspassiv im Kern?",
    "answers": [
      "Täter versus Opfer Rolle",
      "Gegenwart versus Zukunft",
      "Aktiv versus Nebensatz",
      "Prozess versus Ergebnis"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Vorgangspassiv beschreibt einen Ablauf, Zustandspassiv das fertige Resultat."
  },
  {
    "id": "k7_de_020",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Satz drückt ein Vorgangspassiv im Präsens aus?",
    "answers": [
      "Der Brief wird getippt",
      "Der Brief wurde getippt",
      "Der Brief ist getippt",
      "Der Brief war getippt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'wird getippt' stellt die laufende Handlung im Präsens dar."
  },

  // --- KONJUNKTIV I & II, INDIREKTE REDE (021 - 040) ---
  {
    "id": "k7_de_021",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wozu dient der Konjunktiv I hauptsächlich in Texten?",
    "answers": [
      "Für Befehle und Anordnung",
      "Für reine Tatsachenberichte",
      "Für die indirekte Rede",
      "Für Wünsche und Träumereien"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Konjunktiv I wird genutzt, um Aussagen anderer neutral wiederzugeben."
  },
  {
    "id": "k7_de_022",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wozu dient der Konjunktiv II hauptsächlich?",
    "answers": [
      "Für Befehlsformen Allt.",
      "Für Unreales u. Wünsche",
      "Für feste Tatsachen",
      "Für direkte Zitate stets"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Konjunktiv II drückt Ausgedachtes, Träume u. Irreales aus."
  },
  {
    "id": "k7_de_023",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie lautet der Konjunktiv I von 'er hat'?",
    "answers": [
      "Form: er habe",
      "Form: er hätte",
      "Form: er habend",
      "Form: er hat"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Konjunktiv I leitet sich vom Präsensstamm ab: 'er habe'."
  },
  {
    "id": "k7_de_024",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie lautet der Konjunktiv II von 'er hat'?",
    "answers": [
      "Form: er hätte",
      "Form: er habe",
      "Form: er hat",
      "Form: er würde haben"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Konjunktiv II leitet sich vom Präteritum ab u. bildet oft einen Umlaut: 'er hätte'."
  },
  {
    "id": "k7_de_025",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wann ersetzt man den Konjunktiv I durch den Konjunktiv II?",
    "answers": [
      "Bei Vergangenheit im Nebensatz",
      "Bei wörtlicher direkter Rede",
      "Bei Identität zum Indikativ",
      "Bei Fragen im Hauptsatz stets"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Entspricht der Konjunktiv I der normalen Form (Indikativ), weicht man auf Konjunktiv II aus."
  },
  {
    "id": "k7_de_026",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie lautet die Ersatzform mit 'würde' für: 'ich ginge'?",
    "answers": [
      "ich würde gehen",
      "ich habe gegangen",
      "ich bin gegangen",
      "ich werde gehen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die umschreibende Form des Konjunktivs II besteht aus 'würde' + Infinitiv."
  },
  {
    "id": "k7_de_027",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Stehen in der indirekten Rede Anführungszeichen?",
    "answers": [
      "Ja, am Satzanfang stets",
      "Ja, bei jedem Wortzitat",
      "Ja, vor dem Nebensatz",
      "Nein, niemals Zeichen"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Gegensatz zur direkten Rede entfallen Anführungszeichen in der indirekten Rede."
  },
  {
    "id": "k7_de_028",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wandle in die indirekte Rede um: Er sagt: 'Ich bin müde.'",
    "answers": [
      "Er sagt, er war müde",
      "Er sagt, ich bin müde",
      "Er sagt: Ich sei müde",
      "Er sagt, er sei müde"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pronomen ('ich' -> 'er') u. Verbform ('bin' -> 'sei') werden angepasst."
  },
  {
    "id": "k7_de_029",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie lautet der Konjunktiv I von 'sie kommen' (3. Person Plural)?",
    "answers": [
      "Form: sie würden kommen",
      "Form: sie kommen (Ind)",
      "Form: sie kämen (K II)",
      "Form: sie komme (Sg)"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da Konjunktiv I ('kommen') wie Indikativ klingt, nutzt man Ersatz 'kämen'."
  },
  {
    "id": "k7_de_030",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Satz drückt einen unerfüllbaren Wunsch aus?",
    "answers": [
      "Er sagt, er habe Zeit.",
      "Wenn ich doch Zeit hätte!",
      "Ich habe heute viel Zeit.",
      "Vielleicht habe ich Zeit."
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Unerfüllbare Wünsche stehen im Konjunktiv II ('hätte')."
  },
  {
    "id": "k7_de_031",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie nennt man den Aussagemodus der Wirklichkeit (z. B. 'Er läuft')?",
    "answers": [
      "Der Imperativ",
      "Der Konjunktiv I",
      "Der Indikativ",
      "Der Infinitiv"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Indikativ ist die Grundform der Wirklichkeit u. Tatsachen."
  },
  {
    "id": "k7_de_032",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie lautet der Konjunktiv II des Verbs 'sein' für 'er'?",
    "answers": [
      "Form: er sei",
      "Form: er ist",
      "Form: er wäre",
      "Form: er würde sein"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Konjunktiv I lautet 'er sei', Konjunktiv II lautet 'er wäre'."
  },
  {
    "id": "k7_de_033",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie lautet der Konjunktiv I des Verbs 'sein' für 'er'?",
    "answers": [
      "Form: er wäre",
      "Form: er seist",
      "Form: er sei",
      "Form: er ist"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beispiel: 'Der Zeuge berichtet, er sei vor Ort gewesen.'"
  },
  {
    "id": "k7_de_034",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was passiert mit Orts- u. Zeitangaben beim Wechsel in die indirekte Rede?",
    "answers": [
      "Sie rücken an den Start",
      "Sie werden gelöscht",
      "Sie werden angepasst",
      "Sie bleiben identisch"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aus 'heute hier' wird in der indirekten Rede meist 'an jenem Tag dort'."
  },
  {
    "id": "k7_de_035",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Konjunktion leitet oft einen indirekten Fragesatz ein?",
    "answers": [
      "Die Konjunktion ob",
      "Die Konjunktion weil",
      "Die Konjunktion obwohl",
      "Die Konjunktion dass"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ja/Nein-Fragen werden indirekt mit 'ob' eingeleitet."
  },
  {
    "id": "k7_de_036",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie lautet der Konjunktiv II von 'wissen' für 'ich'?",
    "answers": [
      "Form: ich weiß",
      "Form: ich wusste",
      "Form: ich wüsste",
      "Form: ich wisse"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Präteritumsstamm 'wusste' bildet den Konjunktiv II 'wüsste'."
  },
  {
    "id": "k7_de_037",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Verbform liegt vor in: 'Wenn er gelernt hätte, ...'?",
    "answers": [
      "Konjunktiv II Vergangenheit",
      "Imperativ in höflicher Form",
      "Indikativ im Plusquamperfekt",
      "Konjunktiv I der Gegenwart"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Irreale Bedingungen der Vergangenheit nutzen 'hätte/wäre' + Partizip II."
  },
  {
    "id": "k7_de_038",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Hilfsverb bildet die würde-Ersatzform?",
    "answers": [
      "Das Hilfsverb können",
      "Das Hilfsverb werden",
      "Das Hilfsverb müssen",
      "Das Hilfsverb wollen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'würde' ist selbst die Konjunktiv-II-Form des Verbs 'werden'."
  },
  {
    "id": "k7_de_039",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Satz steht in der indirekten Rede?",
    "answers": [
      "Passt das jetzt wirklich?",
      "Sie meint, das passe",
      "Das passt mir sehr gut!",
      "Sie meint: Das passt"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'passe' ist Konjunktiv I zur sachlichen Redewiedergabe."
  },
  {
    "id": "k7_de_040",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie nennt man die Verbgruppe: Indikativ, Konjunktiv u. Imperativ?",
    "answers": [
      "Die drei Modi des Verbs",
      "Die Aktiv-Passiv-Formen",
      "Die grammatischen Zeiten",
      "Die drei Genus-Formen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Modus (Plural: Modi) bezeichnet die Aussageweise des Verbs."
  },

  // --- SATZGEFÜGE, NEBENSÄTZE & KOMMASORTEN (041 - 060) ---
  {
    "id": "k7_de_041",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter einem 'Satzgefüge'?",
    "answers": [
      "Ein einzelner Hauptsatz",
      "Hauptsatz plus Nebensatz",
      "Zwei Hauptsätze zusammen",
      "Ein unvollständiger Satz"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Satzgefüge (Hypotaxe) besteht aus mindestens einem Haupt- u. Nebensatz."
  },
  {
    "id": "k7_de_042",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter einer 'Satzreihe'?",
    "answers": [
      "Hauptsatz plus Nebensatz",
      "Satz ohne ein Prädikat",
      "Hauptsatz plus Hauptsatz",
      "Reiner Nebensatz allein"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Satzreihe (Parataxe) verbindet gleichrangige Hauptsätze."
  },
  {
    "id": "k7_de_043",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wo steht das konjugierte Verb in einem deutschen Nebensatz?",
    "answers": [
      "Direkt an erster Stelle",
      "An der zweiten Stelle",
      "Vor der Konjunktion",
      "Ganz am Satzende"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Typisches Merkmal deutscher Nebensätze ist das Verb an letzter Stelle."
  },
  {
    "id": "k7_de_044",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Funktion erfüllt ein Kausalsatz als Nebensatz?",
    "answers": [
      "Er nennt einen Gegengrund",
      "Er nennt ein Ziel/Zweck",
      "Er nennt eine Bedingung",
      "Er nennt einen Grund"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kausalsätze antworten auf 'Warum?' u. nutzen Bindewörter wie 'weil' oder 'da'."
  },
  {
    "id": "k7_de_045",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Konjunktion leitet einen Konditionalsatz (Bedingungssatz) ein?",
    "answers": [
      "Die Konjunktion weil",
      "Die Konjunktion obwohl",
      "Die Konjunktion wenn",
      "Die Konjunktion sodass"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Konditionalsätze nennen eine Voraussetzung ('wenn', 'falls')."
  },
  {
    "id": "k7_de_046",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Konjunktion leitet einen Konzessivsatz (Einräumungssatz) ein?",
    "answers": [
      "Die Konjunktion obwohl",
      "Die Konjunktion indem",
      "Die Konjunktion nachdem",
      "Die Konjunktion damit"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Konzessivsätze nennen einen Gegengrund ('obwohl', 'obgleich')."
  },
  {
    "id": "k7_de_047",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie nennt man einen Nebensatz, der durch ein Relativpronomen eingeleitet wird?",
    "answers": [
      "Einen Subjektsatz",
      "Einen Objektsatz",
      "Einen Relativsatz",
      "Einen Modalsatz"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Relativsätze ('der', 'die', 'das', 'welche') beschreiben Nomen näher."
  },
  {
    "id": "k7_de_048",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Werden Haupt- und Nebensätze im Deutschen durch Komma getrennt?",
    "answers": [
      "Nur bei kurzen Sätzen",
      "Nein, nie durch Komma",
      "Ja, immer per Komma",
      "Nur wenn weil vorkommt"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nebensätze müssen im Deutschen grundsätzlich durch Komma abgetrennt werden."
  },
  {
    "id": "k7_de_049",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Muss vor den Konjunktionen 'und' oder 'oder' bei Aufzählungen ein Komma stehen?",
    "answers": [
      "Nein, im Regelfall nicht",
      "Ja, nur bei Nomen im Satz",
      "Ja, verpflichtet immer",
      "Nur vor dem Wort oder"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Reine Aufzählungen mit 'und' / 'oder' stehen ohne Komma."
  },
  {
    "id": "k7_de_050",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Art von Nebensatz ersetzt das Objekt des Satzes?",
    "answers": [
      "Ein Subjektsatz",
      "Ein Objektsatz",
      "Ein Adverbialsatz",
      "Ein Attributsatz"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beispiel: 'Ich hoffe, [dass du kommst]' -> Objektsatz (Wen oder was hoffe ich?)."
  },
  {
    "id": "k7_de_051",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Konjunktion leitet einen Finalsatz (Absicht/Zweck) ein?",
    "answers": [
      "Die Konjunktion damit",
      "Die Konjunktion seitdem",
      "Die Konjunktion anstatt",
      "Die Konjunktion weil"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Finalsätze drücken ein Ziel oder eine Absicht aus ('damit', 'um ... zu')."
  },
  {
    "id": "k7_de_052",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie nennt man einen eingeschobenen Nebensatz mitten im Hauptsatz?",
    "answers": [
      "Versteckter Nebensatz",
      "Inverser Hauptsatz",
      "Doppelter Stufensatz",
      "Eingeschobener Satz"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein eingeschobener Relativsatz wird vorne u. hinten durch Kommas abgetrennt."
  },
  {
    "id": "k7_de_053",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Satz ist grammatisch korrekte Kommasetzung?",
    "answers": [
      "Der Hund der laut bellt beißt",
      "Der Hund, der stark bellt beißt",
      "Der Hund der bellt, doch beißt",
      "Der Hund, der bellt, beißt"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der eingeschobene Relativsatz ', der bellt,' muss von zwei Kommas umschlossen sein."
  },
  {
    "id": "k7_de_054",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Nebensatz antwortet auf die Frage: 'Unter welcher Bedingung?'",
    "answers": [
      "Der Temporalsatz Zeit",
      "Der Konsekutivsatz",
      "Der Konditionalsatz",
      "Der Kausalsatz im Text"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Konditionalsätze nennen die Bedingung für das Eintreffen des Hauptsatzes."
  },
  {
    "id": "k7_de_055",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Nebensatz antwortet auf die Frage: 'Seit wann?' oder 'Wie lange?'",
    "answers": [
      "Der Kausalsatz Grund",
      "Der Modalsatz Ort",
      "Der Lokalsatz Raum",
      "Der Temporalsatz"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Temporalsätze drückt Zeitpunkte oder Zeitdauern aus."
  },
  {
    "id": "k7_de_056",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter einer Infinitivgruppe?",
    "answers": [
      "Satzgefüge ohne Nomen",
      "Satz mit um ... zu tun",
      "Satz mit vielen Verben",
      "Nomen aus Grundverben"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Infinitivgruppen werden oft mit 'um', 'ohne', 'statt' + 'zu' + Verb gebildet."
  },
  {
    "id": "k7_de_057",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Muss nach entgegengesetzten Konjunktionen wie 'aber', 'sondern' ein Komma stehen?",
    "answers": [
      "Nein, nie ein Komma",
      "Ja, stets davor Komma",
      "Nur am Ende des Satzes",
      "Nur bei zwei Nomen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Vor entgegengesetzten Bindewörtern ('aber', 'sondern', 'doch') steht ein Komma."
  },
  {
    "id": "k7_de_058",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie nennt man die Verbindung zweier vollständiger Hauptsätze?",
    "answers": [
      "Ein Satzfragment kurz",
      "Eine Satzverbindung",
      "Ein Attributgefüge",
      "Ein Satzgefüge hypot"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zwei gleichrangige Hauptsätze bilden eine Satzverbindung (Parataxe)."
  },
  {
    "id": "k7_de_059",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Nebensatz zeigt die Folge einer Handlung an (Konsekutivsatz)?",
    "answers": [
      "Satz mit der Konjunktion damit",
      "Satz mit Konjunktion sodass",
      "Satz mit der Konjunktion wenn",
      "Satz mit der Konjunktion weil"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'sodass' drückt die Konsequenz aus (z. B. 'Es regnete, sodass wir nass wurden')."
  },
  {
    "id": "k7_de_060",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Woran erkennt man das Subjekt in einem Nebensatz?",
    "answers": [
      "Frage mit Wie oder Warum?",
      "Frage mit Wessen Fall?",
      "Frage mit Wo oder Wann?",
      "Frage mit Wer oder Was?"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Subjekt erfragt man immer mit 'Wer oder was?'."
  },

  // --- RECHTSCHREIBUNG & GRAMMATIK (061 - 080) ---
  {
    "id": "k7_de_061",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wann schreibt man 'dass' mit Doppel-s?",
    "answers": [
      "Als reine Konjunktion",
      "Wenn jenes einsetzbar",
      "Wenn welches einsetzbar",
      "Wenn dieses einsetzbar"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kann man nicht 'dieses', 'jentes' oder 'welches' einsetzen, schreibt man die Konjunktion 'dass'."
  },
  {
    "id": "k7_de_062",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Ersatzprobe zeigt, dass 'das' mit einfachem 's' geschrieben wird?",
    "answers": [
      "Ersatz durch obwohl oder damit",
      "Ersatz durch dieses/welches",
      "Ersatz durch weil oder da",
      "Ersatz durch aber oder sondern"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Artikel u. Relativpronomen 'das' lassen sich durch 'dieses', 'jentes' oder 'welches' austauschen."
  },
  {
    "id": "k7_de_063",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Setze ein: 'Ich hoffe, ___ du bald gesund wirst.'",
    "answers": [
      "Wort: daschs",
      "Wort: das",
      "Wort: dass",
      "Wort: dasß"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Es handelt sich um eine unterordnende Bindewort-Konjunktion ('dass')."
  },
  {
    "id": "k7_de_064",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Setze ein: 'Das Buch, ___ ich lese, ist spannend.'",
    "answers": [
      "Wort: des",
      "Wort: dass",
      "Wort: das",
      "Wort: daß"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'das' bezieht sich als Relativpronomen auf das Nomen 'Buch' (Probe: welches)."
  },
  {
    "id": "k7_de_065",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Nach welchem Vokal schreibt man 'ß' (Eszett)?",
    "answers": [
      "Nach einem doppelten Konsonant",
      "Nach langem Vokal / Diphthong",
      "Immer nur vor einem Konsonant",
      "Nach kurzem Vokal ausnahmslos"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'ß' folgt auf lange Vokale (Fuß, Straße) u. Zwielaute (Fleiß, weiß)."
  },
  {
    "id": "k7_de_066",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wann schreibt man nach einem Vokal ein Doppel-s ('ss')?",
    "answers": [
      "Nach kurzem Vokal",
      "Am Ende des Satzes",
      "Nach langem Vokal",
      "Nach einem Diphthong"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nach kurzen, betonten Vokalen schreibt man 'ss' (z. B. Fluss, Schloss, nass)."
  },
  {
    "id": "k7_de_067",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter der Substantivierung von Verben oder Adjektiven?",
    "answers": [
      "Verwendung als Adverbiale",
      "Nutzung als Nomen (Groß)",
      "Beugen in allen Zeiten stets",
      "Kürzen von einzelnen Silben"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Werden Verben oder Adjektive zu Nomen (das Lesen, etwas Schönes), schreibt man sie groß."
  },
  {
    "id": "k7_de_068",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Woran erkennt man substantivierte Adjektive häufig?",
    "answers": [
      "An Signalwörtern wie 'alles'",
      "An typischen Endungen wie -ieren",
      "An Verben im reinen Infinitiv",
      "An besonderen Kommasetzungen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Signalwörter wie 'etwas', 'alles', 'viel', 'nichts' verlangen Großschreibung des Adjektivs."
  },
  {
    "id": "k7_de_069",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Ausdruck ist orthografisch korrekt geschrieben?",
    "answers": [
      "Zum lachen bringen",
      "zum lachen bringen",
      "zum Lachen bringen",
      "zum Lachen Bringen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'zum' (zu dem) signalisiert die Substantivierung des Verbs 'Lachen'."
  },
  {
    "id": "k7_de_070",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Wortgruppe schreibt man im Deutschen in der Regel getrennt?",
    "answers": [
      "Vorsilben mit Verben",
      "Zusammengesetzte Nomen",
      "Verben mit Partizipien",
      "Nomen mit Suffixen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Verbindungen aus zwei Verben oder Nomen + Verb werden oft getrennt geschrieben."
  },
  {
    "id": "k7_de_071",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Begriff zeigt eine korrekte Zusammensetzung?",
    "answers": [
      "Klassen zimmer",
      "Klassenzimmer",
      "Klassen Zimmer",
      "Klassen-Zimmer Ort"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nomen-Nomen-Komposita werden im Deutschen zusammengeschrieben."
  },
  {
    "id": "k7_de_072",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wann nutzt man den Ergänzungsstrich (Kopplungsstrich) sinnvoll?",
    "answers": [
      "Vor jedem Nebensatz",
      "Bei Wort-Einsparungen",
      "Bei Abkürzungen klein",
      "Nach jedem Komma Satz"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beispiel: 'Ein- und Ausgang' erspart die doppelte Nennung von 'gang'."
  },
  {
    "id": "k7_de_073",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Wort ist nach den Regeln für s-Laute richtig geschrieben?",
    "answers": [
      "Wort: Straße",
      "Wort: Straße",
      "Wort: Strasse",
      "Wort: Strazze"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Auf den langen Vokal 'a' folgt im deutschen Alphabetsystem 'ß'."
  },
  {
    "id": "k7_de_074",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Wort ist nach den Regeln für s-Laute richtig geschrieben?",
    "answers": [
      "Wort: Tasse",
      "Wort: Tahse",
      "Wort: Taße",
      "Wort: Tase"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nach dem kurzen Vokal 'a' folgt in der Schreibweise doppel-s ('ss')."
  },
  {
    "id": "k7_de_075",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie nennt man die Verlängerungsprobe zur Überprüfung von Auslautverhärtung?",
    "answers": [
      "Klangprobe laut",
      "Ersatzprobe Text",
      "Wortverlängerung",
      "Wortfelderanalyse"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aus 'Hund' wird durch Verlängerung 'Hun-de' -> man hört das 'd' deutlich."
  },
  {
    "id": "k7_de_076",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Satzzeichen nutzt man bei Auslassungen von Textteilen im Zitat?",
    "answers": [
      "Eckige Klammern mit Punkt",
      "Zwei Bindestriche lang",
      "Ein einfaches Komma",
      "Ein langes Ausrufezeichen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Auslassungen in Zitaten kennzeichnet man korrekt durch [...] ."
  },
  {
    "id": "k7_de_077",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Wortart sind 'heute', 'gestern' u. 'dort'?",
    "answers": [
      "Das Adjektiv",
      "Das Präposition",
      "Das Adverb",
      "Das Pronomen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Adverbien bestimmen Ort, Zeit, Grund oder Art u. Weise näher."
  },
  {
    "id": "k7_de_078",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Form von 'wieder / wider' nutzt man im Sinne von 'gegen'?",
    "answers": [
      "Form: wyder",
      "Form: wiebder",
      "Form: wider",
      "Form: wieder"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'wider' bedeutet 'gegen' (z. B. Widerspruch), 'wieder' bedeutet 'noch einmal'."
  },
  {
    "id": "k7_de_079",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Ausdruck ist großzuschreiben?",
    "answers": [
      "Etwas wichtiges",
      "etwas Wichtiges",
      "etwas Wichtiges",
      "etwas wichtiges"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nach dem Unbestimmtheitspronomen 'etwas' wird das Adjektiv substantiviert (groß)."
  },
  {
    "id": "k7_de_080",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie nennt man Stammverwandtschaft von Wörtern (z. B. fahren, Fahrt, Fahrzeug)?",
    "answers": [
      "Das Wortfeld Raum",
      "Die Wortfamilie",
      "Die Wortschatzliste",
      "Der Wortstamm kurz"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wörter mit demselben Wortstamm gehören zu einer Wortfamilie."
  },

  // --- TEXTARTEN, BALLADEN, ARGUMENTATION & INHALTSANGABE (081 - 100) ---
  {
    "id": "k7_de_081",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was zeichnet eine 'Ballade' als literarische Gattung aus?",
    "answers": [
      "Reine Liedstrophe",
      "Kurzes Theaterstück",
      "Reine Sachtextform",
      "Mix aus 3 Gattungen"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Balladen vereinen Lyrik (Vers/Reim), Epik (Erzählung) u. Dramatik (Dialoge)."
  },
  {
    "id": "k7_de_082",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Dichter schrieb die berühmte Ballade 'Der Zauberlehrling'?",
    "answers": [
      "J. W. von Goethe",
      "Theodor Fontane",
      "Friedrich Schiller",
      "Heinrich Heine"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Goethe verfasste die bekannte Ballade im Jahr 1797."
  },
  {
    "id": "k7_de_083",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Dichter verfasste die Ballade 'Der Erlkönig'?",
    "answers": [
      "Friedrich Schiller",
      "Rainer M. Rilke",
      "J. W. von Goethe",
      "Joseph Eichendorff"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Wer reitet so spät durch Nacht und Wind?' stammt ebenfalls von Goethe."
  },
  {
    "id": "k7_de_084",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches stilistische Mittel liegt vor bei: 'Der Sturm brüllte laut'?",
    "answers": [
      "Eine Ellipse im Satz",
      "Ein bildhafter Vergleich",
      "Eine starke Alliteration",
      "Eine Personifikation"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Personifikation verleiht leblosen Dingen oder Naturkräften menschliche Eigenschaften."
  },
  {
    "id": "k7_de_085",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "In welcher Zeitform verfasst man eine sachliche Inhaltsangabe?",
    "answers": [
      "Stets im Futur I",
      "Stets im Präsens",
      "Stets im Perfekt",
      "Stets im Präteritum"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Inhaltsangaben werden durchgehend im Präsens geschrieben."
  },
  {
    "id": "k7_de_086",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Gehören persönliche Meinungen u. Wertungen in eine Inhaltsangabe?",
    "answers": [
      "Nein, rein sachlich",
      "Ja, im Hauptteil erlaubt",
      "Ja, für mehr Spannung",
      "Ja, in fast jedem Satz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Inhaltsangaben bleiben streng objektiv u. verzichten auf eigene Wertungen."
  },
  {
    "id": "k7_de_087",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was gehört zwingend in den Einleitungssatz einer Inhaltsangabe?",
    "answers": [
      "Schlussfolgerung",
      "Eigene Meinung Text",
      "Wörtliche Zitate",
      "Titel, Autor, Thema"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Titel, Autor, Textart, Erscheinungsjahr u. Kernkernaussage gehören in den Einleitungssatz."
  },
  {
    "id": "k7_de_088",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Aus welchen drei Hauptteilen besteht ein klassisches Argument?",
    "answers": [
      "These, Antithese und Synthese",
      "Frage, Antwort und Bewertung",
      "Behauptung, Begründung, Beispiel",
      "Einleitung, Hauptteil und Schluss"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein überzeugendes Argument umfasst Behauptung (These), Begründung u. Beweis/Beispiel (3-B-Regel)."
  },
  {
    "id": "k7_de_089",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie nennt man die Grundannahme oder den Streitpunkt in einer Argumentation?",
    "answers": [
      "Das Beispiel als Beweis",
      "Die These (Behauptung)",
      "Das Argument als Grund",
      "Das Fazit am Ende des Textes"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die These stellt die aufgestellte Behauptung dar, die begründet werden muss."
  },
  {
    "id": "k7_de_090",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie stützt man eine Begründung in einem Argument am effektivsten?",
    "answers": [
      "Durch besonders lautes Rufen",
      "Durch bloße Vermutungen",
      "Durch konkrete Beispiele",
      "Durch ständige Wiederholungen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beispiele, Belege oder Belege veranschaulichen u. beweisen die Begründung."
  },
  {
    "id": "k7_de_091",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie nennt man die Argumentation, bei der Pro u. Kontra abgewägt werden?",
    "answers": [
      "Freie Erzählung Text",
      "Dialektische Erörterung",
      "Lineare Argumentation",
      "Einseitige Stellungnahme"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die dialektische Erörterung beleuchtet Vor- u. Nachteile (Pro u. Kontra)."
  },
  {
    "id": "k7_de_092",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Begriff bezeichnet das Wiederholen gleicher Anfangsbuchstaben?",
    "answers": [
      "Ein Reim am Ende",
      "Eine Alliteration",
      "Ein Anapher Wort",
      "Eine Metapher Bild"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Alliteration: Gleicher Anlaut aufeinanderfolgender Wörter (z. B. 'Milch macht müde')."
  },
  {
    "id": "k7_de_093",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter dem rhetorischen Stilmittel der 'Metapher'?",
    "answers": [
      "Reine Übertreibung",
      "Bildhafter Vergleich",
      "Gegensätzlicher Satz",
      "Wortwörtlicher Sinn"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Metapher ist ein bildhafter Ausdruck ohne das Vergleichswort 'wie' (z. B. 'Rabeneltern')."
  },
  {
    "id": "k7_de_094",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Reimschema liegt vor bei der Abfolge: aabb?",
    "answers": [
      "Der Kreuzreim",
      "Der Schweifreim",
      "Der Umarmende Reim",
      "Der Paarreim"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Paarreim: Je zwei aufeinanderfolgende Zeilen reimen sich (aabb)."
  },
  {
    "id": "k7_de_095",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Reimschema liegt vor bei der Abfolge: abab?",
    "answers": [
      "Der Paarreim",
      "Der Kreuzreim",
      "Der Haufenreim",
      "Der Blockreim"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kreuzreim: Zeile 1 reimt sich auf 3, Zeile 2 auf 4 (abab)."
  },
  {
    "id": "k7_de_096",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Reimschema liegt vor bei der Abfolge: abba?",
    "answers": [
      "Der reine Paarreim",
      "Umarmender Reim",
      "Der lange Kettenreim",
      "Der klare Kreuzreim"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Umarmender Reim: Die äußeren Zeilen umschließen die inneren (abba)."
  },
  {
    "id": "k7_de_097",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Dichter verfasste die Ballade 'Nis Randers'?",
    "answers": [
      "J. W. von Goethe",
      "Otto Ernst",
      "Theodor Fontane",
      "Friedrich Schiller"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Otto Ernst schrieb die packende Rettungsballade auf See."
  },
  {
    "id": "k7_de_098",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was beschreibt der Begriff 'Spannungskurve' in Erzählungen?",
    "answers": [
      "Länge der Strophen",
      "Reimschema im Gedicht",
      "Anzahl der Figuren",
      "Verlauf der Handlung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Spannungskurve steigt von der Einleitung über Höhepunkte bis zur Lösung."
  },
  {
    "id": "k7_de_099",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie nennt man den Wendepunkt oder Höhepunkt in einem Drama/Ballade?",
    "answers": [
      "Die Exposition am Start",
      "Der Klimax (Höhepunkt)",
      "Das genaue Reime-Schema",
      "Die Lösung ganz am Ende"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Klimax ist der dramatische Höhepunkt, an dem sich das Schicksal entscheidet."
  },
  {
    "id": "k7_de_100",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Haltung nimmt der Erzähler einer neutralen Inhaltsangabe ein?",
    "answers": [
      "Parparteiisch wertend",
      "Auktorial u. sachlich",
      "Streitbar aggressiv",
      "Ich-Erzähler emotional"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Inhaltsangaben werden aus distanzierter, sachlicher u. überblickender Perspektive verfasst."
  },



  // ================================================================
// KLASSE 7 - DEUTSCH (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

  // --- INHALTSANGABE & TEXTANALYSE (001 - 025) ---
  {
    "id": "k7_de_001",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Zeitform (Tempus) verwendet man grundsätzlich beim Verfassen einer Inhaltsangabe?",
    "answers": [
      "Perfekt als Grundform",
      "Präsens als Grundform",
      "Futur als Grundform",
      "Präteritum als Grundform"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Inhaltsangabe wird immer im Präsens verfasst. Vorzeitige Handlungen stehen im Perfekt."
  },
  {
    "id": "k7_de_002",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Kerninformationen gehören zwingend in den Einleitungssatz (Basissatz) einer Inhaltsangabe?",
    "answers": [
      "Meinung und eigenes Fazit",
      "Zitate und genaue Belege",
      "Autor, Titel, Thema",
      "Lösung und der Ausgang"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Basissatz nennt Autor, Titel, Textart, Erscheinungsjahr (wenn bekannt) u. das Hauptthema."
  },
  {
    "id": "k7_de_003",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie gibt man Äußerungen von Figuren in einer Inhaltsangabe stilistisch korrekt wieder?",
    "answers": [
      "Direkte Rede in Anführ.",
      "Eigene Meinung in Ich-Form",
      "Freie Vermutung ohne Text",
      "Indirekte Rede im Konj."
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wörtliche Rede wird in Inhaltsangaben nicht zitiert, sondern in indirekter Rede (Konjunktiv) zusammengefasst."
  },
  {
    "id": "k7_de_004",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Sprachstil zeichnet eine Gelungene Inhaltsangabe aus?",
    "answers": [
      "Spannend und sehr dramatisch",
      "Sachlich u. sachbezogen",
      "Umgangssprachlich und bunt",
      "Sehr emotionale Schilderung"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Inhaltsangabe informiert objektiv, sachlich u. verzichtet auf ausschmückende Adjektive u. Spannungselemente."
  },
  {
    "id": "k7_de_005",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie drückt man Vorzeitigkeit aus, wenn der Haupttext im Präsens steht?",
    "answers": [
      "Nutzung vom Futur I",
      "Nutzung vom Präteritum",
      "Nutzung vom Perfekt",
      "Nutzung vom Imperativ"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Handlungen, die vor der eigentlichen Handlung geschehen sind, werden im Perfekt wiedergegeben."
  },
  {
    "id": "k7_de_006",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was darf im Hauptteil einer Inhaltsangabe AUF KEINEN FALL vorkommen?",
    "answers": [
      "Persönliche Wertung",
      "Wichtige Handlung",
      "Ortsangaben der Szene",
      "Zentrale Personen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eigene Meinungen u. Wertungen haben in der Inhaltsangabe keinen Platz; sie gehören allenfalls in einen Schlusskommentar."
  },
  {
    "id": "k7_de_007",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welchem Hauptzweck dient der Basissatz zu Beginn des Textes?",
    "answers": [
      "Spannungsaufbau Text",
      "Fazit der Handlung",
      "Wertung des Autors",
      "Überblick zum Thema"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Basissatz verschafft dem Leser einen schnellen u. präzisen Erstüberblick über den literarischen Text."
  },
  {
    "id": "k7_de_008",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "In welcher Reihenfolge sollten die Ereignisse im Hauptteil dargestellt werden?",
    "answers": [
      "Rein nach Zufallsprinzip",
      "Chronologischer Ablauf",
      "Nach eigener Wichtigkeit",
      "Rückwärts vom Ende her"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Inhalt wird in der zeitlich korrekten Abfolge (chronologisch) geordnet dargestellt."
  },
  {
    "id": "k7_de_009",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was ist das wesentliche Ziel einer Inhaltsangabe?",
    "answers": [
      "Lange Nacherzählung",
      "Nervenkitzel erzeugen",
      "Knappe Information",
      "Kritische Rezension"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ziel ist es, jemanden, der den Text nicht kennt, knapp u. umfassend über den Inhalt zu informieren."
  },
  {
    "id": "k7_de_010",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was bedeutet der Begriff 'sachlicher Stil' in Bezug auf Wortwahl?",
    "answers": [
      "Gefühlvolle Worte",
      "Dramatische Begriffe",
      "Objektive Sprache",
      "Verwendung von Slang"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sachlicher Stil bedeutet neutrale Wortwahl ohne emotionale Verstärkungen oder Umgangssprache."
  },
  {
    "id": "k7_de_011",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie nennt man den Wendepunkt einer Erzählung im Textaufbau?",
    "answers": [
      "Begriff: Die Exposition",
      "Begriff: Die Einleitung",
      "Begriff: Die Retardierung",
      "Begriff: Der Höhepunkt"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Am Höhe- u. Wendepunkt (Klimax) erreicht die Spannung ihren Gipfel u. die Handlung schlägt um."
  },
  {
    "id": "k7_de_012",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter dem Begriff 'Exposition' bei Textanalysen?",
    "answers": [
      "Schlussakkord Handlung",
      "Lösung aller Probleme",
      "Verzögerung der Tat",
      "Einleitende Hinführung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Exposition führt in Ort, Zeit, Personen u. Konflikt der Geschichte ein."
  },
  {
    "id": "k7_de_013",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was bezeichnet man als 'retardierendes Moment' im Handlungsverlauf?",
    "answers": [
      "Der Höhepunkt der Szene",
      "Spannungsverzögerung",
      "Der erste große Konflikt",
      "Eine rasche Auflösung"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das retardierende Moment verzögert die Entscheidung u. baut nochmals unerwartete Spannung auf."
  },
  {
    "id": "k7_de_014",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was beschreibt der Begriff 'Charakterisierung' in einer Textanalyse?",
    "answers": [
      "Zusammenfassung Inhalt",
      "Suche nach Fehlern",
      "Beschreibung der Figur",
      "Bestimmung der Reime"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Charakterisierung erfasst Aussehen, Verhalten, Eigenschaften u. Beziehungen einer Figur."
  },
  {
    "id": "k7_de_015",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Worin unterscheidet sich die direkte von der indirekten Charakterisierung?",
    "answers": [
      "Text aussagen / Verhalten",
      "Sprache der Figur / Kleidung",
      "Name der Figur / ihr Alter",
      "Autor Meinung / Leser Sicht"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Direkt: Der Text nennt Eigenschaften ausdrücklich. Indirekt: Leser schließt aus dem Verhalten darauf."
  },
  {
    "id": "k7_de_016",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter einem 'Auktorialen Erzähler'?",
    "answers": [
      "Der Ich-Erzähler im Text",
      "Allwissender Erzähler",
      "Ein personaler Erzähler",
      "Ein neutraler Beobachter"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der auktoriale Erzähler blickt von außen auf das Geschehen, kennt Gedanken u. Gefühle aller Figuren."
  },
  {
    "id": "k7_de_017",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter einem 'Personalen Erzähler'?",
    "answers": [
      "Rein objektiver Blick",
      "Allwissender Blickt",
      "Perspektive einer Figur",
      "Autor spricht persönlich"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der personale Erzähler schlüpft in die Rolle einer Figur u. erzählt das Geschehen aus deren Sicht."
  },
  {
    "id": "k7_de_018",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was kennzeichnet die 'Neutral Erzählperspektive'?",
    "answers": [
      "Ein Erlebnis in Ich-Form",
      "Gedanken aller Charaktere",
      "Kameraperspektive außen",
      "Starkes Eingreifen des Autors"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der neutrale Erzähler berichtet wie eine unbeteiligte Kamera ohne Einblick in Gefühle u. ohne Wertung."
  },
  {
    "id": "k7_de_019",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was bedeutet das Wort 'fiktional' bei literarischen Texten?",
    "answers": [
      "Wissenschaftlich exakt",
      "Tatsächlich geschehen",
      "Rechtlich bindend",
      "Erfunden u. gestaltet"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Fiktionale Texte basieren auf Erfindung u. künstlerischer Freiheit des Autors."
  },
  {
    "id": "k7_de_020",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was ist das Kennzeichen eines 'Sachtextes' (nichtephistischen Textes)?",
    "answers": [
      "Reale Fakten u. Info",
      "Schauspiel Dialoge",
      "Frei erfundene Story",
      "Reime u. Strophenbau"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sachtexte informieren sachlich über reale Sachverhalte, Personen oder Ereignisse."
  },
  {
    "id": "k7_de_021",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie nennt man die zeitliche Verflechtung von Handlungsebenen bei Rückblicken?",
    "answers": [
      "Begriff: Zeitraffung",
      "Begriff: Zeitdehnung",
      "Begriff: Analepse / Rückb.",
      "Begriff: Prolepsis / Voru."
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Analepse (Rückblende) unterbricht den chronologischen Verlauf u. erzählt Vergangenes."
  },
  {
    "id": "k7_de_022",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was bedeutet 'Zeitraffung' beim Erzählen einer Geschichte?",
    "answers": [
      "Handlung stoppt ganz",
      "Erzählzeit < Spielzeit",
      "Erzählzeit = Spielzeit",
      "Erzählzeit > Spielzeit"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Lange Zeiträume (z. B. 10 Jahre) werden in wenigen Sätzen kurz zusammengefasst."
  },
  {
    "id": "k7_de_023",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was bedeutet 'Zeitdehnung' beim Erzählen einer Geschichte?",
    "answers": [
      "Erzählzeit > Spielzeit",
      "Erzählzeit < Spielzeit",
      "Zeitsprung in Zukunft",
      "Erzählzeit = Spielzeit"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein kurzer Moment (z. B. Sekunden eines Sturzes) wird sehr ausführlich beschrieben."
  },
  {
    "id": "k7_de_024",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter dem Begriff 'Zeitdeckend' beim Erzählen?",
    "answers": [
      "Erzählzeit = Spielzeit",
      "Erzählzeit > Spielzeit",
      "Erzählzeit < Spielzeit",
      "Kompletter Zeitausfall"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Dauer des Vortrags entspricht exakt der Dauer des Geschehens (z. B. bei Dialogen)."
  },
  {
    "id": "k7_de_025",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Begriff bezeichnet das zentral zu lösende Problem in einer Erzählung?",
    "answers": [
      "Die Inhaltsangabe",
      "Die Nebenhandlung",
      "Der Kernkonflikt",
      "Der Schlusspointe"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Kernkonflikt treibt die Spannung an u. muss von den Figuren gelöst werden."
  },

  // --- BALLADEN & LYRIK (026 - 050) ---
  {
    "id": "k7_de_026",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was kennzeichnet eine Ballade im Unterschied zum reinen Gedicht?",
    "answers": [
      "Mischung dreier Gattungen",
      "Reine epische Erzählung",
      "Reines dramatisches Stück",
      "Reine lyrische Gedichtform"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Balladen vereinen epische (erzählende), lyrische (Reim, Strophe) u. dramatische Elemente (Dialoge)."
  },
  {
    "id": "k7_de_027",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche drei klassischen Literatur-Gattungen treffen in der Ballade aufeinander?",
    "answers": [
      "Poesie, Prosa, Fabel",
      "Komödie, Drama, Roman",
      "Sage, Märchen, Mythe",
      "Epik, Lyrik, Dramatik"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Goethe nannte die Ballade wegen dieser Dreieinigkeit das 'Ur-Ei der Poesie'."
  },
  {
    "id": "k7_de_028",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wer verfasste die berühmte romantisch-unheimliche Ballade 'Der Erlkönig'?",
    "answers": [
      "Heinrich Heine Buch",
      "Theodor Fontane Werk",
      "Friedrich von Schiller",
      "Johann W. von Goethe"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Goethe schrieb 'Der Erlkönig' im Jahr 1782 ('Wer reitet so spät durch Nacht und Wind...')."
  },
  {
    "id": "k7_de_029",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wer verfasste die bekannte Zauberer-Ballade 'Der Zauberlehrling'?",
    "answers": [
      "Heinrich Heine Buch",
      "Friedrich von Schiller",
      "Johann W. von Goethe",
      "Theodor Fontane Werk"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Goethe schrieb die Ballade ('Walle! walle / Manche Strecke...')."
  },
  {
    "id": "k7_de_030",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wer schrieb die dramatische Meeres- u. Rettungsballade 'Nis Randers'?",
    "answers": [
      "Friedrich Schiller",
      "Otto Ernst Dichter",
      "Johann W. von Goethe",
      "Theodor Fontane Dichter"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Otto Ernst dichtete 'Nis Randers' ('Krachen und Heulen und berstende Nacht...')."
  },
  {
    "id": "k7_de_031",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wer verfasste die Ballade 'John Maynard' über den mutigen Steuermann?",
    "answers": [
      "Friedrich Schiller Autor",
      "Johann Wolfgang von Goethe",
      "Theodor Fontane Autor",
      "Heinrich Heine als Autor"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Theodor Fontane verfasste das Gedicht über das Schiffsunglück auf dem Eriesee."
  },
  {
    "id": "k7_de_032",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter dem Begriff 'Strophe' in der Lyrik?",
    "answers": [
      "Eine Zeile im Gedicht",
      "Der Reim am Zeilenende",
      "Abschnitt des Gedichts",
      "Das Versmaß des Textes"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Strophe ist ein Sinnabschnitt aus mehreren Versen in einem Gedicht."
  },
  {
    "id": "k7_de_033",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter dem Begriff 'Vers' in einem Gedicht?",
    "answers": [
      "Gruppe von Zeilen",
      "Die Bedeutung des Worts",
      "Zeile eines Gedichts",
      "Der Rhythmus des Textes"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Als Vers bezeichnet man eine einzelne gedruckte Zeile innerhalb eines Gedichts."
  },
  {
    "id": "k7_de_034",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Reimschema folgt dem Muster [aabb]?",
    "answers": [
      "Der Schweifreim Schema",
      "Der Umarmende Reim",
      "Der Paarreim Schema",
      "Der Kreuzreim Schema"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Paarreim reimen sich zwei aufeinanderfolgende Verszeilen (a auf a, b auf b)."
  },
  {
    "id": "k7_de_035",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Reimschema folgt dem Muster [abab]?",
    "answers": [
      "Der Kreuzreim Schema",
      "Der Umarmende Reim",
      "Der Haufenreim Schema",
      "Der Paarreim Schema"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Kreuzreim reimen sich Vers 1 u. 3 sowie Vers 2 u. 4 abwechselnd."
  },
  {
    "id": "k7_de_036",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Reimschema folgt dem Muster [abba]?",
    "answers": [
      "Der Kreuzreim Schema",
      "Der Schweifreim Schema",
      "Umarmender Reim",
      "Der Paarreim Schema"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der umarmende Reim umschließt das innere Reimpaar (b-b) mit den äußeren Reimen (a-a)."
  },
  {
    "id": "k7_de_037",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was beschreibt das sprachliche Stilmittel der 'Metapher'?",
    "answers": [
      "Bildhafter Vergleich",
      "Wiederholung Wortes",
      "Vermenschlichung Ding",
      "Wörtlicher Vergleich"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Metapher überträgt ein Wort aus seinem ursprünglichen Bedeutungszusammenhang in einen anderen ohne 'wie'."
  },
  {
    "id": "k7_de_038",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was beschreibt das Stilmittel der 'Personifikation'?",
    "answers": [
      "Gegensatz zweier Worte",
      "Vermenschlichung Sach.",
      "Übertreibung im Satz",
      "Bildhafter Vergleich"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei der Personifikation werden Gegenständen oder Tieren menschliche Eigenschaften zugeschrieben (z. B. 'Die Sonne lacht')."
  },
  {
    "id": "k7_de_039",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was beschreibt das Stilmittel der 'Anapher'?",
    "answers": [
      "Gleicher Anlaut Wörter",
      "Wiederholung am Anfang",
      "Ausruf mitten im Satz",
      "Wiederholung am Ende"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Anapher ist die Wiederholung desselben Wortes oder derselben Wortgruppe am Anfang aufeinanderfolgender Sätze oder Verse."
  },
  {
    "id": "k7_de_040",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was beschreibt das Stilmittel der 'Alliteration'?",
    "answers": [
      "Gleicher Anlaut Wörter",
      "Bildhafter Vergleich",
      "Wiederholung des Satzes",
      "Gleicher Endlaut Wörter"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mehrere Wörter nacheinander beginnen mit demselben Anlaut (z. B. 'Milch macht müde Männer munter')."
  },
  {
    "id": "k7_de_041",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter einem 'Enjambement' in der Lyrik?",
    "answers": [
      "Pause am Zeilenende",
      "Zeilensprung im Vers",
      "Reim über zwei Strophen",
      "Verdopplung des Reims"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Satz setzt sich über das Ende eines Verses hinweg im folgenden Vers fort (Zeilensprung)."
  },
  {
    "id": "k7_de_042",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Abfolge von Silbenbetonungen kennzeichnet das Metrum 'Jambus'?",
    "answers": [
      "Betont - Unbetont",
      "Betont - Unbetont - Unb.",
      "Unbetont - Betont",
      "Unbetont - Unbetont - B."
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Jambus ist ein zweisilbiger Versfuß aus einer unbetonten u. einer betonten Silbe (x X)."
  },
  {
    "id": "k7_de_043",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Abfolge von Silbenbetonungen kennzeichnet das Metrum 'Trochäus'?",
    "answers": [
      "Unbetont - Unbetont - B.",
      "Unbetont - Betont",
      "Betont - Unbetont - Unb.",
      "Betont - Unbetont"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Trochäus besteht aus einer betonten gefolgt von einer unbetonten Silbe (X x)."
  },
  {
    "id": "k7_de_044",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Versmaß besitzt drei Silben mit der Betonungsstruktur [unbetont - unbetont - betont]?",
    "answers": [
      "Der Trochäus Fuß",
      "Der Jambus Fuß",
      "Der Daktylus Fuß",
      "Der Anapäst Fuß"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Anapäst ist dreisilbig u. steigt zur letzten Silbe hin an (x x X)."
  },
  {
    "id": "k7_de_045",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Versmaß besitzt drei Silben mit der Betonungsstruktur [betont - unbetont - unbetont]?",
    "answers": [
      "Der Anapäst Fuß",
      "Der Jambus Fuß",
      "Der Daktylus Fuß",
      "Der Trochäus Fuß"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Daktylus beginnt betont u. fällt danach ab (X x x)."
  },
  {
    "id": "k7_de_046",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter einer 'männlichen Kadenz' am Versende?",
    "answers": [
      "Betonte Endsilbe",
      "Reimlose Endsilbe",
      "Doppelte Endsilbe",
      "Unbetonte Endsilbe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Endet ein Vers auf eine betonte Silbe, spricht man von einer männlichen (stumpfen) Kadenz."
  },
  {
    "id": "k7_de_047",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter einer 'weiblichen Kadenz' am Versende?",
    "answers": [
      "Eine betonte Endsilbe",
      "Eine fehlende Endsilbe",
      "Unbetonte Endsilbe",
      "Eine zweisilbige Pause"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Endet ein Vers auf eine unbetonte Silbe, spricht man von einer weiblichen (klingenden) Kadenz."
  },
  {
    "id": "k7_de_048",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was bezeichnet der Begriff 'Lyrisches Ich' in der Gedichtanalyse?",
    "answers": [
      "Leser des Gedichts",
      "Autor persönlich",
      "Fiktiver Sprecher",
      "Hauptfigur Drama"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Lyrische Ich ist die erfundene Stimme, die im Gedicht ihre Gefühle oder Eindrücke äußert (nicht identisch mit dem Autor)."
  },
  {
    "id": "k7_de_049",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was beschreibt der Begriff 'Hyperbel' als rhetorische Figur?",
    "answers": [
      "Starke Übertreibung",
      "Verniedlichung Wort",
      "Untertreibung Satz",
      "Gleichsetzung Begriff"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Hyperbel ist eine starke Übertreibung zur Veranschaulichung (z. B. 'ein Meer von Tränen')."
  },
  {
    "id": "k7_de_050",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter der 'Lautmalerei' (Onomatopoesie)?",
    "answers": [
      "Vergleich mit Tieren",
      "Nachahmung Klängen",
      "Zeilensprung Vers",
      "Wiederholung Vokal"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schallnachahmung von Naturgeräuschen durch Worte (z. B. 'Kuckuck', 'Zischen', 'Rumpeln')."
  },

  // --- ARGUMENTIEREN, BERICHTEN & BESCHREIBUNG (051 - 075) ---
  {
    "id": "k7_de_051",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Aus welchen drei Grundbausteinen setzt sich ein vollständiges Argument zusammen?",
    "answers": [
      "Behauptung, Begründ., Bsp.",
      "Einleitung, Hauptteil, Ende",
      "Frage, Antwort, Ergebnis",
      "These, Antithese, Synthese"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein überzeugendes Argument besteht aus Behauptung (These), Begründung u. Beleg/Beispiel."
  },
  {
    "id": "k7_de_052",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was bezeichnet man als 'These' in einer sachgerechten Argumentation?",
    "answers": [
      "Das Praxisbeispiel",
      "Die Begründung der Idee",
      "Das abschließende Fazit",
      "Die Grundbehauptung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die These ist die leitsatzartige Behauptung oder Ansicht, die bewiesen werden soll."
  },
  {
    "id": "k7_de_053",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Rolle erfüllt die Begründung innerhalb eines Arguments?",
    "answers": [
      "Beendet die Diskussion",
      "Stellt eine Gegenfrage",
      "Schildert ein Beispiel",
      "Stützt die Behauptung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Begründung erklärt logisch, warum die Behauptung zutrifft u. wahr ist."
  },
  {
    "id": "k7_de_054",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Rolle übernimmt das Beispiel / der Beleg im Argumentationsgefüge?",
    "answers": [
      "Widerlegung des Arguments",
      "Einleitung des Satzes",
      "Veranschaulichung These",
      "Ersatz der Begründung"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Beispiel konkretisiert u. veranschaulicht die abstrakte Begründung anhand von Praxisfällen."
  },
  {
    "id": "k7_de_055",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Konjunktions-Trio leitet im Regelfall eine kausale Begründung ein?",
    "answers": [
      "Aber / Jedoch",
      "Obwohl / Wenn",
      "Deshalb / Folglich",
      "Weil / Da / Denn"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Begründende Nebensätze oder Anschlüsse werden bevorzugt mit 'weil', 'da' oder 'denn' verknüpft."
  },
  {
    "id": "k7_de_056",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Merkmale kennzeichnen einen informativen Zeitungsbericht?",
    "answers": [
      "Reimend u. bildhaft",
      "Sachlich u. informativ",
      "Persönlich u. emotional",
      "Erfunden u. spannend"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Zeitungsbericht informiert rein objektiv, knapp u. wahrheitsgetreu über Vorfälle."
  },
  {
    "id": "k7_de_057",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche W-Fragen beantwortet ein vollständiger Unfall- oder Berichtstext im Einleitungsteil?",
    "answers": [
      "Warum, Wieso, Weshalb...",
      "Wer, Was, Wann, Wo...",
      "Welche, Wie viel, Womit...",
      "Wer, Wie, Was, Warum nur"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die W-Fragen (Wer, Was, Wann, Wo) klären sofort zu Beginn den Kern des Geschehens."
  },
  {
    "id": "k7_de_058",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "In welcher Zeitform verfasst man standardmäßig einen sachlichen Bericht?",
    "answers": [
      "Nur im Plusquamperfekt",
      "Präteritum / Perfekt",
      "Meistens nur im Futur I",
      "Präsens oder auch Futur"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Berichte schildern bereits Geschehenes im Präteritum (gelegentlich Perfekt)."
  },
  {
    "id": "k7_de_059",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was unterscheidet eine Vorgangsbeschreibung von einem Bericht?",
    "answers": [
      "Kritische Meinung des Autors",
      "Schritt-für-Schritt Anleit.",
      "Eine fiktive Handlung Figur",
      "Freie Schilderung von Erlebtem"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Vorgangsbeschreibung (z. B. Rezept, Bastelanleitung) leitet zur exakten Wiederholung des Ablaufs an."
  },
  {
    "id": "k7_de_060",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "In welcher Zeitform steht eine Personen- oder Gegenstandsbeschreibung üblicherweise?",
    "answers": [
      "Das Futur in Zukunft",
      "Das Präteritum stets",
      "Das Perfekt vergangen",
      "Das Präsens dauerhaft"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da der Zustand aktuell beschrieben wird, steht die Beschreibung durchgehend im Präsens."
  },
  {
    "id": "k7_de_061",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was beschreibt der Begriff 'Sanduhr-Prinzip' bei einer Erörterung?",
    "answers": [
      "Pro u. Contra getrennt",
      "Zufällige Anordnung",
      "Chronologischer Aufbau",
      "Ständiger Wechsel Argument"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Erst werden alle Argumente der Gegenseite gebracht, danach alle Argumente der eigenen Position (vom schwächsten zum stärksten)."
  },
  {
    "id": "k7_de_062",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was beschreibt das 'Reißverschluss-Prinzip' bei einer Erörterung?",
    "answers": [
      "Zeitlicher Ablauf im Text",
      "Ständiger Wechsel Argument",
      "Eine blockweise Darstellung",
      "Nur die eigenen Positionen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pro- u. Contra-Argumente wechseln sich laufend direkt ab."
  },
  {
    "id": "k7_de_063",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie stuft man die Reihenfolge der Argumente für die eigene Position im Hauptteil ein?",
    "answers": [
      "Rein alphabetisch geordnet",
      "Stärkstes bis Schwächstes",
      "Schwächstes bis Stärkstes",
      "Völlig beliebig gewählt"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das überzeugendste u. stärkste Argument wird am Ende der eigenen Argumentation platziert."
  },
  {
    "id": "k7_de_064",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welcher Schlussteil gehört zu einer fundierten Erörterung?",
    "answers": [
      "Neues drittes Argument",
      "Zusammenfassung Autor",
      "Fazit u. eigene Meinung",
      "Wiederholung der Einleit."
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Schluss fasst die Ergebnisse abwägend zusammen u. mündet im begründeten eigenen Urteil."
  },
  {
    "id": "k7_de_065",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was ist der Zweck eines 'Leserbriefs' in den Medien?",
    "answers": [
      "Gedicht an die Redaktion",
      "Stellungnahme zu Artikel",
      "Privater Brief an Autor",
      "Bewerbung um Arbeitsplatz"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Leserbrief ist eine veröffentlichte Meinungsäußerung zu einem bereits erschienenen Beitrag."
  },
  {
    "id": "k7_de_066",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter einer 'Personenbeschreibung' in der Schule?",
    "answers": [
      "Systematische Merkmale",
      "Nennung von Namen nur",
      "Erfundene Liebeserklärung",
      "Beurteilung des Treibens"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine geordnete, sachliche Beschreibung von Größe, Statur, Gesicht, Kleidung u. Besonderheiten."
  },
  {
    "id": "k7_de_067",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Blickrichtung wählt man beim Beschreiben eines Gegenstandes oder Raumes?",
    "answers": [
      "Kreuz u. quer springen",
      "Geordnet von A nach B",
      "Nur Details betrachten",
      "Von innen nach außen nur"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Systematisch von oben nach unten, von links nach rechts oder vom Vorder- zum Hintergrund."
  },
  {
    "id": "k7_de_068",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Textsorte dient der formalen Bitte um Überprüfung einer schulischen Angelegenheit?",
    "answers": [
      "Der Schülereinspruch",
      "Der lange Zeitungsbericht",
      "Die kurze Inhaltsangabe",
      "Der freie fiktive Dialog"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Anträge u. Einsprüche sind sachliche, sachbezogene Schreiben mit klaren Begründungen."
  },
  {
    "id": "k7_de_069",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was bedeutet der Begriff 'Faktum' (Fakt) in einer Argumentation?",
    "answers": [
      "Gefühlvolle Aussage",
      "Persönliche Vermutung",
      "Nachweisbare Tatsache",
      "Falsches Gerücht"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Faktum ist eine unumstößliche u. belegbare Tatsache."
  },
  {
    "id": "k7_de_070",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was nennt man ein 'Normatives Argument' in der Ethik u. Politik?",
    "answers": [
      "Stützt sich auf Gesetze",
      "Stützt sich auf Erlebn.",
      "Stützt sich auf Werte",
      "Stützt sich auf Zahlen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Normative Argumente verweisen auf allgemein anerkannte Werte, Regeln u. Moralvorstellungen."
  },
  {
    "id": "k7_de_071",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter einem 'Autoritätsargument'?",
    "answers": [
      "Verweis auf Bauchgefühl",
      "Berufung auf Experten",
      "Befragung von Freunden",
      "Eigene Erfahrung nutzen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Man beruft sich auf eine anerkannte Fachkraft oder Studie, um die eigene These zu stärken."
  },
  {
    "id": "k7_de_072",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was beschreibt eine 'Fehlschluss-Argumentation' (Scheinargument)?",
    "answers": [
      "Stark überzeugend",
      "Logisch fehlerhaft",
      "Immer zutreffend",
      "Wissenschaftlich exakt"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Scheinargument nutzt Denkfehler oder Ablenkungen u. hält logischer Prüfung nicht stand."
  },
  {
    "id": "k7_de_073",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Sprachform wählt man beim Schreiben einer offiziellen Beschwerde?",
    "answers": [
      "Höflich u. bestimmt",
      "Ironisch u. Spöttisch",
      "Wütend u. Beleidigend",
      "Umgangssprachlich locker"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Formelle Schreiben erfordern höfliche, sachliche u. präzise Formulierungen trotz Kritik."
  },
  {
    "id": "k7_de_074",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter dem 'Prototyping' einer Argumentation?",
    "answers": [
      "Erstellung der Stoffsam.",
      "Löschen aller groben Fehler",
      "Abschreiben einer Lösung",
      "Druck des fertigen Aufsatzes"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Vor dem Schreiben werden Ideen in Mindmaps oder Tabellen gesammelt u. strukturiert."
  },
  {
    "id": "k7_de_075",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Bindewort eignet sich zur Einleitung eines Gegengrundes (Konzessiv)?",
    "answers": [
      "Sowohl ... als auch",
      "Deshalb / Darum",
      "Obwohl / Obgleich",
      "Weil / Da"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Obwohl' u. 'obgleich' leiten Gegengründe ein, die die Folge jedoch nicht verhindern."
  },

  // --- GRAMMATIK, RECHTSCHREIBUNG & ZEICHENSETZUNG (076 - 100) ---
  {
    "id": "k7_de_076",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wann schreibt man die Konjunktion 'dass' mit Doppel-s?",
    "answers": [
      "Konjunktion Neben-S.",
      "Pronomen im Satz",
      "Ersatz für dieses/welches",
      "Artikel vor Nomen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Dass' verbindet Nebensätze u. lässt sich NICHT durch 'dieses', 'jenes' oder 'welches' ersetzen."
  },
  {
    "id": "k7_de_077",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wann schreibt man das Wort 'das' mit einem einfachen s?",
    "answers": [
      "Unterordnende Fügung",
      "Verbindung zweier Sätze",
      "Relativpronomen / Art.",
      "Kausaladverb im Satz"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Das' steht als Artikel, Demonstrativ- oder Relativpronomen u. lässt sich durch 'welches' ersetzen."
  },
  {
    "id": "k7_de_078",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wozu dient die Sprachform des Konjunktiv I im Deutschen vorwiegend?",
    "answers": [
      "Vergangenheit Satz",
      "Aufforderung Höflich",
      "Indirekte Rede",
      "Wunsch / Irrealis"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Konjunktiv I dient der neutralen Wiedergabe von Fremdaussagen in der indirekten Rede."
  },
  {
    "id": "k7_de_079",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wozu dient der Konjunktiv II im Deutschen vorwiegend?",
    "answers": [
      "Befehl an Personen",
      "Irrealer Wunsch/Mögl.",
      "Tatsachenbehauptung",
      "Indirekte Redewiedergabe"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Konjunktiv II drückt Unmögliches, Träume, Zweifel u. irreale Bedingungen aus."
  },
  {
    "id": "k7_de_080",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie lautet die korrekte Konjunktiv I-Form von 'er sagt'?",
    "answers": [
      "Er sagte im Satz",
      "Er sage im Satz",
      "Er habe gesagt",
      "Er würde sagen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Stamm + Endung -e: 'er sage'."
  },
  {
    "id": "k7_de_081",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie lautet die korrekte Konjunktiv II-Form von 'er kommt'?",
    "answers": [
      "Er wird kommen",
      "Er kommt im Satz",
      "Er komme im Satz",
      "Er käme im Satz"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Präteritumsstamm mit Umlaut: 'kommen' -> 'kam' -> 'käme'."
  },
  {
    "id": "k7_de_082",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter dem grammatischen Begriff 'Satzgefüge'?",
    "answers": [
      "Haupt- u. Nebensatz",
      "Nur ein langer Hauptsatz",
      "Genau zwei Hauptsätze",
      "Insgesamt drei Nebensätze"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Satzgefüge (Hypotaxe) besteht aus mindestens einem übergeordneten Hauptsatz u. einem Nebensatz."
  },
  {
    "id": "k7_de_083",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was versteht man unter dem grammatischen Begriff 'Satzreihe'?",
    "answers": [
      "Haupt- u. Nebensatz",
      "Mehrere Nebensätze",
      "Zwei Hauptsätze",
      "Ein einzelner Satz"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Satzreihe (Parataxe) besteht aus zwei oder mehr gleichrangigen Hauptsätzen."
  },
  {
    "id": "k7_de_084",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Bindewort leitet typischerweise einen Kausalsatz ein?",
    "answers": [
      "Obwohl / Obgleich",
      "Damit / Dass",
      "Wenn / Falls",
      "Weil / Da / Denn"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kausalsätze nennen den Grund/die Ursache (eingeleitet durch 'weil', 'da')."
  },
  {
    "id": "k7_de_085",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Bindewort leitet typischerweise einen Konzessivsatz ein?",
    "answers": [
      "Indem / Dadurch dass",
      "Obwohl / Obgleich",
      "Damit / Dass genau",
      "Weil / Da nämlich"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Konzessivsätze drückt einen Einwand/Gegengrund aus ('obwohl', 'obgleich')."
  },
  {
    "id": "k7_de_086",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Bindewort leitet typischerweise einen Konditionalsatz ein?",
    "answers": [
      "Wenn / Falls",
      "Obwohl / Wenngleich",
      "Damit / Dass",
      "Weil / Da"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Konditionalsätze nennen eine Bedingung ('wenn', 'falls', 'sofern')."
  },
  {
    "id": "k7_de_087",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Was geschieht mit dem Akkusativobjekt der Aktivform beim Umwandeln ins Passiv?",
    "answers": [
      "Bleibt unverändert",
      "Wird zum Dativobjekt",
      "Fällt komplett weg",
      "Wird zum Subjekt"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Akkusativobjekt des Aktivsatzes wird im Passivsatz zum grammatikalischen Subjekt."
  },
  {
    "id": "k7_de_088",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie bildet man die Form des Vorgangspassivs im Präsens?",
    "answers": [
      "Haben und Partizip II",
      "Werden plus Infinitiv",
      "Werden + Partizip II",
      "Sein plus Partizip II"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Präsens von 'werden' + Partizip II des Verbs (z. B. 'Das Haus wird gebaut')."
  },
  {
    "id": "k7_de_089",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie bildet man die Form des Zustandspassivs im Präsens?",
    "answers": [
      "Werden + Partizip II",
      "Sein + Partizip II",
      "Haben + Partizip II",
      "Bleiben + Infinitiv"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Präsens von 'sein' + Partizip II des Verbs (z. B. 'Das Haus ist gebaut')."
  },
  {
    "id": "k7_de_090",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wann MUSS eine Infinitivgruppe mit 'zu' durch ein Komma abgetrennt werden?",
    "answers": [
      "Immer vor jedem 'zu' im Satz",
      "Nur ganz am Satzanfang",
      "Bei 'um / ohne / statt zu'",
      "Niemals mit einem Komma"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Infinitivgruppen mit den einleitenden Signalwörtern 'um', 'ohne', 'statt', 'ansatt', 'außer' müssen mit Komma abgetrennt werden."
  },
  {
    "id": "k7_de_091",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Satzglied erfragt man mit der Frage 'Wem?'?",
    "answers": [
      "Das Subjekt Satz",
      "Das Dativobjekt",
      "Das Akkusativobjekt",
      "Das Genitivobjekt"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Objekt im 3. Fall (Dativ) wird mit 'Wem?' erfragt."
  },
  {
    "id": "k7_de_092",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Satzglied erfragt man mit den Fragen 'Wen oder Was?'?",
    "answers": [
      "Das Subjekt im Satz",
      "Das Akkusativobjekt",
      "Das seltene Genitivobjekt",
      "Das typische Dativobjekt"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Objekt im 4. Fall (Akkusativ) wird mit 'Wen oder was?' erfragt."
  },
  {
    "id": "k7_de_093",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Satzglied erfragt man mit der Frage 'Wessen?'?",
    "answers": [
      "Das Präpositionalobj.",
      "Das Genitivobjekt",
      "Das Akkusativobjekt",
      "Das Dativobjekt"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Objekt im 2. Fall (Genitiv) wird mit 'Wessen?' erfragt."
  },
  {
    "id": "k7_de_094",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Woran erkennt man die Großschreibung bei nominalisierten Verben?",
    "answers": [
      "Es steht am Satzende",
      "Es ist ein Hilfsverb",
      "Es endet auf -ung/-heit",
      "Artikel / Pronomen vor"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Verben werden großgeschrieben, wenn Artikel, Pronomen oder Präpositionen vorangehen (z. B. 'das Lesen', 'beim Schwimmen')."
  },
  {
    "id": "k7_de_095",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welche Nachsilben (Suffixe) weisen zweifelsfrei auf die Großschreibung eines Substantivs hin?",
    "answers": [
      "Immer Adjektiv klein",
      "Immer Nomen groß",
      "Immer Verb klein",
      "Immer Adverb klein"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wörter mit den Endungen -ung, -heit, -keit, -schaft, -nis, -tum sind Nomen u. werden großgeschrieben."
  },
  {
    "id": "k7_de_096",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wie unterscheiden sich die Wörter 'wieder' u. 'wider' in ihrer Bedeutung?",
    "answers": [
      "Beide bedeuten gegen",
      "wieder = nochmal / wider = gegen",
      "Beide bedeuten erneut",
      "wieder = gegen / wider = nochmal"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Wieder' drückt Wiederholung aus (noch einmal); 'wider' drückt Widerstand aus (gegen)."
  },
  {
    "id": "k7_de_097",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Wann MUSS bei einer Aufzählung von Adjektiven oder Nomen ein Komma gesetzt werden?",
    "answers": [
      "Vor dem Wort 'und'",
      "Zwischen Elementen",
      "Nach dem letzten Wort",
      "Vor dem Wort 'oder'"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aufzählungen werden durch Kommata getrennt, sofern sie nicht durch 'und' oder 'oder' verbunden sind."
  },
  {
    "id": "k7_de_098",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Satzglied liegt vor bei 'unter dem Tisch' in: 'Der Katze schläft unter dem Tisch'?",
    "answers": [
      "Temporaladverbiale",
      "Modaladverbiale",
      "Kausaladverbiale",
      "Lokaladverbiale"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Es beantwortet die Frage 'Wo?' u. ist somit eine Umstandsbestimmung des Ortes (Lokaladverbiale)."
  },
  {
    "id": "k7_de_099",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Satzglied liegt vor bei 'gestern' in: 'Gestern regnete es in Strömen'?",
    "answers": [
      "Die Lokaladverbiale",
      "Temporaladverbiale",
      "Die Kausaladverbiale",
      "Die Modaladverbiale"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Es beantwortet die Frage 'Wann?' u. ist somit eine Umstandsbestimmung der Zeit (Temporaladverbiale)."
  },
  {
    "id": "k7_de_100",
    "category": "k7_deutsch",
    "area": "schule",
    "grade": 7,
    "subject": "deutsch",
    "question": "Welches Satzglied bildet das grammatische u. logische Zentrum jedes vollwertigen deutschen Satzes?",
    "answers": [
      "Das Objekt Nomen",
      "Das Prädikat Verb",
      "Die Adverbiale",
      "Das Subjekt Nomen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Prädikat (Verb/Tätigkeitswort) bestimmt den Satzbau u. fordert die jeweiligen Satzglieder ein."
  }
];


// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K7_DEUTSCH_QUESTIONS = K7_DEUTSCH_QUESTIONS;
}

if (typeof window !== 'undefined') window.K7_DEUTSCH_QUESTIONS = K7_DEUTSCH_QUESTIONS;
if (typeof registerQuestions === 'function') registerQuestions('K7_DEUTSCH_QUESTIONS', K7_DEUTSCH_QUESTIONS);
