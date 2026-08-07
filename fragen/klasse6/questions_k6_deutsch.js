// ================================================================
// KLASSE 6 - DEUTSCH (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K6_DEUTSCH_QUESTIONS = [
  // --- FABELN & SAGEN (001 - 004) ---
  {
    "id": "k6_de_001",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist das Hauptmerkmal einer Fabel?",
    "answers": [
      "Tiere handeln wie Menschen",
      "Pflanzen erzählen Märchen",
      "Ritter kämpfen um Burgen",
      "Götter lenken das Schicksal"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In Fabeln verkörpern Tiere menschliche Eigenschaften."
  },
  {
    "id": "k6_de_002",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wie nennt man den Lehrsatz am Ende einer Fabel?",
    "answers": [
      "Moral der Erzählung",
      "Pointe des Gedichtes",
      "Prototyp der Fabeln",
      "Kritik der Geschichte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Moral fasst die Lehre der Fabel zusammen."
  },
  {
    "id": "k6_de_003",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welche Eigenschaft schreibt man dem Fuchs in Fabeln zu?",
    "answers": [
      "Schlauheit und List",
      "Stumpfsinn und Ruhe",
      "Stärke und Frohsinn",
      "Ängstlichkeit und Mut"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Fuchs Reineke gilt in Fabeln als hinterlistig und schlau."
  },
  {
    "id": "k6_de_004",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was unterscheidet eine Sage von einem Märchen?",
    "answers": [
      "Bezug zu echten Orten",
      "Tiere die sprechen",
      "Erfundene Wunderwesen",
      "Happy End am Schluss"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sagen knüpfen oft an reale Orte oder Ereignisse an."
  },

  // --- GRAMMATIK & ZEITFORMEN (005 - 008) ---
  {
    "id": "k6_de_005",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wie lautet die Zeitform 'Plusquamperfekt' auf Deutsch?",
    "answers": [
      "Vollendete Vergangenheit",
      "Einfache Gegenwartssprache",
      "Zukünftige Vergangenheit",
      "Abgeschlossene Zukunft"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Plusquamperfekt ist die Vorvergangenheit."
  },
  {
    "id": "k6_de_006",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welcher Satz steht im Plusquamperfekt?",
    "answers": [
      "Er hatte lange gewartet",
      "Er hat lange gewartet",
      "Er wird lange warten",
      "Er wartete sehr lange"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Plusquamperfekt wird mit hatte/war + Partizip II gebildet."
  },
  {
    "id": "k6_de_007",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was kennzeichnet den grammatikalischen Passivsatz?",
    "answers": [
      "Handlung steht im Zentrum",
      "Täter wird stark betont",
      "Zeitform ist nur Futur I",
      "Nomen fällt komplett weg"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Passiv ist wichtig, WAS geschieht, nicht WER es tut."
  },
  {
    "id": "k6_de_008",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wandle in Passiv um: 'Der Koch backt den Kuchen.'",
    "answers": [
      "Kuchen wird gebacken",
      "Koch hat gebacken",
      "Kuchen backt der Koch",
      "Koch wird backen heute"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Passiv Präsens: 'Der Kuchen wird (vom Koch) gebacken.'"
  },

  // --- RECHTSCHREIBUNG & DASS/DAS (009 - 012) ---
  {
    "id": "k6_de_009",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wann schreibt man 'das' mit einfachem 's'?",
    "answers": [
      "Ersetzbar durch 'dieses'",
      "Nach einem Komma immer",
      "Am Satzanfang grundsätzlich",
      "Vor jedem Adjektiv immer"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kann man 'jenes', 'welches' oder 'dieses' einsetzen, schreibt man 'das'."
  },
  {
    "id": "k6_de_010",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welcher Satz ist rechtschreiblich korrekt?",
    "answers": [
      "Ich weiß, dass du kommst",
      "Ich weiß, das du kommst",
      "Ich weiß dass, du kommst",
      "Ich weiß das, du kommst"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Bindewort-Konjunktion 'dass' leitet den Nebensatz ein."
  },
  {
    "id": "k6_de_011",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist ein Adverb im Satzbau?",
    "answers": [
      "Umstandswort zur Angabe",
      "Tätigkeitswort zur Tat",
      "Eigenschaftswort zur Art",
      "Bindewort für Nebensätze"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Adverbien beschreiben Umstände von Ort, Zeit, Grund oder Art."
  },
  {
    "id": "k6_de_012",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Wort ist ein Temporaladverb (Zeit)?",
    "answers": [
      "gestern",
      "draußen",
      "deshalb",
      "sehr"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'gestern' beschreibt die zeitliche Komponente."
  },

  // --- SATZGLIEDER & OBJEKTE (013 - 015) ---
  {
    "id": "k6_de_013",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wie erfragt man das Präpositionalobjekt?",
    "answers": [
      "Mit wem? / Worüber?",
      "Wer oder was genau?",
      "Wen oder was genau?",
      "Wann und wo genau?"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Präpositionalobjekte hängen an einer Präposition (z. B. 'warten auf' -> 'Worauf?')."
  },
  {
    "id": "k6_de_014",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist das Präpositionalobjekt in: 'Er wartet auf den Bus'?",
    "answers": [
      "auf den Bus",
      "Er wartet",
      "den Bus",
      "wartet auf"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Objekt beinhaltet die Präposition: 'auf den Bus'."
  },
  {
    "id": "k6_de_015",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist ein Relativsatz?",
    "answers": [
      "Erklärender Nebensatz",
      "Satz ohne ein Subjekt",
      "Satz mit einem Ausruf",
      "Aufforderung an Leser"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Relativsätze beschreiben ein Nomen näher und werden mit Pronomen eingeleitet."
  },

  // --- LYRIK, REIME & RHETORIK (016 - 018) ---
  {
    "id": "k6_de_016",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Reimschema hat die Form ABAB?",
    "answers": [
      "Kreuzreim im Gedicht",
      "Paarreim im Gedicht",
      "Umarmender Reimstil",
      "Schweifreim im Text"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Kreuzreim reimen sich die Zeilen 1 und 3 sowie 2 und 4."
  },
  {
    "id": "k6_de_017",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Reimschema zeigt das Muster ABBA?",
    "answers": [
      "Umarmender Reimstil",
      "Kreuzreim im Gedicht",
      "Paarreim im Gedicht",
      "Haufenreim im Text"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim umarmenden Reim umschließen die Reime A den Reim B."
  },
  {
    "id": "k6_de_018",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was bedeutet das Stilmuster 'Personifikation'?",
    "answers": [
      "Unbelebtes wird menschlich",
      "Starke Übertreibung im Satz",
      "Satzvergleich mit dem Wort wie",
      "Wiederholung gleicher Laute"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beispiel: 'Die Sonne lacht'."
  },

  // --- PRONOMEN (019 - 020) ---
  {
    "id": "k6_de_019",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Wort ist ein Possessivpronomen?",
    "answers": [
      "mein",
      "dieser",
      "welcher",
      "niemand"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Possessivpronomen zeigen Besitz an."
  },
  {
    "id": "k6_de_020",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Wort ist ein Demonstrativpronomen?",
    "answers": [
      "jener",
      "mein",
      "etwas",
      "welcher"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Demonstrativpronomen weisen auf etwas Bestimmtes hin."
  },

  // --- BERICHTEN & BESCHREIBEN (021 - 024) ---
  {
    "id": "k6_de_021",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welche W-Frage gehört NICHT zum Bericht?",
    "answers": [
      "Wie gefällt mir das?",
      "Wann geschah der Vorfall?",
      "Wo fand das Ereignis statt?",
      "Wer war daran beteiligt?"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Persönliche Meinungen gehören nicht in einen sachlichen Bericht."
  },
  {
    "id": "k6_de_022",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "In welcher Zeitform schreibt man Berichte?",
    "answers": [
      "Präteritum als Grundzeit",
      "Futur I als Grundzeitform",
      "Perfekt als Grundzeitform",
      "Präsens als Grundzeitform"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Berichte werden im Präteritum verfasst."
  },
  {
    "id": "k6_de_023",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was kennzeichnet eine Personenbeschreibung?",
    "answers": [
      "Sachliche äußere Merkmale",
      "Spannungsgeladene Handlung",
      "Reine Erfindung der Figur",
      "Witzige Pointe am Schluss"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Personenbeschreibung erfasst das Aussehen sachlich und genau."
  },
  {
    "id": "k6_de_024",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wie beschreibt man Gegenstände am besten?",
    "answers": [
      "Systematisch von außen",
      "In einer erfundenen Story",
      "Mit vielen Gefühls-Wörtern",
      "Durch plötzliche Pointen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Gegenstandsbeschreibung erfolgt geordnet und objektiv."
  },

  // --- AKTIV & PASSIV (025 - 027) ---
  {
    "id": "k6_de_025",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist ein Aktivsatz im Satzgefüge?",
    "answers": [
      "Subjekt handelt aktiv",
      "Handlung steht im Fokus",
      "Verb steht ganz am Ende",
      "Nomen wird weggelassen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Aktiv führt das Subjekt die Handlung selbst aus."
  },
  {
    "id": "k6_de_026",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wie bildet man das Zustandspassiv?",
    "answers": [
      "sein + Partizip II",
      "werden + Partizip II",
      "haben + Partizip II",
      "werden + Infinitiv"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Zustandspassiv drückt das Ergebnis einer Handlung aus ('ist geöffnet')."
  },
  {
    "id": "k6_de_027",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welcher Satz steht im Zustandspassiv?",
    "answers": [
      "Das Fenster ist geschlossen",
      "Das Fenster wird geschlossen",
      "Er schließt gerade das Fenster",
      "Er hat das Fenster geschlossen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'ist geschlossen' zeigt den Zustand nach der Handlung."
  },

  // --- ZEITFORMEN (028 - 030) ---
  {
    "id": "k6_de_028",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welche Zeitform ist: 'Ich werde laufen'?",
    "answers": [
      "Futur I in der Grammatik",
      "Präsens in der Grammatik",
      "Perfekt in der Grammatik",
      "Futur II in der Grammatik"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "werden + Infinitiv bildet das Futur I."
  },
  {
    "id": "k6_de_029",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welche Zeitform ist: 'Ich werde gelaufen sein'?",
    "answers": [
      "Futur II in der Grammatik",
      "Futur I in der Grammatik",
      "Plusquamperfekt im Satz",
      "Perfekt in der Grammatik"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "werden + Partizip II + sein/haben bildet das Futur II."
  },
  {
    "id": "k6_de_030",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist das Prädikat in einem Hauptsatz?",
    "answers": [
      "Die verbale Handlung",
      "Die handelnde Person",
      "Der Ort des Geschehens",
      "Die Zeit des Geschehens"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Prädikat wird durch Verben gebildet und sagt, was getan wird."
  },

  // --- OBJEKTE & ADVERBIALE BESTIMMUNGEN (031 - 038) ---
  {
    "id": "k6_de_031",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wie erfragt man das Dativobjekt?",
    "answers": [
      "Mit der Frage: Wem?",
      "Mit der Frage: Wen?",
      "Mit der Frage: Was?",
      "Mit der Frage: Wo?"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Dativobjekt = 3. Fall, Fragewort 'Wem?'."
  },
  {
    "id": "k6_de_032",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wie erfragt man das Akkusativobjekt?",
    "answers": [
      "Wen oder was genau?",
      "Wem oder was genau?",
      "Wer oder was genau?",
      "Wo oder wohin genau?"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Akkusativobjekt = 4. Fall, Fragewort 'Wen oder was?'."
  },
  {
    "id": "k6_de_033",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Satzglied ist 'dem Freund' in: 'Er hilft dem Freund'?",
    "answers": [
      "Dativobjekt im Satz",
      "Akkusativobjekt im Satz",
      "Genitivobjekt im Satz",
      "Präpositionalobjekt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wem hilft er? Dem Freund (Dativobjekt)."
  },
  {
    "id": "k6_de_034",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Satzglied ist 'den Hund' in: 'Sie füttert den Hund'?",
    "answers": [
      "Akkusativobjekt im Satz",
      "Dativobjekt im Grammatiksatz",
      "Genitivobjekt im Satzbau",
      "Präpositionalobjekt im Satz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wen oder was füttert sie? Den Hund (Akkusativobjekt)."
  },
  {
    "id": "k6_de_035",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wie erfragt man eine Lokaladverbiale?",
    "answers": [
      "Wo / Wohin / Woher?",
      "Wann / Wie lange?",
      "Warum / Weshalb?",
      "Wie / Auf welche Art?"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Lokaladverbien bezeichnen Orte."
  },
  {
    "id": "k6_de_036",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wie erfragt man eine Temporaladverbiale?",
    "answers": [
      "Wann / Wie lange?",
      "Wo / Wohin genau?",
      "Warum / Aus welchem Grund?",
      "Wie / Auf welche Art?"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Temporaladverbien bezeichnen Zeitangaben."
  },
  {
    "id": "k6_de_037",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wie erfragt man eine Kausaladverbiale?",
    "answers": [
      "Warum / Weshalb?",
      "Wo / Wohin genau?",
      "Wann / Wie lange?",
      "Wie / Auf welche Weise?"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kausaladverbien bezeichnen Gründe."
  },
  {
    "id": "k6_de_038",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wie erfragt man eine Modaladverbiale?",
    "answers": [
      "Wie / Auf welche Art?",
      "Warum / Weshalb genau?",
      "Wo / Wohin überhaupt?",
      "Wann / Wie lange schon?"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Modaladverbien bezeichnen Art und Weise."
  },

  // --- SATZBAU & NEBENSÄTZE (039 - 044) ---
  {
    "id": "k6_de_039",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist ein Hauptsatz im Satzgefüge?",
    "answers": [
      "Kann alleine stehen",
      "Braucht ein Komma stets",
      "Verb steht ganz am Ende",
      "Leitet Nebensätze ein"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Hauptsatz bildet einen vollständigen Sinn ohne Nebensatz."
  },
  {
    "id": "k6_de_040",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist ein Nebensatz im Satzbau?",
    "answers": [
      "Verb steht ganz am Ende",
      "Kann alleine existieren",
      "Steht immer ganz vorne",
      "Enthält kein Subjekt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Typisch für Nebensätze ist die Endstellung des finiten Verbs."
  },
  {
    "id": "k6_de_041",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welche Konjunktion leitet Kausalsätze ein?",
    "answers": [
      "weil",
      "obwohl",
      "damit",
      "während"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'weil' begründet das Geschehen."
  },
  {
    "id": "k6_de_042",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welche Konjunktion leitet Konditionalsätze ein?",
    "answers": [
      "wenn",
      "obwohl",
      "weil",
      "sodass"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'wenn' drückt eine Bedingung aus."
  },
  {
    "id": "k6_de_043",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welche Konjunktion leitet Konzessivsätze ein?",
    "answers": [
      "obwohl",
      "weil",
      "damit",
      "während"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'obwohl' drückt einen Gegengrund aus."
  },
  {
    "id": "k6_de_044",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welche Konjunktion leitet Finalsätze ein?",
    "answers": [
      "damit",
      "weil",
      "obwohl",
      "indem"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'damit' drückt eine Absicht oder ein Ziel aus."
  },

  // --- RECHTSCHREIBUNG & S-LAUTE (045 - 050) ---
  {
    "id": "k6_de_045",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wann schreibt man Wörter mit 'ss'?",
    "answers": [
      "Nach kurzem Vokal",
      "Nach langem Vokal",
      "Nach einem Zwielaut",
      "Nach jedem Konsonant"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nach kurz gesprochenem Vokal folgt doppelter Konsonant (ss)."
  },
  {
    "id": "k6_de_046",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wann schreibt man Wörter mit 'ß'?",
    "answers": [
      "Nach langem Vokal",
      "Nach kurzem Vokal",
      "Vor zwei Konsonanten",
      "Am Wortanfang immer"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nach langem Vokal oder Diphthong (Dauer/Ei) steht 'ß'."
  },
  {
    "id": "k6_de_047",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Wort ist orthografisch korrekt geschrieben?",
    "answers": [
      "Fluss",
      "Fluß",
      "Flus",
      "Flussss"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kurzes u = Schreibweise mit ss."
  },
  {
    "id": "k6_de_048",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Wort ist orthografisch korrekt geschrieben?",
    "answers": [
      "Straße",
      "Strasse",
      "Strasze",
      "Strahse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Langes a = Schreibweise mit ß."
  },
  {
    "id": "k6_de_049",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Wort zeigt ein Dehnungs-h?",
    "answers": [
      "fahren",
      "fallen",
      "fangen",
      "finden"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das h in 'fahren' dehnt den Vokal a."
  },
  {
    "id": "k6_de_050",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wann werden Adjektive großgeschrieben?",
    "answers": [
      "Nach einem Artikel",
      "Vor einem Nomen stets",
      "Nach jedem Komma immer",
      "Am Satzende generell"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Substantivierte Adjektive mit Artikel/Pronomen werden großgeschrieben (z. B. 'das Schöne')."
  },

  // --- PRÄPOSITIONEN & FÄLLE (051 - 054) ---
  {
    "id": "k6_de_051",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Wort ist eine Präposition?",
    "answers": [
      "unter",
      "laufen",
      "schöne",
      "schnell"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'unter' ist ein Verhältniswort."
  },
  {
    "id": "k6_de_052",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welche Präposition fordert den Genitiv?",
    "answers": [
      "wegen",
      "mit",
      "durch",
      "aus"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "wegen des Wetters (Genitiv)."
  },
  {
    "id": "k6_de_053",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welche Präposition fordert den Dativ?",
    "answers": [
      "aus",
      "durch",
      "für",
      "gegen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "aus dem Haus (Dativ)."
  },
  {
    "id": "k6_de_054",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welche Präposition fordert den Akkusativ?",
    "answers": [
      "durch",
      "mit",
      "nach",
      "von"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "durch den Wald (Akkusativ)."
  },

  // --- SEMANTIK & WORTBEDEUTUNGEN (055 - 060) ---
  {
    "id": "k6_de_055",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was bedeutet Homonymie in der Sprachlehre?",
    "answers": [
      "Ein Wort, zwei Bedeutungen",
      "Zwei Wörter, gleicher Sinn",
      "Wörter mit Gegenteil-Sinn",
      "Wörter aus Fremdsprachen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Homonym ist ein Teekesselchen (ein Wort für zwei Verschiedenes)."
  },
  {
    "id": "k6_de_056",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was bedeutet Synonymie in der Sprachlehre?",
    "answers": [
      "Bedeutungsähnliche Wörter",
      "Wörter mit Gegenteil-Sinn",
      "Gleicher Klang, andere Form",
      "Völlig erfundene Wörter"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Synonyme sind bedeutungsähnliche Wörter."
  },
  {
    "id": "k6_de_057",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was bedeutet Antonymie in der Sprachlehre?",
    "answers": [
      "Wörter mit Gegenteil-Sinn",
      "Bedeutungsgleiche Wörter",
      "Wörter mit zwei Bedeutungen",
      "Fremdwörter aus dem Latein"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Antonyme sind gegensätzliche Wörter (z. B. warm – kalt)."
  },
  {
    "id": "k6_de_058",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist ein Synonym für das Wort 'groß'?",
    "answers": [
      "riesig",
      "klein",
      "schmal",
      "dunkel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'riesig' hat eine sehr ähnliche Bedeutung wie 'groß'."
  },
  {
    "id": "k6_de_059",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist ein Antonym zum Wort 'mutig'?",
    "answers": [
      "ängstlich",
      "tapfer",
      "kühn",
      "stark"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'ängstlich' ist das genaue Gegenteil von 'mutig'."
  },
  {
    "id": "k6_de_060",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist ein Teekesselchen (Homonym)?",
    "answers": [
      "Schimmel",
      "Bleistift",
      "Computer",
      "Hausdach"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Schimmel' bezeichnet ein weißes Pferd und auch Pilzbefall."
  },

  // --- KLASSISCHE SAGENFIGUREN (061 - 063) ---
  {
    "id": "k6_de_061",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was charakterisiert Till Eulenspiegel?",
    "answers": [
      "Nimmt Redensarten wörtlich",
      "Ist ein ernster Ritterkönig",
      "Hilft Armen als lieber Prinz",
      "Ist ein alter Zauberer im Wald"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Till Eulenspiegel hält den Menschen den Spiegel vor, indem er Wendungen wörtlich nimmt."
  },
  {
    "id": "k6_de_062",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was kennzeichnet Geschichten der Schildbürger?",
    "answers": [
      "Absurde und dumme Streiche",
      "Heldengeschichten im Krieg",
      "Schreckliche Gruselgeschichten",
      "Romantische Liebeserzählungen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Schildbürger bauen z. B. ein Rathaus ohne Fenster."
  },
  {
    "id": "k6_de_063",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welche Figur ist bekannt für Übertreibungen?",
    "answers": [
      "Baron Münchhausen",
      "Till Eulenspiegel",
      "Der Rattenfänger",
      "Meister Reineke"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Baron Münchhausen ist als 'Lügenbaron' berühmt."
  },

  // --- INHALTSANGABE & DIREKTE REDE (064 - 070) ---
  {
    "id": "k6_de_064",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist eine Inhaltsangabe?",
    "answers": [
      "Sachliche Kurzzusammenfassung",
      "Spannungsgeladene Fortsetzung",
      "Erfundene Geschichte dazu",
      "Wörtliche Abschrift vom Buch"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sie gibt wesentliche Inhalte knapp und sachlich wieder."
  },
  {
    "id": "k6_de_065",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "In welcher Zeitform verfasst man Inhaltsangaben?",
    "answers": [
      "Präsens als Standardform",
      "Präteritum als Hauptform",
      "Perfekt als Grundzeitform",
      "Plusquamperfekt im Satz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Inhaltsangaben stehen immer in der Gegenwart (Präsens)."
  },
  {
    "id": "k6_de_066",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was gehört NICHT in eine Inhaltsangabe?",
    "answers": [
      "Spannungselemente & Zitate",
      "Die wichtigsten Ereignisse",
      "Name des Autors und Titel",
      "Hauptfiguren der Erzählung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wörtliche Zitate und künstliche Spannung gehören nicht hinein."
  },
  {
    "id": "k6_de_067",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist direkte Rede in Erzählungen?",
    "answers": [
      "Wörtlich gesprochener Satz",
      "Zusammenfassung vom Sprechen",
      "Stille Gedanken der Figuren",
      "Erklärung durch den Erzähler"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Direkte Rede gibt Äußerungen genau im Wortlaut wieder."
  },
  {
    "id": "k6_de_068",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welche Satzzeichen gehören zur direkten Rede?",
    "answers": [
      "Anführungszeichen & Komma",
      "Nur zwei runde Klammern",
      "Ausschließlich Bindestriche",
      "Ausschließlich Semikolons"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gesprochenes steht in Anführungszeichen."
  },
  {
    "id": "k6_de_069",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wo stehen die Anführungszeichen unten?",
    "answers": [
      "Am Anfang der Rede",
      "Am Ende der Rede",
      "Nach dem Komma stets",
      "Vor dem Punkt oben"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Deutschen leiten untenstehende Anführungszeichen ein."
  },
  {
    "id": "k6_de_070",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wo stehen die Anführungszeichen oben?",
    "answers": [
      "Am Ende der Rede",
      "Am Anfang der Rede",
      "Nach jedem Wort stets",
      "Vor dem Doppelpunkt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Obenstehende Anführungszeichen schließen das Gesprochene ab."
  },

  // --- WORTFELDER, WORTFAMILIEN, PRÄFIX/SUFFIX (071 - 081) ---
  {
    "id": "k6_de_071",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist ein Wortfeld in der Sprachlehre?",
    "answers": [
      "Wörter ähnlicher Bedeutung",
      "Wörter gleicher Grammatik",
      "Wörter mit selbem Satzteil",
      "Wörter aus einer Sprache"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Wortfeld fasst sinnverwandte Wörter zusammen."
  },
  {
    "id": "k6_de_072",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Wort gehört zum Wortfeld 'gehen'?",
    "answers": [
      "schlendern",
      "rufen",
      "sehen",
      "denken"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'schlendern' beschreibt eine Fortbewegungsart zu Fuß."
  },
  {
    "id": "k6_de_073",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Wort gehört zum Wortfeld 'sagen'?",
    "answers": [
      "flüstern",
      "rennen",
      "springen",
      "schlafen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'flüstern' ist eine Art des Sprechens."
  },
  {
    "id": "k6_de_074",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist eine Wortfamilie?",
    "answers": [
      "Wörter mit selbem Stamm",
      "Wörter gleicher Wortart",
      "Wörter mit selbem Vokal",
      "Wörter in einer Zeile"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wörter einer Wortfamilie teilen sich den gleichen Wortstamm."
  },
  {
    "id": "k6_de_075",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welcher Wortstamm steckt in 'Fahrrad, Fahrer, Fahrt'?",
    "answers": [
      "fahr",
      "rad",
      "er",
      "fahrr"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der gemeinsame Wortstamm lautet 'fahr'."
  },
  {
    "id": "k6_de_076",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist ein Präfix bei der Wortbildung?",
    "answers": [
      "Vorsilbe vor dem Wortstamm",
      "Nachsilbe nach dem Wortstamm",
      "Der mittlere Teil des Wortes",
      "Die Endung für Fälle im Satz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Präfix steht vor dem Stamm (z. B. ent-kommen)."
  },
  {
    "id": "k6_de_077",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist ein Suffix bei der Wortbildung?",
    "answers": [
      "Nachsilbe nach dem Wortstamm",
      "Vorsilbe vor dem Wortstamm",
      "Der Kern eines Hauptwortes",
      "Der Bindestrich im Wortbau"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Suffix steht nach dem Stamm (z. B. lehr-reich)."
  },
  {
    "id": "k6_de_078",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Wort enthält ein Präfix?",
    "answers": [
      "umbauen",
      "baubar",
      "Bauung",
      "Bautyp"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'um-' ist eine Vorsilbe vor 'bauen'."
  },
  {
    "id": "k6_de_079",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Wort enthält ein Suffix?",
    "answers": [
      "lesbar",
      "vorlesen",
      "mitlesen",
      "ablesen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'-bar' ist eine Nachsilbe."
  },
  {
    "id": "k6_de_080",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was bewirkt das Suffix '-heit' bei Adjektiven?",
    "answers": [
      "Bildet ein abstraktes Nomen",
      "Macht das Wort zum Zeitwort",
      "Bildet eine Steigerungsform",
      "Verwandelt es in ein Adverb"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aus 'schön' wird das Nomen 'Schönheit'."
  },
  {
    "id": "k6_de_081",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welche Wortart entsteht durch '-ung' an Verben?",
    "answers": [
      "Nomen (Substantiv)",
      "Adjektiv (Wie-Wort)",
      "Adverb (Umstandswort)",
      "Pronomen (Fürwort)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aus 'bewegen' wird das Nomen 'Bewegung'."
  },

  // --- VIER GRAMMATISCHE FÄLLE (082 - 088) ---
  {
    "id": "k6_de_082",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welcher Fall ist der Genitiv?",
    "answers": [
      "2. Fall (Wessen-Fall)",
      "1. Fall (Wer-Fall)",
      "3. Fall (Wem-Fall)",
      "4. Fall (Wen-Fall)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der 2. Fall antwortet auf 'Wessen?'."
  },
  {
    "id": "k6_de_083",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welcher Fall ist der Dativ?",
    "answers": [
      "3. Fall (Wem-Fall)",
      "1. Fall (Wer-Fall)",
      "2. Fall (Wessen-Fall)",
      "4. Fall (Wen-Fall)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der 3. Fall antwortet auf 'Wem?'."
  },
  {
    "id": "k6_de_084",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welcher Fall ist der Akkusativ?",
    "answers": [
      "4. Fall (Wen-Fall)",
      "1. Fall (Wer-Fall)",
      "2. Fall (Wessen-Fall)",
      "3. Fall (Wem-Fall)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der 4. Fall antwortet auf 'Wen oder was?'."
  },
  {
    "id": "k6_de_085",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welcher Fall ist der Nominativ?",
    "answers": [
      "1. Fall (Wer-Fall)",
      "2. Fall (Wessen-Fall)",
      "3. Fall (Wem-Fall)",
      "4. Fall (Wen-Fall)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der 1. Fall antwortet auf 'Wer oder was?'."
  },
  {
    "id": "k6_de_086",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Bestimme den Fall von 'des Vaters'?",
    "answers": [
      "Genitiv im Satzbau",
      "Nominativ im Satz",
      "Dativ im Satzbau",
      "Akkusativ im Satz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wessen Buch? Des Vaters (Genitiv)."
  },
  {
    "id": "k6_de_087",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Bestimme den Fall von 'dem Kind'?",
    "answers": [
      "Dativ im Grammatiksatz",
      "Genitiv im Satzgefüge",
      "Akkusativ im Satzbau",
      "Nominativ im Satzbau"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wem gibt er es? Dem Kind (Dativ)."
  },
  {
    "id": "k6_de_088",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Bestimme den Fall von 'den Ball'?",
    "answers": [
      "Akkusativ im Satzbau",
      "Dativ im Grammatiksatz",
      "Genitiv im Satzgefüge",
      "Nominativ im Satzbau"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wen sieht er? Den Ball (Akkusativ)."
  },

  // --- INDEFINITPRONOMEN & LYRIK (089 - 095) ---
  {
    "id": "k6_de_089",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist ein Indefinitpronomen?",
    "answers": [
      "Unbestimmtes Fürwort",
      "Besitzanzeigendes Wort",
      "Bezügliches Fürwort",
      "Hinweisendes Fürwort"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Indefinitpronomen bezeichnen etwas Unbestimmtes (z. B. etwas, jemand)."
  },
  {
    "id": "k6_de_090",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Wort ist ein Indefinitpronomen?",
    "answers": [
      "jemand",
      "dieser",
      "welcher",
      "meiner"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'jemand' verweist unbestimmt auf eine Person."
  },
  {
    "id": "k6_de_091",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was kennzeichnet ein Gedicht?",
    "answers": [
      "Verszeilen und Strophen",
      "Absätze und Überschriften",
      "Bilder und Sprechblasen",
      "Tabellen und Diagramme"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gedichte sind in Strophen und Verse gegliedert."
  },
  {
    "id": "k6_de_092",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wie nennt man eine Zeile im Gedicht?",
    "answers": [
      "Vers im Gedichtbau",
      "Strophe im Gedicht",
      "Metrum im Satzbau",
      "Reimzeile im Text"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine einzelne Gedichtzeile nennt man Vers."
  },
  {
    "id": "k6_de_093",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Wie nennt man eine Gruppe von Versen?",
    "answers": [
      "Strophe im Gedicht",
      "Kapitel im Buchbau",
      "Absatz im Textbild",
      "Strophe im Sachtext"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Verse schließen sich zu Strophen zusammen."
  },
  {
    "id": "k6_de_094",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist eine Metapher in der Lyrik?",
    "answers": [
      "Bildhafter Sprachausdruck",
      "Wörtlicher Satzvergleich",
      "Menschliche Tierfabel",
      "Reim am Zeilenende"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Metapher überträgt ein Wort in einen übertragenen Kontext."
  },
  {
    "id": "k6_de_095",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welcher Ausdruck ist eine Metapher?",
    "answers": [
      "Rabenvater im Text",
      "Schnell wie der Wind",
      "Der Hund bellt laut",
      "Er läuft sehr rasch"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Rabenvater' ist eine Metapher für einen lieblosen Vater."
  },

  // --- RHETORISCHE FIGUREN & SACHTEXTE (096 - 100) ---
  {
    "id": "k6_de_096",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist eine Ellipse in der Grammatik?",
    "answers": [
      "Unvollständiger Satz",
      "Sehr langer Schachtelsatz",
      "Doppelte Verneinung",
      "Wiederholtes Nomen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei einer Ellipse werden unwichtige Satzteile verkürzend weggelassen."
  },
  {
    "id": "k6_de_097",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welcher Satz enthält eine Ellipse?",
    "answers": [
      "Erst die Arbeit, dann das Vergnügen!",
      "Ich gehe heute nach der Schule schnell nach Hause.",
      "Weil es regnete, blieb er drinnen sitzen.",
      "Er hatte den ganzen Tag fleißig gelernt."
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Satz verzichtet komplett auf ein finites Verb."
  },
  {
    "id": "k6_de_098",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist eine Alliteration?",
    "answers": [
      "Gleicher Anfangslaut bei Wörtern",
      "Reim am Ende von zwei Versen",
      "Gegenüberstellung von zwei Worten",
      "Frage ohne eine Echte Antwort"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mehrere Wörter beginnen mit demselben Laut."
  },
  {
    "id": "k6_de_099",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Welches Beispiel zeigt eine Alliteration?",
    "answers": [
      "Wind und Wetter wehen",
      "Der Himmel ist hellblau",
      "Er rennt schnell nach Hause",
      "Der Hund schläft friedlich"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Alle drei Hauptwörter beginnen mit dem Laut 'W'."
  },
  {
    "id": "k6_de_100",
    "category": "k6_deutsch",
    "area": "schule",
    "grade": 6,
    "subject": "deutsch",
    "question": "Was ist ein Sachtext im Gegensatz zur Literatur?",
    "answers": [
      "Informiert über reale Fakten",
      "Erzählt erfundene Märchen",
      "Reimt sich in jeder Zeile",
      "Besteht nur aus Dialogen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sachtexte dienen der objektiv-sachlichen Information über reale Themen."
  }
];

// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K6_DEUTSCH_QUESTIONS = K6_DEUTSCH_QUESTIONS;
}