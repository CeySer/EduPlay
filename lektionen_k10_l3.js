// Klasse 10 – dritte Lektion Bewerbung: Das Vorstellungsgespräch.
// Hängt nur Lektionen an. topic = Thema der Wissensfragen. Wird NACH lektionen.js geladen.
(function () {
    const extraLektionen = [
    {
        "id": "bewerbung_k10_l3",
        "kurs": "bewerbung_k10",
        "order": 3,
        "icon": "🤝",
        "title": "Das Vorstellungsgespräch",
        "kurz": "Vorbereiten, antworten, auftreten",
        "erklaerung": {
            "intro": "Nach der Bewerbung kommt oft die <b>Einladung zum Gespräch</b>. Vorher informierst du dich über den <b>Betrieb</b> und überlegst, <b>warum</b> du genau dort lernen willst. Typische Fragen: „Erzählen Sie etwas über sich“, „Warum dieser Beruf?“, „Was sind Ihre Stärken?“. Antworte <b>ehrlich und mit Beispielen</b>. Sei pünktlich, freundlich und aufmerksam. Am Ende darfst du <b>eigene Fragen</b> stellen.",
            "merksatz": "Vorbereiten – antworten – auftreten. Eine Stärke immer mit einem Beispiel belegen. Eigene Fragen zeigen Interesse.",
            "beispiele": [
                "🔎 Vorher: Website des Betriebs lesen, Weg und Zeit planen.",
                "💬 „Ich bin zuverlässig – im Praktikum habe ich jeden Morgen den Laden aufgeschlossen.“",
                "🙂 Pünktlich, freundlich grüßen, Blickkontakt, Handy aus.",
                "❓ Eigene Frage: „Wie läuft die Berufsschule bei Ihnen ab?“"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "bewerbungk10l3u_leicht_1",
                    "category": "kurs_bewerbung_k10_l3",
                    "area": "schule",
                    "grade": 10,
                    "subject": "deutsch",
                    "topic": "bewerbung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was machst du vor dem Gespräch?",
                    "answers": [
                        "Infos über den Betrieb sammeln",
                        "Gar nichts, einfach hingehen",
                        "Nur ein neues Profilbild machen",
                        "Die Einladung gleich löschen"
                    ],
                    "correct": 0,
                    "explanation": "Wer den Betrieb kennt, kann besser begründen, warum er dort lernen will."
                },
                {
                    "id": "bewerbungk10l3u_leicht_2",
                    "category": "kurs_bewerbung_k10_l3",
                    "area": "schule",
                    "grade": 10,
                    "subject": "deutsch",
                    "topic": "bewerbung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wann solltest du ankommen?",
                    "answers": [
                        "Einige Minuten vor dem Termin",
                        "Eine Stunde vor dem Termin",
                        "Eine halbe Stunde zu spät",
                        "Irgendwann am selben Tag"
                    ],
                    "correct": 0,
                    "explanation": "Pünktlich sein heißt: lieber wenige Minuten früher da sein."
                },
                {
                    "id": "bewerbungk10l3u_leicht_3",
                    "category": "kurs_bewerbung_k10_l3",
                    "area": "schule",
                    "grade": 10,
                    "subject": "deutsch",
                    "topic": "bewerbung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was passiert mit deinem Handy im Gespräch?",
                    "answers": [
                        "Es ist aus oder lautlos",
                        "Es liegt laut auf dem Tisch",
                        "Ich lese nebenbei Chats",
                        "Ich filme das Gespräch"
                    ],
                    "correct": 0,
                    "explanation": "Ein klingelndes Handy stört und wirkt unhöflich."
                },
                {
                    "id": "bewerbungk10l3u_leicht_4",
                    "category": "kurs_bewerbung_k10_l3",
                    "area": "schule",
                    "grade": 10,
                    "subject": "deutsch",
                    "topic": "bewerbung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie begrüßt du dein Gegenüber?",
                    "answers": [
                        "Freundlich mit Blickkontakt",
                        "Ohne aufzuschauen",
                        "Mit „Na, alles klar?“",
                        "Gar nicht, sofort hinsetzen"
                    ],
                    "correct": 0,
                    "explanation": "Ein freundlicher, höflicher Start macht einen guten ersten Eindruck."
                }
            ],
            "mittel": [
                {
                    "id": "bewerbungk10l3u_mittel_1",
                    "category": "kurs_bewerbung_k10_l3",
                    "area": "schule",
                    "grade": 10,
                    "subject": "deutsch",
                    "topic": "bewerbung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "„Was sind Ihre Stärken?“ Welche Antwort ist am besten?",
                    "answers": [
                        "Zuverlässig – im Praktikum nie zu spät.",
                        "Ich bin eigentlich in allem richtig gut.",
                        "Keine Ahnung, das müssen Sie sehen.",
                        "Ich habe gar keine echten Stärken."
                    ],
                    "correct": 0,
                    "explanation": "Eine Stärke wird glaubwürdig, wenn du ein Beispiel nennst."
                },
                {
                    "id": "bewerbungk10l3u_mittel_2",
                    "category": "kurs_bewerbung_k10_l3",
                    "area": "schule",
                    "grade": 10,
                    "subject": "deutsch",
                    "topic": "bewerbung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Tischlerei: „Warum bei uns?“ – Was passt am besten?",
                    "answers": [
                        "Mich reizt die Arbeit mit Holz.",
                        "Weil ich sonst nichts gefunden habe.",
                        "Weil meine Mutter es so will.",
                        "Irgendwas muss ich ja machen."
                    ],
                    "correct": 0,
                    "explanation": "Ein Bezug zum Betrieb und zum Beruf zeigt echtes Interesse."
                },
                {
                    "id": "bewerbungk10l3u_mittel_3",
                    "category": "kurs_bewerbung_k10_l3",
                    "area": "schule",
                    "grade": 10,
                    "subject": "deutsch",
                    "topic": "bewerbung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche eigene Frage passt am Ende am besten?",
                    "answers": [
                        "Wie läuft die Berufsschule ab?",
                        "Was macht Ihre Firma eigentlich?",
                        "Muss ich wirklich jeden Tag kommen?",
                        "Kann ich früher Feierabend machen?"
                    ],
                    "correct": 0,
                    "explanation": "Fragen zur Ausbildung zeigen Interesse an der Sache."
                },
                {
                    "id": "bewerbungk10l3u_mittel_4",
                    "category": "kurs_bewerbung_k10_l3",
                    "area": "schule",
                    "grade": 10,
                    "subject": "deutsch",
                    "topic": "bewerbung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was nimmst du zum Gespräch mit?",
                    "answers": [
                        "Bewerbung und Zeugnisse",
                        "Nur das Handy und Kopfhörer",
                        "Einen Snack für das Gespräch",
                        "Gar nichts, alles ist bekannt"
                    ],
                    "correct": 0,
                    "explanation": "Mit Unterlagen kannst du Rückfragen sofort beantworten."
                }
            ],
            "schwer": [
                {
                    "id": "bewerbungk10l3u_schwer_1",
                    "category": "kurs_bewerbung_k10_l3",
                    "area": "schule",
                    "grade": 10,
                    "subject": "deutsch",
                    "topic": "bewerbung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "„Was ist Ihre Schwäche?“ Welche Antwort ist gut?",
                    "answers": [
                        "Ungeduldig – aber ich arbeite daran.",
                        "Ich habe wirklich gar keine Schwächen.",
                        "Ich komme meistens zu spät.",
                        "Ich arbeite eigentlich nicht gern."
                    ],
                    "correct": 0,
                    "explanation": "Ehrlich bleiben und zeigen, wie du an der Schwäche arbeitest."
                },
                {
                    "id": "bewerbungk10l3u_schwer_2",
                    "category": "kurs_bewerbung_k10_l3",
                    "area": "schule",
                    "grade": 10,
                    "subject": "deutsch",
                    "topic": "bewerbung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "„Erzählen Sie etwas über sich.“ Was gehört hinein?",
                    "answers": [
                        "Schule, Praktikum, Interesse am Beruf",
                        "Meine ganze Kindheit Jahr für Jahr",
                        "Nur meine Lieblingsserien und Spiele",
                        "Probleme mit meinen alten Lehrern"
                    ],
                    "correct": 0,
                    "explanation": "Kurz und passend zum Beruf: Schule, Erfahrungen, Interesse."
                },
                {
                    "id": "bewerbungk10l3u_schwer_3",
                    "category": "kurs_bewerbung_k10_l3",
                    "area": "schule",
                    "grade": 10,
                    "subject": "deutsch",
                    "topic": "bewerbung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Das Gespräch ist per Video. Was ist wichtig?",
                    "answers": [
                        "Ruhiger Ort und Technik vorher testen",
                        "Im Bus mit vielen Leuten teilnehmen",
                        "Kamera aus, nur der Ton zählt",
                        "Nebenbei ein Spiel laufen lassen"
                    ],
                    "correct": 0,
                    "explanation": "Auch online gilt: vorbereitet, ungestört, gut sichtbar."
                },
                {
                    "id": "bewerbungk10l3u_schwer_4",
                    "category": "kurs_bewerbung_k10_l3",
                    "area": "schule",
                    "grade": 10,
                    "subject": "deutsch",
                    "topic": "bewerbung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Du weißt eine Antwort nicht. Was tust du?",
                    "answers": [
                        "Kurz nachdenken, sonst ehrlich sagen",
                        "Einfach eine Antwort erfinden",
                        "Das Thema schnell wechseln",
                        "Schweigen, bis man weiterfragt"
                    ],
                    "correct": 0,
                    "explanation": "Ehrlichkeit wirkt besser als eine erfundene Antwort."
                }
            ]
        },
        "test": [
            {
                "id": "bewerbungk10l3_test_1",
                "category": "kurs_bewerbung_k10_l3",
                "area": "schule",
                "grade": 10,
                "subject": "deutsch",
                "topic": "bewerbung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Womit belegst du eine Stärke im Gespräch?",
                "answers": [
                    "Mit einem konkreten Beispiel",
                    "Mit möglichst vielen Superlativen",
                    "Mit einem lustigen Witz",
                    "Mit einem Foto von mir"
                ],
                "correct": 0,
                "explanation": "Stärke + Beispiel = glaubwürdig."
            },
            {
                "id": "bewerbungk10l3_test_2",
                "category": "kurs_bewerbung_k10_l3",
                "area": "schule",
                "grade": 10,
                "subject": "deutsch",
                "topic": "bewerbung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie kleidest du dich für das Gespräch?",
                "answers": [
                    "Gepflegt, passend zum Beruf",
                    "Wie zum Sport am Nachmittag",
                    "So auffällig wie möglich",
                    "Egal, Kleidung zählt nie"
                ],
                "correct": 0,
                "explanation": "Gepflegt und dem Betrieb angemessen."
            },
            {
                "id": "bewerbungk10l3_test_3",
                "category": "kurs_bewerbung_k10_l3",
                "area": "schule",
                "grade": 10,
                "subject": "deutsch",
                "topic": "bewerbung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was zeigt Interesse am Betrieb?",
                "answers": [
                    "Eigene Fragen zur Ausbildung",
                    "Häufiger Blick auf die Uhr",
                    "Nur kurze Ja-Nein-Antworten",
                    "Nur über meine Freizeit reden"
                ],
                "correct": 0,
                "explanation": "Wer nachfragt, zeigt, dass ihn die Ausbildung interessiert."
            },
            {
                "id": "bewerbungk10l3_test_4",
                "category": "kurs_bewerbung_k10_l3",
                "area": "schule",
                "grade": 10,
                "subject": "deutsch",
                "topic": "bewerbung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Du merkst, dass du zu spät kommst. Was tust du?",
                "answers": [
                    "Vorher anrufen, Bescheid sagen",
                    "Gar nicht mehr hingehen",
                    "Ohne ein Wort später erscheinen",
                    "Eine Ausrede erfinden"
                ],
                "correct": 0,
                "explanation": "Rechtzeitig Bescheid geben ist höflich und zeigt Verantwortung."
            },
            {
                "id": "bewerbungk10l3_test_5",
                "category": "kurs_bewerbung_k10_l3",
                "area": "schule",
                "grade": 10,
                "subject": "deutsch",
                "topic": "bewerbung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Haltung wirkt im Gespräch gut?",
                "answers": [
                    "Aufrecht sitzen, zuhören",
                    "Auf dem Stuhl lümmeln",
                    "Arme verschränkt, wegsehen",
                    "Ständig dazwischenreden"
                ],
                "correct": 0,
                "explanation": "Körpersprache zeigt Aufmerksamkeit und Respekt."
            },
            {
                "id": "bewerbungk10l3_test_6",
                "category": "kurs_bewerbung_k10_l3",
                "area": "schule",
                "grade": 10,
                "subject": "deutsch",
                "topic": "bewerbung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ist ein guter Abschluss des Gesprächs?",
                "answers": [
                    "Für das Gespräch bedanken",
                    "Einfach wortlos gehen",
                    "Schlecht über andere Firmen reden",
                    "Sofort eine Zusage fordern"
                ],
                "correct": 0,
                "explanation": "Ein freundlicher Dank rundet den Eindruck ab."
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
