// Klasse 9 – Ausbau (22.10.2026): Mehrstufiger Zufall, Kommasetzung, Drama, Referat, Participles, Mediation, Formal letters.
// Neue Kurse samt Lektionen. topic = Thema der Wissensfragen. Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
    {
        "id": "zufall_mehrstufig_k9",
        "title": "Mehrstufige Zufallsexperimente",
        "icon": "🌳",
        "grade": 9,
        "subject": "mathe",
        "beschreibung": "Baumdiagramme, Pfadregeln, Ziehen mit und ohne Zurücklegen und das Gegenereignis."
    },
    {
        "id": "kommasetzung_k9",
        "title": "Kommasetzung",
        "icon": "✏️",
        "grade": 9,
        "subject": "deutsch",
        "beschreibung": "Die wichtigsten Kommaregeln sicher anwenden – vom Nebensatz bis zur Infinitivgruppe."
    },
    {
        "id": "drama_k9",
        "title": "Dramatische Texte",
        "icon": "🎭",
        "grade": 9,
        "subject": "deutsch",
        "beschreibung": "Merkmale des Dramas kennen und Szenen analysieren."
    },
    {
        "id": "referat_k9",
        "title": "Referat & Präsentation",
        "icon": "🎤",
        "grade": 9,
        "subject": "deutsch",
        "beschreibung": "Referate vorbereiten, frei vortragen und Feedback geben."
    },
    {
        "id": "participles_k9",
        "title": "Participle clauses",
        "icon": "🔗",
        "grade": 9,
        "subject": "englisch",
        "beschreibung": "Sätze mit -ing und 3. Form elegant verkürzen."
    },
    {
        "id": "mediation_k9",
        "title": "Mediation",
        "icon": "🗣️",
        "grade": 9,
        "subject": "englisch",
        "beschreibung": "Inhalte sinngemäß zwischen Deutsch und Englisch vermitteln."
    },
    {
        "id": "formal_writing_k9",
        "title": "Formal letters & emails",
        "icon": "✉️",
        "grade": 9,
        "subject": "englisch",
        "beschreibung": "Formelle Briefe und E-Mails nach britischen Regeln schreiben."
    }
];
    const extraLektionen = [
    {
        "id": "zufall_mehrstufig_k9_l1",
        "kurs": "zufall_mehrstufig_k9",
        "order": 1,
        "icon": "🌳",
        "title": "Baumdiagramm und Pfadregeln",
        "kurz": "Mehrstufige Zufallsexperimente mit Pfadmultiplikation und Pfadaddition",
        "erklaerung": {
            "intro": "Bei einem <b>mehrstufigen Zufallsexperiment</b> laufen mehrere Zufallsversuche nacheinander ab. Das <b>Baumdiagramm</b> zeigt alle Pfade; an jedem Knoten ergeben die Äste zusammen <b>1</b>. <b>Pfadmultiplikationsregel</b>: Wahrscheinlichkeiten entlang eines Pfades werden multipliziert. <b>Pfadadditionsregel</b>: Gehören mehrere Pfade zu einem Ereignis, addiert man ihre Wahrscheinlichkeiten.",
            "beispiele": [
                "🪙 Münze zweimal: P(Kopf, Kopf) = 1/2 · 1/2 = 1/4",
                "🎲 Würfel zweimal: P(zweimal 6) = 1/6 · 1/6 = 1/36",
                "➕ P(genau einmal Kopf) = P(KZ) + P(ZK) = 1/4 + 1/4 = 1/2",
                "⚠️ An jedem Knoten gilt: Summe der Äste = 1, z. B. 0,3 + 0,7 = 1"
            ],
            "merksatz": "Entlang eines Pfades: mal. Mehrere Pfade zu einem Ereignis: plus."
        },
        "uebung": {
            "leicht": [
                {
                    "id": "zufallmehrstufigk9l1u_leicht_1",
                    "category": "kurs_zufall_mehrstufig_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Eine Münze wird zweimal geworfen. Wie viele Pfade hat das Baumdiagramm?",
                    "answers": [
                        "2",
                        "3",
                        "6",
                        "4"
                    ],
                    "correct": 3,
                    "explanation": "Jede Stufe hat 2 Äste: 2 · 2 = 4 Pfade (KK, KZ, ZK, ZZ)."
                },
                {
                    "id": "zufallmehrstufigk9l1u_leicht_2",
                    "category": "kurs_zufall_mehrstufig_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was macht man mit den Wahrscheinlichkeiten entlang eines Pfades?",
                    "answers": [
                        "Man addiert sie",
                        "Man multipliziert sie",
                        "Man subtrahiert sie",
                        "Man dividiert sie"
                    ],
                    "correct": 1,
                    "explanation": "Pfadmultiplikationsregel: Die Wahrscheinlichkeit eines Pfades ist das Produkt der Astwahrscheinlichkeiten."
                },
                {
                    "id": "zufallmehrstufigk9l1u_leicht_3",
                    "category": "kurs_zufall_mehrstufig_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Von einem Knoten gehen zwei Äste ab. Einer hat 0,4. Welchen Wert hat der andere?",
                    "answers": [
                        "0,4",
                        "1,4",
                        "0,6",
                        "0,5"
                    ],
                    "correct": 2,
                    "explanation": "An jedem Knoten ergeben die Äste zusammen 1: 1 − 0,4 = 0,6."
                },
                {
                    "id": "zufallmehrstufigk9l1u_leicht_4",
                    "category": "kurs_zufall_mehrstufig_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Eine Münze wird zweimal geworfen. P(Zahl, Zahl) = ?",
                    "answers": [
                        "1/4",
                        "1/2",
                        "1/3",
                        "1"
                    ],
                    "correct": 0,
                    "explanation": "Pfadmultiplikationsregel: 1/2 · 1/2 = 1/4."
                }
            ],
            "mittel": [
                {
                    "id": "zufallmehrstufigk9l1u_mittel_1",
                    "category": "kurs_zufall_mehrstufig_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ein Würfel wird zweimal geworfen. P(erst 6, dann ungerade Zahl) = ?",
                    "answers": [
                        "1/12",
                        "2/3",
                        "1/36",
                        "1/8"
                    ],
                    "correct": 0,
                    "explanation": "Pfadmultiplikationsregel: 1/6 · 3/6 = 1/6 · 1/2 = 1/12."
                },
                {
                    "id": "zufallmehrstufigk9l1u_mittel_2",
                    "category": "kurs_zufall_mehrstufig_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Glücksrad: rot 0,3, blau 0,7. Es wird zweimal gedreht. P(beide Male rot) = ?",
                    "answers": [
                        "0,09",
                        "0,6",
                        "0,21",
                        "0,49"
                    ],
                    "correct": 0,
                    "explanation": "Pfadmultiplikationsregel: 0,3 · 0,3 = 0,09."
                },
                {
                    "id": "zufallmehrstufigk9l1u_mittel_3",
                    "category": "kurs_zufall_mehrstufig_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Gleiches Glücksrad (rot 0,3, blau 0,7), zweimal drehen. P(genau einmal rot) = ?",
                    "answers": [
                        "0,21",
                        "0,42",
                        "0,51",
                        "0,3"
                    ],
                    "correct": 1,
                    "explanation": "Zwei Pfade (rot-blau, blau-rot), Pfadadditionsregel: 0,21 + 0,21 = 0,42."
                },
                {
                    "id": "zufallmehrstufigk9l1u_mittel_4",
                    "category": "kurs_zufall_mehrstufig_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Eine Münze wird dreimal geworfen. P(dreimal Kopf) = ?",
                    "answers": [
                        "1/6",
                        "1/8",
                        "3/8",
                        "1/3"
                    ],
                    "correct": 1,
                    "explanation": "Pfadmultiplikationsregel: 1/2 · 1/2 · 1/2 = 1/8."
                }
            ],
            "schwer": [
                {
                    "id": "zufallmehrstufigk9l1u_schwer_1",
                    "category": "kurs_zufall_mehrstufig_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Eine Münze wird dreimal geworfen. P(genau zweimal Kopf) = ?",
                    "answers": [
                        "1/4",
                        "1/8",
                        "2/3",
                        "3/8"
                    ],
                    "correct": 3,
                    "explanation": "Drei Pfade (KKZ, KZK, ZKK) mit je 1/8, Pfadadditionsregel: 3 · 1/8 = 3/8."
                },
                {
                    "id": "zufallmehrstufigk9l1u_schwer_2",
                    "category": "kurs_zufall_mehrstufig_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Würfel wird zweimal geworfen. P(Augensumme 3) = ?",
                    "answers": [
                        "1/36",
                        "1/12",
                        "1/6",
                        "1/18"
                    ],
                    "correct": 3,
                    "explanation": "Pfade (1;2) und (2;1) mit je 1/36: 2/36 = 1/18."
                },
                {
                    "id": "zufallmehrstufigk9l1u_schwer_3",
                    "category": "kurs_zufall_mehrstufig_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Spieler trifft beim Freiwurf mit 0,8. Er wirft zweimal. P(genau ein Treffer) = ?",
                    "answers": [
                        "0,16",
                        "0,32",
                        "0,64",
                        "0,04"
                    ],
                    "correct": 1,
                    "explanation": "Pfade Treffer-Fehlwurf und Fehlwurf-Treffer: 0,8 · 0,2 + 0,2 · 0,8 = 0,32."
                },
                {
                    "id": "zufallmehrstufigk9l1u_schwer_4",
                    "category": "kurs_zufall_mehrstufig_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Aussage über ein vollständiges Baumdiagramm stimmt?",
                    "answers": [
                        "Alle Pfade ergeben zusammen 1",
                        "Jeder Pfad ist gleich wahrscheinlich",
                        "Alle Pfade ergeben zusammen 0,5",
                        "Jede Stufe hat genau zwei Äste"
                    ],
                    "correct": 0,
                    "explanation": "Die Pfade decken alle Ergebnisse ab, deshalb ist die Summe aller Pfadwahrscheinlichkeiten 1."
                }
            ]
        },
        "test": [
            {
                "id": "zufallmehrstufigk9l1_test_1",
                "category": "kurs_zufall_mehrstufig_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "mehrstufige_zufall",
                "difficulty": "leicht",
                "points": 10,
                "question": "An einem Pfad stehen die Wahrscheinlichkeiten p₁ und p₂. Pfadwahrscheinlichkeit?",
                "answers": [
                    "p₁ + p₂",
                    "p₁ − p₂",
                    "p₁ · p₂",
                    "p₁ : p₂"
                ],
                "correct": 2,
                "explanation": "Pfadmultiplikationsregel: Wahrscheinlichkeiten entlang eines Pfades werden multipliziert."
            },
            {
                "id": "zufallmehrstufigk9l1_test_2",
                "category": "kurs_zufall_mehrstufig_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "mehrstufige_zufall",
                "difficulty": "mittel",
                "points": 10,
                "question": "Eine Ampel zeigt mit 0,6 Rot. Du fährst an zwei unabhängigen Ampeln vorbei. P(beide rot) = ?",
                "answers": [
                    "1,2",
                    "0,36",
                    "0,6",
                    "0,24"
                ],
                "correct": 1,
                "explanation": "Pfadmultiplikationsregel: 0,6 · 0,6 = 0,36."
            },
            {
                "id": "zufallmehrstufigk9l1_test_3",
                "category": "kurs_zufall_mehrstufig_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "mehrstufige_zufall",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Würfel wird zweimal geworfen. P(zweimal dieselbe Zahl) = ?",
                "answers": [
                    "1/36",
                    "1/12",
                    "1/6",
                    "1/3"
                ],
                "correct": 2,
                "explanation": "Sechs Pfade (1;1) … (6;6) mit je 1/36: 6/36 = 1/6."
            },
            {
                "id": "zufallmehrstufigk9l1_test_4",
                "category": "kurs_zufall_mehrstufig_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "mehrstufige_zufall",
                "difficulty": "schwer",
                "points": 10,
                "question": "Glücksrad: gelb 1/4, grün 3/4. Zweimal drehen. P(beide Male dieselbe Farbe) = ?",
                "answers": [
                    "5/8",
                    "3/8",
                    "9/16",
                    "1/2"
                ],
                "correct": 0,
                "explanation": "Pfadadditionsregel: P(gelb, gelb) + P(grün, grün) = 1/16 + 9/16 = 10/16 = 5/8."
            },
            {
                "id": "zufallmehrstufigk9l1_test_5",
                "category": "kurs_zufall_mehrstufig_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "mehrstufige_zufall",
                "difficulty": "leicht",
                "points": 10,
                "question": "Die Pfadadditionsregel nutzt man, wenn …",
                "answers": [
                    "ein Ereignis nur einen einzigen Pfad hat",
                    "eine Astwahrscheinlichkeit größer als 1 ist",
                    "an einem Knoten genau drei Äste stehen",
                    "ein Ereignis aus mehreren Pfaden besteht"
                ],
                "correct": 3,
                "explanation": "Gehören mehrere Pfade zu einem Ereignis, werden ihre Wahrscheinlichkeiten addiert."
            },
            {
                "id": "zufallmehrstufigk9l1_test_6",
                "category": "kurs_zufall_mehrstufig_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "mehrstufige_zufall",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Würfel und eine Münze werden geworfen. P(6 und Kopf) = ?",
                "answers": [
                    "2/3",
                    "1/8",
                    "1/12",
                    "1/36"
                ],
                "correct": 2,
                "explanation": "Pfadmultiplikationsregel: 1/6 · 1/2 = 1/12."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "zufall_mehrstufig_k9_l2",
        "kurs": "zufall_mehrstufig_k9",
        "order": 2,
        "icon": "🎲",
        "title": "Ziehen und Gegenereignis",
        "kurz": "Mit und ohne Zurücklegen, „mindestens einmal“ über das Gegenereignis",
        "erklaerung": {
            "intro": "<b>Mit Zurücklegen</b> bleiben die Wahrscheinlichkeiten auf jeder Stufe gleich. <b>Ohne Zurücklegen</b> ändern sie sich: Auf der nächsten Stufe ist eine Kugel weniger in der Urne, der Nenner wird um 1 kleiner. Für „<b>mindestens einmal</b>“ rechnet man mit dem <b>Gegenereignis</b>: P(mindestens einmal) = 1 − P(keinmal).",
            "beispiele": [
                "🔴 Urne mit 3 roten und 2 blauen Kugeln, zweimal mit Zurücklegen: P(rot, rot) = 3/5 · 3/5 = 9/25",
                "✋ Dieselbe Urne ohne Zurücklegen: P(rot, rot) = 3/5 · 2/4 = 3/10",
                "🎯 P(mindestens eine 6 bei zwei Würfen) = 1 − 5/6 · 5/6 = 11/36",
                "⚠️ Gegenereignis von „mindestens einmal“ ist „keinmal“ – nicht „genau einmal“"
            ],
            "merksatz": "Ohne Zurücklegen: Nenner wird kleiner. Mindestens einmal = 1 − keinmal."
        },
        "uebung": {
            "leicht": [
                {
                    "id": "zufallmehrstufigk9l2u_leicht_1",
                    "category": "kurs_zufall_mehrstufig_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ziehen mit Zurücklegen: Was gilt für die zweite Stufe?",
                    "answers": [
                        "Der Nenner wird um 1 kleiner",
                        "Die Wahrscheinlichkeiten bleiben gleich",
                        "Der Zähler wird immer größer",
                        "Die Wahrscheinlichkeiten verdoppeln sich"
                    ],
                    "correct": 1,
                    "explanation": "Mit Zurücklegen ist die Urne vor jedem Zug gleich, also bleiben die Wahrscheinlichkeiten gleich."
                },
                {
                    "id": "zufallmehrstufigk9l2u_leicht_2",
                    "category": "kurs_zufall_mehrstufig_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Urne: 4 rote, 6 blaue Kugeln. Eine rote wird gezogen und nicht zurückgelegt. P(rot) beim 2. Zug?",
                    "answers": [
                        "1/3",
                        "2/5",
                        "3/10",
                        "4/9"
                    ],
                    "correct": 0,
                    "explanation": "Ohne Zurücklegen: noch 3 rote von 9 Kugeln, also 3/9 = 1/3."
                },
                {
                    "id": "zufallmehrstufigk9l2u_leicht_3",
                    "category": "kurs_zufall_mehrstufig_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Zwei Würfe: Was ist das Gegenereignis von „mindestens eine 6“?",
                    "answers": [
                        "genau eine 6",
                        "zweimal die 6",
                        "höchstens eine 6",
                        "keine einzige 6"
                    ],
                    "correct": 3,
                    "explanation": "Das Gegenereignis von „mindestens einmal“ ist „keinmal“."
                },
                {
                    "id": "zufallmehrstufigk9l2u_leicht_4",
                    "category": "kurs_zufall_mehrstufig_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Es gilt P(A) = 0,35. Wie groß ist P(Gegenereignis von A)?",
                    "answers": [
                        "0,35",
                        "1,35",
                        "0,75",
                        "0,65"
                    ],
                    "correct": 3,
                    "explanation": "P(Gegenereignis) = 1 − P(A) = 1 − 0,35 = 0,65."
                }
            ],
            "mittel": [
                {
                    "id": "zufallmehrstufigk9l2u_mittel_1",
                    "category": "kurs_zufall_mehrstufig_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Urne: 3 rote, 2 blaue Kugeln. Zweimal ohne Zurücklegen. P(blau, blau) = ?",
                    "answers": [
                        "1/10",
                        "4/25",
                        "1/5",
                        "2/9"
                    ],
                    "correct": 0,
                    "explanation": "Ohne Zurücklegen: 2/5 · 1/4 = 2/20 = 1/10."
                },
                {
                    "id": "zufallmehrstufigk9l2u_mittel_2",
                    "category": "kurs_zufall_mehrstufig_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Urne: 3 rote, 2 blaue Kugeln. Zweimal mit Zurücklegen. P(blau, blau) = ?",
                    "answers": [
                        "1/10",
                        "4/25",
                        "2/25",
                        "2/5"
                    ],
                    "correct": 1,
                    "explanation": "Mit Zurücklegen: 2/5 · 2/5 = 4/25."
                },
                {
                    "id": "zufallmehrstufigk9l2u_mittel_3",
                    "category": "kurs_zufall_mehrstufig_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Eine Münze wird dreimal geworfen. P(mindestens einmal Kopf) = ?",
                    "answers": [
                        "1/8",
                        "3/8",
                        "7/8",
                        "3/4"
                    ],
                    "correct": 2,
                    "explanation": "Gegenereignis „keinmal Kopf“: 1 − (1/2)³ = 1 − 1/8 = 7/8."
                },
                {
                    "id": "zufallmehrstufigk9l2u_mittel_4",
                    "category": "kurs_zufall_mehrstufig_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "In einer Tüte sind 5 Gummibärchen, 2 davon rot. Du nimmst zwei ohne Zurücklegen. P(kein rotes) = ?",
                    "answers": [
                        "9/25",
                        "2/5",
                        "3/10",
                        "1/10"
                    ],
                    "correct": 2,
                    "explanation": "Ohne Zurücklegen: 3/5 · 2/4 = 6/20 = 3/10."
                }
            ],
            "schwer": [
                {
                    "id": "zufallmehrstufigk9l2u_schwer_1",
                    "category": "kurs_zufall_mehrstufig_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Urne: 3 rote, 2 blaue Kugeln. Zwei ohne Zurücklegen. P(zwei verschiedene Farben) = ?",
                    "answers": [
                        "3/5",
                        "12/25",
                        "3/10",
                        "2/5"
                    ],
                    "correct": 0,
                    "explanation": "Pfadadditionsregel: 3/5 · 2/4 + 2/5 · 3/4 = 6/20 + 6/20 = 12/20 = 3/5."
                },
                {
                    "id": "zufallmehrstufigk9l2u_schwer_2",
                    "category": "kurs_zufall_mehrstufig_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie oft muss man mindestens würfeln, damit P(mindestens eine 6) über 50 % liegt?",
                    "answers": [
                        "3-mal",
                        "6-mal",
                        "5-mal",
                        "4-mal"
                    ],
                    "correct": 3,
                    "explanation": "1 − (5/6)ⁿ: bei n = 3 etwa 42 %, bei n = 4 etwa 51,8 % – also 4-mal."
                },
                {
                    "id": "zufallmehrstufigk9l2u_schwer_3",
                    "category": "kurs_zufall_mehrstufig_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Trefferquote 0,7; drei unabhängige Würfe. P(mindestens ein Treffer) = ?",
                    "answers": [
                        "0,343",
                        "0,973",
                        "0,027",
                        "0,91"
                    ],
                    "correct": 1,
                    "explanation": "Gegenereignis „kein Treffer“: 1 − 0,3³ = 1 − 0,027 = 0,973."
                },
                {
                    "id": "zufallmehrstufigk9l2u_schwer_4",
                    "category": "kurs_zufall_mehrstufig_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "mathe",
                    "topic": "mehrstufige_zufall",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "10 Lose, davon 2 Gewinne. Du ziehst zwei ohne Zurücklegen. P(mindestens ein Gewinn) = ?",
                    "answers": [
                        "17/45",
                        "9/25",
                        "28/45",
                        "1/45"
                    ],
                    "correct": 0,
                    "explanation": "Gegenereignis „zwei Nieten“: 1 − 8/10 · 7/9 = 1 − 28/45 = 17/45."
                }
            ]
        },
        "test": [
            {
                "id": "zufallmehrstufigk9l2_test_1",
                "category": "kurs_zufall_mehrstufig_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "mehrstufige_zufall",
                "difficulty": "leicht",
                "points": 10,
                "question": "Ziehen ohne Zurücklegen: Wie ändert sich der Nenner auf der 2. Stufe?",
                "answers": [
                    "Er bleibt immer gleich",
                    "Er wird um 1 größer",
                    "Er wird halbiert",
                    "Er wird um 1 kleiner"
                ],
                "correct": 3,
                "explanation": "Ohne Zurücklegen fehlt die gezogene Kugel, deshalb ist die Gesamtzahl um 1 kleiner."
            },
            {
                "id": "zufallmehrstufigk9l2_test_2",
                "category": "kurs_zufall_mehrstufig_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "mehrstufige_zufall",
                "difficulty": "mittel",
                "points": 10,
                "question": "Urne: 4 grüne, 2 gelbe Kugeln. Zwei ohne Zurücklegen. P(grün, grün) = ?",
                "answers": [
                    "2/5",
                    "4/9",
                    "1/3",
                    "3/5"
                ],
                "correct": 0,
                "explanation": "Ohne Zurücklegen: 4/6 · 3/5 = 12/30 = 2/5."
            },
            {
                "id": "zufallmehrstufigk9l2_test_3",
                "category": "kurs_zufall_mehrstufig_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "mehrstufige_zufall",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Würfel wird zweimal geworfen. P(keine 6) = ?",
                "answers": [
                    "11/36",
                    "5/6",
                    "25/36",
                    "1/36"
                ],
                "correct": 2,
                "explanation": "Pfadmultiplikationsregel: 5/6 · 5/6 = 25/36."
            },
            {
                "id": "zufallmehrstufigk9l2_test_4",
                "category": "kurs_zufall_mehrstufig_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "mehrstufige_zufall",
                "difficulty": "schwer",
                "points": 10,
                "question": "Ein Bauteil fällt mit 0,1 aus. Ein Gerät hat 3 unabhängige Bauteile. P(mindestens eines fällt aus) = ?",
                "answers": [
                    "0,3",
                    "0,271",
                    "0,001",
                    "0,729"
                ],
                "correct": 1,
                "explanation": "Gegenereignis „keins fällt aus“: 1 − 0,9³ = 1 − 0,729 = 0,271."
            },
            {
                "id": "zufallmehrstufigk9l2_test_5",
                "category": "kurs_zufall_mehrstufig_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "mehrstufige_zufall",
                "difficulty": "leicht",
                "points": 10,
                "question": "Warum rechnet man bei „mindestens einmal“ oft mit dem Gegenereignis?",
                "answers": [
                    "Es hat immer die Wahrscheinlichkeit 1/2",
                    "Es gilt nur beim Ziehen mit Zurücklegen",
                    "Es besteht nur aus einem Pfad",
                    "Es macht das Baumdiagramm größer"
                ],
                "correct": 2,
                "explanation": "„Keinmal“ ist nur ein Pfad – das ist schneller als viele Pfade zu addieren."
            },
            {
                "id": "zufallmehrstufigk9l2_test_6",
                "category": "kurs_zufall_mehrstufig_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "mathe",
                "topic": "mehrstufige_zufall",
                "difficulty": "schwer",
                "points": 10,
                "question": "Urne: 5 rote, 5 schwarze Kugeln. Dreimal ohne Zurücklegen. P(dreimal rot) = ?",
                "answers": [
                    "1/8",
                    "1/12",
                    "1/6",
                    "1/10"
                ],
                "correct": 1,
                "explanation": "Ohne Zurücklegen: 5/10 · 4/9 · 3/8 = 60/720 = 1/12."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "kommasetzung_k9_l1",
        "kurs": "kommasetzung_k9",
        "order": 1,
        "icon": "✏️",
        "title": "Kommaregeln: die Grundlagen",
        "kurz": "Aufzählung, Haupt- und Nebensatz, Relativsatz, Apposition und Einschub",
        "erklaerung": {
            "intro": "Ein Komma steht <b>zwischen Aufzählungsgliedern</b>, aber nicht vor dem verbindenden <b>und/oder</b>. Es trennt <b>Haupt- und Nebensatz</b> (Nebensatz: Einleitewort wie dass, weil, wenn, ob – gebeugtes Verb am Ende). <b>Relativsätze</b> (der, die, das, welcher) werden immer abgetrennt. <b>Appositionen</b> und <b>Einschübe</b> schließt man mitten im Satz mit <b>zwei Kommas</b> ein.",
            "beispiele": [
                "🍎 Wir kaufen Äpfel, Birnen und Bananen.",
                "🔗 Ich bleibe zu Hause, weil ich krank bin.",
                "🐶 Der Hund, der dort bellt, gehört Tim.",
                "📌 Frau Kaya, unsere Klassenlehrerin, ist heute krank."
            ],
            "merksatz": "Nebensatz, Relativsatz, Einschub: immer mit Komma – mitten im Satz mit zwei."
        },
        "uebung": {
            "leicht": [
                {
                    "id": "kommasetzungk9l1u_leicht_1",
                    "category": "kurs_kommasetzung_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Ich mag Nudeln, Reis, und Kartoffeln.",
                        "Ich mag, Nudeln, Reis und Kartoffeln.",
                        "Ich mag Nudeln, Reis und Kartoffeln.",
                        "Ich mag Nudeln Reis, und Kartoffeln."
                    ],
                    "correct": 2,
                    "explanation": "Aufzählung: Komma zwischen den Gliedern, aber nicht vor „und“."
                },
                {
                    "id": "kommasetzungk9l1u_leicht_2",
                    "category": "kurs_kommasetzung_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wo steht das Komma? „Ich komme mit wenn es nicht regnet.“",
                    "answers": [
                        "Ich komme, mit wenn es nicht regnet.",
                        "Ich komme mit wenn, es nicht regnet.",
                        "Ich komme mit wenn es, nicht regnet.",
                        "Ich komme mit, wenn es nicht regnet."
                    ],
                    "correct": 3,
                    "explanation": "Der Nebensatz beginnt mit „wenn“ – davor steht das Komma."
                },
                {
                    "id": "kommasetzungk9l1u_leicht_3",
                    "category": "kurs_kommasetzung_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Woran erkennst du meist einen Nebensatz?",
                    "answers": [
                        "Er beginnt immer mit „und“",
                        "Das gebeugte Verb steht am Ende",
                        "Er steht immer am Satzanfang",
                        "Er hat nie ein eigenes Subjekt"
                    ],
                    "correct": 1,
                    "explanation": "Im Nebensatz steht das gebeugte Verb am Ende; er wird mit Komma abgetrennt."
                },
                {
                    "id": "kommasetzungk9l1u_leicht_4",
                    "category": "kurs_kommasetzung_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "„Das Buch, ___ ich gerade lese, ist spannend.“ Welches Wort leitet den Relativsatz ein?",
                    "answers": [
                        "dass",
                        "weil",
                        "wenn",
                        "das"
                    ],
                    "correct": 3,
                    "explanation": "Das Relativpronomen „das“ bezieht sich auf „das Buch“; der Relativsatz steht zwischen Kommas."
                }
            ],
            "mittel": [
                {
                    "id": "kommasetzungk9l1u_mittel_1",
                    "category": "kurs_kommasetzung_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Der Film, den wir gesehen haben war lustig.",
                        "Der Film, den wir gesehen haben, war lustig.",
                        "Der Film den wir gesehen haben, war lustig.",
                        "Der Film den, wir gesehen haben, war lustig."
                    ],
                    "correct": 1,
                    "explanation": "Ein Relativsatz mitten im Satz wird vorn und hinten mit Komma abgetrennt."
                },
                {
                    "id": "kommasetzungk9l1u_mittel_2",
                    "category": "kurs_kommasetzung_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Mein Onkel, ein guter Koch, lädt uns ein.",
                        "Mein Onkel ein guter Koch, lädt uns ein.",
                        "Mein Onkel, ein guter Koch lädt uns ein.",
                        "Mein, Onkel ein guter Koch, lädt uns ein."
                    ],
                    "correct": 0,
                    "explanation": "Die Apposition „ein guter Koch“ wird mit zwei Kommas eingeschlossen."
                },
                {
                    "id": "kommasetzungk9l1u_mittel_3",
                    "category": "kurs_kommasetzung_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Obwohl, es spät war spielten wir weiter.",
                        "Obwohl es spät war, spielten wir weiter.",
                        "Obwohl es spät war spielten, wir weiter.",
                        "Obwohl es spät, war spielten wir weiter."
                    ],
                    "correct": 1,
                    "explanation": "Der vorangestellte Nebensatz endet nach dem gebeugten Verb „war“ – dort steht das Komma."
                },
                {
                    "id": "kommasetzungk9l1u_mittel_4",
                    "category": "kurs_kommasetzung_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was ist eine Apposition?",
                    "answers": [
                        "Ein Nebensatz mit „dass“ am Anfang",
                        "Ein Verb am Ende eines Hauptsatzes",
                        "Ein nachgestellter Beisatz zu einem Nomen",
                        "Eine Aufzählung ohne Konjunktion"
                    ],
                    "correct": 2,
                    "explanation": "Eine Apposition erklärt ein Nomen näher (Paul, mein Freund, …) und steht zwischen Kommas."
                }
            ],
            "schwer": [
                {
                    "id": "kommasetzungk9l1u_schwer_1",
                    "category": "kurs_kommasetzung_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Kommas fehlen? „Lena die in meine Klasse geht sagt dass sie morgen kommt.“",
                    "answers": [
                        "3",
                        "2",
                        "4",
                        "1"
                    ],
                    "correct": 0,
                    "explanation": "Lena, die in meine Klasse geht, sagt, dass … – Relativsatz zwei Kommas, dass-Satz eins."
                },
                {
                    "id": "kommasetzungk9l1u_schwer_2",
                    "category": "kurs_kommasetzung_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Er hat als er nach Hause kam, sofort gegessen.",
                        "Er hat, als er nach Hause kam, sofort gegessen.",
                        "Er hat, als er nach Hause kam sofort gegessen.",
                        "Er hat als, er nach Hause kam, sofort gegessen."
                    ],
                    "correct": 1,
                    "explanation": "Ein eingeschobener Nebensatz wird auf beiden Seiten mit Komma abgetrennt."
                },
                {
                    "id": "kommasetzungk9l1u_schwer_3",
                    "category": "kurs_kommasetzung_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wo steht das Komma? „Ich lese gern Krimis vor allem im Urlaub.“",
                    "answers": [
                        "Ich lese gern Krimis, vor allem im Urlaub.",
                        "Ich lese gern, Krimis vor allem im Urlaub.",
                        "Ich lese gern Krimis vor allem, im Urlaub.",
                        "Ich lese, gern Krimis vor allem im Urlaub."
                    ],
                    "correct": 0,
                    "explanation": "Nachgestellte Zusätze mit „vor allem, besonders, und zwar“ werden mit Komma abgetrennt."
                },
                {
                    "id": "kommasetzungk9l1u_schwer_4",
                    "category": "kurs_kommasetzung_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz braucht KEIN zusätzliches Komma?",
                    "answers": [
                        "Ich weiß dass du recht hast.",
                        "Der Junge der dort steht ist neu.",
                        "Wir spielen Fußball und Tennis.",
                        "Sie lacht weil er stolpert."
                    ],
                    "correct": 2,
                    "explanation": "Vor „und“ in einer einfachen Aufzählung steht kein Komma; die anderen Sätze enthalten Nebensätze."
                }
            ]
        },
        "test": [
            {
                "id": "kommasetzungk9l1_test_1",
                "category": "kurs_kommasetzung_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "kommasetzung",
                "difficulty": "leicht",
                "points": 10,
                "question": "Was gilt für Relativsätze?",
                "answers": [
                    "Sie stehen grundsätzlich ohne Komma",
                    "Komma steht nur am Ende des Satzes",
                    "Komma steht nur vor „welcher“",
                    "Sie werden immer mit Komma abgetrennt"
                ],
                "correct": 3,
                "explanation": "Relativsätze sind Nebensätze und werden immer durch Komma abgetrennt."
            },
            {
                "id": "kommasetzungk9l1_test_2",
                "category": "kurs_kommasetzung_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "kommasetzung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Ich stand auf, duschte und frühstückte.",
                    "Ich stand auf duschte, und frühstückte.",
                    "Ich stand, auf duschte und frühstückte.",
                    "Ich stand auf, duschte, und frühstückte."
                ],
                "correct": 0,
                "explanation": "Aufzählung von Handlungen: Komma zwischen den Gliedern, nicht vor „und“."
            },
            {
                "id": "kommasetzungk9l1_test_3",
                "category": "kurs_kommasetzung_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "kommasetzung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wo steht das Komma? „Ich weiß nicht ob er kommt.“",
                "answers": [
                    "Ich weiß nicht, ob er kommt.",
                    "Ich weiß, nicht ob er kommt.",
                    "Ich, weiß nicht ob er kommt.",
                    "Ich weiß nicht ob, er kommt."
                ],
                "correct": 0,
                "explanation": "Der Nebensatz beginnt mit „ob“ – davor steht das Komma."
            },
            {
                "id": "kommasetzungk9l1_test_4",
                "category": "kurs_kommasetzung_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "kommasetzung",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Berlin, die Hauptstadt Deutschlands hat viele Museen.",
                    "Berlin die Hauptstadt, Deutschlands hat viele Museen.",
                    "Berlin, die Hauptstadt Deutschlands, hat viele Museen.",
                    "Berlin die Hauptstadt Deutschlands, hat viele Museen."
                ],
                "correct": 2,
                "explanation": "Die Apposition „die Hauptstadt Deutschlands“ wird vorn und hinten mit Komma abgetrennt."
            },
            {
                "id": "kommasetzungk9l1_test_5",
                "category": "kurs_kommasetzung_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "kommasetzung",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wo steht KEIN Komma?",
                "answers": [
                    "Vor einem Relativsatz",
                    "Vor „und“ in einer Aufzählung",
                    "Vor „dass“ im Nebensatz",
                    "Nach einer Apposition im Satz"
                ],
                "correct": 1,
                "explanation": "In einer einfachen Aufzählung ersetzt „und“ das Komma."
            },
            {
                "id": "kommasetzungk9l1_test_6",
                "category": "kurs_kommasetzung_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "kommasetzung",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie viele Kommas fehlen? „Mia meine Schwester sagt dass der Kuchen den du gebacken hast lecker ist.“",
                "answers": [
                    "4",
                    "3",
                    "6",
                    "5"
                ],
                "correct": 3,
                "explanation": "Mia, meine Schwester, sagt, dass der Kuchen, den du gebacken hast, lecker ist."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "kommasetzung_k9_l2",
        "kurs": "kommasetzung_k9",
        "order": 2,
        "icon": "📝",
        "title": "Infinitiv, Partizip und Anrede",
        "kurz": "Infinitiv- und Partizipgruppen, kein Komma vor und/oder, Anreden und Ausrufe",
        "erklaerung": {
            "intro": "<b>Infinitivgruppen</b> trennt man mit Komma ab, wenn sie mit <b>um, ohne, statt, anstatt, außer, als</b> beginnen, von einem <b>Nomen</b> abhängen oder durch ein <b>hinweisendes Wort</b> (es, daran, darauf) angekündigt werden. In allen anderen Fällen ist das Komma freigestellt (<b>Kann-Komma</b>). <b>Partizipgruppen</b> brauchen ein Komma, wenn ein hinweisendes Wort (so) sie aufnimmt oder sie als <b>Einschub</b> den Satz unterbrechen. <b>Kein Komma</b> steht vor und/oder bei Aufzählungen und gleichrangigen Nebensätzen. Verbindet und/oder zwei Hauptsätze, ist das Komma freigestellt. <b>Anreden</b> und <b>Ausrufe</b> werden abgetrennt.",
            "beispiele": [
                "🎯 Er trainiert jeden Tag, um fit zu bleiben.",
                "👉 Sie freut sich darauf, ihre Oma zu besuchen.",
                "🏃 Mein Bruder, vom Training erschöpft, schlief sofort ein.",
                "👋 Kommst du heute, Jonas, zum Training?"
            ],
            "merksatz": "um/ohne/statt … zu: Komma! Anrede: Komma! Aufzählung mit und: kein Komma."
        },
        "uebung": {
            "leicht": [
                {
                    "id": "kommasetzungk9l2u_leicht_1",
                    "category": "kurs_kommasetzung_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wo steht das Komma? „Er lernt viel um gute Noten zu bekommen.“",
                    "answers": [
                        "Er lernt, viel um gute Noten zu bekommen.",
                        "Er lernt viel um, gute Noten zu bekommen.",
                        "Er lernt viel um gute Noten, zu bekommen.",
                        "Er lernt viel, um gute Noten zu bekommen."
                    ],
                    "correct": 3,
                    "explanation": "Infinitivgruppe mit „um … zu“: Komma ist Pflicht."
                },
                {
                    "id": "kommasetzungk9l2u_leicht_2",
                    "category": "kurs_kommasetzung_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Tim hilfst, du mir bitte?",
                        "Tim, hilfst du mir bitte?",
                        "Tim hilfst du mir bitte?",
                        "Tim hilfst du, mir bitte?"
                    ],
                    "correct": 1,
                    "explanation": "Eine Anrede wird mit Komma vom Rest des Satzes abgetrennt."
                },
                {
                    "id": "kommasetzungk9l2u_leicht_3",
                    "category": "kurs_kommasetzung_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Einleitung macht das Komma vor einer Infinitivgruppe zur Pflicht?",
                    "answers": [
                        "sehr … zu",
                        "nicht … zu",
                        "statt … zu",
                        "gern … zu"
                    ],
                    "correct": 2,
                    "explanation": "Mit um, ohne, statt, anstatt, außer, als eingeleitete Infinitivgruppen stehen immer mit Komma."
                },
                {
                    "id": "kommasetzungk9l2u_leicht_4",
                    "category": "kurs_kommasetzung_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Sie spielt sowohl Geige, als auch Klavier.",
                        "Sie spielt sowohl Geige als auch Klavier.",
                        "Sie spielt, sowohl Geige als auch Klavier.",
                        "Sie spielt sowohl, Geige als auch Klavier."
                    ],
                    "correct": 1,
                    "explanation": "Bei „sowohl … als auch“ steht kein Komma – wie bei „und“."
                }
            ],
            "mittel": [
                {
                    "id": "kommasetzungk9l2u_mittel_1",
                    "category": "kurs_kommasetzung_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wo steht das Komma? „Ich denke daran morgen das Buch mitzubringen.“",
                    "answers": [
                        "Ich denke, daran morgen das Buch mitzubringen.",
                        "Ich denke daran, morgen das Buch mitzubringen.",
                        "Ich denke daran morgen, das Buch mitzubringen.",
                        "Ich, denke daran morgen das Buch mitzubringen."
                    ],
                    "correct": 1,
                    "explanation": "Das hinweisende Wort „daran“ kündigt die Infinitivgruppe an – Komma ist Pflicht."
                },
                {
                    "id": "kommasetzungk9l2u_mittel_2",
                    "category": "kurs_kommasetzung_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wo steht das Komma? „Sie hatte die Idee ein Picknick zu machen.“",
                    "answers": [
                        "Sie hatte, die Idee ein Picknick zu machen.",
                        "Sie hatte die Idee ein Picknick, zu machen.",
                        "Sie hatte die Idee, ein Picknick zu machen.",
                        "Sie, hatte die Idee ein Picknick zu machen."
                    ],
                    "correct": 2,
                    "explanation": "Die Infinitivgruppe hängt vom Nomen „Idee“ ab – Komma ist Pflicht."
                },
                {
                    "id": "kommasetzungk9l2u_mittel_3",
                    "category": "kurs_kommasetzung_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Ich hoffe, dass du kommst, und dass du Musik mitbringst.",
                        "Ich hoffe dass du kommst und, dass du Musik mitbringst.",
                        "Ich hoffe, dass du kommst und dass du Musik mitbringst.",
                        "Ich hoffe, dass du kommst und dass, du Musik mitbringst."
                    ],
                    "correct": 2,
                    "explanation": "Gleichrangige Nebensätze, die mit „und“ verbunden sind, trennt man nicht durch Komma."
                },
                {
                    "id": "kommasetzungk9l2u_mittel_4",
                    "category": "kurs_kommasetzung_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Ich glaube, Frau Berg, das ist falsch.",
                        "Ich glaube Frau Berg, das ist falsch.",
                        "Ich glaube, Frau Berg das ist falsch.",
                        "Ich, glaube Frau Berg das ist falsch."
                    ],
                    "correct": 0,
                    "explanation": "Eine Anrede mitten im Satz wird vorn und hinten mit Komma abgetrennt."
                }
            ],
            "schwer": [
                {
                    "id": "kommasetzungk9l2u_schwer_1",
                    "category": "kurs_kommasetzung_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Der Läufer, vor Freude jubelnd lief über die Ziellinie.",
                        "Der Läufer vor Freude, jubelnd lief über die Ziellinie.",
                        "Der Läufer vor Freude jubelnd, lief über die Ziellinie.",
                        "Der Läufer, vor Freude jubelnd, lief über die Ziellinie."
                    ],
                    "correct": 3,
                    "explanation": "Eine eingeschobene Partizipgruppe nach dem Bezugswort wird mit zwei Kommas eingeschlossen."
                },
                {
                    "id": "kommasetzungk9l2u_schwer_2",
                    "category": "kurs_kommasetzung_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Er sagte, dass er müde sei, und ging ins Bett.",
                        "Er sagte, dass er müde sei und ging ins Bett.",
                        "Er sagte dass er müde sei, und ging ins Bett.",
                        "Er sagte, dass er, müde sei und ging ins Bett."
                    ],
                    "correct": 0,
                    "explanation": "Der dass-Satz muss geschlossen werden – deshalb steht hier vor „und“ ein Komma."
                },
                {
                    "id": "kommasetzungk9l2u_schwer_3",
                    "category": "kurs_kommasetzung_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wo steht das Komma? „Statt zu lernen spielte er am Handy.“",
                    "answers": [
                        "Statt zu lernen, spielte er am Handy.",
                        "Statt, zu lernen spielte er am Handy.",
                        "Statt zu, lernen spielte er am Handy.",
                        "Statt zu lernen spielte, er am Handy."
                    ],
                    "correct": 0,
                    "explanation": "Infinitivgruppe mit „statt … zu“: Komma ist Pflicht, auch am Satzanfang."
                },
                {
                    "id": "kommasetzungk9l2u_schwer_4",
                    "category": "kurs_kommasetzung_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "kommasetzung",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist richtig?",
                    "answers": [
                        "Laut singend so, lief sie durch den Park.",
                        "Laut singend, so lief sie durch den Park.",
                        "Laut, singend so lief sie durch den Park.",
                        "Laut singend so lief, sie durch den Park."
                    ],
                    "correct": 1,
                    "explanation": "Wird die Partizipgruppe durch „so“ wieder aufgenommen, steht davor ein Komma."
                }
            ]
        },
        "test": [
            {
                "id": "kommasetzungk9l2_test_1",
                "category": "kurs_kommasetzung_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "kommasetzung",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wo steht das Komma? „Sie ging ohne sich zu verabschieden.“",
                "answers": [
                    "Sie ging ohne, sich zu verabschieden.",
                    "Sie ging, ohne sich zu verabschieden.",
                    "Sie, ging ohne sich zu verabschieden.",
                    "Sie ging ohne sich, zu verabschieden."
                ],
                "correct": 1,
                "explanation": "Infinitivgruppe mit „ohne … zu“: Komma ist Pflicht."
            },
            {
                "id": "kommasetzungk9l2_test_2",
                "category": "kurs_kommasetzung_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "kommasetzung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Hurra wir, haben endlich gewonnen!",
                    "Hurra wir haben, endlich gewonnen!",
                    "Hurra wir haben endlich, gewonnen!",
                    "Hurra, wir haben endlich gewonnen!"
                ],
                "correct": 3,
                "explanation": "Ein betonter Ausruf am Satzanfang wird mit Komma abgetrennt."
            },
            {
                "id": "kommasetzungk9l2_test_3",
                "category": "kurs_kommasetzung_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "kommasetzung",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Satz ist richtig?",
                "answers": [
                    "Wir fahren entweder mit dem Bus, oder mit dem Rad.",
                    "Wir fahren, entweder mit dem Bus oder mit dem Rad.",
                    "Wir fahren entweder mit dem Bus oder mit dem Rad.",
                    "Wir fahren entweder, mit dem Bus oder mit dem Rad."
                ],
                "correct": 2,
                "explanation": "Bei „entweder … oder“ zwischen Satzteilen steht kein Komma."
            },
            {
                "id": "kommasetzungk9l2_test_4",
                "category": "kurs_kommasetzung_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "kommasetzung",
                "difficulty": "schwer",
                "points": 10,
                "question": "In welchem Satz fehlt ein Pflichtkomma?",
                "answers": [
                    "Wir kaufen Brot, Butter und Käse.",
                    "Sie spielt sowohl Tennis als auch Golf.",
                    "Ich lese weder Krimis noch Comics.",
                    "Er rannte los um den Bus zu erreichen."
                ],
                "correct": 3,
                "explanation": "Vor „um … zu“ muss ein Komma stehen: Er rannte los, um den Bus zu erreichen."
            },
            {
                "id": "kommasetzungk9l2_test_5",
                "category": "kurs_kommasetzung_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "kommasetzung",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wann steht vor „und“ KEIN Komma?",
                "answers": [
                    "In einer einfachen Aufzählung",
                    "Wenn davor ein Nebensatz endet",
                    "Wenn davor eine Apposition endet",
                    "Wenn davor ein Relativsatz endet"
                ],
                "correct": 0,
                "explanation": "„und“ ersetzt in Aufzählungen das Komma; endet davor ein Nebensatz oder Einschub, braucht man es trotzdem."
            },
            {
                "id": "kommasetzungk9l2_test_6",
                "category": "kurs_kommasetzung_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "kommasetzung",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie viele Kommas fehlen? „Lea ich gehe jetzt los um den Zug zu erreichen der um acht fährt.“",
                "answers": [
                    "3",
                    "2",
                    "4",
                    "1"
                ],
                "correct": 0,
                "explanation": "Lea, ich gehe jetzt los, um den Zug zu erreichen, der um acht fährt."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "drama_k9_l1",
        "kurs": "drama_k9",
        "order": 1,
        "icon": "📜",
        "title": "Merkmale des Dramas",
        "kurz": "Akt, Szene, Dialog, Konflikt und Aufbau nach Freytag",
        "erklaerung": {
            "intro": "Ein <b>Drama</b> ist für die Bühne geschrieben. Es gliedert sich in <b>Akte</b> und <b>Szenen</b>; die Handlung entsteht fast nur durch <b>Dialog</b> und <b>Monolog</b> der Figuren – einen Erzähler gibt es in der Regel nicht. <b>Regieanweisungen</b> sagen, wie gesprochen und gespielt wird. Im Mittelpunkt steht ein <b>Konflikt</b>, der sich aus der <b>Figurenkonstellation</b> ergibt. Nach <b>Freytag</b> hat das klassische Drama fünf Teile: <b>Exposition</b>, <b>steigende Handlung</b>, <b>Höhepunkt/Wendepunkt</b>, <b>fallende Handlung</b>, <b>Katastrophe</b> (Tragödie) bzw. <b>Lösung</b> (Komödie).",
            "beispiele": [
                "🎬 Akt = großer Abschnitt; Szene = kleinere Einheit, meist neu, wenn Figuren auf- oder abtreten.",
                "🗣️ Dialog = Gespräch mehrerer Figuren; Monolog = eine Figur spricht allein und zeigt ihre Gedanken.",
                "📝 Regieanweisung: LEA (leise, dreht sich weg): Ist schon gut.",
                "📈 Freytag: Exposition → steigende Handlung → Höhepunkt → fallende Handlung → Katastrophe/Lösung."
            ],
            "merksatz": "Drama = Konflikt in Dialogen, gegliedert in Akte und Szenen, aufgebaut wie eine Pyramide."
        },
        "uebung": {
            "leicht": [
                {
                    "id": "dramak9l1u_leicht_1",
                    "category": "kurs_drama_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie heißt ein großer Hauptabschnitt eines Dramas?",
                    "answers": [
                        "Strophe",
                        "Kapitel",
                        "Akt",
                        "Vers"
                    ],
                    "correct": 2,
                    "explanation": "Dramen gliedern sich in Akte und diese in Szenen. Strophe und Vers gehören zur Lyrik, Kapitel zur Erzählung."
                },
                {
                    "id": "dramak9l1u_leicht_2",
                    "category": "kurs_drama_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ist ein Monolog?",
                    "answers": [
                        "Zwei Figuren streiten sich",
                        "Eine Figur spricht allein",
                        "Ein Erzähler fasst zusammen",
                        "Alle Figuren singen gemeinsam"
                    ],
                    "correct": 1,
                    "explanation": "Im Monolog spricht eine Figur allein und macht ihre Gedanken und Gefühle hörbar."
                },
                {
                    "id": "dramak9l1u_leicht_3",
                    "category": "kurs_drama_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wozu dienen Regieanweisungen?",
                    "answers": [
                        "Sie nennen die Moral des Stücks",
                        "Sie fassen den Inhalt zusammen",
                        "Sie stellen den Autor vor",
                        "Sie zeigen, wie gespielt wird"
                    ],
                    "correct": 3,
                    "explanation": "Regieanweisungen (Nebentext) geben Hinweise zu Gestik, Mimik, Tonfall, Ort und Auftritten."
                },
                {
                    "id": "dramak9l1u_leicht_4",
                    "category": "kurs_drama_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Mit welchem Teil beginnt ein Drama nach Freytag?",
                    "answers": [
                        "Exposition",
                        "Höhepunkt",
                        "Katastrophe",
                        "fallende Handlung"
                    ],
                    "correct": 0,
                    "explanation": "Die Exposition steht am Anfang: Sie stellt Figuren, Ort, Zeit und Ausgangslage vor."
                }
            ],
            "mittel": [
                {
                    "id": "dramak9l1u_mittel_1",
                    "category": "kurs_drama_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was geschieht in der Exposition?",
                    "answers": [
                        "Der Konflikt wird endgültig gelöst",
                        "Die Spannung erreicht ihren Gipfel",
                        "Die Hauptfigur scheitert endgültig",
                        "Figuren und Ausgangslage werden vorgestellt"
                    ],
                    "correct": 3,
                    "explanation": "Die Exposition führt in die Handlung ein und legt den Konflikt an; gelöst wird er erst am Ende."
                },
                {
                    "id": "dramak9l1u_mittel_2",
                    "category": "kurs_drama_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was zeigt eine Figurenkonstellation?",
                    "answers": [
                        "Die Beziehungen der Figuren zueinander",
                        "Die Reihenfolge der Szenen im Stück",
                        "Die Anzahl der Zuschauer im Saal",
                        "Die Länge der einzelnen Akte"
                    ],
                    "correct": 0,
                    "explanation": "Die Figurenkonstellation beschreibt, wie Figuren zueinander stehen, z. B. Freunde, Gegner, Abhängige."
                },
                {
                    "id": "dramak9l1u_mittel_3",
                    "category": "kurs_drama_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wann beginnt meist eine neue Szene?",
                    "answers": [
                        "Wenn eine Figur eine Frage stellt",
                        "Wenn ein Satz mit „!“ endet",
                        "Wenn eine Figur auf- oder abtritt",
                        "Wenn eine Regieanweisung folgt"
                    ],
                    "correct": 2,
                    "explanation": "Ein neuer Auftritt oder Abgang verändert die Figurenzahl auf der Bühne und markiert meist eine neue Szene."
                },
                {
                    "id": "dramak9l1u_mittel_4",
                    "category": "kurs_drama_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie endet eine Tragödie im Unterschied zur Komödie?",
                    "answers": [
                        "Mit mehr Akten statt weniger Szenen",
                        "Mit einer Katastrophe statt einer Lösung",
                        "Mit einem Erzähler statt mit Figuren",
                        "Mit Regieanweisungen statt mit Dialog"
                    ],
                    "correct": 1,
                    "explanation": "Die Tragödie endet in der Katastrophe (oft Untergang der Hauptfigur), die Komödie mit einer glücklichen Lösung."
                }
            ],
            "schwer": [
                {
                    "id": "dramak9l1u_schwer_1",
                    "category": "kurs_drama_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "TOM (wütend): Du hast es versprochen! – MIA (schaut zu Boden): Ich weiß. – Was verrät die Regieanweisung über Mia?",
                    "answers": [
                        "Sie ist stolz auf ihr Verhalten",
                        "Sie freut sich über Toms Ärger",
                        "Sie hat Tom gar nicht gehört",
                        "Sie fühlt sich schuldig oder unsicher"
                    ],
                    "correct": 3,
                    "explanation": "Zu Boden schauen ist Körpersprache für Scham oder Unsicherheit; Regieanweisungen zeigen so innere Zustände."
                },
                {
                    "id": "dramak9l1u_schwer_2",
                    "category": "kurs_drama_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Auf welcher Stufe nach Freytag verschärft sich der Konflikt bis zur Entscheidung?",
                    "answers": [
                        "Exposition",
                        "steigende Handlung",
                        "fallende Handlung",
                        "Lösung"
                    ],
                    "correct": 1,
                    "explanation": "In der steigenden Handlung spitzt sich der Konflikt zu, bis er im Höhepunkt kippt."
                },
                {
                    "id": "dramak9l1u_schwer_3",
                    "category": "kurs_drama_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was bedeutet „Wendepunkt“ im Drama?",
                    "answers": [
                        "Das Geschehen nimmt eine entscheidende Richtung",
                        "Eine neue Figur tritt zum allerersten Mal auf",
                        "Der Vorhang fällt am Ende zum letzten Mal",
                        "Das Publikum geht nach dem Akt in die Pause"
                    ],
                    "correct": 0,
                    "explanation": "Am Höhepunkt/Wendepunkt fällt die Entscheidung; danach läuft die Handlung auf das Ende zu."
                },
                {
                    "id": "dramak9l1u_schwer_4",
                    "category": "kurs_drama_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Worin unterscheidet sich ein Drama von einer Erzählung?",
                    "answers": [
                        "Im Drama gibt es keine Figuren",
                        "Eine Erzählung hat nie einen Konflikt",
                        "Im Drama fehlt meist ein Erzähler",
                        "Eine Erzählung enthält nie Dialoge"
                    ],
                    "correct": 2,
                    "explanation": "Im Drama sprechen die Figuren direkt; Informationen kommen aus Figurenrede und Regieanweisungen, nicht von einem Erzähler."
                }
            ]
        },
        "test": [
            {
                "id": "dramak9l1_test_1",
                "category": "kurs_drama_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "drama",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie nennt man das Gespräch zwischen zwei oder mehr Figuren?",
                "answers": [
                    "Monolog",
                    "Regieanweisung",
                    "Exposition",
                    "Dialog"
                ],
                "correct": 3,
                "explanation": "Ein Dialog ist Wechselrede zwischen Figuren; im Monolog spricht nur eine Figur."
            },
            {
                "id": "dramak9l1_test_2",
                "category": "kurs_drama_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "drama",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welcher Teil steht in der Mitte der Freytag-Pyramide?",
                "answers": [
                    "Exposition",
                    "Katastrophe",
                    "Höhepunkt",
                    "Lösung"
                ],
                "correct": 2,
                "explanation": "Der Höhepunkt (Wendepunkt) bildet die Spitze in der Mitte; davor steigt, danach fällt die Handlung."
            },
            {
                "id": "dramak9l1_test_3",
                "category": "kurs_drama_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "drama",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Angabe ist eine Regieanweisung?",
                "answers": [
                    "(lacht nervös und steht auf)",
                    "„Ich komme morgen wieder.“",
                    "Titel: Der Streit",
                    "LEA: Bist du sicher?"
                ],
                "correct": 0,
                "explanation": "Regieanweisungen stehen meist in Klammern oder kursiv und beschreiben Handlung, Gestik oder Tonfall."
            },
            {
                "id": "dramak9l1_test_4",
                "category": "kurs_drama_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "drama",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was passiert in der fallenden Handlung?",
                "answers": [
                    "Die Figuren werden erstmals vorgestellt",
                    "Die Folgen des Wendepunkts zeigen sich",
                    "Der Konflikt entsteht ganz neu",
                    "Der Autor erklärt seine Absicht"
                ],
                "correct": 1,
                "explanation": "Nach dem Höhepunkt entwickeln sich die Folgen der Entscheidung; oft gibt es noch eine Verzögerung vor dem Ende."
            },
            {
                "id": "dramak9l1_test_5",
                "category": "kurs_drama_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "drama",
                "difficulty": "schwer",
                "points": 10,
                "question": "LEA (allein auf der Bühne): Soll ich es ihm sagen? Oder lieber schweigen? – Was liegt vor?",
                "answers": [
                    "Monolog mit innerem Konflikt",
                    "Dialog mit äußerem Konflikt",
                    "Regieanweisung ohne Figurenrede",
                    "Exposition mit mehreren Figuren"
                ],
                "correct": 0,
                "explanation": "Lea spricht allein (Monolog) und schwankt zwischen zwei Möglichkeiten – das ist ein innerer Konflikt."
            },
            {
                "id": "dramak9l1_test_6",
                "category": "kurs_drama_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "drama",
                "difficulty": "schwer",
                "points": 10,
                "question": "Zwei Freunde wollen dieselbe Rolle in der Schul-AG. Welcher Konflikt ist das?",
                "answers": [
                    "Ein Konflikt nur im Bühnenbild",
                    "Ein Konflikt zwischen Akt und Szene",
                    "Ein Konflikt ohne beteiligte Figuren",
                    "Ein äußerer Konflikt zwischen Figuren"
                ],
                "correct": 3,
                "explanation": "Wenn Figuren gegensätzliche Ziele verfolgen, entsteht ein äußerer (zwischenmenschlicher) Konflikt."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "drama_k9_l2",
        "kurs": "drama_k9",
        "order": 2,
        "icon": "✍️",
        "title": "Szenenanalyse schreiben",
        "kurz": "Einordnen, Gespräch untersuchen, deuten und belegen",
        "erklaerung": {
            "intro": "Eine <b>Szenenanalyse</b> untersucht einen Ausschnitt genau. In der <b>Einleitung</b> nennst du Titel, Autor/in, Textart, Erscheinungsjahr, Thema und die <b>Einordnung</b> der Szene in den Handlungsverlauf. Dann fasst du den <b>Inhalt</b> knapp im Präsens zusammen. Im <b>Hauptteil</b> untersuchst du <b>Gesprächsverlauf</b>, <b>Redeanteile</b>, <b>sprachliche Mittel</b> sowie <b>Regieanweisungen</b> und <b>Körpersprache</b> – und <b>deutest</b>, was sie über Figuren und Konflikt zeigen. Jede Aussage belegst du mit Zitat und <b>Zeilenangabe</b>: „…“ (Z. 12). Im <b>Schluss</b> fasst du das Ergebnis und die Bedeutung der Szene fürs Stück zusammen.",
            "beispiele": [
                "🧭 Einordnung: Die Szene steht kurz vor dem Höhepunkt; der Streit eskaliert hier erstmals offen.",
                "⚖️ Redeanteile: Tom spricht lange, Mia antwortet nur knapp – er dominiert das Gespräch.",
                "🔍 Mittel + Wirkung: Der Ausruf „Nie wieder!“ (Z. 8) zeigt Toms Wut.",
                "📌 Zitieren: Mia gibt nach: „Dann eben […] nicht“ (Z. 14) – Auslassungen mit […] kennzeichnen."
            ],
            "merksatz": "Beobachten – belegen – deuten: jede Beobachtung mit Zitat (Z.) und Wirkung."
        },
        "uebung": {
            "leicht": [
                {
                    "id": "dramak9l2u_leicht_1",
                    "category": "kurs_drama_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Zeitform nutzt man in der Szenenanalyse?",
                    "answers": [
                        "Präteritum",
                        "Präsens",
                        "Futur I",
                        "Plusquamperfekt"
                    ],
                    "correct": 1,
                    "explanation": "Analysen und Inhaltsangaben schreibt man im Präsens; Vorzeitiges steht im Perfekt."
                },
                {
                    "id": "dramak9l2u_leicht_2",
                    "category": "kurs_drama_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was gehört in die Einleitung einer Szenenanalyse?",
                    "answers": [
                        "Eine ausführliche eigene Meinung",
                        "Alle wichtigen Zitate der Szene",
                        "Titel, Autor/in, Textart und Thema",
                        "Das Ende des ganzen Stücks"
                    ],
                    "correct": 2,
                    "explanation": "Die Einleitung informiert über Basisdaten und Thema und ordnet die Szene ein; Belege folgen im Hauptteil."
                },
                {
                    "id": "dramak9l2u_leicht_3",
                    "category": "kurs_drama_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie belegt man eine Textstelle richtig?",
                    "answers": [
                        "Mit dem Datum der Aufführung",
                        "Mit dem Namen der Lehrkraft",
                        "Mit Zitat und Zeilenangabe",
                        "Mit einem Ausrufezeichen"
                    ],
                    "correct": 2,
                    "explanation": "Zitate stehen in Anführungszeichen, dahinter die Zeile in Klammern, z. B. (Z. 5)."
                },
                {
                    "id": "dramak9l2u_leicht_4",
                    "category": "kurs_drama_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was meint die „Einordnung“ einer Szene?",
                    "answers": [
                        "Ihre Länge in Zeilen und Seiten",
                        "Ihre Stellung im Handlungsverlauf",
                        "Ihre Bewertung als gut oder schlecht",
                        "Ihr Schriftbild im Textbuch"
                    ],
                    "correct": 1,
                    "explanation": "Bei der Einordnung sagst du, was vorher geschah und an welcher Stelle des Dramas die Szene steht."
                }
            ],
            "mittel": [
                {
                    "id": "dramak9l2u_mittel_1",
                    "category": "kurs_drama_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Tom redet 20 Zeilen, Mia nur 3. Was untersuchst du hier?",
                    "answers": [
                        "Redeanteile",
                        "Regieanweisungen",
                        "Exposition",
                        "Reimschema"
                    ],
                    "correct": 0,
                    "explanation": "Redeanteile zeigen, wer das Gespräch bestimmt; lange Reden deuten oft auf Dominanz hin."
                },
                {
                    "id": "dramak9l2u_mittel_2",
                    "category": "kurs_drama_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie kennzeichnet man Auslassungen in einem Zitat?",
                    "answers": [
                        "Mit Fettdruck der Wörter",
                        "Mit einem Sternchen am Ende",
                        "Ohne jede Kennzeichnung",
                        "Mit eckigen Klammern […]"
                    ],
                    "correct": 3,
                    "explanation": "Weggelassene Wörter ersetzt man durch […], damit das Zitat ehrlich bleibt."
                },
                {
                    "id": "dramak9l2u_mittel_3",
                    "category": "kurs_drama_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was gehört NICHT in die Inhaltszusammenfassung?",
                    "answers": [
                        "Die wichtigsten Handlungsschritte",
                        "Die beteiligten Figuren der Szene",
                        "Der Anlass des Gesprächs",
                        "Wörtliche Rede und eigene Wertung"
                    ],
                    "correct": 3,
                    "explanation": "Die Zusammenfassung ist sachlich und knapp: keine wörtliche Rede, keine Bewertung."
                },
                {
                    "id": "dramak9l2u_mittel_4",
                    "category": "kurs_drama_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "MIA (verschränkt die Arme): Mir egal. – Was deutet die Körpersprache an?",
                    "answers": [
                        "Abwehr und Distanz",
                        "Freude und Nähe",
                        "Müdigkeit und Hunger",
                        "Neugier und Interesse"
                    ],
                    "correct": 0,
                    "explanation": "Verschränkte Arme gelten als Abwehrhaltung; zusammen mit „Mir egal“ zeigt Mia Ablehnung."
                }
            ],
            "schwer": [
                {
                    "id": "dramak9l2u_schwer_1",
                    "category": "kurs_drama_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz verbindet Beobachtung, Beleg und Deutung?",
                    "answers": [
                        "Mia sagt etwas in Zeile 4, und dann redet Tom weiter.",
                        "Mia antwortet knapp („Mir egal“, Z. 4) und zeigt so Ablehnung.",
                        "Ich finde Mia in dieser Szene ziemlich unsympathisch.",
                        "Die Szene ist spannend, weil darin sehr viel passiert."
                    ],
                    "correct": 1,
                    "explanation": "Ein guter Analysesatz nennt eine Beobachtung, belegt sie mit Zitat und Zeile und erklärt ihre Wirkung."
                },
                {
                    "id": "dramak9l2u_schwer_2",
                    "category": "kurs_drama_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Tom fragt: „Bin ich etwa schuld?“ – Welche Wirkung hat die rhetorische Frage?",
                    "answers": [
                        "Er bittet Mia ehrlich um eine genaue Auskunft",
                        "Er beendet das Gespräch auf versöhnliche Art",
                        "Er weist Schuld zurück und setzt Mia unter Druck",
                        "Er beschreibt sachlich den Ort der Handlung"
                    ],
                    "correct": 2,
                    "explanation": "Eine rhetorische Frage erwartet keine Antwort; hier unterstellt Tom, dass er unschuldig ist."
                },
                {
                    "id": "dramak9l2u_schwer_3",
                    "category": "kurs_drama_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Erst unterbricht Tom Mia ständig, am Ende schweigt er. Was beschreibst du damit?",
                    "answers": [
                        "Die Exposition des Stücks",
                        "Die Liste der Figuren",
                        "Den Gesprächsverlauf",
                        "Das Erscheinungsjahr"
                    ],
                    "correct": 2,
                    "explanation": "Der Gesprächsverlauf zeigt, wie sich das Machtverhältnis zwischen Figuren innerhalb der Szene verändert."
                },
                {
                    "id": "dramak9l2u_schwer_4",
                    "category": "kurs_drama_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "drama",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was gehört in den Schluss einer Szenenanalyse?",
                    "answers": [
                        "Eine neue, noch nicht genannte Beobachtung",
                        "Ergebnis und Bedeutung der Szene fürs Stück",
                        "Die vollständige Inhaltsangabe des Stücks",
                        "Eine Liste aller Regieanweisungen der Szene"
                    ],
                    "correct": 1,
                    "explanation": "Im Schluss bündelst du deine Ergebnisse und erklärst die Funktion der Szene für das ganze Drama."
                }
            ]
        },
        "test": [
            {
                "id": "dramak9l2_test_1",
                "category": "kurs_drama_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "drama",
                "difficulty": "leicht",
                "points": 10,
                "question": "In welcher Reihenfolge ist eine Szenenanalyse aufgebaut?",
                "answers": [
                    "Einleitung – Hauptteil – Schluss",
                    "Schluss – Einleitung – Hauptteil",
                    "Hauptteil – Schluss – Einleitung",
                    "Einleitung – Schluss – Hauptteil"
                ],
                "correct": 0,
                "explanation": "Eine Analyse beginnt mit der Einleitung, untersucht im Hauptteil und fasst im Schluss zusammen."
            },
            {
                "id": "dramak9l2_test_2",
                "category": "kurs_drama_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "drama",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wofür steht „Z.“ hinter einem Zitat?",
                "answers": [
                    "Zitat",
                    "Zeichen",
                    "Zusammenfassung",
                    "Zeile"
                ],
                "correct": 3,
                "explanation": "„Z.“ ist die Abkürzung für Zeile, z. B. (Z. 7) oder (Z. 7 f.)."
            },
            {
                "id": "dramak9l2_test_3",
                "category": "kurs_drama_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "drama",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was untersuchst du bei den sprachlichen Mitteln?",
                "answers": [
                    "Wie Figuren sprechen und was es bewirkt",
                    "Wie viele Seiten das Stück insgesamt hat",
                    "Wann das Theater gebaut wurde",
                    "Welche Schauspieler mitspielen"
                ],
                "correct": 0,
                "explanation": "Sprachliche Mittel wie Ausrufe, Fragen oder Wiederholungen deutest du immer mit ihrer Wirkung."
            },
            {
                "id": "dramak9l2_test_4",
                "category": "kurs_drama_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "drama",
                "difficulty": "mittel",
                "points": 10,
                "question": "Mia spricht zuerst leise, dann schreit sie. Welche Deutung passt?",
                "answers": [
                    "Sie wird im Gespräch immer ruhiger",
                    "Ihre Gefühle steigern sich im Gespräch",
                    "Sie hat kein Interesse am Thema",
                    "Sie spricht mit einer dritten Figur"
                ],
                "correct": 1,
                "explanation": "Eine Veränderung der Lautstärke (oft in Regieanweisungen) zeigt eine Steigerung der Gefühle, z. B. Wut oder Verzweiflung."
            },
            {
                "id": "dramak9l2_test_5",
                "category": "kurs_drama_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "drama",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welche Einleitung ist am besten gelungen?",
                "answers": [
                    "In dieser Szene passiert ganz viel, und es wird zwischen allen sehr laut gestritten.",
                    "Tom und Mia sind gute Freunde. Tom ist sehr wütend. Mia schaut die ganze Zeit zu Boden.",
                    "Im Drama „Der Streit“ (A. Berg, 2020) streiten Tom und Mia um ein Versprechen.",
                    "Ich habe die ganze Szene gelesen und fand sie wirklich richtig gut gemacht."
                ],
                "correct": 2,
                "explanation": "Eine gute Einleitung nennt Textart, Titel, Autor/in, Jahr und Thema der Szene – sachlich und ohne Wertung."
            },
            {
                "id": "dramak9l2_test_6",
                "category": "kurs_drama_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "drama",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welcher Fehler passiert beim Zitieren häufig?",
                "answers": [
                    "Zitat mit Zeilenangabe in Klammern",
                    "Auslassung mit eckigen Klammern",
                    "Zitat in den eigenen Satz eingebaut",
                    "Zitat ohne Anführungszeichen und Zeile"
                ],
                "correct": 3,
                "explanation": "Ein Zitat braucht Anführungszeichen und eine Zeilenangabe, sonst ist es nicht überprüfbar."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "referat_k9_l1",
        "kurs": "referat_k9",
        "order": 1,
        "icon": "🗂️",
        "title": "Referat vorbereiten",
        "kurz": "Thema eingrenzen, Quellen prüfen, gliedern, Stichwortkarten",
        "erklaerung": {
            "intro": "Ein gutes Referat beginnt lange vor dem Vortrag. <b>Thema eingrenzen</b>: lieber eine klare <b>Leitfrage</b> als „alles über …“. <b>Quellen prüfen</b>: Wer steht dahinter? Wie aktuell? Sachlich oder Werbung? Vergleiche mehrere Quellen und <b>gib alle an</b> (Autor, Titel, Verlag bzw. Internetadresse, Datum). <b>Gliederung</b>: <b>Einleitung</b> (Interesse wecken, Thema, Überblick) – <b>Hauptteil</b> (Informationen in sinnvoller Reihenfolge) – <b>Schluss</b> (Zusammenfassung, Fazit). <b>Stichwortkarten</b>: nur Stichpunkte, groß geschrieben, nummeriert.",
            "beispiele": [
                "🎯 Eingrenzen: statt „Haie“ → „Warum sind Haie bedroht?“",
                "🔎 Quellencheck: Impressum, Datum, Belege – und mit einer zweiten Quelle vergleichen.",
                "🧱 Gliederung: Einstieg mit Frage → 3 Unterpunkte → Fazit mit Rückbezug auf die Frage.",
                "🗂️ Stichwortkarte: Nr. 3 – Ursachen: Fischfang, Haiflossen, Beifang"
            ],
            "merksatz": "Klare Leitfrage, geprüfte Quellen, feste Gliederung, Karten mit Stichworten."
        },
        "uebung": {
            "leicht": [
                {
                    "id": "referatk9l1u_leicht_1",
                    "category": "kurs_referat_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was steht auf einer guten Stichwortkarte?",
                    "answers": [
                        "Wichtige Stichpunkte",
                        "Der ganze Vortragstext",
                        "Nur die Überschrift",
                        "Alle Quellen ausführlich"
                    ],
                    "correct": 0,
                    "explanation": "Stichwortkarten sind Gedächtnisstützen: wenige Schlagwörter, damit man frei spricht."
                },
                {
                    "id": "referatk9l1u_leicht_2",
                    "category": "kurs_referat_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Teil eines Referats soll vor allem Interesse wecken?",
                    "answers": [
                        "Hauptteil",
                        "Schluss",
                        "Quellenverzeichnis",
                        "Einleitung"
                    ],
                    "correct": 3,
                    "explanation": "Die Einleitung holt das Publikum ab, z. B. mit Frage, Bild oder Zahl, und nennt Thema und Ablauf."
                },
                {
                    "id": "referatk9l1u_leicht_3",
                    "category": "kurs_referat_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Warum gibt man Quellen an?",
                    "answers": [
                        "Damit das Referat länger und klüger wirkt",
                        "Damit man prüfen kann, woher Infos stammen",
                        "Damit man vorher weniger üben muss",
                        "Damit die Folien bunter aussehen"
                    ],
                    "correct": 1,
                    "explanation": "Quellenangaben machen Informationen überprüfbar und zeigen, was nicht von dir selbst stammt."
                },
                {
                    "id": "referatk9l1u_leicht_4",
                    "category": "kurs_referat_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Thema ist gut eingegrenzt?",
                    "answers": [
                        "Alles über Energie und Strom",
                        "Die ganze Welt der Technik",
                        "Wie funktioniert eine Solaranlage?",
                        "Natur und Umwelt allgemein"
                    ],
                    "correct": 2,
                    "explanation": "Eine konkrete Leitfrage begrenzt das Thema, sodass es in der Vortragszeit gründlich behandelt werden kann."
                }
            ],
            "mittel": [
                {
                    "id": "referatk9l1u_mittel_1",
                    "category": "kurs_referat_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Woran erkennst du eine eher zuverlässige Internetquelle?",
                    "answers": [
                        "Viele bunte Bilder und viel Werbung",
                        "Impressum, Autor und aktuelles Datum",
                        "Sie steht ganz oben in der Suche",
                        "Sie hat viele Likes in Social Media"
                    ],
                    "correct": 1,
                    "explanation": "Zuverlässige Seiten nennen, wer verantwortlich ist und wann der Text entstand; Platz in der Suche sagt nichts über Qualität."
                },
                {
                    "id": "referatk9l1u_mittel_2",
                    "category": "kurs_referat_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was gehört zu einer vollständigen Internet-Quellenangabe?",
                    "answers": [
                        "Nur der Name der Suchmaschine",
                        "Nur die Überschrift des Artikels",
                        "Der eigene Name und die Klasse",
                        "Autor, Titel, Adresse, Abrufdatum"
                    ],
                    "correct": 3,
                    "explanation": "Internetquellen gibt man mit Autor (falls bekannt), Titel, vollständiger Adresse und Abrufdatum an."
                },
                {
                    "id": "referatk9l1u_mittel_3",
                    "category": "kurs_referat_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was gehört in den Schluss eines Referats?",
                    "answers": [
                        "Zusammenfassung und Fazit",
                        "Ganz neue Informationen",
                        "Der ausführliche Einstieg",
                        "Die Leitfrage zum ersten Mal"
                    ],
                    "correct": 0,
                    "explanation": "Der Schluss fasst die Kernaussagen zusammen und beantwortet die Leitfrage; Neues gehört in den Hauptteil."
                },
                {
                    "id": "referatk9l1u_mittel_4",
                    "category": "kurs_referat_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Zwei Quellen nennen unterschiedliche Zahlen. Was tust du?",
                    "answers": [
                        "Einfach die höhere Zahl nehmen",
                        "Die Zahl frei nach Gefühl schätzen",
                        "Eine dritte, seriöse Quelle prüfen",
                        "Die Quelle mit Werbung wählen"
                    ],
                    "correct": 2,
                    "explanation": "Bei Widersprüchen vergleicht man weitere seriöse Quellen, z. B. Fachseiten oder Statistikämter."
                }
            ],
            "schwer": [
                {
                    "id": "referatk9l1u_schwer_1",
                    "category": "kurs_referat_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Die Website eines Herstellers lobt dessen eigenes Produkt. Was ist das Problem?",
                    "answers": [
                        "Die Quelle ist zu kurz",
                        "Die Quelle ist zu aktuell",
                        "Die Quelle hat ein Impressum",
                        "Die Quelle ist nicht neutral"
                    ],
                    "correct": 3,
                    "explanation": "Wer etwas verkaufen will, stellt es einseitig dar; solche Quellen muss man mit neutralen vergleichen."
                },
                {
                    "id": "referatk9l1u_schwer_2",
                    "category": "kurs_referat_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie sollte der Hauptteil gegliedert sein?",
                    "answers": [
                        "Zufällig, wie die Notizen liegen",
                        "Logisch, mit klaren Unterpunkten",
                        "Nach der Länge der Fundstücke",
                        "Nach dem Alphabet der Stichworte"
                    ],
                    "correct": 1,
                    "explanation": "Der Hauptteil folgt einer sinnvollen Ordnung, z. B. zeitlich, von Ursache zu Folge oder vom Allgemeinen zum Besonderen."
                },
                {
                    "id": "referatk9l1u_schwer_3",
                    "category": "kurs_referat_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Warum nummeriert man Stichwortkarten?",
                    "answers": [
                        "Damit die Lehrkraft sie leichter benotet",
                        "Damit man insgesamt weniger schreibt",
                        "Damit die Reihenfolge nicht verloren geht",
                        "Damit das Publikum sie mitlesen kann"
                    ],
                    "correct": 2,
                    "explanation": "Fallen Karten herunter, lassen sie sich dank Nummern schnell wieder ordnen."
                },
                {
                    "id": "referatk9l1u_schwer_4",
                    "category": "kurs_referat_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was ist ein Plagiat?",
                    "answers": [
                        "Fremde Inhalte ohne Quelle übernehmen",
                        "Eine Quelle korrekt zitieren und angeben",
                        "Eigene Gedanken in Stichworten notieren",
                        "Ein Bild mit Quellenangabe verwenden"
                    ],
                    "correct": 0,
                    "explanation": "Wer fremde Texte oder Bilder als eigene ausgibt, begeht ein Plagiat – das gilt als Täuschung."
                }
            ]
        },
        "test": [
            {
                "id": "referatk9l1_test_1",
                "category": "kurs_referat_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "praesentieren",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie ist ein Referat aufgebaut?",
                "answers": [
                    "Hauptteil, Einleitung, Fragen",
                    "Einleitung, Hauptteil, Schluss",
                    "Schluss, Hauptteil, Einleitung",
                    "Fragen, Schluss, Einleitung"
                ],
                "correct": 1,
                "explanation": "Ein Referat folgt dem Dreischritt Einleitung – Hauptteil – Schluss; Fragen folgen am Ende."
            },
            {
                "id": "referatk9l1_test_2",
                "category": "kurs_referat_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "praesentieren",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wozu dient eine Leitfrage?",
                "answers": [
                    "Sie ersetzt die Quellenangabe",
                    "Sie verlängert den Vortrag",
                    "Sie macht Folien überflüssig",
                    "Sie grenzt das Thema klar ein"
                ],
                "correct": 3,
                "explanation": "Die Leitfrage gibt dem Referat einen roten Faden; der Schluss beantwortet sie."
            },
            {
                "id": "referatk9l1_test_3",
                "category": "kurs_referat_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "praesentieren",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Quelle eignet sich am besten für ein Referat?",
                "answers": [
                    "Ein Fachartikel mit Autor und Datum",
                    "Ein anonymer Kommentar im Forum",
                    "Ein Werbeprospekt eines Herstellers",
                    "Ein Video ohne Angabe der Herkunft"
                ],
                "correct": 0,
                "explanation": "Gute Quellen sind sachlich, aktuell und nennen Verantwortliche; anonyme oder werbende Texte sind unsicher."
            },
            {
                "id": "referatk9l1_test_4",
                "category": "kurs_referat_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "praesentieren",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ist ein guter Einstieg in ein Referat?",
                "answers": [
                    "Sofort alle Quellen vorlesen",
                    "Eine lange Entschuldigung",
                    "Eine überraschende Frage oder Zahl",
                    "Ohne Thema direkt ins Detail"
                ],
                "correct": 2,
                "explanation": "Ein Einstieg soll neugierig machen und zum Thema hinführen."
            },
            {
                "id": "referatk9l1_test_5",
                "category": "kurs_referat_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "praesentieren",
                "difficulty": "schwer",
                "points": 10,
                "question": "Du übernimmst eine Grafik aus dem Internet. Was ist Pflicht?",
                "answers": [
                    "Die Grafik etwas verkleinern",
                    "Die Grafik schwarz-weiß zeigen",
                    "Nichts, Bilder sind immer frei",
                    "Die Quelle der Grafik angeben"
                ],
                "correct": 3,
                "explanation": "Auch Bilder und Grafiken sind fremdes Material: Quelle angeben und Nutzungsrechte beachten."
            },
            {
                "id": "referatk9l1_test_6",
                "category": "kurs_referat_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "praesentieren",
                "difficulty": "schwer",
                "points": 10,
                "question": "Was ist bei Stichwortkarten falsch?",
                "answers": [
                    "Wichtige Begriffe farbig hervorheben",
                    "Die Karten durchnummerieren",
                    "Ganze Sätze klein und eng schreiben",
                    "Jede Karte nur einseitig beschriften"
                ],
                "correct": 2,
                "explanation": "Ganze Sätze verleiten zum Ablesen, kleine Schrift ist schlecht lesbar – Stichworte groß schreiben."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "referat_k9_l2",
        "kurs": "referat_k9",
        "order": 2,
        "icon": "🖥️",
        "title": "Vortrag und Folien",
        "kurz": "Folienregeln, frei sprechen, Fragen beantworten, Feedback",
        "erklaerung": {
            "intro": "<b>Folien</b> unterstützen dich, sie ersetzen dich nicht: <b>wenig Text</b> (etwa 3–5 Stichpunkte), <b>große Schrift</b> (mind. etwa 24 pt), starker Kontrast und passende <b>Bilder mit Quelle</b>. Beim <b>Sprechen</b>: möglichst <b>frei</b> mit Stichwortkarten, <b>Blickkontakt</b> ins ganze Publikum, deutlich und nicht zu schnell, bewusste <b>Pausen</b>. Bei <b>Fragen</b>: zuhören, kurz antworten, ehrlich zugeben, wenn man etwas nicht weiß. <b>Feedback</b> gibst du nach Regeln: erst Positives, dann Tipps – <b>konkret</b>, <b>sachlich</b> und als <b>Ich-Botschaft</b>.",
            "beispiele": [
                "🖼️ Folie: Überschrift + 3 Stichworte + 1 Bild (Quelle: …) statt einer Textwand.",
                "👀 Blickkontakt: den Blick langsam durch alle Reihen wandern lassen.",
                "⏸️ Pause nach einer wichtigen Zahl – so wirkt sie nach.",
                "💬 Feedback: „Mir hat dein Einstieg gefallen. Ich würde an deiner Stelle langsamer sprechen.“"
            ],
            "merksatz": "Folie knapp, Stimme frei, Blick ins Publikum – Feedback: positiv, konkret, freundlich."
        },
        "uebung": {
            "leicht": [
                {
                    "id": "referatk9l2u_leicht_1",
                    "category": "kurs_referat_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viel Text gehört auf eine Folie?",
                    "answers": [
                        "Der ganze Vortrag",
                        "Wenige Stichworte",
                        "Viele lange Sätze",
                        "Nur Fließtext"
                    ],
                    "correct": 1,
                    "explanation": "Folien zeigen nur Kernbegriffe; erklären tust du mündlich."
                },
                {
                    "id": "referatk9l2u_leicht_2",
                    "category": "kurs_referat_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wohin schaust du beim Vortrag am besten?",
                    "answers": [
                        "Ins Publikum",
                        "Nur auf die Folie",
                        "Nur auf die Karten",
                        "Aus dem Fenster"
                    ],
                    "correct": 0,
                    "explanation": "Blickkontakt bindet die Zuhörenden ein und wirkt sicher."
                },
                {
                    "id": "referatk9l2u_leicht_3",
                    "category": "kurs_referat_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was gehört unter ein fremdes Bild auf der Folie?",
                    "answers": [
                        "Ein Witz",
                        "Die Uhrzeit",
                        "Deine Note",
                        "Die Quelle"
                    ],
                    "correct": 3,
                    "explanation": "Fremde Bilder brauchen eine Quellenangabe, z. B. „Foto: Name, Website, Datum“."
                },
                {
                    "id": "referatk9l2u_leicht_4",
                    "category": "kurs_referat_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Womit beginnt gutes Feedback?",
                    "answers": [
                        "Mit dem größten Fehler",
                        "Mit einer Schulnote",
                        "Mit etwas Positivem",
                        "Mit einem Vergleich"
                    ],
                    "correct": 2,
                    "explanation": "Wer zuerst Gelungenes nennt, macht es leichter, Tipps anzunehmen."
                }
            ],
            "mittel": [
                {
                    "id": "referatk9l2u_mittel_1",
                    "category": "kurs_referat_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Schriftgröße ist für Folientext sinnvoll?",
                    "answers": [
                        "etwa 8 pt",
                        "ab etwa 24 pt",
                        "etwa 10 pt",
                        "etwa 12 pt"
                    ],
                    "correct": 1,
                    "explanation": "Folientext muss auch in der letzten Reihe lesbar sein; 24 pt und mehr gelten als Richtwert."
                },
                {
                    "id": "referatk9l2u_mittel_2",
                    "category": "kurs_referat_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Warum macht man beim Vortrag bewusst Pausen?",
                    "answers": [
                        "Damit Wichtiges wirken kann",
                        "Damit der Vortrag länger dauert",
                        "Damit man das Thema vergisst",
                        "Damit niemand Fragen stellt"
                    ],
                    "correct": 0,
                    "explanation": "Pausen geben dem Publikum Zeit zum Nachdenken und betonen wichtige Aussagen."
                },
                {
                    "id": "referatk9l2u_mittel_3",
                    "category": "kurs_referat_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Jemand fragt etwas, das du nicht weißt. Was ist die beste Reaktion?",
                    "answers": [
                        "Schnell irgendeine Antwort erfinden",
                        "Die Frage einfach überhören",
                        "Den Fragenden scharf kritisieren",
                        "Ehrlich sagen und Nachschauen anbieten"
                    ],
                    "correct": 3,
                    "explanation": "Ehrlichkeit wirkt kompetenter als eine erfundene Antwort; man kann die Antwort später nachreichen."
                },
                {
                    "id": "referatk9l2u_mittel_4",
                    "category": "kurs_referat_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Feedback ist konkret?",
                    "answers": [
                        "Das war irgendwie nicht gut.",
                        "Folie 3 hatte zu viel Text.",
                        "Alles super, mach weiter so!",
                        "Hat mir einfach nicht gefallen."
                    ],
                    "correct": 1,
                    "explanation": "Konkretes Feedback nennt eine genaue Stelle, sodass man weiß, was zu verbessern ist."
                }
            ],
            "schwer": [
                {
                    "id": "referatk9l2u_schwer_1",
                    "category": "kurs_referat_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Folie ist am besten gestaltet?",
                    "answers": [
                        "Titel, 3 Stichworte, Bild mit Quelle",
                        "Ganzer Lexikontext kopiert",
                        "Viele Animationen, fünf Schriftarten",
                        "Hellgelbe Schrift auf Weiß"
                    ],
                    "correct": 0,
                    "explanation": "Gute Folien sind übersichtlich, kontrastreich und belegen fremde Bilder mit Quelle."
                },
                {
                    "id": "referatk9l2u_schwer_2",
                    "category": "kurs_referat_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Warum soll man Folien nicht einfach ablesen?",
                    "answers": [
                        "Folien dürfen nach den Regeln nie Text haben",
                        "Ablesen dauert grundsätzlich viel zu kurz",
                        "Das Publikum liest selbst und verliert Interesse",
                        "Dann sind keine Quellenangaben mehr nötig"
                    ],
                    "correct": 2,
                    "explanation": "Wer abliest, verliert den Blickkontakt und liefert nichts, was das Publikum nicht schon sieht."
                },
                {
                    "id": "referatk9l2u_schwer_3",
                    "category": "kurs_referat_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welches Feedback ist eine Ich-Botschaft?",
                    "answers": [
                        "Du hast total chaotisch geredet.",
                        "Man versteht dich nie richtig.",
                        "Das macht jeder besser als du.",
                        "Ich konnte dir am Ende schwer folgen."
                    ],
                    "correct": 3,
                    "explanation": "Ich-Botschaften beschreiben die eigene Wahrnehmung statt die Person anzugreifen."
                },
                {
                    "id": "referatk9l2u_schwer_4",
                    "category": "kurs_referat_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "deutsch",
                    "topic": "praesentieren",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Du merkst im Vortrag, dass du zu schnell sprichst. Was tust du?",
                    "answers": [
                        "Kurz pausieren, dann langsamer weiter",
                        "Noch schneller reden, um fertig zu sein",
                        "Den Vortrag abbrechen und hinsetzen",
                        "Die restlichen Folien überspringen"
                    ],
                    "correct": 0,
                    "explanation": "Eine kurze Pause hilft, das Tempo neu zu finden; das Publikum bemerkt sie kaum."
                }
            ]
        },
        "test": [
            {
                "id": "referatk9l2_test_1",
                "category": "kurs_referat_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "praesentieren",
                "difficulty": "leicht",
                "points": 10,
                "question": "Was kennzeichnet freies Sprechen?",
                "answers": [
                    "Alles Wort für Wort vorlesen",
                    "Mit Stichwortkarten statt Ablesen",
                    "Den Text vom Handy ablesen",
                    "Mit dem Rücken zum Publikum"
                ],
                "correct": 1,
                "explanation": "Frei sprechen heißt, mit Hilfe weniger Stichworte in eigenen Worten vorzutragen."
            },
            {
                "id": "referatk9l2_test_2",
                "category": "kurs_referat_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "praesentieren",
                "difficulty": "leicht",
                "points": 10,
                "question": "Was gehört NICHT auf eine gute Folie?",
                "answers": [
                    "Eine Überschrift",
                    "Große Schrift",
                    "Lange Textabsätze",
                    "Ein passendes Bild"
                ],
                "correct": 2,
                "explanation": "Lange Absätze überfordern das Publikum; Folien zeigen nur das Wichtigste."
            },
            {
                "id": "referatk9l2_test_3",
                "category": "kurs_referat_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "praesentieren",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wann beantwortet man Fragen meist am besten?",
                "answers": [
                    "Nie, denn Fragen stören nur",
                    "Nur wenn die Lehrkraft fragt",
                    "Am Ende oder wie angekündigt",
                    "Bevor der Vortrag beginnt"
                ],
                "correct": 2,
                "explanation": "Man kündigt zu Beginn an, wann Fragen möglich sind – meist am Ende."
            },
            {
                "id": "referatk9l2_test_4",
                "category": "kurs_referat_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "praesentieren",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Regel gilt beim Feedbackgeben?",
                "answers": [
                    "Die Person persönlich angreifen",
                    "Nur alle Fehler aufzählen",
                    "Möglichst allgemein bleiben",
                    "Sachlich und konkret bleiben"
                ],
                "correct": 3,
                "explanation": "Feedback bezieht sich auf den Vortrag, nicht auf die Person, und nennt konkrete Beispiele."
            },
            {
                "id": "referatk9l2_test_5",
                "category": "kurs_referat_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "praesentieren",
                "difficulty": "schwer",
                "points": 10,
                "question": "Folie: 12 Zeilen Text, 14 pt, Foto ohne Angabe. Was verbesserst du?",
                "answers": [
                    "Weniger Text, größere Schrift, Bildquelle",
                    "Mehr Text, damit alles drinsteht",
                    "Kleinere Schrift für mehr Platz",
                    "Nur das Foto entfernen, sonst gut"
                ],
                "correct": 0,
                "explanation": "Alle drei Folienregeln sind verletzt: wenig Text, große Schrift, Bilder mit Quelle."
            },
            {
                "id": "referatk9l2_test_6",
                "category": "kurs_referat_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "deutsch",
                "topic": "praesentieren",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie wirkt es, wenn du nur die Lehrkraft ansiehst?",
                "answers": [
                    "Alle fühlen sich gleich angesprochen",
                    "Der Rest fühlt sich nicht angesprochen",
                    "Der Vortrag wirkt besonders frei",
                    "Die Folien werden besser lesbar"
                ],
                "correct": 1,
                "explanation": "Blickkontakt soll durch den ganzen Raum gehen, damit sich alle Zuhörenden angesprochen fühlen."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "participles_k9_l1",
        "kurs": "participles_k9",
        "order": 1,
        "icon": "🚶",
        "title": "Participle clauses",
        "kurz": "Nebensätze mit -ing und 3. Form verkürzen",
        "erklaerung": {
            "intro": "Ein <b>participle clause</b> verkürzt einen Nebensatz. <b>Present participle (-ing)</b> = aktiv: <b>Walking</b> home, I met Sam. <b>Past participle (3. Form)</b> = passiv: <b>Built</b> in 1890, the house is a museum. <b>Regel:</b> Das Subjekt von Neben- und Hauptsatz muss <b>gleich</b> sein – sonst entsteht ein falscher <b>dangling participle</b>.",
            "beispiele": [
                "🚶 Walking home, I met an old friend. (= When I was walking home …)",
                "🏠 Built in 1890, the house is now a museum. (= The house was built …)",
                "🙅 Not knowing the way, he asked a policeman. (Verneinung: not vor das Partizip)",
                "⚠️ Falsch: Walking home, the rain started. – Der Regen geht nicht nach Hause!"
            ],
            "merksatz": "-ing = aktiv, 3. Form = passiv. Neben- und Hauptsatz brauchen dasselbe Subjekt."
        },
        "uebung": {
            "leicht": [
                {
                    "id": "participlesk9l1u_leicht_1",
                    "category": "kurs_participles_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "___ home, I met an old friend. (Als ich nach Hause ging …)",
                    "answers": [
                        "Walked",
                        "Walks",
                        "Walking",
                        "Walk"
                    ],
                    "correct": 2,
                    "explanation": "Aktive, gleichzeitige Handlung → present participle (-ing): Walking home, I …"
                },
                {
                    "id": "participlesk9l1u_leicht_2",
                    "category": "kurs_participles_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "___ in 1890, the house is now a museum.",
                    "answers": [
                        "Build",
                        "Built",
                        "Building",
                        "Builds"
                    ],
                    "correct": 1,
                    "explanation": "Das Haus wurde gebaut (passiv) → past participle: Built in 1890, …"
                },
                {
                    "id": "participlesk9l1u_leicht_3",
                    "category": "kurs_participles_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Form drückt eine aktive Handlung aus?",
                    "answers": [
                        "das present participle (-ing)",
                        "das past participle (3. Form)",
                        "der Infinitiv ohne to",
                        "das Simple Past (2. Form)"
                    ],
                    "correct": 0,
                    "explanation": "Das -ing-Partizip ist aktiv; die 3. Form steht für eine passive Bedeutung."
                },
                {
                    "id": "participlesk9l1u_leicht_4",
                    "category": "kurs_participles_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ein participle clause ersetzt meist …",
                    "answers": [
                        "einen Nebensatz mit gleichem Subjekt",
                        "einen Hauptsatz mit neuem Subjekt",
                        "ein Adjektiv vor dem Nomen",
                        "eine direkte Frage im Text"
                    ],
                    "correct": 0,
                    "explanation": "Participle clauses verkürzen Nebensätze; das Subjekt bleibt dasselbe wie im Hauptsatz."
                }
            ],
            "mittel": [
                {
                    "id": "participlesk9l1u_mittel_1",
                    "category": "kurs_participles_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Because she felt tired, she went to bed. → ___ tired, she went to bed.",
                    "answers": [
                        "Feeling",
                        "Feels",
                        "Feel",
                        "Felt"
                    ],
                    "correct": 0,
                    "explanation": "Aktiver Grund-Nebensatz → -ing-Form: Feeling tired, she …"
                },
                {
                    "id": "participlesk9l1u_mittel_2",
                    "category": "kurs_participles_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "When it is seen from above, the town looks tiny. → ___ from above, the town looks tiny.",
                    "answers": [
                        "Seen",
                        "Sees",
                        "Saw",
                        "Seeing"
                    ],
                    "correct": 0,
                    "explanation": "Die Stadt wird gesehen (passiv) → past participle Seen."
                },
                {
                    "id": "participlesk9l1u_mittel_3",
                    "category": "kurs_participles_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "___ the news, he called his mum. (Als er die Nachricht hörte …)",
                    "answers": [
                        "Heard",
                        "Hearing",
                        "Hear",
                        "Hears"
                    ],
                    "correct": 1,
                    "explanation": "Er selbst hört (aktiv) → Hearing the news, he …"
                },
                {
                    "id": "participlesk9l1u_mittel_4",
                    "category": "kurs_participles_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "___ by thousands of tourists every year, the castle is very famous.",
                    "answers": [
                        "Visit",
                        "Visited",
                        "Visiting",
                        "Visits"
                    ],
                    "correct": 1,
                    "explanation": "Die Burg wird besucht (passiv, by …) → Visited."
                }
            ],
            "schwer": [
                {
                    "id": "participlesk9l1u_schwer_1",
                    "category": "kurs_participles_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz enthält einen dangling participle?",
                    "answers": [
                        "Walking to school, I got wet.",
                        "Tired after school, Tom fell asleep.",
                        "Built in 2010, the bridge is new.",
                        "Walking to school, the rain started."
                    ],
                    "correct": 3,
                    "explanation": "Dangling participle: Das Subjekt des Hauptsatzes (the rain) passt nicht zum Partizip – der Regen geht nicht zur Schule."
                },
                {
                    "id": "participlesk9l1u_schwer_2",
                    "category": "kurs_participles_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist korrekt?",
                    "answers": [
                        "Looking out of the window, I saw a fox.",
                        "Looked out of the window, I saw a fox.",
                        "Looking out of the window, a fox was seen.",
                        "Look out of the window, I saw a fox."
                    ],
                    "correct": 0,
                    "explanation": "Ich schaue (aktiv, -ing) und ich bin auch Subjekt des Hauptsatzes."
                },
                {
                    "id": "participlesk9l1u_schwer_3",
                    "category": "kurs_participles_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Waiting for the bus, my phone rang. – Was ist der Fehler?",
                    "answers": [
                        "Das Handy wartet nicht auf den Bus.",
                        "Waiting muss hier Waited heißen.",
                        "rang muss hier ringed heißen.",
                        "Nach bus darf kein Komma stehen."
                    ],
                    "correct": 0,
                    "explanation": "Gleiche-Subjekt-Regel verletzt: richtig wäre While I was waiting for the bus, my phone rang."
                },
                {
                    "id": "participlesk9l1u_schwer_4",
                    "category": "kurs_participles_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Written in simple English, the book is easy to read. – Bedeutung?",
                    "answers": [
                        "Während das Buch einfaches Englisch schreibt, …",
                        "Nachdem man selbst einfaches Englisch schrieb, …",
                        "Bevor es in einfaches Englisch übersetzt wird, …",
                        "Weil es in einfachem Englisch geschrieben ist, …"
                    ],
                    "correct": 3,
                    "explanation": "Past participle = passiv; hier mit begründender Bedeutung (Because it is written …)."
                }
            ]
        },
        "test": [
            {
                "id": "participlesk9l1_test_1",
                "category": "kurs_participles_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "participle_clauses",
                "difficulty": "leicht",
                "points": 10,
                "question": "___ to music, she did her homework.",
                "answers": [
                    "Listen",
                    "Listening",
                    "Listens",
                    "Listened"
                ],
                "correct": 1,
                "explanation": "Gleichzeitige aktive Handlung → present participle: Listening to music, …"
            },
            {
                "id": "participlesk9l1_test_2",
                "category": "kurs_participles_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "participle_clauses",
                "difficulty": "leicht",
                "points": 10,
                "question": "Painted red, the door looks new. – Was drückt Painted aus?",
                "answers": [
                    "Zukunft: sie wird gestrichen werden",
                    "aktiv: die Tür streicht etwas",
                    "Befehl: Streich die Tür rot!",
                    "passiv: die Tür wurde gestrichen"
                ],
                "correct": 3,
                "explanation": "Die 3. Form im participle clause hat passive Bedeutung."
            },
            {
                "id": "participlesk9l1_test_3",
                "category": "kurs_participles_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "participle_clauses",
                "difficulty": "mittel",
                "points": 10,
                "question": "As he didn't know the way, he asked a policeman. → ___ the way, he asked a policeman.",
                "answers": [
                    "Don't knowing",
                    "Knowing not",
                    "Not knowing",
                    "Not known"
                ],
                "correct": 2,
                "explanation": "Verneinung im participle clause: not steht vor dem Partizip."
            },
            {
                "id": "participlesk9l1_test_4",
                "category": "kurs_participles_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "participle_clauses",
                "difficulty": "mittel",
                "points": 10,
                "question": "___ in the fridge, the milk stays fresh for days.",
                "answers": [
                    "Keep",
                    "Keeping",
                    "Keeps",
                    "Kept"
                ],
                "correct": 3,
                "explanation": "Die Milch wird aufbewahrt (passiv) → past participle Kept."
            },
            {
                "id": "participlesk9l1_test_5",
                "category": "kurs_participles_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "participle_clauses",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welcher Satz verletzt die gleiche-Subjekt-Regel?",
                "answers": [
                    "Taking a shower, the doorbell rang.",
                    "Feeling hungry, we ordered pizza.",
                    "Opened in 2015, the shop is popular.",
                    "Taking a shower, I heard the doorbell."
                ],
                "correct": 0,
                "explanation": "Die Türklingel duscht nicht – das Partizip bezieht sich auf das falsche Subjekt (dangling participle)."
            },
            {
                "id": "participlesk9l1_test_6",
                "category": "kurs_participles_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "participle_clauses",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welche Regel gilt für participle clauses?",
                "answers": [
                    "Sie stehen grundsätzlich nur am Satzende.",
                    "Neben- und Hauptsatz haben dasselbe Subjekt.",
                    "Der Nebensatz braucht ein eigenes Subjekt.",
                    "Sie stehen grundsätzlich nur nach Modalverben."
                ],
                "correct": 1,
                "explanation": "Das Partizip bezieht sich immer auf das Subjekt des Hauptsatzes."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "participles_k9_l2",
        "kurs": "participles_k9",
        "order": 2,
        "icon": "🧩",
        "title": "Participles statt Relativsatz",
        "kurz": "Relativsätze kürzen und having + 3. Form",
        "erklaerung": {
            "intro": "Partizipien können <b>Relativsätze verkürzen</b>: The girl <b>who is sitting</b> next to me → The girl <b>sitting</b> next to me (aktiv). The car <b>that was parked</b> outside → the car <b>parked</b> outside (passiv). <b>Having + past participle</b> zeigt, dass eine Handlung <b>vorher abgeschlossen</b> war: <b>Having finished</b> my homework, I went out. Passiv: <b>Having been told</b> …",
            "beispiele": [
                "💺 The girl sitting next to me is from Leeds. (= who is sitting)",
                "🚗 The car parked outside belongs to my dad. (= that was parked)",
                "✅ Having finished my homework, I went out. (= After I had finished …)",
                "📣 Having been told the news, she cried. (passiv + vorher)"
            ],
            "merksatz": "Relativsatz kürzen: aktiv → -ing, passiv → 3. Form. Vorher abgeschlossen → having + 3. Form."
        },
        "uebung": {
            "leicht": [
                {
                    "id": "participlesk9l2u_leicht_1",
                    "category": "kurs_participles_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "The boy ___ the guitar is my brother. (der Gitarre spielt)",
                    "answers": [
                        "playing",
                        "plays",
                        "played",
                        "play"
                    ],
                    "correct": 0,
                    "explanation": "Aktiver Relativsatz (who is playing) → -ing: the boy playing the guitar."
                },
                {
                    "id": "participlesk9l2u_leicht_2",
                    "category": "kurs_participles_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "The window ___ by the ball was very expensive.",
                    "answers": [
                        "broken",
                        "breaking",
                        "breaks",
                        "broke"
                    ],
                    "correct": 0,
                    "explanation": "Das Fenster wurde zerbrochen (passiv) → past participle broken."
                },
                {
                    "id": "participlesk9l2u_leicht_3",
                    "category": "kurs_participles_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "having + past participle zeigt, …",
                    "answers": [
                        "dass etwas in der Zukunft passiert",
                        "dass etwas oft wiederholt wird",
                        "dass etwas vorher abgeschlossen war",
                        "dass etwas gleichzeitig passiert"
                    ],
                    "correct": 2,
                    "explanation": "Having finished … = Nachdem ich fertig war – die Handlung liegt vor der im Hauptsatz."
                },
                {
                    "id": "participlesk9l2u_leicht_4",
                    "category": "kurs_participles_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "the man ___ a red hat (der einen roten Hut trägt)",
                    "answers": [
                        "wears",
                        "wearing",
                        "wore",
                        "worn"
                    ],
                    "correct": 1,
                    "explanation": "Aktiv (who is wearing) → present participle wearing."
                }
            ],
            "mittel": [
                {
                    "id": "participlesk9l2u_mittel_1",
                    "category": "kurs_participles_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Students who want to join the club should sign here. → Students ___ to join the club should sign here.",
                    "answers": [
                        "want",
                        "wanting",
                        "to wanted",
                        "wants"
                    ],
                    "correct": 1,
                    "explanation": "Aktiver Relativsatz wird mit -ing verkürzt: students wanting to join …"
                },
                {
                    "id": "participlesk9l2u_mittel_2",
                    "category": "kurs_participles_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "The books which were written by her are popular. → The books ___ by her are popular.",
                    "answers": [
                        "written",
                        "writes",
                        "writing",
                        "wrote"
                    ],
                    "correct": 0,
                    "explanation": "Passiver Relativsatz → past participle: the books written by her."
                },
                {
                    "id": "participlesk9l2u_mittel_3",
                    "category": "kurs_participles_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "After I had finished my homework, I went out. → ___ my homework, I went out.",
                    "answers": [
                        "Had finishing",
                        "Having finished",
                        "Having finishing",
                        "Have finished"
                    ],
                    "correct": 1,
                    "explanation": "Vorzeitigkeit → having + 3. Form: Having finished …"
                },
                {
                    "id": "participlesk9l2u_mittel_4",
                    "category": "kurs_participles_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "___ the film before, she didn't want to see it again.",
                    "answers": [
                        "Having saw",
                        "Have seen",
                        "Had seeing",
                        "Having seen"
                    ],
                    "correct": 3,
                    "explanation": "having + 3. Form (seen, nicht saw) für die vorher abgeschlossene Handlung."
                }
            ],
            "schwer": [
                {
                    "id": "participlesk9l2u_schwer_1",
                    "category": "kurs_participles_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Having been told the truth, he felt better. – Bedeutung?",
                    "answers": [
                        "Bevor man ihm die Wahrheit sagen wird, …",
                        "Während er gerade die Wahrheit erzählt, …",
                        "Nachdem man ihm die Wahrheit gesagt hatte, …",
                        "Nachdem er selbst die Wahrheit gesagt hatte, …"
                    ],
                    "correct": 2,
                    "explanation": "having been + 3. Form = passiv und vorzeitig: Ihm wurde vorher die Wahrheit gesagt."
                },
                {
                    "id": "participlesk9l2u_schwer_2",
                    "category": "kurs_participles_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "The people who were invited to the party … – korrekt verkürzt?",
                    "answers": [
                        "The people invite to the party …",
                        "The people having invite to the party …",
                        "The people invited to the party …",
                        "The people inviting to the party …"
                    ],
                    "correct": 2,
                    "explanation": "Passiver Relativsatz (who were invited) → past participle invited."
                },
                {
                    "id": "participlesk9l2u_schwer_3",
                    "category": "kurs_participles_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist falsch?",
                    "answers": [
                        "Having eaten lunch, the dishes were washed.",
                        "Having eaten lunch, we washed the dishes.",
                        "Having lost his key, Ben climbed in.",
                        "Having missed the bus, Lea walked."
                    ],
                    "correct": 0,
                    "explanation": "Die Teller haben nicht gegessen – dangling participle; das Subjekt muss we sein."
                },
                {
                    "id": "participlesk9l2u_schwer_4",
                    "category": "kurs_participles_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "participle_clauses",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "the man interviewing … / the man interviewed … – Unterschied?",
                    "answers": [
                        "beide Male: er wird von jemandem interviewt",
                        "er führt das Interview / er wird interviewt",
                        "beide Male: er führt das Interview",
                        "das eine ist Gegenwart / das andere ist Zukunft"
                    ],
                    "correct": 1,
                    "explanation": "-ing = aktiv (er interviewt), 3. Form = passiv (er wird interviewt)."
                }
            ]
        },
        "test": [
            {
                "id": "participlesk9l2_test_1",
                "category": "kurs_participles_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "participle_clauses",
                "difficulty": "leicht",
                "points": 10,
                "question": "The woman ___ to the teacher is my aunt.",
                "answers": [
                    "talk",
                    "talked",
                    "talks",
                    "talking"
                ],
                "correct": 3,
                "explanation": "Aktiv (who is talking) → present participle talking."
            },
            {
                "id": "participlesk9l2_test_2",
                "category": "kurs_participles_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "participle_clauses",
                "difficulty": "leicht",
                "points": 10,
                "question": "Toys ___ in China are often cheap.",
                "answers": [
                    "made",
                    "making",
                    "makes",
                    "make"
                ],
                "correct": 0,
                "explanation": "Spielzeug wird hergestellt (passiv) → past participle made."
            },
            {
                "id": "participlesk9l2_test_3",
                "category": "kurs_participles_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "participle_clauses",
                "difficulty": "mittel",
                "points": 10,
                "question": "Having ___ the letter, she put it in an envelope.",
                "answers": [
                    "written",
                    "writing",
                    "write",
                    "wrote"
                ],
                "correct": 0,
                "explanation": "having + 3. Form: written (nicht die 2. Form wrote)."
            },
            {
                "id": "participlesk9l2_test_4",
                "category": "kurs_participles_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "participle_clauses",
                "difficulty": "mittel",
                "points": 10,
                "question": "Is there anyone ___ German in this class? (der Deutsch spricht)",
                "answers": [
                    "spoke",
                    "spoken",
                    "speaking",
                    "speaks"
                ],
                "correct": 2,
                "explanation": "Aktiver Relativsatz (who speaks) → anyone speaking German."
            },
            {
                "id": "participlesk9l2_test_5",
                "category": "kurs_participles_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "participle_clauses",
                "difficulty": "schwer",
                "points": 10,
                "question": "Because he had worked all day, he was tired. → ?",
                "answers": [
                    "Having worked all day, he was tired.",
                    "Had working all day, he was tired.",
                    "Worked all day, he was tired.",
                    "Having work all day, he was tired."
                ],
                "correct": 0,
                "explanation": "Vorzeitiger Grund → having + 3. Form: Having worked …"
            },
            {
                "id": "participlesk9l2_test_6",
                "category": "kurs_participles_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "participle_clauses",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welcher Satz mit Partizip ist richtig?",
                "answers": [
                    "The photos taking on holiday are great.",
                    "The photos take on holiday are great.",
                    "The photos taken on holiday are great.",
                    "The photos took on holiday are great."
                ],
                "correct": 2,
                "explanation": "Die Fotos wurden gemacht (passiv) → past participle taken."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "mediation_k9_l1",
        "kurs": "mediation_k9",
        "order": 1,
        "icon": "🔁",
        "title": "Was ist Mediation?",
        "kurz": "Sinngemäß übertragen und Strategien nutzen",
        "erklaerung": {
            "intro": "<b>Mediation</b> (Sprachmittlung) heißt: Du gibst Inhalte <b>sinngemäß</b> in der anderen Sprache wieder – <b>nicht Wort für Wort</b>. Du wählst nur das aus, was <b>für den Adressaten wichtig</b> ist. Strategien: <b>umschreiben</b> (wenn dir ein Wort fehlt), <b>vereinfachen</b> (kurze Sätze) und <b>Fachbegriffe erklären</b>.",
            "beispiele": [
                "🍾 Pfand → money you get back when you return a bottle (umschreiben)",
                "✂️ Langer Satz → zwei kurze, klare Sätze (vereinfachen)",
                "🏫 Hausmeister → the person who looks after the school building (erklären)",
                "⚠️ Nicht: The train falls out. Sondern: The train is cancelled."
            ],
            "merksatz": "Sinn statt Wörter. Nur das Wichtige. Fehlt ein Wort: umschreiben."
        },
        "uebung": {
            "leicht": [
                {
                    "id": "mediationk9l1u_leicht_1",
                    "category": "kurs_mediation_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Mediation bedeutet …",
                    "answers": [
                        "einen englischen Text auswendig vortragen",
                        "einen Text Wort für Wort in die andere Sprache übersetzen",
                        "Inhalte sinngemäß in eine andere Sprache übertragen",
                        "einen Text ohne Änderung abschreiben"
                    ],
                    "correct": 2,
                    "explanation": "Bei Mediation zählt der Sinn, nicht die wörtliche Übersetzung."
                },
                {
                    "id": "mediationk9l1u_leicht_2",
                    "category": "kurs_mediation_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was gibst du bei der Mediation weiter?",
                    "answers": [
                        "nur die Überschrift des Textes",
                        "nur die wichtigen Infos für den Adressaten",
                        "jedes einzelne Wort des Textes",
                        "nur die Zahlen aus dem Text"
                    ],
                    "correct": 1,
                    "explanation": "Du wählst aus: Wichtig ist, was der Adressat wissen muss."
                },
                {
                    "id": "mediationk9l1u_leicht_3",
                    "category": "kurs_mediation_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Du kennst das englische Wort für 'Pfand' nicht. Was tust du?",
                    "answers": [
                        "Du schreibst einfach das deutsche Wort hin.",
                        "Du lässt die ganze Information weg.",
                        "Du umschreibst es mit einfachen Wörtern.",
                        "Du erfindest ein neues englisches Wort."
                    ],
                    "correct": 2,
                    "explanation": "Strategie Umschreiben: Erkläre das Wort mit Wörtern, die du kennst."
                },
                {
                    "id": "mediationk9l1u_leicht_4",
                    "category": "kurs_mediation_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie heißt Mediation auf Deutsch?",
                    "answers": [
                        "Gedichtinterpretation",
                        "Textanalyse",
                        "Sprachmittlung",
                        "Rechtschreibung"
                    ],
                    "correct": 2,
                    "explanation": "Mediation = Sprachmittlung zwischen zwei Sprachen."
                }
            ],
            "mittel": [
                {
                    "id": "mediationk9l1u_mittel_1",
                    "category": "kurs_mediation_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Umschreibung passt für 'Pfand'?",
                    "answers": [
                        "the price of a new glass bottle",
                        "money you get back when you return a bottle",
                        "money you pay for a bus ticket",
                        "a German word for a plastic bottle"
                    ],
                    "correct": 1,
                    "explanation": "Gute Umschreibung erklärt die Sache: Geld, das man für zurückgebrachte Flaschen bekommt."
                },
                {
                    "id": "mediationk9l1u_mittel_2",
                    "category": "kurs_mediation_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie erklärst du einem Austauschschüler den 'Hausmeister'?",
                    "answers": [
                        "the person who looks after the school building",
                        "the person who cleans your house at home",
                        "the teacher who is the head of the school",
                        "the person who owns the whole school building"
                    ],
                    "correct": 0,
                    "explanation": "Fachbegriff erklären: Was macht diese Person? (BrE auch: caretaker)"
                },
                {
                    "id": "mediationk9l1u_mittel_3",
                    "category": "kurs_mediation_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'Ordnungsamt' → 'the local office that checks rules in town'. Welche Strategie?",
                    "answers": [
                        "wörtlich übersetzen",
                        "Fachbegriff erklären",
                        "Information weglassen",
                        "Satz wiederholen"
                    ],
                    "correct": 1,
                    "explanation": "Begriffe ohne englische Entsprechung erklärst du mit einfachen Worten."
                },
                {
                    "id": "mediationk9l1u_mittel_4",
                    "category": "kurs_mediation_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ein Satz im deutschen Text ist lang und kompliziert. Was tust du?",
                    "answers": [
                        "Du lässt den ganzen Absatz einfach weg.",
                        "Du teilst ihn in kurze, einfache Sätze.",
                        "Du schreibst ihn auf Deutsch ab.",
                        "Du übersetzt ihn genau Wort für Wort."
                    ],
                    "correct": 1,
                    "explanation": "Strategie Vereinfachen: kurze, klare Sätze sind leichter zu verstehen."
                }
            ],
            "schwer": [
                {
                    "id": "mediationk9l1u_schwer_1",
                    "category": "kurs_mediation_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'Bitte keine Fahrräder im Hausflur abstellen.' – beste Mediation?",
                    "answers": [
                        "Bicycles are standing in the hallway.",
                        "Please no bicycles in the house floor put.",
                        "You can leave your bikes in the hallway.",
                        "Please don't leave bikes in the hallway."
                    ],
                    "correct": 3,
                    "explanation": "Sinn korrekt und natürlich wiedergegeben; keine wörtliche Übersetzung (house floor)."
                },
                {
                    "id": "mediationk9l1u_schwer_2",
                    "category": "kurs_mediation_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was ist bei Mediation KEIN Fehler?",
                    "answers": [
                        "eigene Meinung hinzufügen",
                        "Wort für Wort übersetzen",
                        "fehlende Infos erfinden",
                        "unwichtige Details weglassen"
                    ],
                    "correct": 3,
                    "explanation": "Auswählen ist erwünscht; Meinung, Erfundenes und wörtliches Übersetzen sind Fehler."
                },
                {
                    "id": "mediationk9l1u_schwer_3",
                    "category": "kurs_mediation_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'Der Zug fällt aus, es gibt Schienenersatzverkehr.' – beste Mediation?",
                    "answers": [
                        "The train is late, so you have to wait an hour.",
                        "The train falls out, there is rail replacement traffic.",
                        "The train is cancelled, but there's a replacement bus.",
                        "The train is full, so you have to take a taxi."
                    ],
                    "correct": 2,
                    "explanation": "Sinngemäß: ausfallen = be cancelled; Ersatzverkehr = replacement bus."
                },
                {
                    "id": "mediationk9l1u_schwer_4",
                    "category": "kurs_mediation_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Warum ist wörtliches Übersetzen oft schlecht?",
                    "answers": [
                        "Es klingt unnatürlich und ist oft unverständlich.",
                        "Es ist im Englischen grundsätzlich verboten.",
                        "Es wird für den Leser immer viel zu kurz.",
                        "Es enthält niemals die wichtigen Infos."
                    ],
                    "correct": 0,
                    "explanation": "Wort-für-Wort-Übersetzungen ergeben oft falsches oder unverständliches Englisch."
                }
            ]
        },
        "test": [
            {
                "id": "mediationk9l1_test_1",
                "category": "kurs_mediation_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "mediation",
                "difficulty": "leicht",
                "points": 10,
                "question": "Was zählt bei Mediation am meisten?",
                "answers": [
                    "dass der Text möglichst lang wird",
                    "dass der Adressat das Wichtige versteht",
                    "dass viele Fachwörter vorkommen",
                    "dass jedes Wort genau übersetzt wird"
                ],
                "correct": 1,
                "explanation": "Ziel der Mediation ist, dass der Adressat die wichtigen Infos versteht."
            },
            {
                "id": "mediationk9l1_test_2",
                "category": "kurs_mediation_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "mediation",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie erklärst du deiner Gastfamilie die 'Kita'?",
                "answers": [
                    "a place where small children are looked after",
                    "a park with a big playground for kids",
                    "a shop that sells toys for small kids",
                    "a school for children aged 10 to 16"
                ],
                "correct": 0,
                "explanation": "Umschreiben: Was ist eine Kita? Ein Ort, an dem kleine Kinder betreut werden."
            },
            {
                "id": "mediationk9l1_test_3",
                "category": "kurs_mediation_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "mediation",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was bedeutet die Strategie 'vereinfachen'?",
                "answers": [
                    "deutsche Wörter unverändert übernehmen",
                    "jedes Wort im Wörterbuch nachschlagen",
                    "lange Sätze in kurze, klare Sätze teilen",
                    "den Text in der Originalsprache vorlesen"
                ],
                "correct": 2,
                "explanation": "Vereinfachen = komplizierte Sätze kürzer und klarer machen."
            },
            {
                "id": "mediationk9l1_test_4",
                "category": "kurs_mediation_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "mediation",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Mülltrennung' – beste Umschreibung?",
                "answers": [
                    "burning your rubbish in the back garden",
                    "putting different kinds of rubbish in different bins",
                    "throwing all your rubbish into one big bin",
                    "taking your rubbish to another country"
                ],
                "correct": 1,
                "explanation": "Die Umschreibung erklärt, was man tut. BrE: rubbish, bin."
            },
            {
                "id": "mediationk9l1_test_5",
                "category": "kurs_mediation_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "mediation",
                "difficulty": "schwer",
                "points": 10,
                "question": "Was gehört NICHT in eine gute Mediation?",
                "answers": [
                    "deine persönliche Meinung zum Thema",
                    "die wichtigsten Infos für den Adressaten",
                    "kurze, verständliche Sätze",
                    "einfache Umschreibungen schwerer Wörter"
                ],
                "correct": 0,
                "explanation": "Mediation gibt den Inhalt wieder – eigene Meinung gehört nicht hinein."
            },
            {
                "id": "mediationk9l1_test_6",
                "category": "kurs_mediation_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "mediation",
                "difficulty": "schwer",
                "points": 10,
                "question": "'Eintritt frei für Kinder unter 6' – beste Mediation?",
                "answers": [
                    "Children under six can get in for free.",
                    "Children under six have to pay to get in.",
                    "Children over six can get in for free.",
                    "Entry free for children under six years young."
                ],
                "correct": 0,
                "explanation": "Sinn genau erhalten (unter 6, kostenlos) und natürliches Englisch verwenden."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "mediation_k9_l2",
        "kurs": "mediation_k9",
        "order": 2,
        "icon": "🌍",
        "title": "Mediation-Aufgaben lösen",
        "kurz": "Adressat, Textsorte und nützliche Wendungen",
        "erklaerung": {
            "intro": "Typische Aufgaben: <b>Deutsch → Englisch</b> (z. B. der Gastfamilie oder einem Austauschschüler etwas erklären) und <b>Englisch → Deutsch</b> (einen englischen Text auf Deutsch <b>zusammenfassen</b>). Achte auf <b>Adressat</b> (Freund oder Schulleitung?) und <b>Textsorte</b> (Gespräch, E-Mail, Notiz). Nützliche Wendungen: <b>The text is about …</b>, <b>It says that …</b>, <b>Basically, …</b>, <b>In other words, …</b>",
            "beispiele": [
                "📄 The text is about a new rule for mobile phones at school.",
                "🪧 It says that the museum is closed on Mondays.",
                "💡 Basically, you can't park here after 6 pm.",
                "⚠️ Nicht: It tells that … / The text is over … (typische Germanismen)"
            ],
            "merksatz": "Erst klären: Wer liest es, welche Textsorte? Dann mit It says that … / Basically … wiedergeben."
        },
        "uebung": {
            "leicht": [
                {
                    "id": "mediationk9l2u_leicht_1",
                    "category": "kurs_mediation_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie beginnst du eine Zusammenfassung auf Englisch?",
                    "answers": [
                        "The text tells about of …",
                        "The text is about …",
                        "The text is over …",
                        "The text are about …"
                    ],
                    "correct": 1,
                    "explanation": "Korrekt: The text is about … (nicht over – Germanismus)."
                },
                {
                    "id": "mediationk9l2u_leicht_2",
                    "category": "kurs_mediation_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "It ___ that the museum is closed on Mondays.",
                    "answers": [
                        "speaks",
                        "says",
                        "tells",
                        "talks"
                    ],
                    "correct": 1,
                    "explanation": "Für Inhalte von Texten und Schildern: It says that … (tell braucht ein Objekt)."
                },
                {
                    "id": "mediationk9l2u_leicht_3",
                    "category": "kurs_mediation_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Englisch → Deutsch: In welcher Sprache schreibst du die Zusammenfassung?",
                    "answers": [
                        "auf Englisch",
                        "in der Sprache des Originaltexts",
                        "in beiden Sprachen gemischt",
                        "auf Deutsch"
                    ],
                    "correct": 3,
                    "explanation": "Bei Englisch → Deutsch gibst du den Inhalt auf Deutsch wieder."
                },
                {
                    "id": "mediationk9l2u_leicht_4",
                    "category": "kurs_mediation_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wofür benutzt du 'Basically, …'?",
                    "answers": [
                        "um eine Zahl ganz genau anzugeben",
                        "um etwas kurz und einfach zusammenzufassen",
                        "um eine Frage besonders höflich zu stellen",
                        "um dich am Ende eines Briefs zu verabschieden"
                    ],
                    "correct": 1,
                    "explanation": "Basically = im Grunde: leitet eine vereinfachte Zusammenfassung ein."
                }
            ],
            "mittel": [
                {
                    "id": "mediationk9l2u_mittel_1",
                    "category": "kurs_mediation_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Dein Austauschpartner fragt nach einem deutschen Schild. Wie beginnst du?",
                    "answers": [
                        "It says that you mustn't park here.",
                        "It tells that you mustn't park here.",
                        "It says you that mustn't park here.",
                        "It's saying you not park here."
                    ],
                    "correct": 0,
                    "explanation": "It says that … + vollständiger Satz; tell braucht ein Objekt (It tells you …)."
                },
                {
                    "id": "mediationk9l2u_mittel_2",
                    "category": "kurs_mediation_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Adressat: deine Gastfamilie (privat). Welcher Ton passt?",
                    "answers": [
                        "mit möglichst vielen Fachbegriffen",
                        "freundlich und eher locker",
                        "nur Stichpunkte ohne ganze Sätze",
                        "sehr formell wie ein Amtsbrief"
                    ],
                    "correct": 1,
                    "explanation": "Der Adressat bestimmt den Ton: Familie → freundlich, informell."
                },
                {
                    "id": "mediationk9l2u_mittel_3",
                    "category": "kurs_mediation_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Adressat: Schulleitung einer englischen Schule (E-Mail). Welcher Ton passt?",
                    "answers": [
                        "mit vielen Emojis",
                        "locker mit Slang",
                        "höflich und formell",
                        "kurz ohne Anrede"
                    ],
                    "correct": 2,
                    "explanation": "Offizieller Adressat → formeller, höflicher Stil."
                },
                {
                    "id": "mediationk9l2u_mittel_4",
                    "category": "kurs_mediation_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "The article ___ that teenagers sleep too little.",
                    "answers": [
                        "claim",
                        "claims",
                        "is claim",
                        "claiming"
                    ],
                    "correct": 1,
                    "explanation": "Subjekt im Singular (the article) → claims mit -s."
                }
            ],
            "schwer": [
                {
                    "id": "mediationk9l2u_schwer_1",
                    "category": "kurs_mediation_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Deine Gastschwester fragt, was im deutschen Flyer zum Stadtfest steht. Was nennst du NICHT?",
                    "answers": [
                        "Datum und Uhrzeit",
                        "den Ort des Festes",
                        "die Namen aller Sponsoren",
                        "ob der Eintritt etwas kostet"
                    ],
                    "correct": 2,
                    "explanation": "Nur adressatenrelevante Infos weitergeben – Sponsoren interessieren sie nicht."
                },
                {
                    "id": "mediationk9l2u_schwer_2",
                    "category": "kurs_mediation_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Wendung ist korrektes Englisch für 'mit anderen Worten'?",
                    "answers": [
                        "In other words, …",
                        "With other words, …",
                        "In other word, …",
                        "On other words, …"
                    ],
                    "correct": 0,
                    "explanation": "Feste Wendung: In other words (With other words ist ein Germanismus)."
                },
                {
                    "id": "mediationk9l2u_schwer_3",
                    "category": "kurs_mediation_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Aufgabe: 'Schreib deiner Austauschpartnerin, was in dem Zeitungsartikel steht.' Textsorte?",
                    "answers": [
                        "eine informelle E-Mail",
                        "ein Gedicht mit Reimen",
                        "ein formeller Geschäftsbrief",
                        "eine Bewerbung"
                    ],
                    "correct": 0,
                    "explanation": "Adressat Freundin + schriftlich → informelle E-Mail."
                },
                {
                    "id": "mediationk9l2u_schwer_4",
                    "category": "kurs_mediation_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "mediation",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Englisch → Deutsch: Der Artikel nennt 'GCSEs'. Was tust du?",
                    "answers": [
                        "das Wort einfach weglassen und weiterlesen",
                        "ohne Hinweis mit 'Abitur' gleichsetzen",
                        "es als 'Hausaufgaben' übersetzen",
                        "kurz erklären: Abschlussprüfungen mit etwa 16"
                    ],
                    "correct": 3,
                    "explanation": "Kulturelle Begriffe erklärst du kurz, statt sie falsch gleichzusetzen."
                }
            ]
        },
        "test": [
            {
                "id": "mediationk9l2_test_1",
                "category": "kurs_mediation_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "mediation",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Wendung passt für 'Im Text steht, dass …'?",
                "answers": [
                    "The text is saying of …",
                    "The text tells that …",
                    "The text speaks that …",
                    "The text says that …"
                ],
                "correct": 3,
                "explanation": "Inhalt wiedergeben: The text says that …"
            },
            {
                "id": "mediationk9l2_test_2",
                "category": "kurs_mediation_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "mediation",
                "difficulty": "leicht",
                "points": 10,
                "question": "Was klärst du vor jeder Mediation zuerst?",
                "answers": [
                    "Wie viele Wörter hat der Originaltext?",
                    "Wann genau wurde der Text gedruckt?",
                    "Wer ist der Adressat und was braucht er?",
                    "Welche Schriftart hat der Originaltext?"
                ],
                "correct": 2,
                "explanation": "Adressat und Zweck bestimmen, welche Infos wichtig sind."
            },
            {
                "id": "mediationk9l2_test_3",
                "category": "kurs_mediation_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "mediation",
                "difficulty": "mittel",
                "points": 10,
                "question": "Basically, the school ___ mobile phones in class.",
                "answers": [
                    "not allow",
                    "doesn't allow",
                    "doesn't allows",
                    "don't allow"
                ],
                "correct": 1,
                "explanation": "the school = 3. Person Singular → doesn't + Infinitiv ohne -s."
            },
            {
                "id": "mediationk9l2_test_4",
                "category": "kurs_mediation_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "mediation",
                "difficulty": "mittel",
                "points": 10,
                "question": "Für deinen Gastvater: 'Die Apotheke hat Notdienst.' – beste Mediation?",
                "answers": [
                    "The doctor is at the chemist's today.",
                    "The chemist's is closed all weekend.",
                    "The chemist's is open for emergencies.",
                    "The pharmacy has emergency service duty."
                ],
                "correct": 2,
                "explanation": "Sinngemäß und natürlich: Notdienst = open for emergencies (BrE: chemist's)."
            },
            {
                "id": "mediationk9l2_test_5",
                "category": "kurs_mediation_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "mediation",
                "difficulty": "schwer",
                "points": 10,
                "question": "Was ist bei Englisch → Deutsch-Mediation richtig?",
                "answers": [
                    "sinngemäß auf Deutsch zusammenfassen",
                    "englische Sätze wörtlich übernehmen",
                    "eigene Infos zum Thema ergänzen",
                    "alle Zahlen und Namen weglassen"
                ],
                "correct": 0,
                "explanation": "Inhalt sinngemäß und ausgewählt auf Deutsch wiedergeben."
            },
            {
                "id": "mediationk9l2_test_6",
                "category": "kurs_mediation_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "mediation",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welcher Satz ist sprachlich korrekt?",
                "answers": [
                    "The text is about a new law for e-scooters.",
                    "The text handles about a new law for e-scooters.",
                    "The text is over a new law for e-scooters.",
                    "The text treats from a new law for e-scooters."
                ],
                "correct": 0,
                "explanation": "Korrekte Wendung: be about; over/handles/treats from sind Germanismen."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "formal_writing_k9_l1",
        "kurs": "formal_writing_k9",
        "order": 1,
        "icon": "✉️",
        "title": "Aufbau formeller Briefe",
        "kurz": "Anrede, Schlussformel, Betreff und formelle Sprache",
        "erklaerung": {
            "intro": "Formelle Briefe und E-Mails haben feste Regeln. <b>Anrede:</b> Name unbekannt → <b>Dear Sir or Madam</b>; Name bekannt → <b>Dear Ms/Mr Smith</b> (britisch ohne Punkt). <b>Schluss:</b> Dear Sir or Madam → <b>Yours faithfully</b>; Dear Ms Smith → <b>Yours sincerely</b>. Dazu: <b>Betreff</b>, klare <b>Absätze</b> (ein Gedanke pro Absatz) und <b>formelle Sprache</b> – <b>keine Kurzformen</b> (I am statt I'm), kein Slang.",
            "beispiele": [
                "❓ Dear Sir or Madam, … Yours faithfully, (Name unbekannt)",
                "👤 Dear Ms Taylor, … Yours sincerely, (Name bekannt)",
                "📌 Subject: Work experience placement (Betreff)",
                "⚠️ Nicht: I'm, don't, can't, wanna – sondern I am, do not, cannot, want to"
            ],
            "merksatz": "Sir or Madam → faithfully. Name → sincerely. Keine Kurzformen!"
        },
        "uebung": {
            "leicht": [
                {
                    "id": "formalwritingk9l1u_leicht_1",
                    "category": "kurs_formal_writing_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Formelle Anrede, wenn du den Namen nicht kennst?",
                    "answers": [
                        "Hello my friend,",
                        "Dear Mister,",
                        "Dear Sir or Madam,",
                        "Hi there,"
                    ],
                    "correct": 2,
                    "explanation": "Name unbekannt → Dear Sir or Madam."
                },
                {
                    "id": "formalwritingk9l1u_leicht_2",
                    "category": "kurs_formal_writing_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Schlussformel gehört zu 'Dear Sir or Madam'?",
                    "answers": [
                        "Cheers,",
                        "Yours faithfully,",
                        "Yours sincerely,",
                        "Love,"
                    ],
                    "correct": 1,
                    "explanation": "Britische Regel: Dear Sir or Madam → Yours faithfully."
                },
                {
                    "id": "formalwritingk9l1u_leicht_3",
                    "category": "kurs_formal_writing_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Schlussformel gehört zu 'Dear Ms Smith'?",
                    "answers": [
                        "See you,",
                        "Love from,",
                        "Yours faithfully,",
                        "Yours sincerely,"
                    ],
                    "correct": 3,
                    "explanation": "Name bekannt → Yours sincerely."
                },
                {
                    "id": "formalwritingk9l1u_leicht_4",
                    "category": "kurs_formal_writing_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Form passt in einen formellen Brief?",
                    "answers": [
                        "I'd like",
                        "I'd love",
                        "I wanna",
                        "I would like"
                    ],
                    "correct": 3,
                    "explanation": "Formell: keine Kurzformen und kein Slang → I would like."
                }
            ],
            "mittel": [
                {
                    "id": "formalwritingk9l1u_mittel_1",
                    "category": "kurs_formal_writing_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Formell umformulieren: 'I can't come.'",
                    "answers": [
                        "I won't come, OK?",
                        "I am unable to attend.",
                        "No way I can come.",
                        "I can't make it, sorry."
                    ],
                    "correct": 1,
                    "explanation": "Formell ohne Kurzform und Umgangssprache: I am unable to attend."
                },
                {
                    "id": "formalwritingk9l1u_mittel_2",
                    "category": "kurs_formal_writing_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wo steht die Betreffzeile?",
                    "answers": [
                        "vor dem Brieftext bzw. im Betreff-Feld",
                        "mitten im zweiten Absatz",
                        "ganz am Ende nach der Unterschrift",
                        "hinter der Schlussformel"
                    ],
                    "correct": 0,
                    "explanation": "Der Betreff steht vor dem eigentlichen Text – im britischen Brief meist direkt unter der Anrede, bei E-Mails im Betreff-Feld."
                },
                {
                    "id": "formalwritingk9l1u_mittel_3",
                    "category": "kurs_formal_writing_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Anrede an eine Frau, deren Familienstand du nicht kennst?",
                    "answers": [
                        "Dear Miss Taylor,",
                        "Dear Ms Taylor,",
                        "Dear Madam Taylor,",
                        "Dear Mrs Taylor,"
                    ],
                    "correct": 1,
                    "explanation": "Ms ist neutral und passt immer; Mrs/Miss setzen den Familienstand voraus."
                },
                {
                    "id": "formalwritingk9l1u_mittel_4",
                    "category": "kurs_formal_writing_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Wort ist am formellsten?",
                    "answers": [
                        "pick up",
                        "grab",
                        "receive",
                        "get"
                    ],
                    "correct": 2,
                    "explanation": "receive ist formell; get, grab und pick up sind umgangssprachlicher."
                }
            ],
            "schwer": [
                {
                    "id": "formalwritingk9l1u_schwer_1",
                    "category": "kurs_formal_writing_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Kombination ist korrekt?",
                    "answers": [
                        "Dear Mr Brown … Love from",
                        "Dear Sir or Madam … Yours sincerely",
                        "Dear Mr Brown … Yours faithfully",
                        "Dear Sir or Madam … Yours faithfully"
                    ],
                    "correct": 3,
                    "explanation": "Name unbekannt → faithfully; Name bekannt → sincerely."
                },
                {
                    "id": "formalwritingk9l1u_schwer_2",
                    "category": "kurs_formal_writing_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Satz ist formell?",
                    "answers": [
                        "Hope to hear from ya really soon!",
                        "Write back soon, OK? Thanks a lot!",
                        "I would be grateful for a quick reply.",
                        "Gimme an answer ASAP, please."
                    ],
                    "correct": 2,
                    "explanation": "Formell: vollständige Sätze, höflich, ohne Slang (I would be grateful …)."
                },
                {
                    "id": "formalwritingk9l1u_schwer_3",
                    "category": "kurs_formal_writing_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie gliederst du den Text in Absätze?",
                    "answers": [
                        "ein Hauptgedanke pro Absatz",
                        "alle Gedanken in einem Absatz",
                        "gar keine Absätze im Brief",
                        "jeder Satz ein eigener Absatz"
                    ],
                    "correct": 0,
                    "explanation": "Jeder Absatz behandelt einen Hauptgedanken – das macht den Brief übersichtlich."
                },
                {
                    "id": "formalwritingk9l1u_schwer_4",
                    "category": "kurs_formal_writing_k9_l1",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Warum keine Kurzformen (I'm, don't) im formellen Brief?",
                    "answers": [
                        "Es gibt sie nur im US-Englisch.",
                        "Sie sind grammatisch falsch.",
                        "Sie machen den Brief zu lang.",
                        "Sie wirken umgangssprachlich."
                    ],
                    "correct": 3,
                    "explanation": "Kurzformen sind korrekt, aber informell – daher im formellen Brief ausschreiben."
                }
            ]
        },
        "test": [
            {
                "id": "formalwritingk9l1_test_1",
                "category": "kurs_formal_writing_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "formal_writing",
                "difficulty": "leicht",
                "points": 10,
                "question": "'Yours faithfully' benutzt du, wenn …",
                "answers": [
                    "du den Namen kennst",
                    "du einem Freund schreibst",
                    "du den Namen nicht kennst",
                    "du eine SMS schreibst"
                ],
                "correct": 2,
                "explanation": "Yours faithfully passt zu Dear Sir or Madam (Name unbekannt)."
            },
            {
                "id": "formalwritingk9l1_test_2",
                "category": "kurs_formal_writing_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "formal_writing",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Anrede ist formell?",
                "answers": [
                    "Dear Mr Jones,",
                    "Hiya Jonesy,",
                    "Yo Mr Jones,",
                    "Hey Mr Jones,"
                ],
                "correct": 0,
                "explanation": "Formelle Anrede mit Name: Dear Mr Jones."
            },
            {
                "id": "formalwritingk9l1_test_3",
                "category": "kurs_formal_writing_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "formal_writing",
                "difficulty": "mittel",
                "points": 10,
                "question": "Formell umschreiben: 'I don't know.'",
                "answers": [
                    "I do not know.",
                    "No idea, mate.",
                    "Don't know.",
                    "I dunno."
                ],
                "correct": 0,
                "explanation": "Formell: Kurzform ausschreiben → I do not know."
            },
            {
                "id": "formalwritingk9l1_test_4",
                "category": "kurs_formal_writing_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "formal_writing",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie schreibt man 'Mr' im britischen Englisch?",
                "answers": [
                    "MR (in Großbuchstaben)",
                    "Mister (immer ausgeschrieben)",
                    "Mr. (mit Punkt) ist Pflicht",
                    "Mr (ohne Punkt)"
                ],
                "correct": 3,
                "explanation": "Britisch: Mr, Mrs, Ms, Dr ohne Punkt."
            },
            {
                "id": "formalwritingk9l1_test_5",
                "category": "kurs_formal_writing_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "formal_writing",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welche Kombination ist falsch?",
                "answers": [
                    "Dear Sir or Madam … Yours faithfully",
                    "Dear Ms Green … Yours sincerely",
                    "Dear Ms Green … Yours faithfully",
                    "Dear Mr Lee … Yours sincerely"
                ],
                "correct": 2,
                "explanation": "Bei bekanntem Namen (Ms Green) muss Yours sincerely stehen."
            },
            {
                "id": "formalwritingk9l1_test_6",
                "category": "kurs_formal_writing_k9_l1",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "formal_writing",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welcher Satz passt in einen formellen Brief?",
                "answers": [
                    "Also kids are really cool, I think, you know.",
                    "And yeah, I really like kids a lot, honestly.",
                    "Plus, I'm kinda good with kids and stuff like that.",
                    "Furthermore, I have experience with children."
                ],
                "correct": 3,
                "explanation": "Formelle Verbindungswörter (Furthermore) und keine Umgangssprache."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "formal_writing_k9_l2",
        "kurs": "formal_writing_k9",
        "order": 2,
        "icon": "📝",
        "title": "Anfrage, Beschwerde, Bewerbung",
        "kurz": "Typische Wendungen und höflicher Ton",
        "erklaerung": {
            "intro": "Drei typische Briefarten: <b>enquiry</b> (Anfrage), <b>complaint</b> (Beschwerde) und <b>application</b> (Bewerbung, z. B. um ein Praktikum = <b>work experience placement</b>). Feste Wendungen: <b>I am writing to</b> enquire/complain/apply …, <b>I would be grateful if you could</b> …, <b>I look forward to hearing from you</b>. Höflich bleiben – auch bei Beschwerden: indirekt und sachlich formulieren.",
            "beispiele": [
                "❓ I am writing to enquire about your summer courses.",
                "😠 I am writing to complain about the poor service I received.",
                "💼 I am writing to apply for a work experience placement.",
                "⚠️ Nicht: I look forward to hear from you. – nach to hier immer -ing!"
            ],
            "merksatz": "I am writing to … / I would be grateful if you could … / I look forward to hearing from you."
        },
        "uebung": {
            "leicht": [
                {
                    "id": "formalwritingk9l2u_leicht_1",
                    "category": "kurs_formal_writing_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "I am writing ___ ask about your summer courses.",
                    "answers": [
                        "because",
                        "to",
                        "that",
                        "for"
                    ],
                    "correct": 1,
                    "explanation": "Feste Wendung: I am writing to + Infinitiv."
                },
                {
                    "id": "formalwritingk9l2u_leicht_2",
                    "category": "kurs_formal_writing_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "I look forward to ___ from you.",
                    "answers": [
                        "hearing",
                        "be hearing",
                        "hear",
                        "heard"
                    ],
                    "correct": 0,
                    "explanation": "In look forward to ist to eine Präposition → danach -ing."
                },
                {
                    "id": "formalwritingk9l2u_leicht_3",
                    "category": "kurs_formal_writing_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "I would be grateful if you could ___ me a brochure.",
                    "answers": [
                        "sending",
                        "to send",
                        "send",
                        "sent"
                    ],
                    "correct": 2,
                    "explanation": "Nach could steht der Infinitiv ohne to."
                },
                {
                    "id": "formalwritingk9l2u_leicht_4",
                    "category": "kurs_formal_writing_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie heißt eine Beschwerde auf Englisch?",
                    "answers": [
                        "a letter of thanks",
                        "a letter of application",
                        "a letter of complaint",
                        "a letter of enquiry"
                    ],
                    "correct": 2,
                    "explanation": "complaint = Beschwerde; application = Bewerbung; enquiry = Anfrage."
                }
            ],
            "mittel": [
                {
                    "id": "formalwritingk9l2u_mittel_1",
                    "category": "kurs_formal_writing_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "I am writing to apply ___ a work experience placement.",
                    "answers": [
                        "on",
                        "to",
                        "for",
                        "at"
                    ],
                    "correct": 2,
                    "explanation": "Feste Verbindung: apply for something."
                },
                {
                    "id": "formalwritingk9l2u_mittel_2",
                    "category": "kurs_formal_writing_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "I am writing to ___ about the poor service.",
                    "answers": [
                        "complaining",
                        "complaint",
                        "complained",
                        "complain"
                    ],
                    "correct": 3,
                    "explanation": "Nach to steht der Infinitiv: to complain (complaint ist das Nomen)."
                },
                {
                    "id": "formalwritingk9l2u_mittel_3",
                    "category": "kurs_formal_writing_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "I would like to ___ whether you have any rooms available.",
                    "answers": [
                        "enquired",
                        "enquiring",
                        "enquire",
                        "enquiry"
                    ],
                    "correct": 2,
                    "explanation": "Nach to + Infinitiv: enquire (BrE); enquiry ist das Nomen."
                },
                {
                    "id": "formalwritingk9l2u_mittel_4",
                    "category": "kurs_formal_writing_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Höflich formulieren: 'Send me the money back!'",
                    "answers": [
                        "I want my money back, you hear?",
                        "Give me my money back now!",
                        "Money back or else, OK?",
                        "I would like a full refund, please."
                    ],
                    "correct": 3,
                    "explanation": "Auch in Beschwerden höflich und indirekt: I would like a full refund."
                }
            ],
            "schwer": [
                {
                    "id": "formalwritingk9l2u_schwer_1",
                    "category": "kurs_formal_writing_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "I would appreciate it if you ___ the matter.",
                    "answers": [
                        "can looking into",
                        "could look into",
                        "looked to into",
                        "could looking into"
                    ],
                    "correct": 1,
                    "explanation": "could + Infinitiv ohne to: could look into (= sich darum kümmern)."
                },
                {
                    "id": "formalwritingk9l2u_schwer_2",
                    "category": "kurs_formal_writing_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Bewerbung: Welcher Satz passt am besten?",
                    "answers": [
                        "You should definitely take me, trust me.",
                        "I reckon I'd be dead good at it.",
                        "I believe I would be a suitable candidate.",
                        "I'm totally the best person for this."
                    ],
                    "correct": 2,
                    "explanation": "Bewerbung: selbstbewusst, aber formell und ohne Umgangssprache."
                },
                {
                    "id": "formalwritingk9l2u_schwer_3",
                    "category": "kurs_formal_writing_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Schluss passt zu einer Beschwerde an 'Dear Sir or Madam'?",
                    "answers": [
                        "Write back really soon, okay? Lots of love,",
                        "I look forward to your reply. Yours faithfully,",
                        "I hope to hear from you soon. Yours sincerely,",
                        "Hope you sort it all out soon, mate! Cheers,"
                    ],
                    "correct": 1,
                    "explanation": "Formeller Schlusssatz + Yours faithfully bei unbekanntem Namen."
                },
                {
                    "id": "formalwritingk9l2u_schwer_4",
                    "category": "kurs_formal_writing_k9_l2",
                    "area": "schule",
                    "grade": 9,
                    "subject": "englisch",
                    "topic": "formal_writing",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Please find ___ my CV.",
                    "answers": [
                        "attached",
                        "to attach",
                        "attaching",
                        "attach"
                    ],
                    "correct": 0,
                    "explanation": "Feste Wendung in E-Mails: Please find attached …"
                }
            ]
        },
        "test": [
            {
                "id": "formalwritingk9l2_test_1",
                "category": "kurs_formal_writing_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "formal_writing",
                "difficulty": "leicht",
                "points": 10,
                "question": "I look forward to ___ your reply.",
                "answers": [
                    "receiving",
                    "be receiving",
                    "receive",
                    "received"
                ],
                "correct": 0,
                "explanation": "look forward to + -ing: receiving."
            },
            {
                "id": "formalwritingk9l2_test_2",
                "category": "kurs_formal_writing_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "formal_writing",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Wendung passt zum Beginn eines formellen Briefs?",
                "answers": [
                    "So, about that thing …",
                    "Just wanted to ask you about …",
                    "Hey, what's up with …",
                    "I am writing to enquire about …"
                ],
                "correct": 3,
                "explanation": "Formeller Einstieg: I am writing to + Zweck."
            },
            {
                "id": "formalwritingk9l2_test_3",
                "category": "kurs_formal_writing_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "formal_writing",
                "difficulty": "mittel",
                "points": 10,
                "question": "I am writing ___ response to your advertisement.",
                "answers": [
                    "for",
                    "in",
                    "at",
                    "on"
                ],
                "correct": 1,
                "explanation": "Feste Wendung: in response to."
            },
            {
                "id": "formalwritingk9l2_test_4",
                "category": "kurs_formal_writing_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "formal_writing",
                "difficulty": "mittel",
                "points": 10,
                "question": "Unfortunately, the parcel arrived ___ damaged.",
                "answers": [
                    "baddest",
                    "badly",
                    "bad",
                    "worse"
                ],
                "correct": 1,
                "explanation": "Ein Adjektiv (damaged) wird durch ein Adverb verstärkt: badly damaged."
            },
            {
                "id": "formalwritingk9l2_test_5",
                "category": "kurs_formal_writing_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "formal_writing",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welcher Satz ist am höflichsten und formell?",
                "answers": [
                    "Can we meet up sometime next week, yeah?",
                    "Would it be possible to arrange a meeting?",
                    "I need a meeting with you as soon as possible.",
                    "Let's just meet sometime soon, OK?"
                ],
                "correct": 1,
                "explanation": "Höfliche indirekte Frage: Would it be possible to …?"
            },
            {
                "id": "formalwritingk9l2_test_6",
                "category": "kurs_formal_writing_k9_l2",
                "area": "schule",
                "grade": 9,
                "subject": "englisch",
                "topic": "formal_writing",
                "difficulty": "schwer",
                "points": 10,
                "question": "Bewerbung an 'Dear Mr Harris' – korrekter Schluss?",
                "answers": [
                    "I'm looking forward to hearing from ya. Cheers,",
                    "I look forward to hearing from you. Yours faithfully,",
                    "I look forward to hearing from you. Yours sincerely,",
                    "I look forward to hear from you. Yours sincerely,"
                ],
                "correct": 2,
                "explanation": "look forward to + -ing und bei bekanntem Namen Yours sincerely."
            }
        ],
        "bestehenAb": 0.8
    }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) {
        extraKurse.forEach(function (k) {
            if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k);
        });
    }
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) {
            if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l);
        });
    }
    if (typeof window !== "undefined") {
        window.K9_AUSBAU_KURSE = extraKurse;
        window.K9_AUSBAU_LEKTIONEN = extraLektionen;
    }
})();
