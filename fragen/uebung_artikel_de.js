// Artikel-Übung Deutsch Klasse 1–2 (der/die/das)
// Unterthema unter Wissen → Deutsch
const ARTIKEL_DE_QUESTIONS = [
  {
    "id": "art1_001",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Hund",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Hund."
  },
  {
    "id": "art1_002",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Katze",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Katze."
  },
  {
    "id": "art1_003",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Haus",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Haus."
  },
  {
    "id": "art1_004",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Ball",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Ball."
  },
  {
    "id": "art1_005",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Schule",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Schule."
  },
  {
    "id": "art1_006",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Buch",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Buch."
  },
  {
    "id": "art1_007",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Tisch",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Tisch."
  },
  {
    "id": "art1_008",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Tür",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Tür."
  },
  {
    "id": "art1_009",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Fenster",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Fenster."
  },
  {
    "id": "art1_010",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Baum",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Baum."
  },
  {
    "id": "art1_011",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Blume",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Blume."
  },
  {
    "id": "art1_012",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Auto",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Auto."
  },
  {
    "id": "art1_013",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Apfel",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Apfel."
  },
  {
    "id": "art1_014",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Banane",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Banane."
  },
  {
    "id": "art1_015",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Brot",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Brot."
  },
  {
    "id": "art1_016",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Mond",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Mond."
  },
  {
    "id": "art1_017",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Sonne",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Sonne."
  },
  {
    "id": "art1_018",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Kind",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Kind."
  },
  {
    "id": "art1_019",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Lehrer",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Lehrer."
  },
  {
    "id": "art1_020",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Lehrerin",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Lehrerin."
  },
  {
    "id": "art1_021",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Mädchen",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Mädchen."
  },
  {
    "id": "art1_022",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Junge",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Junge."
  },
  {
    "id": "art1_023",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Mutter",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Mutter."
  },
  {
    "id": "art1_024",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Vater",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Vater."
  },
  {
    "id": "art1_025",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Wasser",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Wasser."
  },
  {
    "id": "art1_026",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Milch",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Milch."
  },
  {
    "id": "art1_027",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Saft",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Saft."
  },
  {
    "id": "art1_028",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Schule",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Schule."
  },
  {
    "id": "art1_029",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Stift",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Stift."
  },
  {
    "id": "art1_030",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Schere",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Schere."
  },
  {
    "id": "art1_031",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Heft",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Heft."
  },
  {
    "id": "art1_032",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Rucksack",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Rucksack."
  },
  {
    "id": "art1_033",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Tasche",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Tasche."
  },
  {
    "id": "art1_034",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Fahrrad",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Fahrrad."
  },
  {
    "id": "art1_035",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Zug",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Zug."
  },
  {
    "id": "art1_036",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Straße",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Straße."
  },
  {
    "id": "art1_037",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Bett",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Bett."
  },
  {
    "id": "art1_038",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Stuhl",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Stuhl."
  },
  {
    "id": "art1_039",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Lampe",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Lampe."
  },
  {
    "id": "art1_040",
    "category": "k1_deutsch_artikel",
    "area": "schule",
    "grade": 1,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Bild",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Bild."
  },
  {
    "id": "art2_041",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Vogel",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Vogel."
  },
  {
    "id": "art2_042",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Ente",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Ente."
  },
  {
    "id": "art2_043",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Pferd",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Pferd."
  },
  {
    "id": "art2_044",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Garten",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Garten."
  },
  {
    "id": "art2_045",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Wiese",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Wiese."
  },
  {
    "id": "art2_046",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Meer",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Meer."
  },
  {
    "id": "art2_047",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Berg",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Berg."
  },
  {
    "id": "art2_048",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Insel",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Insel."
  },
  {
    "id": "art2_049",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Dorf",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Dorf."
  },
  {
    "id": "art2_050",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Lehrer",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Lehrer."
  },
  {
    "id": "art2_051",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Freundin",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Freundin."
  },
  {
    "id": "art2_052",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Spiel",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Spiel."
  },
  {
    "id": "art2_053",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Computer",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Computer."
  },
  {
    "id": "art2_054",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Musik",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Musik."
  },
  {
    "id": "art2_055",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Lied",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Lied."
  },
  {
    "id": "art2_056",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Tag",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Tag."
  },
  {
    "id": "art2_057",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Nacht",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Nacht."
  },
  {
    "id": "art2_058",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Jahr",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Jahr."
  },
  {
    "id": "art2_059",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Monat",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Monat."
  },
  {
    "id": "art2_060",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Woche",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Woche."
  },
  {
    "id": "art2_061",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Wetter",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Wetter."
  },
  {
    "id": "art2_062",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Regen",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Regen."
  },
  {
    "id": "art2_063",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Wolke",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Wolke."
  },
  {
    "id": "art2_064",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Eis",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Eis."
  },
  {
    "id": "art2_065",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Kuchen",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Kuchen."
  },
  {
    "id": "art2_066",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Schokolade",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Schokolade."
  },
  {
    "id": "art2_067",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Obst",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Obst."
  },
  {
    "id": "art2_068",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Teller",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Teller."
  },
  {
    "id": "art2_069",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Gabel",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Gabel."
  },
  {
    "id": "art2_070",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Messer",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Messer."
  },
  {
    "id": "art2_071",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Löffel",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Löffel."
  },
  {
    "id": "art2_072",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Tasse",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Tasse."
  },
  {
    "id": "art2_073",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Glas",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Glas."
  },
  {
    "id": "art2_074",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Mantel",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 0,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: der Mantel."
  },
  {
    "id": "art2_075",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Hose",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 1,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: die Hose."
  },
  {
    "id": "art2_076",
    "category": "k2_deutsch_artikel",
    "area": "schule",
    "grade": 2,
    "subject": "deutsch",
    "topic": "artikel",
    "question": "Welcher Artikel passt? ___ Kleid",
    "answers": [
      "der",
      "die",
      "das"
    ],
    "correct": 2,
    "difficulty": "leicht",
    "points": 10,
    "explanation": "Es heißt: das Kleid."
  }
];
if (typeof registerQuestions === 'function') registerQuestions('ARTIKEL_DE_QUESTIONS', ARTIKEL_DE_QUESTIONS);
