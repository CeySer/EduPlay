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
      "Götter lenken das Schicksal",
      "Pflanzen erzählen Märchen",
      "Ritter kämpfen um Burgen"
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
      "Kritik der Geschichte",
      "Prototyp der Fabeln"
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
      "Stumpfsinn und Ruhe",
      "Ängstlichkeit und Mut",
      "Schlauheit und List",
      "Stärke und Frohsinn"
    ],
    "correct": 2,
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
      "Erfundene Wunderwesen",
      "Tiere die sprechen",
      "Happy End am Schluss",
      "Bezug zu echten Orten"
    ],
    "correct": 3,
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
      "Einfache Gegenwartssprache",
      "Vollendete Vergangenheit",
      "Abgeschlossene Zukunft",
      "Zukünftige Vergangenheit"
    ],
    "correct": 1,
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
      "Er wird lange warten",
      "Er wartete sehr lange",
      "Er hatte lange gewartet",
      "Er hat lange gewartet"
    ],
    "correct": 2,
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
      "Täter wird stark betont",
      "Handlung steht im Zentrum",
      "Zeitform ist nur Futur I",
      "Nomen fällt komplett weg"
    ],
    "correct": 1,
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
      "Koch wird backen heute",
      "Kuchen wird gebacken",
      "Kuchen backt der Koch",
      "Koch hat gebacken"
    ],
    "correct": 1,
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
      "Ich weiß das, du kommst",
      "Ich weiß dass, du kommst",
      "Ich weiß, das du kommst",
      "Ich weiß, dass du kommst"
    ],
    "correct": 3,
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
      "Eigenschaftswort zur Art",
      "Tätigkeitswort zur Tat",
      "Bindewort für Nebensätze",
      "Umstandswort zur Angabe"
    ],
    "correct": 3,
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
      "deshalb",
      "draußen",
      "gestern",
      "sehr"
    ],
    "correct": 2,
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
      "Wann und wo genau?",
      "Wen oder was genau?",
      "Wer oder was genau?",
      "Mit wem? / Worüber?"
    ],
    "correct": 3,
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
      "wartet auf",
      "den Bus"
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
      "Satz mit einem Ausruf",
      "Satz ohne ein Subjekt",
      "Erklärender Nebensatz",
      "Aufforderung an Leser"
    ],
    "correct": 2,
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
      "Schweifreim im Text",
      "Kreuzreim im Gedicht",
      "Umarmender Reimstil",
      "Paarreim im Gedicht"
    ],
    "correct": 1,
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
      "Kreuzreim im Gedicht",
      "Paarreim im Gedicht",
      "Umarmender Reimstil",
      "Haufenreim im Text"
    ],
    "correct": 2,
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
      "Wiederholung gleicher Laute",
      "Satzvergleich mit dem Wort wie",
      "Unbelebtes wird menschlich",
      "Starke Übertreibung im Satz"
    ],
    "correct": 2,
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
      "dieser",
      "welcher",
      "mein",
      "niemand"
    ],
    "correct": 2,
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
      "welcher",
      "etwas"
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
      "Wo fand das Ereignis statt?",
      "Wann geschah der Vorfall?",
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
      "Futur I als Grundzeitform",
      "Perfekt als Grundzeitform",
      "Präsens als Grundzeitform",
      "Präteritum als Grundzeit"
    ],
    "correct": 3,
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
      "Spannungsgeladene Handlung",
      "Sachliche äußere Merkmale",
      "Reine Erfindung der Figur",
      "Witzige Pointe am Schluss"
    ],
    "correct": 1,
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
      "In einer erfundenen Story",
      "Mit vielen Gefühls-Wörtern",
      "Systematisch von außen",
      "Durch plötzliche Pointen"
    ],
    "correct": 2,
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
      "Handlung steht im Fokus",
      "Verb steht ganz am Ende",
      "Nomen wird weggelassen",
      "Subjekt handelt aktiv"
    ],
    "correct": 3,
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
      "haben + Partizip II",
      "werden + Infinitiv",
      "werden + Partizip II"
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
      "Er schließt gerade das Fenster",
      "Das Fenster ist geschlossen",
      "Er hat das Fenster geschlossen",
      "Das Fenster wird geschlossen"
    ],
    "correct": 1,
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
      "Futur II in der Grammatik",
      "Futur I in der Grammatik",
      "Präsens in der Grammatik",
      "Perfekt in der Grammatik"
    ],
    "correct": 1,
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
      "Plusquamperfekt im Satz",
      "Futur I in der Grammatik",
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
      "Die Zeit des Geschehens",
      "Die handelnde Person",
      "Der Ort des Geschehens",
      "Die verbale Handlung"
    ],
    "correct": 3,
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
      "Mit der Frage: Was?",
      "Mit der Frage: Wem?",
      "Mit der Frage: Wen?",
      "Mit der Frage: Wo?"
    ],
    "correct": 1,
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
      "Wo oder wohin genau?",
      "Wer oder was genau?",
      "Wen oder was genau?",
      "Wem oder was genau?"
    ],
    "correct": 2,
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
      "Genitivobjekt im Satz",
      "Dativobjekt im Satz",
      "Präpositionalobjekt",
      "Akkusativobjekt im Satz"
    ],
    "correct": 1,
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
      "Wie / Auf welche Art?",
      "Wann / Wie lange?",
      "Warum / Weshalb?",
      "Wo / Wohin / Woher?"
    ],
    "correct": 3,
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
      "Wo / Wohin genau?",
      "Wie / Auf welche Art?",
      "Wann / Wie lange?",
      "Warum / Aus welchem Grund?"
    ],
    "correct": 2,
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
      "Wo / Wohin genau?",
      "Warum / Weshalb?",
      "Wann / Wie lange?",
      "Wie / Auf welche Weise?"
    ],
    "correct": 1,
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
      "Wo / Wohin überhaupt?",
      "Warum / Weshalb genau?",
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
      "Leitet Nebensätze ein",
      "Verb steht ganz am Ende",
      "Kann alleine stehen",
      "Braucht ein Komma stets"
    ],
    "correct": 2,
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
      "Kann alleine existieren",
      "Enthält kein Subjekt",
      "Steht immer ganz vorne",
      "Verb steht ganz am Ende"
    ],
    "correct": 3,
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
      "während",
      "weil",
      "obwohl",
      "damit"
    ],
    "correct": 1,
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
      "weil",
      "sodass",
      "obwohl",
      "wenn"
    ],
    "correct": 3,
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
      "damit",
      "weil",
      "obwohl",
      "während"
    ],
    "correct": 2,
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
      "obwohl",
      "weil",
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
      "Nach jedem Konsonant",
      "Nach langem Vokal",
      "Nach einem Zwielaut"
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
      "Nach kurzem Vokal",
      "Vor zwei Konsonanten",
      "Am Wortanfang immer",
      "Nach langem Vokal"
    ],
    "correct": 3,
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
      "Flussss",
      "Flus",
      "Fluß"
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
      "Strasse",
      "Strahse",
      "Strasze",
      "Straße"
    ],
    "correct": 3,
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
      "fallen",
      "fahren",
      "finden",
      "fangen"
    ],
    "correct": 1,
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
      "Am Satzende generell",
      "Nach jedem Komma immer",
      "Vor einem Nomen stets",
      "Nach einem Artikel"
    ],
    "correct": 3,
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
      "schnell",
      "laufen",
      "unter",
      "schöne"
    ],
    "correct": 2,
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
      "mit",
      "durch",
      "wegen",
      "aus"
    ],
    "correct": 2,
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
      "durch",
      "für",
      "gegen",
      "aus"
    ],
    "correct": 3,
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
      "mit",
      "von",
      "nach",
      "durch"
    ],
    "correct": 3,
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
      "Zwei Wörter, gleicher Sinn",
      "Wörter mit Gegenteil-Sinn",
      "Wörter aus Fremdsprachen",
      "Ein Wort, zwei Bedeutungen"
    ],
    "correct": 3,
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
      "Wörter mit Gegenteil-Sinn",
      "Völlig erfundene Wörter",
      "Gleicher Klang, andere Form",
      "Bedeutungsähnliche Wörter"
    ],
    "correct": 3,
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
      "Wörter mit zwei Bedeutungen",
      "Bedeutungsgleiche Wörter",
      "Wörter mit Gegenteil-Sinn",
      "Fremdwörter aus dem Latein"
    ],
    "correct": 2,
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
      "klein",
      "dunkel",
      "schmal",
      "riesig"
    ],
    "correct": 3,
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
      "kühn",
      "ängstlich",
      "stark",
      "tapfer"
    ],
    "correct": 1,
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
      "Hausdach",
      "Computer"
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
      "Hilft Armen als lieber Prinz",
      "Ist ein alter Zauberer im Wald",
      "Nimmt Redensarten wörtlich",
      "Ist ein ernster Ritterkönig"
    ],
    "correct": 2,
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
      "Heldengeschichten im Krieg",
      "Absurde und dumme Streiche",
      "Schreckliche Gruselgeschichten",
      "Romantische Liebeserzählungen"
    ],
    "correct": 1,
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
      "Der Rattenfänger",
      "Till Eulenspiegel",
      "Meister Reineke",
      "Baron Münchhausen"
    ],
    "correct": 3,
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
      "Wörtliche Abschrift vom Buch",
      "Spannungsgeladene Fortsetzung",
      "Erfundene Geschichte dazu"
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
      "Name des Autors und Titel",
      "Hauptfiguren der Erzählung",
      "Die wichtigsten Ereignisse",
      "Spannungselemente & Zitate"
    ],
    "correct": 3,
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
      "Erklärung durch den Erzähler",
      "Stille Gedanken der Figuren",
      "Zusammenfassung vom Sprechen",
      "Wörtlich gesprochener Satz"
    ],
    "correct": 3,
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
      "Ausschließlich Semikolons",
      "Ausschließlich Bindestriche"
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
      "Vor dem Punkt oben",
      "Am Ende der Rede",
      "Am Anfang der Rede",
      "Nach dem Komma stets"
    ],
    "correct": 2,
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
      "Am Anfang der Rede",
      "Vor dem Doppelpunkt",
      "Am Ende der Rede",
      "Nach jedem Wort stets"
    ],
    "correct": 2,
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
      "Wörter gleicher Grammatik",
      "Wörter mit selbem Satzteil",
      "Wörter aus einer Sprache",
      "Wörter ähnlicher Bedeutung"
    ],
    "correct": 3,
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
      "rufen",
      "denken",
      "schlendern",
      "sehen"
    ],
    "correct": 2,
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
      "rennen",
      "schlafen",
      "flüstern",
      "springen"
    ],
    "correct": 2,
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
      "Wörter mit selbem Vokal",
      "Wörter gleicher Wortart",
      "Wörter in einer Zeile",
      "Wörter mit selbem Stamm"
    ],
    "correct": 3,
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
      "fahrr",
      "fahr",
      "rad",
      "er"
    ],
    "correct": 1,
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
      "Die Endung für Fälle im Satz",
      "Nachsilbe nach dem Wortstamm",
      "Der mittlere Teil des Wortes"
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
      "Der Kern eines Hauptwortes",
      "Nachsilbe nach dem Wortstamm",
      "Vorsilbe vor dem Wortstamm",
      "Der Bindestrich im Wortbau"
    ],
    "correct": 1,
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
      "baubar",
      "Bauung",
      "Bautyp",
      "umbauen"
    ],
    "correct": 3,
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
      "mitlesen",
      "lesbar",
      "ablesen",
      "vorlesen"
    ],
    "correct": 1,
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
      "Macht das Wort zum Zeitwort",
      "Bildet ein abstraktes Nomen",
      "Verwandelt es in ein Adverb",
      "Bildet eine Steigerungsform"
    ],
    "correct": 1,
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
      "Adjektiv (Wie-Wort)",
      "Adverb (Umstandswort)",
      "Pronomen (Fürwort)",
      "Nomen (Substantiv)"
    ],
    "correct": 3,
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
      "4. Fall (Wen-Fall)",
      "1. Fall (Wer-Fall)",
      "2. Fall (Wessen-Fall)",
      "3. Fall (Wem-Fall)"
    ],
    "correct": 2,
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
      "2. Fall (Wessen-Fall)",
      "1. Fall (Wer-Fall)",
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
      "1. Fall (Wer-Fall)",
      "3. Fall (Wem-Fall)",
      "2. Fall (Wessen-Fall)",
      "4. Fall (Wen-Fall)"
    ],
    "correct": 3,
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
      "3. Fall (Wem-Fall)",
      "2. Fall (Wessen-Fall)",
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
      "Dativ im Satzbau",
      "Akkusativ im Satz",
      "Nominativ im Satz"
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
      "Genitiv im Satzgefüge",
      "Akkusativ im Satzbau",
      "Dativ im Grammatiksatz",
      "Nominativ im Satzbau"
    ],
    "correct": 2,
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
      "Dativ im Grammatiksatz",
      "Nominativ im Satzbau",
      "Akkusativ im Satzbau",
      "Genitiv im Satzgefüge"
    ],
    "correct": 2,
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
      "Bezügliches Fürwort",
      "Hinweisendes Fürwort",
      "Besitzanzeigendes Wort",
      "Unbestimmtes Fürwort"
    ],
    "correct": 3,
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
      "welcher",
      "jemand",
      "meiner",
      "dieser"
    ],
    "correct": 1,
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
      "Bilder und Sprechblasen",
      "Tabellen und Diagramme",
      "Absätze und Überschriften",
      "Verszeilen und Strophen"
    ],
    "correct": 3,
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
      "Reimzeile im Text",
      "Metrum im Satzbau",
      "Strophe im Gedicht",
      "Vers im Gedichtbau"
    ],
    "correct": 3,
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
      "Absatz im Textbild",
      "Kapitel im Buchbau",
      "Strophe im Gedicht",
      "Strophe im Sachtext"
    ],
    "correct": 2,
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
      "Der Hund bellt laut",
      "Er läuft sehr rasch",
      "Rabenvater im Text",
      "Schnell wie der Wind"
    ],
    "correct": 2,
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
      "Sehr langer Schachtelsatz",
      "Unvollständiger Satz",
      "Wiederholtes Nomen",
      "Doppelte Verneinung"
    ],
    "correct": 1,
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
      "Er hatte den ganzen Tag fleißig gelernt.",
      "Ich gehe heute nach der Schule schnell nach Hause.",
      "Weil es regnete, blieb er drinnen sitzen."
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
      "Gegenüberstellung von zwei Worten",
      "Gleicher Anfangslaut bei Wörtern",
      "Reim am Ende von zwei Versen",
      "Frage ohne eine Echte Antwort"
    ],
    "correct": 1,
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
      "Der Himmel ist hellblau",
      "Wind und Wetter wehen",
      "Der Hund schläft friedlich",
      "Er rennt schnell nach Hause"
    ],
    "correct": 1,
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
      "Reimt sich in jeder Zeile",
      "Besteht nur aus Dialogen",
      "Erzählt erfundene Märchen",
      "Informiert über reale Fakten"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sachtexte dienen der objektiv-sachlichen Information über reale Themen."
  },
  {"id":"k6de101","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Konjunktiv I oft für …","answers":["Nur Lyrik","indirekte Rede","Befehle","Zahlen"],"correct":1,"difficulty":"mittel","points":10,"explanation":"indirekte Rede.","topic":"erweiterung"},
  {"id":"k6de102","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Partizip I von „lachen“?","answers":["gelacht","lachend","lacht","lachte"],"correct":1,"difficulty":"mittel","points":10,"explanation":"lachend.","topic":"erweiterung"},
  {"id":"k6de103","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Metapher vs. Vergleich: Vergleich nutzt oft …","answers":["nur Nomen","wie/als","Kommas","keine Worte"],"correct":1,"difficulty":"mittel","points":10,"explanation":"wie/als.","topic":"erweiterung"},
  {"id":"k6de104","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Erzähler allwissend = …","answers":["personal","neutral kamera","auktorial","Ich-Erzähler"],"correct":2,"difficulty":"mittel","points":10,"explanation":"auktorial.","topic":"erweiterung"},
  {"id":"k6de105","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Rechtschreibung: „Standard“ richtig?","answers":["Standart","Standard","Standartt","Standarth"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Standard.","topic":"erweiterung"},
  {"id":"k6de106","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Passiv Vorgang: werden + …","answers":["Partizip II","Nomen","Präteritum nur","Infinitiv"],"correct":0,"difficulty":"mittel","points":10,"explanation":"Partizip II.","topic":"erweiterung"},
  {"id":"k6de107","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Satzanalyse: Attribut …","answers":["ist immer Prädikat","bestimmt Nomen näher","ersetzt Verb","löscht Subjekt"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Nomen-Begleiter.","topic":"erweiterung"},
  {"id":"k6de108","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Argumentation braucht …","answers":["Zufall","nur Gefühle","nur Meinung","Belege/Begründungen"],"correct":3,"difficulty":"mittel","points":10,"explanation":"Begründung.","topic":"erweiterung"},
  {"id":"k6de109","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Ballade ist …","answers":["nur Sachtext","Kochrezept","Tabelle","episch-lyrisches Erzählgedicht"],"correct":3,"difficulty":"mittel","points":10,"explanation":"erzählendes Gedicht.","topic":"erweiterung"},
  {"id":"k6de110","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Fremdwort „Struktur“ – Plural?","answers":["Strukturs","Strukture","Struktur","Strukturen"],"correct":3,"difficulty":"mittel","points":10,"explanation":"Strukturen.","topic":"erweiterung"},
  {"id":"k6de111","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Nominalstil nutzt viele …","answers":["Interjektionen","Fragezeichen","Verben","Nomen"],"correct":3,"difficulty":"mittel","points":10,"explanation":"Nomen.","topic":"erweiterung"},
  {"id":"k6de112","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Ironie erkennt man oft an …","answers":["Zahlen","Rechtschreibung","wörtlichem Ernst","Kontrast Kontext"],"correct":3,"difficulty":"mittel","points":10,"explanation":"Gegensatz.","topic":"erweiterung"},
  {"id":"k6de113","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Tempus Futur I: werden + …","answers":["Infinitiv","Partizip II","Präteritum","Artikel"],"correct":0,"difficulty":"mittel","points":10,"explanation":"Infinitiv.","topic":"erweiterung"},
  {"id":"k6de114","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Relativsatz beschreibt …","answers":["Seitenzahl","den Autor immer","nur Verben","Bezugsnomen"],"correct":3,"difficulty":"mittel","points":10,"explanation":"Nomen.","topic":"erweiterung"},
  {"id":"k6de115","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Synonym „behaupten“?","answers":["aussagen/meinen","schweigen","bezweifeln","löschen"],"correct":0,"difficulty":"mittel","points":10,"explanation":"etwas als wahr hinstellen.","topic":"erweiterung"},
  {"id":"k6de116","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Antonym „optimistisch“?","answers":["pessimistisch","neutral","hoffnungsvoll","froh"],"correct":0,"difficulty":"mittel","points":10,"explanation":"pessimistisch.","topic":"erweiterung"},
  {"id":"k6de117","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Textlupe: Intention fragen heißt …","answers":["Schriftart","Länge messen","Absicht des Textes","Preis"],"correct":2,"difficulty":"mittel","points":10,"explanation":"Zweck.","topic":"erweiterung"},
  {"id":"k6de118","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Zitieren verlangt …","answers":["Quellenangabe","Geheimhaltung","Zufall","Keine Anführungszeichen"],"correct":0,"difficulty":"mittel","points":10,"explanation":"Beleg.","topic":"erweiterung"},
  {"id":"k6de119","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Adverbiale Bestimmung der Zeit: Beispiel?","answers":["schnell als Adj. falsch","gestern","im Garten","den Ball"],"correct":1,"difficulty":"mittel","points":10,"explanation":"gestern.","topic":"erweiterung"},
  {"id":"k6de120","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Genitiv-Frage?","answers":["Wo?","Wessen?","Wem?","Wen?"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Wessen?","topic":"erweiterung"},
  {"id":"k6de121","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Komposita schreibt man …","answers":["nur mit Bindestrich","meist zusammen/groß als Nomen","getrennt immer","immer klein"],"correct":1,"difficulty":"mittel","points":10,"explanation":"z. B. Bahnhof.","topic":"erweiterung"},
  {"id":"k6de122","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Drama: Dialog ist …","answers":["Gedichtreim nur","Wechselrede","Erzählung","Statistik"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Redewechsel.","topic":"erweiterung"},
  {"id":"k6de123","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Rechtschreibung s/ss/ß: nach langem Vokal oft …","answers":["ss","sss","x","ß"],"correct":3,"difficulty":"mittel","points":10,"explanation":"ß (neue Regeln beachten).","topic":"erweiterung"},
  {"id":"k6de124","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Konjunktion „denn“ leitet …","answers":["Nur Fragen","Nebensatz mit Verbende","Nur Lyrik","Hauptsatzbegründung"],"correct":3,"difficulty":"mittel","points":10,"explanation":"beigordnet.","topic":"erweiterung"},
  {"id":"k6de125","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Perspektive personal: Blick …","answers":["Zufall","einer Figur","nur Erzähler außen allwi","aller"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Figur.","topic":"erweiterung"},
  {"id":"k6de126","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Sachtext Merkmal?","answers":["nur Fiktion","nur Dialog","Information/Fakten","Reimpflicht"],"correct":2,"difficulty":"mittel","points":10,"explanation":"informativ.","topic":"erweiterung"},
  {"id":"k6de127","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Stilmittel Alliteration: gleiche …","answers":["Anlaute","Farbe","Silbenzahl immer","Endreime"],"correct":0,"difficulty":"mittel","points":10,"explanation":"Anlaute.","topic":"erweiterung"},
  {"id":"k6de128","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Imperativ von „geben“ (du)?","answers":["gibst","gib","gegeben","gebt"],"correct":1,"difficulty":"mittel","points":10,"explanation":"gib.","topic":"erweiterung"},
  {"id":"k6de129","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"Kohärenz im Text = …","answers":["Unordnung","Zusammenhang","nur Layout","Zufälligkeit"],"correct":1,"difficulty":"mittel","points":10,"explanation":"roter Faden.","topic":"erweiterung"},
  {"id":"k6de130","category":"k6_deutsch","area":"schule","grade":6,"subject":"deutsch","question":"„dass“-Satz ist …","answers":["Nomen","Hauptsatz immer","Fragesatzzeichen","Nebensatz"],"correct":3,"difficulty":"mittel","points":10,"explanation":"Nebensatz.","topic":"erweiterung"}
];
// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K6_DEUTSCH_QUESTIONS = K6_DEUTSCH_QUESTIONS;
}