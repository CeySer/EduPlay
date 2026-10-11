// Klasse 6 – zweite Lektionen: Deutsch (das/dass, Groß-/Kleinschreibung, Nebensätze, Zeitformen,
// Adjektive steigern) und Englisch (Comparison, Adverbs, Pronouns).
// Hängt nur Lektionen an. topic = Thema der Wissensfragen. Wird NACH lektionen.js geladen.
(function () {
    const extraLektionen = [
    {
        "id": "dsds_k6_l2",
        "kurs": "das_dass_k6",
        "order": 2,
        "icon": "🔍",
        "title": "das oder dass im Text",
        "kurz": "Typische Stellen für dass, Doppel-Lücken und Fehler finden",
        "erklaerung": {
            "intro": "<b>dass</b> steht besonders oft nach Verben des Sagens, Denkens und Fühlens: <i>sagen, glauben, hoffen, wissen, finden, sich freuen</i>. Auch <b>so dass</b> und <b>ohne dass</b> schreibt man mit ss. Steht das Wort direkt hinter einem Nomen und bezieht sich darauf, ist es meist das Relativpronomen <b>das</b> – dann passt <b>welches</b>.",
            "merksatz": "Erst die Ersatzprobe (dieses / welches). Passt nichts und beginnt ein Nebensatz → dass. Nach sagen, glauben, hoffen, wissen folgt oft dass.",
            "beispiele": [
                "🗣️ Sie sagt, <b>dass</b> sie kommt. – 'Sie sagt, welches sie kommt' passt nicht.",
                "🏠 Das Haus, <b>das</b> dort steht, … – 'welches' passt.",
                "🔁 Ich weiß, <b>dass das</b> stimmt. – erst die Konjunktion, dann der Artikel / das Pronomen.",
                "🌧️ Es regnete, <b>so dass</b> wir drinnen blieben."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "dsdsk6l2u_leicht_1",
                    "category": "kurs_dsds_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Nach welchem Verb folgt oft 'dass'?",
                    "answers": [
                        "glauben",
                        "laufen",
                        "essen",
                        "schlafen"
                    ],
                    "correct": 0,
                    "explanation": "Nach Verben des Denkens und Sagens wie glauben folgt oft ein dass-Satz."
                },
                {
                    "id": "dsdsk6l2u_leicht_2",
                    "category": "kurs_dsds_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "'Ich hoffe, ___ du gewinnst.'",
                    "answers": [
                        "dass",
                        "das",
                        "daß",
                        "des"
                    ],
                    "correct": 0,
                    "explanation": "'welches' passt nicht – also dass. 'daß' ist die alte Schreibung."
                },
                {
                    "id": "dsdsk6l2u_leicht_3",
                    "category": "kurs_dsds_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "'Das Spiel, ___ wir spielen, ist neu.'",
                    "answers": [
                        "das",
                        "dass",
                        "dem",
                        "den"
                    ],
                    "correct": 0,
                    "explanation": "'Das Spiel, welches wir spielen' – Relativpronomen das."
                },
                {
                    "id": "dsdsk6l2u_leicht_4",
                    "category": "kurs_dsds_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie schreibt man 'so dass' richtig?",
                    "answers": [
                        "so dass",
                        "so das",
                        "so daß",
                        "soda"
                    ],
                    "correct": 0,
                    "explanation": "so dass (auch: sodass) schreibt man mit ss."
                }
            ],
            "mittel": [
                {
                    "id": "dsdsk6l2u_mittel_1",
                    "category": "kurs_dsds_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'Sie freut sich, ___ ___ Wetter gut ist.'",
                    "answers": [
                        "dass das",
                        "das dass",
                        "dass dass",
                        "das das"
                    ],
                    "correct": 0,
                    "explanation": "Erst die Konjunktion dass, dann der Artikel das (dieses Wetter)."
                },
                {
                    "id": "dsdsk6l2u_mittel_2",
                    "category": "kurs_dsds_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'___ ich das schaffe, hätte ich nie gedacht.'",
                    "answers": [
                        "Dass",
                        "Das",
                        "Des",
                        "Daß"
                    ],
                    "correct": 0,
                    "explanation": "Der Nebensatz steht vorn: 'Dass ich das schaffe, …' – Konjunktion."
                },
                {
                    "id": "dsdsk6l2u_mittel_3",
                    "category": "kurs_dsds_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'Er lief weg, ohne ___ ihn jemand sah.'",
                    "answers": [
                        "dass",
                        "das",
                        "dem",
                        "den"
                    ],
                    "correct": 0,
                    "explanation": "ohne dass leitet einen Nebensatz ein – mit ss."
                },
                {
                    "id": "dsdsk6l2u_mittel_4",
                    "category": "kurs_dsds_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches 'das' ist ein Relativpronomen?",
                    "answers": [
                        "Das Kind, das lacht",
                        "Das Kind lacht laut",
                        "Das ist mein Kind",
                        "Ich mag das Kind"
                    ],
                    "correct": 0,
                    "explanation": "'Das Kind, das (welches) lacht' – es leitet einen Relativsatz ein."
                }
            ],
            "schwer": [
                {
                    "id": "dsdsk6l2u_schwer_1",
                    "category": "kurs_dsds_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "In welchem Satz steckt ein Fehler?",
                    "answers": [
                        "Ich weiß, das du recht hast.",
                        "Das Bild, das hängt, ist alt.",
                        "Ich weiß, dass du recht hast.",
                        "Das finde ich gut."
                    ],
                    "correct": 0,
                    "explanation": "Nach 'Ich weiß' folgt ein Nebensatz – richtig wäre dass."
                },
                {
                    "id": "dsdsk6l2u_schwer_2",
                    "category": "kurs_dsds_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'Das Lied, ___ sie singt, zeigt, ___ sie übt.'",
                    "answers": [
                        "das, dass",
                        "dass, das",
                        "das, das",
                        "dass, dass"
                    ],
                    "correct": 0,
                    "explanation": "Erst Relativpronomen (welches), dann Konjunktion nach 'zeigt'."
                },
                {
                    "id": "dsdsk6l2u_schwer_3",
                    "category": "kurs_dsds_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Warum schreibt man 'Er sagt, dass es regnet.' mit ss?",
                    "answers": [
                        "Es leitet einen Nebensatz ein",
                        "Es steht vor einem Verb",
                        "Es ist ein Artikel",
                        "Es steht nach einem Komma"
                    ],
                    "correct": 0,
                    "explanation": "dass ist eine Konjunktion und leitet den Nebensatz ein. Das Komma allein ist kein Beweis."
                },
                {
                    "id": "dsdsk6l2u_schwer_4",
                    "category": "kurs_dsds_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist ganz richtig?",
                    "answers": [
                        "Ich glaube, dass das klappt.",
                        "Ich glaube, das dass klappt.",
                        "Ich glaube, das das klappt.",
                        "Ich glaube dass das klappt."
                    ],
                    "correct": 0,
                    "explanation": "Komma vor dem Nebensatz, dann dass (Konjunktion) und das (Pronomen)."
                }
            ]
        },
        "test": [
            {
                "id": "dsdsk6l2_test_1",
                "category": "kurs_dsds_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Wir wissen, ___ morgen Ferien sind.'",
                "answers": [
                    "dass",
                    "das",
                    "des",
                    "dem"
                ],
                "correct": 0,
                "explanation": "Nach wissen folgt ein dass-Satz."
            },
            {
                "id": "dsdsk6l2_test_2",
                "category": "kurs_dsds_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Das Buch, ___ auf dem Tisch liegt, gehört mir.'",
                "answers": [
                    "das",
                    "dass",
                    "den",
                    "dem"
                ],
                "correct": 0,
                "explanation": "'Das Buch, welches …' – Relativpronomen."
            },
            {
                "id": "dsdsk6l2_test_3",
                "category": "kurs_dsds_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Es war so kalt, ___ der See zufror.'",
                "answers": [
                    "dass",
                    "das",
                    "des",
                    "dem"
                ],
                "correct": 0,
                "explanation": "so …, dass leitet eine Folge ein – mit ss."
            },
            {
                "id": "dsdsk6l2_test_4",
                "category": "kurs_dsds_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Wort passt zur Ersatzprobe für 'das'?",
                "answers": [
                    "welches",
                    "weil",
                    "wenn",
                    "obwohl"
                ],
                "correct": 0,
                "explanation": "Kann man 'das' durch welches (oder dieses) ersetzen, schreibt man das."
            },
            {
                "id": "dsdsk6l2_test_5",
                "category": "kurs_dsds_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "In welchem Satz steckt ein Fehler?",
                "answers": [
                    "Er hofft, das es klappt.",
                    "Er hofft, dass es klappt.",
                    "Das Ziel, das er hat.",
                    "Das klappt sicher."
                ],
                "correct": 0,
                "explanation": "Nach 'hofft' beginnt ein Nebensatz – dass."
            },
            {
                "id": "dsdsk6l2_test_6",
                "category": "kurs_dsds_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Ich finde, ___ ___ Essen lecker ist.'",
                "answers": [
                    "dass das",
                    "das dass",
                    "das das",
                    "dass dass"
                ],
                "correct": 0,
                "explanation": "Konjunktion dass, dann Artikel das (dieses Essen)."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "gross_k6_l2",
        "kurs": "grossschreibung_k6",
        "order": 2,
        "icon": "📅",
        "title": "Tageszeiten, Wochentage und Anrede",
        "kurz": "heute Abend, montags, Sie und Ihnen",
        "erklaerung": {
            "intro": "<b>Tageszeiten nach heute, gestern, morgen</b> schreibt man groß: heute <b>A</b>bend, gestern <b>M</b>ittag. Auch nach Artikeln: am <b>M</b>orgen, am <b>M</b>ontag. Endet das Wort auf <b>-s</b> und bedeutet 'immer zu dieser Zeit', schreibt man es klein: <b>a</b>bends, <b>m</b>ontags. Die <b>höfliche Anrede</b> Sie, Ihnen, Ihr schreibt man immer groß.",
            "merksatz": "heute Abend, am Montag → groß. abends, montags (mit -s) → klein. Höfliche Anrede Sie/Ihnen/Ihr → immer groß.",
            "beispiele": [
                "🌙 Wir treffen uns heute <b>A</b>bend. – Tageszeit nach 'heute': groß.",
                "📆 Ich habe <b>m</b>ontags Sport. – mit -s, 'jeden Montag': klein.",
                "🌅 Am <b>M</b>orgen ist es kühl. – Artikel davor: groß.",
                "🎩 Können <b>S</b>ie mir helfen? Ich danke <b>I</b>hnen. – höfliche Anrede: groß."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "grossk6l2u_leicht_1",
                    "category": "kurs_gross_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Schreibweise ist richtig?",
                    "answers": [
                        "heute Abend",
                        "heute abend",
                        "Heute abend",
                        "heute-Abend"
                    ],
                    "correct": 0,
                    "explanation": "Tageszeiten nach heute, gestern, morgen schreibt man groß."
                },
                {
                    "id": "grossk6l2u_leicht_2",
                    "category": "kurs_gross_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Schreibweise ist richtig?",
                    "answers": [
                        "Ich turne montags.",
                        "Ich turne Montags.",
                        "Ich turne am montag.",
                        "Ich turne Am Montag."
                    ],
                    "correct": 0,
                    "explanation": "montags mit -s bedeutet 'jeden Montag' – klein."
                },
                {
                    "id": "grossk6l2u_leicht_3",
                    "category": "kurs_gross_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie schreibt man die höfliche Anrede?",
                    "answers": [
                        "Sie",
                        "sie",
                        "SIE",
                        "sie/Sie"
                    ],
                    "correct": 0,
                    "explanation": "Die höfliche Anrede Sie schreibt man immer groß."
                },
                {
                    "id": "grossk6l2u_leicht_4",
                    "category": "kurs_gross_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Schreibweise ist richtig?",
                    "answers": [
                        "am Morgen",
                        "am morgen",
                        "Am morgen",
                        "AM Morgen"
                    ],
                    "correct": 0,
                    "explanation": "Nach dem Artikel 'am' ist Morgen ein Nomen – groß."
                }
            ],
            "mittel": [
                {
                    "id": "grossk6l2u_mittel_1",
                    "category": "kurs_gross_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Schreibweise ist richtig?",
                    "answers": [
                        "gestern Nacht",
                        "gestern nacht",
                        "Gestern nacht",
                        "gesternNacht"
                    ],
                    "correct": 0,
                    "explanation": "Tageszeit nach gestern: groß."
                },
                {
                    "id": "grossk6l2u_mittel_2",
                    "category": "kurs_gross_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'Wir gehen ___ ins Kino.' (abends)",
                    "answers": [
                        "abends",
                        "Abends",
                        "am abend",
                        "Am Abend"
                    ],
                    "correct": 0,
                    "explanation": "abends mit -s heißt 'immer am Abend' – klein."
                },
                {
                    "id": "grossk6l2u_mittel_3",
                    "category": "kurs_gross_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig? (höfliche Anrede)",
                    "answers": [
                        "Darf ich Ihnen helfen?",
                        "Darf ich ihnen helfen?",
                        "Darf ich Ihnen Helfen?",
                        "Darf ich ihnen Helfen?"
                    ],
                    "correct": 0,
                    "explanation": "Höfliche Anrede Ihnen: groß. helfen ist ein Verb: klein."
                },
                {
                    "id": "grossk6l2u_mittel_4",
                    "category": "kurs_gross_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Schreibweise ist richtig?",
                    "answers": [
                        "am Dienstagabend",
                        "am dienstagabend",
                        "am Dienstag abend",
                        "am dienstag Abend"
                    ],
                    "correct": 0,
                    "explanation": "Wochentag und Tageszeit verbunden: ein Nomen, groß und zusammen."
                }
            ],
            "schwer": [
                {
                    "id": "grossk6l2u_schwer_1",
                    "category": "kurs_gross_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "In welchem Satz steckt ein Fehler?",
                    "answers": [
                        "Wir treffen uns Morgens.",
                        "Wir treffen uns morgen früh.",
                        "Wir treffen uns am Morgen.",
                        "Wir treffen uns morgens."
                    ],
                    "correct": 0,
                    "explanation": "morgens mit -s schreibt man klein."
                },
                {
                    "id": "grossk6l2u_schwer_2",
                    "category": "kurs_gross_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Du fragst deine Lehrerin höflich nach ihrem Heft:",
                    "answers": [
                        "Haben Sie Ihr Heft dabei?",
                        "Haben sie ihr Heft dabei?",
                        "Haben Sie ihr Heft dabei?",
                        "Haben sie Ihr Heft dabei?"
                    ],
                    "correct": 0,
                    "explanation": "Wird eine Person höflich angesprochen, schreibt man Sie und Ihr groß."
                },
                {
                    "id": "grossk6l2u_schwer_3",
                    "category": "kurs_gross_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was bedeutet das kleine 'sie' in 'Morgen kommt sie.'?",
                    "answers": [
                        "Eine andere Person kommt",
                        "Die angesprochene Person",
                        "Ein Schreibfehler",
                        "Mehrere höfliche Gäste"
                    ],
                    "correct": 0,
                    "explanation": "Klein geschrieben meint 'sie' eine dritte Person, nicht die höfliche Anrede."
                },
                {
                    "id": "grossk6l2u_schwer_4",
                    "category": "kurs_gross_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "rechtschreibung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Schreibweise ist richtig?",
                    "answers": [
                        "morgen Vormittag",
                        "morgen vormittag",
                        "Morgen vormittag",
                        "morgenVormittag"
                    ],
                    "correct": 0,
                    "explanation": "Tageszeit nach morgen (= am nächsten Tag): groß."
                }
            ]
        },
        "test": [
            {
                "id": "grossk6l2_test_1",
                "category": "kurs_gross_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Schreibweise ist richtig?",
                "answers": [
                    "heute Mittag",
                    "heute mittag",
                    "Heute mittag",
                    "heute-Mittag"
                ],
                "correct": 0,
                "explanation": "Tageszeit nach heute: groß."
            },
            {
                "id": "grossk6l2_test_2",
                "category": "kurs_gross_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "'___ fahre ich mit dem Bus.' (sonntags)",
                "answers": [
                    "Sonntags",
                    "sonntags",
                    "Am sonntag",
                    "am Sonntags"
                ],
                "correct": 0,
                "explanation": "Am Satzanfang groß – sonst klein: sonntags."
            },
            {
                "id": "grossk6l2_test_3",
                "category": "kurs_gross_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig? (höfliche Anrede)",
                "answers": [
                    "Ich danke Ihnen sehr.",
                    "Ich danke ihnen sehr.",
                    "Ich Danke Ihnen sehr.",
                    "Ich danke ihnen Sehr."
                ],
                "correct": 0,
                "explanation": "Höfliche Anrede: Ihnen groß."
            },
            {
                "id": "grossk6l2_test_4",
                "category": "kurs_gross_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Schreibweise ist richtig?",
                "answers": [
                    "am Freitag",
                    "am freitag",
                    "Am freitag",
                    "AM Freitag"
                ],
                "correct": 0,
                "explanation": "Nach dem Artikel 'am' ist der Wochentag ein Nomen."
            },
            {
                "id": "grossk6l2_test_5",
                "category": "kurs_gross_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "In welchem Satz steckt ein Fehler?",
                "answers": [
                    "Wir spielen Nachmittags.",
                    "Wir spielen nachmittags.",
                    "Wir spielen am Nachmittag.",
                    "Wir spielen heute Nachmittag."
                ],
                "correct": 0,
                "explanation": "nachmittags mit -s schreibt man klein."
            },
            {
                "id": "grossk6l2_test_6",
                "category": "kurs_gross_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "rechtschreibung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wann schreibt man eine Tageszeit klein?",
                "answers": [
                    "Wenn sie auf -s endet",
                    "Nach heute und gestern",
                    "Nach dem Wort am",
                    "Am Satzanfang"
                ],
                "correct": 0,
                "explanation": "abends, morgens, nachmittags – mit -s klein."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "nebs_k6_l2",
        "kurs": "nebensaetze_k6",
        "order": 2,
        "icon": "🧵",
        "title": "Relativsätze und Satzreihen",
        "kurz": "der, die, das als Relativpronomen – und Hauptsatz + Hauptsatz",
        "erklaerung": {
            "intro": "Ein <b>Relativsatz</b> ist ein Nebensatz, der ein Nomen genauer beschreibt. Er beginnt mit einem <b>Relativpronomen</b> (der, die, das, dem, den …), das sich auf das Nomen bezieht. Das Verb steht am Ende, der Relativsatz wird mit Komma abgetrennt. Werden dagegen zwei <b>Hauptsätze</b> mit <i>und, oder, aber, denn</i> verbunden, entsteht eine <b>Satzreihe</b> – dort steht das Verb in beiden Teilen an zweiter Stelle.",
            "merksatz": "Relativsatz: Relativpronomen + Verb am Ende, Komma davor (und danach, wenn der Hauptsatz weitergeht). Satzreihe: Hauptsatz + Hauptsatz, z. B. mit aber oder denn.",
            "beispiele": [
                "🐕 Der Hund, <b>der</b> dort bellt, gehört Lea. – 'der' bezieht sich auf 'Hund'.",
                "🎁 Das Geschenk, <b>das</b> ich bekam, war toll.",
                "👩 Die Frau, <b>der</b> ich half, bedankte sich. – Dativ: wem half ich?",
                "➕ Satzreihe: Ich lerne, <b>denn</b> morgen ist ein Test. – zwei Hauptsätze."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "nebsk6l2u_leicht_1",
                    "category": "kurs_nebs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was beschreibt ein Relativsatz?",
                    "answers": [
                        "Ein Nomen genauer",
                        "Ein Verb genauer",
                        "Den ganzen Text",
                        "Nur die Zeit"
                    ],
                    "correct": 0,
                    "explanation": "Ein Relativsatz beschreibt ein Nomen genauer."
                },
                {
                    "id": "nebsk6l2u_leicht_2",
                    "category": "kurs_nebs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Relativpronomen in 'Der Ball, den ich suche, ist rot.'?",
                    "answers": [
                        "den",
                        "Der",
                        "ich",
                        "ist"
                    ],
                    "correct": 0,
                    "explanation": "'den' leitet den Relativsatz ein und bezieht sich auf 'Ball'."
                },
                {
                    "id": "nebsk6l2u_leicht_3",
                    "category": "kurs_nebs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wo steht das Verb im Relativsatz?",
                    "answers": [
                        "Am Ende",
                        "An zweiter Stelle",
                        "Am Anfang",
                        "Es fehlt"
                    ],
                    "correct": 0,
                    "explanation": "Wie in jedem Nebensatz steht das Verb am Ende: …, den ich suche."
                },
                {
                    "id": "nebsk6l2u_leicht_4",
                    "category": "kurs_nebs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Worauf bezieht sich 'die' in 'Die Katze, die schläft, ist alt.'?",
                    "answers": [
                        "Katze",
                        "schläft",
                        "alt",
                        "ist"
                    ],
                    "correct": 0,
                    "explanation": "Das Relativpronomen bezieht sich auf das Nomen davor: Katze."
                }
            ],
            "mittel": [
                {
                    "id": "nebsk6l2u_mittel_1",
                    "category": "kurs_nebs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'Der Junge, ___ dort steht, ist mein Bruder.'",
                    "answers": [
                        "der",
                        "die",
                        "das",
                        "den"
                    ],
                    "correct": 0,
                    "explanation": "Junge ist maskulin, im Relativsatz Subjekt: der."
                },
                {
                    "id": "nebsk6l2u_mittel_2",
                    "category": "kurs_nebs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'Das Buch, ___ ich lese, ist spannend.'",
                    "answers": [
                        "das",
                        "der",
                        "die",
                        "dem"
                    ],
                    "correct": 0,
                    "explanation": "Buch ist sächlich: das."
                },
                {
                    "id": "nebsk6l2u_mittel_3",
                    "category": "kurs_nebs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was ist eine Satzreihe?",
                    "answers": [
                        "Zwei verbundene Hauptsätze",
                        "Ein Haupt- und ein Nebensatz",
                        "Zwei verbundene Nebensätze",
                        "Ein langer Satz ohne Verb"
                    ],
                    "correct": 0,
                    "explanation": "In einer Satzreihe stehen zwei Hauptsätze nebeneinander."
                },
                {
                    "id": "nebsk6l2u_mittel_4",
                    "category": "kurs_nebs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist eine Satzreihe?",
                    "answers": [
                        "Ich lese, aber Tom malt.",
                        "Ich lese, weil ich muss.",
                        "Ich lese, wenn ich Zeit habe.",
                        "Ich lese, dass es spannend ist."
                    ],
                    "correct": 0,
                    "explanation": "'aber' verbindet zwei Hauptsätze – das Verb steht beide Male an zweiter Stelle."
                }
            ],
            "schwer": [
                {
                    "id": "nebsk6l2u_schwer_1",
                    "category": "kurs_nebs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'Die Freundin, ___ ich schreibe, wohnt in Rom.'",
                    "answers": [
                        "der",
                        "die",
                        "den",
                        "das"
                    ],
                    "correct": 0,
                    "explanation": "Wem schreibe ich? Dativ feminin: der."
                },
                {
                    "id": "nebsk6l2u_schwer_2",
                    "category": "kurs_nebs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Kommas braucht 'Das Rad das ich fahre ist neu.'?",
                    "answers": [
                        "Zwei",
                        "Eins",
                        "Keins",
                        "Drei"
                    ],
                    "correct": 0,
                    "explanation": "Der Relativsatz steht in der Mitte: Das Rad, das ich fahre, ist neu."
                },
                {
                    "id": "nebsk6l2u_schwer_3",
                    "category": "kurs_nebs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Der Mann, dem ich half, lacht.",
                        "Der Mann, den ich half, lacht.",
                        "Der Mann, der ich half, lacht.",
                        "Der Mann dem ich half, lacht."
                    ],
                    "correct": 0,
                    "explanation": "helfen verlangt den Dativ: dem."
                },
                {
                    "id": "nebsk6l2u_schwer_4",
                    "category": "kurs_nebs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "In welchem Satz steht ein Relativsatz?",
                    "answers": [
                        "Das Lied, das sie singt, ist neu.",
                        "Sie singt, weil sie froh ist.",
                        "Sie singt und er tanzt.",
                        "Sie sagt, dass sie singt."
                    ],
                    "correct": 0,
                    "explanation": "'das sie singt' beschreibt das Nomen Lied."
                }
            ]
        },
        "test": [
            {
                "id": "nebsk6l2_test_1",
                "category": "kurs_nebs_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "nebensaetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Der Baum, ___ im Garten steht, ist alt.'",
                "answers": [
                    "der",
                    "die",
                    "das",
                    "den"
                ],
                "correct": 0,
                "explanation": "Baum ist maskulin und Subjekt im Relativsatz: der."
            },
            {
                "id": "nebsk6l2_test_2",
                "category": "kurs_nebs_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "nebensaetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Die Stadt, ___ wir besuchen, ist schön.'",
                "answers": [
                    "die",
                    "der",
                    "das",
                    "den"
                ],
                "correct": 0,
                "explanation": "Stadt ist feminin: die."
            },
            {
                "id": "nebsk6l2_test_3",
                "category": "kurs_nebs_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "nebensaetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Wort verbindet zwei Hauptsätze?",
                "answers": [
                    "denn",
                    "weil",
                    "dass",
                    "obwohl"
                ],
                "correct": 0,
                "explanation": "denn ist nebenordnend: Ich bleibe, denn es regnet."
            },
            {
                "id": "nebsk6l2_test_4",
                "category": "kurs_nebs_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "nebensaetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wo steht das Komma bei 'Das ist der Hund den ich mag'?",
                "answers": [
                    "Vor 'den'",
                    "Vor 'der'",
                    "Nach 'mag'",
                    "Kein Komma"
                ],
                "correct": 0,
                "explanation": "Vor dem Relativpronomen: Das ist der Hund, den ich mag."
            },
            {
                "id": "nebsk6l2_test_5",
                "category": "kurs_nebs_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "nebensaetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ist 'die' in 'Die Frau, die singt, lacht.' beim zweiten Mal?",
                "answers": [
                    "Relativpronomen",
                    "Bestimmter Artikel",
                    "Konjunktion",
                    "Präposition"
                ],
                "correct": 0,
                "explanation": "Das zweite 'die' leitet den Relativsatz ein."
            },
            {
                "id": "nebsk6l2_test_6",
                "category": "kurs_nebs_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "nebensaetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Das Kind, das spielt, lacht.",
                    "Das Kind, dass spielt, lacht.",
                    "Das Kind das spielt lacht.",
                    "Das Kind, das spielt lacht."
                ],
                "correct": 0,
                "explanation": "Relativpronomen das mit einem s, Kommas vor und nach dem Relativsatz."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "zeit_k6_l2",
        "kurs": "zeitformen_k6",
        "order": 2,
        "icon": "🚀",
        "title": "Zukunft und Perfekt mit sein oder haben",
        "kurz": "Futur I bilden und das richtige Hilfsverb wählen",
        "erklaerung": {
            "intro": "Für die <b>Zukunft</b> gibt es das <b>Futur I</b>: werden + Infinitiv (<i>ich werde lernen</i>). Oft reicht auch das <b>Präsens mit Zeitangabe</b>: <i>Morgen fahre ich nach Köln.</i> Im <b>Perfekt</b> braucht man <b>haben</b> oder <b>sein</b>. <b>sein</b> steht vor allem bei Verben der Bewegung von einem Ort zum anderen (gehen, fahren, laufen) und bei Veränderungen (einschlafen, wachsen) sowie bei sein und bleiben. Die meisten anderen Verben bilden das Perfekt mit <b>haben</b>.",
            "merksatz": "Futur I = werden + Infinitiv. Perfekt mit sein: Ortswechsel (gehen, fahren), Veränderung (einschlafen, wachsen), sein, bleiben. Sonst meist haben.",
            "beispiele": [
                "🔮 Futur I: Ich <b>werde</b> morgen <b>lernen</b>.",
                "📆 Präsens mit Zeitangabe: <b>Nächste Woche</b> fahren wir weg.",
                "🚶 Perfekt mit sein: Ich <b>bin</b> nach Hause <b>gegangen</b>.",
                "📖 Perfekt mit haben: Ich <b>habe</b> ein Buch <b>gelesen</b>."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "zeitk6l2u_leicht_1",
                    "category": "kurs_zeit_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "zeitformen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie bildet man das Futur I?",
                    "answers": [
                        "werden + Infinitiv",
                        "haben + Partizip II",
                        "sein + Partizip II",
                        "Präteritum + -te"
                    ],
                    "correct": 0,
                    "explanation": "Futur I: werden + Infinitiv – ich werde spielen."
                },
                {
                    "id": "zeitk6l2u_leicht_2",
                    "category": "kurs_zeit_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "zeitformen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Zeitform ist 'Ich werde schwimmen.'?",
                    "answers": [
                        "Futur I",
                        "Perfekt",
                        "Präteritum",
                        "Präsens"
                    ],
                    "correct": 0,
                    "explanation": "werden + Infinitiv = Futur I."
                },
                {
                    "id": "zeitk6l2u_leicht_3",
                    "category": "kurs_zeit_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "zeitformen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Hilfsverb braucht 'gehen' im Perfekt?",
                    "answers": [
                        "sein",
                        "haben",
                        "werden",
                        "können"
                    ],
                    "correct": 0,
                    "explanation": "Ortswechsel: Ich bin gegangen."
                },
                {
                    "id": "zeitk6l2u_leicht_4",
                    "category": "kurs_zeit_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "zeitformen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Hilfsverb braucht 'lesen' im Perfekt?",
                    "answers": [
                        "haben",
                        "sein",
                        "werden",
                        "dürfen"
                    ],
                    "correct": 0,
                    "explanation": "Ich habe gelesen."
                }
            ],
            "mittel": [
                {
                    "id": "zeitk6l2u_mittel_1",
                    "category": "kurs_zeit_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "zeitformen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz steht im Futur I?",
                    "answers": [
                        "Sie wird bald kommen.",
                        "Sie kommt bald.",
                        "Sie ist gekommen.",
                        "Sie kam bald."
                    ],
                    "correct": 0,
                    "explanation": "wird … kommen = werden + Infinitiv."
                },
                {
                    "id": "zeitk6l2u_mittel_2",
                    "category": "kurs_zeit_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "zeitformen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie lautet das Perfekt von 'Wir fahren nach Rom.'?",
                    "answers": [
                        "Wir sind nach Rom gefahren.",
                        "Wir haben nach Rom gefahren.",
                        "Wir werden nach Rom fahren.",
                        "Wir fuhren nach Rom."
                    ],
                    "correct": 0,
                    "explanation": "fahren als Ortswechsel bildet das Perfekt mit sein."
                },
                {
                    "id": "zeitk6l2u_mittel_3",
                    "category": "kurs_zeit_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "zeitformen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Hilfsverb braucht 'einschlafen' im Perfekt?",
                    "answers": [
                        "sein",
                        "haben",
                        "werden",
                        "müssen"
                    ],
                    "correct": 0,
                    "explanation": "Veränderung des Zustands: Er ist eingeschlafen."
                },
                {
                    "id": "zeitk6l2u_mittel_4",
                    "category": "kurs_zeit_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "zeitformen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie drückt man Zukunft auch ohne 'werden' aus?",
                    "answers": [
                        "Präsens mit Zeitangabe",
                        "Präteritum mit Zeitangabe",
                        "Perfekt ohne Zeitangabe",
                        "Nur mit 'haben'"
                    ],
                    "correct": 0,
                    "explanation": "Morgen fahre ich weg. – Präsens plus Zeitangabe."
                }
            ],
            "schwer": [
                {
                    "id": "zeitk6l2u_schwer_1",
                    "category": "kurs_zeit_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "zeitformen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Ich bin zu Hause geblieben.",
                        "Ich habe zu Hause geblieben.",
                        "Ich bin zu Hause gebleibt.",
                        "Ich habe zu Hause gebleibt."
                    ],
                    "correct": 0,
                    "explanation": "bleiben bildet das Perfekt mit sein; Partizip: geblieben."
                },
                {
                    "id": "zeitk6l2u_schwer_2",
                    "category": "kurs_zeit_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "zeitformen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie lautet das Futur I von 'du schreibst'?",
                    "answers": [
                        "du wirst schreiben",
                        "du wirst geschrieben",
                        "du hast geschrieben",
                        "du würdest schreiben"
                    ],
                    "correct": 0,
                    "explanation": "werden (du wirst) + Infinitiv (schreiben)."
                },
                {
                    "id": "zeitk6l2u_schwer_3",
                    "category": "kurs_zeit_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "zeitformen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Der Baum ist gewachsen.",
                        "Der Baum hat gewachsen.",
                        "Der Baum ist gewacht.",
                        "Der Baum hat gewachst."
                    ],
                    "correct": 0,
                    "explanation": "wachsen ist eine Veränderung: ist gewachsen."
                },
                {
                    "id": "zeitk6l2u_schwer_4",
                    "category": "kurs_zeit_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "zeitformen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz steht NICHT in der Zukunft?",
                    "answers": [
                        "Gestern sind wir gerannt.",
                        "Morgen rennen wir los.",
                        "Wir werden bald rennen.",
                        "Bald rennen wir schnell."
                    ],
                    "correct": 0,
                    "explanation": "'Gestern … sind gerannt' ist Perfekt, also Vergangenheit."
                }
            ]
        },
        "test": [
            {
                "id": "zeitk6l2_test_1",
                "category": "kurs_zeit_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "zeitformen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zeitform ist 'Er wird anrufen.'?",
                "answers": [
                    "Futur I",
                    "Perfekt",
                    "Präsens",
                    "Plusquamperfekt"
                ],
                "correct": 0,
                "explanation": "werden + Infinitiv."
            },
            {
                "id": "zeitk6l2_test_2",
                "category": "kurs_zeit_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "zeitformen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Hilfsverb braucht 'laufen' im Perfekt?",
                "answers": [
                    "sein",
                    "haben",
                    "werden",
                    "wollen"
                ],
                "correct": 0,
                "explanation": "Ich bin gelaufen."
            },
            {
                "id": "zeitk6l2_test_3",
                "category": "kurs_zeit_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "zeitformen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Hilfsverb braucht 'essen' im Perfekt?",
                "answers": [
                    "haben",
                    "sein",
                    "werden",
                    "sollen"
                ],
                "correct": 0,
                "explanation": "Ich habe gegessen."
            },
            {
                "id": "zeitk6l2_test_4",
                "category": "kurs_zeit_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "zeitformen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie lautet das Futur I von 'wir spielen'?",
                "answers": [
                    "wir werden spielen",
                    "wir haben gespielt",
                    "wir spielten",
                    "wir sind gespielt"
                ],
                "correct": 0,
                "explanation": "werden + Infinitiv."
            },
            {
                "id": "zeitk6l2_test_5",
                "category": "kurs_zeit_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "zeitformen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Sie ist nach Hause geradelt.",
                    "Sie hat nach Hause geradelt.",
                    "Sie wird nach Hause geradelt.",
                    "Sie ist nach Hause radeln."
                ],
                "correct": 0,
                "explanation": "Ortswechsel mit dem Rad: ist geradelt."
            },
            {
                "id": "zeitk6l2_test_6",
                "category": "kurs_zeit_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "zeitformen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz drückt die Zukunft im Präsens aus?",
                "answers": [
                    "Übermorgen besuche ich Oma.",
                    "Gestern besuchte ich Oma.",
                    "Ich habe Oma besucht.",
                    "Ich hatte Oma besucht."
                ],
                "correct": 0,
                "explanation": "Präsens + Zeitangabe 'Übermorgen' = Zukunft."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "adjs_k6_l2",
        "kurs": "adjektive_steigern_k6",
        "order": 2,
        "icon": "🏆",
        "title": "Steigern mit Umlaut und vor Nomen",
        "kurz": "größer, jünger – der schnellere Hund, das schönste Bild",
        "erklaerung": {
            "intro": "Viele kurze Adjektive bekommen beim Steigern einen <b>Umlaut</b>: groß – größer – am größten, jung – jünger, warm – wärmer. Steht das gesteigerte Adjektiv <b>vor einem Nomen</b>, bekommt es eine Endung: der schnell<b>ere</b> Hund, das schön<b>ste</b> Bild. Manche Adjektive kann man <b>nicht</b> steigern, weil es kein Mehr gibt: tot, einzig, schwanger. Und: Nach dem Komparativ steht <b>als</b>, nicht wie – und nie 'mehr' zusätzlich zur -er-Form.",
            "merksatz": "Umlaut bei vielen kurzen Adjektiven (alt – älter). Vor dem Nomen mit Endung (der höchste Berg). Komparativ + als, nie 'mehr schneller'.",
            "beispiele": [
                "🌳 alt – <b>ä</b>lter – am <b>ä</b>ltesten",
                "🐕 Das ist der schnell<b>ere</b> Hund.",
                "🏔️ Die Zugspitze ist der höch<b>ste</b> Berg Deutschlands.",
                "❌ 'mehr schneller' oder 'besser wie' – ✅ schneller, besser als"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "adjsk6l2u_leicht_1",
                    "category": "kurs_adjs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "adjektive",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie lautet der Komparativ von 'jung'?",
                    "answers": [
                        "jünger",
                        "junger",
                        "mehr jung",
                        "jüngster"
                    ],
                    "correct": 0,
                    "explanation": "jung bekommt einen Umlaut: jünger."
                },
                {
                    "id": "adjsk6l2u_leicht_2",
                    "category": "kurs_adjs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "adjektive",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie lautet der Superlativ von 'warm'?",
                    "answers": [
                        "am wärmsten",
                        "am warmsten",
                        "am wärmeren",
                        "am meisten warm"
                    ],
                    "correct": 0,
                    "explanation": "warm – wärmer – am wärmsten."
                },
                {
                    "id": "adjsk6l2u_leicht_3",
                    "category": "kurs_adjs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "adjektive",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Mein Bruder ist älter als ich.",
                        "Mein Bruder ist älter wie ich.",
                        "Mein Bruder ist alter als ich.",
                        "Mein Bruder ist mehr alt als ich."
                    ],
                    "correct": 0,
                    "explanation": "Komparativ mit Umlaut + als."
                },
                {
                    "id": "adjsk6l2u_leicht_4",
                    "category": "kurs_adjs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "adjektive",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Adjektiv kann man nicht steigern?",
                    "answers": [
                        "einzig",
                        "klein",
                        "kalt",
                        "laut"
                    ],
                    "correct": 0,
                    "explanation": "einzig heißt 'nur eines' – mehr als einzig geht nicht."
                }
            ],
            "mittel": [
                {
                    "id": "adjsk6l2u_mittel_1",
                    "category": "kurs_adjs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "adjektive",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'Das ist der ___ Turm der Stadt.' (hoch)",
                    "answers": [
                        "höchste",
                        "hochste",
                        "höhere",
                        "meiste hohe"
                    ],
                    "correct": 0,
                    "explanation": "Superlativ vor dem Nomen mit Endung: der höchste Turm."
                },
                {
                    "id": "adjsk6l2u_mittel_2",
                    "category": "kurs_adjs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "adjektive",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Ich habe das größere Stück.",
                        "Ich habe das größerer Stück.",
                        "Ich habe das mehr große Stück.",
                        "Ich habe das großere Stück."
                    ],
                    "correct": 0,
                    "explanation": "Komparativ vor dem Nomen: das größere Stück."
                },
                {
                    "id": "adjsk6l2u_mittel_3",
                    "category": "kurs_adjs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "adjektive",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie lautet der Komparativ von 'kurz'?",
                    "answers": [
                        "kürzer",
                        "kurzer",
                        "kurzerer",
                        "mehr kurz"
                    ],
                    "correct": 0,
                    "explanation": "kurz – kürzer – am kürzesten."
                },
                {
                    "id": "adjsk6l2u_mittel_4",
                    "category": "kurs_adjs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "adjektive",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz enthält einen Fehler?",
                    "answers": [
                        "Sie läuft mehr schneller.",
                        "Sie läuft schneller.",
                        "Sie läuft am schnellsten.",
                        "Sie läuft so schnell wie ich."
                    ],
                    "correct": 0,
                    "explanation": "Nie 'mehr' plus -er: schneller reicht."
                }
            ],
            "schwer": [
                {
                    "id": "adjsk6l2u_schwer_1",
                    "category": "kurs_adjs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "adjektive",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'Er nahm die ___ Tasche.' (schwer, Superlativ)",
                    "answers": [
                        "schwerste",
                        "schwersten",
                        "schwerere",
                        "am schwersten"
                    ],
                    "correct": 0,
                    "explanation": "die schwerste Tasche – vor dem Nomen ohne 'am'."
                },
                {
                    "id": "adjsk6l2u_schwer_2",
                    "category": "kurs_adjs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "adjektive",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welches Adjektiv bekommt KEINEN Umlaut?",
                    "answers": [
                        "klar",
                        "groß",
                        "stark",
                        "arm"
                    ],
                    "correct": 0,
                    "explanation": "klar – klarer; aber größer, stärker, ärmer."
                },
                {
                    "id": "adjsk6l2u_schwer_3",
                    "category": "kurs_adjs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "adjektive",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Das ist das einzige Kind.",
                        "Das ist das einzigste Kind.",
                        "Das ist das einzigere Kind.",
                        "Das ist das am einzigsten Kind."
                    ],
                    "correct": 0,
                    "explanation": "einzig kann man nicht steigern – 'einzigste' ist falsch."
                },
                {
                    "id": "adjsk6l2u_schwer_4",
                    "category": "kurs_adjs_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "deutsch",
                    "topic": "adjektive",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'Heute ist der ___ Tag des Jahres.' (kurz)",
                    "answers": [
                        "kürzeste",
                        "kürzester",
                        "kurzeste",
                        "am kürzesten"
                    ],
                    "correct": 0,
                    "explanation": "der kürzeste Tag – Superlativ mit Umlaut und Endung."
                }
            ]
        },
        "test": [
            {
                "id": "adjsk6l2_test_1",
                "category": "kurs_adjs_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "adjektive",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie lautet der Komparativ von 'arm'?",
                "answers": [
                    "ärmer",
                    "armer",
                    "mehr arm",
                    "ärmster"
                ],
                "correct": 0,
                "explanation": "arm – ärmer – am ärmsten."
            },
            {
                "id": "adjsk6l2_test_2",
                "category": "kurs_adjs_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "adjektive",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie lautet der Superlativ von 'stark'?",
                "answers": [
                    "am stärksten",
                    "am starksten",
                    "am stärkeren",
                    "am meisten stark"
                ],
                "correct": 0,
                "explanation": "stark – stärker – am stärksten."
            },
            {
                "id": "adjsk6l2_test_3",
                "category": "kurs_adjs_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "adjektive",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Das ist der ___ Weg.' (kurz, Komparativ)",
                "answers": [
                    "kürzere",
                    "kürzer",
                    "kurzere",
                    "mehr kurze"
                ],
                "correct": 0,
                "explanation": "Komparativ vor dem Nomen mit Endung: der kürzere Weg."
            },
            {
                "id": "adjsk6l2_test_4",
                "category": "kurs_adjs_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "adjektive",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Adjektiv kann man nicht steigern?",
                "answers": [
                    "tot",
                    "müde",
                    "nass",
                    "dick"
                ],
                "correct": 0,
                "explanation": "tot ist tot – keine Steigerung."
            },
            {
                "id": "adjsk6l2_test_5",
                "category": "kurs_adjs_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "adjektive",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Lea ist klüger als Tim.",
                    "Lea ist kluger als Tim.",
                    "Lea ist klüger wie Tim.",
                    "Lea ist mehr klug als Tim."
                ],
                "correct": 0,
                "explanation": "klug – klüger + als."
            },
            {
                "id": "adjsk6l2_test_6",
                "category": "kurs_adjs_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "deutsch",
                "topic": "adjektive",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz enthält einen Fehler?",
                "answers": [
                    "Das ist der bessere wie dieser.",
                    "Das ist der bessere Plan.",
                    "Das ist besser als vorher.",
                    "Das ist am besten."
                ],
                "correct": 0,
                "explanation": "Nach dem Komparativ steht als, nicht wie."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "comp_k6_l2",
        "kurs": "comparison_k6",
        "order": 2,
        "icon": "🆚",
        "title": "Comparing in sentences",
        "kurz": "than, as … as, not as … as, the best",
        "erklaerung": {
            "intro": "Mit dem Komparativ vergleicht man zwei Dinge: Tom is tall<b>er than</b> Ben. Sind beide gleich, sagt man <b>as … as</b>: Tom is <b>as</b> tall <b>as</b> Ben. Ist etwas weniger, sagt man <b>not as … as</b>. Beim Superlativ steht meist <b>the</b> davor: She is <b>the best</b> player <b>in</b> the team.",
            "merksatz": "Komparativ + than. Gleich: as … as. Weniger: not as … as. Superlativ: the …-est / the most … (in the class).",
            "beispiele": [
                "📏 Tom is taller <b>than</b> Ben.",
                "⚖️ My bike is <b>as</b> fast <b>as</b> yours.",
                "🐢 A turtle is <b>not as</b> fast <b>as</b> a horse.",
                "🏆 She is <b>the best</b> player <b>in</b> the team."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "compk6l2u_leicht_1",
                    "category": "kurs_comp_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "comparison",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Wort folgt auf den Komparativ: 'Tom is taller ___ Ben.'",
                    "answers": [
                        "than",
                        "then",
                        "as",
                        "that"
                    ],
                    "correct": 0,
                    "explanation": "Nach dem Komparativ steht than."
                },
                {
                    "id": "compk6l2u_leicht_2",
                    "category": "kurs_comp_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "comparison",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie sagt man 'genauso groß wie'?",
                    "answers": [
                        "as tall as",
                        "so tall as",
                        "as tall than",
                        "tall as like"
                    ],
                    "correct": 0,
                    "explanation": "Gleichheit: as … as."
                },
                {
                    "id": "compk6l2u_leicht_3",
                    "category": "kurs_comp_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "comparison",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was steht vor dem Superlativ?",
                    "answers": [
                        "the",
                        "a",
                        "than",
                        "as"
                    ],
                    "correct": 0,
                    "explanation": "the tallest, the best – immer mit the."
                },
                {
                    "id": "compk6l2u_leicht_4",
                    "category": "kurs_comp_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "comparison",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "My dog is bigger than yours.",
                        "My dog is bigger then yours.",
                        "My dog is more big than yours.",
                        "My dog is biggest than yours."
                    ],
                    "correct": 0,
                    "explanation": "bigger + than."
                }
            ],
            "mittel": [
                {
                    "id": "compk6l2u_mittel_1",
                    "category": "kurs_comp_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "comparison",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'This film is ___ than the book.' (interesting)",
                    "answers": [
                        "more interesting",
                        "interestinger",
                        "most interesting",
                        "more interestinger"
                    ],
                    "correct": 0,
                    "explanation": "Langes Adjektiv: more interesting + than."
                },
                {
                    "id": "compk6l2u_mittel_2",
                    "category": "kurs_comp_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "comparison",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "She is the oldest in her class.",
                        "She is the oldest at her class.",
                        "She is oldest in her class.",
                        "She is the older in her class."
                    ],
                    "correct": 0,
                    "explanation": "Superlativ mit the, Ort/Gruppe mit in."
                },
                {
                    "id": "compk6l2u_mittel_3",
                    "category": "kurs_comp_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "comparison",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was bedeutet 'Ben is not as fast as Tom.'?",
                    "answers": [
                        "Tom ist schneller",
                        "Ben ist schneller",
                        "Beide sind gleich",
                        "Keiner ist schnell"
                    ],
                    "correct": 0,
                    "explanation": "not as … as: Ben ist weniger schnell – Tom ist schneller."
                },
                {
                    "id": "compk6l2u_mittel_4",
                    "category": "kurs_comp_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "comparison",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'My bag is as heavy ___ your bag.'",
                    "answers": [
                        "as",
                        "than",
                        "like",
                        "that"
                    ],
                    "correct": 0,
                    "explanation": "as … as."
                }
            ],
            "schwer": [
                {
                    "id": "compk6l2u_schwer_1",
                    "category": "kurs_comp_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "comparison",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "This is the best day of my life.",
                        "This is the goodest day of my life.",
                        "This is the better day of my life.",
                        "This is best day of my life."
                    ],
                    "correct": 0,
                    "explanation": "good – better – best, mit the."
                },
                {
                    "id": "compk6l2u_schwer_2",
                    "category": "kurs_comp_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "comparison",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'Maths is ___ than English for me.' (difficult)",
                    "answers": [
                        "more difficult",
                        "difficulter",
                        "most difficult",
                        "the more difficult"
                    ],
                    "correct": 0,
                    "explanation": "Mehrsilbig: more difficult than."
                },
                {
                    "id": "compk6l2u_schwer_3",
                    "category": "kurs_comp_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "comparison",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz enthält einen Fehler?",
                    "answers": [
                        "He is more taller than me.",
                        "He is taller than me.",
                        "He is as tall as me.",
                        "He is the tallest."
                    ],
                    "correct": 0,
                    "explanation": "Nie more + -er: taller reicht."
                },
                {
                    "id": "compk6l2u_schwer_4",
                    "category": "kurs_comp_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "comparison",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie sagt man 'Mein Zimmer ist nicht so groß wie deins'?",
                    "answers": [
                        "My room isn't as big as yours.",
                        "My room isn't so big than yours.",
                        "My room isn't bigger as yours.",
                        "My room isn't as big than yours."
                    ],
                    "correct": 0,
                    "explanation": "not as … as."
                }
            ]
        },
        "test": [
            {
                "id": "compk6l2_test_1",
                "category": "kurs_comp_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "comparison",
                "difficulty": "mittel",
                "points": 10,
                "question": "'An elephant is ___ than a mouse.' (heavy)",
                "answers": [
                    "heavier",
                    "heavyer",
                    "more heavy",
                    "heaviest"
                ],
                "correct": 0,
                "explanation": "Konsonant + y: heavier + than."
            },
            {
                "id": "compk6l2_test_2",
                "category": "kurs_comp_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "comparison",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Lisa is the ___ girl in our class.' (tall)",
                "answers": [
                    "tallest",
                    "taller",
                    "most tall",
                    "more tall"
                ],
                "correct": 0,
                "explanation": "Superlativ: the tallest."
            },
            {
                "id": "compk6l2_test_3",
                "category": "kurs_comp_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "comparison",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Your answer is better than mine.",
                    "Your answer is gooder than mine.",
                    "Your answer is better then mine.",
                    "Your answer is more good than mine."
                ],
                "correct": 0,
                "explanation": "good – better + than."
            },
            {
                "id": "compk6l2_test_4",
                "category": "kurs_comp_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "comparison",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Tea is as hot ___ coffee.'",
                "answers": [
                    "as",
                    "than",
                    "like",
                    "so"
                ],
                "correct": 0,
                "explanation": "as … as."
            },
            {
                "id": "compk6l2_test_5",
                "category": "kurs_comp_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "comparison",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "It's the most beautiful park in the city.",
                    "It's the beautifullest park in the city.",
                    "It's the more beautiful park in the city.",
                    "It's most beautiful park in the city."
                ],
                "correct": 0,
                "explanation": "Langes Adjektiv: the most beautiful."
            },
            {
                "id": "compk6l2_test_6",
                "category": "kurs_comp_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "comparison",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was bedeutet 'as old as'?",
                "answers": [
                    "genauso alt wie",
                    "älter als jemand",
                    "am allerältesten",
                    "nicht so alt wie"
                ],
                "correct": 0,
                "explanation": "as … as drückt Gleichheit aus."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "advm_k6_l2",
        "kurs": "adverbs_k6",
        "order": 2,
        "icon": "🎯",
        "title": "Adverbs: Sonderfälle und Stellung",
        "kurz": "gently, fantastically, really good – und wohin das Adverb gehört",
        "erklaerung": {
            "intro": "Bei manchen Adjektiven ändert sich die Schreibung: <b>-le</b> wird zu <b>-ly</b> (gentle → gently), <b>-ic</b> wird zu <b>-ically</b> (fantastic → fantastically). Adjektive auf <b>-ly</b> wie <i>friendly</i> haben kein eigenes Adverb – man sagt <i>in a friendly way</i>. Adverbien können auch ein <b>Adjektiv</b> verstärken: <i>really good, extremely fast</i>. Ein Adverb of manner steht meist <b>nach dem Verb</b> oder <b>nach dem Objekt</b> – nie zwischen Verb und Objekt.",
            "merksatz": "-le → -ly, -ic → -ically, friendly → in a friendly way. Adverb nach Verb oder Objekt: She speaks English well.",
            "beispiele": [
                "🕊️ gentle → <b>gently</b>",
                "🎉 fantastic → <b>fantastically</b>",
                "🙂 friendly → in a friendly <b>way</b>",
                "📍 She speaks English <b>well</b>. – nicht: She speaks well English."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "advmk6l2u_leicht_1",
                    "category": "kurs_advm_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "adverbs",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie lautet das Adverb von 'gentle'?",
                    "answers": [
                        "gently",
                        "gentlely",
                        "gentley",
                        "gentle"
                    ],
                    "correct": 0,
                    "explanation": "-le wird zu -ly: gently."
                },
                {
                    "id": "advmk6l2u_leicht_2",
                    "category": "kurs_advm_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "adverbs",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie lautet das Adverb von 'fantastic'?",
                    "answers": [
                        "fantastically",
                        "fantasticly",
                        "fantastical",
                        "fantastic"
                    ],
                    "correct": 0,
                    "explanation": "-ic wird zu -ically."
                },
                {
                    "id": "advmk6l2u_leicht_3",
                    "category": "kurs_advm_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "adverbs",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was verstärkt 'really' in 'really good'?",
                    "answers": [
                        "Ein Adjektiv",
                        "Ein Nomen",
                        "Ein Pronomen",
                        "Einen Artikel"
                    ],
                    "correct": 0,
                    "explanation": "really verstärkt das Adjektiv good."
                },
                {
                    "id": "advmk6l2u_leicht_4",
                    "category": "kurs_advm_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "adverbs",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie lautet das Adverb von 'simple'?",
                    "answers": [
                        "simply",
                        "simplely",
                        "simpley",
                        "simplly"
                    ],
                    "correct": 0,
                    "explanation": "-le wird zu -ly: simply."
                }
            ],
            "mittel": [
                {
                    "id": "advmk6l2u_mittel_1",
                    "category": "kurs_advm_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "adverbs",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "She speaks English well.",
                        "She speaks well English.",
                        "She well speaks English.",
                        "She speaks English good."
                    ],
                    "correct": 0,
                    "explanation": "Das Adverb steht nach dem Objekt."
                },
                {
                    "id": "advmk6l2u_mittel_2",
                    "category": "kurs_advm_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "adverbs",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie sagt man 'freundlich' als Art und Weise?",
                    "answers": [
                        "in a friendly way",
                        "friendlily",
                        "friendlyly",
                        "a friendly way"
                    ],
                    "correct": 0,
                    "explanation": "friendly hat kein übliches -ly-Adverb – man sagt in a friendly way."
                },
                {
                    "id": "advmk6l2u_mittel_3",
                    "category": "kurs_advm_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "adverbs",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'He plays the piano ___.' (terrible)",
                    "answers": [
                        "terribly",
                        "terrible",
                        "terribley",
                        "terriblely"
                    ],
                    "correct": 0,
                    "explanation": "-le → -ly: terribly."
                },
                {
                    "id": "advmk6l2u_mittel_4",
                    "category": "kurs_advm_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "adverbs",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Wort ist ein Adverb?",
                    "answers": [
                        "extremely",
                        "extreme",
                        "excellent",
                        "easy"
                    ],
                    "correct": 0,
                    "explanation": "extremely endet auf -ly und beschreibt, wie sehr."
                }
            ],
            "schwer": [
                {
                    "id": "advmk6l2u_schwer_1",
                    "category": "kurs_advm_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "adverbs",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "He opened the door quietly.",
                        "He opened quietly the door.",
                        "He quietly the door opened.",
                        "He opened the door quiet."
                    ],
                    "correct": 0,
                    "explanation": "Adverb nach dem Objekt."
                },
                {
                    "id": "advmk6l2u_schwer_2",
                    "category": "kurs_advm_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "adverbs",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was bedeutet 'hardly'?",
                    "answers": [
                        "kaum",
                        "hart",
                        "schwer",
                        "oft"
                    ],
                    "correct": 0,
                    "explanation": "hardly heißt 'kaum' – nicht das Adverb von hard (das bleibt hard)."
                },
                {
                    "id": "advmk6l2u_schwer_3",
                    "category": "kurs_advm_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "adverbs",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'The test was ___ easy.' (surprising)",
                    "answers": [
                        "surprisingly",
                        "surprising",
                        "surprisedly",
                        "surprisingely"
                    ],
                    "correct": 0,
                    "explanation": "Das Adverb verstärkt das Adjektiv easy."
                },
                {
                    "id": "advmk6l2u_schwer_4",
                    "category": "kurs_advm_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "adverbs",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz enthält einen Fehler?",
                    "answers": [
                        "She smiled friendlily.",
                        "She smiled in a friendly way.",
                        "She smiled happily.",
                        "She smiled warmly."
                    ],
                    "correct": 0,
                    "explanation": "friendly hat kein übliches Adverb – 'friendlily' ist unüblich."
                }
            ]
        },
        "test": [
            {
                "id": "advmk6l2_test_1",
                "category": "kurs_advm_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "adverbs",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie lautet das Adverb von 'comfortable'?",
                "answers": [
                    "comfortably",
                    "comfortablely",
                    "comfortabley",
                    "comfortable"
                ],
                "correct": 0,
                "explanation": "-le → -ly."
            },
            {
                "id": "advmk6l2_test_2",
                "category": "kurs_advm_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "adverbs",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie lautet das Adverb von 'dramatic'?",
                "answers": [
                    "dramatically",
                    "dramaticly",
                    "dramaticaly",
                    "dramatic"
                ],
                "correct": 0,
                "explanation": "-ic → -ically."
            },
            {
                "id": "advmk6l2_test_3",
                "category": "kurs_advm_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "adverbs",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "They did the job quickly.",
                    "They did quickly the job.",
                    "They quickly did the job quick.",
                    "They did the job quick."
                ],
                "correct": 0,
                "explanation": "Adverb nach dem Objekt."
            },
            {
                "id": "advmk6l2_test_4",
                "category": "kurs_advm_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "adverbs",
                "difficulty": "mittel",
                "points": 10,
                "question": "'It was ___ cold.' (terrible)",
                "answers": [
                    "terribly",
                    "terrible",
                    "terribley",
                    "terrib"
                ],
                "correct": 0,
                "explanation": "terribly verstärkt das Adjektiv cold."
            },
            {
                "id": "advmk6l2_test_5",
                "category": "kurs_advm_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "adverbs",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie sagt man 'auf freundliche Art'?",
                "answers": [
                    "in a friendly way",
                    "on a friendly way",
                    "friendlyly",
                    "in friendlily"
                ],
                "correct": 0,
                "explanation": "in a friendly way."
            },
            {
                "id": "advmk6l2_test_6",
                "category": "kurs_advm_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "adverbs",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was bedeutet 'He hardly works.'?",
                "answers": [
                    "Er arbeitet kaum.",
                    "Er arbeitet hart.",
                    "Er arbeitet gern.",
                    "Er arbeitet oft."
                ],
                "correct": 0,
                "explanation": "hardly = kaum. 'hart arbeiten' wäre works hard."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "pron_k6_l2",
        "kurs": "pronouns_k6",
        "order": 2,
        "icon": "🪞",
        "title": "Reflexive pronouns und each other",
        "kurz": "myself, yourself … und einander",
        "erklaerung": {
            "intro": "<b>Reflexive pronouns</b> zeigen, dass jemand etwas mit sich selbst tut: I hurt <b>myself</b>. Die Formen: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves. Tun zwei Personen etwas gegenseitig, sagt man <b>each other</b> (einander): They help <b>each other</b>. Achtung: <b>its</b> (sein/ihr, Besitz) hat keinen Apostroph – <b>it's</b> heißt it is.",
            "merksatz": "Einzahl: -self (myself, herself). Mehrzahl: -selves (ourselves, themselves). Gegenseitig: each other. its = Besitz, it's = it is.",
            "beispiele": [
                "🩹 I cut <b>myself</b>.",
                "🎨 She painted it <b>herself</b>.",
                "🤝 Tom and Lea help <b>each other</b>.",
                "🐶 The dog wags <b>its</b> tail. – <b>It's</b> happy."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "pronk6l2u_leicht_1",
                    "category": "kurs_pron_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "pronouns",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie lautet das Reflexivpronomen zu 'I'?",
                    "answers": [
                        "myself",
                        "meself",
                        "mineself",
                        "Iself"
                    ],
                    "correct": 0,
                    "explanation": "I → myself."
                },
                {
                    "id": "pronk6l2u_leicht_2",
                    "category": "kurs_pron_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "pronouns",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie lautet das Reflexivpronomen zu 'she'?",
                    "answers": [
                        "herself",
                        "sheself",
                        "hisself",
                        "sherself"
                    ],
                    "correct": 0,
                    "explanation": "she → herself."
                },
                {
                    "id": "pronk6l2u_leicht_3",
                    "category": "kurs_pron_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "pronouns",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie lautet das Reflexivpronomen zu 'we'?",
                    "answers": [
                        "ourselves",
                        "ourself",
                        "weselves",
                        "usselves"
                    ],
                    "correct": 0,
                    "explanation": "Mehrzahl mit -selves: ourselves."
                },
                {
                    "id": "pronk6l2u_leicht_4",
                    "category": "kurs_pron_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "pronouns",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was bedeutet 'each other'?",
                    "answers": [
                        "einander",
                        "jeder",
                        "selbst",
                        "zusammen"
                    ],
                    "correct": 0,
                    "explanation": "each other = einander, gegenseitig."
                }
            ],
            "mittel": [
                {
                    "id": "pronk6l2u_mittel_1",
                    "category": "kurs_pron_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "pronouns",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'Tom hurt ___ in the game.'",
                    "answers": [
                        "himself",
                        "hisself",
                        "heself",
                        "himselves"
                    ],
                    "correct": 0,
                    "explanation": "he → himself."
                },
                {
                    "id": "pronk6l2u_mittel_2",
                    "category": "kurs_pron_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "pronouns",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'They looked at ___ and laughed.' (einander)",
                    "answers": [
                        "each other",
                        "themself",
                        "theirselves",
                        "itself"
                    ],
                    "correct": 0,
                    "explanation": "Gegenseitig: each other."
                },
                {
                    "id": "pronk6l2u_mittel_3",
                    "category": "kurs_pron_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "pronouns",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'The cat washes ___ face.'",
                    "answers": [
                        "its",
                        "it's",
                        "it",
                        "its'"
                    ],
                    "correct": 0,
                    "explanation": "its = Besitz (ihr Gesicht). it's = it is."
                },
                {
                    "id": "pronk6l2u_mittel_4",
                    "category": "kurs_pron_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "pronouns",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie lautet das Reflexivpronomen zu 'they'?",
                    "answers": [
                        "themselves",
                        "themself",
                        "theirselves",
                        "theyselves"
                    ],
                    "correct": 0,
                    "explanation": "they → themselves."
                }
            ],
            "schwer": [
                {
                    "id": "pronk6l2u_schwer_1",
                    "category": "kurs_pron_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "pronouns",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "We made the cake ourselves.",
                        "We made the cake ourself.",
                        "We made the cake usselves.",
                        "We made the cake weselves."
                    ],
                    "correct": 0,
                    "explanation": "we → ourselves."
                },
                {
                    "id": "pronk6l2u_schwer_2",
                    "category": "kurs_pron_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "pronouns",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'themselves' oder 'each other' – was ist der Unterschied?",
                    "answers": [
                        "selbst oder gegenseitig",
                        "Es gibt keinen",
                        "Einzahl oder Mehrzahl",
                        "Zeit oder Ort"
                    ],
                    "correct": 0,
                    "explanation": "themselves: jeder sich selbst. each other: einer den anderen."
                },
                {
                    "id": "pronk6l2u_schwer_3",
                    "category": "kurs_pron_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "pronouns",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'___ raining again.'",
                    "answers": [
                        "It's",
                        "Its",
                        "It",
                        "Its'"
                    ],
                    "correct": 0,
                    "explanation": "It's = It is."
                },
                {
                    "id": "pronk6l2u_schwer_4",
                    "category": "kurs_pron_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "englisch",
                    "topic": "pronouns",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'Did you enjoy ___, kids?' (Mehrzahl)",
                    "answers": [
                        "yourselves",
                        "yourself",
                        "yourselfs",
                        "youselves"
                    ],
                    "correct": 0,
                    "explanation": "Mehrere Personen: yourselves."
                }
            ]
        },
        "test": [
            {
                "id": "pronk6l2_test_1",
                "category": "kurs_pron_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "pronouns",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie lautet das Reflexivpronomen zu 'he'?",
                "answers": [
                    "himself",
                    "hisself",
                    "heself",
                    "hemself"
                ],
                "correct": 0,
                "explanation": "he → himself."
            },
            {
                "id": "pronk6l2_test_2",
                "category": "kurs_pron_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "pronouns",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie lautet das Reflexivpronomen zu 'it'?",
                "answers": [
                    "itself",
                    "itsself",
                    "it'sself",
                    "itselves"
                ],
                "correct": 0,
                "explanation": "it → itself."
            },
            {
                "id": "pronk6l2_test_3",
                "category": "kurs_pron_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "pronouns",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Anna and Max write to ___ every day.' (einander)",
                "answers": [
                    "each other",
                    "themselves",
                    "ourselves",
                    "itself"
                ],
                "correct": 0,
                "explanation": "Gegenseitig schreiben: each other."
            },
            {
                "id": "pronk6l2_test_4",
                "category": "kurs_pron_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "pronouns",
                "difficulty": "mittel",
                "points": 10,
                "question": "'The dog is chasing ___ tail.'",
                "answers": [
                    "its",
                    "it's",
                    "it",
                    "his'"
                ],
                "correct": 0,
                "explanation": "its = Besitz."
            },
            {
                "id": "pronk6l2_test_5",
                "category": "kurs_pron_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "pronouns",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "I taught myself to swim.",
                    "I taught me to swim.",
                    "I taught mineself to swim.",
                    "I taught myselves to swim."
                ],
                "correct": 0,
                "explanation": "I → myself."
            },
            {
                "id": "pronk6l2_test_6",
                "category": "kurs_pron_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "englisch",
                "topic": "pronouns",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie lautet das Reflexivpronomen zu 'you' (eine Person)?",
                "answers": [
                    "yourself",
                    "yourselves",
                    "youself",
                    "yourselfs"
                ],
                "correct": 0,
                "explanation": "Eine Person: yourself."
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
