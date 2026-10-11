// Deutsch Klasse 5 – zweite Lektionen für Satzglieder, Kommasetzung, Wörtliche Rede,
// Die vier Fälle und s/ss/ß. Hängt nur Lektionen an (Kurse stehen in lektionen.js).
// topic = Thema der Wissensfragen Klasse 5. Wird NACH lektionen.js geladen.
(function () {
    const extraLektionen = [
    {
        "id": "satzg_k5_l2",
        "kurs": "satzglieder_k5",
        "order": 2,
        "icon": "🧭",
        "title": "Wann, wo, wie, warum?",
        "kurz": "Adverbiale Bestimmungen erkennen",
        "erklaerung": {
            "intro": "Neben Subjekt, Prädikat und Objekt gibt es <b>adverbiale Bestimmungen</b>. Sie sagen, <b>wann</b>, <b>wo</b>, <b>wie</b> oder <b>warum</b> etwas passiert. Auch sie findest du mit der Umstellprobe: Sie bleiben beim Umstellen zusammen.",
            "merksatz": "Wann? → Zeit · Wo? Wohin? → Ort · Wie? → Art und Weise · Warum? → Grund.",
            "beispiele": [
                "⏰ <b>Zeit</b> – Wann? <i>Am Montag</i> schreiben wir einen Test.",
                "📍 <b>Ort</b> – Wo? Die Katze schläft <i>auf dem Sofa</i>.",
                "🎨 <b>Art und Weise</b> – Wie? Paul läuft <i>sehr schnell</i>.",
                "❓ <b>Grund</b> – Warum? <i>Wegen des Regens</i> bleiben wir drinnen."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "satzgk5l2u_leicht_1",
                    "category": "kurs_satzg_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wonach fragst du bei einer Zeitangabe?",
                    "answers": [
                        "Wann?",
                        "Wo?",
                        "Wie?",
                        "Warum?"
                    ],
                    "correct": 0,
                    "explanation": "Eine Zeitangabe sagt, wann etwas passiert."
                },
                {
                    "id": "satzgk5l2u_leicht_2",
                    "category": "kurs_satzg_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wonach fragst du bei einer Ortsangabe?",
                    "answers": [
                        "Wo?",
                        "Wann?",
                        "Wie?",
                        "Wer?"
                    ],
                    "correct": 0,
                    "explanation": "Eine Ortsangabe sagt, wo (oder wohin) etwas passiert."
                },
                {
                    "id": "satzgk5l2u_leicht_3",
                    "category": "kurs_satzg_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ist die Zeitangabe in 'Morgen spielen wir Fußball.'?",
                    "answers": [
                        "Morgen",
                        "spielen",
                        "wir",
                        "Fußball"
                    ],
                    "correct": 0,
                    "explanation": "Wann spielen wir? Morgen."
                },
                {
                    "id": "satzgk5l2u_leicht_4",
                    "category": "kurs_satzg_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ist die Ortsangabe in 'Meine Freundin wartet am Bahnhof.'?",
                    "answers": [
                        "am Bahnhof",
                        "Meine Freundin",
                        "wartet",
                        "Bahnhof"
                    ],
                    "correct": 0,
                    "explanation": "Wo wartet sie? Am Bahnhof – die ganze Wortgruppe ist das Satzglied."
                }
            ],
            "mittel": [
                {
                    "id": "satzgk5l2u_mittel_1",
                    "category": "kurs_satzg_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wonach fragst du bei einer Angabe der Art und Weise?",
                    "answers": [
                        "Wie?",
                        "Wann?",
                        "Wo?",
                        "Wessen?"
                    ],
                    "correct": 0,
                    "explanation": "Die Art und Weise sagt, wie etwas passiert."
                },
                {
                    "id": "satzgk5l2u_mittel_2",
                    "category": "kurs_satzg_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was ist die Angabe der Art und Weise in 'Der Hund bellt laut.'?",
                    "answers": [
                        "laut",
                        "Der Hund",
                        "bellt",
                        "Hund bellt"
                    ],
                    "correct": 0,
                    "explanation": "Wie bellt der Hund? Laut."
                },
                {
                    "id": "satzgk5l2u_mittel_3",
                    "category": "kurs_satzg_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Angabe ist 'wegen des Regens'?",
                    "answers": [
                        "Grundangabe",
                        "Zeitangabe",
                        "Ortsangabe",
                        "Art und Weise"
                    ],
                    "correct": 0,
                    "explanation": "Warum? Wegen des Regens – das ist ein Grund."
                },
                {
                    "id": "satzgk5l2u_mittel_4",
                    "category": "kurs_satzg_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was ist die Ortsangabe in 'Nach der Schule gehen wir ins Kino.'?",
                    "answers": [
                        "ins Kino",
                        "Nach der Schule",
                        "wir",
                        "gehen"
                    ],
                    "correct": 0,
                    "explanation": "Wohin gehen wir? Ins Kino. 'Nach der Schule' ist die Zeitangabe."
                }
            ],
            "schwer": [
                {
                    "id": "satzgk5l2u_schwer_1",
                    "category": "kurs_satzg_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Satzglieder hat 'Am Abend liest Oma im Garten ein Buch.'?",
                    "answers": [
                        "Fünf",
                        "Vier",
                        "Sechs",
                        "Sieben"
                    ],
                    "correct": 0,
                    "explanation": "Am Abend | liest | Oma | im Garten | ein Buch – fünf Satzglieder."
                },
                {
                    "id": "satzgk5l2u_schwer_2",
                    "category": "kurs_satzg_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'Sie singt mit großer Freude.' Welche Angabe ist 'mit großer Freude'?",
                    "answers": [
                        "Art und Weise",
                        "Zeitangabe",
                        "Ortsangabe",
                        "Grundangabe"
                    ],
                    "correct": 0,
                    "explanation": "Wie singt sie? Mit großer Freude."
                },
                {
                    "id": "satzgk5l2u_schwer_3",
                    "category": "kurs_satzg_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Umstellung von 'Wir fahren morgen nach Hamburg.' ist richtig?",
                    "answers": [
                        "Morgen fahren wir nach Hamburg.",
                        "Nach fahren wir morgen Hamburg.",
                        "Morgen wir fahren nach Hamburg.",
                        "Fahren morgen wir nach Hamburg."
                    ],
                    "correct": 0,
                    "explanation": "Satzglieder bleiben zusammen, das Verb bleibt an zweiter Stelle."
                },
                {
                    "id": "satzgk5l2u_schwer_4",
                    "category": "kurs_satzg_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was ist die Grundangabe in 'Aus Angst versteckt sich die Katze.'?",
                    "answers": [
                        "Aus Angst",
                        "die Katze",
                        "versteckt sich",
                        "sich"
                    ],
                    "correct": 0,
                    "explanation": "Warum versteckt sich die Katze? Aus Angst."
                }
            ]
        },
        "test": [
            {
                "id": "satzgk5l2_test_1",
                "category": "kurs_satzg_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "satzglieder",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wonach fragst du bei einer Grundangabe?",
                "answers": [
                    "Warum?",
                    "Wann?",
                    "Wo?",
                    "Wie?"
                ],
                "correct": 0,
                "explanation": "Ein Grund antwortet auf die Frage Warum?"
            },
            {
                "id": "satzgk5l2_test_2",
                "category": "kurs_satzg_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "satzglieder",
                "difficulty": "mittel",
                "points": 10,
                "question": "Zeitangabe in 'Am Wochenende besucht unsere Familie Opa.'?",
                "answers": [
                    "Am Wochenende",
                    "unsere Familie",
                    "besucht",
                    "Opa"
                ],
                "correct": 0,
                "explanation": "Wann besucht die Familie Opa? Am Wochenende."
            },
            {
                "id": "satzgk5l2_test_3",
                "category": "kurs_satzg_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "satzglieder",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ist die Ortsangabe in 'Die Kinder spielen im Park.'?",
                "answers": [
                    "im Park",
                    "Die Kinder",
                    "spielen",
                    "Park"
                ],
                "correct": 0,
                "explanation": "Wo spielen die Kinder? Im Park."
            },
            {
                "id": "satzgk5l2_test_4",
                "category": "kurs_satzg_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "satzglieder",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Angabe ist 'vorsichtig' in 'Er öffnet vorsichtig die Tür.'?",
                "answers": [
                    "Art und Weise",
                    "Zeitangabe",
                    "Ortsangabe",
                    "Grundangabe"
                ],
                "correct": 0,
                "explanation": "Wie öffnet er die Tür? Vorsichtig."
            },
            {
                "id": "satzgk5l2_test_5",
                "category": "kurs_satzg_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "satzglieder",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Angabe ist 'seit drei Tagen'?",
                "answers": [
                    "Zeitangabe",
                    "Ortsangabe",
                    "Grundangabe",
                    "Art und Weise"
                ],
                "correct": 0,
                "explanation": "Seit wann? Seit drei Tagen – eine Zeitangabe."
            },
            {
                "id": "satzgk5l2_test_6",
                "category": "kurs_satzg_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "satzglieder",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie findest du heraus, welche Wörter ein Satzglied bilden?",
                "answers": [
                    "Mit der Umstellprobe",
                    "Mit dem Wörterbuch",
                    "Durch Silbenklatschen",
                    "Durch Buchstabenzählen"
                ],
                "correct": 0,
                "explanation": "Was beim Umstellen zusammenbleibt, ist ein Satzglied."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "komm_k5_l2",
        "kurs": "komma_k5",
        "order": 2,
        "icon": "🔗",
        "title": "Kommas bei Nebensätzen",
        "kurz": "Nebensatz erkennen: Bindewort vorn, Verb am Ende",
        "erklaerung": {
            "intro": "Ein <b>Nebensatz</b> kann nicht allein stehen. Er beginnt oft mit einem Bindewort wie <b>weil, dass, wenn, als, ob, obwohl</b> oder mit <b>der, die, das</b>. Das gebeugte Verb steht im Nebensatz am <b>Ende</b>. Zwischen Haupt- und Nebensatz steht immer ein Komma – egal, ob der Nebensatz vorn, hinten oder in der Mitte steht.",
            "merksatz": "Nebensatz erkennen: Bindewort am Anfang, Verb am Ende. Komma davor – und dahinter, wenn der Hauptsatz weitergeht.",
            "beispiele": [
                "➡️ Nebensatz hinten: Ich freue mich, <b>wenn du kommst</b>.",
                "⬅️ Nebensatz vorn: <b>Als es dunkel wurde</b>, gingen wir heim.",
                "↔️ Nebensatz in der Mitte: Der Ball, <b>den ich bekommen habe</b>, ist rot.",
                "🔍 Verb am Ende: …, weil es <b>regnet</b>. Im Hauptsatz: Es <b>regnet</b>."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "kommk5l2u_leicht_1",
                    "category": "kurs_komm_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "zeichensetzung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wo steht das gebeugte Verb im Nebensatz?",
                    "answers": [
                        "Am Ende",
                        "Am Anfang",
                        "An zweiter Stelle",
                        "Ganz egal"
                    ],
                    "correct": 0,
                    "explanation": "Im Nebensatz steht das gebeugte Verb am Ende: …, weil es regnet."
                },
                {
                    "id": "kommk5l2u_leicht_2",
                    "category": "kurs_komm_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "zeichensetzung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Wort leitet oft einen Nebensatz ein?",
                    "answers": [
                        "weil",
                        "und",
                        "oder",
                        "sowie"
                    ],
                    "correct": 0,
                    "explanation": "weil, dass, wenn, als und ob leiten Nebensätze ein."
                },
                {
                    "id": "kommk5l2u_leicht_3",
                    "category": "kurs_komm_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "zeichensetzung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Ich weiß, dass du recht hast.",
                        "Ich weiß dass, du recht hast.",
                        "Ich weiß dass du recht hast.",
                        "Ich, weiß dass du recht hast."
                    ],
                    "correct": 0,
                    "explanation": "Vor dem Nebensatz mit 'dass' steht ein Komma."
                },
                {
                    "id": "kommk5l2u_leicht_4",
                    "category": "kurs_komm_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "zeichensetzung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Wir spielen, wenn die Sonne scheint.",
                        "Wir spielen wenn die Sonne scheint.",
                        "Wir spielen wenn, die Sonne scheint.",
                        "Wir, spielen wenn die Sonne scheint."
                    ],
                    "correct": 0,
                    "explanation": "Vor dem Nebensatz mit 'wenn' steht ein Komma."
                }
            ],
            "mittel": [
                {
                    "id": "kommk5l2u_mittel_1",
                    "category": "kurs_komm_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "zeichensetzung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Als ich heimkam, schlief Mia.",
                        "Als ich heimkam schlief Mia.",
                        "Als ich, heimkam schlief Mia.",
                        "Als, ich heimkam schlief Mia."
                    ],
                    "correct": 0,
                    "explanation": "Der Nebensatz steht vorn – danach ein Komma."
                },
                {
                    "id": "kommk5l2u_mittel_2",
                    "category": "kurs_komm_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "zeichensetzung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Er fragt, ob du mitkommst.",
                        "Er fragt ob du mitkommst.",
                        "Er fragt ob, du mitkommst.",
                        "Er, fragt ob du mitkommst."
                    ],
                    "correct": 0,
                    "explanation": "Vor 'ob' beginnt ein Nebensatz – also Komma."
                },
                {
                    "id": "kommk5l2u_mittel_3",
                    "category": "kurs_komm_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "zeichensetzung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viele Kommas fehlen in 'Das Rad das ich gekauft habe ist neu.'?",
                    "answers": [
                        "Zwei",
                        "Eins",
                        "Drei",
                        "Keins"
                    ],
                    "correct": 0,
                    "explanation": "Der Nebensatz steht in der Mitte: Das Rad, das ich gekauft habe, ist neu."
                },
                {
                    "id": "kommk5l2u_mittel_4",
                    "category": "kurs_komm_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "zeichensetzung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Bindewort in 'Ich lache, obwohl ich traurig bin.'?",
                    "answers": [
                        "obwohl",
                        "ich",
                        "lache",
                        "bin"
                    ],
                    "correct": 0,
                    "explanation": "'obwohl' ist das Bindewort, 'bin' steht am Ende."
                }
            ],
            "schwer": [
                {
                    "id": "kommk5l2u_schwer_1",
                    "category": "kurs_komm_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "zeichensetzung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Die Frau, die dort wartet, ist nett.",
                        "Die Frau die dort wartet, ist nett.",
                        "Die Frau, die dort wartet ist nett.",
                        "Die Frau die dort wartet ist nett."
                    ],
                    "correct": 0,
                    "explanation": "Ein eingeschobener Nebensatz wird von zwei Kommas eingeschlossen."
                },
                {
                    "id": "kommk5l2u_schwer_2",
                    "category": "kurs_komm_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "zeichensetzung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz braucht KEIN Komma?",
                    "answers": [
                        "Ich esse gern Pizza und Nudeln.",
                        "Ich esse Pizza weil ich Hunger habe.",
                        "Wenn es klingelt öffne ich.",
                        "Er sagt dass er kommt."
                    ],
                    "correct": 0,
                    "explanation": "'Pizza und Nudeln' ist eine Aufzählung mit 'und' – kein Komma. Die anderen haben Nebensätze."
                },
                {
                    "id": "kommk5l2u_schwer_3",
                    "category": "kurs_komm_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "zeichensetzung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'Weil er müde war, schlief er ein.' – woran erkennst du den Nebensatz?",
                    "answers": [
                        "Weil vorn, Verb am Ende",
                        "Er steht am Satzende",
                        "Er hat kein Verb",
                        "Er beginnt mit 'er'"
                    ],
                    "correct": 0,
                    "explanation": "'Weil er müde war' – Bindewort vorn, 'war' am Ende."
                },
                {
                    "id": "kommk5l2u_schwer_4",
                    "category": "kurs_komm_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "zeichensetzung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Ich weiß nicht, wann der Bus kommt.",
                        "Ich weiß nicht wann der Bus kommt.",
                        "Ich weiß, nicht wann der Bus kommt.",
                        "Ich weiß nicht wann, der Bus kommt."
                    ],
                    "correct": 0,
                    "explanation": "'wann der Bus kommt' ist ein Nebensatz – Komma davor."
                }
            ]
        },
        "test": [
            {
                "id": "kommk5l2_test_1",
                "category": "kurs_komm_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "zeichensetzung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Ich bleibe drinnen, weil es kalt ist.",
                    "Ich bleibe drinnen weil es kalt ist.",
                    "Ich bleibe, drinnen weil es kalt ist.",
                    "Ich bleibe drinnen weil, es kalt ist."
                ],
                "correct": 0,
                "explanation": "Vor 'weil' steht ein Komma."
            },
            {
                "id": "kommk5l2_test_2",
                "category": "kurs_komm_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "zeichensetzung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Wenn du willst, helfe ich dir.",
                    "Wenn du willst helfe ich dir.",
                    "Wenn, du willst helfe ich dir.",
                    "Wenn du, willst helfe ich dir."
                ],
                "correct": 0,
                "explanation": "Der Nebensatz steht vorn, dann folgt das Komma."
            },
            {
                "id": "kommk5l2_test_3",
                "category": "kurs_komm_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "zeichensetzung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Wort leitet in 'Sie weiß, dass er kommt.' den Nebensatz ein?",
                "answers": [
                    "dass",
                    "Sie",
                    "weiß",
                    "kommt"
                ],
                "correct": 0,
                "explanation": "'dass' leitet den Nebensatz ein, 'kommt' steht am Ende."
            },
            {
                "id": "kommk5l2_test_4",
                "category": "kurs_komm_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "zeichensetzung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Kommas braucht 'Der Hund der bellt gehört Tom.'?",
                "answers": [
                    "Zwei",
                    "Eins",
                    "Drei",
                    "Keins"
                ],
                "correct": 0,
                "explanation": "Der Hund, der bellt, gehört Tom."
            },
            {
                "id": "kommk5l2_test_5",
                "category": "kurs_komm_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "zeichensetzung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wo steht das Verb in '…, weil die Sonne scheint'?",
                "answers": [
                    "Am Ende",
                    "Am Anfang",
                    "An zweiter Stelle",
                    "Es fehlt"
                ],
                "correct": 0,
                "explanation": "Im Nebensatz steht 'scheint' am Ende."
            },
            {
                "id": "kommk5l2_test_6",
                "category": "kurs_komm_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "zeichensetzung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Obwohl es regnet, gehen wir raus.",
                    "Obwohl es regnet gehen wir raus.",
                    "Obwohl, es regnet gehen wir raus.",
                    "Obwohl es, regnet gehen wir raus."
                ],
                "correct": 0,
                "explanation": "Nebensatz vorn – Komma vor dem Hauptsatz."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "rede_k5_l2",
        "kurs": "woertliche_rede_k5",
        "order": 2,
        "icon": "❗",
        "title": "Frage, Ausruf und Einschub",
        "kurz": "Satzzeichen in der Rede und Begleitsatz in der Mitte",
        "erklaerung": {
            "intro": "Fragen und Ausrufe behalten ihr Satzzeichen auch in der wörtlichen Rede: <b>?</b> oder <b>!</b> steht vor dem schließenden Anführungszeichen. Steht der Begleitsatz <b>hinten</b>, fällt nur der <b>Punkt</b> der Rede weg – ? und ! bleiben, danach folgt trotzdem ein Komma. Der Begleitsatz kann auch in der <b>Mitte</b> stehen: Geht die Rede danach im selben Satz weiter, wird er mit zwei Kommas eingeschlossen.",
            "merksatz": "Punkt fällt weg, ? und ! bleiben. Begleitsatz hinten → Komma nach dem Anführungszeichen. Begleitsatz in der Mitte → Komma davor und danach, wenn die Rede im selben Satz weitergeht.",
            "beispiele": [
                "❓ „Kommst du mit?“, fragt Lea. – Das Fragezeichen bleibt, danach ein Komma.",
                "❗ „Pass auf!“, ruft Opa.",
                "✂️ „Ich komme gleich“, sagt Paul. – Hier fällt der Punkt weg.",
                "↔️ „Ich glaube“, sagt Mia, „wir schaffen das.“ – Begleitsatz in der Mitte, zwei Kommas."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "wrk5l2u_leicht_1",
                    "category": "kurs_rede_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "woertliche_rede",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was passiert mit dem Fragezeichen, wenn der Begleitsatz hinten steht?",
                    "answers": [
                        "Es bleibt stehen",
                        "Es fällt weg",
                        "Es wird ein Punkt",
                        "Es wird ein Komma"
                    ],
                    "correct": 0,
                    "explanation": "? und ! bleiben in der wörtlichen Rede stehen."
                },
                {
                    "id": "wrk5l2u_leicht_2",
                    "category": "kurs_rede_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "woertliche_rede",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Satzzeichen fällt weg, wenn der Begleitsatz hinten steht?",
                    "answers": [
                        "Der Punkt",
                        "Das Fragezeichen",
                        "Das Ausrufezeichen",
                        "Das Anführungszeichen"
                    ],
                    "correct": 0,
                    "explanation": "Nur der Punkt der Rede fällt weg: „Ich komme“, sagt Paul."
                },
                {
                    "id": "wrk5l2u_leicht_3",
                    "category": "kurs_rede_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "woertliche_rede",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "„Wo bist du?“, ruft Mama.",
                        "„Wo bist du“, ruft Mama?",
                        "„Wo bist du?“ ruft Mama.",
                        "„Wo bist du.“, ruft Mama."
                    ],
                    "correct": 0,
                    "explanation": "Fragezeichen in der Rede, danach Komma und Begleitsatz."
                },
                {
                    "id": "wrk5l2u_leicht_4",
                    "category": "kurs_rede_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "woertliche_rede",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Tom fragt: „Hast du Zeit?“",
                        "Tom fragt, „Hast du Zeit?“",
                        "Tom fragt: „Hast du Zeit“?",
                        "Tom fragt „Hast du Zeit?“"
                    ],
                    "correct": 0,
                    "explanation": "Begleitsatz vorn → Doppelpunkt, das ? steht in den Anführungszeichen."
                }
            ],
            "mittel": [
                {
                    "id": "wrk5l2u_mittel_1",
                    "category": "kurs_rede_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "woertliche_rede",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "„Hilfe!“, schreit das Kind.",
                        "„Hilfe“!, schreit das Kind.",
                        "„Hilfe!“ schreit das Kind.",
                        "„Hilfe.“, schreit das Kind."
                    ],
                    "correct": 0,
                    "explanation": "Das ! bleibt in der Rede, danach folgt ein Komma."
                },
                {
                    "id": "wrk5l2u_mittel_2",
                    "category": "kurs_rede_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "woertliche_rede",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "„Es ist spät“, sagt Papa.",
                        "„Es ist spät.“, sagt Papa.",
                        "„Es ist spät.“ sagt Papa.",
                        "„Es ist spät“ sagt Papa."
                    ],
                    "correct": 0,
                    "explanation": "Bei einem Aussagesatz fällt der Punkt weg, dann Komma."
                },
                {
                    "id": "wrk5l2u_mittel_3",
                    "category": "kurs_rede_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "woertliche_rede",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viele Kommas schließen einen eingeschobenen Begleitsatz ein?",
                    "answers": [
                        "Zwei",
                        "Eins",
                        "Drei",
                        "Keins"
                    ],
                    "correct": 0,
                    "explanation": "„Ich glaube“, sagt Mia, „wir schaffen das.“ – zwei Kommas."
                },
                {
                    "id": "wrk5l2u_mittel_4",
                    "category": "kurs_rede_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "woertliche_rede",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Sie ruft: „Wir haben gewonnen!“",
                        "Sie ruft: „Wir haben gewonnen“!",
                        "Sie ruft, „Wir haben gewonnen!“",
                        "Sie ruft „Wir haben gewonnen!“"
                    ],
                    "correct": 0,
                    "explanation": "Doppelpunkt nach dem Begleitsatz, ! in den Anführungszeichen."
                }
            ],
            "schwer": [
                {
                    "id": "wrk5l2u_schwer_1",
                    "category": "kurs_rede_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "woertliche_rede",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "„Heute“, sagt Ali, „gehen wir baden.“",
                        "„Heute, sagt Ali, gehen wir baden.“",
                        "„Heute“ sagt Ali „gehen wir baden.“",
                        "„Heute“, sagt Ali: „gehen wir baden.“"
                    ],
                    "correct": 0,
                    "explanation": "Eingeschobener Begleitsatz: Anführungszeichen schließen, Komma davor und danach."
                },
                {
                    "id": "wrk5l2u_schwer_2",
                    "category": "kurs_rede_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "woertliche_rede",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Finde den Fehler: '„Kommst du?“ fragt Tim.'",
                    "answers": [
                        "Es fehlt ein Komma",
                        "Das ? muss weg",
                        "Es fehlt ein Doppelpunkt",
                        "Der Satz ist richtig"
                    ],
                    "correct": 0,
                    "explanation": "Richtig ist: „Kommst du?“, fragt Tim."
                },
                {
                    "id": "wrk5l2u_schwer_3",
                    "category": "kurs_rede_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "woertliche_rede",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "„Ich weiß es nicht“, sagt Lara.",
                        "„Ich weiß es nicht.“, sagt Lara.",
                        "„Ich weiß es nicht“ sagt Lara.",
                        "Ich weiß es nicht, sagt Lara."
                    ],
                    "correct": 0,
                    "explanation": "Punkt fällt weg, Komma nach dem Anführungszeichen."
                },
                {
                    "id": "wrk5l2u_schwer_4",
                    "category": "kurs_rede_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "woertliche_rede",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Begleitsatz in der Mitte, Rede geht weiter: Welches Zeichen folgt?",
                    "answers": [
                        "Ein Komma",
                        "Ein Doppelpunkt",
                        "Ein Punkt",
                        "Kein Zeichen"
                    ],
                    "correct": 0,
                    "explanation": "„Ich glaube“, sagt Mia, „wir schaffen das.“ – nach 'Mia' steht ein Komma."
                }
            ]
        },
        "test": [
            {
                "id": "wrk5l2_test_1",
                "category": "kurs_rede_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "woertliche_rede",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "„Bist du müde?“, fragt Oma.",
                    "„Bist du müde“, fragt Oma?",
                    "„Bist du müde?“ fragt Oma.",
                    "„Bist du müde.“, fragt Oma."
                ],
                "correct": 0,
                "explanation": "Das ? bleibt, danach folgt ein Komma."
            },
            {
                "id": "wrk5l2_test_2",
                "category": "kurs_rede_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "woertliche_rede",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "„Ich gehe jetzt“, sagt Emil.",
                    "„Ich gehe jetzt.“, sagt Emil.",
                    "„Ich gehe jetzt.“ sagt Emil.",
                    "„Ich gehe jetzt“ sagt Emil."
                ],
                "correct": 0,
                "explanation": "Der Punkt fällt weg, dann Komma."
            },
            {
                "id": "wrk5l2_test_3",
                "category": "kurs_rede_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "woertliche_rede",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Mia ruft: „Achtung!“",
                    "Mia ruft, „Achtung!“",
                    "Mia ruft: „Achtung“!",
                    "Mia ruft „Achtung!“"
                ],
                "correct": 0,
                "explanation": "Doppelpunkt nach dem Begleitsatz, ! in den Anführungszeichen."
            },
            {
                "id": "wrk5l2_test_4",
                "category": "kurs_rede_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "woertliche_rede",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "„Morgen“, sagt Frau Kim, „ist frei.“",
                    "„Morgen, sagt Frau Kim, ist frei.“",
                    "„Morgen“ sagt Frau Kim „ist frei.“",
                    "„Morgen“, sagt Frau Kim: „ist frei.“"
                ],
                "correct": 0,
                "explanation": "Eingeschobener Begleitsatz mit zwei Kommas."
            },
            {
                "id": "wrk5l2_test_5",
                "category": "kurs_rede_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "woertliche_rede",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Satzzeichen bleibt, wenn der Begleitsatz hinten steht?",
                "answers": [
                    "Das Ausrufezeichen",
                    "Der Punkt",
                    "Der Doppelpunkt",
                    "Kein Satzzeichen"
                ],
                "correct": 0,
                "explanation": "! und ? bleiben, nur der Punkt fällt weg."
            },
            {
                "id": "wrk5l2_test_6",
                "category": "kurs_rede_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "woertliche_rede",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was schließt einen eingeschobenen Begleitsatz ein?",
                "answers": [
                    "Zwei Kommas",
                    "Zwei Punkte",
                    "Zwei Doppelpunkte",
                    "Zwei Klammern"
                ],
                "correct": 0,
                "explanation": "„Ich glaube“, sagt Mia, „wir schaffen das.“"
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "fael_k5_l2",
        "kurs": "vier_faelle_k5",
        "order": 2,
        "icon": "📌",
        "title": "Präpositionen und ihre Fälle",
        "kurz": "mit + Dativ, für + Akkusativ, wegen + Genitiv",
        "erklaerung": {
            "intro": "Viele <b>Präpositionen</b> bestimmen, in welchem Fall das Nomen danach steht. <b>Dativ</b>: aus, bei, mit, nach, seit, von, zu. <b>Akkusativ</b>: durch, für, gegen, ohne, um. <b>Genitiv</b>: wegen, während, trotz. Einige Präpositionen wie <b>in, auf, an, unter, über</b> wechseln: Fragst du <b>Wo?</b>, steht der Dativ – fragst du <b>Wohin?</b>, steht der Akkusativ.",
            "merksatz": "aus, bei, mit, nach, seit, von, zu → Dativ. durch, für, gegen, ohne, um → Akkusativ. wegen, trotz, während → Genitiv. Wo? → Dativ, Wohin? → Akkusativ.",
            "beispiele": [
                "🚲 <b>mit</b> + Dativ: Ich fahre mit <i>dem</i> Rad.",
                "🎁 <b>für</b> + Akkusativ: Das Geschenk ist für <i>den</i> Opa.",
                "🌧️ <b>wegen</b> + Genitiv: Wegen <i>des</i> Regens fällt das Spiel aus.",
                "📍 Wo? Die Katze liegt auf <i>dem</i> Sofa (Dativ). Wohin? Die Katze springt auf <i>das</i> Sofa (Akkusativ)."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "faelk5l2u_leicht_1",
                    "category": "kurs_fael_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "faelle",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welchen Fall verlangt 'mit'?",
                    "answers": [
                        "Dativ",
                        "Akkusativ",
                        "Genitiv",
                        "Nominativ"
                    ],
                    "correct": 0,
                    "explanation": "mit + Dativ: mit dem Rad."
                },
                {
                    "id": "faelk5l2u_leicht_2",
                    "category": "kurs_fael_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "faelle",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welchen Fall verlangt 'für'?",
                    "answers": [
                        "Akkusativ",
                        "Dativ",
                        "Genitiv",
                        "Nominativ"
                    ],
                    "correct": 0,
                    "explanation": "für + Akkusativ: für den Opa."
                },
                {
                    "id": "faelk5l2u_leicht_3",
                    "category": "kurs_fael_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "faelle",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Ich fahre mit dem Bus.",
                        "Ich fahre mit den Bus.",
                        "Ich fahre mit des Busses.",
                        "Ich fahre mit der Bus."
                    ],
                    "correct": 0,
                    "explanation": "mit verlangt den Dativ: mit dem Bus."
                },
                {
                    "id": "faelk5l2u_leicht_4",
                    "category": "kurs_fael_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "faelle",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Das ist für den Hund.",
                        "Das ist für dem Hund.",
                        "Das ist für des Hundes.",
                        "Das ist für der Hund."
                    ],
                    "correct": 0,
                    "explanation": "für verlangt den Akkusativ: für den Hund."
                }
            ],
            "mittel": [
                {
                    "id": "faelk5l2u_mittel_1",
                    "category": "kurs_fael_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "faelle",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Präposition verlangt den Genitiv?",
                    "answers": [
                        "trotz",
                        "mit",
                        "für",
                        "ohne"
                    ],
                    "correct": 0,
                    "explanation": "trotz + Genitiv: trotz des Regens."
                },
                {
                    "id": "faelk5l2u_mittel_2",
                    "category": "kurs_fael_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "faelle",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Wir gehen durch den Wald.",
                        "Wir gehen durch dem Wald.",
                        "Wir gehen durch des Waldes.",
                        "Wir gehen durch der Wald."
                    ],
                    "correct": 0,
                    "explanation": "durch + Akkusativ: durch den Wald."
                },
                {
                    "id": "faelk5l2u_mittel_3",
                    "category": "kurs_fael_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "faelle",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Sie wohnt bei ihrer Oma.",
                        "Sie wohnt bei ihre Oma.",
                        "Sie wohnt bei ihren Oma.",
                        "Sie wohnt bei ihres Oma."
                    ],
                    "correct": 0,
                    "explanation": "bei + Dativ: bei ihrer Oma."
                },
                {
                    "id": "faelk5l2u_mittel_4",
                    "category": "kurs_fael_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "faelle",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'Das Buch liegt auf dem Tisch.' Wonach fragst du?",
                    "answers": [
                        "Wo?",
                        "Wohin?",
                        "Wessen?",
                        "Wann?"
                    ],
                    "correct": 0,
                    "explanation": "Wo liegt das Buch? Auf dem Tisch – Dativ."
                }
            ],
            "schwer": [
                {
                    "id": "faelk5l2u_schwer_1",
                    "category": "kurs_fael_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "faelle",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'Ich lege das Buch auf den Tisch.' Welcher Fall ist 'den Tisch'?",
                    "answers": [
                        "Akkusativ",
                        "Dativ",
                        "Genitiv",
                        "Nominativ"
                    ],
                    "correct": 0,
                    "explanation": "Wohin lege ich das Buch? Auf den Tisch – Akkusativ."
                },
                {
                    "id": "faelk5l2u_schwer_2",
                    "category": "kurs_fael_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "faelle",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Während der Pause essen wir.",
                        "Während die Pause essen wir.",
                        "Während den Pause essen wir.",
                        "Während das Pause essen wir."
                    ],
                    "correct": 0,
                    "explanation": "während + Genitiv: während der Pause."
                },
                {
                    "id": "faelk5l2u_schwer_3",
                    "category": "kurs_fael_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "faelle",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wohin rennt er? 'Er rennt in ___ Garten.'",
                    "answers": [
                        "den",
                        "dem",
                        "des",
                        "die"
                    ],
                    "correct": 0,
                    "explanation": "Wohin? → Akkusativ: in den Garten."
                },
                {
                    "id": "faelk5l2u_schwer_4",
                    "category": "kurs_fael_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "faelle",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Gruppe verlangt immer den Dativ?",
                    "answers": [
                        "aus, bei, mit, nach",
                        "durch, für, ohne, um",
                        "wegen, trotz, während",
                        "in, auf, an, über"
                    ],
                    "correct": 0,
                    "explanation": "aus, bei, mit, nach, seit, von, zu stehen mit dem Dativ."
                }
            ]
        },
        "test": [
            {
                "id": "faelk5l2_test_1",
                "category": "kurs_fael_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "faelle",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welchen Fall verlangt 'ohne'?",
                "answers": [
                    "Akkusativ",
                    "Dativ",
                    "Genitiv",
                    "Nominativ"
                ],
                "correct": 0,
                "explanation": "ohne + Akkusativ: ohne den Schirm."
            },
            {
                "id": "faelk5l2_test_2",
                "category": "kurs_fael_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "faelle",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welchen Fall verlangt 'seit'?",
                "answers": [
                    "Dativ",
                    "Akkusativ",
                    "Genitiv",
                    "Nominativ"
                ],
                "correct": 0,
                "explanation": "seit + Dativ: seit dem Sommer."
            },
            {
                "id": "faelk5l2_test_3",
                "category": "kurs_fael_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "faelle",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Ich spiele mit meinem Bruder.",
                    "Ich spiele mit meinen Bruder.",
                    "Ich spiele mit mein Bruder.",
                    "Ich spiele mit meines Bruders."
                ],
                "correct": 0,
                "explanation": "mit + Dativ: mit meinem Bruder."
            },
            {
                "id": "faelk5l2_test_4",
                "category": "kurs_fael_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "faelle",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Wegen des Sturms bleiben wir hier.",
                    "Wegen der Sturm bleiben wir hier.",
                    "Wegen den Sturm bleiben wir hier.",
                    "Wegen das Sturms bleiben wir hier."
                ],
                "correct": 0,
                "explanation": "wegen + Genitiv: wegen des Sturms."
            },
            {
                "id": "faelk5l2_test_5",
                "category": "kurs_fael_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "faelle",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Die Katze springt auf das Sofa.' Wonach fragst du?",
                "answers": [
                    "Wohin?",
                    "Wo?",
                    "Wessen?",
                    "Wann?"
                ],
                "correct": 0,
                "explanation": "Wohin springt die Katze? Auf das Sofa – Akkusativ."
            },
            {
                "id": "faelk5l2_test_6",
                "category": "kurs_fael_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "faelle",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Wir laufen um den See.",
                    "Wir laufen um dem See.",
                    "Wir laufen um des Sees.",
                    "Wir laufen um der See."
                ],
                "correct": 0,
                "explanation": "um + Akkusativ: um den See."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "sssz_k5_l2",
        "kurs": "s_ss_sz_k5",
        "order": 2,
        "icon": "🔁",
        "title": "s-Laute in Wortfamilien",
        "kurz": "essen – aß, fließen – Fluss, Haus – Häuser",
        "erklaerung": {
            "intro": "In einer Wortfamilie kann der s-Laut wechseln, weil sich die Länge des Vokals ändert: <b>essen – er aß</b>, <b>fließen – der Fluss</b>, <b>schließen – das Schloss</b>, <b>wissen – ich weiß</b>. Sprich jede Form einzeln: Klingt das s scharf, schreibst du nach kurzem Vokal ss und nach langem Vokal ß. Bei einem s am Wortende hilft die <b>Verlängerungsprobe</b>: Haus – Häuser, Gras – Gräser. Hörst du in der langen Form ein weiches s, schreibst du auch am Ende nur s.",
            "merksatz": "Scharfes s: nach kurzem Vokal ss, nach langem Vokal oder ei/au ß. Jede Form neu prüfen. Am Wortende verlängern: Haus → Häuser, also s.",
            "beispiele": [
                "🍽️ essen (kurzes e) → ss · er aß (langes a) → ß",
                "🌊 fließen (langes ie) → ß · der Fluss (kurzes u) → ss",
                "🔑 schließen → ß · das Schloss → ss",
                "🏠 Haus? Verlängern: Häuser – weiches s, also <b>Haus</b> mit s. 🦶 Fuß? Füße – scharfes s nach langem ü, also <b>ß</b>."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "ssszk5l2u_leicht_1",
                    "category": "kurs_sssz_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie heißt 'essen' in der Vergangenheit? 'Er …'",
                    "answers": [
                        "aß",
                        "ass",
                        "as",
                        "ahs"
                    ],
                    "correct": 0,
                    "explanation": "Das a in 'aß' ist lang – deshalb ß."
                },
                {
                    "id": "ssszk5l2u_leicht_2",
                    "category": "kurs_sssz_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Wort ist richtig geschrieben?",
                    "answers": [
                        "Gras",
                        "Grass",
                        "Graß",
                        "Grahs"
                    ],
                    "correct": 0,
                    "explanation": "Verlängern: Gräser – weiches s, also Gras."
                },
                {
                    "id": "ssszk5l2u_leicht_3",
                    "category": "kurs_sssz_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie schreibt man das Nomen zu 'fließen'?",
                    "answers": [
                        "Fluss",
                        "Fluß",
                        "Flus",
                        "Fluhs"
                    ],
                    "correct": 0,
                    "explanation": "Das u in 'Fluss' ist kurz – deshalb ss."
                },
                {
                    "id": "ssszk5l2u_leicht_4",
                    "category": "kurs_sssz_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was hilft bei einem s am Wortende?",
                    "answers": [
                        "Verlängern",
                        "Umstellen",
                        "Ersetzen",
                        "Weglassen"
                    ],
                    "correct": 0,
                    "explanation": "Verlängern: Haus – Häuser. Dann hörst du, ob das s weich klingt."
                }
            ],
            "mittel": [
                {
                    "id": "ssszk5l2u_mittel_1",
                    "category": "kurs_sssz_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Form ist richtig? 'Ich … es nicht.' (wissen)",
                    "answers": [
                        "weiß",
                        "weiss",
                        "weis",
                        "weihs"
                    ],
                    "correct": 0,
                    "explanation": "Nach dem Doppellaut ei klingt das s hier scharf – deshalb ß. (Bei Kreis – Kreise klingt es weich, deshalb s.)"
                },
                {
                    "id": "ssszk5l2u_mittel_2",
                    "category": "kurs_sssz_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie schreibt man das Nomen zu 'schließen'?",
                    "answers": [
                        "Schloss",
                        "Schloß",
                        "Schlos",
                        "Schlohs"
                    ],
                    "correct": 0,
                    "explanation": "Das o in 'Schloss' ist kurz – deshalb ss."
                },
                {
                    "id": "ssszk5l2u_mittel_3",
                    "category": "kurs_sssz_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Wort ist richtig geschrieben?",
                    "answers": [
                        "Haus",
                        "Hauß",
                        "Hauss",
                        "Hahs"
                    ],
                    "correct": 0,
                    "explanation": "Verlängern: Häuser – weiches s, also Haus."
                },
                {
                    "id": "ssszk5l2u_mittel_4",
                    "category": "kurs_sssz_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Warum schreibt man 'er aß' mit ß?",
                    "answers": [
                        "Das a wird lang gesprochen",
                        "Das a wird kurz gesprochen",
                        "Es ist ein Doppellaut",
                        "Es ist ein Nomen"
                    ],
                    "correct": 0,
                    "explanation": "Langer Vokal und scharfes s (wir aßen) → ß."
                }
            ],
            "schwer": [
                {
                    "id": "ssszk5l2u_schwer_1",
                    "category": "kurs_sssz_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welches Paar ist richtig geschrieben?",
                    "answers": [
                        "fließen – Fluss",
                        "fliessen – Fluß",
                        "fließen – Fluß",
                        "fliessen – Fluss"
                    ],
                    "correct": 0,
                    "explanation": "fließen: langes ie → ß. Fluss: kurzes u → ss."
                },
                {
                    "id": "ssszk5l2u_schwer_2",
                    "category": "kurs_sssz_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welches Wort ist richtig geschrieben?",
                    "answers": [
                        "Glas",
                        "Glaß",
                        "Glass",
                        "Glahs"
                    ],
                    "correct": 0,
                    "explanation": "Verlängern: Gläser – weiches s, also Glas."
                },
                {
                    "id": "ssszk5l2u_schwer_3",
                    "category": "kurs_sssz_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie heißt 'gießen' in der Vergangenheit? 'Sie …'",
                    "answers": [
                        "goss",
                        "goß",
                        "gos",
                        "gohs"
                    ],
                    "correct": 0,
                    "explanation": "Das o in 'goss' ist kurz – deshalb ss."
                },
                {
                    "id": "ssszk5l2u_schwer_4",
                    "category": "kurs_sssz_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Warum schreibt man 'Gras' mit einfachem s?",
                    "answers": [
                        "Gräser hat ein weiches s",
                        "Das a ist kurz",
                        "Es ist ein Nomen",
                        "Es ist ein Fremdwort"
                    ],
                    "correct": 0,
                    "explanation": "Die Verlängerung 'Gräser' zeigt ein weiches s."
                }
            ]
        },
        "test": [
            {
                "id": "ssszk5l2_test_1",
                "category": "kurs_sssz_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie heißt 'messen' in der Vergangenheit? 'Er …'",
                "answers": [
                    "maß",
                    "mass",
                    "mas",
                    "mahs"
                ],
                "correct": 0,
                "explanation": "Das a in 'maß' ist lang – deshalb ß."
            },
            {
                "id": "ssszk5l2_test_2",
                "category": "kurs_sssz_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Wort ist richtig geschrieben?",
                "answers": [
                    "Maus",
                    "Mauß",
                    "Mauss",
                    "Mahs"
                ],
                "correct": 0,
                "explanation": "Verlängern: Mäuse – weiches s, also Maus."
            },
            {
                "id": "ssszk5l2_test_3",
                "category": "kurs_sssz_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Paar ist richtig?",
                "answers": [
                    "essen – er aß",
                    "eßen – er aß",
                    "essen – er ass",
                    "esen – er as"
                ],
                "correct": 0,
                "explanation": "essen: kurzes e → ss. aß: langes a → ß."
            },
            {
                "id": "ssszk5l2_test_4",
                "category": "kurs_sssz_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Wort ist richtig geschrieben?",
                "answers": [
                    "Kreis",
                    "Kreiß",
                    "Kreiss",
                    "Kreihs"
                ],
                "correct": 0,
                "explanation": "Verlängern: Kreise – weiches s, also Kreis."
            },
            {
                "id": "ssszk5l2_test_5",
                "category": "kurs_sssz_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie schreibt man das Nomen zu 'genießen'?",
                "answers": [
                    "Genuss",
                    "Genuß",
                    "Genuhs",
                    "Gennuss"
                ],
                "correct": 0,
                "explanation": "Das u in 'Genuss' ist kurz – deshalb ss."
            },
            {
                "id": "ssszk5l2_test_6",
                "category": "kurs_sssz_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Mit welcher Form prüfst du die Schreibung von 'Haus'?",
                "answers": [
                    "Häuser",
                    "Haustür",
                    "Hausaufgabe",
                    "Hausmeister"
                ],
                "correct": 0,
                "explanation": "Die Mehrzahl verlängert das Wort: Häuser – weiches s."
            }
        ],
        "bestehenAb": 0.8
    }
];
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) {
            if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l);
        });
    }
})();
