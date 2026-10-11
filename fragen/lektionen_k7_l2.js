// Klasse 7 – zweite Lektionen: Mathe (Zuordnungen), Deutsch (Aktiv/Passiv, Nebensatzarten,
// Satzglieder) und Englisch (Prepositions, Future, Present Perfect/Simple Past).
// Hängt nur Lektionen an. topic = Thema der Wissensfragen. Wird NACH lektionen.js geladen.
(function () {
    const extraLektionen = [
    {
        "id": "zuo_k7_l2",
        "kurs": "zuordnungen_k7",
        "order": 2,
        "icon": "🧮",
        "title": "Dreisatz, Tabellen und Graphen",
        "kurz": "Schritt für Schritt über die Einheit rechnen",
        "erklaerung": {
            "intro": "Beim <b>Dreisatz</b> rechnest du in drei Schritten: 1. Was weißt du? 2. Rechne auf <b>eins</b> herunter. 3. Rechne auf die gesuchte Menge hoch. Bei <b>proportionalen</b> Zuordnungen teilst und multiplizierst du gleich, bei <b>antiproportionalen</b> genau umgekehrt. Im Koordinatensystem ist eine proportionale Zuordnung eine <b>Gerade durch den Ursprung</b>.",
            "merksatz": "Proportional: auf 1 teilen, dann malnehmen. Antiproportional: auf 1 malnehmen, dann teilen. Proportional im Graphen: Gerade durch (0|0).",
            "beispiele": [
                "🛒 5 kg kosten 10 €. → 1 kg kostet 2 €. → 3 kg kosten 6 €.",
                "👷 4 Helfer brauchen 6 h. → 1 Helfer braucht 24 h. → 3 Helfer brauchen 8 h.",
                "📈 Preis pro kg = 2 €: Der Graph ist eine Gerade durch den Punkt (0|0).",
                "📋 Proportional: Tabelle mit gleichem Quotienten y : x. Antiproportional: gleiches Produkt x · y."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "zuok7l2u_leicht_1",
                    "category": "kurs_zuo_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zuordnungen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "6 Äpfel kosten 3 €. Was kostet 1 Apfel?",
                    "answers": [
                        "0,50 €",
                        "2,00 €",
                        "0,30 €",
                        "1,50 €"
                    ],
                    "correct": 0,
                    "explanation": "3 € : 6 = 0,50 €. Das ist der Schritt auf eins."
                },
                {
                    "id": "zuok7l2u_leicht_2",
                    "category": "kurs_zuo_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zuordnungen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ist der mittlere Schritt beim Dreisatz?",
                    "answers": [
                        "Auf eins rechnen",
                        "Alles addieren",
                        "Die Zahlen tauschen",
                        "Das Ergebnis raten"
                    ],
                    "correct": 0,
                    "explanation": "Nach dem Aufschreiben rechnet man auf eine Einheit herunter."
                },
                {
                    "id": "zuok7l2u_leicht_3",
                    "category": "kurs_zuo_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zuordnungen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie sieht der Graph einer proportionalen Zuordnung aus?",
                    "answers": [
                        "Gerade durch (0|0)",
                        "Gerade ohne (0|0)",
                        "Ein Kreis",
                        "Eine Treppe"
                    ],
                    "correct": 0,
                    "explanation": "Proportionale Zuordnungen ergeben eine Ursprungsgerade."
                },
                {
                    "id": "zuok7l2u_leicht_4",
                    "category": "kurs_zuo_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zuordnungen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "1 Heft kostet 2 €. Was kosten 7 Hefte?",
                    "answers": [
                        "14 €",
                        "9 €",
                        "12 €",
                        "3,50 €"
                    ],
                    "correct": 0,
                    "explanation": "7 · 2 € = 14 €."
                }
            ],
            "mittel": [
                {
                    "id": "zuok7l2u_mittel_1",
                    "category": "kurs_zuo_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zuordnungen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "8 Liter kosten 12 €. Was kosten 5 Liter?",
                    "answers": [
                        "7,50 €",
                        "6,00 €",
                        "9,60 €",
                        "8,50 €"
                    ],
                    "correct": 0,
                    "explanation": "12 € : 8 = 1,50 € pro Liter. 5 · 1,50 € = 7,50 €."
                },
                {
                    "id": "zuok7l2u_mittel_2",
                    "category": "kurs_zuo_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zuordnungen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "3 Pumpen leeren ein Becken in 8 h. Wie lange brauchen 6?",
                    "answers": [
                        "4 h",
                        "16 h",
                        "6 h",
                        "2 h"
                    ],
                    "correct": 0,
                    "explanation": "Antiproportional: doppelt so viele Pumpen, halbe Zeit."
                },
                {
                    "id": "zuok7l2u_mittel_3",
                    "category": "kurs_zuo_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zuordnungen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Tabelle proportional: x = 2 → y = 5. Was ist y bei x = 6?",
                    "answers": [
                        "15",
                        "9",
                        "10",
                        "12"
                    ],
                    "correct": 0,
                    "explanation": "Faktor 2,5: 6 · 2,5 = 15."
                },
                {
                    "id": "zuok7l2u_mittel_4",
                    "category": "kurs_zuo_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zuordnungen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Tabelle antiproportional: x = 2 → y = 12. Was ist y bei x = 3?",
                    "answers": [
                        "8",
                        "18",
                        "6",
                        "9"
                    ],
                    "correct": 0,
                    "explanation": "Produkt 2 · 12 = 24. 24 : 3 = 8."
                }
            ],
            "schwer": [
                {
                    "id": "zuok7l2u_schwer_1",
                    "category": "kurs_zuo_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zuordnungen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "5 Helfer brauchen 12 Tage. Wie lange brauchen 4 Helfer?",
                    "answers": [
                        "15 Tage",
                        "9,6 Tage",
                        "10 Tage",
                        "16 Tage"
                    ],
                    "correct": 0,
                    "explanation": "1 Helfer: 60 Tage. 60 : 4 = 15 Tage."
                },
                {
                    "id": "zuok7l2u_schwer_2",
                    "category": "kurs_zuo_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zuordnungen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ist (1|3), (2|6), (4|12) proportional?",
                    "answers": [
                        "Ja, Faktor 3",
                        "Nein, nicht linear",
                        "Ja, Faktor 2",
                        "Nein, antiproportional"
                    ],
                    "correct": 0,
                    "explanation": "y : x = 3 in jedem Paar – proportional."
                },
                {
                    "id": "zuok7l2u_schwer_3",
                    "category": "kurs_zuo_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zuordnungen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ist (2|30), (3|20), (6|10) proportional?",
                    "answers": [
                        "Nein, antiproportional",
                        "Ja, proportional mit 15",
                        "Ja, proportional mit 10",
                        "Nein, weder noch"
                    ],
                    "correct": 0,
                    "explanation": "x · y = 60 in jedem Paar – antiproportional."
                },
                {
                    "id": "zuok7l2u_schwer_4",
                    "category": "kurs_zuo_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "mathe",
                    "topic": "zuordnungen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Auto braucht 6 l auf 100 km. Wie viel auf 250 km?",
                    "answers": [
                        "15 l",
                        "12 l",
                        "18 l",
                        "25 l"
                    ],
                    "correct": 0,
                    "explanation": "6 l : 100 = 0,06 l pro km. 250 · 0,06 l = 15 l."
                }
            ]
        },
        "test": [
            {
                "id": "zuok7l2_test_1",
                "category": "kurs_zuo_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zuordnungen",
                "difficulty": "mittel",
                "points": 10,
                "question": "4 Brote kosten 10 €. Was kosten 6 Brote?",
                "answers": [
                    "15 €",
                    "12 €",
                    "16 €",
                    "14 €"
                ],
                "correct": 0,
                "explanation": "10 € : 4 = 2,50 €. 6 · 2,50 € = 15 €."
            },
            {
                "id": "zuok7l2_test_2",
                "category": "kurs_zuo_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zuordnungen",
                "difficulty": "mittel",
                "points": 10,
                "question": "2 Bagger brauchen 9 Tage. Wie lange brauchen 3 Bagger?",
                "answers": [
                    "6 Tage",
                    "13,5 Tage",
                    "4,5 Tage",
                    "12 Tage"
                ],
                "correct": 0,
                "explanation": "1 Bagger: 18 Tage. 18 : 3 = 6 Tage."
            },
            {
                "id": "zuok7l2_test_3",
                "category": "kurs_zuo_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zuordnungen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was bleibt bei einer proportionalen Tabelle gleich?",
                "answers": [
                    "Der Quotient y : x",
                    "Das Produkt x · y",
                    "Die Summe x + y",
                    "Die Differenz y − x"
                ],
                "correct": 0,
                "explanation": "Bei proportionalen Zuordnungen ist y : x immer gleich."
            },
            {
                "id": "zuok7l2_test_4",
                "category": "kurs_zuo_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zuordnungen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Graph gehört zu einer proportionalen Zuordnung?",
                "answers": [
                    "Gerade durch (0|0)",
                    "Fallende Kurve",
                    "Waagerechte Linie",
                    "Gerade ohne (0|0)"
                ],
                "correct": 0,
                "explanation": "Nur eine Gerade durch den Ursprung ist proportional."
            },
            {
                "id": "zuok7l2_test_5",
                "category": "kurs_zuo_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zuordnungen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Vorrat reicht 6 Personen 10 Tage. Wie lange für 5?",
                "answers": [
                    "12 Tage",
                    "8 Tage",
                    "11 Tage",
                    "15 Tage"
                ],
                "correct": 0,
                "explanation": "6 · 10 = 60 Personentage. 60 : 5 = 12 Tage."
            },
            {
                "id": "zuok7l2_test_6",
                "category": "kurs_zuo_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "mathe",
                "topic": "zuordnungen",
                "difficulty": "mittel",
                "points": 10,
                "question": "3 m Kabel wiegen 450 g. Wie viel wiegen 7 m?",
                "answers": [
                    "1050 g",
                    "900 g",
                    "1350 g",
                    "1200 g"
                ],
                "correct": 0,
                "explanation": "450 g : 3 = 150 g pro Meter. 7 · 150 g = 1050 g."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "akpa_k7_l2",
        "kurs": "aktiv_passiv_k7",
        "order": 2,
        "icon": "⏳",
        "title": "Passiv in allen Zeitformen",
        "kurz": "wird, wurde, ist … worden, mit Modalverb",
        "erklaerung": {
            "intro": "Das Passiv gibt es in allen Zeitformen. Es ändert sich immer nur <b>werden</b>, das Partizip II bleibt: <b>Präsens</b> wird gebaut, <b>Präteritum</b> wurde gebaut, <b>Perfekt</b> ist gebaut <b>worden</b>, <b>Plusquamperfekt</b> war gebaut worden, <b>Futur</b> wird gebaut werden. Mit Modalverb: muss gebaut <b>werden</b>.",
            "merksatz": "Im Passiv-Perfekt heißt es 'worden', nicht 'geworden': Das Haus ist gebaut worden. Mit Modalverb: Modalverb + Partizip II + werden.",
            "beispiele": [
                "🏗️ Präsens: Die Brücke <b>wird gebaut</b>.",
                "📜 Präteritum: Die Brücke <b>wurde gebaut</b>.",
                "✅ Perfekt: Die Brücke <b>ist gebaut worden</b>.",
                "🔧 Mit Modalverb: Die Brücke <b>muss repariert werden</b>."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "akpak7l2u_leicht_1",
                    "category": "kurs_akpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "aktiv_passiv",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Form ist Präteritum Passiv?",
                    "answers": [
                        "Es wurde gebaut.",
                        "Es wird gebaut.",
                        "Es ist gebaut worden.",
                        "Es baut."
                    ],
                    "correct": 0,
                    "explanation": "Präteritum Passiv: wurde + Partizip II."
                },
                {
                    "id": "akpak7l2u_leicht_2",
                    "category": "kurs_akpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "aktiv_passiv",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Wort fehlt? 'Das Haus ist gebaut ___.'",
                    "answers": [
                        "worden",
                        "geworden",
                        "werden",
                        "wurden"
                    ],
                    "correct": 0,
                    "explanation": "Im Passiv-Perfekt steht 'worden'."
                },
                {
                    "id": "akpak7l2u_leicht_3",
                    "category": "kurs_akpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "aktiv_passiv",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Zeitform? 'Der Kuchen wird gebacken.'",
                    "answers": [
                        "Präsens",
                        "Präteritum",
                        "Perfekt",
                        "Futur"
                    ],
                    "correct": 0,
                    "explanation": "wird + Partizip II = Präsens Passiv."
                },
                {
                    "id": "akpak7l2u_leicht_4",
                    "category": "kurs_akpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "aktiv_passiv",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ändert sich im Passiv von Zeitform zu Zeitform?",
                    "answers": [
                        "die Form von werden",
                        "das Partizip II",
                        "die Form des Subjekts",
                        "die Stellung des Kommas"
                    ],
                    "correct": 0,
                    "explanation": "Das Partizip bleibt, nur werden wird gebeugt."
                }
            ],
            "mittel": [
                {
                    "id": "akpak7l2u_mittel_1",
                    "category": "kurs_akpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "aktiv_passiv",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Zeitform? 'Der Dieb war gefasst worden.'",
                    "answers": [
                        "Plusquamperfekt Passiv",
                        "Präteritum Passiv",
                        "Plusquamperfekt Aktiv",
                        "Präsens Passiv"
                    ],
                    "correct": 0,
                    "explanation": "war … worden = Plusquamperfekt Passiv."
                },
                {
                    "id": "akpak7l2u_mittel_2",
                    "category": "kurs_akpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "aktiv_passiv",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'Man muss das Fenster schließen.' im Passiv:",
                    "answers": [
                        "Das Fenster muss geschlossen werden.",
                        "Das Fenster muss geschlossen worden.",
                        "Das Fenster wird schließen müssen.",
                        "Das Fenster muss schließen werden."
                    ],
                    "correct": 0,
                    "explanation": "Modalverb + Partizip II + werden."
                },
                {
                    "id": "akpak7l2u_mittel_3",
                    "category": "kurs_akpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "aktiv_passiv",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Form ist Futur Passiv?",
                    "answers": [
                        "Es wird gemalt werden.",
                        "Es wird gemalt.",
                        "Es wurde gemalt.",
                        "Es ist gemalt worden."
                    ],
                    "correct": 0,
                    "explanation": "Futur Passiv: wird + Partizip II + werden."
                },
                {
                    "id": "akpak7l2u_mittel_4",
                    "category": "kurs_akpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "aktiv_passiv",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'Die Polizei hat den Dieb gefasst.' im Passiv:",
                    "answers": [
                        "Der Dieb ist gefasst worden.",
                        "Der Dieb wurde gefasst worden.",
                        "Der Dieb hat gefasst worden.",
                        "Der Dieb ist gefasst geworden."
                    ],
                    "correct": 0,
                    "explanation": "Perfekt Aktiv → Perfekt Passiv: ist … worden."
                }
            ],
            "schwer": [
                {
                    "id": "akpak7l2u_schwer_1",
                    "category": "kurs_akpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "aktiv_passiv",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Passivsatz enthält einen Fehler?",
                    "answers": [
                        "Das Auto ist repariert geworden.",
                        "Das Auto wurde repariert.",
                        "Das Auto ist repariert worden.",
                        "Das Auto wird repariert."
                    ],
                    "correct": 0,
                    "explanation": "Passiv-Perfekt: 'worden', nicht 'geworden'."
                },
                {
                    "id": "akpak7l2u_schwer_2",
                    "category": "kurs_akpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "aktiv_passiv",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz hat kein Passiv?",
                    "answers": [
                        "Sie ist Ärztin geworden.",
                        "Er ist operiert worden.",
                        "Es wird gelacht.",
                        "Das Bild wurde verkauft."
                    ],
                    "correct": 0,
                    "explanation": "Hier ist werden ein Kopulaverb (wie sein/bleiben) mit Prädikativ – kein Passiv."
                },
                {
                    "id": "akpak7l2u_schwer_3",
                    "category": "kurs_akpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "aktiv_passiv",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'Hier darf man nicht rauchen.' im Passiv:",
                    "answers": [
                        "Hier darf nicht geraucht werden.",
                        "Hier wird nicht rauchen dürfen.",
                        "Hier darf nicht geraucht worden.",
                        "Hier ist nicht geraucht."
                    ],
                    "correct": 0,
                    "explanation": "Modalverb dürfen + Partizip II + werden."
                },
                {
                    "id": "akpak7l2u_schwer_4",
                    "category": "kurs_akpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "aktiv_passiv",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Zeitform? 'Die Tür ist geöffnet worden.'",
                    "answers": [
                        "Perfekt Passiv",
                        "Präsens Passiv",
                        "Zustandspassiv",
                        "Präteritum Passiv"
                    ],
                    "correct": 0,
                    "explanation": "ist … worden = Perfekt Passiv."
                }
            ]
        },
        "test": [
            {
                "id": "akpak7l2_test_1",
                "category": "kurs_akpa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "aktiv_passiv",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Form ist Perfekt Passiv?",
                "answers": [
                    "Es ist verkauft worden.",
                    "Es wurde verkauft.",
                    "Es wird verkauft.",
                    "Es war verkauft worden."
                ],
                "correct": 0,
                "explanation": "Perfekt Passiv: ist + Partizip II + worden."
            },
            {
                "id": "akpak7l2_test_2",
                "category": "kurs_akpa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "aktiv_passiv",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zeitform? 'Das Lied wurde gesungen.'",
                "answers": [
                    "Präteritum",
                    "Präsens",
                    "Perfekt",
                    "Plusquamperfekt"
                ],
                "correct": 0,
                "explanation": "wurde + Partizip II = Präteritum Passiv."
            },
            {
                "id": "akpak7l2_test_3",
                "category": "kurs_akpa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "aktiv_passiv",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ergänze: 'Die Hausaufgaben müssen gemacht ___.'",
                "answers": [
                    "werden",
                    "worden",
                    "wurden",
                    "geworden"
                ],
                "correct": 0,
                "explanation": "Mit Modalverb steht am Ende 'werden'."
            },
            {
                "id": "akpak7l2_test_4",
                "category": "kurs_akpa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "aktiv_passiv",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Man hatte das Tor geschlossen.' im Passiv:",
                "answers": [
                    "Das Tor war geschlossen worden.",
                    "Das Tor ist geschlossen worden.",
                    "Das Tor wurde geschlossen worden.",
                    "Das Tor hatte geschlossen worden."
                ],
                "correct": 0,
                "explanation": "Plusquamperfekt Passiv: war … worden."
            },
            {
                "id": "akpak7l2_test_5",
                "category": "kurs_akpa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "aktiv_passiv",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz steht im Futur Passiv?",
                "answers": [
                    "Er wird abgeholt werden.",
                    "Er wird abgeholt.",
                    "Er wurde abgeholt.",
                    "Er ist abgeholt worden."
                ],
                "correct": 0,
                "explanation": "wird + Partizip II + werden = Futur Passiv."
            },
            {
                "id": "akpak7l2_test_6",
                "category": "kurs_akpa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "aktiv_passiv",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Hilfsverb bildet das Passiv?",
                "answers": [
                    "werden",
                    "haben",
                    "sein",
                    "bleiben"
                ],
                "correct": 0,
                "explanation": "Das Vorgangspassiv bildet man mit werden + Partizip II."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "nbsa_k7_l2",
        "kurs": "nebensatzarten_k7",
        "order": 2,
        "icon": "🧩",
        "title": "Weitere Nebensätze und Kommas",
        "kurz": "sodass, indem, während – und wo das Komma steht",
        "erklaerung": {
            "intro": "Neben Kausal- und Temporalsätzen gibt es weitere Nebensatzarten. Der <b>Konsekutivsatz</b> nennt eine Folge (<i>sodass, so … dass</i>). Der <b>Modalsatz</b> sagt, wie etwas geschieht (<i>indem, ohne dass</i>). Der <b>Adversativsatz</b> stellt einen Gegensatz dar (<i>während, wohingegen</i>). Jeder Nebensatz wird durch <b>Komma</b> vom Hauptsatz getrennt – steht er in der Mitte, durch zwei Kommas.",
            "merksatz": "sodass = Folge (konsekutiv), indem = Art und Weise (modal), während = Zeit oder Gegensatz (adversativ). Nebensatz in der Mitte: Komma davor und danach.",
            "beispiele": [
                "🌧️ Es regnete stark, <b>sodass</b> das Spiel ausfiel. – Folge.",
                "🚲 Er hielt sich fit, <b>indem</b> er Rad fuhr. – Art und Weise.",
                "⚖️ Tim mag Sport, <b>während</b> Lea lieber liest. – Gegensatz.",
                "✏️ Das Heft, <b>das auf dem Tisch liegt</b>, gehört mir. – zwei Kommas."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "nbsak7l2u_leicht_1",
                    "category": "kurs_nbsa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Konjunktion nennt eine Folge?",
                    "answers": [
                        "sodass",
                        "indem",
                        "obwohl",
                        "weil"
                    ],
                    "correct": 0,
                    "explanation": "sodass leitet einen Konsekutivsatz (Folge) ein."
                },
                {
                    "id": "nbsak7l2u_leicht_2",
                    "category": "kurs_nbsa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Konjunktion sagt, wie etwas geschieht?",
                    "answers": [
                        "indem",
                        "sodass",
                        "falls",
                        "damit"
                    ],
                    "correct": 0,
                    "explanation": "indem leitet einen Modalsatz ein."
                },
                {
                    "id": "nbsak7l2u_leicht_3",
                    "category": "kurs_nbsa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele Kommas braucht ein Nebensatz in der Mitte?",
                    "answers": [
                        "zwei",
                        "eins",
                        "keins",
                        "drei"
                    ],
                    "correct": 0,
                    "explanation": "Ein eingeschobener Nebensatz wird vorn und hinten abgetrennt."
                },
                {
                    "id": "nbsak7l2u_leicht_4",
                    "category": "kurs_nbsa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Nebensatzart? 'Er lernt, indem er liest.'",
                    "answers": [
                        "Modalsatz",
                        "Kausalsatz",
                        "Finalsatz",
                        "Temporalsatz"
                    ],
                    "correct": 0,
                    "explanation": "indem = Art und Weise → Modalsatz."
                }
            ],
            "mittel": [
                {
                    "id": "nbsak7l2u_mittel_1",
                    "category": "kurs_nbsa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Nebensatzart? 'Es war kalt, sodass der See fror.'",
                    "answers": [
                        "Konsekutivsatz",
                        "Konzessivsatz",
                        "Kausalsatz",
                        "Konditionalsatz"
                    ],
                    "correct": 0,
                    "explanation": "sodass nennt die Folge → Konsekutivsatz."
                },
                {
                    "id": "nbsak7l2u_mittel_2",
                    "category": "kurs_nbsa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was bedeutet 'während' in: 'Ich koche, während du liest.'?",
                    "answers": [
                        "zur gleichen Zeit",
                        "ein Gegensatz",
                        "ein Grund",
                        "eine Bedingung"
                    ],
                    "correct": 0,
                    "explanation": "Zwei Dinge passieren zur selben Zeit → temporal."
                },
                {
                    "id": "nbsak7l2u_mittel_3",
                    "category": "kurs_nbsa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was bedeutet 'während' in: 'Er ist laut, während sie leise ist.'?",
                    "answers": [
                        "Gegensatz",
                        "gleichzeitig",
                        "Folge",
                        "Zweck"
                    ],
                    "correct": 0,
                    "explanation": "Hier werden zwei Personen verglichen → adversativ."
                },
                {
                    "id": "nbsak7l2u_mittel_4",
                    "category": "kurs_nbsa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wo fehlt ein Komma? 'Der Hund der bellt gehört Tom.'",
                    "answers": [
                        "nach Hund und bellt",
                        "nur nach Hund",
                        "nur nach bellt",
                        "nach der und bellt"
                    ],
                    "correct": 0,
                    "explanation": "Relativsatz in der Mitte: Der Hund, der bellt, gehört Tom."
                }
            ],
            "schwer": [
                {
                    "id": "nbsak7l2u_schwer_1",
                    "category": "kurs_nbsa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Nebensatzart? 'Er ging, ohne dass ihn jemand sah.'",
                    "answers": [
                        "Modalsatz",
                        "Konzessivsatz",
                        "Finalsatz",
                        "Konsekutivsatz"
                    ],
                    "correct": 0,
                    "explanation": "ohne dass beschreibt die Art und Weise → Modalsatz."
                },
                {
                    "id": "nbsak7l2u_schwer_2",
                    "category": "kurs_nbsa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wo steht das Komma bei sodass richtig?",
                    "answers": [
                        "Er übte, sodass er gewann.",
                        "Er übte sodass, er gewann.",
                        "Er übte sodass er gewann.",
                        "Er übte, sodass, er gewann."
                    ],
                    "correct": 0,
                    "explanation": "Das Komma steht vor der Konjunktion sodass."
                },
                {
                    "id": "nbsak7l2u_schwer_3",
                    "category": "kurs_nbsa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'Es regnete stark, ___ die Straßen überflutet waren.'",
                    "answers": [
                        "sodass",
                        "obwohl",
                        "indem",
                        "damit"
                    ],
                    "correct": 0,
                    "explanation": "Der Regen führt zur Folge → sodass."
                },
                {
                    "id": "nbsak7l2u_schwer_4",
                    "category": "kurs_nbsa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "nebensaetze",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz hat die Kommas richtig?",
                    "answers": [
                        "Ich weiß, wann er kommt, und warte.",
                        "Ich weiß wann er kommt, und warte.",
                        "Ich weiß, wann er kommt und, warte.",
                        "Ich weiß wann, er kommt und warte."
                    ],
                    "correct": 0,
                    "explanation": "Der Nebensatz 'wann er kommt' wird vorn und hinten abgetrennt; vor 'und' steht das zweite Komma."
                }
            ]
        },
        "test": [
            {
                "id": "nbsak7l2_test_1",
                "category": "kurs_nbsa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "nebensaetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Nebensatzart? 'Ich gewann, indem ich schnell lief.'",
                "answers": [
                    "Modalsatz",
                    "Finalsatz",
                    "Kausalsatz",
                    "Konsekutivsatz"
                ],
                "correct": 0,
                "explanation": "indem = Art und Weise → Modalsatz."
            },
            {
                "id": "nbsak7l2_test_2",
                "category": "kurs_nbsa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "nebensaetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Konjunktion leitet einen Konsekutivsatz ein?",
                "answers": [
                    "sodass",
                    "damit",
                    "obwohl",
                    "als"
                ],
                "correct": 0,
                "explanation": "sodass nennt die Folge."
            },
            {
                "id": "nbsak7l2_test_3",
                "category": "kurs_nbsa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "nebensaetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Nebensatzart? 'Er schläft, während sie arbeitet.'",
                "answers": [
                    "Temporalsatz",
                    "Konditionalsatz",
                    "Kausalsatz",
                    "Konsekutivsatz"
                ],
                "correct": 0,
                "explanation": "Beides passiert zur selben Zeit → temporal."
            },
            {
                "id": "nbsak7l2_test_4",
                "category": "kurs_nbsa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "nebensaetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wo stehen die Kommas? 'Die Frau die dort wohnt ist nett.'",
                "answers": [
                    "nach Frau und wohnt",
                    "nur nach Frau",
                    "nur nach wohnt",
                    "nach die und ist"
                ],
                "correct": 0,
                "explanation": "Relativsatz in der Mitte: Die Frau, die dort wohnt, ist nett."
            },
            {
                "id": "nbsak7l2_test_5",
                "category": "kurs_nbsa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "nebensaetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Konjunktion kann auch einen Gegensatz zeigen?",
                "answers": [
                    "während",
                    "nachdem",
                    "sodass",
                    "indem"
                ],
                "correct": 0,
                "explanation": "während kann Zeit oder Gegensatz ausdrücken: Er lacht, während sie weint."
            },
            {
                "id": "nbsak7l2_test_6",
                "category": "kurs_nbsa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "nebensaetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Nebensatzart? 'Es schneite so sehr, dass alles weiß war.'",
                "answers": [
                    "Konsekutivsatz",
                    "Finalsatz",
                    "Temporalsatz",
                    "Modalsatz"
                ],
                "correct": 0,
                "explanation": "so …, dass nennt die Folge → Konsekutivsatz."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "satv_k7_l2",
        "kurs": "satzglieder_vertiefend_k7",
        "order": 2,
        "icon": "🧱",
        "title": "Prädikativ und alle Satzglieder",
        "kurz": "Gleichsetzung, Objekte und Adverbiale sicher bestimmen",
        "erklaerung": {
            "intro": "Nach <b>sein, werden</b> und <b>bleiben</b> steht oft ein <b>Prädikativ</b>. Es sagt etwas über das Subjekt aus: <i>Lea ist <b>Ärztin</b>.</i> (Nomen im Nominativ) oder <i>Der Tee ist <b>heiß</b>.</i> (Adjektiv). Es ist kein Objekt! So bestimmst du alle Satzglieder: erst mit der <b>Umstellprobe</b> die Satzglieder finden, dann mit der passenden <b>Frage</b> benennen.",
            "merksatz": "Prädikativ: steht nach sein/werden/bleiben und beschreibt das Subjekt. Akkusativobjekt: Wen oder was? Dativobjekt: Wem? Adverbiale: wann, wo, wie, warum, wozu?",
            "beispiele": [
                "👩‍⚕️ Lea ist <b>Ärztin</b>. – Prädikativ (Wer oder was ist Lea?).",
                "🍵 Der Tee bleibt <b>heiß</b>. – Prädikativ (Adjektiv).",
                "🎁 Ich schenke <b>meiner Oma</b> <b>Blumen</b>. – Dativobjekt, Akkusativobjekt.",
                "🏃 <b>Zum Training</b> fährt er <b>mit dem Rad</b>. – Adverbiale des Zwecks und der Art."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "satvk7l2u_leicht_1",
                    "category": "kurs_satv_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ist 'Lehrer' in 'Herr Kim ist Lehrer.'?",
                    "answers": [
                        "Prädikativ",
                        "Akkusativobjekt",
                        "Subjekt",
                        "Dativobjekt"
                    ],
                    "correct": 0,
                    "explanation": "Nach sein beschreibt 'Lehrer' das Subjekt → Prädikativ."
                },
                {
                    "id": "satvk7l2u_leicht_2",
                    "category": "kurs_satv_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Nach welchem Verb steht oft ein Prädikativ?",
                    "answers": [
                        "sein",
                        "geben",
                        "helfen",
                        "lesen"
                    ],
                    "correct": 0,
                    "explanation": "sein, werden und bleiben verbinden Subjekt und Prädikativ."
                },
                {
                    "id": "satvk7l2u_leicht_3",
                    "category": "kurs_satv_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Mit welcher Frage findest du das Dativobjekt?",
                    "answers": [
                        "Wem?",
                        "Wen oder was?",
                        "Wessen?",
                        "Wo?"
                    ],
                    "correct": 0,
                    "explanation": "Das Dativobjekt erfragt man mit 'Wem?'."
                },
                {
                    "id": "satvk7l2u_leicht_4",
                    "category": "kurs_satv_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ist 'müde' in 'Die Kinder sind müde.'?",
                    "answers": [
                        "Prädikativ",
                        "Objekt",
                        "Adverbiale des Ortes",
                        "Subjekt"
                    ],
                    "correct": 0,
                    "explanation": "Ein Adjektiv nach sein ist ein Prädikativ."
                }
            ],
            "mittel": [
                {
                    "id": "satvk7l2u_mittel_1",
                    "category": "kurs_satv_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was ist 'ein guter Sänger' in 'Er wird ein guter Sänger.'?",
                    "answers": [
                        "Prädikativ",
                        "Akkusativobjekt",
                        "Dativobjekt",
                        "Adverbiale"
                    ],
                    "correct": 0,
                    "explanation": "Nach werden, im Nominativ → Prädikativ."
                },
                {
                    "id": "satvk7l2u_mittel_2",
                    "category": "kurs_satv_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was ist 'den Nachbarn' in 'Wir helfen den Nachbarn.'?",
                    "answers": [
                        "Dativobjekt",
                        "Akkusativobjekt",
                        "Prädikativ",
                        "Subjekt"
                    ],
                    "correct": 0,
                    "explanation": "Wem helfen wir? Den Nachbarn → Dativobjekt."
                },
                {
                    "id": "satvk7l2u_mittel_3",
                    "category": "kurs_satv_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was ist 'zum Spielen' in 'Sie geht zum Spielen nach draußen.'?",
                    "answers": [
                        "Adverbiale des Zwecks",
                        "Präpositionalobjekt",
                        "Prädikativ",
                        "Dativobjekt"
                    ],
                    "correct": 0,
                    "explanation": "Wozu geht sie raus? Zum Spielen → Zweck (final)."
                },
                {
                    "id": "satvk7l2u_mittel_4",
                    "category": "kurs_satv_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viele Satzglieder hat 'Im Winter wird das Wasser kalt.'?",
                    "answers": [
                        "vier",
                        "drei",
                        "fünf",
                        "sechs"
                    ],
                    "correct": 0,
                    "explanation": "Im Winter | wird | das Wasser | kalt – Adverbiale, Prädikat, Subjekt, Prädikativ."
                }
            ],
            "schwer": [
                {
                    "id": "satvk7l2u_schwer_1",
                    "category": "kurs_satv_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was ist 'einen Freund' in 'Er hat einen Freund.'?",
                    "answers": [
                        "Akkusativobjekt",
                        "Prädikativ",
                        "Dativobjekt",
                        "Genitivobjekt"
                    ],
                    "correct": 0,
                    "explanation": "haben ist kein Gleichsetzungsverb: Wen hat er? → Akkusativobjekt."
                },
                {
                    "id": "satvk7l2u_schwer_2",
                    "category": "kurs_satv_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "In welchem Satz steht ein Prädikativ?",
                    "answers": [
                        "Mein Bruder bleibt ruhig.",
                        "Mein Bruder ruft mich.",
                        "Mein Bruder hilft mir.",
                        "Mein Bruder rennt schnell."
                    ],
                    "correct": 0,
                    "explanation": "Nach bleiben beschreibt 'ruhig' das Subjekt."
                },
                {
                    "id": "satvk7l2u_schwer_3",
                    "category": "kurs_satv_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was ist 'schnell' in 'Er rennt schnell.'?",
                    "answers": [
                        "Adverbiale der Art",
                        "Prädikativ",
                        "Akkusativobjekt",
                        "Attribut"
                    ],
                    "correct": 0,
                    "explanation": "Wie rennt er? Schnell → Art und Weise, kein Prädikativ (rennen ist kein sein-Verb)."
                },
                {
                    "id": "satvk7l2u_schwer_4",
                    "category": "kurs_satv_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "deutsch",
                    "topic": "satzglieder",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was ist 'dem Kind' in 'Sie liest dem Kind ein Buch vor.'?",
                    "answers": [
                        "Dativobjekt",
                        "Akkusativobjekt",
                        "Prädikativ",
                        "Subjekt"
                    ],
                    "correct": 0,
                    "explanation": "Wem liest sie vor? Dem Kind → Dativobjekt."
                }
            ]
        },
        "test": [
            {
                "id": "satvk7l2_test_1",
                "category": "kurs_satv_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "satzglieder",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ist 'Kapitän' in 'Tom wird Kapitän.'?",
                "answers": [
                    "Prädikativ",
                    "Akkusativobjekt",
                    "Dativobjekt",
                    "Adverbiale"
                ],
                "correct": 0,
                "explanation": "Nach werden beschreibt 'Kapitän' das Subjekt."
            },
            {
                "id": "satvk7l2_test_2",
                "category": "kurs_satv_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "satzglieder",
                "difficulty": "mittel",
                "points": 10,
                "question": "Mit welcher Frage findest du das Akkusativobjekt?",
                "answers": [
                    "Wen oder was?",
                    "Wer oder was?",
                    "Wem?",
                    "Wessen?"
                ],
                "correct": 0,
                "explanation": "Akkusativobjekt: Wen oder was?"
            },
            {
                "id": "satvk7l2_test_3",
                "category": "kurs_satv_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "satzglieder",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ist 'kalt' in 'Das Wasser ist kalt.'?",
                "answers": [
                    "Prädikativ",
                    "Adverbiale der Art",
                    "Objekt",
                    "Subjekt"
                ],
                "correct": 0,
                "explanation": "Adjektiv nach sein → Prädikativ."
            },
            {
                "id": "satvk7l2_test_4",
                "category": "kurs_satv_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "satzglieder",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ist 'aus Spaß' in 'Er singt aus Spaß.'?",
                "answers": [
                    "Adverbiale des Grundes",
                    "Prädikativ",
                    "Präpositionalobjekt",
                    "Dativobjekt"
                ],
                "correct": 0,
                "explanation": "Warum singt er? Aus Spaß → Grund (kausal)."
            },
            {
                "id": "satvk7l2_test_5",
                "category": "kurs_satv_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "satzglieder",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ist 'ihrer Mutter' in 'Sie dankt ihrer Mutter.'?",
                "answers": [
                    "Dativobjekt",
                    "Genitivobjekt",
                    "Akkusativobjekt",
                    "Prädikativ"
                ],
                "correct": 0,
                "explanation": "Wem dankt sie? Ihrer Mutter → Dativobjekt."
            },
            {
                "id": "satvk7l2_test_6",
                "category": "kurs_satv_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "deutsch",
                "topic": "satzglieder",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Verb verlangt kein Prädikativ?",
                "answers": [
                    "kaufen",
                    "sein",
                    "werden",
                    "bleiben"
                ],
                "correct": 0,
                "explanation": "kaufen hat ein Akkusativobjekt, kein Prädikativ."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "prep_k7_l2",
        "kurs": "prepositions_k7",
        "order": 2,
        "icon": "🚶",
        "title": "Prepositions of movement and place",
        "kurz": "into, through, across, between, opposite …",
        "erklaerung": {
            "intro": "Bewegungen zeigen die <b>prepositions of movement</b>: <b>into</b> (hinein), <b>out of</b> (heraus), <b>through</b> (durch), <b>across</b> (über, auf die andere Seite), <b>along</b> (entlang), <b>past</b> (vorbei an), <b>up/down</b> (hinauf/hinunter). Für die Lage gibt es <b>between</b> (zwischen), <b>next to</b> (neben), <b>opposite</b> (gegenüber), <b>behind</b> (hinter) und <b>in front of</b> (vor).",
            "merksatz": "Bewegung mit Richtung: into, out of, through, across, along, past. Lage: between, next to, opposite, behind, in front of.",
            "beispiele": [
                "🏊 She jumped <b>into</b> the pool.",
                "🌳 We walked <b>through</b> the forest.",
                "🛣️ The cat ran <b>across</b> the road.",
                "🏪 The bank is <b>opposite</b> the school."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "prepk7l2u_leicht_1",
                    "category": "kurs_prep_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "prepositions",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was heißt 'through'?",
                    "answers": [
                        "durch",
                        "über",
                        "neben",
                        "hinter"
                    ],
                    "correct": 0,
                    "explanation": "through = durch (z. B. through the tunnel)."
                },
                {
                    "id": "prepk7l2u_leicht_2",
                    "category": "kurs_prep_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "prepositions",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ergänze: 'He went ___ the room.' (hinein)",
                    "answers": [
                        "into",
                        "out of",
                        "along",
                        "past"
                    ],
                    "correct": 0,
                    "explanation": "into = in … hinein."
                },
                {
                    "id": "prepk7l2u_leicht_3",
                    "category": "kurs_prep_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "prepositions",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was bedeutet 'next to' auf Deutsch?",
                    "answers": [
                        "neben",
                        "gegenüber",
                        "zwischen",
                        "hinter"
                    ],
                    "correct": 0,
                    "explanation": "next to = neben."
                },
                {
                    "id": "prepk7l2u_leicht_4",
                    "category": "kurs_prep_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "prepositions",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ergänze: 'The ball is ___ the two cars.' (zwischen)",
                    "answers": [
                        "between",
                        "behind",
                        "across",
                        "into"
                    ],
                    "correct": 0,
                    "explanation": "between = zwischen."
                }
            ],
            "mittel": [
                {
                    "id": "prepk7l2u_mittel_1",
                    "category": "kurs_prep_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "prepositions",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ergänze: 'We walked ___ the river.' (entlang)",
                    "answers": [
                        "along",
                        "across",
                        "through",
                        "into"
                    ],
                    "correct": 0,
                    "explanation": "along = entlang."
                },
                {
                    "id": "prepk7l2u_mittel_2",
                    "category": "kurs_prep_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "prepositions",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ergänze: 'She got ___ the car.' (aus … heraus)",
                    "answers": [
                        "out of",
                        "into",
                        "along",
                        "off to"
                    ],
                    "correct": 0,
                    "explanation": "out of = aus … heraus."
                },
                {
                    "id": "prepk7l2u_mittel_3",
                    "category": "kurs_prep_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "prepositions",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was heißt 'opposite the station'?",
                    "answers": [
                        "gegenüber vom Bahnhof",
                        "neben dem Bahnhof",
                        "hinter dem Bahnhof",
                        "im Bahnhof"
                    ],
                    "correct": 0,
                    "explanation": "opposite = gegenüber."
                },
                {
                    "id": "prepk7l2u_mittel_4",
                    "category": "kurs_prep_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "prepositions",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ergänze: 'The bus drove ___ our house.' (vorbei)",
                    "answers": [
                        "past",
                        "through",
                        "into",
                        "along"
                    ],
                    "correct": 0,
                    "explanation": "past = an … vorbei."
                }
            ],
            "schwer": [
                {
                    "id": "prepk7l2u_schwer_1",
                    "category": "kurs_prep_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "prepositions",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ergänze: 'Swim ___ the lake to the other side.'",
                    "answers": [
                        "across",
                        "along",
                        "into",
                        "past"
                    ],
                    "correct": 0,
                    "explanation": "across = quer hinüber, auf die andere Seite."
                },
                {
                    "id": "prepk7l2u_schwer_2",
                    "category": "kurs_prep_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "prepositions",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz mit 'in front of' ist richtig?",
                    "answers": [
                        "The car is in front of the house.",
                        "The car is in front the house.",
                        "The car is front of the house.",
                        "The car is in the front house."
                    ],
                    "correct": 0,
                    "explanation": "in front of = vor (Ort)."
                },
                {
                    "id": "prepk7l2u_schwer_3",
                    "category": "kurs_prep_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "prepositions",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was ist der Unterschied zwischen 'in' und 'into'?",
                    "answers": [
                        "into zeigt eine Bewegung",
                        "in zeigt eine Bewegung",
                        "Es gibt keinen",
                        "into nur bei Zeit"
                    ],
                    "correct": 0,
                    "explanation": "He is in the room (Ort). He goes into the room (Bewegung)."
                },
                {
                    "id": "prepk7l2u_schwer_4",
                    "category": "kurs_prep_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "prepositions",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ergänze: 'The train went ___ the tunnel.'",
                    "answers": [
                        "through",
                        "across",
                        "opposite",
                        "between"
                    ],
                    "correct": 0,
                    "explanation": "durch den Tunnel = through."
                }
            ]
        },
        "test": [
            {
                "id": "prepk7l2_test_1",
                "category": "kurs_prep_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "prepositions",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was bedeutet 'behind' auf Deutsch?",
                "answers": [
                    "hinter",
                    "vor",
                    "neben",
                    "zwischen"
                ],
                "correct": 0,
                "explanation": "behind = hinter."
            },
            {
                "id": "prepk7l2_test_2",
                "category": "kurs_prep_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "prepositions",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ergänze: 'The dog jumped ___ the water.' (hinein)",
                "answers": [
                    "into",
                    "out of",
                    "past",
                    "along"
                ],
                "correct": 0,
                "explanation": "into = hinein."
            },
            {
                "id": "prepk7l2_test_3",
                "category": "kurs_prep_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "prepositions",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ergänze: 'We cycled ___ the park.' (hindurch)",
                "answers": [
                    "through",
                    "between",
                    "opposite",
                    "into"
                ],
                "correct": 0,
                "explanation": "durch den Park = through."
            },
            {
                "id": "prepk7l2_test_4",
                "category": "kurs_prep_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "prepositions",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was heißt 'across the street'?",
                "answers": [
                    "über die Straße",
                    "entlang der Straße",
                    "hinter der Straße",
                    "in die Straße"
                ],
                "correct": 0,
                "explanation": "across = hinüber, auf die andere Seite."
            },
            {
                "id": "prepk7l2_test_5",
                "category": "kurs_prep_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "prepositions",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ergänze: 'The café is ___ the bank.' (gegenüber)",
                "answers": [
                    "opposite",
                    "between",
                    "through",
                    "along"
                ],
                "correct": 0,
                "explanation": "opposite = gegenüber."
            },
            {
                "id": "prepk7l2_test_6",
                "category": "kurs_prep_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "prepositions",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ergänze: 'Climb ___ the hill.' (hinauf)",
                "answers": [
                    "up",
                    "down",
                    "into",
                    "past"
                ],
                "correct": 0,
                "explanation": "up = hinauf."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "futu_k7_l2",
        "kurs": "future_k7",
        "order": 2,
        "icon": "📅",
        "title": "Future: arrangements and timetables",
        "kurz": "I'm meeting Tom tomorrow. The train leaves at 8.",
        "erklaerung": {
            "intro": "Für die Zukunft gibt es noch zwei Formen. Das <b>present progressive</b> nutzt man für <b>feste Verabredungen</b>: <i>I'm meeting Tom tomorrow.</i> Das <b>simple present</b> nutzt man für <b>Fahrpläne und Stundenpläne</b>: <i>The train leaves at 8.</i> Verneinung: <b>won't</b> (= will not) und <b>isn't going to</b>.",
            "merksatz": "Verabredung mit Zeitangabe → present progressive. Fahrplan, Programm, Stundenplan → simple present. Spontan → will. Geplant oder sichtbares Anzeichen → going to.",
            "beispiele": [
                "🤝 We <b>are playing</b> tennis on Saturday. – feste Verabredung.",
                "🚆 The bus <b>leaves</b> at 7:15. – Fahrplan.",
                "🎬 The film <b>starts</b> at 8 p.m. – Programm.",
                "🙅 I <b>won't</b> tell anyone. – Versprechen, verneint."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "futuk7l2u_leicht_1",
                    "category": "kurs_futu_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "future",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ist 'won't'?",
                    "answers": [
                        "will not",
                        "want not",
                        "would not",
                        "was not"
                    ],
                    "correct": 0,
                    "explanation": "won't ist die Kurzform von will not."
                },
                {
                    "id": "futuk7l2u_leicht_2",
                    "category": "kurs_futu_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "future",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ergänze: 'The train ___ at 9 o'clock.' (Fahrplan)",
                    "answers": [
                        "leaves",
                        "is leave",
                        "will leaving",
                        "leaving"
                    ],
                    "correct": 0,
                    "explanation": "Fahrpläne stehen im simple present."
                },
                {
                    "id": "futuk7l2u_leicht_3",
                    "category": "kurs_futu_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "future",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Form für eine feste Verabredung?",
                    "answers": [
                        "present progressive",
                        "simple past",
                        "present perfect",
                        "past progressive"
                    ],
                    "correct": 0,
                    "explanation": "I'm meeting … – present progressive."
                },
                {
                    "id": "futuk7l2u_leicht_4",
                    "category": "kurs_futu_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "future",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ergänze: 'I ___ seeing the dentist tomorrow.'",
                    "answers": [
                        "am",
                        "will",
                        "do",
                        "have"
                    ],
                    "correct": 0,
                    "explanation": "present progressive: am/is/are + -ing."
                }
            ],
            "mittel": [
                {
                    "id": "futuk7l2u_mittel_1",
                    "category": "kurs_futu_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "future",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ergänze: 'We ___ dinner with Sam tonight.' (verabredet)",
                    "answers": [
                        "are having",
                        "have had",
                        "were having",
                        "had"
                    ],
                    "correct": 0,
                    "explanation": "Verabredung → present progressive."
                },
                {
                    "id": "futuk7l2u_mittel_2",
                    "category": "kurs_futu_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "future",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ergänze: 'School ___ at 8:00 tomorrow.' (Stundenplan)",
                    "answers": [
                        "starts",
                        "starting",
                        "started",
                        "has started"
                    ],
                    "correct": 0,
                    "explanation": "Stundenpläne → simple present."
                },
                {
                    "id": "futuk7l2u_mittel_3",
                    "category": "kurs_futu_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "future",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Verneine: 'She is going to buy a car.'",
                    "answers": [
                        "She isn't going to buy a car.",
                        "She won't going to buy a car.",
                        "She not going to buy a car.",
                        "She isn't going buy a car."
                    ],
                    "correct": 0,
                    "explanation": "Verneinung: isn't going to."
                },
                {
                    "id": "futuk7l2u_mittel_4",
                    "category": "kurs_futu_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "future",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ergänze: 'Don't worry. I ___ forget it.' (Versprechen)",
                    "answers": [
                        "won't",
                        "am not going",
                        "don't",
                        "isn't"
                    ],
                    "correct": 0,
                    "explanation": "Versprechen → will / won't."
                }
            ],
            "schwer": [
                {
                    "id": "futuk7l2u_schwer_1",
                    "category": "kurs_futu_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "future",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz beschreibt einen Fahrplan richtig?",
                    "answers": [
                        "The plane lands at 6 p.m.",
                        "The plane is landing at 6 p.m. daily.",
                        "The plane will lands at 6 p.m.",
                        "The plane lands at 6 p.m. yesterday."
                    ],
                    "correct": 0,
                    "explanation": "Fahrplan → simple present: lands."
                },
                {
                    "id": "futuk7l2u_schwer_2",
                    "category": "kurs_futu_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "future",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Form passt? 'Look! The baby ___ fall.'",
                    "answers": [
                        "is going to",
                        "will",
                        "falls",
                        "is falling at"
                    ],
                    "correct": 0,
                    "explanation": "Anzeichen jetzt sichtbar → going to."
                },
                {
                    "id": "futuk7l2u_schwer_3",
                    "category": "kurs_futu_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "future",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Frage passt zur Verabredung?",
                    "answers": [
                        "What are you doing on Friday?",
                        "What do you do on Friday yesterday?",
                        "What will you did on Friday?",
                        "What you doing Friday?"
                    ],
                    "correct": 0,
                    "explanation": "Nach Plänen fragt man mit present progressive."
                },
                {
                    "id": "futuk7l2u_schwer_4",
                    "category": "kurs_futu_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "future",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ergänze: 'The concert ___ at 8 and ___ at 10.'",
                    "answers": [
                        "starts / ends",
                        "start / end",
                        "is start / is end",
                        "started / ended"
                    ],
                    "correct": 0,
                    "explanation": "Programm → simple present, 3. Person mit s."
                }
            ]
        },
        "test": [
            {
                "id": "futuk7l2_test_1",
                "category": "kurs_futu_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "future",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ergänze: 'The shop ___ at 6 p.m.' (Öffnungszeiten)",
                "answers": [
                    "closes",
                    "closing",
                    "closed",
                    "will closes"
                ],
                "correct": 0,
                "explanation": "Feste Zeiten wie Öffnungszeiten → simple present."
            },
            {
                "id": "futuk7l2_test_2",
                "category": "kurs_futu_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "future",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ergänze: 'I ___ my cousin on Sunday.' (verabredet)",
                "answers": [
                    "am visiting",
                    "visit",
                    "visited",
                    "have visited"
                ],
                "correct": 0,
                "explanation": "Verabredung → present progressive."
            },
            {
                "id": "futuk7l2_test_3",
                "category": "kurs_futu_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "future",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie lautet die Kurzform von 'will not'?",
                "answers": [
                    "won't",
                    "willn't",
                    "wont'",
                    "w'not"
                ],
                "correct": 0,
                "explanation": "will not → won't."
            },
            {
                "id": "futuk7l2_test_4",
                "category": "kurs_futu_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "future",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Form für eine spontane Entscheidung?",
                "answers": [
                    "will",
                    "present progressive",
                    "simple present",
                    "going to"
                ],
                "correct": 0,
                "explanation": "Spontan entschieden → will."
            },
            {
                "id": "futuk7l2_test_5",
                "category": "kurs_futu_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "future",
                "difficulty": "mittel",
                "points": 10,
                "question": "Verneine: 'They are going to come.'",
                "answers": [
                    "They aren't going to come.",
                    "They won't going to come.",
                    "They don't going to come.",
                    "They aren't go to come."
                ],
                "correct": 0,
                "explanation": "are not going to → aren't going to."
            },
            {
                "id": "futuk7l2_test_6",
                "category": "kurs_futu_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "future",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ergänze: 'Our flight ___ at 7:30.' (Flugplan)",
                "answers": [
                    "departs",
                    "is depart",
                    "departed",
                    "will departing"
                ],
                "correct": 0,
                "explanation": "Flugplan → simple present."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "pfpa_k7_l2",
        "kurs": "perfect_past_k7",
        "order": 2,
        "icon": "⏱️",
        "title": "since, for, just, yet",
        "kurz": "Wie lange schon? Und wo stehen just, already, yet?",
        "erklaerung": {
            "intro": "Mit dem Present Perfect sagt man, <b>wie lange</b> etwas schon andauert. <b>since</b> nennt den <b>Startpunkt</b> (since Monday, since 2020), <b>for</b> die <b>Zeitdauer</b> (for two days, for ten years). <b>just</b> (gerade eben) und <b>already</b> (schon) stehen zwischen have und Partizip. <b>yet</b> steht am Satzende – in Fragen (schon?) und Verneinungen (noch nicht). <b>has been to</b> = war dort und ist zurück (Erfahrung), <b>has gone to</b> = ist hingefahren und noch dort.",
            "merksatz": "since + Zeitpunkt, for + Zeitdauer. just/already: zwischen have und Partizip. yet: am Ende, in Fragen und Verneinungen.",
            "beispiele": [
                "📆 I have lived here <b>since</b> 2018.",
                "⏳ She has known him <b>for</b> five years.",
                "✅ We have <b>just</b> arrived.",
                "❓ Have you finished <b>yet</b>? – No, I haven't finished <b>yet</b>.",
                "✈️ She has <b>been</b> to Paris. (zurück) – She has <b>gone</b> to Paris. (noch dort)"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "pfpak7l2u_leicht_1",
                    "category": "kurs_pfpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "perfect_past",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ergänze: 'I have been here ___ Monday.'",
                    "answers": [
                        "since",
                        "for",
                        "ago",
                        "yet"
                    ],
                    "correct": 0,
                    "explanation": "Monday ist ein Startpunkt → since."
                },
                {
                    "id": "pfpak7l2u_leicht_2",
                    "category": "kurs_pfpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "perfect_past",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ergänze: 'She has lived here ___ three years.'",
                    "answers": [
                        "for",
                        "since",
                        "ago",
                        "just"
                    ],
                    "correct": 0,
                    "explanation": "three years ist eine Dauer → for."
                },
                {
                    "id": "pfpak7l2u_leicht_3",
                    "category": "kurs_pfpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "perfect_past",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was heißt 'just' im Present Perfect?",
                    "answers": [
                        "gerade eben",
                        "noch nicht",
                        "schon lange",
                        "niemals"
                    ],
                    "correct": 0,
                    "explanation": "I have just eaten. = Ich habe gerade eben gegessen."
                },
                {
                    "id": "pfpak7l2u_leicht_4",
                    "category": "kurs_pfpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "perfect_past",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wo steht 'yet' meistens?",
                    "answers": [
                        "am Satzende",
                        "am Satzanfang",
                        "vor have",
                        "nach dem Subjekt"
                    ],
                    "correct": 0,
                    "explanation": "yet steht am Ende: Have you done it yet?"
                }
            ],
            "mittel": [
                {
                    "id": "pfpak7l2u_mittel_1",
                    "category": "kurs_pfpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "perfect_past",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ergänze: 'We have known her ___ 2015.'",
                    "answers": [
                        "since",
                        "for",
                        "ago",
                        "during"
                    ],
                    "correct": 0,
                    "explanation": "2015 ist ein Zeitpunkt → since."
                },
                {
                    "id": "pfpak7l2u_mittel_2",
                    "category": "kurs_pfpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "perfect_past",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ergänze: 'He hasn't called ___.'",
                    "answers": [
                        "yet",
                        "already",
                        "just",
                        "ago"
                    ],
                    "correct": 0,
                    "explanation": "In Verneinungen: not … yet = noch nicht."
                },
                {
                    "id": "pfpak7l2u_mittel_3",
                    "category": "kurs_pfpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "perfect_past",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie fragt man nach der Dauer?",
                    "answers": [
                        "How long have you lived here?",
                        "How long do you lived here?",
                        "How long you have lived here?",
                        "How long did you live here now?"
                    ],
                    "correct": 0,
                    "explanation": "How long + have/has + Subjekt + Partizip?"
                },
                {
                    "id": "pfpak7l2u_mittel_4",
                    "category": "kurs_pfpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "perfect_past",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wo steht 'already' richtig?",
                    "answers": [
                        "I have already done it.",
                        "I have done already it.",
                        "I have done it already it.",
                        "I have it already done."
                    ],
                    "correct": 0,
                    "explanation": "already steht zwischen have und Partizip."
                }
            ],
            "schwer": [
                {
                    "id": "pfpak7l2u_schwer_1",
                    "category": "kurs_pfpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "perfect_past",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ergänze: 'They have been friends ___ a long time.'",
                    "answers": [
                        "for",
                        "since",
                        "ago",
                        "yet"
                    ],
                    "correct": 0,
                    "explanation": "a long time ist eine Dauer → for."
                },
                {
                    "id": "pfpak7l2u_schwer_2",
                    "category": "kurs_pfpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "perfect_past",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was bedeutet 'He has gone to Rome.'?",
                    "answers": [
                        "Er ist noch dort",
                        "Er war dort und ist zurück",
                        "Er fährt bald hin",
                        "Er war nie dort"
                    ],
                    "correct": 0,
                    "explanation": "has gone = ist hingefahren und noch dort. has been = war dort und ist zurück."
                },
                {
                    "id": "pfpak7l2u_schwer_3",
                    "category": "kurs_pfpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "perfect_past",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist falsch gebildet?",
                    "answers": [
                        "I have seen him two days ago.",
                        "I saw him two days ago.",
                        "I have seen him today.",
                        "I haven't seen him since Monday."
                    ],
                    "correct": 0,
                    "explanation": "ago verlangt das Simple Past: I saw him two days ago."
                },
                {
                    "id": "pfpak7l2u_schwer_4",
                    "category": "kurs_pfpa_k7_l2",
                    "area": "schule",
                    "grade": 7,
                    "subject": "englisch",
                    "topic": "perfect_past",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ergänze: 'She has worked here ___ she left school.'",
                    "answers": [
                        "since",
                        "for",
                        "yet",
                        "ago"
                    ],
                    "correct": 0,
                    "explanation": "since kann auch einen Nebensatz einleiten: seit sie die Schule verlassen hat."
                }
            ]
        },
        "test": [
            {
                "id": "pfpak7l2_test_1",
                "category": "kurs_pfpa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "perfect_past",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ergänze: 'I have had this phone ___ two years.'",
                "answers": [
                    "for",
                    "since",
                    "ago",
                    "yet"
                ],
                "correct": 0,
                "explanation": "two years = Dauer → for."
            },
            {
                "id": "pfpak7l2_test_2",
                "category": "kurs_pfpa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "perfect_past",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ergänze: 'Have you finished your homework ___?'",
                "answers": [
                    "yet",
                    "ago",
                    "for",
                    "still"
                ],
                "correct": 0,
                "explanation": "In Fragen am Ende: yet = schon?"
            },
            {
                "id": "pfpak7l2_test_3",
                "category": "kurs_pfpa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "perfect_past",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ergänze: 'He has lived in Berlin ___ May.'",
                "answers": [
                    "since",
                    "for",
                    "ago",
                    "just"
                ],
                "correct": 0,
                "explanation": "May = Startpunkt → since."
            },
            {
                "id": "pfpak7l2_test_4",
                "category": "kurs_pfpa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "perfect_past",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wo steht 'just'?",
                "answers": [
                    "zwischen have und Partizip",
                    "ganz am Ende des Satzes",
                    "vor dem Subjekt am Anfang",
                    "direkt nach dem Partizip"
                ],
                "correct": 0,
                "explanation": "I have just finished."
            },
            {
                "id": "pfpak7l2_test_5",
                "category": "kurs_pfpa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "perfect_past",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was heißt 'I haven't eaten yet.'?",
                "answers": [
                    "Ich habe noch nicht gegessen.",
                    "Ich habe schon gegessen.",
                    "Ich habe gerade gegessen.",
                    "Ich esse heute nichts mehr."
                ],
                "correct": 0,
                "explanation": "not … yet = noch nicht."
            },
            {
                "id": "pfpak7l2_test_6",
                "category": "kurs_pfpa_k7_l2",
                "area": "schule",
                "grade": 7,
                "subject": "englisch",
                "topic": "perfect_past",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz drückt eine Erfahrung richtig aus?",
                "answers": [
                    "She has been to London twice.",
                    "She has gone to London twice.",
                    "She has been in London twice ago.",
                    "She went to London twice since."
                ],
                "correct": 0,
                "explanation": "has been to = war schon dort (Erfahrung)."
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
