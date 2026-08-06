// ================================================================
// KLASSE 6 - DEUTSCH (LEHRPLAN NRW)
// ================================================================

const K6_DEUTSCH_QUESTIONS = [
  // --- FABELN & SAGEN ---
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

  // --- GRAMMATIK & ZEITFORMEN ---
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

  // --- RECHTSCHREIBUNG & REGEN (DASS / DAS) ---
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

  // --- SATZGLIEDER & PRÄPOSITIONALOBJEKT ---
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
  }
];

if (typeof window !== 'undefined') window.K6_DEUTSCH_QUESTIONS = K6_DEUTSCH_QUESTIONS;
if (typeof registerQuestions === 'function') registerQuestions('K6_DEUTSCH_QUESTIONS', K6_DEUTSCH_QUESTIONS);
