// Klasse 8 – zweite Lektionen: Deutsch (Sprachliche Mittel, Argumentieren/Erörterung).
// Hängt nur Lektionen an. topic = Thema der Wissensfragen. Wird NACH lektionen.js geladen.
(function () {
    const extraLektionen = [
    {
        "id": "sprach_k8_l2",
        "kurs": "sprachmittel_k8",
        "order": 2,
        "icon": "🎭",
        "title": "Weitere Stilmittel und ihre Wirkung",
        "kurz": "Anapher, Klimax, Antithese, Ellipse …",
        "erklaerung": {
            "intro": "Neben Vergleich und Metapher gibt es Mittel, die mit dem <b>Satzbau</b> arbeiten: <b>Anapher</b> (gleicher Anfang mehrerer Sätze), <b>Parallelismus</b> (gleicher Satzbau), <b>Antithese</b> (Gegensätze), <b>Klimax</b> (Steigerung), <b>Ellipse</b> (unvollständiger Satz). Dazu kommen <b>Lautmalerei</b> (Wörter klingen wie das Geräusch) und <b>Euphemismus</b> (Beschönigung). In der Analyse gilt: <b>Mittel + Textbeleg + Wirkung</b>.",
            "merksatz": "Anapher = gleicher Anfang. Klimax = Steigerung. Antithese = Gegensatz. Ellipse = Wort fehlt. In der Analyse: Mittel benennen, Stelle zitieren, Wirkung erklären.",
            "beispiele": [
                "🔁 <b>Wir</b> kämpfen, <b>wir</b> siegen, <b>wir</b> feiern. – Anapher.",
                "📈 Er kam, sah und siegte. – Klimax (Steigerung).",
                "⚖️ Himmel und Hölle, Tag und Nacht. – Antithese.",
                "💥 Peng! Zisch! – Lautmalerei."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "sprachk8l2u_leicht_1",
                    "category": "kurs_sprach_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "sprachliche_mittel",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ist eine Anapher?",
                    "answers": [
                        "gleicher Satzanfang",
                        "gleiches Satzende",
                        "ein Gegensatz",
                        "eine Übertreibung"
                    ],
                    "correct": 0,
                    "explanation": "Bei der Anapher beginnen mehrere Sätze oder Verse gleich."
                },
                {
                    "id": "sprachk8l2u_leicht_2",
                    "category": "kurs_sprach_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "sprachliche_mittel",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ist eine Klimax?",
                    "answers": [
                        "eine Steigerung",
                        "ein Gegensatz",
                        "eine Wiederholung am Ende",
                        "eine Abkürzung"
                    ],
                    "correct": 0,
                    "explanation": "Klimax: Die Aussage steigert sich Schritt für Schritt."
                },
                {
                    "id": "sprachk8l2u_leicht_3",
                    "category": "kurs_sprach_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "sprachliche_mittel",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "'Zisch! Peng!' Welches Mittel?",
                    "answers": [
                        "Lautmalerei",
                        "Antithese",
                        "Anapher",
                        "Klimax"
                    ],
                    "correct": 0,
                    "explanation": "Die Wörter ahmen Geräusche nach – Lautmalerei."
                },
                {
                    "id": "sprachk8l2u_leicht_4",
                    "category": "kurs_sprach_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "sprachliche_mittel",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ist eine Antithese?",
                    "answers": [
                        "zwei Gegensätze stehen nebeneinander",
                        "ein Wort wird am Anfang wiederholt",
                        "ein bildhafter Vergleich mit wie",
                        "eine höfliche Beschönigung"
                    ],
                    "correct": 0,
                    "explanation": "Antithese: Gegensätze werden gegenübergestellt."
                }
            ],
            "mittel": [
                {
                    "id": "sprachk8l2u_mittel_1",
                    "category": "kurs_sprach_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "sprachliche_mittel",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'Jung und Alt, Arm und Reich' – welches Mittel?",
                    "answers": [
                        "Antithese",
                        "Klimax",
                        "Anapher",
                        "Lautmalerei"
                    ],
                    "correct": 0,
                    "explanation": "Gegensätze stehen nebeneinander – Antithese."
                },
                {
                    "id": "sprachk8l2u_mittel_2",
                    "category": "kurs_sprach_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "sprachliche_mittel",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'Je früher, desto besser.' – Was fehlt?",
                    "answers": [
                        "das Verb",
                        "das Adjektiv",
                        "das Komma",
                        "der Artikel"
                    ],
                    "correct": 0,
                    "explanation": "Im Satz fehlt das Verb (ist) – Ellipse."
                },
                {
                    "id": "sprachk8l2u_mittel_3",
                    "category": "kurs_sprach_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "sprachliche_mittel",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was ist ein Euphemismus?",
                    "answers": [
                        "eine beschönigende Umschreibung",
                        "eine starke Übertreibung",
                        "ein Wortspiel mit Lauten",
                        "ein Satz, dem das Verb fehlt"
                    ],
                    "correct": 0,
                    "explanation": "Beispiel: 'entschlafen' statt 'sterben'."
                },
                {
                    "id": "sprachk8l2u_mittel_4",
                    "category": "kurs_sprach_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "sprachliche_mittel",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "'Ich kam, ich sah, ich siegte.' – Welches Mittel ist es nicht?",
                    "answers": [
                        "Antithese",
                        "Anapher",
                        "Parallelismus",
                        "Klimax"
                    ],
                    "correct": 0,
                    "explanation": "Gleicher Anfang (Anapher), gleicher Bau (Parallelismus), Steigerung (Klimax) – aber kein Gegensatz."
                }
            ],
            "schwer": [
                {
                    "id": "sprachk8l2u_schwer_1",
                    "category": "kurs_sprach_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "sprachliche_mittel",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Wirkung hat eine Anapher oft?",
                    "answers": [
                        "Sie betont und prägt sich ein.",
                        "Sie macht den Text kürzer.",
                        "Sie beschönigt etwas.",
                        "Sie stellt Gegensätze dar."
                    ],
                    "correct": 0,
                    "explanation": "Durch die Wiederholung am Anfang wirkt die Aussage eindringlich."
                },
                {
                    "id": "sprachk8l2u_schwer_2",
                    "category": "kurs_sprach_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "sprachliche_mittel",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Analysesatz ist am besten?",
                    "answers": [
                        "Die Anapher 'Wir …' betont das Gemeinsame.",
                        "Im Text gibt es eine Anapher mit 'Wir'.",
                        "Die Anapher im Text ist sehr schön gemacht.",
                        "Der Text verwendet viele sprachliche Mittel."
                    ],
                    "correct": 0,
                    "explanation": "Gut: Mittel, Beleg und Wirkung in einem Satz."
                },
                {
                    "id": "sprachk8l2u_schwer_3",
                    "category": "kurs_sprach_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "sprachliche_mittel",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'freisetzen' statt 'entlassen' ist …",
                    "answers": [
                        "ein Euphemismus",
                        "eine Hyperbel",
                        "eine Antithese",
                        "eine Ellipse"
                    ],
                    "correct": 0,
                    "explanation": "Die harte Sache wird beschönigt – Euphemismus."
                },
                {
                    "id": "sprachk8l2u_schwer_4",
                    "category": "kurs_sprach_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "sprachliche_mittel",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was ist ein Parallelismus?",
                    "answers": [
                        "gleich gebaute Sätze nacheinander",
                        "zwei Gegensätze nebeneinander",
                        "ein Satz, dem das Verb fehlt",
                        "ein Wort, das Geräusche nachahmt"
                    ],
                    "correct": 0,
                    "explanation": "Gleicher Satzbau: Das Haus ist alt, der Garten ist groß."
                }
            ]
        },
        "test": [
            {
                "id": "sprachk8l2_test_1",
                "category": "kurs_sprach_k8_l2",
                "area": "schule",
                "grade": 8,
                "subject": "deutsch",
                "topic": "sprachliche_mittel",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Wer kämpft, kann verlieren. Wer nicht kämpft, hat verloren.' Mittel?",
                "answers": [
                    "Antithese",
                    "Lautmalerei",
                    "Euphemismus",
                    "Ellipse"
                ],
                "correct": 0,
                "explanation": "kämpfen – nicht kämpfen: ein Gegensatz (Antithese)."
            },
            {
                "id": "sprachk8l2_test_2",
                "category": "kurs_sprach_k8_l2",
                "area": "schule",
                "grade": 8,
                "subject": "deutsch",
                "topic": "sprachliche_mittel",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Gut, besser, am besten!' – welches Mittel?",
                "answers": [
                    "Klimax",
                    "Anapher",
                    "Lautmalerei",
                    "Euphemismus"
                ],
                "correct": 0,
                "explanation": "Die Aussage steigert sich – Klimax."
            },
            {
                "id": "sprachk8l2_test_3",
                "category": "kurs_sprach_k8_l2",
                "area": "schule",
                "grade": 8,
                "subject": "deutsch",
                "topic": "sprachliche_mittel",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Kuckuck! Miau! Wau!' – welches Mittel?",
                "answers": [
                    "Lautmalerei",
                    "Antithese",
                    "Parallelismus",
                    "Metapher"
                ],
                "correct": 0,
                "explanation": "Tierlaute werden nachgeahmt – Lautmalerei."
            },
            {
                "id": "sprachk8l2_test_4",
                "category": "kurs_sprach_k8_l2",
                "area": "schule",
                "grade": 8,
                "subject": "deutsch",
                "topic": "sprachliche_mittel",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was gehört in eine gute Analyse?",
                "answers": [
                    "Mittel, Beleg, Wirkung",
                    "nur das Mittel",
                    "nur die Wirkung",
                    "eine Inhaltsangabe"
                ],
                "correct": 0,
                "explanation": "Benennen, zitieren, Wirkung erklären."
            },
            {
                "id": "sprachk8l2_test_5",
                "category": "kurs_sprach_k8_l2",
                "area": "schule",
                "grade": 8,
                "subject": "deutsch",
                "topic": "sprachliche_mittel",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Ende gut, alles gut.' – Was fehlt?",
                "answers": [
                    "das Verb",
                    "das Subjekt",
                    "das Komma",
                    "das Adjektiv"
                ],
                "correct": 0,
                "explanation": "Das Verb fehlt – es ist eine Ellipse."
            },
            {
                "id": "sprachk8l2_test_6",
                "category": "kurs_sprach_k8_l2",
                "area": "schule",
                "grade": 8,
                "subject": "deutsch",
                "topic": "sprachliche_mittel",
                "difficulty": "mittel",
                "points": 10,
                "question": "'Nie wieder Krieg, nie wieder Hass.' Mittel?",
                "answers": [
                    "Anapher",
                    "Antithese",
                    "Euphemismus",
                    "Lautmalerei"
                ],
                "correct": 0,
                "explanation": "Beide Teile beginnen mit 'nie wieder' – Anapher."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "argu_k8_l2",
        "kurs": "argumentieren_k8",
        "order": 2,
        "icon": "🧱",
        "title": "Eine Erörterung aufbauen",
        "kurz": "Einleitung, linear oder Pro und Contra, Schluss",
        "erklaerung": {
            "intro": "Eine <b>Erörterung</b> hat drei Teile: <b>Einleitung</b> (Anlass und Frage), <b>Hauptteil</b> (Argumente) und <b>Schluss</b> (eigenes Urteil). Die <b>lineare</b> Erörterung sammelt Argumente für <b>eine</b> Seite. Die <b>dialektische</b> wägt <b>Pro und Contra</b> ab. Ordne die Argumente nach Stärke: das <b>stärkste zuletzt</b>. Verbinde mit Wörtern wie <i>außerdem, dagegen, folglich</i>. Beim <b>Sanduhr-Prinzip</b> kommen erst alle Argumente der Gegenseite, dann die der eigenen Seite. Beim <b>Ping-Pong-Prinzip</b> wechseln sich Pro und Contra ab.",
            "merksatz": "Einleitung – Hauptteil – Schluss. Linear = eine Seite, dialektisch = Pro und Contra. Stärkstes Argument zuletzt, im Schluss klar Stellung beziehen.",
            "beispiele": [
                "❓ Einleitung: Viele Schulen diskutieren, ob Handys im Unterricht erlaubt sein sollen.",
                "➕ Pro: Handys können beim Recherchieren helfen.",
                "➖ Contra: Sie lenken leicht ab.",
                "⚖️ Schluss: Ich bin für klare Handy-Regeln statt eines Verbots."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "arguk8l2u_leicht_1",
                    "category": "kurs_argu_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "argumentieren",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche drei Teile hat eine Erörterung?",
                    "answers": [
                        "Einleitung, Hauptteil, Schluss",
                        "These, Beispiel, Ende",
                        "Anfang, Mitte, Fazit-Frage",
                        "Titel, Text, Quelle"
                    ],
                    "correct": 0,
                    "explanation": "Klassischer Aufbau: Einleitung, Hauptteil, Schluss."
                },
                {
                    "id": "arguk8l2u_leicht_2",
                    "category": "kurs_argu_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "argumentieren",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was macht eine dialektische Erörterung?",
                    "answers": [
                        "Sie wägt Pro und Contra ab.",
                        "Sie nennt nur Pro-Argumente.",
                        "Sie erzählt eine Geschichte.",
                        "Sie fasst einen Text zusammen."
                    ],
                    "correct": 0,
                    "explanation": "Dialektisch = beide Seiten werden abgewogen."
                },
                {
                    "id": "arguk8l2u_leicht_3",
                    "category": "kurs_argu_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "argumentieren",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wo steht dein eigenes Urteil?",
                    "answers": [
                        "im Schluss",
                        "in der Einleitung",
                        "im ersten Argument",
                        "in der Überschrift"
                    ],
                    "correct": 0,
                    "explanation": "Im Schluss beziehst du klar Stellung."
                },
                {
                    "id": "arguk8l2u_leicht_4",
                    "category": "kurs_argu_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "argumentieren",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Wort leitet ein Gegenargument ein?",
                    "answers": [
                        "dagegen",
                        "außerdem",
                        "folglich",
                        "zudem"
                    ],
                    "correct": 0,
                    "explanation": "dagegen zeigt die Gegenseite an."
                }
            ],
            "mittel": [
                {
                    "id": "arguk8l2u_mittel_1",
                    "category": "kurs_argu_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "argumentieren",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Linear erörtert: Wohin kommt das stärkste Argument?",
                    "answers": [
                        "ans Ende des Hauptteils",
                        "an den Anfang des Hauptteils",
                        "in die Einleitung",
                        "in den Schluss"
                    ],
                    "correct": 0,
                    "explanation": "Was zuletzt kommt, bleibt am besten im Kopf."
                },
                {
                    "id": "arguk8l2u_mittel_2",
                    "category": "kurs_argu_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "argumentieren",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was gehört in die Einleitung?",
                    "answers": [
                        "Anlass und Fragestellung",
                        "alle Argumente im Überblick",
                        "das eigene Fazit",
                        "die stärkste Gegenrede"
                    ],
                    "correct": 0,
                    "explanation": "Die Einleitung führt zum Thema und nennt die Frage."
                },
                {
                    "id": "arguk8l2u_mittel_3",
                    "category": "kurs_argu_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "argumentieren",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Was macht eine lineare Erörterung?",
                    "answers": [
                        "Sie stützt nur eine Seite.",
                        "Sie wägt beide Seiten ab.",
                        "Sie vergleicht zwei Texte.",
                        "Sie beschreibt ein Bild."
                    ],
                    "correct": 0,
                    "explanation": "Linear = Argumente für eine Position, steigernd geordnet."
                },
                {
                    "id": "arguk8l2u_mittel_4",
                    "category": "kurs_argu_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "argumentieren",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Wort fügt ein weiteres Argument an?",
                    "answers": [
                        "außerdem",
                        "dagegen",
                        "jedoch",
                        "trotzdem"
                    ],
                    "correct": 0,
                    "explanation": "außerdem reiht ein weiteres Argument an."
                }
            ],
            "schwer": [
                {
                    "id": "arguk8l2u_schwer_1",
                    "category": "kurs_argu_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "argumentieren",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "'Letztes Jahr wurden an unserer Schule 30 Räder gestohlen.' Art?",
                    "answers": [
                        "Faktenargument",
                        "Gefühlsargument",
                        "Scheinargument",
                        "Analogie"
                    ],
                    "correct": 0,
                    "explanation": "Es stützt sich auf eine nachprüfbare Zahl – Faktenargument."
                },
                {
                    "id": "arguk8l2u_schwer_2",
                    "category": "kurs_argu_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "argumentieren",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Schluss passt zur dialektischen Erörterung?",
                    "answers": [
                        "Abwägen und eigenes Urteil",
                        "nur das stärkste Pro",
                        "eine neue Frage ohne Antwort",
                        "ein neues Thema"
                    ],
                    "correct": 0,
                    "explanation": "Am Ende wägst du ab und beziehst Stellung."
                },
                {
                    "id": "arguk8l2u_schwer_3",
                    "category": "kurs_argu_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "argumentieren",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was ist beim Sanduhr-Prinzip richtig?",
                    "answers": [
                        "Erst eine Seite, dann die andere",
                        "Pro und Contra immer im Wechsel",
                        "Nur die Argumente der Gegenseite",
                        "Erst das Fazit, danach die Gründe"
                    ],
                    "correct": 0,
                    "explanation": "Sanduhr: erst alle Argumente der Gegenseite, dann die der eigenen Seite. Im Wechsel heißt Ping-Pong."
                },
                {
                    "id": "arguk8l2u_schwer_4",
                    "category": "kurs_argu_k8_l2",
                    "area": "schule",
                    "grade": 8,
                    "subject": "deutsch",
                    "topic": "argumentieren",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welches Wort zeigt eine Folge?",
                    "answers": [
                        "folglich",
                        "dagegen",
                        "außerdem",
                        "obwohl"
                    ],
                    "correct": 0,
                    "explanation": "folglich = daraus folgt."
                }
            ]
        },
        "test": [
            {
                "id": "arguk8l2_test_1",
                "category": "kurs_argu_k8_l2",
                "area": "schule",
                "grade": 8,
                "subject": "deutsch",
                "topic": "argumentieren",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ist das Ziel einer Erörterung?",
                "answers": [
                    "Abwägen und begründet urteilen",
                    "eine spannende Geschichte erzählen",
                    "einen fremden Text kürzen",
                    "schwierige Wörter erklären"
                ],
                "correct": 0,
                "explanation": "Man prüft Argumente und kommt zu einem Urteil."
            },
            {
                "id": "arguk8l2_test_2",
                "category": "kurs_argu_k8_l2",
                "area": "schule",
                "grade": 8,
                "subject": "deutsch",
                "topic": "argumentieren",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wo nennst du die Fragestellung?",
                "answers": [
                    "in der Einleitung",
                    "im Schluss",
                    "im letzten Argument",
                    "nirgends"
                ],
                "correct": 0,
                "explanation": "Die Frage gehört in die Einleitung."
            },
            {
                "id": "arguk8l2_test_3",
                "category": "kurs_argu_k8_l2",
                "area": "schule",
                "grade": 8,
                "subject": "deutsch",
                "topic": "argumentieren",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was bedeutet 'Ping-Pong-Prinzip'?",
                "answers": [
                    "Pro und Contra im Wechsel",
                    "Erst Pro, dann Contra",
                    "Nur eine Seite",
                    "Zwei Schlüsse"
                ],
                "correct": 0,
                "explanation": "Pro und Contra wechseln sich ab."
            },
            {
                "id": "arguk8l2_test_4",
                "category": "kurs_argu_k8_l2",
                "area": "schule",
                "grade": 8,
                "subject": "deutsch",
                "topic": "argumentieren",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Wort leitet einen Einwand ein?",
                "answers": [
                    "jedoch",
                    "außerdem",
                    "zudem",
                    "ebenso"
                ],
                "correct": 0,
                "explanation": "jedoch kündigt einen Gegensatz an."
            },
            {
                "id": "arguk8l2_test_5",
                "category": "kurs_argu_k8_l2",
                "area": "schule",
                "grade": 8,
                "subject": "deutsch",
                "topic": "argumentieren",
                "difficulty": "mittel",
                "points": 10,
                "question": "Linear erörtert: Wohin kommt das schwächste Argument?",
                "answers": [
                    "an den Anfang des Hauptteils",
                    "ans Ende des Hauptteils",
                    "in den Schluss",
                    "in die Einleitung"
                ],
                "correct": 0,
                "explanation": "Steigernd ordnen: schwach zuerst, stark zuletzt."
            },
            {
                "id": "arguk8l2_test_6",
                "category": "kurs_argu_k8_l2",
                "area": "schule",
                "grade": 8,
                "subject": "deutsch",
                "topic": "argumentieren",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ist eine lineare Erörterung?",
                "answers": [
                    "Argumente für eine Seite",
                    "Pro und Contra im Wechsel",
                    "eine Inhaltsangabe",
                    "ein persönlicher Brief"
                ],
                "correct": 0,
                "explanation": "Linear = eine Seite, steigernd geordnet."
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
