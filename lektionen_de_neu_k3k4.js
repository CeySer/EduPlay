// Neue Deutschkurse: K3 Bildergeschichten, K4 Wortfamilien + Fremdwörter (28.11.2026)
(function () {
    const extraKurse = [{"id": "bildergeschichte_k3", "title": "Bildergeschichten", "icon": "🖼️", "grade": 3, "subject": "deutsch", "beschreibung": "Bilder ordnen, Überschrift finden und spannend erzählen."}, {"id": "wortfamilie_k4", "title": "Wortfamilien und Fremdwörter", "icon": "🌳", "grade": 4, "subject": "deutsch", "beschreibung": "Wortstamm erkennen, verwandte Wörter finden, Fremdwörter verstehen."}];
    const extraLektionen = [
 {
  "id": "bg_k3_l1",
  "kurs": "bildergeschichte_k3",
  "order": 1,
  "icon": "🖼️",
  "title": "Bilder ordnen und verstehen",
  "kurz": "Reihenfolge, Überschrift, Kern",
  "erklaerung": {
   "intro": "Eine <b>Bildergeschichte</b> erzählt mit mehreren Bildern eine Geschichte. Schau genau: <b>Was passiert zuerst, dann, danach, am Ende?</b> Finde eine <b>Überschrift</b>, die neugierig macht, aber nicht alles verrät. Der <b>Höhepunkt</b> ist das spannendste Bild.",
   "merksatz": "Erst genau schauen – dann ordnen – dann Überschrift finden.",
   "beispiele": [
    "<svg viewBox='0 0 371 93' style='width:100%;max-width:371px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='185' y='73' text-anchor='middle' font-size='72'>🥚🐣🐥🐔</text></svg>Ei → Küken schlüpft → Küken → Huhn",
    "<svg viewBox='0 0 288 93' style='width:100%;max-width:288px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='144' y='73' text-anchor='middle' font-size='72'>🌱🌿🌻</text></svg>Samen → Pflanze → Blume",
    "Gute Überschrift: „Der verschwundene Ball“"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "bgk3l1u_leicht_1",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was kommt zuerst? 🥚🐣🐥",
     "answers": [
      "das Ei",
      "das Küken",
      "das Huhn",
      "egal"
     ],
     "correct": 0,
     "explanation": "Erst das Ei.",
     "topic": "bildergeschichte",
     "grafik": "<svg viewBox='0 0 288 93' style='width:100%;max-width:288px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='144' y='73' text-anchor='middle' font-size='72'>🥚🐣🐥</text></svg>"
    },
    {
     "id": "bgk3l1u_leicht_2",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Reihenfolge stimmt? Samen – ? – Blume",
     "answers": [
      "Frucht",
      "Baum",
      "kleine Pflanze",
      "Stein"
     ],
     "correct": 2,
     "explanation": "Samen, Pflanze, Blume.",
     "topic": "bildergeschichte",
     "grafik": "<svg viewBox='0 0 288 93' style='width:100%;max-width:288px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='144' y='73' text-anchor='middle' font-size='72'>🌱🌿🌻</text></svg>"
    },
    {
     "id": "bgk3l1u_leicht_3",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist eine Bildergeschichte?",
     "answers": [
      "ein einzelnes Foto",
      "ein Gedicht",
      "eine Geschichte in mehreren Bildern",
      "ein Rezept"
     ],
     "correct": 2,
     "explanation": "Mehrere Bilder.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l1u_leicht_4",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort passt zum ersten Bild?",
     "answers": [
      "Zuerst",
      "Am Ende",
      "Danach",
      "Zum Schluss"
     ],
     "correct": 0,
     "explanation": "Zuerst …",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l1u_leicht_5",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort passt zum letzten Bild?",
     "answers": [
      "Zuerst",
      "Eines Tages",
      "Am Ende",
      "Plötzlich"
     ],
     "correct": 2,
     "explanation": "Am Ende …",
     "topic": "bildergeschichte"
    }
   ],
   "mittel": [
    {
     "id": "bgk3l1u_mittel_1",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist eine gute Überschrift?",
     "answers": [
      "Bild 1 bis 4",
      "Geschichte",
      "Am Ende war alles gut und der Hund fand den Ball",
      "Eine Überraschung im Garten"
     ],
     "correct": 3,
     "explanation": "Neugierig machen, nicht alles verraten.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l1u_mittel_2",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Reihenfolge stimmt? ☁️ 🌧️ 🌈",
     "answers": [
      "Wolken – Regen – Regenbogen",
      "Regenbogen – Wolken – Regen",
      "Regen – Regenbogen – Wolken",
      "Wolken – Regenbogen – Regen"
     ],
     "correct": 0,
     "explanation": "Erst Wolken, dann Regen, dann Regenbogen.",
     "topic": "bildergeschichte",
     "grafik": "<svg viewBox='0 0 288 93' style='width:100%;max-width:288px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='144' y='73' text-anchor='middle' font-size='72'>☁️🌧️🌈</text></svg>"
    },
    {
     "id": "bgk3l1u_mittel_3",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist der Höhepunkt?",
     "answers": [
      "der spannendste Teil",
      "der Anfang",
      "die Überschrift",
      "der Name"
     ],
     "correct": 0,
     "explanation": "Höhepunkt = spannend.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l1u_mittel_4",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was verrät eine schlechte Überschrift?",
     "answers": [
      "nichts",
      "die Farbe",
      "den Autor",
      "schon das Ende"
     ],
     "correct": 3,
     "explanation": "Nicht zu viel verraten.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l1u_mittel_5",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was machst du zuerst bei einer Bildergeschichte?",
     "answers": [
      "sofort schreiben",
      "nur das letzte Bild lesen",
      "alle Bilder genau anschauen",
      "die Überschrift abschreiben"
     ],
     "correct": 2,
     "explanation": "Genau schauen.",
     "topic": "bildergeschichte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔍</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "bgk3l1u_schwer_1",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Reihenfolge stimmt? 🍳 🥚 🍽️",
     "answers": [
      "essen – Ei – braten",
      "braten – essen – Ei",
      "Ei – braten – essen",
      "Ei – essen – braten"
     ],
     "correct": 2,
     "explanation": "Erst Ei, dann braten, dann essen.",
     "topic": "bildergeschichte",
     "grafik": "<svg viewBox='0 0 288 93' style='width:100%;max-width:288px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='144' y='73' text-anchor='middle' font-size='72'>🥚🍳🍽️</text></svg>"
    },
    {
     "id": "bgk3l1u_schwer_2",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Bild 1: Junge spielt Ball. Bild 2: Ball fliegt ins Fenster. Bild 3: ?",
     "answers": [
      "Junge frühstückt",
      "Junge entschuldigt sich beim Nachbarn",
      "Junge geht schlafen",
      "Ball liegt im Schrank"
     ],
     "correct": 1,
     "explanation": "Das passt logisch.",
     "topic": "bildergeschichte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>⚽</text></svg>"
    },
    {
     "id": "bgk3l1u_schwer_3",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was beschreibt man in der Einleitung?",
     "answers": [
      "nur das Ende",
      "nur die Gefühle",
      "nur die Überschrift",
      "Wer? Wo? Wann?"
     ],
     "correct": 3,
     "explanation": "W-Fragen am Anfang.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l1u_schwer_4",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was gehört in den Schluss?",
     "answers": [
      "wer mitspielt",
      "wo es spielt",
      "die Überschrift",
      "wie die Geschichte ausgeht"
     ],
     "correct": 3,
     "explanation": "Ausgang.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l1u_schwer_5",
     "category": "kurs_bg_k3_l1",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Überschrift passt zu: Katze klettert auf Baum – kommt nicht runter – Feuerwehr hilft?",
     "answers": [
      "Rettung für Minka",
      "Mein Frühstück",
      "Ein Tag am Meer",
      "Die Feuerwehr hat die Katze vom Baum gerettet und alle waren froh"
     ],
     "correct": 0,
     "explanation": "Kurz und neugierig.",
     "topic": "bildergeschichte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐱</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "bgk3l1_test_1",
    "category": "kurs_bg_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was kommt zuerst? 🌱 🌻",
    "answers": [
     "die Blume",
     "beide gleich",
     "der Keim",
     "egal"
    ],
    "correct": 2,
    "explanation": "Erst Keim.",
    "topic": "bildergeschichte",
    "grafik": "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🌱🌻</text></svg>"
   },
   {
    "id": "bgk3l1_test_2",
    "category": "kurs_bg_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was macht eine gute Überschrift?",
    "answers": [
     "Sie macht neugierig.",
     "Sie verrät alles.",
     "Sie ist sehr lang.",
     "Sie fehlt."
    ],
    "correct": 0,
    "explanation": "Neugierig.",
    "topic": "bildergeschichte"
   },
   {
    "id": "bgk3l1_test_3",
    "category": "kurs_bg_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort passt zum letzten Bild?",
    "answers": [
     "Zuerst",
     "Eines Tages",
     "Am Anfang",
     "Zum Schluss"
    ],
    "correct": 3,
    "explanation": "Schluss.",
    "topic": "bildergeschichte"
   },
   {
    "id": "bgk3l1_test_4",
    "category": "kurs_bg_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Reihenfolge stimmt? 🛏️ 🦷 🎒",
    "answers": [
     "zur Schule – aufstehen – Zähne putzen",
     "Zähne putzen – zur Schule – aufstehen",
     "aufstehen – zur Schule – Zähne putzen",
     "aufstehen – Zähne putzen – zur Schule"
    ],
    "correct": 3,
    "explanation": "Morgens.",
    "topic": "bildergeschichte",
    "grafik": "<svg viewBox='0 0 288 93' style='width:100%;max-width:288px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='144' y='73' text-anchor='middle' font-size='72'>🛏️🦷🎒</text></svg>"
   },
   {
    "id": "bgk3l1_test_5",
    "category": "kurs_bg_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist der Höhepunkt?",
    "answers": [
     "das erste Bild",
     "das spannendste Bild",
     "die Überschrift",
     "der letzte Satz"
    ],
    "correct": 1,
    "explanation": "Spannung.",
    "topic": "bildergeschichte"
   },
   {
    "id": "bgk3l1_test_6",
    "category": "kurs_bg_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Fragen beantwortet die Einleitung?",
    "answers": [
     "Wer? Wo? Wann?",
     "Wie endet es?",
     "Was war lustig?",
     "Wer hat gewonnen?"
    ],
    "correct": 0,
    "explanation": "W-Fragen.",
    "topic": "bildergeschichte"
   },
   {
    "id": "bgk3l1_test_7",
    "category": "kurs_bg_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist eine Bildergeschichte?",
    "answers": [
     "ein Bild ohne Handlung",
     "Bilder, die zusammen eine Geschichte erzählen",
     "ein Brief",
     "ein Lexikon"
    ],
    "correct": 1,
    "explanation": "Bilder erzählen.",
    "topic": "bildergeschichte"
   },
   {
    "id": "bgk3l1_test_8",
    "category": "kurs_bg_k3_l1",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Bild 1: Mia pflanzt Samen. Bild 2: Sie gießt. Bild 3: ?",
    "answers": [
     "Mia isst Eis.",
     "Es schneit.",
     "Eine Blume wächst.",
     "Mia schläft."
    ],
    "correct": 2,
    "explanation": "Logische Folge.",
    "topic": "bildergeschichte",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌻</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "bg_k3_l2",
  "kurs": "bildergeschichte_k3",
  "order": 2,
  "icon": "✍️",
  "title": "Spannend erzählen",
  "kurz": "Satzanfänge, Wortfeld 'sagen', Vergangenheit",
  "erklaerung": {
   "intro": "Damit deine Geschichte spannend wird: <b>Satzanfänge wechseln</b> (Plötzlich, Danach, Kurz darauf …), <b>treffende Verben</b> statt immer „sagen“ (rufen, flüstern, schreien), <b>Gefühle</b> beschreiben und <b>wörtliche Rede</b> nutzen. Erzählt wird in der <b>Vergangenheit</b> (Präteritum): Er lief, sie rief.",
   "merksatz": "Abwechslung, Gefühle, wörtliche Rede – und in der Vergangenheit erzählen.",
   "beispiele": [
    "Statt „dann … dann … dann“: Plötzlich, Kurz darauf, Am Ende",
    "Statt „sagte“: flüsterte, rief, schrie, fragte",
    "Präteritum: er lief, sie sah, wir kamen"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "bgk3l2u_leicht_1",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Satzanfang macht es spannend?",
     "answers": [
      "Plötzlich",
      "Dann",
      "Und dann",
      "Und"
     ],
     "correct": 0,
     "explanation": "Plötzlich = Überraschung.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l2u_leicht_2",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "In welcher Zeit erzählt man eine Geschichte?",
     "answers": [
      "in der Vergangenheit",
      "in der Zukunft",
      "in der Gegenwart",
      "gar nicht"
     ],
     "correct": 0,
     "explanation": "Präteritum.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l2u_leicht_3",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort ist leiser als 'sagen'?",
     "answers": [
      "schreien",
      "rufen",
      "flüstern",
      "brüllen"
     ],
     "correct": 2,
     "explanation": "flüstern = leise.",
     "topic": "bildergeschichte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🤫</text></svg>"
    },
    {
     "id": "bgk3l2u_leicht_4",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort ist lauter als 'sagen'?",
     "answers": [
      "flüstern",
      "schreien",
      "murmeln",
      "hauchen"
     ],
     "correct": 1,
     "explanation": "schreien = laut.",
     "topic": "bildergeschichte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📢</text></svg>"
    },
    {
     "id": "bgk3l2u_leicht_5",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist die Vergangenheit von 'er läuft'?",
     "answers": [
      "er lief",
      "er laufte",
      "er ist laufen",
      "er läufen"
     ],
     "correct": 0,
     "explanation": "laufen – lief.",
     "topic": "bildergeschichte"
    }
   ],
   "mittel": [
    {
     "id": "bgk3l2u_mittel_1",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Satz ist am spannendsten?",
     "answers": [
      "Dann war etwas im Keller.",
      "Plötzlich krachte es laut im Keller.",
      "Im Keller war was.",
      "Und dann Keller."
     ],
     "correct": 1,
     "explanation": "Treffende Verben und Plötzlich.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l2u_mittel_2",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort beschreibt ein Gefühl?",
     "answers": [
      "ängstlich",
      "Tisch",
      "laufen",
      "grün"
     ],
     "correct": 0,
     "explanation": "Gefühle machen Geschichten lebendig.",
     "topic": "bildergeschichte",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😨</text></svg>"
    },
    {
     "id": "bgk3l2u_mittel_3",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist die Vergangenheit von 'sie sieht'?",
     "answers": [
      "sie siehte",
      "sie sah",
      "sie sehte",
      "sie sieh"
     ],
     "correct": 1,
     "explanation": "sehen – sah.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l2u_mittel_4",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Verb passt? 'Hilfe!', ___ Tom.",
     "answers": [
      "flüsterte",
      "murmelte",
      "rief",
      "kicherte leise"
     ],
     "correct": 2,
     "explanation": "Laut um Hilfe rufen.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l2u_mittel_5",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was vermeidest du in einer Geschichte?",
     "answers": [
      "Gefühle beschreiben",
      "wörtliche Rede",
      "jeden Satz mit 'dann' anfangen",
      "eine Überschrift"
     ],
     "correct": 2,
     "explanation": "Abwechslung!",
     "topic": "bildergeschichte"
    }
   ],
   "schwer": [
    {
     "id": "bgk3l2u_schwer_1",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Satzanfänge wechseln gut ab?",
     "answers": [
      "Dann – Dann – Dann",
      "Und – Und – Und",
      "Er – Er – Er",
      "Eines Tages – Kurz darauf – Am Ende"
     ],
     "correct": 3,
     "explanation": "Abwechslung.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l2u_schwer_2",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist die Vergangenheit von 'wir kommen'?",
     "answers": [
      "wir kamen",
      "wir kommten",
      "wir kommen",
      "wir kämen"
     ],
     "correct": 0,
     "explanation": "kommen – kamen.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l2u_schwer_3",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Satz zeigt ein Gefühl?",
     "answers": [
      "Mit zitternden Knien öffnete Lena die Tür.",
      "Lena öffnete die Tür.",
      "Die Tür war braun.",
      "Es gab eine Tür."
     ],
     "correct": 0,
     "explanation": "Zittern zeigt Angst.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l2u_schwer_4",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was steht in einer Geschichte meist in Anführungszeichen?",
     "answers": [
      "die Überschrift",
      "was jemand sagt",
      "der Name des Autors",
      "die Seitenzahl"
     ],
     "correct": 1,
     "explanation": "Wörtliche Rede.",
     "topic": "bildergeschichte"
    },
    {
     "id": "bgk3l2u_schwer_5",
     "category": "kurs_bg_k3_l2",
     "area": "schule",
     "grade": 3,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort ersetzt 'gehen' spannend?",
     "answers": [
      "schleichen",
      "machen",
      "sein",
      "haben"
     ],
     "correct": 0,
     "explanation": "schleichen = leise gehen.",
     "topic": "bildergeschichte"
    }
   ]
  },
  "test": [
   {
    "id": "bgk3l2_test_1",
    "category": "kurs_bg_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Satzanfang ist spannend?",
    "answers": [
     "Dann",
     "Und",
     "Und dann",
     "Auf einmal"
    ],
    "correct": 3,
    "explanation": "Überraschung.",
    "topic": "bildergeschichte"
   },
   {
    "id": "bgk3l2_test_2",
    "category": "kurs_bg_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "In welcher Zeit schreibt man Geschichten meist?",
    "answers": [
     "Zukunft",
     "Präteritum (Vergangenheit)",
     "Gegenwart",
     "Befehlsform"
    ],
    "correct": 1,
    "explanation": "Präteritum.",
    "topic": "bildergeschichte"
   },
   {
    "id": "bgk3l2_test_3",
    "category": "kurs_bg_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist leiser als 'sagen'?",
    "answers": [
     "flüstern",
     "brüllen",
     "rufen",
     "schreien"
    ],
    "correct": 0,
    "explanation": "flüstern.",
    "topic": "bildergeschichte",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🤫</text></svg>"
   },
   {
    "id": "bgk3l2_test_4",
    "category": "kurs_bg_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Vergangenheit von 'er rennt'?",
    "answers": [
     "er rennte",
     "er rannte",
     "er rann",
     "er ist rennen"
    ],
    "correct": 1,
    "explanation": "rennen – rannte.",
    "topic": "bildergeschichte"
   },
   {
    "id": "bgk3l2_test_5",
    "category": "kurs_bg_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort beschreibt ein Gefühl?",
    "answers": [
     "Stuhl",
     "springen",
     "fröhlich",
     "blau"
    ],
    "correct": 2,
    "explanation": "Gefühl.",
    "topic": "bildergeschichte",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>😊</text></svg>"
   },
   {
    "id": "bgk3l2_test_6",
    "category": "kurs_bg_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man, was jemand sagt?",
    "answers": [
     "in Klammern",
     "ganz klein",
     "gar nicht",
     "mit Anführungszeichen"
    ],
    "correct": 3,
    "explanation": "Wörtliche Rede.",
    "topic": "bildergeschichte"
   },
   {
    "id": "bgk3l2_test_7",
    "category": "kurs_bg_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was soll man vermeiden?",
    "answers": [
     "Gefühle",
     "Spannung",
     "immer 'dann' am Satzanfang",
     "eine Überschrift"
    ],
    "correct": 2,
    "explanation": "Abwechslung.",
    "topic": "bildergeschichte"
   },
   {
    "id": "bgk3l2_test_8",
    "category": "kurs_bg_k3_l2",
    "area": "schule",
    "grade": 3,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Vergangenheit von 'sie ruft'?",
    "answers": [
     "sie rufte",
     "sie rief",
     "sie rafte",
     "sie ist rufen"
    ],
    "correct": 1,
    "explanation": "rufen – rief.",
    "topic": "bildergeschichte"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "wf_k4_l1",
  "kurs": "wortfamilie_k4",
  "order": 1,
  "icon": "🌳",
  "title": "Wortfamilien",
  "kurz": "Wortstamm finden und verwandte Wörter",
  "erklaerung": {
   "intro": "Wörter einer <b>Wortfamilie</b> haben denselben <b>Wortstamm</b>: fahren, <b>Fahr</b>rad, Ab<b>fahr</b>t, Ge<b>fähr</b>t. Der Stamm wird fast immer <b>gleich geschrieben</b>. Das hilft beim Rechtschreiben: <b>Fahrrad</b> mit h, weil <b>fahren</b> ein h hat.",
   "merksatz": "Gleicher Stamm – gleiche Schreibung.",
   "beispiele": [
    "spiel: spielen, Spielplatz, verspielt",
    "fahr: fahren, Fahrer, Abfahrt",
    "Rechtschreibhilfe: wohnen → Wohnung (mit h)"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "wfk4l1u_leicht_1",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort gehört zur Wortfamilie 'spielen'?",
     "answers": [
      "Spiegel",
      "Spielplatz",
      "Spinne",
      "Speise"
     ],
     "correct": 1,
     "explanation": "Stamm spiel.",
     "topic": "wortfamilie"
    },
    {
     "id": "wfk4l1u_leicht_2",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort gehört zur Wortfamilie 'fahren'?",
     "answers": [
      "Farbe",
      "Fahrrad",
      "Fahne",
      "Feder"
     ],
     "correct": 1,
     "explanation": "Stamm fahr.",
     "topic": "wortfamilie",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚲</text></svg>"
    },
    {
     "id": "wfk4l1u_leicht_3",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was haben Wörter einer Wortfamilie gemeinsam?",
     "answers": [
      "denselben Wortstamm",
      "denselben Anfangsbuchstaben",
      "dieselbe Länge",
      "denselben Artikel"
     ],
     "correct": 0,
     "explanation": "Wortstamm.",
     "topic": "wortfamilie"
    },
    {
     "id": "wfk4l1u_leicht_4",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort gehört zur Wortfamilie 'Schule'?",
     "answers": [
      "Schuh",
      "Schaukel",
      "Schüler",
      "Schnee"
     ],
     "correct": 2,
     "explanation": "Stamm Schul/Schül.",
     "topic": "wortfamilie"
    },
    {
     "id": "wfk4l1u_leicht_5",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist der Wortstamm in 'Spieler'?",
     "answers": [
      "er",
      "spiel",
      "spie",
      "pieler"
     ],
     "correct": 1,
     "explanation": "spiel + er.",
     "topic": "wortfamilie"
    }
   ],
   "mittel": [
    {
     "id": "wfk4l1u_mittel_1",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort gehört NICHT zur Familie 'wohnen'?",
     "answers": [
      "Wohnung",
      "Wohlfühlen",
      "Bewohner",
      "wohnlich"
     ],
     "correct": 1,
     "explanation": "wohl ≠ wohn.",
     "topic": "wortfamilie"
    },
    {
     "id": "wfk4l1u_mittel_2",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum schreibt man 'Wohnung' mit h?",
     "answers": [
      "weil es lang ist",
      "weil es ein Nomen ist",
      "zufällig",
      "wegen 'wohnen'"
     ],
     "correct": 3,
     "explanation": "Stamm wohn.",
     "topic": "wortfamilie"
    },
    {
     "id": "wfk4l1u_mittel_3",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist der Wortstamm in 'Abfahrt'?",
     "answers": [
      "ab",
      "fahrt",
      "fahr",
      "abfa"
     ],
     "correct": 2,
     "explanation": "ab + fahr + t.",
     "topic": "wortfamilie"
    },
    {
     "id": "wfk4l1u_mittel_4",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort gehört zur Familie 'lesen'?",
     "answers": [
      "leise",
      "Leser",
      "Lehrer",
      "lecken"
     ],
     "correct": 1,
     "explanation": "Stamm les.",
     "topic": "wortfamilie",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📖</text></svg>"
    },
    {
     "id": "wfk4l1u_mittel_5",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Wort gehört zur Familie 'backen'?",
     "answers": [
      "Backe",
      "Bach",
      "Bank",
      "Bäckerei"
     ],
     "correct": 3,
     "explanation": "back/bäck.",
     "topic": "wortfamilie",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥐</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "wfk4l1u_schwer_1",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort gehört zur Familie 'fallen'?",
     "answers": [
      "Unfall",
      "Falter",
      "falten",
      "Fass"
     ],
     "correct": 0,
     "explanation": "Stamm fall.",
     "topic": "wortfamilie"
    },
    {
     "id": "wfk4l1u_schwer_2",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie schreibt man 'Gefä_rt' (von fahren)?",
     "answers": [
      "Gefährt",
      "Gefärt",
      "Gefert",
      "Geferht"
     ],
     "correct": 0,
     "explanation": "fahr → fähr mit h.",
     "topic": "wortfamilie"
    },
    {
     "id": "wfk4l1u_schwer_3",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum schreibt man 'Räuber' mit äu?",
     "answers": [
      "weil es gruselig ist",
      "weil es ein Nomen ist",
      "wegen 'rauben'",
      "zufällig"
     ],
     "correct": 2,
     "explanation": "au → äu.",
     "topic": "wortfamilie"
    },
    {
     "id": "wfk4l1u_schwer_4",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort gehört zur Familie 'Hand'?",
     "answers": [
      "handeln",
      "Hund",
      "Hemd",
      "hängen"
     ],
     "correct": 0,
     "explanation": "Stamm Hand/hand.",
     "topic": "wortfamilie",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>✋</text></svg>"
    },
    {
     "id": "wfk4l1u_schwer_5",
     "category": "kurs_wf_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Wörter gehören zur Familie 'kauf'? Käufer, kaufen, Kaufhaus, Kauz",
     "answers": [
      "4",
      "2",
      "1",
      "3"
     ],
     "correct": 3,
     "explanation": "Kauz gehört nicht dazu.",
     "topic": "wortfamilie"
    }
   ]
  },
  "test": [
   {
    "id": "wfk4l1_test_1",
    "category": "kurs_wf_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort gehört zur Familie 'singen'?",
    "answers": [
     "Sand",
     "Senf",
     "Sänger",
     "sinken"
    ],
    "correct": 2,
    "explanation": "sing/sang.",
    "topic": "wortfamilie",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎤</text></svg>"
   },
   {
    "id": "wfk4l1_test_2",
    "category": "kurs_wf_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist der Wortstamm in 'Fahrer'?",
    "answers": [
     "fahr",
     "er",
     "fa",
     "ahrer"
    ],
    "correct": 0,
    "explanation": "fahr + er.",
    "topic": "wortfamilie"
   },
   {
    "id": "wfk4l1_test_3",
    "category": "kurs_wf_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort gehört NICHT zur Familie 'spielen'?",
    "answers": [
     "Spiegel",
     "Spieler",
     "Spielzeug",
     "verspielt"
    ],
    "correct": 0,
    "explanation": "Spieg ≠ spiel.",
    "topic": "wortfamilie"
   },
   {
    "id": "wfk4l1_test_4",
    "category": "kurs_wf_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum schreibt man 'Fahrrad' mit h?",
    "answers": [
     "weil es zwei Räder hat",
     "weil es lang ist",
     "wegen 'fahren'",
     "zufällig"
    ],
    "correct": 2,
    "explanation": "Stamm fahr.",
    "topic": "wortfamilie",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚲</text></svg>"
   },
   {
    "id": "wfk4l1_test_5",
    "category": "kurs_wf_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort gehört zur Familie 'Wald'?",
    "answers": [
     "Wal",
     "Welt",
     "Wolle",
     "Waldweg"
    ],
    "correct": 3,
    "explanation": "Stamm Wald.",
    "topic": "wortfamilie",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌲</text></svg>"
   },
   {
    "id": "wfk4l1_test_6",
    "category": "kurs_wf_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was haben 'malen, Maler, Gemälde' gemeinsam?",
    "answers": [
     "den Stamm mal/mäl",
     "den Buchstaben G",
     "das Ende -er",
     "nichts"
    ],
    "correct": 0,
    "explanation": "Wortfamilie.",
    "topic": "wortfamilie",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎨</text></svg>"
   },
   {
    "id": "wfk4l1_test_7",
    "category": "kurs_wf_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum schreibt man 'Läufer' mit äu?",
    "answers": [
     "weil es schnell ist",
     "zufällig",
     "wegen 'Leute'",
     "wegen 'laufen'"
    ],
    "correct": 3,
    "explanation": "au → äu.",
    "topic": "wortfamilie",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏃</text></svg>"
   },
   {
    "id": "wfk4l1_test_8",
    "category": "kurs_wf_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort gehört zur Familie 'Freund'?",
    "answers": [
     "freundlich",
     "Freude",
     "frei",
     "fremd"
    ],
    "correct": 0,
    "explanation": "Stamm Freund.",
    "topic": "wortfamilie"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "wf_k4_l2",
  "kurs": "wortfamilie_k4",
  "order": 2,
  "icon": "🌐",
  "title": "Fremdwörter",
  "kurz": "Wörter aus anderen Sprachen",
  "erklaerung": {
   "intro": "<b>Fremdwörter</b> kommen aus anderen Sprachen – aus dem Englischen (Computer, Team), Französischen (Restaurant, Portemonnaie), Italienischen (Pizza, Spaghetti) oder Griechischen (Theater, Telefon). Man erkennt sie oft an <b>besonderer Schreibung</b>: <b>ph</b> (Delfin/Delphin), <b>th</b>, <b>y</b>, <b>-ion</b>, <b>-ieren</b>. Unsichere Wörter schlägst du im <b>Wörterbuch</b> nach.",
   "merksatz": "Fremdwörter: oft ph, th, y, -ion, -ieren – im Zweifel nachschlagen.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍕</text></svg>Pizza – aus dem Italienischen",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💻</text></svg>Computer – aus dem Englischen",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎭</text></svg>Theater – aus dem Griechischen"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "wfk4l2u_leicht_1",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Aus welcher Sprache kommt 'Pizza'?",
     "answers": [
      "Englisch",
      "Italienisch",
      "Französisch",
      "Türkisch"
     ],
     "correct": 1,
     "explanation": "Pizza ist italienisch.",
     "topic": "fremdwoerter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍕</text></svg>"
    },
    {
     "id": "wfk4l2u_leicht_2",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Aus welcher Sprache kommt 'Computer'?",
     "answers": [
      "Italienisch",
      "Spanisch",
      "Griechisch",
      "Englisch"
     ],
     "correct": 3,
     "explanation": "Computer ist englisch.",
     "topic": "fremdwoerter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💻</text></svg>"
    },
    {
     "id": "wfk4l2u_leicht_3",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist ein Fremdwort?",
     "answers": [
      "ein falsch geschriebenes Wort",
      "ein sehr langes Wort",
      "ein Name",
      "ein Wort aus einer anderen Sprache"
     ],
     "correct": 3,
     "explanation": "Aus einer anderen Sprache.",
     "topic": "fremdwoerter"
    },
    {
     "id": "wfk4l2u_leicht_4",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Wort ist ein Fremdwort?",
     "answers": [
      "Tisch",
      "Team",
      "Baum",
      "Hund"
     ],
     "correct": 1,
     "explanation": "Team ist englisch.",
     "topic": "fremdwoerter"
    },
    {
     "id": "wfk4l2u_leicht_5",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "leicht",
     "points": 5,
     "question": "Aus welcher Sprache kommt 'Spaghetti'?",
     "answers": [
      "Französisch",
      "Englisch",
      "Italienisch",
      "Polnisch"
     ],
     "correct": 2,
     "explanation": "Italienisch.",
     "topic": "fremdwoerter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍝</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "wfk4l2u_mittel_1",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man es richtig?",
     "answers": [
      "Teater",
      "Theater",
      "Tehater",
      "Theahter"
     ],
     "correct": 1,
     "explanation": "th im Griechischen.",
     "topic": "fremdwoerter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎭</text></svg>"
    },
    {
     "id": "wfk4l2u_mittel_2",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Endung haben viele Fremdwörter?",
     "answers": [
      "-chen",
      "-lein",
      "-ion (z. B. Station)",
      "-ung"
     ],
     "correct": 2,
     "explanation": "Station, Nation.",
     "topic": "fremdwoerter"
    },
    {
     "id": "wfk4l2u_mittel_3",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Aus welcher Sprache kommt 'Restaurant'?",
     "answers": [
      "Englisch",
      "Französisch",
      "Italienisch",
      "Russisch"
     ],
     "correct": 1,
     "explanation": "Französisch.",
     "topic": "fremdwoerter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍽️</text></svg>"
    },
    {
     "id": "wfk4l2u_mittel_4",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was bedeutet 'Hobby'?",
     "answers": [
      "Hausaufgabe",
      "Haustier",
      "Krankheit",
      "Freizeitbeschäftigung"
     ],
     "correct": 3,
     "explanation": "Englisch: hobby.",
     "topic": "fremdwoerter"
    },
    {
     "id": "wfk4l2u_mittel_5",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie schreibt man es richtig?",
     "answers": [
      "Rytmus",
      "Rhytmus",
      "Rüthmus",
      "Rhythmus"
     ],
     "correct": 3,
     "explanation": "rh, y und th.",
     "topic": "fremdwoerter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🥁</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "wfk4l2u_schwer_1",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was bedeutet 'reparieren'?",
     "answers": [
      "etwas kaputt machen",
      "etwas kaufen",
      "etwas verstecken",
      "etwas wieder ganz machen"
     ],
     "correct": 3,
     "explanation": "-ieren-Verb.",
     "topic": "fremdwoerter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔧</text></svg>"
    },
    {
     "id": "wfk4l2u_schwer_2",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort hat die typische Fremdwort-Endung '-ieren'?",
     "answers": [
      "spielen",
      "laufen",
      "telefonieren",
      "lachen"
     ],
     "correct": 2,
     "explanation": "telefon + ieren.",
     "topic": "fremdwoerter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📞</text></svg>"
    },
    {
     "id": "wfk4l2u_schwer_3",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was bedeutet 'Portemonnaie'?",
     "answers": [
      "Briefkasten",
      "Geldbeutel",
      "Koffer",
      "Fahrkarte"
     ],
     "correct": 1,
     "explanation": "Französisch.",
     "topic": "fremdwoerter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>👛</text></svg>"
    },
    {
     "id": "wfk4l2u_schwer_4",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Wort kommt aus dem Griechischen und hat 'ph'?",
     "answers": [
      "Telefon",
      "Fahrrad",
      "Pferd",
      "Alphabet"
     ],
     "correct": 3,
     "explanation": "Alpha + Beta.",
     "topic": "fremdwoerter"
    },
    {
     "id": "wfk4l2u_schwer_5",
     "category": "kurs_wf_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "deutsch",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was tust du, wenn du ein Fremdwort nicht schreiben kannst?",
     "answers": [
      "im Wörterbuch nachschlagen",
      "raten",
      "weglassen",
      "irgendwie schreiben"
     ],
     "correct": 0,
     "explanation": "Nachschlagen.",
     "topic": "fremdwoerter",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📚</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "wfk4l2_test_1",
    "category": "kurs_wf_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Aus welcher Sprache kommt 'Pizza'?",
    "answers": [
     "Englisch",
     "Italienisch",
     "Griechisch",
     "Französisch"
    ],
    "correct": 1,
    "explanation": "Italienisch.",
    "topic": "fremdwoerter",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🍕</text></svg>"
   },
   {
    "id": "wfk4l2_test_2",
    "category": "kurs_wf_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Wort ist ein Fremdwort?",
    "answers": [
     "Kuchen",
     "Garten",
     "Computer",
     "Fenster"
    ],
    "correct": 2,
    "explanation": "Englisch.",
    "topic": "fremdwoerter",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💻</text></svg>"
   },
   {
    "id": "wfk4l2_test_3",
    "category": "kurs_wf_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie schreibt man es richtig?",
    "answers": [
     "Teater",
     "Theater",
     "Theeater",
     "Tater"
    ],
    "correct": 1,
    "explanation": "th.",
    "topic": "fremdwoerter",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎭</text></svg>"
   },
   {
    "id": "wfk4l2_test_4",
    "category": "kurs_wf_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was bedeutet 'Hobby'?",
    "answers": [
     "Haustier",
     "Schulfach",
     "Freizeitbeschäftigung",
     "Spielplatz"
    ],
    "correct": 2,
    "explanation": "Hobby.",
    "topic": "fremdwoerter"
   },
   {
    "id": "wfk4l2_test_5",
    "category": "kurs_wf_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Aus welcher Sprache kommt 'Restaurant'?",
    "answers": [
     "Englisch",
     "Italienisch",
     "Französisch",
     "Spanisch"
    ],
    "correct": 2,
    "explanation": "Französisch.",
    "topic": "fremdwoerter"
   },
   {
    "id": "wfk4l2_test_6",
    "category": "kurs_wf_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Endung ist typisch für Fremdwörter?",
    "answers": [
     "-chen",
     "-lein",
     "-heit",
     "-ieren"
    ],
    "correct": 3,
    "explanation": "reparieren, telefonieren.",
    "topic": "fremdwoerter"
   },
   {
    "id": "wfk4l2_test_7",
    "category": "kurs_wf_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was bedeutet 'reparieren'?",
    "answers": [
     "kaputt machen",
     "wegwerfen",
     "wieder ganz machen",
     "bemalen"
    ],
    "correct": 2,
    "explanation": "reparieren.",
    "topic": "fremdwoerter",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔧</text></svg>"
   },
   {
    "id": "wfk4l2_test_8",
    "category": "kurs_wf_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "deutsch",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wo schlägst du schwierige Fremdwörter nach?",
    "answers": [
     "im Wörterbuch",
     "im Kochbuch",
     "im Telefonbuch",
     "im Atlas"
    ],
    "correct": 0,
    "explanation": "Wörterbuch.",
    "topic": "fremdwoerter",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📚</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
