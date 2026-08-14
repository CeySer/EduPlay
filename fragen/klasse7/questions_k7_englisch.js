// ================================================================
// KLASSE 7 - ENGLISCH (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K7_ENGLISCH_QUESTIONS = [
  // --- GRAMMATIK & ZEITEN (001 - 025) ---
  {
    "id": "k7_en_001",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which tense is required for a completed action at a specific time in the past (e.g., 'yesterday')?",
    "answers": [
      "The Past Perfect Tense",
      "The Simple Past Tense",
      "The Past Progressive Tense",
      "The Present Perfect Tense"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Signalwörter wie 'yesterday', 'last week' oder 'in 2010' verlangen das Simple Past."
  },
  {
    "id": "k7_en_002",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which sentence correctly uses the Present Perfect Tense?",
    "answers": [
      "She will already visit London.",
      "She had already visited London.",
      "She was already visiting London.",
      "She has already visited London."
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Present Perfect wird mit 'have/has' + Partizip Perfekt (3. Stammform) gebildet."
  },
  {
    "id": "k7_en_003",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Fill in the correct tense: 'While I ... a book, the telephone suddenly rang.'",
    "answers": [
      "had read a long book",
      "would read a long book",
      "have read a long book",
      "was reading a long book"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine im Verlauf befindliche Handlung in der Vergangenheit steht im Past Progressive ('was reading')."
  },
  {
    "id": "k7_en_004",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which relative pronoun is used to refer to people?",
    "answers": [
      "The pronoun: which",
      "The pronoun: where",
      "The pronoun: who",
      "The pronoun: when"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Who' bezieht sich auf Personen, während 'which' für Gegenstände u. Tiere verwendet wird."
  },
  {
    "id": "k7_en_005",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which relative pronoun is used to refer to objects or animals?",
    "answers": [
      "The pronoun: whose",
      "The pronoun: which",
      "The pronoun: who",
      "The pronoun: whom"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Which' wird für Sachen, Gegenstände u. Tiere benutzt."
  },
  {
    "id": "k7_en_006",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which relative pronoun expresses possession (meaning 'dessen' or 'deren')?",
    "answers": [
      "The pronoun: where",
      "The pronoun: whom",
      "The pronoun: whose",
      "The pronoun: which"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Whose' zeigt Besitzverhältnisse an ('The boy whose dog ran away...')."
  },
  {
    "id": "k7_en_007",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which verb form correctly completes Conditional Sentence Type 1: 'If it rains, we ... at home.'?",
    "answers": [
      "would stay at home",
      "had stayed at home",
      "stayed at home today",
      "will stay at home"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Conditionals Type 1: If-Satz im Simple Present, Hauptsatz im Will-Future ('will stay')."
  },
  {
    "id": "k7_en_008",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which verb form correctly completes Conditional Sentence Type 2: 'If I had money, I ... a car.'?",
    "answers": [
      "had bought a car",
      "bought a new car",
      "would buy a new car",
      "will buy a new car"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Conditionals Type 2: If-Satz im Simple Past, Hauptsatz mit 'would' + Infinitiv ('would buy')."
  },
  {
    "id": "k7_en_009",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the comparative form of the adjective 'expensive'?",
    "answers": [
      "Form: most expensive",
      "Form: expensiver than",
      "Form: more expensive",
      "Form: as expensive"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mehrsilbige Adjektive werden mit 'more' verglichen ('more expensive')."
  },
  {
    "id": "k7_en_010",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the superlative form of the adjective 'interesting'?",
    "answers": [
      "Form: more interesting",
      "Form: the interestest book",
      "Form: as interesting as",
      "Form: the most interesting"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Superlativ mehrsilbiger Adjektive wird mit 'the most' gebildet."
  },
  {
    "id": "k7_en_011",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which reflexive pronoun correctly completes the sentence: 'He hurt ... during the football match.'?",
    "answers": [
      "Pronoun: yourself",
      "Pronoun: itself",
      "Pronoun: themselves",
      "Pronoun: himself"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Reflexivpronomen zu 'he' lautet 'himself'."
  },
  {
    "id": "k7_en_012",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which modal auxiliary verb expresses a strict prohibition ('Verbot')?",
    "answers": [
      "Verb: don't have to",
      "Verb: mustn't",
      "Verb: shouldn't",
      "Verb: couldn't"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Mustn't' bedeutet 'nicht dürfen' (Verbot), während 'don't have to' 'nicht müssen' bedeutet."
  },
  {
    "id": "k7_en_013",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which modal verb phrase expresses that something is not necessary ('nicht müssen')?",
    "answers": [
      "Phrase: can't do it",
      "Phrase: mustn't do it",
      "Phrase: shouldn't do",
      "Phrase: don't have to"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Don't have to' drückt aus, dass keine Notwendigkeit besteht."
  },
  {
    "id": "k7_en_014",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "How is the Passive Voice formed in English in general?",
    "answers": [
      "Form: do + past participle",
      "Form: be + past participle",
      "Form: will + past participle",
      "Form: have + past participle"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Passiv wird immer mit einer Form von 'to be' u. dem Past Participle gebildet."
  },
  {
    "id": "k7_en_015",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which sentence is correctly written in the Passive Voice in the Simple Present?",
    "answers": [
      "English has spoken here.",
      "English is spoken here.",
      "English speaks here.",
      "English was speaking."
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Passiv im Present: 'is' + Partizip Perfekt ('is spoken')."
  },
  {
    "id": "k7_en_016",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which question tag matches the statement: 'You are coming to the party, ...?'",
    "answers": [
      "Tag: don't you?",
      "Tag: haven't you?",
      "Tag: isn't it?",
      "Tag: aren't you?"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei positiver Aussage 'you are' lautet der Question Tag 'aren't you?'."
  },
  {
    "id": "k7_en_017",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which question tag matches the statement: 'She played football yesterday, ...?'",
    "answers": [
      "Tag: wasn't she?",
      "Tag: didn't she?",
      "Tag: doesn't she?",
      "Tag: hasn't she?"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aussage im Simple Past verlangt 'didn't' im Question Tag."
  },
  {
    "id": "k7_en_018",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which form is used for a planned future intention (feststehender Plan)?",
    "answers": [
      "The will-future tense",
      "The present perfect",
      "The going-to future",
      "The simple past tense"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Geplante Absichten in der Zukunft werden mit der 'going-to'-Zukunft ausgedrückt."
  },
  {
    "id": "k7_en_019",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which sentence uses an Adverb of Manner correctly?",
    "answers": [
      "She sings very beautier.",
      "She sings very beautifully.",
      "She sings very beautiful.",
      "She sings very beauty."
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Adverbien der Art u. Weise werden von Adjektiven abgeleitet, meist durch Anhängen von '-ly'."
  },
  {
    "id": "k7_en_020",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the correct adverbial form of the adjective 'good'?",
    "answers": [
      "Adverb: best",
      "Adverb: well",
      "Adverb: goodly",
      "Adverb: better"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Adverb zum Adjektiv 'good' ist unregelmäßig u. heißt 'well'."
  },
  {
    "id": "k7_en_021",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which sentence correctly uses the Past Perfect Tense?",
    "answers": [
      "They would leave at sunrise.",
      "They have left before sunrise.",
      "They were leaving at sunrise.",
      "They had left before sunrise."
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Past Perfect ('had' + Partizip) drückt Vorzeitigkeit in der Vergangenheit aus."
  },
  {
    "id": "k7_en_022",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which sentence contains a correct contact clause (omitted relative pronoun)?",
    "answers": [
      "All options are correct.",
      "The girl I saw was happy.",
      "The book I read was great.",
      "The house I built is big."
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ist das Relativpronomen das Objekt im Relativsatz, kann es komplett weggelassen werden (Contact Clause)."
  },
  {
    "id": "k7_en_023",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which preposition is correct: 'We arrived ... London on Tuesday evening.'?",
    "answers": [
      "Preposition: to",
      "Preposition: on",
      "Preposition: in",
      "Preposition: at"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Man sagt 'arrive in' bei Städten u. Ländern, aber 'arrive at' bei spezifischen Orten (z. B. Bahnhof)."
  },
  {
    "id": "k7_en_024",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which sentence correctly uses 'since' instead of 'for'?",
    "answers": [
      "I have lived here since weeks.",
      "I have lived here since days.",
      "I have lived here since 5 years.",
      "I have lived here since 2018."
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Since' bezeichnet einen festen Zeitpunkt (2018, 8 o'clock); 'for' bezeichnet eine Zeitdauer."
  },
  {
    "id": "k7_en_025",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which sentence correctly uses 'for' instead of 'since'?",
    "answers": [
      "He has studied for Monday.",
      "He has studied for 9 o'clock.",
      "He has studied for yesterday.",
      "He has studied for two hours."
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'For' wird bei Zeitspannen verwendet ('for two hours', 'for three days')."
  },

  // --- WORTSCHATZ, IDIOME & KOMMUNIKATION (026 - 050) ---
  {
    "id": "k7_en_026",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the British English word for the American English word 'elevator'?",
    "answers": [
      "The word: flat",
      "The word: lift",
      "The word: subway",
      "The word: stairs"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Auf Britisch heißt Aufzug 'lift', in den USA 'elevator'."
  },
  {
    "id": "k7_en_027",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the British English word for the American English word 'apartment'?",
    "answers": [
      "The word: cabin",
      "The word: house",
      "The word: room",
      "The word: flat"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wohnung heißt im britischen Englisch 'flat', im amerikanischen 'apartment'."
  },
  {
    "id": "k7_en_028",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the British English word for American 'French fries'?",
    "answers": [
      "The word: chips",
      "The word: snacks",
      "The word: potatoes",
      "The word: crisps"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In Großbritannien heißen Pommes 'chips' (Kartoffelchips heißen dort 'crisps')."
  },
  {
    "id": "k7_en_029",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is a 'False Friend' when translating German 'bekommen' into English?",
    "answers": [
      "To become something",
      "To behave properly",
      "To belong to someone",
      "To get / receive"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Deutsch 'bekommen' heißt auf Englisch 'to get' oder 'to receive'. 'To become' heißt 'werden'."
  },
  {
    "id": "k7_en_030",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the correct English translation of the German word 'Gift' (Poison)?",
    "answers": [
      "Translation: poison",
      "Translation: potion",
      "Translation: present",
      "Translation: gift"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gift heißt auf Englisch 'poison'. Das englische Wort 'gift' bedeutet 'Geschenk'."
  },
  {
    "id": "k7_en_031",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the opposite of the adjective 'generous'?",
    "answers": [
      "Adjective: friendly",
      "Adjective: kind",
      "Adjective: polite",
      "Adjective: mean"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Gegenteil von 'generous' (großzügig) ist 'mean' oder 'stingy' (geizig/gemein)."
  },
  {
    "id": "k7_en_032",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the opposite of the adjective 'polite'?",
    "answers": [
      "Adjective: quiet",
      "Adjective: sweet",
      "Adjective: rude",
      "Adjective: nice"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Gegenteil von 'polite' (höflich) ist 'rude' oder 'impolite' (unhöflich)."
  },
  {
    "id": "k7_en_033",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which phrasal verb means 'to give up' or 'stop doing something'?",
    "answers": [
      "Verb: carry on doing",
      "Verb: look forward to",
      "Verb: take care of",
      "Verb: quit / give up"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Give up' bedeutet mit etwas aufhören oder etwas aufgeben."
  },
  {
    "id": "k7_en_034",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which phrasal verb means 'to take care of' a person or pet?",
    "answers": [
      "Verb: look after",
      "Verb: look at",
      "Verb: look into",
      "Verb: look for"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Look after' bedeutet sich um jemanden/etwas kümmern."
  },
  {
    "id": "k7_en_035",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which phrase is used to politely ask for directions in a town?",
    "answers": [
      "Where is the place I want to go...",
      "Show me the way right now please...",
      "Could you tell me how to get to...",
      "Why is the station so far away..."
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Could you tell me how to get to...' ist die höfliche Standardphrase nach dem Weg."
  },
  {
    "id": "k7_en_036",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which phrase expresses a personal opinion in a discussion?",
    "answers": [
      "According to history...",
      "It is a fact that...",
      "In my opinion...",
      "Everybody knows that..."
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'In my opinion...' (Meiner Meinung nach...) leitet den eigenen Standpunkt ein."
  },
  {
    "id": "k7_en_037",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which collocation is correct when talking about schoolwork?",
    "answers": [
      "Collocation: make homework",
      "Collocation: create homework",
      "Collocation: write homework",
      "Collocation: do homework"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Hausaufgaben machen heißt im Englischen immer 'do homework' (nicht 'make')."
  },
  {
    "id": "k7_en_038",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which collocation is correct when talking about errors?",
    "answers": [
      "Collocation: make a mistake",
      "Collocation: perform a mistake",
      "Collocation: build a mistake",
      "Collocation: do a mistake"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Einen Fehler machen heißt auf Englisch 'make a mistake' (nicht 'do')."
  },
  {
    "id": "k7_en_039",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What does the idiom 'to feel under the weather' mean?",
    "answers": [
      "Feeling very happy today",
      "Watching the weather forecast",
      "Feeling slightly unwell",
      "Being wet from the rain"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Under the weather' zu sein bedeutet, sich kränklich oder unwohl zu fühlen."
  },
  {
    "id": "k7_en_040",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What does the idiom 'piece of cake' mean?",
    "answers": [
      "Something very easy",
      "A expensive purchase",
      "A sweet dessert slice",
      "A difficult challenge"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein 'piece of cake' ist eine Redewendung für eine extrem einfache Aufgabe (Kinderleicht)."
  },
  {
    "id": "k7_en_041",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which term describes environmental contamination of air, water or soil?",
    "answers": [
      "The term: weather",
      "The term: pollution",
      "The term: climate",
      "The term: nature"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Pollution' bezeichnet die Umweltverschmutzung."
  },
  {
    "id": "k7_en_042",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the English term for 'Stundenplan' at school?",
    "answers": [
      "The term: timetable",
      "The term: assembly",
      "The term: homework",
      "The term: curriculum"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Stundenplan heißt im britischen Englisch 'timetable'."
  },
  {
    "id": "k7_en_043",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the English term for the school morning gathering in Britain?",
    "answers": [
      "The term: assembly",
      "The term: breaktime",
      "The term: registration",
      "The term: playground"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Assembly' ist die Morgenversammlung aller Schüler in der Aula britischer Schulen."
  },
  {
    "id": "k7_en_044",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What document do you get at a store after paying for your purchase?",
    "answers": [
      "The document: recipe",
      "The document: bargain",
      "The document: receipt",
      "The document: prescription"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Kassenbon/Kassenzettel heißt 'receipt' (ausgesprochen 're-seet')."
  },
  {
    "id": "k7_en_045",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What document with instructions is used by a chef to cook a meal?",
    "answers": [
      "The document: receipt",
      "The document: prescription",
      "The document: recipe",
      "The document: menu"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Kochrezept heißt auf Englisch 'recipe'."
  },
  {
    "id": "k7_en_046",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which word describes a very good price or cheap deal when buying something?",
    "answers": [
      "The term: expense",
      "The term: bargain",
      "The term: penalty",
      "The term: deposit"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein 'bargain' ist ein Schnäppchen oder günstiges Angebot."
  },
  {
    "id": "k7_en_047",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "How do you politely disagree with someone in a discussion?",
    "answers": [
      "Be quiet and listen...",
      "You are completely wrong...",
      "I see your point, but...",
      "That is a stupid idea..."
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'I see your point, but...' ist eine höfliche Form, Widerspruch einzulegen."
  },
  {
    "id": "k7_en_048",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "How do you make a polite suggestion to a group of friends?",
    "answers": [
      "Go to the cinema immediately!",
      "Why don't we go to the cinema?",
      "We must go to the cinema now!",
      "You have to go to the cinema!"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Why don't we...' eignet sich perfekt für Vorschläge in der Gruppe."
  },
  {
    "id": "k7_en_049",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the polite phrase to order food in a restaurant?",
    "answers": [
      "Give me immediately...",
      "I would like to have...",
      "Bring me a burger...",
      "I want to eat now..."
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'I would like to have...' ist die Standardphrase beim Bestellen im Restaurant."
  },
  {
    "id": "k7_en_050",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which noun describes a person who travels for pleasure or sightseeing?",
    "answers": [
      "The noun: tourist",
      "The noun: native",
      "The noun: resident",
      "The noun: commuter"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Urlaubsgast/Sightseer heißt 'tourist'."
  },

  // --- LANDESKUNDE UK (051 - 075) ---
  {
    "id": "k7_en_051",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the capital city of Scotland?",
    "answers": [
      "The city: Dundee",
      "The city: Aberdeen",
      "The city: Glasgow",
      "The city: Edinburgh"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Edinburgh ist die Hauptstadt Schottlands (Glasgow ist die größte Stadt)."
  },
  {
    "id": "k7_en_052",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the capital city of Wales?",
    "answers": [
      "The city: Swansea",
      "The city: Cardiff",
      "The city: Newport",
      "The city: Bangor"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Cardiff ist die Hauptstadt von Wales."
  },
  {
    "id": "k7_en_053",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the capital city of Northern Ireland?",
    "answers": [
      "The city: Belfast",
      "The city: Cork",
      "The city: Dublin",
      "The city: Derry"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Belfast ist die Hauptstadt Nordirlands (Dublin ist die Hauptstadt der Republik Irland)."
  },
  {
    "id": "k7_en_054",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the famous mythical monster associated with a Scottish lake called?",
    "answers": [
      "The monster: Yeti",
      "The monster: Nessie",
      "The monster: Kraken",
      "The monster: Bigfoot"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das berühmte Seeungeheuer im See Loch Ness wird liebevoll 'Nessie' genannt."
  },
  {
    "id": "k7_en_055",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the traditional Scottish skirt worn by men on formal occasions called?",
    "answers": [
      "The garment: plaid",
      "The garment: apron",
      "The garment: suit",
      "The garment: kilt"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der traditionelle schottische Faltenrock aus Tartan-Stoff heißt 'kilt'."
  },
  {
    "id": "k7_en_056",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the traditional musical instrument of Scotland?",
    "answers": [
      "The bagpipes",
      "The violin fiddle",
      "The acoustic guitar",
      "The grand piano"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Dudelsack ('bagpipes') ist das weltbekannte Nationalinstrument Schottlands."
  },
  {
    "id": "k7_en_057",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the highest mountain peak in Great Britain, located in Scotland?",
    "answers": [
      "Mountain: Ben Nevis",
      "Mountain: Ben Lomond",
      "Mountain: Snowdon",
      "Mountain: Scafell Pike"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ben Nevis in den schottischen Highlands ist mit 1.345 m der höchste Berg Großbritanniens."
  },
  {
    "id": "k7_en_058",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the official national flag of the United Kingdom called?",
    "answers": [
      "The Stars and Stripes",
      "The Red Dragon",
      "The Saint George Cross",
      "The Union Jack"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Flagge des Vereinigten Königreichs wird 'Union Jack' genannt."
  },
  {
    "id": "k7_en_059",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which animal is featured on the national flag of Wales?",
    "answers": [
      "A red dragon",
      "A golden lion",
      "A white eagle",
      "A black bear"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Auf der walisischen Flagge prangt der rote Drache ('Y Ddraig Goch')."
  },
  {
    "id": "k7_en_060",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which plant is a traditional national symbol of Scotland?",
    "answers": [
      "The shamrock leaf",
      "The yellow daffodil",
      "The red rose",
      "The thistle plant"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Distel ('thistle') ist das pflanzliche Wappen- u. Nationalsymbol Schottlands."
  },
  {
    "id": "k7_en_061",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which plant is a traditional national symbol of Wales alongside the leek?",
    "answers": [
      "The thistle",
      "The shamrock",
      "The red rose",
      "The daffodil"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Osterglocke ('daffodil') u. der Lauch ('leek') sind Symbole von Wales."
  },
  {
    "id": "k7_en_062",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What currency is officially used throughout the United Kingdom?",
    "answers": [
      "The Euro (€)",
      "Swiss Franc (CHF)",
      "Pound Sterling (£)",
      "US Dollar ($)"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Währung des UK ist das Pfund Sterling (£)."
  },
  {
    "id": "k7_en_063",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the official London residence of the British monarch?",
    "answers": [
      "Kensington Palace",
      "Buckingham Palace",
      "Windsor Castle",
      "Tower of London"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Buckingham Palace ist der offizielle Hauptwohnsitz des britischen Monarchen in London."
  },
  {
    "id": "k7_en_064",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the famous prehistoric stone monument in Wiltshire, England called?",
    "answers": [
      "Monument: Big Ben",
      "Monument: Hadrian Wall",
      "Monument: Stonehenge",
      "Monument: London Eye"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Stonehenge ist ein weltberühmter Megalithkreis aus der Jungsteinzeit."
  },
  {
    "id": "k7_en_065",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which river flows through the centre of London?",
    "answers": [
      "The River Thames",
      "The River Clyde",
      "The River Severn",
      "The River Mersey"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Themse ('River Thames') fließt direkt durch die Hauptstadt London."
  },
  {
    "id": "k7_en_066",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the nickname of the famous clock bell inside Elizabeth Tower in London?",
    "answers": [
      "The bell: Royal Bell",
      "The bell: Old Paul",
      "The bell: Big Ben",
      "The bell: Great Tom"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Big Ben' ist der Spitzname der schwersten Glocke im Uhrturm des Parlaments in London."
  },
  {
    "id": "k7_en_067",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Where does the British Parliament meet in London?",
    "answers": [
      "St Paul Cathedral",
      "Tower of London",
      "Trafalgar Square",
      "Palace of Westminster"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das britische Parlament tagt im Palace of Westminster (Houses of Parliament)."
  },
  {
    "id": "k7_en_068",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which natural spectacle made of thousands of basalt columns is in Northern Ireland?",
    "answers": [
      "Loch Ness Lake",
      "Snowdonia Park",
      "Giant's Causeway",
      "White Cliffs Dover"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der 'Giant's Causeway' an der Küste Nordirlands besteht aus etwa 40.000 Basaltsäulen."
  },
  {
    "id": "k7_en_069",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the famous traditional savory Scottish dish made from sheep's offal?",
    "answers": [
      "The dish: Shepherd pie",
      "The dish: Fish and chips",
      "The dish: Haggis",
      "The dish: Roast beef"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Haggis ist die schottische Nationalspeise (Schafsmagen gefüllt mit Innereien u. Hafermehl)."
  },
  {
    "id": "k7_en_070",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the classic British fast food meal consisting of battered fish and potato wedges?",
    "answers": [
      "Full English breakfast",
      "Sunday roast dinner",
      "Bangers and mash",
      "Fish and chips"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Fish and chips ist der berühmte britische Fastfood-Klassiker."
  },
  {
    "id": "k7_en_071",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is a mandatory tradition in most British schools concerning dress code?",
    "answers": [
      "Wearing sport clothes",
      "Wearing traditional kilts",
      "Wearing free clothes",
      "Wearing a uniform"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "An fast allen britischen Schulen ist das Tragen einer Schuluniform ('school uniform') Pflicht."
  },
  {
    "id": "k7_en_072",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the colloquial nickname of the underground railway system in London?",
    "answers": [
      "The Metro system",
      "The Subway system",
      "The Line system",
      "The Tube system"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Londoner U-Bahn wird von den Einheimischen 'The Tube' genannt."
  },
  {
    "id": "k7_en_073",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What traditional light meal with tea, scones and sandwiches is served in the late afternoon?",
    "answers": [
      "Morning coffee",
      "High dinner",
      "Afternoon tea",
      "Midnight snack"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der 'Afternoon Tea' (Nachmittagstee) ist eine berühmte britische Tradition."
  },
  {
    "id": "k7_en_074",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which popular bat-and-ball sport played on grass originated in England?",
    "answers": [
      "The sport: Ice hockey",
      "The sport: Basketball",
      "The sport: Cricket",
      "The sport: Baseball"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Cricket ist eine traditionelle britische Sommersportart."
  },
  {
    "id": "k7_en_075",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which country is connected to Great Britain by the Channel Tunnel under the sea?",
    "answers": [
      "The nation: Belgium",
      "The nation: France",
      "The nation: Ireland",
      "The nation: Netherlands"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Eurotunnel unter dem Ärmelkanal verbindet Folkestone (UK) mit Coquelles (Frankreich)."
  },

  // --- ERWEITERTE GRAMMATIK & SPRACHPRAXIS (076 - 100) ---
  {
    "id": "k7_en_076",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What happens to the verb tense in Reported Speech when the reporting verb is in the past ('He said...')?",
    "answers": [
      "Tense shifts back",
      "Tense stays same",
      "Tense shifts future",
      "Verb is deleted"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Steht das Einleitungsverb in der Vergangenheit ('said'), werden die Zeiten in der indirekten Rede zurückversetzt (Backshift of tenses)."
  },
  {
    "id": "k7_en_077",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Change into Reported Speech: Direct statement: 'I like music,' she said.",
    "answers": [
      "She said she like music.",
      "She said she liked music.",
      "She said I like music.",
      "She said she will like music."
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Present Simple wird zu Past Simple: 'she liked'."
  },
  {
    "id": "k7_en_078",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which construction shows a Gerund as the Subject of a sentence?",
    "answers": [
      "Swam is good for health.",
      "To swim is good for health.",
      "Swim is good for health.",
      "Swimming is good for health."
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Gerundium (Verb + '-ing') kann als Subjekt am Satzanfang stehen ('Swimming is...')."
  },
  {
    "id": "k7_en_079",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which sentence correctly uses a Gerund after a preposition ('interested in...')?",
    "answers": [
      "She is interested in learn English.",
      "She is interested in learning English.",
      "She is interested in to learn English.",
      "She is interested in learned English."
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nach Präpositionen ('in', 'of', 'about', 'at') folgt im Englischen stets das Gerundium (-ing Form)."
  },
  {
    "id": "k7_en_080",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which sentence correctly uses a Present Participle to shorten a sentence?",
    "answers": [
      "To walk down the street, I saw Tom.",
      "Walk down the street, I saw Tom.",
      "Walking down the street, I saw Tom.",
      "Walked down the street, I saw Tom."
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Partizip Präsens ('Walking...') verkürzt Nebensätze mit 'While I was walking...'."
  },
  {
    "id": "k7_en_081",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which linking word is used to express contrast between two statements?",
    "answers": [
      "Linking word: therefore",
      "Linking word: because",
      "Linking word: however",
      "Linking word: furthermore"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'However' (jedoch/dennoch) drückt einen Gegensatz aus."
  },
  {
    "id": "k7_en_082",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which linking word expresses a consequence or result ('deshalb/daher')?",
    "answers": [
      "Linking word: although",
      "Linking word: therefore",
      "Linking word: whereas",
      "Linking word: despite"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Therefore' (deshalb/daher) leitet eine Schlussfolgerung ein."
  },
  {
    "id": "k7_en_083",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the standard opening greeting for a formal business letter when you don't know the name?",
    "answers": [
      "To whom it goes,",
      "Hi my dear friend,",
      "Dear Sir or Madam,",
      "Hello everybody,"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In offiziellen Briefen ohne Namen lautet die Anrede 'Dear Sir or Madam,'."
  },
  {
    "id": "k7_en_084",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the standard closing phrase for a formal letter starting with 'Dear Sir or Madam,'?",
    "answers": [
      "Yours sincerely,",
      "Yours faithfully,",
      "Best wishes,",
      "Lots of love,"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beginnt der Brief mit 'Dear Sir or Madam', endet er im Britischen mit 'Yours faithfully,'."
  },
  {
    "id": "k7_en_085",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the standard closing phrase for a formal letter when you addressed the person by name ('Dear Mr Smith,')?",
    "answers": [
      "Yours sincerely,",
      "Warm regards,",
      "Bye for now,",
      "Yours faithfully,"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei Nennung des Namens schließt man mit 'Yours sincerely,'."
  },
  {
    "id": "k7_en_086",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the irregular plural form of the noun 'mouse'?",
    "answers": [
      "Plural form: meese",
      "Plural form: mouses",
      "Plural form: mices",
      "Plural form: mice"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Plural von 'mouse' ist unregelmäßig u. heißt 'mice'."
  },
  {
    "id": "k7_en_087",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the irregular plural form of the noun 'foot'?",
    "answers": [
      "Plural form: foots",
      "Plural form: footes",
      "Plural form: feet",
      "Plural form: feets"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Plural von 'foot' lautet 'feet'."
  },
  {
    "id": "k7_en_088",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which pair of homophones has identical pronunciation but different spelling u. meaning?",
    "answers": [
      "Pair: there / their",
      "Pair: book / look",
      "Pair: cat / hat",
      "Pair: run / sun"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'There' u. 'their' klingen exakt gleich (Homophone), bedeuten u. schreiben sich aber unterschiedlich."
  },
  {
    "id": "k7_en_089",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which option shows three homophones that sound exactly the same in spoken English?",
    "answers": [
      "Option: by / buy / boy",
      "Option: see / sea / saw",
      "Option: hear / hair / here",
      "Option: to / two / too"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'To', 'two' u. 'too' klingen in der Aussprache völlig identisch."
  },
  {
    "id": "k7_en_090",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is a synonym for the adjective 'enormous'?",
    "answers": [
      "Synonym: slight",
      "Synonym: huge",
      "Synonym: small",
      "Synonym: tiny"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Enormous' u. 'huge' bedeuten beide riesig/riesengroß."
  },
  {
    "id": "k7_en_091",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is an antonym (opposite) of the adjective 'ancient'?",
    "answers": [
      "Antonym: historic",
      "Antonym: modern",
      "Antonym: old",
      "Antonym: traditional"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Gegenteil von 'ancient' (uralt/antisch) ist 'modern' (neuzeitlich)."
  },
  {
    "id": "k7_en_092",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which sentence correctly uses the expression 'used to' to describe past habits?",
    "answers": [
      "I use to play tennis when young.",
      "I used to play tennis when young.",
      "I am used to play tennis when young.",
      "I was used to play tennis young."
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Used to' + Infinitiv drückt früher regelmäßige Gewohnheiten aus, die nicht mehr zutreffen."
  },
  {
    "id": "k7_en_093",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which word correctly completes: 'He ran fast, ... he missed the train.'?",
    "answers": [
      "Conjunction: unless",
      "Conjunction: but",
      "Conjunction: because",
      "Conjunction: so"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'But' drückt den Widerspruch aus (Er rannte schnell, aber er verpasste den Zug)."
  },
  {
    "id": "k7_en_094",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which modal verb phrase is used to give friendly advice to a peer?",
    "answers": [
      "You will speak to him.",
      "You must speak to him.",
      "You have to speak to him.",
      "You should speak to him."
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Should' eignet sich am besten für Ratschläge u. Empfehlungen ('Du solltest...')."
  },
  {
    "id": "k7_en_095",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the American English spelling of the British word 'colour'?",
    "answers": [
      "Spelling: collor",
      "Spelling: colere",
      "Spelling: color",
      "Spelling: culor"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Amerikanischen entfällt das 'u' bei Wörtern wie 'color', 'favor', 'honor'."
  },
  {
    "id": "k7_en_096",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "What is the American English spelling of the British word 'theatre'?",
    "answers": [
      "Spelling: theater",
      "Spelling: theater",
      "Spelling: teater",
      "Spelling: thetre"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Amerikanischen dreht sich die Endung '-tre' zu '-ter' um ('theater', 'center')."
  },
  {
    "id": "k7_en_097",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which auxiliary verb is used to form questions in the Simple Past?",
    "answers": [
      "Auxiliary verb: Have",
      "Auxiliary verb: Did",
      "Auxiliary verb: Was",
      "Auxiliary verb: Do"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Fragen im Simple Past werden mit dem Hilfsverb 'Did' u. dem Infinitiv gebildet."
  },
  {
    "id": "k7_en_098",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which sentence correctly demonstrates the Subject-Verb-Object (SVO) word order in English?",
    "answers": [
      "Tom bought a book yesterday.",
      "Yesterday a book Tom bought.",
      "Tom yesterday bought a book.",
      "Bought Tom a book yesterday."
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die englische Grundwortstellung folgt streng der SVO-Regel (Subjekt - Verb - Objekt)."
  },
  {
    "id": "k7_en_099",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Where are adverbs of frequency (like 'always', 'never', 'usually') placed in a standard sentence?",
    "answers": [
      "At the very start sentence",
      "After the object noun",
      "Before the main verb",
      "At the very end sentence"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Häufigkeitsadverbien stehen vor dem Hauptverb ('He always eats apples'), aber nach 'be' ('He is always late')."
  },
  {
    "id": "k7_en_100",
    "category": "k7_englisch",
    "area": "schule",
    "grade": 7,
    "subject": "englisch",
    "question": "Which phrase is used to close an informal email to a close friend?",
    "answers": [
      "Yours sincerely,",
      "Best wishes / Love,",
      "Yours faithfully,",
      "Respectfully yours,"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In informellen Briefen oder E-Mails an Freunde schreibt man 'Best wishes', 'Warm regards' oder 'Love'."
  },
  {"id":"k7en101","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"Past of go?","answers":["goed","went","gone","goes"],"correct":1,"difficulty":"mittel","points":10,"explanation":"went."},
  {"id":"k7en102","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"Although means …","answers":["weil","obwohl","und","oder"],"correct":1,"difficulty":"mittel","points":10,"explanation":"obwohl."},
  {"id":"k7en103","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"If I ___ you, I would help.","answers":["am","were","was","be"],"correct":1,"difficulty":"mittel","points":10,"explanation":"were."},
  {"id":"k7en104","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"Passive: The letter ___ yesterday.","answers":["wrote","was written","writes","writing"],"correct":1,"difficulty":"mittel","points":10,"explanation":"was written."},
  {"id":"k7en105","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"Sustainable = …","answers":["kurzleb","nachhaltig","laut","teuer"],"correct":1,"difficulty":"mittel","points":10,"explanation":"nachhaltig."},
  {"id":"k7en106","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"He said he ___ tired.","answers":["is","was","be","were"],"correct":1,"difficulty":"mittel","points":10,"explanation":"was."},
  {"id":"k7en107","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"enjoy ___","answers":["to swim","swimming","swam","swim"],"correct":1,"difficulty":"mittel","points":10,"explanation":"swimming."},
  {"id":"k7en108","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"become = …","answers":["bekommen","werden","willkommen","begin"],"correct":1,"difficulty":"mittel","points":10,"explanation":"werden."},
  {"id":"k7en109","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"Climate = …","answers":["Wetter jetzt","Klima","Kleidung","Küche"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Klima."},
  {"id":"k7en110","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"the woman ___ called","answers":["which","who","where","what"],"correct":1,"difficulty":"mittel","points":10,"explanation":"who."},
  {"id":"k7en111","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"You ___ see a doctor.","answers":["can","should","mustn’t","could"],"correct":1,"difficulty":"mittel","points":10,"explanation":"should."},
  {"id":"k7en112","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"slow → adverb","answers":["slowy","slowly","slowely","slowful"],"correct":1,"difficulty":"mittel","points":10,"explanation":"slowly."},
  {"id":"k7en113","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"Economy = …","answers":["Wirtschaft","Sparsamkeit","Ökologie","Energie"],"correct":0,"difficulty":"mittel","points":10,"explanation":"Wirtschaft."},
  {"id":"k7en114","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"look up = …","answers":["nachschlagen","hochschauen","löschen","aufgeben"],"correct":0,"difficulty":"mittel","points":10,"explanation":"nachschlagen."},
  {"id":"k7en115","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"tomorrow at 5 we ___","answers":["work","will be working","worked","working"],"correct":1,"difficulty":"mittel","points":10,"explanation":"will be working."},
  {"id":"k7en116","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"Equality = …","answers":["Ungleichheit","Gleichheit","Qualität","Menge"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Gleichheit."},
  {"id":"k7en117","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"___ hour","answers":["a","an","the","some"],"correct":1,"difficulty":"mittel","points":10,"explanation":"an."},
  {"id":"k7en118","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"as ___ as","answers":["more","tall","taller","most"],"correct":1,"difficulty":"mittel","points":10,"explanation":"as tall as."},
  {"id":"k7en119","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"Invent = …","answers":["entdecken","erfinden","verlieren","messen"],"correct":1,"difficulty":"mittel","points":10,"explanation":"erfinden."},
  {"id":"k7en120","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"How long ___ you lived here?","answers":["do","have","has","are"],"correct":1,"difficulty":"mittel","points":10,"explanation":"have."},
  {"id":"k7en121","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"responsible ___ the project","answers":["to","for","at","on"],"correct":1,"difficulty":"mittel","points":10,"explanation":"for."},
  {"id":"k7en122","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"Synonym begin?","answers":["end","start","stop","finish"],"correct":1,"difficulty":"mittel","points":10,"explanation":"start."},
  {"id":"k7en123","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"Democracy = …","answers":["Diktatur","Demokratie","Demo","Büro"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Demokratie."},
  {"id":"k7en124","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"teach past","answers":["teached","taught","thought","teecht"],"correct":1,"difficulty":"mittel","points":10,"explanation":"taught."},
  {"id":"k7en125","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"advice is …","answers":["countable","uncountable","verb","plural"],"correct":1,"difficulty":"mittel","points":10,"explanation":"uncountable."},
  {"id":"k7en126","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"In contrast shows …","answers":["example","contrast","cause","time"],"correct":1,"difficulty":"mittel","points":10,"explanation":"contrast."},
  {"id":"k7en127","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"make a ___","answers":["homework","decision","research","shopping"],"correct":1,"difficulty":"mittel","points":10,"explanation":"decision."},
  {"id":"k7en128","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"Global warming = …","answers":["Eiszeit","globale Erwärmung","Regen","Wind"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Erwärmung."},
  {"id":"k7en129","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"I study ___ pass.","answers":["for","to","so","at"],"correct":1,"difficulty":"mittel","points":10,"explanation":"to."},
  {"id":"k7en130","category":"k7_englisch","area":"schule","grade":7,"subject":"englisch","topic":"erweiterung","question":"people relative","answers":["which","who","where","when"],"correct":1,"difficulty":"mittel","points":10,"explanation":"who."}
];
// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K7_ENGLISCH_QUESTIONS = K7_ENGLISCH_QUESTIONS;
}