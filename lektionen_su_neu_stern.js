// Neuer Sachunterricht-Kurs: K4 Wasserkreislauf und Klima (28.11.2026)
(function () {
    const extraKurse = [{"id": "wasser_klima_k4", "title": "Wasserkreislauf und Klima", "icon": "💧", "grade": 4, "subject": "sachunterricht", "beschreibung": "Wie Wasser um die Welt reist, Wetter und Klima, Klimaschutz."}];
    const extraLektionen = [
 {
  "id": "wk_k4_l1",
  "kurs": "wasser_klima_k4",
  "order": 1,
  "icon": "💧",
  "title": "Der Wasserkreislauf",
  "kurz": "Verdunsten, Wolken, Regen",
  "erklaerung": {
   "intro": "Wasser ist immer unterwegs: Die <b>Sonne</b> erwärmt Meere und Seen – Wasser <b>verdunstet</b> und steigt als Wasserdampf auf. Oben ist es kalt: Der Dampf <b>kondensiert</b> zu winzigen Tröpfchen – <b>Wolken</b> entstehen. Werden die Tropfen schwer, fällt <b>Niederschlag</b> (Regen, Schnee, Hagel). Das Wasser fließt über Bäche und Flüsse oder das <b>Grundwasser</b> zurück ins Meer.",
   "merksatz": "Verdunsten – Wolken – Regen – Abfließen – und wieder von vorn.",
   "beispiele": [
    "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>☀️🌊</text></svg>Sonne lässt Wasser verdunsten",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☁️</text></svg>Dampf kühlt ab → Wolke",
    "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🌧️🏞️</text></svg>Regen fließt zurück ins Meer"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "wkk4l1u_leicht_1",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was lässt Wasser verdunsten?",
     "answers": [
      "die Wärme der Sonne",
      "der Mond",
      "der Wind allein",
      "die Kälte"
     ],
     "correct": 0,
     "explanation": "Sonnenwärme.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
    },
    {
     "id": "wkk4l1u_leicht_2",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Woraus bestehen Wolken?",
     "answers": [
      "aus winzigen Wassertröpfchen",
      "aus Watte",
      "aus Rauch",
      "aus Staub allein"
     ],
     "correct": 0,
     "explanation": "Tröpfchen oder Eiskristalle.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☁️</text></svg>"
    },
    {
     "id": "wkk4l1u_leicht_3",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist Niederschlag?",
     "answers": [
      "Wind",
      "Sonnenschein",
      "Nebel am Boden",
      "Regen, Schnee oder Hagel"
     ],
     "correct": 3,
     "explanation": "Was vom Himmel fällt.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌧️</text></svg>"
    },
    {
     "id": "wkk4l1u_leicht_4",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wohin fließt das Wasser der Flüsse?",
     "answers": [
      "ins Meer",
      "in die Wolken",
      "in den Mond",
      "nirgendwohin"
     ],
     "correct": 0,
     "explanation": "Flüsse münden ins Meer.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌊</text></svg>"
    },
    {
     "id": "wkk4l1u_leicht_5",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was passiert mit einer Pfütze in der Sonne?",
     "answers": [
      "Sie verdunstet.",
      "Sie gefriert.",
      "Sie wird größer.",
      "Sie wird zu Stein."
     ],
     "correct": 0,
     "explanation": "Verdunsten.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "wkk4l1u_mittel_1",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was passiert, wenn Wasserdampf oben abkühlt?",
     "answers": [
      "Er wird zu Tröpfchen (Wolken).",
      "Er wird heißer.",
      "Er verschwindet.",
      "Er wird zu Stein."
     ],
     "correct": 0,
     "explanation": "Kondensieren.",
     "topic": "wasser_klima"
    },
    {
     "id": "wkk4l1u_mittel_2",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist Grundwasser?",
     "answers": [
      "Wasser in Wolken",
      "Wasser im Meer",
      "Wasser im Kühlschrank",
      "Wasser im Boden unter der Erde"
     ],
     "correct": 3,
     "explanation": "Im Boden.",
     "topic": "wasser_klima"
    },
    {
     "id": "wkk4l1u_mittel_3",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie heißt Wasser als Gas?",
     "answers": [
      "Eis",
      "Schnee",
      "Hagel",
      "Wasserdampf"
     ],
     "correct": 3,
     "explanation": "Gasförmig.",
     "topic": "wasser_klima"
    },
    {
     "id": "wkk4l1u_mittel_4",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Woher kommt unser Trinkwasser oft?",
     "answers": [
      "aus den Wolken direkt",
      "aus dem Grundwasser",
      "aus dem Meer ungefiltert",
      "aus Pfützen"
     ],
     "correct": 1,
     "explanation": "Grundwasser wird aufbereitet.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚰</text></svg>"
    },
    {
     "id": "wkk4l1u_mittel_5",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Warum regnet es aus Wolken?",
     "answers": [
      "Die Tropfen werden zu schwer.",
      "Die Wolke platzt.",
      "Der Wind drückt.",
      "Die Sonne schiebt."
     ],
     "correct": 0,
     "explanation": "Schwere Tropfen fallen.",
     "topic": "wasser_klima"
    }
   ],
   "schwer": [
    {
     "id": "wkk4l1u_schwer_1",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Reihenfolge stimmt?",
     "answers": [
      "Regen – verdunsten – Meer – Wolke – Fluss",
      "verdunsten – Wolke – Regen – Fluss – Meer",
      "Wolke – Meer – Regen – verdunsten – Fluss",
      "Fluss – Wolke – Meer – Regen – verdunsten"
     ],
     "correct": 1,
     "explanation": "Der Kreislauf.",
     "topic": "wasser_klima"
    },
    {
     "id": "wkk4l1u_schwer_2",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist Kondensieren?",
     "answers": [
      "Wasser wird zu Eis",
      "Eis schmilzt",
      "Dampf wird wieder flüssig",
      "Wasser wird heiß"
     ],
     "correct": 2,
     "explanation": "Gas → flüssig.",
     "topic": "wasser_klima"
    },
    {
     "id": "wkk4l1u_schwer_3",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum beschlägt ein kalter Spiegel nach dem Duschen?",
     "answers": [
      "Der Spiegel schwitzt.",
      "Wasserdampf kondensiert am kalten Glas.",
      "Es regnet im Bad.",
      "Das Glas schmilzt."
     ],
     "correct": 1,
     "explanation": "Wie bei Wolken.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🪞</text></svg>"
    },
    {
     "id": "wkk4l1u_schwer_4",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum geht das Wasser auf der Erde nicht aus?",
     "answers": [
      "Es wird jeden Tag neu gemacht.",
      "Es ist immer im Kreislauf.",
      "Es kommt vom Mond.",
      "Es geht doch aus."
     ],
     "correct": 1,
     "explanation": "Wasserkreislauf.",
     "topic": "wasser_klima"
    },
    {
     "id": "wkk4l1u_schwer_5",
     "category": "kurs_wk_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie heißt Niederschlag aus Eiskörnern?",
     "answers": [
      "Tau",
      "Nebel",
      "Dampf",
      "Hagel"
     ],
     "correct": 3,
     "explanation": "Hagel.",
     "topic": "wasser_klima"
    }
   ]
  },
  "test": [
   {
    "id": "wkk4l1_test_1",
    "category": "kurs_wk_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was lässt Wasser verdunsten?",
    "answers": [
     "Sonnenwärme",
     "Kälte",
     "Dunkelheit",
     "der Mond"
    ],
    "correct": 0,
    "explanation": "Sonne.",
    "topic": "wasser_klima",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☀️</text></svg>"
   },
   {
    "id": "wkk4l1_test_2",
    "category": "kurs_wk_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Woraus bestehen Wolken?",
    "answers": [
     "aus Rauch",
     "aus Watte",
     "aus Wassertröpfchen",
     "aus Sand"
    ],
    "correct": 2,
    "explanation": "Tröpfchen.",
    "topic": "wasser_klima",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☁️</text></svg>"
   },
   {
    "id": "wkk4l1_test_3",
    "category": "kurs_wk_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist kein Niederschlag?",
    "answers": [
     "Regen",
     "Wind",
     "Schnee",
     "Hagel"
    ],
    "correct": 1,
    "explanation": "Wind fällt nicht.",
    "topic": "wasser_klima"
   },
   {
    "id": "wkk4l1_test_4",
    "category": "kurs_wk_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wohin fließen Flüsse?",
    "answers": [
     "in die Berge",
     "in die Wolken",
     "ins Meer",
     "nach oben"
    ],
    "correct": 2,
    "explanation": "Meer.",
    "topic": "wasser_klima"
   },
   {
    "id": "wkk4l1_test_5",
    "category": "kurs_wk_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie heißt Wasser als Gas?",
    "answers": [
     "Wasserdampf",
     "Eis",
     "Regen",
     "Tau"
    ],
    "correct": 0,
    "explanation": "Dampf.",
    "topic": "wasser_klima"
   },
   {
    "id": "wkk4l1_test_6",
    "category": "kurs_wk_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist Grundwasser?",
    "answers": [
     "Regenwasser in Wolken",
     "Wasser unter der Erde",
     "Meerwasser",
     "Eis"
    ],
    "correct": 1,
    "explanation": "Im Boden.",
    "topic": "wasser_klima"
   },
   {
    "id": "wkk4l1_test_7",
    "category": "kurs_wk_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was passiert mit Dampf in kalter Luft?",
    "answers": [
     "Er wird heiß.",
     "Er bildet Tröpfchen.",
     "Er brennt.",
     "Er verschwindet für immer."
    ],
    "correct": 1,
    "explanation": "Kondensieren.",
    "topic": "wasser_klima"
   },
   {
    "id": "wkk4l1_test_8",
    "category": "kurs_wk_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum heißt es Wasser-KREISLAUF?",
    "answers": [
     "Das Wasser kommt immer wieder zurück.",
     "Weil Wasser rund ist.",
     "Weil es im Kreis regnet.",
     "Weil Flüsse Kreise sind."
    ],
    "correct": 0,
    "explanation": "Kreislauf.",
    "topic": "wasser_klima",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔄</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "wk_k4_l2",
  "kurs": "wasser_klima_k4",
  "order": 2,
  "icon": "🌡️",
  "title": "Wetter, Klima, Klimaschutz",
  "kurz": "Was ist der Unterschied – und was können wir tun?",
  "erklaerung": {
   "intro": "<b>Wetter</b> ist, wie es <b>heute</b> draußen ist: sonnig, regnerisch, warm. <b>Klima</b> ist das <b>übliche Wetter</b> an einem Ort über viele Jahre. Wenn Menschen viel <b>Kohle, Öl und Gas</b> verbrennen, entsteht <b>CO₂</b>. Es hält Wärme fest wie eine Decke – die Erde wird wärmer (<b>Klimawandel</b>). Wir können helfen: Rad fahren, Strom sparen, weniger wegwerfen.",
   "merksatz": "Wetter = heute. Klima = über viele Jahre. Weniger CO₂ schützt das Klima.",
   "beispiele": [
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌦️</text></svg>Wetter: heute Regen",
    "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🏜️❄️</text></svg>Klima: Wüste heiß, Arktis kalt",
    "<svg viewBox='0 0 205 93' style='width:100%;max-width:205px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='102' y='73' text-anchor='middle' font-size='72'>🚲💡</text></svg>Rad fahren, Licht aus – CO₂ sparen"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "wkk4l2u_leicht_1",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist Wetter?",
     "answers": [
      "das Wetter über viele Jahre",
      "eine Jahreszeit",
      "wie es heute draußen ist",
      "ein Land"
     ],
     "correct": 2,
     "explanation": "Heute.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌦️</text></svg>"
    },
    {
     "id": "wkk4l2u_leicht_2",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was misst ein Thermometer?",
     "answers": [
      "den Regen",
      "die Temperatur",
      "den Wind",
      "die Zeit"
     ],
     "correct": 1,
     "explanation": "Temperatur.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌡️</text></svg>"
    },
    {
     "id": "wkk4l2u_leicht_3",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist gut für das Klima?",
     "answers": [
      "immer Auto fahren",
      "Fahrrad fahren",
      "Licht anlassen",
      "viel wegwerfen"
     ],
     "correct": 1,
     "explanation": "Kein CO₂.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚲</text></svg>"
    },
    {
     "id": "wkk4l2u_leicht_4",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wo ist das Klima sehr kalt?",
     "answers": [
      "in der Wüste",
      "am Äquator",
      "am Nordpol",
      "im Regenwald"
     ],
     "correct": 2,
     "explanation": "Arktis.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🧊</text></svg>"
    },
    {
     "id": "wkk4l2u_leicht_5",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist Klima?",
     "answers": [
      "das Wetter von heute",
      "das übliche Wetter über viele Jahre",
      "ein Gewitter",
      "eine Wolke"
     ],
     "correct": 1,
     "explanation": "Viele Jahre.",
     "topic": "wasser_klima"
    }
   ],
   "mittel": [
    {
     "id": "wkk4l2u_mittel_1",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was entsteht beim Verbrennen von Kohle, Öl und Gas?",
     "answers": [
      "CO₂",
      "Sauerstoff",
      "Wasser allein",
      "Sand"
     ],
     "correct": 0,
     "explanation": "Kohlenstoffdioxid.",
     "topic": "wasser_klima"
    },
    {
     "id": "wkk4l2u_mittel_2",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was bewirkt zu viel CO₂ in der Luft?",
     "answers": [
      "Die Erde wird wärmer.",
      "Die Erde wird kälter.",
      "Es gibt mehr Sauerstoff.",
      "Nichts."
     ],
     "correct": 0,
     "explanation": "Wie eine Decke.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌍</text></svg>"
    },
    {
     "id": "wkk4l2u_mittel_3",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was misst ein Regenmesser?",
     "answers": [
      "die Temperatur",
      "die Regenmenge",
      "den Wind",
      "die Sonne"
     ],
     "correct": 1,
     "explanation": "Niederschlag in mm.",
     "topic": "wasser_klima"
    },
    {
     "id": "wkk4l2u_mittel_4",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was ist eine Folge des Klimawandels?",
     "answers": [
      "mehr Schnee überall",
      "die Erde wird kälter",
      "Gletscher schmelzen",
      "Meere trocknen sofort aus"
     ],
     "correct": 2,
     "explanation": "Eis schmilzt.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏔️</text></svg>"
    },
    {
     "id": "wkk4l2u_mittel_5",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was spart CO₂?",
     "answers": [
      "Strom sparen",
      "Geräte immer anlassen",
      "kurze Strecken mit dem Auto",
      "Heizung voll bei offenem Fenster"
     ],
     "correct": 0,
     "explanation": "Weniger Strom = weniger CO₂.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>💡</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "wkk4l2u_schwer_1",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum steigt der Meeresspiegel?",
     "answers": [
      "Weil es mehr Fische gibt.",
      "Weil Schiffe fahren.",
      "Weil der Mond näher kommt.",
      "Eis schmilzt und warmes Wasser dehnt sich aus."
     ],
     "correct": 3,
     "explanation": "Klimawandel.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌊</text></svg>"
    },
    {
     "id": "wkk4l2u_schwer_2",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie nennt man Energie aus Sonne und Wind?",
     "answers": [
      "Kohleenergie",
      "Atomenergie",
      "Ölenergie",
      "erneuerbare Energie"
     ],
     "correct": 3,
     "explanation": "Sie geht nicht aus.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌬️</text></svg>"
    },
    {
     "id": "wkk4l2u_schwer_3",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welche Aussage über Wetter und Klima stimmt?",
     "answers": [
      "Ein Regentag ändert das Klima.",
      "Klima ist das Wetter von morgen.",
      "Ein kalter Tag sagt nichts über das Klima aus.",
      "Wetter dauert 30 Jahre."
     ],
     "correct": 2,
     "explanation": "Klima = langer Zeitraum.",
     "topic": "wasser_klima"
    },
    {
     "id": "wkk4l2u_schwer_4",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Warum helfen Bäume dem Klima?",
     "answers": [
      "Sie machen CO₂.",
      "Sie machen Wind.",
      "Sie nehmen CO₂ auf.",
      "Sie verbrauchen Strom."
     ],
     "correct": 2,
     "explanation": "Bäume speichern CO₂.",
     "topic": "wasser_klima",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌳</text></svg>"
    },
    {
     "id": "wkk4l2u_schwer_5",
     "category": "kurs_wk_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "sachunterricht",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was misst ein Windmesser (Anemometer)?",
     "answers": [
      "die Temperatur",
      "den Regen",
      "die Windgeschwindigkeit",
      "die Luftfeuchte"
     ],
     "correct": 2,
     "explanation": "Wind.",
     "topic": "wasser_klima"
    }
   ]
  },
  "test": [
   {
    "id": "wkk4l2_test_1",
    "category": "kurs_wk_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist Wetter?",
    "answers": [
     "wie es heute draußen ist",
     "Wetter über 30 Jahre",
     "ein Kontinent",
     "ein Meer"
    ],
    "correct": 0,
    "explanation": "Heute.",
    "topic": "wasser_klima"
   },
   {
    "id": "wkk4l2_test_2",
    "category": "kurs_wk_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist Klima?",
    "answers": [
     "das Wetter von heute",
     "das Wetter über viele Jahre",
     "ein Sturm",
     "eine Wolke"
    ],
    "correct": 1,
    "explanation": "Jahre.",
    "topic": "wasser_klima"
   },
   {
    "id": "wkk4l2_test_3",
    "category": "kurs_wk_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was misst ein Thermometer?",
    "answers": [
     "Temperatur",
     "Regen",
     "Wind",
     "Zeit"
    ],
    "correct": 0,
    "explanation": "Temperatur.",
    "topic": "wasser_klima",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌡️</text></svg>"
   },
   {
    "id": "wkk4l2_test_4",
    "category": "kurs_wk_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was macht CO₂ in der Luft?",
    "answers": [
     "Es kühlt die Erde.",
     "Es macht Regen bunt.",
     "Es hält Wärme fest.",
     "Es macht Sauerstoff."
    ],
    "correct": 2,
    "explanation": "Treibhaus.",
    "topic": "wasser_klima"
   },
   {
    "id": "wkk4l2_test_5",
    "category": "kurs_wk_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist gut für das Klima?",
    "answers": [
     "zu Fuß gehen",
     "kurze Strecken mit dem Auto",
     "Licht immer an",
     "viel wegwerfen"
    ],
    "correct": 0,
    "explanation": "Kein CO₂.",
    "topic": "wasser_klima",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚶</text></svg>"
   },
   {
    "id": "wkk4l2_test_6",
    "category": "kurs_wk_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist eine Folge des Klimawandels?",
    "answers": [
     "die Erde wird kälter",
     "Gletscher wachsen überall",
     "mehr Hitze und Dürre",
     "keine Folgen"
    ],
    "correct": 2,
    "explanation": "Erwärmung.",
    "topic": "wasser_klima"
   },
   {
    "id": "wkk4l2_test_7",
    "category": "kurs_wk_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist erneuerbare Energie?",
    "answers": [
     "Kohle",
     "Erdöl",
     "Windenergie",
     "Erdgas"
    ],
    "correct": 2,
    "explanation": "Wind geht nicht aus.",
    "topic": "wasser_klima",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌬️</text></svg>"
   },
   {
    "id": "wkk4l2_test_8",
    "category": "kurs_wk_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "sachunterricht",
    "difficulty": "mittel",
    "points": 10,
    "question": "Warum sind Bäume gut fürs Klima?",
    "answers": [
     "Sie geben CO₂ ab.",
     "Sie machen Wind.",
     "Sie sind grün.",
     "Sie nehmen CO₂ auf."
    ],
    "correct": 3,
    "explanation": "CO₂-Speicher.",
    "topic": "wasser_klima",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌳</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
